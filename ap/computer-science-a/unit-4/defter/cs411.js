/* Kitora not defteri · cs411 · 4.14 Arama Algoritmaları
   Kaynak: AP CSA CED 2025–26 (Unit 4) kapsamı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs411",
  amac: "Bu konu bir dizide ya da *ArrayList*'te bir değeri bulmayı anlatıyor: tek tek bakan doğrusal (linear) arama ve her adımda veriyi yarıya indiren ikili (binary) arama. Hangisinin ne zaman kullanılacağını ve kaç adım süreceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Arama: değeri bul ya da -1 dön",
      kisa: "İki yol var: baştan sona bakmak ya da sıralı veriyi ortadan bölmek.",
      bloklar: [
        { tip: "hikaye", ikon: "📖", baslik: "Sözlükte kelime aramak", metin: "Sözlükte 'kitap'ı ararken ilk sayfadan başlamazsın; ortaya açar, harfe bakarsın, 'k' sonraysa ortanın sonrasına geçersin. Bu yöntem yalnız sözlük alfabetik sıralı olduğu için çalışır. Sıra yoksa tek tek bakmaktan başka çare kalmaz." },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "👣", terim: "Linear search", tr: "doğrusal (sıralı) arama", tanim: "Baştan başlar, her elemana sırayla bakar; bulunca durur. Veri sıralı olmak zorunda değildir.", ornek: "Sırasız numara listesinde bir numarayı aramak." },
            { ikon: "✂️", terim: "Binary search", tr: "ikili arama", tanim: "Sıralı veride ortadaki elemana bakar, hedef sağdaysa sol yarıyı, soldaysa sağ yarıyı eler. Her adımda aralık yarıya iner.", ornek: "Sıralı fiyat listesinde bir fiyatı aramak." }
          ]
        },
        { tip: "tablo", head: ["", "Doğrusal arama", "İkili arama"], rows: [["Veri sırası", "Sıralı olmasa da olur", "Sıralı olmak zorunda"], ["Nasıl çalışır", "Elemanları sırayla gezer", "Ortaya bakıp yarıyı eler"], ["Hangi veri", "Dizi ve ArrayList", "Dizi ve ArrayList"], ["Bulamazsa", "genelde -1 döndürülür", "genelde -1 döndürülür"]], vurgu: 0 }
      ]
    },
    {
      baslik: "Doğrusal arama: tek tek bak",
      kisa: "Eşleşince hemen return i; döngü bitince hiç bulunamadı demektir, -1.",
      bloklar: [
        { tip: "kod", baslik: "Dizide ara", kod: `public static int linearSearch(int[] arr, int target)
{
    for (int i = 0; i < arr.length; i++)
    {
        if (arr[i] == target)
            return i;
    }
    return -1;
}`, vurgu: [5, 6, 8], not: "arr = {14, 3, 22, 9, 31, 7} olsun. return -1 yalnızca bütün elemanlara bakıldıktan sonra, döngünün dışında çalışır." },
        { tip: "tablo", baslik: "linearSearch(arr, hedef) kaç eleman inceler?", head: ["Hedef", "Bakılan indeksler", "Karşılaştırma sayısı", "Döndürür"], rows: [["9", "0, 1, 2, 3", "4", "3"], ["50", "0, 1, 2, 3, 4, 5", "6", "-1"]], vurgu: 1, not: "Bulamayan arama bütün diziyi gezer. Hedef yoksa ya da sonda ise en çok iş yapılır." },
        { tip: "kod", baslik: "ArrayList<String> içinde ad ara", kod: `public static int findName(ArrayList<String> names, String target)
{
    for (int i = 0; i < names.size(); i++)
    {
        if (names.get(i).equals(target))
            return i;
    }
    return -1;
}`, vurgu: [5], not: "Yazılar nesnedir; içerik karşılaştırması equals ile yapılır, iki eşittir ile değil." },
        { tip: "tuzak", metin: "return -1 satırını döngünün içine, else dalına yazmak ilk elemanda kararı verdirir.", yanlis: "Eşitse return i, değilse else içinde return -1 yazmak hedefi her listede bulur.", dogru: "Hedef ilk elemanda değilse -1 döner, yani 9 aranan {14, 3, 22, 9} için bile -1 çıkar. -1'i döngüden sonra yaz." }
      ]
    },
    {
      baslik: "İkili arama: ortadan yarıya böl",
      kisa: "mid = (lo + hi) / 2; küçükse sağa, büyükse sola: lo ya da hi güncellenir.",
      bloklar: [
        { tip: "kod", baslik: "Sıralı dizide ikili arama", kod: `public static int binarySearch(int[] arr, int target)
{
    int lo = 0;
    int hi = arr.length - 1;
    while (lo <= hi)
    {
        int mid = (lo + hi) / 2;
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            lo = mid + 1;
        else
            hi = mid - 1;
    }
    return -1;
}`, vurgu: [3, 4, 5, 7, 11, 13], not: "lo ve hi aralığın uçlarıdır; mid tam sayı bölmesiyle bulunur. Bulunamayınca lo, hi'yi geçer ve döngü biter." },
        {
          tip: "grafik",
          baslik: "İkili arama: sıralı dizide 33'ü bulmak",
          xlabel: "indeks",
          ylabel: "değer",
          xmax: 8,
          ymax: 46,
          xticks: [{ v: 0.5, label: "0" }, { v: 1.5, label: "1" }, { v: 2.5, label: "2" }, { v: 3.5, label: "3" }, { v: 4.5, label: "4" }, { v: 5.5, label: "5" }, { v: 6.5, label: "6" }, { v: 7.5, label: "7" }],
          yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }],
          ogeler: [
            { id: "rng", tip: "alan", renk: 3, noktalar: [[0, 0], [8, 0], [8, 42], [0, 42]] },
            { id: "b0", tip: "alan", renk: 0, noktalar: [[0.12, 0], [0.88, 0], [0.88, 2], [0.12, 2]] },
            { id: "b1", tip: "alan", renk: 0, noktalar: [[1.12, 0], [1.88, 0], [1.88, 5], [1.12, 5]] },
            { id: "b2", tip: "alan", renk: 0, noktalar: [[2.12, 0], [2.88, 0], [2.88, 9], [2.12, 9]] },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[3.12, 0], [3.88, 0], [3.88, 14], [3.12, 14]] },
            { id: "b4", tip: "alan", renk: 0, noktalar: [[4.12, 0], [4.88, 0], [4.88, 21], [4.12, 21]] },
            { id: "b5", tip: "alan", renk: 0, noktalar: [[5.12, 0], [5.88, 0], [5.88, 27], [5.12, 27]] },
            { id: "b6", tip: "alan", renk: 0, noktalar: [[6.12, 0], [6.88, 0], [6.88, 33], [6.12, 33]] },
            { id: "b7", tip: "alan", renk: 0, noktalar: [[7.12, 0], [7.88, 0], [7.88, 40], [7.12, 40]] },
            { id: "v0", tip: "yazi", x: 0.5, y: 3.6, metin: "2" },
            { id: "v1", tip: "yazi", x: 1.5, y: 6.6, metin: "5" },
            { id: "v2", tip: "yazi", x: 2.5, y: 10.6, metin: "9" },
            { id: "v3", tip: "yazi", x: 3.5, y: 15.6, metin: "14" },
            { id: "v4", tip: "yazi", x: 4.5, y: 22.6, metin: "21" },
            { id: "v5", tip: "yazi", x: 5.5, y: 28.6, metin: "27" },
            { id: "v6", tip: "yazi", x: 6.5, y: 34.6, metin: "33" },
            { id: "v7", tip: "yazi", x: 7.5, y: 41.6, metin: "40" },
            { id: "tgt", tip: "cizgi", renk: 2, kesik: true, from: [0, 33], to: [8, 33] },
            { id: "tl", tip: "yazi", x: 0.1, y: 34.5, hiza: "start", metin: "hedef = 33", gizli: false },
            { id: "fnd", tip: "alan", renk: 1, noktalar: [[6.05, 0], [6.95, 0], [6.95, 33], [6.05, 33]], gizli: true },
            { id: "mid", tip: "yazi", x: 3.5, y: 19, metin: "mid ↓", gizli: true },
            { id: "info", tip: "yazi", x: 4, y: 44, metin: "lo = 0, hi = 7" }
          ],
          durumlar: [
            { metin: "Sıralı dizide 33'ü arıyoruz. Aralık bütün dizi: lo = 0, hi = 7." },
            { metin: "mid = (0 + 7) / 2 = 3. arr[3] = 14, 14 < 33: hedef sağda. Sol yarı (14 dahil) elenir, lo = mid + 1 = 4.", goster: ["mid"], set: { info: { metin: "lo = 0, hi = 7, mid = 3" } } },
            { metin: "Yeni aralık 4…7. mid = (4 + 7) / 2 = 5, arr[5] = 27 < 33. Yine sağa: lo = 6.", set: { rng: { noktalar: [[4, 0], [8, 0], [8, 42], [4, 42]] }, mid: { x: 5.5, y: 32 }, info: { metin: "lo = 4, hi = 7, mid = 5" } } },
            { metin: "Aralık 6…7. mid = (6 + 7) / 2 = 6, arr[6] = 33 hedefe eşit: indeks 6 döndürülür. Yalnız 3 eleman karşılaştırıldı.", goster: ["fnd"], set: { rng: { noktalar: [[6, 0], [8, 0], [8, 42], [6, 42]] }, mid: { x: 6.5, y: 38 }, info: { metin: "lo = 6, hi = 7, mid = 6 ✓" } } }
          ]
        },
        { tip: "tablo", baslik: "Aynı dizide 30'u aramak (dizide yok)", head: ["Tur", "lo", "hi", "mid", "arr[mid]", "Karar"], rows: [["1", "0", "7", "3", "14", "14 < 30: lo = 4"], ["2", "4", "7", "5", "27", "27 < 30: lo = 6"], ["3", "6", "7", "6", "33", "33 > 30: hi = 5"], ["son", "6", "5", "—", "—", "lo > hi: döngü biter, -1"]], vurgu: 3 }
      ]
    },
    {
      baslik: "Kaç adım? Hangisini seçmeli?",
      kisa: "İkili arama aralığı her adımda yarıya indirir; ama yalnız sıralı veride çalışır.",
      bloklar: [
        { tip: "sayilar", ogeler: [{ deger: 1000, etiket: "elemanlı listede doğrusal aramanın en kötü bakış sayısı" }, { deger: 10, etiket: "1000 elemanlı sıralı listede ikili aramanın en çok bakışı" }, { deger: 20, etiket: "1 000 000 elemanlı sıralı listede ikili aramanın en çok bakışı" }] },
        {
          tip: "ikili",
          sol: { ikon: "👣", baslik: "Doğrusal arama", maddeler: ["Sıralı olmayan veride de çalışır", "Her elemana bakabilir"] },
          sag: { ikon: "✂️", baslik: "İkili arama", maddeler: ["Veri sıralı olmalı", "Büyük listede çok az bakış"] },
          oyun: [
            { metin: "Sırasız kayıt listesinde bir öğrenci no. aramak", cevap: "sol", neden: "Sıra yok; ikili arama güvenilmez." },
            { metin: "1 milyon sıralı fiyatta bir fiyatı aramak", cevap: "sag", neden: "Sıralı ve büyük: ikili arama en çok 20 bakış yapar." },
            { metin: "Rastgele gelen son 5 mesajda bir kelime aramak", cevap: "sol", neden: "Sırasız ve çok küçük." },
            { metin: "Alfabetik sıralı ad listesinde bir adı aramak", cevap: "sag", neden: "Sıralı olduğu için ikili arama kullanılabilir." }
          ]
        },
        { tip: "tuzak", metin: "İkili aramayı sırasız diziye uygulamak hata vermez, yanlış sonuç verir.", yanlis: "{9, 2, 7, 4} içinde 4'ü ikili arama da bulur.", dogru: "mid = 1 (2 < 4): lo = 2. mid = 2 (7 > 4): hi = 1. Döngü biter, -1 döner; 4 aslında indeks 3'te." }
      ]
    },
    {
      baslik: "Sınav için bilmen gerekenler",
      kisa: "Algoritmaları okur, izler ve adım sayısını bulursun; ikili arama koşulunu bilirsin.",
      bloklar: [
        {
          tip: "tablo",
          head: ["", "Unit 4'te bu konuda"],
          rows: [
            ["✍️ Yazarsın", "Doğrusal arama: dizide ya da ArrayList'te bir değeri ya da koşulu sağlayan elemanı bulmak, indeks ya da -1 döndürmek."],
            ["👀 Okursun", "İkili arama kodunu izlemek (lo, hi, mid), kaç tur döneceğini ve kaç elemana bakıldığını bulmak; hangi veri için hangi aramanın uygun olduğunu seçmek."],
            ["🚫 Gerekmez", "Java'nın hazır arama sınıfları (Arrays, Collections) ya da algoritmaların kesin zaman formülleri."]
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
          maddeler: ["Doğrusal arama sırayla bakar; sıralı olmayan veride de çalışır.", "Bulununca return i; -1 döndüren satır döngünün dışındadır.", "Yazılarda içerik karşılaştırması equals ile yapılır.", "İkili arama yalnız sıralı veride çalışır; mid = (lo + hi) / 2.", "arr[mid] < target ise lo = mid + 1; arr[mid] > target ise hi = mid - 1; döngü lo <= hi iken döner.", "Her adımda aralık yarıya iner: 1000 elemanda en çok 10, 1 milyonda en çok 20 bakış.", "Sırasız veride ikili arama hata vermez, yanlış sonuç verebilir."]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "linearSearch(arr, 16) çağrısında kaç elemanla karşılaştırma yapılır (kod bulunca durur)?",
      fig: {
        type: "code",
        caption: "arr = {4, 8, 15, 16, 23, 42}",
        code: `public static int linearSearch(int[] arr, int target)
{
    for (int i = 0; i < arr.length; i++)
    {
        if (arr[i] == target)
            return i;
    }
    return -1;
}`
      },
      opts: ["3", "4", "5", "6"],
      a: 1,
      why: "16, indeks 3'tedir. i = 0, 1, 2, 3 için karşılaştırma yapılır: 4 karşılaştırma ve 3 döner. İndeksle sayıyı karıştıran 3'e gider; 6 ise bulunamayan durumun sayısıdır."
    },
    {
      q: "binarySearch(arr, 30) çağrısı için while döngüsü kaç kez döner?",
      fig: {
        type: "code",
        caption: "arr = {3, 6, 9, 12, 15, 18, 21, 24, 27, 30}",
        code: `public static int binarySearch(int[] arr, int target)
{
    int lo = 0;
    int hi = arr.length - 1;
    while (lo <= hi)
    {
        int mid = (lo + hi) / 2;
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            lo = mid + 1;
        else
            hi = mid - 1;
    }
    return -1;
}`
      },
      opts: ["2", "3", "5", "4"],
      a: 3,
      why: "lo = 0, hi = 9: mid = 4 (15 < 30), lo = 5. mid = 7 (24 < 30), lo = 8. mid = 8 (27 < 30), lo = 9. mid = 9 (30 bulundu). Toplam 4 tur. 3 diyen, hedefe son turda ulaşıldığını unutmuştur."
    },
    { q: "Sıralı 500 elemanlı bir dizide ikili arama, hedefi aramak için en çok kaç elemana bakar?", opts: ["9", "250", "5", "500"], a: 0, why: "Her bakış kalan aralığı yarıya indirir: 500 elemandan en çok 250, 125, 62, 31, 15, 7, 3, 1 ve 0 kalır; bu 9 bakıştır (2'nin 9. kuvveti 512, 500'ü geçer). 250 diyen, aralığın yalnız bir kez yarıya indiğini sanmıştır." },
    {
      q: "Kod, sıralı olmayan dizide ikili arama yapıyor. binarySearch(arr, 3) ne döndürür?",
      fig: {
        type: "code",
        caption: "arr = {5, 1, 9, 3, 7}",
        code: `public static int binarySearch(int[] arr, int target)
{
    int lo = 0;
    int hi = arr.length - 1;
    while (lo <= hi)
    {
        int mid = (lo + hi) / 2;
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            lo = mid + 1;
        else
            hi = mid - 1;
    }
    return -1;
}`
      },
      opts: ["3", "-1", "0", "ArrayIndexOutOfBoundsException"],
      a: 1,
      why: "mid = 2: arr[2] = 9 > 3, hi = 1. mid = 0: arr[0] = 5 > 3, hi = -1. Döngü biter, -1 döner, oysa 3 dizide indeks 3'te vardır. Dizi sıralı olmadığı için yanlış sonuç çıktı; hata fırlatılmadı."
    },
    {
      q: "Kod çalışınca ekrana ne yazdırılır?",
      fig: {
        type: "code",
        code: `ArrayList<String> names = new ArrayList<String>();
names.add("Ece");
names.add("Can");
names.add("Deniz");
names.add("Can");
int pos = -1;
for (int i = 0; i < names.size(); i++)
{
    if (names.get(i).equals("Can"))
        pos = i;
}
System.out.println(pos);`
      },
      opts: ["-1", "1", "4", "3"],
      a: 3,
      why: "Döngü return ile durmaz; her eşleşmede pos güncellenir. Can 1 ve 3 indekslerinde, son atama 3. İlk eşleşmeyi bekleyen 1'e gider; liste 4 elemanlı olduğundan 4 geçerli indeks değildir."
    }
  ]
};
