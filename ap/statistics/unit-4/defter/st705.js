/* Kitpath not defteri · st705 · 7.6–7.7 İki Ortalama Farkı İçin Güven Aralığı
   Kaynak: AP Statistics CED 7.6–7.7 (öğrenme hedefleri kendi anlatımımla). Blok türleri: /ap/_kit/defter.js başı.
   Örnek: n₁ = n₂ = 25, x̄₁ = 52, s₁ = 20, x̄₂ = 40, s₂ = 15 → SE = 5; tablo df = 24 (t∗ = 2,064), hesap makinesi df ≈ 44,5 (t∗ ≈ 2,015).
   Grafikte x = fark + 10. */
window.DEFTER = {
  slug: "st705",
  amac: "Bu konu, iki bağımsız grubun ortalamaları arasındaki farkı tahmin etmeyi anlatıyor. İki örneklemli *t* aralığını (μ₁ − μ₂), farkın standart hatasını, df'in tablo ve hesap makinesindeki karşılığını, koşulları ve aralığın bağlamlı yorumunu öğreneceksin.",
  bolumler: [
    {
      baslik: "İki ortalamanın farkı: parametre ve istatistik",
      kisa: "Parametre μ₁ − μ₂, istatistik x̄₁ − x̄₂; iki grup birbirinden bağımsız.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Difference of means", tr: "ortalamalar farkı", tanim: "Parametre ==μ₁ − μ₂==: iki popülasyonun gerçek ortalamaları arasındaki fark. Tahmin edicisi x̄₁ − x̄₂.", ornek: "Okul A ile Okul B'nin gerçek ortalama okula geliş süreleri arasındaki fark." },
            { ikon: "👥", terim: "Independent samples", tr: "bağımsız örneklemler", tanim: "İki grup ayrı ayrı rastgele seçilmiş ya da deneyde rastgele atanmıştır; bir gruptaki değerler diğerini etkilemez.", ornek: "İki okuldan ayrı ayrı seçilen 25'er öğrenci." }
          ] },
        { tip: "formul", parcalar: [{ t: "SE", alt: "farkın standart hatası" }, "=", { t: "√( s₁²/n₁ + s₂²/n₂ )", alt: "iki grubun varyans payları toplanır" }],
          aciklama: "Önce varyans payları (s²/n) toplanır, sonra kök alınır; SE'leri doğrudan toplama. İki grubun s'sini birleştirme (*pool*) yok." }
      ]
    },
    {
      baslik: "Güven aralığı ve serbestlik derecesi",
      kisa: "Fark ± t∗ · SE; tabloda df için küçük olan n − 1 kullanılır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "(x̄₁ − x̄₂)", alt: "nokta tahmini" }, "±", { t: "t∗", alt: "df'e göre" }, "·", { t: "√( s₁²/n₁ + s₂²/n₂ )", alt: "SE" }],
          aciklama: "t∗ · SE = *margin of error*. Aralık: (fark − ME, fark + ME)." },
        { tip: "tablo", baslik: "df nasıl bulunur? (n₁ = n₂ = 25, s₁ = 20, s₂ = 15, %95)", head: ["Yol", "df", "t∗", "Aralık"], rows: [
            ["Tablo (temkinli): küçük n − 1", "min(24, 24) = 24", "2,064", "(1,68; 22,32)"],
            ["Hesap makinesi (2-SampTInt)", "≈ 44,5", "≈ 2,015", "(1,93; 22,07)"]
          ], not: "Tablo yolu aralığı biraz geniş bırakır (temkinli). Sınavda tablodaki küçük n − 1'i ya da hesap makinesinin df'ini kullanabilirsin; hangisini kullandığını söyle." },
        { tip: "tuzak", baslik: "df için kısa yollar", metin: "Aralık için df, tek örneklemdeki gibi tek bir n'den çıkmaz.", yanlis: "df = n₁ + n₂ − 2 = 48 (iki grubu birleştir).", dogru: "Tabloyla çalışıyorsan df = küçük olan (n₁ − 1, n₂ − 1). Varyanslar birleştirilmez (*do not pool*)." }
      ]
    },
    {
      baslik: "Koşullar: iki grup için ayrı ayrı",
      kisa: "Random, 10% ve Normal her grupta kontrol edilir; gruplar bağımsız olmalı.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🎲", baslik: "Random", metin: "İki bağımsız rastgele örneklem ya da rastgele atamalı bir deney." },
            { ikon: "🔟", baslik: "10%", metin: "Yerine koymadan seçilmişse her grupta n ≤ ilgili popülasyonun %10'u." },
            { ikon: "🔔", baslik: "Normal / Large Sample", metin: "Her grupta n ≥ 30 ya da n < 30 ise o grubun veri grafiği yaklaşık simetrik, güçlü çarpıklık ve uç değer yok. Hangi grup için konuştuğunu belirt." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "İki örneklemli *t* uygun", maddeler: ["İki bağımsız rastgele örneklem", "Rastgele atamalı deney (iki grup)"] },
          sag: { ikon: "⛔", baslik: "Uygun değil", maddeler: ["Aynı kişiler iki kez ölçülmüş (eşleştirilmiş)", "Grup küçük ve güçlü çarpık/uç değerli"] },
          oyun: [
            { metin: "İki okuldan 25'er rastgele öğrencinin geliş süreleri.", cevap: "sol", neden: "İki bağımsız rastgele örneklem." },
            { metin: "Aynı 25 öğrencinin sınavdan önceki ve sonraki kaygı puanları.", cevap: "sag", neden: "Eşleştirilmiş veri: farkları alıp tek örneklemli *t* kullan." },
            { metin: "40 gönüllü rastgele ikiye bölünüyor; gruplar farklı çalışma yöntemi uyguluyor.", cevap: "sol", neden: "Rastgele atamalı deney: iki örneklemli *t* uygun." },
            { metin: "Her grupta n = 6; birinin grafiği güçlü sağa çarpık ve bir uç değerli.", cevap: "sag", neden: "Küçük n + çarpıklık/uç değer: Normal koşulu desteklenmiyor." }
          ] }
      ]
    },
    {
      baslik: "Dört adım: iki okulun geliş süresi",
      kisa: "State, Plan, Do, Conclude; aralığı 0 ile karşılaştırarak yorumla.",
      bloklar: [
        { tip: "sekil", baslik: "Okula geliş süresi (dakika)", fig: { type: "box", label: "Geliş süresi (dk)", items: [
            { name: "Okul A", min: 18, q1: 38, med: 51, q3: 66, max: 92 },
            { name: "Okul B", min: 15, q1: 30, med: 40, q3: 50, max: 72 }
          ] } },
        { tip: "ornek", baslik: "Okul A ile Okul B arasındaki fark", durum: "Her okuldan rastgele seçilen 25 öğrencinin okula geliş süresi: Okul A x̄₁ = 52 dk, s₁ = 20 dk; Okul B x̄₂ = 40 dk, s₂ = 15 dk. Kutu grafikleri yaklaşık simetrik, uç değer yok; 25, her okulun %10'undan az. Ortalamalar arasındaki fark için %95 aralık kur.",
          adimlar: [
            "State: μ₁ − μ₂ = Okul A ile Okul B öğrencilerinin gerçek ortalama geliş süreleri arasındaki fark (dk). %95 aralık kuracağız.",
            "Plan: *two-sample t interval for μ₁ − μ₂*. Random: iki okuldan ayrı ayrı rastgele örneklem; gruplar bağımsız. 10%: 25, her okulun %10'undan az. Normal: n < 30 ama her grubun grafiği yaklaşık simetrik, uç değer yok.",
            "Do: x̄₁ − x̄₂ = 52 − 40 = 12. SE = √(20²/25 + 15²/25) = √(16 + 9) = 5. Tablo: df = min(24, 24) = 24, t∗ = 2,064 → ME = 10,32; aralık (1,68; 22,32). Hesap makinesi (df ≈ 44,5): (1,93; 22,07).",
            "Conclude: “We are 95% confident that the interval from 1.7 to 22.3 minutes captures the true difference (School A − School B) in mean commute time for all students at the two schools.”"
          ],
          sonuc: "0 aralığın içinde değil ve aralığın tamamı pozitif: Okul A'nın ortalama geliş süresi, Okul B'ninkinden yaklaşık 1,7 ile 22,3 dakika daha uzun görünüyor." },
        { tip: "grafik", baslik: "Farkın güven aralığı ve 0", xlabel: "μ_A − μ_B (dk)", ylabel: "", xmax: 40, ymax: 5,
          xticks: [{ v: 0, label: "−10" }, { v: 10, label: "0" }, { v: 20, label: "10" }, { v: 30, label: "20" }, { v: 40, label: "30" }],
          ogeler: [
            { id: "sf", tip: "cizgi", renk: 0, kesik: true, from: [10, 0], to: [10, 4.6], etiket: "" },
            { id: "sfl", tip: "yazi", renk: 0, x: 10, y: 4.85, metin: "0 (fark yok)" },
            { id: "pf", tip: "nokta", renk: 1, x: 22, y: 3.4, etiket: "x̄₁ − x̄₂ = 12", gizli: true },
            { id: "c1", tip: "cizgi", renk: 2, from: [11.68, 2.4], to: [32.32, 2.4], etiket: "df = 24 (tablo)", gizli: true },
            { id: "c2", tip: "cizgi", renk: 3, from: [11.93, 1.3], to: [32.07, 1.3], etiket: "df ≈ 44,5", gizli: true }
          ],
          durumlar: [
            { metin: "Kesikli çizgi, farkın 0 olduğu yeri gösteriyor (iki okul aynı ortalamaya sahip)." },
            { metin: "Örnek farkı x̄₁ − x̄₂ = 12 dakika.", goster: ["pf"] },
            { metin: "Tablo (df = 24) ile %95 aralık: (1,68; 22,32). ==0 aralığın dışında==.", goster: ["c1"] },
            { metin: "Hesap makinesi (df ≈ 44,5): (1,93; 22,07), biraz daha dar; sonuç aynı.", goster: ["c2"] }
          ] }
      ]
    },
    {
      baslik: "Aralığı 0 ile karşılaştırarak yorumlamak",
      kisa: "0 aralıktaysa fark için kanıt yok; aralık tek yanlıysa yön de söylenir.",
      bloklar: [
        { tip: "tablo", baslik: "μ₁ − μ₂ için üç farklı aralık", head: ["Aralık", "0'ın konumu", "Sonuç"], rows: [
            ["(2,1; 9,8)", "aralığın altında", "İkna edici kanıt var: μ₁ > μ₂"],
            ["(−3,2; 7,5)", "aralığın içinde", "İkna edici kanıt yok: μ₁ = μ₂ makul"],
            ["(−9,4; −1,6)", "aralığın üstünde", "İkna edici kanıt var: μ₁ < μ₂"]
          ], not: "Farkın işareti, hangi grubu 1 diye adlandırdığına bağlıdır. State adımında tanımla." },
        { tip: "tuzak", baslik: "Fark aralığı mı, iki ayrı aralık mı?", metin: "Soru iki grup arasındaki farkla ilgilidir; bu yüzden tek bir aralık μ₁ − μ₂ için kurulur.", yanlis: "Okul A için ayrı, Okul B için ayrı aralık kurdum; aralıklar çakışmıyor, o hâlde fark var / çakışıyor, o hâlde fark yok.", dogru: "Farkın kendisi için tek bir aralık kur ve 0'ın içinde olup olmadığına bak. İki aralık yorumu farkın SE'sini hesaba katmaz." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Parametre μ₁ − μ₂, istatistik x̄₁ − x̄₂; iki bağımsız grup (iki rastgele örneklem ya da rastgele atamalı deney).",
            "SE = √(s₁²/n₁ + s₂²/n₂): önce varyans paylarını topla, sonra kök al; değerleri *pool* etme.",
            "Aralık: (x̄₁ − x̄₂) ± t∗ · SE. Tabloda df = min(n₁ − 1, n₂ − 1); hesap makinesi daha büyük, kesirli df verir.",
            "Koşullar: Random, 10% ve Normal/Large Sample her grup için ayrı ayrı; gruplar bağımsız.",
            "Eşleştirilmiş veriye bu yöntem uygulanmaz; farkları alıp tek örneklemli *t* kullan.",
            "Yorum: “We are C% confident that the interval from … to … captures the true difference in mean … (grup 1 − grup 2).”",
            "0 aralığın içindeyse fark için ikna edici kanıt yok; tamamı pozitif ya da negatifse yönü de söyle."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "İki mahalledeki öğrencilerin haftalık harçlığını karşılaştırmak için her mahalleden rastgele bir örneklem alındı (iki grup bağımsız, grafikler yaklaşık simetrik). Özet aşağıdadır. x̄₁ − x̄₂ farkı için standart hata (SE) kaçtır?",
      fig: { type: "table", head: ["Grup", "n", "x̄ (TL)", "s (TL)"], rows: [["Mahalle 1", "36", "70", "18"], ["Mahalle 2", "25", "62", "20"]], caption: "Haftalık harçlık" },
      opts: ["7", "5", "25", "2,5"], a: 1,
      why: "SE = √(18²/36 + 20²/25) = √(9 + 16) = √25 = 5. 7 şıkkı iki SE'yi ayrı ayrı alıp toplar (3 + 4); 25 kökü almayı unutur." },
    { q: "Aynı verilerle (n₁ = 36, n₂ = 25) %95 güven aralığı kurmak için t tablosunda temkinli bir df ve t∗ seçilecektir. Hangisi doğrudur?",
      opts: ["df = 35; t∗ = 2,030", "df = 59; t∗ = 2,000", "df = 24; t∗ = 2,064", "df = 24; t∗ = 1,711"], a: 2,
      why: "Tablo yolunda df = min(n₁ − 1, n₂ − 1) = min(35, 24) = 24 ve %95 için t∗ = 2,064. df = 59 şıkkı n₁ + n₂ − 2'dir (varyansları birleştirmek); 1,711 aynı df'in %90 değeridir." },
    { q: "İki grup için μ₁ − μ₂ farkının %95 güven aralığı (−2,3; 18,3) olarak bulunmuştur. Doğru sonuç hangisidir?",
      opts: ["Aralığın büyük kısmı pozitif olduğu için μ₁ > μ₂'ye dair ikna edici kanıt vardır.", "Aralık geniş olduğu için hiçbir sonuç çıkarılamaz.", "İki ortalamanın eşit olduğu kanıtlanmıştır.", "0 aralığın içinde: iki popülasyon ortalaması arasında fark olduğuna dair ikna edici kanıt yoktur."], a: 3,
      why: "0 aralığın içinde, yani μ₁ − μ₂ = 0 makul bir değer; fark için ikna edici kanıt yok. Aralığın büyük kısmının pozitif olması yetmez; tamamı 0'ın bir yanında olmalı. 0'ın aralıkta olması eşitliği kanıtlamaz." },
    { q: "Aşağıdaki durumlardan hangisinde iki bağımsız örneklem için kurulan *t* aralığı (μ₁ − μ₂) uygun değildir?",
      opts: ["Aynı 25 öğrencinin bir ders programından önceki ve sonraki sınav puanları karşılaştırılıyor.", "İki okuldan ayrı ayrı rastgele seçilen 40'ar öğrencinin okula geliş süresi karşılaştırılıyor.", "60 gönüllü rastgele ikiye bölünüp iki farklı çalışma yöntemi uygulanıyor.", "İki şehirden 35'er rastgele seçilen kişinin günlük adım sayısı karşılaştırılıyor."], a: 0,
      why: "Aynı kişiler iki kez ölçüldüğü için veri eşleştirilmiş; iki grup bağımsız değil. Doğrusu farkları alıp tek örneklemli *t* kullanmak. Diğer üç şıkta bağımsız gruplar ya da rastgele atama vardır." },
    { q: "Rastgele seçilen 25'er öğrenciden elde edilen sonuca göre Okul A'nın ortalama geliş süresinden Okul B'ninkini çıkaran %95 güven aralığı (1,7; 22,3) dakikadır. Bu aralığın doğru yorumu hangisidir?",
      opts: ["Okul A'daki öğrencilerin %95'i, Okul B'dekilerden 1,7 ile 22,3 dakika daha uzun sürede geliyor.", "Örnek farkının (12 dk) bu aralıkta olma olasılığı %95'tir.", "İki okulun bütün öğrencileri arasındaki gerçek ortalama geliş süresi farkının (A − B) bu aralıkta olduğundan %95 eminiz.", "Okul A'nın ortalama geliş süresi kesin olarak 12 dakika daha uzundur."], a: 2,
      why: "Aralık, popülasyon ortalamaları arasındaki farkı (μ_A − μ_B) tahmin eder ve %95 yöntemin başarı oranıdır. İlk şık bireylere bakar; ikinci şıktaki örnek farkı zaten aralığın ortasındadır; sonuncu şık nokta tahmini kesin gerçek sanır." }
  ]
};
