/* Kitora not defteri · st115 · 1H-1 İyi Deneyin Dört İlkesi
   Kaynak: ap-videolar/src/episodes/st115 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st115",
  ozet: "İyi bir deney neden-sonuç diyebilmek için dört ilkeye dayanır: ==*comparison*==, ==*random assignment*==, ==*replication*== ve ==*direct control*==. Bu defterde *control group* ile *baseline*'ı, *placebo effect* ve *single-/double-blind* farkını, rastgele atamanın neden gruplar arasında başlangıçta denklik kurduğunu, *completely randomized design*'ı adım adım anlatmayı (21 sektör), yazı tura tuzağını ve Trikafta deneyini göreceksin.",
  bolumler: [
    {
      baslik: "Ihlamur işe yaradı mı?",
      bloklar: [
        { tip: "hikaye", ikon: "🍵", baslik: "Nezle bir haftada geçer",
          metin: "Nezle oldun. Annen bir hafta sana ıhlamur içirdi ve iyileştin. Ihlamur işe yaradı mı? Dur: nezle zaten bir haftada kendiliğinden geçer. İçmeseydin ne olacağını bilmeden ıhlamurun etkisini bilemezsin. İyi bir deney tam bu soruyu çözer; bunun dört ilkesi var." },
        { tip: "grafik", baslik: "Karşılaştıracak biri yoksa etki bilinemez", xlabel: "Gün", ylabel: "Nezle şiddeti", xmax: 7, ymax: 10, xticks: [{ v: 0, label: "1" }, { v: 3.5, label: "4" }, { v: 7, label: "7" }], yticks: [],
          ogeler: [
            { id: "tea", tip: "egri", renk: 0, etiket: "Ihlamur içen", noktalar: [[0, 9], [1, 7.8], [2, 6.2], [3, 4.6], [4, 3.2], [5, 1.8], [6, 0.8], [7, 0.2]] },
            { id: "no", tip: "egri", renk: 2, etiket: "İçmeyen", gizli: true, noktalar: [[0, 9], [1, 7.9], [2, 6.3], [3, 4.7], [4, 3.2], [5, 1.9], [6, 0.9], [7, 0.3]] },
            { id: "q", tip: "yazi", x: 3.5, y: 9.3, metin: "Ihlamur mu iyileştirdi?", gizli: true }
          ],
          durumlar: [
            { metin: "Bir hafta ıhlamur içtin: nezle şiddeti gün gün düşüyor, yedinci günde iyileştin." },
            { metin: "Ama ıhlamur içmeyen ikinci bir kişi de aynı hızla iyileşiyor: nezle zaten kendiliğinden geçiyor.", goster: ["no"] },
            { metin: "Karşılaştıracak biri yoksa ==etkiyi bilemezsin==. İki eğri aynıysa ıhlamurun etkisi yok.", goster: ["q"] }
          ] },
        { tip: "formul", parcalar: [{ t: "1 · *Comparison*", alt: "en az iki treatment" }, "+", { t: "2 · *Random assignment*", alt: "treatment'ı şansla ata" }, "+", { t: "3 · *Replication*", alt: "her grupta çok birim" }, "+", { t: "4 · *Direct control*", alt: "diğer değişkenler sabit" }, "=", { t: "İyi deney", alt: "neden-sonuç" }], aciklama: "Önceki bölümden hatırla: *experiment*'te araştırmacı *experimental unit*'lere bilerek bir *treatment* uygular." }
      ]
    },
    {
      baslik: "1. İlke: *comparison* ve *control group*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Comparison", tr: "karşılaştırma", tanim: "İyi deneyin 1. ilkesi: en az iki *treatment*'ı karşılaştıran bir tasarım kullanmak.", ornek: "Ihlamur içenler ve içmeyenler." },
            { ikon: "🪑", terim: "Control group", tr: "kontrol grubu", tanim: "İncelenen *treatment*'ı almayan (ya da *placebo* / standart tedavi alan) grup.", ornek: "Ihlamur içmeyen nezleliler." },
            { ikon: "📏", terim: "Baseline", tr: "kıyas çizgisi", tanim: "*Treatment* olmasaydı *response*'un alacağı düzey; *control group*'tan okunur.", ornek: "Kontrol grubundaki okuma puanı artışı." }
          ] },
        { tip: "hikaye", ikon: "📚", baslik: "Ruanda okuma-yazma deneyi", metin: "Ruanda, çocukların okuma yazmasını geliştirmek istiyor. Bir bölgedeki **21 sektör** rastgele üç gruba ayrılıyor: birine **öğretmen eğitimi** (*TT*), birine buna ek olarak **aile ve çevre desteği** (*TT + LB*, *Literacy Boost*), üçüncüsüne **hiçbiri** (*Control*)." },
        { tip: "tablo", baslik: "21 sektör, üç grup", head: ["Grup", "Ne uygulanır?", "Sektör sayısı"], rows: [
            ["TT", "Öğretmen eğitimi", "7"],
            ["TT + LB", "Öğretmen eğitimi + aile desteği (*Literacy Boost*)", "7"],
            ["*Control*", "Hiçbiri", "7"]
          ], not: "21 ÷ 3 = 7 sektör her grupta." },
        { tip: "grafik", baslik: "Kontrol grubu neden var?", xlabel: "Grup", ylabel: "Okuma puanındaki artış (temsili)", xmax: 6, ymax: 10, xticks: [{ v: 1, label: "Control" }, { v: 3, label: "TT" }, { v: 5, label: "TT + LB" }], yticks: [],
          ogeler: [
            { id: "bc", tip: "alan", renk: 1, noktalar: [[0.5, 0], [1.5, 0], [1.5, 0], [0.5, 0]] },
            { id: "bt", tip: "alan", renk: 0, noktalar: [[2.5, 0], [3.5, 0], [3.5, 0], [2.5, 0]] },
            { id: "bl", tip: "alan", renk: 2, noktalar: [[4.5, 0], [5.5, 0], [5.5, 0], [4.5, 0]] },
            { id: "bs", tip: "cizgi", renk: 3, kesik: true, etiket: "BASELINE", from: [0, 3], to: [6, 3], gizli: true },
            { id: "age", tip: "yazi", x: 1, y: 4, metin: "çocuklar büyüdü", gizli: true }
          ],
          durumlar: [
            { metin: "Kontrol grubunda da okuma puanı artıyor: çocuklar büyüdükçe zaten daha iyi okuyor.", set: { bc: { noktalar: [[0.5, 0], [1.5, 0], [1.5, 3], [0.5, 3]] } }, goster: ["bs", "age"] },
            { metin: "Öğretmen eğitimi alan sektörlerin artışı çizginin üstüne çıkıyor.", set: { bt: { noktalar: [[2.5, 0], [3.5, 0], [3.5, 5.5], [2.5, 5.5]] } } },
            { metin: "Aile desteğiyle birlikte artış daha da büyük. Yalnızca ==baseline'ın üstündeki kısım== programın etkisi.", set: { bl: { noktalar: [[4.5, 0], [5.5, 0], [5.5, 7.5], [4.5, 7.5]] } } }
          ] },
        { tip: "not", metin: "Ekrana yazılan cümle: “The control group provides a baseline for comparing the effects of the treatments.” *Control group* olmasa çocukların doğal gelişimini programın etkisi sanırdık." },
        { tip: "ikili", ayirici: "↔",
          sol: { ikon: "⚖️", baslik: "*Comparison*", maddeler: ["ŞART", "En az iki *treatment*", "İki ilacı birbiriyle de kıyaslayabilirsin"] },
          sag: { ikon: "🪑", baslik: "*Control group*", maddeler: ["Şart değil", "Treatment almayan / placebo grup", "Baseline sağlar"] },
          oyun: [
            { metin: "Drug A ile Drug B yan yana karşılaştırılıyor, hiçbirine ilaçsız grup yok.", cevap: "sol", neden: "*Comparison* var; *control group* şart değil." },
            { metin: "Ihlamur içmeyen nezlelilerle ıhlamur içenler kıyaslanıyor.", cevap: "sag", neden: "İncelenen *treatment*'ı almayan grup = *control group*." },
            { metin: "Kontrol grubu olmasa bile iki ilacı karşılaştıran deney geçerli.", cevap: "sol", neden: "Önemli olan karşılaştırmadır." },
            { metin: "Grubun görevi: kıyas çizgisi (*baseline*) vermek.", cevap: "sag", neden: "*Baseline* kontrol grubundan okunur." }
          ] },
        { tip: "tuzak", baslik: "Control group şart değil, comparison şart", metin: "“Not all experiments include a control group as long as comparison takes place.”", yanlis: "“Control group olmayan deney, deney sayılmaz.”", dogru: "Önemli olan en az iki *treatment*'ın karşılaştırılması; *control group* varsa görevi *baseline* sağlamaktır." }
      ]
    },
    {
      baslik: "*Placebo* ve *blinding*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💊", terim: "Placebo", tr: "etkisiz ilaç", tanim: "Etken maddesi olmayan, gerçek tedaviye benzeyen sahte tedavi (şeker hapı, tuzlu su iğnesi).", ornek: "İlaçla özdeş görünen şeker hapı." },
            { ikon: "🧠", terim: "Placebo effect", tr: "plasebo etkisi", tanim: "Deneklerin, etken maddesi olmayan bir tedaviye bile yalnızca ==beklenti== yüzünden olumlu yanıt vermesi.", ornek: "“İlaç aldım, iyileşeceğim” diye ağrının azalması." }
          ] },
        { tip: "grafik", baslik: "Gerçek ilaç etkisi = ilaç − placebo", xlabel: "Grup", ylabel: "İyileşme (temsili)", xmax: 4, ymax: 10, xticks: [{ v: 1, label: "Placebo" }, { v: 3, label: "İlaç" }], yticks: [],
          ogeler: [
            { id: "pl", tip: "alan", renk: 1, noktalar: [[0.5, 0], [1.5, 0], [1.5, 0], [0.5, 0]] },
            { id: "dr1", tip: "alan", renk: 1, noktalar: [[2.5, 0], [3.5, 0], [3.5, 0], [2.5, 0]] },
            { id: "dr2", tip: "alan", renk: 0, noktalar: [[2.5, 4], [3.5, 4], [3.5, 4], [2.5, 4]], gizli: true },
            { id: "t1", tip: "yazi", x: 1, y: 4.7, metin: "beklenti", gizli: true },
            { id: "t2", tip: "yazi", x: 3, y: 2, metin: "beklenti", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 6.6, metin: "gerçek ilaç etkisi", gizli: true }
          ],
          durumlar: [
            { metin: "Placebo alanlar bile bir miktar iyileşir: bu iyileşmeyi ilaç değil ==beklenti== getirir.", set: { pl: { noktalar: [[0.5, 0], [1.5, 0], [1.5, 4], [0.5, 4]] } }, goster: ["t1"] },
            { metin: "Gerçek ilaç alan grup daha yukarıda. Altındaki gri kısım yine beklenti.", set: { dr1: { noktalar: [[2.5, 0], [3.5, 0], [3.5, 4], [2.5, 4]] } }, goster: ["t2"] },
            { metin: "Aradaki fark, yani ==yalnızca üst dilim== gerçek ilacın etkisi. Bu yüzden *control group*'a çoğu zaman *placebo* verilir.", set: { dr2: { noktalar: [[2.5, 4], [3.5, 4], [3.5, 7], [2.5, 7]] } }, goster: ["dr2", "t3"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🙈", terim: "Single-blind", tr: "tek kör", tanim: "İki taraftan (denekler ya da deneklerle ilgilenip *response*'u ölçenler) ==yalnızca biri== kimin hangi *treatment*'ı aldığını bilmiyor.", ornek: "Koşu bandı ya da diyet deneyi: denek ne yaptığını bilir, ölçen bilmeyebilir." },
            { ikon: "🕶️", terim: "Double-blind", tr: "çift kör", tanim: "Ne denekler ne de onlarla etkileşen ve *response variable*'ı ölçen kişiler kimin hangi *treatment*'ı aldığını bilir.", ornek: "AzaSite göz damlası deneyi: hasta da doktor da şişedekinin ilaç mı *placebo* mu olduğunu bilmiyordu." }
          ] },
        { tip: "ikili",
          sol: { ikon: "🙈", baslik: "*Single-blind*", maddeler: ["İki taraftan yalnızca biri bilmiyor", "Denek bilir, ölçen bilmez (ya da tersi)", "Spor–diyet gibi durumlarda yaygın"] },
          sag: { ikon: "🕶️", baslik: "*Double-blind*", maddeler: ["İki taraf da bilmiyor", "Denek de ölçen de kördür", "Kimin ne aldığını yalnızca istatistikçi bilir"] },
          oyun: [
            { metin: "Hasta ilacın placebo mu gerçek mi olduğunu bilmiyor ama doktor biliyor.", cevap: "sol", neden: "Yalnızca bir taraf kör." },
            { metin: "Ne hasta ne de gözü değerlendiren doktor şişede ne olduğunu biliyor.", cevap: "sag", neden: "İki taraf da kör." },
            { metin: "Spor mu diyet mi deneyinde denek ne yaptığını bilir, ölçen bilmez.", cevap: "sol", neden: "Denek kör olamaz; ölçen kör: single-blind." },
            { metin: "Tohumlar ve fareler zaten bilmez; araştırmacı da bilmiyor.", cevap: "sag", neden: "Deneyde kör olması gereken herkes kör." }
          ] },
        { tip: "ornek", baslik: "Doktorun bilmesi neden sorun?", durum: "AzaSite göz damlası, bakteriyel konjonktivite (pink-eye) karşı placebo damlayla karşılaştırıldı. Çalışma *randomized, double-blind*; 7 gün sonra iyileşenlerin yüzdesi AzaSite grubunda daha yüksek çıktı.",
          adimlar: [
            "Hasta bilirse: *placebo effect* sonuçları bozar.",
            "Doktor bilirse: farkında olmadan ilaç alan gözü daha iyileşmiş görür.",
            "İkisi de bilmezse ölçüm tarafsız kalır.",
            "Tohum, fare, makine gibi birimler zaten bilmez (*blind by default*); araştırmacı da bilmiyorsa deney double-blind sayılır."
          ],
          sonuc: "*Double-blind*: hem hasta hem değerlendiren doktor kör." },
        { tip: "tuzak", baslik: "Double-blind tanımının iki tarafı", metin: "Double-blind'da iki tarafı da yaz: denekler ve onlarla etkileşen / response'u ölçenler. İstatistikçi ise kimin ne aldığını bilir.", yanlis: "“Araştırmacılar hiçbir şey bilmiyor, bu yüzden double-blind.”", dogru: "“Neither the subjects nor those measuring the response know who got which treatment.”" }
      ]
    },
    {
      baslik: "2. İlke: *random assignment*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Random assignment", tr: "rastgele atama", tanim: "*Experimental unit*'leri *treatment*'lara şans yoluyla atamak. Amaç: deney başında kabaca denk gruplar.", ornek: "Zarla ya da şapkayla gruplara dağıtmak." },
            { ikon: "🧩", terim: "Extraneous variable", tr: "dış değişken", tanim: "*Explanatory variable* olmayan ama *response*'u etkileyebilecek değişken.", ornek: "Yaş, uyku, başlangıç sağlığı." }
          ] },
        { tip: "sekil", baslik: "12 hasta, 6'şarlık iki grup: başlangıç sağlığı", fig: { type: "bar", cats: ["Doktor seçti: İlaç", "Doktor seçti: Placebo", "Şans: İlaç", "Şans: Placebo"], series: [{ name: "Sağlıklı", values: [5, 1, 3, 3] }, { name: "Daha hasta", values: [1, 5, 3, 3] }], ylabel: "Kişi" } },
        { tip: "adimlar", baslik: "Doktor seçerse, şans seçerse", adimlar: [
            { baslik: "Doktor seçti", metin: "Farkında olmadan daha sağlıklı hastaları ilaç grubuna koydu: ilaç grubunda 5 sağlıklı + 1 hasta, placebo grubunda 1 sağlıklı + 5 hasta." },
            { baslik: "==*Confounding*==", metin: "Fark ilaçtan mı, baştaki sağlıktan mı geldi? Ayıramayız." },
            { baslik: "Şans seçti", metin: "Zar atılınca her grupta kabaca 3 sağlıklı + 3 hasta çıktı. Yaş, uyku ve bilinmeyen bütün değişkenler de kabaca eşit dağılır." },
            { baslik: "Sonuç", metin: "Tek sistemli fark *treatment* olunca ==*cause-and-effect*== denebilir: “Random assignment creates roughly equivalent groups at the beginning of the experiment.”" }
          ] },
        { tip: "ikili", ayirici: "↔",
          sol: { ikon: "🔗", baslik: "*Random assignment*", maddeler: ["Treatment'ları şansla ATAMAK", "Amaç: başlangıçta denk gruplar", "Neden-sonuç için anahtar"] },
          sag: { ikon: "🎯", baslik: "*Random selection*", maddeler: ["Popülasyondan şansla SEÇMEK", "Amaç: popülasyona genelleme", "Başka bölümde (sonuç kapsamı)"] },
          oyun: [
            { metin: "60 gönüllü rastgele iki gruba ayrılıyor: yeni uyku ilacı ve placebo.", cevap: "sol", neden: "Treatment'lar şansla atanıyor." },
            { metin: "Okulun öğrenci listesinden zarla 150 kişi seçiliyor.", cevap: "sag", neden: "Popülasyondan örneklem seçimi." },
            { metin: "Amaç: deney başında kabaca denk iki grup oluşturmak.", cevap: "sol", neden: "Rastgele atamanın amacı." },
            { metin: "Amaç: sonucu bütün yetişkinlere genelleyebilmek.", cevap: "sag", neden: "Genelleme rastgele seçimin işidir." }
          ] },
        { tip: "tuzak", baslik: "Atamayı seçimle karıştırma", metin: "Mini sınavdaki 60 gönüllülük uyku ilacı deneyinde rastgele atamanın amacı kabaca denk iki grup oluşturmaktır.", yanlis: "“Random assignment sonuçları bütün yetişkinlere genelleyebilmek için yapılır.”", dogru: "“Random assignment creates roughly equivalent groups at the beginning.” Genelleme random selection'ın işi." },
        { tip: "tuzak", baslik: "Birebir değil, kabaca denk", metin: "Rastgele atama grupları birebir eşitlemez.", yanlis: "“İki grup birebir aynı olur.”", dogru: "Bilinen ve bilinmeyen bütün *extraneous variable*'ları kabaca dengeler." }
      ]
    },
    {
      baslik: "*Completely randomized design*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎩", terim: "Completely randomized design", tr: "tam rastgele tasarım", tanim: "*Treatment*'ların bütün *experimental unit*'lere hiçbir kısıt olmadan, tamamen şansla atandığı tasarım. Grupların eşit olması tanım gereği şart değil.", ornek: "21 sektörü şapkadan çekerek üç gruba dağıtmak." }
          ] },
        { tip: "adimlar", baslik: "Sınavda yazacağın yöntem", adimlar: [
            { baslik: "1 · *Label* (etiketle)", metin: "Sektörleri 1'den 21'e numarala." },
            { baslik: "2 · *Randomize* (rastgele sırala)", metin: "Numaraları eş kâğıtlara yazıp şapkada karıştır; ya da hesap makinesinde randIntNoRep(1,21) ile tekrarsız rastgele sayı üret." },
            { baslik: "3 · *Assign* (ata)", metin: "Çıkan ilk 7 numara TT, sonraki 7 numara TT + LB, kalan 7 numara *Control*." }
          ] },
        { tip: "ornek", baslik: "randIntNoRep(1,21) ile atama", durum: "Hesap makinesi şu sırayı verdi: 14 3 19 8 21 6 11 | 2 17 9 13 5 20 1 | 16 7 12 4 18 10 15.",
          adimlar: [
            "İlk 7 sayı: 14, 3, 19, 8, 21, 6, 11 → TT.",
            "Sonraki 7: 2, 17, 9, 13, 5, 20, 1 → TT + LB.",
            "Kalan 7: 16, 7, 12, 4, 18, 10, 15 → *Control*.",
            "Kontrol: 7 + 7 + 7 = 21 ve 1'den 21'e her sayı bir kez geçti."
          ],
          sonuc: "Üç gruba da 7'şer sektör düştü; atama tamamen şansa bağlı." },
        { tip: "tablo", baslik: "Atama sonucu", head: ["Grup", "Sektör numaraları"], rows: [
            ["TT", "14, 3, 19, 8, 21, 6, 11"],
            ["TT + LB", "2, 17, 9, 13, 5, 20, 1"],
            ["*Control*", "16, 7, 12, 4, 18, 10, 15"]
          ] },
        { tip: "tuzak", baslik: "“Hangi numara hangi grup?” belli olsun", metin: "Kâğıtlar özdeş olmalı ve hangi numaranın hangi gruba gittiği açıkça yazılmalı.", yanlis: "“Sektörleri rastgele üç gruba ayırdım.” (yöntem yok)", dogru: "Label → randomize → assign: “ilk 7 numara TT, sonraki 7 TT + LB, kalan 7 Control.”" }
      ]
    },
    {
      baslik: "Yazı tura tuzağı",
      bloklar: [
        { tip: "hikaye", ikon: "🪙", baslik: "20 öğrenci, kafein deneyi", metin: "20 öğrenciyi iki gruba ayıracaksın: kafeinli ve kafeinsiz. Eşit gruplar (10 ve 10) istiyorsan yazı tura atmak akla yatkın görünür. Ama bu bir AP Exam Tip: ==eşit grup istiyorsan yazı turadan uzak dur.==" },
        { tip: "sekil", baslik: "20 yazı turada yazı sayısı (yüzde olasılık; 0–2 ve 18–20 yazı ≈ %0, gösterilmedi)", fig: { type: "bar", cats: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"], series: [{ name: "Olasılık (%)", values: [0.11, 0.46, 1.48, 3.7, 7.39, 12.01, 16.02, 17.62, 16.02, 12.01, 7.39, 3.7, 1.48, 0.46, 0.11] }], ylabel: "Olasılık (%)" } },
        { tip: "ornek", baslik: "Tam 10–10 olasılığı", durum: "20 öğrenci yazı tura atarak gruplara ayrılıyor. Tam 10 yazı gelme olasılığı nedir?",
          adimlar: [
            "Tam 10 yazı gelen atış dizisi sayısı: C(20,10) = 184 756.",
            "Tüm olası diziler: 2²⁰ = 1 048 576.",
            "Olasılık: 184 756 ÷ 1 048 576 ≈ 0.1762, yani yaklaşık %18.",
            "Örneğin 12'ye 8 gibi eşit olmayan bölünmeler çok daha olası."
          ],
          sonuc: "Tam 10–10 bölünme olasılığı yalnızca yaklaşık %18." },
        { tip: "ikili",
          sol: { ikon: "🪙", baslik: "Yazı tura / zorlamalı doldurma", maddeler: ["Gruplar eşit çıkmaz (%18)", "Bir grup dolunca kalanlar öbürüne yazılırsa sondakilere şans kalmaz", "Rastgeleliği bozar"] },
          sag: { ikon: "🎩", baslik: "Şapka / randIntNoRep", maddeler: ["Hem rastgele", "Hem grupları eşitler", "İlk 10 numara kafein, kalan 10 numara kafeinsiz"] },
          oyun: [
            { metin: "20 öğrenci tek tek yazı tura atıp gruplara ayrılıyor.", cevap: "sol", neden: "Gruplar büyük olasılıkla eşit çıkmaz." },
            { metin: "20 eş kâğıt şapkadan çekiliyor; ilk 10 numara kafeinli grup.", cevap: "sag", neden: "Hem rastgele hem de 10'a 10." },
            { metin: "Kafeinli grup 10'a ulaşınca kalan öğrencilerin hepsi öbür gruba yazılıyor.", cevap: "sol", neden: "Sondaki öğrencilere şans tanımıyor." },
            { metin: "randIntNoRep(1,20) ile ilk 10 sayı kafeinli grup.", cevap: "sag", neden: "Tekrarsız, rastgele ve eşit." }
          ] },
        { tip: "tuzak", baslik: "Eşit grup için yazı tura", metin: "Her öğrenci birer kez yazı tura atarsa bu yine completely randomized'dır, ama gruplar büyük olasılıkla eşit çıkmaz.", yanlis: "“Eşit gruplar için yazı tura attım.”", dogru: "Eşit grup istiyorsan şapka / randIntNoRep: “ilk 10 numara kafein, kalan 10 numara kafeinsiz.”" }
      ]
    },
    {
      baslik: "3. İlke: *replication*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👥", terim: "Replication", tr: "yinelem (birim sayısı)", tanim: "Her *treatment* grubunda yeterince çok *experimental unit* kullanmak.", ornek: "Ruanda'da grup başına 7 sektör." }
          ] },
        { tip: "ikili",
          sol: { ikon: "1️⃣", baslik: "Grup başına 1 birim", maddeler: ["Tek sektör: fark programdan mı, sektörden mi?", "Sonuç her seferinde başka çıkar", "Şansın payı büyük"] },
          sag: { ikon: "7️⃣", baslik: "Grup başına 7 birim", maddeler: ["Şans dengelenir", "Grup ortalamaları sabitlenir", "Fark net görünür"] },
          oyun: [
            { metin: "Her grupta yalnızca bir sektör olsaydı, sonucun nedeni belirsiz kalırdı.", cevap: "sol", neden: "Program mı, sektörün kendi özelliği mi?" },
            { metin: "Yedişer sektörle şansın payı küçülür.", cevap: "sag", neden: "Çok birim şansı dengeler." },
            { metin: "Okuma puanları her seferinde başka çıkıyor.", cevap: "sol", neden: "Tek birimde rastlantısal oynama büyük." },
            { metin: "Grup ortalamaları çizgilerle belirgin biçimde ayrışıyor.", cevap: "sag", neden: "Yeterince çok birim." }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 21, etiket: "sektör" },
            { deger: 3, etiket: "grup" },
            { deger: 7, etiket: "sektör / grup (replication)" }
          ] },
        { tip: "tuzak", baslik: "İstatistikte replication", metin: "Caution: İstatistikte *replication* = “use enough experimental units”.", yanlis: "“Replication, deneyi baştan tekrarlamaktır.”", dogru: "Tek deneyde her grupta yeterince çok *experimental unit* kullanmak demektir." }
      ]
    },
    {
      baslik: "4. İlke: *direct control*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔒", terim: "Direct control", tr: "doğrudan denetim", tanim: "*Treatment* dışındaki değişkenleri bütün *experimental unit*'ler için aynı tutmak.", ornek: "Herkes ilacı günde iki kez, yağlı yiyecekle alır." }
          ] },
        { tip: "hikaye", ikon: "🫁", baslik: "Kistik fibrozis ve Trikafta", metin: "**403 hasta** rastgele iki gruba ayrıldı: **24 hafta** boyunca günde 375 mg **Trikafta** ya da 375 mg **placebo**. Ama herkes ilacını günde **iki kez**, **yağlı yiyecekle** aldı ve **diğer kistik fibrozis tedavilerini sürdürdü**." },
        { tip: "tablo", baslik: "Herkes için aynı tutulanlar", head: ["Ne sabit?", "Trikafta grubu", "Placebo grubu"], rows: [
            ["Doz", "375 mg", "375 mg"],
            ["Süre", "24 hafta", "24 hafta"],
            ["Sıklık", "Günde iki kez", "Günde iki kez"],
            ["Yiyecek", "Yağlı yiyecekle", "Yağlı yiyecekle"],
            ["Diğer tedaviler", "Sürdürüldü", "Sürdürüldü"]
          ], not: "Tek fark: Trikafta mı, placebo mu." },
        { tip: "adimlar", baslik: "Direct control'ün iki faydası", adimlar: [
            { baslik: "1 · *Confounding*'i önler", metin: "Ya bir grup ilacı aç karnına alsaydı? Fark ilaçtan mı yiyecekten mi bilemezdik." },
            { baslik: "2 · Değişkenliği azaltır", metin: "Sonuçlardaki dalgalanma azalır; ilacın etkisi netleşir (*less variability in the response*)." }
          ] },
        { tip: "ikili", ayirici: "vs",
          sol: { ikon: "🔒", baslik: "*Direct control*", maddeler: ["Bildiğin değişkenleri SABİT tut", "Herkese aynı doz, aynı saat", "Araştırmacı kontrol eder"] },
          sag: { ikon: "🎲", baslik: "*Random assignment*", maddeler: ["Bilinmeyen değişkenleri DENGELER", "Gruplar kabaca denk", "Şans kontrol eder"] },
          oyun: [
            { metin: "Herkes ilacı yağlı yiyecekle alıyor.", cevap: "sol", neden: "Bilinen değişken sabit tutulmuş." },
            { metin: "Hastalar zarla gruplara dağıtılıyor.", cevap: "sag", neden: "Bilinmeyenleri de dengeleyen rastgele atama." },
            { metin: "Herkesin dozu 375 mg ve süresi 24 hafta.", cevap: "sol", neden: "Doz ve süre sabit." },
            { metin: "Bilinmeyen değişkenler, yaş ve başlangıç sağlığı kabaca eşit dağılıyor.", cevap: "sag", neden: "Rastgele atamanın işi." }
          ] },
        { tip: "tuzak", baslik: "İki faydayı da yaz", metin: "*Direct control* sorulduğunda iki faydayı da yaz.", yanlis: "“Direct control sonuçları daha güzel gösterir.”", dogru: "“It prevents confounding and reduces variability in the response, so the effect is easier to see.”" }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ornek", baslik: "Mini sınav: yeni uyku ilacı", durum: "Bir araştırmacı 60 gönüllüyü rastgele iki gruba ayırıyor: biri yeni bir uyku ilacı, diğeri *placebo* alıyor. Burada *random assignment*'ın amacı nedir?",
          adimlar: [
            "Rastgele atama treatment'ları şansla dağıtır.",
            "Amaç: deney başında kabaca denk iki grup (30'a 30) oluşturmak.",
            "A şıkkı (bütün yetişkinlere genelleme) rastgele seçimin işi; C (*placebo effect*'i ortadan kaldırmak) kör çalışmanın ve placebo'nun işi; D (yeterince çok gönüllü) *replication*."
          ],
          sonuc: "Deney başında kabaca denk iki grup oluşturmak." },
        { tip: "ozet", maddeler: [
            "*Comparison*: en az iki *treatment*; *control group* şart değil ama *baseline* sağlar (Ruanda: çocuklar büyüdükçe zaten daha iyi okur).",
            "*Placebo effect* beklentiden gelir; çözüm: *placebo* + *double-blind* (hasta da ölçen de kör).",
            "*Random assignment*: şans treatment'ı atar; gruplar başta kabaca denk, bu yüzden neden-sonuç denebilir (random selection ile karıştırma).",
            "*Completely randomized design*: etiketle → rastgele sırala (şapka ya da randIntNoRep(1,21)) → ata: ilk 7 TT, sonraki 7 TT + LB, kalan 7 *Control*.",
            "Eşit grup istiyorsan yazı tura atma: tam 10–10 olasılığı yalnızca ≈ %18 (184 756 ÷ 1 048 576).",
            "*Replication*: her grupta yeterince çok birim (21 ÷ 3 = 7); deneyi baştan tekrarlamak değil.",
            "*Direct control*: diğer değişkenleri herkes için sabit tut (Trikafta: 403 hasta, 24 hafta, günde iki kez, yağlı yiyecek); *confounding*'i önler, değişkenliği azaltır.",
            "Dört ilke: comparison, random assignment, replication, direct control."
          ] }
      ]
    }
  ]
};
