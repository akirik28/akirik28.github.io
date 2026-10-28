/* Kitpath not defteri · fe103 · FEL.10.2.1 Düşünme ve dil
   Kaynak: felsefe-11-sinav1/veri.js (MUHTEMEL 2.1, MC, PROVA) ve takip/sinav-kitleri/felsefe/KAYNAK.md. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "fe103",
  amac: "Bu konu düşünme ile dilin ilişkisini anlatıyor: üç görüş ve imge, kavram, dil basamakları. Sınavda bir durumdan neden-sonuç kurup tutarlı bir paragraf yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Düşünme nedir, dil nedir?",
      kisa: "Düşünme anlam üretir; dil kavramların sembol sistemidir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧠", baslik: "Düşünme", maddeler: ["Anlamlandırma, sorgulama, karşılaştırma, çıkarım", "Kavramlar ve imgelerle gerçekleşir", "Çoğu zaman dille ifade edilip somutlaşır"] },
          sag: { ikon: "🔤", baslik: "Dil", maddeler: ["Duygu ve düşünceleri sembollerle ifade eder", "Toplumda oluşmuş örtük bir uzlaşma", "Sürekli değişen, gelişen canlı sistem"] },
          oyun: [
            { metin: "Kişinin kendi kendisiyle yaptığı sessiz konuşma.", cevap: "sol", neden: "Düşünmenin bir tanımı." },
            { metin: "Kavramları temsil eden göstergeler dizgesi.", cevap: "sag", neden: "Dilin tanımı." },
            { metin: "Toplumsal bir kurum; iletişim ve kültür aktarımı sağlar.", cevap: "sag", neden: "Dilin özelliği." },
            { metin: "Zihnin anlamlandırma ve çıkarım yapma etkinliği.", cevap: "sol", neden: "Düşünmenin tanımı." }
          ] },
        { tip: "not", metin: "İkisi de insana özgüdür; insanı diğer canlılardan ayırır. Dil yalnızca iletişim değil, anlamlandırma aracıdır: düşünceyi geliştirir, düzenler, zenginleştirir, somutlaştırır." }
      ]
    },
    {
      baslik: "Üç görüş",
      kisa: "Özdeşlik: aynıdır. Bağımsızlık: ayrıdır. Etkileşim: birbirini etkiler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "1️⃣", terim: "Özdeşlik görüşü", tr: "dil ve düşünme aynıdır", tanim: "Düşünme dil olmadan gerçekleşemez. Dil düşünmenin temelidir.", ornek: "Zihinsel süreçler dil aracılığıyla şekillenir." },
            { ikon: "2️⃣", terim: "Bağımsızlık görüşü", tr: "dil yalnızca araçtır", tanim: "Dil düşüncenin ürünüdür ama düşünmek için zorunlu değildir. Yalnızca paylaşım ve iletişim aracıdır.", ornek: "Mine odayı zihninde, konuşmadan tasarlar." },
            { ikon: "3️⃣", terim: "Karşılıklı etkileşim görüşü", tr: "ikisi birbirini etkiler", tanim: "Dil ve düşünme birbirini etkiler ama biri diğerine tümüyle indirgenemez.", ornek: "Kelime dağarcığı zenginleşince düşünce incelir." }
          ] },
        { tip: "tablo", head: ["Durum", "Görüş", "Gerekçe"], rows: [
            ["Ressam tabloyu kelimesiz tasarlar; anlatmak için kelime arar", "Bağımsızlık", "Düşünce dilsiz var; dil paylaşım aracı"],
            ["Kelime dağarcığı genişleyen öğrenci ince ayrımlar yapar, yeni fikre yeni ifade bulur", "Karşılıklı etkileşim", "Dil düşünceyi, düşünce dili geliştirir"],
            ["“Dil olmadan düşünme gerçekleşemez.”", "Özdeşlik", "Dil düşünmenin temeli"]
          ], not: "Gerekçede iki yönü de yaz: dil düşünceyi, düşünce dili etkiler." },
        { tip: "tuzak", metin: "Türkçede “kayınvalide, baldız, görümce” ayrı kelimelerdir; İngilizcede çoğu “in-law” olur.", yanlis: "Dil düşünceyi belirler; bu özdeşlik görüşüdür.", dogru: "Karşılıklı etkileşim: dil ayrımları belirginleştirir; toplum önemli bulduğunu adlandırır. İngilizce konuşan da akrabaları ayırt edebilir, yani düşünce tamamen dile indirgenemez." }
      ]
    },
    {
      baslik: "İmge, kavram, dil",
      kisa: "Düşünme imgeyle başlar, kavramla soyutlanır, dille aktarılır.",
      bloklar: [
        { tip: "grafik", baslik: "Düşünmenin üç yapı taşı", xlabel: "Sıra", ylabel: "Gelişim", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "İmge" }, { v: 5, label: "Kavram" }, { v: 8, label: "Dil" }], yticks: [],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[0.8, 0], [3.2, 0], [3.2, 0], [0.8, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[3.8, 0], [6.2, 0], [6.2, 0], [3.8, 0]] },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[6.8, 0], [9.2, 0], [9.2, 0], [6.8, 0]] },
            { id: "t1", tip: "yazi", x: 2, y: 3.7, metin: "İmge", gizli: true },
            { id: "t2", tip: "yazi", x: 5, y: 6.7, metin: "Kavram", gizli: true },
            { id: "t3", tip: "yazi", x: 8, y: 9.4, metin: "Dil", gizli: true }
          ],
          durumlar: [
            { metin: "İmge: duyusal bir yaşantının zihinde canlanması.", set: { b1: { noktalar: [[0.8, 0], [3.2, 0], [3.2, 3], [0.8, 3]] } }, goster: ["t1"] },
            { metin: "Kavram: benzer imgeler ortak özelliklere göre soyutlanıp gruplanır.", set: { b2: { noktalar: [[3.8, 0], [6.2, 0], [6.2, 6], [3.8, 6]] } }, goster: ["t2"] },
            { metin: "Dil: kavramları kelimelerle karşılayan sembol sistemi.", set: { b3: { noktalar: [[6.8, 0], [9.2, 0], [9.2, 9], [6.8, 9]] } }, goster: ["t3"] },
            { metin: "Sıra: imge, kavram, dil. Dil ile düşünme karşılıklı etkileşim içindedir." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "👁️", terim: "İmge", tr: "zihinde canlanan görüntü", tanim: "Duyusal bir yaşantının zihinde canlanması.", ornek: "Sokakta görülen turuncu kedinin zihindeki görüntüsü." },
            { ikon: "🔷", terim: "Kavram", tr: "soyutlanmış genel tasarım", tanim: "Benzer imgelerin ortak özelliklere göre soyutlanıp gruplanması.", ornek: "Farklı kedileri birleştiren genel “kedi” tasarımı." },
            { ikon: "🔤", terim: "Dil", tr: "sembol sistemi", tanim: "Kavramları kelimelerle karşılayıp aktarmayı sağlar.", ornek: "“Kedi” kelimesini öğrenince kavramı bu kelimeyle düşünürüz." }
          ] }
      ]
    },
    {
      baslik: "Neden-sonuç kur",
      kisa: "Biri değişirse ötekinin ne olacağını yaz.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "📚", baslik: "Kelime dağarcığı zenginleşirse", metin: "Kavramlar arasında ince ayrımlar yapılır; düşünce daha açık ve karmaşık olur." },
            { ikon: "🌱", baslik: "Düşünce geliştikçe", metin: "Yeni kavramlara ihtiyaç doğar; dil yeni kelimeler üretir (dil canlıdır)." },
            { ikon: "🔗", baslik: "Ortak anlamlar olmazsa", metin: "İletişim kopar; birlikte düşünmek zorlaşır." }
          ] },
        { tip: "hikaye", ikon: "🥚", baslik: "Humpty Dumpty ve Alice", metin: "Humpty Dumpty kelimelere kendi istediği anlamı yükler: “şan ve şeref” dediği “fevkalade bir tartışma” demektir. Herkes böyle yapsa iletişim ve ortak düşünme çöker. Dil ortak uzlaşmaya dayanır." }
      ]
    },
    {
      baslik: "Sınavda böyle yaz",
      kisa: "Görüşünü söyle, metinden aşamayı göster, görüşlerle bağla.",
      bloklar: [
        { tip: "ornek", baslik: "Dil olmadan düşünülebilir mi? (60-90 kelime)", durum: "Bir bebek annesinin yüzünü gözlerini kapayınca zihninde canlandırır. Farklı yüzleri gruplayıp genel bir “yüz” tasarımı kurar. Sonra “anne” ve “yüz” kelimelerini öğrenir. Dil olmadan da düşünülebilir mi?",
          adimlar: [
            "Aşamaları adlandır: imge, kavram, dil.",
            "Görüşünü söyle: mümkün ama sınırlı.",
            "Görüşlerden yararlan: bağımsızlık ve etkileşim.",
            "Tek bir tutarlı sonuca bağla."
          ],
          sonuc: "Model cevap: Bebek kelimeleri bilmeden önce de imgeler ve kavramlarla düşünebilir; bu, düşünmenin dilden önce var olabileceğini gösterir. Ancak kelimeleri öğrendikçe kavramları daha açık ayırır ve düşüncesini aktarabilir. Demek ki dil olmadan düşünmek mümkündür ama sınırlıdır; dil düşünceyi düzenleyip zenginleştirir, düşünce de dili geliştirir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Düşünme: anlamlandırma, sorgulama, çıkarım. Dil: kavramları temsil eden sembol sistemi.",
            "Üç görüş: özdeşlik (aynıdır), bağımsızlık (yalnızca araç), karşılıklı etkileşim (birbirini etkiler).",
            "Kelimesiz düşünme örneği bağımsızlığı, iki yönlü etki örneği etkileşimi destekler.",
            "Yapı taşları sırayla: imge, kavram, dil.",
            "Dil canlıdır: düşünce gelişince yeni kelime doğar.",
            "Dil ortak uzlaşmaya dayanır; herkes kendi anlamını yüklese iletişim çöker.",
            "Paragrafta görüşünü söyle, metinden aşamayı göster, neden-sonuç kur."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Mine odasını konuşmadan, zihninde tasarlıyor. Sonra tasarımı annesine anlatırken uygun kelimeleri aramak zorunda kalıyor. Bu durum hangi görüşü destekler?",
      opts: ["Özdeşlik: dil olmadan hiçbir düşünce kurulamaz.", "Bağımsızlık: dil düşünmek için zorunlu değildir, paylaşım aracıdır.", "Düşünce yalnızca yüksek sesle konuşurken ortaya çıkar.", "Dil, düşüncenin tek kaynağıdır."],
      a: 1,
      why: "Mine kelimesiz düşünebilmiş, dile ancak düşüncesini paylaşırken ihtiyaç duymuştur: bağımsızlık görüşü. Özdeşlik en çekici yanlıştır; o, dil olmadan düşünmenin imkânsız olduğunu söyler." },
    { q: "Bir çocuk komşunun kedisini zihninde canlandırıyor (I). Farklı kedileri ortak özelliklerine göre gruplayıp genel bir “kedi” tasarımı kuruyor (II). Sonra “kedi” kelimesini öğrenip bu tasarımı kelimeyle düşünüyor (III). I, II ve III sırasıyla hangisidir?",
      opts: ["İmge – kavram – dil", "Kavram – imge – dil", "Dil – kavram – imge", "İmge – dil – kavram"],
      a: 0,
      why: "Duyusal yaşantının canlanması imge, imgelerin soyutlanıp gruplanması kavram, kavramın kelimeyle karşılanması dildir. Düşünmenin yapı taşları bu sırayla gelişir." },
    { q: "Türkçede “kayınvalide”, “baldız”, “görümce” gibi çok özel akrabalık kelimeleri vardır; İngilizcede bunların çoğu “in-law” ile karşılanır. Bu örnekten hangi çıkarım yapılabilir?",
      opts: ["İngilizce konuşanlar bu akrabaları hiç ayırt edemez.", "Düşünce tamamen dile indirgenebilir.", "Dil ayrımları belirginleştirir ama düşünme tamamen dile indirgenemez; ikisi birbirini etkiler.", "Dil yalnızca iletişim aracıdır, düşünceyi hiç etkilemez."],
      a: 2,
      why: "Kelimeler ayrımları belirginleştirir; ama İngilizce konuşanlar da akrabaları ayırt edebilir, yani düşünme dile tümüyle indirgenemez. Bu karşılıklı etkileşim görüşüdür. İlk şık örnekle çelişir." },
    { q: "Bir masal kahramanı kelimelere kendi istediği anlamı yükler: “Ben bir kelimeyi kullandığımda o, benim ona yüklediğim anlama gelir.” Herkes böyle davransaydı ne olurdu?",
      opts: ["Dil daha zengin olur, iletişim kolaylaşırdı.", "İletişim ve ortak düşünme zorlaşırdı, çünkü dil ortak uzlaşmaya dayanır.", "Herkes aynı düşünceye sahip olurdu.", "Dil değişmeyi bırakır, sabit bir sisteme dönüşürdü."],
      a: 1,
      why: "Dil toplum üyeleri arasındaki ortak uzlaşmaya dayanır. Herkes kendi anlamını yüklerse iletişim kopar ve birlikte düşünmek zorlaşır. Dil zaten sürekli değişen canlı bir sistemdir; son şık bu yüzden yanlıştır." },
    { q: "Aşağıdakilerden hangisi dilin özelliklerinden biri değildir?",
      opts: ["Toplumsal bir kurumdur.", "Sürekli değişen ve gelişen canlı bir sistemdir.", "Kavramları temsil eden göstergeler dizgesidir.", "Her konuşanın anlamını tek başına belirlediği, ortak uzlaşma gerektirmeyen bir sistemdir."],
      a: 3,
      why: "Dil toplum üyeleri arasında oluşmuş örtük bir uzlaşma sistemidir; anlamı kimse tek başına belirleyemez. Diğer üç şık dilin doğru özellikleridir." }
  ]
};
