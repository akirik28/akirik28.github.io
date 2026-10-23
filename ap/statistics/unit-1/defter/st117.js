/* Kitpath not defteri · st117 · 1H-3 Statistically Significant ve Çıkarımın Kapsamı
   Kaynak: ap-videolar/src/episodes/st117 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
(function () {
  /* 100 denemelik randomization distribution (notes.md tablosu): fark → adet */
  var COUNTS = { "-2.8": 1, "-2.6": 2, "-2.4": 1, "-2": 1, "-1.8": 2, "-1.6": 4, "-1.4": 2, "-1.2": 2, "-1": 7, "-0.8": 9, "-0.6": 7, "-0.4": 7, "-0.2": 6, "0": 5, "0.2": 6, "0.4": 5, "0.6": 3, "0.8": 5, "1": 6, "1.2": 3, "1.4": 2, "1.6": 3, "1.8": 4, "2": 4, "2.4": 2, "3": 1 };
  var i;
  /* grafik ögeleri: her 0.2'lik aralık için bir sütun (x = fark + 3) */
  var BARS = [], SET_ALL = {}, SET_ONE = {}, TAIL = [];
  for (i = 0; i < 30; i++) {
    var v = Math.round((-2.8 + 0.2 * i) * 10) / 10, n = COUNTS[String(v)] || 0, c = Math.round((v + 3) * 10) / 10;
    var id = "h" + i, tail = v >= 1.2;
    BARS.push({ id: id, tip: "alan", renk: tail ? 0 : 1, gizli: tail, noktalar: [[c - 0.09, 0], [c + 0.09, 0], [c + 0.09, 0], [c - 0.09, 0]] });
    SET_ALL[id] = { noktalar: [[c - 0.09, 0], [c + 0.09, 0], [c + 0.09, n], [c - 0.09, n]] };
    if (v === -0.6) SET_ONE[id] = { noktalar: [[c - 0.09, 0], [c + 0.09, 0], [c + 0.09, 1], [c - 0.09, 1]] };
    if (tail) TAIL.push(id);
  }
  var XT = [-3, -2, -1, 0, 1, 2, 3].map(function (d) { return { v: d + 3, label: String(d) }; });

  window.DEFTER = {
    slug: "st117",
    amac: "Bu konu deneyde çıkan farkın treatment'tan mı yoksa kuranın şansından mı geldiğini nasıl test edeceğimizi anlatıyor. *Simulation*, %5 kuralı ve *statistically significant* kararını, sonucun kime genelleneceğini ve etiği öğreneceksin.",
    bolumler: [
      {
        baslik: "Şans mı, etki mi?",
        kisa: "Fark şansın kolayca üretebileceği kadar küçükse ikna olma.",
        bloklar: [
          { tip: "not", metin: "Arkadaşın bir parayı 10 kez atıyor, 6 yazı geliyor ve “Bu para hileli!” diyor. İkna olmazsın; dürüst parada 6 yazı sık gelir. Ya 10'u da yazı gelseydi? Asıl soru: bu fark ==şansın kolayca üretebileceği bir şey mi==, yoksa ==şansla açıklanamayacak kadar büyük mü?==" },
          { tip: "sekil", baslik: "Dürüst parada 10 atış: 6 ya da daha çok yazı ≈ %38 (386/1024), 10 yazı ≈ binde 1 (1/1024)", fig: { type: "bar", cats: ["6 ya da daha çok yazı", "10 yazı"], series: [{ name: "Olasılık (%)", values: [37.7, 0.1] }], ylabel: "Olasılık (%)" } },
          { tip: "ikili", ayirici: "vs",
            sol: { ikon: "🎲", baslik: "Şans kolayca üretir", maddeler: ["10 atışta 6 yazı", "Dürüst parada sık görülür", "Şüphelenmek için erken"] },
            sag: { ikon: "🔓", baslik: "Şansla açıklanamaz", maddeler: ["10 atışta 10 yazı", "Dürüst parada binde 1", "Şüphelenmek için yeterli"] },
            oyun: [
              { metin: "10 atışta 6 yazı geldi.", cevap: "sol", neden: "Dürüst parada bile ≈ %38 olasılıkla 6 ya da daha çok yazı gelir." },
              { metin: "10 atışta 10 yazı geldi.", cevap: "sag", neden: "Dürüst parada yaklaşık binde 1: şansla zor." },
              { metin: "20 atışta 11 yazı.", cevap: "sol", neden: "10'a çok yakın; şansla rahatça çıkar." },
              { metin: "100 atışta 100 yazı.", cevap: "sag", neden: "Şansla açıklanması neredeyse imkânsız." }
            ] }
        ]
      },
      {
        baslik: "Kafein nabzı artırır mı?",
        kisa: "Gözlenen fark, treatment'tan ya da kuranın şansından gelebilir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🎲", terim: "Random assignment", tr: "rastgele atama", tanim: "*Treatment*'ları kurayla dağıtmak. Grupları kabaca denk yapar, birebir aynı yapmaz; şans payı kalır.", ornek: "20 gönüllüyü kurayla 10'a 10 bölmek." },
              { ikon: "🫀", terim: "Change in pulse", tr: "nabız değişimi", tanim: "Ölçülen *response*: son nabız eksi ilk nabız.", ornek: "Change = Final pulse rate − Initial pulse rate." }
            ] },
          { tip: "tablo", baslik: "20 gönüllü kurayla iki kola: her öğrencinin nabız değişimi", head: ["Grup", "Değerler (10 öğrenci)", "Toplam", "Ortalama"], rows: [
              ["Kafeinli", "8, 3, 5, 1, 4, 0, 6, 1, 4, 0", "32", "3.2"],
              ["Kafeinsiz", "3, −2, 4, −1, 5, 5, 1, 2, −1, 4", "20", "2.0"]
            ], not: "10'u kafeinli, 10'u kafeinsiz kola içti; toplamlar ve ortalamalar tutuyor." },
          { tip: "ornek", baslik: "Gözlenen fark", durum: "Kafeinli grubun ortalaması 3.2, kafeinsiz grubunki 2.0.",
            adimlar: ["Kafeinli: 8 + 3 + 5 + 1 + 4 + 0 + 6 + 1 + 4 + 0 = 32 → 32 ÷ 10 = 3.2.", "Kafeinsiz: 3 − 2 + 4 − 1 + 5 + 5 + 1 + 2 − 1 + 4 = 20 → 20 ÷ 10 = 2.0.", "Fark (kafeinli − kafeinsiz): 3.2 − 2.0 = 1.2.", "Kafein işe yarıyor gibi. Ama dur: bu fark şanstan olabilir mi? Asıl soru: kafein etkisiz olsaydı, şansla 1.2 ya da daha büyük fark ne sıklıkla çıkardı?"],
            sonuc: "Gözlenen fark = 1.2 (nabız değişimi)." },
          { tip: "ikili", ayirici: "ya da",
            sol: { ikon: "🎲", baslik: "Açıklama 1: şans", maddeler: ["Kafein etkisiz", "Fark kuranın şansından çıktı", "Nabzı kolay yükselenler tesadüfen aynı gruba düştü"] },
            sag: { ikon: "🥤", baslik: "Açıklama 2: kafein", maddeler: ["Kafein nabzı gerçekten artırıyor", "Fark treatment'tan geliyor", "Şansla açıklanamaz"] },
            oyun: [
              { metin: "Fark, kuranın nabzı kolay yükselenleri tesadüfen aynı gruba koymasından çıktı.", cevap: "sol", neden: "Şans: random assignment grupları birebir denk yapmaz." },
              { metin: "Kafein nabzı gerçekten artırıyor.", cevap: "sag", neden: "Treatment etkisi." },
              { metin: "“No effect — the difference is due to chance variation in the random assignment.”", cevap: "sol", neden: "Şans açıklaması." },
              { metin: "“Caffeine increases pulse rates.”", cevap: "sag", neden: "Treatment açıklaması." }
            ] }
        ]
      },
      {
        baslik: "*Simulation*: şansı taklit et",
        kisa: "Etki yokmuş gibi kartları karıştırıp dağıt, farkı bul, tekrarla.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🃏", terim: "Simulation", tr: "benzetim", tanim: "Şansı taklit ederek “etki olmasaydı ne olurdu?” sorusunu denemek.", ornek: "20 kartı karıştırıp onar onar dağıtmak." },
              { ikon: "📊", terim: "Randomization distribution", tr: "rastgeleleştirme dağılımı", tanim: "*Treatment* etkisizken, yalnızca kura şansıyla çıkabilecek farkların (x̄₁ − x̄₂) dağılımı; simülasyon denemelerinin *dotplot*'u.", ornek: "100 denemenin farkları." }
            ] },
          { tip: "adimlar", baslik: "Bir deneme nasıl yapılır?", adimlar: [
              { baslik: "Varsayım", metin: "Kafein etkisiz: herkesin nabız değişimi hangi kolayı içerse içsin aynı kalırdı." },
              { baslik: "20 kart", metin: "20 öğrencinin değişimini kartlara yaz: 8, 3, 5, 1, 4, 0, 6, 1, 4, 0, 3, −2, 4, −1, 5, 5, 1, 2, −1, 4." },
              { baslik: "Karıştır ve dağıt", metin: "Kartları karıştır, onar onar iki desteye dağıt: ilk deste kafein grubu, ikincisi kafeinsiz. Kurayı yeniden çekmiş oldun." },
              { baslik: "Farkı bul", metin: "Ortalama(kafein) − ortalama(kafeinsiz) hesapla; her seferinde bu sırayla. Negatif değerler de olağandır, hiçbir deneme atlanmaz." },
              { baslik: "Noktayı koy", metin: "Farkı sayı doğrusuna bir nokta olarak koy; tekrarla." }
            ] },
          { tip: "ornek", baslik: "Deneme 1", durum: "Karıştırıp dağıtınca: Pile 1 (kafein): 8, 0, 1, 4, −2, 5, 1, 2, −1, 5. Pile 2 (kafeinsiz): 6, 5, 4, 4, 4, 3, 3, 1, 0, −1.",
            adimlar: ["Pile 1 toplamı: 8 + 0 + 1 + 4 − 2 + 5 + 1 + 2 − 1 + 5 = 23 → 23 ÷ 10 = 2.3.", "Pile 2 toplamı: 6 + 5 + 4 + 4 + 4 + 3 + 3 + 1 + 0 − 1 = 29 → 29 ÷ 10 = 2.9.", "Kontrol: 23 + 29 = 52, orijinal 20 kartın toplamı (32 + 20 = 52).", "Fark: 2.3 − 2.9 = −0.6. Negatif de çıkabilir."],
            sonuc: "Deneme 1: fark = −0.6 (sayı doğrusunda −0.6'ya bir nokta)." }
        ]
      },
      {
        baslik: "*Randomization distribution*: 100 deneme",
        kisa: "Etki yokken 1.2 ya da daha büyük fark 100 denemenin 19'unda çıktı.",
        bloklar: [
          { tip: "grafik", baslik: "Dağılımı kur, gözlenen farkı işaretle", xlabel: "Fark (Kafein − Kafeinsiz)", ylabel: "Deneme sayısı", xmax: 7, ymax: 10, xticks: XT, yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }],
            ogeler: BARS.concat([
              { id: "z0", tip: "cizgi", renk: 1, kesik: true, etiket: "", from: [3, 0], to: [3, 9.5], gizli: true },
              { id: "z0t", tip: "yazi", x: 3, y: 9.9, metin: "merkez ≈ 0", gizli: true },
              { id: "obs", tip: "cizgi", renk: 3, etiket: "", from: [4.2, 0], to: [4.2, 9.5], gizli: true },
              { id: "obst", tip: "yazi", x: 4.3, y: 9.9, metin: "gözlenen fark = 1.2", hiza: "start", gizli: true },
              { id: "pct", tip: "yazi", x: 5.6, y: 6.5, metin: "19 / 100 = %19", gizli: true }
            ]),
            durumlar: [
              { metin: "Bir deneme: kartları karıştır, dağıt, farkı bul. Deneme 1'in farkı −0.6: sayı doğrusuna tek nokta.", set: SET_ONE },
              { metin: "100 deneme sonra: ==kafein etkisizken== kura şansıyla çıkabilecek farkların dağılımı: *randomization distribution*.", set: SET_ALL },
              { metin: "Noktalar sıfırın çevresinde toplanır: etki yoksa fark ortalamada 0.", goster: ["z0", "z0t"] },
              { metin: "Gerçek fark 1.2'yi işaretle. Ona eşit ya da ondan büyük kaç nokta var? ==19== (3 + 2 + 3 + 4 + 4 + 2 + 1). Yani denemelerin %19'u.", goster: TAIL.concat(["obs", "obst", "pct"]) }
            ] },
          { tip: "ornek", baslik: "Kaç nokta 1.2 ya da daha büyük?", durum: "Gözlenen fark 1.2. Dağılımda 1.2'ye eşit ya da ondan büyük farkları say; 1.2'dekiler de dahildir.",
            adimlar: ["1.2: 3 deneme; 1.4: 2; 1.6: 3; 1.8: 4; 2.0: 4; 2.4: 2; 3.0: 1.", "Toplam: 3 + 2 + 3 + 4 + 4 + 2 + 1 = 19 nokta.", "Oran: 19 ÷ 100 = 0.19 = %19.", "“Eşit ya da büyük”: çizginin üstündeki noktalar da sayılır; yalnızca 1.2'den büyükleri saymak yanlış olur."],
            sonuc: "Etki yokken 1.2 ya da daha büyük fark 100 denemenin 19'unda çıktı: %19." }
        ]
      },
      {
        baslik: "%5 kuralı: *statistically significant*",
        kisa: "Şansla çıkma oranı %5'ten azsa fark anlamlıdır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "✅", terim: "Statistically significant", tr: "istatistiksel olarak anlamlı", tanim: "Gözlenen fark, yalnızca *random assignment*'taki şansla açıklanamayacak kadar büyük. Pratik sınır: etki yokken böyle bir fark simülasyonların ==%5'inden azında== çıkıyorsa.", ornek: "Etki yokken %3'te çıkan fark." },
              { ikon: "❔", terim: "Not statistically significant", tr: "anlamlı değil", tanim: "Fark şansla rahatça çıkabiliyor. “Etki yok” demek değil, “ikna edici kanıt yok” demek.", ornek: "Kafein deneyinde %19." },
              { ikon: "🔎", terim: "Convincing evidence", tr: "ikna edici kanıt", tanim: "AP cevaplarında kullanılan kalıp: “There is / is not convincing evidence that …”", ornek: "“There is not convincing evidence that caffeine increases pulse rates.”" }
            ] },
          { tip: "grafik", baslik: "Karar çizgisi: %5", xlabel: "Etki yokken şansla çıkma oranı (%)", ylabel: "", xmax: 20, ymax: 6, xticks: [{ v: 0, label: "0" }, { v: 5, label: "5" }, { v: 10, label: "10" }, { v: 15, label: "15" }, { v: 20, label: "20" }], yticks: [],
            ogeler: [
              { id: "sg", tip: "alan", renk: 2, noktalar: [[0, 0.4], [5, 0.4], [5, 4.6], [0, 4.6]] },
              { id: "ns", tip: "alan", renk: 1, noktalar: [[5, 0.4], [20, 0.4], [20, 4.6], [5, 4.6]] },
              { id: "sgt", tip: "yazi", x: 2.5, y: 5.2, metin: "anlamlı" },
              { id: "nst", tip: "yazi", x: 12.5, y: 5.2, metin: "anlamlı değil: şansla olağan" },
              { id: "th", tip: "cizgi", renk: 3, kesik: true, etiket: "", from: [5, 0], to: [5, 5.6] },
              { id: "p19", tip: "nokta", x: 19, y: 2.5, etiket: "kafein %19", renk: 0, gizli: true },
              { id: "p3", tip: "nokta", x: 3, y: 2.5, etiket: "telefon %3", renk: 0, gizli: true }
            ],
            durumlar: [
              { metin: "Kural: şansla çıkma oranı ==%5'ten azsa== fark anlamlı. Sol bölge anlamlı, sağ bölge şansla olağan." },
              { metin: "Kafein deneyi: %19 > %5. Etki olmasa da beş kuradan birinde bu fark çıkar: ==not statistically significant==.", goster: ["p19"] },
              { metin: "Karşılaştırma için aşağıdaki telefon deneyi: %3 < %5, sol bölgede: anlamlı.", goster: ["p3"] }
            ] },
          { tip: "ornek", baslik: "Telefonsuz çalışma", durum: "30 gönüllü öğrenci rastgele ikiye ayrılıyor: bir grup telefonsuz çalışıyor, öbürü telefonu yanında tutuyor. Telefonsuz grubun quiz ortalaması 4 puan yüksek. 200 denemelik simulation'da 4 ya da daha büyük fark 6 kez çıkıyor. Fark statistically significant mi?",
            adimlar: ["Etki yokken 4 ya da daha büyük fark: 6 ÷ 200 = 0.03 = %3.", "%3 < %5 → fark şansla kolay açıklanamaz: statistically significant.", "Random assignment var, fark anlamlı → telefonun quiz puanını etkilediği söylenebilir.", "Ama gönüllüler rastgele seçilmedi: sonuç yalnızca benzer öğrencilere genellenir (bütün lise öğrencilerine değil)."],
            sonuc: "Evet, anlamlı: %3 < %5." },
          { tip: "tuzak", baslik: "Anlamsızlık “etkisiz” demek değil; %19 bir olasılık değil", metin: "Anlamlı çıkmaması etkinin yok olduğunu kanıtlamaz. %19 da farkın treatment'tan gelme olasılığı değildir: etki yokken o kadar ya da daha büyük farkın şansla çıkma sıklığıdır.", yanlis: "“Caffeine has no effect.” ya da “%19 olasılıkla fark kafeinden geldi.”", dogru: "“There is not convincing evidence that caffeine increases pulse rates.” Belki etki var; bu deney gösteremedi." }
        ]
      },
      {
        baslik: "*Scope of inference*: kime, neyi söyleyebilirsin?",
        kisa: "Seçim genellemeyi, atama neden-sonucu belirler.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🔭", terim: "Scope of inference", tr: "çıkarımın kapsamı", tanim: "Bir çalışmadan çıkarılabilecek sonucun kapsamı: kime genellenir, neden-sonuç denir mi?", ornek: "İki soruya bak: seçim, atama." },
              { ikon: "🎯", terim: "Random selection", tr: "rastgele seçim", tanim: "Bireyleri popülasyondan rastgele seçmek → sonucu o ==popülasyona genellemeye== izin verir.", ornek: "Okul listesinden zarla öğrenci seçmek." },
              { ikon: "🔗", terim: "Cause and effect", tr: "neden-sonuç", tanim: "Yalnızca *random assignment*'lı deneyde ve fark ==anlamlıysa== söylenir.", ornek: "Randomize deney + anlamlı fark." }
            ] },
          { tip: "ikili", ayirici: "↔",
            sol: { ikon: "🎯", baslik: "1 · *Random selection*", maddeler: ["Bireyler popülasyondan rastgele seçildi mi?", "Evet → o popülasyona genelle", "“Kimi aldın?”"] },
            sag: { ikon: "🔗", baslik: "2 · *Random assignment*", maddeler: ["Treatment'lar rastgele atandı mı?", "Evet + fark anlamlı → neden-sonuç", "“Kime ne verdin?”"] },
            oyun: [
              { metin: "Okulun öğrenci listesinden zarla 150 öğrenci seçildi.", cevap: "sol", neden: "Popülasyondan rastgele seçim: genelleme." },
              { metin: "20 gönüllü kurayla kafeinli ve kafeinsiz kolaya ayrıldı.", cevap: "sag", neden: "Treatment'ların rastgele atanması." },
              { metin: "Amaç: sonucun bütün popülasyona genellenebilmesi.", cevap: "sol", neden: "Genelleme seçime bağlı." },
              { metin: "Amaç: neden-sonuç diyebilmek.", cevap: "sag", neden: "Neden-sonuç atamaya bağlı." }
            ] },
          { tip: "tablo", baslik: "İki soru, dört kutu", head: ["", "Random assignment: EVET", "Random assignment: HAYIR"], rows: [
              ["Random selection: EVET", "Popülasyon ✓ · Neden-sonuç ✓ (okul listesinden seçilip rastgele iki gruba ayrılan öğrenciler)", "Popülasyon ✓ · Neden-sonuç ✗ (rastgele örneklemli anket, random sample of U.S. adults)"],
              ["Random selection: HAYIR", "Popülasyon ✗ (yalnızca benzerlere) · Neden-sonuç ✓ (20 gönüllüyle kafein deneyi, fark anlamlıysa)", "Popülasyon ✗ · Neden-sonuç ✗ (kantindeki arkadaşlara sorulan anket)"]
            ], vurgu: 1, not: "Deneylerin çoğu sol alttaki kutudadır: gönüllülerle rastgele atamalı deney." },
          { tip: "tuzak", baslik: "Seçim ile atamayı karıştırma", metin: "Selection popülasyona genelleme, assignment neden-sonuç içindir. Neden-sonuç için randomize deney ve anlamlı fark birlikte gerekir.", yanlis: "“Atama rastgele olduğu için sonuç bütün lise öğrencilerine genellenir.” ya da “Random assignment var, o halde neden-sonuç.” (fark anlamlı değilse)", dogru: "Atama rastgele ve fark anlamlıysa neden-sonuç. Birimler rastgele seçilmediyse genelleme yalnızca “items or individuals like those in the study”." }
        ]
      },
      {
        baslik: "Botox örneği",
        kisa: "Randomize deney ve anlamlı fark neden-sonucu, seçim yokluğu genellemeyi sınırlar.",
        bloklar: [
          { tip: "sekil", baslik: "Kronik bel ağrısı: 8 hafta sonra düzelenlerin yüzdesi", fig: { type: "bar", cats: ["Botox (25 hasta)", "Placebo / saline (25 hasta)"], series: [{ name: "Düzelen (%)", values: [68, 12] }], ylabel: "Düzelen (%)" } },
          { tip: "ornek", baslik: "Botox deneyini yorumla", durum: "Kronik bel ağrılı, 18 ile 55 yaş arası 50 hasta rastgele ikiye ayrılıyor: 25'ine Botox, 25'ine placebo (tuzlu su iğnesi, *saline*). 8 hafta sonra Botox grubunun %68'i, öbür grubun %12'si düzeliyor. Fark *statistically significant*; hastalar rastgele seçilmedi.",
            adimlar: [
              "Yüzdeler: Botox 17 ÷ 25 = 0.68 = %68; placebo 3 ÷ 25 = 0.12 = %12. Fark: 68 − 12 = 56 yüzde puanı (*percentage points*).",
              "(a) Neden-sonuç? Random assignment var (hastalar rastgele iki gruba ayrıldı) ve fark anlamlı: evet, Botox'un düzelmeye neden olduğu söylenebilir.",
              "(b) En geniş popülasyon? Random selection yok: genelleme çalışmadakilere benzeyen, 18–55 yaş arası kronik bel ağrılı hastalarla sınırlı."
            ],
            sonuc: "Neden-sonuç evet; genelleme: “patients like those in the study: aged 18–55 with chronic low back pain.” (“all people with back pain” DEĞİL)" },
          { tip: "tuzak", baslik: "Popülasyonu bağlamla yaz", metin: "Cevapta çalışmadaki grubu bağlamıyla yaz: yaş aralığı, hastalık…", yanlis: "“Sonuç bel ağrısı olan herkese genellenir.”", dogru: "“Sonuç, çalışmadakilere benzeyen 18–55 yaş arası kronik bel ağrılı hastalara genellenir.”" }
        ]
      },
      {
        baslik: "Veri etiği",
        kisa: "Zarar verebilecek treatment atanamaz; o zaman gözlem yapılır.",
        bloklar: [
          { tip: "adimlar", baslik: "Etik üç durum", adimlar: [
              { baslik: "Zarar verebilecek *treatment* atanamaz", metin: "Kimseye sigara içiremezsin. O zaman *observational study* yapılır: yalnızca gözlersin." },
              { baslik: "Yeni ilaç da zarar verebilir", metin: "Yeni bir ilaç (*clinical trial*) yarar kadar zarar da verebilir; terazi iki yanıyla tartılır." },
              { baslik: "Anketlerde de etik", metin: "Anketlerde *treatment* yok, ama kişisel bilgi, gizlilik ve onam gibi etik sorular yine var." }
            ] },
          { tip: "ikili",
            sol: { ikon: "🚭", baslik: "Atanamaz (etik değil)", maddeler: ["Kimseye sigara içirmek", "Zarar verme riski çok yüksek", "Çözüm: *observational study*"] },
            sag: { ikon: "✅", baslik: "Atanabilir (etik)", maddeler: ["Kafeinli ya da kafeinsiz kola", "Telefonlu ya da telefonsuz çalışma", "Rastgele atamalı deney mümkün"] },
            oyun: [
              { metin: "Katılımcılara rastgele sigara içirmek.", cevap: "sol", neden: "Zarar verebilecek treatment atanamaz." },
              { metin: "Öğrencilere rastgele kafeinli ya da kafeinsiz kola vermek.", cevap: "sag", neden: "Makul ve zararsız (etik kurallar çerçevesinde)." },
              { metin: "Hasta gruplarını tehlikeli bir ilaca zorla atamak.", cevap: "sol", neden: "Zarar riski; etik değil." },
              { metin: "Telefonsuz ya da telefonlu çalışma gruplarına rastgele atamak.", cevap: "sag", neden: "Zararsız bir deney." }
            ] }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Deneydeki fark *treatment*'tan da gelebilir, kuranın şansından da (*chance variation in the random assignment*).",
              "*Simulation*: 20 kartı karıştır, onar onar dağıt, farkı bul (Deneme 1: 2.3 − 2.9 = −0.6), noktayı koy, tekrarla.",
              "*Randomization distribution*: etki yokken şansla çıkan farkların dağılımı; 100 denemede 1.2 ya da daha büyük fark 19 kez: %19.",
              "Şansla çıkma oranı %5'ten azsa fark *statistically significant*; %19 > %5 → anlamlı değil, yani ==“not convincing evidence”==, “etki yok” değil.",
              "*Random selection* → popülasyona genelleme; *random assignment* + anlamlı fark → *cause and effect*.",
              "Dört kutu: ✓✓ ikisi de; ✓✗ yalnızca genelleme; ✗✓ yalnızca neden-sonuç (benzerlere); ✗✗ hiçbiri.",
              "Botox: 17/25 = %68 ve 3/25 = %12, fark 56 puan, anlamlı; neden-sonuç evet, genelleme yalnızca çalışmadaki gibi hastalara.",
              "Etik: zarar verebilecek *treatment* atanamaz (sigara) → *observational study*."
            ] }
        ]
      }
    ]
  };
})();
