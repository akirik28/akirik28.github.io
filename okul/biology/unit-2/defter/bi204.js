/* Kitora not defteri · bi204 · 2.4 Madde Döngüleri
   Kaynak: öğretmen lecture'ı (Topic 2.4 Cycles: water, carbon, nitrogen; Biosphere-2) + okul-10-2025-26.md + MEB Maarif BİY.10.2. Blok türleri: /ap/_kit/defter.js başı. */
/* Not: lecture'ın azot slaytlarında bazı ifadeler karışık (ör. nitratın azot bağlayıcı bakterilerle atmosfere döndüğü yazıyor); standart bilgi ve lecture'ın kendi şemasındaki adlandırma (denitrifying bacteria) kullanıldı. */
window.DEFTER = {
  slug: "bi204",
  amac: "Enerji ekosistemden geçip giderken madde döner. Karbon, azot ve su döngülerini adım adım öğreneceksin: hangi süreç, hangi canlı, hangi biçim. İnsanın bu döngülere etkisini de göreceksin.",
  bolumler: [
    {
      baslik: "Enerji akar, madde döner",
      kisa: "Enerji tek yönlü akar; madde canlılar ile cansız çevre arasında döner.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "☀️", baslik: "*Energy*", maddeler: ["Güneşten gelir, ısı olarak kaybolur", "Tek yönlü akış"] },
          sag: { ikon: "♻️", baslik: "*Matter*", maddeler: ["Atomlar tekrar tekrar kullanılır", "Döngü (*cycle*)"] },
          oyun: [
            { metin: "Güneşten gelir ve sonunda ısı olarak çevreye yayılır.", cevap: "sol", neden: "Tek yönlü: *energy*." },
            { metin: "Karbon atomu atmosferden bitkiye, hayvana ve ayrıştırıcıya geçip atmosfere döner.", cevap: "sag", neden: "Atomlar döner: *matter*." },
            { metin: "Sürekli dışarıdan (Güneş'ten) sağlanması gerekir.", cevap: "sol", neden: "Geri dönüşmez: *energy*." },
            { metin: "Ayrıştırıcılar sayesinde ölü canlıdaki atomlar yeniden kullanılır.", cevap: "sag", neden: "Madde geri kazanılır: *matter*." },
            { metin: "Her basamakta %90'ı kaybolur.", cevap: "sol", neden: "%10 kuralı enerji için geçerlidir: *energy*." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔁", terim: "Biogeochemical cycle", tr: "biyojeokimyasal döngü", tanim: "Bir elementin canlılar (*bio*) ile kayaç, su ve hava gibi cansız çevre (*geo*) arasında dolaşması.", ornek: "Karbon, azot, su, fosfor." },
            { ikon: "🏦", terim: "Reservoir", tr: "depo", tanim: "Elementin en çok bulunduğu yer. Karbon için fosil yakıt ve okyanus, azot için atmosfer (%78 N₂), su için okyanus (≈ %97).", ornek: "Atmosferin %78'i N₂'dir ama çoğu canlı onu doğrudan kullanamaz." }
          ] },
        { tip: "not", metin: "*Biosphere-2* projesinde (1987–1989, Arizona çölü) kapalı bir alanda madde döngüleri kurulamadı: O₂ %14'e düştü, CO₂ arttı, 25 omurgalı türünün 19'u öldü. Gerçek döngüler bozulunca da sorun çıkar: azot bileşikleri asit yağmuruna, su döngüsünün bozulması kuraklık ve sele, karbon döngüsünün bozulması sıcaklık artışına yol açar. Sınavda böyle yaz: *Energy flows through an ecosystem, but matter is recycled.*" }
      ]
    },
    {
      baslik: "Karbon döngüsü",
      kisa: "Karbon fotosentezle canlıya girer; solunum, ayrışma ve yanmayla atmosfere döner.",
      bloklar: [
        { tip: "adimlar", baslik: "Bir karbon atomunun yolculuğu", adimlar: [
            { baslik: "Atmosfer → üretici", metin: "Fotosentez: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Karbon, organik madde olarak canlıya girer." },
            { baslik: "Üretici → tüketici", metin: "Besin zinciriyle organik bileşikler üst düzeylere taşınır." },
            { baslik: "Canlı → atmosfer", metin: "Solunum: bütün canlılar (bitki dahil) organik maddeyi yakıp CO₂ verir." },
            { baslik: "Ölü madde → atmosfer", metin: "Ayrıştırıcılar ölü bitki ve hayvanı parçalar; karbon CO₂ olarak havaya, kısmen toprağa gider." },
            { baslik: "Gömülme → fosil yakıt", metin: "Ayrışmadan kaçan organik madde milyonlarca yılda kömür, petrol, doğal gaza dönüşür. Karbon yüzlerce milyon yıl depoda kalır." },
            { baslik: "Yanma → atmosfer", metin: "Fosil yakıt, odun ve orman yangınları depodaki karbonu hızla CO₂ olarak havaya verir." },
            { baslik: "Atmosfer ⇄ okyanus ve kayaç", metin: "Suda karbon CO₂ ve bikarbonat olarak bulunur; deniz canlıları kabuklarını CaCO₃ ile yapar. Kireçtaşı karbonu tutar; aşındıkça karbon döngüye döner." }
          ] },
        { tip: "grafik", baslik: "Atmosfer nefes alıp verir: bir yılda CO₂ (Mauna Loa, yaklaşık değerler; ek bilgi)", xlabel: "Ay", ylabel: "CO₂ (ppm)", xmax: 12, ymax: 12,
          xticks: [{ v: 1, label: "Oca" }, { v: 3, label: "Mar" }, { v: 5, label: "May" }, { v: 7, label: "Tem" }, { v: 9, label: "Eyl" }, { v: 11, label: "Kas" }],
          yticks: [{ v: 2, label: "418" }, { v: 4, label: "420" }, { v: 6, label: "422" }, { v: 8, label: "424" }],
          ogeler: [
            { id: "s1", tip: "egri", renk: 0, noktalar: [[1, 4], [2, 5], [3, 6], [4, 7], [5, 8]], gizli: true },
            { id: "s2", tip: "egri", renk: 2, noktalar: [[5, 8], [6, 7], [7, 5.5], [8, 3.5], [9, 2]], gizli: true },
            { id: "s3", tip: "egri", renk: 0, noktalar: [[9, 2], [10, 2], [11, 3], [12, 4]], gizli: true },
            { id: "mx", tip: "nokta", renk: 1, x: 5, y: 8, etiket: "Mayıs: zirve", gizli: true },
            { id: "mn", tip: "nokta", renk: 1, x: 9, y: 2, etiket: "Eylül: en düşük", gizli: true },
            { id: "yeni", tip: "egri", renk: 3, kesik: true, etiket: "ertesi yıl", noktalar: [[1, 6.5], [2, 7.5], [3, 8.5], [4, 9.5], [5, 10.5], [6, 9.5], [7, 8], [8, 6], [9, 4.5], [10, 4.5], [11, 5.5], [12, 6.5]], gizli: true }
          ],
          durumlar: [
            { metin: "Kuzey Yarımküre'de kış ve ilkbahar başı: yapraksız ağaçlar, az fotosentez. Solunum ve ayrışma sürdüğü için CO₂ ==artar==.", goster: ["s1", "mx"] },
            { metin: "Yaz: ormanlar yapraklanır, fotosentez solunumdan fazla olur. Bitkiler atmosferden CO₂ çeker, CO₂ ==düşer==.", goster: ["s2", "mn"] },
            { metin: "Sonbahar: fotosentez azalır, ayrışma sürer; CO₂ yine artmaya başlar. Yıllık dalgalanma yaklaşık 6 ppm.", goster: ["s3"] },
            { metin: "Ama her yıl bütün eğri yukarı kayıyor: yaklaşık +2,5 ppm. Sebep fosil yakıt yanması ve ormansızlaşma (iklim değişikliği defterinde).", goster: ["yeni"] }
          ] },
        { tip: "tuzak", metin: "Bitkilerin CO₂ ile ilişkisi sınavda sık sorulur.", yanlis: "Bitkiler CO₂ alır, hayvanlar CO₂ verir; bitkiler solunum yapmaz.", dogru: "Bütün canlılar solunum yapar; ==bitki de CO₂ verir==. Fotosentez solunumdan fazla olduğu sürece bitki net olarak CO₂ tüketir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Photosynthesis removes carbon dioxide from the atmosphere, while respiration and combustion release it.*", metin: "Karbon döngüsü özeti." },
            { ikon: "✍️", baslik: "*The graph shows that CO₂ decreases in summer because photosynthesis exceeds respiration.*", metin: "Mevsim grafiği yorumu." }
          ] }
      ]
    },
    {
      baslik: "Azot döngüsü",
      kisa: "Bitki azotu nitrat ve amonyum olarak alır; bakteriler azotu bu biçimlere çevirir.",
      bloklar: [
        { tip: "adimlar", baslik: "Azotun biçim değiştirmesi", adimlar: [
            { baslik: "Atmosfer: N₂", metin: "Havanın %78'i. Üçlü bağı çok sağlam olduğu için bitki ve hayvan N₂'yi doğrudan kullanamaz." },
            { baslik: "Azot bağlama (*nitrogen fixation*)", metin: "N₂ → NH₃ / NH₄⁺. Baklagil köklerinde *Rhizobium* (simbiyoz), toprakta serbest yaşayan *Azotobacter*, siyanobakteriler. Şimşek de azot oksitleri oluşturur." },
            { baslik: "Nitrifikasyon (*nitrification*)", metin: "NH₄⁺ → NO₂⁻ (*Nitrosomonas*) → NO₃⁻ (*Nitrobacter*). Oksijenli ortamda olur." },
            { baslik: "Asimilasyon (*assimilation*)", metin: "Bitki NO₃⁻ ve NH₄⁺'yı kökle alır, amino asit ve nükleotit yapar. Hayvan bitkiyi yiyerek alır." },
            { baslik: "Amonifikasyon (*ammonification*)", metin: "Ölü canlı ve atıklardaki (protein, üre) organik azot ayrıştırıcılarla NH₄⁺'ya çevrilir." },
            { baslik: "Denitrifikasyon (*denitrification*)", metin: "NO₃⁻ → N₂. Oksijensiz (su basmış) toprakta denitrifiye eden bakteriler azotu atmosfere geri verir." }
          ] },
        { tip: "ikili", sol: { ikon: "🌾", baslik: "*Nitrification*", maddeler: ["NH₄⁺ → NO₂⁻ → NO₃⁻", "Oksijenli ortam", "Bitkinin alabileceği biçim artar"] },
          sag: { ikon: "💧", baslik: "*Denitrification*", maddeler: ["NO₃⁻ → N₂", "Oksijensiz ortam", "Azot atmosfere döner, toprakta azalır"] },
          oyun: [
            { metin: "Amonyumun nitrata çevrilmesi.", cevap: "sol", neden: "Oksijenle yükseltgenme: *nitrification*." },
            { metin: "Su basmış, havasız topraktaki nitratın N₂ olarak kaybolması.", cevap: "sag", neden: "Nitrat azaldı, N₂ oluştu: *denitrification*." },
            { metin: "*Nitrosomonas* ve *Nitrobacter* bakterilerinin görevi.", cevap: "sol", neden: "İki basamaklı nitrifikasyon bakterileri." },
            { metin: "Azotun atmosfere geri dönmesi.", cevap: "sag", neden: "Döngü kapanır: *denitrification*." },
            { metin: "Toprağın bitki için daha fazla nitrat içermesi.", cevap: "sol", neden: "Nitrat üretimi: *nitrification*." }
          ] },
        { tip: "tuzak", metin: "Tarlada buğdaydan sonra nohut ya da mercimek ekmek (*crop rotation*) toprağa azot kazandırır: baklagil köklerindeki *Rhizobium* N₂'yi bağlar.", yanlis: "Bitkiler havadaki azotu (N₂) doğrudan kullanır.", dogru: "Bitki yalnızca ==NO₃⁻ ve NH₄⁺== alır. N₂'yi bu biçimlere bakteriler çevirir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Nitrogen-fixing bacteria convert atmospheric nitrogen into ammonia.*", metin: "Azot bağlama." },
            { ikon: "✍️", baslik: "*Plants absorb nitrogen in the form of nitrate and ammonium.*", metin: "Bitkinin azot alımı." }
          ] }
      ]
    },
    {
      baslik: "Su döngüsü",
      kisa: "Güneş suyu buharlaştırır; yağış ve akışla su yeryüzüne döner.",
      bloklar: [
        { tip: "adimlar", baslik: "Bir su damlasının yolu", adimlar: [
            { baslik: "Buharlaşma (*evaporation*)", metin: "Güneş enerjisi deniz, göl, nehir ve toprak yüzeyindeki suyu buhara çevirir. Dünya, suyun sıvı, katı ve gaz hâlinin birlikte bulunduğu tek gezegendir." },
            { baslik: "Terleme (*transpiration*)", metin: "Bitkiler kökten aldıkları suyu yapraklardaki gözeneklerden buhar olarak verir; canlıların solunumu da atmosfere su katar." },
            { baslik: "Yoğuşma (*condensation*)", metin: "Yükselen buhar soğuyup damlacıklara dönüşür; bulut oluşur." },
            { baslik: "Yağış (*precipitation*)", metin: "Yağmur, kar ya da dolu olarak su yeryüzüne iner; bir kısmı yeniden buharlaşır." },
            { baslik: "Akış ve sızma", metin: "Su yüzeyden akarak (*runoff*) akarsulara ve denize gider ya da toprağa sızarak (*infiltration*) yeraltı suyu olur." }
          ] },
        { tip: "tablo", baslik: "Dünya suyu nerede? (ek bilgi)", head: ["Depo", "Yaklaşık pay"],
          rows: [
            ["Okyanuslar ve denizler (tuzlu)", "≈ %97"],
            ["Tatlı sular (toplam)", "≈ %2,5–3"],
            ["— buzullar ve kalıcı kar", "tatlı suyun yaklaşık üçte ikisi"],
            ["— yeraltı suyu", "tatlı suyun yaklaşık üçte biri"],
            ["Göller, nehirler, atmosfer", "Dünya suyunun binde birinden az"]
          ], not: "(Ek bilgi) İnsan etkisi: ormanlar kesilince terleme azalır; yeraltı suyu yenilenebildiğinden hızlı çekilirse tükenir. Konya Ovası'nda yeraltı su seviyesi düşüyor ve obruk (çöküntü çukuru) sayısı artıyor." },
        { tip: "tuzak", metin: "Terleme ile buharlaşma aynı yönde sonuç verir ama kaynakları farklıdır.", yanlis: "Terleme, suyun denizlerden buharlaşmasıdır.", dogru: "==Terleme== canlıdan (bitki yaprağı), ==buharlaşma== cansız yüzeyden (deniz, göl, toprak) olan su kaybıdır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Transpiration is the loss of water vapor from the leaves of plants.*", metin: "Terleme tanımı." },
            { ikon: "✍️", baslik: "*The Sun's energy drives the water cycle.*", metin: "Döngünün itici gücü." }
          ] }
      ]
    },
    {
      baslik: "Üç döngü bir arada",
      kisa: "Üç döngüde de bitki girer, ayrıştırıcı ve bakteri döngüyü kapatır.",
      bloklar: [
        { tip: "tablo", baslik: "Karbon, azot ve su döngüsünün karşılaştırması", head: ["", "Karbon", "Azot", "Su"],
          rows: [
            ["Ana depo", "Fosil yakıt, kayaç, okyanus; atmosferde CO₂", "Atmosfer (N₂)", "Okyanus"],
            ["Canlıya girişi", "Fotosentez", "Azot bağlama, nitrifikasyon, asimilasyon", "Kökle emilim, içme"],
            ["Canlıdan çıkışı", "Solunum, ayrışma, yanma", "Amonifikasyon, denitrifikasyon", "Terleme, solunum, boşaltım"],
            ["Anahtar canlı", "Bitki, alg, ayrıştırıcı", "*Rhizobium*, *Nitrosomonas*, *Nitrobacter*, denitrifiye bakteriler", "Bitki (terleme)"]
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Decomposers return carbon and nitrogen to the environment so that they can be used again.*", metin: "Ayrıştırıcıların rolü." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Enerji tek yönlü akar, madde döner.",
            "Karbon: fotosentezle girer; solunum, ayrışma ve yanmayla çıkar; fosil yakıt uzun süreli depodur.",
            "Kuzey Yarımküre'de yazın CO₂ düşer (fotosentez > solunum), kışın artar.",
            "Azot: N₂ → (azot bağlama) NH₄⁺ → (nitrifikasyon) NO₂⁻ → NO₃⁻ → bitki; amonifikasyon organik azotu NH₄⁺ yapar; denitrifikasyon N₂'yi geri verir.",
            "Nitrifikasyon oksijenli, denitrifikasyon oksijensiz ortamda olur.",
            "Bitki N₂'yi değil NO₃⁻ ve NH₄⁺'yı kullanır; baklagiller *Rhizobium* ile azot kazandırır.",
            "Su: buharlaşma + terleme → yoğuşma → yağış → akış ve sızma. Enerji kaynağı Güneş.",
            "Bütün döngüleri kapatan: ayrıştırıcılar."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "The table gives monthly atmospheric CO₂ values measured at Mauna Loa (Northern Hemisphere). What is the reason for the decrease in CO₂ from May to September?",
      fig: { type: "table", head: ["Month", "Jan", "Mar", "May", "Jul", "Sep", "Nov"], rows: [["CO₂ (ppm)", 420, 422, 424, 421.5, 418, 419]], caption: "Approximate monthly CO₂" },
      opts: ["Decomposers are more active in summer", "Photosynthesis exceeds respiration in the summer months", "Fossil fuel use stops in summer", "The oceans release CO₂ in summer"],
      a: 1,
      why: "Yazın ormanlar yapraklanır ve fotosentez, solunum ve ayrışmadan fazla olur; atmosferden net CO₂ çekilir. Ayrıştırıcıların aktivitesi yazın artsa bile CO₂'yi düşürmez, artırır."
    },
    {
      q: "A farmer plants chickpeas in a field where wheat was grown the year before and finds that the soil is richer in nitrogen. What is the reason?",
      opts: ["*Rhizobium* bacteria in the chickpea roots fix N₂", "Chickpeas release more CO₂ into the soil", "*Nitrobacter* converts N₂ directly into ammonia", "Denitrification increases"],
      a: 0,
      why: "Baklagiller kökleriyle *Rhizobium* ile simbiyoz yapar; bakteri N₂'yi bağlayıp bitkiye amonyum sağlar, artanlar toprağa kalır. *Nitrobacter* nitriti nitrata çevirir, N₂'yi bağlamaz; denitrifikasyon ise toprakta azalma yapar."
    },
    {
      q: "The nitrate content of a field soil that has been flooded and has become oxygen-poor drops quickly. Which process caused this?",
      opts: ["Nitrification", "Nitrogen fixation", "Ammonification", "Denitrification"],
      a: 3,
      why: "Oksijensiz ortamda denitrifiye eden bakteriler NO₃⁻'ı N₂'ye çevirir ve azot atmosfere gider. Nitrifikasyon oksijenli ortamda olur ve nitrat miktarını artırır."
    },
    {
      q: "What is the expected effect on the local water cycle if the forest on a mountain slope is completely cut down?",
      opts: ["Transpiration increases and local rainfall certainly increases", "Infiltration increases because the roots are gone", "Transpiration decreases; local humidity and rainfall may decrease and surface runoff increases", "The water cycle stops completely"],
      a: 2,
      why: "Yapraklar yok olduğu için terleme azalır; kök tutmadığı için su toprağa sızmadan yüzeyden akar. Su döngüsü Güneş enerjisiyle sürdüğü için durmaz."
    },
    {
      q: "Which organisms and which process produce ammonium from the proteins in the body of a dead animal?",
      opts: ["*Rhizobium*, nitrification", "Decomposer bacteria and fungi, ammonification", "*Nitrobacter*, denitrification", "Photosynthetic plants, assimilation"],
      a: 1,
      why: "Organik azotun (protein, üre) amonyuma çevrilmesine amonifikasyon denir ve ayrıştırıcılar yapar. Nitrifikasyon amonyumun nitrata çevrilmesidir; ters yönlüdür."
    }
  ]
};
