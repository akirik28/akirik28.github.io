/* Kitora not defteri · en401 · 4.1 Araştırma Süreci ve Güvenilir Kaynaklar
   Okul dersi (10. sınıf English · Unit 4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en401",
  amac: "Argumentative essay ve persuasive speech projesinin kurallarını ve araştırma sürecini öğreneceksin. Konuyu tartışılabilir bir soruya daraltmayı, kaynak türlerini ayırt etmeyi ve bir kaynağın güvenilirliğini *CRAAP* testiyle sınamayı çalışacaksın.",
  bolumler: [
    {
      baslik: "Proje bir bakışta",
      kisa: "Essay ve konuşma tek projedir; kurallar baştan bilinmeli.",
      bloklar: [
        { tip: "not", metin: "Birinci dönemdeki *Research Process Project* (konu seçimi, kaynak, *outline*, MLA) ikinci dönemdeki *Argumentative Essay & Persuasive Speech* için hazırlıktır. Önce kurallara bak; sonraki defterler her kuralı ayrıntılı anlatıyor." },
        { tip: "tablo", baslik: "Projenin kuralları", head: ["Kural", "Ne diyor?", "Defter"], rows: [
            ["Uzunluk", "1500–1700 kelime, MLA araştırma yazısı biçimi", "en403"],
            ["Kaynak", "En az 4 kaynak; röportaj ve anket (50+ kişi önerilir)", "en401, en405"],
            ["Renk kodlama", "Kaynaklar renk kodlu olarak teslim edilir", "en401"],
            ["Dil", "Essay'de *I* ve *you* kullanılmaz", "en403"],
            ["Alıntı", "Alıntılar cümleye yerleştirilir; 4 satırdan uzunsa blok alıntı", "en402"],
            ["Tez", "Öğretmen onaylamadan essay'e başlanmaz", "en403"],
            ["Not", "Essay, Exam 2'nin *Reading/Writing* yarısıdır (%50)", "en403"],
            ["Konuşma", "5–6 dakika + soru-cevap; performans notunun %60'ı; PowerPoint okuması değil", "en406"],
            ["Dışarıdan yetişkin", "E-postada öğretmen CC'de olur", "en405"],
            ["Yapay zekâ", "Araştırmada ve yazmada yasak; yalnızca sınırlı destek", "en407"]
          ], not: "Öğretmeninin güncel yönergesi ile bu tablo ayrışırsa öğretmenin yönergesi geçerlidir." }
      ]
    },
    {
      baslik: "Araştırma süreci adım adım",
      kisa: "Önce soru, sonra kaynak, sonra yazı; sıra atlanırsa iş uzar.",
      bloklar: [
        { tip: "adimlar", adimlar: [
            { baslik: "Geniş konu seç", metin: "Seni gerçekten ilgilendiren bir alan: okul, teknoloji, sağlık, çevre." },
            { baslik: "Konuyu daralt", metin: "Kim, nerede, hangi açıdan? Konuyu tek bir tartışmaya indir." },
            { baslik: "Araştırma sorusu yaz", metin: "Tartışılabilir ve kanıtla cevaplanabilir bir soru." },
            { baslik: "Ön okuma yap", metin: "Genel kaynaklarla konuyu tanı; iki tarafın görüşlerini not et." },
            { baslik: "Çalışma tezi yaz ve onaylat", metin: "Tek cümlelik taslak tez; öğretmenin onayını al." },
            { baslik: "Kaynak ara ve değerlendir", metin: "Her kaynağı *CRAAP* ile sına; en az 4 güvenilir kaynak bul." },
            { baslik: "Notla ve renk kodla", metin: "Her kaynağa bir renk ver; bilginin nereden geldiğini kaybetme." },
            { baslik: "Outline çıkar", metin: "Gerekçeleri ve karşı argümanı sıraya koy; sonra yaz." }
          ] },
        { tip: "tuzak", metin: "Kaynakları essay bittikten sonra aramak hem zaman kaybettirir hem intihale yol açar.", yanlis: "Önce essay'i yazarım, sonra uygun alıntı ararım.", dogru: "Tez onaylanır, kaynaklar toplanır ve notlanır, ==sonra== yazılır." }
      ]
    },
    {
      baslik: "Tartışılabilir soru ve dar konu",
      kisa: "Konu geniş olur; soru dar ve tartışılabilir olmalı.",
      bloklar: [
        { tip: "tablo", baslik: "Geniş konudan dar soruya", head: ["Geniş konu", "Dar ve tartışılabilir soru"], rows: [
            ["Sosyal medya", "Should schools limit phone use during class hours?"],
            ["Uyku", "To what extent should the school day start later for teenagers?"],
            ["Çevre", "Is a plastic bag fee an effective way to reduce waste?"]
          ], not: "Bunlar kalıp örnekleridir; kendi konunu seç ve öğretmeninle onaylat." },
        { tip: "ikili", sol: { ikon: "⚖️", baslik: "Tartışılabilir (*arguable*)", maddeler: ["İki tarafın da makul savunusu var", "Kanıtla desteklenebilir"] },
          sag: { ikon: "📌", baslik: "Tartışılamaz", maddeler: ["Tek cevaplı bilgi ya da zevk meselesi", "Ya da çok geniş bir konu başlığı"] },
          oyun: [
            { metin: "Türkiye'nin başkenti neresidir?", cevap: "sag", neden: "Tek doğru cevabı olan bilgi sorusu." },
            { metin: "Okulda ilk ders 09.00'da başlamalı mı?", cevap: "sol", neden: "İki taraf kanıt sunabilir: tartışılabilir." },
            { metin: "Pizza hamburgerden daha lezzetlidir.", cevap: "sag", neden: "Kanıtla değil zevkle ilgili." },
            { metin: "Sosyal medya.", cevap: "sag", neden: "İddia değil, geniş bir konu başlığı." },
            { metin: "Okullar ders saatlerinde telefon kullanımını sınırlamalı mı?", cevap: "sol", neden: "Karar gerektirir, veriyle tartışılır." }
          ] },
        { tip: "liste", baslik: "Sınavda ve taslakta böyle yaz", maddeler: [
            { ikon: "❓", baslik: "*Should schools … ?*", metin: "Politika sorusu: ne yapılmalı?" },
            { ikon: "📏", baslik: "*To what extent … ?*", metin: "Derece sorusu: ne ölçüde doğru?" },
            { ikon: "🔍", baslik: "*Is … an effective way to … ?*", metin: "Etki sorusu: işe yarıyor mu?" }
          ] }
      ]
    },
    {
      baslik: "Kaynak türleri",
      kisa: "Birincil kaynak ham veriyi, ikincil kaynak yorumu verir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧾", terim: "Primary source", tr: "birincil kaynak", tanim: "Olayı ya da veriyi ilk elden veren kaynak: röportaj, anket, resmî istatistik, orijinal araştırma.", ornek: "Kendi yaptığın 50 kişilik anket." },
            { ikon: "📖", terim: "Secondary source", tr: "ikincil kaynak", tanim: "Birincil kaynakları yorumlayan ya da özetleyen kaynak: makale, kitap, haber analizi.", ornek: "Bir dergideki araştırma yorumu." },
            { ikon: "🎓", terim: "Scholarly source", tr: "akademik kaynak", tanim: "Uzmanlarca yazılan ve çoğunlukla hakemli (*peer-reviewed*) dergide çıkan, kaynakçalı çalışma.", ornek: "Üniversite dergisinde yayımlanan makale." },
            { ikon: "📰", terim: "Popular source", tr: "popüler kaynak", tanim: "Geniş kitleye yazılan gazete, dergi ve blog metni; faydalı ama daha az denetlenmiştir.", ornek: "Bir haber sitesindeki köşe yazısı." }
          ] },
        { tip: "liste", baslik: "Kaynağı metne böyle tanıt", maddeler: [
            { ikon: "💬", baslik: "*According to a 2024 study published in …*", metin: "Kaynağın türünü ve yılını söyler." },
            { ikon: "💬", baslik: "*Researchers at … found that …*", metin: "Kurumu ve bulguyu verir." }
          ] }
      ]
    },
    {
      baslik: "*CRAAP* testi",
      kisa: "Currency, Relevance, Authority, Accuracy, Purpose: beş soruyla sına.",
      bloklar: [
        { tip: "harita", merkez: "*CRAAP* testi", dallar: [
            { baslik: "*Currency*", alt: "Ne zaman yayımlandı? Konu için yeterince güncel mi?" },
            { baslik: "*Relevance*", alt: "Soruma doğrudan hizmet ediyor mu, yoksa konuya yakın mı?" },
            { baslik: "*Authority*", alt: "Yazar kim, uzmanlığı ve kurumu ne?" },
            { baslik: "*Accuracy*", alt: "Kanıt var mı, başka kaynaklarla uyuşuyor mu?" },
            { baslik: "*Purpose*", alt: "Bilgilendirmek mi, ikna etmek mi, satmak mı?" }
          ] },
        { tip: "grafik", baslik: "İki kaynağı puanla (0–5)", xlabel: "Ölçüt", ylabel: "Puan", xmax: 6, ymax: 6,
          xticks: [{ v: 1, label: "C" }, { v: 2, label: "R" }, { v: 3, label: "A" }, { v: 4, label: "A" }, { v: 5, label: "P" }],
          yticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "a1", tip: "alan", renk: 2, noktalar: [[0.65, 0], [0.95, 0], [0.95, 0], [0.65, 0]] },
            { id: "a2", tip: "alan", renk: 2, noktalar: [[1.65, 0], [1.95, 0], [1.95, 0], [1.65, 0]] },
            { id: "a3", tip: "alan", renk: 2, noktalar: [[2.65, 0], [2.95, 0], [2.95, 0], [2.65, 0]] },
            { id: "a4", tip: "alan", renk: 2, noktalar: [[3.65, 0], [3.95, 0], [3.95, 0], [3.65, 0]] },
            { id: "a5", tip: "alan", renk: 2, noktalar: [[4.65, 0], [4.95, 0], [4.95, 0], [4.65, 0]] },
            { id: "b1", tip: "alan", renk: 1, noktalar: [[1.05, 0], [1.35, 0], [1.35, 0], [1.05, 0]], gizli: true },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[2.05, 0], [2.35, 0], [2.35, 0], [2.05, 0]], gizli: true },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[3.05, 0], [3.35, 0], [3.35, 0], [3.05, 0]], gizli: true },
            { id: "b4", tip: "alan", renk: 1, noktalar: [[4.05, 0], [4.35, 0], [4.35, 0], [4.05, 0]], gizli: true },
            { id: "b5", tip: "alan", renk: 1, noktalar: [[5.05, 0], [5.35, 0], [5.35, 0], [5.05, 0]], gizli: true },
            { id: "ta", tip: "yazi", x: 3, y: 5.7, metin: "Sol sütun: Kaynak A (tarihsiz, yazarsız blog)", gizli: true },
            { id: "tb", tip: "yazi", x: 3, y: 5.7, metin: "Sağ sütun: Kaynak B (hakemli dergi makalesi)", gizli: true },
            { id: "tc", tip: "yazi", x: 3, y: 5.7, metin: "Fark en çok Authority ve Accuracy ölçütlerinde", gizli: true }
          ],
          durumlar: [
            { metin: "Her ölçüte 0–5 puan verilir. İki kaynağı karşılaştıralım." },
            { metin: "Kaynak A: konuya uygun ama yazarı yok, kanıtı yok, amacı belirsiz.", set: {
                a1: { noktalar: [[0.65, 0], [0.95, 0], [0.95, 1], [0.65, 1]] }, a2: { noktalar: [[1.65, 0], [1.95, 0], [1.95, 3], [1.65, 3]] },
                a3: { noktalar: [[2.65, 0], [2.95, 0], [2.95, 1], [2.65, 1]] }, a4: { noktalar: [[3.65, 0], [3.95, 0], [3.95, 1], [3.65, 1]] },
                a5: { noktalar: [[4.65, 0], [4.95, 0], [4.95, 2], [4.65, 2]] } }, goster: ["ta"] },
            { metin: "Kaynak B: güncel, uzman yazarlı, kanıtlı, amacı bilgilendirmek.", gizle: ["ta"], goster: ["b1", "b2", "b3", "b4", "b5", "tb"], set: {
                b1: { noktalar: [[1.05, 0], [1.35, 0], [1.35, 4], [1.05, 4]] }, b2: { noktalar: [[2.05, 0], [2.35, 0], [2.35, 5], [2.05, 5]] },
                b3: { noktalar: [[3.05, 0], [3.35, 0], [3.35, 5], [3.05, 5]] }, b4: { noktalar: [[4.05, 0], [4.35, 0], [4.35, 4], [4.05, 4]] },
                b5: { noktalar: [[5.05, 0], [5.35, 0], [5.35, 4], [5.05, 4]] } } },
            { metin: "A kaynağı yalnızca \"konuya yakın\" olduğu için seçilmez; B'yi kullan.", gizle: ["tb"], goster: ["tc"] }
          ] },
        { tip: "tuzak", metin: "Alan adı güvenilirliği garanti etmez.", yanlis: "*.org* ya da *.edu* ise kaynak güvenilirdir.", dogru: "Her sayfayı *CRAAP* ile sına: yazar, kanıt ve amaç alan adından daha önemlidir." }
      ]
    },
    {
      baslik: "Yan okuma ve kırmızı bayraklar",
      kisa: "Sayfadan çık; kaynağı başka kaynaklara bakarak sına.",
      bloklar: [
        { tip: "adimlar", baslik: "*Lateral reading* (yan okuma)", adimlar: [
            { baslik: "Dur", metin: "Paylaşmadan ya da kullanmadan önce kaynağın kim olduğunu sor." },
            { baslik: "Kaynağı araştır", metin: "Yeni sekmede yazarı ve siteyi başka sayfalardan kontrol et." },
            { baslik: "Daha iyi haber bul", metin: "Aynı iddiayı güvenilir başka kaynaklar da söylüyor mu?" },
            { baslik: "İddiayı kökenine kadar izle", metin: "Alıntılanan veri ya da araştırma gerçekten var mı? Aslını bul." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Güvenilir işaret", maddeler: ["Yazar, uzmanlık ve kurum açık", "Veri kaynağa bağlantıyla verilmiş"] },
          sag: { ikon: "🚩", baslik: "Kırmızı bayrak", maddeler: ["Yazar ve tarih yok", "Abartılı başlık, kanıtsız iddia, satış amacı"] },
          oyun: [
            { metin: "Yazarın adı, uzmanlığı ve kurumu sayfada açıkça yazıyor.", cevap: "sol", neden: "*Authority* açık." },
            { metin: "BÜYÜK HARFLİ, ünlemli başlık; hiçbir kaynak gösterilmemiş.", cevap: "sag", neden: "Duyguya oynuyor, kanıt yok." },
            { metin: "Rakamlar resmî kurumun veri sayfasına bağlantıyla verilmiş.", cevap: "sol", neden: "Aslına ulaşılabiliyor: *Accuracy*." },
            { metin: "Sayfa bir vitamin firmasına ait ve ürünü övüyor.", cevap: "sag", neden: "Çıkar çatışması: *Purpose* satmak." },
            { metin: "Makale hakemli (*peer-reviewed*) bir dergide yayımlanmış.", cevap: "sol", neden: "Uzmanlar tarafından denetlenmiş." }
          ] }
      ]
    },
    {
      baslik: "Notlama ve renk kodlama",
      kisa: "Her kaynağa bir renk ver; bilginin kaynağını asla kaybetme.",
      bloklar: [
        { tip: "tablo", baslik: "Örnek renk kodu tablosu", head: ["Renk", "Kaynak (kısa)", "Türü", "Ne için kullanılacak?"], rows: [
            ["Mavi", "Demir (dergi makalesi)", "*Scholarly*, ikincil", "Gerekçe 1: istatistik"],
            ["Yeşil", "Kaya (hakemli makale)", "*Scholarly*, ikincil", "Gerekçe 2: uzman görüşü"],
            ["Turuncu", "Röportaj (uzman)", "Birincil", "Karşı argümanın çürütülmesi"],
            ["Mor", "Anket (kendi verin)", "Birincil", "Gerekçe 3: yerel veri"]
          ], not: "Örnek kaynaklar uydurmadır. Teslim biçimini öğretmenin yönergesine göre düzenle." },
        { tip: "tuzak", metin: "Notta kaynağın rengi yoksa, taslakta kimin fikri olduğunu karıştırırsın.", yanlis: "Notları tek listeye kopyalarım, kaynağı sonra düşünürüm.", dogru: "Her notun yanına kaynağın rengini ve sayfa numarasını yaz; ==alıntı== ile ==kendi cümleni== ayır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Proje: 1500–1700 kelime, en az 4 kaynak, renk kodlu teslim, *I*/*you* yok, onaylı tez.",
            "Süreç: konu → daralt → soru → ön okuma → tez onayı → kaynak → not → *outline*.",
            "İyi soru tartışılabilirdir (*arguable*): iki tarafın makul savunusu vardır.",
            "*Primary source* ham veriyi, *secondary source* yorumu verir; *scholarly* kaynak hakemlidir.",
            "*CRAAP*: *Currency*, *Relevance*, *Authority*, *Accuracy*, *Purpose*.",
            "*.org* ya da *.edu* tek başına güvenilirlik kanıtı sayılmaz.",
            "*Lateral reading*: kaynağı sayfanın dışından sına.",
            "Her notun yanına kaynağın rengini ve sayfa numarasını yaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir öğrenci okul servislerinin süresiyle ilgili 60 kişilik bir anket yapıyor. Bu veri hangi türdendir?",
      opts: ["*Secondary source*", "*Primary source*", "*Popular source*", "*Common knowledge*"], a: 1,
      why: "Anketi kendin yaptığın için veriyi ilk elden topluyorsun: *primary source*. *Secondary source* çok çekicidir ama başkasının yorumunu ifade eder; burada ham veri sende." },
    { q: "Bir sayfa 2011'de yazılmış ve konu, geçen yıl hızla değişen bir teknoloji. Hangi *CRAAP* ölçütü en çok sorun çıkarır?",
      opts: ["*Purpose*", "*Authority*", "*Accuracy*", "*Currency*"], a: 3,
      why: "Bilgi hızla değiştiği için yayın tarihi eski: *Currency*. *Accuracy* çekici bir yanlış şıktır ama tarih yalnızca güncelliği gösterir; doğruluk için kanıt ve başka kaynaklarla karşılaştırma gerekir." },
    { q: "Aşağıdaki tabloya göre essay'de hangi kaynağı ana kanıt olarak kullanmak en doğrudur?",
      fig: { type: "table", head: ["Kaynak", "Yazar uzmanı mı?", "Kanıt/veri var mı?", "Amaç"], rows: [["A", "Belirtilmemiş", "Yok", "Ürün satmak"], ["B", "Evet, üniversite", "Evet, bağlantılı", "Bilgilendirmek"], ["C", "Evet, ama kurumu bilinmiyor", "Kısmen", "İkna etmek"], ["D", "Belirtilmemiş", "Evet", "Bilgilendirmek"]] },
      opts: ["B", "A", "C", "D"], a: 0,
      why: "B yazar uzmanlığı, kanıt ve amaç açısından en güçlüdür. D kanıtı vardır ama yazarı belli değildir (*Authority* eksik); C'de kurum ve kanıt eksiktir; A'nın amacı satmaktır." },
    { q: "Hangisi güçlü bir araştırma sorusudur?",
      opts: ["Sosyal medya hakkında bilgi vermek", "Türkiye'de kaç lise vardır?", "Should schools limit phone use during class hours?", "Müziği çok seviyorum."], a: 2,
      why: "Üçüncü şık tartışılabilir, dar ve kanıtla cevaplanabilir. \"Kaç lise\" bilgi sorusudur; \"sosyal medya\" ise konu başlığıdır, soru değildir." },
    { q: "Bir öğrenci bir haber sitesindeki istatistiğe rastlıyor. Siteyi bilmiyor. En iyi ilk adım hangisidir?",
      opts: ["İstatistiği hemen essay'e ekler.", "Yeni sekmede siteyi ve yazarı başka kaynaklardan araştırır (*lateral reading*).", "Sayfanın alan adı *.com* ise güvenir.", "İstatistiği başka bir sitede bulmadan yeniden yazar."], a: 1,
      why: "*Lateral reading* kaynağı sayfanın dışından sınar. Hemen eklemek riskli, alan adına güvenmek yanlıştır; kaynağını bilmediğin veriyi yeniden yazmak da sorunu çözmez." }
  ]
};
