/* Kitora not defteri · hg606 · Yoğunluk ve Arazi Kullanımı
   Kaynak: AP HuG CED Topic 6.6 (IMP-6.A.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg606",
  amac: "Bu konu konutların kentte ne kadar sıkışık ya da seyrek dizildiğini anlatıyor. Düşük, orta ve yüksek yoğunluklu konutu, bunları biçimlendiren kültür, teknoloji ve gelişim döngülerini ve boş arsaları doldurmayı (*infill*) öğreneceksin.",
  bolumler: [
    {
      baslik: "Yoğunluk nedir?",
      kisa: "Konut yoğunluğu, birim alana düşen konut sayısıdır; toplam nüfus değildir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Residential density", tr: "konut yoğunluğu", tanim: "Birim alana düşen konut (ya da kişi) sayısı, örneğin hektar başına konut. Yoğunluk arttıkça aynı alanda daha çok insan yaşar.", ornek: "Bir arsada tek ev varsa düşük, 40 daire varsa yüksek yoğunluk." },
            { ikon: "🗺️", terim: "Land use", tr: "arazi kullanımı", tanim: "Bir arazinin ne için kullanıldığı: konut, ticaret, sanayi, park ya da tarım. Konut alanları kentin arazi kullanımının büyük kısmını oluşturur.", ornek: "Mahalledeki apartmanlar konut arazisi, çarşı ticaret arazisidir." }
          ] },
        { tip: "ornek", baslik: "Hektar başına konut", durum: "A mahallesinde 6 hektarlık alanda 120 konut var. B mahallesinde 12 hektarlık alanda 60 konut var. Hangisi daha yoğun?",
          adimlar: ["A: 120 ÷ 6 = 20 konut/hektar.", "B: 60 ÷ 12 = 5 konut/hektar.", "20 ÷ 5 = 4."],
          sonuc: "A mahallesi, B'den ==4 kat daha yoğundur==. Alan arttıkça yoğunluk bölümle hesaplanır, toplam konut sayısıyla değil." },
        { tip: "tuzak", metin: "Konut sayısı çok olan mahalle her zaman yoğun mahalle değildir.", yanlis: "Daha çok konutu olan mahalle daha yoğundur.", dogru: "Yoğunluk = konut sayısı ÷ alan. 200 konutlu ama 100 hektarlık bir mahalle (2 konut/ha), 50 konutlu 1 hektarlık bir mahalleden (50 konut/ha) ==çok daha seyrektir==." }
      ]
    },
    {
      baslik: "Düşük, orta ve yüksek yoğunluk",
      kisa: "Müstakil ev düşük, bitişik ve küçük apartman orta, kule yüksek yoğunluktur.",
      bloklar: [
        { tip: "tablo", baslik: "Üç yoğunluk düzeyi", head: ["Düzey", "Konut tipi", "Nerede?", "Ulaşım"], rows: [
            ["Düşük", "Müstakil ev, geniş arsa, bahçe", "Banliyö, uzak çevre", "Otomobile bağımlı"],
            ["Orta", "Bitişik nizam, ikiz ev, 3–5 katlı apartman", "Eski mahalleler, merkeze yakın çevre", "Yürüyüş, otobüs ve araç karışık"],
            ["Yüksek", "Çok katlı apartman ve kuleler", "Kent merkezi, iş merkezleri, metro hatları", "Yürüyüş ve toplu taşıma"]
          ] },
        { tip: "ikili", sol: { ikon: "🏡", baslik: "Düşük yoğunluk", maddeler: ["Müstakil evler, geniş arsalar", "Araçsız ulaşım zor; dükkân ve okul uzakta"] },
          sag: { ikon: "🏙️", baslik: "Yüksek yoğunluk", maddeler: ["Çok katlı binalar, küçük arsalar", "Yürünebilir; toplu taşıma ve mahalle dükkânı yakın"] },
          oyun: [
            { metin: "Her evin bahçesi ve garajı var, markete araçla gidiliyor.", cevap: "sol", neden: "Düşük yoğunluk ve araç bağımlılığı." },
            { metin: "Metro çıkışında çok katlı apartmanlar, altlarında kafe ve market.", cevap: "sag", neden: "Yüksek yoğunluk ve karma kullanım." },
            { metin: "Bir hektarda tek ev bulunan, ormanla çevrili site.", cevap: "sol", neden: "Çok geniş arsa: düşük yoğunluk." },
            { metin: "Aynı arsada 30 katlı bir rezidans yükseliyor.", cevap: "sag", neden: "Dikey büyüme: yüksek yoğunluk." }
          ] }
      ]
    },
    {
      baslik: "Yoğunluk eğrisi: merkezden uzaklaştıkça",
      kisa: "Ulaşım teknolojisi değiştikçe yoğunluk eğrisi yatıklaşır; doldurma ortasını yükseltir.",
      bloklar: [
        { tip: "grafik", baslik: "Konut yoğunluğunun merkezden uzaklığa göre değişimi (şematik)", xlabel: "Merkezden uzaklık (km)", ylabel: "Konut yoğunluğu", xmax: 10, ymax: 10,
          xticks: [{ v: 0, label: "0" }, { v: 5, label: "5" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "e1", tip: "egri", renk: 1, kesik: true, etiket: "", noktalar: [[0, 9], [2, 5.5], [4, 2.8], [6, 1.2], [8, 0.5], [10, 0.2]], gizli: true },
            { id: "e2", tip: "egri", renk: 2, kesik: true, etiket: "", noktalar: [[0, 6], [2, 4.5], [4, 3.3], [6, 2.4], [8, 1.6], [10, 1.1]], gizli: true },
            { id: "c", tip: "egri", renk: 0, etiket: "Yaya", noktalar: [[0, 9], [2, 5.5], [4, 2.8], [6, 1.2], [8, 0.5], [10, 0.2]] },
            { id: "yz", tip: "yazi", x: 7, y: 8.6, metin: "Konutlar merkeze sıkışık", gizli: true }
          ],
          durumlar: [
            { metin: "==Yaya ve at arabası çağı==: insanlar işe yürüyerek gider, bu yüzden merkez çok sıkışık, dışarısı seyrektir.", goster: ["yz"] },
            { metin: "==Tramvay ve otomobil çağı==: uzak yerler ulaşılabilir hale gelir. Merkezin yoğunluğu düşer, çevre yükselir; eğri yatıklaşır (eski eğri kesikli).", goster: ["e1"], gizle: ["yz"], set: { c: { etiket: "Otomobil", noktalar: [[0, 6], [2, 4.5], [4, 3.3], [6, 2.4], [8, 1.6], [10, 1.1]] } } },
            { metin: "==*Infill* (doldurma)==: boş arsalara ve eski binaların yerine yeni apartmanlar yapılır; merkez ve orta halkada yoğunluk yeniden yükselir.", goster: ["e2"], set: { c: { etiket: "Doldurma", noktalar: [[0, 7.5], [2, 6], [4, 4.6], [6, 3], [8, 1.7], [10, 1.4]] } } }
          ] },
        { tip: "not", metin: "Bu şematik bir resimdir: gerçek kentlerde eğri kentin tarihine, coğrafyasına ve planlamasına göre değişir. Sınavda öğrenilmesi gereken fikir, ulaşım teknolojisinin yoğunluğun dağılımını değiştirdiğidir." }
      ]
    },
    {
      baslik: "Konut düzeni kültürü ve teknolojiyi yansıtır",
      kisa: "Konut yoğunluğu kültürün, teknolojinin ve gelişim döngülerinin izini taşır.",
      bloklar: [
        { tip: "tablo", baslik: "Konutu biçimlendiren etkenler", head: ["Etken", "Konutu nasıl biçimlendirir?", "Örnek"], rows: [
            ["Kültür", "İnsanlar bahçeli ev mi, komşulu apartman mı istiyor? Aile ve komşuluk anlayışı", "Bahçeli ev hayali yaygınsa düşük yoğunluk, apartman kültürü yaygınsa yüksek yoğunluk"],
            ["Teknoloji", "Ulaşım, asansör, çelik iskelet ve beton yüksek yapıyı mümkün kılar", "Asansör olmadan 20 kat yapılamaz; otomobil banliyöyü doğurur"],
            ["Kalkınma döngüsü", "Her dönemde yapılan konut o dönemin parası ve teknolojisini yansıtır", "Eski mahalleler sıkışık, savaş sonrası banliyöler seyrek"],
            ["Arsa fiyatı ve kıtlık", "Arsa pahalıysa yukarı doğru, ucuzsa yanlara doğru büyür", "Dar ve dağlık kentlerde kule, geniş ovada müstakil"]
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "Yaya çağı", baslik: "Sıkışık merkez", metin: "Yürüme mesafesinde yapılan sıkışık, yüksek yoğunluklu mahalleler." },
            { tarih: "Tramvay çağı", baslik: "Hat boyunca büyüme", metin: "Yerleşim raylı hatlar boyunca şerit şerit uzar." },
            { tarih: "Otomobil çağı", baslik: "Seyrek banliyöler", metin: "Müstakil evler, geniş arsalar ve otoparklar yayılır." },
            { tarih: "Günümüz", baslik: "Yoğunlaşma", metin: "Pahalı arsa, trafik ve çevre kaygısı yüzünden merkezde ve hat boyunda yeniden yoğunlaşma." }
          ] }
      ]
    },
    {
      baslik: "Doldurma (*infill*)",
      kisa: "*Infill*, kentin içindeki boş ya da az kullanılan arsaları yapılaştırarak yoğunluğu artırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Infill (infilling)", tr: "doldurma", tanim: "Kentin yapılaşmış alanı içindeki boş ya da az kullanılan arsalara yeni bina yapmak. Yeni araziye taşmadan yoğunluğu artırır.", ornek: "Eski bir otopark arsasına 40 daireli bir apartman yapılması." }
          ] },
        { tip: "ornek", baslik: "Doldurmanın yoğunluğa etkisi", durum: "Bir mahalle 10 hektar ve 200 konuttan oluşuyor. Belediye boş arsalara 100 yeni konut ekliyor. Yoğunluk nasıl değişir?",
          adimlar: ["Önce: 200 ÷ 10 = 20 konut/ha.", "Sonra: (200 + 100) ÷ 10 = 30 konut/ha.", "30 ÷ 20 = 1,5."],
          sonuc: "Yoğunluk 20'den 30'a çıkar: ==%50 artış==. Mahallenin alanı aynı, yeni araziye gerek yok." },
        { tip: "tuzak", metin: "*Infill* ile *sprawl* karıştırılır.", yanlis: "*Infill* kentin dışındaki tarım arazisine konut yapmaktır.", dogru: "*Infill* kentin ==içinde==, zaten yapılaşmış alanda boş arsayı doldurur; *sprawl* ise dışarıda yeni araziyi tüketir. *Infill* mevcut yol ve kanalı kullandığı için yayılmayı azaltır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Konut yoğunluğu = konut (ya da kişi) sayısı ÷ alan; toplam nüfus değildir (20 konut/ha, 5 konut/ha örneği).",
            "Düşük yoğunluk: müstakil ev, geniş arsa, araç bağımlı banliyö. Orta: bitişik ve küçük apartman. Yüksek: kule, merkez ve toplu taşıma hattı.",
            "Ulaşım teknolojisi yoğunluğun dağılışını değiştirir: yaya çağı sıkışık merkez, otomobil çağı seyrek çevre.",
            "Konut düzeni kültürün (tercihlerin), teknolojinin (asansör, otomobil) ve kalkınma döngülerinin izini taşır.",
            "Konut düzeni kültürü yansıtır ve onu biçimlendirir: araç yönelimli mahalle insanları araca bağımlı kılar.",
            "*Infill* kentin içindeki boş arsaları doldurarak yoğunluğu artırır ve yayılmayı azaltır (20'den 30 konut/ha örneği).",
            "Yoğunlaşma, merkezde ve toplu taşıma hatları boyunca yeniden önem kazanıyor."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "X mahallesi 8 hektarda 80 konut, Y mahallesi 20 hektarda 100 konut içeriyor. Hangisi doğrudur?",
      opts: ["X'in yoğunluğu 10 konut/ha, Y'nin 5 konut/ha'dır; X daha yoğundur", "Y daha yoğundur, çünkü daha çok konutu var", "İkisinin yoğunluğu aynıdır", "X'in yoğunluğu 8, Y'nin yoğunluğu 20 konut/ha'dır"],
      a: 0, why: "X: 80 ÷ 8 = 10, Y: 100 ÷ 20 = 5 konut/ha; X iki kat yoğundur. En çekici yanlış şık B'dir: toplam konut sayısı yoğunluk değildir, alana bölünmesi gerekir." },
    { q: "Bir mahallede bahçeli müstakil evler, geniş sokaklar ve her evde garaj bulunuyor; markete ve okula araçla gidiliyor. Bu mahallenin özelliği hangisidir?",
      opts: ["Yüksek yoğunluk ve toplu taşıma bağımlılığı", "Orta yoğunluk ve karma kullanım", "Düşük yoğunluk ve otomobil bağımlılığı", "Yüksek yoğunluk ve yürünebilirlik"],
      a: 2, why: "Müstakil ev, geniş arsa ve araçla ulaşım düşük yoğunluğun özelliğidir. B şıkkı çekici ama yanlıştır: karma kullanım ve orta yoğunluk dükkân ve apartmanların yakın olduğu mahalleleri anlatır." },
    { q: "Tablo, aynı kentin iki dönemdeki konut yoğunluğunu göstermektedir. Merkezden uzaklaştıkça yoğunluğun yatıklaştığı ikinci dönem en iyi hangi değişimle açıklanır?",
      fig: { type: "table", head: ["Merkezden uzaklık", "1. dönem yoğunluk", "2. dönem yoğunluk"], rows: [["0 km", "9", "6"], ["4 km", "2,8", "3,3"], ["8 km", "0,5", "1,6"]], caption: "Konut yoğunluğu (şematik)" },
      opts: ["Yaya ulaşımın yaygınlaşması", "Otomobil ve tramvayın yaygınlaşması: insanlar çevreye yayıldı", "Kentin nüfus kaybetmesi", "Merkezde gökdelen sayısının artması"],
      a: 1, why: "Merkezde yoğunluk düşüyor (9'dan 6'ya), çevrede artıyor (8 km'de 0,5'ten 1,6'ya): ulaşım teknolojisi insanları dışarı yaymış. D yanlıştır: gökdelen merkezi yoğunlaştırırdı, yoğunluk düşmüyor. A da yanlıştır: yaya çağı merkezi sıkıştırır." },
    { q: "Belediye, kentin içindeki boş otopark arsalarına ve kullanılmayan depo alanlarına apartman yapıyor. Bu uygulamanın sonucu hangisidir?",
      opts: ["Kentin tarım arazilerine doğru yayılması", "Yeni bir banliyö kurulması", "Düşük yoğunluklu konutların artması", "*Infill*: mevcut altyapıyı kullanarak yoğunluğu artırması"],
      a: 3, why: "Yapılaşmış alan içindeki boş arsaları doldurmak *infill*'dir ve yoğunluğu artırır. A en çekici yanlıştır: bu *sprawl*'ı anlatır; *infill* tam tersine yayılmayı azaltır." },
    { q: "Konut yapı biçimiyle ilgili hangi ifade, 'konut düzeni kültürü yansıtır ve biçimlendirir' fikrine en çok uyar?",
      opts: ["Asansör icat edilmeden yüksek apartman yapılamamıştır", "Bir toplumda bahçeli ev kültürü yaygınsa seyrek yerleşim doğar; seyrek yerleşim de insanları araca bağımlı kılar", "Konut fiyatı sadece arsanın büyüklüğüne bağlıdır", "Sıkışık mahalleler her zaman eski mahallelerdir"],
      a: 1, why: "B şıkkı iki yönlü ilişkiyi anlatır: kültür konutu biçimlendirir, konut da yaşam tarzını etkiler. A teknolojinin etkisini gösterir; doğru ama 'kültürü yansıtma ve biçimlendirme' ilişkisini kapsamaz. C ve D ise tek bir etkeni ya da tek bir durumu mutlaklaştırır; yanlıştır." }
  ]
};
