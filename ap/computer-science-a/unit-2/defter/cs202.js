/* Kitpath not defteri · cs202 · 2.3–2.4 if ve İç İçe if
   Kaynak: AP CSA CED 2025–26 (Unit 2) kapsamı. Blok türleri: /ap/_kit/defter.js başı.
   Not: metin alanlarında çift eşittir "=​=" ile yazıldı (araya görünmez boşluk), vurgu işaretiyle karışmasın diye. */
window.DEFTER = {
  slug: "cs202",
  amac: "Bu konu programın nasıl karar verdiğini anlatıyor: *if*, *if-else*, *else if* zinciri ve iç içe *if*. Hangi koşulun hangi dalı çalıştırdığını izlemeyi, süslü parantez ve *else* tuzaklarını öğreneceksin.",
  bolumler: [
    {
      baslik: "*if* ve *if-else*: bir ya da iki yol",
      kisa: "if koşul true ise çalışır; else aksi halde çalışır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "1️⃣", terim: "One-way selection", tr: "tek yollu seçim", tanim: "*if* gövdesi koşul true ise çalışır, değilse atlanır.", ornek: "Bakiye 50 TL'den azsa uyarı yaz." },
            { ikon: "2️⃣", terim: "Two-way selection", tr: "iki yollu seçim", tanim: "*if-else* iki daldan tam birini çalıştırır: true ise *if*, değilse *else*.", ornek: "18 yaş ve üstüne tam bilet, diğerlerine öğrenci bileti." }
          ] },
        { tip: "kod", baslik: "Bilet fiyatı", kod: `int age = 15;
if (age >= 18)
{
    System.out.println("Bilet: tam");
}
else
{
    System.out.println("Bilet: öğrenci");
}`, vurgu: [2, 6], cikti: "Bilet: öğrenci" }
      ]
    },
    {
      baslik: "*else if* zinciri: ilk true olan kazanır",
      kisa: "Zincirde ilk doğru koşulun dalı çalışır, kalanlar denenmez.",
      bloklar: [
        { tip: "kod", baslik: "Harf notu", kod: `int score = 85;
if (score >= 90)
{
    System.out.println("A");
}
else if (score >= 80)
{
    System.out.println("B");
}
else if (score >= 70)
{
    System.out.println("C");
}
else
{
    System.out.println("F");
}`, vurgu: [2, 6, 10], cikti: "B" },
        { tip: "tablo", baslik: "score değişince hangi dal çalışır?", head: ["score", "İlk true olan koşul", "Yazdırılan"], rows: [
            ["95", "score >= 90", "A"],
            ["85", "score >= 80 (90'ı geçemedi)", "B"],
            ["70", "score >= 70", "C"],
            ["69", "hiçbiri, else çalışır", "F"]
          ] },
        { tip: "tuzak", baslik: "Ayrı *if*'ler zincir değildir", metin: "Peş peşe yazılan ayrı *if* satırlarının her biri kendi başına denenir. score = 85 iken *if* (score >= 80) ve *if* (score >= 70) ikisi de true olur ve iki harf yazılır.", yanlis: "Art arda *if* satırları *else if* gibi çalışır.", dogru: "Yalnızca *else if* ve *else* zincire bağlar: ilk true olan dal çalışır, kalanlar hiç denenmez." }
      ]
    },
    {
      baslik: "Süslü parantez ve yanıltıcı girinti",
      kisa: "Parantez yoksa if yalnızca kendinden sonraki tek ifadeyi kapsar.",
      bloklar: [
        { tip: "kod", baslik: "Girinti kandırır", kod: `int n = 3;
if (n > 5)
    System.out.println("büyük");
    System.out.println("bitti");`, vurgu: [2, 3], cikti: "bitti", not: "Girinti derleyici için anlam taşımaz. Süslü parantez yoksa *if* yalnızca ilk ifadeyi kapsar; ikinci satır her durumda çalışır." },
        { tip: "tuzak", baslik: "Koşuldan sonra noktalı virgül", metin: "Koşulun hemen ardına noktalı virgül koyarsan *if* boş bir ifadeyle biter. Sonraki satır koşula bağlı olmaz, hep çalışır.", yanlis: "if (n > 5); satırından sonraki println yalnızca n > 5 iken çalışır.", dogru: "Noktalı virgül *if*'i bitirir; println koşuldan bağımsız her zaman çalışır." }
      ]
    },
    {
      baslik: "İç içe *if*",
      kisa: "İçteki if yalnızca dıştaki koşul true ise denenir.",
      bloklar: [
        { tip: "kod", baslik: "Hafta sonu planı", kod: `int hour = 14;
boolean weekend = true;
if (weekend)
{
    if (hour < 12)
    {
        System.out.println("Uyu");
    }
    else
    {
        System.out.println("Maç");
    }
}
else
{
    System.out.println("Ders");
}`, vurgu: [3, 5], cikti: "Maç" },
        { tip: "adimlar", baslik: "Karar ağacını izle", adimlar: [
            { baslik: "weekend true mu?", metin: "Evet: dış *if*'in gövdesine gir. Hayır olsaydı doğrudan \"Ders\" yazılırdı." },
            { baslik: "hour < 12 mi?", metin: "14 < 12 false: içteki *else* çalışır." },
            { baslik: "Çıktı", metin: "\"Maç\" yazılır; dıştaki *else* atlanır." }
          ] }
      ]
    },
    {
      baslik: "*else* hangi *if*'e aittir?",
      kisa: "else, kendisinden önceki en yakın eşlenmemiş if'e bağlanır.",
      bloklar: [
        { tip: "kod", baslik: "Süslü parantezsiz iç içe", kod: `int a = 5;
int b = -2;
if (a > 0)
    if (b > 0)
        System.out.println("X");
else
    System.out.println("Y");`, vurgu: [4, 6], cikti: "Y", not: "Girinti dışa bağlı gibi görünse de *else*, en yakın *if* olan (b > 0)'a bağlıdır." },
        { tip: "tablo", baslik: "a ve b değişince çıktı", head: ["a", "b", "Çıktı"], rows: [
            ["5", "-2", "Y"],
            ["5", "3", "X"],
            ["-1", "3", "(hiçbir şey)"],
            ["-1", "-2", "(hiçbir şey)"]
          ], vurgu: 0, not: "a = -1 iken dış koşul false olduğu için içteki if-else tamamen atlanır." },
        { tip: "tuzak", baslik: "Dıştaki *if*'in *else*'i sanmak", metin: "a = -1 iken Y yazılacağını düşünmek en sık yapılan hatadır. Gerçekte hiçbir şey yazılmaz.", yanlis: "*else*, girintisine bakılarak dıştaki if'e bağlanır.", dogru: "Girinti anlam taşımaz; *else* en yakın if'e bağlanır. Dışa bağlamak için içteki if'i süslü parantezle kapat." }
      ]
    },
    {
      baslik: "Zincir mi, iç içe mi?",
      kisa: "Seçenekler birbirini dışlıyorsa zincir, karar öncekine bağlıysa iç içe.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🪜", baslik: "*else if* zinciri", maddeler: ["Seçenekler birbirini dışlar", "Tek bir dal çalışır"] },
          sag: { ikon: "🪆", baslik: "İç içe *if*", maddeler: ["İkinci karar birinciye bağlıdır", "Önce dış koşul, sonra iç koşul sorulur"] },
          oyun: [
            { metin: "Puana göre harf notu: A, B, C ya da F.", cevap: "sol", neden: "Dört seçenek birbirini dışlar: zincir." },
            { metin: "Önce öğrenci mi diye bak, öğrenciyse yaşa göre indirim ver.", cevap: "sag", neden: "Yaş sorusu öğrenci olmaya bağlı: iç içe." },
            { metin: "Sayı negatif mi, sıfır mı, pozitif mi?", cevap: "sol", neden: "Üçü birbirini dışlar: zincir." },
            { metin: "Kullanıcı giriş yaptıysa şifresi doğru mu diye bak.", cevap: "sag", neden: "Şifre sorusu giriş yapılmasına bağlı: iç içe." }
          ] },
        { tip: "kod", baslik: "İç içe örnek: kantin indirimi", kod: `int price = 120;
boolean student = true;
if (student)
{
    price = price - 24;
    if (price > 90)
    {
        price = price - 5;
    }
}
System.out.println(price);`, vurgu: [3, 6], cikti: "91" },
        { tip: "ornek", baslik: "price kaç olur?", durum: "price = 120 ve student = true iken yukarıdaki kodu izle.",
          adimlar: [
            "student true: dış *if*'in gövdesine girilir.",
            "price = 120 - 24 = 96.",
            "İç koşul: 96 > 90 true, iç *if* de çalışır.",
            "price = 96 - 5 = 91; println 91 yazdırır."
          ], sonuc: "Çıktı ==91==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*if* yalnızca koşul true ise çalışır; *if-else* iki daldan tam birini çalıştırır.",
            "*else if* zincirinde ilk true olan dal çalışır, kalanlar denenmez.",
            "Ayrı *if*'ler her zaman ayrı ayrı denenir; ikisi de çalışabilir.",
            "Süslü parantez yoksa *if* yalnızca bir ifadeyi kapsar; girinti kandırır.",
            "Koşuldan sonraki noktalı virgül *if*'i boş bırakır.",
            "İç içe *if*'te içteki koşul yalnızca dıştaki true ise sorulur.",
            "*else* her zaman en yakın eşlenmemiş *if*'e bağlanır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int x = 10;
if (x > 8)
{
    x = x - 6;
}
else if (x > 3)
{
    x = x + 100;
}
if (x > 3)
{
    x = x + 1;
}
System.out.println(x);` },
      opts: ["4", "5", "104", "105"], a: 1,
      why: "x = 10: x > 8 true, x = 4 olur. else if zincirin parçası olduğundan atlanır. Sonraki if ayrı bir ifadedir: 4 > 3 true, x = 5. 4 diyen ayrı if'i unutmuştur; 104 ve 105 else if'in de çalıştığını varsayar." },
    { q: "Kod çalışınca ekrana ne yazılır? (Çıktı satırları sırayla verilmiştir.)",
      fig: { type: "code", code: `int a = 2;
int b = 0;
if (a > 0)
    if (b > 0)
        System.out.println("P");
else
    System.out.println("Q");
System.out.println("R");` },
      opts: ["R", "P, R", "Q, R", "P, Q, R"], a: 2,
      why: "else en yakın if'e, yani (b > 0)'a bağlanır. a > 0 true, b > 0 false: else çalışır ve Q yazılır; ardından R her durumda yazılır. \"R\" diyen, else'i girintisine bakarak dıştaki if'e bağlamıştır." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `int coins = 1;
if (coins > 3)
    coins = coins + 10;
    coins = coins * 2;
System.out.println(coins);` },
      opts: ["22", "12", "1", "2"], a: 3,
      why: "Süslü parantez yok: if yalnızca coins + 10 satırını kapsar. coins > 3 false olduğundan o satır atlanır; coins'i 2 ile çarpan satır ise her durumda çalışır ve sonuç 2 olur. 22, iki satırı da if'in içindeymiş gibi okumaktır; 1 ise çarpma satırının da atlandığını varsayar." },
    { q: "Kod çalışınca ekrana hangi satırlar yazılır?",
      fig: { type: "code", code: `int p = 7;
int q = 4;
if (p > q)
{
    if (p - q > 5)
    {
        System.out.println("A");
    }
    else if (p - q > 2)
    {
        System.out.println("B");
    }
}
else
{
    System.out.println("C");
}
System.out.println("D");` },
      opts: ["A, D", "B, D", "C, D", "Yalnız D"], a: 1,
      why: "p > q true (7 > 4), dış if girilir. p - q = 3: 3 > 5 false, 3 > 2 true, B yazılır. Dıştaki else atlanır; D her durumda yazılır. \"Yalnız D\" diyen, iç zincirin hiçbir dalının çalışmadığını sanmıştır." },
    { q: "Kod dört kez çalıştırılıyor: n sırasıyla 10, 11, 100 ve 101 değerlerini alıyor. Toplam kaç kez \"Medium\" yazdırılır?",
      fig: { type: "code", code: `if (n > 100)
{
    System.out.println("High");
}
else if (n > 10)
{
    System.out.println("Medium");
}
else
{
    System.out.println("Low");
}` },
      opts: ["0", "1", "2", "3"], a: 2,
      why: "10: n > 10 false, Low. 11: Medium. 100: n > 100 false ama n > 10 true, Medium. 101: High. Toplam iki kez. Sınır değerleri (10 ve 100) en sık karıştırılan yerlerdir; 100 \"High\" sanılırsa 1 şıkkına gidilir." }
  ]
};
