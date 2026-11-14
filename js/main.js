(function () {
  "use strict";

  var S = SITE; // defined in js/data.js
  var POSTS_PER_PAGE = 5;

  var ICONS = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z"/></svg>',
    resume: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h8v2H8z"/></svg>',
    slides: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-8v2h3v2H8v-2h3v-2H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 2v9h16V6H4zm6 1.5 5 3-5 3v-6z"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 3h2v9.2l3.3-3.3 1.4 1.4L12 16l-5.7-5.7 1.4-1.4 3.3 3.3V3zM4 18h16v2H4z"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4z"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3zM5 5h5v2H5v12h12v-5h2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/></svg>'
  };

  function $(sel) { return document.querySelector(sel); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function paragraphs(text) {
    return String(text || "").split(/\n\s*\n/).map(function (p) {
      return "<p>" + esc(p.trim()) + "</p>";
    }).join("");
  }
  function fmtDate(iso) {
    var d = new Date(iso + "T12:00:00");
    if (isNaN(d)) return esc(iso);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }
  function linkAttrs(url) {
    return /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "";
  }

  /* ---------- Profile ---------- */
  function renderProfile() {
    var p = S.profile;
    document.querySelectorAll("[data-name]").forEach(function (el) { el.textContent = p.name; });
    // Hero: last word of the name gets the gradient (built with text nodes, no HTML injection)
    // (the h1 has no data-name: it is built only here, so a one-word name still gets the gradient)
    var h1 = $(".hero__name"), parts = String(p.name || "").trim().split(/\s+/);
    if (h1 && parts[0]) {
      var last = document.createElement("span");
      last.className = "gradient-word";
      last.textContent = parts.pop();
      h1.textContent = parts.length ? parts.join(" ") + " " : "";
      h1.appendChild(last);
    }
    var img = $("#headshot");
    img.src = p.headshot;
    img.alt = "Headshot of " + p.name;
    $("#tagline").textContent = p.tagline;
    $("#bio").textContent = p.bio || "";
    $("#year").textContent = new Date().getFullYear();
    $("#emailBtn").href = "mailto:" + p.email;

    var links = [];
    if (p.github) links.push({ url: p.github, label: "GitHub", icon: ICONS.github });
    if (p.linkedin) links.push({ url: p.linkedin, label: "LinkedIn", icon: ICONS.linkedin });
    if (p.email) links.push({ url: "mailto:" + p.email, label: "Email", icon: ICONS.email });
    if (p.resume) links.push({ url: p.resume, label: "Resume", icon: ICONS.resume });

    function pill(l) {
      return '<a class="social" href="' + esc(l.url) + '"' + linkAttrs(l.url) + ">" + l.icon + esc(l.label) + "</a>";
    }
    // Hero: LinkedIn and Email as pills, then the resume as the one main (filled) button at the end (no GitHub here).
    // Footer: every link as a pill.
    var hero = links.filter(function (l) { return l.url !== p.resume && l.url !== p.github; }).map(pill).join("");
    if (p.resume) hero += '<a class="btn btn--primary" href="' + esc(p.resume) + '" target="_blank" rel="noopener">' + ICONS.resume + "Resume</a>";
    $("#heroSocials").innerHTML = hero;
    $("#footerSocials").innerHTML = links.map(pill).join("");
  }

  /* ---------- Now ---------- */
  // Cards whose status says the work is over drop off "Currently working on" (they stay in data.js).
  var NOW_DONE = ["finished", "just launched", "launched", "done", "complete", "completed"];
  function renderNow() {
    var current = (S.now || []).filter(function (n) {
      return NOW_DONE.indexOf(String(n.status || "").trim().toLowerCase()) === -1;
    });
    // Nothing in progress: hide the section and its menu link instead of showing an empty heading
    $("#now").hidden = !current.length;
    var navLink = document.querySelector('.nav__links a[href="#now"]');
    if (navLink) navLink.parentNode.hidden = !current.length;
    $("#nowGrid").innerHTML = current.map(function (n) {
      var tag = n.deck ? "button" : n.link ? "a" : "article";
      var open = n.deck ? '<button type="button" class="card now-card" data-deck="' + esc(n.deck) + '">'
        : n.link ? '<a class="card now-card" href="' + esc(n.link) + '"' + linkAttrs(n.link) + ">"
        : '<article class="card now-card">';
      var pill = n.status ? '<span class="pill pill--status">' + esc(n.status) + "</span>" : "";
      return open +
        (n.deck // a <button> may only hold inline content, so spans styled like the h3/p
          ? '<span class="now-card__head"><span class="now-card__title">' + esc(n.title) + "</span>" + pill + '</span><span class="now-card__desc">' + esc(n.description) + "</span>"
          : '<div class="now-card__head"><h3>' + esc(n.title) + "</h3>" + pill + "</div><p>" + esc(n.description) + "</p>") +
        "</" + tag + ">";
    }).join("");
  }

  /* ---------- Posts ---------- */
  var posts = (S.posts || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  var activeTag = "All";
  var visibleCount = POSTS_PER_PAGE;

  function renderFilters() {
    var tags = ["All"];
    posts.forEach(function (p) { if (p.tag && tags.indexOf(p.tag) === -1) tags.push(p.tag); });
    var bar = $("#postFilters");
    if (tags.length <= 2) { bar.hidden = true; return; }
    bar.innerHTML = tags.map(function (t) {
      return '<button class="chip" data-tag="' + esc(t) + '" aria-pressed="' + (t === activeTag) + '">' + esc(t) + "</button>";
    }).join("");
    bar.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      activeTag = btn.getAttribute("data-tag");
      visibleCount = POSTS_PER_PAGE;
      bar.querySelectorAll(".chip").forEach(function (c) {
        c.setAttribute("aria-pressed", String(c === btn));
      });
      renderPosts();
    });
  }

  function renderPosts() {
    var list = posts.filter(function (p) { return activeTag === "All" || p.tag === activeTag; });
    var shown = list.slice(0, visibleCount);
    var ol = $("#postList");
    if (!shown.length) {
      ol.innerHTML = '<li class="empty">Nothing here yet.</li>';
    } else {
      ol.innerHTML = shown.map(function (p, i) {
        var id = "post-body-" + i;
        // The title is a real heading; when there is a body, the heading holds the toggle button
        // (its ::after stretches over the card, so the whole card stays clickable).
        return '<li class="post"><article class="card post__card">' +
          '<div class="post__meta"><time datetime="' + esc(p.date) + '">' + fmtDate(p.date) + "</time>" +
            (p.tag ? '<span class="pill pill--muted">' + esc(p.tag) + "</span>" : "") + "</div>" +
          '<h3 class="post__title">' + (p.body
            ? '<button class="post__toggle" aria-expanded="false" aria-controls="' + id + '">' + esc(p.title) + "</button>"
            : esc(p.title)) + "</h3>" +
          (p.summary ? '<p class="post__summary">' + esc(p.summary) + "</p>" : "") +
          (p.body ? '<div class="post__more" aria-hidden="true">Read more</div>' +
            '<div class="post__body" id="' + id + '" hidden>' + paragraphs(p.body) + "</div>" : "") +
          "</article></li>";
      }).join("");
    }
    $("#showMore").hidden = list.length <= visibleCount;
  }

  function bindPosts() {
    $("#postList").addEventListener("click", function (e) {
      var btn = e.target.closest(".post__toggle");
      if (!btn) return;
      var body = document.getElementById(btn.getAttribute("aria-controls"));
      if (!body) return;
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      body.hidden = open;
      var more = btn.closest(".post__card").querySelector(".post__more");
      if (more) more.textContent = open ? "Read more" : "Show less";
    });
    $("#showMore").addEventListener("click", function () {
      visibleCount += POSTS_PER_PAGE;
      renderPosts();
    });
  }

  /* ---------- Projects (all shown at once, stacked) ---------- */
  var projects = S.projects || [];

  function renderProjects() {
    $("#projectList").innerHTML = projects.map(function (p, i) {
      var links = "";
      // the first link is the "main" one: the whole card opens it
      if (p.deck) links += '<button type="button" class="btn btn--dark project__main" data-deck="' + esc(p.id || i) + '">' + ICONS.slides + "View slides</button>";
      if (p.github) links += '<a class="btn btn--dark' + (p.deck ? "" : " project__main") + '" href="' + esc(p.github) + '"' + linkAttrs(p.github) + ">" + ICONS.github + "View on GitHub</a>";
      if (p.demo) links += '<a class="btn btn--ghost' + (p.github || p.deck ? "" : " project__main") + '" href="' + esc(p.demo) + '"' + linkAttrs(p.demo) + ">" + ICONS.external + "Live demo</a>";
      return "<li>" +
        '<article class="card project">' +
          '<div class="project__thumb"><img src="' + esc(p.thumbnail) + '" alt="' + esc(p.title) + ' screenshot" loading="lazy"></div>' +
          '<div class="project__info">' +
            "<h3>" + esc(p.title) + "</h3>" +
            "<p>" + esc(p.description) + "</p>" +
            '<div class="tags">' + (p.tags || []).map(function (t) { return '<span class="pill pill--muted">' + esc(t) + "</span>"; }).join("") + "</div>" +
            '<div class="project__links">' + links + "</div>" +
          "</div></article></li>";
    }).join("");
  }

  /* ---------- Slide viewer (projects with a `deck`) ---------- */
  var deck = null; // { project, dialog, n, i, opener }

  function deckSrc(d, n) { return d.folder + "/slide-" + (n < 10 ? "0" : "") + n + ".webp"; }

  function buildDeckDialog() {
    var dlg = document.createElement("dialog");
    dlg.className = "deck";
    dlg.setAttribute("aria-labelledby", "deckTitle");
    dlg.tabIndex = -1;
    dlg.innerHTML =
      '<div class="deck__bar">' +
        '<p class="deck__title" id="deckTitle"></p>' +
        '<span class="deck__count" aria-live="polite"></span>' +
        '<a class="deck__pdf btn btn--ghost" download>' + ICONS.download + "PDF</a>" +
        '<button type="button" class="icon-btn deck__close" aria-label="Close slides">' + ICONS.close + "</button>" +
      "</div>" +
      '<div class="deck__stage">' +
        '<img class="deck__img" alt="" draggable="false">' +
      "</div>" +
      '<div class="deck__controls">' +
        '<button type="button" class="icon-btn deck__nav--prev" aria-label="Previous slide"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg></button>' +
        '<button type="button" class="icon-btn deck__nav--next" aria-label="Next slide"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg></button>' +
      "</div>";
    document.body.appendChild(dlg);

    dlg.querySelector(".deck__close").addEventListener("click", function () { dlg.close(); });
    dlg.querySelector(".deck__nav--prev").addEventListener("click", function () { showSlide(deck.i - 1); });
    dlg.querySelector(".deck__nav--next").addEventListener("click", function () { showSlide(deck.i + 1); });
    // a click on the empty area around the slide closes the viewer
    // (only when the press also started there, so a drag on the slide that ends outside it doesn't close)
    var downOnEmpty = false;
    function isEmpty(t) { return t === dlg || t.classList.contains("deck__stage"); }
    dlg.addEventListener("pointerdown", function (e) { downOnEmpty = isEmpty(e.target); });
    dlg.addEventListener("click", function (e) {
      if (isEmpty(e.target) && downOnEmpty) dlg.close();
    });
    dlg.addEventListener("keydown", function (e) {
      if (e.target.closest && e.target.closest("a, button") && (e.key === " " || e.key === "Enter")) return;
      if (e.key === "ArrowLeft") { showSlide(deck.i - 1); e.preventDefault(); }
      if (e.key === "ArrowRight" || e.key === " ") { showSlide(deck.i + 1); e.preventDefault(); }
      if (e.key === "Home") { showSlide(1); e.preventDefault(); }
      if (e.key === "End") { showSlide(deck.n); e.preventDefault(); }
    });
    // swipe left/right on the slide
    var sx = null, sy = null;
    var img = dlg.querySelector(".deck__img");
    img.addEventListener("pointerdown", function (e) { sx = e.clientX; sy = e.clientY; });
    img.addEventListener("pointerup", function (e) {
      if (sx === null) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) showSlide(deck.i + (dx < 0 ? 1 : -1));
      sx = null;
    });
    img.addEventListener("pointercancel", function () { sx = null; });
    dlg.addEventListener("close", function () {
      document.documentElement.classList.remove("deck-open");
      if (deck.opener && deck.opener.focus) deck.opener.focus();
    });
    return dlg;
  }

  function showSlide(n) {
    var d = deck.project.deck;
    n = Math.max(1, Math.min(deck.n, n));
    deck.i = n;
    var img = deck.dialog.querySelector(".deck__img");
    img.src = deckSrc(d, n);
    img.alt = deck.project.title + ", slide " + n + " of " + deck.n;
    deck.dialog.querySelector(".deck__count").textContent = n + " / " + deck.n;
    var prev = deck.dialog.querySelector(".deck__nav--prev"), next = deck.dialog.querySelector(".deck__nav--next");
    // a focused button that gets disabled drops focus outside the dialog (and the arrow keys with it),
    // so hand focus to the other arrow first
    var active = document.activeElement;
    var moveTo = (n === 1 && active === prev) ? next : (n === deck.n && active === next) ? prev : null;
    prev.disabled = n === 1;
    next.disabled = n === deck.n;
    if (moveTo) (moveTo.disabled ? deck.dialog : moveTo).focus(); // the dialog itself is the fallback (tabindex -1)
    [n + 1, n + 2, n - 1].forEach(function (k) { if (k >= 1 && k <= deck.n) (new Image()).src = deckSrc(d, k); }); // preload neighbours
  }

  function openDeck(id, opener) {
    var p = projects.filter(function (x, i) { return x.deck && String(x.id || i) === String(id); })[0];
    if (!p) return;
    var dlg = (deck && deck.dialog) || buildDeckDialog();
    if (!dlg.showModal) { window.open(p.deck.pdf || deckSrc(p.deck, 1), "_blank"); return; } // very old browsers
    deck = { project: p, dialog: dlg, n: p.deck.count, i: 1, opener: opener };
    dlg.querySelector(".deck__title").textContent = p.title;
    var pdf = dlg.querySelector(".deck__pdf");
    pdf.hidden = !p.deck.pdf;
    if (p.deck.pdf) { pdf.href = p.deck.pdf; pdf.setAttribute("aria-label", "Download the slides as a PDF"); }
    showSlide(1);
    document.documentElement.classList.add("deck-open");
    dlg.showModal();
    dlg.querySelector(".deck__nav--next").focus();
  }

  function bindDecks() {
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest("[data-deck]");
      if (b) { e.preventDefault(); openDeck(b.getAttribute("data-deck"), b); }
    });
  }

  /* ---------- Theme ---------- */
  function bindTheme() {
    $("#themeToggle").addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- Card spotlight (dark mode, mouse only) ---------- */
  function bindSpotlight() {
    var mq = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!mq || !mq.matches) return;
    document.documentElement.classList.add("spotlight");
    document.addEventListener("pointermove", function (e) {
      var card = e.target.closest && e.target.closest(".card");
      if (!card) return;
      var r = card.getBoundingClientRect();
      card.style.setProperty("--x", (e.clientX - r.left) + "px");
      card.style.setProperty("--y", (e.clientY - r.top) + "px");
    }, { passive: true });
  }

  /* ---------- Scroll effects ---------- */
  function bindScroll() {
    var nav = $(".nav");
    function onScroll() { nav.classList.toggle("is-scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Progress bar fallback for browsers without CSS scroll timelines
    var bar = $(".scroll-progress");
    if (bar && !(window.CSS && CSS.supports && CSS.supports("animation-timeline: scroll()"))) {
      var ticking = false;
      var paint = function () {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ")";
        ticking = false;
      };
      window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(paint); } }, { passive: true });
      window.addEventListener("resize", paint);
      paint();
    }

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

    // Highlight current section in nav
    var links = {};
    document.querySelectorAll(".nav__links a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = links[en.target.id];
        if (a && en.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove("is-active"); });
          a.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  renderProfile();
  renderNow();
  renderFilters();
  renderPosts();
  bindPosts();
  renderProjects();
  bindDecks();
  bindTheme();
  bindScroll();
  bindSpotlight();
})();
