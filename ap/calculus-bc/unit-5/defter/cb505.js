/* Kitora not defteri · cb505 · 5.6–5.7 Konkavlık ve İkinci Türev Testi
   CED: College Board AP Calculus AB/BC (Unit 5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb505",
  amac: "Bu konu eğrinin nasıl kıvrıldığını anlatıyor: *concavity* yani konkavlık, *point of inflection* denen dönüm noktası ve *Second Derivative Test* yani ikinci türev testi. İkinci türevin işaretinden hem kıvrılma yönünü hem tepe-çukur ayrımını okumayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Konkavlık: eğri hangi yana kıvrılıyor?",
      kisa: "f″ > 0 ise eğri yukarı kıvrılır, f″ < 0 ise aşağı.",
      bloklar: [
        {"tip":"kavramlar","kartlar":[{"ikon":"🥣","terim":"Concave up","tr":"konkav yukarı","tanim":"Eğri bir kâse gibi yukarı kıvrılır (∪). f′ artandır; yani f″ > 0.","ornek":"f(x) = x²: f″ = 2 > 0, her yerde konkav yukarı."},{"ikon":"⛰️","terim":"Concave down","tr":"konkav aşağı","tanim":"Eğri bir tepe gibi aşağı kıvrılır (∩). f′ azalandır; yani f″ < 0.","ornek":"f(x) = −x²: f″ = −2 < 0, her yerde konkav aşağı."}]},
        {"tip":"tablo","baslik":"f″ işareti ve eğrinin biçimi","head":["f″ işareti","f′ nasıl","Konkavlık","Teğetler"],"rows":[["f″ > 0","artan","yukarı ∪","eğrinin altında"],["f″ < 0","azalan","aşağı ∩","eğrinin üstünde"]],"vurgu":0,"not":"f″ = f′'nin türevidir: f′'nin artıp artmadığını söyler."}
      ]
    },
    {
      baslik: "Örnek: f″ işaretinden konkavlık",
      kisa: "f″ = 0 ve tanımsız noktalar sayı doğrusunu böler; her parçada işareti test et.",
      bloklar: [
        {"tip":"ornek","baslik":"f(x) = x³ − 3x²","durum":"Konkavlık aralıkları ve dönüm noktası nedir?","adimlar":["f′(x) = 3x² − 6x ve f″(x) = 6x − 6 = 6(x − 1).","f″ = 0 → x = 1. Aralıklar: (−∞, 1) ve (1, ∞).","Test: f″(0) = −6 < 0 (konkav aşağı); f″(2) = 6 > 0 (konkav yukarı).","f″ x = 1'de işaret değiştirir; f(1) = 1 − 3 = −2."],"sonuc":"Konkav aşağı (−∞, 1), konkav yukarı (1, ∞); dönüm noktası (1, −2)"},
        {"tip":"grafik","baslik":"f(x) = x³ − 3x²: konkavlık ve teğetler","xlabel":"x","ylabel":"y","xmax":5,"ymax":6,"xticks":[{"v":0.5,"label":"−1"},{"v":2.5,"label":"1"},{"v":3.5,"label":"2"},{"v":4.5,"label":"3"}],"yticks":[{"v":0.8,"label":"−4"},{"v":2.8,"label":"−2"}],"ogeler":[{"id":"ax","tip":"cizgi","renk":1,"kesik":true,"from":[0,4.8],"to":[5,4.8]},{"id":"ay","tip":"cizgi","renk":1,"kesik":true,"from":[1.5,0],"to":[1.5,6]},{"id":"c","tip":"egri","renk":0,"noktalar":[[0.5,0.8],[0.6,1.641],[0.7,2.368],[0.8,2.987],[0.9,3.504],[1,3.925],[1.1,4.256],[1.2,4.503],[1.3,4.672],[1.4,4.769],[1.5,4.8],[1.6,4.771],[1.7,4.688],[1.8,4.557],[1.9,4.384],[2,4.175],[2.1,3.936],[2.2,3.673],[2.3,3.392],[2.4,3.099],[2.5,2.8],[2.6,2.501],[2.7,2.208],[2.8,1.927],[2.9,1.664],[3,1.425],[3.1,1.216],[3.2,1.043],[3.3,0.912],[3.4,0.829],[3.5,0.8],[3.6,0.831],[3.7,0.928],[3.8,1.097],[3.9,1.344],[4,1.675],[4.1,2.096],[4.2,2.613],[4.3,3.232],[4.4,3.959],[4.5,4.8]]},{"id":"pa","tip":"nokta","renk":2,"x":2,"y":4.175,"gizli":true},{"id":"ta","tip":"cizgi","renk":2,"from":[1.5,5.3],"to":[2.5,3.05],"etiket":"teğet üstte","gizli":true},{"id":"pb","tip":"nokta","renk":2,"x":3.5,"y":0.8,"gizli":true},{"id":"tb","tip":"cizgi","renk":2,"from":[2.9,0.8],"to":[4.1,0.8],"etiket":"teğet altta","gizli":true},{"id":"pi","tip":"nokta","renk":1,"x":2.5,"y":2.8,"etiket":"dönüm noktası","gizli":true}],"durumlar":[{"metin":"Eğri f(x) = x³ − 3x²; f′ = 3x² − 6x, f″ = 6x − 6."},{"metin":"x < 1: f″ < 0, eğri aşağı kıvrılıyor (concave down). Teğet eğrinin üstünde kalır.","goster":["pa","ta"]},{"metin":"x > 1: f″ > 0, eğri yukarı kıvrılıyor (concave up). Teğet eğrinin altında kalır.","goster":["pb","tb"]},{"metin":"x = 1'de f″ işaret değiştiriyor: dönüm noktası (1, −2).","goster":["pi"]}]}
      ]
    },
    {
      baslik: "Dönüm noktası",
      kisa: "Dönüm noktasında konkavlık değişir: f″ işaret değiştirir.",
      bloklar: [
        {"tip":"kavramlar","kartlar":[{"ikon":"🔄","terim":"Point of inflection","tr":"dönüm (büküm) noktası","tanim":"f'nin sürekli olduğu ve konkavlığın değiştiği nokta. f″ orada işaret değiştirir (0 olur ya da tanımsızdır).","ornek":"f(x) = x³ − 3x²: (1, −2)."}]},
        {"tip":"not","metin":"Dönüm noktasında f′ yerel maksimum ya da minimum olur: eğimin artışı azalışa (ya da tersine) döner. Bu yüzden f′ grafiğinin tepe ve çukurları, f'nin dönüm noktalarıdır."},
        {"tip":"tuzak","metin":"f″(c) = 0 olması tek başına dönüm noktası kanıtlamaz. f″'nin gerçekten işaret değiştirmesi gerekir.","yanlis":"f(x) = x⁴: f″(0) = 0 olduğundan x = 0 dönüm noktasıdır.","dogru":"f″ = 12x² iki yanda da pozitif: konkavlık değişmez, dönüm noktası yok."}
      ]
    },
    {
      baslik: "İkinci türev testi",
      kisa: "f′(c) = 0 iken f″(c) > 0 yerel min, f″(c) < 0 yerel max verir.",
      bloklar: [
        {"tip":"kavramlar","kartlar":[{"ikon":"🧪","terim":"Second Derivative Test","tr":"ikinci türev testi","tanim":"Kritik noktada (f′(c) = 0) f″'nin işaretine bakarak yerel ekstremumu belirler: ∪ çukur, ∩ tepe.","ornek":"f′(2) = 0 ve f″(2) = 6 > 0 → x = 2'de yerel minimum."}]},
        {"tip":"tablo","head":["f′(c)","f″(c)","Sonuç"],"rows":[["0","> 0","yerel minimum (∪ çukur)"],["0","< 0","yerel maksimum (∩ tepe)"],["0","= 0","test sonuç vermez"]],"vurgu":2},
        {"tip":"ikili","sol":{"ikon":"⛰️","baslik":"Yerel maksimum","maddeler":["f′(c) = 0 ve f″(c) < 0","Eğri ∩ biçiminde"]},"sag":{"ikon":"🥣","baslik":"Yerel minimum","maddeler":["f′(c) = 0 ve f″(c) > 0","Eğri ∪ biçiminde"]},"oyun":[{"metin":"f′(2) = 0 ve f″(2) = −4","cevap":"sol","neden":"f″ negatif: konkav aşağı, tepe."},{"metin":"f′(−1) = 0 ve f″(−1) = 5","cevap":"sag","neden":"f″ pozitif: konkav yukarı, çukur."},{"metin":"f′(c) = 0 ve eğri c'de konkav aşağı.","cevap":"sol","neden":"∩ biçimi yerel maksimum verir."},{"metin":"f′(c) = 0 ve eğri c'de konkav yukarı.","cevap":"sag","neden":"∪ biçimi yerel minimum verir."}]},
        {"tip":"ornek","baslik":"f(x) = x³ − 3x²","durum":"Yerel ekstremumları ikinci türev testiyle bul.","adimlar":["f′(x) = 3x² − 6x = 3x(x − 2) = 0 → x = 0 ve x = 2.","f″(x) = 6x − 6.","f″(0) = −6 < 0 → x = 0'da yerel maksimum, f(0) = 0.","f″(2) = 6 > 0 → x = 2'de yerel minimum, f(2) = 8 − 12 = −4."],"sonuc":"Yerel max (0, 0); yerel min (2, −4)"}
      ]
    },
    {
      baslik: "f″(c) = 0 ise ne olur?",
      kisa: "f″(c) = 0 ise test sonuç vermez; birinci türev testine dön.",
      bloklar: [
        {"tip":"grafik","baslik":"Üç fonksiyon, üçünde de f′(0) = 0 ve f″(0) = 0","xlabel":"x","ylabel":"y","xmax":2.2,"ymax":3,"xticks":[{"v":0.1,"label":"−1"},{"v":1.1,"label":"0"},{"v":2.1,"label":"1"}],"yticks":[{"v":0.5,"label":"−1"},{"v":2.5,"label":"1"}],"ogeler":[{"id":"ax","tip":"cizgi","renk":1,"kesik":true,"from":[0,1.5],"to":[2.2,1.5]},{"id":"ay","tip":"cizgi","renk":1,"kesik":true,"from":[1.1,0],"to":[1.1,3]},{"id":"a","tip":"egri","renk":0,"noktalar":[[2.2,2.964],[2.145,2.693],[2.09,2.461],[2.035,2.264],[1.98,2.1],[1.925,1.963],[1.87,1.852],[1.815,1.761],[1.76,1.69],[1.705,1.634],[1.65,1.592],[1.595,1.56],[1.54,1.537],[1.485,1.522],[1.43,1.512],[1.375,1.506],[1.32,1.502],[1.265,1.501],[1.21,1.5],[1.155,1.5],[1.1,1.5],[1.045,1.5],[0.99,1.5],[0.935,1.501],[0.88,1.502],[0.825,1.506],[0.77,1.512],[0.715,1.522],[0.66,1.537],[0.605,1.56],[0.55,1.592],[0.495,1.634],[0.44,1.69],[0.385,1.761],[0.33,1.852],[0.275,1.963],[0.22,2.1],[0.165,2.264],[0.11,2.461],[0.055,2.693],[0,2.964]],"etiket":"x⁴"},{"id":"b","tip":"egri","renk":1,"noktalar":[[0,0.036],[0.055,0.307],[0.11,0.539],[0.165,0.736],[0.22,0.9],[0.275,1.037],[0.33,1.148],[0.385,1.239],[0.44,1.31],[0.495,1.366],[0.55,1.408],[0.605,1.44],[0.66,1.463],[0.715,1.478],[0.77,1.488],[0.825,1.494],[0.88,1.498],[0.935,1.499],[0.99,1.5],[1.045,1.5],[1.1,1.5],[1.155,1.5],[1.21,1.5],[1.265,1.499],[1.32,1.498],[1.375,1.494],[1.43,1.488],[1.485,1.478],[1.54,1.463],[1.595,1.44],[1.65,1.408],[1.705,1.366],[1.76,1.31],[1.815,1.239],[1.87,1.148],[1.925,1.037],[1.98,0.9],[2.035,0.736],[2.09,0.539],[2.145,0.307],[2.2,0.036]],"etiket":"−x⁴","gizli":true},{"id":"c","tip":"egri","renk":2,"noktalar":[[0,0.169],[0.055,0.359],[0.11,0.53],[0.165,0.683],[0.22,0.819],[0.275,0.938],[0.33,1.043],[0.385,1.134],[0.44,1.213],[0.495,1.279],[0.55,1.334],[0.605,1.379],[0.66,1.415],[0.715,1.443],[0.77,1.464],[0.825,1.479],[0.88,1.489],[0.935,1.496],[0.99,1.499],[1.045,1.5],[1.1,1.5],[1.155,1.5],[1.21,1.501],[1.265,1.504],[1.32,1.511],[1.375,1.521],[1.43,1.536],[1.485,1.557],[1.54,1.585],[1.595,1.621],[1.65,1.666],[1.705,1.721],[1.76,1.787],[1.815,1.866],[1.87,1.957],[1.925,2.062],[1.98,2.181],[2.035,2.317],[2.09,2.47],[2.145,2.641],[2.2,2.831]],"etiket":"x³","gizli":true}],"durumlar":[{"metin":"f(x) = x⁴: f″ = 12x² ≥ 0, işaret değiştirmez. x = 0 dönüm noktası değil; f′ − → +, yerel minimum."},{"metin":"f(x) = −x⁴: f″ = −12x² ≤ 0. Yine dönüm yok; f′ + → −, yerel maksimum.","goster":["b"]},{"metin":"f(x) = x³: f″ = 6x işaret değiştirir, x = 0 dönüm noktası. f′ = 3x² ≥ 0: ekstremum yok.","goster":["c"]}]},
        {"tip":"liste","baslik":"Sınavda böyle yaz","maddeler":[{"ikon":"🥣","baslik":"Konkavlık","metin":"\"f is concave up on (a, b) because f″(x) > 0 on (a, b).\""},{"ikon":"🔄","baslik":"Dönüm noktası","metin":"\"f has a point of inflection at x = c because f″ changes sign at x = c.\""},{"ikon":"🧪","baslik":"İkinci türev testi","metin":"\"f has a relative minimum at x = c because f′(c) = 0 and f″(c) > 0.\""},{"ikon":"⚠️","baslik":"f″(c) = 0","metin":"Test sonuçsuz; f′'nin işaret değişimine bakarak birinci türev testini kullan."}]}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["f″ > 0 ise f′ artandır ve f konkav yukarı (∪) olur; f″ < 0 ise f′ azalandır ve f konkav aşağı (∩) olur.","Konkavlık için f″ = 0 ya da tanımsız noktalarla aralıkları böl, her aralıkta f″ işaretini test et.","Dönüm noktası: konkavlığın değiştiği, f″ işaretinin değiştiği nokta. f″(c) = 0 tek başına yetmez (f(x) = x⁴).","Dönüm noktasında f′ yerel ekstremumdur (f′ grafiğinin tepe/çukuru).","İkinci türev testi: f′(c) = 0 ve f″(c) > 0 ise yerel min; f″(c) < 0 ise yerel max.","f″(c) = 0 ise test sonuç vermez: x⁴ (min), −x⁴ (max), x³ (ekstremum yok) hepsinde f″(0) = 0.","Sınav gerekçesi: \"f″ changes sign at x = c\" (dönüm) ya da \"f′(c) = 0 and f″(c) > 0\" (min)."]}
      ]
    }
  ],
  sorular: [
    {"q":"f(x) = x⁴ − 4x³ fonksiyonunun grafiğinin kaç dönüm noktası vardır?","opts":["0","1","2","3"],"a":2,"why":"f″(x) = 12x² − 24x = 12x(x − 2). x = 0'da + → −, x = 2'de − → +: iki işaret değişimi, iki dönüm noktası. Çarpanın sıfır olması yetmez; işaret değişmeli (örneğin 12x² gibi bir çift katlı kök değişim vermez)."},
    {"q":"f(x) = x³ − 12x fonksiyonu için ikinci türev testi x = −2 noktası hakkında ne söyler?","opts":["Yerel maksimum","Yerel minimum","Dönüm noktası","Test sonuç vermez"],"a":0,"why":"f′ = 3x² − 12 = 0 → x = ±2. f″ = 6x ve f″(−2) = −12 < 0: konkav aşağı, yerel maksimum. f″(2) = 12 > 0 olduğundan x = 2 yerel minimumdur; ikisini karıştırmak en yaygın hata."},
    {"q":"f iki kez türevlenebilir bir fonksiyondur. Bazı noktalardaki türev değerleri tabloda verilmiştir. Hangisi kesinlikle doğrudur?","fig":{"type":"table","head":["x","f′(x)","f″(x)"],"rows":[["1","0","4"],["2","3","0"],["3","0","−2"]],"caption":"f′ ve f″ değerleri."},"opts":["x = 1'de yerel max, x = 3'te yerel min","x = 2'de f kesinlikle bir dönüm noktasına sahiptir","x = 1'de yerel min, x = 3'te yerel max","x = 2'de yerel max"],"a":2,"why":"x = 1: f′ = 0, f″ = 4 > 0 → yerel min. x = 3: f′ = 0, f″ = −2 < 0 → yerel max. x = 2'de f′ = 3 ≠ 0, kritik nokta bile değil; f″(2) = 0 olması işaret değişimi göstermediği için dönüm noktası garanti etmez."},
    {"q":"f′(x) = x² − 4x olan bir f fonksiyonu hangi aralıkta konkav yukarıdır?","opts":["(−∞, 2)","(2, ∞)","(0, 4)","(−∞, 0) ve (4, ∞)"],"a":1,"why":"f″(x) = 2x − 4 > 0 ⇔ x > 2. (−∞, 0) ve (4, ∞) f′ > 0 olan aralıklardır (f artan); (0, 4) ise f′ < 0 (f azalan). Konkavlık için f'nin değil f′'nin türevinin işaretine bakılır."},
    {"q":"Aşağıdakilerden hangisi f'nin x = c noktasında bir dönüm noktasına sahip olduğunu gerekçelendirir?","opts":["f″(c) = 0","f′(c) = 0","f(c) bir yerel ekstremumdur","f″, x = c'de işaret değiştirir"],"a":3,"why":"Dönüm noktası konkavlığın değişmesidir, yani f″ işaret değiştirmelidir. f″(c) = 0 tek başına yetmez (f(x) = x⁴). f′(c) = 0 ya da yerel ekstremum olması ise dönüm noktasıyla ilgisizdir."}
  ]
};
