/* Kitora not defteri · en405 · 4.5 Röportaj ve Anket
   Okul dersi (10. sınıf English · Unit 4). Hazır soru listesi ya da e-posta metni vermez; yapı ve kalıp verir. */
window.DEFTER = {
  slug: "en405",
  amac: "Essay'in birincil kaynaklarını toplamayı öğreneceksin: röportajı planlamayı, dışarıdaki yetişkine öğretmeni CC'leyerek e-posta yazmayı, tarafsız anket sorusu yazmayı, örneklem büyüklüğünü ve etik kuralları.",
  bolumler: [
    {
      baslik: "Röportaj mı, anket mi?",
      kisa: "Röportaj derinlik, anket geniş kitleden sayı verir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎙️", baslik: "Röportaj (*interview*)", maddeler: ["Bir uzmanla derinlemesine konuşma", "Neden ve nasıl sorularına cevap"] },
          sag: { ikon: "📋", baslik: "Anket (*survey*)", maddeler: ["Çok kişiden aynı soruyla veri", "Yüzdeler ve sayılar verir (50+ kişi önerilir)"] },
          oyun: [
            { metin: "Bir uyku uzmanından bilimsel görüşünü almak.", cevap: "sol", neden: "Tek uzman, derinlemesine cevap: röportaj." },
            { metin: "Okuldaki 80 öğrencinin günlük telefon süresini ölçmek.", cevap: "sag", neden: "Çok kişi, sayısal veri: anket." },
            { metin: "Öğrencilerin yüzde kaçı gece 7 saatten az uyuyor?", cevap: "sag", neden: "Yüzde ve çok kişi: anket." },
            { metin: "Okul müdürüne ders başlangıç saatini neden belirlediklerini sormak.", cevap: "sol", neden: "Karar sahibinden gerekçe: röportaj." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💬", terim: "Qualitative data", tr: "nitel veri", tanim: "Sözlü açıklama, görüş ve deneyim. Röportaj ve açık uçlu sorular verir.", ornek: "Bir uzmanın \"neden\" açıklaması." },
            { ikon: "🔢", terim: "Quantitative data", tr: "nicel veri", tanim: "Sayılabilen ve yüzdeye çevrilebilen veri. Kapalı uçlu anket sorularından gelir.", ornek: "56 öğrencinin 41'i." },
            { ikon: "👥", terim: "Sample", tr: "örneklem", tanim: "Anketi doldurduğun kişiler: tüm grubu (*population*) temsil etmesi gereken parça.", ornek: "10. sınıflardan rastgele seçilen 60 öğrenci." }
          ] }
      ]
    },
    {
      baslik: "Röportajı planla ve yap",
      kisa: "Uzmana net bir amaç ve hazır sorularla git.",
      bloklar: [
        { tip: "adimlar", adimlar: [
            { baslik: "Uzmanı seç", metin: "Konuda bilgisi olan, tez ya da karşı argümanına ışık tutacak biri." },
            { baslik: "E-posta ile iste", metin: "Öğretmenin CC'de; ne zaman ve hangi biçimde (yüz yüze, telefon, e-posta) yapılacağını öner." },
            { baslik: "Sorularını hazırla", metin: "5–8 açık uçlu soru; en önemlisini başa koy." },
            { baslik: "Röportajı yap", metin: "Not al; ses kaydı için önce izin iste." },
            { baslik: "Teşekkür et ve doğrula", metin: "Alıntılarını göndererek doğruluğunu kontrol et." },
            { baslik: "Kaynak göster", metin: "Metinde (Soyad), kaynakçada *Personal interview.* girişi." }
          ] },
        { tip: "liste", baslik: "Açık uçlu soru kalıpları", maddeler: [
            { ikon: "❓", baslik: "*Could you explain how …?*", metin: "Açıklama ister." },
            { ikon: "❓", baslik: "*What evidence led you to …?*", metin: "Gerekçeyi sorar." },
            { ikon: "❓", baslik: "*How would you respond to critics who say …?*", metin: "Karşı argümanı uzmana sorar." }
          ] },
        { tip: "tuzak", metin: "Evet/hayır soruları röportajı kısa keser.", yanlis: "*Do you think phones are a problem?*", dogru: "*How do phones affect attention in class, and what evidence supports this?* gibi açık uçlu sorular sor." }
      ]
    },
    {
      baslik: "Dışarıdaki yetişkine e-posta: öğretmen CC'de",
      kisa: "Dışarıdan bir yetişkinle yazışırken öğretmenin CC'de olmalı.",
      bloklar: [
        { tip: "tablo", baslik: "E-postanın parçaları (kendi cümlelerinle doldur)", head: ["Parça", "İçerik", "Kalıp"], rows: [
            ["Konu satırı", "Ne istediğini kısaca söyle", "*Interview request: school research project on [topic]*"],
            ["Selamlama", "Unvan + soyad", "*Dear Dr. / Mr. / Ms. [Surname],*"],
            ["Tanıtım", "Adın, okulun, sınıfın", "*My name is [name], and I am a 10th-grade student at [school].*"],
            ["Amaç", "Neden onu seçtin", "*I am writing an argumentative essay on [topic] and value your expertise.*"],
            ["İstek", "Süre ve biçim", "*Would you be available for a 15-minute interview by [phone / video / e-mail]?*"],
            ["İzin", "Alıntı için izin", "*May I quote your answers and cite you in my Works Cited?*"],
            ["Kapanış", "Teşekkür ve ad", "*Thank you for your time. Sincerely, [name]*"]
          ], not: "Öğretmenini mutlaka CC alanına ekle. Kişisel telefon numarası ya da ev adresi yazma." },
        { tip: "tuzak", metin: "Öğretmensiz yazışma kural dışıdır.", yanlis: "Önce uzmana yazarım, öğretmene sonra söylerim.", dogru: "Dışarıdan yetişkinle her e-postada ==öğretmen CC'de== olur." }
      ]
    },
    {
      baslik: "İyi anket sorusu",
      kisa: "Kısa, tarafsız, tek konulu sorular; anonim ve kolay.",
      bloklar: [
        { tip: "tablo", baslik: "Soru türleri", head: ["Tür", "Ne işe yarar?", "Örnek"], rows: [
            ["Kapalı uçlu (*multiple choice*)", "Sayı ve yüzde verir", "*How many hours per day do you use your phone? (0–1 / 2–3 / 4–5 / 6+)*"],
            ["Ölçek (*Likert scale*)", "Katılma derecesini ölçer", "*Phones distract me during lessons. (1 = strongly disagree … 5 = strongly agree)*"],
            ["Açık uçlu (*open-ended*)", "Gerekçeyi ve görüşü verir", "*What would make phone rules fair?*"]
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Tarafsız soru", maddeler: ["Cevabı yönlendirmez", "Tek bir fikir sorar"] },
          sag: { ikon: "⚠️", baslik: "Hatalı soru", maddeler: ["Yönlendirici, çift amaçlı ya da belirsiz", "Cevabı baştan belli eder"] },
          oyun: [
            { metin: "Don't you agree that phones in class are harmful distractions?", cevap: "sag", neden: "Yönlendirici (*leading*): cevabı baştan söylüyor." },
            { metin: "How many hours per day do you use your phone? (0–1 / 2–3 / 4–5 / 6+)", cevap: "sol", neden: "Tek konu, kapsayıcı şıklar." },
            { metin: "Are phones and social media useful and safe?", cevap: "sag", neden: "Çift amaçlı: iki ayrı şeyi birden soruyor." },
            { metin: "Phones distract me during lessons. (1 = strongly disagree … 5 = strongly agree)", cevap: "sol", neden: "Tarafsız ölçek maddesi." }
          ] },
        { tip: "liste", baslik: "Anket kontrol listesi", maddeler: [
            { ikon: "✅", baslik: "En çok 10 kısa soru", metin: "Uzun anketi insanlar yarım bırakır." },
            { ikon: "✅", baslik: "Anonim", metin: "Ad ve numara isteme." },
            { ikon: "✅", baslik: "Önce 2–3 kişiyle dene", metin: "Anlaşılmayan soruyu düzelt." },
            { ikon: "✅", baslik: "Dağıtmadan önce izin al", metin: "Öğretmeninin onayı olmadan okulda dağıtma." }
          ] }
      ]
    },
    {
      baslik: "Kaç kişi? Örneklem ve hata payı",
      kisa: "Örneklem büyüdükçe hata payı küçülür; 50 kişi alt sınırdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Hata payı", alt: "yaklaşık ±%" }, "≈",
            { t: "100 ÷ √n", alt: "n = kişi sayısı" }
          ], aciklama: "Kaba bir kuraldır: rastgele örneklem ve yaklaşık %95 güven için." },
        { tip: "grafik", baslik: "Örneklem büyüdükçe hata payı", xlabel: "Kişi sayısı (n)", ylabel: "Hata payı (±%)", xmax: 400, ymax: 25,
          xticks: [{ v: 50, label: "50" }, { v: 100, label: "100" }, { v: 200, label: "200" }, { v: 400, label: "400" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 15, label: "15" }, { v: 20, label: "20" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[25, 20], [36, 16.7], [50, 14.1], [75, 11.5], [100, 10], [150, 8.2], [200, 7.1], [300, 5.8], [400, 5]] },
            { id: "n50", tip: "nokta", x: 50, y: 14.1, kilavuz: true, gizli: true },
            { id: "l50", tip: "yazi", x: 70, y: 17.5, metin: "n = 50: ≈ ±14", hiza: "start", gizli: true },
            { id: "n100", tip: "nokta", x: 100, y: 10, kilavuz: true, gizli: true },
            { id: "l100", tip: "yazi", x: 120, y: 12.5, metin: "n = 100: ≈ ±10", hiza: "start", gizli: true },
            { id: "n400", tip: "nokta", x: 400, y: 5, kilavuz: true, gizli: true },
            { id: "l400", tip: "yazi", x: 390, y: 8, metin: "n = 400: ≈ ±5", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Kişi sayısı arttıkça hata payı azalır, ama giderek yavaş." },
            { metin: "50 kişilik anket: hata payı yaklaşık ±14 puan.", goster: ["n50", "l50"] },
            { metin: "100 kişi: yaklaşık ±10 puan.", goster: ["n100", "l100"] },
            { metin: "400 kişi: yaklaşık ±5. Örneklem 4 katına çıkınca hata payı ==yarıya iner==.", goster: ["n400", "l400"] }
          ] },
        { tip: "ornek", baslik: "Hata payını hesapla", durum: "n = 100 ve n = 400 için kaba hata payını bul.", adimlar: [
            "n = 100: √100 = 10 → 100 ÷ 10 = %10.",
            "n = 400: √400 = 20 → 100 ÷ 20 = %5.",
            "Örneklem 4 katına çıktı (100 → 400); hata payı yarıya indi (%10 → %5)."
          ], sonuc: "Kişi sayısı 4 katına çıkınca hata payı yarıya iner; 50 kişi alt sınırdır, ancak büyük hata payı taşır." },
        { tip: "tuzak", metin: "Kolay ulaşılan arkadaşlara anket yapmak örneklemi yanlı (*biased*) yapar; formül bu hatayı göstermez.", yanlis: "100 kişiye sordum, hata payı ±%10; sonuç tüm Türkiye'yi temsil eder.", dogru: "Örneklem ==temsil edici== değilse sonuç yalnızca o gruba aittir; essay'de bunu açıkça yaz." }
      ]
    },
    {
      baslik: "Etik ve veriyi essay'de sunma",
      kisa: "İzinli, anonim ve dürüst topla; sonucu olduğu gibi yaz.",
      bloklar: [
        { tip: "liste", baslik: "Araştırma etiği", maddeler: [
            { ikon: "🤝", baslik: "İzin ve gönüllülük", metin: "Katılımcı istediği zaman bırakabilir; kimseyi zorlama." },
            { ikon: "🕶️", baslik: "Gizlilik", metin: "Anketi anonim tut; röportajda alıntı için izin al." },
            { ikon: "⚖️", baslik: "Tarafsızlık", metin: "Soruları tezini destekleyecek biçimde kurma." },
            { ikon: "🚫", baslik: "Veri uydurma yok", metin: "Yanıtları değiştirmek ya da uydurmak akademik dürüstlük ihlalidir." }
          ] },
        { tip: "tablo", baslik: "Sonucu böyle yaz", head: ["Amaç", "Kalıp"], rows: [
            ["Anket yüzdesi", "*Of the [n] students surveyed, [x] ([%]) reported that …*"],
            ["Röportajı tanıtma", "*As [Name], a [title], explained in a personal interview, …*"],
            ["Sınırlılığı kabul etme", "*These results are limited by a small, non-random sample.*"],
            ["Yüzde hesabı", "yüzde = parça ÷ toplam × 100; örnek: 41 ÷ 56 ≈ 0,73 → %73"]
          ], not: "Kalıplardaki boşlukları kendi verinle doldur; sayıları uydurma. Metinde *I* ve *you* kullanma." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Röportaj derinlik (nitel), anket geniş kitleden sayı (nicel) verir; ikisi de birincil kaynaktır.",
            "Röportaj: uzmanı seç, e-posta ile iste, açık uçlu sorular hazırla, izin al, doğrulat, kaynak göster.",
            "Dışarıdan bir yetişkinle yazışırken öğretmen her zaman CC'de olur.",
            "İyi anket sorusu: kısa, tarafsız, tek konulu; yönlendirici ve çift amaçlı sorulardan kaçın.",
            "Kaba hata payı ≈ 100 ÷ √n; örneklem 4 katına çıkınca hata payı yarıya iner.",
            "50+ kişi önerilir; ama örneklem temsil edici değilse sonuç yalnızca o gruba aittir.",
            "Anonim ol, izin al, veriyi uydurma; sınırlılığı essay'de dürüstçe yaz.",
            "Röportaj ve anketi kaynakçaya ve metin içine ekle; anket biçimini öğretmeninle netleştir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Hangisi yönlendirici (*leading*) bir anket sorusudur?",
      opts: ["How many hours per day do you use your phone? (0–1 / 2–3 / 4–5 / 6+)", "Don't you agree that phones in class are harmful distractions?", "Phones distract me during lessons. (1 = strongly disagree … 5 = strongly agree)", "Do you use your phone during lunch? (Yes / No)"], a: 1,
      why: "İkinci şık cevabı baştan \"harmful\" diye çerçeveliyor. Üçüncü şık ölçek sorusu gibi görünüp yönlendirici sanılabilir, ama tarafsız bir ifade ve ölçek veriyor." },
    { q: "Bir öğrencinin anket sonuçları aşağıdadır (n = 100). Hangi cümle sonucu doğru ve akademik tonda (*I*/*you* olmadan) sunar?",
      fig: { type: "table", head: ["Derste telefon kullanımı", "Kişi"], rows: [["Sık sık", 38], ["Bazen", 42], ["Hiç", 20]] },
      opts: ["Of the 100 students surveyed, 38 reported using phones often during class, while 20 reported never using them.", "Almost all students use phones constantly.", "You can see that 62% of students never use phones.", "I found that most students (80%) never use phones."], a: 0,
      why: "İlk şık sayıları doğru verir. Üçüncü şık *you* kullanır ve yüzdeyi yanlış yazar; dördüncü şık *I* kullanır ve %80'i \"hiç\" diye yanlış okur (80 = sık sık + bazen)." },
    { q: "Bir anketin örneklemi 50 kişiden 200 kişiye çıkarsa (rastgele örneklem varsayımıyla) kaba hata payı nasıl değişir?",
      opts: ["Değişmez.", "4 katına çıkar.", "Yaklaşık dörtte birine iner.", "Yaklaşık yarıya iner (≈ ±14 → ±7)."], a: 3,
      why: "Hata payı ≈ 100 ÷ √n; n 4 katına çıkınca √n 2 katına çıkar, hata payı yarıya iner. \"Dörtte bir\" çekici ama yanlıştır; hata payı karekökle düşer." },
    { q: "Bir öğrenci dışarıdaki bir uzmana röportaj isteği e-postası yazacak. Hangisi doğrudur?",
      opts: ["Önce yalnızca uzmana yazar, öğretmene sonra bildirir.", "Öğretmeni yazışmaya hiç dahil etmez.", "Öğretmeni CC'ye ekler.", "Kişisel telefon numarasını ve ev adresini de ekler."], a: 2,
      why: "Dışarıdan yetişkinle yazışmada öğretmen CC'de olmalıdır. Kişisel bilgi vermek de gereksiz ve güvensizdir." },
    { q: "Bir öğrenci 40 kişilik bir anket topladı; \"50+ kişi önerilir\" hedefini tutturamadı. Ne yapmalıdır?",
      opts: ["40 gerçek yanıtı olduğu gibi raporlayıp sınırlılığı yazmalı ya da daha çok yanıt toplamalı.", "10 yanıtı yaklaşık değerlerle tamamlamalı.", "Anketi hiç kullanmamalı.", "Yalnızca \"sonuçlar güvenilir\" diye yazmalı."], a: 0,
      why: "Veri uydurmak akademik dürüstlük ihlalidir. Gerçek veriyi dürüstçe sunmak ve sınırlılığı belirtmek ya da yanıt sayısını artırmak doğrudur." }
  ]
};
