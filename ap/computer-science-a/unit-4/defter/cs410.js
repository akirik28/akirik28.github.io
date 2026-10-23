/* Kitora not defteri · cs410 · 4.12–4.13 2D Dizi Dolaşma ve Algoritmalar
   Kaynak: AP CSA CED 2025–26 (Unit 4) kapsamı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs410",
  amac: "Bu konu 2D diziyi iç içe döngülerle gezmeyi ve onunla klasik işler yapmayı anlatıyor: satır-satır ve sütun-sütun dolaşma, enhanced for, satır ve sütun toplamı, en büyük, sayma ve komşuya bakma.",
  bolumler: [
    {
      baslik: "Satır satır dolaşma (*row-major order*)",
      kisa: "Dış döngü satır, iç döngü sütun: satır bitmeden alt satıra geçilmez.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "➡️", terim: "Row-major order", tr: "satır öncelikli sıra", tanim: "Önce bir satırın bütün hücreleri, sonra sıradaki satır gezilir. Dış döngü r, iç döngü c'dir.", ornek: "Kitap okur gibi: soldan sağa, yukarıdan aşağı." },
            { ikon: "⬇️", terim: "Column-major order", tr: "sütun öncelikli sıra", tanim: "Önce bir sütunun bütün hücreleri, sonra sıradaki sütun gezilir. Dış döngü c, iç döngü r'dir.", ornek: "Aşağı inen şeritler halinde okumak." }
          ]
        },
        {
          tip: "grafik",
          baslik: "Satır-major: dış r, iç c",
          xlabel: "sütun c",
          ylabel: "satır r",
          xmax: 4,
          ymax: 4,
          xticks: [{ v: 0.5, label: "0" }, { v: 1.5, label: "1" }, { v: 2.5, label: "2" }, { v: 3.5, label: "3" }],
          yticks: [{ v: 2.5, label: "0" }, { v: 1.5, label: "1" }, { v: 0.5, label: "2" }],
          ogeler: [
            { id: "gx1", tip: "cizgi", renk: 0, kesik: true, from: [1, 0], to: [1, 3] },
            { id: "gx2", tip: "cizgi", renk: 0, kesik: true, from: [2, 0], to: [2, 3] },
            { id: "gx3", tip: "cizgi", renk: 0, kesik: true, from: [3, 0], to: [3, 3] },
            { id: "gy1", tip: "cizgi", renk: 0, kesik: true, from: [0, 1], to: [4, 1] },
            { id: "gy2", tip: "cizgi", renk: 0, kesik: true, from: [0, 2], to: [4, 2] },
            { id: "gt", tip: "cizgi", renk: 0, kesik: true, from: [0, 3], to: [4, 3] },
            { id: "strip", tip: "alan", renk: 1, noktalar: [[0, 2], [4, 2], [4, 3], [0, 3]], gizli: true },
            { id: "c00", tip: "yazi", x: 0.5, y: 2.35, metin: "1" },
            { id: "c01", tip: "yazi", x: 1.5, y: 2.35, metin: "2" },
            { id: "c02", tip: "yazi", x: 2.5, y: 2.35, metin: "3" },
            { id: "c03", tip: "yazi", x: 3.5, y: 2.35, metin: "4" },
            { id: "c10", tip: "yazi", x: 0.5, y: 1.35, metin: "5" },
            { id: "c11", tip: "yazi", x: 1.5, y: 1.35, metin: "6" },
            { id: "c12", tip: "yazi", x: 2.5, y: 1.35, metin: "7" },
            { id: "c13", tip: "yazi", x: 3.5, y: 1.35, metin: "8" },
            { id: "c20", tip: "yazi", x: 0.5, y: 0.35, metin: "9" },
            { id: "c21", tip: "yazi", x: 1.5, y: 0.35, metin: "10" },
            { id: "c22", tip: "yazi", x: 2.5, y: 0.35, metin: "11" },
            { id: "c23", tip: "yazi", x: 3.5, y: 0.35, metin: "12" },
            { id: "out", tip: "yazi", x: 2, y: 3.55, metin: "çıktı:" }
          ],
          durumlar: [
            { metin: "Dış döngü r satırları, iç döngü c sütunları gezer. Önce bir satır bitirilir." },
            { metin: "r = 0: iç döngü c = 0, 1, 2, 3 ile satırı soldan sağa tamamlar. Yazdırılan 1 2 3 4.", goster: ["strip"], set: { strip: { noktalar: [[0, 2], [4, 2], [4, 3], [0, 3]] }, out: { metin: "çıktı: 1 2 3 4" } } },
            { metin: "r = 1: aynı satır gezintisi bir alt satırda. 5 6 7 8.", set: { strip: { noktalar: [[0, 1], [4, 1], [4, 2], [0, 2]] }, out: { metin: "çıktı: 1 2 3 4 | 5 6 7 8" } } },
            { metin: "r = 2: son satır. Tüm tablo satır satır, yukarıdan aşağı gezildi: 1'den 12'ye.", set: { strip: { noktalar: [[0, 0], [4, 0], [4, 1], [0, 1]] }, out: { metin: "çıktı: 1 2 3 4 | 5 6 7 8 | 9 10 11 12" } } }
          ]
        },
        { tip: "kod", baslik: "Satırları sırayla yazdır", kod: `int[][] a = { {1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12} };
for (int r = 0; r < a.length; r++)
{
    for (int c = 0; c < a[r].length; c++)
    {
        System.out.print(a[r][c] + " ");
    }
    System.out.println();
}`, vurgu: [2, 4], cikti: `1 2 3 4
5 6 7 8
9 10 11 12`, not: "Dış döngü a.length (satır sayısı), iç döngü a[r].length (o satırın sütun sayısı) kadar döner. Satır sonunda println yeni satıra geçer." }
      ]
    },
    {
      baslik: "Sütun sütun dolaşma (*column-major order*)",
      kisa: "Döngülerin yeri değişir: dış döngü sütun, iç döngü satır; okunan hâlâ a[r][c].",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Sütun-major: dış c, iç r",
          xlabel: "sütun c",
          ylabel: "satır r",
          xmax: 4,
          ymax: 4,
          xticks: [{ v: 0.5, label: "0" }, { v: 1.5, label: "1" }, { v: 2.5, label: "2" }, { v: 3.5, label: "3" }],
          yticks: [{ v: 2.5, label: "0" }, { v: 1.5, label: "1" }, { v: 0.5, label: "2" }],
          ogeler: [
            { id: "gx1", tip: "cizgi", renk: 0, kesik: true, from: [1, 0], to: [1, 3] },
            { id: "gx2", tip: "cizgi", renk: 0, kesik: true, from: [2, 0], to: [2, 3] },
            { id: "gx3", tip: "cizgi", renk: 0, kesik: true, from: [3, 0], to: [3, 3] },
            { id: "gy1", tip: "cizgi", renk: 0, kesik: true, from: [0, 1], to: [4, 1] },
            { id: "gy2", tip: "cizgi", renk: 0, kesik: true, from: [0, 2], to: [4, 2] },
            { id: "gt", tip: "cizgi", renk: 0, kesik: true, from: [0, 3], to: [4, 3] },
            { id: "strip", tip: "alan", renk: 1, noktalar: [[0, 0], [1, 0], [1, 3], [0, 3]], gizli: true },
            { id: "c00", tip: "yazi", x: 0.5, y: 2.35, metin: "1" },
            { id: "c01", tip: "yazi", x: 1.5, y: 2.35, metin: "2" },
            { id: "c02", tip: "yazi", x: 2.5, y: 2.35, metin: "3" },
            { id: "c03", tip: "yazi", x: 3.5, y: 2.35, metin: "4" },
            { id: "c10", tip: "yazi", x: 0.5, y: 1.35, metin: "5" },
            { id: "c11", tip: "yazi", x: 1.5, y: 1.35, metin: "6" },
            { id: "c12", tip: "yazi", x: 2.5, y: 1.35, metin: "7" },
            { id: "c13", tip: "yazi", x: 3.5, y: 1.35, metin: "8" },
            { id: "c20", tip: "yazi", x: 0.5, y: 0.35, metin: "9" },
            { id: "c21", tip: "yazi", x: 1.5, y: 0.35, metin: "10" },
            { id: "c22", tip: "yazi", x: 2.5, y: 0.35, metin: "11" },
            { id: "c23", tip: "yazi", x: 3.5, y: 0.35, metin: "12" },
            { id: "out", tip: "yazi", x: 2, y: 3.55, metin: "çıktı:" }
          ],
          durumlar: [
            { metin: "Şimdi dış döngü c sütunları, iç döngü r satırları gezer. Önce bir sütun bitirilir." },
            { metin: "c = 0: iç döngü r = 0, 1, 2 ile sütunu yukarıdan aşağı gezer. Yazdırılan 1 5 9.", goster: ["strip"], set: { strip: { noktalar: [[0, 0], [1, 0], [1, 3], [0, 3]] }, out: { metin: "çıktı: 1 5 9" } } },
            { metin: "c = 1: bir sağdaki sütun: 2 6 10.", set: { strip: { noktalar: [[1, 0], [2, 0], [2, 3], [1, 3]] }, out: { metin: "çıktı: 1 5 9 | 2 6 10" } } },
            { metin: "c = 2: 3 7 11.", set: { strip: { noktalar: [[2, 0], [3, 0], [3, 3], [2, 3]] }, out: { metin: "çıktı: 1 5 9 | 2 6 10 | 3 7 11" } } },
            { metin: "c = 3: son sütun: 4 8 12. Sütun sütun gezildi.", set: { strip: { noktalar: [[3, 0], [4, 0], [4, 3], [3, 3]] }, out: { metin: "çıktı: 1 5 9 | 2 6 10 | 3 7 11 | 4 8 12" } } }
          ]
        },
        { tip: "kod", baslik: "Sütunları sırayla yazdır", kod: `for (int c = 0; c < a[0].length; c++)
{
    for (int r = 0; r < a.length; r++)
    {
        System.out.print(a[r][c] + " ");
    }
    System.out.println();
}`, vurgu: [1, 3], cikti: `1 5 9
2 6 10
3 7 11
4 8 12`, not: "Yalnızca iki başlık yer değiştirdi. İndeksler yine a[r][c], yani önce satır sonra sütun; dış döngünün sınırı artık sütun sayısı a[0].length." }
      ]
    },
    {
      baslik: "*Enhanced for* ile 2D dizi",
      kisa: "Dıştaki değişken bir satırdır (int[]), içteki ise bir hücrenin kopyasıdır.",
      bloklar: [
        { tip: "kod", baslik: "Bütün hücrelerin toplamı", kod: `int total = 0;
for (int[] row : a)
{
    for (int v : row)
    {
        total += v;
    }
}
System.out.println(total);`, vurgu: [2, 4], cikti: "78", not: "Dış döngü her turda bir satırı (int[] türünde) verir; iç döngü o satırın elemanlarını gezer. a, yukarıdaki 1…12 tablosudur: 1 + 2 + … + 12 = 78." },
        { tip: "kod", baslik: "Hücreyi değiştirmeyi dene", kod: `int[][] q = { {1, 2}, {3, 4} };
for (int[] row : q)
{
    for (int v : row)
    {
        v = v * 10;
    }
}
System.out.println(q[0][0] + " " + q[1][1]);`, vurgu: [6], cikti: "1 4", not: "v her turda hücrenin bir kopyasıdır; v'yi değiştirmek tabloyu etkilemez." },
        { tip: "tuzak", metin: "int türünde enhanced for değişkenine atama, diziyi değiştirmez. Hücreleri güncellemek için indeksli döngü gerekir.", yanlis: "for (int v : row) v = 0; satırı bütün hücreleri sıfırlar.", dogru: "Dizi aynı kalır. Hücreyi değiştirmek için row[c] = 0; ya da a[r][c] = 0; yaz." }
      ]
    },
    {
      baslik: "Satır ve sütun toplamı",
      kisa: "Toplayıcı, toplanacak grubun dış döngüsünün içinde ve iç döngüden önce sıfırlanır.",
      bloklar: [
        { tip: "kod", baslik: "Her öğrencinin (satır) toplam puanı", kod: `int[][] scores = { {7, 9, 4, 8}, {6, 5, 10, 3}, {2, 8, 7, 9} };
for (int r = 0; r < scores.length; r++)
{
    int sum = 0;
    for (int c = 0; c < scores[r].length; c++)
    {
        sum += scores[r][c];
    }
    System.out.println("Satır " + r + ": " + sum);
}`, vurgu: [4, 5, 7], cikti: `Satır 0: 28
Satır 1: 24
Satır 2: 26`, not: "Her satır bir öğrenci, her sütun bir sınavdır. sum her satırda yeniden 0'dan başlar." },
        { tip: "kod", baslik: "Her sınavın (sütun) toplamı", kod: `for (int c = 0; c < scores[0].length; c++)
{
    int sum = 0;
    for (int r = 0; r < scores.length; r++)
    {
        sum += scores[r][c];
    }
    System.out.println("Sütun " + c + ": " + sum);
}`, vurgu: [1, 3, 4], cikti: `Sütun 0: 15
Sütun 1: 22
Sütun 2: 21
Sütun 3: 20`, not: "scores, bir önceki örnekteki puan tablosudur. Sütun toplamında dış döngü sütundur; iç döngü satırları gezer." },
        { tip: "tuzak", metin: "sum'ı iki döngünün de dışında tanımlarsan toplam satırlar boyunca birikir.", yanlis: "int sum = 0; en üste yazılırsa her satırın toplamı doğru çıkar.", dogru: "Satır toplamı yerine birikimli toplam çıkar: 28, 52, 78. sum = 0 dış döngünün içinde olmalı." }
      ]
    },
    {
      baslik: "En büyük, konumu ve sayma",
      kisa: "En büyüğü ilk hücreyle başlat; konumu r ve c ile birlikte sakla.",
      bloklar: [
        { tip: "kod", baslik: "En yüksek puan, yeri ve 8 ve üstü kaç tane?", kod: `int best = scores[0][0];
int br = 0;
int bc = 0;
int count = 0;
for (int r = 0; r < scores.length; r++)
{
    for (int c = 0; c < scores[r].length; c++)
    {
        if (scores[r][c] > best)
        {
            best = scores[r][c];
            br = r;
            bc = c;
        }
        if (scores[r][c] >= 8)
            count++;
    }
}
System.out.println(best + " [" + br + "][" + bc + "] " + count);`, vurgu: [9, 15], cikti: "10 [1][2] 5", not: "En büyük 1. satır 2. sütundaki 10. 8 ve üstü: 9, 8, 10, 8, 9 yani 5 hücre." },
        {
          tip: "tablo",
          baslik: "Hangi iş için döngü iskeleti",
          head: ["Amaç", "Toplayıcı nerede başlar", "Dış döngü"],
          rows: [["Satır toplamı", "dış döngünün içinde, iç döngüden önce", "satır"], ["Sütun toplamı", "dış döngünün içinde, iç döngüden önce", "sütun"], ["Bütün tablonun toplamı ya da sayma", "iki döngüden de önce", "ikisi de olur"], ["En büyük / en küçük", "iki döngüden önce, ilk hücreyle", "ikisi de olur"]],
          vurgu: 0
        }
      ]
    },
    {
      baslik: "Sınır kontrolü ve komşuya bakmak",
      kisa: "Komşu hücreye bakmadan önce indeksin tabloda olup olmadığını kontrol et.",
      bloklar: [
        { tip: "kod", baslik: "Mayın tarlası: yukarı, aşağı, sol ve sağdaki mayınlar", kod: `public static boolean inBounds(int[][] g, int r, int c)
{
    return r >= 0 && r < g.length && c >= 0 && c < g[0].length;
}
public static int countAround(int[][] g, int r, int c)
{
    int n = 0;
    if (inBounds(g, r - 1, c) && g[r - 1][c] == 1)
        n++;
    if (inBounds(g, r + 1, c) && g[r + 1][c] == 1)
        n++;
    if (inBounds(g, r, c - 1) && g[r][c - 1] == 1)
        n++;
    if (inBounds(g, r, c + 1) && g[r][c + 1] == 1)
        n++;
    return n;
}`, vurgu: [3, 8], not: "1, mayın demektir. inBounds hücrenin tabloda olup olmadığını söyler; && sola bakıp false görürse sağı hiç hesaplamaz." },
        {
          tip: "ornek",
          baslik: "Köşede ve ortada komşu sayma",
          durum: "g = { {0, 1, 0}, {0, 0, 1}, {1, 0, 0} } iken countAround(g, 0, 0) ve countAround(g, 1, 1) ne döndürür?",
          adimlar: ["(0, 0) için yukarı: inBounds(g, -1, 0) false, g[-1][0] okunmaz. Aşağı: g[1][0] = 0. Sol: inBounds(g, 0, -1) false. Sağ: g[0][1] = 1, n = 1.", "(1, 1) için yukarı g[0][1] = 1, aşağı g[2][1] = 0, sol g[1][0] = 0, sağ g[1][2] = 1."],
          sonuc: "(0, 0) için 1, (1, 1) için 2"
        },
        { tip: "tuzak", metin: "&& işleminde sınır kontrolü sola yazılmalı. Soldaki yarı false olunca sağdaki hiç çalışmaz.", yanlis: "Sınır kontrolünü && işaretinin sağına yazmak da güvenlidir.", dogru: "r = 0 iken g[-1][c] önce hesaplanır ve ArrayIndexOutOfBoundsException çıkar. Önce r - 1 >= 0 yaz." }
      ]
    },
    {
      baslik: "Sınav için bilmen gerekenler",
      kisa: "FRQ 4: iç içe döngüyle satır, sütun, sayma, toplam ve komşu kontrolü.",
      bloklar: [
        {
          tip: "tablo",
          head: ["", "Unit 4'te bu konuda"],
          rows: [
            ["✍️ Yazarsın", "İç içe döngüyle satır-major ve sütun-major gezme; satır toplamı, sütun toplamı, en büyük, sayma, koşula uyanları bulma; sınır kontrolü."],
            ["👀 Okursun", "Hangi sırayla yazdırıldığını izlemek; toplayıcının yanlış yerde sıfırlandığı kodlar; enhanced for'un hücreyi değiştirmediği durum."],
            ["🚫 Gerekmez", "3 boyutlu diziler ve düzensiz (ragged) dizilerin ayrıntıları."]
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
          maddeler: ["Satır-major: dış döngü r (a.length), iç döngü c (a[r].length). Sütun-major: dış c (a[0].length), iç r (a.length).", "İndeksleme her zaman a[r][c]: önce satır, sonra sütun.", "Enhanced for: dış değişken satırdır (int[]), iç değişken hücrenin kopyasıdır; atama diziyi değiştirmez.", "Satır toplamında sum dış döngünün içinde sıfırlanır; sütun toplamında dış döngü sütundur.", "En büyüğü ilk hücreyle başlat; konum için r ve c'yi de sakla.", "Komşu kontrolünde önce inBounds, sonra erişim yaz (&& soldan sağa çalışır).", "Sınır dışı indeks çalışırken *ArrayIndexOutOfBoundsException* verir."]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Kod çalışınca ekrana ne yazdırılır?",
      fig: {
        type: "code",
        code: `int[][] m = { {1, 2, 3}, {4, 5, 6} };
for (int c = 0; c < m[0].length; c++)
{
    for (int r = 0; r < m.length; r++)
    {
        System.out.print(m[r][c] + " ");
    }
}`
      },
      opts: ["1 2 3 4 5 6", "1 4 2 5 3 6", "3 6 2 5 1 4", "1 5 3 4 2 6"],
      a: 1,
      why: "Dış döngü sütun: c = 0'da r = 0, 1 ile 1 ve 4; c = 1'de 2 ve 5; c = 2'de 3 ve 6. Yazdırılan 1 4 2 5 3 6. Satır satır sanan 1 2 3 4 5 6 seçeneğine gider."
    },
    {
      q: "Kod çalışınca ekrana ne yazdırılır?",
      fig: {
        type: "code",
        code: `int[][] m = { {1, 2}, {3, 4} };
int sum = 0;
for (int r = 0; r < m.length; r++)
{
    for (int c = 0; c < m[r].length; c++)
    {
        sum += m[r][c];
    }
    System.out.print(sum + " ");
}`
      },
      opts: ["3 7", "1 3 6 10", "10 10", "3 10"],
      a: 3,
      why: "sum satır başında sıfırlanmıyor. 1. satırdan sonra sum 3 olur ve yazdırılır; 2. satırda 3 + 3 + 4 = 10 olur. Çıktı 3 10. Satır toplamlarını (3 ve 7) bekleyen ilk seçeneğe gider."
    },
    {
      q: "Kod çalışınca ekrana ne yazdırılır?",
      fig: {
        type: "code",
        code: `int[][] a = { {5, 5}, {5, 5} };
for (int[] row : a)
{
    for (int v : row)
    {
        v = 0;
    }
}
for (int r = 0; r < a.length; r++)
{
    a[r][0] = 1;
}
System.out.println(a[0][0] + a[0][1] + a[1][0] + a[1][1]);`
      },
      opts: ["0", "2", "12", "20"],
      a: 2,
      why: "İlk döngü hücrelerin kopyasını değiştirir, tablo aynı kalır. İkinci döngü her satırın ilk hücresini 1 yapar: { {1, 5}, {1, 5} }. Toplam 1 + 5 + 1 + 5 = 12. İlk döngünün tabloyu sıfırladığını sanan 2'ye gider."
    },
    {
      q: "a, satır ve sütun sayısı farklı olabilen bir int[][] dizisidir. Yalnızca son sütunun toplamını hesaplayan kod hangisidir?",
      opts: ["for (int r = 0; r < a.length; r++) sum += a[r][a[0].length - 1];", "for (int r = 0; r < a.length; r++) sum += a[r][a.length - 1];", "for (int c = 0; c < a[0].length; c++) sum += a[a.length - 1][c];", "for (int r = 0; r <= a.length; r++) sum += a[r][a[0].length - 1];"],
      a: 0,
      why: "Son sütunun indeksi a[0].length - 1'dir ve her satır için bakılır. İkinci seçenek sütun yerine satır sayısını kullanır (kare olmayan tabloda yanlış). Üçüncüsü son satırı toplar. Dördüncüde r <= a.length sınırı aşar."
    },
    {
      q: "Kod çalışırsa ne olur?",
      fig: {
        type: "code",
        code: `int[][] g = { {0, 1}, {1, 0} };
int r = 0;
int c = 0;
if (g[r - 1][c] == 1 && r - 1 >= 0)
{
    System.out.println("mayın");
}`
      },
      opts: ["mayın yazılır", "Hiçbir şey yazılmaz", "ArrayIndexOutOfBoundsException fırlatılır", "Derleme hatası olur"],
      a: 2,
      why: "&& önce soldaki ifadeyi hesaplar. r = 0 olduğundan g[-1][0] okunur ve çalışma anında hata çıkar; sağdaki r - 1 >= 0 kontrolüne hiç gelinmez. Kod derlenir, bu yüzden son seçenek yanlış. Doğrusu önce sınırı kontrol etmektir."
    }
  ]
};
