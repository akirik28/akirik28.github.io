/* Kitpath not defteri · ep04 · Bölgeler
   Kaynak: ap-videolar/src/episodes/ep04 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep04",
  amac: "Bu konu coğrafyacıların dünyayı *region*'lara nasıl böldüğünü anlatıyor: ortak özelliğe, ortak merkeze ya da ortak algıya göre. Üç bölge türünü ayırt etmeyi ve insanların yerleri nasıl algıladığını öğreneceksin.",
  bolumler: [
    {
      baslik: "Bölge nedir, kaç türü var?",
      kisa: "*Region* ortak özellikli alandır; *formal*, *functional* ve *perceptual* olabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗾", terim: "Region", tr: "bölge", tanim: "Ortak bir özelliği paylaşan alan. Coğrafyacılar dünyayı anlamak için onu bölgelere ayırır; üç türü vardır.", ornek: "Ege: herkes bir yer hayal eder ama sınırını kimse tam çizemez." }
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
      kisa: "*Formal region*'da özellik baskındır, sınır bellidir; herkeste olması gerekmez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎨", terim: "Formal region = Uniform region", tr: "biçimsel / tekdüze bölge", tanim: "Ortak bir özelliğin baskın olduğu alan: aynı dil, aynı iklim, aynı yönetim. Özellik herkeste olmayabilir; çoğunlukta olması yeter. ==Sınırı bellidir.==", ornek: "Bir ülke ya da bir eyalet; Akdeniz ikliminin görüldüğü alan." }
          ] },
        { tip: "ornek", baslik: "Seçim haritasında eyalet neden tek renk?", durum: "Bir eyalette 1000 seçmenin 550'si bir partiye, 450'si diğer partilere oy verdi. Harita eyaleti nasıl boyar ve bu hangi tür bölgedir?",
          adimlar: ["Oy oranı: 550 ÷ 1000 = %55; çoğunluk (%50'den fazla).", "Harita, baskın özelliğe göre eyaleti tümüyle o partinin rengine boyar.", "Sınırlar belli ve ortak bir özellik (baskın tercih) var."],
          sonuc: "Bu bir ==*formal (uniform) region*==. Özellik herkeste değil, çoğunlukta; yine de bölge tek renk gösterilir." },
        { tip: "tuzak", metin: "\"Formal\" kelimesi \"resmi\" çağrışımı yapsa da asıl ölçüt ortak özelliktir.", yanlis: "*Formal region*'da özellik bölgedeki herkeste bulunmalıdır.", dogru: "Özellik ==baskın== olmalıdır; herkeste olması gerekmez. Sınır genelde bellidir." }
      ]
    },
    {
      baslik: "*Functional region*: ortak merkez",
      kisa: "*Functional region* bir merkez etrafında örgütlenir; merkezde güçlü, dışa doğru zayıf.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📡", terim: "Functional region = Nodal region", tr: "işlevsel / düğümsel bölge", tanim: "Bir merkezin (*node*) etrafında örgütlenir. Merkezde etki güçlüdür, ==dışa doğru zayıflar.==", ornek: "Bir gazetenin dağıtım alanı, bir radyonun yayın alanı, bir pizzacının paket servis bölgesi." }
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
        { tip: "tuzak", metin: "Quiz sorusu: \"Bir havalimanının yolcu çektiği alan ne tür bölgedir?\"", yanlis: "*Perceptual region*; çünkü insanlar havalimanını farklı algılar.", dogru: "==*Functional region*==: bir merkezin (havalimanı) etrafında örgütlenmiştir." }
      ]
    },
    {
      baslik: "*Perceptual region*: ortak algı",
      kisa: "*Perceptual region* insanların zihninde var olur; sınırı kişiden kişiye değişir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💭", terim: "Perceptual region = Vernacular region", tr: "algısal / halk bölgesi", tanim: "Haritada değil, insanların zihninde var olur. ==Sınırı kişiden kişiye değişir.== İpucu: adında yön ya da genel bir kavram geçer.", ornek: "*The South*, *Middle East*, Doğu, Ege: hangi yerler dahil, herkes farklı çizer." }
          ] },
        { tip: "tuzak", metin: "Bir ankette \"Doğu\" dedikleri yerin sınırını herkes farklı çiziyor.", yanlis: "Bu bir *formal region*'dır; çünkü ortak özellik var.", dogru: "Sınır kişiye göre değiştiği için bu bir ==*perceptual (vernacular) region*==." }
      ]
    },
    {
      baslik: "Üçünü karıştırma",
      kisa: "Ortak özellik formal, ortak merkez functional, ortak algı perceptual.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎨", baslik: "*Formal region*", maddeler: ["Ortak özellik", "Sınır belli; baskın özellik yeter"] },
          sag: { ikon: "📡", baslik: "*Functional region*", maddeler: ["Ortak merkez", "Merkezde güçlü, dışa doğru zayıf"] },
          oyun: [
            { metin: "Fransa Cumhuriyeti'nin toprakları.", cevap: "sol", neden: "Ortak yönetim ve belli sınır: *formal*." },
            { metin: "Bir televizyon kanalının yayın alanı.", cevap: "sag", neden: "Merkez (verici) etrafında örgütlenir: *functional*." },
            { metin: "Akdeniz ikliminin görüldüğü alan.", cevap: "sol", neden: "Ortak iklim özelliği: *formal*." },
            { metin: "Bir pizzacının paket servis bölgesi.", cevap: "sag", neden: "Dükkân merkez, etki dışa doğru azalır: *functional*." }
          ] },
        { tip: "tablo", baslik: "Tek cümlelik fark", head: ["Tür", "Ortak ne?", "Örnek"], rows: [
            ["*Formal*", "Özellik", "Eyalet, ülke, iklim bölgesi"],
            ["*Functional*", "Merkez", "Gazete, radyo, pizzacı"],
            ["*Perceptual*", "Algı", "*The South*, Doğu, Ege"]
          ], not: "Bölgeler sabit değildir: zamanla değişir, üst üste biner, ölçeğe göre farklı görünür." }
      ]
    },
    {
      baslik: "Algı dünyası: yer duygusu ve haritalar",
      kisa: "Yer duygusu his, *cognitive map* bildiğin yer, *preference map* tercihtir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💞", terim: "Sense of place", tr: "yer duygusu", tanim: "Bir yerin sende uyandırdığı duygu.", ornek: "Kendi mahallene girdiğinde hissettiğin şey." },
            { ikon: "🧠", terim: "Cognitive map", tr: "zihinsel harita", tanim: "Kafandaki harita. ==Bildiğin yerler detaylı, bilmediklerin boştur.==", ornek: "Gözünü kapat, evden okula giden yolu çiz: ev → fırın → park → okul." },
            { ikon: "❤️", terim: "Preference map", tr: "tercih haritası", tanim: "İnsanların nerede yaşamak istediğini gösteren harita; tercih edilen bölgeler sıcak, edilmeyenler soğuk renkle.", ornek: "Öğrencilere \"hangi şehirde yaşamak isterdin?\" diye sorup sonuçları haritaya boyamak." }
          ] },
        { tip: "tuzak", metin: "Bir öğrenci evden okula giden yolu ezberden çiziyor; iyi bildiği sokaklar ayrıntılı, hiç gitmediği yerler boş.", yanlis: "Bu bir *preference map*'tir.", dogru: "Bu bir ==*cognitive map*==. *Preference map* nerede yaşamak istediğini gösterir; *sense of place* ise bir duygudur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
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
