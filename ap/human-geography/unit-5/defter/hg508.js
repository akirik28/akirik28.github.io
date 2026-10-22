/* Kitora not defteri · hg508 · Von Thünen Modeli (5.8)
   Kaynak: AP HuG CED Topic 5.8 (PSO-5.D.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg508",
  amac: "Bu konu tarım arazisinin pazara uzaklığa göre nasıl kullanıldığını anlatan *Von Thünen* modelini işliyor. Taşıma maliyetinin neden iç içe halkalar oluşturduğunu, halkaların sırasını ve modelin gerçek dünyada nerede tuttuğunu, nerede tutmadığını öğreneceksin.",
  bolumler: [
    {
      baslik: "Model neyi varsayıyor?",
      kisa: "Düz, yalıtılmış bir ovada tek pazar vardır; fark yaratan tek şey uzaklıktır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Von Thünen model", tr: "Von Thünen modeli", tanim: "Alman iktisatçı Johann Heinrich von Thünen'in önerdiği model: tarım arazisi kullanımının pazara uzaklıkla nasıl değiştiğini açıklar.", ornek: "Şehir pazarının çevresinde ürünlerin iç içe kuşaklar halinde dizilmesi." },
            { ikon: "🚚", terim: "Transportation cost", tr: "taşıma maliyeti", tanim: "Ürünü pazara götürmenin bedeli. Uzaklıkla artar; ağır, hacimli ve çabuk bozulan ürünlerde daha yüksektir.", ornek: "Taze süt bir gün içinde ulaşmalıdır; buğday ise silolarda bekleyebilir." },
            { ikon: "🏷️", terim: "Land rent", tr: "arazi kirası", tanim: "Çiftçinin bir arazi için ödemeye razı olacağı en yüksek bedel; yani ürünün gelirinden üretim ve taşıma maliyeti çıkınca kalan kâr.", ornek: "Pazara yakın toprak pahalıdır, çünkü orada taşıma maliyeti küçüktür." }
          ] },
        { tip: "liste", baslik: "Modelin varsayımları", maddeler: [
            { ikon: "🏙️", baslik: "Tek pazar", metin: "Ovanın tam ortasında tek bir şehir var; bütün ürünler oraya satılır." },
            { ikon: "🟩", baslik: "Düz ve aynı arazi", metin: "Toprak, iklim ve verimlilik her yerde aynı; nehir ya da dağ engeli yok." },
            { ikon: "🛤️", baslik: "Tek ulaşım türü", metin: "Taşıma maliyeti uzaklıkla orantılı artar." },
            { ikon: "📊", baslik: "Kâr peşinde çiftçiler", metin: "Herkes en kârlı ürünü seçer; yalıtılmış devlette dış ticaret yoktur." }
          ] }
      ]
    },
    {
      baslik: "Uzaklık arttıkça arazi kirası düşer",
      kisa: "Her ürünün kârı pazardan uzaklaştıkça azalır; en kârlı ürün halkayı belirler.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Arazi kirası", alt: "birim arazide kâr" }, "=",
            { t: "Gelir" }, "−",
            { t: "Üretim maliyeti" }, "−",
            { t: "Taşıma maliyeti", alt: "uzaklıkla artar" }
          ], aciklama: "Gelir ve üretim maliyeti uzaklıkla değişmez; yalnızca taşıma maliyeti büyür. Bu yüzden her ürünün kirası pazardan uzaklaştıkça düşer." },
        { tip: "grafik", baslik: "Arazi kirası çizgileri ve halka sınırları", xlabel: "Pazara uzaklık", ylabel: "Arazi kirası", xmax: 10, ymax: 10,
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[0, 0], [1.51, 0], [1.51, 10], [0, 10]], gizli: true },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.51, 0], [3.07, 0], [3.07, 10], [1.51, 10]], gizli: true },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[3.07, 0], [5.46, 0], [5.46, 10], [3.07, 10]], gizli: true },
            { id: "b4", tip: "alan", renk: 3, noktalar: [[5.46, 0], [8, 0], [8, 10], [5.46, 10]], gizli: true },
            { id: "l1", tip: "cizgi", renk: 0, from: [0, 9], to: [3.4, 0], etiket: "Süt-sebze" },
            { id: "l2", tip: "cizgi", renk: 1, from: [0, 7], to: [5.3, 0], etiket: "Orman", gizli: true },
            { id: "l3", tip: "cizgi", renk: 2, from: [0, 5.5], to: [6.6, 0], etiket: "Tahıl", gizli: true },
            { id: "l4", tip: "cizgi", renk: 3, from: [0, 3], to: [8, 0], etiket: "Hayvancılık", gizli: true },
            { id: "s1", tip: "nokta", x: 1.51, y: 5, etiket: "1–2", kilavuz: true, gizli: true },
            { id: "s2", tip: "nokta", x: 3.07, y: 2.94, etiket: "2–3", kilavuz: true, gizli: true },
            { id: "s3", tip: "nokta", x: 5.46, y: 0.95, etiket: "3–4", kilavuz: true, gizli: true },
            { id: "n1", tip: "yazi", x: 0.75, y: 9.6, metin: "1", gizli: true },
            { id: "n2", tip: "yazi", x: 2.3, y: 9.6, metin: "2", gizli: true },
            { id: "n3", tip: "yazi", x: 4.3, y: 9.6, metin: "3", gizli: true },
            { id: "n4", tip: "yazi", x: 6.7, y: 9.6, metin: "4", gizli: true },
            { id: "n5", tip: "yazi", x: 9.1, y: 9.6, metin: "boş", gizli: true }
          ],
          durumlar: [
            { metin: "Taze süt ve sebze **en yüksekten başlar** ama taşıması çok pahalı olduğu için **en dik** iner: pazara yakınken çok kazandırır, uzaklaşınca hızla kâr bırakmaz." },
            { metin: "Orman ürünü (odun) ağır ve hacimlidir; çizgisi dik ama süt-sebzeden daha az yüksektir.", goster: ["l2"] },
            { metin: "Tahıl dayanıklı ve nispeten hafiftir; çizgisi daha yatay iner.", goster: ["l3"] },
            { metin: "Hayvancılık en düşükten başlar ama en yatay çizgidir: hayvanlar pazara yürüyerek gelebilir, geniş otlak ucuzdur.", goster: ["l4"] },
            { metin: "Her uzaklıkta **en yüksek çizgi** o noktadaki ürünü seçer. ==Çizgilerin kesiştiği yerler halka sınırlarıdır.== Hiçbir çizgi sıfırın üstünde değilse tarım yapılmaz.", goster: ["s1", "s2", "s3"] },
            { metin: "Sonuç: pazardan dışa doğru ==1 süt-sebze, 2 orman, 3 tahıl, 4 hayvancılık==, ötesi boş (tarım kârlı değil).", goster: ["b1", "b2", "b3", "b4", "n1", "n2", "n3", "n4", "n5"] }
          ] }
      ]
    },
    {
      baslik: "Dört halka ve ürünleri",
      kisa: "Pazardan dışa: süt ve sebze, orman, tahıl, hayvancılık.",
      bloklar: [
        { tip: "grafik", baslik: "Halkaların haritası (kuşbakışı)", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "r4", tip: "alan", renk: 3, noktalar: [[0.2, 0.2], [9.8, 0.2], [9.8, 9.8], [0.2, 9.8]], gizli: true },
            { id: "r3", tip: "alan", renk: 2, noktalar: [[1.6, 1.6], [8.4, 1.6], [8.4, 8.4], [1.6, 8.4]], gizli: true },
            { id: "r2", tip: "alan", renk: 1, noktalar: [[2.8, 2.8], [7.2, 2.8], [7.2, 7.2], [2.8, 7.2]], gizli: true },
            { id: "r1", tip: "alan", renk: 0, noktalar: [[3.8, 3.8], [6.2, 3.8], [6.2, 6.2], [3.8, 6.2]], gizli: true },
            { id: "t4", tip: "yazi", x: 5, y: 8.9, metin: "4 · Hayvancılık", gizli: true },
            { id: "t3", tip: "yazi", x: 5, y: 7.7, metin: "3 · Tahıl", gizli: true },
            { id: "t2", tip: "yazi", x: 5, y: 6.6, metin: "2 · Orman", gizli: true },
            { id: "t1", tip: "yazi", x: 5, y: 5.75, metin: "1 · Süt-sebze", gizli: true },
            { id: "mk", tip: "nokta", x: 5, y: 5 },
            { id: "mt", tip: "yazi", x: 5, y: 4.3, metin: "Pazar şehri" }
          ],
          durumlar: [
            { metin: "Ovanın ortasında tek bir **pazar şehri** var; bütün ürünler oraya satılacak." },
            { metin: "Pazara en yakın halka: ==süt, taze sebze, meyve.== Çabuk bozulur, her gün taze gerekir; arazi pahalıdır, üretim yoğundur.", goster: ["r1", "t1"] },
            { metin: "İkinci halka: ==orman== (yakacak ve yapı odunu). Ağır ve hacimli olduğu için taşıması pahalıdır.", goster: ["r2", "t2"] },
            { metin: "Üçüncü halka: ==tahıl.== Dayanıklı ve daha hafif; arazi daha ucuz, üretim daha yaygındır.", goster: ["r3", "t3"] },
            { metin: "Dış halka: ==hayvancılık.== Hayvanlar pazara yürüyebilir, geniş otlak ucuzdur. Bunun ötesinde arazi boştur.", goster: ["r4", "t4"] }
          ] },
        { tip: "tablo", baslik: "Halka, ürün ve neden", head: ["Halka", "Ürün", "Neden orada?"], rows: [
            ["1", "Süt, taze sebze, meyve", "Çabuk bozulur, taze gerekir; pahalı arazide yoğun üretim"],
            ["2", "Orman (odun)", "Ağır ve hacimli: taşıma maliyeti yüksek"],
            ["3", "Tahıl", "Dayanıklı ve daha hafif; depolanabilir"],
            ["4", "Hayvancılık", "Hayvan kendi yürür; ucuz arazide yaygın üretim"],
            ["Ötesi", "Tarım yok", "Taşıma maliyeti geliri aşar"]
          ], not: "Pazara yakın halkalarda üretim **yoğun** (*intensive*), uzakta **yaygın** (*extensive*) olur." }
      ]
    },
    {
      baslik: "Halkaların sırası neden böyle?",
      kisa: "Ağır, çabuk bozulan ve yüksek kâr getiren ürün pazara yakın yetişir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏙️", baslik: "Pazara yakın halkalar", maddeler: ["Çabuk bozulan ya da taşıması pahalı ürün", "Arazi kirası yüksek, üretim yoğun"] },
          sag: { ikon: "🌾", baslik: "Pazardan uzak halkalar", maddeler: ["Dayanıklı, hafif ya da kendi yürüyen ürün", "Arazi kirası düşük, üretim yaygın"] },
          oyun: [
            { metin: "Taze süt bir günden fazla bekleyemiyor.", cevap: "sol", neden: "Çabuk bozulan ürün pazara yakın yetişir." },
            { metin: "Sığırlar kendi ayaklarıyla pazara yürüyor.", cevap: "sag", neden: "Taşıma maliyeti düşük: uzak halka." },
            { metin: "Yakacak odun ağır ve hacimli; kamyon başına az taşınıyor.", cevap: "sol", neden: "Taşıması pahalı ürün yakın halkaya yerleşir." },
            { metin: "Buğday silolarda aylarca bekleyebiliyor.", cevap: "sag", neden: "Dayanıklı ürün uzaktan da getirilebilir." }
          ] },
        { tip: "tuzak", metin: "Uzak arazi neden ucuz?", yanlis: "Pazardan uzak halkanın toprağı daha verimsiz olduğu için arazi ucuzdur.", dogru: "Model toprağı her yerde ==aynı== varsayar. Uzak arazi, ürünü pazara götürmek pahalı olduğu için ==daha az kâr getirir== ve bu yüzden ucuzdur." }
      ]
    },
    {
      baslik: "Sayılarla: halka sınırı nasıl bulunur?",
      kisa: "İki ürünün arazi kirası eşitlendiği uzaklık halka sınırıdır.",
      bloklar: [
        { tip: "ornek", baslik: "Sebze mi buğday mı?", durum: "Pazar şehrine d km uzaklıktaki arazide iki ürün düşün. Sebzede taşıma öncesi kâr 6 bin TL/ha, taşıma 2 bin TL/ha·km. Buğdayda taşıma öncesi kâr 2 bin TL/ha, taşıma 0,4 bin TL/ha·km. Halka sınırı kaç km'dedir?",
          adimlar: ["Kira doğruları: sebze = 6 − 2d; buğday = 2 − 0,4d.", "Eşitle: 6 − 2d = 2 − 0,4d → 4 = 1,6d → d = 2,5 km.", "Kontrol: sebze 6 − 5 = 1; buğday 2 − 1 = 1. Eşit çıktı.", "Yorum: 0–2,5 km arasında sebzenin kirası yüksek; 2,5 km'den sonra buğday kazanır. Buğdayın kirası 5 km'de sıfır olur (2 − 0,4 × 5 = 0)."],
          sonuc: "Sebze–buğday sınırı ==2,5 km==, tarımın bittiği yer ==5 km==. Soğutmalı taşıma sebzenin taşıma maliyetini 1,5 bin TL/km'ye indirirse sınır 4 ÷ 1,1 ≈ ==3,6 km==ye kayar." },
        { tip: "grafik", baslik: "Taşıma ucuzlayınca halka sınırı dışa kayar", xlabel: "Pazara uzaklık (km)", ylabel: "Kira (bin TL/ha)", xmax: 6, ymax: 7,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "sb", tip: "cizgi", renk: 0, from: [0, 6], to: [3, 0], etiket: "Sebze" },
            { id: "bg", tip: "cizgi", renk: 2, from: [0, 2], to: [5, 0], etiket: "Buğday", gizli: true },
            { id: "kes", tip: "nokta", x: 2.5, y: 1, etiket: "2,5 km", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Sebze: pazara yakınken 6 bin TL kazandırır ama her km'de **2 bin TL** kaybeder; 3 km'de kira sıfıra iner." },
            { metin: "Buğday: yalnızca 2 bin TL'den başlar ama her km'de sadece **0,4 bin TL** kaybeder; 5 km'ye kadar kâr bırakır.", goster: ["bg"] },
            { metin: "İki çizgi ==2,5 km=='de kesişir: sınırın içinde sebze, dışında buğday.", goster: ["kes"] },
            { metin: "Soğutmalı taşıma gelince sebze çizgisi **yatıklaşır** (1,5 bin TL/km): sınır ==3,6 km==ye kayar. Taşıma ucuzladıkça sebze halkası genişler.", set: { sb: { to: [4, 0] }, kes: { x: 3.64, y: 0.55, etiket: "≈3,6 km" } } }
          ] }
      ]
    },
    {
      baslik: "Modelin sınırları ve ölçekler",
      kisa: "Uzman bölgeler, engeller ve ucuz ulaşım halkaları bozar; model yine de yol gösterir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Model iyi açıklar", maddeler: ["Kent çevresinde yoğun, uzakta yaygın üretim", "Taşıma maliyeti ve uzaklığın etkisi"] },
          sag: { ikon: "⚠️", baslik: "Model tutmaz", maddeler: ["İklim, toprak, engel ve çoklu pazar", "Soğuk zincir, hızlı ulaşım, uzman bölge"] },
          oyun: [
            { metin: "Büyük bir şehrin hemen çevresindeki bahçelerde taze sebze yetişiyor.", cevap: "sol", neden: "Yakın halkada yoğun, bozulabilir ürün: model tutuyor." },
            { metin: "Akdeniz kıyısındaki seralar, yüzlerce km ötedeki şehirlere domates gönderiyor.", cevap: "sag", neden: "İklim ve uzman bölge, uzaklığın önüne geçiyor." },
            { metin: "Kenya'dan Avrupa'ya soğuk zincirle uçakla kesme çiçek gidiyor.", cevap: "sag", neden: "Hızlı ulaşım mesafenin maliyetini düşürüyor." },
            { metin: "Rize'de çay, yalnızca iklim ve eğim uygun olduğu için yetişiyor.", cevap: "sag", neden: "Fiziksel koşullar belirleyici; halkalara uymaz." }
          ] },
        { tip: "tablo", baslik: "Farklı ölçeklerde model", head: ["Ölçek", "Nasıl çalışır?", "Sınırı"], rows: [
            ["Yerel", "Bir şehrin çevresinde halkalar en net görülür", "Nehir, yol ve tepeler halkaları bozar"],
            ["Bölgesel ve ulusal", "Büyük şehirler ve limanlar pazar işlevi görür", "Birden çok pazar ve ulaşım ağı kuşakları karıştırır"],
            ["Küresel", "Uzaklık ve taşıma maliyeti hâlâ ürün seçimini etkiler", "Soğuk zincir ve konteyner mesafeyi önemsizleştirir"]
          ] },
        { tip: "tuzak", metin: "Modelin tutmadığı örnekler, modelin yanlış olduğu anlamına gelmez.", yanlis: "Seralar halkalara uymuyor; o halde *Von Thünen* modeli yanlıştır.", dogru: "Model ==uzaklığın ve taşıma maliyetinin etkisini== gösterir; bu etki gerçektir ama tek etken değildir. İklim, toprak, politika ve teknoloji **uzman tarım bölgeleri** yaratıp halkaları bozabilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Von Thünen* modeli, tarımsal arazi kullanımını pazara uzaklık ve **taşıma maliyeti** ile açıklar.",
            "Varsayımlar: tek merkezî pazar, düz ve her yerde aynı arazi, tek ulaşım türü, kâr peşinde çiftçiler.",
            "Arazi kirası = gelir − üretim maliyeti − taşıma maliyeti; uzaklıkla taşıma maliyeti büyür, kira düşer.",
            "Pazardan dışa halkalar: 1 süt-sebze (*dairy*, *market gardening*), 2 orman, 3 tahıl, 4 hayvancılık, ötesi boş.",
            "Ağır, hacimli ve çabuk bozulan ürünler pazara yakındır; hayvanlar kendi yürüdüğü için uzaktadır.",
            "Halka sınırı iki ürünün kira doğrularının kesiştiği uzaklıktır; örnekte sebze–buğday sınırı 2,5 km.",
            "Taşıma ucuzlayınca kira doğruları yatıklaşır, halkalar dışa kayar ve bulanıklaşır.",
            "Model iklim, toprak, engeller ve uzman bölgeler yüzünden her yerde tutmaz; yine de uzaklığın etkisini göstermede güçlüdür."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi *Von Thünen* modelinin varsayımlarından biri **değildir**?",
      opts: ["Ovanın ortasında tek bir pazar şehri vardır", "Toprak ve iklim ovanın her yerinde aynıdır", "Hükümet destekleri çiftçilerin ürün seçimini belirler", "Taşıma maliyeti pazara uzaklıkla artar"],
      a: 2,
      why: "Model, yalıtılmış ve düz bir ovada tek pazar ve uzaklıkla artan taşıma maliyeti varsayar; hükümet politikası modelin dışındadır ve gerçek dünyada halkaları bozan etkenlerden biridir. En çekici yanlış şık B'dir: toprağın her yerde aynı olması tam da modelin varsayımıdır." },
    { q: "Grafikte iki ürünün arazi kirasının pazara uzaklıkla değişimi gösterilmiştir. Pazara 5 birim uzaklıktaki bir çiftçi hangi ürünü yetiştirmelidir?",
      fig: { type: "graph", xlabel: "Pazara uzaklık", ylabel: "Arazi kirası", xmax: 8, ymax: 9, lines: [{ from: [0, 8], to: [4, 0], label: "X" }, { from: [0, 4], to: [6, 0], label: "Y" }], points: [{ q: 3, p: 2, label: "S", guides: true }], caption: "X ve Y ürünlerinin kira doğruları" },
      opts: ["X; çünkü doğrusu daha yüksekten başlar", "Y; çünkü bu uzaklıkta yalnızca Y'nin arazi kirası pozitiftir", "İkisi de; çünkü S noktasında kiralar eşittir", "Hiçbiri; çünkü 5 birimde tarım hiçbir zaman yapılamaz"],
      a: 1,
      why: "X doğrusu 4 birimde sıfıra iner; 5 birimde negatiftir, yani zarar ettirir. Y ise 6 birime kadar pozitiftir. En çekici yanlış şık A: başlangıçtaki yükseklik değil, o uzaklıktaki yükseklik belirleyicidir; kesişim (S) 3 birimdedir, 5'te değil." },
    { q: "Bir ülkede soğutmalı kamyonlar ve hızlı yollar yaygınlaşıyor. *Von Thünen* mantığına göre taze sebzenin arazi kirası doğrusu ve halkası nasıl değişir?",
      opts: ["Doğru daha dikleşir, sebze halkası pazara doğru daralır", "Sebze halkası orman halkasının dışına çıkar", "Model daha kusursuz geçerli olur; halkalar belirginleşir", "Doğru yatıklaşır; sebze pazardan uzakta da kârlı olur, halka dışa kayar"],
      a: 3,
      why: "Taşıma maliyeti düşünce uzaklığın kâr üzerindeki etkisi azalır: doğru yatıklaşır ve halka sınırı dışa kayar. En çekici yanlış şık C: ucuz ulaşım halkaları belirginleştirmez, tersine bulanıklaştırır." },
    { q: "Akdeniz kıyısında seralarda yetiştirilen domates, satıldığı büyük şehirlerden yüzlerce km uzakta yoğunlaşmıştır. Bu durum *Von Thünen* modeliyle ilgili neyi gösterir?",
      opts: ["İklim ve toprak gibi etkenler uzman tarım bölgeleri yaratarak halkaları bozabilir", "Model taşıma maliyetinin hiçbir etkisi olmadığını kanıtlar", "Domates, tahıl halkasına ait bir üründür", "Pazardan uzak arazi her zaman daha verimlidir"],
      a: 0,
      why: "Model toprağı ve iklimi aynı varsayar; gerçekte uygun iklimli bölgeler uzakta olsa da uzmanlaşır. En çekici yanlış şık B: örnek taşıma maliyetinin etkisini çürütmez, sadece tek etken olmadığını gösterir." },
    { q: "Bir ovada A ürününün arazi kirası 9 − 2d, B ürününün kirası 3 − 0,5d'dir (d: pazara uzaklık, km; kira: bin TL/ha). A halkasından B halkasına geçiş kaç km'dedir?",
      opts: ["3 km", "6 km", "4 km", "1,5 km"],
      a: 2,
      why: "Eşitle: 9 − 2d = 3 − 0,5d → 6 = 1,5d → d = 4 km (kontrol: A 9 − 8 = 1, B 3 − 2 = 1). En çekici yanlış şık 6 km: bu, B'nin kirasının sıfıra indiği uzaklıktır, geçiş noktası değil." }
  ]
};
