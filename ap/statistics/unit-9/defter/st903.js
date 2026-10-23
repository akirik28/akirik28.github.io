/* Kitora not defteri · st903 · 9.4–9.5 Eğim İçin t Testi
   Kaynak: AP Statistics CED Unit 9 (Topic 9.4–9.5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st903",
  amac: "Bu konu regresyon eğimi için anlamlılık testini anlatıyor: H₀: β = 0 hipotezini kurmayı, t = b ÷ SE_b istatistiğini, df = n − 2 ile p-değerini ve bilgisayar çıktısındaki T ve P sütunlarını okumayı; sonucu bağlamla yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Hipotezler: H₀: β = 0",
      kisa: "H₀: popülasyonda doğrusal ilişki yok (β = 0); Hₐ yönlü ya da yönsüz olabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧪", terim: "t test for a slope", tr: "eğim için t testi", tanim: "H₀: β = 0 iddiasını sınar. Test istatistiği t = b ÷ SE_b, df = n − 2.", ornek: "Ekran süresi ile uyku arasında doğrusal ilişki var mı?" },
            { ikon: "↕️", terim: "Alternative hypothesis", tr: "alternatif hipotez", tanim: "Hₐ: β ≠ 0 yön sormaz; β < 0 ya da β > 0 ise soru yönlüdür.", ornek: "“Ekran arttıkça uyku azalıyor mu?” ⇒ Hₐ: β < 0." }
          ] },
        { tip: "ornek", baslik: "Aynı veri, iki farklı soru", durum: "Rastgele seçilen öğrencilerde günlük ekran süresi (saat) ve günlük uyku süresi (saat). β: bütün öğrenciler için ekran süresindeki 1 saatlik artışla ortalama uykudaki gerçek değişim.",
          adimlar: ["Soru 1: “Ekran süresi ile uyku arasında doğrusal ilişki var mı?” H₀: β = 0; Hₐ: β ≠ 0.", "Soru 2: “Ekran süresi arttıkça ortalama uyku süresi azalıyor mu?” H₀: β = 0; Hₐ: β < 0.", "Her iki soruda H₀ aynıdır; fark Hₐ’nın yönündedir."],
          sonuc: "β = 0 “doğrusal ilişki yok” demektir. Yön, soruda ima ediliyorsa Hₐ’ya yazılır." },
        { tip: "tuzak", baslik: "Hipotez b’yi değil β’yı anlatır", metin: "b örneklemden gelen bir sayıdır ve zaten biliniyor. Hipotezler popülasyon eğimi β hakkında yazılır.",
          yanlis: "H₀: b = 0; Hₐ: b < 0.",
          dogru: "H₀: β = 0; Hₐ: β < 0, β’yı bağlamla tanımladıktan sonra." }
      ]
    },
    {
      baslik: "Test istatistiği: t = b ÷ SE_b",
      kisa: "Eğim 0’dan kaç standart hata uzakta? Cevap t’dir; df = n − 2.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "t", alt: "test istatistiği" }, "=", { t: "b − β₀", alt: "örneklem eğimi eksi H₀’daki değer (genelde 0)" }, "÷", { t: "SE_b", alt: "eğimin standart hatası" }], aciklama: "df = n − 2. Örnek: b = −0,2855, SE_b = 0,0878 ⇒ t = −0,2855 ÷ 0,0878 ≈ −3,25 (n = 12, df = 10)." },
        { tip: "grafik", baslik: "t eğrisi, df = 10: t = −3,25", xlabel: "t değeri", ylabel: "Yoğunluk", xmax: 10, ymax: 5,
          xticks: [{ v: 0, label: "−5" }, { v: 1, label: "−4" }, { v: 2, label: "−3" }, { v: 3, label: "−2" }, { v: 4, label: "−1" }, { v: 5, label: "0" }, { v: 6, label: "1" }, { v: 7, label: "2" }, { v: 8, label: "3" }, { v: 9, label: "4" }, { v: 10, label: "5" }],
          yticks: [],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0,0.004],[0.25,0.006],[0.5,0.009],[0.75,0.013],[1,0.02],[1.25,0.031],[1.5,0.048],[1.75,0.074],[2,0.114],[2.25,0.176],[2.5,0.269],[2.75,0.409],[3,0.611],[3.25,0.895],[3.5,1.274],[3.75,1.751],[4,2.304],[4.25,2.88],[4.5,3.397],[4.75,3.76],[5,3.891],[5.25,3.76],[5.5,3.397],[5.75,2.88],[6,2.304],[6.25,1.751],[6.5,1.274],[6.75,0.895],[7,0.611],[7.25,0.409],[7.5,0.269],[7.75,0.176],[8,0.114],[8.25,0.074],[8.5,0.048],[8.75,0.031],[9,0.02],[9.25,0.013],[9.5,0.009],[9.75,0.006],[10,0.004]] },
            { id: "oL", tip: "cizgi", renk: 2, from: [1.748, 0], to: [1.748, 0.074], etiket: "t = −3,25", gizli: true },
            { id: "aL", tip: "alan", renk: 2, noktalar: [[0,0],[0,0.004],[0.1,0.005],[0.2,0.005],[0.3,0.006],[0.4,0.008],[0.5,0.009],[0.6,0.01],[0.7,0.012],[0.8,0.015],[0.9,0.017],[1,0.02],[1.1,0.024],[1.2,0.029],[1.3,0.034],[1.4,0.04],[1.5,0.048],[1.6,0.057],[1.7,0.068],[1.748,0.074],[1.748,0]], gizli: true },
            { id: "tL", tip: "yazi", x: 1.5, y: 0.9, metin: "0,0043", gizli: true },
            { id: "oR", tip: "cizgi", renk: 3, kesik: true, from: [8.252, 0], to: [8.252, 0.074], etiket: "+3,25", gizli: true },
            { id: "aR", tip: "alan", renk: 3, noktalar: [[8.252,0],[8.252,0.074],[8.352,0.062],[8.452,0.052],[8.552,0.044],[8.652,0.037],[8.752,0.031],[8.852,0.026],[8.952,0.022],[9.052,0.019],[9.152,0.016],[9.252,0.013],[9.352,0.011],[9.452,0.01],[9.552,0.008],[9.652,0.007],[9.752,0.006],[9.852,0.005],[9.952,0.004],[10,0.004],[10,0]], gizli: true },
            { id: "tR", tip: "yazi", x: 8.5, y: 0.9, metin: "0,0043", gizli: true }
          ],
          durumlar: [
            { metin: "H₀: β = 0 doğruyken t, df = 10 olan t eğrisini izler (0 etrafında simetrik)." },
            { metin: "Gözlenen t = −3,25: eğim, 0’ın yaklaşık 3,25 standart hata solunda.", goster: ["oL"] },
            { metin: "Hₐ: β < 0 ise p-değeri ==sol kuyruk== ≈ 0,0043.", goster: ["aL", "tL"] },
            { metin: "Hₐ: β ≠ 0 ise iki kuyruk sayılır: ==p = 2 × 0,0043 ≈ 0,0087==.", goster: ["oR", "aR", "tR"] }
          ] },
        { tip: "tablo", baslik: "df = 10 için t tablosu (sağ kuyruk olasılığı)", head: ["Sağ kuyruk olasılığı", "0,05", "0,025", "0,01", "0,005"], rows: [
            ["Kritik t∗ (df = 10)", "1,812", "2,228", "2,764", "3,169"]
          ], not: "|t| = 3,25 > 3,169: tek yönlü p < 0,005; iki yönlü p < 0,01. Makine tam değerleri verir: tcdf ya da LinRegTTest." }
      ]
    },
    {
      baslik: "Bilgisayar çıktısını testle okumak",
      kisa: "Çıktıdaki T ve P, iki yönlü H₀: β = 0 testidir; tek yönlü Hₐ’da P’yi yarıya böl.",
      bloklar: [
        { tip: "tablo", baslik: "Regression Analysis: Uyku versus Ekran (n = 12)", head: ["Predictor", "Coef", "SE Coef", "T", "P"], rows: [
            ["Constant", "8.5588", "0.4556", "18.79", "0.000"],
            ["Ekran", "−0.2855", "0.0878", "−3.25", "0.009"]
          ], vurgu: 1, not: "S = 0.739   R-Sq = 51.4%   R-Sq(adj) = 46.5%" },
        { tip: "tablo", baslik: "Çıktıdaki P hangi Hₐ için?", head: ["Hₐ", "p-değeri", "Bu veride"], rows: [
            ["β ≠ 0", "P (olduğu gibi)", "0,009"],
            ["β < 0 (b negatif, Hₐ’yla aynı yön)", "P ÷ 2", "≈ 0,004"],
            ["β > 0 (b negatif, Hₐ’nın tersi)", "1 − P ÷ 2", "≈ 0,995"]
          ], vurgu: 1, not: "Yön b’nin işaretiyle uyuşuyorsa P yarıya bölünür; uyuşmuyorsa veri Hₐ’yı zaten desteklemez, p büyüktür." },
        { tip: "tuzak", baslik: "Doğru satırı, doğru testi oku", metin: "Constant satırındaki T ve P kesişimin 0 olup olmadığını sınar, eğimi değil. “P = 0.000” ise p-değerinin 0,001’den küçük olduğu anlamına gelir; sıfır değildir.",
          yanlis: "Constant satırındaki P = 0.000’ı eğim testinin sonucu saymak.",
          dogru: "Eğim testi için Ekran satırı: T = −3,25, P = 0,009 (iki yönlü)." }
      ]
    },
    {
      baslik: "Dört adımla çöz: ekran süresi ve uyku",
      kisa: "State hipotezler, Plan koşullar, Do t ve p, Conclude bağlamlı karar.",
      bloklar: [
        { tip: "ornek", baslik: "Ekran süresi arttıkça uyku azalıyor mu?", durum: "800 öğrencili bir liseden rastgele seçilen 12 öğrencide günlük ekran süresi ile uyku süresi. Artık grafiği rastgele, normal olasılık grafiği yaklaşık doğrusal. α = 0,05.",
          adimlar: ["State: β = ekran süresindeki 1 saatlik artışla ortalama uyku süresindeki gerçek değişim (saat). H₀: β = 0; Hₐ: β < 0; α = 0,05.", "Plan: eğim için t testi, df = 12 − 2 = 10. *Linear* ✓ (dağılım ve artık grafiği), *Independent* ✓ (rastgele; 12 < 800’ün %10’u), *Normal* ✓, *Equal SD* ✓, *Random* ✓.", "Do: b = −0,2855; SE_b = 0,0878; t = −3,25; df = 10. Çıktıdaki iki yönlü P = 0,009; Hₐ b’nin yönündeyse p = 0,009 ÷ 2 ≈ 0,004 (makine: 0,0043).", "Conclude: p ≈ 0,004 < α = 0,05 olduğundan H₀’ı reddederiz. Lisedeki öğrenciler için günlük ekran süresi ile ortalama uyku süresi arasında negatif doğrusal ilişki olduğuna dair ikna edici kanıt vardır."],
          sonuc: "t = −3,25, df = 10, p ≈ 0,004 < 0,05 ⇒ H₀ reddedilir." },
        { tip: "adimlar", baslik: "Hesap makinesiyle Do adımı (TI-84)", adimlar: [
            { baslik: "1 · Listeler", metin: "L1’e ekran süreleri (x), L2’ye uyku süreleri (y) yaz." },
            { baslik: "2 · Testi aç", metin: "STAT ▸ TESTS ▸ F: LinRegTTest. Xlist: L1, Ylist: L2, β & ρ: < 0 seç. Calculate." },
            { baslik: "3 · Ekranı oku", metin: "t = −3,252, p = 0,0043, df = 10, a = 8,559, b = −0,2855, s = 0,739, r² = 0,514, r = −0,717." }
          ] }
      ]
    },
    {
      baslik: "Aralık, test ve r² birlikte",
      kisa: "Anlamlı eğim, güçlü ilişki ya da neden-sonuç demek değildir.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 51.4, sonek: " %", etiket: "R-Sq (r²): uykudaki değişimin ekran süresiyle açıklanan payı" },
            { deger: 0.739, sonek: " saat", etiket: "S: tahminin tipik hatası (uyku saati)" },
            { deger: 0.0087, etiket: "iki yönlü p-değeri" }
          ] },
        { tip: "not", metin: "Aynı veride %95 güven aralığı: −0,2855 ± 2,228 × 0,0878 ≈ (−0,48; −0,09). Aralık 0’ı içermiyor; iki yönlü test de α = 0,05’te H₀’ı reddediyor (P = 0,009 < 0,05). Test ve aralık aynı kararı verir." },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Test bunu söyler", maddeler: ["Popülasyonda β = 0 olmayabilir", "Veri rastgele ise sonuç popülasyona genellenir"] },
          sag: { ikon: "🚫", baslik: "Test bunu söylemez", maddeler: ["Neden-sonuç", "İlişkinin güçlü olduğu", "Bireyin değerinin kesin tahmini"] },
          oyun: [
            { metin: "Popülasyonda ekran süresi ile uyku arasında doğrusal ilişki olduğuna dair kanıt.", cevap: "sol", neden: "p küçük: H₀: β = 0 reddedildi." },
            { metin: "Ekran süresini azaltmak uykuyu artırır.", cevap: "sag", neden: "Gözlemsel veri; neden-sonuç için rastgele atamalı deney gerekir." },
            { metin: "p çok küçük olduğuna göre ilişki çok güçlüdür.", cevap: "sag", neden: "Güç r²’ye bakılarak yorumlanır; p-değeri gücü değil kanıtı ölçer." },
            { metin: "Rastgele örneklem olduğu için sonuç lisedeki öğrencilere genellenebilir.", cevap: "sol", neden: "Random koşulu sağlanınca popülasyona çıkarım yapılabilir." },
            { metin: "Bir öğrencinin uykusunu tam olarak tahmin edebiliriz.", cevap: "sag", neden: "S = 0,739 saat: tahminler yaklaşık bu kadar şaşar." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "H₀: β = 0 (doğrusal ilişki yok); Hₐ: β ≠ 0, β < 0 ya da β > 0. Hipotezler β içindir, b için değil.",
            "t = (b − 0) ÷ SE_b, df = n − 2. p-değeri t eğrisinin Hₐ yönündeki kuyruğudur.",
            "Çıktıda değişkenin satırı: Coef = b, SE Coef = SE_b, T = b ÷ SE_b, P = iki yönlü p. Constant satırı kesişim içindir.",
            "Tek yönlü Hₐ ve b’nin işareti Hₐ’yla uyumluysa p = P ÷ 2.",
            "Koşullar: LINER (*Linear*, *Independent*, *Normal*, *Equal SD*, *Random*); artık grafiği ve normal olasılık grafiği ana araçlar.",
            "Dört adım: State, Plan, Do, Conclude. Sonuç bağlamla ve “ikna edici kanıt var / yok” diliyle yazılır.",
            "İki yönlü test ve %(1 − α) aralığı aynı kararı verir.",
            "Küçük p neden-sonuç ya da güçlü ilişki demek değildir; güç için r² ve S’ye bak."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Rastgele seçilen 20 öğrencide ders çalışma saati (x) ile deneme puanı (y) arasındaki ilişki için H₀: β = 0, Hₐ: β > 0 testi yapılıyor ve α = 0,01 seçiliyor. Çıktı aşağıda. Doğru karar hangisidir?",
      fig: { type: "table", head: ["Predictor", "Coef", "SE Coef", "T", "P"], rows: [["Constant", "42.10", "5.20", "8.10", "0.000"], ["Saat", "2.10", "0.79", "2.66", "0.016"]], caption: "n = 20" },
      opts: ["p = 0,016 > 0,01 olduğundan H₀ reddedilemez.", "p = 0,008 < 0,01 olduğundan H₀ reddedilir.", "p = 0,992 olduğundan H₀ reddedilemez.", "p = 0,032 > 0,01 olduğundan H₀ reddedilemez."],
      a: 1,
      why: "Hₐ tek yönlü ve b = 2,10 pozitif (Hₐ’yla aynı yön), bu yüzden p = P ÷ 2 = 0,016 ÷ 2 = 0,008 < 0,01 ⇒ H₀ reddedilir. A iki yönlü P’yi doğrudan kullanıyor; D ikiyle çarpıyor; C ise yönün tersi için hesaplanan p’dir." },
    { q: "Rastgele seçilen 25 öğrenciye ders çalışma saatiyle sınav notu arasında doğrusal ilişki olup olmadığı soruluyor (yön belirtilmiyor). Hipotezler hangisidir?",
      opts: ["H₀: b = 0; Hₐ: b ≠ 0", "H₀: β ≠ 0; Hₐ: β = 0", "H₀: β = 0; Hₐ: β > 0", "H₀: β = 0; Hₐ: β ≠ 0"],
      a: 3,
      why: "H₀ eşitlik içerir (β = 0), yön belirtilmediği için Hₐ iki yönlüdür. A örneklem istatistiği b’yi kullanıyor; B H₀ ile Hₐ’yı ters yazıyor; C yön eklemiş." },
    { q: "n = 18 gözlemli bir regresyonda b = 1,20 ve SE_b = 0,40 bulunmuştur. H₀: β = 0 testi için t istatistiği ve serbestlik derecesi kaçtır?",
      opts: ["t = 3,0; df = 16", "t = 3,0; df = 17", "t = 0,33; df = 16", "t = 3,0; df = 18"],
      a: 0,
      why: "t = b ÷ SE_b = 1,20 ÷ 0,40 = 3,0 ve df = n − 2 = 16. df = 17 tek örneklemli t’nin (n − 1), df = 18 ise n’nin yanlış kullanımıdır; 0,33 ise bölme tersine yapılınca çıkar." },
    { q: "Bir testte H₀: β = 0, Hₐ: β < 0, α = 0,05 ve p = 0,004 bulunmuştur (günlük ekran süresi, uyku süresi; rastgele örneklem). En iyi sonuç cümlesi hangisidir?",
      opts: ["H₀’ı kabul ederiz; ekran süresi ile uyku arasında ilişki yoktur.", "H₀’ı reddederiz; ekran süresini azaltmak uykuyu artırır.", "H₀’ı reddederiz; popülasyonda ekran süresi ile uyku süresi arasında negatif doğrusal ilişki olduğuna dair ikna edici kanıt var.", "H₀’ı reddederiz; örneklemdeki 12 öğrencide ilişki vardır."],
      a: 2,
      why: "p < α ⇒ H₀ reddedilir ve sonuç popülasyon, bağlam ve “ikna edici kanıt” diliyle yazılır. B neden-sonuç iddia eder; D yalnızca örnekleme bakar; A p < α iken H₀’ı kabul eder." },
    { q: "Rastgele seçilen 400 öğrenci için çıktıya göre H₀: β = 0 testi α = 0,05’te reddedilir. Aşağıdaki yorumlardan hangisi en uygundur?",
      fig: { type: "table", head: ["Predictor", "Coef", "SE Coef", "T", "P"], rows: [["Constant", "20.0", "1.5", "13.33", "0.000"], ["Saat", "0.15", "0.04", "3.75", "0.000"]], caption: "S = 5.2   R-Sq = 3.4%" },
      opts: ["Eğim anlamlı olduğundan çalışma saati puanı büyük ölçüde belirler.", "Eğim anlamlı: doğrusal ilişki var; ama R-Sq = %3,4 olduğundan ilişki zayıf, saat puandaki değişimin küçük bir kısmını açıklıyor.", "P = 0.000 olduğundan eğimin tam olarak 0,15 olduğu kesindir.", "R-Sq düşük olduğundan test sonucu geçersizdir."],
      a: 1,
      why: "Büyük n küçük bir eğimi bile anlamlı yapabilir. İlişkinin gücü r² (%3,4) ile okunur. A anlamlılığı güçle, C p-değerini kesinlikle, D ise düşük r²’yi geçersizlikle karıştırıyor." }
  ]
};
