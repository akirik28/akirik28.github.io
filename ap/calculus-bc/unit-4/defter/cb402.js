/* Kitora not defteri · cb402 · 4.2 Doğrusal Hareket: Konum, Hız, İvme
   Videosuz ünite: CED 4.2 (Straight-Line Motion: Position, Velocity, and Acceleration). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb402",
  amac: "Bu konu düz bir çizgide hareket eden bir cismin konumunu, hızını ve ivmesini türevle bağlıyor. Hızın işaretinden yönü, hız ile ivmenin işaretlerinden cismin hızlanıp yavaşladığını okumayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Konum, hız, ivme: türev zinciri",
      kisa: "Konumun türevi hız, hızın türevi ivmedir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "x(t)", alt: "konum" }, "→",
            { t: "v(t) = x′(t)", alt: "hız" }, "→",
            { t: "a(t) = v′(t) = x″(t)", alt: "ivme" }
          ], aciklama: "Her adımda bir kez türev alırsın. Ters yönde, ivmeden hıza ve hızdan konuma, integral gider (Unit 6'da)." },
        { tip: "kavramlar", kartlar: [
            { ikon: "📍", terim: "Position", tr: "konum", tanim: "Cismin sayı doğrusu üzerinde t anındaki yeri: x(t).", ornek: "x(2) = 5: 2. saniyede cisim 5 m noktasında." },
            { ikon: "➡️", terim: "Velocity", tr: "hız (yönlü)", tanim: "Konumun değişim hızı, v(t) = x′(t). İşareti yönü, büyüklüğü hızlılığı verir.", ornek: "v = −3: cisim negatif yönde saniyede 3 m gidiyor." },
            { ikon: "🏁", terim: "Speed", tr: "sürat", tanim: "Hızın mutlak değeri, |v(t)|. Yön bilgisi içermez, hiç negatif olmaz.", ornek: "v = −3 için sürat 3." },
            { ikon: "🚀", terim: "Acceleration", tr: "ivme", tanim: "Hızın değişim hızı, a(t) = v′(t) = x″(t).", ornek: "a = 2: hız saniyede 2 m/s artıyor." }
          ] }
      ]
    },
    {
      baslik: "Hızın işareti yönü verir",
      kisa: "v > 0 pozitif yöne, v < 0 negatif yöne gider.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "➡️", baslik: "*v(t) > 0*", maddeler: ["Cisim pozitif yönde (sağa) gidiyor", "x(t) artıyor"] },
          sag: { ikon: "⬅️", baslik: "*v(t) < 0*", maddeler: ["Cisim negatif yönde (sola) gidiyor", "x(t) azalıyor"] },
          oyun: [
            { metin: "x′(3) = 4", cevap: "sol", neden: "Hız pozitif: konum artıyor, cisim sağa gidiyor." },
            { metin: "v(5) = −2 m/s", cevap: "sag", neden: "Hız negatif: cisim sola gidiyor." },
            { metin: "x(t) grafiği o anda aşağı eğimli", cevap: "sag", neden: "Konum azalıyor, yani v < 0." },
            { metin: "x(t) grafiği o anda yukarı eğimli", cevap: "sol", neden: "Konum artıyor, yani v > 0." }
          ] },
        { tip: "ornek", baslik: "x(t) = t³ − 6t² + 9t", durum: "Düz bir rayda giden oyuncak aracın konumu (m), t saniye (t ≥ 0). v ve a'yı bul; v = 0 olduğu anları bul.",
          adimlar: [
            "Hız: v(t) = x′(t) = 3t² − 12t + 9 = 3(t − 1)(t − 3).",
            "İvme: a(t) = v′(t) = 6t − 12 = 6(t − 2).",
            "v = 0 için (t − 1)(t − 3) = 0, yani t = 1 ve t = 3.",
            "t = 1'de x = 4 ve t = 3'te x = 0."
          ], sonuc: "v = 3(t − 1)(t − 3), a = 6(t − 2); araç t = 1 ve t = 3'te anlık durur" }
      ]
    },
    {
      baslik: "Konum grafiğinden hareketi okumak",
      kisa: "Konum grafiğinin eğimi hızdır; hız ve ivme işaretleri hareketi anlatır.",
      bloklar: [
        { tip: "grafik", baslik: "x(t) = t³ − 6t² + 9t", xlabel: "t (s)", ylabel: "x (m)", xmax: 4, ymax: 5,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0], [0.25, 1.891], [0.5, 3.125], [0.75, 3.797], [1, 4], [1.25, 3.828], [1.5, 3.375], [1.75, 2.734], [2, 2], [2.25, 1.266], [2.5, 0.625], [2.75, 0.172], [3, 0], [3.25, 0.203], [3.5, 0.875], [3.75, 2.109], [4, 4]] },
            { id: "y1", tip: "yazi", x: 0.35, y: 4.5, metin: "v > 0", gizli: true },
            { id: "p1", tip: "nokta", renk: 2, x: 1, y: 4, etiket: "t = 1", kilavuz: true, gizli: true },
            { id: "y2", tip: "yazi", x: 2, y: 3.4, metin: "v < 0", gizli: true },
            { id: "p3", tip: "nokta", renk: 3, x: 2, y: 2, etiket: "a = 0", gizli: true },
            { id: "p2", tip: "nokta", renk: 2, x: 3, y: 0, etiket: "t = 3", kilavuz: true, gizli: true },
            { id: "y3", tip: "yazi", x: 3.5, y: 2.4, metin: "v > 0", gizli: true }
          ],
          durumlar: [
            { metin: "Konum eğrisi: araç önce 4 m'ye çıkıyor, sonra 0'a dönüyor, sonra yeniden çıkıyor." },
            { metin: "0 < t < 1: konum artıyor, eğim pozitif, v > 0. Araç sağa gidiyor.", goster: ["y1"] },
            { metin: "t = 1: eğri tepe noktasında, teğet yatay, v = 0. Araç yön değiştirir (v işaret değiştirir).", goster: ["p1"] },
            { metin: "1 < t < 3: konum azalıyor, v < 0. Araç sola gidiyor.", goster: ["y2"] },
            { metin: "t = 2: eğrinin büküldüğü yer, a = 0. Hız burada en negatif (v = −3): sürat en büyük.", goster: ["p3"] },
            { metin: "t = 3: dip noktası, v = 0, yön yine değişiyor. Sonra t > 3'te v > 0: araç yeniden sağa gidiyor.", goster: ["p2", "y3"] }
          ] },
        { tip: "tablo", baslik: "Dört aralık, dört bilgi", head: ["Aralık", "v", "a", "Yön", "Sürat"],
          rows: [
            ["0 < t < 1", "+", "−", "sağa", "azalıyor"],
            ["1 < t < 2", "−", "−", "sola", "artıyor"],
            ["2 < t < 3", "−", "+", "sola", "azalıyor"],
            ["t > 3", "+", "+", "sağa", "artıyor"]
          ], vurgu: 1, not: "v = 3(t − 1)(t − 3) ve a = 6(t − 2) işaret çizgisinden bulundu. Sürat: v ile a aynı işaretliyse artıyor, zıt işaretliyse azalıyor." }
      ]
    },
    {
      baslik: "Sürat artıyor mu, azalıyor mu?",
      kisa: "v ve a aynı işaretliyse hızlanır, zıt işaretliyse yavaşlar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "v · a > 0", alt: "aynı işaret" }, "⇒",
            { t: "sürat artıyor", alt: "hızlanıyor" }, "|",
            { t: "v · a < 0", alt: "zıt işaret" }, "⇒",
            { t: "sürat azalıyor", alt: "yavaşlıyor" }
          ], aciklama: "İvme hızı değiştirir; ==ama sürat, hız ile ivmenin birbirine göre yönüne bağlıdır.== İvme hızın tersi yönde ise cisim frene basmış gibi yavaşlar." },
        { tip: "ornek", baslik: "v(t) = t² − 6t + 8", durum: "t = 1, t = 2,5 ve t = 5 anlarında sürat artıyor mu azalıyor mu?",
          adimlar: [
            "İvme: a(t) = 2t − 6.",
            "t = 1: v = 3 > 0, a = −4 < 0. Zıt işaret.",
            "t = 2,5: v = −0,75 < 0, a = −1 < 0. Aynı işaret.",
            "t = 5: v = 3 > 0, a = 4 > 0. Aynı işaret."
          ], sonuc: "t = 1'de sürat azalıyor; t = 2,5 ve t = 5'te artıyor" },
        { tip: "tuzak", metin: "\"İvme negatif, yani cisim yavaşlıyor\" demek yanlış. Yavaşlamak için ivme ile hızın zıt işaretli olması gerekir; ikisi de negatifse cisim sola doğru hızlanıyordur.", yanlis: "a < 0 ise cisim yavaşlar.", dogru: "v = −3, a = −2: ikisi de negatif, sürat artıyor (sola hızlanıyor)." }
      ]
    },
    {
      baslik: "Hız sıfır olunca yön değişir mi?",
      kisa: "Yön ancak v işaret değiştiriyorsa değişir.",
      bloklar: [
        { tip: "ornek", baslik: "İki konum fonksiyonu", durum: "x₁(t) = t² − 4t ve x₂(t) = (t − 2)³. İkisinde de t = 2'de yön değişiyor mu?",
          adimlar: [
            "x₁: v₁ = 2t − 4. t = 2'de v₁ = 0; t < 2'de negatif, t > 2'de pozitif. İşaret değişiyor: yön değişir.",
            "x₂: v₂ = 3(t − 2)². t = 2'de v₂ = 0 ama v₂ her zaman ≥ 0. İşaret değişmiyor.",
            "x₂'de araç t = 2'de bir an duruyor, sonra aynı yönde devam ediyor."
          ], sonuc: "x₁ yön değiştirir; x₂ yön değiştirmez" },
        { tip: "tuzak", metin: "v = 0 yön değişimi için gerekli ama yeterli değildir. Sınavda \"yön değiştirir\" demek için v'nin işaret değiştirdiğini işaret çizgisiyle göster.", yanlis: "v(2) = 0 olduğuna göre t = 2'de yön değişir.", dogru: "v = 0 olduğu anda iki yanındaki işaretlere bak. Aynıysa yön değişmez." }
      ]
    },
    {
      baslik: "Yer değiştirme, ortalama hız ve alınan yol",
      kisa: "Ortalama hız yer değiştirmeden gelir; alınan yol yön değişimlerini sayar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "ortalama hız", alt: "[a, b] aralığında" }, "=",
            { t: "x(b) − x(a)", alt: "yer değiştirme" }, "÷",
            { t: "b − a", alt: "süre" }
          ], aciklama: "Ortalama hız yalnızca baş ve son konuma bakar. Aradaki gidiş dönüşler yer değiştirmeye değil, ==alınan yola== yansır." },
        { tip: "ornek", baslik: "x(t) = t³ − 6t² + 9t, [0, 4] aralığı", durum: "Ortalama hızı ve alınan toplam yolu bul.",
          adimlar: [
            "x(0) = 0 ve x(4) = 64 − 96 + 36 = 4. Yer değiştirme 4 m.",
            "Ortalama hız: 4 / 4 = 1 m/s.",
            "Yön değişimleri t = 1 ve t = 3'te. 0 → 4 (4 m), 4 → 0 (4 m), 0 → 4 (4 m).",
            "Alınan yol: 4 + 4 + 4 = 12 m."
          ], sonuc: "Ortalama hız 1 m/s; alınan yol 12 m" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "v(t) = x′(t) ve a(t) = v′(t) = x″(t).",
            "v > 0: pozitif yönde, v < 0: negatif yönde; sürat = |v|.",
            "v ve a aynı işaretliyse sürat artar; zıt işaretliyse azalır.",
            "İvme negatif demek yavaşlıyor demek değildir; hızın işaretine bak.",
            "v = 0 anlık durmadır; yön değişimi için v işaret değiştirmeli.",
            "Ortalama hız = (x(b) − x(a)) / (b − a); alınan yol için yön değişimlerini topla.",
            "Hareket sorularında v ve a için işaret çizgisi çiz, sonra tabloya geç."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir parçacığın konumu x(t) = t² − 6t + 5 (m), t saniye. t = 2 anında parçacık hangi durumdadır?",
      opts: ["Sağa gidiyor ve hızlanıyor.", "Sola gidiyor ve hızlanıyor.", "Sola gidiyor ve yavaşlıyor.", "Sağa gidiyor ve yavaşlıyor."],
      a: 2,
      why: "v = 2t − 6 ve a = 2. t = 2'de v = −2 < 0 (sola) ve a = 2 > 0; zıt işaret, sürat azalıyor. B şıkkı en çekici yanlış: ivmenin pozitif olması hızlandığı anlamına gelmez, hıza bakmak gerekir." },
    { q: "Bir parçacığın hızı v(t) = 3 − t (m/s) olup şekilde verilmiştir (v = 0 düzeyi yatay çizgiyle işaretlidir). t = 5'te parçacık için hangisi doğrudur?",
      fig: { type: "graph", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 8, ymax: 8, lines: [{ from: [0, 7], to: [6, 1], label: "v(t)" }], hlines: [{ p: 4, label: "v = 0" }], xticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }], yticks: [{ v: 7, label: "3" }, { v: 4, label: "0" }, { v: 1, label: "−3" }], caption: "Dikey eksen: hız" },
      opts: ["Sağa gidiyor ve yavaşlıyor.", "Sağa gidiyor ve hızlanıyor.", "Sola gidiyor ve yavaşlıyor.", "Sola gidiyor ve hızlanıyor."],
      a: 3,
      why: "Doğru eğimi −1 olduğundan a = −1. t = 5'te v = −2 < 0 ve a < 0: aynı işaret, sola doğru hızlanıyor. C şıkkı en çekici yanlış: hızın sıfırı geçmiş olması yavaşladığı anlamına gelmez; v = 0'dan sonra sürat yeniden artar." },
    { q: "Bir parçacığın konumu x(t) = (t − 2)³ olsun. t = 2 anında v(2) = 0 olduğuna göre aşağıdakilerden hangisi doğrudur?",
      opts: ["Parçacık yön değiştirmez; v = 3(t − 2)² işaret değiştirmez.", "Parçacık t = 2'de yön değiştirir, çünkü hız sıfırdır.", "Parçacık t = 2'de sola gitmeye başlar.", "Parçacık t = 2'de ivmesi sıfır olduğu için yön değiştirir."],
      a: 0,
      why: "v = 3(t − 2)² her t için ≥ 0, işaret değiştirmiyor; parçacık yalnızca bir an duruyor. B şıkkı en çekici yanlış: v = 0 yön değişimi için gerekli, yeterli değil." },
    { q: "Bir drone'un konumu tabloda veriliyor. [2, 5] aralığındaki ortalama hızı bulunuz.",
      fig: { type: "table", head: ["t (s)", "0", "2", "5"], rows: [["x(t) (m)", "2", "8", "5"]], caption: "Drone'un konumu" },
      opts: ["1 m/s", "3 m/s", "−1 m/s", "−3 m/s"],
      a: 2,
      why: "Ortalama hız = (x(5) − x(2)) / (5 − 2) = (5 − 8) / 3 = −1 m/s. A şıkkı en çekici yanlış: işareti atmak yön bilgisini siler; ortalama hız yönlüdür, negatif çıkması drone'un negatif yönde yer değiştirdiğini söyler." },
    { q: "Aşağıdaki hız ve ivme çiftlerinden hangisinde parçacığın sürati azalmaktadır?",
      opts: ["v = 3, a = 2", "v = −3, a = 4", "v = −3, a = −2", "v = 5, a = 0"],
      a: 1,
      why: "Sürat, v ile a zıt işaretliyse azalır: v = −3 ve a = 4. C şıkkı en çekici yanlış: ikisi de negatif olduğundan sürat artar (sola hızlanma)." }
  ]
};
