/* Kitpath not defteri · py307 · 3.7 Klasik Koşullanma
   Kaynak: AP Psychology CED (2024) Topic 3.7. Blok türleri: /ap/_kit/defter.js başı.
   Not: gecikmeli, iz, eşzamanlı ve geri koşullanma türleri ile beklenti kuramı CED'de sınav dışıdır. */
window.DEFTER = {
  slug: "py307",
  amac: "Bu konu klasik koşullanmayı, yani iki uyaranın birlikte gelmesiyle öğrenilen çağrışımı anlatıyor. NS, UCS, UCR, CS, CR rollerini, edinim, sönme, kendiliğinden geri gelmeyi, genellemeyi, tat tiksintisini ve alışmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Öğrenme ve çağrışım",
      kisa: "Klasik koşullanma, iki uyaranın birlikte gelmesiyle öğrenilen çağrışımdır.",
      bloklar: [
        { tip: "hikaye", ikon: "🐕", baslik: "Pavlov'un şaşırtıcı gözlemi",
          metin: "Rus fizyolog Ivan Pavlov köpeklerde sindirimi inceliyordu. Köpeklerin yemek gelmeden, bakıcıların ayak sesini ya da kabı görünce bile salya akıttığını fark etti. Bu “hata”, öğrenmenin yeni bir türünü ortaya çıkardı: çağrışımla öğrenme." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧠", terim: "Learning", tr: "öğrenme", tanim: "Deneyim sonucunda davranışta ya da bilgide kalıcı bir değişiklik.", ornek: "Bir çocuğun sıcak çaydanlığa dokunduktan sonra ondan kaçınması." },
            { ikon: "🔗", terim: "Associative learning", tr: "çağrışımsal öğrenme", tanim: "Birbirinden bağımsız iki olay ya da uyaranın birlikte ortaya çıkıp zihinde bağlanması.", ornek: "Zilin, yemeğin gelişiyle zihinde bağlanması." },
            { ikon: "👁️", terim: "Behaviorism", tr: "davranışçılık", tanim: "Psikolojiye, gözlenebilir davranışı inceleyen ve öğrenmeyi koşullanmayla açıklayan bakış açısı; geleneksel olarak zihinsel süreçleri dışarıda bırakır.", ornek: "Pavlov, Watson, Skinner." },
            { ikon: "🔔", terim: "Classical conditioning", tr: "klasik koşullanma", tanim: "Bir uyaranı başka bir uyaranla ilişkilendirerek ona tepki vermeyi öğrenme.", ornek: "Zil sesinin tek başına salya akıtması." }
          ] }
      ]
    },
    {
      baslik: "Beş parça: NS, UCS, UCR, CS, CR",
      kisa: "Her koşullanma örneğinde beş rol vardır; önce rolleri tanı.",
      bloklar: [
        { tip: "tablo", baslik: "Pavlov'dan kantine: aynı mantık", head: ["Rol", "Ne demek?", "Pavlov", "Kantin tost zili"], rows: [
            ["*Neutral stimulus* (NS)", "Başta tepki yaratmayan uyaran", "Zil sesi", "Kantinde tost bitince çalan zil"],
            ["*Unconditioned stimulus* (UCS)", "Öğrenmeden, doğal olarak tepki yaratan uyaran", "Yemek", "Taze tost kokusu"],
            ["*Unconditioned response* (UCR)", "UCS'ye doğal, öğrenilmemiş tepki", "Salya akması", "Ağzın sulanması"],
            ["*Conditioned stimulus* (CS)", "Eşleşmeden sonra tepki yaratan eski NS", "Zil sesi", "Kantin zili"],
            ["*Conditioned response* (CR)", "CS'ye öğrenilmiş tepki", "Zilde salya", "Zilde ağzın sulanması"]
          ] },
        { tip: "adimlar", baslik: "Üç aşama: öncesi, sırasında, sonrası", adimlar: [
            { baslik: "Öncesi", metin: "Tost kokusu (UCS) → ağzın sulanması (UCR). Zil (NS) → tepki yok." },
            { baslik: "Sırasında (edinim, *acquisition*)", metin: "Zil (NS) ve tost kokusu (UCS) tekrar tekrar birlikte gelir; ağız sulanır." },
            { baslik: "Sonrası", metin: "Zil artık ==CS==; tek başına çalınca bile ağız sulanır (==CR==)." }
          ] },
        { tip: "tuzak", metin: "UCR ile CR çoğu zaman aynı davranıştır (salya); fark, onu tetikleyenin ne olduğundadır.", yanlis: "UCR ile CR her zaman farklı davranışlardır.", dogru: "Tepkiyi ==doğal olarak== UCS tetikliyorsa ==UCR==; ==öğrenilmiş== bir CS tetikliyorsa ==CR==. Aynı salya, iki farklı etiket alabilir." }
      ]
    },
    {
      baslik: "Edinim, sönme, kendiliğinden geri gelme",
      kisa: "CR eşleşmeyle güçlenir, eşleşme kesilince söner, bir süre sonra kendiliğinden geri gelebilir.",
      bloklar: [
        { tip: "grafik", baslik: "Zilin salyayı tetikleme gücü zamanla nasıl değişir?", xlabel: "Zaman / denemeler", ylabel: "CR gücü", xmax: 12, ymax: 10,
          ogeler: [
            { id: "acq", tip: "egri", renk: 0, noktalar: [[0, 0.2], [1, 3.5], [2, 6], [3, 7.5], [4, 8.2]], etiket: "Edinim" },
            { id: "acqL", tip: "yazi", x: 2, y: 9.4, metin: "CS + UCS birlikte", gizli: true },
            { id: "ext", tip: "egri", renk: 1, noktalar: [[4, 8.2], [5, 5.5], [6, 2.8], [7, 0.8], [7.8, 0.2]], etiket: "Sönme", gizli: true },
            { id: "extL", tip: "yazi", x: 6, y: 9.4, metin: "CS tek başına", gizli: true },
            { id: "rest", tip: "alan", renk: 3, noktalar: [[7.8, 0], [8.6, 0], [8.6, 10], [7.8, 10]], gizli: true },
            { id: "restL", tip: "yazi", x: 8.2, y: 6, metin: "Dinlenme", gizli: true },
            { id: "rec", tip: "egri", renk: 2, noktalar: [[8.6, 0.3], [8.9, 3.8], [9.6, 2.4], [10.4, 0.9], [11.4, 0.2]], etiket: "Geri geliş", gizli: true }
          ],
          durumlar: [
            { metin: "**Edinim** (*acquisition*): CS (zil) ve UCS (yemek) birlikte gelir; CR hızla güçlenir, sonra düzleşir.", goster: ["acqL"] },
            { metin: "**Sönme** (*extinction*): CS artık UCS olmadan gelir; CR zayıflar ve kaybolur.", goster: ["ext", "extL"], gizle: ["acqL"] },
            { metin: "Dinlenme arasından sonra CS yeniden sunulur: CR ==kendiliğinden geri gelir== (*spontaneous recovery*), ama ilkinden zayıftır ve hızla söner.", goster: ["rest", "restL", "rec"], gizle: ["extL"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Acquisition", tr: "edinim", tanim: "CS ile UCS'nin eşleşmesiyle CR'nin ilk öğrenildiği aşama.", ornek: "Zilin ilk günlerde tostla birlikte çalması." },
            { ikon: "📉", terim: "Extinction", tr: "sönme", tanim: "CS UCS'yle eşleşmeyi bıraktığında CR'nin zayıflayıp kaybolması.", ornek: "Zil çalıyor ama artık tost yok; ağız sulanmaz olur." },
            { ikon: "↩️", terim: "Spontaneous recovery", tr: "kendiliğinden geri gelme", tanim: "Sönmüş bir CR'nin, dinlenme sonrası CS yeniden sunulunca kısa süreliğine geri gelmesi.", ornek: "Tatilden sonra zilin yeniden bir an ağzı sulandırması." }
          ] },
        { tip: "tuzak", metin: "Başarılı edinim için CS, UCS'den ==önce== gelmelidir. (Gecikmeli, iz, eşzamanlı ve geri koşullanma çeşitlerinin adları sınav dışıdır.)", yanlis: "Önce yemek, sonra zil gelirse de aynı güçte koşullanma olur.", dogru: "CS'nin UCS'yi ==önceden haber vermesi== önemlidir. UCS sonrasında sunulan bir uyaran, UCS'yi tahmin edemediği için zayıf koşullanır." }
      ]
    },
    {
      baslik: "Genelleme ve ayırt etme",
      kisa: "Benzer uyaranlar da CR'yi tetikler; ayırt etme bunu ince ayarlar.",
      bloklar: [
        { tip: "grafik", baslik: "CS'ye benzeyen uyaranlara tepki", xlabel: "Uyaranın CS'ye benzerliği", ylabel: "CR gücü", xmax: 10, ymax: 10,
          xticks: [{ v: 5, label: "CS" }],
          ogeler: [
            { id: "gen", tip: "egri", renk: 0, noktalar: [[0, 0.5], [2, 2], [3.5, 5], [5, 9], [6.5, 5], [8, 2], [10, 0.5]], etiket: "" },
            { id: "disc", tip: "egri", renk: 1, noktalar: [[0, 0.1], [3.5, 0.3], [4.5, 3], [5, 9], [5.5, 3], [6.5, 0.3], [10, 0.1]], etiket: "", gizli: true },
            { id: "gl", tip: "yazi", x: 8.4, y: 4.5, metin: "Genelleme", gizli: true },
            { id: "dl", tip: "yazi", x: 7.4, y: 8, metin: "Ayırt etme", gizli: true }
          ],
          durumlar: [
            { metin: "**Genelleme** (*generalization*): CS'ye ne kadar benziyorsa uyaran o kadar güçlü CR tetikler; benzerlik azaldıkça tepki düşer.", goster: ["gl"] },
            { metin: "**Ayırt etme** (*discrimination*): benzer ama UCS'yle eşleşmeyen uyaranlara tepki verilmez; eğri ==daralır== ve yalnızca CS'ye tepki kalır.", goster: ["disc", "dl"] }
          ] },
        { tip: "ikili", sol: { ikon: "🌐", baslik: "*Generalization*", maddeler: ["CS'ye benzeyen uyaranlara da CR vermek", "Eğri geniş: “hepsi aynı”"] },
          sag: { ikon: "🎯", baslik: "*Discrimination*", maddeler: ["CS ile benzer ama eşleşmemiş uyaranı ayırmak", "Eğri dar: “yalnızca bu”"] },
          oyun: [
            { metin: "Dişçi matkabından korkan çocuk, evdeki blenderin sesinden de ürküyor.", cevap: "sol", neden: "Benzer sese de tepki: *generalization*." },
            { metin: "Kantin zili çalınca ağzı sulanan öğrenci, ders zilinde tepki vermiyor.", cevap: "sag", neden: "Benzer ama tostla eşleşmemiş zili ayırıyor: *discrimination*." },
            { metin: "Bir köpek tarafından ısırılan çocuk, bütün köpeklerden korkuyor.", cevap: "sol", neden: "Tepki, benzer uyaranlara yayılıyor: *generalization*." },
            { metin: "Köpek yalnızca 1000 Hz'lik tonda salya akıtıyor, 2000 Hz'lik tonda akıtmıyor.", cevap: "sag", neden: "Benzer tonlar arasında ayrım: *discrimination*." }
          ] }
      ]
    },
    {
      baslik: "Üst düzey koşullanma",
      kisa: "Bir CS, yeni bir uyaran için UCS gibi davranabilir.",
      bloklar: [
        { tip: "adimlar", baslik: "Üst düzey koşullanma (*higher-order conditioning*)", adimlar: [
            { baslik: "1 · Birinci koşullanma", metin: "Kantin zili tost kokusuyla eşleşti; zil artık CS ve ağız sulanıyor." },
            { baslik: "2 · Yeni uyaran", metin: "Kapı gıcırtısı (yeni NS) hep zilden hemen önce duyuluyor; tost kokusu yok." },
            { baslik: "3 · Sonuç", metin: "Gıcırtı tek başına bile ağzı sulandırıyor. ==Zil (bir CS), gıcırtı için UCS gibi iş gördü.==" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🪜", terim: "Higher-order conditioning", tr: "üst düzey koşullanma", tanim: "Bir CS'nin, yeni bir nötr uyaran için UCS gibi kullanılarak o uyaranı da CS yapması.", ornek: "Zil → tost kokusu; gıcırtı → zil. Sonunda gıcırtı da ağzı sulandırır." }
          ] }
      ]
    },
    {
      baslik: "Duygular da koşullanır: Küçük Albert",
      kisa: "Korku gibi duygusal tepkiler de klasik koşullanmayla öğrenilebilir.",
      bloklar: [
        { tip: "adimlar", baslik: "Watson ve Rayner'in Küçük Albert deneyi (1920)", adimlar: [
            { baslik: "Başlangıç", metin: "Küçük Albert beyaz sıçana korku göstermiyor; sıçan NS." },
            { baslik: "Eşleştirme", metin: "Sıçan gösterilirken arkada metal bir çubuğa vurulup yüksek ve ürkütücü bir ses çıkarılıyor. Ses UCS, korku UCR." },
            { baslik: "Koşullanma", metin: "Birkaç eşleşmeden sonra sıçan tek başına korku yaratıyor: sıçan CS, korku CR." },
            { baslik: "Genelleme", metin: "Korku tavşan ve kürklü benzeri nesnelere de yayılıyor." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💞", terim: "Emotional conditioning", tr: "duygusal koşullanma", tanim: "Duygusal tepkilerin (korku, kaygı, hoşlanma) klasik koşullanmayla öğrenilmesi.", ornek: "Diş hekiminin matkap sesine korku." },
            { ikon: "🔄", terim: "Counterconditioning", tr: "karşı koşullanma", tanim: "Korku uyandıran bir uyaranı, onunla bağdaşmayan hoş bir uyaranla eşleştirerek tepkiyi değiştirmek. Bazı ruhsal bozuklukların tedavisinin temelidir.", ornek: "Tavşandan korkan çocuğa tavşanı, sevdiği yemek yenirken uzaktan göstermek." }
          ] },
        { tip: "tuzak", metin: "Küçük Albert deneyi, koşullanmanın duygulara nasıl yayılabildiğini göstermesi bakımından öğretici, ama bugünkü etik kurallara göre kabul edilemez bir çalışmadır.", yanlis: "Küçük Albert deneyi etik açıdan sorunsuzdu, çünkü bir bebek bu kadar basit bir uyaranı çabuk unutur.", dogru: "Deney, katılımcıya ==korku== yaşattı, ==yeterli bilgilendirilmiş onay== alınmadı ve oluşan korku sonradan giderilmedi: etik sorunlar." }
      ]
    },
    {
      baslik: "Tat tiksintisi ve biyolojik hazırlık",
      kisa: "Tat tiksintisi tek eşleşmeyle ve saatlik gecikmeyle bile öğrenilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🤢", terim: "Taste aversion", tr: "tat tiksintisi", tanim: "Bir yiyeceğin tadını midede bulantıyla ilişkilendirip o yiyecekten tiksinmek.", ornek: "Midye yedikten üç saat sonra hasta olup o günden sonra midye kokusundan bile tiksinmek." },
            { ikon: "1️⃣", terim: "One-trial learning", tr: "tek denemede öğrenme", tanim: "Çağrışımın tek bir eşleşmeyle (çoğu zaman uzun bir gecikmeye rağmen) öğrenilmesi.", ornek: "Tek bir bulantı deneyimi sonrası o yiyeceğin yıllarca reddedilmesi." },
            { ikon: "🧬", terim: "Biological preparedness", tr: "biyolojik hazırlık", tanim: "Hayvanların bazı uyaran–tepki çiftlerini diğerlerinden daha çabuk öğrenmeye biyolojik olarak yatkın olması.", ornek: "Tadın bulantıyla çabuk eşleşmesi: zehirli yiyeceklerden korunmaya yarar." }
          ] },
        { tip: "tablo", baslik: "Garcia ve Koelling: sıçanlar neyi neyle çabuk eşleştirir?", head: ["CS", "UCS", "Öğrenme"], rows: [
            ["Tat", "Mide bulantısı", "Çabuk öğrenildi"],
            ["Tat", "Elektrik şoku", "Öğrenilmedi"],
            ["Işık ve ses", "Elektrik şoku", "Çabuk öğrenildi"],
            ["Işık ve ses", "Mide bulantısı", "Öğrenilmedi"]
          ], not: "Doğal yaşamda yiyeceğin tadı hastalıkla, dış tehlike işaretleri ise acıyla ilişkilidir; hayvanlar bu eşleşmelere hazırlıklıdır." },
        { tip: "tuzak", metin: "Klasik koşullanmanın çoğu örneğinde çok sayıda eşleşme ve kısa bir ara gerekir; tat tiksintisi bu kuralın istisnasıdır.", yanlis: "Klasik koşullanma için CS ve UCS'nin saniyeler içinde, defalarca eşleşmesi gerekir.", dogru: "Tat tiksintisi ==tek eşleşmeyle== ve ==saatlik gecikmeyle== bile öğrenilir (*one-trial learning*); biyolojik hazırlık bunu açıklar." }
      ]
    },
    {
      baslik: "Alışma (*habituation*): koşullanma değil",
      kisa: "Alışma, tekrar eden zararsız uyarana tepkinin azalmasıdır; çağrışım gerekmez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "😴", terim: "Habituation", tr: "alışma", tanim: "Tekrarlanan ya da süren bir uyarana alışıp ona verilen tepkinin azalması.", ornek: "Yeni taşındığın evde tren sesine ilk hafta uyanıp sonra uyanmaman." }
          ] },
        { tip: "ikili", sol: { ikon: "😴", baslik: "*Habituation*", maddeler: ["Tek uyaran tekrarlanır, tepki azalır", "Çağrışım yoktur"] },
          sag: { ikon: "📉", baslik: "*Extinction*", maddeler: ["Önceden eşleşen CS ve UCS artık eşleşmez", "Çağrışımla öğrenilmiş CR kaybolur"] },
          oyun: [
            { metin: "Klimanın uğultusu ilk gün sinir bozar, birkaç gün sonra duyulmaz olur.", cevap: "sol", neden: "Tek uyaran tekrarlanıyor, çağrışım yok: *habituation*." },
            { metin: "Zil artık tostla eşleşmediği için ağız sulanmaz olur.", cevap: "sag", neden: "CS, UCS'siz kalıyor ve CR siliniyor: *extinction*." },
            { metin: "Kalabalık yola ilk günlerde dikkat edip sonra trafik sesini fark etmemek.", cevap: "sol", neden: "Süren uyarana alışma: *habituation*." },
            { metin: "Pavlov'un köpeği, zil çalıp yemek gelmeyince salya akıtmayı bırakıyor.", cevap: "sag", neden: "Eşleşme kesildiği için tepki söndü: *extinction*." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Klasik koşullanma iki uyaranı ilişkilendirerek öğrenmedir; davranışçılık gözlenebilir davranışa odaklanır.",
            "NS (başta nötr) → eşleşmeden sonra CS; UCS doğal olarak UCR yaratır; CS öğrenilmiş CR yaratır.",
            "Edinimde CS, UCS'den önce gelmelidir; sönmede CS tek başına gelir; dinlenmeden sonra *spontaneous recovery* görülebilir.",
            "*Generalization* benzer uyaranlara tepkidir; *discrimination* benzer ama eşleşmemiş uyaranı ayırmaktır.",
            "*Higher-order conditioning*: bir CS, yeni NS için UCS gibi kullanılır.",
            "Duygusal tepkiler (korku) koşullanabilir; *counterconditioning* bu bilgiyle tedavide kullanılır.",
            "Tat tiksintisi tek eşleşmeyle öğrenilir (*one-trial learning*); *biological preparedness* bazı eşleşmelerin kolay öğrenilmesini açıklar.",
            "*Habituation* tepkinin tekrarla azalmasıdır; çağrışım içermez, *extinction*'dan farklıdır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Deniz'in okulunda öğle yemeği zili (başlangıçta tepki yaratmıyordu) her gün yemekhane kokusuyla birlikte gelmiştir. Artık zil çalınca Deniz'in ağzı sulanıyor. Zil ve ağzın sulanması sırasıyla hangi roldedir?",
      opts: ["UCS ve UCR", "CS ve CR", "CS ve UCR", "NS ve CR"],
      a: 1,
      why: "Eşleşmeden sonra tepki yaratan zil CS, onun yarattığı öğrenilmiş ağız sulanması CR'dir. En çekici yanlış şık D: zil başlangıçta NS'ydi, ama koşullanmadan sonra artık CS'dir." },
    { q: "Grafik, bir köpeğin zil sesine verdiği salya tepkisinin gücünü göstermektedir. 1. bölümde zil ve yemek birlikte, 2. bölümde zil tek başına verilmiş; 3. bölüm bir dinlenme arasıdır ve 4. bölümde zil yeniden tek başına sunulmuştur. 4. bölümde tepkinin yeniden görülmesi neyi gösterir?",
      fig: { type: "graph", xlabel: "Zaman", ylabel: "CR gücü", xmax: 12, ymax: 10, lines: [{ from: [0, 0], to: [1, 4.5], color: 0 }, { from: [1, 4.5], to: [3, 8], color: 0, label: "1" }, { from: [3, 8], to: [5, 4], color: 1 }, { from: [5, 4], to: [7, 0.4], color: 1, label: "2" }, { from: [7, 0.4], to: [8, 0.4], color: 2, label: "3" }, { from: [8, 0.4], to: [8.6, 3.8], color: 3 }, { from: [8.6, 3.8], to: [10.5, 0.5], color: 3, label: "4" }] },
      opts: ["Edinim (*acquisition*)", "Genelleme (*generalization*)", "Üst düzey koşullanma", "Kendiliğinden geri gelme (*spontaneous recovery*)"],
      a: 3,
      why: "Sönmüş bir CR'nin dinlenme sonrası CS yeniden sunulunca geri gelmesi *spontaneous recovery*dir; tepki ilkinden zayıftır ve hızla söner. En çekici yanlış şık A: edinim, CS ile UCS'nin eşleştiği 1. bölümdür." },
    { q: "Ece akşam yediği midyeden üç saat sonra hasta oluyor ve yalnızca bir kez yaşadığı bu deneyimden sonra midye kokusundan bile mide bulantısı duyuyor. Bu durum aşağıdaki kavramların hangisiyle en iyi açıklanır?",
      opts: ["Tek denemede öğrenme (*one-trial learning*) ve biyolojik hazırlık", "Üst düzey koşullanma ve genelleme", "Alışma (*habituation*)", "Sönme ve kendiliğinden geri gelme"],
      a: 0,
      why: "Tek eşleşmeyle ve saatler süren gecikmeyle öğrenilen tat tiksintisi, biyolojik olarak hazırlıklı bir çağrışımdır. En çekici yanlış şık C: alışmada tepki azalır; burada yeni bir tepki kazanılmıştır." },
    { q: "Küçük Albert deneyinde bebek, beyaz sıçandan korkmayı öğrendikten sonra tavşandan da korkmaya başlıyor. Bu durum hangi ilkeyi gösterir ve deneyin başlıca etik sorunu nedir?",
      opts: ["Ayırt etme; katılımcının yaşı küçük olduğu için etik bir sorun yoktur", "Üst düzey koşullanma; ayrı bir etik sorun bulunmaz", "Genelleme; bebeğe korku yaşatılması ve yeterli bilgilendirilmiş onay eksikliği", "Sönme; araştırmacıların yazılı onay almış olması"],
      a: 2,
      why: "Tepkinin sıçana benzer uyaranlara yayılması genellemedir; deney bir bebeğe korku yaşattı; yeterli onay alınmadı ve korku sonradan giderilmedi. En çekici yanlış şık A: ayırt etme, benzer uyaranlara tepki vermemektir; bebeğin yaşı da etik sorunu artırır." },
    { q: "Yeni taşındığı mahallede tramvay sesi Berk'i ilk günlerde sürekli uyandırıyor. Bir ay sonra Berk sesi neredeyse hiç fark etmiyor. Bu olay aşağıdakilerden hangisidir?",
      opts: ["*Extinction*", "*Spontaneous recovery*", "*Generalization*", "*Habituation*"],
      a: 3,
      why: "Tekrarlayan ve zararsız bir uyarana tepkinin azalması alışmadır (*habituation*); çağrışım içermez. En çekici yanlış şık A: sönme, daha önce eşleşen CS ve UCS'nin artık eşleşmemesi sonucu CR'nin kaybolmasıdır; burada böyle bir eşleşme yok." }
  ]
};
