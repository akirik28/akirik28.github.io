/* Kitora not defteri · bi105 · 1.5 Kemosentez
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Biology, Tema 1) + MEB Maarif BİY.10 standart içeriği. Blok türleri: /ap/_kit/defter.js başı.
   Grafik şematiktir: eğrilerin biçimi doğrudur, sayılar göreli birimdir. */
window.DEFTER = {
  slug: "bi105",
  amac: "Bu konu ışığın hiç olmadığı yerlerde besin yapan canlıları anlatıyor: *chemosynthesis*. Enerjiyi inorganik maddelerden (H₂S, H₂, NH₃, Fe²⁺) nasıl aldıklarını ve fotosentezle benzerlik ile farklarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kemosentez nedir?",
      kisa: "Kemosentezde enerji, inorganik maddelerin oksidasyonundan; karbon CO₂'den gelir.",
      bloklar: [
        { tip: "adimlar", baslik: "Kemosentezin yolu", adimlar: [
            { baslik: "Yükseltgenme", metin: "Bakteri, inorganik bir maddeyi (H₂S, NH₃, Fe²⁺, H₂) yükseltger; bu tepkime enerji açığa çıkarır." },
            { baslik: "ATP", metin: "Açığa çıkan enerjinin bir kısmı ATP ve NADH gibi taşıyıcılarda depolanır." },
            { baslik: "CO₂ bağlanır", metin: "ATP ve indirgeyici güçle CO₂ organik maddeye çevrilir (fotosentezdeki gibi Calvin döngüsü)." },
            { baslik: "Besin", metin: "Bakteri kendi organik maddesini yapmış olur: ototroftur." }
          ] },
        { tip: "tuzak", metin: "İnorganik madde bu bakteriler için besin değil, enerji kaynağıdır. Organik molekülün karbonu CO₂'den gelir.", yanlis: "Kemosentez yapan bakteriler inorganik maddeyi yiyerek beslenir, bu yüzden heterotroftur.", dogru: "İnorganik madde yalnızca enerji sağlar; organik madde CO₂'den sentezlenir. Kemosentez yapanlar kemoototroftur." },
        { tip: "not", metin: "Sınavda böyle yaz: *Chemosynthesis is the production of organic molecules from carbon dioxide using the energy released by the oxidation of inorganic substances.*" }
      ]
    },
    {
      baslik: "Kemosentetik bakteri grupları",
      kisa: "Her grup başka bir inorganik maddeyi yükseltger: NH₃, H₂S, H₂ ya da Fe²⁺.",
      bloklar: [
        { tip: "tablo", head: ["Grup", "Yükseltgenen madde", "Ürün", "Örnek"], rows: [
            ["Nitrifikasyon (1. basamak)", "NH₃ (amonyak)", "NO₂⁻ (nitrit)", "*Nitrosomonas*"],
            ["Nitrifikasyon (2. basamak)", "NO₂⁻ (nitrit)", "NO₃⁻ (nitrat)", "*Nitrobacter*"],
            ["Demir bakterileri", "Fe²⁺", "Fe³⁺", "*Gallionella*"]
          ], not: "Sınavda böyle yaz: *Nitrifying bacteria oxidize ammonia to nitrite and nitrite to nitrate, and the nitrate can be used by plants.*" },
        { tip: "kavramlar", kartlar: [
            { ikon: "🥚", terim: "Sulfur bacteria", tr: "kükürt bakterileri", tanim: "H₂S'yi önce kükürde (S), sonra sülfata (SO₄²⁻) yükseltger ve enerji kazanır. Derin deniz bacalarında ve çürük yumurta kokulu kaynaklarda yaşar.", ornek: "*Beggiatoa*, *Thiobacillus*." },
            { ikon: "🎈", terim: "Hydrogen bacteria", tr: "hidrojen bakterileri", tanim: "H₂'yi oksijenle yükseltger ve su oluşturur; açığa çıkan enerjiyle CO₂'den organik madde yapar.", ornek: "Volkanik gaz çıkışlarının yakınındaki bakteriler." }
          ] }
      ]
    },
    {
      baslik: "Işıksız bir dünya: derin deniz bacaları",
      kisa: "Bacadaki H₂S ve deniz suyundaki O₂ karşılaştığı yerde kemosentez en hızlıdır.",
      bloklar: [
        { tip: "grafik", baslik: "Bacadan uzaklaştıkça (şematik)", xlabel: "Bacaya uzaklık", ylabel: "Göreli değer", xmax: 10, ymax: 10,
          ogeler: [
            { id: "h2s", tip: "egri", renk: 1, etiket: "H₂S", noktalar: [[0, 9], [2, 6], [4, 3.2], [6, 1.4], [8, 0.6], [10, 0.2]] },
            { id: "o2", tip: "egri", renk: 0, etiket: "O₂", noktalar: [[0, 0.5], [2, 1.8], [4, 4], [6, 6.5], [8, 8.2], [10, 9]], gizli: true },
            { id: "kem", tip: "egri", renk: 2, etiket: "Kemosentez", noktalar: [[0, 0.3], [2, 3], [4, 6], [6, 3.5], [8, 1.2], [10, 0.3]], gizli: true },
            { id: "zi", tip: "nokta", renk: 2, x: 4, y: 6, etiket: "en yoğun", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Baca sıcak, H₂S'ce zengin sıvı çıkarır. H₂S derişimi bacadan uzaklaştıkça azalır." },
            { metin: "Deniz suyundaki O₂ ise bacadan uzaklaştıkça artar.", goster: ["o2"] },
            { metin: "Kemosentez ikisinin birlikte bulunduğu yerde en hızlıdır: yükseltgenecek madde (H₂S) ve oksijen.", goster: ["kem"] },
            { metin: "Bakteriler ve onlarla yaşayan canlılar bu bölgede toplanır. Sınavda böyle yaz: *Chemosynthetic bacteria are most abundant where hydrogen sulfide and oxygen are both available.*", goster: ["zi"] }
          ] },
        { tip: "not", metin: "Bu bölgelerde bakteriler, ==tüp solucanı== gibi hayvanların dokusunda yaşayarak onlara besin sağlar (*symbiosis*). Bacadaki besin zinciri güneşe değil kemosentezle üretilen besine dayanır." }
      ]
    },
    {
      baslik: "Fotosentez ve kemosentez karşılaştırması",
      kisa: "İkisi de CO₂'den organik madde yapar; fark enerji ve elektron kaynağıdır.",
      bloklar: [
        { tip: "tablo", head: ["", "*Photosynthesis*", "*Chemosynthesis*"], rows: [
            ["Enerji kaynağı", "Işık", "İnorganik maddelerin oksidasyonu"],
            ["Pigment (klorofil)", "Gerekir", "Gerekmez"],
            ["Elektron kaynağı", "H₂O", "H₂S, H₂, NH₃, Fe²⁺ gibi maddeler"],
            ["O₂ çıkışı", "Var (sudan)", "Genellikle yok"],
            ["Canlılar", "Bitki, alg, siyanobakteri", "Yalnız bazı bakteriler (ve arkeler)"],
            ["Ortak", "CO₂'den organik madde yapar, ototroftur", "CO₂'den organik madde yapar, ototroftur"]
          ], vurgu: 0, not: "Sınavda böyle yaz: *Both processes produce organic molecules from carbon dioxide, but photosynthesis uses light energy whereas chemosynthesis uses chemical energy.*" },
        { tip: "ikili", sol: { ikon: "☀️", baslik: "*Photosynthesis*", maddeler: ["Işık gerekir", "Klorofil gerekir", "O₂ açığa çıkar"] },
          sag: { ikon: "🌋", baslik: "*Chemosynthesis*", maddeler: ["Işık gerekmez", "Klorofil gerekmez", "İnorganik madde yükseltgenir"] },
          oyun: [
            { metin: "Bacada, H₂S yükseltgeyerek CO₂'den şeker yapan bakteri.", cevap: "sag", neden: "Enerji inorganik maddenin yükseltgenmesinden gelir." },
            { metin: "Yaprak hücresinde suyun fotolizinden O₂ çıkışı.", cevap: "sol", neden: "Su fotolizi ve O₂ fotosenteze özgüdür." },
            { metin: "Klorofile ihtiyaç duyan süreç.", cevap: "sol", neden: "Kemosentez pigmentsiz yürür." },
            { metin: "Nitrit (NO₂⁻) nitrata yükseltgenirken enerji kazanan bakteri.", cevap: "sag", neden: "İnorganik madde oksidasyonu: kemosentez." }
          ] }
      ]
    },
    {
      baslik: "Kemosentezin önemi",
      kisa: "Kemosentez, ışıksız ekosistemleri besler ve azot gibi maddelerin döngüsünü sürdürür.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🌊", baslik: "Işıksız ekosistemler", metin: "Derin deniz bacalarında üreticiler kemosentetik bakterilerdir; hayvanlar onlara dayanır." },
            { ikon: "🌾", baslik: "Azotun bitkiye ulaşması", metin: "Nitrifikasyon, amonyağı bitkilerin alabildiği nitrata çevirir; tarım toprağı için önemlidir." },
            { ikon: "♻️", baslik: "Madde döngüleri", metin: "Kükürt, demir ve azot bileşikleri bu bakterilerle yeni biçimlere dönüşür." }
          ] },
        { tip: "not", metin: "Sınavda böyle yaz: *Chemosynthetic bacteria are the producers of ecosystems where there is no sunlight, and nitrifying bacteria make nitrogen available to plants.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kemosentez: inorganik maddelerin oksidasyonundan enerji alıp CO₂'den organik madde yapmak; ışık ve klorofil gerekmez.",
            "İnorganik madde enerji kaynağıdır, besin değil; kemosentez yapanlar kemoototroftur.",
            "Nitrifikasyon: NH₃ → NO₂⁻ (*Nitrosomonas*), NO₂⁻ → NO₃⁻ (*Nitrobacter*).",
            "Kükürt bakterileri H₂S'yi, hidrojen bakterileri H₂'yi, demir bakterileri Fe²⁺'yı yükseltger.",
            "Derin deniz bacalarında besin zincirinin tabanı kemosentetik bakterilerdir.",
            "Ortak: ikisi de CO₂'den organik madde yapar. Fark: enerji kaynağı (ışık / kimyasal), elektron kaynağı (H₂O / H₂S, H₂, NH₃…), klorofil, O₂ çıkışı."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Kemosentez yapan bir bakteri için enerji kaynağı hangisidir?",
      opts: ["İnorganik bir maddenin oksidasyonu", "Güneş ışığı", "Hazır organik molekül", "Klorofil"], a: 0,
      why: "Kemosentezde enerji, H₂S, NH₃, Fe²⁺ ya da H₂ gibi maddelerin yükseltgenmesinden gelir. Klorofil ve ışık fotosenteze özgüdür; B şıkkı en çekici yanlıştır." },
    { q: "Aşağıdaki tabloda iki sürecin bazı özellikleri verilmiştir. Hangi özellik hem fotosentez hem kemosentez için doğrudur?",
      fig: { type: "table", head: ["Özellik", "Fotosentez", "Kemosentez"], rows: [["Enerji kaynağı", "Işık", "Kimyasal"], ["Elektron kaynağı", "H₂O", "H₂S, H₂, NH₃…"], ["Ürün", "Organik madde", "Organik madde"]] },
      opts: ["Işık gerekir.", "O₂ mutlaka açığa çıkar.", "CO₂'den organik madde yapılır.", "Klorofil gerekir."], a: 2,
      why: "İkisi de ototrof süreçtir ve CO₂'den organik madde yapar. Işık ve klorofil yalnız fotosentezde gereklidir; D şıkkı bu yüzden yanlış." },
    { q: "Okyanus tabanında hiç ışık almayan bir bacanın çevresinde hem H₂S hem de oksijen bulunuyor ve çok sayıda tüp solucanı yaşıyor. Bu besin zincirinin tabanında hangi canlılar olması beklenir?",
      opts: ["Fotosentez yapan algler", "Ayrıştırıcı mantarlar", "Parazit solucanlar", "H₂S'yi yükseltgeyen kemoototrof bakteriler"], a: 3,
      why: "Işık olmadığından üreticiler fotosentez yapamaz; H₂S yükseltgeyen kemoototroflar organik madde üretir ve solucanlarla birlikte yaşar. A şıkkı yanlış çünkü ışık yok." },
    { q: "Toprakta *Nitrobacter* bakterileri hangi dönüşümü yaparak enerji kazanır?",
      opts: ["NH₃ → NO₂⁻", "NO₂⁻ → NO₃⁻", "H₂S → S", "Fe²⁺ → Fe³⁺"], a: 1,
      why: "*Nitrobacter* nitriti (NO₂⁻) nitrata (NO₃⁻) yükseltger. A şıkkı nitrifikasyonun birinci basamağıdır (*Nitrosomonas*)." },
    { q: "Hidrojen bakterileri H₂'yi oksijenle yükseltgeyerek su oluşturuyor ve bu enerjiyle CO₂'den şeker yapıyor. H₂ burada ne işe yarar?",
      opts: ["Karbon kaynağıdır.", "Işık yerine geçer.", "Enerji (ve elektron) kaynağıdır.", "Klorofil yerine geçer."], a: 2,
      why: "H₂ yükseltgenirken enerji verir; karbon ise CO₂'den gelir. A şıkkı çekici ama şekerin karbonu H₂'den değil CO₂'den alınır." }
  ]
};
