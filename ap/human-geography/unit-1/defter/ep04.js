/* Kitora not defteri · ep04 · Bölgeler
   Kaynak: ap-videolar/src/episodes/ep04 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep04",
  ozet: "Coğrafyacılar dünyayı anlamak için onu *region*'lara böler. Üç tür vardır: ortak özelliğe göre *formal*, ortak merkeze göre *functional*, ortak algıya göre *perceptual*. Bu defterde üçünü, ayırt etme ipuçlarını ve *sense of place*, *cognitive map*, *preference map* kavramlarını göreceksin.",
  bolumler: [
    {
      baslik: "Ege nerede başlıyor?",
      bloklar: [
        { tip: "hikaye", ikon: "🌫️", baslik: "Sınırı çizilemeyen yer",
          metin: "\"Ege'de yaşıyorum\" dediğinde herkesin kafasında bir yer canlanır. Ama sınırını kimse tam çizemez. Coğrafyacılar dünyayı anlamak için onu parçalara ayırır. Her parçaya bir ad verirler." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🗾", terim: "Region", tr: "bölge", tanim: "Ortak bir özelliği paylaşan alan. Üç türü vardır: *formal*, *functional*, *perceptual*.", ornek: "Ege, bir ülke, bir seçim bölgesi, bir radyonun yayın alanı." }
          ] },
        { tip: "harita", merkez: "*Region* türleri", dallar: [
            { baslik: "*Formal region*", alt: "Ortak özellik · diğer adı *uniform*" },
            { baslik: "*Functional region*", alt: "Ortak merkez · diğer adı *nodal*" },
            { baslik: "*Perceptual region*", alt: "Ortak algı · diğer adı *vernacular*" }
          ] }
      ]
    },
    {
      baslik: "*Formal region*: ortak özellik",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎨", terim: "Formal region = Uniform region", tr: "biçimsel / tekdüze bölge", tanim: "Herkesin ortak bir özelliği paylaştığı alan: aynı dil, aynı iklim, aynı yönetim. ==Sınırı bellidir.==", ornek: "Bir ülke ya da bir eyalet; Akdeniz ikliminin görüldüğü alan." }
          ] },
        { tip: "adimlar", baslik: "Seçim haritasında bir eyalet neden tek renk?", adimlar: [
            { baslik: "Ortak özellik", metin: "Haritada bir eyalet kırmızıya boyanır; çünkü çoğunluk o partiye oy vermiştir." },
            { baslik: "Herkes değil", metin: "Seçmenlerin hepsi aynı partiyi seçmemiştir; örneğin %55 o partiye, %45 diğerlerine oy verir." },
            { baslik: "Baskın olması yeter", metin: "Özelliğin herkeste olması gerekmez; ==baskın olması yeter==. Bu yüzden eyalet baştan sona tek renk gösterilir." }
          ] },
        { tip: "ornek", baslik: "Seçim haritası", durum: "Bir eyalette 1000 seçmenin 550'si bir partiye, 450'si diğer partilere oy verdi. Harita eyaleti nasıl boyar ve bu hangi tür bölgedir?",
          adimlar: ["Oy oranı: 550 ÷ 1000 = %55; çoğunluk (%50'den fazla).", "Harita, baskın özelliğe göre eyaleti tümüyle o partinin rengine boyar.", "Sınırlar belli ve ortak bir özellik (baskın tercih) var."],
          sonuc: "Bu bir ==*formal (uniform) region*==. Özellik herkeste değil, çoğunlukta; yine de bölge tek renk gösterilir." },
        { tip: "tuzak", metin: "\"Formal\" kelimesi \"resmi\" çağrışımı yapsa da asıl ölçüt ortak özelliktir.", yanlis: "*Formal region*'da özellik bölgedeki herkeste bulunmalıdır.", dogru: "Özellik ==baskın== olmalıdır; herkeste olması gerekmez. Sınır genelde bellidir." }
      ]
    },
    {
      baslik: "*Functional region*: ortak merkez",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📡", terim: "Functional region = Nodal region", tr: "işlevsel / düğümsel bölge", tanim: "Bir merkezin (*node*) etrafında örgütlenir. Merkezde etki güçlüdür, ==dışa doğru zayıflar.==", ornek: "Bir gazetenin dağıtım alanı, bir radyo istasyonunun yayın alanı, bir pizzacının paket servis bölgesi." }
          ] },
        { tip: "grafik", baslik: "Merkezden uzaklaştıkça etki azalır", xlabel: "İki merkez arasındaki yol", ylabel: "Etki", xmax: 10, ymax: 10,
          xticks: [{ v: 0.3, label: "A" }, { v: 9.7, label: "B" }],
          ogeler: [
            { id: "ea", tip: "egri", renk: 0, etiket: "A'nın etkisi", noktalar: [[0, 9], [2, 6], [4, 3.5], [5, 2.6], [7, 1.2], [10, 0.4]] },
            { id: "na", tip: "nokta", x: 0.2, y: 8.8, etiket: "merkez (node)", gizli: true },
            { id: "eb", tip: "egri", renk: 1, etiket: "B'nin etkisi", noktalar: [[0, 0.4], [3, 1.2], [5, 2.6], [6, 3.5], [8, 6], [10, 9]], gizli: true },
            { id: "sinir", tip: "nokta", x: 5, y: 2.6, etiket: "sınır", kilavuz: true, gizli: true },
            { id: "yaz", tip: "yazi", x: 5, y: 8.2, metin: "başka merkez = başka bölge", gizli: true }
          ],
          durumlar: [
            { metin: "Merkez A'da etki en yüksektir; uzaklaştıkça eğri düşer.", goster: ["na"] },
            { metin: "Pizzacı, gazete ya da radyo için de aynıdır: merkezde ==güçlü==, kenarda ==zayıf==." },
            { metin: "Sınırın dışına çıkınca başka bir merkezin bölgesine girersin: B'nin etkisi yükselir.", goster: ["eb", "yaz"] },
            { metin: "İki etkinin eşit olduğu nokta ==bölge sınırıdır==.", goster: ["sinir"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "📰", baslik: "Gazete", metin: "Dağıtım merkezinden ışınsal yollarla evlere ulaşır." },
            { ikon: "📻", baslik: "Radyo", metin: "Yayın kulesinden dalgalar yayılır; uzaklaştıkça sinyal zayıflar." },
            { ikon: "🍕", baslik: "Pizzacı", metin: "Paket servis bölgesi, dükkândan kurye ile ulaşılabilen alandır." }
          ] },
        { tip: "tuzak", metin: "Quiz sorusu: \"Bir havalimanının yolcu çektiği alan ne tür bölgedir?\"", yanlis: "*Perceptual region*; çünkü insanlar havalimanını farklı algılar.", dogru: "==*Functional region*==: bir merkezin (havalimanı) etrafında örgütlenmiştir." }
      ]
    },
    {
      baslik: "*Perceptual region*: ortak algı",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💭", terim: "Perceptual region = Vernacular region", tr: "algısal / halk bölgesi", tanim: "Haritada değil, insanların zihninde var olur. ==Sınırı kişiden kişiye değişir.==", ornek: "*American South*: hangi eyaletler Güney sayılır? Herkes farklı çizer. Bizde Doğu ya da Ege." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🧭", baslik: "İpucu: adında yön geçer", metin: "*The South*, *Middle East*, Doğu, Ege... Bölge adında yön ya da genel bir kavram geçiyorsa büyük ihtimalle *perceptual region*'dır." }
          ] },
        { tip: "tuzak", metin: "Bir ankette \"Doğu\" dedikleri yerin sınırını herkes farklı çiziyor.", yanlis: "Bu bir *formal region*'dır; çünkü ortak özellik var.", dogru: "Sınır kişiye göre değiştiği için bu bir ==*perceptual (vernacular) region*==." }
      ]
    },
    {
      baslik: "Üçünü karıştırma",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎨", baslik: "*Formal region*", maddeler: ["Ortak özellik", "Sınır belli", "Baskın özellik yeter"] },
          sag: { ikon: "📡", baslik: "*Functional region*", maddeler: ["Ortak merkez", "Merkezde güçlü, dışa doğru zayıf", "Başka merkezle sınırlanır"] },
          oyun: [
            { metin: "Fransa Cumhuriyeti'nin toprakları.", cevap: "sol", neden: "Ortak yönetim ve belli sınır: *formal*." },
            { metin: "Bir televizyon kanalının yayın alanı.", cevap: "sag", neden: "Merkez (verici) etrafında örgütlenir: *functional*." },
            { metin: "Akdeniz ikliminin görüldüğü alan.", cevap: "sol", neden: "Ortak iklim özelliği: *formal*." },
            { metin: "Bir pizzacının paket servis bölgesi.", cevap: "sag", neden: "Dükkân merkez, etki dışa doğru azalır: *functional*." },
            { metin: "Aynı dilin konuşulduğu bir bölge.", cevap: "sol", neden: "Ortak dil: *formal*." }
          ] },
        { tip: "ikili", sol: { ikon: "💭", baslik: "*Perceptual region*", maddeler: ["Ortak algı", "Sınırı kişiye göre değişir", "Zihinde var olur"] },
          sag: { ikon: "🧩", baslik: "*Formal / functional region*", maddeler: ["Ölçülebilir bir temeli var", "Ortak özellik ya da ortak merkez", "Haritada çizilebilir"] },
          oyun: [
            { metin: "İnsanların \"Orta Doğu\" dediği alan.", cevap: "sol", neden: "Algıya dayanır, sınırı belirsiz: *perceptual*." },
            { metin: "Bir gazetenin dağıtım alanı.", cevap: "sag", neden: "Merkeze dayalı ve ölçülebilir: *functional*." },
            { metin: "Bir eyaletin sınırları.", cevap: "sag", neden: "Resmi, haritada çizili sınır: *formal*." },
            { metin: "\"Güney\" dediğimizde aklımızda canlanan yer.", cevap: "sol", neden: "Zihinsel bir bölge: *perceptual*." }
          ] },
        { tip: "tablo", baslik: "Tek cümlelik fark", head: ["Tür", "Ortak ne?", "Örnek"], rows: [
            ["*Formal*", "Özellik", "Eyalet, ülke, iklim bölgesi"],
            ["*Functional*", "Merkez", "Gazete, radyo, pizzacı"],
            ["*Perceptual*", "Algı", "*The South*, Doğu, Ege"]
          ], not: "Bölgeler sabit değildir: zamanla değişir, üst üste biner, ölçeğe göre farklı görünür." }
      ]
    },
    {
      baslik: "Algı dünyası: *sense of place* ve haritalar",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💞", terim: "Sense of place", tr: "yer duygusu", tanim: "Bir yerin sende uyandırdığı duygu.", ornek: "Kendi mahallene girdiğinde hissettiğin şey." },
            { ikon: "🧠", terim: "Cognitive map", tr: "zihinsel harita", tanim: "Kafandaki harita. ==Bildiğin yerler detaylı, bilmediklerin boştur.==", ornek: "Gözünü kapat, evden okula giden yolu çiz: ev → fırın → park → okul." },
            { ikon: "❤️", terim: "Preference map", tr: "tercih haritası", tanim: "İnsanların nerede yaşamak istediğini gösteren harita; tercih edilen bölgeler sıcak, edilmeyenler soğuk renkle.", ornek: "Öğrencilere \"hangi şehirde yaşamak isterdin?\" diye sorup sonuçları haritaya boyamak." }
          ] },
        { tip: "adimlar", baslik: "Zihinsel harita nasıl çizilir?", adimlar: [
            { baslik: "Başlangıç", metin: "Evinden başlarsın; kalem ilerlemeye başlar." },
            { baslik: "Bilinen noktalar", metin: "Fırın, park gibi her gün gördüklerin detaylı çıkar." },
            { baslik: "Bilinmeyenler", metin: "Gitmediğin sokaklar boş kalır, kenarlar belirsizdir." },
            { baslik: "Sonuç", metin: "Çizim gerçek haritayı değil, ==senin bildiğini== yansıtır." }
          ] },
        { tip: "tuzak", metin: "Bir öğrenci evden okula giden yolu ezberden çiziyor; iyi bildiği sokaklar ayrıntılı, hiç gitmediği yerler boş.", yanlis: "Bu bir *preference map*'tir.", dogru: "Bu bir ==*cognitive map*==. *Preference map* nerede yaşamak istediğini gösterir; *sense of place* ise bir duygudur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Region*: ortak bir özelliği paylaşan alan; üç türü vardır.",
            "*Formal (uniform)*: ortak özellik, sınır belli; özellik baskın olmalı, herkeste değil (%55 örneği).",
            "*Functional (nodal)*: ortak merkez; merkezde güçlü, dışa doğru zayıf (gazete, radyo, pizzacı, havalimanı).",
            "*Perceptual (vernacular)*: ortak algı; sınırı kişiden kişiye değişir (*The South*, Doğu, Ege).",
            "İpucu: adında yön geçiyorsa büyük ihtimalle *perceptual*.",
            "*Sense of place* bir yerin uyandırdığı duygudur.",
            "*Cognitive map* kafandaki haritadır: bildiğin yer detaylı, bilmediğin boş.",
            "*Preference map* insanların nerede yaşamak istediğini gösterir.",
            "Bölgeler zamanla değişir, üst üste biner, ölçeğe göre farklı görünür."
          ] }
      ]
    }
  ]
};
