/* Kitora not defteri · mc602 · 6.2 Döviz Kurları
   Kaynak: CED Topic 6.2 (MKT-5.A). Blok türleri: /ap/_kit/defter.js başı.
   Varsayımsal kurlar: 1 $ = 20 TL (TL = 0,05 $), değer kazanınca 1 $ = 16 TL (0,0625 $), kaybedince 1 $ = 25 TL (0,04 $).
   Grafik: y ekseninde 1 birim = 0,01 $. */
window.DEFTER = {
  slug: "mc602",
  amac: "Bu konu paraların birbirine karşı fiyatını, yani döviz kurunu anlatıyor. Kurun iki yönlü yazılışını, *appreciation* ile *depreciation* farkını ve bir paranın değerini ötekine göre hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Döviz kuru: bir paranın başka paradaki fiyatı",
      kisa: "Döviz kuru, bir paranın başka bir para cinsinden fiyatıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "1 $", alt: "bir dolar" }, "=",
            { t: "20 TL", alt: "doların TL cinsinden fiyatı" }
          ], aciklama: "Aynı ilişkiyi ters yönden de yazabilirsin: 1 TL = 0,05 $ (5 sent). Bu konudaki rakamlar basitleştirilmiş varsayımlardır." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔄", terim: "Foreign exchange market", tr: "döviz piyasası", tanim: "Bir ülkenin parasının başka bir ülkenin parasıyla takas edildiği piyasa.", ornek: "Erasmus'a giden öğrencinin TL'sini euroya çevirmesi." },
            { ikon: "💱", terim: "Exchange rate", tr: "döviz kuru", tanim: "Bir paranın başka bir para cinsinden fiyatı. Yani ==bir paranın değeri== bu fiyattır.", ornek: "1 $ = 20 TL: doların fiyatı 20 TL." }
          ] },
        { tip: "not", metin: "*Flexible exchange rate* (esnek kur) sisteminde kuru devlet sabitlemez; piyasadaki alıcılar ve satıcılar belirler (6.3'te çizeceğiz)." }
      ]
    },
    {
      baslik: "Kuru iki yönde yazmak ve hesaplamak",
      kisa: "Kuru ters çevirmek için 1'i kura böl; çapraz hesapta çarp.",
      bloklar: [
        { tip: "ornek", baslik: "Kuru ters çevir", durum: "1 $ = 20 TL ise 1 TL kaç dolardır?",
          adimlar: [
            "TL'nin dolar fiyatı, doların TL fiyatının tersidir: 1 ÷ 20.",
            "1 ÷ 20 = **0,05 $**, yani 5 sent.",
            "Kontrol: 100 TL × 0,05 = 5 $; 5 $ × 20 = 100 TL. Tutuyor."
          ],
          sonuc: "1 TL = 0,05 $." },
        { tip: "ornek", baslik: "Üçüncü paraya geç (çapraz hesap)", durum: "1 € = 1,2 $ ve 1 $ = 20 TL (varsayım). 1 € kaç TL eder?",
          adimlar: [
            "Önce euroyu dolara çevir: 1 € = 1,2 $.",
            "Her dolar 20 TL olduğundan 1,2 $ = 1,2 × 20 TL.",
            "1,2 × 20 = **24 TL**."
          ],
          sonuc: "1 € = 24 TL." },
        { tip: "tuzak", metin: "\"Kur yükseldi\" cümlesi hangi paranın fiyatı olduğunu söylemeden anlamsızdır. Önce eksenin ya da cümlenin hangi parayı fiyatladığına bak.", yanlis: "TL cinsinden dolar kuru yükselirse para değer kazanmıştır.", dogru: "Doların TL fiyatı artıyorsa ==dolar== değerlenir, TL değer kaybeder. TL'yi değerlendiren, TL'nin dolar fiyatının artmasıdır." }
      ]
    },
    {
      baslik: "Değer kazanma ve değer kaybetme",
      kisa: "Bir para öteki karşısında pahalanırsa *appreciation*, ucuzlarsa *depreciation*.",
      bloklar: [
        { tip: "grafik", baslik: "TL'nin dolar karşısındaki değeri zamanla nasıl değişir?", xlabel: "Zaman (ay)", ylabel: "TL'nin fiyatı ($ / TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 3, label: "3" }, { v: 5, label: "5" }, { v: 8, label: "8" }],
          yticks: [{ v: 4, label: "0,04" }, { v: 5, label: "0,05" }, { v: 6.25, label: "0,0625" }],
          ogeler: [
            { id: "sa", tip: "cizgi", renk: 0, from: [1, 5], to: [3, 5] },
            { id: "sb", tip: "cizgi", renk: 2, from: [3, 5], to: [5, 6.25], gizli: true },
            { id: "sc", tip: "cizgi", renk: 3, from: [5, 6.25], to: [8, 4], gizli: true },
            { id: "n1", tip: "nokta", renk: 0, x: 3, y: 5, etiket: "1 $ = 20 TL", kilavuz: true },
            { id: "n2", tip: "nokta", renk: 2, x: 5, y: 6.25, etiket: "1 $ = 16 TL", kilavuz: true, gizli: true },
            { id: "n3", tip: "nokta", renk: 3, x: 8, y: 4, etiket: "1 $ = 25 TL", kilavuz: true, gizli: true },
            { id: "t1", tip: "yazi", x: 3.2, y: 7.4, metin: "TL değerlendi ↑", hiza: "start", gizli: true },
            { id: "t2", tip: "yazi", x: 6.4, y: 6.9, metin: "TL değer yitirdi ↓", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: TL'nin fiyatı 0,05 $. Yani ==1 $ = 20 TL==." },
            { metin: "TL'nin dolar fiyatı 0,05 → 0,0625 $'a çıkar. Bu *appreciation* (değer kazanma): artık 1 $ için 16 TL yeter.", goster: ["sb", "n2", "t1"] },
            { metin: "Sonra TL'nin fiyatı 0,0625 → 0,04 $'a düşer. Bu *depreciation* (değer kaybetme): şimdi 1 $ için 25 TL gerekir.", goster: ["sc", "n3", "t2"], gizle: ["t1"] },
            { metin: "Kural: ==TL'nin dolar fiyatı artarsa TL değerlenir; azalırsa değer kaybeder.== Dolar fiyatı ters yöne gider." }
          ] },
        { tip: "tablo", baslik: "Aynı olay, iki paranın gözüyle", head: ["Durum", "TL'nin $ fiyatı", "$'ın TL fiyatı", "TL", "$"], rows: [
            ["Başlangıç", "0,05", "20", "–", "–"],
            ["TL değerlendi", "0,0625 ↑", "16 ↓", "*Appreciation*", "*Depreciation*"],
            ["TL değer yitirdi", "0,04 ↓", "25 ↑", "*Depreciation*", "*Appreciation*"]
          ], vurgu: 1 }
      ]
    },
    {
      baslik: "Ayna kuralı: biri kazanırsa öteki kaybeder",
      kisa: "Bir para değer kazanırken karşısındaki para aynı anda değer kaybeder.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📈", baslik: "*Appreciation* (değer kazanma)", maddeler: ["Para, öteki paranın daha çok birimine eşit olur", "Para birimini fiyatlayan sayı artar"] },
          sag: { ikon: "📉", baslik: "*Depreciation* (değer kaybetme)", maddeler: ["Para, öteki paranın daha az birimine eşit olur", "Para birimini fiyatlayan sayı azalır"] },
          oyun: [
            { metin: "1 $ = 20 TL iken 1 $ = 25 TL oldu. TL için ne oldu?", cevap: "sag", neden: "TL'nin dolar fiyatı 0,05'ten 0,04'e düştü: *depreciation*." },
            { metin: "1 TL = 0,05 $ iken 1 TL = 0,0625 $ oldu. TL için ne oldu?", cevap: "sol", neden: "TL'nin dolar fiyatı arttı: *appreciation*." },
            { metin: "1 $ = 20 TL iken 1 $ = 16 TL oldu. Dolar için ne oldu?", cevap: "sag", neden: "Dolar daha az TL ediyor: dolar için *depreciation*." },
            { metin: "1 € = 24 TL iken 1 € = 30 TL oldu. Euro için ne oldu?", cevap: "sol", neden: "Euronun TL fiyatı arttı: euro için *appreciation*." },
            { metin: "Bir TL ile artık daha çok dolar alabiliyorsun.", cevap: "sol", neden: "TL daha çok dolara eşit: TL için *appreciation*." }
          ] },
        { tip: "not", metin: "Yönler hep ters, ama yüzdeler aynı olmak zorunda değil. TL 0,05 → 0,0625 $ olunca TL'nin değeri %25 artar; aynı olayda doların TL fiyatı 20 → 16 olur, yani dolar %20 değer kaybeder." }
      ]
    },
    {
      baslik: "Kur alışveriş sepetini nasıl değiştirir?",
      kisa: "Para değer kaybedince yabancı mal pahalanır, değer kazanınca ucuzlar.",
      bloklar: [
        { tip: "tablo", baslik: "ABD'de 100 $ olan bir spor ayakkabıyı Türkiye'de TL ile almak", head: ["Kur", "TL'nin durumu", "Ayakkabı (TL)"], rows: [
            ["1 $ = 16 TL", "Değerlendi", "1.600"],
            ["1 $ = 20 TL", "Başlangıç", "2.000"],
            ["1 $ = 25 TL", "Değer kaybetti", "2.500"]
          ], vurgu: 1 },
        { tip: "ornek", baslik: "TL değer kaybederse ayakkabı ne kadar pahalanır?", durum: "Kur 1 $ = 20 TL iken 1 $ = 25 TL oluyor. 100 $'lık ayakkabının TL fiyatı ne olur?",
          adimlar: [
            "Önce: 100 × 20 = **2.000 TL**.",
            "Sonra: 100 × 25 = **2.500 TL**.",
            "Artış: 2.500 ÷ 2.000 = 1,25, yani %25 pahalanma."
          ],
          sonuc: "TL değer kaybedince ithal ayakkabı Türkiye'deki alıcı için %25 pahalanır. TL değerlenseydi (1 $ = 16 TL) 1.600 TL'ye düşerdi." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Exchange rate*, bir paranın başka bir para cinsinden fiyatıdır; paralar *foreign exchange market*'te takas edilir.",
            "Kur iki yönde yazılır: 1 $ = 20 TL ise 1 TL = 1/20 = 0,05 $.",
            "Çapraz hesapta çarp: 1 € = 1,2 $ ve 1 $ = 20 TL ise 1 € = 24 TL.",
            "Bir paranın öteki cinsinden fiyatı artarsa *appreciation*, azalırsa *depreciation* olur.",
            "Biri değer kazanırken karşısındaki değer kaybeder: TL değerlenirse dolar değer kaybeder.",
            "Soruda önce hangi paranın fiyatı sorulduğuna bak; \"kur yükseldi\" demek paranın değerlendiği anlamına gelmez.",
            "Para değer kaybedince yabancı mal o ülkede pahalanır; değer kazanınca ucuzlar."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Kur 1 $ = 20 TL iken 1 $ = 16 TL oluyor. Aşağıdakilerden hangisi doğrudur?",
      opts: [
        "Dolar değer kazanmıştır, TL değer kaybetmiştir.",
        "İki para da değer kaybetmiştir.",
        "TL dolar karşısında değer kazanmıştır.",
        "Kur düştüğü için TL değer kaybetmiştir."
      ],
      a: 2,
      why: "1 $ = 16 TL demek 1 TL = 0,0625 $ demektir; TL'nin dolar fiyatı 0,05'ten 0,0625'e çıkmıştır: TL değer kazandı (*appreciation*). \"Kur düştü, o halde TL değer kaybetti\" şıkkı çekicidir ama kur burada doların TL fiyatıdır ve düşen şey dolardır."
    },
    {
      q: "1 € = 1,5 $ ve 1 $ = 20 TL ise 1 € kaç TL eder?",
      opts: ["30 TL", "13,3 TL", "21,5 TL", "0,075 TL"],
      a: 0,
      why: "Euroyu önce dolara, sonra TL'ye çevir: 1,5 × 20 = 30 TL. 13,3 şıkkı (20 ÷ 1,5) kuru yanlış yönde bölmekten çıkar."
    },
    {
      q: "Şekilde TL'nin dolar cinsinden fiyatı zaman içinde gösterilmiştir. t₁ anından t₂ anına ne olmuştur?",
      fig: { type: "graph", xlabel: "Zaman", ylabel: "TL'nin fiyatı ($ / TL)", xmax: 10, ymax: 10,
        lines: [{ from: [2, 6], to: [8, 3], label: "TL" }],
        points: [{ q: 2, p: 6, label: "t₁" }, { q: 8, p: 3, label: "t₂" }],
        xticks: [{ v: 2, label: "t₁" }, { v: 8, label: "t₂" }] },
      opts: [
        "TL değer kazanmış, 1 $ için gereken TL azalmıştır.",
        "TL değer kaybetmiş, 1 $ için gereken TL azalmıştır.",
        "TL değer kazanmış, dolar değer kaybetmiştir.",
        "TL değer kaybetmiş, dolar değer kazanmıştır."
      ],
      a: 3,
      why: "TL'nin dolar fiyatı düşüyor: TL *depreciation* yaşar. Bu aynı anda 1 $ için daha çok TL gerektiği, yani doların *appreciation* yaşadığı demektir. B şıkkı kendi içinde çelişir: TL değer kaybederse 1 $ için gereken TL azalmaz, artar."
    },
    {
      q: "TL'nin dolar fiyatı 0,04 $'dan 0,05 $'a çıkıyor. Doların TL fiyatı ve TL'nin durumu için hangisi doğrudur?",
      opts: [
        "1 $ 20 TL'den 25 TL'ye çıkar; TL değer kazanır.",
        "1 $ 25 TL'den 20 TL'ye düşer; TL değer kazanır.",
        "1 $ 25 TL'den 20 TL'ye düşer; TL değer kaybeder.",
        "1 $ 20 TL'den 25 TL'ye çıkar; TL değer kaybeder."
      ],
      a: 1,
      why: "1 ÷ 0,04 = 25 TL ve 1 ÷ 0,05 = 20 TL. TL'nin dolar fiyatı arttığı için TL değerlenir ve 1 $'a daha az TL yeter. Tersini seçmek, kuru ters çevirmeyi unutmaktan gelir."
    },
    {
      q: "ABD'de 50 $ olan bir oyuncağı Türkiye'de TL ile alan bir mağaza için kur 1 $ = 20 TL iken 1 $ = 25 TL olmuştur. Ne olur?",
      opts: [
        "TL fiyatı 1.000 TL'den 800 TL'ye düşer; TL değer kazanmıştır.",
        "TL fiyatı 1.000 TL'den 1.250 TL'ye çıkar; TL değer kazanmıştır.",
        "TL fiyatı 1.000 TL'den 1.250 TL'ye çıkar; TL değer kaybetmiştir.",
        "TL fiyatı değişmez; kur yalnızca dolar fiyatını etkiler."
      ],
      a: 2,
      why: "50 × 20 = 1.000 TL iken 50 × 25 = 1.250 TL olur. 1 $'a daha çok TL gerektiği için TL değer kaybetmiştir (*depreciation*) ve ithal mal pahalanır. B şıkkı fiyat artışını doğru bulup değer kazanma yönünü yanlış söyler."
    }
  ]
};
