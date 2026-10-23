/* Kitpath not defteri · en202 · 2.2 Olay Örgüsü
   Kaynak: öğretmen (Dr Byrd) Oedipus belgeleri (sahne yapısı ve satır aralıkları: Fagles baskısı, defterde Fagles alıntısı yok) + oyunun standart olay örgüsü. Alıntı: yalnız F. Storr çevirisi (1912) ve R. C. Jebb çevirisi (1887). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en202",
  amac: "Bu konu *Oedipus Rex*’in hikâyesini zaman sırasıyla anlatıyor: oyundan önce olanlar, tek günde açılan soruşturma ve oyunun dönüm noktaları. Sahneleri Fagles baskısının bölüm aralıklarıyla ve neden-sonuç bağıyla anlatabileceksin.",
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
            { ikon: "🔮", terim: "Oracle", tr: "kehanet, kâhin sözü", tanim: "Yunanlar tanrı Apollo’nun geleceği Delphoi’deki kâhinleri aracılığıyla bildirdiğine inanırdı. Oyunda Apollo’nun buyruğu salgının çaresini de belirler.", ornek: "Laius’a ve sonra Oedipus’a bildirilen iki kehanet; bir de Creon’un getirdiği buyruk." },
            { ikon: "🦁", terim: "Sphinx (ek bilgi)", tr: "Sfenks", tanim: "Kadın başlı, aslan gövdeli, kanatlı yaratık; Thebai’nin yolunu tutup bilmeceyle yolcuları tehdit etmişti. Oyunda sahnede görünmez, yalnızca anılır.", ornek: "Oedipus’un şöhreti, Sfenks’i yenmesinden gelir." }
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
        { tip: "tablo", baslik: "Bölümler ve satır aralıkları (Fagles baskısındaki satır no.)", head: ["Bölüm", "Satır", "Kim?", "Ne olur?"], rows: [
            ["*Prologos*", "1–168", "Oedipus, rahip, Creon", "Salgın; Apollo’nun buyruğu: Laius’un katili sürülmeli"],
            ["*Parados*", "169–244", "Koro", "Koro tanrılara yakarır"],
            ["*First Episode*", "245–526", "Oedipus, Teiresias", "Katile lanet; Teiresias Oedipus’u suçlar"],
            ["*First Stasimon*", "527–572", "Koro", "Koro kararsız: ne inanır ne reddeder"],
            ["*Second Episode*", "573–953", "Creon, Jocasta, Oedipus", "Creon’u komplo ile suçlama; üç yol kavşağı ve “haydutlar”"],
            ["*Second Stasimon*", "954–997", "Koro", "Tanrılara saygı ve *hubris* uyarısı"],
            ["*Third Episode*", "998–1194", "Haberci, Jocasta, Oedipus", "Polybus öldü; Oedipus’un evlatlık olduğu çıkar; Jocasta anlar"],
            ["*Third Stasimon*", "1195–1214", "Koro", "Oedipus bir tanrının çocuğu mu? Umutlu şarkı (Kithairon dağı)"],
            ["*Fourth Episode*", "1215–1310", "Çoban, haberci, Oedipus", "Çoban gerçeği söyler; Oedipus anlar"],
            ["*Fourth Stasimon*", "1311–1350", "Koro", "Ağıt: insan mutluluğu kırılgandır"],
            ["*Exodos*", "1351–sona", "İkinci haberci, Oedipus, Creon", "Jocasta’nın ölümü; kör etme; sürgün isteği; koronun dersi"]
          ], not: "Dört episode, dört stasimon. Satır numaraları sınıfın Fagles baskısına göredir. Jebb ve Storr numaraları Yunanca metne göre verilir ve farklıdır; çevirileri karşılaştırırsan bölüm sınırı birkaç on satır kayar." },
        { tip: "grafik", baslik: "Gerilim bölüm bölüm nasıl tırmanır?", xlabel: "Bölümler", ylabel: "Gerilim", xmax: 12, ymax: 10,
          xticks: [{ v: 1, label: "Pr" }, { v: 2, label: "Pa" }, { v: 3, label: "E1" }, { v: 4, label: "S1" }, { v: 5, label: "E2" }, { v: 6, label: "S2" }, { v: 7, label: "E3" }, { v: 8, label: "S3" }, { v: 9, label: "E4" }, { v: 10, label: "S4" }, { v: 11, label: "Ex" }],
          yticks: [{ v: 2, label: "düşük" }, { v: 9, label: "yüksek" }],
          ogeler: [
            { id: "g", tip: "egri", renk: 1, etiket: "Gerilim", noktalar: [[1, 4], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5], [2, 4.5]] }
          ],
          durumlar: [
            { metin: "*Prologos* ve *parados*: salgın ve dualar. Sorun açıktır ama gerilim henüz düşük." },
            { metin: "*First Episode*: Teiresias “katil sensin” der, gerilim sıçrar. *First Stasimon*’da koro kararsızdır; gerilim biraz soluklanır.", set: { g: { noktalar: [[1, 4], [2, 4.5], [3, 6.5], [4, 5.5], [4, 5.5], [4, 5.5], [4, 5.5], [4, 5.5], [4, 5.5], [4, 5.5], [4, 5.5], [4, 5.5]] } } },
            { metin: "*Second Episode*: Creon’la kavga, Jocasta’nın üç yol hikâyesi. Oedipus ilk kez kendinden kuşkulanır. *Second Stasimon* dinî bir duraklamadır.", set: { g: { noktalar: [[1, 4], [2, 4.5], [3, 6.5], [4, 5.5], [5, 7.2], [6, 6.4], [6, 6.4], [6, 6.4], [6, 6.4], [6, 6.4], [6, 6.4], [6, 6.4]] } } },
            { metin: "*Third Episode*: Polybus’un ölümüyle sahte bir rahatlama, ardından Jocasta’nın korkusu. *Third Stasimon*’daki umut gerilimi geçici olarak düşürür.", set: { g: { noktalar: [[1, 4], [2, 4.5], [3, 6.5], [4, 5.5], [5, 7.2], [6, 6.4], [7, 8.6], [8, 6.8], [8, 6.8], [8, 6.8], [8, 6.8], [8, 6.8]] } } },
            { metin: "*Fourth Episode* zirvedir: çoban konuşur. *Exodos* felaketi getirir ve oyun sessiz bir yasla biter.", set: { g: { noktalar: [[1, 4], [2, 4.5], [3, 6.5], [4, 5.5], [5, 7.2], [6, 6.4], [7, 8.6], [8, 6.8], [9, 9.6], [10, 8.2], [11, 9], [11.7, 5.5]] } } }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The action unfolds in front of the royal palace of Thebes.*", metin: "Mekânı belirt." },
            { ikon: "✍️", baslik: "*Tension builds with each episode, while the choral odes give the audience a pause.*", metin: "Yapı ve gerilim." },
            { ikon: "✍️", baslik: "*The plot moves like an investigation: each clue brings Oedipus closer to himself.*", metin: "Olay örgüsünün özü." }
          ] }
      ]
    },
    {
      baslik: "Soruşturma başlar: Prologos – Second Episode",
      kisa: "Oedipus katili arar; her ipucu onu biraz daha kendisine yaklaştırır.",
      bloklar: [
        { tip: "adimlar", baslik: "Dört sahnede soruşturma", adimlar: [
            { baslik: "*Prologos* (1–168): salgın ve Apollo’nun buyruğu", metin: "Oedipus kendini halkın koruyucusu olarak tanıtır (Storr 1912: “I Oedipus, your world-renowned king”). Creon Delphoi’den döner: Apollo, ülkeyi kirleten bir *pollution* (*miasma*) olduğunu, Laius’un katilinin sürülmesi ya da kana kan ödenmesi gerektiğini bildirir. Oedipus katili bulmaya söz verir; seyirci katilin kim olduğunu bilir (dramatik ironi)." },
            { baslik: "*Parados* (169–244): dua", metin: "Koro tanrılara salgının bitmesi için yalvarır. Hemen ardından Oedipus, “dualarınıza ben karşılık vereyim” der (Fagles 245–247): tanrıların yapması gerekeni kendi üstüne alıyor gibidir." },
            { baslik: "*First Episode* (245–526): lanet ve suçlama", metin: "Oedipus katile ve onu saklayanlara lanet eder (280–284 civarı). Kör kâhin Teiresias önce konuşmak istemez; Oedipus onu öfkelendirince “katil sensin” der. Oedipus bunu Creon’un komplosu sayar." },
            { baslik: "*Second Episode* (573–953): Creon ve Jocasta", metin: "Oedipus Creon’u hain sayar; Creon krallık istemediğini söyler, Jocasta kavgayı keser. Kehanetlere güvenmediğini söyleyen Jocasta, Laius’un üç yolun birleştiği yerde öldüğünü anlatınca Oedipus kendi geçmişini hatırlar." }
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
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The prologue sets the problem: Apollo says the plague will end only when Laius’s killer is found.*", metin: "Açılışın görevi." },
            { ikon: "✍️", baslik: "*Oedipus acts like a detective, but the clues point back to himself.*", metin: "Ana ironi." },
            { ikon: "✍️", baslik: "*In the second episode, the detail of the crossroads troubles Oedipus.*", metin: "İlk gerçek kuşku." }
          ] }
      ]
    },
    {
      baslik: "Dönüm noktası: Third Episode ve Korinthos’tan gelen haber",
      kisa: "İyi haber tersine döner: haberci rahatlatmak ister, gerçeği açığa çıkarır.",
      bloklar: [
        { tip: "adimlar", baslik: "*Third Episode* (998–1194) adım adım", adimlar: [
            { baslik: "Jocasta dua eder", metin: "Oedipus’un korkusu artmıştır; Jocasta Apollo’ya sunu götürür." },
            { baslik: "Haberci gelir", metin: "Korinthos’lu haberci Polybus’un yaşlılıktan öldüğünü söyler. Jocasta “kehanetler boş” der; Oedipus rahatlar ama annesinden hâlâ korkar." },
            { baslik: "Müjde yıkıma döner", metin: "Haberci, Oedipus’u rahatlatmak için Polybus ve Merope’nin gerçek anne babası olmadığını söyler. Bebeği Kithairon dağında bir çoban kendisine vermiştir." },
            { baslik: "Jocasta anlar", metin: "Jocasta gerçeği fark eder ve Oedipus’a araştırmayı bırakmasını yalvarır. Oedipus onu soyundan utanıyor sanır; Jocasta saraya çekilir. Oedipus ise kendini “Şans’ın (*Tyche*) çocuğu” sayıp kökenini öğrenmekte ısrar eder." }
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
            { ikon: "✍️", baslik: "*Jocasta realizes the truth first and begs Oedipus to stop searching.*", metin: "Jocasta’nın rolü: Third Episode." },
            { ikon: "✍️", baslik: "*This is the peripeteia: good news becomes the worst news.*", metin: "Tersine dönüş." }
          ] }
      ]
    },
    {
      baslik: "Çoban, kör etme ve sürgün",
      kisa: "Çoban gerçeği söyler; Jocasta ölür, Oedipus kendini kör eder ve sürgün ister.",
      bloklar: [
        { tip: "adimlar", baslik: "*Fourth Episode* (1215–1310) ve *Exodos* (1351–sona)", adimlar: [
            { baslik: "Çoban sorguda (Fourth Episode)", metin: "Laius’un hizmetkârı olan çoban konuşmak istemez. Oedipus tehdit edince bebeği Jocasta’nın verdiğini ve Laius’un evinden olduğunu söyler. Oedipus gerçeği anlar: anagnorisis, Jocasta’dan sonra." },
            { baslik: "*Fourth Stasimon* (1311–1350): ağıt", metin: "Koro Oedipus’un yazgısını örnek gösterip insan mutluluğunun ne kadar kırılgan olduğunu söyler." },
            { baslik: "İkinci haberci: sahne dışı felaket", metin: "Saraydan çıkan hizmetkâr, Jocasta’nın odasında kendini astığını ve Oedipus’un onun elbisesindeki altın iğnelerle gözlerini oyduğunu anlatır." },
            { baslik: "Oedipus kör olarak çıkar", metin: "Oedipus sürgün ister ve kızlarının geleceğini Creon’a emanet eder. Creon, Apollo’ya danışmadan onu göndermek istemez; Oedipus’a “her şeyin efendisi olduğunu sanma” der." },
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
            "Yapı (Fagles satır no.): *prologos* 1–168, *parados* 169–244, dört *episode* ve dört *stasimon*, *exodos* 1351–sona.",
            "Prologos’ta Apollo’nun buyruğu: Laius’un katili sürülmeli, yoksa salgın bitmez (*pollution*, *miasma*).",
            "Third Episode: Korinthos’lu haberci rahatlatmak ister, gerçeği açar (*peripeteia*); Jocasta ilk anlayandır.",
            "Fourth Episode: çoban gerçeği söyler (*anagnorisis*); Oedipus Jocasta’dan sonra anlar.",
            "Jocasta kendini asar, Oedipus kör eder, sürgün ister; şiddet sahne dışındadır ve haberci anlatır.",
            "Her sahne, bir öncekinin sonucudur: olay örgüsü bir neden-sonuç zinciridir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "In the prologue, Creon returns from Delphi. What does Apollo's message say about the plague?",
      opts: ["Oedipus must leave Thebes immediately", "Laius's killer must be found and expelled, or the city stays polluted", "The Sphinx must be defeated again", "The chorus must sacrifice to Apollo every year"], a: 1,
      why: "Apollo’nun buyruğu: Laius’un katili sürülmeli ya da kana kan ödenmeli; kirlilik (*pollution*, *miasma*) salgının nedenidir. A çekici bir yanlış: Oedipus’un sürgünü oyunun sonunda çıkar, prologos’ta değil. C ise geçmişteki bir olaydır." },
    { q: "Jocasta tells Oedipus that the only witness spoke of “robbers” (plural) killing Laius. Why does this detail give Oedipus hope?",
      opts: ["It proves the robbers came from Corinth", "It shows that Jocasta saw the murder", "It means the herdsman has already found Oedipus's real father", "If several people killed Laius, Oedipus, who was alone, cannot be the killer"], a: 3,
      why: "Oedipus tanığın ifadesi çoğulda kalırsa kendisinin aklanacağını düşünür. A ve B oyunda yoktur; C başka bir sahneyle (çoban, Fourth Episode) karıştırılmıştır." },
    { q: "Which statement about events before the play begins is correct?",
      opts: ["Laius and Jocasta gave their baby to a herdsman because of an oracle", "Oedipus knew he was adopted when he left Corinth", "Oedipus killed Laius inside the palace at Thebes", "The Sphinx was Oedipus's mother"], a: 0,
      why: "Laius’a oğlunun onu öldüreceği bildirilmişti; bebek dağa bırakılmak üzere çobana verildi. B yanlıştır: Oedipus kehaneti önlemek için Korinthos’tan tam da gerçek ailesi olduğunu sandığı için kaçtı. C yanlıştır: cinayet bir kavşakta işlendi." },
    { q: "In the Third Episode, the Corinthian messenger reveals that Oedipus was found as a baby on Mount Kithairon. What happens right after this news?",
      opts: ["Oedipus blinds himself", "Jocasta realizes the truth and begs Oedipus to stop searching", "The chorus drives Teiresias off stage", "Oedipus banishes Creon"], a: 1,
      why: "Jocasta’nın anlaması Oedipus’tan önce, Third Episode’da gelir. A yanlış: kör etme çok sonra, *exodos*’ta olur ve çoban konuştuktan sonradır." },
    { q: "Which statement about the Exodos is correct?",
      opts: ["Jocasta's death and Oedipus's blinding are shown on stage", "Oedipus kills himself at the end of the play", "A second messenger reports Jocasta's death and the blinding; the blinded Oedipus then appears on stage", "Creon refuses to take any decision about Oedipus"], a: 2,
      why: "Yunan tragedyasında şiddet sahnede gösterilmez; haberci anlatır. Seyirci yalnızca sonucu, kör Oedipus’u görür. A bu geleneğe aykırıdır; B yanlış: Oedipus hayattadır; D yanlış: Creon karar verir ama önce Apollo’ya danışmak ister." }
  ]
};
