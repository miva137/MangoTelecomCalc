const documentConfigs = {
  usage: { file: "../doc/USAGE.md", title: "Инструкция по использованию" },
  description: { file: "../doc/README.md", title: "Описание проекта" },
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderInline(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const output = [];
  let paragraph = [];
  let listType = null;
  let inCodeBlock = false;
  let codeLines = [];

  const closeParagraph = () => {
    if (paragraph.length) {
      output.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };

  const closeList = () => {
    if (listType) {
      output.push(`</${listType}>`);
      listType = null;
    }
  };

  const closeBlock = () => {
    closeParagraph();
    closeList();
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        output.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCodeBlock = false;
      } else {
        closeBlock();
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      closeBlock();
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      closeBlock();
      const level = heading[1].length;
      output.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      continue;
    }

    const unorderedItem = line.match(/^\s*[-*]\s+(.+)$/);
    const orderedItem = line.match(/^\s*\d+[.)]\s+(.+)$/);
    const nextListType = unorderedItem ? "ul" : orderedItem ? "ol" : null;

    if (nextListType) {
      closeParagraph();
      if (listType !== nextListType) {
        closeList();
        listType = nextListType;
        output.push(`<${listType}>`);
      }
      output.push(`<li>${renderInline((unorderedItem || orderedItem)[1])}</li>`);
      continue;
    }

    closeList();
    paragraph.push(line.trim());
  }

  closeBlock();
  return output.join("\n");
}

async function loadDocument() {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("doc") || "usage";
  const config = documentConfigs[key] || documentConfigs.usage;
  const content = document.querySelector("#markdown-content");
  const title = document.querySelector("#page-title");

  document.title = config.title;
  title.textContent = config.title;

  try {
    const response = await fetch(config.file, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    content.innerHTML = renderMarkdown(await response.text());
  } catch (error) {
    content.innerHTML = '<p class="error">Не удалось загрузить документ. Откройте проект через локальный веб-сервер или GitHub Pages.</p>';
  }
}

loadDocument();
