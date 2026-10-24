/* Kitpath not defteri · st902 · 9.3 Güven Aralığıyla Eğim Hakkında İddia
   Kaynak: AP Statistics CED Unit 9 (Topic 9.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st902",
  amac: "Bu konu eğim için kurulmuş güven aralığıyla iddia gerekçelendirmeyi anlatıyor: aralık 0’ı içeriyor mu, iddia edilen eğim aralığın içinde mi? Aralığın iki yönlü testle ilişkisini, aralık genişliğini etkileyenleri ve gerekçe cümlesini öğreneceksin.",
  bolumler: [
    {
      baslik: "Sıfır neden özel?",
      kisa: "β = 0, x ile y arasında doğrusal ilişki olmadığı anlamına gelir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "0️⃣", terim: "Zero slope", tr: "sıfır eğim", tanim: "β = 0 ise x değişirken ortalama y değişmez: popülasyonda doğrusal ilişki yoktur.", ornek: "Kahvaltı yapılan gün sayısı ortalama puanı değiştirmiyor." },
            { ikon: "✅", terim: "Plausible value", tr: "makul değer", tanim: "Güven aralığının içindeki her değer β için makuldür; aralığın dışındakiler verilerle uyuşmaz.", ornek: "Aralık (1,68; 3,99) ise β = 3 makul, β = 5 değil." }
          ] },
        { tip: "grafik", baslik: "Üç aralık, üç sonuç", xlabel: "Gerçek eğim β", ylabel: "", xmax: 8, ymax: 8,
          xticks: [{ v: 0, label: "−1" }, { v: 1, label: "0" }, { v: 2, label: "1" }, { v: 3, label: "2" }, { v: 4, label: "3" }, { v: 5, label: "4" }, { v: 6, label: "5" }, { v: 7, label: "6" }],
          yticks: [],
          ogeler: [
            { id: "z", tip: "cizgi", renk: 1, kesik: true, from: [1, 0], to: [1, 8], etiket: "β = 0" },
            { id: "A", tip: "cizgi", renk: 0, from: [2.68, 6.5], to: [4.99, 6.5], gizli: true },
            { id: "Ap", tip: "nokta", renk: 0, x: 3.84, y: 6.5, gizli: true },
            { id: "At", tip: "yazi", x: 5.2, y: 6.4, hiza: "start", metin: "(1,68; 3,99)", gizli: true },
            { id: "An", tip: "yazi", x: 2.68, y: 7.3, hiza: "start", metin: "Çalışma saati ve puan", gizli: true },
            { id: "B", tip: "cizgi", renk: 2, from: [0.24, 4.5], to: [3.36, 4.5], gizli: true },
            { id: "Bp", tip: "nokta", renk: 2, x: 1.8, y: 4.5, gizli: true },
            { id: "Bt", tip: "yazi", x: 3.6, y: 4.4, hiza: "start", metin: "(−0,76; 2,36)", gizli: true },
            { id: "Bn", tip: "yazi", x: 0.24, y: 5.3, hiza: "start", metin: "Kahvaltı ve puan", gizli: true },
            { id: "C", tip: "cizgi", renk: 3, from: [0.52, 2.5], to: [0.91, 2.5], gizli: true },
            { id: "Cp", tip: "nokta", renk: 3, x: 0.715, y: 2.5, gizli: true },
            { id: "Ct", tip: "yazi", x: 1.3, y: 2.4, hiza: "start", metin: "(−0,48; −0,09)", gizli: true },
            { id: "Cn", tip: "yazi", x: 0.5, y: 3.2, hiza: "start", metin: "Ekran süresi ve uyku", gizli: true }
          ],
          durumlar: [
            { metin: "Dikey kesikli çizgi β = 0: doğrusal ilişki yok. Aralıklar bu çizgiyle kıyaslanır." },
            { metin: "Aralık tamamen 0’ın ==sağında==: β pozitif olabilir; doğrusal bir ilişki olduğuna dair ikna edici kanıt var.", goster: ["A", "Ap", "At", "An"] },
            { metin: "Aralık tamamen 0’ın ==solunda==: β negatif; ekran süresi arttıkça ortalama uyku azalıyor, ilişki var.", goster: ["C", "Cp", "Ct", "Cn"] },
            { metin: "Aralık 0’ı ==içeriyor==: 0 makul değerlerden biri; ilişki olduğuna dair ikna edici kanıt yok.", goster: ["B", "Bp", "Bt", "Bn"] }
          ] }
      ]
    },
    {
      baslik: "Aralık ile iki yönlü test aynı kararı verir",
      kisa: "%95 aralık, α = 0,05 iki yönlü H₀: β = 0 testiyle aynı sonucu verir.",
      bloklar: [
        { tip: "tablo", baslik: "Güven düzeyi ve iki yönlü α", head: ["Güven düzeyi", "Eşdeğer iki yönlü α"], rows: [
            ["%90", "0,10"],
            ["%95", "0,05"],
            ["%99", "0,01"]
          ], vurgu: 1, not: "Kural: C güven düzeyi için α = 1 − C. Aralık 0’ı içermiyorsa aynı α ile H₀: β = 0 reddedilir." },
        { tip: "ikili", sol: { ikon: "0️⃣", baslik: "Aralık 0’ı içeriyor", maddeler: ["H₀: β = 0 reddedilemez", "Doğrusal ilişki için ikna edici kanıt yok"] },
          sag: { ikon: "🚫", baslik: "Aralık 0’ı içermiyor", maddeler: ["H₀: β = 0 reddedilir", "Doğrusal ilişki için ikna edici kanıt var"] },
          oyun: [
            { metin: "Eğim için %95 aralık (−0,76; 2,36).", cevap: "sol", neden: "0, −0,76 ile 2,36 arasında." },
            { metin: "Eğim için %95 aralık (1,68; 3,99).", cevap: "sag", neden: "Aralığın tamamı 0’ın sağında." },
            { metin: "Eğim için %95 aralık (−0,48; −0,09).", cevap: "sag", neden: "Aralığın tamamı 0’ın solunda." },
            { metin: "Eğim için %95 aralık (−0,10; 0,10).", cevap: "sol", neden: "0 tam ortada." },
            { metin: "Eğim için %90 aralık (0,02; 1,60); test α = 0,10.", cevap: "sag", neden: "%90 aralık α = 0,10 ile eşdeğer ve 0’ı içermiyor." }
          ] },
        { tip: "tuzak", baslik: "0’ı içermek eğimin 0 olduğu demek değildir", metin: "Aralık 0’ı içeriyorsa 0, β için makul değerlerden yalnızca biridir. Aralıktaki başka değerler de makuldür.",
          yanlis: "Aralık 0’ı içeriyor, yani eğim 0’dır ve ilişki yoktur.",
          dogru: "İlişki olduğuna dair ikna edici kanıt yok; ama ilişkinin olmadığı da kanıtlanmadı." }
      ]
    },
    {
      baslik: "0 dışındaki iddialar",
      kisa: "İddia edilen eğim aralığın içindeyse veriyle uyumludur; dışındaysa makul değildir.",
      bloklar: [
        { tip: "grafik", baslik: "İddia aralıkta mı? (çalışma saati ve puan)", xlabel: "Gerçek eğim β (puan / saat)", ylabel: "", xmax: 6, ymax: 6,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          yticks: [],
          ogeler: [
            { id: "I", tip: "cizgi", renk: 0, from: [1.68, 4], to: [3.99, 4] },
            { id: "b", tip: "nokta", renk: 0, x: 2.84, y: 4, etiket: "b = 2,84" },
            { id: "c3", tip: "nokta", renk: 1, x: 3, y: 2, etiket: "β = 3", gizli: true },
            { id: "c1", tip: "nokta", renk: 2, x: 1, y: 2, etiket: "β = 1", gizli: true },
            { id: "c5", tip: "nokta", renk: 2, x: 5, y: 2, etiket: "β = 5", gizli: true }
          ],
          durumlar: [
            { metin: "Önceki konuda kurduğumuz %95 aralık: (1,68; 3,99) ve merkezde b = 2,84." },
            { metin: "İddia: “Her ek saat ortalama 3 puan getirir (β = 3).” 3, aralığın ==içinde==: veriyle uyumlu, iddianın yanlış olduğuna dair kanıt yok.", goster: ["c3"] },
            { metin: "β = 1 ve β = 5 iddiaları aralığın ==dışında==: bu iddialar veriyle uyuşmuyor, makul değil.", goster: ["c1", "c5"] }
          ] },
        { tip: "tablo", baslik: "Aynı aralık (1,68; 3,99), üç iddia", head: ["İddia", "Aralıkta mı?", "Sonuç"], rows: [
            ["β = 3", "Evet", "Veriyle uyumlu; iddianın yanlışlığına kanıt yok"],
            ["β = 1", "Hayır (1 < 1,68)", "Makul değil; gerçek eğim muhtemelen 1’den büyük"],
            ["β = 5", "Hayır (5 > 3,99)", "Makul değil; gerçek eğim muhtemelen 5’ten küçük"]
          ], vurgu: 0 },
        { tip: "ornek", baslik: "Gerekçeyi yaz", durum: "Bir hoca: “Haftalık her ek çalışma saati ortalama deneme puanını 5 puan artırır.” Elimizde %95 aralık (1,68; 3,99) var. İddia desteklenir mi?",
          adimlar: ["İddia: β = 5 puan / saat.", "Aralık: 5, (1,68; 3,99) aralığının dışında (5 > 3,99).", "Gerekçe: β = 5, eğim için makul değerler arasında değil."],
          sonuc: "Verilen aralık, hocanın β = 5 iddiasını desteklemiyor: %95 güvenle gerçek eğim 1,68 ile 3,99 puan / saat arasındadır, 5 bu aralığın dışında." }
      ]
    },
    {
      baslik: "Aralığın genişliği neyle değişir?",
      kisa: "Güven düzeyi arttıkça genişler; n ve x yayılımı arttıkça, S azaldıkça daralır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "Hata payı", alt: "aralığın yarı genişliği" }, "=", { t: "t∗", alt: "güven düzeyi ↑ ⇒ ↑; n ↑ ⇒ ↓" }, "·", { t: "s", alt: "S ↑ ⇒ ↑" }, "÷", { t: "s_x · √(n − 1)", alt: "x yayılımı ↑ ya da n ↑ ⇒ ↓" }], aciklama: "Aralık = b ± hata payı. Paydadaki büyüklükleri artırmak aralığı daraltır; paydaki büyüklükleri artırmak genişletir." },
        { tip: "ikili", sol: { ikon: "↔️", baslik: "Aralık genişler", maddeler: ["Güven düzeyi artar", "Artıkların SD’si (S) artar", "x değerleri dar aralıktan"] },
          sag: { ikon: "🔍", baslik: "Aralık daralır", maddeler: ["Güven düzeyi azalır", "Gözlem sayısı artar", "x değerleri geniş aralıktan"] },
          oyun: [
            { metin: "Güven düzeyini %95’ten %99’a çıkarmak.", cevap: "sol", neden: "t∗ büyür." },
            { metin: "Gözlem sayısını 10’dan 40’a çıkarmak.", cevap: "sag", neden: "√(n − 1) büyür, t∗ küçülür." },
            { metin: "Noktaların doğru etrafında daha çok saçılması (S büyür).", cevap: "sol", neden: "Pay büyür, SE_b büyür." },
            { metin: "Bütün öğrencilerin çalışma süresi 5–6 saat yerine 1–10 saat arasından seçilir.", cevap: "sag", neden: "s_x büyür, SE_b küçülür." },
            { metin: "Güven düzeyini %95’ten %90’a indirmek.", cevap: "sag", neden: "t∗ küçülür." }
          ] },
        { tip: "ornek", baslik: "Aynı veri, %95 ve %99", durum: "b = 2,8364; SE_b = 0,5020; df = 8. %95 için t∗ = 2,306; %99 için t∗ = 3,355.",
          adimlar: ["%95: 2,8364 ± 2,306 × 0,5020 = 2,8364 ± 1,158 ⇒ (1,68; 3,99); genişlik ≈ 2,32.", "%99: 2,8364 ± 3,355 × 0,5020 = 2,8364 ± 1,684 ⇒ (1,15; 4,52); genişlik ≈ 3,37.", "Her iki aralık da 0’ı içermiyor; ama %99 aralık daha geniş."],
          sonuc: "Daha yüksek güven için daha geniş (daha az kesin) bir aralık ödenir." }
      ]
    },
    {
      baslik: "Çıktıdan aralığa, aralıktan gerekçeye",
      kisa: "Çıktıda b ve SE_b varsa aralığı kur, 0’a ya da iddiaya göre karar ver.",
      bloklar: [
        { tip: "tablo", baslik: "Regression Analysis: Puan versus Kahvalti (n = 12)", head: ["Predictor", "Coef", "SE Coef", "T", "P"], rows: [
            ["Constant", "58.00", "4.10", "14.15", "0.000"],
            ["Kahvalti", "0.80", "0.70", "1.14", "0.280"]
          ], vurgu: 1, not: "S = 6.20   R-Sq = 11.5%.  Kahvalti: haftada kahvaltı yapılan gün sayısı; Puan: deneme puanı." },
        { tip: "ornek", baslik: "Kahvaltı puanı etkiliyor mu?", durum: "Rastgele seçilen 12 öğrenci; koşullar kontrol edildi. Çıktıya göre eğim için %95 aralık kur ve doğrusal ilişki için kanıt var mı karar ver.",
          adimlar: ["State: β = haftada kahvaltı yapılan gün sayısı 1 artınca ortalama deneme puanındaki gerçek değişim. %95 aralık.", "Plan: eğim için t aralığı, df = 12 − 2 = 10; t∗ = 2,228. Koşullar (LINER) ✓.", "Do: 0,80 ± 2,228 × 0,70 = 0,80 ± 1,56 ⇒ (−0,76; 2,36).", "Conclude: Aralık 0’ı içeriyor. %95 güvenle gerçek eğim −0,76 ile 2,36 puan / gün arasında; kahvaltı sıklığı ile deneme puanı arasında doğrusal ilişki olduğuna dair ikna edici kanıt yok."],
          sonuc: "(−0,76; 2,36) 0’ı içerir ⇒ H₀: β = 0 α = 0,05’te reddedilemez (çıktıdaki P = 0,280 ile uyumlu)." },
        { tip: "adimlar", baslik: "Gerekçe şablonu", adimlar: [
            { baslik: "1 · İddiayı yaz", metin: "β = 0 (ilişki var mı?) ya da β = β₀ (belirli bir miktar) gibi." },
            { baslik: "2 · Aralığı söyle", metin: "“%95 güven aralığı (a; b) puan / saat.”" },
            { baslik: "3 · Karşılaştır", metin: "0 (ya da β₀) aralığın içinde mi, dışında mı?" },
            { baslik: "4 · Bağlamla bitir", metin: "“… arasında doğrusal ilişki olduğuna dair ikna edici kanıt var / yok.”" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Konuyu bir cümlede toparlayan liste (bu konu 2026-27 sınavında yok).",
      bloklar: [
        { tip: "ozet", maddeler: [
            "β = 0, doğrusal ilişki yok demektir; aralığın 0’ı içerip içermediği ilk bakılacak şeydir.",
            "Aralık 0’ı içermiyorsa (iki yönlü α = 1 − C ile) H₀: β = 0 reddedilir; ilişki için ikna edici kanıt var.",
            "Aralık 0’ı içeriyorsa kanıt yok; ama bu eğimin 0 olduğunu kanıtlamaz.",
            "İddia edilen β₀ aralığın içindeyse makul, dışındaysa makul değil.",
            "Güven düzeyi ↑ ⇒ aralık genişler; n ↑, x yayılımı ↑, S ↓ ⇒ aralık daralır.",
            "Gerekçe cümlesi: aralığı ver, 0’a (ya da iddiaya) göre karşılaştır, bağlamla bitir.",
            "Aralık gözlenen x aralığı için geçerlidir; neden-sonuç yalnızca rastgele atamalı deneyle söylenir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Rastgele seçilen öğrencilerde günlük sosyal medya saati ile haftalık kitap okuma sayısı arasındaki eğim için %95 güven aralığı (−0,35; 1,20) bulunmuştur. Koşullar sağlanmıştır. Doğru sonuç hangisidir?",
      opts: ["Aralık 0’ı içerdiği için eğimin 0 olduğu kanıtlanmıştır.", "Aralık 0’ı içerdiği için doğrusal ilişki olduğuna dair ikna edici kanıt yoktur.", "Aralık geniş olduğu için ilişki kesinlikle vardır.", "Aralığın büyük kısmı pozitif olduğu için H₀: β = 0 reddedilir."],
      a: 1,
      why: "0 aralığın içinde: H₀: β = 0, α = 0,05 iki yönlü testte reddedilemez, yani ilişki için ikna edici kanıt yoktur. A şıkkı “reddedememeyi” kanıt sayar; D şıkkı yalnızca aralığın büyük kısmına bakar, oysa 0’ın içeride olması yeter." },
    { q: "Bir eğim için %99 güven aralığı (0,40; 1,90) bulundu. Aşağıdaki iddialardan hangisi bu aralıkla uyumludur?",
      opts: ["β = 0", "β = 2,0", "β = 0,2", "β = 1,5"],
      a: 3,
      why: "Aralıktaki her değer makuldür: 1,5 ∈ (0,40; 1,90). 0 ve 0,2 aralığın solunda, 2,0 ise aralığın sağında (2,0 > 1,90) kalır." },
    { q: "Bir eğim için %90 güven aralığı (0,05; 0,95) kurulmuştur. Aynı veriyle H₀: β = 0 ve Hₐ: β ≠ 0 testi α = 0,10 düzeyinde ne sonuç verir?",
      opts: ["H₀ reddedilir; çünkü 0 aralığın dışındadır.", "H₀ reddedilemez; çünkü aralık 0’a çok yakındır.", "Aralıktan karar verilemez; ayrıca test hesaplamak gerekir.", "H₀ reddedilemez; çünkü aralık geniştir."],
      a: 0,
      why: "%90 aralık, α = 0,10 iki yönlü testle eşdeğerdir. 0 aralığın dışında olduğu için H₀ reddedilir. “Yakınlık” ya da “genişlik” kararı belirlemez; 0’ın içeride ya da dışarıda olması belirler." },
    { q: "Diğer her şey aynıyken aşağıdakilerden hangisi eğim için güven aralığını genişletir?",
      opts: ["Gözlem sayısını 20’den 80’e çıkarmak", "Güven düzeyini %99’dan %95’e indirmek", "Artıkların standart sapması S’nin daha büyük olması", "x değerlerini daha geniş bir aralıktan toplamak"],
      a: 2,
      why: "SE_b = S ÷ (s_x √(n − 1)); S büyüdükçe SE_b ve aralık büyür. n’yi artırmak, güven düzeyini düşürmek ve x yayılımını artırmak aralığı daraltır." },
    { q: "Rastgele seçilen 17 öğrenci için çıktıya göre eğim aralığı kurulacak: b = 3,0 ve SE_b = 0,8 (df = 15 için %95 t∗ = 2,131). Bir öğretmen gerçek eğimin 5 olduğunu iddia ediyor. Hangi sonuç doğrudur?",
      fig: { type: "table", head: ["Predictor", "Coef", "SE Coef", "T", "P"], rows: [["Constant", "20.0", "6.0", "3.33", "0.005"], ["Saat", "3.0", "0.8", "3.75", "0.002"]], caption: "n = 17" },
      opts: ["%95 aralık (1,30; 4,70); 5 aralığın dışında olduğundan iddia makul değildir.", "%95 aralık (1,30; 4,70); 5 aralıkta olmadığı için iddia kesin doğrudur.", "%95 aralık (2,20; 3,80); 5 aralığın dışındadır ve iddia makul değildir.", "%95 aralık (1,30; 4,70); 5 aralıkta olmasa bile iddia reddedilemez."],
      a: 0,
      why: "3,0 ± 2,131 × 0,8 = 3,0 ± 1,70 ⇒ (1,30; 4,70). 5 aralığın dışında: β = 5 makul bir değer değil. C’deki (2,20; 3,80) aralığı yalnızca bir SE (0,8) ekleyerek bulunur; B ve D, dışarıda kalmanın anlamını tersine çevirir." }
  ]
};
