/* ============================================================
   BİR FİKRİN OTOPSİSİ — TÜM METİNLER
   Ekranda görünen her yazı burada. Değiştirmek için tırnak içini düzenleyin.
   <br> = satır sonu · <b>…</b> = vurgulu kelime (vurgu rengi)
   notes = SUNUCU NOTLARI (ekranda görünmez; P tuşuyla açılan sunucu penceresinde görünür)
   ============================================================ */

window.CONTENT = {

  /* ---------------- AÇILIŞ ---------------- */
  intro: {
    line1: "Her gün binlerce fikir doğar.",
    line2: "Çoğu, kimse fark etmeden ölür.",
    title1: "BİR FİKRİN",
    title2: "OTOPSİSİ",
    subtitle: "Bazı fikirler neden yaşar,<br>bazıları neden ölür?",
    cta: "DOSYAYI AÇ",
    meta: ["ÖRNEK NO. 0001", "TÜR: FİKİR", "DURUM: İNCELEMEDE"],
    layersTitle: "İNCELENECEK KATMANLAR",
    layers: ["FİKİR", "GİRİŞİMCİ", "KARARLAR", "RİSKLER", "EKİP", "MÜŞTERİ", "YENİLİK", "BAŞARISIZLIK"],
    notes: "Işıklar kapalıyken açın. İlk iki cümle kendiliğinden gelir. Başlık oturunca sınıfa bakın: 'Bugün fikirleri, bir doktorun vakayı incelediği gibi inceleyeceğiz. Önce yöntemi öğreneceğiz, en sonda gerçek bir vakayı birlikte açacağız.' → ile devam edin."
  },

  /* ---------------- İÇİNDEKİLER ---------------- */
  index: {
    label: "VAKA DOSYASI — İNCELEME PLANI",
    rows: [
      { n: "01", t: "Girişimci kimdir?", s: "Bir unvan mı, bir davranış mı?", m: "A · Girişimci kimdir?" },
      { n: "02", t: "Girişimci neyi değiştirir?", s: "Ekonomideki görevi", m: "B · Girişimcilerin fonksiyonu" },
      { n: "03", t: "Girişimcinin DNA’sı", s: "Kişisel · Davranışsal · Sosyal", m: "C · Girişimcide olması gereken özellikler" },
      { n: "04", t: "Risk testi", s: "Kısa bir simülasyon", m: "Ç · Girişimci olabilir miyim?" },
      { n: "05", t: "Başarı mı, hayatta kalma mı?", s: "Yaşayan ve ölen fikirler", m: "D · Girişimcilik örnekleri" },
      { n: "00", t: "Bir Fikrin 180 Saniyelik Hayatı", s: "Mühürlü kanıt kaydı — en sonda açılacak", m: "VİDEO · EN SONDA", sealed: true }
    ],
    notes: "Öğretmene müfredatı gösterdiğimiz tek ekran. Sağ sütun ünite başlıklarıdır (A–D). Kısaca geçin: 'Beş dosya açacağız. Dosya 00 mühürlü: o bir video, en sonda birlikte izleyip otopsisini sizinle yapacağız.'"
  },

  /* ---------------- DOSYA KAPAKLARI ---------------- */
  files: {
    "00": { title: "Bir Fikrin<br>180 Saniyelik Hayatı", tag: "VAKA" },
    "01": { title: "GİRİŞİMCİ<br>KİMDİR?", teaser: "Bir unvan mı, bir davranış mı?", curriculum: "A · Girişimci kimdir?" },
    "02": { title: "GİRİŞİMCİ<br>NEYİ<br>DEĞİŞTİRİR?", teaser: "Ekonomide bir girişimcinin işi ne?", curriculum: "B · Girişimcilerin fonksiyonu" },
    "03": { title: "GİRİŞİMCİNİN<br>DNA’SI", teaser: "Bir girişimciyi hangi özellikler oluşturur?", curriculum: "C · 1 Kişisel · 2 Davranışsal · 3 Sosyal özellikler" },
    "04": { title: "RİSK<br>TESTİ", teaser: "Girişimci olabilir miyim?", curriculum: "Ç · Girişimci olabilir miyim?" },
    "05": { title: "BAŞARI MI,<br>HAYATTA<br>KALMA MI?", teaser: "Neden biri yaşar, diğeri ölür?", curriculum: "D · Girişimcilik örnekleri · Başarılı girişimcilik örnekleri" }
  },

  /* ---------------- DOSYA 00 · VİDEO ---------------- */
  f00: {
    head: "DOSYA 00 — VAKA",
    meta: "KANIT KAYDI · ≈ 04:00",
    posterKicker: "KANIT KAYDI #00",
    posterTitle: "Bir Fikrin<br>180 Saniyelik Hayatı",
    play: "İZLE",
    hint: "→ · SPACE · TIKLA",
    caption: "Bu kayıt kavramları tanımlamıyor. Gösteriyor.",
    missing: "Video dosyası bulunamadı",
    missingHelp: "Videoyu “video” klasörüne koyun ve js/config.js içindeki <b>videoFile</b> değerine adını yazın. Devam etmek için →",
    blocked: "Tarayıcı otomatik oynatmayı engelledi — oynatmak için tıklayın.",
    brief: {
      label: "DOSYA 00 · MÜHÜR AÇILIYOR",
      big: "Yöntemi öğrendiniz.<br><b>Şimdi vakayı izleyin.</b>",
      note: "Videoda hiçbir kavram tanımlanmıyor. Hepsi gösteriliyor.",
      listLabel: "İZLERKEN YAKALAYIN — 7 KAVRAM",
      list: ["FIRSAT", "İNOVASYON", "GERİ BİLDİRİM", "DAYANIKLILIK", "RİSK", "EKİP", "DEĞER"],
      notes: "Görev verin: 'İzlerken bu yedi kavramı yakalayın.' → video ekranı. (≈10 sn)"
    },
    notes: "→ veya tıklama videoyu tam ekran başlatır. Video sırasında: SPACE = duraklat/devam, → = atla. Video bitince sunum kendiliğinden devam eder.",
    after: [
      "Videoda tek bir tanım bile yoktu.",
      "Ama hepsini gördünüz.",
      "Peki ChargeBox’ı<br>girişim yapan neydi?"
    ],
    afterNotes: "Video bitince kendiliğinden gelir. Tek soru: 'Hangi kavramları yakaladınız?' 1–2 cevap, → otopsi. (≈10 sn)"
  },

  /* ---------------- DOSYA 01 ---------------- */
  f01: {
    suspects: {
      label: "ÜÇ KİŞİ · ÜÇ DOSYA",
      question: "HANGİSİ GİRİŞİMCİ?",
      answer: "Üçü de olabilir.",
      people: [
        { code: "KİŞİ A", role: "Mühendis", text: "Yeni bir teknoloji icat ediyor.", cond: "…icadını insanların kullanabileceği bir değere dönüştürürse." },
        { code: "KİŞİ B", role: "İşletmeci", text: "Mahallesinde üçüncü kafesini açıyor.", cond: "…birikimini riske atıp yeni bir şube ve yeni işler yaratırsa." },
        { code: "KİŞİ C", role: "Lise öğrencisi", text: "İnsanların yaşadığı bir soruna yeni bir çözüm buluyor.", cond: "…çözümünü kâğıttan çıkarıp hayata geçirirse." }
      ],
      stamp: "OLABİLİR",
      footnote: "Girişimci ≠ şirket sahibi. Belirleyici olan unvan değil; <b>yaptıkları.</b>",
      notes: "Sınıfa sorun: 'Hangisi girişimci?' (5 sn). → Üçü de olabilir — şartları hızlıca gösterin. Alttaki cümle önemli: girişimci ≠ şirket sahibi. (≈25 sn)"
    },
    definition: {
      label: "TANIM",
      lead: "Girişimci;",
      lines: [
        { pre: "bir ihtiyacı veya fırsatı", verb: "GÖRÜR,", tag: "FIRSAT" },
        { pre: "belirsizlik altında kaynakları", verb: "BİR ARAYA GETİRİR", tag: "KAYNAK + RİSK" },
        { pre: "ve değer üretmek için", verb: "HAREKETE GEÇER.", tag: "DEĞER" }
      ],
      notes: "Üç satır kendiliğinden sırayla gelir. Sadece fiilleri vurgulayın: GÖRÜR, BİR ARAYA GETİRİR, HAREKETE GEÇER. (≈15 sn)"
    },
    myth: {
      label: "YAYGIN YANILGI",
      left: "GİRİŞİMCİ",
      right: "ŞİRKET SAHİBİ",
      a: { head: "Şirketi var, girişimci olmayabilir.", body: "Devraldığı işi hiçbir şeyi değiştirmeden yöneten biri." },
      b: { head: "Şirketi yok, girişimci olabilir.", body: "Çalıştığı kurumda yeni bir ürün başlatan çalışan <i>(iç girişimci)</i> ya da mahallesindeki bir sorunu çözen gönüllü <i>(sosyal girişimci)</i>." },
      conclusion: "Girişimcilik bir unvan değil.<br><b>Bir fiil.</b>",
      notes: "'Girişimci = şirket sahibi' en yaygın yanılgı. İki örnekle çürütün. Son cümlede tanımdaki üç fiili hatırlatın."
    },
    equation: {
      big: ["FİKİR", "GİRİŞİM"],
      rows: [
        { op: "", term: "FİKİR", cap: "bir ihtiyacı fark etmek" },
        { op: "+", term: "UYGULAMA", cap: "fikri kâğıttan çıkarmak" },
        { op: "+", term: "RİSK", cap: "belirsizliği üstlenmek" },
        { op: "+", term: "DEĞER", cap: "birinin işine yaramak" }
      ],
      result: "GİRİŞİM",
      note: "Fikir herkeste vardır.<br>Girişim, <b>ilk adımla</b> başlar.",
      notes: "FİKİR ≠ GİRİŞİM. → denklem kendiliğinden kurulur; sadece son cümleyi okuyun. (≈20 sn)"
    },
    callback: {
      stages: [2, 3],
      lines: ["Sondaki videoda bir fikir doğacak.", "Fikrin <b>girişime dönüştüğü</b> anı yakalayın."],
      question: "Hangi anda fikir, girişime dönüşüyor?",
      notes: "Bu bir ipucu ekranı: video en sonda. Sınıfa görev verin. (Cevap videoda: ilk denemeyle — yani denklemdeki UYGULAMA ve RİSK eklendiğinde.)"
    }
  },

  /* ---------------- DOSYA 02 ---------------- */
  f02: {
    vanish: {
      question: "YARIN TÜM<br>GİRİŞİMCİLER<br>ORTADAN KAYBOLSA<br>NE OLURDU?",
      mini: "YARIN TÜM GİRİŞİMCİLER ORTADAN KAYBOLSA…",
      words: [
        { w: "YENİ ÜRÜNLER", c: "Telefonun, oyunun, ilacın bir sonraki sürümü hiç gelmez." },
        { w: "REKABET", c: "Tek satıcı, tek fiyat. Kaliteyi umursayan kalmaz." },
        { w: "İŞ ALANLARI", c: "Yeni şirket yok. Yeni iş ilanı yok." },
        { w: "YENİLİK", c: "Her şey bugünkü hâliyle donar." },
        { w: "VERİMLİLİK", c: "Aynı iş hep daha yavaş, daha pahalı yapılır." },
        { w: "YENİ PAZARLAR", c: "Kimse “Bunu başka kime sunabilirim?” diye sormaz." }
      ],
      reveal: "Kaybolan her kelime, girişimcinin bir <b>fonksiyonuydu.</b>",
      notes: "Soruyu sorun. → kelimeler gelir ve kendiliğinden tek tek kaybolur (≈8 sn) — siz konuşun. → 'Kaybolan her şey girişimcinin fonksiyonuydu.' (≈30 sn)"
    },
    factors: {
      label: "ÜRETİM FAKTÖRLERİ",
      head1: "Ekonomide üç kaynak bekler.",
      head2: "Onları harekete geçiren <b>dördüncüsü:</b>",
      inputs: [
        { t: "DOĞAL KAYNAK", c: "toprak, su, maden" },
        { t: "EMEK", c: "insanların bilgisi ve çalışması" },
        { t: "SERMAYE", c: "para, makine, bina" }
      ],
      core: "GİRİŞİMCİ",
      output: ["ÜRÜN", "HİZMET", "DEĞER"],
      foot: "Ekonomide girişimci, <b>dördüncü üretim faktörü</b> olarak kabul edilir.",
      notes: "Ders kitabındaki üretim faktörleri: doğal kaynak, emek, sermaye, girişimci. Girişimci olmadan diğer üçü bekleyen kaynaklardır."
    },
    schumpeter: {
      label: "JOSEPH SCHUMPETER · EKONOMİST · 1942",
      lines: ["Ekonomi durağan değildir.", "Yeni olan, eskiyi<br><b>içeriden</b> değiştirir."],
      notes: "Schumpeter'i tanıtın: Avusturyalı ekonomist. Fikrini bir örnekle göstereceğiz."
    },
    beforeAfter: {
      left: "ESKİ DÜZEN",
      right: "YENİ DÜZEN",
      hint: "TIKLA · YIK VE YENİDEN KUR",
      rows: [
        { old: "DVD KİRALAMAK", neu: "İSTEDİĞİN AN İZLEMEK", tag: "NETFLIX · STREAMING · 2007" },
        { old: "TAKSİYİ YOLDA YAKALAMAK", neu: "ARACI TELEFONDAN ÇAĞIRMAK", tag: "UBER · PLATFORM EKONOMİSİ · 2009" },
        { old: "CD SATIN ALMAK", neu: "MÜZİĞE ABONE OLMAK", tag: "SPOTIFY · 2008" },
        { old: "SADECE OTEL", neu: "HER EV BİR KONAKLAMA YERİ", tag: "AIRBNB · 2008" }
      ],
      notes: "→ ile dört satır sırayla 'yıkılır', alttaki cümle gelir: girişimci bazen eski çalışma biçimini geçersiz kılar. (≈20 sn)"
    },
    message: {
      lines: ["Girişimci yalnızca<br>yeni bir şirket kurmaz.", "Bazen eski çalışma biçimini<br><b>geçersiz kılar.</b>"],
      notes: "Yavaş okuyun. İkinci cümleden sonra kavramın adını vereceğiz."
    },
    destruction: {
      w1: "YARATICI",
      w2: "YIKIM",
      text: "Yeni bir ürün ya da yöntem eskisinin yerini alır. Eski düzen yıkılırken yeni işler, yeni pazarlar ve yeni değer doğar.",
      source: "Joseph Schumpeter · Kapitalizm, Sosyalizm ve Demokrasi · 1942",
      question: "Yaratıcı yıkımın bir bedeli var mı? <b>Kim öder?</b>",
      notes: "Kavramın adı: yaratıcı yıkım (Schumpeter, 1942). Sağdaki soruyu hızlıca sorun; tek cevap alıp geçin: eski işlerde çalışanlar, eski şirketler. Dosya 05'e köprü. (≈20 sn)"
    }
  },

  /* ---------------- DOSYA 03 ---------------- */
  f03: {
    dna: {
      label: "GEN HARİTASI",
      title: "Girişimcide olması gereken özellikler",
      layers: [
        { key: "K", n: "1", name: "KİŞİSEL", sub: "Kim olduğun", genes: ["Özgüven", "Yaratıcılık", "Kararlılık", "Bağımsız düşünebilme", "Belirsizliğe tolerans"] },
        { key: "D", n: "2", name: "DAVRANIŞSAL", sub: "Ne yaptığın", genes: ["İnisiyatif alma", "Hesaplanmış risk alma", "Fırsatları fark etme", "Planlama", "Problem çözme", "Başarısızlıktan öğrenme"] },
        { key: "S", n: "3", name: "SOSYAL", sub: "Kimlerle yaptığın", genes: ["İletişim", "Ekip kurma", "İkna", "Liderlik", "Network oluşturma", "Empati"] }
      ],
      note: "Gerçek DNA’nın aksine bu “genlerin” hiçbiri sabit değildir. <b>Hepsi geliştirilebilir.</b>",
      notes: "Kişisel katman açık gelir. → Davranışsal. → Sosyal; sonra hepsi birlikte yanar. Tek cümle: bunlar doğuştan değil, geliştirilebilir. (≈25 sn)"
    },
    blakely: {
      tag: "KANIT 03-A · KİŞİSEL",
      seen: "SONDAKİ VİDEODA DA ADI GEÇECEK",
      name: "SARA<br>BLAKELY",
      sub: "Spanx’in kurucusu",
      facts: ["Hiç işletme eğitimi almamıştı.", "Önceki işi: kapı kapı faks makinesi satmak.", "5.000 dolar birikimle başladı."],
      lead: "Çocukken babası, akşam yemeğinde her hafta aynı soruyu sorardı:",
      quote: "“Bu hafta neyde<br>başarısız oldun?”",
      question: "Bu soru bir çocuğa ne öğretir?",
      answer: "Başarısızlık utanılacak bir şey değil; <b>denediğinin kanıtıdır.</b>",
      genes: ["K-01 ÖZGÜVEN", "K-05 BELİRSİZLİĞE TOLERANS"],
      notes: "Kişisel katmanın kanıtı. Soru kendiliğinden gelir; sınıfa sorun, → ile cevap. (≈20 sn)"
    },
    dyson: {
      tag: "KANIT 03-B · DAVRANIŞSAL",
      name: "JAMES<br>DYSON",
      sub: "Torbasız elektrik süpürgesi",
      count: 5127,
      countLabel: "PROTOTİP",
      lines: ["5.126 prototip başarısız oldu.", "<b>5.127’ncisi çalıştı.</b>"],
      gridCap: "HER KARE BİR PROTOTİP · YAKLAŞIK 5 YIL",
      question: "Bu hikâye hangi özelliği gösteriyor?",
      options: ["Şans", "Israr ve öğrenme", "Para", "Karizma"],
      correct: 1,
      note: "Her prototip bir öncekinden küçük bir farkla ayrılıyordu. Israr, aynı şeyi tekrar etmek değil; <b>her denemede bir şey öğrenmekti.</b>",
      genes: ["K-03 KARARLILIK", "D-06 BAŞARISIZLIKTAN ÖĞRENME"],
      notes: "Izgara dolar, soru kendiliğinden gelir. Sınıf 3 saniyede oylasın (şıklara tıklayabilir ya da A–D). → doğru cevap. (≈25 sn)"
    },
    duo: {
      label: "KANIT 03-A · KİŞİSEL   ·   KANIT 03-C · SOSYAL",
      question: "Bu iki hikâye hangi özellikleri gösteriyor?",
      a: { tag: "KİŞİSEL", lead: "Çocukken babası her hafta sorardı:", big: "“Bu hafta neyde başarısız oldun?”", answer: "Başarısızlık utanç değil; <b>denemenin kanıtı.</b>" },
      b: { tag: "SOSYAL", lead: "Kraft’ın kapattığı fabrikayı, eski çalışanlarından bazılarıyla yeniden açtı.", big: "2016: Şirketin %10’una varan hisse çalışanlara.", answer: "Bir fabrikayı kimse <b>tek başına</b> çalıştıramaz." },
      notes: "Kişisel ve sosyal katmanın kanıtları yan yana. Soru kendiliğinden gelir; sınıfa sorun, → ile özellikler. Blakely ve Ulukaya'nın adı sondaki videoda da geçecek. (≈20 sn)"
    },
    ulukaya: {
      tag: "KANIT 03-C · SOSYAL",
      seen: "SONDAKİ VİDEODA DA ADI GEÇECEK",
      name: "HAMDİ<br>ULUKAYA",
      sub: "Chobani’nin kurucusu · Erzincan, İliç doğumlu",
      timeline: [
        { y: "2005", t: "Kraft’ın kapattığı eski bir yoğurt fabrikasının ilanını gördü. Krediyle satın aldı." },
        { y: "", t: "Fabrikanın eski çalışanlarından bazılarını yeniden işe aldı." },
        { y: "2007", t: "İlk Chobani yoğurtları raflara çıktı." },
        { y: "2016", t: "Şirketin %10’una varan hisseyi yaklaşık 2.000 çalışanına dağıttı." }
      ],
      question: "Bir fabrikayı tek başına kim çalıştırabilir?",
      answer: "Kimse.",
      genes: ["S-02 EKİP KURMA", "S-04 LİDERLİK", "S-06 EMPATİ"],
      notes: "Sosyal katmanın kanıtı. Soru kendiliğinden gelir; → ile 'Kimse.' (≈20 sn)"
    },
    persist: {
      lines: ["Sadece ısrar<br>yeterli mi?", "Hayır."],
      notes: "Dyson'dan sonra 'demek ki hep ısrar etmeliyiz' sonucu çıkabilir. Bunu bozuyoruz."
    },
    juicero: {
      tag: "KARŞI KANIT · SADECE ISRAR YETERLİ Mİ?",
      name: "JUICERO",
      sub: "Wi-Fi bağlantılı meyve suyu presi · 2013–2017",
      d1: { v: "120 milyon $", l: "YATIRIMCILARDAN TOPLANAN PARA" },
      d2: { a: "699 $", b: "399 $", l: "MAKİNENİN FİYATI · 2016 → 2017" },
      exp: "2017’de Bloomberg muhabirleri bir deney yaptı: meyve paketlerini makine yerine <b>elle</b> sıktılar.",
      q: "Sonuç?",
      result: "MAKİNE ≈ İKİ EL",
      resultSub: "Neredeyse aynı miktarda meyve suyu. 400 dolarlık makine aslında neyi çözüyordu?",
      end: "EYLÜL 2017 · ŞİRKET KAPANDI",
      lesson: "Sorun ısrarda değildi.<br><b>Neye ısrar edildiğindeydi.</b>",
      notes: "Veriler ve Bloomberg deneyi kendiliğinden gelir; 'Sonuç?' sorusunda 2 sn bekleyin. → sonuç ve ders. (≈20 sn)"
    },
    stubborn: {
      big: "İnat ile kararlılık<br>aynı şey değildir.",
      a: { h: "İNAT", rows: ["“Fikrim doğru, dünya yanlış.”", "Geri bildirimi gürültü sayar.", "Yanlış yolda hızlanır."] },
      b: { h: "KARARLILIK", rows: ["“Hedefim sabit, yolum değişebilir.”", "Geri bildirimi veri sayar.", "Yanlış yolda durur, yön değiştirir."] },
      final: "Başarılı girişimci fikrine değil,<br><b>GERİ BİLDİRİME</b> bağlı kalır.",
      notes: "Tek ekran. İki küçük animasyon farkı anlatır: inat aynı duvara çarpar, kararlılık yolu değiştirip hedefe ulaşır. Son cümleyi okuyun. (≈15 sn)"
    },
    callback: {
      stages: [4],
      lines: ["Videoda bir başarısızlık anı var.", "İzlerken karar verin: <b>inat mı, kararlılık mı?</b>"],
      question: "Başarısızlıktan sonra değişen ne: fikir mi, yol mu?",
      notes: "İpucu ekranı. Sınıf bu soruyu videoyu izlerken cevaplayacak; final otopsisinde geri döneceğiz."
    }
  },

  /* ---------------- DOSYA 04 ---------------- */
  f04: {
    scenario: {
      label: "SİMÜLASYON 04-1",
      text: "Bir okul etkinliği için <b>5.000 TL</b> bütçen var. Bir ürün fikrin var.",
      ask: "Ne yaparsın?",
      options: [
        "5.000 TL’nin tamamıyla ilk ürünü üretirim.",
        "500 TL ile küçük bir prototip yapıp insanlara test ettiririm.",
        "Hiç risk almam.",
        "Arkadaşlarım beğeniyorsa direkt başlarım."
      ],
      outcomes: [
        { t: "Etkinlik günü.", d: "Ürün çıktı ama kimsenin beklediği gibi değildi. Bütçe bitti; ikinci deneme yok.", risk: "5.000 TL", learn: "ÇOK GEÇ" },
        { t: "Test günü.", d: "On kişi denedi. Çoğu aynı şeyi söyledi: “Şunu değiştir.” Kalan 4.500 TL ile doğru ürünü yaptın.", risk: "500 TL", learn: "YÜKSEK" },
        { t: "Hiçbir şey olmadı.", d: "Hiçbir şey kaybetmedin. Hiçbir şey de öğrenmedin.", risk: "0 TL", learn: "YOK" },
        { t: "Arkadaş onayı.", d: "Arkadaşların seni seviyor. Müşterilerin seni tanımıyor bile.", risk: "5.000 TL", learn: "YANILTICI" }
      ],
      pick: "Sınıf oylasın, sonra bir seçeneğe tıklayın · A–D",
      chartTitle: "RİSK × BİLGİ",
      xLabel: "RİSKE ATILAN PARA",
      yTop: "GERÇEK BİLGİ",
      yMid: "BİLGİ YOK",
      yBottom: "YANILTICI BİLGİ",
      zone: "AZ RİSK · ÇOK BİLGİ",
      disclaimer: "Simülasyon · sonuçlar temsilîdir",
      notes: "Sınıfa oylatın (el kaldırma, 5 sn); en çok oy alan seçeneği ve B'yi tıklayıp açın. → grafik: B az riskle en çok gerçek bilgiyi verir, D'nin bilgisi yanıltıcıdır. → 'DOĞRU RİSKİ, DOĞRU MİKTARDA, DOĞRU BİLGİYLE ALMAKTIR.' (≈40 sn)"
    },
    truth: {
      lines: ["Girişimcilik en çok<br>risk almak değildir.", "DOĞRU RİSKİ,<br>DOĞRU MİKTARDA,<br>DOĞRU BİLGİYLE<br><b>ALMAKTIR.</b>"],
      tag: "D-02 · HESAPLANMIŞ RİSK",
      notes: "Bu, davranışsal özelliklerden 'hesaplanmış risk alma'nın tanımı."
    },
    callback: {
      stages: [5],
      lines: ["Videoda bir risk anı var.", "İzlerken onu bu <b>üç ölçüyle</b> tartın:"],
      checks: ["DOĞRU RİSK?", "DOĞRU MİKTAR?", "DOĞRU BİLGİ?"],
      notes: "İpucu ekranı. Videodaki risk anını bu üç ölçüyle tartmalarını isteyin; tek doğru cevap yok, amaç ölçüleri kullanmak."
    },
    self: {
      label: "KENDİ DOSYAN · 5 SORU",
      sub: "Puan yok. Doğru cevap yok. Sadece dürüstlük.",
      answers: ["EVET", "BAZEN", "HENÜZ DEĞİL"],
      questions: [
        { q: "Bir problemi görünce çözmeye çalışır mıyım?", g: "D-01 İNİSİYATİF · D-03 FIRSATLARI FARK ETME" },
        { q: "Belirsizlik beni tamamen durdurur mu?", g: "K-05 BELİRSİZLİĞE TOLERANS" },
        { q: "Eleştiri aldığımda fikrimi geliştirebilir miyim?", g: "D-06 ÖĞRENME · GERİ BİLDİRİM" },
        { q: "İnsanları bir hedef etrafında toplayabilir miyim?", g: "S-02 EKİP KURMA · S-04 LİDERLİK" },
        { q: "Başarısızlıktan sonra tekrar deneyebilir miyim?", g: "K-03 KARARLILIK" }
      ],
      notes: "Beş soru birlikte görünür. Sınıf 8–10 saniye içinden cevaplasın. Puan yok. (≈12 sn)"
    },
    result: {
      loading: "PROFİL ANALİZİ",
      label: "SONUÇ",
      l1: "Girişimcilik bir kişilik tipi değildir.",
      l2: "Bir düşünme ve<br>hareket etme biçimidir.",
      l3: "Yani soru “Olabilir miyim?” değil;<br>“Nereden başlarım?”",
      notes: "Simülasyondan hemen sonra gelir; tek ekran, kendiliğinden akar. Ç sorusunun cevabı: girişimcilik bir kişilik tipi değil, öğrenilebilir bir davranış biçimi. (≈10 sn)"
    }
  },

  /* ---------------- DOSYA 05 ---------------- */
  f05: {
    why: {
      big: "BİR FİKİR<br>NEDEN YAŞAR?",
      sub: "İKİ VAKA · İKİ KARŞILAŞTIRMA",
      notes: "Ünlü girişimciler galerisi yapmıyoruz; aynı değişimle karşılaşan şirketleri yan yana koyuyoruz."
    },
    netflix: {
      L: { name: "NETFLIX", sub: "1997 · Kaliforniya" },
      R: { name: "BLOCKBUSTER", sub: "1985 · Dallas" },
      rows: [
        { y: "1997", l: "Kuruldu. Fikir: DVD’leri postayla kiralamak.", r: "" },
        { y: "2000", l: "Şirketi Blockbuster’a <b>50 milyon dolara</b> satmayı teklif etti.", r: "Reddetti." },
        { y: "2004", l: "", r: "Zirve: 9.000’den fazla mağaza. Online kiralamayı da başlattı — ama işin merkezi hâlâ mağazalardı." },
        { y: "2007", l: "Kendi DVD işini eskitecek olan <b>streaming’i</b> başlattı.", r: "" },
        { y: "2010", l: "", r: "İflas başvurusu." },
        { y: "2013", l: "İlk büyük kendi yapımı dizisi <b>House of Cards</b> yayında.", r: "" }
      ],
      question: "2000 · Netflix’in kurucuları Blockbuster’a bir teklif götürdü. <b>Neydi?</b>",
      lesson: "Netflix kendi başarılı işini eskitmeyi göze aldı.<br>Blockbuster, onu başarılı yapan şeyi korumaya çalıştı.",
      notes: "→ 2000 sorusu: sınıf 3 sn tahmin etsin. → 50 milyon dolar ve sonraki yıllar kendiliğinden gelir, en sonda ders. (≈25 sn)"
    },
    kodakQ: {
      label: "SINIFA SORU",
      q: "Dijital fotoğraf makinesini<br>ilk hangi şirket geliştirdi?",
      options: ["CANON", "KODAK", "NIKON", "SONY"],
      correct: 1,
      year: "1975",
      who: "Kodak mühendisi Steven Sasson",
      chips: ["0,01 MEGAPİKSEL", "SİYAH-BEYAZ", "TEK KARE: 23 SANİYE", "KAYIT: KASET"],
      notes: "Cevabı hemen göstermeyin! Sınıf tahmin etsin. Çoğu Sony ya da Canon der. → ile KODAK."
    },
    kodakMyth: {
      tag: "İNTERNET EFSANESİ",
      myth: "“Kodak dijital kamerayı icat etti, korkup sakladı ve bu yüzden battı.”",
      truthTag: "GERÇEK DAHA İLGİNÇ",
      facts: [
        "Kodak dijitale yatırım yaptı. <b>2005’te</b> ABD’de en çok dijital fotoğraf makinesi satan şirketti.",
        "Ama asıl kazancı filmden geliyordu: film, kâğıt, kimyasal, baskı. <b>Dijital fotoğraf bunların hiçbirine ihtiyaç duymadı.</b>",
        "2001’de fotoğraf sitesi Ofoto’yu aldı; onu insanları fotoğraf <b>bastırmaya</b> yönlendirmek için kullandı. İnsanlar ise basmak yerine paylaşmaya başlamıştı.",
        "Akıllı telefonlar gelince dijital kamera pazarı da küçüldü. <b>2012:</b> iflas koruması başvurusu."
      ],
      conclusion: "Kodak teknolojiyi kaçırmadı.<br><b>İş modelini değiştiremedi.</b>",
      fuji: "Aynı krizde <b>Fujifilm</b>, film için geliştirdiği bilgiyi sağlığa, ekranlara ve kozmetiğe taşıdı — ve hayatta kaldı.",
      notes: "Efsaneyi okuyun. → çizilir; 4 gerçek, sonuç ve Fujifilm kendiliğinden sırayla gelir. (≈20 sn)"
    },
    fuji: {
      label: "AYNI KRİZ · İKİ CEVAP",
      q: "Film pazarı çöktüğünde<br>bir film şirketi ne yapabilir?",
      L: {
        name: "FUJIFILM",
        lead: "Film için geliştirdiği bilgiyi yeni alanlara taşıdı:",
        items: [
          { k: "SAĞLIK", t: "Tıbbi görüntüleme ve ilaç" },
          { k: "EKRAN", t: "LCD ekranlar için optik filmler" },
          { k: "KOZMETİK", t: "Filmdeki kolajen ve “solmayı önleme” bilgisiyle cilt bakımı (2007)" }
        ]
      },
      R: {
        name: "KODAK",
        lead: "Kazancını film ve baskıya bağlı tuttu.",
        items: [
          { k: "2012", t: "İflas koruması başvurusu" },
          { k: "BUGÜN", t: "Çok daha küçük bir şirket olarak devam ediyor" }
        ]
      },
      lesson: "Fujifilm ürününü değil, <b>bilgisini</b> korudu.",
      notes: "Önce soruyu sınıfa sorun. Sonra iki cevap. Fujifilm 'biz film şirketiyiz' yerine 'biz neyi iyi biliyoruz' diye düşündü: kolajen, ışık, kimya."
    },
    formula: {
      q: "BAŞARI FORMÜLÜ?",
      no: "YOK.",
      after: "Ama başarı olasılığını artıran şeyler var.",
      notes: "Kendiliğinden akar: 1 sn sonra kırmızı çizgi ve YOK. Alttaki cümle gelince →. (≈8 sn)"
    },
    loop: {
      nodes: ["PROBLEM", "MÜŞTERİYİ ANLAMAK", "DENEMEK", "GERİ BİLDİRİM", "DEĞİŞMEK", "TEKRAR DENEMEK"],
      c1: "Başarı bir çizgi değil.",
      c2: "Bir <b>döngü.</b>",
      ann: [
        { k: "DYSON", t: "5.127 tur" },
        { k: "NETFLIX", t: "DVD → streaming → kendi içerik" },
        { k: "SONDAKİ VİDEO", t: "Bu döngüyü arayın." }
      ],
      counterLabel: "TUR",
      notes: "Önce düz liste. → liste bir döngüye dönüşür: bu adımlar bir kez değil, tekrar tekrar yaşanır. (≈20 sn)"
    }
  },

  /* ---------------- FİNAL ---------------- */
  final: {
    caseHead: "DOSYA 00 · OTOPSİ",
    caseName: "CHARGEBOX",
    caseSub: "Bir lise öğrencisinin okul şarj dolabı girişimi",
    stages: [
      { s: "PROBLEM", c: "FIRSAT", f: "DOSYA 01" },
      { s: "FİKİR", c: "İNOVASYON", f: "DOSYA 02" },
      { s: "İLK DENEME", c: "GERİ BİLDİRİM", f: "DOSYA 05" },
      { s: "BAŞARISIZLIK", c: "DAYANIKLILIK", f: "DOSYA 03" },
      { s: "RİSK", c: "RİSK", f: "DOSYA 04" },
      { s: "EKİP", c: "EKİP", f: "DOSYA 03" },
      { s: "BÜYÜME", c: "DEĞER", f: "DOSYA 01" }
    ],
    caseNotes: "Önce sınıfa sorun: 'Hangi kavramları yakaladınız?' Sonra → ile videodaki yedi aşamaya kavramlar yerleşir. Her birinin hangi dosyada işlendiğini gösterin.",
    question: "ChargeBox’ın<br>gerçek ürünü neydi?",
    timer: "TAHMİN SÜRESİ",
    a1: "Şarj dolabı değil.",
    a2: "BİR PROBLEMİN<br>ÇÖZÜMÜ.",
    a3: "Çünkü müşteriler<br>ürün satın almaz.",
    a4: "ÇÖZÜM<br>SATIN ALIR.",
    questionNotes: "Soruyu sorun, 5 saniyelik çizgi dolarken tahmin alın. → 'Şarj dolabı değil — bir problemin çözümü.' → 'Müşteriler ürün değil, çözüm satın alır.' (≈20 sn)",
    title1: "BİR FİKRİN",
    title2: "OTOPSİSİ",
    quote: "Girişimci olmak,<br>geleceği tahmin etmek değildir.<br>Başkalarının geçtiği yerde<br><b>bir problem, bir fırsat<br>veya daha iyi bir yol</b> görebilmektir.",
    status: "DURUM: <b>İNCELENDİ</b>",
    layersTitle: "İNCELENEN KATMANLAR",
    layerDone: "İNCELENDİ",
    titleNotes: "Açılıştaki numune etiketi artık 'İNCELENDİ' diyor. Son cümleyi birlikte okuyun. Teşekkür edin. (Bir kez daha → basarsanız gizli ekran açılır.)"
  },

  bonus: {
    l1: "DOSYA KAPANDI.",
    l2: "Yoksa yeni mi açılıyor?",
    notes: "Gizli ekran. Birkaç saniye sessiz kalın."
  },

  /* ---------------- KAYNAKLAR ---------------- */
  sources: {
    label: "EKLER — KAYNAKLAR",
    items: [
      { k: "DOSYA 01–04", t: "Ders kitabı, 2. Ünite: Girişimci ve Başarılı Girişimcilerin Özellikleri." },
      { k: "DOSYA 02", t: "Joseph A. Schumpeter, <i>Capitalism, Socialism and Democracy</i>, 1942 — yaratıcı yıkım." },
      { k: "DOSYA 02", t: "Kuruluş / hizmete giriş yılları: Netflix streaming (2007), Spotify (2008), Airbnb (2008), Uber (2009) — şirketlerin resmî tarihçeleri." },
      { k: "DOSYA 03", t: "J. Dyson ile röportaj, “Failure Doesn’t Suck”, <i>Fast Company</i>, 2007 — 5.127 prototip." },
      { k: "DOSYA 03", t: "S. Blakely röportajları, <i>CNBC</i> (2019, 2020); <i>TODAY</i> — babasının “başarısızlık” sorusu, 5.000 $ birikim." },
      { k: "DOSYA 03", t: "Chobani tarihçesi; <i>The New York Times</i> ve <i>Fortune</i>, Nisan 2016 — çalışanlara hisse." },
      { k: "DOSYA 03", t: "E. Huet & O. Zaleski, “Silicon Valley’s $400 Juicer May Be Feeling the Squeeze”, <i>Bloomberg</i>, Nisan 2017; şirketin kapanış duyurusu, Eylül 2017." },
      { k: "DOSYA 05", t: "M. Randolph, <i>That Will Never Work</i>, 2019 — 50 milyon dolarlık teklif; Blockbuster iflas başvurusu, Eylül 2010." },
      { k: "DOSYA 05", t: "IEEE Milestone: “Handheld Digital Camera, 1975” (S. Sasson, Kodak)." },
      { k: "DOSYA 05", t: "AP / NBC News, “Kodak tops U.S. digital-camera market”, 2006 (2005 verileri)." },
      { k: "DOSYA 05", t: "S. D. Anthony, “Kodak’s Downfall Wasn’t About Technology”, <i>Harvard Business Review</i>, 2016 — Ofoto." },
      { k: "DOSYA 05", t: "Fujifilm kurumsal yayınları; <i>Nippon.com</i> ve Harvard D3 vaka notları — Astalift (2007), sağlık ve ekran filmleri." }
    ],
    foot: "Tüm grafikler bu sunum için hazırlanmıştır. Simülasyon sonuçları temsilîdir. Şirket adları yalnızca tipografik olarak kullanılmıştır.",
    notes: "Kaynaklar. İstenirse gösterilir."
  },

  /* ---------------- ChargeBox aşamaları (videodaki sıra) ---------------- */
  chargebox: ["PROBLEM", "FİKİR", "İLK DENEME", "BAŞARISIZLIK", "RİSK", "EKİP", "BÜYÜME"],
  callbackLabel: "▶ DOSYA 00 · MÜHÜRLÜ KAYIT · İPUCU",
  callbackTitle: "Sondaki videoda<br>bunu arayın.",
  callbackQ: "İZLERKEN",
  classQuestion: "SINIFA SORU"
};
