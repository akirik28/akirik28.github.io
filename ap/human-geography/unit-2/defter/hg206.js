/* Kitpath not defteri · hg206 · Malthus Kuramı (Malthusian Theory)
   Kaynak: AP HuG CED Topic 2.6 (IMP-2.B.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg206",
  amac: "Bu konu Thomas Malthus'un nüfus kuramını ve ona yöneltilen eleştirileri anlatıyor: nüfus gıdadan hızlı artar mı? Malthus'un tezini, neo-Malthusçuları ve eleştirmenleri (Boserup, Sen, teknoloji, doğurganlık düşüşü) öğreneceksin.",
  bolumler: [
    {
      baslik: "Malthus'un tezi",
      kisa: "Malthus'a göre nüfus geometrik, gıda aritmetik artar; sonunda kıtlık kaçınılmazdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📖", terim: "Malthusian theory", tr: "Malthus kuramı", tanim: "İngiliz Thomas Malthus'un 1798'de yazdığı *An Essay on the Principle of Population* kitabındaki görüş: nüfus gıda üretiminden hızlı artar ve sonunda kıtlıkla sınırlanır.", ornek: "\"Nüfus 1, 2, 4, 8; gıda 1, 2, 3, 4.\"" },
            { ikon: "📈", terim: "Geometric growth", tr: "geometrik artış", tanim: "Her dönemde aynı oranla çarpılarak artış (örneğin iki katına çıkma); eğri hızla dikleşir.", ornek: "1, 2, 4, 8, 16." },
            { ikon: "📏", terim: "Arithmetic growth", tr: "aritmetik artış", tanim: "Her dönemde aynı miktar eklenerek artış; doğrusal bir çizgidir.", ornek: "1, 2, 3, 4, 5." }
          ] },
        { tip: "ornek", baslik: "Malthus'un aritmetiği", durum: "Bir adada 1.000 kişi yaşıyor ve gıda tam 1.000 kişiye yetiyor. Nüfus her 25 yılda iki katına çıkıyor; gıda her 25 yılda yalnızca 1.000 kişilik artıyor. 100 yıl sonra durum nedir?",
          adimlar: ["0. yıl: nüfus 1.000, gıda 1.000 kişilik.", "25. yıl: nüfus 2.000, gıda 2.000 kişilik.", "50. yıl: nüfus 4.000, gıda 3.000 kişilik.", "75. yıl: nüfus 8.000, gıda 4.000 kişilik.", "100. yıl: nüfus 16.000, gıda 5.000 kişilik."],
          sonuc: "Nüfus 1-2-4-8-16 (geometrik), gıda 1-2-3-4-5 (aritmetik) büyüdü: 16.000 − 5.000 = ==11.000 kişilik açık==." }
      ]
    },
    {
      baslik: "Malthus grafiği",
      kisa: "Nüfus eğrisi gıda doğrusunu geçer; aradaki açığı kıtlık ve hastalık kapatır.",
      bloklar: [
        { tip: "grafik", baslik: "Nüfus ve gıda (1 birim = 1.000 kişi)", xlabel: "Zaman (yıl)", ylabel: "Kişi (bin)", xmax: 5, ymax: 17,
          xticks: [{ v: 1, label: "25" }, { v: 2, label: "50" }, { v: 3, label: "75" }, { v: 4, label: "100" }],
          ogeler: [
            { id: "gida", tip: "cizgi", renk: 1, from: [0, 1], to: [4, 5], etiket: "Gıda" },
            { id: "nufus", tip: "egri", renk: 0, etiket: "Nüfus", gizli: true, noktalar: [[0, 1], [1, 2], [2, 4], [3, 8], [4, 16]] },
            { id: "acik", tip: "ok", from: [3, 4], to: [3, 8], gizli: true },
            { id: "acikt", tip: "yazi", x: 3.15, y: 6.2, hiza: "start", metin: "açık: 4 bin kişilik", gizli: true },
            { id: "gida2", tip: "egri", renk: 2, etiket: "Gıda (gerçek)", gizli: true, noktalar: [[0, 1], [1, 2.6], [2, 5.2], [3, 9], [4, 14.5]] }
          ],
          durumlar: [
            { metin: "Malthus'a göre gıda ==aritmetik== artar: her 25 yılda aynı miktar eklenir (1, 2, 3, 4, 5)." },
            { metin: "Nüfus ise ==geometrik== artar: her 25 yılda iki katına çıkar (1, 2, 4, 8, 16).", goster: ["nufus"] },
            { metin: "İlk dönemde ikisi eşittir (2); sonra nüfus öne geçer. 75. yılda nüfus 8, gıda 4: ==4 bin kişilik açık==.", goster: ["acik", "acikt"] },
            { metin: "Açığı kapatan şey *positive checks* (kıtlık, hastalık, savaş) ve *preventive checks* (geç evlilik): nüfus gıda düzeyine geri çekilir.", gizle: ["acik", "acikt"], set: { nufus: { noktalar: [[0, 1], [1, 2], [2, 3.4], [3, 3.8], [4, 4.2]] } } },
            { metin: "Eleştiri: Teknoloji (==Yeşil Devrim==) gıdayı aritmetik değil çok daha hızlı artırdı; doğurganlık düşünce nüfus da yavaşladı. Gıda nüfusu geçti.", goster: ["gida2"], set: { nufus: { noktalar: [[0, 1], [1, 2], [2, 3.4], [3, 5.2], [4, 7]] } } }
          ] },
        { tip: "not", metin: "Grafikteki \"açık\" Malthus için bir tehlikedir: nüfus gıdanın taşıyabileceğinden fazla olursa insanlar yoksullaşır, açlık ve hastalık çoğalır. Malthus bu yüzden nüfusu ==gıda sınırında== tutan kuvvetlere (kontrollere) önem verir." }
      ]
    },
    {
      baslik: "Malthus'a göre nüfusu ne sınırlar?",
      kisa: "Pozitif kontroller ölümü artırır; önleyici kontroller doğumu geciktirir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "☠️", baslik: "*Positive checks*", maddeler: ["Ölümleri artırarak nüfusu azaltır", "Kıtlık, salgın hastalık, savaş"] },
          sag: { ikon: "💍", baslik: "*Preventive checks*", maddeler: ["Doğumları azaltarak nüfusu sınırlar", "Geç evlilik, bekârlık, cinsel perhiz (*moral restraint*)"] },
          oyun: [
            { metin: "Uzun süren kuraklık kıtlığa ve kitlesel ölümlere yol açıyor.", cevap: "sol", neden: "Ölümleri artırır: pozitif kontrol." },
            { metin: "Gençler geçim derdiyle evlenmeyi 35 yaşına erteliyor.", cevap: "sag", neden: "Doğumları azaltır: önleyici kontrol." },
            { metin: "Kalabalık yoksul mahallelerde kolera salgını yayılıyor.", cevap: "sol", neden: "Hastalık ölümü artırır: pozitif kontrol." },
            { metin: "İki devlet arasındaki savaşta çok sayıda genç ölüyor.", cevap: "sol", neden: "Savaş ölümü artırır: pozitif kontrol." }
          ] },
        { tip: "tuzak", metin: "Malthus'u doğum kontrolünün savunucusu sanmak.", yanlis: "Malthus nüfusu sınırlamak için doğum kontrol yöntemlerini savundu.", dogru: "Malthus yalnızca ==ahlaki perhizi== (geç evlilik, bekârlık) savundu; doğum kontrol yöntemlerine karşıydı. Doğum kontrolünü ve aile planlamasını savunanlar ==neo-Malthusçulardır==." }
      ]
    },
    {
      baslik: "Neo-Malthusçular",
      kisa: "Neo-Malthusçular tezi tüm kaynaklara ve çevreye genişletir, doğum kontrolünü savunur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧑‍🔬", terim: "Neo-Malthusians", tr: "yeni Malthusçular", tanim: "Malthus'un fikrini 20. yüzyılda yeniden canlandıran yazarlar: hızlı nüfus artışı sınırlı kaynakları ve çevreyi aşar; nüfus kontrol edilmelidir.", ornek: "Paul Ehrlich, *The Population Bomb* (1968)." },
            { ikon: "🌍", terim: "The Limits to Growth", tr: "büyümenin sınırları", tanim: "Club of Rome'un 1972 raporu: nüfus ve tüketim artışı sürerse kaynaklar tükenir ve çevre bozulur.", ornek: "Su, enerji, toprak ve iklim kaygıları." }
          ] },
        { tip: "tablo", baslik: "Malthus ve neo-Malthusçular", head: ["Konu", "Malthus (1798)", "Neo-Malthusçular (20. yy)"], rows: [
            ["Odak", "Gıda", "Tüm kaynaklar (su, enerji, toprak) ve çevre"],
            ["Sınırlama yolu", "Ahlaki perhiz (geç evlilik)", "Aile planlaması, doğum kontrolü, nüfus politikaları"],
            ["Temel kaygı", "Gıdanın yetmemesi", "Kaynakların ve çevrenin taşıma kapasitesini aşmak"]
          ] }
      ]
    },
    {
      baslik: "Eleştiriler",
      kisa: "Teknoloji, doğurganlık düşüşü ve eşitsiz dağıtım Malthus'un öngörüsünü zayıflatır.",
      bloklar: [
        { tip: "tablo", baslik: "Malthus'a başlıca itirazlar", head: ["Eleştiri", "Savunan", "Fikir"], rows: [
            ["Teknoloji", "Yeşil Devrim (Norman Borlaug ve diğerleri)", "Verimli tohum, gübre ve sulama gıdayı nüfustan hızlı artırdı."],
            ["Ters nedensellik", "Ester Boserup", "Nüfus baskısı yeniliği doğurur; çiftçiler tarımı yoğunlaştırır."],
            ["Doğurganlık düşüşü", "*DTM* (Konu 2.5)", "Kalkınmayla doğum hızı düşer; nüfus geometrik artmaz."],
            ["Dağıtım", "Amartya Sen, Marksist eleştiri", "Kıtlık çoğu zaman gıda yokluğundan çok yoksulluk, savaş ve eşitsiz dağıtımdan çıkar."],
            ["İnsan yaratıcılığı", "Julian Simon", "İnsan \"nihai kaynak\"tır; kıtlık fiyat ve yeniliklerle aşılır."]
          ] },
        { tip: "ikili", sol: { ikon: "⚠️", baslik: "Neo-Malthusçu görüş", maddeler: ["Kaynaklar sınırlıdır; nüfus artışı baskı yapar", "Aile planlaması gerekir"] },
          sag: { ikon: "🛠️", baslik: "Eleştirmenlerin görüşü", maddeler: ["Teknoloji ve yenilik sınırları aşar", "Sorun çoğu zaman dağıtım ve politikadır"] },
          oyun: [
            { metin: "Nüfus artışı su ve toprak gibi sınırlı kaynakları tüketir.", cevap: "sol", neden: "Kaynak sınırı vurgusu: neo-Malthusçu." },
            { metin: "Yeni tohumlar ve sulama gıda üretimini nüfustan hızlı artırdı.", cevap: "sag", neden: "Teknoloji eleştirisi." },
            { metin: "Kıtlık çoğu zaman gıdanın yokluğundan değil, eşitsiz dağıtımdan çıkar.", cevap: "sag", neden: "Sen'in dağıtım argümanı." },
            { metin: "Aile planlaması programları nüfus baskısını azaltmak için gereklidir.", cevap: "sol", neden: "Nüfus kontrolü: neo-Malthusçu." },
            { metin: "Nüfus baskısı çiftçileri yeni yöntemler bulmaya iter.", cevap: "sag", neden: "Boserup'un tersine nedensellik fikri." }
          ] }
      ]
    },
    {
      baslik: "Malthus bugün haklı mı?",
      kisa: "Küresel ölçekte Malthus yanıldı; yerel kıtlıklar ve çevre sınırları tartışmayı sürdürür.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 1, sonek: " milyar", etiket: "1800 civarında dünya nüfusu (Malthus yazarken)" },
            { deger: 8, sonek: " milyar", etiket: "2022'de dünya nüfusu" },
            { deger: 8, onek: "≈ ×", etiket: "Nüfus yaklaşık sekiz kat arttı, ama kıtlık kaçınılmaz olmadı" }
          ] },
        { tip: "tuzak", metin: "\"Malthus yanıldı\" cümlesini fazla genellemek.", yanlis: "Küresel gıda üretimi arttığı için Malthus'un uyarısının hiçbir geçerliliği kalmamıştır.", dogru: "Küresel ölçekte tez tutmadı; ama ==yerel== ölçekte kuraklık, savaş ve yoksulluk yüzünden kıtlıklar sürüyor, su, enerji ve iklim sınırları da neo-Malthusçu tartışmayı canlı tutuyor. Cevabında ==ölçeği== belirt." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Malthus (1798): nüfus geometrik (1, 2, 4, 8, 16), gıda aritmetik (1, 2, 3, 4, 5) artar; sonunda gıda yetmez.",
            "Örnek: 1.000 kişilik adada 100 yıl sonra nüfus 16.000, gıda 5.000 kişilik: 11.000 kişilik açık.",
            "Nüfusu *positive checks* (kıtlık, hastalık, savaş) ve *preventive checks* (geç evlilik, bekârlık) sınırlar.",
            "Malthus doğum kontrolüne karşıydı; yalnızca ahlaki perhizi savundu.",
            "Neo-Malthusçular (Ehrlich, Club of Rome) tezi tüm kaynaklara ve çevreye genişletir; aile planlamasını savunur.",
            "Eleştiriler: teknoloji ve Yeşil Devrim, Boserup'un ters nedenselliği, doğurganlık düşüşü (*DTM*), dağıtım sorunu (Sen).",
            "Dünya nüfusu 1800'de ≈ 1 milyardan 2022'de 8 milyara çıktı; küresel kıtlık kaçınılmaz olmadı.",
            "Yerel kıtlıklar ve çevre sınırları neo-Malthusçu tartışmayı sürdürür; sınavda ölçeği belirt."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir adada nüfus 2.000 ve gıda tam 2.000 kişilik. Malthus'un modeline göre nüfus her 25 yılda iki katına çıkıyor, gıda ise her 25 yılda 2.000 kişilik artıyor. 75 yıl sonra gıda açığı kaç kişiliktir?",
      opts: ["8.000 kişilik açık", "16.000 kişilik açık", "2.000 kişilik açık", "Açık yoktur, çünkü ikisi de her dönemde artar"],
      a: 0,
      why: "75 yıl = 3 dönem. Nüfus: 2.000 → 4.000 → 8.000 → 16.000. Gıda: 2.000 → 4.000 → 6.000 → 8.000. Açık = 16.000 − 8.000 = 8.000. B şıkkı en çekici yanlış: nüfusun kendisini açık sanır; gıdanın karşıladığı kısım çıkarılmalıdır." },
    { q: "Bir araştırmacı, nüfus artışının çiftçileri daha yoğun ve yenilikçi tarım yöntemlerine ittiğini; yani nüfus baskısının tarımsal gelişmeyi tetiklediğini savunuyor. Bu görüş kime aittir?",
      opts: ["Thomas Malthus", "Paul Ehrlich", "Ester Boserup", "Club of Rome"],
      a: 2,
      why: "Boserup, nüfus baskısının yeniliği doğurduğunu söyleyerek Malthus'un nedensellik yönünü tersine çevirir. B şıkkı en çekici yanlış: Ehrlich neo-Malthusçudur; nüfus artışının kaynakları tüketeceğini savunur." },
    { q: "Tabloya göre hangi yorum yapılabilir?",
      fig: { type: "table", caption: "Bir ülkede nüfus ve gıda üretimi (1980 = 100)", head: ["Yıl", "Nüfus", "Gıda üretimi"], rows: [[1980, 100, 100], [2000, 140, 190], [2020, 180, 300]] },
      opts: ["Nüfus gıdadan hızlı arttığı için Malthus'un öngörüsü doğrulanmıştır", "Kıtlık, doğum kontrolü sayesinde önlenmiştir", "Gıda üretimi aritmetik, nüfus geometrik artmıştır", "Gıda üretimi nüfustan hızlı arttığı için teknolojinin etkisi Malthus'un öngörüsünü zayıflatır"],
      a: 3,
      why: "1980–2020 arasında nüfus %80, gıda üretimi %200 artmış: gıda nüfusu geçmiş. Bu, teknoloji ve verimlilik eleştirisini destekler. C şıkkı en çekici yanlış: Malthus'un iddiasının tersi gerçekleşmiştir; ayrıca gıdanın artışı aritmetik değildir." },
    { q: "Bir bölgede uzun bir kuraklık kıtlığa yol açıyor ve salgın hastalıklar yayılıyor; aynı zamanda gençler geçim derdiyle evlenmeyi erteliyor. Malthus'a göre bunlardan hangisi önleyici kontroldür (*preventive check*)?",
      opts: ["Kuraklığın yol açtığı kıtlık", "Salgın hastalıkların yayılması", "Gençlerin evlenmeyi ertelemesi", "Hem kıtlık hem salgın hastalık"],
      a: 2,
      why: "Önleyici kontroller doğumu azaltır: geç evlilik, bekârlık, cinsel perhiz. Kıtlık ve salgın ölümü artırır: pozitif kontrol. D şıkkı en çekici yanlış: ikisi de nüfusu sınırlar ama ölüm yoluyladır; doğum yoluyla değil." },
    { q: "Paul Ehrlich ve Club of Rome için hangisi doğrudur?",
      opts: ["Malthus gibi doğum kontrolüne karşıdırlar ve yalnızca ahlaki perhizi savunurlar", "Malthus'un tezini gıdadan su, enerji ve çevre gibi tüm kaynaklara genişletir ve aile planlamasını savunurlar", "Nüfus baskısının tarımsal yeniliği tetiklediğini söylerler", "Kıtlığın başlıca nedeninin eşitsiz dağıtım olduğunu savunurlar"],
      a: 1,
      why: "Neo-Malthusçular kaynak ve çevre sınırlarını vurgular ve doğum kontrolü ile aile planlamasını savunur. A şıkkı en çekici yanlış: ahlaki perhiz ve doğum kontrolüne karşı çıkma Malthus'un kendi tutumudur. C Boserup'a, D Sen'e aittir." }
  ]
};
