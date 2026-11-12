(function () {
  "use strict";

  var S = SITE; // defined in js/data.js
  var POSTS_PER_PAGE = 5;

  var ICONS = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z"/></svg>',
    resume: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h8v2H8z"/></svg>',
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
    var h1 = $(".hero__name"), parts = String(p.name || "").trim().split(/\s+/);
    if (h1 && parts.length > 1) {
      var last = document.createElement("span");
      last.className = "gradient-word";
      last.textContent = parts.pop();
      h1.textContent = parts.join(" ") + " ";
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
    if (p.resume) links.push({ url: p.resume, label: "Résumé", icon: ICONS.resume });

    var html = links.map(function (l) {
      return '<a class="social" href="' + esc(l.url) + '"' + linkAttrs(l.url) + ">" + l.icon + esc(l.label) + "</a>";
    }).join("");
    $("#heroSocials").innerHTML = html;
    $("#footerSocials").innerHTML = html;
  }

  /* ---------- Now ---------- */
  function renderNow() {
    $("#nowGrid").innerHTML = (S.now || []).map(function (n) {
      return '<article class="card now-card">' +
        (n.status ? '<span class="pill pill--status">' + esc(n.status) + "</span>" : "") +
        "<h3>" + esc(n.title) + "</h3>" +
        "<p>" + esc(n.description) + "</p></article>";
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
      ol.innerHTML = '<li class="empty">No updates here yet.</li>';
    } else {
      ol.innerHTML = shown.map(function (p, i) {
        var id = "post-body-" + i;
        return '<li class="post"><article class="card post__card">' +
          '<button class="post__toggle" aria-expanded="false" aria-controls="' + id + '">' +
            '<div class="post__meta"><time datetime="' + esc(p.date) + '">' + fmtDate(p.date) + "</time>" +
              (p.tag ? '<span class="pill pill--muted">' + esc(p.tag) + "</span>" : "") + "</div>" +
            '<h3 class="post__title">' + esc(p.title) + "</h3>" +
            (p.summary ? '<p class="post__summary">' + esc(p.summary) + "</p>" : "") +
            (p.body ? '<div class="post__more">Read more</div>' : "") +
          "</button>" +
          (p.body ? '<div class="post__body" id="' + id + '" hidden>' + paragraphs(p.body) + "</div>" : "") +
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
      var more = btn.querySelector(".post__more");
      if (more) more.textContent = open ? "Read more" : "Show less";
    });
    $("#showMore").addEventListener("click", function () {
      visibleCount += POSTS_PER_PAGE;
      renderPosts();
    });
  }

  /* ---------- Projects carousel ---------- */
  var index = 0;
  var projects = S.projects || [];

  function renderProjects() {
    $("#track").innerHTML = projects.map(function (p, i) {
      var links = "";
      if (p.github) links += '<a class="btn btn--dark" href="' + esc(p.github) + '"' + linkAttrs(p.github) + ">" + ICONS.github + "View on GitHub</a>";
      if (p.demo) links += '<a class="btn btn--ghost" style="margin:0" href="' + esc(p.demo) + '"' + linkAttrs(p.demo) + ">" + ICONS.external + "Live demo</a>";
      return '<div class="slide" role="group" aria-roledescription="slide" aria-label="' + (i + 1) + " of " + projects.length + '">' +
        '<article class="card project">' +
          '<div class="project__thumb"><img src="' + esc(p.thumbnail) + '" alt="' + esc(p.title) + ' screenshot" loading="lazy"></div>' +
          '<div class="project__info">' +
            "<h3>" + esc(p.title) + "</h3>" +
            "<p>" + esc(p.description) + "</p>" +
            '<div class="tags">' + (p.tags || []).map(function (t) { return '<span class="pill pill--muted">' + esc(t) + "</span>"; }).join("") + "</div>" +
            '<div class="project__links">' + links + "</div>" +
          "</div></article></div>";
    }).join("");

    $("#dots").innerHTML = projects.map(function (p, i) {
      return '<button class="dot" aria-label="Go to ' + esc(p.title) + '" data-i="' + i + '"></button>';
    }).join("");

    var single = projects.length <= 1;
    $("#prevSlide").hidden = single;
    $("#nextSlide").hidden = single;
    $("#dots").hidden = single;
    goTo(0);
  }

  function goTo(i) {
    var n = projects.length;
    if (!n) return;
    index = (i + n) % n;
    $("#track").style.transform = "translateX(-" + index * 100 + "%)";
    document.querySelectorAll(".dot").forEach(function (d, j) {
      d.setAttribute("aria-current", String(j === index));
    });
    document.querySelectorAll(".slide").forEach(function (s, j) {
      s.setAttribute("aria-hidden", String(j !== index));
      s.querySelectorAll("a").forEach(function (a) { a.tabIndex = j === index ? 0 : -1; });
    });
  }

  function bindCarousel() {
    $("#prevSlide").addEventListener("click", function () { goTo(index - 1); });
    $("#nextSlide").addEventListener("click", function () { goTo(index + 1); });
    $("#dots").addEventListener("click", function (e) {
      var d = e.target.closest(".dot");
      if (d) goTo(+d.getAttribute("data-i"));
    });
    var car = $("#carousel");
    car.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { goTo(index - 1); e.preventDefault(); }
      if (e.key === "ArrowRight") { goTo(index + 1); e.preventDefault(); }
    });
    // Swipe
    var startX = null, startY = null;
    car.addEventListener("pointerdown", function (e) { startX = e.clientX; startY = e.clientY; });
    car.addEventListener("pointerup", function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX, dy = e.clientY - startY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) goTo(index + (dx < 0 ? 1 : -1));
      startX = null;
    });
    car.addEventListener("pointercancel", function () { startX = null; });
  }

  /* ---------- Theme ---------- */
  function bindTheme() {
    $("#themeToggle").addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- Scroll effects ---------- */
  function bindScroll() {
    var nav = $(".nav");
    function onScroll() { nav.classList.toggle("is-scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

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
  bindCarousel();
  bindTheme();
  bindScroll();
})();
