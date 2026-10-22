/* Kitora not defteri · mi304 · 3.4 Kâr Türleri
   Kaynak: AP Micro CED, Topic 3.4 (CBA-2.C.1–2). Blok türleri: /ap/_kit/defter.js başı.
   Zeynep'in kafesi (aylık, bin TL): gelir 100; açık maliyet 20 + 30 + 10 = 60; muhasebe kârı 40;
   örtük maliyet 20 (zamanı) + 5 (sermaye) + 5 (risk) = 30; ekonomik kâr 10.
   Grafik: unit 3'ün ortak maliyet verisi (FC 60; Q=5'te ATC 21; Q=4'te ATC 21). Profit: P=30, Q=5 → 45; P=21 → 0; P=15, Q=4 → −24. */
window.DEFTER = (function () {
  function pts(f, a, b, s) {
    var r = [], x;
    for (x = a; x <= b + 1e-9; x += s) r.push([Math.round(x * 100) / 100, Math.round(f(x) * 100) / 100]);
    return r;
  }
  var avc = function (x) { return x * x - 6 * x + 14; };
  var MC0 = [[0.5, 9], [1.5, 3], [2.5, 3], [3.5, 9], [4.5, 21], [5.5, 39]];
  var TICKS = [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }];

  return {
    slug: "mi304",
    amac: "Bu konu firmanın kârının tek bir şey olmadığını anlatıyor. Açık ve örtük maliyeti, muhasebe kârı, ekonomik kâr ve normal kârı ayırmayı, kârı hesaplamayı ve firmaların neden muhasebe kârına değil ekonomik kâra tepki verdiğini öğreneceksin.",
    bolumler: [
      {
        baslik: "Açık ve örtük maliyet",
        kisa: "Açık maliyet para ödemesidir; örtük maliyet vazgeçilen en iyi alternatiftir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🧾", terim: "Explicit costs", tr: "açık maliyetler", tanim: "Firmanın başkasına yaptığı ve fatura ya da makbuzla görülen ödemeler.", ornek: "Kira, malzeme faturası, çalışan maaşı." },
              { ikon: "👻", terim: "Implicit costs", tr: "örtük maliyetler", tanim: "Para ödemesi yapılmayan ama firma sahibinin kendi kaynaklarıyla vazgeçtiği alternatif getiri. Hesapta görünmez, ==gerçek bir fırsat maliyetidir.==", ornek: "Sahibi kafede çalışmasa başka işte maaş alırdı." }
            ] },
          { tip: "harita", merkez: "*Implicit costs* üç türdür", dallar: [
              { baslik: "Girişimcinin zamanı", alt: "Kendi emeği için vazgeçtiği maaş" },
              { baslik: "Finansal sermayenin maliyeti", alt: "Kendi parasının başka yerde kazanacağı getiri" },
              { baslik: "Risk karşılığı", alt: "Riskli işe girmek için beklenen en az ek getiri" }
            ] },
          { tip: "ikili", sol: { ikon: "🧾", baslik: "*Explicit cost*", maddeler: ["Gerçek para ödemesi", "Muhasebe kayıtlarında görünür"] },
            sag: { ikon: "👻", baslik: "*Implicit cost*", maddeler: ["Para ödenmez, alternatiften vazgeçilir", "Muhasebe kayıtlarında yoktur"] },
            oyun: [
              { metin: "Kafenin aylık kirası.", cevap: "sol", neden: "Kiracıya ödenen para: açık maliyet." },
              { metin: "Kafe sahibinin, kendi çalışması için vazgeçtiği maaş.", cevap: "sag", neden: "Ödeme yok, alternatiften vazgeçiş var: örtük maliyet." },
              { metin: "Çalışan Ali'ye ödenen maaş.", cevap: "sol", neden: "Gerçek bir ödeme: açık maliyet." },
              { metin: "Sahibinin kafeye koyduğu kendi birikimi bankada getirebilecekken getirmemesi.", cevap: "sag", neden: "Sermayenin fırsat maliyeti: örtük maliyet." }
            ] },
          { tip: "tuzak", metin: "Örtük maliyetler hesap kitapta görünmediği için \"yok sayılabilir\" gibi durur.", yanlis: "Para ödenmeyen şey maliyet değildir.", dogru: "Örtük maliyetler gerçek fırsat maliyetleridir; ekonomik kârı hesaplarken mutlaka çıkarılır." }
        ]
      },
      {
        baslik: "Üç kâr türü: muhasebe, ekonomik, normal",
        kisa: "Ekonomik kâr, muhasebe kârından örtük maliyetleri çıkarınca bulunur.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "Muhasebe kârı", alt: "TR − açık maliyet" }, "→",
              { t: "Ekonomik kâr", alt: "muhasebe kârı − örtük maliyet" }, "→",
              { t: "Normal kâr", alt: "ekonomik kâr sıfırken" }
            ], aciklama: "TR toplam gelirdir. Ekonomik kâr = TR − açık maliyet − örtük maliyet." },
          { tip: "kavramlar", kartlar: [
              { ikon: "📒", terim: "Accounting profit", tr: "muhasebe kârı", tanim: "Gelirden yalnızca açık maliyetler çıkarılarak bulunan kâr. Örtük maliyetleri hesaba katmaz.", ornek: "100 − 60 = 40 bin TL." },
              { ikon: "🧠", terim: "Economic profit", tr: "ekonomik kâr", tanim: "Gelirden açık ve örtük bütün maliyetler çıkarılarak bulunan kâr. Pozitif, sıfır ya da negatif olabilir.", ornek: "40 − 30 = 10 bin TL." },
              { ikon: "🧱", terim: "Normal profit", tr: "normal kâr", tanim: "Örtük maliyetleri tam karşılayan getiri; sahibini bu işte tutmak için gereken en az kazanç. Normal kâr kazanan firmanın ekonomik kârı sıfırdır.", ornek: "Örtük maliyet 30 bin TL ise normal kâr 30 bin TL'dir." }
            ] }
        ]
      },
      {
        baslik: "Hesaplayalım: Zeynep'in kafesi",
        kisa: "Aynı kafe: muhasebe kârı 40 bin, ekonomik kâr yalnızca 10 bin.",
        bloklar: [
          { tip: "tablo", baslik: "Zeynep'in kafesi, aylık hesap (bin TL)", head: ["Kalem", "Tutar"], rows: [
              ["Toplam gelir (TR)", "100"],
              ["Kira (açık)", "−20"],
              ["Malzeme (açık)", "−30"],
              ["Çalışan maaşı (açık)", "−10"],
              ["**Muhasebe kârı**", "**40**"],
              ["Zeynep'in zamanı: başka işteki maaşı (örtük)", "−20"],
              ["Kendi 200 bin TL'sinin bankada getireceği (örtük)", "−5"],
              ["Risk karşılığı (örtük)", "−5"],
              ["**Ekonomik kâr**", "**10**"]
            ], vurgu: 8, not: "Örtük maliyet toplamı 20 + 5 + 5 = 30 bin TL; normal kâr da budur." },
          { tip: "ornek", baslik: "Zeynep işini bırakmalı mı?", durum: "Zeynep kafeden ayda 40 bin TL muhasebe kârı elde ediyor. Ayrıca başka bir firma ona ayda 45 bin TL maaş teklif ediyor. Diğer örtük maliyetler (5 + 5) aynı. Ekonomik kâr ne olur?",
            adimlar: [
              "Örtük maliyet = 45 + 5 + 5 = 55 bin TL.",
              "Ekonomik kâr = 40 − 55 = −15 bin TL.",
              "Muhasebe kârı hâlâ pozitif (40 bin) ama ekonomik kâr negatif."
            ],
            sonuc: "−15 bin TL ekonomik zarar: kafe, Zeynep'in en iyi alternatifinden daha az kazandırıyor." }
        ]
      },
      {
        baslik: "Kâr grafikte: fiyat ile ATC'nin farkı",
        kisa: "Birim başına kâr P − ATC'dir; toplam kâr, bunun Q katıdır.",
        bloklar: [
          { tip: "grafik", baslik: "Kantin: fiyat değişince ekonomik kâr", xlabel: "Üretim (Q, parti)", ylabel: "TL", xmax: 7, ymax: 44,
            xticks: TICKS, yticks: [{ v: 15, label: "15" }, { v: 21, label: "21" }, { v: 30, label: "30" }],
            ogeler: [
              { id: "mc", tip: "egri", renk: 3, noktalar: MC0, etiket: "MC" },
              { id: "atc", tip: "egri", renk: 0, noktalar: pts(function (x) { return avc(x) + 60 / x; }, 2, 6.5, 0.5), etiket: "ATC" },
              { id: "kar", tip: "alan", renk: 2, noktalar: [[0, 30], [5, 30], [5, 21], [0, 21]], gizli: true },
              { id: "zarar", tip: "alan", renk: 3, noktalar: [[0, 21], [4, 21], [4, 15], [0, 15]], gizli: true },
              { id: "p", tip: "cizgi", renk: 1, kesik: true, from: [0, 30], to: [6.2, 30], etiket: "P = 30" },
              { id: "q", tip: "nokta", renk: 2, x: 5, y: 30, etiket: "Q = 5", kilavuz: true }
            ],
            durumlar: [
              { metin: "Fiyatı 30 TL olan bir piyasada kantin 5 parti üretiyor (neden 5 olduğunu Konu 3.5'te göreceksin). Kâr, fiyatın ATC ile karşılaştırılmasından çıkar." },
              { metin: "Q = 5'te P = 30 > ATC = 21. Birim başına 9 TL kâr; yeşil dikdörtgen toplam ==ekonomik kâr 45 TL== ((30 − 21) × 5).", goster: ["kar"] },
              { metin: "Fiyat 21 TL'ye inerse P, ATC'ye eşit olur: gelir bütün maliyeti (örtük dahil) tam karşılar. ==Ekonomik kâr sıfır==, firma normal kâr kazanır.",
                gizle: ["kar"], set: { p: { from: [0, 21], to: [6.2, 21], etiket: "P = 21" }, q: { x: 5, y: 21, etiket: "P = ATC" } } },
              { metin: "Fiyat 15 TL olursa firma 4 parti üretir; ATC = 21 > P = 15. Birim başına 6 TL zarar; mor dikdörtgen ==ekonomik zarar 24 TL== ((21 − 15) × 4).",
                goster: ["zarar"], set: { p: { from: [0, 15], to: [6.2, 15], etiket: "P = 15" }, q: { x: 4, y: 15, etiket: "Q = 4" } } }
            ] },
          { tip: "not", metin: "Dikdörtgenin yüksekliği P ile ATC arasındaki farktır, genişliği üretilen miktardır. P, ATC'nin üstündeyse alan kâr, altındaysa zarardır. Grafikteki ATC, ekonomik kâr hesabında örtük maliyeti (normal kârı) zaten içerir." }
        ]
      },
      {
        baslik: "Firma neye tepki verir?",
        kisa: "Firmalar muhasebe kârına değil, ekonomik kâr ya da zarara tepki verir.",
        bloklar: [
          { tip: "tablo", baslik: "Ekonomik kâra göre karar", head: ["Ekonomik kâr", "Anlamı", "Firma", "Piyasa"], rows: [
              ["Pozitif (> 0)", "Normal kârın üstünde kazanç", "Kalır", "Yeni firmalar girer"],
              ["Sıfır", "Tam olarak normal kâr; örtük maliyetler karşılandı", "Kalır", "Giriş ve çıkış olmaz"],
              ["Negatif (< 0)", "Muhasebe kârı pozitif olsa bile alternatiften az kazanç", "Uzun dönemde çıkar", "Firmalar çıkar"]
            ], not: "Girişin ve çıkışın ayrıntısı Konu 3.6'da." },
          { tip: "ikili", sol: { ikon: "🚪", baslik: "Ekonomik kâr pozitif", maddeler: ["Alternatiften fazla kazanıyor", "Yeni firmalar girmek ister"] },
            sag: { ikon: "🏃", baslik: "Ekonomik zarar", maddeler: ["Alternatiften az kazanıyor", "Firma çıkmayı düşünür"] },
            oyun: [
              { metin: "Muhasebe kârı 40 bin TL; bütün örtük maliyetler 30 bin TL.", cevap: "sol", neden: "40 − 30 = 10 bin TL ekonomik kâr." },
              { metin: "Muhasebe kârı 40 bin TL; örtük maliyetler 55 bin TL.", cevap: "sag", neden: "40 − 55 = −15 bin TL ekonomik zarar." },
              { metin: "Muhasebe kârı 10 bin TL; örtük maliyetler 4 bin TL.", cevap: "sol", neden: "10 − 4 = 6 bin TL ekonomik kâr." },
              { metin: "Muhasebe kârı 0; sahibi başka işte ayda 30 bin TL kazanabilirdi.", cevap: "sag", neden: "0 − 30 = −30 bin TL: muhasebe kârı sıfır olması bile ekonomik zarardır." }
            ] },
          { tip: "tuzak", metin: "Defterde kâr görünmesi, işin sürmesi için yetmez; ama sıfır ekonomik kâr da kötü bir şey değildir.", yanlis: "Muhasebe kârı pozitifse firma kalır; ekonomik kâr sıfırsa firma batıyordur.", dogru: "Karar ekonomik kâra göre verilir. Sıfır ekonomik kârda bütün maliyetler (örtük dahil) karşılanmıştır: firma normal kâr kazanır ve kalır." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*Explicit costs* para ödemesidir; *implicit costs* ise vazgeçilen alternatiftir (girişimcinin zamanı, sermayenin maliyeti, risk karşılığı).",
              "Muhasebe kârı = TR − açık maliyet. Örtük maliyeti hesaba katmaz.",
              "Ekonomik kâr = TR − açık maliyet − örtük maliyet. Pozitif, sıfır ya da negatif olabilir.",
              "*Normal profit* örtük maliyetleri tam karşılayan getiridir; normal kâr kazanan firmanın ekonomik kârı sıfırdır.",
              "Grafikte toplam kâr = (P − ATC) × Q: P > ATC ise kâr, P < ATC ise zarar.",
              "Firmalar muhasebe kârına değil, ekonomik kâr ya da zarara tepki verir.",
              "Ekonomik kâr pozitifse yeni firmalar girer; ekonomik zarar varsa firmalar çıkar; sıfırsa denge.",
              "Muhasebe kârı pozitif olsa bile ekonomik kâr negatif olabilir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Bir terzi atölyesinin yıllık geliri 200 bin TL, açık maliyetleri 120 bin TL ve örtük maliyetleri 90 bin TL'dir. Atölyenin ekonomik sonucu nedir?",
        opts: ["80 bin TL ekonomik kâr", "110 bin TL ekonomik kâr", "10 bin TL ekonomik zarar", "Sıfır ekonomik kâr"], a: 2,
        why: "Muhasebe kârı = 200 − 120 = 80 bin TL. Ekonomik kâr = 80 − 90 = −10 bin TL: ekonomik zarar. İlk şık en çekici yanlış şıktır: 80 bin TL muhasebe kârıdır; örtük maliyetler çıkarılmadığı için ekonomik kâr değildir." },
      { q: "Elif kendi kafesinden ayda 30 bin TL muhasebe kârı elde ediyor. Kafeyi açmasaydı bir şirkette ayda 35 bin TL maaşla çalışacaktı (başka örtük maliyet yok). Hangisi doğrudur?",
        opts: ["Kâr pozitif olduğu için Elif kafede kalır.", "Ekonomik kâr −5 bin TL'dir; uzun dönemde piyasadan çıkması beklenir.", "Elif normal kâr kazanmaktadır.", "Ekonomik kâr 65 bin TL'dir."], a: 1,
        why: "Ekonomik kâr = 30 − 35 = −5 bin TL. Firma sahibi en iyi alternatifinden daha az kazandığı için uzun dönemde çıkması beklenir. A en çekici yanlış şıktır: muhasebe kârının pozitif olması yetmez, firmalar ekonomik kâra tepki verir." },
      { q: "Aşağıdakilerden hangisi bir örtük maliyettir?",
        opts: ["Dükkân kirası", "Hammadde faturası", "Çalışanın maaşı", "Girişimcinin kendi işinde çalışmak için başka bir işteki ücretinden vazgeçmesi"], a: 3,
        why: "Örtük maliyet, para ödemesi yapılmayan ama vazgeçilen en iyi alternatiftir; girişimcinin zamanı bunun bir örneğidir. Kira, hammadde ve maaş başkasına yapılan gerçek ödemelerdir: açık maliyet." },
      { q: "Grafikteki firma Q = 5 parti üretiyor. Firmanın ekonomik sonucu nedir? (ATC, örtük maliyetleri içerir.)",
        fig: { type: "graph", xlabel: "Q", ylabel: "TL", xmax: 10, ymax: 10, hlines: [{ p: 6, label: "P = 6" }], points: [{ q: 5, p: 6, label: "E", guides: true }, { q: 5, p: 8, label: "ATC = 8", guides: true }], xticks: [{ v: 5, label: "5" }], yticks: [{ v: 6, label: "6" }, { v: 8, label: "8" }] },
        opts: ["10 TL ekonomik kâr", "10 TL ekonomik zarar", "30 TL ekonomik zarar", "Ekonomik kâr sıfır"], a: 1,
        why: "P = 6 < ATC = 8: birim başına 2 TL zarar. Toplam zarar = (8 − 6) × 5 = 10 TL. A yanlış: P, ATC'nin altındadır, kâr olamaz. C yanlış: 30 TL gelirdir (6 × 5), zarar değil." },
      { q: "Bir firma sıfır ekonomik kâr elde ediyor. Hangisi doğrudur?",
        opts: ["Firma normal kâr kazanmaktadır; örtük maliyetleri dahil bütün maliyetlerini karşılamıştır.", "Firma zarar etmektedir ve hemen kapanmalıdır.", "Muhasebe kârı da sıfırdır.", "Firma hiç gelir elde etmemektedir."], a: 0,
        why: "Sıfır ekonomik kâr, gelirin açık ve örtük bütün maliyetleri tam karşıladığı anlamına gelir: bu normal kârdır. Muhasebe kârı ise pozitiftir (örtük maliyet kadar). Zarar değildir; firma kalır. B ve C en yaygın hatalardır." }
    ]
  };
})();
