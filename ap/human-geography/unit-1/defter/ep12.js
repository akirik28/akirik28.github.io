/* Kitora not defteri · ep12 · Sınavda Çıkanlar
   Kaynak: ap-videolar/src/episodes/ep12 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep12",
  ozet: "Geçmiş quizlerde tekrar tekrar çıkan kavramlar: çevre insanı mı belirler (*environmental determinism*), insan çevreyi mi değiştirir (*possibilism*)? Ayrıca *place* ile *space*, *spatial association*, *arithmetic density*, *time-space compression*, *census tract* ve kesikli bir harita olan *Goode homolosine*.",
  bolumler: [
    {
      baslik: "Çevre mi insanı belirler?",
      bloklar: [
        { tip: "hikaye", ikon: "⚖️", baslik: "Terazinin iki kefesi",
          metin: "Konular bitti; ama geçmiş quizlerde tekrar tekrar çıkan birkaç kavram daha var. En önemlisi şu soru: **çevre mi insanı belirler, yoksa insan mı çevreyi?** Terazinin bir kefesinde doğa (dağ, güneş, iklim), diğerinde insan (şehir, teknoloji, karar)." },
        { tip: "harita", merkez: "İnsan ⇄ çevre", dallar: [
            { baslik: "*Environmental determinism*", alt: "Çevre insanı belirler (eski görüş, reddedilir)" },
            { baslik: "*Possibilism*", alt: "Çevre sınır koyar, insan seçer ve uyum sağlar" }
          ] }
      ]
    },
    {
      baslik: "*Environmental determinism*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎭", terim: "Environmental determinism", tr: "çevresel determinizm", tanim: "Fiziki çevre, insanın kültürünü ve kaderini belirler. İnsan, ipleri iklimin elinde bir kukla gibidir.", ornek: "Ilıman iklimler çalışkan ve gelişmiş toplumlar üretir; sıcak iklimler geri kalmış toplumlar." }
          ] },
        { tip: "adimlar", baslik: "Eski görüşün mantığı ve neden reddedildiği", adimlar: [
            { baslik: "İddia", metin: "İklim ve coğrafya, bir toplumun gelişmişliğini belirler." },
            { baslik: "Örnek", metin: "Ilıman kuşak \"gelişmiş\", tropik kuşak \"geri\" ilan edilir." },
            { baslik: "Eleştiri 1", metin: "Fazla basit bir açıklamadır; kültür, siyaset ve teknolojiyi yok sayar." },
            { baslik: "Eleştiri 2", metin: "==Sömürgeciliği haklı göstermek için kullanıldı.== Bugün kabul edilmiyor." }
          ] },
        { tip: "tuzak", metin: "\"Sıcak iklimlerde yaşayan toplumlar iklim yüzünden geri kalmaya mahkûmdur.\" Bu iddia hangi görüşü yansıtır?", yanlis: "*Possibilism* ya da *cultural ecology*.", dogru: "==*Environmental determinism*==: fiziki çevre insanın kaderini belirler. Bugün reddedilir." }
      ]
    },
    {
      baslik: "*Possibilism*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛠️", terim: "Possibilism", tr: "olasılıkçılık", tanim: "Çevre bazı sınırlar koyar; ama ==insan seçer==, uyum sağlar ve çevreyi değiştirir.", ornek: "Çölün ortasında yemyeşil golf sahaları." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "⛳", baslik: "Birleşik Arap Emirlikleri", metin: "Çölün ortasında sulanan yemyeşil golf sahaları: kum tepeleri arasında insan eliyle yeşil." },
            { ikon: "🌷", baslik: "Hollanda", metin: "Denizden kazanılan topraklar: setler ve *polder* arazileri; deniz seviyesinin altında tarlalar." },
            { ikon: "🏞️", baslik: "Çin · Three Gorges Dam", metin: "Vadiyi kapatan dev baraj: arkasında yükselen su, önünde akan su." }
          ] },
        { tip: "ikili", sol: { ikon: "🎭", baslik: "*Environmental determinism*", maddeler: ["Çevre insanı belirler", "İnsan çaresizdir", "Bugün reddedilir"] },
          sag: { ikon: "🛠️", baslik: "*Possibilism*", maddeler: ["Çevre sınır koyar", "İnsan seçer, uyum sağlar, çevreyi değiştirir", "Örnek: polder, golf sahası, baraj"] },
          oyun: [
            { metin: "Hollanda'nın setleri ve polderleri.", cevap: "sag", neden: "İnsan, çevrenin koyduğu sınırı aşmanın yolunu buldu: *possibilism*." },
            { metin: "Ilıman iklimler gelişmiş, sıcak iklimler geri kalmış toplumlar üretir.", cevap: "sol", neden: "İklim kaderi belirliyor: *determinism*." },
            { metin: "Çölün ortasında yeşil golf sahası yapmak.", cevap: "sag", neden: "İnsan çevreyi değiştiriyor: *possibilism*." },
            { metin: "Dev bir baraj nehrin akışını değiştirir.", cevap: "sag", neden: "İnsan çevreyi dönüştürüyor: *possibilism*." },
            { metin: "Sömürgeciliği haklı göstermek için kullanılan, çevrenin insanı belirlediği görüşü.", cevap: "sol", neden: "*Determinism*." }
          ] },
        { tip: "tuzak", metin: "Soruda insanın çevreyi değiştirdiği bir örnek görürsen:", yanlis: "Cevap *environmental determinism*; çünkü çevre ile insan arasında güçlü bir ilişki var.", dogru: "Cevap ==*possibilism*==: insan çevreyi değiştiriyor, çevre kaderi belirlemiyor." }
      ]
    },
    {
      baslik: "*Place* ve *space*",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏡", baslik: "*Place*", maddeler: ["Bir konumu benzersiz yapan fiziksel ve beşerî özelliklerin toplamı", "\"Burayı özel yapan her şey\"", "Örnek: Mardin'in taş evleri, dar sokakları, dilleri"] },
          sag: { ikon: "📐", baslik: "*Space*", maddeler: ["Nesneler arasındaki fiziksel boşluk", "Dağılımı incelediğimiz alan", "Örnek: boş ızgara üzerindeki aralıklı noktalar"] },
          oyun: [
            { metin: "Mardin'in taş evleri, dar sokakları, konuşulan dilleri ve ovaya bakan yamacı.", cevap: "sol", neden: "Fiziksel ve beşerî özelliklerin toplamı: *place*." },
            { metin: "Aralıklı noktalar arasındaki mesafe.", cevap: "sag", neden: "Nesneler arası boşluk: *space*." },
            { metin: "Bir mahallenin kendine özgü karakteri.", cevap: "sol", neden: "Benzersizlik: *place*." },
            { metin: "Fabrikaların dağıldığı geniş alan.", cevap: "sag", neden: "Dağılımın incelendiği alan: *space*." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🏡", terim: "Place", tr: "yer", tanim: "Bir konumu benzersiz yapan fiziksel ve beşerî özelliklerin toplamı.", ornek: "Ev, ağaç, cami, köprü ve insanlarıyla karakterli bir yer." },
            { ikon: "⬜", terim: "Space", tr: "mekân", tanim: "Nesneler arasındaki fiziksel boşluk; yani dağılımı incelediğimiz alan.", ornek: "Boş bir ızgara üzerinde aralıklı noktalar." }
          ] },
        { tip: "tuzak", metin: "Bir gezi yazarı Mardin'i anlatırken taş evlerini, dar sokaklarını, dillerini ve yamacını sayıyor.", yanlis: "Bu *space*'tir; çünkü bir alandan söz ediyor.", dogru: "==*Place*==: bir konumu benzersiz yapan fiziksel ve beşerî özelliklerin toplamı. *Space* ise nesneler arasındaki boşluktur." }
      ]
    },
    {
      baslik: "*Spatial association*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Spatial association", tr: "mekânsal ilişki", tanim: "İki şeyin dağılımı haritada birbirine benziyorsa, aralarında bir ilişki olabilir.", ornek: "Fabrikaların yoğun olduğu yerlerle hava kirliliğinin yüksek olduğu yerler örtüşüyor." }
          ] },
        { tip: "grafik", baslik: "Fabrika yoğunluğu ve hava kirliliği (şematik)", xlabel: "Fabrika yoğunluğu", ylabel: "Hava kirliliği", xmax: 10, ymax: 10,
          ogeler: [
            { id: "d1", tip: "nokta", x: 1, y: 1.6, renk: 0 },
            { id: "d2", tip: "nokta", x: 2, y: 2.7, renk: 0 },
            { id: "d3", tip: "nokta", x: 3.2, y: 3.5, renk: 0 },
            { id: "d4", tip: "nokta", x: 4.5, y: 4.8, renk: 0 },
            { id: "d5", tip: "nokta", x: 6, y: 6.3, renk: 0 },
            { id: "d6", tip: "nokta", x: 7.8, y: 8, renk: 0 },
            { id: "tr", tip: "cizgi", renk: 1, kesik: true, from: [0.5, 1.0], to: [8.8, 8.8], etiket: "ilişki", gizli: true },
            { id: "nt", tip: "yazi", x: 5, y: 9.4, metin: "ilişki var ≠ neden–sonuç kanıtlandı", gizli: true }
          ],
          durumlar: [
            { metin: "Altı ilçenin her biri bir nokta: fabrika yoğunluğu ve hava kirliliği birlikte artıyor." },
            { metin: "Noktalar yukarı doğru dizilir: iki dağılım haritada ==örtüşür==. Bu bir *spatial association*'dır.", goster: ["tr"] },
            { metin: "Dikkat: örtüşme, aralarında bir ilişki ==olabileceğini== gösterir; tek başına bir nedeni ispatlamaz.", goster: ["nt"] }
          ] },
        { tip: "tuzak", metin: "İki haritayı üst üste koyuyorsun: fabrikaların yoğun olduğu ilçelerle astım vakalarının yüksek olduğu ilçeler büyük ölçüde örtüşüyor.", yanlis: "Bu *time-space compression*'dır ya da *distance decay*'dir.", dogru: "İki dağılımın benzerliği ==*spatial association*==." }
      ]
    },
    {
      baslik: "Üç sayısal kavram",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Toplam nüfus", alt: "kişi" }, "÷",
            { t: "Toplam alan", alt: "km²" }, "=",
            { t: "*Arithmetic density*", alt: "kişi/km²" }
          ], aciklama: "Kilometrekareye düşen insan sayısı." },
        { tip: "ornek", baslik: "Arithmetic density", durum: "Bir ilçenin nüfusu 600.000, alanı 150 km². *Arithmetic density* nedir?",
          adimlar: ["Nüfus ÷ alan.", "600.000 ÷ 150 = 4.000."],
          sonuc: "*Arithmetic density* ==4.000 kişi/km²==." },
        { tip: "kavramlar", kartlar: [
            { ikon: "👥", terim: "Arithmetic density", tr: "aritmetik yoğunluk", tanim: "Toplam nüfus bölü toplam alan; yani kilometrekareye düşen insan sayısı.", ornek: "600.000 kişi ÷ 150 km² = 4.000 kişi/km²." },
            { ikon: "🚀", terim: "Time-space compression", tr: "zaman–mekân sıkışması", tanim: "Teknoloji sayesinde mesafenin öneminin azalması. ==*Time-space convergence* ile aynı fikir.==", ornek: "İki şehir arasındaki uçak ve sinyal yolu kısalır; mesafe sanki küçülür." },
            { ikon: "🏘️", terim: "Census tract", tr: "sayım bölgesi", tanim: "Nüfus sayımındaki en küçük veri birimlerinden biri (örneğin bir mahalle büyüklüğünde).", ornek: "Aynı şehrin mahallelerini gelir düzeyine göre karşılaştırmak." }
          ] },
        { tip: "tablo", baslik: "Veri birimleri (büyükten küçüğe)", head: ["Birim", "Ne için?"], rows: [
            ["Ülke", "Ülkeleri karşılaştırmak"],
            ["Eyalet", "Eyaletler arası farklar"],
            ["İlçe", "İlçeler arası farklar"],
            ["*Census tract*", "Mahalleleri birbiriyle karşılaştırmak"]
          ], vurgu: 3, not: "Ek bilgi: ABD'de bir *census tract* genelde yaklaşık 1.200–8.000 kişiyi kapsar." },
        { tip: "tuzak", metin: "Bir araştırmacı aynı şehrin mahallelerini gelir düzeyine göre karşılaştırmak istiyor.", yanlis: "Ülke ya da eyalet düzeyinde nüfus sayımı verisi yeterlidir.", dogru: "Mahalleleri karşılaştırmak için ==*census tract*== düzeyine bakılır; büyük birimler farkları gizler (*aggregation*)." }
      ]
    },
    {
      baslik: "*Goode homolosine*: kesikli harita",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✂️", terim: "Goode homolosine · interrupted", tr: "kesikli eş alanlı harita", tanim: "Okyanuslardan kesilip açılmış, yani *interrupted* bir harita. ==Kıtaların alanı doğrudur, şekilleri de fazla bozulmaz.== Ama okyanuslar parçalandığı için yön ve mesafe ölçmeye uygun değildir.", ornek: "Kıtaları az bozulmuş gösteren portakal kabuğu görünümlü harita." }
          ] },
        { tip: "ikili", sol: { ikon: "✂️", baslik: "*Goode homolosine*", maddeler: ["Alan ✓ (*equal-area*)", "Şekil: fazla bozulmaz", "Yön ✗ mesafe ✗ (okyanuslar kesik)"] },
          sag: { ikon: "⛵", baslik: "*Mercator*", maddeler: ["Şekil ve yön ✓", "Alan ✗", "Gemi rotası için"] },
          oyun: [
            { metin: "Kıtaların alanını doğru göstermek ama okyanusları kesmek.", cevap: "sol", neden: "*Interrupted* eş alanlı harita: *Goode*." },
            { metin: "Okyanus üzerinde sabit pusula rotası çizmek.", cevap: "sag", neden: "Yön gerekir: *Mercator*." },
            { metin: "Kesik okyanuslar yüzünden gemi rotası çizilemez.", cevap: "sol", neden: "Yön ve mesafe ✗: *Goode*." },
            { metin: "Kutuplara doğru alanların şişmesi.", cevap: "sag", neden: "*Mercator*'un bedeli." }
          ] },
        { tip: "tuzak", metin: "Kıtaların alanı doğru olunca harita her amaçla kullanılabilir sanılır.", yanlis: "*Goode homolosine* gemi rotası çizmek için de uygundur.", dogru: "Okyanuslar parçalandığı için ==yön ve mesafe ölçmeye uygun değildir==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Environmental determinism*: çevre insanın kaderini belirler; basit bulunduğu ve sömürgeciliği haklı göstermek için kullanıldığı için bugün reddedilir.",
            "*Possibilism*: çevre sınır koyar, insan seçer ve çevreyi değiştirir (BAE golf sahaları, Hollanda polderleri, Three Gorges Dam).",
            "İnsanın çevreyi değiştirdiği bir örnek görürsen cevap *possibilism*.",
            "*Place*: bir konumu benzersiz yapan fiziksel ve beşerî özelliklerin toplamı; *space*: nesneler arasındaki fiziksel boşluk.",
            "*Spatial association*: iki dağılım haritada benziyorsa aralarında ilişki olabilir (fabrika yoğunluğu ve hava kirliliği).",
            "*Arithmetic density* = toplam nüfus ÷ toplam alan.",
            "*Time-space compression*: teknoloji sayesinde mesafenin önemi azalır; *time-space convergence* ile aynı fikir.",
            "*Census tract*: nüfus sayımının en küçük veri birimlerinden biri; mahalleleri karşılaştırmak için.",
            "*Goode homolosine*: kesikli, eş alanlı harita; alan doğru, yön ve mesafe için uygun değil."
          ] }
      ]
    }
  ]
};
