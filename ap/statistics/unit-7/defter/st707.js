/* Kitpath not defteri · st707 · 7.10 Doğru Çıkarım Yöntemini Seçmek
   Kaynak: AP Statistics CED 7.10 (öğrenme hedefleri kendi anlatımımla); Unit 6 oran prosedürleri karşılaştırma için kısaca özetlendi.
   Sayılar: 1-Prop z: n = 100, p̂ = 0,40, p₀ = 0,30 → z ≈ 2,18, iki yönlü P ≈ 0,029. Grafik: t = 2,0 için z ve t (df = 15) kuyruk alanları.
   Grafikte x = değer + 4, y = yoğunluk × 10. */
window.DEFTER = {
  slug: "st707",
  amac: "Bu konu, bir soruya bakıp doğru çıkarım prosedürünü seçmeyi anlatıyor: değişken oran mı ortalama mı, kaç grup var, veri eşleştirilmiş mi, aralık mı test mi isteniyor? Seçtiğin prosedürün koşullarını kontrol edip dört adımla bağlamlı sonuca varmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Önce değişkene bak: oran mı, ortalama mı?",
      kisa: "Kategorik değişken oran (z), sayısal değişken ortalama (t) demektir.",
      bloklar: [
        { tip: "tablo", baslik: "Oran ve ortalama prosedürleri", head: ["", "Oran (kategorik)", "Ortalama (sayısal)"], rows: [
            ["Parametre", "p ya da p₁ − p₂", "μ, μ_d ya da μ₁ − μ₂"],
            ["İstatistik", "p̂ ya da p̂₁ − p̂₂", "x̄, x̄_d ya da x̄₁ − x̄₂"],
            ["Standartlaştırılmış istatistik", "z (standart normal)", "t (df ile)"],
            ["Örnek soru", "Öğrencilerin kaçı yürüyerek geliyor?", "Ortalama geliş süresi kaç dakika?"]
          ] },
        { tip: "ikili", sol: { ikon: "🥧", baslik: "Oran → *z* prosedürleri", maddeler: ["Kategorik değişken: “evet/hayır”, kategori", "Parametre p, istatistik p̂"] },
          sag: { ikon: "📏", baslik: "Ortalama → *t* prosedürleri", maddeler: ["Sayısal (ölçülen) değişken", "Parametre μ, istatistik x̄"] },
          oyun: [
            { metin: "Okuldaki öğrencilerin kaçı okula yürüyerek geliyor?", cevap: "sol", neden: "Evet/hayır (yürüyor mu?): kategorik; parametre p." },
            { metin: "Öğrencilerin okula ortalama geliş süresi kaç dakika?", cevap: "sag", neden: "Ölçülen sayı: ortalama; parametre μ." },
            { metin: "Flaş kartla çalışanların sınavı geçme yüzdesi, tekrar okuyanlardan farklı mı?", cevap: "sol", neden: "“Geçti/kaldı” kategorik: iki oran." },
            { metin: "Aynı öğrencilerin telefon yanında ve dışarıdayken test puanları.", cevap: "sag", neden: "Puan sayısal: ortalama farkı (eşleştirilmiş)." },
            { metin: "Bir telefon modelinin ortalama pil ömrü (saat).", cevap: "sag", neden: "Ölçülen süre: ortalama." }
          ] }
      ]
    },
    {
      baslik: "Karar ağacı: dört soru",
      kisa: "Değişkeni, grup düzenini, amacı ve koşulları sırayla belirle.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Confidence interval", tr: "güven aralığı", tanim: "Parametre için ==makul değerler== aralığı. “Ne kadar?” sorusunu yanıtlar.", ornek: "Ortalama pil ömrü için (8,78; 10,02) saat." },
            { ikon: "⚖️", terim: "Significance test", tr: "anlamlılık testi", tanim: "Bir iddiaya karşı kanıt olup olmadığını P-değeri ile α'yı karşılaştırarak söyler.", ornek: "H₀: p = 0,30 testi, P ≈ 0,029 < 0,05." }
          ] },
        { tip: "adimlar", baslik: "Prosedür seçmek için dört soru", adimlar: [
            { baslik: "1 · Değişken türü", metin: "Kategorik ise oran (*z*), sayısal ise ortalama (*t*)." },
            { baslik: "2 · Kaç grup, nasıl veri?", metin: "Tek örneklem; iki bağımsız grup (rastgele örneklem ya da rastgele atama); ya da aynı birimler iki kez ölçülmüş / çiftler (yalnızca ortalamada: *paired*)." },
            { baslik: "3 · Aralık mı, test mi?", metin: "“Tahmin et, ne kadar?” → *confidence interval*. “İddia, kanıt var mı, farklı mı, daha yüksek mi?” → *significance test*." },
            { baslik: "4 · Koşullar", metin: "Random, 10% ve oranda Large Counts / ortalamada Normal. Seçtiğin prosedürün koşullarını bağlamla birlikte yaz." }
          ] },
        { tip: "harita", merkez: "Hangi prosedür?", dallar: [
            { baslik: "1-Prop *z*", alt: "tek grup, kategorik" },
            { baslik: "2-Prop *z*", alt: "iki bağımsız grup, kategorik" },
            { baslik: "1-Sample *t*", alt: "tek grup, sayısal" },
            { baslik: "Paired *t*", alt: "aynı birimler / çiftler, sayısal" },
            { baslik: "2-Sample *t*", alt: "iki bağımsız grup, sayısal" }
          ] }
      ]
    },
    {
      baslik: "Beş prosedürün özeti",
      kisa: "Her prosedürün parametresi, SE'si ve koşulları farklıdır; birbirine karıştırma.",
      bloklar: [
        { tip: "tablo", baslik: "Oran prosedürleri (z)", head: ["Prosedür", "Parametre", "SE (aralık)", "Large Counts"], rows: [
            ["1-Prop z", "p", "√( p̂(1 − p̂)/n )", "np̂ ≥ 10 ve n(1 − p̂) ≥ 10 (testte p₀ ile: np₀ ≥ 10, n(1 − p₀) ≥ 10)"],
            ["2-Prop z", "p₁ − p₂", "√( p̂₁(1 − p̂₁)/n₁ + p̂₂(1 − p̂₂)/n₂ )", "Her grupta başarı ve başarısızlık sayısı ≥ 10 (testte SE'de birleştirilmiş p̂_c)"]
          ] },
        { tip: "tablo", baslik: "Ortalama prosedürleri (t)", head: ["Prosedür", "Parametre", "SE", "df"], rows: [
            ["1-Sample t", "μ", "s/√n", "n − 1"],
            ["Paired t", "μ_d", "s_d/√n", "n − 1 (n: çift sayısı)"],
            ["2-Sample t", "μ₁ − μ₂", "√( s₁²/n₁ + s₂²/n₂ )", "Tablo: min(n₁ − 1, n₂ − 1); hesap makinesi: kesirli"]
          ], not: "Üçünde de Random, 10% ve Normal koşulları geçerlidir. Normal: n ≥ 30 ya da küçük n'de grafikte güçlü çarpıklık/uç değer yok; eşleştirilmiş veride farklar için, iki örneklemde her grup için kontrol edilir." },
        { tip: "tuzak", baslik: "Testte p₀, aralıkta p̂", metin: "Large Counts'u hangi orana göre kontrol edeceğin, aralık mı test mi olduğuna bağlıdır.", yanlis: "Tek oran testinde np̂ ve n(1 − p̂) ≥ 10'a bakıp geçtim.", dogru: "Testte H₀ doğru varsayıldığı için np₀ ≥ 10 ve n(1 − p₀) ≥ 10 kontrol edilir; aralıkta ise p̂ ile." }
      ]
    },
    {
      baslik: "Durumdan prosedüre: alıştırma",
      kisa: "Değişkeni, düzeni ve amacı söyle; prosedür kendiliğinden çıkar.",
      bloklar: [
        { tip: "tablo", baslik: "Altı durum, altı prosedür", head: ["Durum", "Veri", "Prosedür"], rows: [
            ["100 öğrencinin kaçı yürüyor; oran %30 mu?", "kategorik, tek örneklem", "1-Prop z test"],
            ["İki okulda yürüyerek gelenlerin oranı farklı mı?", "kategorik, iki bağımsız örneklem", "2-Prop z test"],
            ["25 telefonun ortalama pil ömrü için aralık", "sayısal, tek örneklem", "1-Sample t interval"],
            ["Aynı 9 öğrenci, telefon yanında/dışarıda puan", "sayısal, eşleştirilmiş", "Paired t test"],
            ["Flaş kart ve tekrar okuma grubu (rastgele atama)", "sayısal, iki bağımsız grup", "2-Sample t test"],
            ["İki okulun ortalama geliş süresi farkı", "sayısal, iki bağımsız örneklem", "2-Sample t interval"]
          ] },
        { tip: "ornek", baslik: "Spor salonu: prosedürü seç", durum: "Bir spor salonu, 12 üyenin 8 haftalık programdan önceki ve sonraki kilosunu karşılaştırıyor ve kilonun azalıp azalmadığını soruyor.",
          adimlar: [
            "Değişken: kilo; sayısal → ortalama, *t* prosedürü.",
            "Düzen: aynı 12 üye iki kez ölçülmüş → eşleştirilmiş veri; farklar alınır (d = sonra − önce).",
            "Amaç: “azaldı mı?” bir iddia → *significance test*; H₀: μ_d = 0, Hₐ: μ_d < 0.",
            "Koşullar: üyeler rastgele seçilmişse Random; 10%; farkların grafiği yaklaşık simetrik, uç değer yok."
          ],
          sonuc: "Prosedür: *paired t test for μ_d*, df = 12 − 1 = 11." }
      ]
    },
    {
      baslik: "Dört adım: oran testi örneği",
      kisa: "Prosedür adı, koşullar, hesap ve bağlamlı sonuç: dört adımın tamamı.",
      bloklar: [
        { tip: "ornek", baslik: "Yürüyerek gelenlerin oranı %30 mu?", durum: "Okulda 1500 öğrenci var. Rastgele seçilen 100 öğrenciden 40'ı okula yürüyerek geliyor. “Yürüyenlerin oranı %30” iddiası, α = 0,05'te sınanıyor.",
          adimlar: [
            "State: p = okulda yürüyerek gelen öğrencilerin gerçek oranı. H₀: p = 0,30, Hₐ: p ≠ 0,30. α = 0,05.",
            "Plan: *one-sample z test for p*. Random: öğrenciler rastgele seçildi. 10%: 100 < 150. Large Counts: np₀ = 30 ≥ 10 ve n(1 − p₀) = 70 ≥ 10.",
            "Do: p̂ = 40/100 = 0,40. SE = √(0,30 · 0,70 / 100) ≈ 0,0458. z = (0,40 − 0,30)/0,0458 ≈ 2,18. İki yönlü P ≈ 2 · 0,0146 ≈ 0,029.",
            "Conclude: “Since the P-value ≈ 0.029 < α = 0.05, we reject H₀. There is convincing evidence that the true proportion of students at this school who walk to school differs from 0.30.”"
          ],
          sonuc: "H₀ reddedilir: yürüyerek gelenlerin oranının %30'dan farklı olduğuna dair ikna edici kanıt var." },
        { tip: "tablo", baslik: "Her adımda ne yazılır?", head: ["Adım", "İçerik"], rows: [
            ["State", "Parametre (bağlamıyla, birimiyle), hipotezler (test) ya da güven düzeyi (aralık), α"],
            ["Plan", "Prosedürün adı + koşullar (Random, 10%, Large Counts / Normal), bağlamla"],
            ["Do", "İstatistik, SE, df, z ya da t, P-değeri ya da aralık"],
            ["Conclude", "Karar (P ile α'yı karşılaştır ya da 0 / iddia aralıkta mı) + bağlamlı cümle + kapsam"]
          ] }
      ]
    },
    {
      baslik: "Ortalamada neden z değil t?",
      kisa: "σ yerine s kullanınca z, küçük örneklemde P-değerini olması gerekenden küçük gösterir.",
      bloklar: [
        { tip: "grafik", baslik: "Aynı değer, iki eğri: 2,0", xlabel: "z ya da t", ylabel: "Yoğunluk", xmax: 8, ymax: 5,
          xticks: [{ v: 1, label: "−3" }, { v: 2, label: "−2" }, { v: 3, label: "−1" }, { v: 4, label: "0" }, { v: 5, label: "1" }, { v: 6, label: "2" }, { v: 7, label: "3" }],
          ogeler: [
            { id: "z", tip: "egri", renk: 0, kesik: true, etiket: "", noktalar: [[0, 0.001], [0.25, 0.004], [0.5, 0.009], [0.75, 0.02], [1, 0.044], [1.25, 0.091], [1.5, 0.175], [1.75, 0.317], [2, 0.54], [2.25, 0.863], [2.5, 1.295], [2.75, 1.826], [3, 2.42], [3.25, 3.011], [3.5, 3.521], [3.75, 3.867], [4, 3.989], [4.25, 3.867], [4.5, 3.521], [4.75, 3.011], [5, 2.42], [5.25, 1.826], [5.5, 1.295], [5.75, 0.863], [6, 0.54], [6.25, 0.317], [6.5, 0.175], [6.75, 0.091], [7, 0.044], [7.25, 0.02], [7.5, 0.009], [7.75, 0.004], [8, 0.001]] },
            { id: "t", tip: "egri", renk: 1, etiket: "", noktalar: [[0, 0.012], [0.25, 0.02], [0.5, 0.033], [0.75, 0.055], [1, 0.091], [1.25, 0.15], [1.5, 0.242], [1.75, 0.383], [2, 0.592], [2.25, 0.888], [2.5, 1.283], [2.75, 1.776], [3, 2.341], [3.25, 2.923], [3.5, 3.438], [3.75, 3.795], [4, 3.924], [4.25, 3.795], [4.5, 3.438], [4.75, 2.923], [5, 2.341], [5.25, 1.776], [5.5, 1.283], [5.75, 0.888], [6, 0.592], [6.25, 0.383], [6.5, 0.242], [6.75, 0.15], [7, 0.091], [7.25, 0.055], [7.5, 0.033], [7.75, 0.02], [8, 0.012]], gizli: true },
            { id: "zl", tip: "yazi", renk: 0, x: 6.3, y: 4.5, metin: "z (normal)" },
            { id: "tl", tip: "yazi", renk: 1, x: 1.8, y: 4.5, metin: "t, df = 15", gizli: true },
            { id: "ln", tip: "cizgi", renk: 0, kesik: true, from: [6, 0], to: [6, 2], etiket: "", gizli: true },
            { id: "lnl", tip: "yazi", renk: 0, x: 6, y: 2.35, metin: "2,0", gizli: true },
            { id: "tz", tip: "alan", renk: 3, noktalar: [[6, 0], [6, 0.54], [6.25, 0.317], [6.5, 0.175], [6.75, 0.091], [7, 0.044], [7.25, 0.02], [7.5, 0.009], [7.75, 0.004], [8, 0.001], [8, 0]], gizli: true },
            { id: "tt", tip: "alan", renk: 2, noktalar: [[6, 0], [6, 0.592], [6.25, 0.383], [6.5, 0.242], [6.75, 0.15], [7, 0.091], [7.25, 0.055], [7.5, 0.033], [7.75, 0.02], [8, 0.012], [8, 0]], gizli: true },
            { id: "pz", tip: "yazi", renk: 3, x: 7.95, y: 3.7, hiza: "end", metin: "z: iki yönlü P ≈ 0,046", gizli: true },
            { id: "pt", tip: "yazi", renk: 2, x: 7.95, y: 3.1, hiza: "end", metin: "t: iki yönlü P ≈ 0,064", gizli: true }
          ],
          durumlar: [
            { metin: "Aynı test istatistiği 2,0'ı iki eğriyle değerlendirelim. Önce standart normal eğri (z)." },
            { metin: "Şimdi df = 15 olan t eğrisi: tepe daha alçak, ==kuyruklar daha kalın==.", goster: ["t", "tl"] },
            { metin: "Her ikisinde de 2,0 değeri.", goster: ["ln", "lnl"] },
            { metin: "z eğrisinde sağ kuyruk ≈ 0,023; iki yönlü P ≈ 0,046 < 0,05 → H₀ reddedilir.", goster: ["tz", "pz"] },
            { metin: "t eğrisinde sağ kuyruk ≈ 0,032; iki yönlü P ≈ 0,064 > 0,05 → H₀ reddedilemez. Yanlış eğri yanlış karar verdirdi.", goster: ["tt", "pt"] }
          ] },
        { tip: "tuzak", baslik: "Ortalama için z kullanma", metin: "σ bilinmiyor ve s kullanıyorsun; z∗ ya da z tablosu P-değerini ve aralığı küçültür.", yanlis: "n = 16, σ bilinmiyor ama büyük sayılar yasası, z kullanırım.", dogru: "Ortalamalar için hep *t* (df = n − 1 ya da iki örneklemde df). z yalnızca oran prosedürlerinde ve σ'nın bilindiği nadir durumda kullanılır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Önce değişken: kategorik → oran (*z*), sayısal → ortalama (*t*).",
            "Sonra düzen: tek örneklem, iki bağımsız grup ya da eşleştirilmiş (yalnızca ortalamada). Eşleştirilmişte farkları al.",
            "Amaç: tahmin → *confidence interval*; iddia / kanıt → *significance test*.",
            "Beş prosedür: 1-Prop z, 2-Prop z, 1-Sample t, Paired t, 2-Sample t; parametreleri p, p₁ − p₂, μ, μ_d, μ₁ − μ₂.",
            "Koşullar: Random, 10%; oranda Large Counts (testte p₀ ile), ortalamada Normal / Large Sample.",
            "Dört adım: State (parametre, hipotez), Plan (prosedür, koşullar), Do (istatistik, P ya da aralık), Conclude (bağlamlı karar).",
            "Ortalamada z kullanma; σ bilinmeyince t. Rastgele örnekleme → genelleme, rastgele atama → neden-sonuç."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir kantin, rastgele seçilen 50 öğrenciden 36'sının sabah kahvaltı yaptığını görüyor ve kahvaltı yapanların oranının %60'tan fazla olup olmadığını sınamak istiyor. Hangi prosedür uygundur?",
      opts: ["Tek örneklemli *t* testi (μ için)", "Tek oranlı *z* testi (p için)", "İki oranlı *z* testi (p₁ − p₂ için)", "İki örneklemli *t* testi (μ₁ − μ₂ için)"], a: 1,
      why: "Değişken “kahvaltı yaptı/yapmadı” kategorik, tek örneklem var, amaç bir iddiayı sınamak: tek oranlı *z* testi (H₀: p = 0,60, Hₐ: p > 0,60). *t* prosedürleri sayısal değişken içindir." },
    { q: "Bir antrenör, aynı 15 sporcunun antrenmandan önceki ve sonraki dinlenme nabızlarını ölçüyor ve ortalama nabız değişimi için %95 güven aralığı kurmak istiyor. Hangi prosedür uygundur?",
      opts: ["İki örneklemli *t* aralığı (μ₁ − μ₂)", "İki oranlı *z* aralığı", "Eşleştirilmiş *t* aralığı (farklar üzerinde, μ_d)", "Tek oranlı *z* aralığı"], a: 2,
      why: "Aynı sporcular iki kez ölçüldüğü için veri eşleştirilmiş; her sporcunun farkı alınır ve μ_d için tek örneklemli *t* aralığı kurulur. İki örneklemli *t*, bağımsız iki grup gerektirir." },
    { q: "Bir araştırmacı, iki farklı sınıftan alınan rastgele örneklemlerde ders kitabını okuyanların oranlarını karşılaştırmak için iki oranlı *z* testi düşünüyor. Özet aşağıdadır. Large Counts koşulu bu veriler için sağlanır mı?",
      fig: { type: "table", head: ["Grup", "n", "Başarı", "Başarısızlık"], rows: [["A sınıfı", "40", "6", "34"], ["B sınıfı", "50", "20", "30"]], caption: "Okuyan / okumayan öğrenci sayıları" },
      opts: ["Evet; her iki grupta n ≥ 30.", "Evet; toplam başarı sayısı 26 ≥ 10.", "Hayır; çünkü iki grubun örneklem büyüklükleri eşit değil.", "Hayır; A sınıfındaki başarı sayısı 10'dan küçük (6)."], a: 3,
      why: "Large Counts her grupta hem başarı hem başarısızlık sayısının ≥ 10 olmasını ister. A sınıfında başarı 6 < 10 olduğu için koşul sağlanmaz. Toplam başarıya bakmak ya da n ≥ 30 aramak yanlıştır." },
    { q: "Bir öğrenci, σ bilinmeyen bir popülasyondan aldığı n = 16'lık rastgele örneklemde ortalama için %95 aralığı kurarken t∗ yerine z∗ = 1,960 kullanıyor (koşullar sağlanıyor). Bu aralık için ne söylenir?",
      opts: ["Olması gerekenden daha dar çıkar; gerçek güven düzeyi %95'ten düşüktür.", "Olması gerekenden daha geniş çıkar; gerçek güven düzeyi %95'ten yüksektir.", "Hiçbir şey değişmez; z∗ ile t∗ aynıdır.", "Aralık, df bilinmediği için kurulamaz."], a: 0,
      why: "df = 15 için t∗ = 2,131 > 1,960. z∗ kullanmak hata payını küçültür, aralığı daraltır ve yöntemin gerçek başarı oranını %95'in altına çeker. Diğer şık, t∗ ile z∗'ın aynı olduğunu varsayar; küçük n'de aynı değildir." },
    { q: "Bir okul, yeni bir çalışma yönteminin sınav puanını artırıp artırmadığını görmek için 60 gönüllüyü yazı-turayla iki gruba atıyor: biri yeni yöntemi, diğeri eski yöntemi uyguluyor. Hangi prosedür ve alternatif hipotez uygundur? (grup 1: yeni yöntem)",
      opts: ["Eşleştirilmiş *t* testi; Hₐ: μ_d > 0", "İki oranlı *z* testi; Hₐ: p₁ − p₂ ≠ 0", "İki örneklemli *t* testi; Hₐ: μ₁ − μ₂ > 0", "İki örneklemli *t* aralığı; Hₐ: μ₁ − μ₂ < 0"], a: 2,
      why: "Puan sayısal, iki bağımsız grup (rastgele atama) ve amaç “artırdı mı?” iddiasını sınamak: iki örneklemli *t* testi, Hₐ: μ₁ − μ₂ > 0. Gruplar farklı kişilerden oluştuğu için eşleştirilmiş değildir." }
  ]
};
