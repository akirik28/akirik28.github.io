/* Kitora not defteri · mc603 · 6.3 Döviz Piyasası
   Kaynak: CED Topic 6.3 (MKT-5.B, C, D). Blok türleri: /ap/_kit/defter.js başı.
   TL piyasası: D (1,9)→(9,1), S (1,1)→(9,9), denge (5,5) = 0,05 $ ve 100 milyar TL; 1 birim = 0,01 $ ve 20 milyar TL. */
window.DEFTER = (function () {
  var XT = [{ v: 4, label: "80" }, { v: 5, label: "100" }, { v: 6, label: "120" }];
  return {
    slug: "mc603",
    amac: "Bu konu döviz piyasasında bir paranın talebinin ve arzının nereden geldiğini anlatıyor. TL'nin talep ve arz eğrilerini, denge kurunu ve kur dengeden uzaktayken piyasanın onu nasıl geri çektiğini öğreneceksin.",
    bolumler: [
      {
        baslik: "Döviz piyasası: iki paranın karşılaştığı yer",
        kisa: "Bir paranın talebi ve arzı iki farklı ülkenin insanlarından gelir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🛬", terim: "Demand for a currency", tr: "bir paraya talep", tanim: "Yabancıların bu ülkenin mal, hizmet ve varlıklarını alabilmek için o ülkenin parasını istemesi.", ornek: "ABD'li turist Antalya'da tatil için TL ister." },
              { ikon: "🛫", terim: "Supply of a currency", tr: "bir paranın arzı", tanim: "Ülke sakinlerinin yabancı mal, hizmet ve varlık almak için kendi parasını satıp başka para alması.", ornek: "ABD'den telefon alacak Türk, TL'sini dolara çevirir; piyasaya TL arz eder." }
            ] },
          { tip: "not", metin: "Bu defterde hep **TL piyasasına** bakacağız. Dikey eksen ==TL'nin fiyatı (1 TL kaç $)==, yatay eksen günlük işlem gören TL miktarıdır. Bir paranın *foreign exchange market*'inde fiyat, yani kur, talep ve arzla belirlenir." }
        ]
      },
      {
        baslik: "TL talep eğrisi ve arz eğrisi",
        kisa: "Talep eğrisi aşağı, arz eğrisi yukarı eğimlidir; ikisi de TL'nin fiyatına bağlıdır.",
        bloklar: [
          { tip: "grafik", baslik: "TL piyasasının kurulması", xlabel: "TL miktarı (milyar TL / gün)", ylabel: "TL'nin fiyatı ($ / TL)", xmax: 10, ymax: 10,
            xticks: [{ v: 5, label: "100" }], yticks: [{ v: 5, label: "0,05" }],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D", gizli: true },
              { id: "S", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "S", gizli: true },
              { id: "E", tip: "nokta", renk: 2, x: 5, y: 5, etiket: "Denge", kilavuz: true, gizli: true },
              { id: "tD", tip: "yazi", x: 7.4, y: 1.3, metin: "TL pahalı → talep az", gizli: true },
              { id: "tS", tip: "yazi", x: 2.9, y: 8.7, metin: "TL pahalı → arz çok", gizli: true }
            ],
            durumlar: [
              { metin: "TL piyasası: dikey eksende **1 TL'nin dolar fiyatı**, yatay eksende günlük TL miktarı. Henüz eğri yok." },
              { metin: "==Talep (*D*)==: TL pahalandıkça Türk malı yabancı için pahalanır, talep edilen TL azalır. Eğri aşağı eğimli.", goster: ["D", "tD"] },
              { metin: "==Arz (*S*)==: TL pahalandıkça yabancı mal Türk için ucuzlar, ithalat artar, daha çok TL satılır. Eğri yukarı eğimli.", goster: ["S", "tS"], gizle: ["tD"] },
              { metin: "Kesiştikleri yer **denge kuru**: 1 TL = 0,05 $ ve günde 100 milyar TL. Burada talep edilen = arz edilen miktar.", goster: ["E"], gizle: ["tS"] }
            ] },
          { tip: "ikili", sol: { ikon: "🛬", baslik: "TL talebi (*D*): aşağı eğimli", maddeler: ["Yabancılar Türk mal, hizmet ve varlığı almak için TL ister", "TL'nin fiyatı yükselirse Türk malı yabancıya pahalı gelir: talep edilen TL azalır"] },
            sag: { ikon: "🛫", baslik: "TL arzı (*S*): yukarı eğimli", maddeler: ["Türkler yabancı mal, hizmet ve varlık almak için TL satar", "TL'nin fiyatı yükselirse yabancı mal Türke ucuzlar: arz edilen TL artar"] } },
          { tip: "ornek", baslik: "Eğimlerin arkasındaki hesap", durum: "100 TL'lik bir Türk çayı Alman bir alıcıya, 10 $'lık bir tişört ise Türk bir alıcıya satılıyor. TL'nin fiyatı 0,04 $'dan 0,05 $'a çıkarsa ikisi için fiyat ne olur?",
            adimlar: [
              "Çay (dolar cinsinden): 100 × 0,04 = **4 $**; 100 × 0,05 = **5 $**. Çay yabancı için pahalanır, talep edilen TL azalır.",
              "Tişört (TL cinsinden): 10 ÷ 0,04 = **250 TL**; 10 ÷ 0,05 = **200 TL**. Tişört Türk için ucuzlar, ithalat ve arz edilen TL artar."
            ],
            sonuc: "TL pahalandıkça talep edilen TL miktarı azalır (D aşağı), arz edilen TL miktarı artar (S yukarı)." }
        ]
      },
      {
        baslik: "Bir işlem, iki piyasa: TL talebi mi, TL arzı mı?",
        kisa: "Yabancının Türk malı alması TL talebi, Türkün yabancı mal alması TL arzıdır.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "🛬", baslik: "TL talebi", maddeler: ["Yabancılar Türk mal, hizmet ya da varlığı alır", "TL'ye ihtiyaç doğar"] },
            sag: { ikon: "🛫", baslik: "TL arzı", maddeler: ["Türkler yabancı mal, hizmet ya da varlık alır", "TL satılıp başka para alınır"] },
            oyun: [
              { metin: "ABD'li bir turist Antalya'da otel parası öder.", cevap: "sol", neden: "Turistin TL'ye ihtiyacı var: TL talebi." },
              { metin: "Türk öğrenci ABD'den telefon sipariş eder.", cevap: "sag", neden: "Öğrenci TL satıp dolar alır: TL arzı." },
              { metin: "Japon bir yatırımcı Türk devlet tahvili alır.", cevap: "sol", neden: "Türk varlığı almak için TL gerekir: TL talebi." },
              { metin: "Türk bir banka İngiliz hisse senedi alır.", cevap: "sag", neden: "Yabancı varlık için TL satılır: TL arzı." },
              { metin: "Bir ABD'li marka Türk fındığı ithal eder.", cevap: "sol", neden: "Fındık Türk malı: alıcı TL ister, TL talebi." }
            ] },
          { tip: "tablo", baslik: "Aynı işlem iki piyasada: bir paranın talebi, ötekinin arzıdır", head: ["İşlem", "TL piyasası", "Dolar piyasası"], rows: [
              ["ABD'li turist Antalya'da otel parası öder", "TL talebi", "Dolar arzı"],
              ["Türk öğrenci ABD'den telefon alır", "TL arzı", "Dolar talebi"],
              ["ABD'li yatırımcı Türk tahvili alır", "TL talebi", "Dolar arzı"],
              ["Türk banka ABD tahvili alır", "TL arzı", "Dolar talebi"]
            ] },
          { tip: "tuzak", metin: "Para ülkeye girdiği için ihracatın \"TL'yi artırdığını\" düşünüp yön karıştırmak çok yapılan bir hatadır.", yanlis: "Türk malı satmak (ihracat) TL arzını artırır.", dogru: "Yabancı Türk malı almak için TL ister: ihracat ==TL talebini== artırır. İthalat ve yurtdışı varlık alımı ise TL arzıdır." }
        ]
      },
      {
        baslik: "Denge kuru: talep ile arz eşitlenir",
        kisa: "Denge kurunda talep edilen TL miktarı arz edilen TL miktarına eşittir.",
        bloklar: [
          { tip: "tablo", baslik: "TL için talep ve arz çizelgesi", head: ["TL'nin fiyatı ($ / TL)", "Talep edilen TL (milyar)", "Arz edilen TL (milyar)", "Durum"], rows: [
              ["0,04", "120", "80", "Talep > arz"],
              ["0,05", "100", "100", "**Denge**"],
              ["0,06", "80", "120", "Arz > talep"]
            ], vurgu: 1 },
          { tip: "ornek", baslik: "Denge kurunu bul", durum: "Yukarıdaki çizelgede hangi fiyatta talep edilen ve arz edilen TL miktarları eşittir?",
            adimlar: [
              "0,04 $ iken talep 120, arz 80: eşit değil.",
              "0,06 $ iken talep 80, arz 120: eşit değil.",
              "0,05 $ iken talep 100, arz 100: **eşit**."
            ],
            sonuc: "Denge kuru 1 TL = 0,05 $ (1 $ = 20 TL), denge miktarı günde 100 milyar TL." }
        ]
      },
      {
        baslik: "Kur dengeden uzaksa piyasa onu geri çeker",
        kisa: "Denge üstünde TL fazlası kuru indirir, denge altında TL eksiği kuru yükseltir.",
        bloklar: [
          { tip: "grafik", baslik: "TL fazlası ve TL eksikliği", xlabel: "TL miktarı (milyar TL / gün)", ylabel: "TL'nin fiyatı ($ / TL)", xmax: 10, ymax: 10,
            xticks: XT, yticks: [{ v: 4, label: "0,04" }, { v: 5, label: "0,05" }, { v: 6, label: "0,06" }],
            ogeler: [
              { id: "D", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D" },
              { id: "S", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "S" },
              { id: "E", tip: "nokta", renk: 2, x: 5, y: 5, etiket: "Denge", kilavuz: true },
              { id: "pl", tip: "cizgi", renk: 3, kesik: true, from: [0, 6], to: [10, 6], gizli: true },
              { id: "pt", tip: "yazi", x: 8.6, y: 6.45, metin: "Kur: 0,06 $", gizli: true },
              { id: "qd", tip: "nokta", renk: 0, x: 4, y: 6, etiket: "Qd = 80", kilavuz: true, gizli: true },
              { id: "qs", tip: "nokta", renk: 1, x: 6, y: 6, etiket: "Qs = 120", kilavuz: true, gizli: true },
              { id: "gap", tip: "ok", renk: 3, from: [4.2, 6], to: [5.8, 6], gizli: true },
              { id: "gt", tip: "yazi", x: 5, y: 7.4, metin: "TL arz fazlası = 40", gizli: true }
            ],
            durumlar: [
              { metin: "Denge: **0,05 $** ve 100 milyar TL. Kur buradayken talep = arz." },
              { metin: "Kur denge üstüne, 0,06 $'a çıkarsa talep edilen 80, arz edilen 120 olur: **40 milyar TL arz fazlası** (*surplus*).", goster: ["pl", "pt", "qd", "qs", "gap", "gt"] },
              { metin: "Satıcılar elindeki TL'yi elden çıkarmak için fiyat indirir: kur ==0,05 $'a doğru düşer==.", set: { pl: { from: [0, 5], to: [10, 5] }, pt: { y: 5.45, metin: "Kur: 0,05 $" } }, gizle: ["qd", "qs", "gap", "gt"] },
              { metin: "Kur denge altına, 0,04 $'a düşerse talep edilen 120, arz edilen 80 olur: **40 milyar TL eksiklik** (*shortage*).", set: { pl: { from: [0, 4], to: [10, 4] }, pt: { y: 4.45, metin: "Kur: 0,04 $" }, qd: { x: 6, y: 4, etiket: "Qd = 120" }, qs: { x: 4, y: 4, etiket: "Qs = 80" }, gap: { from: [4.2, 4], to: [5.8, 4] }, gt: { y: 3, metin: "TL eksikliği = 40" } }, goster: ["qd", "qs", "gap", "gt"] },
              { metin: "TL almak isteyenler birbirleriyle yarışır: kur ==0,05 $'a doğru yükselir==. Her iki yönde de piyasa kuru dengeye çeker.", set: { pl: { from: [0, 5], to: [10, 5] }, pt: { y: 5.45, metin: "Kur: 0,05 $" } }, gizle: ["qd", "qs", "gap", "gt"] }
            ] },
          { tip: "tuzak", metin: "Kur denge üstündeyken TL pahalıdır: yabancılar az TL ister, Türkler çok TL satmak ister.", yanlis: "Kur denge üstündeyse TL'ye talep fazladır ve kur daha da yükselir.", dogru: "Kur denge üstündeyse ==TL arz fazlası== vardır ve kur düşer; denge altındaysa TL talep fazlası vardır ve kur yükselir." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Bir paranın *demand*'i, yabancıların o ülkenin mal, hizmet ve varlıklarını alma isteğinden gelir; talep eğrisi aşağı eğimlidir.",
              "Bir paranın *supply*'ı, ülke sakinlerinin yabancı mal, hizmet ve varlık almak için parasını satmasından gelir; arz eğrisi yukarı eğimlidir.",
              "Dikey eksen paranın fiyatı (kur), yatay eksen o paranın miktarıdır: TL piyasasında \"TL'nin fiyatı ($ / TL)\".",
              "İhracat ve yabancının varlık alımı TL talebidir; ithalat ve yurtdışı varlık alımı TL arzıdır.",
              "Bir paranın talebi, ötekinin arzıdır: aynı işlem iki piyasada görünür.",
              "Denge kurunda talep edilen miktar = arz edilen miktardır.",
              "Kur denge üstündeyse TL arz fazlası vardır ve kur düşer; denge altındaysa TL talep fazlası vardır ve kur yükselir."
            ] }
        ]
      }
    ],
    sorular: [
      {
        q: "TL piyasasında TL arz eğrisi neden yukarı eğimlidir?",
        opts: [
          "TL pahalandıkça yabancılar Türk malını daha çok ister.",
          "TL pahalandıkça Türk ihracatçılar daha çok mal satar.",
          "TL ucuzladıkça Türkler yurtdışından daha çok mal alır.",
          "TL pahalandıkça yabancı mallar Türkler için ucuzlar, ithalat artar ve daha çok TL satılır."
        ],
        a: 3,
        why: "TL arzı, Türklerin yabancı mal ve varlık alırken sattığı TL'dir. TL'nin değeri yükselince yabancı mallar Türk için ucuzlar, ithalat artar ve arz edilen TL artar. İlk şık TL talebini anlatır; arz ile talebi karıştırmak en çekici hatadır."
      },
      {
        q: "Aşağıdaki işlemlerden hangisi TL'ye olan talebi (*demand for TL*) oluşturur?",
        opts: [
          "Türk bir öğrencinin ABD'den telefon sipariş etmesi",
          "Japon bir yatırımcının Türk devlet tahvili alması",
          "Türk bir bankanın İngiliz hisse senedi alması",
          "Türk bir turistin Londra'da otel parası ödemesi"
        ],
        a: 1,
        why: "Türk tahvili almak isteyen yabancı önce TL'ye ihtiyaç duyar: TL talebi. Diğer üç işlemde Türkler yabancı mal, hizmet ya da varlık için TL satar: TL arzı."
      },
      {
        q: "Şekildeki TL piyasasında kur 1 TL = 0,06 $ düzeyindedir. Hiçbir müdahale yokken ne olur?",
        fig: { type: "graph", xlabel: "TL miktarı (milyar TL / gün)", ylabel: "TL'nin fiyatı ($ / TL)", xmax: 10, ymax: 10,
          lines: [{ from: [1, 9], to: [9, 1], label: "D" }, { from: [1, 1], to: [9, 9], label: "S" }],
          hlines: [{ p: 6, label: "0,06" }],
          xticks: [{ v: 4, label: "80" }, { v: 5, label: "100" }, { v: 6, label: "120" }],
          yticks: [{ v: 5, label: "0,05" }, { v: 6, label: "0,06" }] },
        opts: [
          "TL arz fazlası oluşur; kur düşer.",
          "TL talep fazlası oluşur; kur yükselir.",
          "Piyasa dengededir; kur değişmez.",
          "TL arz fazlası oluşur; kur yükselir."
        ],
        a: 0,
        why: "0,06 $'da talep edilen miktar 80, arz edilen miktar 120'dir: 40 milyar TL arz fazlası. Satıcılar fiyat indirir ve kur 0,05 $'a doğru düşer. Son şık fazlayı doğru bulup yönü yanlış söyler."
      },
      {
        q: "TL piyasasının talep ve arz çizelgesi aşağıdadır. Denge kuru ve denge miktarı nedir?",
        fig: { type: "table", head: ["TL'nin fiyatı ($ / TL)", "Talep edilen (milyar TL)", "Arz edilen (milyar TL)"], rows: [["0,02", "60", "20"], ["0,03", "50", "30"], ["0,04", "40", "40"], ["0,05", "30", "50"]] },
        opts: [
          "0,03 $ ve 50 milyar TL",
          "0,05 $ ve 30 milyar TL",
          "0,04 $ ve 40 milyar TL",
          "0,02 $ ve 20 milyar TL"
        ],
        a: 2,
        why: "Denge, talep edilen ile arz edilen miktarın eşit olduğu satırdır: 0,04 $ iken ikisi de 40. 0,05 $'da arz 50, talep 30 olduğu için 20 milyar TL arz fazlası vardır; dengeden uzaktır."
      },
      {
        q: "Aynı çizelgede kur 0,02 $ düzeyindeyse aşağıdakilerden hangisi doğrudur?",
        fig: { type: "table", head: ["TL'nin fiyatı ($ / TL)", "Talep edilen (milyar TL)", "Arz edilen (milyar TL)"], rows: [["0,02", "60", "20"], ["0,03", "50", "30"], ["0,04", "40", "40"], ["0,05", "30", "50"]] },
        opts: [
          "40 milyar TL arz fazlası vardır; TL değer kaybeder.",
          "40 milyar TL arz fazlası vardır; TL değerlenir.",
          "40 milyar TL talep fazlası vardır; TL değer kaybeder.",
          "40 milyar TL talep fazlası vardır; TL değerlenir."
        ],
        a: 3,
        why: "0,02 $ iken talep 60, arz 20: 40 milyar TL talep fazlası (eksiklik) var. TL almak isteyenler yarışır, TL'nin fiyatı 0,04 $'a doğru yükselir: TL değerlenir. \"Talep fazlası ama değer kaybeder\" şıkkı fazlanın yönünü doğru bulup sonucu ters yazar."
      }
    ]
  };
})();
