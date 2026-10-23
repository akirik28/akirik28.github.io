/* Kitora not defteri · en405 · 4.5 Röportaj ve Anket
   Okul dersi (10. sınıf English · Unit 4). Hazır soru listesi ya da e-posta metni vermez; yapı ve kalıp verir.
   Kaynak: Argumentative Essay belgesindeki röportaj ve anket protokolü (Dr Byrd; kaynak olarak Purdue OWL) ve Byrd'ün Works Cited biçimleri.
   "Ek bilgi" etiketli kısımlar öğretmen belgesinde yoktur. */
window.DEFTER = {
  slug: "en405",
  amac: "Argument Paper'ın birincil kaynaklarını toplamayı öğreneceksin: röportaj protokolünü, dışarıdaki yetişkine öğretmeni CC'leyerek e-posta yazmayı, anketin kurallarını (50+ kişi, anonim, 4 hafta önce bitirme), notları İngilizceye çevirmeyi ve kaynakçada göstermeyi.",
  bolumler: [
    {
      baslik: "Röportaj mı, anket mi?",
      kisa: "Her konuda dış araştırma ile UAA röportajı ve anketi birlikte gerekir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎙️", baslik: "Röportaj (*interview*)", maddeler: ["Seçtiğin bir kişiyle derinlemesine konuşma", "Neden ve nasıl sorularına cevap"] },
          sag: { ikon: "📋", baslik: "Anket (*survey*)", maddeler: ["UAA öğrenci, öğretmen ya da personelinden çok kişiyle aynı soru", "En az 50+ öğrenci; yüzdeler ve sayılar"] },
          oyun: [
            { metin: "Bir uyku uzmanından bilimsel görüşünü almak.", cevap: "sol", neden: "Tek uzman, derinlemesine cevap: röportaj." },
            { metin: "Okuldaki 80 öğrencinin günlük telefon süresini ölçmek.", cevap: "sag", neden: "Çok kişi, sayısal veri: anket." },
            { metin: "Öğrencilerin yüzde kaçı gece 7 saatten az uyuyor?", cevap: "sag", neden: "Yüzde ve çok kişi: anket." },
            { metin: "Okul müdürüne ders başlangıç saatini neden belirlediklerini sormak.", cevap: "sol", neden: "Karar sahibinden gerekçe: röportaj." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💬", terim: "Qualitative data", tr: "nitel veri (ek bilgi)", tanim: "Ek bilgi: sözlü açıklama, görüş ve deneyim. Röportaj ve açık uçlu sorular verir.", ornek: "Bir uzmanın “neden” açıklaması." },
            { ikon: "🔢", terim: "Quantitative data", tr: "nicel veri (ek bilgi)", tanim: "Ek bilgi: sayılabilen ve yüzdeye çevrilebilen veri. Kapalı uçlu anket sorularından gelir.", ornek: "56 öğrencinin 41'i." },
            { ikon: "👥", terim: "Sample", tr: "örneklem (ek bilgi)", tanim: "Ek bilgi: anketi dolduran kişiler; tüm grubu (*population*) temsil etmesi gereken parça.", ornek: "10. sınıflardan rastgele seçilen 60 öğrenci." }
          ] },
        { tip: "tuzak", metin: "Yalnız arkadaşlarla yapılan röportaj araştırma sayılmaz; tek röportaja da güvenme.", yanlis: "Üç arkadaşımla konuştum, röportaj tamam.", dogru: "Dış araştırmayı UAA'dan seçilmiş röportaj ve anketle tamamla; tek kaynağa güvenme. Sınavda böyle yaz: *Interviews with friends alone do not count as research.*" }
      ]
    },
    {
      baslik: "Röportaj protokolü",
      kisa: "Dikkatle seç, izin iste, hazırlan, kaydetmeden önce sor, teşekkür et.",
      bloklar: [
        { tip: "adimlar", baslik: "Röportajın adımları", adimlar: [
            { baslik: "Kişiyi dikkatle seç", metin: "Konuya ışık tutacak biri; tek röportaja güvenme." },
            { baslik: "İzin iste", metin: "Kişi anonim kalmak isteyebilir; okul görevlisiyse rolü nedeniyle anonim olamaz." },
            { baslik: "Randevu al", metin: "Öylece sorma; önce uygun zaman ayarla." },
            { baslik: "Soruları önceden hazırla", metin: "İlgili, olumlu ve tarafsız sorular." },
            { baslik: "Kayıt için ÖNCE izin al", metin: "İzin yoksa kaydetme; sadece not al." },
            { baslik: "Teşekkür notu gönder", metin: "Görüşmeden sonra. Reddedilirsen nedenini sorma, teşekkür et." },
            { baslik: "Notları İngilizceye çevir", metin: "Notların İngilizce olmalı; görüşme Türkçeyse çevir." },
            { baslik: "Süreyi koru", metin: "Röportajlar teslimden EN AZ DÖRT HAFTA önce bitmiş olmalı." }
          ] },
        { tip: "liste", baslik: "Ek bilgi: açık uçlu soru kalıpları", maddeler: [
            { ikon: "❓", baslik: "*Could you explain how …?*", metin: "Açıklama ister." },
            { ikon: "❓", baslik: "*What evidence led you to …?*", metin: "Gerekçeyi sorar." },
            { ikon: "❓", baslik: "*How would you respond to critics who say …?*", metin: "Karşı argümanı uzmana sorar." }
          ] },
        { tip: "tuzak", metin: "Kayıt izni olmadan kayda başlamak kural ihlalidir.", yanlis: "Telefonumu açtım, kayıt alıyorum; sonra söylerim.", dogru: "Kayıttan ==önce== izin iste; kaydedilmeyecekse not al. Sınavda böyle yaz: *May I record this interview?*" }
      ]
    },
    {
      baslik: "Dışarıdaki yetişkine e-posta: öğretmen CC'de",
      kisa: "Dışarıdan bir yetişkinle yazışırken öğretmenin CC'de olmalı.",
      bloklar: [
        { tip: "tablo", baslik: "E-postanın parçaları (kendi cümlelerinle doldur)", head: ["Parça", "İçerik", "Kalıp (ek bilgi)"], rows: [
            ["Konu satırı", "Ne istediğini kısaca söyle", "*Interview request: school research project on [topic]*"],
            ["Selamlama", "Unvan + soyad", "*Dear Dr. / Mr. / Ms. [Surname],*"],
            ["Tanıtım", "Kendini nazikçe tanıt: adın, okulun, sınıfın", "*My name is [name], and I am a 10th-grade student at [school].*"],
            ["Amaç ve konu", "Konunu ve neden onu seçtiğini söyle", "*I am researching [topic] and value your expertise.*"],
            ["İstek", "Süre ve biçim; randevu iste", "*Would you be available for a 15-minute interview by [phone / video / e-mail]?*"],
            ["İzin", "Alıntı ve kayıt için izin", "*May I quote your answers and record the interview?*"],
            ["Kapanış", "Teşekkür ve ad", "*Thank you for your time. Sincerely, [name]*"]
          ], not: "Öğretmenini mutlaka CC alanına ekle (UAA kuralı): öğretmen e-postayı önce kontrol eder. Kişisel telefon numarası ya da ev adresi yazma." },
        { tip: "tuzak", metin: "Öğretmensiz yazışma UAA kuralına aykırıdır.", yanlis: "Önce uzmana yazarım, öğretmene sonra söylerim.", dogru: "Dışarıdan yetişkinle her e-postada ==öğretmen CC'de== olur ve e-posta önce öğretmenin kontrolünden geçer." }
      ]
    },
    {
      baslik: "Anket protokolü",
      kisa: "En az 50+ öğrenci, anonim seçenek, İngilizce sonuç, 4 hafta önce bitir.",
      bloklar: [
        { tip: "liste", baslik: "Anket kuralları", maddeler: [
            { ikon: "👥", baslik: "Kim yanıtlar?", metin: "UAA öğrencileri, öğretmenleri ya da personeli." },
            { ikon: "🕶️", baslik: "Anonim seçenek", metin: "Katılımcıya anonim kalma seçeneği ver." },
            { ikon: "🔢", baslik: "Kaç kişi?", metin: "Ne kadar çok kişi, o kadar doğru veri. 20 kişi işe yaramaz; en az 50+ öğrenci." },
            { ikon: "💻", baslik: "Nasıl?", metin: "Çevrimiçi (Google Forms, SurveyMonkey) ya da kâğıt anket + toplama kutusu." },
            { ikon: "🌐", baslik: "Sonuçlar", metin: "İngilizce raporlanır." },
            { ikon: "📅", baslik: "Süre", metin: "Teslimden EN AZ DÖRT HAFTA önce tamamlanmalı; 17 Nisan teslim için bu yaklaşık 20 Mart demektir." }
          ] },
        { tip: "tablo", baslik: "Ek bilgi: soru türleri ve iyi soru", head: ["Tür", "Ne işe yarar?", "Örnek"], rows: [
            ["Kapalı uçlu (*multiple choice*)", "Sayı ve yüzde verir", "*How many hours per day do you use your phone? (0–1 / 2–3 / 4–5 / 6+)*"],
            ["Ölçek (*Likert scale*)", "Katılma derecesini ölçer", "*Phones distract me during lessons. (1 = strongly disagree … 5 = strongly agree)*"],
            ["Açık uçlu (*open-ended*)", "Gerekçeyi ve görüşü verir", "*What would make phone rules fair?*"]
          ], not: "Soruları kısa, tarafsız ve tek konulu tut; kendi görüşünü yönlendirme." },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Tarafsız soru", maddeler: ["Cevabı yönlendirmez", "Tek bir fikir sorar"] },
          sag: { ikon: "⚠️", baslik: "Hatalı soru", maddeler: ["Yönlendirici, çift amaçlı ya da belirsiz", "Cevabı baştan belli eder"] },
          oyun: [
            { metin: "Don't you agree that phones in class are harmful distractions?", cevap: "sag", neden: "Yönlendirici (*leading*): cevabı baştan söylüyor." },
            { metin: "How many hours per day do you use your phone? (0–1 / 2–3 / 4–5 / 6+)", cevap: "sol", neden: "Tek konu, kapsayıcı şıklar." },
            { metin: "Are phones and social media useful and safe?", cevap: "sag", neden: "Çift amaçlı: iki ayrı şeyi birden soruyor." },
            { metin: "Phones distract me during lessons. (1 = strongly disagree … 5 = strongly agree)", cevap: "sol", neden: "Tarafsız ölçek maddesi." }
          ] },
        { tip: "tuzak", metin: "20 kişilik anket tek başına yeterli sayılmaz.", yanlis: "20 arkadaşıma sordum, anket tamam.", dogru: "Öğretmenin kuralı: 20 kişi işe yaramaz; ==en az 50+ öğrenci== gerekir. Sınavda böyle yaz: *At least 50 students were surveyed.*" }
      ]
    },
    {
      baslik: "Ek bilgi: kaç kişi? Örneklem ve hata payı",
      kisa: "Ek bilgi: örneklem büyüdükçe hata payı küçülür; 20 kişi çok yetersizdir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Hata payı", alt: "yaklaşık ±%" }, "≈",
            { t: "100 ÷ √n", alt: "n = kişi sayısı" }
          ], aciklama: "Kaba bir kuraldır: rastgele örneklem ve yaklaşık %95 güven için." },
        { tip: "grafik", baslik: "Örneklem büyüdükçe hata payı", xlabel: "Kişi sayısı (n)", ylabel: "Hata payı (±%)", xmax: 400, ymax: 25,
          xticks: [{ v: 50, label: "50" }, { v: 100, label: "100" }, { v: 200, label: "200" }, { v: 400, label: "400" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 15, label: "15" }, { v: 20, label: "20" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[20, 22.4], [25, 20], [36, 16.7], [50, 14.1], [75, 11.5], [100, 10], [150, 8.2], [200, 7.1], [300, 5.8], [400, 5]] },
            { id: "n20", tip: "nokta", x: 20, y: 22.4, kilavuz: true, gizli: true },
            { id: "l20", tip: "yazi", x: 40, y: 23.5, metin: "n = 20: ≈ ±22", hiza: "start", gizli: true },
            { id: "n50", tip: "nokta", x: 50, y: 14.1, kilavuz: true, gizli: true },
            { id: "l50", tip: "yazi", x: 70, y: 17.5, metin: "n = 50: ≈ ±14", hiza: "start", gizli: true },
            { id: "n100", tip: "nokta", x: 100, y: 10, kilavuz: true, gizli: true },
            { id: "l100", tip: "yazi", x: 120, y: 12.5, metin: "n = 100: ≈ ±10", hiza: "start", gizli: true },
            { id: "n400", tip: "nokta", x: 400, y: 5, kilavuz: true, gizli: true },
            { id: "l400", tip: "yazi", x: 390, y: 8, metin: "n = 400: ≈ ±5", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Kişi sayısı arttıkça hata payı azalır, ama giderek yavaş." },
            { metin: "20 kişilik anket: hata payı yaklaşık ±22 puan; bu yüzden öğretmen “işe yaramaz” diyor.", goster: ["n20", "l20"] },
            { metin: "50 kişilik anket: hata payı yaklaşık ±14 puan; alt sınır budur.", goster: ["n50", "l50"] },
            { metin: "100 kişi: yaklaşık ±10 puan.", goster: ["n100", "l100"] },
            { metin: "400 kişi: yaklaşık ±5. Örneklem 4 katına çıkınca hata payı ==yarıya iner==.", goster: ["n400", "l400"] }
          ] },
        { tip: "ornek", baslik: "Hata payını hesapla", durum: "n = 100 ve n = 400 için kaba hata payını bul.", adimlar: [
            "n = 100: √100 = 10 → 100 ÷ 10 = %10.",
            "n = 400: √400 = 20 → 100 ÷ 20 = %5.",
            "Örneklem 4 katına çıktı (100 → 400); hata payı yarıya indi (%10 → %5)."
          ], sonuc: "Kişi sayısı 4 katına çıkınca hata payı yarıya iner; 50 kişi alt sınırdır ve hâlâ büyük hata payı taşır." },
        { tip: "tuzak", metin: "Kolay ulaşılan arkadaşlara anket yapmak örneklemi yanlı (*biased*) yapar; formül bu hatayı göstermez.", yanlis: "100 kişiye sordum, hata payı ±%10; sonuç tüm Türkiye'yi temsil eder.", dogru: "Örneklem ==temsil edici== değilse sonuç yalnızca o gruba aittir; essay'de bunu açıkça yaz." }
      ]
    },
    {
      baslik: "Etik, sonucu sunma ve kaynakçada gösterme",
      kisa: "İzinli ve dürüst topla; sonucu İngilizce yaz ve kaynakçaya ekle.",
      bloklar: [
        { tip: "liste", baslik: "Araştırma etiği", maddeler: [
            { ikon: "🤝", baslik: "İzin ve gönüllülük", metin: "Katılımcı istediği zaman bırakabilir; kimseyi zorlama." },
            { ikon: "🕶️", baslik: "Gizlilik", metin: "Anonim isteyen kişiyi anonim tut; kayıt ve alıntı için izin al." },
            { ikon: "⚖️", baslik: "Tarafsızlık", metin: "Soruları tezini destekleyecek biçimde kurma." },
            { ikon: "🚫", baslik: "Veri uydurma yok", metin: "Yanıtları değiştirmek ya da uydurmak akademik dürüstlük ihlalidir (en407)." }
          ] },
        { tip: "tablo", baslik: "Works Cited biçimleri (Dr Byrd'ün belgesi)", head: ["Kaynak", "Biçim"], rows: [
            ["Röportaj", "Soyadı, Ad. Personal Interview [ya da Email Interview]. Gün Ay Yıl."],
            ["Anonim röportaj", "Anonymous. Personal Interview. 11 February 2026."],
            ["Google Forms ya da SurveyMonkey anketi", "Soyadın, Adın. “Anket Başlığı” Survey. Google Forms. UAA. [anketi oluşturduğun tarih]. Web. [veri topladığın tarih]. [canlı bağlantı; Dr Byrd görüntüleyici] (Öğretmenin biçimi; MLA 9'da \"Web.\" yazılmaz, aylar kısaltılır.)"],
            ["Elle yapılan anket", "Soyadın, Adın. “Anket Konusu.” Survey. [tarih]."]
          ], not: "Metin içi atıf girişin ilk öğesiyle başlar. Ayrıntı en402'de." },
        { tip: "tablo", baslik: "Ek bilgi: sonucu böyle yaz", head: ["Amaç", "Kalıp"], rows: [
            ["Anket yüzdesi", "*Of the [n] students surveyed, [x] ([%]) reported that …*"],
            ["Röportajı tanıtma", "*As [Name], a [title], explained in a personal interview, …*"],
            ["Sınırlılığı kabul etme", "*These results are limited by a small, non-random sample.*"],
            ["Yüzde hesabı", "yüzde = parça ÷ toplam × 100; örnek: 41 ÷ 56 ≈ 0,73 → %73"]
          ], not: "Boşlukları kendi verinle doldur; sayıları uydurma. Metinde I ve you kullanma." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Her konuda dış araştırma + UAA röportajı ve anketi gerekir; yalnız arkadaşlarla röportaj araştırma sayılmaz.",
            "Röportaj: dikkatle seç, izin iste (okul görevlisi anonim olamaz), randevu al, soruları hazırla, kayıttan ÖNCE izin al, teşekkür et.",
            "Dışarıdan yetişkine e-posta: kendini nazikçe tanıt, konuyu söyle, öğretmeni CC'ye ekle (UAA kuralı).",
            "Reddedilirsen nedenini sorma, teşekkür et; tek röportaja güvenme; notlar İngilizceye çevrilir.",
            "Anket: UAA öğrenci/öğretmen/personeli, anonim seçenek, 20 kişi işe yaramaz, en az 50+ öğrenci.",
            "Çevrimiçi (Google Forms, SurveyMonkey) ya da kâğıt anket + kutu; sonuçlar İngilizce.",
            "Röportaj ve anketler teslimden en az dört hafta önce bitmeli.",
            "Kaynakçada: Personal Interview, Anonymous ya da Survey biçimi; veri uydurma akademik dürüstlük ihlalidir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "A student wants to email an adult outside the school to ask for an interview. Which is correct?",
      opts: ["Write only to the expert and tell the teacher later.", "Leave the teacher out of the correspondence.", "Include the teacher in CC; the teacher checks the email first.", "Add a personal phone number and home address."], a: 2,
      why: "UAA kuralı: dışarıdan yetişkinle yazışmada öğretmen CC'de olur ve e-postayı önce kontrol eder. Birinci şık çekicidir ama öğretmen sonradan bilgilendirilmez; kişisel bilgi vermek de gereksizdir." },
    { q: "How many students should a survey include, according to the teacher?",
      opts: ["Twenty is enough.", "At least 50 students, because 20 is not useful.", "Ten per class.", "Five per grade level."], a: 1,
      why: "Öğretmenin kuralı: 20 kişi işe yaramaz, en az 50+ öğrenci gerekir. “Yirmi yeter” çekici bir tuzaktır; ne kadar çok kişi, o kadar doğru veri." },
    { q: "A student's final paper is due on 17 April. Interviews and surveys must be completed at least four weeks before the deadline. What is the latest date to finish them?",
      opts: ["3 April", "10 April", "17 April", "20 March"], a: 3,
      why: "Dört hafta 28 gündür: 17 Nisan − 28 gün = 20 Mart. 3 Nisan iki hafta, 10 Nisan bir hafta öncesidir; 17 Nisan teslim günüdür." },
    { q: "A teacher at another school declines an interview request. What should the student do?",
      opts: ["Ask why and try to convince the teacher.", "Send the request again every day.", "Thank the person politely and look for another interviewee.", "Interview a friend instead and call it an expert interview."], a: 2,
      why: "Reddedilirse nedenini sorma, teşekkür et. Ardından başka bir kişi seçilir; arkadaşla röportaj araştırma sayılmaz (dördüncü şık)." },
    { q: "A student's survey results are below (n = 100). Which sentence reports the result correctly and academically?",
      fig: { type: "table", head: ["Phone use during class", "Students"], rows: [["Often", 38], ["Sometimes", 42], ["Never", 20]] },
      opts: ["Of the 100 students surveyed, 38 reported using phones often during class, while 20 reported never using them.", "Almost all students use phones constantly.", "You can see that 62% of students never use phones.", "I found that most students (80%) never use phones."], a: 0,
      why: "İlk şık sayıları doğru ve I/you olmadan verir. Üçüncü şık you kullanır ve yüzdeyi yanlış yazar; dördüncü şık I kullanır ve %80'i “hiç” diye yanlış okur (80 = sık sık + bazen)." }
  ]
};
