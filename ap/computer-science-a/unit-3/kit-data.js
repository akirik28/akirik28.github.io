/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/cs3N/questions.json) */
window.KIT = {
  "store": "csa-u3:v1:",
  "course": "AP Computer Science A",
  "unitLabel": "Unit 3 — Class Creation",
  "episodes": [
    {
      "no": 1,
      "code": "3.1–3.2",
      "slug": "cs301",
      "title": "Soyutlama ve Program Tasarımı",
      "en": "Abstraction, Program Design, and Its Impact",
      "accent": "#FF8A65",
      "defter": "cs301",
      "sessiz": true,
      "seconds": 308,
      "terms": [
        "Abstraction",
        "Procedural abstraction",
        "Data abstraction",
        "Program specification",
        "Precondition",
        "Postcondition",
        "Reliability",
        "Privacy",
        "Intellectual property"
      ],
      "questions": [
        {
          "q": "Bir sınıfın alanlarının bellekte nasıl tutulduğunu düşünmeden, nesneyi yalnızca \"sahibi ve bakiyesi olan bir kart\" diye düşünmek hangi kavrama örnektir?",
          "opts": [
            "Veri soyutlaması (data abstraction)",
            "İşlemsel soyutlama (procedural abstraction)",
            "Metot aşırı yükleme (overloading)",
            "Ön koşul (precondition)"
          ],
          "a": 0,
          "why": "Bir veri tipinin ne olduğunu, nasıl temsil edildiğinden ayırmak *data abstraction*'dır. *Procedural abstraction* bir metodun ne yaptığını, nasıl yaptığından ayırır."
        },
        {
          "q": "Belirtim: \"Otopark programı her aracın plakasını ve giriş saatini tutar; araç çıkarken ücret hesaplanır.\" Hangisi bir metoda (davranışa) dönüşmelidir?",
          "opts": [
            "Aracın plakası",
            "Giriş saati",
            "Çıkışta ücreti hesaplamak",
            "Otoparkın adı"
          ],
          "a": 2,
          "why": "Belirtimdeki isimler (plaka, giriş saati) veriye, fiiller (hesaplamak) metoda dönüşür. Ücreti hesaplamak bir davranıştır."
        },
        {
          "q": "Aşağıdaki yorumlara göre sumTo(-3) çağrılırsa hangisi doğrudur?",
          "opts": [
            "Metot 0 döndürmek zorundadır.",
            "Metot bir hata mesajı yazdırmak zorundadır.",
            "Ön koşul sağlanmadığı için metodun ne yapacağı belirtilmemiştir; doğru argümanı vermek çağıranın sorumluluğudur.",
            "Derleyici bu çağrıyı reddeder."
          ],
          "a": 2,
          "why": "*Precondition*'ı sağlamak çağıranın işidir. Sağlanmazsa metodun davranışı belirtimde tanımlı değildir. Yorumlar kodu çalıştırmaz ve derleyici onları denetlemez.",
          "fig": {
            "type": "code",
            "code": "// Precondition: n > 0\n// Postcondition: returns 1 + 2 + ... + n\npublic int sumTo(int n)"
          }
        },
        {
          "q": "Bir sınav uygulaması, başka bir geliştiricinin açık kaynak kodunu, lisansın istediği kaynak gösterimini yapmadan kullanıyor. Program doğru çalışıyor. Sorun öncelikle hangi alandadır?",
          "opts": [
            "Güvenilirlik (reliability)",
            "Gizlilik (privacy)",
            "Veri soyutlaması",
            "Fikri mülkiyet ve lisans"
          ],
          "a": 3,
          "why": "Başkasının kodunu lisans koşullarına uymadan kullanmak hukuk ve fikri mülkiyet sorunudur. Program doğru çalıştığı için güvenilirlik sorunu yok; kişisel veri de söz konusu değil."
        },
        {
          "q": "Kantin kartı programı, bakiye tam 0 iken yapılan ödeme isteğinde çöküyor. En uygun önlem hangisidir?",
          "opts": [
            "Uygulamayı yalnızca bakiyesi yüksek öğrencilere açmak",
            "Sınır durumlarını (bakiye 0, çok büyük tutar) içeren testler yapıp hatayı düzeltmek",
            "Bakiye alanını public yapmak",
            "Ön koşul yorumlarını silmek"
          ],
          "a": 1,
          "why": "Beklenmedik girdide çökmek bir güvenilirlik sorunudur. Çözüm, sınır durumlarını sınayıp kodu düzeltmektir. Alanı *public* yapmak ya da yorumları silmek sorunu çözmez."
        }
      ]
    },
    {
      "no": 2,
      "code": "3.3",
      "slug": "cs302",
      "title": "Bir Sınıfın Anatomisi",
      "en": "Anatomy of a Class",
      "accent": "#B77AD9",
      "defter": "cs302",
      "sessiz": true,
      "seconds": 282,
      "terms": [
        "Class",
        "Object",
        "Instance variable",
        "private",
        "public",
        "Encapsulation",
        "Accessor",
        "Mutator"
      ],
      "questions": [
        {
          "q": "Belirtim: \"WaterBottle sınıfı şişenin kapasitesini (ml) ve içindeki su miktarını (ml) tam sayı olarak tutar.\" Hangisi en uygun alan bildirimidir?",
          "opts": [
            "public int capacity; public int amount;",
            "int capacity(); int amount();",
            "private int capacity; private int amount;",
            "private capacity; private amount;"
          ],
          "a": 2,
          "why": "Alanlar *private*, tip ve ad sırasıyla yazılır. A çalışır ama kapsüllemeyi bozar; B metot gibi görünen geçersiz bir yazım; D'de tip eksik, derlenmez."
        },
        {
          "q": "Aşağıdaki kod LunchCard dışındaki bir sınıfta yazılıyor. Ne olur?",
          "opts": [
            "50 yazdırır, sonra bakiye 0 olur.",
            "Kod derlenmez: balance alanı private.",
            "30 yazdırır.",
            "Çalışma anında NullPointerException fırlatılır."
          ],
          "a": 1,
          "why": "*balance* *private* olduğu için başka bir sınıftan c.balance yazmak derleme hatasıdır. Bir satır derlenmezse program hiç çalışmaz; hiçbir şey yazdırılmaz.",
          "fig": {
            "type": "code",
            "code": "LunchCard c = new LunchCard(\"Mert\", 30);\nc.topUp(20);\nSystem.out.println(c.getBalance());\nc.balance = 0;"
          }
        },
        {
          "q": "LunchCard sınıfındaki şu metotlardan hangisi bir mutator'dır?",
          "opts": [
            "public int getBalance()",
            "public String getOwner()",
            "public boolean isEmpty()",
            "public void topUp(int amount)"
          ],
          "a": 3,
          "why": "*topUp* bakiyeyi değiştirir: *mutator*. Öteki üçü yalnızca bilgi okuyup döndürür; nesnenin durumunu değiştirmez (*accessor*)."
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "55",
            "1540",
            "25",
            "30"
          ],
          "a": 0,
          "why": "x: 10 + 5 = 15. y: 10 + 15 · 2 = 40. println içinde iki *int* toplanır (yazı yok): 15 + 40 = 55. Her nesnenin kendi *balance*'ı vardır.",
          "fig": {
            "type": "code",
            "code": "LunchCard x = new LunchCard(\"Ece\", 10);\nLunchCard y = new LunchCard(\"Ece\", 10);\nx.topUp(5);\ny.topUp(x.getBalance() * 2);\nSystem.out.println(x.getBalance() + y.getBalance());"
          }
        },
        {
          "q": "FRQ 2'de bir sınıf yazarken hangisi puan kaybettirir?",
          "opts": [
            "Alanları private yazmak",
            "Alanları public yazmak",
            "Metot başlıklarını soruda verildiği gibi yazmak",
            "Constructor'da her alana bir değer vermek"
          ],
          "a": 1,
          "why": "*Instance variable*'lar *private* olmalı; *public* alan derlenir ama kapsüllemeyi bozar ve puan kaybettirir. Öteki üçü doğru alışkanlıklar."
        }
      ]
    },
    {
      "no": 3,
      "code": "3.4",
      "slug": "cs303",
      "title": "Constructor Yazmak",
      "en": "Constructors",
      "accent": "#E86A92",
      "defter": "cs303",
      "sessiz": true,
      "seconds": 315,
      "terms": [
        "Constructor",
        "new",
        "Parameter",
        "Overloading",
        "Default value",
        "Default constructor",
        "null"
      ],
      "questions": [
        {
          "q": "Ticket sınıfı için geçerli bir constructor başlığı hangisidir?",
          "opts": [
            "public void Ticket(int n)",
            "public int Ticket(int n)",
            "public Ticket(int n)",
            "Ticket public(int n)"
          ],
          "a": 2,
          "why": "*Constructor* sınıfla aynı adı taşır ve dönüş tipi yazılmaz. A ve B'de dönüş tipi olduğu için bunlar sıradan metotlardır; D'nin sırası geçersizdir."
        },
        {
          "q": "Aşağıdaki kod ne yazdırır?",
          "opts": [
            "null 7 false",
            " 7 false",
            "7",
            "Derlenmez: name hiç atanmadı."
          ],
          "a": 0,
          "why": "Atanmayan alanlar varsayılan değer alır: *String* için *null*, *boolean* için *false*. Yazıyla birleşen *null*, \"null\" olarak görünür. Atanmamış alan derleme hatası değildir.",
          "fig": {
            "type": "code",
            "code": "// alanlar: private String name; private int power; private boolean active;\npublic Robot(int p) { power = p; }\npublic String info() { return name + \" \" + power + \" \" + active; }\n// istemci:\nSystem.out.println(new Robot(7).info());"
          }
        },
        {
          "q": "Lamp sınıfındaki tek constructor public Lamp(int level) başlığına sahip. Başka bir sınıfta Lamp x = new Lamp(); yazılırsa ne olur?",
          "opts": [
            "Derlenir; level 0 olur.",
            "Derlenmez: parametresiz constructor yok.",
            "Çalışma anında NullPointerException fırlatılır.",
            "Derlenir; level null olur."
          ],
          "a": 1,
          "why": "Sınıfa bir *constructor* yazıldığı anda Java parametresiz (varsayılan) *constructor*'ı eklemez. new Lamp() ile eşleşen başlık olmadığı için kod derlenmez."
        },
        {
          "q": "LunchCard'ın constructor'ı aşağıdaki gibi yazılmış. getOwner owner alanını, getBalance balance alanını döndürüyor. Kod ne yazdırır?",
          "opts": [
            "Ece 40",
            "null 0",
            "Derlenmez.",
            "null 40"
          ],
          "a": 3,
          "why": "String owner = name; satırı alanı değil, yeni bir yerel değişkeni doldurur; alan *null* kalır. *balance* doğru atanır: 40. Kod derlenir.",
          "fig": {
            "type": "code",
            "code": "public LunchCard(String name, int start) {\n  String owner = name;\n  balance = start;\n}\n// istemci:\nLunchCard c = new LunchCard(\"Ece\", 40);\nSystem.out.println(c.getOwner() + \" \" + c.getBalance());"
          }
        },
        {
          "q": "Pen sınıfında iki constructor var; getInk ink alanını döndürüyor. Kod ne yazdırır?",
          "opts": [
            "100 100",
            "30 100",
            "30 0",
            "Derlenmez: iki constructor aynı adı taşıyamaz."
          ],
          "a": 1,
          "why": "(\"mavi\", 30) iki parametreli *constructor*'la eşleşir: ink 30. (\"siyah\") tek parametreliyle eşleşir: ink 100. Parametre listeleri farklı olduğu için iki *constructor* yazılabilir (*overloading*).",
          "fig": {
            "type": "code",
            "code": "public Pen(String c) { color = c; ink = 100; }\npublic Pen(String c, int i) { color = c; ink = i; }\n// istemci:\nPen p = new Pen(\"mavi\", 30);\nPen q = new Pen(\"siyah\");\nSystem.out.println(p.getInk() + \" \" + q.getInk());"
          }
        }
      ]
    },
    {
      "no": 4,
      "code": "3.5-1",
      "slug": "cs304",
      "title": "Metot Yazmak: void, return ve Mutator",
      "en": "Writing Methods: void, return, Accessors, and Mutators",
      "accent": "#5BC0EB",
      "defter": "cs304",
      "defterBaslik": "Metot Yazmak",
      "sessiz": true,
      "seconds": 294,
      "terms": [
        "Method header",
        "Return type",
        "void",
        "return",
        "Parameter list",
        "Accessor",
        "Mutator",
        "missing return statement"
      ],
      "questions": [
        {
          "q": "Aşağıdaki metot için hangisi doğrudur?",
          "opts": [
            "n <= 100 ise false döndürür.",
            "Derlenmez: missing return statement.",
            "Her zaman true döndürür.",
            "n <= 100 ise null döndürür."
          ],
          "a": 1,
          "why": "Koşul yanlış olduğunda hiçbir *return* çalışmaz. Değer döndüren bir metodun her yolu *return* ile bitmeli; bitmediği için derleyici hata verir.",
          "fig": {
            "type": "code",
            "code": "public boolean isBig(int n) {\n  if (n > 100) {\n    return true;\n  }\n}"
          }
        },
        {
          "q": "LunchCard'da public void topUp(int amount) var. Başka bir sınıfta int x = c.topUp(10); yazılırsa ne olur?",
          "opts": [
            "x 10 olur.",
            "x yeni bakiye olur.",
            "Derlenmez: topUp bir değer döndürmüyor.",
            "x 0 olur."
          ],
          "a": 2,
          "why": "*void* metot değer döndürmez; sonucu bir değişkene atanamaz. c.topUp(10); tek başına yazılmalı."
        },
        {
          "q": "pay metodu fiyat bakiyeden büyükse false döndürüp bakiyeyi değiştirmiyor; değilse fiyatı düşüp true döndürüyor. Aşağıdaki kod ne yazdırır?",
          "opts": [
            "2 10",
            "3 -60",
            "2 60",
            "1 40"
          ],
          "a": 0,
          "why": "90 → pay(50) true, 40 → pay(50) false (40 kalır) → topUp(20) 60 → pay(50) true, 10. İki ödeme oldu: ok 2, bakiye 10.",
          "fig": {
            "type": "code",
            "code": "LunchCard c = new LunchCard(\"Selin\", 90);\nint ok = 0;\nif (c.pay(50)) { ok++; }\nif (c.pay(50)) { ok++; }\nc.topUp(20);\nif (c.pay(50)) { ok++; }\nSystem.out.println(ok + \" \" + c.getBalance());"
          }
        },
        {
          "q": "isEmpty metodu bakiye 0 ise true, değilse false döndürmeli ve hiçbir alanı değiştirmemeli. Hangisi doğru yazılmıştır?",
          "opts": [
            "public void isEmpty() { return balance == 0; }",
            "public boolean isEmpty() { balance = 0; return true; }",
            "public boolean isEmpty() { if (balance == 0) { return true; } }",
            "public boolean isEmpty() { return balance == 0; }"
          ],
          "a": 3,
          "why": "D karşılaştırmanın *boolean* sonucunu döndürür. A'da *void* ile *return* değeri çelişir; B bakiyeyi sıfırlar (*accessor* olmaktan çıkar); C'de koşul yanlışsa *return* yok, derlenmez."
        },
        {
          "q": "Aşağıdaki metot LunchCard'ın içinde. c.test(14), c.test(15) ve c.test(5) sırasıyla ne döndürür?",
          "opts": [
            "4, 5, 15",
            "7, 5, 2",
            "7, 5, 15",
            "7, 15, 15"
          ],
          "a": 2,
          "why": "14 çift: 14 / 2 = 7 döner ve metot biter. 15 tek ve 10'dan büyük: 15 − 10 = 5. 5 tek ve 10'dan büyük değil: 5 · 3 = 15. İlk çalışan *return* metodu bitirir.",
          "fig": {
            "type": "code",
            "code": "public int test(int n) {\n  if (n % 2 == 0) { return n / 2; }\n  if (n > 10) { return n - 10; }\n  return n * 3;\n}"
          }
        }
      ]
    },
    {
      "no": 5,
      "code": "3.5-2",
      "slug": "cs305",
      "title": "toString, Parametre Kopyası ve Yardımcı Metotlar",
      "en": "Writing Methods: toString, Parameters, and Helper Methods",
      "accent": "#2FD6B9",
      "defter": "cs304",
      "defterBaslik": "Metot Yazmak",
      "sessiz": true,
      "seconds": 289,
      "terms": [
        "toString",
        "Pass by value",
        "Parameter",
        "Argument",
        "Helper method",
        "Method overloading",
        "Method signature"
      ],
      "questions": [
        {
          "q": "Pet sınıfının name alanını yazı olarak veren toString metodu hangisidir?",
          "opts": [
            "public void toString() { System.out.println(name); }",
            "public String toString() { return name; }",
            "public String toString(String s) { return name; }",
            "private int toString() { return 0; }"
          ],
          "a": 1,
          "why": "*toString*'in başlığı public String toString() olmalı ve yazıyı *return* ile döndürmelidir. A derlenmez bile: void toString, Object'teki String toString()'in yerine geçemez (dönüş tipi uyuşmaz); C'nin parametresi var; D'nin dönüş tipi ve erişimi yanlış."
        },
        {
          "q": "Pet sınıfında toString yazılmamış. Pet p = new Pet(\"Pamuk\"); System.out.println(p); ne yazdırır?",
          "opts": [
            "Pamuk",
            "Kod derlenmez.",
            "Pet@ ile başlayan, adres benzeri bir yazı",
            "null"
          ],
          "a": 2,
          "why": "*toString* yazılmazsa Java'nın hazır sürümü çalışır: sınıf adı, @ işareti ve bir sayı. Kod derlenir; alanlar kendiliğinden yazdırılmaz."
        },
        {
          "q": "c'nin bakiyesi 70 iken aşağıdaki kod ne yazdırır?",
          "opts": [
            "0 45",
            "25 70",
            "0 70",
            "25 45"
          ],
          "a": 3,
          "why": "*amount*, m'nin kopyasıdır. Bakiye 70 − 25 = 45 olur; amount = 0 yalnızca kopyayı değiştirir, m 25 kalır.",
          "fig": {
            "type": "code",
            "code": "public void spend(int amount) {\n  balance -= amount;\n  amount = 0;\n}\n// istemci:\nint m = 25;\nc.spend(m);\nSystem.out.println(m + \" \" + c.getBalance());"
          }
        },
        {
          "q": "Bir sınıfta zaten public int total(int a) metodu var. Aşağıdakilerden hangisi aynı sınıfa eklenirse derlenmez?",
          "opts": [
            "public int total(int a, int b)",
            "public double total(int a)",
            "public int total(double a)",
            "public int total()"
          ],
          "a": 1,
          "why": "*Overloading* için parametre listesi farklı olmalı. B'nin parametre listesi (int) ile aynı, yalnız dönüş tipi farklı; Java iki metodu ayıramaz. Öteki üçünün parametre listesi farklı."
        },
        {
          "q": "c'nin bakiyesi 100 iken c.buyMany(35, 4) çağrılıyor. Metot ne döndürür ve bakiye ne olur?",
          "opts": [
            "2 döndürür, bakiye 30",
            "4 döndürür, bakiye -40",
            "3 döndürür, bakiye 0",
            "2 döndürür, bakiye 65"
          ],
          "a": 0,
          "why": "100 → 65 → 30; üçüncü ve dördüncü turda 35, 30'a sığmaz, *canAfford* false döner. İki alım yapıldı, bakiye 30. Yardımcı metot aynı sınıftan noktasız çağrılır.",
          "fig": {
            "type": "code",
            "code": "private boolean canAfford(int price) { return price <= balance; }\npublic int buyMany(int price, int n) {\n  int bought = 0;\n  for (int i = 0; i < n; i++) {\n    if (canAfford(price)) { balance -= price; bought++; }\n  }\n  return bought;\n}"
          }
        }
      ]
    },
    {
      "no": 6,
      "code": "3.6",
      "slug": "cs306",
      "title": "Nesne Referansı Geçirmek ve Döndürmek",
      "en": "Methods: Passing and Returning References of an Object",
      "accent": "#9BC53D",
      "defter": "cs305",
      "sessiz": true,
      "seconds": 297,
      "terms": [
        "Reference",
        "Reference copy",
        "Alias",
        "Object parameter",
        "Return a reference",
        "null",
        "NullPointerException",
        "Immutable"
      ],
      "questions": [
        {
          "q": "a'nın bakiyesi 50, b'nin bakiyesi 10. Aşağıdaki give metodu LunchCard'ın içinde. Kod ne yazdırır?",
          "opts": [
            "25 30",
            "40 15",
            "25 15",
            "10 15"
          ],
          "a": 2,
          "why": "*other*, b ile aynı kartı gösterir: b 10 + 15 = 25 olur. n, k'nin kopyasıdır; n = n * 2 yalnız kopyayı değiştirir, k 15 kalır.",
          "fig": {
            "type": "code",
            "code": "public void give(LunchCard other, int n) {\n  other.topUp(n);\n  n = n * 2;\n}\n// istemci:\nint k = 15;\na.give(b, k);\nSystem.out.println(b.getBalance() + \" \" + k);"
          }
        },
        {
          "q": "b'nin bakiyesi 10. Aşağıdaki reset metodu LunchCard'ın içinde. a.reset(b); çalıştıktan sonra b.getBalance() ne döndürür?",
          "opts": [
            "0",
            "10",
            "50",
            "NullPointerException fırlatılır."
          ],
          "a": 1,
          "why": "Parametreye yeni bir nesne atamak yalnız *other*'ın okunu çevirir; b hâlâ eski kartı gösterir. b'nin kartına hiç dokunulmadı: 10.",
          "fig": {
            "type": "code",
            "code": "public void reset(LunchCard other) {\n  other = new LunchCard(\"Yeni\", 0);\n}"
          }
        },
        {
          "q": "a ve b iki ayrı kart; b'nin bakiyesi 10. getBackup backup alanını döndürüyor. Kod ne yazdırır?",
          "opts": [
            "10 false",
            "40 false",
            "10 true",
            "40 true"
          ],
          "a": 3,
          "why": "getBackup b'nin kopyasını değil, b'ye giden referansın kopyasını döndürür. x ve b *alias*'tır: x.topUp(30) b'yi 40 yapar ve x == b *true*'dur.",
          "fig": {
            "type": "code",
            "code": "a.setBackup(b);\nLunchCard x = a.getBackup();\nx.topUp(30);\nSystem.out.println(b.getBalance() + \" \" + (x == b));"
          }
        },
        {
          "q": "Yeni açılan bir kartta setBackup hiç çağrılmadı. c.getBackup().topUp(5); satırı çalışınca ne olur?",
          "opts": [
            "NullPointerException fırlatılır.",
            "backup varsayılan olarak c'nin kendisini gösterir; c'ye 5 yüklenir.",
            "Kod derlenmez.",
            "Hiçbir şey olmaz; satır atlanır."
          ],
          "a": 0,
          "why": "Nesne tipindeki alanın varsayılan değeri *null*'dır. getBackup *null* döndürür ve *null* üzerinden metot çağırmak çalışma anında *NullPointerException* verir. Kod derlenir."
        },
        {
          "q": "a.getOwner() \"Ece\" döndürüyor. Kod ne yazdırır?",
          "opts": [
            "Ec Ec",
            "Ece Ec",
            "Ece Ece",
            "Ec Ece"
          ],
          "a": 1,
          "why": "*String* *immutable*'dır. substring yeni bir *String* üretir ve s ona döner; karttaki \"Ece\" değişmez.",
          "fig": {
            "type": "code",
            "code": "String s = a.getOwner();\ns = s.substring(0, 2);\nSystem.out.println(a.getOwner() + \" \" + s);"
          }
        }
      ]
    },
    {
      "no": 7,
      "code": "3.7",
      "slug": "cs307",
      "title": "static Değişkenler ve Metotlar",
      "en": "Class Variables and Methods",
      "accent": "#F25F5C",
      "defter": "cs306",
      "defterBaslik": "static Üyeler, Kapsam ve Erişim",
      "sessiz": true,
      "seconds": 285,
      "terms": [
        "static",
        "Class variable",
        "Instance variable",
        "Class method",
        "static final",
        "Constant",
        "static context"
      ],
      "questions": [
        {
          "q": "Badge sınıfı aşağıdaki gibi. Üç Badge nesnesi a, b, c bu sırayla oluşturuluyor. System.out.println(c.getCode() + \" \" + Badge.getNext()); ne yazdırır?",
          "opts": [
            "110 115",
            "115 115",
            "100 115",
            "110 110"
          ],
          "a": 0,
          "why": "*next* ortak: a 100 alır (next 105), b 105 alır (next 110), c 110 alır (next 115). *code* her nesnede ayrıdır ve atandığı anki değeri tutar.",
          "fig": {
            "type": "code",
            "code": "private static int next = 100;\nprivate int code;\npublic Badge() {\n  code = next;\n  next += 5;\n}\npublic int getCode() { return code; }\npublic static int getNext() { return next; }"
          }
        },
        {
          "q": "Order sınıfında private static int count ve private int id alanları var. Aşağıdaki metotlardan hangisi derlenmez?",
          "opts": [
            "public static int getCount() { return count; }",
            "public static int getId() { return id; }",
            "public int getId() { return id + count; }",
            "public void show() { System.out.println(count); }"
          ],
          "a": 1,
          "why": "*static* metot hiçbir nesne adına çalışmaz; *instance* alan id'yi kullanamaz (non-static variable cannot be referenced from a static context). Nesne metotları ise *static* değişkeni kullanabilir."
        },
        {
          "q": "Club sınıfı aşağıdaki gibi. Kod ne yazdırır?",
          "opts": [
            "1 1",
            "2 2",
            "1 2",
            "0 2"
          ],
          "a": 2,
          "why": "first, ilk nesne oluşturulduktan hemen sonraki değer: 1. *members* *static* olduğu için ikinci nesne onu 2 yapar ve a.getMembers() da aynı ortak değeri okur: 2.",
          "fig": {
            "type": "code",
            "code": "private static int members = 0;\nprivate String name;\npublic Club(String n) { name = n; members++; }\npublic int getMembers() { return members; }\nClub a = new Club(\"Satranç\");\nint first = a.getMembers();\nClub b = new Club(\"Robotik\");\nSystem.out.println(first + \" \" + a.getMembers());"
          }
        },
        {
          "q": "Bir sınıfta private static final int LIMIT = 3; var. Bir metodun içinde LIMIT++; yazılırsa ne olur?",
          "opts": [
            "LIMIT 4 olur.",
            "Her nesnenin kendi LIMIT'i ayrı ayrı artar.",
            "Çalışma anında hata verir.",
            "Kod derlenmez: final bir değişken değiştirilemez."
          ],
          "a": 3,
          "why": "*final* değişken bir kez atanır ve bir daha değiştirilemez; derleyici LIMIT++ satırını reddeder. *static* olduğu için de nesne başına ayrı kopyası yoktur."
        },
        {
          "q": "Order sınıfında public static int getCount() metodu var. Hiç nesne oluşturmadan sayıyı yazdırmanın doğru yolu hangisidir?",
          "opts": [
            "System.out.println(getCount(Order));",
            "System.out.println(Order.getCount());",
            "System.out.println(new.getCount());",
            "System.out.println(Order.count);"
          ],
          "a": 1,
          "why": "*static* metot sınıf adıyla çağrılır: ClassName.method(). D derlenmez: *count* *private* olduğu için başka bir sınıftan ona doğrudan erişilemez."
        }
      ]
    },
    {
      "no": 8,
      "code": "3.8",
      "slug": "cs308",
      "title": "Kapsam ve Erişim",
      "en": "Scope and Access",
      "accent": "#7C95FF",
      "defter": "cs306",
      "defterBaslik": "static Üyeler, Kapsam ve Erişim",
      "sessiz": true,
      "seconds": 296,
      "terms": [
        "Scope",
        "Local variable",
        "Parameter",
        "Instance variable",
        "Block",
        "Shadowing",
        "private",
        "Access"
      ],
      "questions": [
        {
          "q": "Aşağıdaki kod için hangisi doğrudur?",
          "opts": [
            "14 9 yazdırır.",
            "14 0 yazdırır.",
            "Derlenmez: sq son satırda görünmez.",
            "Derlenmez: sum döngünün içinde değiştirilemez."
          ],
          "a": 2,
          "why": "sq, döngü bloğunun içinde tanımlandı; blok bitince yok olur. Son satırdaki sq derleme hatasıdır (cannot find symbol). sum ise döngüden önce tanımlandığı için her yerde görünür.",
          "fig": {
            "type": "code",
            "code": "int sum = 0;\nfor (int i = 1; i <= 3; i++) {\n  int sq = i * i;\n  sum += sq;\n}\nSystem.out.println(sum + \" \" + sq);"
          }
        },
        {
          "q": "Clock sınıfında private int hour; alanı ve aşağıdaki constructor var; getHour hour'u döndürüyor. new Clock(9).getHour() ne döndürür?",
          "opts": [
            "9",
            "0",
            "null",
            "Kod derlenmez."
          ],
          "a": 1,
          "why": "Parametrenin adı alanla aynı olduğu için içeride hour, parametreyi gösterir (*shadowing*). Parametre kendine atanır; alan varsayılan 0 kalır. Kod derlenir.",
          "fig": {
            "type": "code",
            "code": "public Clock(int hour) {\n  hour = hour;\n}"
          }
        },
        {
          "q": "Aşağıdaki sınıf parçasında bir Lamp nesnesi için önce raise(), sonra getLevel() çağrılıyor. getLevel() ne döndürür?",
          "opts": [
            "9",
            "8",
            "6",
            "5"
          ],
          "a": 3,
          "why": "raise içindeki int level = 8; yeni bir yerel değişken tanımlar ve alanı gölgeler. level++ yerel değişkeni 9 yapar; alan 5 kalır.",
          "fig": {
            "type": "code",
            "code": "private int level = 5;\npublic void raise() {\n  int level = 8;\n  level++;\n}\npublic int getLevel() { return level; }"
          }
        },
        {
          "q": "Thermostat sınıfının içinde public boolean isWarmerThan(Thermostat other) { return temp > other.temp; } yazılıyor; temp private. Hangisi doğrudur?",
          "opts": [
            "Geçerlidir: kod Thermostat sınıfının içinde olduğu için other'ın private alanına erişebilir.",
            "Derlenmez: başka bir nesnenin private alanına erişilemez.",
            "Yalnızca other == this ise geçerlidir.",
            "Derlenir ama çalışma anında hata verir."
          ],
          "a": 0,
          "why": "*private* sınıf düzeyinde bir kuraldır: aynı sınıfın kodu, o sınıftan herhangi bir nesnenin *private* alanına erişebilir. Başka bir sınıftan t.temp yazmak ise derlenmez."
        },
        {
          "q": "Aşağıdaki iki metot aynı sınıfta; temp bir instance variable. cool metodu için hangisi doğrudur?",
          "opts": [
            "temp'i 0 yapar.",
            "Derlenmez: step yalnızca warmUp içinde görünür.",
            "temp'i, warmUp'a en son verilen step kadar azaltır.",
            "temp'i next'e eşitler."
          ],
          "a": 1,
          "why": "step, warmUp'ın parametresidir; kapsamı yalnız o metottur. cool içinde step diye bir değişken yok: derleme hatası (cannot find symbol).",
          "fig": {
            "type": "code",
            "code": "public void warmUp(int step) {\n  int next = temp + step;\n  temp = next;\n}\npublic void cool() {\n  temp = temp - step;\n}"
          }
        }
      ]
    }
  ],
  "final": []
};
