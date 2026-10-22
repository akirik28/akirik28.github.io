/* Kitora not defteri · en304 · 3.4 Temalar
   Kaynak: okul 10. sınıf English Unit 3 (The Catcher in the Rye) + MEB 10. sınıf programı. Blok türleri: /ap/_kit/defter.js başı.
   Telif: romandan en fazla 10 kelimelik, bölüm numaralı kısa alıntılar; gerisi kendi cümlelerimizle. */
window.DEFTER = {
  slug: "en304",
  amac: "Bu konu romanın beş büyük temasını açıklıyor: masumiyet, yabancılaşma, sahtelik, büyüme, kayıp ve yas. Konu ile temanın farkını, her temanın metindeki izlerini ve sınavda tema cümlesinin nasıl kurulacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Konu ve tema farkı",
      kisa: "Konu tek kelimedir; tema, o konu hakkında romanın söylediği cümledir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏷️", baslik: "Konu (*topic*)", maddeler: ["Tek kelime ya da kısa ifade", "Örnek: yas, masumiyet, yalnızlık"] },
          sag: { ikon: "💬", baslik: "Tema cümlesi (*theme statement*)", maddeler: ["Tam bir yargı cümlesi", "Örnek: “Yas, alay ve öfke arkasına saklanabilir.”"] },
          oyun: [
            { metin: "Masumiyet", cevap: "sol", neden: "Tek kelime: konu." },
            { metin: "Çocukları düşmekten korumak mümkün değildir; büyümek riski de içerir.", cevap: "sag", neden: "Roman hakkında bir yargı bildiriyor: tema cümlesi." },
            { metin: "Yabancılaşma", cevap: "sol", neden: "Tek kelime: konu." },
            { metin: "Sahte dünyadan kaçan biri kendi çelişkisini görmek zorunda kalır.", cevap: "sag", neden: "Bir ilişkiyi ve sonucu söylüyor: tema cümlesi." }
          ] },
        { tip: "harita", merkez: "Romanın temaları", dallar: [
            { baslik: "*Innocence*", alt: "Masumiyet ve çocukları koruma arzusu" },
            { baslik: "*Alienation*", alt: "Yabancılaşma ve yalnızlık" },
            { baslik: "*Phoniness*", alt: "Sahtelik ve rol yapma" },
            { baslik: "*Growing up*", alt: "Büyüme ve değişimi kabul" },
            { baslik: "*Loss and grief*", alt: "Kayıp ve yas" }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: tema cümlesi", head: ["Amaç", "Kalıp"], rows: [
            ["Temayı söylemek", "*A central theme of the novel is…*"],
            ["Yargıyı kurmak", "*The novel suggests that…*"],
            ["Yöntemi eklemek", "*Through…, Salinger explores the theme of…*"]
          ], not: "“Theme: innocence” yetmez. Tek kelime değil, tam cümle yaz: *The novel suggests that innocence cannot be protected forever.*" }
      ]
    },
    {
      baslik: "Masumiyet ve büyüme",
      kisa: "Holden çocukluğu korumak ister; roman büyümenin kaçınılmaz olduğunu gösterir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌱", terim: "Innocence", tr: "masumiyet", tanim: "Çocukluğa ait saflık, dürüstlük ve dünyanın sert yüzünü henüz görmemiş olmak. Holden bunu en çok Phoebe'de ve Allie'nin anısında görür.", ornek: "Phoebe'nin açık sözlü, kandırmasız hâli." },
            { ikon: "🧭", terim: "Experience", tr: "deneyim, yetişkinlik tecrübesi", tanim: "Masumiyetin karşıtı: kaybı, çıkarı ve sahteliği tanımak. Holden bunun çekim alanında kalmaktan korkar.", ornek: "Yetişkinlerin yalanlarını fark etmesi." },
            { ikon: "🚸", terim: "Coming-of-age", tr: "büyüme hikâyesi", tanim: "Bir gencin çocukluktan yetişkinliğe geçerken yaşadığı iç değişim. Holden bu geçişe direnir.", ornek: "Bırakmayı öğrendiği atlıkarınca sahnesi." }
          ] },
        { tip: "adimlar", baslik: "Holden'ın masumiyet yolculuğu", adimlar: [
            { baslik: "Hayal (Ch 22)", metin: "Çavdar tarlasında kenardaki çocukları düşmekten korumak ister." },
            { baslik: "Silme çabası (Ch 25)", metin: "Phoebe'nin okulunda duvardaki kaba yazıyı silmeye çalışır; sonra bunların hepsini silemeyeceğini fark eder." },
            { baslik: "Kabullenme (Ch 25)", metin: "Phoebe'nin atlıkarıncada altın halkaya uzanmasını izler; ona engel olmaz ve bir mutluluk hisseder." }
          ] },
        { tip: "tuzak", baslik: "Roman “büyümeyi” nasıl ele alır?", metin: "Holden büyümeye direnir, ama romanın sonu düz bir “büyüdü” ya da “büyümedi” demez. Bir kabullenme işareti vardır, yine de belirsizlik sürer.", yanlis: "Roman Holden'ın hiç değişmediğini anlatır.", dogru: "Roman Holden'ın direncini ve sonda küçük bir kabullenme belirtisini gösterir; sonuç açık uçludur." },
        { tip: "tablo", baslik: "Sınavda böyle yaz: masumiyet", head: ["Amaç", "Kalıp"], rows: [
            ["Çatışma", "*Holden's desire to protect innocence is challenged when…*"],
            ["Sonuç", "*By accepting Phoebe's risk, Holden begins to…*"]
          ] }
      ]
    },
    {
      baslik: "Yabancılaşma ve yalnızlık",
      kisa: "Holden insanlara yaklaşmak ister, ama çoğu denemede biraz daha uzaklaşır.",
      bloklar: [
        { tip: "grafik", baslik: "Bağ kurma denemeleri (bir yorum)", xlabel: "Karşılaşmalar", ylabel: "Bağ", xmax: 8, ymax: 6,
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
            { metin: "Pencey'de ==Mr. Spencer== ve ==Ackley== ile konuşur; ama ikisinde de gerçek bir yakınlık kurulmaz.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 2], [0.65, 2]] }, b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 1], [1.65, 1]] } } },
            { metin: "New York'ta ==Sunny== ile yalnızca konuşmak ister; ama bu da çabuk dağılır.", set: { b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 2], [2.65, 2]] } } },
            { metin: "Pazar günü ==Sally== ve ==Carl Luce== ile denemeler daha da kötü biter.", set: { b4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 1], [3.65, 1]] }, b5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 1], [4.65, 1]] } } },
            { metin: "==Phoebe== ile konuşma, kitaptaki en güçlü bağlardan biridir.", set: { b6: { noktalar: [[5.65, 0], [6.35, 0], [6.35, 4], [5.65, 4]] } } },
            { metin: "==Atlıkarınca== sahnesinde Holden, uzun süredir ilk kez rahat ve mutlu görünür. Bu çubuklar bir yorumdur; yine de örüntü açıktır: ==yabancılaşma, Phoebe ile hafifler.==", set: { b7: { noktalar: [[6.65, 0], [7.35, 0], [7.35, 5], [6.65, 5]] } } }
          ] },
        { tip: "liste", baslik: "Yabancılaşma nasıl görünür?", maddeler: [
            { ikon: "🧊", baslik: "Etiket", metin: "İnsanları hızla *phony* sayarak onlardan uzak durur." },
            { ikon: "📞", baslik: "Yarım kalan temas", metin: "Jane'i aramak ister, ama bir türlü arayamaz." },
            { ikon: "🧢", baslik: "Kalkan", metin: "Alay, abartı ve kırmızı şapka, onu başkalarından ayıran bir tür siperdir." }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: yabancılaşma", head: ["Amaç", "Kalıp"], rows: [
            ["Örüntü", "*Holden's repeated failed attempts to connect emphasize his isolation.*"],
            ["Karşıtlık", "*In contrast, his conversation with Phoebe shows that…*"]
          ] }
      ]
    },
    {
      baslik: "Sahtelik (*phoniness*)",
      kisa: "Holden sahte bulduğu insanlara kızar; kendi çelişkilerini de gösterir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎭", terim: "Phoniness", tr: "sahtelik", tanim: "İnsanların rol yapması, gösteriş yapması, çıkarı için içten görünmesi. Holden bu kelimeyi sık sık kullanır.", ornek: "Ünlü olmak için gösteri yapan biri." },
            { ikon: "🔁", terim: "Irony", tr: "ironi", tanim: "Söylenenle gerçekte olanın zıt çıkması.", ornek: "Holden sahteliği eleştirirken kendisi de yalan söyler." }
          ] },
        { tip: "ikili", sol: { ikon: "🎭", baslik: "Holden'a göre *phony*", maddeler: ["Gösterişli, rol yapan, çıkarcı", "Etkilemeye çalışır"] },
          sag: { ikon: "🌟", baslik: "Holden'a göre *genuine*", maddeler: ["İçten, abartısız, çocuksu", "Karşılık beklemeden davranır"] },
          oyun: [
            { metin: "Gösterişli bir kulüpte alkışın içten değil, gösteriş olduğunu düşünür.", cevap: "sol", neden: "Holden için sahtelik göstermelik alkışla başlar." },
            { metin: "Phoebe, kendini savunmasız bırakmadan dürüstçe konuşur.", cevap: "sag", neden: "Phoebe içtendir." },
            { metin: "Sandviç dükkânında sohbet ettiği rahibeler gösterişsiz ve nazik davranır.", cevap: "sag", neden: "Holden onları içten bulur." },
            { metin: "Karşısındakini etkilemek için sesini ve tavrını değiştiren biri.", cevap: "sol", neden: "Rol yapmak: sahtelik." }
          ] },
        { tip: "tuzak", baslik: "Holden da sahte olabilir", metin: "Holden başkalarını eleştirirken kendisi de yalan söyler ve rol yapar. Bu ironi, romanın temalarından biridir.", yanlis: "Holden sahte değildir; yalnızca başkaları sahtedir.", dogru: "Holden'ın sahtelik suçlaması *ironic*: kendisi de aynı davranışı sergiler, bu da yetişkinlikten korkusunu gösterir." },
        { tip: "tablo", baslik: "Sınavda böyle yaz: sahtelik", head: ["Amaç", "Kalıp"], rows: [
            ["İroni", "*Holden's accusation of phoniness is ironic because he himself…*"],
            ["Yorum", "*This suggests that his criticism reflects his fear of becoming an adult.*"]
          ] }
      ]
    },
    {
      baslik: "Kayıp ve yas",
      kisa: "Allie'nin ölümü, Holden'ın öfkesinin ve kaçışının ardındaki yaradır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🕯️", terim: "Grief", tr: "yas", tanim: "Bir kaybın ardından yaşanan derin üzüntü. Herkes yası farklı yaşar; öfke ve içe kapanma da yas tepkisi olabilir.", ornek: "Holden'ın acısı kitapta açıkça adlandırılmaz; davranışlarından anlaşılır." },
            { ikon: "🪖", terim: "Coping mechanism", tr: "başa çıkma yolu", tanim: "Zor duyguları yönetmek için gösterilen davranış ve tavır. Holden'da bu alay, kaçış ve etiketleme olarak görünür.", ornek: "Her şeyi sahte ilan etmek." }
          ] },
        { tip: "liste", baslik: "Yasın metindeki izleri", maddeler: [
            { ikon: "🧤", baslik: "Allie'nin eldiveni", metin: "Kompozisyonunun konusu olur (Ch 5); Allie'nin anısını yaşatır." },
            { ikon: "🪟", baslik: "Öfke", metin: "Allie öldüğü gece öfkesini garajın camlarına yönelttiği anlatılır (Ch 5)." },
            { ikon: "💭", baslik: "Düşünceler", metin: "Parkta soğukta ölümü ve Phoebe'nin tepkisini düşünür (Ch 20)." },
            { ikon: "🌧️", baslik: "Özlem", metin: "Hikâyeyi bitirirken anlattığı herkesi özlediğini söyler (Ch 26: “you start missing everybody”)." }
          ] },
        { tip: "tuzak", baslik: "Yas bir tanı değildir", metin: "Holden'ın yası, edebi çözümlemede karakterin duygularını anlamak içindir; kitap ona bir tanı koymaz. Sınavda tanı yazma; metindeki davranışı ve etkisini anlat.", yanlis: "Holden'ın bir ruh sağlığı sorunu vardır ve bu kesindir.", dogru: "Metin, yasın ve yalnızlığın davranışına yansıdığını gösterir; bir tanı koymaz. Yaz: *Holden's grief is expressed indirectly through…*" },
        { tip: "tablo", baslik: "Sınavda böyle yaz: yas", head: ["Amaç", "Kalıp"], rows: [
            ["Dolaylı anlatım", "*Grief is portrayed indirectly through Holden's…*"],
            ["Bağ", "*His attachment to Allie's glove suggests that…*"]
          ] }
      ]
    },
    {
      baslik: "Temalar birbirine nasıl bağlanır?",
      kisa: "Beş tema ayrı değil; yas, masumiyet ve yalnızlık birbirini besler.",
      bloklar: [
        { tip: "ornek", baslik: "İki temayı tek cümlede bağla", durum: "Soru: “How are the themes of grief and alienation connected?” Cevabı üç adımda kur.",
          adimlar: ["1) İki temayı adlandır: *grief* ve *alienation*.", "2) Bağı kur: yası konuşamadığı için Holden insanlardan uzaklaşır.", "3) Kanıt ekle: Allie'nin eldiveni (Ch 5), Phoebe ile konuşma (Ch 22).", "4) Sonucu söyle: yas, yalnızlığı derinleştirir; Phoebe ile bağ ise bir çıkış gösterir."],
          sonuc: "Model iskelet: ==*Because Holden cannot openly mourn Allie, he withdraws from others, which shows that…*== Kendi kanıtınla doldur." },
        { tip: "tablo", baslik: "Tema-kanıt matrisi (kendi notların için)", head: ["Tema", "Olası kanıt (kendi cümlenle)", "Bölüm"], rows: [
            ["*Innocence*", "Çavdar tarlası hayali; duvar yazısını silme çabası", "Ch 22, 25"],
            ["*Alienation*", "Yarım kalan telefon ve konuşmalar", "Ch 10–20"],
            ["*Phoniness*", "Sahte dediği insanların betimlenmesi; kendi yalanları", "Ch 8, 11, 19"],
            ["*Growing up*", "Atlıkarıncada bırakma", "Ch 25"],
            ["*Loss and grief*", "Allie'nin eldiveni; Ch 26 kapanışı", "Ch 5, 26"]
          ], not: "Bölüm numaralarını kendi baskındaki kontrol listesiyle doğrula." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Konu tek kelimedir (*topic*); tema bir yargı cümlesidir (*theme statement*).",
            "*Innocence*: Holden çocukları korumak ister; roman büyümenin kaçınılmaz olduğunu gösterir.",
            "*Alienation*: bağ kurma denemeleri yarım kalır; Phoebe ile bağ hafifletir.",
            "*Phoniness*: Holden'ın sahtelik suçlaması ironiktir; o da rol yapar.",
            "*Loss and grief*: Allie'nin ölümü dolaylı biçimde görünür; tanı koyma, davranışa dayan.",
            "Temalar birbirine bağlıdır: yas yalnızlığı, yalnızlık sahtelik yargısını besler.",
            "Her tema cümlesini bir olay ve kısa bir kanıtla (bölüm numarasıyla) destekle.",
            "Yazarken “theme: X” yerine *The novel suggests that…* ile başla."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi bir tema cümlesidir (*theme statement*)?",
      opts: ["Masumiyet", "The novel is about a boy named Holden.", "The novel suggests that innocence cannot be preserved by preventing every fall.", "Allie ve Phoebe"],
      a: 2, why: "Tema cümlesi roman hakkında bir yargı kurar. A ve D yalnızca konu ya da isim; B ise olay özetidir, yargı içermez." },
    { q: "Holden, Phoebe'nin okulunda duvardaki kaba yazıyı silmeye çalışır, sonra bütün yazıları silemeyeceğini fark eder. Bu sahne hangi temayı en iyi destekler?",
      opts: ["Masumiyeti tamamen koruyabilmek mümkündür.", "Masumiyeti korumanın sınırı vardır; büyümenin dış dünyasını durdurmak mümkün değildir.", "Holden'ın okuldan nefret ettiği.", "Phoebe'nin kural dışı davrandığı."],
      a: 1, why: "Silme çabası ve fark ediş, masumiyeti koruma isteğinin sınırlarını gösterir. A şıkkı sonucu tersine çeviriyor; C ve D şıkları sahnenin temasından uzaklaşıyor." },
    { q: "Bağ kurma denemelerini gösteren grafikte Phoebe ve atlıkarınca çubukları en yüksektir. Bu örüntüden hangi sonuç çıkarılabilir?",
      opts: ["Holden herkesle iyi anlaşır.", "Holden yalnızca yetişkinlerle bağ kurabilir.", "Holden hiç bağ kurmaz.", "Holden'ın yabancılaşması, güvendiği biriyle (Phoebe) hafifliyor."],
      a: 3, why: "Phoebe ve atlıkarınca çubukları en yüksek; bağ güvenli bir ilişkide güçleniyor. A ve B çubuk örüntüsüne aykırı; C şıkkı ise Phoebe ile bağı yok sayıyor. Grafik bir yorumdur." },
    { q: "Holden bir karakteri “sahte” diye eleştirir, ama kendisi de aynı sahnede yalan söyler. Bu, hangi kavramla en iyi açıklanır?",
      opts: ["*Dramatic irony*: okur bunu fark eder.", "*Foil*", "Hiçbir ironi yoktur.", "*Static character*"],
      a: 0, why: "Eleştirdiği davranışı kendisi de yapıyor ve okur bunu fark ediyor: ironi. B karakter türünü, D ise değişmeyen karakteri anlatır; ikisi de bu durumu açıklamaz." },
    { q: "Bir öğrenci “*Holden's grief is expressed indirectly through his anger and his attachment to Allie's glove.*” yazıyor. Bu cümle için en doğru değerlendirme hangisi?",
      opts: ["Yanlış: Holden hiç yas tutmaz.", "Doğru: Holden doğrudan yasını anlatır.", "Doğru: yas, davranış ve nesneler yoluyla dolaylı gösterilir; cümle tanı koymaz.", "Yanlış: eldiven romanda geçmez."],
      a: 2, why: "Cümle yası davranış ve nesneyle bağlıyor, tanı koymuyor ve metne dayanıyor. A şıkkı kaybı yok sayıyor; B şıkkı yasın dolaylı anlatıldığını göz ardı ediyor." }
  ]
};
