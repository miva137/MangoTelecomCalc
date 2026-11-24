// Функции, которые выбраны по умолчанию при открытии ВАТС
const DEFAULT_FEATURES = [
  "Безлимитная запись разговоров",
  "Интеграция Битрикс24 / amoCRM",
  "Облачное хранилище",
];

// Услуги, которые выбраны по умолчанию при открытии КЦ
const DEFAULT_KC_FEATURES = ["Доп.лицензия"];

// Текущий продукт и индексы выбранных строк ВАТС из DATA
let product = "vats";
let selected = [];
// Количества дополнительных услуг ВАТС по ключам; количества КЦ хранятся отдельно
const qtys = { n499: 0, n495: 0, nMobile: 0, profiles: 0, dialogs: 0 };
// Добавленные пункты номеров, профилей и диалогов в порядке выбора
let extras = [];

// Типы номеров: название, разовая и ежемесячная цена
const NUMBER_TYPES = [
  {
    id: "n499",
    label: "Виртуальный городской номер 499",
    once: 1050,
    monthly: 250,
  },
  {
    id: "n495",
    label: "Виртуальный городской номер в коде 495",
    once: 2650,
    monthly: 350,
  },
  {
    id: "nMobile",
    label: "Виртуальный мобильный номер",
    once: 950,
    monthly: 200,
  },
];

// Лимит номеров, номера без доплаты и плата за доп. номер (строки «Максимальное количество» и «сверх которого взимается плата» в vats.sql)
const NUMBER_RULES = {
  basic: { limit: 3, included: 3, fee: 0 },
  extended: { limit: 15, included: 15, fee: 0 },
  maximum: { limit: Infinity, included: 15, fee: 150 },
  start: { limit: 5, included: 5, fee: 0 },
  growth: { limit: 30, included: 10, fee: 150 },
  perspective: { limit: Infinity, included: Infinity, fee: 0 },
  virtual_number: { limit: 1, included: 1, fee: 0 },
};

// Дополнительные услуги для поиска ВАТС; ключ определяет поле количества в qtys
const EXTRA_ITEMS = [
  {
    key: "n499",
    label: "Виртуальный городской номер 499",
    text: "Виртуальный городской номер 499 (1 050 руб. разово, 250 руб./мес.)",
  },
  {
    key: "n495",
    label: "Виртуальный городской номер в коде 495",
    text: "Виртуальный городской номер в коде 495 (2 650 руб. разово, 350 руб./мес.)",
  },
  {
    key: "nMobile",
    label: "Виртуальный мобильный номер",
    text: "Виртуальный мобильный номер (950 руб. разово, 200 руб./мес.)",
  },
  {
    key: "profiles",
    label: "Доп. профили сотрудников",
    text: "Доп. профили сотрудников (сверх включённых)",
  },
  {
    key: "dialogs",
    label: "Манго Диалоги",
    text: "Манго Диалоги (1 000 руб./мес., доп. канал 1 000 руб./мес.)",
  },
];

// Базовая цена Манго Диалоги и цена каждого дополнительного канала в руб./мес.
const DIALOG_BASE = 1000,
  DIALOG_CHANNEL = 1000;

// Короткие помощники: поиск элемента по id, формат чисел, проверка и вывод значений
const VATS2_INTEGRATION_PARAMS = new Set([
  "Прямая интеграция с amoCRM",
  "Прямая интеграция с Битрикс24",
  "Расширенные возможности интеграции с amoCRM",
  "Расширенные возможности интеграции с Битрикс24",
  "Интеграция с 1С",
  "Интеграция через партнера с более чем 35 системами (1С, MS Excel и другие)",
  "Сервис автоматического копирования записей разговоров на внешний ftp",
  "Интеграция с LDAP",
  "Интеграция адресной книгой G Suite (Google)",
]);
const hasVats2Tariff = (cur, tgt) =>
  [cur, tgt].some((tariff) =>
    ["start", "growth", "perspective", "virtual_number"].includes(tariff),
  );

const DEFAULT_PROFILE_TARIFFS = new Set(["start", "growth", "perspective"]);
const INTEGRATION_PARAM = "Интеграция Битрикс24 / amoCRM";
const integrationVersions = {};
const profileQtys = { current: 0, target: 0 };

// Подключает дополнительный профиль сотрудника по умолчанию для тарифов ВАТС2
function applyDefaultProfile(cur, tgt) {
  if (
    product !== "vats" ||
    ![cur, tgt].some((tariff) => DEFAULT_PROFILE_TARIFFS.has(tariff))
  ) {
    return;
  }
  const profileIndex = DATA.vats.rows.findIndex(
    (r) => r.parameter === PROFILE_PARAM,
  );
  if (profileIndex >= 0 && !selected.includes(profileIndex)) {
    selected.push(profileIndex);
  }
  if (profileQtys.current === 0) profileQtys.current = 1;
  if (profileQtys.target === 0) profileQtys.target = 1;
  if (qtys.profiles === 0) qtys.profiles = 1;
}

// Режим «Стоимость тарифа»: показывается только текущий тариф
const isSingle = () => $("mode").value === "cost";

// Перерисовывает все блоки после изменения выбора или ввода
function update() {
  refreshSelects();
  const single = isSingle();
  document.body.classList.toggle("single", single);
  $("targetField").hidden = single;
  $("currentLabel").textContent = single ? "Тариф" : "Текущий тариф";
  renderChips();
  render();
  renderKc();
}

// Выводит список выбранных функций ВАТС с кнопкой удаления
function renderChips() {
  const ul = $("chips");
  ul.replaceChildren();
  const cur = $("current").value;
  const tgt = isSingle() ? cur : $("target").value;
  if (
    product === "vats" &&
    packageOn &&
    [cur, tgt].some((tariff) => tariff !== "virtual_number")
  ) {
    ul.appendChild(
      makeChip(PACKAGE_LABEL, () => {
        packageOn = false;
        update();
      }),
    );
  }
  extras.forEach((key) => {
    ul.appendChild(
      makeChip(EXTRA_ITEMS.find((x) => x.key === key).label, () => {
        extras = extras.filter((x) => x !== key);
        qtys[key] = 0;
        update();
      }),
    );
  });
  selected.forEach((idx) => {
    const parameter = DATA[product].rows[idx].parameter;
    if (
      product === "vats" &&
      VATS2_INTEGRATION_PARAMS.has(parameter) &&
      !hasVats2Tariff(cur, tgt)
    )
      return;
    ul.appendChild(
      makeChip(parameter, () => {
        selected = selected.filter((x) => x !== idx);
        update();
      }),
    );
  });
}

