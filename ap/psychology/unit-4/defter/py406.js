/* Kitora not defteri · py406 · 4.6 Güdülenme
   Kaynak: College Board CED, Topic 4.6 (4.6.A, 4.6.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py406",
  amac: "Bu konu davranışı harekete geçiren güdüleri (*motivation*) anlatıyor. Dürtü azaltma, uyarılma (Yerkes–Dodson), içsel ve dışsal güdüler, çatışmalar, heyecan arayışı ve açlığın biyolojisini öğreneceksin.",
  bolumler: [
    {
      baslik: "Dürtü azaltma kuramı: dengeyi korumak",
      kisa: "İhtiyaç bir dürtü yaratır; davranış dürtüyü azaltıp dengeyi geri getirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Homeostasis", tr: "denge hali", tanim: "Vücudun iç dengesini koruma eğilimi: ısı, su, enerji gibi.", ornek: "Terleyince su kaybı dengeyi bozar." },
            { ikon: "💧", terim: "Drive-reduction theory", tr: "dürtü azaltma kuramı", tanim: "Fizyolojik bir ihtiyaç gerilim (dürtü) yaratır; bu gerilimi azaltan davranışlar dengeyi korur.", ornek: "Susayınca su içip rahatlamak." }
          ] },
        { tip: "adimlar", baslik: "Susuzluk döngüsü", adimlar: [
            { baslik: "İhtiyaç", metin: "Vücudun suyu azalır: fizyolojik ihtiyaç." },
            { baslik: "Dürtü", metin: "Susuzluk hissi: seni harekete geçiren gerilim." },
            { baslik: "Davranış", metin: "Suyu bulup içersin." },
            { baslik: "Azalma", metin: "Dürtü azalır, ==*homeostasis*== yeniden kurulur." }
          ] }
      ]
    },
    {
      baslik: "Uyarılma kuramı ve Yerkes–Dodson yasası",
      kisa: "Performans orta düzeyde uyarılmada en iyidir; zor işte en iyi nokta daha solda.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚡", terim: "Arousal theory", tr: "uyarılma kuramı", tanim: "İnsanlar optimal (en uygun) uyarılma düzeyini arar: sıkılınca uyaran, aşırı gerilince sakinlik ararlar.", ornek: "Sıkılınca müzik açmak, kalabalıkta yorulunca sessiz bir köşeye çekilmek." },
            { ikon: "📈", terim: "Yerkes–Dodson law", tr: "Yerkes–Dodson yasası", tanim: "Performans orta düzeyde uyarılmada en yüksektir. Görev zorsa en iyi nokta daha düşük, kolaysa daha yüksek uyarılmadadır.", ornek: "Zor bir matematik sınavında hafif heyecan yeter; kolay bir koşuda yüksek heyecan işe yarar." }
          ] },
        { tip: "grafik", baslik: "Ters U: uyarılma ve performans", xlabel: "Uyarılma düzeyi", ylabel: "Performans", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "Düşük" }, { v: 5, label: "Orta" }, { v: 9, label: "Yüksek" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, noktalar: [[0, 1.5], [1.7, 3], [3.3, 5.2], [5, 7.6], [6.7, 9.2], [8.3, 6.8], [10, 3]] },
            { id: "pe", tip: "nokta", x: 6.7, y: 9.2, kilavuz: true },
            { id: "ye", tip: "yazi", x: 7.9, y: 9.6, metin: "kolay iş", gizli: true },
            { id: "h", tip: "egri", renk: 2, noktalar: [[0, 1], [1.7, 5.5], [3.3, 8.8], [5, 6.5], [6.7, 3.8], [8.3, 2], [10, 1]], gizli: true },
            { id: "ph", tip: "nokta", x: 3.3, y: 8.8, kilavuz: true, gizli: true },
            { id: "yh", tip: "yazi", x: 2, y: 9.6, metin: "zor iş", gizli: true },
            { id: "yl", tip: "yazi", x: 0.4, y: 3.2, metin: "sıkıntı", hiza: "start", gizli: true },
            { id: "ya", tip: "yazi", x: 9.6, y: 4.5, metin: "panik", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Uyarılma arttıkça performans önce yükselir, orta düzeyde zirve yapar, sonra tekrar düşer: ==ters U==." },
            { metin: "Çok düşük uyarılma sıkıntı ve ilgisizlik; çok yüksek uyarılma panik ve dağınıklık getirir.", goster: ["yl", "ya"] },
            { metin: "İş **zorsa** ya da yeniyse zirve daha solda: hafif heyecan yeter. İş kolayken yüksek heyecan bile işe yarar.", goster: ["h", "ph", "yh", "ye"] }
          ] },
        { tip: "tuzak", metin: "Heyecan arttıkça performansın hep arttığını sanmak yaygın hatadır.", yanlis: "Ne kadar heyecanlıysan o kadar iyi performans gösterirsin.", dogru: "==Orta düzey en iyidir.== Çok yüksek uyarılma performansı düşürür; zor işlerde bunun etkisi daha erken başlar." }
      ]
    },
    {
      baslik: "İçsel ve dışsal güdüler, içgüdü, ait olma",
      kisa: "İçsel güdü keyiften, dışsal güdü ödülden doğar; hayvanlarda içgüdüler vardır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌟", terim: "Self-determination theory", tr: "öz belirleme kuramı", tanim: "İnsanlar içsel (kendi içinden gelen) ya da dışsal (dış ödül, baskı) güdülerle hareket eder. İçsel güdü özerklik, yeterlik ve başkalarıyla bağ ihtiyaçlarına dayanır.", ornek: "Keyif aldığı için gitar çalmak." },
            { ikon: "🏆", terim: "Incentive theory", tr: "teşvik kuramı", tanim: "Dışsal güdünün bir türü olan ödülün davranışı çekmesi.", ornek: "Okul harçlığı karşılığında ödev yapmak." },
            { ikon: "🐝", terim: "Instinct", tr: "içgüdü", tanim: "Belirli uyaranlara verilen doğuştan, kalıplaşmış davranış. Hayvanlarda görülür; insanlarda belirgin içgüdüsel davranış yok gibidir.", ornek: "Kuşun göç etmesi." },
            { ikon: "🤝", terim: "Need to belong", tr: "ait olma ihtiyacı", tanim: "Başkalarıyla sürekli ve olumlu ilişkiler kurma güdüsü; sosyal bağ da insan davranışını yönlendirir.", ornek: "Kulüple aidiyet duygusu yüzünden etkinliklere katılmak." }
          ] },
        { tip: "ikili", sol: { ikon: "🌟", baslik: "*Intrinsic motivation*", maddeler: ["İş kendiliğinden keyif ve anlam verir", "Ödül gerekmez"] },
          sag: { ikon: "🏆", baslik: "*Extrinsic motivation*", maddeler: ["Ödül, not ya da ceza gibi dış etki", "Ödül kalkınca davranış azalabilir"] },
          oyun: [
            { metin: "Piyano çalmak çok hoşuna gittiği için her akşam çalıyor.", cevap: "sol", neden: "Eylem kendiliğinden tatmin ediyor: içsel." },
            { metin: "Notu yüksek tutmak için sadece sınav haftası çalışıyor.", cevap: "sag", neden: "Dış ödül (not) amaç: dışsal." },
            { metin: "Ailesi bilgisayar alacağı için ödevleri yapıyor.", cevap: "sag", neden: "Dış ödül: dışsal (teşvik)." },
            { metin: "Merak ettiği için bir konu hakkında ek kitap okuyor.", cevap: "sol", neden: "Merak içeriden geliyor: içsel." }
          ] }
      ]
    },
    {
      baslik: "Güdü çatışmaları (Lewin)",
      kisa: "Seçenekler çekici ya da itici olabilir; çatışma türü ona göre değişir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "😍😍", terim: "Approach–approach conflict", tr: "yaklaşma–yaklaşma çatışması", tanim: "İki seçenek de çekici, yalnızca birini seçebilirsin.", ornek: "Aynı akşam hem konsere hem maça davet edilmek." },
            { ikon: "😍😖", terim: "Approach–avoidance conflict", tr: "yaklaşma–kaçınma çatışması", tanim: "Tek bir seçeneğin hem çekici hem itici yanı vardır.", ornek: "Harika bir telefon ama çok pahalı." },
            { ikon: "😖😖", terim: "Avoidance–avoidance conflict", tr: "kaçınma–kaçınma çatışması", tanim: "İki seçenek de hoşlanılmaz; birini seçmek zorundasın.", ornek: "Ya sınavdan önce bütün konuyu tekrar edeceksin ya da kötü not alacaksın." }
          ] },
        { tip: "ikili", sol: { ikon: "😍😍", baslik: "Yaklaşma–yaklaşma", maddeler: ["İki iyi seçenek", "Zor ama gerilimi az"] },
          sag: { ikon: "😖😖", baslik: "Kaçınma–kaçınma", maddeler: ["İki kötü seçenek", "Gerilim yüksek"] },
          oyun: [
            { metin: "Hem tiyatroya hem sinemaya gitmek istiyorsun ama ikisine birden gidemiyorsun.", cevap: "sol", neden: "İki çekici seçenek: yaklaşma–yaklaşma." },
            { metin: "Ya dişçiye gidip sancıyı bitireceksin ya da ağrıyla yaşayacaksın.", cevap: "sag", neden: "İkisi de istenmiyor: kaçınma–kaçınma." },
            { metin: "İki üniversite de seni kabul etti ve ikisini de çok istiyorsun.", cevap: "sol", neden: "İki çekici seçenek: yaklaşma–yaklaşma." }
          ] },
        { tip: "tuzak", metin: "Tek bir seçeneğin hem iyi hem kötü yanı olunca çatışma türü değişir.", yanlis: "Tek bir seçeneğin hem iyi hem kötü yanı olması, iki seçenek arasındaki çatışmadır.", dogru: "Çekici ve itici yan ==aynı seçenekte== ise bu *approach–avoidance conflict*'tir." }
      ]
    },
    {
      baslik: "Heyecan arayışı (*sensation seeking*)",
      kisa: "Bazı kişiler çeşitlilik ve yenilik ihtiyacıyla dört biçimde heyecan arar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Experience seeking", tr: "deneyim arayışı", tanim: "Zihin ve duyular yoluyla yeni deneyimler aramak.", ornek: "Yeni bir ülkede yürüyüş, farklı müzikler." },
            { ikon: "🪂", terim: "Thrill and adventure seeking", tr: "heyecan ve macera arayışı", tanim: "Hız, yükseklik gibi fiziksel riskli etkinlikleri aramak.", ornek: "Paraşütle atlamak." },
            { ikon: "🎉", terim: "Disinhibition", tr: "engellenmemişlik", tanim: "Sosyal ortamlarda kısıtlamaları gevşetip kendiliğinden davranmak, eğlence aramak.", ornek: "Kalabalık bir partide en çok ses çıkaran olmak." },
            { ikon: "😴", terim: "Boredom susceptibility", tr: "sıkılganlık", tanim: "Tekrar eden ve değişmeyen durumlardan hoşlanmamak.", ornek: "Aynı rutinden çabuk bunalıp yeni bir şey denemek." }
          ] },
        { tip: "tuzak", metin: "Dört alt tür sınavda karışır; anahtar kelimeye bak.", yanlis: "Paraşütle atlamak *experience seeking*'dir.", dogru: "Fiziksel risk ve hız = ==*thrill and adventure*==. Yeni duyu ve zihin deneyimi = ==*experience seeking*==. Sınırları gevşetme = ==*disinhibition*==. Tekrardan hoşlanmama = ==*boredom susceptibility*==." }
      ]
    },
    {
      baslik: "Açlık: hormonlar ve dış ipuçları",
      kisa: "Ghrelin açlığı, leptin tokluğu bildirir; çevre de yemeyi etkiler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📣", terim: "Ghrelin", tr: "ghrelin", tanim: "Midede salgılanan, açlık hissini artıran hormon; yemekten önce yükselir, yedikten sonra düşer.", ornek: "Öğle saati yaklaşırken midenin guruldaması." },
            { ikon: "🛑", terim: "Leptin", tr: "leptin", tanim: "Yağ hücrelerinden salgılanır ve tokluk hissi verir.", ornek: "Doyduğunu hissetmek." },
            { ikon: "🧠", terim: "Hypothalamus", tr: "hipotalamus", tanim: "Açlık ve tokluk hormonlarını hipofiz bezi aracılığıyla düzenleyen beyin bölgesi.", ornek: "Vücut enerji eksikliğini beyne bildirir." }
          ] },
        { tip: "grafik", baslik: "Öğünler arasında ghrelin dalgası", xlabel: "Gün boyu", ylabel: "Ghrelin düzeyi", xmax: 10, ymax: 10,
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 6], [0.8, 7], [1.5, 2.5], [2.5, 2], [3.7, 5], [4.7, 7.2], [5.5, 2.5], [6.5, 2], [7.7, 5.5], [8.7, 7.5]] },
            { id: "m1", tip: "cizgi", renk: 3, kesik: true, from: [1.2, 0], to: [1.2, 8.6] },
            { id: "m2", tip: "cizgi", renk: 3, kesik: true, from: [5.1, 0], to: [5.1, 8.6] },
            { id: "t1", tip: "yazi", x: 1.2, y: 9.2, metin: "kahvaltı" },
            { id: "t2", tip: "yazi", x: 5.1, y: 9.2, metin: "öğle" },
            { id: "pa", tip: "nokta", x: 4.7, y: 7.2, kilavuz: true, gizli: true },
            { id: "pt", tip: "nokta", x: 6.5, y: 2, kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Ghrelin yemek saatine yaklaşırken yükselir ve yedikten sonra düşer." },
            { metin: "Öğle yemeğinden hemen önce zirvede: ==açlık hissi güçlü==.", goster: ["pa"] },
            { metin: "Yedikten sonra düşük: ==tokluk==. Bu dalgalar günde birkaç kez tekrar eder.", goster: ["pt"] }
          ] },
        { tip: "ikili", sol: { ikon: "📣", baslik: "İçsel sinyaller", maddeler: ["*Ghrelin* ↑ aç, *leptin* ↑ tok", "Hipotalamus düzenler"] },
          sag: { ikon: "🍕", baslik: "Dış ipuçları", maddeler: ["Yiyeceğin görünmesi, günün saati", "Sofra ve sosyal ortamlar"] },
          oyun: [
            { metin: "Midesi guruldadığı için dolaba yöneldi.", cevap: "sol", neden: "İçsel açlık sinyali." },
            { metin: "Yemekten sonra masadaki tatlıyı görünce, doymuş olsa da aldı.", cevap: "sag", neden: "Yiyeceğin görünmesi dış ipucudur." },
            { metin: "Aile sofrasında herkes yediği için o da yemeye başladı.", cevap: "sag", neden: "Sosyal ortam dış ipucudur." },
            { metin: "Yağ hücrelerinden gelen hormon doydum sinyali verdi.", cevap: "sol", neden: "Leptin, içsel tokluk sinyali." }
          ] }
      ]
    },
    {
      baslik: "Hangi kuram neyi açıklar?",
      kisa: "Her güdülenme kuramı davranışın farklı bir yönünü açıklar.",
      bloklar: [
        { tip: "tablo", baslik: "Güdülenme kuramları bir arada", head: ["Kuram", "Temel fikir", "Örnek"], rows: [
            ["*Drive-reduction*", "İhtiyaç dürtü yaratır; davranış dengeyi kurar", "Susayınca su içmek"],
            ["*Arousal*", "Optimal uyarılma aranır (Yerkes–Dodson)", "Sıkılınca hareketlenmek"],
            ["*Self-determination*", "İçsel ve dışsal güdüler", "Keyfinden gitar çalmak"],
            ["*Incentive*", "Ödül çeker", "Harçlık için ödev yapmak"],
            ["*Instinct*", "Doğuştan kalıp davranış (hayvanlarda)", "Kuş göçü"],
            ["Lewin çatışmaları", "Seçeneklerin çekiciliği ve ürkütücülüğü", "Güzel ama pahalı telefon"],
            ["*Sensation seeking*", "Yenilik ve heyecan ihtiyacı", "Paraşüt, yeni yerler"]
          ] },
        { tip: "ikili", sol: { ikon: "🧊", baslik: "*Drive-reduction*", maddeler: ["Gerilimi azaltmak ister", "Hedef: denge"] },
          sag: { ikon: "⚡", baslik: "*Arousal theory*", maddeler: ["Bazen gerilimi artırmak ister", "Hedef: optimal uyarılma"] },
          oyun: [
            { metin: "Acıkınca yemek yemek.", cevap: "sol", neden: "İhtiyaç dürtüsü azalıyor: dürtü azaltma." },
            { metin: "Sıkıldığı için macera filmi izlemek.", cevap: "sag", neden: "Düşük uyarılmayı yükseltiyor: uyarılma kuramı." },
            { metin: "Aşırı sıcakta gölgeye geçip serinlemek.", cevap: "sol", neden: "Vücut dengesini koruyor: dürtü azaltma." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Drive-reduction theory*: ihtiyaç → dürtü → davranış → *homeostasis*.",
            "*Arousal theory*: insanlar optimal uyarılma düzeyini arar.",
            "*Yerkes–Dodson law*: performans orta uyarılmada en iyidir; zor işte zirve daha solda, kolay işte daha sağda.",
            "*Self-determination theory*: içsel ve dışsal güdüler; *incentive theory* ödülün çekmesidir.",
            "Hayvanlarda *instinct* vardır; insanlarda belirgin içgüdüsel davranış gözlenmez.",
            "Lewin: yaklaşma–yaklaşma, yaklaşma–kaçınma, kaçınma–kaçınma çatışmaları.",
            "*Sensation seeking*: deneyim, macera, engellenmemişlik, sıkılganlık.",
            "*Ghrelin* açlığı, *leptin* tokluğu bildirir; hipotalamus düzenler. Yiyeceğin görünmesi ve sofra da yemeyi etkiler.",
            "*Need to belong* ait olma güdüsüdür."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Uzun bir koşudan sonra Ece çok terleyip susuyor ve bir bardak su içerek rahatlıyor. Bu davranış en iyi hangi güdülenme kuramıyla açıklanır?",
      opts: ["*Drive-reduction theory*", "*Incentive theory*", "*Arousal theory*", "*Sensation-seeking theory*"],
      a: 0,
      why: "Vücut dengesinin (*homeostasis*) bozulması dürtü yaratıyor ve su içmek bu dürtüyü azaltıyor. En çekici yanlış şık C: uyarılma kuramı optimal uyarılma düzeyini arayışı vurgular; burada fizyolojik bir ihtiyaç ve dengenin yeniden kurulması var." },
    { q: "Bir araştırmada aynı kişilerin basit ve karmaşık görevlerdeki performansı üç uyarılma düzeyinde ölçülüyor. Veriler tabloda. Yerkes–Dodson yasasıyla uyumlu çıkarım hangisidir?",
      fig: { type: "table", caption: "Performans puanı (10 üzerinden)", head: ["Görev", "Düşük uyarılma", "Orta uyarılma", "Yüksek uyarılma"], rows: [["Basit", "4", "7", "9"], ["Karmaşık", "8", "6", "2"]] },
      opts: ["Uyarılma arttıkça her iki görevde de performans artar", "Uyarılma düzeyi performansı etkilemez", "İki görevde de en iyi performans orta uyarılmada görülür", "Karmaşık görevde en iyi performans daha düşük uyarılmada, basit görevde daha yüksek uyarılmada görülür"],
      a: 3,
      why: "Karmaşık görevde en yüksek puan düşük uyarılmada (8), basit görevde yüksek uyarılmada (9). Yerkes–Dodson yasası da zor işlerde daha düşük uyarılmayı öngörür. En çekici yanlış şık C: yasa 'orta düzey en iyi' der ama görev zorluğuyla zirvenin kaydığını da söyler." },
    { q: "Mert her akşam gitar çalıyor çünkü bundan keyif alıyor. Kardeşi Ali ise ailesi her hafta harçlığını artırdığı için çalıyor. Bu durumda hangisi doğrudur?",
      opts: ["Mert için dışsal, Ali için içsel güdü", "Mert için içsel, Ali için dışsal güdü", "İkisi için de içsel güdü", "İkisi için de dışsal güdü"],
      a: 1,
      why: "Mert'in güdüsü eylemin kendisinden gelen keyif: içsel. Ali ise dış ödül (harçlık) için çalıyor: dışsal (teşvik kuramı). En çekici yanlış şık D: ikisi de aynı etkinliği yapıyor diye güdülerinin aynı sanılır." },
    { q: "Deniz harika bir burs sunan bir üniversiteye kabul ediliyor, ama bu üniversite ailesinden çok uzakta. Deniz hem gitmek hem kalmak arasında kararsız. Deniz hangi çatışmayı yaşıyor?",
      opts: ["Yaklaşma–yaklaşma çatışması", "Kaçınma–kaçınma çatışması", "Yaklaşma–kaçınma çatışması", "Heyecan arayışı çatışması"],
      a: 2,
      why: "Tek seçeneğin (üniversite) hem çekici (burs) hem itici (uzaklık) yanı var: yaklaşma–kaçınma. En çekici yanlış şık A: yaklaşma–yaklaşma iki ayrı çekici seçenek gerektirir; burada seçenek tek." },
    { q: "Barış öğle yemeğine yaklaşırken midesi guruldamaya başlıyor ve yemek düşünüyor. Yemek yedikten sonra bu his kayboluyor. Barış'ın açlığındaki artışta hangi hormonun yükselmesi rol oynar?",
      opts: ["*Leptin*", "*Ghrelin*", "Oksitosin", "Dopamin"],
      a: 1,
      why: "Ghrelin açlık hissini artırır; yemek öncesi yükselir, yedikten sonra düşer. En çekici yanlış şık A: leptin tokluk sinyalidir ve yağ hücrelerinden salgılanır." }
  ]
};
