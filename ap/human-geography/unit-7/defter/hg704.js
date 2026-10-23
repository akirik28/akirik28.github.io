/* Kitpath not defteri · hg704 · Kadınlar ve Ekonomik Kalkınma
   Kaynak: AP HuG CED Topic 7.4 (SPS-7.D.1–D.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg704",
  amac: "Bu konu ülkeler kalkındıkça kadınların rolünün nasıl değiştiğini anlatıyor. Daha çok kadının çalışmasına rağmen neden eşitlik olmadığını ve mikrokredinin kadınlara nasıl küçük işletme kurma imkânı verdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Kalkındıkça kadınların rolü değişir",
      kisa: "Kalkınma arttıkça kadınlar daha çok okur, daha geç evlenir ve daha çok ücretli çalışır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌾", baslik: "Düşük gelirli, tarım ağırlıklı ülke", maddeler: ["Kadınlar çoğunlukla tarım ve ev işlerinde, çoğu ücretsiz", "Doğurganlık yüksek, kız çocuklarının eğitimi sınırlı, erken evlilik yaygın"] },
          sag: { ikon: "🏢", baslik: "Yüksek gelirli, sanayi ve hizmet ağırlıklı ülke", maddeler: ["Kadınlar daha çok okuyor ve ücretli işte çalışıyor", "Doğurganlık düşük, evlilik ve ilk doğum yaşı yüksek, siyasette temsil artıyor"] },
          oyun: [
            { metin: "Kadınların çoğu aileye ait tarlada ücretsiz çalışıyor.", cevap: "sol", neden: "Tarım ağırlıklı, ücretsiz aile işgücü: düşük gelirli ülke örüntüsü." },
            { metin: "Kadınların büyük kısmı üniversiteye gidiyor ve ofislerde çalışıyor.", cevap: "sag", neden: "Eğitim ve ücretli hizmet işleri: yüksek gelirli ülke örüntüsü." },
            { metin: "Kadın başına ortalama 5–6 doğum görülüyor.", cevap: "sol", neden: "Yüksek doğurganlık: kalkınmanın erken evresi." },
            { metin: "Kadın başına ortalama 1,5 doğum görülüyor.", cevap: "sag", neden: "Düşük doğurganlık: gelişmiş ülke örüntüsü." }
          ] },
        { tip: "grafik", baslik: "Kalkınma arttıkça neler değişir? (şematik)", xlabel: "Kalkınma düzeyi", ylabel: "Göreli düzey", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "Düşük" }, { v: 9, label: "Yüksek" }],
          ogeler: [
            { id: "egitim", tip: "egri", renk: 0, etiket: "Kadın eğitimi", noktalar: [[0.5, 1.5], [3, 3.5], [5, 5.8], [7, 7.8], [9.5, 9]] },
            { id: "calisma", tip: "egri", renk: 1, etiket: "Ücretli iş", noktalar: [[0.5, 1.2], [3, 2.4], [5, 4.2], [7, 6.2], [9.5, 7.6]], gizli: true },
            { id: "dogum", tip: "egri", renk: 2, etiket: "Doğurganlık", noktalar: [[0.5, 9], [3, 7.6], [5, 5.2], [7, 3.2], [9.5, 1.8]], gizli: true }
          ],
          durumlar: [
            { metin: "Ülke kalkındıkça kız çocukları daha çok okula gider: ==kadın eğitimi artar.==" },
            { metin: "Eğitimli kadınlar daha çok ==ücretli işte== çalışır; ev dışı gelir elde eder.", goster: ["calisma"] },
            { metin: "Eğitim ve gelirle birlikte evlilik yaşı yükselir, ==doğurganlık düşer==.", goster: ["dogum"] }
          ] },
        { tip: "tuzak", metin: "Bu bir eğilimdir, kural değildir.", yanlis: "Ülke kalkınınca kadın-erkek eşitliği otomatik olarak tamamlanır.", dogru: "Kalkınma kadınların rolünü ==değiştirir ve fırsatlarını artırır==; ama eşitlik kendiliğinden gelmez (bir sonraki başlıkta görüyoruz)." }
      ]
    },
    {
      baslik: "Daha çok kadın çalışıyor ama eşitlik yok",
      kisa: "İşgücüne katılım arttı ama ücret ve iş fırsatlarında eşitlik sağlanmadı.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💸", terim: "Gender wage gap", tr: "cinsiyete dayalı ücret farkı", tanim: "Kadınların, aynı ya da benzer işte erkeklerden ortalama daha düşük ücret almasıdır.", ornek: "Erkek saatte 100 TL kazanırken kadın 85 TL kazanıyor." },
            { ikon: "🪟", terim: "Glass ceiling", tr: "cam tavan", tanim: "Kadınların yeterli olsalar bile üst yönetim kademelerine yükselmesini engelleyen görünmez engel.", ornek: "Şirketin yönetim kurulunda hiç kadın olmaması." },
            { ikon: "🧹", terim: "Unpaid care work", tr: "ücretsiz bakım emeği", tanim: "Ev işi, çocuk ve yaşlı bakımı gibi ücret ödenmeyen çalışmaların büyük kısmını kadınlar yapar; ücretli işe ayırabilecekleri zamanı azaltır.", ornek: "Ev işine günde saatler ayıran kadın, ek mesai yapamaz." }
          ] },
        { tip: "ornek", baslik: "Ücret farkı hesabı", durum: "Bir işyerinde erkekler saatte 100 TL, kadınlar 85 TL kazanıyor. Kadınlar erkeklerin yüzde kaçını alıyor, ücret farkı yüzde kaçtır?",
          adimlar: ["85 ÷ 100 = 0,85: kadınlar erkeklerin yüzde 85'ini alıyor.", "Fark: 100 − 85 = 15 TL.", "15 ÷ 100 = yüzde 15 ücret farkı."],
          sonuc: "Kadınlar erkeklerden ==yüzde 15 daha az== kazanıyor. Daha çok kadın çalışsa bile ücret ve terfi eşitliği olmadığı sürece **eşitlik** gerçekleşmiş sayılmaz." },
        { tip: "tuzak", metin: "Sınavda sık sorulan çeldirici.", yanlis: "Kadın işgücü arttı, dolayısıyla ücret ve fırsat eşitliği sağlandı.", dogru: "Katılım artışı ile ==eşitlik farklı şeylerdir==. CED: kadınlar işgücünde daha çok yer alıyor ama ücret ve istihdam fırsatlarında eşitlik yok." }
      ]
    },
    {
      baslik: "Kadın göstergelerini veriden okumak",
      kisa: "Katılım, ücret oranı ve doğurganlık birlikte okunur; tek rakam yetmez.",
      bloklar: [
        { tip: "tablo", baslik: "Hangi rakam neyi söyler?", head: ["Gösterge", "Yüksekse", "Neyi gösterir?"], rows: [
            ["Kadın okuryazarlığı ve okullaşma", "Eğitim fırsatı fazla", "Kalkınmayla birlikte artar"],
            ["Doğurganlık", "Kadın başına çok doğum", "Kalkındıkça düşer"],
            ["Kadın işgücüne katılımı", "Ücretli çalışan kadın çok", "Eşitlik anlamına gelmez"],
            ["Kadınların erkek ücretine oranı", "Ücret eşitliğine yakın", "100'e yaklaştıkça fark azalır"]
          ], vurgu: 2 },
        { tip: "ornek", baslik: "İki ülkeyi karşılaştır", durum: "C ülkesinde kadın işgücü katılımı yüzde 30, kadınların erkek ücretine oranı yüzde 65. D ülkesinde katılım yüzde 65, ücret oranı yüzde 85. Hangisi eşitliğe daha yakın?",
          adimlar: ["Katılım: D (65) > C (30).", "Ücret oranı: D (85) > C (65); 100'e daha yakın.", "İkisi de 100'ün altında."],
          sonuc: "==D ülkesi eşitliğe daha yakındır==, ama ==hiçbir ülkede ücret eşitliği tamamlanmış değildir.== Veriyi yorumlarken hem ilerlemeyi hem kalan farkı söyle." }
      ]
    },
    {
      baslik: "Mikrokredi: küçük kredi, büyük fırsat",
      kisa: "Mikrokredi, teminatı olmayan yoksullara özellikle kadınlara küçük işletme kurduran küçük bir kredidir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏦", baslik: "Klasik banka kredisi", maddeler: ["Genelde büyük tutar", "Mal varlığı, maaş ya da teminat ister"] },
          sag: { ikon: "🌱", baslik: "*Microloan* (mikrokredi)", maddeler: ["Çok küçük tutar, kısa vade", "Teminat yerine güven ve çoğu zaman grup dayanışması; hedef kitle yoksullar, özellikle kadınlar"] },
          oyun: [
            { metin: "Dikiş makinesi alması için, mal varlığı olmayan bir kadına verilen küçük kredi.", cevap: "sag", neden: "Küçük tutar, teminatsız: mikrokredi." },
            { metin: "Ev almak için, ev teminat gösterilerek çekilen yüksek tutarlı kredi.", cevap: "sol", neden: "Büyük tutar ve teminat: klasik banka kredisi." },
            { metin: "Beş komşu kadının birbirine güvenerek birlikte aldığı küçük kredi.", cevap: "sag", neden: "Grup dayanışması: mikrokredinin tipik yöntemi." },
            { metin: "Bir şirketin fabrika kurmak için bankadan çektiği milyonluk kredi.", cevap: "sol", neden: "Büyük sermaye ve teminat: klasik kredi." }
          ] },
        { tip: "adimlar", baslik: "Bir mikrokredi nasıl işler?", adimlar: [
            { baslik: "Küçük bir kredi", metin: "Örnek: bir kadın dikiş makinesi için küçük bir kredi alır." },
            { baslik: "Küçük işletme", metin: "Evinde terzilik ya da küçük bir dükkân açar ve gelir elde eder." },
            { baslik: "Geri ödeme", metin: "Gelirinden krediyi taksitle öder." },
            { baslik: "Yaşam standardı artar", metin: "Aile gelirinin yükselmesiyle çocukların eğitimi ve sağlığı için daha çok harcama yapılabilir." }
          ] }
      ]
    },
    {
      baslik: "Mikrokredinin gücü ve sınırı",
      kisa: "Mikrokredi yerel işletmelere ve yaşam standardına katkı yapar, ama her sorunu çözmez.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "✅", baslik: "Kadınlara bağımsız gelir", metin: "Kadınlar küçük yerel işletme kurarak kendi gelirini elde eder ve ailede söz hakkı artar (CED: yaşam standardı iyileşir)." },
            { ikon: "🏘️", baslik: "Yerel kalkınma", metin: "Küçük işletmeler mahallede iş ve hizmet yaratır; kredi yerel ekonomide döner." },
            { ikon: "⚠️", baslik: "Sınırlar", metin: "Küçük kredi büyük sanayi kuramaz; faizler yüksek olabilir ve borç batağına düşenler çıkabilir." }
          ] },
        { tip: "tuzak", metin: "Mikrokredi kadın eşitsizliğini ortadan kaldırmaz.", yanlis: "Mikrokredi, kadınların ücret ve fırsat eşitsizliğini tek başına çözer.", dogru: "Mikrokredi ==yaşam standardını yükseltir== ve kadınlara fırsat açar; ama ücret farkı, cam tavan ve bakım yükü gibi yapısal sorunların yerine geçmez." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Ülkeler kalkındıkça kadınların rolü değişir: eğitim ve ücretli çalışma artar, doğurganlık düşer, evlilik yaşı yükselir.",
            "Düşük gelirli ülkelerde kadınlar çoğunlukla tarım ve ev işlerinde, çoğu ücretsiz çalışır.",
            "Daha çok kadın işgücünde olsa da *gender wage gap* ve *glass ceiling* nedeniyle ücret ve fırsatlarda eşitlik yoktur.",
            "Ücretsiz bakım emeğinin büyük kısmını kadınlar yapar; bu ücretli işe ayrılan zamanı azaltır.",
            "*Microloan*, teminatı olmayan yoksullara (çoğunlukla kadınlara) verilen küçük kredidir.",
            "Mikrokredi kadınlara küçük yerel işletme kurma imkânı verir ve yaşam standardını iyileştirir.",
            "Mikrokredi yapısal eşitsizlikleri tek başına çözmez; faiz ve borç riski vardır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir ülke kalkındıkça kadınlarla ilgili aşağıdakilerden hangisinin gerçekleşmesi beklenir?",
      opts: ["Kadın eğitimi azalır ve doğurganlık artar", "Kadınların ücretsiz bakım emeği hemen sıfıra iner", "Kadınlar işgücünden tamamen çıkar", "Kadın eğitimi ve ücretli işgücüne katılım artar; doğurganlık düşer"],
      a: 3,
      why: "Kalkınma eğitim ve ücretli çalışmayı artırır, doğurganlığı azaltır. B şıkkı en çekici yanlış: bakım emeği kendiliğinden ortadan kalkmaz, hâlâ büyük ölçüde kadınların üzerindedir." },
    { q: "Tabloya göre aşağıdaki yorumlardan hangisi doğrudur?",
      fig: { type: "table", caption: "İki ülkede kadın göstergeleri", head: ["Gösterge", "A ülkesi", "B ülkesi"], rows: [["Kadın işgücüne katılımı (%)", 25, 70], ["Kadınların erkek ücretine oranı (%)", 70, 82], ["Kadın başına doğum", 4.8, 1.7]] },
      opts: ["A ülkesi daha gelişmiş olmalıdır; çünkü doğurganlığı yüksektir", "B ülkesinde kadın katılımı yüksektir ama kadınlar hâlâ erkeklerden daha az kazanmaktadır", "B ülkesinde kadın-erkek ücret eşitliği tamamen sağlanmıştır", "İki ülkede de kadınların rolü kalkınmayla değişmemiştir"],
      a: 1,
      why: "B'de katılım yüksek ama kadınların ücreti erkeklerin yüzde 82'si: eşitlik yok. C şıkkı en çekici yanlış: katılım yüksek diye ücret eşitliği sağlanmış sayılmaz." },
    { q: "Hangisi mikrokredinin tipik bir örneğidir?",
      opts: ["Bir holdingin yeni fabrika için aldığı milyarlık kredi", "Devletin yabancı bir ülkeye verdiği büyük borç", "Teminatı olmayan bir kadının küçük bir dikiş atölyesi kurması için aldığı küçük kredi", "Bir kişinin ev almak için ipotek karşılığı aldığı kredi"],
      a: 2,
      why: "Mikrokredi küçük, çoğunlukla teminatsız bir kredidir ve yoksulların küçük işletme kurmasını sağlar. D şıkkı en çekici yanlış: ipotekli konut kredisi klasik bankacılıktır." },
    { q: "Bir kadın mikrokredi ile küçük bir gıda dükkânı açıyor, geliri artıyor ve çocuklarını okula gönderiyor. Bu örnek CED'de hangi sonuca işaret eder?",
      opts: ["Mikrokredi kadınlara küçük yerel işletme kurma fırsatı vererek yaşam standardını iyileştirebilir", "Mikrokredi cam tavanı tamamen kaldırır", "Mikrokredi ülkenin GDP'sini tek başına ikiye katlar", "Mikrokredi yalnızca erkeklere uygulanan bir yöntemdir"],
      a: 0,
      why: "CED: mikrokredi kadınlara küçük yerel işletme fırsatı verir, yaşam standardını artırır. C şıkkı en çekici yanlış: küçük kredi ülke ölçeğinde bu kadar büyük etkiye tek başına neden olmaz." },
    { q: "Aşağıdaki şematik grafik kalkınma arttıkça neyi gösteriyor ve en iyi açıklama hangisidir?",
      fig: { type: "graph", xlabel: "Kalkınma düzeyi", ylabel: "Göreli düzey", xmax: 10, ymax: 10, lines: [{ from: [0.5, 1.5], to: [9.5, 9], label: "X" }, { from: [0.5, 9], to: [9.5, 1.8], label: "Z" }], caption: "Şematik eğriler" },
      opts: ["X doğurganlık, Z kadın eğitimi; ikisi de kalkınmayla artar", "X ve Z aynı göstergedir", "Kalkınma arttıkça her iki gösterge de düşer", "X kadın eğitimi, Z doğurganlık; kalkındıkça eğitim artar ve doğurganlık düşer"],
      a: 3,
      why: "Kalkındıkça kadın eğitimi artar, doğurganlık düşer. A şıkkı en çekici yanlış: iki eğrinin yönü ters ve doğurganlık kalkınmayla azalır." }
  ]
};