// Строит основную таблицу сравнения ВАТС, строки номеров и профилей, а также итоги
function render() {
  const d = DATA[product];
  const cur = $("current").value,
    tgt = isSingle() ? cur : $("target").value;
  $("colCur").textContent =
    (isSingle() ? "Тариф: " : "Текущий тариф: ") + TARIFF_LABELS[cur];
  $("colTgt").textContent = "Новый тариф: " + TARIFF_LABELS[tgt];

  // Очищает и заново заполняет таблицу ВАТС
  const body = $("body");
  body.replaceChildren();
  let curSum = 0,
    tgtSum = 0;
  // Ячейка колонки разового платежа; видна только в режиме расчёта
  const onceTd = (text = "") => {
    const td = document.createElement("td");
    td.className = "once-col";
    td.textContent = text;
    return td;
  };
  // Строки функций: суммируем руб./мес. для текущего и нового тарифа
  [0, ...selected].forEach((idx) => {
    const r = d.rows[idx];
    if (
      product === "vats" &&
      VATS2_INTEGRATION_PARAMS.has(r.parameter) &&
      !hasVats2Tariff(cur, tgt)
    )
      return;
    const key = "v" + idx;
    const isKcLicense = product === "kc" && r.parameter === "Доп.лицензия";
    const licenseValue = (value) => {
      const parsed = isKcLicense && parseValue(value);
      return parsed
        ? fmt(parsed.num * qtys.kcLicense) + " " + parsed.unit
        : value;
    };
    // Битрикс24 / amoCRM: скидка текущего не применяется, если текущий тариф базовый (то же для нового)
    const isBitrix = /Битрикс24/.test(r.parameter);
    const noDiscC = isBitrix && cur === "basic",
      noDiscT = isBitrix && tgt === "basic";
    const pctC = noDiscC ? 0 : discPct(key + "c"),
      pctT = noDiscT ? 0 : discPct(key + "t");
    const curT = discountText(licenseValue(rowValue(r, cur, "current")), pctC),
      tgtT = discountText(licenseValue(rowValue(r, tgt, "target")), pctT);
    const includeC = includePct(key + "c"),
      includeT = includePct(key + "t");
    const c =
      includeC && includeT
        ? compare(curT, tgtT)
        : { text: "не учитывается", cls: "" };
    const pc = parseValue(curT),
      pt = parseValue(tgtT);
    if (includeC && pc && pc.unit === "руб./мес.") curSum += pc.num;
    if (includeT && pt && pt.unit === "руб./мес.") tgtSum += pt.num;
    const tr = document.createElement("tr");
    const first = document.createElement("td");
    first.textContent = show(
      isStorage(r) ? "Облачное хранилище" : r.parameter,
    );
    if (isKcLicense) {
      const input = document.createElement("input");
      input.className = "qty";
      input.type = "text";
      input.inputMode = "numeric";
      input.id = "qty-kc-license";
      input.setAttribute("aria-label", "Количество дополнительных лицензий");
      input.value = qtys.kcLicense;
      input.oninput = (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
        qtys.kcLicense = Math.floor(Number(e.target.value) || 0);
        update();
        const again = $("qty-kc-license");
        again.focus();
        again.setSelectionRange(again.value.length, again.value.length);
      };
      first.append(" × ", input);
    }
    tr.appendChild(first);
    tr.appendChild(
      r.parameter === INTEGRATION_PARAM
        ? integrationPriceCell(cur, "current", curT)
        : r.parameter === PROFILE_PARAM
          ? profilePriceCell("current", curT)
          : storagePriceCell(isStorage(r) ? cur : "", curT),
    );
    tr.appendChild(includeCell(key + "c"));
    tr.appendChild(discountCell(key + "c", noDiscC));
    tr.appendChild(
      r.parameter === INTEGRATION_PARAM
        ? integrationPriceCell(tgt, "target", tgtT)
        : r.parameter === PROFILE_PARAM
          ? profilePriceCell("target", tgtT)
          : storagePriceCell(isStorage(r) ? tgt : "", tgtT),
    );
    tr.appendChild(includeCell(key + "t"));
    tr.appendChild(discountCell(key + "t", noDiscT));
    const diff = document.createElement("td");
    diff.textContent = c.text;
    diff.className = c.cls;
    tr.appendChild(diff);
    tr.appendChild(onceTd());
    body.appendChild(tr);
  });

  // Пакет на связь: для тарифа «Виртуальный номер» недоступен
  const packageAvailable = (tariff) => tariff !== "virtual_number";
  if (
    product === "vats" &&
    packageOn &&
    (packageAvailable(cur) || packageAvailable(tgt))
  ) {
    const curPkg = PACKAGE_PLANS[packageState.current];
    const tgtPkg = PACKAGE_PLANS[packageState.target];
    const curAvailable = packageAvailable(cur);
    const tgtAvailable = packageAvailable(tgt);
    const dCur = curAvailable
      ? round2(curPkg.price * (1 - discPct("pkgc") / 100))
      : 0;
    const dTgt = tgtAvailable
      ? round2(tgtPkg.price * (1 - discPct("pkgt") / 100))
      : 0;
    const curText = curAvailable ? fmt(dCur) + " руб./мес." : "—";
    const tgtText = tgtAvailable ? fmt(dTgt) + " руб./мес." : "—";
    const tr = document.createElement("tr");
    const first = document.createElement("td");
    first.textContent = PACKAGE_LABEL;
    tr.appendChild(first);
    tr.appendChild(packagePriceCell("current", curText, curAvailable));
    tr.appendChild(includeCell("pkgc"));
    tr.appendChild(discountCell("pkgc", false));
    tr.appendChild(packagePriceCell("target", tgtText, tgtAvailable));
    tr.appendChild(includeCell("pkgt"));
    tr.appendChild(discountCell("pkgt", false));
    const diff = document.createElement("td");
    const c =
      includePct("pkgc") && includePct("pkgt")
        ? compare(curText, tgtText)
        : { text: "не учитывается", cls: "" };
    diff.textContent = c.text;
    diff.className = c.cls;
    tr.appendChild(diff);
    tr.appendChild(onceTd());
    body.appendChild(tr);
    if (includePct("pkgc")) curSum += dCur;
    if (includePct("pkgt")) tgtSum += dTgt;
  }

  // Строки добавленных номеров и доп. профилей: количество задаётся прямо в строке
  let extraCur = 0,
    extraTgt = 0,
    extraOnce = 0;
  if (product === "vats")
    extras.forEach((key) => {
      const item = EXTRA_ITEMS.find((x) => x.key === key);
      const t = NUMBER_TYPES.find((x) => x.id === key);
      const isProfile = key === "profiles";
      const isDialog = key === "dialogs";
      // Виртуальные мобильные номера: скидка не применяется
      const kC = key === "nMobile" ? 1 : 1 - discPct("x" + key + "c") / 100;
      const kT = key === "nMobile" ? 1 : 1 - discPct("x" + key + "t") / 100;
      const baseCur = isProfile
        ? qtys.profiles * profilePrice(cur)
        : isDialog
          ? dialogCost()
          : t.monthly * qtys[key];
      const baseTgt = isProfile
        ? qtys.profiles * profilePrice(tgt)
        : isDialog
          ? dialogCost()
          : t.monthly * qtys[key];
      // Надбавка за номера сверх лимита добавляется после скидки
      const surCur =
        isProfile || isDialog
          ? 0
          : feeQty(cur, key) * (NUMBER_RULES[cur]?.fee || 0);
      const surTgt =
        isProfile || isDialog
          ? 0
          : feeQty(tgt, key) * (NUMBER_RULES[tgt]?.fee || 0);
      const dCur = round2(baseCur * kC) + surCur;
      const dTgt = round2(baseTgt * kT) + surTgt;
      if (includePct("x" + key + "c")) extraCur += dCur;
      if (includePct("x" + key + "t")) extraTgt += dTgt;
      const onceAmt = isProfile || isDialog ? 0 : t.once * qtys[key];
      if (includePct("x" + key + "c") || includePct("x" + key + "t"))
        extraOnce += onceAmt;
      const once =
        isSingle() || isDialog ? "" : " + разово " + fmt(onceAmt) + " руб.";
      const curText = isProfile
        ? fmt(dCur) + " руб./мес."
        : isDialog
          ? dialogText(dCur)
          : fmt(dCur) + " руб./мес." + once;
      const tgtText = isProfile
        ? fmt(dTgt) + " руб./мес."
        : isDialog
          ? dialogText(dTgt)
          : fmt(dTgt) + " руб./мес." + once;
      const tr = document.createElement("tr");
      const first = document.createElement("td");
      const input = document.createElement("input");
      input.className = "qty";
      input.type = "text";
      input.inputMode = "numeric";
      input.id = "qty-" + key;
      input.value = qtys[key];
      // Количество меняется прямо в строке; фокус возвращается в поле после перерисовки
      input.oninput = (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
        qtys[key] = Math.floor(Number(e.target.value) || 0);
        update();
        const again = $("qty-" + key);
        again.focus();
        again.setSelectionRange(again.value.length, again.value.length);
      };
      first.append(item.label + (isDialog ? " и доп. каналы: " : " × "), input);
      const fee = NUMBER_RULES[cur]?.fee || NUMBER_RULES[tgt]?.fee || 0;
      if (
        !isProfile &&
        !isDialog &&
        fee &&
        (feeQty(cur, key) || feeQty(tgt, key))
      ) {
        first.append(
          document.createElement("br"),
          `сверх лимита ${fmt(t.monthly + fee)} руб./мес. за номер`,
        );
      }
      tr.appendChild(first);
      tr.appendChild(textCell(curText));
      tr.appendChild(includeCell("x" + key + "c"));
      tr.appendChild(discountCell("x" + key + "c", key === "nMobile"));
      tr.appendChild(textCell(tgtText));
      tr.appendChild(includeCell("x" + key + "t"));
      tr.appendChild(discountCell("x" + key + "t", key === "nMobile"));
      const c =
        includePct("x" + key + "c") && includePct("x" + key + "t")
          ? compare(curText, tgtText)
          : { text: "не учитывается", cls: "" };
      const diff = document.createElement("td");
      diff.textContent = c.text;
      diff.className = c.cls;
      tr.appendChild(diff);
      tr.appendChild(onceTd(isProfile ? "" : fmt(onceAmt) + " руб."));
      body.appendChild(tr);
    });

  curSum += extraCur;
  tgtSum += extraTgt;
  // Предупреждение о превышении включённых номеров и лимита тарифа
  const numberWarnings = [...new Set([cur, tgt])]
    .map((k) => {
      const n = numbersFor(k);
      const rule = NUMBER_RULES[k];
      if (n.exceeded)
        return `На тарифе «${TARIFF_LABELS[k]}» допускается не более ${n.limit} номера (сейчас ${n.total}).`;
      if (rule && n.total > rule.included && n.overFee > 0)
        return `На тарифе «${TARIFF_LABELS[k]}» включено ${rule.included} номеров; сверх них каждый номер стоит +${rule.fee} руб./мес. (сейчас ${n.total}, доплата ${fmt(n.overFee)} руб./мес.).`;
      return "";
    })
    .filter(Boolean);
  if ([cur, tgt].includes("virtual_number") && qtys.nMobile > 0) {
    numberWarnings.push(
      "На тарифе «Виртуальный номер» доступно подключение только городского номера.",
    );
  }
  if ([cur, tgt].includes("virtual_number")) {
    numberWarnings.push(
      "К тарифу «Виртуальный номер» подключение КЦ недоступно.",
    );
  }
  $("numbersWarn").textContent = numberWarnings.join(" ");

  // Итоговая строка с разницей в руб./мес.
  const diffSum = tgtSum - curSum;
  const cells = [
    "Итого в месяц",
    fmt(curSum) + " руб./мес.",
    "",
    "",
    fmt(tgtSum) + " руб./мес.",
    "",
    "",
    (diffSum > 0 ? "+" : "") + fmt(diffSum) + " руб./мес.",
    fmt(extraOnce) + " руб.",
  ];
  const tr = document.createElement("tr");
  cells.forEach((text, i) => {
    const td = document.createElement("td");
    td.textContent = text;
    if (i === 7 && diffSum !== 0) td.className = diffSum > 0 ? "pos" : "neg";
    if (i === 8) td.className = "once-col";
    tr.appendChild(td);
  });
  mainTotals = { cur: curSum, tgt: tgtSum };
  $("foot").replaceChildren(tr);
}

