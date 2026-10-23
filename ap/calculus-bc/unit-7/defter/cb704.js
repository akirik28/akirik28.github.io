/* Kitpath not defteri · cb704 · 7.6-7.7 Değişkenlerine Ayırma ve Başlangıç Koşulu
   Kaynak: College Board CED (Calculus BC, Unit 7). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb704",
  amac: "Bu konu *separation of variables* yani değişkenlerine ayırma yöntemini anlatıyor: dy/dx = f(x)·g(y) biçimli denklemde y'leri bir yana, x'leri öbür yana toplayıp integre etmek. Genel çözümü bulmayı, başlangıç koşuluyla özel çözüme gitmeyi ve çözümün tanım kümesini belirlemeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Ayrılabilir denklem: x'ler bir yana, y'ler bir yana",
      kisa: "dy/dx = f(x)·g(y) ise y'leri sola, x'leri sağa topla.",
      bloklar: [
        {"tip":"formul","parcalar":[{"t":"dy/dx = f(x)·g(y)","alt":"çarpım biçimi"},"→",{"t":"dy/g(y) = f(x) dx","alt":"ayır"},"→",{"t":"∫dy/g(y) = ∫f(x) dx","alt":"integre et"}],"aciklama":"==Ayrılabilirlik testi:== sağ taraf, yalnız x'e bağlı bir ifade ile yalnız y'ye bağlı bir ifadenin **çarpımı** olmalı."},
        {"tip":"kavramlar","kartlar":[{"ikon":"🧮","terim":"Separable differential equation","tr":"değişkenlerine ayrılabilir denklem","tanim":"dy/dx = f(x)·g(y) biçiminde yazılabilen diferansiyel denklem.","ornek":"dy/dx = x²y ayrılabilir; dy/dx = x + y değildir."},{"ikon":"✂️","terim":"Separation of variables","tr":"değişkenlerine ayırma","tanim":"y'li her şeyi dy ile bir yana, x'li her şeyi dx ile öbür yana taşıyıp iki yanı integre etme.","ornek":"dy/dx = 2xy → dy/y = 2x dx."}]},
        {"tip":"ikili","sol":{"ikon":"✖️","baslik":"Ayrılabilir","maddeler":["Sağ taraf x ve y ifadelerinin çarpımı","Örnek: dy/dx = x²y"]},"sag":{"ikon":"➕","baslik":"Ayrılamaz","maddeler":["x ve y toplanmış, çarpım olmuyor","Örnek: dy/dx = x + y"]},"oyun":[{"metin":"dy/dx = x²y","cevap":"sol","neden":"x² ile y'nin çarpımı."},{"metin":"dy/dx = x + y","cevap":"sag","neden":"Toplam çarpım biçimine getirilemez."},{"metin":"dy/dx = e^(x + y)","cevap":"sol","neden":"e^x · e^y olarak yazılır."},{"metin":"dy/dx = x + xy","cevap":"sol","neden":"x(1 + y): x ile (1 + y)'nin çarpımı."},{"metin":"dy/dx = x² + y²","cevap":"sag","neden":"Toplam; çarpanlara ayrılmaz."}]}
      ]
    },
    {
      baslik: "Dört adım: ayır, integre et, +C, y'yi çöz",
      kisa: "Ayır, integre et, C'yi tek yere yaz, y'yi yalnız bırak.",
      bloklar: [
        {"tip":"adimlar","baslik":"Genel çözüm için","adimlar":[{"baslik":"Ayır","metin":"Bütün y'leri dy ile sola, bütün x'leri dx ile sağa topla."},{"baslik":"İntegre et","metin":"İki yanın integralini al."},{"baslik":"+C","metin":"Tek bir C sabiti ekle; hemen integralden sonra yaz."},{"baslik":"y'yi yalnız bırak","metin":"Mümkünse y = ... biçimine getir."}]},
        {"tip":"ornek","baslik":"dy/dx = 2xy","durum":"Genel çözümü bul.","adimlar":["Ayır: dy/y = 2x dx (y ≠ 0).","İntegre et: ln|y| = x² + C.","Üstel al: |y| = e^C · e^(x²), yani y = A·e^(x²) (A = ±e^C; y = 0 da çözümdür, A = 0)."],"sonuc":"y = A·e^(x²)"},
        {"tip":"ornek","baslik":"dy/dx = e^(x − y)","durum":"Genel çözümü bul.","adimlar":["e^(x − y) = e^x / e^y. Ayır: e^y dy = e^x dx.","İntegre et: e^y = e^x + C.","Her iki yanın ln'ini al: y = ln(e^x + C)."],"sonuc":"y = ln(e^x + C)"},
        {"tip":"tuzak","metin":"+C'yi integralden hemen sonra yaz. Üstel almadan sonra eklenen +C yanlış sonuç verir; C üstelde çarpana dönüşür.","yanlis":"ln|y| = x² → y = e^(x²) + C.","dogru":"ln|y| = x² + C → y = A·e^(x²). C üstelin içindeyken eklenir."}
      ]
    },
    {
      baslik: "Başlangıç koşulu: C'yi bul, özel çözümü yaz",
      kisa: "Koşulu yerine koy, sabiti bul, kökün işaretini koşuldan seç.",
      bloklar: [
        {"tip":"ornek","baslik":"dy/dx = x/y, y(0) = 2","durum":"Özel çözümü bul.","adimlar":["Ayır: y dy = x dx.","İntegre et: y²/2 = x²/2 + C, yani y² = x² + K (K = 2C).","Koşul: 2² = 0² + K, K = 4.","y² = x² + 4. y(0) = 2 pozitif olduğundan pozitif kök alınır."],"sonuc":"y = √(x² + 4)"},
        {"tip":"grafik","baslik":"y² = x² + K ailesinin üst kolları","xlabel":"x","ylabel":"y","xmax":10,"ymax":7,"xticks":[{"v":1,"label":"−4"},{"v":3,"label":"−2"},{"v":5,"label":"0"},{"v":7,"label":"2"},{"v":9,"label":"4"}],"yticks":[{"v":1,"label":"1"},{"v":2,"label":"2"},{"v":3,"label":"3"},{"v":4,"label":"4"},{"v":5,"label":"5"},{"v":6,"label":"6"}],"ogeler":[{"id":"ay","tip":"cizgi","renk":1,"kesik":true,"from":[5,0],"to":[5,7]},{"id":"c4","tip":"egri","renk":2,"noktalar":[[0,5.385],[0.5,4.924],[1,4.472],[1.5,4.031],[2,3.606],[2.5,3.202],[3,2.828],[3.5,2.5],[4,2.236],[4.5,2.062],[5,2],[5.5,2.062],[6,2.236],[6.5,2.5],[7,2.828],[7.5,3.202],[8,3.606],[8.5,4.031],[9,4.472],[9.5,4.924],[10,5.385]],"etiket":"K = 4"},{"id":"p","tip":"nokta","renk":2,"x":5,"y":2,"etiket":"(0, 2)","gizli":true},{"id":"c1","tip":"egri","renk":0,"noktalar":[[0,5.099],[0.5,4.61],[1,4.123],[1.5,3.64],[2,3.162],[2.5,2.693],[3,2.236],[3.5,1.803],[4,1.414],[4.5,1.118],[5,1],[5.5,1.118],[6,1.414],[6.5,1.803],[7,2.236],[7.5,2.693],[8,3.162],[8.5,3.64],[9,4.123],[9.5,4.61],[10,5.099]],"etiket":"K = 1","gizli":true},{"id":"c9","tip":"egri","renk":3,"noktalar":[[0,5.831],[0.5,5.408],[1,5],[1.5,4.61],[2,4.243],[2.5,3.905],[3,3.606],[3.5,3.354],[4,3.162],[4.5,3.041],[5,3],[5.5,3.041],[6,3.162],[6.5,3.354],[7,3.606],[7.5,3.905],[8,4.243],[8.5,4.61],[9,5],[9.5,5.408],[10,5.831]],"etiket":"K = 9","gizli":true}],"durumlar":[{"metin":"Genel çözüm y² = x² + K: her K için bir eğri. Burada yalnız y > 0 olan kollar çiziliyor."},{"metin":"y(0) = 2 koşulu: 4 = 0 + K, yani K = 4. Eğri (0, 2)'den geçer.","goster":["p"]},{"metin":"Başka koşullar başka K seçer: y(0) = 1 için K = 1, y(0) = 3 için K = 9.","goster":["c1","c9"]}]},
        {"tip":"tuzak","metin":"y² = ... denkleminden ±√ çıkar. Hangi kökün kalacağını başlangıç koşulunun işareti belirler.","yanlis":"y(0) = −3 ve y² = x² + 9 ise y = √(x² + 9).","dogru":"y(0) = −3 negatif olduğundan y = −√(x² + 9)."}
      ]
    },
    {
      baslik: "Çözümün tanım kümesi",
      kisa: "Çözüm, başlangıç noktasını içeren kesintisiz aralıkta geçerlidir.",
      bloklar: [
        {"tip":"ornek","baslik":"dy/dx = y², y(0) = 1","durum":"Özel çözümü ve geçerli olduğu aralığı bul.","adimlar":["Ayır: dy/y² = dx.","İntegre et: −1/y = x + C.","Koşul: −1/1 = 0 + C, C = −1.","−1/y = x − 1, yani y = 1/(1 − x). x = 1'de tanımsız; çözüm x = 0'ı içeren aralıkta olmalı."],"sonuc":"y = 1/(1 − x), x < 1"},
        {"tip":"grafik","baslik":"y = 1/(1 − x) ve tanım kümesi","xlabel":"x","ylabel":"y","xmax":4,"ymax":8,"xticks":[{"v":0,"label":"−2"},{"v":1,"label":"−1"},{"v":2,"label":"0"},{"v":3,"label":"1"},{"v":4,"label":"2"}],"yticks":[{"v":2,"label":"2"},{"v":4,"label":"4"},{"v":6,"label":"6"},{"v":8,"label":"8"}],"ogeler":[{"id":"ay","tip":"cizgi","renk":1,"kesik":true,"from":[2,0],"to":[2,8]},{"id":"c","tip":"egri","renk":0,"noktalar":[[0,0.333],[0.25,0.364],[0.5,0.4],[0.75,0.444],[1,0.5],[1.25,0.571],[1.5,0.667],[1.75,0.8],[2,1],[2.25,1.333],[2.5,2],[2.75,4],[2.875,8]]},{"id":"p","tip":"nokta","renk":2,"x":2,"y":1,"etiket":"(0, 1)"},{"id":"as","tip":"cizgi","renk":3,"kesik":true,"from":[3,0],"to":[3,8],"etiket":"x = 1","gizli":true},{"id":"t1","tip":"yazi","x":1,"y":6.5,"metin":"çözüm: x < 1","gizli":true},{"id":"t2","tip":"yazi","x":3.5,"y":4,"metin":"çözüm yok","gizli":true}],"durumlar":[{"metin":"y(0) = 1 koşulunu sağlayan çözüm y = 1/(1 − x). Sağa doğru hızla yükselir."},{"metin":"x = 1'e yaklaşırken y sonsuza gider: x = 1 düşey asimptot.","goster":["as"]},{"metin":"Çözüm başlangıç x = 0'ı içeren aralıkta geçerli: x < 1. Sağ taraf bu çözümün parçası değil.","goster":["t1","t2"]}]},
        {"tip":"tuzak","metin":"Formül x > 1 için de tanımlı görünür, ama o kol başlangıç noktasından kopuktur ve bu çözümün parçası değildir.","yanlis":"y = 1/(1 − x) çözümünün tanım kümesi x ≠ 1.","dogru":"Başlangıç noktası x = 0'ı içeren aralık: x < 1."}
      ]
    },
    {
      baslik: "Sık gelen kalıplar",
      kisa: "Bu çözümleri tanırsan sınavda hızlı kontrol edersin.",
      bloklar: [
        {"tip":"tablo","baslik":"Ayrılabilir denklemlerde sık görülen çözümler","head":["Denklem","Genel çözüm"],"rows":[["dy/dx = ky","y = A·e^(kx)"],["dy/dx = y/x (x > 0)","y = Ax"],["dy/dx = x/y","y² = x² + K"],["dy/dx = xy","y = A·e^(x²/2)"],["dy/dx = y − 1","y = 1 + A·e^x"]],"vurgu":0,"not":"Hepsi ayır-integre et-+C ile bulunur; tablo kontrol içindir."},
        {"tip":"ornek","baslik":"dy/dx = y/x, y(2) = 6","durum":"x > 0 için özel çözümü bul.","adimlar":["Ayır: dy/y = dx/x.","İntegre et: ln|y| = ln x + C, yani y = A·x.","Koşul: 6 = A·2, A = 3."],"sonuc":"y = 3x"}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["*Separable* denklem: dy/dx = f(x)·g(y), yani sağ taraf çarpım. Toplam ayrılamaz.","Adımlar: dy/g(y) = f(x) dx; iki yanı integre et; tek bir C ekle; y'yi yalnız bırak.","+C'yi integralden hemen sonra yaz: ln|y| = x² + C → y = A·e^(x²).","*Initial condition*: genel çözümde yerine koy, C'yi (ya da K'yi) bul.","y² = ... gibi durumlarda kökün işaretini koşul seçer.","Çözüm, başlangıç x değerini içeren kesintisiz aralıkta geçerlidir (ör. x < 1).","Ayırmak için g(y)'ye böldüğünde g(y) = 0 olan sabit çözümleri unutma."]}
      ]
    }
  ],
  sorular: [
    {"q":"y > 0 için dy/dx = 6x²y denkleminin genel çözümü aşağıdakilerden hangisidir? (A bir sabittir.)","opts":["y = e^(2x³) + A","y = A·e^(2x³)","y = A·e^(6x²)","y = 2x³·y + A"],"a":1,"why":"dy/y = 6x² dx → ln y = 2x³ + C → y = A·e^(2x³). A şıkkı en çekici yanlış: sabit üstel alındıktan sonra eklenirse çarpan olmalıdır. C şıkkı 6x²'yi integre etmeden bırakır."},
    {"q":"dy/dx = x/y ve y(0) = −3 koşulunu sağlayan özel çözüm hangisidir?","opts":["y = √(x² + 9)","y = x² − 3","y = ±√(x² + 9)","y = −√(x² + 9)"],"a":3,"why":"y dy = x dx → y² = x² + K; y(0) = −3 verdiğinden K = 9. y(0) negatif olduğu için negatif kök alınır. A şıkkı y(0) = +3 çözümüdür; C şıkkı tek bir fonksiyon değil, iki çözümün birleşimidir."},
    {"q":"dy/dx = y² ve y(0) = 1 için özel çözüm y = 1/(1 − x) bulunuyor. Bu çözümün geçerli olduğu en geniş aralık hangisidir?","opts":["x > 1","x ≠ 1","x < 1","Bütün reel sayılar"],"a":2,"why":"Çözüm x = 1'de tanımsızdır ve başlangıç noktası x = 0'ı içeren aralıkta geçerlidir: x < 1. B şıkkı iki kolu birleştirir; ama çözüm kesintisiz tek aralıkta tanımlı olmalı."},
    {"q":"Aşağıdaki diferansiyel denklemlerden hangisi değişkenlerine ayrılamaz?","opts":["dy/dx = x + y","dy/dx = x²y","dy/dx = e^(x + y)","dy/dx = (x + 1)/y"],"a":0,"why":"x + y toplamı, yalnız x'li ve yalnız y'li iki ifadenin çarpımı olarak yazılamaz. C şıkkı tuzak: e^(x + y) = e^x · e^y bir çarpımdır, ayrılabilir."},
    {"q":"dy/dx = e^(x − y) ve y(0) = 0 ise y(1) kaçtır?","opts":["0","1","e","ln(e + 1)"],"a":1,"why":"e^y dy = e^x dx → e^y = e^x + C. y(0) = 0 için 1 = 1 + C, C = 0; böylece e^y = e^x ve y = x. y(1) = 1. D şıkkı C = 1 alınırsa çıkar; koşul e^0 = 1 + C verir."}
  ]
};
