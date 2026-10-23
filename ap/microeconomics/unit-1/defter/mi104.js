/* Kitpath not defteri · mi104 · 1.6-2 Tüketici Seçimi ve Fayda Maksimizasyonu
   Kaynak: ap-videolar/src/episodes/mi104 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mi104",
  amac: "Bu konu *consumer choice* yani tüketici seçimini anlatıyor: sınırlı parayla iki mal arasında en çok faydayı veren karışımı nasıl bulursun? Bütçe doğrusunu, lira başına marjinal faydayı ve *utility-maximizing rule*'u öğreneceksin.",
  bolumler: [
    {
      baslik: "Bütçe kısıtı ve bütçe doğrusu",
      kisa: "Gelirin ve fiyatlar neyi alabileceğini belirler; bütçe doğrusu bu sınırdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👛", terim: "Budget constraint", tr: "bütçe kısıtı", tanim: "Gelir ve fiyatların, alabileceğin kombinasyonlara koyduğu sınır.", ornek: "Mola yerinde 80 lira var; tost 20, ayran 10 lira." },
            { ikon: "📐", terim: "Budget line", tr: "bütçe doğrusu", tanim: "Bütün gelir harcanınca alınabilen kombinasyonları gösteren doğru. Tüketicinin *PPC*'sidir; eğimi fiyat oranıdır.", ornek: "4 tost ya da 8 ayran ya da arası." }
          ] },
        { tip: "grafik", baslik: "80 lirayla tost ve ayran", xlabel: "Tost", ylabel: "Ayran", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "1" }, { v: 4, label: "2" }, { v: 6, label: "3" }, { v: 8, label: "4" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "x", tip: "nokta", renk: 1, x: 8, y: 0, etiket: "4 tost", gizli: true },
            { id: "y", tip: "nokta", renk: 1, x: 0, y: 8, etiket: "8 ayran", gizli: true },
            { id: "bl", tip: "cizgi", renk: 0, from: [0, 8], to: [8, 0], etiket: "Budget line", gizli: true },
            { id: "on", tip: "nokta", renk: 1, x: 6, y: 2, etiket: "3 + 2 = 80 ₺", gizli: true },
            { id: "in", tip: "nokta", renk: 2, x: 4, y: 2, etiket: "2 + 2 = 60 ₺", gizli: true },
            { id: "out", tip: "nokta", renk: 3, x: 8, y: 4, etiket: "4 + 4 = 120 ₺", gizli: true },
            { id: "sh", tip: "ok", renk: 2, from: [6, 2], to: [8, 2], gizli: true },
            { id: "sv", tip: "ok", renk: 2, from: [8, 2], to: [8, 0], gizli: true }
          ],
          durumlar: [
            { metin: "Bütün parayı tosta verirsen: 80 ÷ 20 = 4 tost.", goster: ["x"] },
            { metin: "Hepsini ayrana: 80 ÷ 10 = 8 ayran.", goster: ["y"] },
            { metin: "İki ucu birleştir: *budget line*.", goster: ["bl"] },
            { metin: "Doğru üstü: 3 tost + 2 ayran, tam 80 lira.", goster: ["on"] },
            { metin: "İçi: 20 lira artar. Dışı: 120 lira, yetmez.", goster: ["in", "out"] },
            { metin: "Eğim = Ptost ÷ Payran = 20 ÷ 10 = 2: bir tost için 2 ayrandan vazgeçersin.", goster: ["sh", "sv"] }
          ] }
      ]
    },
    {
      baslik: "Lira başına marjinal fayda",
      kisa: "Mallar lira başına faydaya göre karşılaştırılır, ham faydaya göre değil.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪙", terim: "Marginal utility per dollar", tr: "lira başına marjinal fayda (MU ÷ P)", tanim: "Bir malın ek faydası bölü fiyatı. Fiyatı farklı mallar ancak böyle karşılaştırılır.", ornek: "İlk tost 80 ÷ 20 = lira başına 4 util." }
          ] },
        { tip: "ornek", baslik: "İlk tost mu, ilk ayran mı?", durum: "İlk tost sana 80 util, ilk ayran 30 util veriyor. Tost 20 lira, ayran 10 lira. Hangisi lira başına daha çok fayda verir?",
          adimlar: ["Tost: 80 ÷ 20 = 4 util/lira.", "Ayran: 30 ÷ 10 = 3 util/lira.", "4 > 3."],
          sonuc: "Bu turu tost kazandı: ==4 > 3==. Ham faydaya (80 > 30) bakmak, tostun iki kat pahalı olduğunu görmezden gelirdi." },
        { tip: "tuzak", metin: "Tostun faydası 80, ayranınki 30; hemen tosta koşmak kolay. Ama fiyat da hesapta olmalı.", yanlis: "MU'su büyük olan malı al.", dogru: "MU'su değil, ==MU ÷ P=='si büyük olan malı al." }
      ]
    },
    {
      baslik: "MU ÷ P tablosu ve adım adım seçim",
      kisa: "Her adımda lira başına en çok fayda veren birimi al, para bitene kadar.",
      bloklar: [
        { tip: "tablo", baslik: "Tost 20 lira, ayran 10 lira", head: ["Birim", "MU tost", "MU ÷ P tost", "MU ayran", "MU ÷ P ayran"],
          rows: [["1", "80", "4", "30", "3"], ["2", "60", "3", "20", "2"], ["3", "40", "2", "10", "1"], ["4", "20", "1", "5", "0,5"]],
          not: "İki MU sütunu da azalıyor: *law of diminishing marginal utility* burada da iş başında." },
        { tip: "adimlar", baslik: "80 lirayı harcama sırası", adimlar: [
            { baslik: "1. adım: en yüksek 4", metin: "İlk tost. 20 lira gitti, 60 kaldı." },
            { baslik: "2. adım: iki tane 3", metin: "İkinci tost ve ilk ayran eşit; ikisini de al. 30 lira gitti, 30 kaldı." },
            { baslik: "3. adım: iki tane 2", metin: "Üçüncü tost ve ikinci ayran: 20 + 10 = 30 lira. Para bitti." }
          ] },
        { tip: "tuzak", metin: "İki seçenek tam eşit çıkınca birini seçip öbürünü bırakmak gerekmez.", yanlis: "MU ÷ P eşitse yalnızca birini alırım.", dogru: "Eşitlik varsa iki malı birden al (tablo sorularında sık)." }
      ]
    },
    {
      baslik: "Toplam fayda kontrolü",
      kisa: "3 tost + 2 ayran 230 util verir; bütçedeki hiçbir karışım bunu geçmez.",
      bloklar: [
        { tip: "ornek", baslik: "Seçimimiz gerçekten en iyisi mi?", durum: "Seçim: 3 tost + 2 ayran (60 + 20 = 80 lira). Aynı bütçedeki başka karışımlarla toplam utility'yi karşılaştır.",
          adimlar: ["3 tost + 2 ayran: 80 + 60 + 40 + 30 + 20 = 230 util.", "4 tost + 0 ayran: 80 + 60 + 40 + 20 = 200 util.", "2 tost + 4 ayran: 140 + 30 + 20 + 10 + 5 = 205 util.", "Daha çok ayranlı karışımlar daha da geride kalır; ayranın 5. ve sonraki birimleri en fazla 5 util verir."],
          sonuc: "==230 util== en yüksek; 230'u geçen karışım yok." },
        { tip: "grafik", baslik: "Budget line üzerindeki karışımlar", xlabel: "Tost", ylabel: "Ayran", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "1" }, { v: 4, label: "2" }, { v: 6, label: "3" }, { v: 8, label: "4" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "bl", tip: "cizgi", renk: 0, from: [0, 8], to: [8, 0], etiket: "Budget line" },
            { id: "a", tip: "nokta", renk: 3, x: 8, y: 0, etiket: "4 + 0 → 200", gizli: true },
            { id: "b", tip: "nokta", renk: 2, x: 4, y: 4, etiket: "2 + 4 → 205", gizli: true },
            { id: "c", tip: "nokta", renk: 1, x: 6, y: 2, etiket: "3 + 2 → 230", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Bütün parayı tosta verirsen toplam fayda 200 util.", goster: ["a"] },
            { metin: "2 tost + 4 ayran: 205 util.", goster: ["b"] },
            { metin: "3 tost + 2 ayran: 230 util, en yüksek toplam fayda.", goster: ["c"] }
          ] }
      ]
    },
    {
      baslik: "*Utility-maximizing rule* ve *consumer equilibrium*",
      kisa: "Lira başına faydalar eşitse ve para bittiyse toplam fayda en yüksektir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Utility-maximizing rule", tr: "fayda maksimizasyonu kuralı", tanim: "MUx ÷ Px = MUy ÷ Py ve bütün gelir harcanmışsa toplam fayda en büyüktür.", ornek: "Son tost 40 ÷ 20 = 2; son ayran 20 ÷ 10 = 2." },
            { ikon: "⚖️", terim: "Consumer equilibrium", tr: "tüketici dengesi", tanim: "Kuralın sağlandığı durum: bir lirayı bir maldan öbürüne kaydırmak toplam faydayı artırmaz.", ornek: "3 tost + 2 ayran noktası." }
          ] },
        { tip: "formul", parcalar: [
            { t: "MUx ÷ Px", alt: "tost: 40 ÷ 20 = 2" }, "=",
            { t: "MUy ÷ Py", alt: "ayran: 20 ÷ 10 = 2" }, "+",
            { t: "Gelirin tamamı harcanmış", alt: "60 + 20 = 80 lira" }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Denge", maddeler: ["MU ÷ P eşit", "Gelirin tamamı harcanmış"] },
          sag: { ikon: "❌", baslik: "Denge değil", maddeler: ["MU ÷ P eşit değil", "ya da para artmış"] },
          oyun: [
            { metin: "3 tost + 2 ayran: 40 ÷ 20 = 20 ÷ 10 ve 80 lira harcandı.", cevap: "sol", neden: "İki koşul da sağlanıyor." },
            { metin: "4 tost, 0 ayran: son tost lira başına 1, ilk ayran lira başına 3.", cevap: "sag", neden: "MU ÷ P eşit değil." },
            { metin: "2 tost + 2 ayran: 60 lira harcandı, 20 lira cepte kaldı.", cevap: "sag", neden: "Gelirin tamamı harcanmamış." },
            { metin: "MU ÷ P'ler eşit ama gelirin bir kısmı harcanmamış.", cevap: "sag", neden: "Yalnız bir koşul yetmez." }
          ] },
        { tip: "tuzak", metin: "Kuralın iki koşulu var. Yalnızca birini sağlayan karışım optimum değildir.", yanlis: "MU ÷ P'ler eşitse optimumdayım.", dogru: "MU ÷ P eşitliği ==ve== gelirin tamamen harcanması gerekir." }
      ]
    },
    {
      baslik: "Eşit değilse ne yapılır?",
      kisa: "Lira başına faydası yüksek maldan daha çok, düşükten daha az al.",
      bloklar: [
        { tip: "ornek", baslik: "4 tostla başladıysan", durum: "Bütün parayı tosta verdin: 4 tost, 0 ayran, 200 util. Son tost lira başına 1, ilk ayran lira başına 3 util veriyor. Ne yapmalısın?",
          adimlar: ["Bir tostu bırak: 20 util kaybedersin, 20 lira boşalır.", "20 liraya 2 ayran al: 30 + 20 = 50 util kazanırsın.", "Net: 200 − 20 + 50 = 230 util."],
          sonuc: "Toplam fayda 200 → ==230==: lira başına faydası yüksek olandan daha çok, düşük olandan daha az al." },
        { tip: "formul", parcalar: [
            { t: "MUx ÷ Px", alt: "yüksekse" }, ">",
            { t: "MUy ÷ Py", alt: "düşükse" }, "→",
            { t: "Daha çok X, daha az Y", alt: "ikisi eşitlenene kadar" }
          ] },
        { tip: "adimlar", baslik: "Fiyat her zaman lira olmaz: lunapark", adimlar: [
            { baslik: "Bilekliği bir kez aldın", metin: "Oyunlar bedava gibi; ama her oyunun bir bedeli var: kuyrukta beklediğin dakika." },
            { baslik: "Ek faydayı bekleme süresine böl", metin: "Hızlı tren: 120 ÷ 60 dk = 2. Dönme dolap: 30 ÷ 10 dk = 3." },
            { baslik: "Aynı kural", metin: "Dakika başına faydası yüksek olan dönme dolaba geç." }
          ] }
      ]
    },
    {
      baslik: "Fiyat düşünce: talep yasası",
      kisa: "Fiyat düşünce lira başına fayda artar ve daha çok alınır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📉", terim: "Law of demand", tr: "talep yasası", tanim: "Diğer her şey sabitken fiyat düşünce talep edilen miktar artar.", ornek: "Tost 20 liradan 10 liraya inince daha çok tost alınır." }
          ] },
        { tip: "tablo", baslik: "Tost 20 liradan 10 liraya inince lira başına fayda", head: ["Tost", "MU", "MU ÷ P (20 ₺)", "MU ÷ P (10 ₺)"],
          rows: [["1", "80", "4", "8"], ["2", "60", "3", "6"], ["3", "40", "2", "4"], ["4", "20", "1", "2"]],
          not: "Fiyat yarıya inince her tostun lira başına faydası iki katına çıkar; tosta daha çok lira akar." },
        { tip: "grafik", baslik: "Budget line döner (1 tost = 1 birim)", xlabel: "Tost", ylabel: "Ayran", xmax: 10, ymax: 10,
          xticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }], yticks: [{ v: 8, label: "8" }],
          ogeler: [
            { id: "old", tip: "cizgi", renk: 0, kesik: true, from: [0, 8], to: [4, 0], etiket: "20 ₺" },
            { id: "new", tip: "cizgi", renk: 1, from: [0, 8], to: [8, 0], etiket: "10 ₺", gizli: true },
            { id: "ar", tip: "ok", renk: 1, from: [4, 0.6], to: [8, 0.6], gizli: true }
          ],
          durumlar: [
            { metin: "Tost 20 lirayken: aynı 80 lirayla en fazla 4 tost." },
            { metin: "Tost 10 liraya inince doğru dönüyor: 8 tost alınabilir.", goster: ["new", "ar"] }
          ] },
        { tip: "grafik", baslik: "Talep: fiyat düştü, miktar arttı", xlabel: "Tost miktarı", ylabel: "Fiyat (₺)", xmax: 6, ymax: 30,
          xticks: [{ v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }],
          ogeler: [
            { id: "d", tip: "cizgi", renk: 0, from: [3, 20], to: [4, 10], etiket: "D", gizli: true },
            { id: "p1", tip: "nokta", renk: 3, x: 3, y: 20, etiket: "20 ₺ → 3 tost", kilavuz: true },
            { id: "p2", tip: "nokta", renk: 1, x: 4, y: 10, etiket: "10 ₺ → 4+ tost", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "20 liradayken 3 tost alındı." },
            { metin: "Fiyat 10 liraya düştü: en az 4 tost. Talep yasası.", goster: ["p2", "d"] }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Budget constraint*: gelir ve fiyatlar neyi alabileceğini sınırlar; *budget line* tüketicinin *PPC*'sidir, eğimi fiyat oranıdır.",
            "Ham MU'yu değil, lira başına ek faydayı (MU ÷ P) karşılaştır.",
            "Her adımda MU ÷ P'si en yüksek birimi al; eşitlerse ikisini de al, para bitene kadar.",
            "Örnek: 80 lira, tost 20, ayran 10 → 3 tost + 2 ayran, toplam 230 util.",
            "*Utility-maximizing rule*: MUx ÷ Px = MUy ÷ Py ve gelirin tamamı harcanmış.",
            "*Consumer equilibrium*: bir lirayı kaydırmak toplam faydayı artırmaz.",
            "Eşit değilse MU ÷ P'si yüksek olandan daha çok al.",
            "Fiyat düşünce MU ÷ P artar, daha çok alınır: *law of demand*."
          ] }
      ]
    }
  ]
};
