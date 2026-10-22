/* Kitora not defteri · hg212 · Göçün Etkileri
   Kaynak: AP HuG CED Unit 2, Topic 2.12 (IMP-2.E). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg212",
  amac: "Bu konu göçün gönderen ve alan ülkelerde bıraktığı siyasi, ekonomik ve kültürel izleri anlatıyor: döviz havalesi (*remittance*), beyin göçü (*brain drain*), işgücü ve vergi, etnik mahalleler ve göç tartışmaları. Tarihten ve bugünden örneklerle bu etkileri ayırt etmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Göçün üç etki alanı",
      kisa: "Göç hem gönderen hem alan ülkede ekonomik, siyasi ve kültürel sonuçlar doğurur.",
      bloklar: [
        { tip: "harita", merkez: "Göçün etkileri", dallar: [
            { baslik: "Ekonomik", alt: "Döviz havalesi, işgücü, beyin göçü" },
            { baslik: "Siyasi", alt: "Göç politikaları, tartışmalar, diaspora" },
            { baslik: "Kültürel", alt: "Etnik mahalleler, dil, yemek, din" }
          ] },
        { tip: "tablo", baslik: "Gönderen ve alan ülke için etkiler", head: ["Alan", "Gönderen ülke", "Alan ülke"], rows: [
            ["Ekonomik", "*Remittance* gelir getirir; işgücü ve nitelikli kişiler (*brain drain*) kaybedilir", "İşgücü açığı kapanır, vergi gelirleri artar; ücret ve kamu hizmeti tartışmaları çıkar"],
            ["Siyasi", "Hükümetler göçü teşvik ya da sınırlar; yurt dışındaki topluluk (*diaspora*) siyasete etki eder", "Göç politikası seçim konusu olur; göçmen karşıtı ve destekçi akımlar doğar"],
            ["Kültürel", "Aileler ayrılır, gelenekler değişir; yurt dışından yeni fikirler gelir", "Etnik mahalleler, yeni yemek, dil ve inançlar görülür; kültürel çeşitlilik ve gerginlik"]
          ] }
      ]
    },
    {
      baslik: "Döviz havalesi: *remittance*",
      kisa: "Göçmenlerin ülkesine gönderdiği para, birçok ülke için büyük bir gelir kaynağıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💸", terim: "Remittance", tr: "döviz havalesi", tanim: "Yurt dışında çalışan göçmenin ailesine ya da ülkesine gönderdiği para. Birçok ülke için resmî yardımdan ve yabancı yatırımdan büyük bir gelir kaynağıdır.", ornek: "Nepal, Tacikistan ve Tonga gibi ülkelerde havaleler GSYH'nin beşte birini aşar." }
          ] },
        { tip: "grafik", baslik: "Göçmen gider, para döner", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "k", tip: "nokta", x: 1.8, y: 5, etiket: "Kaynak" },
            { id: "h", tip: "nokta", x: 7.5, y: 5, etiket: "Hedef" },
            { id: "gm", tip: "ok", renk: 0, from: [2.6, 6.3], to: [6.7, 6.3], gizli: true },
            { id: "gmyz", tip: "yazi", x: 4.6, y: 7.2, metin: "göçmen işçi", gizli: true },
            { id: "pr", tip: "ok", renk: 1, from: [6.7, 3.7], to: [2.6, 3.7], gizli: true },
            { id: "pryz", tip: "yazi", x: 4.6, y: 2.7, metin: "döviz havalesi", gizli: true },
            { id: "ek", tip: "yazi", x: 3.2, y: 1.1, metin: "okul, konut, tüketim", gizli: true }
          ],
          durumlar: [
            { metin: "İki ülke: gelir düzeyi düşük *kaynak ülke* ve işgücü arayan *hedef ülke*." },
            { metin: "Kaynak ülkeden bir işçi hedef ülkeye çalışmaya gidiyor.", goster: ["gm", "gmyz"] },
            { metin: "İşçi maaşının bir kısmını ailesine gönderiyor: ==*remittance*==. Para kaynak ülkeye geri akar.", goster: ["pr", "pryz"] },
            { metin: "Gelen para ailenin okul, konut ve günlük tüketimini finanse eder; ==yoksulluğu azaltır== ve ülkeye döviz getirir.", goster: ["ek"] }
          ] },
        { tip: "ornek", baslik: "Remittance hane gelirinin ne kadarı?", durum: "Köydeki bir haneye yerel işlerden aylık 200 dolar giriyor. Almanya'da çalışan çocukları da aylık 300 dolar gönderiyor. Toplam gelirin yüzde kaçı *remittance*? Para kesilirse ne olur?",
          adimlar: ["Toplam gelir: 200 + 300 = 500 dolar.", "*Remittance* payı: 300 ÷ 500 = 0,6, yani %60.", "Havale kesilirse gelir 500'den 200'e düşer."],
          sonuc: "Hane gelirinin ==%60'ı== *remittance*'tır; para kesilirse gelir ==%60 azalır==." },
        { tip: "tuzak", metin: "*Remittance* tek başına bir çözüm değildir.", yanlis: "Döviz havalesi kaynak ülke için yalnızca olumlu bir gelişmedir.", dogru: "Yoksulluğu ve döviz açığını azaltır ama ekonomi dış gelire ==bağımlı== hale gelebilir; göçmenin gitmesiyle işgücü ve aile bütünlüğü de kaybedilir." }
      ]
    },
    {
      baslik: "Gönderen ülkede işgücü ve beyin göçü",
      kisa: "Nitelikli ve genç kişilerin gitmesi gönderen ülkenin işgücünü ve becerisini azaltır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧠", terim: "Brain drain", tr: "beyin göçü", tanim: "Eğitimli ve nitelikli kişilerin (doktor, mühendis, öğretmen) daha iyi koşullar için ülkeden ayrılması. Ülke, onları yetiştirmek için yaptığı yatırımı kaybeder.", ornek: "Genç hekim ve mühendislerin yurt dışına gitmesi Türkiye'de de sık tartışılır." },
            { ikon: "🔄", terim: "Return migration", tr: "geri dönüş göçü", tanim: "Göçmenlerin yurt dışında öğrendikleri beceri ve biriktirdikleri parayla ülkesine dönmesi; kayıp kısmen geri kazanılır (*brain gain*).", ornek: "Yurt dışından dönüp işletme açan mühendis." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🧑‍🌾", baslik: "Genç işgücü kaybı", metin: "Genç yetişkinler gidince köy ve bölge nüfusu yaşlanır, doğum sayısı azalır." },
            { ikon: "🏥", baslik: "Hizmet açığı", metin: "Doktor ve öğretmen gibi nitelikli çalışanlar gidince sağlık ve eğitim zayıflar." },
            { ikon: "👪", baslik: "Aile ayrılığı", metin: "Çocuklar anne ya da babadan ayrı büyür; köyde kadın ve yaşlı payı artabilir." },
            { ikon: "📢", baslik: "Devletin tutumu", metin: "Bazı hükümetler remittance için işçi göndermeyi teşvik eder (Filipinler gibi); bazıları kaybı azaltmak için kısıtlar." }
          ] }
      ]
    },
    {
      baslik: "Alan ülkede ekonomik etkiler",
      kisa: "Göçmenler işgücü açığını kapatır, vergi öder; ama ücret ve hizmet tartışmaları çıkar.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🛠️", baslik: "İşgücü açığını kapatır", metin: "İnşaat, bakım, tarım ve sağlık gibi alanlarda çalışacak kişi bulmayı kolaylaştırır." },
            { ikon: "🧓", baslik: "Yaşlanan nüfusu dengeler", metin: "Genç göçmenler çalışma çağı nüfusunu artırır ve *dependency ratio*'yu düşürür (2.9)." },
            { ikon: "💼", baslik: "Vergi ve girişimcilik", metin: "Göçmenler vergi öder, işletme açar ve yeni talep yaratır." },
            { ikon: "⚖️", baslik: "Tartışmalı yönler", metin: "Düşük ücretli sektörlerde ücret rekabeti, okul ve sağlık hizmetlerine ek yük ve diploma denkliği sorunları (kalifiye göçmenin düşük nitelikli işte çalışması)." }
          ] },
        { tip: "ikili", sol: { ikon: "📤", baslik: "Gönderen ülke", maddeler: ["*Remittance* ve *brain drain*", "Gençlerin ve işçilerin kaybı"] },
          sag: { ikon: "📥", baslik: "Alan ülke", maddeler: ["İşgücü açığı kapanır, vergi artar", "Hizmet ve ücret tartışmaları"] },
          oyun: [
            { metin: "Doktor ve mühendislerin ayrılması hizmetleri zayıflatıyor.", cevap: "sol", neden: "Nitelikli kişi kaybı: gönderen ülke." },
            { metin: "İşgücü açığı olan hastanelerde göçmen hemşireler çalışıyor.", cevap: "sag", neden: "Alan ülke, açığı göçmenle kapatıyor." },
            { metin: "Yurt dışına giden işçiler her ay aileye para gönderiyor.", cevap: "sol", neden: "*Remittance* gönderen ülkeye gider." },
            { metin: "Göçmen çocuk sayısı arttıkça okullara ek öğretmen gerekiyor.", cevap: "sag", neden: "Alan ülkede kamu hizmetlerine ek talep." },
            { metin: "Gençlerin gitmesiyle köy nüfusu yaşlanıyor.", cevap: "sol", neden: "Genç işgücü kaybı: gönderen ülke." }
          ] },
        { tip: "tuzak", metin: "Göçmenlerin ekonomik etkisi tek yönlü değildir.", yanlis: "Göçmenler gelince yerli çalışanların işini mutlaka elinden alır.", dogru: "Göçmenler çoğu zaman işgücü açığını kapatır ve yeni talep yaratır; ama bazı düşük ücretli sektörlerde ücret rekabeti ve kamu hizmetlerine baskı tartışması vardır. Sınavda ==iki tarafı== da yaz." }
      ]
    },
    {
      baslik: "Kültürel etkiler: tarihten bugüne",
      kisa: "Göçmenler dil, yemek ve inançlarıyla yeni yerin kültürel manzarasını değiştirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏘️", terim: "Ethnic enclave", tr: "etnik mahalle", tanim: "Aynı kökenden göçmenlerin kümelendiği, dil, yemek ve dinî yapılarıyla ayırt edilen mahalle. Yeni gelenlere destek olur.", ornek: "Berlin'in Kreuzberg semti; Chinatown ve Little Italy mahalleleri." },
            { ikon: "🌍", terim: "Diaspora", tr: "diaspora", tanim: "Bir halkın anavatanından dünyaya dağılmış toplulukları. Kültürel bağlarını korur, çoğu zaman anavatan siyasetini ve ekonomisini etkiler.", ornek: "Yurt dışındaki Türk toplulukları; Çin diasporası." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "1840'lar", baslik: "İrlanda kıtlığı göçü", metin: "Kıtlıktan kaçan çok sayıda İrlandalı ABD'ye gitti; Boston gibi şehirlerin kültürünü ve siyasetini değiştirdi." },
            { tarih: "1916–1970", baslik: "Büyük Göç (Great Migration)", metin: "Milyonlarca Afrikalı Amerikalı güney kırsalından kuzey şehirlerine taşındı; müzik, kültür ve siyaset değişti." },
            { tarih: "1960'lardan", baslik: "Almanya'da Türk mahalleleri", metin: "Misafir işçi ve aileleri Berlin gibi şehirlerde mahalleler, camiler ve yeni bir mutfak (döner) oluşturdu." },
            { tarih: "Bugün", baslik: "Körfez'de göçmen işçiler", metin: "Birleşik Arap Emirlikleri ve Katar gibi ülkelerde göçmenler nüfusun büyük çoğunluğunu oluşturuyor." }
          ] }
      ]
    },
    {
      baslik: "Siyasi etkiler",
      kisa: "Göç; sınır politikasını, seçim siyasetini ve ülkeler arası ilişkileri şekillendirir.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🛃", baslik: "Göç politikaları", metin: "Alan ülkeler kota, puan sistemi, sınır güvenliği ve vize kuralları koyar; bunlar seçim kampanyalarının konusudur." },
            { ikon: "🗣️", baslik: "Göçmen karşıtı ve destekçi akımlar", metin: "Bazı ülkelerde göçmen karşıtı (*nativist*) partiler güçlenir; bazı ülkelerde göçmen hakları savunuculuğu ve temsil artar." },
            { ikon: "🤝", baslik: "Ülkeler arası ilişkiler", metin: "Mülteci akımları yük paylaşımı tartışması yaratır; örneğin 2016'da AB ile Türkiye arasında göç mutabakatı yapıldı." },
            { ikon: "🌐", baslik: "Diaspora ve gönderen ülke", metin: "Yurt dışındaki topluluklar anavatan siyasetine etki eder; göçmenlerin oy hakkı ve temsili tartışma konusu olur." }
          ] },
        { tip: "tuzak", metin: "Göçün siyasi etkisi yalnız alan ülkede görülmez.", yanlis: "Göçün siyasi sonuçları yalnızca hedef ülkeyi ilgilendirir.", dogru: "==Gönderen ülke== de etkilenir: diaspora siyasete karışır, ekonomi *remittance*'a bağımlı olabilir ve hükümet göç politikasını (teşvik ya da kısıt) buna göre belirler." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Göç; ekonomik, siyasi ve kültürel etkiler doğurur ve bu etkiler hem gönderen hem alan ülkede görülür.",
            "*Remittance* = göçmenlerin ülkesine gönderdiği para: yoksulluğu azaltır, döviz getirir; ama dış gelire bağımlılık riski taşır. Örnek: hane gelirinin %60'ı.",
            "*Brain drain* = nitelikli kişilerin ayrılması (doktor, mühendis); gönderen ülke yetiştirme yatırımını kaybeder. *Return migration* kaybı kısmen telafi eder.",
            "Gönderen ülkede ayrıca genç işgücü kaybı, yaşlanma, aile ayrılığı görülür.",
            "Alan ülkede göçmenler işgücü açığını kapatır, vergi öder, yaşlanan nüfusu dengeler (*dependency ratio*); ücret rekabeti ve hizmet yükü tartışılır.",
            "Kültürel etki: etnik mahalleler (*ethnic enclave*), yeni dil, yemek ve inanç; *diaspora* anavatan bağını korur. Örnekler: İrlandalılar, Büyük Göç, Berlin'de Türkler.",
            "Siyasi etki: göç politikaları seçim konusu olur, göçmen karşıtı ve destekçi akımlar doğar, mülteci akımları ülkeler arası ilişkiyi etkiler (2016 AB–Türkiye).",
            "Sınavda her etkiyi hangi ülkede, hangi alanda (ekonomik, siyasi, kültürel) görüldüğüne göre sınıflandır."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir ülkenin GSYH'sinin beşte biri, yurt dışında çalışan vatandaşlarının gönderdiği paradan oluşmaktadır. Bu durumla ilgili en doğru yorum hangisidir?",
      opts: ["Ülke işgücü açığı yaşıyordur ve göçmen kabul etmelidir.", "Hane gelirleri artar, ama ekonomi dış gelire bağımlı hale gelebilir.", "Ülkenin *TFR* değeri kesinlikle düşüktür.", "Ülke *brain drain* yaşamaz çünkü para geri dönmektedir."],
      a: 1,
      why: "*Remittance* hane gelirini artırır ve yoksulluğu azaltır; ama büyük payı ekonomiyi dış gelire bağımlı kılar. D şıkkı çekicidir ama yanlıştır: para geri gelse bile nitelikli kişilerin kaybı (*brain drain*) yaşanıyor olabilir."
    },
    {
      q: "Tabloya göre X ülkesinde yetişen doktorların önemli bir bölümü yurt dışına gitmektedir. Bu durumun gönderen ülke için en olası sonucu hangisidir?",
      fig: { type: "table", head: ["Yıl", "Yetişen doktor", "Yurt dışına giden"], rows: [["2020", "1.000", "300"], ["2022", "1.000", "450"], ["2024", "1.000", "600"]], caption: "X ülkesi (varsayımsal)" },
      opts: ["Yabancı yatırımın hızla artması", "Doğurganlığın yükselmesi", "Göç alan ülkede vergi gelirinin azalması", "Sağlık hizmetlerinde nitelikli personel açığı ve eğitim yatırımının kaybı"],
      a: 3,
      why: "Yetişen doktorların yarısından fazlası ayrılırsa ülke sağlık hizmetinde açık yaşar ve yetiştirmeye yaptığı yatırımı kaybeder: *brain drain*. C şıkkı çekici ama yanlıştır: göçmen doktorlar alan ülkede vergi öder."
    },
    {
      q: "Genç nüfusu azalan, yaşlı payı yüksek bir ülke, çalışma çağındaki göçmenleri kabul etmeye başlıyor. Alan ülke için en olası demografik ve ekonomik etki hangisidir?",
      opts: ["Çalışma çağı nüfusu artar ve *dependency ratio* düşme eğilimine girer.", "Ülkenin yaşlı nüfus payı hızla artar.", "Emeklilik harcamaları artar çünkü göçmenler hemen emekli olur.", "Vergi geliri azalır çünkü göçmenler vergi ödemez."],
      a: 0,
      why: "Çalışma çağındaki göçmenler iş gücünü ve vergi tabanını büyütür; bu da çocuk ve yaşlı sayısının çalışanlara oranını (*dependency ratio*) düşürür. B, yaşlanmanın tersine bir çıkarımdır; C ve D ise göçmenlerin hemen emekli olduğu ya da vergi ödemediği gibi yanlış varsayımlara dayanır."
    },
    {
      q: "Aşağıdakilerden hangisi göçün alan ülkedeki siyasi bir etkisidir?",
      opts: ["Yurt dışından gelen para ile yerel harcamaların artması", "Etnik bir mahallede göçmenlerin kendi yemek ve dillerini sürdürmesi", "Seçim kampanyalarında kota ve sınır güvenliğinin ana konu hâline gelmesi", "Doktor ve mühendislerin ülkeden ayrılması"],
      a: 2,
      why: "Göç politikalarının seçimlerde tartışma konusu olması siyasi bir etkidir. A (*remittance*) ve D (*brain drain*) ekonomik, B ise kültürel etkidir; B en çekici çeldiricidir çünkü etnik mahalleler tartışma yaratabilir, ama kendisi kültürel bir olgudur."
    },
    {
      q: "Bir köyde bir haneye yerel işlerden aylık 300 dolar, yurt dışındaki bir akrabadan aylık 100 dolar *remittance* gelmektedir. Hane gelirinin yüzde kaçı *remittance*'tır?",
      opts: ["%25", "%33", "%75", "%100"],
      a: 0,
      why: "Toplam gelir 300 + 100 = 400 dolardır; 100 ÷ 400 = %25. B şıkkı (100 ÷ 300) paydaya yalnızca yerel geliri koyma hatasından çıkar."
    }
  ]
};
