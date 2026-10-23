/* Kitpath not defteri · mc404 · 4.4 Bankacılık ve Para Arzının Genişlemesi
   Kaynak: AP Macroeconomics CED, Topic 4.4 (POL-2.A). Blok türleri: /ap/_kit/defter.js başı.
   Para yaratma zinciri: 1.000 TL nakit mevduat, zorunlu karşılık oranı %20; toplam mevduat 1.000 ÷ 0,20 = 5.000 TL'ye yaklaşır.
   Grafikte 1 birim = 1.000 TL (dikey) ve 1 tur (yatay). Toplam mevduat: 1; 1,8; 2,44; 2,952; 3,3616; 3,689; … */
window.DEFTER = {
  slug: "mc404",
  amac: "Bu konu bankaların parayı nasıl yarattığını anlatıyor. Banka bilançosunu, kesirli rezerv sistemini, zorunlu ve fazla rezervi, para çarpanını ve bir mevduattan en fazla ne kadar para doğabileceğini hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Banka bilançosu: varlık ve yükümlülük",
      kisa: "Banka için kredi bir varlıktır, mevduat ise müşteriye olan borcudur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📒", terim: "Balance sheet", tr: "bilanço", tanim: "Bankanın varlıklarını ve yükümlülüklerini yan yana gösteren tablo. İki taraf hep eşittir (T-hesabı, *T-account*).", ornek: "Varlıklar = yükümlülükler + özsermaye (*net worth*)." },
            { ikon: "💼", terim: "Assets", tr: "varlıklar", tanim: "Bankanın sahip olduğu ya da kendisine borçlu olunan şeyler: rezervler, krediler, menkul kıymetler.", ornek: "Öğrenciye verdiği 800 TL kredi." },
            { ikon: "📮", terim: "Liabilities", tr: "yükümlülükler", tanim: "Bankanın başkalarına borcu. En önemlisi müşterilerin vadesiz mevduatıdır.", ornek: "Selin'in hesabındaki 1.000 TL." },
            { ikon: "🔐", terim: "Reserves", tr: "rezervler", tanim: "Bankanın kredi vermeyip tuttuğu para: kasadaki nakit ve Merkez Bankası'ndaki hesabı.", ornek: "1.000 TL mevduatın 200 TL'si kasada bekler." }
          ] },
        { tip: "tablo", baslik: "Bir bankanın bilançosu (*T-account*)", head: ["Varlıklar (*assets*)", "Yükümlülükler (*liabilities*)"], rows: [
            ["Rezervler", "Vadesiz mevduat"],
            ["Krediler (*loans*)", "Özsermaye (*net worth*)"],
            ["Menkul kıymetler (*securities*)", "—"]
          ], not: "Soruların çoğunda özsermaye sıfır alınır; o zaman toplam varlık, mevduata eşit olur." },
        { tip: "tuzak", baslik: "Mevduat varlık mıdır?", metin: "Müşteri için mevduat varlıktır; banka içinse müşteriye geri ödemesi gereken bir borçtur.", yanlis: "Bankanın bilançosunda mevduat varlıklar tarafındadır.", dogru: "Mevduat ==yükümlülüktür== (banka müşteriye borçludur). Kredi ise müşterinin bankaya borcudur: ==varlık==." }
      ]
    },
    {
      baslik: "Kesirli rezerv: zorunlu ve fazla rezerv",
      kisa: "Banka mevduatın yalnızca bir kesrini rezervde tutar, gerisini kredi verebilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🍰", terim: "Fractional reserve banking", tr: "kesirli rezerv sistemi", tanim: "Bankanın mevduatın yalnızca bir kesrini rezervde tutup gerisini kredi olarak verebilmesi.", ornek: "100 TL mevduatın 20 TL'si rezervde, 80 TL'si kredide." },
            { ikon: "📌", terim: "Required reserves", tr: "zorunlu rezerv", tanim: "Merkez Bankası'nın belirlediği zorunlu karşılık oranı (*required reserve ratio*, rr) kadar tutulmak zorunda olan rezerv: mevduat × rr.", ornek: "1.000 TL mevduat, rr %20: zorunlu rezerv 200 TL." },
            { ikon: "🎈", terim: "Excess reserves", tr: "fazla rezerv", tanim: "Zorunlu rezervin üstündeki rezerv. Kredi vermenin ve para yaratmanın dayanağıdır.", ornek: "Rezerv 1.000, zorunlu 200: fazla rezerv 800." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Fazla rezerv", alt: "excess reserves" }, "=",
            { t: "Toplam rezerv" }, "−",
            { t: "Zorunlu rezerv", alt: "mevduat × rr" }
          ], aciklama: "Banka yalnızca fazla rezervini kredi olarak verebilir; zorunlu rezervi yerinde tutmak zorundadır." }
      ]
    },
    {
      baslik: "Bir mevduat gelince banka ne yapar?",
      kisa: "Banka yalnızca fazla rezervini kredi verir; zorunlu rezervi tutmak zorundadır.",
      bloklar: [
        { tip: "ornek", baslik: "Selin 1.000 TL yatırır (rr = %20)", durum: "Selin kumbarasındaki 1.000 TL nakdi A Bankası'na vadesiz hesap olarak yatırır. Zorunlu karşılık oranı %20. A Bankası en fazla ne kadar kredi verebilir?",
          adimlar: ["Mevduat 1.000 TL oldu; bankanın rezervi de 1.000 TL arttı.", "Zorunlu rezerv = 1.000 × 0,20 = 200 TL.", "Fazla rezerv = 1.000 − 200 = 800 TL.", "Banka 800 TL kredi verirse ve kredi alan parayı harcarsa rezerv 200'e düşer; krediler 800 olur."],
          sonuc: "==En fazla 800 TL kredi.== Bilançoda rezerv 200 + krediler 800 = 1.000, yani mevduata eşit." },
        { tip: "tablo", baslik: "A Bankası'nın bilançosu iki aşamada", head: ["Aşama", "Varlıklar", "Yükümlülükler"], rows: [
            ["① Mevduat gelir", "Rezerv 1.000", "Vadesiz mevduat 1.000"],
            ["② 800 TL kredi verilir ve harcanır", "Rezerv 200 + Krediler 800", "Vadesiz mevduat 1.000"]
          ], vurgu: 1, not: "İki aşamada da iki taraf eşit. Para bankadan çıkıp başka bir bankaya mevduat olarak girer; zincir orada devam eder." }
      ]
    },
    {
      baslik: "Para yaratma zinciri",
      kisa: "Her kredi başka bir bankada yeni mevduata dönüşür; toplam para büyür.",
      bloklar: [
        { tip: "grafik", baslik: "Toplam mevduat (TL) tur tur büyür ve 5.000 TL'ye yaklaşır", xlabel: "Tur", ylabel: "", xmax: 11, ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 10, label: "10" }],
          yticks: [{ v: 1, label: "1.000" }, { v: 3, label: "3.000" }, { v: 5, label: "5.000" }],
          ogeler: [
            { id: "lim", tip: "cizgi", renk: 2, kesik: true, from: [0, 5], to: [10.5, 5], etiket: "", gizli: true },
            { id: "lt", tip: "yazi", x: 5.5, y: 5.4, metin: "Sınır: 5.000 TL", gizli: true },
            { id: "cv", tip: "egri", renk: 0, noktalar: [[0, 0], [1, 1], [2, 1.8], [3, 2.44], [4, 2.952], [5, 3.3616], [6, 3.689], [7, 3.951], [8, 4.161], [9, 4.329], [10, 4.463]], etiket: "Toplam", gizli: true },
            { id: "n1", tip: "nokta", renk: 1, x: 1, y: 1, etiket: "", gizli: true },
            { id: "l1", tip: "yazi", x: 1.9, y: 0.45, metin: "1.000", gizli: true },
            { id: "n2", tip: "nokta", renk: 1, x: 2, y: 1.8, etiket: "", gizli: true },
            { id: "l2", tip: "yazi", x: 2.9, y: 1.25, metin: "1.800", gizli: true },
            { id: "n3", tip: "nokta", renk: 1, x: 3, y: 2.44, etiket: "", gizli: true },
            { id: "l3", tip: "yazi", x: 3.9, y: 1.9, metin: "2.440", gizli: true },
            { id: "n4", tip: "nokta", renk: 1, x: 4, y: 2.952, etiket: "", gizli: true },
            { id: "n5", tip: "nokta", renk: 1, x: 5, y: 3.3616, etiket: "", gizli: true },
            { id: "n6", tip: "nokta", renk: 1, x: 6, y: 3.689, etiket: "", gizli: true }
          ],
          durumlar: [
            { metin: "**1. tur:** Selin 1.000 TL nakdi A Bankası'na yatırır. Toplam mevduat 1.000 TL; zorunlu karşılık oranı %20. Grafikte 1 birim = 1.000 TL.", goster: ["n1", "l1"] },
            { metin: "**2. tur:** A Bankası 200 TL ayırır, 800 TL kredi verir. Kredi alan harcar, para B Bankası'na mevduat olur. Toplam **1.800 TL**.", goster: ["n2", "l2"] },
            { metin: "**3. tur:** B Bankası 160 TL ayırır, 640 TL kredi verir. Toplam **2.440 TL**.", goster: ["n3", "l3"] },
            { metin: "Zincir sürer: 4. turda 2.952, 5. turda 3.362, 6. turda 3.689 TL.", goster: ["n4", "n5", "n6"] },
            { metin: "Her tur öncekinin %80'i kadar yeni mevduat ekler: toplam artar ama yavaşlar, bir üst sınıra yaklaşır.", goster: ["cv", "lim", "lt"] },
            { metin: "Sınır = ilk mevduat × 1 ÷ rr = 1.000 × 5 = **5.000 TL** toplam mevduat. Bunun 4.000 TL'si zincirle yaratılan yeni paradır." }
          ] },
        { tip: "tablo", baslik: "İlk turlar ve toplam (rr = %20)", head: ["Tur", "Yeni mevduat", "Zorunlu rezerv", "Yeni kredi"], rows: [
            ["1", "1.000", "200", "800"],
            ["2", "800", "160", "640"],
            ["3", "640", "128", "512"],
            ["4", "512", "102,4", "409,6"],
            ["…", "…", "…", "…"],
            ["**Toplam**", "**5.000**", "**1.000**", "**4.000**"]
          ], vurgu: 5, not: "Sonunda zorunlu rezervlerin toplamı ilk mevduata (1.000 TL) eşit olur: ilk yatırılan paranın hepsi rezerve dönüşmüştür." }
      ]
    },
    {
      baslik: "Para çarpanı ve en fazla para yaratımı",
      kisa: "Basit çarpan zorunlu karşılık oranının tersidir: çarpan = 1 ÷ rr.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Maksimum para çarpanı", alt: "money multiplier" }, "=",
            { t: "1 ÷ rr", alt: "zorunlu karşılık oranının tersi" }
          ], aciklama: "CED'e göre para çarpanı, para arzının para tabanına oranıdır (para arzı ÷ para tabanı). Yalnızca zorunlu rezerv tutulursa ve halk nakit tutmazsa üst sınıra, 1 ÷ rr'ye ulaşır. En fazla para yaratımı = fazla rezerv × çarpan." },
        { tip: "tablo", baslik: "Zorunlu karşılık oranı küçüldükçe çarpan büyür", head: ["Zorunlu karşılık (rr)", "Maks. çarpan (1 ÷ rr)", "Fazla rezerv 800 ise yeni para"], rows: [
            ["%10", "10", "8.000"],
            ["%20", "5", "4.000"],
            ["%25", "4", "3.200"],
            ["%50", "2", "1.600"],
            ["%100", "1", "800"]
          ], not: "%100 rezerv tutan bir bankanın hiç kredi veremeyeceğine dikkat et: çarpan 1, yani para yaratımı yok." },
        { tip: "ornek", baslik: "Merkez Bankası 1.000 TL rezerv ekliyor", durum: "Merkez Bankası bankalara 1.000 TL yeni rezerv ekledi. Sistemde başka fazla rezerv yok ve zorunlu karşılık oranı %25. Para arzı en fazla ne kadar artabilir?",
          adimlar: ["Yeni rezervin hepsi fazla rezervdir: 1.000 TL.", "Çarpan = 1 ÷ 0,25 = 4.", "En fazla para yaratımı = 1.000 × 4 = 4.000 TL."],
          sonuc: "==En fazla 4.000 TL== para arzı artışı: para tabanı 1.000 arttı, para arzı en fazla 4.000 arttı." },
        { tip: "tuzak", baslik: "Yeni para toplam mevduat değildir", metin: "Selin'in 1.000 TL nakdini yatırması toplam mevduatı 5.000 TL yapar, ama bu paranın 1.000 TL'si zaten nakit olarak dolaşımdaydı.", yanlis: "Nakit yatırılsa bile para arzı 1.000 × 5 = 5.000 TL artar.", dogru: "Soru fazla rezervi (800 TL) verdiyse 800 × 5 = 4.000 TL yeni para. Taze rezerv Merkez Bankası'ndan geldiyse hepsi fazladır: 1.000 × 5 = 5.000 TL." }
      ]
    },
    {
      baslik: "Basit çarpan neden en fazlayı verir?",
      kisa: "Fazla rezerv tutan bankalar ve nakit tutan halk gerçek çarpanı küçültür.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📉", baslik: "Çarpanı küçültür", maddeler: ["Fazla rezerv ya da nakit tutmak zinciri kısaltır", "Zorunlu karşılık oranı yükselirse 1 ÷ rr küçülür", "Daha az mevduat, daha az kredi"] },
          sag: { ikon: "📈", baslik: "Çarpanı büyütür", maddeler: ["Zorunlu karşılık oranı düşerse 1 ÷ rr büyür", "Her turda daha çok kredi, daha çok yeni mevduat", "Örnek: rr %20'den %10'a inerse çarpan 5'ten 10'a çıkar"] },
          oyun: [
            { metin: "Banka, kredi vermek yerine fazla rezerv tutuyor.", cevap: "sol", neden: "Kredi azalır, zincir kısalır." },
            { metin: "Halk, parayı bankaya yatırmak yerine cebinde tutuyor.", cevap: "sol", neden: "Nakit zincire girmez; mevduat azalır." },
            { metin: "Zorunlu karşılık oranı %20'den %10'a iniyor.", cevap: "sag", neden: "1 ÷ rr: 5'ten 10'a çıkar." },
            { metin: "Zorunlu karşılık oranı %10'dan %25'e çıkıyor.", cevap: "sol", neden: "1 ÷ rr: 10'dan 4'e düşer." }
          ] },
        { tip: "ornek", baslik: "Basit çarpan 5, gerçek çarpan 2,5", durum: "Bir ülkede para tabanı 400 milyar TL (nakit 200 + rezerv 200), M1 = 1.000 milyar TL (nakit 200 + vadesiz mevduat 800). Zorunlu karşılık oranı %20. Basit çarpanla gerçek çarpanı karşılaştır.",
          adimlar: ["Basit (maksimum) çarpan = 1 ÷ 0,20 = 5.", "Gerçek çarpan = M1 ÷ para tabanı = 1.000 ÷ 400 = 2,5.", "Fark: halk 200 milyar nakit tutuyor (bankaya girmiyor) ve bankalar 800 mevduatın %20'si olan 160 yerine 200 rezerv tutuyor (40 fazla rezerv)."],
          sonuc: "==Basit çarpan 5 olsa da gerçek çarpan 2,5.== 1 ÷ rr yalnızca ==üst sınırı== verir; sınavda \"en fazla\" diyorsa onu kullan." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Banka bilançosunda varlıklar = yükümlülükler (+ özsermaye): rezerv, kredi, menkul kıymet bir yanda; mevduat öbür yanda.",
            "Mevduat bankanın yükümlülüğüdür, kredi varlığıdır.",
            "*Fractional reserve banking*: banka mevduatın yalnızca bir kesrini rezervde tutar. Zorunlu rezerv = mevduat × rr; fazla rezerv = toplam rezerv − zorunlu rezerv.",
            "Banka yalnızca fazla rezervini kredi verebilir; krediler yeni mevduat yaratır ve zincir para arzını büyütür.",
            "Basit para çarpanı = 1 ÷ rr (maksimum). CED'in tanımıyla çarpan = para arzı ÷ para tabanı.",
            "En fazla yeni para = fazla rezerv × 1 ÷ rr. Örnek: 800 × 5 = 4.000; Merkez Bankası'ndan gelen 1.000 TL taze rezerv için rr %25 ise 1.000 × 4 = 4.000.",
            "Zorunlu karşılık oranı düşerse çarpan büyür, yükselirse küçülür.",
            "Gerçek çarpan basit çarpandan küçüktür: bankalar fazla rezerv tutar, halk nakit tutar."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Tablodaki bankanın zorunlu karşılık oranı %20'dir. Bu banka hemen en fazla ne kadar yeni kredi verebilir?",
      fig: { type: "table", head: ["Varlıklar", "TL", "Yükümlülükler", "TL"], rows: [["Rezervler", "300", "Vadesiz mevduat", "1.000"], ["Krediler", "700", "—", "—"]] },
      opts: ["100 TL", "200 TL", "300 TL", "700 TL"],
      a: 0,
      why: "Zorunlu rezerv = 1.000 × 0,20 = 200 TL; rezerv 300 olduğundan fazla rezerv 300 − 200 = 100 TL'dir ve kredi olarak yalnızca o verilebilir. 300 TL'nin hepsini vermek en çekici yanlıştır: bu, zorunlu rezervi de eritir."
    },
    {
      q: "Merkez Bankası bankacılık sistemine 500 TL yeni rezerv ekliyor. Sistemde başka fazla rezerv yok ve zorunlu karşılık oranı %10. Para arzı en fazla ne kadar artabilir?",
      opts: ["500 TL", "1.000 TL", "4.500 TL", "5.000 TL"],
      a: 3,
      why: "Yeni rezervin hepsi fazla rezervdir. Çarpan = 1 ÷ 0,10 = 10; en fazla artış = 500 × 10 = 5.000 TL. 4.500 TL, ilk tutarın düşüldüğü hatalı bir hesaptır; yeni rezerv Merkez Bankası'ndan geldiği için hepsi fazla rezervdir ve çarpana girer."
    },
    {
      q: "Bankalar fazla rezerv biriktirmeye başlıyor ve halk daha çok nakit tutuyor. Bu durum gerçek para çarpanını, basit çarpan 1 ÷ rr ile karşılaştırınca nasıl etkiler?",
      opts: ["Gerçek çarpanı basit çarpandan büyük yapar", "Gerçek çarpan ile basit çarpanı eşitler", "Gerçek çarpanı daha da küçültür; çünkü kredi ve mevduat zinciri kısalır", "Zorunlu karşılık oranını artırır"],
      a: 2,
      why: "Fazla rezerv kredi verilmeyen para, nakit de bankaya girmeyen paradır; ikisi de zinciri kısaltır. Zorunlu karşılık oranını yalnızca Merkez Bankası belirler; bu yüzden D yanlıştır."
    },
    {
      q: "Bir bankanın bilançosunda aşağıdakilerden hangisi yükümlülük (*liability*) olarak yer alır?",
      opts: ["Müşterilere verilen krediler", "Müşterilerin vadesiz mevduatı", "Merkez Bankası'ndaki rezervler", "Bankanın elindeki devlet tahvilleri"],
      a: 1,
      why: "Mevduat, bankanın müşteriye geri ödemesi gereken bir borçtur. Krediler, rezervler ve elindeki tahviller ise bankanın varlıklarıdır; kredi müşterinin bankaya borcudur."
    },
    {
      q: "Merkez Bankası bankalara 1.000 TL yeni rezerv ekliyor; hepsi fazla rezerv. Zorunlu karşılık oranı %20 yerine %10 olsaydı, bu rezervden en fazla yaratılacak para ne olurdu?",
      opts: ["5.000 TL yerine 10.000 TL", "10.000 TL yerine 5.000 TL", "4.000 TL yerine 9.000 TL", "Aynı: 5.000 TL"],
      a: 0,
      why: "En fazla para = fazla rezerv × 1 ÷ rr. rr %20 iken 1.000 × 5 = 5.000; rr %10 iken 1.000 × 10 = 10.000 TL. Oran düşünce çarpan büyür; B yönü ters çevirir, D ise çarpanın rr'den bağımsız olduğunu varsayar."
    }
  ]
};
