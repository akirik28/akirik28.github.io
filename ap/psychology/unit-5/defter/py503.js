/* Kitora not defteri · py503 · 5.3 Psikolojik Bozuklukları Açıklamak ve Sınıflandırmak
   Kaynak: College Board CED, Topic 5.3 (5.3.A, 5.3.B, 5.3.C). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py503",
  amac: "Bu konu psikolojik bozuklukların nasıl tanımlandığını, sınıflandırıldığını ve açıklandığını anlatıyor. Bozukluk ölçütlerini, DSM ve ICD'yi, tanının yararlarını ve risklerini, yedi psikolojik bakışı ve biyopsikososyal ile diatez-stres modellerini öğreneceksin.",
  bolumler: [
    {
      baslik: "Bir davranış ne zaman bozukluk sayılır?",
      kisa: "İşlev bozulması, sıkıntı ve normdan sapma birlikte değerlendirilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Level of dysfunction", tr: "işlev bozulma düzeyi", tanim: "Davranışın günlük yaşamı (okul, iş, ilişkiler) ne kadar aksattığı.", ornek: "Haftalardır okula gidememek." },
            { ikon: "💧", terim: "Perception of distress", tr: "sıkıntı algısı", tanim: "Kişinin yaşadığı rahatsızlık ve acıyı ne kadar yoğun hissettiği.", ornek: "Sürekli bunaltı ve çaresizlik hissetmek." },
            { ikon: "📏", terim: "Deviation from the social norm", tr: "toplumsal normdan sapma", tanim: "Davranışın bulunduğu toplumun beklentilerinden belirgin biçimde ayrılması. Kültürden kültüre değişir.", ornek: "Bir yerde olağan olan davranışın başka yerde tuhaf sayılması." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Ölçütleri karşılıyor", maddeler: ["İşlev bozulması ve sıkıntı var", "Uzmanın değerlendirmesi gerekir"] },
          sag: { ikon: "❌", baslik: "Ölçütleri karşılamıyor", maddeler: ["Yalnızca farklı olmak yetmez", "İşlev ve sıkıntı yoksa bozukluk sayılmaz"] },
          oyun: [
            { metin: "Haftalardır yataktan çıkamıyor, okula gidemiyor ve yoğun sıkıntı çekiyor.", cevap: "sol", neden: "İşlev bozulması ve sıkıntı birlikte var." },
            { metin: "Herkesten farklı giyiniyor, ama okulu, arkadaşlıkları ve ruh hali yolunda.", cevap: "sag", neden: "Yalnızca normdan sapma var; işlev bozulması ve sıkıntı yok." },
            { metin: "Aşırı korktuğu için evden çıkamıyor, işini kaybetti ve çok sıkıntılı.", cevap: "sol", neden: "İşlev ve sıkıntı etkilenmiş." },
            { metin: "Kendi kültüründe olağan sayılan bir ritüeli sıkıntı duymadan, hayatını aksatmadan yapıyor.", cevap: "sag", neden: "Norm kültüre bağlı; işlev bozulması ve sıkıntı yok." }
          ] }
      ]
    },
    {
      baslik: "DSM ve ICD: sınıflandırma sistemleri",
      kisa: "Tanı, eğitimli uzman ve kanıta dayalı araçlarla; DSM ve ICD ile sınıflandırılır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📘", terim: "DSM", tr: "Ruhsal Bozuklukların Tanısal ve Sayımsal El Kitabı", tanim: "Amerikan Psikiyatri Derneği'nin ruhsal bozuklukları sınıflandırmak için geliştirdiği el kitabı (güncel sürümü DSM-5-TR).", ornek: "Ruh sağlığı uzmanları bozuklukları DSM ölçütleriyle tanımlar." },
            { ikon: "🌐", terim: "ICD", tr: "Uluslararası Hastalık Sınıflaması", tanim: "Dünya Sağlık Örgütü'nün ruhsal bozuklukları da kapsayan sınıflandırma sistemi.", ornek: "Birçok ülke sağlık kayıtlarında ICD'yi kullanır." }
          ] },
        { tip: "not", metin: "Tanı koymak **özel eğitim** ve **kanıta dayalı tanı araçları** gerektirir; internet testi ya da sezgiyle konmaz. Sınıflandırma sistemleri yeni araştırma ve uygulamalara yanıt vermek için düzenli güncellenir." }
      ]
    },
    {
      baslik: "Tanının yararları ve riskleri",
      kisa: "Tanı hem yardıma erişimi artırır hem damgalama riski taşır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔓", baslik: "Olumlu sonuçlar", maddeler: ["Tedaviye ve desteğe erişim", "Ortak bir dil, anlaşılma hissi"] },
          sag: { ikon: "🔒", baslik: "Olumsuz sonuçlar", maddeler: ["Damgalama ve etiketlenme", "Önyargılar yanlış ya da eksik tanıya yol açabilir"] },
          oyun: [
            { metin: "Tanı sayesinde kişi uygun tedaviye ulaşıyor.", cevap: "sol", neden: "Tedaviye erişim: olumlu." },
            { metin: "Tanıyı duyan arkadaşları ona uzak duruyor.", cevap: "sag", neden: "Damgalama: olumsuz." },
            { metin: "Aynı belirtiler, cinsiyet ya da yaş önyargısı yüzünden yanlış yorumlanıyor.", cevap: "sag", neden: "Sexism, ageism, racism gibi önyargılar tanıyı çarpıtabilir: olumsuz." },
            { metin: "Kişi, yaşadığının adlandırılabilir bir durum olduğunu öğrenip rahatlıyor.", cevap: "sol", neden: "Anlaşılma hissi: olumlu." }
          ] },
        { tip: "tuzak", metin: "Tanının etkisi, bozukluğun türüne, kişiye ve toplumsal normlara göre değişir.", yanlis: "Tanı koymak her zaman yardımcı olur; hiçbir riski yoktur.", dogru: "Tanı ==hem yararlı hem riskli== olabilir: kültürel normlar, damgalama, *racism*, *sexism*, *ageism* ve ayrımcılık sonucu etkiler." }
      ]
    },
    {
      baslik: "Yedi psikolojik bakış ve eklektik yaklaşım",
      kisa: "Her bakış bozukluğun nedenini başka bir yerde arar; çoğu uzman birkaçını birleştirir.",
      bloklar: [
        { tip: "harita", merkez: "Yoğun kaygı: yedi açıklama", dallar: [
            { baslik: "Davranışçı", alt: "Yanlış öğrenilmiş çağrışımlar" },
            { baslik: "Psikodinamik", alt: "Çocuklukta başlayan bilinçdışı çatışmalar" },
            { baslik: "Hümanistik", alt: "Sosyal destek eksikliği, potansiyeli gerçekleştirememe" },
            { baslik: "Bilişsel", alt: "Uyumsuz düşünceler, inançlar, duygular" },
            { baslik: "Evrimsel", alt: "Hayatta kalma olasılığını azaltan davranışlar" },
            { baslik: "Sosyokültürel", alt: "Uyumsuz toplumsal ve kültürel ilişkiler" },
            { baslik: "Biyolojik", alt: "Fizyolojik ya da genetik sorunlar" }
          ] },
        { tip: "ikili", sol: { ikon: "🔔", baslik: "Davranışçı bakış", maddeler: ["Öğrenilmiş çağrışımlar", "Gözlenebilir davranış ve uyaran"] },
          sag: { ikon: "💭", baslik: "Bilişsel bakış", maddeler: ["Uyumsuz düşünce ve inançlar", "Olayı yorumlama biçimi"] },
          oyun: [
            { metin: "\"Köpeğin ısırdığı günden beri tüm köpeklerden korkuyorum.\"", cevap: "sol", neden: "Uyaran ile korku arasında öğrenilmiş çağrışım: davranışçı." },
            { metin: "\"Hata yaparsam herkes benden nefret eder; hep başarısız biriyim.\"", cevap: "sag", neden: "Uyumsuz inanç ve düşünce: bilişsel." },
            { metin: "Sınav gününün zili ile ter basması arasında öğrenilmiş bir bağ oluşmuş.", cevap: "sol", neden: "Uyaran–tepki çağrışımı: davranışçı." }
          ] },
        { tip: "tuzak", metin: "Çoğu uzman tek bir bakışa sıkışmaz.", yanlis: "Bir uzman yalnızca tek bir psikolojik perspektif kullanır.", dogru: "Çoğu psikolog ==eklektik== (*eclectic*) çalışır: tanı ve tedavide birden fazla perspektifi birlikte kullanır." }
      ]
    },
    {
      baslik: "Etkileşim modelleri: biyopsikososyal ve diatez-stres",
      kisa: "Bozukluklar tek nedene değil, birden çok etkenin etkileşimine bağlıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧬", terim: "Biopsychosocial model", tr: "biyopsikososyal model", tanim: "Her psikolojik sorunun biyolojik, psikolojik ve sosyokültürel etkenlerin bir birleşimini içerebileceğini varsayar.", ornek: "Genetik yatkınlık, düşünce kalıpları ve aile ortamı birlikte etkilidir." },
            { ikon: "🌩️", terim: "Diathesis–stress model", tr: "diatez-stres modeli", tanim: "Bozukluklar, genetik yatkınlık (*diathesis*) ile stresli yaşam deneyimlerinin birleşiminden doğar.", ornek: "Yatkın biri yoğun bir kayıp dönemi yaşarsa risk artar." }
          ] },
        { tip: "grafik", baslik: "Yatkınlık ile stres birlikte riski belirler", xlabel: "Stres düzeyi", ylabel: "Bozukluk gelişme riski", xmax: 10, ymax: 10,
          ogeler: [
            { id: "es", tip: "cizgi", renk: 3, kesik: true, from: [0, 6], to: [10, 6] },
            { id: "yes", tip: "yazi", x: 0.4, y: 6.4, metin: "bozukluk eşiği", hiza: "start" },
            { id: "d", tip: "cizgi", renk: 1, from: [0, 0.5], to: [10, 4.5], gizli: true },
            { id: "yd", tip: "yazi", x: 9.6, y: 1.9, metin: "düşük yatkınlık", hiza: "end", gizli: true },
            { id: "y", tip: "cizgi", renk: 2, from: [0, 2], to: [10, 9], gizli: true },
            { id: "yy", tip: "yazi", x: 9.6, y: 9.6, metin: "yüksek yatkınlık", hiza: "end", gizli: true },
            { id: "pk", tip: "nokta", x: 5.7, y: 6, kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Risk, belirli bir eşiği aştığında bozukluk ortaya çıkabilir." },
            { metin: "**Düşük yatkınlık**: stres arttıkça risk yükselir ama eşiğe ulaşmaz.", goster: ["d", "yd"] },
            { metin: "**Yüksek yatkınlık**: aynı stres daha yüksek risk getirir; eşik daha az stresle aşılır.", goster: ["y", "yy"] },
            { metin: "Yüksek yatkınlıkta eşiği aşan stres düzeyi (yaklaşık 5,7). Yatkınlık tek başına yetmez; ==yatkınlık + stres birlikte== belirler.", goster: ["pk"] }
          ] },
        { tip: "tuzak", metin: "İki modelin kapsamı farklıdır.", yanlis: "*Diathesis–stress* her etkeni (biyolojik, psikolojik, sosyokültürel) eşit sayar.", dogru: "==*Biopsychosocial*== üç etken grubunu birlikte sayar; ==*diathesis–stress*== ise belirli bir yatkınlık (*diathesis*) ile stres birleşimine odaklanır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Bozukluk ölçütleri: işlev bozulması düzeyi, sıkıntı algısı ve normdan sapma (kültüre bağlı).",
            "Tanı eğitimli uzman ve kanıta dayalı araçlar ister; *DSM* (APA, DSM-5-TR) ve *ICD* (WHO) düzenli güncellenir.",
            "Tanının yararları (tedaviye erişim) ve riskleri (damgalama, önyargı) vardır.",
            "Davranışçı: öğrenilmiş çağrışımlar. Psikodinamik: bilinçdışı çatışmalar. Hümanistik: destek eksikliği ve potansiyelin gerçekleşmemesi.",
            "Bilişsel: uyumsuz düşünceler. Evrimsel: hayatta kalmayı azaltan davranışlar. Sosyokültürel: uyumsuz toplumsal ilişkiler. Biyolojik: fizyolojik ya da genetik sorunlar.",
            "*Eclectic approach*: çoğu uzman birden çok bakışı kullanır.",
            "*Biopsychosocial model*: biyolojik, psikolojik ve sosyokültürel etkenlerin birleşimi.",
            "*Diathesis–stress model*: genetik yatkınlık + stresli yaşam deneyimleri."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdaki tabloda dört kişinin durumu özetlenmiştir. Hangi kişi psikolojik bozukluk tanımlamada kullanılan üç ölçütün (işlev bozulması, sıkıntı, normdan sapma) hepsini birlikte karşılıyor?",
      fig: { type: "table", caption: "Kişilerin durumu", head: ["Kişi", "İşlev bozulması", "Sıkıntı", "Normdan sapma"], rows: [["A", "Yok", "Yok", "Var"], ["B", "Var", "Yok", "Yok"], ["C", "Var", "Var", "Var"], ["D", "Yok", "Var", "Yok"]] },
      opts: ["A", "B", "C", "D"],
      a: 2,
      why: "Yalnızca C kişisi üç ölçütü birden karşılıyor. En çekici yanlış şık A: yalnızca normdan sapma var; sıradışı olmak tek başına bozukluk sayılmaz." },
    { q: "Bir lise öğrencisi internetteki bir testi çözüp arkadaşının \"bir bozukluğu olduğuna\" karar veriyor. Psikolojik bozukluk tanısı hakkında hangisi doğrudur?",
      opts: ["Tanı, özel eğitim alan ve kanıta dayalı araçlar kullanan uzmanlarca konur", "Herkes DSM'yi okuyarak güvenle tanı koyabilir", "Tanı yalnızca kişinin kendini nasıl tanımladığına dayanır", "İnternet testleri uzman değerlendirmesinin yerini tutar"],
      a: 0,
      why: "Tanı özel eğitim ve kanıta dayalı araçlar gerektirir. En çekici yanlış şık B: DSM'nin okunabilir olması tanı koymayı mümkün kılmaz; uzmanlık eğitimi gerekir." },
    { q: "Bir psikolog, yoğun kaygı yaşayan bir danışanın kaygısının, geçmişte belirli durumlarla öğrenilmiş korku ilişkilerinden kaynaklandığını düşünüyor. Bu psikolog hangi perspektife dayanıyor?",
      opts: ["Psikodinamik", "Davranışçı", "Evrimsel", "Hümanistik"],
      a: 1,
      why: "Uyaran ile tepki arasındaki yanlış öğrenilmiş çağrışımlar davranışçı perspektifin açıklamasıdır. En çekici yanlış şık A: psikodinamik perspektif bilinçdışı düşünce ve çocukluk deneyimlerine odaklanır." },
    { q: "İkiz kardeşler aynı genetik yatkınlığa sahip. Biri ağır ve sürekli stres yaşayan bir çevrede büyüyor ve bozukluk geliştiriyor; diğeri sakin bir çevrede büyüyor ve geliştirmiyor. Bu durum hangi modelle en iyi açıklanır?",
      opts: ["*Cognitive perspective*", "*Behavioral perspective*", "*Humanistic perspective*", "*Diathesis–stress model*"],
      a: 3,
      why: "Aynı yatkınlık, farklı stres düzeylerinde farklı sonuç veriyor: yatkınlık + stres. En çekici yanlış şık B: davranışçı perspektif öğrenilmiş çağrışımlara odaklanır; senaryoda ise ortak genetik yatkınlık ile farklı stres düzeyi öne çıkıyor." },
    { q: "Bir kişi tanı aldıktan sonra uygun tedaviye ulaşıyor ve rahatlıyor. Ancak çevresindeki bazı kişiler onu bu tanı yüzünden dışlamaya başlıyor. Bu durum tanı koymayla ilgili ne gösterir?",
      opts: ["Tanı yalnızca olumlu sonuçlar doğurur", "Tanı yalnızca olumsuz sonuçlar doğurur", "Tanı hem yararlı hem de damgalama riski taşıyabilir", "Tanı sosyal normlardan etkilenmez"],
      a: 2,
      why: "Tedaviye erişim bir yarar; dışlanma ise damgalama riskidir. En çekici yanlış şık D: tanının sonuçları kültürel normlardan, damgalamadan ve ayrımcılıktan etkilenir." }
  ]
};
