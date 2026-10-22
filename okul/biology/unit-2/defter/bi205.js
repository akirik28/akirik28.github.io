/* Kitora not defteri · bi205 · 2.5 Hava Kirliliği ve Asit Yağmuru
   Kaynak: okul-10-2025-26.md (Biology Tema 2) + MEB Maarif BİY.10.2. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi205",
  amac: "Havayı kirleten başlıca maddeleri, iki tür smogu, asit yağmurunun kimyasını ve etkilerini, ozon tabakasının neden incelip nasıl toparlandığını öğreneceksin. pH hesabı ve grafik yorumlama da var.",
  bolumler: [
    {
      baslik: "Hava kirleticileri",
      kisa: "Her kirleticinin kaynağı, etkisi ve önlemi farklıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Başlıca hava kirleticileri", head: ["Kirletici", "Başlıca kaynak", "Etki"],
          rows: [
            ["Karbon monoksit (CO)", "Eksik yanma: egzoz, bacası tıkalı soba", "Hemoglobine oksijenden çok daha güçlü bağlanır; dokular oksijensiz kalır"],
            ["Kükürt dioksit (SO₂)", "Kömür ve fuel-oil yakan santral, sanayi, kalitesiz ısınma yakıtı", "Solunum yolu tahrişi; asit yağmuru"],
            ["Azot oksitler (NOₓ)", "Araç motorları (yüksek sıcaklıkta N₂ ile O₂ birleşir), termik santral", "Solunum sorunları; asit yağmuru ve smog"],
            ["Partikül madde (PM10, PM2.5)", "Yanma, trafik, inşaat tozu", "2,5 µm'den küçük taneler akciğerin derinine ve kana ulaşır: astım, kalp ve akciğer hastalığı"],
            ["Uçucu organik bileşikler (VOC)", "Boya, çözücü, benzin buharı", "Smogun öncülü; benzen gibi bazıları kanserojen"],
            ["Yer seviyesi ozon (O₃)", "Doğrudan salınmaz; NOₓ ve VOC güneşte tepkimeye girerek oluşur", "Akciğer tahrişi, bitki hasarı"]
          ], not: "Önlemler: filtre ve baca gazı arıtma, katalitik konvertör, kaliteli yakıt, toplu taşıma, doğal gaz ve yenilenebilir enerji." },
        { tip: "ikili", sol: { ikon: "🏭", baslik: "*Primary pollutant*", maddeler: ["Kaynaktan doğrudan havaya karışır", "CO, SO₂, NOₓ, is"] },
          sag: { ikon: "⚗️", baslik: "*Secondary pollutant*", maddeler: ["Havada tepkimeyle oluşur", "Yer seviyesi ozon, sülfürik ve nitrik asit"] },
          oyun: [
            { metin: "Egzozdan çıkan CO.", cevap: "sol", neden: "Doğrudan salınır: *primary*." },
            { metin: "NO₂ ile VOC'lerin güneş ışığında tepkimesinden oluşan ozon.", cevap: "sag", neden: "Havada oluşuyor: *secondary*." },
            { metin: "Bacadan çıkan SO₂.", cevap: "sol", neden: "Kaynaktan çıkan gaz: *primary*." },
            { metin: "Havadaki SO₂'nin yükseltgenip H₂SO₄ olması.", cevap: "sag", neden: "Yeni bir madde oluştu: *secondary*." },
            { metin: "Kömür sobasının dumanındaki kurum parçacıkları.", cevap: "sol", neden: "Doğrudan yanmadan çıkar: *primary*." }
          ] },
        { tip: "not", metin: "Kış aylarında kalitesiz kömürle ısınma, kentlerde SO₂ ve PM10'u yükselten önemli bir kaynaktır. Kapalı ortamda da risk vardır: bacası tıkalı soba ya da şofben, ==kokusuz== bir gaz olan CO zehirlenmesine yol açar." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Carbon monoxide binds to hemoglobin and reduces the oxygen-carrying capacity of the blood.*", metin: "CO etkisi." },
            { ikon: "✍️", baslik: "*Primary pollutants are released directly, whereas secondary pollutants form in the atmosphere.*", metin: "Birincil ve ikincil ayrımı." }
          ] }
      ]
    },
    {
      baslik: "İki tür smog ve termal inversiyon",
      kisa: "Klasik smog soğukta kömür dumanından, fotokimyasal smog güneşte egzozdan oluşur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌫️", baslik: "*Classic smog*", maddeler: ["Soğuk, nemli kış havası", "Kömür ve fuel-oil: SO₂ + is + sis", "Örnek: Londra, 1952"] },
          sag: { ikon: "🌇", baslik: "*Photochemical smog*", maddeler: ["Sıcak, güneşli yaz günü", "Egzoz: NOₓ + VOC + güneş ışığı → ozon, PAN", "Kahverengi-sarımsı sis, göz yanması"] },
          oyun: [
            { metin: "Kışın kömür sobalarından çıkan SO₂ ve isin sisle karışması.", cevap: "sol", neden: "Kömür, soğuk, nem: *classic smog*." },
            { metin: "Yaz öğleden sonra yoğun trafikte egzoz gazlarının güneşle tepkimesi.", cevap: "sag", neden: "Işıkla tetikleniyor: *photochemical smog*." },
            { metin: "1952'de Londra'da binlerce kişinin ölümüne yol açan sis.", cevap: "sol", neden: "Kömür dumanı ve sis: *classic smog*." },
            { metin: "Havada ozon ve PAN gibi oksitleyici maddelerin birikmesi.", cevap: "sag", neden: "Işıkla oluşan oksidanlar: *photochemical smog*." }
          ] },
        { tip: "grafik", baslik: "Termal inversiyon: kirliliği hapseden tavan", xlabel: "Sıcaklık", ylabel: "Yükseklik", xmax: 10, ymax: 10,
          yticks: [{ v: 0.5, label: "yer" }, { v: 9, label: "yüksek" }],
          ogeler: [
            { id: "nor", tip: "cizgi", renk: 0, from: [7.5, 0.5], to: [2.5, 9], etiket: "normal", gizli: true },
            { id: "yuk", tip: "ok", renk: 2, from: [8.3, 1.2], to: [8.3, 4.8], gizli: true },
            { id: "yt", tip: "yazi", x: 8.4, y: 5.4, metin: "kirletici dağılır", gizli: true },
            { id: "inv", tip: "egri", renk: 3, etiket: "inversiyon", noktalar: [[3, 0.5], [4, 2], [6, 4], [7, 4.8], [6, 6.5], [3.5, 9]], gizli: true },
            { id: "kapak", tip: "yazi", x: 7.4, y: 5.5, metin: "sıcak tabaka (kapak)", gizli: true },
            { id: "soguk", tip: "yazi", x: 2.3, y: 1.2, metin: "soğuk hava", hiza: "start", gizli: true },
            { id: "hapis", tip: "ok", renk: 3, from: [1.6, 0.8], to: [1.6, 3.9], gizli: true },
            { id: "ht", tip: "yazi", x: 1.6, y: 4.5, metin: "kirletici hapsolur", gizli: true }
          ],
          durumlar: [
            { metin: "Normal durumda yere yakın hava en sıcaktır ve yükseldikçe soğur. Isınan hava ==yükselir== ve kirleticileri dağıtır.", goster: ["nor", "yuk", "yt"] },
            { metin: "==Termal inversiyonda== sıcaklık bir yüksekliğe kadar ==artar==: altta soğuk, üstte sıcak bir tabaka vardır.", gizle: ["nor", "yuk", "yt"], goster: ["inv", "kapak", "soguk"] },
            { metin: "Soğuk hava ağırdır ve sıcak tabakanın altında kalır. Karışma ve yükselme olmaz; ==kirleticiler yer seviyesinde birikir==.", goster: ["hapis", "ht"] },
            { metin: "Rüzgârsız, açık kış gecelerinde, vadi ve çanak şeklindeki kentlerde (örn. Ankara) sık görülür." }
          ] },
        { tip: "tuzak", metin: "İnversiyon ismi ters sıcaklık profilinden gelir.", yanlis: "İnversiyonda sıcak hava yükselerek kirliliği uzaklaştırır.", dogru: "Tam tersi: ==üstte sıcak, altta soğuk== hava vardır; hava karışmaz ve kirletici yerde hapsolur." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*During a thermal inversion, a layer of warm air traps pollutants near the ground.*", metin: "İnversiyon açıklaması." },
            { ikon: "✍️", baslik: "*Photochemical smog forms when sunlight reacts with nitrogen oxides and VOCs.*", metin: "Fotokimyasal smog." }
          ] }
      ]
    },
    {
      baslik: "Asit yağmuru nasıl oluşur?",
      kisa: "SO₂ ve NOₓ suda çözünüp sülfürik ve nitrik asit olur; yağmurun pH'ı düşer.",
      bloklar: [
        { tip: "adimlar", baslik: "Kaynaktan yağmura", adimlar: [
            { baslik: "Salınım", metin: "Kömür ve fuel-oil yakan santral ve sanayiden ==SO₂==, araç motorlarından ve santrallerden ==NO / NO₂== havaya karışır." },
            { baslik: "Havada yükseltgenme", metin: "2SO₂ + O₂ → 2SO₃. NO da yükseltgenip NO₂ olur." },
            { baslik: "Suyla tepkime", metin: "SO₃ + H₂O → H₂SO₄ (sülfürik asit). 3NO₂ + H₂O → 2HNO₃ + NO (nitrik asit)." },
            { baslik: "Çökelme", metin: "Asitler yağmur, kar, sis olarak (*wet deposition*) ya da asidik toz olarak (*dry deposition*) yere iner." },
            { baslik: "Taşınma", metin: "Rüzgâr kirleticiyi yüzlerce kilometre taşır; asit yağmuru kaynağından uzak bir ülkede de görülebilir." }
          ] },
        { tip: "ornek", baslik: "pH 1 birim farkı kaç kat?", durum: "Temiz yağmurun pH'ı yaklaşık 5,6, bir asit yağmurunun pH'ı 4,6'dır. Asit yağmurunun H⁺ derişimi temiz yağmurunkinden kaç kat fazladır?",
          adimlar: [
            "pH = −log[H⁺] olduğundan [H⁺] = 10⁻ᵖᴴ.",
            "Temiz yağmur: [H⁺] = 10⁻⁵·⁶. Asit yağmuru: [H⁺] = 10⁻⁴·⁶.",
            "Oran = 10⁻⁴·⁶ ÷ 10⁻⁵·⁶ = 10¹ = 10.",
            "pH 3,6 olsaydı fark 2 birim, yani 10² = 100 kat olurdu."
          ], sonuc: "pH 1 birim düşünce [H⁺] 10 kat artar: asit yağmuru 10 kat daha asidiktir. *The acid rain is ten times more acidic.*" },
        { tip: "tuzak", metin: "Temiz yağmur bile hafif asidiktir.", yanlis: "Temiz yağmurun pH'ı 7'dir; asit yağmurunu CO₂ yapar.", dogru: "Atmosferdeki CO₂ suda çözünüp zayıf karbonik asit oluşturduğu için temiz yağmurun pH'ı ==≈ 5,6==dır. Asit yağmuru bunun altındadır ve asıl sorumlular ==SO₂ ve NOₓ==." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Acid rain forms when sulfur dioxide and nitrogen oxides dissolve in water to form sulfuric and nitric acids.*", metin: "Oluşum cümlesi." },
            { ikon: "✍️", baslik: "*Acid rain has a pH lower than 5.6.*", metin: "Tanım." }
          ] }
      ]
    },
    {
      baslik: "Asit yağmurunun etkileri ve çözümler",
      kisa: "Asit yağmuru gölü, toprağı, ormanı ve yapıları aşındırır.",
      bloklar: [
        { tip: "tablo", baslik: "Neleri bozar?", head: ["Alan", "Ne olur?"],
          rows: [
            ["Göller", "pH düşer; balık yumurtaları çatlamaz, yetişkin balıklar ölür; toprak, zararlı alüminyumu suya karıştırır"],
            ["Toprak", "Kalsiyum ve magnezyum gibi besin mineralleri yıkanır; kökler zarar görür"],
            ["Orman", "Yapraklar zarar görür, ağaçlar zayıflar, hastalıklara açık hâle gelir"],
            ["Yapılar", "Kireçtaşı ve mermer aşınır: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂. Metaller paslanır"],
            ["İnsan", "SO₂ ve NOₓ solunum yolu hastalıklarını artırır"]
          ] },
        { tip: "grafik", baslik: "Göl pH'ı düşerse (şematik grafik)", xlabel: "Gölün pH'ı", ylabel: "Tür sayısı", xmax: 8, ymax: 10,
          xticks: [{ v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }],
          ogeler: [
            { id: "g", tip: "egri", renk: 0, noktalar: [[3, 0.2], [4, 1], [4.5, 2.5], [5, 5], [5.5, 7], [6, 8.5], [7, 9.5], [8, 9.6]], gizli: true },
            { id: "p6", tip: "nokta", renk: 1, x: 6, y: 8.5, etiket: "pH 6", kilavuz: true, gizli: true },
            { id: "p5", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "pH 5", kilavuz: true, gizli: true },
            { id: "p4", tip: "nokta", renk: 3, x: 4, y: 1, etiket: "pH 4", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Göl pH'ı 6'dan yukarıda iken çok sayıda tür yaşar.", goster: ["g", "p6"] },
            { metin: "pH ==5==: hassas türler (bazı yumurtalar, böcek larvaları, salyangozlar) kaybolur; tür sayısı hızla azalır.", goster: ["p5"] },
            { metin: "pH ==4==: çoğu balık ve omurgasız yok olur; göl berrak ama ==cansız== görünür.", goster: ["p4"] }
          ] },
        { tip: "not", metin: "Önlemler: baca gazından SO₂'yi kireçtaşıyla tutan arıtma sistemleri, düşük kükürtlü yakıt, katalitik konvertör (NOₓ → N₂), yenilenebilir enerji ve toplu taşıma. Asitleşmiş göllere kireç atmak geçici çözümdür; asıl çözüm kaynağı azaltmaktır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The graph shows that the number of species decreases as the pH of the lake decreases.*", metin: "Grafik yorumu." },
            { ikon: "✍️", baslik: "*Acid rain damages limestone buildings because acids react with calcium carbonate.*", metin: "Yapılara etki." }
          ] }
      ]
    },
    {
      baslik: "Ozon: iyi ve kötü",
      kisa: "Stratosferdeki ozon UV'yi süzer; yer seviyesindeki ozon kirleticidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛡️", terim: "Ozone layer", tr: "ozon tabakası", tanim: "Stratosferde ozonun (O₃) yoğun olduğu kuşak. UV-C'nin tamamını, UV-B'nin büyük kısmını tutar.", ornek: "Güneş ışığıyla gelen UV'nin yere ulaşan miktarını düşürür." },
            { ikon: "☀️", terim: "Ultraviolet radiation", tr: "mor ötesi ışın", tanim: "UV-B hücrelerde DNA'ya zarar verir: cilt kanseri, göz merceğinde katarakt, plankton ve bitkilerde büyüme kaybı.", ornek: "Ozon incelince kutuplara yakın bölgelerde UV-B artar." }
          ] },
        { tip: "ikili", sol: { ikon: "🛡️", baslik: "*Stratospheric ozone*", maddeler: ["Yerden yaklaşık 15–35 km yukarıda", "Zararlı UV'nin çoğunu tutar", "Korunması gerekir"] },
          sag: { ikon: "😷", baslik: "*Ground-level ozone*", maddeler: ["Troposferde, yer seviyesinde", "Fotokimyasal smogun bileşeni", "Akciğere ve bitkiye zararlı"] },
          oyun: [
            { metin: "Güneşin zararlı UV-B ışınlarının büyük kısmını tutar.", cevap: "sol", neden: "Koruyucu tabaka: *stratospheric ozone*." },
            { metin: "Trafik yoğun, güneşli yaz günü şehir havasında artar.", cevap: "sag", neden: "Smogun parçası: *ground-level ozone*." },
            { metin: "Astım krizini tetikler.", cevap: "sag", neden: "Soluduğumuz hava: *ground-level ozone*." },
            { metin: "CFC'lerle incelir.", cevap: "sol", neden: "Stratosferde klor ile tepkimeye girer: *stratospheric ozone*." },
            { metin: "Azalırsa cilt kanseri ve katarakt riski artar.", cevap: "sol", neden: "UV süzgeci azalır: *stratospheric ozone*." }
          ] },
        { tip: "tuzak", metin: "Ozon deliği ile küresel ısınma sık karıştırılır.", yanlis: "Ozon tabakasının incelmesi küresel ısınmanın başlıca nedenidir.", dogru: "Ozon incelmesi ==UV-B'nin yere ulaşmasını== artırır. Küresel ısınma ise ==sera gazlarıyla== ilgilidir. İki ayrı sorundur (CFC'ler ikisine de katkı yapar, ama konular farklıdır)." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The ozone layer absorbs most of the harmful ultraviolet radiation from the Sun.*", metin: "Ozon tabakasının görevi." },
            { ikon: "✍️", baslik: "*Ground-level ozone is a secondary pollutant that damages the lungs.*", metin: "Yer seviyesi ozon." }
          ] }
      ]
    },
    {
      baslik: "Ozon tabakası neden incelir?",
      kisa: "CFC'lerden kopan klor atomu, ozonu tekrar tekrar parçalar.",
      bloklar: [
        { tip: "adimlar", baslik: "Bir klor atomu nasıl ozon avlar?", adimlar: [
            { baslik: "CFC yükselir", metin: "Soğutucu ve spreylerde kullanılan *CFC* (kloroflorokarbon) çok kararlıdır; parçalanmadan stratosfere ulaşır." },
            { baslik: "UV klor koparır", metin: "Güçlü UV ışını CFC'yi parçalar ve serbest klor atomu (Cl) çıkar." },
            { baslik: "Ozon parçalanır", metin: "Cl + O₃ → ClO + O₂. Ozon oksijen molekülüne dönüşür, UV'yi artık tutamaz." },
            { baslik: "Klor geri döner", metin: "ClO + O → Cl + O₂. Klor harcanmaz; bir ==katalizör== gibi çalışır, yani tek bir klor atomu binlerce ozon molekülünü parçalayabilir." },
            { baslik: "Antarktika'da delik", metin: "Çok soğuk kutup kışında oluşan bulutlar klorun etkinliğini artırır. İlkbahar güneşiyle (Eylül–Ekim) ozon belirgin biçimde azalır: *ozone hole*. İlk kez 1985'te raporlandı." }
          ] },
        { tip: "grafik", baslik: "Stratosferdeki klor ve Montreal Protokolü (şematik)", xlabel: "Yıl", ylabel: "Stratosferde ozonu bozan klor", xmax: 10, ymax: 10,
          xticks: [{ v: 0, label: "1950" }, { v: 2, label: "1980" }, { v: 4, label: "2010" }, { v: 6, label: "2040" }, { v: 8, label: "2070" }],
          ogeler: [
            { id: "art", tip: "egri", renk: 3, noktalar: [[0, 0.5], [1, 1.5], [2, 5], [3, 9], [3.2, 9.1]], gizli: true },
            { id: "mp", tip: "cizgi", renk: 1, kesik: true, from: [2.5, 0], to: [2.5, 10], gizli: true },
            { id: "mpt", tip: "yazi", x: 2.6, y: 9.7, hiza: "start", metin: "Montreal 1987", gizli: true },
            { id: "az", tip: "egri", renk: 2, noktalar: [[3.2, 9.1], [4, 8.2], [5, 6.5], [6, 4.8], [7, 3.2], [8, 2], [9, 1.2]], gizli: true }
          ],
          durumlar: [
            { metin: "CFC kullanımı arttıkça stratosferdeki klor miktarı hızla yükselir.", goster: ["art"] },
            { metin: "1987'de ==Montreal Protokolü== ile CFC üretimi aşamalı olarak durduruldu.", goster: ["mp", "mpt"] },
            { metin: "CFC'ler onlarca yıl atmosferde kaldığı için klor 1990'lardan sonra yavaş yavaş azalır. Ozon tabakasının yüzyılın ortalarına doğru toparlanması, Antarktika deliğinin ise 2060'larda kapanması bekleniyor.", goster: ["az"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Chlorine atoms from CFCs act as catalysts that break down ozone molecules in the stratosphere.*", metin: "Mekanizma." },
            { ikon: "✍️", baslik: "*The Montreal Protocol (1987) phased out the production of substances that deplete the ozone layer.*", metin: "Uluslararası anlaşma." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "CO hemoglobine bağlanır; SO₂ ve NOₓ asit yağmurunun, NOₓ ve VOC smogun ana kaynağıdır; PM2.5 akciğere işler.",
            "Birincil kirletici doğrudan salınır, ikincil kirletici havada oluşur (yer seviyesi ozon).",
            "Klasik smog: kış, kömür, SO₂. Fotokimyasal smog: yaz, trafik, NOₓ + VOC + güneş → ozon.",
            "Termal inversiyonda üstte sıcak tabaka kirleticiyi yerde hapseder.",
            "Asit yağmuru: SO₂ → H₂SO₄, NO₂ → HNO₃; pH < 5,6. Temiz yağmur CO₂ yüzünden ≈ 5,6'dır.",
            "pH 1 birim = H⁺ derişimi 10 kat.",
            "Asit yağmuru göl, toprak, orman ve kireçtaşı yapıları bozar.",
            "Stratosferik ozon UV'yi tutar (iyi), yer seviyesi ozon kirleticidir (kötü). CFC'deki klor ozonu katalizör gibi parçalar; Montreal Protokolü (1987) CFC'yi sonlandırdı."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir bölgede asit yağmurunun pH'ı 4,6, temiz yağmurun pH'ı 5,6 ölçülmüştür. Asit yağmurunun H⁺ derişimi temiz yağmurunkinden kaç kat fazladır?",
      opts: ["1 kat", "10 kat", "100 kat", "10 kat daha az"],
      a: 1,
      why: "pH logaritmik bir ölçektir: 1 birim fark, H⁺ derişiminde 10 kat farktır. pH daha düşük olduğundan derişim fazladır; son şık yönü ters alır."
    },
    {
      q: "Tabloda bir gölün pH'ı ile gölde yaşayan tür sayısı verilmiştir. Tabloya göre hangi çıkarım doğrudur?",
      fig: { type: "table", head: ["Göl pH'ı", "7,0", "6,0", "5,0", "4,0"], rows: [["Tür sayısı", 20, 18, 9, 1]], caption: "Göl pH'ı ve tür sayısı" },
      opts: ["pH düştükçe tür sayısı artmaktadır.", "En büyük tür kaybı pH 7'den 6'ya inerken olmuştur.", "pH 6'dan 4'e inildiğinde tür sayısı 18'den 1'e düşmüştür; asitliğe duyarlı türler kaybolmuştur.", "Göl pH 4'te bile aynı tür sayısını korumaktadır."],
      a: 2,
      why: "pH 6'dan 4'e inerken tür sayısı 18'den 1'e düşüyor, yani asitleşme türleri ortadan kaldırıyor. pH 7'den 6'ya düşüşte yalnızca 2 tür kaybedilmiştir, bu yüzden ikinci şık yanlıştır."
    },
    {
      q: "Haziranda öğleden sonra güneşli ve trafiğin yoğun olduğu bir şehirde gözleri yakan kahverengi bir sis oluşmuştur. En olası açıklama hangisidir?",
      opts: ["Kış smogu: kömür dumanı ve SO₂", "Fotokimyasal smog: NOₓ ve VOC'lerin güneş ışığıyla tepkimesi", "Asit yağmuru: yağmur suyunda karbonik asit", "Ozon tabakasının incelmesi: CFC"],
      a: 1,
      why: "Yaz, güneş ve trafik: egzozdaki NOₓ ile VOC'ler ışıkla tepkimeye girip ozon ve oksitleyici maddeler oluşturur (fotokimyasal smog). Kömür dumanı ve SO₂ kış smoguna aittir."
    },
    {
      q: "CFC'lerin ozon tabakasını incelttiğini anlatan hangi ifade doğrudur?",
      opts: ["UV ışığıyla CFC'den kopan klor atomu ozonu parçalar ve tepkimede harcanmayıp yeniden kullanılır.", "CFC'ler CO₂ gibi ısıyı tutarak ozonu eritir.", "CFC'ler ozonla birleşip kalıcı bir bileşik oluşturur ve tükenir.", "CFC'ler asit yağmuru oluşturarak ozonu parçalar."],
      a: 0,
      why: "Klor atomu bir katalizör gibi çalışır: Cl + O₃ → ClO + O₂ ve ClO + O → Cl + O₂. Bu yüzden tek bir atom çok sayıda ozonu bozar. İkinci şık ozon incelmesi ile küresel ısınmayı karıştırıyor."
    },
    {
      q: "Rüzgârsız bir kış gecesinde vadideki bir şehirde sıcaklık yükseklikle tabloda gösterildiği gibi değişmektedir. Bu durum ve sonucu hangisidir?",
      fig: { type: "table", head: ["Yükseklik (m)", "0", "100", "200", "300", "400"], rows: [["Sıcaklık (°C)", 2, 4, 6, 8, 5]], caption: "Yükseklikle sıcaklık değişimi" },
      opts: ["Normal profil; kirleticiler yükselir ve dağılır.", "Asit yağmuru; yağmurun pH'ı düşer.", "Termal inversiyon; kirleticiler yukarı çıkarak atmosfere dağılır.", "Termal inversiyon; soğuk hava altta kaldığı için kirleticiler yer seviyesinde birikir."],
      a: 3,
      why: "Sıcaklık 300 m'ye kadar yükseklikle artıyor: yerdeki soğuk hava, üstündeki sıcak tabakanın altında kalıyor (inversiyon). Hava karışmadığı için kirletici yerde hapsolur. Normal profilde sıcaklık yükseldikçe azalırdı."
    }
  ]
};
