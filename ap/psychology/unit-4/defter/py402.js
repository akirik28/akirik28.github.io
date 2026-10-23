/* Kitpath not defteri · py402 · 4.2 Tutumların Oluşumu ve Değişimi
   Kaynak: College Board CED, Topic 4.2 (4.2.A, 4.2.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py402",
  amac: "Bu konu tutumların (*attitudes*) nasıl oluştuğunu ve neden bazen değişmediğini anlatıyor. Stereotip, önyargı ve ayrımcılığı, örtük tutumları, kanıta rağmen inanç sürdürmeyi ve bilişsel çelişkiyi (*cognitive dissonance*) öğreneceksin.",
  bolumler: [
    {
      baslik: "Tutum nedir? Açık ve örtük",
      kisa: "Tutum, bir şeye yönelik değerlendirmedir; kişi farkında olmayabilir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Duygu", alt: "nasıl hissediyorum" }, "+",
            { t: "Davranış", alt: "nasıl davranıyorum" }, "+",
            { t: "Düşünce", alt: "ne düşünüyorum" }, "=",
            { t: "*Attitude*", alt: "tutum" }
          ], aciklama: "Tutum, bir kişi, nesne ya da fikre yönelik değerlendirmedir. Üç yanı da vardır: duygu, davranış ve düşünce." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🗣️", terim: "Explicit attitude", tr: "açık tutum", tanim: "Kişinin farkında olduğu ve söyleyebildiği tutum.", ornek: "\"Kantin yemeklerini beğenmiyorum.\"" },
            { ikon: "🫥", terim: "Implicit attitude", tr: "örtük tutum", tanim: "Kişinin sahip olduğu ama farkında olmadığı ya da kabul etmediği tutum.", ornek: "Kendini adil sanan biri, bilmeden bazı gruplara daha olumsuz davranabilir." }
          ] }
      ]
    },
    {
      baslik: "Stereotip, önyargı, ayrımcılık",
      kisa: "Stereotip düşünce, önyargı duygu, ayrımcılık davranıştır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Stereotype", tr: "kalıp yargı", tanim: "Bir grup hakkındaki genelleştirilmiş kavram. Karar verirken **bilişsel yükü** azaltır ama çoğu zaman yanlıştır.", ornek: "\"Bilgisayar kulübündekiler hep sessizdir.\"" },
            { ikon: "😒", terim: "Prejudice", tr: "önyargı", tanim: "Bir gruba yönelik önceden oluşmuş, çoğunlukla olumsuz tutum (duygu).", ornek: "O kulübe girmeyeceğim, sıkıcıdır." },
            { ikon: "🚫", terim: "Discrimination", tr: "ayrımcılık", tanim: "Bir grubun üyelerine karşı gösterilen haksız davranış.", ornek: "Kulüp üyelerini etkinliğe çağırmamak." }
          ] },
        { tip: "ikili", sol: { ikon: "💭", baslik: "*Prejudice* (tutum)", maddeler: ["Hissedilen ya da inanılan şey", "İçeride kalır"] },
          sag: { ikon: "🛑", baslik: "*Discrimination* (davranış)", maddeler: ["Yapılan şey", "Dışarıdan görülür"] },
          oyun: [
            { metin: "\"Yeni gelen öğrenciler bana güvenilmez geliyor.\"", cevap: "sol", neden: "Duygu ve inanç: önyargı." },
            { metin: "Yeni gelen öğrencileri takım seçmelerine almamak.", cevap: "sag", neden: "Haksız davranış: ayrımcılık." },
            { metin: "\"Rakip takımın taraftarlarından hoşlanmıyorum, yanlarında huzursuz oluyorum.\"", cevap: "sol", neden: "Genelleme ve olumsuz tutum: önyargı (stereotipe dayanır)." },
            { metin: "Rakip takım taraftarı olan birinin kulüp başvurusunu hiç incelemeden reddetmek.", cevap: "sag", neden: "Eylem: ayrımcılık." }
          ] },
        { tip: "tuzak", metin: "Stereotip zihinde bir kısayoldur ve hem sonuç hem neden olabilir: önyargılı deneyimlerin ürünü olduğu gibi onları da besler.", yanlis: "*Prejudice* ile *discrimination* aynı şeydir.", dogru: "==*Prejudice* tutumdur (duygu), *discrimination* davranıştır.== Stereotip ise düşünce yanıdır; ikisinin de temelinde yer alır." }
      ]
    },
    {
      baslik: "Örtük tutumların dört yüzü",
      kisa: "Farkında olmadan kendi grubumuzu kayırır, dışındakini aynı sanarız.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🤝", terim: "In-group bias", tr: "iç grup yanlılığı", tanim: "Kendi grubumuza daha olumlu davranıp onu kayırma eğilimi.", ornek: "Aynı sınıftan arkadaşımın cevabını daha çok haklı bulmak." },
            { ikon: "👥", terim: "Out-group homogeneity bias", tr: "dış grup türdeşliği yanlılığı", tanim: "Kendi grubumuzu çeşitli, dış grubu birbirine benzer görme eğilimi.", ornek: "Kendi sınıfımda herkes ayrı, diğer sınıf \"hepsi aynı\"." },
            { ikon: "🌍", terim: "Ethnocentrism", tr: "etnosantrizm", tanim: "Kendi kültürünü doğru ve üstün kabul edip başkalarını ona göre yargılamak.", ornek: "\"Bizim yemek adabı doğru, ötekiler tuhaf.\"" },
            { ikon: "⚖️", terim: "Just-world phenomenon", tr: "adil dünya olgusu", tanim: "Dünyanın adil olduğuna ve herkesin hak ettiğini bulduğuna inanma.", ornek: "\"Sınavdan kalan zaten çalışmamıştır.\"" }
          ] },
        { tip: "tuzak", metin: "*Out-group homogeneity* ile *in-group bias*'ı kayırma ve benzerlik ayrımıyla ayır.", yanlis: "Dış grubu \"hepsi aynı\" görmek, iç grubu kayırmaktır.", dogru: "==Kayırmak== *in-group bias*, ==\"hepsi birbirine benziyor\" demek== *out-group homogeneity bias*'tır. Üçüncüsü olan *ethnocentrism* ise kendi **kültürünü** ölçü almaktır." }
      ]
    },
    {
      baslik: "İnanç direnci ve doğrulama yanlılığı",
      kisa: "Kanıt çürütse bile inanç sürebilir; doğrulayanı ararız.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Belief perseverance", tr: "inanç direnci", tanim: "İnancın, yanlış olduğunu gösteren kanıta rağmen sürmesi.", ornek: "Takımın şampiyon olacağından, üst üste yenilgiye rağmen şüphe etmemek." },
            { ikon: "🔎", terim: "Confirmation bias", tr: "doğrulama yanlılığı", tanim: "Kendi inancını destekleyen bilgiyi arayıp onu çürüten bilgiyi görmezden gelme.", ornek: "Yalnızca burcunun tuttuğu günleri hatırlamak." }
          ] },
        { tip: "adimlar", baslik: "\"Bu uygulama hep doğru tahmin eder\"", adimlar: [
            { baslik: "İnanç", metin: "Ece, hava uygulamasının hep doğru bildiğine inanıyor." },
            { baslik: "Seçici bakış", metin: "Doğru bildiği günleri hatırlıyor, yanıldığı günleri unutuyor: ==*confirmation bias*==." },
            { baslik: "Direnç", metin: "Arkadaşı tahminlerin çoğunun tutmadığını gösterince bile \"yine de çoğu doğru\" diyor: ==*belief perseverance*==." }
          ] }
      ]
    },
    {
      baslik: "Bilişsel çelişki: ruhumuzdaki huzursuzluk",
      kisa: "Eylem ve tutum çelişince rahatsız oluruz, birini değiştirerek gideririz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "😣", terim: "Cognitive dissonance", tr: "bilişsel çelişki", tanim: "Eylemlerimiz ile tutumlarımız çeliştiğinde duyulan zihinsel rahatsızlık. İnsanlar bunu azaltmak için eylemini ya da tutumunu değiştirir.", ornek: "\"Çevreciyim\" diyen kişinin her gün plastik şişe satın alması." }
          ] },
        { tip: "grafik", baslik: "Çelişki rahatsızlık yaratır, çözüm onu azaltır", xlabel: "Zaman", ylabel: "Rahatsızlık", xmax: 10, ymax: 10,
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 1], [2, 1], [3, 1], [5, 1], [7, 1], [10, 1]] },
            { id: "t1", tip: "yazi", x: 3, y: 9.4, metin: "çelişki başlıyor", gizli: true },
            { id: "t2", tip: "yazi", x: 7, y: 5.6, metin: "çelişki giderildi", gizli: true }
          ],
          durumlar: [
            { metin: "Tutumun (\"plastik kötü\") ile davranışın (plastik şişe almak) uyumlu. Rahatsızlık düşük." },
            { metin: "Çelişki başlıyor: bu bilgiyle yine plastik şişe alıyorsun. ==Rahatsızlık hızla yükselir.==", set: { c: { noktalar: [[0, 1], [2, 1], [3, 8], [5, 8.2], [7, 8.4], [10, 8.5]] } }, goster: ["t1"] },
            { metin: "Eylemini değiştir (şişe almayı bırak) ya da tutumunu (\"tek şişenin zararı yok\") yumuşat: ==rahatsızlık azalır==.", set: { c: { noktalar: [[0, 1], [2, 1], [3, 8], [5, 8.2], [7, 3.2], [10, 1.5]] } }, goster: ["t2"] }
          ] },
        { tip: "ornek", baslik: "Sıkıcı bir iş için küçük ödül", durum: "Okul panosunu 3 saat boyunca sıkıcı bir şekilde yeniden düzenledin ve karşılığında sadece 10 TL aldın. Yine de arkadaşlarına \"aslında eğlenceliydi\" diyorsun.",
          adimlar: ["Tutum: iş sıkıcıydı. Davranış: 3 saat çalıştın.", "Ödül küçük; davranışı \"para için yaptım\" diye haklı çıkaramıyorsun: çelişki var.", "Rahatsızlığı gidermek için tutumunu değiştiriyorsun: \"eğlenceliymiş.\""],
          sonuc: "Eylem değişemeyeceği için **tutum** davranışa uydu. Ödül büyük olsaydı (ör. 200 TL) davranış zaten haklı çıkar, tutumu değiştirmene gerek kalmazdı." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Attitude*: duygu, davranış ve düşünceyi içeren değerlendirme; *explicit* ya da *implicit* olabilir.",
            "*Stereotype* düşünce (bilişsel yükü azaltır), *prejudice* duygu, *discrimination* davranıştır.",
            "*In-group bias*: kendi grubunu kayırmak.",
            "*Out-group homogeneity bias*: dış grubu hep aynı görmek.",
            "*Ethnocentrism*: kendi kültürünü ölçü almak; *just-world phenomenon*: herkes hak ettiğini bulur inancı.",
            "*Belief perseverance*: kanıta rağmen inancı sürdürmek; *confirmation bias* buna eşlik edebilir.",
            "*Cognitive dissonance*: eylem ile tutum çelişince duyulan rahatsızlık.",
            "Rahatsızlık, eylemi ya da tutumu değiştirerek azaltılır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir şirket yöneticisi \"Üniversiteyi yeni bitirenler sorumsuzdur\" diye düşünüyor ve bu yüzden yeni mezunların başvurularını hiç okumadan reddediyor. Hangi ifade bu yöneticinin **ayrımcılık** (*discrimination*) örneğini doğru gösterir?",
      opts: ["\"Yeni mezunlar sorumsuzdur\" düşüncesi", "Yeni mezunlara karşı duyduğu hoşnutsuzluk", "Başvuruları okumadan reddetmesi", "Kendi iş arkadaşlarını kayırması"],
      a: 2,
      why: "Ayrımcılık davranıştır: başvuruları reddetmek. A şıkkı stereotip (düşünce), B şıkkı önyargı (duygu). En çekici yanlış şık B: önyargı tutumdur, davranış değildir." },
    { q: "Murat, sınıf arkadaşı ağır bir hastalık geçirince \"Zaten düzensiz yaşıyordu, bunu hak etti\" diyor. Murat'ın düşüncesi en iyi hangi kavramı örnekler?",
      opts: ["*Out-group homogeneity bias*", "*Just-world phenomenon*", "*In-group bias*", "*Belief perseverance*"],
      a: 1,
      why: "Kötü olayların kişinin hak ettiği sonuç olduğuna inanmak, dünyanın adil olduğu inancına dayanır: *just-world phenomenon*. En çekici yanlış şık C: *in-group bias* kendi grubu kayırmaktır; burada böyle bir grup karşılaştırması yok." },
    { q: "Bir okulda iki voleybol takımı var. A takımının oyuncuları, kendi takımındaki herkesin oynayış tarzının farklı olduğunu söylerken B takımı için \"Hepsi aynı oynuyor\" diyor. Bu durum en iyi hangi kavramı örnekler?",
      opts: ["*Ethnocentrism*", "*Confirmation bias*", "*Cognitive dissonance*", "*Out-group homogeneity bias*"],
      a: 3,
      why: "Kendi grubunu çeşitli, dış grubu birbirine benzer görmek *out-group homogeneity bias*'tır. En çekici yanlış şık A: *ethnocentrism* kültür ölçüsünü ilgilendirir; burada kültürel bir üstünlük iddiası yok." },
    { q: "Defne, kendini çevreci olarak tanımlıyor ve her gün tek kullanımlık bardak kullanıyor. Bir süre sonra \"Tek bir bardak zaten dünyayı değiştirmez\" demeye başlıyor. Bu söz en iyi hangi süreci örnekler?",
      opts: ["Tutumu davranışa uydurarak *cognitive dissonance*'ı azaltmak", "*Fundamental attribution error*", "*Mere exposure effect*", "*Self-fulfilling prophecy*"],
      a: 0,
      why: "Defne'nin tutumu (çevrecilik) ile davranışı (tek kullanımlık bardak) çelişiyor; rahatsızlığı azaltmak için tutumunu yumuşatıyor. En çekici yanlış şık B: temel yükleme hatası başkalarının davranışına kişilik yüklemekle ilgilidir." },
    { q: "Ece, hava uygulamasının hep doğru tahmin ettiğine inanıyor. Tablodaki veriler bunun doğru olmadığını gösteriyor, ama Ece yine de \"Çoğu gün tutuyor\" diyerek yalnızca tuttuğu günleri hatırlıyor. Bu durum en iyi hangi kavram ikilisiyle açıklanır?",
      fig: { type: "table", caption: "Uygulamanın tahminleri", head: ["Gün", "Tahmin", "Gerçekleşen"], rows: [["Pzt", "Güneşli", "Yağmurlu"], ["Sal", "Yağmurlu", "Yağmurlu"], ["Çar", "Güneşli", "Bulutlu"], ["Per", "Bulutlu", "Güneşli"], ["Cum", "Güneşli", "Yağmurlu"]] },
      opts: ["*In-group bias* ve *ethnocentrism*", "*Social comparison* ve *relative deprivation*", "*Belief perseverance* ve *confirmation bias*", "*Stereotype* ve *discrimination*"],
      a: 2,
      why: "Beş günün yalnızca birinde tahmin tutmuş; Ece kanıta rağmen inancını sürdürüyor (*belief perseverance*) ve yalnızca doğrulayan günleri hatırlıyor (*confirmation bias*). En çekici yanlış şık A: bu iki kavram grup yanlılığıyla ilgilidir; senaryoda grup yok." }
  ]
};
