/* Kitpath not defteri · hg410 · 4.10 Merkezkaç ve Merkezcil Güçler
   Kaynak: AP HuG CED Topic 4.10 (SPS-4.C). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg410",
  amac: "Bu konu devletleri bir arada tutan ya da parçalayan güçleri anlatıyor: *centripetal* ve *centrifugal* güçler. Parçalayıcı güçlerin başarısız devlete ve eşitsiz kalkınmaya, birleştirici güçlerin kültürel bütünlüğe ve eşit altyapıya nasıl yol açtığını öğreneceksin.",
  bolumler: [
    {
      baslik: "İki güç: birleştiren ve ayıran",
      kisa: "Merkezcil güçler devleti bir arada tutar; merkezkaç güçler parçalar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧲", terim: "Centripetal force", tr: "merkezcil güç", tanim: "Bir devletin halkını birleştirip bir arada tutan güç.", ornek: "Ortak dil, millî bayramlar, ulusal takım." },
            { ikon: "💨", terim: "Centrifugal force", tr: "merkezkaç güç", tanim: "Bir devleti bölen, halkı birbirinden ve merkezden uzaklaştıran güç.", ornek: "Dil ve din ayrılıkları, bölgesel eşitsizlik." }
          ] },
        { tip: "tablo", baslik: "İki gücün sonuçları", head: ["", "*Centripetal*", "*Centrifugal*"], rows: [
            ["Etkisi", "Birleştirir", "Böler"],
            ["Sonuç", "Etnik milliyetçilik (ana ulusla örtüşünce), eşit altyapı, kültürel bütünlük", "Başarısız devlet, eşitsiz kalkınma, devletsiz ulus, etnik milliyetçi hareket"]
          ] },
        { tip: "not", metin: "Hatırlama ipucu: ==merkezcil merkeze çeker== (*center-seeking*), ==merkezkaç merkezden iter== (*center-fleeing*). Bir devletin birliği bu iki gücün dengesine bağlıdır; aynı ülkede ikisi de aynı anda etkili olur." }
      ]
    },
    {
      baslik: "Merkezkaç güçler",
      kisa: "Merkezkaç güçler başarısız devlete, eşitsiz kalkınmaya ve ayrılıkçı hareketlere yol açar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏚️", terim: "Failed state", tr: "başarısız devlet", tanim: "Hükümetin toprağı kontrol edemediği, düzeni ve temel hizmetleri sağlayamadığı devlet.", ornek: "1991'den sonra Somali." },
            { ikon: "⚖️", terim: "Uneven development", tr: "eşitsiz kalkınma", tanim: "Kalkınmanın bir bölgede toplanıp ötekilerde geri kalması; geri kalan bölgelerin merkeze güveni azalır.", ornek: "Zengin kıyı kentleri ile yoksul iç bölgeler." },
            { ikon: "🧭", terim: "Stateless nation", tr: "devletsiz ulus", tanim: "Birkaç devlete dağılmış ve kendi devleti olmayan halk; bulunduğu devletlere bağlılığı zayıf olabilir.", ornek: "Kürtler." },
            { ikon: "🚩", terim: "Ethnic nationalist movement", tr: "etnik milliyetçi hareket", tanim: "Bir etnik grubun kendi kimliği için siyasi hak, özerklik ya da bağımsızlık istemesi.", ornek: "Québec ve İskoçya'daki bağımsızlık hareketleri." }
          ] },
        { tip: "not", metin: "Belçika'da Flamanca ve Fransızca konuşan topluluklar arasındaki dil ve ekonomik farklar merkezkaç bir etkidir. Yugoslavya'da etnik bölünmeler devleti 1990'larda dağılmaya götürdü." }
      ]
    },
    {
      baslik: "Merkezcil güçler",
      kisa: "Merkezcil güçler ortak kimlik, eşit altyapı ve kültürel bütünlükle devleti birleştirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎌", terim: "Ethnonationalism", tr: "etnik milliyetçilik", tanim: "Bir ulusun kendi kimliğine güçlü bağlılığı. Devletin ana ulusuyla örtüştüğünde ülkeyi birleştirir.", ornek: "Japonya'da ortak ulusal kimlik." },
            { ikon: "🚄", terim: "Equitable infrastructure development", tr: "eşit altyapı geliştirme", tanim: "Yol, demiryolu, elektrik ve okulların bütün bölgelere yayılması; bölgeler merkezle bağlanır, farklar azalır.", ornek: "Türkiye'de hızlı tren hatları ve Güneydoğu Anadolu Projesi (GAP) gibi bölgesel kalkınma projeleri." },
            { ikon: "🗣️", terim: "Cultural cohesion", tr: "kültürel bütünlük", tanim: "Ortak dil, bayrak, bayram, eğitim ve spor gibi ortak sembol ve deneyimler.", ornek: "Tanzanya'da Svahili dili, çok sayıda halkı bir araya getirir." }
          ] },
        { tip: "tuzak", metin: "Aynı kimlik duygusu duruma göre farklı yönde çalışır.", yanlis: "Etnik milliyetçilik her zaman merkezkaçtır.", dogru: "Devletin ana ulusuyla örtüşünce *ethnonationalism* merkezcildir; devlet içindeki bir azınlık kendi devletini isteyen bir *ethnic nationalist movement* olursa merkezkaçtır." }
      ]
    },
    {
      baslik: "Merkezcil mi, merkezkaç mı?",
      kisa: "Bir olayı, devleti birleştirip birleştirmediğine bakarak sınıflarız.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧲", baslik: "*Centripetal*", maddeler: ["Devleti birleştirir, bir arada tutar", "Ortak kimlik, eşit altyapı, kültürel bütünlük"] },
          sag: { ikon: "💨", baslik: "*Centrifugal*", maddeler: ["Devleti böler, merkezden uzaklaştırır", "Başarısız devlet, eşitsizlik, ayrılıkçı hareket"] },
          oyun: [
            { metin: "Ülkenin her köşesine yüksek hızlı tren hattı yapılıyor.", cevap: "sol", neden: "Bölgeleri bağlar: eşit altyapı, merkezcil." },
            { metin: "Bir bölgenin halkı, ana dillerinde eğitim hakkı tanınmadığı için merkeze tepki gösteriyor.", cevap: "sag", neden: "Bir grubu dışlıyor: merkezkaç." },
            { metin: "Farklı halkların yaşadığı ülkede ortak bir ulusal dil öğretiliyor.", cevap: "sol", neden: "Kültürel bütünlüğü artırır: merkezcil." },
            { metin: "Hükümet bir bölgede hiçbir hizmet veremiyor; silahlı gruplar yönetiyor.", cevap: "sag", neden: "Başarısız devlet: merkezkaç." },
            { metin: "Ulusal futbol takımı kazandığında bütün ülke birlikte kutluyor.", cevap: "sol", neden: "Ortak sembol: merkezcil." }
          ] },
        { tip: "ornek", baslik: "Z ülkesi için bir hesap", durum: "Z ülkesinde zengin kıyı bölgesi ile yoksul iç bölge arasında büyük bir fark var. Hükümet iç bölgeye yol, okul ve ortak dil eğitimi yatırımı yapıyor. Hangi güçler çalışıyor?",
          adimlar: ["Gelir ve hizmet farkı → merkezkaç (*uneven development*).", "Yol ve okul yatırımı → merkezcil (eşit altyapı).", "Ortak dil eğitimi → merkezcil (kültürel bütünlük)."],
          sonuc: "Hükümet ==merkezcil güçleri artırıyor==; yatırım sürerse merkezkaç etki azalır. Fark ancak yatırım yeterince kalıcı olursa kapanır." }
      ]
    },
    {
      baslik: "Güçlerin dengesi",
      kisa: "Devletin birliği, merkezcil ve merkezkaç güçlerin dengesine bağlıdır.",
      bloklar: [
        { tip: "grafik", baslik: "Devletin birlik dengesi (şema)", xlabel: "← merkezkaç baskın · merkezcil baskın →", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "zl", tip: "alan", renk: 2, noktalar: [[0, 3.2], [5, 3.2], [5, 6.8], [0, 6.8]] },
            { id: "zr", tip: "alan", renk: 0, noktalar: [[5, 3.2], [10, 3.2], [10, 6.8], [5, 6.8]] },
            { id: "tl", tip: "yazi", x: 2.5, y: 7.7, metin: "parçalanma" },
            { id: "tr", tip: "yazi", x: 7.5, y: 7.7, metin: "bütünleşme" },
            { id: "ol", tip: "ok", renk: 2, from: [5, 4.4], to: [3.6, 4.4] },
            { id: "or", tip: "ok", renk: 0, from: [5, 5.6], to: [6.4, 5.6] },
            { id: "bl", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "devlet" },
            { id: "fs", tip: "yazi", x: 2.5, y: 2.3, metin: "başarısız devlet, ayrılma", gizli: true }
          ],
          durumlar: [
            { metin: "İki güç eşit: merkezkaç (kırmızı ok) ve merkezcil (mavi ok). Devlet dengede." },
            { metin: "Bölgesel eşitsizlik ve dışlanan azınlıklar ==merkezkaç gücü== artırıyor; devlet parçalanma yönüne kayıyor.",
              set: { bl: { x: 3.8 }, ol: { from: [3.8, 4.4], to: [1.2, 4.4] }, or: { from: [3.8, 5.6], to: [5.2, 5.6] } } },
            { metin: "Hızlı tren, eşit yatırım ve ortak dil ==merkezcil gücü== artırıyor; devlet bütünleşme yönüne kayıyor.",
              set: { bl: { x: 6.4 }, ol: { from: [6.4, 4.4], to: [5.0, 4.4] }, or: { from: [6.4, 5.6], to: [9.0, 5.6] } } },
            { metin: "Merkezkaç aşırı baskın olursa devlet toprağını kontrol edemez; ==başarısız devlet== ya da parçalanma ortaya çıkar.",
              set: { bl: { x: 1.2 }, ol: { from: [1.2, 4.4], to: [0.3, 4.4] }, or: { from: [1.2, 5.6], to: [2.0, 5.6] } }, goster: ["fs"] }
          ] },
        { tip: "tuzak", metin: "Bir politikanın etkisi gruplara göre değişebilir.", yanlis: "Ortak resmî dil her zaman merkezcildir.", dogru: "Çoğu halk için birleştiricidir ama ana dili dışlanan bir grup için ==merkezkaç== etki yaratabilir. Hangi grubun gözünden baktığını sor." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Centripetal* (merkezcil) güçler devleti birleştirir; *centrifugal* (merkezkaç) güçler böler.",
            "Merkezkaç sonuçlar: *failed state*, *uneven development*, *stateless nation*, *ethnic nationalist movement*.",
            "Merkezcil sonuçlar: *ethnonationalism* (ana ulusla örtüşünce), eşit altyapı, artan kültürel bütünlük.",
            "Eşit altyapı (yol, demiryolu, okul; Türkiye'de hızlı tren ve GAP) bölgeleri merkezle bağlar ve farkları azaltır.",
            "Ortak dil, bayrak, bayram ve spor kültürel bütünlüğü artırır (Tanzanya'da Svahili).",
            "Aynı kimlik ya da politika bir grup için birleştirici, başka grup için ayırıcı olabilir.",
            "Devletin birliği iki gücün dengesine bağlıdır; merkezkaç aşırı artarsa devlet çözülür."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir ülkenin hükümeti başkent dışındaki bölgeleri kontrol edemiyor, temel hizmetleri veremiyor ve silahlı gruplar yönetimi paylaşıyor. Bu durum neyin sonucudur?",
      opts: ["Merkezcil güçlerin baskın olması", "Merkezkaç güçlerin baskın olması ve başarısız devlet", "Ulus-devletin güçlenmesi", "Kültürel bütünlüğün artması"],
      a: 1,
      why: "Toprağı kontrol edemeyen, hizmet veremeyen devlet *failed state*'tir ve merkezkaç güçlerin sonucudur. Merkezcil güçler devleti bir arada tutar; burada tam tersi oluyor."
    },
    {
      q: "Çok sayıda halkın yaşadığı bir ülke, eğitimde ortak bir ulusal dil kullanıyor ve herkesin kutladığı millî bayramlar düzenliyor. Bu uygulamalar hangisidir?",
      opts: ["*Centrifugal* güç: ayrılıkçılığı artırır", "*Irredentism*: komşu toprağı ister", "*Centripetal* güç: kültürel bütünlüğü artırır", "*Devolution*: yetkiyi bölgelere devreder"],
      a: 2,
      why: "Ortak dil ve bayramlar kültürel bütünlüğü artırır: merkezcil. *Devolution* yetkiyi bölgelere devretmektir; bu uygulamalar ise ortak çatıyı güçlendirir."
    },
    {
      q: "Tablodaki durum hangi merkezkaç güce örnektir ve hangi politika bunu azaltabilir?",
      fig: { type: "table", head: ["Bölge", "Kişi başına gelir (ortalama = 100)", "Yol ve hastane yoğunluğu"], rows: [["Kıyı", "150", "Yüksek"], ["İç", "55", "Düşük"]] },
      opts: ["*Uneven development*; iç bölgeye altyapı yatırımı", "*Failed state*; yeni ortak sembol", "*Irredentism*; askerî ittifak", "*Ethnonationalism*; sınır duvarı"],
      a: 0,
      why: "Gelir ve altyapı farkı eşitsiz kalkınmadır; iç bölgeye yapılan yatırım (merkezcil güç) bunu azaltır. Tabloda devletin çökmesine ya da komşu toprağa iddiaya dair veri yok."
    },
    {
      q: "CED'ye göre aşağıdakilerden hangisi merkezcil güçlerin bir sonucudur?",
      opts: ["Ayrılıkçı bir etnik hareket", "Başarısız devlet", "Devletsiz ulus", "Eşit altyapı geliştirme ve artan kültürel bütünlük"],
      a: 3,
      why: "Eşit altyapı ve kültürel bütünlük devleti birleştirir. Diğer üçü merkezkaç güçlerin sonuçlarıdır."
    },
    {
      q: "Bir ülkede hızlı tren ağı bütün bölgeleri bağlıyor; ancak bir bölgenin halkı ana dilinde eğitim hakkı tanınmadığı için merkeze tepkili. Hangisi doğrudur?",
      opts: ["İkisi de merkezcildir.", "Altyapı merkezcil, dil politikası o bölgede merkezkaç etki yaratabilir.", "İkisi de merkezkaçtır.", "Altyapı merkezkaç, dil politikası merkezcildir."],
      a: 1,
      why: "Tren ağı bölgeleri bağlayarak merkezcil çalışır; dil politikası ise dışlanan grupta merkezkaç etki yaratabilir. Aynı ülkede iki gücün birlikte etkili olması mümkündür."
    }
  ]
};
