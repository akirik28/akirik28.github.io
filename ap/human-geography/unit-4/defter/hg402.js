/* Kitora not defteri · hg402 · 4.2 Siyasi Süreçler
   Kaynak: AP HuG CED Topic 4.2 (PSO-4.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg402",
  amac: "Bu konu bugünkü siyasi haritayı şekillendiren süreçleri anlatıyor: *sovereignty*, *self-determination*, *colonialism*, *imperialism*, bağımsızlık hareketleri ve *devolution*. Sınırların nasıl çizildiğini ve neden değiştiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "*Sovereignty*: devletin son söz hakkı",
      kisa: "Egemenlik, devletin kendi toprağındaki en yüksek karar yetkisidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏠", terim: "Internal sovereignty", tr: "iç egemenlik", tanim: "Devletin kendi toprağında yasa koyma ve uygulama yetkisi. İçeride en yüksek karar mercii hükümettir.", ornek: "Vergi kanununu Türkiye Büyük Millet Meclisi çıkarır." },
            { ikon: "🛡️", terim: "External sovereignty", tr: "dış egemenlik", tanim: "Dışarıya karşı bağımsızlık: başka bir devlet ona ne yapacağını emredemez ve öteki devletler onu tanır.", ornek: "Bir komşu, Türkiye'nin hangi yasayı çıkaracağına karar veremez." }
          ] },
        { tip: "not", metin: "Modern devletler arası düzen genellikle 1648 Vestfalya Barışı'na dayandırılır: her devlet kendi sınırları içinde egemendir. Egemenlik mutlak değildir; Konu 4.9'da göreceğimiz gibi bazı güçler onu sınırlayabilir." }
      ]
    },
    {
      baslik: "Ulus-devletler ve *self-determination*",
      kisa: "Halkların kendi geleceğini belirleme fikri ulus-devletlerin yayılmasını hızlandırdı.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗳️", terim: "Self-determination", tr: "kendi kaderini tayin hakkı", tanim: "Bir halkın siyasi geleceğini (bağımsız devlet kurmak, özerklik gibi) kendisinin belirleme isteği ve hakkı.", ornek: "Birinci Dünya Savaşı'ndan sonra imparatorluklar dağıldı; yerlerinde yeni devletler, Türkiye Cumhuriyeti (1923) de dahil, kuruldu." }
          ] },
        { tip: "not", metin: "Ulus-devlet fikri 19. yüzyıl Avrupa'sında güçlendi: \"bir halk, bir devlet.\" Bu fikir ile *self-determination* birleşince birçok yeni devlet ortaya çıktı. Bugünkü haritada ulus-devlet, siyasi düzenin ana modelidir." },
        { tip: "tuzak", metin: "*Self-determination* hakkı bir ilkedir; her zaman bağımsız devletle sonuçlanmaz.", yanlis: "Kendi kaderini tayin hakkı olan her halk bağımsız bir devlet kurar.", dogru: "Bu hak bağımsızlık, özerklik ya da federal bir yapı biçiminde kullanılabilir. Hangisinin olacağı sınırlara, güç dengesine ve öteki devletlerin tutumuna bağlıdır." }
      ]
    },
    {
      baslik: "*Colonialism* ve *imperialism*",
      kisa: "Kolonyalizm bölgeyi doğrudan yönetmektir; emperyalizm gücü başka halklara yaymaktır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🚢", baslik: "*Colonialism* (kolonyalizm)", maddeler: ["Bir devletin başka bir bölgeye yerleşip onu doğrudan yönetmesi", "Sonuç: sömürge (*colony*)"] },
          sag: { ikon: "🌐", baslik: "*Imperialism* (emperyalizm)", maddeler: ["Güçlü bir devletin etkisini başka devlet ve halklara yayması", "Askerî, siyasi ya da ekonomik baskıyla olabilir; yerleşim şart değildir"] },
          oyun: [
            { metin: "Bir Avrupa devleti vatandaşlarını Afrika'daki bir bölgeye yerleştirip yönetimi kendi memurlarıyla yürütüyor.", cevap: "sol", neden: "Yerleşim ve doğrudan yönetim: *colonialism*." },
            { metin: "Güçlü bir ülke komşusuna toprağını almadan ağır ticaret şartları ve askerî baskı uyguluyor.", cevap: "sag", neden: "Toprak ele geçmedi ama etki yayılıyor: *imperialism*." },
            { metin: "Bir ada ülkesi koloni olarak bir imparatorluğa bağlanıyor ve vergiyi merkeze ödüyor.", cevap: "sol", neden: "Doğrudan yönetilen sömürge: *colonialism*." },
            { metin: "Bir devlet, başka bir devletin dış politikasını siyasi baskıyla yönlendiriyor.", cevap: "sag", neden: "Dolaylı güç: *imperialism*." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💰", baslik: "*Gold*", metin: "Hammadde, ticaret yolu ve yeni pazar." },
            { ikon: "⛪", baslik: "*God*", metin: "Dinin yayılması." },
            { ikon: "🏆", baslik: "*Glory*", metin: "Güç ve saygınlık; rakip devletlere üstünlük." }
          ] },
        { tip: "tuzak", metin: "İkisi birbirine çok yakın ama aynı değil.", yanlis: "*Colonialism* ile *imperialism* aynı şeydir.", dogru: "*Colonialism* emperyalizmin bir yoludur: yerleşip doğrudan yönetmek. *Imperialism* daha geniştir; dolaylı ekonomik ya da siyasi baskıyı da kapsar." }
      ]
    },
    {
      baslik: "Sömürge sınırları ve bağımsızlık hareketleri",
      kisa: "Sömürge güçleri sınırları kendi çıkarına çizdi; bağımsızlıktan sonra çoğu korundu.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "1884–85", baslik: "Berlin Konferansı", metin: "Avrupa devletleri Afrika'yı kendi aralarında bölüşme kuralları koydu; sınırları yerel halklara sormadan çizdi." },
            { tarih: "1923", baslik: "Türkiye Cumhuriyeti", metin: "Osmanlı İmparatorluğu'nun dağılmasından sonra, aralarında Türkiye'nin de olduğu yeni devletler kuruldu." },
            { tarih: "1947", baslik: "Hindistan ve Pakistan", metin: "İngiliz yönetimi sona erdi; ülke iki bağımsız devlete bölündü." },
            { tarih: "1960", baslik: "Afrika'da bağımsızlıklar", metin: "Tek yılda 17 Afrika ülkesi bağımsızlığını kazandı." },
            { tarih: "1991", baslik: "SSCB'nin dağılması", metin: "Sovyetler Birliği 15 bağımsız devlete ayrıldı." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "✊", terim: "Independence movement", tr: "bağımsızlık hareketi", tanim: "Bir sömürgenin ya da bölgenin yabancı yönetimden kurtulup kendi devletini kurmak için yürüttüğü siyasi mücadele.", ornek: "20. yüzyılda Asya ve Afrika'da çok sayıda sömürge bağımsızlığını kazandı." }
          ] },
        { tip: "not", metin: "Yeni devletlerin çoğu, sömürgeden kalma sınırları korudu. Afrika Birliği'nin öncülü olan Afrika Birliği Örgütü (1964) de devletlere bağımsızlıktaki sınırlarına saygı çağrısı yaptı. Bu yüzden bugünkü sınırların birçoğu sömürge dönemine gider." }
      ]
    },
    {
      baslik: "*Devolution* ve devlet sayısındaki artış",
      kisa: "Bağımsızlıklar ve parçalanmalar, dünyadaki devlet sayısını hızla artırdı.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Devolution", tr: "yetki devri / parçalanma", tanim: "Yetkinin merkezi hükümetten bölgelere devredilmesi; uç durumda devletin bölünmesi. Ulusal çizgilerde yaşanan devolution sınırları değiştirmiştir.", ornek: "İskoçya'nın 1999'da kendi parlamentosunu kurması." }
          ] },
        { tip: "grafik", baslik: "Birleşmiş Milletler üye sayısı", xlabel: "Yıl", ylabel: "BM üyesi devlet", xmax: 8, ymax: 10,
          xticks: [{ v: 1, label: "1950" }, { v: 3, label: "1970" }, { v: 5, label: "1990" }, { v: 7, label: "2010" }],
          yticks: [{ v: 2.5, label: "50" }, { v: 5, label: "100" }, { v: 7.5, label: "150" }, { v: 10, label: "200" }],
          ogeler: [
            { id: "p0", tip: "nokta", x: 0.5, y: 2.55, etiket: "1945: 51" },
            { id: "s1", tip: "cizgi", from: [0.5, 2.55], to: [2.0, 4.95], gizli: true },
            { id: "p1", tip: "nokta", x: 2.0, y: 4.95, etiket: "1960: 99", gizli: true },
            { id: "s2", tip: "cizgi", from: [2.0, 4.95], to: [4.0, 7.7], gizli: true },
            { id: "p2", tip: "nokta", x: 4.0, y: 7.7, etiket: "1980: 154", gizli: true },
            { id: "s3", tip: "cizgi", from: [4.0, 7.7], to: [5.0, 7.95], gizli: true },
            { id: "p3", tip: "nokta", x: 5.0, y: 7.95, etiket: "1990: 159", gizli: true },
            { id: "s4", tip: "cizgi", from: [5.0, 7.95], to: [6.0, 9.45], gizli: true },
            { id: "p4", tip: "nokta", x: 6.0, y: 9.45, etiket: "2000: 189", gizli: true },
            { id: "s5", tip: "cizgi", from: [6.0, 9.45], to: [7.1, 9.65], gizli: true },
            { id: "p5", tip: "nokta", x: 7.1, y: 9.65, etiket: "2011: 193", gizli: true }
          ],
          durumlar: [
            { metin: "1945'te Birleşmiş Milletler 51 üyeyle kuruldu. Haritada devlet sayısı azdı; birçok bölge hâlâ sömürgeydi." },
            { metin: "1945–1960: sömürgelerin bağımsızlığı. Sayı 99'a çıktı; bu sıçramanın arkasında ==*decolonization*== var.", goster: ["s1", "p1"] },
            { metin: "1960–1980: Afrika ve Asya'da bağımsızlıklar sürdü; sayı 154'e ulaştı.", goster: ["s2", "p2"] },
            { metin: "1990–2000: Sovyetler Birliği ve Yugoslavya parçalandı (==*devolution*==); sayı 159'dan 189'a çıktı.", goster: ["s3", "p3", "s4", "p4"] },
            { metin: "2011'de Güney Sudan katıldı: 193. Bir ülkenin bölünmesi de yeni bir devlet doğurabilir.", goster: ["s5", "p5"] }
          ] },
        { tip: "not", metin: "BM üyeliği devlet sayısının kabaca göstergesidir. Gözlemci statüsündeki ve tanınması tartışmalı yerler üye sayısına dahil değildir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Sovereignty*: devletin kendi toprağında en yüksek karar yetkisi; hem içeride (*internal*) hem dışarıya karşı (*external*) geçerlidir.",
            "*Self-determination*: halkın siyasi geleceğini kendisinin belirleme hakkı; bağımsızlık, özerklik ya da federasyonla sonuçlanabilir.",
            "*Colonialism* = yerleşip doğrudan yönetmek. *Imperialism* = etkiyi başka halklara yaymak; dolaylı yollar da dahildir.",
            "Sömürge motivasyonları: *gold*, *god*, *glory*.",
            "Berlin Konferansı (1884–85): Avrupa devletleri Afrika sınırlarını yerel halklara sormadan çizdi.",
            "Bağımsızlıktan sonra yeni devletlerin çoğu sömürgeden kalma sınırları korudu.",
            "*Devolution* = yetkinin bölgelere devri ya da devletin bölünmesi (Birleşik Krallık, SSCB, Sudan).",
            "Sömürgelerin bağımsızlığı ve parçalanmalar, BM üyesi sayısını 1945'te 51'den 2011'de 193'e çıkardı."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Güçlü bir devlet, komşusunun toprağını ele geçirmeden ağır ticaret şartları ve askerî baskıyla onun siyasi kararlarını yönlendiriyor. Bu durumu en iyi hangi terim anlatır?",
      opts: ["*Colonialism*", "*Imperialism*", "*Devolution*", "*Self-determination*"],
      a: 1,
      why: "Dolaylı ekonomik ve askerî etki yayma: *imperialism*. *Colonialism* yerleşip doğrudan yönetmeyi gerektirir; burada toprak ele geçmediği için en çekici yanlış budur."
    },
    {
      q: "Birinci Dünya Savaşı'ndan sonra birkaç imparatorluk dağıldı ve halklar kendi devletlerini kurma talebini güçlü biçimde dile getirdi. Bu talebi en iyi hangi kavram açıklar?",
      opts: ["*Self-determination*", "*Neocolonialism*", "*Supranationalism*", "*Irredentism*"],
      a: 0,
      why: "Halkın kendi siyasi geleceğini belirleme isteği: *self-determination*. *Irredentism* ise başka bir devletteki aynı halkın topraklarını kendine katma iddiasıdır; burada böyle bir iddia yok."
    },
    {
      q: "Tablo BM üyesi devletlerin sayısını gösteriyor. 1945–1960 arasındaki artışı en iyi hangi süreç açıklar?",
      fig: { type: "table", head: ["Yıl", "BM üyesi devlet"], rows: [["1945", "51"], ["1960", "99"], ["1990", "159"], ["2011", "193"]] },
      opts: ["Devletlerin birleşerek daha büyük devletler kurması", "Sömürgelerin bağımsızlık kazanması", "Supranasyonal örgütlerin devlet sayısını azaltması", "Ulus-devletlerin kendi içlerinde federasyona geçmesi"],
      a: 1,
      why: "1945–1960 arasında Asya ve Afrika'daki sömürgeler bağımsızlaştı; yeni devletler BM'ye üye oldu. Devletler birleşseydi sayı artmaz, azalırdı."
    },
    {
      q: "Afrika haritasında birçok sınır düz çizgidir ve aynı dili konuşan halkları farklı devletlere bölmüştür. Bu sınırların kökenini en iyi hangisi açıklar?",
      opts: ["Bağımsızlıktan sonra halkların oylamayla çizmesi", "Halkların kendi *self-determination* talepleri", "Sömürge güçlerinin 1884–85 Berlin Konferansı'nda kendi çıkarlarına göre bölüşmesi", "Birleşmiş Milletler'in 1945'te çizmesi"],
      a: 2,
      why: "Berlin Konferansı'nda Avrupa devletleri sınırları kendi çıkarlarına göre çizdi ve yerel halklara danışmadı. Bağımsız devletler çoğu zaman bu sınırları miras aldı; halkların kendi çizdiği sınırlar değil bunlar."
    },
    {
      q: "Bir devletin merkezi hükümeti İskoçya gibi bir bölgeye kendi parlamentosunu kurma yetkisi veriyor; devlet bütün olarak kalıyor. Bu süreç hangisidir?",
      opts: ["*Colonialism*", "*Imperialism*", "Egemenliğin tamamen kaybı", "*Devolution*"],
      a: 3,
      why: "Yetkinin merkezden bölgeye devri: *devolution*. Devlet bütün kaldığı için egemenlik kaybı değildir; sömürgecilikle de ilgisi yoktur."
    }
  ]
};
