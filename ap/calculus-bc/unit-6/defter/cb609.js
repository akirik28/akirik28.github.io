/* Kitora not defteri · cb609 · 6.11 Kısmi İntegrasyon
   Kaynak: AP Calculus BC CED 6.11. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb609",
  amac: "Bu konu *integration by parts* yani kısmi integrasyonu anlatıyor: x·eˣ, ln x, x·cos x gibi iki farklı türün çarpımını integre etme yöntemi; çarpım kuralının tersidir. u ve dv'yi seçmeyi, belirli ve tekrarlı integralleri öğreneceksin.",
  bolumler: [
    {
      baslik: "Çarpım kuralını tersine çevirmek",
      kisa: "∫ u dv = uv − ∫ v du: zor integrali kolay olana çevirir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "∫ u dv", alt: "çarpım biçiminde zor integral" }, "=",
            { t: "u·v", alt: "u ile v'nin çarpımı" }, "−",
            { t: "∫ v du", alt: "umarız daha kolay integral" }
          ], aciklama: "Çarpım kuralı (uv)′ = u′v + uv′ idi. İki yanı integre edersen uv = ∫ v du + ∫ u dv çıkar; düzenleyince yukarıdaki formül gelir. Belirli integralde: ∫ₐᵇ u dv = [uv]ₐᵇ − ∫ₐᵇ v du." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Integration by parts", tr: "kısmi integrasyon", tanim: "Çarpım şeklindeki bir integrali u dv olarak yazıp uv − ∫ v du ile çözme yöntemi. Çarpım kuralının integral hali.", ornek: "∫ x·eˣ dx integralinde u = x, dv = eˣ dx dersin." },
            { ikon: "🔀", terim: "Choosing u and dv", tr: "u ve dv seçimi", tanim: "u: türev alınca sadeleşen parça. dv: integrali kolay olan parça. Seçim yanlışsa integral zorlaşır.", ornek: "x·eˣ için u = x seç; x'in türevi 1'dir, sadeleşir." }
          ] }
      ]
    },
    {
      baslik: "u ve dv'yi seçmek",
      kisa: "Türevi sadeleşen parça u, integrali kolay olan parça dv olur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✂️", baslik: "*u* (türev alınır)", maddeler: ["Türevi daha basit: ln x, x, arctan x", "ln x ve ters trigonometrik fonksiyonlar çoğu zaman u olur"] },
          sag: { ikon: "📦", baslik: "*dv* (integre edilir)", maddeler: ["İntegrali kolay: eˣ dx, sin x dx, x dx", "Geri kalan her şey dv'ye girer"] },
          oyun: [
            { metin: "∫ x·eˣ dx ifadesinde x", cevap: "sol", neden: "Türevi 1: sadeleşir, u olur." },
            { metin: "∫ x·eˣ dx ifadesinde eˣ dx", cevap: "sag", neden: "İntegrali yine eˣ: dv olur." },
            { metin: "∫ ln x dx ifadesinde ln x", cevap: "sol", neden: "İntegrali kolay değil ama türevi 1/x: u olur." },
            { metin: "∫ x·sin x dx ifadesinde sin x dx", cevap: "sag", neden: "İntegrali −cos x: dv olur." },
            { metin: "∫ x·ln x dx ifadesinde x dx", cevap: "sag", neden: "İntegrali x²/2: dv olur; ln x ise u." }
          ] },
        { tip: "tablo", baslik: "Öncelik sırası (LIATE)", head: ["Harf", "Tür", "Örnek"],
          rows: [
            ["L", "Logaritmik", "ln x"],
            ["I", "Ters trigonometrik", "arctan x"],
            ["A", "Cebirsel (polinom)", "x, x²"],
            ["T", "Trigonometrik", "sin x, cos x"],
            ["E", "Üstel", "eˣ"]
          ], vurgu: 0, not: "İki parçadan listede üstte olan u, altta olan dv olur. Bu bir pratik kuraldır, mutlak değil; sonuç kolaylaşmıyorsa seçimi değiştir." }
      ]
    },
    {
      baslik: "İlk örnek: ∫ x·eˣ dx",
      kisa: "u = x, dv = eˣ dx seç; kalan integral eˣ olur.",
      bloklar: [
        { tip: "ornek", baslik: "∫ x·eˣ dx ve ∫₀¹ x·eˣ dx", durum: "Önce belirsiz, sonra belirli integral.",
          adimlar: [
            "u = x → du = dx.  dv = eˣ dx → v = eˣ.",
            "Formül: ∫ x eˣ dx = x·eˣ − ∫ eˣ dx = x·eˣ − eˣ + C.",
            "Kontrol: türev eˣ + x·eˣ − eˣ = x·eˣ. ✓",
            "Belirli: [x eˣ − eˣ]₀¹ = (e − e) − (0 − 1) = 1."
          ], sonuc: "x·eˣ − eˣ + C;  belirli integral 1" },
        { tip: "grafik", baslik: "y = x·eˣ: alan 1, e − (e − 1)", xlabel: "x", ylabel: "y", xmax: 1.5, ymax: 7,
          xticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }, { v: 1.5, label: "1,5" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "a", tip: "alan", renk: 0, noktalar: [[0, 0], [0.1, 0.111], [0.2, 0.244], [0.3, 0.405], [0.4, 0.597], [0.5, 0.824], [0.6, 1.093], [0.7, 1.41], [0.8, 1.78], [0.9, 2.214], [1, 2.718], [1, 0]], gizli: true },
            { id: "c", tip: "egri", renk: 0, etiket: "x·eˣ", noktalar: [[0, 0], [0.125, 0.142], [0.25, 0.321], [0.375, 0.546], [0.5, 0.824], [0.625, 1.168], [0.75, 1.588], [0.875, 2.099], [1, 2.718], [1.125, 3.465], [1.25, 4.363], [1.375, 5.438], [1.5, 6.723]] },
            { id: "b", tip: "alan", renk: 2, noktalar: [[0, 0], [0, 1], [0.1, 1.105], [0.2, 1.221], [0.3, 1.35], [0.4, 1.492], [0.5, 1.649], [0.6, 1.822], [0.7, 2.014], [0.8, 2.226], [0.9, 2.46], [1, 2.718], [1, 0]], gizli: true },
            { id: "d", tip: "egri", renk: 2, etiket: "eˣ", noktalar: [[0, 1], [0.125, 1.133], [0.25, 1.284], [0.375, 1.455], [0.5, 1.649], [0.625, 1.868], [0.75, 2.117], [0.875, 2.399], [1, 2.718], [1.125, 3.08], [1.25, 3.49], [1.375, 3.955], [1.5, 4.482]], gizli: true },
            { id: "p", tip: "nokta", renk: 1, x: 1, y: 2.718, etiket: "e", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "x·eˣ eğrisi: x = 0'da 0, x = 1'de e ≈ 2,72." },
            { metin: "0'dan 1'e eğrinin altındaki alan = 1.", goster: ["a"] },
            { metin: "Kısmi integrasyon bunu şöyle okur: [x·eˣ]₀¹ = e (nokta), çıkarılacak ∫₀¹ eˣ dx = e − 1 ≈ 1,72 (eˣ'in altı). e − (e − 1) = 1.", gizle: ["a", "c"], goster: ["b", "d", "p"] }
          ] },
        { tip: "tuzak", metin: "Seçim ters olursa integral kolaylaşmaz, zorlaşır. Her adımdan sonra kalan integrale bak: daha mı basit?", yanlis: "∫ x·eˣ dx için u = eˣ, dv = x dx seç.", dogru: "v = x²/2 olur ve ∫ (x²/2)·eˣ dx kalır: x'in kuvveti arttı. u = x seç, kuvvet azalsın." }
      ]
    },
    {
      baslik: "ln x ve ters trigonometrik fonksiyonlar",
      kisa: "İntegrali bilinmeyen fonksiyonda dv = dx al, u'yu fonksiyonun kendisi yap.",
      bloklar: [
        { tip: "ornek", baslik: "∫ ln x dx", durum: "Tek başına duran ln x'i kısmi integrasyonla çöz.",
          adimlar: [
            "u = ln x → du = dx/x.  dv = dx → v = x.",
            "Formül: ∫ ln x dx = x·ln x − ∫ x·(1/x) dx = x·ln x − ∫ 1 dx.",
            "Sonuç: x·ln x − x + C. Kontrol: türev ln x + 1 − 1 = ln x. ✓",
            "Belirli: ∫₁ᵉ ln x dx = [x ln x − x]₁ᵉ = (e − e) − (0 − 1) = 1."
          ], sonuc: "x·ln x − x + C;  ∫₁ᵉ ln x dx = 1" },
        { tip: "ornek", baslik: "∫ x·ln x dx", durum: "ln x u, x dx ise dv olur.",
          adimlar: [
            "u = ln x → du = dx/x.  dv = x dx → v = x²/2.",
            "Formül: (x²/2)·ln x − ∫ (x²/2)(1/x) dx = (x²/2)·ln x − ∫ (x/2) dx.",
            "Sonuç: (x²/2)·ln x − x²/4 + C. Kontrol: x ln x + x/2 − x/2 = x ln x. ✓"
          ], sonuc: "(x²/2)·ln x − x²/4 + C" },
        { tip: "tablo", baslik: "Sık çıkan sonuçlar", head: ["İntegral", "u", "dv", "Sonuç"],
          rows: [
            ["∫ x cos x dx", "x", "cos x dx", "x sin x + cos x + C"],
            ["∫ ln x dx", "ln x", "dx", "x ln x − x + C"],
            ["∫ x ln x dx", "ln x", "x dx", "(x²/2) ln x − x²/4 + C"],
            ["∫ arctan x dx", "arctan x", "dx", "x arctan x − ½ ln(1 + x²) + C"]
          ], not: "arctan x için kalan integral ∫ x/(1 + x²) dx'tir; u = 1 + x² ile ½ ln(1 + x²) çıkar (iki yöntem birlikte)." }
      ]
    },
    {
      baslik: "Tekrarlı kısmi integrasyon",
      kisa: "Kuvvet büyükse her adımda kuvvet düşer; tablo yöntemi işi kısaltır.",
      bloklar: [
        { tip: "ornek", baslik: "∫ x²·eˣ dx", durum: "İki kez kısmi integrasyon.",
          adimlar: [
            "1. adım: u = x², dv = eˣ dx → du = 2x dx, v = eˣ. ∫ x² eˣ dx = x² eˣ − ∫ 2x·eˣ dx.",
            "2. adım: ∫ 2x·eˣ dx için u = 2x, dv = eˣ dx → 2x eˣ − ∫ 2 eˣ dx = 2x eˣ − 2eˣ.",
            "Birleştir: x² eˣ − (2x eˣ − 2eˣ) = eˣ(x² − 2x + 2) + C.",
            "Kontrol: eˣ(x² − 2x + 2) + eˣ(2x − 2) = x² eˣ. ✓"
          ], sonuc: "eˣ(x² − 2x + 2) + C" },
        { tip: "tablo", baslik: "Tablo yöntemi (aynı integral)", head: ["İşaret", "Türev sütunu (u)", "İntegral sütunu (dv)"],
          rows: [["+", "x²", "eˣ"], ["−", "2x", "eˣ"], ["+", "2", "eˣ"], ["", "0", "eˣ"]],
          not: "Türev sütunundaki her terimi bir alttaki integralle çarp, işaretle topla: +x² eˣ − 2x eˣ + 2 eˣ. Türev sıfıra ulaşınca dur." }
      ]
    },
    {
      baslik: "Döngüsel integral: ∫ eˣ sin x dx",
      kisa: "İntegral kendine dönerse denklemi kur, aynı integrali bir yana topla.",
      bloklar: [
        { tip: "ornek", baslik: "∫ eˣ sin x dx", durum: "İki kez kısmi integrasyon, sonra denklem.",
          adimlar: [
            "I = ∫ eˣ sin x dx olsun. u = sin x, dv = eˣ dx → I = eˣ sin x − ∫ eˣ cos x dx.",
            "Kalan integrale yine kısmi: u = cos x, dv = eˣ dx → ∫ eˣ cos x dx = eˣ cos x + ∫ eˣ sin x dx = eˣ cos x + I.",
            "Yerine koy: I = eˣ sin x − eˣ cos x − I.",
            "I'yı yalnız bırak: 2I = eˣ (sin x − cos x), yani I = eˣ (sin x − cos x)/2 + C.",
            "Kontrol: türev [eˣ(sin x − cos x) + eˣ(cos x + sin x)]/2 = eˣ sin x. ✓"
          ], sonuc: "eˣ (sin x − cos x)/2 + C" },
        { tip: "tuzak", metin: "Döngüde ikinci adımda u ve dv rollerini değiştirirsen integral tersine dönüp başa gelir ve I = I gibi işe yaramaz bir eşitlik bulursun.", yanlis: "İkinci adımda u = eˣ, dv = cos x dx seç.", dogru: "İki adımda da aynı türü u al: trigonometrik fonksiyon u, eˣ dv. Sonra 2I = … denklemini çöz." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kısmi integrasyon çarpım kuralının tersidir: ∫ u dv = uv − ∫ v du.",
            "Belirli integral: ∫ₐᵇ u dv = [uv]ₐᵇ − ∫ₐᵇ v du; uv'ye sınırları koymayı unutma.",
            "u: türev alınca sadeleşen (ln x, ters trig., x). dv: integrali kolay olan (eˣ dx, sin x dx).",
            "LIATE bir kuraldır: Logaritmik, Ters trig., Cebirsel, Trig., Üstel.",
            "ln x ve arctan x tek başına: u = fonksiyonun kendisi, dv = dx.",
            "Tekrarlı integralde her adımda kuvvet düşer; tablo yöntemi aynı sonucu kısaltır.",
            "eˣ sin x ve eˣ cos x döngüseldir: iki kez uygula, I'yı denklemden çöz.",
            "Seçim yanlış olduysa kalan integral zorlaşır: u ve dv'yi değiştir. Türevle kontrol et."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "∫ x·cos x dx integralinin değeri aşağıdakilerden hangisidir?",
      opts: ["x sin x − cos x + C", "x sin x + cos x + C", "−x sin x + cos x + C", "(x²/2)·sin x + C"],
      a: 1,
      why: "u = x, dv = cos x dx → v = sin x. x sin x − ∫ sin x dx = x sin x + cos x + C. A şıkkı çekicidir ama −∫ sin x dx = +cos x işaretini karıştırır."
    },
    {
      q: "∫₁ᵉ x·ln x dx integralinin değeri kaçtır?",
      opts: ["(e² + 1)/4", "(e² − 1)/4", "e²/2", "(e² + 1)/2"],
      a: 0,
      why: "u = ln x, dv = x dx: (x²/2) ln x − x²/4. Sınırlarda (e²/2 − e²/4) − (0 − 1/4) = e²/4 + 1/4 = (e² + 1)/4. B şıkkı alt sınırın −1/4 değerini ters işaretle ekler."
    },
    {
      q: "Bir öğrenci ∫ x²·ln x dx için tablodaki seçimi yapmıştır. İntegralin doğru sonucu hangisidir?",
      fig: { type: "table", head: ["Parça", "Seçim"], rows: [["u", "ln x"], ["dv", "x² dx"]], caption: "Öğrencinin seçimi" },
      opts: ["(x³/3)·ln x − x³/3 + C", "(x³/3)·ln x + x³/9 + C", "x²·ln x − x²/2 + C", "(x³/3)·ln x − x³/9 + C"],
      a: 3,
      why: "du = dx/x, v = x³/3. (x³/3) ln x − ∫ (x³/3)(1/x) dx = (x³/3) ln x − ∫ x²/3 dx = (x³/3) ln x − x³/9 + C. A şıkkı, kalan integralin 1/3 katsayısını atlar."
    },
    {
      q: "Bir konser kapısından t dakikada geçen kişi sayısının hızı r(t) = t·e^(−t) (yüz kişi/dakika) şeklindedir. İlk 1 dakikada toplam geçen kişi (yüz kişi cinsinden) kaçtır?",
      opts: ["1 − 1/e", "1/e", "1 − 2/e", "2/e − 1"],
      a: 2,
      why: "∫₀¹ t e^(−t) dt: u = t, dv = e^(−t) dt → v = −e^(−t). [−t e^(−t)]₀¹ + ∫₀¹ e^(−t) dt = −1/e + (1 − 1/e) = 1 − 2/e ≈ 0,26. A şıkkı yalnız ∫₀¹ e^(−t) dt değerini (0,63) verir; t çarpanını hesaba katmaz."
    },
    {
      q: "∫ eˣ cos x dx integralinin değeri aşağıdakilerden hangisidir?",
      opts: ["eˣ (sin x + cos x)/2 + C", "eˣ (cos x − sin x)/2 + C", "eˣ sin x + C", "eˣ (sin x + cos x) + C"],
      a: 0,
      why: "Döngüsel integral: J = eˣ cos x + ∫ eˣ sin x dx ve ∫ eˣ sin x dx = eˣ sin x − J. Buradan 2J = eˣ(cos x + sin x), J = eˣ (sin x + cos x)/2 + C. D şıkkı 2'ye bölmeyi unutur: türevi 2eˣ cos x verir."
    }
  ]
};
