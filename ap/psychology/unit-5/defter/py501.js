/* Kitpath not defteri · py501 · 5.1 Sağlık Psikolojisine Giriş
   Kaynak: College Board CED, Topic 5.1 (5.1.A–D). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py501",
  amac: "Bu konu sağlık psikolojisini (*health psychology*) tanıtıyor: zihin ve davranışların beden sağlığını nasıl etkilediğini. Stresi, stres türlerini, genel uyum sendromunu (*GAS*), stres tepkilerini ve başa çıkma yollarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Sağlık psikolojisi nedir?",
      kisa: "Sağlık psikolojisi, davranış ve zihnin beden sağlığına etkisini inceler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🩺", terim: "Health psychology", tr: "sağlık psikolojisi", tanim: "Fiziksel sağlık ve iyi oluşun davranış ve zihinsel süreçlerle nasıl ilişkili olduğunu inceleyen alan.", ornek: "Uykusuzluğun, stresin ya da spor alışkanlığının sağlığa etkisi." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "😰", baslik: "Stres", metin: "Hastalığa yatkınlığı nasıl artırır?" },
            { ikon: "🏃", baslik: "Sağlık davranışları", metin: "Uyku, beslenme, hareket gibi alışkanlıklar." },
            { ikon: "🛡️", baslik: "Başa çıkma", metin: "İnsanlar stresle nasıl baş eder?" }
          ] }
      ]
    },
    {
      baslik: "Stres bedende iz bırakır",
      kisa: "Uzun süren stres, hastalığa yatkınlığı artırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚡", terim: "Stressor", tr: "stres kaynağı", tanim: "Stres yaratan olay ya da koşul.", ornek: "Yaklaşan final sınavı." },
            { ikon: "💥", terim: "Stress", tr: "stres", tanim: "Bir stres kaynağına verilen bedensel ve zihinsel tepki. Hastalıklara ve rahatsızlıklara yatkınlığı artırır.", ornek: "Sınav öncesi kalbin hızlı atması." }
          ] },
        { tip: "harita", merkez: "Uzun süren stresin bedensel izleri", dallar: [
            { baslik: "Hipertansiyon", alt: "*hypertension*: yüksek tansiyon" },
            { baslik: "Baş ağrıları", alt: "*headaches*" },
            { baslik: "Bağışıklık baskılanması", alt: "*immune suppression*: hastalığa karşı savunma zayıflar" }
          ] }
      ]
    },
    {
      baslik: "Stres kaynakları: türleri",
      kisa: "Stres motive edici ya da yıpratıcı olabilir; küçük sıkıntılar da birikir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🚀", baslik: "*Eustress*", maddeler: ["Motive eden, olumlu stres", "Gelişim ve heyecan getirir"] },
          sag: { ikon: "🥀", baslik: "*Distress*", maddeler: ["Güçsüzleştiren, yıpratıcı stres", "Sıkıntı ve bunalma yaratır"] },
          oyun: [
            { metin: "Okul turnuvasından önce hafif bir heyecan seni antrenmana iter.", cevap: "sol", neden: "Motive edici stres: eustress." },
            { metin: "Aylarca süren aile sorunları seni uykusuz ve bitkin bırakıyor.", cevap: "sag", neden: "Güçsüzleştiren stres: distress." },
            { metin: "Sunum günü gelen heyecan seni daha iyi hazırlanmaya yöneltti.", cevap: "sol", neden: "Performansı destekliyor: eustress." },
            { metin: "Yoğun iş yükü yüzünden her gün gergin ve bunalmış hissediyorsun.", cevap: "sag", neden: "Yıpratıcı: distress." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💔", terim: "Traumatic stressor", tr: "travmatik stres kaynağı", tanim: "Kişiye derin tehdit ya da yıkım yaşatan büyük bir olay.", ornek: "Ciddi bir kaza ya da doğal afet." },
            { ikon: "🌧️", terim: "Daily hassles", tr: "günlük sıkıntılar", tanim: "Küçük ama sürekli sıkıntılar; zamanla birikip yorar.", ornek: "Her gün kalabalık otobüs, geç kalmak, kayıp ödev." },
            { ikon: "🧒", terim: "Adverse childhood experiences (ACEs)", tr: "olumsuz çocukluk deneyimleri", tanim: "Çocuklukta yaşanan, yaşam boyu stres kaynağı olabilen zorlayıcı olaylar (ör. ihmal, istismar).", ornek: "Aile içinde çocuğun uzun süre güvende hissetmemesi." }
          ] },
        { tip: "tuzak", metin: "Stres kaynakları ya büyük ya küçük diye düşünülmez.", yanlis: "Yalnızca büyük olaylar (travma) sağlığı etkiler; günlük sıkıntılar önemsizdir.", dogru: "==Küçük günlük sıkıntılar da birikerek== bedeni yıpratabilir." }
      ]
    },
    {
      baslik: "Genel uyum sendromu (*GAS*)",
      kisa: "Stres üç evrede ilerler: alarm, direnç, tükenme.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚨", terim: "Alarm reaction", tr: "alarm tepkisi", tanim: "Stres kaynağıyla karşılaşınca ortaya çıkan ilk tepki; savaş-kaç-donakal tepkisiyle bedeni harekete geçirir.", ornek: "Ani bir gürültüde kalp çarpar." },
            { ikon: "🛡️", terim: "Resistance phase", tr: "direnç evresi", tanim: "Bedenin stresle yüzleşip baş etmeye çalıştığı evre.", ornek: "Final haftası boyunca uykusuz da olsa çalışmak." },
            { ikon: "🪫", terim: "Exhaustion phase", tr: "tükenme evresi", tanim: "Stres sürdüğü ve kaynaklar tükendiği için bedenin dayanıksızlaştığı evre. Hastalığa en açık dönemdir.", ornek: "Haftalarca süren yoğunluktan sonra sürekli hasta düşmek." }
          ] },
        { tip: "grafik", baslik: "Stres karşısında bedenin direnci", xlabel: "Zaman", ylabel: "Dayanıklılık", xmax: 10, ymax: 10,
          ogeler: [
            { id: "n", tip: "cizgi", renk: 3, kesik: true, from: [0, 5], to: [10, 5] },
            { id: "a", tip: "egri", renk: 2, noktalar: [[0, 5], [0.5, 3.4], [1.2, 6], [2, 7.3]], gizli: true },
            { id: "r", tip: "egri", renk: 0, noktalar: [[2, 7.3], [3.3, 7.5], [4.7, 7.2], [6, 6.6]], gizli: true },
            { id: "e", tip: "egri", renk: 1, noktalar: [[6, 6.6], [7, 4.8], [8, 2.9], [9, 1.8]], gizli: true },
            { id: "ya", tip: "yazi", x: 1.2, y: 8.7, metin: "alarm", gizli: true },
            { id: "yr", tip: "yazi", x: 4, y: 8.8, metin: "direnç", gizli: true },
            { id: "ye", tip: "yazi", x: 7.3, y: 0.7, metin: "en çok hastalık riski", gizli: true }
          ],
          durumlar: [
            { metin: "Normal düzeyde dayanıklılık: kesikli çizgi." },
            { metin: "**Alarm**: stres karşısında önce şok (düşüş), sonra bedenin harekete geçmesi (yükseliş).", goster: ["a", "ya"] },
            { metin: "**Direnç**: beden stresle baş eder; dayanıklılık normalin üstünde kalır.", goster: ["r", "yr"] },
            { metin: "**Tükenme**: stres sürerse kaynaklar tükenir; dayanıklılık düşer ve ==hastalığa en yatkın dönem== başlar.", goster: ["e", "ye"] }
          ] },
        { tip: "tuzak", metin: "Hangi evrede hastalığın en olası olduğunu sınav sık sorar.", yanlis: "Hastalığa en yatkın dönem alarm ya da direnç evresidir.", dogru: "==Tükenme evresinde== kaynaklar bittiği için hastalığa yatkınlık en yüksektir." }
      ]
    },
    {
      baslik: "Stres tepkileri: savaş-kaç-donakal ve ilgilen-arkadaş ol",
      kisa: "Bazı kişiler stresi başkalarıyla bağ kurarak karşılar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏃", terim: "Fight-flight-freeze response", tr: "savaş-kaç-donakal tepkisi", tanim: "Stres karşısında saldırmak, kaçmak ya da olduğu yerde donmak: alarm evresinin tepkisi.", ornek: "Köpek havlayınca geri çekilmek ya da kalakalmak." },
            { ikon: "🤗", terim: "Tend-and-befriend theory", tr: "ilgilen ve arkadaş ol kuramı", tanim: "Bazı insanlar stresi kendi ve başkalarının ihtiyaçlarına ilgi göstererek, başkalarıyla bağ kurarak karşılar. Bu eğilimin daha çok kadınlarda görüldüğü öne sürülür.", ornek: "Zor bir haftada arkadaşlarını toplayıp birbirine destek olmak." }
          ] },
        { tip: "ikili", sol: { ikon: "🏃", baslik: "Savaş-kaç-donakal", maddeler: ["Tehdide karşı kendini koruma", "Saldır, kaç ya da don"] },
          sag: { ikon: "🤗", baslik: "İlgilen ve arkadaş ol", maddeler: ["Bakım verme ve destek aramak", "Sosyal bağ kurmak"] },
          oyun: [
            { metin: "Sert bir tartışmada odadan çıkıp gitti.", cevap: "sol", neden: "Tehdit karşısında kaçmak." },
            { metin: "Zor bir sınav haftasında sınıf arkadaşlarıyla birlikte çalışma grubu kurdu.", cevap: "sag", neden: "Başkalarıyla bağ kurarak karşılıyor." },
            { metin: "Saldırgan bir köpeği görünce yerinde donakaldı.", cevap: "sol", neden: "Donakalma tepkisi." },
            { metin: "Stresli günlerinde küçük kardeşine bakıp arkadaşlarıyla vakit geçirdi.", cevap: "sag", neden: "Bakım verme ve bağ kurma." }
          ] }
      ]
    },
    {
      baslik: "Başa çıkma: sorun odaklı ve duygu odaklı",
      kisa: "Sorun odaklı başa çıkma sorunu çözer; duygu odaklı duyguyu yönetir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔧", baslik: "*Problem-focused coping*", maddeler: ["Stresi çözülecek bir sorun olarak görür", "Çözüm bulunana dek çözüm üretir"] },
          sag: { ikon: "🫧", baslik: "*Emotion-focused coping*", maddeler: ["Stresin yarattığı duyguları yönetir", "Derin nefes, meditasyon, ilaç"] },
          oyun: [
            { metin: "Sınav stresini azaltmak için çalışma planı yapıp zayıf konuları çalıştı.", cevap: "sol", neden: "Sorunu çözmeye yönelik: sorun odaklı." },
            { metin: "Sınav öncesi kaygısını yatıştırmak için derin nefes aldı.", cevap: "sag", neden: "Duyguyu yönetiyor: duygu odaklı." },
            { metin: "Sınav sonrası meditasyon yaparak sakinleşti.", cevap: "sag", neden: "Duygusal tepkiyi yönetiyor: duygu odaklı." },
            { metin: "Notlar kötüydü; hocadan randevu alıp neyi yanlış yaptığını sordu.", cevap: "sol", neden: "Sorunun kaynağına yönelik adım: sorun odaklı." }
          ] },
        { tip: "ornek", baslik: "İki arkadaş, tek final", durum: "Final haftasında Ece çalışma çizelgesi yapıp her gün iki konu çalışıyor. Cem ise sürekli gerildiği için akşamları 10 dakika derin nefes egzersizi yapıyor.",
          adimlar: ["Ece sorunu (çok konu, az zaman) çözmeye odaklanıyor.", "Cem ise stresin yarattığı gerginliği azaltmaya odaklanıyor.", "İkisinin de yöntemi başa çıkmadır; yöntemler farklı."],
          sonuc: "Ece: ==*problem-focused*==. Cem: ==*emotion-focused*==. İkisi bir arada da kullanılabilir." },
        { tip: "tuzak", metin: "İlaç kullanımı bile bir duygu odaklı başa çıkma stratejisi olabilir.", yanlis: "Meditasyon ve derin nefes problem-focused, ders çalışmak emotion-focused'dır.", dogru: "Derin nefes, meditasyon, duygusal tepkileri azaltan ilaç = ==*emotion-focused*==. Sorunun kendisini çözmek = ==*problem-focused*==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Health psychology* davranış ve zihnin beden sağlığına etkisini inceler.",
            "Stres, hastalık yatkınlığını artırır: hipertansiyon, baş ağrısı, bağışıklık baskılanması.",
            "*Eustress* motive eder, *distress* yıpratır. Travma, günlük sıkıntılar ve *ACEs* stres kaynağıdır.",
            "*GAS*: alarm → direnç → tükenme; tükenmede hastalık riski en yüksektir.",
            "Alarm evresinde savaş-kaç-donakal tepkisi görülür.",
            "*Tend-and-befriend*: stresi bakım verip bağ kurarak karşılamak; daha çok kadınlarda gözlendiği öne sürülür.",
            "*Problem-focused coping* sorunu çözer; *emotion-focused coping* duyguyu yönetir (derin nefes, meditasyon, ilaç)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Final haftasında haftalarca uykusuz ve gergin kalan Ayşe, bu dönemde sık sık soğuk algınlığı geçiriyor. Bu durum stresin hangi bedensel etkisiyle en uyumludur?",
      opts: ["Hipertansiyonun azalması", "Bağışıklık baskılanması", "*Eustress*'in artması", "Savaş-kaç-donakal tepkisinin kalıcı olması"],
      a: 1,
      why: "Uzun süren stres bağışıklığı baskılayarak hastalığa yatkınlığı artırır. En çekici yanlış şık D: savaş-kaç-donakal tepkisi alarm evresindeki kısa süreli bir tepkidir; sık hastalığı doğrudan açıklayan bağışıklık baskılanmasıdır." },
    { q: "Yaklaşan okul turnuvasından önce Mert hafif bir heyecan duyuyor ve bu onu daha çok antrenman yapmaya itiyor. Mert'in yaşadığı stres türü hangisidir?",
      opts: ["*Distress*", "*Daily hassles*", "*Adverse childhood experiences*", "*Eustress*"],
      a: 3,
      why: "Motive eden, performansı destekleyen stres *eustress*'tir. En çekici yanlış şık A: *distress* yıpratıcı stresi anlatır; burada heyecan Mert'i güçlendiriyor." },
    { q: "Bir öğrencinin yoğun sınav dönemindeki durumu tabloda not edilmiştir. Hafta 12'deki durum, genel uyum sendromunun hangi evresini en iyi örnekler?",
      fig: { type: "table", caption: "Gözlem notları", head: ["Hafta", "Durum"], rows: [["1", "Kalp çarpıntısı, terleme, uyuyamama"], ["5", "Düzenli çalışıyor, yorgun ama başa çıkıyor"], ["12", "Bitkin, sürekli hasta, hiçbir şeye gücü yok"]] },
      opts: ["Alarm tepkisi", "Direnç evresi", "Tükenme evresi", "*Eustress* evresi"],
      a: 2,
      why: "Haftalarca süren stres kaynakları tüketmiş; bitkinlik ve sık hastalık tükenme evresidir. En çekici yanlış şık B: direnç evresinde kişi hâlâ stresle başa çıkabilir; Hafta 5 buna uyar." },
    { q: "Elif matematik sınavı stresini, çalışma programı hazırlayıp zayıf konularına çalışarak azaltıyor. Cem ise aynı sınav stresini derin nefes ve meditasyonla yatıştırıyor. Bu iki öğrencinin başa çıkma biçimleri sırasıyla nedir?",
      opts: ["Elif: *problem-focused*; Cem: *emotion-focused*", "Elif: *emotion-focused*; Cem: *problem-focused*", "İkisi de *problem-focused*", "İkisi de *emotion-focused*"],
      a: 0,
      why: "Elif sorunu (konu eksiği) çözüyor: sorun odaklı. Cem stresin yarattığı duyguyu yönetiyor: duygu odaklı. En çekici yanlış şık B: tersi; çalışma programı sorun odaklıdır." },
    { q: "Yoğun bir dönemde Naz, küçük kardeşine ders çalışmasında yardım ediyor ve arkadaşlarıyla birlikte çalışmak için bir grup kuruyor. Naz'ın stres tepkisi en iyi hangi kuramla açıklanır?",
      opts: ["*Fight-flight-freeze response*", "*Tend-and-befriend theory*", "*General adaptation syndrome*", "*Emotion-focused coping*"],
      a: 1,
      why: "Başkalarına bakım vermek ve onlarla bağ kurmak *tend-and-befriend* tepkisidir. En çekici yanlış şık A: savaş-kaç-donakal tehdide karşı saldırma, kaçma ya da donma tepkisidir; burada bağ kurma var." }
  ]
};
