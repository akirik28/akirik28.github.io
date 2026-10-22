/* Kitora not defteri · mi209 · 2.9 Uluslararası Ticaret ve Kamu Politikası
   Kaynak: AP Micro CED, Topic 2.9 (POL-1.B.1–3). Blok türleri: /ap/_kit/defter.js başı.
   Sayısal taban: D: P = 100 − Q, S: P = Q; otarşi dengesi (50 adet, 50 TL). Grafikte 1 birim = 10 TL ve 10 adet.
   Not: CED, kota grafiğinin çizimini sınav dışı bırakır; kotanın miktar etkisi kapsam içidir. */
window.DEFTER = (function () {
  /* Yardımcı: yalnız `acik` listesindeki ögeler görünür; geri kalan ögeler gizlenir (set, kümülatif) */
  function graf(o) {
    var ids = o.ogeler.map(function (e) { return e.id; });
    o.durumlar = o.durumlar.map(function (d) {
      var r = { metin: d[0], goster: d[1], gizle: ids.filter(function (i) { return d[1].indexOf(i) < 0; }) };
      if (d[2]) r.set = d[2];
      return r;
    });
    o.tip = "grafik";
    return o;
  }
  var TX = [{ v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }];
  var TY3 = [{ v: 3, label: "30" }, { v: 4, label: "40" }, { v: 5, label: "50" }];
  var TY7 = [{ v: 5, label: "50" }, { v: 7, label: "70" }];
  function DS() {
    return [
      { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [10, 0], etiket: "D" },
      { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [10, 10], etiket: "S" }
    ];
  }

  return {
    slug: "mi209",
    amac: "Bu konu uluslararası ticaretin ve ticaret politikalarının piyasayı nasıl değiştirdiğini anlatıyor: kapalı ekonomi (*autarky*) ile dünya fiyatı, ithalat ve ihracat, tüketici ve üretici rantındaki kazanç ve kayıplar, *tariff* (gümrük vergisi) ve *quota* (kota) sonuçlarını öğreneceksin.",
    bolumler: [
      {
        baslik: "Kapalı ekonomi, dünya fiyatı, ithalat ve ihracat",
        kisa: "Ticarete açılınca iç fiyat dünya fiyatına eşitlenir; aradaki boşluğu ticaret doldurur.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🔒", terim: "Autarky", tr: "kapalı ekonomi", tanim: "Başka ülkelerle hiç ticaret yapılmayan durum. Fiyat ve miktar yalnız yerli arz ve talepten çıkar.", ornek: "Denge: 50 TL, 50 adet." },
              { ikon: "🌍", terim: "World price", tr: "dünya fiyatı", tanim: "Dünya piyasasında oluşan fiyat. Küçük bir ülke bu fiyatı değiştiremez; ticarete açılınca iç fiyat dünya fiyatına eşitlenir.", ornek: "Dünya fiyatı 30 TL ise Türkiye'de de 30 TL olur." },
              { ikon: "🚢", terim: "Imports / exports", tr: "ithalat / ihracat", tanim: "İthalat = iç talep − iç arz (Qd − Qs). İhracat = iç arz − iç talep (Qs − Qd).", ornek: "70 − 30 = 40 adet ithalat." }
            ] },
          { tip: "tablo", baslik: "Dünya fiyatı otarşi fiyatıyla karşılaştırılır", head: ["Durum", "Ülke", "Boşluk", "Kazanan / kaybeden"], rows: [
              ["Dünya fiyatı < otarşi fiyatı", "İthalatçı", "Qd > Qs: açığı ithalat kapatır", "Tüketici kazanır, yerli üretici kaybeder"],
              ["Dünya fiyatı > otarşi fiyatı", "İhracatçı", "Qs > Qd: fazlayı ihracat satar", "Üretici kazanır, yerli tüketici kaybeder"]
            ], not: "Her iki durumda da kazananın kazancı kaybedenin kaybından büyüktür: toplam ekonomik rant artar." }
        ]
      },
      {
        baslik: "İthalatçı ülke: serbest ticaretin etkisi",
        kisa: "Dünya fiyatı düşükse tüketici kazanır, yerli üretici kaybeder, toplam rant artar.",
        bloklar: [
          graf({ baslik: "Dünya fiyatı 30 TL: ithalat başlıyor", xlabel: "Miktar (adet)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 11, xticks: TX, yticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }],
            ogeler: [
              { id: "A", tip: "alan", renk: 1, noktalar: [[0, 3], [3, 3], [5, 5], [0, 5]] },
              { id: "B", tip: "alan", renk: 3, noktalar: [[3, 3], [5, 5], [5, 3]] },
              { id: "C", tip: "alan", renk: 3, noktalar: [[5, 5], [7, 3], [5, 3]] }
            ].concat(DS()).concat([
              { id: "Ea", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "otarşi", kilavuz: true },
              { id: "pw", tip: "cizgi", renk: 2, kesik: true, from: [0, 3], to: [10, 3], etiket: "Pw" },
              { id: "qs", tip: "nokta", renk: 1, x: 3, y: 3, etiket: "Qs" },
              { id: "qd", tip: "nokta", renk: 0, x: 7, y: 3, etiket: "Qd" },
              { id: "tim", tip: "yazi", x: 5, y: 2.1, metin: "ithalat = 40" },
              { id: "tA", tip: "yazi", x: 1.4, y: 4, metin: "A" },
              { id: "tB", tip: "yazi", x: 4.45, y: 3.75, metin: "B" },
              { id: "tC", tip: "yazi", x: 5.6, y: 3.6, metin: "C" }
            ]),
            durumlar: [
              ["Kapalı ekonomide denge 50 TL ve 50 adet; CS = PS = 1250 TL.", ["D", "S", "Ea"]],
              ["Dünya fiyatı 30 TL. İç fiyat 30'a iner: yerli üretici ==30 adet== üretir (Qs), alıcılar ==70 adet== ister (Qd). Aradaki ==40 adet ithal edilir==.", ["D", "S", "Ea", "pw", "qs", "qd", "tim"]],
              ["Fiyatın 50'den 30'a düşmesi yerli üreticiden A alanı kadar rant alır: ==800 TL==. Bu tutar tüketiciye geçer.", ["D", "S", "Ea", "pw", "A", "tA"]],
              ["Tüketici rantı artışı = A + B + C = 1200 TL. Üretici kaybı = A = 800 TL. Net kazanç = B + C = ==400 TL== (200 + 200). Toplam rant 2500'den 2900'e çıkar.", ["D", "S", "Ea", "pw", "A", "tA", "B", "tB", "C", "tC"]]
            ] }),
          { tip: "tablo", baslik: "Otarşiden serbest ticarete", head: ["", "Otarşi", "Serbest ticaret (Pw = 30)", "Değişim"], rows: [
              ["İç fiyat", "50", "30", "−20"], ["Yerli üretim", "50", "30", "−20"], ["İç tüketim", "50", "70", "+20"], ["İthalat", "0", "40", "+40"],
              ["Tüketici rantı", "1250", "2450", "+1200"], ["Üretici rantı", "1250", "450", "−800"], ["Toplam rant", "2500", "2900", "+400"]
            ], vurgu: 6 },
          { tip: "tuzak", metin: "Ticaretin kazananları ve kaybedenleri vardır.", yanlis: "Serbest ticaret herkesi kazandırır.", dogru: "İthalatçı ülkede ==yerli üretici kaybeder==, tüketici kazanır; ==toplam rant artar==. Kaybedenlerin tazmin edilmesi ayrı bir politika meselesidir." }
        ]
      },
      {
        baslik: "İhracatçı ülke: serbest ticaretin etkisi",
        kisa: "Dünya fiyatı yüksekse üretici kazanır, yerli tüketici kaybeder, toplam rant artar.",
        bloklar: [
          graf({ baslik: "Dünya fiyatı 70 TL: ihracat başlıyor", xlabel: "Miktar (adet)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 11, xticks: TX, yticks: TY7,
            ogeler: [
              { id: "A", tip: "alan", renk: 0, noktalar: [[0, 5], [0, 7], [3, 7], [5, 5]] },
              { id: "B", tip: "alan", renk: 3, noktalar: [[3, 7], [5, 7], [5, 5]] },
              { id: "C", tip: "alan", renk: 3, noktalar: [[5, 5], [5, 7], [7, 7]] }
            ].concat(DS()).concat([
              { id: "Ea", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "otarşi", kilavuz: true },
              { id: "pw", tip: "cizgi", renk: 2, kesik: true, from: [0, 7], to: [10, 7], etiket: "Pw" },
              { id: "qd", tip: "nokta", renk: 0, x: 3, y: 7, etiket: "Qd" },
              { id: "qs", tip: "nokta", renk: 1, x: 7, y: 7, etiket: "Qs" },
              { id: "tim", tip: "yazi", x: 5, y: 7.9, metin: "ihracat = 40" },
              { id: "tA", tip: "yazi", x: 1.7, y: 6, metin: "A" },
              { id: "tB", tip: "yazi", x: 4.35, y: 6.4, metin: "B" },
              { id: "tC", tip: "yazi", x: 5.65, y: 6.4, metin: "C" }
            ]),
            durumlar: [
              ["Kapalı ekonomide denge 50 TL ve 50 adet; CS = PS = 1250 TL.", ["D", "S", "Ea"]],
              ["Dünya fiyatı 70 TL. İç fiyat 70'e çıkar: yerli üretici ==70 adet== üretir (Qs), yerli alıcılar ==30 adet== ister (Qd). Fark ==40 adet ihraç edilir==.", ["D", "S", "Ea", "pw", "qd", "qs", "tim"]],
              ["Fiyat 50'den 70'e çıkınca yerli tüketicilerin kaybı A alanı: ==800 TL==. Bu tutar üreticiye geçer.", ["D", "S", "Ea", "pw", "A", "tA"]],
              ["Üretici rantı artışı = A + B + C = 1200 TL. Tüketici kaybı = A = 800 TL. Net kazanç = B + C = ==400 TL==. Toplam rant 2900.", ["D", "S", "Ea", "pw", "A", "tA", "B", "tB", "C", "tC"]]
            ] }),
          { tip: "ikili", sol: { ikon: "📥", baslik: "İthalatçı ülke", maddeler: ["Dünya fiyatı iç denge fiyatından düşük", "Qd > Qs; tüketici kazanır"] },
            sag: { ikon: "📤", baslik: "İhracatçı ülke", maddeler: ["Dünya fiyatı iç denge fiyatından yüksek", "Qs > Qd; üretici kazanır"] },
            oyun: [
              { metin: "Dünya piyasasında telefon, Türkiye'deki otarşi fiyatından ucuz.", cevap: "sol", neden: "Dünya fiyatı iç denge fiyatından düşük: ithalatçı." },
              { metin: "Türk fındığı dünyada Türkiye'deki otarşi fiyatından pahalıya satılıyor.", cevap: "sag", neden: "Dünya fiyatı iç denge fiyatından yüksek: ihracatçı." },
              { metin: "Ticaretten sonra yerli tüketici kaybediyor, üretici kazanıyor.", cevap: "sag", neden: "İç fiyat yükseldi: ihracatçı ülke." },
              { metin: "Ticaretten sonra yerli üretici üretimini kısıyor, iç tüketim artıyor.", cevap: "sol", neden: "İç fiyat düştü: ithalatçı ülke." }
            ] }
        ]
      },
      {
        baslik: "Gümrük vergisi (*tariff*)",
        kisa: "Tarife iç fiyatı yükseltir, ithalatı azaltır, devlete gelir sağlar, toplam rantı düşürür.",
        bloklar: [
          graf({ baslik: "İthal mala 10 TL tarife", xlabel: "Miktar (adet)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 11, xticks: [{ v: 3, label: "30" }, { v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }, { v: 7, label: "70" }], yticks: TY3,
            ogeler: [
              { id: "rev", tip: "alan", renk: 2, noktalar: [[4, 3], [6, 3], [6, 4], [4, 4]] },
              { id: "dl", tip: "alan", renk: 3, noktalar: [[3, 3], [4, 4], [4, 3]] },
              { id: "dr", tip: "alan", renk: 3, noktalar: [[6, 4], [7, 3], [6, 3]] }
            ].concat(DS()).concat([
              { id: "pw", tip: "cizgi", renk: 2, kesik: true, from: [0, 3], to: [10, 3], etiket: "Pw" },
              { id: "pt", tip: "cizgi", renk: 2, from: [0, 4], to: [10, 4], etiket: "Pw + t" },
              { id: "qs", tip: "nokta", renk: 1, x: 3, y: 3, etiket: "Qs" },
              { id: "qd", tip: "nokta", renk: 0, x: 7, y: 3, etiket: "Qd" },
              { id: "Ea", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "iç denge", kilavuz: true },
              { id: "tr", tip: "yazi", x: 5, y: 3.35, metin: "gelir" }
            ]),
            durumlar: [
              ["Serbest ticaret: Pw = 30. Üretim 30, tüketim 70, ithalat 40.", ["D", "S", "pw", "qs", "qd"], { qs: { x: 3, y: 3 }, qd: { x: 7, y: 3 } }],
              ["Hükümet ithal mala adet başına ==10 TL tarife== koyuyor: iç fiyat 40 TL olur. Yerli üretim 40'a çıkar, iç tüketim 60'a düşer; ==ithalat 20 adede iner==.", ["D", "S", "pw", "pt", "qs", "qd"], { qs: { x: 4, y: 4 }, qd: { x: 6, y: 4 } }],
              ["Devletin tarife geliri = tarife × ithalat = 10 × 20 = ==200 TL== (dikdörtgen).", ["D", "S", "pw", "pt", "qs", "qd", "rev", "tr"]],
              ["İki küçük üçgen ==DWL==: soldaki, ithalat varken daha pahalıya üretilen yerli birimler (½ × 10 × 10 = 50); sağdaki, kaçan alımlar (50). Toplam DWL = 100 TL.", ["D", "S", "pw", "pt", "qs", "qd", "rev", "tr", "dl", "dr"]],
              ["Tarife 20 TL olsaydı iç fiyat 50 TL (otarşi fiyatı) olur ve ==ithalat sıfırlanır==. Buna yasaklayıcı tarife denir; devlet geliri de sıfırdır.", ["D", "S", "pw", "pt", "Ea"], { pt: { from: [0, 5], to: [10, 5] } }]
            ] }),
          { tip: "tablo", baslik: "Üç senaryo", head: ["", "Serbest ticaret", "Tarife 10 TL", "Tarife 20 TL"], rows: [
              ["İç fiyat", "30", "40", "50"], ["Yerli üretim", "30", "40", "50"], ["İç tüketim", "70", "60", "50"], ["İthalat", "40", "20", "0"],
              ["Tüketici rantı", "2450", "1800", "1250"], ["Üretici rantı", "450", "800", "1250"], ["Devlet geliri", "0", "200", "0"], ["Toplam rant", "2900", "2800", "2500"]
            ], vurgu: 7 },
          { tip: "tuzak", metin: "Tarifenin kimleri kazandırdığına dikkat.", yanlis: "Tarife yerli üreticiyi kazandırdığı için toplam refahı artırır.", dogru: "Tarife yerli üreticiye (+350) ve devlete (+200) kazandırır, tüketiciden ise (−650) alır. Net: ==toplam ekonomik rant azalır== (2900 → 2800); fark DWL'dir." }
        ]
      },
      {
        baslik: "Kota (*quota*) ve tarife karşılaştırması",
        kisa: "Kota, ithalat miktarını sınırlayarak tarife gibi iç fiyatı yükseltir.",
        bloklar: [
          graf({ baslik: "İthalat kotası: en fazla 20 adet", xlabel: "Miktar (adet)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 11, xticks: [{ v: 3, label: "30" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 7, label: "70" }], yticks: TY3,
            ogeler: [
              { id: "rent", tip: "alan", renk: 2, noktalar: [[4, 3], [6, 3], [6, 4], [4, 4]] },
              { id: "dl", tip: "alan", renk: 3, noktalar: [[3, 3], [4, 4], [4, 3]] },
              { id: "dr", tip: "alan", renk: 3, noktalar: [[6, 4], [7, 3], [6, 3]] }
            ].concat(DS()).concat([
              { id: "pw", tip: "cizgi", renk: 2, kesik: true, from: [0, 3], to: [10, 3], etiket: "Pw" },
              { id: "pi", tip: "cizgi", renk: 2, from: [0, 4], to: [10, 4], etiket: "iç fiyat" },
              { id: "qs", tip: "nokta", renk: 1, x: 3, y: 3, etiket: "Qs" },
              { id: "qd", tip: "nokta", renk: 0, x: 7, y: 3, etiket: "Qd" },
              { id: "kq", tip: "yazi", x: 5, y: 2.1, metin: "ithalat = 40" },
              { id: "tr", tip: "yazi", x: 5, y: 3.35, metin: "kota rantı" }
            ]),
            durumlar: [
              ["Serbest ticaret: Pw = 30, ithalat 40 adet.", ["D", "S", "pw", "qs", "qd", "kq"], { qs: { x: 3, y: 3 }, qd: { x: 7, y: 3 }, kq: { metin: "ithalat = 40" } }],
              ["Devlet ithalatı en fazla 20 adetle sınırlıyor. Yurt içinde Qd − Qs = 20 olduğu fiyat ==40 TL==: yerli üretim 40'a çıkar, tüketim 60'a düşer.", ["D", "S", "pw", "pi", "qs", "qd", "kq"], { qs: { x: 4, y: 4 }, qd: { x: 6, y: 4 }, kq: { metin: "kota: 20" } }],
              ["Dikdörtgen (40 − 30) × 20 = 200 TL, ithalat iznine sahip olanlara kalır: ==kota rantı==. Tarifede aynı alan devlete gider.", ["D", "S", "pw", "pi", "qs", "qd", "kq", "rent", "tr"]],
              ["Yerli üretimin artması ve tüketimin azalması aynı iki üçgeni doğurur: DWL = ==100 TL==.", ["D", "S", "pw", "pi", "qs", "qd", "kq", "rent", "tr", "dl", "dr"]]
            ] }),
          { tip: "ikili", sol: { ikon: "🧾", baslik: "*Tariff*", maddeler: ["İthal mala birim başına vergi", "Fiyat yoluyla ithalatı azaltır"] },
            sag: { ikon: "🔢", baslik: "*Quota*", maddeler: ["İthalat miktarına yasal sınır", "Miktarı doğrudan sınırlar"] },
            oyun: [
              { metin: "İthal çeliğe ton başına 100 dolar vergi konuyor.", cevap: "sol", neden: "Birim başına vergi: tarife." },
              { metin: "Devlet yılda yalnızca 20 bin otomobil ithalatına izin veriyor.", cevap: "sag", neden: "Miktar sınırı: kota." },
              { metin: "İthal malın maliyetini artırarak ithalatı caydırıyor.", cevap: "sol", neden: "Fiyat yoluyla çalışır: tarife." },
              { metin: "İthalatı sayısal bir tavanla yasaklıyor.", cevap: "sag", neden: "Miktar sınırı: kota." }
            ] },
          { tip: "tuzak", metin: "Kotanın grafiğini çizmek sınavda istenmez; etkisini yazmak ise istenebilir.", yanlis: "Kota yalnızca ithalatı etkiler, iç fiyat aynı kalır.", dogru: "Kota ==ithalatı azaltır, iç fiyatı yükseltir, yerli üretimi artırır==, tüketici rantını ve toplam ekonomik rantı düşürür. Tarifeden fark: rant devlete değil izin sahiplerine gider." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Ticaretsiz (*autarky*) fiyatı yerli arz-talep belirler; ticarete açılınca iç fiyat dünya fiyatına eşitlenir ve açığı ya da fazlayı ticaret kapatır.",
              "Dünya fiyatı düşükse ülke ithalatçı olur: ithalat = Qd − Qs; CS artar, PS azalır, toplam rant artar.",
              "Dünya fiyatı yüksekse ülke ihracatçı olur: ihracat = Qs − Qd; PS artar, CS azalır, toplam rant artar.",
              "Serbest ticarette kazancın bir kısmı gruplar arasında transferdir, B + C üçgenleri net kazançtır.",
              "Tarife iç fiyatı artırır, ithalatı azaltır, yerli üretimi artırır, tüketimi azaltır; devlet geliri = tarife × ithalat.",
              "Tarife CS'yi düşürür, PS'yi artırır; toplam ekonomik rant azalır (iki üçgen DWL).",
              "Kota ithalat miktarını sınırlar, tarife gibi iç fiyatı yükseltir; rant izin sahibine gider. Kota grafiği sınav dışıdır, etkisi içidir.",
              "Yasaklayıcı tarife, iç fiyatı otarşi fiyatına getirir: ithalat sıfır."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Grafikte talep P = 100 − Q, arz P = Q ve her birim 10 TL ile 10 adedi gösteriyor. Dünya fiyatı 30 TL. Ülke serbest ticarete açılırsa kaç adet ithalat yapılır?",
        fig: { type: "graph", xlabel: "Miktar (adet)", ylabel: "Fiyat (TL)", xmax: 12, ymax: 11, lines: [{ from: [0, 10], to: [10, 0], label: "D" }, { from: [0, 0], to: [10, 10], label: "S" }], hlines: [{ p: 3, label: "Pw = 30" }], xticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }], yticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }] },
        opts: ["20", "30", "70", "40"], a: 3,
        why: "30 TL'de Qd = 100 − 30 = 70, Qs = 30; ithalat = 70 − 30 = 40. 30, yerli üretimdir; 70 ise toplam iç tüketimdir; ikisi de ithalat değildir." },
      { q: "Bir ülke serbest ticarete açılıyor ve dünya fiyatı otarşi (ticaretsiz) denge fiyatından düşük. Sonuç hangisidir?",
        opts: ["Tüketici rantı artar, üretici rantı azalır, toplam ekonomik rant artar.", "Tüketici rantı azalır, üretici rantı artar, toplam ekonomik rant azalır.", "Hem tüketici hem üretici rantı artar.", "Tüketici rantı artar, üretici rantı değişmez."], a: 0,
        why: "İç fiyat düşer: tüketici kazanır, yerli üretici kaybeder; kazanç kayıptan büyük olduğu için toplam rant artar. İkisinin birden artması mümkün değildir: bir grubun kazancı diğerinin kaybıyla bağlantılıdır." },
      { q: "Tabloya göre dünya fiyatı 30 TL iken hükümet ithal mala adet başına 10 TL tarife koyuyor. Devletin tarife geliri kaç TL olur?",
        fig: { type: "table", head: ["", "Tarifesiz", "Tarifeli"], rows: [["İç fiyat (TL)", 30, 40], ["Yerli üretim", 30, 40], ["İç tüketim", 70, 60]], caption: "Tarifenin etkisi" },
        opts: ["100", "200", "400", "600"], a: 1,
        why: "İthalat = 60 − 40 = 20 adet. Gelir = tarife × ithalat = 10 × 20 = 200 TL. 600 TL tüketimle (60) çarpmaktan, 100 TL ise DWL'den çıkar; ikisi de gelir değildir." },
      { q: "Rekabetçi bir piyasada ithalata tarife konuyor. Aşağıdakilerden hangisi doğrudur?",
        opts: ["İç fiyat düşer; ithalat azalır.", "İç fiyat artar; ithalat artar; toplam rant artar.", "İç fiyat artar, ithalat azalır, tüketici rantı azalır ve toplam ekonomik rant azalır.", "İç fiyat artar, ithalat azalır ve toplam ekonomik rant artar."], a: 2,
        why: "Tarife iç fiyatı yükseltir, ithalatı ve iç tüketimi azaltır, yerli üretimi artırır. Tüketici rantı düşer; yerli üretici ve devlet kazanır ama toplam rant azalır (DWL). Son şık fiyat ve ithalat yönünü doğru söyler ama toplam rantta yanılır." },
      { q: "Bir ülkede dünya fiyatı, ticaretsiz iç denge fiyatından yüksektir. Serbest ticarete açılırsa ne olur?",
        opts: ["Tüketici rantı artar, üretici rantı azalır.", "Tüketici rantı azalır, üretici rantı artar ve toplam ekonomik rant artar.", "Hem tüketici hem üretici rantı azalır.", "İthalat başlar ve toplam rant azalır."], a: 1,
        why: "İç fiyat dünya fiyatına yükselir: ülke ihracatçı olur, üreticinin kazancı tüketicinin kaybından büyüktür; toplam rant artar. İthalat, dünya fiyatının düşük olduğu durumdadır; ilk şık o durumun sonucudur." }
    ]
  };
})();
