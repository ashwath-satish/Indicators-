(function () {
  "use strict";

  var CATEGORIES = [
    {
      slug: "management",
      label: "Management",
      color: "var(--management-yellow)",
      icon: '<svg width="28" height="24" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.508 6.506H24.62c0-2.374-1.724-3.58-5.121-3.58-3.397 0-5.116 1.206-5.116 3.58h-2.889C11.492 2.43 14.484 0 19.5 0c5.015 0 8.01 2.43 8.01 6.506Z"/><path d="M37.417 6.422H1.583C.71 6.422 0 7.14 0 8.025v6.295a35.32 35.32 0 0 0 3.66 1.679c2.771 1.093 6.97 2.356 12.186 2.75v-1.071a1.82 1.82 0 0 1 1.806-1.829h3.693c.997 0 1.806.822 1.806 1.829v1.012c7.338-.672 12.99-3.026 15.847-4.456v-6.21c0-.884-.71-1.602-1.584-1.602"/><path d="M23.154 21.912a1.82 1.82 0 0 1-1.806 1.829H17.65c-.997 0-1.806-.822-1.806-1.83v-1.323C8.61 20.073 3.154 17.958 0 16.385v15.053a1.55 1.55 0 0 0 1.54 1.563h35.917A1.55 1.55 0 0 0 39 31.438V16.281c-3.197 1.525-8.736 3.637-15.846 4.251v1.382-.002Z"/></svg>'
    },
    {
      slug: "entrepreneur",
      label: "Entrepreneurship",
      color: "var(--entrepreneur-grey)",
      icon: '<svg width="19" height="28" viewBox="0 0 27 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.108 14.378a.742.742 0 0 1-.754-.765c0-3.964 3.187-7.188 7.108-7.188.412 0 .756.35.756.763a.744.744 0 0 1-.756.765c-1.5 0-2.907.588-3.963 1.65a5.667 5.667 0 0 0-1.632 4.008.744.744 0 0 1-.757.765m9.518 15.456c.024-.18.055-.337.1-.479l.006-.013c.33-1.097 1.656-4.954 4.817-8.603 1.693-1.923 2.627-4.44 2.627-7.089 0-5.952-4.788-10.8-10.68-10.8-2.809 0-5.464 1.095-7.48 3.077-2.06 2.028-3.198 4.772-3.198 7.723 0 2.606.934 5.123 2.63 7.089 3.16 3.646 4.488 7.506 4.816 8.603v.013c.05.14.082.281.106.439H7.481c-.937-2.814-3.016-5.882-4.156-7.207A13.762 13.762 0 0 1 0 13.613c0-3.512 1.38-6.976 3.793-9.507C6.314 1.461 9.75 0 13.462 0c3.71 0 6.967 1.42 9.523 4 2.555 2.575 3.98 6.005 4.018 9.659 0 3.29-1.18 6.473-3.325 8.97-1.228 1.425-3.286 4.461-4.164 7.206h-2.883l-.003-.003Zm-6.301 10.165a.746.746 0 0 1-.643-.329l-1.928-2.942a1.104 1.104 0 0 1-.13-.463v-2.935H19.3v2.935a.9.9 0 0 1-.117.447l-1.941 2.958a.746.746 0 0 1-.643.33h-6.272Z"/></svg>'
    },
    {
      slug: "finance",
      label: "Finance",
      color: "var(--finance-green)",
      icon: '<svg width="16" height="25" viewBox="0 0 23 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.94 24.716c0 2.018-1.504 3.322-4.25 3.616v-7.648c3.306.964 4.25 2.099 4.25 3.948v.084Zm-7.642-9.876c-3.302-1.01-4.118-2.144-4.118-3.908v-.04c0-1.853 1.374-3.238 4.118-3.492v7.44Zm3.392.883v-8.07c1.974.42 3.949 1.386 5.835 2.734l2.402-3.951c-2.402-1.723-4.978-2.817-8.066-3.192V.719h-3.734v2.438c-5.367.46-9.013 3.527-9.013 8.024v.084c0 4.75 2.918 7.019 9.184 8.617v8.28c-2.789-.464-5.108-1.723-7.551-3.697L0 28.332a20.005 20.005 0 0 0 10.127 4.16v1.517h3.734v-1.431C19.31 32.072 23 29.005 23 24.424v-.083c0-4.497-2.788-7.017-9.31-8.615"/><path d="M13.752 36h-3.41a.622.622 0 0 1-.63-.614V.614c0-.337.282-.614.63-.614h3.41a.62.62 0 0 1 .627.614v34.772a.62.62 0 0 1-.627.614Z"/></svg>'
    },
    {
      slug: "hospitality",
      label: "Hospitality",
      color: "var(--hospitality-blue)",
      icon: '<svg width="26" height="26" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.272 35.213a16.957 16.957 0 0 1-4.347-2.52 19.54 19.54 0 0 1-.671-.572c-.1-.092-.201-.183-.298-.275a19.902 19.902 0 0 1 2.572-1.027c.052-.018.104-.037.154-.052.026-.006.036-.013.044-.013s.013.005.026.03l.12.294c.087.214.184.42.278.63.183.402.381.8.59 1.186a15.47 15.47 0 0 0 1.53 2.313m12.45 0c1.07-1.327 1.88-2.846 2.517-4.422l.024-.052c.06.018.123.039.188.057.123.042.246.081.371.123.259.086.518.18.771.28.497.19.988.397 1.466.63a16.642 16.642 0 0 1-5.337 3.382m-6.22.826c-.486 0-.972-.094-1.44-.272-.85-.322-1.584-.894-2.203-1.542a10.984 10.984 0 0 1-1.427-1.866 16.465 16.465 0 0 1-1.155-2.264 30.817 30.817 0 0 1 6.267-.614c1.62 0 3.246.123 4.848.368.444.07.889.152 1.33.236-.023.05-.041.099-.06.146-.65 1.51-1.51 2.995-2.676 4.15-.646.636-1.404 1.185-2.269 1.467-.4.128-.81.193-1.212.193M6.145 29.847s-.013-.006-.027-.016c-.028-.042-.06-.084-.091-.126-.07-.086-.136-.177-.204-.271a17.73 17.73 0 0 1-.726-1.082 16.836 16.836 0 0 1-1.195-2.34 16.703 16.703 0 0 1-1.262-5.217h6.097c.026 0 .013.058.013.081l.016.353c.024.463.055.925.097 1.388.08.92.201 1.837.358 2.744.16.879.353 1.749.588 2.614a7 7 0 0 0 .091.311c-.112.037-.222.07-.334.107-.217.073-.429.15-.643.225-.44.16-.87.33-1.296.518-.246.107-.487.217-.73.329-.209.105-.423.21-.632.319a1.193 1.193 0 0 1-.079.042c-.018.01-.03.023-.041.023m6.267-2.227c-.018-.06-.04-.125-.055-.188-.06-.222-.123-.45-.178-.674-.444-1.77-.7-3.584-.802-5.403-.01-.183-.018-.371-.026-.56h16.293a29.976 29.976 0 0 1-.706 5.46 27.13 27.13 0 0 1-.342 1.323c-.005.019-.01.027-.013.027l-.031-.006c-.027-.005-.053-.013-.079-.015l-.16-.037c-.112-.023-.23-.044-.344-.068a32.515 32.515 0 0 0-.662-.123 32.08 32.08 0 0 0-2.736-.347 33.77 33.77 0 0 0-3.04-.134c-.857 0-1.72.032-2.58.094a32.414 32.414 0 0 0-4.398.617c-.05.01-.094.019-.138.032m20.45 2.208s-.017-.005-.036-.018c-.023-.01-.044-.023-.068-.031-.055-.032-.112-.058-.167-.092a22.804 22.804 0 0 0-3.191-1.323 5.982 5.982 0 0 1-.306-.093 4.99 4.99 0 0 0 .094-.34c.06-.215.115-.426.168-.646a29.402 29.402 0 0 0 .703-4.004c.052-.465.094-.93.125-1.399.016-.224.026-.454.04-.682.002-.11.01-.217.012-.326.003-.024-.013-.081.016-.081h6.092v.057a17.054 17.054 0 0 1-2.538 7.627c-.232.369-.478.73-.737 1.082-.06.081-.125.165-.19.248-.01.014-.016.016-.024.016M19.5 12.12c.85 0 1.699-.031 2.543-.094a32.192 32.192 0 0 0 4.401-.614c.05-.01.097-.019.142-.03.015.061.039.124.054.19.06.219.123.444.18.674.44 1.774.698 3.596.798 5.423.013.178.018.355.026.533h-16.29c.067-1.84.3-3.677.71-5.47.105-.442.215-.881.34-1.32.01-.019.013-.026.016-.026.005 0 .015.005.029.005.026.005.052.013.08.018.053.01.108.018.16.031a4.5 4.5 0 0 0 .345.068c.22.042.44.084.661.123.907.16 1.817.275 2.734.356 1.02.086 2.047.133 3.074.133M2.645 18.2v-.06c.152-1.82.601-3.61 1.317-5.288a16.82 16.82 0 0 1 1.218-2.326c.23-.371.476-.73.732-1.082.065-.084.125-.165.188-.249.018-.018.018-.036.037-.036.002 0 .013 0 .023.01.026.01.053.026.079.04l.177.09c.21.11.424.218.64.317.834.39 1.694.727 2.573 1.014.05.016.099.031.151.05.026.01.05.015.07.026.037.01.058 0 .045.042-.029.11-.065.222-.091.334-.06.215-.115.429-.17.649-.107.428-.204.862-.285 1.296a30.7 30.7 0 0 0-.416 2.71 36.151 36.151 0 0 0-.162 2.084c-.002.107-.01.217-.013.326-.002.032.013.055-.026.055H2.645V18.2Zm27.615 0c-.029 0-.013-.06-.016-.084-.002-.115-.01-.233-.013-.348a34.99 34.99 0 0 0-.099-1.387 30.09 30.09 0 0 0-.943-5.35l-.087-.312c.11-.037.22-.07.33-.107.22-.073.43-.15.645-.222.44-.16.87-.332 1.302-.518.245-.107.491-.217.729-.334.214-.1.423-.204.635-.317.024-.013.05-.026.073-.041.019-.01.029-.024.045-.024.002 0 .013.005.018.018.037.042.065.081.1.123.065.092.133.18.2.275a16.748 16.748 0 0 1 1.918 3.43 16.597 16.597 0 0 1 1.255 5.198H30.26ZM10.726 8.249s-.023-.003-.044-.01c-.06-.019-.12-.04-.18-.058-.126-.04-.252-.084-.377-.125a15.773 15.773 0 0 1-.74-.275 18.75 18.75 0 0 1-1.432-.617c.045-.05.097-.096.141-.14a16.828 16.828 0 0 1 4.177-2.803c.33-.154.664-.3 1.003-.431-1.068 1.328-1.873 2.844-2.516 4.42-.013.031-.016.042-.03.042m17.548.002s-.015-.01-.028-.036c-.037-.092-.07-.178-.107-.267-.092-.206-.18-.42-.277-.627a18.1 18.1 0 0 0-.594-1.195 15.324 15.324 0 0 0-1.542-2.339 16.76 16.76 0 0 1 5.029 3.1c.1.091.196.18.298.277A20.603 20.603 0 0 1 28.32 8.24c-.024.005-.037.013-.042.013M19.474 9.52a31.5 31.5 0 0 1-6.194-.606c.023-.052.042-.097.065-.146.656-1.516 1.51-3.006 2.69-4.164.632-.622 1.377-1.158 2.224-1.44a3.961 3.961 0 0 1 2.648.058c.851.315 1.59.888 2.213 1.533a10.944 10.944 0 0 1 1.448 1.893c.444.719.823 1.482 1.155 2.266-1.814.371-3.67.562-5.52.601-.246.003-.491.005-.732.005M19.5 0c-1.871 0-3.743.267-5.546.8a19.326 19.326 0 0 0-4.772 2.154 19.471 19.471 0 0 0-3.821 3.12 19.698 19.698 0 0 0-3.132 4.368 19.308 19.308 0 0 0-1.832 5.15 19.622 19.622 0 0 0-.319 5.679A19.43 19.43 0 0 0 4.02 31.36a19.788 19.788 0 0 0 3.753 3.725 19.7 19.7 0 0 0 4.42 2.498A19.395 19.395 0 0 0 19.502 39a19.436 19.436 0 0 0 13.024-4.987 19.525 19.525 0 0 0 5.632-8.83c.546-1.803.828-3.685.841-5.564.005-1.317-.12-2.63-.374-3.92a19.377 19.377 0 0 0-1.798-5.145 19.67 19.67 0 0 0-3.092-4.38A19.598 19.598 0 0 0 25.072.81a19.61 19.61 0 0 0-5.57-.807" fill="#fff"/></svg>'
    },
    {
      slug: "marketing",
      label: "Marketing",
      color: "var(--marketing-red)",
      icon: '<svg width="15" height="26" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.918 0H3.077C1.379 0 0 1.34 0 2.987v35.031C0 39.666 1.38 41 3.082 41h17.833C22.621 41 24 39.663 24 38.016V2.986C24 1.34 22.62 0 20.918 0Zm.666 36.726c0 .916-.762 1.656-1.711 1.656H4.3c-.946 0-1.714-.74-1.714-1.656V4.271c0-.915.768-1.655 1.714-1.655h2.657c.025 1.114.957 2.01 2.117 2.01h6.022c1.157 0 2.092-.896 2.117-2.01h2.663c.948 0 1.71.74 1.71 1.655v32.455h-.002Z"/></svg>'
    }
  ];

  var state = {
    indicators: [],
    areas: [],
    areaBySlug: {},
    byId: {},
    loaded: false
  };

  var app = document.getElementById("app");
  var templates = {};
  document.querySelectorAll("script[type='text/x-template']").forEach(function (el) {
    templates[el.id] = el.innerHTML;
  });

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function excerpt(text, len) {
    if (text.length <= len) return text;
    return text.slice(0, len).replace(/\s+\S*$/, "") + "…";
  }

  function categoryBySlug(slug) {
    for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].slug === slug) return CATEGORIES[i];
    return null;
  }

  function indicatorRow(ind) {
    var row = el(templates["tpl-indicator-row"]);
    row.href = "#/indicator/" + ind.id;
    row.querySelector(".indicator-code").textContent = ind.code || "";
    row.querySelector(".indicator-area-tag").textContent = ind.area;
    row.querySelector(".indicator-title").textContent = ind.title;
    row.querySelector(".indicator-excerpt").textContent = excerpt(ind.text, 150);
    row.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(ind.id);
      history.pushState(null, "", "#/indicator/" + ind.id);
    });
    return row;
  }

  function renderIndicatorList(container, list) {
    container.innerHTML = "";
    if (!list.length) {
      container.appendChild(el('<div class="empty-state">No indicators match that search.</div>'));
      return;
    }
    var frag = document.createDocumentFragment();
    list.forEach(function (ind) { frag.appendChild(indicatorRow(ind)); });
    container.appendChild(frag);
  }

  function categoryCounts() {
    var counts = {};
    CATEGORIES.forEach(function (c) { counts[c.slug] = 0; });
    state.indicators.forEach(function (ind) {
      var areaMeta = state.areaBySlug[ind.areaSlug];
      if (!areaMeta) return;
      areaMeta.categories.forEach(function (c) { if (counts[c] !== undefined) counts[c]++; });
    });
    return counts;
  }

  function indicatorsForCategory(slug) {
    return state.indicators.filter(function (ind) {
      var areaMeta = state.areaBySlug[ind.areaSlug];
      return areaMeta && areaMeta.categories.indexOf(slug) !== -1;
    });
  }

  function areasForCategory(slug) {
    return state.areas.filter(function (a) { return a.categories.indexOf(slug) !== -1; });
  }

  function slugify(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  function areaCard(area) {
    return el(
      '<a class="area-card" href="#/area/' + area.slug + '">' +
        '<span class="area-name">' + area.name + "</span>" +
        '<span class="area-count">' + area.total + "</span>" +
      "</a>"
    );
  }

  function renderHome() {
    app.innerHTML = templates["tpl-home"];
    document.getElementById("hero-total").textContent = state.indicators.length.toLocaleString();

    var counts = categoryCounts();
    var grid = document.getElementById("category-grid");
    CATEGORIES.forEach(function (cat) {
      var card = el(
        '<a class="category-card" href="#/category/' + cat.slug + '">' +
          '<span class="category-icon" style="background:' + cat.color + '">' + cat.icon + "</span>" +
          '<span class="meta">' +
            '<span class="label">' + cat.label + "</span>" +
            '<span class="count">' + (counts[cat.slug] || 0).toLocaleString() + "</span>" +
          "</span>" +
        "</a>"
      );
      grid.appendChild(card);
    });

    var preview = document.getElementById("area-grid-preview");
    state.areas.slice(0, 9).forEach(function (area) { preview.appendChild(areaCard(area)); });

    document.getElementById("hero-search-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var q = document.getElementById("hero-search-input").value.trim();
      if (q) location.hash = "#/search/" + encodeURIComponent(q);
    });
  }

  function renderAreasPage() {
    app.innerHTML = templates["tpl-areas"];
    var grid = document.getElementById("area-grid-full");
    state.areas.forEach(function (area) { grid.appendChild(areaCard(area)); });
  }

  function renderCategoryPage(slug) {
    var cat = categoryBySlug(slug);
    app.innerHTML = templates["tpl-category"];
    var header = app.querySelector("[data-cat]");
    var list = indicatorsForCategory(slug);
    var areas = areasForCategory(slug);
    header.innerHTML =
      '<div class="cat-icon-row"><span class="category-icon" style="background:' + (cat ? cat.color : "#888") + '">' +
      (cat ? cat.icon : "") + "</span><h1>" + (cat ? cat.label : slug) + "</h1></div>" +
      '<p class="page-sub">' + list.length.toLocaleString() + " indicators · " +
      areas.length + " instructional area" + (areas.length === 1 ? "" : "s") + "</p>";

    var chipRow = document.getElementById("cat-area-chips");
    var allChip = el('<button class="area-chip active" data-area="">All areas</button>');
    chipRow.appendChild(allChip);
    areas.forEach(function (a) {
      chipRow.appendChild(el('<button class="area-chip" data-area="' + a.slug + '">' + a.name + "</button>"));
    });

    var listEl = document.getElementById("cat-indicator-list");
    renderIndicatorList(listEl, list);

    chipRow.addEventListener("click", function (e) {
      var btn = e.target.closest(".area-chip");
      if (!btn) return;
      chipRow.querySelectorAll(".area-chip").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var areaSlug = btn.getAttribute("data-area");
      var filtered = areaSlug ? list.filter(function (i) { return i.areaSlug === areaSlug; }) : list;
      renderIndicatorList(listEl, filtered);
    });
  }

  function renderAreaPage(slug) {
    var area = state.areaBySlug[slug];
    app.innerHTML = templates["tpl-area"];
    var header = app.querySelector("[data-area]");
    var list = state.indicators.filter(function (i) { return i.areaSlug === slug; });
    header.innerHTML =
      "<h1>" + (area ? area.name : slug) + "</h1>" +
      '<p class="page-sub">' + list.length.toLocaleString() + " indicators</p>";
    renderIndicatorList(document.getElementById("area-indicator-list"), list);
  }

  function scoreMatch(ind, qLower) {
    var t = ind.title.toLowerCase();
    var c = (ind.code || "").toLowerCase();
    var body = ind.text.toLowerCase();
    if (c === qLower) return 100;
    if (c.indexOf(qLower) !== -1) return 80;
    if (t.indexOf(qLower) === 0) return 70;
    if (t.indexOf(qLower) !== -1) return 50;
    if (body.indexOf(qLower) !== -1) return 10;
    return 0;
  }

  function search(query) {
    var qLower = query.trim().toLowerCase();
    if (!qLower) return [];
    return state.indicators
      .map(function (ind) { return { ind: ind, score: scoreMatch(ind, qLower) }; })
      .filter(function (r) { return r.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .map(function (r) { return r.ind; });
  }

  function renderSearchPage(query) {
    app.innerHTML = templates["tpl-search"];
    document.getElementById("search-heading").textContent = "“" + query + "”";
    var results = search(query);
    document.getElementById("search-count").textContent =
      results.length.toLocaleString() + " result" + (results.length === 1 ? "" : "s");
    renderIndicatorList(document.getElementById("search-indicator-list"), results);
  }

  function renderAbout() {
    app.innerHTML = templates["tpl-about"];
    var total = state.indicators.length;
    document.getElementById("about-stats").textContent =
      total.toLocaleString() + " indicators across " + state.areas.length +
      " instructional areas, each with its code, area, and a plain-language explanation.";
  }

  function openModal(id) {
    var ind = state.byId[id];
    if (!ind) return;
    var body = document.getElementById("modal-body");
    body.innerHTML =
      '<div class="modal-meta">' +
        '<span class="indicator-code">' + (ind.code || "") + "</span>" +
        '<span class="modal-area">' + ind.area + "</span>" +
      "</div>" +
      '<h2 id="modal-title">' + ind.title + "</h2>" +
      '<p class="modal-text">' + ind.text + "</p>";
    document.getElementById("modal-backdrop").classList.add("open");
  }

  function closeModal() {
    document.getElementById("modal-backdrop").classList.remove("open");
  }

  document.getElementById("modal-close").addEventListener("click", function () {
    closeModal();
    history.back();
  });
  document.getElementById("modal-backdrop").addEventListener("click", function (e) {
    if (e.target.id === "modal-backdrop") { closeModal(); history.back(); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeModal(); }
  });

  function route() {
    closeModal();
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/").filter(Boolean);

    if (parts.length === 0) return renderHome();
    if (parts[0] === "areas") return renderAreasPage();
    if (parts[0] === "about") return renderAbout();
    if (parts[0] === "category" && parts[1]) return renderCategoryPage(parts[1]);
    if (parts[0] === "area" && parts[1]) return renderAreaPage(parts[1]);
    if (parts[0] === "search" && parts[1]) return renderSearchPage(decodeURIComponent(parts.slice(1).join("/")));
    if (parts[0] === "indicator" && parts[1]) {
      // Render whatever page was behind, then overlay the modal.
      renderHome();
      openModal(parts[1]);
      return;
    }
    renderHome();
  }

  function wireTopbarSearch() {
    document.getElementById("topbar-search-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var q = document.getElementById("topbar-search-input").value.trim();
      if (q) location.hash = "#/search/" + encodeURIComponent(q);
    });
  }

  function init(indicators, areas) {
    state.areas = areas;
    areas.forEach(function (a) { state.areaBySlug[a.slug] = a; });
    indicators.forEach(function (ind) { ind.areaSlug = slugify(ind.area); });
    state.indicators = indicators;
    indicators.forEach(function (ind) { state.byId[ind.id] = ind; });
    state.loaded = true;

    wireTopbarSearch();
    window.addEventListener("hashchange", route);
    route();
  }

  Promise.all([
    fetch("data/indicators.json").then(function (r) { return r.json(); }),
    fetch("data/areas.json").then(function (r) { return r.json(); })
  ]).then(function (res) {
    init(res[0], res[1]);
  }).catch(function (err) {
    app.innerHTML = '<div class="empty-state">Failed to load indicator data: ' + err + "</div>";
  });
})();
