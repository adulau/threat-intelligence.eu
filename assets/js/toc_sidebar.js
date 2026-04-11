document.addEventListener("DOMContentLoaded", function () {
  var layout = document.querySelector("[data-toc-layout]");
  if (!layout) return;

  var content = layout.querySelector("[data-toc-content]");
  var tocContainer = layout.querySelector("[data-toc-container]");
  var toggleButton = document.querySelector(".toc-toggle");
  if (!content || !tocContainer || !toggleButton) return;

  var headings = content.querySelectorAll("h2, h3");
  if (!headings.length) {
    toggleButton.style.display = "none";
    layout.classList.add("toc-collapsed");
    return;
  }

  var list = document.createElement("ul");
  headings.forEach(function (heading, index) {
    if (!heading.id) {
      heading.id = "section-" + (index + 1);
    }

    var item = document.createElement("li");
    item.className = "toc-level-" + heading.tagName.toLowerCase().replace("h", "");

    var link = document.createElement("a");
    link.href = "#" + heading.id;
    link.textContent = heading.textContent;

    item.appendChild(link);
    list.appendChild(item);
  });

  tocContainer.innerHTML = "";
  tocContainer.appendChild(list);

  toggleButton.addEventListener("click", function () {
    var isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    layout.classList.toggle("toc-collapsed", isExpanded);
    toggleButton.setAttribute("aria-expanded", (!isExpanded).toString());
    toggleButton.textContent = isExpanded ? "Show menu" : "Hide menu";
  });
});
