/* Kitora not defteri · en406 · 4.6 İkna Konuşması
   Okul dersi (10. sınıf English · Unit 4). Hazır konuşma metni vermez; yapı, süre ve kalıp verir. */
window.DEFTER = {
  slug: "en406",
  amac: "5–6 dakikalık ikna konuşmasını (*persuasive speech*) planlamayı öğreneceksin: zaman bütçesi, açılış ve kapanış, slaytların doğru kullanımı, ses ve beden dili, soru-cevap bölümü.",
  bolumler: [
    {
      baslik: "Konuşma bir bakışta",
      kisa: "5–6 dakika, soru-cevap ve notun büyük payı: ciddiye al.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 5, sonek: "–6 dk", etiket: "konuşma süresi" },
            { deger: 60, onek: "%", etiket: "performans notundaki payı" }
          ] },
        { tip: "tablo", baslik: "Essay ile konuşma", head: ["", "Essay", "Konuşma"], rows: [
            ["Kural", "1500–1700 kelime, *I*/*you* yok", "5–6 dk + soru-cevap; PowerPoint okuması değil"],
            ["Kaynak", "MLA metin içi atıf ve *Works Cited*", "Sözlü atıf (*According to …*) ve slaytın altında kısa kaynak"],
            ["Dinleyici", "Okuyucu tekrar okuyabilir", "Dinleyici yalnızca bir kez duyar: açık yapı ve tekrar gerekir"],
            ["Hazırlık", "Taslak ve düzeltme", "Prova ve zamanlama"]
          ], not: "*I*/*you* kuralı essay için yazılmış; konuşmada geçerli olup olmadığını öğretmenine sor. Hazır konuşma metni yazdırma: kendi sözlerinle hazırlan." }
      ]
    },
    {
      baslik: "İskelet ve zaman bütçesi",
      kisa: "Açılış, tez, üç gerekçe, karşı argüman, çağrı.",
      bloklar: [
        { tip: "grafik", baslik: "Örnek zaman bütçesi (5:30)", xlabel: "Dakika", ylabel: "", xmax: 6.5, ymax: 5,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "m5", tip: "cizgi", from: [5, 0], to: [5, 5], kesik: true, renk: 0, gizli: true },
            { id: "m6", tip: "cizgi", from: [6, 0], to: [6, 5], kesik: true, renk: 0, gizli: true },
            { id: "t5", tip: "yazi", x: 4.95, y: 4.6, metin: "5 dk", hiza: "end", gizli: true },
            { id: "t6", tip: "yazi", x: 6.05, y: 4.6, metin: "6 dk", hiza: "start", gizli: true },
            { id: "a1", tip: "alan", renk: 1, noktalar: [[0, 0], [0.5, 0], [0.5, 0], [0, 0]], gizli: true },
            { id: "a2", tip: "alan", renk: 2, noktalar: [[0.5, 0], [1, 0], [1, 0], [0.5, 0]], gizli: true },
            { id: "a3", tip: "alan", renk: 3, noktalar: [[1, 0], [2, 0], [2, 0], [1, 0]], gizli: true },
            { id: "a4", tip: "alan", renk: 1, noktalar: [[2, 0], [3, 0], [3, 0], [2, 0]], gizli: true },
            { id: "a5", tip: "alan", renk: 2, noktalar: [[3, 0], [3.75, 0], [3.75, 0], [3, 0]], gizli: true },
            { id: "a6", tip: "alan", renk: 3, noktalar: [[3.75, 0], [4.75, 0], [4.75, 0], [3.75, 0]], gizli: true },
            { id: "a7", tip: "alan", renk: 1, noktalar: [[4.75, 0], [5.5, 0], [5.5, 0], [4.75, 0]], gizli: true },
            { id: "l1", tip: "yazi", x: 0.25, y: 1.4, metin: "Hook", gizli: true },
            { id: "l2", tip: "yazi", x: 0.75, y: 1.4, metin: "Tez", gizli: true },
            { id: "l3", tip: "yazi", x: 1.5, y: 1.4, metin: "G1", gizli: true },
            { id: "l4", tip: "yazi", x: 2.5, y: 1.4, metin: "G2", gizli: true },
            { id: "l5", tip: "yazi", x: 3.375, y: 1.4, metin: "G3", gizli: true },
            { id: "l6", tip: "yazi", x: 4.25, y: 1.4, metin: "Karşı", gizli: true },
            { id: "l7", tip: "yazi", x: 5.125, y: 1.4, metin: "Çağrı", gizli: true }
          ],
          durumlar: [
            { metin: "Süre sınırı 5–6 dakika. Konuşmayı iki çizgi arasına yerleştir.", goster: ["m5", "m6", "t5", "t6"] },
            { metin: "Açılış (*hook*) 0:30 ve tez ile yol haritası 0:30.", goster: ["a1", "a2", "l1", "l2"], set: {
                a1: { noktalar: [[0, 0], [0.5, 0], [0.5, 3], [0, 3]] }, a2: { noktalar: [[0.5, 0], [1, 0], [1, 3], [0.5, 3]] } } },
            { metin: "Üç gerekçe: 1:00 + 1:00 + 0:45.", goster: ["a3", "a4", "a5", "l3", "l4", "l5"], set: {
                a3: { noktalar: [[1, 0], [2, 0], [2, 3], [1, 3]] }, a4: { noktalar: [[2, 0], [3, 0], [3, 3], [2, 3]] }, a5: { noktalar: [[3, 0], [3.75, 0], [3.75, 3], [3, 3]] } } },
            { metin: "Karşı argüman ve çürütme: 1:00.", goster: ["a6", "l6"], set: { a6: { noktalar: [[3.75, 0], [4.75, 0], [4.75, 3], [3.75, 3]] } } },
            { metin: "Kapanış ve çağrı 0:45. Toplam 5:30: sınırların içinde. Soru-cevap ayrıca.", goster: ["a7", "l7"], set: { a7: { noktalar: [[4.75, 0], [5.5, 0], [5.5, 3], [4.75, 3]] } } }
          ] },
        { tip: "tablo", baslik: "Bölümler ne yapar?", head: ["Bölüm", "≈ Süre", "Amaç", "Kalıp"], rows: [
            ["*Hook*", "0:30", "Dikkat çek", "*Imagine …* / *What if …?*"],
            ["Tez", "0:30", "İddiayı ve yol haritasını söyle", "*Schools should … because …*"],
            ["Gerekçe 1–3", "2:45", "Her biri tek gerekçe + kanıt", "*The first reason is … According to …*"],
            ["Karşı argüman", "1:00", "Kabul et ve çürüt", "*Critics argue …; however …*"],
            ["Çağrı", "0:45", "Tezi hatırlat, eyleme çağır", "*It is time to …*"]
          ] }
      ]
    },
    {
      baslik: "Açılış ve kapanış",
      kisa: "İlk 30 saniye dinleyiciyi yakalar, son 30 saniye hatırlatır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "❓", terim: "Rhetorical question", tr: "retorik soru", tanim: "Cevabı dinleyicinin zihninde veren soru.", ornek: "*What if tomorrow's first class began an hour later?*" },
            { ikon: "📊", terim: "Surprising statistic", tr: "şaşırtıcı veri", tanim: "Kaynaklı tek bir çarpıcı rakam; kaynağını söyle.", ornek: "*According to [source], [figure] …*" },
            { ikon: "📖", terim: "Anecdote", tr: "kısa hikâye", tanim: "10–15 saniyelik gerçek ve kısa bir örnek.", ornek: "*Consider a student who …*" },
            { ikon: "💥", terim: "Bold claim", tr: "cesur iddia", tanim: "Dinleyiciyi düşündüren kısa, net bir cümle.", ornek: "*Sleep is not a luxury.*" }
          ] },
        { tip: "liste", baslik: "Kapanış kalıpları", maddeler: [
            { ikon: "🔁", baslik: "Tezi hatırlat", metin: "*For these reasons, schools should …*" },
            { ikon: "📣", baslik: "Eyleme çağır", metin: "*It is time for [audience] to …*" },
            { ikon: "🔄", baslik: "Açılışa dön", metin: "Başta sorduğun soruya cevap ver; döngü kapanır." }
          ] },
        { tip: "tuzak", metin: "Zayıf giriş ve zayıf bitiş en çok hatırlanan hatalardır.", yanlis: "*Hello, today I will talk about…* ve sonda yalnızca \"That's all\".", dogru: "İlk cümlede dikkat çek, son cümlede tezi ve çağrıyı hatırlat." }
      ]
    },
    {
      baslik: "Slaytlar destek olmalı",
      kisa: "Slayt görsel destektir; konuşma slayttan okunmaz.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🖼️", baslik: "İyi slayt", maddeler: ["Tek fikir, büyük görsel ya da grafik", "Altında kısa kaynak"] },
          sag: { ikon: "📜", baslik: "Kötü slayt", maddeler: ["Çok metin, küçük punto", "Konuşma metnini sesli okumak"] },
          oyun: [
            { metin: "Slayt başına tek görsel ve birkaç kelime.", cevap: "sol", neden: "Dinleyici seni dinler, slaytı değil." },
            { metin: "Bütün konuşma metni slayta yazılmış ve sesli okunuyor.", cevap: "sag", neden: "Kural: PowerPoint okuması değil." },
            { metin: "Veriyi gösteren sade bir grafik ve altında kısa kaynak (Demir 45).", cevap: "sol", neden: "Kanıt görselle desteklenmiş, kaynak belirtilmiş." },
            { metin: "Her slaytta 10 madde ve küçük punto.", cevap: "sag", neden: "Okunmaz; dinleyici dağılır." }
          ] },
        { tip: "liste", baslik: "Slayt ilkeleri", maddeler: [
            { ikon: "1️⃣", baslik: "Slayt başına tek fikir", metin: "Konuşmanın ana noktasıyla eşleşsin." },
            { ikon: "🔤", baslik: "Büyük ve okunur punto", metin: "Arka sıradaki rahat okuyabilmeli." },
            { ikon: "🔗", baslik: "Kaynak belirt", metin: "Görsel ve veri için slayt altında kısa kaynak yaz." },
            { ikon: "👀", baslik: "Dinleyiciye bak", metin: "Ekrana dönüp okuma." }
          ] }
      ]
    },
    {
      baslik: "Ses, beden dili ve prova",
      kisa: "Yavaş, net ve göz teması kuran konuşma ikna eder.",
      bloklar: [
        { tip: "tablo", baslik: "Sunum becerileri", head: ["Beceri", "Yap", "Yapma"], rows: [
            ["Hız", "Önemli yerde yavaşla", "Heyecandan hızlı konuşma"],
            ["Ses", "Arka sıraya duyulacak kadar yüksek ve net", "Mırıldanma"],
            ["Göz teması", "Sınıfın farklı yerlerine bak", "Slayta ya da kâğıda bak"],
            ["Duraklama", "Önemli cümleden önce ve sonra kısa dur", "Boşluğu dolgu sözcükle doldurma (*um*, *like*)"],
            ["Duruş", "Dik dur, jestleri sakin kullan", "Sallanma, cebe saklanma"]
          ] },
        { tip: "adimlar", baslik: "Prova planı", adimlar: [
            { baslik: "Anahtar kelimelere indir", metin: "Metni ezberleme; ana noktaları kısa ipuçlarına çevir. Not kartı kuralını öğretmeninden öğren." },
            { baslik: "Sesli ve zamanlayıcıyla prova yap", metin: "İlk koşuda süreyi ölç." },
            { baslik: "Kaydet ve dinle", metin: "Telefonda Voice Memo ile kaydet; dolgu sözcükleri ve hızı fark et." },
            { baslik: "Birine söyle", metin: "Arkadaşından en çok neyi anlamadığını sor." },
            { baslik: "Süreyi 5–6 dk'ya ayarla", metin: "Uzunsa gerekçelerden kısalt; kısaysa kanıtı derinleştir." },
            { baslik: "Slaytlarla tam prova", metin: "Soru-cevabı da dene." }
          ] }
      ]
    },
    {
      baslik: "Soru-cevap bölümü",
      kisa: "Soruyu dinle, kanıtla cevapla, bilmiyorsan dürüst ol.",
      bloklar: [
        { tip: "adimlar", adimlar: [
            { baslik: "Dinle", metin: "Soruyu bitmeden kesme; gerekirse netleştir." },
            { baslik: "Soruyu tekrarla", metin: "Hem herkes duyar hem düşünme süresi kazanırsın." },
            { baslik: "Kanıtla cevapla", metin: "Kaynağına ya da verine dayan." },
            { baslik: "Tezle bağla", metin: "Cevabı iddianın içine geri bağla." },
            { baslik: "Bilmiyorsan dürüst ol", metin: "Uydurma; bildiğin kanıta dön." }
          ] },
        { tip: "liste", baslik: "Soru-cevap kalıpları", maddeler: [
            { ikon: "💬", baslik: "*That is a fair question. According to …*", metin: "Saygıyla başla, kanıta geç." },
            { ikon: "💬", baslik: "*Could you clarify what you mean by …?*", metin: "Soruyu netleştir." },
            { ikon: "💬", baslik: "*The sources I found do not cover that, but the evidence does suggest …*", metin: "Bilmediğini dürüstçe söyle." }
          ] },
        { tip: "tuzak", metin: "Zor soruya kişiye saldırarak cevap vermek *ad hominem* olur.", yanlis: "Bu soru çok saçma.", dogru: "Soruyu ciddiye al, kanıtla cevapla; bilmiyorsan dürüstçe söyle." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Konuşma 5–6 dakika sürer, soru-cevap içerir ve performans notunun %60'ıdır.",
            "İskelet: *hook* → tez → üç gerekçe → karşı argüman → çağrı; zamanı baştan bütçele.",
            "Slayt destek olur; PowerPoint'i okumak yasaktır.",
            "Kaynakları sözlü söyle (*According to …*) ve slaytın altına kısa yaz.",
            "İlk 30 saniye dikkat çekmeli, son 30 saniye tezi ve çağrıyı hatırlatmalı.",
            "Prova: zamanlayıcıyla, sesli, kayıtlı ve bir dinleyiciyle yap.",
            "Soru-cevap: dinle, tekrarla, kanıtla cevapla, tezle bağla; bilmiyorsan uydurma.",
            "Konuşma senin emeğin olmalı; hazır konuşmayı yapay zekâya yazdırma."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir öğrencinin ilk provası 4 dakika 10 saniye sürdü. Konuşma kuralı 5–6 dakikadır. Ne yapmalıdır?",
      opts: ["Konuşmayı kısaltmalıdır.", "Yaklaşık 50 saniye ile 1 dakika 50 saniye arasında içerik eklemelidir.", "Süre yeterli, hiçbir şey yapmamalıdır.", "Süreyi uzatmak için slaytları yüksek sesle okumalıdır."], a: 1,
      why: "5:00 − 4:10 = 0:50; 6:00 − 4:10 = 1:50. Slaytları okumak kurala aykırı ve çekici ama yanlış bir çözümdür." },
    { q: "Aşağıdaki plan toplam kaç dakikadır ve doğru düzeltme hangisidir?",
      fig: { type: "table", head: ["Bölüm", "Süre"], rows: [["Hook", "0:30"], ["Tez", "0:30"], ["Gerekçe 1", "1:30"], ["Gerekçe 2", "1:30"], ["Gerekçe 3", "1:00"], ["Karşı argüman", "1:00"], ["Kapanış", "0:30"]] },
      opts: ["Toplam 6:30; en az 30 sn, en çok 1 dk 30 sn kısaltılmalı.", "Toplam 5:30; değişiklik gerekmez.", "Toplam 6:30; yeterli, çünkü 6 dk civarı kabul edilir.", "Toplam 7:00; yarıya indirilmeli."], a: 0,
      why: "0:30 + 0:30 + 1:30 + 1:30 + 1:00 + 1:00 + 0:30 = 6:30. 6 dakikayı aşar; 5–6 aralığına girmek için 30 sn ile 1:30 arasında kısaltmak gerekir. 5:30 çekici bir yanlıştır." },
    { q: "Bir öğrenci bütün konuşmasını slaytlara yazıp ekrana bakarak okuyor. Asıl sorun hangisidir?",
      opts: ["Slaytlarda çok az renk var.", "Soru-cevap bölümü çok uzun.", "Slayt konuşmanın yerini almış; kural PowerPoint okuması olmamasıdır.", "Konuşma kaynak içermiyor."], a: 2,
      why: "Slayt görsel destek olmalı, konuşma metni olmamalı. Okuma kuralı ihlal edilmiştir; diğer şıklar bu senaryoda bilgi verilmeyen ayrıntılardır." },
    { q: "Bir dinleyici, öğrencinin hiç bulmadığı bir istatistiği soruyor. En iyi cevap hangisidir?",
      opts: ["Kendinden emin biçimde yaklaşık bir sayı uydurmak.", "Soruyu saçma bulduğunu söylemek.", "Soruya cevap vermeyi reddetmek.", "\"The sources I found do not cover that, but the evidence does suggest …\" diyerek bildiği kanıta dönmek."], a: 3,
      why: "Uydurma veri akademik dürüstlük ihlalidir. Dürüst bir cevap ve kanıta dönüş hem güvenilirlik (*ethos*) kazandırır hem soruyu ciddiye alır." },
    { q: "Aşağıdakilerden hangisi güçlü bir kapanıştır?",
      opts: ["\"That's all, thank you.\"", "Tezi hatırlatan, eyleme çağıran ve açılıştaki soruya dönen bir kapanış.", "Yeni bir argüman ve yeni bir istatistik eklemek.", "Konuşma süresi için özür dilemek."], a: 1,
      why: "Kapanış tezi hatırlatır, eyleme çağırır ve döngüyü kapatır. Yeni argüman eklemek çekici ama dinleyiciyi dağıtır; \"That's all\" ise tezi hatırlatmaz." }
  ]
};
