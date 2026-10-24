/* Kitpath not defteri · cb701 · 7.1-7.2 Diferansiyel Denklemle Modelleme ve Çözümü Doğrulama
   Kaynak: College Board CED (Calculus BC, Unit 7). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb701",
  amac: "Bu konu *differential equation* yani diferansiyel denklemi anlatıyor: bilinmeyen bir fonksiyonu türeviyle birbirine bağlayan denklem. Değişim cümlesini denkleme çevirmeyi, bir fonksiyonun çözüm olup olmadığını doğrulamayı ve genel ile özel çözümü ayırmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Diferansiyel denklem: bilinmeyen bir fonksiyon",
      kisa: "Bilinmeyen sayı değil, türeviyle birlikte anılan bir fonksiyondur.",
      bloklar: [
        {"tip":"hikaye","ikon":"📱","baslik":"Telefonun pili","metin":"Pil yüzdesi P, zaman t saat olsun. Şarj ne kadar doluysa o kadar hızlı boşalıyor: her saat pilin onda biri gidiyor. Bu cümle dP/dt = −0,1P diye yazılır. Burada aranan bir sayı değil, **P(t) fonksiyonudur**."},
        {"tip":"kavramlar","kartlar":[{"ikon":"🧩","terim":"Differential equation","tr":"diferansiyel denklem","tanim":"Bir fonksiyonu ve türevini içeren denklem. Çözümü sayı değil, fonksiyondur.","ornek":"dy/dx = 2y ve dP/dt = −0,1P birer diferansiyel denklemdir."},{"ikon":"✅","terim":"Solution","tr":"çözüm","tanim":"Denklemde yerine konunca her x için doğru çıkan fonksiyon.","ornek":"y = e^(2x), dy/dx = 2y denklemini sağlar."}]},
        {"tip":"ikili","sol":{"ikon":"🧩","baslik":"*Differential equation*","maddeler":["Fonksiyon ve türevi birlikte geçer","Örnek: dy/dx = x + y"]},"sag":{"ikon":"🔢","baslik":"Sıradan denklem","maddeler":["Bilinmeyen bir sayıdır","Örnek: 3y + 2 = 11"]},"oyun":[{"metin":"dy/dx = 3y","cevap":"sol","neden":"Bilinmeyen y(x) fonksiyonu türeviyle birlikte duruyor."},{"metin":"x² − 5x + 6 = 0","cevap":"sag","neden":"Türev yok; bilinmeyen bir sayı (x = 2 ya da 3)."},{"metin":"dP/dt = −0,1P","cevap":"sol","neden":"P fonksiyonu ve türevi birlikte: pil modeli."},{"metin":"2y + 7 = 15","cevap":"sag","neden":"Yalnızca bir sayı aranıyor: y = 4."}]}
      ]
    },
    {
      baslik: "Değişim cümlesini denkleme çevirmek",
      kisa: "\"Hız ... ile orantılı\" demek, hız = k çarpı o nicelik demektir.",
      bloklar: [
        {"tip":"tablo","baslik":"Cümleden denkleme","head":["Cümle","Denklem"],"rows":[["y'nin değişim hızı y ile orantılı","dy/dt = ky"],["Değişim hızı y − 20 ile orantılı","dy/dt = k(y − 20)"],["y saatte 5 birim artıyor (sabit hız)","dy/dt = 5"],["Hız, y ile (100 − y) çarpımıyla orantılı","dy/dt = k·y·(100 − y)"],["y azalıyor ve azalma hızı y'ye eşit","dy/dt = −y"]],"vurgu":0,"not":"\"Orantılı\" bir sabitle çarpılmış demektir. Artış mı azalış mı olduğunu bağlam söyler."},
        {"tip":"ornek","baslik":"Soğuyan çay","durum":"Kantindeki çayın sıcaklığı T (°C), oda 20 °C. Soğuma hızı T − 20 farkıyla orantılı. Denklemi yaz.","adimlar":["Hız dT/dt, fark T − 20; orantılı olduğu için dT/dt = k(T − 20).","Çay sıcakken T − 20 pozitif ve sıcaklık düşüyor: dT/dt negatif.","O hâlde k negatif olmalı. Eksiyi açık yazmak daha güvenli: dT/dt = −k(T − 20), k > 0."],"sonuc":"dT/dt = −k(T − 20), k > 0"},
        {"tip":"tuzak","metin":"\"Orantılı\" sözcüğü işareti vermez. Azalan bir niceliği k > 0 ile eksiz yazarsan model tersine, çay ısınıyormuş gibi çalışır.","yanlis":"Soğuyan çay için dT/dt = k(T − 20), k > 0.","dogru":"Soğuma varsa dT/dt negatif olmalı: dT/dt = −k(T − 20), k > 0."}
      ]
    },
    {
      baslik: "Çözümü doğrulamak: yerine koy",
      kisa: "Türevi al, denklemde yerine koy, her x için eşit mi bak.",
      bloklar: [
        {"tip":"adimlar","baslik":"Üç hamle","adimlar":[{"baslik":"Türevi al","metin":"Aday fonksiyonun türevini hesapla."},{"baslik":"Yerine koy","metin":"y'yi ve türevini denklemin iki yanında yerine yaz."},{"baslik":"Eşit mi?","metin":"İki yan her x için aynıysa aday çözümdür; değilse değildir."}]},
        {"tip":"ornek","baslik":"y = 3e^(2x), dy/dx = 2y denkleminin çözümü mü?","durum":"Doğrula.","adimlar":["Sol yan: dy/dx = 3·2·e^(2x) = 6e^(2x).","Sağ yan: 2y = 2·3e^(2x) = 6e^(2x).","İki yan her x için eşit."],"sonuc":"Evet, çözümdür."},
        {"tip":"tablo","baslik":"Aday tarama","head":["Aday","Denklem","Sonuç"],"rows":[["y = e^(3x)","dy/dx = 2y","Hayır: y′ = 3e^(3x), 2y = 2e^(3x)"],["y = Ce^(−x)","dy/dx = −y","Evet: y′ = −Ce^(−x) = −y"],["y = x²","dy/dx = 2y/x (x ≠ 0)","Evet: y′ = 2x ve 2y/x = 2x"],["y = x² + 1","dy/dx = 2y/x (x ≠ 0)","Hayır: 2y/x = 2x + 2/x, y′ = 2x"]],"vurgu":1},
        {"tip":"tuzak","metin":"Eşitliğin tek bir x'te tutması yetmez; denklem her x için sağlanmalı.","yanlis":"y = x + 1, dy/dx = y denklemini x = 0'da sağlıyor (1 = 1), o hâlde çözümdür.","dogru":"x = 1'de y′ = 1 ama y = 2. Her x için tutmuyor, çözüm değil."}
      ]
    },
    {
      baslik: "Genel çözüm, özel çözüm, başlangıç koşulu",
      kisa: "Genel çözüm bir C sabiti taşır; başlangıç koşulu C'yi seçer.",
      bloklar: [
        {"tip":"kavramlar","kartlar":[{"ikon":"🌳","terim":"General solution","tr":"genel çözüm","tanim":"Keyfî bir C sabiti içeren, bütün çözümleri veren ifade.","ornek":"dy/dx = y için y = Ce^x."},{"ikon":"🎯","terim":"Particular solution","tr":"özel çözüm","tanim":"C'ye belirli bir değer verilerek seçilmiş tek çözüm.","ornek":"y(0) = 2 ise y = 2e^x."},{"ikon":"📍","terim":"Initial condition","tr":"başlangıç koşulu","tanim":"Çözümün bir noktadaki değerini veren bilgi; C'yi bulmaya yarar.","ornek":"y(0) = 2: eğri (0, 2) noktasından geçer."}]},
        {"tip":"grafik","baslik":"dy/dx = y: çözüm ailesi ve başlangıç koşulu","xlabel":"x","ylabel":"y","xmax":4,"ymax":8,"xticks":[{"v":0,"label":"−2"},{"v":1,"label":"−1"},{"v":2,"label":"0"},{"v":3,"label":"1"},{"v":4,"label":"2"}],"yticks":[{"v":2,"label":"2"},{"v":4,"label":"4"},{"v":6,"label":"6"},{"v":8,"label":"8"}],"ogeler":[{"id":"ay","tip":"cizgi","renk":1,"kesik":true,"from":[2,0],"to":[2,8]},{"id":"c1","tip":"egri","renk":0,"noktalar":[[0,0.135],[0.25,0.174],[0.5,0.223],[0.75,0.287],[1,0.368],[1.25,0.472],[1.5,0.607],[1.75,0.779],[2,1],[2.25,1.284],[2.5,1.649],[2.75,2.117],[3,2.718],[3.25,3.49],[3.5,4.482],[3.75,5.755],[4,7.389]],"etiket":"C = 1"},{"id":"c05","tip":"egri","renk":1,"noktalar":[[0,0.068],[0.25,0.087],[0.5,0.112],[0.75,0.143],[1,0.184],[1.25,0.236],[1.5,0.303],[1.75,0.389],[2,0.5],[2.25,0.642],[2.5,0.824],[2.75,1.059],[3,1.359],[3.25,1.745],[3.5,2.241],[3.75,2.877],[4,3.695]],"etiket":"C = 0,5","gizli":true},{"id":"c2","tip":"egri","renk":2,"noktalar":[[0,0.271],[0.25,0.348],[0.5,0.446],[0.75,0.573],[1,0.736],[1.25,0.945],[1.5,1.213],[1.75,1.558],[2,2],[2.25,2.568],[2.5,3.297],[2.75,4.234],[3,5.437],[3.25,6.981],[3.386,8]],"etiket":"C = 2","gizli":true},{"id":"p","tip":"nokta","renk":2,"x":2,"y":2,"etiket":"(0, 2)","gizli":true}],"durumlar":[{"metin":"y = e^x (C = 1), dy/dx = y denkleminin bir çözümü."},{"metin":"C değişince aynı denklemin başka çözümleri çıkar: genel çözüm y = Ce^x bir eğri ailesidir.","goster":["c05","c2"]},{"metin":"Başlangıç koşulu y(0) = 2 yalnızca C = 2 eğrisini seçer: özel çözüm y = 2e^x.","goster":["p"],"gizle":["c05","c1"]}]},
        {"tip":"ornek","baslik":"xy′ = 2y (x > 0), genel çözüm y = Cx²","durum":"y(1) = 3 ise özel çözüm nedir?","adimlar":["Doğrula: y′ = 2Cx, bu yüzden x·y′ = 2Cx² = 2y.","Başlangıç koşulu: y(1) = C·1² = 3, yani C = 3.","C'yi genel çözüme yaz."],"sonuc":"y = 3x²"}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["*Differential equation*: bilinmeyen bir fonksiyonu ve türevini bağlayan denklem; çözümü bir fonksiyondur.","\"Hız ... ile orantılı\": dy/dt = k·(o nicelik). Azalma varsa işaret negatif olmalı.","\"Fark ile orantılı\": dy/dt = k(y − M). \"y(M − y) ile orantılı\": dy/dt = k·y·(M − y).","Doğrulama: türevi al, denklemin iki yanına koy, her x için eşit mi bak.","Tek bir x'te eşitlik yetmez; denklem her x için tutmalı.","*General solution* bir C sabiti taşır ve bir eğri ailesidir.","*Initial condition* C'yi bulur; sonuç tek bir özel çözümdür (*particular solution*).","Denklem eğimi doğrudan verir: bir noktadaki y'yi yerine koyunca çözümü bulmadan dy/dx hesaplanır."]}
      ]
    }
  ],
  sorular: [
    {"q":"Kantindeki çayın sıcaklığı T (°C), oda sıcaklığı 20 °C. Çayın soğuma hızı, T ile 20 arasındaki farkla orantılı. t dakikadır ve k > 0 alınırsa bu durumu hangi diferansiyel denklem modeller?","opts":["dT/dt = kT","dT/dt = −k(T − 20)","dT/dt = −k(T + 20)","dT/dt = 20k"],"a":1,"why":"Sıcak çay soğur: T > 20 iken dT/dt negatif olmalı ve fark T − 20 olduğundan eksi işareti gerekir. A şıkkı oda sıcaklığını hiç kullanmıyor; çay 20 °C'a yaklaşırken bile hız T ile orantılı kalırdı."},
    {"q":"dy/dx = x + y denklemi veriliyor. Aşağıdakilerden hangisi bu denklemin bir çözümüdür?","opts":["y = e^x + x","y = x²/2","y = e^x − x + 1","y = e^x − x − 1"],"a":3,"why":"y = e^x − x − 1 için y′ = e^x − 1 ve x + y = x + e^x − x − 1 = e^x − 1: iki yan eşit. C şıkkı en çekici yanlış: y′ = e^x − 1 ama x + y = e^x + 1; sabit terim yüzünden tutmaz."},
    {"q":"Bir bakteri kültüründe y (milyon) ve değişim hızı dy/dt (milyon/saat) ölçülmüş, sonuçlar tabloda. Veriye en uygun diferansiyel denklem hangisidir?","fig":{"type":"table","head":["y","dy/dt"],"rows":[["2","6"],["4","12"],["6","18"],["8","24"]],"caption":"Ölçülen değerler"},"opts":["dy/dt = 3y","dy/dt = y + 4","dy/dt = 3","dy/dt = y²"],"a":0,"why":"Her satırda dy/dt = 3·y: 6 = 3·2, 12 = 3·4, 18 = 3·6, 24 = 3·8. B şıkkı yalnız ilk satırda tutar (2 + 4 = 6); ikinci satırda 4 + 4 = 8 ≠ 12."},
    {"q":"x > 0 için xy′ = 2y denkleminin genel çözümü y = Cx². Çözüm eğrisi (2, 12) noktasından geçiyorsa y(5) kaçtır?","opts":["30","60","75","300"],"a":2,"why":"12 = C·2² olduğundan C = 3, özel çözüm y = 3x² ve y(5) = 3·25 = 75. A şıkkı (30) doğrusal ölçektir: 12·(5/2); ama çözüm x²'ye bağlı, oran (5/2)² = 6,25 olmalı (12·6,25 = 75)."},
    {"q":"dy/dx = 0,5y ve y(0) = 4 veriliyor. Çözüm eğrisinin y = 8 olduğu noktadaki eğimi kaçtır?","opts":["2","4","8","16"],"a":1,"why":"Denklem eğimi doğrudan verir: dy/dx = 0,5·8 = 4. Çözümü bulmak gerekmez. A şıkkı 0,5·4 hesabı, yani başlangıçtaki y(0) = 4 değerini kullanmak olur; sorulan nokta y = 8."}
  ]
};
