/* Kitora not defteri · cs414 · 4.17 Özyinelemeli Arama ve Sıralama
   Kaynak: AP CSA CED 2025–26 (Unit 4) kapsamı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs414",
  amac: "Bu konu özyinelemeyle çalışan iki algoritmayı anlatıyor: özyinelemeli ikili arama ve merge sort (birleştirmeli sıralama). Çağrıların nasıl daraldığını, iki sıralı yarının nasıl birleştiğini ve merge sort'un neden selection sort'tan hızlı olduğunu öğreneceksin.",
  bolumler: [
    {
      baslik: "Özyinelemeli ikili arama",
      kisa: "Aynı fikir: ortaya bak, bir yarıyı ele; bu kez lo ve hi parametre olarak taşınır.",
      bloklar: [
        { tip: "kod", baslik: "lo ve hi parametreleriyle ikili arama", kod: `public static int search(int[] arr, int target, int lo, int hi)
{
    if (lo > hi)
        return -1;
    int mid = (lo + hi) / 2;
    if (arr[mid] == target)
        return mid;
    if (arr[mid] < target)
        return search(arr, target, mid + 1, hi);
    return search(arr, target, lo, mid - 1);
}`, vurgu: [3, 4, 7, 9, 10], not: "İki base case var: aralık boşaldı (lo > hi, -1) ya da hedef bulundu (arr[mid] hedefe eşit). İlk çağrı search(arr, hedef, 0, arr.length - 1) olur. Kullanılan dizi: {2, 5, 9, 14, 21, 27, 33, 40}." },
        {
          tip: "tablo",
          baslik: "search(arr, 33, 0, 7) çağrı zinciri",
          head: ["Çağrı", "lo", "hi", "mid", "arr[mid]", "Sonuç"],
          rows: [["1", "0", "7", "3", "14", "14 < 33: search(…, 4, 7)"], ["2", "4", "7", "5", "27", "27 < 33: search(…, 6, 7)"], ["3", "6", "7", "6", "33", "bulundu: 6 döner"]],
          vurgu: 2,
          not: "Dönen 6, çağrı zinciri boyunca olduğu gibi geriye iletilir: 3. çağrı → 2. çağrı → 1. çağrı → çağıran kod. Toplam 3 çağrı."
        },
        { tip: "tuzak", metin: "mid + 1 yerine mid yazarsan bazı girdilerde aralık hiç küçülmez.", yanlis: "return search(arr, target, mid, hi); da aynı işi görür, bir eleman fazla bakar sadece.", dogru: "40 aranırsa aralık 6…7'ye iner; mid = 6, 33 < 40 olduğundan yine search(…, 6, 7) çağrılır. Bu sonsuza dek sürer: StackOverflowError." }
      ]
    },
    {
      baslik: "Merge sort: böl, sırala, birleştir",
      kisa: "Diziyi yarıya böler, yarıları özyinelemeyle sıralar, sıralı yarıları birleştirir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🧩", terim: "Merge sort", tr: "birleştirmeli sıralama", tanim: "Diziyi ortadan böler, iki yarıyı da merge sort ile sıralar, sonra sıralı yarıları birleştirir. Tek elemanlı dizi base case'tir.", ornek: "İki öğrencinin ayrı ayrı sıraladığı kâğıt destesini iç içe geçirerek tek desteye çevirmek." },
            { ikon: "🔗", terim: "Merge", tr: "birleştirme", tanim: "İki sıralı parçayı, baştaki elemanları karşılaştırarak tek sıralı parça yapan adım.", ornek: "[3, 6] ile [2, 8] birleşince [2, 3, 6, 8]." }
          ]
        },
        { tip: "kod", baslik: "Özyinelemeli kısım", kod: `public static void mergeSort(int[] arr, int lo, int hi)
{
    if (lo < hi)
    {
        int mid = (lo + hi) / 2;
        mergeSort(arr, lo, mid);
        mergeSort(arr, mid + 1, hi);
        merge(arr, lo, mid, hi);
    }
}`, vurgu: [3, 6, 7, 8], not: "lo < hi değilse aralıkta 0 ya da 1 eleman var: base case, hiçbir şey yapılmaz. Önce sol yarı, sonra sağ yarı sıralanır, en son birleştirilir." },
        { tip: "kod", baslik: "merge: iki sıralı yarıyı tek sıralı parça yap", kod: `public static void merge(int[] arr, int lo, int mid, int hi)
{
    int[] temp = new int[hi - lo + 1];
    int i = lo;
    int j = mid + 1;
    for (int k = 0; k < temp.length; k++)
    {
        if (j > hi || (i <= mid && arr[i] <= arr[j]))
        {
            temp[k] = arr[i];
            i++;
        }
        else
        {
            temp[k] = arr[j];
            j++;
        }
    }
    for (int k = 0; k < temp.length; k++)
        arr[lo + k] = temp[k];
}`, vurgu: [3, 8, 10, 15, 19, 20], not: "i sol yarıyı, j sağ yarıyı gösterir. Her turda küçük olan temp'e yazılır; bir yarı biterse öteki aynen akar. En sonda temp, arr'ın lo…hi bölümüne geri kopyalanır." },
        {
          tip: "tablo",
          baslik: "merge([3, 6 | 2, 8]) adım adım (lo = 0, mid = 1, hi = 3)",
          head: ["k", "i", "j", "Karşılaştırma", "temp'e yazılan", "temp"],
          rows: [["0", "0", "2", "3 <= 2 değil", "arr[2] = 2", "2"], ["1", "0", "3", "3 <= 8 evet", "arr[0] = 3", "2 3"], ["2", "1", "3", "6 <= 8 evet", "arr[1] = 6", "2 3 6"], ["3", "2", "3", "sol yarı bitti (i > mid)", "arr[3] = 8", "2 3 6 8"]],
          vurgu: 3
        }
      ]
    },
    {
      baslik: "Sekiz elemanı adım adım sıralamak",
      kisa: "n eleman log n seviye iner; her seviyede toplam n eleman birleştirilir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Merge sort: [6, 3, 8, 2, 7, 1, 5, 4]",
          xlabel: "indeks",
          ylabel: "değer",
          xmax: 8,
          ymax: 10,
          xticks: [{ v: 0.5, label: "0" }, { v: 1.5, label: "1" }, { v: 2.5, label: "2" }, { v: 3.5, label: "3" }, { v: 4.5, label: "4" }, { v: 5.5, label: "5" }, { v: 6.5, label: "6" }, { v: 7.5, label: "7" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "zA", tip: "alan", renk: 0, noktalar: [[0, 0], [4, 0], [4, 9.4], [0, 9.4]], gizli: true },
            { id: "zB", tip: "alan", renk: 1, noktalar: [[4, 0], [8, 0], [8, 9.4], [4, 9.4]], gizli: true },
            { id: "zC", tip: "alan", renk: 0, noktalar: [[4, 0], [6, 0], [6, 9.4], [4, 9.4]], gizli: true },
            { id: "zD", tip: "alan", renk: 1, noktalar: [[6, 0], [8, 0], [8, 9.4], [6, 9.4]], gizli: true },
            { id: "b0", tip: "alan", renk: 3, noktalar: [[0.15, 0], [0.85, 0], [0.85, 6], [0.15, 6]] },
            { id: "b1", tip: "alan", renk: 3, noktalar: [[1.15, 0], [1.85, 0], [1.85, 3], [1.15, 3]] },
            { id: "b2", tip: "alan", renk: 3, noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
            { id: "b3", tip: "alan", renk: 3, noktalar: [[3.15, 0], [3.85, 0], [3.85, 2], [3.15, 2]] },
            { id: "b4", tip: "alan", renk: 3, noktalar: [[4.15, 0], [4.85, 0], [4.85, 7], [4.15, 7]] },
            { id: "b5", tip: "alan", renk: 3, noktalar: [[5.15, 0], [5.85, 0], [5.85, 1], [5.15, 1]] },
            { id: "b6", tip: "alan", renk: 3, noktalar: [[6.15, 0], [6.85, 0], [6.85, 5], [6.15, 5]] },
            { id: "b7", tip: "alan", renk: 3, noktalar: [[7.15, 0], [7.85, 0], [7.85, 4], [7.15, 4]] },
            { id: "v0", tip: "yazi", x: 0.5, y: 6.55, metin: "6" },
            { id: "v1", tip: "yazi", x: 1.5, y: 3.55, metin: "3" },
            { id: "v2", tip: "yazi", x: 2.5, y: 8.55, metin: "8" },
            { id: "v3", tip: "yazi", x: 3.5, y: 2.55, metin: "2" },
            { id: "v4", tip: "yazi", x: 4.5, y: 7.55, metin: "7" },
            { id: "v5", tip: "yazi", x: 5.5, y: 1.55, metin: "1" },
            { id: "v6", tip: "yazi", x: 6.5, y: 5.55, metin: "5" },
            { id: "v7", tip: "yazi", x: 7.5, y: 4.55, metin: "4" }
          ],
          durumlar: [
            {
              metin: "Dizi: [6, 3, 8, 2, 7, 1, 5, 4]. mergeSort(arr, 0, 7) çağrılır; lo < hi olduğu için bölünecek.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 6], [0.15, 6]] },
                v0: { y: 6.55, metin: "6" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 3], [1.15, 3]] },
                v1: { y: 3.55, metin: "3" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
                v2: { y: 8.55, metin: "8" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 2], [3.15, 2]] },
                v3: { y: 2.55, metin: "2" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 7], [4.15, 7]] },
                v4: { y: 7.55, metin: "7" },
                b5: { noktalar: [[5.15, 0], [5.85, 0], [5.85, 1], [5.15, 1]] },
                v5: { y: 1.55, metin: "1" },
                b6: { noktalar: [[6.15, 0], [6.85, 0], [6.85, 5], [6.15, 5]] },
                v6: { y: 5.55, metin: "5" },
                b7: { noktalar: [[7.15, 0], [7.85, 0], [7.85, 4], [7.15, 4]] },
                v7: { y: 4.55, metin: "4" }
              }
            },
            {
              metin: "mid = 3: iki yarı, [6, 3, 8, 2] ve [7, 1, 5, 4]. Her yarı aynı yöntemle (özyinelemeli çağrıyla) sıralanır.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 6], [0.15, 6]] },
                v0: { y: 6.55, metin: "6" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 3], [1.15, 3]] },
                v1: { y: 3.55, metin: "3" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
                v2: { y: 8.55, metin: "8" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 2], [3.15, 2]] },
                v3: { y: 2.55, metin: "2" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 7], [4.15, 7]] },
                v4: { y: 7.55, metin: "7" },
                b5: { noktalar: [[5.15, 0], [5.85, 0], [5.85, 1], [5.15, 1]] },
                v5: { y: 1.55, metin: "1" },
                b6: { noktalar: [[6.15, 0], [6.85, 0], [6.85, 5], [6.15, 5]] },
                v6: { y: 5.55, metin: "5" },
                b7: { noktalar: [[7.15, 0], [7.85, 0], [7.85, 4], [7.15, 4]] },
                v7: { y: 4.55, metin: "4" },
                zA: { noktalar: [[0, 0], [4, 0], [4, 9.4], [0, 9.4]] },
                zB: { noktalar: [[4, 0], [8, 0], [8, 9.4], [4, 9.4]] }
              },
              goster: ["zA", "zB"]
            },
            {
              metin: "Yarılar da bölünür: dörder değil ikişer elemanlı gruplar. Aşağı inme, tek elemana kadar sürer (tek eleman zaten sıralıdır, lo < hi değil). Gerçekte soldaki dal önce tamamen biter; burada seviyeleri sırayla gösteriyoruz.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 6], [0.15, 6]] },
                v0: { y: 6.55, metin: "6" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 3], [1.15, 3]] },
                v1: { y: 3.55, metin: "3" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
                v2: { y: 8.55, metin: "8" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 2], [3.15, 2]] },
                v3: { y: 2.55, metin: "2" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 7], [4.15, 7]] },
                v4: { y: 7.55, metin: "7" },
                b5: { noktalar: [[5.15, 0], [5.85, 0], [5.85, 1], [5.15, 1]] },
                v5: { y: 1.55, metin: "1" },
                b6: { noktalar: [[6.15, 0], [6.85, 0], [6.85, 5], [6.15, 5]] },
                v6: { y: 5.55, metin: "5" },
                b7: { noktalar: [[7.15, 0], [7.85, 0], [7.85, 4], [7.15, 4]] },
                v7: { y: 4.55, metin: "4" },
                zA: { noktalar: [[0, 0], [2, 0], [2, 9.4], [0, 9.4]] },
                zB: { noktalar: [[2, 0], [4, 0], [4, 9.4], [2, 9.4]] },
                zC: { noktalar: [[4, 0], [6, 0], [6, 9.4], [4, 9.4]] },
                zD: { noktalar: [[6, 0], [8, 0], [8, 9.4], [6, 9.4]] }
              },
              goster: ["zC", "zD"]
            },
            {
              metin: "İkili gruplar birleştirilir: [3, 6] [2, 8] [1, 7] [4, 5]. Birleştirme iki sıralı grubu tek sıralı grup yapar.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 3], [0.15, 3]] },
                v0: { y: 3.55, metin: "3" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 6], [1.15, 6]] },
                v1: { y: 6.55, metin: "6" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 2], [2.15, 2]] },
                v2: { y: 2.55, metin: "2" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 8], [3.15, 8]] },
                v3: { y: 8.55, metin: "8" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 1], [4.15, 1]] },
                v4: { y: 1.55, metin: "1" },
                b5: { noktalar: [[5.15, 0], [5.85, 0], [5.85, 7], [5.15, 7]] },
                v5: { y: 7.55, metin: "7" },
                b6: { noktalar: [[6.15, 0], [6.85, 0], [6.85, 4], [6.15, 4]] },
                v6: { y: 4.55, metin: "4" },
                b7: { noktalar: [[7.15, 0], [7.85, 0], [7.85, 5], [7.15, 5]] },
                v7: { y: 5.55, metin: "5" },
                zA: { noktalar: [[0, 0], [2, 0], [2, 9.4], [0, 9.4]] },
                zB: { noktalar: [[2, 0], [4, 0], [4, 9.4], [2, 9.4]] },
                zC: { noktalar: [[4, 0], [6, 0], [6, 9.4], [4, 9.4]] },
                zD: { noktalar: [[6, 0], [8, 0], [8, 9.4], [6, 9.4]] }
              }
            },
            {
              metin: "Dörtlüler: [3, 6] + [2, 8] → [2, 3, 6, 8]; [1, 7] + [4, 5] → [1, 4, 5, 7].",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 2], [0.15, 2]] },
                v0: { y: 2.55, metin: "2" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 3], [1.15, 3]] },
                v1: { y: 3.55, metin: "3" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 6], [2.15, 6]] },
                v2: { y: 6.55, metin: "6" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 8], [3.15, 8]] },
                v3: { y: 8.55, metin: "8" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 1], [4.15, 1]] },
                v4: { y: 1.55, metin: "1" },
                b5: { noktalar: [[5.15, 0], [5.85, 0], [5.85, 4], [5.15, 4]] },
                v5: { y: 4.55, metin: "4" },
                b6: { noktalar: [[6.15, 0], [6.85, 0], [6.85, 5], [6.15, 5]] },
                v6: { y: 5.55, metin: "5" },
                b7: { noktalar: [[7.15, 0], [7.85, 0], [7.85, 7], [7.15, 7]] },
                v7: { y: 7.55, metin: "7" },
                zA: { noktalar: [[0, 0], [4, 0], [4, 9.4], [0, 9.4]] },
                zB: { noktalar: [[4, 0], [8, 0], [8, 9.4], [4, 9.4]] }
              },
              gizle: ["zC", "zD"]
            },
            {
              metin: "Son birleştirme: [2, 3, 6, 8] + [1, 4, 5, 7] → [1, 2, 3, 4, 5, 6, 7, 8]. Dizi sıralandı.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 1], [0.15, 1]] },
                v0: { y: 1.55, metin: "1" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
                v1: { y: 2.55, metin: "2" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 3], [2.15, 3]] },
                v2: { y: 3.55, metin: "3" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 4], [3.15, 4]] },
                v3: { y: 4.55, metin: "4" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 5], [4.15, 5]] },
                v4: { y: 5.55, metin: "5" },
                b5: { noktalar: [[5.15, 0], [5.85, 0], [5.85, 6], [5.15, 6]] },
                v5: { y: 6.55, metin: "6" },
                b6: { noktalar: [[6.15, 0], [6.85, 0], [6.85, 7], [6.15, 7]] },
                v6: { y: 7.55, metin: "7" },
                b7: { noktalar: [[7.15, 0], [7.85, 0], [7.85, 8], [7.15, 8]] },
                v7: { y: 8.55, metin: "8" },
                zA: { noktalar: [[0, 0], [8, 0], [8, 9.4], [0, 9.4]] }
              },
              gizle: ["zB"]
            }
          ]
        },
        { tip: "tablo", baslik: "Kaç çağrı, kaç birleştirme?", head: ["Eleman sayısı", "mergeSort çağrısı", "merge çağrısı"], rows: [["2", "3", "1"], ["4", "7", "3"], ["8", "15", "7"]], vurgu: 2, not: "n elemanda 2n - 1 mergeSort çağrısı (n tanesi tek eleman) ve n - 1 merge çağrısı yapılır." }
      ]
    },
    {
      baslik: "Neden daha hızlı? Selection ile karşılaştırma",
      kisa: "Merge sort büyük dizilerde çok daha az iş yapar ama geçici dizi kullanır.",
      bloklar: [
        { tip: "sayilar", ogeler: [{ deger: 499500, etiket: "selection sort karşılaştırması, 1000 elemanda (1000 ∗ 999 / 2)" }, { deger: 10000, onek: "~", etiket: "merge sort karşılaştırması, 1000 elemanda (n ∗ log₂ n kadar)" }] },
        {
          tip: "ikili",
          sol: { ikon: "🧩", baslik: "*Merge sort*", maddeler: ["Böl, sırala, birleştir", "Geçici dizi ister"] },
          sag: { ikon: "🔁", baslik: "*Selection* / *insertion sort*", maddeler: ["İç içe iki döngü", "Sıralı bölgeyi eleman eleman büyütür"] },
          oyun: [
            { metin: "Diziyi yarıya bölüp kendini iki kez çağırır", cevap: "sol", neden: "mergeSort(lo, mid) ve mergeSort(mid + 1, hi)." },
            { metin: "İç içe for döngüleriyle çalışır", cevap: "sag", neden: "Özyineleme kullanmaz." },
            { metin: "İki sıralı parçayı birleştirmek için geçici dizi (temp) kullanır", cevap: "sol", neden: "merge metodundaki temp." },
            { metin: "Her turda sıralı bölgeyi bir eleman büyütür", cevap: "sag", neden: "Selection ve insertion bölgeyi bir bir büyütür." },
            { metin: "1000 elemanda kabaca 10 000 karşılaştırma yapar", cevap: "sol", neden: "n ∗ log₂ n civarı; 500 000'e kıyasla çok az." }
          ]
        }
      ]
    },
    {
      baslik: "Sınav için bilmen gerekenler",
      kisa: "Özyinelemeli arama ve merge sort'u izler, çağrı sayısını ve ara durumu bulursun.",
      bloklar: [
        {
          tip: "tablo",
          head: ["", "Unit 4'te bu konuda"],
          rows: [
            ["✍️ Yazarsın", "Özyinelemeli ikili aramanın parametrelerini (lo, hi) ve base case'lerini tanımak; merge sort'un özyinelemeli iskeletini okuyup tamamlamak."],
            ["👀 Okursun", "search çağrı zincirini, mergeSort'un bölme ve birleştirme sırasını, ara durumdaki diziyi, çağrı ve birleştirme sayısını izlemek."],
            ["🚫 Gerekmez", "merge metodunu ezberden yazmak, Big-O gösterimi ya da quicksort."]
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
          maddeler: ["Özyinelemeli ikili aramada lo ve hi parametredir; base case'ler: lo > hi (-1 döner) ve arr[mid] hedefe eşit (mid döner).", "Sağa giderken mid + 1, sola giderken mid - 1; mid yazmak sonsuz özyinelemeye yol açabilir.", "Dönen değer çağrı zinciri boyunca geriye iletilir (return search(…)).", "*Merge sort*: lo < hi ise ortadan böl, iki yarıyı mergeSort ile sırala, merge ile birleştir.", "merge iki sıralı yarıyı temp'e küçükten büyüğe doldurur, sonra arr'a geri kopyalar.", "n elemanda mergeSort 2n - 1 kez, merge n - 1 kez çağrılır.", "Büyük dizilerde merge sort selection ve insertion'dan çok daha az karşılaştırma yapar; bedeli geçici diziyle ödenir."]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "search(arr, 9, 0, 7) çağrısında metot, ilk çağrı dahil toplam kaç kez çağrılır?",
      fig: {
        type: "code",
        caption: "arr = {2, 5, 9, 14, 21, 27, 33, 40}",
        code: `public static int search(int[] arr, int target, int lo, int hi)
{
    if (lo > hi)
        return -1;
    int mid = (lo + hi) / 2;
    if (arr[mid] == target)
        return mid;
    if (arr[mid] < target)
        return search(arr, target, mid + 1, hi);
    return search(arr, target, lo, mid - 1);
}`
      },
      opts: ["2", "3", "4", "5"],
      a: 1,
      why: "search(0, 7): mid = 3, 14 > 9, sola. search(0, 2): mid = 1, 5 < 9, sağa. search(2, 2): mid = 2, arr[2] = 9 bulundu. Üç çağrı. 4 diyen, bulunduktan sonra bir çağrı daha yaptığını sanmıştır."
    },
    {
      q: "Aynı metotla search(arr, 10, 0, 7) çağrısı ne döndürür?",
      fig: {
        type: "code",
        caption: "arr = {2, 5, 9, 14, 21, 27, 33, 40}",
        code: `public static int search(int[] arr, int target, int lo, int hi)
{
    if (lo > hi)
        return -1;
    int mid = (lo + hi) / 2;
    if (arr[mid] == target)
        return mid;
    if (arr[mid] < target)
        return search(arr, target, mid + 1, hi);
    return search(arr, target, lo, mid - 1);
}`
      },
      opts: ["-1", "2", "3", "10"],
      a: 0,
      why: "10 dizide yok. Çağrılar: (0, 7) mid 3 → (0, 2) mid 1 → (2, 2) mid 2 (9 < 10) → (3, 2): lo > hi, base case -1. -1, çağrı zinciri boyunca geriye iletilir. 2 ya da 3, 'en yakın indeks'i bulacağını sanmaktır."
    },
    { q: "8 elemanlı bir dizi için mergeSort(arr, 0, 7) çalışırken merge metodu toplam kaç kez çağrılır?", opts: ["3", "7", "8", "15"], a: 1, why: "Her birleştirme iki parçayı tek parça yapar; 8 tek elemandan 1 parça kalana kadar 8 - 1 = 7 birleştirme gerekir (4 + 2 + 1). 15, mergeSort çağrısı sayısıdır (2 ∗ 8 - 1); merge çağrısı değil." },
    {
      q: "Kod parçası çalışıyor. merge(arr, 0, 3, 7) satırı yürütülmeden hemen önce arr nedir?",
      fig: {
        type: "code",
        caption: "arr = {9, 4, 7, 2, 8, 1, 6, 3} ile mergeSort(arr, 0, 7)",
        code: `public static void mergeSort(int[] arr, int lo, int hi)
{
    if (lo < hi)
    {
        int mid = (lo + hi) / 2;
        mergeSort(arr, lo, mid);
        mergeSort(arr, mid + 1, hi);
        merge(arr, lo, mid, hi);
    }
}`
      },
      opts: ["2 4 7 9 1 3 6 8", "1 2 3 4 6 7 8 9", "4 9 2 7 1 8 3 6", "2 4 7 9 8 1 6 3"],
      a: 0,
      why: "Son birleştirmeden önce iki özyinelemeli çağrı bitmiştir: sol yarı [2, 4, 7, 9], sağ yarı [1, 3, 6, 8] sıralıdır; arr = 2 4 7 9 1 3 6 8. 4 9 2 7 … yalnız ikili grupların birleştiği ara durumdur; sonuncu seçenek sağ yarının henüz sıralanmadığı durumdur."
    },
    {
      q: "Aşağıdaki metot hatalı yazılmıştır. search(arr, 40, 0, 7) çağrılırsa ne olur?",
      fig: {
        type: "code",
        caption: "arr = {2, 5, 9, 14, 21, 27, 33, 40}",
        code: `public static int search(int[] arr, int target, int lo, int hi)
{
    if (lo > hi)
        return -1;
    int mid = (lo + hi) / 2;
    if (arr[mid] == target)
        return mid;
    if (arr[mid] < target)
        return search(arr, target, mid, hi);
    return search(arr, target, lo, mid - 1);
}`
      },
      opts: ["7 döner", "-1 döner", "StackOverflowError fırlatılır", "40 döner"],
      a: 2,
      why: "Çağrılar: (0, 7) mid 3 → (3, 7) mid 5 → (5, 7) mid 6 (33 < 40) → (6, 7) mid 6 → yine (6, 7). Aralık küçülmez, sonsuz özyineleme olur ve StackOverflowError çıkar. mid + 1 olsaydı aralık 7…7'ye inerdi ve 7 dönerdi."
    }
  ]
};
