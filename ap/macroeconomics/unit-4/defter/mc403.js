/* Kitpath not defteri · mc403 · 4.3 Paranın Tanımı, Ölçümü ve İşlevleri
   Kaynak: AP Macroeconomics CED, Topic 4.3 (MEA-3.C). Blok türleri: /ap/_kit/defter.js başı.
   Not: yardımcı işlevler yalnızca üst üste dizilmiş sütunları (alan) üretir.
   Veri (milyar TL): nakit 200, vadesiz 800, tasarruf 1.000, küçük vadeli 400, bankaların rezervi 200.
   Grafikte 1 birim = 200 milyar TL → MB = 400, M1 = 1.000, M2 = 2.400. */
window.DEFTER = (function () {
  /* sütun parçası: başta sıfır yükseklikte (a'da), durumda b'ye kadar büyür */
  function parca(id, x0, x1, a, renk) { return { id: id, tip: "alan", renk: renk, noktalar: [[x0, a], [x1, a], [x1, a], [x0, a]], gizli: true }; }
  function tam(x0, x1, a, b) { return { noktalar: [[x0, a], [x1, a], [x1, b], [x0, b]] }; }
  function yaz(id, x, a, b, metin) { return { id: id, tip: "yazi", x: x, y: (a + b) / 2 - 0.3, metin: metin, gizli: true }; }
  /* sütunlar: MB [0.3, 3.5], M1 [3.9, 7.1], M2 [7.5, 10.7] */
  var MB0 = 0.3, MB1 = 3.5, M10 = 3.9, M11 = 7.1, M20 = 7.5, M21 = 10.7;
  var cx1 = 1.9, cx2 = 5.5, cx3 = 9.1;

  return {
    slug: "mc403",
    amac: "Bu konu paranın ne olduğunu ve nasıl ölçüldüğünü anlatıyor. Paranın üç işlevini, M1 ve M2'yi, para tabanını (*monetary base*) ve bu ölçütlerin kalemleri toplayarak nasıl hesaplandığını öğreneceksin.",
    bolumler: [
      {
        baslik: "Para: ödeme aracı olarak kabul gören varlık",
        kisa: "Ödeme aracı olarak kabul gören her varlık paradır; değerli olması gerekmez.",
        bloklar: [
          { tip: "hikaye", ikon: "🔄", baslik: "Takas ekonomisinde bir gün",
            metin: "Ece elindeki ders kitabını tosta çevirmek istiyor, ama kantinci kitap değil, tost makinesi arıyor. Takasta iki tarafın birbirinin malını aynı anda istemesi gerekir. Herkesin kabul ettiği bir ödeme aracı bu zinciri keser." },
          { tip: "kavramlar", kartlar: [
              { ikon: "💳", terim: "Money", tr: "para", tanim: "Ödeme aracı olarak kabul gören her varlık.", ornek: "Kantinde banknot da, kartla çekilen vadesiz hesap da ödeme olarak geçer." },
              { ikon: "🔁", terim: "Barter", tr: "takas", tanim: "Malı doğrudan mala çevirmek. Çalışması için iki tarafın birbirinin malını istemesi gerekir.", ornek: "Ders kitabını tost makinesiyle değiştirmek." }
            ] },
          { tip: "ikili", sol: { ikon: "✅", baslik: "Para sayılır", maddeler: ["Ödeme aracı olarak kabul görür", "Örnek: nakit, vadesiz mevduat"] },
            sag: { ikon: "🚫", baslik: "Para sayılmaz", maddeler: ["Ödemede geçmez ya da ödeme sırasında bir borçtur", "Örnek: hisse, tahvil, altın, kredi kartı"] },
            oyun: [
              { metin: "Cebindeki 100 TL'lik banknot.", cevap: "sol", neden: "Her yerde ödeme aracı: nakit." },
              { metin: "Vadesiz hesabındaki 2.000 TL (kartla harcıyorsun).", cevap: "sol", neden: "Harcanabilir mevduat: vadesiz mevduat paradır." },
              { metin: "Kredi kartı: kantinde tostu onunla alıyorsun.", cevap: "sag", neden: "Kart bir borçtur; borç, ödeme sırasında para ile kapanır." },
              { metin: "Elindeki hisse senedi.", cevap: "sag", neden: "Önce satıp nakde çevirmen gerekir." },
              { metin: "Altın takı: değerini korur ama kantinde ödeme olarak geçmez.", cevap: "sag", neden: "Değer saklar, ödeme aracı değildir." }
            ] }
        ]
      },
      {
        baslik: "Paranın üç işlevi",
        kisa: "Para ödeme aracıdır, ölçü birimidir ve değer saklar.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🤝", terim: "Medium of exchange", tr: "değişim (ödeme) aracı", tanim: "Mal ve hizmet alırken ödeme olarak kabul görmesi; takastaki \"aynı şeyi isteme\" sorununu çözer.", ornek: "Tostu parayla alırsın; kantincinin senin kitabını istemesi gerekmez." },
              { ikon: "📏", terim: "Unit of account", tr: "hesap birimi", tanim: "Her şeyin değerini aynı birimle ifade etmeni sağlar.", ornek: "Tost 40 TL, kitap 200 TL: kitabın 5 tost ettiğini hemen görürsün." },
              { ikon: "🏺", terim: "Store of value", tr: "değer saklama aracı", tanim: "Alım gücünü bugünden yarına taşır. Enflasyon yüksekse bu işlev zayıflar.", ornek: "Harçlığını kumbarada tutup bir ay sonra harcamak." }
            ] },
          { tip: "tuzak", baslik: "Değer saklamak yetmez", metin: "Altın, ev ve hisse de değer saklar ama ödeme aracı olarak kabul görmez.", yanlis: "Değer saklayan her varlık paradır.", dogru: "Para olmak için önce ==ödeme aracı== olmak gerekir. Değer saklama, paranın üç işlevinden yalnızca biridir." }
        ]
      },
      {
        baslik: "M1 ve M2: para arzı nasıl ölçülür?",
        kisa: "M1 en likit parayı sayar; M2 buna yakın ikameleri de ekler.",
        bloklar: [
          { tip: "tablo", baslik: "İki para ölçütü (*monetary aggregates*)", head: ["Ölçüt", "İçerdiği kalemler", "Likidite"], rows: [
              ["**M1**", "Halkın elindeki nakit (*currency*) + vadesiz (çek yazılabilir) mevduat (*demand deposits*)", "En likit"],
              ["**M2**", "M1 + tasarruf mevduatı + küçük tutarlı vadeli mevduat + perakende para piyasası fonları", "Biraz daha az likit"]
            ], not: "M2, M1'i içerdiği için her zaman M1'den büyük ya da ona eşittir. Hangi kalemin hangi grupta sayıldığı verilerde değişebilir; sınavda soru kalemleri verir, sen soruya göre topla." },
          { tip: "grafik", baslik: "Para tabanı, M1 ve M2 yan yana (milyar TL)", xlabel: "", ylabel: "", xmax: 11, ymax: 13,
            xticks: [{ v: cx1, label: "MB" }, { v: cx2, label: "M1" }, { v: cx3, label: "M2" }],
            yticks: [{ v: 2, label: "400" }, { v: 4, label: "800" }, { v: 6, label: "1.200" }, { v: 8, label: "1.600" }, { v: 10, label: "2.000" }, { v: 12, label: "2.400" }],
            ogeler: [
              parca("mbC", MB0, MB1, 0, 0), parca("mbR", MB0, MB1, 1, 2),
              parca("m1C", M10, M11, 0, 0), parca("m1D", M10, M11, 1, 1),
              parca("m2C", M20, M21, 0, 0), parca("m2D", M20, M21, 1, 1), parca("m2S", M20, M21, 5, 3), parca("m2T", M20, M21, 10, 3),
              yaz("lmbC", cx1, 0, 1, "Nakit"), yaz("lmbR", cx1, 1, 2, "Rezerv"),
              yaz("lm1C", cx2, 0, 1, "Nakit"), yaz("lm1D", cx2, 1, 5, "Vadesiz"),
              yaz("lm2C", cx3, 0, 1, "Nakit"), yaz("lm2D", cx3, 1, 5, "Vadesiz"), yaz("lm2S", cx3, 5, 10, "Tasarruf"), yaz("lm2T", cx3, 10, 12, "Vadeli"),
              { id: "tMB", tip: "yazi", x: cx1, y: 2.5, metin: "MB = 400", gizli: true },
              { id: "tM1", tip: "yazi", x: cx2, y: 5.5, metin: "M1 = 1.000", gizli: true },
              { id: "tM2", tip: "yazi", x: cx3, y: 12.5, metin: "M2 = 2.400", gizli: true }
            ],
            durumlar: [
              { metin: "**Para tabanı (MB):** halkın elindeki 200 milyar TL nakit + bankaların 200 milyar TL rezervi = **400**. Grafikte 1 birim = 200 milyar TL.",
                set: { mbC: tam(MB0, MB1, 0, 1), mbR: tam(MB0, MB1, 1, 2) }, goster: ["mbC", "mbR", "lmbC", "lmbR", "tMB"] },
              { metin: "**M1:** aynı 200 nakit + 800 vadesiz mevduat = **1.000**. Bankaların rezervi M1'e girmez.",
                set: { m1C: tam(M10, M11, 0, 1), m1D: tam(M10, M11, 1, 5) }, goster: ["m1C", "m1D", "lm1C", "lm1D", "tM1"] },
              { metin: "**M2:** M1 + 1.000 tasarruf mevduatı + 400 küçük vadeli mevduat = **2.400**.",
                set: { m2C: tam(M20, M21, 0, 1), m2D: tam(M20, M21, 1, 5), m2S: tam(M20, M21, 5, 10), m2T: tam(M20, M21, 10, 12) }, goster: ["m2C", "m2D", "m2S", "m2T", "lm2C", "lm2D", "lm2S", "lm2T", "tM2"] },
              { metin: "Sıralama: para tabanı < M1 < M2. Nakit her sütunda var; rezerv yalnızca para tabanında." }
            ] },
          { tip: "tuzak", baslik: "Neyi sayma?", metin: "Para arzı, bankacılık sisteminin dışındakilerin, yani halkın elindeki paradır. Bankaların kasasındaki nakit ve Merkez Bankası'ndaki rezervleri M1'e girmez; kredi kartı limiti de para değildir.", yanlis: "Bankaların rezervleri de M1'e eklenir.", dogru: "M1 = halkın elindeki nakit + vadesiz mevduat. Rezerv yalnızca ==para tabanına== girer." }
        ]
      },
      {
        baslik: "Para tabanı (*monetary base*)",
        kisa: "Para tabanı, dolaşımdaki nakit ile bankaların rezervlerinin toplamıdır.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "🏛️", baslik: "Para tabanı (*MB*, M0)", maddeler: ["Dolaşımdaki nakit + bankaların rezervleri", "Rezerv içindedir", "Merkez Bankası'nın doğrudan belirlediği taban"] },
            sag: { ikon: "💰", baslik: "Para arzı (M1, M2)", maddeler: ["Halkın nakdi + mevduatlar", "Rezerv içinde değildir", "Bankaların kredi vermesiyle büyür (4.4)"] } },
          { tip: "ornek", baslik: "Küçük bir ülkenin parası", durum: "Milyar TL olarak: halkın elindeki nakit 100, vadesiz mevduat 300, tasarruf mevduatı 500, küçük vadeli mevduat 100, bankaların rezervi 80. M1, M2 ve para tabanı nedir?",
            adimlar: ["M1 = nakit + vadesiz mevduat = 100 + 300 = 400.", "M2 = M1 + tasarruf + küçük vadeli = 400 + 500 + 100 = 1.000.", "Para tabanı = nakit + rezerv = 100 + 80 = 180.", "Kontrol: rezerv M1'de ve M2'de yok; nakit hem M1'de hem para tabanında."],
            sonuc: "==M1 = 400, M2 = 1.000, para tabanı = 180 (milyar TL).== Para tabanının her lirası M1'de yaklaşık 2,2 liralık paraya karşılık gelir; bu oran 4.4'te para çarpanı olarak karşımıza çıkacak." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*Money* ödeme aracı olarak kabul gören her varlıktır.",
              "Üç işlev: *medium of exchange* (ödeme aracı), *unit of account* (hesap birimi), *store of value* (değer saklama).",
              "Hisse, tahvil, altın ve kredi kartı para sayılmaz; para olmak için ödeme aracı olmak gerekir.",
              "M1 = halkın nakdi + vadesiz mevduat. M2 = M1 + tasarruf mevduatı + küçük vadeli mevduat + perakende para piyasası fonları.",
              "Para tabanı (*MB*) = dolaşımdaki nakit + bankaların rezervleri.",
              "Rezervler yalnızca para tabanına girer; M1'e ve M2'ye girmez.",
              "Hesapta sorunun verdiği kalemleri tek tek topla; rezervi M1'e ya da M2'ye, mevduatı para tabanına ekleme."
            ] }
        ]
      }
    ],
    sorular: [
      {
        q: "Tablodaki verilere göre M2 ve para tabanı (*monetary base*) kaçtır?",
        fig: { type: "table", head: ["Kalem (milyar TL)", "Tutar"], rows: [["Halkın elindeki nakit", "150"], ["Vadesiz mevduat", "450"], ["Tasarruf mevduatı", "600"], ["Küçük vadeli mevduat", "200"], ["Bankaların rezervi", "120"]] },
        opts: ["M2 = 600; para tabanı = 270", "M2 = 1.400; para tabanı = 270", "M2 = 1.400; para tabanı = 720", "M2 = 1.520; para tabanı = 270"],
        a: 1,
        why: "M2 = 150 + 450 + 600 + 200 = 1.400. Para tabanı = nakit + rezerv = 150 + 120 = 270. A'daki 600 aslında M1'dir; C'de mevduatlar para tabanına eklenmiş; D'de rezerv M2'ye eklenmiştir."
      },
      {
        q: "Hangi durum paranın değer saklama işlevini en doğrudan gösterir?",
        opts: ["Kitabın fiyatının 200 TL olarak yazılması", "Kantinde tostun banknotla ödenmesi", "Harçlığın bir ay sonra harcanmak üzere kumbarada saklanması", "İki arkadaşın oyun kartlarını takas etmesi"],
        a: 2,
        why: "Değer saklama, alım gücünü bugünden gelecekte harcamak üzere taşımaktır. A hesap birimini, B değişim aracını gösterir; D ise paranın olmadığı bir takastır."
      },
      {
        q: "Selin tasarruf hesabındaki 100 TL'yi vadesiz hesabına aktarıyor; başka hiçbir şey değişmiyor. M1 ve M2 ne olur?",
        opts: ["M1 artar, M2 değişmez", "M1 değişmez, M2 artar", "İkisi de artar", "İkisi de değişmez"],
        a: 0,
        why: "100 TL, M1'in dışından içine girer: M1 artar. M2 zaten hem tasarruf hem vadesiz mevduatı içerdiği için toplamı değişmez. En çekici yanlış D'dir: para hesaplar arasında gitti diye hiçbir ölçüt değişmez sanmak."
      },
      {
        q: "Aşağıdakilerden hangisi para tabanına (*monetary base*) girer?",
        opts: ["Halkın vadesiz mevduatları", "Bankaların rezervleri", "Kredi kartı limitleri", "Tasarruf mevduatları"],
        a: 1,
        why: "Para tabanı = dolaşımdaki nakit + bankaların rezervleri. Mevduatlar M1 ve M2'nin parçasıdır; kredi kartı limiti ise para değil, bir kredi imkânıdır."
      },
      {
        q: "Bir öğrenci kantinde tostu kredi kartıyla alıyor. Bu işlem para tanımına nasıl yorumlanır?",
        opts: ["Kredi kartı ödeme aracı olduğundan M1'e girer", "Kredi kartı M2'ye girer, çünkü bir kredidir", "Kredi kartı para tabanını artırır", "Kredi kartı para sayılmaz: bir borçtur ve ödeme sonunda gerçek para (mevduat) ile kapanır"],
        a: 3,
        why: "Kart, bankadan alınan bir kredidir; tost parası borçlanılarak ödenmiş olur ve borç sonunda vadesiz mevduat gibi gerçek parayla kapanır. Bu yüzden kredi kartı M1'e, M2'ye ya da para tabanına girmez."
      }
    ]
  };
})();
