/* Kitora not defteri · st704 · 7.4–7.5 Eşleştirilmiş Veri
   Kaynak: AP Statistics CED 7.4–7.5 (öğrenme hedefleri kendi anlatımımla). Blok türleri: /ap/_kit/defter.js başı.
   Veri: 9 öğrenci, telefon yanında / dışarıda test puanı; farklar d = dışarıda − yanında: −1, −1, 0, 3, 4, 4, 5, 6, 7 (x̄_d = 3, s_d = 3).
   Grafikte y = (puan − 60) / 4. t∗ (df = 8, %95) = 2,306 tablodan. */
window.DEFTER = {
  slug: "st704",
  amac: "Bu konu, aynı kişilerden iki kez ölçüm alınan ya da çift çift eşleştirilmiş verinin nasıl çözüleceğini anlatıyor. Her çiftin farkını alıp tek bir ölçüme çevirmeyi, bu farklara tek örneklemli *t* aralığı ve *t* testi uygulamayı, koşulları ve yaygın tuzakları öğreneceksin.",
  bolumler: [
    {
      baslik: "Eşleştirilmiş veri nedir?",
      kisa: "Her gözlem bir çift: aynı kişi iki kez ya da benzer iki birim.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👯", terim: "Paired data (matched pairs)", tr: "eşleştirilmiş veri", tanim: "Ölçümler ==çiftler halinde== gelir: aynı birim iki kez ölçülür ya da benzer iki birim eşlenir. Çiftin iki değeri birbirine bağlıdır.", ornek: "Aynı 9 öğrenci, telefon yanında ve telefon dışarıdayken aynı tür testi çözüyor." },
            { ikon: "➖", terim: "Difference (d)", tr: "çiftin farkı", tanim: "Her çift için iki ölçümün farkı; tek bir sayıya inen yeni değişken. Farkların ortalaması x̄_d, standart sapması s_d.", ornek: "d = dışarıda puanı − yanında puanı." }
          ] },
        { tip: "ikili", sol: { ikon: "👯", baslik: "Eşleştirilmiş", maddeler: ["Aynı birimler iki kez ölçülür ya da çiftler eşlenir", "Analiz: farklar üzerinde tek örneklemli *t*"] },
          sag: { ikon: "👥", baslik: "İki bağımsız grup", maddeler: ["İki ayrı rastgele örneklem ya da rastgele atanmış iki grup", "Analiz: iki örneklemli *t* (st705, st706)"] },
          oyun: [
            { metin: "Aynı 9 öğrenci, telefon yanında ve dışarıdayken aynı tür testi çözüyor.", cevap: "sol", neden: "Aynı kişiler iki kez ölçülüyor: eşleştirilmiş." },
            { metin: "Rastgele seçilmiş 9 dokuzuncu ve 9 on birinci sınıf öğrencisinin harçlığı karşılaştırılıyor.", cevap: "sag", neden: "İki ayrı, birbirinden bağımsız örneklem." },
            { metin: "İkiz kardeş çiftlerinin birine yöntem A, diğerine yöntem B öğretiliyor; puanlar çift çift karşılaştırılıyor.", cevap: "sol", neden: "Her ikiz çifti bir eşleştirilmiş çift (*matched pairs*)." },
            { metin: "30 öğrenci rastgele ikiye bölünüyor: biri flaş kartla, diğeri tekrar okuyarak çalışıyor.", cevap: "sag", neden: "İki bağımsız grup (randomize deney)." },
            { metin: "12 öğrencinin dersten önceki ve sonraki kaygı puanları.", cevap: "sol", neden: "Aynı öğrenciler iki kez ölçülüyor: eşleştirilmiş." }
          ] },
        { tip: "tuzak", baslik: "“İki grup var” ≠ “iki bağımsız grup”", metin: "İki sütun veri görünce otomatik olarak iki örneklemli yönteme gitme.", yanlis: "İki ölçüm sütunu var, o zaman iki örneklem.", dogru: "Önce sor: aynı birimler mi ölçüldü ya da gerçek çiftler mi var? Evetse eşleştirilmiş veridir; satırlar eşleşiyorsa farkları al." }
      ]
    },
    {
      baslik: "Çiftlerin farklarını almak",
      kisa: "Her çizgi bir çift; farkı alınca tek ölçümlük bir veri elde edersin.",
      bloklar: [
        { tip: "grafik", baslik: "Her öğrenci için telefon etkisi", xlabel: "", ylabel: "Test puanı", xmax: 8, ymax: 10,
          yticks: [{ v: 0, label: "60" }, { v: 2.5, label: "70" }, { v: 5, label: "80" }, { v: 7.5, label: "90" }, { v: 10, label: "100" }],
          ogeler: [
            { id: "e1", tip: "yazi", x: 2, y: 9.3, metin: "Telefon yanında" },
            { id: "e2", tip: "yazi", x: 6, y: 9.3, metin: "Telefon dışarıda" },
            { id: "l1", tip: "cizgi", renk: 3, from: [2, 0.5], to: [6, 0.25], etiket: "", gizli: true },
            { id: "l2", tip: "cizgi", renk: 3, from: [2, 2.5], to: [6, 2.25], etiket: "", gizli: true },
            { id: "l3", tip: "cizgi", renk: 2, from: [2, 3.5], to: [6, 3.5], etiket: "", gizli: true },
            { id: "l4", tip: "cizgi", renk: 1, from: [2, 1.5], to: [6, 2.25], etiket: "", gizli: true },
            { id: "l5", tip: "cizgi", renk: 1, from: [2, 4.5], to: [6, 5.5], etiket: "", gizli: true },
            { id: "l6", tip: "cizgi", renk: 1, from: [2, 5.5], to: [6, 6.5], etiket: "", gizli: true },
            { id: "l7", tip: "cizgi", renk: 1, from: [2, 2.5], to: [6, 3.75], etiket: "", gizli: true },
            { id: "l8", tip: "cizgi", renk: 1, from: [2, 6.5], to: [6, 8], etiket: "", gizli: true },
            { id: "l9", tip: "cizgi", renk: 1, from: [2, 3.5], to: [6, 5.25], etiket: "", gizli: true },
            { id: "m", tip: "cizgi", renk: 0, from: [2, 3.389], to: [6, 4.139], etiket: "ortalama", gizli: true }
          ],
          durumlar: [
            { metin: "Her çizgi bir öğrenci: sol uç telefon yanındaki puan, sağ uç dışarıdaki puan. İlk üç öğrenci.", goster: ["l1", "l2", "l3"] },
            { metin: "Dokuz öğrencinin hepsi. Çizgilerin ==eğimi== o öğrencinin farkıdır: d = dışarıda − yanında.", goster: ["l4", "l5", "l6", "l7", "l8", "l9"] },
            { metin: "Altı çizgi yukarı, biri düz, ikisi aşağı: d değerleri −1, −1, 0, 3, 4, 4, 5, 6, 7." },
            { metin: "Ortalama çizgi de yukarı: x̄_d = 3 puan (73,6 → 76,6).", goster: ["m"] }
          ] },
        { tip: "tablo", baslik: "Farkları tabloya yaz", head: ["Öğrenci", "Yanında", "Dışarıda", "d = Dışarıda − Yanında"], rows: [
            ["1", "62", "61", "−1"], ["2", "70", "69", "−1"], ["3", "74", "74", "0"], ["4", "66", "69", "3"], ["5", "78", "82", "4"],
            ["6", "82", "86", "4"], ["7", "70", "75", "5"], ["8", "86", "92", "6"], ["9", "74", "81", "7"]
          ], not: "Toplam d = 27 → x̄_d = 27/9 = 3. Sapmaların kareleri toplamı 72 → s_d = √(72/8) = 3." },
        { tip: "tuzak", baslik: "Yön tutarlı olsun", metin: "Farkın yönünü State adımında tanımla ve Hₐ'yı aynı yönle yaz.", yanlis: "d = dışarıda − yanında aldım, ama Hₐ: μ_d < 0 yazdım (“dışarıda daha yüksek” demek istiyordum).", dogru: "d = dışarıda − yanında ise “dışarıda daha yüksek” Hₐ: μ_d > 0 demektir. Yönü değiştirirsen işaret ve Hₐ da değişir." }
      ]
    },
    {
      baslik: "Koşullar farklar üzerinde kontrol edilir",
      kisa: "Normal koşulu iki sütuna değil, farkların grafiğine bakılarak savunulur.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🎲", baslik: "Random", metin: "Çiftler rastgele örneklemden gelmeli; ya da deneyde her kişinin koşul sırası rastgele (yazı-tura) belirlenmeli." },
            { ikon: "🔟", baslik: "10%", metin: "Çift sayısı n, yerine koymadan seçilen popülasyonun %10'unu aşmamalı." },
            { ikon: "🔔", baslik: "Normal / Large Sample", metin: "Çift sayısı n ≥ 30 ise yeterli. n < 30 ise ==farkların== grafiği yaklaşık simetrik, güçlü çarpıklık ve uç değer yok." }
          ] },
        { tip: "sekil", baslik: "Farkların nokta grafiği (n = 9)", fig: { type: "dot", values: [-1, -1, 0, 3, 4, 4, 5, 6, 7], label: "d = Dışarıda − Yanında (puan)" } }
      ]
    },
    {
      baslik: "Güven aralığı: x̄_d ± t∗ · s_d/√n",
      kisa: "Farkları tek örneklemli t aralığına koy; df = çift sayısı − 1.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "x̄_d", alt: "farkların ortalaması" }, "±", { t: "t∗", alt: "df = n − 1" }, "·", { t: "s_d/√n", alt: "SE (n: çift sayısı)" }],
          aciklama: "Parametre μ_d: bütün çiftler için ortalama fark. Aralık 0'ı içeriyorsa μ_d = 0 makul bir değerdir." },
        { tip: "ornek", baslik: "Telefon dışarıda olunca puan değişiyor mu?", durum: "Okuldan rastgele seçilen 9 öğrenci, aynı tür iki testi çözdü; hangi testte telefonun yanında olacakları yazı-turayla belirlendi. Farklar (dışarıda − yanında): x̄_d = 3, s_d = 3 puan; farkların nokta grafiği yaklaşık simetrik, uç değer yok. %95 güven aralığı kur.",
          adimlar: [
            "State: μ_d = okuldaki öğrenciler için ortalama puan farkı (telefon dışarıda − telefon yanında). %95 aralık kuracağız.",
            "Plan: *paired t interval for μ_d*. Random: öğrenciler rastgele seçildi, test sırası rastgele atandı. 10%: 9, okulun %10'undan az. Normal: n = 9 < 30 ama farkların grafiği yaklaşık simetrik, uç değer yok.",
            "Do: df = 8, t∗ = 2,306. SE = 3/√9 = 1. ME = 2,306 · 1. Aralık: 3 ± 2,306 = (0,69; 5,31).",
            "Conclude: “We are 95% confident that the interval from 0.69 to 5.31 points captures the true mean difference (away − nearby) in test scores for students at this school. Since 0 is not in the interval, there is convincing evidence that the mean difference is not 0.”"
          ],
          sonuc: "(0,69; 5,31) puan. Aralığın tamamı 0'ın üstünde: telefon dışarıdayken puanlar ortalama olarak daha yüksek görünüyor." }
      ]
    },
    {
      baslik: "Test: H₀: μ_d = 0",
      kisa: "Farklara tek örneklemli t testi uygula; H₀ genelde “ortalama fark 0”dır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "t", alt: "test istatistiği" }, "=", { t: "x̄_d − 0", alt: "ortalama fark − H₀" }, "÷", { t: "s_d/√n", alt: "SE; df = n − 1" }],
          aciklama: "H₀: μ_d = 0 (ortalamada fark yok). Hₐ: μ_d > 0, < 0 ya da ≠ 0; yön, d'yi nasıl tanımladığına bağlı." },
        { tip: "ornek", baslik: "Telefon dışarıdayken puan daha yüksek mi?", durum: "Aynı veri: n = 9, x̄_d = 3, s_d = 3, d = dışarıda − yanında, α = 0,05. Koşullar önceki gibi sağlanıyor.",
          adimlar: [
            "State: μ_d = ortalama puan farkı (dışarıda − yanında). H₀: μ_d = 0, Hₐ: μ_d > 0. α = 0,05.",
            "Plan: *paired t test for μ_d*; Random, 10% ve Normal (farkların grafiği yaklaşık simetrik) koşulları sağlanıyor.",
            "Do: SE = 3/√9 = 1; t = (3 − 0)/1 = 3,0; df = 8. Tabloda 2,896 (0,01) ile 3,355 (0,005) arası → 0,005 < P < 0,01; hesap makinesi P ≈ 0,0085.",
            "Conclude: “Since the P-value ≈ 0.0085 < α = 0.05, we reject H₀. There is convincing evidence that the true mean score is higher when the phone is away than when it is nearby for students at this school.”"
          ],
          sonuc: "H₀ reddedilir. Test sırası rastgele atandığı için telefonun puanı etkilediği yönünde neden-sonuç çıkarımı da yapılabilir; sonuç okul öğrencilerine genelleştirilir çünkü öğrenciler rastgele seçildi." }
      ]
    },
    {
      baslik: "Eşleştirmenin gücü ve iki örneklem tuzağı",
      kisa: "Eşleştirme kişiler arası farkı eler; veriyi bağımsız sanırsan kanıtı kaçırırsın.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 3, etiket: "Eşleştirilmiş t (doğru yöntem)" },
            { deger: 0.73, etiket: "İki bağımsız örneklem t (yanlış yöntem)" }
          ] },
        { tip: "tuzak", baslik: "Eşleştirilmiş veriye iki örneklemli test uygulamak", metin: "Aynı 9 öğrencinin puanları kişiden kişiye çok değişir (yanında: 62–86). İki sütunu bağımsız sanırsan SE ≈ 4,09 çıkar ve t ≈ 0,73 gibi küçük bir değerle kanıtı kaçırırsın.", yanlis: "İki sütunun ortalamasını iki örneklemli t ile karşılaştırdım.", dogru: "Aynı kişileri iki kez ölçtüysen önce farkları al: kişiden kişiye değişim silinir, SE = 1 olur ve t = 3,0 çıkar." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Eşleştirilmiş veri: aynı birimler iki kez ölçülür ya da gerçek çiftler eşlenir (*paired data*, *matched pairs*).",
            "Her çiftin farkını al (yönü tanımla): d = ikinci − birinci. Analiz bu farklar üzerinde tek örneklemli *t* prosedürüdür.",
            "Aralık: x̄_d ± t∗ · s_d/√n; test: t = (x̄_d − 0)/(s_d/√n); df = n − 1, n = çift sayısı.",
            "H₀: μ_d = 0; Hₐ yönü d'nin tanımına bağlıdır.",
            "Koşullar: *Random* (çiftler ya da koşul sırası rastgele), 10%, Normal: n ≥ 30 ya da farkların grafiği yaklaşık simetrik, uç değer yok.",
            "Eşleştirilmiş veriye iki örneklemli test uygulama; bağımsız iki gruba eşleştirilmiş test uygulama.",
            "Dört adımı yaz; Conclude cümlesinde parametre μ_d'yi ve farkın yönünü bağlamıyla söyle."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdaki çalışmalardan hangisinde eşleştirilmiş (*paired*) verinin analizi uygundur?",
      opts: ["Rastgele seçilen 20 erkek ve 20 kız öğrencinin sınav puanları karşılaştırılıyor.", "40 öğrenci rastgele iki gruba bölünüyor; bir gruba yöntem A, diğerine yöntem B uygulanıyor.", "12 öğrencinin kaygı puanı bir ders programından önce ve sonra ölçülüyor.", "İki farklı okuldan rastgele 15'er öğrencinin okula geliş süresi karşılaştırılıyor."], a: 2,
      why: "Aynı 12 öğrenci iki kez ölçüldüğü için her öğrencinin önce-sonra değerleri bir çifttir. Diğer üç şıkta iki ayrı, bağımsız grup vardır (randomize deney dahil); orada iki örneklemli yöntem kullanılır." },
    { q: "Bir araştırmacı, 16 öğrencinin aynı kelime testini iki farklı yöntemle çözdüğü bir çalışmada farkları (yöntem 2 − yöntem 1) hesaplıyor. Farkların grafiği yaklaşık simetrik, uç değer yok. H₀: μ_d = 0 için t istatistiği ve df nedir?",
      fig: { type: "table", head: ["n (çift)", "x̄_d", "s_d"], rows: [["16", "2", "4"]], caption: "Farkların özeti" },
      opts: ["t = 2,0; df = 15", "t = 2,0; df = 30", "t = 0,5; df = 15", "t = 8,0; df = 15"], a: 0,
      why: "SE = s_d/√n = 4/√16 = 1; t = (2 − 0)/1 = 2,0; df = n − 1 = 15 (n = çift sayısı, 32 ölçüm değil). df = 30 şıkkı 16 + 16 − 2 gibi iki örneklemli bir df'tir; 0,5 şıkkı SE yerine s_d'yi bölen yapar." },
    { q: "9 öğrencinin telefon dışarıdayken ve yanındayken aldığı puanların farkları için x̄_d = 3 ve s_d = 3 bulunmuştur (koşullar sağlanıyor). μ_d için %95 güven aralığı hangisidir? (df = 8 için t∗ = 2,306; df = 9 için 2,262)",
      opts: ["(1,04; 4,96)", "(0,74; 5,26)", "(0,69; 5,31)", "(2,23; 3,77)"], a: 2,
      why: "df = 8, t∗ = 2,306; SE = 3/√9 = 1; ME = 2,306; aralık 3 ± 2,306 = (0,69; 5,31). (1,04; 4,96) z∗ = 1,960 kullanır; (0,74; 5,26) df'i 9 (n) alır; (2,23; 3,77) SE'yi s_d/n = 1/3 yapar." },
    { q: "Aynı 20 sporcunun antrenmandan önceki ve sonraki sprint süreleri karşılaştırılıyor. d = sonra − önce olmak üzere μ_d için %95 güven aralığı (−0,8; 0,4) saniye bulunuyor. Doğru sonuç hangisidir?",
      opts: ["Aralık negatif sayıları içerdiği için sürelerin kısaldığına dair ikna edici kanıt vardır.", "Aralık geniş olduğu için hiçbir sonuç çıkarılamaz.", "Ortalama farkın tam 0 olduğu kanıtlanmıştır.", "0 aralığın içinde: ortalama farkın 0'dan farklı olduğuna dair ikna edici kanıt yoktur."], a: 3,
      why: "Aralık (−0,8; 0,4) 0'ı içerir; μ_d = 0 makul bir değerdir, yani ortalama fark olduğuna dair ikna edici kanıt yok. Aralığın bir kısmının negatif olması yetmez; aralığın tamamı 0'ın bir yanında olmalıdır. 0'ın aralıkta olması ise 0'ı kanıtlamaz." },
    { q: "Bir öğrenci, aynı 12 kişinin kafein içmeden önce ve sonra ölçülen nabzını iki ayrı örneklem gibi alıp iki örneklemli t testi uyguluyor. Bu yaklaşım için hangisi doğrudur?",
      opts: ["Sorun yok; iki ortalamayı karşılaştırmak için iki örneklemli test her zaman uygundur.", "Yanlış; çiftler birbirine bağlı olduğu için farklar alınmalı ve tek örneklemli *t* kullanılmalıdır.", "Yanlış; bu veri için hiçbir t prosedürü kullanılamaz.", "Doğru; yeter ki iki grubun örneklem büyüklüğü eşit olsun."], a: 1,
      why: "Aynı kişilerin ölçümleri bağımsız değildir; iki örneklemli test bu bağı yok sayar. Doğrusu her kişinin farkını alıp tek örneklemli (eşleştirilmiş) *t* uygulamaktır. Eşit n bağımsızlık sorununu çözmez." }
  ]
};
