/* Kitora not defteri · en404 · 4.4 Karşı Argüman, İkna Yolları ve Safsatalar
   Okul dersi (10. sınıf English · Unit 4). Yapı ve kalıpları verir; hazır essay yazmaz. */
window.DEFTER = {
  slug: "en404",
  amac: "Argümanını güçlendirmeyi öğreneceksin: karşı görüşü adil sunup kabul etmeyi ve çürütmeyi, *ethos–pathos–logos* ile ikna yollarını ve yaygın safsataları (*logical fallacies*) tanımayı.",
  bolumler: [
    {
      baslik: "Karşı argüman neden gerekli?",
      kisa: "Karşı görüşü adil ele alan yazar daha güvenilir ve ikna edicidir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🛡️", baslik: "Karşı argümanı ele alan", maddeler: ["Okuyucunun itirazını önceden cevaplar", "Güvenilir (*ethos*) ve hazırlıklı görünür"] },
          sag: { ikon: "🙈", baslik: "Yok sayan", maddeler: ["İtirazlar cevapsız kalır", "Tek taraflı ve zayıf görünür"] } },
        { tip: "liste", baslik: "Karşı görüşü tanıtan kalıplar", maddeler: [
            { ikon: "🗣️", baslik: "*Critics argue that …*", metin: "Karşı tarafı adil sunar." },
            { ikon: "🗣️", baslik: "*Opponents contend that … / Some may object that …*", metin: "Başka bir tanıtma kalıbı." },
            { ikon: "🤝", baslik: "*Admittedly, … / It is true that …*", metin: "Haklı yanı kabul eder." },
            { ikon: "↩️", baslik: "*However, this objection overlooks …*", metin: "Çürütmeye geçer." }
          ] }
      ]
    },
    {
      baslik: "Kabul et ve çürüt",
      kisa: "Karşı görüşü adil yaz, haklı yanını kabul et, sonra çürüt.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚔️", terim: "Counterargument", tr: "karşı argüman", tanim: "Tezine karşı en güçlü itiraz. Zayıf ya da komik bir versiyonunu değil, gerçekçi hâlini ver.", ornek: "Geç başlama servis düzenini bozar." },
            { ikon: "🤝", terim: "Concession", tr: "kabul", tanim: "Karşı görüşün haklı olan kısmını açıkça kabul etmek. Tezini zayıflatmaz, adil gösterir.", ornek: "Servis saatleri değişmek zorunda kalır." },
            { ikon: "🛠️", terim: "Rebuttal", tr: "çürütme", tanim: "Karşı görüşün neden tezi yıkmadığını kanıt ve mantıkla gösterme.", ornek: "Maliyet geçicidir, fayda kalıcıdır." }
          ] },
        { tip: "tablo", baslik: "Üç çürütme yolu", head: ["Yol", "Ne yapar?", "Kalıp"], rows: [
            ["Kanıtla", "Karşı iddiayla çelişen veri ya da örnek gösterir", "*However, data from … indicate that …*"],
            ["Mantıkla", "Karşı görüşün varsayımındaki boşluğu gösterir", "*This objection assumes that …, which …*"],
            ["Tartarak", "Haklı olsa da küçük kaldığını gösterir", "*Although …, the benefits outweigh …*"]
          ] },
        { tip: "ornek", baslik: "Karşı argüman iskeleti", durum: "Tezin: \"Okullar ilk dersi 09.00'a almalı.\" Karşı görüş: \"Servis ve spor saatleri sıkışır.\" Paragrafın iskeletini çıkar.", adimlar: [
            "Karşı görüşü adil sun: *Critics argue that later start times disrupt bus schedules and after-school sports.*",
            "Haklı yanı kabul et: *This concern is reasonable, since schedules would need adjustment.*",
            "Çürütme yolunu seç: bu örnekte \"tartarak\": maliyet geçici, fayda kalıcı.",
            "Tezle bağla: *However, the benefits for sleep and attendance outweigh this logistical cost.* Kanıtı kaynaktan al ve (Soyad Sayfa) ile atıfla."
          ], sonuc: "Karşı görüş yok sayılmadı; kabul edilip kanıtla çürütüldü ve tez güçlendi." },
        { tip: "tuzak", metin: "Karşı argümanın en zayıf hâlini yazıp çürütmek kolay görünür ama ==straw man== olur.", yanlis: "Karşıtlar çocukların hiç uyumamasını istiyor.", dogru: "Karşı tarafın en güçlü itirazını adil biçimde yaz, sonra cevapla." }
      ]
    },
    {
      baslik: "*Ethos*, *pathos*, *logos*",
      kisa: "Güven, duygu ve mantık birlikte ikna eder; ağırlık metne göre değişir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏛️", terim: "Ethos", tr: "güvenilirlik", tanim: "Yazarın ya da kaynağın güvenilir olduğunu gösterir: uzmanlık, tarafsızlık, doğru kaynak.", ornek: "Hakemli dergideki araştırmayı alıntılamak." },
            { ikon: "❤️", terim: "Pathos", tr: "duygu", tanim: "Okuyucunun duygularına seslenir: hikâye, görsel, çarpıcı ifade.", ornek: "Uykusuz bir öğrencinin kısa anlatımı." },
            { ikon: "🧮", terim: "Logos", tr: "mantık", tanim: "Akla seslenir: veri, istatistik, mantıksal sıralama, açık akıl yürütme.", ornek: "Anket yüzdesi ve neden-sonuç açıklaması." }
          ] },
        { tip: "grafik", baslik: "Üç ikna yolunun ağırlığı (öğretici örnek)", xlabel: "İkna yolu", ylabel: "Ağırlık", xmax: 4, ymax: 10,
          xticks: [{ v: 1, label: "Ethos" }, { v: 2, label: "Pathos" }, { v: 3, label: "Logos" }],
          yticks: [{ v: 3, label: "az" }, { v: 7, label: "çok" }],
          ogeler: [
            { id: "e", tip: "alan", renk: 1, noktalar: [[0.7, 0], [1.3, 0], [1.3, 0], [0.7, 0]] },
            { id: "p", tip: "alan", renk: 2, noktalar: [[1.7, 0], [2.3, 0], [2.3, 0], [1.7, 0]] },
            { id: "l", tip: "alan", renk: 3, noktalar: [[2.7, 0], [3.3, 0], [3.3, 0], [2.7, 0]] }
          ],
          durumlar: [
            { metin: "Önce boş çerçeve. Her metin bu üç yolu farklı oranda kullanır." },
            { metin: "Yalnızca duyguya yaslanan bir reklam: *pathos* çok, ==kanıt ve güven az==.", set: {
                e: { noktalar: [[0.7, 0], [1.3, 0], [1.3, 1.5], [0.7, 1.5]] }, p: { noktalar: [[1.7, 0], [2.3, 0], [2.3, 9], [1.7, 9]] }, l: { noktalar: [[2.7, 0], [3.3, 0], [3.3, 1], [2.7, 1]] } } },
            { metin: "Dengeli bir konuşma: üçü de var.", set: {
                e: { noktalar: [[0.7, 0], [1.3, 0], [1.3, 6], [0.7, 6]] }, p: { noktalar: [[1.7, 0], [2.3, 0], [2.3, 5], [1.7, 5]] }, l: { noktalar: [[2.7, 0], [3.3, 0], [3.3, 7], [2.7, 7]] } } },
            { metin: "Akademik essay: *logos* ağırlıklı, *ethos* kaynaklarla kurulur, *pathos* ölçülü.", set: {
                e: { noktalar: [[0.7, 0], [1.3, 0], [1.3, 7], [0.7, 7]] }, p: { noktalar: [[1.7, 0], [2.3, 0], [2.3, 3], [1.7, 3]] }, l: { noktalar: [[2.7, 0], [3.3, 0], [3.3, 9], [2.7, 9]] } } }
          ] },
        { tip: "liste", baslik: "Sınavda ve essay'de böyle yaz", maddeler: [
            { ikon: "🏛️", baslik: "*The author builds credibility (ethos) by citing …*", metin: "Güvenilirliği kaynakla ilişkilendirir." },
            { ikon: "🧮", baslik: "*The statistic appeals to logos because …*", metin: "Veriyi ve nedenini söyler." },
            { ikon: "❤️", baslik: "*The anecdote evokes pathos by …*", metin: "Duygunun nasıl uyandığını açıklar." }
          ] }
      ]
    },
    {
      baslik: "Safsatalar 1: kişiye, kalabalığa, duyguya yaslananlar",
      kisa: "Bu safsatalar kanıt yerine kişiyi, kalabalığı ya da duyguyu kullanır.",
      bloklar: [
        { tip: "tablo", baslik: "Safsata (*fallacy*) tablosu 1", head: ["Safsata", "Ne yapar?", "Örnek"], rows: [
            ["*Ad hominem*", "Argüman yerine kişiye saldırır", "\"Bu araştırmacı kopya çekmiş, bulgusu yanlıştır.\""],
            ["*Bandwagon*", "Çoğunluk yapıyor diye doğru sayar", "\"Herkes bu uygulamaya geçti, en iyisi odur.\""],
            ["*Appeal to emotion*", "Kanıt yerine yalnızca duyguyu kullanır", "\"Düşünün, küçücük çocuklar ağlıyor, o hâlde kural yanlıştır.\""],
            ["*False authority*", "İlgisiz bir ünlüyü uzman gibi gösterir", "\"Ünlü bir futbolcu bu vitaminin sınav notunu artırdığını söylüyor.\""]
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Sağlam argüman", maddeler: ["Kanıt ve mantığa dayanır", "Konuya uygun uzmana başvurur"] },
          sag: { ikon: "⚠️", baslik: "Safsata", maddeler: ["Kişiye, kalabalığa ya da duyguya yaslanır", "Kanıt eksiktir"] },
          oyun: [
            { metin: "Bu araştırmacıya güvenme; geçen yıl bir tahmini tutmadı, bulgusu da yanlıştır.", cevap: "sag", neden: "*Ad hominem*: kişiye saldırıyor, veriye değil." },
            { metin: "Sınıfın yarısı böyle düşünüyor, o hâlde doğrudur.", cevap: "sag", neden: "*Bandwagon*: çoğunluk kanıt değildir." },
            { metin: "Uyku uzmanı Dr. Aydın, 20 yıllık hakemli çalışmasının sonucunu verdi (Aydın 12).", cevap: "sol", neden: "Konuyla ilgili uzman ve kanıt." },
            { metin: "1200 öğrencilik örneklemde uyku süresiyle devamsızlık ilişkisi bulundu (Kaya 14).", cevap: "sol", neden: "Veriye dayanıyor." }
          ] },
        { tip: "tuzak", metin: "Her uzman alıntısı safsata değildir.", yanlis: "Uzmandan alıntı yaptım, o hâlde *false authority* yaptım.", dogru: "Alıntılanan kişi ==konunun uzmanıysa== ve kanıtı gösteriyorsa meşrudur; ünlü ama ilgisiz kişi safsatadır." }
      ]
    },
    {
      baslik: "Safsatalar 2: mantık hataları",
      kisa: "Bu safsatalar akıl yürütmedeki bir adımı atlar ya da bozar.",
      bloklar: [
        { tip: "tablo", baslik: "Safsata tablosu 2", head: ["Safsata", "Ne yapar?", "Örnek"], rows: [
            ["*Straw man*", "Karşı görüşü çarpıtıp kolayca yıkar", "\"Karşıtlar okuldaki düzeni tamamen yıkmak istiyor.\""],
            ["*Slippery slope*", "Küçük adımın felakete gideceğini kanıtsız söyler", "\"Servis saatini değiştirirsek yarın okul kapanır.\""],
            ["*False dilemma*", "Yalnızca iki seçenek varmış gibi gösterir", "\"Ya telefon tamamen serbest, ya da tam yasak.\""],
            ["*Hasty generalization*", "Küçük örneklemden büyük sonuç çıkarır", "\"Üç arkadaşım geç yatıyor; tüm gençler geç yatıyor.\""],
            ["*Post hoc*", "Ardışıklığı neden-sonuç sanır", "\"Yeni program geldi, notlar düştü; program notları düşürdü.\""],
            ["*Circular reasoning*", "İspatlanacak şeyi kanıt gibi kullanır", "\"Kural adildir, çünkü haksız değildir.\""],
            ["*Red herring*", "Konudan ilgisiz bir şeyle dikkat dağıtır", "\"Telefon kuralını konuşurken kantin fiyatlarına bakın.\""]
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Sağlam argüman", maddeler: ["Adım adım ve kanıtlı", "Karşı görüşü adil ele alır"] },
          sag: { ikon: "⚠️", baslik: "Safsata", maddeler: ["Akıl yürütmede boşluk ya da çarpıtma", "Kanıtı aşan sonuç"] },
          oyun: [
            { metin: "Telefon kuralını eleştirenler okuldaki düzeni tamamen yıkmak istiyor.", cevap: "sag", neden: "*Straw man*: karşı görüş çarpıtılmış." },
            { metin: "Ya telefonlar tamamen serbest olacak ya da okul tamamen disiplinsiz olacak.", cevap: "sag", neden: "*False dilemma*: ara çözümler yok sayılıyor." },
            { metin: "Üç arkadaşım geç yatıyor; bu yüzden bütün gençler geç yatıyor.", cevap: "sag", neden: "*Hasty generalization*: örneklem çok küçük." },
            { metin: "Karşıtlar maliyetin yüksek olduğunu söylüyor; ancak iki okulun verisi maliyetin ilk yıldan sonra düştüğünü gösteriyor.", cevap: "sol", neden: "Karşı görüş adil sunulmuş, kanıtla cevaplanmış." },
            { metin: "Yeni ders programından sonra notlar düştü; demek ki program notları düşürdü.", cevap: "sag", neden: "*Post hoc*: sonra gelmek neden olmak demek değildir." }
          ] },
        { tip: "tuzak", metin: "Safsatanın adını yazmak yetmez; neden hata olduğunu da açıkla.", yanlis: "Bu bir *straw man*.", dogru: "*This is a straw man because it misrepresents the opposing view and ignores its strongest point.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Karşı argümanı yok saymak zayıflık, adil ele almak güçtür.",
            "Sıra: karşı görüşü adil sun → haklı yanı kabul et (*concession*) → çürüt (*rebuttal*) → tezle bağla.",
            "Çürütme yolları: kanıt, mantık, tartma (maliyet geçici, fayda büyük).",
            "*Ethos* güven, *pathos* duygu, *logos* mantıktır; akademik essay'de *logos* ağırlıklı, *ethos* kaynaklarla kurulur.",
            "*Ad hominem*, *bandwagon*, *appeal to emotion*, *false authority* kanıt yerine kişiyi, kalabalığı ya da duyguyu kullanır.",
            "*Straw man*, *slippery slope*, *false dilemma*, *hasty generalization*, *post hoc*, *circular reasoning*, *red herring* mantığı bozar.",
            "Konunun uzmanına başvurmak safsata değildir; ilgisiz ünlü kişiye başvurmak safsatadır.",
            "Safsatayı adlandırırken nedenini de açıkla."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir okul müdürü şöyle diyor: \"Servis saatini 15 dakika değiştirirsek yarın okul tamamen kapanır.\" Bu argüman hangi safsatayı içerir?",
      opts: ["*Ad hominem*", "*Slippery slope*", "*Straw man*", "*Bandwagon*"], a: 1,
      why: "Küçük bir adımın kanıtsız biçimde felakete yol açacağı söyleniyor: *slippery slope*. *Straw man* çekici ama yanlış; burada karşı görüş çarpıtılmıyor, sonuç abartılıyor." },
    { q: "Tez: \"Schools should start later.\" Karşı görüş: \"Bus schedules would be disrupted.\" Aşağıdakilerden hangisi çürütme (*rebuttal*) cümlesidir?",
      opts: ["Some people say bus schedules would change.", "Admittedly, schedules would need adjustment.", "However, schools that shifted start times reported that route changes were completed within a semester, so the cost is temporary.", "Therefore, schools should start later."], a: 2,
      why: "Çürütme karşı görüşe kanıtla cevap verir. İlk şık karşı görüşü tanıtır, ikinci şık kabul (*concession*) eder, dördüncü şık sonuç cümlesidir." },
    { q: "Bir paragraf, 1200 öğrencilik anketi ve bir üniversite profesörünün hakemli çalışmasını alıntılıyor. Hangi ikna yolları baskındır?",
      opts: ["Yalnızca *pathos*", "*Pathos* ve *red herring*", "Yalnızca *ethos*", "*Logos* ve *ethos*"], a: 3,
      why: "Anket verisi mantığa (*logos*), uzman ve hakemli kaynak ise güvenilirliğe (*ethos*) seslenir. Yalnızca *ethos* çekici bir cevaptır ama veri de kullanılıyor." },
    { q: "Aşağıdaki tabloda safsata adlarını eşleştiren öğrenci bir hata yaptı. Hangi satır hatalıdır?",
      fig: { type: "table", head: ["Satır", "İfade", "Etiket"], rows: [["1", "Don't trust Demir's data; she dropped out of college.", "Ad hominem"], ["2", "Everyone is switching to this app, so it must be best.", "Bandwagon"], ["3", "Either we ban all phones or students will never learn.", "Straw man"], ["4", "I met two rude drivers, so all drivers are rude.", "Hasty generalization"]] },
      opts: ["Satır 1", "Satır 2", "Satır 3", "Satır 4"], a: 2,
      why: "Satır 3 iki seçenek sunuyor: *false dilemma*. *Straw man* karşı görüşü çarpıtır; burada çarpıtma yok. Diğer üç etiket doğru." },
    { q: "Hangisi uzmana başvurmayı meşru biçimde kullanan bir cümledir?",
      opts: ["A pediatric sleep researcher reports findings from her peer-reviewed study on teen sleep (Aydın 12).", "A famous singer says this laptop is best for coding.", "Everyone online says this study is wrong.", "The author is rude, so the study must be wrong."], a: 0,
      why: "Konunun uzmanı ve kanıt (hakemli çalışma) var. İkinci şık ilgisiz bir ünlü (*false authority*), üçüncüsü *bandwagon*, dördüncüsü *ad hominem*." }
  ]
};
