/* Kitora not defteri · ch401 · 4.1 Gazların Özellikleri
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry, Exam 3: gazlar) + MEB 10. sınıf standart içeriği (kinetik teori, basınç, sıcaklık). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch401",
  amac: "Bu konu gazların ortak özelliklerini ve *kinetic molecular theory* (kinetik teori) ile açıklamasını anlatıyor. Basıncı ve birimlerini, barometre ile manometreyi, sıcaklığı Kelvin'e çevirmeyi öğrenerek sonraki konuların (gaz yasaları) zeminini hazırlayacaksın.",
  bolumler: [
    {
      baslik: "Gazların genel özellikleri",
      kisa: "Gaz bulunduğu kabı doldurur, kolay sıkışır ve her yöne yayılır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "💨", baslik: "Gaz", maddeler: ["Kabın tamamını doldurur", "Çok kolay sıkıştırılır", "Taneciklerin arası çok açıktır"] },
          sag: { ikon: "💧", baslik: "Sıvı", maddeler: ["Belirli hacmi vardır, kabın şeklini alır", "Çok az sıkıştırılır", "Tanecikler birbirine yakındır"] },
          oyun: [
            { metin: "Bulunduğu kabın bütün hacmini doldurur.", cevap: "sol", neden: "Gaz taneciklerini hiçbir şey bir arada tutmaz; her yere yayılır." },
            { metin: "Belirli bir hacmi vardır ama kabın şeklini alır.", cevap: "sag", neden: "Sıvı tanecikleri yakındır ve hacim sabittir." },
            { metin: "Basınç uygulanınca hacmi kolayca küçülür.", cevap: "sol", neden: "Taneciklerin arası çok boştur; bisiklet pompası buna dayanır." },
            { metin: "Sıkıştırılabilirliği çok düşüktür, tanecikleri neredeyse birbirine değer.", cevap: "sag", neden: "Sıvılarda tanecikler arası boşluk çok azdır." },
            { metin: "Yoğunluğu çok düşüktür; tanecikler arası boşluk çok büyüktür.", cevap: "sol", neden: "Aynı hacimde çok az tanecik bulunur." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌬️", terim: "Diffusion", tr: "yayılma (difüzyon)", tanim: "Gaz taneciklerinin rastgele hareketle başka bir gazın arasına karışıp bulundukları hacme eşit dağılması.", ornek: "Kolonya şişesi açılınca koku odaya yayılır." },
            { ikon: "🚲", terim: "Compressibility", tr: "sıkıştırılabilirlik", tanim: "Basınç artınca gazın hacminin küçülmesi; tanecikler arası boşluk çok büyük olduğu için kolayca olur.", ornek: "Bisiklet pompasının ucunu kapatıp pistonu itmek." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Gases have no definite shape or volume; they fill the whole container.*" },
            { ikon: "💬", baslik: "Sıkıştırılabilirlik", metin: "*Gases are easily compressed because there is a lot of empty space between the particles.*" }
          ] }
      ]
    },
    {
      baslik: "Kinetik teori ve ideal gaz",
      kisa: "Kinetik teori, gazı sürekli hareket eden bağımsız tanecikler olarak açıklar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎱", terim: "Kinetic molecular theory", tr: "kinetik teori", tanim: "Gazların davranışını, sürekli ve rastgele hareket eden çok sayıda taneciğin çarpışmasıyla açıklayan model.", ornek: "Balonun duvarına çarpan tanecikler basıncı oluşturur." },
            { ikon: "🧊", terim: "Ideal gas", tr: "ideal gaz", tanim: "Kinetik teorinin varsayımlarına tam uyan model gaz. Gerçek gazlar bu modele belirli koşullarda yaklaşır.", ornek: "He ve H₂ gibi küçük, zayıf etkileşimli gazlar ideale yakındır." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "1️⃣", baslik: "Taneciklerin kendi hacmi ihmal edilir", metin: "Kap çok büyük, tanecikler çok küçüktür." },
            { ikon: "2️⃣", baslik: "Tanecikler sürekli ve rastgele hareket eder", metin: "Her yöne düz çizgiler çizerek hareket ederler." },
            { ikon: "3️⃣", baslik: "Çarpışmalar esnektir", metin: "Çarpışmada toplam kinetik enerji kaybolmaz." },
            { ikon: "4️⃣", baslik: "Tanecikler arasında çekim ya da itme yoktur", metin: "Birbirlerine yalnızca çarparak etki ederler." },
            { ikon: "5️⃣", baslik: "Ortalama kinetik enerji mutlak sıcaklıkla (K) orantılıdır", metin: "Sıcaklık artarsa moleküller daha hızlı hareket eder." }
          ] },
        { tip: "tablo", baslik: "Gerçek gaz ne zaman ideale yaklaşır?", head: ["", "Yüksek sıcaklık, düşük basınç", "Düşük sıcaklık, yüksek basınç"], rows: [
            ["Taneciklerin arası", "uzak", "yakın"],
            ["Çekim kuvvetleri", "ihmal edilebilir", "önemli olur"],
            ["Gerçek gaz davranışı", "ideale çok yakın", "idealden sapar, sıvılaşabilir"]
          ], not: "Gerçek gazlar ideal gibi davranmaz ama bu koşulda hatalı sonuç çok küçüktür." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Real gases behave most like ideal gases at high temperature and low pressure.*" }
          ] }
      ]
    },
    {
      baslik: "Gaz basıncı ve birimleri",
      kisa: "Basınç, moleküllerin birim yüzeye çarpma kuvvetidir; 1 atm = 760 mmHg.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "P", alt: "basınç" }, "=",
            { t: "F", alt: "kuvvet" }, "÷",
            { t: "A", alt: "yüzey alanı" }
          ], aciklama: "Gaz basıncı, tanecikler kabın duvarlarına çarptığı için oluşur. Birimi pascal (Pa = N/m²) ya da atm, mmHg, kPa'dır." },
        { tip: "tablo", baslik: "Basınç birimleri arasında dönüşüm", head: ["atm", "mmHg (torr)", "kPa"], rows: [
            ["1", "760", "101,3"],
            ["0,5", "380", "50,65"],
            ["2", "1520", "202,6"],
            ["0,25", "190", "25,3"]
          ], vurgu: 0, not: "Temel eşitlik: 1 atm = 760 mmHg = 101,3 kPa (101 325 Pa). 1 mmHg = 1 torr." },
        { tip: "ornek", baslik: "1140 mmHg kaç atm, kaç kPa?", durum: "Bir gaz tüpünün basınç göstergesi 1140 mmHg okuyor.", adimlar: [
            "atm: 1140 ÷ 760 = 1,5 atm.",
            "kPa: 1,5 × 101,3 = 151,95 ≈ 152 kPa.",
            "Kontrol: 1,5 atm × 760 = 1140 mmHg ✓"
          ], sonuc: "1,5 atm ≈ 152 kPa." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Gas pressure is caused by the collisions of gas particles with the walls of the container.*" }
          ] }
      ]
    },
    {
      baslik: "Barometre ve manometre",
      kisa: "Barometre açık hava basıncını, manometre kaptaki gaz basıncını ölçer.",
      bloklar: [
        { tip: "adimlar", baslik: "Torricelli'nin barometresi", adimlar: [
            { baslik: "Tüpü cıvayla doldur", metin: "Bir ucu kapalı uzun cam tüp cıva ile doldurulur." },
            { baslik: "Ters çevir", metin: "Tüp, cıva dolu bir kabın içine ters batırılır." },
            { baslik: "Cıva alçalır, durur", metin: "Deniz seviyesinde cıva yaklaşık 760 mm yükseklikte kalır: açık hava basıncı bu sütunu taşır." },
            { baslik: "Bu yüzden 760 mmHg", metin: "1 atm = 760 mmHg. Yükseğe çıkınca açık hava basıncı azalır, sütun kısalır. Cıva yerine su kullanılsaydı sütun yaklaşık 10,3 m olurdu." }
          ] },
        { tip: "ornek", baslik: "Açık uçlu manometre", durum: "Açık hava basıncı 760 mmHg. Açık uçlu cıvalı manometreye bağlı bir kapta iki kol arasında 40 mm seviye farkı var.", adimlar: [
            "Gaz tarafındaki cıva daha alçaksa gaz basıncı atmosferden büyüktür: P(gaz) = 760 + 40 = 800 mmHg.",
            "Atmosfere: 800 ÷ 760 ≈ 1,05 atm.",
            "Gaz tarafındaki cıva daha yüksekse gaz basıncı atmosferden küçüktür: 760 − 40 = 720 mmHg.",
            "Kontrol: 720 ÷ 760 ≈ 0,95 atm ✓"
          ], sonuc: "Gaz tarafı alçaksa 800 mmHg; yüksekse 720 mmHg." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*A barometer measures atmospheric pressure; a manometer measures the pressure of a gas in a container.*" }
          ] }
      ]
    },
    {
      baslik: "Sıcaklık: Kelvin ve kinetik enerji",
      kisa: "Gaz hesaplarında sıcaklık Kelvin'dir; ortalama kinetik enerji K ile orantılıdır.",
      bloklar: [
        { tip: "tablo", baslik: "°C → K: T(K) = t(°C) + 273", head: ["Durum", "°C", "K"], rows: [
            ["Mutlak sıfır", "−273", "0"],
            ["Buzun erimesi (NŞA)", "0", "273"],
            ["Oda sıcaklığı", "25", "298"],
            ["Suyun kaynaması", "100", "373"]
          ], not: "Kelvin ölçeğinde negatif sıcaklık yoktur; 0 K'de moleküller (modelde) durur." },
        { tip: "grafik", baslik: "Sıcaklık artınca hız dağılımı", xlabel: "Molekül hızı", ylabel: "Molekül sayısı (göreli)", xmax: 10, ymax: 10,
          ogeler: [
            { id: "t1", tip: "egri", renk: 0, noktalar: [[0, 0], [0.5, 1.12], [1, 3.79], [1.5, 6.45], [2, 7.78], [2.5, 7.37], [3, 5.76], [3.5, 3.81], [4, 2.16], [4.5, 1.06], [5, 0.46], [5.5, 0.17], [6, 0.06], [6.5, 0.02], [7, 0], [7.5, 0], [8, 0], [8.5, 0], [9, 0], [9.5, 0], [10, 0]], gizli: true },
            { id: "t2", tip: "egri", renk: 2, noktalar: [[0, 0], [0.5, 0.25], [1, 0.94], [1.5, 1.92], [2, 2.97], [2.5, 3.87], [3, 4.47], [3.5, 4.7], [4, 4.54], [4.5, 4.09], [5, 3.46], [5.5, 2.75], [6, 2.06], [6.5, 1.47], [7, 0.99], [7.5, 0.64], [8, 0.39], [8.5, 0.23], [9, 0.13], [9.5, 0.07], [10, 0.03]], gizli: true },
            { id: "l1", tip: "yazi", x: 2, y: 8.6, metin: "T₁ (düşük)", gizli: true },
            { id: "l2", tip: "yazi", x: 4.6, y: 5.4, metin: "T₂ (yüksek)", gizli: true },
            { id: "ok", tip: "ok", renk: 1, from: [2.3, 7.4], to: [3.2, 5.2], gizli: true }
          ],
          durumlar: [
            { metin: "Düşük sıcaklıkta (T₁) çoğu molekül yavaştır; tepe noktası solda ve yüksektedir.", goster: ["t1", "l1"] },
            { metin: "Sıcaklık artınca (T₂) eğri sağa kayar, alçalır ve yayılır: daha çok molekül hızlıdır.", goster: ["t2", "l2"] },
            { metin: "Tepe sağa kaydı: ==ortalama hız ve ortalama kinetik enerji artar.== İki eğrinin altındaki alan (toplam molekül sayısı) aynıdır.", goster: ["ok"] }
          ] },
        { tip: "tuzak", metin: "Ortalama kinetik enerji, sıcaklığın °C değeriyle değil Kelvin değeriyle orantılıdır. 27 °C → 327 °C (300 K → 600 K) enerjiyi iki katına çıkarır; 25 °C → 50 °C ise yalnızca 298 K → 323 K, yani yaklaşık %8 artırır.", yanlis: "25 °C'den 50 °C'ye çıkınca kinetik enerji 2 katına çıkar.", dogru: "Önce Kelvin'e çevir: 323 ÷ 298 ≈ 1,08 kat." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*As the temperature rises, the average kinetic energy of the particles increases.*" },
            { ikon: "💬", baslik: "Birim", metin: "*Temperature must be converted to kelvin: T(K) = t(°C) + 273.*" }
          ] }
      ]
    },
    {
      baslik: "Gazı tanımlayan dört nicelik",
      kisa: "Bir gaz basınç, hacim, sıcaklık ve mol sayısıyla tanımlanır.",
      bloklar: [
        { tip: "tablo", baslik: "P, V, T, n", head: ["Nicelik", "Sembol", "Gaz hesaplarında birim", "Not"], rows: [
            ["Basınç", "P", "atm (ya da mmHg, kPa)", "Birimi sonradan çevir"],
            ["Hacim", "V", "L", "1 L = 1000 mL; 250 mL = 0,25 L"],
            ["Sıcaklık", "T", "K", "T(K) = t(°C) + 273"],
            ["Madde miktarı", "n", "mol", "n = m ÷ M"]
          ], not: "Gaz yasaları, bu dört niceliğin ikişer ikişer nasıl değiştiğini anlatır (sonraki konu)." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The state of a gas is described by its pressure, volume, temperature and amount in moles.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Gaz kabı doldurur, kolay sıkışır, yayılır (*diffusion*); tanecikleri arası çok boştur.",
            "*Kinetic molecular theory*: tanecikler sürekli, rastgele hareket eder; hacimleri ihmal edilir; çekim yoktur; çarpışmalar esnektir.",
            "Basınç taneciklerin duvara çarpmasıyla oluşur: P = F ÷ A.",
            "1 atm = 760 mmHg = 760 torr = 101,3 kPa.",
            "Barometre açık hava basıncını, manometre kaptaki gaz basıncını ölçer.",
            "Gaz hesabında T(K) = t(°C) + 273; ortalama kinetik enerji K ile orantılıdır.",
            "Gerçek gaz yüksek sıcaklık ve düşük basınçta ideale yaklaşır.",
            "Gaz dört niceliğe bağlıdır: P, V, T, n."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "1,5 atm basınç kaç mmHg'ye eşittir?",
      opts: ["760", "1140", "1520", "507"], a: 1,
      why: "1 atm = 760 mmHg olduğundan 1,5 × 760 = 1140 mmHg. 507 (D) bölme yapıldığında çıkar (760 ÷ 1,5); atm'den mmHg'ye geçerken çarpılır." },
    { q: "Kapalı bir kaptaki gaz 27 °C'den 327 °C'ye ısıtılırsa gaz moleküllerinin ortalama kinetik enerjisi nasıl değişir?",
      opts: ["Değişmez", "12 katına çıkar", "2 katına çıkar", "Yaklaşık 1,2 katına çıkar"], a: 2,
      why: "Ortalama kinetik enerji Kelvin ile orantılıdır: 300 K → 600 K, yani 2 kat. 12 kat (B) °C değerlerini oranlamaktır (327 ÷ 27 ≈ 12); bu yanlıştır." },
    { q: "Açık hava basıncının 760 mmHg olduğu bir laboratuvarda açık uçlu cıvalı manometrenin gaz tarafındaki cıva, açık uçtakinden 50 mm daha yüksektir. Gazın basıncı kaç mmHg'dir?",
      opts: ["810", "760", "50", "710"], a: 3,
      why: "Gaz tarafındaki cıva yüksekse gaz basıncı atmosferden küçüktür: 760 − 50 = 710 mmHg. 810 (A) seviye farkının yanlış yönde eklenmesidir." },
    { q: "Tabloda üç gazın basıncı farklı birimlerle verilmiştir (1 atm = 760 mmHg = 101,3 kPa). Basıncı en büyük olan gaz hangisidir?",
      fig: { type: "table", head: ["Gaz", "Basınç"], rows: [["X", "0,8 atm"], ["Y", "600 mmHg"], ["Z", "90 kPa"]], caption: "Üç gazın basıncı" },
      opts: ["X", "Y", "Z", "Üçü eşittir"], a: 2,
      why: "Hepsini mmHg'ye çevir: X = 0,8 × 760 = 608; Y = 600; Z = 90 ÷ 101,3 × 760 ≈ 675 mmHg. En büyük Z'dir. Sayısı en büyük olanı seçmek yanlıştır; birimler farklı olduğu için önce ortak birime çevrilir." },
    { q: "Gerçek bir gaz hangi koşulda ideal gaza en çok benzer?",
      opts: ["Yüksek sıcaklık ve düşük basınç", "Düşük sıcaklık ve yüksek basınç", "Düşük sıcaklık ve düşük basınç", "Yüksek sıcaklık ve yüksek basınç"], a: 0,
      why: "Yüksek sıcaklık ve düşük basınçta tanecikler hızlı ve birbirinden uzaktır; çekim kuvvetleri ve tanecik hacmi ihmal edilebilir. Düşük sıcaklık ve yüksek basınç (B) gazı yoğunlaşmaya yaklaştırır." }
  ]
};
