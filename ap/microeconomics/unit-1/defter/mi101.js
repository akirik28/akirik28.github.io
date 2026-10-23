/* Kitpath not defteri · mi101 · 1.2 Ekonomik Sistemler ve Kaynak Dağılımı
   Kaynak: ap-videolar/src/episodes/mi101 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mi101",
  amac: "Bu konu *economic systems* yani ekonomik sistemleri anlatıyor: bir toplum kıt kaynakları kime ve neye vereceğine nasıl karar verir? Devlet planı, serbest piyasa ve karma ekonomiyi, her birinin güçlü ve zayıf yanını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kaynak dağılımı ve üç temel soru",
      kisa: "Kıtlık varsa biri karar verir: ne, nasıl, kimin için üretilecek?",
      bloklar: [
        { tip: "hikaye", ikon: "🎓", baslik: "Mezuniyet balosu: 300 koltuk, 500 öğrenci",
          metin: "Salon 300 kişilik, gitmek isteyen 500 öğrenci var: 500 − 300 = **200 kişi** açıkta kalıyor. Biletleri müdür mü seçsin, ilk gelen mi alsın, en çok ödeyen mi? Her yolun bir kazananı, bir kaybedeni var. Ülkeler de aynı sorunu ekmek, ev, doktor ve benzin için yaşar." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Resource allocation", tr: "kaynak dağılımı", tanim: "Kıt kaynakların hangi mallara ve kimlere gideceğinin belirlenmesi.", ornek: "Salondaki 300 koltuğun hangi öğrencilere verileceği." },
            { ikon: "🏛️", terim: "Economic system", tr: "ekonomik sistem", tanim: "Bir toplumun üç temel soruyu cevaplama biçimi.", ornek: "Kararı planlama kurulu mu verir, fiyatlar mı?" }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🥪", baslik: "*What*: ne üretelim?", metin: "Tost mu, hamburger mi?" },
            { ikon: "🏭", baslik: "*How*: nasıl üretelim?", metin: "Usta elle mi yapsın, makine mi?" },
            { ikon: "🍽️", baslik: "*For whom*: kimin için üretelim?", metin: "Tostu kim yiyecek?" }
          ] }
      ]
    },
    {
      baslik: "*Command economy*: devlet planlar",
      kisa: "Kaynaklar devletin, kararları plan verir; eşitlik artar, verimlilik düşer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📋", terim: "Command economy", tr: "merkezi planlı ekonomi", tanim: "Fabrikalar ve topraklar devletindir; üç soruyu bir planlama kurulu cevaplar.", ornek: "Kurul bu yıl 1 milyon çift ayakkabı ister." }
          ] },
        { tip: "adimlar", baslik: "Plan kurulu ve 42 numara ayakkabı", adimlar: [
            { baslik: "Plan", metin: "Kurul 1.000.000 çift ayakkabı ister; hepsi 42 numara." },
            { baslik: "Üretim", metin: "Fabrikalar bandı aynı ayakkabıyla doldurur." },
            { baslik: "Sonuç", metin: "38 numara giyenler ayakkabısız kalır; depolar 42 numarayla dolar." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Artıları", maddeler: ["Düşük işsizlik", "Gelirler birbirine yakın", "Hedef kâr değil, toplumun refahı"] },
          sag: { ikon: "⚠️", baslik: "Eksileri", maddeler: ["Az özgürlük", "Verimsizlik, kıtlık ve kuyruklar", "Yenilik yapmak için zayıf teşvik"] } }
      ]
    },
    {
      baslik: "*Free market economy*: fiyatlar karar verir",
      kisa: "Fiyat bir sinyaldir; herkes kendi çıkarına bakarken piyasa işler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛒", terim: "Free market economy", tr: "serbest piyasa", tanim: "Kaynaklar özel kişilerindir; üç soruyu fiyatlar cevaplar.", ornek: "Kantinde tostun ne kadar üretileceğini müşteriler ve fiyat belirler." },
            { ikon: "💰", terim: "Profit motive", tr: "kâr güdüsü", tanim: "İşletmelerin kâr elde etme isteği; piyasanın motoru.", ornek: "Tost büfesi kâr için daha iyi ve ucuz tost yapmaya çalışır." },
            { ikon: "🫳", terim: "Invisible hand", tr: "görünmez el", tanim: "Adam Smith'e göre herkes kendi çıkarına bakar ama müşteriyi memnun etmeden kimse kâr edemez; sonuç toplumun yararına olur.", ornek: "Büfeci kâr ister, sen de ucuz ve iyi tost yersin." }
          ] },
        { tip: "adimlar", baslik: "Kantinde tost kapışılıyor", adimlar: [
            { baslik: "Sinyal", metin: "Tost kapışılır, fiyat 25 liradan 40 liraya çıkar." },
            { baslik: "Tepki", metin: "Yüksek fiyat kârı gösterir; yanına ikinci bir tost büfesi açılır." },
            { baslik: "Rekabet", metin: "İki büfe müşteri için yarışır; fiyat 40 liradan 30 liraya iner, kalite artar." }
          ] },
        { tip: "ikili", sol: { ikon: "📋", baslik: "*Command economy*", maddeler: ["Kaynaklar devletin", "Planlama kurulu karar verir"] },
          sag: { ikon: "🛒", baslik: "*Free market economy*", maddeler: ["Kaynaklar özel kişilerin", "Fiyatlar ve kâr güdüsü karar verir"] },
          oyun: [
            { metin: "Bu yıl kaç çift ayakkabı üretileceğini bir kurul yazdı.", cevap: "sol", neden: "Plan yapan merkez devlet: *command economy*." },
            { metin: "Tost fiyatı artınca yan dükkâna yeni büfe açıldı.", cevap: "sag", neden: "Fiyat sinyali üretimi yönlendirdi: *free market*." },
            { metin: "İşletmeler müşteriyi çekmek için fiyatı indiriyor.", cevap: "sag", neden: "Kâr güdüsü ve rekabet: *free market*." },
            { metin: "Fabrikaların hepsi devletin; hedef toplumun refahı.", cevap: "sol", neden: "Devlet mülkiyeti ve plan: *command economy*." }
          ] },
        { tip: "tuzak", metin: "Fiyat yükselişi kötü haber gibi görünür ama bir mesajdır: üreticilere \"daha çok üret\", tüketicilere \"idareli kullan\" der.", yanlis: "Fiyat artışı piyasanın bozulduğunu gösterir.", dogru: "Fiyat bir *sinyal*dir; kaynakları ihtiyaç duyulan yere yönlendirir." }
      ]
    },
    {
      baslik: "Piyasa neden çalışır? Mülkiyet ve teşvik",
      kisa: "Ürettiğin senin olursa ve ödül çalışmayı getirirse piyasa işler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Property rights", tr: "mülkiyet hakları", tanim: "Bir kaynağa sahip olma, kullanma ve ondan gelir elde etme hakkı: ürettiğin şey senindir.", ornek: "Okul bahçesinde adın yazılı kendi domates parselin." },
            { ikon: "🏆", terim: "Incentives", tr: "teşvikler", tanim: "Davranışı değiştiren ödül ve cezalar. Kâr bir ödül, zarar bir ceza, fiyatlar da birer teşviktir.", ornek: "Tost fiyatı yükselince yeni büfe açmak cazip olur." }
          ] },
        { tip: "ikili", sol: { ikon: "🍅", baslik: "Herkesin kendi parseli", maddeler: ["Her sabah sulanır", "Domatesler kızarıp büyür"] },
          sag: { ikon: "🥀", baslik: "Tek ortak parsel", maddeler: ["Herkes başkasının sulayacağını düşünür", "Domatesler kurur"] } },
        { tip: "tuzak", metin: "Piyasada devletin hiçbir rolü yok sanılır. Oysa mülkiyet haklarını ve sözleşmeleri korumak devletin işidir; bu olmadan özel mülkiyet işlemez.", yanlis: "*Free market*'te devlet yoktur.", dogru: "*Free market*'te de devlet vardır: mülkiyeti ve sözleşmeleri korur." }
      ]
    },
    {
      baslik: "Piyasanın zayıf yanları",
      kisa: "Piyasa kârsız kalan, ödeme gücü olmayan ve tekel olan yerde aksar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💡", terim: "Public goods", tr: "kamusal mallar", tanim: "Herkesin kullandığı, kimsenin tek başına parasını ödemek istemediği mallar. Kâr getirmediği için piyasa bunları az üretir.", ornek: "Sokak lambası, park, ulusal savunma." },
            { ikon: "↔️", terim: "Income inequality", tr: "gelir eşitsizliği", tanim: "Piyasa ödeme gücü olanı dinler; parası olmayan, ihtiyacı olsa da mal alamaz.", ornek: "5.000 liralık ilaç, parası olana gider." },
            { ikon: "🏢", terim: "Monopoly", tr: "tekel", tanim: "Tek bir şirketin bütün piyasayı ele geçirmesi.", ornek: "Şehirdeki bütün dükkânlar tek bir markanın olur." }
          ] },
        { tip: "ikili", sol: { ikon: "🛒", baslik: "Piyasa çözer", maddeler: ["Fiyat sinyaline cevap verir", "Kârlı işte üretim artar"] },
          sag: { ikon: "🏛️", baslik: "Piyasa çözemez", maddeler: ["Kârsız ama gerekli mallar", "Gelir uçurumu ve tekel"] },
          oyun: [
            { metin: "Tost fiyatı yükselince yeni büfeler açıldı.", cevap: "sol", neden: "Kâr sinyali üretimi artırdı." },
            { metin: "Bütün sokaklar karanlık, çünkü lambayı kimse işletmek istemiyor.", cevap: "sag", neden: "Kâr yok, *public goods* üretilmez." },
            { metin: "Pahalı ilaç yalnızca parası olana ulaşıyor.", cevap: "sag", neden: "Gelir uçurumu: piyasa ödeme gücüne bakar." },
            { metin: "Tek şirket bütün piyasayı kontrol ediyor.", cevap: "sag", neden: "*Monopoly*; rekabet kalmadı." }
          ] }
      ]
    },
    {
      baslik: "*Mixed economy*: karma ekonomi",
      kisa: "Çoğu ülke piyasayı seçer ama devlet de araya girer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Mixed economy", tr: "karma ekonomi", tanim: "Kaynakların çoğu özeldir; devlet tekelleri denetler, okul ve hastane gibi kamu hizmetleri sunar, vergi ve yardımla geliri yeniden dağıtır.", ornek: "Türkiye, Almanya, Amerika." },
            { ikon: "🌾", terim: "Traditional economy", tr: "geleneksel ekonomi", tanim: "Bazı kitapların saydığı dördüncü sistem: kararları gelenek ve görenek verir.", ornek: "Baba ile oğul, her zaman olduğu gibi aynı tarlayı eker." }
          ] },
        { tip: "grafik", baslik: "Ekonomik sistemler spektrumu", xlabel: "Command ← → Free market", ylabel: "", xmax: 10, ymax: 4, xticks: [{ v: 0.7, label: "Command" }, { v: 9.3, label: "Free market" }], yticks: [],
          ogeler: [
            { id: "sp", tip: "cizgi", renk: 0, from: [0, 2], to: [10, 2] },
            { id: "kk", tip: "nokta", renk: 2, x: 0.9, y: 2, etiket: "Kuzey Kore", gizli: true },
            { id: "kb", tip: "nokta", renk: 2, x: 2.2, y: 2, etiket: "Küba", gizli: true },
            { id: "hk", tip: "nokta", renk: 1, x: 9.2, y: 2, etiket: "Hong Kong", gizli: true },
            { id: "us", tip: "nokta", renk: 1, x: 7.9, y: 2, etiket: "ABD", gizli: true },
            { id: "tr", tip: "nokta", renk: 3, x: 5.8, y: 2, etiket: "Türkiye", gizli: true },
            { id: "de", tip: "nokta", renk: 3, x: 6.9, y: 2, etiket: "Almanya", gizli: true },
            { id: "mx", tip: "yazi", x: 6.3, y: 3.1, metin: "Gerçek ekonomiler karma", gizli: true }
          ],
          durumlar: [
            { metin: "Bir uçta tam devlet planı, öbür uçta tam serbest piyasa." },
            { metin: "Kuzey Kore ve Küba komuta ucuna, Hong Kong ve ABD piyasa ucuna yakın.", goster: ["kk", "kb", "hk", "us"] },
            { metin: "Türkiye ve Almanya ortanın biraz sağında: gerçek ekonomiler karmadır.", goster: ["tr", "de", "mx"] }
          ] }
      ]
    },
    {
      baslik: "Siyasi sistem ≠ ekonomik sistem",
      kisa: "Ülkeyi kimin yönettiği ile ekonomik kararları kimin verdiği ayrı sorulardır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🗳️", baslik: "*Political system*", maddeler: ["Ülkeyi kimin yönettiği", "Örnek: komünist parti"] },
          sag: { ikon: "💱", baslik: "*Economic system*", maddeler: ["Üç soruyu kimin cevapladığı", "Örnek: plan mı, piyasa mı?"] },
          oyun: [
            { metin: "Çin'i bir komünist parti yönetiyor.", cevap: "sol", neden: "Ülkenin yönetimi: siyasi sistem." },
            { metin: "Çin'de kahve zincirleri ve pazar tezgâhları fiyatlarını kendileri koyuyor.", cevap: "sag", neden: "Ekonomik kararları kimin verdiği: ekonomik sistem." },
            { metin: "Çin 1979'dan beri piyasaya açılıyor.", cevap: "sag", neden: "Reform ekonomik sistemi değiştirdi, siyasi yapıyı değil." }
          ] },
        { tip: "grafik", baslik: "Çin: 1979 reformundan sonra büyüme (şematik)", xlabel: "Yıl", ylabel: "GDP", xmax: 10, ymax: 10, xticks: [{ v: 1, label: "1979" }, { v: 9, label: "2010" }], yticks: [],
          ogeler: [
            { id: "rf", tip: "cizgi", renk: 0, kesik: true, from: [1, 0], to: [1, 9.5], etiket: "1979 reform" },
            { id: "gd", tip: "egri", renk: 1, noktalar: [[1, 1], [3, 1.8], [5, 3.2], [7, 5.5], [9, 9]], etiket: "GDP", gizli: true },
            { id: "cm", tip: "yazi", x: 5, y: 9.2, metin: "Bugün: karma ekonomi", gizli: true }
          ],
          durumlar: [
            { metin: "1979'da Çin piyasaya açılmaya başlar." },
            { metin: "Yıllarca hızlı büyüme: sokaklarda kahve zincirleri, telefon dükkânları.", goster: ["gd"] },
            { metin: "Bugün Çin bir *mixed economy*; siyasi sistemi aynı kalsa da.", goster: ["cm"] }
          ] },
        { tip: "tuzak", metin: "Soru ekonomik kararları kimin verdiğini soruyor, ülkeyi kimin yönettiğini değil.", yanlis: "Komünist parti yönetiyorsa ekonomi *command economy*'dir.", dogru: "Siyasi sistem başka, ekonomik sistem başka; Çin bir *mixed economy*." }
      ]
    },
    {
      baslik: "*Circular flow*: \"kimin için\" sorusunun cevabı",
      kisa: "Piyasada mallar, gelir kazanıp ödeyebilenlere gider.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔄", terim: "Circular flow", tr: "dolaşım modeli", tanim: "Haneler ve firmalar arasında mal, üretim faktörü ve paranın döngüsünü gösteren model.", ornek: "Maaşın tosta, tostun kazanca dönmesi." },
            { ikon: "🏠", terim: "Households", tr: "haneler", tanim: "Tüketen ve üretim faktörlerinin sahibi olan birimler.", ornek: "Kafede çalışıp maaş alan sen." },
            { ikon: "🏭", terim: "Firms", tr: "firmalar", tanim: "Mal ve hizmet üreten birimler.", ornek: "Tost büfesi, kafe." },
            { ikon: "👷", terim: "Factor market", tr: "faktör piyasası", tanim: "Emek, toprak, sermaye gibi üretim faktörlerinin alınıp satıldığı piyasa.", ornek: "Emeğini kafeye satıp maaş alırsın." },
            { ikon: "🥪", terim: "Product market", tr: "mal piyasası", tanim: "Mal ve hizmetlerin alınıp satıldığı piyasa.", ornek: "Akşam maaşınla tost alırsın." }
          ] },
        { tip: "ikili", sol: { ikon: "👷", baslik: "*Factor market*", maddeler: ["Haneler satıcı, firmalar alıcı", "Akan: emek ↔ ücret"] },
          sag: { ikon: "🥪", baslik: "*Product market*", maddeler: ["Firmalar satıcı, haneler alıcı", "Akan: mal ↔ harcama"] },
          oyun: [
            { metin: "Kafede çalışıp aylık maaş alıyorsun.", cevap: "sol", neden: "Emeğini firmaya satıyorsun: *factor market*." },
            { metin: "Akşam maaşınla tost alıyorsun.", cevap: "sag", neden: "Mal alıyorsun: *product market*." },
            { metin: "Kafe, bir garson tutuyor.", cevap: "sol", neden: "Firma emek satın alıyor: *factor market*." },
            { metin: "Hane, markette ayran satın alıyor.", cevap: "sag", neden: "Mal ve hizmet alışverişi: *product market*." }
          ] },
        { tip: "tuzak", metin: "Piyasa türünü tanımak için kimin sattığına bak. Hane emeğini sattığında alıcı firmadır; tost aldığında satıcı firmadır.", yanlis: "Haneler her piyasada alıcıdır.", dogru: "*Factor market*'te haneler satıcı, firmalar alıcıdır; *product market*'te tersi." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Her toplum üç soruyu cevaplar: ne, nasıl, kimin için; cevaplama biçimi *economic system*'dir.",
            "*Command economy*: devlet planlar; eşitlik artar, verimlilik ve özgürlük azalır.",
            "*Free market*: fiyatlar, *profit motive* ve *invisible hand* çalışır; fiyat bir sinyaldir.",
            "Piyasa *property rights* ve *incentives* olmadan işlemez; devlet mülkiyeti korur.",
            "Piyasanın zayıf yanları: *public goods*, gelir eşitsizliği, *monopoly*.",
            "Çoğu ülke *mixed economy*'dir; *traditional economy* kararları geleneğe bırakır.",
            "Siyasi sistem ekonomik sistemle aynı değildir; Çin bir *mixed economy*.",
            "*Circular flow*: haneler *factor market*'te satar, *product market*'te alır; piyasada mallar gelir kazanıp ödeyebilenlere gider."
          ] }
      ]
    }
  ]
};
