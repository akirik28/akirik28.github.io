/* Kitora not defteri · cb504 · 5.5 Aday Testi: Mutlak Ekstremumlar
   CED: College Board AP Calculus AB/BC (Unit 5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb504",
  amac: "Bu konu *Candidates Test* yani Aday Testi'ni anlatıyor: kapalı bir aralıkta mutlak maksimum ve minimum, uç noktalarda ya da kritik noktalarda bulunur. Adayları listeleyip karşılaştırmayı, açık aralıklarda ise işaret analizini kullanmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Aday testi: dört adım",
      kisa: "Kapalı aralıkta adayları listele, hepsini hesapla, en büyüğü ve en küçüğü seç.",
      bloklar: [
        {"tip":"kavramlar","kartlar":[{"ikon":"📋","terim":"Candidates Test","tr":"aday testi","tanim":"Kapalı [a, b] aralığında mutlak ekstremum ya kritik noktada ya da uç noktada olur; hepsi aday listesine girer.","ornek":"Adaylar: a, b ve (a, b) içindeki kritik noktalar."},{"ikon":"📍","terim":"Endpoint","tr":"uç nokta","tanim":"Aralığın başı ve sonu. Orada türev sıfır olmasa bile mutlak ekstremum olabilir.","ornek":"[0, 3] için uç noktalar x = 0 ve x = 3."}]},
        {"tip":"adimlar","baslik":"Aday testi","adimlar":[{"baslik":"Koşulu doğrula","metin":"f, [a, b]'de sürekli mi? Öyleyse mutlak max ve min vardır (Ekstremum Değer Teoremi)."},{"baslik":"Kritik noktaları bul","metin":"f′ = 0 ya da tanımsız olan x'ler; yalnızca (a, b) içindekileri al."},{"baslik":"Adaylarda f'yi hesapla","metin":"Uç noktalar ve kritik noktalar için f(x) değerlerini yaz."},{"baslik":"Karşılaştır","metin":"En büyük değer mutlak max, en küçük değer mutlak min."}]}
      ]
    },
    {
      baslik: "Örnek: polinom",
      kisa: "Yerel maksimum mutlak olmak zorunda değil; uç noktalara da bak.",
      bloklar: [
        {"tip":"ornek","baslik":"f(x) = 2x³ − 9x² + 12x, aralık [0, 3]","durum":"Mutlak maksimum ve minimum nedir?","adimlar":["f sürekli, aralık kapalı: mutlak max ve min vardır.","f′(x) = 6x² − 18x + 12 = 6(x − 1)(x − 2) → kritik noktalar x = 1, x = 2 (ikisi de (0, 3) içinde).","Uç noktalar: f(0) = 0; f(3) = 54 − 81 + 36 = 9. Kritik: f(1) = 2 − 9 + 12 = 5; f(2) = 16 − 36 + 24 = 4.","Adaylar: 0, 5, 4, 9. En büyük 9 (x = 3), en küçük 0 (x = 0)."],"sonuc":"Mutlak max 9 (x = 3); mutlak min 0 (x = 0)"},
        {"tip":"grafik","baslik":"f(x) = 2x³ − 9x² + 12x, aralık [0, 3]","xlabel":"x","ylabel":"y","xmax":3.4,"ymax":10,"xticks":[{"v":1,"label":"1"},{"v":2,"label":"2"},{"v":3,"label":"3"}],"yticks":[{"v":0,"label":"0"},{"v":5,"label":"5"},{"v":9,"label":"9"}],"ogeler":[{"id":"c","tip":"egri","renk":0,"noktalar":[[0,0],[0.083,0.939],[0.167,1.759],[0.25,2.469],[0.333,3.074],[0.417,3.582],[0.5,4],[0.583,4.334],[0.667,4.593],[0.75,4.781],[0.833,4.907],[0.917,4.978],[1,5],[1.083,4.98],[1.167,4.926],[1.25,4.844],[1.333,4.741],[1.417,4.624],[1.5,4.5],[1.583,4.376],[1.667,4.259],[1.75,4.156],[1.833,4.074],[1.917,4.02],[2,4],[2.083,4.022],[2.167,4.093],[2.25,4.219],[2.333,4.407],[2.417,4.666],[2.5,5],[2.583,5.418],[2.667,5.926],[2.75,6.531],[2.833,7.241],[2.917,8.061],[3,9]]},{"id":"e0","tip":"nokta","renk":2,"x":0,"y":0,"etiket":"uç: 0","gizli":true},{"id":"e3","tip":"nokta","renk":2,"x":3,"y":9,"etiket":"uç: 9","gizli":true},{"id":"c1","tip":"nokta","renk":1,"x":1,"y":5,"etiket":"f(1) = 5","gizli":true},{"id":"c2","tip":"nokta","renk":1,"x":2,"y":4,"etiket":"f(2) = 4","gizli":true}],"durumlar":[{"metin":"Kapalı aralık [0, 3] üzerinde f(x) = 2x³ − 9x² + 12x."},{"metin":"Uç noktalar aday: f(0) = 0 ve f(3) = 9.","goster":["e0","e3"]},{"metin":"f′ = 6(x − 1)(x − 2) = 0 → x = 1 ve 2 de aday: f(1) = 5, f(2) = 4.","goster":["c1","c2"]},{"metin":"En büyük aday 9 (sağ uç): mutlak max. En küçük 0 (sol uç): mutlak min. x = 1'deki 5 yalnızca yerel max.","set":{"e3":{"x":3,"y":9,"etiket":"mutlak max 9"},"e0":{"x":0,"y":0,"etiket":"mutlak min 0"}}}]},
        {"tip":"tuzak","metin":"f′ = 0 olan yerel tepeyi mutlak maksimum sanıp uç noktaları atlamak en sık hatadır.","yanlis":"x = 1'de f′ = 0 ve f = 5, mutlak maksimum 5.","dogru":"Uç noktaya da bak: f(3) = 9 > 5. Tüm adayları karşılaştır."}
      ]
    },
    {
      baslik: "Aralık değişince cevap değişir",
      kisa: "Aynı fonksiyonda aralığı değiştirmek adayları ve sonucu değiştirir.",
      bloklar: [
        {"tip":"tablo","baslik":"f(x) = 2x³ − 9x² + 12x farklı aralıklarda","head":["Aralık","Adaylar (x → f)","Mutlak max","Mutlak min"],"rows":[["[0, 3]","0→0, 1→5, 2→4, 3→9","9 (x = 3)","0 (x = 0)"],["[0; 1,5]","0→0, 1→5, 1,5→4,5","5 (x = 1)","0 (x = 0)"],["[1, 3]","1→5, 2→4, 3→9","9 (x = 3)","4 (x = 2)"],["(0, 3) açık","uç noktalar aralıkta değil","yok (9'a yaklaşır)","yok (0'a yaklaşır)"]],"vurgu":3},
        {"tip":"ikili","sol":{"ikon":"📋","baslik":"Aday testi uygulanır","maddeler":["Kapalı aralık [a, b]","f aralıkta sürekli"]},"sag":{"ikon":"📈","baslik":"İşaret analizi gerekir","maddeler":["Açık ya da sonsuz aralık","Max ya da min olmayabilir"]},"oyun":[{"metin":"f(x) = x^(2/3), aralık [−1, 8]","cevap":"sol","neden":"Sürekli ve aralık kapalı."},{"metin":"f(x) = x + 1/x, aralık (0, ∞)","cevap":"sag","neden":"Aralık açık ve sonsuz."},{"metin":"f(x) = 2x³ − 9x² + 12x, aralık (0, 3)","cevap":"sag","neden":"Uç noktalar aralığa dahil değil."},{"metin":"f(x) = x² − 4x + 5, aralık [0, 3]","cevap":"sol","neden":"Sürekli polinom, kapalı aralık."}]}
      ]
    },
    {
      baslik: "Türevin olmadığı kritik noktalar",
      kisa: "f′ tanımsız olan iç noktalar da aday listesine girer.",
      bloklar: [
        {"tip":"ornek","baslik":"f(x) = x^(2/3), aralık [−1, 8]","durum":"Mutlak ekstremumlar nerede?","adimlar":["f(x) = (∛x)² sürekli; aralık kapalı.","f′(x) = 2/(3∛x): sıfır olmaz, ama x = 0'da tanımsız. f(0) tanımlı, x = 0 kritik nokta.","Adaylar: f(−1) = 1, f(0) = 0, f(8) = (∛8)² = 4.","En büyük 4 (x = 8, uç), en küçük 0 (x = 0, kritik)."],"sonuc":"Mutlak max 4 (x = 8); mutlak min 0 (x = 0)"},
        {"tip":"grafik","baslik":"f(x) = x^(2/3), aralık [−1, 8]","xlabel":"x","ylabel":"y","xmax":11,"ymax":5.2,"xticks":[{"v":1,"label":"−1"},{"v":2,"label":"0"},{"v":6,"label":"4"},{"v":10,"label":"8"}],"yticks":[{"v":1.6,"label":"1"},{"v":2.6,"label":"2"},{"v":4.6,"label":"4"}],"ogeler":[{"id":"ax","tip":"cizgi","renk":1,"kesik":true,"from":[0,0.6],"to":[11,0.6]},{"id":"ay","tip":"cizgi","renk":1,"kesik":true,"from":[2,0],"to":[2,5.2]},{"id":"c","tip":"egri","renk":0,"noktalar":[[1,1.6],[1.209,1.456],[1.386,1.322],[1.535,1.201],[1.657,1.09],[1.756,0.991],[1.834,0.903],[1.893,0.826],[1.936,0.76],[1.966,0.706],[1.984,0.663],[1.995,0.631],[1.999,0.61],[2,0.601],[2,0.603],[2.002,0.616],[2.008,0.64],[2.021,0.676],[2.043,0.723],[2.077,0.781],[2.125,0.85],[2.19,0.931],[2.275,1.022],[2.381,1.126],[2.512,1.24],[2.67,1.366],[2.857,1.503],[3.077,1.651],[3.331,1.81],[3.622,1.981],[3.953,2.163],[4.326,2.356],[4.744,2.56],[5.209,2.776],[5.724,3.002],[6.291,3.241],[6.913,3.49],[7.592,3.751],[8.332,4.023],[9.133,4.306],[10,4.6]]},{"id":"a","tip":"nokta","renk":2,"x":1,"y":1.6,"etiket":"f(−1) = 1","gizli":true},{"id":"b","tip":"nokta","renk":1,"x":2,"y":0.6,"etiket":"f(0) = 0","gizli":true},{"id":"d","tip":"nokta","renk":2,"x":10,"y":4.6,"etiket":"f(8) = 4","gizli":true}],"durumlar":[{"metin":"f(x) = x^(2/3) = (∛x)²; x = 0'da sivri uç var, orada teğet dikey."},{"metin":"f′(x) = 2/(3∛x): hiçbir yerde sıfır değil, ama x = 0'da tanımsız. f(0) tanımlı, x = 0 kritik nokta.","goster":["b"]},{"metin":"Adaylar: sol uç f(−1) = 1, sağ uç f(8) = 4. Mutlak max 4, mutlak min 0.","goster":["a","d"]}]}
      ]
    },
    {
      baslik: "Kapalı olmayan aralıklarda işaret analizi",
      kisa: "Açık aralıkta kritik noktanın işaret değişimine ve uçlardaki davranışa bak.",
      bloklar: [
        {"tip":"ornek","baslik":"f(x) = x + 1/x, aralık (0, ∞)","durum":"Mutlak ekstremum var mı?","adimlar":["Aralık kapalı değil; aday testi tek başına yetmez, işaret analizi yap.","f′(x) = 1 − 1/x² = (x² − 1)/x². (0, ∞)'daki tek kritik nokta x = 1.","(0, 1)'de f′ < 0, (1, ∞)'da f′ > 0: x = 1'de − → +. f önce azalıp sonra artar, her yerde f(1) = 2'nin üstünde kalır.","x → 0⁺ ve x → ∞ iken f → ∞: mutlak maksimum yok."],"sonuc":"Mutlak min 2 (x = 1); mutlak max yok"},
        {"tip":"grafik","baslik":"f(x) = x + 1/x, x > 0","xlabel":"x","ylabel":"y","xmax":4.4,"ymax":6,"xticks":[{"v":1,"label":"1"},{"v":2,"label":"2"},{"v":3,"label":"3"},{"v":4,"label":"4"}],"yticks":[{"v":2,"label":"2"},{"v":4,"label":"4"},{"v":6,"label":"6"}],"ogeler":[{"id":"c","tip":"egri","renk":0,"noktalar":[[0.19,5.453],[0.205,5.082],[0.221,4.741],[0.239,4.427],[0.258,4.138],[0.278,3.874],[0.3,3.632],[0.324,3.412],[0.349,3.211],[0.377,3.029],[0.407,2.864],[0.439,2.716],[0.474,2.584],[0.511,2.467],[0.552,2.364],[0.596,2.274],[0.643,2.198],[0.694,2.135],[0.749,2.084],[0.808,2.046],[0.872,2.019],[0.941,2.004],[1.015,2],[1.096,2.008],[1.182,2.028],[1.276,2.06],[1.377,2.103],[1.486,2.159],[1.603,2.227],[1.73,2.308],[1.867,2.403],[2.015,2.511],[2.175,2.635],[2.347,2.773],[2.533,2.927],[2.733,3.099],[2.949,3.288],[3.183,3.497],[3.435,3.726],[3.707,3.976],[4,4.25]]},{"id":"mn","tip":"nokta","renk":2,"x":1,"y":2,"etiket":"mutlak min 2","gizli":true},{"id":"y1","tip":"yazi","renk":2,"x":0.55,"y":5.6,"metin":"x → 0⁺: f → ∞","gizli":true},{"id":"y2","tip":"yazi","renk":2,"x":3.5,"y":5,"metin":"x → ∞: f → ∞","gizli":true}],"durumlar":[{"metin":"Aralık (0, ∞) kapalı değil: aday testi tek başına yetmez."},{"metin":"x = 1 tek kritik nokta; solunda f azalıyor, sağında artıyor (− → +).","goster":["mn"]},{"metin":"Eğri her yerde f(1) = 2'nin üstünde: mutlak minimum 2. Uçlarda f sınırsız büyüdüğü için mutlak maksimum yok.","goster":["y1","y2"]}]}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["Kapalı [a, b] üzerinde sürekli f için mutlak max ve min vardır; yeri uç noktalarda ya da kritik noktalardadır.","Aday testi: uç noktaları ve (a, b) içindeki kritik noktaları listele, f'yi hesapla, en büyüğü ve en küçüğü seç.","Kritik nokta: f′ = 0 ya da tanımsız (f tanımlı). Tanımsız türev de aday üretir (x^(2/3), x = 0).","Yerel maksimum mutlak olmak zorunda değil; uç noktaları atlama.","Cevap hem değeri hem yeri (x) isteyebilir: \"mutlak max 9\" ile \"x = 3\" aynı şey değil.","Açık ya da sonsuz aralıkta aday testi yetmez: işaret analizi ve uçlardaki limit davranışına bak.","Tek kritik nokta ve orada − → + ise o nokta aralıkta mutlak minimum, + → − ise mutlak maksimumdur.","Aralık değişirse adaylar ve sonuç değişir."]}
      ]
    }
  ],
  sorular: [
    {"q":"f(x) = x³ − 3x fonksiyonunun [0, 2] aralığındaki mutlak minimum değeri kaçtır?","opts":["−2","0","2","−1"],"a":0,"why":"f′ = 3x² − 3 = 0 → x = 1 (x = −1 aralık dışı). Adaylar: f(0) = 0, f(1) = −2, f(2) = 2. En küçük −2. Çekici yanlış şık 0: sol uç değeri, ama kritik noktadaki −2 daha küçük."},
    {"q":"g, [1, 5] aralığında sürekli bir fonksiyondur. g′(2) = 0 ve g′(4) tanımsızdır; başka kritik nokta yoktur. Değerler tabloda verilmiştir. Mutlak maksimum ve mutlak minimum nedir?","fig":{"type":"table","head":["x","1","2","4","5"],"rows":[["g(x)","3","6","−2","4"]],"caption":"g, [1, 5] üzerinde sürekli."},"opts":["Mutlak max 4 (x = 5), mutlak min 3 (x = 1)","Mutlak max 6 (x = 2), mutlak min 3 (x = 1)","Mutlak max 4 (x = 5), mutlak min −2 (x = 4)","Mutlak max 6 (x = 2), mutlak min −2 (x = 4)"],"a":3,"why":"Adaylar uç noktalar (1, 5) ve kritik noktalar (2, 4). En büyük 6 (x = 2), en küçük −2 (x = 4). A yalnızca uç noktalara bakar; B ise türevi tanımsız olan x = 4'ü (g = −2) atlar."},
    {"q":"f(x) = x^(2/3) fonksiyonunun [−8, 1] aralığındaki mutlak maksimum değeri kaçtır?","opts":["0","1","4","8"],"a":2,"why":"f(−8) = (∛−8)² = 4, f(0) = 0, f(1) = 1. En büyük değer 4 (x = −8'de). 8 çekici yanlış şık: x değeri, f değeri değil."},
    {"q":"f(x) = x + 4/x fonksiyonu (0, ∞) aralığında düşünülüyor. Aşağıdakilerden hangisi doğrudur?","opts":["Mutlak maksimum 4 vardır, mutlak minimum yoktur.","Mutlak minimum 4 vardır (x = 2), mutlak maksimum yoktur.","Hem mutlak maksimum hem mutlak minimum vardır.","Mutlak minimum 0'dır."],"a":1,"why":"f′ = 1 − 4/x² = 0 → x = 2. (0, 2)'de f′ < 0, (2, ∞)'da f′ > 0: x = 2'de − → +, f(2) = 4 mutlak minimum. x → 0⁺ ve x → ∞ iken f → ∞, maksimum yok."},
    {"q":"f(x) = 2x³ − 9x² + 12x fonksiyonu için (0, 3) açık aralığında mutlak maksimum değeri nedir?","opts":["9","5","Mutlak maksimum yoktur","4"],"a":2,"why":"f, (0, 3)'te x = 3'e yaklaşırken 9'a yaklaşır ama bu değere ulaşmaz (uç nokta aralıkta değil). x = 1'deki 5 yalnızca yerel max. Daha büyük değerler (9'a yaklaşan) her zaman var, bu yüzden mutlak max yok."}
  ]
};
