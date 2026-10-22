/* Kitora not defteri · ep02 · Konum
   Kaynak: ap-videolar/src/episodes/ep02 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep02",
  amac: "Bu konu bir yerin konumunun iki yolla anlatıldığını gösteriyor: koordinatla ve başka yerlere göre. Enlem ile boylamı, boylamdan saat hesabını, tarih çizgisini ve *site* ile *situation* farkını öğreneceksin.",
  bolumler: [
    {
      baslik: "*Absolute* ve *relative location*",
      kisa: "Koordinat kesin adrestir; başka yerlere göre tarif göreli konumdur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎯", baslik: "*Absolute location* (mutlak konum)", maddeler: ["Dünya üzerindeki kesin adres: enlem ve boylam", "Hiç değişmez. Örnek: İstanbul 41° K, 29° D"] },
          sag: { ikon: "🧭", baslik: "*Relative location* (göreli konum)", maddeler: ["Bir yeri başka yerlere göre tarif eder", "Zamanla değişebilir. Örnek: \"okulun karşısındaki kafe\""] },
          oyun: [
            { metin: "\"Okulun karşısındaki kafedeyim.\"", cevap: "sag", neden: "Başka bir yere göre tarif: *relative*." },
            { metin: "\"41° kuzey, 29° doğu.\"", cevap: "sol", neden: "Koordinattır: *absolute*." },
            { metin: "İstanbul, Karadeniz ile Marmara'nın buluştuğu yerdedir.", cevap: "sag", neden: "Denizlere göre anlatılıyor: *relative*." },
            { metin: "Telefonundaki GPS enlem ve boylamı gösteriyor.", cevap: "sol", neden: "Kesin koordinat: *absolute*." }
          ] },
        { tip: "grafik", baslik: "Koordinat = iki çizginin kesişimi", xlabel: "Boylam (°D)", ylabel: "Enlem (°K)", xmax: 6, ymax: 6,
          xticks: [{ v: 1, label: "10°" }, { v: 2, label: "20°" }, { v: 3, label: "30°" }, { v: 4, label: "40°" }, { v: 5, label: "50°" }],
          yticks: [{ v: 1, label: "10°" }, { v: 2, label: "20°" }, { v: 3, label: "30°" }, { v: 4, label: "40°" }, { v: 5, label: "50°" }],
          ogeler: [
            { id: "ist", tip: "nokta", x: 2.9, y: 4.1, etiket: "İstanbul 41°K 29°D", kilavuz: true, gizli: true },
            { id: "ank", tip: "nokta", x: 3.3, y: 4.0, etiket: "Ankara 40°K 33°D", kilavuz: true, gizli: true },
            { id: "yaz", tip: "yazi", x: 3.1, y: 5.3, metin: "Koordinat değişmez", gizli: true }
          ],
          durumlar: [
            { metin: "Boş koordinat sistemi: yatay eksen **boylam**, dikey eksen **enlem**." },
            { metin: "İstanbul'un adresi: ==41° kuzey, 29° doğu.== Enlem ile boylam çizgileri tek bir noktada kesişir.", goster: ["ist"] },
            { metin: "Ankara başka bir kesişim noktası: 40° kuzey, 33° doğu.", goster: ["ank"] },
            { metin: "Bu adresler bir tarif değil, ölçümdür; şehir büyüse ya da adı değişse de ==koordinat aynı kalır.==", goster: ["yaz"] }
          ] },
        { tip: "tuzak", metin: "\"Göreli\" demek \"yaklaşık koordinat\" demek değildir.", yanlis: "*Relative location*, koordinatın tahmini halidir.", dogru: "*Relative location* koordinat içermez; bir yeri komşularına, yollara, denizlere göre tarif eder. Koordinat her zaman *absolute*'tur." }
      ]
    },
    {
      baslik: "Enlem ve boylam",
      kisa: "Enlem ekvatora paraleldir (0–90°); boylam kutuptan kutba gider (0–180°).",
      bloklar: [
        { tip: "ikili", sol: { ikon: "↔️", baslik: "*Latitude* (enlem) · *parallels*", maddeler: ["Ekvatora paralel çizgiler; 0° = ekvator", "Kuzeye ya da güneye 90°'ye kadar"] },
          sag: { ikon: "↕️", baslik: "*Longitude* (boylam) · *meridians*", maddeler: ["Kutuptan kutba çizgiler; 0° = Greenwich", "Doğuya ve batıya 180°'ye kadar"] },
          oyun: [
            { metin: "Ekvatora paralel uzanır.", cevap: "sol", neden: "*Parallels* = enlem." },
            { metin: "Greenwich'ten geçen sıfır çizgisidir.", cevap: "sag", neden: "*Prime meridian* = boylamın 0'ı." },
            { metin: "En fazla 90° değerini alır.", cevap: "sol", neden: "Enlem 0–90°; boylam 0–180°." },
            { metin: "Kutuptan kutba uzanan çizgilerdir.", cevap: "sag", neden: "*Meridians* = boylam." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌐", terim: "Prime meridian", tr: "başlangıç meridyeni", tanim: "0° boylam; İngiltere'de Greenwich'ten geçer. Doğu ile batıyı ayırır.", ornek: "Londra'nın hemen yanından geçer." },
            { ikon: "🕛", terim: "GMT", tr: "Greenwich Ortalama Saati", tanim: "Başlangıç meridyeni Greenwich'e göre ayarlı saat. Saat farkları buradan hesaplanır.", ornek: "Londra'da saat 12 iken saat farkı sıfırdır." },
            { ikon: "⭕", terim: "Equator", tr: "ekvator", tanim: "0° enlem; Dünya'yı kuzey ve güney yarımküre diye ikiye böler.", ornek: "Kutuplarda enlem 90°'dir." }
          ] },
        { tip: "tablo", baslik: "Önemli çizgiler", head: ["Çizgi", "Değer", "Tür"], rows: [
            ["*Equator*", "0°", "Enlem"],
            ["Yengeç ve Oğlak dönenceleri", "23,5° K / G", "Enlem"],
            ["Kutup daireleri", "66,5° K / G", "Enlem"],
            ["Kutuplar", "90° K / G", "Enlem"],
            ["*Prime meridian*", "0°", "Boylam"],
            ["*International Date Line*", "yaklaşık 180°", "Boylam"]
          ], not: "Ek bilgi: 1° enlem yaklaşık 111 km eder." },
        { tip: "tuzak", metin: "Enlem ve boylamı karıştırmak çok yaygındır.", yanlis: "Boylam ekvatora paralel çizgilerdir; 90°'ye kadar gider.", dogru: "==Enlem== ekvatora paraleldir ve 90°'de biter; ==boylam== kutuptan kutba gider ve 180°'ye kadar uzanır." }
      ]
    },
    {
      baslik: "Boylam saati belirler",
      kisa: "Her 15° boylam 1 saat eder; doğu ileri, batı geri.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "360°", alt: "Dünya'nın bir turu" }, "÷",
            { t: "24 saat", alt: "bir günde" }, "=",
            { t: "15°", alt: "= 1 saat" }
          ], aciklama: "Başlangıç Greenwich'tir (*GMT*). Doğuya gittikçe saat ileri, batıya gittikçe geri gider." },
        { tip: "grafik", baslik: "Boylam arttıkça saat farkı büyür", xlabel: "Greenwich'ten uzaklık (boylam)", ylabel: "Saat farkı (saat)", xmax: 6, ymax: 6,
          xticks: [{ v: 1, label: "15°" }, { v: 2, label: "30°" }, { v: 3, label: "45°" }, { v: 4, label: "60°" }, { v: 5, label: "75°" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "dogru", tip: "cizgi", renk: 0, from: [0, 0], to: [6, 6], etiket: "15° = 1 saat" },
            { id: "ist", tip: "nokta", x: 3, y: 3, etiket: "Türkiye saati +3", kilavuz: true, gizli: true },
            { id: "ny", tip: "nokta", x: 5, y: 5, etiket: "New York −5 (batı)", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Her 15° için saat farkı 1 saat artar; bu yüzden ilişki düz bir çizgidir." },
            { metin: "Türkiye saati 45° doğu meridyenine göre ayarlı: 45 ÷ 15 = 3 saat. Doğuya gittikçe saat ==ileri==, yani +3. (İstanbul aslında 29° doğuda; saat dilimi resmî bir karardır.)", goster: ["ist"] },
            { metin: "New York (75° batı): 5 saat fark. Batıya gittikçe saat ==geri==, yani −5.", goster: ["ny"] }
          ] },
        { tip: "ornek", baslik: "Londra'da saat 12 iken diğer şehirler", durum: "Londra (Greenwich) saati 12.00. Türkiye saati 45° doğu meridyenine, New York saati 75° batı meridyenine göre ayarlı. Saatleri bul.",
          adimlar: ["İstanbul (Türkiye saati): 45 ÷ 15 = 3 saat. Doğuda olduğu için ileri: 12 + 3 = 15.00.", "New York: 75 ÷ 15 = 5 saat. Batıda olduğu için geri: 12 − 5 = 07.00."],
          sonuc: "İstanbul'da saat ==15.00==, New York'ta ==07.00==. Yönü karıştırma: ==doğu ileri, batı geri==; güneş doğudan doğduğu için doğuda gün önce başlar." },
        { tip: "tuzak", baslik: "Saat dilimi ≠ gerçek boylam", metin: "İstanbul'un *absolute location*'ı 29° doğudur; 29 ÷ 15 ≈ 2 saat eder. Ama Türkiye 2016'dan beri resmî olarak +3 (45° meridyeni) kullanır. *Time zone*'lar siyasi kararla çizilir; sınav soruları ise genelde \"her 15° = 1 saat\" kuralını kullanır.", yanlis: "İstanbul 45° doğudadır.", dogru: "İstanbul 29° doğudadır; saati 45° meridyenine (+3) göre ayarlıdır." }
      ]
    },
    {
      baslik: "Günün değiştiği çizgi",
      kisa: "Tarih çizgisini doğuya geçersen bir gün geri, batıya geçersen ileri.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📅", terim: "International Date Line", tr: "uluslararası tarih değiştirme çizgisi", tanim: "Yaklaşık 180° boylamda, takvim gününün değiştiği çizgi. Düz değil, zikzaklıdır; ülkeleri ikiye bölmez.", ornek: "Tokyo'dan pazartesi kalkan uçak, Los Angeles'a pazar günü iner." }
          ] },
        { tip: "ikili", sol: { ikon: "➡️", baslik: "Doğuya doğru (Amerika'ya)", maddeler: ["Takvim: −1 gün", "Pazartesi → pazar"] },
          sag: { ikon: "⬅️", baslik: "Batıya doğru (Asya'ya)", maddeler: ["Takvim: +1 gün", "Pazar → pazartesi"] },
          oyun: [
            { metin: "Tokyo → Los Angeles uçuşunda takvim bir gün geri alınır.", cevap: "sol", neden: "Doğuya, Amerika'ya doğru geçiş: −1 gün." },
            { metin: "Los Angeles → Tokyo uçuşunda takvim bir gün ileri alınır.", cevap: "sag", neden: "Batıya, Asya'ya doğru geçiş: +1 gün." },
            { metin: "Sydney'den Honolulu'ya giderken çizgiyi doğuya geçmek.", cevap: "sol", neden: "Doğuya geçiş: gün geri." }
          ] },
        { tip: "tuzak", metin: "Tarih çizgisi ile başlangıç meridyenini karıştırmak.", yanlis: "Tarih çizgisi Greenwich'ten geçer ve günü orada değiştirir.", dogru: "Greenwich ==0°==, tarih çizgisi ise ==yaklaşık 180°== civarındadır. Gün değişimi Pasifik'te olur." }
      ]
    },
    {
      baslik: "*Site* ve *situation*",
      kisa: "*Site* yerin kendi özelliğidir; *situation* diğer yerlere göre konumudur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏔️", baslik: "*Site* (yerleşim yeri özellikleri)", maddeler: ["Yerin kendi fiziksel özellikleri: iklim, su, topoğrafya, toprak", "İnsan eliyle değiştirilebilir"] },
          sag: { ikon: "🛣️", baslik: "*Situation* (konumsal bağlam)", maddeler: ["Yerin diğer yerlere göre konumu", "Neye yakın, hangi yolların üstünde?"] },
          oyun: [
            { metin: "İstanbul'da Haliç, doğal bir liman oluşturur.", cevap: "sol", neden: "Yerin kendi fiziksel özelliği: *site*." },
            { metin: "İstanbul, iki kıtayı ve iki denizi bağlayan Boğaz'ın tam üstündedir.", cevap: "sag", neden: "Başka yerlere göre konum: *situation*." },
            { metin: "Şehir, başkente iki saat uzaklıkta ve ana ticaret yolunun üstünde.", cevap: "sag", neden: "Uzaklık ve yol bağlantısı: *situation*." },
            { metin: "Şehrin kurulduğu ova verimli topraklıdır ve tatlı su kaynakları vardır.", cevap: "sol", neden: "Toprak ve su fiziksel özelliktir: *site*." }
          ] },
        { tip: "tuzak", metin: "\"İklim\" ve \"topoğrafya\" ile \"yakınlık\" ve \"yol\" kelimelerini ayır.", yanlis: "\"Şehir, ana ticaret yolunun üstünde\" ifadesi *site* özelliğidir.", dogru: "İklim, su, toprak, yer şekli anlatılıyorsa *site*; yakınlık, yol, komşu yerler anlatılıyorsa *situation*." }
      ]
    },
    {
      baslik: "Boston örneği: *site* değişebilir",
      kisa: "İnsanlar bir yerin *site* özelliklerini değiştirebilir; Boston bunun örneğidir.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "1700'ler", baslik: "Dar bir yarımada", metin: "Boston, suyla çevrili ince boyunlu küçük bir yarımadaydı." },
            { tarih: "Şehir büyürken", baslik: "Dolgu", metin: "Koylar ve bataklıklar toprakla dolduruldu (19. yüzyılda büyük ölçekte)." },
            { tarih: "Bugün", baslik: "Dolgu arazinin üstünde bir şehir", metin: "Şehir merkezinin büyük kısmı bu dolgu arazinin üstünde duruyor." }
          ] },
        { tip: "tuzak", metin: "Dolgu yapılınca suyun yerini kara aldı; Boston'un fiziksel zemini değişti. Şehrin başka yerlere göre konumu aynı kaldı. Quizde bu, *situation* ile birlikte çeldirici olarak verilir.", yanlis: "Boston'un koyları doldurmak *situation*'ı değiştirmektir.", dogru: "Fiziksel zemin (kara, su, toprak) değiştiği için bu bir ==*site* değişikliğidir==." }
      ]
    },
    {
      baslik: "*Toponym*: yerin adı",
      kisa: "*Toponym* yer adıdır; ad değişse de koordinat değişmez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Toponym", tr: "yer adı", tanim: "Bir yere verilen isim. İsimler hikâye anlatır: kurucuyu, bir inancı ya da eski bir halkı. Ve değişebilir.", ornek: "Konstantinopolis, İstanbul oldu." }
          ] },
        { tip: "tuzak", metin: "Ad değişince koordinatın da değiştiğini sanmak.", yanlis: "Şehrin adı değişince konumu da değişir.", dogru: "==*Toponym* değişir, *absolute location* değişmez.== İstanbul hâlâ 41° K, 29° D'dir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Absolute location* = enlem ve boylam (İstanbul 41° K, 29° D); değişmez. *Relative location* = başka yerlere göre tarif.",
            "*Latitude* (*parallels*) ekvatordan 0–90°; *longitude* (*meridians*) Greenwich'ten 0–180°.",
            "360° ÷ 24 = 15°: her 15° boylam 1 saat eder. Doğuya ileri, batıya geri.",
            "Londra 12.00 iken İstanbul 15.00, New York 07.00.",
            "Saat dilimi gerçek boylam değildir: İstanbul 29° doğuda, Türkiye saati 45° meridyenine göre.",
            "Tarih çizgisini doğuya geçersen bir gün geri, batıya geçersen bir gün ileri.",
            "*Site* yerin fiziksel özelliği, *situation* diğer yerlere göre konumudur; insanlar *site*'ı değiştirebilir (Boston dolgusu).",
            "*Toponym* yer adıdır; ad değişse de *absolute location* aynı kalır."
          ] }
      ]
    }
  ]
};
