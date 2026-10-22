/* Kitora not defteri · mi303 · 3.3 Uzun Dönem Maliyetler
   Kaynak: AP Micro CED, Topic 3.3 (PRD-1.A.9–12). Blok türleri: /ap/_kit/defter.js başı.
   LRATC grafiği: f(q) = 5 + 0,3·max(0, 5−q)² + 0,3·max(0, q−7)²  (q = 5…7 arası düz, MES = 5).
   SRATC_i = f(qi) + f'(qi)(q − qi) + 0,45(q − qi)²  (her biri qi noktasında LRATC'ye teğet; qi = 2,5 / 6 / 9). */
window.DEFTER = (function () {
  function f(q) { var a = Math.max(0, 5 - q), b = Math.max(0, q - 7); return 5 + 0.3 * a * a + 0.3 * b * b; }
  function fp(q) { return q < 5 ? -0.6 * (5 - q) : (q > 7 ? 0.6 * (q - 7) : 0); }
  function sr(qi) { return function (q) { return f(qi) + fp(qi) * (q - qi) + 0.45 * (q - qi) * (q - qi); }; }
  function pts(g, a, b, s) {
    var r = [], x;
    for (x = a; x <= b + 1e-9; x += s) r.push([Math.round(x * 100) / 100, Math.round(g(x) * 100) / 100]);
    return r;
  }

  return {
    slug: "mi303",
    amac: "Bu konu firmanın uzun dönemde tesis boyutunu da seçebildiğini anlatıyor. Ölçek getirisini, LRATC eğrisinin neden U şeklinde olduğunu, ölçek ekonomisi ve dezekonomisini ve MES'in piyasada kaç firma olacağını nasıl etkilediğini öğreneceksin.",
    bolumler: [
      {
        baslik: "Uzun dönemde bütün maliyetler değişkendir",
        kisa: "Uzun dönemde sabit maliyet yoktur; firma tesis boyutunu da seçer.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🧮", terim: "Long-run total cost (LRTC)", tr: "uzun dönem toplam maliyet", tanim: "Her üretim düzeyi için, bütün girdiler serbestçe ayarlanabildiğinde ödenecek en düşük toplam maliyet.", ornek: "40 parti için en ucuz tesis ve işçi birleşimi: 280 TL." },
              { ikon: "📏", terim: "Long-run average total cost (LRATC)", tr: "uzun dönem ortalama maliyet", tanim: "LRTC'nin üretim miktarına bölümü: LRATC = LRTC ÷ Q. Her Q için tesis boyutu en uygun seçilmiştir.", ornek: "280 ÷ 40 = 7 TL." }
            ] },
          { tip: "ikili", sol: { ikon: "🔒", baslik: "*Short run*: sabit maliyet var", maddeler: ["Tesis boyutu sabit", "FC ödenir, değiştirilemez"] },
            sag: { ikon: "🔓", baslik: "*Long run*: hepsi değişken", maddeler: ["Tesis boyutu da seçilir", "Sabit maliyet yok"] },
            oyun: [
              { metin: "Kira sözleşmesi bitmeden kantin başka salona geçemez.", cevap: "sol", neden: "Tesis sabit, kira FC: *short run*." },
              { metin: "Kantin sözleşmeyi yenilemeyip daha büyük bir salon seçiyor.", cevap: "sag", neden: "Tesis boyutu da değiştirilebilir: *long run*." },
              { metin: "Fırın taksiti ödenirken fırın değiştirilemiyor.", cevap: "sol", neden: "Sabit girdi var: *short run*." },
              { metin: "Şirket üç yıl sonra bütün makine parkını yeniliyor.", cevap: "sag", neden: "Her girdi değişebiliyor: *long run*." }
            ] },
          { tip: "not", metin: "Her tesis boyutunun kendi kısa dönem ortalama maliyet eğrisi (SRATC) vardır. Uzun dönemde firma, üretmek istediği miktar için en ucuz tesis boyutunu seçer. Bu seçimler LRATC eğrisini oluşturur." }
        ]
      },
      {
        baslik: "Ölçek getirisi: bütün girdiler birlikte artınca",
        kisa: "Girdilerin hepsini aynı oranda artırınca çıktının ne kadar artacağına bakılır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🚀", terim: "Increasing returns to scale", tr: "artan ölçek getirisi", tanim: "Bütün girdiler aynı oranda artınca çıktı daha büyük oranda artar.", ornek: "Girdiler 2 kat, çıktı 2,5 kat." },
              { ikon: "⚖️", terim: "Constant returns to scale", tr: "sabit ölçek getirisi", tanim: "Girdiler hangi oranda artarsa çıktı da aynı oranda artar.", ornek: "Girdiler 2 kat, çıktı 2 kat." },
              { ikon: "🐌", terim: "Decreasing returns to scale", tr: "azalan ölçek getirisi", tanim: "Girdiler aynı oranda artınca çıktı daha küçük oranda artar.", ornek: "Girdiler 2 kat, çıktı 1,6 kat." }
            ] },
          { tip: "tablo", baslik: "Tost atölyesi: girdiler her adımda 2 katına çıkıyor", head: ["Girdiler (makine + işçi)", "Çıktı (tost)", "Girdi kaç kat?", "Çıktı kaç kat?", "Ölçek getirisi"], rows: [
              ["1 + 2", "10", "—", "—", "—"],
              ["2 + 4", "25", "2 kat", "2,5 kat", "Artan"],
              ["4 + 8", "50", "2 kat", "2 kat", "Sabit"],
              ["8 + 16", "80", "2 kat", "1,6 kat", "Azalan"]
            ], not: "Her satırda çıktı, bir önceki satıra bölünerek bulunur: 25 ÷ 10, 50 ÷ 25, 80 ÷ 50." },
          { tip: "tuzak", metin: "İki kavram da \"azalan\" kelimesini taşır, ama farklı dönemlere aittir.", yanlis: "Azalan marjinal getiri ile azalan ölçek getirisi aynı şeydir.", dogru: "*Diminishing marginal returns*: bir girdi sabitken diğerini artırmak (kısa dönem). *Decreasing returns to scale*: bütün girdileri aynı oranda artırmak (uzun dönem)." }
        ]
      },
      {
        baslik: "LRATC: kısa dönem eğrilerinin alt zarfı",
        kisa: "LRATC, her Q için en ucuz tesis boyutunun SRATC'sidir.",
        bloklar: [
          { tip: "grafik", baslik: "Üç tesis boyutu ve uzun dönem eğrisi", xlabel: "Üretim (Q)", ylabel: "Ortalama maliyet (TL)", xmax: 10, ymax: 14,
            xticks: [{ v: 5, label: "MES" }], yticks: [{ v: 5, label: "min" }],
            ogeler: [
              { id: "s1", tip: "egri", renk: 1, noktalar: pts(sr(2.5), 0.5, 6, 0.5), etiket: "SRATC₁" },
              { id: "s2", tip: "egri", renk: 2, noktalar: pts(sr(6), 3.5, 8.5, 0.5), etiket: "SRATC₂", gizli: true },
              { id: "s3", tip: "egri", renk: 3, noktalar: pts(sr(9), 5.5, 9.9, 0.5), etiket: "SRATC₃", gizli: true },
              { id: "lr", tip: "egri", renk: 0, noktalar: pts(f, 0.2, 9.2, 0.5), etiket: "LRATC", gizli: true },
              { id: "mes", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "MES", kilavuz: true, gizli: true },
              { id: "z1", tip: "yazi", x: 3.1, y: 11.8, metin: "ölçek ekonomileri: LRATC düşer", gizli: true },
              { id: "z2", tip: "yazi", x: 6, y: 3.2, metin: "sabit getiri", gizli: true },
              { id: "z3", tip: "yazi", x: 8.2, y: 11.2, metin: "dezekonomiler: LRATC yükselir", gizli: true }
            ],
            durumlar: [
              { metin: "Küçük bir tesis kuran firma kısa dönemde ==SRATC₁== eğrisinde çalışır. Her tesis boyutunun kendi U şekilli eğrisi vardır." },
              { metin: "Orta ve büyük tesisler, dipleri daha sağda olan başka SRATC eğrileri verir: ==SRATC₂== ve ==SRATC₃==.", goster: ["s2", "s3"] },
              { metin: "Uzun dönemde firma her Q için ==en ucuz== tesisi seçer. ==LRATC== bu eğrilerin alt zarfıdır: her birine teğettir, hiçbirinin üstüne çıkmaz.", goster: ["lr"] },
              { metin: "Soldaki düşen kol ==ölçek ekonomileri==, sağdaki yükselen kol ==ölçek dezekonomileri==. LRATC'nin en düşük olduğu en küçük Q, ==MES==.", goster: ["mes", "z1", "z2", "z3"] }
            ] },
          { tip: "not", metin: "LRATC, SRATC eğrilerinin dip noktalarını birleştirmez. LRATC'nin düştüğü bölgede her SRATC, kendi dibinin solunda LRATC'ye teğet olur; yükseldiği bölgede dibinin sağında. Yalnızca LRATC'nin dibinde teğet nokta ile SRATC'nin dibi çakışır." }
        ]
      },
      {
        baslik: "Ölçek ekonomileri, dezekonomileri ve MES",
        kisa: "LRATC düşerken ölçek ekonomisi, yükselirken dezekonomi vardır; dip, verimli ölçektir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "📉", terim: "Economies of scale", tr: "ölçek ekonomileri", tanim: "Üretim arttıkça LRATC'nin düşmesi. Artan ölçek getirisi ve toptan alım gibi nedenlerle olur.", ornek: "Büyük kantin, un ve peyniri toptan ucuza alır." },
              { ikon: "📈", terim: "Diseconomies of scale", tr: "ölçek dezekonomileri", tanim: "Üretim arttıkça LRATC'nin yükselmesi. Yönetim ve koordinasyon zorlaştığında görülür.", ornek: "Karar altı kademeden geçtiği için iş yavaşlar." },
              { ikon: "➖", terim: "Constant returns to scale (efficient scale)", tr: "sabit ölçek getirisi (verimli ölçek)", tanim: "LRATC'nin düz kaldığı bölge. Üretim bu aralıkta artarken birim maliyet değişmez.", ornek: "30 ile 40 parti arasında LRATC 7 TL." },
              { ikon: "🎯", terim: "Minimum efficient scale (MES)", tr: "en küçük verimli ölçek", tanim: "LRATC'nin en düşük değerine ulaştığı en küçük üretim düzeyi.", ornek: "Aşağıdaki tabloda MES = 30 parti." }
            ] },
          { tip: "ikili", sol: { ikon: "📉", baslik: "*Economies of scale*", maddeler: ["Büyüdükçe birim maliyet düşer", "Uzmanlaşma, toptan alım, büyük makineler"] },
            sag: { ikon: "📈", baslik: "*Diseconomies of scale*", maddeler: ["Büyüdükçe birim maliyet yükselir", "Koordinasyon ve yönetim sorunları"] },
            oyun: [
              { metin: "Büyük fabrika hammaddeyi toptan indirimle alıyor.", cevap: "sol", neden: "Girdi başına maliyet düşüyor: ekonomi." },
              { metin: "Şirket o kadar büyüdü ki kararlar altı kademeden geçiyor.", cevap: "sag", neden: "Koordinasyon maliyeti yükseliyor: dezekonomi." },
              { metin: "Her işçi tek bir işe uzmanlaşabiliyor.", cevap: "sol", neden: "Uzmanlaşma çıktıyı artırır, maliyeti düşürür: ekonomi." },
              { metin: "Yöneticiler binlerce işçiyi izleyemiyor, israf artıyor.", cevap: "sag", neden: "Yönetim sorunu: dezekonomi." }
            ] },
          { tip: "tablo", baslik: "LRATC'yi hesapla ve bölgeyi bul", head: ["Q (parti)", "LRTC (TL)", "LRATC (TL)", "Bölge"], rows: [
              ["10", "100", "10", "Ölçek ekonomisi"],
              ["20", "160", "8", "Ölçek ekonomisi"],
              ["30", "210", "7", "MES: en düşük LRATC başlıyor"],
              ["40", "280", "7", "Sabit getiri (verimli ölçek)"],
              ["50", "400", "8", "Ölçek dezekonomisi"]
            ], vurgu: 2, not: "LRATC = LRTC ÷ Q. Örnek: 400 ÷ 50 = 8. LRATC 7'ye 30 partide ilk kez ulaştığı için MES = 30." },
          { tip: "tuzak", metin: "\"Büyük olan hep ucuz üretir\" düşüncesi yalnızca düşen kolda doğrudur.", yanlis: "Firma büyüdükçe ortalama maliyeti hep düşer.", dogru: "LRATC önce düşer (ekonomi), bir aralıkta düz kalabilir, sonra yükselir (dezekonomi)." }
        ]
      },
      {
        baslik: "MES piyasada kaç firma olacağını belirler",
        kisa: "MES piyasa talebine göre küçükse çok firma, büyükse az firma olur.",
        bloklar: [
          { tip: "tablo", baslik: "Aynı piyasa, farklı MES", head: ["Piyasa talebi (en düşük maliyetli fiyatta)", "MES", "Piyasaya sığan firma", "Olası piyasa yapısı"], rows: [
              ["120 parti", "10 parti", "12 firma", "Çok firma: tam rekabete yakın"],
              ["120 parti", "30 parti", "4 firma", "Az firma: oligopol"],
              ["120 parti", "120 parti", "1 firma", "Tek firma: doğal tekel (*natural monopoly*)"]
            ], not: "Sığan firma sayısı: piyasa talebi ÷ MES. 120 ÷ 10 = 12; 120 ÷ 30 = 4; 120 ÷ 120 = 1." },
          { tip: "not", metin: "MES küçükse küçük firmalar da en düşük maliyete ulaşabilir; bu yüzden çok sayıda firma yaşayabilir ve piyasa rekabetçi olur. MES piyasaya göre çok büyükse yalnızca birkaç büyük firma (hatta tek firma) maliyet avantajına sahip olur ve piyasa yoğunlaşır." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Uzun dönemde bütün girdiler değişir, bu yüzden bütün maliyetler değişkendir; sabit maliyet yoktur.",
              "LRATC = LRTC ÷ Q. Her tesis boyutunun kendi SRATC eğrisi vardır; LRATC bunların alt zarfıdır.",
              "Artan, sabit, azalan *returns to scale*: bütün girdiler aynı oranda artınca çıktının daha çok, aynı, daha az artması.",
              "LRATC düşerken *economies of scale*, düz iken *constant returns to scale* (verimli ölçek), yükselirken *diseconomies of scale* vardır.",
              "MES: LRATC'nin en düşük olduğu en küçük üretim düzeyi.",
              "Piyasaya sığan firma sayısı ≈ piyasa talebi ÷ MES: MES küçükse çok firma, büyükse az firma.",
              "Tuzak: *diminishing marginal returns* kısa dönemdir (bir girdi sabit); *returns to scale* uzun dönemdir (hepsi değişir).",
              "Tuzak: LRATC, SRATC'lerin dip noktalarını birleştirmez."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Bir firmanın uzun dönem maliyet verileri aşağıdadır. Q = 15'ten Q = 20'ye geçerken firma hangi bölgededir?",
        fig: { type: "table", head: ["Q", "LRTC (TL)"], rows: [[5, 100], [10, 150], [15, 180], [20, 240], [25, 350]], caption: "LRATC = LRTC ÷ Q" },
        opts: ["Ölçek ekonomileri", "Ölçek dezekonomileri", "Sabit getiri (verimli ölçek)", "Bu veriyle belirlenemez"], a: 2,
        why: "LRATC değerleri: 20, 15, 12, 12, 14. Q = 15 ve Q = 20'de LRATC 12 TL ile aynı; bu bölge sabit getiridir (verimli ölçek). Q = 5'ten 15'e LRATC düşmüştür (ekonomi); Q = 25'te yükselmiştir (dezekonomi). \"Toplam maliyet arttı, o halde dezekonomi\" en çekici hatadır: karar LRATC'ye bakılarak verilir, LRTC'ye değil." },
      { q: "Bir atölye girdilerinin hepsini (makine ve işçi) 2 katına çıkardığında çıktısı yalnızca 1,5 katına çıkıyor. Girdi fiyatları sabittir. Hangisi doğrudur?",
        opts: ["Artan ölçek getirisi vardır; LRATC düşer.", "Azalan ölçek getirisi vardır; LRATC yükselir.", "Sabit ölçek getirisi vardır; LRATC değişmez.", "Azalan marjinal getiri vardır; kısa dönemdir."], a: 1,
        why: "Girdiler 2 kat artarken çıktı 2 kattan az artıyorsa ölçek getirisi azalandır ve girdi fiyatları sabitken birim maliyet (LRATC) yükselir. D en çekici yanlış şıktır: azalan marjinal getiri yalnızca bir girdi artarken diğerleri sabitse geçerlidir; burada bütün girdiler birlikte artıyor." },
      { q: "Aşağıdakilerden hangisi azalan marjinal getiri ile azalan ölçek getirisi arasındaki farkı doğru anlatır?",
        opts: ["İkisi de uzun dönem kavramıdır; yalnızca isimleri farklıdır.", "İkisi de bir girdi sabitken diğeri artırıldığında ortaya çıkar.", "Azalan ölçek getirisi kısa dönem, azalan marjinal getiri uzun dönem kavramıdır.", "Azalan marjinal getiri bir girdi sabitken (kısa dönem), azalan ölçek getirisi bütün girdiler aynı oranda artarken (uzun dönem) ortaya çıkar."], a: 3,
        why: "Azalan marjinal getiri, bir girdinin sabit olduğu kısa dönemde değişken girdinin MP'sinin azalmasıdır. Azalan ölçek getirisi, uzun dönemde bütün girdilerin aynı oranda artırılmasına karşı çıktının daha az artmasıdır. İlk şık, öğrencilerin en sık yaptığı karıştırmayı yansıtır." },
      { q: "Bir piyasada, LRATC'nin en düşük olduğu fiyattaki toplam talep 600 birimdir ve bir firmanın MES'i 300 birimdir. Piyasa yapısı hakkında en makul çıkarım hangisidir?",
        opts: ["Yaklaşık 2 firma sığar; piyasa yoğunlaşmış olur.", "Yaklaşık 300 küçük firma sığar; piyasa tam rekabetçi olur.", "Kesinlikle doğal tekel oluşur.", "MES piyasa yapısını etkilemez."], a: 0,
        why: "Sığan firma sayısı ≈ 600 ÷ 300 = 2. MES, piyasa talebine göre büyük olduğu için çok az firma yaşayabilir. B yanlış: 300 firma olsaydı MES 2 birim olurdu. C yanlış: doğal tekel için MES'in piyasa talebine yaklaşık eşit olması gerekir (1 firma)." },
      { q: "Bir firmanın uzun dönem ortalama maliyet (LRATC) eğrisi için hangisi doğrudur?",
        opts: ["Bütün SRATC eğrilerinin en düşük noktalarını birleştirir.", "Sabit maliyeti içerdiği için hep yukarı bakar.", "Her üretim düzeyi için en düşük maliyetli tesis boyutunun SRATC değerini gösterir (alt zarf).", "Her zaman yataydır."], a: 2,
        why: "LRATC, her Q için en ucuz tesisin ortalama maliyetidir; SRATC eğrilerinin alt zarfıdır. A en çekici yanlış şıktır: LRATC dip noktaları birleştirmez, düşen kolda SRATC'ye dibinin solunda teğet olur. B yanlış: uzun dönemde sabit maliyet yoktur. D yanlış: LRATC genellikle U şeklindedir." }
    ]
  };
})();
