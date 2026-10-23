/* Kitpath not defteri · st404 · 4.5 Koşullu Olasılık
   Kitsiz ünite: içerik College Board CED'in Unit 4 (VAR-4) hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st404",
  amac: "Bu konu \"şunu biliyorsak\" ile başlayan olasılıkları anlatıyor: *conditional probability*. Bilgi gelince örnek uzayın nasıl küçüldüğünü, iki yönlü tablodan ve ağaç diyagramından koşullu olasılığı nasıl bulacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "\"Verilmişse\" ne demek?",
      kisa: "P(B | A): A'nın gerçekleştiği biliniyorsa B'nin olasılığı.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "❓", terim: "Conditional probability", tr: "koşullu olasılık", tanim: "A'nın gerçekleştiği ==bilindiğinde== B'nin olasılığı; P(B | A) diye yazılır, \"A verilmişken B\" diye okunur.", ornek: "Sporda olduğu bilinen birinin müzikte de olma olasılığı." },
            { ikon: "🤝", terim: "Joint probability", tr: "ortak olasılık", tanim: "İki olayın birlikte gerçekleşme olasılığı: P(A ve B).", ornek: "Hem spor hem müzik kulübüne üye olma olasılığı." }
          ] },
        { tip: "tablo", baslik: "200 öğrenci: spor ve müzik kulübü", head: ["", "Müzik ✓", "Müzik ✗", "Toplam"], rows: [
            ["Spor ✓", "30", "60", "90"],
            ["Spor ✗", "30", "80", "110"],
            ["Toplam", "60", "140", "200"]
          ], not: "\"Verilmiş\" bilgisi hangi satıra ya da sütuna bakacağını söyler." },
        { tip: "ornek", baslik: "İki yönde iki farklı soru", durum: "Aynı tabloda iki koşullu olasılık bul: P(müzik | spor) ve P(spor | müzik).",
          adimlar: ["\"Spor verilmiş\": yalnızca spor satırına bak. Bu satırda 90 öğrenci, 30'u müzikte. P(müzik | spor) = 30/90 = 1/3 ≈ 0,333.", "\"Müzik verilmiş\": yalnızca müzik sütununa bak. Bu sütunda 60 öğrenci, 30'u sporda. P(spor | müzik) = 30/60 = 1/2 = 0,5."],
          sonuc: "P(müzik | spor) = 1/3 ≈ 0,333; P(spor | müzik) = 0,5. İkisi farklı: ==payda, verilen olayın toplamıdır==." }
      ]
    },
    {
      baslik: "Örnek uzay küçülür",
      kisa: "Bilgi gelince payda tüm sayıdan çıkıp verilen grubun sayısı olur.",
      bloklar: [
        { tip: "grafik", baslik: "Payda küçülüyor", xlabel: "Öğrenci sayısı", ylabel: "", xmax: 200, ymax: 10,
          xticks: [{ v: 0, label: "0" }, { v: 30, label: "30" }, { v: 90, label: "90" }, { v: 200, label: "200" }],
          ogeler: [
            { id: "tum", tip: "alan", renk: 3, noktalar: [[0, 6], [0, 8], [200, 8], [200, 6]], gizli: true },
            { id: "yt", tip: "yazi", x: 100, y: 9.2, metin: "Bütün öğrenciler: 200", gizli: true },
            { id: "s1", tip: "alan", renk: 0, noktalar: [[0, 6], [0, 8], [90, 8], [90, 6]], gizli: true },
            { id: "ys1", tip: "yazi", x: 45, y: 5.2, metin: "Spor ✓: 90", gizli: true },
            { id: "s2", tip: "alan", renk: 0, noktalar: [[0, 2], [0, 4], [90, 4], [90, 2]], gizli: true },
            { id: "yg", tip: "yazi", x: 145, y: 3, metin: "Yeni örnek uzay: 90 kişi", gizli: true },
            { id: "m2", tip: "alan", renk: 1, noktalar: [[0, 2], [0, 4], [30, 4], [30, 2]], gizli: true },
            { id: "ym", tip: "yazi", x: 30, y: 0.8, metin: "Müzik ✓: 30 → 30/90 = 1/3", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıçta örnek uzay 200 öğrencinin hepsi: payda 200.", goster: ["tum", "yt"] },
            { metin: "\"Spor kulübünde olduğu biliniyor.\" Yalnızca 90 öğrenci ilgilendiriyor.", goster: ["s1", "ys1"] },
            { metin: "Örnek uzay küçüldü: yeni payda ==90==, 200 değil.", goster: ["s2", "yg"] },
            { metin: "Bu 90 kişinin 30'u müzikte: P(müzik | spor) = 30/90 = 1/3 ≈ ==0,333==.", goster: ["m2", "ym"] }
          ] },
        { tip: "ornek", baslik: "Spor kulübünde olmayanlar", durum: "Spor kulübüne üye olmayan bir öğrenci seçildiği biliniyor. Bu öğrencinin müzik kulübünde olma olasılığı nedir?",
          adimlar: ["Verilen: spor ✗. Örnek uzay yalnızca bu satır: 110 öğrenci.", "Bu satırda müzik ✓ olanlar 30 kişi.", "P(müzik | spor değil) = 30/110 = 3/11 ≈ 0,273."],
          sonuc: "P(müzik | spor ✗) = 3/11 ≈ ==0,273==. Genel müzik oranı 60/200 = 0,30'dan biraz düşük." }
      ]
    },
    {
      baslik: "Formül ve çarpma kuralı",
      kisa: "P(B | A) = P(A ve B) / P(A); çarpma kuralı bunun tersidir.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "P(B | A)", alt: "A verilmişken B" }, "=", { t: "P(A ve B)", alt: "ortak olasılık" }, "÷", { t: "P(A)", alt: "verilen olay" }], aciklama: "Tablodaki örnek: P(spor ve müzik) = 30/200 = 0,15 ve P(spor) = 90/200 = 0,45. Böylece P(müzik | spor) = 0,15 ÷ 0,45 = 1/3 ≈ 0,333. Sayımla aynı sonuç." },
        { tip: "formul", parcalar: [{ t: "P(A ve B)", alt: "ikisi birlikte" }, "=", { t: "P(A)", alt: "önce A" }, "×", { t: "P(B | A)", alt: "A olduktan sonra B" }], aciklama: "*Multiplication rule*: iki olayın birlikte olma olasılığını bulmak için ikinci olasılığı birincinin ==ardından== hesapla." },
        { tip: "ornek", baslik: "İadesiz iki bilye çekmek", durum: "Torbada 5 kırmızı ve 3 mavi bilye var (toplam 8). Rastgele iki bilye art arda, geri koymadan çekiliyor. İlk ikisinin de kırmızı olma olasılığı nedir?",
          adimlar: ["İlk bilye kırmızı: P(K₁) = 5/8.", "İlk çekim kırmızıysa torbada 4 kırmızı, 3 mavi, toplam 7 bilye kalır: P(K₂ | K₁) = 4/7.", "Çarpma kuralı: P(K₁ ve K₂) = 5/8 × 4/7 = 20/56 = 5/14 ≈ 0,357."],
          sonuc: "P(ikisi de kırmızı) = 5/14 ≈ ==0,357==. İkinci olasılık ilk çekime bağlı, çünkü bilye geri konmuyor." }
      ]
    },
    {
      baslik: "Ağaç diyagramı",
      kisa: "Dal olasılıkları çarpılarak yol olasılıkları bulunur; dört yolun toplamı 1'dir.",
      bloklar: [
        { tip: "harita", merkez: "200 öğrenci", dallar: [
            { baslik: "Spor ✓ · 0,45", alt: "Müzik ✓: 1/3 → 0,15 · Müzik ✗: 2/3 → 0,30" },
            { baslik: "Spor ✗ · 0,55", alt: "Müzik ✓: 3/11 → 0,15 · Müzik ✗: 8/11 → 0,40" }
          ] },
        { tip: "tablo", baslik: "Ağacın dört yolu", head: ["Yol", "Dalları çarp", "Olasılık"], rows: [
            ["Spor ✓ → Müzik ✓", "0,45 × 1/3", "0,15"],
            ["Spor ✓ → Müzik ✗", "0,45 × 2/3", "0,30"],
            ["Spor ✗ → Müzik ✓", "0,55 × 3/11", "0,15"],
            ["Spor ✗ → Müzik ✗", "0,55 × 8/11", "0,40"],
            ["Toplam", "", "1,00"]
          ], vurgu: 4, not: "Birinci dal olasılığı, ikinci dal ise koşullu olasılıktır: ikinci dal \"birinci dal verilmişken\" okunur." },
        { tip: "ornek", baslik: "Ağaçtan geriye doğru: müzikte olan kim?", durum: "Seçilen öğrencinin müzik kulübünde olduğu biliniyor. Aynı öğrencinin spor kulübünde olma olasılığı nedir?",
          adimlar: ["Müzik ✓ olan iki yol var: spor ✓ → müzik ✓ (0,15) ve spor ✗ → müzik ✓ (0,15).", "P(müzik) = 0,15 + 0,15 = 0,30.", "P(spor | müzik) = P(spor ve müzik) ÷ P(müzik) = 0,15 ÷ 0,30 = 0,5."],
          sonuc: "P(spor | müzik) = ==0,5==; tablodaki 30/60 ile aynı. Ağaç ters yönde de çalışır: önce yolları topla, sonra böl." }
      ]
    },
    {
      baslik: "P(A | B) ile P(B | A) aynı değildir",
      kisa: "Hangisinin \"verilen\" olduğuna bak: payda her zaman verilen olaydır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏅", baslik: "P(müzik | spor) = 1/3", maddeler: ["Spor kulübü üyeleri bilinir", "Payda: 90 spor üyesi", "Pay: bunlardan müzikteki 30"] },
          sag: { ikon: "🎵", baslik: "P(spor | müzik) = 1/2", maddeler: ["Müzik kulübü üyeleri bilinir", "Payda: 60 müzik üyesi", "Pay: bunlardan sporda olan 30"] },
          oyun: [
            { metin: "Spor kulübü üyelerinin kaçta kaçı müzik kulübüne de üye?", cevap: "sol", neden: "Verilen spor; payda 90." },
            { metin: "Müzik kulübü üyelerinin kaçta kaçı spor kulübüne de üye?", cevap: "sag", neden: "Verilen müzik; payda 60." },
            { metin: "Sporda olduğu bilinen bir öğrencinin müzikte olma olasılığı.", cevap: "sol", neden: "\"Sporda olduğu bilinen\" verilen olaydır: P(müzik | spor)." },
            { metin: "Müzikte olduğu bilinen bir öğrencinin sporda olma olasılığı.", cevap: "sag", neden: "\"Müzikte olduğu bilinen\" verilen olaydır: P(spor | müzik)." }
          ] },
        { tip: "tuzak", baslik: "Yanlış payda", metin: "P(müzik | spor) = 30/200 = 0,15 yazmak, \"spor verilmiş\" ifadesini yok sayıp bütün öğrencilere bölmek demektir. Bu 0,15 aslında P(spor ve müzik).", yanlis: "P(müzik | spor) = 30/200 = 0,15.", dogru: "Verilen olayın toplamına böl: P(müzik | spor) = 30/90 = ==1/3 ≈ 0,333==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Conditional probability* P(B | A): A'nın gerçekleştiği bilindiğinde B'nin olasılığı.",
            "Bilgi gelince örnek uzay küçülür; payda verilen grubun sayısıdır (90, 60, 110 gibi).",
            "Formül: P(B | A) = P(A ve B) ÷ P(A).",
            "*Multiplication rule*: P(A ve B) = P(A) × P(B | A).",
            "Geri koymadan çekimde ikinci olasılık birincinin sonucuna bağlıdır (5/8 × 4/7 = 5/14 ≈ 0,357).",
            "Ağaç diyagramında dalları çarparak yol olasılığı bulursun; bütün yolların toplamı 1'dir.",
            "Bir sonucu veren birden fazla yol varsa önce yolları topla, sonra böl (0,15 ÷ 0,30 = 0,5).",
            "P(A | B) ≠ P(B | A) olabilir: 30/90 ve 30/60. Payda verilen olaydır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tablo 200 öğrencinin spor ve müzik kulübü üyeliğini gösteriyor. Spor kulübüne üye olmadığı bilinen bir öğrencinin müzik kulübüne üye olma olasılığı nedir?",
      fig: { type: "table", caption: "Kulüp üyeliği", head: ["", "Müzik ✓", "Müzik ✗", "Toplam"], rows: [["Spor ✓", "30", "60", "90"], ["Spor ✗", "30", "80", "110"], ["Toplam", "60", "140", "200"]] },
      opts: ["30/200 = 0,15", "60/200 = 0,30", "30/110 ≈ 0,273", "30/60 = 0,50"],
      a: 2,
      why: "Spor ✗ verilmiş: yalnızca 110 kişilik satıra bak; 30'u müzikte. P = 30/110 = 3/11 ≈ 0,273. D en çekici yanlış şık: 30/60, koşulu müzik alan P(spor | müzik) değeridir; burada koşul spor ✗." },
    { q: "A ve B olayları için P(A) = 0,50 ve P(A ve B) = 0,20. P(B | A) nedir?",
      opts: ["0,40", "0,10", "0,70", "0,20"],
      a: 0,
      why: "P(B | A) = P(A ve B) ÷ P(A) = 0,20 ÷ 0,50 = 0,40. B şıkkı 0,50 × 0,20 = 0,10 çarpımıdır; formülde bölme var, çarpma yok." },
    { q: "Selin'in yarın okula servisle gitme olasılığı 0,60. Servisle giderse okul çıkışı arkadaşına uğrama olasılığı 0,25. Servisle gidip arkadaşına uğrama olasılığı nedir?",
      opts: ["0,85", "0,25", "0,60", "0,15"],
      a: 3,
      why: "Çarpma kuralı: P(servis ve uğrama) = 0,60 × 0,25 = 0,15. B en çekici yanlış şık: koşullu olasılığın kendisi 0,25'tir, ortak olasılık değil." },
    { q: "Torbada 4 kırmızı ve 6 mavi bilye (toplam 10) var. İki bilye geri koymadan art arda çekiliyor. İkisinin de kırmızı olma olasılığı nedir?",
      opts: ["4/10 × 4/10 = 0,16", "4/10 × 3/9 ≈ 0,133", "3/9 ≈ 0,333", "4/10 + 3/9 ≈ 0,733"],
      a: 1,
      why: "P(K₁) = 4/10, ardından torbada 3 kırmızı, 9 bilye kalır: P(K₂ | K₁) = 3/9. Çarpım = 12/90 = 2/15 ≈ 0,133. A en çekici yanlış şık: bilye geri konmuş gibi aynı olasılığı iki kez kullanır." },
    { q: "Tablo bir okuldaki kulüp üyeliğini gösteriyor. P(spor | müzik) = 0,5 ifadesi ne anlama gelir?",
      fig: { type: "table", caption: "Kulüp üyeliği", head: ["", "Müzik ✓", "Müzik ✗", "Toplam"], rows: [["Spor ✓", "30", "60", "90"], ["Spor ✗", "30", "80", "110"], ["Toplam", "60", "140", "200"]] },
      opts: ["Öğrencilerin yarısı müzik kulübünde", "Spor kulübü üyelerinin yarısı müzik kulübünde", "Müzik kulübü üyelerinin yarısı aynı zamanda spor kulübünde", "Rastgele bir öğrencinin iki kulübe birden üye olma olasılığı 0,5"],
      a: 2,
      why: "Müzik verilmiş: 60 müzik üyesinin 30'u sporda, 30/60 = 0,5. B en çekici yanlış şık: spor üyelerinin müzik oranı 30/90 = 1/3'tür, yönü ters." }
  ]
};
