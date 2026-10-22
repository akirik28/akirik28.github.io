/* Kitora not defteri · bi203 · 2.3 Ekosistemde Enerji Akışı
   Kaynak: okul-10-2025-26.md (Biology Tema 2) + MEB Maarif BİY.10.2. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi203",
  amac: "Enerjinin ekosistemde nasıl aktığını öğreneceksin: besin zinciri ve ağı, trofik düzeyler, enerji ve biyokütle piramitleri (%10 kuralı) ve zehirli maddelerin besin zincirinde nasıl biriktiğini (biyobirikim ve biyolojik büyütme).",
  bolumler: [
    {
      baslik: "Besin zinciri ve besin ağı",
      kisa: "Zincir tek bir yolu, ağ bütün yolları gösterir; ok enerjinin yönünü gösterir.",
      bloklar: [
        { tip: "adimlar", baslik: "Bir çayır besin zinciri", adimlar: [
            { baslik: "Ot (*producer*)", metin: "Güneş enerjisini fotosentezle kimyasal enerjiye çevirir. Zincir burada başlar." },
            { baslik: "Çekirge (*primary consumer*)", metin: "Otu yer; enerjinin bir kısmını alır." },
            { baslik: "Kurbağa (*secondary consumer*)", metin: "Çekirgeyi yer." },
            { baslik: "Yılan (*tertiary consumer*)", metin: "Kurbağayı yer." },
            { baslik: "Yılan kartalı (*top predator*)", metin: "Yılanı yer; doğal düşmanı yoktur. Ölünce hepsi ayrıştırıcılara kalır." }
          ] },
        { tip: "tablo", baslik: "Çayır besin ağında kim kimi yer?", head: ["Canlı", "Neyi yer?", "Kim onu yer?"],
          rows: [
            ["Ot", "— (üretici)", "Çekirge, fare"],
            ["Çekirge", "Ot", "Kurbağa, kertenkele"],
            ["Fare", "Ot tohumu", "Yılan, tilki"],
            ["Kurbağa", "Çekirge", "Yılan"],
            ["Yılan", "Fare, kurbağa", "Yılan kartalı"],
            ["Yılan kartalı", "Yılan", "—"]
          ], not: "Bir canlının birden çok yolu varsa zincirler birleşir ve ==*food web*== (besin ağı) oluşur. Ağ, zincirden daha sağlamdır: fare azalırsa yılan kurbağaya yönelebilir." },
        { tip: "tuzak", metin: "Okun yönü ilk bakışta ters gelir.", yanlis: "Ok, yiyenden yenene çizilir (kurbağa → çekirge).", dogru: "Ok ==enerji akışını== gösterir: yenenden yiyene (çekirge → kurbağa)." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The arrow shows the direction of energy flow.*", metin: "Ok yönü için." },
            { ikon: "✍️", baslik: "*Grass is the producer and the grasshopper is the primary consumer.*", metin: "Zincir tarifi için örnek." }
          ] }
      ]
    },
    {
      baslik: "Trofik düzeyler",
      kisa: "Trofik düzey, canlının besin zincirindeki basamağıdır; üretici birinci düzeydir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌱", terim: "Producer", tr: "üretici", tanim: "Işık ya da kimyasal enerjiyle kendi organik besinini yapar; 1. trofik düzey.", ornek: "Çam ağacı, fitoplankton, kemosentetik bakteri." },
            { ikon: "🐛", terim: "Primary consumer", tr: "1. derece tüketici", tanim: "Üreticiyle beslenen otçul (*herbivore*); 2. trofik düzey.", ornek: "Çekirge, geyik, zooplankton." },
            { ikon: "🦊", terim: "Secondary and tertiary consumers", tr: "2. ve 3. derece tüketici", tanim: "Başka hayvanları yiyen etçiller (*carnivore*); 3. ve 4. trofik düzey.", ornek: "Kurbağa, yılan, tilki." },
            { ikon: "🍄", terim: "Decomposer", tr: "ayrıştırıcı", tanim: "Ölü canlıyı ve atıkları parçalayıp mineralleri toprağa verir. Solucan gibi ölü maddeyi yiyenlere *detritivore* denir.", ornek: "Mantar, bakteri." },
            { ikon: "🐻", terim: "Omnivore", tr: "hepçil", tanim: "Hem bitki hem hayvan yer; birden çok trofik düzeyde yer alır.", ornek: "Boz ayı, domuz, insan." }
          ] },
        { tip: "ikili", sol: { ikon: "☀️", baslik: "*Autotroph*", maddeler: ["Kendi besinini yapar", "Fotoototrof ve kemoototrof"] },
          sag: { ikon: "🍴", baslik: "*Heterotroph*", maddeler: ["Hazır organik madde yer", "Tüketici ve ayrıştırıcılar"] },
          oyun: [
            { metin: "Karadeniz'deki fitoplankton.", cevap: "sol", neden: "Fotosentez yapar: *autotroph*." },
            { metin: "Çürüyen kütükteki mantar.", cevap: "sag", neden: "Hazır organik madde kullanır: *heterotroph*." },
            { metin: "Derin deniz bacasında H₂S ile besin yapan bakteri.", cevap: "sol", neden: "Kemosentez yapar: *autotroph*." },
            { metin: "Çayırdaki çekirge.", cevap: "sag", neden: "Ot yer: *heterotroph*." },
            { metin: "Çam ağacı.", cevap: "sol", neden: "Fotosentez yapar: *autotroph*." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Producers form the first trophic level of every food chain.*", metin: "Trofik düzey cümlesi." },
            { ikon: "✍️", baslik: "*An omnivore feeds at more than one trophic level.*", metin: "Hepçil için." }
          ] }
      ]
    },
    {
      baslik: "Enerji piramidi ve %10 kuralı",
      kisa: "Her basamakta enerjinin yaklaşık %10'u bir üst düzeye geçer.",
      bloklar: [
        { tip: "grafik", baslik: "Enerji piramidi (örnek değerler, ölçeksiz çizim)", xlabel: "Enerji (kJ)", ylabel: "Trofik düzey", xmax: 10, ymax: 10,
          yticks: [{ v: 1, label: "1" }, { v: 3.2, label: "2" }, { v: 5.4, label: "3" }, { v: 7.6, label: "4" }],
          ogeler: [
            { id: "a1", tip: "alan", renk: 2, noktalar: [[2.5, 0], [7.5, 0], [7.5, 0], [2.5, 0]] },
            { id: "a2", tip: "alan", renk: 1, noktalar: [[3.4, 2.2], [6.6, 2.2], [6.6, 2.2], [3.4, 2.2]] },
            { id: "a3", tip: "alan", renk: 0, noktalar: [[4.1, 4.4], [5.9, 4.4], [5.9, 4.4], [4.1, 4.4]] },
            { id: "a4", tip: "alan", renk: 3, noktalar: [[4.6, 6.6], [5.4, 6.6], [5.4, 6.6], [4.6, 6.6]] },
            { id: "t1", tip: "yazi", x: 7.7, y: 0.9, hiza: "start", metin: "Üretici · 10 000 kJ", gizli: true },
            { id: "t2", tip: "yazi", x: 6.9, y: 3.1, hiza: "start", metin: "1. tüketici · 1 000 kJ", gizli: true },
            { id: "t3", tip: "yazi", x: 6.1, y: 5.3, hiza: "start", metin: "2. tüketici · 100 kJ", gizli: true },
            { id: "t4", tip: "yazi", x: 5.6, y: 7.5, hiza: "start", metin: "3. tüketici · 10 kJ", gizli: true },
            { id: "h1", tip: "ok", renk: 3, from: [2.4, 1], to: [1.0, 1], gizli: true },
            { id: "h2", tip: "ok", renk: 3, from: [3.3, 3.2], to: [1.9, 3.2], gizli: true },
            { id: "h3", tip: "ok", renk: 3, from: [4.0, 5.4], to: [2.6, 5.4], gizli: true },
            { id: "h4", tip: "ok", renk: 3, from: [4.5, 7.6], to: [3.1, 7.6], gizli: true },
            { id: "ht", tip: "yazi", x: 1.7, y: 1.6, metin: "ısı", gizli: true }
          ],
          durumlar: [
            { metin: "Üreticiler güneş enerjisinin küçük bir kısmını fotosentezle bağlar. Örnek: ==10 000 kJ==.", set: { a1: { noktalar: [[2.5, 0], [7.5, 0], [7.5, 2], [2.5, 2]] } }, goster: ["t1"] },
            { metin: "1. derece tüketici bunun yaklaşık ==%10'unu== alır: 1 000 kJ.", set: { a2: { noktalar: [[3.4, 2.2], [6.6, 2.2], [6.6, 4.2], [3.4, 4.2]] } }, goster: ["t2"] },
            { metin: "2. derece tüketici yine %10'unu alır: 100 kJ.", set: { a3: { noktalar: [[4.1, 4.4], [5.9, 4.4], [5.9, 6.4], [4.1, 6.4]] } }, goster: ["t3"] },
            { metin: "3. derece tüketicide yalnızca 10 kJ kalır. Bu yüzden besin zincirleri genellikle 4–5 halkayı geçmez.", set: { a4: { noktalar: [[4.6, 6.6], [5.4, 6.6], [5.4, 8.6], [4.6, 8.6]] } }, goster: ["t4"] },
            { metin: "Kalan %90 nereye gitti? Çoğu solunumda ==ısı== olarak kaybolur; geri kalanı dışkı ve yenmeyen kısımlarla (kemik, kök) ayrıştırıcılara gider. Enerji bir basamaktan diğerine geçerken azaldığı için piramit her zaman diktir.", goster: ["h1", "h2", "h3", "h4", "ht"] }
          ] },
        { tip: "ornek", baslik: "Büyük balığa ulaşan enerji", durum: "Bir gölde fitoplanktonun bağladığı enerji 20 000 kJ'dir. Zincir: fitoplankton → zooplankton → küçük balık → büyük balık. Her geçişte %10 aktarılıyorsa büyük balığa ne kadar enerji ulaşır?",
          adimlar: [
            "Zooplankton: 20 000 × 0,10 = 2 000 kJ.",
            "Küçük balık: 2 000 × 0,10 = 200 kJ.",
            "Büyük balık: 200 × 0,10 = 20 kJ.",
            "Kısa yol: 3 geçiş var, yani 20 000 × (0,1)³ = 20 000 ÷ 1000 = 20 kJ."
          ], sonuc: "Büyük balığa 20 kJ ulaşır (üreticideki enerjinin binde biri)." },
        { tip: "tuzak", metin: "%10 geçen kısmın oranıdır.", yanlis: "Her basamakta enerjinin %10'u kaybolur.", dogru: "%10'u ==geçer==, ==%90'ı== ısı ve atıklarla kullanılamaz hâle gelir. Enerji yok olmaz ama geri dönmez; akış tek yönlüdür." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Only about 10% of the energy is transferred to the next trophic level; the rest is lost as heat.*", metin: "%10 kuralı." },
            { ikon: "✍️", baslik: "*Energy flows in one direction, from the Sun to the decomposers.*", metin: "Tek yönlü akış." }
          ] }
      ]
    },
    {
      baslik: "Biyokütle piramidi ve enerji piramidi",
      kisa: "Enerji piramidi hep dik durur; biyokütle piramidi ters olabilir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⚡", baslik: "*Pyramid of energy*", maddeler: ["Birim zamanda geçen enerji (akış)", "Birimi: kJ/m²/yıl", "Her zaman dik"] },
          sag: { ikon: "⚖️", baslik: "*Pyramid of biomass*", maddeler: ["Bir anda mevcut canlı madde miktarı (stok)", "Birimi: g/m² (kuru kütle)", "Genelde dik, okyanusta ters olabilir"] },
          oyun: [
            { metin: "Hiçbir ekosistemde ters çizilemez.", cevap: "sol", neden: "Her basamakta enerji %90 azalır: *energy*." },
            { metin: "Bir andaki canlı madde miktarını gösterir.", cevap: "sag", neden: "Stok, akış değil: *biomass*." },
            { metin: "Fitoplanktonun anlık kütlesi zooplanktondan az olabilir.", cevap: "sag", neden: "Fitoplankton çok hızlı çoğalır ama anlık stok küçüktür: *biomass*." },
            { metin: "Birimi kJ/m²/yıl.", cevap: "sol", neden: "Yıllık enerji akışı: *energy*." }
          ] },
        { tip: "grafik", baslik: "Orman ve okyanus biyokütle piramidi", xlabel: "Biyokütle (genişlik = miktar, ölçeksiz)", ylabel: "Trofik düzey", xmax: 10, ymax: 10,
          yticks: [{ v: 1, label: "1" }, { v: 3.2, label: "2" }, { v: 5.4, label: "3" }, { v: 7.6, label: "4" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 2, noktalar: [[1, 0], [9, 0], [9, 2], [1, 2]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[3, 2.2], [7, 2.2], [7, 4.2], [3, 4.2]] },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[4, 4.4], [6, 4.4], [6, 6.4], [4, 6.4]] },
            { id: "b4", tip: "alan", renk: 3, noktalar: [[4.5, 6.6], [5.5, 6.6], [5.5, 8.6], [4.5, 8.6]] },
            { id: "ty", tip: "yazi", x: 5, y: 9.5, metin: "ORMAN: dik piramit", gizli: false },
            { id: "oy", tip: "yazi", x: 5, y: 9.5, metin: "OKYANUS: ters piramit", gizli: true }
          ],
          durumlar: [
            { metin: "Ormanda ağaçların toplam kütlesi çok büyüktür; her üst düzeyde biyokütle azalır: dik piramit." },
            { metin: "Okyanusta fitoplankton küçüktür, günler içinde çoğalıp tüketilir. Anlık stoku az olduğu hâlde zooplanktonu besler; zooplanktonun biyokütlesi daha büyük görünür.", set: { b1: { noktalar: [[3.5, 0], [6.5, 0], [6.5, 2], [3.5, 2]] }, b2: { noktalar: [[2, 2.2], [8, 2.2], [8, 4.2], [2, 4.2]] }, b3: { noktalar: [[3, 4.4], [7, 4.4], [7, 6.4], [3, 6.4]] }, b4: { noktalar: [[4.2, 6.6], [5.8, 6.6], [5.8, 8.6], [4.2, 8.6]] } }, gizle: ["ty"], goster: ["oy"] },
            { metin: "Bu ters biyokütle piramidi bir ölçüm hatası değildir. ==Enerji piramidi okyanusta da diktir==, çünkü üretim hızı (akış) hâlâ en çok üreticidedir." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The pyramid of biomass can be inverted in aquatic ecosystems, but the pyramid of energy cannot.*", metin: "Temel karşılaştırma." },
            { ikon: "ℹ️", baslik: "Sayı piramidi de ters olabilir", metin: "Tek bir ağaç binlerce böceği besler; sayı piramidi bu durumda ters çıkar." }
          ] }
      ]
    },
    {
      baslik: "Biyobirikim ve biyolojik büyütme",
      kisa: "Zehir canlıda birikir (biyobirikim), zincirde yukarı çıktıkça artar (büyütme).",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🐟", baslik: "*Bioaccumulation*", maddeler: ["Tek canlıda, zamanla birikme", "Alım atımdan fazla"] },
          sag: { ikon: "🔺", baslik: "*Biomagnification*", maddeler: ["Besin zincirinde yukarı çıktıkça derişim artışı", "En yüksek: zincirin tepesi"] },
          oyun: [
            { metin: "Bir balığın yıllar içinde sudan aldığı cıvanın dokularında artması.", cevap: "sol", neden: "Tek canlıda zamanla artış: *bioaccumulation*." },
            { metin: "Küçük balıkta 100, balıkçılda 1000 birim DDT bulunması.", cevap: "sag", neden: "Basamak yükseldikçe derişim artıyor: *biomagnification*." },
            { metin: "Midyenin sudaki ağır metali kabuğunda ve dokusunda tutması.", cevap: "sol", neden: "Tek canlı biriktiriyor: *bioaccumulation*." },
            { metin: "Yırtıcı kuşlarda yumurta kabuğunun incelmesi, zincirin tepesindeki en yüksek DDT derişimi.", cevap: "sag", neden: "Tepede toplanma: *biomagnification*." }
          ] },
        { tip: "grafik", baslik: "Zincirde zehrin derişimi (örnek, logaritmik ölçek)", xlabel: "Besin zinciri", ylabel: "Derişim (her basamak 10 kat)", xmax: 9, ymax: 10,
          xticks: [{ v: 1.5, label: "Fitoplankton" }, { v: 3.5, label: "Zooplankton" }, { v: 5.5, label: "Küçük balık" }, { v: 7.5, label: "Balık yiyen kuş" }],
          ogeler: [
            { id: "d1", tip: "alan", renk: 2, noktalar: [[1, 0], [2, 0], [2, 2.2], [1, 2.2]], gizli: true },
            { id: "d2", tip: "alan", renk: 1, noktalar: [[3, 0], [4, 0], [4, 4.4], [3, 4.4]], gizli: true },
            { id: "d3", tip: "alan", renk: 0, noktalar: [[5, 0], [6, 0], [6, 6.6], [5, 6.6]], gizli: true },
            { id: "d4", tip: "alan", renk: 3, noktalar: [[7, 0], [8, 0], [8, 8.8], [7, 8.8]], gizli: true },
            { id: "v1", tip: "yazi", x: 1.5, y: 2.9, metin: "1", gizli: true },
            { id: "v2", tip: "yazi", x: 3.5, y: 5.1, metin: "10", gizli: true },
            { id: "v3", tip: "yazi", x: 5.5, y: 7.3, metin: "100", gizli: true },
            { id: "v4", tip: "yazi", x: 7.5, y: 9.5, metin: "1000", gizli: true }
          ],
          durumlar: [
            { metin: "Fitoplankton sudaki DDT'yi alır: derişim 1 birim. DDT yağda çözünür, çok yavaş parçalanır ve atılamaz.", goster: ["d1", "v1"] },
            { metin: "Zooplankton yaşamı boyunca çok sayıda fitoplankton yer ve hepsinin DDT'sini biriktirir: 10 birim.", goster: ["d2", "v2"] },
            { metin: "Küçük balık çok sayıda zooplankton yer: 100 birim.", goster: ["d3", "v3"] },
            { metin: "Balık yiyen kuşta 1000 birim: yumurta kabuğu incelir, yumurtalar kırılır. Benzer bir örnek: 1950'lerde Japonya'daki Minamata Körfezi'nde balık ve kabuklularda biriken cıva.", goster: ["d4", "v4"] },
            { metin: "Neden? Üst basamak, kendi kütlesini yapmak için %10 kuralı yüzünden çok miktarda besin yer; zehir atılamadığı için birikir." }
          ] },
        { tip: "tuzak", metin: "Zehirli madde zincirin tepesinde birikir.", yanlis: "En çok zehir üreticilerde bulunur, çünkü onlar ilk alır.", dogru: "Derişim ==yukarı çıktıkça artar==; en çok zehir en üstteki tüketicidedir. Üretici ilk alandır ama en az taşıyandır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Bioaccumulation is the build-up of a substance in a single organism over time.*", metin: "Biyobirikim." },
            { ikon: "✍️", baslik: "*Biomagnification is the increase in concentration of a substance at each higher trophic level.*", metin: "Biyolojik büyütme." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Besin zinciri tek yol, besin ağı birçok yoldur; ok yenenden yiyene çizilir.",
            "Üretici 1. trofik düzeydir; tüketiciler 2., 3., 4. düzeyi oluşturur; ayrıştırıcılar her düzeyden atık alır.",
            "%10 kuralı: bir üst düzeye yaklaşık %10 enerji geçer, %90'ı ısı ve atıklarla gider.",
            "Enerji tek yönlü akar (Güneş → ... → ısı); bu yüzden zincirler kısadır.",
            "Enerji piramidi her zaman dik; biyokütle piramidi okyanusta ters olabilir.",
            "Biyobirikim: tek canlıda zamanla biriken madde. Biyolojik büyütme: zincirde yukarı çıktıkça derişim artışı.",
            "Zehirler kalıcı ve yağda çözünür olduğu için atılmaz; en çok tepedeki avcıda görülür (DDT, cıva).",
            "Hesap için: ×0,1 her basamakta; n geçişte × (0,1)ⁿ."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir gölde fitoplankton 50 000 kJ enerji bağlamaktadır. Zincir: fitoplankton → zooplankton → küçük balık → balıkçıl. %10 kuralına göre balıkçıla ulaşan enerji kaç kJ'dir?",
      opts: ["5 000", "500", "50", "5"],
      a: 2,
      why: "Üç geçiş vardır: 50 000 → 5 000 → 500 → 50 kJ. 500, iki geçiş yapılıp üçüncüsünün unutulduğu hatalı sonuçtur."
    },
    {
      q: "Grafikte bir göldeki organizmaların dokularındaki DDT derişimi verilmiştir. Bu grafikte görülen olay ve nedeni hangisidir?",
      fig: { type: "bar", cats: ["Fitoplankton", "Zooplankton", "Küçük balık", "Büyük balık", "Balıkçıl"], series: [{ name: "DDT (ppm)", values: [0.04, 0.2, 2, 20, 200] }], ylabel: "DDT (ppm)" },
      opts: ["Biyobirikim; yalnızca balıkçılın DDT alması", "Biyolojik büyütme; DDT atılamadığı için zincirde yukarı çıktıkça derişim artar", "Enerji kaybı; DDT her basamakta %10 azalır", "Süksesyon; DDT türleri değiştirir"],
      a: 1,
      why: "Derişim her basamakta artıyor: bu biyolojik büyütmedir. DDT kalıcıdır, yağda birikir ve atılmaz. Enerji kaybında %10 aktarılır, ama burada tersine bir artış görülüyor."
    },
    {
      q: "Okyanusta fitoplanktonun anlık biyokütlesi zooplanktondan daha azdır. Bu durumla ilgili hangi ifade doğrudur?",
      opts: ["Enerji piramidi de aynı sebeple ters olur.", "Bu bir ölçüm hatasıdır; biyokütle piramidi ters olamaz.", "Fitoplankton, zooplanktondan daha az enerji üretir.", "Fitoplanktonun anlık stoku az olsa da çok hızlı çoğalması zooplanktonu besleyebilir."],
      a: 3,
      why: "Biyokütle bir anlık stoktur; fitoplankton hızlı çoğaldığı için küçük bir stok bile büyük bir enerji akışı sağlar. Enerji piramidi akışı gösterdiği için her zaman diktir."
    },
    {
      q: "Çayırda fare, yılan, kurbağa ve çekirge bulunmaktadır. Yılan hem fare hem kurbağa yemektedir. Bir salgınla fare sayısı çok azalırsa hangisi beklenir?",
      opts: ["Yılanlar kurbağayı daha çok avlayabilir; kurbağa azalır ve çekirge çoğalabilir.", "Yılanlar hemen yok olur çünkü tek besini fare olmuştur.", "Çekirge sayısı kesin olarak azalır.", "Ot miktarı azalır çünkü fare ot yemeyi bırakmıştır."],
      a: 0,
      why: "Besin ağında yılanın birden çok yolu vardır, bu yüzden fare azalınca kurbağaya yönelebilir. Kurbağa azalınca çekirgeyi yiyen azalır, çekirge çoğalabilir. Tek besini fare olsaydı ikinci şık doğru olurdu."
    },
    {
      q: "Bir besin zincirinde sıralama şöyledir: bitki → fare → yılan → kartal. Kartal için hangisi doğrudur?",
      opts: ["3. trofik düzeydedir ve 2. derece tüketicidir.", "4. trofik düzeydedir ve 3. derece tüketicidir.", "4. trofik düzeydedir ve 4. derece tüketicidir.", "1. trofik düzeydedir çünkü zincirin sonundadır."],
      a: 1,
      why: "Bitki 1. trofik düzeydir (üretici). Fare 2. düzey (1. derece tüketici), yılan 3. düzey (2. derece), kartal 4. düzey (3. derece tüketici). Trofik düzey numarası, tüketici derecesinden her zaman bir fazladır; üçüncü şık bu farkı gözden kaçırır."
    }
  ]
};
