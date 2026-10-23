/* Kitpath not defteri · ph106 · 1.6 Eğik Atış
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics · Unit 1) + MEB 10. sınıf Fizik. Blok türleri: /ap/_kit/defter.js başı.
   Not: g = 10 m/s², v₀ = 50 m/s; sin37° = cos53° = 0,6 ve cos37° = sin53° = 0,8 (sınavda verilir).
   Grafikte bir kare 25 m (yatay ve düşey). Yardımcı işlev yalnızca yörünge noktalarını üretir: x = vx·t, y = vy·t − 5t². */
window.DEFTER = (function () {
  function yol(vx, vy) {
    var T = 2 * vy / 10, p = [], i, t;
    for (i = 0; i <= 12; i++) { t = T * i / 12; p.push([vx * t / 25, (vy * t - 5 * t * t) / 25]); }
    return p;
  }
  var K = 25 * Math.SQRT2;

  return {
    slug: "ph106",
    amac: "Bu konu yatayla açı yapacak şekilde fırlatılan cismin hareketini anlatıyor. Hızı yatay ve düşey bileşenlere ayırmayı; en yüksek noktayı, uçuş süresini ve menzili bulmayı; 45°'nin neden en büyük menzili verdiğini öğreneceksin.",
    bolumler: [
      {
        baslik: "İlk hızı bileşenlere ayır",
        kisa: "İlk hız, yatay v₀x = v₀·cosθ ve düşey v₀y = v₀·sinθ parçalarına ayrılır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "📐", terim: "Launch angle", tr: "atış açısı (θ)", tanim: "İlk hızın yatayla yaptığı açı.", ornek: "Havadan kaleye doğru vurulan serbest vuruş topu." },
              { ikon: "↗️", terim: "Components", tr: "bileşenler", tanim: "İlk hızın yatay (v₀x) ve düşey (v₀y) parçaları; ikisi ayrı ayrı çözülür.", ornek: "v₀ = 50 m/s ve θ = 37° için 40 ve 30 m/s." },
              { ikon: "🎯", terim: "Range", tr: "menzil (R)", tanim: "Cisim atıldığı seviyeye döndüğünde yatayda aldığı toplam uzaklık.", ornek: "Topun atıldığı nokta ile düştüğü nokta arasındaki yatay mesafe." },
              { ikon: "⛰️", terim: "Maximum height", tr: "en yüksek nokta (H)", tanim: "Düşey hızın sıfır olduğu, yörüngenin tepe noktasının yüksekliği.", ornek: "Topun havada çıktığı en üst seviye." }
            ] },
          { tip: "formul", parcalar: [
              { t: "v₀x", alt: "yatay bileşen" }, "=",
              { t: "v₀·cosθ", alt: "" }, "ve",
              { t: "v₀y", alt: "düşey bileşen" }, "=",
              { t: "v₀·sinθ", alt: "" }
            ], aciklama: "Hava direnci ihmal edilir. Sınavda genelde verilir: sin37° = 0,6, cos37° = 0,8, sin53° = 0,8, cos53° = 0,6. Sınavda böyle yaz: *We resolve the velocity into horizontal and vertical components.*" },
          { tip: "ornek", baslik: "50 m/s ile 37° atış",
            durum: "Yerden bir cisim 50 m/s hızla, yatayla 37° açı yapacak şekilde atılıyor (sin37° = 0,6; cos37° = 0,8). Bileşenlerini bul.",
            adimlar: [
              "v₀x = 50 × cos37° = 50 × 0,8 = 40 m/s.",
              "v₀y = 50 × sin37° = 50 × 0,6 = 30 m/s.",
              "Kontrol: √(40² + 30²) = √2500 = 50 m/s ✓."
            ],
            sonuc: "v₀x = 40 m/s (hiç değişmez), v₀y = 30 m/s (g ile azalır). Sınavda böyle yaz: *The initial velocity has components of 40 m/s and 30 m/s.*" }
        ]
      },
      {
        baslik: "İki bağımsız hareket",
        kisa: "Yatayda sabit hız, düşeyde ivme −g: ikisini ayrı ayrı çöz.",
        bloklar: [
          { tip: "tablo", baslik: "Eğik atışta yatay ve düşey hareket", head: ["", "Yatay (x)", "Düşey (y)"],
            rows: [
              ["İvme", "0", "−g = −10 m/s² (aşağı)"],
              ["Hız", "vx = v₀·cosθ (sabit)", "vy = v₀·sinθ − g·t"],
              ["Konum", "x = v₀·cosθ · t", "y = v₀·sinθ · t − ½·g·t²"],
              ["Sınavda böyle yaz", "*The horizontal velocity is constant.*", "*The vertical motion has a constant acceleration g.*"]
            ] },
          { tip: "ikili", sol: { ikon: "↔️", baslik: "Yatay (x) bileşen", maddeler: ["Atış boyunca değişmez", "Menzil bununla bulunur"] },
            sag: { ikon: "↕️", baslik: "Düşey (y) bileşen", maddeler: ["g ile azalır, tepede sıfırdır", "Süre bununla bulunur"] },
            oyun: [
              { metin: "Hızın bu bileşeni atış boyunca değişmez.", cevap: "sol", neden: "Yatayda kuvvet yok: a = 0." },
              { metin: "Tepe noktasında bu bileşen sıfır olur.", cevap: "sag", neden: "Yukarı çıkarken vy azalır, tepede 0 olur, sonra eksiye geçer." },
              { metin: "Uçuş süresi T = 2·v₀y ÷ g bu bileşenden bulunur.", cevap: "sag", neden: "Çıkış ve iniş süresi düşey hareketten gelir." },
              { metin: "Menzil R = v₀x · T ile hesaplanır.", cevap: "sol", neden: "Yatayda sabit hızla T süre gidilir." }
            ] }
        ]
      },
      {
        baslik: "Yörünge ve en yüksek nokta",
        kisa: "Tepede vy = 0 olur ama vx sürer; tepe, uçuşun tam ortasıdır.",
        bloklar: [
          { tip: "grafik", baslik: "50 m/s ile 37° atılan cismin yörüngesi", xlabel: "x (m)", ylabel: "y (m)", xmax: 11, ymax: 5,
            xticks: [{ v: 2, label: "50" }, { v: 4, label: "100" }, { v: 6, label: "150" }, { v: 8, label: "200" }, { v: 10, label: "250" }],
            yticks: [{ v: 2, label: "50" }, { v: 4, label: "100" }],
            ogeler: [
              { id: "A37", tip: "egri", renk: 0, noktalar: yol(40, 30), etiket: "" },
              { id: "S", tip: "nokta", renk: 0, x: 0, y: 0, etiket: "v₀ = 50 m/s" },
              { id: "Top", tip: "nokta", renk: 1, x: 4.8, y: 1.8, etiket: "tepe", kilavuz: true, gizli: true },
              { id: "ok", tip: "ok", renk: 1, from: [4.8, 1.8], to: [6.3, 1.8], gizli: true },
              { id: "tx", tip: "yazi", x: 6.4, y: 2.6, metin: "tepede: vx = 40 m/s, vy = 0", hiza: "start", gizli: true },
              { id: "Land", tip: "nokta", renk: 3, x: 9.6, y: 0, etiket: "R = 240 m", kilavuz: true, gizli: true }
            ],
            durumlar: [
              { metin: "v₀ = 50 m/s, θ = 37°: v₀x = 40 m/s, v₀y = 30 m/s. Yörünge tepeye göre simetrik bir parabol. (Bir kare 25 m.)", goster: ["A37", "S"] },
              { metin: "Tepe: vy = 30 − 10t = 0 → t = 3 s. Yükseklik H = v₀y² ÷ 2g = 900 ÷ 20 = 45 m. Burada vy = 0 ama vx = 40 m/s sürer.", goster: ["Top", "ok", "tx"] },
              { metin: "Uçuş süresi T = 2 × 3 = 6 s. Menzil R = v₀x · T = 40 × 6 = 240 m.", goster: ["Land"] }
            ] },
          { tip: "tablo", baslik: "Aynı atış, saniye saniye", head: ["t (s)", "x (m)", "y (m)", "vy (m/s)"],
            rows: [["0", "0", "0", "+30"], ["1", "40", "25", "+20"], ["2", "80", "40", "+10"], ["3", "120", "45", "0"], ["4", "160", "40", "−10"], ["5", "200", "25", "−20"], ["6", "240", "0", "−30"]],
            vurgu: 3,
            not: "y değerleri tepe etrafında simetrik (25, 40, 45, 40, 25). Yere dönüşte hızın büyüklüğü √(40² + 30²) = 50 m/s: atış hızıyla aynı. Sınavda böyle yaz: *At the highest point, the vertical velocity is zero, but the horizontal velocity is not.*" },
          { tip: "tuzak", metin: "Tepe noktasında cismin tamamen durduğunu düşünmek çok yapılan bir hatadır.",
            yanlis: "Tepe noktasında cismin hızı sıfırdır.",
            dogru: "Yalnız ==düşey bileşen== sıfırdır; hız vx = 40 m/s'dir. Cismin en yavaş olduğu an budur." }
        ]
      },
      {
        baslik: "Menzil ve 45° kuralı",
        kisa: "Aynı hızla en uzak menzil 45°'de; tümler açılar aynı menzili verir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "R", alt: "menzil (m)" }, "=",
              { t: "v₀² · sin2θ", alt: "v₀ atış hızı" }, "÷",
              { t: "g", alt: "10 m/s²" }
            ], aciklama: "sin2θ en çok 1 olur, yani θ = 45° (R = v₀² ÷ g). Kolay yol: R = v₀x · T = v₀x · 2v₀y ÷ g. Sınavda böyle yaz: *The range is maximum at 45°.*" },
          { tip: "grafik", baslik: "Aynı hız (50 m/s), farklı açılar", xlabel: "x (m)", ylabel: "y (m)", xmax: 11, ymax: 5,
            xticks: [{ v: 2, label: "50" }, { v: 4, label: "100" }, { v: 6, label: "150" }, { v: 8, label: "200" }, { v: 10, label: "250" }],
            yticks: [{ v: 2, label: "50" }, { v: 4, label: "100" }],
            ogeler: [
              { id: "A37", tip: "egri", renk: 0, noktalar: yol(40, 30), etiket: "" },
              { id: "A53", tip: "egri", renk: 1, noktalar: yol(30, 40), etiket: "", gizli: true },
              { id: "A45", tip: "egri", renk: 2, noktalar: yol(K, K), etiket: "", gizli: true },
              { id: "w37", tip: "yazi", x: 4.8, y: 2.05, metin: "37°", gizli: true },
              { id: "w53", tip: "yazi", x: 4.8, y: 3.45, metin: "53°", gizli: true },
              { id: "w45", tip: "yazi", x: 5, y: 2.75, metin: "45°", gizli: true },
              { id: "T53", tip: "nokta", renk: 1, x: 4.8, y: 3.2, etiket: "80 m", gizli: true },
              { id: "M", tip: "nokta", renk: 0, x: 9.6, y: 0, kilavuz: true, gizli: true },
              { id: "tM", tip: "yazi", x: 9, y: 0.4, metin: "240 m", hiza: "end", gizli: true },
              { id: "F", tip: "nokta", renk: 2, x: 10, y: 0, kilavuz: true, gizli: true },
              { id: "tF", tip: "yazi", x: 10.4, y: 0.4, metin: "250 m", hiza: "start", gizli: true }
            ],
            durumlar: [
              { metin: "37°: T = 6 s, H = 45 m, R = 240 m.", goster: ["A37", "w37"] },
              { metin: "53°: daha yüksek (H = 80 m) ve daha uzun uçuş (T = 8 s); ama menzil yine 240 m.", goster: ["A53", "w53", "T53"] },
              { metin: "37° + 53° = 90°: ==tümler açılar== (*complementary angles*) aynı menzili verir.", goster: ["M", "tM"] },
              { metin: "45°: menzil 250 m, hepsinden uzun. v₀x = v₀y ≈ 35,4 m/s; T ≈ 7,1 s.", goster: ["A45", "w45", "F", "tF"] },
              { metin: "Neden? Açı küçükse yatay hız büyük ama süre kısa; açı büyükse süre uzun ama yatay hız küçük. 45°'de ikisi dengelenir.", gizle: ["A37", "A53", "w37", "w53", "T53", "M", "tM"] }
            ] },
          { tip: "tablo", baslik: "v₀ = 50 m/s ile üç atış", head: ["Açı", "v₀x (m/s)", "v₀y (m/s)", "T (s)", "H (m)", "R (m)"],
            rows: [["37°", "40", "30", "6", "45", "240"], ["45°", "≈35,4", "≈35,4", "≈7,1", "62,5", "250"], ["53°", "30", "40", "8", "80", "240"]],
            vurgu: 1 },
          { tip: "tuzak", metin: "45° kuralı yalnız atış ve iniş noktası aynı seviyedeyse ve hava direnci yoksa geçerlidir.",
            yanlis: "En uzak menzil için cisim her zaman 45° ile atılır.",
            dogru: "Cisim bir yükseklikten atılıyorsa (iniş noktası daha aşağıdaysa) en iyi açı ==45°'den küçüktür==." }
        ]
      },
      {
        baslik: "Eğik atış sorusunu adım adım çöz",
        kisa: "Önce bileşenler, sonra tepe zamanı, sonra uçuş süresi, en son menzil.",
        bloklar: [
          { tip: "adimlar", baslik: "Çözüm sırası", adimlar: [
              { baslik: "1 · Bileşenlere ayır", metin: "v₀x = v₀·cosθ ve v₀y = v₀·sinθ." },
              { baslik: "2 · Tepeye çıkış süresi", metin: "vy = 0 olunca: t = v₀y ÷ g." },
              { baslik: "3 · En yüksek nokta", metin: "H = v₀y² ÷ 2g." },
              { baslik: "4 · Uçuş süresi", metin: "Aynı seviyeye dönüşte T = 2·t = 2·v₀y ÷ g." },
              { baslik: "5 · Menzil", metin: "R = v₀x · T. Sınavda böyle yaz: *First we find the time of flight; then the range is R = v₀x · T.*" }
            ] },
          { tip: "ornek", baslik: "Serbest vuruş",
            durum: "Bir futbolcu topu yerden 25 m/s hızla, yatayla 53° açıyla vuruyor (sin53° = 0,8; cos53° = 0,6; g = 10 m/s²). En yüksek nokta, uçuş süresi ve menzil nedir?",
            adimlar: [
              "Bileşenler: v₀x = 25 × 0,6 = 15 m/s; v₀y = 25 × 0,8 = 20 m/s.",
              "Tepeye çıkış: t = 20 ÷ 10 = 2 s; H = 20² ÷ 20 = 20 m.",
              "Uçuş süresi: T = 2 × 2 = 4 s.",
              "Menzil: R = v₀x · T = 15 × 4 = 60 m."
            ],
            sonuc: "H = 20 m, T = 4 s, R = 60 m. Sınavda böyle yaz: *The maximum height is 20 m and the range is 60 m.*" },
          { tip: "ornek", baslik: "Kamyonun kasasına düşen top",
            durum: "Aynı serbest vuruşta (T = 4 s, R = 60 m) top, vuruş doğrultusunda ve aynı yönde 10 m/s ile giden bir kamyonun kasasına düşüyor. Vuruş anında kamyon topun kaç metre önündeydi?",
            adimlar: [
              "Top 4 s sonra yatayda 60 m gider.",
              "Kamyon aynı 4 s içinde 10 × 4 = 40 m ilerler.",
              "Buluşmada konumlar eşit: 60 = (başlangıç uzaklığı) + 40 → uzaklık = 20 m."
            ],
            sonuc: "Kamyon 20 m önde olmalı. Hedef hareket ediyorsa topun ve hedefin süresi aynıdır: T uçuş süresidir. Sınavda böyle yaz: *The ball and the truck move for the same time, T = 4 s.*" },
          { tip: "ornek", baslik: "Kayanın kenarından eğik atış",
            durum: "25 m yüksekliğindeki kayanın kenarından bir taş, 25 m/s hızla yatayla 53° açıyla yukarı atılıyor (sin53° = 0,8; cos53° = 0,6; g = 10 m/s²). Kaç saniyede yere düşer ve kayanın dibinden ne kadar uzağa düşer?",
            adimlar: [
              "Bileşenler: v₀x = 15 m/s ve v₀y = 20 m/s.",
              "Yere çarpma y = 0: 25 + 20t − 5t² = 0 → t² − 4t − 5 = 0 → (t − 5)(t + 1) = 0 → t = 5 s.",
              "Yatay: x = v₀x · t = 15 × 5 = 75 m."
            ],
            sonuc: "5 s ve 75 m. Atış ile iniş aynı seviyede değilse T = 2·v₀y ÷ g kullanılmaz; y = 0 denklemi çözülür. Sınavda böyle yaz: *The stone lands when its height above the ground is zero.*" }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "v₀x = v₀·cosθ (sabit), v₀y = v₀·sinθ (g ile değişir); sin37° = cos53° = 0,6.",
              "Yatayda a = 0, düşeyde a = −g = −10 m/s²; iki hareket bağımsızdır.",
              "Tepede vy = 0: çıkış süresi v₀y ÷ g, yükseklik H = v₀y² ÷ 2g; hız tepede vx'e eşit ve en küçüktür.",
              "Uçuş süresi T = 2·v₀y ÷ g; menzil R = v₀x · T = v₀² · sin2θ ÷ g.",
              "Yörünge tepeye göre simetriktir; aynı seviyeye dönüşte hızın büyüklüğü atış hızına eşittir.",
              "45° en büyük menzili verir; tümler açılar (37° ve 53°) aynı menzili verir.",
              "İvme tüm yörüngede g = 10 m/s² aşağı yönlüdür; tepede bile sıfır olmaz.",
              "Sınavda yaz: *The range is maximum at 45°, and complementary angles give the same range.*"
            ] }
        ]
      }
    ],
      sorular: [
      { q: "An object is launched from the ground at 50 m/s at an angle of 53° above the horizontal (sin53° = 0.8, cos53° = 0.6, g = 10 m/s²). What is its speed at the highest point of the trajectory?",
        opts: ["0", "50 m/s", "30 m/s", "40 m/s"], a: 2,
        why: "Tepede düşey bileşen sıfırdır, yatay bileşen sürer: vx = 50 × 0,6 = 30 m/s. A en çekici yanlış: tepede hızın tamamen sıfır olduğunu sanmak." },
      { q: "The table shows the positions of a projectile launched at an angle (g = 10 m/s²). At what time does it reach its highest point, and what is its horizontal velocity at that moment?",
        fig: { type: "table", head: ["t (s)", "0", "2", "4", "6", "8"], rows: [["x (m)", "0", "60", "120", "180", "240"], ["y (m)", "0", "60", "80", "60", "0"]] },
        opts: ["2 s; 30 m/s", "4 s; 0", "8 s; 30 m/s", "4 s; 30 m/s"], a: 3,
        why: "y değerleri t = 4 s etrafında simetrik (60, 80, 60): tepe t = 4 s'de, H = 80 m. Yatay hız Δx ÷ Δt = 60 ÷ 2 = 30 m/s ve hiç değişmez. B en çekici yanlış: tepede yatay hızı da sıfır sanmak." },
      { q: "Two objects are launched with the same speed v₀, one at 30° and the other at 60° above the horizontal. Which statement is correct? (No air resistance; both land at the launch level.)",
        opts: ["Their ranges are equal; the 60° object rises higher and stays in the air longer.", "The 30° object has the greater range.", "The 60° object has the greater range.", "Their ranges are equal; the 30° object rises higher."], a: 0,
        why: "30° ve 60° tümler açılardır (toplamları 90°): menzilleri aynıdır. Daha büyük açıda v₀y büyük olduğundan 60°'deki cisim daha yükseğe çıkar ve daha uzun süre havada kalır. D en çekici yanlış: yükseklik ile açı ilişkisini ters kurmak." },
      { q: "A ball is kicked from the ground at 25 m/s at 37° above the horizontal (sin37° = 0.6, cos37° = 0.8, g = 10 m/s²). What are the time of flight and the range?",
        opts: ["1.5 s; 30 m", "3 s; 60 m", "3 s; 75 m", "6 s; 120 m"], a: 1,
        why: "v₀x = 20 m/s, v₀y = 15 m/s. T = 2·v₀y ÷ g = 3 s; R = v₀x · T = 20 × 3 = 60 m. C en çekici yanlış: menzili 25 × 3 = 75 yazmak, yani v₀'ı yatay hız sanmak." },
      { q: "A stone is thrown from the edge of a 25 m high cliff at 25 m/s, 53° above the horizontal (sin53° = 0.8, cos53° = 0.6, g = 10 m/s²). How far from the base of the cliff does it land?",
        opts: ["60 m", "100 m", "75 m", "125 m"], a: 2,
        why: "v₀x = 15, v₀y = 20 m/s. 25 + 20t − 5t² = 0 → t = 5 s; x = 15 × 5 = 75 m. A yanlış: aynı seviyeye dönüş formülü T = 4 s ile 15 × 4 = 60 m bulmak (kayanın yüksekliğini unutmak)." }
    ]
  };
})();
