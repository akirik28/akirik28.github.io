/* Kitpath not defteri · bi207 · 2.7 Küresel İklim Değişikliği
   Kaynak: öğretmen lecture'ı (2.5–2.9 Lecture Notes: Global Climate Change; Topic 2.4 greenhouse gases) + okul-10-2025-26.md + MEB Maarif BİY.10.2. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi207",
  amac: "Küresel iklim değişikliğinin ne olduğunu, neden olduğunu ve nasıl yavaşlatılabileceğini öğreneceksin: sera etkisi, sera gazları, CO₂ ve sıcaklık verileri, geri besleme döngüleri, sonuçlar ve uluslararası anlaşmalar.",
  bolumler: [
    {
      baslik: "Hava durumu ve iklim",
      kisa: "Hava durumu kısa süreli, iklim uzun süreli (≈ 30 yıllık) ortalamadır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌦️", terim: "Climate change", tr: "iklim değişikliği", tanim: "BM İklim Değişikliği Çerçeve Sözleşmesi'ne göre, atmosferin bileşimini değiştiren insan faaliyetlerinin yol açtığı, doğal değişkenliğe eklenen iklim değişimi.", ornek: "Türkiye'de ortalama sıcaklıkların son onlarca yılda artması." },
            { ikon: "🌡️", terim: "Global warming", tr: "küresel ısınma", tanim: "Sera gazlarının artışıyla alt atmosfer ve yüzeyin yapay olarak ısınması; küresel iklim değişikliğine yol açar.", ornek: "Sanayi öncesine göre yaklaşık +1,1 °C." }
          ] },
        { tip: "ikili", sol: { ikon: "⛈️", baslik: "*Weather*", maddeler: ["Kısa süre: saat, gün, hafta", "Belirli yerde atmosferin anlık hâli"] },
          sag: { ikon: "📈", baslik: "*Climate*", maddeler: ["Uzun süre: ≈ 30 yıl ortalaması", "Bir bölgenin tipik hava koşulları"] },
          oyun: [
            { metin: "Bugün İzmir'de yağmur yağıyor.", cevap: "sol", neden: "Anlık durum: *weather*." },
            { metin: "Akdeniz'de yazlar sıcak ve kurak, kışlar ılık ve yağışlıdır.", cevap: "sag", neden: "Uzun süreli tipik düzen: *climate*." },
            { metin: "Son 30 yılda Türkiye'nin ortalama sıcaklığı arttı.", cevap: "sag", neden: "Uzun dönem eğilimi: *climate*." },
            { metin: "Yarın İstanbul'da fırtına bekleniyor.", cevap: "sol", neden: "Kısa vadeli tahmin: *weather*." },
            { metin: "Bu yıl ocak ayı normalden soğuk geçti.", cevap: "sol", neden: "Tek ay: *weather*; iklim eğilimi değil." }
          ] },
        { tip: "tuzak", metin: "Soğuk bir kış, küresel ısınmayı çürütmez.", yanlis: "Bu kış çok soğuk geçti; demek ki küresel ısınma yok.", dogru: "Hava durumu günden güne dalgalanır. İklimde ==uzun dönem== ortalamaya bakılır; küresel ortalama artarken yerel soğuk dönemler olabilir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Weather describes short-term atmospheric conditions, whereas climate describes the average conditions over about 30 years.*", metin: "Ayrımı tek cümlede söyler." }
          ] }
      ]
    },
    {
      baslik: "Sera etkisi ve sera gazları",
      kisa: "Sera gazları yerden yayılan ısıyı tutar; doğal sera etkisi yaşamı mümkün kılar.",
      bloklar: [
        { tip: "adimlar", baslik: "Sera etkisi nasıl işler?", adimlar: [
            { baslik: "Güneş ışığı gelir", metin: "Görünür ışık atmosferden geçer ve yeryüzünü ısıtır." },
            { baslik: "Yer ısı yayar", metin: "Isınan yüzey, uzun dalgalı kızılötesi ışın (ısı) yayar." },
            { baslik: "Sera gazları tutar", metin: "CO₂, su buharı, ozon, diazot monoksit (N₂O) ve CH₄ bu ısının bir kısmını soğurur ve her yöne tekrar yayar; bir kısmı yere döner." },
            { baslik: "Yer daha sıcak kalır", metin: "Doğal sera etkisi olmasa ortalama sıcaklık yaklaşık −18 °C olurdu; etkiyle yaklaşık +15 °C'dir." },
            { baslik: "İnsan etkisi", metin: "Fosil yakıt kullanımı, sanayileşme, hızlı nüfus artışı, tarım için ormansızlaşma, yanlış arazi kullanımı ve kentleşme sera gazlarını artırır: ==güçlenmiş sera etkisi== (*enhanced greenhouse effect*)." }
          ] },
        { tip: "tablo", baslik: "Başlıca sera gazları", head: ["Gaz", "Başlıca kaynak", "Not"],
          rows: [
            ["CO₂", "Fosil yakıtlar (kömür, petrol, doğal gaz), çimento, ormansızlaşma", "En çok salınan; atmosferde yüzyıllarca kalır"],
            ["CH₄ (metan)", "Çeltik tarlaları, geviş getiren hayvanlar, çöp depolama alanları, doğal gaz sızıntısı", "100 yıllık ölçekte CO₂'den yaklaşık 28 kat güçlü; ömrü yaklaşık 12 yıl"],
            ["N₂O", "Kimyasal gübre, hayvancılık, sanayi", "CO₂'den yaklaşık 270 kat güçlü; uzun ömürlü"],
            ["Su buharı", "Buharlaşma", "En bol sera gazı; sıcaklığa bağlı olarak artar (geri besleme)"],
            ["Ozon (O₃), CFC, HFC", "Yer seviyesi ozon (smog); soğutucu ve sprey", "Lecture sera gazları arasında ozonu da sayar; CFC az miktarda ama çok güçlü"]
          ] },
        { tip: "tuzak", metin: "Sera etkisi ile sera etkisinin güçlenmesi aynı şey değildir.", yanlis: "Sera etkisi zararlıdır; hiç olmasa daha iyi olurdu.", dogru: "Doğal sera etkisi yaşamı mümkün kılar (−18 °C yerine +15 °C). Sorun, etkinin ==insan faaliyetiyle güçlenmesidir==." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Greenhouse gases absorb infrared radiation emitted by the Earth and re-emit it, warming the surface.*", metin: "Sera etkisi tanımı." },
            { ikon: "✍️", baslik: "*Burning fossil fuels and deforestation increase the concentration of greenhouse gases.*", metin: "İnsan etkisi." }
          ] }
      ]
    },
    {
      baslik: "Kanıtlar: CO₂ ve sıcaklık (ek bilgi: veriler)",
      kisa: "CO₂ sanayi devriminden beri yaklaşık yüzde 50 arttı; sıcaklık yaklaşık 1,1 °C yükseldi.",
      bloklar: [
        { tip: "grafik", baslik: "Atmosferdeki CO₂ (yaklaşık değerler; eksen 270 ppm'den başlar)", xlabel: "Yıl", ylabel: "CO₂ (ppm)", xmax: 7, ymax: 10,
          xticks: [{ v: 0, label: "1850" }, { v: 2, label: "1900" }, { v: 4, label: "1950" }, { v: 6, label: "2000" }, { v: 7, label: "2025" }],
          yticks: [{ v: 0.625, label: "280" }, { v: 3.75, label: "330" }, { v: 6.875, label: "380" }, { v: 9.375, label: "420" }],
          ogeler: [
            { id: "c1", tip: "egri", renk: 0, noktalar: [[0, 0.94], [1, 1.19], [2, 1.63]], gizli: true },
            { id: "c2", tip: "egri", renk: 0, noktalar: [[2, 1.63], [3, 2.19], [4, 2.56]], gizli: true },
            { id: "c3", tip: "egri", renk: 3, noktalar: [[4, 2.56], [5, 3.81], [6, 6.19]], gizli: true },
            { id: "c4", tip: "egri", renk: 3, noktalar: [[6, 6.19], [7, 9.69]], gizli: true },
            { id: "e1", tip: "nokta", renk: 1, x: 0, y: 0.94, etiket: "≈ 285 (sanayi öncesi)", gizli: true },
            { id: "e2", tip: "nokta", renk: 1, x: 7, y: 9.69, etiket: "≈ 425", gizli: true }
          ],
          durumlar: [
            { metin: "Sanayi Devrimi'nden önce CO₂ yaklaşık ==280 ppm== idi (1850'de ≈ 285).", goster: ["c1", "e1"] },
            { metin: "1900–1950: fosil yakıt kullanımı arttıkça yavaş bir yükseliş.", goster: ["c2"] },
            { metin: "1950–2000: sanayi ve ulaşımla artış ==hızlanır==. Doğrudan ölçümler 1958'de Mauna Loa'da başladı.", goster: ["c3"] },
            { metin: "Bugün yaklaşık ==425 ppm==, yani sanayi öncesine göre yaklaşık %50 fazla.", goster: ["c4", "e2"] },
            { metin: "Buz çekirdeklerindeki hava kabarcıkları, son yaklaşık 800 bin yılda CO₂'nin 180–300 ppm arasında kaldığını gösteriyor. Bugünkü değer bu aralığın çok üstünde." }
          ] },
        { tip: "grafik", baslik: "Küresel ortalama sıcaklık artışı (şematik; 1850–1900'e göre)", xlabel: "Yıl", ylabel: "Sıcaklık farkı (°C)", xmax: 7, ymax: 10,
          xticks: [{ v: 0, label: "1850" }, { v: 2, label: "1900" }, { v: 4, label: "1950" }, { v: 6, label: "2000" }, { v: 7, label: "2025" }],
          yticks: [{ v: 3, label: "0,5" }, { v: 6, label: "1,0" }, { v: 9, label: "1,5" }],
          ogeler: [
            { id: "t1", tip: "egri", renk: 0, noktalar: [[0, 0.3], [1, 0.1], [2, 0], [3, 0.4], [4, 0.6]], gizli: true },
            { id: "t2", tip: "egri", renk: 3, noktalar: [[4, 0.6], [5, 1], [6, 3.6]], gizli: true },
            { id: "t3", tip: "egri", renk: 3, noktalar: [[6, 3.6], [7, 8.1]], gizli: true },
            { id: "lim", tip: "cizgi", renk: 1, kesik: true, from: [0, 9], to: [7, 9], gizli: true },
            { id: "limt", tip: "yazi", x: 0.1, y: 9.5, hiza: "start", metin: "Paris hedefi: 1,5 °C", gizli: true }
          ],
          durumlar: [
            { metin: "1850–1950: dalgalanma var ama belirgin bir yükseliş yok.", goster: ["t1"] },
            { metin: "1950'den sonra ısınma başlar, 1980'lerden itibaren hızlanır.", goster: ["t2"] },
            { metin: "2011–2020 ortalaması sanayi öncesine göre ≈ ==+1,1 °C==. En sıcak yıllar hep son on yılda görüldü.", goster: ["t3"] },
            { metin: "Paris Anlaşması'nın hedefi uzun dönemli ısınmayı 1,5 °C'de tutmaya çalışmak. Tek bir yılın 1,5 °C'yi aşması hedefin aşıldığı anlamına gelmez; hedef 20–30 yıllık ortalamadır.", goster: ["lim", "limt"] }
          ] },
        { tip: "tuzak", metin: "İklim geçmişte de değişti, bu doğru ama yetmez.", yanlis: "İklim hep doğal olarak değişti; bugünkü ısınma da doğaldır.", dogru: "Geçmiş değişimler yavaştı ve doğal nedenleri vardı (Dünya'nın yörünge değişimi, volkanlar, Güneş). Bugünkü artış ==çok daha hızlıdır== ve CO₂'nin karbon parmak izi fosil yakıtlara işaret eder." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The graph shows that the concentration of CO₂ has increased since the Industrial Revolution, especially after 1950.*", metin: "CO₂ grafiği." },
            { ikon: "✍️", baslik: "*Global average temperature has risen by about 1.1 °C compared with pre-industrial levels.*", metin: "Sıcaklık grafiği." }
          ] }
      ]
    },
    {
      baslik: "Geri besleme döngüleri (ek bilgi)",
      kisa: "Pozitif geri besleme ısınmayı hızlandırır: buz azalır, yer daha çok ısı emer.",
      bloklar: [
        { tip: "adimlar", baslik: "Buz–albedo geri beslemesi", adimlar: [
            { baslik: "Isınma buzu eritir", metin: "Kutuplarda ve dağlarda kar ve buz azalır." },
            { baslik: "Albedo düşer", metin: "Beyaz kar ve buz Güneş ışığının büyük kısmını yansıtır (yüksek *albedo*). Altından çıkan koyu deniz ve toprak ise çoğunu emer." },
            { baslik: "Daha çok enerji emilir", metin: "Koyu yüzey daha çok ısınır." },
            { baslik: "Isınma güçlenir", metin: "Daha çok ısınma daha çok buz eritir: döngü kendini besler." }
          ] },
        { tip: "tablo", baslik: "Başlıca geri beslemeler", head: ["Geri besleme", "Nasıl çalışır?", "Tür"],
          rows: [
            ["Buz–albedo", "Buz azalır, yüzey daha çok ısı emer", "Pozitif (+)"],
            ["Permafrost erimesi", "Donmuş toprakta tutulan CH₄ ve CO₂ açığa çıkar", "Pozitif (+)"],
            ["Su buharı", "Isınan hava daha çok su buharı taşır; buhar da sera gazıdır", "Pozitif (+)"],
            ["Okyanus ısınması", "Sıcak suda CO₂ daha az çözünür; atmosferde kalan CO₂ artar", "Pozitif (+)"],
            ["Bitki büyümesi", "Fazla CO₂ fotosentezi artırır, daha çok CO₂ tutulur; su ve besin kısıtı sınırlar", "Negatif (−), sınırlı"]
          ] },
        { tip: "tuzak", metin: "Pozitif ve negatif, iyi ve kötü demek değildir.", yanlis: "Pozitif geri besleme ısınmayı azaltır.", dogru: "Pozitif geri besleme değişimi ==güçlendirir==, negatif geri besleme zayıflatır. Isınma söz konusuysa pozitif geri besleme ısınmayı hızlandırır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Melting ice reduces the albedo of the surface, so more solar energy is absorbed.*", metin: "Buz–albedo." },
            { ikon: "✍️", baslik: "*A positive feedback loop amplifies the original change.*", metin: "Pozitif geri besleme." }
          ] }
      ]
    },
    {
      baslik: "Sonuçlar",
      kisa: "Deniz seviyesi yükselir; aşırı hava olayları ve habitat kayıpları artar.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { onek: "≈ ", deger: 1.1, sonek: " °C", etiket: "Sanayi öncesine göre ortalama ısınma (2011–2020)" },
            { onek: "≈ ", deger: 20, sonek: " cm", etiket: "1901–2018 arasında küresel deniz seviyesi artışı" },
            { onek: "≈ ", deger: 50, sonek: " %", etiket: "CO₂ artışı sanayi öncesine göre (≈ 280 → ≈ 425 ppm)" }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🌊", baslik: "Deniz seviyesi yükselir", metin: "İki nedeni var: ısınan suyun genleşmesi (*thermal expansion*) ve kara buzullarının erimesi. Kıyı kentleri ve kıyı ekosistemleri zarar görür." },
            { ikon: "🪸", baslik: "Okyanus asitleşir, mercanlar beyazlar", metin: "Okyanus CO₂ çözdükçe pH düşer; kabuklu canlılar ve mercanlar zarar görür." },
            { ikon: "🦋", baslik: "Habitat kaybı ve türler", metin: "Bitki örtüsü bozulur, bazı türler yaşam alanını kaybeder ve yok olabilir; soğuk seven türler yükseltiye ve kutuplara çekilir." },
            { ikon: "🔥", baslik: "Aşırı hava olayları artar", metin: "Kuraklık, çölleşme, orman yangını, aşırı yağış, sel, heyelan ve fırtına; göl ve akarsu seviyeleri düşer. Türkiye'de 2021 yazında büyük orman yangınları ve sel yaşandı (ek bilgi)." },
            { ikon: "🌾", baslik: "Su ve gıda güvenliği zorlanır", metin: "Kuraklık ve sel verimi düşürür; tatlı su kaynakları azalır." }
          ] },
        { tip: "tuzak", metin: "Buzun erimesi her zaman deniz seviyesini yükseltmez.", yanlis: "Arktik deniz buzu erirse deniz seviyesi yükselir.", dogru: "Denizde ==yüzen buz== erirse seviye hemen hemen değişmez (içkideki buz gibi). Seviyeyi ==kara üzerindeki buz== (Grönland, Antarktika, dağ buzulları) ve su genleşmesi yükseltir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Sea level is rising because of thermal expansion of seawater and melting of land ice.*", metin: "Deniz seviyesi cümlesi." },
            { ikon: "✍️", baslik: "*Rising temperatures force many species to shift their ranges toward the poles or higher altitudes.*", metin: "Ekosistem etkisi." }
          ] }
      ]
    },
    {
      baslik: "Çözümler ve uluslararası anlaşmalar",
      kisa: "Azaltım kaynağı küçültür, uyum zararı hafifletir; ikisi birlikte gerekir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⬇️", baslik: "*Mitigation*", maddeler: ["Sera gazı salınımını azaltmak ya da tutmak", "Kaynağa müdahale"] },
          sag: { ikon: "🛟", baslik: "*Adaptation*", maddeler: ["Değişimin zararına hazırlanmak", "Sonuca müdahale"] },
          oyun: [
            { metin: "Kömürlü santral yerine güneş ve rüzgâr enerjisi kullanmak.", cevap: "sol", neden: "Salınımı azaltıyor: *mitigation*." },
            { metin: "Kıyı kentlerinde sel setleri ve yüksek yapı.", cevap: "sag", neden: "Zarara hazırlık: *adaptation*." },
            { metin: "Ağaçlandırma ile karbon tutmak.", cevap: "sol", neden: "CO₂ yutağı artıyor: *mitigation*." },
            { metin: "Kuraklığa dayanıklı buğday çeşitleri geliştirmek.", cevap: "sag", neden: "Değişimle başa çıkma: *adaptation*." },
            { metin: "Binalarda yalıtımla enerji tasarrufu.", cevap: "sol", neden: "Daha az fosil yakıt: *mitigation*." },
            { metin: "Sıcak hava dalgaları için erken uyarı sistemi.", cevap: "sag", neden: "Etkiye hazırlık: *adaptation*." }
          ] },
        { tip: "tablo", baslik: "İklim anlaşmaları", head: ["Anlaşma", "Yıl", "Ne yapar?"],
          rows: [
            ["BM İklim Değişikliği Çerçeve Sözleşmesi (*UNFCCC*)", "1992 (Rio)", "İklim değişikliğiyle mücadele için ortak çerçeve"],
            ["Kyoto Protokolü", "1997 (yürürlük 2005)", "Gelişmiş ülkelere bağlayıcı emisyon azaltma hedefleri"],
            ["Paris Anlaşması", "2015 (yürürlük 2016)", "Isınmayı 2 °C'nin çok altında, mümkünse 1,5 °C'de tutma; her ülke kendi hedefini (*NDC*) belirler"]
          ], not: "Türkiye Paris Anlaşması'nı 2021'de onayladı ve 2053 yılı için net sıfır emisyon hedefi açıkladı." },
        { tip: "not", metin: "Bireysel adımlar da önemlidir: enerji tasarrufu, toplu taşıma ya da bisiklet, gıda israfını azaltmak, et tüketimini dengelemek, geri dönüşüm. Teknoloji tarafında yenilenebilir enerji (güneş, rüzgâr, jeotermal, hidroelektrik), enerji verimliliği ve ormanların korunması (karbon yutağı) öne çıkar." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Mitigation reduces greenhouse gas emissions, whereas adaptation reduces the harm caused by climate change.*", metin: "Azaltım ve uyum ayrımı." },
            { ikon: "✍️", baslik: "*The Paris Agreement aims to limit global warming to well below 2 °C.*", metin: "Paris Anlaşması." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Hava durumu kısa süreli, iklim ≈ 30 yıllık ortalamadır; soğuk bir kış ısınmayı çürütmez.",
            "Sera gazları yerden yayılan kızılötesi ısıyı tutar. Doğal sera etkisi −18 °C yerine +15 °C sağlar; sorun insan kaynaklı güçlenmedir.",
            "Başlıca gazlar: su buharı, CO₂ (fosil yakıt, ormansızlaşma), CH₄ (çeltik, hayvancılık, çöp), N₂O (gübre), ozon, CFC.",
            "CO₂ ≈ 280 ppm'den ≈ 425 ppm'e çıktı (≈ %50); küresel sıcaklık yaklaşık 1,1 °C arttı.",
            "Pozitif geri besleme değişimi güçlendirir: buz–albedo, permafrost, su buharı.",
            "Deniz seviyesi su genleşmesi ve kara buzulu erimesiyle yükselir; yüzen deniz buzu erimesi yükseltmez.",
            "Azaltım salınımı düşürür, uyum zararı hafifletir.",
            "UNFCCC 1992, Kyoto 1997, Paris 2015 (1,5 °C çabası); Türkiye 2053 net sıfır hedefi açıkladı."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "The table gives the (approximate) concentration of CO₂ in the atmosphere. Which conclusion is best supported by the table?",
      fig: { type: "table", head: ["Year", "1850", "1950", "2000", "2020"], rows: [["CO₂ (ppm)", 285, 311, 369, 414]], caption: "Atmospheric CO₂" },
      opts: ["The CO₂ concentration has decreased since 1850.", "The CO₂ concentration has stayed constant.", "The CO₂ concentration has increased only since 2000.", "The CO₂ concentration has increased continuously and the rate of increase has become greater over time."],
      a: 3,
      why: "1850–1950 arasında yaklaşık 26 ppm, 1950–2000 arasında 58 ppm, 2000–2020 arasında 45 ppm artış var: değer sürekli artıyor ve yıllık artış hızı yükseliyor. Üçüncü şık yalnızca son dönemi, ilk şık ise yönü yanlış okur."
    },
    {
      q: "Which statement about the greenhouse effect is correct?",
      opts: ["Greenhouse gases absorb the infrared radiation emitted by the Earth; without the natural greenhouse effect the average temperature would be about −18 °C.", "Greenhouse gases cool the Earth by reflecting sunlight back into space.", "The greenhouse effect occurs only because of human activities.", "The most abundant greenhouse gas in the atmosphere is ozone."],
      a: 0,
      why: "Sera gazları yerden yayılan uzun dalgalı ısıyı soğurur ve geri yayar; doğal sera etkisi yaşamı mümkün kılar. İnsan etkisi bunu güçlendirir ama doğal bir etki zaten vardır."
    },
    {
      q: "Which of the following raises the global sea level?",
      opts: ["Melting of Arctic sea ice", "Melting of the Greenland ice sheet and thermal expansion of warming ocean water", "Melting of icebergs floating in the sea", "Dissolving of CO₂ in the oceans"],
      a: 1,
      why: "Kara üzerindeki buzun erimesi denize yeni su ekler; ısınan su da genleşir. Yüzen buz zaten suyun yerini tuttuğu için erimesi seviyeyi belirgin değiştirmez."
    },
    {
      q: "Which of the following is an example of a positive feedback loop?",
      opts: ["Increased photosynthesis by plants lowering atmospheric CO₂", "Increased rainfall lowering the temperature", "Warming melts ice, and darker surfaces absorb more solar energy, causing even more warming", "The oceans absorbing CO₂"],
      a: 2,
      why: "Pozitif geri besleme ilk değişimi güçlendirir: ısınma → buz erir → albedo düşer → daha çok ısınma. Diğer seçenekler ısınmayı azaltan (negatif) etkilerdir."
    },
    {
      q: "A coastal city builds a sea wall against rising sea level and installs solar panels on the roofs of municipal buildings. Which strategies are these two steps, respectively?",
      opts: ["Adaptation and mitigation", "Mitigation and adaptation", "Both are mitigation", "Both are adaptation"],
      a: 0,
      why: "Dalgakıran, yükselen denizin zararına hazırlık olduğu için uyumdur. Güneş paneli fosil yakıt kullanımını ve CO₂ salınımını azalttığı için azaltımdır."
    }
  ]
};
