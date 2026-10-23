/* Kitora not defteri · cb703 · 7.5 Euler Yöntemi
   Kaynak: College Board CED (Calculus BC, Unit 7). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb703",
  amac: "Bu konu *Euler's method* yani Euler yöntemini anlatıyor: çözümü bilmeden, bir başlangıç noktası ve eğim bilgisiyle çözümün değerini küçük teğet adımlarıyla tahmin etmek. Tabloyla hesaplamayı ve tahminin gerçekten küçük mü büyük mü kaldığını öğreneceksin.",
  bolumler: [
    {
      baslik: "Fikir: küçük adımlarla teğeti izlemek",
      kisa: "Bulunduğun noktadaki eğimle küçük bir adım at, sonra eğimi yeniden oku.",
      bloklar: [
        {"tip":"hikaye","ikon":"🌫️","baslik":"Sisli yürüyüş","metin":"Sisli bir tepede yolu göremiyorsun; yalnızca bulunduğun yerdeki yamacın eğimini hissediyorsun. O eğimle bir adım atıyor, yeni yerde eğimi yeniden ölçüyorsun. *Euler's method* tam olarak bu."},
        {"tip":"formul","parcalar":[{"t":"yₙ₊₁","alt":"yeni y değeri"},"=",{"t":"yₙ","alt":"şimdiki y"},"+",{"t":"f(xₙ, yₙ)","alt":"şimdiki noktada eğim"},"×",{"t":"Δx","alt":"adım uzunluğu"}],"aciklama":"Yazılışı: yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx ve xₙ₊₁ = xₙ + Δx. ==Eğim her adımın başındaki noktadan alınır.=="},
        {"tip":"kavramlar","kartlar":[{"ikon":"🐾","terim":"Euler's method","tr":"Euler yöntemi","tanim":"Başlangıç noktasından başlayıp her adımda o noktadaki eğimle küçük bir doğru parçası izleyerek y değerlerini tahmin eden yöntem.","ornek":"dy/dx = x + y ve y(0) = 1 için (0, 1)'den başlanır."},{"ikon":"📏","terim":"Step size","tr":"adım uzunluğu","tanim":"Her adımda x'in ne kadar ilerlediği (Δx). Adım küçüldükçe tahmin genelde iyileşir.","ornek":"Δx = 0,5 ise x sırayla 0; 0,5; 1; 1,5 olur."}]}
      ]
    },
    {
      baslik: "Üç hamleyle adım, tabloyla hesap",
      kisa: "Eğimi bul, Δx ile çarp, y'ye ekle; yeni noktada tekrarla.",
      bloklar: [
        {"tip":"adimlar","baslik":"Her adım için","adimlar":[{"baslik":"Eğimi bul","metin":"dy/dx'i adımın başındaki (x, y) noktasında hesapla."},{"baslik":"Δy'yi bul","metin":"Eğimi Δx ile çarp: Δy = eğim · Δx."},{"baslik":"Yeni nokta","metin":"x'e Δx'i, y'ye Δy'yi ekle; yeni noktada başa dön."}]},
        {"tip":"grafik","baslik":"dy/dx = x + y, y(0) = 1, Δx = 0,5: Euler adımları","xlabel":"x","ylabel":"y","xmax":6,"ymax":7,"xticks":[{"v":0,"label":"0"},{"v":2,"label":"0,5"},{"v":4,"label":"1"},{"v":6,"label":"1,5"}],"yticks":[{"v":1,"label":"1"},{"v":2,"label":"2"},{"v":3,"label":"3"},{"v":4,"label":"4"},{"v":5,"label":"5"},{"v":6,"label":"6"},{"v":7,"label":"7"}],"ogeler":[{"id":"ex","tip":"egri","renk":1,"kesik":true,"noktalar":[[0,1],[0.5,1.141],[1,1.318],[1.5,1.535],[2,1.797],[2.5,2.111],[3,2.484],[3.5,2.923],[4,3.437],[4.5,4.035],[5,4.731],[5.5,5.535],[6,6.463]]},{"id":"p0","tip":"nokta","renk":0,"x":0,"y":1,"etiket":"(0, 1)"},{"id":"s1","tip":"cizgi","renk":2,"from":[0,1],"to":[2,1.5],"gizli":true},{"id":"p1","tip":"nokta","renk":2,"x":2,"y":1.5,"etiket":"1,5","gizli":true},{"id":"s2","tip":"cizgi","renk":2,"from":[2,1.5],"to":[4,2.5],"gizli":true},{"id":"p2","tip":"nokta","renk":2,"x":4,"y":2.5,"etiket":"2,5","gizli":true},{"id":"s3","tip":"cizgi","renk":2,"from":[4,2.5],"to":[6,4.25],"gizli":true},{"id":"p3","tip":"nokta","renk":2,"x":6,"y":4.25,"etiket":"4,25","gizli":true},{"id":"pt","tip":"nokta","renk":3,"x":6,"y":6.463,"etiket":"gerçek ≈ 6,46","gizli":true}],"durumlar":[{"metin":"Başlangıç (0, 1) ve dy/dx = x + y biliniyor. Kesikli eğri gerçek çözüm; gerçekte bilmiyormuşuz gibi davran."},{"metin":"Adım 1: eğim 0 + 1 = 1, Δy = 1·0,5 = 0,5. Yeni nokta (0,5; 1,5).","goster":["s1","p1"]},{"metin":"Adım 2: eğim 0,5 + 1,5 = 2, Δy = 1. Yeni nokta (1; 2,5).","goster":["s2","p2"]},{"metin":"Adım 3: eğim 1 + 2,5 = 3,5, Δy = 1,75. Yeni nokta (1,5; 4,25).","goster":["s3","p3"]},{"metin":"Gerçek değer ≈ 6,46: Euler 4,25 verdi, yani alttan tahmin. Eğri içbükey yukarı olduğu için teğetler eğrinin altında kalır.","goster":["pt"]}]},
        {"tip":"tablo","baslik":"Aynı hesap tabloda","head":["n","x","y","dy/dx = x + y","Δy = eğim · 0,5"],"rows":[["0","0","1","1","0,5"],["1","0,5","1,5","2","1"],["2","1","2,5","3,5","1,75"],["3","1,5","4,25","—","—"]],"vurgu":3,"not":"Cevap: y(1,5) ≈ 4,25. Son satırda eğim gerekmez."},
        {"tip":"tuzak","metin":"Eğimi yeni varılan noktadan değil, adımın başladığı noktadan al.","yanlis":"(0, 1)'den (0,5; 1,5)'e giderken eğimi 0,5 + 1,5 = 2 olarak almak.","dogru":"Eğim adımın başındaki (0, 1)'den: 0 + 1 = 1 ve Δy = 1 · 0,5 = 0,5."}
      ]
    },
    {
      baslik: "AP tarzı hesaplar: adım sayısı ve geri adım",
      kisa: "Adım sayısı = (hedef x − başlangıç x) / Δx; Δx negatif olabilir.",
      bloklar: [
        {"tip":"ornek","baslik":"dy/dx = xy, y(1) = 2, Δx = 0,5","durum":"y(2) için Euler tahmini nedir?","adimlar":["Adım sayısı: (2 − 1) / 0,5 = 2.","(1, 2): eğim 1·2 = 2, Δy = 2·0,5 = 1. Yeni nokta (1,5; 3).","(1,5; 3): eğim 1,5·3 = 4,5, Δy = 4,5·0,5 = 2,25. Yeni nokta (2; 5,25)."],"sonuc":"y(2) ≈ 5,25"},
        {"tip":"ornek","baslik":"dy/dx = y/x, y(2) = 3, tek adım Δx = −1","durum":"Geriye giderek y(1) için tahmin nedir?","adimlar":["Δx negatif: x'in azaldığı yöne adım atılır.","(2, 3): eğim 3/2 = 1,5, Δy = 1,5·(−1) = −1,5.","Yeni nokta (1; 1,5)."],"sonuc":"y(1) ≈ 1,5"}
      ]
    },
    {
      baslik: "Tahmin gerçeğin altında mı, üstünde mi?",
      kisa: "Çözüm içbükey yukarıysa tahmin küçük, içbükey aşağıysa büyük kalır.",
      bloklar: [
        {"tip":"ikili","sol":{"ikon":"⬇️","baslik":"Tahmin gerçeğin altında","maddeler":["Çözüm *concave up* (y″ > 0)","Teğetler eğrinin altında kalır"]},"sag":{"ikon":"⬆️","baslik":"Tahmin gerçeğin üstünde","maddeler":["Çözüm *concave down* (y″ < 0)","Teğetler eğrinin üstünde kalır"]},"oyun":[{"metin":"y″ > 0 olan bir çözümün Euler tahmini","cevap":"sol","neden":"İçbükey yukarı eğrinin teğeti eğrinin altında kalır."},{"metin":"y″ < 0 olan bir çözümün Euler tahmini","cevap":"sag","neden":"İçbükey aşağı eğrinin teğeti eğrinin üstünde kalır."},{"metin":"dy/dx = y, y > 0 (y″ = y > 0)","cevap":"sol","neden":"y″ pozitif: gerçek değer tahminden büyük."},{"metin":"dy/dx = 2 − y, 0 ≤ y < 2 (y″ = y − 2 < 0)","cevap":"sag","neden":"y″ negatif: tahmin gerçek değerden büyük."}]},
        {"tip":"grafik","baslik":"dy/dx = 2 − y, y(0) = 0, Δx = 1: üstten tahmin","xlabel":"x","ylabel":"y","xmax":4,"ymax":3,"xticks":[{"v":1,"label":"1"},{"v":2,"label":"2"},{"v":3,"label":"3"},{"v":4,"label":"4"}],"yticks":[{"v":1,"label":"1"},{"v":2,"label":"2"},{"v":3,"label":"3"}],"ogeler":[{"id":"ex","tip":"egri","renk":1,"kesik":true,"noktalar":[[0,0],[0.25,0.442],[0.5,0.787],[0.75,1.055],[1,1.264],[1.25,1.427],[1.5,1.554],[1.75,1.652],[2,1.729],[2.25,1.789],[2.5,1.836],[2.75,1.872],[3,1.9],[3.25,1.922],[3.5,1.94]]},{"id":"p0","tip":"nokta","renk":0,"x":0,"y":0,"etiket":"(0, 0)"},{"id":"s1","tip":"cizgi","renk":2,"from":[0,0],"to":[1,2],"gizli":true},{"id":"p1","tip":"nokta","renk":2,"x":1,"y":2,"etiket":"2","gizli":true},{"id":"s2","tip":"cizgi","renk":2,"from":[1,2],"to":[3,2],"gizli":true},{"id":"pt","tip":"nokta","renk":3,"x":1,"y":1.264,"etiket":"gerçek ≈ 1,26","gizli":true}],"durumlar":[{"metin":"Kesikli eğri gerçek çözüm y = 2(1 − e^(−x)): yükselir ama gittikçe yatıklaşır (içbükey aşağı)."},{"metin":"Adım 1: eğim 2 − 0 = 2, Δy = 2·1 = 2. Euler y(1) ≈ 2 verir.","goster":["s1","p1"]},{"metin":"Gerçek y(1) ≈ 1,26. Teğet, içbükey aşağı eğrinin üstünde kalır: tahmin büyük.","goster":["pt"]},{"metin":"Adım 2: eğim 2 − 2 = 0, y değişmez. Tahmin y = 2'de yatay gider, hep gerçek eğrinin üstünde.","goster":["s2"]}]},
        {"tip":"ornek","baslik":"Konkavlığı denklemden bul","durum":"dy/dx = x + y, x ≥ 0 ve y ≥ 0 iken Euler tahmini nasıl olur?","adimlar":["Denklemi x'e göre türet: y″ = 1 + y′.","y′ = x + y'yi yerine koy: y″ = 1 + x + y.","x ≥ 0, y ≥ 0 iken y″ > 0: çözüm *concave up*.","Teğetler eğrinin altında kalır."],"sonuc":"Tahmin gerçek değerden küçük (alttan tahmin)."}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["Alttan/üstten kuralı, çözüm eğrisinin konkavlığı adımlar boyunca aynı kaldığında geçerlidir; konkavlık değişiyorsa ya da Δx büyükse yönü yalnızca bu kuralla söyleme.","*Euler's method*: yₙ₊₁ = yₙ + (dy/dx)·Δx ve xₙ₊₁ = xₙ + Δx. BC'ye özgü bir konudur.","Eğim her zaman adımın başındaki noktada hesaplanır.","Adım sayısı = (hedef x − başlangıç x) / Δx. Δx negatifse geriye gidilir.","Tablo kur: n, x, y, dy/dx, Δy; son satırda eğim gerekmez.","Çözüm *concave up* (y″ > 0) ise tahmin gerçeğin altında, *concave down* (y″ < 0) ise üstünde kalır; gerekçe teğetin eğriye göre konumudur.","Konkavlığı bulmak için denklemin iki yanını türet ve y′ yerine denklemi yaz.","Euler, eğim alanında parça parça teğet izlemektir; yalnızca bir tahmindir."]}
      ]
    }
  ],
  sorular: [
    {"q":"dy/dx = y − x ve y(0) = 2 veriliyor. Δx = 1 ile Euler yöntemini iki adım uygulayarak y(2) için tahmin bulunuz.","opts":["5","6","7","9"],"a":2,"why":"(0, 2): eğim 2 − 0 = 2, y(1) ≈ 4. (1, 4): eğim 4 − 1 = 3, y(2) ≈ 7. B şıkkı tek büyük adımdır (Δx = 2 ile 2 + 2·2 = 6); adım sayısı (2 − 0)/1 = 2 olmalı."},
    {"q":"dy/dx = y ve y(0) = 1 için Δx = 0,5 ile Euler yöntemi y(1) için hangi tahmini verir ve bu tahmin gerçek değerle nasıl karşılaştırılır?","opts":["2,25; gerçek değerden küçüktür, çünkü çözüm concave up.","2,25; gerçek değerden büyüktür, çünkü çözüm concave up.","2,5; gerçek değerden küçüktür.","1,5; gerçek değerden büyüktür."],"a":0,"why":"y(0,5) ≈ 1 + 1·0,5 = 1,5; y(1) ≈ 1,5 + 1,5·0,5 = 2,25. y″ = y′ = y > 0: çözüm concave up, teğetler altta kalır. B şıkkı sayıyı doğru bulur ama yönü ters yorumlar (gerçek değer e ≈ 2,72 > 2,25)."},
    {"q":"Bir öğrenci dy/dx = xy, y(1) = 2 ve Δx = 0,5 ile Euler tablosunu doldurmaya başladı. Tablodan devam ederek y(2) için tahmini bulunuz.","fig":{"type":"table","head":["n","x","y","dy/dx"],"rows":[["0","1","2","2"],["1","1,5","3","?"],["2","2","?","—"]],"caption":"Yarım kalmış Euler tablosu"},"opts":["4,5","5,25","6","7,5"],"a":1,"why":"n = 1 satırında eğim 1,5·3 = 4,5; Δy = 4,5·0,5 = 2,25; y(2) ≈ 3 + 2,25 = 5,25. D şıkkı 3 + 4,5 = 7,5: eğimi Δx ile çarpmayı unutmak."},
    {"q":"dy/dx = 2 − y ve y(0) = 0 için Δx = 1 ile tek adımlık Euler tahmini y(1) ≈ 2 bulunuyor. Bu tahmin ve gerçek y(1) hakkında hangisi doğrudur?","opts":["Tahmin gerçek değerden küçüktür, çünkü y″ > 0.","Tahmin gerçek değerden büyüktür, çünkü y″ < 0.","Tahmin gerçek değere eşittir, çünkü eğim sabittir.","Gerçek çözüm bilinmeden karşılaştırma yapılamaz."],"a":1,"why":"y″ = −y′ = −(2 − y) = y − 2 < 0 iken (0 ≤ y < 2) çözüm concave down; teğet eğrinin üstünde kalır, tahmin büyüktür (gerçek y(1) ≈ 1,26). D şıkkı yanlış: çözümü bulmadan y″ işaretiyle karşılaştırma yapılır."},
    {"q":"dy/dx = y/x ve y(2) = 3 veriliyor. Δx = −1 ile tek adımlık Euler yöntemi y(1) için hangi tahmini verir?","opts":["1,5","2","4,5","0"],"a":0,"why":"(2, 3)'te eğim 3/2 = 1,5; Δy = 1,5·(−1) = −1,5; y(1) ≈ 3 − 1,5 = 1,5. C şıkkı Δx'in işaretini unutur (3 + 1,5)."}
  ]
};
