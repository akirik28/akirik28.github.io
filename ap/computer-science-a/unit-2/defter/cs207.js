/* Kitpath not defteri · cs207 · 2.10 String Algoritmaları
   Kaynak: AP CSA CED 2025–26 (Unit 2) kapsamı; String metotları Java Quick Reference'tan: length, substring, indexOf, equals, compareTo.
   Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs207",
  amac: "Bu konu *String* üzerinde döngüyle çalışmayı anlatıyor: harf harf gezme, harf sayma, süzme, tersine çevirme, palindrom ve kayan pencereyle arama. Sınavda bu kalıplar *length*, *substring*, *indexOf* ve *equals* ile yazılır.",
  bolumler: [
    {
      baslik: "Harf harf gezmek",
      kisa: "Index 0'dan length() - 1'e gider; her harf substring(i, i + 1).",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📍", terim: "Index", tr: "indeks", tanim: "Bir harfin sırası. İlk harf 0'dır, son harf length() - 1'dir.", ornek: "\"kedi\" uzunluğu 4, son index 3." },
            { ikon: "🚶", terim: "String traversal", tr: "String gezintisi", tanim: "Bir String'in harflerini baştan sona sırayla incelemek. Genellikle bir for döngüsüyle yapılır.", ornek: "Her harfi sayan, süzen ya da tersine çeviren algoritmalar." }
          ] },
        { tip: "tablo", baslik: "\"kedi\" kelimesinin harfleri", head: ["i", "0", "1", "2", "3"], rows: [
            ["harf", "k", "e", "d", "i"],
            ["çağrı", "substring(0, 1)", "substring(1, 2)", "substring(2, 3)", "substring(3, 4)"]
          ], not: "length() = 4 olduğundan son index 3'tür; koşul i < word.length() olur." },
        { tip: "kod", baslik: "Her harfi yazdır", kod: `String word = "kedi";
for (int i = 0; i < word.length(); i++)
{
    System.out.println(i + ": " + word.substring(i, i + 1));
}`, vurgu: [2, 4], cikti: "0: k\n1: e\n2: d\n3: i" },
        { tip: "tuzak", baslik: "Bir tur fazla", metin: "Koşulu i <= word.length() yazarsan son turda substring(4, 5) çağrılır; bitiş index'i uzunluğu aşar ve StringIndexOutOfBoundsException fırlatılır.", yanlis: "Son harfe ulaşmak için i <= word.length() gerekir.", dogru: "Son index length() - 1'dir; koşul i < word.length() olmalı." }
      ]
    },
    {
      baslik: "Harf sayma ve süzme",
      kisa: "Her harfi sına; uyanı say ya da yeni String'e ekle.",
      bloklar: [
        { tip: "kod", baslik: "Sayma: banana içinde kaç a?", kod: `String s = "banana";
int count = 0;
for (int i = 0; i < s.length(); i++)
{
    if (s.substring(i, i + 1).equals("a"))
    {
        count++;
    }
}
System.out.println(count);`, vurgu: [5], cikti: "3", not: "String'leri karşılaştırmak için equals kullan." },
        { tip: "kod", baslik: "Süzme: kitap kelimesinden i harfini at", kod: `String s = "kitap";
String out = "";
for (int i = 0; i < s.length(); i++)
{
    String ch = s.substring(i, i + 1);
    if (!ch.equals("i"))
    {
        out = out + ch;
    }
}
System.out.println(out);`, vurgu: [2, 8], cikti: "ktap", not: "out boş String ile başlar; uygun harfler sona eklenir." }
      ]
    },
    {
      baslik: "Tersine çevirme",
      kisa: "Her harfi yeni String'in soluna ekle ya da sondan başa gez.",
      bloklar: [
        { tip: "kod", baslik: "Harfi başa ekleyerek ters çevir", kod: `String word = "kedi";
String rev = "";
for (int i = 0; i < word.length(); i++)
{
    rev = word.substring(i, i + 1) + rev;
}
System.out.println(rev);`, vurgu: [5], cikti: "idek" },
        { tip: "tablo", baslik: "İzleme tablosu", head: ["i", "Alınan harf", "rev (tur sonu)"], rows: [
            ["0", "k", "k"],
            ["1", "e", "ek"],
            ["2", "d", "dek"],
            ["3", "i", "idek"]
          ], not: "Her yeni harf rev'in önüne eklendiği için sıra tersine döner." }
      ]
    },
    {
      baslik: "Palindrom",
      kisa: "Tersi kendisine eşitse palindromdur; karşılaştırmada equals kullan.",
      bloklar: [
        { tip: "kod", baslik: "Sondan başa gezerek ters çevir ve karşılaştır", kod: `String s = "radar";
String rev = "";
for (int i = s.length() - 1; i >= 0; i--)
{
    rev = rev + s.substring(i, i + 1);
}
System.out.println(rev.equals(s));`, vurgu: [3, 5], cikti: "true", not: "i = 4, 3, 2, 1, 0 için rev sırayla r, ra, rad, rada, radar olur." },
        { tip: "ikili", sol: { ikon: "🪞", baslik: "Palindrom", maddeler: ["Tersi kendisine eşit", "equals true verir"] },
          sag: { ikon: "🚫", baslik: "Palindrom değil", maddeler: ["Tersi farklı", "equals false verir"] },
          oyun: [
            { metin: "radar", cevap: "sol", neden: "Tersi radar." },
            { metin: "kalem", cevap: "sag", neden: "Tersi melak." },
            { metin: "Ada", cevap: "sag", neden: "Tersi \"adA\"; *equals* büyük ve küçük harfi ayırır." },
            { metin: "anna", cevap: "sol", neden: "Tersi anna." }
          ] }
      ]
    },
    {
      baslik: "Kayan pencereyle arama",
      kisa: "Uzun bir parçayı aramak için pencereyi harf harf kaydır.",
      bloklar: [
        { tip: "kod", baslik: "banana içinde an kaç kez geçer?", kod: `String s = "banana";
String target = "an";
int count = 0;
for (int i = 0; i <= s.length() - target.length(); i++)
{
    if (s.substring(i, i + target.length()).equals(target))
    {
        count++;
    }
}
System.out.println(count);`, vurgu: [4, 6], cikti: "2" },
        { tip: "ornek", baslik: "Pencereleri tek tek gez", durum: "s = \"banana\" (uzunluk 6), target = \"an\" (uzunluk 2). Son başlangıç index'i 6 - 2 = 4.",
          adimlar: [
            "i = 0: substring(0, 2) = \"ba\", eşleşmez.",
            "i = 1: substring(1, 3) = \"an\", eşleşir, count = 1.",
            "i = 2: substring(2, 4) = \"na\", eşleşmez.",
            "i = 3: substring(3, 5) = \"an\", eşleşir, count = 2.",
            "i = 4: substring(4, 6) = \"na\", eşleşmez.",
            "i = 5: 5 <= 4 false, döngü biter."
          ], sonuc: "count = ==2==." },
        { tip: "tuzak", baslik: "Son pencere", metin: "Pencere target.length() harfliyse son başlangıç index'i s.length() - target.length()'tir. Koşulu i < s.length() yazarsan son turlarda substring sınırı aşar.", yanlis: "Her i için substring(i, i + target.length()) güvenlidir.", dogru: "Koşul i <= s.length() - target.length() olmalı; yoksa StringIndexOutOfBoundsException oluşur." }
      ]
    },
    {
      baslik: "*indexOf* ile bölmek",
      kisa: "indexOf ayırıcının yerini bulur; substring iki yanını keser.",
      bloklar: [
        { tip: "kod", baslik: "E-posta adresini ayır", kod: `String mail = "ece@okul.com";
int at = mail.indexOf("@");
String user = mail.substring(0, at);
String domain = mail.substring(at + 1);
System.out.println(user + " " + domain + " " + at);`, vurgu: [2, 3, 4], cikti: "ece okul.com 3" },
        { tip: "tablo", baslik: "\"ece@okul.com\" üzerinde indexOf", head: ["Çağrı", "Sonuç", "Açıklama"], rows: [
            ["mail.indexOf(\"@\")", "3", "@ işareti index 3'te"],
            ["mail.indexOf(\"o\")", "4", "ilk o harfi"],
            ["mail.indexOf(\"e\")", "0", "ilk e baştadır"],
            ["mail.indexOf(\"z\")", "-1", "bulunamadı"]
          ], not: "indexOf bulduğu ilk yerin index'ini verir; bulamazsa -1 verir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "String gezintisi: for (int i = 0; i < s.length(); i++) ve harf için s.substring(i, i + 1).",
            "i <= s.length() yazarsan StringIndexOutOfBoundsException oluşur.",
            "String'leri equals ile karşılaştır; equals büyük ve küçük harfi ayırır.",
            "Sayma: eşleşince count++; süzme: uyan harfi out = out + ch ile ekle.",
            "Ters çevirme: harfi başa ekle (harf + rev) ya da sondan başa gez (rev + harf).",
            "Palindrom: tersi kendisine equals ile eşit mi?",
            "Pencere araması: i <= s.length() - target.length() ve substring(i, i + target.length()).",
            "indexOf ilk yerin index'ini verir, bulamazsa -1; substring ile ayırmada birlikte kullanılır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `String s = "kitap";
String t = "";
for (int i = 0; i < s.length(); i++)
{
    if (i % 2 == 0)
    {
        t = t + s.substring(i, i + 1);
    }
}
System.out.println(t);` },
      opts: ["ktp", "ia", "kitap", "ktap"], a: 0,
      why: "k=0, i=1, t=2, a=3, p=4. Yalnızca çift index'lerdeki harfler (0, 2, 4) eklenir: k, t, p. \"ia\" tek index'lerdir; \"ktap\" i harfini atan süzme kodunun çıktısıdır." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `String s = "abc";
String r = "";
for (int i = 0; i < s.length(); i++)
{
    r = s.substring(i, i + 1) + r + s.substring(i, i + 1);
}
System.out.println(r);` },
      opts: ["aabbcc", "abccba", "cbaabc", "cbabc"], a: 2,
      why: "Her turda yeni harf r'nin hem soluna hem sağına eklenir. i = 0: aa; i = 1: b + aa + b = baab; i = 2: c + baab + c = cbaabc. \"abccba\" harfleri dışarıdan içeri değil içeriden dışarı ekler." },
    { q: "Kod çalışınca ne olur?",
      fig: { type: "code", code: `String w = "mavi";
for (int i = 0; i <= w.length(); i++)
{
    System.out.print(w.substring(i, i + 1));
}` },
      opts: ["\"mavi\" yazdırır ve normal biter", "Hiçbir şey yazdırmaz; derleme hatası verir", "\"ivam\" yazdırır", "\"mavi\" yazdırır, sonra StringIndexOutOfBoundsException fırlatılır"], a: 3,
      why: "i = 0…3 için m, a, v, i yazılır. i = 4'te koşul 4 <= 4 true olduğundan substring(4, 5) çağrılır; bitiş index'i 5, uzunluk 4'ü aştığı için StringIndexOutOfBoundsException oluşur. Kod derlenir, hata çalışma zamanındadır." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `String s = "abababa";
int count = 0;
for (int i = 0; i < s.length() - 2; i++)
{
    if (s.substring(i, i + 3).equals("aba"))
    {
        count++;
    }
}
System.out.println(count);` },
      opts: ["2", "3", "4", "5"], a: 1,
      why: "Uzunluk 7, pencere 3 harf: i = 0…4. substring(0, 3) aba, (1, 4) bab, (2, 5) aba, (3, 6) bab, (4, 7) aba: üç eşleşme. Pencereler çakışabilir ve hepsi sayılır; \"2\" çakışmayanları sayar." },
    { q: "Kod çalışınca ekrana ne yazılır?",
      fig: { type: "code", code: `String path = "ders/mat/not.txt";
int p = path.indexOf("/");
String rest = path.substring(p + 1);
int q = rest.indexOf("/");
System.out.println(rest.substring(0, q) + "-" + p + "-" + q);` },
      opts: ["mat-5-3", "mat-4-3", "mat-4-4", "ders-4-3"], a: 1,
      why: "\"ders\" 4 harf, bu yüzden ilk \"/\" index 4'tedir: p = 4. rest = path.substring(5) = \"mat/not.txt\". rest içinde \"/\" index 3'te: q = 3. rest.substring(0, 3) = \"mat\". Sonuç mat-4-3." }
  ]
};
