/* Kitora not defteri · bf15 · 1.5 Vizyon
   Kaynak: ap-videolar/src/episodes/bf15 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf15",
  ozet: "Her işletme üç soruyu cevaplamalı: biz kimiz (*core values*), neden varız (*purpose*), nereye gidiyoruz (*vision statement*). Bu defterde ayrıca *company culture*, *core competencies*, *strategic decisions*, *mission statement* ile *vision statement* farkını ve üç işletme türünü (*for-profit*, *social enterprise*, *nonprofit*) göreceksin.",
  bolumler: [
    {
      baslik: "Varış noktasını yazmadan yola çıkmak",
      bloklar: [
        { tip: "hikaye", ikon: "🧭", baslik: "Navigasyonu açtın, adres yazmadın",
          metin: "Navigasyonu açtın ama varış noktasını yazmadın. Uygulama yol göstermez; nereye gideceğini bilmeyene rota çizilmez. İşletmeler de böyledir. Yola çıkmadan önce üç soruyu cevaplamalılar." },
        { tip: "adimlar", baslik: "Üç soru", adimlar: [
            { baslik: "Biz kimiz?", metin: "Cevap: *core values*." },
            { baslik: "Neden varız?", metin: "Cevap: *purpose*." },
            { baslik: "Nereye gidiyoruz?", metin: "Cevap: *vision statement*." }
          ] },
        { tip: "not", metin: "Notlardaki açılış oyunu “Would you rather?”: çok sevdiğin iş mi, on kat maaşlı iş mi; evden mi, ofisten mi çalışmak; kâr odaklı mı, topluma katkı odaklı mı bir iş kurmak. Cevapların değerlerini gösterir; ==değerler kararları, kovaladığın fırsatları ve hedeflerini belirler.==" }
      ]
    },
    {
      baslik: "Biz kimiz? *Core values*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💎", terim: "Core values", tr: "temel değerler", tanim: "Bir işletmenin davranışlarına ve kararlarına yön veren temel inançlar ve ilkeler; müşteriye, çalışana, tedarikçiye ve topluma nasıl davranacağını belirler.", ornek: "Dürüstlük, şeffaflık, yaratıcılık, güvenilirlik, yenilik, sosyal sorumluluk." },
            { ikon: "🏘️", terim: "Company culture", tr: "şirket kültürü", tanim: "Bir işletmede insanların nasıl çalıştığını ve birbirine nasıl davrandığını etkileyen ortak değerler ve davranışlar; *core values*'tan doğar.", ornek: "Usta yokken çırak da bayat ekmeği vitrine koymaz." }
          ] },
        { tip: "adimlar", baslik: "Güneş Fırını'nın dürüstlüğü", adimlar: [
            { baslik: "Değer", metin: "Hayali fırının *core value*'su dürüstlük." },
            { baslik: "Karar", metin: "Dünkü ekmeği taze diye satmaz; yarı fiyatına verir." },
            { baslik: "Kültür", metin: "Herkes böyle davranınca *company culture* oluşur." },
            { baslik: "Sonuç", metin: "Usta yokken çırak da bayat ekmeği vitrine koymaz." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🧭", baslik: "Davranışa yön verir", metin: "*Guide behavior*." },
            { ikon: "⚖️", baslik: "Kararları şekillendirir", metin: "*Shape decisions*." },
            { ikon: "🎯", baslik: "Seçimleri etkiler", metin: "*Influence choices*." }
          ] },
        { tip: "ikili", sol: { ikon: "💎", baslik: "*Core values*", maddeler: ["Neye inanıyoruz", "Kararlara yön verir"] },
          sag: { ikon: "🏘️", baslik: "*Company culture*", maddeler: ["İnsanların fiilen nasıl davrandığı", "Değerlerden doğar"] },
          oyun: [
            { metin: "“Biz dürüstlüğe inanırız.”", cevap: "sol", neden: "Bir inanç ve ilke: *core value*." },
            { metin: "Çırakların bayat ekmeği vitrine hiç koymaması.", cevap: "sag", neden: "Ortak davranış: *company culture*." },
            { metin: "“Şeffaflık bizim için vazgeçilmez.”", cevap: "sol", neden: "İlke, henüz davranış değil." },
            { metin: "Çalışanların birbirine nasıl davrandığı.", cevap: "sag", neden: "İş yerindeki ortak davranış: kültür." }
          ] },
        { tip: "tuzak", baslik: "Culture nereden doğar?", metin: "*Core values*, *company culture*'ı yaratır; herkesin aynı yöne gitmesini sağlar.", yanlis: "Şirket kültürü ile temel değerler birbirinden bağımsızdır.", dogru: "Kültür, *core values*'tan doğan ortak davranıştır." }
      ]
    },
    {
      baslik: "Neden varız? *Purpose*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌅", terim: "Purpose", tr: "varoluş amacı", tanim: "İşletmenin varlık nedeni, yani “neden bu işi yapıyoruz?” sorusunun cevabı. Para kazanmak *purpose* değil, sonuçtur.", ornek: "Mahalleli güne sıcak ekmekle başlasın diye." }
          ] },
        { tip: "harita", merkez: "Üç halka: *what*, *how*, *why*", dallar: [
            { baslik: "*What*: ne yapıyoruz?", alt: "Herkes bilir. Güneş Fırını: ekmek." },
            { baslik: "*How*: nasıl yapıyoruz?", alt: "Bazıları bilir. Güneş Fırını: ekşi mayayla." },
            { baslik: "*Why*: neden yapıyoruz?", alt: "Çok azı söyler. Güneş Fırını: mahalleli güne sıcak ekmekle başlasın diye." }
          ] },
        { tip: "ikili", sol: { ikon: "🌅", baslik: "*Purpose* (neden)", maddeler: ["İnanç ve varlık nedeni", "Mahalleli sıcak ekmekle güne başlasın"] },
          sag: { ikon: "💰", baslik: "Sonuç (kâr)", maddeler: ["Doğru iş yapınca gelir", "Amaç değil, sonuçtur"] },
          oyun: [
            { metin: "“İnsanlar güne sıcak ekmekle başlasın.”", cevap: "sol", neden: "Varlık nedeni: *purpose*." },
            { metin: "“Yıl sonunda 500 bin lira kâr edeceğiz.”", cevap: "sag", neden: "Kâr bir sonuçtur." },
            { metin: "“Bu yıl satışları iki katına çıkarmak istiyoruz.”", cevap: "sag", neden: "Bir kâr ya da satış hedefi: sonuçtur, varlık nedeni değil." },
            { metin: "“Gezegenimizi kurtarmak için bu işteyiz.”", cevap: "sol", neden: "İnanca dayalı varlık nedeni." }
          ] },
        { tip: "tuzak", baslik: "Why = para değil", metin: "Profit her zaman bir sonuçtur; *purpose* inanç ve varlık nedenidir.", yanlis: "Bir işletmenin *purpose*'u para kazanmaktır.", dogru: "*Purpose* inanç ve varlık nedenidir; para kazanmak sonuçtur." },
        { tip: "not", metin: "Simon Sinek'in 2009 tarihli TEDx konuşmasından: herkes ne yaptığını bilir, bazıları nasıl yaptığını bilir, çok azı ==neden yaptığını== bilir." }
      ]
    },
    {
      baslik: "*Core competencies*: neyi en iyi yaparız?",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💪", terim: "Core competencies", tr: "temel yetkinlikler", tanim: "İşletmeye *competitive advantage* kazandıran yetenekler, beceriler ve uzmanlıklar; kısaca rakiplerinden iyi yaptığı şeyler.", ornek: "Güneş Fırını'nda ekşi maya ustalığı." },
            { ikon: "🥇", terim: "Competitive advantage", tr: "rekabet avantajı", tanim: "Bir işletmenin rakiplerinden daha iyi performans gösterebilme gücü (Topic 1.2'de işlendi).", ornek: "Rakiplerini geçme gücü." },
            { ikon: "✨", terim: "Innovation", tr: "yenilik", tanim: "Yeni ürün, yöntem ya da fikir geliştirmek.", ornek: "Apple'ın ürün tasarımı." },
            { ikon: "⚙️", terim: "Operational efficiency", tr: "operasyonel verimlilik", tanim: "İşleri az kaynakla ve düşük maliyetle yürütebilmek.", ornek: "Walmart ve BİM'in düşük fiyatı." }
          ] },
        { tip: "tablo", baslik: "Kimin gücü ne?", head: ["İşletme", "*Core competency*"], rows: [
            ["Apple", "Tasarım ve *innovation*"],
            ["Walmart, BİM", "*Operational efficiency*: işi düşük maliyetle yürütmek"],
            ["Amazon", "Lojistik ve teslimat"],
            ["Güneş Fırını", "Ekşi maya ustalığı"]
          ] },
        { tip: "ikili", sol: { ikon: "🧠", baslik: "Yenilik temelli güç", maddeler: ["Tasarım ve *innovation*", "Ar-Ge'ye yatırım"] },
          sag: { ikon: "⚙️", baslik: "Verimlilik temelli güç", maddeler: ["Düşük maliyetle çalışmak", "Ucuz fiyat"] },
          oyun: [
            { metin: "Apple'ın ürün tasarımı.", cevap: "sol", neden: "Tasarım ve yenilik." },
            { metin: "BİM'in raflarda düşük fiyat sunabilmesi.", cevap: "sag", neden: "İşi düşük maliyetle yürütmek." },
            { metin: "Walmart'ın düşük fiyatının dayanağı.", cevap: "sag", neden: "*Operational efficiency*." },
            { metin: "Her yıl yeni özelliklerle çıkan telefon modelleri.", cevap: "sol", neden: "*Innovation*." }
          ] }
      ]
    },
    {
      baslik: "Yapabilmek, yapmalı demek değil",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "♟️", terim: "Strategic decisions", tr: "stratejik kararlar", tanim: "İşletmenin yönünü ve başarısını belirleyen uzun vadeli kararlar: bir pazara girmek ya da çıkmak, yeni ürün çıkarmak, büyümeye mi *profit*'e mi öncelik vermek.", ornek: "Fırında ikinci şubeyi açmak." }
          ] },
        { tip: "ikili", sol: { ikon: "📆", baslik: "Günlük karar", maddeler: ["Kısa vadeli", "Yarın kaç ekmek pişeceği"] },
          sag: { ikon: "♟️", baslik: "*Strategic decision*", maddeler: ["Uzun vadeli", "Yönü ve başarıyı belirler", "İkinci şubeyi açmak"] },
          oyun: [
            { metin: "Yarın kaç ekmek pişirileceği.", cevap: "sol", neden: "Günlük işleyiş." },
            { metin: "Yeni bir mahallede ikinci şube açmak.", cevap: "sag", neden: "Yönü belirleyen uzun vadeli karar." },
            { metin: "Yeni bir ülkenin pazarına girmeye karar vermek.", cevap: "sag", neden: "Pazara girmek stratejik karardır." },
            { metin: "Bugün hamurun kaç dakika dinleneceği.", cevap: "sol", neden: "Günlük operasyon." }
          ] },
        { tip: "grafik", baslik: "Amazon Fire Phone: yapabildi ama yapmalı mıydı?", xlabel: "Alan", ylabel: "Milyon dolar", xmax: 4, ymax: 200,
          yticks: [{ v: 170, label: "170" }],
          ogeler: [
            { id: "z", tip: "alan", renk: 0, noktalar: [[1, 0], [3, 0], [3, 0], [1, 0]] },
            { id: "zt", tip: "yazi", x: 2, y: 180, metin: "Zarar 170 milyon $", gizli: true },
            { id: "y", tip: "yazi", x: 2, y: 195, metin: "Amazon 2014'te kendi telefonunu çıkardı", gizli: true }
          ],
          durumlar: [
            { metin: "Amazon 2014'te ==kendi telefonunu== çıkardı (Fire Phone).", goster: ["y"] },
            { metin: "Telefon tutmadı: ==170 milyon dolar== zarar.", set: { z: { noktalar: [[1, 0], [3, 0], [3, 170], [1, 170]] } }, goster: ["zt"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "📵", baslik: "Kapanan işler", metin: "Fire Phone (170 milyon dolar zarar), Amazon Wallet, Cloud Player, Test Drive, WebPay ve Endless adlı moda markası." },
            { ikon: "🚫", baslik: "Hayır demek", metin: "Vasat işlere hayır demek, çok iyi işlere yer açar; “ne ekleyelim?” kadar “neyi bırakalım?” da sorulmalı." },
            { ikon: "💎", baslik: "Değer eşleştirmesi", metin: "Kaliteye değer veren işletme en iyi ürünü yapar; *innovation*'a değer veren Ar-Ge'ye yatırır; topluma katkıya değer veren *profit*'inin bir kısmını bağışlar." }
          ] },
        { tip: "tuzak", baslik: "Yapabiliyorsan yap mı?", metin: "Hangi fırsata gidileceğine ve zamanın, kaynağın nereye yatırılacağına *core competencies* bakılarak karar verilir. Soru bir kararı verip “hangi değerle uyumlu?” diye sorabilir.", yanlis: "Bir şeyi yapabiliyorsan yapmalısın.", dogru: "Yapabiliyor olmak yapman gerektiği anlamına gelmez; *core values* ve *core competencies* pusulandır." }
      ]
    },
    {
      baslik: "Nereye gidiyoruz? *Vision statement*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔭", terim: "Vision statement", tr: "vizyon cümlesi", tanim: "İşletmenin uzun vadede ne olmak istediğini anlatan kısa cümle; varış noktası.", ornek: "IKEA: birçok insan için daha iyi bir gündelik yaşam yaratmak." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "Bugün", baslik: "Tek şube", metin: "Güneş Fırını'nın bugün tek şubesi var." },
            { tarih: "Yarın", baslik: "Vizyon", metin: "Şehrin her mahallesinde güvenilen fırın olmak." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🛋️", baslik: "IKEA", metin: "Birçok insan için daha iyi bir gündelik yaşam yaratmak." },
            { ikon: "🍞", baslik: "Güneş Fırını", metin: "Şehrin her mahallesinde güvenilen fırın olmak." },
            { ikon: "🔧", baslik: "Bisiklet servisi (soru örneği)", metin: "On yıl içinde Türkiye'nin en güvenilen servisi olmak: bugünü değil gelecekte ne olmak istediğini anlatıyor." }
          ] },
        { tip: "not", metin: "Neden gerekli? Vizyon ve misyon cümleleri çalışanlara öncelikleri bildirir, kararlara yön verir, müşterinin, yatırımcının ve diğer paydaşların işletmenin neyi savunduğunu anlamasını sağlar; kısa vadeli fırsatlara dalmak yerine ==uzun vadeli hedeflere== odaklanmayı kolaylaştırır." }
      ]
    },
    {
      baslik: "*Mission* mı, *vision* mı?",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗺️", terim: "Mission statement", tr: "misyon cümlesi", tanim: "İşletmenin ne yaptığını, kime hizmet ettiğini ve nasıl değer yarattığını açıklayan cümle; gündelik işi anlatır, vizyona götüren yol haritasıdır.", ornek: "Mahallemizin ailelerine her sabah taze ve katkısız ekmeği uygun fiyata sunmak." }
          ] },
        { tip: "tablo", baslik: "Güneş Fırını'nın misyonu: üç kutu", head: ["Soru", "Cevap"], rows: [
            ["Ne yapıyor?", "Ekmek"],
            ["Kime hizmet ediyor?", "Ailelere"],
            ["Nasıl değer yaratıyor?", "Taze, katkısız, uygun fiyatlı"]
          ], not: "Notlardaki oto tamircisi örneği de aynı üç kutuyu kullanır: ne yapar, kime hizmet eder, nasıl değer yaratır." },
        { tip: "ikili", sol: { ikon: "🔭", baslik: "*Vision statement*", maddeler: ["Gelecek: ne olmak istiyoruz", "Varış noktası", "“Şehrin her mahallesinde güvenilen fırın olmak.”"] },
          sag: { ikon: "🗺️", baslik: "*Mission statement*", maddeler: ["Bugün: ne yapıyoruz, kime, nasıl", "Yol haritası", "“Ailelere her sabah taze, katkısız ekmek sunmak.”"] },
          oyun: [
            { metin: "“On yıl içinde Türkiye'nin en güvenilen bisiklet servisi olmak.”", cevap: "sol", neden: "Gelecekte ne olmak istiyor: *vision*." },
            { metin: "“Bisiklet sahiplerine uygun fiyata hızlı ve güvenilir onarım sunmak.”", cevap: "sag", neden: "Ne yapıyor, kime hizmet ediyor, nasıl değer yaratıyor: *mission*." },
            { metin: "“Birçok insan için daha iyi bir gündelik yaşam yaratmak.” (IKEA)", cevap: "sol", neden: "Uzun vadeli varış noktası." },
            { metin: "“Mahallemizin ailelerine her sabah taze ekmek sunmak.”", cevap: "sag", neden: "Bugünkü iş ve müşteri." },
            { metin: "“Şehrin her mahallesinde güvenilen fırın olmak.”", cevap: "sol", neden: "Gelecek hedefi." }
          ] },
        { tip: "tuzak", baslik: "En çok karışan çift", metin: "Vision: gelecek, ne olmak istiyoruz. Mission: bugün, ne yapıyoruz, kime, nasıl değer yaratıyoruz.", yanlis: "*Vision statement* işletmenin bugün ne yaptığını anlatır.", dogru: "*Vision statement* varış noktasıdır; bugünü anlatan, yol haritası olan *mission statement*'tır." }
      ]
    },
    {
      baslik: "Önceliğe göre üç tür",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏪", terim: "For-profit business", tr: "kâr amaçlı işletme", tanim: "Sahiplerine *profit* kazandırmayı ve zaman içinde rekabetçi kalmayı amaçlayan kuruluş; işletmelerin çoğu.", ornek: "Apple, Migros, Güneş Fırını." },
            { ikon: "🌿", terim: "Social enterprise", tr: "sosyal girişim", tanim: "*Profit* etmeye çalışırken aynı anda sosyal ya da çevresel bir hedefi de gerçekleştirmeye çalışan işletme.", ornek: "Patagonia: satışlarının %1'ini çevre kuruluşlarına verir." },
            { ikon: "🤲", terim: "Nonprofit organization", tr: "kâr amacı gütmeyen kuruluş", tanim: "Kamu yararı için var olan, artan parayı sahiplerine dağıtmak yerine yeniden kuruluşa yatırmak zorunda olan kuruluş.", ornek: "Yemek bankaları, Kızılhaç, TEMA Vakfı." }
          ] },
        { tip: "ornek", baslik: "Güneş Fırını kâr ettiyse (for-profit)", durum: "Fırın bu yıl 500.000 TL *profit* etti. Sahibi bu parayla ne yapabilir?",
          adimlar: ["*For-profit business*'ın amacı sahiplerine *profit* kazandırmak.", "500.000 TL kâr sahibine ait.", "Sahibi parayı alabilir ya da yeniden yatırabilir."],
          sonuc: "Sahibi 500.000 TL'yi alabilir; *for-profit*'te kâr sahiplere gidebilir." },
        { tip: "ornek", baslik: "Patagonia'nın yüzde 1'i (örnek rakamla)", durum: "Patagonia satışlarının %1'ini çevre kuruluşlarına veriyor. Örnek olarak 10.000.000 TL'lik satış yapsa ne kadar verirdi?",
          adimlar: ["Satış = 10.000.000 TL (örnek rakam).", "Bağış = 10.000.000 × %1 = 100.000 TL.", "Geri kalan satış geliri maliyet ve *profit* için kullanılır."],
          sonuc: "Örnek olarak 100.000 TL. *Social enterprise* hem kâr ister hem çevreye katkı yapar." },
        { tip: "grafik", baslik: "Bir vakıf: topladı, harcadı, kalan (milyon TL)", xlabel: "Kalem", ylabel: "Milyon TL", xmax: 4, ymax: 11,
          yticks: [{ v: 1, label: "1" }, { v: 9, label: "9" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "t", tip: "alan", renk: 1, noktalar: [[0.4, 0], [1.2, 0], [1.2, 0], [0.4, 0]] },
            { id: "h", tip: "alan", renk: 0, noktalar: [[1.6, 0], [2.4, 0], [2.4, 0], [1.6, 0]] },
            { id: "k", tip: "alan", renk: 2, noktalar: [[2.8, 0], [3.6, 0], [3.6, 0], [2.8, 0]] },
            { id: "tt", tip: "yazi", x: 0.8, y: 10.5, metin: "Toplanan 10", gizli: true },
            { id: "ht", tip: "yazi", x: 2, y: 9.5, metin: "Harcanan 9", gizli: true },
            { id: "kt", tip: "yazi", x: 3.2, y: 1.6, metin: "Kalan 1: fidana", gizli: true }
          ],
          durumlar: [
            { metin: "Bir vakıf bağışla ==10 milyon TL== topladı.", set: { t: { noktalar: [[0.4, 0], [1.2, 0], [1.2, 10], [0.4, 10]] } }, goster: ["tt"] },
            { metin: "==9 milyonunu== harcadı.", set: { h: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 9], [1.6, 9]] } }, goster: ["ht"] },
            { metin: "Kalan ==1 milyon== kimsenin cebine girmez; yeni fidanlara gider.", set: { k: { noktalar: [[2.8, 0], [3.6, 0], [3.6, 1], [2.8, 1]] } }, goster: ["kt"] }
          ] },
        { tip: "ikili", sol: { ikon: "🏪", baslik: "*For-profit business*", maddeler: ["Amaç: sahiplerine kâr", "Artan para sahibine gidebilir", "Apple, Migros"] },
          sag: { ikon: "🤲", baslik: "*Nonprofit organization*", maddeler: ["Amaç: kamu yararı", "Artan para dağıtılamaz, kuruluşa geri yatırılır", "TEMA, Kızılhaç"] },
          oyun: [
            { metin: "Yıl sonunda kârı hissedarlarına dağıtan market zinciri.", cevap: "sol", neden: "Kâr sahiplere gidebilir: *for-profit*." },
            { metin: "10 milyon lira toplayıp artanı fidan dikmeye harcayan vakıf.", cevap: "sag", neden: "Artan para kuruluşa geri yatırılır: *nonprofit*." },
            { metin: "Bağış toplarken aynı zamanda ürün de satan yardım kuruluşu.", cevap: "sag", neden: "*Nonprofit* da mal ve hizmet satabilir; artanı dağıtamaz." },
            { metin: "Sahiplerinin yatırımını kâra çevirmeyi hedefleyen fırın.", cevap: "sol", neden: "Amaç sahiplerine *profit*." }
          ] },
        { tip: "ikili", sol: { ikon: "🌿", baslik: "*Social enterprise*", maddeler: ["*Profit* ister", "Sosyal ya da çevresel hedefi de vardır", "Patagonia"] },
          sag: { ikon: "🤲", baslik: "*Nonprofit organization*", maddeler: ["Kâr amacı gütmez", "Artanı dağıtamaz", "Yemek bankası"] },
          oyun: [
            { metin: "Atık kumaştan çanta dikip satan ve kadınlara iş veren atölye.", cevap: "sol", neden: "Kâr ister, sosyal hedefi de var: *social enterprise*." },
            { metin: "Bağışlarla yemek dağıtan yemek bankası.", cevap: "sag", neden: "Kamu yararı için var: *nonprofit*." },
            { metin: "Satışının %1'ini çevre kuruluşlarına veren giyim markası.", cevap: "sol", neden: "*Profit* ister ve çevreye katkı yapar." },
            { metin: "Fazla parayı yeniden kuruluşa yatırmak zorunda olan kuruluş.", cevap: "sag", neden: "*Nonprofit* kuralı." }
          ] },
        { tip: "tuzak", baslik: "Social enterprise nonprofit değildir", metin: "*Social enterprise* *profit* ister, ama ürününü, işleyişini ya da kazancını bilinçli olarak olumlu bir değişim için kullanır.", yanlis: "*Social enterprise* bir *nonprofit organization*'dır.", dogru: "*Social enterprise* kâr eder ve toplumsal hedefi vardır; *nonprofit* artanı dağıtamaz." },
        { tip: "tuzak", baslik: "Nonprofit de satış yapabilir", metin: "Fark, artan parayı dağıtamaması ve kuruluşa geri yatırmak zorunda olmasıdır. Amaç en çok *profit* değil, en çok etki.", yanlis: "*Nonprofit organization* mal ya da hizmet satamaz.", dogru: "Satabilir; ama artanı sahiplerine dağıtamaz, kuruluşa yatırır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Üç soru: biz kimiz (*core values*), neden varız (*purpose*), nereye gidiyoruz (*vision statement*).",
            "*Core values* davranışa ve kararlara yön verir; herkes böyle davranınca *company culture* oluşur.",
            "*Purpose* inanç ve varlık nedenidir; para kazanmak sonuçtur. Üç halka: *what*, *how*, *why*.",
            "*Core competencies* rakiplerinden iyi yaptığın şeyler: Apple tasarım ve *innovation*, Walmart ve BİM *operational efficiency*, Amazon lojistik.",
            "*Strategic decisions* uzun vadelidir (ikinci şube). Yapabiliyor olmak yapmalı demek değil: Fire Phone 170 milyon dolar zarar.",
            "*Vision statement* varış noktası (gelecek), *mission statement* yol haritası (bugün: ne, kime, nasıl).",
            "*For-profit*: sahiplere kâr. *Social enterprise*: kâr + sosyal/çevresel hedef. *Nonprofit*: kamu yararı, artan para kuruluşa yatırılır.",
            "Vizyon ve misyon öncelikleri bildirir, kararlara yön verir, uzun vadeli hedeflere odaklanmayı kolaylaştırır.",
            "Her şey *core values* ve *core competencies*'e dayanır; işletme başarıya kendiliğinden sürüklenmez, bir vizyona ihtiyacı vardır."
          ] }
      ]
    }
  ]
};
