/* Kitpath not defteri · cs301 · 3.1–3.2 Soyutlama ve Program Tasarımı
   Kaynak: AP CSA 2025–26 CED, Unit 3 (Class Creation) öğrenme hedefleri; sınav biçimi FRQ 2 (Class Design). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs301",
  amac: "Bu konu, kod yazmadan önce yapılan işi anlatıyor: *abstraction* (soyutlama) ve *program design*. Programı hangi sınıflara, hangi veri ve davranışlara böleceğini, belgelemeyi ve tasarımın güvenilirlik, etik ile gizlilik üzerindeki etkisini öğreneceksin.",
  bolumler: [
    {
      baslik: "*Abstraction*: ayrıntıyı gizle, ana fikre odaklan",
      kisa: "Soyutlama, işe yaramayan ayrıntıyı saklayıp ana fikre odaklanmaktır.",
      bloklar: [
        {"tip":"hikaye","ikon":"🥪","baslik":"Kantinde tost siparişi","metin":"Kantinde \"tost\" dersin. Ekmeğin nasıl kızartıldığını bilmezsin; menü sana yalnızca ne alabileceğini ve fiyatını gösterir. Programlamada da karmaşık işi küçük, adı olan parçalara saklarız. Buna soyutlama denir."},
        {"tip":"kavramlar","kartlar":[{"ikon":"🧩","terim":"Abstraction","tr":"soyutlama","tanim":"Karmaşıklığı azaltmak için ilgisiz ayrıntıyı gizleyip işe yarayan ayrıntıları bir araya getirmek.","ornek":"Telefondaki \"ara\" tuşunu kullanırsın; şebekenin nasıl çalıştığını bilmezsin."},{"ikon":"🗃️","terim":"Data abstraction","tr":"veri soyutlaması","tanim":"Bir veri tipinin ne olduğunu, bellekte nasıl tutulduğundan ayırmak.","ornek":"*BankAccount* nesnesinin bakiyesini bir sayı olarak düşünürsün; bellekteki düzenini düşünmezsin."},{"ikon":"⚙️","terim":"Procedural abstraction","tr":"işlemsel soyutlama","tanim":"Bir metodu ne yaptığını bilerek kullanmak; nasıl yazıldığını bilmek gerekmez.","ornek":"*Math.sqrt(49)* çağrısı 7.0 verir; içindeki kodu görmezsin."}]},
        {"tip":"ikili","sol":{"ikon":"🗃️","baslik":"Veri soyutlaması","maddeler":["Konu: verinin ne olduğu","Saklanma biçimi gizlidir"]},"sag":{"ikon":"⚙️","baslik":"İşlemsel soyutlama","maddeler":["Konu: metodun ne yaptığı","Metodun içi gizlidir"]},"oyun":[{"metin":"*String* nesnesinin harflerinin bellekte nasıl dizildiğini düşünmeden kullanmak","cevap":"sol","neden":"Veri tipinin temsili gizli: veri soyutlaması."},{"metin":"*Math.abs(-3)* çağırıp içindeki kodu hiç görmemek","cevap":"sag","neden":"Metot kullanılıyor, içi bilinmiyor: işlemsel soyutlama."},{"metin":"*BankAccount* için sadece \"sahip ve bakiye\" diye düşünmek","cevap":"sol","neden":"Verinin ne olduğuna odaklanıp temsilini gizliyor."},{"metin":"*deposit* metodunun içinde bakiyenin nasıl artırıldığını bilmeden çağırmak","cevap":"sag","neden":"Metodun ne yaptığına güveniyor, nasıl yaptığına değil."}]}
      ]
    },
    {
      baslik: "Program tasarımı: önce ne, sonra nasıl",
      kisa: "Önce programın ne yapacağını yaz, sonra nasıl yapacağını kodla.",
      bloklar: [
        {"tip":"adimlar","baslik":"Tasarım süreci","adimlar":[{"baslik":"Problemi anla","metin":"Programın kim için ne yapacağını kendi cümlelerinle anlat."},{"baslik":"Belirtimi yaz","metin":"*Program specification*: girdiler, çıktılar ve kurallar. Program neyi yapmalı?"},{"baslik":"Nesneleri ve sınıfları bul","metin":"Belirtimdeki isimler çoğunlukla sınıf ya da veri adayıdır."},{"baslik":"Veri ve davranışı ayır","metin":"Nesnenin sahip olduğu değerler alan (*instance variable*), yapabildikleri metot olur."},{"baslik":"Kodla ve sına","metin":"Her metodu küçük örneklerle dene; sınır durumlarına bak (bakiye sıfır, çok büyük tutar)."}]},
        {"tip":"tablo","baslik":"Belirtimden sınıfa: kantin kartı","head":["Belirtimdeki ifade","Tasarımda","Kodda"],"rows":[["Kartın sahibi","veri (isim)","private String owner;"],["Karttaki bakiye","veri (sayı)","private double balance;"],["Karta para yüklemek","davranış (fiil)","deposit metodu"],["Para harcamak, yetmezse reddetmek","davranış (fiil)","withdraw metodu, boolean döndürür"]],"not":"Pratik kural: belirtimdeki isimler veriye, fiiller metotlara dönüşür."}
      ]
    },
    {
      baslik: "Sınıf taslağı: veri ve davranış bir arada",
      kisa: "Sınıf, nesnenin bilgisini ve yapabildiklerini tek yerde toplar.",
      bloklar: [
        {"tip":"harita","merkez":"*BankAccount* sınıfı","dallar":[{"baslik":"Veri: *owner*","alt":"hesabın sahibi"},{"baslik":"Veri: *balance*","alt":"kalan para"},{"baslik":"Davranış: *deposit*","alt":"para yatırır"},{"baslik":"Davranış: *withdraw*","alt":"para çeker, olmazsa reddeder"},{"baslik":"Davranış: *getBalance*","alt":"bakiyeyi söyler"},{"baslik":"Davranış: *toString*","alt":"hesabı yazıya çevirir"}]},
        {"tip":"kod","baslik":"Sınıfı kullanan kod","kod":"BankAccount hesap = new BankAccount(\"Ada\", 100);\nhesap.deposit(50);\nSystem.out.println(hesap.getBalance());","vurgu":[2,3],"cikti":"150.0","not":"Bu üç satırı yazan kişi *deposit*'in içinin nasıl yazıldığını görmez. Yalnızca adını, parametresini ve ne yaptığını bilir. Bu, işlemsel soyutlamadır. Sınıfı sonraki defterlerde adım adım yazacağız."}
      ]
    },
    {
      baslik: "Belgelendirme: *precondition* ve *postcondition*",
      kisa: "Yorum, metodun ne beklediğini ve ne yaptığını anlatır; içini değil.",
      bloklar: [
        {"tip":"kod","baslik":"Bir metodun sözleşmesi","kod":"// Precondition: amount > 0\n// Postcondition: balance, amount kadar artar\npublic void deposit(double amount) {\n    balance = balance + amount;\n}","vurgu":[1,2],"not":"Yorumlar sözleşme gibi okunur: çağıran *precondition*'ı sağlar, metot *postcondition*'ı sağlar."},
        {"tip":"kavramlar","kartlar":[{"ikon":"📥","terim":"Precondition","tr":"ön koşul","tanim":"Metot çağrılmadan önce doğru olması gereken koşul. Bunu sağlamak çağıranın işidir.","ornek":"*deposit*: yatırılan tutar sıfırdan büyük."},{"ikon":"📤","terim":"Postcondition","tr":"son koşul","tanim":"Metot bittiğinde doğru olacak durum; metodun söz verdiği sonuç.","ornek":"*deposit*: bakiye tutar kadar artmış."}]},
        {"tip":"tuzak","metin":"Soruda aksini söylemedikçe ön koşulun sağlandığını varsay. Ön koşulu kontrol eden kod yazmak gerekmez.","yanlis":"deposit içine tutar sıfırdan küçükse hata verdiren kod eklemeliyim.","dogru":"Soru \"geçersizse şunu yap\" demiyorsa yalnızca belirtilen davranışı yaz."}
      ]
    },
    {
      baslik: "Tasarımın etkisi: güvenilirlik, etik, gizlilik",
      kisa: "Program tasarımı güvenilirliği, hukuku, toplumu ve gizliliği etkiler.",
      bloklar: [
        {"tip":"tablo","head":["Etki alanı","Sorulacak soru","Kantin kartı uygulamasında"],"rows":[["Güvenilirlik (*reliability*)","Program her koşulda doğru çalışıyor mu? Yeterince sınandı mı?","Bakiye sıfırken ya da çok büyük tutarlarda da doğru hesaplanmalı."],["Hukuk ve fikri mülkiyet","Kullandığın kod ya da görsel kime ait? Lisans izin veriyor mu?","Başkasının açık kaynak kodunu lisans kurallarına uyarak, kaynağı belirterek kullanmak."],["Toplum ve etik","Kime fayda, kime zarar? Herkes kullanabiliyor mu?","Akıllı telefonu olmayan öğrenciler de bakiyesine bakabilmeli."],["Gizlilik (*privacy*)","Kişisel veri toplanıyor, saklanıyor, paylaşılıyor mu?","Harcama listesi yalnızca hesap sahibine görünmeli."]]},
        {"tip":"ikili","sol":{"ikon":"🔒","baslik":"Gizlilik / etik sorunu","maddeler":["Kişisel veri izinsiz kullanılır","Birine haksız zarar verilir"]},"sag":{"ikon":"🛠️","baslik":"Güvenilirlik sorunu","maddeler":["Program yanlış sonuç verir","Beklenmedik girdide çöker"]},"oyun":[{"metin":"Uygulama öğrencilerin konumunu izinsiz topluyor","cevap":"sol","neden":"Kişisel verinin izinsiz toplanması gizlilik ve etik sorunudur."},{"metin":"Bakiye sıfırken para çekme isteği programı çökertiyor","cevap":"sag","neden":"Beklenmedik durumda çökmek güvenilirlik sorunudur."},{"metin":"Hesap bilgileri başkalarına açık biçimde gösteriliyor","cevap":"sol","neden":"Veriyi korumamak gizlilik sorunudur."},{"metin":"Program sınanmadığı için bazı tutarlarda yanlış bakiye yazıyor","cevap":"sag","neden":"Yanlış sonuç ve yetersiz test: güvenilirlik."}]}
      ]
    },
    {
      baslik: "Sınavda nerede çıkar, bu ünitede ne büyüyecek",
      kisa: "Tasarım çoktan seçmelide sorulur; sınıf yazmak FRQ 2'dedir.",
      bloklar: [
        {"tip":"tablo","head":["","Unit 3 ve tasarım"],"rows":[["✍️ Yazarsın","FRQ 2 (*Class Design*): belirtime göre sınıfı yazmak; *private* alanlar, *constructor* ve metotlar."],["👀 Okursun","Çoktan seçmeli: soyutlama türlerini ayırmak, *precondition* ve *postcondition* yorumlarını okumak, tasarımın etkisini yorumlamak."],["🚫 Gerekmez","Yasa maddelerini ezberlemek ya da özel bir tasarım aracı bilmek."]]},
        {"tip":"liste","maddeler":[{"ikon":"3️⃣","baslik":"Anatomi","metin":"*BankAccount* iskeleti: *private* alanlar, *public* metotlar."},{"ikon":"🏗️","baslik":"Constructor","metin":"Hesap ilk değerlerle kurulur."},{"ikon":"⚙️","baslik":"Metotlar","metin":"*deposit*, *withdraw*, *toString*."},{"ikon":"🔗","baslik":"Referanslar","metin":"Hesaplar birbirine bağlanır."},{"ikon":"🔢","baslik":"static ve kapsam","metin":"Hesap sayacı ve değişkenin ömrü."},{"ikon":"👈","baslik":"this","metin":"Sınıf tamamlanır."}]}
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {"tip":"ozet","maddeler":["*Abstraction* karmaşıklığı, ilgisiz ayrıntıyı gizleyerek azaltır.","Veri soyutlaması verinin ne olduğunu temsilinden ayırır; işlemsel soyutlama metodun ne yaptığını nasıl yaptığından ayırır.","Tasarım sırası: problemi anla, belirtimi yaz, nesneleri bul, veri ve davranışı ayır, kodla ve sına.","Belirtimdeki isimler veriye (alan), fiiller davranışa (metot) dönüşür.","*Precondition* çağıranın sağlayacağı koşuldur, *postcondition* metodun garanti ettiği sonuçtur. Soruda aksi yoksa ön koşulu kontrol etme.","Tasarım güvenilirliği, hukuku ve fikri mülkiyeti, toplumu ve gizliliği etkiler; programcı bunları düşünmekle yükümlüdür.","FRQ 2'de belirtimden sınıf yazarsın; bu ünitenin geri kalanı o sınıfı adım adım kurar."]}
      ]
    }
  ],
  sorular: [
    {"q":"Bir öğrenci Math.sqrt(49) çağırarak 7.0 elde ediyor ama karekökün nasıl hesaplandığını bilmiyor. Bu durum hangi kavramın örneğidir?","opts":["Veri soyutlaması (data abstraction)","İşlemsel soyutlama (procedural abstraction)","Aşırı yükleme (overloading)","Kapsülleme (encapsulation)"],"a":1,"why":"Bir metodu ne yaptığını bilerek, nasıl yazıldığını bilmeden kullanmak işlemsel soyutlamadır. Veri soyutlaması (A) bir veri tipinin temsilini gizler; burada ortada bir veri tipi değil, bir metot var."},
    {"q":"Bir kantin kartı programında her kartın bir sahibi ve bir bakiyesi var; bakiye para yüklenince ve harcanınca değişiyor. Belirtime en uygun tasarım hangisidir?","opts":["owner ve balance metot, deposit ve spend alan olur","Tek bir main metodu yazılır; veri ve davranış ayrılmaz","Her işlem için ayrı bir sınıf yazılır ve hiçbirinde alan olmaz","Tek sınıf: owner ve balance alan (veri), deposit ve spend metot (davranış)"],"a":3,"why":"İsimler (sahip, bakiye) veriye, fiiller (yüklemek, harcamak) davranışa karşılık gelir. A bu eşleşmeyi tersine çevirir; B ve C nesne temelli tasarımı bozar."},
    {"q":"Aşağıdaki yorumlara göre hangi ifade doğrudur?","fig":{"type":"code","code":"// Precondition: amount > 0\n// Postcondition: balance is decreased by amount\npublic void spend(double amount) {\n    balance = balance - amount;\n}","caption":"spend metodu"},"opts":["Çağıran amount için pozitif bir değer vermekle yükümlüdür; metot bitince bakiye amount kadar azalmıştır","Metot amount sıfırdan küçükse otomatik olarak hata mesajı yazdırır","Postcondition, metot çağrılmadan önce doğru olması gereken koşuldur","Precondition, metot bittikten sonra doğru olan durumu anlatır"],"a":0,"why":"Ön koşulu sağlamak çağıranın, son koşulu sağlamak metodun işidir. C ve D tanımları birbirinin yerine konmuş. B yanlış: yorumlar kodu çalıştırmaz, hiçbir şey yazdırmaz."},
    {"q":"Bir okul uygulaması öğrencilerin harcama geçmişini izin almadan reklam firmalarıyla paylaşıyor. Programın doğru çalıştığını varsayarsak, öncelikle hangi etki alanında sorun vardır?","opts":["Kodun derlenme hızı","Veri soyutlaması","Gizlilik (privacy) ve etik","Metot imzası"],"a":2,"why":"Kişisel verinin izinsiz paylaşılması gizlilik ve etik sorunudur. Program doğru çalışıyor olsa bile bu sorun kalır; güvenilirlik programın doğru sonuç vermesiyle ilgilidir."},
    {"q":"Bir geliştirici withdraw metodunun içini daha hızlı çalışsın diye baştan yazıyor. Metodun adı, parametreleri ve belirtimi aynı kalıyor ve metodu çağıran yüzlerce satır değişmeden çalışmaya devam ediyor. Bunu sağlayan nedir?","opts":["Derleyici metodu otomatik olarak yeniden yazar","İşlemsel soyutlama: çağıranlar yalnızca metodun ne yaptığına bağlıdır, nasıl yaptığına değil","Java sınıfın alanlarını otomatik olarak public yapar","Çağıran kod metodun içini kendi dosyasına kopyalamıştır"],"a":1,"why":"Çağıranlar yalnızca imzaya ve belirtime güvenir; içi davranışı değiştirmeden yenilenebilir. Bu, işlemsel soyutlamanın temel yararıdır. A, C ve D Java'da böyle çalışmaz."}
  ]
};
