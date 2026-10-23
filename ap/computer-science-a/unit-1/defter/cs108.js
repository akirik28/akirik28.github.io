/* Kitora not defteri · cs108 · 1.12–1.14 Nesneler, Referanslar ve null
   Kaynak: ap-videolar/src/episodes/cs108 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs108",
  amac: "*Java*'da nesne nedir, nasıl üretilir ve bir değişkenin içinde gerçekte ne durur? *Class* ile *object* farkını, *constructor*'ı, *reference*'ı, *aliasing*'i ve *null* hatasını öğreneceksin.",
  bolumler: [
    {
      baslik: "*Class* kalıptır, *object* örnektir",
      kisa: "Class kalıp, object o kalıptan basılmış tek örnektir.",
      bloklar: [
        { tip: "hikaye", ikon: "🎟️", baslik: "Konser biletinin kalıbı",
          metin: "Matbaada tek bir bilet tasarımı var: grup adı, tarih ve koltuk numarası yazılacak yerler. Kalıp bir kez çiziliyor, ondan binlerce bilet basılıyor. Hepsi aynı biçimde ama her birinin koltuğu farklı. Nesne yönelimli programlamanın özü bu." },
        { tip: "kavramlar", kartlar: [
            { ikon: "📐", terim: "Class", tr: "sınıf", tanim: "Bir şeyin hangi verilere ve hangi davranışlara (metotlara) sahip olacağını tanımlayan kalıp.", ornek: "*Ticket* sınıfı: veri olarak grup ve koltuk, davranış olarak *getSeat*, *setSeat*." },
            { ikon: "🎫", terim: "Object", tr: "nesne (instance)", tanim: "Kalıptan üretilmiş tek bir örnek; *instance* da denir.", ornek: "Elindeki 12 numaralı bilet bir nesnedir." }
          ] },
        { tip: "ikili", sol: { ikon: "📐", baslik: "*Class* (kalıp)", maddeler: ["Tasarım, bir tane", "Verileri ve davranışları tanımlar"] },
          sag: { ikon: "🎫", baslik: "*Object* (örnek)", maddeler: ["Kalıptan basılan tek parça", "Her birinin değerleri farklı olabilir"] },
          oyun: [
            { metin: "Matbaadaki tek bilet tasarımı", cevap: "sol", neden: "Kalıp: *class*." },
            { metin: "Elindeki 12 numaralı bilet", cevap: "sag", neden: "Kalıptan basılmış tek örnek: *object*." },
            { metin: "*String* (yazı türünün kendisi)", cevap: "sol", neden: "*String* bir sınıftır; ilk günden beri nesne kullanıyorsun." },
            { metin: "Tırnak içindeki \"Kitora\" yazısı", cevap: "sag", neden: "*String* sınıfından bir nesne." },
            { metin: "*Ticket*", cevap: "sol", neden: "Sınıfın adı: kalıp." }
          ] }
      ]
    },
    {
      baslik: "*new* ve *constructor*",
      kisa: "new nesneyi kurar; argümanlar constructor'ın imzasına uymalı.",
      bloklar: [
        { tip: "kod", baslik: "Bilet üret", kod: "Ticket t = new Ticket(\"Duman\", 12);", vurgu: [1],
          not: "*new*'den sonra gelen *Ticket(...)* kısmı *constructor* çağrısıdır: nesneyi kurar, ilk değerlerini verir." },
        { tip: "tablo", baslik: "*Ticket* sınıfının iki *constructor*'ı: Ticket(*String* band, *int* seat) ve Ticket()", head: ["Çağrı", "Uyan imza", "Sonuç"], rows: [
            ["new Ticket(\"Duman\", 12)", "Ticket(*String*, *int*)", "Derlenir"],
            ["new Ticket()", "Ticket()", "Derlenir"],
            ["new Ticket(12, \"Duman\")", "sıra ters: önce *String*, sonra *int* beklenir", "Derlenmez"]
          ], vurgu: 2, not: "Sınıfın birden fazla *constructor*'ı olabilir; bu da *overloading*'dir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔨", terim: "new", tr: "yeni nesne oluştur", tanim: "Bellekte yeni bir nesne üretir ve *constructor*'ı çağırır.", ornek: "new Ticket(\"Duman\", 12)" },
            { ikon: "🏗️", terim: "Constructor", tr: "kurucu metot", tanim: "Sınıfla aynı adı taşıyan özel metot: nesneyi kurar ve ilk değerlerini verir. Argümanlar imzasına uymalı.", ornek: "Ticket(*String* band, *int* seat)" }
          ] }
      ]
    },
    {
      baslik: "Değişkenin içinde ne durur? *Reference*",
      kisa: "Nesne değişkeninde nesnenin kendisi değil, ona giden ok durur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➡️", terim: "Reference", tr: "referans", tanim: "Nesnenin bellekteki adresi; kutudan nesneye giden bir ok. *Ticket* t dediğinde kutuda bilet değil, bilete giden ok durur.", ornek: "t kutusunda adres var, bilet başka yerde." }
          ] },
        { tip: "ikili", sol: { ikon: "🟦", baslik: "*int*, *double*, *boolean*", maddeler: ["Kutuda değerin kendisi durur", "int seat = 12; ⇒ kutuda 12"] },
          sag: { ikon: "⬜", baslik: "Nesne değişkeni", maddeler: ["Kutuda yalnız nesneye giden ok durur", "Ticket t; ⇒ kutuda ok"] },
          oyun: [
            { metin: "int seat = 12; satırındaki seat kutusu", cevap: "sol", neden: "Kutuda 12'nin kendisi var." },
            { metin: "Ticket t = new Ticket(\"Duman\", 12); satırındaki t kutusu", cevap: "sag", neden: "Kutuda bilete giden *reference* var." },
            { metin: "boolean ok = true; satırındaki ok kutusu", cevap: "sol", neden: "Kutuda true değerinin kendisi var." },
            { metin: "String s = \"Kitora\"; satırındaki s kutusu", cevap: "sag", neden: "*String* de nesnedir; kutuda ona giden ok durur." }
          ] }
      ]
    },
    {
      baslik: "Nesnenin metodunu çağırmak",
      kisa: "Nesne metotları nesne.metot() diye, nokta ile çağrılır.",
      bloklar: [
        { tip: "kod", baslik: "Koltuğu oku, değiştir", kod: "Ticket t = new Ticket(\"Duman\", 12);\nint s = t.getSeat();\nt.setSeat(20);\nSystem.out.println(s);\nSystem.out.println(t.getSeat());", vurgu: [2, 3], cikti: "12\n20",
          not: "getSeat koltuk numarasını döndürür (12). setSeat(20) ise *void*: değer döndürmez, nesnenin içini değiştirir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚙️", terim: "Instance method", tr: "nesne metodu", tanim: "Bir nesneye aittir, nesne.metot() ile çağrılır; önce bir nesne gerekir. Metodu çağırırken nokta ok izleyerek nesneye gider.", ornek: "t.getSeat() çağrısı t'nin gösterdiği biletten 12 getirir." }
          ] },
        { tip: "ikili", sol: { ikon: "🎫", baslik: "*Instance method*", maddeler: ["nesne.metot()", "Önce nesne gerekir"] },
          sag: { ikon: "🧮", baslik: "*Static method*", maddeler: ["SınıfAdı.metot()", "Nesne gerekmez"] },
          oyun: [
            { metin: "t.getSeat()  (t bir *Ticket*)", cevap: "sol", neden: "t bir nesne: *instance method*." },
            { metin: "Math.sqrt(9)", cevap: "sag", neden: "Sınıf adıyla çağrıldı: *static*." },
            { metin: "s.length()  (s bir *String*)", cevap: "sol", neden: "s bir nesne, metot nesneye ait." },
            { metin: "Math.abs(-3)", cevap: "sag", neden: "*Math* sınıfı, nesne üretilmez: *static*." }
          ] }
      ]
    },
    {
      baslik: "*Aliasing*: bir nesne, iki ad",
      kisa: "b = a yeni nesne basmaz; oku kopyalar, iki ad tek nesneyi gösterir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👥", terim: "Aliasing", tr: "takma ad", tanim: "İki değişkenin aynı nesneye bakması. Biri nesneyi değiştirirse öteki de değişikliği görür.", ornek: "Kardeşinle aynı Netflix hesabını kullanmak: biri profili değiştirince ikiniz de görürsünüz." }
          ] },
        { tip: "kod", baslik: "Atama bilet basmaz", kod: "Ticket a = new Ticket(\"Sezen\", 5);\nTicket b = a;\nb.setSeat(9);\nSystem.out.println(a.getSeat());", vurgu: [2], cikti: "9" },
        { tip: "tablo", baslik: "İzleme tablosu", head: ["Satır", "a", "b", "Biletin koltuğu"], rows: [
            ["Ticket a = new Ticket(\"Sezen\", 5);", "bilet →", "—", "5"],
            ["Ticket b = a;", "bilet →", "aynı bilet →", "5"],
            ["b.setSeat(9);", "bilet →", "aynı bilet →", "9"],
            ["println(a.getSeat())", "bilet →", "aynı bilet →", "9 yazılır"]
          ], vurgu: 2 }
      ]
    },
    {
      baslik: "*null* ve *NullPointerException*",
      kisa: "null hiçbir nesneye bakmaz; üzerinden metot çağırmak çalışırken patlar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "∅", terim: "null", tr: "hiçbir nesne", tanim: "Hiçbir nesneye bakmayan referans: ok yok, boşluk var.", ornek: "Ticket c = null;" },
            { ikon: "💥", terim: "NullPointerException", tr: "null üzerinden metot çağrısı hatası", tanim: "null olan bir referansla metot çağırınca fırlatılan çalışma anı hatası (*run-time error*). Derleme hatası değildir: derleyici kutunun içinde ne olacağını bilemez.", ornek: "c.getSeat() çalışırken çöker." }
          ] },
        { tip: "kod", baslik: "Boşluğa metot çağırmak", kod: "Ticket c = null;\nSystem.out.println(c.getSeat());", vurgu: [2], cikti: "Exception in thread \"main\" java.lang.NullPointerException",
          not: "Kod derlenir ama çalışırken ikinci satırda program durur." },
        { tip: "tuzak", metin: "*null*'a metot çağırmak ne sıfır yazdırır ne de \"null\" yazar; kod derlenir ama program çalışırken durur.", yanlis: "c.getSeat() 0 ya da null yazdırır, ya da derleme hatası verir.", dogru: "Derlenir; çalışırken *NullPointerException* fırlatır." }
      ]
    },
    {
      baslik: "*AP* örneği: y = x sonsuz bağ değildir",
      kisa: "y = x o anki oku kopyalar; sonra x değişince y yerinde kalır.",
      bloklar: [
        { tip: "kod", baslik: "Ne yazdırılır?", kod: "Ticket x = new Ticket(\"Duman\", 3);\nTicket y = x;\ny.setSeat(8);\nx = new Ticket(\"Duman\", 1);\nSystem.out.println(x.getSeat() + \" \" + y.getSeat());", vurgu: [4], cikti: "1 8" },
        { tip: "ornek", baslik: "Okları izle", durum: "Yukarıdaki beş satır çalışınca konsolda ne görünür?", adimlar: [
            "1–2. satır: x yeni bilete (koltuk 3) bakar; y = x ile y de aynı bilete bakar. İki ok, tek bilet.",
            "3. satır: y.setSeat(8) ortak bileti 8 yapar.",
            "4. satır: x yeni bir bilete (koltuk 1) döner. y eski bilette, yani 8'de kalır.",
            "5. satır: x.getSeat() = 1, y.getSeat() = 8; yazdırılan 1 ve 8."
          ], sonuc: "1 8" },
        { tip: "tuzak", metin: "y = x, y'yi sonsuza dek x'e bağlamaz; yalnızca o anki oku kopyalar. Sonra x başka nesneye geçse de y eskisinde kalır.", yanlis: "Çıktı 1 1 olur (y, x'i izler).", dogru: "Çıktı ==1 8==: y eski bileti göstermeye devam eder." }
      ]
    },
    {
      baslik: "Sınav için bilmen gerekenler",
      kisa: "Nesne üret ve çağır; referans diyagramını ve null'ı oku.",
      bloklar: [
        { tip: "tablo", head: ["", "Unit 1'de bu konuda"], rows: [
            ["✍️ Yazarsın", "*new* ile, *constructor* argümanlarını doğru sırada vererek nesne üretmek; nokta ile metot çağırmak; dönüş değerini kullanmak."],
            ["👀 Okursun", "Referans diyagramları, iki değişkenin aynı nesneye baktığı durumlar, *null* üzerinden çağrının *NullPointerException* vermesi."],
            ["🚫 Gerekmez", "Gerçek bellek adresleri ve *garbage collection* ayrıntıları. Sınıfın içini yazmak Unit 3'ün işi."]
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Class* kalıp, *object* o kalıptan bir örnektir (*instance*); *String* de bir sınıftır.",
            "Nesne *new* ve *constructor* ile kurulur; argümanlar imzaya uymalı.",
            "Nesne değişkeninde nesne değil, ona giden *reference* durur.",
            "Nesne metodu nesne.metot() ile çağrılır; *static* metot SınıfAdı.metot() ile.",
            "Bir referansı başka değişkene atamak *aliasing* yaratır: iki ad, tek nesne.",
            "y = x sonsuz bağ değil, o anki referansın kopyasıdır.",
            "*null* referans üzerinden metot çağırmak *NullPointerException* fırlatır (çalışma anı hatası)."
          ] }
      ]
    }
  ]
};
