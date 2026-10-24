/* Kitpath not defteri · cb501 · 5.1 Ortalama Değer Teoremi
   CED: College Board AP Calculus AB/BC (Unit 5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb501",
  amac: "Bu konu *Mean Value Theorem* yani Ortalama Değer Teoremi'ni anlatıyor: düzgün bir eğride, iki nokta arasındaki ortalama eğime tam eşit eğimli bir nokta mutlaka vardır. Koşulları kontrol etmeyi, c'yi bulmayı ve hız-tablo sorularında kullanmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Ortalama değişim hızı: kirişin eğimi",
      kisa: "İki nokta arasındaki ortalama hız, o noktaları birleştiren doğrunun eğimidir.",
      bloklar: [
        {"tip":"kavramlar","kartlar":[{"ikon":"📊","terim":"Average rate of change","tr":"ortalama değişim hızı","tanim":"f'nin [a, b] aralığındaki toplam değişiminin aralığın uzunluğuna oranı.","ornek":"Bisiklet 2 saatte 30 km giderse ortalama hız 15 km/sa."},{"ikon":"📏","terim":"Secant line","tr":"kiriş (sekant) doğrusu","tanim":"Eğri üzerindeki iki noktayı birleştiren doğru; eğimi ortalama değişim hızıdır.","ornek":"A(1, 1) ve B(4, 16) için eğim (16 − 1)/(4 − 1) = 5."},{"ikon":"⏱️","terim":"Instantaneous rate of change","tr":"anlık değişim hızı","tanim":"Tek bir noktadaki hız, yani türev f′(c). Eğriye o noktada çizilen teğetin eğimidir.","ornek":"Hız göstergesinin o an gösterdiği değer."}]},
        {"tip":"formul","parcalar":[{"t":"f(b) − f(a)","alt":"toplam değişim"},"÷",{"t":"b − a","alt":"aralığın uzunluğu"},"=",{"t":"ortalama eğim","alt":"kirişin eğimi"}],"aciklama":"Türev **bir noktadaki** eğimi, bu oran **iki nokta arasındaki** ortalama eğimi verir. ==Ortalama Değer Teoremi bu ikisinin nerede buluştuğunu söyler.=="}
      ]
    },
    {
      baslik: "Ortalama Değer Teoremi",
      kisa: "Aralıkta ortalama eğime eşit anlık eğim vardır: teğet kirişe paraleldir.",
      bloklar: [
        {"tip":"formul","parcalar":[{"t":"f′(c)","alt":"c noktasındaki anlık eğim"},"=",{"t":"(f(b) − f(a)) / (b − a)","alt":"[a, b] üzerindeki ortalama eğim"}],"aciklama":"==f, [a, b]'de sürekli ve (a, b)'de türevlenebilirse, (a, b) içinde bu eşitliği sağlayan en az bir c vardır.== Teorem c'nin var olduğunu söyler; nerede olduğunu söylemez."},
        {"tip":"grafik","baslik":"f(x) = x² üzerinde [1, 4]: kiriş ve paralel teğet","xlabel":"x","ylabel":"y","xmax":5,"ymax":18,"xticks":[{"v":1,"label":"1"},{"v":2.5,"label":"2,5"},{"v":4,"label":"4"}],"yticks":[{"v":1,"label":"1"},{"v":6,"label":"6"},{"v":16,"label":"16"}],"ogeler":[{"id":"c","tip":"egri","renk":0,"noktalar":[[0,0],[0.15,0.023],[0.3,0.09],[0.45,0.203],[0.6,0.36],[0.75,0.563],[0.9,0.81],[1.05,1.103],[1.2,1.44],[1.35,1.823],[1.5,2.25],[1.65,2.723],[1.8,3.24],[1.95,3.802],[2.1,4.41],[2.25,5.063],[2.4,5.76],[2.55,6.503],[2.7,7.29],[2.85,8.123],[3,9],[3.15,9.923],[3.3,10.89],[3.45,11.903],[3.6,12.96],[3.75,14.063],[3.9,15.21],[4.05,16.403],[4.2,17.64]]},{"id":"A","tip":"nokta","renk":1,"x":1,"y":1,"etiket":"A","gizli":true},{"id":"B","tip":"nokta","renk":1,"x":4,"y":16,"etiket":"B","gizli":true},{"id":"k","tip":"cizgi","renk":1,"from":[1,1],"to":[4,16],"etiket":"kiriş: eğim 5","gizli":true},{"id":"p","tip":"nokta","renk":2,"x":2.5,"y":6.25,"etiket":"c = 2,5","kilavuz":true,"gizli":true},{"id":"t","tip":"cizgi","renk":2,"from":[1.5,1.25],"to":[3.5,11.25],"etiket":"teğet: eğim 5","gizli":true}],"durumlar":[{"metin":"Eğri f(x) = x², aralık [1, 4]."},{"metin":"A(1, 1) ve B(4, 16) noktalarını birleştir: kirişin eğimi (16 − 1)/(4 − 1) = 5.","goster":["A","B","k"]},{"metin":"Kirişe paralel bir teğet var: c = 2,5'te f′(c) = 2c = 5.","goster":["p","t"]}]},
        {"tip":"kavramlar","kartlar":[{"ikon":"🧭","terim":"Mean Value Theorem","tr":"Ortalama Değer Teoremi","tanim":"Sürekli ve türevlenebilir bir fonksiyonun aralıktaki ortalama eğimi, aralığın içinde en az bir noktada anlık eğim olarak görülür.","ornek":"f(x) = x² için [1, 4]'te ortalama eğim 5; c = 2,5'te teğet eğimi de 5."},{"ikon":"🎯","terim":"Rolle's Theorem","tr":"Rolle teoremi (özel durum)","tanim":"f(a) = f(b) ise ortalama eğim 0'dır; bu durumda f′(c) = 0 olan bir c vardır.","ornek":"f(x) = x² − 4x, [0, 4]: f(0) = f(4) = 0 ve c = 2'de teğet yatay."}]}
      ]
    },
    {
      baslik: "Koşullar: sürekli ve türevlenebilir",
      kisa: "Koşullardan biri bozulursa teorem söz vermez; önce koşulları kontrol et.",
      bloklar: [
        {"tip":"tablo","baslik":"Teoremin iki koşulu","head":["Koşul","Hangi aralıkta","Bozulursa"],"rows":[["f sürekli","kapalı aralık [a, b] (uçlar dahil)","Atlama ya da boşluk: kopuk grafik"],["f türevlenebilir","açık aralık (a, b) (uçlar hariç)","Köşe ya da dikey teğet"]],"vurgu":0,"not":"Koşullardan biri bozulursa teorem garanti vermez; yine de sonuç tesadüfen doğru olabilir."},
        {"tip":"grafik","baslik":"f(x) = |x| üzerinde [−1, 2]: köşe teoremi bozar","xlabel":"x","ylabel":"y","xmax":4,"ymax":2.4,"xticks":[{"v":0.5,"label":"−1"},{"v":1.5,"label":"0"},{"v":2.5,"label":"1"},{"v":3.5,"label":"2"}],"yticks":[{"v":1,"label":"1"},{"v":2,"label":"2"}],"ogeler":[{"id":"ay","tip":"cizgi","renk":1,"kesik":true,"from":[1.5,0],"to":[1.5,2.4]},{"id":"c1","tip":"cizgi","renk":0,"from":[0.5,1],"to":[1.5,0]},{"id":"c2","tip":"cizgi","renk":0,"from":[1.5,0],"to":[3.5,2]},{"id":"A","tip":"nokta","renk":1,"x":0.5,"y":1,"etiket":"A","gizli":true},{"id":"B","tip":"nokta","renk":1,"x":3.5,"y":2,"etiket":"B","gizli":true},{"id":"k","tip":"cizgi","renk":1,"from":[0.5,1],"to":[3.5,2],"etiket":"kiriş: eğim 1/3","gizli":true},{"id":"v","tip":"nokta","renk":2,"x":1.5,"y":0,"etiket":"köşe","gizli":true}],"durumlar":[{"metin":"f(x) = |x| [−1, 2]'de sürekli, ama x = 0'da köşe var: orada türevlenemez."},{"metin":"Kirişin eğimi (2 − 1)/(2 − (−1)) = 1/3.","goster":["A","B","k"]},{"metin":"Eğrinin eğimi soldan −1, sağdan +1; hiçbir yerde 1/3 değil. Köşe koşulu bozdu, c yok.","goster":["v"]}]},
        {"tip":"ikili","sol":{"ikon":"✅","baslik":"Koşullar sağlanıyor","maddeler":["Teorem çalışır","c garantidir"]},"sag":{"ikon":"⚠️","baslik":"Koşul bozuk","maddeler":["Teorem söz vermez","Köşe, kopukluk, dikey teğet"]},"oyun":[{"metin":"f(x) = x³ − x, aralık [0, 2]","cevap":"sol","neden":"Polinom her yerde sürekli ve türevlenebilir."},{"metin":"f(x) = |x|, aralık [−1, 2]","cevap":"sag","neden":"x = 0'da köşe var: türevlenemez."},{"metin":"f(x) = 1/x, aralık [−1, 1]","cevap":"sag","neden":"x = 0'da tanımsız: süreklilik bozuk."},{"metin":"f(x) = √x, aralık [0, 4]","cevap":"sol","neden":"[0, 4]'te sürekli, (0, 4)'te türevlenebilir. Uç noktada türev gerekmez."}]}
      ]
    },
    {
      baslik: "c değerini bulmak",
      kisa: "Ortalama eğimi hesapla, f′(c) ile eşitle, c'nin aralıkta olduğunu doğrula.",
      bloklar: [
        {"tip":"adimlar","baslik":"c'yi bulma yolu","adimlar":[{"baslik":"Koşulları kontrol et","metin":"f, [a, b]'de sürekli ve (a, b)'de türevlenebilir mi?"},{"baslik":"Ortalama eğimi hesapla","metin":"(f(b) − f(a)) / (b − a)."},{"baslik":"f′(c) ile eşitle","metin":"f′(x)'i bul, f′(c) = ortalama eğim denklemini çöz."},{"baslik":"c aralıkta mı?","metin":"Bulunan c, (a, b) içinde olmalı; dışında kalan çözümü ele."}]},
        {"tip":"ornek","baslik":"f(x) = √x, aralık [1, 9]","durum":"MVT'nin sonucunu sağlayan c kaç?","adimlar":["f, [1, 9]'da sürekli; (1, 9)'da türevlenebilir.","Ortalama eğim: (3 − 1)/(9 − 1) = 2/8 = 1/4.","f′(x) = 1/(2√x). Eşitle: 1/(2√c) = 1/4.","2√c = 4, √c = 2, c = 4. Kontrol: 4 ∈ (1, 9)."],"sonuc":"c = 4"},
        {"tip":"ornek","baslik":"f(x) = x³, aralık [0, 2]","durum":"c kaç? Birden çok çözüm çıkarsa hangisi geçerli?","adimlar":["Ortalama eğim: (8 − 0)/(2 − 0) = 4.","f′(x) = 3x². Eşitle: 3c² = 4, c² = 4/3.","c = ±2/√3 ≈ ±1,15.","Yalnızca +1,15 ∈ (0, 2); negatif çözüm aralık dışında, elenir."],"sonuc":"c = 2/√3 ≈ 1,15"}
      ]
    },
    {
      baslik: "Hız ve tablo yorumu",
      kisa: "MVT 'bir anda tam o hızdaydın' der; nerede olduğunu söylemez.",
      bloklar: [
        {"tip":"ornek","baslik":"Okul servisi","durum":"Servis 30 dakikada (0,5 saat) 20 km gidiyor. Hızı hiç 40 km/sa olmuş mu?","adimlar":["Konum fonksiyonu s(t) (saat cinsinden) sürekli ve türevlenebilir.","Ortalama hız: (20 − 0)/(0,5 − 0) = 40 km/sa.","MVT: (0; 0,5) aralığında s′(c) = 40 olan bir c vardır.","Yani servis en az bir anda tam 40 km/sa hızla gidiyordu."],"sonuc":"Evet: en az bir anda hız tam 40 km/sa"},
        {"tip":"tablo","baslik":"f türevlenebilir; f(0) = 3, f(2) = 7, f(5) = 19","head":["Aralık","Ortalama eğim","MVT ne garanti eder"],"rows":[["[0, 2]","(7 − 3)/(2 − 0) = 2","(0, 2)'de f′(c) = 2 olan c var"],["[2, 5]","(19 − 7)/(5 − 2) = 4","(2, 5)'te f′(c) = 4 olan c var"],["[0, 5]","(19 − 3)/(5 − 0) = 3,2","(0, 5)'te f′(c) = 3,2 olan c var"]],"vurgu":2},
        {"tip":"tuzak","metin":"MVT her aralığın ortalama eğimini garanti eder; f′ sürekliyse bu eğimler arasındaki her değer de (IVT) garantidir. Bu aralığın dışındaki bir değeri ya da c'nin tam yerini tablodan bilemezsin.","yanlis":"[0, 5] için f′(c) = 5 olan bir c vardır (ortalamalara yakın).","dogru":"Tablodan f′(c) = 2, 4 ve 3,2 garanti edilir (f′ sürekliyse 2 ile 4 arasındaki her değer de). 5 gibi bir değer için ek bilgi gerekir."}
      ]
    },
    {
      baslik: "MVT ile Ara Değer Teoremi karışmasın",
      kisa: "Ara Değer Teoremi f hakkında, Ortalama Değer Teoremi f′ hakkında konuşur.",
      bloklar: [
        {"tip":"kavramlar","kartlar":[{"ikon":"🪜","terim":"Intermediate Value Theorem","tr":"Ara Değer Teoremi","tanim":"f, [a, b]'de sürekliyse f(a) ile f(b) arasındaki her değeri alır. Yalnızca süreklilik yeter.","ornek":"f(0) = −1 ve f(2) = 3 ise f bir c noktasında 0 olur."}]},
        {"tip":"ikili","sol":{"ikon":"📈","baslik":"*Intermediate Value Theorem*","maddeler":["f(c) = k olan c vardır","Yalnızca süreklilik gerekir"]},"sag":{"ikon":"📐","baslik":"*Mean Value Theorem*","maddeler":["f′(c) = ortalama eğim olan c vardır","Süreklilik ve türevlenebilirlik gerekir"]},"oyun":[{"metin":"f(a) < 5 < f(b) olduğundan f(c) = 5 olan bir c var.","cevap":"sol","neden":"f'nin değeri hakkında; Ara Değer Teoremi."},{"metin":"Ortalama hız 40 olduğundan bir anda hız tam 40.","cevap":"sag","neden":"f′ yani hız hakkında; Ortalama Değer Teoremi."},{"metin":"Köşesi olan sürekli bir fonksiyonda da uygulanabilir.","cevap":"sol","neden":"Köşe türevlenebilirliği bozar; yalnızca Ara Değer Teoremi süreklilikle yetinir."},{"metin":"Kirişe paralel teğet bulunur.","cevap":"sag","neden":"Teğet ve eğim: türev, yani MVT."}]}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["Ortalama değişim hızı = (f(b) − f(a))/(b − a) = kirişin eğimi; f′(c) bir noktadaki anlık eğimdir.","MVT: f, [a, b]'de sürekli ve (a, b)'de türevlenebilirse f′(c) = (f(b) − f(a))/(b − a) olan en az bir c ∈ (a, b) vardır.","Geometrik anlam: kirişe paralel en az bir teğet vardır.","Önce koşulları kontrol et: köşe, kopukluk ya da dikey teğet varsa teorem söz vermez.","c'yi bulmak: ortalama eğimi hesapla, f′(c) ile eşitle, çözümün (a, b) içinde olduğunu doğrula.","Hız yorumu: ortalama hız v ise en az bir anda hız tam v'dir. Tablo yalnızca tam ortalamayı garanti eder.","f(a) = f(b) ise (Rolle) f′(c) = 0 olan bir c vardır.","Ara Değer Teoremi f(c) hakkında, MVT f′(c) hakkında konuşur."]}
      ]
    }
  ],
  sorular: [
    {"q":"f(x) = x³ fonksiyonu için [0, 3] aralığında Ortalama Değer Teoremi'nin sonucunu sağlayan c değeri kaçtır?","opts":["3/2","√3","2","3"],"a":1,"why":"Ortalama eğim (27 − 0)/(3 − 0) = 9. f′(c) = 3c² = 9 ise c² = 3, c = √3 ≈ 1,73 ∈ (0, 3). 3/2 orta noktadır ama c her zaman orta nokta olmak zorunda değildir; yalnızca ikinci derece fonksiyonlarda öyle çıkar."},
    {"q":"Aşağıdaki fonksiyonlardan hangisi için [−1, 1] aralığında f′(c) = (f(1) − f(−1))/2 eşitliğini sağlayan hiçbir c yoktur?","opts":["f(x) = x² + 1","f(x) = cos x","f(x) = x³","f(x) = |x|"],"a":3,"why":"|x|'in ortalama eğimi (1 − 1)/2 = 0 ama türevi her yerde ±1, x = 0'da ise yok; hiçbir c'de 0 olmaz (köşe koşulu bozar). x² + 1 ve cos x için c = 0, x³ için c = ±1/√3 çalışır."},
    {"q":"f, [1, 6] aralığında türevlenebilir bir fonksiyondur ve değerleri tabloda verilmiştir. Ortalama Değer Teoremi'ne göre aşağıdakilerden hangisi kesinlikle doğrudur?","fig":{"type":"table","head":["x","1","3","6"],"rows":[["f(x)","4","10","25"]],"caption":"f, [1, 6] üzerinde türevlenebilir."},"opts":["(3, 6) aralığında bir c için f′(c) = 3","(1, 3) aralığında bir c için f′(c) = 4,2","(3, 6) aralığında bir c için f′(c) = 5","(1, 6) aralığında bir c için f′(c) = 21"],"a":2,"why":"[3, 6]'da ortalama eğim (25 − 10)/(6 − 3) = 5, bu yüzden (3, 6)'da f′(c) = 5 garantidir. 4,2 değeri [1, 6]'nın ortalamasıdır, (1, 3) için garanti değildir. [1, 3]'ün ortalaması 3'tür, (3, 6) için değil."},
    {"q":"Bir araç 2 saatte 170 km yol alıyor ve konumu zamanın türevlenebilir bir fonksiyonu. Ortalama Değer Teoremi'ne göre aşağıdakilerden hangisi kesinlikle doğrudur?","opts":["Araç en az bir anda tam 85 km/sa hızla gitmiştir.","Araç yolculuk boyunca 85 km/sa'ten yavaş gitmemiştir.","Araç hiçbir anda 85 km/sa'i geçmemiştir.","Aracın en yüksek hızı 85 km/sa olmuştur."],"a":0,"why":"Ortalama hız 170/2 = 85 km/sa. MVT yalnızca bu hızın en az bir anda anlık hız olduğunu söyler. Diğer şıklar hızın her anda ya da en büyük değer olarak ortalamaya eşit olduğunu iddia eder; ortalama, tepe hızı ya da alt sınır değildir."},
    {"q":"f(x) = ln x fonksiyonu için [1, e] aralığında Ortalama Değer Teoremi'nin sonucunu sağlayan c değeri kaçtır?","opts":["e/2","(e + 1)/2","e − 1","1"],"a":2,"why":"Ortalama eğim (ln e − ln 1)/(e − 1) = 1/(e − 1). f′(c) = 1/c olduğundan c = e − 1 ≈ 1,72 ∈ (1, e). (e + 1)/2 ≈ 1,86 orta noktadır, ama c orta nokta olmak zorunda değil; c = 1 ise aralığın dışında (açık uç)."}
  ]
};
