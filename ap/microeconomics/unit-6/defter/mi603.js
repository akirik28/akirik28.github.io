/* Kitpath not defteri · mi603 · 6.3 Kamu Malları ve Özel Mallar
   Kaynak: CED Topic 6.3 (POL-3.C). Blok türleri: /ap/_kit/defter.js başı.
   Not: dört mal türü grafiği iki eksenli bir 2×2 tablodur (x: dışlanabilir mi, y: rakip mi).
   Ortak kaynak grafiği: MB y=10−x, MPC y=x, MSC y=x+4 → serbest erişim (5,5), optimum (3,7). DWL = ½×20×40 = 400 TL. */
window.DEFTER = (function () {
  function ac(tum, metin, acik) {
    return { metin: metin, goster: acik, gizle: tum.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }
  var Q = [
    { id: "aOz", tip: "alan", renk: 0, noktalar: [[5, 5], [10, 5], [10, 10], [5, 10]], gizli: true },
    { id: "aOr", tip: "alan", renk: 2, noktalar: [[0, 5], [5, 5], [5, 10], [0, 10]], gizli: true },
    { id: "aKu", tip: "alan", renk: 3, noktalar: [[5, 0], [10, 0], [10, 5], [5, 5]], gizli: true },
    { id: "aKa", tip: "alan", renk: 1, noktalar: [[0, 0], [5, 0], [5, 5], [0, 5]], gizli: true },
    { id: "vl", tip: "cizgi", renk: 0, kesik: true, from: [5, 0], to: [5, 10], etiket: "" },
    { id: "hl", tip: "cizgi", renk: 0, kesik: true, from: [0, 5], to: [10, 5], etiket: "" },
    { id: "tOz", tip: "yazi", x: 7.5, y: 7.8, metin: "Özel mal", gizli: true },
    { id: "eOz", tip: "yazi", x: 7.5, y: 6.3, metin: "tost, telefon", gizli: true },
    { id: "tOr", tip: "yazi", x: 2.5, y: 7.8, metin: "Ortak kaynak", gizli: true },
    { id: "eOr", tip: "yazi", x: 2.5, y: 6.3, metin: "balık stoku", gizli: true },
    { id: "tKu", tip: "yazi", x: 7.5, y: 2.8, metin: "Kulüp malı", gizli: true },
    { id: "eKu", tip: "yazi", x: 7.5, y: 1.3, metin: "Netflix", gizli: true },
    { id: "tKa", tip: "yazi", x: 2.5, y: 2.8, metin: "Kamu malı", gizli: true },
    { id: "eKa", tip: "yazi", x: 2.5, y: 1.3, metin: "sokak lambası", gizli: true }
  ];
  var QID = Q.map(function (o) { return o.id; });
  var K = [
    { id: "dwl", tip: "alan", renk: 2, noktalar: [[3, 7], [5, 5], [5, 9]], gizli: true },
    { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9, 1], etiket: "MB" },
    { id: "S", tip: "cizgi", renk: 1, from: [0, 0], to: [9, 9], etiket: "MPC" },
    { id: "MSC", tip: "cizgi", renk: 2, from: [0, 4], to: [5.5, 9.5], etiket: "MSC", gizli: true },
    { id: "ok", tip: "ok", renk: 2, from: [6.5, 6.6], to: [6.5, 8.4], gizli: true },
    { id: "Em", tip: "nokta", renk: 3, x: 5, y: 5, etiket: "M", kilavuz: true },
    { id: "Es", tip: "nokta", renk: 3, x: 3, y: 7, etiket: "A", kilavuz: true, gizli: true },
    { id: "pq", tip: "nokta", renk: 2, x: 5, y: 9, etiket: "", gizli: true }
  ];
  var KID = K.map(function (o) { return o.id; });

  return {
    slug: "mi603",
    amac: "Bu konu malları iki ölçüte göre ayırıyor: rakip olup olmadıkları ve dışlanabilir olup olmadıkları. Özel mal, kamu malı, kulüp malı ve ortak kaynağı, bedavacı sorununu ve devletin neden kimi malları kendisinin üretmesi gerektiğini öğreneceksin.",
    bolumler: [
      {
        baslik: "İki soru: rakip mi, dışlanabilir mi?",
        kisa: "Rakiplik ve dışlanabilirlik, malın piyasada nasıl davranacağını belirler.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🍞", terim: "Rival", tr: "rakip", tanim: "Birinin tüketmesi, başkasının tüketebileceği miktarı azaltır. Rakipsiz (*non-rival*) malda ise bir kişi daha tüketince başkasına kalan azalmaz.", ornek: "Tostu sen yersen başkası yiyemez." },
              { ikon: "🎟️", terim: "Excludable", tr: "dışlanabilir", tanim: "Ödemeyen kişiyi tüketimden uzak tutmak mümkündür. Dışlanamaz (*non-excludable*) malda ödemeden yararlanmak engellenemez.", ornek: "Bilet almayanı konsere almazsın." }
            ] },
          { tip: "ikili",
            sol: { ikon: "🍞", baslik: "Rakip", maddeler: ["Biri tüketince başkasına az kalır", "Tost, telefon, konser koltuğu"] },
            sag: { ikon: "💡", baslik: "Rakipsiz", maddeler: ["Biri tüketince başkasına kalan azalmaz", "Sokak lambası, deniz feneri"] },
            oyun: [
              { metin: "Kantin tostunu sen yersen başkası aynı tostu yiyemez.", cevap: "sol", neden: "Tüketimin azaltıcı etkisi var: rakip." },
              { metin: "Yanından bir kişi daha geçince sokak lambası öteki yolcuya daha az ışık vermez.", cevap: "sag", neden: "Fayda azalmaz: rakipsiz." },
              { metin: "Bir gemi daha deniz fenerini görünce diğer gemiler için ışık sönmez.", cevap: "sag", neden: "Ek kullanıcı başkasını etkilemez: rakipsiz." },
              { metin: "Konser biletinin son koltuğunu aldın; başkası oraya oturamaz.", cevap: "sol", neden: "Koltuk bir kişiye ait: rakip." }
            ] }
        ]
      },
      {
        baslik: "Dört mal türü",
        kisa: "İki ölçüt birleşince dört tür doğar: özel, kamu, kulüp, ortak kaynak.",
        bloklar: [
          { tip: "grafik", baslik: "Dört mal türü: iki ölçütün kesişimi", xlabel: "Dışlanabilir mi?", ylabel: "Rakip mi?", xmax: 10, ymax: 10,
            xticks: [{ v: 2.5, label: "yok" }, { v: 7.5, label: "var" }],
            yticks: [{ v: 2.5, label: "yok" }, { v: 7.5, label: "var" }],
            ogeler: Q,
            durumlar: [
              ac(QID, "İki soru, iki eksen: yatay eksende malın ==dışlanabilir== olup olmadığı, düşey eksende ==rakip== olup olmadığı. Dört bölge dört tür verir.", ["vl", "hl"]),
              ac(QID, "==Özel mal (*private good*)==: rakip ve dışlanabilir. Piyasa genelde iyi çalışır; ödemeyen alamaz.", ["vl", "hl", "aOz", "tOz", "eOz"]),
              ac(QID, "==Kamu malı (*public good*)==: rakipsiz ve dışlanamaz. Ödemeyen de yararlanır; özel firma üretmek istemez.", ["vl", "hl", "aKa", "tKa", "eKa"]),
              ac(QID, "==Kulüp malı (*club good*)==: rakipsiz ama dışlanabilir. Üyelik ya da bilet ücretiyle sunulabilir.", ["vl", "hl", "aKu", "tKu", "eKu"]),
              ac(QID, "==Ortak kaynak (*open access resource*)==: rakip ama dışlanamaz. Kimse engellenemez, her kullanım başkasına az bırakır.", ["vl", "hl", "aOr", "tOr", "eOr"]),
              ac(QID, "Dört türün hepsi bir arada.", ["vl", "hl", "aOz", "tOz", "eOz", "aKa", "tKa", "eKa", "aKu", "tKu", "eKu", "aOr", "tOr", "eOr"])
            ] },
          { tip: "tablo", baslik: "Dört mal türü: özet", head: ["Tür", "Rakip?", "Dışlanabilir?", "Örnek", "Piyasa sonucu"], rows: [
              ["Özel mal", "Evet", "Evet", "Tost, telefon, konser bileti", "Dışsallık yoksa etkin"],
              ["Kamu malı", "Hayır", "Hayır", "Ulusal savunma, sokak lambası", "Özel firma üretmez: az üretim"],
              ["Kulüp malı", "Hayır", "Evet", "Netflix, kalabalık olmayan ücretli otoyol", "Ücretle finanse edilebilir"],
              ["Ortak kaynak", "Evet", "Hayır", "Açık denizde balık stoku", "Aşırı tüketim"]
            ] }
        ]
      },
      {
        baslik: "Bedavacı sorunu",
        kisa: "Dışlanamayan malın bedelini kimse ödemek istemez; özel firma üretmez.",
        bloklar: [
          { tip: "adimlar", baslik: "Mahalleye sokak lambası", adimlar: [
              { baslik: "İhtiyaç", metin: "10 komşu karanlıktan şikâyetçi; lamba hepsine yarar." },
              { baslik: "Bedavacı", metin: "Biri parayı verirse ödemeyen komşular da ışıktan yararlanır. Her komşu \"başkası ödesin\" der: ==*free rider*== (bedavacı)." },
              { baslik: "Sonuç", metin: "Kimse ödemez, lamba yapılmaz; oysa herkes için faydalı olurdu." }
            ] },
          { tip: "ornek", baslik: "Lamba yapılmalı mı?",
            durum: "Lamba 200 TL. Her komşu için faydası 30 TL; 10 komşu var.",
            adimlar: [
              "Toplam fayda 10 × 30 = 300 TL, maliyet 200 TL. 300 > 200: lamba yapılmalı.",
              "Herkes eşit ödese kişi başı 200/10 = 20 TL < 30 TL: herkes kazanır.",
              "Ama ödeme zorunlu değil: ödemeyen de yararlanır. Herkes \"başkaları öder\" diye bekler.",
              "Zorunlu bir ödeme (vergi) sorunu çözer."
            ],
            sonuc: "Fayda 300 TL > maliyet 200 TL olsa da özel piyasa lambayı üretmez; devlet vergiyle üretir." }
        ]
      },
      {
        baslik: "Devlet ne zaman üretir?",
        kisa: "Devlet kamu malını bedavacı sorunu yüzünden üretir, bazen özel malı da sunar.",
        bloklar: [
          { tip: "liste", maddeler: [
              { ikon: "🛡️", baslik: "Kamu malı → devlet", metin: "Bedavacı sorunu yüzünden özel kişiler üretmek istemez; devlet sağlar. Ulusal savunma, sokak lambası." },
              { ikon: "💰", baslik: "Finansman → vergi", metin: "Kullanıcıdan doğrudan ücret alınamadığı için kamu malı vergilerle finanse edilir." },
              { ikon: "🏫", baslik: "Özel mal ama devlet sunuyor", metin: "Devlet bazen eğitim gibi özel malları da üretir ve ücretsiz erişim verir: herkes yararlansın, topluma fayda (dışsallık) yansısın." }
            ] },
          { tip: "tuzak", metin: "Malın türü onu kimin ürettiğine değil, özelliklerine bağlıdır.", yanlis: "Devletin ürettiği her mal kamu malıdır.", dogru: "Kamu malı ==rakipsiz ve dışlanamaz== olandır. Devlet okulu rakip ve dışlanabilir olduğu halde devletçe sunulan bir ==özel maldır==." }
        ]
      },
      {
        baslik: "Ortak kaynaklar: aşırı tüketim",
        kisa: "Rakip ama dışlanamayan kaynak, sahipsiz olduğu için aşırı tüketilir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🐟", terim: "Open access resource", tr: "serbest erişimli kaynak", tanim: "Rakip ama dışlanamayan doğal kaynak: kimse engellenemez, her kullanım başkasının payını azaltır.", ornek: "Açık denizde balık." },
              { ikon: "🌊", terim: "Overconsumption", tr: "aşırı tüketim", tanim: "Herkes yalnızca kendi maliyetine bakınca kaynak, toplumun isteyeceğinden fazla kullanılır.", ornek: "Her tekne bir sefer daha çıkar." }
            ] },
          { tip: "grafik", baslik: "Ortak denizde balık avı", xlabel: "Av (sefer)", ylabel: "TL", xmax: 10, ymax: 10,
            xticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }],
            yticks: [{ v: 5, label: "50" }, { v: 7, label: "70" }, { v: 9, label: "90" }],
            ogeler: K,
            durumlar: [
              ac(KID, "Herkes denizde avlanabilir. Her tekne yalnızca kendi masrafına (MPC) ve kazancına (MB) bakar. Denge M: ==50 sefer==.", ["D", "S", "Em"]),
              ac(KID, "Ama her sefer stoku azaltır ve başkalarının avını düşürür: ==dış maliyet== (her seferde 40 TL). Toplumun gerçek maliyeti MSC = MPC + dış maliyet.", ["D", "S", "Em", "MSC", "ok"]),
              ac(KID, "Optimum MSB = MSC olan A noktasında: ==30 sefer==. Serbest erişim, etkin miktardan 20 sefer fazla avlanır.", ["D", "S", "Em", "MSC", "ok", "Es"]),
              ac(KID, "Kırmızı üçgen ==DWL==: ½ × 20 sefer × 40 TL = 400 TL. Kaynak aşırı tüketildi.", ["D", "S", "Em", "MSC", "Es", "dwl", "pq"])
            ] },
          { tip: "not", metin: "Çözüm, dışsallıkta olduğu gibidir: ==mülkiyet hakkı== vermek (av kotası, lisans), ==düzenleme== (av yasağı, av dönemi) ya da ==vergi/ücret== (Pigou) ile kullanıcıya dış maliyeti hissettirmek." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*Rival*: biri tüketince başkasına az kalır. *Excludable*: ödemeyen dışlanabilir.",
              "Özel mal: rakip ve dışlanabilir. Kamu malı: rakipsiz ve dışlanamaz.",
              "Kulüp malı: rakipsiz ama dışlanabilir. Ortak kaynak: rakip ama dışlanamaz.",
              "Bedavacı sorunu (*free rider*): ödemeden yararlanılabilen malın bedelini kimse ödemek istemez.",
              "Bu yüzden özel kişiler kamu malını genelde üretmez; devlet vergiyle sağlar.",
              "Devlet bazen eğitim gibi özel malları da üretir ve ücretsiz sunar.",
              "Ortak kaynaklar serbest erişimle aşırı tüketilir: MSC > MPC, DWL doğar.",
              "Çözümler: mülkiyet hakkı, düzenleme, vergi."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Aylık abonelikle sunulan bir dizi platformunda bir kişinin izlemesi başkasının izlemesini azaltmaz; abone olmayanlar ise izleyemez. Bu mal hangi türdür?",
        opts: ["Özel mal", "Kamu malı", "Kulüp malı", "Ortak kaynak"],
        a: 2, why: "Rakipsiz (ek izleyici başkasını etkilemez) ve dışlanabilir (abone olmayan izleyemez): kulüp malı. B şıkkı, malın dışlanamaz olmasını gerektirir; burada abonelik dışlama sağlıyor." },
      { q: "10 komşunun her biri mahalleye konacak 200 TL'lik bir sokak lambasından 30 TL değer elde ediyor. Lamba toplumsal olarak yararlı olduğu halde özel firma neden üretmez?",
        opts: ["Dışlanamayan faydadan ödemeden yararlanılabildiği için kimse ödemek istemez (bedavacı sorunu).", "Lambanın toplam faydası maliyetinden küçüktür.", "Lamba rakip bir maldır.", "Devlet zaten her zaman özel malları üretir."],
        a: 0, why: "Toplam fayda 300 TL > 200 TL maliyet; ama ödemeyen komşu da ışıktan yararlanır. Herkes başkasının ödemesini bekler ve özel firma gelir elde edemez. B şıkkı sayıları yanlış yorumluyor." },
      { q: "Tabloda iki malın özellikleri veriliyor. X ve Y hangi türdür?",
        fig: { type: "table", head: ["Mal", "Rakip mi?", "Dışlanabilir mi?"], rows: [["X", "Evet", "Hayır"], ["Y", "Hayır", "Evet"]] },
        opts: ["X özel mal, Y kamu malı", "X kamu malı, Y özel mal", "X kulüp malı, Y ortak kaynak", "X ortak kaynak, Y kulüp malı"],
        a: 3, why: "X rakip ve dışlanamaz: ortak kaynak. Y rakipsiz ve dışlanabilir: kulüp malı. C şıkkı iki türü yer değiştirmiştir." },
      { q: "Devlet okullarında öğrenciler ücretsiz eğitim alıyor. Bu mal için hangisi doğrudur?",
        opts: ["Devlet sunduğu için kamu malıdır.", "Rakip ve dışlanabilir olduğu halde devletçe sunulan bir özel maldır.", "Rakipsiz ve dışlanamaz olduğu için kamu malıdır.", "Ortak kaynaktır."],
        a: 1, why: "Sınıfta koltuk sınırlıdır (rakip) ve kayıt olmayan dışlanabilir. Devletin ürettiği her mal kamu malı olmaz; hükümet eğitim gibi özel malları da sunabilir. A şıkkı malın türünü üreticiye bağlıyor." },
      { q: "Grafikte ortak bir balık stoku gösteriliyor. Serbest erişimde av miktarı ve toplum için en iyi miktar ile ilgili hangisi doğrudur?",
        fig: { type: "graph", xlabel: "Av (sefer)", ylabel: "TL", xmax: 10, ymax: 10, lines: [{ from: [0, 10], to: [9, 1], label: "MB" }, { from: [0, 0], to: [9, 9], label: "MPC", color: 1 }, { from: [0, 4], to: [5.5, 9.5], label: "MSC", color: 2 }], points: [{ q: 5, p: 5, label: "M" }, { q: 3, p: 7, label: "A" }], xticks: [{ v: 3, label: "Q₁" }, { v: 5, label: "Q₂" }] },
        opts: ["Serbest erişimde Q₁ avlanır; stok korunur.", "Serbest erişimde Q₁, optimum Q₂'dir; az av vardır.", "Serbest erişimde Q₂ avlanır, optimum Q₁'dir; kaynak aşırı tüketilir.", "Serbest erişim ile optimum aynıdır."],
        a: 2, why: "Kullanıcılar yalnızca MPC'ye baktığı için MB = MPC noktasında (Q₂) avlanır; dış maliyet dahil edilince optimum MSB = MSC'de (Q₁) olur. Bu yüzden aşırı tüketim vardır. B şıkkı sıralamayı tersine çeviriyor." }
    ]
  };
})();
