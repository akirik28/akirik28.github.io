/* Kitpath not defteri · ph406 · 4.6 Rezonans ve Deprem
   Kapsam: defter-araclari/kaynak/okul-10-2025-26.md (Physics Unit 4: 4.6 rezonans ve deprem, 4.7 deprem modeli). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph406",
  amac: "Bu konu rezonansı ve depremleri anlatıyor: dış kuvvetin frekansı cismin doğal frekansına eşit olunca titreşim genliği çok büyür. Deprem dalgalarını (P, S, yüzey), depremin merkezini bulmayı ve binaların rezonansa karşı nasıl tasarlandığını öğreneceksin.",
  bolumler: [
    {
      baslik: "Doğal frekans ve zorlanmış titreşim",
      kisa: "Her sistemin bir doğal frekansı vardır; dışarıdan zorlayan frekans başka olabilir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎵",
              terim: "Natural frequency",
              tr: "doğal frekans (f₀)",
              tanim: "Sistem bir kez itilip kendi haline bırakılınca titreştiği frekans; boyuna, kütlesine ve sertliğine bağlıdır.",
              ornek: "Salıncağın boyu sabit olduğu için hep aynı sıklıkta gidip gelir."
            },
            { ikon: "👋", terim: "Driving frequency", tr: "zorlayıcı frekans", tanim: "Dışarıdan tekrarlanan itmenin ya da titreşimin frekansı.", ornek: "Salıncağı her 2 saniyede bir itmek: 0,5 Hz." },
            { ikon: "🌀", terim: "Forced oscillation", tr: "zorlanmış titreşim", tanim: "Sistemin dışarıdan düzenli olarak zorlanarak yaptığı titreşim; sistem zorlayıcı frekansta salınır.", ornek: "Zeminin sallanmasıyla titreyen bina." }
          ]
        },
        {
          tip: "not",
          metin: "Salıncağı her salınımda doğru anda itersen genlik büyür; rastgele itersen büyümez. Doğru zamanlama, itme frekansının salıncağın doğal frekansına eşit olması demektir. **Sınavda böyle yaz:** *Every object has a natural frequency at which it vibrates freely.*"
        }
      ]
    },
    {
      baslik: "*Resonance*: frekanslar eşleşince genlik büyür",
      kisa: "Zorlayıcı frekans doğal frekansa eşitse genlik en büyük olur.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Salıncağı farklı frekanslarla zorlamak (f₀ = 4 Hz)",
          xlabel: "Zorlayıcı frekans f (Hz)",
          ylabel: "Genlik (cm)",
          xmax: 9,
          ymax: 7,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }],
          ogeler: [
            {
              id: "c1",
              tip: "egri",
              renk: 1,
              noktalar: [[0, 1], [1, 1.07], [2, 1.32], [2.8, 1.89], [3.3, 2.78], [3.6, 3.82], [3.8, 4.68], [3.9, 4.97], [4, 5], [4.1, 4.74], [4.2, 4.28], [4.4, 3.29], [4.7, 2.24], [5.2, 1.36], [6, 0.78], [7, 0.48], [8, 0.33]]
            },
            { id: "n1", tip: "nokta", renk: 3, x: 2, y: 1.32, etiket: "2 Hz", gizli: true },
            { id: "n3", tip: "nokta", renk: 3, x: 6, y: 0.78, etiket: "6 Hz", gizli: true },
            { id: "f0", tip: "cizgi", renk: 0, kesik: true, from: [4, 0], to: [4, 6.3], gizli: true },
            { id: "f0x", tip: "yazi", x: 4.15, y: 6.5, metin: "f₀ = 4 Hz", hiza: "start", gizli: true },
            { id: "n2", tip: "nokta", renk: 2, x: 4, y: 5, gizli: true },
            {
              id: "c2",
              tip: "egri",
              renk: 2,
              noktalar: [[0, 1], [1, 1.03], [2, 1.11], [2.8, 1.15], [3.3, 1.13], [3.6, 1.09], [3.8, 1.05], [3.9, 1.02], [4, 1], [4.1, 0.97], [4.2, 0.95], [4.4, 0.89], [4.7, 0.81], [5.2, 0.68], [6, 0.51], [7, 0.37], [8, 0.28]],
              gizli: true
            },
            { id: "c2x", tip: "yazi", x: 8.9, y: 1.7, metin: "çok sönüm", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Eğri, her zorlayıcı frekansta salıncağın ulaştığı genliği gösteriyor (yeşil: sürtünme az)." },
            { metin: "Zorlayıcı frekans f₀'dan uzaksa (2 Hz, 6 Hz) genlik küçük kalır.", goster: ["n1", "n3"] },
            { metin: "f = f₀ = 4 Hz olunca genlik çok büyür: ==rezonans==.", goster: ["f0", "f0x", "n2"], gizle: ["n1", "n3"] },
            { metin: "Sürtünme (sönüm) artınca (kırmızı eğri) tepe alçalır ve yayvanlaşır; yine en büyük genlik f₀ civarındadır.", goster: ["c2", "c2x"] }
          ]
        },
        {
          tip: "ornek",
          baslik: "Salıncakta rezonans",
          durum: "Doğal frekansı 0,5 Hz olan salıncağı bir arkadaşın her 2 saniyede bir itiyor. Rezonans olur mu? Her 3 saniyede bir itseydi ne olurdu?",
          adimlar: ["Her 2 s'de bir itme: f = 1 ÷ T = 1 ÷ 2 = 0,5 Hz.", "f = f₀ = 0,5 Hz → rezonans: her itme genliği biraz daha büyütür.", "Her 3 s'de bir itme: f = 1 ÷ 3 ≈ 0,33 Hz ≠ f₀. İtmeler salınımla uyumsuz kayar, genlik büyümez."],
          sonuc: "==2 s'de bir itme rezonans yapar;== 3 s'de bir itme yapmaz. Sınavda böyle yaz: *Resonance occurs when the driving frequency equals the natural frequency.*"
        },
        {
          tip: "tuzak",
          baslik: "Rezonans için büyük kuvvet mi gerekir?",
          metin: "Frekans uyuşmazsa çok büyük bir kuvvet bile büyük genlik oluşturmaz. Küçük ama doğru frekanslı itmeler ise genliği adım adım büyütür.",
          yanlis: "Rezonans için çok büyük bir kuvvet gerekir.",
          dogru: "Rezonans için ==frekans eşleşmesi== gerekir; küçük ama düzenli itmeler yeter."
        }
      ]
    },
    {
      baslik: "Faydalı ve zararlı rezonans",
      kisa: "Rezonans radyoda işimize yarar, köprüde ve binada hasara yol açar.",
      bloklar: [
        {
          tip: "ikili",
          sol: { ikon: "📻", baslik: "Faydalı rezonans", maddeler: ["Radyoda istasyon seçmek", "Müzik aletlerinin gövdesinde sesin güçlenmesi"] },
          sag: { ikon: "🏗️", baslik: "Zararlı rezonans", maddeler: ["Köprü ve binaların aşırı sallanması", "Makine titreşimiyle parçaların gevşemesi"] },
          oyun: [
            { metin: "Radyoda istasyon seçmek için düğmeyi çevirmek.", cevap: "sol", neden: "Alıcı, seçilen yayının frekansına ayarlanır; o yayın güçlenir." },
            { metin: "Gitarın ses kutusunun telin sesini güçlendirmesi.", cevap: "sol", neden: "Gövde, telin frekansında titreşerek sesi büyütür." },
            { metin: "Çamaşır makinesinin belli bir sıkma devrinde şiddetle sarsılması.", cevap: "sag", neden: "Devir frekansı makinenin doğal frekansına denk gelir; zararlı titreşim olur." },
            { metin: "Köprüde ritimli yürüyen kalabalığın uyguladığı titreşimin köprünün doğal frekansına denk gelmesi.", cevap: "sag", neden: "Köprü tehlikeli biçimde sallanabilir." }
          ]
        },
        { tip: "not", metin: "**Sınavda böyle yaz:** *Resonance can be useful, for example when tuning a radio, but it can also be harmful, for example when it makes a building shake.*" }
      ]
    },
    {
      baslik: "Deprem nedir? Fay, odak, merkez üssü, büyüklük",
      kisa: "Deprem, fayda biriken enerjinin kayaların kırılıp kaymasıyla boşalmasıdır.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Deprem nasıl oluşur?",
          adimlar: [
            { baslik: "Levhalar hareket eder", metin: "Yer kabuğu levhaları yılda birkaç santimetre kayar; fay hattında sürtünme yüzünden kayalar takılı kalır." },
            { baslik: "Gerilme birikir", metin: "Kayalar yay gibi gerilir, enerji depolanır." },
            { baslik: "Kırılma ve kayma", metin: "Dayanım aşılınca fay aniden kayar; depolanan enerji boşalır." },
            { baslik: "Dalgalar yayılır", metin: "Odaktan her yöne deprem dalgaları çıkar." }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🪨", terim: "Fault", tr: "fay", tanim: "Yer kabuğunda kayaların birbirine göre kayabildiği kırık hattı.", ornek: "Türkiye'deki Kuzey Anadolu Fayı." },
            { ikon: "🎯", terim: "Focus (hypocenter)", tr: "odak", tanim: "Depremin yerin altında başladığı nokta.", ornek: "Kırılmanın ilk başladığı derinlik." },
            { ikon: "📍", terim: "Epicenter", tr: "merkez üssü", tanim: "Odağın tam üstündeki yeryüzü noktası.", ornek: "Haberlerde \"deprem merkez üssü şu ilçe\" denen yer." },
            { ikon: "📈", terim: "Seismograph", tr: "sismograf", tanim: "Yer hareketini zamana karşı kaydeden alet; kaydın adı sismogramdır.", ornek: "Her istasyonun kendi kaydı vardır." }
          ]
        },
        {
          tip: "tablo",
          baslik: "Büyüklük (magnitude) ve şiddet (intensity)",
          head: ["", "Büyüklük", "Şiddet"],
          rows: [
            ["Neyi anlatır?", "Depremde açığa çıkan enerjiyi", "Bir yerde hissedilen etkiyi"],
            ["Kaç değer var?", "Her deprem için tek değer", "Yere göre değişir"],
            ["Ölçek", "Richter / moment büyüklüğü (ör. 6,5)", "Mercalli (I–XII)"],
            ["Nasıl bulunur?", "Sismograf kayıtlarından hesaplanır", "Hasar ve gözlemlerden belirlenir"]
          ],
          not: "Büyüklük 1 artınca yer hareketinin genliği yaklaşık 10, enerji yaklaşık 32 kat artar. Sınavda böyle yaz: *Magnitude measures the energy released, intensity measures the effects at a place.*"
        }
      ]
    },
    {
      baslik: "Deprem dalgaları: P, S ve yüzey dalgaları",
      kisa: "P en hızlı ve boyunadır, S enine ve yavaştır; yüzey dalgaları en yıkıcıdır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Üç deprem dalgası (yaklaşık değerler)",
          head: ["", "P dalgası (*primary*)", "S dalgası (*secondary*)", "Yüzey dalgaları (*surface waves*)"],
          rows: [
            ["Tür", "Boyuna (sıkışma–seyrelme)", "Enine", "Yüzeyde yayılır (yatay sallama ve yuvarlanma)"],
            ["Hız", "En hızlı (≈ 6–8 km/s)", "P'den yavaş (≈ 3,5–4,5 km/s)", "En yavaş"],
            ["Hangi ortamdan geçer?", "Katı, sıvı, gaz", "Yalnızca katı", "Yalnızca yüzeyde"],
            ["Sismografa gelişi", "İlk gelir", "İkinci gelir", "En son gelir"],
            ["Hasar", "Genellikle küçük", "Orta", "En büyük"]
          ]
        },
        {
          tip: "grafik",
          baslik: "Sismogram: dalgalar sırayla gelir",
          xlabel: "Zaman (s)",
          ylabel: "Yer hareketi",
          xmax: 16,
          ymax: 9,
          xticks: [{ v: 4, label: "40" }, { v: 8, label: "80" }, { v: 12, label: "120" }, { v: 16, label: "160" }],
          yticks: [{ v: 4.5, label: "0" }],
          ogeler: [
            {
              id: "s1",
              tip: "egri",
              renk: 1,
              noktalar: [
                [0, 4.5], [0.125, 4.563], [0.25, 4.554], [0.375, 4.484], [0.5, 4.432], [0.625, 4.457], [0.75, 4.532], [0.875, 4.57], [1, 4.529], [1.125, 4.455], [1.25, 4.432], [1.375, 4.487], [1.5, 4.556], [1.625, 4.562], [1.75, 4.497],
                [1.875, 4.436], [2, 4.447], [2.125, 4.519], [2.25, 4.569], [2.375, 4.54], [2.5, 4.466], [2.625, 4.43], [2.75, 4.474], [2.875, 4.547], [3, 4.527], [3.125, 4.852], [3.25, 4.899], [3.375, 4.343], [3.5, 3.907], [3.625, 4.147],
                [3.75, 4.78], [3.875, 5.077], [4, 4.721], [4.125, 4.136], [4.25, 3.983], [4.375, 4.41], [4.5, 4.915], [4.625, 4.936], [4.75, 4.474], [4.875, 4.064], [5, 4.157], [5.125, 4.625], [5.25, 4.932], [5.375, 4.745], [5.5, 4.296],
                [5.625, 4.096], [5.75, 4.353], [5.875, 4.76], [6, 4.859]
              ]
            },
            { id: "pl", tip: "cizgi", renk: 0, kesik: true, from: [3, 0.4], to: [3, 8.3] },
            { id: "plx", tip: "yazi", x: 3, y: 8.75, metin: "P" },
            {
              id: "s2",
              tip: "egri",
              renk: 2,
              noktalar: [[6, 4.859], [6.125, 5.16], [6.25, 5.364], [6.375, 5.075], [6.5, 4.526], [6.625, 3.969], [6.75, 3.604], [6.875, 3.647], [7, 4.198], [7.125, 5.014], [7.25, 5.555], [7.375, 5.386], [7.5, 4.596]],
              gizli: true
            },
            { id: "sl", tip: "cizgi", renk: 0, kesik: true, from: [6, 0.4], to: [6, 8.3], gizli: true },
            { id: "slx", tip: "yazi", x: 6, y: 8.75, metin: "S", gizli: true },
            {
              id: "s3",
              tip: "egri",
              renk: 3,
              noktalar: [
                [7.5, 4.596], [7.625, 4.209], [7.75, 4.767], [7.875, 5.797], [8, 6.56], [8.125, 6.466], [8.25, 5.466], [8.375, 4.051], [8.5, 2.856], [8.625, 2.255], [8.75, 2.274], [8.875, 2.782], [9, 3.659], [9.125, 4.762], [9.25, 5.808],
                [9.375, 6.42], [9.5, 6.365], [9.625, 5.747], [9.75, 4.947], [9.875, 4.32], [10, 3.952], [10.125, 3.702], [10.25, 3.454], [10.375, 3.292], [10.5, 3.42], [10.625, 3.922], [10.75, 4.639], [10.875, 5.272], [11, 5.612], [11.125, 5.639],
                [11.25, 5.446], [11.375, 5.097], [11.5, 4.605], [11.625, 4.031], [11.75, 3.554], [11.875, 3.383], [12, 3.596], [12.125, 4.057], [12.25, 4.526], [12.375, 4.842], [12.5, 5.006], [12.625, 5.1], [12.75, 5.149], [12.875, 5.085],
                [13, 4.844], [13.125, 4.471], [13.25, 4.116], [13.375, 3.915], [13.5, 3.899], [13.625, 4.003], [13.75, 4.164], [13.875, 4.375], [14, 4.645], [14.125, 4.922], [14.25, 5.092], [14.375, 5.062], [14.5, 4.847], [14.625, 4.563],
                [14.75, 4.336], [14.875, 4.211], [15, 4.155], [15.125, 4.135], [15.25, 4.165], [15.375, 4.283], [15.5, 4.482], [15.625, 4.69], [15.75, 4.82], [15.875, 4.836], [16, 4.773]
              ],
              gizli: true
            },
            { id: "yl", tip: "cizgi", renk: 0, kesik: true, from: [7.5, 0.4], to: [7.5, 8.3], gizli: true },
            { id: "ylx", tip: "yazi", x: 8.6, y: 8.75, metin: "yüzey", gizli: true },
            { id: "sp1", tip: "ok", renk: 2, from: [4.5, 7.9], to: [3, 7.9], gizli: true },
            { id: "sp2", tip: "ok", renk: 2, from: [4.5, 7.9], to: [6, 7.9], gizli: true },
            { id: "spx", tip: "yazi", x: 4.5, y: 7.3, metin: "30 s", gizli: true }
          ],
          durumlar: [
            { metin: "Sismograf, sarsıntı gelmeden önce neredeyse düz çizgi çizer. 30. saniyede ilk titreşim: ==P dalgası== (küçük genlik)." },
            { metin: "60. saniyede ==S dalgası== gelir: daha yavaştır ve genliği daha büyüktür.", goster: ["s2", "sl", "slx"] },
            { metin: "Yaklaşık 75. saniyede ==yüzey dalgaları== gelir: en yavaş, en büyük genlikli ve en yıkıcı.", goster: ["s3", "yl", "ylx"] },
            { metin: "P ile S arasındaki fark (S − P) 30 s. Bu fark depremin istasyondan ne kadar uzakta olduğunu verir (sonraki başlık).", goster: ["sp1", "sp2", "spx"] }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "🅿️", baslik: "*P wave*", maddeler: ["Boyuna dalga: sıkışma ve seyrelme", "En hızlı; katı, sıvı ve gazdan geçer"] },
          sag: { ikon: "🅢", baslik: "*S wave*", maddeler: ["Enine dalga: titreşim yayılmaya dik", "Daha yavaş; yalnızca katıdan geçer"] },
          oyun: [
            { metin: "Sismografa ilk ulaşan deprem dalgası.", cevap: "sol", neden: "P en hızlı dalgadır." },
            { metin: "Sıvı olan dış çekirdekten geçemeyen dalga.", cevap: "sag", neden: "Enine dalga sıvıda yayılamaz; bu yüzden dış çekirdeğin sıvı olduğu anlaşılmıştır." },
            { metin: "Parçacıkları ileri geri (yayılma doğrultusunda) titreştiren dalga.", cevap: "sol", neden: "Boyuna dalga: P." },
            { metin: "Parçacıkları yayılmaya dik yönde titreştiren dalga.", cevap: "sag", neden: "Enine dalga: S." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "En hızlı dalga en yıkıcı mıdır?",
          metin: "Hızlı gelen dalga ilk haberi verir ama hasarı yapan, genliği en büyük olan yüzey dalgalarıdır.",
          yanlis: "P dalgası en hızlı olduğu için en büyük hasarı o verir.",
          dogru: "==P ilk gelir==, hasar çoğunlukla ==yüzey dalgalarından== olur. Sınavda böyle yaz: *P waves arrive first, but surface waves cause the most damage.*"
        }
      ]
    },
    {
      baslik: "Depremin merkezini bulmak",
      kisa: "S–P zaman farkı uzaklığı verir; üç istasyonun çemberleri merkez üssünü gösterir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "S–P farkından uzaklık",
          durum: "Bir istasyonda P ile S dalgası arasındaki zaman farkı 30 s ölçülüyor. P dalgasının hızı 8 km/s, S dalgasının hızı 4 km/s. Deprem istasyondan kaç km uzakta? (Sayılar kolay hesap için seçildi; gerçekte S hızı P'nin yaklaşık 0,55–0,6 katıdır.)",
          adimlar: ["Uzaklık d olsun. P'nin varış süresi t_P = d ÷ 8, S'nin t_S = d ÷ 4.", "Fark: t_S − t_P = d ÷ 4 − d ÷ 8 = d ÷ 8.", "d ÷ 8 = 30 → d = 240 km.", "Kontrol: t_P = 240 ÷ 8 = 30 s, t_S = 240 ÷ 4 = 60 s; fark 30 s ✓."],
          sonuc: "==d = 240 km.== Sınavda böyle yaz: *The longer the time gap between the P and S waves, the farther the epicenter.*"
        },
        {
          tip: "adimlar",
          baslik: "Üç istasyonla merkez üssü",
          adimlar: [
            { baslik: "Bir istasyon", metin: "S–P farkı yalnızca uzaklığı verir: merkez üssü, istasyon merkezli ve yarıçapı bu uzaklık olan bir çemberin üzerindedir." },
            { baslik: "İki istasyon", metin: "İki çember iki noktada kesişir; hâlâ iki aday var." },
            { baslik: "Üç istasyon", metin: "Üç çember tek bir noktada kesişir: ==merkez üssü==." }
          ]
        }
      ]
    },
    {
      baslik: "Binalarda rezonans",
      kisa: "Zemin titreşimi binanın doğal frekansına denk gelirse hasar çok artar.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Bina ve zemin türüne göre rezonans",
          head: ["Durum", "Doğal frekans / etki", "Ne olur?"],
          rows: [
            ["Kısa, sert bina", "Doğal frekans yüksek", "Yüksek frekanslı (kısa periyotlu) sarsıntıyla rezonansa girer"],
            ["Uzun, esnek bina", "Doğal frekans düşük", "Düşük frekanslı (uzun periyotlu) sarsıntıyla rezonansa girer"],
            ["Yumuşak (dolgu, gevşek) zemin", "Dalgaları büyütür", "Sarsıntı güçlenir ve uzar"],
            ["Sert kaya zemin", "Dalgaları az büyütür", "Sarsıntı daha az"]
          ],
          not: "Kaba kural: binanın doğal periyodu yaklaşık 0,1 s × kat sayısıdır. Kat sayısı arttıkça doğal frekans azalır. Sınavda böyle yaz: *If the ground shakes at the natural frequency of a building, resonance occurs and the damage increases.*"
        },
        {
          tip: "ornek",
          baslik: "Hangi bina en çok tehlikede?",
          durum: "Bir depremde zemin 1 Hz frekansla sallanıyor. Doğal frekansları 5 Hz, 1 Hz ve 0,25 Hz olan üç binadan hangisi en çok tehlikededir? (Doğal periyot ≈ 0,1 s × kat sayısı ise 1 Hz'lik bina kaç katlıdır?)",
          adimlar: ["Rezonans için zorlayıcı frekans doğal frekansa eşit olmalı.", "5 Hz ve 0,25 Hz'lik binalarda frekanslar uyuşmuyor: genlik küçük kalır.", "1 Hz'lik binada f = f₀ → rezonans.", "T = 1 ÷ f = 1 s → kat sayısı ≈ 1 ÷ 0,1 = 10."],
          sonuc: "==Doğal frekansı 1 Hz olan (yaklaşık 10 katlı) bina rezonansa girer ve en çok hasar görür.=="
        },
        {
          tip: "not",
          metin: "1985 Meksika depreminde eski göl yatağındaki yumuşak zemin uzun periyotlu dalgaları büyüttü; zeminin ve orta yükseklikteki binaların doğal frekansları denk gelince bu binalar çok zarar gördü. Kısa binalar ve çok yüksek binalar daha az etkilendi."
        }
      ]
    },
    {
      baslik: "Depreme dayanıklı tasarım ve deprem modeli",
      kisa: "Binayı rezonanstan uzak tut, enerjiyi sönümle ve zeminden yalıt.",
      bloklar: [
        {
          tip: "liste",
          maddeler: [
            { ikon: "🎚️", baslik: "Doğal frekansı ayarla", metin: "Kat sayısı, kolon ve perde sertliği ve kütle, binanın doğal frekansını bölgenin zemin frekansından uzak tutacak biçimde seçilir." },
            { ikon: "🛢️", baslik: "Sönümle (*damping*)", metin: "Sönümleyiciler ve kütle sönümleyiciler (*tuned mass damper*) titreşim enerjisini ısıya çevirir. Örnek: Taipei 101'in tepesindeki dev kütle." },
            { ikon: "🛼", baslik: "Yalıt (*base isolation*)", metin: "Binayı zeminden esnek yalıtıcı yataklar üzerine oturtmak, binaya geçen sarsıntıyı azaltır." },
            { ikon: "🧱", baslik: "Güçlendir", metin: "Betonarme perde duvarlar (*shear walls*), çapraz bağlar (*cross bracing*) ve kırılmadan uzayabilen sünek (*ductile*) malzeme kullanılır." },
            { ikon: "📐", baslik: "Düzenli ve simetrik plan", metin: "Burulma ve yumuşak kat (*soft story*) oluşmaması için kat planları düzenli tutulur." },
            { ikon: "🪨", baslik: "Zemini etüt et, yönetmeliğe uy", metin: "Zemin incelenir; Türkiye Bina Deprem Yönetmeliği (TBDY 2018) ve yapı denetimi esastır." }
          ]
        },
        {
          tip: "adimlar",
          baslik: "Deprem modeli: sallanan tabla deneyi",
          adimlar: [
            { baslik: "Kur", metin: "Aynı tabana kısa ve uzun iki maket bina (cetvel ya da çubuk) tutturulur." },
            { baslik: "Salla", metin: "Tabla, frekansı yavaş yavaş artırılarak sallanır." },
            { baslik: "Gözle", metin: "Her maketin en çok sallandığı frekans onun doğal frekansıdır: rezonans." },
            { baslik: "Yorumla", metin: "Uzun maket düşük frekansta, kısa maket yüksek frekansta rezonansa girer." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Çok sert bina daha güvenli midir?",
          metin: "Yalnızca sert yapmak yetmez; çok sert ve kırılgan bir yapı enerjiyi sönümleyemez ve çatlar.",
          yanlis: "Deprem için binayı olabildiğince sert yapmak yeter.",
          dogru: "Güvenlik ==dayanım + süneklik + sönümleme== ile sağlanır. Sınavda böyle yaz: *Earthquake-resistant buildings reduce resonance, absorb energy and isolate the structure from ground motion.*"
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: [
            "Her sistemin bir doğal frekansı vardır; zorlayıcı frekans buna eşitse *resonance* olur ve genlik çok büyür.",
            "Rezonans için büyük kuvvet değil frekans eşleşmesi gerekir; sönüm tepeyi alçaltır.",
            "Rezonans radyo ayarında ve müzik aletlerinde faydalı, köprü ve binada zararlıdır.",
            "Deprem, fayda biriken enerjinin boşalmasıdır; odak yerin altında, merkez üssü tam üstündedir.",
            "Büyüklük enerjiyi (1 artış ≈ 32 kat enerji), şiddet bir yerdeki etkiyi anlatır.",
            "P: boyuna, en hızlı, ilk gelir, katı ve sıvıdan geçer. S: enine, daha yavaş, yalnızca katıdan geçer. Yüzey dalgaları en yavaş ve en yıkıcıdır.",
            "S–P zaman farkı uzaklığı verir; üç istasyon merkez üssünü bulur.",
            "Zemin frekansı binanın doğal frekansına denk gelirse hasar artar; kat sayısı arttıkça doğal frekans azalır.",
            "Dayanıklı tasarım: rezonanstan uzak, sönümlü, yalıtılmış, sünek ve düzenli yapı."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A swing has a natural frequency of 2 Hz. At which pushing interval will its amplitude increase the most?",
      opts: ["Every 0.5 seconds", "Every 1 second", "Every 2 seconds", "Every 4 seconds"], a: 0,
      why: "Rezonans için itme frekansı doğal frekansa eşit olmalı: f = 2 Hz → T = 1/f = 0,5 s. C en çekici yanlış şıktır: 2 Hz ile 2 saniye karıştırılmış."
    },
    {
      q: "During an earthquake the ground shakes at a frequency of 0.5 Hz. The natural frequencies of three buildings are given in the table. Which building goes into resonance and is damaged the most?",
      fig: { type: "table", head: ["Building", "Natural frequency"], rows: [["X", "4 Hz"], ["Y", "0.5 Hz"], ["Z", "1 Hz"]] },
      opts: ["X", "Y", "Z", "All three are damaged equally"],
      a: 1,
      why: "Rezonans zemin frekansı doğal frekansa eşit olunca olur: yalnızca Y binasında 0,5 Hz = 0,5 Hz. Z'de 1 Hz ≠ 0,5 Hz olduğundan frekanslar eşleşmez ve genlik daha küçük kalır."
    },
    {
      q: "At a station, the time difference between the arrival of the P wave and the S wave is 40 s. The speed of the P wave is 8 km/s and that of the S wave is 4 km/s. How far away is the earthquake from the station?",
      opts: ["80 km", "160 km", "320 km", "640 km"],
      a: 2,
      why: "t_S − t_P = d/4 − d/8 = d/8 = 40 → d = 320 km. Kontrol: t_P = 40 s, t_S = 80 s, fark 40 s ✓. B şıkkı yalnızca S dalgasının süresini (d/4) farka eşitlemekten gelir."
    },
    {
      q: "Which of the following statements about seismic waves is correct?",
      opts: ["P waves are transverse waves.", "Surface waves are the first waves to reach a seismograph.", "S waves travel faster than P waves.", "S waves cannot pass through the liquid outer core."],
      a: 3,
      why: "S dalgaları enine dalgadır ve sıvıda yayılamaz. P dalgaları boyunadır ve en hızlıdır (ilk gelir). Yüzey dalgaları en son gelir ama en yıkıcıdır."
    },
    {
      q: "A large mass damper is placed at the top of a skyscraper. What is its purpose?",
      opts: ["To make the natural frequency of the building equal to the frequency of the ground", "To absorb vibration energy and reduce the amplitude of the building's oscillation", "To protect the building from gravity", "To stop the P waves"],
      a: 1,
      why: "Kütle sönümleyici titreşim enerjisini soğurup ısıya çevirerek bina genliğini küçültür. A en çekici yanlış şıktır: amaç tam tersine, rezonansa girmemektir."
    }
  ]
};
