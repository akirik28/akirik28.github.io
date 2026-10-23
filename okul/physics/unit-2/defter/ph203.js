/* Kitora not defteri · ph203 · 2.3 Enerjinin Korunumu ve Dönüşümü (Conservation and Transformation of Energy)
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics, Unit 2) + MEB FİZ.10 Enerji. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph203",
  amac: "Bu defter *conservation of energy* yani enerjinin korunumunu anlatıyor: enerji yok olmaz, biçim değiştirir. Sürtünmesiz durumda kinetik ve potansiyel enerjinin toplamının sabit kaldığını, sürtünme varsa farkın ısıya gittiğini hesaplayarak göreceksin.",
  bolumler: [
    {
      baslik: "Enerji yok olmaz, dönüşür",
      kisa: "Enerji yoktan var olmaz, yok olmaz; yalnızca biçim değiştirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "♻️", terim: "Conservation of energy", tr: "enerjinin korunumu", tanim: "Kapalı bir sistemde toplam enerji sabit kalır. Enerji bir türden başka bir türe geçer, yok olmaz.", ornek: "Şarjlı telefonun kimyasal enerjisi ışığa, sese ve ısıya dönüşür." },
            { ikon: "🔄", terim: "Energy transformation", tr: "enerji dönüşümü", tanim: "Enerjinin bir türden başka bir türe geçmesi. Dönüşüm sırasında toplam enerji değişmez.", ornek: "Düşen top: potansiyel enerji kinetik enerjiye dönüşür." },
            { ikon: "🔥", terim: "Thermal energy loss", tr: "ısıya giden enerji", tanim: "Sürtünme ve hava direnciyle ısıya dönüşen enerji. Yok olmaz ama işe yarar hâlde geri alınamaz.", ornek: "Fren yapan bisikletin tekerleği ısınır." }
          ] },
        { tip: "tablo", head: ["Düzenek", "Giren enerji", "Çıkan enerji"], rows: [
            ["Ampul", "Elektrik", "Işık + ısı"],
            ["Hidroelektrik santral", "Suyun çekim PE'si → KE", "Elektrik"],
            ["Güneş paneli", "Işık", "Elektrik"],
            ["Ok yayı", "Esneklik PE", "Okun KE'si"],
            ["Bisiklet freni", "Bisikletin KE'si", "Isı"],
            ["Telefon pili", "Kimyasal", "Elektrik → ışık, ses, ısı"],
            ["Fotosentez", "Işık", "Kimyasal (bitkide)"],
            ["Mikrofon", "Ses", "Elektrik"]
          ] },
        { tip: "not", metin: "Bütün enerji türlerinin ortak özellikleri: bir ==kaynağı== vardır, çevreye etkisi olur, birimi joule'dür, birbirine dönüşebilir ve dönüşümde bir kısım enerji (çoğu zaman ısı olarak) kaybolur. Gıdadaki kimyasal enerji vücutta ısıya, sonra harekete dönüşür." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Energy cannot be created or destroyed; it can only be transformed from one form to another.*", metin: "Enerji korunumunun standart cümlesi." },
            { ikon: "✍️", baslik: "*Friction converts kinetic energy into thermal energy.*", metin: "Sürtünmeli dönüşümleri anlatırken kullan." }
          ] }
      ]
    },
    {
      baslik: "Mekanik enerjinin korunumu",
      kisa: "Yalnızca yerçekimi ve yay kuvveti etkiliyorsa KE + PE sabit kalır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "KE₁ + PE₁", alt: "başlangıç" }, "=", { t: "KE₂ + PE₂", alt: "sonra" }
          ], aciklama: "Yani ½mv₁² + mgh₁ = ½mv₂² + mgh₂. Bu denklem ==sürtünme yok== (ya da ihmal ediliyor) ve dışarıdan itme yok iken geçerlidir." },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Mekanik enerji korunur", maddeler: ["Sürtünme ve hava direnci yok", "Yalnızca yerçekimi ya da yay kuvveti iş yapıyor"] },
          sag: { ikon: "❌", baslik: "Mekanik enerji korunmaz", maddeler: ["Sürtünme ya da hava direnci var", "Motor ya da kas gibi dış bir kuvvet iş yapıyor"] },
          oyun: [
            { metin: "Havasız ortamda serbest düşen taş.", cevap: "sol", neden: "Yalnızca yerçekimi iş yapar: KE + PE sabit." },
            { metin: "Fren yapan araba duruyor.", cevap: "sag", neden: "Sürtünme, KE'yi ısıya çevirir; mekanik enerji azalır." },
            { metin: "Sürtünmesiz kaydırakta kayan çocuk.", cevap: "sol", neden: "Yükseklik azalır, hız artar; toplam sabit." },
            { metin: "Motoru çalışan araç yokuş çıkıyor.", cevap: "sag", neden: "Motor dışarıdan iş yapar, mekanik enerji artar; toplam sabit kalmaz." },
            { metin: "Sürtünmesiz yüzeyde sıkışmış yaydan fırlayan blok.", cevap: "sol", neden: "Esneklik PE'si KE'ye dönüşür; toplam sabit." }
          ] },
        { tip: "tuzak", metin: "\"Enerji korunur\" her zaman doğrudur; \"mekanik enerji korunur\" ise yalnızca sürtünmesiz durumda.", yanlis: "Sürtünmeli kaydırakta enerji kaybolur.", dogru: "Mekanik enerji azalır, ama farkın tamamı ısıya dönüşür; toplam enerji aynıdır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The mechanical energy is conserved because there is no friction.*", metin: "Önce korunum şartını söyle." },
            { ikon: "✍️", baslik: "*Kinetic energy increases while potential energy decreases.*", metin: "Düşen cisim için dönüşümün yönü." }
          ] }
      ]
    },
    {
      baslik: "Enerji çubukları: düşen top",
      kisa: "Düşerken PE azalır, KE aynı miktarda artar; toplam sabittir.",
      bloklar: [
        { tip: "grafik", baslik: "2 kg'lık top 5 m yükseklikten bırakılıyor (g = 10 m/s², sürtünme yok)", xlabel: "enerji türü", ylabel: "Enerji (J)", xmax: 10, ymax: 11,
          xticks: [{ v: 1.5, label: "PE" }, { v: 3.5, label: "KE" }, { v: 5.5, label: "PE+KE" }, { v: 8.5, label: "top" }], yticks: [{ v: 5, label: "50" }, { v: 10, label: "100" }],
          ogeler: [
            { id: "lim", tip: "cizgi", renk: 0, kesik: true, from: [0.5, 10], to: [6.5, 10] },
            { id: "tot", tip: "alan", renk: 0, noktalar: [[5, 0], [6, 0], [6, 10], [5, 10]] },
            { id: "pe", tip: "alan", renk: 1, noktalar: [[1, 0], [2, 0], [2, 10], [1, 10]] },
            { id: "ke", tip: "alan", renk: 2, noktalar: [[3, 0], [4, 0], [4, 0], [3, 0]] },
            { id: "tpe", tip: "yazi", x: 1.5, y: 10.4, metin: "100 J" },
            { id: "tke", tip: "yazi", x: 3.5, y: 0.4, metin: "0 J" },
            { id: "ttot", tip: "yazi", x: 5.5, y: 10.4, metin: "100 J" },
            { id: "ball", tip: "nokta", renk: 3, x: 8.5, y: 10, etiket: "h = 5 m" }
          ],
          durumlar: [
            { metin: "Top h = 5 m'de duruyor: PE = m·g·h = 2·10·5 = 100 J, KE = 0. Toplam ==100 J==." },
            { metin: "h = 4 m: PE = 80 J. Giden 20 J, KE oldu: KE = 20 J. Toplam hâlâ 100 J.", set: { pe: { noktalar: [[1, 0], [2, 0], [2, 8], [1, 8]] }, ke: { noktalar: [[3, 0], [4, 0], [4, 2], [3, 2]] }, tpe: { y: 8.4, metin: "80 J" }, tke: { y: 2.4, metin: "20 J" }, ball: { y: 8, etiket: "h = 4 m" } } },
            { metin: "h = 3 m: PE = 60 J, KE = 40 J.", set: { pe: { noktalar: [[1, 0], [2, 0], [2, 6], [1, 6]] }, ke: { noktalar: [[3, 0], [4, 0], [4, 4], [3, 4]] }, tpe: { y: 6.4, metin: "60 J" }, tke: { y: 4.4, metin: "40 J" }, ball: { y: 6, etiket: "h = 3 m" } } },
            { metin: "h = 2 m: PE = 40 J, KE = 60 J. KE artık PE'den büyük.", set: { pe: { noktalar: [[1, 0], [2, 0], [2, 4], [1, 4]] }, ke: { noktalar: [[3, 0], [4, 0], [4, 6], [3, 6]] }, tpe: { y: 4.4, metin: "40 J" }, tke: { y: 6.4, metin: "60 J" }, ball: { y: 4, etiket: "h = 2 m" } } },
            { metin: "h = 1 m: PE = 20 J, KE = 80 J.", set: { pe: { noktalar: [[1, 0], [2, 0], [2, 2], [1, 2]] }, ke: { noktalar: [[3, 0], [4, 0], [4, 8], [3, 8]] }, tpe: { y: 2.4, metin: "20 J" }, tke: { y: 8.4, metin: "80 J" }, ball: { y: 2, etiket: "h = 1 m" } } },
            { metin: "h = 0 (yer): PE = 0, KE = 100 J. Bütün potansiyel enerji kinetik enerjiye dönüştü.", set: { pe: { noktalar: [[1, 0], [2, 0], [2, 0], [1, 0]] }, ke: { noktalar: [[3, 0], [4, 0], [4, 10], [3, 10]] }, tpe: { y: 0.4, metin: "0 J" }, tke: { y: 10.4, metin: "100 J" }, ball: { y: 0, etiket: "yer" } } }
          ] },
        { tip: "ornek", baslik: "Yere çarpma hızı", durum: "Yukarıdaki 2 kg'lık top yere hangi hızla çarpar?",
          adimlar: ["Yerde bütün enerji kinetik: KE = 100 J.", "½ · m · v² = 100 → ½ · 2 · v² = 100 → v² = 100.", "Genel yol: m · g · h = ½ · m · v² → kütle sadeleşir, v² = 2 · g · h = 2 · 10 · 5 = 100."],
          sonuc: "v = 10 m/s. Kütle sadeleştiği için 1 kg'lık top da aynı hızla çarpardı." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The decrease in potential energy equals the increase in kinetic energy.*", metin: "Grafiği yorumlarken ilk cümle bu olsun." },
            { ikon: "✍️", baslik: "*The total mechanical energy stays constant at 100 J.*", metin: "Toplam çubuğunun neden değişmediğini söyle." }
          ] }
      ]
    },
    {
      baslik: "Hız yola değil, yüksekliğe bağlıdır",
      kisa: "Sürtünmesiz ortamda hızı yalnızca yükseklik farkı belirler.",
      bloklar: [
        { tip: "ornek", baslik: "Kaydırak", durum: "30 kg'lık çocuk, sürtünmesiz 1,8 m yüksekliğindeki kaydırağın tepesinden durgun kayıyor. Altta hızı kaç m/s?",
          adimlar: ["m · g · h = ½ · m · v² (kütle sadeleşir).", "v² = 2 · g · h = 2 · 10 · 1,8 = 36.", "v = 6 m/s."],
          sonuc: "v = 6 m/s. Kaydırak dik de olsa uzun ve eğimsiz de olsa son hız aynıdır." },
        { tip: "ornek", baslik: "Yukarı atış", durum: "Top, sürtünmesiz ortamda yerden 10 m/s ile düşey yukarı atılıyor. En fazla kaç m çıkar? Hangi yükseklikte KE = PE olur?",
          adimlar: ["Tepede v = 0, bütün enerji PE: m · g · h = ½ · m · v₀² → h = v₀² / 2g = 100 / 20 = 5 m.", "KE = PE olduğunda her biri toplamın yarısıdır: PE = ½ · (toplam), yani h = 5 / 2.", "h = 2,5 m."],
          sonuc: "En yüksek nokta 5 m; KE = PE olduğu yer 2,5 m (yolun yarısı)." },
        { tip: "tuzak", metin: "Sürtünmesiz ortamda cismin kütlesi, kaydırağın eğimi ve uzunluğu son hızı etkilemez.", yanlis: "Daha uzun ya da daha eğimli yoldan inen cisim daha hızlı çarpar.", dogru: "Başlangıç ve bitiş yüksekliği aynıysa son hız aynıdır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The speed depends only on the height difference, not on the path or the mass.*", metin: "Kaydırak ve eğik düzlem sorularında kullan." },
            { ikon: "✍️", baslik: "*At the highest point all the energy is potential energy.*", metin: "Atış sorularında tepe noktasını yorumla." }
          ] }
      ]
    },
    {
      baslik: "Sürtünme varsa: enerji ısıya gider",
      kisa: "Başlangıç enerjisi = son enerji + ısıya giden enerji.",
      bloklar: [
        { tip: "grafik", baslik: "2 kg'lık top 5 m'den bırakılıyor, yere 8 m/s ile çarpıyor", xlabel: "enerji türü", ylabel: "Enerji (J)", xmax: 8, ymax: 11,
          xticks: [{ v: 1.5, label: "PE (üstte)" }, { v: 4, label: "KE (yerde)" }, { v: 6.5, label: "Isı" }], yticks: [{ v: 5, label: "50" }, { v: 10, label: "100" }],
          ogeler: [
            { id: "pe", tip: "alan", renk: 1, noktalar: [[1, 0], [2, 0], [2, 10], [1, 10]] },
            { id: "lim", tip: "cizgi", renk: 0, kesik: true, from: [0.5, 10], to: [7, 10], gizli: true },
            { id: "ke", tip: "alan", renk: 2, noktalar: [[3.5, 0], [4.5, 0], [4.5, 10], [3.5, 10]], gizli: true },
            { id: "q", tip: "alan", renk: 3, noktalar: [[6, 0], [7, 0], [7, 0], [6, 0]], gizli: true },
            { id: "tke", tip: "yazi", x: 4, y: 10.4, metin: "100 J", gizli: true },
            { id: "tq", tip: "yazi", x: 6.5, y: 0.4, metin: "0 J", gizli: true }
          ],
          durumlar: [
            { metin: "Bırakılırken: PE = 2 · 10 · 5 = 100 J, KE = 0. Toplam ==100 J==." },
            { metin: "Sürtünme olmasaydı yerde KE = 100 J olurdu (v = 10 m/s).", goster: ["lim", "ke", "tke"] },
            { metin: "Gerçekte yere 8 m/s ile çarptı: KE = ½ · 2 · 8² = ==64 J==.", set: { ke: { noktalar: [[3.5, 0], [4.5, 0], [4.5, 6.4], [3.5, 6.4]] }, tke: { y: 6.8, metin: "64 J" } } },
            { metin: "Eksik 100 − 64 = ==36 J== hava direnciyle ısıya dönüştü. Toplam enerji yine 100 J.", goster: ["q", "tq"], set: { q: { noktalar: [[6, 0], [7, 0], [7, 3.6], [6, 3.6]] }, tq: { y: 4, metin: "36 J" } } }
          ] },
        { tip: "formul", parcalar: [
            { t: "E ilk", alt: "KE₁ + PE₁" }, "=", { t: "E son", alt: "KE₂ + PE₂" }, "+", { t: "Q", alt: "ısıya giden = f × yol" }
          ], aciklama: "Sürtünme kuvveti f, yol x ise ısıya giden enerji Q = f · x. Isı da bir enerjidir: ==toplam enerji değişmez==. Dışarıdan itme de varsa: PE₁ + KE₁ + F_dış · x − f · x = KE₂ + PE₂." },
        { tip: "ornek", baslik: "Sürtünmeli eğik yol", durum: "2 kg'lık kutu, 3 m yükseklikten durgun bırakılıyor ve 6 m'lik eğik yoldan sürtünmeli olarak kayıyor. Altta hızı 6 m/s. Sürtünme kuvveti kaç N?",
          adimlar: ["Başlangıç: PE = 2 · 10 · 3 = 60 J, KE = 0.", "Son: KE = ½ · 2 · 6² = 36 J, PE = 0.", "Isıya giden: Q = 60 − 36 = 24 J.", "Q = f · x → 24 = f · 6 → f = 4 N."],
          sonuc: "Sürtünme kuvveti 4 N, ısıya giden enerji 24 J." },
        { tip: "ornek", baslik: "Kamyondan kutu indirmek", durum: "Kasa yüksekliği 5 m olan kamyona 10 m'lik bir tahta dayanıyor. 4 kg'lık kutu tahtadan kayarak iniyor (g = 10 m/s²). Yere varış hızı sürtünmesizde ve 15 N sabit sürtünmede kaç m/s olur?",
          adimlar: ["Sürtünmesiz: m · g · h = ½ · m · v² → v² = 2 · 10 · 5 = 100 → v = 10 m/s.", "Sürtünmeli: başlangıç enerjisi 4 · 10 · 5 = 200 J. Isıya giden Q = 15 · 10 = 150 J.", "Yerde KE = 200 − 150 = 50 J = ½ · 4 · v² → v² = 25 → v = 5 m/s."],
          sonuc: "10 m/s ve 5 m/s. Sınavda böyle yaz: *The remaining energy was converted into thermal energy by friction.* *The mechanical energy decreased, but the total energy is conserved.*" }
      ]
    },
    {
      baslik: "Yay ve sarkaç",
      kisa: "Yayda ve sarkaçta enerji, iki tür arasında gidip gelir.",
      bloklar: [
        { tip: "ornek", baslik: "Yaydan fırlayan blok", durum: "0,5 kg'lık blok, k = 200 N/m olan yayı 0,1 m sıkıştırıyor. Sürtünmesiz yatay yüzeyde bırakılınca blok hangi hızla yayı terk eder?",
          adimlar: ["Yaydaki enerji: PE = ½ · 200 · 0,1² = 1 J.", "Yay serbest kalınca bütün enerji KE olur: ½ · 0,5 · v² = 1.", "0,25 · v² = 1 → v² = 4."],
          sonuc: "v = 2 m/s." },
        { tip: "tablo", baslik: "Sarkaç (sürtünmesiz)", head: ["Konum", "Hız", "KE", "PE"], rows: [
            ["En uç nokta", "0", "En küçük (0)", "En büyük"],
            ["Ara nokta", "Orta", "Orta", "Orta"],
            ["En alt nokta", "En büyük", "En büyük", "En küçük"]
          ], not: "Her konumda KE + PE aynıdır. Sınavda böyle yaz: *The pendulum has maximum kinetic energy at the lowest point.*" },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The elastic potential energy of the spring is converted into the kinetic energy of the block.*", metin: "Yaylı fırlatma sorularında kullan." },
            { ikon: "✍️", baslik: "*At the lowest point of the pendulum the potential energy is minimum.*", metin: "Sarkacın en alt noktası." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Conservation of energy*: enerji yok olmaz, yoktan var olmaz; yalnızca biçim değiştirir.",
            "Sürtünmesiz ve dış itme yokken: KE₁ + PE₁ = KE₂ + PE₂ (mekanik enerji korunur).",
            "Düşen cismin PE azalışı KE artışına eşittir; toplam çubuğu değişmez.",
            "Sürtünmesizse hız v² = 2·g·h ile bulunur; kütle, yol şekli ve uzunluğu etkilemez.",
            "Yukarı atışta tepede v = 0, h = v₀² / 2g; KE = PE olduğu yer yolun yarısıdır.",
            "Sürtünme varsa: E ilk = E son + Q, Q = f · x. Isı da enerjidir, toplam enerji sabittir.",
            "Yayda PE = ½kx² ile KE arasında dönüşüm olur; sarkaçta en altta KE en büyüktür.",
            "\"Mekanik enerji korunur\" için şart: sürtünme yok ve dışarıdan iş yok."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "A 1 kg object is released from rest from a height of 20 m in a frictionless environment (g = 10 m/s²). What is its speed just before it hits the ground?",
      opts: ["10 m/s", "20 m/s", "40 m/s", "200 m/s"], a: 1,
      why: "m · g · h = ½ · m · v² → v² = 2 · 10 · 20 = 400 → v = 20 m/s. 200 m/s cevabı karekökü ve ½'yi atlamaktır; kütle sadeleştiği için sonucu etkilemez." },
    { q: "A ball is released. The table shows its kinetic and potential energy at three positions. Which statement can be made from the table?",
      fig: { type: "table", head: ["Position", "KE (J)", "PE (J)"], rows: [["K (start)", "0", "80"], ["L", "30", "50"], ["M", "50", "10"]], caption: "Energies of the ball" },
      opts: ["Mechanical energy is conserved along the whole path.", "The decrease in PE between L and M is completely converted into KE.", "30 J is converted into thermal energy between K and L.", "20 J of mechanical energy is converted into thermal energy between L and M."], a: 3,
      why: "Toplamlar: K 80 J, L 80 J, M 60 J. K–L arasında kayıp yok. L–M arasında PE 40 J azaldı ama KE yalnızca 20 J arttı; fark 20 J ısıya gitti." },
    { q: "A 1 kg ball is thrown vertically upward from the ground at 20 m/s in a frictionless environment (g = 10 m/s²). What is the maximum height it reaches?",
      opts: ["20 m", "40 m", "10 m", "2 m"], a: 0,
      why: "Tepede v = 0: ½ · m · v₀² = m · g · h → h = v₀² / 2g = 400 / 20 = 20 m. 40 m cevabı paydadaki 2'yi unutmaktır (v₀² / g)." },
    { q: "The graph shows the kinetic and potential energy of a freely falling 2 kg object against its height above the ground (no friction, 1 unit = 10 J). At what height are the kinetic and potential energies equal?",
      fig: { type: "graph", xlabel: "h (m)", ylabel: "Energy (10 J)", xmax: 6, ymax: 11, lines: [{ from: [0, 0], to: [5, 10], label: "PE" }, { from: [0, 10], to: [5, 0], label: "KE" }], xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }], caption: "KE and PE against height" },
      opts: ["1 m", "2 m", "2.5 m", "4 m"], a: 2,
      why: "Toplam 100 J olduğundan KE = PE = 50 J (grafikte 5 birim) olduğu yerde iki doğru kesişir; PE = 20 · h = 50 → h = 2,5 m. Yolun tam ortasıdır." },
    { q: "A 4 kg box slides down a 10 m long plank from a height of 5 m. A constant friction force of 15 N acts on the box (g = 10 m/s²). What is the speed of the box at the bottom?",
      opts: ["10 m/s", "7.5 m/s", "5 m/s", "2.5 m/s"], a: 2,
      why: "Başlangıç enerjisi 4 · 10 · 5 = 200 J; ısıya giden 15 · 10 = 150 J; KE = 50 J = ½ · 4 · v² → v = 5 m/s. 10 m/s sürtünmeyi unutan cevaptır." }
  ]
};
