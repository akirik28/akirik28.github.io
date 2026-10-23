/* Kitpath not defteri · py104 · 1.4 Beyin
   Kaynak: AP Psychology CED (2024) Topic 1.4. Blok türleri: /ap/_kit/defter.js başı.
   Not: grafiklerdeki değerler göreli ve kavramsaldır (gerçek ölçüm değil). */
window.DEFTER = {
  slug: "py104",
  amac: "Bu konu beynin hangi bölgesinin ne iş yaptığını gösteriyor. Beyin sapı, beyincik, limbik sistem ve korteksin loblarını, dil bölgelerini, bölünmüş beyin araştırmalarını, plastisiteyi ve beyni inceleme yöntemlerini öğreneceksin.",
  bolumler: [
    {
      baslik: "Beyin sapı, beyincik ve ödül devresi",
      kisa: "Beyin sapı yaşamsal işleri, beyincik dengeyi, RAS uyanıklığı yönetir.",
      bloklar: [
        { tip: "harita", merkez: "*Brain*", dallar: [
            { baslik: "*Brain stem*", alt: "Nefes, kalp atışı: *medulla* dahil" },
            { baslik: "*Reticular activating system*", alt: "Uyanıklık ve dikkat" },
            { baslik: "*Cerebellum*", alt: "Kas koordinasyonu ve denge" },
            { baslik: "*Limbic system*", alt: "Duygu, bellek, temel dürtüler" },
            { baslik: "*Cerebral cortex*", alt: "Algı, dil, düşünme, planlama" },
            { baslik: "*Corpus callosum*", alt: "İki yarım küreyi bağlar" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🫁", terim: "Brain stem", tr: "beyin sapı", tanim: "Beynin en alt kısmı; nefes ve kalp atışı gibi temel işlevleri yönetir (*medulla* dahil).", ornek: "Uyurken bile nefes almaya devam etmen." },
            { ikon: "🔔", terim: "Reticular activating system (RAS)", tr: "retiküler aktive edici sistem", tanim: "Beyin sapından yükselen ağ; uyanıklığı, dikkati, bir miktar istemli hareketi ve göz hareketini kontrol eder.", ornek: "Sıkıcı derste bile gözlerini açık tutmaya çalışman." },
            { ikon: "🏆", terim: "Reward center", tr: "ödül merkezi", tanim: "Dopaminle çalışan ödül devresi; motivasyon, haz ve bazı öğrenme ile duygu süreçlerinde rol oynar.", ornek: "İyi bir not aldığında hissettiğin tatmin." },
            { ikon: "🚲", terim: "Cerebellum", tr: "beyincik", tanim: "Kas hareketlerini koordine eder, dengeyi sağlar ve bazı işlemsel öğrenmeleri (beceri) tutar.", ornek: "Bisiklete binerken dengede kalmak." }
          ] },
        { tip: "tuzak", metin: "Beyincik adına “beyin” denmesi yanıltabilir.", yanlis: "Beyincik düşünme ve karar vermeyi yönetir.", dogru: "Karar, planlama ve dil ==korteksin== işidir; beyincik ==koordinasyon== ve ==denge==dir. Hasar görünce kişi sarhoş gibi sendeleyebilir." }
      ]
    },
    {
      baslik: "Limbik sistem",
      kisa: "Limbik sistem duyguyu, belleği ve temel dürtüleri birbirine bağlar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📡", terim: "Thalamus", tr: "talamus", tanim: "Duyu bilgisini ilgili kortekse ileten röle istasyonu. Koku, talamusa uğramayan tek duyudur.", ornek: "Gözden gelen görüntü önce talamusa uğrar, sonra oksipital lobda işlenir." },
            { ikon: "🌡️", terim: "Hypothalamus", tr: "hipotalamus", tanim: "Açlık, susuzluk, vücut sıcaklığı ve cinsel davranışı düzenler; hipofiz aracılığıyla hormon sistemini yönlendirir.", ornek: "Sınavda “acıktım” ya da “terledim” hissi." },
            { ikon: "🎛️", terim: "Pituitary gland", tr: "hipofiz", tanim: "Hipotalamusun yönlendirmesiyle hormon salgılar ve öteki hormon bezlerini harekete geçirir.", ornek: "Büyüme ve stres tepkisi ile ilgili hormonlar." },
            { ikon: "🗂️", terim: "Hippocampus", tr: "hipokampüs", tanim: "Yeni bilinçli anıların oluşmasına ve depolanmasına yardım eder.", ornek: "Dün tanıştığın birinin adını hatırlamak." },
            { ikon: "😨", terim: "Amygdala", tr: "amigdala", tanim: "Korku ve öfke gibi duyguları ve duygusal anıları işler.", ornek: "Karanlık sokakta ani korku." }
          ] },
        { tip: "ikili", sol: { ikon: "🗂️", baslik: "*Hippocampus*", maddeler: ["Yeni bilinçli anıları oluşturur", "Hasarda yeni anı oluşturmak zorlaşır"] },
          sag: { ikon: "😨", baslik: "*Amygdala*", maddeler: ["Korku ve öfke gibi duyguları işler", "Duygusal anıların renklenmesine yardım eder"] },
          oyun: [
            { metin: "Yeni tanıştığın birinin adını öğrenmeni sağlar.", cevap: "sol", neden: "Yeni anı oluşumu: *hippocampus*." },
            { metin: "Köpek havlayınca anında korkmanı sağlar.", cevap: "sag", neden: "Korku tepkisi: *amygdala*." },
            { metin: "Hasar görünce yeni olayları hatırlamak zorlaşır.", cevap: "sol", neden: "Bellek oluşumu: *hippocampus*." },
            { metin: "Öfke ve saldırganlıkla ilişkilidir.", cevap: "sag", neden: "Duygu merkezi: *amygdala*." }
          ] },
        { tip: "tuzak", metin: "İsimleri benzeyen yapılar karıştırılır.", yanlis: "*Thalamus* ile *hypothalamus* aynı şeydir.", dogru: "==Talamus röledir== (duyu bilgisini yönlendirir); ==hipotalamus dürtü merkezidir== (açlık, susuzluk, sıcaklık). *Hippocampus* anı, *amygdala* duygu içindir." }
      ]
    },
    {
      baslik: "Korteks ve loblar",
      kisa: "Dört lob farklı işlerde uzmanlaşır; iki yarım küre corpus callosumla bağlıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Korteksin dört lobu", head: ["Lob", "Yeri", "Başlıca işlev"], rows: [
            ["*Frontal lobe*", "Alnın hemen arkası", "Düşünme, planlama, karar; yürütücü işlevler (*prefrontal cortex*); dil üretimi. Arka kenarında *motor cortex*: iskelet kasını hareket ettirir"],
            ["*Parietal lobe*", "Tepenin arka kısmı", "*Somatosensory cortex*: dokunma duyusu; *association areas*: bilgiyi düzenler ve birleştirir"],
            ["*Temporal lobe*", "Kulakların hizasında, yanlarda", "İşitme ve dil işleme"],
            ["*Occipital lobe*", "Başın arkasında", "Görsel bilgi işleme"]
          ] },
        { tip: "grafik", baslik: "Duyarlı bölgelere daha çok korteks ayrılır (göreli gösterim)", xlabel: "Vücut bölgesi", ylabel: "Somatosensory cortex'te ayrılan alan", xmax: 6, ymax: 10,
          xticks: [{ v: 1, label: "Sırt" }, { v: 2, label: "Bacak" }, { v: 3, label: "Kol" }, { v: 4, label: "Parmak" }, { v: 5, label: "Dudak" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b4", tip: "alan", renk: 0, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "b5", tip: "alan", renk: 0, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "t1", tip: "yazi", x: 1.5, y: 3.4, metin: "Geniş ama az duyarlı", gizli: true },
            { id: "t2", tip: "yazi", x: 4.5, y: 9.4, metin: "Küçük ama çok duyarlı", gizli: true }
          ],
          durumlar: [
            { metin: "Vücudun her bölgesi duyu korteksinde aynı ölçüde yer kaplamaz. Dikey eksen: o bölgeye ayrılan korteks alanı." },
            { metin: "Sırt ve bacak büyük yüzeylerdir ama dokunmaya az duyarlıdır: korteksin küçük bir kısmını kullanırlar.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 1.2], [0.65, 1.2]] }, b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 1.6], [1.65, 1.6]] } }, goster: ["t1"] },
            { metin: "Kol orta düzeyde.", set: { b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 2.4], [2.65, 2.4]] } } },
            { metin: "Parmaklar ve dudaklar küçük, ama çok duyarlıdır: ==korteksin çok büyük bir kısmını== kullanırlar.", set: { b4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 6.5], [3.65, 6.5]] }, b5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 8], [4.65, 8]] } }, goster: ["t2"], gizle: ["t1"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧠", terim: "Cerebral cortex", tr: "beyin kabuğu", tanim: "Beynin kıvrımlı dış tabakası; sol ve sağ yarım küreye bölünmüştür. Her yarım küre vücudun ==karşı== tarafını yönetir (*contralateral*).", ornek: "Sağ elini oynatan komut sol yarım kürenin motor korteksinden çıkar." },
            { ikon: "🌉", terim: "Corpus callosum", tr: "nasırlı cisim", tanim: "İki yarım küreyi birbirine bağlayan kalın akson demeti; yarım küreler arasında bilgi alışverişini sağlar.", ornek: "Sağ yarım küredeki bilgiyi sol yarım küreye taşır, böylece ikisi birlikte çalışır." }
          ] },
        { tip: "tuzak", metin: "Hareket ile dokunma korteksleri yan yana ama farklı loblardadır.", yanlis: "*Somatosensory cortex* ile *motor cortex* aynı lobdadır.", dogru: "==Motor cortex== frontal lobun arkasında, ==somatosensory cortex== parietal lobun önündedir; ikisi birbirine komşudur ama ayrı loblardadır." }
      ]
    },
    {
      baslik: "Dil bölgeleri ve afazi",
      kisa: "Broca konuşmayı üretir, Wernicke anlar; hasar *aphasia* yapar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🗣️", baslik: "*Broca's area*", maddeler: ["Genellikle sol frontal lobda", "Konuşma üretimi: sözcükleri ağza dökmek"] },
          sag: { ikon: "👂", baslik: "*Wernicke's area*", maddeler: ["Genellikle sol temporal lobda", "Konuşmayı anlama"] },
          oyun: [
            { metin: "Hasarda kişi ne demek istediğini bilir ama sözcükleri güçlükle üretir.", cevap: "sol", neden: "Üretim sorunu: *Broca*." },
            { metin: "Hasarda konuşma akıcıdır ama anlamsızdır ve başkalarını anlamak zordur.", cevap: "sag", neden: "Anlama sorunu: *Wernicke*." },
            { metin: "Konuşma üretimini yönetir.", cevap: "sol", neden: "*Broca* = üretim." },
            { metin: "Duyulan cümlelerin anlamını çözer.", cevap: "sag", neden: "*Wernicke* = anlama." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🩺", terim: "Aphasia", tr: "afazi", tanim: "Beyin hasarına bağlı dil bozukluğu: konuşmada ya da anlamada güçlük. Türü, hasarın yerine göre değişir.", ornek: "İnme sonrası bazı kişiler ne demek istediklerini bilir ama söyleyemez." },
            { ikon: "🧩", terim: "Broca's aphasia", tr: "Broca afazisi", tanim: "Konuşma yavaş, kesik ve çaba isteyen biçimde olur; anlama büyük ölçüde sağlamdır.", ornek: "“Su… iç… istiyorum” gibi kısa kesik cümleler." },
            { ikon: "🌀", terim: "Wernicke's aphasia", tr: "Wernicke afazisi", tanim: "Konuşma akıcıdır ama anlamsızdır; başkalarını anlama bozulur.", ornek: "Cümle kurulur, fakat sözcükler birbirine uymaz." }
          ] },
        { tip: "tuzak", metin: "Dilin yerini ve iki bölgenin görevini karıştırma.", yanlis: "Dil bölgeleri iki yarım kürede eşit dağılır; Wernicke konuşma üretir.", dogru: "Dil bölgeleri çoğu insanda ==sol== yarım kürededir. ==Broca = üretim==, ==Wernicke = anlama==." }
      ]
    },
    {
      baslik: "Bölünmüş beyin (split-brain)",
      kisa: "Corpus callosum kesilince yarım küreler bilgiyi paylaşamaz; uzmanlıkları ortaya çıkar.",
      bloklar: [
        { tip: "adimlar", baslik: "Split-brain deneyi: kalem resmi", adimlar: [
            { baslik: "Hazırlık", metin: "Şiddetli epilepsiyi tedavi etmek için *corpus callosum* kesilmiştir; iki yarım küre artık doğrudan bilgi alışverişi yapamaz." },
            { baslik: "Test", metin: "Hasta ekranın ortasına bakarken, kısa bir an için bir resim yalnızca sağ ya da yalnızca sol görme alanına gösterilir." },
            { baslik: "Sağ görme alanı → sol yarım küre", metin: "Dil sol yarım kürededir: hasta gördüğü nesneyi adlandırabilir." },
            { baslik: "Sol görme alanı → sağ yarım küre", metin: "Sağ yarım küre konuşamaz: hasta “bir şey görmedim” der, ama sol eliyle doğru nesneyi seçebilir." }
          ] },
        { tip: "ikili", sol: { ikon: "🔤", baslik: "Sol yarım küre (genellikle)", maddeler: ["Dil: konuşma, okuma, yazma", "Mantık ve ayrıntılı, ardışık işlem"] },
          sag: { ikon: "🖼️", baslik: "Sağ yarım küre (genellikle)", maddeler: ["Uzamsal işlem, yüz tanıma", "Duygu ve bütünü algılama"] } },
        { tip: "tuzak", metin: "“Sol beyinli, sağ beyinli” sözü bilimsel değildir.", yanlis: "Mantıklı insanlar sol beyinli, yaratıcı insanlar sağ beyinlidir.", dogru: "Yarım küreler bazı işlerde uzmanlaşır, ama sağlıklı beyinde ==ikisi sürekli birlikte== çalışır; kişilik “sol ya da sağ” değildir." }
      ]
    },
    {
      baslik: "Plastisite",
      kisa: "Beyin yeni bağlantılar kurar; hasar gören işlevi başka bölge devralabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔧", terim: "Brain plasticity", tr: "beyin plastisitesi", tanim: "Beynin kendini yeniden kablolama, bağlantıları değiştirme ya da yeni bağlantılar kurma yeteneği. Genellikle hasar gören bölgenin işini başka bir bölge devralmasına izin verir.", ornek: "İnmeden sonra el hareketini tekrar çalışarak geri kazanmak." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🩹", baslik: "İnme sonrası", metin: "Konuşma ya da hareket kaybı yaşayanlar, tekrar ve terapiyle işlevi çevre dokulara devrederek kısmen geri kazanabilir." },
            { ikon: "👁️", baslik: "Görme kaybı", metin: "Görme engelli bazı kişilerde görsel korteks, Braille okurken dokunmayla uyarılır." },
            { ikon: "🎻", baslik: "Beceri öğrenme", metin: "Yeni bir enstrüman çalıştıkça ilgili bölgelerdeki bağlantılar değişir ve güçlenir." }
          ] },
        { tip: "tuzak", metin: "Plastisite her şeyi onarmaz.", yanlis: "Beyin hasarı olduğunda kaybolan işlevler her zaman tam geri döner.", dogru: "Plastisite yaşam boyu sürer ve çocuklukta daha güçlüdür; ama kurtarma ==hasarın büyüklüğüne== ve konumuna bağlı olarak ==sınırlıdır==." }
      ]
    },
    {
      baslik: "Beyni nasıl inceleriz?",
      kisa: "EEG zamanı, fMRI yeri iyi gösterir; lezyon ve vaka çalışmaları işlev ipucu verir.",
      bloklar: [
        { tip: "tablo", baslik: "Beyin araştırma yöntemleri", head: ["Yöntem", "Neyi ölçer?", "Güçlü yanı", "Sınırı"], rows: [
            ["*EEG*", "Kafa derisindeki elektrotlarla beyin dalgaları", "Zamanı çok hassas gösterir; uyku araştırmasında kullanılır", "Etkinliğin tam yerini belirleyemez"],
            ["*fMRI*", "Kan akışı ve oksijen kullanımı: hangi bölge çalışıyor", "Etkin bölgeleri ayrıntılı gösterir", "Daha yavaştır; dolaylı ölçümdür"],
            ["*PET* / *CT*", "PET: radyoaktif şekerle etkinlik; CT: X-ışınlarıyla yapı", "Etkinlik ya da yapı hakkında ipucu", "Radyasyon içerir; ayrıntısı sınırlı"],
            ["*Lesioning*", "Belirli beyin dokusunu tahrip edip işlev kaybına bakar", "Bölge–işlev ilişkisi için ipucu", "Etik sınırlar; deneysel olarak çoğunlukla hayvanlarla yapılır"],
            ["*Case study*", "Beyin hasarı olan kişiyi yakından inceler (Phineas Gage gibi)", "Nadir durumlara ışık tutar", "Tek kişiden genelleme zordur"]
          ] },
        { tip: "grafik", baslik: "Hangi yöntem neyi iyi gösterir? (göreli gösterim)", xlabel: "Yer ayrıntısı (nerede?)", ylabel: "Zaman ayrıntısı (ne zaman?)", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "düşük" }, { v: 8, label: "yüksek" }],
          yticks: [{ v: 2, label: "düşük" }, { v: 8, label: "yüksek" }],
          ogeler: [
            { id: "eeg", tip: "nokta", renk: 0, x: 2.2, y: 9, etiket: "EEG", gizli: true },
            { id: "fmri", tip: "nokta", renk: 1, x: 8.2, y: 4.2, etiket: "fMRI", gizli: true },
            { id: "pet", tip: "nokta", renk: 2, x: 6.2, y: 1.6, etiket: "PET", gizli: true },
            { id: "yaz", tip: "yazi", x: 5, y: 6.8, metin: "İkisi bir arada: hem ne zaman hem nerede", gizli: true }
          ],
          durumlar: [
            { metin: "Her yöntemin bir güçlü, bir zayıf yanı vardır. Yatay: etkinliğin yerini ne kadar iyi gösterir; dikey: zamanını ne kadar iyi." },
            { metin: "==EEG==: elektrik değişimini milisaniyelerle yakalar (zaman çok iyi), ama etkinliğin yeri belirsizdir.", goster: ["eeg"] },
            { metin: "==fMRI==: hangi bölgenin çalıştığını ayrıntılı gösterir (yer iyi), ama kan akışına dayandığı için daha yavaştır.", goster: ["fmri"] },
            { metin: "==PET==: etkinliği ölçer ama hem zaman hem yer ayrıntısı daha düşüktür.", goster: ["pet"] },
            { metin: "Araştırmacılar yöntemleri sıklıkla birlikte kullanır.", goster: ["yaz"] }
          ] },
        { tip: "tuzak", metin: "Tarama görüntüleri düşünceyi doğrudan göstermez.", yanlis: "*fMRI*, beynin düşüncelerini doğrudan okur; parlayan bölge o işin tek sorumlusudur.", dogru: "*fMRI* kan akışını ==dolaylı== ölçer. Etkin bölge, işlevle ilişki gösterir; tek başına nedensellik kanıtlamaz. Beyin bölgeleri birlikte çalışır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Brain stem* (*medulla*): nefes, kalp atışı. *RAS*: uyanıklık ve dikkat. *Reward center*: motivasyon ve haz. *Cerebellum*: koordinasyon ve denge.",
            "*Limbic system*: *thalamus* (röle; koku hariç), *hypothalamus* (açlık, susuzluk, sıcaklık), *pituitary* (hormonlar), *hippocampus* (yeni anı), *amygdala* (korku, öfke).",
            "*Frontal*: planlama ve *motor cortex*; *parietal*: *somatosensory cortex* ve *association areas*; *temporal*: işitme ve dil; *occipital*: görme.",
            "*Broca* = konuşma üretimi, *Wernicke* = anlama (çoğunlukla sol yarım küre); hasar *aphasia* yapar.",
            "*Split-brain*: *corpus callosum* kesilir; her yarım küre vücudun karşı tarafını yönetir (*contralateral*), dil solda olduğu için sol görme alanındaki nesne söylenemez ama sol elle seçilir.",
            "*Plasticity*: beyin yeniden kablolanır; hasarlı bölgenin işini başka bölge devralabilir ama kurtarma sınırlıdır.",
            "*EEG* zamanı, *fMRI* yeri iyi gösterir; *lesioning* ve *case study* işlev ipucu verir.",
            "Sol beyinli / sağ beyinli kişilik bir mittir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir trafik kazasında beyincik hasarı alan bir kişide hangi sorunun görülmesi en olasıdır?",
      opts: ["Görme kaybı", "Kas hareketlerinde koordinasyon ve denge bozukluğu", "Konuşulanı anlayamama", "Nefes alıp vermede durma"],
      a: 1,
      why: "Beyincik koordinasyon ve denge işlevlerini yürütür. D en çekici yanlış: nefes ve kalp atışı beyin sapının (medulla) işidir." },
    { q: "Tabloda üç hastanın belirtileri verilmiştir. Belirtileri en iyi açıklayan hasarlı bölgeler hangisidir?",
      fig: { type: "table", caption: "Hasta belirtileri", head: ["Hasta", "Belirti"], rows: [["X", "Akıcı konuşuyor ama cümleleri anlamsız; başkalarını anlayamıyor"], ["Y", "Ne demek istediğini biliyor ama sözcükleri çok güçlükle üretiyor"], ["Z", "Yeni bir olayı hatırlamakta zorlanıyor"]] },
      opts: ["X: *Broca*; Y: *Wernicke*", "X: *Wernicke*; Y: *hippocampus*", "X: *Broca*; Y: *amygdala*", "X: *Wernicke*; Y: *Broca*"],
      a: 3,
      why: "Akıcı ama anlamsız konuşma ve anlama güçlüğü Wernicke; ne demek istediğini bilip üretmekte zorlanma Broca hasarıdır (Z ise hipokampüsle ilişkilidir). A en çekici yanlış: iki bölgeyi ters eşleştiriyor." },
    { q: "Corpus callosumu kesilmiş bir hasta ekranın ortasına bakarken yalnızca sol görme alanına bir kalem resmi gösteriliyor. Ardından ne görülmesi beklenir?",
      opts: ["Kalemi adlandırır ve sol eliyle seçer", "Kalemi adlandıramaz ama sol eliyle kalemi seçebilir", "Kalemi adlandırır ama sol eliyle seçemez", "Hiçbir tepki veremez"],
      a: 1,
      why: "Sol görme alanı sağ yarım küreye gider; dil sol yarım kürededir, bu yüzden hasta adlandıramaz. Sağ yarım küre sol eli yönettiği için nesneyi sol elle seçebilir. C en çekici yanlış: görme alanı ile yarım küre ilişkisini ters çeviriyor." },
    { q: "Bir araştırmacı, bir soruyu yanıtlarken beyin etkinliğinin ilk birkaç yüz milisaniyede nasıl değiştiğini ölçmek istiyor. Hangi yöntem en uygundur?",
      opts: ["*fMRI*, çünkü en ayrıntılı yer bilgisini verir", "*Lesioning*, çünkü bölgeyi devre dışı bırakır", "*EEG*, çünkü zamandaki değişimi çok hassas gösterir", "*Case study*, çünkü tek kişiyi derinlemesine inceler"],
      a: 2,
      why: "EEG elektriksel etkinliği milisaniye düzeyinde yakalar. A en çekici yanlış: fMRI yer ayrıntısında iyidir ama kan akışına dayandığı için zamanda yavaştır." },
    { q: "Bir inmeden sonra konuşmakta güçlük çeken hasta, aylar süren terapi sonunda yeniden konuşabiliyor; görüntüleme, beynin başka bir bölgesinin bu görevi üstlendiğini gösteriyor. Bu durum hangi kavramı örnekler?",
      opts: ["Beyin plastisitesi", "Karşı taraflı (*contralateral*) organizasyon", "Hep-ya-hiç ilkesi", "Refrakter dönem"],
      a: 0,
      why: "Hasarlı bölgenin işini başka bölgenin devralması plastisitedir. B en çekici yanlış: contralateral organizasyon, her yarım kürenin vücudun karşı tarafını yönetmesidir; burada bir işlevin bölgeler arası taşınması söz konusu." }
  ]
};
