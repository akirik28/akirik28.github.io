/* Kitora not defteri · hg406 · 4.6 İç Sınırlar
   Kaynak: AP HuG CED Topic 4.6 (IMP-4.B.5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg406",
  amac: "Bu konu devletin içindeki sınırları, özellikle seçim bölgelerini anlatıyor. Bölgelerin nasıl yeniden çizildiğini (*redistricting*) ve çizginin seçim sonucunu nasıl değiştirebildiğini (*gerrymandering*, *packing*, *cracking*) öğreneceksin.",
  bolumler: [
    {
      baslik: "İç sınırlar ve seçim bölgeleri",
      kisa: "Devletin içindeki sınırlar da gücü paylaştırır; seçim bölgesi bunlardan biridir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗳️", terim: "Voting district", tr: "seçim bölgesi", tanim: "Seçmenlerin bir temsilci seçmek için gruplandığı coğrafi alan.", ornek: "Okulda her şubenin kendi sınıf temsilcisini seçmesi." },
            { ikon: "✏️", terim: "Redistricting", tr: "seçim bölgelerini yeniden çizme", tanim: "Nüfus değiştikçe seçim bölgelerinin sınırlarının yeniden çizilmesi.", ornek: "Bir mahalle büyüyünce iki ayrı bölgeye bölünmesi." },
            { ikon: "⚖️", terim: "Reapportionment", tr: "sandalyelerin yeniden paylaşımı", tanim: "Temsilci sandalyelerinin nüfusa göre bölgelere yeniden dağıtılması. Sınırları çizmeden önce sandalye sayısı belirlenir.", ornek: "ABD'de 435 sandalye eyaletlere nüfus sayımına göre paylaştırılır." }
          ] },
        { tip: "not", metin: "İç sınırlar farklı ölçeklerde karşımıza çıkar: eyalet ya da il, ilçe, mahalle, okul bölgesi, seçim bölgesi. Hepsi gücün ve kaynakların kimlere ve nasıl dağıtılacağını belirler." }
      ]
    },
    {
      baslik: "Sayım, paylaşım, yeniden çizim",
      kisa: "Nüfus sayımı sandalyeleri paylaştırır; ardından bölge sınırları yeniden çizilir.",
      bloklar: [
        { tip: "adimlar", baslik: "ABD örneği: her on yılda bir", adimlar: [
            { baslik: "Nüfus sayımı", metin: "Her on yılda bir kaç kişi nerede yaşıyor, sayılır." },
            { baslik: "*Reapportionment*", metin: "Sandalyeler eyaletlere yeniden paylaştırılır; nüfusu artan eyalet sandalye kazanır." },
            { baslik: "*Redistricting*", metin: "Her eyalet kendi içinde bölge sınırlarını yeniden çizer." },
            { baslik: "Seçim", metin: "Seçmenler yeni çizilmiş bölgelerde oy kullanır." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "⚖️", baslik: "Eşit nüfus", metin: "Her bölgede yaklaşık aynı sayıda kişi olmalıdır." },
            { ikon: "🔗", baslik: "Bitişiklik (*contiguity*)", metin: "Bölge parçalı değil, tek parça olmalıdır." },
            { ikon: "⭕", baslik: "Derli toplu şekil (*compactness*)", metin: "Bölge dolaşık değil, olabildiğince toplu olmalıdır." }
          ] }
      ]
    },
    {
      baslik: "*Gerrymandering*: kasıtlı çizgi",
      kisa: "*Gerrymandering*, seçim bölgesi sınırlarını bir tarafın lehine kasıtlı çizmektir.",
      bloklar: [
        { tip: "hikaye", ikon: "🦎", baslik: "1812: semender bölge", metin: "Massachusetts'te Vali Elbridge Gerry'nin onayladığı bir seçim bölgesi haritada semendere benziyordu. Gazeteler Gerry ile salamander sözcüklerini birleştirip *gerrymander* adını verdi." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🗺️", terim: "Gerrymandering", tr: "seçim bölgesini kayırarak çizme", tanim: "Seçim bölgelerinin sınırlarını belli bir parti ya da grubun lehine çizmek. Seçim sonucunu oylardan önce şekillendirir.", ornek: "Rakibin seçmenlerini haritada kasıtlı biçimde dağıtmak." },
            { ikon: "🗑️", terim: "Wasted vote", tr: "boşa giden oy", tanim: "Sonucu değiştirmeyen oy: ya kaybeden tarafa giden ya da kazanana gerekenden fazla verilen oy.", ornek: "Bir bölgede %95 alan adayın fazla oyları." }
          ] }
      ]
    },
    {
      baslik: "*Packing* ve *cracking*",
      kisa: "*Packing* rakibi tek bölgeye yığar; *cracking* rakibi birçok bölgeye dağıtır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📦", baslik: "*Packing* (yığma)", maddeler: ["Rakip seçmenler az sayıda bölgeye toplanır", "Orada büyük farkla kazanır; fazla oylar boşa gider"] },
          sag: { ikon: "🔨", baslik: "*Cracking* (parçalama)", maddeler: ["Rakip seçmenler birçok bölgeye dağıtılır", "Her yerde azınlıkta kalır, hiçbirinde kazanamaz"] },
          oyun: [
            { metin: "Bir partinin seçmenleri tek bir bölgede toplanıyor; orada %95 oy alıyor.", cevap: "sol", neden: "Tek bölgeye yığma: *packing*." },
            { metin: "Bir mahalle üç farklı bölgeye bölünüyor ve üçünde de azınlık kalıyor.", cevap: "sag", neden: "Gücü dağıtma: *cracking*." },
            { metin: "Rakibin boşa giden fazla oyları artıyor.", cevap: "sol", neden: "Bir bölgeye fazla oy yığıldı: *packing*." },
            { metin: "Güçlü bir seçmen bloğu bölünerek etkisi seyreltiliyor.", cevap: "sag", neden: "Seyreltme: *cracking*." }
          ] },
        { tip: "grafik", baslik: "Aynı 25 seçmen, farklı çizgiler", xlabel: "Seçim bölgesi", ylabel: "Seçmen", xmax: 6, ymax: 7,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          yticks: [{ v: 2.5, label: "3 oy" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "a1", tip: "alan", renk: 0, noktalar: [[0.65,0],[1.35,0],[1.35,3],[0.65,3]] },
            { id: "b1", tip: "alan", renk: 2, noktalar: [[0.65,3],[1.35,3],[1.35,5],[0.65,5]] },
            { id: "w1", tip: "yazi", x: 1, y: 5.45, metin: "A" },
            { id: "a2", tip: "alan", renk: 0, noktalar: [[1.65,0],[2.35,0],[2.35,3],[1.65,3]] },
            { id: "b2", tip: "alan", renk: 2, noktalar: [[1.65,3],[2.35,3],[2.35,5],[1.65,5]] },
            { id: "w2", tip: "yazi", x: 2, y: 5.45, metin: "A" },
            { id: "a3", tip: "alan", renk: 0, noktalar: [[2.65,0],[3.35,0],[3.35,3],[2.65,3]] },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[2.65,3],[3.35,3],[3.35,5],[2.65,5]] },
            { id: "w3", tip: "yazi", x: 3, y: 5.45, metin: "A" },
            { id: "a4", tip: "alan", renk: 0, noktalar: [[3.65,0],[4.35,0],[4.35,3],[3.65,3]] },
            { id: "b4", tip: "alan", renk: 2, noktalar: [[3.65,3],[4.35,3],[4.35,5],[3.65,5]] },
            { id: "w4", tip: "yazi", x: 4, y: 5.45, metin: "A" },
            { id: "a5", tip: "alan", renk: 0, noktalar: [[4.65,0],[5.35,0],[5.35,3],[4.65,3]] },
            { id: "b5", tip: "alan", renk: 2, noktalar: [[4.65,3],[5.35,3],[5.35,5],[4.65,5]] },
            { id: "w5", tip: "yazi", x: 5, y: 5.45, metin: "A" },
            { id: "th", tip: "cizgi", renk: 3, kesik: true, from: [0.4, 2.5], to: [5.6, 2.5] },
            { id: "sm", tip: "yazi", x: 3, y: 6.6, metin: "A: 5 sandalye · B: 0" },
            { id: "cr", tip: "yazi", x: 2, y: 6.0, metin: "cracking", gizli: true },
            { id: "pk", tip: "yazi", x: 4.5, y: 6.0, metin: "packing", gizli: true }
          ],
          durumlar: [
            { metin: "25 seçmen: 15 A (mavi) ve 10 B (kırmızı), 5 bölge ve her bölgede 5 seçmen. Her bölgede 3 A ve 2 B var; kazanmak için 3 oy gerekir (kesikli çizgi)." },
            { metin: "Her bölgede çoğunluk A'da olduğu için ==A bütün bölgeleri kazanır==: oyların %60'ı, sandalyelerin %100'ü. Bu henüz gerrymander değil; tek kazananlı sistemin doğal sonucu.", set: { a1: { noktalar: [[0.65,0],[1.35,0],[1.35,3],[0.65,3]] }, b1: { noktalar: [[0.65,3],[1.35,3],[1.35,5],[0.65,5]] }, w1: { metin: "A" }, a2: { noktalar: [[1.65,0],[2.35,0],[2.35,3],[1.65,3]] }, b2: { noktalar: [[1.65,3],[2.35,3],[2.35,5],[1.65,5]] }, w2: { metin: "A" }, a3: { noktalar: [[2.65,0],[3.35,0],[3.35,3],[2.65,3]] }, b3: { noktalar: [[2.65,3],[3.35,3],[3.35,5],[2.65,5]] }, w3: { metin: "A" }, a4: { noktalar: [[3.65,0],[4.35,0],[4.35,3],[3.65,3]] }, b4: { noktalar: [[3.65,3],[4.35,3],[4.35,5],[3.65,5]] }, w4: { metin: "A" }, a5: { noktalar: [[4.65,0],[5.35,0],[5.35,3],[4.65,3]] }, b5: { noktalar: [[4.65,3],[5.35,3],[5.35,5],[4.65,5]] }, w5: { metin: "A" }, sm: { metin: "A: 5 sandalye · B: 0" } } },
            { metin: "Adil görünen bir çizim: A 3, B 2 sandalye kazanıyor. Sandalye oranı (%60–%40) oy oranına uyuyor.", set: { a1: { noktalar: [[0.65,0],[1.35,0],[1.35,2],[0.65,2]] }, b1: { noktalar: [[0.65,2],[1.35,2],[1.35,5],[0.65,5]] }, w1: { metin: "B" }, a2: { noktalar: [[1.65,0],[2.35,0],[2.35,2],[1.65,2]] }, b2: { noktalar: [[1.65,2],[2.35,2],[2.35,5],[1.65,5]] }, w2: { metin: "B" }, a3: { noktalar: [[2.65,0],[3.35,0],[3.35,4],[2.65,4]] }, b3: { noktalar: [[2.65,4],[3.35,4],[3.35,5],[2.65,5]] }, w3: { metin: "A" }, a4: { noktalar: [[3.65,0],[4.35,0],[4.35,4],[3.65,4]] }, b4: { noktalar: [[3.65,4],[4.35,4],[4.35,5],[3.65,5]] }, w4: { metin: "A" }, a5: { noktalar: [[4.65,0],[5.35,0],[5.35,3],[4.65,3]] }, b5: { noktalar: [[4.65,3],[5.35,3],[5.35,5],[4.65,5]] }, w5: { metin: "A" }, sm: { metin: "A: 3 sandalye · B: 2" } } },
            { metin: "B lehine gerrymander: A'nın seçmenleri üç bölgede 2'şer kişiyle dağıtılıyor (==cracking==) ve kalanı iki bölgede toplanıyor (==packing==). B oyların yalnızca %40'ını alıp 3 sandalye kazanıyor.", set: { a1: { noktalar: [[0.65,0],[1.35,0],[1.35,2],[0.65,2]] }, b1: { noktalar: [[0.65,2],[1.35,2],[1.35,5],[0.65,5]] }, w1: { metin: "B" }, a2: { noktalar: [[1.65,0],[2.35,0],[2.35,2],[1.65,2]] }, b2: { noktalar: [[1.65,2],[2.35,2],[2.35,5],[1.65,5]] }, w2: { metin: "B" }, a3: { noktalar: [[2.65,0],[3.35,0],[3.35,2],[2.65,2]] }, b3: { noktalar: [[2.65,2],[3.35,2],[3.35,5],[2.65,5]] }, w3: { metin: "B" }, a4: { noktalar: [[3.65,0],[4.35,0],[4.35,5],[3.65,5]] }, b4: { noktalar: [[3.65,5],[4.35,5],[4.35,5],[3.65,5]] }, w4: { metin: "A" }, a5: { noktalar: [[4.65,0],[5.35,0],[5.35,4],[4.65,4]] }, b5: { noktalar: [[4.65,4],[5.35,4],[5.35,5],[4.65,5]] }, w5: { metin: "A" }, sm: { metin: "A: 2 sandalye · B: 3" } }, goster: ["cr", "pk"] }
          ] },
        { tip: "tuzak", metin: "Sandalye ile oy oranı farklıysa hemen gerrymander diye düşünme.", yanlis: "Bir parti oyların %60'ını alıp bütün sandalyeleri kazandıysa gerrymander yapılmıştır.", dogru: "Tek kazananlı sistemde her bölgede az farkla öne geçen taraf bütün sandalyeleri alabilir. ==Gerrymander, çizginin kasıtlı olarak bir tarafı kayırmasıdır.==" }
      ]
    },
    {
      baslik: "Hangi ölçekte?",
      kisa: "Seçim bölgeleri ulusal, bölgesel ve yerel ölçekte sonucu etkiler.",
      bloklar: [
        { tip: "tablo", baslik: "Üç ölçek", head: ["Ölçek", "Çizilen alan", "Neyi etkiler?"], rows: [
            ["Ulusal", "Parlamento ya da ulusal meclis bölgeleri", "Ülkenin yasalarını kimin yapacağı"],
            ["Eyalet ya da il", "Eyalet meclisi bölgeleri", "Bölgesel yasalar ve bütçe"],
            ["Yerel", "Belediye meclisi, okul kurulu bölgeleri", "Mahalle hizmetleri, okul kaynakları"]
          ] },
        { tip: "not", metin: "Türkiye'de milletvekili seçim çevreleri esas olarak il sınırlarıdır; nüfusu büyük olan illerde il birden fazla seçim çevresine ayrılır. Çizim yöntemi ülkeden ülkeye değişir; ABD gibi tek kazananlı bölge sistemlerinde çizgilerin etkisi daha belirgindir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "İç sınırlar (eyalet, il, seçim bölgesi, okul bölgesi) gücün ve kaynakların dağılımını belirler.",
            "*Voting district* = seçmenlerin temsilci seçtiği alan. *Redistricting* = sınırları yeniden çizmek; *reapportionment* = sandalyeleri yeniden paylaştırmak.",
            "Nüfus sayımı → sandalye paylaşımı → bölge çizimi → seçim.",
            "İyi çizim: eşit nüfus, bitişik (*contiguous*), derli toplu (*compact*).",
            "*Gerrymandering* = sınırları bir tarafın lehine kasıtlı çizmek (Gerry, 1812).",
            "*Packing* rakibi tek bölgeye yığar; *cracking* birçok bölgeye dağıtır. İkisi de rakibin oylarını boşa harcatır.",
            "Gerrymander ulusal, bölgesel ve yerel ölçekte sonuç değiştirebilir."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir eyalet meclisi, rakip partinin seçmenlerini tek bir bölgede topluyor; rakip orada %90 oy alıyor ama öteki bölgelerde zayıf kalıyor. Bu taktik hangisidir?",
      opts: ["*Cracking*", "*Packing*", "*Reapportionment*", "*Contiguity*"],
      a: 1,
      why: "Rakip seçmenleri az sayıda bölgeye yığmak *packing*'dir. *Cracking* ise tam tersine seçmenleri birçok bölgeye dağıtır."
    },
    {
      q: "Çoğunlukla bir azınlık grubun yaşadığı mahalle üç ayrı seçim bölgesine bölünüyor ve grup üçünde de azınlıkta kalıyor. Bu uygulama hangisidir?",
      opts: ["*Packing*", "*Reapportionment*", "*Cracking*", "*Compactness*"],
      a: 2,
      why: "Güçlü bir seçmen grubunu birçok bölgeye dağıtarak etkisini seyreltmek *cracking*'dir. *Packing* yığar, dağıtmaz."
    },
    {
      q: "Tabloda 5 bölgenin oyları var. Toplamda A 15, B 10 oy aldı; B 3 bölgeyi kazandı. Bu sonucu en iyi hangisi açıklar?",
      fig: { type: "table", head: ["Bölge", "A oyu", "B oyu"], rows: [["1", "2", "3"], ["2", "2", "3"], ["3", "2", "3"], ["4", "5", "0"], ["5", "4", "1"]] },
      opts: ["Sandalyeler oy oranına tam uyuyor; çizimde sorun yok.", "A çok oy aldığı için daha çok sandalye kazandı.", "*Reapportionment* yüzünden B'nin sandalye sayısı arttı.", "A'nın seçmenleri üç bölgede *cracking*, iki bölgede *packing* ile boşa harcatılmış olabilir."],
      a: 3,
      why: "A üç bölgede 2'şer oyla dağıtılmış (*cracking*), 4. ve 5. bölgede ise 5 ve 4 oyla yığılmış (*packing*). Böylece oyların %60'ı alınıp sandalyelerin yalnızca %40'ı kazanıldı."
    },
    {
      q: "Nüfus sayımından sonra bir eyaletin Temsilciler Meclisi'ndeki sandalye sayısı 10'dan 9'a düşüyor. Bu işlem hangisidir?",
      opts: ["*Redistricting*", "*Reapportionment*", "*Gerrymandering*", "*Packing*"],
      a: 1,
      why: "Sandalyelerin nüfusa göre yeniden paylaşılması *reapportionment*'tır. *Redistricting* ise eyalet içinde bölge sınırlarının yeniden çizilmesidir."
    },
    {
      q: "Oyların yaklaşık %52'sini alan bir parti sandalyelerin yalnızca %30'unu kazandı. Hangisi bunu en olası açıklar?",
      opts: ["Bölge sınırlarının onun seçmenlerini *packing* ve *cracking* ile boşa harcatacak biçimde çizilmiş olması", "Bölgelerin gereğinden fazla *compact* olması", "Sandalye sayısının *reapportionment* ile artması", "*Relict boundary*'lerin kullanılması"],
      a: 0,
      why: "Oy ile sandalye oranı arasındaki büyük fark, çizginin tek tarafı kayırdığına işaret edebilir. Ancak tek başına kanıt değildir; yine de en olası açıklama budur. *Compactness* gerrymander'ın tersine, adil çizimin ölçütüdür."
    }
  ]
};
