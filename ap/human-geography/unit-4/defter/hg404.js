/* Kitora not defteri · hg404 · 4.4 Siyasi Sınırların Tanımlanması
   Kaynak: AP HuG CED Topic 4.4 (IMP-4.A). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg404",
  amac: "Bu konu devletleri ayıran sınırların türlerini anlatıyor: *antecedent*, *subsequent*, *superimposed*, *consequent*, *geometric* ve *relict*. Sınırın ne zaman, kim tarafından ve nasıl çizildiğini sorarak türünü bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Altı sınır türü, dört soru",
      kisa: "Sınırlar; ne zaman, kim tarafından, hangi şekilde çizildiğine göre ayrılır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Boundary", tr: "siyasi sınır", tanim: "İki devletin ya da iki yönetim biriminin egemenlik alanını ayıran çizgi. Haritada çizilir, bazen arazide de işaretlenir.", ornek: "Türkiye ile Yunanistan arasındaki kara sınırı." }
          ] },
        { tip: "adimlar", baslik: "Sınırı tanımak için sor", adimlar: [
            { baslik: "Ne zaman çizildi?", metin: "Yerleşimden önce mi (*antecedent*), sonra mı (*subsequent*)?" },
            { baslik: "Kim çizdi, neye göre?", metin: "Dışarıdan dayatıldı mı (*superimposed*), kültür çizgisini mi izledi (*consequent*)?" },
            { baslik: "Şekli nasıl?", metin: "Düz çizgi ya da enlem, boylam mı (*geometric*)?" },
            { baslik: "Hâlâ işliyor mu?", metin: "Artık sınır değil ama izi duruyorsa *relict*." }
          ] },
        { tip: "tablo", baslik: "Altı tür bir bakışta", head: ["Tür", "Ana ipucu", "Örnek"], rows: [
            ["*Antecedent*", "Bölge yerleşmeden önce çizildi", "ABD–Kanada sınırının batı kesimi"],
            ["*Subsequent*", "Yerleşimden sonra, kültürel yapıya uyarak çizildi", "Avrupa'daki sınırların çoğu"],
            ["*Superimposed*", "Dışarıdan bir güç, yerel halkı yok sayarak dayattı", "Berlin Konferansı'ndaki Afrika sınırları"],
            ["*Consequent*", "Dil, din gibi kültürel çizgiyi izler", "Hindistan–Pakistan (din esaslı)"],
            ["*Geometric*", "Düz çizgi; enlem ya da boylam", "Mısır–Sudan (22° kuzey)"],
            ["*Relict*", "Artık işlemiyor, izi kalmış", "Berlin Duvarı'nın izleri"]
          ] }
      ]
    },
    {
      baslik: "*Antecedent* ve *subsequent*: zamana göre",
      kisa: "*Antecedent* yerleşimden önce, *subsequent* yerleşimden sonra çizilir.",
      bloklar: [
        { tip: "grafik", baslik: "Sınır ne zaman çizildi?", xlabel: "Zaman", ylabel: "Yerleşim", xmax: 10, ymax: 10,
          ogeler: [
            { id: "pop", tip: "egri", renk: 0, noktalar: [[0.2, 0.4], [2, 0.8], [4, 2.2], [6, 5], [8, 7.8], [9.8, 9]] },
            { id: "ant", tip: "cizgi", renk: 2, from: [1.2, 0.2], to: [1.2, 9.6], gizli: true },
            { id: "lA", tip: "yazi", x: 2.4, y: 9.6, metin: "antecedent", gizli: true },
            { id: "sub", tip: "cizgi", renk: 3, from: [7.4, 0.2], to: [7.4, 9.6], gizli: true },
            { id: "lS", tip: "yazi", x: 6.0, y: 9.6, metin: "subsequent", gizli: true },
            { id: "rel", tip: "cizgi", renk: 3, kesik: true, from: [7.4, 0.2], to: [7.4, 9.6], gizli: true },
            { id: "lR", tip: "yazi", x: 8.8, y: 9.6, metin: "relict", gizli: true }
          ],
          durumlar: [
            { metin: "Bir bölgede zamanla insanlar yerleşiyor: mavi çizgi yerleşimin artışını gösteriyor." },
            { metin: "Bölgede henüz kimse yokken çizilen sınır: ==*antecedent*== (önceden var olan).", goster: ["ant", "lA"] },
            { metin: "Yerleşim oturduktan sonra, insanların yaşadığı yerlere uyarlanarak çizilen sınır: ==*subsequent*==.", goster: ["sub", "lS"] },
            { metin: "Sınır sonradan işlevini yitirirse çizgi kalkar ama izi kalır: ==*relict*==.", gizle: ["sub", "lS"], goster: ["rel", "lR"] }
          ] },
        { tip: "ikili", sol: { ikon: "📐", baslik: "*Antecedent*", maddeler: ["Sınır, bölge yerleşmeden önce çizilir", "Ardından insanlar sınırı kabul ederek yerleşir"] },
          sag: { ikon: "🏘️", baslik: "*Subsequent*", maddeler: ["Sınır, yerleşim oturduktan sonra çizilir", "Mevcut topluluklara uyarlanır"] },
          oyun: [
            { metin: "Çizim sırasında bölgede neredeyse kimse yaşamıyordu.", cevap: "sol", neden: "Önce sınır, sonra yerleşim: *antecedent*." },
            { metin: "Sınır, dil ve din gruplarının nerede yaşadığı bilindikten sonra çizildi.", cevap: "sag", neden: "Yerleşim zaten vardı: *subsequent*." },
            { metin: "Kuzey Amerika'nın batısında 49° kuzey enlemi boyunca çizilen sınır, bölge seyrekken kuruldu.", cevap: "sol", neden: "Yerleşimden önce çizildi: *antecedent*." },
            { metin: "Avrupa'da yüzyıllar boyunca yerleşik topluluklar arasında anlaşmalarla ayarlanan sınırlar.", cevap: "sag", neden: "Yerleşik halka göre ayarlandı: *subsequent*." }
          ] }
      ]
    },
    {
      baslik: "*Superimposed* ve *consequent*: kim, neye göre?",
      kisa: "*Superimposed* dışarıdan dayatılır; *consequent* kültürel çizgiyi izler.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✂️", baslik: "*Superimposed* (dayatılmış)", maddeler: ["Dışarıdan bir güç, çoğu kez sömürgeci devlet, çizer", "Yerel dil, din ve topluluk sınırlarını yok sayar"] },
          sag: { ikon: "🧵", baslik: "*Consequent* (kültürel çizgiyi izleyen)", maddeler: ["Dil, din ya da etnik kimlik çizgisini izler", "Halkların yaşadığı yere göre çizilir"] },
          oyun: [
            { metin: "Avrupalı devletler Afrika'yı Berlin Konferansı'nda yerel halklara danışmadan bölüştü.", cevap: "sol", neden: "Dışarıdan dayatma: *superimposed*." },
            { metin: "Sınır, büyük ölçüde din çoğunluğuna göre çizildi (Hindistan–Pakistan, 1947).", cevap: "sag", neden: "Kültürel çizgiyi izliyor: *consequent*." },
            { metin: "Birinci Dünya Savaşı sonrası İngiltere ve Fransa, Orta Doğu'da yeni sınırları kendi çıkarlarına göre çizdi.", cevap: "sol", neden: "Yerel halk dışarıda bırakıldı: *superimposed*." },
            { metin: "İki halkın dil sınırı izlenerek çizilen bir sınır.", cevap: "sag", neden: "Dil çizgisini izliyor: *consequent*." }
          ] },
        { tip: "tuzak", metin: "Düz çizgi şekil bilgisidir; kim çizdi sorusunu cevaplamaz.", yanlis: "Düz çizgi olan her sınır *superimposed*'dır.", dogru: "*Geometric* şekle, *superimposed* çizen güce bakar. Bir sınır ikisi de olabilir ama biri diğerini gerektirmez." }
      ]
    },
    {
      baslik: "*Geometric*, doğal ve *relict* sınırlar",
      kisa: "*Geometric* düz çizgidir; doğal sınır nehir ve dağı izler; *relict* artık işlemez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📐", terim: "Geometric boundary", tr: "geometrik sınır", tanim: "Enlem, boylam ya da cetvelle çizilmiş düz çizgilerle belirlenen sınır.", ornek: "ABD–Kanada (49° kuzey), Mısır–Sudan (22° kuzey)." },
            { ikon: "🏞️", terim: "Physical boundary", tr: "doğal sınır", tanim: "Nehir, göl ya da dağ gibi doğal özellikleri izleyen sınır.", ornek: "Meriç Nehri, Türkiye–Yunanistan sınırının büyük bölümünde sınırdır." },
            { ikon: "🏚️", terim: "Relict boundary", tr: "eski (artık işlemeyen) sınır", tanim: "Siyasi sınır olarak işlevini yitirmiş ama izi manzarada ya da kültürde kalmış eski sınır.", ornek: "Berlin Duvarı'nın izleri, Çin Seddi." }
          ] },
        { tip: "ikili", sol: { ikon: "📐", baslik: "*Geometric*", maddeler: ["Düz çizgi, enlem ya da boylam", "Haritada cetvelle çizilmiş gibi görünür"] },
          sag: { ikon: "🌊", baslik: "*Physical*", maddeler: ["Nehir, dağ ya da göl boyunca ilerler", "Eğri ve kıvrımlıdır"] },
          oyun: [
            { metin: "Mısır ile Sudan arasındaki sınırın büyük kısmı 22° kuzey enlemi boyunca uzanır.", cevap: "sol", neden: "Enlem çizgisi: *geometric*." },
            { metin: "Türkiye ile Yunanistan arasındaki sınırın büyük kısmı Meriç Nehri boyunca ilerler.", cevap: "sag", neden: "Nehri izliyor: *physical*." },
            { metin: "ABD ile Kanada'nın batıdaki sınırı 49. paralel üzerindedir.", cevap: "sol", neden: "Paralel boyunca düz çizgi: *geometric*." },
            { metin: "ABD ile Meksika sınırının önemli bir kısmı Rio Grande Nehri'ni izler.", cevap: "sag", neden: "Nehir sınırı: *physical*." }
          ] }
      ]
    },
    {
      baslik: "Bir sınır, birden çok tür",
      kisa: "Bir sınır birden çok türe girebilir; sorudaki ipucuna bak.",
      bloklar: [
        { tip: "ornek", baslik: "49. paralel hangi türler?", durum: "ABD–Kanada sınırı batıda 49° kuzey enlemi boyunca düz bir çizgi olarak uzanır. Çizildiği sırada bölgede az insan yaşıyordu. Hangi türlere girer?",
          adimlar: ["Şekil: düz çizgi, enleme uyuyor → *geometric*.", "Zaman: bölge henüz seyrek yerleşikti → *antecedent*.", "Kim çizdi? İki devletin anlaşması; yerel halk sorulmadı."],
          sonuc: "==*Geometric* ve *antecedent*==: iki ayrı ipucu iki farklı türü gösterebilir. Sınavda soru hangi ölçütü soruyorsa ona göre yanıtla." },
        { tip: "tuzak", metin: "Tabloda ya da senaryoda birden çok ipucu olabilir.", yanlis: "Her sınır yalnızca tek bir türdür.", dogru: "Türler farklı sorulara cevap verir: ne zaman, kim, nasıl, hâlâ işliyor mu. Bir sınır aynı anda birkaçına uyabilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Antecedent*: yerleşimden önce çizildi (49° kuzey enlemi). *Subsequent*: yerleşimden sonra, topluluklara uyarlanarak çizildi (Avrupa).",
            "*Superimposed*: dışarıdan dayatıldı, yerel halk yok sayıldı (Berlin Konferansı, Afrika; Orta Doğu).",
            "*Consequent*: dil, din gibi kültürel çizgiyi izler (Hindistan–Pakistan).",
            "*Geometric*: düz çizgi, enlem ya da boylam (Mısır–Sudan 22° kuzey).",
            "*Relict*: artık işlemeyen eski sınır; izi kalır (Berlin Duvarı, Çin Seddi).",
            "Doğal (*physical*) sınırlar nehir ya da dağı izler; Meriç Nehri örnektir.",
            "Dört soru: ne zaman, kim/neye göre, hangi şekil, hâlâ işliyor mu? Bir sınır birden çok türe girebilir."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir sınır çizilirken bölgede çok az insan yaşıyordu; yerleşim sonradan başladı. Zaman ölçütüne göre bu sınır hangi türdür?",
      opts: ["*Subsequent*", "*Antecedent*", "*Relict*", "*Consequent*"],
      a: 1,
      why: "Sınır yerleşimden önce çizildiği için *antecedent*'tir. *Subsequent* yerleşim oturduktan sonra çizilen sınırdır; zaman sırasının tersidir."
    },
    {
      q: "Avrupalı devletler Afrika'daki sınırları yerel halkların dilini ve topluluklarını dikkate almadan çizdi. Bu sınırlar için en uygun terim hangisidir?",
      opts: ["*Consequent*", "*Relict*", "*Superimposed*", "*Antecedent*"],
      a: 2,
      why: "Dışarıdan bir güç sınırı yerel halkı yok sayarak dayattı: *superimposed*. *Consequent* ise tam tersine kültürel çizgiyi izler."
    },
    {
      q: "Tabloda üç sınırın özellikleri veriliyor. Hangi eşleştirme doğrudur?",
      fig: { type: "table", head: ["Sınır", "Özellik"], rows: [["X", "Büyük ölçüde din çoğunluğuna göre çizildi"], ["Y", "Artık işlemiyor; izi arazide duruyor"], ["Z", "22° kuzey enlemi boyunca düz çizgi"]] },
      opts: ["X *consequent*, Y *relict*, Z *geometric*", "X *superimposed*, Y *relict*, Z *geometric*", "X *consequent*, Y *subsequent*, Z *geometric*", "X *geometric*, Y *relict*, Z *consequent*"],
      a: 0,
      why: "Din çizgisini izleyen X *consequent*'tir; işlevini yitiren Y *relict*'tir; düz enlem çizgisi olan Z *geometric*'tir. B seçeneği X'e *superimposed* der; oysa X yerel kimlik çizgisini izliyor."
    },
    {
      q: "Aşağıdaki ifadelerden hangisi doğrudur?",
      opts: ["Her *geometric* sınır aynı zamanda *superimposed*'dır.", "*Geometric* şekle, *superimposed* çizen güce bakar; bir sınır ikisi de olabilir.", "*Geometric* sınır yalnızca nehirleri izler.", "*Geometric* ile *relict* aynı şeydir."],
      a: 1,
      why: "Türler farklı ölçütlere bakar: şekil ve kim çizdi. Biri diğerini gerektirmez; ABD–Kanada sınırı *geometric* ve *antecedent*'tir ama *superimposed* değildir."
    },
    {
      q: "Bir şehri yıllarca ikiye bölen duvar yıkıldı, fakat duvarın izi hâlâ kaldırımlarda ve haritalarda görülüyor. Bu sınır hangi türdür?",
      opts: ["*Antecedent*", "*Consequent*", "*Geometric*", "*Relict*"],
      a: 3,
      why: "Artık siyasi sınır olarak işlemeyen ama izi kalan sınır: *relict*. *Geometric* yalnızca şekli anlatır; sınırın hâlâ işleyip işlemediğiyle ilgilenmez."
    }
  ]
};
