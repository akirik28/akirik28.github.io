/* Kitora not defteri · st111 · 1F-1 Deney mi, Gözlem mi?
   Kaynak: ap-videolar/src/episodes/st111 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st111",
  ozet: "Bir şeyin başka bir şeye ==sebep olduğunu== nasıl anlarız? İki çalışma türü var: araştırmacının *treatment* uyguladığı *experiment* ve yalnızca gözlediği *observational study*. Bu defterde *explanatory* ve *response variable*'ı, *factor*, *level* ve *treatment* sayısını, *confounding variable*'ı iki bağlantıyla yazmayı ve neden-sonuç diyebilmenin tek koşulunu göreceksin.",
  bolumler: [
    {
      baslik: "Dondurma mı, boğulma mı?",
      bloklar: [
        { tip: "hikaye", ikon: "🍦", baslik: "Yazın iki grafik birlikte yükselir",
          metin: "Yazın dondurma satışı arttıkça denizde boğulanların sayısı da artıyor. Dondurmayı yasaklasak boğulmalar biter mi? Tabii ki hayır. Hava ısınınca insanlar hem daha çok dondurma yiyor hem daha çok denize giriyor. Peki bir şeyin başka bir şeye gerçekten sebep olduğunu nasıl anlarız?" },
        { tip: "grafik", baslik: "Birlikte artmak sebep olmak değildir", xlabel: "Yaz ayları", ylabel: "Satış / vaka sayısı", xmax: 10, ymax: 10,
          xticks: [{ v: 0, label: "Mayıs" }, { v: 5, label: "Temmuz" }, { v: 10, label: "Ağustos" }], yticks: [],
          ogeler: [
            { id: "ice", tip: "egri", renk: 0, etiket: "Dondurma satışı", noktalar: [[0, 1], [2, 2], [4, 4], [6, 6.5], [8, 8], [10, 9]] },
            { id: "drw", tip: "egri", renk: 2, etiket: "Boğulma sayısı", noktalar: [[0, 0.8], [2, 1.8], [4, 3.6], [6, 6], [8, 7.6], [10, 8.8]] },
            { id: "heat", tip: "egri", renk: 3, kesik: true, etiket: "Sıcaklık", gizli: true, noktalar: [[0, 1.5], [2, 3], [4, 5], [6, 7.5], [8, 9], [10, 9.8]] },
            { id: "ban", tip: "yazi", x: 3, y: 9, metin: "Dondurma yasak!", gizli: true },
            { id: "sun", tip: "yazi", x: 3, y: 9.4, metin: "☀️ Sıcak hava ikisini birden artırır", gizli: true }
          ],
          durumlar: [
            { metin: "Dondurma satışı ve boğulma sayısı ==aynı ritimle== tırmanıyor. İlişki var." },
            { metin: "Dondurmayı yasaklıyoruz: satış sıfıra iniyor. Ama boğulmalar hiç etkilenmeden artmaya devam ediyor. Demek ki dondurma sebep değil.", set: { ice: { noktalar: [[0, 0.1], [2, 0.1], [4, 0.1], [6, 0.1], [8, 0.1], [10, 0.1]] } }, goster: ["ban"] },
            { metin: "Asıl sebep üçüncü bir değişken: ==sıcak hava==. Hava ısınınca hem dondurma hem denize giriş artıyor.", set: { ice: { noktalar: [[0, 1], [2, 2], [4, 4], [6, 6.5], [8, 8], [10, 9]] } }, gizle: ["ban"], goster: ["heat", "sun"] }
          ] },
        { tip: "formul", parcalar: [{ t: "Birlikte artmak", alt: "ilişki (association)" }, "≠", { t: "Sebep olmak", alt: "neden-sonuç (cause-and-effect)" }], aciklama: "Bu bölümün sorusu: neden-sonuç iddiasına hangi çalışma türüyle ulaşılabilir?" }
      ]
    },
    {
      baslik: "*Explanatory* ve *response variable*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔍", terim: "Explanatory variable", tr: "açıklayıcı değişken", tanim: "Etkisini merak ettiğimiz, sonuçtaki değişimi açıklamaya yardım eden değişken.", ornek: "Uyku süresi (saat)." },
            { ikon: "📏", terim: "Response variable", tr: "yanıt değişkeni", tanim: "Çalışmanın sonucunu ölçtüğümüz değişken. İkisi de *categorical* ya da *quantitative* olabilir.", ornek: "Quiz puanı." },
            { ikon: "🔭", terim: "Inference", tr: "çıkarım", tanim: "Bir *sample*'dan elde edilen veriyle bütün *population* hakkında sonuç çıkarmak.", ornek: "8 kişilik bir örneklemden bütün sınıf hakkında yorum yapmak." }
          ] },
        { tip: "adimlar", baslik: "Uyku ve quiz: kim hangisi?", adimlar: [
            { baslik: "Soru", metin: "Uyku süresi quiz puanını etkiler mi?" },
            { baslik: "*Explanatory variable*", metin: "Uyku süresi (saat): etkisini merak ettiğimiz değişken." },
            { baslik: "*Response variable*", metin: "Quiz puanı: sonucu ölçtüğümüz değişken." },
            { baslik: "Yön", metin: "Ok her zaman explanatory → response: uyku süresi → quiz puanı." }
          ] },
        { tip: "ikili",
          sol: { ikon: "🔍", baslik: "*Explanatory variable*", maddeler: ["Etkisini merak ettiğin değişken", "Oklu şemada okun çıktığı yer", "Örnek: uyku süresi"] },
          sag: { ikon: "📏", baslik: "*Response variable*", maddeler: ["Sonucunu ölçtüğün değişken", "Oklu şemada okun vardığı yer", "Örnek: quiz puanı"] },
          oyun: [
            { metin: "Haftalık çalışma saati ile sınav notu arasındaki ilişki: çalışma saati.", cevap: "sol", neden: "Etkisini merak ettiğimiz şey çalışma saati: *explanatory*." },
            { metin: "Haftalık çalışma saati ile sınav notu arasındaki ilişki: sınav notu.", cevap: "sag", neden: "Sonuç olarak ölçülen şey sınav notu: *response*." },
            { metin: "Kıyıya gitme sıklığı sağlığı etkiler mi? Kıyıya gitme sıklığı.", cevap: "sol", neden: "Etkisini merak ettiğimiz değişken." },
            { metin: "Kıyıya gitme sıklığı sağlığı etkiler mi? Sağlık durumu.", cevap: "sag", neden: "Ölçülen sonuç." },
            { metin: "D vitamini düzeyi diyabet durumunu etkiler mi? Diyabet durumu.", cevap: "sag", neden: "Sonuç ölçülen değişken: *response*." }
          ] },
        { tip: "tuzak", baslik: "Eski adları kullanma", metin: "Bu derste ve AP'de değişkenlere “*independent*” ve “*dependent*” denmez; istatistikte başka anlamları var.", yanlis: "“Independent variable: uyku süresi. Dependent variable: quiz puanı.”", dogru: "“Explanatory variable: uyku süresi. Response variable: quiz puanı.”" },
        { tip: "tuzak", baslik: "Ölçülen şeyi yaz", metin: "Değişkeni tanımlarken ölçülen şeyi söyle.", yanlis: "“Explanatory variable: the coast.”", dogru: "“Explanatory variable: how often they visit the coast.”" }
      ]
    },
    {
      baslik: "Deney: *experiment*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧪", terim: "Experiment", tr: "deney", tanim: "Araştırmacının birimlere bilerek bir *treatment* uygulayıp yanıtı ölçtüğü çalışma. Neden-sonuç göstermenin en güvenilir yolu.", ornek: "Gönüllülere kurayla 8 ya da 6 saat uyku atamak." },
            { ikon: "💊", terim: "Treatment", tr: "uygulama / muamele", tanim: "Birimlere uygulanan belirli koşul. Tek *factor* varsa *level*'lar = *treatment*'lar; birden çok *factor* varsa *treatment*, *level*'ların bir kombinasyonudur.", ornek: "“8 saat uyku” bir *treatment*." },
            { ikon: "🔬", terim: "Experimental units", tr: "deney birimleri", tanim: "*Treatment*'ın uygulandığı en küçük birimler (ıstakoz, somun, fide, kişi…).", ornek: "30 gönüllü arkadaş." },
            { ikon: "🧑‍🤝‍🧑", terim: "Subjects", tr: "denekler", tanim: "*Experimental units* insan olduğunda kullanılan ad.", ornek: "Uyku deneyindeki 30 kişi." }
          ] },
        { tip: "adimlar", baslik: "Uyku deneyi", adimlar: [
            { baslik: "Gönüllüler", metin: "30 gönüllü arkadaşın var. Hepsi *subjects*." },
            { baslik: "Kurayla ayır", metin: "Kura çekerek 15 + 15 iki gruba ayırırsın." },
            { baslik: "*Treatment* ata", metin: "Bir grup sekiz saat, öbürü altı saat uyuyacak: *Treatment 1* ve *Treatment 2*. Kime ne uygulanacağına sen karar veriyorsun." },
            { baslik: "Ölç", metin: "Sabah hepsi aynı quiz'e giriyor. *Response variable*: quiz puanı." }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 30, etiket: "subjects (experimental units)" },
            { deger: 15, sonek: " + 15", etiket: "iki grup, kurayla" },
            { deger: 1, etiket: "factor: uyku süresi" },
            { deger: 2, etiket: "level = 2 treatment: 8 saat ve 6 saat" }
          ] },
        { tip: "formul", parcalar: [{ t: "1 factor", alt: "uyku süresi" }, "→", { t: "level'lar = treatment'lar", alt: "8 saat · 6 saat" }], aciklama: "Tek *factor* olduğunda *level* sayısı *treatment* sayısına eşittir: burada 2." },
        { tip: "tuzak", baslik: "Sayıları karıştırma", metin: "Factor sayısı, treatment sayısı ve experimental unit sayısı üç ayrı şeydir.", yanlis: "“30 gönüllü var, o halde 30 treatment var.”", dogru: "30 *experimental unit*, 1 *factor* (uyku süresi), 2 *level* ve 2 *treatment* var." }
      ]
    },
    {
      baslik: "*Factor*, *level* ve *treatment* sayısı",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎚️", terim: "Factor", tr: "faktör", tanim: "Deneyde araştırmacının değiştirdiği *explanatory variable*.", ornek: "Yemdeki protein miktarı." },
            { ikon: "🔢", terim: "Levels", tr: "düzeyler", tanim: "Bir *factor*'ün deneyde aldığı değerler.", ornek: "Protein için 400 g/kg ve 500 g/kg." }
          ] },
        { tip: "hikaye", ikon: "🦞", baslik: "Istakoz deneyi", metin: "Araştırmacılar, çiftlikteki ıstakozları en iyi büyüten yemi arıyor. Yemin iki özelliğini değiştiriyorlar: **protein** ve **yağ-karbonhidrat oranı** (*lipid : carbohydrate*, L:CHO)." },
        { tip: "tablo", baslik: "İki factor, beş level", head: ["*Factor*", "*Levels*", "Level sayısı"], rows: [
            ["1 · Protein", "400 g/kg · 500 g/kg", "2"],
            ["2 · L:CHO oranı", "low · medium · high", "3"]
          ] },
        { tip: "formul", parcalar: [{ t: "2", alt: "protein level'ı" }, "×", { t: "3", alt: "L:CHO level'ı" }, "=", { t: "6 treatment", alt: "toplam değil, çarpım" }], aciklama: "*Treatment* sayısı, *level* sayılarının çarpımıdır." },
        { tip: "tablo", baslik: "Altı treatment'ın tamamı", head: ["", "*low*", "*medium*", "*high*"], rows: [
            ["400 g/kg", "1 · 400 + low", "2 · 400 + medium", "3 · 400 + high"],
            ["500 g/kg", "4 · 500 + low", "5 · 500 + medium", "6 · 500 + high"]
          ], vurgu: 0, not: "“400 g/kg + low” bir treatment; “500 g/kg + high” başka bir treatment." },
        { tip: "ornek", baslik: "Istakoz deneyini tanımla", durum: "Her ıstakoza altı yemden biri veriliyor ve büyüme hızı (sırt kabuğu, yani *carapace* uzunluğu) ölçülüyor.",
          adimlar: [
            "*Factors*: protein (2 level) ve L:CHO oranı (3 level).",
            "*Treatments*: 2 × 3 = 6 (2 + 3 = 5 yanlış olurdu).",
            "*Experimental units*: ıstakozlar (insan olmadığı için *subjects* denmez).",
            "*Response variable*: büyüme hızı (*carapace* uzunluğu)."
          ],
          sonuc: "2 *factor*, 6 *treatment*; birimler ıstakozlar; yanıt büyüme hızı." },
        { tip: "ikili", ayirici: "↔",
          sol: { ikon: "1️⃣", baslik: "Tek *factor*", maddeler: ["*Level*'lar doğrudan *treatment*", "Uyku deneyi: 8 saat ve 6 saat", "2 level → 2 treatment"] },
          sag: { ikon: "2️⃣", baslik: "Birden çok *factor*", maddeler: ["*Treatment* = *level*'ların bir kombinasyonu", "Istakoz deneyi: 400 + low gibi", "2 × 3 → 6 treatment"] },
          oyun: [
            { metin: "Çay miktarı: 0, 1 ya da 3 fincan (tek factor, 3 level).", cevap: "sol", neden: "Tek *factor*: 3 *level* = 3 *treatment*." },
            { metin: "Protein (2 level) ve L:CHO oranı (3 level).", cevap: "sag", neden: "İki *factor*: 2 × 3 = 6 *treatment*." },
            { metin: "Gübre türü (3 level) ve sulama miktarı (2 level).", cevap: "sag", neden: "İki *factor* var, *treatment* kombinasyon olur (6)." },
            { metin: "Uyku süresi: 8 saat ya da 6 saat.", cevap: "sol", neden: "Tek *factor*: *level*'lar = *treatment*'lar." }
          ] },
        { tip: "tuzak", baslik: "Treatment sayısı toplam değil çarpım", metin: "Üç sayıyı birbirine karıştırma: factor sayısı, treatment sayısı, experimental unit sayısı.", yanlis: "2 level + 3 level = 5 treatment.", dogru: "2 × 3 = 6 *treatment*. *Factor* sayısı 2, *experimental unit* sayısı ise ıstakoz sayısıdır." },
        { tip: "tuzak", baslik: "Experimental unit nedir?", metin: "Sorarsa *treatment*'ın uygulandığı şeyi yaz.", yanlis: "“Experimental units: the six diets.”", dogru: "“Experimental units: the lobsters.” (insansa *subjects*)" }
      ]
    },
    {
      baslik: "Gözlem: *observational study*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔭", terim: "Observational study", tr: "gözlemsel çalışma", tanim: "Kimseye *treatment* uygulanmaz; araştırmacı yalnızca gözler ve ölçer.", ornek: "Arkadaşlarına “kaç saat uyudun?” diye sormak." },
            { ikon: "📋", terim: "Survey", tr: "anket", tanim: "İnsanlara standart bir soru seti sorarak veri toplayan *observational study*.", ornek: "200 liseliye telefon süresini ve not ortalamasını sormak." }
          ] },
        { tip: "ikili", ayirici: "vs",
          sol: { ikon: "🧪", baslik: "*Experiment*", maddeler: ["Araştırmacı *treatment* atar", "Kime ne uygulanacağına o karar verir", "Neden-sonuç için en güvenilir yol"] },
          sag: { ikon: "🔭", baslik: "*Observational study*", maddeler: ["*Treatment* yok, yalnızca gözlem", "Gruplar kendiliğinden oluşur", "Neden-sonuç çıkmaz"] },
          oyun: [
            { metin: "Arkadaşlarına geceleri kaç saat uyuduklarını sorup quiz puanlarıyla karşılaştırmak.", cevap: "sag", neden: "Kimse atanmadı; uyku süresini herkes kendisi seçti." },
            { metin: "30 gönüllüyü kurayla ikiye bölüp birine 8, öbürüne 6 saat uyku vermek.", cevap: "sol", neden: "Araştırmacı *treatment*'ı belirledi." },
            { metin: "Istakozları rastgele altı yemden birine atayıp büyümelerini ölçmek.", cevap: "sol", neden: "Yemi araştırmacı atadı." },
            { metin: "15 ülkeden 14 bin 702 kişiye kıyıya ne sıklıkla gittiklerini ve sağlıklarını sormak.", cevap: "sag", neden: "Gitme sıklığı kimseye atanmadı: *survey*." },
            { metin: "Zaten sigara içenlerle içmeyenleri yıllarca izleyip kanser oranlarını karşılaştırmak.", cevap: "sag", neden: "Kimse sigara içmeye atanmadı; deney etik olmadığı için çalışma gözlemsel yürür." }
          ] },
        { tip: "adimlar", baslik: "Neden hep deney yapmıyoruz?", adimlar: [
            { baslik: "Bazen çok zor", metin: "Bütün ülkelerde insanlara yıllarca belli bir yaşam biçimi atamak pratik değildir." },
            { baslik: "Bazen etik değil", metin: "Kanseri incelemek için insanlara zorla sigara içiremezsin." },
            { baslik: "O zaman: gözlem", metin: "Zaten sigara içenlerle içmeyenleri izlersin: *observational study*." }
          ] },
        { tip: "not", metin: "Kısa test: ==Kime ne uygulanacağına araştırmacı mı karar verdi?== Evet ise *experiment*. Yalnızca soru sorulduysa ya da kayıt tutulduysa *observational study*." },
        { tip: "tuzak", baslik: "Rastgele seçim deney değildir", metin: "Rastgele *seçim* genellemeyi sağlar, rastgele *atama* ise neden-sonucu. Biri diğerinin yerine geçmez (ayrıntı sonraki bölümlerde).", yanlis: "“1000 yetişkin rastgele seçilip soruldu, o halde bu bir experiment.”", dogru: "Kimseye *treatment* atanmadığı için bu hâlâ bir *observational study*." }
      ]
    },
    {
      baslik: "Kıyı ve sağlık",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 15, etiket: "ülke" },
            { deger: 14702, etiket: "kişi (14 bin 702)" },
            { deger: 2.13, sonek: " kat", etiket: "kıyıya hiç gitmeyenlerin “sağlığım kötü” deme olasılığı" }
          ] },
        { tip: "not", metin: "Bir çalışma 15 ülkeden 14 bin 702 kişiyle yapıldı. Kıyıya **hiç gitmeyenlerin** “sağlığım kötü” deme olasılığı, **haftada en az bir kez gidenlerin 2.13 katı** çıktı." },
        { tip: "sekil", baslik: "“Sağlığım kötü” deme olasılığı (göreli)", fig: { type: "bar", cats: ["Haftada en az bir kez gidiyor", "Hiç gitmiyor"], series: [{ name: "Göreli olasılık", values: [1, 2.13] }], ylabel: "Göreli olasılık" } },
        { tip: "ornek", baslik: "Çalışmayı sınıflandır", durum: "Kıyı çalışmasında kimseye “her hafta git” ya da “hiç gitme” denmedi.",
          adimlar: [
            "*Explanatory variable*: kıyıya gitme sıklığı (*categorical*).",
            "*Response variable*: sağlık durumu (*categorical*).",
            "Kime ne uygulanacağına kim karar verdi? Kimse: insanlar kendi tercihleriyle gitti ya da gitmedi.",
            "*Treatment* atanmadı → *observational study*."
          ],
          sonuc: "Bu bir *observational study*. “Kıyıya gitmek insanı sağlıklı yapıyor” denemez; yalnızca iki değişken ilişkili." },
        { tip: "tuzak", baslik: "Gözlemsel çalışmada fiil seçimi", metin: "Gözlemsel çalışmada ilişkiyi anlatan sözcükler kullan.", yanlis: "“Kıyıya gitmek sağlığı artırır / sağlığa yol açar / sağlığı iyileştirir.”", dogru: "“Kıyıya sık gidenler daha iyi sağlığa sahip olma eğilimindedir (associated with, tend to).”" }
      ]
    },
    {
      baslik: "*Confounding*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌀", terim: "Confounding", tr: "karışma", tanim: "İki değişkenin *response* üzerindeki etkilerinin birbirinden ayrılamaması.", ornek: "Vitaminin mi, sporun mu riski düşürdüğünü ayıramıyoruz." },
            { ikon: "🎭", terim: "Confounding variable", tr: "karıştırıcı değişken", tanim: "Hem *explanatory variable* ile ilişkili olan hem de *response variable*'ı etkileyen değişken.", ornek: "Açık havada spor." },
            { ikon: "🧩", terim: "Extraneous variable", tr: "dış değişken", tanim: "Çalışmada *explanatory variable* olmayan ama *response*'u etkileyebilecek değişken. *Confounding variable*, *explanatory* ile ilişkili olan *extraneous variable*'dır.", ornek: "Yaş, gelir, fiziksel aktivite." }
          ] },
        { tip: "hikaye", ikon: "☀️", baslik: "D vitamini ve diyabet", metin: "D vitamini düzeyi yüksek olanların diyabet riski daha düşük çıkıyor. *Explanatory variable*: kandaki D vitamini düzeyi. *Response variable*: diyabet durumu. Peki riski düşüren vitamin mi?" },
        { tip: "grafik", baslik: "Açık hava sporu iki yolu birden etkiler", xlabel: "", ylabel: "", xmax: 10, ymax: 10, xticks: [], yticks: [],
          ogeler: [
            { id: "vd", tip: "yazi", x: 1.8, y: 2, metin: "Vitamin D ↑" },
            { id: "dr", tip: "yazi", x: 8.2, y: 2, metin: "Diyabet riski ↓" },
            { id: "a1", tip: "ok", from: [3.2, 2.2], to: [6.2, 2.2] },
            { id: "q", tip: "yazi", x: 4.7, y: 3, metin: "?" },
            { id: "ex", tip: "yazi", x: 5, y: 8.6, metin: "Açık havada spor", gizli: true },
            { id: "a2", tip: "ok", from: [4.3, 8.1], to: [2.2, 3], gizli: true },
            { id: "a3", tip: "ok", from: [5.7, 8.1], to: [7.8, 3], gizli: true },
            { id: "t2", tip: "yazi", x: 2.2, y: 6, metin: "güneş → D vit.", gizli: true },
            { id: "t3", tip: "yazi", x: 8, y: 6, metin: "spor → risk ↓", gizli: true },
            { id: "mx", tip: "yazi", x: 4.7, y: 0.8, metin: "Riski düşüren vitamin mi, spor mu?", gizli: true }
          ],
          durumlar: [
            { metin: "İlk bakışta: vitamin D arttıkça diyabet riski düşüyor. Okun üstünde bir soru işareti." },
            { metin: "Üçüncü bir değişken: açık havada spor yapanlar güneş aldığı için ==D vitaminleri yükselir==.", goster: ["ex", "a2", "t2"] },
            { metin: "Aynı kişiler spor yaptıkları için ==diyabet riskleri de düşer==. Spor iki tarafı birden etkiliyor: bir üçgen oluştu.", goster: ["a3", "t3"] },
            { metin: "Etkiler birbirine karıştı: ayıramıyoruz. Buna ==*confounding*== denir; açık hava sporu bir *confounding variable*.", goster: ["mx"] }
          ] },
        { tip: "formul", parcalar: [
            { t: "1 · *Explanatory* ile ilişkili", alt: "spor ↔ D vitamini" }, "+", { t: "2 · *Response*'u etkiliyor", alt: "spor → diyabet riski" }, "=",
            { t: "*Confounding variable*", alt: "iki bağlantı birden" }
          ], aciklama: "Yalnızca bir bağlantı yazmak yetmez; ikisini birden yaz." },
        { tip: "ornek", baslik: "Kıyı örneğinde confounding variable yaz", durum: "Kıyıya sık gidenlerin sağlığı daha iyi çıkıyor. Hangi değişken karıştırıcı olabilir?",
          adimlar: [
            "Aday: **gelir**.",
            "Bağlantı 1 (*explanatory* ile ilişkili): geliri yüksek olanlar kıyıya daha sık gidebilir.",
            "Bağlantı 2 (*response*'u etkiliyor): yüksek gelir daha iyi beslenme ve daha iyi sağlık hizmeti demek, yani daha iyi sağlık.",
            "Sonuç cümlesi: “People with higher incomes may visit the coast more often, and higher income also leads to better health (better food and health care). So we can't tell whether it is the coast or the income that causes better health.”"
          ],
          sonuc: "Gelir bir *confounding variable*. Başka kabul edilebilir cevaplar: yaş, fiziksel aktivite düzeyi." },
        { tip: "tuzak", baslik: "Yarım cevap", metin: "Cevabın iki bağlantıyı da içermeli ve yönü belirtmeli.", yanlis: "“Income affects health.” (yalnızca ikinci bağlantı, ilkini yazmadın)", dogru: "“Higher income → visit the coast more often, and also better health.” İki bağlantı da var." },
        { tip: "tuzak", baslik: "Sadece “başka şeyler de etkiler” deme", metin: "“Confounding variable” cevabında belirsiz kalma: değişkeni adlandır, iki bağlantıyı bağlamla yaz.", yanlis: "“There might be other factors.”", dogru: "Değişkeni adlandır (ör. gelir) ve hem *explanatory* ile hem *response* ile bağlantısını bağlam içinde yaz." }
      ]
    },
    {
      baslik: "Neden-sonuç ne zaman?",
      bloklar: [
        { tip: "ikili",
          sol: { ikon: "🔭", baslik: "*Observational study*", maddeler: ["İlişki gösterir (association ✓)", "Neden-sonuç ✗", "“associated with”, “tend to”"] },
          sag: { ikon: "🧪", baslik: "*Experiment*", maddeler: ["İlişki gösterir", "Neden-sonuç ✓", "“causes”, “leads to”"] },
          oyun: [
            { metin: "200 liseliye telefon süresi ve not ortalaması soruldu; telefonu çok kullananların ortalaması düşük.", cevap: "sol", neden: "Hiçbir *treatment* atanmadı; neden-sonuç denemez." },
            { metin: "Öğrenciler kurayla iki gruba ayrıldı; bir gruba telefon yasağı, öbürüne serbestlik verildi.", cevap: "sag", neden: "*Treatment* kuraya göre atandı: neden-sonuç çıkarılabilir." },
            { metin: "Hastalara iki farklı ilaç rastgele atandı ve iyileşme ölçüldü.", cevap: "sag", neden: "İlaçları araştırmacı atadı: *experiment*." },
            { metin: "Hastaların hangi ilacı kullandığı doktor kayıtlarından okunup iyileşmeyle karşılaştırıldı.", cevap: "sol", neden: "Gruplar kendiliğinden oluştu: *observational study*." }
          ] },
        { tip: "ornek", baslik: "Telefon ve notlar", durum: "Bir araştırmacı 200 liseliye günde kaç saat telefon kullandığını ve not ortalamasını soruyor. Telefonu çok kullananların ortalaması daha düşük. Çalışmanın türü ne, hangi sonuç uygun?",
          adimlar: [
            "Kime ne uygulanacağına araştırmacı karar verdi mi? Hayır: yalnızca soru sordu (200 öğrenci, atanmadı).",
            "*Treatment* yok → *observational study* (*survey*).",
            "Gözlemsel çalışmada neden-sonuç sonucu çıkarılamaz.",
            "Olası *confounding variable*: uyku. Az uyuyan telefona çok bakıyor (explanatory ile ilişkili) ve derste zorlanıyor (response'u etkiliyor)."
          ],
          sonuc: "*Observational study*; “telefon notları düşürür” denemez." },
        { tip: "tuzak", baslik: "Seçenek tuzağı", metin: "Bu tür soruda iki yarının da doğru olması gerekir: çalışma türü ve çıkarılabilecek sonuç.", yanlis: "“Observational study; telefon kullanımı notları düşürür.”", dogru: "“Observational study; neden-sonuç sonucu çıkarılamaz.”" },
        { tip: "tuzak", baslik: "Dili doğru seç", metin: "Gözlemsel çalışmada “associated with”, “tend to” de; “causes”, “leads to”, “makes” deme.", yanlis: "“Telefon kullanımı notları düşürüyor.”", dogru: "“Telefon kullanımı daha düşük notlarla ilişkilidir.”" }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Explanatory variable* etkisini merak ettiğin, *response variable* sonucu ölçtüğün değişken; “*independent* / *dependent*” deme.",
            "*Experiment*'te araştırmacı *treatment* uygular; *observational study*'de yalnızca gözler (*survey* bir *observational study*'dir).",
            "*Experimental units* *treatment*'ın uygulandığı birimler; insansa *subjects*.",
            "*Factor* deneyde değiştirilen değişken, *levels* aldığı değerler.",
            "*Treatment* sayısı *level* sayılarının çarpımıdır: 2 × 3 = 6 (toplam değil).",
            "*Confounding variable* hem *explanatory variable* ile ilişkili, hem *response variable*'ı etkiler: iki bağlantıyı da yaz.",
            "*Observational study*'den *cause-and-effect* çıkmaz; “associated with” de.",
            "Ayırmak için tek soru: kime ne uygulanacağına araştırmacı mı karar verdi?"
          ] }
      ]
    }
  ]
};
