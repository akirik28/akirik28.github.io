/* Kitpath not defteri · mi103 · 1.6-1 Marjinal Analiz ve Fayda
   Kaynak: ap-videolar/src/episodes/mi103 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mi103",
  amac: "Bu konu *marginal analysis* yani marjinal analizi anlatıyor: kararlar toplama değil, bir sonraki birimin ek faydasına ve ek maliyetine bakılarak verilir. *Utility*, azalan marjinal fayda ve \"marginal benefit = marginal cost\" kuralını öğreneceksin.",
  bolumler: [
    {
      baslik: "*Marginal*: toplama değil, ek olana bak",
      kisa: "Marjinal ek demektir; karar bir sonraki birime bakılarak verilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➕", terim: "Marginal", tr: "ek, bir birim daha", tanim: "\"Bir tane daha\" demektir.", ornek: "Pizzada üçüncü dilim." },
            { ikon: "🔎", terim: "Marginal analysis", tr: "marjinal analiz", tanim: "Kararı toplamlara değil, bir sonraki birimin ek faydasına ve ek maliyetine bakarak vermek.", ornek: "Bir dilim daha, fiyatından fazla mutluluk veriyorsa ye; vermiyorsa dur." }
          ] },
        { tip: "harita", merkez: "*Marginal analysis*", dallar: [
            { baslik: "Firma", alt: "Kaç birim daha üretmeli?" },
            { baslik: "İşveren", alt: "Kaç işçi daha almalı?" },
            { baslik: "Şehir", alt: "Havayı ne kadar daha temizlemeli?" },
            { baslik: "Tüketici", alt: "Bir dilim daha yemeli mi?" }
          ] }
      ]
    },
    {
      baslik: "*Utility*: toplam ve marjinal fayda",
      kisa: "Marjinal fayda, toplam faydadaki değişimdir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "😊", terim: "Utility", tr: "fayda", tanim: "Bir maldan aldığın tatmin. Kişiye göre değişir.", ornek: "Çay tiryakisi bir arkadaşın aynı bardaktan iki kat fazla tatmin alabilir." },
            { ikon: "🪙", terim: "Util", tr: "fayda birimi", tanim: "*Utility*'nin hayali ölçü birimi; mutluluk puanı gibi düşün.", ornek: "İlk çay bardağı 20 util." },
            { ikon: "🧮", terim: "Total utility", tr: "toplam fayda", tanim: "Tüketilen bütün birimlerden alınan toplam tatmin.", ornek: "İki bardak çayda toplam 35 util." },
            { ikon: "📈", terim: "Marginal utility", tr: "marjinal fayda", tanim: "Bir birim daha tüketince *total utility*'deki değişim.", ornek: "İkinci bardak 35 − 20 = 15 util katar." }
          ] },
        { tip: "formul", parcalar: [
            { t: "*Marginal utility* (MU)" }, "=",
            { t: "ΔTU", alt: "toplam faydadaki değişim" }, "÷",
            { t: "ΔQ", alt: "miktardaki değişim" }
          ], aciklama: "Birer birim artarsa MU, iki toplam arasındaki farktır." },
        { tip: "tablo", baslik: "Sınav haftası, çay bardakları", head: ["Bardak", "Total utility", "Marginal utility"],
          rows: [["1", "20", "20 (20 − 0)"], ["2", "35", "15 (35 − 20)"], ["3", "45", "10 (45 − 35)"], ["4", "50", "5 (50 − 45)"], ["5", "50", "0 (50 − 50)"], ["6", "45", "−5 (45 − 50)"]], vurgu: 4,
          not: "Total utility: 20, 35, 45, 50, 50, 45. Marginal utility her satırda bir öncekiyle olan fark." },
        { tip: "tuzak", metin: "MU'yu tablodaki toplam sütunuyla karıştırma. Üçüncü bardağın MU'su 45 değil, 45 − 35 = 10'dur.", yanlis: "*Marginal utility* toplam faydadır.", dogru: "*Marginal utility* = iki toplam arasındaki fark." }
      ]
    },
    {
      baslik: "Azalan marjinal fayda yasası",
      kisa: "Aynı maldan tükettikçe ek fayda azalır; MU sıfırken toplam zirvededir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📉", terim: "Law of diminishing marginal utility", tr: "azalan marjinal fayda yasası", tanim: "Aynı maldan tükettikçe ek birimlerin faydası eninde sonunda azalır. MU = 0 iken toplam fayda en yüksektir; MU negatifse toplam düşer.", ornek: "Çayda MU: 20, 15, 10, 5, 0, −5; mide bulanmaya başlar." }
          ] },
        { tip: "grafik", baslik: "Total utility: yükselir, düzleşir, düşer", xlabel: "Çay bardağı", ylabel: "Total utility", xmax: 7, ymax: 55,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          yticks: [{ v: 20, label: "20" }, { v: 35, label: "35" }, { v: 45, label: "45" }, { v: 50, label: "50" }],
          ogeler: [
            { id: "tu", tip: "egri", renk: 0, noktalar: [[1, 20], [2, 35], [3, 45], [4, 50], [5, 50], [6, 45]], etiket: "TU" },
            { id: "p4", tip: "nokta", renk: 1, x: 4, y: 50, etiket: "MU 5", kilavuz: true, gizli: true },
            { id: "p5", tip: "nokta", renk: 2, x: 5, y: 50, etiket: "MU 0: zirve", kilavuz: true, gizli: true },
            { id: "p6", tip: "nokta", renk: 3, x: 6, y: 45, etiket: "MU −5", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Her bardak toplamı artırır ama gittikçe daha az." },
            { metin: "Dördüncü bardak hâlâ 5 util katıyor: toplam artıyor.", goster: ["p4"] },
            { metin: "Beşinci bardak 0 util katar; toplam 50'de kaldı. Bu zirve.", goster: ["p5"] },
            { metin: "Altıncı bardak −5: mide bulanıyor, toplam 45'e düşer.", goster: ["p6"] }
          ] },
        { tip: "grafik", baslik: "Marginal utility: sürekli iner (sıfır çizgisi y = 6)", xlabel: "Çay bardağı", ylabel: "Marginal utility", xmax: 7, ymax: 27,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          yticks: [{ v: 1, label: "−5" }, { v: 6, label: "0" }, { v: 11, label: "5" }, { v: 16, label: "10" }, { v: 21, label: "15" }, { v: 26, label: "20" }],
          ogeler: [
            { id: "z", tip: "cizgi", renk: 0, kesik: true, from: [0, 6], to: [7, 6] },
            { id: "mu", tip: "egri", renk: 1, noktalar: [[1, 26], [2, 21], [3, 16], [4, 11], [5, 6], [6, 1]], etiket: "MU" },
            { id: "m0", tip: "nokta", renk: 2, x: 5, y: 6, etiket: "MU = 0", kilavuz: true, gizli: true },
            { id: "mn", tip: "nokta", renk: 3, x: 6, y: 1, etiket: "MU < 0", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "MU 20, 15, 10, 5 diye iner: her bardak bir öncekinden daha az katar." },
            { metin: "MU sıfıra değdiği yerde TU en yüksek noktasındadır.", goster: ["m0"] },
            { metin: "MU negatife inince toplam faydanın düştüğünü gösterir.", goster: ["mn"] }
          ] },
        { tip: "tuzak", metin: "Ek fayda azalıyor diye toplamın da azaldığını sanırsın. Toplam, MU pozitif kaldığı sürece artar; yalnızca daha yavaş.", yanlis: "MU azalıyorsa *total utility* de azalır.", dogru: "MU azalırken TU artabilir; TU, ancak MU negatif olunca düşer." }
      ]
    },
    {
      baslik: "Elmas-su paradoksu",
      kisa: "Fiyatı toplam fayda değil, marjinal fayda belirler.",
      bloklar: [
        { tip: "hikaye", ikon: "💎", baslik: "Su hayati, elmas gereksiz; fiyatlar ters",
          metin: "Su olmadan üç gün yaşayamazsın, elmas olmadan bir ömür yaşarsın. Ama bir şişe su 10 lira, küçücük bir elmas yüz binlerce lira. Ekonomistleri yüz yıldan uzun süre uğraştıran bilmecenin cevabı tek kelime: ek." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Diamond-water paradox", tr: "elmas-su paradoksu", tanim: "Su hayati ama ucuz, elmas gereksiz ama pahalı. Çözüm: fiyat marjinal faydayı izler.", ornek: "Su çok bol olduğu için son bardağın ek faydası çok küçük; elmas az olduğu için bir tane daha çok değerli." }
          ] },
        { tip: "tablo", head: ["", "Toplam fayda", "Marjinal fayda", "Fiyat"],
          rows: [["Su (bol)", "Çok yüksek", "Çok düşük", "10 lira"], ["Elmas (az)", "Düşük", "Çok yüksek", "Yüz binlerce lira"]], vurgu: 1,
          not: "Fiyatlar, toplam faydaya değil marjinal faydaya yapışır." },
        { tip: "tuzak", metin: "Hayati olan şeyin pahalı olması gerektiğini düşünmek kolaydır.", yanlis: "Toplam faydası büyük olan mal pahalı olur.", dogru: "Fiyatı ==marjinal fayda== belirler: bol olan ucuz, az olan pahalıdır." }
      ]
    },
    {
      baslik: "*Marginal benefit* ve *marginal cost*",
      kisa: "Marginal benefit marginal cost'tan büyük olduğu sürece devam et.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🟢", terim: "Marginal benefit", tr: "marjinal fayda (MB)", tanim: "Bir birim daha yapmanın ek faydası.", ornek: "Fazla mesainin her saati sana 150 lira getirir." },
            { ikon: "🔴", terim: "Marginal cost", tr: "marjinal maliyet (MC)", tanim: "Bir birim daha yapmanın ek maliyeti.", ornek: "Her yeni saat daha yorucu: vazgeçtiğin boş vakit 60, 90, 120, 150, 180 lira." }
          ] },
        { tip: "grafik", baslik: "Fazla mesai: kaç saat çalışmalı?", xlabel: "Fazla mesai saati", ylabel: "TL / saat", xmax: 10, ymax: 7,
          xticks: [{ v: 2, label: "1" }, { v: 4, label: "2" }, { v: 6, label: "3" }, { v: 8, label: "4" }, { v: 10, label: "5" }],
          yticks: [{ v: 1, label: "30" }, { v: 2, label: "60" }, { v: 3, label: "90" }, { v: 4, label: "120" }, { v: 5, label: "150" }, { v: 6, label: "180" }],
          ogeler: [
            { id: "mb", tip: "cizgi", renk: 1, from: [0, 5], to: [10, 5], etiket: "MB = 150" },
            { id: "mc", tip: "cizgi", renk: 2, from: [0, 1], to: [10, 6], etiket: "MC", gizli: true },
            { id: "a1", tip: "nokta", renk: 1, x: 2, y: 2, etiket: "60", gizli: true },
            { id: "a2", tip: "nokta", renk: 1, x: 4, y: 3, etiket: "90", gizli: true },
            { id: "a3", tip: "nokta", renk: 1, x: 6, y: 4, etiket: "120", gizli: true },
            { id: "a4", tip: "nokta", renk: 0, x: 8, y: 5, etiket: "MB = MC: dur", kilavuz: true, gizli: true },
            { id: "a5", tip: "nokta", renk: 3, x: 10, y: 6, etiket: "180", gizli: true },
            { id: "nb", tip: "alan", renk: 1, noktalar: [[0, 1], [0, 5], [8, 5], [8, 5]], gizli: true }
          ],
          durumlar: [
            { metin: "Her ek saatin MB'si 150 lira: yatay çizgi." },
            { metin: "MC yükselir: 60, 90, 120. İlk üç saatte 150 > MC, çalış.", goster: ["mc", "a1", "a2", "a3"] },
            { metin: "Dördüncü saatte MB = MC = 150: en iyi nokta, 4 saat.", goster: ["a4"] },
            { metin: "Beşinci saat 150 getirir, 180 götürür: MC > MB.", goster: ["a5"] },
            { metin: "MB ile MC arasındaki yeşil alan toplam net faydadır.", goster: ["nb"] }
          ] }
      ]
    },
    {
      baslik: "Toplamlara değil, eke bak",
      kisa: "Net fayda, son birimde MB MC'ye eşitlenince en yüksektir.",
      bloklar: [
        { tip: "tablo", baslik: "Fazla mesai: toplamlar (MB = 150 her saat)", head: ["Saat", "Total benefit", "Total cost", "Net benefit"],
          rows: [["1", "150", "60", "90"], ["2", "300", "150", "150"], ["3", "450", "270", "180"], ["4", "600", "420", "180"], ["5", "750", "600", "150"]], vurgu: 3,
          not: "Total cost = MC'lerin toplamı: 60 + 90 + 120 + 150 = 420." },
        { tip: "ornek", baslik: "4 saat mi, 5 saat mi?", durum: "Her saatin MB'si 150 lira. MC'ler sırayla 60, 90, 120, 150, 180 lira. Kaç saat çalışmalısın?",
          adimlar: ["4 saatte total benefit 600, total cost 60 + 90 + 120 + 150 = 420; net 180.", "3 saatte de net 180: dördüncü saat ne kazandırdı ne kaybettirdi (MB = MC).", "5. saatte total benefit 750, total cost 600: fayda hâlâ maliyetten büyük ama net 150'ye düştü.", "5. saat: MB 150 − MC 180 = −30 lira."],
          sonuc: "==4 saat==: MB = MC olan yerde dur. Beşinci saat 30 lira kaybettirir." },
        { tip: "ikili", sol: { ikon: "🔎", baslik: "Marjinale bak", maddeler: ["Son birimin MB'si ve MC'si", "Doğru yöntem"] },
          sag: { ikon: "🧮", baslik: "Toplama bak", maddeler: ["Toplam fayda ve toplam maliyet", "Yanıltıcı"] },
          oyun: [
            { metin: "Beşinci saat 150 getiriyor ama 180'e mal oluyor, bırakırım.", cevap: "sol", neden: "Son birimde MB < MC." },
            { metin: "Toplam fayda 750, toplam maliyet 600; kârlıyım, devam.", cevap: "sag", neden: "Toplamlar net faydanın düştüğünü gizler." },
            { metin: "Üçüncü saatte MB 150, MC 120: bir saat daha çalışırım.", cevap: "sol", neden: "MB > MC: ek birim kazandırıyor." }
          ] },
        { tip: "tuzak", metin: "Tabloda MB = MC tam tutmuyorsa MB ≥ MC olan son birimde dur.", yanlis: "Toplam fayda toplam maliyetten büyükse devam et.", dogru: "Son birimde MB ile MC karşılaştırılır; MB < MC olunca dur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Marginal* ek demektir; kararlar bir sonraki birime bakılarak verilir.",
            "*Marginal utility* = *total utility*'deki değişimdir (MU = ΔTU ÷ ΔQ).",
            "*Law of diminishing marginal utility*: ek fayda azalır.",
            "MU = 0 iken *total utility* zirvede, MU negatifken düşer; MU azalırken TU artabilir.",
            "Fiyatı toplam fayda değil marjinal fayda belirler: su ucuz, elmas pahalı.",
            "*Marginal benefit* > *marginal cost* ise devam, MB = MC'de dur; MB < MC ise bırak.",
            "Fazla mesai örneği: 4 saatte net fayda 180; 5. saat −30.",
            "Toplamlara değil, son birimin MB ve MC'sine bak."
          ] }
      ]
    }
  ]
};
