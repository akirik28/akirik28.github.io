/* ============================================================
   SUNUMLAR — sitede listelenen sunumlar
   Yeni sunum eklemek için listeye bir kayıt ekleyin (bkz. BENIOKU.md).
   Sıra önemli değil: site tarihe göre sıralar, en yenisi "Son sunum" olur.
   ============================================================ */

window.SITE = {
  sahibi: "Ada Sarp Kırık",
  aciklama: "Derslerde ve programlarda hazırladığım sunumlar tek adreste. Canva'daki sunumlarımı sıfırdan, hareketli web sunumları olarak yeniden tasarladım; bazılarını olduğu gibi bıraktım. Birini seçin, tek tıkla tam ekran başlatın.",
  // Bu sunum eskiden sitenin ana adresindeydi; eski "#18" gibi bağlantılar ona yönlenir.
  eskiAnaSunum: "bir-fikrin-otopsisi"
};

window.SUNUMLAR = [
  {
    klasor: "din-bilim",
    baslik: "Din ve Bilim · Çatışma mı, diyalog mu?",
    baslikEn: "Religion and Science · Conflict or dialogue?",
    altBaslik: "Kavramlar, Kur'an'da akıl ve tefekkür, Barbour'un dört modeli, Galileo, İslam medeniyetinde bilim, Lemaître ve sınıfa üç soru",
    altBaslikEn: "Key terms, reason in the Qur'an, Barbour's four models, Galileo, science in Islamic civilization, Lemaître and three questions for the class",
    konu: "11. sınıf Din Kültürü ve Ahlak Bilgisi · 2. Ünite: Din, Felsefe, Bilim ve Sanat",
    konuEn: "Grade 11 Religious Culture and Ethics · Unit 2: Religion, Philosophy, Science and Art (in Turkish)",
    tarih: "2026-10-29",
    sure: "≈12 dk", sureEn: "≈12 min",
    ekran: 15,
    ekip: "Ada Sarp Kırık", ekipEn: "Ada Sarp Kırık",
    tur: "web", dil: "TR", renk: "#E8B65A",
    kareler: ["#E8B65A", "#7FB2FF", "#E8B65A", "#7FB2FF", "#E8B65A", "#F08A7E", "#7FB2FF"],
    notlar: "Yapay zekâ ile hazırlandı; son ekranda Yapay Zekâ Şeffaflık Formu var."
  },
  {
    klasor: "stem-buds-tanitim",
    baslik: "STEM & BUDS'a Hoş Geldin · 6. ve 7. sınıf tanıtım toplantısı",
    baslikEn: "Welcome to STEM & BUDS · intro meeting for grades 6 and 7",
    altBaslik: "Altı Chapter, 10 haftalık yolculuk, lise mentorları, final günü ve “Hangi Chapter sana göre?” oyunu",
    altBaslikEn: "Six Chapters, a 10-week journey, high-school mentors, final day and a “Which Chapter fits you?” game",
    konu: "STEM & BUDS Türkiye · ortaokul öğrencilerine tanıtım",
    konuEn: "STEM & BUDS Türkiye · intro for middle-school students (in Turkish)",
    tarih: "2026-10-22",
    sure: "≈15 dk", sureEn: "≈15 min",
    ekran: 15,
    ekip: "Hande Özcan, Murad Öztürk, Ada Sarp Kırık", ekipEn: "Hande Özcan, Murad Öztürk, Ada Sarp Kırık",
    tur: "web", dil: "TR", renk: "#8DC63F",
    kareler: ["#8DC63F", "#1E8C6B", "#4C6FFF", "#8DC63F", "#A35BFF", "#8DC63F", "#1E8C6B"],
    notlar: ""
  },
  {
    klasor: "eyp-nedir",
    baslik: "EYP Nedir? · Avrupa Gençlik Parlamentosu rehberi",
    baslikEn: "What is EYP? · A guide to the European Youth Parliament",
    altBaslik: "Konferans nasıl işler, UALEF, unofficial ve official EYP, roller, başvuru adımları ve kulüp saatleri için bir plan",
    altBaslikEn: "How a session works, UALEF, unofficial and official EYP, roles, how to apply and a plan for club hours",
    konu: "Okul sunumu · Avrupa Gençlik Parlamentosu (EYP)",
    konuEn: "School presentation · European Youth Parliament (in Turkish)",
    tarih: "2026-10-16",
    sure: "≈10 dk", sureEn: "≈10 min",
    ekran: 20,
    ekip: "4 kişilik grup", ekipEn: "group of 4",
    tur: "yeniden", dil: "TR", renk: "#2F7BFF",
    kareler: ["#2F7BFF", "#2F7BFF", "#2F7BFF", "#1C55E6", "#2F7BFF", "#8EC5FF", "#2F7BFF"],
    notlar: ""
  },
  {
    klasor: "bir-fikrin-otopsisi",            // sitedeki adres: /bir-fikrin-otopsisi/
    baslik: "Bir Fikrin Otopsisi",
    altBaslik: "Bazı fikirler neden yaşar, bazıları neden ölür?",
    konu: "2. Ünite · Girişimci ve Başarılı Girişimcilerin Özellikleri",
    altBaslikEn: "Why do some ideas live and others die?",
    konuEn: "Unit 2 · Entrepreneurs and what makes them successful (in Turkish)",
    sureEn: "7.5 min + 4 min video",
    ekipEn: "group project",
    tarih: "2026-10-08",                       // YYYY-AA(-GG): sıralama için; sitede ay + yıl görünür
    tur: "web", dil: "TR", renk: "#5FE3C0",
    sure: "7,5 dk + 4 dk video",
    ekran: 30,
    ekip: "2. Grup",
    uyeler: ["Alperen Güncan", "Yalçın Ata Oruğ", "Tuna Alp Küçükcan", "Ada Sarp Kırık"],
    bolumler: [
      { no: "01", ad: "Girişimci kimdir?", renk: "#FFCF4A" },
      { no: "02", ad: "Girişimci neyi değiştirir?", renk: "#FF7759" },
      { no: "03", ad: "Girişimcinin DNA’sı", renk: "#5FE3C0" },
      { no: "04", ad: "Risk testi", renk: "#5BB6FF" },
      { no: "05", ad: "Başarı mı, hayatta kalma mı?", renk: "#FF7EB6" },
      { no: "00", ad: "Video: Bir Fikrin 180 Saniyelik Hayatı", renk: "#B8EC52" }
    ],
    // onizleme/<klasor>/01.webp, 02.webp … — her karenin baskın rengi (sahne ışığı bu renge döner)
    kareler: ["#6FE3C6", "#FFCF4A", "#5FE3C0", "#FF7759", "#FF7EB6", "#FF7EB6", "#6FE3C6"],
    notlar: "notlar.html"                      // konuşma notları sayfası (yoksa "")
  },
  {
    klasor: "kirmizi-pazartesi",
    baslik: "Kırmızı Pazartesi: İletişim Haritası",
    baslikEn: "Chronicle of a Death Foretold: a communication map",
    altBaslik: "Bir cinayet, hiç ulaşmayan bir uyarı ve susan bir kasaba",
    altBaslikEn: "A murder, a warning that never arrived, and a town that stayed silent",
    konu: "11. sınıf Türk edebiyatı · tek sayfalık harita",
    konuEn: "Grade 11 Turkish literature · one-page map (in Turkish)",
    tarih: "2026-09-26",
    sure: "tek sayfa", sureEn: "one page",
    ekran: 1,
    ekip: "2 kişilik çalışma", ekipEn: "pair project",
    tur: "orijinal", dil: "TR", renk: "#F07B1E",
    kareler: ["#F07B1E"],
    notlar: ""
  },
  {
    klasor: "stem-buds-2026",
    baslik: "STEM & BUDS Türkiye · 2026–27 Program Modeli",
    baslikEn: "STEM & BUDS Türkiye · 2026–27 Program Model",
    altBaslik: "Lise mentorlarıyla 10 haftada fikirden somut projeye; Kadıköy BİLSEM'e iş birliği önerisi",
    altBaslikEn: "From idea to a real project in 10 weeks with high-school mentors; a partnership proposal to Kadıköy BİLSEM",
    konu: "STEM & BUDS Türkiye · Bölge Direktörü olarak hazırladığım program sunumu",
    konuEn: "STEM & BUDS Türkiye · the program pitch I prepared as Regional Director (in Turkish)",
    tarih: "2026-10-02",
    sure: "≈7 dk", sureEn: "≈7 min",
    ekran: 12,
    ekip: "STEM & BUDS Türkiye yönetim ekibi", ekipEn: "STEM & BUDS Türkiye leadership team",
    tur: "yeniden", dil: "TR", renk: "#8DC63F",
    kareler: ["#1E8C6B", "#8DC63F", "#8DC63F", "#8DC63F", "#1E8C6B", "#8DC63F", "#13807F"],
    notlar: ""
  },
  {
    klasor: "slayer-monopoly",
    baslik: "SLAYER: Monopoly oynayan yapay zekâ ajanı",
    baslikEn: "SLAYER: an AI agent that plays Monopoly",
    altBaslik: "5 gün, 3 kişi, Google Colab: eğitilen ajanlar kaybetti, net değeri hedefleyen deterministik ajan 100 oyunun 72'sini kazandı",
    altBaslikEn: "Five days, three people, Google Colab: the trained agents lost; a deterministic agent built around net worth won 72 of 100 games",
    konu: "Exposure AI Academy · final sunumu",
    konuEn: "Exposure AI Academy · final presentation (in Turkish)",
    tarih: "2026-08-14",
    sure: "≈7 dk", sureEn: "≈7 min",
    ekran: 15,
    ekip: "3 kişilik takım", ekipEn: "team of 3",
    tur: "yeniden", dil: "TR", renk: "#E0373C",
    kareler: ["#1FA463", "#1FA463", "#1FA463", "#E0373C", "#1FA463", "#1FA463", "#E0373C"],
    notlar: ""
  },
  {
    klasor: "arc-agi-3",
    baslik: "ARC-AGI-3: Ne denedik, ne bozuldu, ne öğrendik",
    baslikEn: "ARC-AGI-3: what we tried, what broke, what we learned",
    altBaslik: "Beş kişi, tek codebase, tek deadline: 0.11'den 0.93'e giden yol ve son gece gelen pivot",
    altBaslikEn: "Five people, one codebase, one deadline: the road from 0.11 to 0.93 and a last-night pivot",
    konu: "Exposure AI Academy · jüri sunumu · ARC-AGI-3 (Kaggle)",
    konuEn: "Exposure AI Academy · jury presentation · ARC-AGI-3 on Kaggle (in Turkish)",
    tarih: "2026-08-07",
    sure: "≈8 dk", sureEn: "≈8 min",
    ekran: 16,
    ekip: "5 kişilik takım", ekipEn: "team of 5",
    tur: "yeniden", dil: "TR", renk: "#3DDC5A",
    kareler: ["#373436", "#7FA882", "#535F6A", "#323B3A", "#7B6780", "#944949", "#58A367"],
    notlar: ""
  },
  {
    klasor: "kant-minority-report",
    baslik: "Immanuel Kant & Minority Report",
    altBaslik: "Suç işlenmeden ceza olur mu? Kant'ın ödev ahlakıyla Precrime'ı ve John Anderton'u yargılıyoruz",
    altBaslikEn: "Can you punish a crime before it happens? Kant's duty ethics puts Precrime and John Anderton on trial",
    konu: "10. sınıf felsefe · John Anderton karakter analizi",
    konuEn: "Grade 10 philosophy · a character analysis of John Anderton (in Turkish)",
    tarih: "2026-04-20",
    sure: "≈7 dk", sureEn: "≈7 min",
    ekran: 16,
    ekip: "6 kişilik grup", ekipEn: "group of 6",
    tur: "yeniden", dil: "TR", renk: "#3CC6D8",
    kareler: ["#7DEBF7", "#3CC6D8", "#ECE2CC", "#B97C43", "#F0A85C", "#E7DCC6", "#8E2014"],
    notlar: ""
  },
  {
    klasor: "word2vec",
    baslik: "Efficient Estimation of Word Representations in Vector Space",
    altBaslik: "word2vec makalesi: kelimelerin anlamını vektör uzayında öğrenen hızlı, basit bir model",
    altBaslikEn: "The word2vec paper: a fast, simple model that learns what words mean in vector space",
    konu: "Data Science & AI · makale sunumu (Mikolov vd., 2013) ve kendi Python modelimiz",
    konuEn: "Data Science & AI · paper presentation (Mikolov et al., 2013) and our own Python model",
    tarih: "2025-08-21",
    sure: "≈8 dk", sureEn: "≈8 min",
    ekran: 18,
    ekip: "6 kişilik grup", ekipEn: "group of 6",
    tur: "yeniden", dil: "EN", renk: "#2B3CFF",
    kareler: ["#2B3CFF", "#2B3CFF", "#D23F29", "#2B3CFF", "#2B3CFF", "#5A68FF", "#2B3CFF"],
    notlar: ""
  },
  {
    klasor: "motiv",
    baslik: "Motiv",
    altBaslik: "Ekran süresini gelişim süresine çeviren uygulama",
    altBaslikEn: "The app that turns screen time into growth time",
    konu: "Imperial Global Summer School · girişim sunumu · Londra",
    konuEn: "Imperial Global Summer School · startup pitch · London",
    tarih: "2025-08-14",
    sure: "≈7 dk", sureEn: "≈7 min",
    ekran: 19,
    ekip: "7 kişilik takım · Tech Consultant", ekipEn: "team of 7 · Tech Consultant",
    tur: "yeniden", dil: "EN", renk: "#FF7A1A",
    kareler: ["#FF7A1A", "#FF7A1A", "#FF8A24", "#2FCB86", "#2FCB86", "#FFB23F", "#FF7A1A"],
    notlar: ""
  }
];
