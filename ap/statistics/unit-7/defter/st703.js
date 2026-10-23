/* Kitpath not defteri · st703 · 7.4–7.5 Ortalama İçin t Testi
   Kaynak: AP Statistics CED 7.4–7.5 (öğrenme hedefleri kendi anlatımımla). Blok türleri: /ap/_kit/defter.js başı.
   t∗ ve P-değeri aralıkları t tablosundan; eğriler gerçek t yoğunluğuyla çizildi (x = t + 4, y = yoğunluk × 10). */
window.DEFTER = {
  slug: "st703",
  amac: "Bu konu, tek bir popülasyon ortalaması hakkındaki iddiayı *t test* ile sınamayı anlatıyor. Hipotezleri kurmayı, koşulları, t istatistiğini ve P-değerini (tablo ve hesap makinesiyle) bulmayı, α ile karşılaştırıp sonucu bağlamla yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Hipotezleri kurmak: H₀ ve Hₐ",
      kisa: "H₀ eşitliktir; Hₐ aradığın değişikliği söyler: <, > ya da ≠.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Null hypothesis (H₀)", tr: "sıfır hipotezi", tanim: "Parametre için ==eşitlik== söyleyen, sınanan iddia: H₀: μ = μ₀.", ornek: "H₀: μ = 500 (şişede ortalama 500 mL var)." },
            { ikon: "🔍", terim: "Alternative hypothesis (Hₐ)", tr: "karşıt hipotez", tanim: "Kanıt aradığın değişiklik: Hₐ: μ < μ₀, μ > μ₀ ya da μ ≠ μ₀. Soru metnindeki “az mı”, “fazla mı”, “farklı mı” ifadesinden çıkar.", ornek: "“500 mL'den az mı?” → Hₐ: μ < 500." }
          ] },
        { tip: "tablo", baslik: "Soru cümlesinden hipotezlere", head: ["Soru", "H₀", "Hₐ"], rows: [
            ["Şişeler 500 mL'den az mı dolduruluyor?", "μ = 500", "μ < 500"],
            ["Günlük ekran süresi 3 saatten fazla mı?", "μ = 3", "μ > 3"],
            ["Pil ömrü 10 saatten farklı mı?", "μ = 10", "μ ≠ 10"]
          ], not: "Hipotezler parametre (μ) hakkındadır, örnek istatistiği (x̄) hakkında değil; parametreyi bağlamıyla tanımla." },
        { tip: "tuzak", baslik: "x̄ hipotezde yok", metin: "Hipotez, sonucu görmeden önce popülasyon için kurulur.", yanlis: "H₀: x̄ = 500, Hₐ: x̄ = 497.", dogru: "H₀: μ = 500, Hₐ: μ < 500. x̄ = 497 verinin kendisidir; hipotezde yer almaz." }
      ]
    },
    {
      baslik: "Koşullar ve t istatistiği",
      kisa: "Üç koşulu kontrol et, sonra x̄'nın μ₀'dan kaç SE uzakta olduğunu bul.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🎲", baslik: "Random", metin: "Rastgele örneklem ya da randomize deney." },
            { ikon: "🔟", baslik: "10%", metin: "Yerine koymadan seçildiyse n ≤ popülasyonun %10'u." },
            { ikon: "🔔", baslik: "Normal / Large Sample", metin: "n ≥ 30; ya da n < 30 ise veri grafiği yaklaşık simetrik, güçlü çarpıklık ve uç değer yok." }
          ] },
        { tip: "formul", parcalar: [{ t: "t", alt: "test istatistiği" }, "=", { t: "x̄ − μ₀", alt: "örnek − H₀'daki değer" }, "÷", { t: "s/√n", alt: "SE; df = n − 1" }],
          aciklama: "t, örnek ortalamasının H₀'daki değerden kaç standart hata uzakta olduğunu söyler. |t| büyüdükçe H₀'a karşı kanıt güçlenir." }
      ]
    },
    {
      baslik: "P-değeri: t eğrisinde kuyruk alanı",
      kisa: "P-değeri, H₀ doğruyken bu kadar uç bir t gelme olasılığıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "P-value", tr: "P-değeri", tanim: "H₀ doğruysa, gözlenen kadar ya da Hₐ yönünde ondan daha uç bir sonucu elde etme ==olasılığı==. Küçük P-değeri, H₀'a karşı güçlü kanıttır.", ornek: "P ≈ 0,032: şişeler gerçekten ortalama 500 mL ise bu kadar düşük bir x̄ görmek %3,2 olasılıklı." }
          ] },
        { tip: "grafik", baslik: "Şişe örneği: P-değeri alanı (df = 15)", xlabel: "t", ylabel: "Yoğunluk", xmax: 8, ymax: 5,
          xticks: [{ v: 1, label: "−3" }, { v: 2, label: "−2" }, { v: 3, label: "−1" }, { v: 4, label: "0" }, { v: 5, label: "1" }, { v: 6, label: "2" }, { v: 7, label: "3" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, etiket: "", noktalar: [[0, 0.012], [0.25, 0.02], [0.5, 0.033], [0.75, 0.055], [1, 0.091], [1.25, 0.15], [1.5, 0.242], [1.75, 0.383], [2, 0.592], [2.25, 0.888], [2.5, 1.283], [2.75, 1.776], [3, 2.341], [3.25, 2.923], [3.5, 3.438], [3.75, 3.795], [4, 3.924], [4.25, 3.795], [4.5, 3.438], [4.75, 2.923], [5, 2.341], [5.25, 1.776], [5.5, 1.283], [5.75, 0.888], [6, 0.592], [6.25, 0.383], [6.5, 0.242], [6.75, 0.15], [7, 0.091], [7.25, 0.055], [7.5, 0.033], [7.75, 0.02], [8, 0.012]] },
            { id: "h0", tip: "yazi", renk: 0, x: 4, y: 4.5, metin: "H₀ doğruyken t (df = 15)" },
            { id: "pt", tip: "nokta", renk: 1, x: 2, y: 0.592, etiket: "t = −2,0", gizli: true },
            { id: "tl", tip: "alan", renk: 2, noktalar: [[0, 0], [0, 0.012], [0.25, 0.02], [0.5, 0.033], [0.75, 0.055], [1, 0.091], [1.25, 0.15], [1.5, 0.242], [1.75, 0.383], [2, 0.592], [2, 0]], gizli: true },
            { id: "tr", tip: "alan", renk: 2, noktalar: [[6, 0], [6, 0.592], [6.25, 0.383], [6.5, 0.242], [6.75, 0.15], [7, 0.091], [7.25, 0.055], [7.5, 0.033], [7.75, 0.02], [8, 0.012], [8, 0]], gizli: true },
            { id: "p1", tip: "yazi", renk: 2, x: 1.2, y: 1.4, metin: "≈ 0,032", gizli: true },
            { id: "p2", tip: "yazi", renk: 2, x: 6.8, y: 1.4, metin: "≈ 0,032", gizli: true },
            { id: "pt2", tip: "yazi", renk: 2, x: 4, y: 3.3, metin: "P ≈ 2 · 0,032 = 0,064", gizli: true }
          ],
          durumlar: [
            { metin: "H₀: μ = 500 doğruyken t istatistiği df = 15 olan t eğrisini izler; merkezi 0." },
            { metin: "Örnek: x̄ = 497, s = 6, n = 16 → t = (497 − 500)/1,5 = −2,0.", goster: ["pt"] },
            { metin: "Hₐ: μ < 500 (tek yönlü): P-değeri, −2,0'ın solundaki alandır: ==P ≈ 0,032==.", goster: ["tl", "p1"] },
            { metin: "Hₐ: μ ≠ 500 olsaydı iki kuyruk sayılırdı: P ≈ 2 · 0,032 = 0,064.", goster: ["tr", "p2", "pt2"] }
          ] },
        { tip: "tablo", baslik: "df = 15 için t tablosu (üst kuyruk alanı → t∗)", head: ["Kuyruk alanı", "0,10", "0,05", "0,025", "0,01", "0,005"], rows: [["t∗", "1,341", "1,753", "2,131", "2,602", "2,947"]],
          not: "|t| = 2,0, 1,753 ile 2,131 arasında → tek kuyruk alanı 0,025 ile 0,05 arası; iki yönlü P 0,05 ile 0,10 arası. Hesap makinesi tam değeri verir (0,032 ve 0,064)." }
      ]
    },
    {
      baslik: "Karar ve sonuç cümlesi",
      kisa: "P ≤ α ise H₀ reddedilir; değilse reddedilemez, asla “kabul edilir” denmez.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "P-değeri ≤ α", maddeler: ["*Reject H₀*", "Hₐ lehine ikna edici kanıt var"] },
          sag: { ikon: "🛑", baslik: "P-değeri > α", maddeler: ["*Fail to reject H₀*", "Hₐ lehine ikna edici kanıt yok"] },
          oyun: [
            { metin: "P = 0,032 ve α = 0,05.", cevap: "sol", neden: "0,032 < 0,05: H₀ reddedilir." },
            { metin: "P = 0,057 ve α = 0,05.", cevap: "sag", neden: "0,057 > 0,05: H₀ reddedilemez." },
            { metin: "P = 0,008 ve α = 0,01.", cevap: "sol", neden: "0,008 < 0,01: H₀ reddedilir." },
            { metin: "P = 0,20 ve α = 0,10.", cevap: "sag", neden: "0,20 > 0,10: H₀ reddedilemez." }
          ] },
        { tip: "tablo", baslik: "Sonuç cümlesi kalıbı", head: ["Karar", "Sınavda böyle yaz"], rows: [
            ["Reject H₀", "Since the P-value (…) < α (…), we reject H₀. There is convincing evidence that [Hₐ, bağlamıyla]."],
            ["Fail to reject H₀", "Since the P-value (…) > α (…), we fail to reject H₀. We do not have convincing evidence that [Hₐ, bağlamıyla]."]
          ] },
        { tip: "tuzak", baslik: "H₀'ı kabul etmek yok", metin: "Veri H₀'ı çürütmediyse bu, H₀'ın doğru olduğunu kanıtlamaz.", yanlis: "P = 0,057 > 0,05, yani H₀'ı kabul ediyoruz: ortalama tam 10 saat. (Ya da: “P-değeri, H₀'ın doğru olma olasılığıdır.”)", dogru: "H₀ reddedilemez; ortalamanın 10'dan farklı olduğuna dair ikna edici kanıt yok. P-değeri, H₀ doğruyken bu kadar uç bir sonucun olasılığıdır; H₀'ın olasılığı değildir." }
      ]
    },
    {
      baslik: "Dört adımla tek yönlü test: su şişesi",
      kisa: "State, Plan, Do, Conclude; hesap makinesi Do adımını hızlandırır.",
      bloklar: [
        { tip: "ornek", baslik: "Şişeler 500 mL'den az mı?", durum: "Bir marka şişelerde 500 mL yazıyor. Rastgele seçilen 16 şişede (üretilen şişelerin %10'undan az) x̄ = 497 mL ve s = 6 mL bulundu; nokta grafiği yaklaşık simetrik, uç değer yok. α = 0,05'te ortalama içeriğin 500 mL'den az olduğuna dair kanıt var mı?",
          adimlar: [
            "State: μ = bu markanın şişelerinin gerçek ortalama içeriği (mL). H₀: μ = 500, Hₐ: μ < 500. α = 0,05.",
            "Plan: *one-sample t test for μ*. Random: şişeler rastgele seçildi. 10%: 16, üretilen şişelerin %10'undan az. Normal: n < 30 ama nokta grafiği yaklaşık simetrik, uç değer yok.",
            "Do: SE = 6/√16 = 1,5; t = (497 − 500)/1,5 = −2,0; df = 15. P-değeri = P(t ≤ −2,0) ≈ 0,032 (tablo: 0,025 ile 0,05 arası).",
            "Conclude: “Since the P-value ≈ 0.032 < α = 0.05, we reject H₀. There is convincing evidence that the true mean content of this brand's bottles is less than 500 mL.”"
          ],
          sonuc: "H₀ reddedilir: ortalama içeriğin 500 mL'den az olduğuna dair ikna edici kanıt var." },
        { tip: "adimlar", baslik: "Hesap makinesinde T-Test (özet istatistikle)", adimlar: [
            { baslik: "1 · Menü", metin: "STAT → TESTS → 2:T-Test…" },
            { baslik: "2 · Veri girişi", metin: "Inpt: Stats; μ₀ = 500, x̄ = 497, Sx = 6, n = 16. Ham veri listedeyse Inpt: Data seç." },
            { baslik: "3 · Hₐ yönü", metin: "μ: < μ₀ seç (soruya göre < , ≠ ya da >)." },
            { baslik: "4 · Calculate", metin: "t = −2, p ≈ 0,032, df = 15. Bu üçünü yaz; “hesap makinesi” diye bırakma, Plan ve Conclude'u yine yaz." }
          ] }
      ]
    },
    {
      baslik: "İki yönlü test: pil ömrü",
      kisa: "Hₐ: μ ≠ μ₀ iken P-değeri iki kuyruğun toplamıdır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "P (μ ≠ μ₀)", alt: "iki yönlü P-değeri" }, "=", { t: "2", alt: "iki kuyruk" }, "×", { t: "P(t ≥ |t|)", alt: "tek kuyruk alanı" }],
          aciklama: "Tablodan tek kuyruk aralığını bulup 2 ile çarp: P(μ ≠ μ₀) aralığı da iki katına çıkar." },
        { tip: "ornek", baslik: "Pil ömrü 10 saatten farklı mı?", durum: "Bir üretici ortalama pil ömrünün 10 saat olduğunu söylüyor. Rastgele seçilen 25 telefonda (koşullar sağlanıyor) x̄ = 9,4 saat ve s = 1,5 saat bulundu. α = 0,05.",
          adimlar: [
            "State: μ = bu modelin gerçek ortalama pil ömrü (saat). H₀: μ = 10, Hₐ: μ ≠ 10. α = 0,05.",
            "Plan: *one-sample t test*; Random, 10% ve Normal koşulları sağlanıyor (nokta grafiği yaklaşık simetrik, uç değer yok).",
            "Do: SE = 1,5/√25 = 0,3; t = (9,4 − 10)/0,3 = −2,0; df = 24. Tabloda tek kuyruk 0,025–0,05, yani iki yönlü P 0,05–0,10; hesap makinesi P ≈ 0,057.",
            "Conclude: “Since the P-value ≈ 0.057 > α = 0.05, we fail to reject H₀. We do not have convincing evidence that the true mean battery life differs from 10 hours.”"
          ],
          sonuc: "H₀ reddedilemez. Bu sonuç, %95 güven aralığının (8,78; 10,02) 10'u içermesiyle uyumludur; ikisi de aynı hikâyeyi anlatır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "H₀: μ = μ₀; Hₐ soru metninden çıkar (<, >, ≠). Hipotezler parametre hakkındadır, x̄ hakkında değil.",
            "Koşullar: *Random*, 10%, *Normal*/*Large Sample* (n ≥ 30 ya da küçük n'de grafikte güçlü çarpıklık/uç değer yok).",
            "t = (x̄ − μ₀)/(s/√n), df = n − 1.",
            "P-değeri: H₀ doğruyken bu kadar ya da daha uç sonucun olasılığı; tablo aralık verir, hesap makinesi tam değer.",
            "İki yönlü testte P-değeri tek kuyruğun iki katıdır.",
            "P ≤ α → *reject H₀*, Hₐ lehine ikna edici kanıt; P > α → *fail to reject H₀*; “H₀ kabul edildi” deme.",
            "Dört adım ve bağlamlı Conclude cümlesi: Hₐ'yı parametre ve birimiyle yaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir kafe, müşterilerin ortalama bekleme süresinin menüde yazan 5 dakikadan uzun olup olmadığını test etmek istiyor. μ bütün müşterilerin gerçek ortalama bekleme süresini gösterdiğine göre hipotezler hangisidir?",
      opts: ["H₀: x̄ = 5, Hₐ: x̄ > 5", "H₀: μ = 5, Hₐ: μ ≠ 5", "H₀: μ = 5, Hₐ: μ > 5", "H₀: μ > 5, Hₐ: μ = 5"], a: 2,
      why: "Aranan değişiklik “5 dakikadan uzun” olduğu için Hₐ: μ > 5; H₀ eşitliktir. x̄ ile yazılan şık, hipotezi örnek istatistiğine bağlar; ≠ ise iki yönlü bir test olurdu." },
    { q: "Bir öğrenci, 9 rastgele seçilmiş arkadaşının günlük çalışma süresini ölçüyor (veri grafiği yaklaşık simetrik, uç değer yok) ve H₀: μ = 50 dk testini yapıyor. Özet aşağıdadır. t istatistiği ve df nedir?",
      fig: { type: "table", head: ["n", "x̄ (dk)", "s (dk)"], rows: [["9", "52", "6"]], caption: "Örneklem özeti" },
      opts: ["t = 1,0; df = 8", "t = 1,0; df = 9", "t = 0,33; df = 8", "t = 3,0; df = 8"], a: 0,
      why: "SE = 6/√9 = 2; t = (52 − 50)/2 = 1,0; df = n − 1 = 8. df = 9 şıkkı df'i n almaktır; 0,33 şıkkı SE yerine s'yi bölen olarak kullanır (2/6)." },
    { q: "Hₐ: μ > μ₀ olan bir t testinde n = 16 ve t = 2,4 bulunuyor. t tablosuna (df = 15: t∗ değerleri 2,131 için 0,025, 2,602 için 0,01) göre P-değeri ve α = 0,05'teki karar hangisidir?",
      opts: ["0,025 < P < 0,05; H₀ reddedilir.", "0,01 < P < 0,025; H₀ reddedilir.", "0,01 < P < 0,025; H₀ reddedilemez.", "P > 0,10; H₀ reddedilemez."], a: 1,
      why: "df = 15'te 2,4, 2,131 ile 2,602 arasındadır; tek kuyruk alanı 0,01 ile 0,025 arasında. Bu P-değeri α = 0,05'ten küçük olduğu için H₀ reddedilir. Üçüncü şık aralığı doğru bulup kararı ters verir." },
    { q: "Bir araştırmada P-değeri 0,032 bulunuyor. Bu P-değerinin doğru yorumu hangisidir?",
      opts: ["H₀'ın doğru olma olasılığı 0,032'dir.", "Hₐ'nın doğru olma olasılığı 0,968'dir.", "Testin yanlış karar verme oranı 0,032'dir.", "H₀ doğruysa, gözlenen kadar ya da daha uç bir örnek sonucu elde etme olasılığı 0,032'dir."], a: 3,
      why: "P-değeri, H₀ doğru varsayımı altında bu kadar uç bir sonucun olasılığıdır. İlk şık H₀'a olasılık atar; hipotezlere olasılık verilmez. Üçüncü şık α (I. tür hata olasılığı) ile P-değerini karıştırır." },
    { q: "Bir yurt, öğrencilerin uyku süresinin ortalama 8 saatten farklı olup olmadığını test ediyor (H₀: μ = 8, Hₐ: μ ≠ 8, α = 0,05; koşullar sağlanıyor). Test P-değerini 0,12 buluyor. Aşağıdakilerden hangisi doğru sonuç cümlesidir?",
      opts: ["H₀'ı kabul ediyoruz; öğrencilerin ortalama uykusu tam 8 saattir.", "H₀ reddedilir; ortalama uyku 8 saatten farklıdır.", "H₀'ı reddedemeyiz; ortalama uyku süresinin 8 saatten farklı olduğuna dair ikna edici kanıt yok.", "P > α olduğu için ortalamanın 8 saat olduğuna dair ikna edici kanıt vardır."], a: 2,
      why: "P = 0,12 > α = 0,05: H₀ reddedilemez ve Hₐ lehine ikna edici kanıt yok. H₀ asla “kabul edilmez” ya da “kanıtlanmış” sayılmaz; kanıt eksikliği eşitliğin kanıtı değildir." }
  ]
};
