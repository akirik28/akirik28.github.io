/* Kitora not defteri · cs110 · 1.15 String: indexOf, equals, compareTo
   Kaynak: ap-videolar/src/episodes/cs110 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs110",
  amac: "Yazının içinde arama yapmayı ve iki yazıyı karşılaştırmayı öğreneceksin: *indexOf* ile yer bulma, *equals* ile eşitlik, *compareTo* ile sıralama. Ayrıca iki eşittir işareti ile *equals* farkını ve *null* yazı tuzağını bileceksin.",
  bolumler: [
    {
      baslik: "*indexOf*: yazı içinde arama",
      kisa: "indexOf ilk eşleşmenin index'ini verir; bulamazsa −1 döndürür.",
      bloklar: [
        { tip: "hikaye", ikon: "📧", baslik: "E-postayı nereden keseceksin?",
          metin: "Kulüp kayıt formuna elif@okul.com yazdın. Site kullanıcı adını ve alan adını ayrı göstermek istiyor; ama nereden keseceğini bilmesi için @ işaretinin yerini bulması gerek. Bugün yazının içinde arama yapmayı ve iki yazıyı karşılaştırmayı öğreniyoruz." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔍", terim: "indexOf", tr: "yerini bul", tanim: "Bir yazının içinde başka bir yazıyı arar ve ==ilk== bulduğu yerin *index*'ini döndürür. Bulamazsa ==−1== döndürür. Büyük küçük harfe duyarlıdır.", ornek: "\"banana\".indexOf(\"an\") ⇒ 1; sonraki \"an\" sayılmaz." }
          ] },
        { tip: "kod", baslik: "Üç arama", kod: "String fruit = \"banana\";\nSystem.out.println(fruit.indexOf(\"an\"));\nSystem.out.println(fruit.indexOf(\"x\"));\nSystem.out.println(\"Kitora\".indexOf(\"k\"));", vurgu: [2], cikti: "1\n-1\n-1",
          not: "banana: b0 a1 n2 a3 n4 a5; ilk \"an\" index 1'de başlar. \"x\" yok. Kitora'da büyük K var, küçük k yok." },
        { tip: "tuzak", metin: "Arama büyük küçük harfi ayırır.", yanlis: "\"Kitora\".indexOf(\"k\") büyük K'yi de bulur.", dogru: "K ile k farklı harftir: sonuç −1." }
      ]
    },
    {
      baslik: "*indexOf* ile bul, *substring* ile kes",
      kisa: "Yer bul, sonra kes: FRQ'ların en sevdiği ikili.",
      bloklar: [
        { tip: "kod", baslik: "E-postayı ikiye böl", kod: "String mail = \"elif@okul.com\";\nint at = mail.indexOf(\"@\");\nString user = mail.substring(0, at);\nString domain = mail.substring(at + 1);\nSystem.out.println(at);\nSystem.out.println(user);\nSystem.out.println(domain);", vurgu: [2], cikti: "4\nelif\nokul.com" },
        { tip: "ornek", baslik: "Kullanıcı adı ve alan adı", durum: "mail = \"elif@okul.com\" iken user ve domain nedir?", adimlar: [
            "mail.indexOf(\"@\"): e0 l1 i2 f3 @4 ⇒ at = 4.",
            "Kullanıcı adı sıfırdan @'a kadar, @ hariç: substring(0, at) ⇒ \"elif\".",
            "Alan adı @'ın bir sonrasından sona: substring(at + 1) ⇒ \"okul.com\"."
          ], sonuc: "user = elif, domain = okul.com" },
        { tip: "tablo", baslik: "indexOf ile var/yok kontrolü", head: ["İfade", "Sonuç", "Anlamı"], rows: [
            ["\"bu oyun spam değil\".indexOf(\"spam\")", "8", "−1 değil ⇒ içeride var"],
            ["\"elifokul.com\".indexOf(\"@\")", "−1", "yok: adreste @ işareti bulunmuyor"]
          ], not: "Sonuç −1 değilse aranan yazı içeride vardır." },
        { tip: "tuzak", metin: "indexOf bir *int* döndürür; yanına *String* eklersen artık sayı toplanmaz, yazıya yapışır.", yanlis: "fruit.indexOf(\"an\") + fruit.substring(4) ifadesi 1 ile \"na\"yı toplar.", dogru: "Sonuç \"1na\": 1 + \"na\" yan yana yazılır." }
      ]
    },
    {
      baslik: "*equals*: yazılar aynı mı?",
      kisa: "equals harfleri karşılaştırır ve true ya da false döndürür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "equals", tr: "eşit mi?", tanim: "a.equals(b): harfler birebir aynıysa *true*, değilse *false* döndürür (*boolean*). Büyük küçük harf önemlidir.", ornek: "Şifre kontrolü, cevap kontrolü, kullanıcı adı karşılaştırması." }
          ] },
        { tip: "kod", kod: "String a = \"evet\";\nSystem.out.println(a.equals(\"evet\"));\nSystem.out.println(\"Evet\".equals(\"evet\"));", vurgu: [3], cikti: "true\nfalse",
          not: "İkincisinde E ile e farklı olduğu için sonuç false." }
      ]
    },
    {
      baslik: "İki eşittir mi, *equals* mı?",
      kisa: "İki eşittir okları karşılaştırır; yazıları her zaman equals ile karşılaştır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "➡️", baslik: "İki eşittir işareti", maddeler: ["Okları karşılaştırır", "İki değişken aynı nesneye mi bakıyor?"] },
          sag: { ikon: "🔤", baslik: "*equals*", maddeler: ["Harfleri karşılaştırır", "İçerik aynı mı?"] },
          oyun: [
            { metin: "İki değişken aynı nesneye mi bakıyor?", cevap: "sol", neden: "Nesneye giden okları karşılaştırmak: iki eşittir işareti." },
            { metin: "İki yazının harfleri birebir aynı mı?", cevap: "sag", neden: "İçeriği karşılaştırmak: *equals*." },
            { metin: "Şifre kontrolü", cevap: "sag", neden: "Yazının içeriği önemli: *equals*." },
            { metin: "İki okun aynı karta gidip gitmediği", cevap: "sol", neden: "Referans karşılaştırması: iki eşittir işareti." }
          ] },
        { tip: "kod", baslik: "Harfler aynı, nesneler ayrı", kod: "String a = new String(\"evet\");\nString b = new String(\"evet\");\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));", vurgu: [3, 4], cikti: "false\ntrue" },
        { tip: "tuzak", metin: "new ile iki ayrı nesne üretildi: ikisinde de \"evet\" yazıyor ama oklar ayrı kartlara gidiyor.", yanlis: "İki eşittir ile karşılaştırınca true çıkar, çünkü harfler aynı.", dogru: "İki eşittir false, a.equals(b) true çıkar. ==Yazıları her zaman equals ile karşılaştır.==" }
      ]
    },
    {
      baslik: "*compareTo*: sıralama",
      kisa: "compareTo sözlük sırasına bakar; yalnızca sonucun işareti önemlidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📖", terim: "compareTo", tr: "karşılaştır, sırala", tanim: "Sözlük sırasına bakar ve bir tam sayı döndürür: negatifse a önce gelir, sıfırsa eşittir, pozitifse a sonra gelir. Sınavda yalnızca ==işaret== önemli; değeri hesaplamazsın.", ornek: "Ali, Can'dan önce gelir: negatif." }
          ] },
        { tip: "tablo", head: ["Çağrı", "İşaret", "Anlamı"], rows: [
            ["\"ali\".compareTo(\"can\")", "negatif", "ali önce gelir"],
            ["\"can\".compareTo(\"can\")", "0", "ikisi eşit"],
            ["\"can\".compareTo(\"ali\")", "pozitif", "can sonra gelir"]
          ] },
        { tip: "ornek", baslik: "Kulüp listesini sırala", durum: "first = \"Deniz\", second = \"Burak\". Listede kim önce yazılmalı?", adimlar: [
            "first.compareTo(second): D harfi B'den sonra gelir.",
            "Sonuç pozitif: first, second'dan sonra.",
            "Demek ki listede önce Burak, sonra Deniz yazılır."
          ], sonuc: "1. Burak, 2. Deniz" }
      ]
    },
    {
      baslik: "İnce ayrıntılar: büyük harf, önek, *null*",
      kisa: "Büyük harfler önce gelir; null yazıya metot çağırmak patlar.",
      bloklar: [
        { tip: "tablo", baslik: "*compareTo* ayrıntıları", head: ["Çağrı", "İşaret", "Neden?"], rows: [
            ["\"Zeynep\".compareTo(\"ahmet\")", "negatif", "Bütün büyük harfler küçüklerden önce gelir: Z, a'dan önce"],
            ["\"kitap\".compareTo(\"kitaplik\")", "negatif", "Bir yazı ötekinin başıysa kısa olan önce gelir"]
          ], vurgu: 0 },
        { tip: "kod", baslik: "*null* yazı", kod: "String s = null;\nSystem.out.println(\"abc\".equals(null));\nSystem.out.println(s.length());", vurgu: [3], cikti: "false\nException in thread \"main\" java.lang.NullPointerException",
          not: "Dolu bir yazının equals'ına null vermek yalnız false döndürür. Ama null olan yazı üzerinden metot çağırmak çalışırken patlar." },
        { tip: "tuzak", metin: "Metodu hangi taraftan çağırdığın önemlidir.", yanlis: "Bir yazı null ise s.equals(...) ya da s.length() sadece false ya da 0 verir.", dogru: "*null* bir *String* üzerinden metot çağırmak *NullPointerException* fırlatır; dolu yazının equals(null) çağrısı ise false döner." }
      ]
    },
    {
      baslik: "*AP* örneği: Mavi mi, mavi mi?",
      kisa: "Büyük küçük harf farkı, equals'ın sonucunu değiştirir.",
      bloklar: [
        { tip: "kod", baslik: "Üç şey yazdırılıyor", kod: "String x = \"Mavi\";\nString y = \"mavi\";\nString z = x.substring(1);\nSystem.out.println(x.equals(y) + \" \" + z.equals(y.substring(1)) + \" \" + x.indexOf(\"i\"));", vurgu: [4], cikti: "false true 3" },
        { tip: "ornek", baslik: "Üç parçayı çöz", durum: "x \"Mavi\", y \"mavi\", z = x.substring(1). Konsolda ne görünür?", adimlar: [
            "x.equals(y): M ile m farklı ⇒ false.",
            "z = \"avi\" ve y.substring(1) = \"avi\" ⇒ z.equals(...) true.",
            "x.indexOf(\"i\"): M0 a1 v2 i3 ⇒ 3.",
            "Hepsi aralarda boşlukla birleşir: \"false true 3\"."
          ], sonuc: "false true 3. Çoğu kişi ilkine true der; tuzak harf büyüklüğü." }
      ]
    },
    {
      baslik: "Sınav için bilmen gerekenler",
      kisa: "indexOf + substring, equals ve compareTo'nun işareti yeter.",
      bloklar: [
        { tip: "tablo", head: ["", "Unit 1'de bu konuda"], rows: [
            ["✍️ Yazarsın", "*indexOf* ile yer bulup *substring* ile kesmek; yazıları *equals* ile karşılaştırmak; sıralamada *compareTo*'nun işaretini kullanmak."],
            ["👀 Okursun", "*indexOf*'un −1 döndürdüğü durumları ve iki eşittirin neden yanıldığını."],
            ["🚫 Gerekmez", "*compareTo*'nun tam sayı değeri, karakter kodları tablosu, *toUpperCase* gibi listede olmayan metotlar."]
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*indexOf* ilk eşleşmenin *index*'ini döndürür; bulamazsa −1; büyük küçük harfe duyarlıdır.",
            "*indexOf* ile yer bul, *substring* ile kes.",
            "*equals* harfleri karşılaştırır, iki eşittir işareti okları; yazılarda hep *equals*.",
            "*compareTo*: negatifse önce, sıfırsa eşit, pozitifse sonra. Büyük harfler küçüklerden önce gelir; kısa önek önce gelir.",
            "*indexOf* sonucuna *String* eklersen sayı toplanmaz, yazıya yapışır.",
            "*null* bir yazı üzerinden metot çağırmak *NullPointerException*; dolu yazıda equals(null) false döner."
          ] }
      ]
    }
  ]
};
