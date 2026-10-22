/* Kitora not defteri · hg211 · Zorunlu ve Gönüllü Göç
   Kaynak: AP HuG CED Unit 2, Topic 2.11 (IMP-2.D). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg211",
  amac: "Bu konu göçün türlerini anlatıyor: zorunlu göç (kölelik, mülteci, ülke içinde yerinden edilmiş kişi, sığınmacı) ve gönüllü göç (uluslararası, ülke içi, zincir, kademeli, mevsimlik, misafir işçi, köyden kente). Senaryodaki göçmenin hangi türe girdiğini ayırt etmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Zorunlu mu, gönüllü mü?",
      kisa: "Zorunlu göçte kişinin seçme şansı yoktur; gönüllü göçte karar kişinindir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🚨", baslik: "*Forced migration* (zorunlu göç)", maddeler: ["Kişi zorla ya da hayatını korumak için yerinden olur", "Savaş, zulüm, köle ticareti, felaket"] },
          sag: { ikon: "🎒", baslik: "*Voluntary migration* (gönüllü göç)", maddeler: ["Kişi kendi kararıyla taşınır", "İş, eğitim, evlilik, daha iyi yaşam"] },
          oyun: [
            { metin: "İstanbul'da daha iyi bir iş için taşınan mühendis.", cevap: "sag", neden: "Kendi kararıyla taşınıyor: gönüllü." },
            { metin: "Savaş sırasında evini bırakıp sınırı geçmek zorunda kalan aile.", cevap: "sol", neden: "Hayatını korumak için ayrılıyor: zorunlu." },
            { metin: "Atlantik köle ticaretinde zorla Amerika'ya götürülen insanlar.", cevap: "sol", neden: "Kendi iradesi dışında götürülüyor: zorunlu." },
            { metin: "Üniversite için başka bir şehre giden öğrenci.", cevap: "sag", neden: "Kendi seçimi: gönüllü." }
          ] },
        { tip: "harita", merkez: "Göç türleri", dallar: [
            { baslik: "Zorunlu", alt: "Kölelik · mülteci · IDP · sığınmacı" },
            { baslik: "Gönüllü", alt: "Uluslararası · ülke içi · köyden kente · misafir işçi · zincir · kademeli · mevsimlik · transhumance" }
          ] },
        { tip: "tuzak", metin: "Gönüllü göç, itici etkenin olmadığı anlamına gelmez.", yanlis: "İşsizlik yüzünden başka şehre giden biri zorunlu göçmendir.", dogru: "Ekonomik zorluk gönüllü göçmeni de iter (*push*). Ayıran şey ==zorlamadır==: savaş, zulüm, köle ticareti ya da felaket kişinin seçme şansını ortadan kaldırıyorsa göç zorunludur." }
      ]
    },
    {
      baslik: "Zorunlu göçün türleri",
      kisa: "Kölelik, mülteci, ülke içinde yerinden edilmiş kişi ve sığınmacı zorunlu göçmendir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⛓️", terim: "Slavery", tr: "kölelik", tanim: "İnsanların zorla alınıp başka bir yere götürülmesi ve çalıştırılması. Atlantik köle ticaretinde on milyondan fazla Afrikalı Amerika'ya götürüldü.", ornek: "Zorla göç ettirilmiş Afrikalılar." },
            { ikon: "🛡️", terim: "Refugee", tr: "mülteci", tanim: "Zulüm korkusu (ırk, din, uyruk, siyasi görüş ya da toplumsal grup yüzünden) nedeniyle ülkesini terk edip uluslararası sınırı geçen ve dönemeyen kişi.", ornek: "Savaştan kaçıp komşu ülkeye geçen aile." },
            { ikon: "🏕️", terim: "Internally displaced person (IDP)", tr: "ülke içinde yerinden edilmiş kişi", tanim: "Evini zorla terk eden ama ==ülkesinin sınırlarını geçmeyen== kişi. Savaş, şiddet ya da doğal afet yüzünden olabilir.", ornek: "Şubat 2023 depremleri sonrası çok sayıda kişinin başka illere gitmesi." },
            { ikon: "📝", terim: "Asylum seeker", tr: "sığınmacı", tanim: "Başka bir ülkeye sığınıp koruma isteyen ama başvurusu ==henüz sonuçlanmamış== kişi. Başvurusu kabul edilirse mülteci olur.", ornek: "Sınırı geçip kabul kararını bekleyen kişi." }
          ] },
        { tip: "ikili", sol: { ikon: "🌍", baslik: "Sınırı geçti", maddeler: ["*Refugee* (mülteci)", "*Asylum seeker* (sığınmacı)"] },
          sag: { ikon: "🏠", baslik: "Ülke içinde kaldı", maddeler: ["*IDP*", "Evinden ayrıldı ama sınırı geçmedi"] },
          oyun: [
            { metin: "Depremde evi yıkılan aile, aynı ülkede başka bir ildeki akrabalarının yanına yerleşti.", cevap: "sag", neden: "Sınır geçilmedi: *IDP*." },
            { metin: "Savaş yüzünden komşu ülkeye geçen ve orada koruma bulan kişi.", cevap: "sol", neden: "Sınırı geçti: *refugee*." },
            { metin: "Sınırı geçip koruma isteyen ve kararı bekleyen kişi.", cevap: "sol", neden: "Sınırı geçti, başvuru sonuçlanmadı: *asylum seeker*." },
            { metin: "Sel yüzünden evini kaybedip aynı ülkedeki bir çadır kentte kalan kişi.", cevap: "sag", neden: "Ülkenin sınırları içinde kaldı: *IDP*." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "1500–1800'ler", baslik: "Atlantik köle ticareti", metin: "Zorla götürülen insanlar Afrika'dan Amerika'ya taşındı." },
            { tarih: "1830'lar", baslik: "Gözyaşı Yolu (Trail of Tears)", metin: "ABD hükümeti Cherokee gibi yerli halkları güneydoğudan Oklahoma bölgesine zorla yürüttü." },
            { tarih: "1923", baslik: "Türkiye–Yunanistan nüfus mübadelesi", metin: "Bir buçuk milyondan fazla insan, din esasına göre iki ülke arasında yer değiştirdi." },
            { tarih: "2011–", baslik: "Suriye iç savaşı", metin: "Milyonlarca Suriyeli mülteci komşu ülkelere (en çok Türkiye) ve Avrupa'ya gitti; milyonlar ülke içinde yerinden oldu." }
          ] },
        { tip: "tuzak", metin: "Kim mülteci, kim sığınmacı, kim IDP?", yanlis: "Evinden kaçan herkes mültecidir.", dogru: "==Sınırı geçmediyse== *IDP*; sınırı geçip başvurusu henüz sonuçlanmadıysa *asylum seeker*; koruma hakkı tanınmışsa *refugee*. Ekonomik nedenle taşınan göçmen de mülteci sayılmaz." }
      ]
    },
    {
      baslik: "Gönüllü göç: ülke içi, uluslararası ve misafir işçi",
      kisa: "Gönüllü göç ülke içinde ya da sınırlar ötesinde, kalıcı ya da geçici olabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✈️", terim: "Transnational migration", tr: "uluslararası göç", tanim: "Bir ülkeden başka bir ülkeye taşınmak: uluslararası sınırı aşar.", ornek: "Türkiye'den Almanya'ya yerleşen bir aile." },
            { ikon: "🗺️", terim: "Internal migration", tr: "ülke içi göç", tanim: "Aynı ülkenin sınırları içinde yer değiştirmek.", ornek: "Sivas'tan İstanbul'a taşınan aile." },
            { ikon: "🏙️", terim: "Rural-to-urban migration", tr: "kırdan kente göç", tanim: "Köylerden şehirlere taşınma; ülke içi göçün en yaygın biçimi ve kentleşmenin ana nedenidir.", ornek: "1950'lerden sonra köylerin şehirlere akması." },
            { ikon: "🧰", terim: "Guest worker", tr: "misafir işçi", tanim: "Bir ülkeye geçici çalışma izniyle giden işçi. Geçici olarak planlanır ama çoğu zaman uzun sürer.", ornek: "1960'larda Almanya'ya giden Türk işçileri; bugün Körfez ülkelerindeki işçiler." }
          ] },
        { tip: "ikili", sol: { ikon: "🌐", baslik: "*Transnational*", maddeler: ["Ülke sınırını aşar", "Vize, oturma izni gerekir"] },
          sag: { ikon: "🇹🇷", baslik: "*Internal*", maddeler: ["Aynı ülke içinde kalır", "Genelde yasal engel yoktur"] },
          oyun: [
            { metin: "Sivas'tan İstanbul'a taşınan aile.", cevap: "sag", neden: "Aynı ülke içinde: *internal*." },
            { metin: "Türk bir mühendisin Almanya'da işe başlaması.", cevap: "sol", neden: "Sınırı geçiyor: *transnational*." },
            { metin: "Köyden bölge merkezine taşınan genç.", cevap: "sag", neden: "Ülke içinde, kırdan kente: *internal*." },
            { metin: "Filipinli bir hemşirenin Birleşik Arap Emirlikleri'nde çalışmaya gitmesi.", cevap: "sol", neden: "Sınırı geçiyor: *transnational* (ve *guest worker*)." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "1961", baslik: "Türkiye–Almanya iş gücü anlaşması", metin: "Almanya'nın ekonomik büyümesi için işçi gerekiyordu; Türkiye'den yüz binlerce *guest worker* gitti." },
            { tarih: "1973", baslik: "İşçi alımı durduruldu", metin: "Almanya yeni işçi alımını durdurdu ama çoğu işçi kaldı ve ailelerini getirdi." },
            { tarih: "Bugün", baslik: "Geçici planlanan, kalıcı olan göç", metin: "Misafir işçilerin torunları Almanya'da büyüdü; Almanya'da büyük bir Türk kökenli topluluk oluştu." }
          ] }
      ]
    },
    {
      baslik: "Zincir ve kademeli göç",
      kisa: "Zincir göçte akrabalar birbirini çağırır; kademeli göçte kişi basamak basamak ilerler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Chain migration", tr: "zincir göç", tanim: "Göçmenlerin aynı yerden gelen akraba, hemşeri ve arkadaşlarının izinden aynı hedefe gitmesi. Önceden gidenler iş ve konut bulmaya yardım eder.", ornek: "Bir köylü İstanbul'a yerleşir; komşular ve akrabalar onun semtine gelir." },
            { ikon: "🪜", terim: "Step migration", tr: "kademeli göç", tanim: "Tek göçmenin ya da ailenin hedefe bir seferde değil, küçük adımlarla ilerlemesi: köy → kasaba → il merkezi → büyük şehir.", ornek: "Köyden önce kasabaya, sonra İstanbul'a." }
          ] },
        { tip: "grafik", baslik: "Kademeli göç ve zincir göç", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "k", tip: "nokta", x: 1.2, y: 1.5, etiket: "Köy" },
            { id: "ks", tip: "nokta", x: 3.2, y: 3.8, etiket: "Kasaba" },
            { id: "sh", tip: "nokta", x: 5.4, y: 6, etiket: "Şehir" },
            { id: "mt", tip: "nokta", x: 7, y: 8.3, etiket: "Metropol" },
            { id: "s1", tip: "ok", renk: 0, from: [1.5, 1.9], to: [2.9, 3.5], gizli: true },
            { id: "s2", tip: "ok", renk: 0, from: [3.5, 4.2], to: [5.1, 5.7], gizli: true },
            { id: "s3", tip: "ok", renk: 0, from: [5.7, 6.5], to: [6.8, 7.9], gizli: true },
            { id: "zin", tip: "ok", renk: 1, from: [2, 1.2], to: [7, 7.9], gizli: true },
            { id: "zinyz", tip: "yazi", x: 7.2, y: 4.2, metin: "akraba çağırıyor", gizli: true }
          ],
          durumlar: [
            { metin: "Dört yer var: köy, kasaba, şehir ve metropol. Köyden metropole nasıl gidilir?" },
            { metin: "==Kademeli göç==, ilk adım: köyden kasabaya taşınılır.", goster: ["s1"] },
            { metin: "İkinci adım: birkaç yıl sonra kasabadan şehre.", goster: ["s2"] },
            { metin: "Üçüncü adım: şehirden metropole. Hedefe ==basamak basamak== ulaşıldı.", goster: ["s3"] },
            { metin: "==Zincir göç==: metropolde yaşayan akrabalar köydekileri doğrudan kendi semtlerine çağırır; basamak atlanır.", gizle: ["s1", "s2", "s3"], goster: ["zin", "zinyz"] }
          ] },
        { tip: "ikili", sol: { ikon: "🔗", baslik: "*Chain migration*", maddeler: ["Başkaları ardından gelir", "Akraba ve hemşeri ağı"] },
          sag: { ikon: "🪜", baslik: "*Step migration*", maddeler: ["Aynı kişi küçük adımlarla ilerler", "Basamak basamak yerleşim"] },
          oyun: [
            { metin: "Bir kuzen İstanbul'da iş bulup ailesini ve komşularını çağırıyor; hepsi aynı semte yerleşiyor.", cevap: "sol", neden: "Önce gidenler arkadan gelenleri çekiyor: zincir." },
            { metin: "Genç önce köyden kasabaya, sonra il merkezine, sonra İstanbul'a taşınıyor.", cevap: "sag", neden: "Aynı kişi basamak basamak ilerliyor: kademeli." },
            { metin: "Aynı köyden gelenlerin yıllar içinde aynı mahalleye toplanması.", cevap: "sol", neden: "Hemşeri ağı: zincir." }
          ] }
      ]
    },
    {
      baslik: "Mevsimlik göç ve otlak göçü",
      kisa: "Bazı göçler dönemseldir: insanlar mevsim bitince geri döner.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🐑", terim: "Transhumance", tr: "otlak göçü", tanim: "Çobanların hayvanlarıyla mevsime göre dağ ve ova otlakları arasında periyodik hareketi: yazın yayla, kışın kışlak.", ornek: "Toros'ta yaz yaylasına çıkan Yörük aileler." },
            { ikon: "🍂", terim: "Seasonal migration", tr: "mevsimlik göç", tanim: "Belirli bir mevsimde iş için geçici yer değiştirme; iş bitince geri dönülür.", ornek: "Fındık hasadı için Karadeniz'e giden işçiler." }
          ] },
        { tip: "tablo", baslik: "Dönüş var mı?", head: ["Tür", "Kim", "Süre", "Dönüş"], rows: [
            ["*Transhumance*", "Çoban ve hayvanları", "Mevsimle, her yıl", "Döner"],
            ["*Seasonal migration*", "Hasat ve turizm işçileri", "Sezon boyunca", "Döner"],
            ["*Guest worker*", "Çalışma izniyle işçi", "Sözleşme süresi", "Planlıdır ama çoğu kalır"],
            ["*Rural-to-urban*", "Köylü aileler", "Kalıcı", "Genelde dönmez"]
          ], not: "Sınav ipucu: \"geri dönüyor\" ve \"mevsimle\" kelimeleri, kalıcı taşınmadan çok dönemsel göçü gösterir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Zorunlu göçte kişinin seçme şansı yoktur (savaş, zulüm, köle ticareti, felaket); gönüllü göçte karar kişinindir. Ekonomik zorluk gönüllü göçü de iter.",
            "Zorunlu göç türleri: *slavery*, *refugee*, *IDP* (ülke içinde yerinden edilmiş) ve *asylum seeker* (sığınmacı).",
            "*Refugee* ve *asylum seeker* sınırı geçmiştir; *IDP* sınırı geçmemiştir. *Asylum seeker* başvurusu kabul edilirse *refugee* olur.",
            "Gönüllü göç türleri: *transnational* (uluslararası), *internal* (ülke içi), *rural-to-urban* (köyden kente), *guest worker* (geçici çalışma izni).",
            "*Chain migration* = akrabalar ve hemşeriler birbirini çağırır; *step migration* = aynı kişi basamak basamak ilerler.",
            "*Transhumance* = çobanların hayvanlarıyla mevsime göre otlak değiştirmesi (yayla–kışlak); *seasonal migration* = mevsimlik iş göçü.",
            "Örnekler: Atlantik köle ticareti, 1923 Türkiye–Yunanistan mübadelesi, Suriye iç savaşı (zorunlu); 1961 Almanya misafir işçileri (gönüllü ve geçici).",
            "Sınavda kişiyi sınırı geçip geçmediğine, kararı kendisinin verip vermediğine ve yolun nasıl ilerlediğine göre sınıflandır."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir aile, çatışmalar nedeniyle evini terk edip aynı ülkenin güvenli sayılan başka bir bölgesine taşınıyor; uluslararası sınırı geçmiyor. Bu ailenin statüsü hangisidir?",
      opts: ["*Refugee* (mülteci)", "*Asylum seeker* (sığınmacı)", "*Internally displaced person* (ülke içinde yerinden edilmiş kişi)", "*Guest worker* (misafir işçi)"],
      a: 2,
      why: "Aile evinden zorla ayrılmıştır ama ülke sınırını geçmemiştir; bu *IDP*'dir. A şıkkı en çekici çeldiricidir: mülteci olmak için uluslararası sınırı aşmak gerekir."
    },
    {
      q: "Tabloda üç kişinin durumu verilmiştir. Statüleri sırasıyla (Ayşe, Bora, Cem) hangisidir?",
      fig: { type: "table", head: ["Kişi", "Sınırı geçti mi?", "Koruma başvurusu"], rows: [["Ayşe", "Evet", "Kabul edildi"], ["Bora", "Evet", "Karar bekleniyor"], ["Cem", "Hayır", "—"]], caption: "Varsayımsal kişiler" },
      opts: ["*Refugee*, *asylum seeker*, *IDP*", "*Asylum seeker*, *refugee*, *IDP*", "*IDP*, *refugee*, *asylum seeker*", "*Refugee*, *IDP*, *asylum seeker*"],
      a: 0,
      why: "Ayşe sınırı geçmiş ve koruma hakkı kazanmıştır: *refugee*. Bora sınırı geçmiş ama başvurusu sonuçlanmamıştır: *asylum seeker*. Cem sınırı geçmemiştir: *IDP*. B şıkkı Ayşe ve Bora'yı ters çevirir."
    },
    {
      q: "Bir genç önce köyünden kasabaya, birkaç yıl sonra il merkezine ve sonunda İstanbul'a taşınıyor. Bu göç hangi türe en iyi örnektir?",
      opts: ["*Chain migration*", "*Transhumance*", "*Guest worker* göçü", "*Step migration*"],
      a: 3,
      why: "Aynı kişi hedefe küçük adımlarla ilerlediği için bu kademeli göçtür. A şıkkı çekici ama yanlıştır: zincir göçte başkalarının ardından gelmesi vardır, tek kişinin basamak basamak ilerlemesi yoktur."
    },
    {
      q: "Bir çoban ailesi her yaz hayvanlarıyla yaylaya çıkıp kışın ovadaki kışlağa iniyor. Bu hareket en doğru nasıl adlandırılır?",
      opts: ["*Forced migration*", "*Transhumance*", "*Step migration*", "*Rural-to-urban migration*"],
      a: 1,
      why: "Çobanların hayvanlarıyla mevsime göre otlak değiştirmesi *transhumance*'tır; gönüllü ve dönemseldir. D şıkkı çekicidir ama köyden şehre kalıcı taşınmayı anlatır; bu aile her yıl geri döner."
    },
    {
      q: "1961'de Almanya, ekonomik büyümesi için Türkiye'den çalışma izniyle işçi aldı. Bu göçün en doğru tanımı hangisidir?",
      opts: ["Gönüllü, uluslararası ve başlangıçta geçici planlanan *guest worker* göçü", "Zorunlu *refugee* göçü", "Ülke içi *internal migration*", "Kalıcı yerleşim için *chain migration*"],
      a: 0,
      why: "Çalışma izniyle sınır aşan ve geçici planlanan göç, gönüllü ve uluslararası bir *guest worker* göçüdür. D şıkkı çekicidir çünkü sonradan aileler de gelmiştir, ama 1961 anlaşmasının tanımı misafir işçiliktir."
    }
  ]
};
