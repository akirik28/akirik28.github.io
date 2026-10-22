/* Kitora not defteri · st113 · 1G-1 Rastgele Örnekleme Yöntemleri
   Kaynak: ap-videolar/src/episodes/st113 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st113",
  ozet: "Hepsine soramazsan örneklem alırsın, ve tek adil yol ==seçimi şansa bırakmaktır==. Bu defterde dört yöntemi (*simple random sample*, *stratified*, *cluster*, *systematic*) göreceksin: kim nasıl seçilir, *strata* ile *cluster* nasıl karıştırılmaz, her yöntemin avantajı ve tuzağı ne, ve acı sos fabrikasında üç yöntem aynı problemde nasıl uygulanır.",
  bolumler: [
    {
      baslik: "600 öğrenci, 40 kişi: kimi seçeceksin?",
      bloklar: [
        { tip: "hikaye", ikon: "🌙", baslik: "Okulda ortalama uyku kaç saat?",
          metin: "Okulunda 600 öğrenci var. Gecede ortalama kaç saat uyuyorlar? Hepsine soramazsın; **40 kişi** seçeceksin. Arkadaşlarını seçersen hepsi sana benziyor. Gözüne kestirdiklerini seçersen farkında olmadan taraf tutarsın. Tek adil yol, seçimi şansa bırakmak. Bunun dört yolu var." },
        { tip: "ikili", ayirici: "vs",
          sol: { ikon: "👀", baslik: "Seçen insan", maddeler: ["Arkadaşlarını seçmek: hepsi sana benzer", "Gözüne kestirmek: farkında olmadan taraf tutarsın", "Önyargılı örneklem"] },
          sag: { ikon: "🎲", baslik: "Seçen şans", maddeler: ["Zar, rastgele sayı üreteci", "İnsan değil şans karar verir", "Adil örneklem"] },
          oyun: [
            { metin: "En yakın arkadaşlarına sormak.", cevap: "sol", neden: "Seçimi sen yaptın, hepsi sana benziyor." },
            { metin: "Rastgele sayı üreteciyle numara çekmek.", cevap: "sag", neden: "Seçimi şans yapıyor." },
            { metin: "Koridorda gözüne iyi gelenleri durdurmak.", cevap: "sol", neden: "Göz kestirmek bilinçsiz taraf tutmaktır." },
            { metin: "Öğrenci listesinden zarla numara seçmek.", cevap: "sag", neden: "Seçim şansa bırakılmış." }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 600, etiket: "öğrenci (N)" },
            { deger: 40, etiket: "seçilecek kişi (n)" },
            { deger: 4, etiket: "rastgele örnekleme yöntemi" }
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
          sonuc: "Bu, SRS değil (aslında tek *cluster*'lı bir *cluster sample*). ==Eşit bireysel şans ≠ SRS.==" }
      ]
    },
    {
      baslik: "*SRS* nasıl seçilir?",
      bloklar: [
        { tip: "hikaye", ikon: "🧹", baslik: "Quidditch takımı", metin: "12 kişilik Quidditch takımından her hafta 2 oyuncu teste girecek. Seçimi rastgele yapalım." },
        { tip: "tablo", baslik: "Etiketle: oyuncuları 1–12 numarala", head: ["No", "Oyuncu", "No", "Oyuncu", "No", "Oyuncu"], rows: [
            ["1", "Chang", "5", "Delacour", "9", "Diggory"],
            ["2", "Finnigan", "6", "Granger", "10", "Krum"],
            ["3", "Longbottom", "7", "Lovegood", "11", "Potter"],
            ["4", "Thomas", "8", "Weasley", "12", "Wood"]
          ] },
        { tip: "adimlar", baslik: "Üç adım", adimlar: [
            { baslik: "1 · *Label* (etiketle)", metin: "Oyuncuları 1'den 12'ye numarala." },
            { baslik: "2 · *Randomize* (rastgele üret)", metin: "Hesap makinesinde randInt(1,12) ile 1 ile 12 arasında rastgele sayılar üret (TI-84: MATH → PRB → 5)." },
            { baslik: "Tekrarı atla", metin: "Üretilen: 7, 7, 3. İkinci 7 tekrar: atla." },
            { baslik: "3 · *Select* (seç)", metin: "İlk iki farklı numara: 7 ve 3. Seçilenler Lovegood ve Longbottom." }
          ] },
        { tip: "ornek", baslik: "Kaç olası ikili var?", durum: "12 oyuncudan 2'li grup seçiyoruz. SRS ise her olası ikili eşit şansa sahip.",
          adimlar: ["İlk oyuncu için 12, ikincisi için 11 seçenek: 12 × 11 = 132.", "Sıra önemli değil (AB = BA), her ikili iki kez sayıldı: 132 ÷ 2 = 66.", "66 olası ikilinin her biri eşit şansa sahip."],
          sonuc: "66 olası ikili; her birinin şansı 1/66." },
        { tip: "tuzak", baslik: "SRS'i anlatırken “ignore repeats”", metin: "AP'de SRS'i tarif ederken üç adımı yaz ve tekrarları atladığını belirt.", yanlis: "“Generate random numbers from 1 to 12 and pick the first 2.” (tekrar edebilir)", dogru: "“Label the players 1–12. Generate random integers from 1 to 12, ignoring repeats. Select the players with the first 2 different numbers.”" },
        { tip: "tuzak", baslik: "Yalnızca “eşit şans” yazma", metin: "SRS tanımında grup vurgulanır.", yanlis: "“Each individual has an equal chance of being selected.”", dogru: "“Every possible sample of size n has an equal chance of being chosen.”" }
      ]
    },
    {
      baslik: "Tekrarlı ve tekrarsız seçim",
      bloklar: [
        { tip: "ikili",
          sol: { ikon: "🚫", baslik: "*Without replacement*", maddeler: ["Seçilen kişi geri konmaz", "Bir kişi bir kez seçilebilir", "*SRS* böyle seçilir"] },
          sag: { ikon: "🔁", baslik: "*With replacement*", maddeler: ["Seçilen kişi geri konur", "Aynı sayı yeniden gelebilir", "randInt böyle çalışır"] },
          oyun: [
            { metin: "7 numaralı top torbadan çıkıyor ve torbaya geri atılmıyor.", cevap: "sol", neden: "Geri konmuyor: *without replacement*." },
            { metin: "Hesap makinesinde randInt(1,12) ardışık iki kez 7 veriyor.", cevap: "sag", neden: "Aynı sayı tekrar gelebiliyor: *with replacement*." },
            { metin: "İki oyuncu seçilirken aynı oyuncu iki kere seçilemez.", cevap: "sol", neden: "*SRS* tekrarsız seçilir." },
            { metin: "7 numaralı top çekilip geri atıldı, yine 7 çekildi.", cevap: "sag", neden: "Geri konduğu için tekrar mümkün." }
          ] },
        { tip: "adimlar", baslik: "Sınavda yazacağın cevap (AP EXAM TIP)", adimlar: [
            { baslik: "*Label*", metin: "Number the players 1–12." },
            { baslik: "*Randomize*", metin: "Generate random integers from 1 to 12, ==ignoring repeats==." },
            { baslik: "*Select*", metin: "The players with the first 2 different numbers." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎰", terim: "randInt", tr: "rastgele tam sayı", tanim: "Verilen aralıkta rastgele tam sayı üretir; ==tekrar edebilir==.", ornek: "randInt(1,12) → 7, 7, 3, …" },
            { ikon: "🔀", terim: "randIntNoRep", tr: "tekrarsız karışık sıra", tanim: "Aralıktaki bütün tam sayıları tekrarsız, karışık sırada verir; ilk n tanesi örneklemdir.", ornek: "randIntNoRep(1,12) → {7 3 11 1 9 12 4 …}; ilk ikisi: 7 ve 3." },
            { ikon: "🎩", terim: "Şapka yöntemi", tr: "özdeş kâğıtlar", tanim: "12 özdeş kâğıdı şapkaya at, iyice karıştır, 2 tane çek.", ornek: "Kâğıtlar özdeş, karışım iyi olmalı." }
          ] },
        { tip: "tuzak", baslik: "Tekrarı atladığını yaz", metin: "Üreteçler *with replacement* çalıştığı için aynı sayı tekrar gelir.", yanlis: "7, 7, 3 gelince “7 ve 7 seçildi” demek ya da tekrarı hiç anmamak.", dogru: "“Ignoring repeats” yaz, ya da randIntNoRep kullan." }
      ]
    },
    {
      baslik: "*Stratified random sample*",
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
        { tip: "not", metin: "Dikkat: stratified'ın avantajı *bias* azaltmak değil. *SRS* de yansızdır. Kazancı, tahminin **değişkenliğini azaltmak**, yani ==daha isabetli (*more precise*)== olmak." },
        { tip: "tuzak", baslik: "Stratified'ın amacı", metin: "Stratified'ın kazancı yansızlık değil, isabettir.", yanlis: "“Stratified sampling removes bias that SRS has.”", dogru: "“Stratified sampling gives a less variable (more precise) estimate because every group is represented.”" }
      ]
    },
    {
      baslik: "*Cluster random sample*",
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
      baslik: "Strata mı, cluster mı?",
      bloklar: [
        { tip: "tablo", baslik: "AP'nin en sevdiği ayrım", head: ["", "*Strata* (stratified)", "*Clusters* (cluster)"], rows: [
            ["Grubun içi", "Benzer (*homogeneous*)", "Karışık (*heterogeneous*)"],
            ["Gruplar arası", "Farklı", "Birbirine benzer"],
            ["Ne alınır?", "HER gruptan BİRKAÇ kişi", "BİRKAÇ grubun HERKESİ"],
            ["Kazanç", "Daha isabetli tahmin", "Ucuz, pratik"]
          ] },
        { tip: "ikili",
          sol: { ikon: "🧱", baslik: "*Stratified*", maddeler: ["Bütün gruplardan seçim var", "Her gruptan ayrı *SRS*", "Market zinciri: her şehirden rastgele 5 mağaza"] },
          sag: { ikon: "🚌", baslik: "*Cluster*", maddeler: ["Yalnızca seçilen gruplar", "Seçilen grubun herkesi", "Market zinciri: 3 şehir, oradaki bütün mağazalar"] },
          oyun: [
            { metin: "Her şehirden rastgele 5 mağaza seçildi.", cevap: "sol", neden: "Bütün şehirlerden (strata) birkaç mağaza: stratified." },
            { metin: "Rastgele 3 şehir seçildi, oradaki bütün mağazalar alındı.", cevap: "sag", neden: "Seçilen şehirlerin (cluster) herkesi: cluster." },
            { metin: "40 şubeli kafe zincirinde rastgele 5 şube seçildi, oradaki bütün çalışanlara anket yapıldı.", cevap: "sag", neden: "Şubeler bütün olarak seçildi: cluster." },
            { metin: "Her şubeden rastgele 3 çalışan seçildi.", cevap: "sol", neden: "Her gruptan birkaç kişi: stratified." },
            { metin: "Dört sınıf düzeyinden her birinden 10 öğrenci seçildi.", cevap: "sol", neden: "Her düzeyden bir SRS: stratified." }
          ] },
        { tip: "adimlar", baslik: "Karar sorusu", adimlar: [
            { baslik: "Soru 1", metin: "Bütün gruplardan seçim var mı? Evet → *stratified*." },
            { baslik: "Soru 2", metin: "Yalnızca rastgele seçilen grupların herkesi mi alındı? Evet → *cluster*." }
          ] },
        { tip: "tuzak", baslik: "İki kavramı yer değiştirme", metin: "*Strata* içi benzer, arası farklı. *Cluster* içi karışık, arası benzer. Tam tersi dizilimler.", yanlis: "“Cluster'lar içi benzer gruplardır.”", dogru: "*Strata* içi benzer gruplardır; *cluster*'lar popülasyonun küçük kopyalarıdır." }
      ]
    },
    {
      baslik: "*Systematic random sample*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚪", terim: "Systematic random sample", tr: "sistematik rastgele örneklem", tanim: "Sıralı bir dizilimde ilk k bireyden biri rastgele seçilir, sonra her k'ıncı birey alınır. k = N ÷ n.", ornek: "Kapıdan giren 600 öğrenciden 40'ı." },
            { ikon: "🗳️", terim: "Exit poll", tr: "sandık çıkışı anketi", tanim: "Seçim günü sandıktan çıkan seçmenlerle yapılan anket. Önceden liste olmadığı için *systematic* yapılır.", ornek: "Anketör her k'ıncı seçmeni durdurur." }
          ] },
        { tip: "formul", parcalar: [{ t: "k", alt: "aralık" }, "=", { t: "N", alt: "600 öğrenci" }, "÷", { t: "n", alt: "40 kişi" }, "=", { t: "15", alt: "her 15. kişi" }], aciklama: "Aralığı bulduktan sonra 1 ile k arasında rastgele bir başlangıç seçersin." },
        { tip: "ornek", baslik: "Kapıdan giren 600 öğrenciden 40'ı", durum: "Öğrenciler tek sıra hâlinde kapıdan giriyor.",
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
        { tip: "ornek", baslik: "Günlük kayıtlarda her 7. kayıt", durum: "Bir kafenin günlük satış kayıtları haftanın günlerine göre sıralı, art arda üç hafta. Her 7. kaydı alıyorsun.",
          adimlar: ["Haftada 7 gün var, aralık da 7.", "Başlangıç ne olursa olsun hep haftanın aynı gününe düşersin.", "Örneklem yalnızca o günü (ör. hep cumartesiyi) temsil eder."],
          sonuc: "Listedeki düzen aralıkla çakışırsa örneklem popülasyonu temsil etmez." },
        { tip: "tuzak", baslik: "Düzen ve aralık çakışmasın", metin: "Systematic'te listedeki tekrarlayan düzen sabit aralıkla uyuşuyorsa (günlük kayıt, her 7.) hep aynı günü seçersin.", yanlis: "“Her 7. kaydı al, sonuç temsil eder.”", dogru: "Aralığın listedeki düzenle çakışmadığından emin ol." },
        { tip: "tuzak", baslik: "Başlangıç rastgele olmalı", metin: "“İlk kişiden başla” dersen yöntem rastgele olmaz.", yanlis: "“İlk kişiden başlayıp her 15. kişiyi aldım.”", dogru: "1 ile k arasında rastgele bir başlangıç seç." }
      ]
    },
    {
      baslik: "Acı sos fabrikası: üç yöntem, bir problem",
      bloklar: [
        { tip: "hikaye", ikon: "🌶️", baslik: "Bin kutu, 200'ünü tart", metin: "Acı sos fabrikasında **4 makine** var (A, B, C, D). Her makine **10 palet** dolduruyor, her palette **25 kutu**. Kalite kontrol, 200 kutunun ortalama ağırlığını ölçecek." },
        { tip: "formul", parcalar: [{ t: "4", alt: "makine" }, "×", { t: "10", alt: "palet" }, "×", { t: "25", alt: "kutu" }, "=", { t: "1000", alt: "kutu" }], aciklama: "Toplam bin kutu; örneklem n = 200." },
        { tip: "ornek", baslik: "*Stratified*: strata = makineler", durum: "Aynı makinenin kutuları benzer ağırlıkta; makineler arası fark olabilir.",
          adimlar: ["Her makinede 10 × 25 = 250 kutu.", "200 ÷ 4 = 50 kutu her makineden.", "Her makinenin 250 kutusundan 50'lik bir *SRS*.", "50 + 50 + 50 + 50 = 200."],
          sonuc: "Her makineden 50 kutu (toplam 200). Avantaj: her makine temsil edilir, tahmin daha isabetli." },
        { tip: "ornek", baslik: "*Cluster*: clusters = paletler", durum: "Paletler hazır gruplar; her paletin içinde 25 kutu var.",
          adimlar: ["Toplam 4 × 10 = 40 palet.", "200 ÷ 25 = 8 palet gerekir.", "40 paletten rastgele 8'ini seç; üstlerindeki bütün kutuları tart.", "8 × 25 = 200."],
          sonuc: "8 palet, 200 kutu. Avantaj: dağınık kutuları aramak yok; hızlı ve pratik." },
        { tip: "ornek", baslik: "*Systematic*: banttan her 5. kutu", durum: "Kutular bantta sırayla geçiyor.",
          adimlar: ["k = 1000 ÷ 200 = 5.", "1 ile 5 arasında rastgele başlangıç: randInt(1,5) → 3.", "Seçilenler: 3, 8, 13, 18, … (her seferinde +5).", "Son: 3 + 199 × 5 = 998. Toplam 200 kutu."],
          sonuc: "3., 8., 13., …, 998. kutu: 200 kutu. Avantaj: kutuları numaralamaya gerek yok." },
        { tip: "ornek", baslik: "*SRS* olsaydı?", durum: "Aynı problemi basit rastgele örneklemle çözmek istiyorsun.",
          adimlar: ["1'den 1000'e kadar tüm kutuları numarala.", "200 farklı sayı üret (tekrarları at).", "O kutuları tek tek bul ve tart."],
          sonuc: "Çok emek ister; üç yöntem bu zahmeti azaltır." },
        { tip: "tablo", baslik: "Fabrikada üç yöntem", head: ["Yöntem", "Gruplar", "Ne alınır?", "Sayı"], rows: [
            ["*Stratified*", "strata = 4 makine", "Her makineden 50 kutuluk *SRS*", "4 × 50 = 200"],
            ["*Cluster*", "clusters = 40 palet", "8 paletin tüm kutuları", "8 × 25 = 200"],
            ["*Systematic*", "bant, k = 5", "Rastgele başlangıç + her 5.", "3, 8, …, 998 → 200"]
          ] },
        { tip: "tuzak", baslik: "Bağlamı kullan", metin: "Yöntemi tarif ederken “strata = machines”, “clusters = pallets” gibi bağlam sözlerini kullan ve neden o grupları seçtiğini bir cümleyle açıkla.", yanlis: "“Bölmeler yaptım ve rastgele örnek aldım.”", dogru: "“Strata = machines (kutular makinede benzer); her makineden 50 kutuluk bir SRS.”" }
      ]
    },
    {
      baslik: "Mini sınav ve toparlayalım",
      bloklar: [
        { tip: "ornek", baslik: "Kafe zincirinin şubeleri", durum: "Bir kafe zincirinin 40 şubesi var. Yönetim rastgele 5 şube seçiyor ve oradaki bütün çalışanlara anket yapıyor. Bu hangi yöntem?",
          adimlar: ["Gruplar şubeler.", "Rastgele 5 şube seçildi, şubelerin tamamı alındı (bütün çalışanlar).", "Her şubeden birkaç çalışan seçilseydi *stratified* olurdu."],
          sonuc: "*Cluster random sample*: 5 şubenin tamamı, içindeki herkes." },
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
