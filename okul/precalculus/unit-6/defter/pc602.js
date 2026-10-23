/* Kitora not defteri · pc602 · 6.2 EBOB ve EKOK
   Kapsam: defter-araclari/kaynak/okul-10-2025-26.md (Precalculus, Unit 6). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc602",
  amac: "Bu konu iki problem türünü anlatıyor: eşit parçalara bölme (EBOB) ve birlikte yeniden buluşma (EKOK). Asal çarpanlarla ve Öklid algoritmasıyla bulmayı, kütük, fidan ve otobüs problemlerini çözmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "EBOB ve EKOK nedir?",
      kisa: "EBOB ortak bölenlerin en büyüğü, EKOK ortak katların en küçüğüdür.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "✂️",
              terim: "GCF",
              tr: "EBOB (en büyük ortak bölen)",
              tanim: "İki ya da daha fazla sayıyı birlikte kalansız bölen en büyük sayı (*greatest common factor*). *GCD* ya da *HCF* de denir.",
              ornek: "12 ve 18'in ortak bölenleri 1, 2, 3, 6: EBOB 6."
            },
            {
              ikon: "🔁",
              terim: "LCM",
              tr: "EKOK (en küçük ortak kat)",
              tanim: "Sayıların hepsinin katı olan en küçük pozitif sayı.",
              ornek: "12'nin katları 12, 24, 36; 18'in katları 18, 36: EKOK 36."
            },
            {
              ikon: "🤝",
              terim: "Coprime",
              tr: "aralarında asal",
              tanim: "EBOB'u 1 olan sayılar; ikisi ayrı ayrı asal olmak zorunda değildir.",
              ornek: "8 ve 15: EBOB 1, EKOK 120."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [{ t: "EBOB(a, b)" }, "·", { t: "EKOK(a, b)" }, "=", { t: "a · b" }],
          aciklama: "Yalnızca iki sayı için geçerlidir. 12 ve 18: 6·36 = 216 = 12·18. Sınavda böyle yaz: *The product of the GCF and the LCM of two numbers equals the product of the numbers.*"
        },
        {
          tip: "tuzak",
          metin: "Bu bağıntıyı üç sayıya taşımak yaygın hatadır. 2, 4, 8 için EBOB = 2, EKOK = 8 ve 2·8 = 16 iken 2·4·8 = 64'tür.",
          yanlis: "Üç sayıda da EBOB · EKOK = sayıların çarpımıdır.",
          dogru: "EBOB · EKOK = a · b bağıntısı yalnızca iki sayı için doğrudur."
        }
      ]
    },
    {
      baslik: "Asal çarpanlarla EBOB ve EKOK",
      kisa: "EBOB ortak asalların en küçük üssü, EKOK bütün asalların en büyük üssüdür.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "360 ve 84 için üs tablosu",
          head: ["Asal", "360", "84", "En küçük üs", "En büyük üs"],
          rows: [["2", "3", "2", "2", "3"], ["3", "2", "1", "1", "2"], ["5", "1", "0", "0", "1"], ["7", "0", "1", "0", "1"]],
          not: "360 = 2³·3²·5 ve 84 = 2²·3·7. EBOB = 2²·3 = 12; EKOK = 2³·3²·5·7 = 2520. Kontrol: 12·2520 = 30240 = 360·84."
        },
        {
          tip: "ornek",
          baslik: "EBOB(72, 108) ve EKOK(72, 108)",
          durum: "Önce ikisini de asal çarpanlarına ayır.",
          adimlar: [
            "72 = 2³·3² ve 108 = 2²·3³.",
            "EBOB: her asalın en küçük üssü: 2² ve 3² ⇒ 4·9 = 36.",
            "EKOK: her asalın en büyük üssü: 2³ ve 3³ ⇒ 8·27 = 216.",
            "Kontrol: 36·216 = 7776 = 72·108."
          ],
          sonuc: "EBOB = 36 ve EKOK = 216. Sınavda böyle yaz: *The GCF of 72 and 108 is 36 and their LCM is 216.*"
        }
      ]
    },
    {
      baslik: "Öklid algoritması",
      kisa: "EBOB(a, b) = EBOB(b, kalan); kalan 0 olunca son bölen EBOB'tur.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Büyük sayılar için hızlı yol",
          adimlar: [
            { baslik: "Böl", metin: "Büyük sayıyı küçüğe böl: a = b·q + r." },
            { baslik: "Değiştir", metin: "EBOB(a, b) = EBOB(b, r). Artık b ve r ile devam et." },
            { baslik: "Tekrarla", metin: "Kalan 0 olana kadar bölmeye devam et." },
            { baslik: "Oku", metin: "Kalan 0 olunca son bölen EBOB'tur." }
          ]
        },
        {
          tip: "ornek",
          baslik: "EBOB(252, 105) ve EKOK(252, 105)",
          durum: "Asal çarpan aramadan Öklid algoritmasını uygula.",
          adimlar: ["252 = 2·105 + 42.", "105 = 2·42 + 21.", "42 = 2·21 + 0: kalan 0, son bölen 21."],
          sonuc: "EBOB = 21. EKOK = 252·105 ÷ 21 = 1260. Kontrol: 252 = 2²·3²·7 ve 105 = 3·5·7 ⇒ ortak 3·7 = 21. Sınavda böyle yaz: *By the Euclidean algorithm, the GCF of 252 and 105 is 21.*"
        },
        {
          tip: "grafik",
          baslik: "Öklid algoritmasını karelerle görmek: EBOB(16, 6)",
          xlabel: "",
          ylabel: "",
          xmax: 16,
          ymax: 11,
          xticks: [
            { v: 0, label: "0" },
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" },
            { v: 12, label: "12" },
            { v: 14, label: "14" },
            { v: 16, label: "16" }
          ],
          yticks: [{ v: 0, label: "0" }, { v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "r", tip: "alan", renk: 0, noktalar: [[0, 0], [16, 0], [16, 6], [0, 6]], gizli: true },
            { id: "s1", tip: "alan", renk: 1, noktalar: [[0, 0], [6, 0], [6, 6], [0, 6]], gizli: true },
            { id: "s2", tip: "alan", renk: 1, noktalar: [[6, 0], [12, 0], [12, 6], [6, 6]], gizli: true },
            { id: "t1", tip: "yazi", x: 3, y: 2.6, metin: "6 × 6", gizli: true },
            { id: "t2", tip: "yazi", x: 9, y: 2.6, metin: "6 × 6", gizli: true },
            { id: "s3", tip: "alan", renk: 2, noktalar: [[12, 0], [16, 0], [16, 4], [12, 4]], gizli: true },
            { id: "t3", tip: "yazi", x: 14, y: 1.7, metin: "4 × 4", gizli: true },
            { id: "s4", tip: "alan", renk: 3, noktalar: [[12, 4], [14, 4], [14, 6], [12, 6]], gizli: true },
            { id: "s5", tip: "alan", renk: 3, noktalar: [[14, 4], [16, 4], [16, 6], [14, 6]], gizli: true },
            { id: "t4", tip: "yazi", x: 13, y: 4.7, metin: "2", gizli: true },
            { id: "t5", tip: "yazi", x: 15, y: 4.7, metin: "2", gizli: true }
          ],
          durumlar: [
            { metin: "16 × 6'lık dikdörtgeni boşluk kalmadan karelerle doldurmak istiyoruz. En büyük kare kenarı EBOB(16, 6) olur.", goster: ["r"] },
            { metin: "16 = 2·6 + 4: iki tane 6 × 6 kare sığar, geriye 4 × 6'lık şerit kalır.", goster: ["s1", "s2", "t1", "t2"] },
            { metin: "6 = 1·4 + 2: kalan şeride bir tane 4 × 4 kare sığar, geriye 4 × 2'lik şerit kalır.", goster: ["s3", "t3"] },
            { metin: "4 = 2·2 + 0: iki tane 2 × 2 kare şeridi tam doldurur. Kalan 0: EBOB(16, 6) = 2.", goster: ["s4", "s5", "t4", "t5"] }
          ]
        }
      ]
    },
    {
      baslik: "Hangi problem EBOB, hangi EKOK?",
      kisa: "Eşit parçalama ve gruplama EBOB; birlikte buluşma ve döşeme EKOK.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "✂️",
            baslik: "*EBOB* problemi",
            maddeler: ["Bölme, kesme, gruplama: parçalar eşit olur", "En uzun parça, en büyük aralık, en az fidan", "Anahtar: artmadan, en çok kasa"]
          },
          sag: {
            ikon: "🔁",
            baslik: "*EKOK* problemi",
            maddeler: ["Birlikte olma, tekrar buluşma, döşeme", "En küçük kare, ilk ortak zaman", "Anahtar: aynı anda, ilk kez, kaç dakika sonra"]
          },
          oyun: [
            { metin: "İki kurdele eşit ve en uzun parçalara kesilecek.", cevap: "sol", neden: "Eşit parçalara bölme ve en uzun: EBOB." },
            { metin: "Üç ışık birlikte yandı; ilk kez ne zaman yeniden birlikte yanar?", cevap: "sag", neden: "Aynı anda yeniden buluşma: EKOK." },
            { metin: "Bahçenin çevresine eşit aralıklarla en az fidan dikilecek.", cevap: "sol", neden: "En az fidan = en büyük aralık: EBOB." },
            {
              metin: "12 × 8 cm'lik fayanslarla en küçük kare döşenecek.",
              cevap: "sag",
              neden: "Kenar iki uzunluğun da katı olmalı, en küçük: EKOK."
            },
            { metin: "Elma ve portakallar artmadan en çok kasaya eşit dağıtılacak.", cevap: "sol", neden: "Hiçbiri artmıyor ve en çok kasa: EBOB." }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            { ikon: "✂️", baslik: "EBOB için", metin: "*Find the greatest possible length of each piece.*" },
            { ikon: "🔁", baslik: "EKOK için", metin: "*After how many days will they meet again?*" },
            { ikon: "🔁", baslik: "EKOK için", metin: "*Find the smallest number that is divisible by 4, 6 and 9.*" }
          ]
        }
      ]
    },
    {
      baslik: "EBOB problemleri: kütük, fidan, kasa",
      kisa: "Artmadan eşit parçalamada parça boyu EBOB'tur.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Kütük: 72 cm ve 108 cm'lik iki kütük, artık kalmadan eşit ve en uzun parçalara kesilecek",
          durum: "Parça boyu ve toplam parça sayısı nedir?",
          adimlar: ["Parça boyu iki boyu da bölmeli ve en uzun olmalı: EBOB(72, 108) = 2²·3² = 36.", "72 ÷ 36 = 2 parça, 108 ÷ 36 = 3 parça."],
          sonuc: "Parça boyu 36 cm, toplam 2 + 3 = 5 parça."
        },
        {
          tip: "ornek",
          baslik: "Fidan: kenarları 60 m ve 48 m olan dikdörtgen bahçenin çevresine, köşelere de gelecek şekilde eşit aralıklarla en az kaç fidan dikilir?",
          durum: "Fidan en az ise aralık en büyük olmalı.",
          adimlar: [
            "Aralık = EBOB(60, 48): 60 = 2²·3·5 ve 48 = 2⁴·3 ⇒ 2²·3 = 12 m.",
            "Çevre = 2(60 + 48) = 216 m.",
            "Kapalı çevrede fidan sayısı = çevre ÷ aralık = 216 ÷ 12 = 18."
          ],
          sonuc: "En az 18 fidan. Sınavda böyle yaz: *The distance between two saplings is the GCF of 60 and 48.*"
        },
        {
          tip: "ornek",
          baslik: "Kasa: 84 elma ve 126 portakal, her kasada aynı sayıda elma ve aynı sayıda portakal olacak şekilde ve hiçbiri artmadan en çok kaç kasaya dağıtılır?",
          durum: "Kasa sayısı hem 84'ü hem 126'yı bölmeli.",
          adimlar: ["En çok kasa: EBOB(84, 126). 84 = 2²·3·7 ve 126 = 2·3²·7 ⇒ 2·3·7 = 42.", "Her kasada 84 ÷ 42 = 2 elma ve 126 ÷ 42 = 3 portakal olur."],
          sonuc: "En çok 42 kasa; her birinde 2 elma ve 3 portakal."
        },
        {
          tip: "tuzak",
          metin: "Kapalı bir çevrede (bahçe gibi) başlangıç ve bitiş aynı noktadır. Düz bir yolda iki uca da fidan dikilecekse sayı bir fazladır.",
          yanlis: "Bahçe çevresinde fidan sayısı = çevre ÷ aralık + 1.",
          dogru: "Kapalı çevrede fidan sayısı = çevre ÷ aralık = 216 ÷ 12 = 18."
        }
      ]
    },
    {
      baslik: "EBOB problemleri 2: yola bitişik bahçe ve çuvallar",
      kisa: "Açık yolda fidan sayısı bir fazladır; toplam bilinirse EBOB'un katlarını yaz.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Bir kenarı yola bitişik bahçe: yol kenarındaki iki köşeye de fidan dikilecek",
          durum: "Uzun kenarı (90 m) yola bitişik, kısa kenarı 54 m olan dikdörtgen bahçenin yola bitişik olmayan üç kenarına eşit aralıklarla en az kaç fidan dikilir?",
          adimlar: [
            "Aralık hem 90'ı hem 54'ü bölmeli ve en büyük olmalı: 90 = 2·3²·5 ve 54 = 2·3³ ⇒ EBOB = 2·3² = 18 m.",
            "Fidan dikilen yolun uzunluğu 54 + 90 + 54 = 198 m (açık yol, iki uç da dahil).",
            "Aralık sayısı 198 ÷ 18 = 11; açık yolda fidan sayısı aralık sayısından bir fazladır."
          ],
          sonuc: "Aralık 18 m, en az 11 + 1 = 12 fidan. Sınavda böyle yaz: *The sapling at each end of the path adds one more to the number of gaps.*"
        },
        {
          tip: "ornek",
          baslik: "Toplam kütle ve EBOB: iki çuval",
          durum: "İki çuvalın toplamı 56 kg. İkisi de artmadan, mümkün olan en büyük eşit kütleli torbalara bölünüyor ve torba 7 kg. Her çuval 10 kg'dan ağır ve ikincisi daha ağır. Çuvallar kaç kg?",
          adimlar: [
            "Torba kütlesi EBOB olduğundan çuvallar 7k ve 7m biçiminde ve k + m = 8.",
            "EBOB tam 7 olacağı için k ile m aralarında asal olmalı: (1, 7) ya da (3, 5).",
            "(1, 7) için çuvallardan biri 7 kg, 10'dan hafif: elenir. Kalan (3, 5): 21 ve 35 kg."
          ],
          sonuc: "Çuvallar ==21 kg== ve ==35 kg==. Kontrol: EBOB(21, 35) = 7 ve 21 + 35 = 56."
        }
      ]
    },
    {
      baslik: "EKOK problemleri: buluşma ve döşeme",
      kisa: "Aynı anda yeniden gerçekleşecek ilk zaman EKOK'tur.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Kantin: A bölümü 6 günde bir, B bölümü 8 günde bir temizleniyor; bugün ikisi de temizlendi",
          durum: "İkisi kaç gün sonra aynı gün temizlenir?",
          adimlar: ["EKOK(6, 8): 6 = 2·3 ve 8 = 2³.", "EKOK = 2³·3 = 24."],
          sonuc: "24 gün sonra. Sınavda böyle yaz: *They will be cleaned on the same day again after 24 days.*"
        },
        {
          tip: "ornek",
          baslik: "Otobüs: üç hat 10, 15 ve 20 dakikada bir kalkıyor; 08:00'de birlikte kalktılar",
          durum: "Yeniden ne zaman birlikte kalkarlar?",
          adimlar: ["10 = 2·5, 15 = 3·5 ve 20 = 2²·5.", "EKOK = 2²·3·5 = 60 dakika."],
          sonuc: "60 dakika sonra, saat 09:00'da."
        },
        {
          tip: "ornek",
          baslik: "Döşeme: 12 × 8 cm'lik dikdörtgen fayanslarla en küçük kare yüzey döşenecek",
          durum: "Kare kenarı ve fayans sayısı nedir?",
          adimlar: [
            "Kenar hem 12'nin hem 8'in katı olmalı, en küçük: EKOK(12, 8) = 24 cm.",
            "Bir kenarda 24 ÷ 12 = 2, öbür kenarda 24 ÷ 8 = 3 fayans var.",
            "Toplam 2·3 = 6 fayans."
          ],
          sonuc: "Kare kenarı 24 cm, 6 fayans. Kontrol: alan 24·24 = 576 = 6·96."
        },
        {
          tip: "tuzak",
          metin: "Bir sayı iki sayıya bölününce aynı kalanı veriyorsa EKOK'un katına kalanı ekleriz. Kalanlar bölenlerden hep 1 eksikse (3, 5, 9'a bölünce 2, 4, 8) sayı + 1 ortak kat olur: en küçük sayı EKOK(3, 5, 9) − 1 = 44.",
          yanlis: "6'ya ve 8'e bölününce 5 kalanı veren 5'ten büyük en küçük sayı 24'tür.",
          dogru: "n = 24k + 5 olur; 5'ten büyük en küçük sayı 29'dur (29 = 6·4 + 5 = 8·3 + 5)."
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
            "EBOB = ortak bölenlerin en büyüğü; EKOK = ortak katların en küçüğü.",
            "İki sayıda EBOB · EKOK = a · b; üç sayıda bu bağıntı yok.",
            "Asal çarpanlarla: EBOB için ortak asalların en küçük üsleri, EKOK için bütün asalların en büyük üsleri.",
            "Öklid algoritması: a = b·q + r, EBOB(a, b) = EBOB(b, r); kalan 0 olunca son bölen EBOB'tur.",
            "Eşit parçalama, gruplama, en uzun ve en az fidan: EBOB.",
            "Birlikte buluşma, ilk ortak zaman, en küçük kare döşeme: EKOK.",
            "Kapalı çevrede fidan sayısı = çevre ÷ aralık.",
            "Aynı kalan verilirse sayı = EKOK·k + kalan; kalanlar bölenden hep 1 eksikse sayı = EKOK·k − 1."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "The GCF of two natural numbers is 12 and their product is 8640. What is their LCM?",
      opts: ["720", "1440", "360", "108"],
      a: 0,
      why: "EBOB·EKOK = a·b olduğundan EKOK = 8640 ÷ 12 = 720. B, 8640 ÷ 6 işleminin sonucudur: EBOB'u yanlış (yarısı olarak) kullanmaktan çıkar."
    },
    {
      q: "A rectangular field is 40 m by 24 m. Posts are placed at equal distances around the whole perimeter, including the corners. What is the minimum number of posts?",
      opts: ["8", "16", "17", "32"],
      a: 1,
      why: "Direk sayısı en az ise aralık en büyük olmalı: EBOB(40, 24) = 8 m. Çevre = 2(40 + 24) = 128 m; kapalı çevrede 128 ÷ 8 = 16 direk. C şıkkı, kapalı çevrede bir fazla saymaktan çıkar."
    },
    {
      q: "Three lights blink every 6, 9 and 12 seconds. After they blink together, after how many seconds will they first blink together again?",
      opts: ["72", "18", "36", "108"],
      a: 2,
      why: "6 = 2·3, 9 = 3², 12 = 2²·3: en büyük üsler 2² ve 3² ⇒ EKOK = 36. A (72) de ortak bir kattır ama ilk kez değildir."
    },
    {
      q: "The table shows the steps of the Euclidean algorithm for GCF(168, 60). What is the GCF?",
      fig: {
        type: "table",
        head: ["Dividend", "Divisor", "Quotient", "Remainder"],
        rows: [["168", "60", "2", "48"], ["60", "48", "1", "12"], ["48", "12", "4", "0"]],
        caption: "168 = 2·60 + 48, 60 = 1·48 + 12, 48 = 4·12 + 0"
      },
      opts: ["48", "60", "4", "12"],
      a: 3,
      why: "Kalan 0 olduğunda son bölen EBOB'tur: 12. A, ilk kalandır (algoritma bitmemiştir); C ise son bölümdür."
    },
    {
      q: "A number leaves remainder 3 when divided by 4, by 6 and by 9. What is the smallest such number greater than 3?",
      opts: ["36", "39", "33", "75"],
      a: 1,
      why: "Sayıdan 3 çıkarınca 4, 6 ve 9'a tam bölünmeli: EKOK(4, 6, 9) = 36 ⇒ sayı 36 + 3 = 39. A kalanı eklemeyi unutur (36, kalan 0 verir). D de koşulu sağlar (2·36 + 3) ama en küçük değildir."
    }
  ]
};
