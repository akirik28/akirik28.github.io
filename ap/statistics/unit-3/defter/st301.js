/* Kitpath not defteri · st301 · 3A Bir Çalışmayı Planlamak (CED 3.1–3.2)
   Kaynak: AP Statistics CED Unit 3 (3.1 Introduction to Planning a Study, 3.2 Approaches to Studying Data). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st301",
  amac: "Bu konu bir çalışmayı baştan planlamayı anlatıyor: önce soruyu ve *population*'ı belirlemek, sonra veriyi *census*, *sample survey*, *observational study* ya da *experiment* ile toplamak. Hangi yöntemle genelleme, hangisiyle neden-sonuç çıkarabileceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Soru, *population* ve *parameter*",
      kisa: "Parameter population'ı özetler, statistic sample'ı; araştırma ikisini ilişkilendirir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌍", baslik: "*Parameter*", maddeler: ["*Population*'ın tamamını özetleyen sayı", "Genellikle bilinmez; tahmin edilir", "Gösterim: μ (ortalama), p (oran)"] },
          sag: { ikon: "🥄", baslik: "*Statistic*", maddeler: ["*Sample*'dan hesaplanan sayı", "Örneklemden örnekleme değişir", "Gösterim: x̄ (ortalama), p̂ (oran)"] },
          oyun: [
            { metin: "Okuldaki 600 öğrencinin hepsinin gerçek ortalama uyku süresi.", cevap: "sol", neden: "Population'ın tamamını özetliyor: *parameter* (μ)." },
            { metin: "Rastgele seçilen 40 öğrencinin ortalama uyku süresi: 7,2 saat.", cevap: "sag", neden: "Sample'dan hesaplandı: *statistic* (x̄)." },
            { metin: "Bir ilçedeki bütün seçmenler arasında A adayına oy verecek olanların gerçek oranı.", cevap: "sol", neden: "Bütün population için gerçek oran: *parameter* (p)." },
            { metin: "1000 seçmenle yapılan ankette A adayını destekleyenlerin oranı 0,46.", cevap: "sag", neden: "Örneklemden gelen oran: *statistic* (p̂)." },
            { metin: "Bir markanın ürettiği bütün pillerin gerçek ortalama ömrü.", cevap: "sol", neden: "Bütün pillerden oluşan population'ın özeti: *parameter*." }
          ] },
        { tip: "ornek", baslik: "Soruyu çalışmaya çevirmek", durum: "Kantin müdürü soruyor: okuldaki 600 öğrencinin yüzde kaçı kantinden tost alıyor? Rastgele seçilen 60 öğrenciye soruluyor ve 21'i tost aldığını söylüyor.",
          adimlar: ["*Population*: okuldaki 600 öğrencinin tamamı. Ölçülen özellik: kantinden tost alma (evet / hayır).", "*Parameter*: 600 öğrencideki gerçek oran p. Bilinmiyor; bulmaya çalışıyoruz.", "*Statistic*: örnekteki oran p̂ = 21 ÷ 60 = 0,35.", "p̂ yalnızca bir tahmindir: başka bir örneklem 0,30 ya da 0,38 de verebilir."],
          sonuc: "p̂ = 0,35 (yani %35) bir *statistic*; p ise bilinmeyen *parameter*. Sonucu yazarken ikisini karıştırma." }
      ]
    },
    {
      baslik: "Soru türleri ve değişkenler",
      kisa: "Karşılaştırma ve ilişki sorularında açıklayıcı ve yanıt değişkenini belirle.",
      bloklar: [
        { tip: "tablo", baslik: "Üç soru türü", head: ["Soru türü", "Örnek", "Açıklayıcı → yanıt"], rows: [
            ["Tek *population*'ı tahmin etme", "Öğrencilerin yüzde kaçı kantinden tost alıyor?", "Yok; tek değişken ölçülür"],
            ["Grupları ya da uygulamaları karşılaştırma", "Kahvaltı yapan öğrencilerin ilk ders sınavı puanı, yapmayanlardan yüksek mi?", "Kahvaltı (yapıyor / yapmıyor) → sınav puanı"],
            ["İki değişken arasında ilişki arama", "Günlük telefon süresi arttıkça uyku süresi azalıyor mu?", "Telefon süresi → uyku süresi"]
          ], not: "Soru türü, hangi veriyi ve hangi yöntemle toplayacağını belirler." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔎", terim: "Explanatory variable", tr: "açıklayıcı değişken", tanim: "Yanıtı ==açıkladığını ya da etkilediğini== düşündüğün değişken.", ornek: "Kahvaltı yapıp yapmamak." },
            { ikon: "🎯", terim: "Response variable", tr: "yanıt değişkeni", tanim: "Sonucu ==ölçtüğün== değişken; açıklayıcı değişkenden etkilenmesi beklenir.", ornek: "İlk ders sınavı puanı." }
          ] },
        { tip: "tuzak", baslik: "Yönü karıştırma", metin: "Hangisinin açıklayıcı olduğuna sonuç ilginç diye değil, neyin neyi etkilediği beklentisine göre karar verirsin.", yanlis: "Sınav puanı açıklayıcı değişkendir, çünkü asıl ilgilendiğimiz o.", dogru: "Etkisini araştırdığın değişken *explanatory*; ölçtüğün sonuç *response*." }
      ]
    },
    {
      baslik: "Veriyi toplamanın dört yolu",
      kisa: "Census herkese, sample survey bir parçaya sorar; deneyde uygulamayı sen verirsin.",
      bloklar: [
        { tip: "harita", merkez: "Veri toplama yolları", dallar: [
            { baslik: "*Census*", alt: "population'daki herkesten veri" },
            { baslik: "*Sample survey*", alt: "seçilmiş bir parçadan veri" },
            { baslik: "*Observational study*", alt: "uygulama vermeden gözler" },
            { baslik: "*Experiment*", alt: "araştırmacı uygulamaları (treatments) verir" }
          ] },
        { tip: "adimlar", baslik: "Aynı soru, dört yöntem: kahvaltı ve sınav puanı", adimlar: [
            { baslik: "*Census*", metin: "Okuldaki 600 öğrencinin hepsine kahvaltı alışkanlığını sor ve ilk ders sınavı puanını kaydet." },
            { baslik: "*Sample survey*", metin: "Rastgele seçilen 60 öğrenciye aynı soruları sor. Gözlem yapıyorsun; kimsenin alışkanlığına karışmıyorsun." },
            { baslik: "*Observational study*", metin: "Öğrencilerin kendi alışkanlıklarını koru; kahvaltı yapanlarla yapmayanların puanlarını karşılaştır. Geçmiş kayıtlara bakıyorsan *retrospective*, katılımcıları ileriye doğru izliyorsan *prospective*." },
            { baslik: "*Experiment*", metin: "40 gönüllüyü kura ile ikiye ayır; birine sınav günü kahvaltı yaptır, diğerine yaptırma. İkisi de aynı sınava girer." }
          ] }
      ]
    },
    {
      baslik: "Gözlemsel çalışma mı, deney mi?",
      kisa: "Uygulamayı araştırmacı veriyorsa deney; yalnızca gözlüyorsa gözlemsel çalışma.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "👀", baslik: "*Observational study*", maddeler: ["Araştırmacı uygulama vermez, olanı kaydeder", "Gruplar kendiliğinden oluşur", "Sonuç: ilişki (neden-sonuç değil)"] },
          sag: { ikon: "🧪", baslik: "*Experiment*", maddeler: ["Araştırmacı *treatment*'ı atar", "Gruplar araştırmacıca oluşturulur", "Doğru tasarlanırsa neden-sonuç çıkar"] },
          oyun: [
            { metin: "Kulüp üyesi 200 öğrenciye haftada kaç saat çalıştıkları sorulup notlarıyla karşılaştırılıyor.", cevap: "sol", neden: "Çalışma saatini kimse atamadı, olan kaydedildi: *observational study*." },
            { metin: "Bir spor salonu üyelerinin yarısına kura ile yeni antrenman programını verip diğer yarısına eskisini veriyor; 3 ay sonra kuvvetleri ölçülüyor.", cevap: "sag", neden: "Programı araştırmacı atadı: *experiment*." },
            { metin: "Hastane kayıtlarından 10 yıl önce ameliyat olanların iyileşme süreleri inceleniyor.", cevap: "sol", neden: "Geçmiş kayıtlara bakılıyor, uygulama verilmedi: *retrospective observational study*." },
            { metin: "Öğrenciler yazı tura ile iki gruba ayrılıyor; birinin telefonu ders boyunca kutuda duruyor.", cevap: "sag", neden: "Uygulama (telefon kutuda / yanında) atandı: *experiment*." },
            { metin: "\"Hangi sosyal medyayı kullanıyorsun?\" diye 300 öğrenciye sorulan anket.", cevap: "sol", neden: "Hiçbir uygulama verilmedi; yalnızca soruldu: *sample survey*, yani gözlemsel çalışma." }
          ] },
        { tip: "tuzak", baslik: "İki grup deney yapmaz", metin: "Kahvaltı yapanları yapmayanlarla karşılaştırmak iki grup ortaya çıkarır; ama gruplara kimin gireceğini öğrenciler kendileri belirlediyse bu bir deney değildir.", yanlis: "İki grubu karşılaştırdık, o halde deney yaptık.", dogru: "Araştırmacı *treatment*'ları atıyorsa *experiment*; gruplar kendiliğinden oluşmuşsa *observational study*." }
      ]
    },
    {
      baslik: "Karıştıran değişken: ilişki neden-sonuç değildir",
      kisa: "Gözlemsel çalışma ilişki gösterir; başka bir değişken (confounding) ilişkiyi açıklayabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎭", terim: "Confounding variable", tr: "karıştıran değişken", tanim: "Hem açıklayıcı değişkenle hem yanıt değişkeniyle ilişkili olan ve ==etkileri birbirinden ayrılamayan== değişken.", ornek: "Dondurma satışı ile denizde kaza sayısı: sıcaklık ikisini birden artırıyor." }
          ] },
        { tip: "grafik", baslik: "Dondurma satışı ve denizde kaza (örnek veri)", xlabel: "Dondurma satışı (bin)", ylabel: "Kaza sayısı", xmax: 12, ymax: 10,
          xticks: [{ v: 0, label: "0" }, { v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }],
          yticks: [{ v: 0, label: "0" }, { v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "a1", tip: "nokta", x: 1, y: 1, gizli: true },
            { id: "a2", tip: "nokta", x: 1.5, y: 1, gizli: true },
            { id: "a3", tip: "nokta", x: 2, y: 2, gizli: true },
            { id: "a4", tip: "nokta", x: 3, y: 2, gizli: true },
            { id: "a5", tip: "nokta", x: 5, y: 3, gizli: true },
            { id: "a6", tip: "nokta", x: 7, y: 5, gizli: true },
            { id: "a7", tip: "nokta", x: 9.5, y: 7, gizli: true },
            { id: "a8", tip: "nokta", x: 10, y: 8, gizli: true },
            { id: "a9", tip: "nokta", x: 7.5, y: 5, gizli: true },
            { id: "a10", tip: "nokta", x: 4, y: 3, gizli: true },
            { id: "a11", tip: "nokta", x: 2.2, y: 1.5, gizli: true },
            { id: "a12", tip: "nokta", x: 1.2, y: 1, gizli: true },
            { id: "iz", tip: "cizgi", renk: 1, kesik: true, from: [0.5, 0.5], to: [10.8, 8.4], etiket: "", gizli: true },
            { id: "soru", tip: "yazi", x: 3.2, y: 8.6, metin: "Dondurma → kaza?", gizli: true },
            { id: "yaz", tip: "alan", noktalar: [[6.4, 4.4], [10.6, 4.4], [10.6, 8.8], [6.4, 8.8]], gizli: true },
            { id: "sic", tip: "yazi", x: 4.6, y: 6.6, metin: "Sıcak aylar", gizli: true }
          ],
          durumlar: [
            { metin: "12 ayın verisi: dondurma satışı arttıkça denizde kaza sayısı da artıyor.", goster: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12"] },
            { metin: "Güçlü, pozitif bir ==ilişki== var.", goster: ["iz"] },
            { metin: "Acele sonuç: \"Dondurma yemek kazaya yol açıyor.\" Mantıklı mı?", goster: ["soru"] },
            { metin: "Sıcak aylarda hem dondurma satışı hem denize girenler artıyor. Sıcaklık ikisini birden etkiliyor: bu ==*confounding variable*==.", goster: ["yaz", "sic"], gizle: ["soru"] }
          ] },
        { tip: "tuzak", baslik: "İlişki neden-sonuç değildir", metin: "Gözlemsel çalışmada gruplar kendiliğinden oluştuğu için başka değişkenler ilişkiyi açıklayabilir.", yanlis: "Dondurma satışı ile kaza arasında güçlü ilişki var; demek ki dondurma kazaya neden oluyor.", dogru: "Gözlemsel çalışma yalnızca ilişki gösterir; *confounding variable* iki değişkeni birden etkileyebilir. Neden-sonuç için doğru tasarlanmış bir *experiment* gerekir." }
      ]
    },
    {
      baslik: "Hangi sonuç çıkarılabilir?",
      kisa: "Rastgele örnekleme genellemeyi, rastgele atama neden-sonucu mümkün kılar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎟️", terim: "Random sampling", tr: "rastgele örnekleme", tanim: "*Population*'dan şansla birim seçmek; sonuçlar ==population'a genellenebilir==.", ornek: "600 öğrencinin listesinden kura ile 60 kişi seçmek." },
            { ikon: "🎲", terim: "Random assignment", tr: "rastgele atama", tanim: "Deney birimlerini şansla gruplara yerleştirmek; farkın nedeni için ==neden-sonuç çıkarılabilir==.", ornek: "40 gönüllüyü yazı tura ile iki gruba ayırmak." }
          ] },
        { tip: "tablo", baslik: "İki rastgelelik, dört durum", head: ["", "Rastgele atama VAR", "Rastgele atama YOK"], rows: [
            ["Rastgele örnekleme VAR", "Genelleme ve neden-sonuç", "Genelleme var; neden-sonuç yok"],
            ["Rastgele örnekleme YOK", "Neden-sonuç var (bu birimler için); genelleme sınırlı", "Ne genelleme ne neden-sonuç"]
          ] },
        { tip: "ornek", baslik: "Üç çalışma, üç sonuç", durum: "Kahvaltı ve sınav puanı sorusu için üç ayrı çalışma yapılıyor.",
          adimlar: ["Okuldan rastgele 60 öğrenciye kahvaltı alışkanlığı sorulup puanlarla karşılaştırılıyor: rastgele örnekleme var, atama yok. Sonuç okul geneline genellenir ama yalnızca ilişkidir.", "Gönüllü 40 öğrenci kura ile iki gruba ayrılıyor: rastgele atama var, rastgele örnekleme yok. Fark çıkarsa neden kahvaltıdır; ama yalnızca bu gönüllülere benzeyenlere genellenir.", "Okuldan rastgele 60 öğrenci seçilip kura ile ikiye ayrılıyor: ikisi de var. Hem okul geneline genellenir hem neden-sonuç çıkarılır."],
          sonuc: "Rastgele örnekleme \"kime genellerim?\", rastgele atama \"nedeni bu mu?\" sorusunun cevabıdır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Parameter* population'ı (μ, p), *statistic* sample'ı (x̄, p̂) özetler; parameter bilinmez, statistic ile tahmin edilir.",
            "Soru üç türdür: tek population'ı tahmin, grupları karşılaştırma, iki değişken arasında ilişki arama.",
            "Karşılaştırma ve ilişki sorularında *explanatory variable* etkileyen, *response variable* ölçülen sonuçtur.",
            "Dört yol: *census* (herkes), *sample survey* (bir parça), *observational study* (gözler), *experiment* (uygulama verir).",
            "Uygulamayı araştırmacı atıyorsa *experiment*; gruplar kendiliğinden oluşmuşsa *observational study*. İki grup olması deney yapmaz.",
            "*Observational study* geçmiş kayıtlara bakarsa *retrospective*, katılımcıları ileriye doğru izlerse *prospective* olur.",
            "*Confounding variable* açıklayıcı değişkenle de yanıtla da ilişkilidir ve etkileri ayrılamaz; bu yüzden gözlemsel çalışma neden-sonuç diyemez.",
            "Rastgele örnekleme genelleme, rastgele atama neden-sonuç sağlar; ikisi ayrı işlerdir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir okul yönetimi, rastgele seçilen 100 öğrenciye gecede kaç saat uyuduklarını soruyor ve bu bilgiyi öğrencilerin not ortalamasıyla karşılaştırıyor. Bu çalışma hakkında hangisi doğrudur?",
      opts: ["*Experiment*, çünkü öğrenciler rastgele seçildi", "*Observational study*, çünkü araştırmacı uyku süresini atamadı, yalnızca kaydetti", "*Census*, çünkü bütün öğrencilerin notları incelendi", "*Experiment*, çünkü iki değişken karşılaştırıldı"],
      a: 1,
      why: "Uyku süresini araştırmacı belirlemedi, olanı kaydetti: *observational study*. A en çekici yanlış şık: rastgele seçim *experiment* yapmaz; deney için araştırmacının *treatment* ataması gerekir." },
    { q: "Rastgele seçilen 80 öğrencinin 28'i okula toplu taşımayla geliyor. Hangisi doğrudur?",
      opts: ["p̂ = 0,35 bir *parameter*'dır, çünkü sayı kesindir", "28 bir *statistic*'tir, 80 ise *parameter*'dır", "p̂ = 28 ÷ 80 = 0,35 bir *statistic*'tir; okuldaki tüm öğrenciler için gerçek oran p ise *parameter*'dır", "Örneklem rastgele olduğu için p, 0,35'e eşittir"],
      a: 2,
      why: "p̂ örneklemden hesaplandığı için *statistic*; population'ın gerçek oranı bilinmeyen *parameter*. D en çekici yanlış şık: rastgele örneklem p̂'yi p'ye yaklaştırır ama ona eşitlemez." },
    { q: "Üç çalışmanın özellikleri tabloda. Hangi çalışmanın sonucu hem okulun tüm öğrencilerine genellenebilir hem de neden-sonuç yorumu yapılabilir?",
      fig: { type: "table", caption: "Çalışmalar", head: ["Çalışma", "Katılımcılar nasıl seçildi?", "Gruplara nasıl ayrıldı?"], rows: [["1", "Okul listesinden rastgele", "Kendi tercihleriyle"], ["2", "Gönüllüler", "Kura ile"], ["3", "Okul listesinden rastgele", "Kura ile"]] },
      opts: ["Yalnızca Çalışma 1", "Yalnızca Çalışma 2", "Çalışma 2 ve Çalışma 3", "Yalnızca Çalışma 3"],
      a: 3,
      why: "Genelleme için rastgele örnekleme, neden-sonuç için rastgele atama gerekir; ikisi de yalnızca Çalışma 3'te var. C en çekici yanlış şık: Çalışma 2'de atama rastgele ama katılımcılar gönüllü olduğundan genelleme sınırlı." },
    { q: "Bir araştırmacı okul takımında oynayan öğrencilerin not ortalamasının oynamayanlardan yüksek olduğunu görüyor ve \"Spor notları yükseltir\" diyor. Bu sonuç neden güvenilir değildir?",
      opts: ["Zamanını iyi yöneten öğrenciler hem takımda oynuyor hem derslerinde başarılı olabilir; bu bir *confounding variable* olur", "Çünkü örneklem büyüklüğü yetersiz", "Çünkü takımda oynayanlar *census*'a dahil edilmedi", "Çünkü not ortalaması bir *categorical variable*"],
      a: 0,
      why: "Gözlemsel çalışmada gruplar kendiliğinden oluştuğundan zaman yönetimi gibi bir değişken hem spor yapmayı hem notu etkileyebilir. D yanlış: not ortalaması *quantitative*. Örneklem büyüklüğü ancak ayrı bir sorun olabilir; asıl sorun neden-sonuç iddiası." },
    { q: "Bir okul, yeni bir çalışma uygulamasının test puanlarını artırdığını göstermek istiyor. Hangi plan bu iddiayı en iyi destekler?",
      opts: ["Uygulamayı kendi isteğiyle kullanan öğrencilerle kullanmayanların puanlarını karşılaştırmak", "Geçen yılki puanlarla bu yılki puanları karşılaştırmak", "Gönüllü öğrencileri kura ile ikiye ayırıp birine uygulamayı kullandırmak, diğerine kullandırmamak", "Öğrencilere uygulamayı sevip sevmediklerini sormak"],
      a: 2,
      why: "Neden-sonuç için araştırmacı *treatment*'ı atamalı ve atama rastgele olmalı: C bir *experiment* ve gizli farkları dengeler. A en çekici yanlış şık: gruplar kendiliğinden oluştuğu için motivasyon gibi *confounding variable*'lar farkı açıklayabilir." }
  ]
};
