/* Kitora not defteri · hg409 · 4.9 Egemenliğe Meydan Okumalar
   Kaynak: AP HuG CED Topic 4.9 (SPS-4.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg409",
  amac: "Bu konu devletin egemenliğine yönelen baskıları anlatıyor: aşağıdan gelen *devolution*, yukarıdan gelen *supranationalism* ve ikisini hızlandıran iletişim teknolojisi. BM, NATO, AB, ASEAN, Arktik Konseyi ve Afrika Birliği gibi örgütleri tanıyacaksın.",
  bolumler: [
    {
      baslik: "*Devolution*'ın iki yolu",
      kisa: "Devolution ya yetkinin bölgelere devriyle ya da devletin dağılmasıyla olur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Subnational political-territorial unit", tr: "alt ulusal siyasi-bölgesel birim", tanim: "Devletin içinde kendi yönetimi olan bölge: eyalet, özerk topluluk ya da bölge.", ornek: "İspanya'nın özerk toplulukları, Belçika'nın bölgeleri, Kanada ve Nijerya'nın eyaletleri." }
          ] },
        { tip: "ikili", sol: { ikon: "🏛️", baslik: "Yetki devri (devlet bütün kalır)", maddeler: ["Bölgeler özerk ya da alt ulusal birimler hâline gelir", "Örnek: İspanya, Belçika, Kanada, Nijerya"] },
          sag: { ikon: "💥", baslik: "Dağılma (devlet parçalanır)", maddeler: ["Devlet birkaç bağımsız devlete ayrılır", "Örnek: Sovyetler Birliği, Sudan"] },
          oyun: [
            { metin: "İspanya'da özerk toplulukların kendi yönetimleri var; ülke bütün kalıyor.", cevap: "sol", neden: "Yetki devri: devlet bütün." },
            { metin: "Sovyetler Birliği 1991'de 15 bağımsız devlete ayrıldı.", cevap: "sag", neden: "Devlet dağıldı." },
            { metin: "Belçika'da bölgeler ve topluluklar kendi meclislerine sahip.", cevap: "sol", neden: "Alt ulusal birimlere yetki devri." },
            { metin: "Güney Sudan 2011'de Sudan'dan ayrılıp bağımsız oldu.", cevap: "sag", neden: "Devlet ikiye bölündü." }
          ] }
      ]
    },
    {
      baslik: "İletişim teknolojisinin etkisi",
      kisa: "İletişim teknolojisi devolution, süpranasyonalizm ve demokratikleşmeyi kolaylaştırır.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "📱", baslik: "*Devolution*", metin: "Sosyal medya ayrılıkçı ve özerklik yanlısı hareketlerin görüşlerini yayıp örgütlenmesini kolaylaştırır." },
            { ikon: "🛰️", baslik: "*Supranationalism*", metin: "İnternet ve uydular ülkeler arası iletişimi ve işbirliğini hızlandırır." },
            { ikon: "🗳️", baslik: "*Democratization*", metin: "Haber ve sosyal medya, yurttaşların hükümeti izlemesini ve protesto örgütlemesini kolaylaştırır." }
          ] },
        { tip: "not", metin: "2010'ların başında Arap dünyasındaki protestolar, sosyal medyanın örgütlenmeyi nasıl hızlandırdığının örneği olarak sık anılır. Teknoloji iki yönlüdür: devletler de iletişimi izlemek ve denetlemek için kullanabilir." }
      ]
    },
    {
      baslik: "*Supranationalism*: ortak çatı",
      kisa: "Süpranasyonalizmde devletler, ortak amaç için yetkilerinin bir kısmını bir örgüte devreder.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌐", terim: "Supranationalism", tr: "süpranasyonalizm", tanim: "Üç ya da daha fazla devletin ortak bir örgüt çatısında işbirliği yapması. Üyeler bazı kararlarını örgütün kurallarına göre alır.", ornek: "Avrupa Birliği." },
            { ikon: "🏭", terim: "Economies of scale", tr: "ölçek ekonomisi", tanim: "Daha büyük ölçekte üretince birim maliyetin düşmesi. Devletler büyük bir ortak pazarda birleşerek bundan yararlanır.", ornek: "Avrupa'da ortak pazar ve gümrüksüz ticaret." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🌍", baslik: "Sınır ötesi sorunlar", metin: "İklim değişikliği, salgın hastalık ve göç tek devletin çözemeyeceği sorunlardır." },
            { ikon: "📦", baslik: "Ticaret anlaşmaları", metin: "Ortak kurallar ve düşük gümrük, ticareti artırır." },
            { ikon: "🛡️", baslik: "Askerî ittifaklar", metin: "Devletler ortak savunma için bir araya gelir." }
          ] }
      ]
    },
    {
      baslik: "Başlıca süpranasyonel örgütler",
      kisa: "Örgütler, üye devletlerin ekonomik ya da siyasi hareket alanını sınırlayabilir.",
      bloklar: [
        { tip: "tablo", baslik: "Altı örgüt", head: ["Örgüt", "Ne için?", "Egemenliği nasıl sınırlar?"], rows: [
            ["BM (1945)", "Barış, güvenlik ve işbirliği", "Güvenlik Konseyi kararları, örneğin yaptırımlar, üyeleri bağlar"],
            ["NATO (1949)", "Askerî ittifak", "Ortak savunma taahhüdü ve ortak karar mekanizması"],
            ["AB", "Ekonomik ve siyasi birlik", "Ortak pazar ve kurallar; euro bölgesinde ortak para politikası"],
            ["ASEAN (1967)", "Güneydoğu Asya işbirliği", "Ticaret ve güvenlikte ortak kurallar ve kararlar"],
            ["Arktik Konseyi (1996)", "Arktik çevresi ve yerli halklar", "Çevre ve araştırmada ortak çalışma"],
            ["Afrika Birliği (2002)", "Afrika'da birlik ve işbirliği", "Ortak politikalar ve barış girişimleri"]
          ] },
        { tip: "not", metin: "Türkiye, BM'nin kurucu üyelerindendir (1945) ve 1952'den beri NATO üyesidir. AB ile 1995'te gümrük birliği kurmuş, 1999'da AB'ye aday ülke olmuştur. Bu üyelikler Türkiye'nin bazı kararlarını ortak kurallara bağlar." }
      ]
    },
    {
      baslik: "Aşağıdan ve yukarıdan baskı",
      kisa: "Devlet iki yönden sıkışır ama haritadaki ana aktör olmayı sürdürür.",
      bloklar: [
        { tip: "grafik", baslik: "Devlet iki yönden sıkışıyor (şema)", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "sup", tip: "alan", renk: 3, noktalar: [[0.4, 0.6], [9.6, 0.6], [9.6, 9.4], [0.4, 9.4]], gizli: true },
            { id: "dev", tip: "alan", renk: 0, noktalar: [[2.5, 2.5], [7.5, 2.5], [7.5, 7.5], [2.5, 7.5]] },
            { id: "r1", tip: "alan", renk: 1, noktalar: [[3.9, 6.1], [3.9, 6.1], [3.9, 6.1], [3.9, 6.1]] },
            { id: "r2", tip: "alan", renk: 1, noktalar: [[6.1, 6.1], [6.1, 6.1], [6.1, 6.1], [6.1, 6.1]] },
            { id: "r3", tip: "alan", renk: 1, noktalar: [[3.9, 3.9], [3.9, 3.9], [3.9, 3.9], [3.9, 3.9]] },
            { id: "r4", tip: "alan", renk: 1, noktalar: [[6.1, 3.9], [6.1, 3.9], [6.1, 3.9], [6.1, 3.9]] },
            { id: "u1", tip: "ok", renk: 2, from: [1.0, 5], to: [2.3, 5], gizli: true },
            { id: "u2", tip: "ok", renk: 2, from: [9.0, 5], to: [7.7, 5], gizli: true },
            { id: "u3", tip: "ok", renk: 2, from: [6.5, 1.0], to: [6.5, 2.3], gizli: true },
            { id: "tD", tip: "yazi", x: 5, y: 7.95, metin: "Devlet" },
            { id: "tS", tip: "yazi", x: 5, y: 8.8, metin: "AB · NATO · BM", gizli: true },
            { id: "y1", tip: "yazi", x: 5, y: 0.1, metin: "aşağıdan: devolution", gizli: true },
            { id: "y2", tip: "yazi", x: 5, y: 0.1, metin: "yukarıdan: supranationalism", gizli: true }
          ],
          durumlar: [
            { metin: "Bir devlet: haritanın yapı taşı ve egemenliğin ana sahibi." },
            { metin: "==Aşağıdan==: bölgeler (yeşil kutular) özerklik kazanıyor. Yetki devri ya da parçalanma devletin gücünü içeriden azaltır.",
              set: { r1: { noktalar: [[3.0, 5.2], [4.8, 5.2], [4.8, 7.0], [3.0, 7.0]] }, r2: { noktalar: [[5.2, 5.2], [7.0, 5.2], [7.0, 7.0], [5.2, 7.0]] }, r3: { noktalar: [[3.0, 3.0], [4.8, 3.0], [4.8, 4.8], [3.0, 4.8]] }, r4: { noktalar: [[5.2, 3.0], [7.0, 3.0], [7.0, 4.8], [5.2, 4.8]] } }, goster: ["y1"] },
            { metin: "==Yukarıdan==: devlet süpranasyonel bir örgütün çatısına giriyor ve ortak kurallara uyuyor. Eylemleri dışarıdan sınırlanıyor.",
              goster: ["sup", "u1", "u2", "u3", "tS", "y2"], gizle: ["y1"] },
            { metin: "İki yönden sıkışan devlet küçülüyor ama ortadan kalkmıyor: ==egemenlik sınırlanır, yok olmaz.==",
              set: { dev: { noktalar: [[2.7, 2.7], [7.3, 2.7], [7.3, 7.3], [2.7, 7.3]] } } }
          ] },
        { tip: "tuzak", metin: "Üyelik gönüllüdür ve devlet yetkisinin yalnızca bir kısmını devreder.", yanlis: "AB ya da NATO gibi örgütlere katılan devlet egemenliğini tamamen kaybeder; BM bir dünya hükümetidir.", dogru: "Bu örgütler egemenliği ==sınırlar==, ortadan kaldırmaz. Devletler hâlâ haritanın yapı taşıdır; BM üyelerinin üstünde bir hükümet değildir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Devolution* iki biçimde olur: yetkinin alt ulusal birimlere devri (İspanya, Belçika, Kanada, Nijerya) ya da devletin dağılması (SSCB, Sudan).",
            "İletişim teknolojisi devolution, süpranasyonalizm ve demokratikleşmeyi kolaylaştırır.",
            "*Supranationalism*: üç ya da daha çok devletin ortak örgütte yetkilerinin bir kısmını devretmesi.",
            "Nedenler: sınır ötesi ve çevresel sorunlar, ölçek ekonomisi, ticaret anlaşmaları, askerî ittifaklar.",
            "Örgütler: BM, NATO, AB, ASEAN, Arktik Konseyi, Afrika Birliği; üyelerin ekonomik ya da siyasi hareketini sınırlayabilir.",
            "Devlet aşağıdan (*devolution*) ve yukarıdan (*supranationalism*) baskı görür ama ortadan kalkmaz.",
            "Türkiye BM kurucu üyesi, 1952'den beri NATO üyesi; AB ile gümrük birliği içinde."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Güney Sudan 2011'de Sudan'dan ayrılıp bağımsız bir devlet oldu. Bu durum hangi devolution biçimine örnektir?",
      opts: ["Özerk bölge oluşması", "Devletin dağılması", "Süpranasyonel üyelik", "Yetkinin eyaletlere devredilmesi"],
      a: 1,
      why: "Sudan iki ayrı bağımsız devlete bölündü: devletin dağılması. A ve D seçeneklerinde devlet bütün kalır; burada ise yeni bir devlet doğdu."
    },
    {
      q: "Bir devlet, ortak savunma taahhüdü içeren askerî bir ittifaka katılıyor ve bazı kararlarını ittifakın kurallarına göre alıyor. Bu durumu en iyi hangi kavram açıklar?",
      opts: ["*Devolution*", "*Supranationalism*", "*Irredentism*", "*Neocolonialism*"],
      a: 1,
      why: "Birden çok devletin ortak örgüt çatısında yetkilerinin bir kısmını devretmesi *supranationalism*'dir. *Devolution* yetkinin devlet içinde aşağıya kaymasıdır."
    },
    {
      q: "Tabloda üç örgüt anlatılıyor. Hangi eşleştirme doğrudur?",
      fig: { type: "table", head: ["Örgüt", "Kuruluş", "Ana amaç"], rows: [["A", "1949", "Ortak savunma"], ["B", "1967", "Güneydoğu Asya'da ekonomik ve siyasi işbirliği"], ["C", "2002", "Afrika'da birlik ve işbirliği"]] },
      opts: ["A ASEAN, B NATO, C Afrika Birliği", "A Afrika Birliği, B NATO, C ASEAN", "A NATO, B Afrika Birliği, C ASEAN", "A NATO, B ASEAN, C Afrika Birliği"],
      a: 3,
      why: "Ortak savunma NATO'dur (1949); Güneydoğu Asya örgütü ASEAN'dır (1967); Afrika Birliği 2002'de kuruldu. Diğer seçenekler amaçları birbirine karıştırır."
    },
    {
      q: "İletişim teknolojisindeki ilerlemenin siyasi etkisini en iyi hangisi anlatır?",
      opts: ["Yalnızca merkezi devletlerin gücünü artırır.", "Sınırları tamamen ortadan kaldırır.", "Devolution, süpranasyonalizm ve demokratikleşmeyi kolaylaştırabilir.", "Yalnızca askerî ittifakları etkiler."],
      a: 2,
      why: "Teknoloji fikirlerin ve örgütlenmenin yayılmasını hızlandırarak hem bölgesel hem uluslararası hem de demokratik hareketleri kolaylaştırır. Sınırları tamamen kaldırmaz."
    },
    {
      q: "Bir devlet hem bölgelerine daha fazla yetki devrediyor hem de bir ekonomik birliğin ortak kurallarını kabul ediyor. Bu durum egemenlik açısından ne ifade eder?",
      opts: ["Egemenlik hem aşağıdan hem yukarıdan sınırlanıyor ama devlet ortadan kalkmıyor.", "Egemenlik yalnızca aşağıdan sınırlanıyor.", "Devlet egemenliğini tamamen kaybediyor.", "Devlet daha da merkezileşiyor."],
      a: 0,
      why: "Bölgelere devir (*devolution*) içeriden, ortak kurallar (*supranationalism*) dışarıdan sınırlama getirir. Devlet bu yüzden egemenliğini tamamen kaybetmez; yetkisinin bir kısmını paylaşır."
    }
  ]
};
