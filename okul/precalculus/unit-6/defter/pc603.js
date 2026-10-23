/* Kitora not defteri · pc603 · 6.3 Algoritmik Düşünme
   Kapsam: defter-araclari/kaynak/okul-10-2025-26.md (Precalculus, Unit 6). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc603",
  amac: "Bu konu algoritmayı, yani bir işi adım adım ve kesin kurallarla yapan tarifi anlatıyor. Akış şeması ve sözde kodla karar, döngü ve Öklid algoritmasını yazmayı, verilen bir algoritmayı izleyip çıktısını bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Algoritma nedir?",
      kisa: "Algoritma, girdiden çıktıya giden kesin ve sonlu adımlar dizisidir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧭",
              terim: "Algorithm",
              tr: "algoritma",
              tanim: "Bir problemi çözen, kesin ve sonlu adımlar dizisi.",
              ornek: "Telefonda alarm kurmanın adımları."
            },
            {
              ikon: "📥",
              terim: "Input / output",
              tr: "girdi / çıktı",
              tanim: "Algoritmanın aldığı veri ve verdiği sonuç.",
              ornek: "Girdi: a ve b; çıktı: EBOB(a, b)."
            },
            {
              ikon: "📦",
              terim: "Variable",
              tr: "değişken",
              tanim: "Adı olan ve değeri değişebilen bir kutu.",
              ornek: "s ← s + 1 ile s'nin değeri 1 artar."
            },
            {
              ikon: "🔷",
              terim: "Flowchart",
              tr: "akış şeması",
              tanim: "Adımları şekiller ve oklarla gösteren çizim.",
              ornek: "Başla → girdi → karar → çıktı → bitir."
            },
            {
              ikon: "📝",
              terim: "Pseudocode",
              tr: "sözde kod",
              tanim: "Adımları programlama diline benzeyen sade bir dille yazma.",
              ornek: "IF D > 0 THEN PRINT \"iki kök\""
            }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            { ikon: "🎯", baslik: "Kesin (*definite*)", metin: "Her adım açık; yoruma yer bırakmaz." },
            { ikon: "🏁", baslik: "Sonlu (*finite*)", metin: "Mutlaka biter; sonsuz döngüye girmez." },
            { ikon: "📤", baslik: "Girdi ve çıktı", metin: "Sıfır ya da daha fazla girdi, en az bir çıktı vardır." },
            { ikon: "✍️", baslik: "Sınavda böyle yaz", metin: "*An algorithm is a finite sequence of well-defined steps that solves a problem.*" }
          ]
        },
        {
          tip: "adimlar",
          baslik: "Günlük algoritma: kantinde tost almak",
          adimlar: [
            { baslik: "Girdi", metin: "Kartındaki bakiye b ve tostun fiyatı f." },
            { baslik: "Karar", metin: "b ≥ f mi? Evet ise tostu al ve b ← b − f. Hayır ise \"yetersiz bakiye\" yaz." },
            { baslik: "Çıktı", metin: "Kalan bakiye ya da uyarı mesajı." }
          ]
        }
      ]
    },
    {
      baslik: "Akış şeması ve sözde kod dili",
      kisa: "Akış şeması şekillerle, sözde kod komutlarla aynı algoritmayı anlatır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Akış şeması şekilleri",
          head: ["Şekil", "Adı", "Ne için"],
          rows: [
            ["⬭ oval", "*Terminator*", "Başla ya da Bitir"],
            ["▱ paralelogram", "*Input / Output*", "Veri al (girdi), sonuç yaz (çıktı)"],
            ["▭ dikdörtgen", "*Process*", "İşlem: r ← a MOD b"],
            ["◇ eşkenar dörtgen", "*Decision*", "Evet / Hayır sorusu; iki çıkışı var"],
            ["⬡ altıgen", "*Loop*", "Döngü sembolü: sayaçlı tekrar, örneğin i = 1, 10, 1"],
            ["→ ok", "*Flow line*", "Adımların sırasını gösterir"]
          ]
        },
        {
          tip: "tablo",
          baslik: "Sözde kod komutları",
          head: ["Komut", "Anlamı", "Örnek"],
          rows: [
            ["INPUT / READ", "Girdi al", "INPUT a, b"],
            ["PRINT / OUTPUT", "Çıktı ver", "PRINT s"],
            ["←", "Değer ata (eşitlik değil)", "s ← s + 1"],
            ["IF … THEN … ELSE", "Karar", "IF D > 0 THEN …"],
            ["WHILE … DO", "Koşul doğruyken tekrarla", "WHILE b ≠ 0 DO"],
            ["FOR i FROM 1 TO n", "Sayaçla tekrarla", "FOR i FROM 1 TO 5"],
            ["a MOD b, a DIV b", "Bölümden kalan, tam bölüm", "17 MOD 5 = 2 ve 17 DIV 5 = 3"]
          ]
        },
        {
          tip: "not",
          metin: "← bir atamadır: s ← s + 1, \"yeni s, eski s'nin 1 fazlası olsun\" demektir; matematikteki eşitlik değildir. Sınavda böyle yaz: *Write the algorithm in pseudocode.* ve *Draw a flowchart for the algorithm.*"
        }
      ]
    },
    {
      baslik: "Karar yapısı: IF / ELSE",
      kisa: "Karar, koşula göre iki yoldan birini seçtirir; parçalı fonksiyon gibi.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Akış şeması: ikinci derece denklemin kök sayısı",
          adimlar: [
            { baslik: "⬭ Başla", metin: "Akış başlar." },
            { baslik: "▱ Girdi: a, b, c", metin: "ax² + bx + c = 0 denkleminin katsayılarını al." },
            { baslik: "▭ D ← b² − 4ac", metin: "Diskriminantı hesapla." },
            { baslik: "◇ D > 0 mı?", metin: "Evet ise \"iki farklı gerçek kök\" yaz. Hayır ise sıradaki karara geç." },
            { baslik: "◇ D = 0 mı?", metin: "Evet ise \"bir çift kat kök\" yaz. Hayır ise \"gerçek kök yok\" yaz." },
            { baslik: "⬭ Bitir", metin: "Akış biter." }
          ]
        },
        {
          tip: "tablo",
          baslik: "Aynı algoritma, sözde kodla",
          head: ["Satır", "Sözde kod"],
          rows: [
            ["1", "INPUT a, b, c"],
            ["2", "D ← b² − 4ac"],
            ["3", "IF D > 0 THEN PRINT \"iki farklı gerçek kök\""],
            ["4", "ELSE IF D = 0 THEN PRINT \"bir çift kat kök\""],
            ["5", "ELSE PRINT \"gerçek kök yok\""]
          ]
        },
        {
          tip: "ornek",
          baslik: "x² − 4x + 3 = 0 için algoritmayı izle",
          durum: "Girdiler a = 1, b = −4, c = 3.",
          adimlar: ["D ← (−4)² − 4·1·3 = 16 − 12 = 4.", "D > 0 mı? Evet.", "Çıktı: \"iki farklı gerçek kök\" (kökler 1 ve 3)."],
          sonuc: "D = 4 > 0. Sınavda böyle yaz: *Since D > 0, the equation has two distinct real roots.* (x² + 2x + 1 = 0 için D = 4 − 4 = 0: çift kat kök.)"
        }
      ]
    },
    {
      baslik: "Döngü (*loop*): tekrar eden işler",
      kisa: "Döngü, bir işlemi koşul bitene ya da sayaç dolana kadar tekrarlar.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "1'den n'e kadar toplam",
          head: ["Satır", "Sözde kod"],
          rows: [["1", "INPUT n"], ["2", "s ← 0"], ["3", "FOR i FROM 1 TO n DO"], ["4", "↳ s ← s + i"], ["5", "PRINT s"]]
        },
        {
          tip: "ornek",
          baslik: "n = 4 için izleme (*trace*)",
          durum: "Her turda i ve s'nin değerini yaz.",
          adimlar: ["Başta s = 0.", "i = 1: s = 0 + 1 = 1.", "i = 2: s = 1 + 2 = 3.", "i = 3: s = 3 + 3 = 6.", "i = 4: s = 6 + 4 = 10. Döngü biter."],
          sonuc: "PRINT 10. Kontrol: n(n + 1) ÷ 2 = 4·5 ÷ 2 = 10. Sınavda böyle yaz: *Trace the algorithm for n = 4.*"
        },
        {
          tip: "ornek",
          baslik: "Pozitif bölen sayısını sayan algoritma, n = 12",
          durum: "FOR d FROM 1 TO n DO: IF n MOD d = 0 THEN k ← k + 1 (başta k ← 0).",
          adimlar: [
            "d = 1, 2, 3, 4, 6 ve 12 için 12 MOD d = 0: her birinde k bir artar.",
            "Diğer d değerlerinde (5, 7, 8, 9, 10, 11) kalan sıfır değil, k değişmez.",
            "Formülle uyum: 12 = 2²·3 ⇒ (2 + 1)(1 + 1) = 6."
          ],
          sonuc: "PRINT 6."
        },
        {
          tip: "tuzak",
          metin: "FOR döngüsünde üst sınır dahildir. WHILE döngüsünde koşulu değiştiren bir satır yoksa döngü hiç bitmez (*infinite loop*).",
          yanlis: "FOR i FROM 1 TO 4 yalnızca i = 1, 2, 3 için çalışır.",
          dogru: "i = 1, 2, 3 ve 4 için çalışır; üst sınır dahildir."
        }
      ]
    },
    {
      baslik: "Doğal dil algoritması ve iki tür akış şeması",
      kisa: "Aynı döngü karar sembolüyle ya da döngü sembolüyle çizilebilir.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "1'den 10'a kadar tam sayıların toplamı (algoritmik doğal dil)",
          adimlar: [
            { baslik: "1. Başla", metin: "Akış başlar." },
            { baslik: "2. T ← 0 ve i ← 1", metin: "T toplamı tutar, i sıradaki sayıdır." },
            { baslik: "3. T ← T + i", metin: "Sıradaki sayıyı toplama ekle." },
            { baslik: "4. i ← i + 1", metin: "Sayacı bir artır." },
            { baslik: "5. i ≤ 10 mu?", metin: "Evet ise 3. adıma dön; hayır ise devam et." },
            { baslik: "6. T değerini yaz, bitir", metin: "Çıktı 55." }
          ]
        },
        {
          tip: "tablo",
          baslik: "Aynı algoritma, iki akış şeması",
          head: ["", "Akış şeması 1: karar sembolü", "Akış şeması 2: döngü sembolü"],
          rows: [
            ["Başlangıç", "⬭ Başla → ▭ T ← 0, i ← 1", "⬭ Başla → ▭ T ← 0"],
            ["Tekrar eden iş", "▭ T ← T + i, sonra ▭ i ← i + 1", "⬡ i = 1, 10, 1 ve içinde ▭ T ← T + i"],
            ["Tekrar kararı", "◇ i ≤ 10 mu? Evet: T ← T + i kutusuna geri dön", "Karar sembolü yok: sayaç 10'u geçince döngü kendiliğinden biter"],
            ["Çıkış", "Hayır: ▱ T yaz → ⬭ Bitir", "▱ T yaz → ⬭ Bitir"]
          ],
          not: "İkisi de aynı sonucu verir: 1 + 2 + … + 10 = 10·11 ÷ 2 = 55. Sınavda böyle yaz: *Draw the flowchart using a decision symbol* ve *Draw the flowchart using a loop symbol.* Atama kaynaklarda ← yerine = ile de yazılabilir."
        }
      ]
    },
    {
      baslik: "Öklid algoritmasını algoritmaya çevirmek",
      kisa: "Bölme ve değiştirme adımlarını bir WHILE döngüsüyle tekrarlarız.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Akış şeması: EBOB(a, b)",
          adimlar: [
            { baslik: "⬭ Başla → ▱ Girdi: a, b", metin: "İki pozitif tam sayı al." },
            { baslik: "◇ b = 0 mı?", metin: "Hayır ise döngüye gir; Evet ise çıktıya git." },
            { baslik: "▭ r ← a MOD b; a ← b; b ← r", metin: "Kalanı bul, sayıları kaydır. Sonra ok yine karar kutusuna döner." },
            { baslik: "▱ Çıktı: a → ⬭ Bitir", metin: "b = 0 olunca a, EBOB'tur." }
          ]
        },
        {
          tip: "tablo",
          baslik: "Sözde kod",
          head: ["Satır", "Sözde kod"],
          rows: [["1", "INPUT a, b"], ["2", "WHILE b ≠ 0 DO"], ["3", "↳ r ← a MOD b"], ["4", "↳ a ← b"], ["5", "↳ b ← r"], ["6", "PRINT a"]],
          not: "Sınavda böyle yaz: *The algorithm outputs the GCF of a and b.*"
        },
        {
          tip: "grafik",
          baslik: "EBOB(48, 18): her turda a ve b",
          xlabel: "tur",
          ylabel: "değer",
          xmax: 5,
          ymax: 52,
          xticks: [{ v: 1, label: "0" }, { v: 2, label: "1" }, { v: 3, label: "2" }, { v: 4, label: "3" }],
          yticks: [{ v: 6, label: "6" }, { v: 12, label: "12" }, { v: 18, label: "18" }, { v: 48, label: "48" }],
          ogeler: [
            { id: "a0", tip: "alan", renk: 1, noktalar: [[0.6, 0], [0.95, 0], [0.95, 0], [0.6, 0]], gizli: true },
            { id: "b0", tip: "alan", renk: 2, noktalar: [[1.05, 0], [1.4, 0], [1.4, 0], [1.05, 0]], gizli: true },
            { id: "la0", tip: "yazi", x: 0.775, y: 49.6, metin: "48", gizli: true },
            { id: "lb0", tip: "yazi", x: 1.225, y: 19.6, metin: "18", gizli: true },
            { id: "a1", tip: "alan", renk: 1, noktalar: [[1.6, 0], [1.95, 0], [1.95, 0], [1.6, 0]], gizli: true },
            { id: "b1", tip: "alan", renk: 2, noktalar: [[2.05, 0], [2.4, 0], [2.4, 0], [2.05, 0]], gizli: true },
            { id: "la1", tip: "yazi", x: 1.775, y: 19.6, metin: "18", gizli: true },
            { id: "lb1", tip: "yazi", x: 2.225, y: 13.6, metin: "12", gizli: true },
            { id: "a2", tip: "alan", renk: 1, noktalar: [[2.6, 0], [2.95, 0], [2.95, 0], [2.6, 0]], gizli: true },
            { id: "b2", tip: "alan", renk: 2, noktalar: [[3.05, 0], [3.4, 0], [3.4, 0], [3.05, 0]], gizli: true },
            { id: "la2", tip: "yazi", x: 2.775, y: 13.6, metin: "12", gizli: true },
            { id: "lb2", tip: "yazi", x: 3.225, y: 7.6, metin: "6", gizli: true },
            { id: "a3", tip: "alan", renk: 1, noktalar: [[3.6, 0], [3.95, 0], [3.95, 0], [3.6, 0]], gizli: true },
            { id: "la3", tip: "yazi", x: 3.775, y: 7.6, metin: "6", gizli: true },
            { id: "lb3", tip: "yazi", x: 4.225, y: 1.6, metin: "0", gizli: true }
          ],
          durumlar: [
            {
              metin: "Başlangıç: a = 48, b = 18.",
              set: { a0: { noktalar: [[0.6, 0], [0.95, 0], [0.95, 48], [0.6, 48]] }, b0: { noktalar: [[1.05, 0], [1.4, 0], [1.4, 18], [1.05, 18]] } },
              goster: ["a0", "b0", "la0", "lb0"]
            },
            {
              metin: "1. tur: 48 = 2·18 + 12. Yeni a = 18 (eski b), yeni b = 12 (kalan).",
              set: { a1: { noktalar: [[1.6, 0], [1.95, 0], [1.95, 18], [1.6, 18]] }, b1: { noktalar: [[2.05, 0], [2.4, 0], [2.4, 12], [2.05, 12]] } },
              goster: ["a1", "b1", "la1", "lb1"]
            },
            {
              metin: "2. tur: 18 = 1·12 + 6. Yeni a = 12, yeni b = 6.",
              set: { a2: { noktalar: [[2.6, 0], [2.95, 0], [2.95, 12], [2.6, 12]] }, b2: { noktalar: [[3.05, 0], [3.4, 0], [3.4, 6], [3.05, 6]] } },
              goster: ["a2", "b2", "la2", "lb2"]
            },
            {
              metin: "3. tur: 12 = 2·6 + 0. a = 6, b = 0. b = 0 olduğu için dur: EBOB = a = 6.",
              set: { a3: { noktalar: [[3.6, 0], [3.95, 0], [3.95, 6], [3.6, 6]] } },
              goster: ["a3", "la3", "lb3"]
            }
          ]
        }
      ]
    },
    {
      baslik: "Algoritmayı izlemek ve yazmak",
      kisa: "Değişkenleri bir tabloya yaz; her satırda değerleri güncelle.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Rakamlar toplamı, n = 472",
          durum: "INPUT n; s ← 0; WHILE n > 0 DO (s ← s + n MOD 10; n ← n DIV 10); PRINT s.",
          adimlar: [
            "Başta n = 472 ve s = 0.",
            "1. tur: s = 0 + 2 = 2 ve n = 47.",
            "2. tur: s = 2 + 7 = 9 ve n = 4.",
            "3. tur: s = 9 + 4 = 13 ve n = 0. n > 0 artık yanlış: dur."
          ],
          sonuc: "PRINT 13 (4 + 7 + 2 = 13). Sınavda böyle yaz: *The output is 13.*"
        },
        {
          tip: "ornek",
          baslik: "n = 21 asal mı?",
          durum: "INPUT n; d ← 2; WHILE d·d ≤ n DO (IF n MOD d = 0 THEN PRINT \"asal değil\" ve dur; d ← d + 1); sonunda PRINT \"asal\".",
          adimlar: ["d = 2: 2·2 = 4 ≤ 21 ve 21 MOD 2 = 1 ≠ 0.", "d = 3: 3·3 = 9 ≤ 21 ve 21 MOD 3 = 0: bölen bulundu."],
          sonuc: "\"asal değil\" (21 = 3·7). d·d ≤ n yeter, çünkü bölenler d ve n ÷ d çiftleri hâlinde gelir ve küçük olan en çok √n'dir."
        },
        {
          tip: "tuzak",
          metin: "MOD kalanı, DIV tam bölümü verir. Değişkeni güncellemeden önceki ve sonraki değerleri karıştırma.",
          yanlis: "472 DIV 10 = 2 ve 472 MOD 10 = 47.",
          dogru: "472 DIV 10 = 47 (tam bölüm), 472 MOD 10 = 2 (kalan)."
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: [
            "Algoritma: girdiden çıktıya giden kesin ve sonlu adımlar dizisi.",
            "Akış şeması: oval başla/bitir, paralelogram girdi/çıktı, dikdörtgen işlem, eşkenar dörtgen karar, altıgen döngü. Aynı döngü karar sembolüyle ya da döngü sembolüyle çizilir.",
            "Sözde kod komutları: INPUT, PRINT, ←, IF…THEN…ELSE, WHILE, FOR, MOD, DIV.",
            "← bir atamadır; MOD kalanı, DIV tam bölümü verir.",
            "Karar yapısı koşula göre iki yoldan birini seçer: parçalı fonksiyonlar, diskriminant kontrolü.",
            "Döngü tekrarlar: FOR sayaçla (üst sınır dahil), WHILE koşulla; koşul güncellenmezse sonsuz döngü olur.",
            "Öklid: WHILE b ≠ 0 DO r ← a MOD b; a ← b; b ← r. Çıktı a, yani EBOB.",
            "Algoritma izlerken değişkenleri tabloya yaz ve her turda güncelle."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "The algorithm in the table is run first with x = 2 and then with x = 4. What is the sum of the two outputs?",
      fig: {
        type: "table",
        head: ["Line", "Pseudocode"],
        rows: [["1", "INPUT x"], ["2", "IF x ≥ 3 THEN y ← 2x − 1"], ["3", "ELSE y ← x²"], ["4", "PRINT y"]],
        caption: "Algorithm"
      },
      opts: ["10", "11", "19", "20"],
      a: 1,
      why: "x = 2: 2 ≥ 3 yanlış, y = 2² = 4. x = 4: 4 ≥ 3 doğru, y = 2·4 − 1 = 7. Toplam 11. A, iki girdiye de ilk kolu uygular (3 + 7); C, kolları ters uygular (3 + 16)."
    },
    {
      q: "What is the output of the algorithm in the table when it is run with n = 36?",
      fig: {
        type: "table",
        head: ["Line", "Pseudocode"],
        rows: [["1", "INPUT n"], ["2", "k ← 0"], ["3", "FOR d FROM 1 TO n DO"], ["4", "↳ IF n MOD d = 0 THEN k ← k + 1"], ["5", "PRINT k"]],
        caption: "Algorithm"
      },
      opts: ["6", "8", "9", "12"],
      a: 2,
      why: "k, 36'nın pozitif bölenlerini sayar: 36 = 2²·3² ⇒ (2 + 1)(2 + 1) = 9 (1, 2, 3, 4, 6, 9, 12, 18, 36). B, bölenlerden birini kaçırmaktan çıkar."
    },
    {
      q: "What is the output of the algorithm in the table when it is run with a = 126 and b = 84?",
      fig: {
        type: "table",
        head: ["Line", "Pseudocode"],
        rows: [["1", "INPUT a, b"], ["2", "WHILE b ≠ 0 DO"], ["3", "↳ r ← a MOD b"], ["4", "↳ a ← b"], ["5", "↳ b ← r"], ["6", "PRINT a"]],
        caption: "Algorithm"
      },
      opts: ["84", "21", "6", "42"],
      a: 3,
      why: "126 MOD 84 = 42 ⇒ a = 84, b = 42. 84 MOD 42 = 0 ⇒ a = 42, b = 0. b = 0 olunca PRINT 42 (EBOB(126, 84) = 42). A, ilk turdan sonraki a değerini çıktı sanmaktır."
    },
    {
      q: "The algorithm INPUT n; s ← 0; WHILE n > 0 DO (s ← s + n MOD 10; n ← n DIV 10); PRINT s is run with n = 358. What does it print?",
      opts: ["16", "8", "35", "3"],
      a: 0,
      why: "358: s = 8, n = 35; sonra s = 8 + 5 = 13, n = 3; sonra s = 13 + 3 = 16, n = 0. Çıktı 16 (rakamlar toplamı). B yalnızca ilk turdan sonraki s'dir, C ise ilk turdan sonraki n."
    },
    {
      q: "Flowchart 1 builds the loop \"for i = 1 to 10\" with a decision symbol. Which symbol builds the same loop in Flowchart 2?",
      opts: ["Oval (terminator)", "Parallelogram (input/output)", "Loop symbol (hexagon)", "Rectangle (process)"],
      a: 2,
      why: "Döngü sembolü (altıgen) sayaçlı tekrarı tek kutuda gösterir: i = 1, 10, 1. Oval başla ve bitir, paralelogram girdi ve çıktı, dikdörtgen tek bir işlem içindir."
    }
  ]
};
