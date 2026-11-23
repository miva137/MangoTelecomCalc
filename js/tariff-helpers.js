const $ = (id) => document.getElementById(id);
const fmt = (n) => n.toLocaleString("ru-RU", { maximumFractionDigits: 2 });
const isUnavailable = (v) =>
  v === "" || v.startsWith("—") || v === "недоступно";
const show = (v) => (v === "✓" ? "0" : v);

// Создаёт плашку с названием функции и кнопкой удаления
function makeChip(label, onRemove) {
  const li = document.createElement("li");
  li.append(label);
  const remove = document.createElement("button");
  remove.type = "button";
  remove.textContent = "×";
  remove.title = "Удалить из сравнения";
  remove.onclick = onRemove;
  li.appendChild(remove);
  return li;
}

// Создаёт строку итогов для блока КЦ (с разницей между тарифами)
function kcTotalRow(label, cur, tgt) {
  const diff = tgt - cur;
  const tr = document.createElement("tr");
  [
    label,
    fmt(cur) + " руб./мес.",
    "",
    "",
    fmt(tgt) + " руб./мес.",
    "",
    "",
    (diff > 0 ? "+" : "") + fmt(diff) + " руб./мес.",
  ].forEach((text, i) => {
    const td = document.createElement("td");
    td.textContent = text;
    if (i === 7 && diff !== 0) td.className = diff > 0 ? "pos" : "neg";
    tr.appendChild(td);
  });
  return tr;
}

// Собственный выпадающий список: скрытый select хранит значение и шлёт change, видимая кнопка и список рисуются здесь
function customSelect(sel) {
  const box = document.createElement("div");
  box.className = "csel";
  if (sel.parentNode) sel.parentNode.insertBefore(box, sel);
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "csel-btn";
  const list = document.createElement("ul");
  list.className = "csel-list";
  list.hidden = true;
  box.append(sel, btn, list);
  const refresh = () => {
    btn.textContent =
      sel.selectedIndex >= 0 ? sel.options[sel.selectedIndex].text : "";
    list.replaceChildren(
      ...[...sel.options].map((o, i) => {
        const li = document.createElement("li");
        li.textContent = o.text;
        if (i === sel.selectedIndex) li.className = "selected";
        li.onclick = () => {
          closeSelects();
          sel.selectedIndex = i;
          refresh();
          sel.dispatchEvent(new Event("change"));
        };
        return li;
      }),
    );
  };
  btn.onclick = () => {
    const wasOpen = box.classList.contains("open");
    closeSelects();
    if (wasOpen) return;
    refresh();
    list.hidden = false;
    box.classList.add("open");
  };
  sel._refresh = refresh;
  refresh();
  return box;
}
// Закрывает все открытые списки
function closeSelects() {
  document.querySelectorAll(".csel").forEach((b) => {
    b.classList.remove("open");
    b.querySelector(".csel-list").hidden = true;
  });
}
// Обновляет подписи и пункты всех собственных списков по текущим значениям select
function refreshSelects() {
  document
    .querySelectorAll("select")
    .forEach((s) => s._refresh && s._refresh());
}
document.addEventListener("click", (e) => {
  if (!e.target.closest(".csel")) closeSelects();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSelects();
});
document.querySelectorAll("select").forEach((s) => customSelect(s));
