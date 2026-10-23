/* Kitora not defteri · cs303 · 3.4 Constructor Yazmak
   Kaynak: AP CSA 2025–26 CED, Unit 3 (Class Creation) öğrenme hedefleri; sınav biçimi FRQ 2 (Class Design). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs303",
  amac: "Bu konu *constructor*'ın nesneyi nasıl kurduğunu anlatıyor: yazım kuralları, parametreler, birden fazla *constructor* (*overloading*) ve değer verilmeyen alanların varsayılan değerleri. FRQ 2'de sınıfın ilk satırlarını doğru yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "*Constructor* nesneyi kurar",
      kisa: "Constructor, new ile çağrılır ve alanlara ilk değerlerini verir.",
      bloklar: [
        {"tip":"hikaye","ikon":"💳","baslik":"Kart açılırken","metin":"Kantin kartı açtırırken önce adın yazılır, sonra ilk bakiye yüklenir; kimse sana tutarsız, yarım bir kart vermez. Nesne de doğar doğmaz tutarlı olmalı. Bu işi constructor yapar."},
        {"tip":"kavramlar","kartlar":[{"ikon":"🏗️","terim":"Constructor","tr":"kurucu","tanim":"Sınıfla aynı adı taşıyan ve *new* ile çağrılan özel blok. Nesnenin alanlarına ilk değerlerini verir.","ornek":"*new BankAccount(\"Ada\", 100)* çağrısı constructor'ı çalıştırır."}]},
        {"tip":"kod","baslik":"İlk constructor","kod":"public BankAccount(String name, double start) {\n    owner = name;\n    balance = start;\n}","vurgu":[1],"not":"Parametreler (name, start) yalnızca constructor çalışırken vardır. Değerleri alanlara kopyalamak constructor'ın görevidir."}
      ]
    },
    {
      baslik: "Constructor mu, metot mu?",
      kisa: "Constructor sınıfla aynı adı taşır ve dönüş tipi yazılmaz.",
      bloklar: [
        {"tip":"tablo","head":["","Constructor","Metot"],"rows":[["Adı","Sınıfın adıyla aynı","İstediğin ad (çoğu zaman fiil)"],["Dönüş tipi","Yok (void bile yazılmaz)","Zorunlu: bir tip ya da void"],["Nasıl çağrılır","new ile","nesne.metot()"],["Ne için","Alanlara ilk değer verir","Davranış"]]},
        {"tip":"ikili","sol":{"ikon":"🏗️","baslik":"*Constructor*","maddeler":["Sınıfla aynı ad","Dönüş tipi yok"]},"sag":{"ikon":"⚙️","baslik":"Metot","maddeler":["Dönüş tipi var","nesne.metot() ile çağrılır"]},"oyun":[{"metin":"public BankAccount(String name)","cevap":"sol","neden":"Sınıf adı, dönüş tipi yok: constructor."},{"metin":"public void BankAccount(String name)","cevap":"sag","neden":"void yazıldı: sınıf adını taşısa da sıradan bir metottur."},{"metin":"public double getBalance()","cevap":"sag","neden":"Dönüş tipi var: metot."},{"metin":"public BankAccount()","cevap":"sol","neden":"Parametresiz de olsa constructor."},{"metin":"public void deposit(double amount)","cevap":"sag","neden":"Adı sınıf adından farklı, void: metot."}]},
        {"tip":"tuzak","metin":"Constructor başlığına void yazarsan constructor olmaz.","yanlis":"public void BankAccount(String n) bir constructor'dır.","dogru":"Sıradan bir metottur. Sınıfta başka constructor yoksa new BankAccount(\"Ada\") derlenmez."}
      ]
    },
    {
      baslik: "Birden fazla constructor (*overloading*)",
      kisa: "Parametre listesi farklı olan birden çok constructor yazılabilir.",
      bloklar: [
        {"tip":"kod","baslik":"İki constructor","kod":"public BankAccount(String name, double start) {\n    owner = name;\n    balance = start;\n}\npublic BankAccount(String name) {\n    owner = name;\n    balance = 0.0;\n}","not":"Java hangisini çalıştıracağını argümanların sayısına, tipine ve sırasına bakarak seçer."},
        {"tip":"tablo","baslik":"Çağrıdan constructor'a","head":["Çağrı","Seçilen","Sonuç"],"rows":[["new BankAccount(\"Ada\", 100)","(String, double); 100 int'ten double'a genişler","owner Ada, balance 100.0"],["new BankAccount(\"Can\")","(String)","owner Can, balance 0.0"],["new BankAccount(100, \"Ada\")","Eşleşen yok: sıra ters","Derlenmez"],["new BankAccount()","Eşleşen yok: parametresiz yazılmadı","Derlenmez"]],"vurgu":2}
      ]
    },
    {
      baslik: "Değer verilmeyen alanlar ve varsayılan constructor",
      kisa: "Atanmayan alan varsayılan değer alır; constructor yazmazsan Java parametresiz birini verir.",
      bloklar: [
        {"tip":"tablo","baslik":"Varsayılan değerler","head":["Alanın tipi","Atanmazsa değeri"],"rows":[["int","0"],["double","0.0"],["boolean","false"],["String ve her nesne tipi","null"]],"not":"Hiç constructor yazmazsan Java parametresiz (varsayılan) bir constructor ekler; alanlar bu değerlerle başlar."},
        {"tip":"kod","baslik":"Constructor yalnızca balance'ı atıyor","kod":"// public BankAccount(double start) { balance = start; }\nBankAccount a = new BankAccount(40);\nSystem.out.println(a.getOwner());\nSystem.out.println(a.getBalance());","cikti":"null\n40.0","not":"owner'a atama yapılmadığı için null kaldı. a.getOwner().length() yazsaydın NullPointerException alırdın."},
        {"tip":"tuzak","metin":"Kendi constructor'ını yazdığın anda Java parametresiz olanı vermez.","yanlis":"Bir constructor ekledim, new BankAccount() hâlâ çalışır.","dogru":"Herhangi bir constructor yazdıysan parametresiz olan otomatik gelmez; gerekiyorsa kendin yazarsın."}
      ]
    },
    {
      baslik: "new çağrısında neler olur?",
      kisa: "Önce alanlar varsayılan değer alır, sonra constructor gövdesi çalışır.",
      bloklar: [
        {"tip":"adimlar","baslik":"new BankAccount(\"Ada\", 100) çağrısı","adimlar":[{"baslik":"Bellekte yer ayrılır","metin":"Alanlar varsayılan değerle başlar: owner null, balance 0.0."},{"baslik":"Constructor seçilir","metin":"Argümanların sayısı, tipi ve sırası uyan başlık bulunur."},{"baslik":"Parametreler doldurulur","metin":"name \"Ada\" olur, start 100.0 olur (int, double'a genişler)."},{"baslik":"Gövde çalışır","metin":"owner = name; ve balance = start; alanları doldurur."},{"baslik":"Referans döner","metin":"new ifadesi nesneye giden referansı verir; değişkende saklanır."}]},
        {"tip":"tablo","baslik":"İzleme tablosu","head":["Aşama","owner","balance"],"rows":[["new sonrası, gövdeden önce","null","0.0"],["owner = name;","\"Ada\"","0.0"],["balance = start;","\"Ada\"","100.0"]],"vurgu":2}
      ]
    },
    {
      baslik: "FRQ'da constructor yazmak",
      kisa: "Soruda verilen parametre sırasıyla her alana değer ata.",
      bloklar: [
        {"tip":"ornek","baslik":"Book constructor'ı","durum":"Soru: \"Book sınıfı kitabın adını (String) ve sayfa sayısını (int) saklar. Constructor ad ve sayfa sayısını bu sırayla alır.\" Constructor'ı yaz.","adimlar":["Alanlar: private String title; private int pages;","Başlık: sınıfla aynı ad, dönüş tipi yok, parametreler soruda verilen sırayla: public Book(String t, int p)","Her parametreyi karşılık gelen alana ata: title = t; pages = p;"],"sonuc":"public Book(String t, int p) { title = t; pages = p; }"},
        {"tip":"tablo","baslik":"Puan kırıcı hatalar","head":["Hata","Düzeltme"],"rows":[["Başlığa void yazmak","Constructor'da dönüş tipi olmaz"],["Parametre sırasını değiştirmek","Soruda verilen sırayı koru"],["Bir alana atamayı unutmak","Her alanı tek tek kontrol et"],["String owner = name; yazmak (tip yazarak)","Yeni yerel değişken doğar, alan değişmez; yalnızca owner = name;"]]}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["*Constructor* *new* ile çağrılır ve alanlara ilk değerlerini verir.","Adı sınıfla aynıdır ve dönüş tipi yoktur; *void* yazarsan sıradan bir metot olur.","Aynı sınıfta parametre listesi farklı birden çok *constructor* olabilir (*overloading*).","Java, argümanın sayısına, tipine ve sırasına bakarak *constructor* seçer; eşleşme yoksa derlenmez.","Atanmayan alan varsayılan değer alır: 0, 0.0, false ya da null.","Hiç *constructor* yazmazsan Java parametresiz birini verir; birini yazınca o gelmez.","Constructor parametreleri yerel değişkendir; alanlara atamayı unutma."]}
      ]
    }
  ],
  sorular: [
    {"q":"Aşağıdaki sınıf için hangi ifade derlenir?","fig":{"type":"code","code":"public class Ticket {\n    private String band;\n    private int seat;\n    public Ticket(String b, int s) {\n        band = b;\n        seat = s;\n    }\n}"},"opts":["new Ticket()","new Ticket(\"Duman\", 12)","new Ticket(12, \"Duman\")","new Ticket(\"Duman\")"],"a":1,"why":"Tek constructor (String, int) sırasıyla bekliyor. A parametresiz constructor olmadığı için, C sıra ters olduğu için, D ise tek argüman verdiği için derlenmez."},
    {"q":"Aşağıdaki kod çalışınca ne yazdırır?","fig":{"type":"code","code":"public class Ticket {\n    private String band;\n    private int seat;\n    public Ticket(int s) {\n        seat = s;\n    }\n    public String getBand() { return band; }\n    public int getSeat() { return seat; }\n}\n// istemci\nTicket t = new Ticket(12);\nSystem.out.println(t.getBand() + \" \" + t.getSeat());"},"opts":["Derleme hatası","(boş yazı) 12","0 12","null 12"],"a":3,"why":"band'a atama yapılmadı; String alanın varsayılan değeri null'dır. Birleştirmede null \"null\" yazısı olarak görünür. Çalışma anı hatası ya da derleme hatası yoktur."},
    {"q":"Card sınıfının constructor'ı için geçerli başlık hangisidir?","opts":["public Card(int rank)","public void Card(int rank)","public int Card(int rank)","public card(int rank)"],"a":0,"why":"Constructor, sınıfla aynı adı (büyük küçük harf dahil) taşır ve dönüş tipi yoktur. B ve C'de dönüş tipi var (metot olurlar), D'de ad farklı ve dönüş tipi eksik."},
    {"q":"Aşağıdaki kod çalışınca ne yazdırır?","fig":{"type":"code","code":"public class BankAccount {\n    private String owner;\n    private double balance;\n    public BankAccount(String name, double start) {\n        owner = name;\n        balance = start;\n    }\n    public BankAccount(String name) {\n        owner = name;\n        balance = 0.0;\n    }\n    public double getBalance() { return balance; }\n}\n// istemci\nBankAccount a = new BankAccount(\"Can\");\nBankAccount b = new BankAccount(\"Deniz\", 40);\nSystem.out.println(a.getBalance() + b.getBalance());"},"opts":["0.040.0","0.0","40.0","Derleme hatası"],"a":2,"why":"Tek argüman tek parametreli constructor'ı çalıştırır: a'nın bakiyesi 0.0. İkinci çağrı bakiyeyi 40.0 yapar. İki double toplanır: 40.0. A yanlış: getBalance double döndürür, yazı birleştirmesi yapılmaz."},
    {"q":"Gift sınıfında yalnızca aşağıdaki metot yazılmıştır ve başka constructor yoktur. İstemcideki new Gift(\"Elif\") ifadesine ne olur?","fig":{"type":"code","code":"public class Gift {\n    private String to;\n    public void Gift(String t) {\n        to = t;\n    }\n}"},"opts":["to alanı Elif olur","Derleme hatası olur","Çalışma anında NullPointerException fırlatılır","to alanı null kalır ve program çalışır"],"a":1,"why":"void yazıldığı için Gift(String) bir constructor değil, sıradan bir metottur. Sınıfta constructor yoksa yalnızca parametresiz olan vardır; tek argümanlı çağrı onunla eşleşmez, program derlenmez."}
  ]
};
