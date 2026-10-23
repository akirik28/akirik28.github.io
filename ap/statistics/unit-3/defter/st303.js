/* Kitpath not defteri · st303 · 3C Örneklemedeki Sorunlar (CED 3.4)
   Kaynak: AP Statistics CED Unit 3 (3.4 Potential Problems with Sampling). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st303",
  amac: "Bu konu örneklemede neyin ters gidebileceğini anlatıyor: *voluntary response*, *convenience*, *undercoverage*, *nonresponse* ve *response bias*. Yanlılığın şans farkından nasıl ayrıldığını, soru ifadesinin etkisini ve bir yanlılık sorusunu nasıl yanıtlayacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Yanlılık nedir?",
      kisa: "Yanlılık sonuçları hep aynı yöne iter; örneklemi büyütmek bunu düzeltmez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Bias", tr: "yanlılık", tanim: "Bir yöntemin population'daki gerçek değeri ==sistemli olarak== fazla ya da az tahmin etmesi.", ornek: "Yalnızca spor salonu çıkışında sorulan ankette \"spor sevgisi\" hep yüksek çıkar." },
            { ikon: "🎲", terim: "Sampling variability", tr: "örnekleme değişkenliği", tanim: "Rastgele örneklemlerin şans yüzünden birbirinden biraz farklı çıkması. Yanlılık değildir; örneklem büyüdükçe azalır.", ornek: "İki rastgele ankette destek oranı %48 ve %52." }
          ] },
        { tip: "grafik", baslik: "Yanlılık mı, şans mı? Her nokta bir anketin sonucu", xlabel: "Adayı destekleyenlerin oranı (%)", ylabel: "Anket", xmax: 10, ymax: 7,
          xticks: [{ v: 0, label: "40" }, { v: 2.5, label: "45" }, { v: 5, label: "50" }, { v: 7.5, label: "55" }, { v: 10, label: "60" }],
          ogeler: [
            { id: "gercek", tip: "cizgi", renk: 1, kesik: true, from: [5, 0.3], to: [5, 6.6], etiket: "Gerçek %50", gizli: true },
            { id: "d1", tip: "nokta", x: 4.2, y: 1.3, gizli: true },
            { id: "d2", tip: "nokta", x: 5.6, y: 1.8, gizli: true },
            { id: "d3", tip: "nokta", x: 4.8, y: 2.3, gizli: true },
            { id: "d4", tip: "nokta", x: 5.3, y: 2.8, gizli: true },
            { id: "d5", tip: "nokta", x: 3.9, y: 3.3, gizli: true },
            { id: "d6", tip: "nokta", x: 6.1, y: 3.8, gizli: true },
            { id: "d7", tip: "nokta", x: 5, y: 4.3, gizli: true },
            { id: "d8", tip: "nokta", x: 4.6, y: 4.8, gizli: true },
            { id: "d9", tip: "nokta", x: 5.5, y: 5.3, gizli: true },
            { id: "d10", tip: "nokta", x: 5.9, y: 5.8, gizli: true }
          ],
          durumlar: [
            { metin: "Gerçekte bir adayı destekleyenlerin oranı %50. Aşağıdaki her nokta bir anketin bulduğu oranı gösterecek.", goster: ["gercek"] },
            { metin: "Rastgele örneklemle yapılan 10 anket: sonuçlar %50 çevresinde dağılıyor. Bu ==şans farkı==dır.", goster: ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10"] },
            { metin: "Örneklem büyüyünce noktalar gerçek değere yaklaşıp sıkışıyor: şans farkı azalır.", set: { d1: { x: 4.8 }, d2: { x: 5.2 }, d3: { x: 4.9 }, d4: { x: 5.1 }, d5: { x: 4.7 }, d6: { x: 5.3 }, d7: { x: 5 }, d8: { x: 4.9 }, d9: { x: 5.1 }, d10: { x: 5.2 } } },
            { metin: "Şimdi yanlı bir yöntem (ör. yalnızca adayın mitingine gelenlere sormak): anketler %54 çevresinde, yani ==hep== bir yöne kaymış.", set: { d1: { x: 6.1 }, d2: { x: 7.6 }, d3: { x: 6.8 }, d4: { x: 7.3 }, d5: { x: 5.9 }, d6: { x: 8.1 }, d7: { x: 7 }, d8: { x: 6.6 }, d9: { x: 7.5 }, d10: { x: 7.9 } } },
            { metin: "Yanlı yöntemle örneklemi büyütmek noktaları sıkıştırır ama %50'ye getirmez. ==Yanlılık büyük örneklemle düzelmez.==", set: { d1: { x: 6.9 }, d2: { x: 7.1 }, d3: { x: 6.95 }, d4: { x: 7.05 }, d5: { x: 6.85 }, d6: { x: 7.15 }, d7: { x: 7 }, d8: { x: 6.95 }, d9: { x: 7.05 }, d10: { x: 7.1 } } }
          ] },
        { tip: "tuzak", baslik: "Büyük örneklem yanlılığı silmez", metin: "Örneklem büyüklüğü şans farkını (değişkenliği) küçültür; yöntemin sistemli hatasını (yanlılığı) küçültmez.", yanlis: "Anket yanlıydı ama 50 000 kişiye ulaştık, o halde sonuç güvenilir.", dogru: "Yanlı yöntemde örneklemi büyütmek yanlış değere daha kesin ulaştırır. Çözüm daha iyi bir yöntemdir (rastgele seçim)." }
      ]
    },
    {
      baslik: "Örnek seçiminden doğan yanlılıklar",
      kisa: "Kimin örneğe gireceği yanlış kurulursa sonuç eğilir.",
      bloklar: [
        { tip: "harita", merkez: "Yanlılık kaynakları", dallar: [
            { baslik: "*Voluntary response*", alt: "kendi isteğiyle yanıtlayanlar" },
            { baslik: "*Convenience sample*", alt: "kolay ulaşılanlar" },
            { baslik: "*Undercoverage*", alt: "bazıları hiç seçilemez" },
            { baslik: "*Nonresponse*", alt: "seçilen ama yanıtlamayanlar" },
            { baslik: "*Response bias*", alt: "yanıtın kendisi doğru değil" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📣", terim: "Voluntary response bias", tr: "gönüllü yanıt yanlılığı", tanim: "Katılıp katılmamaya ==kişinin kendisi== karar verir; genellikle güçlü fikri olanlar yanıt verir.", ornek: "Radyoda \"fikrini söylemek isteyen arasın\" anketi." },
            { ikon: "🚶", terim: "Convenience sampling", tr: "uygunluk örneklemesi", tanim: "Araştırmacı ulaşması ==kolay olanları== seçer; kolay ulaşılanlar çoğu zaman population'ı temsil etmez.", ornek: "Kantinde sıraya girenlere anket yapmak." },
            { ikon: "🕳️", terim: "Undercoverage", tr: "eksik kapsama", tanim: "Population'ın bir kısmı çerçevede yoktur ya da ==seçilme şansı çok azdır==.", ornek: "Yalnızca ev telefonu olanları aramak." }
          ] },
        { tip: "ikili", sol: { ikon: "📣", baslik: "*Voluntary response*", maddeler: ["Kişi katılmayı kendisi seçer", "Genelde uç fikirliler yanıtlar", "Örnek: çağrı anketi"] },
          sag: { ikon: "🕳️", baslik: "*Undercoverage*", maddeler: ["Bazı kişilerin seçilme şansı yok ya da çok az", "Çerçeve population'ı tam kapsamaz", "Örnek: eski liste"] },
          oyun: [
            { metin: "Okulun sosyal medya hesabında anket bağlantısı paylaşılıyor; yalnızca tıklayanlar değerlendiriliyor.", cevap: "sol", neden: "Katılımı kişi kendisi seçiyor: *voluntary response*." },
            { metin: "Anket için kullanılan öğrenci listesi geçen eylülden kalma; bu dönem gelen nakil öğrenciler listede yok.", cevap: "sag", neden: "Bir grup çerçevede olmadığından hiç seçilemiyor: *undercoverage*." },
            { metin: "Bir televizyon programı izleyicilerden telefonla oy vermesini istiyor.", cevap: "sol", neden: "Oy verip vermemeyi izleyici seçiyor: *voluntary response*." },
            { metin: "İlçedeki halkın görüşü için yalnızca ev telefonu olanlar aranıyor; cep telefonu kullananların çoğuna ulaşılamıyor.", cevap: "sag", neden: "Ev telefonu olmayanlar çerçevede yok: *undercoverage*." },
            { metin: "Bir ürün sayfasında yorum yazanlar \"müşteri memnuniyeti\" olarak sayılıyor.", cevap: "sol", neden: "Yorum yazmayı müşteri kendisi seçiyor: *voluntary response*." }
          ] },
        { tip: "tuzak", baslik: "Gönüllü yanıt mı, uygunluk mu?", metin: "İkisi de rastgele olmayan seçimdir; fark kararı kimin verdiğindedir.", yanlis: "Kantinde sıradakilere sordum, bu voluntary response'tur.", dogru: "Seçimi araştırmacı kolayına göre yapıyorsa *convenience*; kişi kendi isteğiyle katılıyorsa *voluntary response*." }
      ]
    },
    {
      baslik: "Yanıt vermeyenler ve yanlış yanıt verenler",
      kisa: "Seçilip yanıtlamayanlar nonresponse, yanlış yanıt verenler response bias.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📭", terim: "Nonresponse bias", tr: "yanıtsızlık yanlılığı", tanim: "Örneğe ==seçilen== kişilerin yanıt vermemesi ya da ulaşılamaması; yanıtlamayanlar yanıtlayanlardan farklıysa sonuç eğilir.", ornek: "200 formdan yalnızca 60'ı geri dönüyor." },
            { ikon: "🙊", terim: "Response bias", tr: "yanıt yanlılığı", tanim: "Kişiler yanıt veriyor ama ==doğru ya da dürüst== yanıt vermiyor: soru ifadesi, soran kişi ya da utanç yüzünden.", ornek: "Sınıfta yüksek sesle \"hiç kopya çektin mi?\" diye sormak." }
          ] },
        { tip: "ikili", sol: { ikon: "📭", baslik: "*Nonresponse bias*", maddeler: ["Kişi örneğe seçilmiş", "Yanıt vermiyor ya da ulaşılamıyor", "Eksik olan yanıtın kendisi"] },
          sag: { ikon: "🙊", baslik: "*Response bias*", maddeler: ["Kişi yanıt veriyor", "Yanıt doğru değil", "Soru, ortam ya da utanç yüzünden"] },
          oyun: [
            { metin: "Seçilen 100 öğrenciden 40'ı anket formunu hiç teslim etmedi.", cevap: "sol", neden: "Seçilmiş ama yanıt vermemiş: *nonresponse*." },
            { metin: "\"Hiç kopya çektin mi?\" sorusu sınıfta yüksek sesle soruldu; çoğu öğrenci \"hayır\" dedi.", cevap: "sag", neden: "Yanıt veriliyor ama utanç yüzünden doğru değil: *response bias*." },
            { metin: "Telefonla aranan seçmenlerin birçoğu açmadı.", cevap: "sol", neden: "Seçilmiş ama ulaşılamamış: *nonresponse*." },
            { metin: "Anketör \"Bu harika yeni menüyü beğendiniz mi?\" diye sordu.", cevap: "sag", neden: "Soru ifadesi olumlu yanıtı itiyor: *response bias*." },
            { metin: "Yaşlıların evde olmadığı saatte kapı kapı dolaşılarak yapılan ankette kapıyı açan çıkmadı.", cevap: "sol", neden: "Seçilmiş hanelere ulaşılamadı: *nonresponse*." }
          ] },
        { tip: "tuzak", baslik: "Nonresponse mu, undercoverage mı?", metin: "İkisinde de bazı kişilerin görüşü sonuçta yoktur; ama nedenleri farklıdır.", yanlis: "Seçilen kişi anketi yanıtlamadı; bu undercoverage'dır.", dogru: "Seçilme şansı olup yanıt vermeyenler *nonresponse*; listede olmadığı için hiç seçilemeyenler *undercoverage*." }
      ]
    },
    {
      baslik: "Soru ifadesi ve yanlılığı azaltma yolları",
      kisa: "Yönlendirici soru cevabı soranın istediği yöne iter; her yanlılığın bir çaresi var.",
      bloklar: [
        { tip: "tablo", baslik: "Sorunlu soru ifadeleri", head: ["Soru", "Sorun", "Çözüm"], rows: [
            ["\"Herkesin sevdiği yeni kantin menüsünü beğendiniz mi?\"", "Yönlendirici ifade: \"herkesin sevdiği\" olumlu yanıtı iter", "Tarafsız yaz: \"Yeni kantin menüsünü nasıl buluyorsunuz?\""],
            ["\"Sınavlarda kopya çektin mi?\" (sınıfta, yüksek sesle)", "Utanılan konu: dürüst yanıt vermeme", "Anonim ve gizli, yazılı anket"],
            ["\"Servis ve yemek kalitesinden memnun musunuz?\"", "İki soru bir arada: ne yanıtlandığı belirsiz", "İki ayrı soru sor"]
          ], not: "Soru ifadesi *response bias* yaratır; aynı konuda farklı ifade çok farklı yüzdeler verebilir." },
        { tip: "liste", maddeler: [
            { ikon: "📣", baslik: "Voluntary response, convenience", metin: "Bunun yerine rastgele seçim kullan." },
            { ikon: "🕳️", baslik: "Undercoverage", metin: "Çerçeveyi güncel ve eksiksiz tut." },
            { ikon: "📭", baslik: "Nonresponse", metin: "Yanıtsızlara tekrar ulaş, hatırlat, yanıt kolaylığı sağla." },
            { ikon: "🙊", baslik: "Response bias", metin: "Tarafsız soru yaz, anonimlik sağla, eğitimli anketör kullan." }
          ] }
      ]
    },
    {
      baslik: "Bir yanlılık sorusunu yanıtlamak",
      kisa: "Yöntemi adlandır, yanlılık türünü söyle, sonucun hangi yöne kayacağını yaz.",
      bloklar: [
        { tip: "adimlar", baslik: "Cevabın üç parçası", adimlar: [
            { baslik: "1 · Yöntemi tanımla", metin: "Örneklem kimlerden oluşuyor, nasıl seçilmiş?" },
            { baslik: "2 · Yanlılık türünü adlandır", metin: "*Voluntary response*, *convenience*, *undercoverage*, *nonresponse* ya da *response bias*." },
            { baslik: "3 · Yönü bağlamda açıkla", metin: "Tahmin gerçek değerden büyük mü küçük mü olur, neden?" }
          ] },
        { tip: "ornek", baslik: "Spor tesisi anketi", durum: "Belediye, gençlerin spor tesislerini kullanma oranını öğrenmek için spor salonunun önünde duran 100 gençle konuşuyor.",
          adimlar: ["Yöntem: ulaşması kolay olanlar seçilmiş, kimse rastgele seçilmemiş: *convenience sample*.", "Spor salonunun önündekiler sporu sevmeye yatkın gençler; sporu sevmeyenler orada yok.", "Sonuç: kullanma oranı gerçek değerden yüksek çıkar (fazla tahmin)."],
          sonuc: "*Convenience sample* yanlıdır; tesis kullanma oranı gerçek değerden ==yüksek== çıkar çünkü ankete girenler zaten tesise yakın gençler." },
        { tip: "tuzak", baslik: "\"Yanlıdır\" demek yetmez", metin: "Sınavda tam puan için yanlılığın adı, nedeni ve yönü bağlamla yazılır.", yanlis: "Bu anket yanlı olur çünkü örneklem iyi değil.", dogru: "\"*Convenience sample*; salon önündekiler spor yapmaya yatkın olduğundan oran gerçek değerden büyük çıkar.\" gibi bağlamla yaz." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Bias* (yanlılık) sonucu hep aynı yöne iter; *sampling variability* ise şans farkıdır ve örneklem büyüdükçe azalır.",
            "Örneklemi büyütmek yanlılığı düzeltmez; yanlış değere daha kesin ulaştırır.",
            "*Voluntary response*: kişi kendisi katılır (çağrı anketi). *Convenience*: araştırmacı kolayına göre seçer.",
            "*Undercoverage*: çerçevede olmayan ya da çok az şansı olan gruplar. *Nonresponse*: seçilip yanıtlamayanlar.",
            "*Response bias*: yanıt doğru değil; soru ifadesi, soran kişi, utanç ya da sosyal beğeni yüzünden.",
            "Yönlendirici, duygusal ya da iki soruyu birleştiren ifadelerden kaçın; tarafsız ve tek konulu soru yaz.",
            "Çözüm: rastgele seçim, güncel çerçeve, yanıtsızlara ulaşma, tarafsız soru ve anonimlik.",
            "Yanlılık sorusunda yöntemi, yanlılık türünü ve sonucun hangi yöne kayacağını bağlamla yaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir haber sitesi \"Okul forması kaldırılmalı mı?\" sorusunu yayınlıyor. Bağlantıya tıklayan 3 000 kişi oy veriyor ve %88'i \"evet\" diyor. Bu sonuç için en uygun yorum hangisidir?",
      opts: ["*Undercoverage*: internete erişimi olmayanlar hiç seçilemez", "*Voluntary response bias*: oy verenler konuda güçlü fikri olan, kendi isteğiyle katılanlardır", "*Nonresponse bias*: siteyi ziyaret edenlerin çoğu oy vermedi", "*Response bias*: soru yönlendirici ifade taşıyor"],
      a: 1,
      why: "Katılımı kişi kendisi seçiyor ve çağrı anketine genelde konuda güçlü fikri olanlar yanıt verir: *voluntary response*. A en çekici yanlış şık: erişim sorunu gerçek olabilir ama bu örnekte asıl neden katılımın gönüllü olması." },
    { q: "Belediye, mahalledeki hanelerin görüşünü öğrenmek için kayıtlı ev telefonu numaralarından rastgele 300 numarayı arıyor. Ev telefonu bulunmayan haneler listede yok. Burada hangi yanlılık vardır?",
      opts: ["*Voluntary response bias*", "*Nonresponse bias*", "*Convenience sampling*", "*Undercoverage*"],
      a: 3,
      why: "Ev telefonu olmayan haneler çerçevede yok, yani seçilme şansları sıfır: *undercoverage*. B en çekici yanlış şık: nonresponse seçilen ama yanıtlamayanlar içindir; burada bu hanelere hiç ulaşılamıyor." },
    { q: "Rastgele seçilen 500 öğrenciye kantin anketi formu veriliyor; yalnızca 140'ı formu geri getiriyor ve geri getirenlerin %75'i kantini \"çok iyi\" buldu. Araştırmacı bunu tüm okula uyguluyor. Asıl sorun nedir?",
      opts: ["*Nonresponse bias*: formu getirmeyenler getirenlerden farklı düşünüyor olabilir", "*Undercoverage*: bazı öğrenciler listede yoktu", "Örneklem rastgele seçildiği için sonuç doğrudur", "500 kişilik örneklem hep çok küçüktür"],
      a: 0,
      why: "Seçilen 500 kişinin yalnızca 140'ı (%28) yanıt verdi; yanıt verenler yanıtlamayanlardan farklıysa sonuç eğilir: *nonresponse*. C en çekici yanlış şık: rastgele seçim yanlılığı ancak yanıtlar da alınabilirse önler." },
    { q: "Bir araştırmacı yanlı bir yöntemle 200 kişilik örneklem alıyor, sonra aynı yöntemle örneklemi 20 000 kişiye çıkarıyor. Hangisi olur?",
      opts: ["Yanlılık ortadan kalkar", "Yanlılık iki katına çıkar", "Yanlılık sürer; yalnızca örneklemler arası şans farkı küçülür", "Yöntem otomatik olarak rastgele hale gelir"],
      a: 2,
      why: "Örneklem büyüklüğü şans değişkenliğini azaltır, sistemli hatayı azaltmaz. A en çekici yanlış şık: büyük örneklem yanlılığı silmez, yalnızca yanlış değere daha kesin ulaştırır." },
    { q: "Aynı okulda, 200'er kişilik iki ayrı rastgele örneklemle okul forması konusu iki farklı ifadeyle soruluyor. Sonuçlar tabloda. Fark için en olası açıklama hangisidir?",
      fig: { type: "table", caption: "Aynı population, iki rastgele örneklem", head: ["Soru ifadesi", "\"Evet\" (%)"], rows: [["Öğrencilerin kendini ifade özgürlüğü için forma zorunluluğu kaldırılmalı mı?", "71"], ["Formanın eşitliği ve düzeni sağladığı düşünülürse zorunluluk kaldırılmalı mı?", "38"]] },
      opts: ["*Undercoverage*: iki liste farklıydı", "*Response bias*: ifade yönlendirici ve yanıtları farklı yönlere itiyor", "*Voluntary response bias*: katılımcılar kendileri seçildi", "Şans: 200 kişi çok az olduğundan fark yok sayılmalı"],
      a: 1,
      why: "İki örnek de rastgele ve aynı population'dan; fark soru ifadesinden geliyor: *response bias*. D en çekici yanlış şık: 71 ile 38 arasındaki 33 puanlık fark, şansla açıklanamayacak kadar büyük." }
  ]
};
