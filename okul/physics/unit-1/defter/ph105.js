/* Kitpath not defteri · ph105 · 1.5 Yatay Atış
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics · Unit 1) + MEB 10. sınıf Fizik. Blok türleri: /ap/_kit/defter.js başı.
   Not: g = 10 m/s². Yardımcı işlev yalnızca yörünge noktalarını üretir: 20 m yükseklik, v₀ = 15 m/s, t = 0…2 s.
   Grafikte bir kare 5 m: x = 15t/5 = 3t, y = (20 − 5t²)/5 = 4 − t². */
window.DEFTER = (function () {
  function yorunge() {
    var p = [], i, t;
    for (i = 0; i <= 8; i++) { t = i / 4; p.push([3 * t, 4 - t * t]); }
    return p;
  }

  return {
    slug: "ph105",
    amac: "Bu konu yatay fırlatılan cismin hareketini anlatıyor. Hareketi yatayda sabit hızlı, düşeyde serbest düşme olarak ikiye ayırmayı; uçuş süresini, menzili ve yere çarpma hızını hesaplamayı öğreneceksin.",
    bolumler: [
      {
        baslik: "İki hareket bir arada",
        kisa: "Yatay atışta yatay ve düşey hareketler birbirinden bağımsızdır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🏀", terim: "Projectile", tr: "atılan cisim", tanim: "Fırlatıldıktan sonra yalnız yerçekiminin etkisinde hareket eden cisim; hava direnci ihmal edilir.", ornek: "Masanın kenarından yuvarlanıp düşen bilye." },
              { ikon: "↔️", terim: "Horizontal projectile", tr: "yatay atış", tanim: "Cisim yatay bir ilk hızla (v₀) fırlatılır; ilk düşey hızı sıfırdır.", ornek: "Balkondan yatay fırlatılan top." },
              { ikon: "〰️", terim: "Trajectory", tr: "yörünge", tanim: "Cismin havada izlediği yol. Yatay atışta yarım paraboldür.", ornek: "Hortumdan yatay fışkıran su." }
            ] },
          { tip: "ikili", sol: { ikon: "↔️", baslik: "Yatay (x) hareket", maddeler: ["Sabit hızlı hareket, a = 0", "vx = v₀ ve x = v₀·t"] },
            sag: { ikon: "⬇️", baslik: "Düşey (y) hareket", maddeler: ["Serbest düşme, a = g", "vy = g·t ve y = ½·g·t²"] },
            oyun: [
              { metin: "Hız hiç değişmez.", cevap: "sol", neden: "Yatayda kuvvet yok (hava direnci ihmal): ivme 0, hız sabit." },
              { metin: "Hız her saniye 10 m/s artar.", cevap: "sag", neden: "Düşeyde ivme g = 10 m/s²." },
              { metin: "Cisim 5·t² kadar alçalır.", cevap: "sag", neden: "Düşeyde y = ½·g·t² = 5·t²." },
              { metin: "Yatay uzaklık x = v₀·t ile bulunur.", cevap: "sol", neden: "Sabit hızlı harekette yol hız çarpı süredir." }
            ] },
          { tip: "liste", maddeler: [
              { ikon: "✍️", baslik: "Sınavda böyle yaz: bağımsızlık", metin: "*The horizontal and vertical motions are independent of each other.*" },
              { ikon: "✍️", baslik: "Sınavda böyle yaz: yatay hız", metin: "*The horizontal velocity is constant because there is no horizontal force.*" }
            ] }
        ]
      },
      {
        baslik: "Yörünge: yarım parabol",
        kisa: "Yatayda eşit adımlar, düşeyde gitgide büyüyen adımlar: yörünge yarım paraboldür.",
        bloklar: [
          { tip: "grafik", baslik: "20 m yükseklikten v₀ = 15 m/s ile yatay atış", xlabel: "x (m)", ylabel: "y (m)", xmax: 8, ymax: 5,
            xticks: [{ v: 2, label: "10" }, { v: 4, label: "20" }, { v: 6, label: "30" }],
            yticks: [{ v: 2, label: "10" }, { v: 4, label: "20" }],
            ogeler: [
              { id: "C", tip: "egri", renk: 0, noktalar: yorunge() },
              { id: "S", tip: "nokta", renk: 1, x: 0, y: 4, etiket: "v₀ = 15 m/s" },
              { id: "P1", tip: "nokta", renk: 1, x: 3, y: 3, etiket: "1 s", kilavuz: true, gizli: true },
              { id: "P2", tip: "nokta", renk: 1, x: 6, y: 0, etiket: "2 s", kilavuz: true, gizli: true },
              { id: "h1", tip: "ok", renk: 1, from: [0, 4.5], to: [3, 4.5], gizli: true },
              { id: "h2", tip: "ok", renk: 1, from: [3, 4.5], to: [6, 4.5], gizli: true },
              { id: "th1", tip: "yazi", x: 1.5, y: 4.7, metin: "15 m", gizli: true },
              { id: "th2", tip: "yazi", x: 4.5, y: 4.7, metin: "15 m", gizli: true },
              { id: "v1", tip: "ok", renk: 2, from: [6.6, 4], to: [6.6, 3], gizli: true },
              { id: "v2", tip: "ok", renk: 2, from: [6.6, 3], to: [6.6, 0], gizli: true },
              { id: "tv1", tip: "yazi", x: 6.8, y: 3.4, metin: "5 m", hiza: "start", gizli: true },
              { id: "tv2", tip: "yazi", x: 6.8, y: 1.4, metin: "15 m", hiza: "start", gizli: true },
              { id: "D1", tip: "nokta", renk: 3, x: 0, y: 3, gizli: true },
              { id: "eq", tip: "cizgi", renk: 3, kesik: true, from: [0, 3], to: [3, 3], gizli: true },
              { id: "teq", tip: "yazi", x: 1.5, y: 3.25, metin: "aynı yükseklik", gizli: true }
            ],
            durumlar: [
              { metin: "20 m yüksekteki kayadan top 15 m/s ile yatay atılıyor. Yörünge yarım parabol. (Grafikte bir kare 5 m.)", goster: ["C", "S"] },
              { metin: "1 s sonra: yatayda x = 15 m gitti, düşeyde 5 m düştü (y = 15 m).", goster: ["P1"] },
              { metin: "2 s sonra: x = 30 m ve y = 0; top yere çarpar.", goster: ["P2"] },
              { metin: "Yatayda her saniye aynı 15 m: sabit hız, eşit adımlar.", goster: ["h1", "h2", "th1", "th2"] },
              { metin: "Düşeyde ilk saniye 5 m, ikinci saniye 15 m: artan adımlar (serbest düşme, 1 : 3).", goster: ["v1", "v2", "tv1", "tv2"] },
              { metin: "Aynı yükseklikten aynı anda serbest bırakılan top, her anda atılan topla aynı yüksekliktedir: ikisi birlikte yere çarpar.", gizle: ["h1", "h2", "th1", "th2", "v1", "v2", "tv1", "tv2"], goster: ["D1", "eq", "teq"] }
            ] },
          { tip: "tablo", baslik: "Aynı atışın bileşenleri", head: ["t (s)", "x = 15·t (m)", "Düşülen = 5·t² (m)", "vy = 10·t (m/s)"],
            rows: [["0", "0", "0", "0"], ["1", "15", "5", "10"], ["2", "30", "20", "20"]],
            not: "Yatay hız her an vx = 15 m/s'dir; yalnız düşey hız artar. Grafikte vx–t yatay bir doğru, vy–t ise eğimi g olan bir doğrudur. Derste olduğu gibi yukarıyı artı alırsan düşey ivme −10 m/s² ve vy eksi çıkar. Sınavda böyle yaz: *The path of the ball is a parabola.*" },
          { tip: "tuzak", metin: "Yörüngeyi \"önce yatay gider, sonra düşer\" diye düşünme; iki hareket aynı anda başlar.",
            yanlis: "Cisim önce yatay ilerler, sonra aşağı düşmeye başlar.",
            dogru: "Cisim ==t = 0'dan itibaren== düşer; yatay ve düşey hareket aynı anda yürür." }
        ]
      },
      {
        baslik: "Uçuş süresi yalnız yüksekliğe bağlıdır",
        kisa: "Yatay atılan ve bırakılan cisim, aynı yükseklikten aynı anda yere çarpar.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "t", alt: "uçuş süresi (s)" }, "=",
              { t: "√(2h ÷ g)", alt: "h yükseklik (m), g = 10 m/s²" }
            ], aciklama: "Düşey harekette h = ½·g·t² idi; v₀ bu formülde yok. Sınavda böyle yaz: *The time of flight depends only on the height.*" },
          { tip: "ornek", baslik: "Masadan düşen bilye",
            durum: "Yerden 0,8 m yüksekteki masanın kenarından bir bilye 3 m/s ile yatay yuvarlanıp düşüyor. Havada kaç saniye kalır ve masanın dibinden ne kadar uzağa düşer?",
            adimlar: [
              "Düşey: h = ½·g·t² → 0,8 = 5·t² → t² = 0,16 → t = 0,4 s.",
              "Yatay: x = v₀·t = 3 × 0,4 = 1,2 m.",
              "Kontrol: 0,4 s'de düşen yol 5 × 0,16 = 0,8 m ✓."
            ],
            sonuc: "Süre 0,4 s, yatay uzaklık 1,2 m. Sınavda böyle yaz: *The ball hits the floor 1.2 m away from the table.*" },
          { tip: "ornek", baslik: "Yardım paketini ne zaman bırakmalı?",
            durum: "Bir kurtarma uçağı yatay uçuyor (yaklaşık 250 km/h, yani 70 m/s) ve kayalıktaki dağcılara yardım paketi atacak. Dağcılar uçağın 245 m altında. Paket, dağcılardan yatayda ne kadar önce bırakılmalı? (g = 10 m/s²)",
            adimlar: [
              "Düşey: 245 = 5·t² → t² = 49 → t = 7 s.",
              "Yatay: paket uçağın yatay hızını taşır, x = v₀·t = 70 × 7 = 490 m."
            ],
            sonuc: "Paket dağcılardan yatayda 490 m önce bırakılmalı. Sınavda böyle yaz: *The package keeps the horizontal velocity of the plane, so it must be dropped 490 m in advance.*" },
          { tip: "tuzak", metin: "Daha hızlı atmak, cismi daha geç ya da daha erken düşürmez.",
            yanlis: "Top 6 m/s ile atılırsa 0,8 s'de düşer.",
            dogru: "Süre yalnız yüksekliğe bağlı: yine ==0,4 s==. Yalnız yatay uzaklık değişir: 6 × 0,4 = 2,4 m." }
        ]
      },
      {
        baslik: "Yere çarpma hızı: iki bileşenin birleşimi",
        kisa: "Yatay ve düşey hız dik üçgende birleşir: v² = vx² + vy².",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "v", alt: "bileşke hız (m/s)" }, "=",
              { t: "√(vx² + vy²)", alt: "vx = v₀ ve vy = g·t" }
            ], aciklama: "Bileşenler birbirine dik olduğu için Pisagor kullanılır. Kolay üçlüler: 3–4–5, 6–8–10, 15–20–25." },
          { tip: "ornek", baslik: "Kayadan atılan top yere kaç m/s ile çarpar?",
            durum: "20 m yüksekteki kayadan 15 m/s ile yatay atılan topun yere çarpma hızını ve yönünü bul.",
            adimlar: [
              "Süre: 20 = 5·t² → t = 2 s.",
              "Yatay hız değişmez: vx = 15 m/s.",
              "Düşey hız: vy = g·t = 10 × 2 = 20 m/s.",
              "Büyüklük: v = √(15² + 20²) = √625 = 25 m/s.",
              "Yön: tan θ = vy ÷ vx = 20 ÷ 15 = 4/3 → yatayla yaklaşık 53° aşağı."
            ],
            sonuc: "25 m/s, yatayın yaklaşık 53° altında. Sınavda böyle yaz: *The speed just before impact is the vector sum of vx and vy.*" },
          { tip: "tuzak", metin: "Bileşenler aynı doğrultuda olmadığı için hızlar doğrudan toplanmaz.",
            yanlis: "Çarpma hızı v₀ + g·t = 15 + 20 = 35 m/s'dir.",
            dogru: "İki hız birbirine diktir: v = √(15² + 20²) = ==25 m/s==." }
        ]
      },
      {
        baslik: "Menzil: yatayda ne kadar gider?",
        kisa: "Menzil v₀·t'dir; v₀ iki katına çıkınca menzil iki katı olur.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "R", alt: "menzil (m)" }, "=",
              { t: "v₀", alt: "atış hızı (m/s)" }, "×",
              { t: "t", alt: "uçuş süresi (s)" }
            ], aciklama: "t = √(2h ÷ g) yazılırsa R = v₀·√(2h ÷ g). Sınavda böyle yaz: *The range is the horizontal distance travelled, R = v₀t.*" },
          { tip: "tablo", baslik: "Menzil hangi değişkene nasıl bağlı?", head: ["Atış", "v₀ (m/s)", "h (m)", "t (s)", "Menzil R (m)"],
            rows: [
              ["Temel", "10", "20", "2", "20"],
              ["v₀ iki katı", "20", "20", "2", "40"],
              ["v₀ üç katı", "30", "20", "2", "60"],
              ["h dört katı", "10", "80", "4", "40"]
            ],
            not: "v₀ iki katına çıkınca R iki katı; h dört katına çıkınca t iki katına, böylece R yine iki katına çıkar." },
          { tip: "tuzak", metin: "Menzil yalnız atış hızına bağlıymış gibi görünse de yüksekliği de hesaba katmak gerekir.",
            yanlis: "Menzil yalnız ilk hıza bağlıdır.",
            dogru: "R = v₀·t ve t yüksekliğe bağlı: ==hem v₀ hem h== menzili belirler." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Yatay atış = yatayda sabit hızlı hareket + düşeyde serbest düşme; ikisi birbirinden bağımsızdır.",
              "Yatay: vx = v₀ ve x = v₀·t. Düşey: vy = g·t ve y = ½·g·t² (g = 10 m/s²).",
              "Yörünge yarım paraboldür: yatay adımlar eşit, düşey adımlar 1 : 3 : 5 oranında büyür.",
              "Uçuş süresi t = √(2h ÷ g): yalnız yüksekliğe bağlıdır, v₀ süreyi değiştirmez.",
              "Menzil R = v₀·t; hız iki katına çıkarsa menzil iki katı olur.",
              "Çarpma hızı v = √(vx² + vy²); yön için tan θ = vy ÷ vx.",
              "Yatay atılan ve serbest bırakılan cisim aynı anda yere çarpar.",
              "Sınavda yaz: *The horizontal and vertical motions are independent.*"
            ] }
        ]
      }
    ],
      sorular: [
      { q: "A ball is thrown horizontally at 10 m/s from a cliff 20 m high (g = 10 m/s², no air resistance). What are the time of flight and the range?",
        opts: ["1 s; 10 m", "2 s; 20 m", "2 s; 10 m", "4 s; 40 m"], a: 1,
        why: "20 = 5·t² → t = 2 s; menzil R = v₀·t = 10 × 2 = 20 m. C en çekici yanlış: süreyi doğru bulup menzili yalnız hıza (10 m) eşitlemek. D, 2h ÷ g = 4'ü süre sanıp karekök almayı unutur." },
      { q: "One ball is dropped from rest and another is thrown horizontally at 8 m/s from the same height at the same moment (no air resistance). Which statement is correct?",
        opts: ["The dropped ball hits the ground first.", "The horizontally thrown ball hits the ground first.", "The vertical acceleration of the thrown ball is greater.", "Both balls hit the ground at the same time."], a: 3,
        why: "Düşey hareket yatay hızdan bağımsızdır: ikisi de aynı yükseklikten düşey ilk hızsız, ivme g ile iner; süre aynıdır. A en çekici yanlış: yatay hızı olmayan cismin daha çabuk düşeceğini sanmak." },
      { q: "An object is thrown horizontally at 40 m/s from a cliff 45 m high (g = 10 m/s²). What is the magnitude of its velocity just before it hits the ground?",
        opts: ["50 m/s", "70 m/s", "30 m/s", "10 m/s"], a: 0,
        why: "45 = 5·t² → t = 3 s; vy = 10 × 3 = 30 m/s; vx = 40 m/s. v = √(40² + 30²) = 50 m/s. B yanlış: 40 + 30 = 70 yazmak, çünkü bileşenler dik olduğundan doğrudan toplanmaz." },
      { q: "The table shows the positions of an object thrown horizontally. It hits the ground at t = 2 s. What are its initial speed and the height it was thrown from? (g = 10 m/s²)",
        fig: { type: "table", head: ["t (s)", "0", "1", "2"], rows: [["x (m)", "0", "12", "24"], ["Distance fallen (m)", "0", "5", "20"]] },
        opts: ["24 m/s; 20 m", "12 m/s; 40 m", "12 m/s; 20 m", "6 m/s; 20 m"], a: 2,
        why: "Her saniyede x 12 m artıyor: v₀ = 12 m/s. 2 s'de düşen yol 20 m olduğundan yükseklik 20 m. A yanlış: 24 m, 2 s sonraki yatay uzaklıktır; hız değil." },
      { q: "A rescue plane flies horizontally at 70 m/s and wants to drop supplies to climbers on a ridge 245 m below (g = 10 m/s²). How far in advance (horizontal distance) must the supplies be dropped?",
        opts: ["245 m", "350 m", "490 m", "980 m"], a: 2,
        why: "245 = 5·t² → t = 7 s; yatay uzaklık x = 70 × 7 = 490 m. A yanlış: düşey yüksekliği yatay uzaklık sanmak. D yanlış: süreyi 7 s yerine iki katı, 14 s almak (70 × 14 = 980 m)." }
    ]
  };
})();
