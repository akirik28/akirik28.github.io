/* Kitpath not defteri · bi104 · 1.4 Fotosentezi Etkileyen Faktörler
   Kaynak: öğretmen lecture'ı (1.2 Photosynthesis: Factors Affecting Rate of Photosynthesis) + 10.1.3 sınıf etkinliği + defter-araclari/kaynak/okul-10-2025-26.md + MEB Maarif BİY.10. Blok türleri: /ap/_kit/defter.js başı.
   Grafikler şematiktir: eğrilerin biçimi doğrudur, sayılar göreli birimdir. */
window.DEFTER = {
  slug: "bi104",
  amac: "Bu konu fotosentez hızını hangi etkenlerin değiştirdiğini anlatıyor: ışık şiddeti, CO₂, sıcaklık, su, mineral, pH ve bitkinin kalıtsal özellikleri. Etkenlerin grafiğini okuyup çizmeyi ve hızı en az bulunan etkenin sınırladığını (minimum yasası) öğreneceksin.",
  bolumler: [
    {
      baslik: "Fotosentez hızı: etkenler ve ölçüm",
      kisa: "Hız, birim zamanda yapılan fotosentez miktarıdır; çevre etkenleri onu değiştirir.",
      bloklar: [
        { tip: "harita", merkez: "*Rate of photosynthesis* (fotosentez hızı)", dallar: [
            { baslik: "*Light intensity*", alt: "Işık şiddeti (dalga boyu: Işık ve Pigmentler konusunda)" },
            { baslik: "*CO₂ concentration*", alt: "CO₂ derişimi" },
            { baslik: "*Temperature*", alt: "Sıcaklık (enzimleri etkiler)" },
            { baslik: "Diğerleri", alt: "Su, mineral, pH ve bitkiye ait (genetik) etkenler" }
          ] },
        { tip: "adimlar", baslik: "Deneyle ölçüm: su bitkisi (*Elodea*)", adimlar: [
            { baslik: "Kurulum", metin: "*Elodea* kesik ucu yukarıda suya konur, üstüne huni ve su dolu ters tüp yerleştirilir; lamba bitkiden belli uzaklığa konur (sınıf etkinliği). Sodyum bikarbonat eklemek CO₂ sağlar (ek bilgi)." },
            { baslik: "Ölçüm", metin: "Çıkan O₂ kabarcıkları sayılır; hız, kullanılan CO₂ ya da salınan O₂ miktarıyla ölçülür. Kabarcık sayısı fotosentez hızını gösterir." },
            { baslik: "Değiştir ve tekrarla", metin: "Yalnız bir etken değiştirilir (ör. lamba uzaklığı), diğerleri sabit tutulur. Her koşulda birkaç kez sayılır, ortalama alınır." }
          ] },
        { tip: "tablo", baslik: "Işık deneyinde değişkenler", head: ["Değişken", "Bu deneyde", "Grafikte"], rows: [
            ["Bağımsız (*independent*)", "Lambanın uzaklığı (ışık şiddeti)", "x ekseni"],
            ["Bağımlı (*dependent*)", "Dakikadaki kabarcık sayısı", "y ekseni"],
            ["Sabit tutulan (*controlled*)", "Sıcaklık, CO₂, bitki boyu, süre", "Yazılır, çizilmez"]
          ], not: "Sınavda böyle yaz: *The independent variable is the light intensity and the dependent variable is the number of bubbles per minute.*" }
      ]
    },
    {
      baslik: "Işık şiddetinin etkisi",
      kisa: "Işık arttıkça hız önce artar, sonra bir platoda sabitlenir.",
      bloklar: [
        { tip: "grafik", baslik: "Işık şiddeti ve fotosentez hızı", xlabel: "Işık şiddeti", ylabel: "Fotosentez hızı", xmax: 10, ymax: 10,
          ogeler: [
            { id: "a", tip: "egri", renk: 0, etiket: "CO₂ normal", noktalar: [[0, 0], [1, 1.8], [2, 3.4], [3, 4.4], [4, 4.9], [5, 5], [7, 5], [10, 5]] },
            { id: "pl", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "plato", kilavuz: true, gizli: true },
            { id: "b", tip: "egri", renk: 2, etiket: "CO₂ yüksek", noktalar: [[0, 0], [1, 1.8], [2, 3.4], [3, 4.8], [4, 6], [5, 7], [6, 7.7], [7, 8], [10, 8]], gizli: true }
          ],
          durumlar: [
            { metin: "Düşük ışıkta hız ışıkla birlikte hemen hemen düz bir doğru gibi artar: ==ışık sınırlayıcıdır==." },
            { metin: "Belli bir şiddetten sonra eğri düzleşir (plato). Işık artık sınırlayıcı değildir; hızı CO₂ ya da sıcaklık sınırlar.", goster: ["pl"] },
            { metin: "CO₂ artırılırsa plato daha yukarıda olur: platoyu sınırlayan etken CO₂ idi. Düşük ışıkta iki eğri aynıdır, çünkü orada ışık sınırlar.", goster: ["b"] },
            { metin: "Sınavda böyle yaz: *The graph shows that the rate increases with light intensity until a plateau is reached, after which light is no longer the limiting factor.*", goster: ["b"] }
          ] },
        { tip: "tuzak", metin: "Plato, fotosentezin durduğu anlamına gelmez; hız en yüksek değerde sabit kalır. Hızı artırmak için ışık dışındaki sınırlayıcı etkeni artırmak gerekir.", yanlis: "Işık şiddeti artınca fotosentez hızı sürekli artar.", dogru: "Işık şiddeti arttıkça hız artar, plato noktasından sonra sabitlenir. Çok yüksek şiddette hız hatta yavaşlayabilir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Light compensation point", tr: "ışık dengeleme noktası", tanim: "Fotosentezle solunumun birbirine eşit olduğu ışık şiddeti. Bu noktada net O₂ ya da CO₂ alışverişi sıfırdır.", ornek: "Çok loş bir odada bitki, yaptığı fotosentezi solunumda harcar." }
          ] }
      ]
    },
    {
      baslik: "CO₂ derişiminin etkisi",
      kisa: "CO₂ arttıkça hız artar, sonra sabitlenir; plato ışığa bağlıdır.",
      bloklar: [
        { tip: "grafik", baslik: "CO₂ derişimi ve fotosentez hızı", xlabel: "CO₂ derişimi", ylabel: "Fotosentez hızı", xmax: 10, ymax: 10,
          ogeler: [
            { id: "dk", tip: "egri", renk: 0, etiket: "Işık düşük", noktalar: [[0, 0], [1, 2.4], [2, 4.2], [3, 5.2], [4, 5.6], [5, 5.8], [10, 5.8]] },
            { id: "pl", tip: "nokta", renk: 3, x: 5, y: 5.8, etiket: "plato", kilavuz: true, gizli: true },
            { id: "yk", tip: "egri", renk: 2, etiket: "Işık yüksek", noktalar: [[0, 0], [1, 2.4], [2, 4.4], [3, 6.2], [4, 7.6], [5, 8.5], [6, 9], [7, 9.2], [10, 9.2]], gizli: true }
          ],
          durumlar: [
            { metin: "CO₂ azken hız CO₂ ile artar: Calvin döngüsünün ham maddesi eksiktir, ==CO₂ sınırlayıcıdır==." },
            { metin: "Yeterli CO₂ olunca eğri düzleşir. Artık hızı ışık ya da sıcaklık (enzimler, ATP ve NADPH) sınırlar.", goster: ["pl"] },
            { metin: "Işık güçlendirilirse hem plato yükselir hem hız daha hızlı artar: ışık yüksekken CO₂ daha çok değerlendirilir.", goster: ["yk"] },
            { metin: "Sınavda böyle yaz: *As the carbon dioxide concentration increases, the rate of photosynthesis increases until another factor becomes limiting.*", goster: ["yk"] }
          ] },
        { tip: "not", metin: "Bitkiler CO₂'yi yaprakların gözeneklerinden (*stomata*) alır. Seralarda verimi artırmak için CO₂ eklenmesinin nedeni budur; ışık ve sıcaklık da uygun olmalıdır. Ortamdaki CO₂'yi tutan Ba(OH)₂, Ca(OH)₂ ve KOH ise fotosentezi azaltır." }
      ]
    },
    {
      baslik: "Sıcaklığın etkisi",
      kisa: "Hız optimum sıcaklığa kadar artar, sonra enzimler bozulunca hızla düşer.",
      bloklar: [
        { tip: "grafik", baslik: "Sıcaklık ve fotosentez hızı", xlabel: "Sıcaklık (°C)", ylabel: "Fotosentez hızı", xmax: 50, ymax: 10,
          xticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0.4], [10, 2.5], [20, 5.8], [28, 8.6], [33, 9.3], [38, 7.4], [43, 3], [50, 0.3]] },
            { id: "soguk", tip: "nokta", renk: 3, x: 10, y: 2.5, etiket: "yavaş", gizli: true },
            { id: "opt", tip: "nokta", renk: 2, x: 33, y: 9.3, etiket: "optimum", gizli: true },
            { id: "sicak", tip: "nokta", renk: 1, x: 43, y: 3, etiket: "düşüş", gizli: true }
          ],
          durumlar: [
            { metin: "Eğri çan biçimindedir: hız sıcaklıkla artar, tepe yapar, sonra düşer." },
            { metin: "Soğukta enzimlerin hareketi ve çarpışmaları azdır, Calvin döngüsü yavaşlar.", goster: ["soguk"] },
            { metin: "Optimum sıcaklıkta (birçok bitkide yaklaşık 25–35 °C) enzimler en verimlidir.", goster: ["opt"], gizle: ["soguk"] },
            { metin: "Optimumdan sonra enzimler yapısı bozularak (*denaturation*) çalışmaz; hız hızla düşer. Sınavda böyle yaz: *At high temperatures the enzymes are denatured, so the rate of photosynthesis decreases.*", goster: ["sicak"], gizle: ["opt"] }
          ] },
        { tip: "tuzak", metin: "Işığa bağlı tepkimeler doğrudan ışıkla yürür, sıcaklıktan çok az etkilenir. Sıcaklığın asıl etkisi enzimlerle yürüyen Calvin döngüsü üzerindendir.", yanlis: "Sıcaklık arttıkça fotosentez hızı sonsuza kadar artar.", dogru: "Hız optimum sıcaklıkta tepe yapar; daha yüksek sıcaklıkta enzimler bozulur ve hız düşer." },
        { tip: "not", metin: "Yüksek sıcaklıkta terleme (*transpiration*) artar. Bitki su kaybını durdurmak için stomalarını kapatır, CO₂ alamaz ve fotosentez azalır." }
      ]
    },
    {
      baslik: "Su, mineral ve pH",
      kisa: "Su, mineraller ve pH; enzimleri ve pigmentleri etkileyerek hızı sınırlar.",
      bloklar: [
        { tip: "tablo", baslik: "Etkenin fotosentezdeki yeri", head: ["Etken", "Görevi / etkisi"], rows: [
            ["Su", "Elektron ve hidrojen kaynağı; su azalınca enzim etkinliği düşer (MEB: hücredeki su oranı %15'in altına inerse enzimler çalışmaz); stomaların açılması suya bağlıdır"],
            ["Magnezyum (Mg)", "Klorofilin yapısında bulunur, kofaktör olarak çalışır"],
            ["Potasyum, kalsiyum", "Kofaktör olarak enzimlere yardım eder"],
            ["Azot (N)", "Baz, vitamin ve amino asit yapısına girer"],
            ["Demir (Fe)", "Elektron taşıma zinciri üyelerinin (ferredoksin) yapısında; klorofil sentezinde"],
            ["Fosfor (P)", "ATP, DNA ve RNA yapısında"],
            ["pH", "Aşırı asidik ya da bazik ortamda enzimler denatüre olur; toprak yapısı, kirlilik ve asit yağmuru pH'yı değiştirir"]
          ], vurgu: 0, not: "Minerallerden hangisi azsa fotosentez hızını o sınırlar. Sınavda böyle yaz: *Water is the source of electrons and hydrogen, and magnesium is part of the chlorophyll molecule.*" }
      ]
    },
    {
      baslik: "Bitkiye ait (genetik) etkenler",
      kisa: "Kloroplast, yaprak, stoma, kütikül ve pigment özellikleri hızı belirler.",
      bloklar: [
        { tip: "tablo", baslik: "Genetik etkenler ve hıza etkisi", head: ["Etken", "Hız nasıl değişir?"], rows: [
            ["Kloroplast ve klorofil miktarı", "Fazla olunca hız artar; kloroplast en çok palisade parenkimasındadır"],
            ["Yaprak sayısı ve yüzeyi", "Yaprak sayısı ve boyutu arttıkça kloroplast ve hız artar"],
            ["Stoma sayısı, boyutu, dizilişi", "Stoma çoksa daha çok CO₂ alınır; stomalar sıcaklığa göre açılıp kapanır"],
            ["Kütikül kalınlığı", "Kalınsa hız düşer; çöl bitkilerinde kalın, nemli yerlerde incedir"],
            ["Kök tüyü yüzeyi", "Yüzey genişse bitki daha çok su alır, hız artar"],
            ["Fotosentetik pigment miktarı", "Pigment çeşidi ve miktarı çoksa farklı dalga boyları soğurulur, hız artar"]
          ], not: "Sınavda böyle yaz: *The rate of photosynthesis is higher in a leaf with more chloroplasts, more stomata and a thinner cuticle.*" },
        { tip: "ikili", sol: { ikon: "🌍", baslik: "Çevresel etken", maddeler: ["Işık şiddeti ve dalga boyu", "CO₂, sıcaklık, su", "Mineral ve pH"] },
          sag: { ikon: "🧬", baslik: "Genetik etken", maddeler: ["Kloroplast ve pigment miktarı", "Yaprak sayısı ve boyutu", "Stoma, kütikül, kök tüyü"] },
          oyun: [
            { metin: "Çöl bitkisinin kalın kütikülü.", cevap: "sag", neden: "Bitkinin kendi yapısıdır: genetik." },
            { metin: "Serada CO₂ derişiminin artırılması.", cevap: "sol", neden: "Ortam koşuludur: çevresel." },
            { metin: "Topraktaki magnezyumun az olması.", cevap: "sol", neden: "Ortamdaki mineral miktarı: çevresel." },
            { metin: "Yaprağın stoma sayısının fazla olması.", cevap: "sag", neden: "Bitkinin yapısı: genetik." }
          ] }
      ]
    },
    {
      baslik: "Minimum yasası (*limiting factor*)",
      kisa: "Hızı, en az bulunan etken belirler; yalnızca onu artırmak hızı yükseltir.",
      bloklar: [
        { tip: "not", metin: "Fotosentez birden çok etkene bağlıdır. ==Minimum yasasına (*law of the minimum*)== göre hız, ==en yetersiz== etken tarafından belirlenir. Yalnız o etken artırılınca hız yükselir; hâlihazırda bol olan etkeni artırmak boşunadır." },
        { tip: "tablo", baslik: "Hangi etken sınırlıyor?", head: ["Durum", "Işık", "CO₂", "Sıcaklık", "Hızı sınırlayan"], rows: [
            ["A", "Düşük", "Yüksek", "Optimum", "Işık"],
            ["B", "Yüksek", "Düşük", "Optimum", "CO₂"],
            ["C", "Yüksek", "Yüksek", "Çok düşük", "Sıcaklık"]
          ], vurgu: 1, not: "Sınavda böyle yaz: *The factor that is in the shortest supply is the limiting factor, so increasing only this factor increases the rate.*" },
        { tip: "ornek", baslik: "Seradaki domates", durum: "Bir serada lamba çok parlak, sıcaklık 28 °C (uygun) ama CO₂ derişimi çok düşük. Çiftçi verimi artırmak istiyor.", adimlar: [
            "Işık yüksek: sınırlayıcı değil, ışığı artırmak hızı yükseltmez.",
            "Sıcaklık uygun: sınırlayıcı değil.",
            "CO₂ çok düşük: en yetersiz etken, yani sınırlayıcı."
          ], sonuc: "Verimi artırmak için CO₂ artırılmalıdır; lambayı daha parlak yapmak boşa elektrik harcar." },
        { tip: "tuzak", metin: "Hız, etkenlerin ortalamasıyla ya da toplamıyla belirlenmez.", yanlis: "Bütün etkenleri biraz artırırsam hız artar.", dogru: "Hızı en yetersiz etken sınırlar; yalnız onu artırmak yeterli, diğerlerini artırmak etki etmez." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Fotosentez hızı O₂ kabarcığı sayısı ya da CO₂ tüketimiyle ölçülür; deneyde yalnız bir etken değiştirilir.",
            "Grafikte bağımsız değişken x, bağımlı değişken y eksenindedir; sabit tutulanlar yazılır.",
            "Işık: hız önce artar, sonra plato yapar; plato ışık dışındaki bir etkenin sınırıdır.",
            "CO₂: hız artar, sonra düzleşir; ışık güçlüyse plato daha yüksektir.",
            "Sıcaklık: çan eğrisi; optimumda tepe, yüksek sıcaklıkta enzimler denatüre olur, stomalar kapanır.",
            "Su, mineral (Mg, Fe, N, P…) ve pH ile bitkiye ait etkenler (kloroplast, stoma, kütikül, kök tüyü, pigment) de hızı belirler.",
            "*Light compensation point*: fotosentez hızı = solunum hızı, net alışveriş sıfır.",
            "Minimum yasası: hızı en yetersiz etken belirler; yalnız o etkeni artırmak hızı yükseltir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "In the table below, the rate of photosynthesis was measured while light intensity was increased (all other factors constant). Why does the rate not increase at 4 and 5 units of light?",
      fig: { type: "table", head: ["Light intensity (units)", "1", "2", "3", "4", "5"], rows: [["Rate of photosynthesis", "2", "4", "6", "6", "6"]] },
      opts: ["Light is still the limiting factor.", "A factor other than light (e.g. CO₂ or temperature) has become limiting.", "Chlorophyll has been completely destroyed.", "Photosynthesis has stopped."], a: 1,
      why: "Hız 3 birimden sonra sabitlendiğine göre ışık artık sınırlayıcı değildir; hızı başka bir etken sınırlıyor. Fotosentez durmadı, sadece hız plato yaptı; D şıkkı bu yüzden yanlış." },
    { q: "In a greenhouse the light is very strong, the temperature is 28 °C and the CO₂ concentration is very low. Which measure would increase the yield most effectively?",
      opts: ["Making the lamp brighter", "Raising the temperature to 40 °C", "Giving the plants more water", "Increasing the CO₂ concentration of the greenhouse air"], a: 3,
      why: "Hızı en yetersiz etken, yani CO₂ sınırlıyor; yalnız onu artırmak hızı yükseltir. A şıkkı çekici ama ışık zaten bol, etkisi olmaz; 40 °C ise enzimleri bozabilir." },
    { q: "The rate of photosynthesis is lower at 50 °C than at 30 °C. What is the most likely reason?",
      opts: ["The enzymes are denatured at high temperature.", "The CO₂ concentration increases at 50 °C.", "Photolysis of water speeds up at high temperature.", "The wavelength of light changes."], a: 0,
      why: "Optimum sıcaklığın üstünde enzimler denatüre olur, Calvin döngüsü yavaşlar. B şıkkı yanlış: sıcaklık CO₂ derişimini artırmaz." },
    { q: "A student investigates the effect of light on a water plant by placing a lamp 10, 20 and 30 cm away and counting the bubbles released per minute. What is the dependent variable?",
      opts: ["The distance of the lamp", "The temperature of the water", "The number of bubbles per minute", "The height of the plant"], a: 2,
      why: "Bağımlı değişken ölçülen sonuçtur: kabarcık sayısı. Lamba uzaklığı bağımsız değişkendir; suyun sıcaklığı ve bitki boyu sabit tutulmalıdır." },
    { q: "In the experiment below, light and CO₂ were changed together. Which conclusion can be drawn?",
      fig: { type: "table", head: ["Condition", "Light", "CO₂", "Rate of photosynthesis"], rows: [["I", "Low", "Low", "2"], ["II", "High", "Low", "2"], ["III", "Low", "High", "4"]] },
      opts: ["Light is the limiting factor in condition I.", "CO₂ is the limiting factor in condition I.", "The rate is determined only by light.", "CO₂ has no effect on the rate."], a: 1,
      why: "Işığı artırmak (II) hızı değiştirmedi, CO₂'yi artırmak (III) hızı yükseltti: I koşulunda CO₂ sınırlayıcıdır. A şıkkı tam tersini söyler." }
  ]
};