// Подключает выпадающий список подсказок к полю ввода; возвращает функцию его скрытия
function bindSuggest(inputId, listId, rowsFn, onEnter) {
  const input = $(inputId),
    list = $(listId);
  let items = [],
    active = -1;
  // Закрывает список подсказок
  const hide = () => list.classList.remove("open");
  const pick = (i) => {
    input.value = items[i].text;
    hide();
  };
  // Фильтрует по введённому тексту; пустое поле показывает весь список
  const show = () => {
    const q = input.value.trim().toLowerCase();
    items = rowsFn().filter((r) => r.text.toLowerCase().includes(q));
    active = -1;
    list.replaceChildren(
      ...items.map((r, i) => {
        const li = document.createElement("li");
        li.textContent = r.text;
        li.onmousedown = (e) => {
          e.preventDefault();
          pick(i);
        };
        return li;
      }),
    );
    list.classList.toggle("open", items.length > 0);
  };
  input.oninput = show;
  input.onfocus = show;
  input.onclick = show;
  input.onblur = hide;
  // Навигация стрелками, выбор Enter и закрытие Escape
  input.onkeydown = (e) => {
    const lis = list.children;
    if (e.key === "Enter") {
      e.preventDefault();
      if (list.classList.contains("open") && active >= 0) pick(active);
      onEnter();
      return;
    }
    if (!list.classList.contains("open")) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      active =
        (active + (e.key === "ArrowDown" ? 1 : -1) + lis.length) % lis.length;
      [...lis].forEach((li, i) => li.classList.toggle("active", i === active));
    } else if (e.key === "Escape") {
      hide();
    }
  };
  return hide;
}

