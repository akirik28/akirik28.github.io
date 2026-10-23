/* Kitpath not defteri · py103 · 1.3 Nöron ve Sinirsel İletim
   Kaynak: AP Psychology CED (2024) Topic 1.3. Blok türleri: /ap/_kit/defter.js başı.
   Not: voltaj grafiğinde y = (mV + 100) / 15 (−70 mV → 2; −55 mV → 3; 0 mV → 6,67; +40 mV → 9,33). */
window.DEFTER = {
  slug: "py103",
  amac: "Bu konu beynin iletişim birimi olan nöronu anlatıyor. Nöronun yapısını, refleks yayını, aksiyon potansiyelinin nasıl ateşlendiğini, nörotransmitterleri, hormonları ve ilaçların bu süreci nasıl değiştirdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Nöron ve glia hücreleri",
      kisa: "Nöron bilgiyi iletir; glia yapı, yalıtım ve atık taşıma sağlar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚡", terim: "Neuron", tr: "nöron", tanim: "Bilgiyi ileten sinir hücresi. Mesajı dendritleriyle alır, hücre gövdesinde toplar, aksonuyla gönderir.", ornek: "Telefona gelen mesajı okuyup parmağını oynatman, nöron zincirlerinin işidir." },
            { ikon: "🧱", terim: "Glial cells", tr: "glia hücreleri", tanim: "Nöronlara yapı, yalıtım, iletişim desteği ve atık taşıma sağlar. Nöronlarla birlikte davranışın yapı taşlarıdır.", ornek: "Aksonu saran yalıtıcı *myelin* kılıfı da glia hücrelerinden oluşur." }
          ] },
        { tip: "adimlar", baslik: "Bir nöronun parçaları, mesajın yolu sırasıyla", adimlar: [
            { baslik: "*Dendrites* (dendritler)", metin: "Önceki nöronlardan gelen mesajları alan dallanmış uzantılar." },
            { baslik: "*Cell body* (soma)", metin: "Gelen sinyalleri toplar; ateşleme olup olmayacağı burada belirlenir." },
            { baslik: "*Axon* (akson)", metin: "Elektriksel sinyali gövdeden uzağa taşıyan uzun kablo. *Myelin sheath* aksonu yalıtır ve iletimi hızlandırır." },
            { baslik: "*Terminal buttons* (uç düğmeler)", metin: "Akson uçları; komşu nöronla aralığa (*synapse*) nörotransmitter salar." }
          ] },
        { tip: "tuzak", metin: "Yön karışıklığı sık çıkar.", yanlis: "Akson mesajı alır, dendrit gönderir.", dogru: "Mesajın yönü ==dendrit → soma → akson → uç düğmeler== şeklindedir. Dendrit alır, akson gönderir." }
      ]
    },
    {
      baslik: "Refleks yayı",
      kisa: "Refleks, cevabı beyne gitmeden omurilikte kısa devre yaptırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔥", terim: "Sensory neuron", tr: "duyu nöronu", tanim: "Isı, dokunma, ağrı gibi bilgiyi duyu organlarından omuriliğe (CNS) taşır.", ornek: "Parmaktaki ısı bilgisinin omuriliğe gitmesi." },
            { ikon: "🔗", terim: "Interneuron", tr: "ara nöron", tanim: "Omurilik ve beyin içinde duyu nöronunu motor nörona bağlar; yalnızca CNS'te bulunur.", ornek: "Omurilikte “sıcak” sinyalini hemen “çek” komutuna bağlayan hücre." },
            { ikon: "💪", terim: "Motor neuron", tr: "motor nöron", tanim: "CNS'den kasa komut taşır ve kasın kasılmasını sağlar.", ornek: "Kol kaslarına “elini çek” komutunun gitmesi." }
          ] },
        { tip: "adimlar", baslik: "Reflex arc: sıcak çaydanlığa dokunmak", adimlar: [
            { baslik: "Duyu nöronu", metin: "Parmaktaki ısı reseptörü, sıcak sinyalini omuriliğe gönderir." },
            { baslik: "Ara nöron", metin: "Omurilikteki ara nöron sinyali hemen motor nörona aktarır; beynin karar vermesi beklenmez." },
            { baslik: "Motor nöron", metin: "Kol kaslarına “çek” komutu gider ve elin geri çekilir." },
            { baslik: "Beyin", metin: "Sinyal beyne de ulaşır; “ah, sıcakmış!” farkındalığı ve acı ondan sonra gelir." }
          ] },
        { tip: "tuzak", metin: "Refleksin kontrolü kimde?", yanlis: "Refleksi beyin başlatır; omurilik yalnızca kablodur.", dogru: "Refleks yayında cevabı ==omurilik== üretir. Beyin olaydan sonra haberdar olur; bu yüzden refleks çok hızlıdır." }
      ]
    },
    {
      baslik: "Aksiyon potansiyeli: ateşleme",
      kisa: "Eşik aşılırsa nöron ya tam ateşler ya hiç ateşlemez.",
      bloklar: [
        { tip: "grafik", baslik: "Bir nöronun zar voltajı (kavramsal)", xlabel: "Zaman", ylabel: "Voltaj (mV)", xmax: 10, ymax: 10,
          yticks: [{ v: 2, label: "−70" }, { v: 3, label: "−55" }, { v: 6.67, label: "0" }, { v: 9.33, label: "+40" }],
          ogeler: [
            { id: "din", tip: "cizgi", renk: 0, kesik: true, from: [0, 2], to: [10, 2], etiket: "", gizli: false },
            { id: "esik", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [10, 3], gizli: true },
            { id: "esikt", tip: "yazi", x: 8.7, y: 3.4, metin: "Eşik −55 mV", gizli: true },
            { id: "dint", tip: "yazi", x: 8.7, y: 1.4, metin: "Dinlenme −70 mV", gizli: true },
            { id: "zayif", tip: "egri", renk: 3, noktalar: [[0.4, 2], [0.8, 2.27], [1.2, 2.53], [1.6, 2.27], [2.0, 2]], gizli: true },
            { id: "zt", tip: "yazi", x: 1.2, y: 3.6, metin: "Eşik altı: ateşleme yok", gizli: true },
            { id: "yuk", tip: "egri", renk: 2, noktalar: [[3.0, 2], [3.3, 2.27], [3.6, 2.6], [3.85, 3]], gizli: true },
            { id: "dep", tip: "egri", renk: 1, noktalar: [[3.85, 3], [4.0, 5.33], [4.2, 8], [4.4, 9.33]], gizli: true },
            { id: "rep", tip: "egri", renk: 3, noktalar: [[4.4, 9.33], [4.7, 6.67], [5.0, 3.33], [5.3, 1.67]], gizli: true },
            { id: "ref", tip: "egri", renk: 0, noktalar: [[5.3, 1.67], [5.8, 1.33], [6.6, 1.47], [7.4, 1.87], [8.0, 2]], gizli: true },
            { id: "dept", tip: "yazi", x: 5.5, y: 9.5, metin: "Depolarizasyon ve tepe", gizli: true },
            { id: "reft", tip: "yazi", x: 6.4, y: 0.6, metin: "Refrakter dönem", gizli: true }
          ],
          durumlar: [
            { metin: "Dinlenme potansiyeli (*resting potential*): nöronun içi dışına göre yaklaşık −70 mV. Nöron ateşlemeye hazır bekler.", goster: ["dint"] },
            { metin: "Zayıf bir uyarı voltajı biraz yükseltir ama ==eşiğe (−55 mV) ulaşamaz==. Ateşleme olmaz, voltaj geri döner.", goster: ["esik", "esikt", "zayif", "zt"] },
            { metin: "Yeterince güçlü bir uyarı voltajı eşiğe (*threshold*) kadar çıkarır.", goster: ["yuk"], gizle: ["zt"] },
            { metin: "Eşik aşılınca ==depolarizasyon==: pozitif iyonlar (sodyum) içeri dolar, içerisi pozitifleşir ve voltaj hızla tepeye çıkar (aksiyon potansiyeli).", goster: ["dep", "dept"] },
            { metin: "Hemen ardından voltaj düşer (potasyum dışarı çıkar), dinlenme düzeyinin biraz altına iner.", goster: ["rep"] },
            { metin: "==Refrakter dönem==: bu sırada nöron hemen yeniden ateşleyemez. Sonra −70 mV'ye dönüp yeni bir mesaja hazır olur.", goster: ["ref", "reft"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔋", terim: "Resting potential", tr: "dinlenme potansiyeli", tanim: "Ateşlemeden önceki durgun hâl; zarın içi dışına göre yaklaşık −70 mV'dir.", ornek: "Start çizgisinde hazır bekleyen koşucu." },
            { ikon: "🚧", terim: "Threshold", tr: "eşik", tanim: "Aksiyon potansiyelini başlatmak için gereken en düşük uyarı düzeyi (yaklaşık −55 mV).", ornek: "Telefonun kilidi hafif dokunuşla açılmaz; yeterince güçlü basman gerekir." },
            { ikon: "📈", terim: "Depolarization", tr: "depolarizasyon", tanim: "Eşikten sonra iyon akışıyla içerinin pozitifleşmesi; aksiyon potansiyelinin yükselen kısmıdır.", ornek: "Kilit açılınca ekranın bir anda tam parlaklıkla yanması." },
            { ikon: "🔘", terim: "All-or-none principle", tr: "hep ya hiç ilkesi", tanim: "Nöron ya tam büyüklükte ateşler ya hiç ateşlemez; uyarı eşiği geçtikten sonra güçlü de olsa zayıf da olsa tepe aynıdır.", ornek: "Havai fişek ya tam patlar ya hiç patlamaz." },
            { ikon: "😮‍💨", terim: "Refractory period", tr: "refrakter dönem", tanim: "Ateşlemeden hemen sonra nöronun kısa süre yeniden ateşleyemediği dönem; sonra dinlenme durumuna döner.", ornek: "Flaşın arka arkaya patlamayıp önce şarj olması." }
          ] },
        { tip: "ikili", sol: { ikon: "🩹", baslik: "*Multiple sclerosis* (MS)", maddeler: ["Bağışıklık sistemi CNS'deki *myelin*'e saldırır", "Aksonlarda iletim yavaşlar ya da kesilir: uyuşma, görme sorunları, kas zayıflığı"] },
          sag: { ikon: "🧲", baslik: "*Myasthenia gravis*", maddeler: ["Bağışıklık sistemi sinir–kas bağlantısında *acetylcholine* reseptörlerini bozar", "Kas sinyali alamaz: çabuk yorulan, güçsüz kaslar"] } },
        { tip: "tuzak", metin: "Uyarı şiddeti aksiyon potansiyelinin büyüklüğünü değiştirmez.", yanlis: "Daha güçlü bir uyarı, daha büyük bir aksiyon potansiyeli oluşturur.", dogru: "Aksiyon potansiyeli hep aynı büyüklüktedir (==all-or-none==). Uyarı şiddeti, nöronun ==daha sık== ateşlemesi ve ==daha çok nöronun== devreye girmesiyle kodlanır." }
      ]
    },
    {
      baslik: "Sinaps ve nörotransmitterler",
      kisa: "Nörotransmitter sinapsa salınır; uyarır ya da engeller, sonra geri alınır.",
      bloklar: [
        { tip: "adimlar", baslik: "Sinapsta mesaj nasıl geçer?", adimlar: [
            { baslik: "Ateşleme", metin: "Aksiyon potansiyeli aksonun uç düğmelerine ulaşır." },
            { baslik: "Salınım", metin: "Keseciklerden (*vesicles*) nörotransmitter, sinaptik aralığa (*synapse*) salınır." },
            { baslik: "Bağlanma", metin: "Nörotransmitter, sonraki nöronun reseptörlerine anahtar–kilit gibi oturur." },
            { baslik: "Etki", metin: "Uyarıcı (*excitatory*) mesaj ateşlemeyi olası kılar; engelleyici (*inhibitory*) mesaj olasılığı azaltır." },
            { baslik: "Geri alım", metin: "Aralıkta kalan nörotransmitter gönderen nöron tarafından geri alınır (*reuptake*) ya da yıkılır; sinyal biter." }
          ] },
        { tip: "tablo", baslik: "AP'de bilmen gereken sekiz nörotransmitter", head: ["Nörotransmitter", "Başlıca iş", "Tipik etki"], rows: [
            ["*Dopamine*", "Ödül, motivasyon, istemli hareket; azlığı Parkinson'da, fazlalığı şizofreniyle ilişkili", "Konuma göre değişir"],
            ["*Serotonin*", "Ruh hali, uyku, iştah; azlığı depresyonla ilişkili", "Konuma göre değişir"],
            ["*Norepinephrine*", "Uyanıklık, uyarılma, alarm tepkisi", "Konuma göre değişir"],
            ["*Glutamate*", "Öğrenme ve bellek; beynin ana uyarıcı mesajcısı", "Uyarıcı"],
            ["*GABA*", "Beynin ana sakinleştirici mesajcısı; aşırı ateşlemeyi frenler", "Engelleyici"],
            ["*Endorphins*", "Doğal ağrı kesici; zevk (koşu sonrası hoşluk)", "Engelleyici"],
            ["*Substance P*", "Ağrı sinyallerini iletir", "Uyarıcı"],
            ["*Acetylcholine*", "Kas kasılması, bellek; azlığı Alzheimer'la ilişkili", "Konuma göre (kasta uyarıcı)"]
          ] },
        { tip: "ikili", sol: { ikon: "🟢", baslik: "*Excitatory* (uyarıcı)", maddeler: ["Sonraki nöronun ateşleme olasılığını artırır", "Örnek: *glutamate*, *substance P*"] },
          sag: { ikon: "🔴", baslik: "*Inhibitory* (engelleyici)", maddeler: ["Sonraki nöronun ateşleme olasılığını azaltır", "Örnek: *GABA*, *endorphins*"] },
          oyun: [
            { metin: "*GABA*, beynin ana sakinleştirici mesajıdır.", cevap: "sag", neden: "Ateşlemeyi frenler: *inhibitory*." },
            { metin: "*Glutamate*, beyindeki ana uyarıcı mesajdır.", cevap: "sol", neden: "Ateşlemeyi kolaylaştırır: *excitatory*." },
            { metin: "*Endorphins* ağrı sinyalini susturur.", cevap: "sag", neden: "Ağrıyı bastırır: *inhibitory*." },
            { metin: "*Substance P* ağrı sinyalini taşır.", cevap: "sol", neden: "Ağrı mesajını ilerletir: *excitatory*." }
          ] },
        { tip: "tuzak", metin: "Nörotransmitterleri tek duyguya indirgeme.", yanlis: "Dopamin “mutluluk molekülü”, serotonin “sakinlik molekülü”dür.", dogru: "Her nörotransmitterin ==birden çok işi== vardır ve etkisi beyinde bulunduğu yere bağlıdır. Ezberi “ana rol” üzerinden yap." }
      ]
    },
    {
      baslik: "İlaçlar sinapsı nasıl değiştirir?",
      kisa: "Agonist taklit eder, antagonist engeller, geri alım engelleyici etkiyi uzatır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🗝️", baslik: "*Agonist*", maddeler: ["Nörotransmitteri taklit eder ya da etkisini artırır", "Ateşlemeyi teşvik eder"] },
          sag: { ikon: "🚫", baslik: "*Antagonist*", maddeler: ["Reseptörü bloke eder; nörotransmitter bağlanamaz", "Ateşlemeyi azaltır"] },
          oyun: [
            { metin: "Morfin gibi opioidler, endorfinlerin reseptörlerine oturup ağrıyı bastırır.", cevap: "sol", neden: "Doğal mesajcıyı taklit eder: *agonist*." },
            { metin: "Nalokson, opioid reseptörlerini kapatıp aşırı dozun etkisini tersine çevirir.", cevap: "sag", neden: "Reseptörü bloke eder: *antagonist*." },
            { metin: "Antipsikotik ilaçlar dopamin reseptörlerini kapatır.", cevap: "sag", neden: "Reseptörü bloke eder: *antagonist*." },
            { metin: "Nikotin, asetilkolin reseptörlerine bağlanıp onun gibi davranır.", cevap: "sol", neden: "Nörotransmitteri taklit eder: *agonist*." }
          ] },
        { tip: "tablo", baslik: "Üç etki biçimi", head: ["Etki", "Sinapsta ne olur?", "Sonuç", "Örnek"], rows: [
            ["*Agonist*", "Reseptöre bağlanır, nörotransmitteri taklit eder", "Ateşleme artar", "Nikotin (*acetylcholine* gibi)"],
            ["*Antagonist*", "Reseptörü kapatır, nörotransmitter bağlanamaz", "Ateşleme azalır", "Antipsikotikler (dopamin reseptörleri)"],
            ["*Reuptake inhibitor*", "Geri alımı engeller; nörotransmitter aralıkta kalır", "Etki uzar", "Kokain (dopamin); SSRI antidepresanlar (serotonin)"]
          ] },
        { tip: "tuzak", metin: "“Antagonist” kelimesi “karşıt” çağrıştırır.", yanlis: "Antagonist, nörotransmitterin tersi bir etki yapar.", dogru: "Antagonist ters etki yapmaz; reseptörü ==bloke eder==. Agonist “taklit eder”, antagonist “kapatır”. Reuptake inhibitor nörotransmitteri aralıkta tutar: sonuç agonist gibi etkiyi artırmaktır ama yol farklıdır." }
      ]
    },
    {
      baslik: "Psikoaktif ilaçlar ve bağımlılık",
      kisa: "İlaçlar sinirsel aktiviteyi artırır, azaltır ya da algıyı bozar; tekrar kullanım tolerans yapar.",
      bloklar: [
        { tip: "tablo", baslik: "Dört ana sınıf", head: ["Sınıf", "Genel etki", "Örnek"], rows: [
            ["*Stimulants* (uyarıcılar)", "Sinirsel aktiviteyi artırır: uyanıklık ve kalp hızı yükselir", "Kafein, kokain"],
            ["*Depressants* (baskılayıcılar)", "Sinirsel aktiviteyi azaltır: yavaşlama, gevşeme, muhakeme zayıflar", "Alkol"],
            ["*Hallucinogens* (halüsinojenler)", "Algıyı ve/veya düşünmeyi çarpıtır", "Esrar (*marijuana*)"],
            ["*Opioids* (opioidler)", "Ağrı kesici gibi etki eder", "Eroin"]
          ], not: "Psikoaktif ilaçların hem psikolojik hem fizyolojik (bedensel) etkileri vardır." },
        { tip: "adimlar", baslik: "Tolerans, bağımlılık, yoksunluk", adimlar: [
            { baslik: "Tolerans (*tolerance*)", metin: "Aynı doz zamanla daha az etki yapar; aynı etki için daha fazlası gerekir." },
            { baslik: "Bağımlılık (*addiction*)", metin: "Zararlarına rağmen kullanım sürer; beynin ödül devresi etkilenir." },
            { baslik: "Yoksunluk (*withdrawal*)", metin: "Madde bırakılınca ya da azaltılınca, maddeye göre değişen rahatsız edici belirtiler ortaya çıkar." }
          ] },
        { tip: "tuzak", metin: "Etkinin dışarıdan nasıl göründüğü ile beyne yaptığı etkiyi karıştırma.", yanlis: "Alkol insanı konuşkan yaptığı için bir uyarıcıdır.", dogru: "Alkol bir ==depressant==tır: önce muhakemeyi ve çekinceyi baskılayarak insanı konuşkan gösterir, ama genel sinirsel aktiviteyi azaltır." }
      ]
    },
    {
      baslik: "Hormonlar",
      kisa: "Hormonlar kanla taşınır; nörotransmitterlere benzer işler görür.",
      bloklar: [
        { tip: "tablo", baslik: "AP'de bilmen gereken beş hormon", head: ["Hormon", "Ne yapar?"], rows: [
            ["*Adrenaline*", "Savaş ya da kaç tepkisi: kalp hızlanır, enerji hazırlanır; sempatik sistemle birlikte çalışır"],
            ["*Leptin*", "Yağ hücrelerinden salınır; tokluk sinyali verir, iştahı azaltır"],
            ["*Ghrelin*", "Mideden salınır; açlık hissini artırır"],
            ["*Melatonin*", "Karanlıkta artar; uyku–uyanıklık ritmini düzenler"],
            ["*Oxytocin*", "Bağlanma ve güven hissi; doğum ve emzirmede de rol oynar"]
          ], not: "Adrenalin ve norepinefrin hem hormon hem nörotransmitter olarak çalışır." },
        { tip: "tuzak", metin: "İki iştah hormonu sık karıştırılır.", yanlis: "Leptin açlık hormonudur.", dogru: "Açlığı artıran ==ghrelin==dir (mide boşalınca artar, “guruldama”); ==leptin== ise tokluk sinyali verir ve iştahı azaltır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Neuron* bilgiyi iletir; *glial cells* yapı, yalıtım, iletişim desteği ve atık taşıma sağlar.",
            "Yön: dendrit alır → soma toplar → akson gönderir (*myelin* hızlandırır) → uç düğmeler nörotransmitter salar.",
            "*Reflex arc*: duyu nöronu → ara nöron → motor nöron; cevap omurilikte üretilir, beyin sonra haberdar olur.",
            "Dinlenme −70 mV; eşik (~−55 mV) aşılırsa *depolarization* ve aksiyon potansiyeli; sonra *refractory period*.",
            "*All-or-none*: aksiyon potansiyeli hep aynı büyüklüktedir; şiddet, ateşleme sıklığıyla kodlanır.",
            "Sinaps: nörotransmitter salınır, reseptöre bağlanır, *excitatory* ya da *inhibitory* etkiler; sonra *reuptake*. MS (*myelin*) ve *myasthenia gravis* (*acetylcholine* reseptörleri) iletimi bozar.",
            "*Agonist* taklit eder, *antagonist* bloke eder, *reuptake inhibitor* etkiyi uzatır.",
            "*Stimulants* aktiviteyi artırır, *depressants* azaltır, *hallucinogens* algıyı çarpıtır, *opioids* ağrıyı keser; tekrar kullanım tolerans, bağımlılık ve yoksunluk doğurabilir.",
            "Hormonlar kanla taşınır: *adrenaline*, *leptin* (tokluk), *ghrelin* (açlık), *melatonin* (uyku), *oxytocin* (bağlanma)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir nöronun eşik değeri −55 mV'dir. Tabloda üç nöron için uyarının voltajı dinlenme düzeyinden (−70 mV) hangi değere çıkardığı verilmiştir. Hangi sonuç doğrudur?",
      fig: { type: "table", caption: "Üç nöronun uyarılması", head: ["Nöron", "Uyarının çıkardığı voltaj"], rows: [["A", "−60 mV"], ["B", "−55 mV"], ["C", "−40 mV"]] },
      opts: ["Yalnızca C ateşler ve en büyük aksiyon potansiyelini üretir", "B ve C ateşler; ikisinin aksiyon potansiyeli aynı büyüklüktedir", "A ateşler ama daha küçük bir aksiyon potansiyeli oluşturur", "Üçü de ateşler; C'nin aksiyon potansiyeli daha uzun sürer"],
      a: 1,
      why: "B eşiğe ulaşır, C onu aşar; ikisi de ateşler ve hep-ya-hiç ilkesi gereği aksiyon potansiyelleri aynı büyüklüktedir. A eşiğin altında kaldığı için hiç ateşlemez. A şıkkı en çekici yanlış: uyarı şiddeti tepe yüksekliğini değiştirmez." },
    { q: "Bir ilaç, serotoninin sinapsta gönderen nöron tarafından geri alınmasını engelliyor. Bu ilacın etkisi hangisidir?",
      opts: ["Serotonin reseptörlerini kapatır; ateşleme azalır", "Serotonin salınımını tamamen durdurur", "Serotonin sinaptik aralıkta daha uzun kalır ve etkisi uzar", "Aksiyon potansiyelinin tepe yüksekliğini artırır"],
      a: 2,
      why: "Geri alımı engellemek (*reuptake inhibition*) nörotransmitterin aralıkta daha uzun kalmasını sağlar. A en çekici yanlış: reseptörü kapatmak antagonistin işidir, geri alım engelleyicinin değil. D de yanlış: aksiyon potansiyeli hep aynı büyüklüktedir." },
    { q: "Bir öğrenci mutfakta ayağına küçük bir cam kırığı batınca farkında olmadan ayağını çekiyor, sonra “ah!” diyor. Omurilikte duyu nöronundan gelen sinyali motor nörona aktaran hücre hangisidir?",
      opts: ["Glia hücresi", "Motor nöron", "Ara nöron (*interneuron*)", "Duyu nöronu"],
      a: 2,
      why: "Refleks yayında omurilikteki ara nöron, duyu nöronunu motor nörona bağlar. D en çekici yanlış: duyu nöronu sinyali omuriliğe getirir ama motor nörona aktaran hücre değildir; B ise kasa komut taşır." },
    { q: "Aşırı doz opioid kullanan bir kişiye, opioid reseptörlerine bağlanıp onları kapatarak etkiyi tersine çeviren bir ilaç veriliyor. Bu ilaç nasıl adlandırılır?",
      opts: ["*Agonist*", "*Reuptake inhibitor*", "*Excitatory* nörotransmitter", "*Antagonist*"],
      a: 3,
      why: "Reseptörü bloke ederek nörotransmitterin ya da ilacın bağlanmasını engelleyen madde antagonisttir. A en çekici yanlış: agonist reseptörü taklit eder ve etkiyi artırır, yani tam tersi." },
    { q: "Bir öğrenci öğle yemeğini atlıyor; derste karnı guruldayarak yoğun bir açlık hissediyor. Bu hissi artıran hormon hangisidir?",
      opts: ["*Ghrelin*", "*Leptin*", "*Oxytocin*", "*Melatonin*"],
      a: 0,
      why: "Mide boşalınca salınan ghrelin açlığı artırır. B en çekici yanlış: leptin yağ hücrelerinden salınır ve tokluk sinyali vererek iştahı azaltır." }
  ]
};
