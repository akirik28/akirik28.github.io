/* Kitpath not defteri · py401 · 4.1 Yükleme Kuramı ve Kişi Algısı
   Kaynak: College Board CED, Topic 4.1 (4.1.A, 4.1.B, 4.1.C). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py401",
  amac: "Bu konu insanların davranışın nedenini nasıl yorumladığını (*attribution*) ve başkalarını nasıl algıladığını anlatıyor. Yükleme türlerini ve yanlılıklarını, kontrol odağını, sırf maruz kalmanın sevdirmesini, kendini doğrulayan kehaneti ve sosyal karşılaştırmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Yükleme: davranışı nasıl açıklarız?",
      kisa: "Davranışın nedenini kişide ya da koşullarda ararız.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Attribution", tr: "yükleme", tanim: "İnsanların kendi ya da başkalarının davranışını ve zihinsel süreçlerini açıklama biçimi.", ornek: "Arkadaşın randevuya geç kaldı; nedenini sen belirlersin." },
            { ikon: "🧍", terim: "Dispositional attribution", tr: "içsel (kişisel) yükleme", tanim: "Nedeni kişinin içindeki özelliklere bağlar: zekâ, kişilik, tembellik.", ornek: "\"Hep geç kalır, saygısız biri.\"" },
            { ikon: "🌦️", terim: "Situational attribution", tr: "durumsal (dışsal) yükleme", tanim: "Nedeni kişinin dışındaki koşullara bağlar: trafik, hava, kurallar.", ornek: "\"Vapur seferi iptal olmuş.\"" }
          ] },
        { tip: "ikili", sol: { ikon: "🧍", baslik: "*Dispositional*", maddeler: ["Neden kişinin içinde", "Özellik, kişilik, yetenek"] },
          sag: { ikon: "🌦️", baslik: "*Situational*", maddeler: ["Neden kişinin dışında", "Koşul, baskı, şans"] },
          oyun: [
            { metin: "\"Ali sınavı kötü yazdı çünkü tembel biri.\"", cevap: "sol", neden: "Neden Ali'nin özelliği: *dispositional*." },
            { metin: "\"Ali sınavı kötü yazdı çünkü sınıfta inşaat gürültüsü vardı.\"", cevap: "sag", neden: "Neden dış koşul: *situational*." },
            { metin: "\"Zeynep konserde bağırdı çünkü herkes bağırıyordu.\"", cevap: "sag", neden: "Ortamın etkisi: *situational*." },
            { metin: "\"Zeynep çok dışa dönük bir insan, o yüzden bağırdı.\"", cevap: "sol", neden: "Kişilik özelliği: *dispositional*." }
          ] }
      ]
    },
    {
      baslik: "Açıklama tarzı: iyimser mi, kötümser mi?",
      kisa: "İnsanlar iyi ve kötü olayları açıklarken tutarlı bir kalıp izler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Explanatory style", tr: "açıklama tarzı", tanim: "Kişinin iyi ve kötü olayları kendi hayatında ve başkalarının hayatında açıklarken gösterdiği tahmin edilebilir kalıp. İyimser ya da kötümser olabilir." }
          ] },
        { tip: "ikili", sol: { ikon: "☀️", baslik: "*Optimistic* (iyimser) tarz", maddeler: ["Kötü olayı geçici, dışsal, sınırlı bir nedene bağlar", "İyi olayı kalıcı ve kendi gücüne bağlar"] },
          sag: { ikon: "🌧️", baslik: "*Pessimistic* (kötümser) tarz", maddeler: ["Kötü olayı kalıcı, kişisel, her şeyi etkileyen bir nedene bağlar", "İyi olayı geçici ve şansa bağlar"] },
          oyun: [
            { metin: "Maçı kaybedince: \"Bugün sahamız kaygandı, haftaya kazanırız.\"", cevap: "sol", neden: "Neden geçici ve dışsal: iyimser tarz." },
            { metin: "Maçı kaybedince: \"Ben zaten hiçbir işi beceremem.\"", cevap: "sag", neden: "Neden kalıcı, kişisel ve genel: kötümser tarz." },
            { metin: "Sınavdan yüksek alınca: \"Soruların kolay denk gelmesi şans.\"", cevap: "sag", neden: "İyi olayı geçici ve dışsal bir nedene bağlıyor: kötümser tarz." }
          ] }
      ]
    },
    {
      baslik: "Kontrol odağı: kim yönetiyor?",
      kisa: "Sonuçları kendi eylemlerine bağlayan içsel, şansa bağlayan dışsal odaklıdır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎮", baslik: "*Internal locus of control*", maddeler: ["\"Ne olacağı benim eylemlerime bağlı\"", "Çalışırsam sonuç değişir"] },
          sag: { ikon: "🎲", baslik: "*External locus of control*", maddeler: ["\"Ne olacağı şans, kader ve başkalarına bağlı\"", "Ne yapsam fark etmez"] },
          oyun: [
            { metin: "\"Sınav notum, ne kadar tekrar yaptığıma bağlı.\"", cevap: "sol", neden: "Sonucu kendi eylemine bağlıyor: içsel." },
            { metin: "\"Hoca beni sevmiyor, ne yapsam düşük veriyor.\"", cevap: "sag", neden: "Sonucu başkasına bağlıyor: dışsal." },
            { metin: "\"Seçmelere girersem kazanma şansım artar, antrenmana başlıyorum.\"", cevap: "sol", neden: "Sonuç üzerinde kendinde güç görüyor: içsel." },
            { metin: "\"Hayatımda ne olacaksa kader yazar.\"", cevap: "sag", neden: "Sonucu dış güçlere bağlıyor: dışsal." }
          ] },
        { tip: "not", metin: "*Locus of control* bir yükleme biçimi gibi de çalışır: neden kişinin içindeyse içsel, dışındaysa dışsal. Fark şu: yükleme tek bir olayı, kontrol odağı ise genel inanç kalıbını anlatır." }
      ]
    },
    {
      baslik: "Üç yükleme yanlılığı",
      kisa: "Yüklemelerimiz çarpıktır: başkasına kişilik, kendimize koşul yükleriz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🕵️", terim: "Fundamental attribution error", tr: "temel yükleme hatası", tanim: "Başkasının davranışını açıklarken durumun etkisini hafife alıp kişilik özelliğini fazla önemsemek.", ornek: "Kantinde sırayı bozan kişiye \"kaba biri\" demek; belki otobüsü kaçıyordu." },
            { ikon: "🎭", terim: "Actor–observer bias", tr: "oyuncu–gözlemci yanlılığı", tanim: "Kendi davranışımızı duruma, başkalarının aynı davranışını kişiliğe bağlama eğilimi.", ornek: "Ben geç kalırsam trafik; sen geç kalırsan sorumsuzsun." },
            { ikon: "🏆", terim: "Self-serving bias", tr: "benlik koruyucu yanlılık", tanim: "Başarıyı kendi özelliklerimize, başarısızlığı dış koşullara bağlama eğilimi.", ornek: "Yüksek not: \"zekiyim\"; düşük not: \"sorular haksızdı\"." }
          ] },
        { tip: "tablo", baslik: "Aynı olay, üç gözlük", head: ["Yanlılık", "Kimin davranışı?", "Ne yapılır?"], rows: [
            ["*Fundamental attribution error*", "Başkasının", "Kişiliğe fazla, duruma az önem"],
            ["*Actor–observer bias*", "Kendi ile başkasının farkı", "Kendine durum, başkasına kişilik"],
            ["*Self-serving bias*", "Kendi başarı ve başarısızlığı", "Başarı bana, başarısızlık koşullara"]
          ], not: "Üçü de yükleme hatasıdır; hangisi olduğunu, kimin davranışının açıklandığına bakarak bul." },
        { tip: "tuzak", metin: "Hepsi \"başkasını suçlamak\" gibi görünür; ayırmak için kime ve neye baktığını sor.", yanlis: "*Actor–observer bias* ile *self-serving bias* aynıdır.", dogru: "*Actor–observer* kendi ile başkasını kıyaslar (durum vs kişilik). *Self-serving* kendi sonuçlarını kıyaslar (başarı vs başarısızlık)." }
      ]
    },
    {
      baslik: "*Mere exposure effect*: gördükçe sevmek",
      kisa: "Bir şeyle tekrar tekrar karşılaşmak, ona karşı beğeniyi artırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📻", terim: "Mere exposure effect", tr: "salt maruz kalma etkisi", tanim: "Bir uyarıcıya zaman içinde tekrar tekrar maruz kalmak, o uyarıcıyı daha çok sevmeye yol açar.", ornek: "İlk duyduğunda sıradan gelen şarkıyı bir ay radyoda dinleyince sevmeye başlarsın." }
          ] },
        { tip: "grafik", baslik: "Dinledikçe sevilen şarkı", xlabel: "Dinleme sayısı", ylabel: "Beğeni", xmax: 12, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }, { v: 7, label: "7" }, { v: 9, label: "9" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, noktalar: [[0, 2], [0.2, 2.04], [0.4, 2.08], [0.6, 2.12], [0.8, 2.16], [1, 2.2]] },
            { id: "p", tip: "nokta", x: 1, y: 2.2, kilavuz: true, etiket: "1. dinleme" }
          ],
          durumlar: [
            { metin: "Yeni bir şarkıyı ilk kez dinliyorsun. Beğenin düşük: ne iyi ne kötü." },
            { metin: "Birkaç kez dinleyince şarkı tanıdık geliyor ve ==beğeni artıyor==.", set: { e: { noktalar: [[0, 2], [0.8, 3.18], [1.6, 4.14], [2.4, 4.93], [3.2, 5.58], [4, 6.11]] }, p: { x: 4, y: 6.11, etiket: "4. dinleme" } } },
            { metin: "Dinledikçe artış yavaşlar; eğri yatıklaşır. Tek başına tekrar, beğeniyi sonsuza dek yükseltmez.", set: { e: { noktalar: [[0, 2], [1.8, 4.36], [3.6, 5.86], [5.4, 6.82], [7.2, 7.43], [9, 7.82]] }, p: { x: 9, y: 7.82, etiket: "9. dinleme" } } }
          ] }
      ]
    },
    {
      baslik: "Kendini doğrulayan kehanet",
      kisa: "Bir kişiden ne beklediğin, onun davranışını değiştirip beklentini doğrular.",
      bloklar: [
        { tip: "adimlar", baslik: "Yeni sınıf arkadaşın \"ters biri\" diye duydun", adimlar: [
            { baslik: "İnanç", metin: "Duyduğuna göre Mert ters biri; ona soğuk ve mesafeli davranırsın." },
            { baslik: "Davranış", metin: "Mert sana karşılık verirken tedirgin ve kısa cevaplar verir." },
            { baslik: "Doğrulama", metin: "Sen: \"Gördün mü, ters biriymiş.\" ==İnancın kendi davranışınla gerçek oldu.==" }
          ] },
        { tip: "not", metin: "Buna *self-fulfilling prophecy* (kendini doğrulayan kehanet) denir: insanlar, başkalarının ya da kendilerinin inancını **doğrulayacak** davranışı başkalarından kendi davranışlarıyla çıkarır. Kehanet başlangıçta yanlış olsa da gerçekleşmiş gibi görünür." }
      ]
    },
    {
      baslik: "Sosyal karşılaştırma ve göreli yoksunluk",
      kisa: "Kendimizi başkalarıyla kıyaslarız; memnuniyet mutlak değil, göreli ölçülür.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⬆️", baslik: "*Upward social comparison*", maddeler: ["Kendinden daha iyi durumdakilerle kıyas", "Esin verebilir ya da kıskançlık yaratabilir"] },
          sag: { ikon: "⬇️", baslik: "*Downward social comparison*", maddeler: ["Kendinden daha kötü durumdakilerle kıyas", "Kendini iyi hissettirebilir"] },
          oyun: [
            { metin: "Sınıfın en yüksek notu alanla kendi notunu kıyaslamak.", cevap: "sol", neden: "Daha iyi durumdakiyle kıyas: yukarı." },
            { metin: "\"Ben en azından sınıfı geçtim, bazıları kalmış.\"", cevap: "sag", neden: "Daha kötü durumdakiyle kıyas: aşağı." },
            { metin: "Sosyal medyada tatildeki arkadaşlarına bakıp kendi evini sönük bulmak.", cevap: "sol", neden: "Daha iyi gördüğüyle kıyas: yukarı." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Social comparison", tr: "sosyal karşılaştırma", tanim: "Kendimizi toplumdaki ya da çevremizdeki diğer insanlarla kıyaslayarak değerlendirmemiz.", ornek: "Notunu sınıf ortalamasıyla karşılaştırmak." },
            { ikon: "😞", terim: "Relative deprivation", tr: "göreli yoksunluk", tanim: "İnsanların kendi yoksunluğunu mutlak durumlarına göre değil, başkalarına kıyasla hissetmesi.", ornek: "Aynı harçlığı alan iki öğrenciden, arkadaşlarının daha fazla aldığını görende hoşnutsuzluk." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Attribution*: davranışın nedenini kişide (*dispositional*) ya da koşullarda (*situational*) aramak.",
            "*Explanatory style*: iyi ve kötü olayları açıklama kalıbı; *optimistic* ya da *pessimistic*.",
            "*Locus of control*: sonuç bende (içsel) ya da bende değil (dışsal) inancı.",
            "*Fundamental attribution error*: başkasının davranışında kişiliği abartmak, durumu azımsamak.",
            "*Actor–observer bias*: kendime durum, başkasına kişilik yüklemek.",
            "*Self-serving bias*: başarıyı kendime, başarısızlığı koşullara yüklemek.",
            "*Mere exposure effect*: tekrar karşılaştıkça beğeni artar.",
            "*Self-fulfilling prophecy*: inancın, davranışınla gerçek olması.",
            "*Social comparison* yukarı ya da aşağı olabilir; *relative deprivation* başkasına kıyasla hissedilen yoksunluktur."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Elif, trafikte öndeki sürücü ani fren yapınca \"Bu insan dikkatsiz bir sürücü\" diyor. Kendisi aynı yerde ani fren yaptığında ise \"Yolun önüne bir çocuk çıktı\" diyor. Bu örüntü en iyi hangi kavramla açıklanır?",
      opts: ["*Self-serving bias*", "*Actor–observer bias*", "*Mere exposure effect*", "*Self-fulfilling prophecy*"],
      a: 1,
      why: "Aynı davranış için başkasına kişilik (dikkatsiz), kendine durum (çocuk) yüklüyor: *actor–observer bias*. En çekici yanlış şık A: *self-serving bias* kendi başarı ve başarısızlığını kıyaslar; burada başkasıyla kendi arasında fark vardır." },
    { q: "Kerem, matematik sınavından 90 alınca \"Çok çalıştım ve matematiğe yatkınım\", 40 alınca \"Hoca sorularda hata yapmış, süre de yetmedi\" diyor. Bu durum hangi yanlılığa en iyi örnektir?",
      opts: ["*Fundamental attribution error*", "*Actor–observer bias*", "*Self-serving bias*", "*Relative deprivation*"],
      a: 2,
      why: "Başarıyı kendi özelliklerine, başarısızlığı dış koşullara bağlamak *self-serving bias*'tır. En çekici yanlış şık B: burada kendi ve başkasının davranışı kıyaslanmıyor; yalnızca kendi iki sonucu var." },
    { q: "Selin şöyle diyor: \"Çalışsam da çalışmasam da notum şansa bağlı.\" Selin'in bu inancı en iyi hangi kavramla adlandırılır?",
      opts: ["*Internal locus of control*", "*Dispositional attribution*", "*External locus of control*", "*Optimistic explanatory style*"],
      a: 2,
      why: "Sonuçları kendi eylemlerinin değil şansın belirlediğine inanmak *external locus of control*'dür. En çekici yanlış şık B: *dispositional attribution* tek bir olayın nedenini kişiye bağlamaktır; burada genel bir inanç ve neden dışsal." },
    { q: "Bir okul radyosu bir grup öğrenciye hiç bilmedikleri bir şarkıyı farklı sayıda dinletiyor. Öğrencilerin beğeni puanları tabloda. Bu sonuç hangi kavramla uyumludur?",
      fig: { type: "table", caption: "Şarkı beğeni puanı (10 üzerinden)", head: ["Dinleme sayısı", "Ortalama beğeni"], rows: [["1", "2,5"], ["5", "4,8"], ["10", "6,3"]] },
      opts: ["*Mere exposure effect*", "*Fundamental attribution error*", "*Downward social comparison*", "*Cognitive dissonance*"],
      a: 0,
      why: "Dinleme sayısı arttıkça beğeni yükseliyor: *mere exposure effect*. En çekici yanlış şık D: *cognitive dissonance* davranış ile tutum çeliştiğinde ortaya çıkan rahatsızlıktır; burada böyle bir çelişki yok." },
    { q: "Bir öğretmen, yeni gelen Bora'nın \"zeki ama tembel\" olduğunu duyuyor ve ona hep düşük beklentiyle yaklaşıp zor soru sormuyor. Bora zamanla sınıfta sessizleşiyor ve öğretmen \"Dediğim gibi, tembelmiş\" diyor. Bu durum en iyi hangi kavramı örnekler?",
      opts: ["*Relative deprivation*", "*Self-fulfilling prophecy*", "*Self-serving bias*", "*Mere exposure effect*"],
      a: 1,
      why: "Öğretmenin beklentisi kendi davranışını belirledi; Bora'nın tepkisi de beklentiyi doğrulamış göründü: *self-fulfilling prophecy*. En çekici yanlış şık C: *self-serving bias* kişinin kendi sonuçlarını kendi lehine yorumlamasıdır." }
  ]
};
