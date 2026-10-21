(function () {
  "use strict";
  var MV = window.MV, C = MV.contact;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  document.documentElement.classList.remove("no-js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Icons (24px, stroke unless noted) ---------- */
  var S = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" ' + S + '><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6" fill="currentColor"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.3 2.2 1.6 3.6 3.9 3.8v3a7 7 0 0 1-3.9-1.2v6.2A5.7 5.7 0 1 1 11 9.1v3.1a2.7 2.7 0 1 0 2.5 2.7V3h3.1z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z"/></svg>',
    tripadvisor: '<svg viewBox="0 0 24 24" ' + S + '><circle cx="7" cy="13.5" r="3.5"/><circle cx="17" cy="13.5" r="3.5"/><path d="M3 9h18M12 9l-1.5 3M12 9l1.5 3"/><circle cx="7" cy="13.5" r=".8" fill="currentColor"/><circle cx="17" cy="13.5" r=".8" fill="currentColor"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.2L2.5 21.5l4.9-1.3A9.4 9.4 0 1 0 12 2.5zm0 17.2c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A7.8 7.8 0 1 1 12 19.7zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.7 2.6 4.1 3.6 1.5.7 2.1.7 2.9.6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.7-.5z"/></svg>',
    email: '<svg viewBox="0 0 24 24" ' + S + '><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" ' + S + '><path d="M5 3.5h3l1.5 4-2 1.3a11 11 0 0 0 7.7 7.7l1.3-2 4 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2z"/></svg>',
    maps: '<svg viewBox="0 0 24 24" ' + S + '><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/></svg>',
    wifi: '<svg viewBox="0 0 24 24" ' + S + '><path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 15.9a5 5 0 0 1 6.8 0"/><circle cx="12" cy="19" r="1" fill="currentColor"/></svg>',
    parking: '<svg viewBox="0 0 24 24" ' + S + '><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M9.5 16.5v-9h3.2a2.8 2.8 0 0 1 0 5.6H9.5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" ' + S + '><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6L12 3z"/><path d="m9 12 2.2 2.2L15.5 10"/></svg>',
    bag: '<svg viewBox="0 0 24 24" ' + S + '><rect x="4.5" y="7.5" width="15" height="13" rx="3"/><path d="M9 7.5V5.5a3 3 0 0 1 6 0v2M9 11.5v5M15 11.5v5"/></svg>',
    glass: '<svg viewBox="0 0 24 24" ' + S + '><path d="M7 3.5h10l-1 6.5a4 4 0 0 1-8 0L7 3.5zM12 14v6.5M8.5 20.5h7"/></svg>',
    bell: '<svg viewBox="0 0 24 24" ' + S + '><path d="M4 17.5h16M5.5 17.5a6.5 6.5 0 0 1 13 0M12 8V6M10 6h4"/></svg>',
    table: '<svg viewBox="0 0 24 24" ' + S + '><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 12h16M12 4v16"/></svg>',
    iron: '<svg viewBox="0 0 24 24" ' + S + '><path d="M3 17.5h17.5c0-5-2.5-8-6.5-8H8M8 9.5h-.5M10 6.5h5"/><path d="M3 17.5c0-4 2.5-8 7-8"/></svg>',
    bed: '<svg viewBox="0 0 24 24" ' + S + '><path d="M3 18.5V6M3 14.5h18v4M21 14.5v-3a3 3 0 0 0-3-3h-7.5v6"/><circle cx="7" cy="11" r="1.8"/></svg>'
  };
  function icon(name) { return ICONS[name] || ""; }
  function fillIcons(root) { $$("[data-icon]", root).forEach(function (el) { if (!el.firstChild) el.innerHTML = icon(el.dataset.icon); }); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  /* ---------- Contact wiring: one source of truth ---------- */
  var waBase = "https://wa.me/" + C.mobile;
  $$("[data-book]").forEach(function (a) { a.href = C.booking; });
  $("#cPhone").href = "tel:" + C.phone; $("#cPhone b").textContent = C.phoneLabel;
  $("#cWa").href = waBase; $("#cWa b").textContent = C.mobileLabel;
  $("#cMail").href = "mailto:" + C.email; $("#cMail b").textContent = C.email;
  $("#cMap").href = C.maps; $("#cMap b").textContent = C.address;
  $("#fab").href = waBase + "?text=" + encodeURIComponent("Hi Mountain Valley Resort, I'd like to ask about a stay.");
  $("#mbCall").href = "tel:" + C.phone;
  $("#year").textContent = new Date().getFullYear();

  $("#socials").innerHTML = MV.socials.map(function (s) {
    var ext = /^https?:/.test(s.url);
    return '<li><a class="glass" href="' + esc(s.url) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") +
      ' aria-label="' + esc(s.label) + '" title="' + esc(s.label) + '"><span class="ic">' + icon(s.id) + "</span></a></li>";
  }).join("");

  // Load the map only when the contact section nears the viewport
  var mapFrame = $("#mapFrame");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es, o) { if (es[0].isIntersecting) { mapFrame.src = C.mapEmbed; o.disconnect(); } }, { rootMargin: "600px" }).observe(mapFrame);
  } else mapFrame.src = C.mapEmbed;

  /* ---------- Segmented control with sliding liquid pill ---------- */
  function seg(root, onChange) {
    var pill = $(".seg-pill", root), btns = $$("button", root);
    function place(b) { pill.style.left = b.offsetLeft + "px"; pill.style.width = b.offsetWidth + "px"; }
    function select(b, silent) {
      btns.forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
      place(b);
      if (b.scrollIntoView && root.scrollWidth > root.clientWidth) b.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
      if (!silent) onChange(b);
    }
    btns.forEach(function (b) { b.addEventListener("click", function () { select(b); }); });
    root.addEventListener("keydown", function (e) {
      var i = btns.indexOf(document.activeElement); if (i < 0) return;
      var n = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : -1;
      if (n >= 0 && n < btns.length) { btns[n].focus(); select(btns[n]); e.preventDefault(); }
    });
    var cur = function () { return btns.filter(function (b) { return b.getAttribute("aria-selected") === "true"; })[0]; };
    window.addEventListener("resize", function () { place(cur()); });
    document.fonts && document.fonts.ready.then(function () { place(cur()); });
    place(cur());
  }

  /* ---------- Lightbox ---------- */
  var lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), lbList = [], lbIdx = 0;
  function lbShow() {
    var it = lbList[lbIdx];
    lbImg.style.animation = "none"; void lbImg.offsetWidth; lbImg.style.animation = "";
    lbImg.src = it.src; lbImg.alt = it.cap || "";
    lbCap.textContent = (it.cap ? it.cap + " · " : "") + (lbIdx + 1) + " / " + lbList.length;
    var multi = lbList.length > 1; $("#lbPrev").hidden = $("#lbNext").hidden = !multi;
  }
  function openLb(list, i) {
    lbList = list; lbIdx = i || 0; lbShow();
    if (lb.showModal) lb.showModal(); else lb.setAttribute("open", "");
    document.body.style.overflow = "hidden";
  }
  function step(d) { lbIdx = (lbIdx + d + lbList.length) % lbList.length; lbShow(); }
  $("#lbPrev").onclick = function () { step(-1); };
  $("#lbNext").onclick = function () { step(1); };
  $("#lbClose").onclick = function () { lb.close(); };
  lb.addEventListener("close", function () { document.body.style.overflow = ""; });
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lb-stage")) lb.close(); });
  lb.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
  var tx = null;
  lb.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) { if (tx === null) return; var dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); tx = null; });

  /* ---------- Rooms ---------- */
  var rateIdx = 0;
  var grid = $("#roomGrid");
  grid.innerHTML = MV.rooms.map(function (r, i) {
    var src = "images/room/" + r.dir + "/" + r.imgs[0] + ".jpg";
    return '<article class="room glass reveal" data-type="' + r.type + '" style="--d:' + (i % 3) * 0.08 + 's">' +
      '<button class="room-media" data-room="' + i + '" aria-label="View ' + r.imgs.length + " photos of Room " + esc(r.no) + '">' +
        '<img src="' + src + '" alt="' + esc(r.name) + ", Room " + esc(r.no) + '" loading="lazy">' +
        '<span class="room-badge">' + r.type + "</span>" +
        '<span class="room-count">📷 ' + r.imgs.length + "</span></button>" +
      '<div class="room-body"><h3>' + esc(r.name) + '</h3><p class="room-no">Room ' + esc(r.no) + " · " + esc(r.beds) + "</p>" +
        '<ul class="room-feats">' + r.feats.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
        '<div class="room-foot"><div class="price"><small>per night from</small><b data-rates="' + r.rates.join(",") + '">RM ' + r.rates[0] + "</b></div>" +
        '<a class="btn btn-gold" href="' + esc(C.booking) + '" target="_blank" rel="noopener">Book</a></div></div></article>';
  }).join("");
  $$(".room-media", grid).forEach(function (b) {
    b.addEventListener("click", function () {
      var r = MV.rooms[+b.dataset.room];
      openLb(r.imgs.map(function (n) { return { src: "images/room/" + r.dir + "/" + n + ".jpg", cap: r.name + " · Room " + r.no }; }), 0);
    });
  });
  // Gentle photo preview on hover (desktop)
  $$(".room", grid).forEach(function (card, i) {
    var r = MV.rooms[i], img = $("img", card), k = 0, t = null;
    card.addEventListener("mouseenter", function () {
      if (reduceMotion || r.imgs.length < 2) return;
      t = setInterval(function () { k = (k + 1) % r.imgs.length; img.src = "images/room/" + r.dir + "/" + r.imgs[k] + ".jpg"; }, 1400);
    });
    card.addEventListener("mouseleave", function () { clearInterval(t); });
  });
  function renderRates() {
    $$("[data-rates]", grid).forEach(function (b) {
      b.innerHTML = "RM " + b.dataset.rates.split(",")[rateIdx];
      b.classList.remove("tick"); void b.offsetWidth; b.classList.add("tick");
    });
  }
  // Default the toggle to today's rate period (Fri–Sun = weekend) in Malaysia time
  var myDay = new Date(Date.now() + (480 + new Date().getTimezoneOffset()) * 60000).getDay();
  if (myDay === 5 || myDay === 6 || myDay === 0) {
    rateIdx = 1;
    $$("#rateToggle button").forEach(function (b) { b.setAttribute("aria-selected", b.dataset.r === "1" ? "true" : "false"); });
    renderRates();
  }
  seg($("#rateToggle"), function (b) { rateIdx = +b.dataset.r; renderRates(); });
  seg($("#roomFilter"), function (b) {
    var f = b.dataset.f;
    $$(".room", grid).forEach(function (c) {
      var show = f === "all" || c.dataset.type === f;
      c.classList.toggle("out", !show);
      if (show) { c.classList.remove("in"); void c.offsetWidth; c.classList.add("in"); }
    });
  });

  /* ---------- Facilities ---------- */
  $("#facGrid").innerHTML = MV.facilities.map(function (f, i) {
    return '<div class="fac glass reveal" style="--d:' + (i % 4) * 0.07 + 's"><span class="ic">' + icon(f.icon) + "</span><h3>" + esc(f.title) + "</h3><p>" + esc(f.text) + "</p></div>";
  }).join("");

  /* ---------- Dining: menu + open-now ---------- */
  var menuList = [1, 2, 3, 4, 5, 6, 7].map(function (n) { return { src: "images/cafe/menu" + n + ".jpg", cap: "Menu page " + n }; });
  $("#menuStrip").innerHTML = menuList.map(function (m, i) {
    return '<button data-i="' + i + '" aria-label="Open menu page ' + (i + 1) + '"><img src="' + m.src + '" alt="Menu page ' + (i + 1) + '" loading="lazy"></button>';
  }).join("");
  $$("#menuStrip button").forEach(function (b) { b.onclick = function () { openLb(menuList, +b.dataset.i); }; });
  function openNow() {
    var now = new Date(Date.now() + (480 + new Date().getTimezoneOffset()) * 60000);
    var m = now.getHours() * 60 + now.getMinutes(), el = $("#openNow");
    var open = m >= 420 && m < 1320;
    el.style.setProperty("--dot", open ? "#2ecc71" : "#e67e22");
    el.textContent = open ? (m >= 1290 ? "Open now · last call by 9:30 PM" : "Open now · until 10:00 PM") : "Closed now · opens 7:00 AM (Malaysia time)";
  }
  openNow(); setInterval(openNow, 60000);

  /* ---------- Gallery ---------- */
  var gal = [];
  var labels = { building: "Building", reception: "Reception", facilities: "Facilities", room: "Rooms", restaurant: "Restaurant", cafe: "Café", bathroom: "Bathroom" };
  Object.keys(MV.gallery).forEach(function (cat) {
    var r = MV.gallery[cat];
    for (var n = r[0]; n <= r[1]; n++) gal.push({ src: "images/gallery/" + n + ".jpg", cap: labels[cat], cat: cat });
  });
  var galGrid = $("#galGrid"), galView = gal;
  function renderGal(f) {
    galView = f === "all" ? gal : gal.filter(function (g) { return g.cat === f; });
    galGrid.innerHTML = galView.map(function (g, i) {
      return '<button style="animation-delay:' + Math.min(i, 16) * 0.03 + 's" data-i="' + i + '" aria-label="Open ' + esc(g.cap) + ' photo"><img src="' + g.src + '" alt="' + esc(g.cap) + '" loading="lazy" width="360" height="260"></button>';
    }).join("");
  }
  galGrid.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) openLb(galView, +b.dataset.i); });
  renderGal("all");
  seg($("#galFilter"), function (b) { renderGal(b.dataset.f); });

  /* ---------- Contact form → WhatsApp or email (no server needed) ---------- */
  var form = $("#contactForm"), err = $("#formErr"), via = "whatsapp";
  var today = new Date().toISOString().slice(0, 10);
  $("#fIn").min = today; $("#fOut").min = today;
  $("#fIn").addEventListener("change", function () { $("#fOut").min = this.value || today; if ($("#fOut").value && $("#fOut").value <= this.value) $("#fOut").value = ""; });
  $$("button[type=submit]", form).forEach(function (b) { b.addEventListener("click", function () { via = b.dataset.via; }); });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    $$(".field", form).forEach(function (f) { f.classList.remove("invalid"); });
    var name = $("#fName").value.trim(), email = $("#fEmail").value.trim(), msg = $("#fMsg").value.trim();
    var ci = $("#fIn").value, co = $("#fOut").value, bad = [];
    if (!name) bad.push($("#fName"));
    if (!msg) bad.push($("#fMsg"));
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) bad.push($("#fEmail"));
    if (ci && co && co <= ci) bad.push($("#fOut"));
    if (bad.length) {
      bad.forEach(function (el) { el.parentNode.classList.add("invalid"); });
      err.textContent = "Please check the highlighted fields.";
      bad[0].focus(); return;
    }
    err.textContent = "";
    var lines = ["Hi Mountain Valley Resort,", "", msg, "", "Name: " + name];
    if (email) lines.push("Email: " + email);
    if (ci) lines.push("Check-in: " + ci);
    if (co) lines.push("Check-out: " + co);
    var body = lines.join("\n");
    if (via === "email") {
      location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Enquiry from " + name) + "&body=" + encodeURIComponent(body);
    } else {
      window.open(waBase + "?text=" + encodeURIComponent(body), "_blank", "noopener");
    }
  });

  /* ---------- Hero slideshow ---------- */
  var slides = $$(".hero-slides img"), dots = $(".hero-dots"), si = 0, timer;
  dots.innerHTML = slides.map(function (_, i) { return '<button role="tab" aria-label="Photo ' + (i + 1) + '" aria-selected="' + (i === 0) + '"></button>'; }).join("");
  var dotBtns = $$("button", dots);
  function go(i) {
    slides[si].classList.remove("active"); dotBtns[si].setAttribute("aria-selected", "false");
    si = (i + slides.length) % slides.length;
    slides[si].classList.add("active"); dotBtns[si].setAttribute("aria-selected", "true");
  }
  function play() { clearInterval(timer); if (!reduceMotion) timer = setInterval(function () { go(si + 1); }, 6500); }
  dotBtns.forEach(function (b, i) { b.onclick = function () { go(i); play(); }; });
  document.addEventListener("visibilitychange", function () { document.hidden ? clearInterval(timer) : play(); });
  play();

  /* ---------- Navigation ---------- */
  var nav = $(".nav"), hero = $("#home"), links = $$(".nav-links a"), pill = $(".nav-pill"), menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open); menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  menuBtn.onclick = function () { setMenu(!navLinks.classList.contains("open")); };
  links.forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  document.addEventListener("click", function (e) { if (!nav.contains(e.target)) setMenu(false); });

  function movePill(a) {
    if (!a || window.innerWidth <= 980) { pill.style.opacity = 0; return; }
    var r = a.getBoundingClientRect(), n = nav.getBoundingClientRect();
    pill.style.left = r.left - n.left + "px"; pill.style.width = r.width + "px"; pill.style.opacity = 1;
  }
  var sections = links.map(function (a) { return $(a.getAttribute("href")); });
  var ticking = false;
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("over-hero", y < hero.offsetHeight - 80);
    $("#toTop").classList.toggle("show", y > 900);
    var cur = null, mid = y + window.innerHeight * 0.35;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= mid) cur = links[i]; });
    links.forEach(function (a) { a.setAttribute("aria-current", a === cur ? "true" : "false"); });
    movePill(cur);
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
  $("#toTop").onclick = function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); };

  /* ---------- Scroll reveal ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  } else $$(".reveal").forEach(function (el) { el.classList.add("in"); });
  // Hero is always on screen at load: animate it in right away instead of waiting on the observer
  $$(".hero .reveal").forEach(function (el, i) { el.style.setProperty("--d", 0.15 + i * 0.12 + "s"); });
  requestAnimationFrame(function () { $$(".hero .reveal").forEach(function (el) { el.classList.add("in"); }); });

  /* ---------- Liquid glass: pointer sheen + Chromium refraction ---------- */
  if (window.matchMedia("(hover: hover)").matches) {
    document.addEventListener("pointermove", function (e) {
      var g = e.target.closest && e.target.closest(".glass");
      if (!g) return;
      var r = g.getBoundingClientRect();
      g.style.setProperty("--mx", e.clientX - r.left + "px");
      g.style.setProperty("--my", e.clientY - r.top + "px");
    }, { passive: true });
  }
  if (navigator.userAgentData && navigator.userAgentData.brands && navigator.userAgentData.brands.some(function (b) { return /Chrom/.test(b.brand); })) {
    document.documentElement.classList.add("refract");
  }

  fillIcons(document);

  // Rooms and gallery are built by script, so re-apply a deep link (e.g. from old room.html) once layout settles
  if (location.hash.length > 1) {
    var target = document.getElementById(location.hash.slice(1));
    var jump = function () { window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 24, behavior: "instant" }); };
    if (target) { requestAnimationFrame(jump); window.addEventListener("load", jump); }
  }
})();
