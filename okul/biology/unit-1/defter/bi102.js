/* Kitora not defteri · bi102 · 1.2 Işık ve Pigmentler
   Kaynak: öğretmen lecture'ı (1.2 Photosynthesis: light, pigments, spectra) + defter-araclari/kaynak/okul-10-2025-26.md + MEB Maarif BİY.10. Blok türleri: /ap/_kit/defter.js başı.
   Grafik notu: x ekseni dalga boyu − 400 nm (0 = 400 nm, 300 = 700 nm); y ekseni göreli değerdir (şematik, 0–100). */
window.DEFTER = {
  slug: "bi102",
  amac: "Bu konu fotosentezin ham maddesi olan ışığı anlatıyor: ışığın dalga ve parçacık yapısını, bitkideki pigmentleri, absorpsiyon ve etki spektrumunu, Engelmann deneyini. Hangi renkte fotosentezin neden en çok yapıldığını yorumlayabileceksin.",
  bolumler: [
    {
      baslik: "Işığın doğası: dalga ve foton",
      kisa: "Işık hem dalga hem foton paketidir; dalga boyu kısaldıkça enerji artar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌊", terim: "Wavelength", tr: "dalga boyu (λ)", tanim: "Ardışık iki tepe arasındaki uzaklık, nanometre (nm) ile ölçülür. Mor ışığınki kısa, kırmızınınki uzundur.", ornek: "Görünür ışık yaklaşık 400–700 nm aralığındadır." },
            { ikon: "✨", terim: "Photon", tr: "foton", tanim: "Işığın enerji paketi. Pigment ışığı foton foton soğurur.", ornek: "Klorofilin bir elektronu bir fotonla uyarılır." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Dalga boyu", alt: "kısalır" }, "→",
            { t: "Enerji", alt: "artar" }, "=",
            { t: "E = h·c / λ", alt: "h: sabit, c: ışık hızı" }
          ], aciklama: "Mor ve mavi ışığın fotonu, kırmızı ışığın fotonundan daha çok enerji taşır. Elektromanyetik spektrumda sıra: gamma, X-ışını, UV, görünür ışık, IR, mikrodalga, radyo; dalga boyu bu yönde uzar, enerji azalır." },
        { tip: "tablo", baslik: "Görünür ışığın renkleri (yaklaşık)", head: ["Renk", "Dalga boyu (nm)", "Enerji"], rows: [
            ["Mor–mavi", "400–500", "Yüksek"],
            ["Yeşil–sarı", "500–600", "Orta"],
            ["Turuncu–kırmızı", "600–700", "Düşük"]
          ], not: "Sınavda böyle yaz: *Light behaves both as a wave and as particles called photons; the shorter the wavelength, the higher the energy.*" }
      ]
    },
    {
      baslik: "Fotosentez pigmentleri",
      kisa: "Pigmentler ışığın bir kısmını soğurur, geri kalanını yansıtır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🟢", terim: "Chlorophyll a", tr: "klorofil a", tanim: "Fotosentezin ana pigmenti. Mavi-mor ve kırmızıyı iyi soğurur, yeşili yansıtır.", ornek: "Tepkime merkezinde ışık enerjisini kimyasal enerjiye çevirir." },
            { ikon: "🟩", terim: "Chlorophyll b", tr: "klorofil b", tanim: "Yardımcı pigment. Soğurduğu enerjiyi klorofil a'ya aktarır.", ornek: "Yaprağın daha çok ışıktan yararlanmasını sağlar." },
            { ikon: "🥕", terim: "Carotenoids", tr: "karotenoitler", tanim: "Turuncu, kırmızı ve sarı yardımcı pigmentler. Mavi-yeşil bölgeyi soğurur ve klorofili hasar verecek aşırı ışıktan korur.", ornek: "Sonbaharda yaprak sararır, çünkü klorofil yıkılınca karotenoitler görünür." },
            { ikon: "🎨", terim: "Phycoerythrin, phycocyanin, xanthophyll", tr: "diğer yardımcı pigmentler", tanim: "Phycoerythrin kırmızımsı, phycocyanin mavi, xanthophyll sarı pigmenttir. Hepsi klorofilin kullanamadığı dalga boylarını soğurur.", ornek: "Farklı pigment çeşidi ne kadar fazlaysa fotosentez o kadar hızlıdır." }
          ] },
        { tip: "tuzak", metin: "Yaprak yeşil görünür çünkü yeşil ışığı ==yansıtır==; bunun anlamı yeşil ışığın hiç kullanılmadığı değil, az kullanıldığıdır.", yanlis: "Bitkiler yeşil ışığı soğurup fotosentez yapar.", dogru: "Klorofiller en çok mavi-mor ve kırmızıyı soğurur. Yeşil ışık büyük ölçüde yansıtılır, bu yüzden yaprak yeşil görünür." },
        { tip: "not", metin: "Işık pigmente çarpınca soğurulur, yansıtılır ya da geçer (*absorbed*, *reflected*, *transmitted*). Klorofilin ışık soğuran başı ==porphyrin ring== (ortasında Mg atomu), hidrokarbon kuyruğu tilakoid zarına tutunur. Pigment foton soğurunca elektron *ground state*'ten kararsız *excited state*'e çıkar; enerji ısı ya da floresan olarak dağılır veya tepkime merkezine aktarılır." }
      ]
    },
    {
      baslik: "Absorpsiyon spektrumu",
      kisa: "Absorpsiyon spektrumu, pigmentin her dalga boyunda ne kadar ışık soğurduğunu gösterir.",
      bloklar: [
        { tip: "grafik", baslik: "Pigmentlerin absorpsiyon spektrumu (şematik)", xlabel: "Dalga boyu (nm)", ylabel: "Soğurulan ışık (%)", xmax: 300, ymax: 100,
          xticks: [{ v: 0, label: "400" }, { v: 100, label: "500" }, { v: 200, label: "600" }, { v: 300, label: "700" }],
          yticks: [{ v: 50, label: "50" }, { v: 100, label: "100" }],
          ogeler: [
            { id: "ca", tip: "egri", renk: 0, etiket: "Klorofil a", noktalar: [[0, 40], [30, 100], [70, 35], [110, 8], [160, 5], [210, 25], [250, 75], [262, 90], [285, 40], [300, 5]] },
            { id: "cb", tip: "egri", renk: 1, etiket: "Klorofil b", noktalar: [[0, 25], [30, 60], [53, 90], [85, 30], [120, 8], [170, 5], [210, 25], [242, 55], [270, 15], [300, 3]], gizli: true },
            { id: "kar", tip: "egri", renk: 2, etiket: "Karotenoit", noktalar: [[0, 40], [40, 90], [70, 95], [100, 60], [130, 20], [160, 2], [200, 0], [300, 0]], gizli: true },
            { id: "yes", tip: "yazi", x: 150, y: 20, metin: "yeşil: az soğurulur", gizli: true }
          ],
          durumlar: [
            { metin: "==Klorofil a==: iki tepe yapar, mavi-mor (~430 nm) ve kırmızı (~660 nm). Ortada, yeşil bölgede çukur vardır." },
            { metin: "==Klorofil b== de benzer şekilde mavi (~450 nm) ve kırmızıda (~640 nm) soğurur, tepeleri biraz kaymıştır.", goster: ["cb"] },
            { metin: "==Karotenoitler== mavi-yeşil bölgeyi (~450–500 nm) soğurur, kırmızıyı hiç soğurmaz.", goster: ["kar"] },
            { metin: "Üçü birlikte kullanılınca yaprak ışığın geniş bir kısmını soğurur; yalnız ==yeşilde çukur== kalır. Sınavda böyle yaz: *The graph shows that chlorophylls absorb mostly blue-violet and red light.*", goster: ["yes"] }
          ] },
        { tip: "not", metin: "Absorpsiyon spektrumu, pigment çözeltisi ışık ölçerden (*spectrophotometer*) geçirilerek ölçülür; cihaz her dalga boyunda geçen ışık oranını okur. Yeşilde geçen ışık yüksek (soğurma düşük), mavide geçen ışık düşüktür (soğurma yüksek). Ölçülen şey ==soğurulan ışıktır==; fotosentezin kendisi değil." }
      ]
    },
    {
      baslik: "Etki spektrumu",
      kisa: "Etki spektrumu, her dalga boyunda gerçekte yapılan fotosentez hızıdır.",
      bloklar: [
        { tip: "grafik", baslik: "Absorpsiyon ve etki spektrumunu karşılaştır (şematik)", xlabel: "Dalga boyu (nm)", ylabel: "Göreli değer (%)", xmax: 300, ymax: 100,
          xticks: [{ v: 0, label: "400" }, { v: 100, label: "500" }, { v: 200, label: "600" }, { v: 300, label: "700" }],
          yticks: [{ v: 50, label: "50" }, { v: 100, label: "100" }],
          ogeler: [
            { id: "abs", tip: "egri", renk: 1, kesik: true, etiket: "Absorpsiyon", noktalar: [[0, 40], [40, 95], [70, 90], [100, 40], [150, 10], [200, 25], [250, 85], [262, 90], [285, 40], [300, 5]] },
            { id: "etk", tip: "egri", renk: 0, etiket: "Etki", noktalar: [[0, 30], [30, 75], [60, 95], [100, 40], [150, 20], [200, 35], [250, 80], [265, 85], [285, 35], [300, 3]], gizli: true },
            { id: "tp1", tip: "nokta", renk: 0, x: 60, y: 95, etiket: "mavi", gizli: true },
            { id: "tp2", tip: "nokta", renk: 0, x: 265, y: 85, etiket: "kırmızı", gizli: true }
          ],
          durumlar: [
            { metin: "Kesikli eğri, pigmentlerin toplam ==absorpsiyon spektrumu==. Soğurulan ışığın hepsi fotosentezde kullanılmaz." },
            { metin: "==Etki spektrumu==: her dalga boyunda ölçülen ==fotosentez hızı== (O₂ çıkışı ya da CO₂ tutulması).", goster: ["etk"] },
            { metin: "Fotosentez en çok ==mavi== ve ==kırmızı== ışıkta yapılır; tepe noktaları pigmentlerin tepeleriyle aynı yerdedir.", goster: ["tp1", "tp2"] },
            { metin: "İki eğri çok benzer ama tam örtüşmez: yeşilde bile az fotosentez olur, çünkü karotenoitler ve klorofil b enerjiyi klorofil a'ya aktarır. Sınavda böyle yaz: *The action spectrum is similar to the absorption spectrum of chlorophylls.*" }
          ] },
        { tip: "ikili", sol: { ikon: "📈", baslik: "*Absorption spectrum*", maddeler: ["Pigment ne kadar ışık soğurur?", "Dalga boyuna karşı soğurma", "Ölçü: ışık ölçer (*spectrophotometer*)"] },
          sag: { ikon: "🫧", baslik: "*Action spectrum*", maddeler: ["Fotosentez ne kadar hızlı?", "Dalga boyuna karşı fotosentez hızı", "Ölçü: O₂ çıkışı, CO₂ tüketimi"] },
          oyun: [
            { metin: "Her dalga boyunda çıkan O₂ kabarcıklarının sayısı.", cevap: "sag", neden: "Fotosentez hızını ölçüyor: etki spektrumu." },
            { metin: "Klorofil çözeltisinin hangi renkli ışığı ne kadar tuttuğu.", cevap: "sol", neden: "Soğurma ölçülüyor: absorpsiyon spektrumu." },
            { metin: "Mavi ışıkta CO₂ tüketiminin kırmızıdan fazla olması.", cevap: "sag", neden: "Fotosentez hızıyla ilgili: etki spektrumu." }
          ] },
        { tip: "not", metin: "Lecture'a göre fotosentez hızı kırmızı ve mor ışıkta en yüksek, yeşilde en düşüktür. Kızılötesi, morötesi, radyo dalgaları ve X-ışınlarında hız sıfırdır. Klorofil, soğurduğu ışık miktarıyla orantılı ATP üretir." }
      ]
    },
    {
      baslik: "Engelmann deneyi",
      kisa: "Engelmann, oksijen seven bakterilerle fotosentezin en çok hangi renkte olduğunu gösterdi.",
      bloklar: [
        { tip: "adimlar", baslik: "Deneyin kurulumu (Engelmann, 1883)", adimlar: [
            { baslik: "Alg ipliği", metin: "Mikroskop lamında uzun, yeşil bir alg ipliği (*filamentous alga*) ve oksijen seven (aerobik) bakteriler bulunur." },
            { baslik: "Prizma", metin: "Beyaz ışık prizmadan geçirilir ve renklerine ayrılır; her renk ipliğin ayrı bir bölgesine düşer." },
            { baslik: "Bakteriler yer değiştirir", metin: "Bakteriler O₂'nin çok çıktığı bölgelere yığılır." },
            { baslik: "Sonuç", metin: "En çok bakteri ==mavi-mor== ve ==kırmızı== bölgede, en az yeşil bölgede toplanır: bu renklerde fotosentez hızlıdır." }
          ] },
        { tip: "tablo", baslik: "Sonucu oku", head: ["Işık rengi", "Bakteri yoğunluğu", "Yorum"], rows: [
            ["Mavi–mor", "Çok", "Fotosentez hızlı, O₂ çok"],
            ["Yeşil", "Az", "Fotosentez yavaş, O₂ az"],
            ["Kırmızı", "Çok", "Fotosentez hızlı, O₂ çok"]
          ], vurgu: 0, not: "Sınavda böyle yaz: *Aerobic bacteria gathered where the algae released the most oxygen, so photosynthesis was fastest in blue and red light.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Işık hem dalga hem foton; dalga boyu kısaldıkça foton enerjisi artar (mor > kırmızı).",
            "Görünür ışık yaklaşık 400–700 nm aralığındadır.",
            "Klorofil a ana pigment, klorofil b ve karotenoitler yardımcı pigmenttir.",
            "Klorofiller mavi-mor ve kırmızıyı çok soğurur; yeşili yansıtır, yaprak bu yüzden yeşil görünür.",
            "*Absorption spectrum*: pigmentin soğurduğu ışık; *action spectrum*: o renkteki fotosentez hızı.",
            "İki spektrum çok benzer ama tam örtüşmez; yardımcı pigmentler yeşilde de az fotosentez sağlar.",
            "Engelmann (1883): aerobik bakteriler prizmayla ayrılmış alg ipliğinde mavi-mor ve kırmızı bölgede toplanır.",
            "Fotosentez hızı kırmızı ve mor ışıkta en yüksek, yeşilde en düşük; IR, UV, radyo ve X-ışınlarında sıfırdır.",
            "Bakterilerin yığıldığı yer = O₂ çıkışının fazla olduğu yer = fotosentezin hızlı olduğu yer."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "In the absorption spectrum of chlorophyll a, which two regions show peaks?",
      opts: ["Green and yellow", "Red only", "Orange and green", "Blue-violet and red"], a: 3,
      why: "Klorofil a hem mavi-mor (~430 nm) hem kırmızı (~660 nm) bölgede yüksek soğurur. Yeşil–sarı çukurdur; A şıkkı bu yüzden yanlış." },
    { q: "In Engelmann's experiment, aerobic bacteria were distributed as shown in the table. What does this result show?",
      fig: { type: "table", head: ["Colour of light", "Number of bacteria"], rows: [["Violet-blue", "Many"], ["Green", "Few"], ["Red", "Many"]] },
      opts: ["The most O₂ is released in green light.", "Photosynthesis is faster in blue and red light.", "Bacteria avoid green light.", "Algae absorb only green light."], a: 1,
      why: "Aerobik bakteriler O₂'nin çok çıktığı yerde toplanır; bu da fotosentezin mavi ve kırmızıda hızlı olduğunu gösterir. C şıkkı çekici ama bakterilerin davranışı O₂ ile ilgilidir, renkten kaçışla değil." },
    { q: "A leaf extract is placed in a spectrophotometer and the light absorbed at each wavelength is plotted. What is this graph called?",
      opts: ["*Action spectrum*", "*Emission spectrum*", "*Absorption spectrum*", "*Rate curve*"], a: 2,
      why: "Dalga boyuna karşı soğurulan ışık absorpsiyon spektrumudur. Etki spektrumu fotosentez hızı ölçer; A şıkkı en çekici yanlıştır." },
    { q: "Compare a photon of 450 nm light with a photon of 650 nm light. Which statement is correct?",
      opts: ["Both have the same energy.", "The 650 nm photon carries more energy.", "The 450 nm photon carries more energy.", "Photon energy does not depend on wavelength."], a: 2,
      why: "E = h·c/λ olduğundan dalga boyu kısaldıkça enerji artar. 450 nm mavi, 650 nm kırmızıdır; B şıkkı bu ilişkiyi ters yazar." },
    { q: "Which pigments are responsible for the yellow-orange colour of leaves in autumn, and why do they become visible?",
      opts: ["Carotenoids; chlorophyll breaks down and no longer masks them.", "Chlorophyll b; it begins to absorb green light.", "Chlorophyll a; its amount increases.", "Carotenoids; they are newly broken down."], a: 0,
      why: "Yeşil klorofil yıkılınca altında bulunan sarı ve turuncu karotenoitler görünür. Karotenoitler yeni oluşmaz, yalnızca klorofil bastırdığı için görünmüyordu; D şıkkı tersini söyler." }
  ]
};
