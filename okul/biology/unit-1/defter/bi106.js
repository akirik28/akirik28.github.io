/* Kitora not defteri · bi106 · 1.6 Oksijenli Solunum
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Biology, Tema 1) + MEB Maarif BİY.10 standart içeriği. Blok türleri: /ap/_kit/defter.js başı.
   ATP sayıları: NADH ≈ 2,5 ATP, FADH₂ ≈ 1,5 ATP (toplam ≈ 32). Eski kitaplar NADH = 3, FADH₂ = 2 alıp 36–38 yazar; konu içinde belirtildi. */
window.DEFTER = {
  slug: "bi106",
  amac: "Bu konu hücrenin glikozu oksijenle yıkıp ATP elde etmesini anlatıyor: *aerobic respiration*. Glikoliz, Krebs döngüsü ve elektron taşıma zincirinin yerini, girdi-çıktılarını ve toplam ATP sayısını öğreneceksin.",
  bolumler: [
    {
      baslik: "Oksijenli solunumun genel tepkimesi",
      kisa: "Glikoz O₂ ile CO₂ ve suya yıkılır; açığa çıkan enerjiyle ATP yapılır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "C₆H₁₂O₆", alt: "glikoz" }, "+",
            { t: "6O₂", alt: "oksijen" }, "→",
            { t: "6CO₂", alt: "karbondioksit" }, "+",
            { t: "6H₂O", alt: "su" }, "+",
            { t: "ATP", alt: "≈ 32 + ısı" }
          ], aciklama: "Glikoz yükseltgenir (elektron ve hidrojen verir), O₂ indirgenir (su olur). Süreç üç basamakta yürür: glikoliz, Krebs döngüsü, elektron taşıma zinciri." },
        { tip: "harita", merkez: "*Mitochondrion* (mitokondri)", dallar: [
            { baslik: "Sitoplazma", alt: "Glikoliz burada (mitokondri dışında)" },
            { baslik: "*Matrix* (matriks)", alt: "Piruvat oksidasyonu ve Krebs döngüsü" },
            { baslik: "İç zar (*cristae*)", alt: "Elektron taşıma zinciri ve ATP sentaz" },
            { baslik: "Zarlar arası boşluk", alt: "H⁺ birikir" }
          ] },
        { tip: "tuzak", metin: "“Solunum” iki ayrı olayın adıdır: akciğerlerle soluk alıp verme (gaz alışverişi) ve hücrede yapılan kimyasal enerji üretimi.", yanlis: "Hücresel solunum, akciğerlerin soluk alıp vermesidir.", dogru: "Hücresel solunum, hücrede glikozdaki enerjinin ATP'ye çevrilmesidir; akciğerler yalnızca O₂'yi getirip CO₂'yi uzaklaştırır." },
        { tip: "not", metin: "Sınavda böyle yaz: *In aerobic respiration, glucose is oxidized to carbon dioxide and water in the presence of oxygen, and the released energy is used to make ATP.*" }
      ]
    },
    {
      baslik: "Hidrojen taşıyıcıları: NADH ve FADH₂",
      kisa: "NADH ve FADH₂, glikozdan alınan elektronları elektron taşıma zincirine götürür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚚", terim: "NADH", tr: "indirgenmiş NAD⁺", tanim: "NAD⁺, glikoliz, piruvat oksidasyonu ve Krebs'te hidrojen ve elektron alıp NADH olur. Elektron taşıma zincirinde elektronu bırakıp NAD⁺'ya döner.", ornek: "Boş otobüs (NAD⁺) dolup (NADH) durağa gider." },
            { ikon: "🛵", terim: "FADH₂", tr: "indirgenmiş FAD", tanim: "Krebs döngüsünde FAD'dan oluşan ikinci taşıyıcı. NADH'den biraz daha az ATP sağlar.", ornek: "Küçük kurye aracı: daha az yük taşır." }
          ] },
        { tip: "not", metin: "Sınavda böyle yaz: *NADH and FADH₂ carry electrons from glycolysis and the Krebs cycle to the electron transport chain.*" }
      ]
    },
    {
      baslik: "Glikoliz",
      kisa: "Sitoplazmada glikoz 2 piruvata bölünür; net 2 ATP ve 2 NADH kazanılır.",
      bloklar: [
        { tip: "adimlar", baslik: "Glikoliz (*glycolysis*), O₂ istemez", adimlar: [
            { baslik: "Hazırlık", metin: "6 karbonlu glikoz 2 ATP harcanarak fosforillenir; hazırlanan şeker ikiye bölünür." },
            { baslik: "Kazanç", metin: "İki 3 karbonlu molekül yükseltgenir: toplam 4 ATP yapılır ve 2 NADH oluşur." },
            { baslik: "Sonuç", metin: "2 piruvat (3 karbonlu) çıkar. Net kazanç: 4 − 2 = 2 ATP (*substrate-level phosphorylation*)." }
          ] },
        { tip: "tablo", head: ["Glikoliz", "Miktar (1 glikoz için)"], rows: [
            ["Yer", "Sitoplazma"],
            ["Girdi", "1 glikoz, 2 ATP (harcanır), 2 NAD⁺"],
            ["Çıktı", "2 piruvat, 4 ATP (net 2), 2 NADH"],
            ["O₂ gerekir mi?", "Hayır"]
          ], vurgu: 2, not: "Sınavda böyle yaz: *Glycolysis occurs in the cytoplasm and produces two pyruvate, a net gain of two ATP and two NADH from one glucose.*" },
        { tip: "tuzak", metin: "Glikoliz oksijenli solunumun ilk basamağıdır ama oksijene ihtiyaç duymaz ve mitokondride değil sitoplazmada olur. O₂ yokken de devam edebilir.", yanlis: "Glikoliz mitokondride gerçekleşir ve O₂ ister.", dogru: "Glikoliz sitoplazmada yapılır, O₂ gerektirmez; ürünü piruvattır." }
      ]
    },
    {
      baslik: "Piruvat oksidasyonu ve Krebs döngüsü",
      kisa: "Matrikste piruvat CO₂'ye kadar yıkılır; NADH, FADH₂ ve az ATP çıkar.",
      bloklar: [
        { tip: "adimlar", baslik: "Mitokondri matriksinde", adimlar: [
            { baslik: "Piruvat → asetil-CoA", metin: "Her piruvat 1 CO₂ verir, 1 NADH oluşur; geriye 2 karbonlu *acetyl-CoA* kalır." },
            { baslik: "Krebs döngüsü (*Krebs cycle*)", metin: "*Acetyl-CoA*, 4 karbonlu bir molekülle birleşip 6 karbonlu sitrat olur. Döngü boyunca 2 CO₂ salınır ve başlangıç molekülü yenilenir." },
            { baslik: "Her turun ürünü", metin: "1 ATP, 3 NADH, 1 FADH₂ ve 2 CO₂. Bir glikozdan 2 piruvat çıktığı için döngü ==2 kez== döner." }
          ] },
        { tip: "tablo", baslik: "1 glikoz için (2 piruvat)", head: ["Basamak", "CO₂", "NADH", "FADH₂", "ATP"], rows: [
            ["Piruvat → asetil-CoA", "2", "2", "0", "0"],
            ["Krebs (2 tur)", "4", "6", "2", "2"],
            ["Toplam", "6", "8", "2", "2"]
          ], vurgu: 2, not: "Sınavda böyle yaz: *All six carbon atoms of glucose are released as carbon dioxide in the pyruvate oxidation and the Krebs cycle.*" },
        { tip: "tuzak", metin: "Krebs döngüsü oksijeni doğrudan kullanmaz; ama oksijen yoksa elektron taşıma zinciri çalışmaz, NAD⁺ ve FAD yenilenmez ve döngü yavaşlar.", yanlis: "Krebs döngüsünde O₂ tüketilir ve su oluşur.", dogru: "Krebs'te CO₂ açığa çıkar; O₂ tüketimi ve su oluşumu elektron taşıma zincirinde olur." }
      ]
    },
    {
      baslik: "Elektron taşıma zinciri ve oksidatif fosforilasyon",
      kisa: "Elektronlar zincirden geçerken ATP yapılır; son alıcı O₂'dir ve su oluşur.",
      bloklar: [
        { tip: "adimlar", baslik: "İç zarda (*electron transport chain*)", adimlar: [
            { baslik: "Elektron bırakılır", metin: "NADH ve FADH₂, elektronlarını iç zardaki taşıyıcı proteinlere verir; NAD⁺ ve FAD geri döner." },
            { baslik: "H⁺ pompalanır", metin: "Elektronlar zincirde ilerlerken açığa çıkan enerji H⁺'ları matriksten zarlar arası boşluğa pompalar." },
            { baslik: "ATP yapılır", metin: "H⁺'lar, ATP sentaz kanalından matrikse geri akarken ADP + Pᵢ → ATP olur." },
            { baslik: "O₂ son alıcı", metin: "Elektronlar sonunda O₂'ye aktarılır; O₂, H⁺ ile birleşip ==H₂O== oluşturur." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚙️", terim: "Oxidative phosphorylation", tr: "oksidatif fosforilasyon", tanim: "Elektron taşıma zincirinin enerjisiyle ADP'ye fosfat eklenmesi. Solunumdaki ATP'nin büyük kısmı buradan gelir.", ornek: "Yaklaşık 28 ATP." }
          ] },
        { tip: "tuzak", metin: "O₂ ATP'yi doğrudan üretmez; elektronların zincirden akabilmesi için son alıcıdır. O₂ olmazsa zincir tıkanır ve ATP yapımı çöker.", yanlis: "O₂, glikozu parçalayarak ATP'yi üretir.", dogru: "O₂ elektron taşıma zincirinde son elektron alıcısıdır; solunumda oluşan suyun oksijeni O₂'den gelir." }
      ]
    },
    {
      baslik: "ATP muhasebesi: toplam kaç ATP?",
      kisa: "Bir glikozdan oksijenli solunumla yaklaşık 30–32 ATP elde edilir.",
      bloklar: [
        { tip: "grafik", baslik: "Basamaklara göre ATP (1 glikoz)", xlabel: "Basamak", ylabel: "ATP sayısı", xmax: 10, ymax: 32,
          xticks: [{ v: 2, label: "Glikoliz" }, { v: 5, label: "Krebs" }, { v: 8, label: "ETS" }],
          yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[1.2, 0], [2.8, 0], [2.8, 0], [1.2, 0]] },
            { id: "t1", tip: "yazi", x: 2, y: 3.4, metin: "2", gizli: true },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[4.2, 0], [5.8, 0], [5.8, 0], [4.2, 0]] },
            { id: "t2", tip: "yazi", x: 5, y: 3.4, metin: "2", gizli: true },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[7.2, 0], [8.8, 0], [8.8, 0], [7.2, 0]] },
            { id: "t3", tip: "yazi", x: 8, y: 29.6, metin: "≈ 28", gizli: true },
            { id: "tp", tip: "yazi", x: 5, y: 15, metin: "Toplam ≈ 32 ATP", gizli: true }
          ],
          durumlar: [
            { metin: "1 glikozdan elde edilen ATP'yi üç basamakta toplayalım." },
            { metin: "==Glikoliz==: net 2 ATP (*substrate-level*).", set: { b1: { noktalar: [[1.2, 0], [2.8, 0], [2.8, 2], [1.2, 2]] } }, goster: ["t1"] },
            { metin: "==Krebs döngüsü==: 2 tur, toplam 2 ATP (*substrate-level*).", set: { b2: { noktalar: [[4.2, 0], [5.8, 0], [5.8, 2], [4.2, 2]] } }, goster: ["t2"] },
            { metin: "==Elektron taşıma zinciri==: 10 NADH ve 2 FADH₂'den yaklaşık 28 ATP (*oxidative*). Bar en yüksek: ATP'nin çoğu burada.", set: { b3: { noktalar: [[7.2, 0], [8.8, 0], [8.8, 28], [7.2, 28]] } }, goster: ["t3"] },
            { metin: "Toplam: 2 + 2 + 28 ≈ 32 ATP. Sınavda böyle yaz: *The graph shows that most of the ATP is produced in the electron transport chain.*", goster: ["tp"] }
          ] },
        { tip: "ornek", baslik: "ATP hesabı", durum: "1 glikozdan oluşan taşıyıcılar: glikolizde 2 NADH, piruvat oksidasyonunda 2 NADH, Krebs'te 6 NADH ve 2 FADH₂. Kabul: 1 NADH ≈ 2,5 ATP, 1 FADH₂ ≈ 1,5 ATP.", adimlar: [
            "Doğrudan ATP (*substrate-level*): 2 (glikoliz) + 2 (Krebs) = 4 ATP.",
            "NADH sayısı: 2 + 2 + 6 = 10. ATP: 10 × 2,5 = 25.",
            "FADH₂ sayısı: 2. ATP: 2 × 1,5 = 3.",
            "Toplam: 4 + 25 + 3 = 32 ATP."
          ], sonuc: "Yaklaşık 32 ATP. Bazı kitaplar NADH = 3 ve FADH₂ = 2 alıp 38 (ya da 36) yazar; sınavda öğretmeninin kitabındaki sayıyı kullan." },
        { tip: "tablo", head: ["Basamak", "Yer", "Girdi", "Çıktı"], rows: [
            ["Glikoliz", "Sitoplazma", "Glikoz", "2 piruvat, 2 NADH, net 2 ATP"],
            ["Piruvat oks. + Krebs", "Matriks", "2 piruvat", "6 CO₂, 8 NADH, 2 FADH₂, 2 ATP"],
            ["Elektron taşıma zinciri", "İç zar (krista)", "NADH, FADH₂, O₂", "H₂O, yaklaşık 28 ATP"]
          ], not: "Sınavda böyle yaz: *Glycolysis occurs in the cytoplasm, the Krebs cycle in the matrix and the electron transport chain in the inner mitochondrial membrane.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. Hücresel solunum ≠ akciğerle soluk alıp verme.",
            "Glikoliz: sitoplazma, O₂ gerekmez; 1 glikoz → 2 piruvat, net 2 ATP, 2 NADH.",
            "Piruvat → asetil-CoA: matriks, 2 CO₂ + 2 NADH. Krebs (2 tur): 4 CO₂, 6 NADH, 2 FADH₂, 2 ATP.",
            "Elektron taşıma zinciri iç zardadır: H⁺ pompalanır, ATP sentazdan geçerken ATP yapılır; son elektron alıcısı O₂, ürün H₂O.",
            "NADH ve FADH₂ elektronları zincire taşır; NADH ≈ 2,5, FADH₂ ≈ 1,5 ATP.",
            "Toplam yaklaşık 30–32 ATP (eski kitaplarda 36–38); ATP'nin çoğu zincirden gelir.",
            "6 CO₂'nin hepsi glikoz karbonudur; piruvat oksidasyonu ve Krebs'ten çıkar.",
            "O₂ yoksa zincir çalışmaz, NAD⁺ yenilenmez ve Krebs yavaşlar."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Krebs döngüsü hücrenin neresinde gerçekleşir ve en önemli çıktıları nelerdir?",
      opts: ["Sitoplazmada; piruvat ve 2 ATP", "Mitokondri matriksinde; CO₂, NADH, FADH₂ ve az ATP", "Mitokondri iç zarında; H₂O ve çok ATP", "Kloroplast stromasında; glikoz"], a: 1,
      why: "Krebs döngüsü matrikste yürür ve CO₂, NADH, FADH₂ ile az miktarda ATP üretir. Çok ATP ve H₂O elektron taşıma zincirinde oluşur; C şıkkı iki basamağı karıştırır." },
    { q: "Aşağıdaki tabloya göre bir glikozun oksijenli solunumunda oluşan toplam CO₂ kaç moleküldür?",
      fig: { type: "table", head: ["Basamak", "CO₂"], rows: [["Glikoliz", "0"], ["Piruvat → asetil-CoA", "2"], ["Krebs döngüsü (2 tur)", "4"], ["Elektron taşıma zinciri", "0"]] },
      opts: ["2", "4", "5", "6"], a: 3,
      why: "0 + 2 + 4 + 0 = 6 CO₂; glikozun 6 karbonunun hepsi CO₂ olur. Yalnız Krebs'e bakıp 4 yazmak çekici ama piruvat oksidasyonundaki 2 CO₂ unutulmuştur." },
    { q: "Bir hücre oksijensiz bırakılırsa elektron taşıma zincirinde ne olur ve Krebs döngüsü neden yavaşlar?",
      opts: ["Zincir durur; NAD⁺ ve FAD yenilenemediği için Krebs yavaşlar.", "Zincir hızlanır; Krebs da hızlanır.", "Zincir sürer; Krebs etkilenmez.", "Glikoliz durur ve Krebs hızlanır."], a: 0,
      why: "O₂ son elektron alıcısıdır; yoksa elektronlar boşaltılamaz, NADH ve FADH₂ boşalmaz, NAD⁺ ve FAD tükenir ve Krebs yavaşlar. C şıkkı çekici ama Krebs, taşıyıcıların yenilenmesine bağlıdır." },
    { q: "Bir glikozdan oksijenli solunumla elde edilen toplam ATP için hangisi doğrudur?",
      opts: ["Yaklaşık 2", "Yaklaşık 4", "Yaklaşık 30–38 (kaynağa göre); büyük kısmı elektron taşıma zincirinden", "Yaklaşık 100"], a: 2,
      why: "Glikoliz ve Krebs toplam yalnız 4 ATP verir; kalanı zincirden gelir ve toplam yaklaşık 30–32 (eski kitaplarda 36–38). A şıkkı glikolizin net ATP'sidir." },
    { q: "ATP sentaz hangi yönde H⁺ akışıyla ATP yapar?",
      opts: ["Matriksten zarlar arası boşluğa", "Sitoplazmadan matrikse", "Zarlar arası boşluktan matrikse", "Stromadan tilakoide"], a: 2,
      why: "Elektron taşıma zinciri H⁺'ları zarlar arası boşluğa pompalar; H⁺'lar bu birikimden matrikse ATP sentaz içinden geri akarken ATP yapılır. A şıkkı pompalama yönüdür, ATP yapımı yönü değil." }
  ]
};
