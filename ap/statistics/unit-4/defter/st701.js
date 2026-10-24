/* Kitpath not defteri · st701 · 7.1–7.2 Ortalama İçin Güven Aralığı (t)
   Kaynak: AP Statistics CED 7.1–7.2 (öğrenme hedefleri kendi anlatımımla). Blok türleri: /ap/_kit/defter.js başı.
   t∗ değerleri t tablosundan; t eğrileri gerçek t yoğunluğuyla çizildi (x = t + 4, y = yoğunluk × 10). */
window.DEFTER = {
  slug: "st701",
  amac: "Bu konu, popülasyon standart sapması σ bilinmediğinde bir ortalama için *confidence interval* kurmayı anlatıyor. *t distribution* ile *degrees of freedom*'ı, koşulları, x̄ ± t∗ · s/√n formülünü ve aralığı doğru yorumlamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "σ bilinmiyorsa: z yerine *t*",
      kisa: "σ yerine s koyunca standartlaştırılmış x̄ artık z değil, t izler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📐", terim: "Standard error (SE)", tr: "standart hata", tanim: "x̄'nın örnekten örneğe ne kadar oynadığının tahmini: SE = s/√n. σ'yı bilmediğimiz için onun yerine örnekten hesaplanan *s* kullanılır.", ornek: "n = 16, s = 20 TL ise SE = 20/4 = 5 TL." },
            { ikon: "🎚️", terim: "Degrees of freedom (df)", tr: "serbestlik derecesi", tanim: "t eğrisinin şeklini belirleyen sayı. Bir ortalama için ==df = n − 1==.", ornek: "16 öğrenci → df = 15." }
          ] },
        { tip: "formul", parcalar: [{ t: "t", alt: "t istatistiği" }, "=", { t: "x̄ − μ", alt: "örnek ortalaması − hedef ortalama" }, "÷", { t: "s/√n", alt: "SE" }],
          aciklama: "σ yerine s kullanınca ekstra belirsizlik doğar (s de her örnekte değişir). Bu yüzden istatistik z eğrisini değil, kuyrukları daha kalın olan *t distribution*'ı izler." }
      ]
    },
    {
      baslik: "*t distribution*: df büyüdükçe normale yaklaşır",
      kisa: "df küçükken kuyruklar kalın; df büyüdükçe t eğrisi standart normale oturur.",
      bloklar: [
        { tip: "grafik", baslik: "t eğrisi ve standart normal eğri", xlabel: "t (ya da z) değeri", ylabel: "Yoğunluk", xmax: 8, ymax: 5,
          xticks: [{ v: 1, label: "−3" }, { v: 2, label: "−2" }, { v: 3, label: "−1" }, { v: 4, label: "0" }, { v: 5, label: "1" }, { v: 6, label: "2" }, { v: 7, label: "3" }],
          ogeler: [
            { id: "z", tip: "egri", renk: 0, kesik: true, etiket: "", noktalar: [[0, 0.001], [0.25, 0.004], [0.5, 0.009], [0.75, 0.02], [1, 0.044], [1.25, 0.091], [1.5, 0.175], [1.75, 0.317], [2, 0.54], [2.25, 0.863], [2.5, 1.295], [2.75, 1.826], [3, 2.42], [3.25, 3.011], [3.5, 3.521], [3.75, 3.867], [4, 3.989], [4.25, 3.867], [4.5, 3.521], [4.75, 3.011], [5, 2.42], [5.25, 1.826], [5.5, 1.295], [5.75, 0.863], [6, 0.54], [6.25, 0.317], [6.5, 0.175], [6.75, 0.091], [7, 0.044], [7.25, 0.02], [7.5, 0.009], [7.75, 0.004], [8, 0.001]] },
            { id: "t", tip: "egri", renk: 1, etiket: "", gizli: true, noktalar: [[0, 0.131], [0.25, 0.155], [0.5, 0.186], [0.75, 0.225], [1, 0.274], [1.25, 0.338], [1.5, 0.422], [1.75, 0.533], [2, 0.68], [2.25, 0.878], [2.5, 1.141], [2.75, 1.487], [3, 1.925], [3.25, 2.438], [3.5, 2.963], [3.75, 3.376], [4, 3.536], [4.25, 3.376], [4.5, 2.963], [4.75, 2.438], [5, 1.925], [5.25, 1.487], [5.5, 1.141], [5.75, 0.878], [6, 0.68], [6.25, 0.533], [6.5, 0.422], [6.75, 0.338], [7, 0.274], [7.25, 0.225], [7.5, 0.186], [7.75, 0.155], [8, 0.131]] },
            { id: "zl", tip: "yazi", renk: 0, x: 6.2, y: 4.5, metin: "z (normal)" },
            { id: "tl", tip: "yazi", renk: 1, x: 1.8, y: 4.5, metin: "t, df = 2", gizli: true },
            { id: "okK", tip: "ok", renk: 1, from: [7.2, 1.5], to: [6.7, 0.35], gizli: true }
          ],
          durumlar: [
            { metin: "Önce standart normal eğri (z): merkezi 0, çan biçimli, simetrik." },
            { metin: "σ yerine s kullanınca t eğrisi çıkar. df = 2: tepe daha alçak, ==kuyruklar daha kalın==.", goster: ["t", "tl", "okK"] },
            { metin: "df = 5: tepe yükseldi, kuyruklar inceldi; eğri z'ye yaklaşıyor.", set: { t: { noktalar: [[0, 0.051], [0.25, 0.069], [0.5, 0.092], [0.75, 0.126], [1, 0.173], [1.25, 0.239], [1.5, 0.333], [1.75, 0.466], [2, 0.651], [2.25, 0.905], [2.5, 1.245], [2.75, 1.679], [3, 2.197], [3.25, 2.757], [3.5, 3.279], [3.75, 3.657], [4, 3.796], [4.25, 3.657], [4.5, 3.279], [4.75, 2.757], [5, 2.197], [5.25, 1.679], [5.5, 1.245], [5.75, 0.905], [6, 0.651], [6.25, 0.466], [6.5, 0.333], [6.75, 0.239], [7, 0.173], [7.25, 0.126], [7.5, 0.092], [7.75, 0.069], [8, 0.051]] }, tl: { metin: "t, df = 5" } }, gizle: ["okK"] },
            { metin: "df = 10: farkı gözle ayırmak zorlaşıyor.", set: { t: { noktalar: [[0, 0.02], [0.25, 0.031], [0.5, 0.048], [0.75, 0.074], [1, 0.114], [1.25, 0.176], [1.5, 0.269], [1.75, 0.409], [2, 0.611], [2.25, 0.895], [2.5, 1.274], [2.75, 1.751], [3, 2.304], [3.25, 2.88], [3.5, 3.397], [3.75, 3.76], [4, 3.891], [4.25, 3.76], [4.5, 3.397], [4.75, 2.88], [5, 2.304], [5.25, 1.751], [5.5, 1.274], [5.75, 0.895], [6, 0.611], [6.25, 0.409], [6.5, 0.269], [6.75, 0.176], [7, 0.114], [7.25, 0.074], [7.5, 0.048], [7.75, 0.031], [8, 0.02]] }, tl: { metin: "t, df = 10" } } },
            { metin: "df = 30: iki eğri neredeyse üst üste. df sonsuza giderken t eğrisi z eğrisine eşit olur.", set: { t: { noktalar: [[0, 0.005], [0.25, 0.01], [0.5, 0.02], [0.75, 0.037], [1, 0.068], [1.25, 0.121], [1.5, 0.211], [1.75, 0.353], [2, 0.569], [2.25, 0.877], [2.5, 1.29], [2.75, 1.801], [3, 2.38], [3.25, 2.966], [3.5, 3.479], [3.75, 3.831], [4, 3.956], [4.25, 3.831], [4.5, 3.479], [4.75, 2.966], [5, 2.38], [5.25, 1.801], [5.5, 1.29], [5.75, 0.877], [6, 0.569], [6.25, 0.353], [6.5, 0.211], [6.75, 0.121], [7, 0.068], [7.25, 0.037], [7.5, 0.02], [7.75, 0.01], [8, 0.005]] }, tl: { metin: "t, df = 30" } } }
          ] },
        { tip: "tablo", baslik: "%95 güven düzeyi için t∗ (tablo değerleri)", head: ["df", "2", "5", "10", "30", "∞ (z∗)"], rows: [["t∗", "4,303", "2,571", "2,228", "2,042", "1,960"]],
          not: "df küçüldükçe t∗ büyür; bu yüzden küçük örneklemde aralık daha geniş çıkar." },
        { tip: "liste", maddeler: [
            { ikon: "🔔", baslik: "Çan biçimli ve simetrik", metin: "Merkezi 0'da, tek tepeli." },
            { ikon: "📉", baslik: "z'den daha basık, kuyrukları kalın", metin: "Aşırı değerlerin olasılığı daha yüksek; bu yüzden t∗ > z∗." },
            { ikon: "🎚️", baslik: "Şekli df'e bağlı", metin: "df = n − 1 büyüdükçe eğri standart normale yaklaşır." }
          ] }
      ]
    },
    {
      baslik: "Koşullar: *Random*, 10%, *Normal*/*Large Sample*",
      kisa: "Aralığı kurmadan önce üç koşulu bağlamla birlikte kontrol et.",
      bloklar: [
        { tip: "tablo", baslik: "Bir ortalama için *t interval* koşulları", head: ["Koşul", "Nasıl kontrol edilir?"], rows: [
            ["Random", "Veri rastgele örneklemden (ya da randomize deneyden) gelmeli."],
            ["10%", "Yerine koymadan seçildiyse n ≤ popülasyonun %10'u (bağımsızlık)."],
            ["Normal / Large Sample", "n ≥ 30 ise yeterli (merkezi limit teoremi). n < 30 ise veri grafiği (nokta grafiği, kutu grafiği) güçlü çarpıklık ve uç değer göstermemeli, ya da popülasyonun normal olduğu bilinmeli."]
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "*Normal* koşulu sağlanır", maddeler: ["n ≥ 30", "n küçük ama grafik yaklaşık simetrik, uç değer yok"] },
          sag: { ikon: "⚠️", baslik: "Sağlanmaz ya da kanıtsız", maddeler: ["n küçük ve güçlü çarpık ya da uç değerli", "n küçük ve şekil hakkında hiçbir bilgi yok"] },
          oyun: [
            { metin: "n = 45; histogram hafif sağa çarpık.", cevap: "sol", neden: "n ≥ 30: örnek ortalamasının dağılımı yaklaşık normal." },
            { metin: "n = 12; nokta grafiği simetrik, uç değer yok.", cevap: "sol", neden: "Küçük örneklemde grafik yaklaşık simetrik: yeterli." },
            { metin: "n = 10; güçlü sağa çarpık ve bir uç değer var.", cevap: "sag", neden: "Küçük örneklem + güçlü çarpıklık/uç değer: *t* yöntemi güvenilmez." },
            { metin: "n = 8; veri grafiği çizilmemiş, popülasyon şekli bilinmiyor.", cevap: "sag", neden: "Normal koşulu ancak grafikle ya da bilgiyle gerekçelendirilir; kanıt yok." }
          ] },
        { tip: "tuzak", baslik: "Küçük örneklemde “n ≥ 30” deme", metin: "Normal koşulunu savunurken örneklem büyüklüğüne göre doğru gerekçeyi seç.", yanlis: "n = 14 ama merkezi limit teoremi sayesinde koşul sağlanır.", dogru: "n < 30 ise veri grafiğine bak: “nokta grafiği yaklaşık simetrik, uç değer yok.” Sadece rastgele seçim Normal koşulunu sağlamaz." }
      ]
    },
    {
      baslik: "t∗ nasıl bulunur?",
      kisa: "df = n − 1 satırı ile güven düzeyi sütununun kesişimi t∗'dır.",
      bloklar: [
        { tip: "adimlar", baslik: "Tablodan t∗ okumak", adimlar: [
            { baslik: "1 · df'i bul", metin: "df = n − 1. Örneğin n = 16 ise df = 15." },
            { baslik: "2 · Güven düzeyi sütununu seç", metin: "%90, %95 ya da %99 sütunu (iki kuyruklu aralık için)." },
            { baslik: "3 · Kesişimi oku", metin: "df = 15 ve %95 → t∗ = 2,131." },
            { baslik: "4 · Tabloda df yoksa", metin: "Bir küçük df'in satırını al (daha temkinli). Hesap makinesinde: invT(0,975; 15) = 2,131." }
          ] },
        { tip: "tablo", baslik: "Seçilmiş t∗ değerleri", head: ["df", "%90", "%95", "%99"], vurgu: 2, rows: [
            ["4", "2,132", "2,776", "4,604"],
            ["9", "1,833", "2,262", "3,250"],
            ["15", "1,753", "2,131", "2,947"],
            ["24", "1,711", "2,064", "2,797"],
            ["29", "1,699", "2,045", "2,756"],
            ["∞ (z∗)", "1,645", "1,960", "2,576"]
          ], not: "Aynı df'te güven düzeyi arttıkça t∗ büyür." },
        { tip: "tuzak", baslik: "df ve kritik değer", metin: "İki küçük hata aralığı yanlış yapar.", yanlis: "16 öğrenci var, df = 16 al; zaten z∗ = 1,960 kullanırım.", dogru: "df = n − 1 = 15 ve σ bilinmiyorsa t∗ = 2,131 kullan. z∗ aralığı olması gerekenden dar yapar." }
      ]
    },
    {
      baslik: "Aralığı kurmak: dört adım",
      kisa: "State, Plan, Do, Conclude: parametre, koşullar, hesap, bağlamlı yorum.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "x̄", alt: "nokta tahmini" }, "±", { t: "t∗", alt: "df = n − 1'e göre" }, "·", { t: "s/√n", alt: "SE" }],
          aciklama: "t∗ · s/√n kısmı *margin of error* (hata payı). Aralık: (x̄ − ME, x̄ + ME)." },
        { tip: "ornek", baslik: "Haftalık harçlık: %95 *confidence interval*", durum: "Okulda 1200 öğrenci var. Rastgele seçilen 16 öğrencinin haftalık harçlığı için x̄ = 84 TL ve s = 20 TL bulundu. Nokta grafiği yaklaşık simetrik ve uç değer yok. Okuldaki bütün öğrencilerin ortalama haftalık harçlığı için %95 güven aralığı kur.",
          adimlar: [
            "State: μ = okuldaki bütün öğrencilerin ortalama haftalık harçlığı (TL). %95 güven aralığı kuracağız.",
            "Plan: *one-sample t interval for μ*. Random: öğrenciler rastgele seçildi. 10%: 16 < 120 (1200'ün %10'u). Normal: n < 30 ama nokta grafiği yaklaşık simetrik, uç değer yok.",
            "Do: df = 16 − 1 = 15, t∗ = 2,131. SE = 20/√16 = 5. ME = 2,131 · 5 = 10,655. Aralık: 84 ± 10,655 = (73,3; 94,7).",
            "Conclude: “We are 95% confident that the interval from 73.3 to 94.7 TL captures the true mean weekly allowance of all students at this school.”"
          ],
          sonuc: "Aralık (73,3; 94,7) TL. Cümlede parametreyi (bütün öğrencilerin ortalaması), güven düzeyini ve bağlamı mutlaka yaz." }
      ]
    },
    {
      baslik: "Yorumlama ve hata payı",
      kisa: "Güven düzeyi yöntemin başarı oranıdır; n büyüdükçe hata payı küçülür.",
      bloklar: [
        { tip: "grafik", baslik: "Aynı veri, farklı güven düzeyi", xlabel: "Haftalık harçlık (TL)", ylabel: "", xmax: 50, ymax: 5,
          xticks: [{ v: 10, label: "70" }, { v: 20, label: "80" }, { v: 30, label: "90" }, { v: 40, label: "100" }, { v: 50, label: "110" }],
          ogeler: [
            { id: "xb", tip: "cizgi", renk: 0, kesik: true, from: [24, 0], to: [24, 4.4], etiket: "" },
            { id: "xbl", tip: "yazi", renk: 0, x: 24, y: 4.7, metin: "x̄ = 84" },
            { id: "c90", tip: "cizgi", renk: 1, from: [15.2, 3.6], to: [32.8, 3.6], etiket: "%90 (±8,8)", gizli: true },
            { id: "c95", tip: "cizgi", renk: 2, from: [13.3, 2.5], to: [34.7, 2.5], etiket: "%95 (±10,7)", gizli: true },
            { id: "c99", tip: "cizgi", renk: 3, from: [9.3, 1.4], to: [38.7, 1.4], etiket: "%99 (±14,7)", gizli: true }
          ],
          durumlar: [
            { metin: "x̄ = 84 TL, s = 20, n = 16 (df = 15). %90 için t∗ = 1,753: ±8,8 → (75,2; 92,8).", goster: ["c90"] },
            { metin: "%95 için t∗ = 2,131: ±10,7 → (73,3; 94,7). Aralık genişledi.", goster: ["c95"] },
            { metin: "%99 için t∗ = 2,947: ±14,7 → (69,3; 98,7). ==Daha çok güven, daha geniş aralık==.", goster: ["c99"] }
          ] },
        { tip: "ikili", sol: { ikon: "🔽", baslik: "Hata payı küçülür", maddeler: ["n artar (SE = s/√n küçülür)", "Güven düzeyi düşer (t∗ küçülür)", "Veri daha az dağınık (s küçük)"] },
          sag: { ikon: "🔼", baslik: "Hata payı büyür", maddeler: ["n azalır", "Güven düzeyi artar (t∗ büyür)", "Veri daha dağınık (s büyük)"] },
          oyun: [
            { metin: "Örneklem 16'dan 64'e çıkarılıyor.", cevap: "sol", neden: "√n arttığı için SE küçülür; ME de küçülür." },
            { metin: "Güven düzeyi %95'ten %99'a yükseltiliyor.", cevap: "sag", neden: "Daha büyük t∗ gerekir." },
            { metin: "Verinin standart sapması s büyük çıkıyor.", cevap: "sag", neden: "SE = s/√n büyür." },
            { metin: "Güven düzeyi %90'a düşürülüyor.", cevap: "sol", neden: "t∗ küçülür; ama yakalama şansı da azalır." }
          ] },
        { tip: "tuzak", baslik: "%95 neyin yüzdesi?", metin: "μ sabit bir sayıdır, rastgele olan aralıktır. %95, yöntemin başarı oranıdır.", yanlis: "“Öğrencilerin %95'i 73–95 TL alıyor.” ya da “μ'nün bu aralıkta olma olasılığı %95.”", dogru: "Aynı yöntemle çok kez aralık kurarsak yaklaşık %95'i gerçek μ'yü yakalar. Aralık bireyleri değil, ==popülasyon ortalamasını== tahmin eder." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "σ bilinmediğinde bir ortalama için ==*t interval*== kullanılır: x̄ ± t∗ · s/√n.",
            "SE = s/√n ve df = n − 1; t∗ tablodan (df ve güven düzeyi) okunur.",
            "*t distribution* simetrik ve çan biçimli ama z'den yayvandır; df büyüdükçe z'ye yaklaşır, t∗ küçülür.",
            "Koşullar: *Random*, 10% (n ≤ popülasyonun %10'u), *Normal*/*Large Sample* (n ≥ 30 ya da küçük n'de grafikte güçlü çarpıklık/uç değer yok).",
            "Dört adım: State (parametre), Plan (yöntem ve koşullar), Do (df, t∗, SE, ME, aralık), Conclude (bağlamlı cümle).",
            "Yorum: “We are C% confident that the interval from … to … captures the true mean … ”; olasılık dili ya da “bireylerin %95'i” deme.",
            "n ↑ → hata payı ↓; güven düzeyi ↑ → hata payı ↑; s ↑ → hata payı ↑."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir araştırmacı, σ bilinmeyen bir popülasyonun ortalaması için n = 10 gözlemle %95 güven aralığı kuruyor. Kullanması gereken kritik değer hangisidir?",
      opts: ["z∗ = 1,960", "t∗ = 2,228", "t∗ = 2,262", "t∗ = 2,576"], a: 2,
      why: "σ bilinmediği için t∗ kullanılır; df = n − 1 = 9 ve %95 için t∗ = 2,262. En çekici yanlış şık 2,228: bu değer df = 10'a ait, yani df'i n − 1 yerine n almak." },
    { q: "Bir okuldaki öğrencilerin günlük ekran süresini tahmin etmek için rastgele seçilen 25 öğrenciden aşağıdaki özet elde ediliyor (nokta grafiği yaklaşık simetrik, uç değer yok). Ortalama ekran süresi için %99 güven aralığı hangisidir?",
      fig: { type: "table", head: ["n", "x̄ (dk)", "s (dk)"], rows: [["25", "48", "10"]], caption: "Örneklem özeti" },
      opts: ["(42,4; 53,6)", "(42,8; 53,2)", "(43,9; 52,1)", "(46,9; 49,1)"], a: 0,
      why: "df = 24 ve %99 için t∗ = 2,797; SE = 10/√25 = 2; ME = 2,797 · 2 = 5,594; aralık 48 ± 5,594 = (42,4; 53,6). (42,8; 53,2) z∗ = 2,576 kullanır, (43,9; 52,1) %99 yerine %95 t∗'ını (2,064), (46,9; 49,1) ise SE'yi s/n diye hesaplar." },
    { q: "Rastgele seçilen 16 öğrencinin haftalık harçlığına dayanan %95 güven aralığı (73,3; 94,7) TL bulunmuştur. Aşağıdakilerden hangisi bu aralığın doğru yorumudur?",
      opts: ["Okuldaki öğrencilerin %95'i haftada 73,3 ile 94,7 TL arasında harçlık alıyor.", "Örnek ortalamasının bu aralıkta olma olasılığı %95'tir.", "Gerçek ortalamanın bu sabit aralıkta olma olasılığı 0,95'tir.", "Aralığın, okuldaki bütün öğrencilerin gerçek ortalama haftalık harçlığını yakaladığından %95 eminiz."], a: 3,
      why: "Güven düzeyi, yöntemin başarı oranını anlatır ve parametre (popülasyon ortalaması) hakkında konuşur. İlk şık bireylere bakar; ikinci şık x̄'yı kullanır (x̄ aralığın tam ortasıdır, zaten içindedir); üçüncü şık, sabit bir aralık için olasılık dili kullanır, μ sabit olduğu için yanlıştır." },
    { q: "Bir kafedeki 12 rastgele müşterinin harcaması (TL) aşağıda gösteriliyor. Ortalama harcama için t aralığı kurulabilir mi?",
      fig: { type: "dot", values: [12, 13, 13, 14, 14, 15, 15, 16, 17, 18, 22, 95], label: "Harcama (TL)" },
      opts: ["Evet; örneklem rastgele olduğu için Normal koşulu sağlanır.", "Hayır; n küçük ve veri güçlü sağa çarpık, bir uç değer var: Normal koşulu desteklenmiyor.", "Evet; n > 10 olduğu için merkezi limit teoremi uygulanır.", "Normal koşulu yalnızca z aralığı için gerekir."], a: 1,
      why: "n = 12 < 30 olduğu için veri grafiğine bakılır; 95 TL'lik uç değer ve çarpıklık Normal koşulunu desteklemez. Rastgelelik Normal koşulunu sağlamaz, n > 10 ise merkezi limit teoremi için yeterli değildir (kural n ≥ 30). Normal koşul t aralığı için de gereklidir." },
    { q: "Aynı x̄ ve s ile, aynı güven düzeyinde örneklem büyüklüğü n = 25'ten n = 100'e çıkarılıyor. Margin of error'a ne olur?",
      opts: ["Aynı kalır.", "Dörtte birine iner.", "Yaklaşık yarısına iner.", "İki katına çıkar."], a: 2,
      why: "SE = s/√n olduğundan n dört katına çıkınca SE yarıya iner; df de arttığı için t∗ biraz küçülür, yani ME yaklaşık yarıya (biraz daha azına) iner. “Dörtte bir” şıkkı SE'yi s/n sanmaktan gelir." }
  ]
};
