/* Kitora not defteri · cs302 · 3.3 Bir Sınıfın Anatomisi
   Kaynak: AP CSA 2025–26 CED, Unit 3 (Class Creation) öğrenme hedefleri; sınav biçimi FRQ 2 (Class Design). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs302",
  amac: "Bu konu bir *Java* sınıfının parçalarını anlatıyor: *private* alanlar (*instance variable*), *constructor* ve *public* metotlar. *Encapsulation*'ı, *accessor* ile *mutator* farkını ve FRQ 2'de sınıfı yazarken izleyeceğin iskeleti öğreneceksin.",
  bolumler: [
    {
      baslik: "Sınıfın iskeleti",
      kisa: "Sınıf: private alanlar, constructor ve public metotlardan oluşur.",
      bloklar: [
        {"tip":"harita","merkez":"*BankAccount* sınıfı","dallar":[{"baslik":"Başlık","alt":"public class BankAccount"},{"baslik":"Alanlar (*instance variable*)","alt":"nesnenin bilgisi: owner, balance"},{"baslik":"*Constructor*","alt":"nesneyi kurar, ilk değerleri verir"},{"baslik":"Metotlar","alt":"nesnenin davranışı: getOwner, getBalance"}]},
        {"tip":"kod","baslik":"BankAccount, ilk sürüm","kod":"public class BankAccount {\n    private String owner;\n    private double balance;\n\n    public BankAccount(String name, double start) {\n        owner = name;\n        balance = start;\n    }\n    public String getOwner() {\n        return owner;\n    }\n    public double getBalance() {\n        return balance;\n    }\n}","vurgu":[2,3],"not":"Alanlar metotların dışında, sınıfın en üstünde bildirilir: önce erişim (private), sonra tip, sonra ad. Her nesne bu alanların kendi kopyasını taşır. Constructor'ın ayrıntısı sıradaki defterde."}
      ]
    },
    {
      baslik: "*private* ve *public*: kapsülleme",
      kisa: "Alanlar private olur; nesneye dışarıdan erişim public metotlarla yapılır.",
      bloklar: [
        {"tip":"kavramlar","kartlar":[{"ikon":"🔐","terim":"Encapsulation","tr":"kapsülleme","tanim":"Veriyi (alanları) *private* yapıp erişimi *public* metotlara bırakmak. Sınıf, kendi verisinin kontrolünü elinde tutar.","ornek":"Kantin kartının bakiyesini kasadaki görevli değiştirir; sen kartın içini kendin düzenleyemezsin."},{"ikon":"🚪","terim":"Access modifier","tr":"erişim belirleyici","tanim":"*public* her yerden erişilebilir demektir. *private* yalnızca aynı sınıfın kodundan erişilebilir demektir.","ornek":"*private double balance;* dışarıdan okunamaz."}]},
        {"tip":"kod","baslik":"Dışarıdan alana uzanmak","kod":"BankAccount a = new BankAccount(\"Ada\", 100);\nSystem.out.println(a.getBalance());\na.balance = 1000000;","vurgu":[3],"not":"Üçüncü satır derleme hatası verir (balance has private access in BankAccount); program hiç çalışmaz. Bakiyeyi okumak için getBalance() var."},
        {"tip":"ikili","sol":{"ikon":"🔒","baslik":"*private* olur","maddeler":["Nesnenin verisi (alanlar)","Dışarıya doğrudan açılmaz"]},"sag":{"ikon":"🔓","baslik":"*public* olur","maddeler":["Sınıfın dış yüzü","Çağıranın kullanacağı her şey"]},"oyun":[{"metin":"owner alanı","cevap":"sol","neden":"Veri: private."},{"metin":"getBalance metodu","cevap":"sag","neden":"Dışarıdan çağrılacağı için public."},{"metin":"Constructor","cevap":"sag","neden":"new ile dışarıdan çağrılır: public."},{"metin":"balance alanı","cevap":"sol","neden":"Veri: private."},{"metin":"Sınıf başlığı: ___ class BankAccount","cevap":"sag","neden":"AP'de sınıf public yazılır."}]}
      ]
    },
    {
      baslik: "Her nesnenin kendi kopyası",
      kisa: "Her nesne alanların kendi kopyasını taşır; sınıf yalnızca kalıptır.",
      bloklar: [
        {"tip":"kod","baslik":"İki hesap, iki ayrı veri","kod":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);\nSystem.out.println(a.getOwner() + \" \" + a.getBalance());\nSystem.out.println(b.getOwner() + \" \" + b.getBalance());","cikti":"Ada 100.0\nCan 20.0"},
        {"tip":"tablo","baslik":"Bellekte iki nesne","head":["Nesne","owner","balance"],"rows":[["a →","\"Ada\"","100.0"],["b →","\"Can\"","20.0"]],"not":"Sınıf tek, nesne sayısı sınırsız. a'nın bakiyesi değişse b'ninki değişmez."}
      ]
    },
    {
      baslik: "*Accessor* ve *mutator*",
      kisa: "Accessor bilgiyi okur, mutator durumu değiştirir; ikisi de metottur.",
      bloklar: [
        {"tip":"kavramlar","kartlar":[{"ikon":"👁️","terim":"Accessor","tr":"erişimci (getter)","tanim":"Alanın değerini döndüren, nesnenin durumunu değiştirmeyen metot.","ornek":"*getBalance()*"},{"ikon":"✏️","terim":"Mutator","tr":"değiştirici (setter)","tanim":"Nesnenin durumunu, yani alanlarını değiştiren metot; çoğu zaman *void*.","ornek":"*setOwner(String n)*"}]},
        {"tip":"kod","baslik":"Bir çift","kod":"public String getOwner() {\n    return owner;\n}\npublic void setOwner(String newName) {\n    owner = newName;\n}","not":"Dışarıya yalnızca getter verirsen alan dışarıdan değiştirilemez; kontrol sınıfta kalır."},
        {"tip":"tablo","head":["","Accessor","Mutator"],"rows":[["Ne yapar","Değeri okur, döndürür","Alanı değiştirir"],["Dönüş tipi","Alanın tipi (String, double…)","Çoğunlukla void"],["Parametre","Genelde yok","Yeni değer"]]}
      ]
    },
    {
      baslik: "FRQ 2 için sınıf yazma kontrol listesi",
      kisa: "Önce başlık ve private alanlar, sonra constructor, sonra metotlar.",
      bloklar: [
        {"tip":"liste","maddeler":[{"ikon":"🏷️","baslik":"Başlık","metin":"public class ve soruda verilen sınıf adı, harfi harfine aynı."},{"ikon":"🔒","baslik":"Alanlar","metin":"Her veri için private, tip ve ad; sınıfın en üstünde, metotların dışında."},{"ikon":"🏗️","baslik":"Constructor","metin":"Sınıfla aynı ad, dönüş tipi yok; alanlara ilk değerleri verir."},{"ikon":"⚙️","baslik":"Metotlar","metin":"Soruda verilen başlıkları aynen kullan: ad, parametre sırası, dönüş tipi."},{"ikon":"🔎","baslik":"Örnekleri oku","metin":"Soru örnek çağrılar ve çıktılar verir; beklenen davranışı oradan çıkar."},{"ikon":"✅","baslik":"Son kontrol","metin":"Alanlar private mı? Değer döndüren her metot return ediyor mu?"}]},
        {"tip":"tuzak","metin":"Alanı public yazmak derlenir ve çalışır, ama kapsülleme bozulur.","yanlis":"public double balance; da olur, program çalışıyor.","dogru":"Instance variable'lar *private* yazılır; dışarıya metotla açılır. FRQ'da puan kaybettirir."}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["*Class* kalıptır; her *object* alanların kendi kopyasını taşır.","Sınıfın parçaları: başlık, *private* alanlar, *constructor* ve metotlar.","Alanlar metotların dışında, sınıfın en üstünde bildirilir.","*Encapsulation*: alanlar *private*, dışarıya erişim *public* metotlarla.","*Private* üyeye başka sınıftan doğrudan erişmek derleme hatasıdır.","*Accessor* değeri okur ve döndürür; *mutator* alanı değiştirir (çoğu zaman *void*).","FRQ 2: başlık, private alanlar, constructor, metotlar; soruda verilen adları ve sırayı aynen koru."]}
      ]
    }
  ],
  sorular: [
    {"q":"Aşağıdaki kod BankAccount sınıfının dışındaki bir sınıfta yazılmıştır. BankAccount'un alanları private'tır. Hangi satır derleme hatasına yol açar?","fig":{"type":"code","code":"BankAccount x = new BankAccount(\"Mert\", 50);   // 1\ndouble d = x.getBalance();                     // 2\nx.balance = d + 25;                            // 3\nString s = x.getOwner();                       // 4"},"opts":["1. satır","2. satır","3. satır","4. satır"],"a":2,"why":"3. satır private alana dışarıdan doğrudan yazmaya çalışır. 2. ve 4. satırlar public erişimci metotları çağırır, 1. satır ise public constructor'ı."},
    {"q":"Bir kitap sınıfı başlığı (String) ve sayfa sayısını (int) saklayacak. Hangisi doğru kapsüllenmiş alan tanımıdır?","opts":["private String title; private int pages;","public String title; public int pages;","String title(); int pages();","private title String; private pages int;"],"a":0,"why":"Alanlar private, önce tip sonra ad yazılarak bildirilir. B alanları dışarı açar, C metot başlığına benzer ama alan değildir, D'de tip ve ad yer değiştirmiş."},
    {"q":"Aşağıdaki kod çalışınca ne yazdırır? (BankAccount bu defterdeki gibi yazılmıştır.)","fig":{"type":"code","code":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);\nBankAccount c = new BankAccount(\"Deniz\", 5);\nSystem.out.println(b.getBalance() + c.getBalance());"},"opts":["205.0","20.05.0","100.0","25.0"],"a":3,"why":"Her nesnenin balance alanı ayrıdır: b'ninki 20.0, c'ninki 5.0. İkisi double olduğu için toplanır: 25.0. B yanlış çünkü getBalance bir String değil, double döndürür."},
    {"q":"Aşağıdaki başlıklardan hangisi bir erişimcidir (accessor)?","fig":{"type":"code","code":"public void setOwner(String n)      // I\npublic String getOwner()            // II\npublic void clear()                 // III\npublic BankAccount(String n)        // IV"},"opts":["Yalnız I","Yalnız II","I ve III","II ve IV"],"a":1,"why":"getOwner değeri okuyup döndürür, durumu değiştirmez. I ve III durumu değiştirir (mutator). IV bir constructor'dır, metot değildir."},
    {"q":"Kapsülleme (encapsulation) aşağıdakilerden hangisini sağlar?","opts":["Bir sınıfın bütün nesnelerinin aynı alan değerini paylaşmasını","Alanları public yaparak daha hızlı erişim sağlamayı","Alanların geçersiz değer almasını sınıfın kendi metotlarıyla denetleyebilmeyi","Sınıfın constructor'a hiç ihtiyaç duymamasını"],"a":2,"why":"Alanlar private olunca değişiklik yalnızca sınıfın metotlarından geçer; sınıf geçersiz değerleri engelleyebilir. A static'in, B ise kapsüllemenin tersinin tanımıdır."}
  ]
};
