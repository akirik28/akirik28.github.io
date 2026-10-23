/* Bu dosya üretilir: ap-videolar/tools/build-deneme-data.mjs (elle düzenleme; kaynak: tools/out/deneme-csa-u1.json) */
window.DENEME = {
  "store": "csa-u1:v1:",
  "course": "AP Computer Science A",
  "unit": "Unit 1 — Using Objects and Methods",
  "topics": {
    "1.1": "İlk Program: Algoritma, Derleyici, Hatalar",
    "1.2": "Değişkenler ve İlkel Tipler",
    "1.3": "İfadeler: Tam Sayı Bölmesi ve Mod",
    "1.5": "Casting, Yuvarlama ve Taşma",
    "1.6": "Bileşik Operatörler ve İzleme Tablosu",
    "1.7–1.10": "API, Metot İmzası ve Static Metotlar",
    "1.11": "Math Sınıfı ve Rastgele Sayılar",
    "1.12–1.14": "Nesneler, Referanslar ve null",
    "1.15-1": "String: Birleştirme ve substring",
    "1.15-2": "String: indexOf, equals, compareTo"
  },
  "tests": [
    {
      "no": 1,
      "level": "Isınma",
      "minutes": 20,
      "questions": [
        {
          "t": "1.1",
          "q": "What is printed as a result of executing the code segment? In the choices, a slash ( / ) marks the start of a new line of output.",
          "o": [
            "Good / night / See you / soon",
            "Goodnight See you soon",
            "Goodnight / See you soon",
            "Good night / See you soon"
          ],
          "a": 2,
          "w": "*print* yazar ve imleci aynı satırda bırakır; *println* yazdıktan sonra alt satıra geçer. Bu yüzden Good ile night bitişik, See you ile \" soon\" aynı satırdadır. Her komutu ayrı satır sanmak ilk şıkkı, *println*'in satır atlatmasını unutmak ikinciyi verir. Araya boşluk koyan yalnız *string literal*'in içindeki boşluktur; \"night\"ın başında boşluk yok.",
          "fig": {
            "type": "code",
            "code": "System.out.print(\"Good\");\nSystem.out.println(\"night\");\nSystem.out.print(\"See you\");\nSystem.out.println(\" soon\");"
          }
        },
        {
          "t": "1.1",
          "q": "The following code segment is intended to print the average of 70 and 90, which is 80. Which of the following best describes what happens when the code segment is executed?",
          "o": [
            "115 is printed because of a logic error",
            "80 is printed",
            "The code does not compile because of a syntax error",
            "An ArithmeticException is thrown at run time"
          ],
          "a": 0,
          "w": "Bölme toplamadan önce yapılır: 90 / 2 = 45, sonra 70 + 45 = 115. Kod derlenir ve çalışır ama yanlış sonuç verir; buna *logic error* denir. Dil kuralı ihlali olmadığı için *syntax error* yok, sıfıra bölme olmadığı için *exception* da yok. Doğrusu (70 + 90) / 2.",
          "fig": {
            "type": "code",
            "code": "int avg = 70 + 90 / 2;\nSystem.out.println(avg);"
          }
        },
        {
          "t": "1.2",
          "q": "Which of the following variable declarations will cause a compile-time error?",
          "o": [
            "double rate = 4;",
            "boolean done = false;",
            "int total = 4.5;",
            "int count = 7 / 2;"
          ],
          "a": 2,
          "w": "4.5 bir *double*; *int* kutusuna konursa ondalık kısım kaybolacağı için derleyici izin vermez (*possible lossy conversion*). Tersi serbesttir: double rate = 4; geçerlidir, 4 otomatik olarak 4.0 olur (*widening*). 7 / 2 iki *int*'in bölümüdür, sonucu 3 bir *int*'tir; derlenir."
        },
        {
          "t": "1.2",
          "q": "What is printed as a result of executing the following code segment, which copies one variable into another?",
          "o": [
            "11 6",
            "11 11",
            "6 6",
            "6 11"
          ],
          "a": 0,
          "w": "b = a; satırı o anki değeri (6) b'ye kopyalar; iki değişken arasında kalıcı bir bağ kurmaz. a sonradan 11 olunca b 6 olarak kalır. \"11 11\" atamayı kalıcı bağ sanmaktan gelir. *Primitive* tiplerde her değişken kendi kutusunu tutar.",
          "fig": {
            "type": "code",
            "code": "int a = 6;\nint b = a;\na = 11;\nSystem.out.println(a + \" \" + b);"
          }
        },
        {
          "t": "1.3",
          "q": "What is printed as a result of executing the following statement that uses division and the remainder operator?",
          "o": [
            "7",
            "7.75",
            "4",
            "8"
          ],
          "a": 0,
          "w": "İki *int* bölününce sonuç da *int* olur ve ondalık kısım atılır (*integer division*): 19 / 4 = 4. 19 % 4 kalandır (*remainder*): 3. Toplam 4 + 3 = 7. 7.75 gerçek bölmeyi düşünmekten, 4 yalnızca bölümü almaktan gelir.",
          "fig": {
            "type": "code",
            "code": "System.out.println(19 / 4 + 19 % 4);"
          }
        },
        {
          "t": "1.3",
          "q": "Consider the following code segment, which stores the result of a division in a double variable. What is printed?",
          "o": [
            "4.5",
            "4",
            "4.0",
            "5.0"
          ],
          "a": 2,
          "w": "Sağ taraf önce hesaplanır: 9 / 2 iki *int*'in bölümü, sonuç 4. Ancak sonra *double* değişkene konur ve 4.0 olur. Değişkenin *double* olması bölmeyi geriye dönük düzeltmez; 4.5 için en az bir tarafın *double* olması gerekir (9.0 / 2). Konsol *double*'ı her zaman ondalık noktayla yazar, bu yüzden \"4\" değil.",
          "fig": {
            "type": "code",
            "code": "double result = 9 / 2;\nSystem.out.println(result);"
          }
        },
        {
          "t": "1.5",
          "q": "What is printed as a result of executing the following code segment, which casts in two different places?",
          "o": [
            "4.5 4.5",
            "4.5 4.0",
            "4.0 4.0",
            "4.0 4.5"
          ],
          "a": 1,
          "w": "*Cast* sağındaki ilk değere uygulanır. x'te önce n 9.0 olur, sonra 9.0 / 2 = 4.5. y'de parantez önce hesaplanır: 9 / 2 = 4 (*integer division*), *cast* bunu yalnız 4.0'a çevirir; kaybolan 0.5 geri gelmez. Parantezin yeri sonucu değiştirir.",
          "fig": {
            "type": "code",
            "code": "int n = 9;\ndouble x = (double) n / 2;\ndouble y = (double) (n / 2);\nSystem.out.println(x + \" \" + y);"
          }
        },
        {
          "t": "1.5",
          "q": "What is printed as a result of executing the following code segment, which converts a price to whole dollars?",
          "o": [
            "9",
            "8.97",
            "8",
            "8.0"
          ],
          "a": 2,
          "w": "(int) *cast*'i yuvarlamaz, ondalık kısmı keser (*truncation*): 8.97 → 8. 9 yuvarlama sanmaktan gelir; yuvarlamak için (int) (price + 0.5) gerekir. Değişken *int* olduğu için çıktı \"8.0\" değil \"8\"dir.",
          "fig": {
            "type": "code",
            "code": "double price = 8.97;\nint dollars = (int) price;\nSystem.out.println(dollars);"
          }
        },
        {
          "t": "1.6",
          "q": "What is printed as a result of executing the following code segment that uses compound assignment operators?",
          "o": [
            "15",
            "18",
            "10",
            "8"
          ],
          "a": 0,
          "w": "Satır satır izle (*trace*): 5 → 9 → 18 → 15. k += 4, k = k + 4 demektir; çarpma ataması da k = k × 2 demektir. 18 son satırı atlamaktan, 10 ise her şeyi tek bir ifade sanıp 5 + 4 × 2 − 3 hesaplamaktan gelir. Her satır güncel değeri kullanır.",
          "fig": {
            "type": "code",
            "code": "int k = 5;\nk += 4;\nk *= 2;\nk -= 3;\nSystem.out.println(k);"
          }
        },
        {
          "t": "1.6",
          "q": "What is printed as a result of executing the following code segment that uses the increment and decrement operators?",
          "o": [
            "3",
            "4",
            "5",
            "2"
          ],
          "a": 1,
          "w": "count++ 1 ekler, count-- 1 çıkarır: 3 → 4 → 5 → 4. Bu satırların her biri değişkeni gerçekten değiştirir; AP'de ++ ve -- yalnız böyle tek başına satır olarak kullanılır. 5 son satırı atlamaktan gelir.",
          "fig": {
            "type": "code",
            "code": "int count = 3;\ncount++;\ncount++;\ncount--;\nSystem.out.println(count);"
          }
        },
        {
          "t": "1.7–1.10",
          "q": "Consider the following static method in the Helper class and a code segment in another class. What is printed as a result of executing the code segment?",
          "o": [
            "36",
            "4",
            "Nothing is printed",
            "12"
          ],
          "a": 3,
          "w": "İlk çağrının dönüş değeri (12) r'ye atanır. İkinci çağrı 36 hesaplar ama dönen değer hiçbir yere atanmadığı için kaybolur; r değişmez. 36 bu atılan değeri r sanmaktan gelir. *Static method* başka sınıftan ClassName.method() biçiminde çağrılır.",
          "fig": {
            "type": "code",
            "code": "public static int triple(int n)\n{\n    return n * 3;\n}\n\n// code segment in another class\nint r = Helper.triple(4);\nHelper.triple(r);\nSystem.out.println(r);"
          }
        },
        {
          "t": "1.7–1.10",
          "q": "A method is declared with the header public static double area(double width, double height). In the statement double a = area(3.0, 5.0); which of the following are the arguments?",
          "o": [
            "width and height",
            "3.0 and 5.0",
            "double and double",
            "a"
          ],
          "a": 1,
          "w": "*Argument*, çağrıda metoda gönderilen değerdir: 3.0 ve 5.0. width ve height ise metot başlığındaki *parameter*'lardır; çağrı sırasında argümanların kopyasını alırlar. double, tiplerdir; a ise dönüş değerini saklayan değişkendir."
        },
        {
          "t": "1.11",
          "q": "What is printed as a result of executing the following code segment that calls two Math methods?",
          "o": [
            "10",
            "10.0",
            "-2.0",
            "2.0"
          ],
          "a": 1,
          "w": "Math.abs(−6) = 6 (*int*), Math.sqrt(16) = 4.0 (*double*; sqrt her zaman *double* döndürür). *int* ile *double* toplanınca sonuç *double*: 10.0. \"10\" sqrt'nin dönüş tipini unutmaktan, −2.0 mutlak değeri almamaktan gelir.",
          "fig": {
            "type": "code",
            "code": "System.out.println(Math.abs(4 - 10) + Math.sqrt(16));"
          }
        },
        {
          "t": "1.11",
          "q": "Consider the following statement, which simulates rolling an eight-sided die. Which of the following describes all possible values of roll?",
          "o": [
            "Every integer from 0 to 8, inclusive",
            "Every integer from 1 to 9, inclusive",
            "Every integer from 0 to 7, inclusive",
            "Every integer from 1 to 8, inclusive"
          ],
          "a": 3,
          "w": "Math.random() 0.0 dahil, 1.0 hariç bir *double* verir. 8 ile çarpınca [0.0, 8.0), (int) ile 0…7, +1 ile 1…8 olur. 8.0'a hiç ulaşılmadığı için 9 çıkamaz; +1 eklendiği için de 0 çıkamaz. 0…7 şıkkı son +1'i unutur.",
          "fig": {
            "type": "code",
            "code": "int roll = (int) (Math.random() * 8) + 1;"
          }
        },
        {
          "t": "1.12–1.14",
          "q": "The Lamp class has a constructor Lamp(String color, int watts). Which of the following statements correctly creates a red, 60-watt Lamp object?",
          "o": [
            "Lamp k = new Lamp(\"red\", 60);",
            "Lamp k = new Lamp(60, \"red\");",
            "Lamp k = Lamp(\"red\", 60);",
            "new Lamp k = (\"red\", 60);"
          ],
          "a": 0,
          "w": "Nesne *new* ve *constructor* ile üretilir; argümanlar *constructor*'ın parametre sırasına ve tiplerine uymalıdır: önce String, sonra int. Sırayı ters vermek derlenmez. *new* olmadan Lamp(...) bir metot çağrısı gibi okunur ve derlenmez; son şık da Java sözdizimine uymaz."
        },
        {
          "t": "1.12–1.14",
          "q": "The Counter class has a constructor Counter(int start), a void method add(int n) that increases the stored value by n, and a method getValue() that returns the stored value. What is printed as a result of executing the following code segment?",
          "o": [
            "5",
            "3",
            "An error occurs",
            "8"
          ],
          "a": 3,
          "w": "c2 = c1; yeni nesne üretmez, aynı nesnenin *reference*'ını kopyalar. İki değişken aynı nesneyi gösterir (*aliasing*), bu yüzden c2 üzerinden yapılan add(3) c1'den de görülür: 5 + 3 = 8. 5 cevabı c2'yi ayrı bir kopya sanmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "Counter c1 = new Counter(5);\nCounter c2 = c1;\nc2.add(3);\nSystem.out.println(c1.getValue());"
          }
        },
        {
          "t": "1.15-1",
          "q": "What is printed as a result of executing the following code segment that calls substring?",
          "o": [
            "mput",
            "omp",
            "mpu",
            "ompu"
          ],
          "a": 2,
          "w": "*Index* 0'dan başlar: c0 o1 m2 p3 u4 t5. substring(2, 5) 2 dahil, 5 hariç alır: m, p, u. Uzunluk 5 − 2 = 3 olmalı. \"mput\" bitişi dahil saymaktan, \"omp\" 1'den saymaktan gelir.",
          "fig": {
            "type": "code",
            "code": "String s = \"computer\";\nSystem.out.println(s.substring(2, 5));"
          }
        },
        {
          "t": "1.15-1",
          "q": "What is printed as a result of executing the following statement that joins a String and two numbers?",
          "o": [
            "Total: 9",
            "Total: 45",
            "Total: 4 5",
            "9"
          ],
          "a": 1,
          "w": "+ soldan sağa işlenir. \"Total: \" + 4 bir String olur (\"Total: 4\"), sonra + 5 yine birleştirme yapar: \"Total: 45\". Toplama istenseydi (4 + 5) parantez içine alınmalıydı. Araya boşluk ancak \" \" yazılırsa girer.",
          "fig": {
            "type": "code",
            "code": "System.out.println(\"Total: \" + 4 + 5);"
          }
        },
        {
          "t": "1.15-2",
          "q": "What is printed as a result of executing the following code segment that searches a String?",
          "o": [
            "3",
            "5",
            "-1",
            "2"
          ],
          "a": 3,
          "w": "indexOf aranan parçanın ilk göründüğü *index*'i döndürür: m0 i1 s2 s3 … \"ss\" ilk kez 2'de başlar. 5 ikinci eşleşmedir; indexOf yalnız ilkini verir. 3 1'den saymaktan gelir. −1 yalnız parça hiç bulunmazsa döner.",
          "fig": {
            "type": "code",
            "code": "String w = \"mississippi\";\nSystem.out.println(w.indexOf(\"ss\"));"
          }
        },
        {
          "t": "1.15-2",
          "q": "What is printed as a result of executing the following code segment that compares Strings with equals?",
          "o": [
            "true true",
            "false false",
            "true false",
            "false true"
          ],
          "a": 3,
          "w": "*equals* harfleri birebir karşılaştırır ve büyük/küçük harfe duyarlıdır (*case-sensitive*): \"Blue\" ile \"blue\" farklıdır → false. a ile \"Blue\" aynı harflerden oluşur → true. \"true true\" büyük harf farkını yok saymaktan gelir.",
          "fig": {
            "type": "code",
            "code": "String a = \"Blue\";\nString b = \"blue\";\nSystem.out.println(a.equals(b) + \" \" + a.equals(\"Blue\"));"
          }
        }
      ]
    },
    {
      "no": 2,
      "level": "Temel",
      "minutes": 25,
      "questions": [
        {
          "t": "1.1",
          "q": "What is printed as a result of executing the following code segment that contains escape sequences? In the choices, a slash ( / ) marks the start of a new line of output.",
          "o": [
            "Path: C:\\\\docs / She said \"hi\" / end",
            "Path: C:\\docs / She said \"hi\" / end",
            "Path: C:\\docs / She said \\\"hi\\\" / end",
            "Path: C:\\docs / She said \"hi\" end"
          ],
          "a": 1,
          "w": "*Escape sequence*'lar ekrana kendileri olarak çıkmaz: \\\\ tek bir ters eğik çizgi, \\\" bir tırnak, \\n yeni satır olur. İkinci satır *print* ile yazılsa da sonundaki \\n imleci alt satıra taşır, bu yüzden end ayrı satırdadır. Kaynak koddaki çift ters eğik çizgiyi ekrana aynen çıkacak sanmak en sık hatadır.",
          "fig": {
            "type": "code",
            "code": "System.out.println(\"Path: C:\\\\docs\");\nSystem.out.print(\"She said \\\"hi\\\"\\n\");\nSystem.out.print(\"end\");"
          }
        },
        {
          "t": "1.1",
          "q": "Which of the following best describes what happens when the following code segment, which divides by a variable, is executed?",
          "o": [
            "An ArithmeticException is thrown at run time",
            "The code does not compile",
            "0 is printed",
            "12 is printed"
          ],
          "a": 0,
          "w": "Kod derlenir: derleyici boxes'ın çalışma anında 0 olacağını kontrol etmez. Program çalışırken *int* sıfıra bölününce *run-time error* oluşur ve *ArithmeticException* fırlatılır; println'e hiç gelinmez. *Syntax error* olmadığı için \"derlenmez\" yanlıştır.",
          "fig": {
            "type": "code",
            "code": "int boxes = 0;\nint perBox = 12 / boxes;\nSystem.out.println(perBox);"
          }
        },
        {
          "t": "1.2",
          "q": "What is printed as a result of executing the following code segment, which uses a temporary variable?",
          "o": [
            "16 8",
            "11 8",
            "8 3",
            "11 3"
          ],
          "a": 3,
          "w": "temp ile yapılan takas doğrudur: x 8, y 3 olur. Sonra x = 8 + 3 = 11. \"16 8\" temp olmadan x = y; y = x; yapılmış gibi düşünmekten gelir (iki değişken de 8 olur). \"8 3\" son satırı atlar. Her atama sağ tarafı o anki değerlerle hesaplar.",
          "fig": {
            "type": "code",
            "code": "int x = 3;\nint y = 8;\nint temp = x;\nx = y;\ny = temp;\nx = x + y;\nSystem.out.println(x + \" \" + y);"
          }
        },
        {
          "t": "1.2",
          "q": "Which of the following is a valid variable declaration in Java?",
          "o": [
            "int 2ndPlace = 0;",
            "double class = 1.5;",
            "int totalPoints = 0;",
            "boolean is done = true;"
          ],
          "a": 2,
          "w": "*Identifier* harfle başlamalı, boşluk içermemeli ve Java'nın ayrılmış sözcüklerinden olmamalıdır. 2ndPlace rakamla başlar, class bir *keyword*'dür, \"is done\" boşluk içerir. totalPoints kurallara uyar ve *camelCase* geleneğine de uygundur."
        },
        {
          "t": "1.3",
          "q": "What is printed as a result of executing the following code segment that separates the digits of a number?",
          "o": [
            "84",
            "12",
            "7",
            "542"
          ],
          "a": 1,
          "w": "/ ve % aynı önceliktedir ve soldan sağa işlenir: n / 10 = 538, 538 % 10 = 8 (onlar basamağı). n % 10 = 4 (birler basamağı). İki *int* toplanır: 12. \"84\" bunları yan yana yazılacak sanmaktır; araya String girmediği için birleştirme olmaz. 7 yüzler basamağını almaktan, 542 ise % 10'u unutmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "int n = 5384;\nSystem.out.println(n / 10 % 10 + n % 10);"
          }
        },
        {
          "t": "1.3",
          "q": "A video is 250 minutes long. What is printed as a result of executing the following code segment, which converts minutes to hours and minutes?",
          "o": [
            "10h 4m",
            "4h 16m",
            "4h 0m",
            "4h 10m"
          ],
          "a": 3,
          "w": "250 / 60 = 4 (*integer division*), 250 % 60 = 10 (4 × 60 = 240, kalan 10). Bölüm saati, kalan dakikayı verir. \"4h 16m\" 4.1666… saatin ondalık kısmını dakika sanmaktan gelir. Birim çevirmede / ile % birlikte kullanılır.",
          "fig": {
            "type": "code",
            "code": "int totalMin = 250;\nint h = totalMin / 60;\nint m = totalMin % 60;\nSystem.out.println(h + \"h \" + m + \"m\");"
          }
        },
        {
          "t": "1.5",
          "q": "What is printed as a result of executing the following code segment that computes an average two ways?",
          "o": [
            "5.75 5.75",
            "5 5.75",
            "5.0 5.75",
            "5.0 5.0"
          ],
          "a": 2,
          "w": "avg1'de 23 / 4 iki *int*'in bölümüdür: 5, sonra *double*'a konunca 5.0. avg2'de *cast* önce sum'ı 23.0 yapar, bölme *double* olur: 5.75. Değişken *double* olduğu için \"5\" yazılmaz. Doğru ortalama için (double) sum / count kalıbı kullanılır.",
          "fig": {
            "type": "code",
            "code": "int sum = 23;\nint count = 4;\ndouble avg1 = sum / count;\ndouble avg2 = (double) sum / count;\nSystem.out.println(avg1 + \" \" + avg2);"
          }
        },
        {
          "t": "1.5",
          "q": "What is printed as a result of executing the following code segment that truncates and rounds a score?",
          "o": [
            "89 89",
            "88 88",
            "89 90",
            "88 89"
          ],
          "a": 3,
          "w": "(int) yalnızca keser: 88.6 → 88. Pozitif bir sayıyı en yakın tam sayıya yuvarlamak için önce 0.5 eklenir: 89.1 → 89. \"89 89\" (int)'in yuvarladığını sanmaktan, \"89 90\" ise 0.5'i yuvarlanmış sayıya bir kez daha eklemekten gelir.",
          "fig": {
            "type": "code",
            "code": "double score = 88.6;\nint a = (int) score;\nint b = (int) (score + 0.5);\nSystem.out.println(a + \" \" + b);"
          }
        },
        {
          "t": "1.6",
          "q": "What is printed as a result of executing the following code segment that updates two variables?",
          "o": [
            "2 5",
            "5 10",
            "2 10",
            "1 5"
          ],
          "a": 0,
          "w": "*Trace table* ile: a = 5; b = 2 × 5 = 10; a = 5 % 3 = 2; b = 10 / 2 = 5. Her satır güncel değerleri kullanır. \"5 10\" son iki satırı unutmak, \"2 10\" b /= a'yı atlamaktır. /= *int* değişkende *integer division* yapar.",
          "fig": {
            "type": "code",
            "code": "int a = 7;\nint b = 2;\na -= b;\nb *= a;\na %= 3;\nb /= a;\nSystem.out.println(a + \" \" + b);"
          }
        },
        {
          "t": "1.6",
          "q": "What is printed as a result of executing the following code segment that appends to a String?",
          "o": [
            "A123",
            "A15",
            "A6",
            "A1 5"
          ],
          "a": 1,
          "w": "String ile += ekleme yapar: \"A\" → \"A1\". Üçüncü satırda sağ taraf önce bütün olarak hesaplanır: 2 + 3 = 5 (iki *int*), sonra eklenir: \"A15\". \"A123\" sağ tarafı da birleştirme sanmaktan, \"A6\" ise 1'i de toplamaya katmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "String code = \"A\";\ncode += 1;\ncode += 2 + 3;\nSystem.out.println(code);"
          }
        },
        {
          "t": "1.7–1.10",
          "q": "Consider the following static method doubleIt, defined in the same class as the code segment. What is printed as a result of executing the code segment?",
          "o": [
            "14",
            "7",
            "Nothing is printed",
            "The code does not compile"
          ],
          "a": 1,
          "w": "Java *call by value* kullanır: n, x'in değerinin kopyasıdır. Metot n'yi 14 yapar ama bu kopya metot bitince yok olur; x 7 kalır. Metot *void* olduğu için değer de döndürmez. 14 cevabı parametreyi argümanla aynı kutu sanmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "public static void doubleIt(int n)\n{\n    n = n * 2;\n}\n\n// code segment\nint x = 7;\ndoubleIt(x);\nSystem.out.println(x);"
          }
        },
        {
          "t": "1.7–1.10",
          "q": "Assume the static methods public static void showScore(int s) and public static int bonus(int s) are defined in the same class as the following statements. Which of the statements will compile without error?",
          "o": [
            "int b = bonus(5);",
            "int b = showScore(5);",
            "int b = bonus(5, 2);",
            "String b = bonus(5);"
          ],
          "a": 0,
          "w": "bonus bir *int* döndürür ve tek *int* parametre alır; int b = bonus(5); bu imzaya uyar. showScore *void*'dir, döndürdüğü bir değer olmadığı için atamanın sağında kullanılamaz. bonus(5, 2) parametre sayısına uymaz. *int* dönüş değeri String değişkene atanamaz."
        },
        {
          "t": "1.11",
          "q": "What is printed as a result of executing the following code segment that uses Math.pow and Math.abs?",
          "o": [
            "11",
            "7.0",
            "11.0",
            "9.0"
          ],
          "a": 2,
          "w": "Math.pow(3, 2) = 9.0 (pow her zaman *double* döndürür), Math.abs(−2) = 2. Toplam 11.0. 7.0 mutlak değeri almadan −2 eklemekten gelir. p *double* olduğu için çıktı \"11\" değil \"11.0\" olur.",
          "fig": {
            "type": "code",
            "code": "double p = Math.pow(3, 2) + Math.abs(-2);\nSystem.out.println(p);"
          }
        },
        {
          "t": "1.11",
          "q": "Which of the following expressions can be used to generate a random integer from 5 to 12, inclusive, with every value possible?",
          "o": [
            "II only",
            "III only",
            "I only",
            "I and II only"
          ],
          "a": 2,
          "w": "Tarif: (int) (Math.random() × sayı) + en küçük, burada sayı = 12 − 5 + 1 = 8. I 5…12 verir. II 5…16 üretir, çünkü 12 \"en büyük\" değil, kaç farklı değer olduğudur. III 5…11 verir, 12'yi hiç üretemez (*off-by-one*).",
          "fig": {
            "type": "code",
            "code": "I.   (int) (Math.random() * 8) + 5\nII.  (int) (Math.random() * 12) + 5\nIII. (int) (Math.random() * 7) + 5"
          }
        },
        {
          "t": "1.12–1.14",
          "q": "The Lamp class has a constructor Lamp(String color, int watts) and a method getWatts() that returns the lamp's wattage. What is the result of executing the following code segment?",
          "o": [
            "0 is printed",
            "null is printed",
            "The code does not compile",
            "A NullPointerException is thrown"
          ],
          "a": 3,
          "w": "*null* hiçbir nesneyi göstermeyen bir *reference*'tır. Kod derlenir, çünkü desk'in tipi Lamp ve getWatts bu sınıfta var. Çalışma anında nokta işaretiyle olmayan bir nesneye ulaşılmaya çalışılır ve *NullPointerException* fırlatılır. Varsayılan 0 ya da \"null\" yazdırılmaz.",
          "fig": {
            "type": "code",
            "code": "Lamp desk = null;\nSystem.out.println(desk.getWatts());"
          }
        },
        {
          "t": "1.12–1.14",
          "q": "The Counter class has a constructor Counter(int start), a void method add(int n) that increases the stored value by n, and a method getValue() that returns the stored value. What is printed as a result of executing the following code segment, which creates two Counter objects?",
          "o": [
            "6 3",
            "6 7",
            "7 3",
            "7 7"
          ],
          "a": 3,
          "w": "a'nın nesnesi 6 olur. b = a; ile b artık aynı nesneyi gösterir (ilk b nesnesine kimse bakmaz). b.add(1) bu ortak nesneyi 7 yapar; a ve b üzerinden okunan değer aynıdır: 7 7. \"6 7\" *aliasing*'i unutmaktır, \"6 3\" ise b = a; satırını atlamaktır.",
          "fig": {
            "type": "code",
            "code": "Counter a = new Counter(2);\nCounter b = new Counter(2);\na.add(4);\nb = a;\nb.add(1);\nSystem.out.println(a.getValue() + \" \" + b.getValue());"
          }
        },
        {
          "t": "1.15-1",
          "q": "What is printed as a result of executing the following code segment, which calls substring without storing the result?",
          "o": [
            "planets",
            "plans",
            "plan",
            "planet"
          ],
          "a": 0,
          "w": "String *immutable*'dır: substring yeni bir String döndürür, word'ü değiştirmez. İkinci satırın sonucu atanmadığı için kaybolur. Üçüncü satır sonucu geri atar: \"planet\" + \"s\" = \"planets\". \"plans\" ikinci satırın word'ü \"plan\" yaptığını sanmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "String word = \"planet\";\nword.substring(0, 4);\nword = word + \"s\";\nSystem.out.println(word);"
          }
        },
        {
          "t": "1.15-1",
          "q": "What is printed as a result of executing the following statement that mixes numbers and a String?",
          "o": [
            "5go23",
            "23go23",
            "5go5",
            "23go5"
          ],
          "a": 0,
          "w": "Soldan sağa: 2 + 3 iki *int*'tir, toplanır: 5. 5 + \"go\" bir String verir: \"5go\". Artık sol taraf String olduğu için + 2 ve + 3 birleştirme yapar: \"5go23\". Bir String'e ulaşılana kadar toplama, ondan sonra birleştirme olur.",
          "fig": {
            "type": "code",
            "code": "System.out.println(2 + 3 + \"go\" + 2 + 3);"
          }
        },
        {
          "t": "1.15-2",
          "q": "What is printed as a result of executing the following code segment that calls indexOf twice?",
          "o": [
            "0 2",
            "-1 2",
            "-1 3",
            "0 3"
          ],
          "a": 1,
          "w": "indexOf *case-sensitive*'tir: \"Rocket\" büyük R ile başlar, küçük \"r\" yoktur → −1. \"ck\" R0 o1 c2 k3 dizisinde 2'de başlar. \"0 2\" büyük/küçük harfi aynı saymaktan, 3 ise 1'den saymaktan gelir.",
          "fig": {
            "type": "code",
            "code": "String s = \"Rocket\";\nSystem.out.println(s.indexOf(\"r\") + \" \" + s.indexOf(\"ck\"));"
          }
        },
        {
          "t": "1.15-2",
          "q": "What is printed as a result of executing the following code segment that compares String references with == and contents with equals?",
          "o": [
            "true true true",
            "false false true",
            "false true true",
            "false true false"
          ],
          "a": 2,
          "w": "Nesnelerde == iki *reference*'ın aynı nesneyi gösterip göstermediğine bakar. a ile b iki ayrı *new* ile üretildi → false. c = a; aynı nesneyi gösterir → true. *equals* içeriğe bakar; b ile c'nin harfleri aynıdır → true. String'leri karşılaştırmak için == değil *equals* kullanılır.",
          "fig": {
            "type": "code",
            "code": "String a = new String(\"tea\");\nString b = new String(\"tea\");\nString c = a;\nSystem.out.println((a == b) + \" \" + (a == c) + \" \" + b.equals(c));"
          }
        }
      ]
    },
    {
      "no": 3,
      "level": "Orta",
      "minutes": 25,
      "questions": [
        {
          "t": "1.1",
          "q": "What is printed as a result of executing the following code segment that mixes print, println, and a newline escape? In the choices, a slash ( / ) marks the start of a new line of output.",
          "o": [
            "1 / 23 / 45 / 6",
            "123 / 45 / 6",
            "123 / 4 / 5 / 6",
            "123 / 4 / 56"
          ],
          "a": 2,
          "w": "print(\"1\") satırı bitirmez, println(\"23\") aynı satıra yazıp alt satıra geçer: 123. \"4\\n5\" içindeki \\n 4'ten sonra satır atlatır. Boş println() yalnızca satırı bitirir, bu yüzden 6 yeni satırdadır. \"123 / 4 / 56\" boş println()'in de satır atlattığını unutmaktır.",
          "fig": {
            "type": "code",
            "code": "System.out.print(\"1\");\nSystem.out.println(\"2\" + \"3\");\nSystem.out.print(\"4\\n5\");\nSystem.out.println();\nSystem.out.print(\"6\");"
          }
        },
        {
          "t": "1.1",
          "q": "Which of the following best describes the result of executing the following code segment that contains comments?",
          "o": [
            "5 is printed",
            "11 is printed",
            "9 is printed",
            "The code does not compile because total is declared twice"
          ],
          "a": 0,
          "w": "*Comment*'ler derleyici tarafından yok sayılır. // satırın geri kalanını, /* … */ aradaki her şeyi yorum yapar. Geriye yalnız int total = 4; ve total = total + 1; kalır: 5. total bir kez tanımlandığı için derleme hatası yok; 11 ve 9 yorumları çalışan kod sanmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "// int total = 10;\nint total = 4; /* total = 8; */\ntotal = total + 1;\nSystem.out.println(total);"
          }
        },
        {
          "t": "1.2",
          "q": "Which of the following code segments will NOT compile?",
          "o": [
            "int n; System.out.println(n);",
            "int n = 5; n = n + 2;",
            "double d = 3; d = d / 2;",
            "boolean b; b = true;"
          ],
          "a": 0,
          "w": "Yerel bir değişken değer atanmadan okunamaz; derleyici \"*variable might not have been initialized*\" hatası verir. boolean b; b = true; da önce tanımlayıp sonra atar ama okumadan önce atandığı için geçerlidir. double d = 3; *widening* ile 3.0 olur; d / 2 = 1.5 sorunsuz."
        },
        {
          "t": "1.2",
          "q": "What is printed as a result of executing the following code segment that reassigns two variables several times?",
          "o": [
            "4 7",
            "7 7",
            "7 4",
            "3 4"
          ],
          "a": 2,
          "w": "*Trace*: p = 4, q = 7; p = 7 − 4 = 3; q = 7 − 3 = 4; p = 3 + 4 = 7. Sonuç 7 4. Bu üç satır aslında geçici değişken kullanmadan p ve q'yu takas eder, sonra p'ye q eklenir. \"3 4\" son satırı atlar, \"4 7\" başlangıç değerlerinin takası sanmaktır.",
          "fig": {
            "type": "code",
            "code": "int p = 4;\nint q = p + 3;\np = q - p;\nq = q - p;\np = p + q;\nSystem.out.println(p + \" \" + q);"
          }
        },
        {
          "t": "1.3",
          "q": "What is printed as a result of executing the following statement that combines several arithmetic operators?",
          "o": [
            "22",
            "11",
            "16",
            "19"
          ],
          "a": 3,
          "w": "/, × ve % önce ve soldan sağa: 8 / 3 = 2, 2 × 2 = 4, 7 % 4 = 3. Sonra 20 − 4 + 3 = 19. 22, 8'i 3 × 2'ye bölmekten (soldan sağa kuralını çiğnemek), 11 ise 20 − 8'i önce yapmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "System.out.println(20 - 8 / 3 * 2 + 7 % 4);"
          }
        },
        {
          "t": "1.3",
          "q": "What is printed as a result of executing the following code segment in which an int division and a double division are added?",
          "o": [
            "7.0",
            "6.0",
            "3.5",
            "6.5"
          ],
          "a": 3,
          "w": "Her bölmenin tipine ayrı bak: a / b iki *int* → 3; a / 2.0'da bir taraf *double* → 3.5. Toplam 6.5. 7.0 iki bölmeyi de 3.5 saymaktan, 6.0 ikisini de *integer division* saymaktan gelir. Değişkenin *double* olması ilk bölmeyi düzeltmez.",
          "fig": {
            "type": "code",
            "code": "int a = 7;\nint b = 2;\ndouble c = a / b + a / 2.0;\nSystem.out.println(c);"
          }
        },
        {
          "t": "1.5",
          "q": "What is printed as a result of executing the following code segment that adds 1 to the largest int value?",
          "o": [
            "false",
            "An ArithmeticException is thrown",
            "The code does not compile",
            "true"
          ],
          "a": 3,
          "w": "*int* aralığın dışına çıkınca *integer overflow* olur ve değer öbür uca sarar: MAX_VALUE + 1 = MIN_VALUE. Java bunun için hata vermez; ne derleme hatası ne *exception* olur. Bu yüzden karşılaştırma true çıkar. *ArithmeticException* yalnız sıfıra bölmede görülür.",
          "fig": {
            "type": "code",
            "code": "int big = Integer.MAX_VALUE;\nbig = big + 1;\nSystem.out.println(big == Integer.MIN_VALUE);"
          }
        },
        {
          "t": "1.5",
          "q": "The int variables a, b, and c have the values 5, 6, and 8. Which of the following expressions evaluates to their exact average, 6.333333333333333?",
          "o": [
            "(double) ((a + b + c) / 3)",
            "(double) (a + b + c) / 3",
            "(a + b + c) / 3",
            "(double) a + b + c / 3"
          ],
          "a": 1,
          "w": "Toplam 19. (double) (a + b + c) önce 19.0 yapar, sonra / 3 *double* bölmedir: 6.333…. İlk şıkta bölme parantez içinde *int* olarak yapılır (6), *cast* yalnız 6.0 verir. Üçüncüsü 6. Sonuncusunda *cast* yalnız a'ya uygulanır ve c / 3 = 2 önce hesaplanır: 5.0 + 6 + 2 = 13.0."
        },
        {
          "t": "1.6",
          "q": "What is printed as a result of executing the following code segment, in which each compound assignment has an expression on its right side?",
          "o": [
            "2 5",
            "6 16",
            "5 13",
            "3 16"
          ],
          "a": 1,
          "w": "x op= e, x = x op (e) demektir; sağ taraf önce bütün olarak hesaplanır. x = 6 − 3 = 3; y = 4 × 4 = 16; x = 3 + 16 / 5 = 3 + 3 = 6. \"2 5\" sağ tarafı parantezsiz okumaktan (x = 6 − 4 − 1, y = 4 × 1 + 1) gelir. \"3 16\" son satırı atlar.",
          "fig": {
            "type": "code",
            "code": "int x = 6;\nint y = 4;\nx -= y - 1;\ny *= x + 1;\nx += y / 5;\nSystem.out.println(x + \" \" + y);"
          }
        },
        {
          "t": "1.6",
          "q": "A programmer meant to subtract 1 from lives but typed the operators in the wrong order. What is printed as a result of executing the code segment?",
          "o": [
            "4",
            "7",
            "-1",
            "2"
          ],
          "a": 0,
          "w": "=- bir operatör değildir; derleyici bunu lives = -1; olarak okur. Kod derlenir ama lives −1 olur, sonra −1 + 5 = 4. 7, satırı lives -= 1 sanmaktan gelir (3 − 1 + 5). Bu tip yazım hatası *logic error* üretir.",
          "fig": {
            "type": "code",
            "code": "int lives = 3;\nlives =- 1;\nlives += 5;\nSystem.out.println(lives);"
          }
        },
        {
          "t": "1.7–1.10",
          "q": "Consider the following three overloaded static methods named combine, defined in the same class as the print statement. What is printed when the statement is executed?",
          "o": [
            "5 5 6.0",
            "5 23 6.0",
            "5 23 5.0",
            "6.0 23 6.0"
          ],
          "a": 1,
          "w": "*Overloading*'de hangi metodun çalışacağını argümanların tipleri belirler. combine(2, 3) iki *int* → ilk metot: 5. combine(\"2\", 3) String ve *int* → ikinci metot, birleştirme: \"23\". combine(2.0, 3)'te 3 *double*'a genişler → üçüncü metot, çarpım: 6.0. 5.0 metot adına bakıp hep toplama yapıldığını sanmaktır.",
          "fig": {
            "type": "code",
            "code": "public static int combine(int a, int b)\n{   return a + b;   }\n\npublic static String combine(String a, int b)\n{   return a + b;   }\n\npublic static double combine(double a, double b)\n{   return a * b;   }\n\n// statement\nSystem.out.println(combine(2, 3) + \" \" + combine(\"2\", 3) + \" \" + combine(2.0, 3));"
          }
        },
        {
          "t": "1.7–1.10",
          "q": "Consider the following documentation and header for the method digits. Which of the following statements is true?",
          "o": [
            "digits must check n and print an error message if n is not positive",
            "The postcondition describes what must be true before digits is called",
            "The caller is responsible for making sure the argument is positive",
            "digits can only be called with a literal value such as 345"
          ],
          "a": 2,
          "w": "*Precondition*, metot çağrılmadan önce doğru olması gereken şarttır ve bunu sağlamak çağıranın işidir; metodun kontrol etmesi beklenmez. *Postcondition* metot bittikten sonra garanti edilen durumdur (n'nin basamak sayısını döndürmek). Argüman değişken de olabilir; yeter ki *int* olsun.",
          "fig": {
            "type": "code",
            "code": "/**\n * Precondition: n > 0\n * Postcondition: returns the number of digits in n\n */\npublic static int digits(int n)"
          }
        },
        {
          "t": "1.11",
          "q": "What is printed as a result of executing the following code segment that nests Math method calls?",
          "o": [
            "4.0 -1",
            "4.0 9",
            "4 9",
            "2.0 7"
          ],
          "a": 1,
          "w": "İç içe çağrılar içten dışa: pow(5, 2) = 25.0, pow(3, 2) = 9.0, fark 16.0, sqrt = 4.0. r = 4 + |−5| = 9. d *double* olduğu için \"4.0\" yazılır. \"4.0 −1\" mutlak değeri unutmaktan, \"2.0 7\" ise sqrt(5 − 3) gibi kısaltmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "double d = Math.sqrt(Math.pow(5, 2) - Math.pow(3, 2));\nint r = (int) d + Math.abs(2 - 7);\nSystem.out.println(d + \" \" + r);"
          }
        },
        {
          "t": "1.11",
          "q": "Consider the following statement, which produces a random decimal value. Which of the following best describes the possible values of r?",
          "o": [
            "Any double from 1.0 to 7.0, inclusive",
            "Any double from 0.0 up to but not including 7.0",
            "Any double from 1.0 up to but not including 7.0",
            "Any integer from 1 to 6, inclusive"
          ],
          "a": 2,
          "w": "Math.random() [0.0, 1.0) aralığındadır. 6 ile çarpmak aralığı genişletir: [0.0, 6.0); 1 eklemek kaydırır: [1.0, 7.0). 0.0 ile başlayan şık kaydırmayı unutur. 1.0'a ulaşılmadığı için 7.0 da hiç üretilmez. Ortada *cast* olmadığı için sonuç tam sayı değil, *double*'dır.",
          "fig": {
            "type": "code",
            "code": "double r = Math.random() * 6 + 1;"
          }
        },
        {
          "t": "1.12–1.14",
          "q": "The Counter class has a constructor Counter(int start), a void method add(int n) that increases the stored value by n, and a method getValue() that returns the stored value. What is printed as a result of executing the following code segment, in which a reference variable is reassigned?",
          "o": [
            "12 6",
            "17 17",
            "12 17",
            "17 6"
          ],
          "a": 0,
          "w": "q = p; o an p'nin gösterdiği nesnenin (1) *reference*'ını kopyalar. Sonra p yeni bir nesneye (10) bağlanır; q eski nesnede kalır. q.add(5) eskiyi 6, p.add(2) yeniyi 12 yapar. \"17 17\" q'yu p'ye kalıcı olarak bağlı sanmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "Counter p = new Counter(1);\nCounter q = p;\np = new Counter(10);\nq.add(5);\np.add(2);\nSystem.out.println(p.getValue() + \" \" + q.getValue());"
          }
        },
        {
          "t": "1.12–1.14",
          "q": "The Lamp class has a constructor Lamp(String color, int watts) and a method getWatts() that returns the lamp's wattage. How many Lamp objects exist after the following code segment is executed?",
          "o": [
            "4",
            "3",
            "1",
            "2"
          ],
          "a": 3,
          "w": "Nesne yalnız *new* ile üretilir; burada iki kez *new* var. b = a; yeni nesne değil, aynı nesneye ikinci bir *reference*'tır. d = null; hiçbir nesneye bakmaz. c'nin nesnesi a'nınkiyle aynı duruma sahip olsa da ayrı bir nesnedir. 4, her değişkeni bir nesne saymaktan gelir.",
          "fig": {
            "type": "code",
            "code": "Lamp a = new Lamp(\"blue\", 40);\nLamp b = a;\nLamp c = new Lamp(\"blue\", 40);\nLamp d = null;"
          }
        },
        {
          "t": "1.15-1",
          "q": "What is printed as a result of executing the following code segment that builds a String from pieces of another String?",
          "o": [
            "yrd8",
            "brd7",
            "bard8",
            "brd8"
          ],
          "a": 3,
          "w": "k0 e1 y2 b3 o4 a5 r6 d7, length() = 8. substring(3, 4) tek harf verir: \"b\". substring(8 − 2) = substring(6) = \"rd\". Sonra 8 eklenir: \"brd8\". \"yrd8\" 1'den saymaktan, \"brd7\" son *index*'i length() sanmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "String s = \"keyboard\";\nString t = s.substring(3, 4) + s.substring(s.length() - 2) + s.length();\nSystem.out.println(t);"
          }
        },
        {
          "t": "1.15-1",
          "q": "Assume String w = \"lemon\"; has been declared. Which of the following method calls causes a StringIndexOutOfBoundsException?",
          "o": [
            "w.substring(5)",
            "w.substring(2, 2)",
            "w.substring(4, 6)",
            "w.substring(0, 5)"
          ],
          "a": 2,
          "w": "\"lemon\"un uzunluğu 5; geçerli bitiş değerleri 0…5'tir. substring(4, 6)'da 6 > 5 olduğu için *exception* oluşur. substring(5) tam sondan başlar ve boş String verir, hata değildir. substring(2, 2) da boş String'tir. substring(0, 5) bütün kelimedir."
        },
        {
          "t": "1.15-2",
          "q": "What is printed as a result of executing the following code segment that splits a date String with indexOf and substring?",
          "o": [
            "106",
            "105",
            "1023",
            "10-235"
          ],
          "a": 1,
          "w": "dash = 4 (ilk tire). rest = substring(5) = \"10-23\", uzunluğu 5. rest içindeki tire 2'de, month = substring(0, 2) = \"10\". \"10\" + 5 birleştirmedir: \"105\". 106, rest'i tireyle birlikte almaktan (substring(dash)) gelir.",
          "fig": {
            "type": "code",
            "code": "String date = \"2026-10-23\";\nint dash = date.indexOf(\"-\");\nString rest = date.substring(dash + 1);\nString month = rest.substring(0, rest.indexOf(\"-\"));\nSystem.out.println(month + rest.length());"
          }
        },
        {
          "t": "1.15-2",
          "q": "What is printed as a result of executing the following code segment that checks the signs of two compareTo results?",
          "o": [
            "true true",
            "false true",
            "true false",
            "false false"
          ],
          "a": 0,
          "w": "*compareTo* sözlük sırasına bakar; büyük harfler küçük harflerden önce gelir. \"apple\", \"Apple\"dan sonra gelir → x pozitif → true. \"apple\", \"applesauce\"un öneki (*prefix*); kısa olan önce gelir → y negatif → true. \"false true\" a ile A'yı aynı saymaktan gelir.",
          "fig": {
            "type": "code",
            "code": "String a = \"apple\";\nString b = \"Apple\";\nString c = \"applesauce\";\nint x = a.compareTo(b);\nint y = a.compareTo(c);\nSystem.out.println((x > 0) + \" \" + (y < 0));"
          }
        }
      ]
    },
    {
      "no": 4,
      "level": "Zor",
      "minutes": 30,
      "questions": [
        {
          "t": "1.1",
          "q": "What is printed as a result of executing the following code segment, in which some backslashes are themselves escaped? In the choices, a slash ( / ) marks the start of a new line of output.",
          "o": [
            "x / y\" / \"z\" / w",
            "x\\ny\\\" / \"z\" / w",
            "x\\ny\" / \"z\" / w",
            "x\\\\ny\" / \"z\" / w"
          ],
          "a": 2,
          "w": "\\\\ tek bir ters eğik çizgi yazar, ardından gelen n sıradan bir harftir; bu yüzden ilk satırda \"x\\n\" görünür ve satır atlamaz. \\\" bir tırnak işareti basar. Üçüncü komuttaki \\n gerçekten yeni satırdır, w alt satıra düşer. \"x / y\" şıkkı \\\\n'yi satır atlatma sanmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "System.out.print(\"x\\\\n\");\nSystem.out.println(\"y\\\"\");\nSystem.out.print(\"\\\"z\\\"\\n\");\nSystem.out.print(\"w\");"
          }
        },
        {
          "t": "1.1",
          "q": "Consider the three code segments shown. Segment III is intended to print 0. Which of the following correctly classifies the problem in each segment?",
          "o": [
            "I: syntax error, II: syntax error, III: logic error",
            "I: run-time error, II: logic error, III: syntax error",
            "I: logic error, II: syntax error, III: run-time error",
            "I: run-time error, II: syntax error, III: logic error"
          ],
          "a": 3,
          "w": "I derlenir ama çalışırken sıfıra bölme *ArithmeticException* fırlatır: *run-time error*. II'de noktalı virgül eksik; derleyici durur: *syntax error*. III derlenir ve çalışır ama 10 / 2 önce yapıldığı için 5 basar, istenen 0 değil: *logic error*. Derleyici a / 0'ı yakalamaz.",
          "fig": {
            "type": "code",
            "code": "// I\nint a = 10;\nSystem.out.println(a / 0);\n\n// II\nint b = 10\nSystem.out.println(b);\n\n// III\nint c = 10;\nSystem.out.println(c - 10 / 2);"
          }
        },
        {
          "t": "1.2",
          "q": "Consider the declarations shown. Which of the following statements about these variables is true?",
          "o": [
            "name holds a reference to a String object; count, rate, and ok hold their values directly",
            "All four variables hold references to objects",
            "rate holds a reference because a double value is too large to store directly",
            "ok can later be assigned the value 1 because boolean is a numeric type"
          ],
          "a": 0,
          "w": "int, double ve boolean *primitive type*'tır: kutu değerin kendisini tutar. String bir sınıftır, yani *reference type*: name kutusunda nesneye giden adres (ok) vardır. double da *primitive*'dir; boyutu bunu değiştirmez. boolean yalnız true ya da false alabilir, 1 atanamaz.",
          "fig": {
            "type": "code",
            "code": "int count = 3;\ndouble rate = 2.5;\nString name = \"Ana\";\nboolean ok = true;"
          }
        },
        {
          "t": "1.2",
          "q": "What is the result of compiling and running the following code segment that uses a final variable?",
          "o": [
            "36 is printed",
            "The code does not compile because LIMIT is final",
            "36.666666666666664 is printed",
            "50 is printed"
          ],
          "a": 1,
          "w": "*final* değişken ilk atamadan sonra değiştirilemez; LIMIT = used; satırı derleme hatasıdır, program hiç çalışmaz. Bu satır olmasaydı used = 20 + 50 / 3 = 20 + 16 = 36 basılırdı (*integer division*). Ondalıklı şık hem bölmeyi hem final kuralını kaçırır.",
          "fig": {
            "type": "code",
            "code": "final int LIMIT = 50;\nint used = 20;\nused = used + LIMIT / 3;\nLIMIT = used;\nSystem.out.println(used);"
          }
        },
        {
          "t": "1.3",
          "q": "What is printed as a result of executing the following code segment that extracts digits from a four-digit number?",
          "o": [
            "9410",
            "17",
            "20",
            "23"
          ],
          "a": 3,
          "w": "Soldan sağa: a = 93 / 10 = 9; b = 74 % 10 = 4; c = 7 + 3 = 10. a + b + c üç *int*'in toplamıdır: 23. \"9410\" bunların yan yana yazılacağını sanmaktır; println içinde String olmadığı için toplama yapılır. 17, a'yı n % (100 / 10) = 3 diye okumaktan gelir.",
          "fig": {
            "type": "code",
            "code": "int n = 7493;\nint a = n % 100 / 10;\nint b = n / 100 % 10;\nint c = n / 1000 + n % 10;\nSystem.out.println(a + b + c);"
          }
        },
        {
          "t": "1.3",
          "q": "What is printed as a result of executing the following statement that mixes int and double operands?",
          "o": [
            "9.0",
            "10.0",
            "2.5",
            "8.0"
          ],
          "a": 0,
          "w": "Her parça soldan sağa ve kendi tipiyle: 5 / 2 = 2 (*int*), 2 × 2.0 = 4.0. 5 / 2.0 = 2.5, 2.5 × 2 = 5.0. Toplam 9.0. 10.0 ilk bölmeyi de 2.5 saymaktan, 2.5 ise 2 × 2.0'ı paydaya koymaktan gelir. Bir *double*'ın ifadede sonradan görünmesi önceki *integer division*'ı düzeltmez.",
          "fig": {
            "type": "code",
            "code": "System.out.println(5 / 2 * 2.0 + 5 / 2.0 * 2);"
          }
        },
        {
          "t": "1.5",
          "q": "What is printed as a result of executing the following code segment that casts a negative double three ways?",
          "o": [
            "-4 -5 -4",
            "-5 -5 -4",
            "-4 -5 -5",
            "-5 -6 -5"
          ],
          "a": 0,
          "w": "(int) sıfıra doğru keser: −4.6 → −4 (aşağı değil). Negatif sayıyı en yakın tam sayıya yuvarlamak için 0.5 çıkarılır: −5.1 → −5. c'de −4.1 → −4. \"−5 …\" ile başlayan şıklar (int)'in her zaman aşağı yuvarladığını sanmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "double t = -4.6;\nint a = (int) t;\nint b = (int) (t - 0.5);\nint c = (int) (t + 0.5);\nSystem.out.println(a + \" \" + b + \" \" + c);"
          }
        },
        {
          "t": "1.5",
          "q": "What is printed as a result of executing the following code segment that goes past the largest int value?",
          "o": [
            "3",
            "2147483650",
            "2",
            "An ArithmeticException is thrown"
          ],
          "a": 2,
          "w": "MAX_VALUE − 2 + 5, MAX_VALUE'yu 3 geçer. *Overflow*'da MAX_VALUE + 1 = MIN_VALUE olduğundan x = MIN_VALUE + 2 olur. Böylece x − MIN_VALUE = 2. 2147483650 *int*'e sığmaz; *int* sonuç asla bu olamaz. Java *overflow*'da *exception* fırlatmaz.",
          "fig": {
            "type": "code",
            "code": "int x = Integer.MAX_VALUE - 2;\nx += 5;\nSystem.out.println(x - Integer.MIN_VALUE);"
          }
        },
        {
          "t": "1.6",
          "q": "What is printed as a result of executing the following code segment that applies the same compound operators to an int and a double?",
          "o": [
            "4 24.0",
            "4 25.5",
            "0 25.5",
            "1 25.5"
          ],
          "a": 1,
          "w": "a *int*'tir: 17 / 2 = 8, 8 × 3 = 24, 24 % 5 = 4. b *double*'dır (17.0): 8.5, sonra 25.5. Aynı operatör iki tipte farklı sonuç verir; *int* /= ondalığı keser. \"4 24.0\" b'de de kesme yapmaktan, \"0 25.5\" a'yı 25 sanmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "int a = 17;\ndouble b = 17;\na /= 2;\nb /= 2;\na *= 3;\nb *= 3;\na %= 5;\nSystem.out.println(a + \" \" + b);"
          }
        },
        {
          "t": "1.6",
          "q": "What is printed as a result of executing the following code segment that traces two variables through five updates?",
          "o": [
            "45",
            "12",
            "10",
            "9"
          ],
          "a": 3,
          "w": "x = 7; y = 5 × (7 − 4) = 15; x = 7 % (15 − 11) = 7 % 4 = 3; y = 15 / 3 = 5; x = 4. x + y iki *int*'in toplamı: 9. \"45\" toplamı birleştirme sanmaktan, 12 ve 10, ara satırlardan birinde değişkenin güncel değeri yerine eski değerini kullanmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "int x = 2;\nint y = 5;\nx += y;\ny *= x - 4;\nx %= y - 11;\ny /= x;\nx++;\nSystem.out.println(x + y);"
          }
        },
        {
          "t": "1.7–1.10",
          "q": "Consider the following static methods f and g, defined in the same class as the code segment. What is printed as a result of executing the code segment?",
          "o": [
            "27",
            "234",
            "23",
            "12"
          ],
          "a": 0,
          "w": "g(3) = f(3) + f(4) = 5 + 7 = 12, a = 12. f(a); satırının sonucu kullanılmaz ve a'yı değiştirmez. Son satır: f(12) = 23, g(1) = f(1) + f(2) = 1 + 3 = 4; iki *int* toplanır: 27. \"234\" toplamayı birleştirme sanmaktır; 23 g(1)'i unutmaktır.",
          "fig": {
            "type": "code",
            "code": "public static int f(int n)\n{   return n * 2 - 1;   }\n\npublic static int g(int n)\n{   return f(n) + f(n + 1);   }\n\n// code segment\nint a = g(3);\nf(a);\nSystem.out.println(f(a) + g(1));"
          }
        },
        {
          "t": "1.7–1.10",
          "q": "Which of the following pairs of method headers could NOT both appear in the same class?",
          "o": [
            "int total(int a) and int total(int a, int b)",
            "int total(int a, int b) and double total(int x, int y)",
            "int total(int a, double b) and int total(double a, int b)",
            "int total(int a) and double total(double a)"
          ],
          "a": 1,
          "w": "*Method signature* yalnız ad ve parametre tiplerinin sırasıdır; dönüş tipi ve parametre adları dahil değildir. İkinci çiftin ikisi de total(int, int) imzasına sahiptir, bu yüzden aynı sınıfta olamaz. Öteki çiftlerde parametre sayısı, tip sırası ya da tipi farklıdır; geçerli *overloading*'dir."
        },
        {
          "t": "1.11",
          "q": "What is printed as a result of executing the following code segment that casts the results of Math methods?",
          "o": [
            "7 2 0.5",
            "7.0 2 0.5",
            "7 2 0.0",
            "7 2.6666666666666665 0.0"
          ],
          "a": 2,
          "w": "sqrt(50) ≈ 7.07, (int) ile 7. (int) Math.pow(2, 3) önce 8 olur, sonra 8 / 3 = 2 (*cast* bölmeden önce uygulanır). Math.abs(7 − 8) = 1, *int* sürümü *int* döndürür; 1 / 2 = 0, c = 0.0. 0.5 cevabı abs'ın *int* döndürdüğünü unutmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "int a = (int) Math.sqrt(50);\nint b = (int) Math.pow(2, 3) / 3;\ndouble c = Math.abs(a - b * 4) / 2;\nSystem.out.println(a + \" \" + b + \" \" + c);"
          }
        },
        {
          "t": "1.11",
          "q": "A programmer wants r to be a random integer from 3 to 12, inclusive, and writes the following statement. Which of the following best describes the values that r can actually have?",
          "o": [
            "Any integer from 3 to 12, inclusive",
            "Any integer from 3 to 13, inclusive",
            "Any integer from 0 to 13, inclusive",
            "r is always 3"
          ],
          "a": 3,
          "w": "*Cast* sağındaki ilk değere, yani yalnızca Math.random()'a uygulanır. 0.0 ile 1.0 arasındaki her değer (int) ile 0 olur; 0 × 10 + 3 = 3. Doğru tarif çarpımı parantez içine alır: (int) (Math.random() × 10) + 3. Bu *cast* önceliği tuzağı sınavda sık görülür.",
          "fig": {
            "type": "code",
            "code": "int r = (int) Math.random() * 10 + 3;"
          }
        },
        {
          "t": "1.12–1.14",
          "q": "The Box class has a constructor Box(int w), a method getW() that returns the width, a void method grow(int n) that adds n to the width, and a method twin() that returns a new Box with the same width. What is printed as a result of executing the code segment?",
          "o": [
            "11 11",
            "7 10",
            "7 11",
            "8 11"
          ],
          "a": 2,
          "w": "twin() yeni bir nesne döndürür: b ayrı bir kutu (3). c = a; *aliasing*: c.grow(4) ilk nesneyi 7 yapar. b.grow(7) ile b 10 olur. a = b; a'yı b'nin nesnesine bağlar; a.grow(1) bu nesneyi 11 yapar. c hâlâ ilk nesneyi gösterir: 7. \"8 11\" a = b'den sonra ilk nesnenin büyüdüğünü sanmaktır.",
          "fig": {
            "type": "code",
            "code": "Box a = new Box(3);\nBox b = a.twin();\nBox c = a;\nc.grow(4);\nb.grow(a.getW());\na = b;\na.grow(1);\nSystem.out.println(c.getW() + \" \" + b.getW());"
          }
        },
        {
          "t": "1.12–1.14",
          "q": "The Lamp class has a constructor Lamp(String color, int watts) and a method getWatts() that returns the lamp's wattage. What is the result of executing the following code segment, in which one reference is set to null?",
          "o": [
            "A NullPointerException is thrown",
            "60 is printed",
            "0 is printed",
            "The code does not compile"
          ],
          "a": 1,
          "w": "b = a; b'ye nesnenin *reference*'ını kopyalar. Sonra a = null; yalnızca a kutusunu boşaltır; nesne silinmez, b hâlâ onu gösterir. b.getWatts() 60 döndürür. *NullPointerException* için çağrının yapıldığı değişkenin null olması gerekir; burada b null değil.",
          "fig": {
            "type": "code",
            "code": "Lamp a = new Lamp(\"red\", 60);\nLamp b = null;\nb = a;\na = null;\nSystem.out.println(b.getWatts());"
          }
        },
        {
          "t": "1.15-1",
          "q": "What is printed as a result of executing the following code segment that concatenates int and double values?",
          "o": [
            "5x325",
            "5.0x5.05.0",
            "32.0x32.05.0",
            "5.0x32.05.0"
          ],
          "a": 3,
          "w": "Soldan sağa: a + b sayı toplamıdır ve *double* olur: 5.0. \"x\" gelince String başlar; ardından a \"3\", b \"2.0\" olarak eklenir. Parantez önce hesaplanır: 5.0. Sonuç \"5.0x32.05.0\". \"5x325\" *double*'ların .0 ile yazıldığını unutmaktan, \"5.0x5.05.0\" String'ten sonra toplama yapıldığını sanmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "int a = 3;\ndouble b = 2.0;\nSystem.out.println(a + b + \"x\" + a + b + (a + b));"
          }
        },
        {
          "t": "1.15-1",
          "q": "What is printed as a result of executing the following code segment that uses length to choose substring positions?",
          "o": [
            "otebbook",
            "otbbook",
            "notbbook",
            "otbook"
          ],
          "a": 1,
          "w": "n = 8. a = substring(4) = \"book\". b = substring(1, 3) = \"ot\" (3 hariç). a.substring(0, 1) = \"b\", s = \"otb\". s + a = \"otbbook\". \"otebbook\" bitişi dahil saymaktan (\"ote\"), \"notbbook\" b'yi 0'dan başlatmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "String s = \"notebook\";\nint n = s.length();\nString a = s.substring(n / 2);\nString b = s.substring(1, n / 2 - 1);\ns = b + a.substring(0, 1);\nSystem.out.println(s + a);"
          }
        },
        {
          "t": "1.15-2",
          "q": "What is printed as a result of executing the following code segment that searches a shortened String?",
          "o": [
            "8",
            "11",
            "10",
            "9"
          ],
          "a": 0,
          "w": "i = 1 (b0 a1 n2). t = substring(3) = \"ana bandana\". t'de \"an\" hemen 0'da: j = 0. t'de \"dan\": a0 n1 a2 boşluk3 b4 a5 n6 d7 → 7. 1 + 0 + 7 = 8. 11, \"dan\"ı t yerine s'de aramaktan (10) gelir. *index*'ler her zaman aramanın yapıldığı String'e göredir.",
          "fig": {
            "type": "code",
            "code": "String s = \"banana bandana\";\nint i = s.indexOf(\"an\");\nString t = s.substring(i + 2);\nint j = t.indexOf(\"an\");\nSystem.out.println(i + j + t.indexOf(\"dan\"));"
          }
        },
        {
          "t": "1.15-2",
          "q": "What is printed as a result of executing the following code segment that combines compareTo and equals?",
          "o": [
            "false true true",
            "true false true",
            "true true true",
            "true true false"
          ],
          "a": 2,
          "w": "Büyük harfler küçüklerden önce gelir: \"Mango\" < \"mango\" → true. \"man\", \"mango\"nun öneki; kısa olan önce gelir → true. c + \"go\" yeni bir String olan \"mango\"dur; *equals* içeriğe baktığı için true. \"true true false\" birleştirme sonucunu farklı nesne olduğu için eşit saymamaktır; bu == için geçerli olurdu, *equals* için değil.",
          "fig": {
            "type": "code",
            "code": "String a = \"Mango\";\nString b = \"mango\";\nString c = \"man\";\nSystem.out.println((a.compareTo(b) < 0) + \" \" + (c.compareTo(b) < 0) + \" \" + b.equals(c + \"go\"));"
          }
        }
      ]
    },
    {
      "no": 5,
      "level": "Çok zor",
      "minutes": 35,
      "questions": [
        {
          "t": "1.1",
          "q": "The following code segment contains exactly one error that prevents it from compiling. Which line contains that error?",
          "o": [
            "Line 4",
            "Line 3",
            "Line 5",
            "Line 2"
          ],
          "a": 0,
          "w": "Satır 4'te \\\" bir tırnak karakteri yazdırır, yani String'i kapatmaz; *string literal* kapanmadığı için *syntax error* olur. Satır 3'teki \\\"ok\\\" geçerli *escape sequence*'lardır. Satır 5 derlenir; sıfıra bölme ancak çalışırken *ArithmeticException* verir (*run-time error*). Derleme ve çalışma hatalarını ayırmak bu sorunun özüdür.",
          "fig": {
            "type": "code",
            "code": "int total = 5;                              // line 1\nString msg = \"Total: \" + total;             // line 2\nSystem.out.println(msg + \" \\\"ok\\\"\");        // line 3\nSystem.out.println(\"Done\\\");                // line 4\nSystem.out.println(total / 0);              // line 5"
          }
        },
        {
          "t": "1.1",
          "q": "The following code segment is intended to print 28 3, the total cost after a fee of 3 is added to a price of 25. Which of the following best describes the problem?",
          "o": [
            "A syntax error: fee cannot be assigned a value twice",
            "A run-time error: fee changes after total has used it",
            "A logic error: total is computed before fee changes, so 25 3 is printed",
            "No error: total updates to 28 automatically when fee changes"
          ],
          "a": 2,
          "w": "*Sequencing*: komutlar yazıldığı sırayla çalışır. total, fee henüz 0 iken hesaplanır: 25. fee'nin sonradan 3 olması total'i yeniden hesaplatmaz. Kod derlenir ve çökmeden çalışır ama yanlış sonuç verir: *logic error*. Bir değişkene birden çok kez atama yapmak serbesttir.",
          "fig": {
            "type": "code",
            "code": "int price = 25;\nint fee = 0;\nint total = price + fee;\nfee = 3;\nSystem.out.println(total + \" \" + fee);"
          }
        },
        {
          "t": "1.2",
          "q": "What is printed as a result of executing the following code segment that updates three variables?",
          "o": [
            "4",
            "23-1",
            "531",
            "2-13"
          ],
          "a": 1,
          "w": "a = 5; b = 5 − 2 = 3; c = 5 − 3 − 3 = −1; a = −1 + 3 = 2. println'de a + \"\" ile String başlar, sonra b ve c yan yana eklenir: \"2\" + \"3\" + \"−1\" = \"23-1\". 4, boş String'i fark etmeyip toplamaktan; 531 ise atamaları başlangıç değerleriyle yapıp yeniden hesaplamamaktan gelir.",
          "fig": {
            "type": "code",
            "code": "int a = 1;\nint b = 2;\nint c = 3;\na = b + c;\nb = a - b;\nc = a - b - c;\na = c + b;\nSystem.out.println(a + \"\" + b + c);"
          }
        },
        {
          "t": "1.2",
          "q": "Which of the following declarations will compile without error?\nI. double d = 5 / 2;\nII. int i = 5.0 / 2;\nIII. int k = (int) 2.5 + 3;",
          "o": [
            "I and III only",
            "I only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 0,
          "w": "I: 5 / 2 bir *int* (2); *int*'i *double*'a koymak serbesttir (*widening*), d = 2.0 olur. II: 5.0 / 2 bir *double* (2.5); *cast* olmadan *int*'e konamaz, derleme hatası. III: (int) 2.5 önce 2 olur, + 3 = 5, *int* değer; derlenir. Önemli olan sağ tarafın tipidir, değeri değil."
        },
        {
          "t": "1.3",
          "q": "What is printed as a result of executing the following code segment that combines remainder, division, and multiplication?",
          "o": [
            "0.4",
            "-15",
            "2",
            "0"
          ],
          "a": 3,
          "w": "x % y = 2, x / y × y = 3 × 5 = 15, 2 / y = 0 (*integer division*). 2 + 15 − 17 + 0 = 0. Aslında x / y × y + x % y her zaman x'i verir. 0.4, 2 / 5'i gerçek bölme sanmaktan; −15, x / y × y'yi x / (y × y) = 0 okumaktan gelir.",
          "fig": {
            "type": "code",
            "code": "int x = 17;\nint y = 5;\nSystem.out.println(x % y + x / y * y - x + 2 / y);"
          }
        },
        {
          "t": "1.3",
          "q": "What is the result of executing the following code segment, which adds up the digits of n before dividing?",
          "o": [
            "12 is printed",
            "An ArithmeticException is thrown",
            "0 is printed",
            "The code does not compile"
          ],
          "a": 1,
          "w": "Basamaklar toplanır: 5 + 4 + 3 = 12. Ama her n /= 10 n'yi küçültür: 34, 3, 0. Son satırda 12 / 0, *int* sıfıra bölmedir ve çalışma anında *ArithmeticException* fırlatılır. Derleyici n'nin 0 olacağını bilemez, bu yüzden kod derlenir. 12 cevabı n'nin son değerini izlememekten gelir.",
          "fig": {
            "type": "code",
            "code": "int n = 345;\nint sum = 0;\nsum += n % 10;\nn /= 10;\nsum += n % 10;\nn /= 10;\nsum += n % 10;\nn /= 10;\nSystem.out.println(sum / n);"
          }
        },
        {
          "t": "1.5",
          "q": "What is printed as a result of executing the following code segment that places casts in different positions?",
          "o": [
            "7.0 4.95 4",
            "6.5 4.95 3",
            "7.0 4.0 3",
            "6.5 4.0 4"
          ],
          "a": 3,
          "w": "r1: (double) a / b = 3.5, ama ikinci a / b *int*: 3; toplam 6.5. r2: (double) (7 / 2) = 3.0; (int) 3.9 önce 3 olur, 3 / 2 = 1; toplam 4.0. r3: 3.5 + 0.5 = 4.0 → 4. \"4.95\" *cast*'in bölmeden sonra uygulandığını (3.9 / 2) sanmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "int a = 7;\nint b = 2;\ndouble r1 = (double) a / b + a / b;\ndouble r2 = (double) (a / b) + (int) 3.9 / b;\nint r3 = (int) ((double) a / b + 0.5);\nSystem.out.println(r1 + \" \" + r2 + \" \" + r3);"
          }
        },
        {
          "t": "1.5",
          "q": "What is printed as a result of executing the following code segment, in which a double sum is not stored exactly?",
          "o": [
            "0.8 8",
            "0.8 7",
            "0.7999999999999999 8",
            "0.7999999999999999 7"
          ],
          "a": 3,
          "w": "*double* ondalık sayıların çoğunu tam saklayamaz (*round-off error*): 0.1 + 0.7, 0.7999999999999999 olarak yazdırılır. d × 10 da 7.999999999999999 olur ve (int) keserek 7 verir, yuvarlamaz. \"8\" içeren şıklar ya bu küçük hatayı ya da (int)'in kesme yaptığını gözden kaçırır.",
          "fig": {
            "type": "code",
            "code": "double d = 0.1 + 0.7;\nSystem.out.println(d + \" \" + (int) (d * 10));"
          }
        },
        {
          "t": "1.6",
          "q": "What is printed as a result of executing the following code segment that alternates between updating an int and appending to a String?",
          "o": [
            "4320",
            "4264",
            "4265",
            "42610"
          ],
          "a": 1,
          "w": "s = \"4\"; k = 4 × 3 = 12; s += 12 / 5 = 2 → \"42\"; k = 12 % 7 = 5; s += 5 + 1 = 6 → \"426\" (sağ taraf önce toplanır); k = 4; s + k = \"4264\". \"4320\" ikinci atamayı k × k − 1 = 15 okumaktan, \"4265\" son k--'yı atlamaktan gelir.",
          "fig": {
            "type": "code",
            "code": "String s = \"\";\nint k = 4;\ns += k;\nk *= k - 1;\ns += k / 5;\nk %= 7;\ns += k + 1;\nk--;\nSystem.out.println(s + k);"
          }
        },
        {
          "t": "1.6",
          "q": "Which of the following code segments leave x with the value 10?",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "I: x = 3 + 6 = 9, sonra 10. II: 25 / 2 = 12 (*integer division*), 12 − 2 = 10. III: x = 2 × (2 + 3) = 10, ama sonra 10 % 6 = 4. II'yi elemek 12.5 düşünmekten, III'ü kabul etmek son satırı unutmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "// I\nint x = 3;\nx += x * 2;\nx++;\n\n// II\nint x = 25;\nx /= 2;\nx -= 2;\n\n// III\nint x = 2;\nx *= 2 + 3;\nx %= 6;"
          }
        },
        {
          "t": "1.7–1.10",
          "q": "Consider the following static method update, defined in the same class as the code segment. What is printed as a result of executing the code segment?",
          "o": [
            "3 hey 12",
            "6 hey! 12",
            "3 hey! 12",
            "3 hey 36"
          ],
          "a": 0,
          "w": "*Call by value*: metodun n ve s'si, çağıranın n ve s'sinin kopyalarıdır. n = n + 3 ve s = s + \"!\" yalnızca bu kopyaları değiştirir. r = (3 + 3) × 2 = 12. İkinci çağrı 36 döndürür ama atanmaz. String *immutable* olduğu için s + \"!\" yeni bir nesne üretir; çağıranın s'si \"hey\" kalır.",
          "fig": {
            "type": "code",
            "code": "public static int update(int n, String s)\n{\n    n = n + s.length();\n    s = s + \"!\";\n    return n * 2;\n}\n\n// code segment\nint n = 3;\nString s = \"hey\";\nint r = update(n, s);\nupdate(r, s + s);\nSystem.out.println(n + \" \" + s + \" \" + r);"
          }
        },
        {
          "t": "1.7–1.10",
          "q": "Consider the following documented static method pair. Which of the following calls satisfies the precondition but still causes a StringIndexOutOfBoundsException?",
          "o": [
            "pair(\"code\", 2)",
            "pair(\"code\", 4)",
            "pair(\"code\", 3)",
            "pair(\"code\", 0)"
          ],
          "a": 2,
          "w": "\"code\"un uzunluğu 4; *precondition* start için 0…3 izin verir. pair(\"code\", 3) şartı sağlar ama substring(3, 5)'te 5 > 4 olduğu için *exception* oluşur; belgedeki şart yetersizdir (doğrusu start < length() − 1 olmalıydı). pair(\"code\", 4) da hata verir ama *precondition*'ı zaten çiğner. 2 ve 0 sorunsuzdur.",
          "fig": {
            "type": "code",
            "code": "/**\n * Precondition: 0 <= start < word.length()\n * Returns the two-letter String that begins at index start\n */\npublic static String pair(String word, int start)\n{\n    return word.substring(start, start + 2);\n}"
          }
        },
        {
          "t": "1.11",
          "q": "Which of the following expressions produce a random even integer from 2 to 10, inclusive, with every even value in that range possible?",
          "o": [
            "I only",
            "III only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "(int) (Math.random() × 5) 0…4 verir. I: 2 ile çarpıp 2 eklemek 2, 4, 6, 8, 10 üretir. III: önce 1…5, sonra 2 ile çarpınca yine 2…10 arası çiftler. II: 2…11 arası bütün tam sayılar; tek sayılar ve 11 de çıkar. I'deki çarpma, *cast*'ten sonra yapıldığı için sonucu bozmaz.",
          "fig": {
            "type": "code",
            "code": "I.   (int) (Math.random() * 5) * 2 + 2\nII.  (int) (Math.random() * 10) + 2\nIII. 2 * ((int) (Math.random() * 5) + 1)"
          }
        },
        {
          "t": "1.11",
          "q": "What is printed as a result of executing the following code segment that combines Math methods with casts?",
          "o": [
            "16",
            "14",
            "15",
            "8"
          ],
          "a": 1,
          "w": "sqrt(9) = 3.0, pow(2, 3.0) = 8.0, abs(−3) = 3; d = 8.0 / 3 = 2.666…. (int) d × 3: *cast* önce, 2 × 3 = 6. (int) (d × 3): parantez önce, 8.0 → 8. Toplam 14. 16 iki terimi de 8 saymaktan, 8 ise ilk terimi gözden kaçırmaktan gelir.",
          "fig": {
            "type": "code",
            "code": "double d = Math.pow(2, Math.sqrt(9)) / Math.abs(-3);\nint e = (int) d * 3 + (int) (d * 3);\nSystem.out.println(e);"
          }
        },
        {
          "t": "1.12–1.14",
          "q": "The Counter class has a constructor Counter(int start), a void method add(int n) that increases the stored value by n, and a method getValue() that returns the stored value. What is printed as a result of executing the following code segment, which creates and reassigns several Counter references?",
          "o": [
            "5 13 1",
            "13 12 1",
            "5 12 2",
            "13 13 1"
          ],
          "a": 3,
          "w": "b yeni nesne (8), c = b aynı nesne. b.add(4) → 12. a = c; a artık bu nesneyi gösterir (4'lük nesneye kimse bakmaz). c yeni bir nesneye (1) geçer; a ile b etkilenmez. a.add(1) ortak nesneyi 13 yapar. a ve b aynı nesne: 13 13; c: 1. \"5 13 1\" a = c'den sonra a'nın eski nesnesinde kaldığını sanmaktır.",
          "fig": {
            "type": "code",
            "code": "Counter a = new Counter(4);\nCounter b = new Counter(a.getValue() * 2);\nCounter c = b;\nb.add(a.getValue());\na = c;\nc = new Counter(1);\na.add(c.getValue());\nSystem.out.println(a.getValue() + \" \" + b.getValue() + \" \" + c.getValue());"
          }
        },
        {
          "t": "1.12–1.14",
          "q": "The Pass class has exactly three constructors: Pass(String name, int level), Pass(int level), and Pass(). Which of the following statements will NOT compile?",
          "o": [
            "Pass p = new Pass(5);",
            "Pass p = null;",
            "Pass p = new Pass(\"Deniz\");",
            "Pass p = new Pass(\"Deniz\", 5 / 2);"
          ],
          "a": 2,
          "w": "*Constructor* çağrısı mevcut imzalardan birine uymalıdır. Yalnızca bir String alan bir *constructor* yok, bu yüzden new Pass(\"Deniz\") derlenmez. 5 / 2 bir *int* ifadesidir (2), Pass(String, int)'e uyar. Pass(5) ikinci *constructor*'dır. Bir *reference*'a null atamak her zaman geçerlidir."
        },
        {
          "t": "1.15-1",
          "q": "What is printed as a result of executing the following code segment that rearranges the letters of a String?",
          "o": [
            "ab4e12",
            "ab4e3",
            "ef4a12",
            "ab5e12"
          ],
          "a": 0,
          "w": "s = \"def\" + \"abc\" = \"defabc\"; substring(1, 5) = \"efab\". t = \"ab\" + 4 + \"e\" = \"ab4e\". t String olduğu için + 1 + 2 birleştirmedir: \"ab4e12\". \"ab4e3\" 1 + 2'yi toplamak, \"ef4a12\" ikinci satırdaki sonucu kullanmadan eski s üzerinden gitmek, \"ab5e12\" bitişi dahil saymaktır.",
          "fig": {
            "type": "code",
            "code": "String s = \"abcdef\";\ns = s.substring(3) + s.substring(0, 3);\ns = s.substring(1, 5);\nString t = s.substring(2) + s.length() + s.substring(0, 1);\nSystem.out.println(t + 1 + 2);"
          }
        },
        {
          "t": "1.15-1",
          "q": "Assume s is a String whose length is odd and at least 3. Which of the following expressions evaluates to the middle letter of s, as a String?",
          "o": [
            "s.substring(s.length() / 2)",
            "s.substring(s.length() / 2 - 1, s.length() / 2)",
            "s.substring(s.length() / 2 + 1, s.length() / 2 + 2)",
            "s.substring(s.length() / 2, s.length() / 2 + 1)"
          ],
          "a": 3,
          "w": "Uzunluk 7 ise *integer division* 7 / 2 = 3 verir ve ortadaki harfin *index*'i tam 3'tür (0…6). Tek harf için substring(i, i + 1) kalıbı kullanılır. substring(3) ortadan sona kadar her şeyi verir. 2'den başlayan şık ortadakinin solundaki harfi, 4'ten başlayan sağındakini alır."
        },
        {
          "t": "1.15-2",
          "q": "The following code segment is intended to print the user name and the host name from an email address. What is the result of executing the code segment?",
          "o": [
            "A StringIndexOutOfBoundsException is thrown",
            "sam.lee box",
            "sam.lee box.org",
            "sam box"
          ],
          "a": 0,
          "w": "indexOf ilk eşleşmeyi verir: at = 7, ama dot = 3, çünkü ilk nokta \"sam.lee\" içindedir. substring(8, 3)'te başlangıç bitişten büyük olduğu için *StringIndexOutOfBoundsException* fırlatılır ve println'e gelinmez. \"sam.lee box\" programcının niyetidir; doğru olması için noktanın @'den sonra aranması gerekirdi.",
          "fig": {
            "type": "code",
            "code": "String e = \"sam.lee@box.org\";\nint at = e.indexOf(\"@\");\nint dot = e.indexOf(\".\");\nString user = e.substring(0, at);\nString host = e.substring(at + 1, dot);\nSystem.out.println(user + \" \" + host);"
          }
        },
        {
          "t": "1.15-2",
          "q": "Using compareTo to decide the order, which of the following lists the Strings \"zebra\", \"Zebra\", \"zeb\", and \"apple\" from first to last?",
          "o": [
            "apple, zeb, zebra, Zebra",
            "apple, Zebra, zeb, zebra",
            "Zebra, apple, zeb, zebra",
            "Zebra, apple, zebra, zeb"
          ],
          "a": 2,
          "w": "*compareTo* karakter kodlarına göre sıralar ve bütün büyük harfler küçüklerden önce gelir; bu yüzden \"Zebra\" \"apple\"dan bile öncedir. \"zeb\", \"zebra\"nın önekidir; kısa olan önce gelir. Alfabetik sezgiyle büyük/küçük harfi yok saymak ilk iki şıkkı, öneki sona koymak sonuncuyu verir."
        }
      ]
    }
  ]
};
