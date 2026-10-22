/* Kitora not defteri · hg306 · Yayılmanın Günümüzdeki Nedenleri
   Kaynak: AP HuG CED Topic 3.6 (SPS-3.A.3, SPS-3.A.4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg306",
  amac: "Bu konu bugün kültürün nasıl bu kadar hızlı değiştiğini anlatıyor. Kültürün toplumsal olarak inşa edildiğini, kentleşme ve küreselleşmenin etkisini, *time-space convergence*'ı, İngilizcenin yükselişini ve *cultural convergence* ile *divergence* farkını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kültür toplumsal olarak inşa edilir",
      kisa: "Kültür sabit değildir; insanlar onu birlikte kurar ve değiştirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏗️", terim: "Socially constructed", tr: "toplumsal olarak inşa edilmiş", tanim: "Kültürel fikir ve uygulamalar doğadan gelmez; insanların birlikte kurduğu, tartıştığı ve zamanla değiştirdiği şeylerdir.", ornek: "Okulda ayakkabı çıkarma kuralı, ya da bir kıyafetin \"modaya uygun\" sayılması." },
            { ikon: "🏙️", terim: "Urbanization", tr: "kentleşme", tanim: "Nüfusun şehirlerde toplanması ve şehirlerin büyümesi. Farklı kültürlerden insanlar yan yana gelir.", ornek: "Köyden İstanbul'a taşınan bir gencin yeni alışkanlıklar edinmesi." },
            { ikon: "🌍", terim: "Globalization", tr: "küreselleşme", tanim: "Ekonomi, iletişim ve kültürün dünya ölçeğinde birbirine bağlanması.", ornek: "Aynı müzik listesinin, aynı gün birçok ülkede dinlenmesi." }
          ] }
      ]
    },
    {
      baslik: "Küçük ve büyük ölçekli değişim",
      kisa: "Kültür, hem küçük çevrelerde hem küresel süreçlerle değişir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏫", baslik: "Küçük ölçek", maddeler: ["Aile, arkadaş grubu, mahalle, okul", "Yüz yüze ilişkiler ve yerel kararlar"] },
          sag: { ikon: "🌐", baslik: "Büyük ölçek", maddeler: ["Kentleşme ve küreselleşme", "Medya, teknoloji, ekonomi ve siyasi süreçler"] },
          oyun: [
            { metin: "Sınıf arkadaşlarının yeni bir selamlaşma şekli icat etmesi.", cevap: "sol", neden: "Küçük bir çevrede ortaya çıkan değişim." },
            { metin: "Dünya genelinde aynı video platformunun gençlerin davranışını etkilemesi.", cevap: "sag", neden: "Küresel ölçekte medya etkisi." },
            { metin: "Köyden şehre büyük göçle yeni yaşam biçimlerinin yayılması.", cevap: "sag", neden: "Kentleşme büyük ölçekli bir süreçtir." },
            { metin: "Bir ailenin bayram sofrasına yeni bir yemek eklemesi.", cevap: "sol", neden: "Aile ölçeğinde değişim." }
          ] },
        { tip: "harita", merkez: "Kültürü değiştiren kanallar", dallar: [
            { baslik: "Medya", alt: "TV, dizi, sosyal medya" },
            { baslik: "Teknolojik değişim", alt: "telefon, internet, ulaşım" },
            { baslik: "Siyaset", alt: "yasalar, eğitim politikası" },
            { baslik: "Ekonomi", alt: "ticaret, markalar, iş" },
            { baslik: "Toplumsal ilişkiler", alt: "aile, arkadaş, topluluk" }
          ] }
      ]
    },
    {
      baslik: "*Time-space convergence*: mesafe kısalır",
      kisa: "İletişim ve ulaşım hızlandıkça uzak yerler sanki yakınlaşır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⏱️", terim: "Time-space convergence", tr: "zaman-mekân yakınsaması", tanim: "Teknoloji, yerler arası ulaşım ve iletişim süresini kısalttıkça uzak yerlerin birbirine daha yakınmış gibi hissedilmesi. Fiziksel mesafe aynı kalır; süre kısalır.", ornek: "İstanbul ile New York arasında haftalar süren mektup, bugün saniyede gelen mesaj oldu." }
          ] },
        { tip: "grafik", baslik: "Mesafe aynı, süre kısalır", xlabel: "Teknoloji", ylabel: "Ulaşma süresi", xmax: 5, ymax: 10,
          xticks: [{ v: 1, label: "Gemi" }, { v: 2, label: "Uçak" }, { v: 3, label: "Telefon" }, { v: 4, label: "İnternet" }],
          yticks: [{ v: 9, label: "hafta" }, { v: 5, label: "saatler" }, { v: 1, label: "saniye" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, noktalar: [[1, 9], [2, 5], [3, 1.4], [4, 0.8]], gizli: true },
            { id: "p1", tip: "nokta", x: 1, y: 9, etiket: "Gemiyle mektup", kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", x: 2, y: 5, etiket: "Uçakla yolculuk", kilavuz: true, gizli: true },
            { id: "p3", tip: "nokta", x: 3, y: 1.4, etiket: "Telefon", kilavuz: true, gizli: true },
            { id: "p4", tip: "nokta", x: 4, y: 0.8, etiket: "Görüntülü görüşme", kilavuz: true, gizli: true },
            { id: "yz", tip: "yazi", x: 3.5, y: 8, metin: "Mesafe aynı kalır; süre düşer", gizli: true }
          ],
          durumlar: [
            { metin: "İstanbul ile New York arasındaki ==mesafe sabit==. Soru: bu iki yer birbirine ne kadar sürede ulaşıyor?" },
            { metin: "Gemiyle gönderilen mektup ==haftalar== alırdı.", goster: ["p1"] },
            { metin: "Uçak ve telefon ile süre ==saatlere==, hatta saniyelere düştü.", goster: ["p2", "p3"] },
            { metin: "Bugün internet, görüntülü görüşmeyi anlık yapar. ==Süre düştükçe yerler daha yakın hissedilir.==", goster: ["p4", "e", "yz"] }
          ] },
        { tip: "tuzak", metin: "*Time-space convergence* haritadaki mesafenin kısaldığı anlamına gelmez.", yanlis: "Uzak yerler fiziksel olarak birbirine yaklaşır.", dogru: "Kilometre ==aynı kalır==; yalnızca ulaşma ve haberleşme ==süresi== kısalır, bu yüzden yerler daha yakın hissedilir." }
      ]
    },
    {
      baslik: "İnternet, İngilizce ve kaybolan diller",
      kisa: "İnternet etkileşimi hızlandırır; İngilizce yayılırken yerli diller kaybolabilir.",
      bloklar: [
        { tip: "not", metin: "İnternet gibi iletişim teknolojileri insanları hızla birbirine bağlar. Ortak bir dil gerektiği için ==İngilizce kullanımı artar==, bazı yerli diller ise konuşanları azaldığı için ==kaybolma tehlikesiyle== karşılaşır." },
        { tip: "liste", maddeler: [
            { ikon: "⬆️", baslik: "Yükselen", metin: "İngilizce, ortak çevrimiçi iletişim dili olarak." },
            { ikon: "⬇️", baslik: "Azalan", metin: "Az sayıda konuşanı olan yerli diller; gençler yeni kuşakta başka bir dili seçer." },
            { ikon: "🔁", baslik: "İki yönlü etki", metin: "Aynı internet, azınlık dillerinin kayıt ve öğretimine de yardım edebilir." }
          ] }
      ]
    },
    {
      baslik: "*Convergence* ve *divergence*",
      kisa: "Küreselleşme kültürleri hem benzeştirir hem de farklılaştırır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔀", baslik: "*Cultural convergence* (yakınsama)", maddeler: ["Kültürler birbirine benzer", "Küresel markalar, ortak dil, aynı moda"] },
          sag: { ikon: "↔️", baslik: "*Cultural divergence* (ıraksama)", maddeler: ["Kültürler birbirinden farklılaşır", "Yerel kimliği koruma, yeni alt kültürler, dil canlandırma"] },
          oyun: [
            { metin: "Birçok ülkede gençlerin aynı fast-food zincirine gitmesi.", cevap: "sol", neden: "Benzer alışkanlıklar: yakınsama." },
            { metin: "Bir azınlık topluluğu, sosyal medyada kendi dilini canlandırmaya çalışıyor.", cevap: "sag", neden: "Kendine özgü kimliği korumak: ıraksama." },
            { metin: "Dünyanın her yerinde aynı müzik akımının dinlenmesi.", cevap: "sol", neden: "Ortak kültür: yakınsama." },
            { metin: "Bir şehirde gençlerin, küresel modaya tepki olarak yerel kıyafetleri geri getirmesi.", cevap: "sag", neden: "Yerel farklılığı öne çıkarmak: ıraksama." }
          ] },
        { tip: "ornek", baslik: "Aynı marka, farklı menü", durum: "Küresel bir hamburger zinciri, bir ülkede menüsüne yerel tatlar ekliyor. Bu hem benzeşme hem farklılaşma gösterir mi?",
          adimlar: ["Aynı marka birçok ülkede var: bu yakınsamadır.", "Menünün yerele uyarlanması, kültürel farkın korunduğunu gösterir: bu ıraksamadır."],
          sonuc: "Küreselleşme ==tek yönlü değildir==: aynı olayda hem *convergence* hem *divergence* görülebilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kültür toplumsal olarak inşa edilir; hem küçük hem büyük ölçekli süreçlerle değişir.",
            "Büyük ölçekli süreçler: kentleşme ve küreselleşme. Küçük ölçek: aile, arkadaş, mahalle.",
            "Kültür; medya, teknolojik değişim, siyaset, ekonomi ve toplumsal ilişkilerle değişir.",
            "*Time-space convergence*: teknoloji ulaşma süresini kısaltır; mesafe aynı kalır, yerler yakın hissedilir.",
            "İnternet gibi teknolojiler etkileşimi hızlandırır; İngilizce kullanımı artar, bazı yerli diller kaybolur.",
            "*Cultural convergence*: kültürler benzeşir (ortak marka, dil, moda).",
            "*Cultural divergence*: kültürler farklılaşır (yerel kimliği koruma, alt kültürler).",
            "Küreselleşme iki sonucu birlikte doğurabilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir lise öğrencisi, yurt dışındaki ailesiyle her gün görüntülü konuşuyor; bir yüzyıl önce aynı iletişim haftalarca süren mektuplaşmayla yürüyordu. Bu değişim hangi kavramı örneklendirir?",
      opts: ["*Time-space convergence*", "*Sequent occupance*", "*Centrifugal force*", "*Relocation diffusion*"],
      a: 0,
      why: "Teknoloji iletişim süresini kısalttığı için uzak yerler yakın hissedilir: *time-space convergence*. D şıkkı çekici: görüntülü görüşmede kimse taşınmıyor, fikir ve ilişki taşınıyor." },
    { q: "Bir ülkede gençler giderek daha çok İngilizce içerik tüketiyor ve küçük bir yerli dili konuşan yeni kuşak azalıyor. Bu eğilim en çok hangi sonuçla ilişkilidir?",
      opts: ["Yerel dillerin her zaman güçlenmesi", "Kültürel ıraksamanın kesin biçimde artması", "Yerli dil kaybı ve kültürel yakınsama", "*Sacred space*'in yok olması"],
      a: 2,
      why: "İngilizcenin yükselmesi ve yerli dillerin azalması iletişim teknolojileri ve küreselleşmenin sonucudur; kültürler benzeşir. B şıkkı en çekici yanlış: yerli dil kaybı ıraksamanın değil yakınsamanın işaretidir." },
    { q: "Tabloya göre hangisi söylenebilir?",
      fig: { type: "table", caption: "Bir ülkede gençler", head: ["Yıl", "Yerli dili günlük konuşan (%)", "İngilizce konuşan (%)"], rows: [["1990", "80", "10"], ["2000", "60", "25"], ["2010", "40", "45"], ["2020", "25", "65"]] },
      opts: ["Küreselleşme yerli dilleri güçlendirmiştir", "Yerli dil azalırken İngilizce artıyor; bu, iletişim teknolojileriyle ilişkilendirilebilecek bir yakınsama örüntüsüdür", "İngilizce, yerli dilden hiçbir dönemde yaygın olmamıştır", "Tablo hiçbir kültürel değişimi göstermez"],
      a: 1,
      why: "Tablo, yerli dilin yüzde 80'den 25'e gerilediğini, İngilizcenin yüzde 10'dan 65'e yükseldiğini gösteriyor. C şıkkı yanlış: 2010'dan itibaren İngilizce yerli dili geçmiştir." },
    { q: "Aşağıdakilerden hangisi büyük ölçekli bir kültürel değişim sürecidir?",
      opts: ["Bir ailenin yılbaşı yemeğini değiştirmesi", "Okul sınıfında yeni bir selamlaşma şeklinin yayılması", "Küreselleşmenin bir şehirdeki bütün işyerlerinin çalışma biçimini etkilemesi", "İki arkadaşın aynı şarkıyı sevmesi"],
      a: 2,
      why: "Küreselleşme ve kentleşme büyük ölçekli süreçlerdir. A, B ve D yakın çevrede, küçük ölçekte olan değişimlerdir." },
    { q: "Bir azınlık topluluğu, sosyal medyayı kullanarak eski dilini yeniden öğretmeye ve ortak festivaller düzenlemeye başlıyor. Bu durum hangisini örneklendirir?",
      opts: ["*Cultural convergence*", "*Ethnocentrism*", "*Time-space convergence*'ın tersi", "*Cultural divergence*"],
      a: 3,
      why: "İletişim teknolojisini kullanarak kendine özgü kimliği korumak ve farklılaştırmak *cultural divergence*'tır. A şıkkı çekici ama tersini söylüyor: yakınsama benzeşmedir." }
  ]
};
