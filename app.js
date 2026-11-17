(function () {
  "use strict";

  /* ================= SETTINGS — change these ================= */
  // The donation QR is built into index.html so it always shows (even offline).
  // To use a different image file instead, put its path here, e.g. "assets/my-qr.png".
  var DONATE_QR = "";

  /* ================= words for the interface ================= */
  var T = {
    ms: {
      donate: "Derma", donateTitle: "Sokong ebook ini",
      donateText: "Ebook ini percuma untuk semua kanak-kanak. Jika anda ingin menyokong, imbas kod QR di bawah. Semoga Allah membalas kebaikan anda.",
      donateThanks: "Terima kasih! Jazakallahu khairan 🤲",
      contents: "📚 Isi Kandungan", start: "Mula Membaca ▶", toc: "📚 Isi Kandungan",
      coverSub: "Kisah para rasul untuk kanak-kanak",
      coverNote: "Semua kisah diambil daripada al-Quran dan hadis sahih (Sahih Muslim, dan Sahih al-Bukhari jika tiada dalam Sahih Muslim). Sumber disenaraikan pada setiap halaman. Cari ⭐ rahsia di setiap halaman!",
      tocTitle: "Pilih seorang rasul", rasul: "Rasul ke", of: "daripada",
      listen: "🔊 Dengar", stop: "⏹ Henti",
      lesson: "🌱 Pengajaran", act: "🎯 Aktiviti!", sources: "📜 Sumber kisah ini",
      q: "Al-Quran", m: "Sahih Muslim", b: "Sahih al-Bukhari",
      right: "Betul! Hebat! 🎉", wrong: "Cuba lagi! 💪", tru: "✔️ Betul", fls: "✖️ Salah",
      tapCard: "Ketuk saya!", secret: "Bintang rahsia dijumpai! ⭐", actStar: "Kamu dapat satu bintang! ⭐",
      orderDone: "Tepat sekali! Urutan betul! 🎉",
      endTitle: "Tahniah!", endSub: "Kamu telah membaca kisah 25 Rasul!",
      namePh: "Tulis nama kamu", certFor: "Sijil ini untuk", starsGot: "Bintang dikumpul", print: "🖨️ Cetak Sijil",
      again: "↺ Baca semula", reset: "Padam kemajuan", resetQ: "Padam semua bintang dan mula semula?",
      endNote: "Ingat: sentiasa berselawat ke atas Nabi Muhammad ﷺ dan beriman kepada semua rasul. 💚",
      as: "a.s.", missing: "📷 QR belum dimuat naik.",
      install: "📲 Pasang Aplikasi", installTitle: "Pasang di skrin utama",
      installed: "Aplikasi berjaya dipasang! 🎉", offline: "Sedia dibaca tanpa internet ✅",
      iosSteps: ["Buka laman ini dalam <b>Safari</b>.", "Ketuk butang <b>Kongsi</b> <span aria-hidden=\"true\">⬆️</span> di bawah atau di atas skrin.", "Pilih <b>Tambah ke Skrin Utama</b> ➕", "Ketuk <b>Tambah</b>. Ikon 25 Rasul akan muncul!"],
      otherSteps: ["Buka menu pelayar <b>⋮</b> (di penjuru atas).", "Pilih <b>Pasang aplikasi</b> atau <b>Tambah ke skrin utama</b>.", "Ketuk <b>Pasang</b>. Ikon 25 Rasul akan muncul!"]
    },
    en: {
      donate: "Donate", donateTitle: "Support this ebook",
      donateText: "This ebook is free for every child. If you would like to support it, scan the QR code below. May Allah reward your kindness.",
      donateThanks: "Thank you! Jazakallahu khairan 🤲",
      contents: "📚 Contents", start: "Start Reading ▶", toc: "📚 Contents",
      coverSub: "Stories of the prophets for children",
      coverNote: "Every story is taken from the Quran and authentic hadith (Sahih Muslim, and Sahih al-Bukhari where Sahih Muslim has none). Sources are listed on every page. Look for a secret ⭐ on every page!",
      tocTitle: "Choose a messenger", rasul: "Messenger", of: "of",
      listen: "🔊 Listen", stop: "⏹ Stop",
      lesson: "🌱 Lesson", act: "🎯 Activity!", sources: "📜 Sources for this story",
      q: "Quran", m: "Sahih Muslim", b: "Sahih al-Bukhari",
      right: "Correct! Well done! 🎉", wrong: "Try again! 💪", tru: "✔️ True", fls: "✖️ False",
      tapCard: "Tap me!", secret: "You found a secret star! ⭐", actStar: "You earned a star! ⭐",
      orderDone: "Perfect! That's the right order! 🎉",
      endTitle: "Congratulations!", endSub: "You have read the stories of the 25 Messengers!",
      namePh: "Write your name", certFor: "This certificate is for", starsGot: "Stars collected", print: "🖨️ Print Certificate",
      again: "↺ Read again", reset: "Reset progress", resetQ: "Clear all stars and start again?",
      endNote: "Remember: always send salawat upon Prophet Muhammad ﷺ and believe in all the messengers. 💚",
      as: "(peace be upon him)", missing: "📷 QR not uploaded yet.",
      install: "📲 Install App", installTitle: "Add to your home screen",
      installed: "App installed! 🎉", offline: "Ready to read offline ✅",
      iosSteps: ["Open this page in <b>Safari</b>.", "Tap the <b>Share</b> button <span aria-hidden=\"true\">⬆️</span> at the bottom or top of the screen.", "Choose <b>Add to Home Screen</b> ➕", "Tap <b>Add</b>. The 25 Rasul icon will appear!"],
      otherSteps: ["Open the browser menu <b>⋮</b> (top corner).", "Choose <b>Install app</b> or <b>Add to Home screen</b>.", "Tap <b>Install</b>. The 25 Rasul icon will appear!"]
    }
  };

  /* English spellings where they differ */
  var EN_NAMES = { "Syu'aib": "Shu'aib", "Daud": "Dawud", "Zulkifli": "Dhul-Kifl", "Ilyasa'": "Al-Yasa'", "Zakaria": "Zakariyya" };

  var R = window.RASUL;
  var LAST = R.length + 2; // 0 cover, 1 contents, 2..26 prophets, 27 end

  /* ================= saved state (safe if storage is blocked) ================= */
  function load(k, d) { try { var v = localStorage.getItem("k25r_" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem("k25r_" + k, JSON.stringify(v)); } catch (e) {} }

  var S = {
    lang: load("lang", "ms"),
    theme: load("theme", null),
    fs: load("fs", 0),
    page: load("page", 0),
    stars: load("stars", {}),   // { "s3": true (secret), "a3": true (activity) }
    name: load("name", "")
  };
  if (S.page > LAST + 1 || S.page < 0) S.page = 0;

  var $ = function (s, el) { return (el || document).querySelector(s); };
  var book = $("#book");
  var t = function (k) { return T[S.lang][k]; };
  var L = function (o) { return o[S.lang] || o.ms; };
  var nameOf = function (p) { return S.lang === "en" && EN_NAMES[p.n] ? EN_NAMES[p.n] : p.n; };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ================= theme / font / language ================= */
  function applyPrefs() {
    var dark = S.theme ? S.theme === "dark" : (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    $("#btnTheme").textContent = dark ? "☀️" : "🌙";
    document.documentElement.style.setProperty("--fs", [1.25, 1.4, 1.1][S.fs] + "rem");
    document.documentElement.lang = S.lang;
    $("#btnLang").textContent = S.lang === "ms" ? "BM" : "EN";
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = t(el.getAttribute("data-t")); });
  }
  $("#btnTheme").onclick = function () {
    S.theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    save("theme", S.theme); applyPrefs();
  };
  $("#btnFont").onclick = function () { S.fs = (S.fs + 1) % 3; save("fs", S.fs); applyPrefs(); };
  $("#btnLang").onclick = function () { S.lang = S.lang === "ms" ? "en" : "ms"; save("lang", S.lang); applyPrefs(); render(); };

  /* ================= stars ================= */
  function starTotal() { return Object.keys(S.stars).length; }
  function maxStars() { return R.length + R.filter(function (p) { return p.act; }).length; }
  function award(key, msg, x, y) {
    if (S.stars[key]) return;
    S.stars[key] = true; save("stars", S.stars);
    updateStars(); toast(msg); burst(x, y);
  }
  function updateStars() { $("#starCount").textContent = "⭐ " + starTotal(); }

  /* ================= effects ================= */
  var toastTimer;
  function toast(msg) {
    var el = $("#toast"); el.textContent = msg; el.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2200);
  }
  function burst(x, y, set) {
    var fx = $("#fx"); set = set || ["⭐", "✨", "🌟", "💛"];
    x = x || innerWidth / 2; y = y || innerHeight / 2;
    for (var i = 0; i < 14; i++) {
      var s = document.createElement("span"); s.className = "pop"; s.textContent = set[i % set.length];
      var a = Math.random() * Math.PI * 2, d = 80 + Math.random() * 120;
      s.style.left = x + "px"; s.style.top = y + "px";
      s.style.setProperty("--dx", Math.cos(a) * d + "px"); s.style.setProperty("--dy", Math.sin(a) * d - 60 + "px");
      fx.appendChild(s); setTimeout(s.remove.bind(s), 1400);
    }
  }
  function center(el) { var r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }

  /* ================= read aloud ================= */
  var speaking = false;
  function stopSpeak() { if (window.speechSynthesis) speechSynthesis.cancel(); speaking = false; var b = $(".speak"); if (b) { b.classList.remove("on"); b.textContent = t("listen"); } document.querySelectorAll(".story p").forEach(function (p) { p.classList.remove("hl"); }); }
  function speak(btn) {
    if (!window.speechSynthesis) return;
    if (speaking) return stopSpeak();
    var paras = Array.prototype.slice.call(document.querySelectorAll(".story p"));
    speaking = true; btn.classList.add("on"); btn.textContent = t("stop");
    var lang = S.lang === "ms" ? "ms-MY" : "en-GB";
    var voice = speechSynthesis.getVoices().filter(function (v) { return v.lang && v.lang.replace("_", "-").toLowerCase().indexOf(lang.slice(0, 2)) === 0; })[0];
    var i = 0;
    (function next() {
      paras.forEach(function (p) { p.classList.remove("hl"); });
      if (!speaking || i >= paras.length) return stopSpeak();
      var p = paras[i++]; p.classList.add("hl");
      var u = new SpeechSynthesisUtterance(p.textContent.replace(/ﷺ/g, S.lang === "ms" ? "sallallahu alaihi wasallam" : "peace be upon him").replace(/a\.s\./g, "alaihissalam"));
      u.lang = lang; u.rate = .9; if (voice) u.voice = voice;
      u.onend = next; u.onerror = stopSpeak;
      speechSynthesis.speak(u);
    })();
  }

  /* ================= pages ================= */
  function go(n, fromHistory) {
    stopSpeak();
    n = Math.max(0, Math.min(LAST, n));
    if (!fromHistory && n !== S.page) { try { history.pushState({ p: n }, "", "#" + n); } catch (e) {} }
    S.page = n; save("page", S.page);
    render(); window.scrollTo({ top: 0, behavior: fromHistory ? "auto" : "smooth" });
  }
  /* the phone's back button / back swipe turns back a page */
  window.addEventListener("popstate", function (e) {
    var p = e.state && typeof e.state.p === "number" ? e.state.p : 0;
    document.querySelectorAll(".modal").forEach(function (m) { m.hidden = true; });
    go(p, true);
  });

  function render() {
    var p = S.page, html;
    if (p === 0) html = cover();
    else if (p === 1) html = contents();
    else if (p === LAST) html = ending();
    else html = prophet(p - 2);
    book.innerHTML = html;
    $("#btnPrev").disabled = p === 0;
    $("#btnNext").disabled = p === LAST;
    $("#progressBar").style.width = (p / LAST * 100) + "%";
    bind(p);
  }

  function cover() {
    return '<section class="page cover">' +
      '<img class="cover-art" src="icons/icon.svg" alt="" width="180" height="180">' +
      '<div class="arabic">قَصَصُ الأَنْبِيَاء</div>' +
      '<h1>' + (S.lang === "ms" ? "Kisah 25 Rasul" : "Stories of the 25 Messengers") + '</h1>' +
      '<p>' + t("coverSub") + '</p>' +
      '<button class="btn" data-go="2">' + t("start") + '</button>' +
      '<button class="btn ghost" data-go="1">' + t("toc") + '</button>' +
      (isApp() ? "" : '<div class="install-btn"><button class="btn ghost" id="btnInstall">' + t("install") + '</button></div>') +
      '<p class="note">' + t("coverNote") + '</p>' +
      '</section>';
  }

  function contents() {
    var tiles = R.map(function (r, i) {
      var done = S.stars["s" + i] || S.stars["a" + i];
      return '<button class="tile" style="background:' + r.color + '" data-go="' + (i + 2) + '">' +
        (done ? '<span class="done">⭐</span>' : '') +
        '<span class="num">' + (i + 1) + '</span><span class="em">' + Array.from(r.scene)[0] + '</span>' +
        '<span class="nm">' + esc(nameOf(r)) + '</span></button>';
    }).join("");
    return '<section class="page"><h1 style="text-align:center">' + t("tocTitle") + '</h1>' +
      '<p style="text-align:center;margin:0">⭐ ' + starTotal() + ' / ' + maxStars() + '</p>' +
      '<div class="grid">' + tiles + '</div></section>';
  }

  function refsHtml(r) {
    return r.refs.map(function (x) {
      var label = t(x.k), link;
      if (x.k === "q") {
        var m = x.r.match(/(\d+):(\d+)/);
        link = m ? "https://quran.com/" + m[1] + "/" + m[2] : null;
      } else {
        link = "https://sunnah.com/" + (x.k === "m" ? "muslim" : "bukhari") + ":" + x.r;
      }
      var txt = (x.k === "q" ? x.r : "no. " + x.r) + (x.d ? " — " + L(x.d) : "");
      return '<li><span class="badge b-' + x.k + '">' + label + '</span>' +
        (link ? '<a href="' + link + '" target="_blank" rel="noopener">' + esc(txt) + '</a>' : esc(txt)) + '</li>';
    }).join("");
  }

  function prophet(i) {
    var r = R[i];
    var em = window.Intl && Intl.Segmenter ? Array.from(new Intl.Segmenter().segment(r.scene), function (x) { return x.segment; }) : Array.from(r.scene).filter(function (c) { return !/[️‍]/.test(c); });
    var pos = [[8, 12], [86, 70], [12, 72], [88, 14], [50, 80]][i % 5];
    var secret = '<button class="secret' + (S.stars["s" + i] ? " found" : "") + '" style="left:' + pos[0] + '%;top:' + pos[1] + '%" aria-label="⭐">⭐</button>';
    var honor = r.last ? "" : ' <span class="as">' + t("as") + '</span>';
    return '<article class="page" style="--tint:' + r.color + '">' +
      '<div class="head"><span class="chip">' + t("rasul") + " " + (i + 1) + " " + t("of") + ' 25</span>' +
      (window.speechSynthesis ? '<button class="speak">' + t("listen") + '</button>' : '') + '</div>' +
      '<div class="title"><div class="arabic">' + r.ar + '</div><h1>' + (S.lang === "ms" ? "Nabi " : "Prophet ") + esc(nameOf(r)) + '</h1>' + honor + '</div>' +
      '<div class="scene">' + em.map(function (c) { return "<span>" + c + "</span>"; }).join("") + secret + '</div>' +
      '<div class="story">' + L(r.story).map(function (s) { return "<p>" + esc(s) + "</p>"; }).join("") + '</div>' +
      '<div class="lesson"><b>' + t("lesson") + '</b>' + esc(L(r.lesson)) + '</div>' +
      (r.act ? activity(r.act, i) : "") +
      '<details class="refs"><summary>' + t("sources") + '</summary><ul>' + refsHtml(r) + '</ul></details>' +
      '</article>';
  }

  function activity(a, i) {
    var h = '<section class="activity" data-act="' + i + '"><h3>' + t("act") + '</h3><p style="margin:0">' + esc(L(a.q)) + '</p>';
    if (a.type === "quiz") {
      h += '<div class="opts">' + a.opts.map(function (o, k) { return '<button class="opt" data-k="' + k + '">' + esc(L(o)) + '</button>'; }).join("") + '</div>';
    } else if (a.type === "tf") {
      h += '<div class="tf"><button class="opt" data-k="1">' + t("tru") + '</button><button class="opt" data-k="0">' + t("fls") + '</button></div>';
    } else if (a.type === "reveal") {
      h += '<button class="card" aria-label="' + t("tapCard") + '"><div class="card-inner">' +
        '<div class="face front">🎁<small>' + t("tapCard") + '</small></div>' +
        '<div class="face back"><div class="arabic">' + a.ar + '</div><p>' + esc(L(a.a)) + '</p></div></div></button>';
    } else if (a.type === "tap") {
      h += (a.target === "count" ? '<div class="counter">0</div>' : '<div class="home">' + a.target + '</div>') +
        '<div class="taparea">' + a.items.map(function (c) { return '<button class="critter">' + c + '</button>'; }).join("") + '</div>';
    } else if (a.type === "order") {
      var idx = a.steps.map(function (_, k) { return k; });
      var shuffled = [2, 0, 1].filter(function (k) { return k < idx.length; });
      h += '<div class="opts">' + shuffled.map(function (k) { return '<button class="opt" data-k="' + k + '"><span class="tag"></span>' + esc(L(a.steps[k])) + '</button>'; }).join("") + '</div>';
    }
    return h + '<div class="feedback" aria-live="polite"></div></section>';
  }

  function ending() {
    return '<section class="page cert">' +
      '<div style="font-size:3.5rem">🏆🌟📖</div>' +
      '<h1>' + t("endTitle") + '</h1><p>' + t("endSub") + '</p>' +
      '<p class="small">' + t("certFor") + '</p>' +
      '<div class="who" id="who">' + esc(S.name) + '</div>' +
      '<input id="nameIn" maxlength="40" placeholder="' + t("namePh") + '" value="' + esc(S.name) + '">' +
      '<p style="font-size:1.5rem;margin:16px 0 4px">⭐ ' + starTotal() + ' / ' + maxStars() + '</p>' +
      '<p class="small" style="margin-top:0">' + t("starsGot") + '</p>' +
      '<p>' + t("endNote") + '</p>' +
      '<button class="btn" id="printBtn">' + t("print") + '</button>' +
      '<button class="btn ghost" data-go="0">' + t("again") + '</button>' +
      '<p><button class="small" id="resetBtn" style="text-decoration:underline">' + t("reset") + '</button></p>' +
      '</section>';
  }

  /* ================= interactions ================= */
  function bind(p) {
    var sp = $(".speak"); if (sp) sp.onclick = function () { speak(sp); };
    var sec = $(".secret");
    if (sec) sec.onclick = function () { var c = center(sec); sec.classList.add("found"); award("s" + (p - 2), t("secret"), c[0], c[1]); };

    var box = $(".activity");
    if (box) bindActivity(box, R[+box.getAttribute("data-act")].act, +box.getAttribute("data-act"));

    if (p === LAST) {
      burst(innerWidth / 2, innerHeight / 3, ["🎉", "⭐", "🌟", "💚", "✨"]);
      var inp = $("#nameIn");
      inp.oninput = function () { S.name = inp.value; save("name", S.name); $("#who").textContent = inp.value; };
      $("#printBtn").onclick = function () { window.print(); };
      $("#resetBtn").onclick = function () { if (confirm(t("resetQ"))) { S.stars = {}; save("stars", S.stars); updateStars(); render(); } };
    }
  }

  function win(box, i, msg) {
    var fb = $(".feedback", box); fb.textContent = msg || t("right"); fb.style.color = "var(--good)";
    var c = center(box);
    if (!S.stars["a" + i]) award("a" + i, t("actStar"), c[0], c[1]); else burst(c[0], c[1]);
  }

  function bindActivity(box, a, i) {
    var fb = $(".feedback", box);
    if (a.type === "quiz" || a.type === "tf") {
      var correct = a.type === "quiz" ? a.ans : (a.ans ? 1 : 0);
      box.querySelectorAll(".opt").forEach(function (b) {
        b.onclick = function () {
          if (box.dataset.solved) return;
          if (+b.dataset.k === correct) {
            b.classList.add("right"); box.dataset.solved = 1;
            win(box, i, a.why ? "🎉 " + L(a.why) : t("right"));
          } else {
            b.classList.remove("wrong"); void b.offsetWidth; b.classList.add("wrong");
            fb.textContent = t("wrong"); fb.style.color = "var(--bad)";
          }
        };
      });
    } else if (a.type === "reveal") {
      var card = $(".card", box);
      card.onclick = function () { card.classList.toggle("flip"); if (card.classList.contains("flip")) win(box, i, "✨"); };
    } else if (a.type === "tap") {
      var left = a.items.length, n = 0, counter = $(".counter", box);
      box.querySelectorAll(".critter").forEach(function (c) {
        c.onclick = function () {
          c.classList.add(a.target === "count" ? "counted" : "gone");
          n++; left--;
          if (counter) counter.textContent = n;
          if (left === 0) win(box, i, L(a.done));
        };
      });
    } else if (a.type === "order") {
      var step = 0;
      box.querySelectorAll(".opt").forEach(function (b) {
        b.onclick = function () {
          if (b.classList.contains("order-done")) return;
          if (+b.dataset.k === step) {
            step++; b.classList.add("order-done"); $(".tag", b).textContent = step + ".";
            fb.textContent = "";
            if (step === a.steps.length) win(box, i, t("orderDone"));
          } else {
            b.classList.remove("wrong"); void b.offsetWidth; b.classList.add("wrong");
            fb.textContent = t("wrong"); fb.style.color = "var(--bad)";
          }
        };
      });
    }
  }

  /* ================= navigation ================= */
  document.addEventListener("click", function (e) {
    var g = e.target.closest("[data-go]"); if (g) go(+g.getAttribute("data-go"));
  });
  $("#btnPrev").onclick = function () { go(S.page - 1); };
  $("#btnNext").onclick = function () { go(S.page + 1); };
  $("#btnToc").onclick = function () { go(1); };
  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT" || $(".modal:not([hidden])")) return;
    if (e.key === "ArrowRight") go(S.page + 1);
    if (e.key === "ArrowLeft") go(S.page - 1);
  });
  var sx = null, sy = null;
  book.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  book.addEventListener("touchend", function (e) {
    if (sx === null) return;
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5 && !e.target.closest(".activity")) go(S.page + (dx < 0 ? 1 : -1));
    sx = null;
  });

  /* ================= donation ================= */
  var modal = $("#donateModal"), img = $("#qrImg");
  var builtInQR = img.getAttribute("src");
  img.onerror = function () {
    if (img.src !== builtInQR) { img.src = builtInQR; return; } // file failed: fall back to the built-in QR
    img.hidden = true; $("#qrMissing").hidden = false;
  };
  if (DONATE_QR) img.src = DONATE_QR;
  $("#btnDonate").onclick = function () { modal.hidden = false; $(".close", modal).focus(); };
  document.querySelectorAll(".modal").forEach(function (m) {
    m.addEventListener("click", function (e) { if (e.target === m || e.target.closest("[data-close]")) m.hidden = true; });
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") document.querySelectorAll(".modal").forEach(function (m) { m.hidden = true; }); });

  /* ================= install as an app ================= */
  function isApp() {
    return (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
  }
  function isIOS() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }
  var installPrompt = null;
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); installPrompt = e; });
  window.addEventListener("appinstalled", function () { installPrompt = null; toast(t("installed")); burst(); if (S.page === 0) render(); });
  document.addEventListener("click", function (e) {
    if (!e.target.closest("#btnInstall")) return;
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then(function () { installPrompt = null; });
      return;
    }
    var steps = isIOS() ? t("iosSteps") : t("otherSteps");
    $("#installSteps").innerHTML = steps.map(function (x) { return "<li>" + x + "</li>"; }).join("");
    $("#installModal").hidden = false;
  });

  /* offline: cache the whole book after the first visit */
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", function () {
      var first = !navigator.serviceWorker.controller;
      navigator.serviceWorker.register("sw.js").then(function (reg) {
        if (first) navigator.serviceWorker.ready.then(function () { if (isApp()) toast(t("offline")); });
        return reg;
      }).catch(function () {});
    });
  }

  if (window.speechSynthesis) speechSynthesis.getVoices();
  var startHash = parseInt(location.hash.slice(1), 10);
  if (!isNaN(startHash) && startHash >= 0 && startHash <= LAST) S.page = startHash;
  try { history.replaceState({ p: S.page }, "", "#" + S.page); } catch (e) {}
  applyPrefs(); updateStars(); render();
})();
