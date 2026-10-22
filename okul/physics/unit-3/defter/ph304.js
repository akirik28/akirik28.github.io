/* Kitora not defteri · ph304 · 3.4 Elektrik Güvenliği ve Topraklama (Electrical Safety and Grounding)
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics, Unit 3; FİZ.10.3.6–3.7) + MEB FİZ.10 Elektrik. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph304",
  amac: "Bu defter elektrik akımının tehlikelerini ve önlemlerini anlatıyor: akımın vücuda etkisi, aşırı yük ve kısa devre, sigortanın devreyi nasıl koruduğu ve topraklamanın neden hayat kurtardığı. Ohm yasasını güvenlik sorularına uygulamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Akım vücuda nasıl zarar verir?",
      kisa: "Tehlikeyi vücuttan geçen akım belirler; akım I = V/R ile bulunur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚡", terim: "Electric shock", tr: "elektrik çarpması", tanim: "Vücudun, bir gerilim farkı arasında kalarak üzerinden akım geçmesi. Zararı akımın büyüklüğüne, süresine ve yoluna bağlıdır.", ornek: "Islak elle prize dokunmak." },
            { ikon: "💧", terim: "Body resistance", tr: "vücut direnci", tanim: "Kuru deri yüksek, ıslak deri düşük dirençlidir. Direnç düşünce aynı gerilimde daha büyük akım geçer.", ornek: "Banyoda elektrikli cihaz kullanmanın tehlikeli olmasının nedeni." },
            { ikon: "🧤", terim: "Insulator", tr: "yalıtkan", tanim: "Akımı iletmeyen madde: plastik, kauçuk, kuru ahşap. Kablonun dışındaki plastik, akımın sana geçmesini engeller.", ornek: "Kablonun plastik kılıfı, lastik eldiven." }
          ] },
        { tip: "tablo", head: ["Vücuttan geçen akım (yaklaşık)", "Olası etkisi"], rows: [
            ["≈ 1 mA", "Hafif karıncalanma hissedilir"],
            ["≈ 10 mA", "Kaslar kasılır; teli bırakmak zorlaşır"],
            ["≈ 100 mA", "Kalp ritmi bozulabilir; hayati tehlike"]
          ], not: "Bu değerler kabaca ders kitabı düzeyindedir; kişiye, akımın vücuttaki yoluna ve süreye göre değişir." },
        { tip: "ornek", baslik: "Kuru ve ıslak el", durum: "220 V'luk prizle temas ediliyor. Model olarak kuru derinin direnci 22 000 Ω, ıslak derinin direnci 2200 Ω alınırsa vücuttan geçen akımlar nedir?",
          adimlar: ["Kuru: I = V / R = 220 / 22 000 = 0,01 A = 10 mA.", "Islak: I = 220 / 2200 = 0,1 A = 100 mA.", "Direnç 10 kat azalınca akım 10 kat arttı."],
          sonuc: "Kuru elde 10 mA, ıslak elde 100 mA. Islak elle elektrikli cihaza dokunma." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The current through the body is larger when the skin is wet.*", metin: "Islak ve kuru durumu karşılaştır." },
            { ikon: "✍️", baslik: "*The danger depends on the size of the current, not only on the voltage.*", metin: "Gerilim tek başına belirleyici değildir." }
          ] }
      ]
    },
    {
      baslik: "Evde ve dışarıda güvenli davranış",
      kisa: "Su, hasarlı kablo ve aşırı yük tehlike getirir; fişi çekmek güvenlidir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Güvenli davranış", maddeler: ["Cihazı temizlemeden önce fişini çekmek", "Yüksek gerilim hatlarından uzak durmak"] },
          sag: { ikon: "⛔", baslik: "Tehlikeli davranış", maddeler: ["Islak elle prize dokunmak", "Hasarlı kabloyu ya da yalıtımı soyulmuş cihazı kullanmak"] },
          oyun: [
            { metin: "Islak elle fişi prizden çekmek.", cevap: "sag", neden: "Islak elin direnci düşük: vücuttan büyük akım geçebilir." },
            { metin: "Tost makinesini temizlemeden önce fişini çekmek.", cevap: "sol", neden: "Devre açıldığında cihaz gerilimsiz olur." },
            { metin: "Prize metal çubuk ya da çatal sokmak.", cevap: "sag", neden: "Metal iletkendir; akım yolu vücudun olur." },
            { metin: "Uçurtmayı yüksek gerilim hattından uzakta uçurmak.", cevap: "sol", neden: "Uçurtma ipi nemliyse hat ile arasında iletken yol oluşabilir; uzak durmak güvenlidir." },
            { metin: "Tek prize su ısıtıcısı, ütü ve ısıtıcıyı birlikte takmak.", cevap: "sag", neden: "Toplam akım artar, kablo ısınır: aşırı yük." }
          ] },
        { tip: "tuzak", metin: "Tek bir telin üzerine konan kuşun iki ayağı arasında yok denecek kadar küçük bir gerilim vardır ve yere giden bir yol da yoktur.", yanlis: "Kuş çarpılmıyor, o hâlde yüksek gerilim hattı güvenlidir.", dogru: "Akım geçmesi için bir gerilim farkı ve kapalı yol gerekir. Sen hatta ve yere ya da direğe aynı anda değersen akım vücudundan geçer; hatlara yaklaşma." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Never touch electrical appliances with wet hands.*", metin: "Güvenlik kuralı yazarken emir kipini kullan." },
            { ikon: "✍️", baslik: "*Unplug the appliance before cleaning it.*", metin: "Önlemin ne zaman uygulandığını belirt." }
          ] }
      ]
    },
    {
      baslik: "Aşırı yük ve kısa devre",
      kisa: "Toplam akım çok artınca kablolar ısınır; kısa devrede akım çok büyür.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "I", alt: "cihazın akımı (A)" }, "=", { t: "P", alt: "güç (W)" }, "÷", { t: "V", alt: "gerilim, ev: 220 V" }
          ], aciklama: "Cihazlar prize paralel bağlıdır, akımları toplanır. Su ısıtıcısı 2200 W → 10 A; elektrikli ısıtıcı 1100 W → 5 A; TV 220 W → 1 A; saç kurutma makinesi 440 W → 2 A." },
        { tip: "grafik", baslik: "Prize cihaz ekledikçe toplam akım (hat 16 A'lik sigortayla korunuyor)", xlabel: "prize eklenen cihaz", ylabel: "Toplam akım (A)", xmax: 7, ymax: 20,
          xticks: [{ v: 1.3, label: "Su ısıtıcı" }, { v: 2.7, label: "Isıtıcı" }, { v: 4.1, label: "TV" }, { v: 5.5, label: "Kurutma" }], yticks: [{ v: 10, label: "10" }, { v: 16, label: "16" }, { v: 20, label: "20" }],
          ogeler: [
            { id: "lim", tip: "cizgi", renk: 3, kesik: true, from: [0.3, 16], to: [6.4, 16], etiket: "16 A" },
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0.8, 0], [1.8, 0], [1.8, 0], [0.8, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[2.2, 0], [3.2, 0], [3.2, 0], [2.2, 0]] },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[3.6, 0], [4.6, 0], [4.6, 0], [3.6, 0]] },
            { id: "b4", tip: "alan", renk: 3, noktalar: [[5, 0], [6, 0], [6, 0], [5, 0]] },
            { id: "t1", tip: "yazi", x: 1.3, y: 10.8, metin: "10 A", gizli: true },
            { id: "t2", tip: "yazi", x: 2.7, y: 16.8, metin: "15 A", gizli: true },
            { id: "t3", tip: "yazi", x: 4.1, y: 16.8, metin: "16 A", gizli: true },
            { id: "t4", tip: "yazi", x: 5.5, y: 18.8, metin: "18 A", gizli: true }
          ],
          durumlar: [
            { metin: "Hat 16 A'lik sigortayla korunuyor (örnek değer). Cihazlar prize paralel bağlı: akımlar toplanır." },
            { metin: "Su ısıtıcısı: I = 2200 / 220 = 10 A.", set: { b1: { noktalar: [[0.8, 0], [1.8, 0], [1.8, 10], [0.8, 10]] } }, goster: ["t1"] },
            { metin: "Isıtıcı eklendi: +5 A, toplam 15 A. Hâlâ sınırın altında.", set: { b2: { noktalar: [[2.2, 0], [3.2, 0], [3.2, 15], [2.2, 15]] } }, goster: ["t2"] },
            { metin: "TV eklendi: +1 A, toplam 16 A. Sınırda.", set: { b3: { noktalar: [[3.6, 0], [4.6, 0], [4.6, 16], [3.6, 16]] } }, goster: ["t3"] },
            { metin: "Saç kurutma makinesi eklendi: +2 A, toplam ==18 A > 16 A==. Bu ==aşırı yük==; sigorta devreyi keser.", set: { b4: { noktalar: [[5, 0], [6, 0], [6, 18], [5, 18]] } }, goster: ["t4"] }
          ] },
        { tip: "ornek", baslik: "Kısa devre", durum: "220 V'luk prizdeki bir ütünün direnci 22 Ω. Ütü kablosunun yalıtımı soyulup iki tel birbirine değerse devrenin direnci 1,1 Ω'a düşüyor. Akımlar kaç A?",
          adimlar: ["Normal çalışma: I = V / R = 220 / 22 = 10 A.", "Kısa devre: I = 220 / 1,1 = 200 A.", "Akım 20 kat artar; kablo çok kısa sürede ısınıp yangın çıkarabilir."],
          sonuc: "Kısa devrede direnç çok küçüldüğü için akım 10 A'den 200 A'e çıkar." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Overload happens when too many appliances are connected to the same socket.*", metin: "Aşırı yükün nedenini söyle." },
            { ikon: "✍️", baslik: "*In a short circuit the resistance is very small, so the current is very large.*", metin: "I = V / R ile gerekçelendir." }
          ] }
      ]
    },
    {
      baslik: "Sigorta: akım sınırını aşınca devreyi keser",
      kisa: "Sigorta devreye seri bağlanır; akım sınırı aşılınca devreyi açar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧵", terim: "Fuse", tr: "sigorta", tanim: "İçindeki ince tel, akım değeri aşılınca ısınıp erir ve devreyi açar. Bir kez erir, yenisi takılır.", ornek: "Eski tip eriyen telli sigorta." },
            { ikon: "🔘", terim: "Circuit breaker", tr: "otomatik sigorta", tanim: "Akım aşınca devreyi kendisi açan anahtar. Yeniden kaldırılarak kullanılır, tel değiştirmek gerekmez.", ornek: "Evdeki sigorta panosundaki düğmeler." },
            { ikon: "📈", terim: "Overload", tr: "aşırı yük", tanim: "Devreden geçen toplam akımın hattın taşıyabileceğinin üzerine çıkması.", ornek: "Tek prize çok sayıda yüksek güçlü cihaz bağlamak." },
            { ikon: "⚠️", terim: "Short circuit", tr: "kısa devre", tanim: "Akımın, çok küçük dirençli bir yoldan geçmesi; akım aşırı büyür.", ornek: "Yalıtımı soyulmuş iki telin birbirine değmesi." }
          ] },
        { tip: "ornek", baslik: "Sigorta seçimi", durum: "Kablosu en fazla 16 A taşıyabilen bir hatta 2200 W'lık su ısıtıcısı 220 V'ta çalışacak. 6 A, 16 A ve 40 A'lik sigortalardan hangisi uygundur?",
          adimlar: ["Su ısıtıcısının akımı: I = P / V = 2200 / 220 = 10 A.", "6 A'lik sigorta normal çalışmada bile erir (10 > 6).", "40 A'lik sigorta, kablo 16 A'in üzerinde ısınırken bile atmaz.", "16 A: 10 A'lik normal akımı geçirir, kablo sınırını aşan akımda devreyi keser."],
          sonuc: "16 A'lik sigorta uygundur." },
        { tip: "tuzak", metin: "Sigortanın görevi akımı sınırlamak değil, sınır aşılınca devreyi tamamen açmaktır.", yanlis: "Sigorta sürekli atıyorsa daha büyük sigorta takarım.", dogru: "Sigortayı hattın taşıyabileceği akıma göre seç ve devreye ==seri== bağla. Büyük sigorta, kablonun ısınmasına izin verir ve yangına yol açar." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The fuse melts when the current exceeds its rated value, so the circuit is broken.*", metin: "Sigortanın çalışma ilkesi." },
            { ikon: "✍️", baslik: "*The fuse is connected in series with the appliance.*", metin: "Bağlanışını \"in series\" ile söyle." }
          ] }
      ]
    },
    {
      baslik: "Topraklama: kaçak akıma güvenli yol",
      kisa: "Topraklama, kaçak akıma yer yolunu açar ve kasada gerilim oluşmasını önler.",
      bloklar: [
        { tip: "adimlar", baslik: "Metal kasalı bir çamaşır makinesinde arıza", adimlar: [
            { baslik: "Normal durum", metin: "Faz teli yalıtılmıştır; metal kasa gerilimsizdir." },
            { baslik: "Arıza", metin: "Yalıtım yıpranır, faz teli metal kasaya değer. Kasa tehlikeli bir gerilime çıkabilir." },
            { baslik: "Topraksız cihaz", metin: "Kasaya dokunan kişi, kasa ile yer arasında bir akım yoludur: çarpılır." },
            { baslik: "Topraklı cihaz", metin: "Kasa toprak teliyle yere bağlıdır. Kaçak akım, direnci çok küçük olan toprak teline gider; kasada tehlikeli gerilim oluşmaz ve akım büyük olduğu için sigorta devreyi keser." }
          ] },
        { tip: "ikili", sol: { ikon: "🟢", baslik: "Topraklı cihaz", maddeler: ["Metal kasa toprak hattına bağlıdır", "Kaçak akım toprak teline gider, sigorta atar"] },
          sag: { ikon: "🔴", baslik: "Topraksız cihaz", maddeler: ["Kasa kaçakla gerilim kazanabilir", "Dokunan kişi akım yolu olur"] },
          oyun: [
            { metin: "Faz teli kasaya değiyor ve kasaya dokunan kişi akım yolu oluyor.", cevap: "sag", neden: "Toprak hattı olmadığı için kaçak akım kişiden geçer." },
            { metin: "Faz teli kasaya değince akım direnci çok küçük toprak teline gidiyor, sigorta atıyor.", cevap: "sol", neden: "Toprak hattı kaçak akıma güvenli yol sağlar." },
            { metin: "Buzdolabı ve çamaşır makinesi gibi metal kasalı cihazlar üç uçlu fişle prize takılır.", cevap: "sol", neden: "Üçüncü uç topraklama içindir." },
            { metin: "Fişin toprak ucu kırılıp cihaz iki uçlu bir prize takılmış.", cevap: "sag", neden: "Topraklama devre dışı kaldı; kasa güvenli değil." }
          ] },
        { tip: "tablo", baslik: "Üç damarlı kablo", head: ["Kablo", "İngilizce", "Renk (yaygın standart)", "Görevi"], rows: [
            ["Faz", "live (phase)", "Kahverengi, siyah ya da gri", "Akımı cihaza getirir; gerilimlidir"],
            ["Nötr", "neutral", "Mavi", "Akımı kaynağa geri götürür"],
            ["Toprak", "earth (ground)", "Sarı-yeşil", "Yalnızca arıza olursa akımı yere iletir"]
          ], not: "Paratoner de bir topraklamadır: yıldırımın akımını yere taşır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The earth wire provides a low-resistance path for the leakage current.*", metin: "Topraklamanın görevini bu cümleyle yaz." },
            { ikon: "✍️", baslik: "*The metal case does not become live, so the user is safe.*", metin: "Sonucu kişinin güvenliğine bağla." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Tehlikeyi vücuttan geçen akım belirler: I = V / R. Islak deride direnç düşer, akım artar.",
            "Yaklaşık: 1 mA hissedilir, 10 mA kasları kasar, 100 mA kalp için tehlikelidir.",
            "Evde: ıslak elle dokunma, hasarlı kabloyu kullanma, temizlemeden önce fişi çek.",
            "Cihazlar paralel bağlıdır; akımları toplanır. Cihaz akımı I = P / V.",
            "*Overload*: toplam akım hattın sınırını aşar. *Short circuit*: direnç çok küçülür, akım çok büyür.",
            "*Fuse*: devreye seri bağlanır; akım sınırı aşılınca teli erir, devre açılır. Büyük sigorta takmak tehlikelidir.",
            "*Grounding*: metal kasa toprak teline bağlanır; kaçak akım düşük dirençli yola gider.",
            "Topraklı cihazda kasa gerilim kazanmaz ve sigorta devreyi keser."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "220 V'luk bir prize ıslak elle dokunan kişinin vücut direnci 2200 Ω olarak alınırsa vücuttan geçen akım kaç A'dir?",
      opts: ["0,1 A", "0,01 A", "10 A", "484 000 A"], a: 0,
      why: "I = V / R = 220 / 2200 = 0,1 A (100 mA). 0,01 A kuru derinin (22 000 Ω) sonucudur; 484 000 A ise gerilim ile direnci çarpmaktır." },
    { q: "Sigorta, bir elektrik devresine nasıl bağlanır ve neden?",
      opts: ["Cihaza paralel; gerilimi cihazla paylaşması için", "Cihaza paralel; akımı kollara ayırması için", "Seri; devreden geçen toplam akımın sigortadan geçmesi için", "Seri; direnci artırarak akımı sürekli sınırladığı için"], a: 2,
      why: "Sigorta, devrenin toplam akımının içinden geçmesi için seri bağlanır; akım sınırı aşılınca teli erir ve devre açılır. Görevi akımı sürekli sınırlamak değil, devreyi kesmektir." },
    { q: "Tabloda 220 V'luk bir priz hattına bağlı üç cihazın gücü verilmiştir. Hat 16 A'lik sigortayla korunuyorsa üçü birlikte çalıştırılınca ne olur?",
      fig: { type: "table", head: ["Cihaz", "Güç"], rows: [["Su ısıtıcısı", "2200 W"], ["Elektrikli ısıtıcı", "1320 W"], ["Lamba", "220 W"]], caption: "Prize bağlı cihazlar" },
      opts: ["Toplam akım 10 A olur; sigorta atmaz", "Toplam akım 6 A olur; sigorta atmaz", "Toplam akım 17 A olur; cihazlar paralel olduğu için sigorta atmaz", "Toplam akım 17 A olur; 16 A'lik sigorta devreyi keser"], a: 3,
      why: "P toplam = 2200 + 1320 + 220 = 3740 W; I = 3740 / 220 = 17 A > 16 A. Cihazların paralel olması, akımların toplanmasını engellemez; tersine, toplanmalarının nedenidir." },
    { q: "Normal çalışırken 22 Ω direnci olan bir ütünün kablosunda yalıtım soyuluyor ve devrenin direnci 1,1 Ω'a düşüyor (220 V). Devreden geçen akım kaç A olur?",
      opts: ["20 A", "200 A", "10 A", "242 A"], a: 1,
      why: "I = V / R = 220 / 1,1 = 200 A. 10 A, ütünün normal akımıdır; 242 A cevabı V ile R'yi çarpmaktır." },
    { q: "Metal kasalı topraklı bir çamaşır makinesinde faz teli kasaya değiyor. Aşağıdakilerden hangisi olur?",
      opts: ["Kasa 220 V'a çıkar ve dokunan kişiden akım geçer", "Hiçbir şey olmaz, çünkü toprak hattı yalnızca cihazın gürültüsünü azaltır", "Büyük kaçak akım toprak teline gider, kasa tehlikeli gerilim kazanmaz ve sigorta devreyi keser", "Toprak hattı akımı sınırlar ve makine çalışmaya devam eder"], a: 2,
      why: "Toprak teli çok küçük dirençli bir yol sağlar; akım buradan akar, kasada tehlikeli gerilim oluşmaz ve akım büyüdüğü için sigorta devreyi açar. İlk şık topraksız cihazın sonucudur." }
  ]
};
