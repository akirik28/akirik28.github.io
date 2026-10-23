/* Kitpath not defteri · py206 · 2.6 Bellekten Geri Getirme
   Kaynak: AP Psychology CED 2024, Topic 2.6 (2.6.A.1–3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py206",
  amac: "Bu konu bilginin bellekten nasıl geri çağrıldığını anlatıyor. Hatırlama ile tanıma farkını, bağlam, ruh hali ve fiziksel duruma bağlı belleği, seri konum etkisinin geri getirmedeki izini, kendini sınamanın gücünü ve üstbilişi öğreneceksin.",
  bolumler: [
    {
      baslik: "*Recall* ve *recognition*",
      kisa: "Recall ipucu olmadan hatırlamak, recognition ipucuyla tanımaktır; tanıma genellikle daha kolaydır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✍️", baslik: "*Recall* (hatırlama)", maddeler: ["İpucu olmadan bilgiyi bellekten çıkarmak", "Boş kâğıda yazmak, adı kendi başına söylemek"] },
          sag: { ikon: "☑️", baslik: "*Recognition* (tanıma)", maddeler: ["Bilgiyi ipuçlarıyla (seçenekler) tanımak", "Çoktan seçmeli, fotoğraftan tanımak"] },
          oyun: [
            { metin: "Sınavda boş kâğıda, dersin ana başlıklarını kendin yazıyorsun.", cevap: "sol", neden: "Önünde ipucu yok: *recall*." },
            { metin: "Polis, şüpheliler arasından doğru kişiyi göstermeni istiyor.", cevap: "sag", neden: "Seçenekler birer ipucu: *recognition*." },
            { metin: "Dün izlediğin filmin adını kendi başına hatırlamaya çalışıyorsun.", cevap: "sol", neden: "Hiç ipucu yok: *recall*." },
            { metin: "Çoktan seçmeli sınavda doğru şıkkı görünce \"evet, bu\" diyorsun.", cevap: "sag", neden: "Şıklar *recognition*'ı kolaylaştırır." }
          ] },
        { tip: "grafik", baslik: "Aynı bilgi, iki yoldan geri getirme", xlabel: "Geri getirme türü", ylabel: "Doğru hatırlama (göreli)", xmax: 6, ymax: 10,
          xticks: [{ v: 1.5, label: "Recall" }, { v: 4.5, label: "Recognition" }],
          yticks: [{ v: 2, label: "az" }, { v: 8, label: "çok" }],
          ogeler: [
            { id: "r", tip: "alan", renk: 1, noktalar: [[0.9, 0], [2.1, 0], [2.1, 0], [0.9, 0]] },
            { id: "g", tip: "alan", renk: 0, noktalar: [[3.9, 0], [5.1, 0], [5.1, 0], [3.9, 0]] },
            { id: "rt", tip: "yazi", x: 1.5, y: 4.7, metin: "ipucu yok", gizli: true },
            { id: "gt", tip: "yazi", x: 4.5, y: 8.7, metin: "ipucu var", gizli: true }
          ],
          durumlar: [
            { metin: "Aynı malzeme, aynı kişiler: yalnızca geri getirme biçimi değişiyor." },
            { metin: "==*Recall*==: ipucu yok, çıkarmak zor; doğru oranı düşük.", set: { r: { noktalar: [[0.9, 0], [2.1, 0], [2.1, 4], [0.9, 4]] } }, goster: ["rt"] },
            { metin: "==*Recognition*==: seçenekler ipucu veriyor; doğru oranı genellikle daha yüksek.", set: { g: { noktalar: [[3.9, 0], [5.1, 0], [5.1, 8], [3.9, 8]] } }, goster: ["gt"] }
          ] },
        { tip: "tuzak", metin: "Sınav türü ile geri getirme türünü eşleştirirken dikkat.", yanlis: "Çoktan seçmeli sorular *recall* gerektirir.", dogru: "Seçenekler birer ipucu olduğu için çoktan seçmeli sorular ==*recognition*== gerektirir; boş kâğıda yazmak ise *recall*'dır." }
      ]
    },
    {
      baslik: "Kodlandığı koşullar geri getirmeyi kolaylaştırır",
      kisa: "Hatırlarken kodlandığındaki ortam, ruh hali ya da bedensel durumdaysan bellek yardım alır.",
      bloklar: [
        { tip: "tablo", baslik: "Üç eşleşme türü", head: ["Tür", "Ne eşleşir?", "Örnek"], rows: [
            ["*Context-dependent memory*", "Çevre, mekân", "Sınıfta öğrendiğini aynı sınıfta daha iyi hatırlamak"],
            ["*Mood-congruent memory*", "Ruh hali", "Mutluyken mutlu anıları, üzgünken üzücü anıları daha kolay hatırlamak"],
            ["*State-dependent memory*", "Fiziksel durum", "Kafeinliyken öğrendiğini yine kafeinliyken daha iyi hatırlamak"]
          ], not: "Üçünde de ortak fikir: kodlama anındaki koşullar, geri getirme sırasında güçlü bir ipucu olur." },
        { tip: "grafik", baslik: "Aynı yerde sınav daha kolay", xlabel: "Sınav yeri", ylabel: "Hatırlanan (göreli)", xmax: 6, ymax: 10,
          xticks: [{ v: 1.5, label: "Öğrenilen yer" }, { v: 4.5, label: "Farklı yer" }],
          yticks: [{ v: 2, label: "az" }, { v: 8, label: "çok" }],
          ogeler: [
            { id: "a", tip: "alan", renk: 0, noktalar: [[0.9, 0], [2.1, 0], [2.1, 0], [0.9, 0]] },
            { id: "b", tip: "alan", renk: 1, noktalar: [[3.9, 0], [5.1, 0], [5.1, 0], [3.9, 0]] },
            { id: "at", tip: "yazi", x: 1.5, y: 8.7, metin: "çevre eşleşir", gizli: true },
            { id: "bt", tip: "yazi", x: 4.5, y: 5.7, metin: "ipucu eksik", gizli: true }
          ],
          durumlar: [
            { metin: "Aynı listeyi öğrenen iki grup: biri sınıfta, diğeri sınıf dışında test ediliyor." },
            { metin: "Öğrendiği yerde sınanan grup daha çok hatırlıyor: ==*context-dependent memory*==.", set: { a: { noktalar: [[0.9, 0], [2.1, 0], [2.1, 8], [0.9, 8]] } }, goster: ["at"] },
            { metin: "Farklı bir ortamda sınanan grubun hatırlaması düşüyor; çevre ipucu eksik.", set: { b: { noktalar: [[3.9, 0], [5.1, 0], [5.1, 5], [3.9, 5]] } }, goster: ["bt"] }
          ] },
        { tip: "ikili", sol: { ikon: "🏫", baslik: "*Context-dependent*", maddeler: ["Dış çevre aynı: mekân, koku, ses", "Örnek: aynı oda"] },
          sag: { ikon: "☕", baslik: "*State-dependent*", maddeler: ["İç fiziksel durum aynı: kafein, yorgunluk, açlık", "Örnek: aynı bedensel hal"] },
          oyun: [
            { metin: "Sınavı, dersin yapıldığı sınıfta yazınca notları daha kolay hatırladın.", cevap: "sol", neden: "Mekân eşleşiyor: *context-dependent*." },
            { metin: "Çalışırken kahve içtin; sınavda da kahve içince bilgiler zihnine geldi.", cevap: "sag", neden: "Bedensel durum eşleşiyor: *state-dependent*." },
            { metin: "Tanıdık bir kafede çalıştığın konu, aynı kafeye girince aklına geldi.", cevap: "sol", neden: "Çevre ipucu oluyor: *context-dependent*." },
            { metin: "Çok yorgunken öğrendiklerini yine yorgunken hatırlamak daha kolay oldu.", cevap: "sag", neden: "Fiziksel durum eşleşiyor: *state-dependent*." }
          ] },
        { tip: "tuzak", metin: "\"Durum\" kelimesi yanıltabilir. Bu üçlüyü ayırt etmenin kısa yolu, neyin eşleştiğine bakmaktır.", yanlis: "*State-dependent memory*, ruh hali eşleşmesidir.", dogru: "==Ruh hali== *mood-congruent*, ==bedensel durum== *state-dependent*, ==mekân/çevre== *context-dependent*." }
      ]
    },
    {
      baslik: "Seri konum etkisi geri getirmede",
      kisa: "Kısa bir gecikme, listenin sonundaki avantajı siler; baştaki avantaj büyük ölçüde kalır.",
      bloklar: [
        { tip: "grafik", baslik: "Hemen mi, 30 saniye sonra mı hatırlıyorsun?", xlabel: "Listedeki sıra", ylabel: "Hatırlanma (göreli)", xmax: 11, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 5, label: "5" }, { v: 10, label: "10" }],
          yticks: [{ v: 2, label: "az" }, { v: 8, label: "çok" }],
          ogeler: [
            { id: "h", tip: "egri", renk: 0, etiket: "Hemen", noktalar: [[1, 8.3], [2, 6.8], [3, 5.4], [4, 4.3], [5, 3.6], [6, 3.4], [7, 3.7], [8, 4.8], [9, 6.8], [10, 8.8]], gizli: true },
            { id: "g", tip: "egri", renk: 2, kesik: true, etiket: "30 sn sonra", noktalar: [[1, 8], [2, 6.4], [3, 5], [4, 4.1], [5, 3.5], [6, 3.2], [7, 3.2], [8, 3.3], [9, 3.4], [10, 3.5]], gizli: true },
            { id: "yz", tip: "yazi", x: 8.7, y: 7.2, metin: "recency kaybolur", gizli: true }
          ],
          durumlar: [
            { metin: "Listeyi hemen hatırlayınca hem baş hem son iyi hatırlanır (U biçimli eğri).", goster: ["h"] },
            { metin: "30 saniyelik dikkat dağıtıcı bir görevden sonra: baştakiler hâlâ iyi hatırlanıyor (*primacy* devam eder).", goster: ["g"] },
            { metin: "Sondakilerin avantajı ==kaybolur==; çünkü son öğeler kısa süreli bellekteydi ve bu bellek dikkat dağıtıcı görevle boşaldı.", goster: ["yz"] }
          ] },
        { tip: "tuzak", metin: "Gecikme iki bölgeyi de aynı biçimde etkilemez.", yanlis: "Gecikmeli hatırlamada *primacy* ve *recency* birlikte kaybolur.", dogru: "Kısa gecikme kısa süreli belleği boşaltır: ==*recency* kaybolur==. *Primacy* ise uzun süreli belleğe geçmiş olduğu için büyük ölçüde sürer." }
      ]
    },
    {
      baslik: "Geri getirme pratiği: *testing effect*",
      kisa: "Kendini sınamak, aynı süreyi tekrar okumaya harcamaktan daha kalıcı öğrenme sağlar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔄", terim: "Retrieval practice", tr: "geri getirme pratiği", tanim: "Bilgiyi tekrar okumak yerine bellekten çıkarmaya çalışmak. Başarılı geri getirmeyi kolaylaştırır.", ornek: "Defteri kapatıp bölümü kâğıda yazmaya çalışmak." },
            { ikon: "📝", terim: "Testing effect", tr: "test etkisi", tanim: "Bilgiyi kendi kendini test ederek çalışmanın, aynı süre yeniden okumaktan daha kalıcı öğrenme sağlaması.", ornek: "Kendin için soru yazıp cevaplamak." }
          ] },
        { tip: "grafik", baslik: "Tekrar okumak mı, kendini sınamak mı?", xlabel: "Ne zaman ölçüldü?", ylabel: "Hatırlanan (göreli)", xmax: 7, ymax: 10,
          xticks: [{ v: 1.5, label: "5 dk sonra" }, { v: 5.5, label: "1 hafta sonra" }],
          yticks: [{ v: 2, label: "az" }, { v: 8, label: "çok" }],
          ogeler: [
            { id: "o1", tip: "alan", renk: 1, noktalar: [[0.6, 0], [1.4, 0], [1.4, 0], [0.6, 0]] },
            { id: "s1", tip: "alan", renk: 0, noktalar: [[1.6, 0], [2.4, 0], [2.4, 0], [1.6, 0]] },
            { id: "o2", tip: "alan", renk: 1, noktalar: [[4.6, 0], [5.4, 0], [5.4, 0], [4.6, 0]] },
            { id: "s2", tip: "alan", renk: 0, noktalar: [[5.6, 0], [6.4, 0], [6.4, 0], [5.6, 0]] },
            { id: "l", tip: "yazi", x: 3.5, y: 9.4, metin: "sol: tekrar okuma · sağ: kendini sınama", gizli: true }
          ],
          durumlar: [
            { metin: "İki grup aynı metni çalışıyor: biri tekrar okuyor, diğeri kendini sınıyor.", goster: ["l"] },
            { metin: "Kısa sürede tekrar okuyan hemen hemen aynı ya da biraz önde; fark çok belirgin değil.", set: { o1: { noktalar: [[0.6, 0], [1.4, 0], [1.4, 7.5], [0.6, 7.5]] }, s1: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 6.8], [1.6, 6.8]] } } },
            { metin: "Bir hafta sonra tablo ==tersine döner==: kendini sınayan grup çok daha iyi hatırlıyor.", set: { o2: { noktalar: [[4.6, 0], [5.4, 0], [5.4, 3], [4.6, 3]] }, s2: { noktalar: [[5.6, 0], [6.4, 0], [6.4, 5.5], [5.6, 5.5]] } } }
          ] },
        { tip: "tuzak", metin: "Sınav yalnızca bilgi ölçmek için var sanılır, oysa öğrenmeyi de artırır.", yanlis: "Test, bilgiyi yalnızca ölçer; öğrenmeyi artırmaz.", dogru: "Bellekten çıkarmaya çalışmak ==öğrenmeyi güçlendirir==; bu yüzden kendini sınamak (*testing effect*) tekrar okumaktan etkilidir." }
      ]
    },
    {
      baslik: "*Metacognition*: kendi bilgini değerlendirmek",
      kisa: "Üstbiliş, kendi bilgini değerlendirmen ve çalışmanı ona göre yönlendirmendir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪞", terim: "Metacognition", tr: "üstbiliş", tanim: "Kendi düşünme ve öğrenme süreçlerin hakkında düşünmek: neyi bildiğini, neyi bilmediğini fark edip çalışmanı ayarlamak.", ornek: "\"Bu konu bende tamam, ama şu üniteyi tekrar etmeliyim.\"" }
          ] },
        { tip: "ornek", baslik: "\"Biliyorum\" hissi güvenilir mi?", durum: "Ders notunu iki kez okudun ve \"hepsini biliyorum\" dedin (10 üzerinden 9 tahmin ettin). Defteri kapatıp 10 soruya yazılı cevap verince 4 doğru çıktı.",
          adimlar: ["Tahminin 9, gerçek 4: arada 5 puanlık bir fark var.", "Hangi sorularda zorlandığına bakıp konuları ayır.", "Zayıf konularda kendini yeniden sına."],
          sonuc: "Okuduğun şeyin tanıdık gelmesi \"biliyorum\" hissi verir ama bu ==*recognition*== hissidir. Doğru yol: kendini sınayıp (*retrieval practice*) neyi gerçekten bildiğini görmek, yani ==*metacognition*== kullanmak." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Recall* ipucu olmadan; *recognition* ipucuyla geri getirmedir. Tanıma genellikle daha kolaydır.",
            "*Context-dependent*: aynı çevre. *Mood-congruent*: aynı ruh hali. *State-dependent*: aynı fiziksel durum.",
            "Kısa gecikme *recency*'yi siler, *primacy* büyük ölçüde sürer.",
            "*Retrieval practice* ve *testing effect*: kendini sınamak, tekrar okumaktan daha kalıcıdır.",
            "*Metacognition*: neyi bildiğini ve bilmediğini fark edip çalışmayı buna göre planlamak."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Elif tarih sınavında konuyu boş bir kâğıda kendi sözcükleriyle yazıyor; Kerem ise çoktan seçmeli bir sınavda doğru şıkkı işaretliyor. Aşağıdakilerden hangisi doğrudur?",
      opts: ["Elif *recognition*, Kerem *recall* kullanıyor", "Elif *recall*, Kerem *recognition* kullanıyor; Kerem'in görevi genellikle daha kolaydır", "İkisi de *recall* kullanıyor", "İkisi de *recognition* kullanıyor"],
      a: 1,
      why: "İpucusuz yazmak *recall*, seçenekler arasından seçmek *recognition*'dır. En çekici yanlış şık A: yöntemler ters eşleştirilmiş; seçenekler zaten ipucu olduğu için çoktan seçmeli *recognition* gerektirir." },
    { q: "Bir araştırmacı katılımcılara 10 kelimelik bir liste okutuyor. Bir grup hemen hatırlama testine, diğer grup 30 saniyelik bir bölme görevinden sonra teste alınıyor. Grafikte sonuçlar verilmiştir. Gecikmeli gruptaki değişimi en iyi hangisi açıklar?",
      fig: { type: "bar", cats: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], series: [{ name: "Hemen (%)", values: [83, 68, 54, 43, 36, 34, 37, 48, 68, 88] }, { name: "30 sn sonra (%)", values: [80, 64, 50, 41, 35, 32, 32, 33, 34, 35] }], ylabel: "Yüzde" },
      opts: ["*Primacy* kayboldu; çünkü ilk öğeler kısa süreli bellekteydi", "Hem *primacy* hem *recency* aynı ölçüde arttı", "*Recency* ve *primacy* tesadüfen değişti", "*Recency* kayboldu; çünkü son öğeler kısa süreli bellekteydi ve bölme görevi onu boşalttı"],
      a: 3,
      why: "Son öğelerdeki avantaj kayboldu, baştakiler büyük ölçüde sürdü: kısa süreli bellekteki son öğeler dikkat dağıtıcı görevle silinirken, baştakiler uzun süreli belleğe geçmişti. En çekici yanlış şık A: ters yönlü açıklama; kaybolan başlar değil sonlardır." },
    { q: "Kemal, bir kelime listesini kahve içerek öğreniyor. Testte kahve içtiği gruptaki katılımcılar, kahve içmeyenlere göre daha çok kelime hatırlıyor. Bu sonuç en iyi hangi kavramla açıklanır?",
      opts: ["*State-dependent memory*", "*Context-dependent memory*", "*Mood-congruent memory*", "*Serial position effect*"],
      a: 0,
      why: "Kodlama ve geri getirmede aynı fiziksel durumda (kafein) olmak *state-dependent memory*'dir. En çekici yanlış şık B: *context-dependent* mekân ya da çevre eşleşmesidir; burada çevre değil bedensel durum eşleşiyor." },
    { q: "İki grup öğrenci aynı metni çalışıyor. Grup A metni üç kez okuyor; Grup B bir kez okuyup ardından konuyu kâğıda yazarak kendini sınıyor. Bir hafta sonraki testte Grup B anlamlı biçimde daha başarılı oluyor. Bu sonuç hangi kavramı destekler?",
      opts: ["*Mood-congruent memory*", "*Maintenance rehearsal*", "*Testing effect*", "*Context-dependent memory*"],
      a: 2,
      why: "Bilgiyi bellekten çıkarmaya çalışmak, aynı süre tekrar okumaktan daha kalıcı öğrenme sağlar: *testing effect*. En çekici yanlış şık B: *maintenance rehearsal* Grup A'nın yaptığı salt tekrara benzer; ama Grup B'yi daha başarılı yapan şey bu değil." },
    { q: "Ayla bir sınavdan sonra kendini çok üzgün hissediyor ve o gün geçmişte yaşadığı üzücü olayları normalden çok daha kolay hatırlıyor. Bu durum en iyi hangi kavramla açıklanır?",
      opts: ["*State-dependent memory*", "*Mood-congruent memory*", "*Context-dependent memory*", "*Metacognition*"],
      a: 1,
      why: "Mevcut ruh haliyle uyumlu anıların daha kolay çağrılması *mood-congruent memory*'dir. En çekici yanlış şık A: *state-dependent* ruh haline değil, kafein, yorgunluk gibi fiziksel duruma bağlıdır." }
  ]
};
