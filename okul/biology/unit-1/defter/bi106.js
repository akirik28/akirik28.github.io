/* Kitora not defteri · bi106 · 1.6 Oksijenli Solunum
   Kaynak: öğretmen lecture'ı (1.7 Cellular Respiration, 1.8 Pathways of Nutrients) + defter-araclari/kaynak/okul-10-2025-26.md + MEB Maarif BİY.10.
   ATP sayıları lecture'a göre: en çok yaklaşık 38 (NADH = 3, FADH₂ = 2 ATP; bir slaytta "up to 36"). Güncel ~30–32 değeri yalnız kısa not. */
window.DEFTER = {
  slug: "bi106",
  amac: "Bu konu hücrenin glikozu oksijenle yıkıp ATP elde etmesini anlatıyor: *aerobic respiration*. Glikoliz, Krebs döngüsü ve elektron taşıma zincirinin yerini, girdi-çıktılarını, toplam ATP sayısını ve karbonhidrat, yağ, proteinin solunuma nasıl girdiğini öğreneceksin.",
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
            { t: "ATP", alt: "en çok ≈ 38 + ısı" }
          ], aciklama: "Glikoz yükseltgenir (elektron ve hidrojen verir), O₂ indirgenir (su olur). Süreç üç basamakta yürür: glikoliz, Krebs döngüsü, oksidatif fosforilasyon (elektron taşıma zinciri + kemiozmoz)." },
        { tip: "harita", merkez: "*Mitochondrion* (mitokondri)", dallar: [
            { baslik: "Sitoplazma", alt: "Glikoliz burada (mitokondri dışında)" },
            { baslik: "*Matrix* (matriks)", alt: "Piruvat oksidasyonu, Krebs; mitokondrinin kendi DNA, RNA, ribozomu" },
            { baslik: "İç zar (*cristae*)", alt: "Elektron taşıma zinciri ve ATP sentaz" },
            { baslik: "Zarlar arası boşluk", alt: "H⁺ birikir" }
          ] },
        { tip: "tuzak", metin: "“Solunum” iki ayrı olayın adıdır: akciğerlerle soluk alıp verme (gaz alışverişi) ve hücrede yapılan kimyasal enerji üretimi.", yanlis: "Hücresel solunum, akciğerlerin soluk alıp vermesidir.", dogru: "Hücresel solunum, hücrede glikozdaki enerjinin ATP'ye çevrilmesidir; akciğerler yalnızca O₂'yi getirip CO₂'yi uzaklaştırır." },
        { tip: "not", metin: "Glikoz yakılsa enerji bir anda ısı ve ışık olarak dağılır; hücre ise onu kontrollü, küçük adımlarla bırakıp ATP'de tutar (lecture'daki 38 ATP ile enerjinin yaklaşık %40'ı; güncel 30–32 ATP ile yaklaşık %34). Ökaryotta solunum sitoplazmada başlar, mitokondride biter; prokaryotta sitoplazmada ve hücre zarının içe kıvrımlarında yürür. Sınavda böyle yaz: *In aerobic respiration, glucose is oxidized to carbon dioxide and water in the presence of oxygen, and the released energy is used to make ATP.*" }
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
            { baslik: "Enerji yatırımı", metin: "6 karbonlu glikoz 2 ATP harcanarak fosforillenir; hazırlanan şeker ikiye bölünür." },
            { baslik: "Enerji kazancı", metin: "İki 3 karbonlu molekül (G3P) yükseltgenir: toplam 4 ATP yapılır ve 2 NADH oluşur." },
            { baslik: "Sonuç", metin: "2 piruvat (3 karbonlu) çıkar. Net kazanç: 4 − 2 = 2 ATP (*substrate-level phosphorylation*)." }
          ] },
        { tip: "tablo", head: ["Glikoliz", "Miktar (1 glikoz için)"], rows: [
            ["Yer", "Sitoplazma"],
            ["Girdi", "1 glikoz, 2 ATP (harcanır), 2 NAD⁺"],
            ["Çıktı", "2 piruvat, 4 ATP (net 2), 2 NADH"],
            ["O₂ gerekir mi?", "Hayır"]
          ], vurgu: 2, not: "Sınavda böyle yaz: *Glycolysis occurs in the cytoplasm and produces two pyruvate, a net gain of two ATP and two NADH from one glucose.*" },
        { tip: "tuzak", metin: "Glikoliz oksijenli solunumun ilk basamağıdır ama oksijene ihtiyaç duymaz ve mitokondride değil sitoplazmada olur. O₂ yokken de devam edebilir.", yanlis: "Glikoliz mitokondride gerçekleşir ve O₂ ister.", dogru: "Glikoliz sitoplazmada yapılır, O₂ gerektirmez; ürünü piruvattır. Tüm canlılarda ortaktır ve her solunum türünün ilk basamağıdır." }
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
            { ikon: "⚙️", terim: "Oxidative phosphorylation", tr: "oksidatif fosforilasyon", tanim: "Elektron taşıma zincirinin enerjisiyle ADP'ye fosfat eklenmesi. Solunumdaki ATP'nin yaklaşık %90'ı buradan gelir; O₂ gerekir.", ornek: "Yaklaşık 34 ATP." }
          ] },
        { tip: "tuzak", metin: "O₂ ATP'yi doğrudan üretmez; elektronların zincirden akabilmesi için son alıcıdır. O₂ olmazsa zincir tıkanır ve ATP yapımı çöker.", yanlis: "O₂, glikozu parçalayarak ATP'yi üretir.", dogru: "O₂ elektron taşıma zincirinde son elektron alıcısıdır; solunumda oluşan suyun oksijeni O₂'den gelir." },
        { tip: "tablo", baslik: "Oksidatif fosforilasyonu engelleyen zehirler", head: ["Etki", "Örnek"], rows: [
            ["Elektron taşıma zincirini bloke eder", "Rotenone, siyanür (*cyanide*), karbon monoksit (CO)"],
            ["ATP sentazı engeller", "Oligomisin (antibiyotik)"],
            ["Zarı H⁺'a sızdırır (*uncoupler*): gradyan kaybolur", "Dinitrofenol (DNP)"]
          ], not: "Sınavda böyle yaz: *Cyanide blocks the electron transport chain, so oxidative phosphorylation stops and very little ATP is made.*" }
      ]
    },
    {
      baslik: "ATP muhasebesi: toplam kaç ATP?",
      kisa: "Bir glikozdan oksijenli solunumla en çok yaklaşık 38 ATP elde edilir.",
      bloklar: [
        { tip: "grafik", baslik: "Basamaklara göre ATP (1 glikoz)", xlabel: "Basamak", ylabel: "ATP sayısı", xmax: 10, ymax: 40,
          xticks: [{ v: 2, label: "Glikoliz" }, { v: 5, label: "Krebs" }, { v: 8, label: "ETS" }],
          yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[1.2, 0], [2.8, 0], [2.8, 0], [1.2, 0]] },
            { id: "t1", tip: "yazi", x: 2, y: 3.4, metin: "2", gizli: true },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[4.2, 0], [5.8, 0], [5.8, 0], [4.2, 0]] },
            { id: "t2", tip: "yazi", x: 5, y: 3.4, metin: "2", gizli: true },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[7.2, 0], [8.8, 0], [8.8, 0], [7.2, 0]] },
            { id: "t3", tip: "yazi", x: 8, y: 35.6, metin: "≈ 34", gizli: true },
            { id: "tp", tip: "yazi", x: 5, y: 18, metin: "Toplam ≈ 38 ATP", gizli: true }
          ],
          durumlar: [
            { metin: "1 glikozdan elde edilen ATP'yi üç basamakta toplayalım." },
            { metin: "==Glikoliz==: net 2 ATP (*substrate-level*).", set: { b1: { noktalar: [[1.2, 0], [2.8, 0], [2.8, 2], [1.2, 2]] } }, goster: ["t1"] },
            { metin: "==Krebs döngüsü==: 2 tur, toplam 2 ATP (*substrate-level*).", set: { b2: { noktalar: [[4.2, 0], [5.8, 0], [5.8, 2], [4.2, 2]] } }, goster: ["t2"] },
            { metin: "==Elektron taşıma zinciri==: 10 NADH ve 2 FADH₂'den yaklaşık 34 ATP (*oxidative*). Bar en yüksek: ATP'nin yaklaşık %90'ı burada.", set: { b3: { noktalar: [[7.2, 0], [8.8, 0], [8.8, 34], [7.2, 34]] } }, goster: ["t3"] },
            { metin: "Toplam: 2 + 2 + 34 ≈ 38 ATP (en çok). Sınavda böyle yaz: *The graph shows that most of the ATP is produced in the electron transport chain.*", goster: ["tp"] }
          ] },
        { tip: "ornek", baslik: "ATP hesabı", durum: "1 glikozdan oluşan taşıyıcılar: glikolizde 2 NADH, piruvat oksidasyonunda 2 NADH, Krebs'te 6 NADH ve 2 FADH₂. Lecture'daki en yüksek sayım: 1 NADH ≈ 3 ATP, 1 FADH₂ ≈ 2 ATP.", adimlar: [
            "Doğrudan ATP (*substrate-level*): 2 (glikoliz) + 2 (Krebs) = 4 ATP.",
            "NADH sayısı: 2 + 2 + 6 = 10. ATP: 10 × 3 = 30.",
            "FADH₂ sayısı: 2. ATP: 2 × 2 = 4.",
            "Toplam: 4 + 30 + 4 = 38 ATP (34'ü oksidatif fosforilasyondan)."
          ], sonuc: "En çok yaklaşık 38 ATP (lecture bir yerde 'up to 36' de yazıyor). Güncel ölçümler NADH ≈ 2,5 ve FADH₂ ≈ 1,5 ATP alıp toplamı yaklaşık 30–32 bulur; sınavda lecture'daki 38'i kullan." },
        { tip: "tablo", head: ["Basamak", "Yer", "Girdi", "Çıktı"], rows: [
            ["Glikoliz", "Sitoplazma", "Glikoz", "2 piruvat, 2 NADH, net 2 ATP"],
            ["Piruvat oks. + Krebs", "Matriks", "2 piruvat", "6 CO₂, 8 NADH, 2 FADH₂, 2 ATP"],
            ["Elektron taşıma zinciri", "İç zar (krista)", "NADH, FADH₂, O₂", "H₂O, yaklaşık 34 ATP"]
          ], not: "Sınavda böyle yaz: *Glycolysis occurs in the cytoplasm, the Krebs cycle in the matrix and the electron transport chain in the inner mitochondrial membrane.*" }
      ]
    },
    {
      baslik: "Besinlerin solunuma girişi",
      kisa: "Karbonhidrat, yağ ve protein, yıkım ürününe göre solunumun farklı basamaklarına girer.",
      bloklar: [
        { tip: "tablo", baslik: "Hangi besin nereden girer?", head: ["Besin", "Yıkım ürünü", "Giriş noktası"], rows: [
            ["Karbonhidrat", "Glikoz", "Glikoliz → piruvat → asetil-CoA → Krebs → elektron taşıma zinciri"],
            ["Yağ", "Yağ asidi + gliserol", "Yağ asidi → asetil-CoA → Krebs; gliserol (3C) glikolizin ara basamağına"],
            ["Protein", "Amino asit (önce NH₂ grubu ayrılır)", "2C: asetil-CoA, 3C: piruvat, 4C ve üzeri: Krebs"]
          ], vurgu: 1, not: "Sınavda böyle yaz: *Fatty acids are converted to acetyl-CoA and enter the Krebs cycle, whereas glycerol enters at an intermediate step of glycolysis.*" },
        { tip: "tuzak", metin: "Amino asitler olduğu gibi solunuma girmez; önce amino grubu (NH₂) ayrılır ve azotlu atık oluşur.", yanlis: "Proteinler doğrudan glikoliz ile başlar.", dogru: "Amino asit, karbon sayısına göre asetil-CoA, piruvat ya da Krebs döngüsüne girer; amino grubu ayrılır." },
        { tip: "not", metin: "Yağ, çok H atomu (enerji dolu elektron) taşıdığı için gram başına karbonhidrat ya da proteinden iki kattan fazla ATP verir. Üç besin de CO₂, H₂O, ATP ve ısı açığa çıkarır." }
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
            "NADH ve FADH₂ elektronları zincire taşır; lecture sayımıyla NADH ≈ 3, FADH₂ ≈ 2 ATP.",
            "Toplam en çok yaklaşık 38 ATP (2 + 2 + 34); ATP'nin %90'ı zincirden gelir. Güncel değer ≈ 30–32.",
            "Karbonhidrat glikolizden, yağ asidi asetil-CoA olarak, amino asit karbon sayısına göre girer.",
            "6 CO₂'nin hepsi glikoz karbonudur; piruvat oksidasyonu ve Krebs'ten çıkar.",
            "Zehirler zinciri (siyanür, CO), ATP sentazı ya da H⁺ gradyanını (DNP) bozar."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Where does the Krebs cycle take place, and what are its main products?",
      opts: ["In the cytoplasm; pyruvate and 2 ATP", "In the mitochondrial matrix; CO₂, NADH, FADH₂ and a little ATP", "In the inner mitochondrial membrane; H₂O and a lot of ATP", "In the chloroplast stroma; glucose"], a: 1,
      why: "Krebs döngüsü matrikste yürür ve CO₂, NADH, FADH₂ ile az miktarda ATP üretir. Çok ATP ve H₂O elektron taşıma zincirinde oluşur; C şıkkı iki basamağı karıştırır." },
    { q: "According to the table, how many CO₂ molecules are produced in total when one glucose is completely broken down by aerobic respiration?",
      fig: { type: "table", head: ["Stage", "CO₂"], rows: [["Glycolysis", "0"], ["Pyruvate → acetyl-CoA", "2"], ["Krebs cycle (2 turns)", "4"], ["Electron transport chain", "0"]] },
      opts: ["2", "4", "5", "6"], a: 3,
      why: "0 + 2 + 4 + 0 = 6 CO₂; glikozun 6 karbonunun hepsi CO₂ olur. Yalnız Krebs'e bakıp 4 yazmak çekici ama piruvat oksidasyonundaki 2 CO₂ unutulmuştur." },
    { q: "What happens in the electron transport chain if a cell is deprived of oxygen, and why does the Krebs cycle slow down?",
      opts: ["The chain stops; NAD⁺ and FAD cannot be regenerated, so the Krebs cycle slows down.", "The chain speeds up; the Krebs cycle speeds up too.", "The chain continues; the Krebs cycle is not affected.", "Glycolysis stops and the Krebs cycle speeds up."], a: 0,
      why: "O₂ son elektron alıcısıdır; yoksa elektronlar boşaltılamaz, NADH ve FADH₂ boşalmaz, NAD⁺ ve FAD tükenir ve Krebs yavaşlar. C şıkkı çekici ama Krebs, taşıyıcıların yenilenmesine bağlıdır." },
    { q: "How much ATP is obtained from one glucose by aerobic respiration, according to the lecture notes?",
      opts: ["About 2", "About 4", "At most about 38, most of it from the electron transport chain", "About 100"], a: 2,
      why: "Glikoliz ve Krebs toplam yalnız 4 ATP verir; kalanı (≈ 34) zincirden gelir ve toplam en çok yaklaşık 38 olur. A şıkkı glikolizin net ATP'sidir." },
    { q: "Which statement about fats entering cellular respiration is correct?",
      opts: ["Fatty acids and glycerol both enter as pyruvate.", "Fatty acids are converted to acetyl-CoA and enter the Krebs cycle; glycerol enters at an intermediate step of glycolysis.", "Fats enter directly at the electron transport chain.", "Fats cannot be used as an energy source."], a: 1,
      why: "Yağ asidi asetil-CoA'ya çevrilip Krebs'e, gliserol (3C) glikolizin ara basamağına girer. A şıkkı ikisini de piruvat sayar; C şıkkı giriş noktasını yanlış yere koyar." }
  ]
};
