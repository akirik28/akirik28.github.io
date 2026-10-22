/* Kitora not defteri · en202 · 2.2 Olay Örgüsü
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Oedipus Rex) + oyunun standart olay örgüsü. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en202",
  amac: "Bu konu *Oedipus Rex*’in hikâyesini zaman sırasıyla anlatıyor: oyundan önce olanlar, tek günde açılan soruşturma ve oyunun dönüm noktaları. Sahneleri doğru sırayla ve neden-sonuç bağıyla anlatabileceksin.",
  bolumler: [
    {
      baslik: "Oyundan önce olanlar",
      kisa: "Oyundan yıllar önce kehanet, terk edilen bir bebek ve Laius’un ölümü yaşanmıştı.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "Doğum", baslik: "Laius’a kehanet", metin: "Thebai kralı Laius’a oğlunun onu öldüreceği bildirilir. Oğulları doğunca Laius ile Jocasta bebeği, ayakları bağlı biçimde dağda ölüme bırakılmak üzere bir çobana verir." },
            { tarih: "Bebeklik", baslik: "Çoban acır", metin: "Çoban bebeği öldürmez; Korinthos’lu bir çobana verir. O da bebeği çocuğu olmayan kral Polybus ve kraliçe Merope’ye götürür. Adı *Oedipus* olur (“şişmiş ayak”)." },
            { tarih: "Gençlik", baslik: "Delphoi’de ikinci kehanet", metin: "Bir ziyafette biri Oedipus’a gerçek oğul olmadığını söyler. Delphoi’ye giden Oedipus, babasını öldüreceğini ve annesiyle evleneceğini öğrenir; Korinthos’a hiç dönmemeye karar verir." },
            { tarih: "Yolda", baslik: "Üç yolun birleştiği yer", metin: "Kavşakta arabadaki yaşlı bir adamla kavga eder ve onu, adamlarıyla birlikte öldürür. Yaşlı adam Laius’tur; yalnızca bir hizmetkâr kaçar." },
            { tarih: "Thebai", baslik: "Sfenks ve taht", metin: "Oedipus Sfenks’in bilmecesini çözer, şehri kurtarır. Kral olur, dul kraliçe Jocasta ile evlenir ve çocukları olur." },
            { tarih: "Oyun günü", baslik: "Salgın", metin: "Yıllar sonra Thebai’yi salgın vurur. Oyun, çaresiz halkın Oedipus’un sarayının önüne toplanmasıyla açılır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔮", terim: "Oracle", tr: "kehanet, kâhin sözü", tanim: "Yunanlar tanrı Apollo’nun geleceği Delphoi’deki kâhinleri aracılığıyla bildirdiğine inanırdı. Kehanet olayı önceden haber verir.", ornek: "Laius’a ve sonra Oedipus’a bildirilen iki kehanet." },
            { ikon: "🦁", terim: "Sphinx", tr: "Sfenks", tanim: "Kadın başlı, aslan gövdeli, kanatlı yaratık; Thebai’nin yolunu tutup bilmeceyle yolcuları tehdit etmişti. Oyunda sahnede görünmez, yalnızca anılır.", ornek: "Oedipus’un şöhreti, Sfenks’i yenmesinden gelir." }
          ] },
        { tip: "tuzak", metin: "Oedipus’un kaçışı oyunun en kritik ironisidir ve sık yanlış anlaşılır.", yanlis: "Oedipus evlatlık olduğunu ve gerçek ailesini biliyordu.", dogru: "Oedipus, Polybus ile Merope’yi gerçek anne babası sanıyordu. Kehaneti önlemek için kaçtığı yerde onu gerçekleştirdi." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *Before the play begins, an oracle warns Laius that his son will kill him.*", metin: "Oyundan önceki ilk kehanet." },
            { ikon: "✍️", baslik: "*Oedipus leaves Corinth because he believes Polybus and Merope are his real parents.*", metin: "Kaçışın nedeni." },
            { ikon: "✍️", baslik: "*By fleeing the prophecy, he unknowingly fulfills it.*", metin: "Kehanetin kendini gerçekleştirmesi." }
          ] }
      ]
    },
    {
      baslik: "Oyunun planı: bölümler ve gerilim",
      kisa: "Oyun saray önünde geçer; gerilim her bölümde bir basamak tırmanır.",
      bloklar: [
        { tip: "tablo", baslik: "Bölümler ve satır aralıkları", head: ["Bölüm", "Satır", "Kim?", "Ne olur?"], rows: [
            ["*Prologos*", "1–150", "Oedipus, rahip, Creon", "Salgın; Delphoi’nin cevabı: Laius’un katili bulunmalı"],
            ["*Parodos*", "151–215", "Koro", "Koro tanrılara yakarır"],
            ["*Episode 1*", "216–462", "Oedipus, Tiresias", "Katile lanet; Tiresias Oedipus’u suçlar"],
            ["*Stasimon 1*", "463–512", "Koro", "Koro kararsız: ne inanır ne reddeder"],
            ["*Episode 2*", "513–862", "Creon, Jocasta", "Creon’la kavga; üç yol kavşağı ve “haydutlar”"],
            ["*Stasimon 2*", "863–910", "Koro", "Tanrılara saygı ve *hubris* uyarısı"],
            ["*Episode 3*", "911–1085", "Haberci, Jocasta", "Polybus öldü; Oedipus’un evlatlık olduğu çıkar; Jocasta anlar"],
            ["*Stasimon 3*", "1086–1109", "Koro", "Oedipus bir tanrının çocuğu mu? Umutlu şarkı"],
            ["*Episode 4*", "1110–1185", "Çoban, haberci", "Çoban gerçeği söyler"],
            ["*Stasimon 4*", "1186–1222", "Koro", "Ağıt: hiçbir insan mutlu sayılamaz"],
            ["*Exodos*", "1223–1530", "Haberci, Oedipus, Creon", "Jocasta’nın ölümü; kör etme; sürgün isteği"]
          ], not: "Satır numaraları Yunanca metne göredir ve yaklaşıktır; bölüm sınırları baskıdan baskıya birkaç satır oynayabilir." },
        { tip: "grafik", baslik: "Gerilim bölüm bölüm nasıl tırmanır?", xlabel: "Bölümler", ylabel: "Gerilim", xmax: 12, ymax: 10,
          xticks: [{ v: 1, label: "Pr" }, { v: 2, label: "Pa" }, { v: 3, label: "E1" }, { v: 4, label: "S1" }, { v: 5, label: "E2" }, { v: 6, label: "S2" }, { v: 7, label: "E3" }, { v: 8, label: "S3" }, { v: 9, label: "E4" }, { v: 10, label: "S4" }, { v: 11, label: "Ex" }],
          yticks: [{ v: 2, label: "düşük" }, { v: 9, label: "yüksek" }],
          ogeler: [
            { id: "g", tip: "egri", renk: 1, etiket: "Gerilim", noktalar: [[1, 4], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5]] }
          ],
          durumlar: [
            { metin: "*Prologos* ve *parodos*: salgın ve dualar. Sorun açıktır ama gerilim henüz düşük." },
            { metin: "*Episode 1*: Tiresias “katil sensin” der, gerilim sıçrar. *Stasimon 1*’de koro kararsızdır; gerilim biraz soluklanır.", set: { g: { noktalar: [[1, 4], [2, 4.5], [3, 6.5], [4, 5.5], [4, 5.5], [4, 5.5], [4, 5.5], [4, 5.5], [4, 5.5], [4, 5.5], [4, 5.5], [4, 5.5]] } } },
            { metin: "*Episode 2*: Creon’la kavga, Jocasta’nın üç yol hikâyesi. Oedipus ilk kez kendinden kuşkulanır. *Stasimon 2* dinî bir duraklamadır.", set: { g: { noktalar: [[1, 4], [2, 4.5], [3, 6.5], [4, 5.5], [5, 7.2], [6, 6.4], [6, 6.4], [6, 6.4], [6, 6.4], [6, 6.4], [6, 6.4], [6, 6.4]] } } },
            { metin: "*Episode 3*: Polybus’un ölümüyle sahte bir rahatlama, ardından Jocasta’nın korkusu. *Stasimon 3*’teki umut gerilimi geçici olarak düşürür.", set: { g: { noktalar: [[1, 4], [2, 4.5], [3, 6.5], [4, 5.5], [5, 7.2], [6, 6.4], [7, 8.6], [8, 6.8], [8, 6.8], [8, 6.8], [8, 6.8], [8, 6.8]] } } },
            { metin: "*Episode 4* zirvedir: çoban konuşur. *Exodos* felaketi getirir ve oyun sessiz bir yasla biter.", set: { g: { noktalar: [[1, 4], [2, 4.5], [3, 6.5], [4, 5.5], [5, 7.2], [6, 6.4], [7, 8.6], [8, 6.8], [9, 9.6], [10, 8.2], [11, 9], [11.7, 5.5]] } } }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The action unfolds in front of the royal palace of Thebes.*", metin: "Mekânı belirt." },
            { ikon: "✍️", baslik: "*Tension builds with each episode, while the choral odes give the audience a pause.*", metin: "Yapı ve gerilim." },
            { ikon: "✍️", baslik: "*The plot moves like an investigation: each clue brings Oedipus closer to himself.*", metin: "Olay örgüsünün özü." }
          ] }
      ]
    },
    {
      baslik: "Soruşturma başlar: Prologos – Episode 2",
      kisa: "Oedipus katili arar; her ipucu onu biraz daha kendisine yaklaştırır.",
      bloklar: [
        { tip: "adimlar", baslik: "Dört sahnede soruşturma", adimlar: [
            { baslik: "*Prologos*: görev", metin: "Halk Oedipus’tan çare ister. Creon Delphoi’den döner: Laius’un katili bulunup cezalandırılmalı, yoksa salgın bitmez. Oedipus söz verir." },
            { baslik: "*Parodos*: dua", metin: "Koro tanrılara salgının bitmesi için yalvarır." },
            { baslik: "*Episode 1*: lanet ve suçlama", metin: "Oedipus katile lanet eder. Kör kâhin Tiresias önce konuşmak istemez; Oedipus onu öfkelendirince “katil sensin” der. Oedipus bunu Creon’un komplosu sayar." },
            { baslik: "*Episode 2*: Creon ve Jocasta", metin: "Oedipus Creon’u hain sayar; Jocasta kavgayı keser. Laius’un üç yolun birleştiği yerde öldüğünü anlatınca Oedipus kendi geçmişini hatırlar." }
          ] },
        { tip: "ornek", baslik: "Oedipus’un hesabı: katil ben olabilir miyim?", durum: "Jocasta, tek tanığın Laius’u “haydutlar” öldürdü dediğini anlatır. Oedipus ise yıllar önce yolda tek başına birkaç kişiyi öldürmüştü.",
          adimlar: [
            "Jocasta’ya göre Laius, üç yolun birleştiği bir yerde yabancılar tarafından öldürüldü.",
            "Oedipus yıllar önce tam böyle bir kavşakta yaşlı bir adamı ve adamlarını öldürmüştü; korkar.",
            "Tek tanık “haydutlar” demişti. Haydut çoğuldur; tek başına bir kişi “birçok kişi” olamaz.",
            "Karar: tanık çağrılır. Oedipus’un umudu tek bir sözcüğe, çoğul ile tekil farkına bağlanır."
          ],
          sonuc: "Oedipus kanıt arayan bir dedektif gibi davranır; ama her kanıt ==onu kendisine== doğru çevirir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The prologue sets the problem: the plague will end only when Laius’s killer is found.*", metin: "Açılışın görevi." },
            { ikon: "✍️", baslik: "*Oedipus acts like a detective, but the clues point back to himself.*", metin: "Ana ironi." },
            { ikon: "✍️", baslik: "*In Episode 2, the detail of the crossroads troubles Oedipus.*", metin: "İlk gerçek kuşku." }
          ] }
      ]
    },
    {
      baslik: "Dönüm noktası: Korinthos’tan gelen haber",
      kisa: "İyi haber tersine döner: haberci rahatlatmak ister, gerçeği açığa çıkarır.",
      bloklar: [
        { tip: "adimlar", baslik: "*Episode 3* adım adım", adimlar: [
            { baslik: "Jocasta dua eder", metin: "Oedipus’un korkusu artmıştır; Jocasta Apollo’ya sunu götürür." },
            { baslik: "Haberci gelir", metin: "Korinthos’lu haberci Polybus’un yaşlılıktan öldüğünü söyler. Jocasta “kehanetler boş” der; Oedipus rahatlar ama annesinden hâlâ korkar." },
            { baslik: "Müjde yıkıma döner", metin: "Haberci, Oedipus’u rahatlatmak için Polybus ve Merope’nin gerçek anne babası olmadığını söyler. Bebeği Kithairon dağında bir çoban kendisine vermiştir." },
            { baslik: "Jocasta anlar", metin: "Jocasta gerçeği fark eder ve Oedipus’a araştırmayı bırakmasını yalvarır. Oedipus onu soyundan utanıyor sanır; Jocasta saraya çekilir." }
          ] },
        { tip: "ikili", sol: { ikon: "😌", baslik: "Rahatlatır", maddeler: ["Oedipus’un korkusunu azaltır", "Kehaneti boş gösterir"] },
          sag: { ikon: "🔦", baslik: "Açığa çıkarır", maddeler: ["Oedipus’un kimliğine yaklaştırır", "Gerçeği ortaya çıkarır"] },
          oyun: [
            { metin: "Haberci: “Polybus yaşlılıktan öldü.”", cevap: "sol", neden: "Babası öldü ama Oedipus onu öldürmedi: korku azalır." },
            { metin: "Haberci: “Polybus ve Merope senin gerçek anne baban değil.”", cevap: "sag", neden: "Oedipus’un kökeni sorgulanır; gerçeğe bir adım kalır." },
            { metin: "Haberci: “Bebekken ayak bileklerinin bağını ben çözdüm.”", cevap: "sag", neden: "Yara izi ve ad (“şişmiş ayak”) kimliğe işaret eder." },
            { metin: "Jocasta: “Kehanetlere önem verme, kimse geleceği bilemez.”", cevap: "sol", neden: "Jocasta korkuyu bastırmak ister; gerçeği henüz bilmez." }
          ] },
        { tip: "tuzak", metin: "Polybus’un doğal ölümü Oedipus’a “kehanet yalanmış” hissi verir. Ama bu yargı yanlıştır.", yanlis: "Polybus’un doğal ölümü kehanetin yanlış olduğunu kanıtlar.", dogru: "Polybus Oedipus’un gerçek babası değildir. Kehanet, Oedipus’un gerçek babası Laius için gerçekleşmiştir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The messenger intends to comfort Oedipus, but his news reveals the truth.*", metin: "Niyet ile sonuç ters düşer." },
            { ikon: "✍️", baslik: "*Jocasta realizes the truth first and begs Oedipus to stop searching.*", metin: "Jocasta’nın rolü." },
            { ikon: "✍️", baslik: "*This is the peripeteia: good news becomes the worst news.*", metin: "Tersine dönüş." }
          ] }
      ]
    },
    {
      baslik: "Çoban, kör etme ve sürgün",
      kisa: "Çoban gerçeği söyler; Jocasta ölür, Oedipus kendini kör eder ve sürgün ister.",
      bloklar: [
        { tip: "adimlar", baslik: "*Episode 4* ve *Exodos*", adimlar: [
            { baslik: "Çoban sorguda", metin: "Laius’un hizmetkârı olan çoban konuşmak istemez. Oedipus tehdit edince bebeği Jocasta’nın verdiğini ve Laius’un evinden olduğunu söyler. Oedipus gerçeği anlar." },
            { baslik: "*Stasimon 4*: ağıt", metin: "Koro Oedipus’un yazgısını örnek gösterip insan mutluluğunun ne kadar kırılgan olduğunu söyler." },
            { baslik: "Haberci: sahne dışı felaket", metin: "Saraydan çıkan hizmetkâr, Jocasta’nın odasında kendini astığını ve Oedipus’un onun elbisesindeki altın iğnelerle gözlerini oyduğunu anlatır." },
            { baslik: "Oedipus kör olarak çıkar", metin: "Oedipus sürgün ister ve kızlarına sarılır. Creon, Apollo’ya danışmadan onu göndermek istemez." },
            { baslik: "Koro", metin: "Koro son sözünü söyler: ölüm gününe kadar kimseye mutlu denmemeli." }
          ] },
        { tip: "tablo", baslik: "Sahnede mi, sahne dışında mı?", head: ["Olay", "Nerede?", "Nasıl öğreniriz?"], rows: [
            ["Laius’un ölümü", "Geçmişte", "Jocasta ve Oedipus’un anlatması"],
            ["Bebeğin dağa bırakılması", "Geçmişte", "Haberci ve çobanın anlatması"],
            ["Jocasta’nın ölümü", "Sahne dışı", "İkinci habercinin anlatması (*messenger speech*)"],
            ["Oedipus’un kendini kör etmesi", "Sahne dışı", "İkinci habercinin anlatması"],
            ["Kör Oedipus’un çıkışı", "Sahnede", "Seyirci görür"]
          ], vurgu: 2, not: "Yunan tragedyasında şiddet sahnede gösterilmez; haberci anlatır." },
        { tip: "tuzak", metin: "Sınavda en sık hata, sonu yanlış hatırlamaktır.", yanlis: "Oedipus oyunun sonunda kendini öldürür.", dogru: "Jocasta kendini asar; Oedipus kör eder ve sürgün ister. Oyun bitince hayattadır; Creon karar için Apollo’ya danışmak ister." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *Violence happens offstage; a messenger describes it.*", metin: "Sahne dışı şiddet." },
            { ikon: "✍️", baslik: "*After Jocasta’s suicide, Oedipus blinds himself with her brooches.*", metin: "Exodos’un çekirdeği." },
            { ikon: "✍️", baslik: "*The play ends with the chorus warning that no one should be called happy before death.*", metin: "Kapanış." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Oyundan önce: Laius’a kehanet, bebeğin dağa bırakılması, Korinthos’ta büyüme, Delphoi, kavşakta cinayet, Sfenks, taht.",
            "Oedipus Polybus ve Merope’yi gerçek ailesi sanıyordu; kaçarken kehaneti gerçekleştirdi.",
            "Yapı: *prologos*, *parodos*, dört *episode* ve dört *stasimon*, *exodos*; olay saray önünde geçer.",
            "Soruşturma: Tiresias suçlar, Jocasta’nın üç yol hikâyesi korku verir; umut tek bir sözcüğe (“haydutlar”) bağlanır.",
            "Dönüm noktası: Korinthos’lu haberci rahatlatmak ister, gerçeği açar (*peripeteia*); Jocasta ilk anlayandır.",
            "Çoban gerçeği söyler (*anagnorisis*); Jocasta kendini asar, Oedipus kör eder, sürgün ister.",
            "Şiddet sahne dışındadır ve haberci anlatır; Oedipus oyunun sonunda ölmez.",
            "Her sahne, bir öncekinin sonucudur: olay örgüsü bir neden-sonuç zinciridir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdaki cümlelerden hangisi oyun başlamadan önce olanlara göre doğrudur?",
      opts: ["Oedipus Polybus ve Merope’nin gerçek oğlu olmadığını biliyordu", "Laius ile Jocasta, kehanet yüzünden bebeklerini bir çobana verdi", "Oedipus Laius’u Thebai sarayında öldürdü", "Sfenks Oedipus’un annesiydi"], a: 1,
      why: "Laius’a oğlunun onu öldüreceği bildirilmişti; bebek dağa bırakılmak üzere çobana verildi. A yanlıştır: Oedipus kehaneti önlemek için Korinthos’tan tam da gerçek ailesi olduğunu sandığı için kaçtı. C yanlıştır: cinayet bir kavşakta işlendi." },
    { q: "Jocasta, tek tanığın Laius’u “haydutlar” (çoğul) öldürdü dediğini anlatır. Oedipus yolda tek başına bir grup insanı öldürmüştü. Bu ayrıntı Oedipus için neden umut kaynağıdır?",
      opts: ["Haydutlar Jocasta’yı kaçırmıştır", "Laius’u öldürenlerin Thebai’li olduğunu gösterir", "Çoban Oedipus’un gerçek babasını bulmuştur", "Çoğul söz doğruysa katil tek kişi olan Oedipus olamaz"], a: 3,
      why: "Oedipus, tanığın ifadesi çoğulda kalırsa kendisinin aklanacağını düşünür. A ve B oyunda yoktur; C başka bir sahneyle (çoban) karıştırılmıştır." },
    { q: "*Episode 3*’te haberci, Oedipus’a bebekken ayak bileklerinin bağını kendisinin çözdüğünü söyler. Bu bilgiden hemen sonra ne olur?",
      opts: ["Jocasta gerçeği fark eder ve Oedipus’a araştırmayı bırakmasını yalvarır", "Oedipus Creon’u sürgüne gönderir", "Koro Tiresias’ı sahneden kovar", "Oedipus kendini kör eder"], a: 0,
      why: "Jocasta’nın anlaması Oedipus’tan önce gelir. D yanlış: kör etme çok sonra, *exodos*’ta olur ve çoban konuştuktan sonradır." },
    { q: "*Exodos*’ta hangisi doğrudur?",
      opts: ["Jocasta’nın ölümü sahnede gösterilir", "Oedipus’un kendini kör etmesi sahnede gösterilir", "Jocasta’nın ölümü ve kör etme bir haberci tarafından anlatılır; kör Oedipus sahneye çıkar", "İkisi de seyircinin gözü önünde gösterilir"], a: 2,
      why: "Yunan tragedyasında şiddet sahnede gösterilmez; haberci anlatır. Seyirci yalnızca sonucu, kör Oedipus’u görür. A, B ve D bu geleneğe aykırıdır." },
    { q: "Hangisi bir *stasimon*’dur?",
      opts: ["Oedipus ile Tiresias’ın tartışması", "Koronun Oedipus’un bir tanrının çocuğu olabileceğini umut ettiği şarkı", "Çobanın sorgusu", "Haberin Jocasta’nın ölümünü anlatması"], a: 1,
      why: "*Stasimon*, episodlar arasında koronun söylediği şarkıdır. Diğer üç şık aktörlerin ya da habercinin yer aldığı episod veya exodos sahnelerinin parçasıdır." }
  ]
};