// Список функций продукта для подсказок (без первой строки с абонентской платой)
function featureRows(prod) {
  const rows = DATA[prod].rows
    .map((r, idx) => ({ text: r.parameter, idx }))
    .filter(
      (row) =>
        prod !== "vats" ||
        !VATS2_INTEGRATION_PARAMS.has(row.text) ||
        hasVats2Tariff(
          $("current").value,
          isSingle() ? $("current").value : $("target").value,
        ),
    )
    .slice(1);
  return prod === "vats"
    ? rows.concat(
        [{ text: PACKAGE_LABEL, extra: "package" }],
        EXTRA_ITEMS.map((x) => ({ text: x.text, extra: x.key })),
      )
    : rows;
}

// Добавляет функцию из поля ввода в список по точному названию и перерисовывает
function addFeature(inputId, prod, list, rerender) {
  const text = $(inputId).value.trim().toLowerCase();
  if (prod === "vats" && text === PACKAGE_LABEL.toLowerCase()) {
    packageOn = true;
    $(inputId).value = "";
    rerender();
    return;
  }
  // Пункт номеров или профиля добавляется в extras, а не в строки DATA
  const extra =
    prod === "vats"
      ? EXTRA_ITEMS.find((x) => x.text.toLowerCase() === text)
      : null;
  if (extra) {
    if (!extras.includes(extra.key)) extras.push(extra.key);
    $(inputId).value = "";
    rerender();
    return;
  }
  const idx = DATA[prod].rows.findIndex(
    (r, i) => i > 0 && r.parameter.toLowerCase() === text,
  );
  if (idx < 0) return;
  if (!list.includes(idx)) {
    list.push(idx);
    // Для КЦ при добавлении "Доп.лицензия" устанавливаем количество по умолчанию на 0
    if (prod === "kc" && DATA[prod].rows[idx].parameter === "Доп.лицензия") {
      if (list === kcState.selected) kcState.qty[idx] = 0;
      else qtys.kcLicense = 0;
    }
    $(inputId).value = "";
  }
  rerender();
}

// Заполняет выбор тарифов ВАТС, выбирает функции по умолчанию и запускает первую отрисовку
function init() {
  const d = DATA[product];
  $("current").replaceChildren(
    ...d.tariffs.map((k) => new Option(TARIFF_LABELS[k], k)),
  );
  $("target").replaceChildren(
    ...d.tariffs.map((k) => new Option(TARIFF_LABELS[k], k)),
  );
  // По умолчанию новый тариф - второй в списке
  $("target").selectedIndex = Math.min(1, d.tariffs.length - 1);
  // Сбрасывает добавленные номера и профили при переключении продукта
  extras = [];
  packageOn = true;
  Object.keys(qtys).forEach((k) => {
    qtys[k] = 0;
  });
  Object.keys(storageState).forEach((k) => {
    delete storageState[k];
  });
  Object.keys(integrationVersions).forEach((k) => {
    delete integrationVersions[k];
  });
  profileQtys.current = 0;
  profileQtys.target = 0;
  $("feature").value = "";
  hideSuggestions();
  // Выбор функций по умолчанию по названиям из DEFAULT_FEATURES
  selected = d.rows
    .map((r, i) => i)
    .filter(
      (i) =>
        i > 0 &&
        (product === "kc" ? DEFAULT_KC_FEATURES : DEFAULT_FEATURES).includes(
          d.rows[i].parameter,
        ),
    );
  qtys.kcLicense = 0;
  if (product === "vats") {
    applyDefaultProfile($("current").value, $("target").value);
  }
  update();
}

// Переключение продукта ВАТС / КЦ с полной переинициализацией
$("product").onchange = (e) => {
  product = e.target.value;
  init();
};
$("current").onchange = () => {
  if (product === "vats") {
    applyDefaultProfile($("current").value, $("target").value);
  }
  update();
};
$("target").onchange = () => {
  if (product === "vats") {
    applyDefaultProfile($("current").value, $("target").value);
  }
  update();
};
$("mode").onchange = update;
// Количество номеров и профилей задаётся в строках таблицы
// Подсказки для поля поиска функций ВАТС
const hideSuggestions = bindSuggest(
  "feature",
  "suggestList",
  () => featureRows(product),
  () => $("add").click(),
);
// Кнопка добавления функции ВАТС в сравнение
$("add").onclick = () => addFeature("feature", product, selected, update);

// Итоги ВАТС без КЦ (текущий и новый тариф), нужны для блока ВАТС + КЦ
let mainTotals = { cur: 0, tgt: 0 };
// Выбранные функции КЦ и количества строк с настраиваемым числом единиц
const kcState = { selected: [], qty: {} };
// Скидки по строкам: v+индекс (ВАТС), k+индекс (КЦ), x+ключ (дополнительные услуги)
const rowDiscount = {};
// Независимое включение строк в итог сравнения для текущего и нового тарифа
const rowInclude = {};
const includePct = (key) => rowInclude[key] !== false;
// Возвращает процент скидки строки
const discPct = (key) => rowDiscount[key] || 0;
// Округляет до копеек
const round2 = (n) => Math.round(n * 100) / 100;

// Пересчитывает денежное значение строки со скидкой; прочие значения не меняет
function discountText(text, pct) {
  const p = parseValue(text);
  if (!pct || !p || !p.unit.startsWith("руб")) return text;
  return fmt(round2(p.num * (1 - pct / 100))) + " " + p.unit;
}

// Ячейка ввода скидки в процентах; для недоступных строк остаётся пустой
function discountCell(key, disabled) {
  const td = document.createElement("td");
  if (disabled) return td;
  const input = document.createElement("input");
  input.className = "qty";
  input.type = "text";
  input.inputMode = "numeric";
  input.placeholder = "0";
  input.id = "disc-" + key;
  input.value = rowDiscount[key] || "";
  input.oninput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 3);
    rowDiscount[key] = Math.min(100, Number(e.target.value) || 0);
    update();
    const again = $("disc-" + key);
    again.focus();
    again.setSelectionRange(again.value.length, again.value.length);
  };
  td.appendChild(input);
  return td;
}

