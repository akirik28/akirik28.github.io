/* Kitora not defteri · py405 · 4.5 Sosyal-Bilişsel ve Özellik Kuramları
   Kaynak: College Board CED, Topic 4.5 (4.5.A, 4.5.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py405",
  amac: "Bu konu kişiliği açıklayan iki yaklaşımı anlatıyor. Sosyal-bilişsel kuram kişiliği davranış, düşünce ve çevrenin karşılıklı etkisiyle, özellik kuramları kalıcı özelliklerle açıklar. Karşılıklı belirleyicilik, özyeterlik ve Büyük Beşli'yi öğreneceksin.",
  bolumler: [
    {
      baslik: "Karşılıklı belirleyicilik: üç parça birbirini etkiler",
      kisa: "Davranış, düşünceler ve çevre birbirini karşılıklı şekillendirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔁", terim: "Reciprocal determinism", tr: "karşılıklı belirleyicilik", tanim: "Sosyal-bilişsel kuramda kişiliği şekillendiren üç etkenin (davranış, kişisel/bilişsel etmenler, çevre) birbirini iki yönlü etkilemesi.", ornek: "Kendine güvenin davranışını, davranışın çevreni, çevren de güvenini değiştirir." }
          ] },
        { tip: "harita", merkez: "*Reciprocal determinism*", dallar: [
            { baslik: "Davranış", alt: "Ne yaptığın" },
            { baslik: "Kişisel/bilişsel etmenler", alt: "İnançların, beklentilerin, kendine bakışın" },
            { baslik: "Çevre", alt: "Ortam, aile, arkadaşlar, öğretmen" }
          ] },
        { tip: "adimlar", baslik: "Defne'nin matematik döngüsü", adimlar: [
            { baslik: "Düşünce", metin: "\"Ben matematikte kötüyüm\" diye inanıyor." },
            { baslik: "Davranış", metin: "Çalışmıyor; derste soru sormuyor." },
            { baslik: "Çevre", metin: "Öğretmeni ondan düşük beklentiyle az ilgilenir. Düşük not gelir." },
            { baslik: "Geri dönüş", metin: "Not inancını pekiştirir; ==üç parça birbirini sürekli etkiler==." }
          ] }
      ]
    },
    {
      baslik: "Benlik kavramı, özyeterlik ve benlik saygısı",
      kisa: "Özyeterlik belirli bir işteki yeterlik inancıdır; benlik saygısı genel öz değerdir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪞", terim: "Self-concept", tr: "benlik kavramı", tanim: "Kişinin kendini ve başkalarına göre kendini nasıl gördüğü. Özyeterlik ve benlik saygısı buna katkı yapar.", ornek: "\"Ben çalışkan ama utangaç biriyim.\"" },
            { ikon: "💪", terim: "Self-efficacy", tr: "özyeterlik", tanim: "Belirli bir görevi ya da durumu başarabileceğine inanç; göreve özgüdür.", ornek: "\"Bu fizik problemini çözebilirim\" ama \"resim yapmam\"." },
            { ikon: "💖", terim: "Self-esteem", tr: "benlik saygısı", tanim: "Kişinin kendine verdiği genel değer; kendini ne kadar beğendiği.", ornek: "\"Kendimi değerli biri olarak görüyorum.\"" }
          ] },
        { tip: "ikili", sol: { ikon: "💪", baslik: "*Self-efficacy*", maddeler: ["Belirli işe yönelik: \"Bunu yapabilirim\"", "Başarıyı tahmin eder"] },
          sag: { ikon: "💖", baslik: "*Self-esteem*", maddeler: ["Genel öz değer: \"Değerli biriyim\"", "Tek bir işe bağlı değil"] },
          oyun: [
            { metin: "\"Haftaya o sunumu iyi yapabilirim.\"", cevap: "sol", neden: "Belirli bir görev için yeterlik inancı: özyeterlik." },
            { metin: "\"Genelde kendimi sevdiğim ve değerli bulduğum biriyim.\"", cevap: "sag", neden: "Genel değer hissi: benlik saygısı." },
            { metin: "\"Satranç turnuvasını kazanacak kadar iyiyim.\"", cevap: "sol", neden: "Belirli bir etkinlik için inanç: özyeterlik." },
            { metin: "\"Başarısız da olsam kendimi kabul ediyorum.\"", cevap: "sag", neden: "Genel öz değerlendirme: benlik saygısı." }
          ] },
        { tip: "tuzak", metin: "İkisinin kapsamı farklıdır.", yanlis: "*Self-efficacy* ile *self-esteem* aynı şeydir.", dogru: "==*Self-efficacy* göreve özgüdür, *self-esteem* geneldir.== Biri yüksek, öteki düşük olabilir: kendini değerli bulan biri yüzmede yetersiz hissedebilir." }
      ]
    },
    {
      baslik: "Özellik kuramı ve kişilik envanterleri",
      kisa: "Özellikler kalıcıdır ve tipik tepkileri belirler; envanterler bunları ölçer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧬", terim: "Trait", tr: "özellik", tanim: "Kişiliğin kalıcı bir yanı; kişinin uyaranlara tipik tepkilerini belirler.", ornek: "Sosyal ortamlarda hep enerjik biri olmak." },
            { ikon: "📋", terim: "Personality inventory", tr: "kişilik envanteri", tanim: "Özellikleri ölçen, kişinin kendini değerlendirdiği çok maddeli soru formu.", ornek: "\"Başkalarıyla kolay arkadaş olurum: Katılıyorum / Katılmıyorum\"." },
            { ikon: "🧮", terim: "Factor analysis", tr: "faktör analizi", tanim: "Envanter maddelerinin yanıtlarını istatistiksel olarak ilişkili kümelere (faktörlere) ayıran yöntem.", ornek: "\"Partilerde konuşurum\" ile \"Enerjiyi insanlardan alırım\" maddeleri aynı kümede toplanır." }
          ] },
        { tip: "adimlar", baslik: "Faktör analizi nasıl çalışır?", adimlar: [
            { baslik: "Maddeler", metin: "Yüzlerce kişi, yüzlerce maddeyi yanıtlar." },
            { baslik: "İlişki", metin: "Hangi maddelerin birlikte yüksek ya da düşük puan aldığına bakılır." },
            { baslik: "Kümeler", metin: "Birlikte hareket eden maddeler tek bir **faktör** olarak toplanır." },
            { baslik: "İsim", metin: "Her kümeye bir ad verilir: ör. ==*extraversion*==." }
          ] }
      ]
    },
    {
      baslik: "Büyük Beşli (*Big Five*)",
      kisa: "Kişilik beş boyutla tanımlanır: deneyime açıklık, sorumluluk, dışadönüklük, uyumluluk, duygusal denge.",
      bloklar: [
        { tip: "tablo", baslik: "Beş özellik, beş soru", head: ["Özellik", "Yüksek puan", "Düşük puan"], rows: [
            ["*Openness to experience* (deneyime açıklık)", "Meraklı, yaratıcı", "Alışkanlıklara bağlı, pratik"],
            ["*Conscientiousness* (sorumluluk)", "Düzenli, planlı", "Dağınık, plansız"],
            ["*Extraversion* (dışadönüklük)", "Sosyal, enerjik", "Çekingen, sakin"],
            ["*Agreeableness* (uyumluluk)", "Yardımsever, güvenen", "Şüpheci, rekabetçi"],
            ["*Emotional stability* (duygusal denge)", "Sakin, güvenli", "Kaygılı, kolay üzülür"]
          ], not: "Özelliklerin baş harfleri (O, C, E, A, N) bir hatırlatıcı oluşturur. Emotional stability, *neuroticism*'in ters ucudur." },
        { tip: "grafik", baslik: "İki kişi, iki Büyük Beşli profili", xlabel: "Özellik", ylabel: "Puan (0–10)", xmax: 6, ymax: 10,
          xticks: [{ v: 1, label: "O" }, { v: 2, label: "C" }, { v: 3, label: "E" }, { v: 4, label: "A" }, { v: 5, label: "ES" }],
          ogeler: [
            { id: "o", tip: "alan", renk: 0, noktalar: [[0.7, 0], [1.3, 0], [1.3, 8], [0.7, 8]] },
            { id: "c", tip: "alan", renk: 0, noktalar: [[1.7, 0], [2.3, 0], [2.3, 3], [1.7, 3]] },
            { id: "e", tip: "alan", renk: 0, noktalar: [[2.7, 0], [3.3, 0], [3.3, 9], [2.7, 9]] },
            { id: "a", tip: "alan", renk: 0, noktalar: [[3.7, 0], [4.3, 0], [4.3, 6], [3.7, 6]] },
            { id: "n", tip: "alan", renk: 0, noktalar: [[4.7, 0], [5.3, 0], [5.3, 7], [4.7, 7]] },
            { id: "y", tip: "yazi", x: 3, y: 9.7, metin: "Can: sosyal ama plansız", gizli: true }
          ],
          durumlar: [
            { metin: "Can'ın profili: deneyime açık, sosyal; ama ==sorumluluk düşük== (plansız)." , goster: ["y"] },
            { metin: "Ela'nın profili: sorumluluk yüksek, dışadönüklük düşük: planlı ve sakin.", set: { o: { noktalar: [[0.7, 0], [1.3, 0], [1.3, 5], [0.7, 5]] }, c: { noktalar: [[1.7, 0], [2.3, 0], [2.3, 9], [1.7, 9]] }, e: { noktalar: [[2.7, 0], [3.3, 0], [3.3, 3], [2.7, 3]] }, a: { noktalar: [[3.7, 0], [4.3, 0], [4.3, 8], [3.7, 8]] }, n: { noktalar: [[4.7, 0], [5.3, 0], [5.3, 6], [4.7, 6]] }, y: { metin: "Ela: planlı ama çekingen" } } }
          ] },
        { tip: "tuzak", metin: "Beş özellik süreklidir; kutu değildir.", yanlis: "Bir kişi ya dışadönüktür ya da içedönüktür; tek bir etiketi vardır.", dogru: "Her özellik ==bir ölçek==tir: herkes beş ölçekte bir yerde durur. *Emotional stability* düşük olan kişi kaygı eğilimlidir; bu, hastalık değil bir eğilimdir." }
      ]
    },
    {
      baslik: "Dört kuramın karşılaştırması",
      kisa: "Her kuram kişiliği başka bir yerde arar ve başka yolla ölçer.",
      bloklar: [
        { tip: "tablo", baslik: "Kişilik kuramları bir arada", head: ["Kuram", "Kişiliği ne belirler?", "Nasıl ölçülür?"], rows: [
            ["Psikodinamik", "Bilinçdışı süreçler", "Projektif testler"],
            ["Hümanistik", "Koşulsuz saygı, kendini gerçekleştirme", "Benlik kavramı, görüşme"],
            ["Sosyal-bilişsel", "Davranış, düşünce, çevre arasındaki etkileşim", "Farklı durumlarda davranış gözlemi, özyeterlik ölçekleri"],
            ["Özellik", "Kalıcı özellikler", "Envanterler, faktör analizi"]
          ] },
        { tip: "ikili", sol: { ikon: "🔁", baslik: "Sosyal-bilişsel", maddeler: ["Kişilik durumla birlikte değişir", "Karşılıklı belirleyicilik"] },
          sag: { ikon: "🧬", baslik: "Özellik kuramı", maddeler: ["Kişilik zamanla ve durumlar arasında kalıcıdır", "*Big Five*"] },
          oyun: [
            { metin: "\"Hocayla konuşurken sessizim, arkadaşlarla çok konuşkanım.\"", cevap: "sol", neden: "Davranış duruma göre değişiyor: sosyal-bilişsel." },
            { metin: "\"Nerede olursam olayım hep düzenli ve plana bağlı biriyim.\"", cevap: "sag", neden: "Kalıcı özellik: özellik kuramı." },
            { metin: "\"Başarısızlığım çevremin beklentisini değiştirdi, bu da inancımı etkiledi.\"", cevap: "sol", neden: "Üç etkenin karşılıklı etkisi: sosyal-bilişsel." },
            { metin: "Bir envanterde dışadönüklük puanın yüksek çıktı.", cevap: "sag", neden: "Envanterle ölçülen özellik: özellik kuramı." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Sosyal-bilişsel kuram: *reciprocal determinism*; davranış, kişisel/bilişsel etmenler ve çevre birbirini karşılıklı etkiler.",
            "*Self-concept* kişinin kendine bakışıdır; *self-efficacy* ve *self-esteem* ona katkı yapar.",
            "*Self-efficacy* göreve özgü yeterlik inancıdır; *self-esteem* genel öz değerdir.",
            "Özellik kuramları: kişilik, tipik tepkileri belirleyen kalıcı özelliklerden oluşur.",
            "*Big Five*: *openness*, *conscientiousness*, *extraversion*, *agreeableness*, *emotional stability*.",
            "Özellikler *personality inventories* ile ölçülür; *factor analysis* madde yanıtlarını kümeler.",
            "Her özellik bir ölçektir; kişiler kategorilere değil, ölçeklerde bir noktaya yerleşir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Defne matematikte kötü olduğuna inanıyor, bu yüzden çalışmıyor. Öğretmeni de ondan beklentisini düşürüyor, düşük not gelince Defne inancını daha da pekiştiriyor. Bu döngü hangi kavramı en iyi örnekler?",
      opts: ["*Reciprocal determinism*", "*Displacement*", "*Factor analysis*", "*Unconditional positive regard*"],
      a: 0,
      why: "İnanç (kişisel/bilişsel etmen), davranış ve çevre birbirini karşılıklı etkiliyor: *reciprocal determinism*. En çekici yanlış şık B: yer değiştirme bir savunma mekanizmasıdır; senaryoda bir dürtünün başka hedefe yönelmesi yok." },
    { q: "Burak genelde kendini değerli ve sevilen biri olarak görüyor. Ancak yüzme dersinde \"100 metreyi hiç bitiremem\" diyor ve denemekten kaçınıyor. Burak için aşağıdakilerden hangisi doğrudur?",
      opts: ["Düşük *self-esteem*, yüksek *self-efficacy*", "Yüksek *self-efficacy*, düşük *self-concept*", "Düşük *self-esteem*, düşük *self-efficacy*", "Yüksek *self-esteem*, yüzme için düşük *self-efficacy*"],
      a: 3,
      why: "Genel öz değeri yüksek (benlik saygısı) ama belirli görev olan yüzmede yeterlik inancı düşük (özyeterlik). En çekici yanlış şık C: Burak'ın genel öz değeri düşük değil; ikisi birbirinden bağımsız olabilir." },
    { q: "Bir envanter, Can'ın beş özellikte puanlarını veriyor. Tabloya göre Can'ı en iyi hangisi tanımlar?",
      fig: { type: "table", caption: "Can'ın Büyük Beşli puanları (100 üzerinden)", head: ["Özellik", "Puan"], rows: [["Deneyime açıklık", "80"], ["Sorumluluk", "25"], ["Dışadönüklük", "90"], ["Uyumluluk", "60"], ["Duygusal denge", "70"]] },
      opts: ["Düzenli, planlı ve çekingen", "Sosyal ve meraklı, ama plansız", "Kaygılı ve içine kapanık", "Rekabetçi ve şüpheci"],
      a: 1,
      why: "Dışadönüklük (90) ve deneyime açıklık (80) yüksek, sorumluluk (25) düşük: sosyal, meraklı ve plansız. En çekici yanlış şık A: yüksek sorumluluk ve düşük dışadönüklüğü anlatır; Can'ın profilinin tam tersidir." },
    { q: "Araştırmacılar 500 kişinin yüzlerce kişilik maddesine verdiği yanıtları istatistiksel olarak inceliyor. Birlikte yüksek ya da düşük puanlanan maddeleri beş küme hâlinde topluyor. Bu işlem hangi yöntemdir?",
      opts: ["*Projective test*", "Rastgele atama", "*Factor analysis*", "*Social comparison*"],
      a: 2,
      why: "İstatistiksel olarak ilişkili maddeleri kümelere ayırmak *factor analysis*'tir; *Big Five* bu yolla çıkarılır. En çekici yanlış şık A: projektif testler belirsiz uyaranlara verilen yanıtları yorumlar, madde kümeleme yapmaz." },
    { q: "Bir psikolog, bir öğrencinin kendi düşünceleri, davranışları ve çevresindeki öğretmen ile arkadaşlarının birbirini sürekli etkilediğini, kişiliğin de bu karşılıklı etkileşimle şekillendiğini söylüyor. Bu görüş hangi kuramdır?",
      opts: ["Psikodinamik kuram", "Sosyal-bilişsel kuram", "Özellik kuramı", "Hümanistik kuram"],
      a: 1,
      why: "Davranış, düşünce ve çevre arasındaki karşılıklı etkileşim sosyal-bilişsel kuramın temelidir. En çekici yanlış şık C: özellik kuramı kişiliği kalıcı özelliklerle açıklar, karşılıklı etkileşimi vurgulamaz." }
  ]
};
