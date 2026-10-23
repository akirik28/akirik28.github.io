/* Kitpath not defteri · hg604 · Kentlerin Büyüklüğü ve Dağılımı
   Kaynak: AP HuG CED Topic 6.4 (PSO-6.C.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg604",
  amac: "Bu konu kentlerin büyüklüğünün ve dağılımının nasıl açıklandığını anlatıyor. Dört ilkeyi öğreneceksin: *rank-size rule* (hesaplı), *primate city*, *gravity model* (hesaplı) ve Christaller'in merkezî yer kuramı (eşik ve menzil).",
  bolumler: [
    {
      baslik: "Dört kavram, dört ilke",
      kisa: "Hiyerarşi, bağımlılık, göreli büyüklük ve aralık dört ayrı ilkeyle açıklanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔺", terim: "Hierarchy", tr: "hiyerarşi", tanim: "Kentlerin büyüklük ve işlevlerine göre alttan üste sıralanması.", ornek: "Köy, kasaba, il merkezi, büyük kent." },
            { ikon: "🔗", terim: "Interdependence", tr: "karşılıklı bağımlılık", tanim: "Kentlerin birbirinden mal, hizmet, insan ve bilgi alması; birbirine ihtiyaç duyması.", ornek: "Küçük kasaba hastaneye büyük kente gider." },
            { ikon: "⚖️", terim: "Relative size", tr: "göreli büyüklük", tanim: "Bir kentin ülkedeki diğer kentlere göre büyüklüğü.", ornek: "En büyük kent ikinciden kaç kat büyük?" },
            { ikon: "📐", terim: "Spacing", tr: "aralık", tanim: "Kentlerin arasındaki mesafe ve yer dağılışı.", ornek: "Küçük kasabalar sık, büyük kentler seyrek." }
          ] },
        { tip: "tablo", baslik: "Hangi ilke neyi açıklar?", head: ["İlke", "Neyi açıklar?"], rows: [
            ["*Rank-size rule*", "Kentlerin büyüklük sıralaması (göreli büyüklük)"],
            ["*Primate city*", "En büyük kentin ülkeye hâkim olduğu durum"],
            ["*Gravity model*", "İki kentin birbirine ne kadar çekim ve etkileşim yaşadığı"],
            ["*Central place theory*", "Kentlerin aralığı ve hiyerarşisi (hangi mal nerede satılır)"]
          ] }
      ]
    },
    {
      baslik: "*Rank-size rule*",
      kisa: "N. büyük kentin nüfusu, en büyük kentin nüfusunun 1/n'sidir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "P", alt: "n. kentin nüfusu" }, "=",
            { t: "P₁ ÷ n", alt: "en büyük kent ÷ sıra no" }
          ], aciklama: "Kuralda 2. kent en büyüğün yarısı, 3. kent üçte biri, 4. kent dörtte biri kadardır." },
        { tip: "ornek", baslik: "Rank-size hesabı", durum: "Bir ülkenin en büyük kenti 12 milyon kişidir. Kurala göre 2., 3., 4. ve 5. kentlerin nüfusu kaçtır?",
          adimlar: ["2. kent: 12 ÷ 2 = 6 milyon.", "3. kent: 12 ÷ 3 = 4 milyon.", "4. kent: 12 ÷ 4 = 3 milyon.", "5. kent: 12 ÷ 5 = 2,4 milyon."],
          sonuc: "Beklenen sıralama: ==12, 6, 4, 3, 2,4== milyon. Gerçek veri bu sayılara yakınsa ülke *rank-size* kuralına uyar. Kural, kentlerin dengeli bir hiyerarşi oluşturduğunu gösterir." }
      ]
    },
    {
      baslik: "*Primate city*",
      kisa: "En büyük kent ikincisinin en az iki katıysa ülkenin *primate city*'si vardır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👑", terim: "Primate city", tr: "baskın kent", tanim: "Ülkenin en büyük kenti, ikinci büyük kentin en az iki katı kadar olup ekonomide, siyasette ve kültürde ülkeye hâkimdir.", ornek: "Bangkok, Tayland'ın diğer kentlerinden kat kat büyüktür." }
          ] },
        { tip: "grafik", baslik: "*Rank-size* ile *primate city* karşılaştırması", xlabel: "Büyüklük sırası", ylabel: "Nüfus (milyon)", xmax: 8, ymax: 13,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }, { v: 8, label: "8" }],
          yticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }, { v: 12, label: "12" }],
          ogeler: [
            { id: "rs", tip: "egri", renk: 0, etiket: "Rank-size", noktalar: [[1, 12], [2, 6], [3, 4], [4, 3], [5, 2.4], [6, 2], [7, 1.7], [8, 1.5]] },
            { id: "r2", tip: "nokta", x: 2, y: 6, etiket: "2. kent: 6", kilavuz: true, gizli: true },
            { id: "r4", tip: "nokta", x: 4, y: 3, etiket: "4. kent: 3", kilavuz: true, gizli: true },
            { id: "pc", tip: "egri", renk: 2, etiket: "Primate", noktalar: [[1, 12], [2, 3.5], [3, 2.5], [4, 1.8], [5, 1.4], [6, 1.1], [7, 0.9], [8, 0.8]], gizli: true },
            { id: "p2", tip: "nokta", x: 2, y: 3.5, etiket: "2. kent: 3,5", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "==*Rank-size* eğrisi==: büyüklük 12, 6, 4, 3… diye düzgünce azalır." },
            { metin: "2. kent 12 ÷ 2 = 6, 4. kent 12 ÷ 4 = 3 milyon: kuralın beklediği değerler.", goster: ["r2", "r4"] },
            { metin: "Şimdi başka bir ülke: en büyük kent yine 12 milyon ama 2. kent yalnızca 3,5 milyon. Eğri ==çok daha hızlı düşer==.", goster: ["pc", "p2"], gizle: ["r2", "r4"] },
            { metin: "12 ÷ 3,5 ≈ 3,4: en büyük kent ikincisinin ==iki katından fazla==. Bu bir *primate city* örneğidir; diğer kentler onun gölgesinde kalır." }
          ] },
        { tip: "tuzak", metin: "*Primate city* en büyük kent demek değildir; ikincisine oranı belirler.", yanlis: "Her ülkenin en büyük kenti *primate city*'dir.", dogru: "En büyük kent ==ikinciden en az iki kat== büyükse (ve ülkeye hâkimse) *primate city* denir. Kentler dengeli büyüklükteyse (rank-size) en büyük kent *primate* sayılmaz." }
      ]
    },
    {
      baslik: "*Gravity model*",
      kisa: "Kentler büyüdükçe birbirini daha çok çeker, uzaklaştıkça çok daha az çeker.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Etkileşim", alt: "iki kent arasında" }, "∝",
            { t: "P₁ × P₂", alt: "nüfusların çarpımı" }, "÷",
            { t: "d²", alt: "mesafenin karesi" }
          ], aciklama: "Nüfus büyüdükçe etkileşim artar; mesafe arttıkça etkileşim karesiyle azalır." },
        { tip: "ornek", baslik: "Üç kentin etkileşimi", durum: "A kentinin nüfusu 4 milyon, B kentininki 3 milyon, C kentininki 1 milyon. A–B ve A–C aralarındaki mesafe 2 birimdir (1 birim = 100 km). Hangi çiftin etkileşimi daha fazladır? A–B mesafesi 4 birime çıksaydı ne olurdu?",
          adimlar: ["A–B: (4 × 3) ÷ 2² = 12 ÷ 4 = 3.", "A–C: (4 × 1) ÷ 2² = 4 ÷ 4 = 1.", "A–B mesafesi 4 olursa: 12 ÷ 4² = 12 ÷ 16 = 0,75.", "0,75 ÷ 3 = 1/4: mesafe iki katına çıkınca etkileşim dörtte bire düştü."],
          sonuc: "A–B etkileşimi (3) A–C etkileşiminden (1) ==3 kat== fazladır. Mesafe 2 katına çıkınca etkileşim ==4 kat azalır==." },
        { tip: "grafik", baslik: "Etkileşim mesafeyle hızla azalır", xlabel: "Mesafe (birim)", ylabel: "Etkileşim", xmax: 6, ymax: 13,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          yticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }, { v: 12, label: "12" }],
          ogeler: [
            { id: "ab", tip: "egri", renk: 0, etiket: "A–B", noktalar: [[1, 12], [1.25, 7.68], [1.5, 5.33], [2, 3], [3, 1.33], [4, 0.75], [5, 0.48], [6, 0.33]] },
            { id: "pab", tip: "nokta", x: 2, y: 3, etiket: "d=2: 3", kilavuz: true, gizli: true },
            { id: "pab4", tip: "nokta", x: 4, y: 0.75, etiket: "d=4: 0,75", kilavuz: true, gizli: true },
            { id: "ac", tip: "egri", renk: 2, etiket: "", noktalar: [[1, 4], [1.25, 2.56], [1.5, 1.78], [2, 1], [3, 0.44], [4, 0.25], [5, 0.16], [6, 0.11]], gizli: true },
            { id: "pac", tip: "nokta", x: 2, y: 1, etiket: "A–C: 1", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "A–B çifti için etkileşim eğrisi: yakınken yüksek, uzaklaştıkça hızla düşer." },
            { metin: "2 birimde etkileşim 3; mesafe 4'e çıkınca ==0,75==: dörtte bire düştü.", goster: ["pab", "pab4"] },
            { metin: "C kenti küçük (1 milyon) olduğu için A–C eğrisi ==aynı mesafede çok daha aşağıdadır==: 2 birimde etkileşim yalnızca 1.", goster: ["ac", "pac"] }
          ] }
      ]
    },
    {
      baslik: "Christaller'in merkezî yer kuramı",
      kisa: "Her mal, yeterli müşteri (eşik) ve ulaşılabilir uzaklık (menzil) ister.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏪", terim: "Central place", tr: "merkezî yer", tanim: "Çevresindeki alana mal ve hizmet sunan yerleşim.", ornek: "Köye bakkal, kasabaya eczane, kente üniversite hastanesi." },
            { ikon: "👥", terim: "Threshold", tr: "eşik nüfus", tanim: "Bir mal ya da hizmetin ayakta kalması için gereken en az müşteri sayısı (en az nüfus).", ornek: "Fırın için birkaç yüz kişi yeter; üniversite hastanesi için yüz binlerce kişi gerekir." },
            { ikon: "🚶", terim: "Range", tr: "menzil", tanim: "İnsanların bir mal için gitmeye razı olduğu en uzak mesafe.", ornek: "Ekmek için 500 m, kulak burun boğaz uzmanı için 40 km." }
          ] },
        { tip: "ikili", sol: { ikon: "🍞", baslik: "*Low-order goods* (düşük mertebeli)", maddeler: ["Sık alınan, ucuz mallar: ekmek, süt", "Eşik ve menzil küçük; çok sayıda küçük yer"] },
          sag: { ikon: "💎", baslik: "*High-order goods* (yüksek mertebeli)", maddeler: ["Nadir alınan, pahalı mallar: mücevher, uzman doktor", "Eşik ve menzil büyük; az sayıda büyük kent"] },
          oyun: [
            { metin: "Mahalle bakkalı", cevap: "sol", neden: "Her gün alınır, eşik küçüktür." },
            { metin: "Üniversite hastanesi", cevap: "sag", neden: "Çok nüfusa ihtiyaç duyar, insanlar uzaktan gelir." },
            { metin: "Simit tezgâhı", cevap: "sol", neden: "Düşük eşik ve kısa menzil." },
            { metin: "Mücevher mağazası", cevap: "sag", neden: "Nadir alınır, büyük müşteri tabanı ister." }
          ] },
        { tip: "ornek", baslik: "Dükkân ne zaman açılır?", durum: "Bir giyim mağazasının ayakta kalması için en az 2.000 müşteri gerekiyor (eşik). Her köyde 500 kişi var. İnsanlar bu mağaza için en fazla iki köy öteye gidiyor (kendi köyüyle birlikte menzilde 3 köy var). Mağaza açılır mı? Menzil beş köyü kapsasaydı ne olurdu?",
          adimlar: ["Menzildeki nüfus: 3 köy × 500 = 1.500 kişi.", "1.500 < 2.000: eşik sağlanmıyor.", "Menzil 5 köyü kapsarsa: 5 × 500 = 2.500 kişi.", "2.500 > 2.000: eşik sağlanıyor."],
          sonuc: "İlk durumda mağaza ==açılmaz==, çünkü menzil içindeki nüfus eşiğin altında. Menzil beş köyü kapsarsa ==açılır==." },
        { tip: "tuzak", metin: "Eşik ile menzili karıştırma.", yanlis: "Menzil, malın ayakta kalması için gereken müşteri sayısıdır.", dogru: "==Eşik== gereken en az müşteri sayısı, ==menzil== insanların gitmeye razı olduğu en uzak mesafedir. Mal, menzil içinde en az eşik kadar insan varsa satılır." }
      ]
    },
    {
      baslik: "Altıgen pazar alanları",
      kisa: "Altıgenler boşluk bırakmadan alanı doldurur; yüksek mertebeli yerler seyrektir.",
      bloklar: [
        { tip: "adimlar", baslik: "Christaller'in düşüncesi", adimlar: [
            { baslik: "Düz bir ova", metin: "Kuram her yerde aynı nüfus yoğunluğu ve aynı ulaşım kolaylığı olan düz bir ova varsayar." },
            { baslik: "Her mal için bir daire", metin: "Menzil, merkezî yerin etrafında bir daire gibidir." },
            { baslik: "Daireler boşluk bırakır", metin: "Daireler ya çakışır ya da arada boşluk kalır." },
            { baslik: "Altıgen çözüm", metin: "Altıgen daireye yakındır ve boşluk ile çakışma bırakmadan alanı doldurur." },
            { baslik: "Hiyerarşi", metin: "Küçük yerler sık, büyük yerler seyrek dizilir; her büyük kent çevresindeki küçük yerleri de kapsar." }
          ] },
        { tip: "not", metin: "Gerçekte ova düz değildir: dağ, nehir, yol ve doğal kaynak dağılımı altıgenleri bozar. Kuramın gücü, yerleşimlerin neden bu düzene yaklaştığını açıklamasıdır; sınırı, gerçekçi olmayan varsayımlarıdır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Dört kavram: hiyerarşi, karşılıklı bağımlılık, göreli büyüklük, aralık.",
            "*Rank-size rule*: n. kentin nüfusu = en büyük kent ÷ n (12 milyonluk en büyükten 6, 4, 3, 2,4).",
            "*Primate city*: en büyük kent ikinciden en az iki kat büyük ve ülkeye hâkim.",
            "*Gravity model*: etkileşim ∝ (P₁ × P₂) ÷ d²; mesafe 2 katına çıkınca etkileşim 4 kat düşer.",
            "Merkezî yer kuramı: *threshold* = gereken en az müşteri, *range* = gidilen en uzak mesafe.",
            "Düşük mertebeli mallar (ekmek) sık yerlerde, yüksek mertebeli mallar (üniversite hastanesi) seyrek büyük kentlerde satılır.",
            "Pazar alanları altıgendir; kuram düz ova ve eşit nüfus varsayar."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir ülkenin en büyük kentinin nüfusu 8 milyondur. *Rank-size rule*'a göre dördüncü büyük kentin nüfusu kaç milyondur?",
      opts: ["2", "4", "1", "6"],
      a: 0, why: "Kural P = P₁ ÷ n: 8 ÷ 4 = 2 milyon. En çekici yanlış şık B'dir (4): 8 ÷ 2 = 4 ikinci kentin nüfusudur, dördüncünün değil." },
    { q: "Tablo iki ülkenin dört büyük kentinin nüfusunu gösteriyor. Hangi ifade doğrudur?",
      fig: { type: "table", head: ["Sıra", "K ülkesi (milyon)", "L ülkesi (milyon)"], rows: [["1", "12", "12"], ["2", "6", "3"], ["3", "4", "2"], ["4", "3", "1,5"]], caption: "En büyük dört kent" },
      opts: ["K ülkesinde *primate city* vardır, çünkü en büyük kent en yüksek nüfusludur", "İki ülke de aynı büyüklük düzenine sahiptir", "L ülkesi *rank-size* kuralına K'dan daha iyi uyar", "L'de en büyük kent ikinciden 4 kat büyüktür ve *primate city* sayılır; K ise kurala çok yakındır"],
      a: 3, why: "K'da 12, 6, 4, 3 tam olarak 12 ÷ n değerleridir; kurala uyar. L'de 12 ÷ 3 = 4 kat fark var: *primate city*. A en çekici yanlıştır: *primate city* en büyük kent olmak değil, ikinciye oranla bellidir." },
    { q: "A kentinin nüfusu 4 milyon, B kentinin 2 milyon, C kentinin 4 milyondur. A–B arası 100 km (1 birim), A–C arası 200 km (2 birim). *Gravity model*'e göre hangisi doğrudur?",
      opts: ["A–C etkileşimi daha fazladır, çünkü C daha büyüktür", "İki etkileşim eşittir", "A–B etkileşimi A–C etkileşiminin 2 katıdır", "A–B etkileşimi A–C etkileşiminin 4 katıdır"],
      a: 2, why: "A–B: (4 × 2) ÷ 1² = 8. A–C: (4 × 4) ÷ 2² = 4. A–B iki kat fazla. A çekici yanlıştır: C büyük olsa da mesafe kareyle etki eder." },
    { q: "Bir mücevher mağazasının ayakta kalması için 20.000 müşteri gerekmektedir (*threshold*). İnsanlar bu mağazaya en fazla 30 km gitmeye razıdır (*range*) ve 30 km yarıçapındaki alanda toplam 8.000 kişi yaşamaktadır. Ne beklenir?",
      opts: ["Mağaza açılır, çünkü menzil 30 km'dir", "Mağaza açılmaz, çünkü menzil içindeki nüfus eşiğin altındadır", "Mağaza açılır, çünkü eşik düşüktür", "Mağaza menzili azaltarak açılır"],
      a: 1, why: "Menzil içindeki nüfus (8.000) eşiğin (20.000) altında; mağaza ayakta kalamaz. A çekici yanlıştır: menzilin uzun olması yeterli değil, içindeki nüfus eşiği karşılamalı. Menzili azaltmak ise nüfusu daha da düşürür." },
    { q: "Christaller'in merkezî yer kuramında pazar alanları neden altıgen çizilir?",
      opts: ["Gerçek kentlerin planları hep altıgendir", "Altıgen en küçük menzili sağlar", "Her mal için menzil sınırı birbirinden farklıdır", "Altıgen daireye yakındır ve boşluk ya da çakışma bırakmadan alanı doldurur"],
      a: 3, why: "Altıgenler daire gibi merkezden her yöne benzer uzaklık verir ama boşluk ya da çakışma oluşturmaz. C şıkkı çekici ama yanlıştır: menzillerin farklı olması hiyerarşi için önemlidir, altıgen şekli açıklamaz." }
  ]
};
