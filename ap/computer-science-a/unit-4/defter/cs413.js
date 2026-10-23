/* Kitpath not defteri · cs413 · 4.16 Özyineleme
   Kaynak: AP CSA CED 2025–26 (Unit 4) kapsamı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs413",
  amac: "Bu konu özyinelemeyi (recursion) anlatıyor: bir metodun kendi kendini daha küçük bir problemle çağırması. Base case ile recursive case'i, çağrı yığınını, çağrıdan önce ve sonra yazdırmanın farkını ve sonsuz özyinelemeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Özyineleme nedir?",
      kisa: "Metot, problemi küçültüp kendini çağırır; en küçük problemde durur.",
      bloklar: [
        { tip: "hikaye", ikon: "🎤", baslik: "Konser kuyruğunda kaçıncısın?", metin: "Kuyrukta kaçıncı olduğunu bilmiyorsun. Önündekine soruyorsun, o da önündekine; en öndeki 'ben birinciyim' diyor. Cevap geriye doğru yürüyor: 'sen ikincisin', 'sen üçüncüsün'. Sorunu küçülterek aynı soruyu tekrarlamak, özyinelemenin kendisi." },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🔁", terim: "Recursion", tr: "özyineleme", tanim: "Bir metodun kendi kendini çağırmasıyla problemi çözmesi. Her çağrı problemi bir adım küçültür.", ornek: "Kuyrukta önündekine sormak." },
            { ikon: "🛑", terim: "Base case", tr: "durma durumu", tanim: "Metodun kendini çağırmadan cevap verdiği en küçük durum. En az bir tane olmak zorundadır.", ornek: "En öndeki: 'ben birinciyim'." },
            { ikon: "↩️", terim: "Recursive case", tr: "özyinelemeli durum", tanim: "Metodun problemi küçültüp kendini çağırdığı durum; parametre base case'e yaklaşır.", ornek: "'Önündekine sor ve cevabına 1 ekle.'" }
          ]
        }
      ]
    },
    {
      baslik: "Çağrıdan önce mi, sonra mı yazdırırsın?",
      kisa: "Özyinelemeli çağrının öncesindeki satırlar sırayla, sonrasındakiler ters sırayla çalışır.",
      bloklar: [
        { tip: "kod", baslik: "Önce yazdır, sonra çağır", kod: `public static void countdown(int n)
{
    if (n == 0)
    {
        System.out.println("Başla");
    }
    else
    {
        System.out.println(n);
        countdown(n - 1);
    }
}`, vurgu: [3, 9, 10], cikti: `3
2
1
Başla`, not: "countdown(3) çağrıldığında: 3 yazılır, countdown(2); 2 yazılır, countdown(1); 1 yazılır, countdown(0) base case: 'Başla'." },
        { tip: "kod", baslik: "Önce çağır, sonra yazdır", kod: `public static void up(int n)
{
    if (n > 0)
    {
        up(n - 1);
        System.out.println(n);
    }
}`, vurgu: [5, 6], cikti: `1
2
3`, not: "up(3), önce up(2)'yi bekler; o up(1)'i; o up(0)'ı (hiçbir şey yapmaz). Dönüşte sırayla 1, 2, 3 yazılır." },
        { tip: "tuzak", metin: "Yazdırma satırı çağrıdan önceyse çıktı ileri, sonrasıysa geri sırada akar. Aynı iki satırın yer değiştirmesi çıktıyı tersine çevirir.", yanlis: "up(3) önce 3 yazdırır, çünkü ilk çağrı n = 3 ile yapılmıştır.", dogru: "3 en son yazılır: println, up(n - 1) bitmeden çalışmaz. Çıktı 1 2 3." }
      ]
    },
    {
      baslik: "Çağrı yığını (*call stack*): kim kimi bekliyor?",
      kisa: "Her çağrının kendi n'i vardır; çağrılar yığına girer, base case'ten sonra çıkar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "📚", terim: "Call stack", tr: "çağrı yığını", tanim: "Bitmemiş metot çağrılarının üst üste tutulduğu liste. Her çağrının parametreleri ve yerel değişkenleri kendisine aittir.", ornek: "fact(3) içindeki n, fact(2) içindeki n'den ayrı bir değişkendir." }] },
        { tip: "kod", baslik: "Faktöriyel", kod: `public static int fact(int n)
{
    if (n <= 1)
        return 1;
    return n * fact(n - 1);
}`, vurgu: [3, 4, 5], not: "fact(4) = 4 ∗ 3 ∗ 2 ∗ 1 = 24. Base case n <= 1; recursive case n ∗ fact(n - 1)." },
        {
          tip: "grafik",
          baslik: "fact(4) çalışırken çağrı yığını",
          xlabel: "",
          ylabel: "çağrı yığını (üst = en yeni)",
          xmax: 9,
          ymax: 8,
          ogeler: [
            { id: "f4", tip: "alan", renk: 0, noktalar: [[0.5, 0.3], [8.5, 0.3], [8.5, 1.9], [0.5, 1.9]], gizli: true },
            { id: "l4", tip: "yazi", x: 4.5, y: 0.9499999999999998, metin: "fact(4)", gizli: true },
            { id: "f3", tip: "alan", renk: 0, noktalar: [[0.5, 2.1], [8.5, 2.1], [8.5, 3.7], [0.5, 3.7]], gizli: true },
            { id: "l3", tip: "yazi", x: 4.5, y: 2.7500000000000004, metin: "fact(3)", gizli: true },
            { id: "f2", tip: "alan", renk: 0, noktalar: [[0.5, 3.9], [8.5, 3.9], [8.5, 5.5], [0.5, 5.5]], gizli: true },
            { id: "l2", tip: "yazi", x: 4.5, y: 4.55, metin: "fact(2)", gizli: true },
            { id: "f1", tip: "alan", renk: 1, noktalar: [[0.5, 5.7], [8.5, 5.7], [8.5, 7.3], [0.5, 7.3]], gizli: true },
            { id: "l1", tip: "yazi", x: 4.5, y: 6.35, metin: "fact(1)", gizli: true }
          ],
          durumlar: [
            { metin: "main, fact(4)'ü çağırır. n = 4 > 1, base case yok. 4 ∗ fact(3) hesaplanacak: fact(3)'ü beklemeye başlar.", goster: ["f4", "l4"], set: { l4: { metin: "fact(4): 4 ∗ fact(3) bekliyor" } } },
            { metin: "fact(3) çağrılır: yığının üstünde yeni bir kutu, kendi n = 3 değişkeniyle. O da fact(2)'yi bekler.", goster: ["f3", "l3"], set: { l3: { metin: "fact(3): 3 ∗ fact(2) bekliyor" } } },
            { metin: "fact(2): n = 2. 2 ∗ fact(1) için fact(1)'i bekler.", goster: ["f2", "l2"], set: { l2: { metin: "fact(2): 2 ∗ fact(1) bekliyor" } } },
            { metin: "fact(1): n <= 1, base case! Başka çağrı yapmadan 1 döndürür. Yığın bu noktadan sonra boşalmaya başlar.", goster: ["f1", "l1"], set: { l1: { metin: "fact(1): base case, return 1" } } },
            { metin: "fact(1) yığından çıktı. fact(2) şimdi 2 ∗ 1 = 2 hesaplar ve 2 döndürür.", gizle: ["f1", "l1"], set: { l2: { metin: "fact(2) = 2 ∗ 1 = 2" } } },
            { metin: "fact(2) çıktı. fact(3) = 3 ∗ 2 = 6.", gizle: ["f2", "l2"], set: { l3: { metin: "fact(3) = 3 ∗ 2 = 6" } } },
            { metin: "fact(3) çıktı. fact(4) = 4 ∗ 6 = 24 ve main'e 24 döner. Sonuç, yığın boşalırken geriye doğru birikti.", gizle: ["f3", "l3"], set: { l4: { metin: "fact(4) = 4 ∗ 6 = 24" } } }
          ]
        }
      ]
    },
    {
      baslik: "Değer döndüren özyineleme",
      kisa: "Alt çağrının döndürdüğü değer, üstteki çağrının hesabında kullanılır.",
      bloklar: [
        { tip: "kod", baslik: "Basamak toplamı", kod: `public static int sumDigits(int n)
{
    if (n < 10)
        return n;
    return n % 10 + sumDigits(n / 10);
}`, vurgu: [3, 4, 5], not: "n % 10 son basamağı, n / 10 son basamağı atılmış sayıyı verir. Tek basamaklı sayı base case'tir." },
        {
          tip: "ornek",
          baslik: "sumDigits(472) nasıl hesaplanır?",
          durum: "sumDigits(472) çağrılıyor.",
          adimlar: ["sumDigits(472): 472 >= 10, 2 + sumDigits(47) için bekler.", "sumDigits(47): 47 >= 10, 7 + sumDigits(4) için bekler.", "sumDigits(4): 4 < 10, base case, 4 döner.", "Geri dönüş: sumDigits(47) = 7 + 4 = 11. sumDigits(472) = 2 + 11 = 13."],
          sonuc: "13 (toplam 3 çağrı yapıldı)"
        }
      ]
    },
    {
      baslik: "Base case'siz özyineleme: *StackOverflowError*",
      kisa: "Her çağrı base case'e yaklaşmalı; yoksa yığın dolar ve program çöker.",
      bloklar: [
        { tip: "kod", baslik: "1'den n'ye toplam; ya n negatifse?", kod: `public static int sumTo(int n)
{
    if (n == 0)
        return 0;
    return n + sumTo(n - 1);
}
// çağıran kod
System.out.println(sumTo(3));
System.out.println(sumTo(-1));`, vurgu: [3, 5, 9], cikti: `6
Exception in thread "main" java.lang.StackOverflowError`, not: "sumTo(3) = 3 + 2 + 1 + 0 = 6. sumTo(-1) için n -1, -2, -3 … diye iner, 0'a asla ulaşmaz; yığın dolar." },
        { tip: "tuzak", metin: "Base case yazmak yetmez; çağrıların ona ulaşması gerekir.", yanlis: "n sıfıra eşit olunca durduğu için sumTo her sayıda biter.", dogru: "Negatif girdide parametre 0'dan uzaklaşır, sonsuz özyineleme olur ve StackOverflowError çıkar (çalışma anı hatası)." }
      ]
    },
    {
      baslik: "Yazıyla özyineleme ve döngüyle karşılaştırma",
      kisa: "Özyinelemeyle yapılan her iş döngüyle de yapılır; yazıda substring ile küçültülür.",
      bloklar: [
        { tip: "kod", baslik: "Yazıyı ters çevir", kod: `public static String reverse(String s)
{
    if (s.length() <= 1)
        return s;
    return reverse(s.substring(1)) + s.substring(0, 1);
}
// çağıran kod
System.out.println(reverse("abc"));`, vurgu: [3, 5], cikti: "cba", not: "reverse('abc') = reverse('bc') + 'a'; reverse('bc') = reverse('c') + 'b' = 'cb'. Sonuç 'cb' + 'a'." },
        {
          tip: "ikili",
          sol: { ikon: "🔁", baslik: "Özyineleme", maddeler: ["Metot kendini çağırır", "Durmak için base case ister"] },
          sag: { ikon: "🔄", baslik: "Döngü (*for*, *while*)", maddeler: ["Tek metotta tekrar eder", "Sayaç ya da koşul ilerletir"] },
          oyun: [
            { metin: "Metot gövdesinde kendi adını çağırır", cevap: "sol", neden: "Özyinelemenin tanımı." },
            { metin: "Her adımın kendi parametre kopyası çağrı yığınında durur", cevap: "sol", neden: "Her çağrı yeni bir n ile açılır." },
            { metin: "while (koşul) ile tekrarlanır", cevap: "sag", neden: "Döngü yapısı." },
            { metin: "i++ gibi bir sayaç adım adım ilerletir", cevap: "sag", neden: "Döngüde ilerleme değişkenin güncellenmesiyle olur." },
            { metin: "Sonsuza giderse StackOverflowError verir", cevap: "sol", neden: "Yığın dolar; döngüde sonsuzluk programı takılı bırakır." }
          ]
        }
      ]
    },
    {
      baslik: "Sınav için bilmen gerekenler",
      kisa: "Özyinelemeyi çoğunlukla okuyup izlersin: çıktıyı ya da dönüş değerini bul.",
      bloklar: [
        {
          tip: "tablo",
          head: ["", "Unit 4'te bu konuda"],
          rows: [
            ["✍️ Yazarsın", "Base case ile recursive case'i ayırt etmek ve bir metodun hangisini içerdiğini göstermek."],
            ["👀 Okursun", "Özyinelemeli kodun çıktısını ya da dönüş değerini izlemek, çağrı sayısını bulmak, çağrıdan önce/sonra yazdırmanın farkını görmek, sonsuz özyinelemeyi fark etmek."],
            ["🚫 Gerekmez", "Üstel hesap maliyeti analizi, kuyruk özyineleme (tail recursion) ya da bellek ayrıntıları."]
          ]
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: ["Özyinelemeli metot kendini daha küçük bir problemle çağırır.", "En az bir base case (kendini çağırmayan durum) şarttır; recursive case parametreyi base case'e yaklaştırır.", "Her çağrının kendi parametre ve yerel değişkenleri vardır; çağrılar yığına girer, base case'ten sonra geri çıkar.", "Çağrıdan önceki satırlar ileri, sonrasındakiler geri sırada çalışır.", "Değer döndüren özyinelemede alt çağrının sonucu üst çağrının hesabına girer (fact, sumDigits).", "Base case'e ulaşılmazsa *StackOverflowError* olur.", "Özyinelemeyle çözülen her problem döngüyle de çözülebilir."]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "f(5) çağrısı ne döndürür?",
      fig: {
        type: "code",
        code: `public static int f(int n)
{
    if (n <= 0)
        return 0;
    return n + f(n - 2);
}`
      },
      opts: ["9", "15", "6", "5"],
      a: 0,
      why: "f(5) = 5 + f(3) = 5 + 3 + f(1) = 5 + 3 + 1 + f(-1); f(-1) base case (n <= 0) ve 0 döner. Toplam 9. 15, her sayıyı (5 + 4 + 3 + 2 + 1) toplamaktır; ama parametre 2'şer azalıyor."
    },
    {
      q: "show(3) çağrısı ekrana ne yazdırır?",
      fig: {
        type: "code",
        code: `public static void show(int n)
{
    if (n > 0)
    {
        System.out.print(n + " ");
        show(n - 1);
        System.out.print(n + " ");
    }
}`
      },
      opts: ["3 2 1", "1 2 3", "3 2 1 1 2 3", "3 2 1 0 1 2 3"],
      a: 2,
      why: "İlk print çağrıdan önce: show(3) 3, show(2) 2, show(1) 1 yazar. show(0) hiçbir şey yazmaz (n > 0 değil). Dönüşte ikinci print'ler çalışır: 1, 2, 3. Sonuç 3 2 1 1 2 3. 0 base case'te yazdırılmaz."
    },
    {
      q: "g(-1) çağrılırsa ne olur?",
      fig: {
        type: "code",
        code: `public static int g(int n)
{
    if (n == 0)
        return 1;
    return 2 * g(n - 1);
}`
      },
      opts: ["0 döner", "StackOverflowError fırlatılır", "1 döner", "-2 döner"],
      a: 1,
      why: "n = -1, -2, -3 … diye azalır ve hiçbir zaman 0'a ulaşmaz; base case çalışmaz. Çağrı yığını dolar ve çalışma anında StackOverflowError oluşur. 1 diyen, ilk çağrıda base case'e ulaşıldığını sanmıştır."
    },
    {
      q: "mix(\"kod\") çağrısı ne döndürür?",
      fig: {
        type: "code",
        code: `public static String mix(String s)
{
    if (s.length() <= 1)
        return s;
    return mix(s.substring(1)) + s.substring(0, 1);
}`
      },
      opts: ["kod", "dko", "okd", "dok"],
      a: 3,
      why: "mix(\"kod\") = mix(\"od\") + \"k\". mix(\"od\") = mix(\"d\") + \"o\" = \"do\". Sonuç \"do\" + \"k\" = \"dok\". Harflerin başa değil sona eklendiğini unutan, yazının aynen kaldığını sanır."
    },
    {
      q: "sumDigits(805) çağrısında metot, ilk çağrı dahil toplam kaç kez çağrılır?",
      fig: {
        type: "code",
        code: `public static int sumDigits(int n)
{
    if (n < 10)
        return n;
    return n % 10 + sumDigits(n / 10);
}`
      },
      opts: ["2", "3", "4", "5"],
      a: 1,
      why: "sumDigits(805) → sumDigits(80) → sumDigits(8). 8 < 10, base case. Üç çağrı yapılır ve sonuç 5 + 0 + 8 = 13 olur. 4 diyen, 0 basamağını ayrı bir çağrı olarak saymıştır; 80 / 10 zaten doğrudan 8 verir."
    }
  ]
};
