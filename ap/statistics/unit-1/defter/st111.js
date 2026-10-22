/* Kitora not defteri · st111 · 1F-1 Deney mi, Gözlem mi?
   Kaynak: ap-videolar/src/episodes/st111 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st111",
  amac: "Bu konu bir şeyin başka bir şeye sebep olduğunu nasıl anlayacağımızı anlatıyor. *Experiment* ile *observational study* farkını, *explanatory* ve *response variable*'ı, *treatment* sayısını ve *confounding variable*'ı öğreneceksin.",
  bolumler: [
    {
      baslik: "Birlikte artmak sebep olmak değildir",
      kisa: "İki şey birlikte artıyorsa sebep olduğunu söyleyemezsin.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "Birlikte artmak", alt: "ilişki (association)" }, "≠", { t: "Sebep olmak", alt: "neden-sonuç (cause-and-effect)" }], aciklama: "Bu konunun sorusu: neden-sonuç iddiasına hangi çalışma türüyle ulaşılabilir?" },
        { tip: "grafik", baslik: "Yazın dondurma satışı ve boğulmalar birlikte yükselir", xlabel: "Yaz ayları", ylabel: "Satış / vaka sayısı", xmax: 10, ymax: 10,
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
          ] }
      ]
    },
    {
      baslik: "*Explanatory* ve *response variable*",
      kisa: "Explanatory etkisini merak ettiğin, response sonucu ölçtüğün değişkendir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔍", terim: "Explanatory variable", tr: "açıklayıcı değişken", tanim: "Etkisini merak ettiğimiz, sonuçtaki değişimi açıklamaya yardım eden değişken.", ornek: "Uyku süresi (saat)." },
            { ikon: "📏", terim: "Response variable", tr: "yanıt değişkeni", tanim: "Çalışmanın sonucunu ölçtüğümüz değişken. İkisi de *categorical* ya da *quantitative* olabilir.", ornek: "Quiz puanı." },
            { ikon: "🔭", terim: "Inference", tr: "çıkarım", tanim: "Bir *sample*'dan elde edilen veriyle bütün *population* hakkında sonuç çıkarmak.", ornek: "8 kişilik bir örneklemden bütün sınıf hakkında yorum yapmak." }
          ] },
        { tip: "ikili",
          sol: { ikon: "🔍", baslik: "*Explanatory variable*", maddeler: ["Etkisini merak ettiğin değişken", "Oklu şemada okun çıktığı yer", "Örnek: uyku süresi"] },
          sag: { ikon: "📏", baslik: "*Response variable*", maddeler: ["Sonucunu ölçtüğün değişken", "Oklu şemada okun vardığı yer", "Örnek: quiz puanı"] },
          oyun: [
            { metin: "Haftalık çalışma saati ile sınav notu arasındaki ilişki: çalışma saati.", cevap: "sol", neden: "Etkisini merak ettiğimiz şey çalışma saati: *explanatory*." },
            { metin: "Haftalık çalışma saati ile sınav notu arasındaki ilişki: sınav notu.", cevap: "sag", neden: "Sonuç olarak ölçülen şey sınav notu: *response*." },
            { metin: "Kıyıya gitme sıklığı sağlığı etkiler mi? Kıyıya gitme sıklığı.", cevap: "sol", neden: "Etkisini merak ettiğimiz değişken." },
            { metin: "D vitamini düzeyi diyabet durumunu etkiler mi? Diyabet durumu.", cevap: "sag", neden: "Sonuç ölçülen değişken: *response*." }
          ] },
        { tip: "tuzak", baslik: "Eski adlar ve eksik tanım", metin: "AP'de “*independent*” ve “*dependent*” denmez; istatistikte başka anlamları var. Değişkeni tanımlarken ölçülen şeyi yaz.", yanlis: "“Independent variable: uyku süresi.” ya da “Explanatory variable: the coast.”", dogru: "“Explanatory variable: uyku süresi.” ya da “Explanatory variable: how often they visit the coast.”" }
      ]
    },
    {
      baslik: "Deney: araştırmacı *treatment* atar",
      kisa: "Experiment'te kime ne uygulanacağına araştırmacı karar verir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧪", terim: "Experiment", tr: "deney", tanim: "Araştırmacının birimlere bilerek bir *treatment* uygulayıp yanıtı ölçtüğü çalışma. Neden-sonuç göstermenin en güvenilir yolu.", ornek: "Gönüllülere kurayla 8 ya da 6 saat uyku atamak." },
            { ikon: "💊", terim: "Treatment", tr: "uygulama / muamele", tanim: "Birimlere uygulanan belirli koşul. Tek *factor* varsa *level*'lar = *treatment*'lar; birden çok *factor* varsa *treatment*, *level*'ların bir kombinasyonudur.", ornek: "“8 saat uyku” bir *treatment*." },
            { ikon: "🔬", terim: "Experimental units", tr: "deney birimleri", tanim: "*Treatment*'ın uygulandığı en küçük birimler (ıstakoz, somun, fide, kişi…).", ornek: "30 gönüllü arkadaş." },
            { ikon: "🧑‍🤝‍🧑", terim: "Subjects", tr: "denekler", tanim: "*Experimental units* insan olduğunda kullanılan ad.", ornek: "Uyku deneyindeki 30 kişi." }
          ] },
        { tip: "adimlar", baslik: "Uyku deneyi", adimlar: [
            { baslik: "Gönüllüler", metin: "30 gönüllü arkadaşın var; hepsi *subjects*." },
            { baslik: "Kurayla ayır", metin: "Kura çekerek 15 + 15 iki gruba ayırırsın." },
            { baslik: "*Treatment* ata", metin: "Bir grup sekiz, öbürü altı saat uyuyacak: *Treatment 1* ve *Treatment 2*. Kime ne uygulanacağına sen karar veriyorsun." },
            { baslik: "Ölç ve say", metin: "Sabah hepsi aynı quiz'e giriyor (*response variable*: quiz puanı). 30 *experimental unit*, 1 *factor* (uyku süresi), 2 *level* = 2 *treatment*." }
          ] }
      ]
    },
    {
      baslik: "*Factor*, *level* ve *treatment* sayısı",
      kisa: "Treatment sayısı level sayılarının çarpımıdır; toplamı değildir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎚️", terim: "Factor", tr: "faktör", tanim: "Deneyde araştırmacının değiştirdiği *explanatory variable*.", ornek: "Yemdeki protein miktarı." },
            { ikon: "🔢", terim: "Levels", tr: "düzeyler", tanim: "Bir *factor*'ün deneyde aldığı değerler.", ornek: "Protein için 400 g/kg ve 500 g/kg." }
          ] },
        { tip: "tablo", baslik: "Istakoz deneyi: iki factor, altı treatment", head: ["", "*low*", "*medium*", "*high*"], rows: [
            ["400 g/kg", "1 · 400 + low", "2 · 400 + medium", "3 · 400 + high"],
            ["500 g/kg", "4 · 500 + low", "5 · 500 + medium", "6 · 500 + high"]
          ], vurgu: 0, not: "Satırlar protein (2 level), sütunlar L:CHO oranı (3 level). “400 g/kg + low” bir treatment; “500 g/kg + high” başka bir treatment." },
        { tip: "ornek", baslik: "Istakoz deneyini tanımla", durum: "Çiftlikte ıstakozları en iyi büyüten yem aranıyor. Yemin iki özelliği değiştiriliyor: protein (400 ve 500 g/kg) ve yağ-karbonhidrat oranı (*lipid : carbohydrate*, L:CHO: low, medium, high). Her ıstakoza altı yemden biri veriliyor; büyüme hızı (sırt kabuğu, yani *carapace* uzunluğu) ölçülüyor.",
          adimlar: [
            "*Factors*: protein (2 level) ve L:CHO oranı (3 level).",
            "*Treatments*: 2 × 3 = 6 (2 + 3 = 5 yanlış olurdu).",
            "*Experimental units*: ıstakozlar (insan olmadığı için *subjects* denmez).",
            "*Response variable*: büyüme hızı (*carapace* uzunluğu)."
          ],
          sonuc: "2 *factor*, 6 *treatment*; birimler ıstakozlar; yanıt büyüme hızı." },
        { tip: "tuzak", baslik: "Üç sayıyı karıştırma", metin: "*Factor* sayısı, *treatment* sayısı ve *experimental unit* sayısı üç ayrı şeydir. Birimi sorarsa *treatment*'ın uygulandığı şeyi yaz.", yanlis: "“30 gönüllü var, 30 treatment var”; “2 + 3 = 5 treatment”; “Experimental units: the six diets.”", dogru: "2 × 3 = 6 *treatment*, 2 *factor*; “Experimental units: the lobsters.” (insansa *subjects*)" }
      ]
    },
    {
      baslik: "Gözlem: *observational study*",
      kisa: "Kime ne uygulanacağına araştırmacı karar vermediyse gözlemdir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔭", terim: "Observational study", tr: "gözlemsel çalışma", tanim: "Kimseye *treatment* uygulanmaz; araştırmacı yalnızca gözler ve ölçer.", ornek: "Arkadaşlarına “kaç saat uyudun?” diye sormak." },
            { ikon: "📋", terim: "Survey", tr: "anket", tanim: "İnsanlara standart bir soru seti sorarak veri toplayan *observational study*.", ornek: "200 liseliye telefon süresini ve not ortalamasını sormak." }
          ] },
        { tip: "ikili", ayirici: "vs",
          sol: { ikon: "🧪", baslik: "*Experiment*", maddeler: ["Araştırmacı *treatment* atar", "Neden-sonuç için en güvenilir yol", "“causes”, “leads to” diyebilirsin"] },
          sag: { ikon: "🔭", baslik: "*Observational study*", maddeler: ["*Treatment* yok, yalnızca gözlem", "Neden-sonuç çıkmaz", "“associated with”, “tend to” de"] },
          oyun: [
            { metin: "Arkadaşlarına geceleri kaç saat uyuduklarını sorup quiz puanlarıyla karşılaştırmak.", cevap: "sag", neden: "Kimse atanmadı; uyku süresini herkes kendisi seçti." },
            { metin: "30 gönüllüyü kurayla ikiye bölüp birine 8, öbürüne 6 saat uyku vermek.", cevap: "sol", neden: "Araştırmacı *treatment*'ı belirledi." },
            { metin: "15 ülkeden 14 bin 702 kişiye kıyıya ne sıklıkla gittiklerini ve sağlıklarını sormak.", cevap: "sag", neden: "Gitme sıklığı kimseye atanmadı: *survey*." },
            { metin: "Hastalara iki farklı ilaç rastgele atandı ve iyileşme ölçüldü.", cevap: "sol", neden: "İlaçları araştırmacı atadı: *experiment*." },
            { metin: "Zaten sigara içenlerle içmeyenleri yıllarca izleyip kanser oranlarını karşılaştırmak.", cevap: "sag", neden: "Kimse sigara içmeye atanmadı; deney etik olmadığı için çalışma gözlemsel yürür." }
          ] },
        { tip: "not", metin: "Neden hep deney yapmıyoruz? Bazen çok zor (bütün ülkelerde insanlara yıllarca bir yaşam biçimi atamak), bazen etik değil (kanseri incelemek için zorla sigara içirmek). O zaman gözlem yaparız." },
        { tip: "tuzak", baslik: "Rastgele seçim deney değildir", metin: "Rastgele *seçim* genellemeyi sağlar, rastgele *atama* ise neden-sonucu. Biri diğerinin yerine geçmez.", yanlis: "“1000 yetişkin rastgele seçilip soruldu, o halde bu bir experiment.”", dogru: "Kimseye *treatment* atanmadığı için bu hâlâ bir *observational study*." }
      ]
    },
    {
      baslik: "Kıyı ve sağlık: gözlemsel örnek",
      kisa: "Gözlemsel çalışmada yalnızca ilişkiyi söyleyebilirsin.",
      bloklar: [
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
      baslik: "*Confounding variable*",
      kisa: "Confounding variable explanatory ile ilişkili, response'u etkileyen üçüncü değişkendir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌀", terim: "Confounding", tr: "karışma", tanim: "İki değişkenin *response* üzerindeki etkilerinin birbirinden ayrılamaması.", ornek: "Vitaminin mi, sporun mu riski düşürdüğünü ayıramıyoruz." },
            { ikon: "🎭", terim: "Confounding variable", tr: "karıştırıcı değişken", tanim: "Hem *explanatory variable* ile ilişkili olan hem de *response variable*'ı etkileyen değişken. İki bağlantıyı birden yazmak gerekir.", ornek: "Açık havada spor." },
            { ikon: "🧩", terim: "Extraneous variable", tr: "dış değişken", tanim: "Çalışmada *explanatory variable* olmayan ama *response*'u etkileyebilecek değişken. *Confounding variable*, *explanatory* ile ilişkili olan *extraneous variable*'dır.", ornek: "Yaş, gelir, fiziksel aktivite." }
          ] },
        { tip: "grafik", baslik: "D vitamini ve diyabet: açık hava sporu iki yolu birden etkiler", xlabel: "", ylabel: "", xmax: 10, ymax: 10, xticks: [], yticks: [],
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
            { metin: "*Explanatory*: kandaki D vitamini düzeyi; *response*: diyabet durumu. D vitamini arttıkça diyabet riski düşüyor. Okun üstünde bir soru işareti." },
            { metin: "Üçüncü bir değişken: açık havada spor yapanlar güneş aldığı için ==D vitaminleri yükselir==.", goster: ["ex", "a2", "t2"] },
            { metin: "Aynı kişiler spor yaptıkları için ==diyabet riskleri de düşer==. Spor iki tarafı birden etkiliyor: bir üçgen oluştu.", goster: ["a3", "t3"] },
            { metin: "Etkiler birbirine karıştı: ayıramıyoruz. Buna ==*confounding*== denir; açık hava sporu bir *confounding variable*.", goster: ["mx"] }
          ] },
        { tip: "ornek", baslik: "Kıyı örneğinde confounding variable yaz", durum: "Kıyıya sık gidenlerin sağlığı daha iyi çıkıyor. Hangi değişken karıştırıcı olabilir?",
          adimlar: [
            "Aday: **gelir**.",
            "Bağlantı 1 (*explanatory* ile ilişkili): geliri yüksek olanlar kıyıya daha sık gidebilir.",
            "Bağlantı 2 (*response*'u etkiliyor): yüksek gelir daha iyi beslenme ve sağlık hizmeti demek, yani daha iyi sağlık.",
            "Sonuç cümlesi: “People with higher incomes may visit the coast more often, and higher income also leads to better health (better food and health care). So we can't tell whether it is the coast or the income that causes better health.”"
          ],
          sonuc: "Gelir bir *confounding variable*. Başka kabul edilebilir cevaplar: yaş, fiziksel aktivite düzeyi." },
        { tip: "tuzak", baslik: "Yarım ya da belirsiz cevap", metin: "Değişkeni adlandır, iki bağlantıyı da bağlam içinde yaz ve yönü belirt.", yanlis: "“Income affects health.” (ilk bağlantı yok) ya da “There might be other factors.”", dogru: "“Higher income → visit the coast more often, and also better health.” İki bağlantı da var." }
      ]
    },
    {
      baslik: "Neden-sonuç ne zaman söylenir?",
      kisa: "Neden-sonuç yalnızca experiment'ten çıkar; gözlemde “ilişkili” de.",
      bloklar: [
        { tip: "ornek", baslik: "Telefon ve notlar", durum: "Bir araştırmacı 200 liseliye günde kaç saat telefon kullandığını ve not ortalamasını soruyor. Telefonu çok kullananların ortalaması daha düşük. Çalışmanın türü ne, hangi sonuç uygun?",
          adimlar: [
            "Kime ne uygulanacağına araştırmacı karar verdi mi? Hayır: yalnızca soru sordu (200 öğrenci, atanmadı).",
            "*Treatment* yok → *observational study* (*survey*).",
            "Gözlemsel çalışmada neden-sonuç sonucu çıkarılamaz.",
            "Olası *confounding variable*: uyku. Az uyuyan telefona çok bakıyor (explanatory ile ilişkili) ve derste zorlanıyor (response'u etkiliyor)."
          ],
          sonuc: "*Observational study*; “telefon notları düşürür” denemez." },
        { tip: "tuzak", baslik: "İki yarı da doğru olmalı", metin: "Çalışma türünü ve çıkarılabilecek sonucu birlikte yaz. Gözlemde “associated with”, “tend to” de; “causes”, “leads to”, “makes” deme.", yanlis: "“Observational study; telefon kullanımı notları düşürür.”", dogru: "“Observational study; neden-sonuç çıkarılamaz. Telefon kullanımı daha düşük notlarla ilişkilidir.”" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
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
