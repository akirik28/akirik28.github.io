/* Kitpath not defteri · en404 · 4.4 Karşı Argüman, İkna Yolları ve Safsatalar
   Okul dersi (10. sınıf English · Unit 4). Yapı ve kalıpları verir; hazır essay yazmaz.
   Kaynak: Argumentative Essay ve Persuasive Speech belgeleri (Dr Byrd). Ethos/pathos/logos ve safsata kısımları "ek bilgi"dir, öğretmen belgesinde yoktur. */
window.DEFTER = {
  slug: "en404",
  amac: "Argümanını güçlendirmeyi öğreneceksin: tarafsız ve eleştirel ama yargılayıcı olmayan bir duruşla karşı görüşe pay vermeyi (*concession*), çözüm sunmayı ve rubrikte nerede puan getirdiğini. Ek bilgi olarak *ethos–pathos–logos* ve yaygın safsataları da tanıyacaksın.",
  bolumler: [
    {
      baslik: "Tarafsız ve eleştirel ol, yargılama",
      kisa: "Karşı görüşleri dikkate al; eleştirel ol ama yargılayıcı olma.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔍", baslik: "Eleştirel (*critical*)", maddeler: ["Karşı görüşü adil sunar", "Kanıtla itiraz eder"] },
          sag: { ikon: "⚖️", baslik: "Yargılayıcı (*judgmental*)", maddeler: ["Karşı tarafı küçümser", "Kişiyi suçlar, kanıt vermez"] },
          oyun: [
            { metin: "This objection overlooks evidence from two pilot programs.", cevap: "sol", neden: "Karşı görüşe kanıtla itiraz ediyor." },
            { metin: "Opponents are simply lazy and uninformed.", cevap: "sag", neden: "Kişileri yargılıyor, argümanı ele almıyor." },
            { metin: "Critics argue that later start times raise costs; the data suggest the costs are temporary.", cevap: "sol", neden: "Önce adil sunuyor, sonra kanıtla cevaplıyor." },
            { metin: "Only a fool would support the old schedule.", cevap: "sag", neden: "Hakaret, argüman değil." }
          ] },
        { tip: "liste", baslik: "Sınavda böyle yaz", maddeler: [
            { ikon: "🗣️", baslik: "*Critics argue that …*", metin: "Karşı tarafı adil sunar." },
            { ikon: "🗣️", baslik: "*Opponents contend that … / Some may object that …*", metin: "Başka bir tanıtma kalıbı." },
            { ikon: "↩️", baslik: "*However, this objection overlooks …*", metin: "Eleştirir ama yargılamaz." }
          ] }
      ]
    },
    {
      baslik: "Concession ve çözüm: rubrikte nerede puan getirir?",
      kisa: "Concession ve çözüm zorunludur; rubrikte puanı vardır.",
      bloklar: [
        { tip: "tablo", baslik: "Concession ve çözüm nerede aranır?", head: ["Yer", "Ne aranır?", "Puan"], rows: [
            ["Full Outline (8 Nisan)", "Karşı tarafa concession", "5"],
            ["Full Outline (8 Nisan)", "Çözüm önerisi", "5"],
            ["Final essay", "Concession ve çözüm yoksa puan kırılır", "Rubrik içinde"],
            ["Persuasive speech", "Ana noktalar, araştırma, konuşmacı görüşü, concession(lar) ve çözüm(ler): ikna edici içerik", "15"]
          ], vurgu: 3, not: "Sınavda böyle yaz: *Admittedly, [opposing point]; however, [response], so a practical solution is to [solution].*" },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚔️", terim: "Counterargument", tr: "karşı argüman", tanim: "Tezine karşı en güçlü itiraz. Zayıf ya da komik bir versiyonunu değil, gerçekçi hâlini ver.", ornek: "Geç başlama servis düzenini bozar." },
            { ikon: "🤝", terim: "Concession", tr: "karşı görüşe pay", tanim: "Karşı görüşün haklı olan kısmını açıkça kabul etmek. Tezini zayıflatmaz, seni adil gösterir.", ornek: "Servis saatleri değişmek zorunda kalır." },
            { ikon: "🛠️", terim: "Solution", tr: "çözüm / öneri", tanim: "Sorunun nasıl aşılabileceğine dair somut öneri.", ornek: "Servis saatleri kademeli olarak ayarlanabilir." },
            { ikon: "↩️", terim: "Rebuttal", tr: "çürütme (ek bilgi)", tanim: "Ek bilgi: karşı görüşün neden tezi yıkmadığını kanıt ve mantıkla gösterme.", ornek: "Maliyet geçicidir, fayda kalıcıdır." }
          ] },
        { tip: "tuzak", metin: "Karşı argümanın en zayıf hâlini yazıp çürütmek kolay görünür ama haksızdır.", yanlis: "Karşıtlar çocukların hiç uyumamasını istiyor.", dogru: "Karşı tarafın en güçlü itirazını adil biçimde yaz, ==haklı yanını kabul et==, sonra cevapla ve çözüm öner." }
      ]
    },
    {
      baslik: "Karşı argüman paragrafının iskeleti",
      kisa: "Adil sun, haklı yanı kabul et, cevap ver, çözüm öner.",
      bloklar: [
        { tip: "ornek", baslik: "Karşı argüman iskeleti", durum: "Tezin: “Okullar ilk dersi 09.00'a almalı.” Karşı görüş: “Servis ve spor saatleri sıkışır.” Paragrafın iskeletini çıkar.", adimlar: [
            "Karşı görüşü adil sun: *Critics argue that later start times disrupt bus schedules and after-school sports.*",
            "Haklı yanı kabul et (*concession*): *This concern is reasonable, since schedules would need adjustment.*",
            "Cevap ver: kanıtı kaynaktan al ve (Soyad Sayfa) ile atıfla. *However, the benefits for sleep and attendance outweigh this logistical cost.*",
            "Çözüm öner: *One practical solution is to adjust bus routes gradually over one semester.*"
          ], sonuc: "Karşı görüş yok sayılmadı; kabul edildi, kanıtla cevaplandı ve çözümle kapandı. Tez güçlendi." },
        { tip: "tablo", baslik: "Ek bilgi: üç cevap yolu", head: ["Yol", "Ne yapar?", "Kalıp"], rows: [
            ["Kanıtla", "Karşı iddiayla çelişen veri ya da örnek gösterir", "*However, data from … indicate that …*"],
            ["Mantıkla", "Karşı görüşün varsayımındaki boşluğu gösterir", "*This objection assumes that …, which …*"],
            ["Tartarak", "Haklı olsa da küçük kaldığını gösterir", "*Although …, the benefits outweigh …*"]
          ] }
      ]
    },
    {
      baslik: "Ek bilgi: *ethos*, *pathos*, *logos*",
      kisa: "Ek bilgi: güven, duygu ve mantık birlikte ikna eder.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏛️", terim: "Ethos", tr: "güvenilirlik", tanim: "Yazarın ya da kaynağın güvenilir olduğunu gösterir: uzmanlık, tarafsızlık, doğru kaynak.", ornek: "Hakemli dergideki araştırmayı alıntılamak." },
            { ikon: "❤️", terim: "Pathos", tr: "duygu", tanim: "Okuyucunun duygularına seslenir: hikâye, görsel, çarpıcı ifade.", ornek: "Uykusuz bir öğrencinin kısa anlatımı." },
            { ikon: "🧮", terim: "Logos", tr: "mantık", tanim: "Akla seslenir: veri, istatistik, mantıksal sıralama.", ornek: "Anket yüzdesi ve neden-sonuç açıklaması." }
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
      baslik: "Ek bilgi: safsatalar 1, kişiye, kalabalığa, duyguya yaslananlar",
      kisa: "Ek bilgi: bu safsatalar kanıt yerine kişiyi, kalabalığı ya da duyguyu kullanır.",
      bloklar: [
        { tip: "tablo", baslik: "Safsata (*fallacy*) tablosu 1", head: ["Safsata", "Ne yapar?", "Örnek"], rows: [
            ["*Ad hominem*", "Argüman yerine kişiye saldırır", "“Bu araştırmacı kopya çekmiş, bulgusu yanlıştır.”"],
            ["*Bandwagon*", "Çoğunluk yapıyor diye doğru sayar", "“Herkes bu uygulamaya geçti, en iyisi odur.”"],
            ["*Appeal to emotion*", "Kanıt yerine yalnızca duyguyu kullanır", "“Düşünün, küçücük çocuklar ağlıyor, o hâlde kural yanlıştır.”"],
            ["*False authority*", "İlgisiz bir ünlüyü uzman gibi gösterir", "“Ünlü bir futbolcu bu vitaminin sınav notunu artırdığını söylüyor.”"]
          ], not: "Sınavda böyle yaz: *This is an ad hominem because it attacks the researcher instead of the evidence.*" },
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
      baslik: "Ek bilgi: safsatalar 2, mantık hataları",
      kisa: "Ek bilgi: bu safsatalar akıl yürütmedeki bir adımı atlar ya da bozar.",
      bloklar: [
        { tip: "tablo", baslik: "Safsata tablosu 2", head: ["Safsata", "Ne yapar?", "Örnek"], rows: [
            ["*Straw man*", "Karşı görüşü çarpıtıp kolayca yıkar", "“Karşıtlar okuldaki düzeni tamamen yıkmak istiyor.”"],
            ["*Slippery slope*", "Küçük adımın felakete gideceğini kanıtsız söyler", "“Servis saatini değiştirirsek yarın okul kapanır.”"],
            ["*False dilemma*", "Yalnızca iki seçenek varmış gibi gösterir", "“Ya telefon tamamen serbest, ya da tam yasak.”"],
            ["*Hasty generalization*", "Küçük örneklemden büyük sonuç çıkarır", "“Üç arkadaşım geç yatıyor; tüm gençler geç yatıyor.”"],
            ["*Post hoc*", "Ardışıklığı neden-sonuç sanır", "“Yeni program geldi, notlar düştü; program notları düşürdü.”"],
            ["*Circular reasoning*", "İspatlanacak şeyi kanıt gibi kullanır", "“Kural adildir, çünkü haksız değildir.”"],
            ["*Red herring*", "Konudan ilgisiz bir şeyle dikkat dağıtır", "“Telefon kuralını konuşurken kantin fiyatlarına bakın.”"]
          ], not: "Sınavda böyle yaz: *This is a straw man because it misrepresents the opposing view.*" },
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
            "Tarafsız (*objective*) ol, karşı görüşleri dikkate al; eleştirel ol ama yargılayıcı olma.",
            "Concession (karşı tarafa pay) ve çözüm essay'de ve konuşmada zorunludur.",
            "Full Outline rubriğinde concession 5, çözüm önerisi 5 puandır; konuşmada ikna edici içerik (15) içindedir.",
            "Sıra: karşı görüşü adil sun → haklı yanı kabul et → kanıtla cevap ver → çözüm öner → tezle bağla.",
            "Ek bilgi: *ethos* güven, *pathos* duygu, *logos* mantıktır; akademik essay'de *logos* ağırlıklı, *ethos* kaynaklarla kurulur.",
            "Ek bilgi: *ad hominem*, *bandwagon*, *appeal to emotion*, *false authority* kanıt yerine kişiyi, kalabalığı ya da duyguyu kullanır.",
            "Ek bilgi: *straw man*, *slippery slope*, *false dilemma*, *hasty generalization*, *post hoc*, *circular reasoning*, *red herring* mantığı bozar.",
            "Konunun uzmanına başvurmak safsata değildir; safsatayı adlandırırken nedenini de açıkla."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "In the Full Outline checkpoint rubric, a separate 5-point criterion rewards which of the following?",
      opts: ["A concession to the opposing side", "A quotation in every paragraph", "A title page with a color", "First-person voice"], a: 0,
      why: "Full Outline rubriğinde karşı tarafa concession 5 puandır (çözüm önerisi de ayrıca 5 puan). Diğer şıklar rubrikte yoktur; ayrıca essay'de birinci şahıs kullanılmaz." },
    { q: "Which sentence is critical but not judgmental?",
      opts: ["Opponents are simply uninformed.", "Only a fool would believe that.", "Everyone knows the critics are wrong.", "This objection overlooks evidence from two pilot programs."], a: 3,
      why: "Dördüncü şık karşı görüşe kanıtla itiraz eder. Birinci şık çekicidir ama kişileri yargılar, kanıt vermez. Üçüncü şık da kanıt yerine “herkes biliyor” der." },
    { q: "Thesis: Schools should start later. Which sentence is the concession?",
      fig: { type: "table", head: ["Sentence", "Text"], rows: [["A", "Critics argue that bus schedules would be disrupted."], ["B", "Admittedly, schedules would need adjustment, which is a real cost."], ["C", "However, schools that shifted start times completed route changes within a semester."], ["D", "One practical solution is to adjust routes gradually."]] },
      opts: ["A", "B", "C", "D"], a: 1,
      why: "B, karşı görüşün haklı yanını açıkça kabul eder. A karşı görüşü tanıtır, C kanıtla cevap verir, D çözüm önerir; hepsi paragrafın parçasıdır ama concession B'dir." },
    { q: "In the persuasive speech rubric, where are concession(s) and solution(s) scored?",
      opts: ["Eye contact (10 points)", "Persuasive content: main points, research, speaker's opinion, concession(s) and solution(s) (15 points)", "Pronunciation (5 points)", "Visual materials (5 points)"], a: 1,
      why: "Concession ve çözüm, konuşma rubriğinde ikna edici içerik (15 puan) kriterinin içindedir. Teknik kriterler (göz teması, görsel) içerikle ilgili değildir." },
    { q: "A principal says: If we change the bus schedule by 15 minutes, the school will close tomorrow. Which fallacy is this?",
      opts: ["Ad hominem", "Bandwagon", "Straw man", "Slippery slope"], a: 3,
      why: "Küçük bir adımın kanıtsız biçimde felakete yol açacağı söyleniyor: slippery slope. Straw man çekicidir ama karşı görüş çarpıtılmıyor, sonuç abartılıyor. Safsatalar ek bilgi konusudur." }
  ]
};
