/* Kitpath UI v2 — örnek veriler.
   Yalnızca giriş yapılmamışken panel, profil ve yönetimde "örnek görünüm" olarak gösterilir
   (ve ana sayfadaki terim şeridi için). Giriş yapılınca her şey assets/hesap.js (Supabase) ve
   assets/icerik.js'ten (ilerleme kayıtları + canlı siteden kit içerikleri) gelir. */
window.KDATA = {
  user: { first: "Ada", last: "Kırık", initials: "AK", grade: 11, email: "ada.kirik@uaa.k12.tr", electives: ["calc", "stats"], streak: 3, bestStreak: 5 },

  courses: [
    { id: "macro", title: "Macroeconomics", code: "AP · ECON", art: "macro", units: "1 ünite hazır", video: true, rot: "-1.4deg", pct: 10, next: "Sıradaki: 1.2-1 Fırsat Maliyeti", href: "unite/" },
    { id: "stats", title: "Statistics", code: "AP · STAT", art: "stats", units: "1 ünite hazır", video: false, rot: "1deg", pct: 35, next: "Sıradaki: Unit 1 denemesi", href: "unite/" },
    { id: "hug", title: "Human Geography", code: "AP · HUG", art: "hug", units: "1 ünite hazır", video: true, rot: "-.6deg", pct: 60, next: "Sıradaki: Unit 1 · 1.6", href: "unite/" },
    { id: "bpf", title: "Business with Personal Finance", code: "AP · BPF", art: "bpf", units: "2 ünite hazır", video: true, rot: "1.3deg", pct: 0, next: "Henüz başlamadın", href: "unite/" }
  ],

  terms: [
    ["Opportunity cost", "macro"], ["Standard deviation", "stats"], ["Diffusion", "hug"], ["Compound interest", "bpf"],
    ["Comparative advantage", "macro"], ["Sampling distribution", "stats"], ["Migration", "hug"], ["Budget", "bpf"],
    ["Supply & demand", "macro"], ["Normal distribution", "stats"], ["Population pyramid", "hug"], ["Credit score", "bpf"]
  ],

  /* AP Macroeconomics Unit 1 — bölüm adları, süreler ve terimler sunum-sitesi'ndeki kit-data.js'ten. */
  unit: {
    course: "macro", label: "AP MACROECONOMICS · UNIT 1", title: "Basic Economic", titleHl: "Concepts",
    steps: [
      { code: "1.1", title: "Kıtlık ve Ekonomist Gibi Düşünmek", en: "SCARCITY", sec: 276, terms: ["Scarcity", "Shortage", "Factors of production", "Physical capital", "Human capital", "Entrepreneurship", "Positive statement", "Normative statement", "Marginal analysis", "Ceteris paribus"] },
      { code: "1.2-1", title: "Fırsat Maliyeti ve PPC", en: "OPPORTUNITY COST AND THE PPC", sec: 239, terms: ["Opportunity cost", "Trade-offs", "Production possibilities curve (PPC)", "Efficient", "Inefficient", "Unattainable", "Productive efficiency", "Allocative efficiency"],
        ozet: "Her seçimin gerçek bedeli, vazgeçtiğin en iyi seçenektir: opportunity cost. Konser biletinin neden 600 değil 1000 liraya mal olduğunu, ilk modelin olan PPC’yi ve productive ile allocative efficiency farkını göreceksin." },
      { code: "1.2-2", title: "PPC’nin Şekli ve Kayması", en: "PPC SHAPE AND SHIFTS", sec: 263, terms: ["Constant opportunity cost", "Law of increasing opportunity cost", "Bowed out PPC", "Economic growth", "Consumer goods", "Capital goods"] },
      { code: "1.3-1", title: "Mutlak ve Karşılaştırmalı Üstünlük", en: "ABSOLUTE VS COMPARATIVE ADVANTAGE", sec: 268, terms: ["Absolute advantage", "Comparative advantage", "Per-unit opportunity cost", "Output question", "Input question", "Terms of trade"] },
      { code: "1.3-2", title: "Uzmanlaşma ve Ticaretten Kazanç", en: "SPECIALIZATION AND GAINS FROM TRADE", sec: 257, terms: ["Specialization", "Terms of trade", "Mutually beneficial trade", "Gains from trade", "Consumption beyond the PPC", "Export", "Import"] },
      { code: "1.4-1", title: "Talep Yasası", en: "THE LAW OF DEMAND", sec: 267, terms: ["Demand", "Quantity demanded", "Law of demand", "Demand curve", "Substitution effect", "Income effect", "Diminishing marginal utility"] },
      { code: "1.4-2", title: "Talebi Kaydıran Etkenler", en: "VİDEO YAKINDA", sec: 0, terms: [] },
      { code: "1.5", title: "Arz Yasası ve Arzı Kaydıranlar", en: "VİDEO YAKINDA", sec: 0, terms: [] },
      { code: "1.6-1", title: "Denge, Fazla ve Kıtlık", en: "VİDEO YAKINDA", sec: 0, terms: [] },
      { code: "1.6-2", title: "Dengenin Değişmesi ve Çift Kayma", en: "VİDEO YAKINDA", sec: 0, terms: [] }
    ],
    check: {
      q: "Tabloda bir ülkenin halı ve traktör üretim imkânları var. Ülke B noktasından D noktasına geçerse bu hareketin <em>opportunity cost</em>’u nedir?",
      table: { head: ["Nokta", "Halı (bin)", "Traktör (bin)"], rows: [["A", 20, 0], ["B", 18, 1], ["C", 14, 2], ["D", 8, 3], ["E", 0, 4]] },
      opts: ["Traktör başına 5 halı", "2 traktör", "10 halı", "8 halı"]
    },
    tests: [["Isınma", 20, "17/20"], ["Temel", 25], ["Orta", 25], ["Zor", 30], ["Çok zor", 35]]
  },

  /* Deneme 1 (Isınma) — sorular sunum-sitesi'ndeki deneme-data.js'ten. */
  test: {
    title: "Deneme 1 · Isınma", course: "AP MACROECONOMICS · UNIT 1", minutes: 20, total: 20,
    questions: [
      { t: "1.1", q: "Which of the following best describes the basic economic problem of scarcity?", o: ["Some goods are temporarily unavailable in stores because their prices are set too low.", "Governments do not print enough money for people to buy everything they want.", "Poor countries have fewer resources than rich countries do.", "Society’s wants are unlimited, but the resources available to satisfy them are limited."], a: 3 },
      { t: "1.2-1", q: "Defne has a free Saturday afternoon. She can work a shift at a café and earn 600 TL, tutor a younger student for 450 TL, or go to a free concert in the park. She can do only one of these, and she chooses the concert. What is the opportunity cost of her choice?", o: ["Nothing, because the concert is free", "450 TL, the earnings from tutoring", "600 TL, the earnings from the café shift", "1,050 TL, the earnings from both jobs"], a: 2 },
      { t: "1.2-1", q: "The table shows five points on a country’s production possibilities curve. If the country moves from point B to point C, what is the opportunity cost of the additional solar panel?", o: ["2 barrels of olive oil", "4 barrels of olive oil", "8 barrels of olive oil", "24 barrels of olive oil"], a: 1,
        fig: { head: ["Point", "Olive oil (barrels)", "Solar panels"], rows: [["A", 30, 0], ["B", 28, 1], ["C", 24, 2], ["D", 16, 3], ["E", 0, 4]] } }
    ]
  },

  result: {
    score: 17, total: 20, time: "16 DK 18 SN",
    topics: [["1.1", "Kıtlık ve Ekonomist Gibi Düşünmek", 1], ["1.2-1", "Fırsat Maliyeti ve PPC", 0], ["1.2-2", "PPC’nin Şekli ve Kayması", 2], ["1.3-1", "Mutlak ve Karşılaştırmalı Üstünlük", 2], ["1.3-2", "Uzmanlaşma ve Ticaretten Kazanç", 2], ["1.4-1", "Talep Yasası", 2], ["1.4-2", "Talebi Kaydıran Etkenler", 2], ["1.5", "Arz Yasası ve Arzı Kaydıranlar", 2], ["1.6-1", "Denge, Fazla ve Kıtlık", 2], ["1.6-2", "Dengenin Değişmesi ve Çift Kayma", 2]],
    wrongs: [
      { no: 1, t: "1.1", q: "Which of the following best describes the basic economic problem of scarcity?", mine: "A · prices set too low", right: "D · unlimited wants, limited resources", why: "Scarcity = sınırsız istek, sınırlı kaynak; zengin ülkeler dahil her toplumda vardır ve kalıcıdır. Bir malın mağazada geçici olarak bitmesi shortage’dır (fiyat dengenin altındayken oluşur, fiyat yükselince kapanır); en sık karıştırılan şık budur." },
      { no: 3, t: "1.2-1", q: "Defne chooses the free concert over a 600 TL café shift and 450 TL tutoring. What is the opportunity cost?", mine: "D · 1,050 TL", right: "C · 600 TL", why: "Opportunity cost vazgeçilen en iyi tek alternatiftir: kafe vardiyası, 600 TL. 1.050 TL çeldiricisi bütün alternatifleri toplar; ama Defne o öğleden sonra iki işi birden yapamazdı. “Bedava” diyen şık da yanlış: vazgeçtiği kazanç bir maliyettir." },
      { no: 5, t: "1.2-1", q: "Moving from point B to point C on the PPC, what is the opportunity cost of the additional solar panel?", mine: "D · 24 barrels", right: "B · 4 barrels", why: "B’den C’ye geçerken güneş paneli 1’den 2’ye çıkar, zeytinyağı 28’den 24 varile iner: vazgeçilen 4 varil. 24 varil C noktasındaki üretim düzeyidir, maliyet değil. Opportunity cost = vazgeçilen ÷ kazanılan." }
    ]
  },

  quizzes: [
    { id: "stats-q3", course: "stats", title: "AP Statistics · Quiz 3", day: "27", mon: "EKİ", meta: "Salı 23:59 · 20 üzerinden", left: "5 gün", urgent: true, status: "open" },
    { id: "hug-u1", course: "hug", title: "AP Human Geography · Unit 1", day: "20", mon: "EKİ", meta: "Son tarih geçti · 100 üzerinden", left: "", status: "wait", pending: 2 },
    { id: "macro-u1", course: "macro", title: "AP Macro · Unit 1 quiz", day: "3", mon: "KAS", meta: "Salı 23:59 · 100 üzerinden", left: "12 gün", status: "open" },
    { id: "stats-q2", course: "stats", title: "AP Statistics · Quiz 2", day: "13", mon: "EKİ", meta: "13 Ekim · 20 üzerinden", left: "", status: "done" }
  ],

  grades: [
    { course: "stats", title: "AP Statistics · Quiz 3", date: "27 Ekim", status: "Açık", score: "— / 20", open: true },
    { course: "stats", title: "AP Statistics · Quiz 2", date: "13 Ekim", status: "Notlandı", score: "17 / 20" },
    { course: "hug", title: "AP Human Geography · Unit 1", date: "8 Ekim", status: "Notlandı", score: "84 / 100" },
    { course: "stats", title: "AP Statistics · Quiz 1", date: "29 Eylül", status: "Notlandı", score: "15 / 20" }
  ],

  badges: [
    { name: "İlk bölüm", glyph: "1", how: "İlk videoyu bitir", c: "#F5D85E", rot: "-4deg", got: true },
    { name: "3 gün seri", glyph: "3", how: "3 gün üst üste", c: "#F4A97A", rot: "3deg", got: true },
    { name: "İlk deneme", glyph: "D", how: "Bir deneme bitir", c: "#8FD3B4", rot: "-2deg", got: true },
    { name: "7 gün seri", glyph: "7", how: "7 gün üst üste" },
    { name: "Ünite bitti", glyph: "Ü", how: "Bir üniteyi bitir" },
    { name: "20/20", glyph: "20", how: "Bir denemede tam puan" },
    { name: "Çok zor", glyph: "Z", how: "Deneme 5’i geç" },
    { name: "Defterci", glyph: "N", how: "10 defter oku" }
  ],

  /* son 6 hafta, 0–3 arası yoğunluk; sonuncu sütunun 5. hücresi bugün */
  calendar: [0,1,0,2,1,0,0, 1,2,0,0,3,1,0, 0,0,1,2,2,1,0, 2,3,1,0,0,0,1, 1,0,2,3,0,1,0, 0,2,3,2,0,0,0],
  todayIndex: 39,

  /* yönetim: örnek öğrenciler (gerçek isimler Supabase'den gelecek) */
  students: [
    { name: "Deniz A.", ini: "DA", c: "#F4A97A", score: 88 },
    { name: "Ece K.", ini: "EK", c: "#8FD3B4", score: 92 },
    { name: "Mert Y.", ini: "MY", c: "#B9C7FF", score: null },
    { name: "Zeynep T.", ini: "ZT", c: "#F5D85E", score: 76 },
    { name: "Can B.", ini: "CB", c: "#D9B8F5", score: null },
    { name: "Elif S.", ini: "ES", c: "#F4C9A9", score: 81 }
  ]
};
