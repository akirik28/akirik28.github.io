/* Kitpath not defteri · bi104 · 1.4 Fotosentezi Etkileyen Faktörler
   Kaynak: öğretmen sunumu "1.2 & 1.3 Photosynthesis" sl. 57–70 + "factors affecting rate of photosynthesis" görseli + "photosynthesis experiment set up examples". 2026-10-29: yalnız sunum/görselde olanlar bırakıldı (ışık dengeleme noktası, iki eğrili sınırlayıcı etken grafikleri, sera örneği çıkarıldı); karşılaştırma: takip/sinav-kitleri/biyoloji-10/SUNUM-KARSILASTIRMA.md. Blok türleri: /ap/_kit/defter.js başı.
   Grafikler şematiktir: eğrilerin biçimi doğrudur, sayılar göreli birimdir. */
window.DEFTER = {
  slug: "bi104",
  amac: "Bu konu fotosentez hızını hangi etkenlerin değiştirdiğini anlatıyor: ışık şiddeti ve dalga boyu, CO₂, sıcaklık, su, mineral, pH ve bitkinin kalıtsal özellikleri. Etkenlerin grafiğini okuyup çizmeyi ve hızı en az bulunan etkenin sınırladığını (minimum yasası) öğreneceksin.",
  bolumler: [
    {
      baslik: "Fotosentez hızı: etkenler ve ölçüm",
      kisa: "Hız, birim zamanda yapılan fotosentez miktarıdır; çevre etkenleri onu değiştirir.",
      bloklar: [
        { tip: "harita", merkez: "*Rate of photosynthesis* (fotosentez hızı)", dallar: [
            { baslik: "*Light intensity*", alt: "Işık şiddeti" },
            { baslik: "*Wavelength*", alt: "Dalga boyu: kırmızı ve mavi-mor ışıkta hız en yüksek, yeşilde en düşük" },
            { baslik: "*CO₂ concentration*", alt: "CO₂ derişimi" },
            { baslik: "*Temperature*", alt: "Sıcaklık (enzimleri etkiler)" },
            { baslik: "Diğerleri", alt: "Su, mineral, pH ve bitkiye ait (genetik) etkenler" }
          ] },
        { tip: "adimlar", baslik: "Deneyle ölçüm: su bitkisi (*Elodea*)", adimlar: [
            { baslik: "Kurulum", metin: "*Elodea* kesik ucu yukarıda suya konur, üstüne huni ve su dolu ters tüp yerleştirilir; lamba bitkiden belli uzaklığa konur. Suya sodyum bikarbonat eklemek CO₂ sağlar." },
            { baslik: "Ölçüm", metin: "Çıkan O₂ kabarcıkları sayılır; hız, kullanılan CO₂ ya da salınan O₂ miktarıyla ölçülür. Kabarcık sayısı fotosentez hızını gösterir." },
            { baslik: "Değiştir ve tekrarla", metin: "Yalnız bir etken değiştirilir (ör. lamba uzaklığı), diğerleri sabit tutulur. Her koşulda birkaç kez sayılır, ortalama alınır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Limiting factor", tr: "sınırlayıcı etken", tanim: "En az (yetersiz) bulunan, bu yüzden hızı belirleyen etken. Artırılınca hız yükselir, sonra başka bir etken sınırlayıcı olur.", ornek: "Işık bolken CO₂ azsa sınırlayıcı CO₂'dir." },
            { ikon: "🌡️", terim: "Optimum temperature", tr: "optimum sıcaklık", tanim: "Fotosentez hızının en yüksek olduğu sıcaklık; üstünde enzimler bozulur.", ornek: "Görseldeki grafikte yaklaşık 30 °C." }
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
            { id: "pl", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "plato", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Düşük ışıkta hız ışıkla birlikte hemen hemen düz bir doğru gibi artar: ==ışık sınırlayıcıdır==." },
            { metin: "Belli bir şiddetten sonra eğri düzleşir (plato). Işık artık sınırlayıcı değildir; hızı CO₂ ya da sıcaklık sınırlar.", goster: ["pl"] },
            { metin: "Sınavda böyle yaz: *The graph shows that the rate increases with light intensity until a plateau is reached, after which light is no longer the limiting factor.*", goster: ["pl"] }
          ] },
        { tip: "tuzak", metin: "Plato, fotosentezin durduğu anlamına gelmez; hız en yüksek değerde sabit kalır. Hızı artırmak için ışık dışındaki sınırlayıcı etkeni artırmak gerekir.", yanlis: "Işık şiddeti artınca fotosentez hızı sürekli artar.", dogru: "Işık şiddeti arttıkça hız artar, plato noktasından sonra sabitlenir. Çok yüksek şiddette hız hatta yavaşlayabilir." },
      ]
    },
    {
      baslik: "CO₂ derişiminin etkisi",
      kisa: "CO₂ arttıkça hız artar, sonra sabitlenir; plato ışığa bağlıdır.",
      bloklar: [
        { tip: "grafik", baslik: "CO₂ derişimi ve fotosentez hızı", xlabel: "CO₂ derişimi", ylabel: "Fotosentez hızı", xmax: 10, ymax: 10,
          ogeler: [
            { id: "dk", tip: "egri", renk: 0, noktalar: [[0, 0], [1, 2.4], [2, 4.2], [3, 5.2], [4, 5.6], [5, 5.8], [10, 5.8]] },
            { id: "pl", tip: "nokta", renk: 3, x: 5, y: 5.8, etiket: "plato", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "CO₂ azken hız CO₂ ile artar: Calvin döngüsünün ham maddesi eksiktir, ==CO₂ sınırlayıcıdır==." },
            { metin: "Yeterli CO₂ olunca eğri düzleşir. Artık hızı başka bir etken, ör. ışık ya da sıcaklık sınırlar.", goster: ["pl"] },
            { metin: "Sınavda böyle yaz: *As the carbon dioxide concentration increases, the rate of photosynthesis increases until another factor becomes limiting.*", goster: ["pl"] }
          ] },
        { tip: "not", metin: "Bitkiler CO₂'yi yaprakların gözeneklerinden (*stomata*) alır. CO₂, Calvin döngüsünün ham maddesidir. Ortamdaki CO₂'yi tutan Ba(OH)₂, Ca(OH)₂, KOH (ve deneylerde NaOH) fotosentezi azaltır." }
      ]
    },
    {
      baslik: "Sıcaklığın etkisi",
      kisa: "Hız optimum sıcaklığa kadar artar, sonra enzimler bozulunca hızla düşer.",
      bloklar: [
        { tip: "grafik", baslik: "Sıcaklık ve fotosentez hızı", xlabel: "Sıcaklık (°C)", ylabel: "Fotosentez hızı", xmax: 50, ymax: 10,
          xticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0.4], [10, 2.5], [20, 6.2], [26, 8.7], [30, 9.3], [35, 7.6], [42, 3.2], [50, 0.3]] },
            { id: "soguk", tip: "nokta", renk: 3, x: 10, y: 2.5, etiket: "yavaş", gizli: true },
            { id: "opt", tip: "nokta", renk: 2, x: 30, y: 9.3, etiket: "optimum", gizli: true },
            { id: "sicak", tip: "nokta", renk: 1, x: 42, y: 3.2, etiket: "düşüş", gizli: true }
          ],
          durumlar: [
            { metin: "Eğri çan biçimindedir: hız sıcaklıkla artar, tepe yapar, sonra düşer." },
            { metin: "Soğukta enzimlerin hareketi ve çarpışmaları azdır, Calvin döngüsü yavaşlar.", goster: ["soguk"] },
            { metin: "Optimum sıcaklıkta (öğretmenin görselindeki grafikte yaklaşık 30 °C) enzimler, ör. *Rubisco*, en verimlidir.", goster: ["opt"], gizle: ["soguk"] },
            { metin: "Optimumdan sonra enzimler yapısı bozularak (*denaturation*) çalışmaz; hız hızla düşer. Sınavda böyle yaz: *At high temperatures the enzymes are denatured, so the rate of photosynthesis decreases.*", goster: ["sicak"], gizle: ["opt"] }
          ] },
        { tip: "tuzak", metin: "Sıcaklık, fotosentezdeki enzimlerin (ör. *Rubisco*) etkinliğini değiştirerek hızı etkiler.", yanlis: "Sıcaklık arttıkça fotosentez hızı sonsuza kadar artar.", dogru: "Hız optimum sıcaklıkta tepe yapar; daha yüksek sıcaklıkta enzimler bozulur ve hız düşer." },
        { tip: "not", metin: "Yüksek sıcaklıkta terleme (*transpiration*) artar. Bitki su kaybını durdurmak için stomalarını kapatır, CO₂ alamaz ve fotosentez azalır." }
      ]
    },
    {
      baslik: "Su, mineral ve pH",
      kisa: "Su, mineraller ve pH; enzimleri ve pigmentleri etkileyerek hızı sınırlar.",
      bloklar: [
        { tip: "tablo", baslik: "Etkenin fotosentezdeki yeri", head: ["Etken", "Görevi / etkisi"], rows: [
            ["Su", "Elektron ve hidrojen kaynağı; su oranı %15'in üzerinde olan ortamda enzim etkinliği artar; stomaların açılması suya bağlıdır"],
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
            { metin: "Ortamdaki CO₂ derişiminin artırılması.", cevap: "sol", neden: "Ortam koşuludur: çevresel." },
            { metin: "Topraktaki magnezyumun az olması.", cevap: "sol", neden: "Ortamdaki mineral miktarı: çevresel." },
            { metin: "Yaprağın stoma sayısının fazla olması.", cevap: "sag", neden: "Bitkinin yapısı: genetik." }
          ] }
      ]
    },
    {
      baslik: "Minimum yasası (*limiting factor*)",
      kisa: "Hızı, en az bulunan etken belirler; yalnızca onu artırmak hızı yükseltir.",
      bloklar: [
        { tip: "not", metin: "Fotosentez birden çok etkene bağlıdır. ==Minimum yasasına (*minimum rule*)== göre hız, ==en yetersiz== etken tarafından belirlenir. Yalnız o etken artırılınca hız yükselir; hâlihazırda bol olan etkeni artırmak boşunadır." },
        { tip: "tablo", baslik: "Hangi etken sınırlıyor?", head: ["Durum", "Işık", "CO₂", "Sıcaklık", "Hızı sınırlayan"], rows: [
            ["A", "Düşük", "Yüksek", "Optimum", "Işık"],
            ["B", "Yüksek", "Düşük", "Optimum", "CO₂"],
            ["C", "Yüksek", "Yüksek", "Çok düşük", "Sıcaklık"]
          ], vurgu: 1, not: "Sınavda böyle yaz: *The factor that is in the shortest supply is the limiting factor, so increasing only this factor increases the rate.*" },
        { tip: "ornek", baslik: "Hangisini artırmalı?", durum: "Bir deney düzeneğinde lamba çok parlak, sıcaklık 28 °C (uygun) ama CO₂ derişimi çok düşük. Fotosentez hızı artırılmak isteniyor.", adimlar: [
            "Işık yüksek: sınırlayıcı değil, ışığı artırmak hızı yükseltmez.",
            "Sıcaklık uygun: sınırlayıcı değil.",
            "CO₂ çok düşük: en yetersiz etken, yani sınırlayıcı."
          ], sonuc: "Hızı artırmak için CO₂ artırılmalıdır; lambayı daha parlak yapmak hızı değiştirmez." },
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
            "CO₂: hız artar, sonra düzleşir (başka etken sınırlar). Dalga boyu: kırmızı ve mavi-mor en etkili, yeşil en az.",
            "Sıcaklık: çan eğrisi; optimumda tepe, yüksek sıcaklıkta enzimler denatüre olur, stomalar kapanır.",
            "Su, mineral (Mg, Fe, N, P…) ve pH ile bitkiye ait etkenler (kloroplast, stoma, kütikül, kök tüyü, pigment) de hızı belirler.",
            "Minimum yasası: hızı en yetersiz etken belirler; yalnız o etkeni artırmak hızı yükseltir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "In the table below, the rate of photosynthesis was measured while light intensity was increased (all other factors constant). Why does the rate not increase at 4 and 5 units of light?",
      fig: { type: "table", head: ["Light intensity (units)", "1", "2", "3", "4", "5"], rows: [["Rate of photosynthesis", "2", "4", "6", "6", "6"]] },
      opts: ["Light is still the limiting factor.", "Another factor, such as CO₂ or temperature, is now limiting.", "Chlorophyll in the leaves has been completely destroyed by the strong light.", "Photosynthesis has stopped."], a: 1,
      why: "Hız 3 birimden sonra sabitlendiğine göre ışık artık sınırlayıcı değildir; hızı başka bir etken sınırlıyor. Fotosentez durmadı, sadece hız plato yaptı; fotosentezin durduğunu söyleyen şık bu yüzden yanlış." },
    { q: "In an experiment the light is very strong, the temperature is 28 °C and the CO₂ concentration is very low. Which change would increase the rate of photosynthesis most effectively?",
      opts: ["Making the lamp brighter", "Raising the temperature to 40 °C", "Giving the plants more water", "Increasing the CO₂ concentration around the plant"], a: 3,
      why: "Hızı en yetersiz etken, yani CO₂ sınırlıyor; yalnız onu artırmak hızı yükseltir. Lambayı güçlendirmek çekici ama ışık zaten bol, etkisi olmaz; 40 °C ise enzimleri bozabilir." },
    { q: "The rate of photosynthesis is lower at 50 °C than at 30 °C. What is the most likely reason?",
      opts: ["The enzymes are denatured at high temperature.", "The CO₂ concentration increases at 50 °C.", "Photolysis of water speeds up at high temperature.", "The wavelength of light changes."], a: 0,
      why: "Optimum sıcaklığın üstünde enzimler denatüre olur, Calvin döngüsü yavaşlar. CO₂ derişiminin arttığını söyleyen şık yanlış: sıcaklık CO₂ derişimini artırmaz." },
    { q: "A student investigates the effect of light on a water plant by placing a lamp 10, 20 and 30 cm away and counting the bubbles released per minute. What is the dependent variable?",
      opts: ["The distance of the lamp", "The temperature of the water", "The number of bubbles per minute", "The height and age of the Elodea plant in the tube"], a: 2,
      why: "Bağımlı değişken ölçülen sonuçtur: kabarcık sayısı. Lamba uzaklığı bağımsız değişkendir; suyun sıcaklığı ve bitki boyu sabit tutulmalıdır." },
    { q: "In the experiment below, light and CO₂ were changed one at a time. Which conclusion can be drawn?",
      fig: { type: "table", head: ["Condition", "Light", "CO₂", "Rate of photosynthesis"], rows: [["I", "Low", "Low", "2"], ["II", "High", "Low", "2"], ["III", "Low", "High", "4"]] },
      opts: ["Light is the limiting factor in condition I.", "CO₂ is the limiting factor in condition I.", "The rate is determined only by light.", "CO₂ has no effect on the rate."], a: 1,
      why: "Işığı artırmak (II) hızı değiştirmedi, CO₂'yi artırmak (III) hızı yükseltti: I koşulunda CO₂ sınırlayıcıdır. Işığı sınırlayıcı sayan şık tam tersini söyler." }
  ]
};
