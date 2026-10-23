/* Kitpath not defteri · hg506 · Tarımsal Üretim Bölgeleri (5.6)
   Kaynak: AP HuG CED Topic 5.6 (PSO-5.C). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg506",
  amac: "Bu konu tarım bölgelerinin ürünü yemek için mi (*subsistence*) satmak için mi (*commercial*) yetiştirdiğine göre ayrıldığını ve ekonomik güçlerin tarımı nasıl etkilediğini anlatıyor. *Monoculture* ile *bid-rent* kuramını ve *intensive* ve *extensive* tarımı arazi maliyetiyle ilişkilendirmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "*Subsistence* ve *commercial* tarım",
      kisa: "Bölgeler ürünü yemek için mi satmak için mi yetiştirdiğine göre ayrılır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🥣", baslik: "*Subsistence agriculture*", maddeler: ["Ürünün çoğu çiftçinin kendi ailesinin geçimi içindir", "Küçük tarla, el aleti, çok emek"] },
          sag: { ikon: "💰", baslik: "*Commercial agriculture*", maddeler: ["Ürün kâr için satılır", "Büyük tarla, makine, uzmanlaşma"] },
          oyun: [
            { metin: "Aile, ürününün çoğunu kendi sofrasında tüketir.", cevap: "sol", neden: "Geçim amacı: *subsistence*." },
            { metin: "Ürün hazır gıda fabrikasına ve ihracata satılır.", cevap: "sag", neden: "Satış ve kâr amacı: *commercial*." },
            { metin: "Küçük bir tarlada çoğu iş el aletleriyle ve ailece yapılır.", cevap: "sol", neden: "Emek yoğun, küçük ölçek: *subsistence*." },
            { metin: "Büyük tarlada traktör ve biçerdöver kullanılır, az işçi çalışır.", cevap: "sag", neden: "Makineleşmiş, ticari işletme: *commercial*." },
            { metin: "Fazla çıkanı yerel pazarda satar, ama asıl amaç ailenin geçimidir.", cevap: "sol", neden: "Amaç belirleyicidir: hâlâ *subsistence*." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🗺️", terim: "Agricultural production region", tr: "tarımsal üretim bölgesi", tanim: "Benzer tarım türünün yaygın olduğu geniş bölge. Bölgeler, *subsistence* ya da *commercial* uygulamaları ne ölçüde yansıttığına göre tanımlanır.", ornek: "ABD Büyük Ovaları: ticari tahıl bölgesi." },
            { ikon: "💵", terim: "Cash crop", tr: "nakit ürün", tanim: "Yemek için değil satmak için yetiştirilen ürün. Ticari tarımın ve *plantation*'ın temel ürünüdür.", ornek: "Kahve, çay, pamuk, şeker kamışı." }
          ] }
      ]
    },
    {
      baslik: "Tarım bölgeleri haritası",
      kisa: "Klasik haritada üç subsistence ve yedi commercial bölge sayılır.",
      bloklar: [
        { tip: "tablo", baslik: "Tarım bölgeleri (Whittlesey, 1936)", head: ["Bölge", "Grup", "Nerede?"], rows: [
            ["*Shifting cultivation*", "*Subsistence*", "Tropik yağmur ormanları: Amazon, Orta Afrika, Güneydoğu Asya"],
            ["*Pastoral nomadism*", "*Subsistence*", "Kuzey Afrika, Güneybatı ve Orta Asya'nın kurak alanları"],
            ["*Intensive subsistence* (çoğunlukla pirinç)", "*Subsistence*", "Muson Asyası: Doğu Çin, Hindistan, Güneydoğu Asya"],
            ["*Plantation agriculture*", "*Commercial*", "Tropik kıyılar ve adalar: Brezilya, Karayipler, Güneydoğu Asya"],
            ["*Mixed crop and livestock*", "*Commercial*", "ABD Mısır Kuşağı, Avrupa"],
            ["*Dairy farming* (süt)", "*Commercial*", "Büyük kentlerin çevresi: Kuzeydoğu ABD, Kuzeybatı Avrupa"],
            ["*Grain farming*", "*Commercial*", "ABD Büyük Ovaları, Kanada, Ukrayna, Arjantin"],
            ["*Ranching*", "*Commercial*", "Batı ABD, Arjantin, Avustralya"],
            ["*Mediterranean agriculture*", "*Commercial*", "Akdeniz havzası, Kaliforniya, Şili"],
            ["*Commercial gardening and fruit farming*", "*Commercial*", "ABD güneydoğusu, Batı Avrupa"]
          ] },
        { tip: "tuzak", metin: "Bölgeler birer \"derece\"dir; keskin kategoriler değildir.", yanlis: "Bir bölge ya tamamen *subsistence* ya da tamamen *commercial*'dir; sınıflandırma kesindir.", dogru: "CED'e göre bölgeler *subsistence* ya da *commercial* uygulamaları **ne ölçüde yansıttıklarıyla** tanımlanır. Aynı bölgede ikisi iç içe olabilir; ayrıca 1936 tarihli bir harita küreselleşmeyle değişen bugünü tam yansıtmaz." }
      ]
    },
    {
      baslik: "*Monoculture*: tek ürünün gücü ve riski",
      kisa: "*Monoculture* verimlilik sağlar ama bütün riski tek ürüne yükler.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Avantaj", maddeler: ["Makineyle ekim ve hasat kolay, ucuz", "Uzmanlaşma ve ölçek: birim maliyet düşer"] },
          sag: { ikon: "⚠️", baslik: "Risk", maddeler: ["Bir hastalık ya da zararlı bütün ürünü yok edebilir", "Toprak aynı besini tüketir; fiyat düşerse bütün gelir düşer"] } },
        { tip: "hikaye", ikon: "🍌", baslik: "Muzun hikâyesi", metin: "1950'lere kadar ihraç edilen muz hemen hep tek bir çeşitti: Gros Michel. Devasa plantasyonlarda aynı klon yetişiyordu. Sonra toprak kaynaklı bir mantar hastalığı (Panama hastalığı) bu çeşidi neredeyse bitirdi; yerini Cavendish aldı. Bugün o da benzer bir hastalıktan tehdit altında." }
      ]
    },
    {
      baslik: "Arazi maliyeti ve *bid-rent*",
      kisa: "Araziyi en yüksek kirayı verebilen alır: merkezde yoğun, uzakta geniş tarım.",
      bloklar: [
        { tip: "not", metin: "*Bid-rent theory* (teklif-kira kuramı) şunu söyler: arazinin kirası pazara yaklaştıkça artar, çünkü ürünü pazara taşımak ucuzlar ve taze kalır. Her tarım türü farklı bir kira ödeyebilir ve araziyi, o noktada **en yüksek kirayı verebilen** kullanıcı alır. Sonuç: merkezde pahalı arazi dar alanda yoğun üretimi (*intensive*), uzakta ucuz arazi geniş alanda seyrek üretimi (*extensive*) cazip kılar." },
        { tip: "grafik", baslik: "Teklif-kira eğrileri (şematik)", xlabel: "Pazara (kente) uzaklık", ylabel: "Verilebilecek kira", xmax: 10, ymax: 10,
          ogeler: [
            { id: "gar", tip: "egri", renk: 0, noktalar: [[0, 10], [1, 7.4], [2, 5], [3, 3.0], [4, 1.6], [5, 0.6], [6, 0.1]] },
            { id: "gaz", tip: "yazi", x: 1.2, y: 8.9, metin: "sebze, süt", hiza: "start" },
            { id: "gr", tip: "cizgi", renk: 1, from: [0, 6.5], to: [8.6, 0.05], gizli: true },
            { id: "grz", tip: "yazi", x: 3.5, y: 5.2, metin: "tahıl", hiza: "start", gizli: true },
            { id: "ra", tip: "cizgi", renk: 3, from: [0, 2.6], to: [10, 1.6], gizli: true },
            { id: "raz", tip: "yazi", x: 0.2, y: 3.3, metin: "ranching", hiza: "start", gizli: true },
            { id: "b1", tip: "nokta", x: 2, y: 5, etiket: "A", kilavuz: true, gizli: true },
            { id: "b2", tip: "nokta", x: 6, y: 2.0, etiket: "B", kilavuz: true, gizli: true },
            { id: "z1", tip: "yazi", x: 1, y: 0.4, metin: "bahçe-süt", gizli: true },
            { id: "z2", tip: "yazi", x: 4.1, y: 0.4, metin: "tahıl", gizli: true },
            { id: "z3", tip: "yazi", x: 8.4, y: 0.9, metin: "ranching", gizli: true }
          ],
          durumlar: [
            { metin: "Pazarda (merkezde) sebze ve süt işletmeleri en yüksek kirayı verebilir: ürün taze ve hektardan gelir yüksektir. Uzaklaştıkça verebildikleri kira **hızla** düşer." },
            { metin: "==Tahıl== daha yavaş düşer: bozulmaz, taşıması kolaydır. Bir noktadan sonra tahıl, sebzeden yüksek kira verebilir.", goster: ["gr", "grz"] },
            { metin: "==Ranching== en yatık eğridir: uzakta, arazi çok ucuzken en iyi teklifi verir.", goster: ["ra", "raz"] },
            { metin: "Eğrilerin kesiştiği A ve B noktaları ==kuşak sınırlarıdır==. Her uzaklıkta üstte kalan eğri araziyi alır.", goster: ["b1", "b2"] },
            { metin: "Sonuç: merkezde yoğun (*intensive*) bahçe ve süt, ortada tahıl, uzakta geniş (*extensive*) hayvancılık.", goster: ["z1", "z2", "z3"] }
          ] }
      ]
    },
    {
      baslik: "Hesap: araziyi kim alır?",
      kisa: "Her noktada kira için en çok ödeyebilen kullanım kazanır.",
      bloklar: [
        { tip: "ornek", baslik: "Üç noktada üç teklif", durum: "Bir kentin etrafında üç noktada birer hektar var. Üç kullanımın bir hektardan yıllık kazancı (kira ödemeden önce, bin TL): kent kenarında sebze 60, buğday 25, koyun 5; ortada sebze 12, buğday 15, koyun 4; uzakta sebze 0, buğday 2, koyun 3. Kira için en çok ödeyebilen kullanım araziyi alır. Her noktada kim alır?",
          adimlar: ["Kent kenarı: en yüksek 60: sebze araziyi alır.", "Orta: en yüksek 15: buğday araziyi alır.", "Uzak: en yüksek 3: koyun (hayvancılık) araziyi alır."],
          sonuc: "==Kent kenarında sebze, ortada buğday, uzakta hayvancılık.== Sebzenin teklifi 60'tan 12'ye, sonra 0'a dikçe düşer: bozulan ürünün taşıma maliyeti en yüksektir." },
        { tip: "tuzak", metin: "Pahalı arazi ile tarım yoğunluğunu ters bağlama.", yanlis: "Kente yakın arazi pahalı olduğu için orada *extensive* tarım yapılır.", dogru: "Tersi doğrudur: arazi pahalıysa çiftçi onu **dar alana çok girdi** koyarak değerlendirir, yani *intensive* tarım yapar. Arazi ucuzsa geniş alana az girdi koymak (*extensive*) karlı olur." }
      ]
    },
    {
      baslik: "Model ne kadar açıklar?",
      kisa: "Model mantığı gösterir; ama gerçek dünya basit halkalardan fazlasıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Modelin varsayımı ve gerçek dünya", head: ["Model ne varsayar?", "Gerçek dünya"], rows: [
            ["Tek pazar, tek merkez kent", "Birçok kent ve pazar; küresel ticaret"],
            ["Her yerde aynı verimli, düz arazi", "Toprak, iklim, su ve yer şekli değişir"],
            ["Taşıma maliyeti yalnızca mesafeyle artar", "Soğuk zincir ve hızlı ulaşım mesafenin etkisini azalttı"],
            ["Çiftçiler yalnızca kâr düşünür", "Devlet destekleri, gelenek ve politika kararları etkiler"]
          ] },
        { tip: "not", metin: "**Sonuç:** Arazi maliyeti mantığı hâlâ işe yarar; kent çevresindeki sebze ve süt işletmeleri ile uzaktaki tahıl ve hayvancılık bunu gösterir. Ama soğuk zincir, küresel ticaret, destekler ve fiziksel coğrafya halkaları bozar. Sınav \"model ne ölçüde açıklıyor?\" derse **her iki yönden** birer örnek ver." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Tarım bölgeleri *subsistence* (ailenin geçimi) ya da *commercial* (satış ve kâr) uygulamaları ne ölçüde yansıttıklarıyla tanımlanır.",
            "Klasik haritada subsistence: *shifting cultivation*, *pastoral nomadism*, *intensive subsistence*; commercial: *plantation*, karma, süt, tahıl, *ranching*, Akdeniz, bahçecilik ve meyve.",
            "*Monoculture* (*monocropping*): tek ürün; makine ve ölçek avantajı sağlar, ama hastalık ve fiyat riski doğurur (Gros Michel muzu).",
            "*Bid-rent theory*: arazi pazara yaklaştıkça pahalıdır; her noktada en yüksek kirayı verebilen kullanım araziyi alır.",
            "Merkezde pahalı arazi *intensive* (dar alana çok girdi), uzakta ucuz arazi *extensive* tarımı doğurur.",
            "Sebze ve süt dik düşen eğridir (taşınma ve bozulma); tahıl daha yatık; *ranching* en yatıktır.",
            "Model sınırlı açıklar: soğuk zincir, küresel ticaret, destekler ve fiziksel coğrafya halkaları bozar."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir ailenin 2 hektarlık tarlasında yetişen ürünün çoğunu aile kendisi yiyor; çok az fazlalık yerel pazarda satılıyor. Bu işletme için en uygun sınıflandırma hangisidir?",
      opts: ["*Commercial agriculture*", "*Subsistence agriculture*", "*Plantation agriculture*", "*Ranching*"],
      a: 1, why: "Asıl amaç ailenin geçimi olduğu için *subsistence*'tır. A çekici bir yanlıştır: küçük bir satış yapılması amacı değiştirmez." },
    { q: "Bir ülke ihracatını tek bir muz çeşidine dayandırıyor ve tarlaların hepsinde aynı klon yetişiyor. Bir toprak hastalığı yayılırsa en olası sonuç hangisidir?",
      opts: ["Her çeşit kendi başına dayanıklı olduğu için hasar çok az olur.", "Makineler hastalığa karşı etkili olduğu için sorun çıkmaz.", "Tek ürüne ve tek çeşide bağımlılık yüzünden tüm üretim ve gelir büyük zarar görebilir.", "Arazi ucuzlayacağı için üretim artar."],
      a: 2, why: "*Monoculture* verimliliği artırır ama riski tek ürüne yükler: tek hastalık bütün üretimi vurabilir. A yanlış: aynı klon olduğundan dayanıklılık da aynıdır." },
    { q: "Grafikte üç tarım türünün (A, B, C) teklif-kira eğrileri gösterilmiştir. Eğriler sırasıyla sebze-süt, tahıl ve *ranching*'e aittir. Pazara 1 birim uzaklıktaki arazi için hangisi doğrudur?",
      fig: { type: "graph", xlabel: "Pazara uzaklık", ylabel: "Verilebilecek kira", xmax: 10, ymax: 10, lines: [{ from: [0, 9], to: [5, 0.5], label: "A" }, { from: [0, 6], to: [8, 0.5], label: "B" }, { from: [0, 3], to: [10, 1.5], label: "C" }] },
      opts: ["A'nın kullanımı (sebze-süt) araziyi alır; çünkü o noktada en yüksek kirayı verebilir.", "C'nin kullanımı (*ranching*) araziyi alır; çünkü en geniş alana ihtiyaç duyar.", "B'nin kullanımı (tahıl) araziyi alır; çünkü en yatık eğridir.", "Arazi, kira farkı olmadığı için eşit bölüşülür."],
      a: 0, why: "1 birim uzaklıkta A en yüksekte olduğundan araziyi o kullanım alır (*bid-rent*). B ve C ancak daha uzak noktalarda, A'nın eğrisi altlarına indiğinde öne geçer. B çekici bir yanlıştır: eğimin yatık olması, 1 birim uzaklıkta en yüksek teklif anlamına gelmez." },
    { q: "*Bid-rent theory*'ye göre kentin hemen yakınındaki arazinin pahalı olması hangi tarım uygulamasını daha olası kılar?",
      opts: ["Geniş alanda az hayvanlı *ranching*", "Göçebe hayvancılık", "Büyük çaplı ve seyrek tahıl tarımı", "Dar alana çok emek ve sermaye konan *intensive* tarım, örneğin sebze ve süt"],
      a: 3, why: "Pahalı arazi dar alana çok girdi koymayı kârlı kılar: *intensive* tarım. A çekici ama yanlıştır; *ranching* ucuz ve uzak arazide yapılır." },
    { q: "ABD Büyük Ovaları'nda makineyle yetiştirilen, fabrikalara ve ihracata satılan buğday bölgesi hangi tarım bölgesi türüne en iyi örnektir?",
      opts: ["*Shifting cultivation*", "*Commercial grain farming*", "*Pastoral nomadism*", "*Intensive subsistence*"],
      a: 1, why: "Satış, makine ve ihracat ticari tahıl tarımının özellikleridir. D çekici bir yanlıştır: *intensive subsistence* çoğunlukla Asya'da küçük tarlalarda pirinçtir." }
  ]
};
