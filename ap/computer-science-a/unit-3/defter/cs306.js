/* Kitora not defteri · cs306 · 3.7–3.8 static Üyeler, Kapsam ve Erişim
   Kaynak: AP CSA 2025–26 CED, Unit 3 (Class Creation) öğrenme hedefleri; sınav biçimi FRQ 2 (Class Design). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs306",
  amac: "Bu konu sınıfa ait *static* değişken ve metotları, değişkenlerin kapsamını (*scope*) ve erişim kurallarını anlatıyor. Nesne sayacı yazmayı, alanı gölgeleme (*shadowing*) hatasını ve *private*'ın nerede geçerli olduğunu öğreneceksin.",
  bolumler: [
    {
      baslik: "*static* değişken: tüm nesnelerin ortak kutusu",
      kisa: "static değişkenin tek kopyası vardır; bütün nesneler onu paylaşır.",
      bloklar: [
        {"tip":"kavramlar","kartlar":[{"ikon":"🎫","terim":"Instance variable","tr":"nesne değişkeni","tanim":"Her nesnede ayrı bir kopyası olan alan.","ornek":"Her hesabın kendi *balance*'ı vardır."},{"ikon":"🏛️","terim":"Class variable (static)","tr":"sınıf değişkeni","tanim":"Sınıfa ait tek kopya; nesne olmasa da vardır ve bütün nesneler paylaşır.","ornek":"Açılan hesap sayısını tutan *count*."},{"ikon":"📌","terim":"static final","tr":"sabit","tanim":"Değeri hiç değişmeyen, paylaşılan sabit. Adı genelde BÜYÜK_HARFLE yazılır.","ornek":"*private static final double FEE = 2.5;*"}]},
        {"tip":"kod","baslik":"Sayaç ve numara","kod":"public class BankAccount {\n    private static int count = 0;\n    private int id;\n    private String owner;\n    private double balance;\n\n    public BankAccount(String name, double start) {\n        owner = name;\n        balance = start;\n        count++;\n        id = count;\n    }\n    public int getId() {\n        return id;\n    }\n}","vurgu":[2,10,11],"not":"count++ sınıfın tek sayacını artırır; id = count o anki değeri nesnenin kendi numarası yapar."},
        {"tip":"kod","baslik":"Üç hesap açalım","kod":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);\nBankAccount c = new BankAccount(\"Deniz\", 0);\nSystem.out.println(a.getId() + \" \" + b.getId() + \" \" + c.getId());","cikti":"1 2 3"},
        {"tip":"tablo","baslik":"Bellekte kim nerede?","head":["Nerede","Değişken","Değer"],"rows":[["Sınıfta (tek kopya)","count","3"],["a nesnesinde","id","1"],["b nesnesinde","id","2"],["c nesnesinde","id","3"]],"vurgu":0}
      ]
    },
    {
      baslik: "*static* metot: nesnesiz çağrılır",
      kisa: "static metot SınıfAdı.metot() diye çağrılır; nesnenin alanlarına dokunamaz.",
      bloklar: [
        {"tip":"kod","baslik":"Sayaç erişimcisi","kod":"public static int getCount() {\n    return count;\n}","not":"Çağrı: BankAccount.getCount(). Önce nesne gerekmez; metot hiçbir nesnenin adına çalışmaz."},
        {"tip":"ikili","sol":{"ikon":"🏛️","baslik":"Sınıfa ait (*static*)","maddeler":["Tek kopya","SınıfAdı.üye ile erişilir"]},"sag":{"ikon":"🎫","baslik":"Nesneye ait (*instance*)","maddeler":["Her nesnede ayrı","nesne.üye ile erişilir"]},"oyun":[{"metin":"count (açılan hesap sayısı)","cevap":"sol","neden":"Bütün hesapların ortak sayacı: static."},{"metin":"balance","cevap":"sag","neden":"Her hesabın kendi bakiyesi: instance."},{"metin":"getCount()","cevap":"sol","neden":"Nesne gerektirmeyen metot: static."},{"metin":"getBalance()","cevap":"sag","neden":"Bir hesabın bakiyesini okur: instance."},{"metin":"id","cevap":"sag","neden":"Her nesnenin ayrı numarası: instance."}]},
        {"tip":"tuzak","metin":"static metot, nesnenin alanlarını ya da nesne metotlarını doğrudan kullanamaz.","yanlis":"public static double peek() { return balance; } yazabilirim.","dogru":"Derlenmez (non-static variable balance cannot be referenced from a static context). Hangi nesnenin balance'ı?"}
      ]
    },
    {
      baslik: "Sayaç yazma tarifi",
      kisa: "Ortak sayaç static, her nesnenin numarası instance olur.",
      bloklar: [
        {"tip":"ornek","baslik":"Ticket numaraları","durum":"Soru: \"Her yeni Ticket nesnesi 1'den başlayarak sıra numarası almalı.\" Hangi alanlar ve constructor satırları gerekir?","adimlar":["Sınıf başına tek bir sayaç gerekir: private static int count = 0;","Her nesnenin kendi numarası gerekir: private int number;","Constructor'da önce sayacı artır: count++;","Sonra numarayı sayaçtan al: number = count;"],"sonuc":"İlk nesne 1, ikincisi 2, üçüncüsü 3 numarasını alır; numara bir kez atanır ve sonra değişmez."},
        {"tip":"liste","maddeler":[{"ikon":"🏛️","baslik":"Ortak bilgi","metin":"Bütün nesnelerin paylaştığı değer: static değişken."},{"ikon":"🧮","baslik":"Nesnesiz işlem","metin":"Hiçbir nesnenin verisini kullanmayan metot: static metot."},{"ikon":"🎫","baslik":"Nesneye özgü","metin":"Her nesnenin kendisine ait değer: instance variable."}]}
      ]
    },
    {
      baslik: "Kapsam (*scope*): değişken nerede yaşar?",
      kisa: "Değişken, tanımlandığı süslü parantez bloğunun dışında görünmez.",
      bloklar: [
        {"tip":"tablo","head":["Tür","Nerede tanımlı","Nerede görünür"],"rows":[["Instance variable","Sınıf gövdesi, metotların dışı","Sınıfın bütün nesne metotları ve constructor'ları"],["Class variable (static)","Aynısı, static ile","Sınıfın her yeri, static metotlar dahil"],["Parametre","Metot başlığı","Yalnız o metot"],["Yerel değişken","Metot ya da blok içi","Tanımlandığı satırdan bloğun sonuna kadar"]]},
        {"tip":"kod","baslik":"Yerel değişken metotla birlikte biter","kod":"public void addBonus(double rate) {\n    double bonus = balance * rate;\n    balance = balance + bonus;\n}\n// metot bitti: bonus ve rate artık yok","vurgu":[2],"not":"bonus ve rate yalnızca addBonus içinde görünür; balance ise sınıfın alanıdır ve metottan sonra da yaşar."},
        {"tip":"kod","baslik":"Döngü değişkeni döngüye aittir","kod":"for (int i = 0; i < 3; i++) {\n    deposit(10);\n}\nSystem.out.println(i);   // derlenmez: cannot find symbol","vurgu":[4]}
      ]
    },
    {
      baslik: "Gölgeleme (*shadowing*)",
      kisa: "Aynı adlı parametre ya da yerel değişken, instance variable'ı gölgeler.",
      bloklar: [
        {"tip":"kod","baslik":"Sessiz hata","kod":"public BankAccount(String name, double balance) {\n    owner = name;\n    balance = balance;\n}","vurgu":[3],"not":"Parametrenin adı alanla aynı. İçeride balance dendiğinde parametre kazanır; her iki balance da parametredir."},
        {"tip":"ornek","baslik":"Çıktı ne olur?","durum":"new BankAccount(\"Ada\", 100) ile hesap açılıyor ve println(a.getBalance()) çalışıyor.","adimlar":["Constructor çalışır: name \"Ada\", balance parametresi 100.0.","owner = name; alanı doğru doldurur.","balance = balance; parametreyi kendi kendine atar; hiçbir şey değişmez.","Alan balance hiç atanmadı: varsayılan 0.0 kaldı."],"sonuc":"0.0 yazdırılır (100.0 değil!)"},
        {"tip":"tuzak","metin":"Alan adıyla parametre adı aynıysa this kullanmak ya da adları değiştirmek gerekir.","yanlis":"Derleyici böyle bir hatayı yakalar.","dogru":"Kod derlenir ve çalışır, ama sessizce yanlış sonuç verir. Çözüm: farklı ad ya da this.balance = balance (sıradaki defter)."}
      ]
    },
    {
      baslik: "Erişim: private, sınıf düzeyinde geçerlidir",
      kisa: "Private üyeye aynı sınıfın bütün kodu erişir; başka sınıf erişemez.",
      bloklar: [
        {"tip":"kod","baslik":"Başka bir nesnenin private alanı","kod":"public boolean isRicherThan(BankAccount other) {\n    return balance > other.balance;\n}","vurgu":[2],"not":"other.balance burada geçerli: kod BankAccount sınıfının içinde. Başka bir sınıftan b.balance yazarsan derlenmez."},
        {"tip":"tablo","head":["Erişen kod","private üye","public üye"],"rows":[["Aynı sınıfın içi (hangi nesne olursa olsun)","Erişir","Erişir"],["Başka bir sınıf","Erişemez (derleme hatası)","Erişir"]]}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["*static* değişkenin sınıfta tek kopyası vardır; *instance variable* her nesnede ayrıdır.","*static* metot SınıfAdı.metot() ile çağrılır; nesnenin alanlarına ve *this*'e erişemez.","Nesne sayacı tarifi: *private static int count*, constructor'da *count++*, sonra numara = count.","Yerel değişken ve parametre, tanımlandıkları blokta yaşar; döngü değişkeni döngüye aittir.","Aynı adlı parametre ya da yerel değişken alanı gölgeler: *balance = balance* alanı doldurmaz.","*private* üyeye aynı sınıfın tüm kodu erişir (başka nesnenin alanı dahil); başka sınıf erişemez.","*static final* değişken, değişmeyen paylaşılan bir sabittir."]}
      ]
    }
  ],
  sorular: [
    {"q":"Aşağıdaki kod çalışınca ne yazdırır?","fig":{"type":"code","code":"public class Counter {\n    private static int total = 0;\n    private int mine = 0;\n    public Counter() {\n        total++;\n        mine++;\n    }\n    public int getTotal() { return total; }\n    public int getMine() { return mine; }\n}\n// istemci\nCounter x = new Counter();\nCounter y = new Counter();\nCounter z = new Counter();\nSystem.out.println(x.getTotal() + \" \" + x.getMine());"},"opts":["1 1","3 1","3 3","1 3"],"a":1,"why":"total static: bütün nesneler paylaşır, üç constructor çağrısı sonunda 3 olur. mine instance: x'in kendi kopyası yalnızca x'in constructor'ında bir kez artar, 1 kalır."},
    {"q":"Aşağıdaki sınıfta hangi metot derleme hatasına neden olur?","fig":{"type":"code","code":"public class Clinic {\n    private int patients;\n    private static int clinics = 1;\n    public static int getPatients() {   // I\n        return patients;\n    }\n    public static int getClinics() {    // II\n        return clinics;\n    }\n}"},"opts":["Yalnız II","Hem I hem II","Yalnız I","Hiçbiri"],"a":2,"why":"I static bir metot içinde instance variable'a (patients) erişiyor; hangi nesnenin hastası olduğu belli değil, derlenmez. II static değişkene erişiyor, geçerli."},
    {"q":"Aşağıdaki kod çalışınca ne yazdırır?","fig":{"type":"code","code":"public BankAccount(String name, double balance) {\n    owner = name;\n    balance = balance;\n}\n// istemci\nBankAccount a = new BankAccount(\"Ada\", 100);\nSystem.out.println(a.getBalance());"},"opts":["0.0","100.0","100","Derleme hatası"],"a":0,"why":"balance = balance; parametreyi kendisine atar (parametre alanı gölgeler). Alan hiç atanmaz ve varsayılan 0.0 kalır. Kod derlenir, hata mesajı yoktur."},
    {"q":"Aşağıdaki metot neden derlenmez?","fig":{"type":"code","code":"public double total(double a, double b) {\n    double sum = a + b;\n    if (sum > 100) {\n        double bonus = 10;\n        sum = sum + bonus;\n    }\n    return sum + bonus;\n}"},"opts":["sum bir parametre olmalıydı","total metodu static olmalıydı","if bloğunun içinde değişken tanımlanamaz","bonus yalnız if bloğunda tanımlıdır; return satırında görünmez"],"a":3,"why":"Yerel değişken, tanımlandığı süslü parantez bloğunun dışında yoktur. return satırı if bloğunun dışında olduğu için bonus'u göremez (\"cannot find symbol\"). Blok içinde değişken tanımlamak serbesttir."},
    {"q":"isRicherThan, BankAccount sınıfının içinde yazılmıştır. Tester sınıfı ise BankAccount'ın dışındadır. Tester'ın main metodunda aşağıdakilerden hangisi derleme hatası verir?","fig":{"type":"code","code":"// BankAccount içinde:\npublic boolean isRicherThan(BankAccount other) {\n    return balance > other.balance;\n}\n// Tester içinde:\nBankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);"},"opts":["a.isRicherThan(b)","b.balance","b.getBalance()","new BankAccount(\"Elif\", 5)"],"a":1,"why":"balance private'tır; Tester başka bir sınıf olduğu için ona doğrudan erişemez. isRicherThan içindeki other.balance ise BankAccount sınıfının kodudur, geçerlidir. Öteki üç ifade public üyeleri kullanır."}
  ]
};
