/* Kitora not defteri · bf501 · 5.1 Vergiler, Net Gelir ve Bütçe
   Kaynak: College Board CED, Topic 5.1 (5.1.A–5.1.C). Blok türleri: /ap/_kit/defter.js başı.
   Para birimi TL; oranlar ve dilimler anlatım için varsayımsaldır, gerçek oranlar her yıl değişir. */
window.DEFTER = {
  slug: "bf501",
  amac: "Bu konu maaşın cebine nasıl ulaştığını anlatıyor: bireylerin ödediği vergi türlerini, vergi oranlarının neden kişiden kişiye değiştiğini, maaş bordrosunda brüt gelirden net gelire nasıl gidildiğini ve net geliri bütçeye nasıl bölüştüreceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Bireylerin ödediği vergiler",
      kisa: "Bireyler gelir, sermaye kazancı, bordro, mülk ve satış vergisi öder.",
      bloklar: [
        { tip: "tablo", baslik: "Beş vergi türü (ABD terimleriyle)", head: ["Vergi", "Neye göre hesaplanır?", "Nasıl ödenir?", "Türkiye'de benzeri"], rows: [
            ["*Income tax* (gelir vergisi)", "Gelirin bir yüzdesi", "İşveren maaştan keser ve devlete yatırır; yıl sonunda beyanla fark ödenir ya da iade alınır", "Gelir vergisi"],
            ["*Capital gains tax* (sermaye kazancı vergisi)", "Hisse ya da ev gibi bir varlığı kârla satmaktan doğan kazanç (*capital gain*)", "Gelir vergisi beyannamesiyle gönderilir; oranı genelde gelir vergisinden düşüktür", "Değer artış kazançları (kendi kurallarıyla)"],
            ["*Payroll taxes* (bordro vergileri)", "Maaşa bağlı; ABD'de *Social Security*, *Medicare*, *Medicaid*, işsizlik ödeneği", "Maaştan kesilir; işveren yarısını öder", "SGK ve işsizlik sigortası primleri"],
            ["*Property tax* (mülk vergisi)", "Mülkün değeri: ev, arsa, araba", "Yıllık, 6 aylık ya da aylık", "Emlak vergisi, motorlu taşıtlar vergisi"],
            ["*Sales tax* (satış vergisi)", "Ürünün satış fiyatı", "Satıcı işletme toplar ve devlete öder", "KDV (*VAT*)"]
          ], not: "ABD'de vergiler federal, eyalet ve yerel yönetimlere ödenir; vergi türleri ve tutarı eyalete göre değişir." },
        { tip: "tuzak", baslik: "Satış vergisini kim öder, kim toplar?", metin: "Vergiyi ödeyen ile devlete yollayan farklı kişilerdir.", yanlis: "*Sales tax*’ı işletme kendi kârından öder.", dogru: "Satış vergisini ==müşteri öder==; satıcı işletme onu müşteriden toplar ve devlete yatırır. *Capital gains tax* da *income tax* ile aynı şey değildir: genelde ==daha düşük oranla== ama aynı beyannameyle ödenir." }
      ]
    },
    {
      baslik: "Vergi yılı: kesinti, beyan ve iade",
      kisa: "Maaştan kesilen vergi yıl sonunda hesaplanır; fazla ödenen iade, eksik kalan ödenir.",
      bloklar: [
        { tip: "adimlar", baslik: "Bir çalışanın vergi yılı", adimlar: [
            { baslik: "Maaştan kesinti (*withholding*)", metin: "Her maaş döneminde işveren, gelir vergisinin bir bölümünü keser ve doğrudan devlete öder." },
            { baslik: "Yıllık beyan (*income tax return*)", metin: "Yıl sonunda birey ya da hane beyanname verir; yıl içindeki gelir, indirim ve krediler hesaba katılarak gerçek vergi borcu bulunur." },
            { baslik: "İade ya da ek ödeme", metin: "Kesilen vergi borçtan fazlaysa iade (*refund*) alınır; azsa kalan tutar ödenir." },
            { baslik: "Sermaye kazancı", metin: "Varsa *capital gains tax* aynı beyannameyle gönderilir." },
            { baslik: "Serbest çalışan", metin: "Kesinti yapacak işveren olmadığı için vergisini kendisi hesaplayıp gönderir." }
          ] },
        { tip: "ikili", sol: { ikon: "👔", baslik: "Maaşlı çalışan", maddeler: ["Bordro vergisinin yarısı maaştan kesilir", "İşveren diğer yarısını öder", "Vergiyi işveren devlete yatırır"] },
          sag: { ikon: "🧑‍💻", baslik: "Serbest çalışan ve sözleşmeli (*contract worker*)", maddeler: ["Bordro vergisinin tamamını kendisi öder", "Vergiyi devlete kendisi gönderir"] },
          oyun: [
            { metin: "Kafede garson olan Ayşe'nin maaşından bordro vergisi kesiliyor.", cevap: "sol", neden: "İşverene bağlı çalışan: kesinti işverence yapılır." },
            { metin: "Serbest grafik tasarımcı Kerem, bordro vergisinin tamamını kendisi yatırıyor.", cevap: "sag", neden: "Serbest çalışan payı ikiye bölmez, tamamını öder." },
            { metin: "Bir işveren, çalışanı adına bordro vergisinin yarısını kendi cebinden ödüyor.", cevap: "sol", neden: "İşveren yarısını öder: maaşlı çalışan." },
            { metin: "Sözleşmeli kurye vergisini ve primini kendisi hesaplayıp yatırıyor.", cevap: "sag", neden: "Sözleşmeli çalışan da tamamını kendisi öder." }
          ] },
        { tip: "ornek", baslik: "Yıl sonu: iade mi, ek ödeme mi?", durum: "Elif'in maaşından yıl boyunca toplam 30.000 TL gelir vergisi kesildi; beyanda hesaplanan gerçek vergisi 27.000 TL. Can'ın maaşından 20.000 TL kesildi; hesaplanan gerçek vergisi 24.000 TL. İkisi için sonuç nedir?",
          adimlar: ["Elif: kesilen 30.000 > borç 27.000. Fark = 3.000 TL fazla ödenmiş.", "Can: kesilen 20.000 < borç 24.000. Fark = 4.000 TL eksik.", "Fazla ödeme iade edilir; eksik tutar yıl sonunda ödenir."],
          sonuc: "Elif ==3.000 TL iade== alır; Can ==4.000 TL== ek öder." }
      ]
    },
    {
      baslik: "İlerlemeli gelir vergisi",
      kisa: "Gelir arttıkça vergi oranı artar; her gelir dilimi kendi oranıyla vergilenir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪜", terim: "Progressive tax", tr: "ilerlemeli vergi", tanim: "Daha yüksek gelir kazananların daha yüksek vergi oranı ödediği sistem. ABD federal gelir vergisi (ve bazı eyalet gelir vergileri) ilerlemelidir; Türkiye'de de gelir vergisi dilimlidir.", ornek: "İlk 100.000 TL %10, sonraki dilim %20 gibi." },
            { ikon: "🧮", terim: "Tax bracket", tr: "vergi dilimi", tanim: "Aynı oranla vergilenen gelir aralığı. Gelirin her dilime düşen kısmı kendi oranıyla vergilenir; tamamı değil.", ornek: "250.000 TL gelirin yalnızca 200.000 TL üstündeki 50.000 TL'si %30 ile vergilenir." }
          ] },
        { tip: "grafik", baslik: "Varsayımsal vergi dilimleri ve 250.000 TL gelir", xlabel: "Yıllık gelir", ylabel: "Vergi oranı (%)", xmax: 3, ymax: 40, xticks: [{ v: 1, label: "100 bin" }, { v: 2, label: "200 bin" }, { v: 3, label: "300 bin" }], yticks: [{ v: 10, label: "%10" }, { v: 20, label: "%20" }, { v: 30, label: "%30" }],
          ogeler: [
            { id: "d1", tip: "alan", renk: 0, noktalar: [[0, 0], [1, 0], [1, 0], [0, 0]] },
            { id: "d2", tip: "alan", renk: 1, noktalar: [[1, 0], [2, 0], [2, 0], [1, 0]] },
            { id: "d3", tip: "alan", renk: 2, noktalar: [[2, 0], [3, 0], [3, 0], [2, 0]] },
            { id: "inc", tip: "cizgi", from: [2.5, 0], to: [2.5, 34], renk: 3, kesik: true, gizli: true },
            { id: "ti", tip: "yazi", x: 2.5, y: 36, metin: "Gelir 250 bin TL", gizli: true },
            { id: "v1", tip: "yazi", x: 0.5, y: 5, metin: "10.000 TL", gizli: true },
            { id: "v2", tip: "yazi", x: 1.5, y: 10, metin: "20.000 TL", gizli: true },
            { id: "v3", tip: "yazi", x: 2.25, y: 15, metin: "15.000 TL", gizli: true },
            { id: "tt", tip: "yazi", x: 0.1, y: 37, metin: "Toplam 45.000 TL, etkin %18", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "İlk ==100.000 TL== için oran ==%10==.", set: { d1: { noktalar: [[0, 0], [1, 0], [1, 10], [0, 10]] } } },
            { metin: "==100.000–200.000 TL== arası oran ==%20==.", set: { d2: { noktalar: [[1, 0], [2, 0], [2, 20], [1, 20]] } } },
            { metin: "==200.000 TL== üstüne oran ==%30==. Oran, gelirle yükseldi: ilerlemeli.", set: { d3: { noktalar: [[2, 0], [3, 0], [3, 30], [2, 30]] } } },
            { metin: "Geliri ==250.000 TL== olan biri üç dilimin de içinden geçer.", goster: ["inc", "ti"] },
            { metin: "Her dilim kendi oranıyla vergilenir: 100.000 × %10 = 10.000; 100.000 × %20 = 20.000; 50.000 × %30 = 15.000.", goster: ["v1", "v2", "v3"] },
            { metin: "Toplam ==45.000 TL==. Etkin oran = 45.000 ÷ 250.000 = ==%18==; son liranın vergisi ise %30.", goster: ["tt"] }
          ] },
        { tip: "ornek", baslik: "Gelir 250.000 TL: vergi kaç?", durum: "Dilimler: ilk 100.000 TL %10, sonraki 100.000 TL %20, 200.000 TL üstü %30. Geliri 250.000 TL olan birinin vergisi ve ortalama vergi oranı nedir?",
          adimlar: ["1. dilim: 100.000 × %10 = 10.000 TL.", "2. dilim: 100.000 × %20 = 20.000 TL.", "3. dilim: 50.000 × %30 = 15.000 TL.", "Toplam = 45.000 TL; ortalama oran = 45.000 ÷ 250.000 = %18."],
          sonuc: "Vergi ==45.000 TL==, ortalama oran ==%18==; %30 yalnızca üst diliminde geçerli." },
        { tip: "tuzak", baslik: "Üst dilime girince bütün gelir %30 vergilenmez", metin: "Dilimli sistem, geliri parçalara böler.", yanlis: "Gelirim 200.000 TL'yi geçince bütün gelirim %30 vergilenir; zam almak zarar ettirir.", dogru: "Yalnızca ==üst dilime giren kısım== daha yüksek oranla vergilenir. Zam her zaman net geliri artırır." }
      ]
    },
    {
      baslik: "Vergi indirimi ve vergi kredisi",
      kisa: "İndirim vergilendirilen geliri azaltır; kredi ödenecek vergiyi doğrudan azaltır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✂️", baslik: "Tax deduction (vergi indirimi)", maddeler: ["Vergilendirilecek geliri azaltır", "Tasarruf = tutar × vergi oranı", "Ev kredisi faizi, emeklilik katkısı, bağış, eyalet ve yerel vergiler, bazı sağlık giderleri"] },
          sag: { ikon: "🎟️", baslik: "Tax credit (vergi kredisi)", maddeler: ["Ödenecek vergiyi liraya lira azaltır", "Tasarruf = kredinin tamamı", "Çocuk vergi kredisi, çocuk ve bakım kredisi, eğitim kredisi, belirli alımlar için krediler"] },
          oyun: [
            { metin: "Bağış makbuzu: bağışlanan tutar, vergilendirilecek gelirden düşülüyor.", cevap: "sol", neden: "Gelirden düşülen tutar: *deduction*." },
            { metin: "Çocuk için 2.000 TL'lik vergi kredisi, vergi faturasından doğrudan düşülüyor.", cevap: "sag", neden: "Vergiden doğrudan düşer: *credit*." },
            { metin: "Emeklilik hesabına yapılan katkı vergilendirilecek geliri azaltıyor.", cevap: "sol", neden: "Gelirden düşer: *deduction*." },
            { metin: "Eğitim gideri için verilen 1.000 TL'lik kredi, vergi borcunu 1.000 TL azaltıyor.", cevap: "sag", neden: "Borcu doğrudan azaltır: *credit*." }
          ] },
        { tip: "ornek", baslik: "Aynı 10.000 TL: indirim mi, kredi mi?", durum: "Geliri 150.000 TL olan birinin vergisi (ilk 100.000 TL %10, sonraki dilim %20) 100.000 × %10 + 50.000 × %20 = 20.000 TL. Bu kişi önce 10.000 TL'lik bir indirimi, sonra aynı tutarda bir krediyi karşılaştırıyor.",
          adimlar: ["İndirimle vergilendirilecek gelir 140.000 TL; vergi = 10.000 + 40.000 × %20 = 18.000 TL. Tasarruf = 2.000 TL (10.000 × %20).", "Kredi ile vergi 20.000 − 10.000 = 10.000 TL. Tasarruf = 10.000 TL.", "Aynı tutar: kredi, indirimden çok daha değerlidir."],
          sonuc: "10.000 TL indirim ==2.000 TL==, 10.000 TL kredi ==10.000 TL== vergi tasarrufu sağlar." },
        { tip: "tuzak", baslik: "İndirim ile kredi aynı değildir", metin: "Aynı tutar, farklı vergi tasarrufu demektir.", yanlis: "10.000 TL'lik indirim, vergi borcunu 10.000 TL azaltır.", dogru: "*Deduction* gelirden düşer; tasarruf ==tutar × vergi oranı== kadardır. *Credit* vergiden ==doğrudan== düşer. İki kişinin vergisi bu yüzden gelirleri aynı olsa bile farklı çıkabilir: gelir düzeyi, indirimler ve krediler fark yaratır." }
      ]
    },
    {
      baslik: "Maaş bordrosu: brüt, kesintiler, net",
      kisa: "Brüt gelirden zorunlu ve isteğe bağlı kesintiler düşülünce net gelir kalır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💼", terim: "Gross income", tr: "brüt gelir", tanim: "Bir ödeme döneminde kazanılan toplam gelir. Yıllık maaşın ödeme dönemlerine bölünmesi, çalışılan saat, sözleşmedeki tutar ya da başka bir ücret biçimiyle bulunur.", ornek: "Aylık maaş 40.000 TL." },
            { ikon: "⚖️", terim: "Mandatory deductions", tr: "zorunlu kesintiler", tanim: "Federal, eyalet ya da yerel yasaların gerektirdiği, işverenin kesmek zorunda olduğu kesintiler: gelir vergisi ve bordro vergileri.", ornek: "Gelir vergisi, SGK ve işsizlik sigortası primi." },
            { ikon: "🙋", terim: "Voluntary deductions", tr: "isteğe bağlı kesintiler", tanim: "Çalışanın işveren aracılığıyla ayırdığı para: sağlık sigortası, sağlık ve bakım tasarruf planları, hayat sigortası, emeklilik tasarrufu, sendika aidatı.", ornek: "BES katkısı, sendika aidatı." },
            { ikon: "🏷️", terim: "Pretax deduction", tr: "vergi öncesi kesinti", tanim: "Ayrılan tutarın vergilendirilecek gelire dahil edilmediği kesinti. Vergi borcunu düşürdüğü için tasarrufa teşviktir.", ornek: "Emeklilik katkısının önce gelirden düşülüp sonra vergilenmesi." },
            { ikon: "💵", terim: "Net income (net pay)", tr: "net gelir", tanim: "Bütün kesintilerden sonra işverenden cebine giren tutar; brüt gelirden çok farklı olabilir.", ornek: "40.000 TL brüt gelirden 28.000 TL net." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Net gelir", alt: "elde kalan" }, "=",
            { t: "Brüt gelir", alt: "toplam kazanç" }, "−",
            { t: "Zorunlu kesintiler", alt: "vergi ve bordro vergileri" }, "−",
            { t: "İsteğe bağlı kesintiler", alt: "sigorta, emeklilik, aidat" }
          ], aciklama: "Bordroda üç bölüm vardır: brüt gelir, zorunlu ve isteğe bağlı kesintiler, net gelir." },
        { tip: "tablo", baslik: "Deniz'in aylık bordrosu (basitleştirilmiş)", head: ["Kalem", "Tutar (TL)", "Türü"], rows: [
            ["Brüt gelir", "40.000", "Gelir"],
            ["Bordro vergileri (SGK ve işsizlik, %15)", "−6.000", "Zorunlu"],
            ["Gelir vergisi (vergilendirilen gelirin %10'u: 38.000 × %10)", "−3.800", "Zorunlu"],
            ["Emeklilik tasarrufu (BES benzeri)", "−2.000", "İsteğe bağlı, vergi öncesi"],
            ["Sendika aidatı", "−200", "İsteğe bağlı, vergi sonrası"],
            ["**Net gelir**", "**28.000**", "Cebe giren"]
          ], vurgu: 5, not: "Bordro vergisi brüt gelirden, gelir vergisi emeklilik katkısı düşüldükten sonraki 38.000 TL'den hesaplanır. Oranlar sadeleştirilmiştir; gerçek oranlar yıllık değişir." }
      ]
    },
    {
      baslik: "Brüt'ten net'e adım adım; vergi öncesi kesinti",
      kisa: "Her kesinti brüt geliri azaltır; vergi öncesi kesinti ayrıca vergiyi de düşürür.",
      bloklar: [
        { tip: "grafik", baslik: "Deniz'in 40.000 TL brüt gelirinden net gelire (bin TL)", xlabel: "Aşama", ylabel: "Bin TL", xmax: 7, ymax: 45, xticks: [{ v: 1, label: "Brüt" }, { v: 2, label: "Bordro" }, { v: 3, label: "Vergi" }, { v: 4, label: "Emeklilik" }, { v: 5, label: "Aidat" }, { v: 6, label: "Net" }], yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }],
          ogeler: [
            { id: "g", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "p", tip: "alan", renk: 1, noktalar: [[1.65, 40], [2.35, 40], [2.35, 40], [1.65, 40]] },
            { id: "v", tip: "alan", renk: 1, noktalar: [[2.65, 34], [3.35, 34], [3.35, 34], [2.65, 34]] },
            { id: "e", tip: "alan", renk: 3, noktalar: [[3.65, 30.2], [4.35, 30.2], [4.35, 30.2], [3.65, 30.2]] },
            { id: "a", tip: "alan", renk: 3, noktalar: [[4.65, 28.2], [5.35, 28.2], [5.35, 28.2], [4.65, 28.2]] },
            { id: "n", tip: "alan", renk: 2, noktalar: [[5.65, 0], [6.35, 0], [6.35, 0], [5.65, 0]] },
            { id: "tg", tip: "yazi", x: 1, y: 42, metin: "40", gizli: true },
            { id: "tp", tip: "yazi", x: 2, y: 42, metin: "−6", gizli: true },
            { id: "tv", tip: "yazi", x: 3, y: 36, metin: "−3,8", gizli: true },
            { id: "te", tip: "yazi", x: 4, y: 32, metin: "−2", gizli: true },
            { id: "ta", tip: "yazi", x: 5, y: 30, metin: "−0,2", gizli: true },
            { id: "tn", tip: "yazi", x: 6, y: 30, metin: "28", gizli: true }
          ],
          durumlar: [
            { metin: "==Brüt gelir== 40.000 TL.", set: { g: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 40], [0.65, 40]] } }, goster: ["tg"] },
            { metin: "Zorunlu: bordro vergileri ==−6.000 TL== (SGK ve işsizlik %15).", set: { p: { noktalar: [[1.65, 40], [2.35, 40], [2.35, 34], [1.65, 34]] } }, goster: ["tp"] },
            { metin: "Zorunlu: gelir vergisi ==−3.800 TL== (BES katkısı düşüldükten sonra 38.000 TL'nin %10'u).", set: { v: { noktalar: [[2.65, 34], [3.35, 34], [3.35, 30.2], [2.65, 30.2]] } }, goster: ["tv"] },
            { metin: "İsteğe bağlı: emeklilik tasarrufu ==−2.000 TL==. Vergi öncesi olduğu için gelir vergisini düşürdü, ama para sana ait birikime gidiyor.", set: { e: { noktalar: [[3.65, 30.2], [4.35, 30.2], [4.35, 28.2], [3.65, 28.2]] } }, goster: ["te"] },
            { metin: "İsteğe bağlı: sendika aidatı ==−200 TL==.", set: { a: { noktalar: [[4.65, 28.2], [5.35, 28.2], [5.35, 28], [4.65, 28]] } }, goster: ["ta"] },
            { metin: "Elde kalan ==net gelir 28.000 TL==; brüt gelirin %70'i.", set: { n: { noktalar: [[5.65, 0], [6.35, 0], [6.35, 28], [5.65, 28]] } }, goster: ["tn"] }
          ] },
        { tip: "ornek", baslik: "Vergi öncesi kesinti gerçekten kazandırır mı?", durum: "Deniz emeklilik tasarrufu yapmasa, 40.000 TL brüt gelirin tamamı vergilendirilir. Yapınca 2.000 TL vergi öncesi ayırır. Gelir vergisi oranı %10, bordro vergileri 6.000 TL, sendika aidatı 200 TL.",
          adimlar: ["Tasarruf yok: gelir vergisi = 40.000 × %10 = 4.000; net = 40.000 − 6.000 − 4.000 − 200 = 29.800 TL.", "Tasarruf var: gelir vergisi = 38.000 × %10 = 3.800; net = 28.000 TL; ayrıca 2.000 TL birikime gitti.", "Cebe + birikim: 28.000 + 2.000 = 30.000 TL. Fark = 30.000 − 29.800 = 200 TL.", "200 TL, 2.000 TL × %10 vergi tasarrufu."],
          sonuc: "Net gelir 1.800 TL düşse de Deniz 2.000 TL biriktirdi ve ==200 TL== vergi kazandı." },
        { tip: "tuzak", baslik: "Bordrodaki her kesinti kayıp para değildir", metin: "Zorunlu kesinti ile isteğe bağlı kesintiyi ayır.", yanlis: "Net gelir, brüt gelirin sabit bir yüzdesidir; kesinti, paranın yok olması demektir.", dogru: "Net gelir birçok şeye bağlıdır ve brüt gelirden ==çok farklı olabilir==. İsteğe bağlı kesintilerin bir kısmı (emeklilik tasarrufu, hayat sigortası) paranın ==sana ait birikime== ya da korumaya gitmesidir." }
      ]
    },
    {
      baslik: "Bütçe: net geliri bölüştürmek",
      kisa: "Bütçe, net geliri ihtiyaç, istek ve birikime paylaştırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📒", terim: "Budget", tr: "bütçe", tanim: "Belli bir dönemde net gelirin hangi harcamalara ve birikime ayrılacağını gösteren plan. Başlangıç noktası brüt değil, net gelirdir.", ornek: "Deniz aylık 28.000 TL net gelirini kalemlere böler." },
            { ikon: "🧩", terim: "50/30/20 rule", tr: "50/30/20 kuralı", tanim: "Net gelirin %50'si ihtiyaçlara (kira, market, ulaşım, faturalar), %30'u isteklere (dışarıda yemek, konser, abonelik), %20'si birikim ve borç ödemeye ayrılır. Bir rehberdir, yasa değildir.", ornek: "28.000 TL netin 14.000'i ihtiyaç, 8.400'ü istek, 5.600'ü birikim." }
          ] },
        { tip: "grafik", baslik: "Net gelir 28.000 TL için 50/30/20 bütçesi (bin TL)", xlabel: "Harcama grubu", ylabel: "Bin TL", xmax: 5, ymax: 16, xticks: [{ v: 1, label: "Net gelir" }, { v: 2, label: "İhtiyaç" }, { v: 3, label: "İstek" }, { v: 4, label: "Birikim" }], yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }, { v: 16, label: "16" }],
          ogeler: [
            { id: "n", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "i", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "s", tip: "alan", renk: 3, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b", tip: "alan", renk: 2, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "tn", tip: "yazi", x: 1, y: 14.6, metin: "28", gizli: true },
            { id: "ti", tip: "yazi", x: 2, y: 15.2, metin: "14 (%50)", gizli: true },
            { id: "ts", tip: "yazi", x: 3, y: 9.6, metin: "8,4 (%30)", gizli: true },
            { id: "tb", tip: "yazi", x: 4, y: 7, metin: "5,6 (%20)", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç noktası ==net gelir==: 28.000 TL. (Brüt değil, cebe giren.)", set: { n: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 14], [0.65, 14]] } }, goster: ["tn"] },
            { metin: "==İhtiyaçlar %50==: kira, market, ulaşım, faturalar = 14.000 TL.", set: { i: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 14], [1.65, 14]] } }, goster: ["ti"] },
            { metin: "==İstekler %30==: dışarıda yemek, konser, abonelik = 8.400 TL.", set: { s: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 8.4], [2.65, 8.4]] } }, goster: ["ts"] },
            { metin: "==Birikim %20==: acil durum fonu, emeklilik, hedef birikim = 5.600 TL. 14.000 + 8.400 + 5.600 = 28.000.", set: { b: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 5.6], [3.65, 5.6]] } }, goster: ["tb"] }
          ] },
        { tip: "ornek", baslik: "Harçlık ve yarı zamanlı iş: öğrenci bütçesi", durum: "Bir lise öğrencisinin aylık geliri harçlığıyla birlikte 2.000 TL. Bunu 50/30/20 ile nasıl paylaştırır?",
          adimlar: ["İhtiyaç: 2.000 × %50 = 1.000 TL (ulaşım, öğle yemeği).", "İstek: 2.000 × %30 = 600 TL (sinema, oyun).", "Birikim: 2.000 × %20 = 400 TL.", "Toplam = 1.000 + 600 + 400 = 2.000 TL."],
          sonuc: "==1.000 / 600 / 400 TL==. Gelir değişse oranlar aynı kalır." },
        { tip: "tuzak", baslik: "Önce birikim, sonra harcama", metin: "Birikimi sona bırakırsan çoğu zaman kalmaz.", yanlis: "Önce harcarım, ay sonunda kalanı biriktiririm.", dogru: "Birikimi ==maaş geldiği gün== ayırmak (otomatik havale ya da bordro kesintisi) en güvenilir yoldur. Gelir düzensizse ya da kira çok yüksekse oranlar kayabilir; kural katı değil, rehberdir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Beş vergi türü: *income tax* (gelir), *capital gains tax* (genelde daha düşük oranlı, aynı beyannameyle), *payroll taxes*, *property tax* (mülk değeri), *sales tax* (satıcı toplar, müşteri öder).",
            "İşveren maaştan gelir vergisi keser; yıl sonu beyanıyla fark ödenir ya da iade alınır. Serbest çalışan vergisini kendisi öder.",
            "Bordro vergilerinin yarısını işveren öder; serbest çalışan ve sözleşmeli tamamını kendisi öder.",
            "Gelir vergisi ilerlemelidir: yüksek gelir yüksek oran öder, ama yalnızca üst dilime giren kısım yüksek oranla vergilenir (250.000 TL gelirde 45.000 TL vergi, etkin oran %18).",
            "*Deduction* vergilendirilen geliri azaltır (tasarruf = tutar × oran); *credit* ödenecek vergiyi doğrudan azaltır. İki kişinin vergisi gelire, indirime ve krediye göre farklıdır.",
            "Bordro: brüt gelir − zorunlu kesintiler (gelir vergisi, bordro vergileri) − isteğe bağlı kesintiler (sigorta, emeklilik, aidat) = net gelir.",
            "*Pretax deduction* vergilendirilen geliri azaltır; emeklilik gibi tasarrufu teşvik eder (40.000 TL brütte 200 TL vergi tasarrufu).",
            "Bütçe net gelirden başlar. 50/30/20: %50 ihtiyaç, %30 istek, %20 birikim (28.000 TL netten 14.000 / 8.400 / 5.600).",
            "Birikimi önce ayır; oranlar rehberdir, kişiye göre değişebilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir ülkede gelir vergisi dilimleri şöyledir: ilk 100.000 TL için %10, sonraki 100.000 TL için %20, 200.000 TL üstü için %30. Yıllık geliri 250.000 TL olan birinin ödeyeceği vergi kaç TL'dir?",
      opts: ["75.000", "45.000", "50.000", "25.000"],
      a: 1,
      why: "Her dilim kendi oranıyla vergilenir: 100.000 × %10 = 10.000; 100.000 × %20 = 20.000; 50.000 × %30 = 15.000. Toplam 45.000 TL. 75.000, bütün geliri %30 ile vergilemektir (en çekici yanlış şık); 50.000 ise bütün geliri %20 ile vergilemektir." },
    { q: "Vergilendirilen gelirinin son diliminde %20 vergi oranı olan bir kişi, 10.000 TL'lik bir bağış (vergi indirimi) yapıyor ve ayrıca 1.000 TL'lik bir vergi kredisine hak kazanıyor. Toplam vergi tasarrufu kaç TL olur?",
      opts: ["11.000", "10.000", "1.000", "3.000"],
      a: 3,
      why: "İndirim vergilendirilecek geliri azaltır: 10.000 × %20 = 2.000 TL tasarruf. Kredi vergiyi doğrudan azaltır: 1.000 TL. Toplam 3.000 TL. 11.000, indirimi doğrudan vergi düşüşü saymaktır; en çekici yanlış şıktır." },
    { q: "Tabloda bir çalışanın aylık maaş bordrosu veriliyor. Çalışanın net geliri kaç TL'dir?",
      fig: { type: "table", caption: "Aylık bordro", head: ["Kalem", "Tutar (TL)"], rows: [["Brüt gelir", "30.000"], ["Bordro vergileri (zorunlu)", "4.500"], ["Gelir vergisi (zorunlu)", "3.000"], ["Emeklilik katkısı (isteğe bağlı, vergi öncesi)", "1.500"]] },
      opts: ["21.000", "22.500", "25.500", "24.000"],
      a: 0,
      why: "Net gelir = brüt − zorunlu − isteğe bağlı = 30.000 − 4.500 − 3.000 − 1.500 = 21.000 TL. 22.500, emeklilik katkısını unutmaktır; 25.500 yalnızca bordro vergilerini düşmektir. İsteğe bağlı kesinti de net geliri azaltır, ama paranın bir kısmı birikime gider." },
    { q: "Aşağıdaki vergilerden hangisi bir ürünün satış fiyatına bağlıdır ve genellikle satıcı işletme tarafından toplanıp devlete ödenir?",
      opts: ["Mülk vergisi (*property tax*)", "Sermaye kazancı vergisi (*capital gains tax*)", "Satış vergisi (*sales tax*)", "Bordro vergisi (*payroll tax*)"],
      a: 2,
      why: "Satış vergisi, satış fiyatına bağlıdır ve satıcı tarafından toplanıp devlete yatırılır. Mülk vergisi mülkün değerine, sermaye kazancı vergisi varlık satışındaki kâra, bordro vergisi maaşa bağlıdır." },
    { q: "Ece'nin aylık net geliri 20.000 TL. Bu ay ihtiyaçlara 11.000 TL, isteklere 6.000 TL harcadı ve 3.000 TL biriktirdi. 50/30/20 kuralıyla karşılaştırıldığında hangi ifade doğrudur?",
      opts: ["İhtiyaçlar hedefin altında, birikim hedefin üstünde.", "İhtiyaçlar hedefin 1.000 TL üstünde, birikim hedefin 1.000 TL altında; istekler hedefte.", "Üç kalem de hedefte.", "İstekler hedefin üstünde, birikim hedefte."],
      a: 1,
      why: "Hedefler: ihtiyaç 10.000, istek 6.000, birikim 4.000 TL. Ece'nin ihtiyaç harcaması 11.000 (1.000 fazla), istek 6.000 (hedefte), birikim 3.000 (1.000 eksik). İlk şık ilişkiyi ters kurar." }
  ]
};