// Радио-кнопка включения одного тарифа в итог сравнения
function includeCell(key) {
  const td = document.createElement("td");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = "include-radio";
  input.checked = includePct(key);
  input.setAttribute("aria-label", "Учитывать пункт в сравнении");
  input.onchange = (e) => {
    rowInclude[key] = e.target.checked;
    update();
  };
  td.appendChild(input);
  return td;
}

// Тарифы облачного хранилища по объёму и цене
const STORAGE_PLANS = [
  { gb: 0.05, price: 0 },
  { gb: 1, price: 190 },
  { gb: 5, price: 490 },
  { gb: 10, price: 980 },
  { gb: 15, price: 1470 },
  { gb: 20, price: 1960 },
  { gb: 25, price: 2450 },
  { gb: 30, price: 2940 },
  { gb: 35, price: 3430 },
  { gb: 40, price: 3920 },
  { gb: 45, price: 4410 },
  { gb: 50, price: 4900 },
  { gb: 55, price: 5390 },
  { gb: 60, price: 5880 },
  { gb: 65, price: 6370 },
  { gb: 70, price: 6860 },
  { gb: 75, price: 7350 },
  { gb: 80, price: 7840 },
  { gb: 85, price: 8330 },
  { gb: 90, price: 8820 },
  { gb: 95, price: 9310 },
  { gb: 100, price: 9800 },
];
const VATS2_STORAGE_INCLUDED = {
  start: 1,
  growth: 10,
  perspective: 30,
};
// Выбранный объём для каждого тарифа
const storageState = {};
// Строка облачного хранилища, цена которой зависит от объёма
const isStorage = (r) => r.parameter.startsWith("Облачное хранилище");
function storageIncluded(tariff) {
  return VATS2_STORAGE_INCLUDED[tariff] ?? 0.05;
}
function storageOptions(tariff) {
  if (VATS2_STORAGE_INCLUDED[tariff]) {
    const options = [0];
    for (let gb = 5; gb <= 100; gb += 5) options.push(gb);
    return options;
  }
  return STORAGE_PLANS.map((plan) => plan.gb);
}
function storageExtraCost(tariff, gb) {
  const included = VATS2_STORAGE_INCLUDED[tariff];
  if (!included) {
    return STORAGE_PLANS.find((plan) => plan.gb === gb)?.price ?? 190;
  }
  const extraBlocks = gb / 5;
  return extraBlocks * 490;
}
// Значение строки для тарифа; для хранилища с ценой (руб.) - цена выбранного объёма
function rowValue(r, tariff, column = "current") {
  if (r.parameter === PROFILE_PARAM && !isUnavailable(r.values[tariff]))
    return (
      fmt(round2(profilePrice(tariff) * profileQtys[column])) + " руб./мес."
    );
  if (r.parameter === INTEGRATION_PARAM)
    return integrationVersions[column] === "extended"
      ? r.extendedValues[tariff]
      : r.values[tariff];
  if (!isStorage(r)) return r.values[tariff];
  if (!VATS2_STORAGE_INCLUDED[tariff] && !/руб/.test(r.values[tariff]))
    return r.values[tariff];
  const gb =
    storageState[tariff] ??
    (VATS2_STORAGE_INCLUDED[tariff] ? 0 : storageIncluded(tariff));
  return fmt(storageExtraCost(tariff, gb)) + " руб./мес.";
}
// Выпадающий выбор объёма облачного хранилища в названии функции
function storageSelect(tariff) {
  const sel = document.createElement("select");
  sel.id = tariff ? "storage-" + tariff : "storage";
  storageOptions(tariff).forEach((gb) => {
    if (VATS2_STORAGE_INCLUDED[tariff]) {
      sel.add(
        new Option(
          gb === 0
            ? storageIncluded(tariff) + " ГБ включено"
            : storageIncluded(tariff) +
                " ГБ включено, +" +
                gb +
                " ГБ дополнительно",
          gb,
        ),
      );
    } else {
      const label = gb === 0.05 ? "50 МБ" : gb + " ГБ";
      sel.add(new Option(label, gb));
    }
  });
  sel.value =
    storageState[tariff] ??
    (VATS2_STORAGE_INCLUDED[tariff] ? 0 : storageIncluded(tariff));
  sel.onchange = () => {
    storageState[tariff] = Number(sel.value);
    update();
  };
  return customSelect(sel);
}
function integrationVersionSelect(column) {
  const select = document.createElement("select");
  select.id = "integration-version-" + column;
  select.add(new Option("Базовая", "basic"));
  select.add(new Option("Расширенная", "extended"));
  select.value = integrationVersions[column] ?? "basic";
  select.onchange = () => {
    integrationVersions[column] = select.value;
    update();
  };
  return customSelect(select);
}
// Пакеты на связь с ежемесячной ценой
const PACKAGE_PLANS = [
  { label: "300 руб./мес.", price: 300 },
  { label: "600 руб./мес.", price: 600 },
  { label: "2 500 руб./мес.", price: 2500 },
  { label: "10 000 руб./мес. (посекундный)", price: 10000 },
  { label: "17 000 руб./мес. (посекундный)", price: 17000 },
  { label: "35 000 руб./мес. (посекундный)", price: 35000 },
  { label: "50 000 руб./мес. (посекундный)", price: 50000 },
  { label: "100 000 руб./мес. (посекундный)", price: 100000 },
];
const packageState = { current: 0, target: 0 };
// Пакет на связь включён по умолчанию; удаляется кнопкой в строке таблицы
let packageOn = true;
const PACKAGE_LABEL = "Пакет на связь";
function packageSelect(column) {
  const sel = document.createElement("select");
  sel.id = "package-" + column;
  PACKAGE_PLANS.forEach((p, i) => sel.add(new Option(p.label, i)));
  sel.value = packageState[column];
  sel.onchange = () => {
    packageState[column] = Number(sel.value);
    update();
  };
  return customSelect(sel);
}
function packagePriceCell(column, text, available) {
  const td = document.createElement("td");
  td.classList.add("storage-price-cell", "wide-select-cell");
  const price = document.createElement("div");
  price.className = "storage-price";
  price.textContent = text;
  td.appendChild(price);
  if (available) td.appendChild(packageSelect(column));
  return td;
}
// Поле количества доп. профилей в строке стоимости профиля; делит значение с блоком доп. профилей
function profileQtyInput(column) {
  const input = document.createElement("input");
  input.className = "qty";
  input.type = "text";
  input.inputMode = "numeric";
  input.id = "qty-profile-row-" + column;
  input.setAttribute("aria-label", "Количество дополнительных профилей");
  input.value = profileQtys[column];
  input.oninput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
    profileQtys[column] = Math.floor(Number(e.target.value) || 0);
    update();
    const again = $("qty-profile-row-" + column);
    again.focus();
    again.setSelectionRange(again.value.length, again.value.length);
  };
  return input;
}
function profilePriceCell(column, text) {
  const td = document.createElement("td");
  td.classList.add("storage-price-cell", "profile-price-cell");
  const price = document.createElement("div");
  price.className = "storage-price";
  price.textContent = text;
  td.appendChild(price);
  td.appendChild(profileQtyInput(column));
  return td;
}

