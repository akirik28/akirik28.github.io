/* Kitora not defteri · cs101 · 1.1 İlk Program: Algoritma, Derleyici, Hatalar
   Kaynak: ap-videolar/src/episodes/cs101 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs101",
  amac: "Bu konu ilk Java programını anlatıyor: algoritma, ekrana yazdırma komutları, derleyici ve üç hata türü. Bir kodun konsola ne yazdığını elle izlemeyi ve hatanın hangi türden olduğunu ayırt etmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "*Algorithm*: sırası belli adımlar",
      kisa: "Bilgisayar adımları tam yazılan sırayla yürütür; ne eksik ne fazla yapar.",
      bloklar: [
        { tip: "hikaye", ikon: "🥪", baslik: "Kantinde tost tarifi",
          metin: "Telefonda arkadaşına tost tarifi veriyorsun: ekmeği aç, kaşarı koy, makineyi kapat. Sırayı karıştırırsan (önce makineyi kapat, sonra kaşarı koy) kaşar tezgâhta kalır, boş ekmek pişer. Bilgisayar da böyledir: tam söylediğin sırayla yapar; eksiği tamamlamaz, akıl yürütmez." },
        { tip: "adimlar", baslik: "Tarif, adım adım", adimlar: [
            { baslik: "Ekmeği aç", metin: "Birinci adım: tezgâh hazır." },
            { baslik: "Kaşarı koy", metin: "İkinci adım: ekmeğin içi dolar." },
            { baslik: "Makineyi kapat", metin: "Üçüncü adım: tost pişer. Bu üç adım sırasıyla yürüyen bir ==algoritma==." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📋", terim: "Algorithm", tr: "algoritma", tanim: "Bir işi yapmak için sırası belli, açık ve sonlu adımlar.", ornek: "Tost tarifi: aç, koy, kapat." },
            { ikon: "🪜", terim: "Sequencing", tr: "sıralı yürütme", tanim: "Adımların yukarıdan aşağıya, yazıldığı sırayla ve birer birer çalışması.", ornek: "Makineyi kaşardan önce kapatırsan sonuç bozulur." }
          ] },
        { tip: "not", metin: "Algoritmayı bilgisayarın anlayacağı dilde yazarsan ==program== olur; bu yıl dil *Java*. Sınavda dev programlar yazmayacaksın: çoğu zaman birkaç satırın ne yaptığını okuyacak ya da tek bir metot yazacaksın." }
      ]
    },
    {
      baslik: "İlk Java programı: *class*, *main*, noktalı virgül",
      kisa: "Program main metodundan başlar; her komut noktalı virgülle biter.",
      bloklar: [
        { tip: "kod", baslik: "İlk programın", kod: "public class Hello {\n  public static void main(String[] args) {\n    System.out.println(\"Merhaba Kitora\");\n  }\n}", vurgu: [3], cikti: "Merhaba Kitora", not: "Asıl iş 3. satırda; geri kalanı kabuktur." },
        { tip: "tablo", baslik: "Parçalar ne işe yarar?", head: ["Parça", "Görevi"], rows: [
            ["*class* (1. satır)", "Programın dış kabuğu; kod bunun içinde durur."],
            ["*main* (2. satır)", "Program buradan başlar."],
            ["System.out.println(...)", "Parantez içindekini konsola yazar."],
            [";  (3. satırın sonu)", "Her komut noktalı virgülle biter, cümlenin sonundaki nokta gibi."]
          ], not: "Sınavda *class* ve *main* kabuğunu sıfırdan yazdırmazlar; kabuğu tanımak yeter." }
      ]
    },
    {
      baslik: "*print* ile *println*",
      kisa: "println yazıp alt satıra geçer; print aynı satırda kalır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "↵", baslik: "*println*", maddeler: ["Yazar ve alt satırın başına geçer", "Sonraki çıktı yeni satırda başlar"] },
          sag: { ikon: "→", baslik: "*print*", maddeler: ["Yazar ve aynı satırda bekler", "Sonraki çıktı hemen yanına eklenir"] },
          oyun: [
            { metin: "Yazdıktan sonra imleç alt satırın başına iner.", cevap: "sol", neden: "Satırı bitirmek *println*'in işi." },
            { metin: "Arka arkaya iki çağrı, çıktıyı yan yana yazar.", cevap: "sag", neden: "*print* satırı bitirmez; sonraki yazı yanına gelir." },
            { metin: "Bir listeyi her öğe ayrı satırda yazdırmak için her öğenin sonunda kullanılır.", cevap: "sol", neden: "Her öğeden sonra satır atlamak gerekiyor: *println*." },
            { metin: "System.out.print(\"Zil\"); satırından sonra gelen çıktı Zil'in hemen yanında başlar.", cevap: "sag", neden: "İmleç Zil'den sonra aynı satırda kalır." }
          ] },
        { tip: "kod", baslik: "Dört komut, iki satır", kod: "System.out.print(\"Ders \");\nSystem.out.println(\"bitti\");\nSystem.out.print(\"Zil\");\nSystem.out.println(\" çaldı\");", cikti: "Ders bitti\nZil çaldı", not: "Tırnak içindeki boşluklar da aynen basılır: \"Ders \" sonunda, \" çaldı\" başında bir boşluk var." }
      ]
    },
    {
      baslik: "*String literal* ve *escape sequence*",
      kisa: "Tırnak içi aynen basılır; ters eğik çizgi özel karakter üretir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💬", terim: "String literal", tr: "sabit yazı", tanim: "Tırnak içindeki yazı. Java onu harfi harfine basar; boşluklar dahil.", ornek: "\"Merhaba Kitora\" bir string literal'dir." },
            { ikon: "🔣", terim: "Escape sequence", tr: "kaçış dizisi", tanim: "Ters eğik çizgiyle başlayan ve tek bir özel karakter üreten dizi.", ornek: "\\n yeni satır açar." }
          ] },
        { tip: "tablo", baslik: "Üç kaçış dizisi", head: ["Yazılan", "Konsolda ne olur?"], rows: [
            ["\\\"", "Bir tırnak işareti basar"],
            ["\\n", "Yeni satır açar"],
            ["\\\\", "Tek bir ters eğik çizgi basar"]
          ] },
        { tip: "kod", baslik: "Üçü bir arada", kod: "System.out.println(\"Hoca \\\"sessiz\\\" dedi\\nTamam\");", cikti: "Hoca \"sessiz\" dedi\nTamam", not: "İki \\\" tırnak basar, \\n araya yeni satır koyar." },
        { tip: "tuzak", metin: "Tırnağın içi hesaplanmaz, aynen basılır. println(\"1 + 2\"), print(\"3\"), println(\"4\") sırası iki satır üretir: 1 + 2 ve altında 34.", yanlis: "System.out.println(\"1 + 2\") ekrana 3 yazar.", dogru: "Tırnaklı hali 1 + 2 yazısını basar; tırnaksız println(1 + 2) hesaplayıp 3 basar." }
      ]
    },
    {
      baslik: "*Compiler* ve *syntax error*",
      kisa: "Derleyici kodu çalışmadan önce denetler; kural hatasında program hiç başlamaz.",
      bloklar: [
        { tip: "adimlar", baslik: "Kodun yolculuğu", adimlar: [
            { baslik: "Sen kodu yazarsın", metin: "Java kaynak kodu." },
            { baslik: "*Compiler* kontrol eder", metin: "Kurallara uygunluğunu denetler ve çalıştırılabilir hale (*bytecode*) çevirir." },
            { baslik: "Hata yoksa program çalışır", metin: "Hata varsa derleyici durur; konsola tek harf bile çıkmaz." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚙️", terim: "Compiler", tr: "derleyici", tanim: "Yazdığın kodu çalıştırmadan önce okuyan, kurallara uyup uymadığına bakan ve çalıştırılabilir hale çeviren program.", ornek: "Java kodunu bytecode'a çevirir." },
            { ikon: "⛔", terim: "Syntax error", tr: "yazım hatası (compile-time error)", tanim: "Dil kuralına uymayan yazım. Derleyici durur, program hiç çalışmaz.", ornek: "Noktalı virgülü unutmak." }
          ] },
        { tip: "tablo", baslik: "Üç tipik yazım hatası", head: ["Hatalı satır", "Sorun"], rows: [
            ["System.out.println(\"Merhaba\")", "Noktalı virgül yok"],
            ["System.out.println(\"Merhaba);", "Tırnak kapanmamış"],
            ["System.out.Println(\"Merhaba\");", "println büyük P ile yazılmış; Java büyük-küçük harfi ayırır"]
          ] }
      ]
    },
    {
      baslik: "*Logic error*, *run-time error*, *exception*",
      kisa: "Logic error yanlış sonuç verir; run-time error çalışırken çöker.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Logic error", tr: "mantık hatası", tanim: "Kod derlenir ve çalışır ama yanlış sonuç verir. Derleyici bunu yakalamaz.", ornek: "Ortalamayı parantezsiz yazmak." },
            { ikon: "💥", terim: "Run-time error", tr: "çalışma zamanı hatası", tanim: "Program derlenir ama çalışırken çöker.", ornek: "Bir tam sayıyı sıfıra bölmek." },
            { ikon: "🚨", terim: "Exception", tr: "istisna", tanim: "Çalışma sırasında fırlatılan hata; programı durdurur.", ornek: "ArithmeticException: / by zero." }
          ] },
        { tip: "ikili", sol: { ikon: "⛔", baslik: "*Syntax error*", maddeler: ["Derleyici durur", "Program hiç çalışmaz, konsol boş kalır"] },
          sag: { ikon: "⚠️", baslik: "*Logic error*", maddeler: ["Program çalışır", "Sonuç yanlıştır ve kimse uyarmaz"] },
          oyun: [
            { metin: "Noktalı virgülü unutmak.", cevap: "sol", neden: "Dil kuralı ihlali; derleme aşamasında yakalanır." },
            { metin: "Ortalamayı 80 + 90 / 2 diye hesaplayıp 125 görmek.", cevap: "sag", neden: "Kod geçerli ve çalışıyor, sonuç yanlış." },
            { metin: "System.out.Println yazmak (büyük P).", cevap: "sol", neden: "Böyle bir metot yok; derleyici reddeder." },
            { metin: "Program sorunsuz çalıştı ama beklenenden farklı bir sayı yazdı.", cevap: "sag", neden: "Çalışıp yanlış sonuç vermek *logic error*'dür." }
          ] },
        { tip: "ornek", baslik: "Ortalama neden 125 çıktı?", durum: "İki notun (80 ve 90) ortalamasını bulmak için kodun ilk satırı yazılmış.",
          adimlar: [
            "Java önce bölmeyi yapar: 90 / 2 = 45.",
            "Sonra toplama: 80 + 45 = 125.",
            "Beklenen 85'ti. Toplama parantez içinde olmalıydı: (80 + 90) / 2 = 170 / 2 = 85.",
            "Derleyici bunu fark etmez: kod geçerli, sonuç yanlış."
          ], sonuc: "125 yazar; doğrusu 85. Çalışan ama yanlış sonuç veren kod *logic error*'dür." },
        { tip: "kod", baslik: "Üç satır, üç davranış", kod: "System.out.println(80 + 90 / 2);\nSystem.out.println((80 + 90) / 2);\nSystem.out.println(10 / 0);", vurgu: [3], cikti: "125\n85\nException in thread \"main\" java.lang.ArithmeticException: / by zero", not: "Üçüncü satırda program çöker; kırmızı mesaj bir *exception*'dır." }
      ]
    },
    {
      baslik: "Yorumlar (*comment*)",
      kisa: "Derleyici yorumları yok sayar; yorum içindeki komut hiçbir şey basmaz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📝", terim: "Comment", tr: "yorum", tanim: "İnsanlar için yazılan not. Derleyici onu tamamen yok sayar.", ornek: "// skoru ekrana yaz" }
          ] },
        { tip: "kod", baslik: "Üç yorum biçimi", kod: "// tek satırlık yorum\n/* birkaç satırlık\n   yorum */\n/** Javadoc: metodun ne yaptığını anlatır. */", not: "Üçüncü biçim *Javadoc*: bir metodun ne yaptığını anlatan belge yorumudur." },
        { tip: "kod", baslik: "Yorum satırındaki komut çalışmaz", kod: "System.out.println(\"A\");\n// System.out.println(\"B\");\n/* System.out.println(\"C\");\n   System.out.println(\"D\"); */\nSystem.out.println(\"E\"); // System.out.println(\"F\");", vurgu: [1, 5], cikti: "A\nE", not: "B, C, D ve F yorumun içinde kaldığı için hiç çalışmaz." }
      ]
    },
    {
      baslik: "AP örneği: çıktıyı satır satır izle",
      kisa: "print içindeki \\n satır atlatır; çıktıyı imleç nerede diye izle.",
      bloklar: [
        { tip: "kod", baslik: "Konsolda ne çıkar?", kod: "System.out.print(\"A\");\nSystem.out.println(\"B\");\nSystem.out.print(\"C\\n\");\nSystem.out.print(\"D\");", vurgu: [3], cikti: "AB\nC\nD" },
        { tip: "ornek", baslik: "İmleci takip et", durum: "Dört satır sırayla çalışıyor.",
          adimlar: [
            "print(\"A\"): A yazılır, imleç aynı satırda kalır.",
            "println(\"B\"): B yazılır ve satır biter. Konsol: AB.",
            "print(\"C\\n\"): C yazılır, sonra \\n yeni satır açar. Konsol: C.",
            "print(\"D\"): D yeni satırda yazılır."
          ], sonuc: "Üç satır: AB, C, D." },
        { tip: "tuzak", metin: "C'nin yanındaki \\n, o print'i println gibi davrandırır.", yanlis: "Konsol AB ve CD yazar (C ile D yan yana).", dogru: "\\n C'den sonra satırı bitirir; D alt satırda başlar." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "tablo", baslik: "Sınav için bilmen gereken", head: ["Düzey", "Konu"], rows: [
            ["✎ Yazman gereken", "print / println ile çıktı, tırnaklı yazılar, üç *escape sequence*"],
            ["👁 Okuman gereken", "Bir kodun *syntax*, *logic* ya da *run-time* hatası verdiğini ayırt etmek; çıktının satır düzenini izlemek"],
            ["✗ Bilmen gerekmeyen", "Scanner ile klavyeden okuma, printf / format, derleyicinin iç işleyişi, class + main kabuğunu sıfırdan yazmak"]
          ] },
        { tip: "ozet", maddeler: [
            "*Algorithm*: sırası belli, açık adımlar; Java bunları yukarıdan aşağıya yürütür (*sequencing*).",
            "println yazar ve alt satıra geçer; print aynı satırda kalır.",
            "Tırnak içi (*string literal*) aynen basılır, hesaplanmaz: println(\"1 + 2\") 1 + 2 yazar.",
            "\\\" bir tırnak, \\n yeni satır, \\\\ tek bir ters eğik çizgi basar.",
            "*Syntax error*'da program hiç çalışmaz; *logic error*'da yanlış sonuç verir; *run-time error*'da çalışırken çöker (*exception*).",
            "Derleyici yorumları (*comment*) yok sayar; yorumdaki komut çalışmaz.",
            "print(\"C\\n\") satırı println gibi satır atlatır."
          ] }
      ]
    }
  ]
};
