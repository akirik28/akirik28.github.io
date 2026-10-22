/* Kitora not defteri · py204 · 2.4 Belleğe Kodlama
   Kaynak: AP Psychology CED 2024, Topic 2.4 (2.4.A.1–5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py204",
  amac: "Bu konu bilginin belleğe nasıl girdiğini, yani kodlamayı anlatıyor. Daha iyi kodlamanın yollarını öğreneceksin: derin işleme, anımsatıcılar, gruplama, aralıklı çalışma ve listedeki sıranın hatırlamayı nasıl etkilediği.",
  bolumler: [
    {
      baslik: "Kodlama: bilgiyi belleğe sokmak",
      kisa: "Bilginin nasıl kodlandığı, ne kadar iyi saklanıp hatırlanacağını belirler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📥", terim: "Encoding", tr: "kodlama", tanim: "Bilgiyi belleğe sokmak için kullanılan süreç ve stratejiler. ==Nasıl kodladığın, sonra ne kadar iyi saklayıp hatırlayacağını belirler.==", ornek: "Bir şarkının sözlerini dinleyip sözlerini anlamaya çalışmak." },
            { ikon: "🧠", terim: "Deep processing", tr: "derin işleme", tanim: "Bilgiyi anlamıyla ilişkilendirerek kodlamak. Yüzeysel tekrardan daha kalıcıdır.", ornek: "Formülü ezberlemek yerine \"neden böyle?\" diye sormak." }
          ] },
        { tip: "ikili", sol: { ikon: "🤖", baslik: "*Automatic processing*", maddeler: ["Çaba harcamadan, kendiliğinden", "Örnek: nerede oturduğunu, ne yediğini hatırlamak"] },
          sag: { ikon: "💪", baslik: "*Effortful processing*", maddeler: ["Dikkat ve çaba ister", "Örnek: ders notlarını öğrenmek"] },
          oyun: [
            { metin: "Dün öğle yemeğinde neye benzer bir masada oturduğunu hatırlıyorsun.", cevap: "sol", neden: "Çaba harcamadan kodlandı: otomatik." },
            { metin: "Tarih sınavı için sene ve olayları tekrar tekrar çalışıyorsun.", cevap: "sag", neden: "Bilinçli çaba gerekiyor: *effortful*." },
            { metin: "Bir şarkıyı dinledikçe nakaratını kendiliğinden ezberlemişsin.", cevap: "sol", neden: "Bilinçli çaba olmadan öğrenildi: otomatik." },
            { metin: "Yeni bir dilin kelimelerini kartlarla çalışıyorsun.", cevap: "sag", neden: "Dikkat ve çaba şart: *effortful*." }
          ] },
        { tip: "tuzak", metin: "Çok tekrar etmek her zaman iyi kodlama demek değildir.", yanlis: "Aynı notu defalarca gözden geçirmek derin kodlamadır.", dogru: "==Anlam kurmak== derin kodlamadır. Sadece tekrar etmek yüzeysel kalabilir." }
      ]
    },
    {
      baslik: "Anımsatıcılar (*mnemonics*)",
      kisa: "Anımsatıcılar bilgiyi hatırlanması kolay bir yapıya bağlayıp kodlamayı güçlendirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧷", terim: "Mnemonic devices", tr: "anımsatıcılar", tanim: "Bilgiyi çalışma ve uzun süreli belleğe kodlamaya yardım eden zihinsel hileler.", ornek: "Gökkuşağı renklerini sıralatan bir cümle." },
            { ikon: "🏠", terim: "Method of loci", tr: "yer yöntemi", tanim: "Bilgiyi tanıdığın bir mekânın sıralı noktalarına yerleştirip sonra o mekânda zihinden gezmek.", ornek: "Evinin kapısı, koridoru, mutfağı sırayla listedeki ögelerin yeri olur." },
            { ikon: "🔤", terim: "Acronym", tr: "baş harf kısaltması", tanim: "Bir listenin baş harflerinden anlamlı bir kelime kurmak.", ornek: "Alışveriş listesinin baş harflerinden akılda kalan bir kelime üretmek." },
            { ikon: "🎵", terim: "Rhyme / song", tr: "kafiye ya da şarkı", tanim: "Bilgiyi kafiye ve ezgiyle bağlayarak hatırlamayı kolaylaştırmak.", ornek: "Alfabeyi şarkıyla öğrenmek." }
          ] },
        { tip: "adimlar", baslik: "Yer yöntemi: alışveriş listesi", adimlar: [
            { baslik: "Mekânı seç", metin: "Evinin kapıdan başlayan yolunu belirle: kapı, koridor, mutfak, balkon." },
            { baslik: "Yerleştir", metin: "Kapıya ekmeği, koridora sütü, mutfağa yumurtayı, balkona elmayı \"koy\"." },
            { baslik: "Gez", metin: "Market yolunda zihninden evini aynı sırayla dolaş; her yerde bir şey seni bekler." }
          ] },
        { tip: "tuzak", metin: "Anımsatıcılar bilgi öğrenmeyi sadece kolaylaştırır; hangi belleği desteklediğine dikkat et.", yanlis: "Anımsatıcılar yalnızca kısa süreli belleğe yardım eder.", dogru: "Hem ==çalışma belleğine== hem ==uzun süreli belleğe== kodlamayı destekler." }
      ]
    },
    {
      baslik: "Gruplama: *chunking*, kategori ve hiyerarşi",
      kisa: "Bilgiyi anlamlı gruplara ayırmak, hatırlanacak birim sayısını azaltır.",
      bloklar: [
        { tip: "ornek", baslik: "Telefon numarası", durum: "05321234567 numarasını ezberlemen gerekiyor. 11 ayrı rakam mı, yoksa gruplar mı?",
          adimlar: ["Ayrı ayrı: 0-5-3-2-1-2-3-4-5-6-7 = 11 birim.", "Gruplayarak: 0532 – 123 – 45 – 67 = 4 birim.", "Her grup bir \"chunk\"; hatırlaması gereken birim sayısı 11'den 4'e iner."],
          sonuc: "Gruplama, aynı bilgiyi daha az ==anlamlı birim== haline getirir. Belleğin tutabileceği birim sayısı sınırlı olduğu için bu çok işe yarar." },
        { tip: "harita", merkez: "Hiyerarşi örneği: notlarını konulara ayır", dallar: [
            { baslik: "Algı", alt: "Gestalt, derinlik, dikkat" },
            { baslik: "Düşünme", alt: "Şema, sezgisel, yaratıcılık" },
            { baslik: "Bellek", alt: "Kodlama, depolama, geri getirme" },
            { baslik: "Zekâ", alt: "Kuramlar, testler, Flynn etkisi" }
          ] },
        { tip: "tuzak", metin: "Gruplama bellek kapasitesini büyütmez; her birimin içine daha fazla bilgi koyar.", yanlis: "*Chunking*, belleğin tutabileceği birim sayısını artırır.", dogru: "Birim sayısı yaklaşık aynı kalır; ==her birim daha fazla bilgi taşır==." }
      ]
    },
    {
      baslik: "Aralıklı çalışma: *spacing effect*",
      kisa: "Çalışmayı zamana yaymak, tek seferde yığmaktan daha kalıcı öğrenme sağlar.",
      bloklar: [
        { tip: "tablo", baslik: "Aynı 4 saat, iki farklı plan", head: ["Plan", "Nasıl?", "Adı"], rows: [["A", "Sınavdan önceki gece 4 saat", "*Massed practice* (yığma)"], ["B", "4 gün boyunca günde 1 saat", "*Distributed practice* (yayma)"]], not: "Toplam çalışma süresi aynı; fark zamanlamada. Yayma, *spacing effect* sayesinde daha kalıcıdır." },
        { tip: "grafik", baslik: "Zaman geçtikçe iki plan nasıl ayrışır?", xlabel: "Çalıştıktan sonra geçen gün", ylabel: "Hatırlanan (göreli)", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 4, label: "4" }, { v: 7, label: "7" }, { v: 10, label: "10" }],
          yticks: [{ v: 2, label: "az" }, { v: 8, label: "çok" }],
          ogeler: [
            { id: "m", tip: "egri", renk: 1, kesik: true, etiket: "Yığma", noktalar: [[0, 8.5], [1, 5.2], [2, 3.8], [4, 2.7], [7, 2], [10, 1.6]], gizli: true },
            { id: "d", tip: "egri", renk: 0, etiket: "Yayma", noktalar: [[0, 7.5], [1, 6.4], [2, 5.6], [4, 4.8], [7, 4.2], [10, 3.8]], gizli: true },
            { id: "yz", tip: "yazi", x: 7, y: 6.8, metin: "Fark zamanla büyür", gizli: true }
          ],
          durumlar: [
            { metin: "Tek gecede yığma: sınav ertesi çok çabuk unutulur.", goster: ["m"] },
            { metin: "Yayma: başlangıçta biraz düşük görünse de unutma çok daha yavaştır.", goster: ["d"] },
            { metin: "Zaman uzadıkça aradaki ==fark büyür==; kalıcı öğrenme için tekrar aralıklara yayılmalı.", goster: ["yz"] }
          ] },
        { tip: "tuzak", metin: "Maraton çalışma, sınav sabahı kendini iyi hissettirebilir; kalıcılık başka bir şey.", yanlis: "Aynı süre çalıştıktan sonra yığma ile yayma arasında uzun vadede fark yoktur.", dogru: "Aynı toplam sürede ==yayılmış çalışma== uzun vadede belirgin biçimde daha iyi bellek sağlar." }
      ]
    },
    {
      baslik: "Seri konum etkisi: baş ve son akılda kalır",
      kisa: "Listenin başındaki ve sonundaki öğeler, ortadakilerden daha iyi hatırlanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥇", terim: "Primacy effect", tr: "ilk olma etkisi", tanim: "Listenin başındaki öğelerin iyi hatırlanması. Başlardakiler daha çok tekrar edilip uzun süreli belleğe geçer.", ornek: "10 kelimelik listede ilk üç kelime." },
            { ikon: "🏁", terim: "Recency effect", tr: "son olma etkisi", tanim: "Listenin sonundaki öğelerin iyi hatırlanması. Son okunanlar hâlâ kısa süreli bellekte durur.", ornek: "Listede en son duyduğun üç kelime." }
          ] },
        { tip: "grafik", baslik: "Seri konum eğrisi", xlabel: "Listedeki sıra", ylabel: "Hatırlanma (göreli)", xmax: 11, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }, { v: 7, label: "7" }, { v: 10, label: "10" }],
          yticks: [{ v: 2, label: "az" }, { v: 8, label: "çok" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, noktalar: [[1, 8.3], [2, 6.8], [3, 5.4], [4, 4.3], [5, 3.6], [6, 3.4], [7, 3.7], [8, 4.8], [9, 6.8], [10, 8.8]], gizli: true },
            { id: "p", tip: "alan", renk: 2, noktalar: [[0.6, 0], [2.4, 0], [2.4, 9.5], [0.6, 9.5]], gizli: true },
            { id: "pt", tip: "yazi", x: 1.5, y: 9.8, metin: "primacy", gizli: true },
            { id: "r", tip: "alan", renk: 3, noktalar: [[8.6, 0], [10.4, 0], [10.4, 9.5], [8.6, 9.5]], gizli: true },
            { id: "rt", tip: "yazi", x: 9.5, y: 9.9, metin: "recency", gizli: true },
            { id: "o", tip: "yazi", x: 5.5, y: 2.2, metin: "ortası zayıf", gizli: true }
          ],
          durumlar: [
            { metin: "10 öğelik bir listeyi dinleyen kişilerin hatırlama oranı U biçimli bir eğri verir.", goster: ["e"] },
            { metin: "Baştakiler iyi hatırlanır: ==*primacy effect*==.", goster: ["p", "pt"] },
            { metin: "Sondakiler iyi hatırlanır: ==*recency effect*==.", goster: ["r", "rt"] },
            { metin: "Ortadakiler en zayıf hatırlanır; hem tekrar için az vakit hem de ardından gelen bilginin müdahalesi var.", goster: ["o"] }
          ] },
        { tip: "tuzak", metin: "İsimleri doğru eşleştirmek sınavda kolay puan getirir.", yanlis: "*Recency effect*, listenin başındaki öğelerin daha iyi hatırlanmasıdır.", dogru: "==Başlar *primacy*==, ==sonlar *recency*==. Ortadakiler en az hatırlanır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kodlama, bilgiyi belleğe sokmaktır; nasıl kodlandığı saklamayı ve hatırlamayı etkiler.",
            "Derin (anlam odaklı) işleme, yüzeysel tekrardan daha kalıcıdır.",
            "Anımsatıcılar (*method of loci* gibi) çalışma ve uzun süreli belleğe kodlamayı güçlendirir.",
            "*Chunking*, kategoriler ve hiyerarşiler bilgiyi anlamlı gruplara böler; birim sayısı aynı, içerik daha çok.",
            "*Spacing effect*: yayılmış çalışma (*distributed*) yığma çalışmadan (*massed*) daha kalıcıdır.",
            "*Serial position effect*: baştakiler (*primacy*) ve sondakiler (*recency*) daha iyi hatırlanır, ortadakiler zayıf."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Burak, sunum konularını ezberlemek için evinin kapısını, koridorunu ve mutfağını sırayla hayal edip her yere bir konu \"yerleştiriyor\". Sunumda bu yerleri zihninden dolaşarak konuları hatırlıyor. Bu strateji hangisidir?",
      opts: ["*Chunking*", "*Method of loci*", "*Massed practice*", "*Primacy effect*"],
      a: 1,
      why: "Bilgiyi tanıdık bir mekânın sıralı noktalarına bağlamak *method of loci*'dir; bir anımsatıcıdır. En çekici yanlış şık A: *chunking* bilgiyi anlamlı gruplara ayırmaktır, bir mekâna yerleştirmek değil." },
    { q: "Elif, 05321234567 telefon numarasını tek tek rakamlar yerine \"0532 – 123 – 45 – 67\" diye dört grup halinde öğreniyor. Bu stratejinin adı nedir ve bellek açısından ne sağlar?",
      opts: ["*Massed practice*; bilgiyi tek seferde ezberletir", "*Method of loci*; bilgiyi bir mekâna bağlar", "*Spacing effect*; tekrarı zamana yayar", "*Chunking*; hatırlanacak birim sayısını azaltır"],
      a: 3,
      why: "Rakamları anlamlı gruplara ayırmak *chunking*'dir; 11 ayrı birim yerine 4 birim hatırlanır. En çekici yanlış şık B: bir mekâna yerleştirme yoktur." },
    { q: "İki öğrenci grubu aynı konuyu toplam 4 saat çalıştı. Grup A hepsini sınavdan önceki gece, Grup B ise 4 gün boyunca günde 1 saat çalıştı. Bir hafta sonraki testte Grup B anlamlı biçimde daha başarılı oldu. Bu sonuç hangi bellek ilkesini destekler?",
      opts: ["*Spacing effect*", "*Primacy effect*", "*Mnemonic devices*", "*Chunking*"],
      a: 0,
      why: "Çalışmayı zamana yaymak (*distributed practice*), yığmaya (*massed practice*) göre daha kalıcı bellek sağlar: *spacing effect*. En çekici yanlış şık B: sıra konumu burada değişmiyor, değişen çalışmanın zamanlaması." },
    { q: "Bir araştırmacı katılımcılara 10 kelimelik bir listeyi sırayla okuyup hemen hatırlamalarını istiyor. Sonuçlar grafikte verilmiştir. Listenin hem başındaki hem sonundaki kelimelerin daha iyi hatırlanması neyi gösterir?",
      fig: { type: "bar", cats: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], series: [{ name: "Hatırlayan katılımcı (%)", values: [80, 65, 52, 42, 36, 34, 38, 48, 66, 85] }], ylabel: "Yüzde" },
      opts: ["Yalnızca *recency effect*; baştakilerin hatırlanması tesadüftür", "Yalnızca *primacy effect*; sondakiler zaten kısa süreli bellektedir", "*Primacy* ve *recency effect*; başlar tekrarla uzun süreli belleğe geçer, sonlar hâlâ kısa süreli bellekte durur", "*Spacing effect*; kelimeler zamana yayılarak öğrenilmiştir"],
      a: 2,
      why: "U biçimli eğri *serial position effect*'tir: başlarda *primacy*, sonlarda *recency* görülür. En çekici yanlış şık D: tek bir listeyi bir kez okuyup hemen hatırlamak, aralıklı çalışmayı ölçmez." },
    { q: "Zeynep dün yemekhanede nerede oturduğunu hiç çaba harcamadan hatırlıyor, ama kimya formüllerini öğrenmek için uzun süre çalışmak zorunda kalıyor. Bu iki durum için hangisi doğrudur?",
      opts: ["İkisi de *automatic processing*dir", "Birincisi *automatic*, ikincisi *effortful processing*dir", "Birincisi *effortful*, ikincisi *automatic processing*dir", "İkisi de *effortful processing*dir"],
      a: 1,
      why: "Çabasız kodlanan oturma yeri *automatic*, çaba isteyen formül öğrenimi *effortful processing*'dir. En çekici yanlış şık C: sıra ters çevrilmiş; çaba gerektiren şey ikincisidir." }
  ]
};
