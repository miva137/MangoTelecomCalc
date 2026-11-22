// Разбирает строку вида «1 600 руб./мес.» в число и единицу измерения; null, если формат не распознан
function parseValue(text) {
  const m = /^(\d[\d\s]*(?:[.,]\d+)?)(?:\s*(.*))?$/.exec(text.trim());
  if (!m) return null;
  let unit = (m[2] || "").trim();
  if (/^руб\.?\/мес\.?$/.test(unit)) unit = "руб./мес.";
  if (unit && !/^(руб|коп|ГБ|чел)/.test(unit)) return null;
  return { num: parseFloat(m[1].replace(/\s/g, "").replace(",", ".")), unit };
}

// Число для сравнения: отсутствие или включение в тариф (—, +, ✓) считается как 0 с единицей другого значения
function numericValue(v, other) {
  if (v === "+" || v === "✓" || isUnavailable(v))
    return { num: 0, unit: parseValue(other)?.unit ?? "" };
  return parseValue(v);
}

// Возвращает текст разницы и класс: pos (рост суммы, красный), neg (снижение, зелёный)
function compare(a, b) {
  if (a === b) return { text: "без изменений", cls: "" };
  const pa = numericValue(a, b),
    pb = numericValue(b, a);
  if (pa && pb && pa.unit === pb.unit) {
    const delta = pb.num - pa.num;
    if (delta === 0)
      return { text: "без изменений", cls: "", delta: 0, unit: pb.unit };
    const sign = delta > 0 ? "+" : "";
    return {
      text: sign + fmt(delta) + (pb.unit ? " " + pb.unit : ""),
      cls: delta > 0 ? "pos" : "neg",
      delta,
      unit: pb.unit,
    };
  }
  return { text: show(b) + " (не сравнимо)", cls: "" };
}

// Возвращает целое неотрицательное количество номеров данного типа из поля ввода
function numberQty(t) {
  return qtys[t.id] || 0;
}

// Считает разовую и ежемесячную стоимость подключаемых номеров
function numbersCost() {
  let once = 0,
    monthly = 0;
  NUMBER_TYPES.forEach((t) => {
    const qty = numberQty(t);
    once += qty * t.once;
    monthly += qty * t.monthly;
  });
  return { once, monthly };
}

// Считает превышение лимита номеров тарифа и плату за номера сверх лимита
function numbersFor(tariff) {
  const rule = NUMBER_RULES[tariff];
  const total = NUMBER_TYPES.reduce((s, t) => s + numberQty(t), 0);
  if (!rule) return { overFee: 0, exceeded: false, total, limit: Infinity };
  const paid = Math.max(0, Math.min(total, rule.limit) - rule.included);
  return {
    overFee: paid * rule.fee,
    exceeded: total > rule.limit,
    total,
    limit: rule.limit,
  };
}

// Сколько номеров типа key платных (сверх включенных) при выбранном тарифе
function feeQty(tariff, key) {
  const rule = NUMBER_RULES[tariff];
  if (!rule) return 0;
  const total = NUMBER_TYPES.reduce((s, t) => s + numberQty(t), 0);
  const cap = Math.min(total, rule.limit);
  const idx = NUMBER_TYPES.findIndex((t) => t.id === key);
  const before = NUMBER_TYPES.slice(0, idx).reduce(
    (s, t) => s + numberQty(t),
    0,
  );
  return Math.max(
    0,
    Math.min(before + numberQty(NUMBER_TYPES[idx]), cap) -
      Math.max(before, rule.included),
  );
}

// Название строки DATA, из которой берётся цена доп. профиля
const PROFILE_PARAM = "Дополнительный профиль сотрудника";

// Возвращает количество дополнительных профилей сотрудников из поля ввода
function profileQty() {
  return qtys.profiles;
}

// Возвращает цену дополнительного профиля для тарифа в руб./мес.
function profilePrice(tariff) {
  const row = DATA[product].rows.find((r) => r.parameter === PROFILE_PARAM);
  const p = row && parseValue(row.values[tariff] ?? "");
  return p && p.unit === "руб./мес." ? p.num : 0;
}

// Стоимость Манго Диалоги в руб./мес. с учётом дополнительных каналов
function dialogCost() {
  return DIALOG_BASE + DIALOG_CHANNEL * qtys.dialogs;
}

// Текст ячейки Манго Диалоги: сумма с расшифровкой базы и доп. каналов
function dialogText(amount) {
  const extra = qtys.dialogs;
  return (
    fmt(amount) +
    " руб./мес. (базовая стоимость " +
    fmt(DIALOG_BASE) +
    " руб." +
    (extra
      ? ", доп. каналы: " + extra + " × " + fmt(DIALOG_CHANNEL) + " руб."
      : "") +
    ")"
  );
}
