/* Kitpath not defteri · cb610 · 6.12 Basit Kesirlere Ayırma
   Kaynak: AP Calculus BC CED 6.12. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb610",
  amac: "Bu konu *partial fractions* yani basit kesirlere ayırmayı anlatıyor: paydası farklı doğrusal çarpanlardan oluşan bir kesri A/(x − a) + B/(x − b) biçiminde yazıp ln'lerle integre edersin. A ve B'yi bulmayı, önce bölme gerektiren durumu ve lojistik denklemlerle bağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kesri parçalamak: neden?",
      kisa: "Çarpanlara ayrılan payda, kesri tek tek ln'li parçalara böler.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "(px + q)/((x − a)(x − b))", alt: "paydada farklı doğrusal çarpanlar" }, "=",
            { t: "A/(x − a)", alt: "birinci basit kesir" }, "+",
            { t: "B/(x − b)", alt: "ikinci basit kesir" }
          ], aciklama: "Sağdaki her kesir kolayca integre edilir: ==∫ A/(x − a) dx = A·ln|x − a|.== Bu konuda payda yalnızca birbirinden farklı doğrusal çarpanlardan oluşur; pay derecesi paydadan küçüktür." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Partial fractions", tr: "basit kesirlere ayırma", tanim: "Bir rasyonel ifadeyi, paydadaki her çarpan için ayrı bir kesrin toplamı olarak yazmak.", ornek: "1/((x − 1)(x + 2)) = (1/3)/(x − 1) − (1/3)/(x + 2)." },
            { ikon: "📏", terim: "Linear factor", tr: "doğrusal çarpan", tanim: "x − a biçimindeki birinci derece çarpan. Kökü a'dır; x = a'da payda sıfır olur.", ornek: "x² − 4 = (x − 2)(x + 2) iki doğrusal çarpana ayrılır." }
          ] },
        { tip: "ikili", sol: { ikon: "🧱", baslik: "*Partial fractions*", maddeler: ["Pay derecesi < payda derecesi", "Payda farklı doğrusal çarpanlara ayrılıyor"] },
          sag: { ikon: "🔀", baslik: "Başka yöntem", maddeler: ["Pay derecesi ≥ payda: önce uzun bölme", "Köksüz payda: arctan; pay paydanın türeviyse: u-substitution"] },
          oyun: [
            { metin: "(3x + 5)/((x + 1)(x + 3))", cevap: "sol", neden: "Pay 1. derece, payda iki farklı doğrusal çarpan." },
            { metin: "(x² + 1)/((x − 1)(x + 2))", cevap: "sag", neden: "Pay ve payda aynı derece (2): önce böl." },
            { metin: "1/(x² + 4)", cevap: "sag", neden: "Payda köksüz: arctan kalıbı." },
            { metin: "5/(x² − 4)", cevap: "sol", neden: "x² − 4 = (x − 2)(x + 2): iki doğrusal çarpan." },
            { metin: "2x/(x² + 1)", cevap: "sag", neden: "Pay paydanın türevi: u = x² + 1 ile ln(x² + 1)." }
          ] }
      ]
    },
    {
      baslik: "A ve B'yi bulmak",
      kisa: "Payda sıfır yapan x değerlerini yazarak A ve B'yi bul.",
      bloklar: [
        { tip: "adimlar", baslik: "Beş adım", adimlar: [
            { baslik: "Çarpanlara ayır", metin: "Paydayı doğrusal çarpanlara ayır: (x − a)(x − b)." },
            { baslik: "Parçaları yaz", metin: "A/(x − a) + B/(x − b) biçimini kur." },
            { baslik: "Paydaları eşitle", metin: "Pay = A(x − b) + B(x − a) denklemini elde et." },
            { baslik: "A ve B'yi bul", metin: "x = a yaz: B'li terim kaybolur, A kalır. x = b yaz: B kalır (kapatma yöntemi)." },
            { baslik: "ln olarak integre et", metin: "Her parça A·ln|x − a| olur; mutlak değeri unutma." }
          ] },
        { tip: "ornek", baslik: "∫ 1/((x − 1)(x + 2)) dx", durum: "A ve B'yi bul, integre et.",
          adimlar: [
            "Parçala: 1/((x − 1)(x + 2)) = A/(x − 1) + B/(x + 2). Payları eşitle: 1 = A(x + 2) + B(x − 1).",
            "x = 1: 1 = 3A → A = 1/3.  x = −2: 1 = −3B → B = −1/3.",
            "İntegre et: (1/3) ln|x − 1| − (1/3) ln|x + 2| + C = (1/3) ln|(x − 1)/(x + 2)| + C.",
            "Kontrol: türev (1/3)(1/(x − 1) − 1/(x + 2)) = (1/3)·3/((x − 1)(x + 2)). ✓"
          ], sonuc: "(1/3) ln|(x − 1)/(x + 2)| + C" },
        { tip: "ornek", baslik: "∫ (3x + 5)/((x + 1)(x + 3)) dx", durum: "Pay sabit değil, x'li bir pay var.",
          adimlar: [
            "3x + 5 = A(x + 3) + B(x + 1).",
            "x = −1: −3 + 5 = 2 = 2A → A = 1.  x = −3: −9 + 5 = −4 = −2B → B = 2.",
            "İntegre et: ln|x + 1| + 2 ln|x + 3| + C.",
            "Kontrol: 1/(x + 1) + 2/(x + 3) = (x + 3 + 2x + 2)/(…) = (3x + 5)/((x + 1)(x + 3)). ✓"
          ], sonuc: "ln|x + 1| + 2 ln|x + 3| + C" }
      ]
    },
    {
      baslik: "Belirli integral ve grafik",
      kisa: "İki parçanın farkı fonksiyonu verir; alan ln farkına dönüşür.",
      bloklar: [
        { tip: "ornek", baslik: "∫₀² 1/((x + 1)(x + 3)) dx", durum: "Parçala ve sınırları uygula.",
          adimlar: [
            "1 = A(x + 3) + B(x + 1). x = −1: A = 1/2.  x = −3: B = −1/2.",
            "Antitürev: ½ ln|x + 1| − ½ ln|x + 3| = ½ ln((x + 1)/(x + 3)).",
            "x = 2: ½ ln(3/5).  x = 0: ½ ln(1/3).",
            "Fark: ½ ln(3/5) − ½ ln(1/3) = ½ ln(9/5) = ln 3 − ½ ln 5 ≈ 0,29."
          ], sonuc: "ln 3 − ½ ln 5 ≈ 0,29" },
        { tip: "grafik", baslik: "f = ½/(x + 1) − ½/(x + 3)", xlabel: "x", ylabel: "y", xmax: 4, ymax: 0.6,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 0.2, label: "0,2" }, { v: 0.4, label: "0,4" }, { v: 0.6, label: "0,6" }],
          ogeler: [
            { id: "al", tip: "alan", renk: 0, noktalar: [[0, 0], [0, 0.3333], [0.2, 0.2604], [0.4, 0.2101], [0.6, 0.1736], [0.8, 0.1462], [1, 0.125], [1.2, 0.1082], [1.4, 0.0947], [1.6, 0.0836], [1.8, 0.0744], [2, 0.0667], [2, 0]], gizli: true },
            { id: "f", tip: "egri", renk: 0, etiket: "f", noktalar: [[0, 0.3333], [0.25, 0.2462], [0.5, 0.1905], [0.75, 0.1524], [1, 0.125], [1.25, 0.1046], [1.5, 0.0889], [1.75, 0.0766], [2, 0.0667], [2.25, 0.0586], [2.5, 0.0519], [2.75, 0.0464], [3, 0.0417], [3.25, 0.0376], [3.5, 0.0342], [3.75, 0.0312], [4, 0.0286]] },
            { id: "a", tip: "egri", renk: 1, etiket: "½/(x+1)", noktalar: [[0, 0.5], [0.25, 0.4], [0.5, 0.3333], [0.75, 0.2857], [1, 0.25], [1.25, 0.2222], [1.5, 0.2], [1.75, 0.1818], [2, 0.1667], [2.25, 0.1538], [2.5, 0.1429], [2.75, 0.1333], [3, 0.125], [3.25, 0.1176], [3.5, 0.1111], [3.75, 0.1053], [4, 0.1]], gizli: true },
            { id: "b", tip: "egri", renk: 2, etiket: "½/(x+3)", noktalar: [[0, 0.1667], [0.25, 0.1538], [0.5, 0.1429], [0.75, 0.1333], [1, 0.125], [1.25, 0.1176], [1.5, 0.1111], [1.75, 0.1053], [2, 0.1], [2.25, 0.0952], [2.5, 0.0909], [2.75, 0.087], [3, 0.0833], [3.25, 0.08], [3.5, 0.0769], [3.75, 0.0741], [4, 0.0714]], gizli: true }
          ],
          durumlar: [
            { metin: "f(x) = 1/((x + 1)(x + 3)): x = 0'da 1/3, sonra hızla küçülür." },
            { metin: "Birinci basit kesir ½/(x + 1): x = 0'da 0,5.", goster: ["a"] },
            { metin: "İkinci basit kesir ½/(x + 3). İkisinin farkı f'dir: x = 1'de 0,25 − 0,125 = 0,125.", goster: ["b"] },
            { metin: "0'dan 2'ye alan = ln 3 − ½ ln 5 ≈ 0,29.", gizle: ["a", "b"], goster: ["al"] }
          ] },
        { tip: "tuzak", metin: "Doğrusal çarpanın önünde katsayı varsa integre ederken iç türevi böl. Mutlak değer işaretini de unutma.", yanlis: "∫ dx/(2x − 1) = ln|2x − 1| + C.", dogru: "½ ln|2x − 1| + C. Türev: ½·2/(2x − 1) = 1/(2x − 1). ✓" }
      ]
    },
    {
      baslik: "Pay payda derecesine eşit ya da büyükse önce böl",
      kisa: "Önce uzun bölme, sonra kalan kesri basit kesirlere ayır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔹", terim: "Proper rational function", tr: "öz rasyonel ifade", tanim: "Pay derecesi payda derecesinden küçük olan rasyonel ifade. Basit kesirlere doğrudan ayrılır.", ornek: "1/((x − 1)(x + 1)) bir öz ifadedir." },
            { ikon: "🔸", terim: "Improper rational function", tr: "öz olmayan rasyonel ifade", tanim: "Pay derecesi payda derecesine eşit ya da büyük olan ifade. Önce uzun bölme gerekir.", ornek: "x²/(x² − 1) öz olmayan bir ifadedir." }
          ] },
        { tip: "ornek", baslik: "∫ x²/(x² − 1) dx", durum: "Bölme + basit kesirler.",
          adimlar: [
            "Pay ve payda 2. derece: böl. x² = 1·(x² − 1) + 1, yani x²/(x² − 1) = 1 + 1/(x² − 1).",
            "Paydayı çarpanla: x² − 1 = (x − 1)(x + 1). 1 = A(x + 1) + B(x − 1).",
            "x = 1: A = 1/2.  x = −1: 1 = −2B → B = −1/2.",
            "İntegre et: x + ½ ln|x − 1| − ½ ln|x + 1| + C.",
            "Kontrol: türev 1 + ½(1/(x − 1) − 1/(x + 1)) = 1 + 1/(x² − 1) = x²/(x² − 1). ✓"
          ], sonuc: "x + ½ ln|(x − 1)/(x + 1)| + C" }
      ]
    },
    {
      baslik: "Lojistik denklemlere bağlantı",
      kisa: "1/(P(M − P)) kesri lojistik denklemlerin integral anahtarıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "1/(P(M − P))", alt: "lojistik denklemin ayrıştırılmış hali" }, "=",
            { t: "(1/M)·(1/P + 1/(M − P))", alt: "A = B = 1/M" }
          ], aciklama: "Lojistik diferansiyel denklemleri (Unit 7) değişkenlerine ayırınca bu kesir çıkar; çözüm için basit kesirler şarttır. ∫ dP/(M − P) = −ln|M − P| olduğuna dikkat et." },
        { tip: "ornek", baslik: "∫ dP/(P(10 − P))", durum: "M = 10 için çöz.",
          adimlar: [
            "1/(P(10 − P)) = A/P + B/(10 − P) → 1 = A(10 − P) + B·P.",
            "P = 0: 1 = 10A → A = 1/10.  P = 10: 1 = 10B → B = 1/10.",
            "İntegre et: (1/10) ln|P| − (1/10) ln|10 − P| + C (∫ dP/(10 − P) = −ln|10 − P|).",
            "Birleştir: (1/10) ln|P/(10 − P)| + C."
          ], sonuc: "(1/10) ln|P/(10 − P)| + C" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Payda farklı doğrusal çarpanlara ayrılıyorsa: (px + q)/((x − a)(x − b)) = A/(x − a) + B/(x − b).",
            "A ve B için payları eşitle; x = a ve x = b değerlerini yazarak kapatma yöntemiyle bul.",
            "Her parça integre edilir: ∫ A/(x − a) dx = A·ln|x − a|; mutlak değeri yaz.",
            "Doğrusal çarpanın önünde katsayı varsa 1/katsayı ile böl: ∫ dx/(2x − 1) = ½ ln|2x − 1|.",
            "Pay derecesi payda derecesine eşit ya da büyükse önce uzun bölme yap.",
            "Köksüz payda arctan, pay paydanın türeviyse ln (u-substitution): basit kesir değil.",
            "1/(P(M − P)) = (1/M)(1/P + 1/(M − P)): lojistik denklemlerin anahtarı.",
            "Sonucu türev alıp kontrol et; belirli integralde ln farkını sadeleştir."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "∫ dx/((x − 2)(x + 3)) integralinin değeri aşağıdakilerden hangisidir?",
      opts: ["(1/5) ln|(x − 2)/(x + 3)| + C", "(1/5) ln|(x + 3)/(x − 2)| + C", "ln|(x − 2)(x + 3)| + C", "5 ln|(x − 2)/(x + 3)| + C"],
      a: 0,
      why: "1 = A(x + 3) + B(x − 2). x = 2: A = 1/5; x = −3: B = −1/5. Sonuç (1/5)(ln|x − 2| − ln|x + 3|). B şıkkı oranı ters yazar; D şıkkı katsayıyı 1/5 yerine 5 alır."
    },
    {
      q: "∫₁³ 2/(x(x + 2)) dx integralinin değeri kaçtır?",
      opts: ["ln(5/9)", "ln(3/5)", "ln(9/5)", "2 ln(9/5)"],
      a: 2,
      why: "2/(x(x + 2)) = 1/x − 1/(x + 2). Antitürev ln|x/(x + 2)|. x = 3: ln(3/5); x = 1: ln(1/3). Fark ln(3/5) − ln(1/3) = ln(9/5). B şıkkı alt sınır değerini unutur."
    },
    {
      q: "f(x) = (3x + 5)/((x + 1)(x + 3)) fonksiyonunun değerleri tabloda verilmiştir. ∫₀² f(x) dx integralinin değeri hangisidir?",
      fig: { type: "table", head: ["x", "0", "1", "2"], rows: [["f(x)", "5/3", "1", "11/15"]], caption: "Fonksiyon değerleri" },
      opts: ["ln 3 + 2 ln 5  (≈ 4,32)", "2 ln 5 − ln 3  (≈ 2,12)", "ln 5 − ln 3  (≈ 0,51)", "3 ln 5 − ln 3  (≈ 3,73)"],
      a: 1,
      why: "f = 1/(x + 1) + 2/(x + 3); antitürev ln|x + 1| + 2 ln|x + 3|. x = 2: ln 3 + 2 ln 5; x = 0: 2 ln 3. Fark 2 ln 5 − ln 3 ≈ 2,12. Tablo, 5/3, 1 ve 11/15 arasında alanın 2'ye yakın olacağını gösterir; A şıkkı ≈ 4,3 olduğundan elenir."
    },
    {
      q: "Bir okulda bir haber, 20 kişilik bir sınıfta P kişiye ulaşmıştır ve yayılma hızı P(20 − P) ile orantılıdır. Değişkenlere ayırınca ∫ dP/(P(20 − P)) gerekir. Bu integralin değeri nedir?",
      opts: ["(1/20) ln|P(20 − P)| + C", "20 ln|P/(20 − P)| + C", "(1/20) ln|(20 − P)/P| + C", "(1/20) ln|P/(20 − P)| + C"],
      a: 3,
      why: "1/(P(20 − P)) = (1/20)(1/P + 1/(20 − P)). İntegral (1/20)(ln|P| − ln|20 − P|), çünkü ∫ dP/(20 − P) = −ln|20 − P|. C şıkkı oranı ters çevirir; A şıkkı iki ln'yi toplar."
    },
    {
      q: "∫ x²/((x − 1)(x + 2)) dx integraline başlarken ilk adım ne olmalıdır?",
      opts: ["A/(x − 1) + B/(x + 2) biçimini hemen kur", "Önce uzun bölme yap, sonra kalan kesri basit kesirlere ayır", "u = x² seç", "Paydayı aç ve tam kareye tamamla"],
      a: 1,
      why: "Pay ve payda 2. derece olduğu için ifade öz değildir: önce böl. Sonuç 1 + (…)/(x² + x − 2) olur ve kalan kesir basit kesirlere ayrılır. A şıkkı çekicidir ama pay derecesi payda derecesine eşit olduğundan doğrudan ayrışmaz."
    }
  ]
};
