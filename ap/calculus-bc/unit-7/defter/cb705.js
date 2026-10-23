/* Kitpath not defteri · cb705 · 7.8 Üstel Modeller
   Kaynak: College Board CED (Calculus BC, Unit 7). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb705",
  amac: "Bu konu *exponential model* yani üstel modeli anlatıyor: bir niceliğin değişim hızı, o niceliğin kendisiyle orantılıysa dy/dt = ky ve çözüm y = y₀e^(kt) olur. Büyüme ve azalmayı, iki veriden k'yi bulmayı ve soru çözmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Orantı: miktar büyüdükçe hız büyür",
      kisa: "dy/dt = ky: değişim hızı mevcut miktarla orantılıdır.",
      bloklar: [
        {"tip":"hikaye","ikon":"🏦","baslik":"Faizli birikim","metin":"Birikimine sürekli faiz işleyen bir hesapta para ne kadar çoksa o kadar hızlı artar: 1000 TL'nin artış hızı, 100 TL'ninkinin on katıdır. Hız mevcut miktarla orantılı: dy/dt = ky."},
        {"tip":"formul","parcalar":[{"t":"dy/dt = ky","alt":"hız, miktarla orantılı"},"⟹",{"t":"y = y₀e^(kt)","alt":"y₀ = başlangıç miktarı"}],"aciklama":"k > 0 ise ==üstel büyüme==, k < 0 ise ==üstel azalma==. y₀ = y(0) başlangıç değeridir."},
        {"tip":"kavramlar","kartlar":[{"ikon":"📈","terim":"Exponential growth / decay","tr":"üstel büyüme / azalma","tanim":"Değişim hızının miktarın kendisiyle orantılı olduğu durum; eğri y₀e^(kt) biçimindedir.","ornek":"Bakteri sayısı büyür, kandaki ilaç miktarı azalır."},{"ikon":"🔑","terim":"Proportionality constant","tr":"orantı sabiti","tanim":"dy/dt'yi y'ye bölünce çıkan sabit k; miktarın anlık göreli değişim oranıdır.","ornek":"k = 0,05: hız, miktarın %5'i kadar."}]}
      ]
    },
    {
      baslik: "Çözümü bulmak: ayırma yöntemi",
      kisa: "dy/y = k dt integre edilince y = Ae^(kt) çıkar; A = y₀.",
      bloklar: [
        {"tip":"ornek","baslik":"dy/dt = ky","durum":"Çözümü bul (y > 0).","adimlar":["Ayır: dy/y = k dt.","İntegre et: ln|y| = kt + C.","Üstel al: y = A·e^(kt) (A = ±e^C).","t = 0 koy: y(0) = A, yani A = y₀."],"sonuc":"y = y₀·e^(kt)"},
        {"tip":"tuzak","metin":"Üstel modelde sabit olan hız değil, orandır: y her birimde aynı sayı kadar değil, aynı kat kadar artar.","yanlis":"dy/dt = ky olduğundan y zamanla doğrusal artar.","dogru":"Hız y ile birlikte büyüdüğü için y üstel artar: y = y₀e^(kt)."}
      ]
    },
    {
      baslik: "k'nin işareti: büyüme ve azalma",
      kisa: "k > 0 büyüme, k < 0 azalma; ikiye katlanma ya da yarılanma süresi sabittir.",
      bloklar: [
        {"tip":"ikili","sol":{"ikon":"📈","baslik":"k > 0: üstel büyüme","maddeler":["dy/dt > 0, y artar","Örnek: bakteri, faiz"]},"sag":{"ikon":"📉","baslik":"k < 0: üstel azalma","maddeler":["dy/dt < 0, y azalır ve 0'a yaklaşır","Örnek: kandaki ilaç"]},"oyun":[{"metin":"dy/dt = 0,3y","cevap":"sol","neden":"k = 0,3 pozitif: büyüme."},{"metin":"dy/dt = −0,3y","cevap":"sag","neden":"k = −0,3 negatif: azalma."},{"metin":"Kandaki ilaç, miktarıyla orantılı hızda azalıyor.","cevap":"sag","neden":"Azalan ve miktarıyla orantılı: k < 0."},{"metin":"Bakteri kültüründe artış hızı sayıyla orantılı.","cevap":"sol","neden":"Artan ve sayıyla orantılı: k > 0."}]},
        {"tip":"grafik","baslik":"Üstel büyüme ve azalma","xlabel":"t","ylabel":"y","xmax":4,"ymax":8,"xticks":[{"v":1,"label":"1"},{"v":2,"label":"2"},{"v":3,"label":"3"},{"v":4,"label":"4"}],"yticks":[{"v":1,"label":"1"},{"v":2,"label":"2"},{"v":4,"label":"4"},{"v":8,"label":"8"}],"ogeler":[{"id":"g","tip":"egri","renk":0,"noktalar":[[0,1],[0.25,1.189],[0.5,1.414],[0.75,1.682],[1,2],[1.25,2.378],[1.5,2.828],[1.75,3.364],[2,4],[2.25,4.757],[2.5,5.657],[2.75,6.727],[3,8]],"etiket":"k > 0"},{"id":"d","tip":"egri","renk":2,"noktalar":[[0,8],[0.25,6.727],[0.5,5.657],[0.75,4.757],[1,4],[1.25,3.364],[1.5,2.828],[1.75,2.378],[2,2],[2.25,1.682],[2.5,1.414],[2.75,1.189],[3,1],[3.25,0.841],[3.5,0.707],[3.75,0.595],[4,0.5]],"etiket":"k < 0","gizli":true},{"id":"g1","tip":"nokta","renk":0,"x":1,"y":2,"gizli":true},{"id":"g2","tip":"nokta","renk":0,"x":2,"y":4,"gizli":true},{"id":"g3","tip":"nokta","renk":0,"x":3,"y":8,"gizli":true},{"id":"d1","tip":"nokta","renk":2,"x":1,"y":4,"gizli":true},{"id":"d2","tip":"nokta","renk":2,"x":2,"y":2,"gizli":true},{"id":"d3","tip":"nokta","renk":2,"x":3,"y":1,"gizli":true}],"durumlar":[{"metin":"k > 0: y = e^(0,69t) (k = ln 2). Büyüdükçe daha hızlı büyür: eğri gittikçe dikleşir."},{"metin":"k < 0: y = 8e^(−0,69t). Azalır ama yavaşlayarak 0'a yaklaşır; eksene hiç değmez.","goster":["d"]},{"metin":"Süre sabit: büyüme her 1 birimde 2 katına çıkar (1 → 2 → 4 → 8), azalma her 1 birimde yarıya iner (8 → 4 → 2 → 1).","goster":["g1","g2","g3","d1","d2","d3"]}]},
        {"tip":"formul","parcalar":[{"t":"t = ln 2 / |k|","alt":"ikiye katlanma ya da yarılanma süresi"}],"aciklama":"y₀e^(kt) = 2y₀ ya da y₀/2 koyunca kt = ± ln 2 çıkar. ==Bu süre y₀'dan bağımsızdır.=="}
      ]
    },
    {
      baslik: "Problem çözmek: iki veriden y₀ ve k",
      kisa: "Veriyi y₀e^(kt) içine koy, e^k'yi bul, istenen zamana taşı.",
      bloklar: [
        {"tip":"ornek","baslik":"Bakteri kültürü","durum":"Sayı başta 100, 2 saat sonra 400. dy/dt = ky ise 5 saat sonra kaç bakteri vardır?","adimlar":["y = 100·e^(kt) (y₀ = 100).","t = 2: 400 = 100·e^(2k), yani e^(2k) = 4 ve e^k = 2.","t = 5: y = 100·(e^k)^5 = 100·2^5 = 3200."],"sonuc":"3200 bakteri"},
        {"tip":"ornek","baslik":"Kandaki ilaç","durum":"İlaç miktarı 80 mg; 3 saat sonra 40 mg. 9 saat sonra kaç mg kalır?","adimlar":["Yarılanma süresi 3 saat: k = −(ln 2)/3.","9 saat = 3 yarılanma: 80 → 40 → 20 → 10.","Formülle: 80·e^(−3 ln 2) = 80/8 = 10."],"sonuc":"10 mg"},
        {"tip":"tuzak","metin":"Üstel büyümeyi doğrusal tahminle çözme; süre uzadıkça doğrusal tahmin çok küçük kalır.","yanlis":"100'den 400'e 2 saatte +300, o hâlde 5 saatte 100 + 750 = 850.","dogru":"Her saat 2 kat: 100, 200, 400, 800, 1600, 3200. 5 saatte 3200."}
      ]
    },
    {
      baslik: "Bir adım ötesi: farkla orantılı değişim",
      kisa: "dy/dt = k(y − M) ise fark y − M üstel değişir: y = M + Ae^(kt).",
      bloklar: [
        {"tip":"ornek","baslik":"Soğuyan çay","durum":"dT/dt = −0,3(T − 20), T(0) = 80 (dakika, °C). T(t) nedir?","adimlar":["Ayır: dT/(T − 20) = −0,3 dt.","İntegre et: ln|T − 20| = −0,3t + C, yani T − 20 = A·e^(−0,3t).","T(0) = 80: 60 = A.","t → ∞ iken e^(−0,3t) → 0 ve T → 20 °C."],"sonuc":"T(t) = 20 + 60·e^(−0,3t)"},
        {"tip":"grafik","baslik":"dT/dt = −0,3(T − 20), T(0) = 80","xlabel":"t (dk)","ylabel":"T","xmax":10,"ymax":9,"xticks":[{"v":2,"label":"2"},{"v":4,"label":"4"},{"v":6,"label":"6"},{"v":8,"label":"8"},{"v":10,"label":"10"}],"yticks":[{"v":2,"label":"20°C"},{"v":4,"label":"40°C"},{"v":6,"label":"60°C"},{"v":8,"label":"80°C"}],"ogeler":[{"id":"m","tip":"cizgi","renk":1,"kesik":true,"from":[0,2],"to":[10,2],"etiket":"oda 20°C"},{"id":"c","tip":"egri","renk":0,"noktalar":[[0,8],[1,6.445],[2,5.293],[3,4.439],[4,3.807],[5,3.339],[6,2.992],[7,2.735],[8,2.544],[9,2.403],[10,2.299]],"gizli":true},{"id":"p","tip":"nokta","renk":2,"x":0,"y":8,"etiket":"80°C","gizli":true}],"durumlar":[{"metin":"Oda sıcaklığı 20 °C (kesikli çizgi): çay bu değere doğru soğuyacak."},{"metin":"T(0) = 80 °C ile başla: T(t) = 20 + 60e^(−0,3t). Eğri odaya yaklaşır ama ulaşmaz.","goster":["c","p"]},{"metin":"Fark T − 20 başta 60 °C. Fark küçüldükçe soğuma yavaşlar: eğri başta dik, sonra yatık."}]},
        {"tip":"tablo","baslik":"Üç model yan yana","head":["Model","Denklem","Çözüm"],"rows":[["Sabit hız","dy/dt = c","y = y₀ + ct"],["Orantılı","dy/dt = ky","y = y₀e^(kt)"],["Farkla orantılı","dy/dt = k(y − M)","y = M + (y₀ − M)e^(kt)"]],"vurgu":1,"not":"Üçüncüde k < 0 ise y, M değerine yaklaşır."}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["dy/dt = ky ise y = y₀e^(kt); y₀ = y(0).","k > 0 *exponential growth*, k < 0 *exponential decay*.","Çözüm ayırma ile bulunur: dy/y = k dt → ln|y| = kt + C → y = Ae^(kt).","İki veri verilince e^k'yi bul; zamanı ona taşı. Doğrusal tahmin yapma.","İkiye katlanma ya da yarılanma süresi ln 2 / |k| ve y₀'dan bağımsızdır.","k, y'nin anlık göreli değişim oranıdır, sabit hız değildir.","dy/dt = k(y − M) ise y − M üstel değişir: y = M + (y₀ − M)e^(kt)."]}
      ]
    }
  ],
  sorular: [
    {"q":"dy/dt = 0,3y ve y(0) = 50 ise y(t) hangisidir?","opts":["y = 50 + 0,3t","y = 0,3e^(50t)","y = 50e^(0,3t)","y = 50·0,3^t"],"a":2,"why":"dy/dt = ky çözümü y = y₀e^(kt): y₀ = 50, k = 0,3. A şıkkı en çekici yanlış: hız y'ye bağlı olduğu için doğrusal değil üstel artış olur. B şıkkı y₀ ile k'nin yerini değiştirir."},
    {"q":"Bir bakteri kültüründe sayı başta 100 ve 2 saat sonra 400'dür. Artış hızı sayıyla orantılıysa 4 saat sonra bakteri sayısı kaçtır?","opts":["1600","800","700","4000"],"a":0,"why":"y = 100e^(kt); 400 = 100e^(2k) → e^(2k) = 4. t = 4: 100·(e^(2k))² = 100·16 = 1600. C şıkkı doğrusal tahminle (+300 her 2 saat, 100 + 600) 700 bulur; üstel büyüme bunu çok aşar."},
    {"q":"Bir ilacın kandaki miktarı y (mg) için dy/dt = ky geçerli. Miktar 80 mg iken 3 saat sonra 40 mg oluyor. k kaçtır?","opts":["(ln 2)/3","−(ln 2)/3","−1/3","−40/3"],"a":1,"why":"40 = 80e^(3k) → e^(3k) = 1/2 → k = −(ln 2)/3. A şıkkı büyüklüğü doğru bulur ama işareti unutur: miktar azaldığı için k negatif."},
    {"q":"Bir deneyde y miktarı zamanla tabloda verilmiştir. y'nin değişim hızı y ile orantılıysa veriyi hangi diferansiyel denklem en iyi açıklar?","fig":{"type":"table","head":["t","y"],"rows":[["0","5"],["1","10"],["2","20"],["3","40"]],"caption":"Ölçülen y değerleri"},"opts":["dy/dt = 5","dy/dt = 2y","dy/dt = (ln 2)y","dy/dt = 5t"],"a":2,"why":"y her birimde 2 kat oluyor: y = 5·2^t = 5e^((ln 2)t), yani k = ln 2. B şıkkı tuzak: 2 oranı e^k = 2 demektir, k = 2 değil. A şıkkı sabit hızdır, ama tabloda y her adımda aynı sayı kadar değil aynı kat kadar artıyor."},
    {"q":"Bir bardaktaki içeceğin sıcaklığı T (°C), oda sıcaklığı 10 °C ve dT/dt = −0,2(T − 10). T(0) = 50 ise T(t) hangisidir?","opts":["T = 10 + 50e^(−0,2t)","T = 50e^(−0,2t)","T = 40 + 10e^(−0,2t)","T = 10 + 40e^(−0,2t)"],"a":3,"why":"T − 10 = Ae^(−0,2t); T(0) = 50 → A = 40. Yani T = 10 + 40e^(−0,2t) ve t → ∞ iken T → 10. A şıkkı T(0) = 60 verir; A katsayısı T(0) − 10 olmalı, T(0) değil."}
  ]
};
