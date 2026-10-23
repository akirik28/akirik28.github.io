/* Kitpath not defteri · st115 · 1H-1 İyi Deneyin Dört İlkesi
   Kaynak: ap-videolar/src/episodes/st115 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st115",
  amac: "Bu konu iyi bir deneyin neden-sonuç diyebilmek için dayandığı dört ilkeyi anlatıyor: *comparison*, *random assignment*, *replication*, *direct control*. *Placebo*, *blinding* ve *completely randomized design*'ı da öğreneceksin.",
  bolumler: [
    {
      baslik: "İyi deneyin dört ilkesi",
      kisa: "Karşılaştırma, rastgele atama, yinelem ve doğrudan denetim neden-sonucu sağlar.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "1 · *Comparison*", alt: "en az iki treatment" }, "+", { t: "2 · *Random assignment*", alt: "treatment'ı şansla ata" }, "+", { t: "3 · *Replication*", alt: "her grupta çok birim" }, "+", { t: "4 · *Direct control*", alt: "diğer değişkenler sabit" }, "=", { t: "İyi deney", alt: "neden-sonuç" }], aciklama: "*Experiment*'te araştırmacı *experimental unit*'lere bilerek bir *treatment* uygular." },
        { tip: "grafik", baslik: "Ihlamur işe yaradı mı? Karşılaştıracak biri yoksa etki bilinemez", xlabel: "Gün", ylabel: "Nezle şiddeti", xmax: 7, ymax: 10, xticks: [{ v: 0, label: "1" }, { v: 3.5, label: "4" }, { v: 7, label: "7" }], yticks: [],
          ogeler: [
            { id: "tea", tip: "egri", renk: 0, etiket: "Ihlamur içen", noktalar: [[0, 9], [1, 7.8], [2, 6.2], [3, 4.6], [4, 3.2], [5, 1.8], [6, 0.8], [7, 0.2]] },
            { id: "no", tip: "egri", renk: 2, etiket: "İçmeyen", gizli: true, noktalar: [[0, 9], [1, 7.9], [2, 6.3], [3, 4.7], [4, 3.2], [5, 1.9], [6, 0.9], [7, 0.3]] },
            { id: "q", tip: "yazi", x: 3.5, y: 9.3, metin: "Ihlamur mu iyileştirdi?", gizli: true }
          ],
          durumlar: [
            { metin: "Nezle oldun, bir hafta ıhlamur içtin: nezle şiddeti gün gün düşüyor, yedinci günde iyileştin." },
            { metin: "Ama ıhlamur içmeyen ikinci bir kişi de aynı hızla iyileşiyor: nezle zaten kendiliğinden geçiyor.", goster: ["no"] },
            { metin: "Karşılaştıracak biri yoksa ==etkiyi bilemezsin==. İki eğri aynıysa ıhlamurun etkisi yok.", goster: ["q"] }
          ] }
      ]
    },
    {
      baslik: "1. İlke: *comparison* ve *control group*",
      kisa: "Comparison şarttır; control group baseline sağlar ama şart değildir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Comparison", tr: "karşılaştırma", tanim: "İyi deneyin 1. ilkesi: en az iki *treatment*'ı karşılaştıran bir tasarım kullanmak.", ornek: "Ihlamur içenler ve içmeyenler." },
            { ikon: "🪑", terim: "Control group", tr: "kontrol grubu", tanim: "İncelenen *treatment*'ı almayan (ya da *placebo* / standart tedavi alan) grup. Her deneyde olması şart değil; önemli olan karşılaştırmadır.", ornek: "Ihlamur içmeyen nezleliler." },
            { ikon: "📏", terim: "Baseline", tr: "kıyas çizgisi", tanim: "*Treatment* olmasaydı *response*'un alacağı düzey; *control group*'tan okunur.", ornek: "Kontrol grubundaki okuma puanı artışı." }
          ] },
        { tip: "grafik", baslik: "Ruanda okuma deneyi: kontrol grubu neden var?", xlabel: "Grup", ylabel: "Okuma puanındaki artış (temsili)", xmax: 6, ymax: 10, xticks: [{ v: 1, label: "Control" }, { v: 3, label: "TT" }, { v: 5, label: "TT + LB" }], yticks: [],
          ogeler: [
            { id: "bc", tip: "alan", renk: 1, noktalar: [[0.5, 0], [1.5, 0], [1.5, 0], [0.5, 0]] },
            { id: "bt", tip: "alan", renk: 0, noktalar: [[2.5, 0], [3.5, 0], [3.5, 0], [2.5, 0]] },
            { id: "bl", tip: "alan", renk: 2, noktalar: [[4.5, 0], [5.5, 0], [5.5, 0], [4.5, 0]] },
            { id: "bs", tip: "cizgi", renk: 3, kesik: true, etiket: "BASELINE", from: [0, 3], to: [6, 3], gizli: true },
            { id: "age", tip: "yazi", x: 1, y: 4, metin: "çocuklar büyüdü", gizli: true }
          ],
          durumlar: [
            { metin: "Ruanda'da 21 sektör rastgele üç gruba ayrıldı: öğretmen eğitimi (*TT*), buna ek aile desteği (*TT + LB*, *Literacy Boost*) ve hiçbiri (*Control*). Kontrol grubunda da okuma puanı artıyor: çocuklar büyüdükçe zaten daha iyi okuyor.", set: { bc: { noktalar: [[0.5, 0], [1.5, 0], [1.5, 3], [0.5, 3]] } }, goster: ["bs", "age"] },
            { metin: "Öğretmen eğitimi alan sektörlerin artışı çizginin üstüne çıkıyor.", set: { bt: { noktalar: [[2.5, 0], [3.5, 0], [3.5, 5.5], [2.5, 5.5]] } } },
            { metin: "Aile desteğiyle birlikte artış daha da büyük. Yalnızca ==baseline'ın üstündeki kısım== programın etkisi.", set: { bl: { noktalar: [[4.5, 0], [5.5, 0], [5.5, 7.5], [4.5, 7.5]] } } }
          ] },
        { tip: "ikili", ayirici: "↔",
          sol: { ikon: "⚖️", baslik: "*Comparison*", maddeler: ["ŞART", "En az iki *treatment*", "İki ilacı birbiriyle de kıyaslayabilirsin"] },
          sag: { ikon: "🪑", baslik: "*Control group*", maddeler: ["Şart değil", "Treatment almayan / placebo grup", "Baseline sağlar"] },
          oyun: [
            { metin: "Drug A ile Drug B yan yana karşılaştırılıyor, ilaçsız grup yok.", cevap: "sol", neden: "*Comparison* var; *control group* şart değil." },
            { metin: "Ihlamur içmeyen nezlelilerle ıhlamur içenler kıyaslanıyor.", cevap: "sag", neden: "İncelenen *treatment*'ı almayan grup = *control group*." },
            { metin: "Kontrol grubu olmasa bile iki ilacı karşılaştıran deney geçerli.", cevap: "sol", neden: "Önemli olan karşılaştırmadır." },
            { metin: "Grubun görevi: kıyas çizgisi (*baseline*) vermek.", cevap: "sag", neden: "*Baseline* kontrol grubundan okunur." }
          ] }
      ]
    },
    {
      baslik: "*Placebo* ve *blinding*",
      kisa: "Placebo beklentiyi ölçer; çift körlük ölçümü tarafsız tutar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💊", terim: "Placebo", tr: "etkisiz ilaç", tanim: "Etken maddesi olmayan, gerçek tedaviye benzeyen sahte tedavi (şeker hapı, tuzlu su iğnesi).", ornek: "İlaçla özdeş görünen şeker hapı." },
            { ikon: "🧠", terim: "Placebo effect", tr: "plasebo etkisi", tanim: "Deneklerin, etken maddesi olmayan bir tedaviye bile yalnızca ==beklenti== yüzünden olumlu yanıt vermesi.", ornek: "“İlaç aldım, iyileşeceğim” diye ağrının azalması." },
            { ikon: "🙈", terim: "Single-blind", tr: "tek kör", tanim: "İki taraftan (denekler ya da deneklerle ilgilenip *response*'u ölçenler) ==yalnızca biri== kimin hangi *treatment*'ı aldığını bilmiyor.", ornek: "Koşu bandı ya da diyet deneyi: denek ne yaptığını bilir, ölçen bilmeyebilir." },
            { ikon: "🕶️", terim: "Double-blind", tr: "çift kör", tanim: "Ne denekler ne de onlarla etkileşen ve *response variable*'ı ölçen kişiler kimin hangi *treatment*'ı aldığını bilir.", ornek: "AzaSite deneyinde hasta da doktor da şişedekinin ilaç mı *placebo* mu olduğunu bilmiyordu." }
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
        { tip: "ornek", baslik: "Doktorun bilmesi neden sorun?", durum: "AzaSite göz damlası, bakteriyel konjonktivite (pink-eye) karşı placebo damlayla karşılaştırıldı. Çalışma *randomized, double-blind*; 7 gün sonra iyileşenlerin yüzdesi AzaSite grubunda daha yüksek çıktı.",
          adimlar: [
            "Hasta bilirse: *placebo effect* sonuçları bozar.",
            "Doktor bilirse: farkında olmadan ilaç alan gözü daha iyileşmiş görür.",
            "İkisi de bilmezse ölçüm tarafsız kalır.",
            "Tohum, fare, makine gibi birimler zaten bilmez; araştırmacı da bilmiyorsa deney double-blind sayılır."
          ],
          sonuc: "*Double-blind*: hem hasta hem değerlendiren doktor kör. Cevapta iki tarafı da yaz: “Neither the subjects nor those measuring the response know who got which treatment.”" }
      ]
    },
    {
      baslik: "2. İlke: *random assignment*",
      kisa: "Rastgele atama grupları başta kabaca denk kılar; neden-sonuç bundan gelir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Random assignment", tr: "rastgele atama", tanim: "*Experimental unit*'leri *treatment*'lara şans yoluyla atamak. Amaç: deney başında kabaca denk gruplar.", ornek: "Zarla ya da şapkayla gruplara dağıtmak." },
            { ikon: "🧩", terim: "Extraneous variable", tr: "dış değişken", tanim: "*Explanatory variable* olmayan ama *response*'u etkileyebilecek değişken.", ornek: "Yaş, uyku, başlangıç sağlığı." }
          ] },
        { tip: "sekil", baslik: "12 hasta, 6'şarlık iki grup: başlangıç sağlığı", fig: { type: "bar", cats: ["Doktor seçti: İlaç", "Doktor seçti: Placebo", "Şans: İlaç", "Şans: Placebo"], series: [{ name: "Sağlıklı", values: [5, 1, 3, 3] }, { name: "Daha hasta", values: [1, 5, 3, 3] }], ylabel: "Kişi" } },
        { tip: "adimlar", baslik: "Doktor seçerse, şans seçerse", adimlar: [
            { baslik: "Doktor seçti", metin: "Farkında olmadan daha sağlıklı hastaları ilaç grubuna koydu: ilaç grubunda 5 sağlıklı + 1 hasta, placebo grubunda 1 sağlıklı + 5 hasta." },
            { baslik: "==*Confounding*==", metin: "Fark ilaçtan mı, baştaki sağlıktan mı geldi? Ayıramayız." },
            { baslik: "Şans seçti", metin: "Her grupta kabaca 3 sağlıklı + 3 hasta çıktı. Yaş, uyku ve bilinmeyen bütün değişkenler de kabaca (birebir değil) eşit dağılır." },
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
          ] }
      ]
    },
    {
      baslik: "*Completely randomized design*",
      kisa: "Etiketle, rastgele sırala, ata; hangi numara hangi gruba gittiğini yaz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎩", terim: "Completely randomized design", tr: "tam rastgele tasarım", tanim: "*Treatment*'ların bütün *experimental unit*'lere hiçbir kısıt olmadan, tamamen şansla atandığı tasarım. Grupların eşit olması tanım gereği şart değil.", ornek: "21 sektörü şapkadan çekerek üç gruba dağıtmak." }
          ] },
        { tip: "adimlar", baslik: "Sınavda yazacağın yöntem", adimlar: [
            { baslik: "1 · *Label* (etiketle)", metin: "Sektörleri 1'den 21'e numarala." },
            { baslik: "2 · *Randomize* (rastgele sırala)", metin: "Numaraları eş kâğıtlara yazıp şapkada karıştır; ya da hesap makinesinde randIntNoRep(1,21) ile tekrarsız rastgele sayı üret." },
            { baslik: "3 · *Assign* (ata)", metin: "Çıkan ilk 7 numara TT, sonraki 7 numara TT + LB, kalan 7 numara *Control*." }
          ] },
        { tip: "ornek", baslik: "randIntNoRep(1,21) ile atama", durum: "Ruanda'daki 21 sektör üç gruba atanacak. Hesap makinesi şu sırayı verdi: 14 3 19 8 21 6 11 | 2 17 9 13 5 20 1 | 16 7 12 4 18 10 15.",
          adimlar: [
            "İlk 7 sayı: 14, 3, 19, 8, 21, 6, 11 → TT.",
            "Sonraki 7: 2, 17, 9, 13, 5, 20, 1 → TT + LB.",
            "Kalan 7: 16, 7, 12, 4, 18, 10, 15 → *Control*.",
            "Kontrol: 7 + 7 + 7 = 21 ve 1'den 21'e her sayı bir kez geçti."
          ],
          sonuc: "Üç gruba da 7'şer sektör düştü; atama tamamen şansa bağlı." },
        { tip: "tuzak", baslik: "“Hangi numara hangi grup?” belli olsun", metin: "Kâğıtlar özdeş olmalı ve hangi numaranın hangi gruba gittiği açıkça yazılmalı.", yanlis: "“Sektörleri rastgele üç gruba ayırdım.” (yöntem yok)", dogru: "Label → randomize → assign: “ilk 7 numara TT, sonraki 7 TT + LB, kalan 7 Control.”" }
      ]
    },
    {
      baslik: "Yazı tura tuzağı",
      kisa: "Eşit grup istiyorsan yazı turadan uzak dur.",
      bloklar: [
        { tip: "sekil", baslik: "20 yazı turada yazı sayısı (yüzde olasılık; 0–2 ve 18–20 yazı ≈ %0, gösterilmedi)", fig: { type: "bar", cats: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"], series: [{ name: "Olasılık (%)", values: [0.11, 0.46, 1.48, 3.7, 7.39, 12.01, 16.02, 17.62, 16.02, 12.01, 7.39, 3.7, 1.48, 0.46, 0.11] }], ylabel: "Olasılık (%)" } },
        { tip: "ornek", baslik: "Tam 10–10 olasılığı", durum: "20 öğrenciyi kafeinli ve kafeinsiz iki gruba ayıracaksın; yazı tura atarak gruplara ayrılıyorlar. Tam 10 yazı gelme olasılığı nedir?",
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
          ] }
      ]
    },
    {
      baslik: "3. İlke: *replication*",
      kisa: "Her grupta yeterince çok birim kullan; şansın payı küçülsün.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👥", terim: "Replication", tr: "yinelem (birim sayısı)", tanim: "Her *treatment* grubunda yeterince çok *experimental unit* kullanmak; deneyi baştan tekrarlamak değildir.", ornek: "Ruanda'da 21 sektör, 3 grup: grup başına 7 sektör." }
          ] },
        { tip: "ikili",
          sol: { ikon: "1️⃣", baslik: "Grup başına 1 birim", maddeler: ["Tek sektör: fark programdan mı, sektörden mi?", "Sonuç her seferinde başka çıkar", "Şansın payı büyük"] },
          sag: { ikon: "7️⃣", baslik: "Grup başına 7 birim", maddeler: ["Şans dengelenir", "Grup ortalamaları sabitlenir", "Fark net görünür"] },
          oyun: [
            { metin: "Her grupta yalnızca bir sektör olsaydı, sonucun nedeni belirsiz kalırdı.", cevap: "sol", neden: "Program mı, sektörün kendi özelliği mi?" },
            { metin: "Yedişer sektörle şansın payı küçülür.", cevap: "sag", neden: "Çok birim şansı dengeler." },
            { metin: "Okuma puanları her seferinde başka çıkıyor.", cevap: "sol", neden: "Tek birimde rastlantısal oynama büyük." },
            { metin: "Grup ortalamaları belirgin biçimde ayrışıyor.", cevap: "sag", neden: "Yeterince çok birim." }
          ] }
      ]
    },
    {
      baslik: "4. İlke: *direct control*",
      kisa: "Bildiğin dış değişkenleri herkes için sabit tut.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔒", terim: "Direct control", tr: "doğrudan denetim", tanim: "*Treatment* dışındaki değişkenleri bütün *experimental unit*'ler için aynı tutmak.", ornek: "Herkes ilacı günde iki kez, yağlı yiyecekle alır." }
          ] },
        { tip: "tablo", baslik: "Trikafta deneyi: 403 hasta, rastgele iki grup. Herkes için aynı tutulanlar", head: ["Ne sabit?", "Trikafta grubu", "Placebo grubu"], rows: [
            ["Doz", "Aynı doz", "Aynı doz (plasebo)"],
            ["Süre", "24 hafta", "24 hafta"],
            ["Sıklık", "Günde iki kez", "Günde iki kez"],
            ["Yiyecek", "Yağlı yiyecekle", "Yağlı yiyecekle"],
            ["Diğer kistik fibrozis tedavileri", "Sürdürüldü", "Sürdürüldü"]
          ], not: "Tek fark: Trikafta mı, placebo mı." },
        { tip: "adimlar", baslik: "Direct control'ün iki faydası (ikisini de yaz)", adimlar: [
            { baslik: "1 · *Confounding*'i önler", metin: "Ya bir grup ilacı aç karnına alsaydı? Fark ilaçtan mı yiyecekten mi bilemezdik." },
            { baslik: "2 · Değişkenliği azaltır", metin: "Sonuçlardaki dalgalanma azalır; ilacın etkisi netleşir (*less variability in the response*)." }
          ] },
        { tip: "ikili", ayirici: "vs",
          sol: { ikon: "🔒", baslik: "*Direct control*", maddeler: ["Bildiğin değişkenleri SABİT tut", "Herkese aynı doz, aynı saat", "Araştırmacı kontrol eder"] },
          sag: { ikon: "🎲", baslik: "*Random assignment*", maddeler: ["Bilinmeyen değişkenleri DENGELER", "Gruplar kabaca denk", "Şans kontrol eder"] },
          oyun: [
            { metin: "Herkes ilacı yağlı yiyecekle alıyor.", cevap: "sol", neden: "Bilinen değişken sabit tutulmuş." },
            { metin: "Hastalar zarla gruplara dağıtılıyor.", cevap: "sag", neden: "Bilinmeyenleri de dengeleyen rastgele atama." },
            { metin: "Herkesin dozu aynı ve süresi 24 hafta.", cevap: "sol", neden: "Doz ve süre sabit." },
            { metin: "Yaş ve başlangıç sağlığı gibi bilinmeyen değişkenler kabaca eşit dağılıyor.", cevap: "sag", neden: "Rastgele atamanın işi." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
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
