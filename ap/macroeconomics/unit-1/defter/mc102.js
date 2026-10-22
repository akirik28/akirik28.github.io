/* Kitora not defteri · mc102 · 1.2 Fırsat Maliyeti ve PPC
   Kaynak: ap-videolar/src/episodes/mc102 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mc102",
  ozet: "Her seçimin gerçek bedeli, vazgeçtiğin en iyi seçenektir: *opportunity cost*. Bu defterde konser biletinin neden 600 değil 1000 liraya mal olduğunu, ilk modelin olan *PPC*'yi, eğrinin üstünü, içini ve dışını, iki nokta arasındaki fırsat maliyetini (yön önemli!) ve *productive* ile *allocative efficiency* farkını göreceksin.",
  bolumler: [
    {
      baslik: "Konser sana kaça patladı?",
      bloklar: [
        { tip: "hikaye", ikon: "🎟️", baslik: "600 liralık bilet, ama gerçek maliyet?",
          metin: "Bu akşamki konser biletin 600 lira. Ama aynı saatte kafede vardiyan var ve orada 400 lira kazanacaktın. Üstelik yarın sınav var. Peki bu konser sana gerçekte kaça patladı? \"600\" dersen bir ekonomist gülümseyip başını sallar. Cevap, bu dersin belki de en önemli fikrinde saklı." },
        { tip: "not", metin: "Ekonomistin hesabında maliyet yalnızca ==cebinden çıkan para== değildir. Vazgeçtiğin şey de maliyetin parçasıdır. Aşağıdaki hesapta bu fikri sayıya dökeceğiz." },
        { tip: "formul", parcalar: [
            { t: "600 TL", alt: "cebinden çıkan bilet" }, "+",
            { t: "400 TL", alt: "kaçan vardiya kazancı" }, "=",
            { t: "1000 TL", alt: "konserin ekonomik maliyeti" }
          ], aciklama: "*Economic cost* = cebinden çıkan + vazgeçtiğin. Ekonomist ikisini de sayar." }
      ]
    },
    {
      baslik: "*Trade-offs* ve *opportunity cost*",
      bloklar: [
        { tip: "not", metin: "Bu akşam dört seçeneğin vardı: konser, kafe vardiyası (+400 TL), sınava çalışmak ya da dizi izlemek. Konseri seçince öteki üçünden vazgeçtin." },
        { tip: "kavramlar", kartlar: [
            { ikon: "↔️", terim: "Trade-offs", tr: "vazgeçilen bütün seçenekler", tanim: "Bir seçim yaptığında bıraktığın **bütün** alternatifler.", ornek: "Konseri seçince kafeden, ders çalışmaktan ve diziden vazgeçtin: üç trade-off." },
            { ikon: "🥇", terim: "Opportunity cost", tr: "fırsat maliyeti", tanim: "Vazgeçtiğin ==en iyi tek== seçeneğin değeri (*next best alternative*).", ornek: "Konser olmasa kafeye giderdin: fırsat maliyeti 400 TL'lik vardiya." },
            { ikon: "💳", terim: "Economic cost", tr: "ekonomik maliyet", tanim: "Cebinden çıkan para ile vazgeçtiğin fırsat maliyetinin toplamı.", ornek: "600 TL bilet + 400 TL kaçan kazanç = 1000 TL." }
          ] },
        { tip: "ikili", sol: { ikon: "↔️", baslik: "*Trade-offs*", maddeler: ["Vazgeçilen BÜTÜN seçenekler", "Konser örneğinde üç tane: kafe, ders, dizi", "Sayısı birden fazla olabilir"] },
          sag: { ikon: "🥇", baslik: "*Opportunity cost*", maddeler: ["Vazgeçilen EN İYİ tek seçenek", "Konser örneğinde yalnızca kafe vardiyası", "Her zaman tek bir şeydir"] },
          oyun: [
            { metin: "Konser yüzünden ders çalışmayı, diziyi ve kafeyi bırakmak.", cevap: "sol", neden: "Vazgeçilen bütün seçenekler: *trade-offs*." },
            { metin: "Konsere gitmeseydin yapacağın en iyi şey olan 400 liralık vardiya.", cevap: "sag", neden: "En iyi tek alternatif: *opportunity cost*." },
            { metin: "Dört seçenekten üçünü elemek.", cevap: "sol", neden: "Elenen hepsi birden: *trade-offs*." },
            { metin: "Bedava bir okul gezisine gitmenin gerçek bedeli, o gün yapabileceğin en iyi işten vazgeçmektir.", cevap: "sag", neden: "Vazgeçilen en iyi alternatif: *opportunity cost*." }
          ] },
        { tip: "tuzak", metin: "\"Bedava\" bir etkinlik bile fırsat maliyeti taşır. Para ödemedin diye maliyeti sıfır sanma.", yanlis: "Para ödemediysem maliyeti yoktur.", dogru: "Vazgeçtiğin en iyi alternatif varsa fırsat maliyeti vardır; *trade-offs* ile *opportunity cost* de aynı şey değildir (bütün seçenekler ≠ en iyi tek seçenek)." }
      ]
    },
    {
      baslik: "Model ve *PPC*: ilk modelimiz",
      bloklar: [
        { tip: "adimlar", baslik: "Ekonomist fikrini nasıl anlatır?", adimlar: [
            { baslik: "1 · Sözle", metin: "Önce fikri cümleyle söyler." },
            { baslik: "2 · Sayıyla", metin: "Sonra tabloya, rakamlara döker." },
            { baslik: "3 · Grafikle", metin: "Rakamları grafiğe yerleştirir." },
            { baslik: "4 · Genel kuralla", metin: "En sonunda her duruma uyan bir kural çıkarır." }
          ] },
        { tip: "not", metin: "Kulübün kermesi var. Bir öğleden sonrada ya 10 kurabiye pişirirsin, ya 5 bileklik örersin ya da arada bir karışım yaparsın. Bu bir ==*model*==: gerçeği basitleştirip bir ilişkiyi anlatan araç." },
        { tip: "tablo", baslik: "Kermes tablosu", head: ["Bileklik", "Kurabiye"], rows: [["0", "10"], ["1", "8"], ["2", "6"], ["3", "4"], ["4", "2"], ["5", "0"]], not: "Her bileklik 2 kurabiyelik zamana mal oluyor: kurabiye = 10 − 2 × bileklik." },
        { tip: "grafik", baslik: "Tablodan grafiğe: kermes PPC'si", xlabel: "Bileklik", ylabel: "Kurabiye", xmax: 6, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "p0", tip: "nokta", renk: 1, x: 0, y: 10, etiket: "(0, 10)", gizli: true },
            { id: "p5", tip: "nokta", renk: 1, x: 5, y: 0, etiket: "(5, 0)", gizli: true },
            { id: "p1", tip: "nokta", renk: 1, x: 1, y: 8, etiket: "(1, 8)", gizli: true },
            { id: "p2", tip: "nokta", renk: 1, x: 2, y: 6, etiket: "(2, 6)", gizli: true },
            { id: "p3", tip: "nokta", renk: 1, x: 3, y: 4, etiket: "(3, 4)", gizli: true },
            { id: "p4", tip: "nokta", renk: 1, x: 4, y: 2, etiket: "(4, 2)", gizli: true },
            { id: "line", tip: "cizgi", renk: 0, from: [0, 10], to: [5, 0], etiket: "PPC", gizli: true }
          ],
          durumlar: [
            { metin: "Önce iki uç: hiç bileklik, 10 kurabiye ya da 5 bileklik, hiç kurabiye.", goster: ["p0", "p5"] },
            { metin: "Aradaki karışımlar: her ek bilekliğe karşılık 2 kurabiye azalıyor.", goster: ["p1", "p2", "p3", "p4"] },
            { metin: "Noktaları birleştir: işte *production possibilities curve*, kısaca ==*PPC*==.", goster: ["line"] },
            { metin: "Bazı kitaplar buna *PPF* (*production possibilities frontier*) der; ==aynı şeydir==.", set: { line: { etiket: "PPC = PPF" } } }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Model", tr: "model", tanim: "Gerçeği basitleştirerek bir ilişkiyi anlatan araç. Önce sözle, sonra sayıyla, sonra grafikle kurulur; sonunda genel bir kural verir.", ornek: "Kermes tablosu ve grafiği, zaman kıtlığının modeli." },
            { ikon: "📈", terim: "Production possibilities curve (PPC)", tr: "üretim olanakları eğrisi", tanim: "Sabit kaynak ve teknolojiyle, kaynaklar tam kullanıldığında iki maldan üretilebilecek bütün kombinasyonları gösteren model.", ornek: "Bir öğleden sonrada üretebileceğin bileklik–kurabiye karışımları." },
            { ikon: "🏷️", terim: "Production possibilities frontier (PPF)", tr: "PPC'nin eş anlamlısı", tanim: "PPC ile aynı kavram; sadece \"sınır\" vurgusu var.", ornek: "Sınavda PPC de yazsa PPF de yazsa aynı grafik." }
          ] }
      ]
    },
    {
      baslik: "*PPC*'nin üç varsayımı",
      bloklar: [
        { tip: "adimlar", baslik: "PPC şu üç şeyi varsayar", adimlar: [
            { baslik: "1 · Yalnızca iki mal", metin: "Kurabiye ve bileklik. İki eksenli grafik ancak iki malı gösterebilir." },
            { baslik: "2 · Kaynaklar tam ve verimli kullanılır", metin: "Ülke için buna *full employment* denir: hiçbir işçi, makine ya da toprak boşta değil." },
            { baslik: "3 · Kaynak miktarı ve teknoloji sabit", metin: "Senin için: tek öğleden sonra, tek fırın, aynı sen." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "👥", terim: "Full employment", tr: "tam istihdam", tanim: "Bütün kaynakların (işçi, makine, toprak) tam ve verimli kullanılması. PPC'nin varsayımıdır.", ornek: "Fırın hiç boş durmuyor, sen öğleden sonra boyunca çalışıyorsun." }
          ] },
        { tip: "grafik", baslik: "Eğrinin her noktası bir kombinasyon", xlabel: "Bileklik", ylabel: "Kurabiye", xmax: 6, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "line", tip: "cizgi", renk: 0, from: [0, 10], to: [5, 0], etiket: "PPC" },
            { id: "m", tip: "nokta", renk: 1, x: 1, y: 8, etiket: "1 bileklik + 8 kurabiye", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Eğri, sabit kaynak ve teknolojiyle üretebileceğin en uç sınır." },
            { metin: "Bir nokta eğri üzerinde gezinsin: **1 bileklik + 8 kurabiye** üretilebilir bir karışım.", goster: ["m"] },
            { metin: "**2 bileklik + 6 kurabiye** de olur.", set: { m: { x: 2, y: 6, etiket: "2 bileklik + 6 kurabiye" } } },
            { metin: "**3 bileklik + 4 kurabiye**… Eğri üzerindeki her nokta, bu kaynaklarla üretilebilecek bir kombinasyon.", set: { m: { x: 3, y: 4, etiket: "3 bileklik + 4 kurabiye" } } }
          ] }
      ]
    },
    {
      baslik: "Eğrinin üstü, içi ve dışı",
      bloklar: [
        { tip: "grafik", baslik: "Üç tür nokta", xlabel: "Bileklik", ylabel: "Kurabiye", xmax: 6, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "line", tip: "cizgi", renk: 0, from: [0, 10], to: [5, 0], etiket: "PPC" },
            { id: "C", tip: "nokta", renk: 1, x: 3, y: 4, etiket: "C · Efficient", kilavuz: true, gizli: true },
            { id: "X", tip: "nokta", renk: 2, x: 2, y: 3, etiket: "X · Inefficient", kilavuz: true, gizli: true },
            { id: "xt", tip: "yazi", x: 2.1, y: 1.6, metin: "30 dk telefon: boşa giden zaman", gizli: true },
            { id: "Y", tip: "nokta", renk: 3, x: 4, y: 8, etiket: "Y · Unattainable", kilavuz: true, gizli: true },
            { id: "yt", tip: "yazi", x: 4.5, y: 6.6, metin: "scarcity: şimdilik ulaşılamaz", gizli: true }
          ],
          durumlar: [
            { metin: "PPC her şeyi üç bölgeye ayırır: eğrinin üstü, içi ve dışı." },
            { metin: "**3 bileklik, 4 kurabiye**: tam eğrinin üstünde. ==*Efficient*==: hiçbir kaynak boşa gitmiyor.", goster: ["C"] },
            { metin: "**2 bileklik, 3 kurabiye**: eğrinin içinde. ==*Inefficient*==: yarım saat telefonda oyalandın; 2 bilekliğe 6 kurabiye yetişirdi.", goster: ["X", "xt"] },
            { metin: "**4 bileklik, 8 kurabiye**: eğrinin dışında. ==*Unattainable*==: 4 bilekliğe en çok 2 kurabiye yetişir. İşte kıtlık.", goster: ["Y", "yt"] },
            { metin: "Dışarısı \"şimdilik\" ulaşılamaz: kaynak ya da teknoloji artarsa bir gün ulaşılabilir (sonraki bölümün konusu).", set: { yt: { metin: "for now: artan kaynakla belki" } } }
          ] },
        { tip: "tablo", baslik: "Üç nokta bir bakışta", head: ["Nokta", "Konum", "Anlamı", "Ülke için"], rows: [
            ["C (3, 4)", "Eğri üstü", "*Efficient*: kaynaklar tam kullanılıyor", "Tam istihdam"],
            ["X (2, 3)", "Eğri içi", "*Inefficient*: iki maldan da fazlası üretilebilir", "*Unemployment*: atıl işçi, boş duran makine"],
            ["Y (4, 8)", "Eğri dışı", "*Unattainable*: mevcut kaynakla ulaşılamaz", "*Scarcity* (kıtlık)"]
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "✅", terim: "Efficient", tr: "verimli", tanim: "PPC'nin üstündeki nokta. Kaynak israfı yok; bir maldan fazlası için ötekinden vazgeçmek gerekir.", ornek: "3 bileklik + 4 kurabiye." },
            { ikon: "⚠️", terim: "Inefficient", tr: "verimsiz", tanim: "PPC'nin içindeki nokta. Kaynakların bir kısmı atıl; iki maldan da fazlası üretilebilir.", ornek: "2 bileklik + 3 kurabiye: telefonda geçen 30 dakika." },
            { ikon: "🪑", terim: "Unemployment / underutilization", tr: "işsizlik / atıl kaynak", tanim: "Ülke düzeyinde eğrinin içindeki noktanın anlamı: boşta işçiler, duran makineler.", ornek: "Bankta oturan işçiler ve çalışmayan bir çark." },
            { ikon: "🚫", terim: "Unattainable", tr: "ulaşılamaz", tanim: "PPC'nin dışındaki nokta. Mevcut kaynak ve teknolojiyle üretilemez; bu kıtlığın görüntüsüdür.", ornek: "4 bileklik + 8 kurabiye." }
          ] },
        { tip: "ikili", sol: { ikon: "⚠️", baslik: "Eğrinin İÇİ", maddeler: ["Kaynaklar kullanılmıyor", "Üretilebilir ama verimsiz", "Ülkede işsizlik anlamına gelir"] },
          sag: { ikon: "🚫", baslik: "Eğrinin DIŞI", maddeler: ["Kaynak yetmiyor", "Üretilemez", "Kıtlığın sonucu"] },
          oyun: [
            { metin: "Fabrikaların yarısı boş, işçiler evde.", cevap: "sol", neden: "Kaynak atıl: eğrinin içi, *inefficient*." },
            { metin: "Ülke bütün kaynaklarıyla da bu kadar mal üretemiyor.", cevap: "sag", neden: "Mevcut kaynakla imkânsız: eğrinin dışı, *unattainable*." },
            { metin: "Kaynaklar boşta olduğu için her iki maldan da biraz daha üretmek mümkün.", cevap: "sol", neden: "İçerideki noktadan eğriye çıkmak iki malı birden artırır: eğrinin içi." },
            { metin: "Ötekinden vazgeçsen bile bu miktara kaynak yetmiyor.", cevap: "sag", neden: "Kıtlık duvarı: eğrinin dışı." }
          ] },
        { tip: "tuzak", baslik: "Dışarıdaki nokta", metin: "Eğrinin dışındaki bir nokta için \"verimsiz\" demek yanlıştır.", yanlis: "Eğrinin dışındaki nokta verimsizdir.", dogru: "Dışarıdaki nokta ==ulaşılamazdır== (*unattainable*, kıtlık). Verimsiz olan, eğrinin içindeki noktadır; orada eğri kaymaz, sadece kaynaklar atıldır." }
      ]
    },
    {
      baslik: "Eğri üzerinde gezinmek: fırsat maliyeti",
      bloklar: [
        { tip: "not", metin: "Eğri üzerinde kaymak bir *trade-off*: bir maldan fazlası, ötekinden azı. İşte fırsat maliyeti burada hesaplanır." },
        { tip: "grafik", baslik: "C'den D'ye: 1 bilekliğin bedeli", xlabel: "Bileklik", ylabel: "Kurabiye", xmax: 6, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "line", tip: "cizgi", renk: 0, from: [0, 10], to: [5, 0], etiket: "PPC" },
            { id: "C", tip: "nokta", renk: 1, x: 3, y: 4, etiket: "C (3, 4)", kilavuz: true },
            { id: "D", tip: "nokta", renk: 1, x: 4, y: 2, etiket: "D (4, 2)", kilavuz: true, gizli: true },
            { id: "oh", tip: "ok", renk: 1, from: [3, 4], to: [4, 4], gizli: true },
            { id: "ht", tip: "yazi", x: 3.5, y: 4.6, metin: "+1 bileklik", gizli: true },
            { id: "ov", tip: "ok", renk: 2, from: [4, 4], to: [4, 2], gizli: true },
            { id: "vt", tip: "yazi", x: 4.9, y: 3.1, metin: "−2 kurabiye", gizli: true },
            { id: "X", tip: "nokta", renk: 2, x: 2, y: 3, etiket: "X (2, 3)", kilavuz: true, gizli: true },
            { id: "diag", tip: "ok", renk: 1, from: [2, 3], to: [3, 4], gizli: true },
            { id: "dt", tip: "yazi", x: 1.6, y: 5.2, metin: "iki maldan da +1: OC = 0", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: C noktası, 3 bileklik ve 4 kurabiye." },
            { metin: "D noktasına gidince bileklik **3 → 4** (+1).", goster: ["D", "oh", "ht"] },
            { metin: "Aynı anda kurabiye **4 → 2** (−2). Bir bileklik, ==2 kurabiyeye== mal oldu.", goster: ["ov", "vt"] },
            { metin: "Sürpriz: içerideki X'ten eğri üzerindeki C'ye çıkmanın fırsat maliyeti **sıfır**; ikisinden de fazla üretirsin.", gizle: ["D", "oh", "ht", "ov", "vt"], goster: ["X", "diag", "dt"] }
          ] },
        { tip: "formul", parcalar: [
            { t: "Fırsat maliyeti", alt: "opportunity cost" }, "=",
            { t: "Vazgeçilen", alt: "given up" }, "÷",
            { t: "Kazanılan", alt: "gained" }
          ], aciklama: "Bölünen hep vazgeçtiğin mal, bölen hep kazandığın mal." },
        { tip: "ornek", baslik: "1 bilekliğin ve 1 kurabiyenin maliyeti", durum: "Kermes PPC'sinde C (3 bileklik, 4 kurabiye) noktasından D (4 bileklik, 2 kurabiye) noktasına gidiyorsun. 1 bilekliğin ve 1 kurabiyenin fırsat maliyeti nedir?",
          adimlar: ["Kazanılan: bileklik 3 → 4, yani +1 bileklik.", "Vazgeçilen: kurabiye 4 → 2, yani −2 kurabiye.", "1 bilekliğin maliyeti = 2 kurabiye ÷ 1 bileklik = 2 kurabiye.", "Ters yönde: 1 kurabiye = 1 bileklik ÷ 2 kurabiye = ½ bileklik."],
          sonuc: "1 bileklik = 2 kurabiye; 1 kurabiye = ½ bileklik. İkisi birbirinin ==tersidir== (*reciprocal*)." },
        { tip: "tablo", baslik: "Birim fırsat maliyetleri", head: ["Mal", "Fırsat maliyeti", "Nasıl bulunur?"], rows: [
            ["1 bileklik", "2 kurabiye", "2 vazgeçilen ÷ 1 kazanılan"],
            ["1 kurabiye", "½ bileklik", "1 vazgeçilen ÷ 2 kazanılan (ters)"]
          ] },
        { tip: "tuzak", baslik: "Toplam mı birim mi?", metin: "Soruda \"B'den D'ye geçerken\" yazıyorsa **toplam** fırsat maliyeti istenir; \"bir birimin\" ya da \"per unit\" yazıyorsa **birim** maliyeti.", yanlis: "Soru hangi şekilde sorulursa sorulsun hep birim maliyeti bulunur.", dogru: "Önce sorunun toplam mı birim mi istediğine bak; sonra hangi malın azaldığını bul, o senin fırsat maliyetindir." }
      ]
    },
    {
      baslik: "Fındık–drone ülkesi: yön önemli",
      bloklar: [
        { tip: "not", metin: "Şimdi bütün bir ülke. Ülke **fındık** (bin ton) ve **drone** (bin adet) üretiyor. Tabloda A'dan E'ye beş kombinasyon var. Bu eğri kermesin düz çizgisinden farklı, **dışa bükük**; nedenini bir sonraki bölümde göreceksin." },
        { tip: "tablo", baslik: "Fındık–drone kombinasyonları", head: ["Nokta", "Fındık (bin ton)", "Drone (bin adet)"], rows: [["A", "16", "0"], ["B", "15", "1"], ["C", "12", "2"], ["D", "7", "3"], ["E", "0", "4"]], not: "Ardışık noktalar arasında 1 drone için vazgeçilen fındık: A→B 1, B→C 3, C→D 5, D→E 7. Artıyor: eğri bu yüzden bükük." },
        { tip: "grafik", baslik: "A'dan C'ye ve C'den A'ya", xlabel: "Drone (bin adet)", ylabel: "Fındık (bin ton)", xmax: 9, ymax: 9,
          xticks: [{ v: 2, label: "1" }, { v: 4, label: "2" }, { v: 6, label: "3" }, { v: 8, label: "4" }],
          yticks: [{ v: 2, label: "4" }, { v: 4, label: "8" }, { v: 6, label: "12" }, { v: 8, label: "16" }],
          ogeler: [
            { id: "eg", tip: "egri", renk: 0, noktalar: [[0, 8], [2, 7.5], [4, 6], [6, 3.5], [8, 0]], etiket: "PPC" },
            { id: "A", tip: "nokta", renk: 1, x: 0, y: 8, etiket: "A", gizli: true },
            { id: "B", tip: "nokta", renk: 1, x: 2, y: 7.5, etiket: "B", gizli: true },
            { id: "C", tip: "nokta", renk: 1, x: 4, y: 6, etiket: "C", gizli: true },
            { id: "D", tip: "nokta", renk: 1, x: 6, y: 3.5, etiket: "D", gizli: true },
            { id: "E", tip: "nokta", renk: 1, x: 8, y: 0, etiket: "E", gizli: true },
            { id: "ac", tip: "ok", renk: 2, from: [0.1, 8.9], to: [3.9, 6.9], gizli: true },
            { id: "act", tip: "yazi", x: 6, y: 8.4, metin: "A → C: OC = 4 bin ton fındık", gizli: true },
            { id: "ca", tip: "ok", renk: 3, from: [3.8, 5.4], to: [0.2, 7.4], gizli: true },
            { id: "cat", tip: "yazi", x: 6.4, y: 1.8, metin: "C → A: OC = 2 bin drone", gizli: true }
          ],
          durumlar: [
            { metin: "Beş nokta düzgün, dışa bükük bir eğriyle birleşir.", goster: ["A", "B", "C", "D", "E"] },
            { metin: "**A → C:** drone 0'dan 2'ye çıkıyor (+2), fındık 16'dan 12'ye iniyor (−4). Fırsat maliyeti ==4 bin ton fındık== (drone başına 2).", goster: ["ac", "act"] },
            { metin: "**C → A:** Dönüş yolunda fındık +4 kazanılır ama drone 2'den 0'a düşer. Fırsat maliyeti ==2 bin drone==.", gizle: ["ac", "act"], goster: ["ca", "cat"] },
            { metin: "İki yönün cevabı farklı birimde: yön değişince vazgeçilen mal da değişir.", goster: ["ac", "act"] }
          ] },
        { tip: "ornek", baslik: "A → C ve C → A", durum: "Ülke A noktasından C noktasına geçiyor, sonra aynı yoldan A'ya dönüyor. Her yönün fırsat maliyeti nedir?",
          adimlar: ["A → C: drone 0 → 2 (kazanılan +2); fındık 16 → 12 (vazgeçilen 4 bin ton). OC = 4 bin ton fındık; drone başına 4 ÷ 2 = 2 bin ton.", "C → A: fındık 12 → 16 (kazanılan +4); drone 2 → 0 (vazgeçilen 2 bin adet). OC = 2 bin drone.", "Birimler farklı: biri fındık, öteki drone."],
          sonuc: "A → C: ==4 bin ton fındık==. C → A: ==2 bin drone==. Maliyet hep ==vazgeçtiğin maldır==; yön değişince birim de değişir." },
        { tip: "ornek", baslik: "Sınav sorusu: D → B", durum: "Aynı tabloya göre ülke D noktasından B noktasına geçerse bu hareketin fırsat maliyeti nedir?",
          adimlar: ["Hangi mal azalıyor? Drone: 3 → 1. Fındık ise 7 → 15 artıyor (kazanılan).", "Vazgeçilen: 3 − 1 = 2 bin drone.", "Fındık artışı (+8) kazanılan şeydir, maliyet değil."],
          sonuc: "Fırsat maliyeti ==2 bin drone==. \"8 bin ton fındık\" ya da \"drone başına 4 bin ton\" cevapları, kazanılanı yazdıkları için çeldiricidir." },
        { tip: "tuzak", baslik: "Kazanılanı maliyet sanmak", metin: "D'den B'ye giderken fındık 8 bin ton artıyor; bu kazanılan şeydir, maliyet değildir.", yanlis: "Fırsat maliyeti 8 bin ton fındıktır.", dogru: "Fırsat maliyeti ==vazgeçilen== maldır: önce hangi malın azaldığına bak. Burada 2 bin drone." }
      ]
    },
    {
      baslik: "*Productive* ve *allocative efficiency*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚙️", terim: "Productive efficiency", tr: "üretim verimliliği", tanim: "Malları kaynak israfı olmadan üretmek. PPC üzerindeki ==her== nokta *productively efficient*'tır.", ornek: "A (16 fındık, 0 drone) eğrinin üstünde: kaynak israf etmiyor." },
            { ikon: "🎯", terim: "Allocative efficiency", tr: "tahsis verimliliği", tanim: "Toplumun en çok istediği mal karışımını üretmek. PPC üzerinde yalnızca ==tek bir== nokta; hangisi olduğunu toplumun tercihi belirler.", ornek: "Halk biraz drone da istiyorsa A değil, örneğin C noktası." }
          ] },
        { tip: "grafik", baslik: "Eğri üzerinde hangisi 'en iyi'?", xlabel: "Drone (bin adet)", ylabel: "Fındık (bin ton)", xmax: 9, ymax: 9,
          xticks: [{ v: 2, label: "1" }, { v: 4, label: "2" }, { v: 6, label: "3" }, { v: 8, label: "4" }],
          yticks: [{ v: 2, label: "4" }, { v: 4, label: "8" }, { v: 6, label: "12" }, { v: 8, label: "16" }],
          ogeler: [
            { id: "eg", tip: "egri", renk: 0, noktalar: [[0, 8], [2, 7.5], [4, 6], [6, 3.5], [8, 0]], etiket: "PPC" },
            { id: "A", tip: "nokta", renk: 1, x: 0, y: 8, etiket: "A", kilavuz: true, gizli: true },
            { id: "B", tip: "nokta", renk: 1, x: 2, y: 7.5, etiket: "B", gizli: true },
            { id: "C", tip: "nokta", renk: 1, x: 4, y: 6, etiket: "C", gizli: true },
            { id: "D", tip: "nokta", renk: 1, x: 6, y: 3.5, etiket: "D", gizli: true },
            { id: "E", tip: "nokta", renk: 1, x: 8, y: 0, etiket: "E", gizli: true },
            { id: "pe", tip: "yazi", x: 4.5, y: 8.6, metin: "eğrinin her noktası productively efficient", gizli: true },
            { id: "Cg", tip: "nokta", renk: 3, x: 4, y: 6, etiket: "C · halkın tercihi", kilavuz: true, gizli: true },
            { id: "ae", tip: "yazi", x: 2.2, y: 8.7, metin: "A: hiç drone yok, allocative değil", gizli: true }
          ],
          durumlar: [
            { metin: "A noktası: 16 bin ton fındık, hiç drone. Eğrinin üstünde, kaynak israf etmiyor.", goster: ["A"] },
            { metin: "Eğrinin tamamı için aynısı geçerli: B, C, D, E de aynı derecede ==*productively efficient*==.", goster: ["B", "C", "D", "E", "pe"] },
            { metin: "Halk biraz drone da istiyorsa A *allocatively efficient* değildir; toplumun en çok istediği karışım başka bir nokta (burada C).", gizle: ["pe", "A"], goster: ["Cg", "ae"] },
            { metin: "Hangisinin seçileceğini PPC söylemez; **toplumun istekleri** belirler.", set: { ae: { metin: "hangi nokta? halkın istediğine bağlı" } } }
          ] },
        { tip: "ikili", sol: { ikon: "⚙️", baslik: "*Productive efficiency*", maddeler: ["Eğri üzerindeki HER nokta", "Soru: israf var mı?", "Tercihe bakmaz"] },
          sag: { ikon: "🎯", baslik: "*Allocative efficiency*", maddeler: ["Eğri üzerinde TEK nokta", "Soru: toplum bunu mu istiyor?", "Tercihe bağlıdır"] },
          oyun: [
            { metin: "Bütün işçiler çalışıyor, hiçbir makine boşta değil.", cevap: "sol", neden: "İsraf yok: *productive efficiency*." },
            { metin: "Halkın en çok istediği fındık–drone karışımı üretiliyor.", cevap: "sag", neden: "Toplumun tercihine uygun: *allocative efficiency*." },
            { metin: "A, B, C, D ve E noktalarının hepsi.", cevap: "sol", neden: "Eğri üzerindeki her nokta eşit derecede üretken: *productive*." },
            { metin: "A noktası eğri üzerinde ama halk drone da istiyor.", cevap: "sag", neden: "Eğri üzerinde olması yetmez; tercih tutmuyor: *allocative* sağlanmadı." }
          ] },
        { tip: "tuzak", baslik: "\"En verimli nokta\" tuzağı", metin: "Sınavda \"ortadaki nokta en verimlidir\" gibi şıklar çeldiricidir.", yanlis: "Eğri üzerinde en verimli nokta ortadaki ya da en çok mal üretilen noktadır.", dogru: "Eğri üzerindeki ==bütün noktalar eşit derecede== (*productively*) verimlidir. *Allocative efficiency* için toplumun tercihi gerekir; PPC tek başına söylemez." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Opportunity cost* vazgeçilen en iyi tek seçenektir; *trade-offs* vazgeçilen bütün seçeneklerdir. *Economic cost* = cebinden çıkan + fırsat maliyeti (600 + 400 = 1000 TL).",
            "*PPC* (= *PPF*), sabit kaynak ve teknolojiyle iki maldan üretilebilecek kombinasyonları gösteren bir modeldir.",
            "Üç varsayım: iki mal, kaynaklar tam ve verimli kullanılır (*full employment*), kaynak ve teknoloji sabit.",
            "Eğrinin üstü *efficient*, içi *inefficient* (işsizlik), dışı *unattainable* (kıtlık).",
            "Fırsat maliyeti = vazgeçilen ÷ kazanılan. Birim maliyetleri birbirinin tersidir (1 bileklik = 2 kurabiye ↔ 1 kurabiye = ½ bileklik).",
            "Yön önemli: A → C (4 bin ton fındık) ile C → A (2 bin drone) farklı mallarla ifade edilir. Maliyet hep vazgeçtiğin maldır.",
            "İçerideki noktadan eğriye çıkmanın fırsat maliyeti sıfırdır.",
            "Eğri üzerindeki her nokta *productively efficient*'tır; *allocative* olan, toplumun en çok istediği tek noktadır."
          ] }
      ]
    }
  ]
};
