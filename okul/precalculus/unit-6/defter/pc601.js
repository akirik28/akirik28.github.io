/* Kitpath not defteri · pc601 · 6.1 Asal Çarpanlar ve Bölenler
   Kapsam: defter-araclari/kaynak/okul-10-2025-26.md (Precalculus, Unit 6). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc601",
  amac: "Bu konu sayıların yapı taşlarını anlatıyor: asal sayıları, asal çarpanlara ayırmayı ve bir sayının kaç pozitif böleni olduğunu bulan formülü. Sınavda bölen sayısı sorularını hesap makinesi olmadan çözmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Asal ve bileşik sayılar",
      kisa: "Asalın tam iki pozitif böleni vardır; 1 ne asal ne bileşiktir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "💎",
              terim: "Prime number",
              tr: "asal sayı",
              tanim: "Yalnızca 1'e ve kendisine bölünen, 1'den büyük doğal sayı. Tam iki pozitif böleni vardır.",
              ornek: "2, 3, 5, 7, 11; 2 tek çift asal sayıdır."
            },
            {
              ikon: "🧱",
              terim: "Composite number",
              tr: "bileşik sayı",
              tanim: "İkiden fazla pozitif böleni olan sayı; asalların çarpımıdır.",
              ornek: "12'nin bölenleri 1, 2, 3, 4, 6, 12."
            },
            {
              ikon: "✂️",
              terim: "Divisor / factor",
              tr: "bölen / çarpan",
              tanim: "Bir sayıyı kalansız bölen sayı.",
              ornek: "4, 12'nin bir pozitif bölenidir."
            },
            { ikon: "✖️", terim: "Multiple", tr: "kat", tanim: "Bir sayının doğal sayılarla çarpımı.", ornek: "4'ün katları 4, 8, 12, …" }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "💎", baslik: "*Prime*", maddeler: ["Tam iki böleni var: 1 ve kendisi", "Başka bir çarpanı yok"] },
          sag: { ikon: "🧱", baslik: "*Composite*", maddeler: ["İkiden fazla böleni var", "İki küçük sayının çarpımı olarak yazılır"] },
          oyun: [
            { metin: "29", cevap: "sol", neden: "2, 3, 5 hiçbiri bölmüyor: yalnızca 1 ve 29 böler, asal." },
            { metin: "51", cevap: "sag", neden: "51 = 3·17: bileşik." },
            { metin: "91", cevap: "sag", neden: "91 = 7·13: bileşik." },
            { metin: "97", cevap: "sol", neden: "2, 3, 5, 7 hiçbiri bölmüyor: asal." },
            { metin: "57", cevap: "sag", neden: "57 = 3·19: bileşik (rakamlar toplamı 12, 3'e bölünür)." }
          ]
        },
        {
          tip: "tuzak",
          metin: "1'in tek bir böleni vardır (kendisi); bu yüzden ne asal ne bileşiktir. 51 ve 91 gibi asal görünümlü sayılar bileşiktir. Sınavda böyle yaz: *91 is not prime because 91 = 7 · 13.*",
          yanlis: "1 asaldır; 2 çift olduğu için asal değildir.",
          dogru: "1 asal değildir; 2 tek çift asal sayıdır."
        }
      ]
    },
    {
      baslik: "Bölünebilme ve asal çarpanlara ayırma",
      kisa: "Her 1'den büyük sayı, asalların çarpımı olarak tek biçimde yazılır.",
      bloklar: [
        {
          tip: "tablo",
          head: ["Sayı", "Kural", "Örnek"],
          rows: [
            ["2", "Son rakam çift", "358"],
            ["3", "Rakamlar toplamı 3'ün katı", "123 (1 + 2 + 3 = 6)"],
            ["4", "Son iki basamak 4'ün katı", "316 (16 = 4·4)"],
            ["5", "Son rakam 0 ya da 5", "745"],
            ["8", "Son üç basamak 8'in katı", "1224 (224 = 8·28)"],
            ["9", "Rakamlar toplamı 9'un katı", "459 (4 + 5 + 9 = 18)"],
            ["11", "Tek sıradaki rakamlar toplamı ile çift sıradakilerin farkı 0 ya da 11'in katı", "418 ((4 + 8) − 1 = 11)"],
            ["16", "Son dört basamak 16'nın katı", "5216 (16·326)"],
            ["6, 15, 45", "Aralarında asal çarpanların kuralları birlikte: 6 = 2·3, 15 = 3·5, 45 = 5·9", "744 (çift ve rakamlar toplamı 15)"]
          ],
          not: "Sınavda böyle yaz: *The number is divisible by 9 because the sum of its digits is 18.*"
        },
        {
          tip: "adimlar",
          baslik: "Asal çarpanlara ayırma (*prime factorization*)",
          adimlar: [
            { baslik: "En küçük asalla böl", metin: "Sayıyı kalansız bölen en küçük asala böl: önce 2, sonra 3, 5, 7…" },
            { baslik: "Bölümle devam et", metin: "Çıkan bölüme aynı işlemi uygula." },
            { baslik: "1'e kadar sürdür", metin: "Bölüm 1 olunca dur; kullandığın asalları çarp." },
            { baslik: "Üslü yaz", metin: "Aynı asalları üslü yaz: aᵐ·bⁿ·cʳ." }
          ]
        },
        {
          tip: "ornek",
          baslik: "360'ı asal çarpanlarına ayır",
          durum: "Küçük asallardan başlayarak böl.",
          adimlar: ["360 ÷ 2 = 180, 180 ÷ 2 = 90, 90 ÷ 2 = 45.", "45 ÷ 3 = 15, 15 ÷ 3 = 5.", "5 ÷ 5 = 1: dur."],
          sonuc: "360 = 2³·3²·5. Kontrol: 8·9·5 = 360. Sınavda böyle yaz: *The prime factorization of 360 is 2³ · 3² · 5.*"
        },
        {
          tip: "ornek",
          baslik: "Eksik rakamı bulmak",
          durum: "74a sayısı 6'ya, 28m6 sayısı 9'a bölünüyor. a ve m kaçtır?",
          adimlar: [
            "6'ya bölünme: hem çift hem 3'e bölünür. 7 + 4 + a = 11 + a, 3'ün katı olmalı: a = 1, 4 ya da 7.",
            "Çift olması için a = 4 (744 = 6·124).",
            "9'a bölünme: rakamlar toplamı 9'un katı. 2 + 8 + m + 6 = 16 + m = 18 ⇒ m = 2 (2826 = 9·314)."
          ],
          sonuc: "a = 4 ve m = 2. Sınavda böyle yaz: *The sum of the digits must be a multiple of 9.*"
        }
      ]
    },
    {
      baslik: "Pozitif bölen sayısı formülü",
      kisa: "Her asalın üssüne 1 ekle, sonra hepsini çarp.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [{ t: "A = aᵐ·bⁿ·cʳ", alt: "a, b, c farklı asallar" }, "⇒", { t: "(m + 1)(n + 1)(r + 1)", alt: "pozitif bölen sayısı" }],
          aciklama: "Her pozitif böleni −1 ile çarpınca bir negatif bölen bulunur: negatif bölen sayısı da (m + 1)(n + 1)(r + 1), bütün tam sayı bölenler ise bunun iki katıdır. Sınavda böyle yaz: *The number of positive divisors of A is (m + 1)(n + 1)(r + 1).*"
        },
        {
          tip: "tablo",
          baslik: "Neden? 12 = 2²·3'ün bölenleri",
          head: ["", "3⁰", "3¹"],
          rows: [["2⁰", "1", "3"], ["2¹", "2", "6"], ["2²", "4", "12"]],
          not: "Her bölen, 2'nin üssünü 0, 1, 2 (3 seçenek) ve 3'ün üssünü 0, 1 (2 seçenek) seçerek oluşur: 3·2 = 6 bölen."
        },
        {
          tip: "ornek",
          baslik: "360 ve 72'nin pozitif bölen sayısı",
          durum: "Önce asal çarpanlara ayır, sonra her üsse 1 ekle.",
          adimlar: ["360 = 2³·3²·5: üsler 3, 2, 1.", "Her üsse 1 ekle: 4, 3, 2. Çarp: 4·3·2 = 24.", "72 = 2³·3²: (3 + 1)(2 + 1) = 12."],
          sonuc: "360'ın 24, 72'nin 12 pozitif böleni vardır. Kontrol: 72'nin bölenleri 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72 (12 tane)."
        },
        {
          tip: "tuzak",
          metin: "Üsleri toplamak ya da çarpmak yaygın hatadır. Üs, o asalın 0, 1, …, m değerlerini alabileceğini gösterir; yani m + 1 seçenek vardır.",
          yanlis: "360 için 3 + 2 + 1 = 6 ya da 3·2·1 = 6 bölen vardır.",
          dogru: "(3 + 1)(2 + 1)(1 + 1) = 24: her üsse 1 ekle, sonra çarp."
        }
      ]
    },
    {
      baslik: "Bölen sayısında örüntü",
      kisa: "Asalın 2 böleni vardır; tam karenin bölen sayısı tektir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "n = 1…12 için pozitif bölen sayısı d(n)",
          xlabel: "n",
          ylabel: "bölen sayısı",
          xmax: 13,
          ymax: 7,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" },
            { v: 6, label: "6" },
            { v: 7, label: "7" },
            { v: 8, label: "8" },
            { v: 9, label: "9" },
            { v: 10, label: "10" },
            { v: 11, label: "11" },
            { v: 12, label: "12" }
          ],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 2, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]], gizli: true },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]], gizli: true },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]], gizli: true },
            { id: "b4", tip: "alan", renk: 2, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]], gizli: true },
            { id: "b5", tip: "alan", renk: 1, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]], gizli: true },
            { id: "b6", tip: "alan", renk: 0, noktalar: [[5.65, 0], [6.35, 0], [6.35, 0], [5.65, 0]], gizli: true },
            { id: "b7", tip: "alan", renk: 1, noktalar: [[6.65, 0], [7.35, 0], [7.35, 0], [6.65, 0]], gizli: true },
            { id: "b8", tip: "alan", renk: 0, noktalar: [[7.65, 0], [8.35, 0], [8.35, 0], [7.65, 0]], gizli: true },
            { id: "b9", tip: "alan", renk: 2, noktalar: [[8.65, 0], [9.35, 0], [9.35, 0], [8.65, 0]], gizli: true },
            { id: "b10", tip: "alan", renk: 0, noktalar: [[9.65, 0], [10.35, 0], [10.35, 0], [9.65, 0]], gizli: true },
            { id: "b11", tip: "alan", renk: 1, noktalar: [[10.65, 0], [11.35, 0], [11.35, 0], [10.65, 0]], gizli: true },
            { id: "b12", tip: "alan", renk: 0, noktalar: [[11.65, 0], [12.35, 0], [12.35, 0], [11.65, 0]], gizli: true },
            { id: "t12", tip: "yazi", x: 11, y: 6.4, metin: "3·2 = 6", gizli: true }
          ],
          durumlar: [
            {
              metin: "Asallar (2, 3, 5, 7, 11): her birinin tam 2 böleni var.",
              set: {
                b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 2], [1.65, 2]] },
                b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 2], [2.65, 2]] },
                b5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 2], [4.65, 2]] },
                b7: { noktalar: [[6.65, 0], [7.35, 0], [7.35, 2], [6.65, 2]] },
                b11: { noktalar: [[10.65, 0], [11.35, 0], [11.35, 2], [10.65, 2]] }
              },
              goster: ["b2", "b3", "b5", "b7", "b11"]
            },
            {
              metin: "Tam kareler (1, 4, 9): bölen sayıları 1, 3, 3 yani tek.",
              set: {
                b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 1], [0.65, 1]] },
                b4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 3], [3.65, 3]] },
                b9: { noktalar: [[8.65, 0], [9.35, 0], [9.35, 3], [8.65, 3]] }
              },
              goster: ["b1", "b4", "b9"]
            },
            {
              metin: "Diğerleri bileşik: 6, 8, 10 dörder bölenli; 12 altı bölenli.",
              set: {
                b6: { noktalar: [[5.65, 0], [6.35, 0], [6.35, 4], [5.65, 4]] },
                b8: { noktalar: [[7.65, 0], [8.35, 0], [8.35, 4], [7.65, 4]] },
                b10: { noktalar: [[9.65, 0], [10.35, 0], [10.35, 4], [9.65, 4]] },
                b12: { noktalar: [[11.65, 0], [12.35, 0], [12.35, 6], [11.65, 6]] }
              },
              goster: ["b6", "b8", "b10", "b12", "t12"]
            },
            { metin: "Formülle uyumlu: 12 = 2²·3 ⇒ (2 + 1)(1 + 1) = 6." }
          ]
        },
        {
          tip: "not",
          metin: "Bölenler d ve n ÷ d diye çiftlenir. Tam karede √n kendisiyle eşleşir, bu yüzden bölen sayısı tek olur. Formülden de görülür: bütün üsler çifttir, her (üs + 1) tektir, çarpım tektir. Sınavda böyle yaz: *A positive integer has an odd number of divisors if and only if it is a perfect square.*"
        },
        {
          tip: "tablo",
          baslik: "Bölen sayılarını tabloda topla",
          head: ["Sayı", "Asal çarpanlara ayrılış", "Farklı asal çarpan sayısı", "Pozitif bölen sayısı", "Negatif bölen sayısı"],
          rows: [
            ["36", "2²·3²", "2", "(2 + 1)(2 + 1) = 9", "9"],
            ["73", "73 (asal)", "1", "2", "2"],
            ["123", "3·41", "2", "(1 + 1)(1 + 1) = 4", "4"],
            ["456", "2³·3·19", "3", "(3 + 1)(1 + 1)(1 + 1) = 16", "16"],
            ["840", "2³·3·5·7", "4", "(3 + 1)(1 + 1)(1 + 1)(1 + 1) = 32", "32"]
          ],
          not: "Farklı asal çarpan sayısı ile bölen sayısı aynı şey değildir. 36 tam kare olduğu için bölen sayısı tektir (9)."
        }
      ]
    },
    {
      baslik: "Tek, çift ve tam kare bölenler",
      kisa: "Koşulu üslere çevir: çift bölende 2'nin üssü en az 1'dir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "360 = 2³·3²·5 için bölen türleri",
          durum: "Koşulu her asalın üssüne çevir.",
          adimlar: [
            "Toplam bölen: (3 + 1)(2 + 1)(1 + 1) = 24.",
            "Tek bölenler 2 içermez (2'nin üssü 0): (2 + 1)(1 + 1) = 6.",
            "Çift bölenler = 24 − 6 = 18. (Ya da 2'nin üssü 1, 2, 3: 3·3·2 = 18.)",
            "Tam kare bölenlerde üsler çift olmalı: 2 için 0 ya da 2 (2 seçenek), 3 için 0 ya da 2 (2 seçenek), 5 için yalnızca 0 (1 seçenek): 2·2·1 = 4 (1, 4, 9, 36)."
          ],
          sonuc: "6 tek, 18 çift, 4 tam kare bölen. Sınavda böyle yaz: *How many even divisors does 360 have?*"
        },
        {
          tip: "ornek",
          baslik: "Tam 12 böleni olan en küçük sayı",
          durum: "12'yi çarpanlarına böl: her çarpan bir (üs + 1) olur.",
          adimlar: [
            "12 = 12·1 = 6·2 = 4·3 = 3·2·2 biçimlerinde yazılır.",
            "Küçük asallara büyük üsleri ver: 2¹¹ = 2048; 2⁵·3 = 96; 2³·3² = 72; 2²·3·5 = 60.",
            "En küçüğü seç."
          ],
          sonuc: "En küçük sayı 60: 2²·3·5 ⇒ (2 + 1)(1 + 1)(1 + 1) = 12 bölen."
        },
        {
          tip: "ornek",
          baslik: "Üssü bilinmeyen ve toplam biçimli sayılar",
          durum: "(a) 8·9ⁿ sayısının 36 pozitif böleni varsa n kaçtır? (b) 2³·5² + 2⁴·5² sayısının kaç pozitif böleni vardır?",
          adimlar: [
            "(a) 8·9ⁿ = 2³·3²ⁿ: (3 + 1)(2n + 1) = 36 ⇒ 2n + 1 = 9 ⇒ n = 4.",
            "(b) Toplamı çarpım yapmak için ortak çarpanı dışarı al: 2³·5²·(1 + 2) = 2³·3·5².",
            "Bölen sayısı: (3 + 1)(1 + 1)(2 + 1) = 4·2·3 = 24."
          ],
          sonuc: "(a) n = 4 (sayı 8·6561); (b) 24 pozitif bölen. Sınavda böyle yaz: *First write the number as a product of prime powers.*"
        },
        {
          tip: "liste",
          maddeler: [
            { ikon: "1️⃣", baslik: "Tek bölenler", metin: "2'yi at; kalan kısmın bölen sayısını bul." },
            { ikon: "2️⃣", baslik: "Çift bölenler", metin: "Toplam bölen − tek bölen." },
            { ikon: "3️⃣", baslik: "Tam kare bölenler", metin: "Her asalın çift üs seçeneklerini say, çarp." },
            { ikon: "➕", baslik: "Bölenlerin toplamı", metin: "72 = 2³·3² için (1 + 2 + 4 + 8)(1 + 3 + 9) = 15·13 = 195." }
          ]
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
            "Asalın tam iki pozitif böleni vardır; 1 asal ya da bileşik değildir, 2 tek çift asaldır.",
            "Bölünebilme: 2 son rakam çift, 3 ve 9 rakamlar toplamı, 4 son iki basamak, 5 son rakam, 8 son üç basamak, 16 son dört basamak, 11 rakamların dönüşümlü farkı.",
            "Asal çarpanlara ayırırken küçük asallardan başla: A = aᵐ·bⁿ·cʳ.",
            "Pozitif bölen sayısı (m + 1)(n + 1)(r + 1): her üsse 1 ekle, sonra çarp.",
            "Asalın 2, tam karenin tek sayıda pozitif böleni vardır; negatif bölen sayısı pozitifle aynıdır.",
            "Tek bölen: 2'yi at. Çift bölen: toplam − tek. Tam kare bölen: çift üsleri say.",
            "Bölen sayısı verilince sayıyı bulmak için küçük asallara büyük üsleri ver.",
            "Bölenlerin toplamı: (1 + a + … + aᵐ)(1 + b + … + bⁿ)…"
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "How many positive divisors does A = 2³·3·5² have?",
      opts: ["6", "24", "18", "12"],
      a: 1,
      why: "Her üsse 1 ekleyip çarparız: (3 + 1)(1 + 1)(2 + 1) = 4·2·3 = 24. A şıkkı, üsleri toplayarak (3 + 1 + 2) ya da çarparak (3·1·2) bulunan yaygın yanlış sonuçtur."
    },
    {
      q: "72 students will be divided into equal groups. The number of groups must be more than 1, and each group must have more than 1 student. How many different numbers of groups are possible?",
      opts: ["12", "11", "8", "10"],
      a: 3,
      why: "72 = 2³·3² ⇒ 4·3 = 12 pozitif bölen. Grup sayısı 1 olamaz (tek grup) ve 72 olamaz (her grupta 1 kişi): 12 − 2 = 10. A, bu iki durumu da saymaktan çıkar."
    },
    {
      q: "The number n = 2ᵃ·3 has exactly 12 positive divisors. What is a?",
      opts: ["3", "4", "5", "6"],
      a: 2,
      why: "Bölen sayısı (a + 1)(1 + 1) = 12 ⇒ a + 1 = 6 ⇒ a = 5 (n = 96). D şıkkı, a + 1 = 6 eşitliğini a = 6 diye okumaktır."
    },
    {
      q: "The table gives the prime factorization of A (A = 2³·3²·5). How many positive even divisors does A have?",
      fig: { type: "table", head: ["Prime", "2", "3", "5"], rows: [["Exponent", "3", "2", "1"]], caption: "Prime factorization of A" },
      opts: ["18", "24", "6", "12"],
      a: 0,
      why: "Toplam bölen (3 + 1)(2 + 1)(1 + 1) = 24. Tek bölenler 2 içermez: (2 + 1)(1 + 1) = 6. Çift bölen 24 − 6 = 18. B toplam bölen sayısıdır, C ise tek bölen sayısıdır."
    },
    {
      q: "How many integer divisors (positive and negative together) does 360 have?",
      opts: ["24", "36", "48", "12"],
      a: 2,
      why: "360 = 2³·3²·5 için pozitif bölen sayısı (3 + 1)(2 + 1)(1 + 1) = 24. Her pozitif bölenin negatifi de bölendir: 24 + 24 = 48. A yalnızca pozitif bölenleri sayar."
    }
  ]
};
