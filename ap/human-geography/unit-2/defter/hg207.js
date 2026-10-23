/* Kitpath not defteri · hg207 · Nüfus Politikaları
   Kaynak: AP HuG CED Unit 2, Topic 2.7 (SPS-2.A). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg207",
  amac: "Bu konu hükümetlerin nüfusu nasıl yönlendirdiğini anlatıyor: doğumu artıran (*pronatalist*) ve azaltan (*antinatalist*) politikalar ile göçü kolaylaştıran ya da kısıtlayan göç politikaları. Bir politikanın amacıyla gerçek sonucunu karşılaştırmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Nüfus politikası: hükümetin dümeni",
      kisa: "Hükümetler doğum ve göç kararlarını etkileyerek nüfusun büyüklüğünü ve yapısını yönlendirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏛️", terim: "Population policy", tr: "nüfus politikası", tanim: "Hükümetin nüfusun büyüklüğünü, yaş yapısını ya da dağılımını değiştirmek için aldığı kararlar. Yasa, vergi, yardım ve kampanya olabilir.", ornek: "Bebek yardımı ya da vize kuralı birer nüfus politikasıdır." },
            { ikon: "👶", terim: "TFR", tr: "toplam doğurganlık hızı", tanim: "Bir kadının hayatı boyunca ortalama kaç çocuk doğuracağı. Göç olmazsa nüfusun kendini yenilemesi için gereken düzey yaklaşık 2,1'dir.", ornek: "TFR 1,4 ise ülke kendini yenileyemez." }
          ] },
        { tip: "harita", merkez: "Nüfus politikaları", dallar: [
            { baslik: "*Pronatalist*", alt: "Doğumu artırmaya çalışır" },
            { baslik: "*Antinatalist*", alt: "Doğumu azaltmaya çalışır" },
            { baslik: "Göçü teşvik eden", alt: "Dışarıdan nüfus çeker" },
            { baslik: "Göçü kısıtlayan", alt: "Girişleri sınırlar" }
          ] }
      ]
    },
    {
      baslik: "*Pronatalist* ve *antinatalist* politikalar",
      kisa: "*Pronatalist* doğumu artırmaya, *antinatalist* azaltmaya çalışır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🍼", baslik: "*Pronatalist* politika", maddeler: ["Amaç: doğurganlığı (*TFR*) yükseltmek", "Genelde TFR düşük, nüfus yaşlanan ülkelerde görülür"] },
          sag: { ikon: "🚫", baslik: "*Antinatalist* politika", maddeler: ["Amaç: doğurganlığı düşürmek, nüfus artışını yavaşlatmak", "Genelde TFR yüksek, nüfus hızla büyüyen ülkelerde görülür"] },
          oyun: [
            { metin: "Üçüncü çocuk için aileye nakit bebek yardımı veriliyor.", cevap: "sol", neden: "Doğumu ödüllendirir: *pronatalist*." },
            { metin: "Devlet kliniklerinde doğum kontrol yöntemleri ücretsiz dağıtılıyor.", cevap: "sag", neden: "Doğum sayısını azaltmayı kolaylaştırır: *antinatalist*." },
            { metin: "Ücretli doğum izni uzatılıyor ve devlet kreşleri yaygınlaştırılıyor.", cevap: "sol", neden: "Çocuk sahibi olmanın maliyetini düşürerek doğumu teşvik eder: *pronatalist*." },
            { metin: "İki çocuktan fazlası olan ailelere ek vergi uygulanıyor.", cevap: "sag", neden: "Çocuk sayısını sınırlamayı hedefler: *antinatalist*." }
          ] },
        { tip: "tablo", baslik: "Araçlar ve örnekler", head: ["Politika", "Araç örnekleri", "Örnek"], rows: [
            ["*Pronatalist*", "Nakit doğum yardımı, vergi indirimi, uzun ücretli doğum izni, kreş desteği", "Fransa, İsveç, Singapur (1987'den sonra), Türkiye'de doğum yardımı"],
            ["*Pronatalist* (zorlayıcı)", "Doğum kontrolünü ve kürtajı yasaklamak", "Romanya, 1966"],
            ["*Antinatalist*", "Aile planlaması eğitimi ve ücretsiz doğum kontrol, çocuk sayısına sınır, ceza ve ödül", "Çin (tek çocuk politikası, 1979/80–2015), Hindistan, Singapur (1970'ler)"]
          ], vurgu: 2, not: "Politika sert de olabilir (yasak, ceza), teşvik edici de (yardım, bilgi). Türü belirleyen araç değil, ==hedef==tir." },
        { tip: "tuzak", metin: "*Antinatalist* demek her zaman zorlama demek değildir.", yanlis: "*Antinatalist* politika, devletin doğumu zorla engellemesidir.", dogru: "==Hedef== ayırır: doğumu azaltmaya çalışan her politika *antinatalist*'tir. Ücretsiz doğum kontrol ve bilgilendirme kampanyası da bunun gönüllü biçimidir; zorlayıcı olanlar (Çin'in tek çocuk politikası) bunlardan sadece biridir." }
      ]
    },
    {
      baslik: "Politika *TFR*'yi nasıl oynatır?",
      kisa: "Etki gecikmelidir ve *pronatalist* teşvikler çoğu zaman sınırlı kalır.",
      bloklar: [
        { tip: "grafik", baslik: "TFR ve politika (şematik örnek)", xlabel: "Zaman (yıl, şematik)", ylabel: "TFR", xmax: 13, ymax: 7,
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "yen", tip: "cizgi", renk: 3, kesik: true, from: [0, 2.1], to: [13, 2.1] },
            { id: "yenyz", tip: "yazi", x: 3.4, y: 1.5, metin: "yenileme düzeyi 2,1" },
            { id: "tfr", tip: "egri", renk: 0, etiket: "TFR", noktalar: [[0, 4.2], [2, 4.2], [4, 4.2], [6, 4.2], [8, 4.2], [10, 4.2], [12, 4.2]] },
            { id: "p1", tip: "cizgi", renk: 2, from: [4, 0], to: [4, 6.2], gizli: true },
            { id: "p1yz", tip: "yazi", x: 4, y: 6.55, metin: "Antinatalist", gizli: true },
            { id: "p2", tip: "cizgi", renk: 1, from: [9, 0], to: [9, 6.2], gizli: true },
            { id: "p2yz", tip: "yazi", x: 9, y: 6.55, metin: "Pronatalist", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: bir ülkede *TFR* yaklaşık 4. Kadın başına doğum yüksek, nüfus hızlı büyüyor. Kesikli çizgi ==yenileme düzeyi== (2,1)." },
            { metin: "Hükümet bir ==*antinatalist*== politika başlatıyor (aile planlaması, çocuk sayısına sınır). *TFR* hemen düşmez; ==etki gecikmelidir== ve birkaç yılda yenileme düzeyine yaklaşır.", set: { tfr: { noktalar: [[0, 4.2], [2, 4.2], [4, 4.0], [6, 3.1], [8, 2.6], [10, 2.2], [12, 2.0]] } }, goster: ["p1", "p1yz"] },
            { metin: "Politika gevşetilmezse *TFR* yenileme düzeyinin ==altına== iner. Nüfus ileride yaşlanma ve küçülme eğilimine girer; Çin ve Singapur bu yola girdi.", set: { tfr: { noktalar: [[0, 4.2], [2, 4.2], [4, 4.0], [6, 3.0], [8, 2.2], [10, 1.6], [12, 1.4]] } } },
            { metin: "Hükümet bu kez ==*pronatalist*== teşvik veriyor (Singapur 1987'den sonra). *TFR* biraz toparlanır ama çoğu zaman 2,1'in altında kalır: ==teşvik tek başına yetmez.==", set: { tfr: { noktalar: [[0, 4.2], [2, 4.2], [4, 4.0], [6, 3.0], [8, 2.2], [10, 1.5], [12, 1.7]] } }, goster: ["p2", "p2yz"] }
          ] },
        { tip: "tuzak", metin: "Politikayı ilan etmek ile sonucu görmek aynı şey değildir.", yanlis: "*Pronatalist* politika başlayınca *TFR* hemen yenileme düzeyine çıkar.", dogru: "Çocuk sahibi olma kararı maliyet, konut, iş, eğitim ve değerlere bağlıdır. Bu yüzden sonuç ==gecikmeli== ve ==sınırlı== olabilir; *antinatalist* politikalar ise bazen amaçlanandan çok daha aşağı çeker." }
      ]
    },
    {
      baslik: "Çin örneği: amaç ve beklenmeyen sonuç",
      kisa: "Çin'in tek çocuk politikası doğumu düşürdü ama yaşlanma ve cinsiyet dengesizliği doğurdu.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "1979/80", baslik: "Tek çocuk politikası", metin: "Çin, çoğu aile için tek çocuk sınırı getirdi; amaç nüfus artışını hızla yavaşlatmaktı." },
            { tarih: "2016", baslik: "İki çocuk politikası", metin: "Nüfus yaşlanıp işgücü azalınca sınır iki çocuğa çıkarıldı." },
            { tarih: "2021", baslik: "Üç çocuk politikası", metin: "TFR çok düşük kalınca sınır üç çocuğa çıkarıldı; teşvikler ==pronatalist== yöne döndü." }
          ] },
        { tip: "ikili", sol: { ikon: "🎯", baslik: "Amaç", maddeler: ["Nüfus artışını yavaşlatmak", "Kaynak ve kişi başına gelir baskısını azaltmak"] },
          sag: { ikon: "⚠️", baslik: "Beklenmeyen sonuçlar", maddeler: ["Hızlı yaşlanma: tek çocuğa iki ebeveyn ve dört büyükanne-büyükbaba bakıyor (4-2-1)", "Erkek çocuk tercihi yüzünden doğumlarda erkek-kız dengesizliği", "Çalışma çağındaki nüfusun küçülmesi"] } }
      ]
    },
    {
      baslik: "Göç politikaları: nüfusu büyüklük ve yapı olarak değiştirir",
      kisa: "Göç politikası yalnız kişi sayısını değil, yaş ve beceri yapısını da değiştirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛂", terim: "Immigration policy", tr: "göç politikası", tanim: "Bir ülkeye kimin, kaç kişinin, hangi koşulla girip kalabileceğini belirleyen kurallar. Girişi artırabilir ya da kısabilir.", ornek: "Vize, oturma izni ve çalışma izni kuralları." },
            { ikon: "🔢", terim: "Quota", tr: "kota", tanim: "Belli bir süre için kabul edilecek göçmen sayısına ya da ülkesine konan üst sınır.", ornek: "Yılda en fazla 10 bin kişiye oturma izni." },
            { ikon: "📊", terim: "Points system", tr: "puan sistemi", tanim: "Yaş, eğitim, dil ve iş deneyimi gibi ölçütlere puan verip yüksek puanlıları kabul eden yöntem. Kanada ve Avustralya kullanır.", ornek: "Genç, mühendis ve İngilizce bilen başvuranın puanı yüksektir." }
          ] },
        { tip: "tablo", baslik: "Hangi politika nüfusu nasıl etkiler?", head: ["Politika", "Ne yapar", "Etkisi"], rows: [
            ["Kota ya da sıkı sınır", "Girişi sınırlar", "Büyüme yavaşlar; kabul edilenlerin uyruk ve yaş dağılımı değişir"],
            ["Puan sistemi", "Genç ve eğitimli göçmeni seçer", "Çalışma çağı nüfusu artar, *dependency ratio* düşer"],
            ["Aile birleşimi izni", "Yakınların gelmesine izin verir", "Kadın, çocuk ve yaşlı sayısı artar; yaş-cinsiyet yapısı değişir"],
            ["Geçici işçi programı", "Süreli çalışma izni verir", "Genç yetişkin ağırlıklı geçici nüfus artışı"]
          ], not: "*Dependency ratio* (bağımlılık oranı): çalışma çağındaki 100 kişiye düşen çocuk ve yaşlı sayısı; ayrıntısı 2.9'da." },
        { tip: "ornek", baslik: "Kota nüfus artışını nasıl etkiler?", durum: "10.000 kişilik bir ada ülkesinde bir yılda 150 doğum, 100 ölüm, 80 göçmen girişi ve 30 çıkış oldu. Sonra kota girişleri 30'a indirdi (çıkışlar 30 kaldı). Büyüme oranı nasıl değişti?",
          adimlar: ["Doğal artış: 150 − 100 = +50.", "Kotadan önce net göç: 80 − 30 = +50. Toplam: +100, yani 100 ÷ 10.000 = %1,0.", "Kotadan sonra net göç: 30 − 30 = 0. Toplam: +50, yani %0,5."],
          sonuc: "Kota büyümeyi ==%1,0'dan %0,5'e== indirdi; doğal artış (+50) aynı kaldı, değişen yalnız ==net göçtü==." },
        { tip: "tuzak", metin: "Göç politikası yalnız \"kaç kişi\" meselesi değildir.", yanlis: "Göç politikaları sadece nüfusun büyüklüğünü değiştirir.", dogru: "Hem ==büyüklüğü== hem ==yapıyı== (yaş, cinsiyet, eğitim, uyruk) değiştirir. *Pronatalist* ve *antinatalist* politikalar doğumu, göç politikaları ise ülkeye girip çıkanları etkiler." }
      ]
    },
    {
      baslik: "Hangi sorun, hangi politika?",
      kisa: "Politika, ülkenin demografik sorununa göre seçilir; sınavda önce sorunu tespit et.",
      bloklar: [
        { tip: "tablo", baslik: "Sorun → politika", head: ["Ülkenin durumu", "Olası politika", "Hedef"], rows: [
            ["TFR yüksek, nüfus hızla büyüyor", "*Antinatalist*", "Kaynak baskısını azaltmak"],
            ["TFR düşük, nüfus yaşlanıyor", "*Pronatalist*", "Doğum sayısını artırmak"],
            ["İşgücü açığı, çok yaşlı nüfus", "Puan sistemi ya da geçici işçi programı", "Genç çalışan çekmek"],
            ["Ekonomik, kültürel ya da güvenlik kaygısı", "Kota ve sıkı sınır", "Girişleri sınırlamak"]
          ] },
        { tip: "adimlar", baslik: "Politika sorusu nasıl çözülür?", adimlar: [
            { baslik: "Sorun nedir?", metin: "*TFR* yüksek mi düşük mü? Nüfus genç mi yaşlı mı?" },
            { baslik: "Hedef ne?", metin: "Doğumu artırmak, azaltmak, nüfus çekmek ya da girişi kısmak?" },
            { baslik: "Araç ne?", metin: "Teşvik, yasak, kampanya, kota, puan sistemi, vize..." },
            { baslik: "Sonuç ne olabilir?", metin: "Gecikme, sınırlı etki, yaşlanma, cinsiyet dengesizliği gibi beklenmeyen sonuçlar." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Nüfus politikası: hükümetin nüfusun büyüklüğünü ve yapısını yönlendirmek için aldığı kararlar (doğum ya da göç üzerinden).",
            "*Pronatalist* politika doğumu artırır (yardım, doğum izni, kreş); *antinatalist* politika doğumu azaltır (aile planlaması, çocuk sınırı).",
            "Ayırıcı olan ==hedeftir==: antinatalist her zaman zorlama değildir; ücretsiz doğum kontrol da gönüllü bir antinatalist politikadır.",
            "Etki gecikmelidir; pronatalist teşvikler çoğu zaman sınırlı kalır, antinatalist politika *TFR*'yi yenileme düzeyinin (≈2,1) altına çekebilir.",
            "Çin: 1979/80 tek çocuk, 2016 iki çocuk, 2021 üç çocuk. Beklenmeyen sonuçlar: hızlı yaşlanma ve erkek-kız dengesizliği. Singapur 1970'lerde antinatalist, 1987'den sonra pronatalist oldu.",
            "Göç politikaları (kota, puan sistemi, aile birleşimi, geçici işçi programı) nüfusun hem büyüklüğünü hem yaş, cinsiyet ve beceri yapısını değiştirir.",
            "Toplam büyüme = doğal artış + net göç: kota yalnız net göçü değiştirir (örnek: %1,0 → %0,5).",
            "Sınavda önce ülkenin sorununu (TFR, yaşlanma, işgücü) bul, sonra hedef ve olası yan etkileri yaz."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir ülke 1970'lerde \"İki çocuk yeter\" kampanyası yürüttü, 1980'lerin sonunda ise üç ve daha fazla çocuğu olan ailelere vergi indirimi ve yardım vermeye başladı. Bu değişim en iyi nasıl açıklanır?",
      opts: ["Hükümet önce *pronatalist*, sonra *antinatalist* oldu çünkü nüfus yaşlanıyordu.", "Hükümet önce *antinatalist*, sonra *pronatalist* oldu çünkü *TFR* yenileme düzeyinin altına düşmüştü.", "Hükümet göçü teşvik eden bir politikadan göçü kısıtlayan bir politikaya geçti.", "Ülke demografik dönüşüm modelinin 1. evresinden 2. evresine geçti."],
      a: 1,
      why: "\"İki çocuk yeter\" doğumu azaltmayı hedefler (*antinatalist*); üç ve fazlası için teşvik doğumu artırmayı hedefler (*pronatalist*). Değişimin nedeni *TFR*'nin çok düşmesidir (Singapur örneği). A şıkkı yönü tersine çevirdiği için çekici ama yanlıştır."
    },
    {
      q: "Tabloda X ülkesinin *TFR* değerleri verilmiştir. Bu değişimi en iyi hangi politika açıklar?",
      fig: { type: "table", head: ["Yıl", "TFR", "Önemli olay"], rows: [["1985", "5,2", "—"], ["1990", "5,0", "Ücretsiz aile planlaması kliniklerinin açılması"], ["2000", "3,1", "—"], ["2010", "2,2", "—"]], caption: "X ülkesi (varsayımsal)" },
      opts: ["Doğum başına nakit yardım veren *pronatalist* bir politika", "Girişleri sınırlayan bir göç kotası", "Ücretsiz doğum kontrol sağlayan *antinatalist* bir politika", "Çalışma çağı göçmenleri çeken bir puan sistemi"],
      a: 2,
      why: "Klinikler açıldıktan sonra *TFR* 5,0'dan 2,2'ye düşmüştür; bu, doğumu azaltmaya yönelik *antinatalist* politikayla uyumludur. Göç kotası ve puan sistemi göçü etkiler, *TFR*'yi (doğum sayısını) doğrudan değiştirmez; B şıkkı bu yüzden çekici bir çeldiricidir."
    },
    {
      q: "Bir ülke yalnızca 35 yaş altı, üniversite mezunu ve dil sınavını geçen başvuranları kabul eden bir puan sistemi uyguluyor. Bunun en olası demografik etkisi nedir?",
      opts: ["Çalışma çağındaki nüfus payı artar ve *dependency ratio* düşme eğilimine girer.", "Doğum kontrol kullanımı artar ve *TFR* hızla düşer.", "Nüfusun ortalama yaşı yükselir ve yaşlı sayısı artar.", "Nüfus büyüklüğü değişir ama yaş yapısı değişmez."],
      a: 0,
      why: "Genç ve eğitimli göçmenler çalışma çağı grubunu büyütür; böylece çocuk ve yaşlı sayısının çalışanlara oranı (*dependency ratio*) azalır. D şıkkı çekicidir ama yanlıştır: göç politikaları yalnız sayıyı değil yaş yapısını da değiştirir."
    },
    {
      q: "Çin'in tek çocuk politikasının uzun vadeli sonuçları arasında aşağıdakilerden hangisi yer alır?",
      opts: ["Çalışma çağındaki nüfusun hızla artması", "Doğumlarda kız çocukları lehine dengesizlik", "Genç nüfusun payının artması ve *TFR*'nin yükselmesi", "Hızlı yaşlanma ve doğumlarda erkek-kız dengesizliği"],
      a: 3,
      why: "Tek çocuk sınırı *TFR*'yi düşürdü; bunun sonucu olarak nüfus yaşlandı ve erkek çocuk tercihi yüzünden doğumlarda erkek fazlalığı oluştu. B şıkkı yönü ters verir; A ve C ise gerçeğin tam tersidir."
    },
    {
      q: "20.000 kişilik bir ülkede bir yılda 240 doğum, 140 ölüm, 60 göçmen girişi ve 160 göçmen çıkışı kaydedilmiştir. Bu yıl nüfus büyüme oranı kaçtır?",
      opts: ["%0,5", "%0 (nüfus aynı kaldı)", "%1,0", "%1,5"],
      a: 1,
      why: "Doğal artış 240 − 140 = +100; net göç 60 − 160 = −100. Toplam değişim 0 olur. A şıkkı yalnızca doğal artışı (100 ÷ 20.000) hesaplayıp net göçü unuttuğunuzda çıkan çekici yanlış cevaptır."
    }
  ]
};
