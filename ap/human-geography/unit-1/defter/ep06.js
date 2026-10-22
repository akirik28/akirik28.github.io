/* Kitora not defteri · ep06 · Yayılma
   Kaynak: ap-videolar/src/episodes/ep06 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep06",
  ozet: "*Diffusion*, bir özelliğin bir yerden başka yerlere yayılmasıdır; başladığı yere *hearth* denir. İki ana tür vardır: insanlar taşınarak yayılırsa *relocation*, fikir kartopu gibi büyürse *expansion*. *Expansion* da *hierarchical*, *contagious* ve *stimulus* diye üçe ayrılır.",
  bolumler: [
    {
      baslik: "Şarkı nasıl yayılır?",
      bloklar: [
        { tip: "hikaye", ikon: "🎵", baslik: "Bir hafta içinde bütün okul",
          metin: "Bir şarkı bir hafta içinde bütün okulun diline nasıl dolanıyor? Bir yemek, bir inanç, bir moda dünyaya nasıl yayılıyor? Tek bir noktada başlayan bir şey, halka halka büyüyerek başka yerlere ulaşıyor." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌊", terim: "Diffusion", tr: "yayılma", tanim: "Bir özelliğin (fikir, ürün, hastalık, kültür) zamanla bir yerden başka yerlere yayılması.", ornek: "Bir şarkının okuldan okula, şehirden şehire dolanması." },
            { ikon: "🔥", terim: "Hearth", tr: "çıkış noktası, ocak", tanim: "Yayılmanın başladığı yer.", ornek: "Bir modanın doğduğu şehir." }
          ] },
        { tip: "harita", merkez: "*Diffusion*", dallar: [
            { baslik: "*Relocation diffusion*", alt: "İnsanlar göç eder, kültürü taşır" },
            { baslik: "*Expansion diffusion*", alt: "Fikir kalır, kartopu gibi büyür" },
            { baslik: "↳ *Hierarchical*", alt: "Yukarıdan aşağıya, basamak basamak" },
            { baslik: "↳ *Contagious*", alt: "Temasla, dalga dalga" },
            { baslik: "↳ *Stimulus*", alt: "Ürün değil fikir yayılır, şekil değiştirir" }
          ] }
      ]
    },
    {
      baslik: "*Relocation diffusion*: insan taşınır",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧳", terim: "Relocation diffusion", tr: "yer değiştirerek yayılma", tanim: "İnsanlar göç eder ve kültürünü yanında taşır. Fikir yeni insanlara bulaşarak değil, ==insanların kendisi taşınarak== yayılır.", ornek: "Almanya'ya göç eden Türkler döneri de götürdü; bugün Berlin'in her köşesinde dönerci var." }
          ] },
        { tip: "adimlar", baslik: "Döner nasıl Berlin'e ulaştı?", adimlar: [
            { baslik: "Hearth", metin: "Türkiye'de döner yapan insanlar var." },
            { baslik: "Göç", metin: "İnsanlar Almanya'ya göç eder, yanlarında bavul ve döner tarifi vardır." },
            { baslik: "Varış", metin: "Berlin'de dükkânlar açılır, döner orada da yaşamaya başlar." },
            { baslik: "Sonuç", metin: "Kaynakta nokta sayısı azalır, hedefte artar: ==insan taşındı, kültür taşındı.==" }
          ] },
        { tip: "ikili", sol: { ikon: "🧳", baslik: "*Relocation*", maddeler: ["İnsanlar taşınır", "Kaynakta azalır, hedefte artar", "Göçle yayılma"] },
          sag: { ikon: "🌱", baslik: "*Expansion*", maddeler: ["İnsanlar yerinde kalır", "Kaynakta da, hedefte de artar", "Fikir benimsenerek yayılır"] },
          oyun: [
            { metin: "19. yüzyılda ABD'ye göç eden İtalyanlar pizzayı da yanlarında götürdü.", cevap: "sol", neden: "İnsan taşındı, kültür onunla gitti: *relocation*." },
            { metin: "Bir şarkı okul içinde arkadaştan arkadaşa dolanıyor.", cevap: "sag", neden: "Kimse taşınmıyor, fikir yayılıyor: *expansion*." },
            { metin: "Almanya'ya giden Türkler orada dönerci açtı.", cevap: "sol", neden: "İnsanlar taşındı: *relocation*." },
            { metin: "Moda önce Paris'te, sonra başka şehirlerde benimsendi.", cevap: "sag", neden: "Moda taşınmadan, fikir olarak yayıldı: *expansion*." }
          ] },
        { tip: "tuzak", metin: "\"Pizza Amerika'ya hangi yolla ulaştı?\" sorusu.", yanlis: "*Contagious diffusion*; çünkü pizza insanlardan insanlara yayıldı.", dogru: "İtalyan göçmenler gittiği için ==*relocation diffusion*==. Önce insanın taşınıp taşınmadığına bak." }
      ]
    },
    {
      baslik: "*Expansion diffusion*: kartopu",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⛄", terim: "Expansion diffusion", tr: "genişleyerek yayılma", tanim: "Fikir çıktığı yerde kalır ama kartopu gibi büyür: her gün daha fazla insan benimser. Üç alt türü vardır.", ornek: "Bir şarkı çıktığı okulda kalır, ama her gün daha çok kişi söyler." }
          ] },
        { tip: "grafik", baslik: "Benimseyenlerin sayısı zamanla nasıl artar?", xlabel: "Zaman", ylabel: "Benimseyen insan", xmax: 10, ymax: 10,
          ogeler: [
            { id: "s", tip: "egri", renk: 0, etiket: "benimseme", noktalar: [[0, 0.2], [1.5, 0.5], [3, 1.4], [4.5, 3.6], [5.5, 6], [7, 8.6], [8.5, 9.5], [10, 9.8]] },
            { id: "a1", tip: "yazi", x: 1.8, y: 1.4, metin: "yavaş başlangıç", gizli: true },
            { id: "a2", tip: "yazi", x: 4.3, y: 6.3, metin: "hızlanma (kartopu)", gizli: true },
            { id: "a3", tip: "yazi", x: 8.2, y: 8.2, metin: "doygunluk", gizli: true }
          ],
          durumlar: [
            { metin: "*Expansion diffusion* tipik olarak **S biçimli** bir eğri çizer." },
            { metin: "Başlangıçta fikri yalnızca birkaç kişi bilir: yayılma yavaştır.", goster: ["a1"] },
            { metin: "Sonra herkes birbirinden duyar; ==kartopu büyür==, yayılma hızlanır.", goster: ["a2"] },
            { metin: "Sonunda neredeyse herkes benimsemiştir; yeni benimseyen kalmayınca eğri düzleşir.", goster: ["a3"] }
          ] },
        { tip: "not", metin: "Ek bilgi: S eğrisi, yayılmanın hızını görmek için kullanılan genel bir şemadır. Sınavda asıl iş ==alt türleri ayırt etmektir==: yayılma hangi yoldan oluyor?" }
      ]
    },
    {
      baslik: "*Hierarchical diffusion*: yukarıdan aşağıya",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏛️", terim: "Hierarchical diffusion", tr: "hiyerarşik yayılma", tanim: "Fikir önce güç ve nüfuz merkezlerine ulaşır, sonra basamak basamak aşağı iner. ==Aradaki yerleri atlayarak ilerler.==", ornek: "Moda önce Paris, Milano ve New York'ta; sonra büyük şehirlerde; en son küçük kasabalarda." }
          ] },
        { tip: "adimlar", baslik: "Moda nasıl iner?", adimlar: [
            { baslik: "Tepe", metin: "Paris, Milano, New York: güç ve nüfuz merkezleri." },
            { baslik: "Orta kat", metin: "Büyük şehirler." },
            { baslik: "Taban", metin: "Küçük kasabalar, en son." },
            { baslik: "Atlama", metin: "Fikir aradaki küçük yerlerin üstünden atlar; onlar sönük kalır." }
          ] },
        { tip: "tuzak", metin: "Bir hükümdar yeni bir dini kabul ediyor; önce saray çevresi ve soylular, sonra şehirliler, en son köylüler bu dine geçiyor.", yanlis: "Bu *contagious diffusion*'dır; çünkü yavaş yavaş herkese yayılıyor.", dogru: "Sıralama güç ve konuma göre (yukarıdan aşağıya) olduğu için ==*hierarchical diffusion*==. Önce nüfuz sahipleri, sonra diğerleri." }
      ]
    },
    {
      baslik: "*Contagious diffusion*: dalga dalga",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🤧", terim: "Contagious diffusion", tr: "bulaşıcı yayılma", tanim: "Temasla, dalga dalga. ==Hiyerarşi yoktur==; en yakındakinden başlayarak herkese yayılır.", ornek: "Grip salgını; sınıfta biri esner, yanındaki esner, sonra onun yanındaki. Viral videolar." }
          ] },
        { tip: "grafik", baslik: "Contagious ile hierarchical aynı değil", xlabel: "Hearth'e uzaklık", ylabel: "Benimseme zamanı (gecikme)", xmax: 10, ymax: 10,
          ogeler: [
            { id: "con", tip: "cizgi", renk: 0, from: [0.3, 0.5], to: [9.5, 9], etiket: "contagious" },
            { id: "big", tip: "nokta", x: 8, y: 1.5, etiket: "büyük şehir (uzakta)", renk: 1, gizli: true },
            { id: "small", tip: "nokta", x: 2, y: 8, etiket: "küçük kasaba (yakında)", renk: 1, gizli: true }
          ],
          durumlar: [
            { metin: "*Contagious*: ne kadar uzaksan o kadar geç ulaşır. Dalga komşudan komşuya gider." },
            { metin: "*Hierarchical*: uzaktaki ==büyük şehir erken==, yakındaki ==küçük kasaba geç== benimser. Mesafe değil, basamak önemlidir.", goster: ["big", "small"] }
          ] },
        { tip: "ikili", sol: { ikon: "🌊", baslik: "*Contagious*", maddeler: ["Hiyerarşi yok", "En yakından başlar", "Herkes aynı dalgada"] },
          sag: { ikon: "🏛️", baslik: "*Hierarchical*", maddeler: ["Güç ve büyüklük sırası var", "Yukarıdan aşağıya iner", "Aradaki yerleri atlar"] },
          oyun: [
            { metin: "Bir köyde çıkan söylenti komşudan komşuya geçip bütün köylere ulaşıyor; büyük-küçük ayrımı yok.", cevap: "sol", neden: "Temasla dalga dalga: *contagious*." },
            { metin: "Yeni bir moda akımı önce dünyanın en büyük şehirlerinde, sonra orta büyüklükteki şehirlerde görülüyor.", cevap: "sag", neden: "Büyükten küçüğe atlıyor: *hierarchical*." },
            { metin: "Grip salgını yakın çevreden başlayarak yayılıyor.", cevap: "sol", neden: "Temasla yayılma: *contagious*." },
            { metin: "Bir hükümdarın benimsediği din önce soylulara, sonra halka yayılıyor.", cevap: "sag", neden: "Güç basamağına göre: *hierarchical*." },
            { metin: "Viral bir video herkese hızla yayılıyor.", cevap: "sol", neden: "Hiyerarşisiz, temas ve paylaşım: *contagious*." }
          ] }
      ]
    },
    {
      baslik: "*Stimulus diffusion*: fikir yayılır, ürün değişir",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💡", terim: "Stimulus diffusion", tr: "uyarıcı yayılma", tanim: "En sinsi olanı: ürünün kendisi yayılmaz; arkasındaki ==fikir== yayılır ve yeni yerde şekil değiştirir.", ornek: "Dokunmatik ekran fikri bütün telefonlara yayıldı, ama herkes iPhone almadı." }
          ] },
        { tip: "ikili", sol: { ikon: "📱", baslik: "Dokunmatik ekran", maddeler: ["Fikir: büyük dokunmatik ekran", "Ürün: farklı markalar, farklı şekiller", "Herkes iPhone almadı"] },
          sag: { ikon: "🍔", baslik: "Hindistan'da fast-food", maddeler: ["Fikir: hızlı yemek zinciri", "Ürün: dana eti yok, sebzeli burger", "Fikir aynı, uygulama farklı"] },
          oyun: [
            { metin: "Dokunmatik ekran fikri markadan markaya yayıldı; tuşlu telefonlar kayboldu.", cevap: "sol", neden: "Fikir yayıldı, ürün değişti: *stimulus*." },
            { metin: "Hindistan'daki bir McDonald's'ta dana eti yok, sebzeli burger var.", cevap: "sag", neden: "Fikir aynı, ürün yerel koşula uyarlanmış: *stimulus*." },
            { metin: "Japonya'da yerel bir zincir, Amerikan fast-food fikrini pirinçten ekmekli burgerlerle uyguluyor.", cevap: "sag", neden: "Fikir aynı, ürün farklı: *stimulus*." }
          ] },
        { tip: "tuzak", metin: "Stimulus diffusion'da ürünün kendisinin yayıldığını düşünmek.", yanlis: "*Stimulus diffusion*, ürünün aynen başka ülkeye ulaşmasıdır.", dogru: "Ürün yayılmaz; ==fikir yayılır== ve yeni yerde şekil değiştirir (sebze köftesi, pirinç ekmeği)." }
      ]
    },
    {
      baslik: "Karıştırma tablosu",
      bloklar: [
        { tip: "tablo", baslik: "İpucuna bak, türü bul", head: ["İpucu", "Tür", "Örnek"], rows: [
            ["İnsan taşınıyor", "*Relocation*", "Döner, pizza"],
            ["Büyükten küçüğe atlıyor", "*Hierarchical*", "Moda, din (saraydan halka)"],
            ["Komşudan komşuya dalga", "*Contagious*", "Grip, esneme, viral video"],
            ["Fikir değişerek benimseniyor", "*Stimulus*", "Dokunmatik ekran, Hindistan'da McDonald's"]
          ] },
        { tip: "adimlar", baslik: "Karar sırası", adimlar: [
            { baslik: "Önce sor: insan taşındı mı?", metin: "Evetse *relocation diffusion*." },
            { baslik: "Hayırsa: fikir mi yayılıyor?", metin: "Büyükten küçüğe sıçrıyorsa *hierarchical*; komşudan komşuya dalga gibiyse *contagious*." },
            { baslik: "Ürün yerel olarak değişiyorsa", metin: "Fikir benimseniyor ama şekil değiştiriyorsa *stimulus diffusion*." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Diffusion* = bir özelliğin zamanla yayılması; başladığı yer *hearth*.",
            "*Relocation*: insanlar göç eder, kültürü taşır (Türkler ve döner; İtalyanlar ve pizza).",
            "*Expansion*: fikir yerinde kalır, kartopu gibi büyür; üç alt türü var.",
            "*Hierarchical*: yukarıdan aşağıya, güç ve büyüklük basamaklarıyla; aradaki yerleri atlar (moda: Paris, Milano, New York).",
            "*Contagious*: temasla, komşudan komşuya dalga dalga; hiyerarşi yok (grip, esneme, viral video).",
            "*Stimulus*: ürün değil fikir yayılır ve yeni yerde şekil değiştirir (dokunmatik ekran, Hindistan'da sebzeli burger).",
            "Önce insanın taşınıp taşınmadığına, sonra yayılmanın sırasına bak."
          ] }
      ]
    }
  ]
};
