/* Kitpath not defteri · cb608 · 6.10 Uzun Bölme ve Tam Kareye Tamamlama
   Kaynak: AP Calculus BC CED 6.10. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb608",
  amac: "Bu konu kesirli ifadeleri integrale hazırlamanın iki yolunu anlatıyor: pay derecesi büyükse *long division* ile bölmek, payda köksüz ikinci derece ise *completing the square* ile arctan kalıbına getirmek. Hangi kesre hangi yolun uyduğunu seçmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Kesirli ifade: önce dereceye bak",
      kisa: "Pay derecesi payda derecesine eşit ya da büyükse önce böl.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➗", terim: "Rational function", tr: "rasyonel fonksiyon", tanim: "İki polinomun oranı: pay ve payda polinomdur. Hangi yöntemin uyacağını derecelere bakarak seçersin.", ornek: "(x² + 3x + 5)/(x + 1) ve 1/(x² + 4x + 13) birer rasyonel fonksiyondur." },
            { ikon: "📥", terim: "Long division", tr: "uzun bölme", tanim: "Pay derecesi ≥ payda derecesi ise payı paydaya bölüp polinom + kalan/payda biçimine yazma işlemi.", ornek: "x/(x − 3) = 1 + 3/(x − 3)." },
            { ikon: "🟦", terim: "Completing the square", tr: "tam kareye tamamlama", tanim: "x² + bx + c ifadesini (x + b/2)² + k biçimine getirme. Kökü olmayan paydalarda arctan kalıbını ortaya çıkarır.", ornek: "x² + 4x + 13 = (x + 2)² + 9." }
          ] },
        { tip: "ikili", sol: { ikon: "📥", baslik: "Önce *long division*", maddeler: ["Pay derecesi ≥ payda derecesi", "Bölüm polinom, kalan kesir olur"] },
          sag: { ikon: "🟦", baslik: "*Completing the square*", maddeler: ["Pay derecesi < payda; payda ikinci derece, gerçek kökü yok", "arctan (ve gerekirse ln) çıkar"] },
          oyun: [
            { metin: "(x² + 3x + 5)/(x + 1)", cevap: "sol", neden: "Pay 2. derece, payda 1. derece: önce böl." },
            { metin: "1/(x² + 4x + 13)", cevap: "sag", neden: "Pay sabit, payda köksüz ikinci derece (diskriminant 16 − 52 < 0)." },
            { metin: "x/(x − 3)", cevap: "sol", neden: "Pay ve payda aynı derece (1): böl, 1 + 3/(x − 3) çıkar." },
            { metin: "5/(x² + 6x + 10)", cevap: "sag", neden: "(x + 3)² + 1 yazılır: köksüz payda." },
            { metin: "(x³ + 1)/(x² + 4)", cevap: "sol", neden: "Pay 3. derece, payda 2. derece: önce böl." }
          ] }
      ]
    },
    {
      baslik: "Uzun bölme adım adım",
      kisa: "Bölüm ve kalan her terimi tek tek integre edilebilir hale getirir.",
      bloklar: [
        { tip: "ornek", baslik: "∫ (x² + 3x + 5)/(x + 1) dx", durum: "Önce uzun bölme, sonra integral.",
          adimlar: [
            "x² ÷ x = x: üste x yaz. x·(x + 1) = x² + x çıkar; geriye 2x + 5 kalır.",
            "2x ÷ x = 2: üste +2 yaz. 2·(x + 1) = 2x + 2 çıkar; kalan 3.",
            "Sonuç: (x² + 3x + 5)/(x + 1) = x + 2 + 3/(x + 1).",
            "Terim terim integre et: x²/2 + 2x + 3 ln|x + 1| + C.",
            "Kontrol: türev x + 2 + 3/(x + 1). ✓"
          ], sonuc: "x²/2 + 2x + 3 ln|x + 1| + C" },
        { tip: "grafik", baslik: "y = (x² + 3x + 5)/(x + 1): bölümün anlamı", xlabel: "x", ylabel: "y", xmax: 4, ymax: 7,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, etiket: "y", noktalar: [[0, 5], [0.25, 4.65], [0.5, 4.5], [0.75, 4.464], [1, 4.5], [1.25, 4.583], [1.5, 4.7], [1.75, 4.841], [2, 5], [2.25, 5.173], [2.5, 5.357], [2.75, 5.55], [3, 5.75], [3.25, 5.956], [3.5, 6.167], [3.75, 6.382], [4, 6.6]] },
            { id: "l", tip: "cizgi", renk: 2, kesik: true, etiket: "y = x + 2", from: [0, 2], to: [4, 6], gizli: true },
            { id: "g1", tip: "ok", renk: 1, from: [1, 3], to: [1, 4.5], gizli: true },
            { id: "t1", tip: "yazi", renk: 1, x: 1.55, y: 3.7, metin: "3/(x+1) = 1,5", gizli: true },
            { id: "a", tip: "alan", renk: 0, noktalar: [[0, 0], [0, 5], [0.25, 4.65], [0.5, 4.5], [0.75, 4.464], [1, 4.5], [1, 0]], gizli: true }
          ],
          durumlar: [
            { metin: "Eğri y = (x² + 3x + 5)/(x + 1); önce hafifçe iner, sonra yükselir." },
            { metin: "Bölümün x + 2 kısmı doğrudur; eğri bu doğruya yaklaşır.", goster: ["l"] },
            { metin: "Eğri ile doğru arasındaki dikey fark kalan terimdir: x = 1'de 3/(1 + 1) = 1,5.", goster: ["g1", "t1"] },
            { metin: "x = 0'dan 1'e alan = ∫(x + 2) dx + ∫3/(x + 1) dx = 5/2 + 3 ln 2 ≈ 4,58.", gizle: ["g1", "t1", "l"], goster: ["a"] }
          ] },
        { tip: "tuzak", metin: "Kesrin integrali, pay ve paydanın ayrı integrallerinin oranı değildir; ln(pay) − ln(payda) de yazılamaz. Kesri önce böl, sonra her terimi ayrı integre et.", yanlis: "∫ (x² + 3x + 5)/(x + 1) dx = ln|x² + 3x + 5| − ln|x + 1| + C.", dogru: "Böl: x + 2 + 3/(x + 1); integral x²/2 + 2x + 3 ln|x + 1| + C." }
      ]
    },
    {
      baslik: "Tam kareye tamamlama",
      kisa: "x² + bx + c = (x + b/2)² + (c − b²/4).",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "x² + bx + c", alt: "köksüz payda (b² − 4c < 0)" }, "=",
            { t: "(x + b/2)²", alt: "ortadaki terimin yarısı, kare" }, "+",
            { t: "c − b²/4", alt: "geriye kalan sayı (pozitif)" }
          ], aciklama: "Önce kökü olup olmadığına bak: b² − 4c < 0 ise payda çarpanlanmaz. O zaman tam kare yaz ve ==payda (u)² + a² biçimine gelsin.==" },
        { tip: "tablo", baslik: "Hazır kalıplar (a > 0)", head: ["İntegral", "Sonuç", "Ne zaman"],
          rows: [
            ["∫ dx/(x² + a²)", "(1/a)·arctan(x/a) + C", "payda iki kare toplamı"],
            ["∫ dx/√(a² − x²)", "arcsin(x/a) + C", "kökün altında a² − x²"]
          ], not: "Türev alarak kontrol: d/dx (1/a)·arctan(x/a) = (1/a)(1/a)/(1 + x²/a²) = 1/(a² + x²). ✓" },
        { tip: "adimlar", baslik: "Bir integralin yolu", adimlar: [
            { baslik: "Kök kontrolü", metin: "b² − 4c < 0 mı? Evet ise çarpanlara ayırma, tam kare yaz." },
            { baslik: "Tam kare", metin: "Paydayı (x + p)² + a² biçimine getir." },
            { baslik: "u seç", metin: "u = x + p; du = dx. Payda u² + a² olur." },
            { baslik: "Kalıbı uygula", metin: "(1/a) arctan(u/a) + C; sonra u yerine x + p yaz." }
          ] }
      ]
    },
    {
      baslik: "Örnek: arctan'a ulaşmak",
      kisa: "Pay sabitse tam kare yazılır, sonuç (1/a)·arctan olur.",
      bloklar: [
        { tip: "ornek", baslik: "∫ dx/(x² + 4x + 13) ve ∫₋₂¹ dx/(x² + 4x + 13)", durum: "Önce belirsiz, sonra belirli integral.",
          adimlar: [
            "Kök kontrolü: 16 − 52 < 0, payda çarpanlanmaz.",
            "Tam kare: x² + 4x + 13 = (x + 2)² + 9. Yani a = 3.",
            "u = x + 2: ∫ du/(u² + 9) = (1/3) arctan(u/3) + C.",
            "Geri dön: (1/3) arctan((x + 2)/3) + C.",
            "Belirli: x = −2 → u/3 = 0; x = 1 → u/3 = 1. (1/3)(arctan 1 − arctan 0) = (1/3)(π/4) = π/12."
          ], sonuc: "(1/3) arctan((x + 2)/3) + C;  belirli integral π/12" },
        { tip: "grafik", baslik: "y = 1/(x² + 4x + 13) ve −2'den 1'e alan", xlabel: "x", ylabel: "y", xmax: 8, ymax: 0.12,
          xticks: [{ v: 0, label: "−4" }, { v: 2, label: "−2" }, { v: 4, label: "0" }, { v: 6, label: "2" }, { v: 8, label: "4" }], yticks: [{ v: 0.05, label: "0,05" }, { v: 0.1, label: "0,1" }],
          ogeler: [
            { id: "a", tip: "alan", renk: 0, noktalar: [[2, 0], [2, 0.1111], [2.25, 0.1103], [2.5, 0.1081], [2.75, 0.1046], [3, 0.1], [3.25, 0.0947], [3.5, 0.0889], [3.75, 0.0829], [4, 0.0769], [4.25, 0.0711], [4.5, 0.0656], [4.75, 0.0604], [5, 0.0556], [5, 0]], gizli: true },
            { id: "c", tip: "egri", renk: 0, etiket: "y", noktalar: [[0, 0.0769], [0.5, 0.0889], [1, 0.1], [1.5, 0.1081], [2, 0.1111], [2.5, 0.1081], [3, 0.1], [3.5, 0.0889], [4, 0.0769], [4.5, 0.0656], [5, 0.0556], [5.5, 0.0471], [6, 0.04], [6.5, 0.0342], [7, 0.0294], [7.5, 0.0255], [8, 0.0222]] },
            { id: "p", tip: "nokta", renk: 2, x: 2, y: 0.1111, etiket: "tepe (−2; 1/9)", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Çan biçimli eğri. Yatay eksende gerçek x değerleri yazıldı (grafik 4 birim kaydırıldı)." },
            { metin: "Tam kare (x + 2)² + 9 olduğu için tepe x = −2'de: y = 1/9.", goster: ["p"] },
            { metin: "x = −2 ile x = 1 arasındaki alan π/12 ≈ 0,26 (arctan sonucu).", goster: ["a"] }
          ] }
      ]
    },
    {
      baslik: "ln ve arctan bir arada",
      kisa: "Payı paydanın türevi ve sabit parçaya ayır; ln ve arctan çıkar.",
      bloklar: [
        { tip: "ornek", baslik: "∫ (2x + 6)/(x² + 4x + 13) dx", durum: "Payı iki parçaya ayırarak çöz.",
          adimlar: [
            "Paydanın türevi 2x + 4. Payı ona göre yaz: 2x + 6 = (2x + 4) + 2.",
            "Birinci parça: ∫ (2x + 4)/(x² + 4x + 13) dx. Payda u olur: ln(x² + 4x + 13). Payda her zaman pozitif, mutlak değer gerekmez.",
            "İkinci parça: 2 ∫ dx/((x + 2)² + 9) = 2·(1/3) arctan((x + 2)/3).",
            "Topla ve + C ekle. Kontrol: türev (2x + 4)/(…) + 2/(9 + (x + 2)²) = (2x + 6)/(…). ✓"
          ], sonuc: "ln(x² + 4x + 13) + (2/3) arctan((x + 2)/3) + C" },
        { tip: "ornek", baslik: "∫ dx/√(8x − x²)", durum: "Kökün altını tam kareye tamamla.",
          adimlar: [
            "8x − x² = −(x² − 8x) = −((x − 4)² − 16) = 16 − (x − 4)².",
            "u = x − 4, a = 4: ∫ du/√(16 − u²) = arcsin(u/4) + C.",
            "Geri dön: arcsin((x − 4)/4) + C."
          ], sonuc: "arcsin((x − 4)/4) + C" },
        { tip: "tuzak", metin: "arctan kalıbında a'nın önündeki 1/a katsayısı unutulur. Yeni bir türev alıp zinciri kontrol et.", yanlis: "∫ dx/(x² + 9) = arctan(x/3) + C.", dogru: "(1/3)·arctan(x/3) + C. Türev: (1/3)(1/3)/(1 + x²/9) = 1/(9 + x²). ✓" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Rasyonel ifadede önce dereceye bak: pay ≥ payda ise uzun bölme.",
            "Bölme sonucu: bölüm (polinom) + kalan/payda; her terim ayrı integre edilir.",
            "Kesrin integrali pay ve paydanın ayrı integrallerinin oranı değildir.",
            "Köksüz payda (b² − 4c < 0): tam kareye tamamla, (x + b/2)² + k biçimine getir.",
            "∫ dx/(x² + a²) = (1/a) arctan(x/a) + C ve ∫ dx/√(a² − x²) = arcsin(x/a) + C.",
            "Pay paydanın türeviyse ln, pay sabitse arctan; ikisi birden gelirse payı ikiye ayır.",
            "Belirli integralde arctan değerleri: arctan 0 = 0, arctan 1 = π/4.",
            "Her sonucu türev alarak kontrol et."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "∫ (x² + 2x)/(x + 1) dx integralinin değeri aşağıdakilerden hangisidir?",
      opts: ["x²/2 + x + ln|x + 1| + C", "x²/2 + x + C", "x²/2 + x − ln|x + 1| + C", "(x³/3 + x²)/(x²/2 + x) + C"],
      a: 2,
      why: "x² + 2x = (x + 1)(x + 1) − 1, yani kesir x + 1 − 1/(x + 1). İntegral x²/2 + x − ln|x + 1| + C. A şıkkı işareti karıştırır; D şıkkı pay ve paydanın ayrı integrallerini böler, bu geçersizdir."
    },
    {
      q: "∫ 6/(x² + 9) dx integralinin değeri aşağıdakilerden hangisidir?",
      opts: ["2 arctan(x/3) + C", "6 arctan(x/3) + C", "18 arctan(x/3) + C", "3 ln(x² + 9) + C"],
      a: 0,
      why: "∫ dx/(x² + 9) = (1/3) arctan(x/3) olduğundan 6·(1/3) = 2. B şıkkı 1/a katsayısını unutur. D şıkkı pay 6x olsaydı doğru olurdu (ln), ama pay sabit."
    },
    {
      q: "Bir kantinde dakikada servis edilen kişi sayısı r(t) = (t² + 3t + 5)/(t + 1) olup tabloda gösterilmiştir. İlk dakikada servis edilen toplam kişi sayısı kaçtır?",
      fig: { type: "table", head: ["t (dk)", "0", "0,5", "1"], rows: [["r(t)", "5", "4,5", "4,5"]], caption: "Servis hızı (kişi/dk)" },
      opts: ["5/2 + ln 2", "5 + 3 ln 2", "3 ln 2", "5/2 + 3 ln 2"],
      a: 3,
      why: "Böl: r(t) = t + 2 + 3/(t + 1). ∫₀¹ = [t²/2 + 2t + 3 ln(t + 1)]₀¹ = 1/2 + 2 + 3 ln 2 = 5/2 + 3 ln 2 ≈ 4,58; tablodaki değerler 4,5–5 arasında olduğundan makul. B şıkkı ≈ 7,08 olup tabloyla uyuşmaz."
    },
    {
      q: "∫ dx/(x² + 4x + 13), x = −2'den x = 1'e kadar hesaplandığında sonuç kaçtır?",
      opts: ["π/4", "π/12", "π/36", "π/3"],
      a: 1,
      why: "(x + 2)² + 9 olduğundan antitürev (1/3) arctan((x + 2)/3). Sınırlarda arctan 1 − arctan 0 = π/4; (1/3) ile çarpınca π/12. A şıkkı 1/3 katsayısını unutur."
    },
    {
      q: "Aşağıdaki integrallerden hangisine başlamadan önce uzun bölme gerekir?",
      opts: ["∫ dx/(x² + 1)", "∫ x/(x² + 1) dx", "∫ x²/(x² + 1) dx", "∫ dx/(x² + 2x + 5)"],
      a: 2,
      why: "Yalnızca C'de pay derecesi payda derecesine eşit: x²/(x² + 1) = 1 − 1/(x² + 1), sonuç x − arctan x + C. B şıkkı çekicidir ama u = x² + 1 ile ½ ln(x² + 1) çıkar, bölme gerekmez."
    }
  ]
};
