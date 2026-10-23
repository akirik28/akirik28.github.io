/* Kitora not defteri · en403 · 4.3 Tez ve Argüman Yapısı
   Okul dersi (10. sınıf English · Unit 4). Yapı ve cümle iskeletleri verir; hazır essay yazmaz.
   Kaynak: Argumentative Essay belgesi, Full Outline kontrol noktası ve essay rubriği (Dr Byrd). "Ek bilgi" etiketli kısımlar öğretmen belgesinde yoktur. */
window.DEFTER = {
  slug: "en403",
  amac: "Argüman essay'inin yapısını öğreneceksin: araştırmadan sonra onaylı çalışma tezi, 3'ten fazla body paragraf, konu cümleleri, geçişler, concession, çözüm ve sonuç. Full Outline kontrol noktasının 50 puanlık rubriğini ve final rubriğin sıfır tuzaklarını da göreceksin.",
  bolumler: [
    {
      baslik: "Essay'in kuralları ve ölçüleri",
      kisa: "1500–1700 kelime, en az 4 kaynak, 3'ten fazla body, I ve you yok.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 1500, sonek: "–1700", etiket: "kelime (kapak sayfası ve Works Cited hariç)" },
            { deger: 4, onek: "≥ ", etiket: "kaynak" },
            { deger: 3, onek: "> ", etiket: "body paragraf" }
          ] },
        { tip: "tablo", baslik: "Essay'in zorunlu kuralları", head: ["Konu", "Kural"], rows: [
            ["Biçim", "MLA araştırma yazısı: A4, çift aralık, 11 ya da 12 punto, sayfa numarası (kapak sayfası hariç), kapak sayfası"],
            ["Kaynak", "En az 4; kaynaklar argümanı DESTEKLEMELİ (yalnız arka plan vermemeli) ve analiz edilmeli; yalnız arkadaşlarla röportaj araştırma sayılmaz"],
            ["Türkçe kaynak", "Önce öğretmen onayı; kaynağı ve atfı sen İngilizceye çevirirsin; yapay zekâ ile çeviri yasak"],
            ["Zorunlu parçalar", "Bir concession (karşı görüşe pay) ve çözüm/öneri(ler)"],
            ["Dil", "Birinci ve ikinci şahıs yok: I ve you kullanılmaz"],
            ["Alıntı", "4 satırdan kısa: cümleye gömülü, tırnaklı. 4 satırdan uzun: girintili blok, tırnaksız"],
            ["Duruş", "Tarafsız (*objective*) ol, karşı görüşleri dikkate al; eleştirel ama yargılayıcı olma"]
          ], not: "Sınavda böyle yaz: *This essay argues that [claim] because [reasons].*" }
      ]
    },
    {
      baslik: "Çalışma tezi (working thesis) ve öğretmen onayı",
      kisa: "Önce araştır ve analiz et, sonra onaylı tezle yazmaya başla.",
      bloklar: [
        { tip: "adimlar", baslik: "Tezden yazıya", adimlar: [
            { baslik: "Araştır ve analiz et", metin: "Dış kaynaklar (başka ülkeler, okullar, uzmanlar) ve UAA öğrenci, öğretmen, yönetici röportajı ile anketi." },
            { baslik: "Çalışma tezini yaz", metin: "Bulduklarını özetlemek yetmez; ikna edici bir argüman kur." },
            { baslik: "Öğretmen onayı", metin: "Yazmaya başlamadan önce tez ÖĞRETMEN ONAYLI olmalı." },
            { baslik: "Yaz", metin: "Tezin odağı değişebilir ama konu değişmez." },
            { baslik: "Outline ve final", metin: "Full Outline 8 Nisan 16:30, final paper 17 Nisan 14:20." }
          ] },
        { tip: "ikili", sol: { ikon: "💪", baslik: "Güçlü tez", maddeler: ["Tek, net, tartışılabilir iddia", "Gerekçe içerir"] },
          sag: { ikon: "🫥", baslik: "Zayıf tez", maddeler: ["Konu duyurusu, olgu ya da çok geniş cümle", "Bulguları özetler, ikna etmez"] },
          oyun: [
            { metin: "This essay is about school phone rules.", cevap: "sag", neden: "Konuyu duyuruyor, iddia yok." },
            { metin: "Schools should delay the first class to 9:00 a.m. because later start times improve attendance and reduce sleep loss.", cevap: "sol", neden: "İddia + gerekçe; tartışılabilir." },
            { metin: "Many teenagers use phones.", cevap: "sag", neden: "Olgu; tartışılamaz." },
            { metin: "Social media is bad.", cevap: "sag", neden: "Çok geniş ve belirsiz." },
            { metin: "Although bus schedules would need to change, schools should adopt later start times because the benefits for sleep and attendance outweigh the logistical cost.", cevap: "sol", neden: "Karşı görüşü kabul edip iddiasını gerekçeyle savunuyor." }
          ] },
        { tip: "liste", baslik: "Ek bilgi: tez kalıpları (kendi konunla doldur)", maddeler: [
            { ikon: "1️⃣", baslik: "*[Claim] because [reason 1], [reason 2], and [reason 3].*", metin: "Gerekçeleri sayan tez." },
            { ikon: "2️⃣", baslik: "*Although [opposing view], [claim] because [reason].*", metin: "Karşı görüşü baştan kabul eden tez." },
            { ikon: "3️⃣", baslik: "*Schools should [do what] because …*", metin: "Politika iddiası; üçüncü şahıs, I yok." }
          ] },
        { tip: "tuzak", metin: "Tez konuyu duyurmaz, iddiayı söyler.", yanlis: "*In this essay, I will talk about school uniforms.*", dogru: "*Schools should … because …* gibi bir iddia yaz; konuyu duyurma ve I kullanma." }
      ]
    },
    {
      baslik: "Yapı: giriş, 3'ten fazla body, concession, çözüm, sonuç",
      kisa: "5 paragraflık düşünme yok; her parçanın görevi var.",
      bloklar: [
        { tip: "tablo", baslik: "Bölüm ne yapar?", head: ["Bölüm", "Görevi"], rows: [
            ["Giriş", "Bütünleşik introduction; net ve tartışılabilir tez"],
            ["Body (3'ten fazla)", "Her paragrafta konu cümlesi, geçiş sözcükleri, destekleyici açıklama, alıntı ya da ayrıntı; parafraz da atıf ister; alıntılar analiz edilir"],
            ["Concession", "Karşı görüşe pay verilir (zorunlu)"],
            ["Çözüm/öneri", "Sorun için çözüm ya da öneri sunulur (zorunlu)"],
            ["Sonuç", "Girişe yankı yapar, argümanın kanıtlandığını söyler, taze biter (yeni fikir ya da soru olabilir)"],
            ["MLA", "Metin içi atıflar ve Works Cited"]
          ], not: "Sınavda böyle yaz: *Admittedly, [opposing view]; however, [your response].*" },
        { tip: "grafik", baslik: "Ek bilgi: örnek kelime bütçesi (≈1600)", xlabel: "Kelime", ylabel: "", xmax: 1800, ymax: 5,
          xticks: [{ v: 0, label: "0" }, { v: 500, label: "500" }, { v: 1000, label: "1000" }, { v: 1500, label: "1500" }],
          ogeler: [
            { id: "min", tip: "cizgi", from: [1500, 0], to: [1500, 5], kesik: true, renk: 0, gizli: true },
            { id: "max", tip: "cizgi", from: [1700, 0], to: [1700, 5], kesik: true, renk: 0, gizli: true },
            { id: "tmin", tip: "yazi", x: 1490, y: 4.7, metin: "min 1500", hiza: "end", gizli: true },
            { id: "tmax", tip: "yazi", x: 1710, y: 4.7, metin: "max 1700", hiza: "start", gizli: true },
            { id: "g", tip: "alan", renk: 1, noktalar: [[0, 0], [150, 0], [150, 0], [0, 0]], gizli: true },
            { id: "b", tip: "alan", renk: 2, noktalar: [[150, 0], [1250, 0], [1250, 0], [150, 0]], gizli: true },
            { id: "k", tip: "alan", renk: 3, noktalar: [[1250, 0], [1380, 0], [1380, 0], [1250, 0]], gizli: true },
            { id: "c", tip: "alan", renk: 1, noktalar: [[1380, 0], [1480, 0], [1480, 0], [1380, 0]], gizli: true },
            { id: "s", tip: "alan", renk: 3, noktalar: [[1480, 0], [1600, 0], [1600, 0], [1480, 0]], gizli: true },
            { id: "yg", tip: "yazi", x: 75, y: 3.4, metin: "150", gizli: true },
            { id: "yb", tip: "yazi", x: 700, y: 1.5, metin: "4 body × 275 = 1100", gizli: true },
            { id: "yk", tip: "yazi", x: 1315, y: 3.4, metin: "130", gizli: true },
            { id: "yc", tip: "yazi", x: 1430, y: 3.9, metin: "100", gizli: true },
            { id: "ys", tip: "yazi", x: 1540, y: 3.4, metin: "120", gizli: true },
            { id: "ylab", tip: "yazi", x: 900, y: 4.5, metin: "Giriş · 4 body · concession · çözüm · sonuç = 1600", gizli: true }
          ],
          durumlar: [
            { metin: "Hedef 1500–1700 kelime. Çizgilerin arasında kal.", goster: ["min", "max", "tmin", "tmax"] },
            { metin: "Giriş ≈ 150 kelime: bağlam ve net tez.", goster: ["g", "yg"], set: { g: { noktalar: [[0, 0], [150, 0], [150, 3], [0, 3]] } } },
            { metin: "3'ten fazla body: burada dört paragraf, ≈ 275'er kelime.", goster: ["b", "yb"], set: { b: { noktalar: [[150, 0], [1250, 0], [1250, 3], [150, 3]] } } },
            { metin: "Concession ≈ 130 kelime: karşı görüşe pay.", goster: ["k", "yk"], set: { k: { noktalar: [[1250, 0], [1380, 0], [1380, 3], [1250, 3]] } } },
            { metin: "Çözüm/öneri ≈ 100 kelime.", goster: ["c", "yc"], set: { c: { noktalar: [[1380, 0], [1480, 0], [1480, 3], [1380, 3]] } } },
            { metin: "Sonuç ≈ 120 kelime. Toplam ≈ 1600: sınırların içinde.", goster: ["s", "ys", "ylab"], set: { s: { noktalar: [[1480, 0], [1600, 0], [1600, 3], [1480, 3]] } } }
          ] },
        { tip: "tuzak", metin: "Bu essay 5 paragraflık bir ödev değildir.", yanlis: "Giriş, 3 body, sonuç: 5 paragraf yeter.", dogru: "3'ten fazla body paragraf, bir concession ve çözüm gerekir; ==5 paragraflık düşünme yok==." }
      ]
    },
    {
      baslik: "Body paragrafı: konu cümlesi, kanıt, analiz",
      kisa: "Konu cümlesi, tanıtma, kanıt, analiz, tez bağı ve geçiş.",
      bloklar: [
        { tip: "adimlar", baslik: "Bir body paragrafı", adimlar: [
            { baslik: "Konu cümlesi", metin: "Tezle ilişkili tek fikir; konu cümleleri tezle mantıklı sırada dizilir: *The first reason is that …*" },
            { baslik: "Kaynağı tanıt", metin: "Kaynağı ve bağlamı ver: *A study from … found that …*" },
            { baslik: "Kanıt", metin: "Alıntı ya da parafraz + metin içi atıf: (Demir 45)." },
            { baslik: "Analiz", metin: "Kanıtın neden önemli olduğunu açıkla: *This evidence shows that …*" },
            { baslik: "Tez bağı ve geçiş", metin: "Gerekçeyi tezle bağla, sonra geçiş sözcüğüyle sonraki paragrafa geç." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Topic sentence", tr: "konu cümlesi", tanim: "Paragrafın tek fikrini söyler ve tezle ilişkilidir.", ornek: "The first reason is that later start times protect sleep." },
            { ikon: "📊", terim: "Evidence", tr: "kanıt", tanim: "Alıntı, parafraz ya da veri; her zaman metin içi atıfla verilir.", ornek: "A study found attendance rose (Kaya 14)." },
            { ikon: "🔗", terim: "Analysis", tr: "analiz", tanim: "Kanıtın tezi neden desteklediğini açıkladığın kendi cümlen. Ek bilgi: bu bağa *warrant* da denir.", ornek: "This gain suggests that extra sleep helps students arrive on time." },
            { ikon: "🚦", terim: "Transition", tr: "geçiş", tanim: "Paragrafları ve fikirleri mantıklı biçimde bağlayan sözcük ya da cümle.", ornek: "However, critics argue that …" }
          ] },
        { tip: "liste", baslik: "Ek bilgi: kanıt fiilleri ve geçişler", maddeler: [
            { ikon: "🔎", baslik: "*show, demonstrate, illustrate, indicate, reveal, underscore, highlight*", metin: "Kanıtın ne gösterdiğini söyleyen fiiller." },
            { ikon: "➕", baslik: "*Moreover, Furthermore, In addition*", metin: "Aynı yönde yeni nokta ekler." },
            { ikon: "↔️", baslik: "*However, Nevertheless, On the other hand*", metin: "Karşı görüşe geçişi gösterir." },
            { ikon: "🧮", baslik: "*As a result, Therefore, Consequently*", metin: "Sonuç çıkarır." }
          ] },
        { tip: "tuzak", metin: "Rapor gibi bilgi aktarmak ve analiz yazmamak puan kırar.", yanlis: "Paragraf alıntıyla biter.", dogru: "Alıntıdan sonra mutlaka kendi analizini yaz; kanıtı ==tezle ilişkilendir==." }
      ]
    },
    {
      baslik: "Concession, çözüm ve sonuç",
      kisa: "Karşı görüşe pay ver, çözüm öner, girişe yankı yapan taze bir sonla bitir.",
      bloklar: [
        { tip: "liste", baslik: "Sınavda böyle yaz", maddeler: [
            { ikon: "🤝", baslik: "*It is true that …; however, …*", metin: "Concession: karşı tarafın haklı yanını kabul et, sonra tezine dön." },
            { ikon: "🛠️", baslik: "*One practical solution is to …*", metin: "Çözüm/öneri: sorun için somut bir adım ver." },
            { ikon: "🔁", baslik: "*Returning to the question of …, the evidence confirms that …*", metin: "Sonuç: girişe yankı yap ve argümanın kanıtlandığını söyle." },
            { ikon: "💡", baslik: "*Future decisions should consider …*", metin: "Taze bitiş: yeni bir fikir ya da soru ile bitir." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Tam parça", maddeler: ["Karşı görüşe pay verir", "Çözüm sunar, girişe yankı yapar, taze biter"] },
          sag: { ikon: "⚠️", baslik: "Eksik parça", maddeler: ["Karşı görüşü hiç anmaz", "Yalnız girişi tekrar eder"] },
          oyun: [
            { metin: "Karşı görüşün haklı yanını kabul edip tezine geri döner.", cevap: "sol", neden: "Concession doğru kurulmuş." },
            { metin: "Karşı görüşten hiç söz etmez.", cevap: "sag", neden: "Concession zorunlu; yoksa puan kırılır." },
            { metin: "Sorunun nasıl çözülebileceğine dair somut bir öneri sunar.", cevap: "sol", neden: "Çözüm/öneri zorunlu parçadır." },
            { metin: "Sonuç yalnızca giriş cümlelerini aynen tekrar eder.", cevap: "sag", neden: "Yankı yapmak tekrar etmek değildir; taze bir bitiş gerekir." },
            { metin: "Sonuç girişe döner, kanıtlandığını söyler ve düşündüren yeni bir soruyla biter.", cevap: "sol", neden: "Girişe yankı + taze bitiş." }
          ] }
      ]
    },
    {
      baslik: "Alıntı yerleştirme ve akademik ton",
      kisa: "Kısa alıntı gömülür; uzun alıntı blok olur; I ve you yok.",
      bloklar: [
        { tip: "tablo", baslik: "Alıntı uzunluğuna göre biçim", head: ["Uzunluk", "Nasıl verilir?"], rows: [
            ["4 satırdan kısa", "Cümlenin içine gömülür, tırnaklıdır, atıf parantezdedir"],
            ["4 satırdan uzun", "Girintili blok olur, tırnak işareti yoktur"],
            ["Parafraz", "Kendi cümlen, ama atıf yine gerekir"]
          ], not: "Alıntıyı yalnız analiz edilen destek olarak kullan; kendi yazının yerine koyma." },
        { tip: "tablo", baslik: "Sınavda böyle yaz", head: ["Kaçın", "Bunun yerine"], rows: [
            ["*I think that phones distract students.*", "*Evidence suggests that phones distract students.*"],
            ["*In my opinion, …*", "*This essay argues that …*"],
            ["*You can see that …*", "*The data show that …*"],
            ["*Don't, can't, isn't*", "*Do not, cannot, is not*"],
            ["*a lot of*", "*many, numerous, a significant number of*"]
          ], not: "Kısaltmalardan ve belirsiz ifadelerden kaçınma, ek bilgi niteliğinde bir akademik yazı alışkanlığıdır." },
        { tip: "ikili", sol: { ikon: "🎓", baslik: "Akademik", maddeler: ["Üçüncü şahıs", "Kısaltma yok, kesin ifade"] },
          sag: { ikon: "💬", baslik: "Gündelik", maddeler: ["I, you, we", "Kısaltma ve belirsiz ifadeler"] },
          oyun: [
            { metin: "Research indicates that sleep affects performance.", cevap: "sol", neden: "Üçüncü şahıs, kanıta yaslanıyor." },
            { metin: "You probably know that phones are distracting.", cevap: "sag", neden: "*You* ve belirsiz ifade." },
            { metin: "I believe schools should change their rules.", cevap: "sag", neden: "*I* kullanılıyor." },
            { metin: "Critics argue that later start times cost more.", cevap: "sol", neden: "Karşı görüş üçüncü şahısla veriliyor." }
          ] }
      ]
    },
    {
      baslik: "Değerlendirme: Full Outline ve final rubrik",
      kisa: "Full Outline 50 puan (100 ÷ 2); final essay'de sıfır tuzakları var.",
      bloklar: [
        { tip: "tablo", baslik: "Kontrol noktası 2: Full Outline (8 Nisan 16:30, Turnitin)", head: ["Ölçüt", "Puan"], rows: [
            ["Biçim", "5"],
            ["Works Cited (doğru MLA, bağlantılar dahil)", "15"],
            ["Metin içi atıflar (in-text)", "15"],
            ["Tez net ve tartışılabilir", "5"],
            ["5 paragraflık düşünme yok, 3'ten fazla body", "5"],
            ["İngilizce ve argüman dili", "10"],
            ["Konu cümleleri tezle mantıklı sırada", "10"],
            ["Yeterli araştırma ve sağlam kaynaklar", "20"],
            ["Karşı tarafa concession", "5"],
            ["Çözüm önerisi", "5"],
            ["Sonuç", "5"]
          ], vurgu: 7, not: "Toplam 100, ikiye bölünür: 50 puanlık reinforcement task. Tam outline, in-text atıflar ve Works Cited (tüm elektronik kaynakların bağlantısıyla) Turnitin'e yüklenir. Byrd sesli ya da yazılı yorum yapar." },
        { tip: "tablo", baslik: "Final essay rubriği (100)", head: ["Bölüm", "Puan", "Dikkat"], rows: [
            ["Özgün kaynak kopyaları ve renk kodu", "25", "En az 4 kaynak; 6+ en üst bant; teslim yoksa ya da kaynak sahteyse 0"],
            ["Konu gelişimi, amaç, destek (×2,5)", "25", "5+ mükemmel kaynak en üst bant"],
            ["Organization (×2)", "20", "Düzen ve geçişler"],
            ["Cümle yapısı, sözcük, mekanik (×1)", "10", "4'ten fazla parafraz sorunu: bölümün tamamı 0"],
            ["MLA biçimi (×2)", "20", "4'ten fazla eksik in-text atıf: bölümün tamamı 0"]
          ], vurgu: 3, not: "Geç teslim günlük %10. Rubrik, alıntıyı yalnız analiz edilen destek olarak ister. Sınavda böyle yaz: *The essay follows MLA format and cites every source in the text.*" },
        { tip: "zaman", olaylar: [
            { tarih: "8 Nisan 16:30", baslik: "Full Outline kontrol noktası", metin: "Turnitin'e outline + in-text + Works Cited." },
            { tarih: "17 Nisan 14:20", baslik: "Final Argument Paper", metin: "Turnitin'e tek DOC belge; basılı klasör BA205 önündeki kutuya." },
            { tarih: "4 Haziran", baslik: "Beceri sınavı", metin: "Reading/Writing bölümü yok; teslim edilen Argument Paper onun yerine sayılır." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Essay: 1500–1700 kelime (kapak ve Works Cited hariç), en az 4 kaynak, I ve you yok.",
            "Çalışma tezi araştırıp analiz ettikten SONRA, yazmadan önce öğretmen onayıyla yazılır; yalnız özet yetmez, ikna et.",
            "5 paragraflık düşünme yok: 3'ten fazla body paragraf; her birinde konu cümlesi, geçiş, destek ve analiz.",
            "Bir concession ve çözüm/öneri zorunludur; sonuç girişe yankı yapar, kanıtlandığını söyler ve taze biter.",
            "4 satırdan kısa alıntı gömülür ve tırnaklanır; 4 satırdan uzun alıntı tırnaksız bloktur; parafraz da atıf ister.",
            "Full Outline (8 Nisan 16:30): 100 üzerinden puan, ikiye bölünür = 50; araştırma ve kaynaklar en ağır (20), Works Cited ve in-text 15'er.",
            "Final: kaynak klasörü 25, konu gelişimi 25, organization 20, cümle/sözcük 10, MLA 20; 4'ten fazla parafraz sorunu ya da eksik atıf ilgili bölümü sıfırlar.",
            "Argument Paper, Haziran beceri sınavında Reading/Writing yerine sayılır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which of the following is the strongest thesis statement?",
      opts: ["This essay discusses school uniforms.", "School uniforms are good.", "Schools should not require uniforms because they limit self-expression and do not measurably improve discipline.", "Many schools have uniforms."], a: 2,
      why: "Üçüncü şık tek, tartışılabilir bir iddia ve iki gerekçe taşır. İkinci şık çok geniş ve gerekçesizdir (çekici ama zayıf); birinci duyuru, dördüncü ise olgudur." },
    { q: "A student's plan for the argument essay is below. How many words must be added to reach the 1500 to 1700 word range?",
      fig: { type: "table", head: ["Section", "Words"], rows: [["Introduction", 150], ["Body paragraph 1", 250], ["Body paragraph 2", 250], ["Body paragraph 3", 250], ["Body paragraph 4", 250], ["Concession", 100], ["Solution", 80], ["Conclusion", 100]] },
      opts: ["Between 70 and 270 words", "Between 270 and 470 words", "None; the plan is already within the range", "Between 1 and 70 words"], a: 0,
      why: "Toplam 150 + 4 × 250 + 100 + 80 + 100 = 1430. Hedef 1500–1700 olduğundan 70 ile 270 arasında eklemek gerekir. “Eklemeye gerek yok” 1430'u sınır içinde sanma tuzağıdır." },
    { q: "In the Full Outline checkpoint rubric, which criterion is worth the most points?",
      opts: ["Works Cited with working links", "In-text citations", "Concession to the opposing side", "Adequate research and sound sources"], a: 3,
      why: "Yeterli araştırma ve sağlam kaynaklar 20 puandır; Works Cited ve in-text 15'er, concession 5'tir. Works Cited çekici bir yanlıştır çünkü 15 puanla ikinci sıradadır." },
    { q: "Which statement about the working thesis is correct?",
      opts: ["It is written before research to guide the search.", "It is written after researching and analyzing, and the teacher approves it before the student starts writing.", "Teacher approval is optional.", "It may change topic but must keep the same focus."], a: 1,
      why: "Çalışma tezi araştırıp analiz ettikten SONRA ve yazmaya başlamadan önce öğretmen onayıyla yazılır. Son şık ters yazılmıştır: odak değişebilir ama konu değişmez." },
    { q: "A final paper has six in-text citations missing. Which part of the 100-point rubric is affected?",
      opts: ["The MLA format band of 20 points drops to zero.", "The sentence structure and vocabulary band drops to zero.", "Only one point is deducted from the topic development band.", "Nothing, if the Works Cited page is complete."], a: 0,
      why: "Dörtten fazla eksik in-text atıf, MLA biçimi bölümünün (20 puan) tamamını sıfırlar. Dörtten fazla parafraz sorunu ise cümle yapısı bölümünü sıfırlar; ikisi karıştırılır. Works Cited tam olsa bile eksik in-text sıfır sebebidir." }
  ]
};
