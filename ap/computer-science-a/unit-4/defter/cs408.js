/* Kitora not defteri · cs408 · 4.9–4.10 ArrayList Dolaşma ve Algoritmalar
   Kaynak: AP CSA CED 2025–26 (Unit 4) kapsamı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs408",
  amac: "Bu konu bir *ArrayList*'i baştan sona gezmeyi ve onunla klasik işler yapmayı anlatıyor: toplam, en büyük, sayma, koşula uyanı bulma, ekleme ve silme. Gezerken silince elemanların neden atlandığını ve sınırı nasıl kontrol edeceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Gezmenin yolları: indeksli *for*, *while*, *enhanced for*",
      kisa: "İndeks gerekiyorsa indeksli döngü, yalnız değer gerekiyorsa *enhanced for*.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [{ ikon: "🚶", terim: "Traversal", tr: "dolaşma", tanim: "Listenin elemanlarını sırayla, tek tek ziyaret etmek.", ornek: "Çalma listesindeki her şarkıyı sırayla yazdırmak." }, { ikon: "🔁", terim: "Enhanced for loop", tr: "for-each döngüsü", tanim: "Her turda sıradaki elemanı bir değişkene alır; indeks tutmaz.", ornek: "for (String s : songs)" }]
        },
        { tip: "kod", baslik: "Aynı listeyi iki yolla gez", kod: `ArrayList<String> songs = new ArrayList<String>();
songs.add("Aşk");
songs.add("Yaz");
songs.add("Gece");
for (int i = 0; i < songs.size(); i++)
{
    System.out.println(i + ": " + songs.get(i));
}
for (String s : songs)
{
    System.out.println(s);
}`, vurgu: [5, 9], cikti: `0: Aşk
1: Yaz
2: Gece
Aşk
Yaz
Gece`, not: "İlk döngü indeksi de verir; ikincisi yalnız değeri. *while* ile de aynısı yazılır: indeksi kendin başlatır, kendin artırırsın." },
        {
          tip: "ikili",
          sol: { ikon: "🔢", baslik: "İndeksli *for* ya da *while*", maddeler: ["i değişkeni vardır, get(i) ile okunur", "Eleman değiştirmek, silmek, komşusuna bakmak için"] },
          sag: { ikon: "👁️", baslik: "*Enhanced for*", maddeler: ["Elemanı doğrudan verir", "Yalnız okumak için: toplam, sayma, en büyük"] },
          oyun: [
            { metin: "Değerlerin toplamını almak", cevap: "sag", neden: "Yalnız okuyorsun, indeks gerekmez." },
            { metin: "Her elemanı bir sonrakiyle karşılaştırmak", cevap: "sol", neden: "get(i) ve get(i + 1) için indeks gerekir." },
            { metin: "Bazı elemanları listeden silmek", cevap: "sol", neden: "Silme indeksle yapılır; *enhanced for* içinde liste değiştirilmez." },
            { metin: "20'den büyük kaç eleman var saymak", cevap: "sag", neden: "Her elemana bir kez bakmak yeter." },
            { metin: "Elemanın kaçıncı sırada olduğunu yazdırmak", cevap: "sol", neden: "Sırayı yalnız indeks söyler." }
          ]
        }
      ]
    },
    {
      baslik: "Sınır: *size()* ve *IndexOutOfBoundsException*",
      kisa: "Geçerli indeksler 0'dan size() − 1'e kadar; size() geçersizdir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Dizi ve *ArrayList* yazımı",
          head: ["", "Dizi", "ArrayList"],
          rows: [["Eleman sayısı", "arr.length", "list.size()"], ["Okuma", "arr[i]", "list.get(i)"], ["Yazma", "arr[i] = x;", "list.set(i, x);"], ["Son indeks", "arr.length - 1", "list.size() - 1"], ["Sınır aşılırsa", "ArrayIndexOutOfBoundsException", "IndexOutOfBoundsException"]],
          vurgu: 3,
          not: "Yazım karıştırılır: listede length ya da köşeli parantez yoktur."
        },
        { tip: "kod", baslik: "Bir fazla tur", kod: `ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(10);
nums.add(20);
for (int i = 0; i <= nums.size(); i++)
{
    System.out.println(nums.get(i));
}`, vurgu: [4], cikti: `10
20
Exception in thread "main" java.lang.IndexOutOfBoundsException`, not: "Üçüncü turda i = 2 olur ama liste yalnız iki elemanlı (indeksler 0 ve 1)." },
        { tip: "tuzak", metin: "Sınır hatası döngü başlığındaki tek bir işaretle olur: i <= list.size(). Kod derlenir, çalışırken patlar.", yanlis: "<= yazınca son elemana da gidilir.", dogru: "Son indeks size() - 1; döngü i < list.size() ile durmalı." }
      ]
    },
    {
      baslik: "Toplam, ortalama, en büyük ve sayma",
      kisa: "Toplayıcıyı döngüden önce başlat, her turda güncelle.",
      bloklar: [
        { tip: "kod", baslik: "Harçlık harcamaları", kod: `ArrayList<Integer> spend = new ArrayList<Integer>();
spend.add(40);
spend.add(15);
spend.add(60);
spend.add(25);
int sum = 0;
int max = spend.get(0);
int count = 0;
for (int x : spend)
{
    sum += x;
    if (x > max)
        max = x;
    if (x > 20)
        count++;
}
double avg = (double) sum / spend.size();
System.out.println(sum + " " + max + " " + count + " " + avg);`, vurgu: [6, 7, 8, 17], cikti: "140 60 3 35.0", not: "Ortalamada (double) cast'i bölmeden önce gelir; yoksa tam sayı bölmesi ondalığı keser." },
        {
          tip: "tablo",
          baslik: "Her turdan sonra değişkenler (izleme tablosu)",
          head: ["Tur", "x", "sum", "max", "count"],
          rows: [["başta", "—", "0", "40", "0"], ["1", "40", "40", "40", "1"], ["2", "15", "55", "40", "1"], ["3", "60", "115", "60", "2"], ["4", "25", "140", "60", "3"]],
          vurgu: 3,
          not: "3. turda 60 > 40 olduğu için max değişti; count yalnız 20'den büyüklerde arttı."
        },
        { tip: "tuzak", metin: "max'ı 0 ile başlatırsan [-5, -2, -9] gibi negatif bir listede cevap 0 çıkar; 0 listede yok.", yanlis: "int max = 0; her liste için güvenlidir.", dogru: "int max = list.get(0); ile başla (liste boş değilse). Boş listede get(0) hata verir." }
      ]
    },
    {
      baslik: "Var mı, hepsi mi, ardışık çiftler",
      kisa: "Biri uyarsa hemen true; biri bozarsa hemen false; döngüden sonra tersi.",
      bloklar: [
        { tip: "kod", baslik: "Biri 50'yi geçiyor mu? Hepsi 50'nin altında mı?", kod: `public static boolean anyOver50(ArrayList<Integer> list)
{
    for (int x : list)
    {
        if (x > 50)
            return true;
    }
    return false;
}
public static boolean allUnder50(ArrayList<Integer> list)
{
    for (int x : list)
    {
        if (x >= 50)
            return false;
    }
    return true;
}`, vurgu: [6, 8, 15, 17], not: "[10, 60, 30] için anyOver50 true döner (60'ta durur), allUnder50 ise 60'ı görünce false döner." },
        { tip: "kod", baslik: "Ardışık çiftler: artan sırada mı?", kod: `public static boolean isAscending(ArrayList<Integer> list)
{
    for (int i = 0; i < list.size() - 1; i++)
    {
        if (list.get(i) > list.get(i + 1))
            return false;
    }
    return true;
}`, vurgu: [3, 5], not: "Her turda (i, i + 1) çiftine bakıldığı için döngü size() - 1'de durur; yoksa get(i + 1) sınırı aşar." },
        { tip: "tuzak", metin: "'Var mı' sorusunda else içine return false yazmak ilk elemanda kararı verdirir.", yanlis: "if (x > 50) return true; else return false; her listede doğru çalışır.", dogru: "[10, 60] listesinde ilk eleman 10 olduğundan false döner. false'u yalnız döngüden sonra yaz." }
      ]
    },
    {
      baslik: "Gezerken silmek: elemanlar atlanır",
      kisa: "Silince elemanlar sola kayar; i artarsa sıradaki atlanır. Çözüm: i-- ya da sondan başa.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Çift sayıları silen hatalı döngü: [2, 4, 5, 6, 8]",
          xlabel: "indeks",
          ylabel: "değer",
          xmax: 5,
          ymax: 10,
          xticks: [{ v: 0.5, label: "0" }, { v: 1.5, label: "1" }, { v: 2.5, label: "2" }, { v: 3.5, label: "3" }, { v: 4.5, label: "4" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "b0", tip: "alan", renk: 0, noktalar: [[0.15, 0], [0.85, 0], [0.85, 2], [0.15, 2]] },
            { id: "b1", tip: "alan", renk: 0, noktalar: [[1.15, 0], [1.85, 0], [1.85, 4], [1.15, 4]] },
            { id: "b2", tip: "alan", renk: 0, noktalar: [[2.15, 0], [2.85, 0], [2.85, 5], [2.15, 5]] },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[3.15, 0], [3.85, 0], [3.85, 6], [3.15, 6]] },
            { id: "b4", tip: "alan", renk: 0, noktalar: [[4.15, 0], [4.85, 0], [4.85, 8], [4.15, 8]] },
            { id: "v0", tip: "yazi", x: 0.5, y: 2.7, metin: "2" },
            { id: "v1", tip: "yazi", x: 1.5, y: 4.7, metin: "4" },
            { id: "v2", tip: "yazi", x: 2.5, y: 5.7, metin: "5" },
            { id: "v3", tip: "yazi", x: 3.5, y: 6.7, metin: "6" },
            { id: "v4", tip: "yazi", x: 4.5, y: 8.7, metin: "8" },
            { id: "ptr", tip: "yazi", x: 0.5, y: 9.4, metin: "i ↓" },
            { id: "sz", tip: "yazi", x: 4.95, y: 9.4, hiza: "end", metin: "size = 5" }
          ],
          durumlar: [
            {
              metin: "Başlangıç: [2, 4, 5, 6, 8]. Amaç: çift sayıların hepsini silmek. i = 0'dan başlıyoruz.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 2], [0.15, 2]] },
                v0: { y: 2.7, metin: "2" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 4], [1.15, 4]] },
                v1: { y: 4.7, metin: "4" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 5], [2.15, 5]] },
                v2: { y: 5.7, metin: "5" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 6], [3.15, 6]] },
                v3: { y: 6.7, metin: "6" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 8], [4.15, 8]] },
                v4: { y: 8.7, metin: "8" },
                ptr: { x: 0.5, metin: "i ↓" },
                sz: { metin: "size = 5" }
              }
            },
            {
              metin: "i = 0: 2 çift, remove(0). Herkes sola kaydı: 4 artık indeks 0'da. Ama sonra i++ ile i = 1 oldu; 4 hiç kontrol edilmedi!",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 4], [0.15, 4]] },
                v0: { y: 4.7, metin: "4" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 5], [1.15, 5]] },
                v1: { y: 5.7, metin: "5" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 6], [2.15, 6]] },
                v2: { y: 6.7, metin: "6" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 8], [3.15, 8]] },
                v3: { y: 8.7, metin: "8" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 0], [4.15, 0]] },
                v4: { y: 0.7, metin: " " },
                ptr: { x: 1.5, metin: "i ↓" },
                sz: { metin: "size = 4" }
              },
              gizle: ["b4", "v4"]
            },
            {
              metin: "i = 1: 5 tek, geçildi. i = 2: 6 çift, silinecek.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 4], [0.15, 4]] },
                v0: { y: 4.7, metin: "4" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 5], [1.15, 5]] },
                v1: { y: 5.7, metin: "5" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 6], [2.15, 6]] },
                v2: { y: 6.7, metin: "6" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 8], [3.15, 8]] },
                v3: { y: 8.7, metin: "8" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 0], [4.15, 0]] },
                v4: { y: 0.7, metin: " " },
                ptr: { x: 2.5, metin: "i ↓" },
                sz: { metin: "size = 4" }
              },
              gizle: ["b4", "v4"]
            },
            {
              metin: "remove(2) sonrası liste [4, 5, 8] ve i++ ile i = 3 oldu. size = 3 olduğu için döngü bitiyor. 8 hiç bakılmadan kaldı.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 4], [0.15, 4]] },
                v0: { y: 4.7, metin: "4" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 5], [1.15, 5]] },
                v1: { y: 5.7, metin: "5" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
                v2: { y: 8.7, metin: "8" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 0], [3.15, 0]] },
                v3: { y: 0.7, metin: " " },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 0], [4.15, 0]] },
                v4: { y: 0.7, metin: " " },
                ptr: { x: 3.5, metin: "i ↓" },
                sz: { metin: "size = 3" }
              },
              gizle: ["b4", "v4", "b3", "v3"]
            },
            {
              metin: "Sonuç hatalı: [4, 5, 8]'de iki çift sayı kalmış. Doğrusu [5]: silince i-- yap ya da listeyi sondan başa doğru gez.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 5], [0.15, 5]] },
                v0: { y: 5.7, metin: "5" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 0], [1.15, 0]] },
                v1: { y: 0.7, metin: " " },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 0], [2.15, 0]] },
                v2: { y: 0.7, metin: " " },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 0], [3.15, 0]] },
                v3: { y: 0.7, metin: " " },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 0], [4.15, 0]] },
                v4: { y: 0.7, metin: " " },
                ptr: { x: 0.5, metin: "✓" },
                sz: { metin: "size = 1" }
              },
              gizle: ["b4", "v4", "b3", "v3", "b1", "b2", "v1", "v2"]
            }
          ]
        },
        { tip: "kod", baslik: "İki doğru çözüm", kod: `// 1) silince i-- yap
for (int i = 0; i < list.size(); i++)
{
    if (list.get(i) % 2 == 0)
    {
        list.remove(i);
        i--;
    }
}
// 2) sondan başa doğru gez
for (int i = list.size() - 1; i >= 0; i--)
{
    if (list.get(i) % 2 == 0)
        list.remove(i);
}`, vurgu: [7, 11, 14], not: "İkisi de [2, 4, 5, 6, 8] listesini [5] yapar. Geriye giderken silinen elemanın solundaki indeksler bozulmaz." },
        { tip: "tuzak", metin: "Enhanced for içinde listeye eleman eklemek ya da silmek ConcurrentModificationException fırlatabilir.", yanlis: "for (int x : list) içinde silmek, indeksli for gibi çalışır.", dogru: "Boyutu değiştirecek işlem (add, remove) için indeksli for ya da while kullan." }
      ]
    },
    {
      baslik: "Ekleme, silme, takas ve yeni liste",
      kisa: "add(i, x) sağa, remove(i) sola kaydırır; set(i, x) kaydırmadan değiştirir.",
      bloklar: [
        { tip: "tablo", baslik: "Her satır [10, 20, 30] listesinden ayrı başlar", head: ["Çağrı", "Liste sonra", "Boyut", "Döndürür"], rows: [["list.add(1, 15)", "[10, 15, 20, 30]", "4", "—"], ["list.set(1, 99)", "[10, 99, 30]", "3", "20 (eski değer)"], ["list.remove(1)", "[10, 30]", "2", "20 (silinen)"]], vurgu: 1 },
        { tip: "kod", baslik: "Koşula uyanları yeni listeye topla, ilk ile son yer değiştir", kod: `ArrayList<Integer> big = new ArrayList<Integer>();
for (int x : spend)
{
    if (x > 20)
        big.add(x);
}
int temp = spend.get(0);
spend.set(0, spend.get(spend.size() - 1));
spend.set(spend.size() - 1, temp);
System.out.println(big + " " + spend);`, vurgu: [5, 7, 8, 9], cikti: "[40, 60, 25] [25, 15, 60, 40]", not: "spend, üçüncü başlıktaki [40, 15, 60, 25] listesidir. Takasta temp olmazsa ilk değer kaybolur." }
      ]
    },
    {
      baslik: "Sınav için bilmen gerekenler",
      kisa: "FRQ 3 bu konudan: gezme, sayma, filtreleme, güvenli silme.",
      bloklar: [
        {
          tip: "tablo",
          head: ["", "Unit 4'te bu konuda"],
          rows: [
            ["✍️ Yazarsın", "Gezme döngüsü; toplam, sayma, en büyük; koşula uyanı yeni listeye toplamak; güvenli silme; add, get, set, remove, size çağrıları."],
            ["👀 Okursun", "Gezerken silen kodun sonucunu izlemek; hangi döngünün eleman atladığını bulmak; IndexOutOfBoundsException ve ConcurrentModificationException."],
            ["🚫 Gerekmez", "Iterator, removeIf, lambda ya da Java Quick Reference'ta olmayan ArrayList metotları."]
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
          maddeler: ["Gezmenin yolları: indeksli *for*, *while* ve *enhanced for*; indeks lazımsa ilkini seç.", "Geçerli indeksler 0 … size() − 1; i <= size() yazmak *IndexOutOfBoundsException* getirir.", "Toplayıcıyı döngüden önce başlat; max/min'i ilk elemanla başlat.", "'Var mı' için bulunca hemen true, 'hepsi mi' için bozulunca hemen false; karşıt return döngüden sonra.", "Ardışık çiftlerde döngü size() - 1'de durur.", "İndeksli döngüde remove(i) sonrası elemanlar sola kayar: i-- yap ya da sondan başa git.", "*Enhanced for* içinde listenin boyutunu değiştirme.", "add(i, x) kaydırarak ekler, set(i, x) yerine koyar ve eski değeri döndürür, remove(i) siler ve silineni döndürür."]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Kod çalışınca ekrana ne yazdırılır?",
      fig: {
        type: "code",
        code: `ArrayList<Integer> list = new ArrayList<Integer>();
list.add(1);
list.add(2);
list.add(2);
list.add(3);
for (int i = 0; i < list.size(); i++)
{
    if (list.get(i) == 2)
        list.remove(i);
}
System.out.println(list);`
      },
      opts: ["[1, 3]", "[1, 2, 3]", "[1, 2, 2, 3]", "IndexOutOfBoundsException"],
      a: 1,
      why: "i = 1'de ilk 2 silinir, liste [1, 2, 3] olur ve i++ ile i = 2'ye geçilir. İkinci 2 artık indeks 1'dedir, hiç kontrol edilmez. Sonuç [1, 2, 3]. [1, 3] diyen, silmenin elemanı atlatmadığını sanmıştır."
    },
    {
      q: "Metot, parametre olarak [4, 7, 7, 2, 9] listesiyle çağrılırsa ne döndürür?",
      fig: {
        type: "code",
        code: `public static int mystery(ArrayList<Integer> list)
{
    int c = 0;
    for (int i = 0; i < list.size() - 1; i++)
    {
        if (list.get(i) < list.get(i + 1))
            c++;
    }
    return c;
}`
      },
      opts: ["1", "3", "4", "2"],
      a: 3,
      why: "Çiftlere bakılır: (4, 7) küçük, (7, 7) küçük değil, (7, 2) değil, (2, 9) küçük. Yani 2 çift sayılır. 4 diyen, 4 komşu çiftin hepsini saymıştır; 3 diyen ise 7 < 7 eşitliğini de saymıştır."
    },
    {
      q: "Aşağıdaki döngü list içindeki bütün negatif sayıları silmeyi amaçlıyor, ancak [-1, -2, 3] gibi ardışık negatifleri atlıyor. Hangi değişiklik hatayı giderir?",
      fig: {
        type: "code",
        code: `int i = 0;
while (i < list.size())
{
    if (list.get(i) < 0)
        list.remove(i);
    i++;
}`
      },
      opts: ["i++ yalnızca eleman silinmediğinde çalışsın (else bloğuna alınsın)", "i++ satırı remove satırından önce yazılsın", "while yerine enhanced for kullanılsın", "remove(i) yerine set(i, 0) kullanılsın"],
      a: 0,
      why: "Silince elemanlar sola kayar; aynı indekse tekrar bakmak gerekir, bu yüzden i yalnız silinmediğinde artmalıdır. i++'ı öne almak yanlış elemanı siler. Enhanced for içinde silmek hata fırlatabilir; set(i, 0) ise elemanı silmez."
    },
    {
      q: "nums listesinin toplamı sum (int) olarak bulundu. nums = [3, 4, 4] için 3.666... değerini (double olarak) veren ifade hangisidir?",
      opts: ["sum / nums.size()", "(double) (sum / nums.size())", "(double) sum / nums.size()", "sum / nums.length"],
      a: 2,
      why: "(double) sum önce toplamı double yapar, sonra bölme ondalıklı yapılır: 11.0 / 3. İkinci seçenekte tam sayı bölmesi (11 / 3 = 3) önce yapılıp sonra cast edilir, 3.0 çıkar. Dördüncüde ise listede length yoktur, derlenmez."
    },
    {
      q: "Kod çalışınca ekrana ne yazdırılır?",
      fig: {
        type: "code",
        code: `ArrayList<Integer> list = new ArrayList<Integer>();
list.add(5);
list.add(10);
list.add(15);
list.add(1, 7);
list.set(2, 9);
int r = list.remove(0);
System.out.println(r + " " + list);`
      },
      opts: ["5 [7, 10, 15]", "5 [7, 9, 15]", "7 [5, 9, 15]", "5 [7, 9, 10, 15]"],
      a: 1,
      why: "add(1, 7) sonrası [5, 7, 10, 15]; set(2, 9) indeks 2'deki 10'u 9 yapar: [5, 7, 9, 15]; remove(0) 5'i siler ve döndürür: r = 5, liste [7, 9, 15]. set yerine add sanan [7, 9, 10, 15] seçeneğine gider."
    }
  ]
};
