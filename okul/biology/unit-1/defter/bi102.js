/* Kitora not defteri · bi102 · 1.2 Işık ve Pigmentler
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Biology, Tema 1) + MEB Maarif BİY.10 standart içeriği. Blok türleri: /ap/_kit/defter.js başı.
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
          ], aciklama: "Mor ve mavi ışığın fotonu, kırmızı ışığın fotonundan daha çok enerji taşır." },
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
            { ikon: "🥕", terim: "Carotenoids", tr: "karotenoitler", tanim: "Karoten (turuncu) ve ksantofil (sarı). Mavi-yeşil bölgeyi soğurur ve klorofili aşırı ışıktan korur.", ornek: "Sonbaharda yaprak sararır, çünkü klorofil yıkılınca karotenoitler görünür." }
          ] },
        { tip: "tuzak", metin: "Yaprak yeşil görünür çünkü yeşil ışığı ==yansıtır==; bunun anlamı yeşil ışığın hiç kullanılmadığı değil, az kullanıldığıdır.", yanlis: "Bitkiler yeşil ışığı soğurup fotosentez yapar.", dogru: "Klorofiller en çok mavi-mor ve kırmızıyı soğurur. Yeşil ışık büyük ölçüde yansıtılır, bu yüzden yaprak yeşil görünür." }
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
        { tip: "not", metin: "Absorpsiyon spektrumu, saflaştırılmış pigment çözeltisi ışık ölçerden (*spectrophotometer*) geçirilerek ölçülür. Ölçülen şey ==soğurulan ışıktır==; fotosentezin kendisi değil." }
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
          ] }
      ]
    },
    {
      baslik: "Engelmann deneyi",
      kisa: "Engelmann, oksijen seven bakterilerle fotosentezin en çok hangi renkte olduğunu gösterdi.",
      bloklar: [
        { tip: "adimlar", baslik: "Deneyin kurulumu (1880'ler)", adimlar: [
            { baslik: "Alg ipliği", metin: "Mikroskop lamında uzun, yeşil bir alg ipliği (*Spirogyra* gibi) ve oksijen seven (aerobik) bakteriler bulunur." },
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
            "Engelmann: aerobik bakteriler prizmayla ayrılmış alg ipliğinde mavi-mor ve kırmızı bölgede toplanır.",
            "Bakterilerin yığıldığı yer = O₂ çıkışının fazla olduğu yer = fotosentezin hızlı olduğu yer."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Klorofil a'nın absorpsiyon spektrumunda hangi iki bölgede tepe görülür?",
      opts: ["Yeşil ve sarı", "Yalnızca kırmızı", "Turuncu ve yeşil", "Mavi-mor ve kırmızı"], a: 3,
      why: "Klorofil a hem mavi-mor (~430 nm) hem kırmızı (~660 nm) bölgede yüksek soğurur. Yeşil–sarı çukurdur; A şıkkı bu yüzden yanlış." },
    { q: "Engelmann deneyinde aerobik bakteriler aşağıdaki gibi dağılmıştır. Bu sonuç neyi gösterir?",
      fig: { type: "table", head: ["Işık rengi", "Bakteri sayısı"], rows: [["Mor–mavi", "Çok"], ["Yeşil", "Az"], ["Kırmızı", "Çok"]] },
      opts: ["Yeşil ışıkta O₂ çıkışı en fazladır.", "Mavi ve kırmızı ışıkta fotosentez daha hızlıdır.", "Bakteriler yeşil ışıktan kaçar.", "Algler yalnızca yeşil ışığı soğurur."], a: 1,
      why: "Aerobik bakteriler O₂'nin çok çıktığı yerde toplanır; bu da fotosentezin mavi ve kırmızıda hızlı olduğunu gösterir. C şıkkı çekici ama bakterilerin davranışı O₂ ile ilgilidir, renkten kaçışla değil." },
    { q: "Bir yaprak ekstraktı spektrofotometrede ölçülüyor ve her dalga boyunda soğurulan ışık grafiğe çiziliyor. Bu grafiğin adı nedir?",
      opts: ["*Action spectrum*", "*Emission spectrum*", "*Absorption spectrum*", "*Rate curve*"], a: 2,
      why: "Dalga boyuna karşı soğurulan ışık absorpsiyon spektrumudur. Etki spektrumu fotosentez hızı ölçer; A şıkkı en çekici yanlıştır." },
    { q: "Dalga boyu 450 nm olan ışığın bir fotonu ile 650 nm olan ışığın bir fotonu kıyaslanırsa hangisi doğrudur?",
      opts: ["Her ikisi aynı enerjiye sahiptir.", "650 nm'lik foton daha çok enerji taşır.", "450 nm'lik foton daha çok enerji taşır.", "Foton enerjisi dalga boyuna bağlı değildir."], a: 2,
      why: "E = h·c/λ olduğundan dalga boyu kısaldıkça enerji artar. 450 nm mavi, 650 nm kırmızıdır; B şıkkı bu ilişkiyi ters yazar." },
    { q: "Sonbaharda yaprakların sararması hangi nedenle olur?",
      opts: ["Klorofil yıkılır, karotenoitler görünür hâle gelir.", "Yaprak yeşil ışığı soğurmaya başlar.", "Klorofil a'nın miktarı artar.", "Karotenoitler yıkılır."], a: 0,
      why: "Yeşil klorofil yıkılınca altında bulunan sarı ve turuncu karotenoitler görünür. Karotenoitler yeni oluşmaz, yalnızca klorofil bastırdığı için görünmüyordu; D şıkkı tersini söyler." }
  ]
};
