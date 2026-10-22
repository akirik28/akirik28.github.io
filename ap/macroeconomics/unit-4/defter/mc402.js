/* Kitora not defteri · mc402 · 4.2 Nominal ve Reel Faiz
   Kaynak: AP Macroeconomics CED, Topic 4.2 (MEA-3.B). Blok türleri: /ap/_kit/defter.js başı.
   Grafikler: (1) reel faiz %3 sabitken nominal faiz = 3 + beklenen enflasyon; (2) nominal faiz %9 sabitken reel faiz = 9 − gerçekleşen enflasyon. 1 birim = %1. */
window.DEFTER = {
  slug: "mc402",
  amac: "Bu konu faizin iki yüzünü anlatıyor: bankanın söylediği nominal faiz ve enflasyondan arındırılmış reel faiz. Fisher denklemini, beklenen ile gerçekleşen enflasyon farkını ve nominal ya da reel faizi nasıl hesaplayacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Nominal faiz ve reel faiz",
      kisa: "Nominal faiz enflasyonla düzeltilmemiştir; reel faiz alım gücündeki kazançtır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Nominal interest rate", tr: "nominal faiz", tanim: "Kredi ya da mevduat için ödenen, enflasyona göre düzeltilmemiş faiz. Bankanın tabelasındaki orandır.", ornek: "Mevduata %10 yazıyorsa nominal faiz %10." },
            { ikon: "🛒", terim: "Real interest rate", tr: "reel faiz", tanim: "Enflasyonun etkisi çıkarılmış faiz; paranın alım gücündeki gerçek kazanç.", ornek: "%10 faiz alıp %10 enflasyon yaşarsan reel faiz %0." }
          ] },
        { tip: "adimlar", baslik: "Arkadaşına 100 TL borç veriyorsun", adimlar: [
            { baslik: "Borç verirsin", metin: "Yıllık nominal faiz %10. Bir tost 10 TL; yani 100 TL'n 10 tost eder." },
            { baslik: "Parayı geri alırsın", metin: "Bir yıl sonra 110 TL gelir. Ama enflasyon %10'dur: tost artık 11 TL." },
            { baslik: "Gerçek kazancın", metin: "110 ÷ 11 = 10 tost. Paran %10 arttı ama alım gücün hiç artmadı: reel faiz %0." }
          ] }
      ]
    },
    {
      baslik: "Reel faiz formülü",
      kisa: "Reel faiz, nominal faizden enflasyonu çıkarınca bulunur.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Reel faiz", alt: "r" }, "=",
            { t: "Nominal faiz", alt: "i" }, "−",
            { t: "Enflasyon", alt: "π" }
          ], aciklama: "Aynı denklemi şöyle de yaz: nominal faiz = reel faiz + enflasyon (*Fisher equation*). Kısacası i = r + π." },
        { tip: "tablo", baslik: "Dört hesap", head: ["Nominal faiz (i)", "Enflasyon (π)", "Reel faiz (r = i − π)"], rows: [
            ["%10", "%4", "%6"],
            ["%8", "%5", "%3"],
            ["%5", "%5", "%0"],
            ["%3", "%7", "−%4"]
          ], vurgu: 3, not: "Reel faiz negatif olabilir: enflasyon faizden büyükse borç veren alım gücü kaybeder." },
        { tip: "ornek", baslik: "Kantincinin kredisi", durum: "Kantinci, tost makinesi için %12 nominal faizle borç aldı. Yıl sonunda enflasyon %15 çıktı. Kantincinin ödediği reel faiz nedir?",
          adimlar: ["Formül: r = i − π.", "r = 12 − 15.", "r = −3."],
          sonuc: "==−%3==. Reel faiz negatif: kantincinin geri ödediği paranın alım gücü, borç aldığı paranınkinden azdır. Borç alan kazandı, borç veren kaybetti." }
      ]
    },
    {
      baslik: "Beklenen mi, gerçekleşen mi?",
      kisa: "Faiz anlaşılırken beklenen enflasyon, sonradan hesapta gerçekleşen enflasyon kullanılır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔮", baslik: "Anlaşırken: *expected inflation*", maddeler: ["Borç veren ve alan geleceği tahmin eder", "Nominal faiz = istenen reel faiz + **beklenen** enflasyon", "Örnek: %3 reel faiz ve %5 beklenen enflasyon → %8 nominal faiz"] },
          sag: { ikon: "🔍", baslik: "Sonradan: *actual inflation*", maddeler: ["Enflasyon gerçekleşmiştir", "Reel faiz = nominal faiz − **gerçekleşen** enflasyon", "Beklentiden farklıysa reel getiri planlananla aynı olmaz"] },
          oyun: [
            { metin: "Banka, kredi faizini belirlerken gelecek yılın tahmini enflasyonunu hesaba kattı.", cevap: "sol", neden: "Anlaşma anında tahmin edilen enflasyon: beklenen." },
            { metin: "Yıl sonunda gerçek enflasyon açıklandı ve reel faiz yeniden hesaplandı.", cevap: "sag", neden: "Geriye bakarak gerçekleşen enflasyonla hesap." },
            { metin: "Nominal faiz %9, beklenen enflasyon %6: planlanan reel faiz %3.", cevap: "sol", neden: "Beklenen enflasyonla kurulan plan." },
            { metin: "Faiz %9'du, enflasyon %12 çıktı: reel faiz −%3 oldu.", cevap: "sag", neden: "Gerçekleşen enflasyon kullanıldı." }
          ] },
        { tip: "tuzak", metin: "Soru hangi enflasyonu verdiğine göre hesap yapar.", yanlis: "Her reel faiz hesabında gerçekleşen enflasyon kullanılır.", dogru: "Nominal faizi kuran ==beklenen== enflasyondur. Soru \"gerçekleşen\" ya da \"sonradan hesaplanan\" diyorsa gerçekleşen enflasyonla çalış." }
      ]
    },
    {
      baslik: "Fisher etkisi: beklenen enflasyon nominal faizi taşır",
      kisa: "Reel faiz sabitken beklenen enflasyon artarsa nominal faiz aynı miktarda artar.",
      bloklar: [
        { tip: "grafik", baslik: "Reel faiz %3 iken nominal faiz = 3 + beklenen enflasyon", xlabel: "Beklenen enflasyon", ylabel: "Faiz", xmax: 11, ymax: 13,
          xticks: [{ v: 2, label: "%2" }, { v: 6, label: "%6" }],
          yticks: [{ v: 3, label: "%3" }, { v: 5, label: "%5" }, { v: 9, label: "%9" }],
          ogeler: [
            { id: "r", tip: "cizgi", renk: 1, from: [0, 3], to: [10, 3], etiket: "r" },
            { id: "i", tip: "cizgi", renk: 0, from: [0, 3], to: [10, 13], etiket: "i", gizli: true },
            { id: "P", tip: "nokta", renk: 3, x: 2, y: 5, etiket: "i = %5", kilavuz: true, gizli: true },
            { id: "gap", tip: "ok", renk: 3, from: [6, 3.3], to: [6, 8.7], gizli: true },
            { id: "gt", tip: "yazi", x: 6.4, y: 5.7, metin: "enflasyon payı: 6", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Borç verenlerin istediği reel faiz %3 olsun: yatay çizgi. Yatay eksende beklenen enflasyon, dikey eksende faiz var." },
            { metin: "Nominal faiz = reel faiz + beklenen enflasyon. Eğimi 1 olan **i** doğrusu bunu gösterir: enflasyon 1 puan artarsa faiz 1 puan artar.", goster: ["i"] },
            { metin: "Beklenen enflasyon %2: nominal faiz 3 + 2 = **%5**.", goster: ["P"] },
            { metin: "Beklenen enflasyon %6'ya çıkar: nominal faiz 3 + 6 = **%9**. Faiz 4 puan arttı, ==reel faiz hâlâ %3==.", set: { P: { x: 6, y: 9, etiket: "i = %9" } }, goster: ["gap", "gt"] }
          ] },
        { tip: "tuzak", metin: "Nominal faiz yükselmiş olabilir ama enflasyon beklentisi de yükseldiyse reel faiz hiç değişmemiş olabilir.", yanlis: "Nominal faiz arttıysa reel faiz de artmıştır.", dogru: "İkisine birden bak: r = i − π. Nominal faiz %9'dan %12'ye, beklenen enflasyon %6'dan %9'a çıkarsa reel faiz %3'te kalır." }
      ]
    },
    {
      baslik: "Enflasyon sürpriz yapınca kim kazanır?",
      kisa: "Gerçek enflasyon beklenenden yüksekse reel faiz düşer ve borçlu kazanır.",
      bloklar: [
        { tip: "grafik", baslik: "Nominal faiz %9'a sabitlendi: reel faiz = 9 − gerçekleşen enflasyon", xlabel: "Gerçekleşen enflasyon", ylabel: "Faiz", xmax: 11, ymax: 10,
          xticks: [{ v: 3, label: "%3" }, { v: 6, label: "%6" }, { v: 9, label: "%9" }],
          yticks: [{ v: 3, label: "%3" }, { v: 6, label: "%6" }, { v: 9, label: "%9" }],
          ogeler: [
            { id: "n", tip: "cizgi", renk: 0, from: [0, 9], to: [10, 9], etiket: "i" },
            { id: "r", tip: "cizgi", renk: 1, from: [0, 9], to: [9, 0], etiket: "r", gizli: true },
            { id: "P", tip: "nokta", renk: 3, x: 6, y: 3, etiket: "r = %3", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Sözleşme: nominal faiz %9 ve sabit (yatay çizgi). Borç veren ve alan, %6 enflasyon beklentisiyle %3 reel faiz planladı." },
            { metin: "Gerçekleşen enflasyon arttıkça reel faiz = 9 − π azalır: eğimi −1 olan **r** doğrusu.", goster: ["r"] },
            { metin: "Enflasyon beklendiği gibi %6 çıkar: reel faiz **%3**, plan tuttu.", goster: ["P"] },
            { metin: "Enflasyon %9 çıkar (beklentiden yüksek): reel faiz **%0**. Borç veren hiçbir şey kazanmadı.", set: { P: { x: 9, y: 0, etiket: "r = %0" } } },
            { metin: "Enflasyon %3 çıkar (beklentiden düşük): reel faiz **%6**. Borç veren umduğundan çok kazandı.", set: { P: { x: 3, y: 6, etiket: "r = %6" } } }
          ] },
        { tip: "tablo", baslik: "Aynı %9 faiz, farklı enflasyonlar", head: ["Gerçekleşen enflasyon (π)", "Reel faiz (9 − π)", "Kim kazanır?"], rows: [
            ["%3 (beklentiden düşük)", "%6", "Borç veren"],
            ["%6 (beklendiği gibi)", "%3", "Kimse: plan tuttu"],
            ["%9", "%0", "Borç veren kazanmadı"],
            ["%12 (beklentiden yüksek)", "−%3", "Borç alan"]
          ], not: "Faiz sözleşmede sabitse, beklenenden yüksek enflasyon borç alanın, düşük enflasyon borç verenin işine yarar." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Nominal interest rate* enflasyona göre düzeltilmemiş faizdir; *real interest rate* alım gücündeki kazançtır.",
            "Reel faiz = nominal faiz − enflasyon (r = i − π). Eşdeğeri: nominal faiz = reel faiz + enflasyon (*Fisher equation*).",
            "Taraflar nominal faizi ==beklenen== enflasyona göre kurar: i = beklenen reel faiz + beklenen enflasyon.",
            "Sonradan hesapta reel faiz = nominal faiz − ==gerçekleşen== enflasyon.",
            "Reel faiz sabitse beklenen enflasyon 1 puan artınca nominal faiz de 1 puan artar.",
            "Nominal faizin artması reel faizin arttığı anlamına gelmez; enflasyonun ne yaptığına da bak.",
            "Gerçek enflasyon beklentiden yüksekse reel faiz planlananın altına düşer: borç alan kazanır, borç veren kaybeder.",
            "Reel faiz negatif olabilir: örnek, %3 nominal faiz ve %7 enflasyon → −%4."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir kredinin nominal faizi %14, o yıl gerçekleşen enflasyon %9'dur. Reel faiz kaçtır?",
      opts: ["%23", "%5", "%9", "%14"],
      a: 1,
      why: "Reel faiz = nominal faiz − enflasyon = 14 − 9 = %5. %23 iki oranı toplayan hatalı bir hesaptır; formül çıkarmayı ister."
    },
    {
      q: "Borç verenler ve alanlar gelecek yıl için %7 enflasyon bekliyor ve %4 reel faiz istiyor. Anlaşmadaki nominal faiz ne olur?",
      opts: ["%3", "%7", "%11", "%28"],
      a: 2,
      why: "Nominal faiz = istenen reel faiz + beklenen enflasyon = 4 + 7 = %11. %3 ise çıkarma işlemidir (enflasyon − reel faiz); doğrusu toplamadır."
    },
    {
      q: "Nominal faizi %10 olarak sabitlenen bir kredide beklenen enflasyon %5'ti, ama gerçekleşen enflasyon %8 çıktı. Hangisi doğrudur?",
      opts: ["Reel faiz planlanan %5'ten %2'ye düştü; borç alan lehine", "Reel faiz planlanan %2'den %5'e çıktı; borç veren lehine", "Reel faiz değişmedi, çünkü nominal faiz sabittir", "Nominal faiz %13'e çıkar"],
      a: 0,
      why: "Planlanan reel faiz 10 − 5 = %5, gerçekleşen reel faiz 10 − 8 = %2. Enflasyon beklenenden yüksek olduğu için reel faiz düştü ve borç alan kazandı. Nominal faiz sabit olsa da reel faiz gerçekleşen enflasyona göre değişir."
    },
    {
      q: "Tablo üç yılın verilerini gösteriyor. Hangi yılda borç alanlar reel olarak kazandı (reel faiz negatif oldu)?",
      fig: { type: "table", head: ["Yıl", "Nominal faiz", "Gerçekleşen enflasyon"], rows: [["A", "%20", "%15"], ["B", "%20", "%25"], ["C", "%30", "%22"]] },
      opts: ["Yıl A", "Yıl B", "Yıl C", "Hiçbirinde"],
      a: 1,
      why: "Yıl A: 20 − 15 = +%5. Yıl B: 20 − 25 = −%5, yani negatif reel faiz; borç alanlar kazanır. Yıl C: 30 − 22 = +%8. En çekici yanlış, nominal faizin hep pozitif olduğu için reel faizin de pozitif olduğunu sanmaktır."
    },
    {
      q: "Beklenen enflasyon %4'ten %7'ye çıkıyor; borç verenlerin istediği reel faiz değişmiyor. Nominal faiz ne olur?",
      opts: ["3 puan düşer", "Değişmez", "4 puan artar", "3 puan artar"],
      a: 3,
      why: "i = r + π ve r sabit olduğundan, beklenen enflasyondaki 3 puanlık artış nominal faize 3 puan olarak yansır (Fisher etkisi). Reel faiz değişmediği için nominal faizin değişmediğini sanmak bu soruda en çekici yanlıştır."
    }
  ]
};