// Ячейка цены хранилища с выбором объёма
function storagePriceCell(tariff, text) {
  const td = document.createElement("td");
  td.classList.add("storage-price-cell");
  const price = document.createElement("div");
  price.className = "storage-price";
  price.textContent = text;
  td.appendChild(price);
  if (tariff) td.appendChild(storageSelect(tariff));
  return td;
}
function integrationPriceCell(tariff, column, text) {
  const td = document.createElement("td");
  const hasVersionSelector = !VATS2_STORAGE_INCLUDED[tariff];
  if (hasVersionSelector)
    td.classList.add("storage-price-cell", "wide-select-cell");
  const price = document.createElement("div");
  price.className = "storage-price";
  price.textContent = text;
  td.appendChild(price);
  if (hasVersionSelector) td.appendChild(integrationVersionSelect(column));
  return td;
}

// Ячейка с текстом значения строки
function textCell(text) {
  const td = document.createElement("td");
  td.textContent = text;
  return td;
}

// Выводит список выбранных функций КЦ с кнопкой удаления
function renderKcChips() {
  const ul = $("kcChips");
  ul.replaceChildren();
  kcState.selected.forEach((idx) => {
    const param = DATA.kc.rows[idx].parameter;
    ul.appendChild(
      makeChip(param, () => {
        kcState.selected = kcState.selected.filter((x) => x !== idx);
        // Количество удалённой строки больше не участвует в расчёте КЦ
        delete kcState.qty[idx];
        renderKc();
      }),
    );
  });
}

// Показывает или скрывает блок КЦ и строит его таблицу и итоги
function renderKc() {
  refreshSelects();
  const kcUnavailable =
    product === "vats" && isSingle() && $("current").value === "virtual_number";
  if (kcUnavailable) $("addKc").checked = false;
  // Блок КЦ виден только для ВАТС и при включённом флажке
  const on = product === "vats" && !kcUnavailable && $("addKc").checked;
  $("kcToggle").hidden = product !== "vats" || kcUnavailable;
  $("kcCard").hidden = !on;
  $(on ? "kcExportHost" : "mainExportHost").appendChild(
    $("exportControls"),
  );
  $("kcCard").classList.toggle(
    "kc-current-unavailable",
    on && $("current").value === "virtual_number",
  );
  $("kcCard").classList.toggle(
    "kc-target-unavailable",
    on && !isSingle() && $("target").value === "virtual_number",
  );
  $("kcCurrent").closest(".field").hidden =
    on && $("current").value === "virtual_number";
  $("kcTarget").closest(".field").hidden =
    on && !isSingle() && $("target").value === "virtual_number";
  if (!on) return;
  // Если КЦ был выключен, инициализируем при первом включении
  if (kcState.selected.length === 0) {
    console.log("renderKc: инициализирую услуги КЦ");
    DATA.kc.rows.forEach((r, i) => {
      if (i > 0 && DEFAULT_KC_FEATURES.includes(r.parameter)) {
        kcState.selected.push(i);
        kcState.qty[i] = 0;
        console.log(`renderKc: добавлена услуга ${i}`);
      }
    });
    console.log("renderKc: kcState после инициализации:", kcState);
  }
  const single = isSingle();
  $("kcTargetField").hidden =
    single || $("target").value === "virtual_number";
  const cur = $("kcCurrent").value,
    tgt = single ? $("kcCurrent").value : $("kcTarget").value;
  $("kcColCur").textContent =
    (single ? "Тариф: " : "Текущий: ") + TARIFF_LABELS[cur];
  $("kcColTgt").textContent = "Новый: " + TARIFF_LABELS[tgt];
  renderKcChips();
  // Таблица КЦ: выбранные функции и суммы КЦ
  const body = $("kcBody");
  body.replaceChildren();
  let curSum = 0,
    tgtSum = 0;
  console.log(
    "renderKc: начинаю отрисовку таблицы, kcState.selected:",
    kcState.selected,
  );
  const kcCurrentUnavailable = $("current").value === "virtual_number";
  const kcTargetUnavailable =
    !single && $("target").value === "virtual_number";
  [0, ...kcState.selected].forEach((idx) => {
    const r = DATA.kc.rows[idx];
    const key = "k" + idx;
    const isLicense = r.parameter === "Доп.лицензия";
    console.log(`Строка ${idx}: "${r.parameter}" - isLicense: ${isLicense}`);
    const qty = isLicense ? kcState.qty[idx] || 0 : 1;
    // Для лицензий нужно умножить цену на количество
    const getAdjustedValue = (value) => {
      if (!isLicense) return value;
      const p = parseValue(value);
      if (!p) return value;
      return fmt(p.num * qty) + " " + p.unit;
    };
    const curVal = kcCurrentUnavailable ? "—" : getAdjustedValue(r.values[cur]);
    const tgtVal = kcTargetUnavailable ? "—" : getAdjustedValue(r.values[tgt]);
    const curT = kcCurrentUnavailable
        ? "—"
        : discountText(curVal, discPct(key + "c")),
      tgtT = kcTargetUnavailable
        ? "—"
        : discountText(tgtVal, discPct(key + "t"));
    const includeC = !kcCurrentUnavailable && includePct(key + "c"),
      includeT = !kcTargetUnavailable && includePct(key + "t");
    const c = kcCurrentUnavailable
      ? includeT && !isUnavailable(tgtT)
        ? compare("0 руб./мес.", tgtT)
        : { text: "не учитывается", cls: "" }
      : kcTargetUnavailable
        ? includeC && !isUnavailable(curT)
          ? compare(curT, "0 руб./мес.")
          : { text: "не учитывается", cls: "" }
        : includeC && includeT
          ? compare(curT, tgtT)
          : { text: "не учитывается", cls: "" };
    const pc = parseValue(curT),
      pt = parseValue(tgtT);
    if (includeC && pc && pc.unit === "руб./мес.") curSum += pc.num;
    if (includeT && pt && pt.unit === "руб./мес.") tgtSum += pt.num;
    const tr = document.createElement("tr");
    const first = document.createElement("td");
    // Для лицензий добавляем поле ввода количества (как для номеров)
    if (isLicense) {
      console.log("Добавляю поле ввода для лицензий");
      const input = document.createElement("input");
      input.className = "qty";
      input.type = "text";
      input.inputMode = "numeric";
      input.id = "kc-qty-" + idx;
      input.value = kcState.qty[idx] || 0;
      input.oninput = (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
        kcState.qty[idx] = Math.floor(Number(e.target.value) || 0);
        renderKc();
        const again = $("kc-qty-" + idx);
        if (again) {
          again.focus();
          again.setSelectionRange(again.value.length, again.value.length);
        }
      };
      first.append(r.parameter + " × ", input);
    } else {
      first.textContent = r.parameter;
    }
    tr.appendChild(first);
    tr.appendChild(textCell(curT));
    tr.appendChild(includeCell(key + "c"));
    tr.appendChild(discountCell(key + "c", false));
    tr.appendChild(textCell(tgtT));
    tr.appendChild(includeCell(key + "t"));
    tr.appendChild(discountCell(key + "t", false));
    const diff = document.createElement("td");
    diff.textContent = c.text;
    diff.className = c.cls;
    tr.appendChild(diff);
    body.appendChild(tr);
  });
  // Итоги КЦ и итог ВАТС + КЦ
  $("kcFoot").replaceChildren(
    kcTotalRow("Итого КЦ", curSum, tgtSum),
    kcTotalRow(
      "Итого ВАТС + КЦ",
      mainTotals.cur + curSum,
      mainTotals.tgt + tgtSum,
    ),
  );
}

