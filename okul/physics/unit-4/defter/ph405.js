/* Kitora not defteri · ph405 · 4.5 Su Dalgalarında Yansıma ve Kırılma
   Kapsam: defter-araclari/kaynak/okul-10-2025-26.md (Physics Unit 4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph405",
  amac: "Bu konu su dalgalarının engele çarpıp geri dönmesini (yansıma) ve derinliği değişen bölgeye girince yön değiştirmesini (kırılma) anlatıyor. Dalga leğeninde ışın çizmeyi; hız, dalga boyu ve frekansın nasıl değiştiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Dalga leğeni, cephe, ışın ve normal",
      kisa: "Dalga cephesi aynı fazdaki noktaları birleştirir; ışın ona diktir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🌊", terim: "Ripple tank", tr: "dalga leğeni", tanim: "Altından ışıkla aydınlatılan sığ bir su leğeni; su dalgalarının cephelerini perdede gösterir.", ornek: "Cetvelle suya vurunca düz dalga oluşur." },
            { ikon: "📏", terim: "Wavefront", tr: "dalga cephesi", tanim: "Aynı fazdaki (örneğin tepedeki) noktaları birleştiren çizgi. Art arda iki cephe arası λ'dır.", ornek: "Perdede görülen parlak çizgiler." },
            { ikon: "➡️", terim: "Ray", tr: "ışın", tanim: "Dalganın ilerleme yönünü gösteren, cepheye ==dik== ok.", ornek: "Düz dalgada ışınlar birbirine paraleldir." },
            { ikon: "📐", terim: "Normal", tr: "normal", tanim: "Yansıtıcı ya da kırıcı yüzeye çizilen dik doğru. ==Açılar normalden ölçülür.==", ornek: "Düz bir engelde normal, engele 90°'dir." }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "➖", baslik: "*Plane wave* (düz dalga)", maddeler: ["Cepheler birbirine paralel doğrular", "Kaynak: cetvel ya da uzun çubuk"] },
          sag: { ikon: "⭕", baslik: "*Circular wave* (dairesel dalga)", maddeler: ["Cepheler halka biçiminde", "Kaynak: tek nokta, damlayan su"] }
        },
        { tip: "not", metin: "**Sınavda böyle yaz:** *A wavefront joins points that are in phase.* · *The ray is perpendicular to the wavefront.* · *The angle is measured from the normal.*" }
      ]
    },
    {
      baslik: "Yansıma kuralı: i = r",
      kisa: "Gelme açısı yansıma açısına eşittir: i = r. Hız, λ ve f aynı kalır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Dalga leğeninde düz bir engelde yansıma (üstten görünüş)",
          xlabel: "",
          ylabel: "",
          xmax: 16,
          ymax: 11,
          xticks: [],
          yticks: [],
          ogeler: [
            { id: "eng", tip: "cizgi", renk: 3, from: [0, 2], to: [16, 2] },
            { id: "engx", tip: "yazi", x: 15.8, y: 1.2, metin: "düz engel", hiza: "end" },
            { id: "nrm", tip: "cizgi", renk: 0, kesik: true, from: [8, 2], to: [8, 10] },
            { id: "nrmx", tip: "yazi", x: 8.25, y: 10.3, metin: "normal", hiza: "start" },
            { id: "gi", tip: "ok", renk: 1, from: [3, 7], to: [8, 2], gizli: true },
            { id: "gc0", tip: "cizgi", from: [3.65, 4.65], to: [5.35, 6.35], renk: 1, gizli: true },
            { id: "gc1", tip: "cizgi", from: [5.65, 2.65], to: [7.35, 4.35], renk: 1, gizli: true },
            { id: "ix", tip: "yazi", x: 7.8, y: 5.6, metin: "i = 45°", hiza: "end", gizli: true },
            { id: "yi", tip: "ok", renk: 2, from: [8, 2], to: [13, 7], gizli: true },
            { id: "yc0", tip: "cizgi", from: [12.35, 4.65], to: [10.65, 6.35], renk: 2, gizli: true },
            { id: "yc1", tip: "cizgi", from: [10.35, 2.65], to: [8.65, 4.35], renk: 2, gizli: true },
            { id: "rx", tip: "yazi", x: 8.25, y: 5.6, metin: "r = 45°", hiza: "start", gizli: true },
            { id: "ir", tip: "yazi", x: 13, y: 9.2, metin: "i = r", gizli: true }
          ],
          durumlar: [
            { metin: "Dalga leğenine düz bir engel koyduk. Normal, engele dik çizilen kesikli doğrudur." },
            { metin: "Gelen düz dalganın cepheleri (yeşil) ışına diktir. Gelen ışın normalle ==i = 45°== yapıyor.", goster: ["gi", "gc0", "gc1", "ix"] },
            { metin: "Dalga engelden yansıdı: yansıyan ışın (kırmızı) normalle ==r = 45°== yapıyor.", goster: ["yi", "yc0", "yc1", "rx"] },
            { metin: "Yansıma kuralı: ==i = r==. Cepheler arası mesafe (λ) değişmedi: hız, λ ve f aynı kaldı.", goster: ["ir"] }
          ]
        },
        { tip: "formul", parcalar: [{ t: "i", alt: "gelme açısı" }, "=", { t: "r", alt: "yansıma açısı" }], aciklama: "İki açı da ==normalden== ölçülür. Gelen ışın, yansıyan ışın ve normal aynı düzlemdedir." },
        {
          tip: "ornek",
          baslik: "Işın engelle 30° yapıyor",
          durum: "Dalga leğeninde bir ışın düz engelle 30° açı yapıyor. Gelme açısı, yansıma açısı ve yansıyan ışının engelle yaptığı açı kaçtır?",
          adimlar: ["Açılar normalden ölçülür; normal engele 90°'dir.", "i = 90° − 30° = 60°.", "Yansıma kuralı: r = i = 60°.", "Yansıyan ışın engelle 90° − 60° = 30° yapar."],
          sonuc: "==i = r = 60°;== yansıyan ışın engelle 30° yapar. Sınavda böyle yaz: *The angle of incidence equals the angle of reflection, both measured from the normal.*"
        },
        {
          tip: "tuzak",
          baslik: "Açıyı yüzeyden ölçmek",
          metin: "Soruda verilen açı çoğu zaman ışınla yüzey arasındadır. Doğrudan \"i = 30°\" yazmak yanlıştır.",
          yanlis: "Işın yüzeyle 30° yapıyorsa gelme açısı 30°'dir.",
          dogru: "Gelme açısı ==normalden== ölçülür: 90° − 30° = 60°. (Dalga cephesiyle yüzey arasındaki açı ise gelme açısına eşittir.)"
        }
      ]
    },
    {
      baslik: "Yansımada neler değişmez? Sabit ve serbest uç",
      kisa: "Aynı ortamda hız, dalga boyu ve frekans değişmez; yalnızca yön değişir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Yansımada ne olur?",
          head: ["Büyüklük", "Yansımada"],
          rows: [["Hız v", "Değişmez (aynı ortam)"], ["Dalga boyu λ", "Değişmez"], ["Frekans f, periyot T", "Değişmez"], ["Yayılma yönü", "Değişir (i = r)"], ["Genlik", "Biraz azalabilir (enerjinin bir kısmı kaybolur)"]],
          not: "Sınavda böyle yaz: *In reflection the speed, wavelength and frequency do not change.*"
        },
        {
          tip: "ikili",
          sol: { ikon: "🧱", baslik: "*Fixed end* (sabit uç)", maddeler: ["Atma ters döner: tepe gider, çukur gelir", "İp duvara bağlı"] },
          sag: { ikon: "🪝", baslik: "*Free end* (serbest uç)", maddeler: ["Atma aynı yönde döner: tepe gider, tepe gelir", "İp ucu serbestçe oynayabilir"] },
          oyun: [
            { metin: "Duvara bağlı ipte ilerleyen tepe, çukur olarak geri döner.", cevap: "sol", neden: "Sabit uç atmayı ters çevirir." },
            { metin: "İp ucu bir halkada serbestçe kayıyor; gelen tepe tepe olarak döner.", cevap: "sag", neden: "Serbest uç atmayı ters çevirmez." },
            { metin: "Yansıyan atma gelenle aynı tarafta (aynı yönde) görünüyor.", cevap: "sag", neden: "Ters dönmemiş: serbest uç." }
          ]
        },
        {
          tip: "not",
          metin: "Neden ters döner? Atma sabit uca gelince ip, ucu (duvarı) yukarı çeker; Newton'un üçüncü yasası gereği duvar da ipi aynı büyüklükte aşağı çeker ve bu aşağı kuvvet ters bir atma üretir. Serbest uçta ip engellenmediği için atma ters dönmez. ==Süperpozisyon==: iki atma aynı noktada buluşunca yer değiştirmeleri toplanır; sonra her biri kendi biçimiyle yoluna devam eder (ek bilgi: ders sunumunda başlık olarak geçiyor)."
        }
      ]
    },
    {
      baslik: "Kırılma: derin sudan sığ suya",
      kisa: "Derin sudan sığ suya geçen dalganın hızı ve dalga boyu azalır; frekansı değişmez.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Neden döner? Bando takımı benzetmesi",
          adimlar: [
            { baslik: "Hat eğik gelir", metin: "Bando, asfalttan çamurlu zemine eğik bir hatla yaklaşır; herkes aynı hızda." },
            { baslik: "Önce giren yavaşlar", metin: "Çamura ilk giren sıra yavaşlar; hâlâ asfaltta olanlar hızını korur." },
            { baslik: "Hat döner", metin: "Hızlı taraf yetişir, hat sınıra daha paralel olur: ilerleme yönü ==normale doğru== bükülür." }
          ]
        },
        {
          tip: "grafik",
          baslik: "Dalga leğeninde kırılma (üstten görünüş): üst yarı derin, alt yarı sığ",
          xlabel: "",
          ylabel: "",
          xmax: 16,
          ymax: 11,
          xticks: [],
          yticks: [],
          ogeler: [
            { id: "snr", tip: "cizgi", renk: 3, from: [0, 5.5], to: [16, 5.5] },
            { id: "nr", tip: "cizgi", renk: 0, kesik: true, from: [8, 0.8], to: [8, 10.2] },
            { id: "dd", tip: "yazi", x: 15.8, y: 9.9, metin: "derin su", hiza: "end" },
            { id: "ss", tip: "yazi", x: 15.8, y: 0.9, metin: "sığ su", hiza: "end" },
            { id: "k10", tip: "cizgi", from: [4, 5.5], to: [6.04, 8.22], renk: 1, gizli: true },
            { id: "k11", tip: "cizgi", from: [8, 5.5], to: [10.04, 8.22], renk: 1, gizli: true },
            { id: "k12", tip: "cizgi", from: [12, 5.5], to: [14.04, 8.22], renk: 1, gizli: true },
            { id: "gr", tip: "ok", renk: 1, from: [3.2, 9.1], to: [8, 5.5], gizli: true },
            { id: "ix", tip: "yazi", x: 7.9, y: 8.5, metin: "i = 53°", hiza: "end", gizli: true },
            { id: "k20", tip: "cizgi", from: [4, 5.5], to: [1.12, 3.34], renk: 2, gizli: true },
            { id: "k21", tip: "cizgi", from: [8, 5.5], to: [5.12, 3.34], renk: 2, gizli: true },
            { id: "k22", tip: "cizgi", from: [12, 5.5], to: [9.12, 3.34], renk: 2, gizli: true },
            { id: "kr", tip: "ok", renk: 2, from: [8, 5.5], to: [11, 1.5], gizli: true },
            { id: "rx", tip: "yazi", x: 8.25, y: 1.8, metin: "r = 37°", hiza: "start", gizli: true },
            { id: "lm", tip: "yazi", x: 12.2, y: 7.6, metin: "λ₁", gizli: true },
            { id: "ln", tip: "yazi", x: 4, y: 2, metin: "λ₂ < λ₁", gizli: true }
          ],
          durumlar: [
            { metin: "Leğenin üst yarısı derin, alt yarısı sığ (cam levha koyduk). Sınır yatay; normal sınıra dik." },
            { metin: "Derin suda cepheler (yeşil) arası λ₁. Gelen ışın cepheye dik ve normalle ==i = 53°== yapıyor.", goster: ["gr", "k10", "k11", "k12", "ix", "lm"] },
            { metin: "Sığ suya girince dalga yavaşlar: cepheler sıklaşır (λ₂ < λ₁) ve ışın ==normale yaklaşır==.", goster: ["kr", "k20", "k21", "k22", "ln"] },
            { metin: "Kırılma açısı ==r = 37° < i = 53°==. Frekans değişmedi; λ ve v aynı oranda küçüldü.", goster: ["rx"] }
          ]
        },
        { tip: "not", metin: "**Sınavda böyle yaz:** *The ray bends toward the normal because the wave slows down in shallow water.* · *Refraction is the change in the direction of a wave as it passes into a medium with a different speed.*" }
      ]
    },
    {
      baslik: "Kırılmada neler değişir, neler değişmez?",
      kisa: "Frekans ve periyot sabit; hız, dalga boyu ve yön değişir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Derin ↔ sığ geçişleri",
          head: ["Büyüklük", "Derin → sığ", "Sığ → derin"],
          rows: [["Hız v", "Azalır", "Artar"], ["Dalga boyu λ", "Azalır", "Artar"], ["Frekans f, periyot T", "Değişmez", "Değişmez"], ["Yön", "Normale yaklaşır (r < i)", "Normalden uzaklaşır (r > i)"], ["Dalga cepheleri", "Sıklaşır", "Seyrekleşir"]]
        },
        {
          tip: "ikili",
          sol: { ikon: "🔄", baslik: "Değişir", maddeler: ["Hız v", "Dalga boyu λ ve ilerleme yönü"] },
          sag: { ikon: "🔒", baslik: "Değişmez", maddeler: ["Frekans f", "Periyot T"] },
          oyun: [
            { metin: "Derin sudan sığ suya geçerken dalga boyu.", cevap: "sol", neden: "Hız azalır, λ = v/f de azalır." },
            { metin: "Derin sudan sığ suya geçerken frekans.", cevap: "sag", neden: "Frekansı kaynak belirler." },
            { metin: "Derin sudan sığ suya geçerken dalga hızı.", cevap: "sol", neden: "Hızı ortam (derinlik) belirler." },
            { metin: "Derin sudan sığ suya geçerken periyot.", cevap: "sag", neden: "T = 1/f ve f değişmez." },
            { metin: "Dalga sınıra dik geldiğinde ilerleme doğrultusu.", cevap: "sag", neden: "i = 0° ise r = 0°: sapma yok. (Hız ve λ yine değişir.)" }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Sığ suda dalga boyu büyür mü?",
          metin: "Sığ suda cepheler sıklaşır. \"Dalga sığda yayılır, genişler\" sanılır; oysa λ küçülür.",
          yanlis: "Dalga sığ suya girince dalga boyu büyür.",
          dogru: "Sığ suda hız ve ==dalga boyu küçülür==; frekans aynı kalır. Sınavda böyle yaz: *When the wave moves from deep to shallow water, its speed and wavelength decrease but its frequency stays the same.*"
        }
      ]
    },
    {
      baslik: "Kırılma hesabı (ek bilgi) ve kıyıdaki dalgalar",
      kisa: "Açıların sinüsleri oranı, hızlar ve dalga boyları oranına eşittir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [{ t: "sin i / sin r", alt: "açılar normalden" }, "=", { t: "v₁ / v₂", alt: "1: gelen ortam" }, "=", { t: "λ₁ / λ₂", alt: "2: kırılan ortam" }],
          aciklama: "Hesap sorusu gelirse bu oranı kullan. Sadece yön soruluyorsa kural yeter: yavaş ortama giren normale yaklaşır, hızlı ortama giren uzaklaşır."
        },
        {
          tip: "ornek",
          baslik: "Derinden sığa geçen dalga",
          durum: "Frekansı 5 Hz olan su dalgası derin bölgede v₁ = 20 cm/s, sığ bölgede v₂ = 15 cm/s hızla ilerliyor. Gelme açısı i = 53°. λ₁, λ₂ ve r kaçtır? (sin 53° = 0,8; sin 37° = 0,6)",
          adimlar: ["λ₁ = v₁ ÷ f = 20 ÷ 5 = 4 cm.", "λ₂ = v₂ ÷ f = 15 ÷ 5 = 3 cm (frekans değişmez).", "sin r = sin i × (v₂ ÷ v₁) = 0,8 × 0,75 = 0,6.", "sin r = 0,6 → r = 37°. r < i: ışın normale yaklaştı."],
          sonuc: "==λ₁ = 4 cm, λ₂ = 3 cm, r = 37°.== Sınavda böyle yaz: *The ratio of the sines of the angles equals the ratio of the wave speeds.*"
        },
        { tip: "not", metin: "Dalgalar kıyıya çoğu zaman yaklaşık paralel gelir. Sebebi kırılmadır: kıyıya yaklaşan dalga sığ suya girip yavaşlar ve ışın, sığ suya girdikçe normale (kıyıya dik doğrultuya) doğru bükülür." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: [
            "Dalga cephesi aynı fazdaki noktaları birleştirir; ışın cepheye, normal yüzeye diktir. Açılar normalden ölçülür.",
            "Yansıma: i = r. Aynı ortamda hız, λ ve f değişmez; yalnızca yön değişir.",
            "Sabit uçtan yansıyan atma ters döner; serbest uçtan aynı yönde döner.",
            "Derin sudan sığ suya kırılma: hız ve λ azalır; f ve T değişmez.",
            "Yavaş ortama giren dalga normale yaklaşır (r < i); hızlı ortama giren normalden uzaklaşır.",
            "Sığ suda dalga cepheleri sıklaşır; dalga sınıra dik gelirse sapmaz ama yine yavaşlar.",
            "sin i / sin r = v₁ / v₂ = λ₁ / λ₂.",
            "Dalgalar kıyıya yaklaşırken kırılır ve kıyıya yaklaşık paralel gelir."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Plane water waves in a ripple tank hit a flat barrier and are reflected. The incident ray makes an angle of 40° with the barrier. What is the angle of reflection?",
      opts: ["40°", "50°", "80°", "100°"],
      a: 1,
      why: "Açılar normalden ölçülür: i = 90° − 40° = 50°. Yansıma kuralına göre r = i = 50°. A en çekici yanlış şıktır: verilen açı yüzeyle ışın arasındadır, gelme açısı değildir."
    },
    {
      q: "At one end of a ripple tank 90 cm across, a 6 Hz wave generator produces waves of wavelength 30 mm. How long do the waves need to cross the tank?",
      opts: ["3 s", "5 s", "10 s", "7 s"],
      a: 1,
      why: "v = λf = 3 cm × 6 Hz = 18 cm/s. t = yol ÷ hız = 90 ÷ 18 = 5 s. Birimleri karıştıran (30 mm ile 90 cm'i aynı birime çevirmeyen) 3 s ya da 10 s gibi cevaplara gider."
    },
    {
      q: "Water waves move from a shallow region into a deep region. Which statement is correct?",
      opts: ["The speed decreases and the ray bends toward the normal.", "The frequency increases and the wavelength does not change.", "The wavelength decreases and the period increases.", "The speed and the wavelength increase and the ray bends away from the normal."],
      a: 3,
      why: "Derin ortam hızlı ortamdır: v artar, f sabit olduğundan λ = v/f de artar. Hızlı ortama giren ışın normalden uzaklaşır. A, derinden sığa geçişin sonucudur."
    },
    {
      q: "One end of a rope is fixed to a wall. A crest pulse travels along the rope, hits the fixed end and is reflected. Which statement about the reflected pulse is correct?",
      opts: ["Its speed is halved and it returns as a crest.", "It returns as a crest in the same direction.", "It returns as a trough (inverted) and its speed does not change.", "It is not reflected; it dies out at the end of the rope."],
      a: 2,
      why: "Sabit uç atmayı ters çevirir: tepe çukur olarak döner. Aynı ortamda yansıyan atmanın hızı değişmez. B serbest uçtaki durumdur."
    },
    {
      q: "A water wave moves from the deep region to the shallow region of a ripple tank. The frequency is 5 Hz, and the speed is 20 cm/s in the deep region and 15 cm/s in the shallow region. What is the wavelength in the shallow region?",
      opts: ["4 cm", "1.5 cm", "3 cm", "75 cm"],
      a: 2,
      why: "Frekans değişmez: λ₂ = v₂ ÷ f = 15 ÷ 5 = 3 cm. A derin bölgenin dalga boyudur (20 ÷ 5 = 4 cm); sığ bölgede dalga boyu küçülür."
    }
  ]
};
