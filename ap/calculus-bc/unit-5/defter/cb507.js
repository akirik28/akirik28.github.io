/* Kitpath not defteri · cb507 · 5.10–5.11 Optimizasyon
   CED: College Board AP Calculus AB/BC (Unit 5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb507",
  amac: "Bu konu *optimization* yani optimizasyonu anlatıyor: gündelik bir sorudaki 'en büyük' ya da 'en az' ifadesini bir fonksiyona çevirip mutlak ekstremumunu bulmak. Amaç fonksiyonunu ve kısıtı kurmayı, tek değişkene inmeyi ve cevabı gerekçelendirmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Optimizasyon: en iyiyi bulmak",
      kisa: "'En büyük' ya da 'en küçük' görürsen bir fonksiyonun mutlak ekstremumunu arıyorsun.",
      bloklar: [
        {"tip":"kavramlar","kartlar":[{"ikon":"🎯","terim":"Optimization","tr":"optimizasyon","tanim":"Bir büyüklüğü verilen koşullar altında en büyük ya da en küçük yapmak; türevle mutlak ekstremum bulmak.","ornek":"40 m telle en geniş bahçeyi çevirmek."},{"ikon":"📈","terim":"Objective function","tr":"amaç fonksiyonu","tanim":"En büyük ya da en küçük yapılmak istenen büyüklüğün formülü.","ornek":"Alan A = x · y."},{"ikon":"🔗","terim":"Constraint","tr":"kısıt","tanim":"Değişkenleri birbirine bağlayan koşul; amaç fonksiyonunu tek değişkene indirmek için kullanılır.","ornek":"Tel uzunluğu: 2x + y = 40."}]},
        {"tip":"tablo","baslik":"Soru dilinden işleme","head":["Soruda","Ne yapılır","Tipik amaç fonksiyonu"],"rows":[["en büyük alan","alanı maksimum yap","A = x · y"],["en az malzeme","yüzey alanını minimum yap","S = taban + yan yüzler"],["en yüksek gelir","geliri maksimum yap","R = fiyat × adet"],["en yakın nokta","uzaklığı minimum yap","D = (x − a)² + (y − b)²"]],"vurgu":3}
      ]
    },
    {
      baslik: "Adım adım yöntem",
      kisa: "Çiz, amaç ve kısıtı yaz, tek değişkene in, türevle ara, gerekçele, cevapla.",
      bloklar: [
        {"tip":"adimlar","baslik":"Optimizasyon yolu","adimlar":[{"baslik":"Çiz ve değişkenleri adlandır","metin":"Şekil çiz; bilinenleri ve bilinmeyenleri harflerle göster."},{"baslik":"Amaç fonksiyonunu yaz","metin":"En büyük/küçük yapılacak büyüklüğü değişkenlerle ifade et."},{"baslik":"Kısıtla tek değişkene in","metin":"Kısıttan bir değişkeni çıkar, amaç fonksiyonuna yaz."},{"baslik":"Tanım kümesini belirle","metin":"Fiziksel olarak mümkün x değerleri (uzunluk > 0 gibi)."},{"baslik":"Türevle kritik noktaları bul","metin":"f′ = 0 ya da tanımsız olan x'leri çöz."},{"baslik":"Mutlak ekstremumu gerekçelendir","metin":"Aday testi, işaret değişimi ya da f″ ile."},{"baslik":"Soruyu cevapla","metin":"İstenen büyüklüğü birimiyle yaz."}]},
        {"tip":"tablo","baslik":"Hangi durumda hangi gerekçe","head":["Durum","Gerekçe"],"rows":[["Kapalı aralık [a, b]","Aday testi: uç noktalar ve kritik noktalar"],["Tek kritik nokta, açık aralık","f′ işaret değişimi (− → + min, + → − max)"],["Tek kritik nokta, f″ aralıkta hep aynı işaret","f″ > 0 mutlak min, f″ < 0 mutlak max"]],"vurgu":0}
      ]
    },
    {
      baslik: "Örnek 1: duvara yaslı bahçe",
      kisa: "Kısıttan y'yi çıkar, alanı x'in fonksiyonu yap, tepe noktasını bul.",
      bloklar: [
        {"tip":"ornek","baslik":"40 m tel, bir tarafı duvar","durum":"Kantinin duvarına yaslı dikdörtgen bahçenin alanı en çok kaç m² olabilir?","adimlar":["Duvara dik kenar x, duvara paralel kenar y. Tel yalnızca üç kenara gerekir: 2x + y = 40 → y = 40 − 2x.","Alan A = x · y = x(40 − 2x) = 40x − 2x². Tanım kümesi 0 < x < 20 (y > 0 olmalı).","A′ = 40 − 4x = 0 → x = 10. A″ = −4 < 0: tek kritik nokta ve konkav aşağı, mutlak maksimum.","x = 10 ise y = 20 ve A = 10 · 20 = 200 m²."],"sonuc":"10 m × 20 m, alan 200 m²"},
        {"tip":"grafik","baslik":"Alan A(x) = 40x − 2x², 0 < x < 20","xlabel":"x (m)","ylabel":"A (m²)","xmax":22,"ymax":220,"xticks":[{"v":5,"label":"5"},{"v":10,"label":"10"},{"v":15,"label":"15"},{"v":20,"label":"20"}],"yticks":[{"v":100,"label":"100"},{"v":200,"label":"200"}],"ogeler":[{"id":"c","tip":"egri","renk":0,"noktalar":[[0,0],[0.5,19.5],[1,38],[1.5,55.5],[2,72],[2.5,87.5],[3,102],[3.5,115.5],[4,128],[4.5,139.5],[5,150],[5.5,159.5],[6,168],[6.5,175.5],[7,182],[7.5,187.5],[8,192],[8.5,195.5],[9,198],[9.5,199.5],[10,200],[10.5,199.5],[11,198],[11.5,195.5],[12,192],[12.5,187.5],[13,182],[13.5,175.5],[14,168],[14.5,159.5],[15,150],[15.5,139.5],[16,128],[16.5,115.5],[17,102],[17.5,87.5],[18,72],[18.5,55.5],[19,38],[19.5,19.5],[20,0]]},{"id":"p5","tip":"nokta","renk":2,"x":5,"y":150,"etiket":"x=5: 150","gizli":true},{"id":"p15","tip":"nokta","renk":2,"x":15,"y":150,"etiket":"x=15: 150","gizli":true},{"id":"h","tip":"cizgi","renk":1,"from":[5,150],"to":[15,150],"kesik":true,"gizli":true},{"id":"mx","tip":"nokta","renk":1,"x":10,"y":200,"etiket":"max: 200","kilavuz":true,"gizli":true}],"durumlar":[{"metin":"x duvara dik kenar. Alan x ile önce artıyor, sonra azalıyor; uçlarda A = 0."},{"metin":"x = 5 ve x = 15 aynı alanı veriyor (150): tepe bu ikisinin tam ortasında.","goster":["p5","p15","h"]},{"metin":"Tepe x = 10'da: A = 10 · 20 = 200 m².","goster":["mx"]}]}
      ]
    },
    {
      baslik: "Örnek 2: açık kutu",
      kisa: "Kapalı aralıkta adayları karşılaştır: uç noktalar 0 verir, ortada tepe var.",
      bloklar: [
        {"tip":"ornek","baslik":"12 cm kenarlı kare karton","durum":"Köşelerden x cm kenarlı kareler kesilip katlanarak üstü açık kutu yapılıyor. En büyük hacim kaç cm³?","adimlar":["Taban kenarı 12 − 2x, yükseklik x: V = x(12 − 2x)². Tanım kümesi 0 ≤ x ≤ 6.","V′ = (12 − 2x)² + x · 2(12 − 2x)(−2) = (12 − 2x)(12 − 6x).","V′ = 0 → x = 6 ya da x = 2.","Adaylar: V(0) = 0, V(2) = 2 · 8² = 128, V(6) = 0. En büyüğü 128."],"sonuc":"x = 2 cm, V = 128 cm³"},
        {"tip":"grafik","baslik":"Kutu hacmi V(x) = x(12 − 2x)², 0 ≤ x ≤ 6","xlabel":"x (cm)","ylabel":"V (cm³)","xmax":6.6,"ymax":150,"xticks":[{"v":1,"label":"1"},{"v":2,"label":"2"},{"v":3,"label":"3"},{"v":4,"label":"4"},{"v":5,"label":"5"},{"v":6,"label":"6"}],"yticks":[{"v":50,"label":"50"},{"v":100,"label":"100"},{"v":128,"label":"128"}],"ogeler":[{"id":"c","tip":"egri","renk":0,"noktalar":[[0,0],[0.15,20.533],[0.3,38.988],[0.45,55.445],[0.6,69.984],[0.75,82.688],[0.9,93.636],[1.05,102.911],[1.2,110.592],[1.35,116.762],[1.5,121.5],[1.65,124.888],[1.8,127.008],[1.95,127.94],[2.1,127.764],[2.25,126.563],[2.4,124.416],[2.55,121.406],[2.7,117.612],[2.85,113.117],[3,108],[3.15,102.344],[3.3,96.228],[3.45,89.735],[3.6,82.944],[3.75,75.938],[3.9,68.796],[4.05,61.601],[4.2,54.432],[4.35,47.372],[4.5,40.5],[4.65,33.898],[4.8,27.648],[4.95,21.829],[5.1,16.524],[5.25,11.813],[5.4,7.776],[5.55,4.496],[5.7,2.052],[5.85,0.527],[6,0]]},{"id":"a1","tip":"nokta","renk":2,"x":1,"y":100,"etiket":"x=1: 100","gizli":true},{"id":"a3","tip":"nokta","renk":2,"x":3,"y":108,"etiket":"x=3: 108","gizli":true},{"id":"e0","tip":"nokta","renk":2,"x":0,"y":0,"etiket":"V(0) = 0","gizli":true},{"id":"e6","tip":"nokta","renk":2,"x":6,"y":0,"etiket":"V(6) = 0","gizli":true},{"id":"mx","tip":"nokta","renk":1,"x":2,"y":128,"etiket":"max: 128","kilavuz":true,"gizli":true}],"durumlar":[{"metin":"x köşeden kesilen karenin kenarı. Çok küçük x'te kutu sığ, çok büyük x'te taban küçük."},{"metin":"Birkaç deneme: V(1) = 100, V(3) = 108. En büyük değer bu ikisi arasında.","goster":["a1","a3"]},{"metin":"Uçlarda V = 0. Adaylar: V(0) = 0, V(6) = 0 ve kritik nokta x = 2.","goster":["e0","e6"]},{"metin":"V′ = (12 − 2x)(12 − 6x) = 0 → x = 2: V(2) = 2 · 8² = 128 cm³ mutlak maksimum.","goster":["mx"]}]}
      ]
    },
    {
      baslik: "Örnek 3: en yakın nokta",
      kisa: "Uzaklığı küçültmek yerine karesini küçült: karekök gerekmez.",
      bloklar: [
        {"tip":"ornek","baslik":"y = x² parabolü ve P(0; 1,5)","durum":"Parabol üzerinde P'ye en yakın nokta hangisi?","adimlar":["Parabol üstündeki nokta (x, x²). Uzaklığın karesi D = x² + (x² − 1,5)². D en küçükken uzaklık da en küçüktür.","D′ = 2x + 2(x² − 1,5)(2x) = 4x(x² − 1) = 0 → x = 0 ya da x = ±1.","D(0) = 2,25; D(±1) = 1 + 0,25 = 1,25.","x → ±∞ iken D → ∞; yani en küçük değer 1,25, x = ±1'de."],"sonuc":"(1, 1) ve (−1, 1); uzaklık √1,25 ≈ 1,12"},
        {"tip":"grafik","baslik":"y = x² üzerinde P(0; 1,5)'e en yakın nokta","xlabel":"x","ylabel":"y","xmax":4,"ymax":2.8,"xticks":[{"v":0,"label":"−2"},{"v":1,"label":"−1"},{"v":3,"label":"1"},{"v":4,"label":"2"}],"yticks":[{"v":1,"label":"1"},{"v":2,"label":"2"}],"ogeler":[{"id":"ay","tip":"cizgi","renk":1,"kesik":true,"from":[2,0],"to":[2,2.8]},{"id":"c","tip":"egri","renk":0,"noktalar":[[0.33,2.789],[0.414,2.517],[0.497,2.259],[0.581,2.015],[0.664,1.785],[0.748,1.569],[0.831,1.367],[0.915,1.178],[0.998,1.004],[1.082,0.844],[1.165,0.697],[1.249,0.565],[1.332,0.446],[1.416,0.342],[1.499,0.251],[1.583,0.174],[1.666,0.112],[1.75,0.063],[1.833,0.028],[1.916,0.007],[2,0],[2.084,0.007],[2.167,0.028],[2.25,0.063],[2.334,0.112],[2.418,0.174],[2.501,0.251],[2.584,0.342],[2.668,0.446],[2.752,0.565],[2.835,0.697],[2.918,0.844],[3.002,1.004],[3.086,1.178],[3.169,1.367],[3.253,1.569],[3.336,1.785],[3.42,2.015],[3.503,2.259],[3.587,2.517],[3.67,2.789]]},{"id":"P","tip":"nokta","renk":1,"x":2,"y":1.5,"etiket":"P"},{"id":"q1","tip":"nokta","renk":2,"x":3.5,"y":2.25,"etiket":"D = 2,81","gizli":true},{"id":"l1","tip":"cizgi","renk":3,"from":[2,1.5],"to":[3.5,2.25],"kesik":true,"gizli":true},{"id":"q2","tip":"nokta","renk":2,"x":2.5,"y":0.25,"etiket":"D = 1,81","gizli":true},{"id":"l2","tip":"cizgi","renk":3,"from":[2,1.5],"to":[2.5,0.25],"kesik":true,"gizli":true},{"id":"r1","tip":"nokta","renk":2,"x":3,"y":1,"etiket":"D = 1,25","gizli":true},{"id":"m1","tip":"cizgi","renk":2,"from":[2,1.5],"to":[3,1],"gizli":true},{"id":"r2","tip":"nokta","renk":2,"x":1,"y":1,"etiket":"D = 1,25","gizli":true},{"id":"m2","tip":"cizgi","renk":2,"from":[2,1.5],"to":[1,1],"gizli":true}],"durumlar":[{"metin":"Parabol y = x² ve P(0; 1,5). D = uzaklığın karesi; D küçülürse uzaklık da küçülür."},{"metin":"(1,5; 2,25): D = 1,5² + 0,75² = 2,25 + 0,5625 = 2,81. Uzak.","goster":["q1","l1"]},{"metin":"(0,5; 0,25): D = 0,25 + 1,5625 = 1,81. Daha yakın ama en yakın değil.","goster":["q2","l2"]},{"metin":"(±1, 1): D = 1 + 0,25 = 1,25. En küçük değer, iki simetrik nokta.","goster":["r1","m1","r2","m2"]}]}
      ]
    },
    {
      baslik: "Örnek 4: bilet geliri",
      kisa: "Cevap istenen büyüklük olmalı: x'i bulmak yetmez, fiyata dön.",
      bloklar: [
        {"tip":"ornek","baslik":"Okul konseri bileti","durum":"Bilet 20 TL iken 100 bilet satılıyor. Her 1 TL indirimde 10 bilet daha satılıyor. En yüksek gelir için bilet fiyatı kaç TL?","adimlar":["x = indirim (TL). Fiyat 20 − x, adet 100 + 10x. Gelir R = (20 − x)(100 + 10x) = 2000 + 100x − 10x², 0 ≤ x ≤ 20.","R′ = 100 − 20x = 0 → x = 5. R″ = −20 < 0: mutlak maksimum. (Uçlar: R(0) = 2000, R(20) = 0.)","Fiyat 20 − 5 = 15 TL, adet 100 + 50 = 150, gelir 15 · 150 = 2250 TL."],"sonuc":"Bilet 15 TL; gelir 2250 TL"},
        {"tip":"tuzak","metin":"En sık hata x'i bulunca bırakmak. Soru fiyatı soruyorsa fiyata, alanı soruyorsa alana dön; birimi yaz.","yanlis":"x = 5 bulundu, cevap 5 TL.","dogru":"x indirimdi. Fiyat 20 − 5 = 15 TL."}
      ]
    },
    {
      baslik: "Gerekçe yazmak",
      kisa: "Ekstremumun mutlak olduğunu aralık türüne göre gerekçelendir.",
      bloklar: [
        {"tip":"liste","baslik":"Sınavda böyle yaz","maddeler":[{"ikon":"📋","baslik":"Kapalı aralık","metin":"\"V is continuous on [0, 6]. The candidates are V(0) = 0, V(2) = 128, V(6) = 0, so the absolute maximum is 128.\""},{"ikon":"↕️","baslik":"İşaret değişimi","metin":"\"A′ changes from positive to negative at x = 10, and x = 10 is the only critical point, so A has an absolute maximum there.\""},{"ikon":"🥣","baslik":"İkinci türev","metin":"\"A″(x) = −4 < 0 for all x, so the critical point x = 10 gives the absolute maximum.\""}]},
        {"tip":"ikili","sol":{"ikon":"📋","baslik":"Aday testi","maddeler":["Kapalı aralık [a, b]","Uç noktalara da bak"]},"sag":{"ikon":"↕️","baslik":"İşaret ya da f″ gerekçesi","maddeler":["Açık aralık ya da tüm reel sayılar","Tek kritik nokta"]},"oyun":[{"metin":"Kutu hacmi, 0 ≤ x ≤ 6","cevap":"sol","neden":"Kapalı aralık: uçlar ve kritik noktalar karşılaştırılır."},{"metin":"Parabolde en yakın nokta, x ∈ ℝ","cevap":"sag","neden":"Aralık sınırsız: işaret ya da uç davranışı gerekir."},{"metin":"Bilet geliri, 0 ≤ x ≤ 20","cevap":"sol","neden":"Kapalı aralık: R(0), R(5), R(20) karşılaştırılır."},{"metin":"Tanım kümesi (0, ∞) olan bir maliyet fonksiyonu","cevap":"sag","neden":"Uç noktalar aralığa dahil değil."}]}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["'En büyük/en küçük' görünce amaç fonksiyonunu yaz ve mutlak ekstremumunu ara.","Kısıtla tek değişkene in; tanım kümesini fiziksel koşullardan (uzunluk > 0) belirle.","Türevi sıfıra eşitle, kritik noktaları bul; uç noktaları da aday say.","Kapalı aralıkta aday testi; tek kritik noktada işaret değişimi ya da f″ işareti ile gerekçelendir.","En yakın nokta problemlerinde uzaklığın karesini küçült.","Cevabı istenen büyüklükle ve birimle yaz (x değil fiyat; alan değil kenar).","Yazılı gerekçe: aday değerlerini göster ya da \"changes sign\" / \"f″ < 0\" cümlesini kur."]}
      ]
    }
  ],
  sorular: [
    {"q":"Çevresi 24 m olan dikdörtgen bir bahçenin alanı en çok kaç m² olabilir?","opts":["32","36","42","48"],"a":1,"why":"Kenarlar x ve y için 2x + 2y = 24, y = 12 − x. A = x(12 − x), A′ = 12 − 2x = 0 → x = 6; A = 36 (kare). 32, x = 4 için bir deneme (4 · 8); 48 hiçbir x'e karşılık gelmez."},
    {"q":"Tabanı kare ve üstü açık bir kutunun hacmi 32 cm³ olacak. Yüzey alanı en az kaç cm²'dir? (Taban kenarı x, yükseklik h; S = x² + 4xh)","opts":["32","40","48","64"],"a":2,"why":"x²h = 32 → h = 32/x². S = x² + 128/x. S′ = 2x − 128/x² = 0 → x³ = 64, x = 4, h = 2. S(4) = 16 + 32 = 48. S″ = 2 + 256/x³ > 0: minimum."},
    {"q":"Bir kantinde simit 10 TL'den günde 60 adet satılıyor. Fiyat her 1 TL arttıkça günlük satış 5 adet düşüyor. Günlük geliri en yüksek yapan simit fiyatı kaç TL'dir?","opts":["11 TL","10 TL","12 TL","15 TL"],"a":0,"why":"x = zam (TL). Gelir R = (10 + x)(60 − 5x) = 600 + 10x − 5x². R′ = 10 − 10x = 0 → x = 1; fiyat 11 TL, gelir 605. x = 1 yerine fiyatı sorduğu için 1 TL değil 11 TL; 10 TL'de gelir 600."},
    {"q":"y = √x eğrisi üzerinde (3, 0) noktasına en yakın noktanın x-koordinatı kaçtır?","opts":["x = 1,5","x = 2","x = 3","x = 2,5"],"a":3,"why":"Uzaklığın karesi D = (x − 3)² + x. D′ = 2(x − 3) + 1 = 2x − 5 = 0 → x = 2,5. D″ = 2 > 0 ve D(0) = 9 > D(2,5) = 2,75: minimum. x = 3 tuzaktır; o, noktanın kendi x'idir."},
    {"q":"18 cm kenarlı kare bir kartonun köşelerinden x cm kenarlı kareler kesilip katlanarak üstü açık kutu yapılıyor. En büyük hacim kaç cm³'tür?","opts":["324","432","486","648"],"a":1,"why":"V = x(18 − 2x)², 0 ≤ x ≤ 9. V′ = (18 − 2x)(18 − 6x) = 0 → x = 3 ya da 9. V(0) = V(9) = 0, V(3) = 3 · 12² = 432. Soru hacmi sorduğu için x = 3 değil 432."}
  ]
};
