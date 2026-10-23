/* Kitpath not defteri · py407 · 4.7 Duygu
   Kaynak: College Board CED, Topic 4.7 (4.7.A, 4.7.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py407",
  amac: "Bu konu duygunun (*emotion*) nasıl oluştuğunu anlatıyor: bedensel tepki ile düşünce hangi sırayla gelir? Duygu kuramlarını, yüz geri bildirimini, olumlu duyguların etkisini ve kültürün duygu ifadesini nasıl şekillendirdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Duygu nedir?",
      kisa: "Duygu, bedensel tepki, düşünce ve ifadeyi birleştiren karmaşık bir süreçtir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Bedensel tepki", alt: "kalp atışı, ter" }, "+",
            { t: "Düşünce", alt: "durumu yorumlamak" }, "+",
            { t: "İfade", alt: "yüz, ses, davranış" }, "=",
            { t: "*Emotion*", alt: "duygu" }
          ], aciklama: "*Emotion* (*affect*), akıl yürütmeden ve bilgiden ayrılan karmaşık bir psikolojik süreçtir. İçsel (bedensel, düşünsel) ve dışsal (ortam) etkenleri yansıtır." },
        { tip: "kavramlar", kartlar: [
            { ikon: "💓", terim: "Physiological arousal", tr: "fizyolojik uyarılma", tanim: "Duyguyla birlikte gelen bedensel değişimler: kalp atışı hızlanması, terleme, nefes artışı.", ornek: "Sınav kâğıdını alırken avuç içlerin terler." },
            { ikon: "💭", terim: "Cognitive appraisal", tr: "bilişsel değerlendirme", tanim: "Bir durumun ne anlama geldiğini yorumlamak.", ornek: "\"Bu sınav hayatımı belirleyecek\" diye düşünmek." }
          ] }
      ]
    },
    {
      baslik: "Önce beden mi, önce düşünce mi?",
      kisa: "Kuramlar bedensel tepki ile düşüncenin sırasında ayrışır: art arda, eş zamanlı ya da etiket gerekli.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "1️⃣", terim: "James–Lange theory", tr: "James–Lange kuramı", tanim: "Önce bedensel tepki gelir, sonra o tepkiyi fark edince duyguyu yaşarız (ardışık).", ornek: "\"Kalbim çarpıyor, o hâlde korkuyorum.\"" },
            { ikon: "⏱️", terim: "Cannon–Bard theory", tr: "Cannon–Bard kuramı", tanim: "Bedensel tepki ve duygu deneyimi aynı anda ortaya çıkar (eş zamanlı).", ornek: "Ayı gördüğünde kalp çarpar ve korku aynı anda gelir." },
            { ikon: "🏷️", terim: "Schachter–Singer two-factor theory", tr: "Schachter–Singer iki etken kuramı", tanim: "Fizyolojik uyarılma ile birlikte bu uyarılmaya takılan bilişsel etiket gerekir; duygu etikete göre değişir.", ornek: "Kalbin hızlı atıyor ve konserde olduğunu düşünüyorsan heyecan, karanlık sokaktaysan korku diye adlandırırsın." }
          ] },
        { tip: "grafik", baslik: "Ormanda ayı: duygu nasıl doğar?", xlabel: "Zaman", ylabel: "", xmax: 10, ymax: 9,
          ogeler: [
            { id: "e", tip: "alan", renk: 2, noktalar: [[4.7, 6.3], [7.7, 6.3], [7.7, 8], [4.7, 8]] },
            { id: "ye", tip: "yazi", x: 6.2, y: 6.9, metin: "korku" },
            { id: "l", tip: "alan", renk: 3, noktalar: [[3.6, 3.7], [5.8, 3.7], [5.8, 5.4], [3.6, 5.4]], gizli: true },
            { id: "yl", tip: "yazi", x: 4.7, y: 4.3, metin: "etiket", gizli: true },
            { id: "b", tip: "alan", renk: 0, noktalar: [[1, 1], [3.5, 1], [3.5, 2.8], [1, 2.8]] },
            { id: "yb", tip: "yazi", x: 2.25, y: 1.6, metin: "beden" }
          ],
          durumlar: [
            { metin: "**James–Lange**: önce ==bedensel tepki== (kalp çarpar), **sonra** duygu (korku) gelir." },
            { metin: "**Cannon–Bard**: beden ve duygu ==aynı anda== ortaya çıkar.", set: { e: { noktalar: [[1, 6.3], [3.5, 6.3], [3.5, 8], [1, 8]] }, ye: { x: 2.25 } } },
            { metin: "**Schachter–Singer**: bedensel uyarılmaya bir ==bilişsel etiket== takılır (\"Bu bir ayı!\") ve duygu o etiketle belirir.", set: { e: { noktalar: [[6, 6.3], [8.5, 6.3], [8.5, 8], [6, 8]] }, ye: { x: 7.25 }, l: { noktalar: [[3.8, 3.7], [6, 3.7], [6, 5.4], [3.8, 5.4]] }, yl: { x: 4.9 } }, goster: ["l", "yl"] }
          ] },
        { tip: "tuzak", metin: "Özel kuram adları sınav kapsamı dışındadır; ama sırayı ve etiket fikrini bilmen gerekir.", yanlis: "*Cannon–Bard*'a göre önce beden, sonra duygu gelir.", dogru: "==Ardışık: beden → duygu (*James–Lange*).== ==Eş zamanlı (*Cannon–Bard*).== ==Beden + bilişsel etiket (*Schachter–Singer*).==" }
      ]
    },
    {
      baslik: "Yüz geri bildirimi",
      kisa: "Yüz ifademiz duygumuzu etkileyebilir; ama kanıtlar karışıktır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🙂", terim: "Facial-feedback hypothesis", tr: "yüz geri bildirimi hipotezi", tanim: "Yüz ifadelerimizin yaşadığımız duygu deneyimini etkilediğini söyler. Fizyolojik deneyimin bilişsel değerlendirmeden önce geldiğini savunan kuramları destekler.", ornek: "Kalemi dişlerinin arasında tutup yüz kaslarını gülümseme biçiminde çalıştıran kişi karikatürü biraz daha komik bulabilir." }
          ] },
        { tip: "tuzak", metin: "Araştırmalar bu hipotezi test etmiş, sonuçlar karışık çıkmıştır.", yanlis: "Yüzünü gülümsemeye zorlamak herkesi kesin olarak mutlu eder.", dogru: "Yüz ifadesi duyguyu etkileyebilir, ==fakat bulgular karışıktır== ve etki küçük olabilir." }
      ]
    },
    {
      baslik: "Genişlet ve inşa et (*broaden-and-build*)",
      kisa: "Olumlu duygular farkındalığı ve eylemi genişletir; olumsuzlar daraltır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌅", terim: "Broaden-and-build theory", tr: "genişlet ve inşa et kuramı", tanim: "Olumlu duygular farkındalığı genişletip yeni düşünce ve eylemleri teşvik eder; olumsuz duygular ise farkındalığı daraltır.", ornek: "Güzel haber alınca yeni fikirler ve oyunlar aklına gelir; kaygılıyken tek bir kaygıya kilitlenirsin." }
          ] },
        { tip: "grafik", baslik: "Duygu ne kadar fikir üretmeni sağlar?", xlabel: "Duygu durumu", ylabel: "Aklına gelen seçenek sayısı", xmax: 6, ymax: 10,
          xticks: [{ v: 1.5, label: "Olumlu" }, { v: 3.5, label: "Nötr" }, { v: 5, label: "Olumsuz" }],
          ogeler: [
            { id: "p", tip: "alan", renk: 1, noktalar: [[1, 0], [2, 0], [2, 5], [1, 5]] },
            { id: "n", tip: "alan", renk: 0, noktalar: [[3, 0], [4, 0], [4, 5], [3, 5]] },
            { id: "o", tip: "alan", renk: 2, noktalar: [[4.5, 0], [5.5, 0], [5.5, 5], [4.5, 5]] }
          ],
          durumlar: [
            { metin: "Duygu durumu nötr: aklına gelen seçenek sayısı orta düzeyde (şematik)." },
            { metin: "Olumlu duygu: farkındalık ==genişler==, aklına daha çok fikir ve eylem seçeneği gelir.", set: { p: { noktalar: [[1, 0], [2, 0], [2, 8.5], [1, 8.5]] } } },
            { metin: "Olumsuz duygu: düşünce ve eylem ==daralır==, seçenekler azalır.", set: { o: { noktalar: [[4.5, 0], [5.5, 0], [5.5, 2.5], [4.5, 2.5]] } } }
          ] },
        { tip: "tuzak", metin: "Olumsuz duygular \"kötü\" değildir; daraltma bazen işe yarar.", yanlis: "Olumsuz duygular daima zararlıdır; hep olumlu hissetmek gerekir.", dogru: "Olumsuz duygular dikkati daraltıp ==tehdide odaklanmayı== sağlar; ancak uzun sürerse düşünce ve eylem seçeneklerini sınırlar." }
      ]
    },
    {
      baslik: "Duygular evrensel mi?",
      kisa: "Altı duygu kültürlerarası ortak görülebilir; kanıtlar karışıktır.",
      bloklar: [
        { tip: "harita", merkez: "Ortak olabilecek duygular", dallar: [
            { baslik: "Öfke", alt: "*anger*" },
            { baslik: "İğrenme", alt: "*disgust*" },
            { baslik: "Üzüntü", alt: "*sadness*" },
            { baslik: "Mutluluk", alt: "*happiness*" },
            { baslik: "Şaşkınlık", alt: "*surprise*" },
            { baslik: "Korku", alt: "*fear*" }
          ] },
        { tip: "not", metin: "Araştırmacılar, bu duyguların kültürler arasında benzer biçimde yaşanıp tanınıp tanınmadığını incelemiştir. Evrensellik üzerine bulgular **karışıktır**: bazı çalışmalar ortaklık gösterir, bazıları ise kültür farklarını." }
      ]
    },
    {
      baslik: "Kültür duygu ifadesini nasıl şekillendirir?",
      kisa: "Display rules ifadenin nasıl gösterileceğini, elicitors neyin duygu uyandırdığını belirler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Display rules", tr: "ifade kuralları", tanim: "Bir kültürde duyguların ne zaman, nerede ve nasıl gösterileceğini belirleyen kurallar. Aynı kültürde cinsiyet, yaş ve sosyoekonomik sınıfa göre de farklılaşabilir.", ornek: "Cenazede yüksek sesle gülmemek; bazı ortamlarda öfkeyi saklamak." },
            { ikon: "🎯", terim: "Elicitors", tr: "tetikleyiciler", tanim: "Belirli bir duyguyu uyandıran olaylar; kültüre göre değişebilir.", ornek: "Bir kültürde utancı uyandıran bir olay başka bir kültürde sıradan sayılabilir." }
          ] },
        { tip: "ikili", sol: { ikon: "📏", baslik: "*Display rules*", maddeler: ["Duygunun nasıl gösterileceği", "Kural, norm"] },
          sag: { ikon: "🎯", baslik: "*Elicitors*", maddeler: ["Hangi olayın duyguyu başlattığı", "Tetikleyici"] },
          oyun: [
            { metin: "Bir kültürde mutluluğu yüksek sesle, başka bir kültürde sakin bir gülümsemeyle göstermek.", cevap: "sol", neden: "İfade biçimi kurala göre değişiyor: ifade kuralları." },
            { metin: "Birine doğrudan bakmak bir kültürde öfke, başka kültürde ilgi uyandırır.", cevap: "sag", neden: "Aynı olay farklı duygu uyandırıyor: tetikleyici." },
            { metin: "Yaşlı birinin önünde öfkeyi göstermemek.", cevap: "sol", neden: "Duygunun gösterilme kuralı: ifade kuralı." },
            { metin: "Sınıfta sunum yapmanın kimilerinde heyecan, kimilerinde kaygı doğurması.", cevap: "sag", neden: "Olay duyguyu tetikliyor: tetikleyici." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Emotion*: bedensel tepki, düşünce ve ifadeyi içeren karmaşık süreç; içsel ve dışsal etkenleri yansıtır.",
            "Kuramlar sırada ayrışır: beden → duygu (ardışık), eş zamanlı, ya da bedensel uyarılma + bilişsel etiket.",
            "*Facial-feedback hypothesis*: yüz ifadesi duyguyu etkiler; fizyolojik deneyimin önce geldiğini destekler; sonuçlar karışık.",
            "*Broaden-and-build*: olumlu duygular farkındalığı ve eylemi genişletir, olumsuzlar daraltır.",
            "Evrensel olabilecek duygular: öfke, iğrenme, üzüntü, mutluluk, şaşkınlık, korku.",
            "Evrensellik üzerine bulgular karışıktır.",
            "*Display rules* ve *elicitors* kültürler arasında farklıdır.",
            "Display rules ayrıca aynı kültür içinde cinsiyet, yaş ve sosyoekonomik sınıfa göre değişebilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Sınav kâğıdını alırken Elif'in kalbi hızla çarpıyor ve avuç içleri terliyor. Elif bunu fark edince \"Kalbim hızlı atıyor, demek ki korkuyorum\" diye düşünüyor. Elif'in deneyimi duyguların oluşumuna dair hangi görüşü destekler?",
      opts: ["Bedensel tepki, duygu deneyiminden önce gelir", "Bedensel tepki ve duygu eş zamanlı ortaya çıkar", "Duygu için bilişsel etiket gerekmez", "Duygular yalnızca kültürel tetikleyicilere bağlıdır"],
      a: 0,
      why: "Elif önce kalbin hızlandığını fark ediyor, sonra korku adını koyuyor: beden önce, duygu sonra (ardışık). En çekici yanlış şık B: eş zamanlı görüşte beden ve duygu aynı anda yaşanır; burada sıra var." },
    { q: "Bir deneyde kafein içen öğrencinin kalbi hızlı atıyor. Yanındaki arkadaşı neşeli davranıyor; öğrenci hızlı kalp atışını \"neşeleniyorum\" diye adlandırıyor. Bu sonuç duyguların nasıl oluştuğuna dair hangi fikirle en çok uyumludur?",
      opts: ["Beden ve duygu her zaman aynı anda olur", "Yüz ifadesi tek başına duyguyu belirler", "Fizyolojik uyarılma ve bu uyarılmaya verilen bilişsel etiket birlikte duyguyu belirler", "Duygular yalnızca *display rules* ile açıklanır"],
      a: 2,
      why: "Aynı bedensel uyarılma, ortama göre farklı etiketlenip farklı duygu olarak yaşanıyor: uyarılma + bilişsel etiket. En çekici yanlış şık A: eş zamanlılık görüşü etiketin duyguyu değiştirebileceğini açıklamaz." },
    { q: "Bir araştırmacı, öğrencilerin farklı duygu durumlarındayken bir sınıf etkinliği için kaç farklı fikir üretebildiğini ölçüyor. Sonuçlar tabloda. Bu veriler hangi kuramla en iyi uyumludur?",
      fig: { type: "table", caption: "Ortalama fikir sayısı", head: ["Duygu durumu", "Fikir sayısı"], rows: [["Olumlu", "8"], ["Nötr", "5"], ["Olumsuz", "3"]] },
      opts: ["*Facial-feedback hypothesis*", "*Broaden-and-build theory*", "*Display rules*", "*Drive-reduction theory*"],
      a: 1,
      why: "Olumlu duygu farkındalığı ve seçenekleri genişletiyor (8), olumsuz duygu daraltıyor (3): *broaden-and-build*. En çekici yanlış şık A: yüz geri bildirimi hipotezi yüz ifadesinin duyguyu etkilediğini söyler; tabloda yüz ifadesi yok." },
    { q: "İki farklı kültürden öğrenci aynı komik videoyu izliyor. Birinin kültüründe gülmek yüksek sesle ifade edilirken, diğerinin kültüründe sessiz bir gülümseme beklenir. Bu fark en iyi hangi kavramla açıklanır?",
      opts: ["*Elicitors*", "*Facial-feedback hypothesis*", "*Reciprocal determinism*", "*Display rules*"],
      a: 3,
      why: "Aynı duygunun nasıl gösterileceğini kültürel kurallar belirliyor: *display rules*. En çekici yanlış şık A: tetikleyiciler duyguyu hangi olayın uyandırdığıyla ilgilidir; burada olay (komik video) her iki gruba da aynı." },
    { q: "Bir araştırmacı katılımcılardan kalemi dişlerinin arasında tutmalarını isteyerek yüz kaslarını gülümseme biçiminde çalıştırıyor. Katılımcılar karikatürleri daha komik buluyor. Bu bulgu hangi hipotezle ilişkilidir?",
      opts: ["*Broaden-and-build theory*", "*Facial-feedback hypothesis*", "*Self-fulfilling prophecy*", "*Social facilitation*"],
      a: 1,
      why: "Yüz ifadesinin duygu deneyimini etkilediğini savunan hipotez: *facial-feedback hypothesis*. Araştırma sonuçları karışıktır. En çekici yanlış şık A: *broaden-and-build* olumlu duyguların düşünce alanını genişletmesiyle ilgilidir, yüz ifadesiyle ilgili değildir." }
  ]
};
