/* Kitora not defteri · hg304 · Yayılma Türleri
   Kaynak: AP HuG CED Topic 3.4 (IMP-3.A). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg304",
  amac: "Bu konu fikirlerin, modanın ve kültürün yerden yere nasıl yayıldığını anlatıyor. *Relocation* ile *expansion* farkını, *expansion*'ın üç türünü (*contagious*, *hierarchical*, *stimulus*) ve her birini senaryodan tanımayı öğreneceksin.",
  bolumler: [
    {
      baslik: "*Diffusion*: bir fikir nasıl yayılır?",
      kisa: "*Diffusion*, bir fikrin ya da özelliğin kaynağından başka yerlere yayılmasıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌱", terim: "Diffusion", tr: "yayılma", tanim: "Bir fikrin, teknolojinin ya da kültürel özelliğin bir yerden başka yerlere, zaman içinde yayılması.", ornek: "Bir şarkı bir mahalleden bütün ülkeye yayılır." },
            { ikon: "📍", terim: "Cultural hearth", tr: "kültür ocağı", tanim: "Bir fikrin, inancın ya da yeniliğin ilk ortaya çıktığı yer. Yayılma buradan başlar.", ornek: "Bir müzik akımının doğduğu şehir." },
            { ikon: "📉", terim: "Distance decay", tr: "mesafe etkisi", tanim: "Kaynaktan uzaklaştıkça bir fikrin etkisinin ve benimsenmesinin azalması.", ornek: "Bir kafe zincirinin menüsünü kaynağından uzak şehirler daha geç benimser." }
          ] }
      ]
    },
    {
      baslik: "İki ana yol: *relocation* ve *expansion*",
      kisa: "*Relocation*'da insanlar fikri taşır; *expansion*'da fikir yerinde kalarak çoğalır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧳", baslik: "*Relocation diffusion* (taşınarak yayılma)", maddeler: ["İnsanlar bir yerden başka yere göç eder, fikri yanında götürür", "Fikir göçle yeni yere gider"] },
          sag: { ikon: "📡", baslik: "*Expansion diffusion* (genişleyerek yayılma)", maddeler: ["Fikir kaynağında kalır, güçlenir ve çevreye yayılır", "İnsanlar yer değiştirmez; fikir yer değiştirir"] },
          oyun: [
            { metin: "Almanya'ya giden Türk işçiler, mutfak alışkanlıklarını da yanlarında götürdü.", cevap: "sol", neden: "Fikir insanlarla birlikte taşındı: *relocation*." },
            { metin: "Bir dizi, yayın yoluyla tüm ülkede izlenir; kimse taşınmamıştır.", cevap: "sag", neden: "Fikir kaynağında kalarak yayılır: *expansion*." },
            { metin: "Göç eden bir aile, yeni mahallesinde kendi bayramını kutlamaya başlar.", cevap: "sol", neden: "Taşıyıcı insanların kendisi: *relocation*." },
            { metin: "Bir oyun, okul çevresinde arkadaşlardan arkadaşlara yayılır; hiç kimse okul değiştirmemiştir.", cevap: "sag", neden: "İnsanlar yerinde, fikir yayılıyor: *expansion*." }
          ] },
        { tip: "grafik", baslik: "Fikir ya gider ya genişler", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "ocak", tip: "nokta", x: 2, y: 5, etiket: "Kaynak", kilavuz: true },
            { id: "yeni", tip: "nokta", x: 8, y: 5, etiket: "Yeni yer", kilavuz: true, gizli: true },
            { id: "go", tip: "ok", renk: 1, from: [2.4, 5], to: [7.5, 5], gizli: true },
            { id: "goy", tip: "yazi", x: 5, y: 6.1, metin: "insanlar fikri taşır", gizli: true },
            { id: "alan", tip: "alan", renk: 2, noktalar: [[1.5, 4.5], [2.5, 4.5], [2.5, 5.5], [1.5, 5.5]], gizli: true },
            { id: "ey", tip: "yazi", x: 5, y: 2, metin: "fikir yerinde çoğalır ve yayılır", gizli: true }
          ],
          durumlar: [
            { metin: "Bir kültür ocağı: fikrin doğduğu yer." },
            { metin: "==*Relocation*==: insanlar uzağa taşınır ve fikri yeni yere götürür.", goster: ["go", "goy", "yeni"] },
            { metin: "==*Expansion*==: fikir kaynağında kalır, güçlenir ve çevresine doğru genişler.", gizle: ["go", "goy", "yeni"], goster: ["alan", "ey"] },
            { metin: "Alan genişledikçe fikir daha çok insana ulaşır; ama ocak yerinde durur.", set: { alan: { noktalar: [[0.8, 3.2], [5, 3.2], [5, 6.8], [0.8, 6.8]] } } }
          ] }
      ]
    },
    {
      baslik: "*Expansion*'ın üç türü",
      kisa: "*Expansion* üç yoldan yayılır: komşudan komşuya, tepeden aşağı ya da uyarlanarak.",
      bloklar: [
        { tip: "grafik", baslik: "Bir haritada üç yayılma", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "b1", tip: "nokta", x: 1.5, y: 5, etiket: "Büyük şehir (ocak)", kilavuz: true },
            { id: "n1", tip: "nokta", x: 3, y: 6, etiket: "N1", gizli: true },
            { id: "n2", tip: "nokta", x: 3, y: 4, etiket: "N2", gizli: true },
            { id: "n3", tip: "nokta", x: 4.5, y: 5, etiket: "N3", gizli: true },
            { id: "b2", tip: "nokta", x: 8, y: 7, etiket: "Uzak büyük şehir", gizli: true },
            { id: "s1", tip: "nokta", x: 8.8, y: 5.3, etiket: "S1", gizli: true },
            { id: "s2", tip: "nokta", x: 6.8, y: 5.3, etiket: "S2", gizli: true },
            { id: "c1", tip: "ok", renk: 1, from: [1.8, 5.2], to: [2.8, 5.8], gizli: true },
            { id: "c2", tip: "ok", renk: 1, from: [1.8, 4.8], to: [2.8, 4.2], gizli: true },
            { id: "c3", tip: "ok", renk: 1, from: [3.3, 5.8], to: [4.3, 5.2], gizli: true },
            { id: "cy", tip: "yazi", x: 3, y: 2.5, metin: "komşudan komşuya, atlamadan", gizli: true },
            { id: "h1", tip: "ok", renk: 2, from: [1.9, 5.3], to: [7.6, 6.8], gizli: true },
            { id: "h2", tip: "ok", renk: 2, from: [8, 6.6], to: [8.7, 5.6], gizli: true },
            { id: "h3", tip: "ok", renk: 2, from: [7.8, 6.6], to: [7, 5.6], gizli: true },
            { id: "hy", tip: "yazi", x: 5.5, y: 8.8, metin: "önce güçlü merkezler, sonra aşağı", gizli: true },
            { id: "st", tip: "yazi", x: 8, y: 3.3, metin: "fikir uyarlanır: yeni biçim", gizli: true },
            { id: "sk", tip: "ok", renk: 3, kesik: true, from: [8.3, 6.5], to: [8.3, 4], gizli: true }
          ],
          durumlar: [
            { metin: "Bir harita: sol baştaki büyük şehir fikrin kaynağı. Sağda uzak bir büyük şehir, aralarda küçük kasabalar var.", goster: ["n1", "n2", "n3", "b2", "s1", "s2"] },
            { metin: "==*Contagious*==: fikir en yakın komşulara, onlardan bir sonrakine geçer. Mesafe artınca etki azalır; hiçbir yer atlanmaz.", goster: ["c1", "c2", "c3", "cy"] },
            { metin: "==*Hierarchical*==: fikir önce güçlü ve etkili bir merkeze atlar; oradan daha küçük yerlere iner. Aradaki küçük kasabalar atlanabilir.", gizle: ["c1", "c2", "c3", "cy"], goster: ["h1", "h2", "h3", "hy"] },
            { metin: "==*Stimulus*==: fikrin kendisi değil, ona dair esin yayılır; her yer onu kendi biçimine uyarlar.", gizle: ["h1", "h2", "h3", "hy"], goster: ["st", "sk"] }
          ] },
        { tip: "tablo", baslik: "Üç türün ayırt edici özelliği", head: ["Tür", "Nasıl yayılır?", "Benzetme"], rows: [
            ["*Contagious*", "Komşudan komşuya; mesafeye ve temasa bağlı", "Grip salgını"],
            ["*Hierarchical*", "Güçlü insanlardan ya da büyük merkezlerden alta", "Podyum modası"],
            ["*Stimulus*", "Fikir uyarlanır; ana fikir aynen yayılmaz", "Esinlenip kendi versiyonunu yapmak"]
          ] }
      ]
    },
    {
      baslik: "Hangisi *contagious*, hangisi *hierarchical*?",
      kisa: "Mesafe belirleyiciyse *contagious*; kişinin ya da yerin gücü belirleyiciyse *hierarchical*.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🦠", terim: "Contagious diffusion", tr: "bulaşıcı yayılma", tanim: "Fikir, sosyal statüye bakmadan yakından uzağa, temas edenlere yayılır.", ornek: "Okulda bir oyunun komşu sıralara geçmesi." },
            { ikon: "🏛️", terim: "Hierarchical diffusion", tr: "hiyerarşik yayılma", tanim: "Fikir, güç ve nüfuz sahibi kişi ya da yerlerden daha aşağıdakilere doğru yayılır.", ornek: "Ünlü bir futbolcunun saç modelini mahalledeki gençlerin benimsemesi." },
            { ikon: "💡", terim: "Stimulus diffusion", tr: "esinle yayılma", tanim: "Fikir olduğu gibi yayılmaz; ama başka yerlerde ona benzer yeni bir uyarlamayı tetikler.", ornek: "Sequoyah'ın, yazıyı gördükten sonra Çerokice için kendi hece alfabesini geliştirmesi." }
          ] },
        { tip: "ikili", sol: { ikon: "🦠", baslik: "*Contagious*", maddeler: ["Temas ve mesafe belirleyicidir", "Kim olduğuna bakmaz"] },
          sag: { ikon: "🏛️", baslik: "*Hierarchical*", maddeler: ["Güç ve statü belirleyicidir", "Kimi atlar, kimin üstünden geçer"] },
          oyun: [
            { metin: "Bir hastalık, önce komşu kasabalara, sonra onların komşularına geçiyor.", cevap: "sol", neden: "Yakından uzağa, temasla: *contagious*." },
            { metin: "Bir moda akımı önce büyük şehirdeki ünlülerde, sonra tüm ülkede görülüyor.", cevap: "sag", neden: "Güçlü kişi ve yerden aşağıya: *hierarchical*." },
            { metin: "Bir cümle, sıralardan sıralara fısıldanarak yayılıyor.", cevap: "sol", neden: "Komşudan komşuya: *contagious*." },
            { metin: "Bir yenilik önce başkente, sonra eyalet merkezlerine, sonra küçük kasabalara ulaşıyor.", cevap: "sag", neden: "Büyükten küçüğe: *hierarchical*." }
          ] },
        { tip: "tuzak", metin: "*Contagious* ile *hierarchical*'ı yalnızca mesafeye bakarak ayırma.", yanlis: "Yakındaki yerlere yayılan her şey *contagious*'tır.", dogru: "Ayırıcı ölçüt, yayılmayı neyin yönlendirdiğidir: ==temas== (*contagious*) ya da ==güç ve statü== (*hierarchical*). Güçlü bir merkezden inen fikir yakın bir yere de gitse *hierarchical*'dır." }
      ]
    },
    {
      baslik: "Senaryoyu sınıflandır",
      kisa: "Soruyu çözerken önce fikrin neyle yayıldığına, sonra yönüne bak.",
      bloklar: [
        { tip: "ornek", baslik: "Üç senaryo, üç tür", durum: "(1) Almanya'ya giden Türk işçilerin mutfak alışkanlıklarını götürmesi. (2) Bir dans akımının önce büyük şehirdeki fenomenlerde, sonra tüm ülkede yayılması. (3) Bir kasabanın, kendi bölgesindeki bir yeniliği görünce ona benzer ama farklı bir ürünle karşılık vermesi.",
          adimlar: ["(1) Fikri insanlar taşıdı: *relocation*.", "(2) Büyük merkezden küçüklere, güçlü kişilerden herkese: *expansion*, tür olarak *hierarchical*.", "(3) Fikir aynen yayılmadı, uyarlama doğdu: *expansion*, tür olarak *stimulus*."],
          sonuc: "==(1) *relocation*, (2) *hierarchical*, (3) *stimulus*.== Önce *relocation* mı *expansion* mı diye sor; *expansion* ise türünü ayır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Diffusion*: bir fikrin kaynağından başka yerlere yayılması; kaynağa *cultural hearth* denir.",
            "*Distance decay*: kaynaktan uzaklaştıkça etki azalır.",
            "*Relocation*: insanlar taşınır ve fikri götürür.",
            "*Expansion*: fikir kaynağında kalarak çoğalır ve yayılır; üç türü vardır.",
            "*Contagious*: temasla, komşudan komşuya; grip salgını gibi.",
            "*Hierarchical*: güçlü kişi ya da büyük merkezlerden aşağıya; moda gibi.",
            "*Stimulus*: fikir uyarlanır; ana fikir aynen değil, esini yayılır (Çerokice hece alfabesi).",
            "Soruda önce *relocation* mı *expansion* mı, sonra türü ayır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir moda akımı önce ülkenin en büyük şehrindeki ünlülerde görülüyor, birkaç ay sonra büyük şehirlere, daha sonra da küçük kasabalara ulaşıyor. Bu yayılma türü hangisidir?",
      opts: ["*Relocation diffusion*", "*Contagious diffusion*", "*Hierarchical diffusion*", "*Stimulus diffusion*"],
      a: 2,
      why: "Fikir güçlü merkezlerden daha küçüklere iniyor: *hierarchical*. B şıkkı en çekici yanlış: *contagious* yalnızca yakınlığa ve temasa dayanır, statüye bakmaz." },
    { q: "Bir grup göçmen, yeni ülkesine yerleşip kendi bayram ve yemek geleneklerini orada sürdürüyor. Bu yayılma nasıl tanımlanır?",
      opts: ["*Relocation diffusion*", "*Hierarchical diffusion*", "*Contagious diffusion*", "*Stimulus diffusion*"],
      a: 0,
      why: "Fikir, onu taşıyan insanların yer değiştirmesiyle yayılıyor: *relocation*. Diğer şıklar *expansion*'ın türleridir ve insanların taşınmasını gerektirmez." },
    { q: "Tabloya göre aşağıdakilerden hangisi söylenebilir?",
      fig: { type: "table", caption: "Bir oyunun mahallelere ulaştığı hafta", head: ["Mahalle", "Kaynağa uzaklık (km)", "Ulaştığı hafta"], rows: [["A", "1", "1"], ["B", "3", "2"], ["C", "6", "3"], ["D", "9", "4"]] },
      opts: ["Yayılma *hierarchical*'dır; çünkü A en büyük mahalledir", "Yayılma *contagious*'tır; çünkü mesafe arttıkça gecikme artıyor", "Yayılma *relocation*'dır; çünkü insanlar taşınıyor", "Yayılma *stimulus*'tur; çünkü oyun aynen yayılmıyor"],
      a: 1,
      why: "Kaynağa uzaklık arttıkça yayılma gecikiyor: *distance decay* görülen *contagious* örüntüdür. A şıkkı yanlış: tablo mahallelerin büyüklüğünden değil mesafeden söz ediyor." },
    { q: "Sequoyah, İngilizce yazıyı görünce Çerokice için kendi hece alfabesini geliştirdi. İngilizce alfabe aynen yayılmadı ama bu yazı biçimi buna esin verdi. Bu durum hangisidir?",
      opts: ["*Relocation diffusion*", "*Contagious diffusion*", "*Hierarchical diffusion*", "*Stimulus diffusion*"],
      a: 3,
      why: "Fikrin kendisi aynen yayılmadı; esin uyarlama doğurdu: *stimulus*. B şıkkı çekici ama yanlış: *contagious* fikrin aynen, temasla geçmesidir." },
    { q: "*Relocation* ile *expansion* farkını en iyi hangisi anlatır?",
      opts: ["*Relocation*'da fikir insanlarla taşınır; *expansion*'da fikir kaynağında kalarak yayılır", "*Relocation* yalnızca internet üzerinden olur", "*Expansion* hiçbir zaman mesafeye bağlı değildir", "*Relocation*'da fikir hiçbir zaman değişmez; *expansion*'da değişir"],
      a: 0,
      why: "İki yol da fikrin yayılmasını anlatır ama taşıyıcısı farklıdır: insanlar mı (relocation), fikrin kendisi mi (expansion). D şıkkı çekici ama yanlış: iki yolda da fikir değişebilir; fark taşıyıcıdadır." }
  ]
};
