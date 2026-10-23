/* Kitpath not defteri · bf308 · 3.8 Nakit Akış Tablosu
   Kaynak: AP Business with Personal Finance CED, Topic 3.8. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf308",
  amac: "Bu konu nakit akış tablosunu anlatıyor: bir işletmenin kasasına nakdin nereden girip nereye çıktığını ve dönem sonunda ne kadarının kaldığını. Faaliyet, yatırım ve finansman nakit akışlarını, kâr ile nakdin neden farklı olduğunu ve nakit sıkıntısında neler yapılacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Nakit akış tablosu nedir?",
      kisa: "Nakit akış tablosu, bir dönemde nakdin nereden girip nereye çıktığını gösterir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Dönem sonu nakit", alt: "kasada kalan" }, "=",
            { t: "Dönem başı nakit", alt: "önceki bakiye" }, "+",
            { t: "Nakit girişleri", alt: "*cash inflows*" }, "−",
            { t: "Nakit çıkışları", alt: "*cash outflows*" }
          ], aciklama: "*Cash flow statement* bir raporlama dönemi boyunca girişlerin ve çıkışların nakit bakiyesini nasıl etkilediğini gösterir. Dönem sonunda net nakit akışı pozitif ya da negatif olabilir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⬆️", terim: "Positive cash flow", tr: "pozitif nakit akışı", tanim: "Dönem içinde giren nakdin çıkandan fazla olması; nakit bakiyesi artar.", ornek: "Girişler 180, çıkışlar 150 → +30." },
            { ikon: "⬇️", terim: "Negative cash flow", tr: "negatif nakit akışı", tanim: "Dönem içinde çıkan nakdin girenden fazla olması; nakit bakiyesi azalır.", ornek: "Girişler 100, çıkışlar 140 → −40." }
          ] },
        { tip: "liste", baslik: "İşletmeler nakdi neden yakından izler?", maddeler: [
            { ikon: "💼", baslik: "Sürekli giderleri ödemek", metin: "Maaş ve kira gibi giderler her dönem ödenmelidir." },
            { ikon: "🏦", baslik: "Borç verenlere ödeme", metin: "Kredi ve faiz zamanında ödenmelidir." },
            { ikon: "🌩️", baslik: "Beklenmedik gider", metin: "Arıza, tamirat, sürpriz bir fatura çıkabilir." }
          ] }
      ]
    },
    {
      baslik: "Nakit girişleri ve çıkışları",
      kisa: "Giriş nakit bakiyesini artırır, çıkış azaltır.",
      bloklar: [
        { tip: "ikili", ayirici: "↔", sol: { ikon: "⬆️", baslik: "Nakit girişleri (bakiyeyi artırır)", maddeler: ["Müşterilerden tahsilat", "Yatırım varlıklarından faiz ya da temettü", "Bir varlığın satış geliri", "Yeni kredi ya da sermaye girişi"] },
          sag: { ikon: "⬇️", baslik: "Nakit çıkışları (bakiyeyi azaltır)", maddeler: ["Çalışanlara ve tedarikçilere ödemeler", "Mevcut kredilerin faiz ödemesi", "Devlete ödenen vergi", "Varlık alımı, borç ödemesi, temettü"] },
          oyun: [
            { metin: "Müşterinin pastane faturasını ödemesi.", cevap: "sol", neden: "Müşteri ödemesi: nakit girişi." },
            { metin: "Aylık maaşların ödenmesi.", cevap: "sag", neden: "Çalışanlara ödeme: nakit çıkışı." },
            { metin: "Eski kamyonetin 10 bin TL'ye satılması.", cevap: "sol", neden: "Varlık satışından gelen nakit: giriş." },
            { metin: "Yeni fırın makinesinin satın alınması.", cevap: "sag", neden: "Varlık alımı: nakit çıkışı." },
            { metin: "Hissedarlara temettü ödemek.", cevap: "sag", neden: "Temettü nakit çıkışıdır." }
          ] },
        { tip: "tuzak", baslik: "Kredi gelir değildir", metin: "Nakit girişi ile gelir (*revenue*) aynı şey değildir.", yanlis: "Bankadan alınan kredi işletmenin geliridir.", dogru: "Kredi nakit bakiyesini artırır (==nakit girişi==) ama gelir tablosundaki gelir değildir; geri ödenmesi gereken bir borçtur." }
      ]
    },
    {
      baslik: "Üç gruba ayrılan nakit hareketleri",
      kisa: "Nakit hareketleri faaliyet, yatırım ve finansman olmak üzere üç grupta toplanır.",
      bloklar: [
        { tip: "tablo", baslik: "Üç grup", head: ["Grup", "Neyi içerir?", "Örnek giriş", "Örnek çıkış"], rows: [
            ["*Operating* (faaliyet)", "Günlük işin nakdi", "Müşteri ödemeleri", "Tedarikçi, maaş, faiz, vergi"],
            ["*Investing* (yatırım)", "Uzun vadeli varlıklar", "Eski varlığın satışı", "Makine, bina alımı"],
            ["*Financing* (finansman)", "Borç ve sermaye", "Yeni kredi, hisse satışı", "Kredi anaparası ödemesi, temettü"]
          ], not: "Üç grup standart muhasebe uygulamasıdır; faiz ödemesi ile alınan faiz/temettünün hangi gruba yazılacağı standarda göre değişebilir. Önemli olan her giriş ve çıkışın dönem sonu nakdine etkisini izlemektir." },
        { tip: "grafik", baslik: "Yıldız Pastanesi'nin yıllık nakit akışı (bin TL)", xlabel: "", ylabel: "Bin TL", xmax: 6, ymax: 80,
          xticks: [{ v: 1, label: "Başlangıç" }, { v: 2, label: "Faaliyet" }, { v: 3, label: "Yatırım" }, { v: 4, label: "Finansman" }, { v: 5, label: "Son nakit" }],
          yticks: [{ v: 20, label: "20" }, { v: 40, label: "40" }, { v: 65, label: "65" }],
          ogeler: [
            { id: "c1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "c2", tip: "alan", renk: 2, noktalar: [[1.65, 5], [2.35, 5], [2.35, 5], [1.65, 5]] },
            { id: "c3", tip: "alan", renk: 3, noktalar: [[2.65, 65], [3.35, 65], [3.35, 65], [2.65, 65]] },
            { id: "c4", tip: "alan", renk: 2, noktalar: [[3.65, 25], [4.35, 25], [4.35, 25], [3.65, 25]] },
            { id: "c5", tip: "alan", renk: 0, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 12, metin: "5", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 72, metin: "+60", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 72, metin: "−40", gizli: true },
            { id: "t4", tip: "yazi", x: 4, y: 48, metin: "+15", gizli: true },
            { id: "t5", tip: "yazi", x: 5, y: 47, metin: "40", gizli: true }
          ],
          durumlar: [
            { metin: "Yıl başında kasada ==5 bin TL== var.", set: { c1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 5], [0.65, 5]] } }, goster: ["t1"] },
            { metin: "*Operating*: müşteriden +300, tedarikçi ve maaş −210, faiz −10, vergi −20 = ==+60==. Nakit 65'e çıkar.", set: { c2: { noktalar: [[1.65, 5], [2.35, 5], [2.35, 65], [1.65, 65]] } }, goster: ["t2"] },
            { metin: "*Investing*: makine −50, eski kamyonet satışı +10 = ==−40==. Nakit 25'e düşer.", set: { c3: { noktalar: [[2.65, 25], [3.35, 25], [3.35, 65], [2.65, 65]] } }, goster: ["t3"] },
            { metin: "*Financing*: yeni kredi +30, kredi ödemesi −10, temettü −5 = ==+15==. Nakit 40 olur.", set: { c4: { noktalar: [[3.65, 25], [4.35, 25], [4.35, 40], [3.65, 40]] } }, goster: ["t4"] },
            { metin: "Dönem sonu nakit: 5 + 60 − 40 + 15 = ==40 bin TL==. Net nakit akışı +35.", set: { c5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 40], [4.65, 40]] } }, goster: ["t5"] }
          ] },
        { tip: "ornek", baslik: "Üç grubu topla", durum: "Yıldız Pastanesi'nin yıl başı nakdi 5 bin TL. Faaliyetlerden +60, yatırımlardan −40, finansmandan +15 bin TL nakit akışı oluşuyor. Net nakit akışı ve dönem sonu nakit nedir?",
          adimlar: ["Net nakit akışı: 60 − 40 + 15 = +35 bin TL.", "Dönem sonu nakit: 5 + 35 = 40 bin TL.", "Bilançodaki nakit kalemi de dönem sonunda 40 bin TL olmalıdır."],
          sonuc: "Net nakit akışı ==+35==, dönem sonu nakit ==40 bin TL==." }
      ]
    },
    {
      baslik: "Kâr ile nakit aynı şey değildir",
      kisa: "İşletme kârlı görünürken nakdi bitebilir, çünkü tahsilat gecikir ama giderler ödenir.",
      bloklar: [
        { tip: "grafik", baslik: "Kârlı ama nakit daralıyor (bin TL)", xlabel: "Ay", ylabel: "Bin TL", xmax: 6, ymax: 180, xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }], yticks: [{ v: 20, label: "20" }, { v: 100, label: "100" }, { v: 170, label: "170" }],
          ogeler: [
            { id: "kr", tip: "egri", renk: 2, etiket: "Birikmiş net kâr", gizli: true, noktalar: [[0, 0], [1, 20], [2, 40], [3, 60], [4, 80], [5, 100], [6, 120]] },
            { id: "nk", tip: "egri", renk: 1, etiket: "Nakit bakiyesi", gizli: true, noktalar: [[0, 170], [1, 90], [2, 10], [3, 30], [4, 50], [5, 70], [6, 90]] },
            { id: "dp", tip: "nokta", x: 2, y: 10, etiket: "10: kasada neredeyse hiç para yok", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Ahmet'in düğün pastası atölyesi: her ay 100 bin TL satış, 80 bin TL gider; ==aylık net kâr 20==. Birikmiş kâr her ay yükselir.", goster: ["kr"] },
            { metin: "Giderler hemen ödenir (−80) ama müşteriler 2 ay sonra öder: ilk iki ay kasaya ==hiç para girmez==. Başlangıçtaki 170'lik nakit erir.", goster: ["nk"] },
            { metin: "2. ayın sonunda nakit yalnızca ==10 bin TL==. Kâr yazılı, ama maaşı ödeyecek para yok.", goster: ["dp"] }
          ] },
        { tip: "tablo", baslik: "İlk dört ay: kâr ve nakit (bin TL)", head: ["Ay", "Net kâr", "Nakit girişi", "Nakit çıkışı", "Dönem sonu nakit"], rows: [
            ["1", "+20", "0", "80", "90"],
            ["2", "+20", "0", "80", "10"],
            ["3", "+20", "100", "80", "30"],
            ["4", "+20", "100", "80", "50"]
          ], not: "Başlangıç nakdi 170. Satış yapılınca gelir tablosunda kâr görünür; para ancak müşteri ödeyince nakit akışına girer (3. ayda ilk satışın parası gelir)." },
        { tip: "tuzak", baslik: "Net kâr nakit güvencesi değildir", metin: "Gelir tablosu ile nakit akışı farklı sorulara cevap verir.", yanlis: "Net kârı pozitif olan işletme nakit sıkıntısı çekmez.", dogru: "Negatif nakit akışı, net kâr pozitif olsa bile işletmenin güncel giderlerini ödeyememesine ve kapanmaya ya da iflasa yol açabilir." }
      ]
    },
    {
      baslik: "Paydaşlar ne arar, sıkıntıda ne yapılır?",
      kisa: "Nakit akışı ödeme gücünü gösterir; negatifse fon bul, tahsilatı hızlandır, şartları iyileştir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👥", terim: "Stakeholders", tr: "paydaşlar", tanim: "Nakit akış tablosu, işletmenin çalışanlara, tedarikçilere, borç verenlere ve hissedarlara olan yükümlülüklerini karşılayabilme gücünü değerlendirmek için kullanılır.", ornek: "Banka, ödeme gücüne bakarak krediye karar verir." }
          ] },
        { tip: "adimlar", baslik: "Negatif nakit akışında üç yol", adimlar: [
            { baslik: "Daha fazla fon topla", metin: "Yeni kredi ya da yatırımcıdan sermaye alarak nakdi artır." },
            { baslik: "Alacakları daha hızlı tahsil et", metin: "*Accounts receivable* ne kadar çabuk tahsil edilirse kasaya para o kadar erken girer." },
            { baslik: "Daha iyi şartlar iste", metin: "Tedarikçi ve borç verenlerden daha uzun vade ya da daha düşük faiz iste." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🔋", baslik: "Nakdi artırır ya da korur", maddeler: ["Alacakları hızlı tahsil etmek", "Tedarikçiden daha uzun vade almak", "Yeni kredi ya da sermaye bulmak"] },
          sag: { ikon: "🪫", baslik: "Nakdi azaltır", maddeler: ["Büyük varlığı peşin almak", "Temettüyü artırmak", "Tedarikçiye vadesinden önce ödemek"] },
          oyun: [
            { metin: "Müşterilere ödeme süresini 60 günden 30 güne indirmek.", cevap: "sol", neden: "Tahsilat hızlanır, nakit erken girer." },
            { metin: "Nakdi az olan işletmenin yeni bir makineyi peşin satın alması.", cevap: "sag", neden: "Varlık alımı nakit çıkışıdır." },
            { metin: "Un tedarikçisiyle ödeme vadesini 30 günden 60 güne uzatmak.", cevap: "sol", neden: "Ödeme ertelenir, nakit korunur." },
            { metin: "Nakdi daralmışken hissedarlara temettü dağıtmak.", cevap: "sag", neden: "Temettü nakit çıkışıdır." }
          ] }
      ]
    },
    {
      baslik: "Üç tabloyu birlikte okumak",
      kisa: "Gelir tablosu kârı, bilanço değeri, nakit akış tablosu nakdi gösterir; üçü birbirini tamamlar.",
      bloklar: [
        { tip: "harita", merkez: "İşletmenin finansal sağlığı", dallar: [
            { baslik: "Gelir tablosu", alt: "Bir dönemde kâr mı, zarar mı? Gelir − maliyet" },
            { baslik: "Bilanço", alt: "Belli bir anda neleri var, neleri borç? Varlık = borç + özkaynak" },
            { baslik: "Nakit akış tablosu", alt: "Nakit nereden girdi, nereye çıktı? Dönem sonu nakit" }
          ] },
        { tip: "tablo", baslik: "Üç tablonun karşılaştırması", head: ["Tablo", "Zaman", "Kritik soru", "Bağlantı"], rows: [
            ["*Income statement*", "Bir dönem", "Kâr ettik mi?", "Net kâr, birikmiş kârı etkiler"],
            ["*Balance sheet*", "Belli bir an", "Ne kadar değerimiz var?", "Nakit kalemi dönem sonu nakdine eşit"],
            ["*Cash flow statement*", "Bir dönem", "Ödeme gücümüz var mı?", "Dönem sonu nakdi bilançoya gider"]
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Nakit akış tablosu bir dönemde nakit girişlerinin ve çıkışlarının nakit bakiyesini nasıl değiştirdiğini gösterir.",
            "Dönem sonu nakit = dönem başı nakit + girişler − çıkışlar.",
            "Girişler: müşteri ödemeleri, yatırımdan faiz/temettü, varlık satışı, yeni kredi ya da sermaye.",
            "Çıkışlar: çalışan ve tedarikçi ödemeleri, faiz, vergi, varlık alımı, borç ödemesi, temettü.",
            "Üç grup: faaliyet (günlük iş), yatırım (varlık alım-satımı), finansman (borç ve sermaye).",
            "Kâr ile nakit farklıdır: net kâr pozitif olsa bile negatif nakit akışı işletmeyi kapanmaya ya da iflasa götürebilir.",
            "Nakit akış tablosu çalışanlara, tedarikçilere, borç verenlere ve hissedarlara ödeme gücünü gösterir.",
            "Çözüm yolları: daha fazla fon toplamak, alacakları hızlı tahsil etmek, tedarikçi ve borç verenlerden daha iyi şartlar almak.",
            "Üç finansal tablo birbirini tamamlar: kâr, değer ve nakit."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tabloya göre dönem sonunda kasada kaç TL nakit kalır?",
      fig: { type: "table", caption: "Bir işletmenin nakdi (bin TL)", head: ["Dönem başı nakit", "Nakit girişleri", "Nakit çıkışları"], rows: [[20, 150, 130]] },
      opts: ["20 bin TL", "40 bin TL", "130 bin TL", "300 bin TL"],
      a: 1,
      why: "20 + 150 − 130 = 40 bin TL. C en çekici yanlış: yalnızca nakit çıkışlarına bakar; başlangıç nakdi ve girişler hesaba katılmaz." },
    { q: "Aşağıdakilerden hangisi bir işletmenin nakit çıkışıdır?",
      opts: ["Müşterilerden yapılan tahsilat", "Eski bir makinenin satış geliri", "Yeni banka kredisinin hesaba yatması", "Hissedarlara ödenen temettü"],
      a: 3,
      why: "Temettü ödemesi nakit bakiyesini azaltır. C en çekici yanlış: kredi geri ödenmesi gereken bir borç olsa da hesaba yattığında nakit girişidir." },
    { q: "Bir işletmenin gelir tablosunda net kârı pozitiftir ama müşterilerinden tahsilat gecikmekte ve işletmenin kasası maaş ödenemeyecek kadar daralmıştır. Bu durum için hangisi doğrudur?",
      opts: ["Negatif nakit akışı, net kâr pozitif olsa bile işletmenin giderlerini ödeyememesine ve kapanmasına yol açabilir", "Net kâr pozitif olduğu için nakit sorunu yoktur", "Nakit akış tablosu ancak kâr negatifse önem kazanır", "İşletmenin tek çözümü hissedarlara temettü dağıtmaktır"],
      a: 0,
      why: "Kâr ile nakit ayrı kavramlardır; tahsilat gecikince kâr yazılı olsa da nakit giderleri karşılamaz. B en çekici yanlış: net kâr pozitifliğini nakit güvencesi sayar." },
    { q: "Nakdi daralan bir pastane için aşağıdakilerden hangisi nakit sorununu hafifletmeye en çok yardımcı olur?",
      opts: ["Yeni ve pahalı bir fırını peşin almak", "Tedarikçilere ödemeleri vadesinden önce yapmak", "Müşteri alacaklarını daha hızlı tahsil etmek", "Hissedarlara ek temettü ödemek"],
      a: 2,
      why: "Alacakları hızlı tahsil etmek nakit girişini öne çeker. A en çekici yanlış: varlık alımı nakit çıkışıdır ve nakit sorununu büyütür." },
    { q: "Aşağıdaki tabloya göre dönem sonu nakit kaç bin TL'dir?",
      fig: { type: "table", caption: "Nakit akışı (bin TL)", head: ["Dönem başı nakit", "Faaliyet", "Yatırım", "Finansman"], rows: [[30, "+50", "−70", "+40"]] },
      opts: ["20", "50", "190", "−30"],
      a: 1,
      why: "Net nakit akışı 50 − 70 + 40 = +20; dönem sonu nakit 30 + 20 = 50 bin TL. C en çekici yanlış: yatırım çıkışını (−70) da toplama ekler." }
  ]
};
