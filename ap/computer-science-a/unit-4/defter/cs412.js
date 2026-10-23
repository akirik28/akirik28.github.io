/* Kitpath not defteri · cs412 · 4.15 Sıralama Algoritmaları
   Kaynak: AP CSA CED 2025–26 (Unit 4) kapsamı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs412",
  amac: "Bu konu bir diziyi (ya da *ArrayList*'i) küçükten büyüğe sıralayan iki yinelemeli algoritmayı anlatıyor: *selection sort* ve *insertion sort*. Adım adım izlemeyi, ara durumdan algoritmayı tanımayı ve iki algoritmanın kaç karşılaştırma yaptığını öğreneceksin.",
  bolumler: [
    {
      baslik: "*Selection sort*: en küçüğü seç, öne koy",
      kisa: "Her turda kalan kısmın en küçüğünü bulur, sıradaki yerle takas eder.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "🎯", terim: "Selection sort", tr: "seçmeli sıralama", tanim: "Tur başına kalan kısmın en küçüğünü bulur ve onu sıradaki indeksteki elemanla yer değiştirir. Her tur sonunda sol bölge kesin yerindedir.", ornek: "Sınıfı boya göre dizerken her seferinde en kısayı baştaki yere çağırmak." }] },
        { tip: "kod", baslik: "Bütün algoritma", kod: `public static void selectionSort(int[] arr)
{
    for (int i = 0; i < arr.length - 1; i++)
    {
        int minIndex = i;
        for (int j = i + 1; j < arr.length; j++)
        {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}`, vurgu: [5, 8, 11, 12, 13], not: "İç döngü en küçüğün indeksini bulur; takas ise tur sonunda bir kez yapılır. Takasta temp olmazsa bir değer kaybolur." },
        {
          tip: "grafik",
          baslik: "Selection sort: [5, 2, 8, 1, 4]",
          xlabel: "indeks",
          ylabel: "değer",
          xmax: 5,
          ymax: 11,
          xticks: [{ v: 0.5, label: "0" }, { v: 1.5, label: "1" }, { v: 2.5, label: "2" }, { v: 3.5, label: "3" }, { v: 4.5, label: "4" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "sz", tip: "alan", renk: 1, noktalar: [[0, 0], [1, 0], [1, 9.5], [0, 9.5]], gizli: true },
            { id: "b0", tip: "alan", renk: 0, noktalar: [[0.15, 0], [0.85, 0], [0.85, 5], [0.15, 5]] },
            { id: "b1", tip: "alan", renk: 0, noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
            { id: "b2", tip: "alan", renk: 0, noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[3.15, 0], [3.85, 0], [3.85, 1], [3.15, 1]] },
            { id: "b4", tip: "alan", renk: 0, noktalar: [[4.15, 0], [4.85, 0], [4.85, 4], [4.15, 4]] },
            { id: "v0", tip: "yazi", x: 0.5, y: 5.7, metin: "5" },
            { id: "v1", tip: "yazi", x: 1.5, y: 2.7, metin: "2" },
            { id: "v2", tip: "yazi", x: 2.5, y: 8.7, metin: "8" },
            { id: "v3", tip: "yazi", x: 3.5, y: 1.7, metin: "1" },
            { id: "v4", tip: "yazi", x: 4.5, y: 4.7, metin: "4" },
            { id: "pi", tip: "yazi", x: 0.5, y: 10.5, metin: "i ↓", gizli: true },
            { id: "pm", tip: "yazi", x: 0.5, y: 9.6, metin: "min ↓", gizli: true }
          ],
          durumlar: [
            {
              metin: "Başlangıç: [5, 2, 8, 1, 4]. Sıralı bölge (yeşil) henüz boş.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 5], [0.15, 5]] },
                v0: { y: 5.7, metin: "5" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
                v1: { y: 2.7, metin: "2" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
                v2: { y: 8.7, metin: "8" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 1], [3.15, 1]] },
                v3: { y: 1.7, metin: "1" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 4], [4.15, 4]] },
                v4: { y: 4.7, metin: "4" }
              }
            },
            {
              metin: "Tur i = 0: kalan kısım (indeks 0–4) taranır, en küçük 1, indeks 3'te. minIndex = 3.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 5], [0.15, 5]] },
                v0: { y: 5.7, metin: "5" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
                v1: { y: 2.7, metin: "2" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
                v2: { y: 8.7, metin: "8" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 1], [3.15, 1]] },
                v3: { y: 1.7, metin: "1" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 4], [4.15, 4]] },
                v4: { y: 4.7, metin: "4" },
                pi: { x: 0.5, metin: "i ↓" },
                pm: { x: 3.5, metin: "min ↓" }
              },
              goster: ["pi", "pm"]
            },
            {
              metin: "arr[0] ile arr[3] yer değiştirir: [1, 2, 8, 5, 4]. 1 artık kesin yerinde.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 1], [0.15, 1]] },
                v0: { y: 1.7, metin: "1" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
                v1: { y: 2.7, metin: "2" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
                v2: { y: 8.7, metin: "8" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 5], [3.15, 5]] },
                v3: { y: 5.7, metin: "5" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 4], [4.15, 4]] },
                v4: { y: 4.7, metin: "4" },
                sz: { noktalar: [[0, 0], [1, 0], [1, 9.5], [0, 9.5]] }
              },
              goster: ["sz"],
              gizle: ["pi", "pm"]
            },
            {
              metin: "Tur i = 1: 2…4 taranır, en küçük 2 zaten indeks 1'de. Kendisiyle takas: dizi değişmez, sıralı bölge 2 eleman.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 1], [0.15, 1]] },
                v0: { y: 1.7, metin: "1" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
                v1: { y: 2.7, metin: "2" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
                v2: { y: 8.7, metin: "8" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 5], [3.15, 5]] },
                v3: { y: 5.7, metin: "5" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 4], [4.15, 4]] },
                v4: { y: 4.7, metin: "4" },
                sz: { noktalar: [[0, 0], [2, 0], [2, 9.5], [0, 9.5]] },
                pi: { x: 1.5, metin: "i ↓" },
                pm: { x: 1.5, metin: "min ↓" }
              },
              goster: ["pi", "pm"]
            },
            {
              metin: "Tur i = 2: 8, 5, 4 taranır; en küçük 4, indeks 4'te. minIndex = 4.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 1], [0.15, 1]] },
                v0: { y: 1.7, metin: "1" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
                v1: { y: 2.7, metin: "2" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
                v2: { y: 8.7, metin: "8" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 5], [3.15, 5]] },
                v3: { y: 5.7, metin: "5" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 4], [4.15, 4]] },
                v4: { y: 4.7, metin: "4" },
                sz: { noktalar: [[0, 0], [2, 0], [2, 9.5], [0, 9.5]] },
                pi: { x: 2.5, metin: "i ↓" },
                pm: { x: 4.5, metin: "min ↓" }
              },
              goster: ["pi", "pm"]
            },
            {
              metin: "arr[2] ile arr[4] yer değiştirir: [1, 2, 4, 5, 8]. Sıralı bölge 3 eleman.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 1], [0.15, 1]] },
                v0: { y: 1.7, metin: "1" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
                v1: { y: 2.7, metin: "2" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 4], [2.15, 4]] },
                v2: { y: 4.7, metin: "4" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 5], [3.15, 5]] },
                v3: { y: 5.7, metin: "5" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 8], [4.15, 8]] },
                v4: { y: 8.7, metin: "8" },
                sz: { noktalar: [[0, 0], [3, 0], [3, 9.5], [0, 9.5]] }
              },
              gizle: ["pi", "pm"]
            },
            {
              metin: "Tur i = 3: 5 ve 8'in küçüğü 5, zaten yerinde. Son eleman da yerinde kalır: dizi sıralı.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 1], [0.15, 1]] },
                v0: { y: 1.7, metin: "1" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
                v1: { y: 2.7, metin: "2" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 4], [2.15, 4]] },
                v2: { y: 4.7, metin: "4" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 5], [3.15, 5]] },
                v3: { y: 5.7, metin: "5" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 8], [4.15, 8]] },
                v4: { y: 8.7, metin: "8" },
                sz: { noktalar: [[0, 0], [5, 0], [5, 9.5], [0, 9.5]] },
                pi: { x: 3.5, metin: "i ↓" },
                pm: { x: 3.5, metin: "min ↓" }
              },
              goster: ["pi", "pm"]
            }
          ]
        },
        { tip: "tablo", baslik: "Her turdan sonra dizi", head: ["i", "Taranan kısım", "minIndex", "Takas sonrası dizi"], rows: [["0", "0–4", "3 (değer 1)", "1 2 8 5 4"], ["1", "1–4", "1 (değer 2)", "1 2 8 5 4"], ["2", "2–4", "4 (değer 4)", "1 2 4 5 8"], ["3", "3–4", "3 (değer 5)", "1 2 4 5 8"]], vurgu: 2 }
      ]
    },
    {
      baslik: "*Insertion sort*: sıralı bölgeye yerine sok",
      kisa: "Her yeni elemanı sıralı bölgede sola kaydırarak doğru yerine sokar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "🃏", terim: "Insertion sort", tr: "araya sokmalı sıralama", tanim: "Soldaki sıralı bölgeyi büyütür: yeni elemanı (key) alır, ondan büyükleri sağa kaydırır ve açılan yere yerleştirir.", ornek: "Elindeki iskambil kâğıtlarını sırada tutarken yeni kâğıdı araya sokmak." }] },
        { tip: "kod", baslik: "Bütün algoritma", kod: `public static void insertionSort(int[] arr)
{
    for (int i = 1; i < arr.length; i++)
    {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`, vurgu: [5, 7, 9, 12], not: "Dış döngü 1'den başlar çünkü arr[0] tek başına sıralıdır. && içinde j >= 0 önce yazılır, yoksa arr[-1] okunurdu. Döngü bitince j + 1, key'in yeridir." },
        {
          tip: "grafik",
          baslik: "Insertion sort: [5, 2, 8, 1, 4]",
          xlabel: "indeks",
          ylabel: "değer",
          xmax: 5,
          ymax: 11,
          xticks: [{ v: 0.5, label: "0" }, { v: 1.5, label: "1" }, { v: 2.5, label: "2" }, { v: 3.5, label: "3" }, { v: 4.5, label: "4" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "sz", tip: "alan", renk: 1, noktalar: [[0, 0], [1, 0], [1, 9.5], [0, 9.5]], gizli: true },
            { id: "b0", tip: "alan", renk: 0, noktalar: [[0.15, 0], [0.85, 0], [0.85, 5], [0.15, 5]] },
            { id: "b1", tip: "alan", renk: 0, noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
            { id: "b2", tip: "alan", renk: 0, noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[3.15, 0], [3.85, 0], [3.85, 1], [3.15, 1]] },
            { id: "b4", tip: "alan", renk: 0, noktalar: [[4.15, 0], [4.85, 0], [4.85, 4], [4.15, 4]] },
            { id: "v0", tip: "yazi", x: 0.5, y: 5.7, metin: "5" },
            { id: "v1", tip: "yazi", x: 1.5, y: 2.7, metin: "2" },
            { id: "v2", tip: "yazi", x: 2.5, y: 8.7, metin: "8" },
            { id: "v3", tip: "yazi", x: 3.5, y: 1.7, metin: "1" },
            { id: "v4", tip: "yazi", x: 4.5, y: 4.7, metin: "4" },
            { id: "pi", tip: "yazi", x: 0.5, y: 10.5, metin: "i ↓", gizli: true },
            { id: "pm", tip: "yazi", x: 0.5, y: 9.6, metin: "min ↓", gizli: true }
          ],
          durumlar: [
            {
              metin: "Başlangıç: ilk eleman (5) tek başına sıralı sayılır. Yeşil bölge sıralı kısım.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 5], [0.15, 5]] },
                v0: { y: 5.7, metin: "5" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
                v1: { y: 2.7, metin: "2" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
                v2: { y: 8.7, metin: "8" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 1], [3.15, 1]] },
                v3: { y: 1.7, metin: "1" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 4], [4.15, 4]] },
                v4: { y: 4.7, metin: "4" },
                sz: { noktalar: [[0, 0], [1, 0], [1, 9.5], [0, 9.5]] }
              },
              goster: ["sz"]
            },
            {
              metin: "i = 1, key = 2: 5 > 2, 5 sağa kayar; 2 başa girer. 1 kaydırma.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 2], [0.15, 2]] },
                v0: { y: 2.7, metin: "2" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 5], [1.15, 5]] },
                v1: { y: 5.7, metin: "5" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
                v2: { y: 8.7, metin: "8" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 1], [3.15, 1]] },
                v3: { y: 1.7, metin: "1" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 4], [4.15, 4]] },
                v4: { y: 4.7, metin: "4" },
                sz: { noktalar: [[0, 0], [2, 0], [2, 9.5], [0, 9.5]] },
                pi: { x: 0.5, metin: "key ↓" }
              },
              goster: ["pi"],
              gizle: ["pm"]
            },
            {
              metin: "i = 2, key = 8: 5 > 8 değil, kaydırma yok. 8 olduğu yerde kalır.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 2], [0.15, 2]] },
                v0: { y: 2.7, metin: "2" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 5], [1.15, 5]] },
                v1: { y: 5.7, metin: "5" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 8], [2.15, 8]] },
                v2: { y: 8.7, metin: "8" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 1], [3.15, 1]] },
                v3: { y: 1.7, metin: "1" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 4], [4.15, 4]] },
                v4: { y: 4.7, metin: "4" },
                sz: { noktalar: [[0, 0], [3, 0], [3, 9.5], [0, 9.5]] },
                pi: { x: 2.5, metin: "key ↓" }
              },
              goster: ["pi"],
              gizle: ["pm"]
            },
            {
              metin: "i = 3, key = 1: 8, 5, 2 birer sağa kayar; 1 başa girer. 3 kaydırma.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 1], [0.15, 1]] },
                v0: { y: 1.7, metin: "1" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
                v1: { y: 2.7, metin: "2" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 5], [2.15, 5]] },
                v2: { y: 5.7, metin: "5" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 8], [3.15, 8]] },
                v3: { y: 8.7, metin: "8" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 4], [4.15, 4]] },
                v4: { y: 4.7, metin: "4" },
                sz: { noktalar: [[0, 0], [4, 0], [4, 9.5], [0, 9.5]] },
                pi: { x: 0.5, metin: "key ↓" }
              },
              goster: ["pi"],
              gizle: ["pm"]
            },
            {
              metin: "i = 4, key = 4: 8 ve 5 sağa kayar, 2 > 4 değil. 4, 2'nin sağına girer. 2 kaydırma. Toplam 6.",
              set: {
                b0: { noktalar: [[0.15, 0], [0.85, 0], [0.85, 1], [0.15, 1]] },
                v0: { y: 1.7, metin: "1" },
                b1: { noktalar: [[1.15, 0], [1.85, 0], [1.85, 2], [1.15, 2]] },
                v1: { y: 2.7, metin: "2" },
                b2: { noktalar: [[2.15, 0], [2.85, 0], [2.85, 4], [2.15, 4]] },
                v2: { y: 4.7, metin: "4" },
                b3: { noktalar: [[3.15, 0], [3.85, 0], [3.85, 5], [3.15, 5]] },
                v3: { y: 5.7, metin: "5" },
                b4: { noktalar: [[4.15, 0], [4.85, 0], [4.85, 8], [4.15, 8]] },
                v4: { y: 8.7, metin: "8" },
                sz: { noktalar: [[0, 0], [5, 0], [5, 9.5], [0, 9.5]] },
                pi: { x: 2.5, metin: "key ↓" }
              },
              goster: ["pi"],
              gizle: ["pm"]
            }
          ]
        }
      ]
    },
    {
      baslik: "Kaç karşılaştırma? İki algoritma yan yana",
      kisa: "Selection sort veri nasıl olursa olsun aynı işi yapar; insertion sıralı veride hızlanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "🔢", terim: "Statement execution count", tr: "satırın çalışma sayısı", tanim: "Bir satırın toplam kaç kez çalıştığı. İki kodun hızı bu sayıları sayarak kabaca karşılaştırılır.", ornek: "Selection sort'ta arr[j] < arr[minIndex] satırı kaç kez değerlendirilir?" }] },
        {
          tip: "tablo",
          baslik: "5 elemanlı dizide iç döngü karşılaştırma sayıları",
          head: ["Dizi", "Selection", "Insertion"],
          rows: [["Sıralı: 1 2 3 4 5", "10", "4"], ["Karışık: 5 2 8 1 4", "10", "8"], ["Ters: 5 4 3 2 1", "10", "10"]],
          vurgu: 0,
          not: "Selection her zaman 4 + 3 + 2 + 1 = 10. Insertion sıralıda her eleman için bir karşılaştırma (n - 1 = 4), tersinde en çok."
        },
        {
          tip: "ikili",
          sol: { ikon: "🎯", baslik: "*Selection sort*", maddeler: ["Kalan kısımda en küçüğü arar", "Takas yapar"] },
          sag: { ikon: "🃏", baslik: "*Insertion sort*", maddeler: ["Elemanı sola doğru kaydırır", "Araya sokar"] },
          oyun: [
            { metin: "Her turda kalan kısmın tamamını tarar", cevap: "sol", neden: "En küçüğü bulmak için bütün kalan kısma bakar." },
            { metin: "Dizi sıralıysa yaklaşık n - 1 karşılaştırma yapar", cevap: "sag", neden: "Her key, solundaki elemandan büyük olduğu için kaydırma gerekmez." },
            { metin: "Dizi sıralı olsa bile n(n - 1)/2 karşılaştırma yapar", cevap: "sol", neden: "İç döngü her turda kalan kısmı baştan sona gezer." },
            { metin: "Elemanları bir sağa kaydırarak yer açar", cevap: "sag", neden: "arr[j + 1] = arr[j] satırı kaydırmadır." }
          ]
        },
        {
          tip: "tuzak",
          metin: "Selection'da her tur bitince sol bölge kesin yerindedir. Insertion'da sol bölge sıralıdır ama kesin yerinde değildir.",
          yanlis: "Insertion sort'un ilk k elemanı, k tur sonra dizinin en küçük k elemanıdır.",
          dogru: "Sonradan gelen küçük bir eleman sıralı bölgenin başına girer. Örnek: 2 turdan sonra [2, 5, 8, 1, 4]; en küçük 1 henüz sağda."
        }
      ]
    },
    {
      baslik: "Ara durumdan algoritmayı tanımak",
      kisa: "Selection'da sol bölge en küçüklerdir; insertion'da sol bölge yalnız kendi içinde sıralıdır.",
      bloklar: [
        { tip: "tablo", baslik: "[5, 2, 8, 1, 4] dizisinin k. turdan sonraki hâli", head: ["Tur", "Selection", "Insertion"], rows: [["1", "1 2 8 5 4", "2 5 8 1 4"], ["2", "1 2 8 5 4", "2 5 8 1 4"], ["3", "1 2 4 5 8", "1 2 5 8 4"], ["4", "1 2 4 5 8", "1 2 4 5 8"]], vurgu: 0, not: "Insertion'da 1. tur i = 1, key = 2'dir. Selection'da 1. tur i = 0'dır." },
        {
          tip: "ornek",
          baslik: "Hangi algoritma?",
          durum: "[7, 3, 9, 1, 5] dizisi bir sıralama algoritmasının ortasında [3, 7, 9, 1, 5] görünümünde. Hangisi olabilir?",
          adimlar: ["Selection olsaydı sol bölge en küçük elemanları içerirdi. Önce 1 gelmeliydi; baştaki 3 değildir.", "Insertion'da ilk 3 eleman (3, 7, 9) kendi içinde sıralı, 1 ve 5 henüz yerleştirilmedi. Bu tam olarak insertion'ın görünümü."],
          sonuc: "Insertion sort"
        }
      ]
    },
    {
      baslik: "*ArrayList*'te sıralama ve *merge sort*'a bakış",
      kisa: "Aynı mantık get ve set ile ArrayList'te de çalışır; merge sort daha hızlıdır.",
      bloklar: [
        { tip: "kod", baslik: "ArrayList<Integer> üzerinde insertion sort", kod: `for (int i = 1; i < list.size(); i++)
{
    int key = list.get(i);
    int j = i - 1;
    while (j >= 0 && list.get(j) > key)
    {
        list.set(j + 1, list.get(j));
        j--;
    }
    list.set(j + 1, key);
}`, vurgu: [3, 7, 10], not: "Dizideki arr[x] okumak get(x), arr[x] = v yazmak set(x, v) olur; mantık aynıdır." },
        { tip: "kavramlar", kartlar: [{ ikon: "🧩", terim: "Merge sort", tr: "birleştirmeli sıralama", tanim: "Diziyi yarıya böler, iki yarıyı aynı yöntemle sıralar, sonra sıralı iki yarıyı birleştirir. Özyinelemelidir (cs414'te ayrıntılı).", ornek: "Büyük bir kâğıt destesini ikiye bölüp ayrı ayrı sıralamak, sonra iç içe geçirmek." }] }
      ]
    },
    {
      baslik: "Sınav için bilmen gerekenler",
      kisa: "Sıralamayı izlersin; ara durumdan algoritmayı tanır, çalışma sayısını bulursun.",
      bloklar: [
        {
          tip: "tablo",
          head: ["", "Unit 4'te bu konuda"],
          rows: [
            ["✍️ Yazarsın", "Sıralama kodunu sıfırdan yazman genelde beklenmez; ama dizi ve ArrayList'te iki elemanı takas etmeyi (temp ile) ve koşula göre yer değiştirmeyi yazabilmelisin."],
            ["👀 Okursun", "Selection ve insertion sort kodunu adım adım izlemek, k. tur sonundaki diziyi bulmak, bir satırın kaç kez çalıştığını saymak, ara durumdan algoritmayı tanımak."],
            ["🚫 Gerekmez", "Hızlı sıralama (quicksort), kabarcık sıralama (bubble sort) ya da Big-O gösterimi."]
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
          maddeler: ["*Selection sort*: kalan kısmın en küçüğünü bulur, sıradaki yerle takas eder; tur sonunda sol bölge kesin yerindedir.", "*Insertion sort*: key'i sıralı bölgede sola kaydırarak yerine sokar; sol bölge sıralıdır ama kesin yerinde değildir.", "Takas için üçüncü bir değişken (temp) gerekir; yoksa bir değer kopyalanıp ötekisi kaybolur.", "Selection 5 elemanda her zaman 10 karşılaştırma yapar; insertion sıralıda 4, tersinde 10.", "Ara durumda sol bölge en küçüklerdense selection, yalnız kendi içinde sıralıysa insertion.", "ArrayList'te okuma get, yazma set ile yapılır; mantık aynıdır.", "*Merge sort* yarıya böler, sıralar, birleştirir; sıralama algoritmalarının hızı satır çalışma sayılarıyla kıyaslanır."]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Kod parçası i = 0 ve i = 1 turlarını tamamladığında arr nasıl görünür?",
      fig: {
        type: "code",
        caption: "arr = {6, 9, 4, 2, 7}",
        code: `for (int i = 0; i < arr.length - 1; i++)
{
    int minIndex = i;
    for (int j = i + 1; j < arr.length; j++)
    {
        if (arr[j] < arr[minIndex])
            minIndex = j;
    }
    int temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}`
      },
      opts: ["2 4 6 7 9", "2 9 4 6 7", "2 4 9 6 7", "2 4 6 9 7"],
      a: 2,
      why: "i = 0: en küçük 2 (indeks 3), 6 ile takas: 2 9 4 6 7. i = 1: 9, 4, 6, 7'nin en küçüğü 4 (indeks 2), 9 ile takas: 2 4 9 6 7. Birinci turdan sonraki hâli (2 9 4 6 7) seçen ikinci tur takasını unutmuştur."
    },
    {
      q: "Insertion sort, {6, 9, 4, 2, 7} dizisini sıralarken arr[j + 1] = arr[j]; satırı toplam kaç kez çalışır?",
      fig: {
        type: "code",
        code: `for (int i = 1; i < arr.length; i++)
{
    int key = arr[i];
    int j = i - 1;
    while (j >= 0 && arr[j] > key)
    {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
}`
      },
      opts: ["6", "4", "5", "10"],
      a: 0,
      why: "i = 1: key 9, kaydırma yok (0). i = 2: key 4, 9 ve 6 kayar (2). i = 3: key 2, 9, 6, 4 kayar (3). i = 4: key 7, yalnız 9 kayar (1). Toplam 0 + 2 + 3 + 1 = 6. 4, dış döngü tur sayısıdır."
    },
    {
      q: "{8, 5, 9, 2, 6} dizisi üzerinde bir sıralama algoritması çalışırken dizi bir an [2, 5, 8, 9, 6] oldu. Bu hangi algoritmadır?",
      opts: ["Selection sort; çünkü baştaki iki eleman en küçükler", "Insertion sort; ilk dört eleman kendi içinde sıralı, 6 henüz yerleştirilmedi", "İkisi de olabilir", "Hiçbiri; dizi önce ters çevrilmiş"],
      a: 1,
      why: "Insertion sort üç elemanı yerleştirince bu görünüme gelir: 5, 8, 9 sıralanır, 2 başa girer. Selection sort'un sol bölgesi yalnız en küçüklerden oluşur; 6, 8'den küçük olduğu için 8 üçüncü sırada duramazdı (2. tur sonrası dizi [2, 5, 9, 8, 6] olurdu). İlk seçenek bunu atlar."
    },
    {
      q: "Zaten sıralı {1, 2, 3, 4, 5} dizisinde iç döngülerdeki karşılaştırmalar (selection'da arr[j] < arr[minIndex], insertion'da arr[j] > key) toplam kaç kez değerlendirilir?",
      opts: ["Selection: 10, insertion: 4", "Selection: 4, insertion: 4", "Selection: 10, insertion: 10", "Selection: 4, insertion: 10"],
      a: 0,
      why: "Selection sıralı olup olmadığına bakmaz: 4 + 3 + 2 + 1 = 10. Insertion'da her key solundaki elemandan büyüktür, while ilk karşılaştırmada durur: 4 tur, 4 karşılaştırma. Üçüncü seçenek insertion'ın en kötü durumudur (ters sıralı dizi)."
    },
    {
      q: "Takas satırlarında hata var. Kod çalışınca ekrana ne yazdırılır?",
      fig: {
        type: "code",
        code: `int[] arr = {3, 1, 2};
for (int i = 0; i < arr.length - 1; i++)
{
    int minIndex = i;
    for (int j = i + 1; j < arr.length; j++)
    {
        if (arr[j] < arr[minIndex])
            minIndex = j;
    }
    arr[i] = arr[minIndex];
    arr[minIndex] = arr[i];
}
System.out.println(arr[0] + " " + arr[1] + " " + arr[2]);`
      },
      opts: ["1 2 3", "1 1 2", "3 1 2", "1 1 1"],
      a: 1,
      why: "i = 0: minIndex = 1. arr[0] = arr[1] yapınca 3 kaybolur: {1, 1, 2}; arr[1] = arr[0] da 1'dir. i = 1: kendisiyle atama, değişmez. Sonuç 1 1 2. temp kullanılmadığı için sıralı 1 2 3 çıkmaz."
    }
  ]
};
