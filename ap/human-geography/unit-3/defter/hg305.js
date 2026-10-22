/* Kitora not defteri · hg305 · Yayılmanın Tarihsel Nedenleri
   Kaynak: AP HuG CED Topic 3.5 (SPS-3.A.1, SPS-3.A.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg305",
  amac: "Bu konu bugünkü kültürel örüntülerin tarihte nasıl şekillendiğini anlatıyor. *Colonialism*, *imperialism* ve ticaretin kültürleri nasıl yaydığını; *creolization* ile *lingua franca* gibi yeni kültürel biçimlerin nasıl doğduğunu öğreneceksin.",
  bolumler: [
    {
      baslik: "Tarihten bugüne üç güç",
      kisa: "Sömürgecilik, emperyalizm ve ticaret kültürleri birbirine yaklaştırdı ve karıştırdı.",
      bloklar: [
        { tip: "harita", merkez: "Tarihsel yayılma nedenleri", dallar: [
            { baslik: "*Colonialism*", alt: "bir bölgeyi doğrudan yönetmek" },
            { baslik: "*Imperialism*", alt: "güç ve etkiyi genişletmek" },
            { baslik: "Ticaret", alt: "mal ve fikir taşıyan yollar" },
            { baslik: "Yeni kültürel biçimler", alt: "*creolization*, *lingua franca*" }
          ] },
        { tip: "not", metin: "Kültürel özellikler ile küresel güçler karşılaşınca ==yeni kültürel ifade biçimleri== doğabilir. Dil, din, mutfak ve mimari bugün hâlâ bu tarihsel temasların izini taşır." }
      ]
    },
    {
      baslik: "*Colonialism* ve *imperialism*",
      kisa: "Sömürgecilik doğrudan yönetimdir; emperyalizm daha geniş bir güç genişletme politikasıdır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏴", baslik: "*Colonialism* (sömürgecilik)", maddeler: ["Bir devletin başka bir bölgeyi ele geçirip doğrudan yönetmesi", "Genellikle yerleşimciler ve yönetim kurulur, kaynaklar çıkarılır"] },
          sag: { ikon: "🌐", baslik: "*Imperialism* (emperyalizm)", maddeler: ["Bir devletin gücünü başka bölgeler üzerinde genişletmesi", "Askerî, ekonomik ya da siyasi yollarla olabilir; doğrudan yönetim şart değil"] },
          oyun: [
            { metin: "Bir Avrupa devleti Afrika'da toprak ele geçirip valilik ve yerleşim kuruyor.", cevap: "sol", neden: "Doğrudan yönetim ve yerleşim: *colonialism*." },
            { metin: "Güçlü bir devlet, başka bir ülkeyi borç ve ticaret anlaşmalarıyla etki altında tutuyor; orada yerleşimci yok.", cevap: "sag", neden: "Doğrudan yönetim yok, güç genişletmek var: *imperialism*." },
            { metin: "Bir imparatorluk, ele geçirdiği toprağa idare memurları ve çiftçiler yerleştiriyor.", cevap: "sol", neden: "Koloni kurmak: *colonialism*." },
            { metin: "Bir güç, başka ülkenin dilini ve eğitimini kendi kültürel etkisine sokmaya çalışıyor.", cevap: "sag", neden: "Kültürel etki yoluyla genişleme: *imperialism*." }
          ] },
        { tip: "tuzak", metin: "İkisi birbirinin zıddı değildir.", yanlis: "*Colonialism* ile *imperialism* aynı şeydir ya da biri ötekinin tersidir.", dogru: "*Colonialism*, ==*imperialism*'in bir biçimidir==: doğrudan yönetim ve yerleşim. *Imperialism* daha geniştir ve dolaylı etkiyi de kapsar." }
      ]
    },
    {
      baslik: "Ticaret yolları kültür de taşır",
      kisa: "Ticaret yolları yalnızca malı değil; din, teknik, yemek ve fikirleri de taşır.",
      bloklar: [
        { tip: "grafik", baslik: "İpek Yolu: mal ve fikir iki yöne akar", xlabel: "Doğu → Batı", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "yol", tip: "cizgi", renk: 0, from: [1, 5], to: [9, 5] },
            { id: "cin", tip: "nokta", x: 1, y: 5, etiket: "Çin", kilavuz: true },
            { id: "ort", tip: "nokta", x: 4, y: 5, etiket: "Orta Asya", kilavuz: true },
            { id: "ist", tip: "nokta", x: 7, y: 5, etiket: "İstanbul", kilavuz: true },
            { id: "ven", tip: "nokta", x: 9, y: 5, etiket: "Venedik", kilavuz: true },
            { id: "mal", tip: "ok", renk: 1, from: [1.3, 6.2], to: [8.7, 6.2], gizli: true },
            { id: "maly", tip: "yazi", x: 5, y: 7.1, metin: "ipek, baharat, çay batıya", gizli: true },
            { id: "fik", tip: "ok", renk: 2, from: [8.7, 3.8], to: [1.3, 3.8], gizli: true },
            { id: "fiky", tip: "yazi", x: 5, y: 2.6, metin: "din ve fikirler de iki yöne", gizli: true },
            { id: "ek", tip: "yazi", x: 5, y: 9.1, metin: "Kültürel temas = yeni örüntüler", gizli: true }
          ],
          durumlar: [
            { metin: "Doğu ile batıyı bağlayan bir ticaret koridoru: İpek Yolu ve ona bağlı kentler." },
            { metin: "Mallar yola düşer: ==ipek, baharat, çay== doğudan batıya gider.", goster: ["mal", "maly"] },
            { metin: "Ama yol yalnız mal taşımaz; ==din, teknik ve fikirler== de iki yönde akar (örneğin Budizm Hindistan'dan Çin'e).", goster: ["fik", "fiky"] },
            { metin: "Tüccarların uğradığı kentlerde farklı kültürler karşılaşır ve karışır.", goster: ["ek"] }
          ] },
        { tip: "tablo", baslik: "Ticaretin bıraktığı izler", head: ["Ürün ya da fikir", "Yol", "Bugünkü iz"], rows: [
            ["Kahve", "Yemen'den Osmanlı toprakları üzerinden Avrupa'ya", "Kahvehane ve kafe kültürü"],
            ["Domates, patates, mısır, biber", "Amerika'dan Avrupa ve Anadolu'ya", "Türk mutfağının vazgeçilmezleri"],
            ["Budizm", "Hindistan'dan Orta Asya yoluyla Doğu Asya'ya", "Çin, Japonya, Kore'deki tapınaklar"]
          ] }
      ]
    },
    {
      baslik: "Yeni kültürel biçimler: *creolization* ve *lingua franca*",
      kisa: "Kültürler karşılaşınca karışık diller ve ortak iletişim dilleri doğar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌀", terim: "Creolization", tr: "karma kültür oluşumu", tanim: "İki ya da daha fazla kültürün (örneğin sömürgeci ve yerli kültürün) karışarak yepyeni bir kültürel biçim oluşturması.", ornek: "Haiti Kreyolu: Fransızcanın Afrika dilleriyle karışmış hâli." },
            { ikon: "🗣️", terim: "Lingua franca", tr: "ortak iletişim dili", tanim: "Ana dilleri farklı insanların ticaret ya da yönetim için ortak kullandığı dil.", ornek: "Doğu Afrika'da Svahili, bugün dünya iş dünyasında İngilizce." },
            { ikon: "🔤", terim: "Pidgin ve creole", tr: "karma dil türleri", tanim: "*Pidgin*: farklı dillerden insanların iletişim için geliştirdiği basit dil, kimsenin ana dili değildir. *Creole*: bir pidgin'in bir topluluğun ana dili hâline gelmesi.", ornek: "Haiti Kreyolu bir *creole* dilidir." }
          ] },
        { tip: "tuzak", metin: "Karma dil bozuk dil değil, yeni bir dildir.", yanlis: "*Creole* diller, \"bozulmuş\" Fransızca ya da İngilizcedir.", dogru: "*Creole*, kendi dilbilgisi ve ana dili konuşan topluluğu olan ==tam bir dildir==. *Lingua franca* ise ana dil olmak zorunda değildir; ortak anlaşma aracıdır." }
      ]
    },
    {
      baslik: "Sömürge mirası bugün",
      kisa: "Sömürge dönemi dil, din, sınır ve şehir planında bugün hâlâ izlenir.",
      bloklar: [
        { tip: "tablo", baslik: "Dört bölge, dört miras", head: ["Bölge", "Güç", "Bugünkü iz"], rows: [
            ["Latin Amerika", "İspanya, Portekiz", "İspanyolca ve Portekizce, Katoliklik"],
            ["Güney Asya", "Britanya", "İngilizce ortak dil olarak, kriket, demiryolu ağı"],
            ["Batı ve Orta Afrika", "Fransa, Britanya, diğer Avrupa devletleri", "Resmî diller; Avrupa güçlerinin çizdiği sınırlar (Berlin Konferansı, 1884–85)"],
            ["Karayipler (Haiti)", "Fransa", "Haiti Kreyolu, Fransızca ve Afrika mirasının karışımı"]
          ], not: "Sınırların etnik grupları gözetmeden çizilmesi bugün de çatışma kaynağı olabilir." },
        { tip: "ornek", baslik: "Resmî dil ve ortak dil", durum: "Bir ülkede devlet dairelerinin resmî dili, halkın ana dili olmayan eski sömürgeci devletin dilidir ve farklı bölgelerden insanlar çoğu zaman bu dille anlaşır. Bu iki gözlem hangi kavramlarla açıklanır?",
          adimlar: ["Resmî dilin eski sömürgeci devletten gelmesi *colonialism* mirasıdır.", "Farklı ana dilleri olan insanların onunla anlaşması, onu bir *lingua franca* yapar."],
          sonuc: "Sömürge dönemi ==resmî dili==, günümüzde ==*lingua franca*== olarak da kullanılabilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Colonialism*, *imperialism* ve ticaret kültürel örüntüleri şekillendirdi.",
            "*Colonialism*: bir bölgeyi doğrudan yönetmek ve yerleşmek.",
            "*Imperialism*: güç ve etkiyi genişletmek; askerî, ekonomik ya da siyasi olabilir. *Colonialism* onun bir biçimidir.",
            "Ticaret yolları (İpek Yolu gibi) mal, din, teknik ve fikir taşır.",
            "*Creolization*: kültürlerin karışarak yeni bir biçim oluşturması.",
            "*Lingua franca*: farklı dilli insanların ortak kullandığı iletişim dili (Svahili, İngilizce).",
            "*Pidgin* basit iletişim dilidir; *creole* ise bir topluluğun ana dili olmuş karma dildir.",
            "Dil, din, sınırlar ve şehir planı bugün hâlâ sömürge ve ticaret izlerini taşır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Karayiplerde, Afrikalı kölelerin ve Fransız yerleşimcilerin dillerinin karışması sonucu, bugün bir halkın ana dili olarak konuşulan yeni bir dil ortaya çıktı. Bu durum hangisini örneklendirir?",
      opts: ["*Hierarchical diffusion*", "*Creolization*", "*Imperialism*", "*Ethnocentrism*"],
      a: 1,
      why: "İki kültürün karışarak yeni bir biçim oluşturması *creolization*'dır ve ortaya çıkan dil *creole*'dır. C şıkkı çekici: *imperialism* bu tarihsel arka planın nedenlerinden biri olabilir, ama kültürel karışımın adı değildir." },
    { q: "Doğu Afrika'da birçok farklı ana dil konuşan tüccar, pazarlarda Svahili ile anlaşıyor. Svahili bu durumda ne işlev görür?",
      opts: ["*Cultural hearth*", "*Sacred space*", "*Creole*", "*Lingua franca*"],
      a: 3,
      why: "Ana dilleri farklı insanların ortak anlaşma aracı olan dil *lingua franca*'dır. C şıkkı en çekici yanlış: *creole* bir pidgin'in ana dil olmuş hâlidir; bu senaryoda dil yalnızca anlaşma aracıdır." },
    { q: "Tabloya göre hangisi söylenebilir?",
      fig: { type: "table", caption: "İki eski sömürge bölgesi", head: ["Bölge", "Resmî dil", "Sınırların çizilişi"], rows: [["A", "Fransızca", "Düz, geometrik; etnik gruplar bölünmüş"], ["B", "İngilizce", "Doğal engeller boyunca; yerel gruplar korunmuş"]] },
      opts: ["A bölgesinin sınırları, yerli halkların kararlarıyla çizilmiştir", "A bölgesindeki düz sınırlar, sömürge güçlerinin yerel grupları gözetmeyen kararlarının izini taşır", "B bölgesinde sömürge etkisi hiç görülmez", "İki bölgenin resmî dili bağımsızlıktan sonra seçilmiştir"],
      a: 1,
      why: "Etnik grupları bölen düz sınırlar, dışarıdan çizilmiş sömürge sınırlarına tipiktir. A şıkkı tersini söylüyor: sınırlar yerli halkların kararı olsaydı gruplar bölünmezdi." },
    { q: "Güçlü bir devlet, daha küçük bir ülkeye ağır borç verip onun ticaret politikalarını kontrol ediyor; ülkeye yerleşimci ya da valilik göndermiyor. Bu durum için hangisi en uygundur?",
      opts: ["*Colonialism*", "*Relocation diffusion*", "*Imperialism*", "*Cultural relativism*"],
      a: 2,
      why: "Doğrudan yönetim ve yerleşim olmadan ekonomik yoldan etki genişletmek *imperialism*'dir. A şıkkı en çekici yanlış: *colonialism* doğrudan yönetim ve yerleşim gerektirir." },
    { q: "Kahvenin Yemen'den Osmanlı topraklarına, oradan da Avrupa'ya yayılması, aşağıdaki tarihsel nedenlerden hangisini en iyi gösterir?",
      opts: ["Ticaret yollarının kültürel özellikleri taşıması", "Yerel dillerin yok olması", "*Ethnocentrism*'in azalması", "Sınırların etnik gruplara göre çizilmesi"],
      a: 0,
      why: "Ticaret ağları mal ve alışkanlıkları taşır: kahve ve kahvehane kültürü buna örnektir. C şıkkı çekici ama konu dışı: tutumlarla ilgili bir açıklama yok." }
  ]
};
