/* Kitora not defteri · st304 · 3D Deney Tasarımına Giriş (CED 3.5)
   Kaynak: AP Statistics CED Unit 3 (3.5 Introduction to Experimental Design). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st304",
  amac: "Bu konu bir deneyin temel parçalarını anlatıyor: *experimental units*, *treatments*, *explanatory* ve *response variable*. Ayrıca *confounding*'i, rastgele atamayı, kontrol grubunu, *placebo*'yu ve *blinding*'i, yani iyi bir deneyin ilkelerini öğreneceksin.",
  bolumler: [
    {
      baslik: "Bir deneyin parçaları",
      kisa: "Araştırmacı deney birimlerine treatment verir ve yanıtı ölçer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧍", terim: "Experimental unit", tr: "deney birimi", tanim: "Uygulamanın verildiği birim. Birimler insansa ==subject== ya da participant da denir.", ornek: "Çalışmaya katılan 30 öğrenci." },
            { ikon: "🎚️", terim: "Explanatory variable (factor)", tr: "açıklayıcı değişken (faktör)", tanim: "Yanıtı etkilediği düşünülen ve araştırmacının ==değiştirdiği== değişken. Aldığı değerlere *level* denir.", ornek: "Çalışma ortamı: müzikli / müziksiz (2 level)." },
            { ikon: "💊", terim: "Treatment", tr: "uygulama", tanim: "Birimlere verilen uygulama. Tek faktörde her level bir treatment'tır; birden çok faktörde level'ların ==birleşimi== bir treatment olur.", ornek: "Müzik (var / yok) × ışık (parlak / loş) = 2 × 2 = 4 treatment." },
            { ikon: "🎯", terim: "Response variable", tr: "yanıt değişkeni", tanim: "Treatment uygulandıktan sonra ==ölçülen sonuç==.", ornek: "Testten doğru sayısı." }
          ] },
        { tip: "ornek", baslik: "Müzik ve test puanı", durum: "Bir öğretmen, ders çalışırken müzik dinlemenin kısa test puanını etkileyip etkilemediğini görmek istiyor. 30 gönüllü öğrenciden 15'i müzikle, 15'i müziksiz 20 dakika çalışıyor; sonra aynı 10 soruluk testi çözüyor.",
          adimlar: ["*Experimental units*: çalışmaya katılan 30 öğrenci (subjects).", "*Explanatory variable (factor)*: çalışma ortamı. İki *level* var: müzikli ve müziksiz.", "*Treatments*: tek faktör olduğu için iki treatment, yani müzikli ve müziksiz çalışma.", "*Response variable*: testteki doğru sayısı."],
          sonuc: "30 birim, 1 faktör (2 level) = 2 treatment, yanıt = test puanı. Sınavda önce bu dördünü bağlamıyla yaz." }
      ]
    },
    {
      baslik: "Karıştıran değişken (*confounding*)",
      kisa: "Karıştıran değişken, iki değişkenin etkisini birbirinden ayırt edilemez yapar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎭", terim: "Confounding variable", tr: "karıştıran değişken", tanim: "Hem açıklayıcı değişkenle hem yanıt değişkeniyle ilişkili olan ve etkisi ==ayrıştırılamayan== değişken. Gruplar arasında sistemli olarak farklıysa sonucu bozar.", ornek: "Müzik dinleyenlerin daha disiplinli öğrenciler olması." }
          ] },
        { tip: "ornek", baslik: "Telefon çantada mı, cebinde mi?", durum: "Derste telefonunu çantasına koyan öğrencilerin sınav puanı, telefonunu yanında tutanlardan yüksek çıkıyor. Bu bir gözlemsel çalışma.",
          adimlar: ["Telefonunu kendi isteğiyle çantasına koyanlar büyük olasılıkla daha disiplinli öğrenciler.", "Disiplin hem telefonu çantaya koymayla hem sınav puanıyla ilişkili.", "Puan farkı telefondan mı disiplinden mi geliyor? Ayrılamıyor."],
          sonuc: "Disiplin bir *confounding variable*. Çözüm: telefonun yerini kura ile atamak; disiplinli öğrenciler iki gruba yaklaşık eşit dağılır." },
        { tip: "tuzak", baslik: "Her değişken karıştırıcı değildir", metin: "Karıştırıcı olmak için değişkenin açıklayıcıyla da yanıtla da ilişkili ve gruplar arasında farklı olması gerekir.", yanlis: "Puanı etkileyen her değişken confounding'dir.", dogru: "Sabit tutulan ya da rastgele atamayla gruplara dengeli dağıtılan değişken *confounding* yaratmaz; sorun, gruplar arasında sistemli farklı olan değişkendir." }
      ]
    },
    {
      baslik: "Rastgele atama",
      kisa: "Şansla yapılan atama, gruplardaki gizli farkları yaklaşık dengeler.",
      bloklar: [
        { tip: "grafik", baslik: "Kendi seçimi mi, kura mı? Gizli değişken: disiplin", xlabel: "Çalışma ortamı", ylabel: "Disiplin puanı", xmax: 6, ymax: 10,
          xticks: [{ v: 1.5, label: "Müzikli" }, { v: 4.5, label: "Müziksiz" }],
          yticks: [{ v: 0, label: "0" }, { v: 5, label: "5" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "u1", tip: "nokta", x: 3, y: 1.5 },
            { id: "u2", tip: "nokta", x: 3, y: 2.5 },
            { id: "u3", tip: "nokta", x: 3, y: 3 },
            { id: "u4", tip: "nokta", x: 3, y: 3.5 },
            { id: "u5", tip: "nokta", x: 3, y: 4.5 },
            { id: "u6", tip: "nokta", x: 3, y: 5 },
            { id: "u7", tip: "nokta", x: 3, y: 5.5 },
            { id: "u8", tip: "nokta", x: 3, y: 6 },
            { id: "u9", tip: "nokta", x: 3, y: 6.5 },
            { id: "u10", tip: "nokta", x: 3, y: 7 },
            { id: "u11", tip: "nokta", x: 3, y: 8 },
            { id: "u12", tip: "nokta", x: 3, y: 8.5 },
            { id: "havuz", tip: "yazi", x: 3, y: 9.5, metin: "Havuz" },
            { id: "m1", tip: "cizgi", renk: 2, from: [0.8, 6.92], to: [2.2, 6.92], etiket: "6,92", gizli: true },
            { id: "m2", tip: "cizgi", renk: 2, from: [3.8, 3.33], to: [5.2, 3.33], etiket: "3,33", gizli: true }
          ],
          durumlar: [
            { metin: "12 öğrencinin gizli bir özelliği var: disiplin puanı (dikey eksen). Araştırmacı bunu ölçmemiş olabilir ama sınav puanını etkiler." },
            { metin: "Kendi seçimleriyle: disiplinli 6 öğrenci müzikli gruba, diğerleri müziksiz gruba geçti. Gruplar baştan farklı (ortalama 6,92 ve 3,33).", gizle: ["havuz"], goster: ["m1", "m2"],
              set: { u1: { x: 4.5 }, u2: { x: 4.5 }, u3: { x: 4.5 }, u4: { x: 4.5 }, u5: { x: 4.5 }, u6: { x: 4.5 }, u7: { x: 1.5 }, u8: { x: 1.5 }, u9: { x: 1.5 }, u10: { x: 1.5 }, u11: { x: 1.5 }, u12: { x: 1.5 } } },
            { metin: "==Rastgele atama== (kura): aynı 12 öğrenci şansla ikiye ayrıldı. Ortalamalar neredeyse eşit (5,25 ve 5,00): disiplin dengelendi.",
              set: { u1: { x: 1.5 }, u2: { x: 4.5 }, u3: { x: 4.5 }, u4: { x: 1.5 }, u5: { x: 4.5 }, u6: { x: 1.5 }, u7: { x: 4.5 }, u8: { x: 1.5 }, u9: { x: 4.5 }, u10: { x: 1.5 }, u11: { x: 4.5 }, u12: { x: 1.5 },
                m1: { from: [0.8, 5.25], to: [2.2, 5.25], etiket: "5,25" }, m2: { from: [3.8, 5], to: [5.2, 5], etiket: "5,00" } } }
          ] },
        { tip: "adimlar", baslik: "Rastgele atama nasıl yapılır? 30 öğrenci, 2 grup", adimlar: [
            { baslik: "1 · Numara ver", metin: "Her öğrenciye 1'den 30'a kadar bir numara ata." },
            { baslik: "2 · Rastgele sayı üret", metin: "randInt(1, 30) ile 15 farklı numara çek; tekrar çıkanı atla." },
            { baslik: "3 · Grupları kur", metin: "Çıkan 15 numara müzikli grup; kalan 15 öğrenci müziksiz grup." },
            { baslik: "4 · Kontrol et", metin: "Gruplara kimin gireceğini kura belirledi; araştırmacı ya da öğrenci seçmedi." }
          ] },
        { tip: "tuzak", baslik: "Rastgele atama rastgele örnekleme değildir", metin: "Atama, zaten elindeki birimleri gruplara bölmekle ilgilidir. Birimlerin population'dan nasıl seçildiği ayrı bir sorudur.", yanlis: "Gönüllüleri rastgele iki gruba ayırdım, sonuçlar bütün öğrencilere genellenir.", dogru: "Rastgele atama neden-sonuç içindir; genelleme için *rastgele örnekleme* gerekir." }
      ]
    },
    {
      baslik: "Kontrol grubu, *placebo* ve *blinding*",
      kisa: "Kontrol grubu karşılaştırma tabanı, blinding ise beklenti etkisini önler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Control group", tr: "kontrol grubu", tanim: "Karşılaştırma için kullanılan grup: uygulama almayan, ==placebo== alan ya da standart uygulamayı alan grup.", ornek: "Uygulamayı kullanmayan, aynı süre çalışan 20 öğrenci." },
            { ikon: "🍬", terim: "Placebo", tr: "etkisiz uygulama", tanim: "Gerçek treatment gibi görünen ama etkisi olmayan uygulama. İyileşeceğine inanmak bile sonucu değiştirebilir: ==placebo effect==.", ornek: "Vitamin yerine verilen şeker hapı." },
            { ikon: "🙈", terim: "Blinding", tr: "körleme", tanim: "*Single-blind*: katılımcılar ya da sonucu ölçenlerden yalnızca biri hangi treatment olduğunu bilmez. *Double-blind*: ==ikisi de== bilmez.", ornek: "Hasta ve değerlendirici doktor, hapın gerçek mi placebo mu olduğunu bilmiyor." }
          ] },
        { tip: "ikili", sol: { ikon: "⚖️", baslik: "Kontrol grubu / *placebo*", maddeler: ["Karşılaştırma tabanı sağlar", "Soru: Neyle kıyaslıyorum?", "Grup, uygulama ya da etkisiz hap"] },
          sag: { ikon: "🙈", baslik: "*Blinding*", maddeler: ["Bilginin etkisini önler", "Soru: Kim bilmiyor?", "Katılımcı, değerlendirici ya da ikisi"] },
          oyun: [
            { metin: "Gerçek vitamin yerine şeker hapı alan grup.", cevap: "sol", neden: "Etkisiz uygulama alan karşılaştırma grubu: *placebo / control group*." },
            { metin: "Hastalar hangi hapı aldığını bilmiyor.", cevap: "sag", neden: "Katılımcıların bilmemesi: *blinding*." },
            { metin: "Quizi puanlayan öğretmen, öğrencinin hangi grupta olduğunu bilmiyor.", cevap: "sag", neden: "Değerlendirenin bilmemesi: *blinding*." },
            { metin: "Yeni ilacı piyasadaki standart ilaçla karşılaştırmak için standart ilacı alan grup.", cevap: "sol", neden: "Karşılaştırma tabanı: *control group*." },
            { metin: "Hiçbir uygulama almayan ama aynı koşullarda izlenen grup.", cevap: "sol", neden: "Karşılaştırma tabanı: *control group*." }
          ] },
        { tip: "tuzak", baslik: "Kontrol grubu \"hiçbir şey alan grup\" değildir", metin: "Kontrol grubunun işi, treatment'ın etkisini görecek bir karşılaştırma tabanı olmaktır.", yanlis: "Kontrol grubu hiçbir şey almayan gruptur.", dogru: "*Control group* uygulamasız grup, *placebo* alan grup ya da standart uygulamayı alan grup olabilir." }
      ]
    },
    {
      baslik: "İyi tasarlanmış deneyin ilkeleri",
      kisa: "Karşılaştırma, rastgele atama ve yineleme; gerekirse körleme ve aynı koşullar.",
      bloklar: [
        { tip: "harita", merkez: "İyi tasarlanmış deney", dallar: [
            { baslik: "*Comparison*", alt: "kontrol grubu ya da en az iki treatment" },
            { baslik: "*Random assignment*", alt: "gruplar şansla kurulur" },
            { baslik: "*Replication*", alt: "her treatment'a yeterince çok birim" },
            { baslik: "*Blinding*", alt: "gerektiğinde bilgiyi sakla" },
            { baslik: "Aynı koşullar", alt: "treatment dışında her şey eşit" }
          ] },
        { tip: "ornek", baslik: "Çalışma uygulaması deneyi", durum: "Okul, bir çalışma uygulamasının matematik quiz puanını artırıp artırmadığını görmek için 40 gönüllü öğrenciyle deney yapacak.",
          adimlar: ["Birimler: 40 gönüllü öğrenci. Faktör: uygulama kullanımı (kullanır / kullanmaz) = 2 *treatment*. Yanıt: aynı 20 soruluk quizdeki doğru sayısı.", "*Random assignment*: öğrencilere 1–40 numara ver; randInt(1, 40) ile 20 farklı numara çek: uygulama grubu. Kalan 20 öğrenci kontrol grubu.", "*Control*: kontrol grubu uygulamayı kullanmadan aynı süre aynı konuyu çalışır; ders, süre ve quiz iki grup için aynı.", "*Blinding*: öğrenciler uygulamayı kullanıp kullanmadıklarını saklayamaz (single-blind), ama quizi puanlayan öğretmen kimin hangi grupta olduğunu bilmez.", "*Replication*: her grupta 20 farklı öğrenci."],
          sonuc: "Rastgele atama grupları dengeler, kontrol grubu karşılaştırma tabanı verir, körleme ölçüm yanlılığını azaltır. Büyük bir fark çıkarsa uygulamaya bağlanabilir." },
        { tip: "tuzak", baslik: "Yineleme birim sayısıdır", metin: "*Replication*, her treatment'a yeterince çok birim koyarak şans değişkenliğini küçültmektir.", yanlis: "Aynı öğrenciyi 10 kez ölçtüm, yineleme yaptım.", dogru: "Yineleme için her gruba çok sayıda *farklı* deney birimi gerekir; tek kişiyi çok kez ölçmek birim sayısını artırmaz." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Experimental unit* (insansa *subject*) uygulamanın verildiği birim; *factor* araştırmacının değiştirdiği açıklayıcı değişken, değerleri *level*'dır.",
            "*Treatment*, tek faktörde bir level; çok faktörde level birleşimidir. 2 × 3 faktörde 6 treatment.",
            "*Response variable* treatment'tan sonra ölçülen sonuçtur.",
            "*Confounding variable* hem açıklayıcıyla hem yanıtla ilişkilidir ve etkisi ayrılamaz.",
            "*Random assignment* gizli değişkenleri gruplara yaklaşık eşit dağıtır ve neden-sonucu mümkün kılar; genelleme rastgele örnekleme ister.",
            "*Control group* karşılaştırma tabanıdır; uygulamasız, *placebo* alan ya da standart uygulamalı grup olabilir.",
            "*Single-blind* bir tarafın, *double-blind* hem katılımcının hem değerlendirenin bilmemesidir.",
            "İyi deney: karşılaştırma, rastgele atama, yineleme (çok sayıda farklı birim), gerekirse körleme, treatment dışında her şey eşit."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir antrenör 24 koşucuyu rastgele ikiye ayırıyor. Bir gruba germe programı A, diğerine B uyguluyor ve her koşucunun 100 m süresini ölçüyor. Bu deneyde *response variable* hangisidir?",
      opts: ["Germe programı (A ya da B)", "24 koşucu", "100 m koşu süresi", "Koşucuların rastgele atanması"],
      a: 2,
      why: "Response variable treatment'tan sonra ölçülen sonuçtur: 100 m süresi. A en çekici yanlış şık: germe programı *explanatory variable* (faktör), koşucular ise *experimental units*." },
    { q: "Bir okulda sabah kahvaltısı yapan öğrencilerin, yapmayanlardan daha yüksek not ortalaması olduğu gözleniyor (öğrenciler kahvaltı alışkanlığını kendileri belirlemiş). Aşağıdakilerden hangisi bir *confounding variable* olabilir?",
      opts: ["Düzenli uyku alışkanlığı", "Not ortalamasının sayısal ölçülmesi", "Okulun adı", "Araştırmacının hesap makinesi markası"],
      a: 0,
      why: "Düzenli uyuyan öğrenciler hem kahvaltı yapıyor hem derslerde başarılı olabilir: hem açıklayıcıyla hem yanıtla ilişkili. Diğer şıklar iki değişkenden biriyle bile ilişkili değil; C, tüm öğrenciler için aynı olduğundan confounding yaratmaz." },
    { q: "Üç ilaç denemesinin özellikleri tabloda. Hangi çalışma *double-blind* bir deneydir?",
      fig: { type: "table", caption: "Kim hangi bilgiye sahip?", head: ["Çalışma", "Katılımcılar treatment'ı biliyor mu?", "Değerlendiren doktor biliyor mu?"], rows: [["P", "Evet", "Hayır"], ["Q", "Hayır", "Hayır"], ["R", "Hayır", "Evet"]] },
      opts: ["Yalnızca P", "Yalnızca Q", "P ve R", "Hiçbiri"],
      a: 1,
      why: "Double-blind'da hem katılımcılar hem değerlendirenler treatment'ı bilmez: yalnızca Q. C en çekici yanlış şık: P ve R'de iki tarafın yalnızca biri bilmiyor, yani *single-blind*." },
    { q: "Bir deneyde birimlerin treatment gruplarına rastgele atanmasının temel amacı nedir?",
      opts: ["Sonucun tüm population'a genellenebilmesini sağlamak", "Katılımcıların placebo etkisini ortadan kaldırmak", "Örneklem büyüklüğünü artırmak", "Gizli değişkenlerin etkisini gruplara yaklaşık eşit dağıtarak *confounding*'i azaltmak"],
      a: 3,
      why: "Rastgele atama grupları baştan benzer kılar, böylece fark treatment'a bağlanabilir. A en çekici yanlış şık: genelleme rastgele örneklemeyle ilgilidir; placebo etkisi ise körleme ve placebo ile ele alınır." },
    { q: "Bir okul çalışma ortamının test puanına etkisini deniyor. Faktör 1: müzik (var / yok). Faktör 2: ışık (parlak / orta / loş). Her faktör düzeyi kombinasyonu ayrı bir grup olacak. Kaç *treatment* vardır?",
      opts: ["5", "3", "6", "2"],
      a: 2,
      why: "Treatment'lar level birleşimleridir: 2 × 3 = 6. A en çekici yanlış şık: level sayılarını toplamak (2 + 3 = 5) yanlıştır; kombinasyonlar çarpılır." }
  ]
};
