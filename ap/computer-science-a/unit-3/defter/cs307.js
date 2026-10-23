/* Kitpath not defteri · cs307 · 3.9 this Anahtar Sözcüğü
   Kaynak: AP CSA 2025–26 CED, Unit 3 (Class Creation) öğrenme hedefleri; sınav biçimi FRQ 2 (Class Design). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs307",
  amac: "Bu konu *this* anahtar sözcüğünü anlatıyor: metodu şu an çalıştıran nesnenin kendisi. Alan ile parametre adı çakışmasını çözmeyi, nesneyi argüman olarak geçirmeyi ve *BankAccount* sınıfını baştan sona yazmayı, ardından kendi başına bir sınıf yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "*this* nedir?",
      kisa: "this, metodu şu an çalıştıran nesnenin kendisine giden referanstır.",
      bloklar: [
        {"tip":"hikaye","ikon":"🪪","baslik":"Aynı kod, farklı hesap","metin":"İki hesabın bakiyesini okuyan kod tektir. a.getBalance() dediğinde kod a'nın bakiyesini, b.getBalance() dediğinde b'ninkini okur. Kodun, \"şu an kim beni çağırdı\" sorusunu cevaplayan bir adı olmalı. O ad this."},
        {"tip":"kavramlar","kartlar":[{"ikon":"👈","terim":"this","tr":"bu nesne","tanim":"Bir nesne metodu ya da constructor çalışırken, çalışmakta olan nesnenin kendisine giden referans.","ornek":"*a.deposit(5)* çalışırken this, a'dır."}]},
        {"tip":"tablo","head":["Çağrı","this kim?","balance kimin?"],"rows":[["a.deposit(5)","a nesnesi","a'nın balance'ı"],["b.deposit(5)","b nesnesi","b'nin balance'ı"]],"not":"Metodun içinde yazdığın balance, yazılmamış bir this.balance demektir."}
      ]
    },
    {
      baslik: "Alan ve parametre çakışması: this.alan",
      kisa: "this.balance alanı, yalnız balance ise aynı adlı parametreyi gösterir.",
      bloklar: [
        {"tip":"kod","baslik":"Düzeltilmiş constructor","kod":"public BankAccount(String owner, double balance) {\n    this.owner = owner;\n    this.balance = balance;\n}","vurgu":[2,3],"not":"Soldaki this.balance nesnenin alanı, sağdaki balance parametredir. Parametre adlarını alanlarla aynı yazmak AP'de yaygın bir kalıp."},
        {"tip":"tablo","head":["Yazım","Neyi gösterir"],"rows":[["this.balance","Alanı (nesnenin içindeki değer)"],["balance (aynı adlı parametre varken)","Parametreyi"],["balance (aynı adlı parametre yokken)","Alanı; başına this. yazmasan da olur"]]},
        {"tip":"tuzak","metin":"Atama her zaman alan = parametre yönündedir.","yanlis":"owner = this.owner; da aynı işi görür.","dogru":"Bu, parametreyi alanın değerine eşitler (alan hâlâ null). Doğrusu this.owner = owner;"}
      ]
    },
    {
      baslik: "this'i argüman olarak geçirmek",
      kisa: "Başka bir nesnenin metoduna this vererek nesnenin kendini tanıtmasını sağlarsın.",
      bloklar: [
        {"tip":"kod","baslik":"İki hesabı birbirine bağla","kod":"public void linkWith(BankAccount other) {\n    linked = other;\n    other.setLinked(this);\n}","vurgu":[3],"not":"setLinked ve getLinked bir önceki defterde (referanslar) yazılmıştı."},
        {"tip":"adimlar","baslik":"a.linkWith(b) çağrılınca","adimlar":[{"baslik":"Roller","metin":"this = a, other = b."},{"baslik":"linked = other;","metin":"a'nın linked alanı b'yi gösterir."},{"baslik":"other.setLinked(this);","metin":"b'nin setLinked metodu çalışır; orada this = b, parametre ise a'dır (a, argüman olarak this ile geldi)."},{"baslik":"Sonuç","metin":"b'nin linked alanı a'yı gösterir. İki hesap birbirini tanır."}]},
        {"tip":"kod","baslik":"İstemci","kod":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);\na.linkWith(b);\nSystem.out.println(a.getLinked() == b);\nSystem.out.println(b.getLinked() == a);","cikti":"true\ntrue"}
      ]
    },
    {
      baslik: "this'i döndürmek ve nesneleri karşılaştırmak",
      kisa: "Bir metot, çağıran nesnenin kendisini this ile döndürebilir.",
      bloklar: [
        {"tip":"kod","baslik":"Zengin olan hesap","kod":"public BankAccount richerOf(BankAccount other) {\n    if (other.balance > balance) {\n        return other;\n    }\n    return this;\n}","vurgu":[5]},
        {"tip":"kod","baslik":"İstemci","kod":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 250);\nBankAccount r = a.richerOf(b);\nSystem.out.println(r.getOwner());\nSystem.out.println(r == b);","cikti":"Can\ntrue","not":"Eşitlikte other.balance büyük olmadığı için this döner. r, b ile aynı nesneyi gösterir."},
        {"tip":"ikili","sol":{"ikon":"👈","baslik":"*this* (çağıran, a)","maddeler":["a.richerOf(b) yazan nesne","Alanlar başında nesne olmadan okunur"]},"sag":{"ikon":"🎫","baslik":"*other* (parametre, b)","maddeler":["Metoda argüman olarak verilen nesne","Alanlar other. ile okunur"]},"oyun":[{"metin":"balance","cevap":"sol","neden":"Başında nesne yok: this'in (a'nın) bakiyesi."},{"metin":"other.balance","cevap":"sag","neden":"Parametre olarak gelen b'nin bakiyesi."},{"metin":"return this;","cevap":"sol","neden":"Çağıran nesneyi, yani a'yı döndürür."},{"metin":"return other;","cevap":"sag","neden":"Parametre olarak gelen b'yi döndürür."}]}
      ]
    },
    {
      baslik: "static metotta this yoktur",
      kisa: "static metot bir nesne adına çalışmaz; bu yüzden this kullanamaz.",
      bloklar: [
        {"tip":"kod","baslik":"Derlenmeyen satır","kod":"public static int getCount() {\n    return this.count;   // derlenmez\n}","vurgu":[2],"not":"Hata: non-static variable this cannot be referenced from a static context. Metot BankAccount.getCount() diye nesnesiz çağrılabilir; kimin this'i olacak?"},
        {"tip":"tuzak","metin":"static metot için this yazmak \"daha açık\" olmaz, kod derlenmez.","yanlis":"this.count yazarsam static değişkene de erişirim.","dogru":"static üyeye doğrudan adıyla (count) ya da sınıf adıyla (BankAccount.count) eriş."}
      ]
    },
    {
      baslik: "Bütün sınıf: BankAccount",
      kisa: "Alanlar, constructor, erişimciler ve mutator'lar tek sınıfta birleşir.",
      bloklar: [
        {"tip":"kod","baslik":"İlk yarı: alanlar, constructor, erişimciler","kod":"public class BankAccount {\n    private static int count = 0;\n    private int id;\n    private String owner;\n    private double balance;\n    private BankAccount linked;\n\n    public BankAccount(String owner, double balance) {\n        this.owner = owner;\n        this.balance = balance;\n        count++;\n        id = count;\n    }\n    public static int getCount() { return count; }\n    public String getOwner() { return owner; }\n    public double getBalance() { return balance; }\n    public BankAccount getLinked() { return linked; }\n    public void setLinked(BankAccount other) { linked = other; }","not":"Tek satırlık metotlar yer kazanmak için sıkıştırıldı; sınavda ister böyle ister alt alta yaz."},
        {"tip":"kod","baslik":"İkinci yarı: davranışlar (sınıfın devamı)","kod":"    public void deposit(double amount) { balance += amount; }\n    public boolean withdraw(double amount) {\n        if (amount > balance) { return false; }\n        balance -= amount;\n        return true;\n    }\n    public void linkWith(BankAccount other) {\n        linked = other;\n        other.setLinked(this);\n    }\n    public BankAccount richerOf(BankAccount other) {\n        if (other.balance > balance) { return other; }\n        return this;\n    }\n    public String toString() {\n        return id + \" \" + owner + \": \" + balance + \" TL\";\n    }\n}"},
        {"tip":"kod","baslik":"Hepsini kullanalım","kod":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);\na.deposit(50);\nb.withdraw(30);\na.linkWith(b);\nSystem.out.println(a);\nSystem.out.println(b);\nSystem.out.println(BankAccount.getCount());","cikti":"1 Ada: 150.0 TL\n2 Can: 20.0 TL\n2","not":"b.withdraw(30) çalışmadı: 30 > 20.0 olduğu için false döndü, bakiye 20.0 kaldı."}
      ]
    },
    {
      baslik: "Kendi başına: Song sınıfı",
      kisa: "Aynı kalıbı yeni bir belirtime uygula.",
      bloklar: [
        {"tip":"ornek","baslik":"FRQ 2 tarzı mini soru","durum":"Soru: \"Song sınıfı bir şarkının adını (String) ve süresini (saniye, int) tutar. Oluşturulan şarkı sayısı sınıf adıyla öğrenilebilir. Süre artırılabilir, iki şarkıdan hangisinin daha uzun olduğu sorulabilir ve yazıya çevrilince Ad (120 sn) biçiminde görünür.\" Sınıfı yaz.","adimlar":["Veri: private String title; private int seconds; sayaç için private static int count = 0;","Constructor (title, seconds): parametre adları alanlarla çakıştığı için this.title = title; this.seconds = seconds; ve count++;","Erişimciler: getTitle, getSeconds. Sayaç için static getCount (içinde this yok).","Mutator: addSeconds(int extra), seconds += extra.","isLongerThan(Song other): seconds > other.seconds. private alan aynı sınıfta other için de okunur.","toString: title + \" (\" + seconds + \" sn)\""],"sonuc":"Çözüm aşağıdaki kod bloğunda."},
        {"tip":"kod","baslik":"Çözüm","kod":"public class Song {\n    private static int count = 0;\n    private String title;\n    private int seconds;\n\n    public Song(String title, int seconds) {\n        this.title = title;\n        this.seconds = seconds;\n        count++;\n    }\n    public static int getCount() { return count; }\n    public String getTitle() { return title; }\n    public int getSeconds() { return seconds; }\n    public void addSeconds(int extra) { seconds += extra; }\n    public boolean isLongerThan(Song other) {\n        return seconds > other.seconds;\n    }\n    public String toString() {\n        return title + \" (\" + seconds + \" sn)\";\n    }\n}"}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["*this*, nesne metodunu ya da *constructor*'ı çalıştıran nesnenin kendisine giden referanstır.","Parametre alanla aynı adı taşırsa alan *this.alan*, parametre yalnızca adıyla yazılır: *this.balance = balance*.","Atama yönü hep alan = parametre: *owner = this.owner* alanı doldurmaz.","*this* argüman olarak geçirilebilir (*other.setLinked(this)*) ve döndürülebilir (*return this*).","*static* metotta *this* yoktur; nesnesiz çağrıldığı için derlenmez.","FRQ 2 sırası: *private* alanlar (gerekirse *static* sayaç), *constructor*, erişimciler, mutator'lar, istenen metotlar, *toString*.","Soruda verilen adları ve parametre sırasını aynen kullan; bütün sınıfı yazmak için bu ünitedeki kalıplar yeter."]}
      ]
    }
  ],
  sorular: [
    {"q":"Aşağıdaki constructor'da boşluğa hangisi yazılırsa balance alanı doğru atanır?","fig":{"type":"code","code":"private double balance;\npublic BankAccount(String owner, double balance) {\n    this.owner = owner;\n    ________\n}"},"opts":["balance = this.balance;","this.balance = balance;","balance = balance;","this = balance;"],"a":1,"why":"Sol taraf alan (this.balance), sağ taraf parametre (balance) olmalı. A yönü ters çevirir: parametreye alanın değerini atar, alan 0.0 kalır. C parametreyi kendine atar. D geçerli bir ifade değildir."},
    {"q":"linkWith bu defterdeki gibi yazılmıştır. Kod çalışınca ne yazdırır?","fig":{"type":"code","code":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);\na.linkWith(b);\nSystem.out.println(b.getLinked() == a);"},"opts":["false","null","Derleme hatası","true"],"a":3,"why":"linkWith içinde other.setLinked(this) çağrısı b'nin linked alanını a yapar (this, çağıran a'dır). Böylece b.getLinked() a'ya giden referansı verir ve karşılaştırma true çıkar."},
    {"q":"richerOf bu defterdeki gibi yazılmıştır. Kod çalışınca ne yazdırır?","fig":{"type":"code","code":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 100);\nBankAccount r = a.richerOf(b);\nSystem.out.println(r.getOwner());"},"opts":["Ada","Can","null","Derleme hatası"],"a":0,"why":"Bakiyeler eşit olduğu için other.balance > balance yanlış çıkar; metot return this ile çağıran nesneyi, yani a'yı döndürür. Sahibi Ada'dır."},
    {"q":"Aşağıdaki sınıfta hangi satır(lar) derleme hatasına yol açar?","fig":{"type":"code","code":"public class Item {\n    private static int made = 0;\n    private int serial;\n    public Item() {\n        made++;\n        this.serial = made;          // I\n    }\n    public static int getMade() {\n        return this.made;            // II\n    }\n    public int getSerial() {\n        return this.serial;          // III\n    }\n}"},"opts":["Yalnız I","I ve II","Yalnız II","II ve III"],"a":2,"why":"II static bir metotta this kullanıyor; static metodun this'i yoktur. I constructor'da (nesne bağlamı var) ve III nesne metodunda; ikisinde de this geçerlidir."},
    {"q":"Aşağıdaki kod çalışınca ne yazdırır?","fig":{"type":"code","code":"public class Person {\n    private String name;\n    public Person(String name) {\n        name = this.name;\n    }\n    public String getName() { return name; }\n}\n// istemci\nPerson p = new Person(\"Elif\");\nSystem.out.println(p.getName());"},"opts":["Elif","null","Derleme hatası","name"],"a":1,"why":"name = this.name; parametreyi alanın değerine (null) eşitler; alan hiç atanmaz. getName alanı döndürür, o da null'dır; println null yazdırır. Kod derlenir, hata vermez."}
  ]
};
