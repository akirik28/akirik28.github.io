/* ==========================================================================
   Kitora UI v2 · içerik ve ilerleme (window.KICERIK)
   - Kit kataloğu: hangi ders, hangi ünite, kayıt ön eki (canlı kit-data.js'teki "store" ile aynı).
   - İçerik (kit-data.js, deneme-data.js, defter/<bölüm>.js, figs.js) canlı siteden okunur;
     hiçbiri buraya kopyalanmaz. Kitora aynı sitede yayınlanınca KOK "/" olur.
   - İlerleme canlı kitle aynı anahtarlarda tutulur, hesap.js bunları hesaba eşitler:
       <store><hesap|misafir>:state       bölümler (izlendi, soru cevapları)   kit.js ile aynı biçim
       <store><hesap|misafir>:ozet        ünite özeti (panel, profil bunu okur)
       <store><hesap|misafir>:deneme:<n>  Bluebook denemesi                  bluebook.js ile aynı biçim
       <store><hesap|misafir>:defter      okunan defterler                   defter.js ile aynı biçim
       kitora:v1:<hesap|misafir>:gunler   çalışılan günler (seri ve takvim)
   ========================================================================== */
(function () {
  "use strict";
  var KOK = /(^|\.)akirik28\.github\.io$/.test(location.hostname) ? "/" : "https://akirik28.github.io/";
  /* yerel deneme: kitora-ui-v2/_test/ayna/ sitenin aynası (kitora/, ap/, okul/, assets/); yayına girmemiş içerik burada denenir */
  var AYNA = /^(localhost|127\.0\.0\.1)$/.test(location.hostname) && location.pathname.match(/^.*\/_test\/ayna\//);
  if (AYNA) KOK = location.origin + AYNA[0];

  var DERSLER = {
    macro: { title: "Macroeconomics", code: "AP · ECON", art: "macro", rot: "-1.4deg", video: true, ad: "AP Macroeconomics" },
    micro: { title: "Microeconomics", code: "AP · ECON", art: "macro", renk: "micro", rot: ".8deg", video: true, ad: "AP Microeconomics" },
    stats: { title: "Statistics", code: "AP · STAT", art: "stats", rot: "1deg", video: true, ad: "AP Statistics" },
    hug: { title: "Human Geography", code: "AP · HUG", art: "hug", rot: "-.6deg", video: true, ad: "AP Human Geography" },
    bpf: { title: "Business with Personal Finance", code: "AP · BPF", art: "bpf", rot: "1.3deg", video: true, ad: "AP Business with Personal Finance" },
    calc: { title: "Calculus BC", code: "AP · MATH", art: "calc", rot: "1deg", video: true, ad: "AP Calculus BC" },
    psych: { title: "Psychology", code: "AP · PSYCH", art: "psych", renk: "psych", rot: "-1deg", video: true, ad: "AP Psychology" },
    csa: { title: "Computer Science A", code: "AP · CS", art: "csa", renk: "csa", rot: "1.2deg", video: true, ad: "AP Computer Science A" }
  };
  var KITLER = [
    { id: "macro-u1", ders: "macro", unit: 1, path: "ap/macroeconomics/unit-1/", store: "macro-u1:v1:" },
    { id: "macro-u2", ders: "macro", unit: 2, path: "ap/macroeconomics/unit-2/", store: "macro-u2:v1:" },
    { id: "micro-u1", ders: "micro", unit: 1, path: "ap/microeconomics/unit-1/", store: "micro-u1:v1:" },
    { id: "micro-u2", ders: "micro", unit: 2, path: "ap/microeconomics/unit-2/", store: "micro-u2:v1:" },
    { id: "stat-u1", ders: "stats", unit: 1, path: "ap/statistics/unit-1/", store: "stat-u1:v1:" },
    { id: "hug-u1", ders: "hug", unit: 1, path: "ap/human-geography/unit-1/", store: "hg-kit:v2:" },
    { id: "bpf-u1", ders: "bpf", unit: 1, path: "ap/business-personal-finance/unit-1/", store: "bpf-u1:v1:" },
    { id: "bpf-u2", ders: "bpf", unit: 2, path: "ap/business-personal-finance/unit-2/", store: "bpf-u2:v1:" },
    { id: "calc-u1", ders: "calc", unit: 1, path: "ap/calculus-bc/unit-1/", store: "calcbc-u1:v1:" },
    { id: "calc-u2", ders: "calc", unit: 2, path: "ap/calculus-bc/unit-2/", store: "calcbc-u2:v1:" },
    { id: "calc-u3", ders: "calc", unit: 3, path: "ap/calculus-bc/unit-3/", store: "calcbc-u3:v1:" },
    { id: "psych-u1", ders: "psych", unit: 1, path: "ap/psychology/unit-1/", store: "psych-u1:v1:" },
    { id: "csa-u1", ders: "csa", unit: 1, path: "ap/computer-science-a/unit-1/", store: "csa-u1:v1:" }
  ];
  /* veritabanındaki ders adları (ap_profil_kaydet ve quizler bunlarla eşleşir; canlı kitora/dersler.js ile aynı) */
  var OKUL = {
    matematik: ["AP Calculus BC/AB", "Calculus"],
    secmeli: ["Honours Comparative Literature", "Computer Science", "Innovation & Entrepreneurship Management", "Honours Human Geography",
      "Honours World History", "Ekonomi", "Psikoloji", "AP Statistics", "Advanced Biology 1", "Advanced Chemistry 1", "Advanced Physics 1",
      "AP Chemistry", "AP Physics C: Mechanics", "Fundamentals of Science"],
    ap: ["AP Macroeconomics", "AP Microeconomics", "AP Psychology"],
    onuncu: ["Precalculus and Trigonometry", "Chemistry 10", "Physics 10", "Biology 10", "English 10"]
  };
  /* onboarding seçenekleri → veritabanı adı */
  var SECMELI = { calc: "AP Calculus BC/AB", calcx: "Calculus", stats: "AP Statistics" };
  /* veritabanı ders adı → renk anahtarı */
  function dersRengi(ad) {
    var a = String(ad || "").toLowerCase();
    if (/precalc/.test(a)) return "precalc";
    if (/calculus/.test(a)) return "calc";
    if (/statistic/.test(a)) return "stats";
    if (/micro/.test(a)) return "micro";
    if (/psych|psikoloji/.test(a)) return "psych";
    if (/computer/.test(a)) return "csa";
    if (/macro|ekonomi/.test(a)) return "macro";
    if (/geograph/.test(a)) return "hug";
    if (/business|finance/.test(a)) return "bpf";
    if (/chemistry/.test(a)) return "chem";
    if (/physics/.test(a)) return "phys";
    if (/biology/.test(a)) return "bio";
    if (/^english/.test(a)) return "eng";
    return "cep";
  }

  /* Defterler: canlı sitede defteri olan bütün üniteler. liste = bölüm listesinin dosyası (kitli ünitede kit-data.js).
     grup: Defterler'deki AP / Okul ayrımı; kisa: ders çipindeki ad. */
  var DEFTER_DERS = {
    macro: { ad: "Macroeconomics", renk: "macro", art: "macro", grup: "ap" },
    micro: { ad: "Microeconomics", renk: "micro", art: "macro", grup: "ap" },
    stats: { ad: "Statistics", renk: "stats", art: "stats", grup: "ap" },
    hug: { ad: "Human Geography", renk: "hug", art: "hug", grup: "ap" },
    bpf: { ad: "Business with Personal Finance", kisa: "Business", renk: "bpf", art: "bpf", grup: "ap" },
    calc: { ad: "Calculus BC", renk: "calc", art: "calc", grup: "ap" },
    psych: { ad: "Psychology", renk: "psych", art: "psych", grup: "ap" },
    csa: { ad: "Computer Science A", renk: "csa", art: "csa", grup: "ap" },
    /* 10. sınıf okul dersleri (okul/<ders>/unit-N/, geçen yılın müfredatı) */
    precalc: { ad: "Precalculus and Trigonometry", kisa: "Precalculus", renk: "precalc", art: "calc", grup: "okul" },
    chem: { ad: "Chemistry", renk: "chem", art: "cep", grup: "okul" },
    phys: { ad: "Physics", renk: "phys", art: "phys", grup: "okul" },
    bio: { ad: "Biology", renk: "bio", art: "cep", grup: "okul" },
    eng: { ad: "English", renk: "eng", art: "cep", grup: "okul" }
  };
  var DEFTER_UNITELER = [
    ["macro-u1", "macro", 1, "ap/macroeconomics/unit-1/", "kit-data.js", "Basic Economic Concepts"],
    ["macro-u2", "macro", 2, "ap/macroeconomics/unit-2/", "defter/defter-liste.js", "Economic Indicators and the Business Cycle"],
    ["macro-u3", "macro", 3, "ap/macroeconomics/unit-3/", "defter/defter-liste.js", "National Income and Price Determination"],
    ["macro-u4", "macro", 4, "ap/macroeconomics/unit-4/", "defter/defter-liste.js", "Financial Sector"],
    ["macro-u5", "macro", 5, "ap/macroeconomics/unit-5/", "defter/defter-liste.js", "Long-Run Consequences of Stabilization Policies"],
    ["macro-u6", "macro", 6, "ap/macroeconomics/unit-6/", "defter/defter-liste.js", "Open Economy: International Trade and Finance"],
    ["micro-u1", "micro", 1, "ap/microeconomics/unit-1/", "kit-data.js", "Basic Economic Concepts"],
    ["micro-u2", "micro", 2, "ap/microeconomics/unit-2/", "defter/defter-liste.js", "Supply and Demand"],
    ["micro-u3", "micro", 3, "ap/microeconomics/unit-3/", "defter/defter-liste.js", "Production, Cost, and the Perfect Competition Model"],
    ["micro-u4", "micro", 4, "ap/microeconomics/unit-4/", "defter/defter-liste.js", "Imperfect Competition"],
    ["micro-u5", "micro", 5, "ap/microeconomics/unit-5/", "defter/defter-liste.js", "Factor Markets"],
    ["micro-u6", "micro", 6, "ap/microeconomics/unit-6/", "defter/defter-liste.js", "Market Failure and the Role of Government"],
    ["stat-u1", "stats", 1, "ap/statistics/unit-1/", "kit-data.js", "Exploring One-Variable Data"],
    ["hug-u1", "hug", 1, "ap/human-geography/unit-1/", "kit-data.js", "Thinking Geographically"],
    /* 2026-10-22: aşağıdakiler yazılıyor; yayına girene kadar "yakında" görünür */
    ["hug-u2", "hug", 2, "ap/human-geography/unit-2/", "defter/defter-liste.js", "Population and Migration Patterns and Processes"],
    ["hug-u3", "hug", 3, "ap/human-geography/unit-3/", "defter/defter-liste.js", "Cultural Patterns and Processes"],
    ["hug-u4", "hug", 4, "ap/human-geography/unit-4/", "defter/defter-liste.js", "Political Patterns and Processes"],
    ["hug-u5", "hug", 5, "ap/human-geography/unit-5/", "defter/defter-liste.js", "Agriculture and Rural Land-Use"],
    ["hug-u6", "hug", 6, "ap/human-geography/unit-6/", "defter/defter-liste.js", "Cities and Urban Land-Use"],
    ["hug-u7", "hug", 7, "ap/human-geography/unit-7/", "defter/defter-liste.js", "Industrial and Economic Development"],
    ["bpf-u1", "bpf", 1, "ap/business-personal-finance/unit-1/", "kit-data.js", "Business, Competition, and New Ideas"],
    ["bpf-u2", "bpf", 2, "ap/business-personal-finance/unit-2/", "kit-data.js", "Marketing"],
    ["bpf-u3", "bpf", 3, "ap/business-personal-finance/unit-3/", "defter/defter-liste.js", "Saving, Borrowing and Business Finance"],
    ["bpf-u4", "bpf", 4, "ap/business-personal-finance/unit-4/", "defter/defter-liste.js", "Management and Strategy"],
    ["bpf-u5", "bpf", 5, "ap/business-personal-finance/unit-5/", "defter/defter-liste.js", "Personal Goals, Budgeting, and Investing"],
    ["calc-u1", "calc", 1, "ap/calculus-bc/unit-1/", "kit-data.js", "Limits and Continuity"],
    ["calc-u2", "calc", 2, "ap/calculus-bc/unit-2/", "kit-data.js", "Differentiation: Definition and Fundamental Properties"],
    ["calc-u3", "calc", 3, "ap/calculus-bc/unit-3/", "kit-data.js", "Differentiation: Composite, Implicit, and Inverse Functions"],
    ["psych-u1", "psych", 1, "ap/psychology/unit-1/", "defter/defter-liste.js", "Biological Bases of Behavior"],
    ["psych-u2", "psych", 2, "ap/psychology/unit-2/", "defter/defter-liste.js", "Cognition"],
    ["psych-u3", "psych", 3, "ap/psychology/unit-3/", "defter/defter-liste.js", "Development and Learning"],
    ["psych-u4", "psych", 4, "ap/psychology/unit-4/", "defter/defter-liste.js", "Social Psychology and Personality"],
    ["psych-u5", "psych", 5, "ap/psychology/unit-5/", "defter/defter-liste.js", "Mental and Physical Health"],
    ["csa-u1", "csa", 1, "ap/computer-science-a/unit-1/", "kit-data.js", "Using Objects and Methods"],
    /* 10. sınıf okul defterleri (kitsiz; listede KIT.okul ve KIT.not var) */
    ["pre-u1", "precalc", 1, "okul/precalculus/unit-1/", "defter/defter-liste.js", "Functions"],
    ["pre-u2", "precalc", 2, "okul/precalculus/unit-2/", "defter/defter-liste.js", "Quadratics"],
    ["pre-u3", "precalc", 3, "okul/precalculus/unit-3/", "defter/defter-liste.js", "Polynomials"],
    ["pre-u4", "precalc", 4, "okul/precalculus/unit-4/", "defter/defter-liste.js", "Trigonometry"],
    ["pre-u5", "precalc", 5, "okul/precalculus/unit-5/", "defter/defter-liste.js", "Exponential and Logarithmic Functions"],
    ["pre-u6", "precalc", 6, "okul/precalculus/unit-6/", "defter/defter-liste.js", "Numbers and Algorithms"],
    ["chem-u1", "chem", 1, "okul/chemistry/unit-1/", "defter/defter-liste.js", "Interparticle Forces"],
    ["chem-u2", "chem", 2, "okul/chemistry/unit-2/", "defter/defter-liste.js", "Chemical Reactions"],
    ["chem-u3", "chem", 3, "okul/chemistry/unit-3/", "defter/defter-liste.js", "Mole Concept and Stoichiometry"],
    ["chem-u4", "chem", 4, "okul/chemistry/unit-4/", "defter/defter-liste.js", "Gases"],
    ["chem-u5", "chem", 5, "okul/chemistry/unit-5/", "defter/defter-liste.js", "Solutions and Colligative Properties"],
    ["phys-u1", "phys", 1, "okul/physics/unit-1/", "defter/defter-liste.js", "Force and Motion"],
    ["phys-u2", "phys", 2, "okul/physics/unit-2/", "defter/defter-liste.js", "Energy"],
    ["phys-u3", "phys", 3, "okul/physics/unit-3/", "defter/defter-liste.js", "Electricity"],
    ["phys-u4", "phys", 4, "okul/physics/unit-4/", "defter/defter-liste.js", "Waves"],
    ["bio-u1", "bio", 1, "okul/biology/unit-1/", "defter/defter-liste.js", "Theme 1: Energy"],
    ["bio-u2", "bio", 2, "okul/biology/unit-2/", "defter/defter-liste.js", "Theme 2: Ecology"],
    ["eng-u1", "eng", 1, "okul/english/unit-1/", "defter/defter-liste.js", "Cultural Perspectives · Passage Analysis"],
    ["eng-u2", "eng", 2, "okul/english/unit-2/", "defter/defter-liste.js", "Oedipus Rex"],
    ["eng-u3", "eng", 3, "okul/english/unit-3/", "defter/defter-liste.js", "The Catcher in the Rye"],
    ["eng-u4", "eng", 4, "okul/english/unit-4/", "defter/defter-liste.js", "Research and Argument"],
    ["eng-u5", "eng", 5, "okul/english/unit-5/", "defter/defter-liste.js", "MEB Skills Exams"]
  ].map(function (r) { return { id: r[0], ders: r[1], unit: r[2], path: r[3], liste: r[4], baslik: r[5] }; });
  function defterUnite(id) { var i; for (i = 0; i < DEFTER_UNITELER.length; i++) if (DEFTER_UNITELER[i].id === id) return DEFTER_UNITELER[i]; return null; }
  /* ünitenin bölüm listesi (window.KIT); kitsiz ünitede KIT.kitYok = true */
  function defterListesi(u) {
    var key = "dl:" + u.id;
    return onbellek[key] || (onbellek[key] = genel(KOK + u.path + u.liste, "KIT").then(function (K) { if (!K.store) K.store = "hg-kit:v2:"; return K; }));
  }
  function defterOku(u, slug) { var key = "def:" + u.id + slug; return onbellek[key] || (onbellek[key] = genel(KOK + u.path + "defter/" + slug + ".js", "DEFTER")); }
  /* bir dersin bütün ünitelerinde kaç defter var, kaçı okundu (Kitlerim ve panel kartları için) */
  function defterDurumu(ders, hepsi) {
    var us = DEFTER_UNITELER.filter(function (u) { return u.ders === ders && (hepsi || u.unit === 1); });
    return Promise.all(us.map(function (u) { return defterListesi(u).then(null, function () { return null; }); })).then(function (ls) {
      var r = { n: 0, o: 0 };
      ls.forEach(function (K) { if (!K) return; var m = okunanlar(K.store); (K.episodes || []).forEach(function (e) { r.n++; if (m[e.slug]) r.o++; }); });
      r.pct = r.n ? Math.round(100 * r.o / r.n) : 0;
      return r;
    });
  }
  function okunanlar(store) { var m = oku(store + kim() + ":defter"); return m && typeof m === "object" ? m : {}; }
  function okundu(store, slug) { var key = store + kim() + ":defter", m = okunanlar(store); if (!m[slug]) { m[slug] = Date.now(); yaz(key, m); } }
  /* panel için: son açılan defter ve hangi bölümde kalındığı */
  function sonDefterKey() { return "kitora:v1:" + kim() + ":son-defter"; }
  function sonDefter(v) { if (v === undefined) return oku(sonDefterKey()); yaz(sonDefterKey(), v); }

  /* "Kit ekle" kataloğu: rafa eklenebilen her kit. ders = DERSLER anahtarı (hazırsa), renk = kitora.js COLORS anahtarı.
     okul = bu kiti varsayılan yapan veritabanı ders adları (onboarding seçimi); sinif = bu sınıftaki herkese varsayılan
     (10. sınıfın dersleri veritabanına yazılmıyor). defter = DEFTER_DERS anahtarı: kit yerine o dersin defterleri açılır. */
  var KATALOG = [
    { id: "macro", tur: "ap", title: "AP Macroeconomics", code: "AP · ECON", renk: "macro", ders: "macro", okul: ["AP Macroeconomics"], ara: "macro ekonomi economics opportunity cost scarcity ppc supply demand comparative advantage arz talep" },
    { id: "stats", tur: "ap", title: "AP Statistics", code: "AP · STAT", renk: "stats", ders: "stats", okul: ["AP Statistics"], ara: "stat statistics istatistik standard deviation distribution sampling mean median histogram" },
    { id: "hug", tur: "ap", title: "AP Human Geography", code: "AP · HUG", renk: "hug", ders: "hug", okul: ["Honours Human Geography"], ara: "hug human geography coğrafya beşeri migration diffusion population scale map göç nüfus" },
    { id: "bpf", tur: "ap", title: "AP Business with Personal Finance", code: "AP · BPF", renk: "bpf", ders: "bpf", okul: [], ara: "bpf business personal finance budget credit interest marketing competition bütçe" },
    { id: "calc", tur: "ap", title: "AP Calculus BC", code: "AP · MATH", renk: "calc", ders: "calc", okul: ["AP Calculus BC/AB"], ara: "calc calculus bc ab derivative integral limit türev integral" },
    { id: "micro", tur: "ap", title: "AP Microeconomics", code: "AP · ECON", renk: "micro", ders: "micro", okul: ["AP Microeconomics"], ara: "micro mikro economics elasticity market firm" },
    { id: "okul-precalc", tur: "okul", title: "Precalculus and Trigonometry", code: "10. SINIF · MATH", renk: "precalc", ders: null, defter: "precalc", sinif: 10, okul: ["Precalculus and Trigonometry"], ara: "precalculus trigonometry matematik math function quadratic polynomial logarithm fonksiyon trigonometri" },
    { id: "okul-chem", tur: "okul", title: "Chemistry 10", code: "10. SINIF · KİMYA", renk: "chem", ders: null, defter: "chem", sinif: 10, okul: ["Chemistry 10"], ara: "chemistry kimya mole stoichiometry gases solutions reaction mol gaz çözelti" },
    { id: "okul-phys", tur: "okul", title: "Physics 10", code: "10. SINIF · FİZİK", renk: "phys", ders: null, defter: "phys", sinif: 10, okul: ["Physics 10"], ara: "physics fizik force motion energy electricity waves kuvvet hareket enerji elektrik dalga" },
    { id: "okul-bio", tur: "okul", title: "Biology 10", code: "10. SINIF · BİYOLOJİ", renk: "bio", ders: null, defter: "bio", sinif: 10, okul: ["Biology 10"], ara: "biology biyoloji energy ecology photosynthesis respiration ekoloji fotosentez" },
    { id: "okul-eng", tur: "okul", title: "English 10", code: "10. SINIF · İNGİLİZCE", renk: "eng", ders: null, defter: "eng", sinif: 10, okul: ["English 10"], ara: "english ingilizce oedipus catcher in the rye passage analysis research argument" },
    { id: "psych", tur: "ap", title: "AP Psychology", code: "AP · PSYCH", renk: "psych", ders: "psych", okul: ["AP Psychology", "Psikoloji"], ara: "psych psychology psikoloji brain neuron behavior memory learning beyin davranış" },
    { id: "csa", tur: "ap", title: "AP Computer Science A", code: "AP · CS", renk: "csa", ders: "csa", okul: ["Computer Science"], ara: "csa computer science java programming code kod yazılım object method" },
    { id: "crucible", tur: "cep", title: "The Crucible: savunma paketi", code: "CEP KİTİ · İNGİLİZCE", renk: "cep", ders: null, href: "crucible/", okul: [], ara: "crucible arthur miller salem abigail proctor english ingilizce" }
  ];
  function rafKey(id) { return "kitora:v1:" + (id || kim()) + ":kitlerim"; }
  function raf(profil) {
    var r = oku(rafKey()) || {}, eklenen = Array.isArray(r.eklenen) ? r.eklenen : [], gizli = Array.isArray(r.gizli) ? r.gizli : [];
    var sec = (profil && profil.secmeliler) || [];
    return KATALOG.map(function (k) {
      var varsayilan = k.okul.some(function (d) { return sec.indexOf(d) > -1; }) || (!!k.sinif && !!profil && profil.sinif === k.sinif);
      var basladi = !!k.ders && KITLER.some(function (x) { return x.ders === k.ders && ozet(x); });
      var rafta = (varsayilan && gizli.indexOf(k.id) < 0) || eklenen.indexOf(k.id) > -1 || (basladi && !varsayilan && gizli.indexOf(k.id) < 0);
      return { kit: k, varsayilan: varsayilan, eklendi: !varsayilan && eklenen.indexOf(k.id) > -1, rafta: rafta, hazir: !!k.ders || !!k.href || !!k.defter };
    });
  }
  function rafYaz(f) {
    var r = oku(rafKey()) || {};
    r.eklenen = Array.isArray(r.eklenen) ? r.eklenen : []; r.gizli = Array.isArray(r.gizli) ? r.gizli : [];
    f(r); yaz(rafKey(), r);
  }
  function rafaEkle(id) { rafYaz(function (r) { if (r.eklenen.indexOf(id) < 0) r.eklenen.push(id); r.gizli = r.gizli.filter(function (x) { return x !== id; }); }); }
  /* elle eklenen kaldırılır; varsayılan (ya da ilerlemesi olan) kit yalnızca gizlenir */
  function raftanCikar(id) { rafYaz(function (r) { r.eklenen = r.eklenen.filter(function (x) { return x !== id; }); if (r.gizli.indexOf(id) < 0) r.gizli.push(id); }); }

  function lg(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function oku(k) { try { return JSON.parse(lg(k) || "null"); } catch (e) { return null; } }
  function yaz(k, v) {
    try { window.localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
    if (window.HESAP) window.HESAP.yaz(k);
  }
  function kim() { var a = window.HESAP && window.HESAP.aktif(); return a ? a.id : "misafir"; }

  /* ---------------- içerik yükleme ---------------- */
  var yuklu = {};
  function betik(src) {
    if (yuklu[src]) return yuklu[src];
    return (yuklu[src] = new Promise(function (ok, no) {
      var s = document.createElement("script");
      s.src = src; s.async = true;
      s.onload = function () { ok(); };
      s.onerror = function () { delete yuklu[src]; no(new Error("yuklenemedi")); };
      document.head.appendChild(s);
    }));
  }
  function kit(id) { var i; for (i = 0; i < KITLER.length; i++) if (KITLER[i].id === id) return KITLER[i]; return null; }
  function url(k, dosya) { return KOK + k.path + (dosya || ""); }
  /* aynı adlı genel değişkeni (window.KIT, window.DENEME, window.DEFTER) okuyup sırayla yükle */
  var sira = Promise.resolve();
  function genel(src, ad) {
    var p = sira.then(function () {
      try { delete window[ad]; } catch (e) { window[ad] = undefined; }
      delete yuklu[src];
      return betik(src).then(function () { var v = window[ad]; if (!v) throw new Error("bos"); return v; });
    });
    sira = p.then(function () {}, function () {});
    return p;
  }
  var onbellek = {};
  function kitVerisi(k) { var key = "kit:" + k.id; return onbellek[key] || (onbellek[key] = genel(url(k, "kit-data.js"), "KIT")); }
  function denemeVerisi(k) { var key = "den:" + k.id; return onbellek[key] || (onbellek[key] = genel(url(k, "deneme/deneme-data.js"), "DENEME")); }
  function defterVerisi(k, slug) { var key = "def:" + k.id + slug; return onbellek[key] || (onbellek[key] = genel(url(k, "defter/" + slug + ".js"), "DEFTER")); }
  function sekiller() { return betik(KOK + "ap/_kit/figs.js").then(function () { return window.APFig || null; }, function () { return null; }); }

  /* ---------------- kit.js ile aynı soru kimliği ---------------- */
  function hash(s) { var h = 5381, i = s.length; while (i) h = (h * 33) ^ s.charCodeAt(--i); return (h >>> 0).toString(36); }
  function qid(q) { return hash(String(q.q) + "|" + (q.opts || []).join("|")); }

  /* metindeki *eğik* ve **kalın** işaretleri (kit-data, deneme-data ve defter böyle yazılır) */
  function md(s) {
    var t = String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
    return t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  /* ---------------- ünite durumu (kit.js biçimi; bilmediğimiz alanlara dokunmayız) ---------------- */
  function durumKey(k, id) { return k.store + (id || kim()) + ":state"; }
  function durum(k, id) {
    var s = oku(durumKey(k, id));
    if (!s || typeof s !== "object") s = { v: 1, cur: 0, speed: 1, tip: 0, out: {}, eps: {}, final: { ans: {}, i: 0, started: false, done: false, sig: "" } };
    if (!s.eps || typeof s.eps !== "object") s.eps = {};
    return s;
  }
  function bolum(s, slug) {
    var e = s.eps[slug];
    if (!e || typeof e !== "object") e = s.eps[slug] = { watched: false, step: "video", ans: {}, hw: {} };
    if (!e.ans || typeof e.ans !== "object") e.ans = {};
    return e;
  }
  function soruDurumu(ep, e) {
    var r = { n: ep.questions.length, ans: 0, ok: 0 };
    ep.questions.forEach(function (q) { var p = e && e.ans ? e.ans[qid(q)] : null; if (typeof p === "number" && p >= 0) { r.ans++; if (p === q.a) r.ok++; } });
    r.done = r.n > 0 && r.ans === r.n;
    return r;
  }
  function bittiMi(ep, e) { return !!(e && e.watched) || soruDurumu(ep, e).done; }
  /* durumu yaz ve panel için özet çıkar (kit.js'in ozet biçimi + "bitti") */
  function kaydet(k, KIT, s) {
    var id = kim();
    yaz(durumKey(k, id), s);
    var r = { v: 1, course: KIT.course || "", unit: KIT.unitLabel || "", url: "/" + k.path, n: KIT.episodes.length, done: 0, watched: 0, bitti: 0, q: 0, ans: 0, ok: 0, cur: s.cur, curTitle: "", t: Date.now() };
    KIT.episodes.forEach(function (ep) {
      var e = s.eps[ep.slug], st = soruDurumu(ep, e);
      r.q += st.n; r.ans += st.ans; r.ok += st.ok;
      if (st.done) r.done++;
      if (e && e.watched) r.watched++;
      if (bittiMi(ep, e)) r.bitti++;
    });
    var c = KIT.episodes[s.cur];
    if (c) r.curTitle = c.title || "";
    yaz(k.store + id + ":ozet", r);
  }
  function ozet(k, id) {
    var o = oku(k.store + (id || kim()) + ":ozet");
    if (!o || typeof o !== "object" || !(o.n > 0)) return null;
    var b = typeof o.bitti === "number" ? o.bitti : Math.max(o.done || 0, o.watched || 0);
    o.pct = Math.min(100, Math.round(100 * b / o.n));
    o.bitenler = b;
    return o;
  }

  /* ---------------- denemeler (bluebook.js biçimi) ---------------- */
  function denemeKey(k, no, id) { return k.store + (id || kim()) + ":deneme:" + no; }
  function deneme(k, no, id) { var d = oku(denemeKey(k, no, id)); return d && d.v === 1 && Array.isArray(d.ans) ? d : null; }
  function denemeYaz(k, no, d) { yaz(denemeKey(k, no), d); }

  /* ---------------- çalışılan günler ---------------- */
  function gun(d) { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function gunlerKey(id) { return "kitora:v1:" + (id || kim()) + ":gunler"; }
  function gunlerKayit(id) { var g = oku(gunlerKey(id)); return g && typeof g === "object" ? g : {}; }
  /* çalışılan günler: v2'nin kendi kaydı + canlı kitin izleri (ünite özeti, denemeler, kit açılışları) */
  function gunler(id) {
    var g = {}, kayit = gunlerKayit(id), x, kim_ = id || kim(), keys = [], i;
    for (x in kayit) g[x] = kayit[x];
    function ekle(t) { if (typeof t === "number" && t > 1e12) { var d = gun(new Date(t)); if (!g[d]) g[d] = 1; } }
    KITLER.forEach(function (k) {
      var o = oku(k.store + kim_ + ":ozet"), no, d;
      if (o) ekle(o.t);
      for (no = 1; no <= 5; no++) { d = oku(k.store + kim_ + ":deneme:" + no); if (d) { ekle(d.started); if (d.done && d.started) ekle(d.started + (d.used || 0)); } }
    });
    try { for (i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i)); } catch (e) {}
    keys.forEach(function (key) { if (key && key.indexOf("kitora:v1:" + kim_ + ":son:") === 0) ekle(Number(lg(key))); });
    return g;
  }
  function calisti() {
    var g = gunlerKayit(), bugun = gun();
    g[bugun] = (g[bugun] || 0) + 1;
    var keys = Object.keys(g).sort();
    while (keys.length > 120) delete g[keys.shift()];
    yaz(gunlerKey(), g);
  }
  function seri(id) {
    var g = gunler(id), d = new Date(), simdi = 0, enIyi = 0, run = 0, keys = Object.keys(g).sort(), i, prev = null;
    if (!g[gun(d)]) d.setDate(d.getDate() - 1);               /* bugün henüz çalışmadıysa seri dünden sayılır */
    while (g[gun(d)]) { simdi++; d.setDate(d.getDate() - 1); }
    for (i = 0; i < keys.length; i++) {
      var t = new Date(keys[i] + "T12:00:00");
      run = prev && Math.round((t - prev) / 864e5) === 1 ? run + 1 : 1;
      if (run > enIyi) enIyi = run;
      prev = t;
    }
    return { simdi: simdi, enIyi: Math.max(enIyi, simdi) };
  }
  /* son 6 hafta, pazartesiden başlayan sütunlar; değer 0–3 */
  function takvim(id) {
    var g = gunler(id), bugun = new Date(), wd = (bugun.getDay() + 6) % 7, bas = new Date(bugun), out = [], i;
    bas.setDate(bugun.getDate() - wd - 35);
    for (i = 0; i < 42; i++) {
      var d = new Date(bas); d.setDate(bas.getDate() + i);
      var n = g[gun(d)] || 0;
      out.push(n === 0 ? 0 : n < 3 ? 1 : n < 8 ? 2 : 3);
    }
    return { hucreler: out, bugun: 35 + wd };
  }

  /* ---------------- toplu istatistik ve rozetler ---------------- */
  function istatistik(id) {
    var r = { bolum: 0, soru: 0, dogru: 0, deneme: 0, tam: false, zor: false, unite: false, defter: 0, son: null, enIyiUnite: { b: 0, n: 1 } };
    KITLER.forEach(function (k) {
      var o = ozet(k, id), no, d, df;
      if (o) {
        r.bolum += o.bitenler; r.soru += o.ans || 0; r.dogru += o.ok || 0;
        if (o.bitenler >= o.n) r.unite = true;
        if (o.bitenler / o.n > r.enIyiUnite.b / r.enIyiUnite.n) r.enIyiUnite = { b: o.bitenler, n: o.n };
        if (!r.son || (o.t || 0) > (r.son.ozet.t || 0)) r.son = { kit: k, ozet: o };
      }
      for (no = 1; no <= 5; no++) {
        d = deneme(k, no, id);
        if (!d || !d.done) continue;
        r.deneme++; r.soru += d.ans.length; r.dogru += d.score || 0;
        if (d.score === d.ans.length) r.tam = true;
        if (no === 5) r.zor = true;
      }
      df = oku(k.store + (id || kim()) + ":defter");
      if (df && typeof df === "object") r.defter += Object.keys(df).length;
    });
    var s = seri(id);
    r.seri = s.simdi; r.enIyiSeri = s.enIyi;
    return r;
  }
  /* her rozet: kazanıldı mı + ne kadar kaldı (n / hedef) */
  function rozetler(r) {
    var u = r.enIyiUnite || { b: 0, n: 1 };
    return [
      { name: "İlk bölüm", glyph: "1", how: "İlk bölümü bitir", c: "#F5D85E", rot: "-4deg", n: r.bolum, hedef: 1 },
      { name: "3 gün seri", glyph: "3", how: "3 gün üst üste çalış", c: "#F4A97A", rot: "3deg", n: r.enIyiSeri, hedef: 3 },
      { name: "İlk deneme", glyph: "D", how: "Bir deneme bitir", c: "#8FD3B4", rot: "-2deg", n: r.deneme, hedef: 1 },
      { name: "7 gün seri", glyph: "7", how: "7 gün üst üste çalış", c: "#F4A97A", rot: "2deg", n: r.enIyiSeri, hedef: 7 },
      { name: "Ünite bitti", glyph: "Ü", how: "Bir ünitenin bütün bölümlerini bitir", c: "#B9C7FF", rot: "-3deg", n: u.b, hedef: u.n },
      { name: "Tam puan", glyph: "✓", how: "Bir denemede tam puan al", c: "#8FD3B4", rot: "4deg", n: r.tam ? 1 : 0, hedef: 1 },
      { name: "Çok zor", glyph: "Z", how: "Deneme 5'i bitir", c: "#D9B8F5", rot: "-2deg", n: r.zor ? 1 : 0, hedef: 1 },
      { name: "Defterci", glyph: "N", how: "10 defter oku", c: "#F5D85E", rot: "3deg", n: r.defter, hedef: 10 }
    ].map(function (b) { b.n = Math.min(b.n || 0, b.hedef); b.got = b.n >= b.hedef; return b; });
  }

  /* bu hesabın bütün kit ilerlemesini sıfırla ("null" yazılır; kit.js ve bluebook.js bunu boş kayıt sayar) */
  function sifirla() {
    var id = kim(), no;
    KITLER.forEach(function (k) {
      [durumKey(k, id), k.store + id + ":ozet", k.store + id + ":defter"].forEach(function (key) { if (lg(key) != null) yaz(key, null); });
      for (no = 1; no <= 5; no++) if (lg(denemeKey(k, no, id)) != null) yaz(denemeKey(k, no, id), null);
    });
    if (lg(gunlerKey(id)) != null) yaz(gunlerKey(id), null);
  }

  window.KICERIK = {
    DEFTER_DERS: DEFTER_DERS, DEFTER_UNITELER: DEFTER_UNITELER, defterUnite: defterUnite, defterListesi: defterListesi, defterDurumu: defterDurumu, defterOku: defterOku, okunanlar: okunanlar, okundu: okundu, sonDefter: sonDefter,
    KATALOG: KATALOG, raf: raf, rafaEkle: rafaEkle, raftanCikar: raftanCikar,
    KOK: KOK, DERSLER: DERSLER, KITLER: KITLER, OKUL: OKUL, SECMELI: SECMELI, dersRengi: dersRengi,
    kit: kit, url: url, kitVerisi: kitVerisi, denemeVerisi: denemeVerisi, defterVerisi: defterVerisi, sekiller: sekiller,
    qid: qid, md: md, kim: kim, oku: oku, yaz: yaz,
    durum: durum, bolum: bolum, soruDurumu: soruDurumu, bittiMi: bittiMi, kaydet: kaydet, ozet: ozet,
    deneme: deneme, denemeYaz: denemeYaz,
    calisti: calisti, seri: seri, takvim: takvim, istatistik: istatistik, rozetler: rozetler, sifirla: sifirla
  };
})();