// Заполняет выбор тарифов КЦ, сбрасывает выбранные функции и перерисовывает блок
function kcInit() {
  $("kcCurrent").replaceChildren(
    ...DATA.kc.tariffs.map((k) => new Option(TARIFF_LABELS[k], k)),
  );
  $("kcTarget").replaceChildren(
    ...DATA.kc.tariffs.map((k) => new Option(TARIFF_LABELS[k], k)),
  );
  $("kcTarget").selectedIndex = Math.min(1, DATA.kc.tariffs.length - 1);
  kcState.selected = [];
  kcState.qty = {};
  // Выбор услуг по умолчанию по названиям из DEFAULT_KC_FEATURES
  console.log(
    "kcInit: ищу услуги из DEFAULT_KC_FEATURES:",
    DEFAULT_KC_FEATURES,
  );
  DATA.kc.rows.forEach((r, i) => {
    console.log(
      `kcInit: [${i}] "${r.parameter}" - совпадает? ${DEFAULT_KC_FEATURES.includes(r.parameter)}`,
    );
    if (i > 0 && DEFAULT_KC_FEATURES.includes(r.parameter)) {
      kcState.selected.push(i);
      kcState.qty[i] = 0;
      console.log(
        `kcInit: добавлена услуга ${i}, kcState.selected:`,
        kcState.selected,
      );
    }
  });
  $("kcFeature").value = "";
  hideKcSuggest();
  renderKc();
}

// Подсказки для поля поиска функций КЦ
const hideKcSuggest = bindSuggest(
  "kcFeature",
  "kcSuggestList",
  () => featureRows("kc"),
  () => $("kcAdd").click(),
);
// Показ или скрытие блока КЦ при изменении флажка
$("addKc").onchange = update;
// Показ или скрытие столбцов скидок при изменении чекбокса
$("showDiscounts").onchange = (e) => {
  document.body.classList.toggle("hide-discounts", !e.target.checked);
};
$("kcCurrent").onchange = renderKc;
$("kcTarget").onchange = renderKc;
// Кнопка добавления функции КЦ в сравнение
$("kcAdd").onclick = () =>
  addFeature("kcFeature", "kc", kcState.selected, renderKc);

function exportCellText(td) {
  const price = td.querySelector(".storage-price");
  if (price) return price.textContent.trim();
  return td.textContent.trim();
}

function exportServiceText(td) {
  const clone = td.cloneNode(true);
  clone.querySelectorAll("select, button, ul").forEach((node) => node.remove());
  clone.querySelectorAll("input").forEach((input) => {
    input.replaceWith(document.createTextNode(input.value || "0"));
  });
  return clone.textContent.replace(/\s+/g, " ").trim();
}

function collectExportRows(body, prefix = "") {
  return [...body.rows]
    .filter((row) => {
      const current = row.cells[2].querySelector("input")?.checked ?? true;
      const target = row.cells[5].querySelector("input")?.checked ?? true;
      return isSingle() ? current : current || target;
    })
    .map((row) => ({
      service: prefix + exportServiceText(row.cells[0]),
      current: exportCellText(row.cells[1]),
      currentDiscount: row.cells[3].querySelector("input")?.value || "0",
      target: exportCellText(row.cells[4]),
      targetDiscount: row.cells[6].querySelector("input")?.value || "0",
      difference: exportCellText(row.cells[7]),
    }));
}

function buildExportData() {
  const single = isSingle();
  const kcOn = !$("kcCard").hidden;
  const mainCurrent = TARIFF_LABELS[$("current").value];
  const mainTarget = TARIFF_LABELS[$("target").value];
  const kcCurrent = TARIFF_LABELS[$("kcCurrent").value];
  const kcTarget = TARIFF_LABELS[$("kcTarget").value];
  const currentTariff =
    product === "kc"
      ? `КЦ: ${mainCurrent}`
      : kcOn
        ? `ВАТС: ${mainCurrent} / КЦ: ${kcCurrent}`
        : mainCurrent;
  const targetTariff =
    product === "kc"
      ? `КЦ: ${mainTarget}`
      : kcOn
        ? `ВАТС: ${mainTarget} / КЦ: ${kcTarget}`
        : mainTarget;
  const header = single
    ? ["Услуга", currentTariff, "Скидка, %", "Итоговая сумма"]
    : [
        "Услуга",
        currentTariff,
        "Скидка, %",
        targetTariff,
        "Скидка, %",
        "Разница тарифов",
      ];
  const rows = collectExportRows($("body"));
  if (kcOn) rows.push(...collectExportRows($("kcBody"), "КЦ: "));

  const data = rows.map((row) =>
    single
      ? [row.service, row.current, row.currentDiscount, row.current]
      : [
          row.service,
          row.current,
          row.currentDiscount,
          row.target,
          row.targetDiscount,
          row.difference,
        ],
  );

  if (single) {
    const total = kcOn
      ? exportCellText($("kcFoot").rows[1].cells[1])
      : exportCellText($("foot").rows[0].cells[1]);
    data.push(["Итоговая сумма", "", "", total]);
  } else {
    const totalRow = kcOn ? $("kcFoot").rows[1] : $("foot").rows[0];
    data.push([
      exportCellText(totalRow.cells[0]),
      exportCellText(totalRow.cells[1]),
      "",
      exportCellText(totalRow.cells[4]),
      "",
      exportCellText(totalRow.cells[7]),
    ]);
  }
  return [header, ...data];
}

