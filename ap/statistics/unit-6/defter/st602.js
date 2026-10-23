/* Kitora not defteri · st602 · 6.3 Güven Aralığına Dayanarak İddia
   Kaynak: College Board CED, Unit 6 (konu 6.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st602",
  amac: "Bu konu bir güven aralığını iddia değerlendirmek için kullanmayı anlatıyor. İddia edilen değerin aralığın içinde ya da dışında olmasının ne anlama geldiğini, ne zaman *convincing evidence* denebileceğini ve aralığın iki yönlü testle ilişkisini öğreneceksin.",
  bolumler: [
    {
      baslik: "Aralıkla iddiayı sınamak",
      kisa: "İddia edilen değer aralığın içindeyse makul, dışındaysa ikna edici kanıt vardır.",
      bloklar: [
        {"tip":"grafik","baslik":"Aralık ve üç iddia","xlabel":"Oran","ylabel":"","xmax":30,"ymax":6,"xticks":[{"v":5,"label":"0,50"},{"v":10,"label":"0,55"},{"v":15,"label":"0,60"},{"v":20,"label":"0,65"},{"v":25,"label":"0,70"}],"yticks":[],"ogeler":[{"id":"iv","tip":"cizgi","renk":0,"etiket":"%95 aralık","from":[7.16,3],"to":[22.84,3],"gizli":true},{"id":"ph","tip":"nokta","x":15,"y":3,"etiket":"p̂","gizli":true},{"id":"c55","tip":"cizgi","renk":2,"kesik":true,"etiket":"0,55 ✓","from":[10,0],"to":[10,5.3],"gizli":true},{"id":"c70","tip":"cizgi","renk":3,"kesik":true,"etiket":"0,70 ✗","from":[25,0],"to":[25,5.3],"gizli":true},{"id":"c50","tip":"cizgi","renk":3,"kesik":true,"etiket":"0,50 ✗","from":[5,0],"to":[5,5.3],"gizli":true}],"durumlar":[{"metin":"Rastgele seçilen 150 öğrencide p̂ = 0,60 ve %95 aralık (0,522; 0,678). Aralık, oran için ==makul değerleri== gösterir.","goster":["iv","ph"]},{"metin":"İddia: \"oran %55\". 0,55 aralığın ==içinde==: makul bir değer, veri bu iddiayla çelişmiyor.","goster":["c55"]},{"metin":"İddia: \"oran %70\". 0,70 aralığın ==dışında== (sağında): makul değil. Veri bu iddiaya karşı ikna edici kanıt sunuyor.","goster":["c70"]},{"metin":"İddia: \"oran %50\". 0,50 aralığın solunda, dışında. Aralığın tamamı 0,50'nin üstünde: oran ==0,50'den büyük==.","goster":["c50"]}]},
        {"tip":"kavramlar","kartlar":[{"ikon":"✅","terim":"Plausible value","tr":"makul değer","tanim":"Güven aralığının içinde kalan değer. Veri bu değerle ==çelişmez==, ama onu kanıtlamış da olmaz.","ornek":"0,55, (0,522; 0,678) aralığının içinde."},{"ikon":"🔎","terim":"Convincing evidence","tr":"ikna edici kanıt","tanim":"İddia edilen değer aralığın dışında kalıyorsa veri o iddiaya karşı ikna edici kanıt sunar.","ornek":"0,70 aralığın dışında: oranın 0,70 olduğuna inanmak için neden yok."}]}
      ]
    },
    {
      baslik: "İddiayı üç adımda sına",
      kisa: "İddiayı yaz, değeri aralıkla karşılaştır, hükmü bağlamla yaz.",
      bloklar: [
        {"tip":"adimlar","baslik":"Aralıkla iddia değerlendirme","adimlar":[{"baslik":"1 · İddiayı ve aralığı yaz","metin":"İddia edilen değeri (p₀) ve %C aralığını bağlamla birlikte belirt."},{"baslik":"2 · p₀ aralıkta mı?","metin":"İçindeyse makul değer; dışındaysa makul değil. Dışındaysa aralığın p₀'ın hangi yanında olduğunu da söyle."},{"baslik":"3 · Hükmü yaz","metin":"\"... için ikna edici kanıt var / yok.\" Bağlamı unutma. \"Kanıtlandı\" ya da \"kabul edildi\" yazma."}]},
        {"tip":"ornek","baslik":"\"Liselilerin yarısından fazlası toplu taşıma kullanıyor\"","durum":"Rehber öğretmen bu iddiayı ortaya atıyor (p > 0,50). Rastgele 150 öğrencilik örneklemden %95 aralık (0,522; 0,678) bulundu. Aralık bu iddiaya kanıt sunar mı?","adimlar":["İddia edilen sınır değer p₀ = 0,50.","0,50 aralığın içinde mi? Aralığın alt ucu 0,522 > 0,50, yani değil.","Aralıktaki bütün değerler 0,50'nin üstünde."],"sonuc":"Aralık 0,50'yi içermiyor ve tamamen onun üstünde: ilçedeki lise öğrencilerinin ==yarısından fazlasının== toplu taşıma kullandığına dair ikna edici kanıt var."}
      ]
    },
    {
      baslik: "Aralık hangi iddiayı destekler?",
      kisa: "Aralığın tamamı p₀'ın bir yanındaysa o yöndeki iddia desteklenir.",
      bloklar: [
        {"tip":"ikili","sol":{"ikon":"🟢","baslik":"İddiayı destekleyen kanıt var","maddeler":["p₀ aralığın dışında","Aralık p₀'ın iddia yönündeki tarafında"]},"sag":{"ikon":"⚪","baslik":"İkna edici kanıt yok","maddeler":["p₀ aralığın içinde","p₀ hâlâ makul değer"]},"oyun":[{"metin":"Aralık (0,52; 0,68), iddia: oran 0,50'den büyük.","cevap":"sol","neden":"0,50 aralığın solunda, dışında: kanıt var."},{"metin":"Aralık (0,46; 0,64), iddia: oran 0,50'den büyük.","cevap":"sag","neden":"0,50 aralığın içinde: oran 0,50 ya da daha küçük olabilir."},{"metin":"Aralık (0,31; 0,43), iddia: oran 0,50'den küçük.","cevap":"sol","neden":"0,50 aralığın sağında, dışında: kanıt var."},{"metin":"Aralık (0,44; 0,56), iddia: oran 0,50'den farklı.","cevap":"sag","neden":"0,50 aralığın içinde: fark için kanıt yok."},{"metin":"Aralık (0,61; 0,69), iddia: oran 0,50'den farklı.","cevap":"sol","neden":"0,50 aralığın dışında: oran 0,50 değil."}]},
        {"tip":"tuzak","baslik":"İçinde olmak kanıtlamak değildir","metin":"0,55 aralığın içinde; ama 0,53, 0,60 ve 0,66 da içinde. Aralık, makul değerlerin bütün bir kümesini verir.","yanlis":"Aralık 0,55'i içeriyor; demek ki oran 0,55.","dogru":"0,55 makul bir değerdir, ama ikna edici kanıt yok demek \"oran 0,55'tir\" demek değildir; öteki değerlerden ayırt edilemez."}
      ]
    },
    {
      baslik: "Aynı oran, farklı örneklem büyüklüğü",
      kisa: "Büyük örneklem aralığı daraltır; aynı p̂ ile bu kez kanıt çıkabilir.",
      bloklar: [
        {"tip":"ornek","baslik":"p̂ = 0,56 iki kez","durum":"Bir okul gazetesi \"öğrencilerin yarısı kantin fiyatlarından memnun\" iddiasını sınıyor. İki ayrı rastgele örneklemde de p̂ = 0,56 çıkıyor: biri 50, öteki 400 kişi.","adimlar":["n = 50: SE = √(0,56 × 0,44 / 50) ≈ 0,070; ME = 1,96 × 0,070 ≈ 0,138; aralık (0,42; 0,70).","n = 400: SE = √(0,56 × 0,44 / 400) ≈ 0,0248; ME ≈ 0,049; aralık (0,51; 0,61).","0,50'yi karşılaştır: ilk aralıkta içeride, ikincide dışarıda."],"sonuc":"n = 50'de 0,50 makul, ikna edici kanıt yok. n = 400'de aralığın tamamı 0,50'nin üstünde: ==memnun öğrencilerin oranının 0,50'den büyük olduğuna dair ikna edici kanıt var==."},
        {"tip":"ikili","sol":{"ikon":"🔍","baslik":"Küçük örneklem (n = 50)","maddeler":["Geniş aralık: (0,42; 0,70)","0,50 aralığın içinde","Kanıt yok"]},"sag":{"ikon":"🔬","baslik":"Büyük örneklem (n = 400)","maddeler":["Dar aralık: (0,51; 0,61)","0,50 aralığın dışında","Kanıt var"]}}
      ]
    },
    {
      baslik: "Aralık ve test aynı yöne bakar",
      kisa: "İki yönlü α testi ile (1 − α) aralığı genelde aynı kararı verir.",
      bloklar: [
        {"tip":"tablo","baslik":"Aralık düzeyi ve test düzeyi","head":["Güven düzeyi","Karşılık gelen iki yönlü test","p₀ aralığın dışındaysa"],"rows":[["%90","α = 0,10","H₀'ı reddet"],["%95","α = 0,05","H₀'ı reddet"],["%99","α = 0,01","H₀'ı reddet"]],"not":"Eşdeğerlik yaklaşıktır: aralık SE'yi p̂ ile, test p₀ ile hesaplar; sınır durumlarda sonuçlar ayrışabilir. Bu eşleşme iki yönlü testler içindir."},
        {"tip":"ornek","baslik":"Aynı veri, iki yöntem","durum":"Aralığı (0,522; 0,678) olan örneklem (n = 150, p̂ = 0,60) için H₀: p = 0,50, Hₐ: p ≠ 0,50, α = 0,05 testini de yapalım.","adimlar":["Koşullar: rastgele seçim; 150 < 0,10 × 6000; 150(0,50) = 75 ≥ 10 ve 150(0,50) = 75 ≥ 10.","SE = √(0,50 × 0,50 / 150) ≈ 0,0408.","z = (0,60 − 0,50)/0,0408 ≈ 2,45.","p-değeri = 2 × P(Z ≥ 2,45) ≈ 0,014 < 0,05."],"sonuc":"Test H₀'ı reddediyor, aralık da 0,50'yi dışarıda bırakıyor: ikisi de aynı sonuca götürdü, ==oran 0,50 değil==. Aralık ayrıca oranın nerede olabileceğini de söylüyor."}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["Aralığın içindeki değerler *plausible value*'dur; dışındakiler için veri ikna edici kanıt sunar.","Üç adım: iddiayı ve aralığı yaz, p₀ aralıkta mı bak, hükmü bağlamla yaz.","p₀ aralığın dışındaysa hangi yanında olduğunu söyle: tamamen üstündeyse oran p₀'dan büyük, altındaysa küçük.","p₀ aralığın içindeyse \"ikna edici kanıt yok\" de; \"p₀ doğrudur\" ya da \"kabul edildi\" deme.","Aynı p̂ ile büyük n daha dar aralık verir; küçük n'de çıkmayan kanıt büyük n'de çıkabilir.","%95 aralık, iki yönlü α = 0,05 testine karşılık gelir; genelde aynı sonucu verir.","Güven düzeyini yükseltmek aralığı genişletir; iddia daha zor reddedilir, daha güçlü reddedilmez."]}
      ]
    }
  ],
  sorular: [
    {"q":"Bir telefon operatörü \"müşterilerin en az %40'ı paketinden memnun\" diyor. Rastgele seçilen müşterilerden memnun olanların oranı için %95 güven aralığı (0,24; 0,36) bulunuyor. Aralığa göre hangisi doğrudur?","opts":["0,40 aralığın içinde olmalı; iddia doğrulanmıştır.","0,40 aralığın dışında ve üstünde: memnun olanların oranının 0,40'tan küçük olduğuna ikna edici kanıt vardır.","Aralık geniş olduğu için herhangi bir sonuca varılamaz.","Aralığın merkezi 0,30 olduğundan gerçek oran tam 0,30'dur."],"a":1,"why":"Aralığın tamamı 0,40'ın altında, yani 0,40 makul bir değer değil: iddiayı çürüten ikna edici kanıt var. D şıkkı en çekici yanlıştır: aralığın merkezi p̂'dır, gerçek oranın kendisi değil."},
    {"q":"Şekilde dört farklı rastgele örneklemden elde edilmiş %95 güven aralıkları ve kesikli çizgiyle 0,50 değeri görülüyor. Hangi aralıklar, gerçek oranın 0,50'den farklı olduğuna dair ikna edici kanıt sunar?","fig":{"type":"graph","xlabel":"Oran","ylabel":"","xmax":10,"ymax":10,"lines":[{"from":[2,8],"to":[4.5,8],"label":"1"},{"from":[3.5,6],"to":[6,6],"label":"2","color":1},{"from":[5.5,4],"to":[7.5,4],"label":"3","color":2},{"from":[1.25,2],"to":[5.5,2],"label":"4","color":3},{"from":[5,0],"to":[5,9.5],"label":"0,50","dash":true,"color":1}],"xticks":[{"v":2.5,"label":"0,40"},{"v":5,"label":"0,50"},{"v":7.5,"label":"0,60"}],"yticks":[]},"opts":["Yalnızca 1","2 ve 4","Yalnızca 3","1 ve 3"],"a":3,"why":"0,50'yi dışarıda bırakan aralıklar 1 (tamamen altında) ve 3 (tamamen üstünde). 2 ve 4 aralıkları 0,50'yi içeriyor: 0,50 makul değer, fark için kanıt yok."},
    {"q":"Bir bakkal zinciri, müşterilerin %60'ının poşet yerine bez çanta kullandığını söylüyor. Rastgele bir örneklemden oran için %95 güven aralığı (0,43; 0,57) bulunuyor. H₀: p = 0,60, Hₐ: p ≠ 0,60 testi α = 0,05 ile yapılsaydı genel olarak ne beklenirdi?","opts":["H₀ reddedilirdi, çünkü 0,60 aralığın dışında.","H₀ reddedilemezdi, çünkü aralık %95 düzeyinde.","H₀ kabul edilirdi, çünkü aralığın merkezi 0,50.","Güven aralığı test yapmak için kullanılamaz."],"a":0,"why":"%95 aralığı iki yönlü α = 0,05 testine karşılık gelir; p₀ = 0,60 aralığın dışında olduğundan H₀ reddedilir. B şıkkı aralık düzeyini kararla karıştırıyor; \"kabul edilir\" ifadesi ise hiçbir testte kullanılmaz."},
    {"q":"Bir okulda sınıf başkanı seçiminde rastgele seçilen 200 öğrenciye sorulduğunda, A adayına oy vereceklerin oranı için %95 güven aralığı (0,46; 0,62) bulunuyor. Aday A'nın oyların çoğunluğunu alacağına dair ikna edici kanıt var mı?","opts":["Evet, çünkü aralığın merkezi 0,54 ve 0,50'den büyük.","Evet, çünkü güven düzeyi %95.","Hayır, çünkü 0,50 aralığın içinde; oranın 0,50 ya da altında olması da makul.","Hayır, çünkü aralık geniş olduğu için oran tam 0,50'dir."],"a":2,"why":"Çoğunluk için aralığın tamamının 0,50'nin üstünde olması gerekir; 0,46 ≤ 0,50 olduğundan 0,50 makul bir değerdir. A şıkkı p̂'yı gerçek oranla karıştırıyor; D şıkkı \"kanıt yok\"u \"tam 0,50\" sanıyor."},
    {"q":"Aynı örneklemden %95 aralığı (0,40; 0,50) olarak hesaplandı (p̂ = 0,45). Bir iddia oranın 0,51 olduğunu söylüyor. Aynı veriyle %99 aralığı kurulursa, yaklaşık (0,384; 0,516) çıkıyor. Doğru yorum hangisidir?","opts":["0,51 iki aralığın da dışında kalır; iddia her iki düzeyde reddedilir.","%95 aralığı 0,51'i dışarıda bırakır, %99 aralığı içerir: 0,51 yalnızca %99 düzeyinde makul bir değerdir.","%99 aralığı daha dar olduğundan 0,51'i dışarıda bırakır.","Güven düzeyi arttığı için iddia daha güçlü bir şekilde reddedilir."],"a":1,"why":"Güven düzeyi arttıkça z∗ büyür, aralık genişler: 0,51 artık içeride kalır. C ve D, düzeyi yükseltmeyi \"daha güçlü kanıt\" sanan yaygın yanılgıyı yansıtıyor; yükseltmek aralığı genişletir, iddiayı reddetmeyi zorlaştırır."}
  ]
};
