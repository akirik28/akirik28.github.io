/* Kitpath not defteri · en304 · 3.4 Temalar
   Kaynak: okul 10. sınıf English Unit 3 (The Catcher in the Rye): öğretmenin bütün kitap tartışma soruları ve bölüm vurguları (Byrd, Akyürek) + MEB 10. sınıf programı. Blok türleri: /ap/_kit/defter.js başı.
   Telif: romandan yalnız 1 kısa alıntı (Ch 26, ≤10 kelime); gerisi kendi cümlelerimizle. Ruh sağlığı ve yas olgusal anlatılır, tanı konmaz. */
window.DEFTER = {
  slug: "en304",
  amac: "Bu konu romanın temalarını açıklıyor: sahtelik ve ikiyüzlülük, yabancılaşma, masumiyet ve *catcher* hayali, yas, dile duyarlılık, Holden'ın paradoksu. Konu ile temanın farkını, temaların metindeki izlerini ve bütün kitap tartışma sorularını İngilizce nasıl cevaplayacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Konu ve tema farkı",
      kisa: "Konu tek kelimedir; tema, o konu hakkında romanın söylediği cümledir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏷️", baslik: "Konu (*topic*)", maddeler: ["Tek kelime ya da kısa ifade", "Örnek: yas, masumiyet, yalnızlık"] },
          sag: { ikon: "💬", baslik: "Tema cümlesi (*theme statement*)", maddeler: ["Tam bir yargı cümlesi", "Örnek: yas, alay ve öfke arkasına saklanabilir"] },
          oyun: [
            { metin: "Masumiyet", cevap: "sol", neden: "Tek kelime: konu." },
            { metin: "Çocukları düşmekten korumak mümkün değildir; büyümek riski de içerir.", cevap: "sag", neden: "Roman hakkında bir yargı bildiriyor: tema cümlesi." },
            { metin: "Yabancılaşma", cevap: "sol", neden: "Tek kelime: konu." },
            { metin: "Sahte dünyadan kaçan biri kendi çelişkisini görmek zorunda kalır.", cevap: "sag", neden: "Bir ilişkiyi ve sonucu söylüyor: tema cümlesi." }
          ] },
        { tip: "harita", merkez: "Romanın temaları", dallar: [
            { baslik: "*Phoniness*", alt: "Sahtelik ve ikiyüzlülük (*hypocrisy*)" },
            { baslik: "*Alienation*", alt: "Yabancılaşma ve yalnızlık" },
            { baslik: "*Innocence*", alt: "Masumiyet ve catcher hayali" },
            { baslik: "*Loss and grief*", alt: "Kayıp, yas ve çöküş" },
            { baslik: "*Language*", alt: "Dile duyarlılık ve *euphemism*" },
            { baslik: "*Paradox*", alt: "Olgun ama çocuksu Holden" }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: tema cümlesi", head: ["Amaç", "Kalıp"], rows: [
            ["Temayı söylemek", "*A central theme of the novel is…*"],
            ["Yargıyı kurmak", "*The novel suggests that…*"],
            ["Yöntemi eklemek", "*Through…, Salinger explores the theme of…*"]
          ], not: "“Theme: innocence” yetmez. Tek kelime değil, tam cümle yaz: *The novel suggests that innocence cannot be protected forever.*" }
      ]
    },
    {
      baslik: "Sahtelik (*phoniness*) ve ikiyüzlülük",
      kisa: "Holden sahte bulduğu insanlara kızar; kendi çelişkilerini görmez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎭", terim: "Phoniness", tr: "sahtelik", tanim: "İnsanların rol yapması, gösteriş yapması, çıkarı için içten görünmesi. Holden *phony*'yi Ch 2'de tanımlar ve sonra herkese yapıştırır.", ornek: "Ünlü olmak için gösteri yapan biri; Ernie'nin alkışı çeken gösterişli piyano çalışı." },
            { ikon: "🕴️", terim: "Hypocrisy", tr: "ikiyüzlülük", tanim: "Söyleneni yapmamak, içten görünüp içten olmamak. Öğretmenin tartışma sorularında cenazelerdeki tavırlar (Ch 20) ve rahibelerle yaşanan sahne (Ch 15) bu başlıkta anılır.", ornek: "Törenlerde yas tutar görünen ama içten olmayanlar." },
            { ikon: "🔁", terim: "Irony", tr: "ironi", tanim: "Söylenenle gerçekte olanın zıt çıkması. Holden başkalarının ironisini çabuk görür, kendi ironisini görmez.", ornek: "Holden sahteliği eleştirirken kendisi de yalan söyler (Mrs Morrow, Ch 8)." }
          ] },
        { tip: "ikili", sol: { ikon: "🎭", baslik: "Holden'a göre *phony*", maddeler: ["Gösterişli, rol yapan, çıkarcı", "Etkilemeye çalışır"] },
          sag: { ikon: "🌟", baslik: "Holden'a göre *genuine*", maddeler: ["İçten, abartısız, çocuksu", "Karşılık beklemeden davranır"] },
          oyun: [
            { metin: "Gösterişli bir kulüpte alkışın içten değil, gösteriş olduğunu düşünür.", cevap: "sol", neden: "Holden için sahtelik göstermelik alkışla başlar." },
            { metin: "Phoebe, kendini savunmasız bırakmadan dürüstçe konuşur.", cevap: "sag", neden: "Phoebe içtendir." },
            { metin: "Pazar sabahı kahvaltıda sohbet ettiği rahibeler gösterişsiz ve nazik davranır.", cevap: "sag", neden: "Ch 15: Holden onları içten bulur." },
            { metin: "Karşısındakini etkilemek için sesini ve tavrını değiştiren biri.", cevap: "sol", neden: "Rol yapmak: sahtelik." }
          ] },
        { tip: "tuzak", baslik: "Holden da sahte olabilir", metin: "Holden başkalarını eleştirirken kendisi de yalan söyler ve rol yapar (Ch 3, 8, 10). Bu ironi, romanın temalarından biridir.", yanlis: "Holden sahte değildir; yalnızca başkaları sahtedir.", dogru: "Holden'ın sahtelik suçlaması *ironic*: kendisi de aynı davranışı sergiler, bu da yetişkinlikten korkusunu gösterir." },
        { tip: "tablo", baslik: "Sınavda böyle yaz: sahtelik", head: ["Amaç", "Kalıp"], rows: [
            ["İroni", "*Holden's accusation of phoniness is ironic because he himself…*"],
            ["İkiyüzlülük", "*Holden's disgust at hypocrisy, as in the funeral scene, shows that…*"],
            ["Yorum", "*This suggests that his criticism reflects his fear of becoming an adult.*"]
          ] }
      ]
    },
    {
      baslik: "Yabancılaşma ve yalnızlık",
      kisa: "Holden insanlara yaklaşmak ister, ama çoğu denemede biraz daha uzaklaşır.",
      bloklar: [
        { tip: "grafik", baslik: "Ek bilgi (öğretmen belgesinde yok): bağ kurma denemeleri (bir yorum)", xlabel: "Karşılaşmalar", ylabel: "Bağ", xmax: 8, ymax: 6,
          xticks: [{ v: 1, label: "Spencer" }, { v: 2, label: "Ackley" }, { v: 3, label: "Sunny" }, { v: 4, label: "Sally" }, { v: 5, label: "Carl" }, { v: 6, label: "Phoebe" }, { v: 7, label: "Atlıkarınca" }],
          yticks: [{ v: 1, label: "zayıf" }, { v: 5, label: "güçlü" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 3, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 3, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 3, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b4", tip: "alan", renk: 3, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "b5", tip: "alan", renk: 3, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "b6", tip: "alan", renk: 1, noktalar: [[5.65, 0], [6.35, 0], [6.35, 0], [5.65, 0]] },
            { id: "b7", tip: "alan", renk: 2, noktalar: [[6.65, 0], [7.35, 0], [7.35, 0], [6.65, 0]] }
          ],
          durumlar: [
            { metin: "Pencey'de ==Mr Spencer== ve ==Ackley== ile konuşur; ama ikisinde de gerçek bir yakınlık kurulmaz.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 2], [0.65, 2]] }, b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 1], [1.65, 1]] } } },
            { metin: "New York'ta ==Sunny== ile yalnızca konuşmak ister; ama bu da çabuk dağılır.", set: { b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 2], [2.65, 2]] } } },
            { metin: "Pazar günü ==Sally== ve ==Carl Luce== ile denemeler daha da kötü biter.", set: { b4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 1], [3.65, 1]] }, b5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 1], [4.65, 1]] } } },
            { metin: "==Phoebe== ile konuşma, kitaptaki en güçlü bağlardan biridir.", set: { b6: { noktalar: [[5.65, 0], [6.35, 0], [6.35, 4], [5.65, 4]] } } },
            { metin: "==Atlıkarınca== sahnesinde Holden, uzun süredir ilk kez rahat ve mutlu görünür. Bu çubuklar bir yorumdur; yine de örüntü açıktır: ==yabancılaşma, Phoebe ile hafifler.==", set: { b7: { noktalar: [[6.65, 0], [7.35, 0], [7.35, 5], [6.65, 5]] } } }
          ] },
        { tip: "liste", baslik: "Yabancılaşma nasıl görünür?", maddeler: [
            { ikon: "🧊", baslik: "Etiket", metin: "İnsanları hızla *phony* sayarak onlardan uzak durur." },
            { ikon: "📞", baslik: "Yarım kalan temas", metin: "Jane'i aramak ister, ama bir türlü arayamaz." },
            { ikon: "🧢", baslik: "Kalkan", metin: "Alay, abartı ve kırmızı şapka, onu başkalarından ayıran bir tür siperdir." },
            { ikon: "🤐", baslik: "Sessizlik arzusu", metin: "Ch 25'te çöküş anında sağır-dilsiz biri gibi kimseyle konuşmadan yaşamak ister: *isolation*'ın uç noktası." }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: yabancılaşma", head: ["Amaç", "Kalıp"], rows: [
            ["Örüntü", "*Holden's repeated failed attempts to connect emphasize his isolation.*"],
            ["Karşıtlık", "*In contrast, his conversation with Phoebe shows that…*"]
          ] }
      ]
    },
    {
      baslik: "Masumiyet ve çavdar tarlası hayali",
      kisa: "Holden çocukluğu korumak ister; roman büyümenin kaçınılmaz olduğunu gösterir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌱", terim: "Innocence", tr: "masumiyet", tanim: "Çocukluğa ait saflık, dürüstlük ve dünyanın sert yüzünü henüz görmemiş olmak. Holden bunu en çok Phoebe'de, Jane'de ve Allie'nin anısında görür.", ornek: "Phoebe'nin açık sözlü, kandırmasız hâli." },
            { ikon: "🧭", terim: "Experience", tr: "deneyim, yetişkinlik tecrübesi", tanim: "Masumiyetin karşıtı: kaybı, çıkarı ve sahteliği tanımak. Holden bunun çekim alanında kalmaktan korkar.", ornek: "Yetişkinlerin yalanlarını fark etmesi." },
            { ikon: "🚸", terim: "Coming-of-age", tr: "büyüme hikâyesi", tanim: "Bir gencin çocukluktan yetişkinliğe geçerken yaşadığı iç değişim. Holden bu geçişe direnir.", ornek: "Bırakmayı öğrendiği atlıkarınca sahnesi." }
          ] },
        { tip: "adimlar", baslik: "Holden'ın masumiyet yolculuğu", adimlar: [
            { baslik: "Şarkı (Ch 16)", metin: "Bir çocuğun çavdar tarlası şarkısını mırıldandığını duyar; sözü *meet* yerine *catch* diye kullanır. Phoebe bunu Ch 22'de düzeltir." },
            { baslik: "Hayal (Ch 22)", metin: "Çavdar tarlasında kenardaki çocukları düşmekten korumak ister. Öğretmenin işaret ettiği gibi Holden Caulfield adı da başlıkla yankılanır." },
            { baslik: "Silme çabası (Ch 25)", metin: "Phoebe'nin okulunun duvarındaki kaba yazıyı silmeye çalışır; sonra hepsini silemeyeceğini fark eder. Bu, *catcher* hayaliyle doğrudan bağlıdır." },
            { baslik: "Müze ve atlıkarınca (Ch 25)", metin: "Müzedeki iki çocuğa yardım etmesi hem sembol hem ironidir. Sonra Phoebe'nin altın halkaya uzanmasını izler, ona engel olmaz ve mutluluk hisseder." }
          ] },
        { tip: "tuzak", baslik: "Roman “büyümeyi” nasıl ele alır?", metin: "Holden büyümeye direnir, ama romanın sonu düz bir “büyüdü” ya da “büyümedi” demez. Bir kabullenme işareti vardır, yine de belirsizlik sürer.", yanlis: "Roman Holden'ın hiç değişmediğini anlatır.", dogru: "Roman Holden'ın direncini ve sonda küçük bir kabullenme belirtisini gösterir; sonuç açık uçludur." },
        { tip: "tablo", baslik: "Sınavda böyle yaz: masumiyet", head: ["Amaç", "Kalıp"], rows: [
            ["Çatışma", "*Holden's desire to protect innocence is challenged when…*"],
            ["Sonuç", "*By accepting Phoebe's risk, Holden begins to…*"]
          ] }
      ]
    },
    {
      baslik: "Kayıp, yas ve çöküş",
      kisa: "Allie'nin ölümü, Holden'ın öfkesinin ve kaçışının ardındaki yaradır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🕯️", terim: "Grief", tr: "yas", tanim: "Bir kaybın ardından yaşanan derin üzüntü. Herkes yası farklı yaşar; öfke ve içe kapanma da yas tepkisi olabilir.", ornek: "Holden'ın acısı kitapta açıkça adlandırılmaz; davranışlarından anlaşılır." },
            { ikon: "🪖", terim: "Coping mechanism", tr: "başa çıkma yolu", tanim: "Zor duyguları yönetmek için gösterilen davranış ve tavır. Holden'da bu alay, kaçış ve etiketleme olarak görünür.", ornek: "Her şeyi sahte ilan etmek." }
          ] },
        { tip: "liste", baslik: "Yasın metindeki izleri", maddeler: [
            { ikon: "🧤", baslik: "Allie'nin eldiveni", metin: "Kompozisyonunun konusu olur (Ch 5); Allie'nin anısını yaşatır. Eldiveni aile dışında yalnızca Jane'e göstermiş olması derin güvene işaret eder." },
            { ikon: "🪟", baslik: "Öfke", metin: "Allie öldüğü gece öfkesini garajın camlarına yönelttiği anlatılır (Ch 5)." },
            { ikon: "💭", baslik: "Ölüm düşünceleri", metin: "Ch 14'te ‘ölüyorum’ korkusu, Ch 20'de parkta soğukta ölümü ve Phoebe'nin tepkisini düşünmesi." },
            { ikon: "🌧️", baslik: "Çöküş ve kabullenme", metin: "Ch 24–25'te bedensel ve zihinsel olarak tükenir; Ch 26'da anlattığı herkesi özlediğini söyler (“you start missing everybody”, Ch 26)." }
          ] },
        { tip: "tuzak", baslik: "Yas bir tanı değildir", metin: "Holden'ın yası, edebi çözümlemede karakterin duygularını anlamak içindir; kitap ona bir tanı koymaz. Sınavda tanı yazma; metindeki davranışı ve etkisini anlat.", yanlis: "Holden'ın bir ruh sağlığı sorunu vardır ve bu kesindir.", dogru: "Metin, yasın ve yalnızlığın davranışına yansıdığını gösterir; bir tanı koymaz. Yaz: *Holden's grief is expressed indirectly through…*" },
        { tip: "tablo", baslik: "Sınavda böyle yaz: yas", head: ["Amaç", "Kalıp"], rows: [
            ["Dolaylı anlatım", "*Grief is portrayed indirectly through Holden's…*"],
            ["Bağ", "*His attachment to Allie's glove suggests that…*"]
          ] }
      ]
    },
    {
      baslik: "Dile duyarlılık, *euphemism* ve ironi",
      kisa: "Holden kelimelere duyarlıdır; örtmece ve küfür onun için ahlak sorusudur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗨️", terim: "Euphemism", tr: "örtmece", tanim: "Sert ya da rahatsız edici bir şeyi yumuşak sözcüklerle söylemek. Ch 7'de cinsellik için kullanılan örtmece öğretmenin örneğidir.", ornek: "Ölüm için ‘aramızdan ayrıldı’ demek." },
            { ikon: "🔎", terim: "Sensitivity to language", tr: "dile duyarlılık", tanim: "Holden sözcüklerin etkisini fark eder: duvardaki kaba yazılara tepki gösterir (Ch 25), Ch 13'te sahte isimlere başvurur; ama kendisi de argo ve küfür kullanır.", ornek: "Bir yandan çocukların kaba yazılar görmesinden korkar, bir yandan kendi dili sert." }
          ] },
        { tip: "ikili", sol: { ikon: "🪶", baslik: "*Euphemism* (örtmece)", maddeler: ["Yumuşatır, dolaylı söyler", "Gerçeği örter ya da hafifletir"] },
          sag: { ikon: "🔨", baslik: "Doğrudan dil", maddeler: ["Açık ve sert söyler", "Gerçeği olduğu gibi verir"] },
          oyun: [
            { metin: "She passed away last year.", cevap: "sol", neden: "Ölümü yumuşak sözlerle söylüyor." },
            { metin: "He was fired.", cevap: "sag", neden: "Doğrudan ve açık." },
            { metin: "She is between jobs.", cevap: "sol", neden: "İşsizliği yumuşatan örtmece." },
            { metin: "He lied to her.", cevap: "sag", neden: "Açık ve sert: doğrudan dil." }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: dil ve ironi", head: ["Amaç", "Kalıp"], rows: [
            ["Dil duyarlılığı", "*Holden's sensitivity to language shows that words matter to him as much as actions.*"],
            ["Örtmece", "*The euphemism softens the subject, which reveals the characters' discomfort.*"],
            ["İroni", "*It is ironic that Holden condemns crude language while using it himself.*"]
          ], not: "Ch 13 gibi hassas sahnelerde ayrıntıya girme; yalnızca dilin ve sahte ismin ne gösterdiğini yaz." }
      ]
    },
    {
      baslik: "Temalar bağlanır; bütün kitap tartışma soruları",
      kisa: "Temalar ayrı değil; yas, masumiyet ve yalnızlık birbirini besler.",
      bloklar: [
        { tip: "ornek", baslik: "İki temayı tek cümlede bağla", durum: "Soru: “How are the themes of grief and alienation connected?” Cevabı dört adımda kur.",
          adimlar: ["1) İki temayı adlandır: *grief* ve *alienation*.", "2) Bağı kur: yası konuşamadığı için Holden insanlardan uzaklaşır.", "3) Kanıt ekle: Allie'nin eldiveni (Ch 5), Phoebe ile konuşma (Ch 22).", "4) Sonucu söyle: yas, yalnızlığı derinleştirir; Phoebe ile bağ ise bir çıkış gösterir."],
          sonuc: "Model iskelet: ==*Because Holden cannot openly mourn Allie, he withdraws from others, which shows that…*== Kendi kanıtınla doldur." },
        { tip: "tablo", baslik: "Tema-kanıt matrisi (kendi notların için)", head: ["Tema", "Olası kanıt (kendi cümlenle)", "Bölüm"], rows: [
            ["*Phoniness*", "Ch 2'deki tanım; Mrs Morrow'a yalan; cenazelerdeki tavırlar", "Ch 2, 8, 20"],
            ["*Alienation*", "Yarım kalan telefon ve konuşmalar; sağır-dilsiz olma isteği", "Ch 10–20, 25"],
            ["*Innocence*", "Şarkı, çavdar tarlası hayali, duvar yazısını silme, atlıkarınca", "Ch 16, 22, 25"],
            ["*Loss and grief*", "Allie'nin eldiveni; Ch 26 kapanışı", "Ch 5, 26"],
            ["*Language* ve *euphemism*", "Ch 7'deki örtmece; kaba yazılara tepki; sahte isimler", "Ch 7, 13, 25"],
            ["*Paradox*", "Hem olgun hem çocuksu; fantezi ile gerçeklik", "Ch 2, 22"]
          ], not: "Bölüm numaralarını kendi baskındaki kontrol listesiyle doğrula." },
        { tip: "liste", baslik: "Bütün kitap tartışma soruları: cevaplarını kendin yaz", maddeler: [
            { ikon: "1️⃣", baslik: "Anlatıcı", metin: "Is Holden a reliable narrator? Support your view with two scenes." },
            { ikon: "2️⃣", baslik: "Phoniness", metin: "How does Holden define phony, and where is he himself phony?" },
            { ikon: "3️⃣", baslik: "Ördekler", metin: "What does the question about the ducks reveal about Holden's state of mind?" },
            { ikon: "4️⃣", baslik: "Phoebe", metin: "How does Phoebe challenge Holden's picture of the world?" },
            { ikon: "5️⃣", baslik: "Catcher", metin: "How do the catcher fantasy and the carousel scene change our view of protecting children?" },
            { ikon: "6️⃣", baslik: "Son", metin: "How has Holden's attitude changed by the final chapter?" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Konu tek kelimedir (*topic*); tema bir yargı cümlesidir (*theme statement*).",
            "*Phoniness* ve *hypocrisy*: Holden'ın sahtelik suçlaması ironiktir; o da rol yapar.",
            "*Alienation*: bağ kurma denemeleri yarım kalır; Phoebe ile bağ hafifletir.",
            "*Innocence*: Holden çocukları korumak ister (Ch 22); roman büyümenin kaçınılmaz olduğunu gösterir (Ch 25).",
            "*Loss and grief*: Allie'nin ölümü dolaylı biçimde görünür; tanı koyma, davranışa dayan.",
            "*Euphemism* ve dile duyarlılık: sözcükler Holden için ahlak sorusudur; kendi dili de sert olduğu için ironi vardır.",
            "Holden *paradoxical*: hem olgun hem çocuksu; temalar birbirine bağlıdır.",
            "Her tema cümlesini bir olay ve kısa bir kanıtla (bölüm numarasıyla) destekle; *The novel suggests that…* ile başla."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which of the following is a theme statement?",
      opts: ["Innocence", "The novel is about a boy named Holden.", "The novel suggests that innocence cannot be preserved by preventing every fall.", "Allie and Phoebe"],
      a: 2, why: "Tema cümlesi roman hakkında bir yargı kurar. A ve D yalnızca konu ya da isim; B ise olay özetidir, yargı içermez." },
    { q: "Holden tries to rub out an obscene message on the wall of Phoebe's school, then realizes he cannot erase all of them. Which theme does this scene best support?",
      opts: ["Innocence can be fully protected.", "There is a limit to protecting innocence; the outside world of growing up cannot be stopped.", "Holden hates school.", "Phoebe breaks the rules."],
      a: 1, why: "Silme çabası ve fark ediş, masumiyeti koruma isteğinin sınırlarını gösterir. A sonucu tersine çeviriyor; C ve D sahnenin temasından uzaklaşıyor." },
    { q: "In the chart of Holden's attempts to connect, the bars for Phoebe and the carousel are the highest. What can be concluded from this pattern?",
      opts: ["Holden gets along well with everyone.", "Holden can connect only with adults.", "Holden never connects with anyone.", "Holden's alienation eases with someone he trusts, such as Phoebe."],
      a: 3, why: "Phoebe ve atlıkarınca çubukları en yüksek; bağ güvenli bir ilişkide güçleniyor. A ve B çubuk örüntüsüne aykırı; C ise Phoebe ile bağı yok sayıyor. Grafik bir yorumdur." },
    { q: "Holden calls a character a phony but lies in the same scene. Which concept best describes this?",
      opts: ["Irony: Holden does what he condemns, and the reader notices.", "Foil", "There is no irony here.", "Static character"],
      a: 0, why: "Eleştirdiği davranışı kendisi de yapıyor ve okur bunu fark ediyor: ironi. B karakter türünü, D ise değişmeyen karakteri anlatır; ikisi de bu durumu açıklamaz." },
    { q: "A student writes: \"Holden's grief is expressed indirectly through his anger and his attachment to Allie's glove.\" What is the best evaluation?",
      opts: ["Incorrect: Holden never grieves.", "Correct: Holden talks about his grief directly.", "Correct: grief is shown indirectly through behavior and objects, and the sentence does not diagnose him.", "Incorrect: the glove never appears in the novel."],
      a: 2, why: "Cümle yası davranış ve nesneyle bağlıyor, tanı koymuyor ve metne dayanıyor. A kaybı yok sayıyor; B yasın dolaylı anlatıldığını göz ardı ediyor; D ise romanla çelişiyor." }
  ]
};