function csvValue(value) {
  return '"' + String(value ?? "").replace(/"/g, '""') + '"';
}

function createCsv(rows) {
  return "\ufeff" + rows.map((row) => row.map(csvValue).join(";")).join("\r\n");
}

function xmlValue(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function excelColumnName(columnIndex) {
  let name = "";
  let value = columnIndex + 1;
  while (value > 0) {
    value -= 1;
    name = String.fromCharCode(65 + (value % 26)) + name;
    value = Math.floor(value / 26);
  }
  return name;
}

function writeUint16(view, offset, value) {
  view.setUint16(offset, value, true);
}

function writeUint32(view, offset, value) {
  view.setUint32(offset, value, true);
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createStoredZip(entries) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  entries.forEach(([name, content]) => {
    const nameBytes = encoder.encode(name);
    const contentBytes = encoder.encode(content);
    const checksum = crc32(contentBytes);
    const localHeader = new ArrayBuffer(30);
    const localView = new DataView(localHeader);
    writeUint32(localView, 0, 0x04034b50);
    writeUint16(localView, 4, 20);
    writeUint16(localView, 6, 0);
    writeUint16(localView, 8, 0);
    writeUint16(localView, 10, 0);
    writeUint16(localView, 12, 0);
    writeUint32(localView, 14, checksum);
    writeUint32(localView, 18, contentBytes.length);
    writeUint32(localView, 22, contentBytes.length);
    writeUint16(localView, 26, nameBytes.length);
    writeUint16(localView, 28, 0);
    localParts.push(new Uint8Array(localHeader), nameBytes, contentBytes);

    const centralHeader = new ArrayBuffer(46);
    const centralView = new DataView(centralHeader);
    writeUint32(centralView, 0, 0x02014b50);
    writeUint16(centralView, 4, 20);
    writeUint16(centralView, 6, 20);
    writeUint16(centralView, 8, 0);
    writeUint16(centralView, 10, 0);
    writeUint16(centralView, 12, 0);
    writeUint16(centralView, 14, 0);
    writeUint32(centralView, 16, checksum);
    writeUint32(centralView, 20, contentBytes.length);
    writeUint32(centralView, 24, contentBytes.length);
    writeUint16(centralView, 28, nameBytes.length);
    writeUint16(centralView, 30, 0);
    writeUint16(centralView, 32, 0);
    writeUint16(centralView, 34, 0);
    writeUint16(centralView, 36, 0);
    writeUint32(centralView, 38, 0);
    writeUint32(centralView, 42, offset);
    centralParts.push(new Uint8Array(centralHeader), nameBytes);
    offset += localHeader.byteLength + nameBytes.length + contentBytes.length;
  });

  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const endRecord = new ArrayBuffer(22);
  const endView = new DataView(endRecord);
  writeUint32(endView, 0, 0x06054b50);
  writeUint16(endView, 4, 0);
  writeUint16(endView, 6, 0);
  writeUint16(endView, 8, entries.length);
  writeUint16(endView, 10, entries.length);
  writeUint32(endView, 12, centralSize);
  writeUint32(endView, 16, offset);
  writeUint16(endView, 20, 0);

  const parts = [...localParts, ...centralParts, new Uint8Array(endRecord)];
  const output = new Uint8Array(parts.reduce((sum, part) => sum + part.length, 0));
  let outputOffset = 0;
  for (const part of parts) {
    output.set(part, outputOffset);
    outputOffset += part.length;
  }
  return output;
}

function createXlsx(rows) {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
  const columnWidths = Array.from(
    { length: Math.max(...rows.map((row) => row.length)) },
    (_, columnIndex) => {
      const longest = Math.max(
        ...rows.map((row) => String(row[columnIndex] ?? "").length),
      );
      const maxPixels = columnIndex === 0 ? 300 : 180;
      const pixels = Math.min(maxPixels, Math.max(70, longest * 7 + 14));
      return Math.max(10, Math.round((pixels - 5) / 7));
    },
  );
  const columns = columnWidths
    .map(
      (width, index) =>
        `<col min="${index + 1}" max="${index + 1}" width="${width}" customWidth="1"/>`,
    )
    .join("");
  const dataRows = rows
    .map((row, rowIndex) => {
      const style = rowIndex === 0 ? 1 : rowIndex === rows.length - 1 ? 2 : 0;
      const cells = row
        .map((value, columnIndex) => {
          const reference = `${excelColumnName(columnIndex)}${rowIndex + 1}`;
          return `<c r="${reference}" t="inlineStr" s="${style}"><is><t xml:space="preserve">${xmlValue(value)}</t></is></c>`;
        })
        .join("");
      return `<row r="${rowIndex + 1}">${cells}</row>`;
    })
    .join("");
  const worksheet = `${xmlHeader}<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><cols>${columns}</cols><sheetData>${dataRows}</sheetData></worksheet>`;
  const styles = `${xmlHeader}<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Times New Roman"/></font><font><b/><sz val="11"/><name val="Times New Roman"/></font></fonts><fills count="4"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFF4B183"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFCE4D6"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"><alignment vertical="center" wrapText="1"/></xf><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf><xf numFmtId="0" fontId="1" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`;

  return createStoredZip([
    [
      "[Content_Types].xml",
      `${xmlHeader}<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`,
    ],
    [
      "_rels/.rels",
      `${xmlHeader}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`,
    ],
    [
      "xl/workbook.xml",
      `${xmlHeader}<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Итоги" sheetId="1" r:id="rId1"/></sheets></workbook>`,
    ],
    [
      "xl/_rels/workbook.xml.rels",
      `${xmlHeader}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`,
    ],
    ["xl/styles.xml", styles],
    ["xl/worksheets/sheet1.xml", worksheet],
  ]);
}

$("exportResults").onclick = () => {
  const format = $("exportFormat").value;
  const rows = buildExportData();
  const kcOn = !$("kcCard").hidden;
  const sectionName = $("mode").selectedOptions[0].textContent.trim();
  const productName = product === "kc" ? "КЦ" : kcOn ? "ВАТС + КЦ" : "ВАТС";
  const fileName = `${sectionName} ${productName}.${format}`;
  const content = format === "xlsx" ? createXlsx(rows) : createCsv(rows);
  const mime =
    format === "xlsx"
      ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      : "text/csv;charset=utf-8";
  const url = URL.createObjectURL(new Blob([content], { type: mime }));
  const exportWindow = window.open("", "_blank");
  const startDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };
  if (exportWindow) {
    exportWindow.opener = null;
    const document = exportWindow.document;
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = fileName;
    downloadLink.textContent = `Скачать ${fileName}`;
    document.title = fileName;
    document.body.replaceChildren(downloadLink);
    downloadLink.click();
  } else {
    startDownload();
  }
  setTimeout(() => URL.revokeObjectURL(url), 60000);
};

// Первичная инициализация блоков ВАТС и КЦ при загрузке страницы
init();
kcInit();
