/* Kitpath not defteri · cs104 · 1.5 Casting, Yuvarlama ve Taşma
   Kaynak: ap-videolar/src/episodes/cs104 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs104",
  amac: "Bu konu *casting*'i anlatıyor: bir değerin tipini kendin değiştirmek. (int) ve (double) çevirmelerini, ortalamada tam sayı bölmesinden kaçmayı, en yakın tam sayıya yuvarlamayı ve int sınırını aşınca ne olduğunu öğreneceksin.",
  bolumler: [
    {
      baslik: "*Casting*: tipi kendin değiştir",
      kisa: "Casting değeri başka tipe çevirir; int'ten double'a geçiş zaten otomatiktir.",
      bloklar: [
        { tip: "hikaye", ikon: "🧾", baslik: "23 lira, 3 kişi",
          metin: "Üç arkadaş kantinde 23 lira harcadı. Kişi başına gerçekte 7,66 lira düşer; ama Java'ya iki tam sayı verirsen 7 der ve 2 lira havaya uçar. Çıkış yolu, tipi kendin değiştirmek." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔁", terim: "Casting", tr: "tip dönüştürme", tanim: "Bir değeri başka tipe çevirmek. Değerin önüne parantez içinde hedef tip yazılır.", ornek: "(int) 7.9 sonucu 7, (double) 7 sonucu 7.0." },
            { ikon: "⬆️", terim: "Widening", tr: "genişletme", tanim: "int'ten double'a geçiş. Kendiliğinden olur, cast yazmak gerekmez.", ornek: "double d = 7; satırı d'ye 7.0 koyar." }
          ] }
      ]
    },
    {
      baslik: "(int) keser, yuvarlamaz",
      kisa: "(int) ondalık kısmı sıfıra doğru keser; double'dan int'e açık cast şarttır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✂️", terim: "Truncation", tr: "kesme", tanim: "Ondalık kısmı atıp sayıyı sıfıra doğru kısaltmak. Pozitifte aşağı, negatifte yukarı gider.", ornek: "(int) 99.9 sonucu 99, (int) -3.99 sonucu -3." }
          ] },
        { tip: "kod", baslik: "Dört cast", kod: "System.out.println((int) 7.9);\nSystem.out.println((int) 0.99);\nSystem.out.println((int) -3.99);\nSystem.out.println((double) 7);", cikti: "7\n0\n-3\n7.0" },
        { tip: "tablo", baslik: "Hangi atama derlenir?", head: ["Satır", "Derlenir mi?", "Sonuç / neden"], rows: [
            ["double d = 7;", "Evet", "d = 7.0 (widening)"],
            ["int x = 7.5;", "Hayır", "double'dan int'e cast'siz geçilmez"],
            ["int x = (int) 7.5;", "Evet", "x = 7 (ondalık kesilir)"]
          ] },
        { tip: "tuzak", metin: "Telefonun şarjı yüzde 99,9 iken int shown = (int) battery; satırı ekrana 99 yazar, 100 değil.", yanlis: "(int) en yakın tam sayıya yuvarlar.", dogru: "(int) yalnızca keser: 99.9 → 99, 0.99 → 0, -3.99 → -3." }
      ]
    },
    {
      baslik: "Cast'in yeri: bölmeden önce mi sonra mı?",
      kisa: "Cast yalnız hemen sağındakine uygulanır ve bölmeden önce çalışır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎯", baslik: "Cast sayının başında", maddeler: ["(double) a / b", "Önce a double olur; bölme ondalık verir"] },
          sag: { ikon: "⚠️", baslik: "Cast parantezin başında", maddeler: ["(double) (a / b)", "Önce int bölmesi kesilir; sonra double olur"] },
          oyun: [
            { metin: "(double) 9 / 2", cevap: "sol", neden: "Önce 9 → 9.0, sonra 9.0 / 2 = 4.5." },
            { metin: "(double) (9 / 2)", cevap: "sag", neden: "Önce 9 / 2 = 4 (int), sonra 4.0." },
            { metin: "(double) total / people", cevap: "sol", neden: "Cast total'a uygulanır; bölme double olur." },
            { metin: "(double) (sum / count)", cevap: "sag", neden: "Parantez içi int bölmesi: ondalık çoktan kayboldu." }
          ] },
        { tip: "kod", baslik: "Tek fark parantezin yeri", kod: "int a = 5;\nint b = 2;\ndouble r1 = (double) a / b;\ndouble r2 = (double) (a / b);\nSystem.out.println(r1 + \" \" + r2);", vurgu: [3, 4], cikti: "2.5 2.0" },
        { tip: "ornek", baslik: "r1 ve r2 nasıl hesaplanır?", durum: "a 5, b 2 iken r1 ve r2 hesaplanıyor.",
          adimlar: [
            "r1: (double) a → 5.0; sonra 5.0 / 2 = 2.5.",
            "r2: önce a / b iki int, 5 / 2 = 2; sonra (double) 2 → 2.0.",
            "println: r1 ve r2 arasında tırnaklı bir boşlukla 2.5 ve 2.0 yan yana yazılır."
          ], sonuc: "2.5 2.0" },
        { tip: "tuzak", metin: "AP bu soru tipini sever: cast'in parantezi neyin etrafında?", yanlis: "(double) (a / b) ortalamayı doğru hesaplar.", dogru: "Parantez içindeki a / b önce int bölmesi yapar, cast geç kalır. Cast'i bölmeden önce, sayının kendisine koy: (double) a / b." }
      ]
    },
    {
      baslik: "Ortalama: tam sayı bölmesinden kaçmak",
      kisa: "Toplamı cast'le double yap, sonra böl; ortalama ondalık kalır.",
      bloklar: [
        { tip: "kod", baslik: "Üç sınavın ortalaması", kod: "int sum = 257;\nint count = 3;\ndouble avg = (double) sum / count;\nSystem.out.println(avg);", vurgu: [3], cikti: "85.66666666666667", not: "Üç sınavın toplamı 257 (85 + 86 + 86). Sonuç uzayıp gider; bu normal." },
        { tip: "tablo", baslik: "Üç yazım, üç sonuç", head: ["Yazım", "Sonuç", "Neden"], rows: [
            ["double avg = sum / count;", "85.0", "İki int bölündü; ondalık kayboldu"],
            ["double avg = (double) sum / count;", "85.66666666666667", "sum önce double oldu"],
            ["double avg = (double) (sum / count);", "85.0", "Cast geç kaldı"]
          ], vurgu: 1 }
      ]
    },
    {
      baslik: "En yakın tam sayıya yuvarlama",
      kisa: "Pozitifte 0.5 ekle, negatifte 0.5 çıkar, sonra (int) ile kes.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎱", terim: "Rounding", tr: "yuvarlama", tanim: "Sayıyı en yakın tam sayıya çevirmek. (int) tek başına yuvarlamaz; önce sayı yarım birim kaydırılır.", ornek: "8.6 → 9, 8.4 → 8." }
          ] },
        { tip: "formul", parcalar: [
            { t: "(int) (x + 0.5)", alt: "x ≥ 0 ise" }, "veya",
            { t: "(int) (x - 0.5)", alt: "x < 0 ise" }
          ], aciklama: "Önce yarım ekle (negatifte çıkar), sonra (int) ile kes: sonuç en yakın tam sayıdır." },
        { tip: "tablo", baslik: "Dört örnek", head: ["Sayı", "İşlem", "Sonuç"], rows: [
            ["8.6", "(int) (8.6 + 0.5) = (int) 9.1", "9"],
            ["8.4", "(int) (8.4 + 0.5) = (int) 8.9", "8"],
            ["-8.6", "(int) (-8.6 - 0.5) = (int) -9.1", "-9"],
            ["85.67 (ortalama)", "(int) (85.67 + 0.5) = (int) 86.17", "86"]
          ] },
        { tip: "ornek", baslik: "Yuvarlama ile kesmeyi karıştırma", durum: "(int) (2.7 + 0.5) + (int) 2.7 ifadesi kaç eder?",
          adimlar: [
            "Birinci parça: 2.7 + 0.5 = 3.2, (int) 3.2 = 3 (yuvarlama).",
            "İkinci parça: (int) 2.7 = 2 (yalnız kesme).",
            "Toplam: 3 + 2 = 5."
          ], sonuc: "5. İkisini de 3 sanırsan 6 bulursun." }
      ]
    },
    {
      baslik: "Taşma: *Integer.MAX_VALUE* ve *overflow*",
      kisa: "int sınırını aşan sayı hata vermeden öbür uca sarar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔝", terim: "Integer.MAX_VALUE", tr: "en büyük int", tanim: "int'in alabileceği en büyük değer: 2147483647.", ornek: "Rakamını ezberlemene gerek yok." },
            { ikon: "🔻", terim: "Integer.MIN_VALUE", tr: "en küçük int", tanim: "int'in alabileceği en küçük değer: -2147483648.", ornek: "Negatif tarafta aynı büyüklükte sınır." },
            { ikon: "🌀", terim: "Integer overflow", tr: "taşma", tanim: "Sınır aşılınca sayının hata vermeden öbür uca sarması.", ornek: "MAX_VALUE + 1 sonucu MIN_VALUE'dur." },
            { ikon: "📄", terim: "Java Quick Reference", tr: "hızlı başvuru sayfası", tanim: "Sınavda verilen başvuru sayfası. Bu sabitler orada yazar, ezberlemezsin.", ornek: "Math ve String metot listeleri de orada." }
          ] },
        { tip: "grafik", baslik: "int sayı doğrusunda taşma", xlabel: "int değerleri", ylabel: "", xmax: 10, ymax: 4,
          xticks: [{ v: 1, label: "MIN" }, { v: 9, label: "MAX" }],
          ogeler: [
            { id: "d", tip: "cizgi", from: [0.6, 2], to: [9.4, 2], renk: 0 },
            { id: "tmin", tip: "yazi", x: 1.6, y: 1.1, metin: "MIN_VALUE" },
            { id: "tmax", tip: "yazi", x: 8.4, y: 1.1, metin: "MAX_VALUE" },
            { id: "p", tip: "nokta", x: 9, y: 2, etiket: "2147483647", renk: 1, gizli: true },
            { id: "ok1", tip: "ok", from: [9, 3], to: [1, 3], renk: 2, gizli: true },
            { id: "t1", tip: "yazi", x: 5, y: 3.5, metin: "+ 1 → sarar", gizli: true }
          ],
          durumlar: [
            { metin: "int değerleri bu doğruda dizilir: solda en küçük, sağda en büyük." },
            { metin: "Sağ uçta Integer.MAX_VALUE var: 2147483647. int'in alabileceği son sayı.", goster: ["p"] },
            { metin: "Buna 1 eklersen hata gelmez; sayı doğrunun öbür ucuna sarar.", goster: ["ok1", "t1"] },
            { metin: "Sonuç: MAX_VALUE + 1 = MIN_VALUE = -2147483648.", set: { p: { x: 1, etiket: "-2147483648" } } }
          ] },
        { tip: "kod", baslik: "Kilometre sayacı gibi", kod: "int big = Integer.MAX_VALUE;\nSystem.out.println(big);\nbig = big + 1;\nSystem.out.println(big);", vurgu: [3], cikti: "2147483647\n-2147483648", not: "Hata mesajı yok; program sessizce yanlış sayıyla devam eder, tıpkı 999999'dan sonra sıfırlara dönen eski kilometre sayacı gibi." }
      ]
    },
    {
      baslik: "*Round-off error*: double'ın küçük hatası",
      kisa: "Bilgisayar her ondalığı tam saklayamaz; küçük hatalar çıkabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔬", terim: "Round-off error", tr: "yuvarlama hatası", tanim: "double bazı ondalık sayıları tam saklayamaz; sonuç çok küçük bir hata taşır.", ornek: "0.1 + 0.2, 0.3 yerine 0.30000000000000004 çıkar." }
          ] },
        { tip: "kod", baslik: "0.1 + 0.2", kod: "System.out.println(0.1 + 0.2);", cikti: "0.30000000000000004", not: "Sınavda bilmen gereken tek şey: double sonuçlar küçük hatalar taşıyabilir, şaşırma." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "tablo", baslik: "Sınav için bilmen gereken", head: ["Düzey", "Konu"], rows: [
            ["✎ Yazman gereken", "(double) sum / count ile ortalama; (int) (x + 0.5) ile yuvarlama; double'dan int'e atamada (int)"],
            ["👁 Okuman gereken", "*Overflow* sonucu (MAX_VALUE + 1) ve *round-off*'lu double çıktıları"],
            ["✗ Bilmen gerekmeyen", "MAX_VALUE rakamlarını ezberlemek (Quick Reference'ta var), long / float, binary gösterim"]
          ] },
        { tip: "ozet", maddeler: [
            "(int) ondalığı keser, yuvarlamaz: 99.9 → 99, -3.99 → -3 (sıfıra doğru).",
            "int → double otomatik (*widening*); double → int için (int) cast yazmak şart.",
            "Cast hemen sağındaki ilk değere uygulanır: (double) a / b ondalık verir, (double) (a / b) vermez.",
            "Ortalama için (double) sum / count yaz; cast'siz sum / count ondalığı kaybeder.",
            "En yakın tam sayıya: pozitifte (int) (x + 0.5), negatifte (int) (x - 0.5).",
            "int sınırını aşınca sayı öbür uca sarar (*overflow*): MAX_VALUE + 1 = MIN_VALUE.",
            "double ondalıkları küçük *round-off* hataları taşıyabilir: 0.1 + 0.2 tam 0.3 değildir."
          ] }
      ]
    }
  ]
};
