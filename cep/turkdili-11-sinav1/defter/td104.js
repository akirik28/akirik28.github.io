/* Kitpath not defteri · td104 · E-posta yazma (TDE4.1–4.4)
   Kaynak: turkdili-11-sinav1/veri.js (MUHTEMEL, MC, PROVA) ve takip/sinav-kitleri/turkdili/KAYNAK.md. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "td104",
  amac: "Bu konu resmî e-posta yazmayı anlatıyor: alanlar, metnin bölümleri, dil kuralları ve puanlama. Sınavda verilen duruma uygun, eksiksiz bir e-posta yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Alanlar ve konu satırı",
      kisa: "Kime, Bilgi, Gizli, Konu, Ek: her alanın bir işi var.",
      bloklar: [
        { tip: "tablo", head: ["Alan", "İşi"], rows: [
            ["Kime", "Asıl alıcı"],
            ["Bilgi (CC)", "Kopya; herkes birbirinin adresini görür"],
            ["Gizli (BCC)", "Adresler diğer alıcılara görünmez"],
            ["Konu satırı", "Kısa, amacı açıkça yansıtır; asla boş bırakılmaz"],
            ["Ek", "Belge eklenir ve metinde belirtilir; eklenmediyse ekten söz edilmez"]
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "İyi konu satırı", maddeler: ["Kısa ve amacı açık", "Alıcı açmadan ne istendiğini anlar"] },
          sag: { ikon: "🚫", baslik: "Zayıf konu satırı", maddeler: ["Boş ya da belirsiz", "Selam, abartı, tamamen büyük harf"] },
          oyun: [
            { metin: "Gölge Oyunu Atölyesi İçin Tasvir Ödünç Alma Talebi", cevap: "sol", neden: "Kısa ve amacı açık." },
            { metin: "(Konu satırı boş bırakılır.)", cevap: "sag", neden: "Konu satırı asla boş bırakılmaz." },
            { metin: "ACİL!!! LÜTFEN HEMEN OKUYUN", cevap: "sag", neden: "Büyük harf ve ünlem: abartılı ve resmî değil." },
            { metin: "48213 Numaralı Sipariş: Hatalı Basılmış Kitabın Değiştirilmesi Talebi", cevap: "sol", neden: "Hem sipariş hem istek belli." }
          ] },
        { tip: "tuzak", metin: "CC ile BCC karışır.", yanlis: "Gizli (BCC) alanındakiler birbirinin adresini görür.", dogru: "CC'de herkes adresleri görür. Adresleri gizlemek için BCC kullanılır." }
      ]
    },
    {
      baslik: "Metin yapısı: tam örnek e-posta",
      kisa: "Konu, hitap, giriş, gelişme, sonuç, kapanış, imza, ek: sırayla yaz.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Konu" }, "→", { t: "Hitap" }, "→", { t: "Giriş" }, "→", { t: "Gelişme" }, "→", { t: "Sonuç" }, "→", { t: "Kapanış" }, "→", { t: "İmza" }, "→", { t: "Ek" }
          ], aciklama: "Hitaptan ve kapanıştan sonra virgül konur: “Sayın Yetkili,” “Saygılarımla,”" },
        { tip: "tablo", head: ["Bölüm", "E-postada yazılan"], rows: [
            ["Kime", "kutuphane@ornek.org.tr"],
            ["Konu", "Gölge Oyunu Atölyesi İçin Tasvir Ödünç Alma Talebi"],
            ["Hitap", "Sayın Kütüphane Müdürü,"],
            ["Giriş: kendini tanıt, amacını söyle", "Okulumuzun Edebiyat Kulübü başkanı olarak, düzenleyeceğimiz atölye için bir ricada bulunmak amacıyla yazıyorum."],
            ["Gelişme: tarih, saat, yer ve gerekçe", "Kulübümüz 27 Kasım Cuma günü saat 14.00'te konferans salonunda “Hayal Perdesi: Gölge Oyunu Atölyesi”ni yapacaktır. Koleksiyonunuzdaki birkaç Karagöz tasvirinin o gün sergilenmesini istiyoruz; tasvirler öğretmenimizin gözetiminde korunacak ve aynı gün teslim edilecektir."],
            ["Sonuç: açık istek, ek cümlesi, teşekkür", "Tasvirleri hangi koşullarla ödünç alabileceğimizi bildirmenizi rica ederim. Atölye programını ekte bilgilerinize sunuyorum. İlginiz için şimdiden teşekkür ederim."],
            ["Kapanış", "Saygılarımla,"],
            ["İmza", "Ad Soyad, Edebiyat Kulübü Başkanı, 11/A, Telefon: 0 5xx xxx xx xx"],
            ["Ek", "Atölye programı (1 sayfa)"]
          ] }
      ]
    },
    {
      baslik: "Resmî ve ölçülü dil",
      kisa: "Saygılı ve açık yaz; emoji, kısaltma, argo ve büyük harf kullanma.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Yazılır", maddeler: ["Resmî, saygılı, açık, ölçülü dil", "Doğru yazım ve noktalama"] },
          sag: { ikon: "🚫", baslik: "Yazılmaz", maddeler: ["Emoji, kısaltma (slm, tşk, mrb), argo", "Tamamen büyük harf", "Kırıcı, küçümseyici, ayrımcı ifade"] },
          oyun: [
            { metin: "Sayın Yetkili,", cevap: "sol", neden: "Resmî hitap, sonunda virgül var." },
            { metin: "slm, tşk ederim :)", cevap: "sag", neden: "Kısaltma ve emoji resmî e-postaya uymaz." },
            { metin: "Saygılarımla,", cevap: "sol", neden: "Resmî kapanış; büyük harfle başlar, virgülle biter." },
            { metin: "BU KONUDA HEMEN DÖNÜŞ BEKLİYORUM", cevap: "sag", neden: "Tamamen büyük harf bağırmak sayılır." },
            { metin: "Bu kadar basit bir işi bile beceremiyorsunuz.", cevap: "sag", neden: "Küçümseyici, kırıcı ifade." }
          ] },
        { tip: "tuzak", metin: "Vurgu için büyük harf kullanmak cazip görünür.", yanlis: "Önemli cümleleri büyük harfle yazmak dikkat çeker.", dogru: "Tamamen büyük harf bağırmak sayılır; resmî e-postada kullanılmaz." }
      ]
    },
    {
      baslik: "Nesnel mi, öznel mi?",
      kisa: "Bilgiler nesnel olsun; gerekçe ve teşekkür ölçülü öznel olabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Nesnel ifade", tr: "doğrulanabilir bilgi", tanim: "Kişiden kişiye değişmez; doğrulanabilir bilgi verir.", ornek: "Tarih, saat, yer, sipariş numarası." },
            { ikon: "💭", terim: "Öznel ifade", tr: "kişisel yargı", tanim: "Kişinin kendi görüşünü bildirir.", ornek: "“bence”, “harika”, “inanıyorum”" }
          ] },
        { tip: "ikili", sol: { ikon: "📏", baslik: "Nesnel", maddeler: ["Bilgilerde kullan"] },
          sag: { ikon: "💭", baslik: "Öznel", maddeler: ["Gerekçe ve teşekkürde ölçülü kullan"] },
          oyun: [
            { metin: "Atölye 27 Kasım Cuma günü saat 14.00'te yapılacaktır.", cevap: "sol", neden: "Tarih, saat: doğrulanabilir." },
            { metin: "Gölge oyunu bence bütün sanatların en büyüleyicisidir.", cevap: "sag", neden: "“Bence” kişisel yargı bildirir." },
            { metin: "Siparişin numarası 48213'tür.", cevap: "sol", neden: "Sipariş numarası doğrulanabilir." },
            { metin: "Koleksiyonunuz gerçekten harika görünüyor.", cevap: "sag", neden: "“Harika” kişisel bir yargıdır." }
          ] }
      ]
    },
    {
      baslik: "Puanlama: 30 puan",
      kisa: "Biçim 10, içerik 10, dil ve kurallar 10 puandır.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 10, etiket: "Biçim" },
            { deger: 10, etiket: "İçerik" },
            { deger: 10, etiket: "Dil ve kurallar" }
          ] },
        { tip: "tablo", head: ["Ölçüt", "Neye bakılır?"], rows: [
            ["Biçim (10)", "Konu satırı, “Sayın ...,” hitabı, giriş-gelişme-sonuç, “Saygılarımla,”, imza, ek bilgisi"],
            ["İçerik (10)", "Tarih, saat, yer gibi nesnel bilgiler; açık istek; konu dışına çıkmama"],
            ["Dil ve kurallar (10)", "Resmî ve saygılı dil; emoji, kısaltma, argo, tamamen büyük harf yok; yazım ve noktalama doğru"]
          ] },
        { tip: "tuzak", baslik: "En çok puan kaybettiren eksikler", metin: "Küçük görünen eksikler puanı en çok götürür.", yanlis: "Konu satırı ve imza küçük ayrıntıdır.", dogru: "Boş ya da belirsiz konu satırı, samimi hitap, yazılmayan istek, unutulan imza ve ek puan kaybettirir." }
      ]
    },
    {
      baslik: "Yazma süreci ve kontrol listesi",
      kisa: "Planla, taslak yaz, gözden geçir; altı ölçütle kontrol et.",
      bloklar: [
        { tip: "adimlar", baslik: "Dört aşama", adimlar: [
            { baslik: "Planlama", metin: "Amacı, alıcıyı ve ekleri belirle." },
            { baslik: "Taslak", metin: "Bölümleri sırala; rica etme, bilgi isteme, gerekçelendirme dil işlevlerini seç." },
            { baslik: "Gözden geçirme", metin: "Alıcı adresi, konu, ekler, yazım ve noktalamayı kontrol et; mümkünse bir arkadaşına okut." },
            { baslik: "Gönderme", metin: "Kontrol bitince gönder." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "☑️", baslik: "Türkçenin doğru kullanımı" },
            { ikon: "☑️", baslik: "Dil ve üslup" },
            { ikon: "☑️", baslik: "Özgünlük" },
            { ikon: "☑️", baslik: "Gerekli yerde öznel ve nesnel ifade" },
            { ikon: "☑️", baslik: "Başlık ve hitap kullanımı" },
            { ikon: "☑️", baslik: "Yazım ve noktalama" }
          ] }
      ]
    },
    {
      baslik: "E-posta ve mektup",
      kisa: "Hitap, kapanış ve imza ortak; konu satırı ve çok alıcı e-postaya özgü.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔗", baslik: "Ortak", maddeler: ["Hitap", "Kapanış", "İmza"] },
          sag: { ikon: "📧", baslik: "Yalnız e-postada", maddeler: ["Konu satırı", "Tarih ve saat sistemce eklenir", "Anında ulaşır", "Aynı anda çok alıcı", "Dosya eki"] } }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Alanlar: Kime, Bilgi (CC), Gizli (BCC), Konu, Ek",
            "Konu satırı kısa, açık; asla boş değil",
            "Sıra: konu, hitap, giriş, gelişme, sonuç, kapanış, imza, ek",
            "Virgül: “Sayın Yetkili,” ve “Saygılarımla,”",
            "Emoji, kısaltma, argo, tamamen büyük harf yok"
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir öğrenci, çevrim içi mağazadan aldığı kitabın bazı sayfalarının boş basıldığını bildirip değişim isteyecek. Aşağıdaki konu satırlarından hangisi en uygundur?",
      opts: ["Selam, bir sorunum var", "SİPARİŞİM GELMEDİ HEMEN CEVAP VERİN!!!", "48213 Numaralı Sipariş: Hatalı Basılmış Kitabın Değiştirilmesi Talebi", "(Konu satırı boş bırakılır.)"],
      a: 2,
      why: "İyi konu satırı kısa olur ve amacı açıkça yansıtır; burada hem sipariş hem istek belli. “Selam, bir sorunum var” en çekici yanlış şık: amacı belirtmiyor. Büyük harf ve ünlem resmî değildir; boş konu satırı ise asla olmaz." },
    { q: "Bir kulüp başkanı aynı duyuruyu 40 üyeye gönderiyor ve üyelerin birbirinin adresini görmesini istemiyor. Adresleri hangi alana yazmalıdır?",
      opts: ["Bilgi (CC)", "Gizli (BCC)", "Kime", "Ek"],
      a: 1,
      why: "Gizli (BCC) alanına yazılan adresler öteki alıcılara görünmez. Bilgi (CC) en çekici yanlış şık: orada herkes birbirinin adresini görür." },
    { q: "Konu satırı boş, hitabı “Selam hocam,” ve kapanışı “tşk” olan bir e-posta için en doğru değerlendirme hangisidir?",
      opts: ["Biçim ile dil ve kurallar puanı kaybettirir: boş konu, samimi hitap, kısaltma.", "Yalnızca içerik puanı kaybettirir.", "Hiçbir puan kaybettirmez; kısa olması yeterlidir.", "Yalnızca imza eksik olduğu için puan kaybettirir."],
      a: 0,
      why: "Boş konu satırı ve hitap biçimle ilgilidir; samimi hitap ile “tşk” gibi kısaltma dil ve kurallarla ilgilidir. İçerik puanı ise tarih, saat, yer gibi bilgilere ve açık isteğe bağlıdır." },
    { q: "Bir öğrenci e-postada “Atölye programını ekte bilgilerinize sunuyorum.” yazmış, ama dosyayı eklememiştir. Bu durum için hangisi doğrudur?",
      opts: ["Hata yoktur; alıcı programı kendisi bulur.", "Metinde ekten söz edilip ek eklenmediği için sık yapılan bir hatadır; göndermeden önce ekler kontrol edilmelidir.", "Konu satırı boş sayılır.", "Hitap yanlış sayılır."],
      a: 1,
      why: "Ek gönderiyorsan metinde belirtirsin; ama metinde anılan ekin eklenmemesi sık yapılan bir hatadır. Gözden geçirmede alıcı, konu, ekler ve yazım kontrol edilir." },
    { q: "Bir sipariş şikâyeti e-postasının gelişme bölümüne en uygun nesnel bilgi hangisidir?",
      opts: ["Bu mağazadan bir daha asla alışveriş yapmayacağım.", "Kitap bence çok kötü basılmış.", "Kitabın böyle gelmesi gerçekten çok üzücü ve kabul edilemez.", "Siparişimin numarası 48213'tür ve 20 Ekim 2026 tarihinde verilmiştir."],
      a: 3,
      why: "Nesnel bilgi doğrulanabilir olur: sipariş numarası ve tarih gibi. “Bence”, “üzücü”, “kabul edilemez” kişisel yargıdır; öfkeli ifadeler de resmî ve ölçülü dile uymaz." }
  ]
};
