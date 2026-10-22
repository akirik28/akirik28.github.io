/* Kitora not defteri · ph104 · 1.4 Serbest Düşme
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics · Unit 1) + MEB 10. sınıf Fizik. Blok türleri: /ap/_kit/defter.js başı.
   Not: g = 10 m/s² alınır. Yardımcı işlev yalnızca yukarı atış eğrisinin noktalarını üretir: h(t) = 20t − 5t², t = 0…4. */
window.DEFTER = (function () {
  function atis() {
    var p = [], i, t;
    for (i = 0; i <= 8; i++) { t = i / 2; p.push([t, 20 * t - 5 * t * t]); }
    return p;
  }

  return {
    slug: "ph104",
    amac: "Bu konu hava direnci yokken yalnızca yerçekimiyle düşen cismin hareketini anlatıyor. g = 10 m/s² ile düşme hızını ve yüksekliğini, yukarı atılan cismin tepe noktasını hesaplamayı öğreneceksin.",
    bolumler: [
      {
        baslik: "Serbest düşme nedir?",
        kisa: "Yalnız yerçekimiyle düşen her cisim, kütlesi ne olursa olsun g ile hızlanır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🍎", terim: "Free fall", tr: "serbest düşme", tanim: "Cisme yalnız yerçekimi etki eder; hava direnci yok sayılır. Hareket, ivmesi g olan sabit ivmeli harekettir.", ornek: "Masanın kenarından bırakılan kalem (hava direnci önemsiz)." },
              { ikon: "⬇️", terim: "Gravitational acceleration", tr: "yerçekimi ivmesi (g)", tanim: "Dünya yüzeyinde yaklaşık 9,8 m/s²; sınavda ==g = 10 m/s²== alınır. Yönü her zaman aşağıdır.", ornek: "Düşen taşın hızı her saniye 10 m/s artar." },
              { ikon: "🌬️", terim: "Air resistance", tr: "hava direnci", tanim: "Havanın cismin hareketini engelleyen kuvveti. Serbest düşmede ihmal edilir.", ornek: "Havasız ortamda tüy ile çekiç aynı anda yere düşer." }
            ] },
          { tip: "ikili", sol: { ikon: "✅", baslik: "Düşme süresine bağlıdır", maddeler: ["Bırakılma yüksekliği (h)", "Bulunulan gezegenin g değeri"] },
            sag: { ikon: "🚫", baslik: "Düşme süresine bağlı değildir", maddeler: ["Cismin kütlesi", "Şekil ve renk (hava yokken)"] },
            oyun: [
              { metin: "Cismin kütlesi 1 kg mı, 5 kg mı?", cevap: "sag", neden: "Kütle sadeleşir: hepsi aynı g ile hızlanır." },
              { metin: "Bırakıldığı yükseklik 20 m mi, 45 m mi?", cevap: "sol", neden: "Daha yüksekten bırakılan daha uzun süre düşer." },
              { metin: "Taşın Ay'da mı Dünya'da mı bırakıldığı.", cevap: "sol", neden: "Ay'da g daha küçüktür, düşme süresi uzar." },
              { metin: "Cismin kırmızı mı mavi mi olduğu (hava yok).", cevap: "sag", neden: "Renk, düşme hareketini değiştirmez." }
            ] },
          { tip: "liste", maddeler: [
              { ikon: "✍️", baslik: "Sınavda böyle yaz: hava direnci", metin: "*Air resistance is neglected, so the only force acting on the object is gravity.*" },
              { ikon: "✍️", baslik: "Sınavda böyle yaz: kütle", metin: "*All objects fall with the same acceleration, regardless of their mass.*" }
            ] }
        ]
      },
      {
        baslik: "Hız her saniye 10 m/s artar: v = g·t",
        kisa: "Durgun halden bırakılan cismin hızı v = g·t'dir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "v", alt: "hız (m/s)" }, "=",
              { t: "g", alt: "10 m/s²" }, "×",
              { t: "t", alt: "süre (s)" }
            ], aciklama: "Bırakılan cismin ilk hızı v₀ = 0'dır; aşağı yönü artı alıyoruz. Sınavda böyle yaz: *The object is released from rest, so v₀ = 0 and v = gt.*" },
          { tip: "grafik", baslik: "Serbest düşen taşın hız-zaman grafiği", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 5, ymax: 10,
            xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
            yticks: [{ v: 2, label: "10" }, { v: 4, label: "20" }, { v: 6, label: "30" }, { v: 8, label: "40" }],
            ogeler: [
              { id: "A", tip: "alan", renk: 1, noktalar: [[0, 0], [0, 0], [0, 0]], gizli: true },
              { id: "L", tip: "cizgi", renk: 0, from: [0, 0], to: [4, 8], etiket: "g = 10" },
              { id: "P1", tip: "nokta", renk: 0, x: 1, y: 2, etiket: "10 m/s", kilavuz: true, gizli: true },
              { id: "P2", tip: "nokta", renk: 0, x: 2, y: 4, etiket: "20 m/s", kilavuz: true, gizli: true },
              { id: "P3", tip: "nokta", renk: 0, x: 3, y: 6, etiket: "30 m/s", kilavuz: true, gizli: true },
              { id: "tA", tip: "yazi", x: 2, y: 1, metin: "45 m", gizli: true }
            ],
            durumlar: [
              { metin: "Hız her saniye 10 m/s artıyor: çizgi düz, eğimi g = 10 m/s². (Dikeyde bir kare 5 m/s.)", goster: ["L"] },
              { metin: "1 s sonra 10, 2 s sonra 20, 3 s sonra 30 m/s: v = g·t.", goster: ["P1", "P2", "P3"] },
              { metin: "Çizginin altındaki alan düşülen yüksekliktir: ½ × 3 s × 30 m/s = 45 m.", goster: ["A", "tA"], set: { A: { noktalar: [[0, 0], [3, 0], [3, 6]] } } },
              { metin: "4 s sonra v = 40 m/s ve h = ½ × 4 × 40 = 80 m. Genel kural: h = ½·g·t².", set: { A: { noktalar: [[0, 0], [4, 0], [4, 8]] }, tA: { metin: "80 m" } } }
            ] },
          { tip: "tuzak", metin: "Düşen cismin hızı arttıkça ivmesi de artıyor gibi görünse de öyle değildir.",
            yanlis: "Hız büyüdükçe ivme de büyür.",
            dogru: "İvme hep sabit g = 10 m/s²'dir; ==artan hızdır==, ivme değil." }
        ]
      },
      {
        baslik: "Düşme yüksekliği: h = ½·g·t²",
        kisa: "Yol zamanın karesiyle artar: 1 s'de 5 m, 2 s'de 20 m, 3 s'de 45 m.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "h", alt: "düşülen yükseklik (m)" }, "=",
              { t: "½", alt: "" }, "×",
              { t: "g", alt: "10 m/s²" }, "×",
              { t: "t²", alt: "süre² (s²)" }
            ], aciklama: "g = 10 alınca h = 5·t² olur. Sınavda böyle yaz: *The height is h = ½gt², since the initial velocity is zero.*" },
          { tip: "tablo", baslik: "Serbest düşme tablosu (v₀ = 0, g = 10 m/s²)", head: ["t (s)", "v = g·t (m/s)", "h = 5·t² (m)", "O saniyede düşülen (m)"],
            rows: [["1", "10", "5", "5"], ["2", "20", "20", "15"], ["3", "30", "45", "25"], ["4", "40", "80", "35"], ["5", "50", "125", "45"]],
            not: "Her saniyede düşülen yol 5, 15, 25, 35, 45 m: ==1 : 3 : 5 : 7 : 9== oranındadır." },
          { tip: "ornek", baslik: "Köprüden bırakılan taş",
            durum: "45 m yüksekteki bir köprüden bir taş bırakılıyor. Suya kaç saniyede çarpar ve çarpma hızı kaç m/s olur?",
            adimlar: [
              "Given: v₀ = 0, h = 45 m, g = 10 m/s².",
              "h = ½·g·t² → 45 = 5·t² → t² = 9 → t = 3 s.",
              "v = g·t = 10 × 3 = 30 m/s."
            ],
            sonuc: "3 s ve 30 m/s. Sınavda böyle yaz: *The stone hits the water after 3 s with a speed of 30 m/s.*" }
        ]
      },
      {
        baslik: "Zamansız soru: v² = 2·g·h",
        kisa: "Süre verilmemişse v² = 2·g·h kullan; yükseklik 4 katı olursa hız 2 katı olur.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "v²", alt: "hızın karesi" }, "=",
              { t: "2", alt: "" }, "×",
              { t: "g", alt: "10 m/s²" }, "×",
              { t: "h", alt: "yükseklik (m)" }
            ], aciklama: "Bu, ③ numaralı denklemin v₀ = 0 hâli: v² = v₀² + 2·g·h." },
          { tip: "ornek", baslik: "Okul bahçesinde top",
            durum: "20 m yüksekten bırakılan top yere hangi hızla çarpar?",
            adimlar: [
              "Süre sorulmuyor: v² = 2·g·h = 2 × 10 × 20 = 400.",
              "v = √400 = 20 m/s (aşağı yönde).",
              "Kontrol: t = v ÷ g = 2 s; h = ½ × 10 × 2² = 20 m ✓."
            ],
            sonuc: "20 m/s. Sınavda böyle yaz: *The time is not given, so we use v² = 2gh.*" },
          { tip: "tuzak", metin: "Daha yüksekten bırakınca çarpma hızı yüksekliğin kökü kadar artar.",
            yanlis: "20 m yerine 80 m'den bırakırsak hız 4 katına çıkar (80 m/s).",
            dogru: "h 4 katına çıkınca v² 4 katına, ==v ise 2 katına== çıkar: v = √(2 × 10 × 80) = 40 m/s." }
        ]
      },
      {
        baslik: "Yukarı atış: tepe noktası",
        kisa: "Yukarı atılan cisim tepede durur gibi olur, ama ivmesi hâlâ g'dir.",
        bloklar: [
          { tip: "grafik", baslik: "20 m/s ile yukarı atılan taşın yüksekliği", xlabel: "t (s)", ylabel: "h (m)", xmax: 5, ymax: 24,
            xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
            yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }],
            ogeler: [
              { id: "C", tip: "egri", renk: 0, noktalar: atis(), etiket: "h" },
              { id: "Top", tip: "nokta", renk: 1, x: 2, y: 20, etiket: "tepe: v = 0", kilavuz: true, gizli: true },
              { id: "P1", tip: "nokta", renk: 2, x: 1, y: 15, etiket: "1 s", kilavuz: true, gizli: true },
              { id: "P3", tip: "nokta", renk: 2, x: 3, y: 15, etiket: "3 s", kilavuz: true, gizli: true },
              { id: "End", tip: "nokta", renk: 3, x: 4, y: 0, etiket: "4 s", gizli: true }
            ],
            durumlar: [
              { metin: "Taş yerden 20 m/s ile yukarı atılıyor (v₀ = 20 m/s, a = −g). Yüksekliği h = 20t − 5t².", goster: ["C"] },
              { metin: "Tepede: v = 20 − 10t = 0 → t = 2 s. Yükseklik h = v₀² ÷ 2g = 400 ÷ 20 = 20 m. İvme hâlâ 10 m/s² aşağı.", goster: ["Top"] },
              { metin: "Çıkış ve iniş simetrik: 1 s ve 3 s'de aynı yükseklik (15 m); hızlar eşit büyüklükte (10 m/s), zıt yönde.", goster: ["P1", "P3"] },
              { metin: "Toplam uçuş süresi 2 × 2 = 4 s. Taş yere atıldığı hızla, 20 m/s ile (aşağı yönde) döner.", goster: ["End"] }
            ] },
          { tip: "formul", parcalar: [
              { t: "h_max", alt: "en yüksek nokta (m)" }, "=",
              { t: "v₀²", alt: "ilk hızın karesi" }, "÷",
              { t: "2g", alt: "20 m/s²" }
            ], aciklama: "Çıkış süresi t = v₀ ÷ g, toplam uçuş süresi 2·v₀ ÷ g (aynı seviyeye dönüşte). Sınavda böyle yaz: *At the highest point the velocity is zero, but the acceleration is still g downward.*" },
          { tip: "tuzak", metin: "Tepe noktasında cisim bir an durur; ama bu, kuvvetin ve ivmenin bittiği anlamına gelmez.",
            yanlis: "Tepe noktasında hız sıfır olduğundan ivme de sıfırdır.",
            dogru: "Yalnız hız anlık olarak sıfırdır; ==ivme sürekli g = 10 m/s²== aşağı doğrudur. İvme sıfır olsaydı cisim orada asılı kalırdı." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Serbest düşmede yalnız yerçekimi etkir (hava direnci ihmal); ivme g = 10 m/s², yönü aşağı.",
              "Düşme hareketi kütleden, şekilden ve renkten bağımsızdır; yalnız h ve g'ye bağlıdır.",
              "Durgun halden: v = g·t ve h = ½·g·t² = 5·t².",
              "Süre yoksa v² = 2·g·h; yükseklik 4 katına çıkınca hız 2 katına çıkar.",
              "Her saniyede düşülen yol 5, 15, 25, 35 m: 1 : 3 : 5 : 7 oranında.",
              "Yukarı atış: çıkış süresi v₀ ÷ g, tepe yüksekliği v₀² ÷ 2g, toplam süre 2v₀ ÷ g.",
              "Tepede v = 0 ama a = g; yere dönüşte hızın büyüklüğü atış hızına eşit.",
              "Sınavda yaz: *Air resistance is neglected, so a = g = 10 m/s² downward.*"
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Bir taş 80 m yükseklikten serbest bırakılıyor (g = 10 m/s², hava direnci yok). Taş yere kaç saniyede çarpar?",
        opts: ["2 s", "4 s", "8 s", "16 s"], a: 1,
        why: "h = ½·g·t² → 80 = 5·t² → t² = 16 → t = 4 s. C en çekici yanlış: 80 ÷ 10 = 8 yazmak (g'yi süre ile karıştırmak)." },
      { q: "Hava direnci ihmal edilirken aynı yükseklikten aynı anda biri 1 kg, diğeri 4 kg kütleli iki taş bırakılıyor. Hangisi doğrudur?",
        opts: ["İkisi aynı anda yere çarpar.", "4 kg'lık taş önce çarpar.", "1 kg'lık taş önce çarpar.", "4 kg'lık taşın ivmesi 4 kat büyüktür."], a: 0,
        why: "Serbest düşmede ivme kütleden bağımsız olarak g'dir; ikisi aynı anda çarpar. B en çekici yanlış: ağır cisim önce düşer sanısı (kütle ivmede sadeleşir)." },
      { q: "Grafik serbest düşen bir cismin hız-zaman grafiğidir (g = 10 m/s²). Cismin ilk 3 saniyede düştüğü yükseklik kaç metredir?",
        fig: { type: "graph", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 5, ymax: 45,
          lines: [{ from: [0, 0], to: [4, 40], label: "v" }],
          xticks: [{ v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 30, label: "30" }, { v: 40, label: "40" }] },
        opts: ["30 m", "45 m", "90 m", "120 m"], a: 1,
        why: "t = 3 s'de v = 30 m/s; çizginin altındaki üçgenin alanı ½ × 3 × 30 = 45 m (aynı sonuç h = 5·t² = 45). C yanlış: 30 × 3 = 90, ½'yi unutmak." },
      { q: "Bir top yerden 30 m/s hızla düşey yukarı atılıyor (g = 10 m/s²). Tepe noktasına çıkış süresi ve ulaştığı en büyük yükseklik nedir?",
        opts: ["3 s; 90 m", "6 s; 45 m", "3 s; 45 m", "6 s; 90 m"], a: 2,
        why: "Çıkış süresi t = v₀ ÷ g = 3 s; yükseklik h = v₀² ÷ 2g = 900 ÷ 20 = 45 m. A yüksekliği v₀·t = 90 m bulur; bu, yerçekimini yok saymaktır. B ve D toplam uçuş süresini (6 s) çıkış süresi sanır." },
      { q: "Yukarı atılan bir taş en yüksek noktasındayken hangisi doğrudur? (g = 10 m/s², hava direnci yok)",
        opts: ["Hızı ve ivmesi sıfırdır.", "Hızı sıfır değildir, ivmesi sıfırdır.", "Hızı ve ivmesi 10'dur.", "Hızı sıfırdır, ivmesi 10 m/s² ile aşağı doğrudur."], a: 3,
        why: "Tepede hız anlık olarak sıfırdır; ivme tüm hareket boyunca g = 10 m/s² aşağı yönlüdür. A en çekici yanlış: hız sıfır diye ivmenin de sıfır olduğunu sanmak." }
    ]
  };
})();
