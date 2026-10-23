/* Kitpath not defteri · mi102 · 1.5 Fayda-Maliyet Analizi
   Kaynak: ap-videolar/src/episodes/mi102 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mi102",
  amac: "Bu konu *cost-benefit analysis* yani fayda-maliyet analizini anlatıyor: bir karar için neyi saymalısın? Cepten çıkan ve vazgeçilen maliyeti, muhasebe ile ekonomik kârı ayırmayı ve geri gelmeyen maliyeti nasıl yok sayacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Akılcı karar: faydayı maliyetle tart",
      kisa: "Fayda maliyetten büyükse yap; aradaki fark net faydadır.",
      bloklar: [
        { tip: "hikaye", ikon: "🍪", baslik: "Ece'nin kurabiye standı: kâr mı zarar mı?",
          metin: "Ece yazın sahilde kurabiye sattı: 20 bin lira satış, 10 bin lira masraf. Defteri 10 bin lira kâr diyor, arkadaşları alkışlıyor. Ekonomist ise sakin sakin \"aslında 2 bin lira zarardasın\" diyor. İkisi de haklı; yalnız farklı şeyleri sayıyorlar." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧠", terim: "Rational decision-making", tr: "akılcı karar verme", tanim: "Her seçimde faydayı ve maliyeti tartmak.", ornek: "Bu sabah okula gelirken diploma ve arkadaşlar fayda, harcanan zaman maliyetti." },
            { ikon: "⚖️", terim: "Cost-benefit analysis", tr: "fayda-maliyet analizi", tanim: "Bir seçeneğin faydalarını maliyetleriyle karşılaştırmak. Fayda maliyetten büyükse yap.", ornek: "Kurs bana ileride daha iyi bir iş getirecekse maliyetine değer." },
            { ikon: "➕", terim: "Net benefit", tr: "net fayda", tanim: "Toplam fayda eksi toplam maliyet.", ornek: "Fayda maliyetten büyükse net fayda pozitiftir ve işi yapmaya değer." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🎓", baslik: "Diploma, daha iyi bir iş", metin: "Fayda var ve parayla ölçülebilir." },
            { ikon: "👫", baslik: "Arkadaşlarını görmek", metin: "Parayla ölçemezsin ama bu da bir fayda." }
          ] }
      ]
    },
    {
      baslik: "*Explicit* ve *implicit costs*",
      kisa: "Maliyet yalnız cepten çıkan para değildir; vazgeçtiğin seçenek de maliyettir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👛", terim: "Explicit costs", tr: "açık maliyetler", tanim: "Cepten çıkan, para olarak ödenen maliyetler.", ornek: "Kurs ücreti 400 lira, yol 100 lira." },
            { ikon: "👻", terim: "Implicit costs", tr: "örtük maliyetler", tanim: "Para ödenmez ama vazgeçilen en iyi seçeneğin değeridir (fırsat maliyeti).", ornek: "Kursa gitmek yerine kafede çalışsan 600 lira kazanırdın." }
          ] },
        { tip: "ornek", baslik: "Cumartesi kursunun gerçek maliyeti", durum: "4 saatlik bir kursa gidiyorsun: ücret 400 lira, yol 100 lira. Aynı 4 saatte kafede saati 150 liradan çalışabilirdin. Kursun toplam ekonomik maliyeti nedir?",
          adimlar: ["*Explicit costs*: 400 + 100 = 500 lira (cepten çıkan).", "*Implicit costs*: 4 × 150 = 600 lira (kaçan kafe geliri).", "Toplam ekonomik maliyet = 500 + 600."],
          sonuc: "Kursun gerçek maliyeti ==1.100 lira==; cebinden yalnızca 500 lira çıksa da." },
        { tip: "ikili", sol: { ikon: "👛", baslik: "*Explicit cost*", maddeler: ["Para el değiştirir", "Faturada görünür"] },
          sag: { ikon: "👻", baslik: "*Implicit cost*", maddeler: ["Para el değiştirmez", "Vazgeçilen seçeneğin değeri"] },
          oyun: [
            { metin: "Kurs ücreti olarak 400 lira ödedin.", cevap: "sol", neden: "Cepten para çıktı: *explicit*." },
            { metin: "Kursa gittiğin için kafede kazanacağın 600 lirayı kaçırdın.", cevap: "sag", neden: "Para ödenmedi ama bir şeyden vazgeçildi: *implicit*." },
            { metin: "Kendi dükkânına başkasına verebileceğin kirayı almıyorsun.", cevap: "sag", neden: "Kaçan kira, vazgeçilen gelir: *implicit*." },
            { metin: "Otobüs bileti için 100 lira verdin.", cevap: "sol", neden: "Para ödedin: *explicit*." }
          ] },
        { tip: "tuzak", metin: "Cebinden para çıkmadıysa maliyet yok sanılır. Oysa vazgeçtiğin saatin ya da gelirin değeri de maliyettir.", yanlis: "Para ödemediysem maliyeti yoktur.", dogru: "*Explicit* = para el değiştirir; *implicit* = para el değiştirmez ama bir şeyden vazgeçilir." }
      ]
    },
    {
      baslik: "Karara girmeyen maliyetler",
      kisa: "Karar ne olursa olsun ödeyeceğin ya da geri gelmeyen maliyet karara girmez.",
      bloklar: [
        { tip: "ornek", baslik: "Öğle yemeği kursun maliyeti mi?", durum: "Kursta öğle yemeğine 150 lira veriyorsun. Bu 150 lira kursun maliyetine eklenir mi?",
          adimlar: ["Kursa gidersen öğle yemeğine 150 lira harcarsın.", "Kursa gitmesen de aynı yemeğe yine 150 lira harcardın.", "İki seçenekte de aynı: seçimle değişmiyor."],
          sonuc: "Öğle yemeği kararın maliyeti değildir; toplam ==1.100 lira== olarak kalır." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🕳️", terim: "Sunk cost", tr: "batık maliyet", tanim: "Zaten ödenmiş, geri alınamayan maliyet. Akılcı karar onu yok sayar.", ornek: "Sinema biletine verdiğin 200 lira, filme kalsan da çıksan da geri gelmez." }
          ] },
        { tip: "adimlar", baslik: "Berbat film: kal mı, çık mı?", adimlar: [
            { baslik: "Durum", metin: "200 liralık bilet aldın; film 120 dakika, ilk 20 dakikada berbat." },
            { baslik: "Tuzak düşünce", metin: "\"Paramı çöpe atmayayım.\" Ama o 200 lira kalsan da çıksan da gitmiş durumda." },
            { baslik: "Doğru karşılaştırma", metin: "Kalan 100 dakika kötü film mi, arkadaşlarla bir kahve mi? Bileti terazide yok say." }
          ] },
        { tip: "tuzak", metin: "Daha önce ödediğin para seni karara bağlıyormuş gibi hissettirir.", yanlis: "Para harcadım, o yüzden devam etmeliyim.", dogru: "*Sunk cost* karara girmez. Yalnızca seçimle değişen fayda ve maliyetler hesaba katılır." }
      ]
    },
    {
      baslik: "*Accounting profit*: muhasebecinin kârı",
      kisa: "Muhasebe kârı = toplam gelir eksi cepten çıkan maliyetler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💵", terim: "Total revenue", tr: "toplam gelir", tanim: "Satışlardan gelen toplam para.", ornek: "Ece'nin yaz boyunca kurabiyeden kazandığı 20.000 lira." },
            { ikon: "🧮", terim: "Accounting profit", tr: "muhasebe kârı", tanim: "Toplam gelir eksi *explicit costs*. Muhasebeci yalnız cepten çıkanı sayar.", ornek: "Ece'nin defterindeki 10.000 lira." }
          ] },
        { tip: "ornek", baslik: "Ece'nin defterindeki kâr", durum: "Ece'nin toplam geliri 20.000 lira. Un, şeker ve ambalaj 7.000 lira; stand kirası 3.000 lira. Muhasebe kârı kaçtır?",
          adimlar: ["*Explicit costs*: 7.000 + 3.000 = 10.000 lira.", "*Accounting profit* = toplam gelir − *explicit costs*.", "20.000 − 10.000 = 10.000 lira."],
          sonuc: "*Accounting profit* = ==10.000 lira==." }
      ]
    },
    {
      baslik: "*Economic profit* ve *economic loss*",
      kisa: "Ekonomik kâr, vazgeçilen gelirleri de çıkarır; hiçbir zaman muhasebe kârından büyük olamaz.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "*Economic profit*", alt: "ekonomik kâr" }, "=",
            { t: "Toplam gelir" }, "−",
            { t: "*Explicit*" }, "−",
            { t: "*Implicit*" }
          ], aciklama: "Negatif çıkarsa buna *economic loss* (ekonomik zarar) denir." },
        { tip: "grafik", baslik: "Ece: gelirden ekonomik kâra (1 birim = 2.000 TL; sıfır çizgisi y = 2)", xlabel: "Adım", ylabel: "TL", xmax: 6, ymax: 13,
          xticks: [{ v: 1, label: "Gelir" }, { v: 2, label: "Explicit" }, { v: 3, label: "Muhasebe kârı" }, { v: 4, label: "Implicit" }, { v: 5, label: "Ekonomik kâr" }],
          yticks: [{ v: 1, label: "−2.000" }, { v: 2, label: "0" }, { v: 7, label: "10.000" }, { v: 12, label: "20.000" }],
          ogeler: [
            { id: "z", tip: "cizgi", renk: 0, kesik: true, from: [0, 2], to: [6, 2] },
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0.6, 2], [1.4, 2], [1.4, 12], [0.6, 12]], gizli: true },
            { id: "t1", tip: "yazi", x: 1, y: 12.6, metin: "20.000", gizli: true },
            { id: "b2", tip: "alan", renk: 2, noktalar: [[1.6, 7], [2.4, 7], [2.4, 12], [1.6, 12]], gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 12.6, metin: "−10.000", gizli: true },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[2.6, 2], [3.4, 2], [3.4, 7], [2.6, 7]], gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 7.6, metin: "10.000", gizli: true },
            { id: "b4", tip: "alan", renk: 3, noktalar: [[3.6, 1], [4.4, 1], [4.4, 7], [3.6, 7]], gizli: true },
            { id: "t4", tip: "yazi", x: 4, y: 7.6, metin: "−12.000", gizli: true },
            { id: "b5", tip: "alan", renk: 2, noktalar: [[4.6, 1], [5.4, 1], [5.4, 2], [4.6, 2]], gizli: true },
            { id: "t5", tip: "yazi", x: 5, y: 2.8, metin: "−2.000", gizli: true }
          ],
          durumlar: [
            { metin: "Toplam gelir 20.000 lira.", goster: ["b1", "t1"] },
            { metin: "*Explicit costs* 10.000 lirayı keser.", goster: ["b2", "t2"] },
            { metin: "Geriye *accounting profit* kalır: 10.000 lira.", goster: ["b3", "t3"] },
            { metin: "Ece kafede çalışsaydı 12.000 lira kazanırdı: bu *implicit cost* da düşülür.", goster: ["b4", "t4"] },
            { metin: "Sonuç sıfırın altına iner: *economic profit* = −2.000 lira, yani *economic loss*.", goster: ["b5", "t5"] }
          ] },
        { tip: "tuzak", metin: "*Implicit costs* hiçbir zaman negatif olmadığı için ekonomik kâr, muhasebe kârından küçük ya da eşit çıkar.", yanlis: "*Economic profit* *accounting profit*'ten büyük olabilir.", dogru: "*Economic profit* ≤ *accounting profit*; fark tam olarak *implicit costs*'tur (Ece: 10.000 − 12.000 = −2.000)." }
      ]
    },
    {
      baslik: "*Normal profit*: ekonomik kâr sıfır olunca",
      kisa: "Sıfır ekonomik kâr kötü değil; en iyi alternatif kadar kazanıyorsun.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🟡", terim: "Normal profit", tr: "normal kâr", tanim: "*Economic profit*'in sıfır olması: en iyi alternatif kadar kazanmak.", ornek: "Kafe Ece'ye 10.000 lira verseydi ekonomik kâr 0 olurdu." }
          ] },
        { tip: "ornek", baslik: "Kafe tam 10.000 lira verseydi?", durum: "Ece'nin geliri 20.000, *explicit costs* 10.000. Kafe maaşı 12.000 yerine 10.000 lira olsaydı ekonomik kâr kaç olurdu?",
          adimlar: ["*Implicit cost* = kaçan kafe maaşı = 10.000 lira.", "*Economic profit* = 20.000 − 10.000 − 10.000.", "Sonuç 0."],
          sonuc: "*Economic profit* = ==0==: Ece, en iyi alternatifi kadar kazanıyor; bu *normal profit*'tir." },
        { tip: "tablo", baslik: "Ekonomik kârın işaretine göre karar", head: ["*Economic profit*", "Yorum"],
          rows: [["Sıfırdan büyük", "Bu iş en iyi seçenek"], ["Sıfır (*normal profit*)", "Fark etmez; kalmaya razısın"], ["Sıfırdan küçük", "En iyi seçenek başka yerde"]], vurgu: 1 },
        { tip: "tuzak", metin: "Sıfır ekonomik kâr, \"hiç kazanç yok\" anlamına gelmez; *implicit costs* de karşılanmıştır.", yanlis: "*Economic profit* sıfırsa işletme kâr etmiyor, kapanmalı.", dogru: "Sıfır *economic profit* = *normal profit*; firma kalmaya razıdır." }
      ]
    },
    {
      baslik: "Maliyetler kişiden kişiye değişir",
      kisa: "Aynı karar iki kişiye farklı fiyata gelir; ikisi de akılcı olabilir.",
      bloklar: [
        { tip: "adimlar", baslik: "Okula gitmenin implicit cost'u", adimlar: [
            { baslik: "Oyun yayıncısı", metin: "Milyonlarca takipçisi var; her ders saati kaçan bir yayın. *Implicit cost* çok yüksek." },
            { baslik: "Sen", metin: "O saatin senin için değeri daha düşük; aynı karar sana daha ucuza gelir." },
            { baslik: "Sonuç", metin: "İkiniz farklı seçim yapabilirsiniz ve ==ikiniz de akılcı== olabilirsiniz." }
          ] },
        { tip: "tuzak", metin: "Başkası aynı seçeneklerde farklı karar verince onun mantıksız olduğunu düşünme.", yanlis: "Aynı seçeneklerde farklı seçim yapan biri akılcı değildir.", dogru: "*Implicit costs* kişiye göre değişir; farklı seçim, farklı maliyet demektir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Akılcı karar: faydayı ve maliyeti tart; *net benefit* pozitifse yap.",
            "*Explicit costs* cepten çıkan para; *implicit costs* vazgeçilen en iyi seçeneğin değeridir.",
            "Her durumda ödenecek maliyetler ve *sunk cost* karara girmez.",
            "*Accounting profit* = gelir − *explicit costs*.",
            "*Economic profit* = gelir − *explicit costs* − *implicit costs*; negatifse *economic loss*.",
            "*Economic profit* ≤ *accounting profit*.",
            "Sıfır ekonomik kâr *normal profit*'tir; kötü değil.",
            "Maliyetler kişiye göre değişir; farklı seçimler de akılcı olabilir."
          ] }
      ]
    }
  ]
};
