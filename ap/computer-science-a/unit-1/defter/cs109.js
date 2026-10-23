/* Kitora not defteri · cs109 · 1.15 String: Birleştirme ve substring
   Kaynak: ap-videolar/src/episodes/cs109 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs109",
  amac: "*String* bir yazı nesnesidir. Harflerin *index*'ini, yazıları + ile birleştirmeyi, *substring* ile parça kesmeyi, sınır hatasını ve *String*'in değiştirilemez (*immutable*) olduğunu öğreneceksin.",
  bolumler: [
    {
      baslik: "*String* nesnesi, *index* ve *length*",
      kisa: "Sayma sıfırdan başlar; son harfin index'i length() − 1'dir.",
      bloklar: [
        { tip: "hikaye", ikon: "💬", baslik: "Kilit ekranındaki bildirim",
          metin: "Telefonun kilit ekranı mesajın yalnızca ilk birkaç harfini gösteriyor: uygulama koca yazıdan bir parça kesmiş. Kayıt formu da adının ve soyadının baş harflerini alıp profil resmine yazıyor. Bunların hepsi *Java*'da birkaç *String* metoduyla yapılır; sınavın en sevdiği konulardan biri." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔤", terim: "String", tr: "yazı", tanim: "Bir sınıftır; her yazı bir *String* nesnesidir. En kolay yolu tırnaktır.", ornek: "*String* city = \"Ankara\";" },
            { ikon: "🔢", terim: "Index", tr: "harf sırası", tanim: "Her harfin bir sırası vardır ve sayma ==sıfırdan başlar==.", ornek: "Ankara'da A sıfır, n 1, k 2, a 3, r 4, son a 5." },
            { ikon: "📏", terim: "length()", tr: "uzunluk", tanim: "Yazıdaki harf sayısını döndürür. Son harfin index'i her zaman length() − 1'dir.", ornek: "city.length() 6 döndürür; son index 5." }
          ] },
        { tip: "tablo", baslik: "\"Ankara\" harf harf", head: ["index", "0", "1", "2", "3", "4", "5"], rows: [["harf", "A", "n", "k", "a", "r", "a"]] },
        { tip: "kod", kod: "String city = \"Ankara\";\nSystem.out.println(city.length());", vurgu: [2], cikti: "6" }
      ]
    },
    {
      baslik: "Yazıları + ile birleştirmek",
      kisa: "Birleştirme soldan sağa gider; yazıya eklenen sayı toplanmaz, yapışır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧲", terim: "Concatenation", tr: "birleştirme", tanim: "Yazıları + ile uç uca eklemek. Bir taraf *String* ise sonuç *String* olur. Java ifadeyi ==soldan sağa== değerlendirir.", ornek: "\"Kito\" + \"ra\" ⇒ Kitora" }
          ] },
        { tip: "kod", baslik: "Sıra sonucu belirler", kod: "System.out.println(\"Kito\" + \"ra\");\nSystem.out.println(\"Puan: \" + 9 + 1);\nSystem.out.println(9 + 1 + \" puan\");\nSystem.out.println(\"Puan: \" + (9 + 1));", vurgu: [2, 3], cikti: "Kitora\nPuan: 91\n10 puan\nPuan: 10" },
        { tip: "tuzak", metin: "\"Puan: \" + 9 + 1 satırında önce yazıya 9 eklenir (\"Puan: 9\"), sonra 1 eklenir. 9 + 1 + \" puan\" satırında ise önce iki sayı toplanır (10), sonra yazı eklenir.", yanlis: "\"Puan: \" + 9 + 1 yazdırınca Puan: 10 çıkar.", dogru: "Puan: 91 çıkar. Puan: 10 istiyorsan 9 + 1'i paranteze al." }
      ]
    },
    {
      baslik: "*substring*: parça kesmek",
      kisa: "substring(a, b) a'dan başlar, b'yi almaz; uzunluk b − a olur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✂️", terim: "substring(from, to)", tr: "parça kes", tanim: "Başlangıç ==dahil==, bitiş ==hariç==: from'dan to − 1'e kadar olan harfleri verir.", ornek: "city.substring(1, 4) ⇒ index 1, 2, 3 ⇒ nka" },
            { ikon: "🪚", terim: "substring(from)", tr: "sona kadar kes", tanim: "from'dan yazının sonuna kadar olan parçayı verir.", ornek: "city.substring(3) ⇒ ara" }
          ] },
        { tip: "formul", parcalar: [
            { t: "bitiş", alt: "to" }, "−", { t: "başlangıç", alt: "from" }, "=", { t: "parçanın uzunluğu", alt: "substring(1, 4) → 4 − 1 = 3 harf" }
          ], aciklama: "Tek bir harf istiyorsan substring(i, i + 1) yaz." },
        { tip: "grafik", baslik: "\"Ankara\" üzerinde kesim", xlabel: "index sınırları", ylabel: "", xmax: 6, ymax: 4,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "l0", tip: "yazi", x: 0.5, y: 2.6, metin: "A" },
            { id: "l1", tip: "yazi", x: 1.5, y: 2.6, metin: "n" },
            { id: "l2", tip: "yazi", x: 2.5, y: 2.6, metin: "k" },
            { id: "l3", tip: "yazi", x: 3.5, y: 2.6, metin: "a" },
            { id: "l4", tip: "yazi", x: 4.5, y: 2.6, metin: "r" },
            { id: "l5", tip: "yazi", x: 5.5, y: 2.6, metin: "a" },
            { id: "kes", tip: "cizgi", renk: 1, from: [1, 1.8], to: [4, 1.8], gizli: true },
            { id: "sonuc", tip: "yazi", x: 3, y: 0.8, metin: "substring(1, 4) ⇒ nka", gizli: true }
          ],
          durumlar: [
            { metin: "Harfler iki sınır arasında durur: A, 0 ile 1 arasında." },
            { metin: "substring(1, 4): 1. sınırdan 4. sınıra kadar; ==n, k, a==. 4 numaralı r kalır.", goster: ["kes", "sonuc"] },
            { metin: "substring(3): 3. sınırdan sona; ==a, r, a==.", set: { kes: { from: [3, 1.8], to: [6, 1.8] }, sonuc: { metin: "substring(3) ⇒ ara" } } },
            { metin: "substring(2, 3): tek harf, ==k==. İki sayı arası 1 olduğu için tek harf çıkar.", set: { kes: { from: [2, 1.8], to: [3, 1.8] }, sonuc: { metin: "substring(2, 3) ⇒ k" } } }
          ] },
        { tip: "kod", kod: "String city = \"Ankara\";\nSystem.out.println(city.substring(1, 4));\nSystem.out.println(city.substring(3));\nSystem.out.println(city.substring(2, 3));", cikti: "nka\nara\nk" }
      ]
    },
    {
      baslik: "Sınırı aşmak: *exception*",
      kisa: "Sınırlar 0 ile length() arasında olmalı; length()'te durmak serbesttir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚧", terim: "StringIndexOutOfBoundsException", tr: "yazı sınırı aşıldı hatası", tanim: "Geçersiz bir index verirsen *Java* bu çalışma anı hatasını (*run-time error*) fırlatır. Kural: 0 ≤ from ≤ to ≤ length().", ornek: "6 harfli yazıda 7 diye bir sınır yoktur." }
          ] },
        { tip: "tablo", baslik: "city = \"Ankara\" (length 6)", head: ["Çağrı", "Sonuç"], rows: [
            ["city.substring(2, 7)", "*StringIndexOutOfBoundsException*: 7 > length"],
            ["city.substring(6)", "\"\" (boş yazı): 6 tam sonun kendisi, hata yok"],
            ["city.substring(3, 3)", "\"\" (boş yazı): başlangıç = bitiş"]
          ], vurgu: 0 },
        { tip: "tuzak", metin: "*substring*(6) hata vermez; çünkü 6 = length() geçerli bir sınırdır. Hata ancak length()'ten büyük sayıda çıkar.", yanlis: "city.substring(6) hata fırlatır.", dogru: "Boş yazı döndürür. Hata veren: city.substring(2, 7)." }
      ]
    },
    {
      baslik: "*Immutable*: *String* değişmez",
      kisa: "Metotlar yeni String döndürür; sonucu geri atamazsan hiçbir şey değişmez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔒", terim: "Immutable", tr: "değiştirilemez", tanim: "*String* nesnesi oluşturulduktan sonra değişmez. *substring* eski yazıyı kesmez; yeni bir *String* üretip döndürür, onu kimse almazsa kaybolur.", ornek: "s.substring(0, 4); satırı s'yi değiştirmez." }
          ] },
        { tip: "kod", baslik: "Geri atarsan değişir", kod: "String s = \"kitora\";\ns.substring(0, 4);\nSystem.out.println(s);\ns = s.substring(0, 4);\nSystem.out.println(s);\ns += \"!\";\nSystem.out.println(s);", vurgu: [2, 4], cikti: "kitora\nkito\nkito!",
          not: "+= de böyle çalışır: eski yazı değişmez, s yeni bir yazıya bakar." },
        { tip: "tuzak", metin: "Metodu tek başına çağırmak sonucu bir yere koymaz. Değişsin istiyorsan geri ata: s = s.substring(0, 4);", yanlis: "s.substring(0, 4); yazınca s kısalır.", dogru: "s hâlâ \"kitora\". Yeni yazı s'ye atanmadıkça kaybolur." }
      ]
    },
    {
      baslik: "Baş harfleri almak",
      kisa: "Tek harf için substring(0, 1); iki parçayı + ile birleştir.",
      bloklar: [
        { tip: "kod", baslik: "Profil resmi: EY", kod: "String first = \"Elif\";\nString last = \"Yilmaz\";\nString initials = first.substring(0, 1) + last.substring(0, 1);\nSystem.out.println(initials);", vurgu: [3], cikti: "EY",
          not: "Sınav örnekleri İngilizce kelimelerle gelir; Türkçe harfleri sorularda görmezsin." },
        { tip: "ornek", baslik: "Adım adım", durum: "first \"Elif\", last \"Yilmaz\" iken initials ne olur?", adimlar: [
            "first.substring(0, 1): index 0, yani E.",
            "last.substring(0, 1): index 0, yani Y.",
            "İkisini + ile birleştir: E + Y."
          ], sonuc: "EY. Bu tür kısa *String* işlemleri *FRQ*'larda sık çıkar." }
      ]
    },
    {
      baslik: "*AP* örneği: sonucu atılan *substring*",
      kisa: "basketbol: ikinci satır w'yi değiştirmez, çıktıda w tam kalır.",
      bloklar: [
        { tip: "kod", baslik: "Ne yazdırılır?", kod: "String w = \"basketbol\";\nw.substring(0, 6);\nString t = w.substring(6) + w.length();\nSystem.out.println(w + \" \" + t);", vurgu: [2], cikti: "basketbol bol9" },
        { tip: "ornek", baslik: "Satır satır", durum: "w \"basketbol\" (9 harf, index 0…8). Konsolda ne görünür?", adimlar: [
            "2. satır: substring(0, 6) \"basket\" üretir ama kimse almaz; w değişmez.",
            "3. satır: w.substring(6) = index 6, 7, 8 = \"bol\".",
            "w.length() = 9; \"bol\" + 9 ⇒ \"bol9\" (String + sayı ⇒ String).",
            "4. satır: w + \" \" + t ⇒ \"basketbol bol9\"."
          ], sonuc: "basketbol bol9. \"basket bol9\" diyen *immutable* olduğunu unuttu." }
      ]
    },
    {
      baslik: "Sınav için bilmen gerekenler",
      kisa: "FRQ'da her yıl bir String sorusu çıkar; metotlar Quick Reference'ta.",
      bloklar: [
        { tip: "tablo", head: ["", "Unit 1'de bu konuda"], rows: [
            ["✍️ Yazarsın", "*substring*'in iki hali, *length*, + ile birleştirme, tek harf için substring(i, i + 1)."],
            ["👀 Okursun", "*Index* hesapları ve hangi çağrının *exception* fırlattığı."],
            ["🚫 Gerekmez", "*char* tipi ve *charAt*, *StringBuilder*, *printf* ve *format*. Kullanacağın metotlar *Java Quick Reference*'ta."]
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Index* sıfırdan başlar; son harf length() − 1.",
            "+ ile birleştirme soldan sağa: yazıya eklenen sayı toplanmaz, yan yana yazılır.",
            "*substring*(a, b): a dahil, b hariç; uzunluğu b − a. *substring*(a): a'dan sona.",
            "Tek harf için substring(i, i + 1).",
            "Sınırı aşmak *StringIndexOutOfBoundsException*; ama length()'te durmak serbest (boş yazı).",
            "*String* *immutable*: sonucu geri atamazsan hiçbir şey değişmez."
          ] }
      ]
    }
  ]
};
