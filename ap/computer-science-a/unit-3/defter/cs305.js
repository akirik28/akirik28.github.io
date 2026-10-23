/* Kitpath not defteri · cs305 · 3.6 Nesne Referansı Geçirmek ve Döndürmek
   Kaynak: AP CSA 2025–26 CED, Unit 3 (Class Creation) öğrenme hedefleri; sınav biçimi FRQ 2 (Class Design). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs305",
  amac: "Bu konu nesnelerin metotlara nasıl aktarıldığını ve metotlardan nasıl döndüğünü anlatıyor. Nesne parametresinin *reference*'ın kopyası olduğunu, bu yüzden metodun nesnenin içini değiştirebildiğini ama çağıranın değişkenini başka nesneye çeviremediğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Ne kopyalanır: değer mi, referans mı?",
      kisa: "Primitive'de değerin kendisi, nesnede nesneye giden referans kopyalanır.",
      bloklar: [
        {"tip":"kavramlar","kartlar":[{"ikon":"➡️","terim":"Reference copy","tr":"referans kopyası","tanim":"Nesne parametresi, çağıranın referansının kopyasıdır. İki ok da aynı nesneyi gösterir; buna *alias* denir.","ornek":"Kardeşinle aynı Netflix hesabına bakmak: ikinizin de şifresi aynı hesabı açar."}]},
        {"tip":"ikili","sol":{"ikon":"🔢","baslik":"Primitive (*int*, *double*, *boolean*)","maddeler":["Değerin kendisi kopyalanır","Parametreyi değiştirmek çağıranı etkilemez"]},"sag":{"ikon":"🎫","baslik":"Nesne (*reference*)","maddeler":["Nesneye giden ok kopyalanır","Metot nesnenin içini değiştirebilir"]},"oyun":[{"metin":"double x = 50; metoda x gönderiliyor","cevap":"sol","neden":"Metoda 50.0 değerinin kopyası gider."},{"metin":"BankAccount b; metoda b gönderiliyor","cevap":"sag","neden":"Metoda b'nin referansının kopyası gider."},{"metin":"Metot, aldığı parametre üzerinden deposit çağırıyor ve çağıran değişikliği görüyor","cevap":"sag","neden":"İki ok aynı nesneyi gösterdiği için değişiklik ortaktır."},{"metin":"boolean flag gönderiliyor ve metot içinde false yapılıyor","cevap":"sol","neden":"Kopya değişir, çağıranın flag'i değişmez."}]}
      ]
    },
    {
      baslik: "Nesne parametresi: metot nesnenin içini değiştirebilir",
      kisa: "Parametre aynı nesneyi gösterir; public metotlarla içini değiştirebilirsin.",
      bloklar: [
        {"tip":"kod","baslik":"Havale metodu","kod":"public boolean transferTo(BankAccount other, double amount) {\n    if (withdraw(amount)) {\n        other.deposit(amount);\n        return true;\n    }\n    return false;\n}","vurgu":[3],"not":"withdraw(amount) bu nesnenin kendi metodudur; başına nesne yazmadık. other ise çağıranın verdiği hesabın aynısıdır."},
        {"tip":"kod","baslik":"İstemci","kod":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);\na.transferTo(b, 30);\nSystem.out.println(a.getBalance());\nSystem.out.println(b.getBalance());","cikti":"70.0\n50.0"},
        {"tip":"tablo","baslik":"İzleme tablosu","head":["Adım","a.balance","b.balance"],"rows":[["İki hesap kurulur","100.0","20.0"],["withdraw(30): a'dan çekilir","70.0","20.0"],["other.deposit(30): other, b ile aynı nesne","70.0","50.0"]],"vurgu":2}
      ]
    },
    {
      baslik: "Parametreyi yeniden atamak çağıranı etkilemez",
      kisa: "Parametre değişkenine yeni nesne atamak çağıranın değişkenini değiştirmez.",
      bloklar: [
        {"tip":"kod","baslik":"Parametreyi başka nesneye çeviren metot","kod":"public void tryReplace(BankAccount other) {\n    other = new BankAccount(\"Yeni\", 0);\n    other.deposit(500);\n}","vurgu":[2]},
        {"tip":"kod","baslik":"İstemci","kod":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);\na.tryReplace(b);\nSystem.out.println(b.getOwner() + \" \" + b.getBalance());","cikti":"Can 20.0"},
        {"tip":"adimlar","baslik":"Oklara bak","adimlar":[{"baslik":"Çağrı anı","metin":"b ve other aynı nesneyi (Can) gösterir."},{"baslik":"other = new ...","metin":"Yalnızca other'ın oku yeni nesneye döner; b hâlâ Can'ı gösterir."},{"baslik":"other.deposit(500)","metin":"500 TL, yeni oluşturulan \"Yeni\" hesabına yatar."},{"baslik":"Metot biter","metin":"other yok olur, \"Yeni\" hesabını kimse göstermez. b değişmedi."}]},
        {"tip":"tuzak","metin":"Metot, çağıranın değişkenini başka bir nesneye çeviremez; yalnızca gösterilen nesnenin içini değiştirebilir.","yanlis":"tryReplace(b) sonrası b \"Yeni\" hesabını gösterir ve bakiyesi 500.0 olur.","dogru":"b hâlâ Can'ı gösterir; çıktı Can 20.0."}
      ]
    },
    {
      baslik: "Referans döndürmek",
      kisa: "Nesne döndüren metot kopya değil, aynı nesneye giden referansı verir.",
      bloklar: [
        {"tip":"kod","baslik":"Bağlı hesap alanı","kod":"private BankAccount linked;   // başlangıçta null\n\npublic void setLinked(BankAccount other) {\n    linked = other;\n}\npublic BankAccount getLinked() {\n    return linked;\n}","not":"Yeni bir alan ekledik: bir hesabın bağlı olduğu öteki hesap. Alan nesne tipinde, bu yüzden varsayılanı null."},
        {"tip":"kod","baslik":"Getter'ın verdiği ok","kod":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);\na.setLinked(b);\na.getLinked().deposit(10);\nSystem.out.println(b.getBalance());\nSystem.out.println(a.getLinked() == b);","vurgu":[4],"cikti":"30.0\ntrue","not":"getLinked() b'nin kopyasını değil, b'nin kendisine giden referansı verir; deposit gerçek b'yi değiştirir."},
        {"tip":"tuzak","metin":"Başlangıçta linked null'dır. Null referans üzerinden metot çağırmak çalışma anı hatasıdır.","yanlis":"setLinked'i çağırmadan a.getLinked().deposit(10) yazabilirim.","dogru":"NullPointerException fırlatılır; program o satırda durur."}
      ]
    },
    {
      baslik: "Değişmez nesne: *String*",
      kisa: "String değişmezdir; referansını almak onu değiştirmeye izin vermez.",
      bloklar: [
        {"tip":"kod","baslik":"Getter'dan String almak","kod":"BankAccount a = new BankAccount(\"Ada\", 100);\nString s = a.getOwner();\ns = s + \" Yılmaz\";\nSystem.out.println(s);\nSystem.out.println(a.getOwner());","cikti":"Ada Yılmaz\nAda","not":"s + \" Yılmaz\" yeni bir String üretir; a'nın içindeki String'e dokunmaz."},
        {"tip":"kavramlar","kartlar":[{"ikon":"🔧","terim":"Mutable","tr":"değiştirilebilir","tanim":"İçi metotlarla değişebilen nesne. Referansı dışarı vermek, alanı dışarıdan değiştirilebilir kılar.","ornek":"*BankAccount*: deposit ile bakiyesi değişir."},{"ikon":"🧊","terim":"Immutable","tr":"değişmez","tanim":"İçi hiç değişmeyen nesne. Her \"değişiklik\" yeni nesne üretir; referansı vermek güvenlidir.","ornek":"*String*"}]}
      ]
    },
    {
      baslik: "Sınavda böyle sorulur",
      kisa: "Önce parametrenin primitive mi nesne mi olduğuna, sonra oka bak.",
      bloklar: [
        {"tip":"liste","maddeler":[{"ikon":"1️⃣","baslik":"Parametre türü","metin":"Primitive ise kopya değişir, çağıran etkilenmez. Nesne ise ok kopyalanır."},{"ikon":"2️⃣","baslik":"Metot ne yapıyor?","metin":"Nesnenin metodunu çağırıyorsa gerçek nesne değişir. Parametreye = ile yeni nesne atıyorsa yalnızca yerel ok değişir."},{"ikon":"3️⃣","baslik":"Dönen şey ne?","metin":"Nesne döndüren metot aynı nesneye referans verir; String ise zaten değişmez."},{"ikon":"4️⃣","baslik":"Null var mı?","metin":"null referanstan metot çağrılırsa NullPointerException çıkar."}]},
        {"tip":"tablo","head":["","Unit 3'te bu konuda"],"rows":[["✍️ Yazarsın","Nesne alan metotlar (transferTo gibi) ve nesne döndüren getter'lar."],["👀 Okursun","Aliasing sonuçlarını izlemek, parametreye yeniden atamanın etkisiz kalmasını, null hatalarını."],["🚫 Gerekmez","Gerçek bellek adreslerini bilmek."]]}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["Primitive argümanda değerin kendisi, nesne argümanında *reference* kopyalanır.","Nesne parametresi çağıranın nesnesine *alias* olur: metot, public metotlarla nesnenin içini değiştirebilir.","Parametreye yeni nesne atamak yalnızca yerel oku değiştirir; çağıranın değişkeni aynı kalır.","Nesne döndüren metot kopya değil, aynı nesneye *reference* verir.","*Mutable* nesne referansı dönen getter, alanı dışarıdan değiştirilebilir kılar; *String* ise değişmezdir.","Referans değişkenin varsayılanı *null*'dır; null üzerinden metot çağırmak *NullPointerException* fırlatır.","İki referansın aynı nesneyi gösterip göstermediğine bakmak için iki eşittir kullanılır."]}
      ]
    }
  ],
  sorular: [
    {"q":"Aşağıdaki kod çalışınca ne yazdırır? (transferTo bu defterdeki gibidir.)","fig":{"type":"code","code":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);\na.transferTo(b, 30);\nSystem.out.println(a.getBalance() + \" \" + b.getBalance());"},"opts":["100.0 20.0","70.0 20.0","100.0 50.0","70.0 50.0"],"a":3,"why":"other parametresi b ile aynı nesneyi gösterir; deposit gerçek b'yi değiştirir. a'dan 30 çekilir (70.0), b'ye 30 eklenir (50.0). B, parametrenin kopya olduğunu sanıp b'nin değişmediğini düşünenlerin cevabıdır."},
    {"q":"Aşağıdaki kod çalışınca ne yazdırır?","fig":{"type":"code","code":"public void emptyOut(BankAccount other) {\n    other.withdraw(other.getBalance());\n}\n// istemci\nBankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);\na.emptyOut(b);\nSystem.out.println(b.getBalance());"},"opts":["0.0","20.0","100.0","Derleme hatası"],"a":0,"why":"other, b'nin referansının kopyasıdır ve aynı nesneyi gösterir. withdraw(20.0): 20.0 bakiyeden büyük değil, çekim yapılır ve bakiye 0.0 olur."},
    {"q":"Aşağıdaki kod çalışınca ne yazdırır?","fig":{"type":"code","code":"public void reset(BankAccount acc) {\n    acc = new BankAccount(\"Z\", 0);\n    acc.deposit(9);\n}\n// istemci\nBankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount k = new BankAccount(\"Elif\", 40);\na.reset(k);\nSystem.out.println(k.getOwner() + \" \" + k.getBalance());"},"opts":["Z 9.0","Elif 49.0","Elif 40.0","Z 0.0"],"a":2,"why":"acc = new ... yalnızca yerel parametrenin okunu değiştirir; k hâlâ Elif'i gösterir. Yeni Z hesabına yatırılan 9 TL kimse tarafından görülmez, Elif'in bakiyesi 40.0 kalır."},
    {"q":"Aşağıdaki kod çalışınca ne yazdırır? (setLinked ve getLinked bu defterdeki gibidir.)","fig":{"type":"code","code":"BankAccount a = new BankAccount(\"Ada\", 100);\nBankAccount b = new BankAccount(\"Can\", 20);\na.setLinked(b);\nBankAccount c = a.getLinked();\nc.deposit(5);\nSystem.out.println(b.getBalance());"},"opts":["20.0","25.0","5.0","NullPointerException"],"a":1,"why":"getLinked b'nin kopyasını değil, b'ye giden referansı döndürür. c ve b aynı nesneyi gösterir; deposit(5) b'nin bakiyesini 25.0 yapar."},
    {"q":"Aşağıdaki kod çalışınca ne olur? (linked için setLinked hiç çağrılmamıştır.)","fig":{"type":"code","code":"BankAccount c = new BankAccount(\"Elif\", 5);\nc.getLinked().deposit(1);\nSystem.out.println(\"bitti\");"},"opts":["bitti yazdırılır","0.0 yazdırılır","Derleme hatası olur","NullPointerException fırlatılır ve bitti yazdırılmaz"],"a":3,"why":"linked alanı hiç atanmadığı için null'dır. getLinked() null döndürür ve null üzerinden deposit çağrısı çalışma anında NullPointerException fırlatır; program durur. Kod derlenir, o yüzden C yanlış."}
  ]
};
