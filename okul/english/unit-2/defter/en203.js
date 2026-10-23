/* Kitora not defteri · en203 · 2.3 Karakterler
   Kaynak: öğretmen (Dr Byrd) Oedipus belgeleri (soru vurguları; satır no. Fagles baskısı, Fagles alıntısı yok) + oyunun standart karakter analizi. Alıntı: yalnız F. Storr çevirisi (1912). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en203",
  amac: "Oyundaki karakterleri tanıyacaksın: Oedipus, Jocasta, Creon, Teiresias, çoban, haberci ve koro. Her birinin oyunda ne iş gördüğünü, kehanete nasıl baktığını, kimin neyi ne zaman bildiğini ve hangi sahnelerle kanıtlayacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Oedipus: akıllı, kararlı, öfkeli kral",
      kisa: "Oedipus hem şehrin kurtarıcısı hem de kendi felaketinin soruşturmacısıdır.",
      bloklar: [
        { tip: "harita", merkez: "Oedipus", dallar: [
            { baslik: "Halkını seven yönetici", alt: "Halka “çocuklarım” der; kendini tanıtır: “I Oedipus, your world-renowned king” (Storr 1912, Prologos). Halkın acısı için herkesten çok yas tuttuğunu söyler" },
            { baslik: "Bilmece çözücü", alt: "Sfenks’i yenmiştir; koro ona hâlâ “bilmeceyi çözen adam” der" },
            { baslik: "Çabuk öfkelenen", alt: "Teiresias’a ve Creon’a hızla saldırır; kavşakta da öfkeyle öldürmüştü" },
            { baslik: "Durmayan araştırmacı", alt: "Jocasta ve çoban yalvarsa da gerçeği öğrenmekte ısrar eder" },
            { baslik: "Kendine güvenen", alt: "Kendini Şans’ın (*Tyche*) oğlu sayar; kökeni önemsiz olsa da araştırmaktan çekinmez" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "👑", terim: "Tyrannos", tr: "hükümdar", tanim: "Yunanca “taht sahibi”. Burada “zorba” değil, tahtı soyla değil kendi aklıyla ve başarısıyla kazanmış kral demektir.", ornek: "Oedipus tahtı, Sfenks’in bilmecesini çözerek kazanmıştır." },
            { ikon: "🎭", terim: "Tragic hero", tr: "trajik kahraman", tanim: "Ne tamamen iyi ne tamamen kötü, yüksek mevkili biri. Bir hatası yüzünden düşer ve seyirci ona acır.", ornek: "Halkını kurtarmak isterken kendi yıkımını hazırlayan Oedipus." }
          ] },
        { tip: "tuzak", baslik: "Kötü kral tuzağı", metin: "Oedipus’un düşüşünü “ceza” gibi yazmak eksik olur.", yanlis: "Oedipus kötü bir karakter olduğu için cezalandırılır.", dogru: "Oedipus iyi niyetli ve yetenekli biridir. Felaketi bilgisizliğinden ve acele yargılarından doğar; sorumluluğu tartışmak ise en204’te (kader ve özgür irade)." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *Oedipus is a capable and caring king whose confidence blinds him.*", metin: "Karakter özeti." },
            { ikon: "✍️", baslik: "*His determination to find the truth drives the plot and leads to his downfall.*", metin: "Işık ve bedel." },
            { ikon: "✍️", baslik: "*Sophocles presents Oedipus as a tragic hero, not a villain.*", metin: "Doğru etiket." }
          ] }
      ]
    },
    {
      baslik: "Jocasta ve Creon: iki farklı akıl",
      kisa: "Jocasta kehaneti küçümseyip rahatlatır; Creon sakin ve sağduyulu kalır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "👸", baslik: "*Jocasta*", maddeler: ["Kraliçe; Oedipus’un eşi, gerçekte annesi", "Kehanete bakışı: hiçbir insan geleceği bilemez, korkmaya değmez (Second Episode, Fagles 788–800 civarı)", "Gerçeği Oedipus’tan önce, Third Episode’da fark eder"] },
          sag: { ikon: "🧑‍⚖️", baslik: "*Creon*", maddeler: ["Jocasta’nın kardeşi; Oedipus’un kayınbiraderi", "Sakin, hesaplı; krallık istemediğini söyleyip komplo suçlamasını reddeder (Fagles 663–665)", "Oyunun sonunda yönetimi devralır"] },
          oyun: [
            { metin: "“Kehanet yüzünden korkma, kimse geleceği bilemez.” diyen.", cevap: "sol", neden: "Jocasta rastlantıya ve insan aklına güvenir." },
            { metin: "Kral olup tasa çekmektense bugünkü rahat konumunu tercih ettiğini söyleyerek komplo suçlamasını reddeden.", cevap: "sag", neden: "Creon gücü zaten tadıyor; tahta ihtiyacı yok." },
            { metin: "Çobanı sorgulamayı bırak diye yalvarıp saraya çekilen.", cevap: "sol", neden: "Jocasta gerçeği anlamıştır; Oedipus’u korumaya çalışır." },
            { metin: "Sürgün kararından önce Apollo’ya danışmak gerektiğini söyleyen.", cevap: "sag", neden: "Creon kararı tanrının sözüne bırakır; yönetimi devralan odur." }
          ] },
        { tip: "tablo", baslik: "Oedipus’un ailesi: tek kişi, iki rol", head: ["Kim?", "Birinci bağ", "İkinci bağ"], rows: [
            ["Jocasta", "Anne", "Eş"],
            ["Laius", "Baba", "Oedipus’tan önceki kral; kavşakta öldürdüğü adam"],
            ["Creon", "Dayı (annesinin kardeşi)", "Kayınbirader (karısının kardeşi)"],
            ["İki kızı (mitte Antigone ve Ismene)", "Kızları", "Kız kardeşleri"],
            ["Polybus ve Merope", "Evlat edinen anne baba", "Gerçek anne baba sandığı kişiler"]
          ], vurgu: 0, not: "Aile bağları iç içe geçmiştir. Sınavda bu karışıklığı doğru adlarla yaz." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *Jocasta tries to calm Oedipus by dismissing prophecy: no human can foresee the future.*", metin: "Jocasta’nın tavrı. Storr 1912’de Jocasta’nın sözü: “Best live a careless life from hand to mouth.”" },
            { ikon: "✍️", baslik: "*Creon is calm and rational, a foil to Oedipus.*", metin: "*Foil* zıt karakterdir; Creon sakin, Oedipus öfkelidir." },
            { ikon: "✍️", baslik: "*Jocasta’s suicide shows that she understood the truth first.*", metin: "Jocasta’nın sonu." }
          ] },
        { tip: "not", metin: "**Ek bilgi (öğretmen belgesinde yok):** Çevirilere göre yazımlar değişir: *Jocasta / Iocasta*, *Teiresias / Tiresias*, *Oedipus / Oidipous*. Jebb 1887 çevirisi *Iocasta* ve *Teiresias* yazar. Sınavda sınıfta kullanılan baskıdaki (Fagles) yazımı seç ve tutarlı kal." }
      ]
    },
    {
      baslik: "Teiresias, çoban ve haberci: gerçeği taşıyanlar",
      kisa: "Üç kişi gerçeğin üç parçasını taşır: kehanet, tanıklık, haber.",
      bloklar: [
        { tip: "tablo", baslik: "Dört yan karakter", head: ["Karakter", "Ne bilir?", "Oyuna etkisi", "Sahne"], rows: [
            ["*Teiresias*", "Kör kâhin; Apollo’nun sözcüsü; gerçeği baştan bilir", "Oedipus’u ilk suçlayan kişi; görme–körlük zıtlığını kurar. Kehanetinde (Fagles 474–489) Oedipus gören ve zengin biri olarak gelmişken kör ve yoksul olarak gidecektir", "First Episode"],
            ["*Herdsman* (Thebai’li çoban)", "Laius’un hizmetkârı; cinayetin tanığı ve bebeği veren kişi", "Zincirin son halkası; tehdit edilince konuşur", "Fourth Episode"],
            ["*Corinthian messenger*", "Bebeği çobandan alıp Polybus’a götüren Korinthos’lu çoban", "İyi niyetle gerçeği açar", "Third–Fourth Episode"],
            ["*Second messenger*", "Sarayın içinde olanı gören hizmetkâr", "Jocasta’nın ölümünü ve kör etmeyi anlatır", "Exodos"]
          ], vurgu: 0 },
        { tip: "tuzak", baslik: "İki çoban tuzağı", metin: "Oyunda iki ayrı çoban var; sınavda karıştırılırlar.", yanlis: "Haberci ile çoban aynı kişidir.", dogru: "Korinthos’lu haberci bebeği alan çobandır; Thebai’li çoban bebeği ona veren, Laius’un hizmetkârıdır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *Teiresias is blind but sees the truth, while Oedipus can see but is ignorant.*", metin: "En sık kullanılan karşılaştırma." },
            { ikon: "✍️", baslik: "*The herdsman is reluctant to speak because the truth is dangerous.*", metin: "Çobanın tereddüdü." },
            { ikon: "✍️", baslik: "*The Corinthian messenger brings good news that ironically destroys Oedipus.*", metin: "İyi niyetin yıkıcı sonucu." }
          ] }
      ]
    },
    {
      baslik: "Koronun tavrı: sadakatten ağıta",
      kisa: "Koro dört şarkıda kararsızlıktan umuda, oradan ağıta geçer.",
      bloklar: [
        { tip: "adimlar", baslik: "Dört koro şarkısı, dört ruh hâli", adimlar: [
            { baslik: "*First Stasimon* (527–572): kararsızlık", metin: "Koro hem Teiresias’a hem Oedipus’a saygı duyar; kanıt olmadan kralı suçlamak istemez. Sonraki sahnede Oedipus’un öfkesi karşısında Creon’un yanında durur ve onu sakinleşmeye çağırır." },
            { baslik: "*Second Stasimon* (954–997): dinî kaygı", metin: "Kehanetlere saygı gösterilmezse tanrılara yakarmanın anlamı kalmaz diye korkar; kibrin (*hubris*) tiran doğurduğunu söyler." },
            { baslik: "*Third Stasimon* (1195–1214): umut", metin: "Oedipus’un bir tanrının çocuğu olabileceğini düşünür; Kithairon dağını kutlamaya hazırlanır." },
            { baslik: "*Fourth Stasimon* (1311–1350): ağıt", metin: "Gerçek ortaya çıkınca koro Oedipus’u insan mutluluğunun ne kadar kırılgan olduğuna örnek gösterir. Exodos’taki son söz de aynıdır: ölmeden kimseye mutlu deme." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The chorus shifts from loyalty to doubt, then false hope, and finally grief.*", metin: "Koronun yolculuğu." },
            { ikon: "✍️", baslik: "*Its mood mirrors the audience’s growing dread.*", metin: "Seyircinin aynası." }
          ] }
      ]
    },
    {
      baslik: "Kim ne zaman anladı?",
      kisa: "Teiresias baştan bilir, Jocasta Third Episode’da, Oedipus Fourth Episode’da anlar.",
      bloklar: [
        { tip: "grafik", baslik: "Gerçeği bilme düzeyi sahne sahne", xlabel: "Sahne", ylabel: "Gerçeği bilme", xmax: 7, ymax: 10,
          xticks: [{ v: 1, label: "Prolog" }, { v: 2, label: "Ep.1" }, { v: 3, label: "Ep.2" }, { v: 4, label: "Ep.3" }, { v: 5, label: "Ep.4" }, { v: 6, label: "Exodos" }],
          yticks: [{ v: 1, label: "bilmez" }, { v: 9, label: "bilir" }],
          ogeler: [
            { id: "t", tip: "cizgi", renk: 1, etiket: "Teiresias", from: [1, 9.4], to: [6, 9.4] },
            { id: "o", tip: "egri", renk: 3, etiket: "Oedipus", gizli: true, noktalar: [[1, 0.6], [2, 1.4], [3, 3], [3, 3], [3, 3], [3, 3]] },
            { id: "j", tip: "egri", renk: 2, etiket: "Jocasta", gizli: true, noktalar: [[1, 1], [2, 1], [3, 2], [4, 8.5], [4.5, 9.4]] }
          ],
          durumlar: [
            { metin: "Teiresias gerçeği baştan bilir: çizgisi hep tepede." },
            { metin: "Oedipus önce Teiresias’ı dinlemez. Second Episode’da üç yol ayrıntısından kuşkulanır ama umudunu korur.", goster: ["o"] },
            { metin: "Jocasta, Third Episode’da habercinin sözlerinden gerçeği anlar ve sahneden çıkar.", goster: ["j"] },
            { metin: "Oedipus, Fourth Episode’da çobanı dinleyince bütün gerçeği görür.", set: { o: { noktalar: [[1, 0.6], [2, 1.4], [3, 3], [4, 4.2], [5, 9.4], [6, 9.4]] } } }
          ] },
        { tip: "tuzak", metin: "Jocasta ile Oedipus’un gerçeği aynı anda öğrendiğini sanma.", yanlis: "Oedipus gerçeği Jocasta ile aynı anda öğrenir.", dogru: "Jocasta Third Episode’da anlar, Oedipus Fourth Episode’da. Oedipus, Jocasta’nın yalvarışını “soyumdan utanıyor” diye yanlış yorumlar." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *Teiresias knows the truth from the start; Jocasta realizes it in the Third Episode; Oedipus learns it last.*", metin: "Bilgi sırası." },
            { ikon: "✍️", baslik: "*Oedipus misreads Jocasta’s fear as snobbery about his birth.*", metin: "Yanlış yorum." },
            { ikon: "✍️", baslik: "*The gap between characters’ knowledge creates dramatic irony.*", metin: "Bilgi uçurumu ve ironi." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Oedipus: yetenekli, halkını seven, öfkeli ve kendinden emin; kötü biri değil, bilmeden hata yapan trajik kahraman.",
            "*Tyrannos* “zorba” değil, tahtı kendi başarısıyla kazanan hükümdar demektir.",
            "Jocasta Oedipus’un hem annesi hem eşidir; kehaneti küçümser (“kimse geleceği bilemez”) ve gerçeği ilk fark eden odur.",
            "Creon sakin ve sağduyulu bir *foil*’dir; Oedipus’un hem dayısı hem kayınbiraderidir; sonunda yönetimi devralır.",
            "Teiresias kör ama gören kâhindir; Oedipus gören ama göremeyendir.",
            "İki çoban var: Thebai’li çoban bebeği verdi, Korinthos’lu haberci aldı.",
            "Koro dört şarkıda kararsızlık, dinî kaygı, umut ve ağıt arasında gider.",
            "Gerçeği Teiresias baştan bilir, Jocasta Third Episode’da, Oedipus Fourth Episode’da anlar."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "How is Creon related to Oedipus?",
      opts: ["He is Oedipus's brother and uncle", "He is Oedipus's uncle (his mother's brother) and brother-in-law", "He is Oedipus's father-in-law and son", "He is Oedipus's uncle (his father's brother) and father-in-law"], a: 1,
      why: "Creon, Jocasta’nın kardeşidir. Jocasta hem Oedipus’un annesi hem karısı olduğu için Creon hem dayısı (annenin kardeşi) hem kayınbiraderidir. A ve D’deki “amca” babanın kardeşi demektir; Creon’un Laius ile kan bağı yoktur." },
    { q: "Who took the baby Oedipus from the Theban herdsman and brought him to King Polybus?",
      opts: ["Teiresias", "Creon", "Laius's servant", "The Corinthian messenger"], a: 3,
      why: "Korinthos’lu haberci bebeği Thebai’li çobandan alan çobandır. C yanlıştır: Laius’un hizmetkârı (Thebai’li çoban) bebeği verendir; alan değildir. Bu iki çobanı karıştırmak sınavın en sık hatasıdır." },
    { q: "In the Third Episode, Jocasta begs Oedipus to stop his search, and he reads this as shame about his birth. What is the best interpretation of the scene?",
      opts: ["Jocasta has realized the truth; Oedipus has not yet", "Oedipus has understood the truth before Jocasta", "Jocasta hates Oedipus", "Both of them know the truth and are hiding it"], a: 0,
      why: "Jocasta Oedipus’tan önce anlar ve onu korumaya çalışır. B yanlıştır: Oedipus ancak Fourth Episode’da çoban konuşunca anlar. D yanlıştır: Oedipus gerçeği bilmediği için “utanç” yorumunu yapar." },
    { q: "Which statement best describes Jocasta's attitude toward prophecy in the Second Episode?",
      opts: ["She trusts every oracle of Apollo", "She believes Oedipus should consult Teiresias again", "She says no human can foresee the future, so oracles need not be feared", "She already knows that Oedipus killed Laius"], a: 2,
      why: "Jocasta kehaneti küçümser: kimse geleceği bilemez, rastlantı yönetir. Seyirci kehanetin gerçekleşeceğini bildiği için bu güven ironiktir. A tam tersidir; D yanlıştır, çünkü Jocasta gerçeği henüz bilmez." },
    { q: "Which description of Oedipus best fits the play?",
      opts: ["A cruel king who is punished for his evil character", "A capable, caring but hot-tempered and overconfident king whose downfall comes from ignorance", "A passive man who only watches events", "A man who knowingly fulfills the prophecy"], a: 1,
      why: "Oedipus trajik kahramandır: iyi niyetlidir ama bilmeden hata yapar. A bir ders kitabı yanılgısıdır; D yanlıştır, çünkü Oedipus kehanetten kaçmak için Korinthos’tan ayrılmıştır." }
  ]
};
