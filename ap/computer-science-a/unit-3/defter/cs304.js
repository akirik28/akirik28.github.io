/* Kitpath not defteri · cs304 · 3.5 Metot Yazmak
   Kaynak: AP CSA 2025–26 CED, Unit 3 (Class Creation) öğrenme hedefleri; sınav biçimi FRQ 2 (Class Design). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs304",
  amac: "Bu konu sınıfa davranış eklemeyi anlatıyor: metot başlığı, *void* ve değer döndüren metotlar, *accessor* ile *mutator*, *toString* ve parametrelerin kopya olarak geçmesi. FRQ 2'deki metot yazma becerisi burada kurulur.",
  bolumler: [
    {
      baslik: "Metot başlığı ve *return*",
      kisa: "Başlık dönüş tipini, adı ve parametreleri söyler; return değeri çağırana yollar.",
      bloklar: [
        {"tip":"kod","baslik":"deposit ve withdraw","kod":"public void deposit(double amount) {\n    balance = balance + amount;\n}\npublic boolean withdraw(double amount) {\n    if (amount > balance) {\n        return false;\n    }\n    balance = balance - amount;\n    return true;\n}","vurgu":[1,4],"not":"deposit değer döndürmez (void). withdraw ise para yetmezse false, çekim olursa true döndürür."},
        {"tip":"tablo","baslik":"Başlığın parçaları: public boolean withdraw(double amount)","head":["Parça","Örnek","Anlamı"],"rows":[["Erişim","public","Metot sınıfın dışından çağrılabilir"],["Dönüş tipi","boolean","Çağırana hangi tipte değer döner (yoksa void)"],["Ad","withdraw","Genelde fiil"],["Parametre listesi","(double amount)","Gelen değerler: tip ve ad"]]},
        {"tip":"kavramlar","kartlar":[{"ikon":"↩️","terim":"return","tr":"değer döndür","tanim":"Metodu o anda bitirir ve değeri çağırana gönderir. Değer, başlıktaki dönüş tipine uymalı.","ornek":"*return true;* metodu hemen sonlandırır."},{"ikon":"🕳️","terim":"void","tr":"değer döndürmez","tanim":"Hiçbir değer vermeyen metot. Sonucu bir değişkene atanamaz.","ornek":"*deposit(50);* bir ifade olarak tek başına yazılır."}]}
      ]
    },
    {
      baslik: "*Accessor* ve *mutator* kullanmak",
      kisa: "Okuyan metot durumu değiştirmez; değiştiren metot durumu günceller.",
      bloklar: [
        {"tip":"ikili","sol":{"ikon":"👁️","baslik":"*Accessor*","maddeler":["Durumu okur","Nesne aynı kalır"]},"sag":{"ikon":"✏️","baslik":"*Mutator*","maddeler":["Durumu değiştirir","Değer de döndürebilir"]},"oyun":[{"metin":"getBalance()","cevap":"sol","neden":"Bakiyeyi okur, değiştirmez."},{"metin":"deposit(50)","cevap":"sag","neden":"Bakiyeyi artırır."},{"metin":"getOwner()","cevap":"sol","neden":"Yalnızca okur."},{"metin":"withdraw(30) (bakiye azalır, true ya da false döner)","cevap":"sag","neden":"Değer döndürse de durumu değiştirdiği için mutator."},{"metin":"toString()","cevap":"sol","neden":"Nesneyi yazıya çevirir, değiştirmez."}]},
        {"tip":"kod","baslik":"Önce ve sonra","kod":"BankAccount a = new BankAccount(\"Ada\", 100);\ndouble before = a.getBalance();\na.deposit(50);\nSystem.out.println(before + \" \" + a.getBalance());","vurgu":[3],"cikti":"100.0 150.0"}
      ]
    },
    {
      baslik: "return nasıl çalışır?",
      kisa: "return metodu o anda bitirir; değer dönen metot her yolda return etmeli.",
      bloklar: [
        {"tip":"ornek","baslik":"Bakiye 150.0 iken withdraw(200) sonra withdraw(30)","durum":"İki çağrı arka arkaya yapılıyor. Ne döner, bakiye ne olur?","adimlar":["withdraw(200): amount > balance, yani 200 > 150.0 doğru.","return false; metodu hemen bitirir; alttaki satırlara geçilmez. Bakiye 150.0 kalır.","withdraw(30): 30 > 150.0 yanlış; if gövdesi atlanır.","balance = balance - amount; bakiyeyi 120.0 yapar.","return true; çağırana true gönderir."],"sonuc":"Önce false, sonra true döner; bakiye 120.0"},
        {"tip":"tuzak","metin":"Değer döndüren bir metodun her yolu bir return ile bitmelidir.","yanlis":"if içinde return true yazdım, yeter; koşul yanlışsa metot false döndürür sayılır.","dogru":"Koşul yanlışsa hiçbir değer dönmez: \"missing return statement\" derleme hatası."}
      ]
    },
    {
      baslik: "toString: nesneyi yazıya çevirmek",
      kisa: "toString yazılırsa println ve + işlemi nesneyi o yazıyla gösterir.",
      bloklar: [
        {"tip":"kod","baslik":"toString metodu","kod":"public String toString() {\n    return owner + \": \" + balance + \" TL\";\n}","not":"Başlık tam olarak public String toString() olmalı: ad, dönüş tipi ve parametre listesi aynen."},
        {"tip":"kod","baslik":"Kullanımı","kod":"BankAccount a = new BankAccount(\"Ada\", 120);\nSystem.out.println(a);\nSystem.out.println(\"Hesap -> \" + a);","cikti":"Ada: 120.0 TL\nHesap -> Ada: 120.0 TL","not":"println(a) ve yazıyla birleştirme, nesne için otomatik olarak toString'i çağırır."},
        {"tip":"tuzak","metin":"toString yazmazsan nesne okunur biçimde yazdırılmaz.","yanlis":"toString yazmasam da println(a) hesabı düzgün gösterir.","dogru":"BankAccount@ ile başlayan, adres benzeri bir yazı çıkar."}
      ]
    },
    {
      baslik: "Parametre kopyadır",
      kisa: "Primitive argüman metoda kopyalanır; parametreyi değiştirmek çağıranı etkilemez.",
      bloklar: [
        {"tip":"kod","baslik":"Parametreyi değiştiren metot","kod":"public void depositWithBonus(double amount) {\n    amount = amount + 5;\n    balance = balance + amount;\n}","vurgu":[2]},
        {"tip":"kod","baslik":"İstemci","kod":"BankAccount a = new BankAccount(\"Ada\", 100);\ndouble x = 50;\na.depositWithBonus(x);\nSystem.out.println(x);\nSystem.out.println(a.getBalance());","cikti":"50.0\n155.0","not":"amount, x'in kopyasıdır. Kopya 55.0 olsa da x 50.0 kalır."},
        {"tip":"tablo","baslik":"İzleme tablosu","head":["Satır","x (çağıran)","amount","balance"],"rows":[["double x = 50;","50.0","—","100.0"],["çağrı: amount, x'in kopyası","50.0","50.0","100.0"],["amount = amount + 5;","50.0","55.0","100.0"],["balance = balance + amount;","50.0","55.0","155.0"],["metot biter","50.0","(yok olur)","155.0"]],"vurgu":2}
      ]
    },
    {
      baslik: "Metottan metot çağırmak ve *overloading*",
      kisa: "Aynı sınıftaki metot nokta olmadan çağrılır; aynı ad, farklı parametre listesi olabilir.",
      bloklar: [
        {"tip":"kod","baslik":"Yardımcı metot","kod":"private boolean canCover(double amount) {\n    return amount <= balance;\n}\npublic boolean withdraw(double amount) {\n    if (!canCover(amount)) {\n        return false;\n    }\n    balance = balance - amount;\n    return true;\n}","vurgu":[5],"not":"Aynı iş, daha okunur. canCover yalnızca sınıfın içinde kullanıldığı için private."},
        {"tip":"kavramlar","kartlar":[{"ikon":"🧰","terim":"Helper method","tr":"yardımcı metot","tanim":"Sınıfın kendi içinde kullanılan, genellikle *private* metot. Tekrarlanan işi tek yere toplar.","ornek":"*canCover(amount)*"},{"ikon":"🔀","terim":"Method overloading","tr":"metot yükleme","tanim":"Aynı adlı metotların parametre listesinin (sayı, tip, sıra) farklı olması. Yalnızca dönüş tipi farklıysa derlenmez.","ornek":"*deposit(double)* ve *deposit(double, String)*"}]}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["Metot başlığı: erişim, dönüş tipi, ad ve parametre listesi.","*void* metot değer döndürmez; değer döndüren metot başlığındaki tipte *return* eder.","*return* metodu hemen bitirir; değer döndüren metodun her yolu *return* ile bitmelidir.","*Accessor* durumu okur; *mutator* durumu değiştirir (değer döndürse bile mutator'dır).","*toString* tam olarak *public String toString()* başlığıyla yazılır; *println* ve *+* otomatik çağırır.","Primitive parametre kopyadır: metot içinde değiştirmek çağıranın değişkenini etkilemez.","Aynı sınıfın metodu nokta olmadan çağrılır; aynı adlı metotlar parametre listesiyle ayrılır."]}
      ]
    }
  ],
  sorular: [
    {"q":"BankAccount sınıfı bu defterdeki gibi yazılmıştır. Kod çalışınca ne yazdırılır?","fig":{"type":"code","code":"BankAccount a = new BankAccount(\"Ada\", 100);\na.deposit(50);\nboolean ok = a.withdraw(200);\na.withdraw(30);\nSystem.out.println(ok + \" \" + a.getBalance());"},"opts":["true 120.0","false 120.0","false 150.0","true 150.0"],"a":1,"why":"deposit sonrası 150.0. withdraw(200) para yetmediği için false döner ve bakiye değişmez. withdraw(30) çalışır: 120.0. ok false kaldığı için çıktı false 120.0. C yanlış: ikinci çekim gerçekleşir."},
    {"q":"Aşağıdaki metot hakkında hangisi doğrudur?","fig":{"type":"code","code":"public boolean isOverdrawn() {\n    if (balance < 0) {\n        return true;\n    }\n}"},"opts":["Kod derlenir; koşul yanlışsa false döner","Kod derlenir; koşul yanlışsa null döner","Çalışma anında NullPointerException fırlatır","Derleme hatası: koşul yanlışsa metot hiçbir değer döndürmüyor"],"a":3,"why":"Değer döndüren metodun her yolunda return olmalı. balance 0 ya da pozitifse metot return etmeden biter; Java bunu \"missing return statement\" diye derleme sırasında reddeder."},
    {"q":"Aşağıdaki kod çalışınca ne yazdırır?","fig":{"type":"code","code":"public void bonus(double amount) {\n    amount = amount + 5;\n    balance = balance + amount;\n}\n// istemci\nBankAccount a = new BankAccount(\"Ada\", 100);\ndouble x = 20;\na.bonus(x);\nSystem.out.println(x + \" \" + a.getBalance());"},"opts":["20.0 125.0","25.0 125.0","20.0 120.0","25.0 100.0"],"a":0,"why":"amount, x'in kopyasıdır; kopyayı 25.0 yapmak x'i değiştirmez (x 20.0 kalır). Bakiyeye 25.0 eklenir: 125.0. B, parametrenin çağıranı da değiştirdiğini sanan öğrencinin cevabıdır."},
    {"q":"Aşağıdaki başlıklardan hangileri nesnenin durumunu değiştirmeye uygun (mutator) metotlardır?","fig":{"type":"code","code":"public double getBalance()                 // I\npublic boolean withdraw(double amount)     // II\npublic String toString()                   // III\npublic void setOwner(String n)             // IV"},"opts":["I ve III","II ve III","II ve IV","I ve IV"],"a":2,"why":"withdraw bakiyeyi değiştirir (boolean döndürmesi mutator olmasını engellemez) ve setOwner sahibi değiştirir. getBalance ile toString yalnızca okur."},
    {"q":"BankAccount sınıfında aşağıdaki toString yazılmıştır. Kod ne yazdırır?","fig":{"type":"code","code":"public String toString() {\n    return owner + balance;\n}\n// istemci\nBankAccount a = new BankAccount(\"Ada\", 100);\nSystem.out.println(a);"},"opts":["Ada: 100.0","Ada 100","Ada100.0","BankAccount@ ile başlayan bir adres"],"a":2,"why":"println(a), toString'i çağırır. \"Ada\" + 100.0 araya hiçbir şey koymadan birleşir: Ada100.0. D ancak toString yazılmasaydı olurdu."}
  ]
};
