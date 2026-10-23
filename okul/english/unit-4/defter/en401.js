/* Kitora not defteri · en401 · 4.1 Araştırma Süreci ve Güvenilir Kaynaklar
   Okul dersi (10. sınıf English · Unit 4). Blok türleri: /ap/_kit/defter.js başı.
   Kaynak: Dr Byrd'ün Research Process Project ve Argument Paper belgeleri. "Ek bilgi" etiketli kısımlar öğretmen belgesinde yoktur. */
window.DEFTER = {
  slug: "en401",
  amac: "Unit 4'ün araştırma tarafını öğreneceksin: birinci dönemdeki *Research Process Project* ile ikinci dönemdeki *Argument Paper* araştırmasının farkını, kaynak kurallarını, teslim ve renk kodlama düzenini, güvenilir kaynağı nasıl seçeceğini.",
  bolumler: [
    {
      baslik: "İki proje, iki ayrı kural seti",
      kisa: "Dönem 1 araştırma projesi ile Dönem 2 argüman essay'i ayrı kurallara sahip.",
      bloklar: [
        { tip: "tablo", baslik: "İki projeyi karıştırma", head: ["", "Research Process Project", "Argument Paper"], rows: [
            ["Dönem ve öğretmen", "Dönem 1 · Dr Byrd", "Dönem 2 · Dr Byrd (teslim Mrs Akyürek'e)"],
            ["Konu", "*Cultural Perspectives* ünitesi: Türkiye dışındaki bir kültürün çok spesifik bir yönü ya da kültür kaybı/sömürgecilik", "Öğretmenin listesindeki 30 UAA ve Türkiye konusundan biri; aynı şubede iki öğrenciye aynı konu verilmez"],
            ["Ürün", "*Modified full sentence outline* + in-text atıflar + *Works Cited*", "1500–1700 kelimelik argument essay"],
            ["Kaynak", "4 kaynak yetmez, 6 bile yetmeyebilir; Wikipedia ve Türkçe kaynak yok", "En az 4 kaynak (yalnız 4 genelde düşük not); röportaj ve anket; Türkçe kaynak için önce onay"],
            ["Puan", "25 kaynak kopyaları ve renk kodu + 75 outline = 100 ÷ 2", "25 kaynak kopyaları ve renk kodu + 75 essay"],
            ["Not payı", "Exam 2, Dönem 1: *Reading/Writing* (%50)", "Exam 2, Dönem 2: *Reading/Writing* (%50)"],
            ["Teslim", "Çarşamba 3 Aralık, 14:20", "Cuma 17 Nisan, 14:20"]
          ], not: "Sınavda böyle yaz: *In the first semester the outline is submitted; in the second semester the final paper is submitted.*" },
        { tip: "not", metin: "Ayrıntılar sonraki defterlerde: MLA için en402, essay yapısı ve rubrik için en403, röportaj ve anket için en405, konuşma için en406, intihal ve yapay zekâ için en407. Dönem 1'de dil yalnız 10/100 puandır; işin tamamı sana ait olmalı (işi özel derse ya da yapay zekâya yaptırmak yasak; yapay zekâ yalnız beyin fırtınası ve küçük dilbilgisi düzeltmesi için, bildirilerek kullanılabilir, ayrıntı en407)." }
      ]
    },
    {
      baslik: "Dönem 1 konusu: çok spesifik bir uygulama",
      kisa: "Konu Türkiye dışında, dar ve kültürün kendi içindeki önemine odaklı olmalı.",
      bloklar: [
        { tip: "liste", baslik: "Konu kuralları", maddeler: [
            { ikon: "🌍", baslik: "Türkiye dışı", metin: "Geleneksel bir kültürün çok spesifik bir yönü: bir uygulama ya da kültür kaybı/sömürgecilik konusu." },
            { ikon: "📋", baslik: "Öğretmenin listesi", metin: "30 maddelik listeden seçilir: Toraja cenaze törenleri, potlatch, Mosuo, Maori dövmesi ve haka, samuray onur kodu, Cholitas, ayak bağlama, Wodaabe, atalara tapınma, bride price, dowry vb." },
            { ikon: "🔎", baslik: "Odak", metin: "Uygulamanın tarihsel ve geleneksel kültürdeki önemi araştırılır." },
            { ikon: "✍️", baslik: "Sınavda böyle yaz:", metin: "*This project examines the traditional role of [practice] within [culture].*" }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Uygun konu", maddeler: ["Türkiye dışında, çok spesifik", "Odak kültürün kendi içindeki önemi"] },
          sag: { ikon: "❌", baslik: "Uygun değil", maddeler: ["Fazla geniş ya da Türkiye'de", "Odak kültürün dışındaki bir konuda"] },
          oyun: [
            { metin: "Dowry in Yemen", cevap: "sol", neden: "Tek ülkeye ve tek uygulamaya daraltılmış." },
            { metin: "Dowry in Islam", cevap: "sag", neden: "Çok geniş; öğretmen bunu açıkça yasaklıyor." },
            { metin: "Haka'nın Maori kültüründeki yeri", cevap: "sol", neden: "Önem, kültürün kendi içinde araştırılıyor." },
            { metin: "Haka'nın All Blacks maçlarındaki rolü", cevap: "sag", neden: "Odak kültürün değil spor takımının üstünde." },
            { metin: "Türkiye'de kına gecesi", cevap: "sag", neden: "Konu Türkiye dışında olmalı." }
          ] }
      ]
    },
    {
      baslik: "Kaynak kuralları: neyi kullanabilirsin?",
      kisa: "Çeşitli, basılabilir, akademik kaynak; Wikipedia ve Türkçe kaynak olmaz.",
      bloklar: [
        { tip: "tablo", baslik: "Kabul edilen ve edilmeyen", head: ["Kabul edilir", "Kabul edilmez"], rows: [
            ["Kitap, ansiklopedi, dergi", "Wikipedia (sayfanın kaynaklarına bakabilirsin, ona atıf yapamazsın)"],
            ["EBSCO, SIRS, JSTOR gibi veritabanları", "Türkçe kaynak"],
            ["Transkripti basılabilen belgesel", "Minimum sayıda kaynakla yetinmek: 4 yetmez, 6 bile yetmeyebilir"],
            [".edu ve .org sitelerindeki sayfalar", "Check-in için Wikipedia ya da World Book gibi temel kaynaklar"]
          ], not: "Sınavda böyle yaz: *The sources include a printed book, a database article, and an .edu website.*" },
        { tip: "liste", baslik: "Kaynaklarını yönet", maddeler: [
            { ikon: "🖨️", baslik: "Basılı tut", metin: "Kaynakları basılı ya da fotokopi olarak sakla; MLA bilgisi Works Cited ile aynı olsun." },
            { ikon: "🗣️", baslik: "Tartışmaya hazır ol", metin: "Düşünce ve analizini öğretmenle konuşabilecek durumda ol." },
            { ikon: "⚠️", baslik: "Minimumla yetinme", metin: "Gerekenin en azını bulanlar düşük not alır." }
          ] },
        { tip: "tuzak", metin: "Wikipedia yasak, ama sayfasının dayandığı kaynaklar yasak değil.", yanlis: "Wikipedia'ya bakmam bile yasak.", dogru: "Wikipedia'ya atıf yapma; sayfa sonundaki kaynaklara bak, ==onları bulup== oku ve kullan." }
      ]
    },
    {
      baslik: "Check-in ve modified full sentence outline",
      kisa: "Önce check-in, sonra tam cümleli outline; tez her bölümü desteklemeli.",
      bloklar: [
        { tip: "tablo", baslik: "First Research Check-in (10 puan, reinforcement)", head: ["Madde", "Beklenti"], rows: [
            ["Kaynak sayısı", "En az İKİ derinlikli akademik ya da dergi kaynağı"],
            ["Biçim", "Kaynaklar BASILI olmalı ve MLA bilgisi yazılı"],
            ["Altı çizili yerler", "Kendi sözlerinle açıklayacağın bölümlerin altı çizili"],
            ["Kabul edilmeyen", "Wikipedia, World Book gibi temel kaynaklar"]
          ] },
        { tip: "tablo", baslik: "Outline iskeleti", head: ["Seviye", "Ne yazılır?"], rows: [
            ["I. Introduction", "Bağlam ve THESIS; tam cümle"],
            ["II. Body: A, B, C", "Her bölümde 1, 2, 3 destekleyici bilgi; altında a, b, c ayrıntılar"],
            ["III. Conclusion", "Tezi kapatan tam cümleler"]
          ], vurgu: 0, not: "Bölüm başlıkları hariç her satır tam cümle. Tez her bölümü desteklemeli. Final outline'da TÜM in-text atıflar ve eşleşen Works Cited bulunur. Sınavda böyle yaz: *[Practice] in [culture] serves three overlapping roles: [A], [B], and [C].*" },
        { tip: "tuzak", metin: "Bu outline madde başlığı listesi değil, tam cümlelerden oluşur.", yanlis: "A. Bride price: history, money, family", dogru: "Tam cümle yaz: *The bride price in [culture] originally secured an agreement between two families.* Bölüm başlıkları hariç her satır cümle olmalı." }
      ]
    },
    {
      baslik: "Dönem 1 teslim: Turnitin, klasör, renk kodu",
      kisa: "Turnitin'e renksiz DOC, klasöre renk kodlu basılı kopya; geç teslim günlük %10.",
      bloklar: [
        { tip: "adimlar", baslik: "Çarşamba 3 Aralık, 14:20'ye kadar", adimlar: [
            { baslik: "Turnitin", metin: "Outline + in-text + Works Cited TEK belge, DOC biçimi (PDF olmaz); üzerinde renk kodu yok." },
            { baslik: "Basılı outline", metin: "Turnitin'e yüklediğinin aynısı." },
            { baslik: "Özgün kaynaklar", metin: "Hepsinin basılı kopyası, MLA bilgisi Works Cited ile aynı, plastik poşetlerde." },
            { baslik: "Renk kodu (yalnız basılıda)", metin: "Her Works Cited kaynağına ayrı renk; outline'daki yeri kaynakta aynı renkle işaretli." },
            { baslik: "Klasör", metin: "İnce ciltli klasör, Byrd'ün ofisi önündeki sınıf kutusuna (BA205), 08:00'den itibaren." }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 25, etiket: "puan: kaynak kopyaları ve renk kodu" },
            { deger: 75, etiket: "puan: outline (MLA ve renk kodlu kaynaklar)" },
            { deger: 100, sonek: " ÷ 2", etiket: "Exam 2 R/W puanı" },
            { deger: 10, sonek: "%", etiket: "geç teslimde günlük kesinti (hafta sonu dahil)" }
          ] },
        { tip: "tuzak", metin: "Turnitin'e yüklenmeyen teslimde yalnız basılı kopya sayılmaz.", yanlis: "Klasörü zamanında bıraktım, Turnitin'e sonra yüklerim.", dogru: "İkisi de zamanında olmalı. Sınavda böyle yaz: *The outline must be uploaded to Turnitin as a single DOC file.*" }
      ]
    },
    {
      baslik: "Dönem 2: Argument Paper araştırması",
      kisa: "En az 4 sağlam kaynak, renk kodlu klasör; 25 puanlık bant.",
      bloklar: [
        { tip: "tablo", baslik: "Özgün kaynak kopyaları ve renk kodu (25 puan)", head: ["Ölçüt", "Kural"], rows: [
            ["Bant", "0–4 / 5 / 10 / 15 / 20 / 25 puan"],
            ["Alt şart", "En az 4 kaynak; sağlam ve gerçek (*bona fide*); renk kodu net"],
            ["En üst bant", "6 ya da daha çok kaynak"],
            ["Sıfır", "Klasör teslim edilmemişse ya da kaynak sahteyse bu 25 puanın tamamı sıfır"],
            ["Konu gelişimi", "5 ya da daha çok mükemmel kaynak, o bölümün en üst bandı"]
          ], not: "Sınavda böyle yaz: *At least four reliable sources are required, and each must support the argument.*" },
        { tip: "adimlar", baslik: "Klasör ve renk kodlama (Cuma 17 Nisan, 14:20)", adimlar: [
            { baslik: "Turnitin", metin: "Final paper TEK belge, DOC biçimi (PDF olmaz), renk kodu yok." },
            { baslik: "Renk kodlaması", metin: "Works Cited'dan başla; her kaynağa farklı renk; kullanıldığı yer kağıtta aynı renkle işaretli." },
            { baslik: "Klasör içeriği", metin: "Özgün kaynaklar, röportaj notları, anket çıktıları BASILI; final paper'ın Turnitin'dekiyle aynı basılı kopyası (zımbalı, tek yüz)." },
            { baslik: "Teslim yeri", metin: "Mrs Akyürek'in ofisi (BA205) önündeki kutu, o gün 08:00'dan itibaren. Yazıcı bozuldu mazeret değil. Geç teslim: her kısım için günlük %10." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Sayılır", maddeler: ["Argümanı destekleyen ve analiz edilen kaynak", "UAA öğretmen, öğrenci ya da yöneticiyle röportaj ve anket"] },
          sag: { ikon: "⚠️", baslik: "Sorunlu", maddeler: ["Yalnız arka plan veren kaynak", "Onaysız Türkçe kaynak, yalnız arkadaşlarla röportaj"] },
          oyun: [
            { metin: "Okul yönetimiyle yapılan ve argümanı destekleyen röportaj.", cevap: "sol", neden: "UAA röportajı ve argümana hizmet ediyor." },
            { metin: "Yalnız arkadaşlarla yapılan röportaj.", cevap: "sag", neden: "Öğretmen bunu araştırma saymıyor." },
            { metin: "Türkçe makale, öğretmen onayı alınmadan kullanılmış.", cevap: "sag", neden: "Önce onay gerekir; sonra kaynağı sen çevirirsin." },
            { metin: "Onaylı Türkçe kaynak, atfıyla birlikte kendin İngilizceye çevirmişsin.", cevap: "sol", neden: "Onay + kendi çevirin: kurala uygun." },
            { metin: "Konunun tarihçesini anlatan, argümanı desteklemeyen bir sayfa.", cevap: "sag", neden: "Kaynaklar yalnız arka plan vermemeli." }
          ] }
      ]
    },
    {
      baslik: "Ek bilgi: kaynağı sınama, *CRAAP* ve yan okuma",
      kisa: "Ek bilgi: kaynağı beş soruyla ve sayfanın dışından sına.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧾", terim: "Primary source", tr: "birincil kaynak", tanim: "Olayı ya da veriyi ilk elden veren kaynak: röportaj, anket, resmî istatistik.", ornek: "Kendi yaptığın 50+ kişilik anket." },
            { ikon: "📖", terim: "Secondary source", tr: "ikincil kaynak", tanim: "Birincil kaynakları yorumlayan ya da özetleyen kaynak: makale, kitap.", ornek: "Bir dergideki araştırma yorumu." },
            { ikon: "🎓", terim: "Scholarly source", tr: "akademik kaynak", tanim: "Uzmanlarca yazılan, çoğunlukla hakemli (*peer-reviewed*) ve kaynakçalı çalışma.", ornek: "Üniversite dergisindeki makale." },
            { ikon: "🔍", terim: "Lateral reading", tr: "yan okuma", tanim: "Sayfadan çıkıp yeni sekmede yazarı ve siteyi başka kaynaklardan kontrol etmek.", ornek: "Yazar adını aratıp kim olduğuna bakmak." }
          ] },
        { tip: "harita", merkez: "*CRAAP* testi", dallar: [
            { baslik: "*Currency*", alt: "Ne zaman yayımlandı? Konu için yeterince güncel mi?" },
            { baslik: "*Relevance*", alt: "Soruma doğrudan hizmet ediyor mu?" },
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
            { id: "tc", tip: "yazi", x: 3, y: 5.7, metin: "Fark en çok Authority'de; ardından Currency ve Accuracy", gizli: true }
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
            { metin: "A kaynağı yalnızca “konuya yakın” olduğu için seçilmez; B'yi kullan.", gizle: ["tb"], goster: ["tc"] }
          ] },
        { tip: "tuzak", metin: ".edu ve .org öğretmenin saydığı kaynak türleri arasında, ama her sayfa yine de sınanmalı.", yanlis: "*.org* ya da *.edu* uzantısı varsa kaynak otomatik olarak güvenilirdir.", dogru: "Alan adı başlangıçtır: yazar, kanıt ve amacı da kontrol et. Sınavda böyle yaz: *The author is a university researcher, and the data are linked to the original study.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Dönem 1 *Research Process Project*: Türkiye dışı, çok spesifik kültürel uygulama; Wikipedia ve Türkçe kaynak yok; 4 kaynak yetmez.",
            "Dönem 1 puanı: 25 kaynak kopyaları ve renk kodu + 75 outline = 100 ÷ 2; teslim 3 Aralık 14:20.",
            "Check-in: en az iki derinlikli, basılı, akademik ya da dergi kaynağı; MLA bilgisi ve altı çizili kısımlar.",
            "*Modified full sentence outline*: tam cümleler, tez her bölümü destekler, tüm in-text atıflar ve Works Cited var.",
            "Turnitin'e TEK DOC belge ve renk kodu yok; renk kodu yalnız basılı klasörde; yalnız basılı kopya sayılmaz.",
            "Dönem 2 *Argument Paper*: en az 4 sağlam kaynak, 25 puanlık klasör bandı; 6+ kaynak en üst; teslim 17 Nisan 14:20.",
            "Geç teslim günlük %10 (hafta sonu dahil); yazıcı bozuldu mazeret değildir.",
            "Ek bilgi: *CRAAP* ve yan okuma kaynağı sınamana yardım eder; .edu ve .org tek başına yeterli değildir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which of the following is an acceptable topic for the first-semester Research Process Project?",
      opts: ["Dowry in Islam", "Traditional wedding customs in Turkey", "The role of haka within Maori culture", "Famous cultures of the world"], a: 2,
      why: "Konu Türkiye dışında ve çok spesifik olmalı, odak kültürün kendi içindeki önemi olmalı. “Dowry in Islam” çekici ama fazla geniştir (öğretmen “Dowry in Yemen” gibi dar konu ister); Türkiye'deki gelenekler ise konu dışıdır." },
    { q: "A student brings two printed sources to the first research check-in: an article from a JSTOR journal and a World Book entry. What is the problem?",
      opts: ["Nothing; two sources are enough.", "Only the journal article qualifies; a second in-depth academic or magazine source is needed.", "JSTOR articles may not be printed.", "The student must replace both with Wikipedia articles."], a: 1,
      why: "Check-in için en az İKİ derinlikli akademik ya da dergi kaynağı gerekir; World Book gibi temel kaynaklar sayılmaz. “İki kaynak yeter” çekici bir tuzaktır çünkü sayı doğru ama türü yanlış." },
    { q: "Which statement about the 3 December submission is correct?",
      opts: ["Upload a PDF with the color coding to Turnitin.", "Upload the outline and Works Cited as two separate files.", "A printed folder delivered on time is enough without Turnitin.", "Upload one DOC file with no color coding; add the colors only to the printed copy."], a: 3,
      why: "Turnitin'e outline, in-text ve Works Cited TEK DOC belge olarak yüklenir ve renk kodu içermez; renk yalnız basılı klasördedir. Yalnız basılı kopya sayılmaz (üçüncü şık çekici ama yanlış), PDF kabul edilmez." },
    { q: "A student earns the scores below on the Research Process Project. What is the final score out of 50?",
      fig: { type: "table", head: ["Bölüm", "Puan"], rows: [["Original source copies and color coding", "22 / 25"], ["Research outline", "60 / 75"]] },
      opts: ["82", "41", "36", "30"], a: 1,
      why: "22 + 60 = 82 puan, yüzün üzerinden. Proje 100 ÷ 2 olarak hesaplanır: 82 ÷ 2 = 41. 82 çekici bir yanlıştır çünkü ham toplamdır; ikiye bölmek gerekir." },
    { q: "A final paper is handed in two days late, and one of those days is a Saturday. What does the late rule say?",
      opts: ["A deduction of 10% for every day, including weekends.", "A deduction of 10% for school days only.", "A single 10% deduction regardless of how late.", "No deduction if the printer was broken."], a: 0,
      why: "Geç teslimde her gün için %10 kesinti uygulanır ve hafta sonu da sayılır. “Yazıcı bozuldu” mazeret değildir; tek seferlik kesinti de yanlıştır." }
  ]
};
