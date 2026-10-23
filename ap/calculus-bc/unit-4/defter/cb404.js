/* Kitora not defteri · cb404 · 4.4–4.5 İlişkili Oranlar
   Videosuz ünite: CED 4.4 (Introduction to Related Rates) ve 4.5 (Solving Related Rates Problems). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb404",
  amac: "Bu konu *related rates* yani ilişkili oranları anlatıyor: birbirine bir denklemle bağlı iki niceliğin değişim hızları da birbirine bağlıdır. Denklemi zamana göre türeterek bilinen hızdan bilinmeyen hızı bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "İlişkili oranlar nedir?",
      kisa: "Nicelikler bir denklemle bağlıysa, hızları da türevle bağlanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Related rates", tr: "ilişkili oranlar", tanim: "Zamanla değişen ve bir denklemle bağlı niceliklerin değişim hızları arasındaki ilişki. Birinin hızını bilerek ötekinin hızını bulursun.", ornek: "Su dalgasının yarıçap hızı biliniyorsa alanın büyüme hızı bulunur." },
            { ikon: "⏱️", terim: "Differentiation with respect to time", tr: "zamana göre türev", tanim: "Denklemin her iki tarafını t'ye göre türetmek. Zincir kuralı gereği her değişkenin yanına kendi hızı (dr/dt gibi) gelir.", ornek: "d/dt (r²) = 2r · dr/dt." }
          ] },
        { tip: "formul", parcalar: [
            { t: "A = πr²", alt: "denklem" }, "⇒",
            { t: "dA/dt = 2πr", alt: "A'nın r'ye türevi" }, "×",
            { t: "dr/dt", alt: "r'nin hızı" }
          ], aciklama: "Zincir kuralı: r de t'nin fonksiyonudur. ==Her değişkeni türetirken yanına kendi hızını çarp.==" }
      ]
    },
    {
      baslik: "Kurulum: değişen mi, sabit mi?",
      kisa: "Önce zamanla değişenleri bul; sabitler türevde sıfır olur.",
      bloklar: [
        { tip: "tablo", baslik: "Sık kullanılan denklemler ve zamana göre türevleri", head: ["Şekil", "Denklem", "Zamana göre türev"],
          rows: [
            ["Daire", "A = πr²", "dA/dt = 2πr · dr/dt"],
            ["Küre (hacim)", "V = (4/3)πr³", "dV/dt = 4πr² · dr/dt"],
            ["Silindir (r sabit)", "V = πr²h", "dV/dt = πr² · dh/dt"],
            ["Koni", "V = (1/3)πr²h", "r = h/2 gibi bir ilişki yazıp tek değişkene indir"],
            ["Dik üçgen", "x² + y² = z²", "2x · dx/dt + 2y · dy/dt = 2z · dz/dt"]
          ], vurgu: 4, not: "Çevre, alan, hacim formülleri sınavda verilmeyebilir; bunları bilmen beklenir." },
        { tip: "ikili", sol: { ikon: "📈", baslik: "*Zamanla değişir*", maddeler: ["Türevde kendi hızını taşır", "Örn. dr/dt, dx/dt, dh/dt"] },
          sag: { ikon: "🔒", baslik: "*Sabit*", maddeler: ["Türevi sıfırdır, ayrıca yazılmaz", "Örn. merdiven boyu, π, kupa boyu"] },
          oyun: [
            { metin: "5 m'lik merdivenin boyu", cevap: "sag", neden: "Merdiven kayarken uzunluğu değişmez." },
            { metin: "Merdivenin ayağının duvara uzaklığı", cevap: "sol", neden: "Ayak kayıyor, x zamanla değişir." },
            { metin: "Dalga halkasının yarıçapı", cevap: "sol", neden: "Halka genişliyor, r değişir." },
            { metin: "Kâğıt kupanın kendi yüksekliği (12 cm)", cevap: "sag", neden: "Kupa biçimi sabit." },
            { metin: "Kupadaki suyun derinliği", cevap: "sol", neden: "Su doldukça h artar." }
          ] }
      ]
    },
    {
      baslik: "Çözüm yöntemi: beş adım",
      kisa: "Önce türev al, sonra sayıları yerine koy.",
      bloklar: [
        { tip: "adimlar", baslik: "Her ilişkili oran sorusunda", adimlar: [
            { baslik: "Çiz ve adlandır", metin: "Şekli çiz; değişenlere harf ver (x, y, r, h...)." },
            { baslik: "Bilinenler ve istenen", metin: "Hangi hızlar veriliyor, hangisi isteniyor? İşareti yaz: artan nicelik pozitif, azalan negatif." },
            { baslik: "Denklem kur", metin: "Nicelikleri bağlayan bir denklem yaz (Pisagor, benzer üçgen, hacim formülü)." },
            { baslik: "t'ye göre türet", metin: "Her iki tarafın zamana göre türevini al; her değişkene hızını çarp." },
            { baslik: "Sonra yerine koy ve birimi yaz", metin: "Anı belirleyen sayıları yeni yerine koy, hızı çöz, birimi ekle." }
          ] },
        { tip: "tuzak", metin: "En büyük hata sayıları türevden önce yerine koymaktır. Sayı sabit olursa türevi sıfır olur ve hızlar kaybolur.", yanlis: "x² + y² = 25'e x = 3'ü yazıp 9 + y² = 25 yaparak türev almak.", dogru: "Önce x² + y² = 25'in t'ye göre türevini al: 2x · x′ + 2y · y′ = 0. Sonra x = 3, y = 4 yaz." }
      ]
    },
    {
      baslik: "Daire ve küre: yarıçap hızı biliniyor",
      kisa: "A ya da V denklemini türet, anın yarıçapını yerine koy.",
      bloklar: [
        { tip: "ornek", baslik: "Dairesel su halkası", durum: "Bir dalga halkasının yarıçapı 2 cm/s ile büyüyor. r = 5 cm iken alan hangi hızla büyüyor?",
          adimlar: [
            "Denklem: A = πr².",
            "Türev: dA/dt = 2πr · dr/dt.",
            "Yerine koy: r = 5, dr/dt = 2 ⇒ dA/dt = 2π · 5 · 2.",
            "= 20π ≈ 62,8."
          ], sonuc: "dA/dt = 20π cm²/s ≈ 62,8 cm²/s" },
        { tip: "ornek", baslik: "Şişen balon", durum: "Balonun hacmi 100π cm³/s hızla artıyor. r = 5 cm iken yarıçap hangi hızla artıyor?",
          adimlar: [
            "Denklem: V = (4/3)πr³.",
            "Türev: dV/dt = 4πr² · dr/dt.",
            "Yerine koy: 100π = 4π · 25 · dr/dt = 100π · dr/dt.",
            "Çöz: dr/dt = 1."
          ], sonuc: "dr/dt = 1 cm/s" }
      ]
    },
    {
      baslik: "Pisagor: kayan merdiven",
      kisa: "Dik üçgen varsa x² + y² = z² denklemini t'ye göre türet.",
      bloklar: [
        { tip: "ornek", baslik: "5 m'lik merdiven", durum: "Merdivenin ayağı duvardan 3 m uzakta ve 2 m/s hızla uzaklaşıyor. Tepe noktası hangi hızla kayıyor?",
          adimlar: [
            "Pisagor: x² + y² = 25 (merdiven sabit).",
            "t'ye göre türev: 2x · dx/dt + 2y · dy/dt = 0.",
            "x = 3 iken y = 4. Yerine koy: 2 · 3 · 2 + 2 · 4 · dy/dt = 0 ⇒ 12 + 8 · dy/dt = 0.",
            "dy/dt = −12/8 = −1,5. Negatif: tepe aşağı iniyor."
          ], sonuc: "dy/dt = −1,5 m/s (tepe saniyede 1,5 m iniyor)" },
        { tip: "grafik", baslik: "Kayan merdiven (duvar y ekseni, zemin x ekseni)", xlabel: "x (m)", ylabel: "y (m)", xmax: 6, ymax: 6,
          xticks: [{ v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "l", tip: "cizgi", renk: 0, from: [3, 0], to: [0, 4], etiket: "5 m" },
            { id: "a", tip: "ok", renk: 2, from: [3.2, 0.35], to: [4.4, 0.35], gizli: true },
            { id: "pt", tip: "nokta", renk: 3, x: 0, y: 4, etiket: "tepe", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: ayak x = 3, tepe y = 4. 3-4-5 üçgeni." },
            { metin: "Ayak sağa kayıyor (ok). x = 4 olunca tepe y = 3'e iniyor.", set: { l: { from: [4, 0], to: [0, 3] } }, goster: ["a"] },
            { metin: "x = 4,5: tepe y ≈ 2,18. Ayak aynı hızla gitse de tepe giderek daha hızlı iniyor, çünkü dy/dt = −(x/y) · dx/dt.", set: { l: { from: [4.5, 0], to: [0, 2.18] } }, goster: ["a"] }
          ] }
      ]
    },
    {
      baslik: "Benzer üçgen: konik kupa",
      kisa: "Önce r'yi h cinsinden yaz, sonra türet.",
      bloklar: [
        { tip: "ornek", baslik: "Kâğıt kupaya su dolması", durum: "Koni biçimli kupanın üst yarıçapı 6 cm, yüksekliği 12 cm. Su 9π cm³/s hızla doluyor. Derinlik 6 cm iken seviye hangi hızla yükseliyor?",
          adimlar: [
            "Benzer üçgenler: r / h = 6 / 12 ⇒ r = h/2 (her seviyede geçerli, sabit ilişki).",
            "V = (1/3)πr²h = (1/3)π (h/2)² h = πh³/12.",
            "Türev: dV/dt = (π h² / 4) · dh/dt.",
            "h = 6 ve dV/dt = 9π: 9π = 9π · dh/dt ⇒ dh/dt = 1."
          ], sonuc: "dh/dt = 1 cm/s" },
        { tip: "grafik", baslik: "Seviye hızı dh/dt = 36/h²", xlabel: "h (cm)", ylabel: "dh/dt (cm/s)", xmax: 12, ymax: 9,
          xticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }, { v: 9, label: "9" }, { v: 12, label: "12" }], yticks: [{ v: 1, label: "1" }, { v: 4, label: "4" }, { v: 9, label: "9" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[2, 9], [2.5, 5.76], [3, 4], [3.5, 2.939], [4, 2.25], [4.5, 1.778], [5, 1.44], [5.5, 1.19], [6, 1], [6.5, 0.852], [7, 0.735], [7.5, 0.64], [8, 0.563], [8.5, 0.498], [9, 0.444], [9.5, 0.399], [10, 0.36], [10.5, 0.327], [11, 0.298], [11.5, 0.272], [12, 0.25]] },
            { id: "p1", tip: "nokta", renk: 2, x: 3, y: 4, etiket: "4", kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", renk: 3, x: 6, y: 1, etiket: "1", kilavuz: true, gizli: true },
            { id: "p3", tip: "nokta", renk: 1, x: 12, y: 0.25, etiket: "0,25", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Aynı doluma rağmen seviye yükseldikçe yavaşlıyor: kupa yukarıda genişliyor, aynı hacim daha az yükseklik demek." },
            { metin: "h = 3: seviye 4 cm/s ile yükseliyor.", goster: ["p1"] },
            { metin: "h = 6: seviye 1 cm/s ile yükseliyor (örnek).", gizle: ["p1"], goster: ["p2"] },
            { metin: "h = 12: seviye yalnızca 0,25 cm/s ile yükseliyor.", gizle: ["p2"], goster: ["p3"] }
          ] }
      ]
    },
    {
      baslik: "İki hareketli nesne ve işaret kuralı",
      kisa: "Uzaklık hızı, bileşen hızlarının ağırlıklı toplamıdır.",
      bloklar: [
        { tip: "ornek", baslik: "İki bisikletli", durum: "Okul kapısından aynı anda çıkan iki öğrenciden biri doğuya 3 m/s, öteki kuzeye 4 m/s ile gidiyor. 10 saniye sonra aralarındaki mesafe hangi hızla artıyor?",
          adimlar: [
            "10 s sonra x = 30 m, y = 40 m ve z = 50 m (30-40-50).",
            "Pisagor: x² + y² = z². Türev: 2x · x′ + 2y · y′ = 2z · z′.",
            "x · x′ + y · y′ = z · z′ ⇒ 30 · 3 + 40 · 4 = 50 · z′.",
            "90 + 160 = 250 = 50 · z′ ⇒ z′ = 5."
          ], sonuc: "dz/dt = 5 m/s" },
        { tip: "tablo", baslik: "Türev işareti, nicelik yönü", head: ["Durum", "Türev işareti", "Örnek"],
          rows: [
            ["Nicelik artıyor", "pozitif", "dr/dt = +2 cm/s"],
            ["Nicelik azalıyor", "negatif", "dy/dt = −1,5 m/s (tepe iniyor)"],
            ["Değişmiyor (sabit)", "sıfır", "merdiven boyu: 0"]
          ], vurgu: 1, not: "\"Azalıyor\", \"küçülüyor\", \"iniyor\" gördüğünde türevin işareti negatiftir. Cevabı yorumlarken işareti birime ekle." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "İlişkili oranlar: bağlı nicelikler arasındaki denklemi t'ye göre türet.",
            "Her değişkenin yanına kendi hızını çarp (zincir kuralı).",
            "Sıra: çiz, bilinenleri yaz, denklem kur, t'ye göre türet, sonra sayıları koy.",
            "Sabitleri (merdiven boyu, π) türevden önce de sonra da sabit say.",
            "Konide r'yi h cinsinden yazıp tek değişkene indir.",
            "Artan nicelik pozitif, azalan negatif türevdir.",
            "Cevabı birimle ve yorumla ver (\"tepe 1,5 m/s iniyor\").",
            "Geometri formüllerini ezbere bil: A = πr², V = 4/3 πr³, V = 1/3 πr²h."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir dalga halkasının yarıçapı 3 cm/s hızla büyüyor. r = 10 cm iken halkanın alanı hangi hızla artar?",
      opts: ["30π cm²/s", "60π cm²/s", "100π cm²/s", "300π cm²/s"],
      a: 1,
      why: "A = πr² ⇒ dA/dt = 2πr · dr/dt = 2π · 10 · 3 = 60π. A şıkkı en çekici yanlış: 2'yi unutup πr · dr/dt almak 30π verir." },
    { q: "13 m'lik bir merdivenin ayağı duvardan 5 m uzaktadır ve 3 m/s hızla uzaklaşmaktadır (şekil). Merdivenin tepe noktasının dikey hızı kaçtır?",
      fig: { type: "graph", xlabel: "x (m)", ylabel: "y (m)", xmax: 8, ymax: 14, lines: [{ from: [5, 0], to: [0, 12], label: "13 m" }], xticks: [{ v: 5, label: "5" }], yticks: [{ v: 12, label: "12" }], caption: "Duvar y ekseni, zemin x ekseni" },
      opts: ["−7,2 m/s", "−0,8 m/s", "−1,25 m/s", "+1,25 m/s"],
      a: 2,
      why: "x² + y² = 169, y = 12: 2x · x′ + 2y · y′ = 0 ⇒ 5 · 3 + 12 · y′ = 0 ⇒ y′ = −15/12 = −1,25 m/s. D şıkkı en çekici yanlış: tepe aşağı indiği için işaret negatif olmalı." },
    { q: "Hacmi V = (4/3)πr³ olan küre biçimli bir balon 72π cm³/s hızla şişiyor. r = 3 cm iken yarıçap hangi hızla artar?",
      opts: ["2 cm/s", "6 cm/s", "1/2 cm/s", "24π cm/s"],
      a: 0,
      why: "dV/dt = 4πr² · dr/dt ⇒ 72π = 4π · 9 · dr/dt = 36π · dr/dt ⇒ dr/dt = 2. B şıkkı en çekici yanlış: dV/dt = 4πr · dr/dt (r² yerine r) alınırsa 72π = 12π · dr/dt ⇒ 6 çıkar." },
    { q: "Yarıçapı 4 cm olan silindir biçimli bir bardağa su 32π cm³/s hızla doluyor. Suyun yüksekliği hangi hızla artar?",
      opts: ["8 cm/s", "1/2 cm/s", "2π cm/s", "2 cm/s"],
      a: 3,
      why: "Bardağın yarıçapı sabittir: V = 16πh ⇒ dV/dt = 16π · dh/dt ⇒ 32π = 16π · dh/dt ⇒ dh/dt = 2. A şıkkı en çekici yanlış: πr² yerine πr alıp 32π / 4π = 8 bulmak. Sabit yarıçap türevde sıfır katkı verir ama formülde yine r² olarak durur." },
    { q: "Bir kavşaktan aynı anda ayrılan iki scooter: biri doğuya 2 m/s, öteki kuzeye 1,5 m/s hızla gidiyor. Bir an sonra x = 6 m, y = 8 m ve aralarındaki uzaklık z = 10 m ise z hangi hızla artar?",
      opts: ["3,5 m/s", "2,4 m/s", "1,75 m/s", "14 m/s"],
      a: 1,
      why: "x · x′ + y · y′ = z · z′ ⇒ 6 · 2 + 8 · 1,5 = 10 · z′ ⇒ 24 = 10 · z′ ⇒ z′ = 2,4. A şıkkı en çekici yanlış: hızları 2 + 1,5 diye toplamak, dik hareketin bileşke etkisini atlar." }
  ]
};
