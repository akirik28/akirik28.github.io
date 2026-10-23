/* Kitpath not defteri · cs409 · 4.11 2D Dizi Oluşturma ve Erişim
   Kaynak: AP CSA CED 2025–26 (Unit 4) kapsamı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs409",
  amac: "Bu konu iki boyutlu (2D) diziyi anlatıyor: satır ve sütunlardan oluşan bir tablo. Nasıl oluşturulduğunu, varsayılan değerlerini, a[satır][sütun] ile erişimi, iki length'in farkını ve sınır hatasını öğreneceksin.",
  bolumler: [
    {
      baslik: "2D dizi: satır ve sütunlu tablo",
      kisa: "2D dizi, dizilerden oluşan bir dizidir; hücreye önce satır sonra sütunla gidilir.",
      bloklar: [
        { tip: "hikaye", ikon: "🪑", baslik: "Sınıfın oturma planı", metin: "Sınıfta 3 sıra var, her sırada 4 sandalye. Birini tarif etmek için iki sayı gerekir: kaçıncı sıra ve sıradaki kaçıncı sandalye. 2D dizi de böyledir; tek sıra 1D dizi, bütün sıralar 2D dizidir." },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "▦", terim: "2D array", tr: "iki boyutlu dizi", tanim: "Aynı türden elemanların satır ve sütunlara dizildiği tablo. Gerçekte her satır ayrı bir 1D dizidir.", ornek: "int[][] a: sayılardan oluşan tablo." },
            { ikon: "↔️", terim: "Row / Column", tr: "satır / sütun", tanim: "Satır yatay, sütun dikey sıradır. Hücre adresi a[satır][sütun] biçimindedir ve ikisi de 0'dan başlar.", ornek: "a[1][2]: ikinci satır, üçüncü sütun." }
          ]
        }
      ]
    },
    {
      baslik: "Oluşturma: *new* ve başlatma listesi",
      kisa: "new int[satır][sütun] boş tablo kurar; küme parantezleri değerlerle başlatır.",
      bloklar: [
        { tip: "kod", baslik: "Üç oluşturma biçimi ve varsayılanlar", kod: `int[][] grid = new int[3][4];
String[][] names = new String[2][2];
boolean[][] seen = new boolean[2][3];
double[][] prices = new double[2][2];
int[][] b = { {1, 2, 3}, {4, 5, 6} };
System.out.println(grid[2][3] + " " + seen[1][2] + " " + prices[0][0] + " " + names[0][0]);`, vurgu: [1, 5, 6], cikti: "0 false 0.0 null", not: "new ile kurarken ilk köşeli parantez satır sayısı, ikincisi sütun sayısıdır. Küme parantezli liste her satırı ayrı bir iç liste ile yazar." },
        { tip: "tablo", baslik: "new ile kurulunca hücrelerdeki ilk değer", head: ["Tür", "Başlangıç değeri"], rows: [["int", "0"], ["double", "0.0"], ["boolean", "false"], ["String ve diğer nesneler", "null"]], vurgu: 3 },
        { tip: "tuzak", metin: "String dizisi boş yazılarla değil null ile başlar; bir hücreye değer koymadan metot çağırırsan çalışırken patlar.", yanlis: "new String[2][2] içindeki her hücre \"\" (boş yazı) olur.", dogru: "Hücreler null'dır. names[0][0].length() çağrısı NullPointerException fırlatır." }
      ]
    },
    {
      baslik: "İki farklı length: satır sayısı ve sütun sayısı",
      kisa: "a.length satır sayısıdır; a[0].length sütun sayısıdır.",
      bloklar: [
        { tip: "kod", baslik: "Boyutları sor", kod: `int[][] b = { {1, 2, 3}, {4, 5, 6} };
System.out.println(b.length);
System.out.println(b[0].length);
System.out.println(b[1][2]);`, vurgu: [2, 3], cikti: `2
3
6`, not: "b iki satırlı olduğu için b.length 2'dir. b[0] ilk satırdır ve 3 elemanlıdır, yani sütun sayısı b[0].length. Son hücre b[1][2] = 6." },
        {
          tip: "ikili",
          sol: { ikon: "↕️", baslik: "Satır sayısı", maddeler: ["a.length", "Dış dizinin uzunluğu"] },
          sag: { ikon: "↔️", baslik: "Sütun sayısı", maddeler: ["a[0].length ya da a[r].length", "Bir satırın uzunluğu"] },
          oyun: [
            { metin: "b.length", cevap: "sol", neden: "Dış dizinin uzunluğu: satır sayısı." },
            { metin: "b[0].length", cevap: "sag", neden: "İlk satırın uzunluğu: sütun sayısı." },
            { metin: "new int[5][2] ile kurulan tablodaki 5", cevap: "sol", neden: "İlk parantez satır sayısı." },
            { metin: "new int[5][2] ile kurulan tablodaki 2", cevap: "sag", neden: "İkinci parantez sütun sayısı." },
            { metin: "b[r].length (r geçerli bir satır)", cevap: "sag", neden: "r. satırın eleman sayısı." }
          ]
        }
      ]
    },
    {
      baslik: "Hücre okumak ve yazmak: a[r][c]",
      kisa: "Önce satır, sonra sütun; sınır dışı indeks çalışırken hata verir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "a[satır][sütun] ile hücreye gitmek",
          xlabel: "sütun",
          ylabel: "satır",
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
            { id: "hl", tip: "alan", renk: 1, noktalar: [[2, 1], [3, 1], [3, 2], [2, 2]], gizli: true },
            { id: "c00", tip: "yazi", x: 0.5, y: 2.35, metin: "3" },
            { id: "c01", tip: "yazi", x: 1.5, y: 2.35, metin: "7" },
            { id: "c02", tip: "yazi", x: 2.5, y: 2.35, metin: "1" },
            { id: "c03", tip: "yazi", x: 3.5, y: 2.35, metin: "4" },
            { id: "c10", tip: "yazi", x: 0.5, y: 1.35, metin: "9" },
            { id: "c11", tip: "yazi", x: 1.5, y: 1.35, metin: "2" },
            { id: "c12", tip: "yazi", x: 2.5, y: 1.35, metin: "8" },
            { id: "c13", tip: "yazi", x: 3.5, y: 1.35, metin: "5" },
            { id: "c20", tip: "yazi", x: 0.5, y: 0.35, metin: "6" },
            { id: "c21", tip: "yazi", x: 1.5, y: 0.35, metin: "0" },
            { id: "c22", tip: "yazi", x: 2.5, y: 0.35, metin: "7" },
            { id: "c23", tip: "yazi", x: 3.5, y: 0.35, metin: "2" },
            { id: "tag", tip: "yazi", x: 2, y: 3.55, metin: "int[][] a: 3 satır, 4 sütun" }
          ],
          durumlar: [
            { metin: "a, 3 satırlı ve 4 sütunlu bir tablo: a.length = 3, a[0].length = 4. Her hücrenin adresi iki indeksten oluşur: önce satır, sonra sütun." },
            { metin: "a[1][2]: 1. satır (yukarıdan ikinci), 2. sütun (soldan üçüncü). Değeri 8. Sayma her zaman 0'dan başlar.", goster: ["hl"], set: { hl: { noktalar: [[2, 1], [3, 1], [3, 2], [2, 2]] }, tag: { metin: "a[1][2] = 8" } } },
            { metin: "a[0][3]: 0. satır, 3. sütun; sağ üst köşe, değeri 4. Geçerli en büyük sütun indeksi a[0].length - 1 = 3.", set: { hl: { noktalar: [[3, 2], [4, 2], [4, 3], [3, 3]] }, tag: { metin: "a[0][3] = 4" } } },
            { metin: "a[2][0]: son satır, ilk sütun; sol alt köşe, değeri 6. Son satır indeksi a.length - 1 = 2.", set: { hl: { noktalar: [[0, 0], [1, 0], [1, 1], [0, 1]] }, tag: { metin: "a[2][0] = 6" } } },
            { metin: "a[1][2] = 0; atama yalnızca o hücreyi değiştirir. Sıra ters yazılırsa (a[2][1]) bambaşka bir hücreye gidersin.", set: { hl: { noktalar: [[2, 1], [3, 1], [3, 2], [2, 2]] }, c12: { metin: "0" }, tag: { metin: "a[1][2] = 0" } } }
          ]
        },
        { tip: "kod", baslik: "Oku, yaz, hesapla", kod: `int[][] a = { {3, 7, 1, 4}, {9, 2, 8, 5}, {6, 0, 7, 2} };
int x = a[1][2];
a[1][2] = 0;
a[2][0] = a[0][3] + x;
System.out.println(x + " " + a[1][2] + " " + a[2][0]);`, vurgu: [2, 3, 4], cikti: "8 0 12", not: "x = 8 alınır, hücre 0 yapılır, a[2][0] ise 4 + 8 = 12 olur." },
        { tip: "tuzak", metin: "Sıra karışır ve indeks sınırı aşılır: a 3 satırlı olduğu için a[3][0] geçersizdir, a[0][4] de (sütunlar 0–3).", yanlis: "a[sütun][satır] yazmak da çalışır, yalnızca ters okunur.", dogru: "İlk indeks satırdır. Sınır dışında ArrayIndexOutOfBoundsException çıkar." }
      ]
    },
    {
      baslik: "Dizinin dizisi: her satır ayrı bir dizi",
      kisa: "b[1] bir 1D dizidir; ona verilen yeni ad aynı satırı gösterir.",
      bloklar: [
        { tip: "tablo", baslik: "Aynı b'den üç farklı şey", head: ["İfade", "Türü", "Anlamı"], rows: [["b", "int[][]", "bütün tablo (satırların dizisi)"], ["b[1]", "int[]", "tek bir satır (1D dizi)"], ["b[1][2]", "int", "tek bir hücre"]], vurgu: 1 },
        { tip: "kod", baslik: "Satıra takma ad", kod: `int[][] b = { {1, 2, 3}, {4, 5, 6} };
int[] row = b[1];
row[0] = 99;
System.out.println(b[1][0]);
System.out.println(row.length);`, vurgu: [2, 3], cikti: `99
3`, not: "row yeni bir satır kopyası değil, b[1]'in kendisini gösteren ikinci addır (*aliasing*). Biri değişince öteki de değişir." }
      ]
    },
    {
      baslik: "Sınav için bilmen gerekenler",
      kisa: "FRQ 4 bu tabloyla çalışır; satır-sütun sırasını ve length'leri karıştırma.",
      bloklar: [
        {
          tip: "tablo",
          head: ["", "Unit 4'te bu konuda"],
          rows: [
            ["✍️ Yazarsın", "2D dizi oluşturmak (new ya da liste), a[r][c] ile okumak ve yazmak, a.length ve a[0].length kullanmak."],
            ["👀 Okursun", "Hangi hücrenin değiştiğini izlemek, satırı gösteren referansları, varsayılan değerleri, ArrayIndexOutOfBoundsException."],
            ["🚫 Gerekmez", "Düzensiz (satırları farklı uzunlukta) dizi ayrıntıları ya da 3 boyutlu diziler."]
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
          maddeler: ["2D dizi, satırlardan oluşan bir dizidir; her satır 1D dizidir.", "new int[satır][sütun] ile kurulur; küme parantezli listeyle değerlerle de başlatılır.", "Varsayılanlar: int 0, double 0.0, boolean false, nesneler null.", "a.length satır sayısı, a[0].length sütun sayısıdır.", "Hücre a[satır][sütun]; indeksler 0'dan başlar, son indeks length - 1.", "Sınır dışı indeks çalışırken *ArrayIndexOutOfBoundsException* verir.", "a[r] bir satırı gösterir; ona atanan ad aynı satırın ikinci adıdır."]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Kod çalışınca ekrana ne yazdırılır?",
      fig: {
        type: "code",
        code: `int[][] m = new int[2][3];
m[1][2] = 5;
m[0][1] = m[1][2] + 1;
System.out.println(m[0][1] + " " + m[1][1] + " " + m.length + " " + m[0].length);`
      },
      opts: ["6 5 3 2", "6 0 2 3", "5 0 2 3", "6 0 3 2"],
      a: 1,
      why: "new int[2][3] 2 satır, 3 sütun demektir ve hücreler 0 başlar. m[0][1] = 5 + 1 = 6, m[1][1] hiç dokunulmadı: 0. m.length = 2 (satır), m[0].length = 3 (sütun). Satır-sütun sırasını ters alan 3 2 seçeneğine gider."
    },
    {
      q: "5 satır ve 2 sütunlu bir tamsayı tablosu hangi ifadeyle kurulur?",
      opts: ["int[][] t = new int[2][5];", "int t[5][2];", "int[][] t = new int[5, 2];", "int[][] t = new int[5][2];"],
      a: 3,
      why: "İlk köşeli parantez satır, ikincisi sütun sayısıdır: new int[5][2]. İlk seçenek 2 satır ve 5 sütun kurar; ikinci ve üçüncü Java'da geçerli söz dizimi değildir."
    },
    {
      q: "Kod parçasında tanımlanan z için hangi ifadenin değeri 12'dir?",
      fig: { type: "code", code: "int[][] z = { {2, 4}, {6, 8}, {10, 12} };" },
      opts: ["z[3][2]", "z[1][2]", "z[2][1]", "z[2][2]"],
      a: 2,
      why: "z'nin 3 satırı var (0, 1, 2) ve her satır 2 elemanlı (sütun 0 ve 1). 12, 2. satırın 1. sütunundadır: z[2][1]. z[3][2] ve z[1][2] sınır dışıdır; z[2][2] de 2. sütun olmadığı için hata verir."
    },
    {
      q: "Kod çalıştırılırsa program hangi satırda ArrayIndexOutOfBoundsException ile durur?",
      fig: {
        type: "code",
        code: `int[][] t = new int[3][4];
t[2][3] = 1;
t[0][4] = 2;
t[3][0] = 3;`
      },
      opts: ["t[0][4] = 2; satırında", "t[2][3] = 1; satırında", "t[3][0] = 3; satırında", "Üç satır da aynı anda hata verir"],
      a: 0,
      why: "t[2][3] son satırın son hücresidir ve geçerlidir. t[0][4]'te sütun indeksi 4 geçersizdir (0–3), program burada durur. t[3][0] da geçersiz olurdu ama o satıra hiç gelinmez."
    },
    {
      q: "Kod çalışınca ekrana ne yazdırılır?",
      fig: {
        type: "code",
        code: `int[][] b = { {1, 2}, {3, 4} };
int[] r = b[0];
r[1] = 9;
b[1][0] = r[1] + b[0][0];
System.out.println(b[0][1] + " " + b[1][0]);`
      },
      opts: ["2 10", "9 10", "9 4", "2 4"],
      a: 1,
      why: "r, b[0] satırının kendisidir (kopya değil). r[1] = 9 yapınca b[0][1] de 9 olur. b[1][0] = 9 + b[0][0] = 9 + 1 = 10. Yazdırılan 9 ve 10. r'yi kopya sanan 2 ile başlayan seçeneklere gider."
    }
  ]
};
