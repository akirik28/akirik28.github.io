/* Kitora not defteri · st113 · 1G-1 Rastgele Örnekleme Yöntemleri
   Kaynak: ap-videolar/src/episodes/st113 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st113",
  amac: "Bu konu hepsine soramayınca örneklemi şansla nasıl seçeceğini anlatıyor. Dört yöntemi (*SRS*, *stratified*, *cluster*, *systematic*), *strata* ile *cluster* farkını ve her yöntemin avantajını ve tuzağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Hepsine soramazsan: dört rastgele yöntem",
      kisa: "Tek adil yol, seçimi şansa bırakmaktır.",
      bloklar: [
        { tip: "ikili", ayirici: "vs",
          sol: { ikon: "👀", baslik: "Seçen insan", maddeler: ["Arkadaşlarını seçmek: hepsi sana benzer", "Gözüne kestirmek: farkında olmadan taraf tutarsın", "Önyargılı örneklem"] },
          sag: { ikon: "🎲", baslik: "Seçen şans", maddeler: ["Zar, rastgele sayı üreteci", "İnsan değil şans karar verir", "Adil örneklem"] },
          oyun: [
            { metin: "600 öğrenciden en yakın arkadaşlarına sormak.", cevap: "sol", neden: "Seçimi sen yaptın, hepsi sana benziyor." },
            { metin: "Rastgele sayı üreteciyle numara çekmek.", cevap: "sag", neden: "Seçimi şans yapıyor." },
            { metin: "Koridorda gözüne iyi gelenleri durdurmak.", cevap: "sol", neden: "Göz kestirmek bilinçsiz taraf tutmaktır." },
            { metin: "Öğrenci listesinden zarla numara seçmek.", cevap: "sag", neden: "Seçim şansa bırakılmış." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "1️⃣", baslik: "*Simple random sample* (*SRS*)", metin: "Her olası grup eşit şansa sahip." },
            { ikon: "2️⃣", baslik: "*Stratified random sample*", metin: "Gruplara ayır, her gruptan ayrı *SRS* al." },
            { ikon: "3️⃣", baslik: "*Cluster random sample*", metin: "Gruplara ayır, rastgele birkaç grubun tamamını al." },
            { ikon: "4️⃣", baslik: "*Systematic random sample*", metin: "Rastgele başlangıç, sonra her k'ıncı kişi." }
          ] }
      ]
    },
    {
      baslik: "*Simple random sample* (*SRS*)",
      kisa: "SRS'te her olası n'li grubun seçilme şansı eşittir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Simple random sample (SRS)", tr: "basit rastgele örneklem", tanim: "n büyüklüğündeki ==her olası grubun== seçilme şansının eşit olduğu örneklem. “Every possible sample of size n has an equal chance of being chosen.”", ornek: "600 öğrenciden 40'lık her olası grup eşit şansa sahip." }
          ] },
        { tip: "sekil", baslik: "5 kişiden 2'li olası gruplar", fig: { type: "table", rows: [["AB", "AC", "AD", "AE", "BC"], ["BD", "BE", "CD", "CE", "DE"]], caption: "A, B, C, D, E kişilerinden 2'li 10 olası grup: (5 × 4) ÷ 2 = 10. SRS'te her birinin şansı 1/10" } },
        { tip: "ornek", baslik: "Üç masa: eşit bireysel şans SRS yapmaz", durum: "12 kişi dörder kişilik üç masada oturuyor. Rastgele bir masa seçip masadakilerin hepsini alıyorsun.",
          adimlar: [
            "Her kişinin seçilme şansı: 1/3 (masa seçilirse hepsi seçilir). Herkes için eşit.",
            "Ama farklı masalardan iki kişi birlikte seçilemez: bu ikilinin şansı 0.",
            "SRS'te her olası grubun şansı eşit olmalıydı. Burada bazı gruplar (aynı masa) mümkün, bazıları (farklı masa) imkânsız.",
            "Sonuç: bireysel şans eşit ama SRS değil."
          ],
          sonuc: "Bu, SRS değil (aslında tek *cluster*'lı bir *cluster sample*). ==Eşit bireysel şans ≠ SRS.== SRS tanımında “each individual” değil, “every possible sample” yaz." }
      ]
    },
    {
      baslik: "*SRS* nasıl seçilir?",
      kisa: "Etiketle, rastgele sayı üret (tekrarları atla), seç.",
      bloklar: [
        { tip: "ornek", baslik: "Quidditch takımından 2 oyuncu", durum: "12 kişilik takımdan her hafta 2 oyuncu teste girecek. Oyuncular: 1 Chang, 2 Finnigan, 3 Longbottom, 4 Thomas, 5 Delacour, 6 Granger, 7 Lovegood, 8 Weasley, 9 Diggory, 10 Krum, 11 Potter, 12 Wood.",
          adimlar: [
            "*Label*: oyuncuları 1'den 12'ye numarala (yukarıdaki liste).",
            "*Randomize*: hesap makinesinde randInt(1,12) ile rastgele sayılar üret (TI-84: MATH → PRB → 5). Üretilen: 7, 7, 3. İkinci 7 tekrar: atla.",
            "*Select*: ilk iki farklı numara 7 ve 3: Lovegood ve Longbottom.",
            "Kaç olası ikili var? 12 × 11 = 132; sıra önemli değil, her ikili iki kez sayıldı: 132 ÷ 2 = 66. SRS'te her birinin şansı 1/66."
          ],
          sonuc: "“Label the players 1–12. Generate random integers from 1 to 12, ignoring repeats. Select the players with the first 2 different numbers.”" },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎰", terim: "randInt", tr: "rastgele tam sayı", tanim: "Verilen aralıkta rastgele tam sayı üretir; ==tekrar edebilir== (*with replacement*).", ornek: "randInt(1,12) → 7, 7, 3, …" },
            { ikon: "🔀", terim: "randIntNoRep", tr: "tekrarsız karışık sıra", tanim: "Aralıktaki bütün tam sayıları tekrarsız (*without replacement*), karışık sırada verir; ilk n tanesi örneklemdir.", ornek: "randIntNoRep(1,12) → {7 3 11 1 9 12 4 …}; ilk ikisi: 7 ve 3." },
            { ikon: "🎩", terim: "Şapka yöntemi", tr: "özdeş kâğıtlar", tanim: "12 özdeş kâğıdı şapkaya at, iyice karıştır, 2 tane çek.", ornek: "Kâğıtlar özdeş, karışım iyi olmalı." }
          ] },
        { tip: "tuzak", baslik: "Tekrarı atladığını yaz", metin: "*SRS* tekrarsız seçilir, ama üreteçler tekrar edebildiği için “ignoring repeats” yazmalısın.", yanlis: "“Generate random numbers from 1 to 12 and pick the first 2.” (tekrar edebilir)", dogru: "“Ignoring repeats” yaz, ya da randIntNoRep kullan." }
      ]
    },
    {
      baslik: "*Stratified random sample*",
      kisa: "Her gruptan ayrı SRS alınır; kazanç isabettir, yansızlık değil.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Stratified random sample", tr: "tabakalı rastgele örneklem", tanim: "Popülasyon *strata*'ya ayrılır, ==her== stratum'dan ayrı bir *SRS* seçilir ve birleştirilir.", ornek: "Dört sınıf düzeyinden her birinden 10 kişi." },
            { ikon: "🍰", terim: "Strata", tr: "tabakalar (tekili: stratum)", tanim: "İçi benzer (*similar within*), birbirinden farklı (*different between*), örtüşmeyen gruplar.", ornek: "9., 10., 11., 12. sınıflar: 150'şer kişi." }
          ] },
        { tip: "ornek", baslik: "Okul uyku anketi: stratified", durum: "600 öğrenci dört sınıf düzeyine bölünüyor (150'şer kişi). n = 40 olacak.",
          adimlar: ["*Strata*: dört sınıf düzeyi: 4 × 150 = 600.", "Her düzeyden ayrı bir *SRS*: 40 ÷ 4 = 10 kişi.", "Toplam: 10 + 10 + 10 + 10 = 40."],
          sonuc: "Her sınıf düzeyinden 10 kişi, toplam 40." },
        { tip: "grafik", baslik: "Stratified tahmin daha isabetli", xlabel: "Tahmin edilen ortalama uyku (saat)", ylabel: "Olasılık", xmax: 10, ymax: 10, xticks: [{ v: 5, label: "gerçek ortalama" }], yticks: [],
          ogeler: [
            { id: "mean", tip: "cizgi", renk: 1, kesik: true, etiket: "", from: [5, 0], to: [5, 9.5] },
            { id: "srs", tip: "egri", renk: 0, etiket: "SRS", noktalar: [[0.5, 0.2], [1.5, 0.8], [2.5, 2], [3.5, 3.8], [4.2, 4.6], [5, 5], [5.8, 4.6], [6.5, 3.8], [7.5, 2], [8.5, 0.8], [9.5, 0.2]] },
            { id: "str", tip: "egri", renk: 2, etiket: "Stratified", gizli: true, noktalar: [[0.5, 0], [1.5, 0], [2.5, 0.1], [3.5, 1.2], [4.2, 4], [5, 9], [5.8, 4], [6.5, 1.2], [7.5, 0.1], [8.5, 0], [9.5, 0]] }
          ],
          durumlar: [
            { metin: "*SRS* ile n = 40: tahminler gerçek ortalamanın etrafında geniş bir yelpazeye yayılır. Yansızdır ama dağınıktır." },
            { metin: "*Stratified* ile n = 40: her sınıf düzeyi temsil edilir, tahminler gerçek değere sıkışır. ==Daha az değişken → daha isabetli.==", goster: ["str"] }
          ] },
        { tip: "tuzak", baslik: "Stratified'ın amacı", metin: "*SRS* de yansızdır; stratified'ın kazancı tahminin **değişkenliğini azaltmak**, yani daha isabetli (*more precise*) olmaktır.", yanlis: "“Stratified sampling removes bias that SRS has.”", dogru: "“Stratified sampling gives a less variable (more precise) estimate because every group is represented.”" }
      ]
    },
    {
      baslik: "*Cluster random sample*",
      kisa: "Rastgele seçilen kümelerin herkesi alınır; ucuz ama risklidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚌", terim: "Cluster random sample", tr: "küme rastgele örneklemi", tanim: "Popülasyon *cluster*'lara ayrılır, rastgele ==bütün cluster'lar== seçilir ve seçilenlerin içindeki herkes örnekleme girer.", ornek: "20 servisten 2'si seçilir, içindeki 60 öğrencinin hepsine sorulur." },
            { ikon: "🧩", terim: "Cluster", tr: "küme", tanim: "Birbirine yakın bireylerden oluşan, örtüşmeyen grup. İdeali içi karışık (*heterogeneous*): popülasyonun küçük bir kopyası.", ornek: "Servis otobüsü: her sınıf düzeyinden öğrenci var." }
          ] },
        { tip: "ornek", baslik: "Okul uyku anketi: cluster", durum: "Okulun 20 servisi var, her birinde 30 öğrenci. Rastgele 2 servis seçilecek.",
          adimlar: ["*Cluster*'lar: servisler. 20 × 30 = 600.", "Rastgele 2 servis seç (ör. 6 ve 15).", "Seçilen servislerdeki herkese sor: 2 × 30 = 60 öğrenci."],
          sonuc: "60 öğrenci. 20 servisin listesi yeter; 600 kişilik liste gerekmez." },
        { tip: "ikili",
          sol: { ikon: "✅", baslik: "Avantaj", maddeler: ["Ucuz ve pratik", "Yalnızca iki otobüsün kapısında beklersin", "600 kişilik liste yerine 20 servis listesi"] },
          sag: { ikon: "⚠️", baslik: "Risk", maddeler: ["*Cluster*'lar birbirinden farklıysa temsil etmez", "Seçilen iki servis aynı uzak semtten olabilir", "*Stratified*'ın isabet avantajı yok"] },
          oyun: [
            { metin: "Araştırmacı 20 servisin hepsini gezmek yerine iki servisin kapısında bekliyor.", cevap: "sol", neden: "Ucuz ve pratik." },
            { metin: "Seçilen iki servis de aynı uzak semtten kalkıyor.", cevap: "sag", neden: "Küme okulun küçük kopyası değil." },
            { metin: "Sorulacak 600 kişilik tam öğrenci listesi gerekmiyor.", cevap: "sol", neden: "Yalnızca küme listesi (servisler) yeterli." },
            { metin: "Kümeler birbirinden çok farklı.", cevap: "sag", neden: "Temsil gücü düşer." }
          ] },
        { tip: "tuzak", baslik: "Cluster'da kısmi seçim yok", metin: "Seçilen kümeden birkaç kişi almak *cluster* değildir; seçilen kümenin tamamı alınır.", yanlis: "“Rastgele 2 servis seçtim, her birinden 10 öğrenci aldım.”", dogru: "Seçilen servislerin tamamı alınır (2 × 30 = 60)." }
      ]
    },
    {
      baslik: "*Strata* mı, *cluster* mı?",
      kisa: "Bütün gruplardan birkaç kişi stratified; birkaç grubun herkesi cluster.",
      bloklar: [
        { tip: "tablo", baslik: "AP'nin en sevdiği ayrım", head: ["", "*Strata* (stratified)", "*Clusters* (cluster)"], rows: [
            ["Grubun içi", "Benzer (*homogeneous*)", "Karışık (*heterogeneous*)"],
            ["Gruplar arası", "Farklı", "Birbirine benzer"],
            ["Ne alınır?", "HER gruptan BİRKAÇ kişi", "BİRKAÇ grubun HERKESİ"],
            ["Kazanç", "Daha isabetli tahmin", "Ucuz, pratik"]
          ], not: "Karar sorusu: bütün gruplardan seçim var mı? Evet → stratified. Yalnızca rastgele seçilen grupların herkesi mi alındı? Evet → cluster." },
        { tip: "ikili",
          sol: { ikon: "🧱", baslik: "*Stratified*", maddeler: ["Bütün gruplardan seçim var", "Her gruptan ayrı *SRS*", "Market zinciri: her şehirden rastgele 5 mağaza"] },
          sag: { ikon: "🚌", baslik: "*Cluster*", maddeler: ["Yalnızca seçilen gruplar", "Seçilen grubun herkesi", "Market zinciri: 3 şehir, oradaki bütün mağazalar"] },
          oyun: [
            { metin: "Her şehirden rastgele 5 mağaza seçildi.", cevap: "sol", neden: "Bütün şehirlerden (strata) birkaç mağaza: stratified." },
            { metin: "Rastgele 3 şehir seçildi, oradaki bütün mağazalar alındı.", cevap: "sag", neden: "Seçilen şehirlerin (cluster) herkesi: cluster." },
            { metin: "Her şubeden rastgele 3 çalışan seçildi.", cevap: "sol", neden: "Her gruptan birkaç kişi: stratified." },
            { metin: "Dört sınıf düzeyinden her birinden 10 öğrenci seçildi.", cevap: "sol", neden: "Her düzeyden bir SRS: stratified." }
          ] },
        { tip: "ornek", baslik: "Mini sınav: kafe zincirinin şubeleri", durum: "Bir kafe zincirinin 40 şubesi var. Yönetim rastgele 5 şube seçiyor ve oradaki bütün çalışanlara anket yapıyor. Bu hangi yöntem?",
          adimlar: ["Gruplar şubeler.", "Rastgele 5 şube seçildi, şubelerin tamamı alındı (bütün çalışanlar).", "Her şubeden birkaç çalışan seçilseydi *stratified* olurdu."],
          sonuc: "*Cluster random sample*: 5 şubenin tamamı, içindeki herkes." },
        { tip: "tuzak", baslik: "İki kavramı yer değiştirme", metin: "*Strata* içi benzer, arası farklı. *Cluster* içi karışık, arası benzer. Tam tersi dizilimler.", yanlis: "“Cluster'lar içi benzer gruplardır.”", dogru: "*Strata* içi benzer gruplardır; *cluster*'lar popülasyonun küçük kopyalarıdır." }
      ]
    },
    {
      baslik: "*Systematic random sample*",
      kisa: "Rastgele başlangıç seç, sonra her k'ıncı kişiyi al.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚪", terim: "Systematic random sample", tr: "sistematik rastgele örneklem", tanim: "Sıralı bir dizilimde ilk k bireyden biri rastgele seçilir, sonra her k'ıncı birey alınır. k = N ÷ n.", ornek: "Kapıdan giren 600 öğrenciden 40'ı." },
            { ikon: "🗳️", terim: "Exit poll", tr: "sandık çıkışı anketi", tanim: "Seçim günü sandıktan çıkan seçmenlerle yapılan anket. Önceden liste olmadığı için *systematic* yapılır.", ornek: "Anketör her k'ıncı seçmeni durdurur." }
          ] },
        { tip: "ornek", baslik: "Kapıdan giren 600 öğrenciden 40'ı", durum: "Öğrenciler tek sıra hâlinde kapıdan giriyor. Aralık k = N ÷ n = 600 ÷ 40 = 15.",
          adimlar: [
            "Aralık: k = 600 ÷ 40 = 15.",
            "1 ile 15 arasında rastgele bir sayı: randInt(1,15) → 7 olsun.",
            "Seçilenler: 7, 22, 37, 52, … (her seferinde +15).",
            "Son seçilen: 7 + 39 × 15 = 7 + 585 = 592. Toplam 40 kişi."
          ],
          sonuc: "7., 22., 37., …, 592. öğrenci: 40 kişi." },
        { tip: "grafik", baslik: "Rastgele başlangıç, sonra +15", xlabel: "Kapıdan giriş sırası", ylabel: "", xmax: 80, ymax: 4, xticks: [{ v: 7, label: "7" }, { v: 22, label: "22" }, { v: 37, label: "37" }, { v: 52, label: "52" }, { v: 67, label: "67" }], yticks: [],
          ogeler: [
            { id: "ln", tip: "cizgi", renk: 1, etiket: "", from: [0, 1.5], to: [80, 1.5] },
            { id: "r", tip: "cizgi", renk: 3, etiket: "", from: [15, 0.8], to: [15, 2.2], gizli: true },
            { id: "rt", tip: "yazi", x: 8, y: 3.1, metin: "ilk 15 kişi", gizli: true },
            { id: "n1", tip: "nokta", x: 7, y: 1.5, etiket: "7", gizli: true },
            { id: "n2", tip: "nokta", x: 22, y: 1.5, etiket: "22", gizli: true },
            { id: "n3", tip: "nokta", x: 37, y: 1.5, etiket: "37", gizli: true },
            { id: "n4", tip: "nokta", x: 52, y: 1.5, etiket: "52", gizli: true },
            { id: "n5", tip: "nokta", x: 67, y: 1.5, etiket: "67", gizli: true },
            { id: "k1", tip: "yazi", x: 14.5, y: 2.4, metin: "+15", gizli: true },
            { id: "k2", tip: "yazi", x: 29.5, y: 2.4, metin: "+15", gizli: true },
            { id: "k3", tip: "yazi", x: 44.5, y: 2.4, metin: "+15", gizli: true },
            { id: "k4", tip: "yazi", x: 59.5, y: 2.4, metin: "+15", gizli: true }
          ],
          durumlar: [
            { metin: "Kapıdan öğrenciler sırayla geçiyor. İlk k = 15 kişiden birini rastgele seçeceğiz.", goster: ["r", "rt"] },
            { metin: "Rastgele sayı 7 geldi: ilk seçilen 7. öğrenci.", goster: ["n1"] },
            { metin: "Bundan sonra her 15. kişi: 22, 37, 52, 67… Aralık sabit, yalnızca ilk adım rastgele.", goster: ["n2", "n3", "n4", "n5", "k1", "k2", "k3", "k4"] }
          ] },
        { tip: "tuzak", baslik: "Başlangıç rastgele, düzen çakışmasız", metin: "“İlk kişiden başla” dersen yöntem rastgele olmaz. Listedeki tekrarlayan düzen de aralıkla çakışmamalı: art arda üç haftanın günlük kayıtlarında her 7. kaydı alırsan hep haftanın aynı gününü (ör. cumartesiyi) seçersin.", yanlis: "“İlk kişiden başlayıp her 15. kişiyi aldım.” ya da “Her 7. kaydı al, sonuç temsil eder.”", dogru: "1 ile k arasında rastgele bir başlangıç seç; aralığın listedeki düzenle çakışmadığından emin ol." }
      ]
    },
    {
      baslik: "Acı sos fabrikası: üç yöntem, bir problem",
      kisa: "Aynı 200 kutu, üç yöntemle farklı yoldan seçilir.",
      bloklar: [
        { tip: "ornek", baslik: "Bin kutudan 200'ünü tart", durum: "Fabrikada 4 makine (A, B, C, D) var; her makine 10 palet, her palet 25 kutu doldurur: 4 × 10 × 25 = 1000 kutu. Kalite kontrol 200 kutunun ortalama ağırlığını ölçecek (n = 200). *SRS* için 1000 kutuyu numaralayıp tek tek bulmak gerekirdi; üç yöntem bu zahmeti azaltır.",
          adimlar: [
            "*Stratified* (strata = makineler; aynı makinenin kutuları benzer): her makinede 10 × 25 = 250 kutu; 200 ÷ 4 = 50. Her makineden 50 kutuluk bir *SRS*: 50 + 50 + 50 + 50 = 200.",
            "*Cluster* (clusters = paletler): 4 × 10 = 40 palet; 200 ÷ 25 = 8 palet. 40 paletten rastgele 8'ini seç, üstlerindeki bütün kutuları tart: 8 × 25 = 200.",
            "*Systematic* (banttan): k = 1000 ÷ 200 = 5; randInt(1,5) → 3; seçilenler 3, 8, 13, 18, … (+5); son 3 + 199 × 5 = 998. Toplam 200 kutu."
          ],
          sonuc: "Her yöntemde 200 kutu. Avantajlar: *stratified* her makineyi temsil eder (daha isabetli), *cluster* hızlı ve pratik, *systematic* kutuları numaralamaya gerek bırakmaz." },
        { tip: "tablo", baslik: "Fabrikada üç yöntem", head: ["Yöntem", "Gruplar", "Ne alınır?", "Sayı"], rows: [
            ["*Stratified*", "strata = 4 makine", "Her makineden 50 kutuluk *SRS*", "4 × 50 = 200"],
            ["*Cluster*", "clusters = 40 palet", "8 paletin tüm kutuları", "8 × 25 = 200"],
            ["*Systematic*", "bant, k = 5", "Rastgele başlangıç + her 5.", "3, 8, …, 998 → 200"]
          ] },
        { tip: "tuzak", baslik: "Bağlamı kullan", metin: "Yöntemi tarif ederken “strata = machines”, “clusters = pallets” gibi bağlam sözlerini kullan ve neden o grupları seçtiğini bir cümleyle açıkla.", yanlis: "“Bölmeler yaptım ve rastgele örnek aldım.”", dogru: "“Strata = machines (kutular makinede benzer); her makineden 50 kutuluk bir SRS.”" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Hepsine soramazsan seçimi şansa bırak: dört rastgele yöntem var.",
            "*SRS*: her olası n'li grup eşit şansa sahip; eşit bireysel şans yetmez (üç masa örneği). Etiketle → rastgele üret (tekrarları atla) → seç.",
            "*SRS* tekrarsız (*without replacement*) seçilir; randInt tekrar edebilir, randIntNoRep etmez.",
            "*Stratified*: içi benzer *strata*, her stratum'dan ayrı *SRS*; kazancı daha isabetli tahmin (bias azaltma değil).",
            "*Cluster*: içi karışık *cluster*'lar, rastgele seçilen kümelerin herkesi; ucuz ve pratik ama kümeler birbirine benzemiyorsa risk.",
            "*Strata* ↔ *cluster*: bütün gruplardan birkaç kişi → stratified; birkaç grubun herkesi → cluster.",
            "*Systematic*: k = N ÷ n, rastgele başlangıç, her k'ıncı kişi; listedeki düzen aralıkla çakışmasın (*exit poll*).",
            "Fabrika örneği: 4 × 50 = 200 (stratified), 8 × 25 = 200 (cluster), 1000 ÷ 200 = 5 aralık (systematic)."
          ] }
      ]
    }
  ]
};
