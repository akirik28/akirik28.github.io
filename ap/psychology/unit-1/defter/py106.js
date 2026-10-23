/* Kitpath not defteri · py106 · 1.6 Duyum
   Kaynak: AP Psychology CED (2024) Topic 1.6. Blok türleri: /ap/_kit/defter.js başı.
   Not: grafiklerdeki eğriler kavramsaldır. Koni grafiğinde x = (dalga boyu − 400 nm) / 30; JND grafiğinde k = 0,1 varsayımsaldır. */
window.DEFTER = {
  slug: "py106",
  amac: "Bu konu duyuların dünyadan bilgiyi nasıl topladığını anlatıyor. Eşikleri ve Weber yasasını, duyusal uyumu, görme, işitme, koku–tat, dokunma, ağrı ve denge sistemlerini öğreneceksin.",
  bolumler: [
    {
      baslik: "Duyum ve mutlak eşik",
      kisa: "Duyum, uyaranı sinirsel mesaja çevirmektir; mutlak eşik %50 tespittir.",
      bloklar: [
        { tip: "adimlar", baslik: "Dünyadan beyne: duyum, sonra algı", adimlar: [
            { baslik: "Uyaran (*stimulus*)", metin: "Çevreden gelen ışık, ses, koku gibi bir enerji ya da molekül." },
            { baslik: "Reseptör", metin: "Duyu hücreleri uyaranı yakalar. Uyaranın belirli bir eşiği (*threshold*) aşması gerekir." },
            { baslik: "Transdüksiyon (*transduction*)", metin: "Uyaran, beynin işleyebileceği nörokimyasal mesaja çevrilir. Duyum burada biter." },
            { baslik: "Beyin ve algı (*perception*)", metin: "Mesaj (koku hariç) talamusa, oradan ilgili kortekse gider; yorumlama ve anlam verme algıdır." }
          ] },
        { tip: "grafik", baslik: "Mutlak eşik: uyaran ne zaman fark edilir? (kavramsal)", xlabel: "Uyaran şiddeti", ylabel: "Fark edilme olasılığı", xmax: 10, ymax: 11,
          yticks: [{ v: 5, label: "%50" }, { v: 10, label: "%100" }],
          ogeler: [
            { id: "kriv", tip: "egri", renk: 0, noktalar: [[0.5, 0.2], [2, 0.6], [3.5, 2], [5, 5], [6.5, 8], [8, 9.4], [9.5, 9.8]], gizli: true },
            { id: "t1", tip: "yazi", x: 2, y: 1.8, metin: "Neredeyse hiç fark edilmez", gizli: true },
            { id: "es", tip: "nokta", renk: 1, x: 5, y: 5, etiket: "Mutlak eşik", kilavuz: true, gizli: true },
            { id: "t2", tip: "yazi", x: 7.7, y: 10.6, metin: "Hemen her seferinde fark edilir", gizli: true }
          ],
          durumlar: [
            { metin: "Kulaklıkta sesi çok yavaş açıyorsun. Her şiddet için “duydum” deme olasılığını çiziyoruz." },
            { metin: "Şiddet arttıkça fark edilme olasılığı artar.", goster: ["kriv"] },
            { metin: "Çok zayıf uyaranlar neredeyse hiç fark edilmez.", goster: ["t1"] },
            { metin: "Uyaranın denemelerin ==en az %50==sinde fark edildiği en düşük şiddet ==mutlak eşiktir== (*absolute threshold*).", goster: ["es"] },
            { metin: "Eşiğin üstünde fark edilme olasılığı hızla %100'e yaklaşır.", goster: ["t2"] }
          ] },
        { tip: "tuzak", metin: "Mutlak eşik ve duyum/algı karışabilir.", yanlis: "Mutlak eşik, uyaranın %100 fark edildiği en düşük şiddettir.", dogru: "Mutlak eşik, uyaranın ==en az %50== oranında fark edildiği en düşük şiddettir. Ayrıca *sensation* = yakalama ve transdüksiyon; *perception* = beynin yorumlamasıdır." }
      ]
    },
    {
      baslik: "Fark eşiği ve Weber yasası",
      kisa: "Fark edilmesi gereken değişim, başlangıç şiddetiyle orantılıdır; sabit bir sayı değildir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "ΔI", alt: "fark edilen en küçük değişim (JND)" }, "÷",
            { t: "I", alt: "başlangıç şiddeti" }, "=",
            { t: "k", alt: "sabit oran" }
          ], aciklama: "*Just-noticeable difference* (JND), iki uyaranı ayırt edebilmek için gereken en küçük farktır. Weber yasasına göre JND, başlangıç şiddetiyle büyür; oran k sabit kalır." },
        { tip: "grafik", baslik: "Çantan ne kadar ağırlaşmalı ki fark edesin? (k = 0,1 varsayımıyla)", xlabel: "Başlangıç ağırlığı (kg)", ylabel: "Fark edilen en küçük artış (kg)", xmax: 5, ymax: 5,
          xticks: [{ v: 1, label: "10" }, { v: 2, label: "20" }, { v: 3, label: "30" }, { v: 4, label: "40" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "jnd", tip: "cizgi", renk: 0, from: [0, 0], to: [5, 5], etiket: "", gizli: true },
            { id: "p1", tip: "nokta", renk: 1, x: 1, y: 1, etiket: "10 kg → +1 kg", kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", renk: 1, x: 2, y: 2, etiket: "20 kg → +2 kg", kilavuz: true, gizli: true },
            { id: "p4", tip: "nokta", renk: 1, x: 4, y: 4, etiket: "40 kg → +4 kg", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Weber yasası: gereken fark, başlangıç şiddetinin sabit bir ==oranıdır==. Burada oran %10 (k = 0,1) varsayıldı.", goster: ["jnd"] },
            { metin: "10 kg'lık çantaya 1 kg eklenince farkı hissedersin.", goster: ["p1"] },
            { metin: "20 kg'lık çantada aynı farkı hissetmek için 2 kg gerekir.", goster: ["p2"] },
            { metin: "40 kg'da 4 kg gerekir: başlangıç şiddeti büyüdükçe ==fark edilecek değişim de büyür==.", goster: ["p4"] }
          ] },
        { tip: "tuzak", metin: "JND ve mutlak eşik karıştırılır; JND sabit bir sayı sanılır.", yanlis: "Her ağırlıkta 1 kg eklemek farkı hissettirir; JND sabit bir sayıdır.", dogru: "JND sabit sayı değil, ==sabit orandır==: sessiz odada küçük bir ses artışı fark edilir, gürültülü konserde çok daha büyük artış gerekir. Mutlak eşik “hiç yokken fark etmek”, JND ise “bir şey varken değişimi fark etmek”tir." }
      ]
    },
    {
      baslik: "Duyusal uyum ve duyuların birlikte çalışması",
      kisa: "Değişmeyen uyarana alışırız; duyular birbirini etkiler.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "😶‍🌫️", baslik: "*Sensory adaptation* (duyusal uyum)", maddeler: ["Değişmeyen uyarana duyarlılığın azalması", "Beyin yeni ve değişen şeye odaklanır"] },
          sag: { ikon: "🔊", baslik: "*Just-noticeable difference* (JND)", maddeler: ["İki uyaran arasındaki farkı fark edebilme", "Değişimi yakalama"] },
          oyun: [
            { metin: "Odaya girdikten 10 dakika sonra parfümün kokusunu artık hissetmemek.", cevap: "sol", neden: "Sürekli uyarana alışma: *adaptation*." },
            { metin: "Müziğin sesini bir tık artırınca farkı duymak.", cevap: "sag", neden: "Küçük bir değişimi fark etme: JND." },
            { metin: "Saatin tik takını bir süre sonra hiç duymamak.", cevap: "sol", neden: "Değişmeyen uyaran: *adaptation*." },
            { metin: "İki sıcak çay arasındaki ısı farkını ayırt etmek.", cevap: "sag", neden: "İki uyaran arasındaki fark: JND." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Sensory interaction", tr: "duyusal etkileşim", tanim: "Duyu sistemleri sürekli birlikte çalışır; bir duyu diğerinin deneyimini değiştirir.", ornek: "Burnun tıkalıyken yemeğin tadının azalması." },
            { ikon: "🌈", terim: "Synesthesia", tr: "sinestezi", tanim: "Bir duyunun uyarısının başka bir duyu aracılığıyla da yaşanması.", ornek: "Harfleri ya da sayıları renkli görmek." }
          ] },
        { tip: "tuzak", metin: "Uyum, algılama yeteneğinin kaybı değildir.", yanlis: "*Sensory adaptation*, duyu hücrelerinin zarar görmesidir.", dogru: "Uyum, değişmeyen uyarana ==duyarlılığın azalmasıdır==; uyaran değişince yeniden fark edersin." }
      ]
    },
    {
      baslik: "Göz: ışık retinaya nasıl ulaşır?",
      kisa: "Lens ışığı retinaya odaklar; retina ışığı sinirsel sinyale çevirir.",
      bloklar: [
        { tip: "adimlar", baslik: "Işığın yolu", adimlar: [
            { baslik: "Kornea ve göz bebeği", metin: "Işık girer; iris, göz bebeğinin (*pupil*) boyutunu ayarlar." },
            { baslik: "Lens", metin: "Işığı retinaya odaklar; şeklini değiştirerek yakın ve uzağı netler (*accommodation*)." },
            { baslik: "Retina", metin: "Arka yüzeydeki ışığa duyarlı tabaka; çubuklar ve koniler ışığı sinirsel sinyale çevirir." },
            { baslik: "Optik sinir ve kör nokta", metin: "Sinyaller optik sinirle beyne gider. Sinirin gözden çıktığı noktada hücre yoktur: *blind spot*." },
            { baslik: "Beyin", metin: "Sinyal talamustan oksipital loba ulaşır; beyin kör noktadaki boşluğu doldurur." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎞️", terim: "Retina", tr: "retina", tanim: "Gözün arkasındaki ışığa duyarlı yüzey; hücreleri görsel bilgiyi yakalayıp beyne gidecek sinyale çevirir.", ornek: "Telefona baktığında görüntü bu yüzeyde oluşur." },
            { ikon: "🔍", terim: "Accommodation", tr: "odaklanma uyumu", tanim: "Lensin, yakın ve uzak nesneleri retinaya netlemek için şekil değiştirmesi. Bozulursa miyopi ya da hipermetropi oluşur.", ornek: "Tahtadan telefona bakınca görüntünün birkaç saniyede netleşmesi." },
            { ikon: "👓", terim: "Nearsightedness / farsightedness", tr: "miyopi / hipermetropi", tanim: "Miyopide görüntü retinanın önünde odaklanır, uzak bulanıktır. Hipermetropide retinanın arkasında odaklanır, yakın bulanıktır.", ornek: "Miyop biri defterini net görür, tahtayı bulanık görür." },
            { ikon: "🕳️", terim: "Blind spot", tr: "kör nokta", tanim: "Optik sinirin gözden çıktığı, ışığa duyarlı hücre bulunmayan nokta.", ornek: "İki gözle bakınca boşluğu fark etmezsin; beyin tamamlar." }
          ] },
        { tip: "tuzak", metin: "Miyopi ve hipermetropi sık ters söylenir.", yanlis: "Miyop kişi yakını bulanık görür; odaklanmayı göz bebeği yapar.", dogru: "==Miyop== (nearsighted) yakını net, uzağı bulanık görür; ==hipermetrop== (farsighted) tersini yaşar. Odaklanmayı yapan ==lens==tir (*accommodation*), göz bebeği değil." }
      ]
    },
    {
      baslik: "Çubuklar, koniler ve renk görme",
      kisa: "Çubuklar loş ışıkta, koniler renk ve ayrıntıda uzmandır; iki kuram rengi açıklar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌙", baslik: "*Rods* (çubuklar)", maddeler: ["Retinanın çevresinde; şekli ve hareketi algılar, rengi görmez", "Loş ışıkta çalışır; karanlığa uyumda (*dark adaptation*) rol alır"] },
          sag: { ikon: "☀️", baslik: "*Cones* (koniler)", maddeler: ["Fovea'da toplanır; renk ve ince ayrıntıyı algılar", "Parlak ışıkta çalışır; mavi, yeşil ve kırmızı koniler vardır"] },
          oyun: [
            { metin: "Karanlık bir odaya girince önce yalnızca gri şekilleri seçmek.", cevap: "sol", neden: "Loş ışık, renksiz görme: *rods*." },
            { metin: "Kitaptaki küçük harfleri okumak.", cevap: "sag", neden: "İnce ayrıntı fovea'daki *cones* ile görülür." },
            { metin: "Gözün kenarından hareket eden bir şeyi fark etmek.", cevap: "sol", neden: "Çevre görüşü ve hareket: *rods*." },
            { metin: "Kırmızı ile yeşil arasındaki farkı görmek.", cevap: "sag", neden: "Renk görme: *cones*." }
          ] },
        { tip: "grafik", baslik: "Üç tür koni: hangi dalga boyuna ne kadar tepki verir? (kavramsal)", xlabel: "Işığın dalga boyu (nm)", ylabel: "Tepki", xmax: 10, ymax: 11,
          xticks: [{ v: 0, label: "400" }, { v: 3.33, label: "500" }, { v: 6.67, label: "600" }, { v: 10, label: "700" }],
          ogeler: [
            { id: "mavi", tip: "egri", renk: 0, noktalar: [[0, 5], [0.6, 7.5], [1.3, 9], [2, 6.5], [2.8, 3], [3.8, 0.8], [5, 0.1]], gizli: true },
            { id: "mavit", tip: "yazi", x: 1.4, y: 10.2, metin: "Mavi (kısa)", gizli: true },
            { id: "yesil", tip: "egri", renk: 2, noktalar: [[1.5, 0.2], [2.5, 2.5], [3.5, 6.5], [4.5, 9], [5.5, 6.8], [6.8, 2.8], [8, 0.6], [9, 0.1]], gizli: true },
            { id: "yesilt", tip: "yazi", x: 4.1, y: 10.2, metin: "Yeşil (orta)", gizli: true },
            { id: "kirmizi", tip: "egri", renk: 3, noktalar: [[2.5, 0.1], [3.5, 1.6], [4.5, 6.2], [5.5, 9], [6.5, 7], [7.5, 3.6], [8.8, 0.8], [10, 0.1]], gizli: true },
            { id: "kirmizit", tip: "yazi", x: 7.9, y: 7.6, metin: "Kırmızı (uzun)", gizli: true },
            { id: "sari", tip: "cizgi", renk: 1, kesik: true, from: [6, 0], to: [6, 9.6], etiket: "~580 nm: sarı", gizli: true }
          ],
          durumlar: [
            { metin: "Yatay eksen ışığın dalga boyu: soldan sağa kısadan uzuna. Her koni türü bir dalga boyu aralığında en güçlü tepki verir." },
            { metin: "==Mavi koni== kısa dalga boylarını algılar.", goster: ["mavi", "mavit"] },
            { metin: "==Yeşil koni== orta dalga boylarını algılar.", goster: ["yesil", "yesilt"] },
            { metin: "==Kırmızı koni== uzun dalga boylarını algılar.", goster: ["kirmizi", "kirmizit"] },
            { metin: "*Trichromatic theory*: renk, üç koninin tepki oranından doğar. Sarı ışık yeşil ve kırmızı konileri birlikte uyarır; beyin bunu “sarı” olarak yorumlar.", goster: ["sari"] }
          ] },
        { tip: "tablo", baslik: "Renk görme iki aşamada açıklanır", head: ["Kuram", "Nerede?", "Ne açıklar?"], rows: [
            ["*Trichromatic theory* (üç renkli kuram)", "Retinadaki koniler: mavi, yeşil, kırmızı", "Renklerin üç koninin tepki oranlarından oluşması"],
            ["*Opponent-process theory* (karşıt süreç)", "Retinadaki ganglion hücreleri: kırmızı/yeşil, mavi/sarı, siyah/beyaz", "Art görüntüler: bir renk yorulunca karşıtı baskın olur"]
          ], not: "İki kuram rakip değil, tamamlayıcıdır: önce koniler, sonra ganglion hücreleri çalışır." },
        { tip: "kavramlar", kartlar: [
            { ikon: "👁️‍🗨️", terim: "Afterimage", tr: "art görüntü", tanim: "Bir renge uzun bakıp beyaz yüzeye dönünce karşıt rengin görülmesi; ganglion hücrelerinin yorulmasıyla açıklanır.", ornek: "Yeşil bir diske bakıp beyaz duvara dönünce kırmızımsı bir leke görmek." },
            { ikon: "🎨", terim: "Color vision deficiency", tr: "renk görme eksikliği", tanim: "Koni ya da ganglion hücrelerindeki hasar veya düzensizlik. *Dichromatism*'de bir koni türü işlemez; *monochromatism*'de renk ayrımı çok sınırlıdır.", ornek: "Kırmızı ve yeşil lambaları ayırmakta güçlük." },
            { ikon: "🙂", terim: "Prosopagnosia", tr: "yüz körlüğü", tanim: "Görme sisteminin hasarına bağlı olarak yüzleri tanıyamama; kişi görür, ama yüzü kimin olduğunu bilemez.", ornek: "Yakın bir arkadaşının yüzünü tanıyamayıp sesinden tanımak." },
            { ikon: "🕶️", terim: "Blindsight", tr: "kör görü", tanim: "Görsel korteks hasarından sonra kişi “görmüyorum” der, ama nesnelere şans üstü doğrulukla uzanır ya da yön tahmin eder.", ornek: "“Hiçbir şey görmedim” deyip önündeki engelden kaçınmak." }
          ] }
      ]
    },
    {
      baslik: "İşitme",
      kisa: "Ses dalgaları kulakta sinirsel sinyale dönüşür; perdeyi birden çok kuram açıklar.",
      bloklar: [
        { tip: "adimlar", baslik: "Sesin yolu", adimlar: [
            { baslik: "Dış kulak", metin: "Kulak kepçesi sesi toplar ve kulak zarına (*eardrum*) yönlendirir." },
            { baslik: "Orta kulak", metin: "Zar titrer; üç küçük kemik (çekiç, örs, üzengi) titreşimi güçlendirip iç kulağa iletir." },
            { baslik: "İç kulak", metin: "Koklea (*cochlea*) sıvı doludur; titreşim, tüy hücrelerini (*hair cells*) eğer. Transdüksiyon burada olur." },
            { baslik: "Beyin", metin: "İşitme siniri sinyali talamusa, oradan temporal lobdaki işitme korteksine taşır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎵", terim: "Pitch", tr: "perde", tanim: "Sesin tizliği ya da peşliği; dalga frekansıyla belirlenir (kısa dalga boyu, yüksek frekans, tiz ses).", ornek: "Çocuk sesi tizdir, bas gitar peştir." },
            { ikon: "📢", terim: "Loudness", tr: "ses şiddeti", tanim: "Ses dalgasının genliğiyle (*amplitude*) belirlenir; desibel (dB) ile ölçülür.", ornek: "Kulaklıkta ses düğmesini yükseltince dalga genliği artar." },
            { ikon: "🧭", terim: "Sound localization", tr: "ses yeri belirleme", tanim: "Sesin yönü, iki kulağa varış zamanı ve şiddet farkından anlaşılır.", ornek: "Sağdan gelen sesin sağ kulağa önce ve daha güçlü ulaşması." }
          ] },
        { tip: "tablo", baslik: "Perdeyi açıklayan kuramlar", head: ["Kuram", "Fikir", "En iyi açıkladığı"], rows: [
            ["*Place theory*", "Frekans, bazilar zarın farklı yerlerini titreştirir; beyin sinyalin geldiği yere bakar", "Tiz sesler"],
            ["*Frequency theory*", "Sinirsel ateşleme hızı ses frekansıyla eşleşir", "Düşük frekanslar"],
            ["*Volley theory*", "Nöron grupları sırayla (nöbetleşe) ateşler; birlikte daha yüksek hıza çıkar", "Frekans kuramını aşan orta frekanslar"]
          ] },
        { tip: "ikili", sol: { ikon: "🔇", baslik: "*Conduction deafness* (iletim tipi)", maddeler: ["Kulak zarı ya da orta kulak kemiklerinde hasar; ses iç kulağa iletilemez", "Sesi güçlendiren cihazlar yardımcı olabilir"] },
          sag: { ikon: "🧏", baslik: "*Sensorineural deafness* (sinirsel tip)", maddeler: ["Koklea tüy hücreleri ya da işitme siniri hasarlıdır", "Yaşlanma ve yüksek ses etkisiyle olur; tüy hücreleri yenilenmez"] },
          oyun: [
            { metin: "Orta kulak kemikleri hareket etmediği için ses iç kulağa ulaşmıyor.", cevap: "sol", neden: "İletim sorunu: *conduction*." },
            { metin: "Yıllarca yüksek sesli konserlerde bulunan kişinin tüy hücreleri zarar görmüş.", cevap: "sag", neden: "Tüy hücresi hasarı: *sensorineural*." },
            { metin: "Delinmiş kulak zarı.", cevap: "sol", neden: "Kulak zarı iletimi yapar: *conduction*." },
            { metin: "İşitme sinirinde hasar.", cevap: "sag", neden: "Sinirsel yol bozuk: *sensorineural*." }
          ] }
      ]
    },
    {
      baslik: "Koku ve tat",
      kisa: "Koku ve tat kimyasal duyulardır; birlikte tadı oluşturur.",
      bloklar: [
        { tip: "harita", merkez: "*Gustation*: temel tatlar", dallar: [
            { baslik: "Tatlı (*sweet*)", alt: "Enerji kaynağı: şeker, meyve" },
            { baslik: "Ekşi (*sour*)", alt: "Asit: limon" },
            { baslik: "Tuzlu (*salty*)", alt: "Tuz ve mineraller" },
            { baslik: "Acı (*bitter*)", alt: "Olası zehirler: acı kahve" },
            { baslik: "Umami", alt: "Lezzetli, etli tat: et suyu, peynir" },
            { baslik: "*Oleogustus*", alt: "Yağ tadı" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "👃", terim: "Olfaction", tr: "koku alma", tanim: "Burundaki reseptörler kokuyu sinyale çevirir. Koku, talamusta önce işlenmeyen tek duyudur; doğrudan duygu ve bellek bölgelerine yakındır.", ornek: "Anneannenin yemeğini kokusundan hatırlamak." },
            { ikon: "💌", terim: "Pheromones", tr: "feromonlar", tanim: "Aynı türdeki bireyler arasında koku sistemi yoluyla kimyasal mesaj taşıyan maddeler.", ornek: "Bazı hayvanların eş çekmek için salgıladığı kokular." },
            { ikon: "👅", terim: "Supertasters", tr: "süper tadıcılar", tanim: "Dildeki tat reseptörü sayısı hassasiyeti belirler: *supertaster* (çok), *medium taster* (orta), *nontaster* (az).", ornek: "Acı kahveyi biri çok acı, biri hafif bulur." },
            { ikon: "🤧", terim: "Taste–smell interaction", tr: "tat–koku etkileşimi", tanim: "Kimyasal duyular birlikte çalışır; koku yoksa tat azalır ya da hiç yaşanmaz.", ornek: "Nezle olunca yemeğin tatsız gelmesi." }
          ] },
        { tip: "tuzak", metin: "Koku diğer duyulardan farklı yol izler.", yanlis: "Koku da öteki duyular gibi önce talamusa gider.", dogru: "Koku, ==talamusa uğramadan== işlenen ==tek== duyudur. Tat da yalnızca dilde değildir: tat reseptörleri ve koku birlikte tadı oluşturur." }
      ]
    },
    {
      baslik: "Dokunma, ağrı, denge ve hareket",
      kisa: "Cilt dokunma ve ısıyı, iç kulak dengeyi, kaslar hareketi algılar.",
      bloklar: [
        { tip: "tablo", baslik: "Vücut duyuları", head: ["Duyu", "Nerede?", "Akılda kalacak"], rows: [
            ["Dokunma (*touch*)", "Deride basınç, titreşim, ısı reseptörleri; beyinde somatosensory cortex", "“Sıcak” hissi, sıcak ve soğuk reseptörlerin birlikte uyarılmasından doğar"],
            ["Ağrı (*pain*)", "Vücuttaki reseptörler ve beyin", "*Gate control theory*; kayıp uzuvda duyum: *phantom limb*"],
            ["Denge (*vestibular*)", "İç kulaktaki yarım daire kanalları (*semicircular canals*) ve beyin", "Baş hareketiyle sıvı hareketi, tüy hücrelerini eğer"],
            ["Hareket (*kinesthesis*)", "Kas, eklem ve tendon reseptörleri", "Gözün görmeden de kolunun yerini bilmesi"]
          ] },
        { tip: "adimlar", baslik: "Gate control theory: dirseğini çarptın", adimlar: [
            { baslik: "Çarpma", metin: "Ağrı sinyalleri omuriliğe girer; omurilikteki “kapı” açılır, sinyal beyne geçer." },
            { baslik: "Ovma", metin: "Dokunma sinyalleri kapıyı kısmen kapatır: ağrı hafifler." },
            { baslik: "Beyin", metin: "Dikkat ve beklenti gibi beyin etkenleri de kapıyı etkiler: ağrı hem bedende hem beyinde işlenir." }
          ] },
        { tip: "tuzak", metin: "Hayalet uzuv duyumları hayal ürünü sanılır.", yanlis: "*Phantom limb* duyumu uydurmadır; gerçek bir duyum değildir.", dogru: "Uzvunu kaybeden kişi, uzvun olduğu yerde ==gerçek duyum ya da ağrı== hisseder; bunu üreten, o bölgeden sinyal bekleyen beyindir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Sensation* = uyaranı yakalama ve transdüksiyon; *perception* = yorumlama. *Absolute threshold* = uyaranın en az %50 fark edildiği en düşük şiddet.",
            "Weber yasası: JND, başlangıç şiddetiyle orantılıdır (ΔI ÷ I = sabit oran).",
            "*Sensory adaptation* değişmeyen uyarana duyarlılığın azalmasıdır; *sensory interaction* duyuların birbirini etkilemesi; *synesthesia* bir duyunun başka duyuda yaşanması.",
            "Görme: lens (*accommodation*) → retina (*rods* çevre/loş, *cones* fovea/renk) → optik sinir (*blind spot*) → oksipital lob. Miyopide uzak, hipermetropide yakın bulanık.",
            "Renk: *trichromatic* (3 koni) + *opponent-process* (ganglion; art görüntü). Hasar: *prosopagnosia*, *blindsight*.",
            "İşitme: kulak zarı → kemikler → koklea (tüy hücreleri) → temporal lob. Perde: *place*, *frequency*, *volley*; kayıp: *conduction* ve *sensorineural*.",
            "Koku talamusa uğramaz; tat (tatlı, ekşi, tuzlu, acı, umami, *oleogustus*) koku ile birleşir; *supertaster* çok reseptörlüdür.",
            "Dokunma: sıcak = sıcak + soğuk reseptörü. Ağrı: *gate control theory*, *phantom limb*. Denge: *semicircular canals*; hareket: *kinesthesis*."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir öğrenci, kulaklıkta çok kısık bir sesi on denemenin beşinde duyduğunu bildiriyor. Bu ses şiddeti için en doğru ifade hangisidir?",
      opts: ["Fark eşiği (*just-noticeable difference*)", "Mutlak eşik (*absolute threshold*): uyaran denemelerin yaklaşık %50'sinde fark edilmiştir", "Duyusal uyum (*sensory adaptation*)", "Weber oranı (k)"],
      a: 1,
      why: "Uyaranın denemelerin yaklaşık yarısında fark edildiği şiddet mutlak eşiktir. A en çekici yanlış: fark eşiği, var olan bir uyaranda değişimi fark etmeyle ilgilidir; burada “hiç yokken” fark etme söz konusudur." },
    { q: "Bir deneyde katılımcılar farklı başlangıç ağırlıklarına eklenen, fark edilen en küçük artışı bildirdi. Weber yasasına göre 400 g'lık başlangıç ağırlığı için fark edilen en küçük artış yaklaşık kaç gramdır?",
      fig: { type: "table", caption: "Başlangıç ağırlığı ve fark edilen en küçük artış", head: ["Başlangıç ağırlığı (g)", "Fark edilen en küçük artış (g)"], rows: [["100", "5"], ["200", "10"], ["400", "?"]] },
      opts: ["5 g", "10 g", "20 g", "40 g"],
      a: 2,
      why: "Oran sabit: 5 ÷ 100 = 10 ÷ 200 = %5; 400 g × 0,05 = 20 g. A en çekici yanlış: JND'yi sabit bir sayı sanıyor; Weber yasası sabit orandan söz eder." },
    { q: "Bir öğrenci akşam loş bir sinemaya girdiğinde ilk dakikalarda hiçbir şey seçemiyor; birkaç dakika sonra koltukları ve perdeyi gri tonlarında seçebiliyor. Bu uyumda başlıca rol hangi hücrelerindir?",
      opts: ["Çubuklar: loş ışıkta çalışır ve renk ayırt etmez", "Koniler: renkleri algılar ve parlak ışıkta çalışır", "Kornea hücreleri", "Optik sinirin çıkış noktasındaki hücreler (kör nokta)"],
      a: 0,
      why: "Karanlığa uyumda ve gri tonlu görmede çubuklar rol alır. B en çekici yanlış: koniler parlak ışıkta ve renk görmede çalışır; loş ışıkta devre dışı kalırlar." },
    { q: "Yıllarca yüksek sesli müziğe maruz kalan bir kişinin koklea tüy hücreleri zarar görmüştür. Bu kişide hangi tür işitme kaybı gelişmiştir ve neden?",
      opts: ["İletim tipi (*conduction*); çünkü kulak zarı delinmiştir", "İletim tipi; çünkü orta kulak kemikleri kaynaşmıştır", "Sinirsel tip; çünkü kulak kepçesi hasar görmüştür", "Sensörinöral (*sensorineural*) tip; çünkü sesi sinirsel sinyale çeviren tüy hücreleri hasarlıdır"],
      a: 3,
      why: "Tüy hücresi ya da işitme siniri hasarı sensörinöral işitme kaybıdır. A en çekici yanlış: kulak zarı hasarı iletim tipine girer ama bu kişide zarar gören yapı tüy hücreleridir." },
    { q: "Bir öğrenci uzun süre yeşil bir diske baktıktan sonra beyaz bir duvara bakınca kırmızımsı bir görüntü görüyor. Bu durumu en iyi hangi açıklama kapsar?",
      opts: ["Karşıt süreç kuramı (*opponent-process*): yeşil/kırmızı ganglion hücreleri yorulur ve karşıt tepki baskın olur", "Trikromatik kuram: yalnızca üç koni türü olduğu için", "Kör nokta: görüntü optik sinirin çıkışında kaybolur", "Duyusal etkileşim: koku ile görme birleşir"],
      a: 0,
      why: "Art görüntüler, retinadaki ganglion hücrelerinin karşıt çalışmasıyla (yeşil/kırmızı) açıklanır. B en çekici yanlış: trikromatik kuram koni düzeyini açıklar ama art görüntüyü tek başına açıklayamaz." }
  ]
};
