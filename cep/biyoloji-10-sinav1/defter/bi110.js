/* Kitpath not defteri · bi110 · BIO.10.1.3 Fotosentezde kullanılan ve üretilen maddeler: deneyler
   Kaynak: öğretmenin "1.2 & 1.3 Photosynthesis" sunumu, "photosynthesis experiment set up examples", "Photosynthesis Review Worksheet",
   Exam 1 Success Criteria (Senaryo 4) ve MEB "Yazılıya hazırlanıyorum" örnek sorusu (Ingenhousz / Elodea). Metinler kendi cümlelerimiz.
   2026-10-29 sunum karşılaştırması: takip/sinav-kitleri/biyoloji-10/SUNUM-KARSILASTIRMA.md (denklem sunumdaki 12 H₂O'lu biçime çevrildi).
   2026-10-30 kalite düzeltmeleri: mor ışık gerekçesi (MEB Q2.2), su seviyesi / kılcal boru ölçümü, kaynatmanın doğru nedeni, "soru öner" adımı.
   Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi110",
  amac: "Bu konu fotosentezde hangi maddelerin kullanıldığını ve üretildiğini **deneyle göstermeyi** anlatıyor: O₂ kabarcıkları, CO₂ tutucu (NaOH), pH göstergesi (BTB), nişasta testi (iyot). Deneyin amacını, değişkenlerini ve sonucunu sınavda nasıl yazacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Fotosentezin girdi ve çıktıları",
      kisa: "Kullanılan: CO₂, su, ışık. Üretilen: glikoz (nişasta), O₂.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "6 CO₂", alt: "karbondioksit" }, "+", { t: "12 H₂O", alt: "su" }, "→", { t: "C₆H₁₂O₆", alt: "glikoz" }, "+", { t: "6 O₂", alt: "oksijen" }, "+", { t: "6 H₂O", alt: "su" }
          ], aciklama: "Ok üzerinde ışık enerjisi ve klorofil vardır. Sözle (kelime denklemi): *carbon dioxide + water → glucose + oxygen* (ışık, klorofil). 6 O₂'nin 12 oksijen atomunun hepsi 12 sudan gelir." },
        { tip: "tablo", baslik: "Hangi evre neyi kullanır, neyi üretir?", head: ["Evre", "Yer", "Kullanılan", "Üretilen"], rows: [
            ["Işığa bağlı (*light-dependent*)", "Tilakoid (grana)", "Işık, H₂O, ADP + Pᵢ, NADP⁺", "O₂, ATP, NADPH"],
            ["Işıktan bağımsız (*Calvin cycle*)", "Stroma", "CO₂, ATP, NADPH", "PGAL → glikoz, ADP + Pᵢ, NADP⁺"]
          ], not: "Sınavda böyle yaz: *The light-dependent reactions convert light energy into chemical energy (ATP and NADPH); the Calvin cycle uses this energy to fix CO₂ into sugar.*" },
        { tip: "tuzak", metin: "O₂ suyun parçalanmasından (fotoliz) gelir, CO₂'den değil.", yanlis: "Açığa çıkan oksijen CO₂'den gelir.", dogru: "Açığa çıkan O₂ suyun ışıkla parçalanmasından gelir; CO₂'nin karbonu şekere girer." }
      ]
    },
    {
      baslik: "Deneyin dili: amaç, hipotez, değişkenler",
      kisa: "Bir şeyi değiştir, birini ölç, gerisini sabit tut.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Aim", tr: "amaç", tanim: "Deneyin neyi göstermek istediği. Genelde “… etkisini incelemek / … kullanıldığını göstermek”.", ornek: "To investigate whether CO₂ is needed for photosynthesis." },
            { ikon: "💡", terim: "Hypothesis", tr: "hipotez", tanim: "Sınanacak, test edilebilir tahmin: “Eğer … ise … olur.”", ornek: "If CO₂ is removed, the plant will not produce oxygen bubbles." },
            { ikon: "🎚️", terim: "Independent variable", tr: "bağımsız değişken", tanim: "Deneyi yapanın değiştirdiği tek etken.", ornek: "Lambanın bitkiye uzaklığı" },
            { ikon: "📏", terim: "Dependent variable", tr: "bağımlı değişken", tanim: "Ölçülen sonuç.", ornek: "2 dakikadaki kabarcık sayısı" },
            { ikon: "🔒", terim: "Controlled variables", tr: "sabit tutulanlar", tanim: "Sonucu etkileyebileceği için bütün düzeneklerde aynı tutulanlar.", ornek: "Sıcaklık, bitkinin türü ve boyu, su miktarı, süre" }
          ] },
        { tip: "ikili", sol: { baslik: "Kontrol grubu", ikon: "✅", maddeler: ["Değiştirilen etken normal hâliyle", "Karşılaştırma için temel", "Ör. ışıkta, CO₂'li su"] },
          sag: { baslik: "Deney grubu", ikon: "🧪", maddeler: ["Yalnız tek etken değiştirilmiş", "Fark bu etkenden gelir", "Ör. NaOH eklenmiş su"] },
          oyun: [
            { metin: "Glikoz çözeltisi + sağlıklı maya hücreleri", cevap: "sol", neden: "Hiçbir şey engellenmemiş: kontrol." },
            { metin: "Glikoz çözeltisi + maya + ATP üretimini engelleyen madde", cevap: "sag", neden: "Tek fark engelleyici madde: deney grubu." },
            { metin: "Karanlıkta tutulan yaprak parçası", cevap: "sag", neden: "Işık kaldırılmış: deney grubu." }
          ] }
      ]
    },
    {
      baslik: "O₂ üretildiğini göstermek",
      kisa: "Su bitkisinden çıkan kabarcıklar O₂'dir; ışık azalınca azalır.",
      bloklar: [
        { tip: "adimlar", baslik: "*Elodea* düzeneği", adimlar: [
            { baslik: "Kur", metin: "*Elodea* suya konur, üstüne huni ve su dolu ters tüp. Suya biraz sodyum bikarbonat (CO₂ kaynağı) eklenebilir." },
            { baslik: "Karanlık", metin: "Önce karanlıkta beklenir: kabarcık çıkmaz, çünkü ışık yokken fotosentez olmaz." },
            { baslik: "Işık", metin: "Lamba farklı uzaklıklara konur, bitki ışığa alışınca belli sürede kabarcıklar sayılır. Işığın rengi de önemlidir: klorofil mor (mavi-mor) ve kırmızı ışığı en iyi, yeşili en az soğurur. Mor ışık kullanılırsa fotosentez hızlıdır, çok kabarcık çıkar." },
            { baslik: "Kanıtla", metin: "Tüpte toplanan gaz, için için yanan kıymığı alevlendirir: gaz oksijendir. Kabarcık saymak yerine tüpteki su seviyesinin düşmesi ya da kılcal borudaki kabarcığın ilerlemesi de ölçülebilir." }
          ] },
        { tip: "ornek", baslik: "Örnek veri: uzaklık ve kabarcık", durum: "Lamba 10 cm'de 2 dakikada 120, 15 cm'de 54, 20 cm'de 30 kabarcık sayıldı. Sıcaklık sabit tutuldu.", adimlar: [
            "Amaç: ışık şiddetinin fotosentez hızına etkisini incelemek.",
            "Bağımsız değişken: lambanın uzaklığı (ışık şiddeti). Bağımlı değişken: 2 dakikadaki kabarcık sayısı.",
            "Örüntü: uzaklık arttıkça ışık şiddeti azalır, kabarcık sayısı azalır."
          ], sonuc: "Sınavda böyle yaz: *As the distance from the lamp increases, light intensity decreases, so the rate of photosynthesis and the number of oxygen bubbles decrease.*" },
        { tip: "tuzak", metin: "Kabarcık sayısı fotosentez hızının ölçüsüdür, ama yalnız diğer etkenler sabitse.", yanlis: "Sıcaklık da değişse, kabarcık farkı yine yalnız ışıktan gelir.", dogru: "Birden fazla etken değişirse farkın nedeni ayrılamaz; sıcaklık sabit tutulmalı." },
        { tip: "not", metin: "Soru “karanlıkta neden kabarcık yok, ==mor ışıkta== neden var?” diye gelebilir. Cevapta iki şey olmalı: ışık yoksa fotosentez olmaz; mor ışık klorofilce iyi soğurulduğu için fotosentez hızlıdır. Sınavda böyle yaz: *In the dark the plant cannot photosynthesise, so no oxygen bubbles form. Purple light is well absorbed by chlorophyll, so the rate of photosynthesis is high and oxygen bubbles form.*" }
      ]
    },
    {
      baslik: "CO₂ kullanıldığını göstermek",
      kisa: "CO₂'yi tutan madde eklenirse fotosentez durur; BTB rengi CO₂'yi gösterir.",
      bloklar: [
        { tip: "ikili", sol: { baslik: "NaOH ile (CO₂ tutucu)", ikon: "🧴", maddeler: ["NaOH ortamdaki CO₂'yi tutar", "Bitki CO₂ bulamaz", "Kabarcık çıkmaz, nişasta oluşmaz"] },
          sag: { baslik: "Bikarbonat ile (CO₂ kaynağı)", ikon: "🫧", maddeler: ["Sodyum bikarbonat suya CO₂ verir", "Fotosentez hızlanır", "Daha çok kabarcık"] } },
        { tip: "tablo", baslik: "BTB (bromtimol mavisi) ile CO₂ izleme", head: ["Renk", "Ortamda CO₂", "Ne oldu?"], rows: [
            ["Sarı", "Çok (asidik)", "CO₂ birikti (solunum ya da karanlık)"],
            ["Yeşil", "Orta", "Başlangıç ya da değişim yok"],
            ["Mavi", "Az", "CO₂ kullanıldı (ışıkta fotosentez)"]
          ], not: "CO₂ suda asit oluşturur; fotosentezde CO₂ kullanılınca asitlik azalır, pH artar ve gösterge sarıdan maviye döner." },
        { tip: "tuzak", metin: "NaOH'li düzenekte kabarcık çıkmaması ışığın yetmediğini göstermez; CO₂'nin gerekli olduğunu gösterir.", yanlis: "NaOH'li düzenekte ışık az olduğu için kabarcık çıkmadı.", dogru: "Işık eşitken tek fark NaOH: CO₂ tutulduğu için fotosentez olmadı." }
      ]
    },
    {
      baslik: "Nişasta üretildiğini göstermek",
      kisa: "Yaprak iyotla mavi-siyah olursa nişasta var: fotosentez olmuş.",
      bloklar: [
        { tip: "adimlar", baslik: "Nişasta testi (iyot / Lugol)", adimlar: [
            { baslik: "Karanlıkta beklet", metin: "Bitki 24 saat karanlıkta tutulur: yapraktaki nişasta harcanır (başlangıçta nişasta olmasın)." },
            { baslik: "Işığa çıkar", metin: "Bir yaprağın bir kısmı ışık geçirmeyen kâğıtla örtülür, bitki birkaç saat ışıkta kalır." },
            { baslik: "Kaynat ve alkole koy", metin: "Kaynatmak hücreleri öldürür, enzimleri durdurur ve zarları geçirgen yapar, yaprak yumuşar; böylece iyot nişastaya ulaşır (*to kill the cells and expose the starch*). Sıcak alkol klorofili çıkarır, yaprak beyazlaşır ve renk değişimi görülür." },
            { baslik: "İyot damlat", metin: "Sarı-kahverengi iyot, nişasta olan yerde mavi-siyaha döner." }
          ] },
        { tip: "ornek", baslik: "Örtülü yaprak", durum: "Örtülmeyen kısım mavi-siyah, örtülen kısım sarı-kahverengi kaldı.", adimlar: [
            "Örtülen kısım ışık almadı: fotosentez olmadı, nişasta yok.",
            "Örtülmeyen kısım ışık aldı: fotosentez oldu, glikoz nişastaya çevrildi."
          ], sonuc: "Sonuç: fotosentez için ışık gereklidir ve fotosentezin ürünü nişasta olarak depolanır." }
      ]
    },
    {
      baslik: "Gözlemden sonuca: sınav cevabı",
      kisa: "Gözlemi söyle, nedenini maddeyle bağla, sonucu yaz.",
      bloklar: [
        { tip: "adimlar", baslik: "Üç cümlelik cevap", adimlar: [
            { baslik: "Gözlem", metin: "Ne görüldü? (kabarcık yok, renk mavi, yaprak mavi-siyah…)" },
            { baslik: "Neden", metin: "Hangi madde kullanıldı / üretildi ya da eksikti? (CO₂ tutuldu, O₂ çıktı, nişasta oluştu…)" },
            { baslik: "Sonuç", metin: "Bu, fotosentez hakkında neyi gösterir? (CO₂ gereklidir, ışık gereklidir…)" }
          ] },
        { tip: "ornek", baslik: "ATP deneyinden örnek (MEB tarzı)", durum: "İki petri: 1) glikoz + maya, 2) glikoz + maya + ATP üretimini engelleyen madde. 1'de çoğalma var, 2'de yok.", adimlar: [
            "Soru öner: *Can a cell whose ATP production is blocked stay alive? Is energy really vital for life?*",
            "Gözlem: ATP üretimi engellenen hücreler çoğalmadı.",
            "Neden: çoğalma enerji ister; ATP yoksa bu enerji sağlanamaz ve ATP başka hücreden de gelemez.",
            "Sonuç: ATP canlılık için zorunludur."
          ], sonuc: "*Without ATP, cells cannot carry out energy-requiring processes such as growth and division, so ATP is vital for life.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kullanılan: CO₂, H₂O, ışık · Üretilen: glikoz (nişasta), O₂",
            "O₂ sudan gelir (fotoliz; Ruben ve Kamen'in ağır oksijen ¹⁸O deneyi gösterir) · Toplanan gazın O₂ olduğunu, yeniden alevlenen kıymık gösterir",
            "Karanlıkta kabarcık yok (fotosentez yok); mor ışıkta çok kabarcık: klorofil mor ve kırmızı ışığı iyi soğurur",
            "CO₂ gereklidir: NaOH CO₂'yi tutar → fotosentez olmaz",
            "BTB: sarı = çok CO₂, mavi = az CO₂",
            "Nişasta: önce karanlık, sonra kaynat + alkol + iyot → mavi-siyah",
            "Bağımsız = değiştirdiğin, bağımlı = ölçtüğün, sabitler = aynı tuttukların"
          ] }
      ]
    }
  ],
  sorular: [
    { q: "In an experiment, identical Elodea plants are kept under the same light. Sodium hydroxide (NaOH) is added to only one setup, and no gas bubbles form there. What does this setup show?",
      opts: ["Light is needed for photosynthesis to take place", "Carbon dioxide is needed for photosynthesis", "Oxygen is used up during photosynthesis", "Water is produced during photosynthesis"], a: 1,
      why: "NaOH ortamdaki CO₂'yi tutar. Işık iki düzenekte de aynı; tek fark NaOH. Kabarcık çıkmaması CO₂'nin gerekli olduğunu gösterir." },
    { q: "Before testing a leaf for starch, the plant is kept in the dark for 24 hours. Why?",
      opts: ["To use up the starch already in the leaves", "To increase the amount of chlorophyll", "To make the leaf absorb more water before the test", "To kill the cells before the test"], a: 0,
      why: "Deneyden önce yapraktaki nişasta harcanmalı; böylece sonra bulunan nişasta deney sırasında yapılan fotosentezden gelir." },
    { q: "A lamp is placed at 10, 15 and 20 cm from an Elodea plant and the bubbles in 2 minutes are counted. What is the dependent variable?",
      opts: ["The distance of the lamp", "The temperature of the water", "The number of bubbles in 2 minutes", "The type and size of the plant used in each setup"], a: 2,
      why: "Bağımlı değişken ölçülen sonuçtur: kabarcık sayısı. Uzaklık bağımsız değişken, sıcaklık ve bitki türü sabit tutulanlardır." },
    { q: "Bromothymol blue in a test tube with a water plant turns from yellow to blue in the light. What does this colour change show?",
      opts: ["CO₂ was released by respiration", "Starch was produced in the leaves", "Oxygen made the water more acidic", "CO₂ was used up by photosynthesis"], a: 3,
      why: "Sarı çok CO₂, mavi az CO₂ demektir. Işıkta bitki CO₂'yi fotosentezde kullandı; asitlik azaldı, renk maviye döndü." },
    { q: "Where does the oxygen released in photosynthesis come from?",
      opts: ["Splitting of water (photolysis)", "The carbon dioxide taken in from the air", "The glucose produced in the stroma", "The breakdown of ATP in the thylakoid"], a: 0,
      why: "Işığa bağlı tepkimelerde su ışıkla parçalanır (fotoliz); O₂ buradan gelir. CO₂'nin karbonu şekere, oksijeni şekere ve oluşan suya geçer." }
  ]
};
