/* Kitpath not defteri · st702 · 7.3 Güven Aralığıyla Ortalama Hakkında İddia
   Kaynak: AP Statistics CED 7.3 (öğrenme hedefleri kendi anlatımımla). Blok türleri: /ap/_kit/defter.js başı.
   t∗ değerleri t tablosundan (df = 24, %95 → 2,064). */
window.DEFTER = {
  slug: "st702",
  amac: "Bu konu, bir ortalama için kurduğun güven aralığını bir iddiayı değerlendirmek için kullanmayı anlatıyor. İddia edilen değerin aralığın içinde ya da dışında olmasının ne anlama geldiğini, doğru sonuç cümlesini ve aralıkla iki yönlü test arasındaki bağı öğreneceksin.",
  bolumler: [
    {
      baslik: "Aralık = makul değerler listesi",
      kisa: "Aralığın içindeki her değer, gerçek ortalama için makul bir adaydır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✅", terim: "Plausible value", tr: "makul değer", tanim: "Güven aralığının ==içinde== kalan sayı. Veri, ortalamanın bu değer olmasıyla çelişmiyor.", ornek: "Aralık (8,78; 10,02) ise 9, 9,5 ve 10 makuldür." },
            { ikon: "🚫", terim: "Convincing evidence", tr: "ikna edici kanıt", tanim: "İddia edilen değer aralığın ==dışında== kalıyorsa o değer makul değildir; gerçek ortalamanın ondan farklı olduğuna dair ikna edici kanıt vardır.", ornek: "Aralık (8,78; 10,02) iken 11 saat iddiası." }
          ] },
        { tip: "grafik", baslik: "Pil ömrü: aralık ve üç iddia", xlabel: "Ortalama pil ömrü (saat)", ylabel: "", xmax: 12, ymax: 5,
          xticks: [{ v: 0, label: "8" }, { v: 3, label: "9" }, { v: 6, label: "10" }, { v: 9, label: "11" }, { v: 12, label: "12" }],
          ogeler: [
            { id: "ci", tip: "cizgi", renk: 1, from: [2.34, 3.4], to: [6.06, 3.4], etiket: "%95 CI", gizli: true },
            { id: "xb", tip: "nokta", renk: 0, x: 4.2, y: 3.4, etiket: "x̄ = 9,4", gizli: true },
            { id: "c10", tip: "nokta", renk: 2, x: 6, y: 1.4, etiket: "10 sa: makul", gizli: true },
            { id: "c11", tip: "nokta", renk: 3, x: 9, y: 1.4, etiket: "11 sa: değil", gizli: true },
            { id: "c85", tip: "nokta", renk: 3, x: 1.5, y: 1.4, etiket: "8,5 sa: değil", gizli: true }
          ],
          durumlar: [
            { metin: "25 telefon denendi: x̄ = 9,4 saat, s = 1,5. %95 güven aralığı (8,78; 10,02) saat.", goster: ["ci", "xb"] },
            { metin: "Üretici “ortalama 10 saat” diyor. 10 aralığın ==içinde==: makul bir değer.", goster: ["c10"] },
            { metin: "11 saat aralığın dışında (üst taraf): veri bu iddiayı desteklemiyor.", goster: ["c11"] },
            { metin: "8,5 saat de dışarıda (alt taraf): makul değil.", goster: ["c85"] }
          ] }
      ]
    },
    {
      baslik: "İddia aralıkta mı, dışında mı?",
      kisa: "İçindeyse ikna edici kanıt yok; dışındaysa ikna edici kanıt var.",
      bloklar: [
        { tip: "tablo", baslik: "Karar kuralı ve sınav cümleleri", head: ["Durum", "Sonuç", "Sınavda böyle yaz"], rows: [
            ["İddia aralığın içinde", "Makul değer; ikna edici kanıt yok", "Since 10 is in the interval, we do not have convincing evidence that the mean differs from 10."],
            ["İddia aralığın dışında", "Makul değil; ikna edici kanıt var", "Since 30 is not in the interval, there is convincing evidence that the mean differs from 30."],
            ["Aralığın tamamı iddianın üstünde (ya da altında)", "Yönü de söyleyebilirsin", "The entire interval is above 30, so the mean appears to be greater than 30."]
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Aralığın içinde", maddeler: ["Makul değer", "İkna edici kanıt yok"] },
          sag: { ikon: "🚫", baslik: "Aralığın dışında", maddeler: ["Makul değil", "İkna edici kanıt var"] },
          oyun: [
            { metin: "Aralık (8,78; 10,02); iddia 9,9 saat.", cevap: "sol", neden: "9,9 aralığın içinde." },
            { metin: "Aralık (8,78; 10,02); iddia 10,5 saat.", cevap: "sag", neden: "10,5 üst sınırın (10,02) dışında." },
            { metin: "Aralık (8,78; 10,02); iddia 8,8 saat.", cevap: "sol", neden: "8,8 alt sınırın (8,78) hemen içinde." },
            { metin: "Aralık (8,78; 10,02); iddia 8,5 saat.", cevap: "sag", neden: "8,5 alt sınırın dışında." }
          ] },
        { tip: "tuzak", baslik: "“Kanıtlandı” ya da “kabul” deme", metin: "Aralıkta çok sayıda makul değer vardır; bir değerin aralıkta olması onu kanıtlamaz.", yanlis: "10 aralığın içinde, yani ortalama kesin 10 saat; iddia kanıtlandı.", dogru: "10 makul bir değerdir; ama 9 ve 9,5 de makul. Sonuç: “ikna edici kanıt yok”." }
      ]
    },
    {
      baslik: "Dört adımla yazmak: pil ömrü",
      kisa: "Aralığı kur, sonra iddiayı aralığa göre yorumla.",
      bloklar: [
        { tip: "ornek", baslik: "Telefon pil ömrü iddiası", durum: "Bir üretici telefonunun ortalama pil ömrünün 10 saat olduğunu söylüyor. Rastgele seçilen 25 telefonda x̄ = 9,4 saat, s = 1,5 saat bulundu (nokta grafiği yaklaşık simetrik, uç değer yok; 25, üretilen telefonların %10'undan çok az). %95 güven aralığıyla iddiayı değerlendir.",
          adimlar: [
            "State: μ = bu modelin gerçek ortalama pil ömrü (saat). %95 aralıkla μ = 10 iddiasını değerlendireceğiz.",
            "Plan: *one-sample t interval for μ*. Random: telefonlar rastgele seçildi. 10%: 25, üretilen telefonların %10'undan az. Normal: n < 30 ama nokta grafiği yaklaşık simetrik, uç değer yok.",
            "Do: df = 24, t∗ = 2,064. SE = 1,5/√25 = 0,3. ME = 2,064 · 0,3 ≈ 0,619. Aralık: 9,4 ± 0,619 = (8,78; 10,02).",
            "Conclude: “Since 10 is in the 95% confidence interval (8.78, 10.02), we do not have convincing evidence that the true mean battery life differs from 10 hours.”"
          ],
          sonuc: "10 saat makul; iddia çürütülemedi. Ama bu 10 saatin kanıtlandığı anlamına gelmez: 9 ya da 9,5 saat de makul." }
      ]
    },
    {
      baslik: "Aralık iddianın bir yanında kalınca",
      kisa: "Aralığın tamamı iddianın üstündeyse ortalama büyük görünür; altındaysa küçük.",
      bloklar: [
        { tip: "ornek", baslik: "Okula geliş süresi iddiası", durum: "Bir okul, öğrencilerin okula ortalama 30 dakikada geldiğini söylüyor. Rastgele seçilen 25 öğrencide x̄ = 35 dk ve s = 10 dk bulundu (koşullar sağlanıyor). %95 güven aralığıyla iddiayı değerlendir.",
          adimlar: [
            "State: μ = okuldaki bütün öğrencilerin ortalama geliş süresi (dk); iddia μ = 30.",
            "Plan: *one-sample t interval*; Random, 10% ve Normal koşulları sağlanıyor.",
            "Do: df = 24, t∗ = 2,064; SE = 10/√25 = 2; ME = 2,064 · 2 ≈ 4,13. Aralık: 35 ± 4,13 = (30,9; 39,1).",
            "Conclude: “Since 30 is not in the interval (30.9, 39.1), there is convincing evidence that the true mean commute time differs from 30 minutes. The whole interval is above 30, so the mean appears to be longer.”"
          ],
          sonuc: "30 dakika makul değil ve aralığın tamamı 30'un üstünde: ortalama geliş süresi 30 dakikadan uzun görünüyor." },
        { tip: "tablo", baslik: "Aynı iddia (μ = 50), üç farklı aralık", head: ["Aralık", "50'nin konumu", "Sonuç"], rows: [
            ["(46; 52)", "içinde", "Makul; ikna edici kanıt yok"],
            ["(52; 58)", "aralığın altında", "Makul değil; μ > 50 görünüyor"],
            ["(40; 47)", "aralığın üstünde", "Makul değil; μ < 50 görünüyor"]
          ] }
      ]
    },
    {
      baslik: "Aralık ve iki yönlü test aynı sonucu verir",
      kisa: "C güven düzeyli aralık, α = 1 − C ile yapılan iki yönlü testle uyuşur.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "α", alt: "anlamlılık düzeyi" }, "=", { t: "1 − C", alt: "C: güven düzeyi" }],
          aciklama: "%90 aralık ↔ α = 0,10; %95 aralık ↔ α = 0,05; %99 aralık ↔ α = 0,01. Test: H₀: μ = μ₀ ve Hₐ: μ ≠ μ₀ (iki yönlü)." },
        { tip: "ornek", baslik: "Pil örneğini testle kontrol edelim", durum: "H₀: μ = 10, Hₐ: μ ≠ 10; x̄ = 9,4, s = 1,5, n = 25, α = 0,05.",
          adimlar: ["SE = 1,5/√25 = 0,3.", "t = (9,4 − 10)/0,3 = −2,0; df = 24.", "İki yönlü P-değeri: tabloda t = 2,0 (df = 24) 1,711 ile 2,064 arasında, yani tek kuyruk 0,025–0,05, iki yönlü 0,05–0,10; hesap makinesi ≈ 0,057 verir.", "P-değeri = 0,057 > α = 0,05: H₀ reddedilemez."],
          sonuc: "Test de aralık gibi “ikna edici kanıt yok” der: 10 aralığın içinde, P-değeri α'dan büyük." },
        { tip: "tuzak", baslik: "Tek yönlü test", metin: "Bu eşleşme iki yönlü test içindir. Hₐ: μ < μ₀ ya da μ > μ₀ gibi tek yönlü testlerde aralığı doğrudan karar için kullanma; testi ayrıca yap.", yanlis: "Hₐ: μ > 10 testini %95 aralığa bakarak yürüttüm.", dogru: "İki yönlü Hₐ: μ ≠ μ₀ ile %95 aralık, α = 0,05'te aynı sonucu verir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Güven aralığı, popülasyon ortalaması için ==makul değerlerin== listesidir.",
            "İddia aralığın içindeyse: makul değer, “ikna edici kanıt yok” (iddia kanıtlanmış olmaz).",
            "İddia aralığın dışındaysa: makul değil, ortalamanın farklı olduğuna dair ikna edici kanıt var.",
            "Aralığın tamamı iddianın üstündeyse (altındaysa) ortalama büyük (küçük) görünür.",
            "Cümleyi bağlamla yaz: “Since … is (not) in the interval …, we do (not) have convincing evidence that the true mean … differs from … ”.",
            "Önce koşulları (*Random*, 10%, *Normal*/*Large Sample*) kontrol et; dört adımı unutma.",
            "C güven düzeyli aralık = α = 1 − C ile iki yönlü *t* testi; tek yönlü testte testi ayrıca yap."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir telefon modelinin ortalama pil ömrü için %95 güven aralığı (8,78; 10,02) saat bulunmuştur. Aşağıdaki iddialardan hangisi bu aralığa göre makul değildir?",
      opts: ["μ = 8,9 saat", "μ = 9,4 saat", "μ = 10 saat", "μ = 10,5 saat"], a: 3,
      why: "10,5, aralığın üst sınırı olan 10,02'nin dışında kalır; diğer üç değer aralığın içindedir. En çekici yanlış şık 10: aralığın içinde olduğu için makul bir değerdir." },
    { q: "Bir otobüs şirketi, hattaki otobüslerin ortalama bekleme süresinin 80 saniye olduğunu iddia ediyor. Koşulları sağlayan rastgele bir örneklemden bu ortalama için %95 güven aralığı (72,6; 79,4) saniye bulunuyor. Aralığa göre doğru sonuç hangisidir?",
      opts: ["80, aralığa çok yakın olduğu için iddia doğrudur.", "80 aralığın dışında olduğu için gerçek ortalamanın 80 saniyeden farklı olduğuna dair ikna edici kanıt vardır.", "Aralık geniş olduğu için hiçbir sonuç çıkarılamaz.", "Gerçek ortalama kesinlikle 76 saniyedir."], a: 1,
      why: "80, aralığın üst sınırı olan 79,4'ün dışında kalır, yani makul bir değer değildir; aralığın tamamı 80'in altında olduğundan ortalama 80'den küçük görünür. “Yakın olması” makul sayılması için yetmez." },
    { q: "Bir kantinci, ortalama menü fiyatının 40 TL olduğunu iddia ediyor. Dört okuldan alınan rastgele örneklerle ortalama fiyat için %95 güven aralıkları kuruluyor. Hangi okul(lar), ortalamanın 40 TL'den büyük olduğuna dair ikna edici kanıt sağlar?",
      fig: { type: "table", head: ["Okul", "%95 güven aralığı (TL)"], rows: [["A", "(36,2; 43,1)"], ["B", "(41,5; 47,3)"], ["C", "(32,0; 39,5)"], ["D", "(38,0; 45,0)"]], caption: "Kantin menü fiyatı" },
      opts: ["Yalnızca A", "B ve D", "Yalnızca B", "C ve D"], a: 2,
      why: "Yalnızca B'nin aralığı 40'ı içermez ve tamamı 40'ın üstündedir (41,5 > 40). A ve D 40'ı içerir (ikna edici kanıt yok); C 40'ın dışında ama altındadır, yani ortalama 40'tan küçük görünür." },
    { q: "Bir ortalama için %99 güven aralığı (12,4; 15,6) bulunmuştur. H₀: μ = 16, Hₐ: μ ≠ 16 testi α = 0,01 ile yapılırsa sonuç ne olur?",
      opts: ["H₀ reddedilir; çünkü 16 aralığın dışındadır.", "H₀ reddedilemez; çünkü 16, aralığa çok yakındır.", "H₀ reddedilemez; çünkü aralık geniştir.", "P-değeri verilmediği için hiçbir şey söylenemez."], a: 0,
      why: "C = %99 ile α = 1 − 0,99 = 0,01 olan iki yönlü test uyuşur. 16 aralığın dışında olduğu için H₀ reddedilir. “Yakın” olmak ya da aralığın geniş olması karar vermez." },
    { q: "Bir öğrenci, ortalama pil ömrü iddiasında 10 saatin %95 güven aralığı (8,78; 10,02)'nin içinde olduğunu görüp “üreticinin 10 saat iddiası kanıtlandı” yazıyor. Bu değerlendirme için ne söylenir?",
      opts: ["Doğrudur; aralığın içindeki değer gerçek ortalamadır.", "Doğrudur; ama yalnızca n ≥ 30 ise.", "Yanlıştır; 10 makul bir değerdir ama aralıktaki diğer değerler de makuldür, 10 kanıtlanmış olmaz.", "Yanlıştır; 10'un aralıkta olması iddianın yanlış olduğunu gösterir."], a: 2,
      why: "Aralıktaki her değer makuldür; 10'un içeride olması yalnızca “iddiayı çürütecek ikna edici kanıt yok” demektir. Son şık tersine çevirir: içeride olmak iddiayı çürütmez." }
  ]
};
