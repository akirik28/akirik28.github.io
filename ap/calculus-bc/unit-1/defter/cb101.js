/* Kitpath not defteri · cb101 · 1.1–1.2 Limit Nedir?
   Kaynak: ap-videolar/src/episodes/cb101 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb101",
  amac: "Bu konu *limit* fikrini anlatıyor: bir değere ulaşmadan ona yaklaşmak. Ortalama hızdan anlık hıza nasıl geçildiğini, limitin nasıl okunduğunu ve neden fonksiyonun o noktadaki değerinden farklı olduğunu öğreneceksin.",
  bolumler: [
    {
      baslik: "Anlık hız: ortalama hızlardan gelir",
      kisa: "Anlık hız, giderek küçülen aralıklardaki ortalama hızların gittiği sayıdır.",
      bloklar: [
        { tip: "hikaye", ikon: "📱", baslik: "Balkondan düşen telefon",
          metin: "Telefonun düşerken tam 1. saniyede bir kare yakalandı. Telefon o anda ne kadar hızlıydı? Tek karede yol 0, zaman 0; hız = yol / zaman, yani ==0/0==. Bütün kalkülüsü başlatan bu soruya verilen cevabın adı *limit*." },
        { tip: "tablo", baslik: "Düşen cisim: s(t) = 5t² metre", head: ["Aralık", "Ortalama hız (m/s)"],
          rows: [["[1; 2]", "15"], ["[1; 1,1]", "10,5"], ["[1; 1,01]", "10,05"], ["[1; 1,001]", "10,005"]], vurgu: 3,
          not: "Aralık küçüldükçe sayılar 10'a yaklaşıyor: t = 1 anındaki anlık hız ==10 m/s==. İlk satır: (20 − 5) / (2 − 1) = 15." },
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Average rate of change", tr: "ortalama değişim hızı", tanim: "[a, b] aralığında (f(b) − f(a)) / (b − a). İki an arasındaki ortalama değişimdir.", ornek: "s(t) = 5t² için [1, 2] aralığında 15 m/s." },
            { ikon: "⚡", terim: "Instantaneous rate of change", tr: "anlık değişim hızı", tanim: "Aralık sıfıra küçülürken ortalama değişimin limitidir.", ornek: "t = 1 anında telefonun hızı 10 m/s." }
          ] }
      ]
    },
    {
      baslik: "Sekant doğrudan teğete",
      kisa: "Sekantın eğimi ortalama hızdır; teğetin eğimi anlık hızdır.",
      bloklar: [
        { tip: "grafik", baslik: "s = 5t² eğrisinde P = (1, 5) noktasından Q'ya doğru", xlabel: "t (s)", ylabel: "s (m)", xmax: 3, ymax: 22,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }], yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 15, label: "15" }, { v: 20, label: "20" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, noktalar: [[0, 0], [0.25, 0.313], [0.5, 1.25], [0.75, 2.813], [1, 5], [1.25, 7.813], [1.5, 11.25], [1.75, 15.313], [2, 20]] },
            { id: "p", tip: "nokta", x: 1, y: 5, etiket: "P", renk: 0 },
            { id: "sek", tip: "cizgi", renk: 2, from: [0.8, 2], to: [2, 20], gizli: true },
            { id: "q", tip: "nokta", x: 2, y: 20, etiket: "Q", renk: 2, gizli: true },
            { id: "m", tip: "yazi", x: 0.15, y: 19, metin: "eğim = 15", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Eğri s = 5t². P = (1, 5) noktasında anlık hızı arıyoruz." },
            { metin: "Q = (2, 20): P ile Q'yu birleştiren **sekant**in eğimi 15, yani ortalama hız.", goster: ["sek", "q", "m"] },
            { metin: "Q = (1,5; 11,25) olunca eğim 12,5.", set: { sek: { from: [0.8, 2.5], to: [2, 17.5] }, q: { x: 1.5, y: 11.25 }, m: { metin: "eğim = 12,5" } } },
            { metin: "Q = (1,1; 6,05): eğim 10,5.", set: { sek: { from: [0.8, 2.9], to: [2, 15.5] }, q: { x: 1.1, y: 6.05 }, m: { metin: "eğim = 10,5" } } },
            { metin: "Q = (1,01; 5,1005): eğim 10,05. Doğru artık eğriye yapışıyor.", set: { sek: { from: [0.8, 2.99], to: [2, 15.05] }, q: { x: 1.01, y: 5.1005 }, m: { metin: "eğim = 10,05" } } },
            { metin: "Sınırda doğru P'deki **teğet**e oturur: eğimi ==10==.", set: { sek: { from: [0.8, 3], to: [2, 15] }, m: { metin: "teğet: eğim = 10" } }, gizle: ["q"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "✂️", terim: "Secant line", tr: "sekant (kesen) doğru", tanim: "Eğrinin iki noktasından geçen doğru. Eğimi ortalama değişim hızıdır.", ornek: "P = (1, 5) ve Q = (2, 20) arasındaki doğrunun eğimi 15." },
            { ikon: "🎯", terim: "Tangent line", tr: "teğet doğru", tanim: "Sekant doğruların, ikinci nokta P'ye yaklaşırken oturduğu sınır doğru. Eğimi anlık değişim hızıdır (türev, Unit 2).", ornek: "P = (1, 5) noktasındaki teğetin eğimi 10." }
          ] }
      ]
    },
    {
      baslik: "Delikli fonksiyon ve limit",
      kisa: "Limit, x'in yaklaştığı yerde f(x)'in gittiği gerçel sayıdır.",
      bloklar: [
        { tip: "grafik", baslik: "f(x) = (x² − 9) / (x − 3): x = 3'te tanımsız", xlabel: "x", ylabel: "f(x)", xmax: 6, ymax: 9,
          xticks: [{ v: 3, label: "3" }], yticks: [{ v: 6, label: "6" }],
          ogeler: [
            { id: "d", tip: "cizgi", renk: 0, from: [0, 3], to: [6, 9] },
            { id: "h", tip: "yazi", x: 3, y: 5.8, metin: "○" },
            { id: "L", tip: "nokta", x: 1, y: 4, renk: 1, etiket: "soldan", kilavuz: true, gizli: true },
            { id: "R", tip: "nokta", x: 5, y: 8, renk: 2, etiket: "sağdan", kilavuz: true, gizli: true },
            { id: "y6", tip: "cizgi", renk: 3, kesik: true, from: [0, 6], to: [3, 6], gizli: true },
            { id: "lim", tip: "yazi", x: 0.2, y: 6.5, metin: "limit = 6", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "x = 3 koyunca 0/0: f(3) tanımsız. Ama x ≠ 3 için pay (x − 3)(x + 3) ile sadeleşir ve grafik y = x + 3 doğrusu olur, 3'te küçük bir ==delik== ile." },
            { metin: "Noktayı iki yandan deliğe doğru kaydır: soldan x = 1'den, sağdan x = 5'ten başla.", goster: ["L", "R"] },
            { metin: "Soldan x = 2,9 → f = 5,9. Sağdan x = 3,1 → f = 6,1.", set: { L: { x: 2.9, y: 5.9, etiket: "" }, R: { x: 3.1, y: 6.1, etiket: "" } } },
            { metin: "Soldan 2,99 → 5,99. Sağdan 3,01 → 6,01. Değerler 6'ya sıkışıyor.", set: { L: { x: 2.99, y: 5.99 }, R: { x: 3.01, y: 6.01 } } },
            { metin: "İki yandan da deliğe, 6'ya gidiyor: x → 3 iken ==limit 6==.", goster: ["y6", "lim"] }
          ] },
        { tip: "tablo", baslik: "Her iki yandan tablo", head: ["x", "2,9", "2,99", "2,999", "3", "3,001", "3,01", "3,1"],
          rows: [["f(x)", "5,9", "5,99", "5,999", "tanımsız", "6,001", "6,01", "6,1"]], not: "Soldan da sağdan da değerler 6'ya yaklaşıyor." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Limit", tr: "limit", tanim: "lim(x→3) f(x) = 6: x'i 3'e yeterince yakın (ama 3'e eşit olmayan) seçersen f(x)'i 6'ya istediğin kadar yaklaştırırsın. Limit bir **gerçel sayıdır**.", ornek: "lim(x→3) (x² − 9)/(x − 3) = 6" },
            { ikon: "🕳️", terim: "Hole", tr: "delik", tanim: "Grafikte tek bir noktanın eksik olduğu yer: çevredeki değerler o noktaya gider ama grafik o noktadan geçmez (f(c) tanımsız ya da başka yerde olabilir). Limiti engellemez.", ornek: "(3, 6) noktasında açık daire." },
            { ikon: "🎭", terim: "Indeterminate form 0/0", tr: "belirsiz biçim 0/0", tanim: "Yerine koyunca çıkan 0/0 bir cevap değil, bir ipucudur: altında limit saklı olabilir.", ornek: "x = 3 koyunca 0/0 çıktı; sadeleştirince limit 6." }
          ] },
        { tip: "tuzak", metin: "0/0 gördüğünde durma. Sadeleştir ve yeniden bak; yerine koymanın sonucu 0/0 ise limit hakkında henüz hiçbir şey bilmiyorsun.", yanlis: "0/0 çıktı, o halde limit yok (ya da limit 0).", dogru: "0/0 bir *indeterminate form*; çalışmaya devam etme işareti." }
      ]
    },
    {
      baslik: "Limit, fonksiyonun değeri değildir",
      kisa: "Limit yaklaşılan yeri, f(c) o noktadaki gerçek değeri söyler.",
      bloklar: [
        { tip: "grafik", baslik: "Üç fonksiyon, aynı doğru, aynı limit: x → 3", xlabel: "x", ylabel: "y", xmax: 6, ymax: 9,
          xticks: [{ v: 3, label: "3" }], yticks: [{ v: 2, label: "2" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "d", tip: "cizgi", renk: 0, from: [0, 3], to: [6, 9] },
            { id: "h", tip: "yazi", x: 3, y: 5.8, metin: "○" },
            { id: "g", tip: "nokta", x: 3, y: 2, renk: 2, etiket: "g(3) = 2", kilavuz: true, gizli: true },
            { id: "y6", tip: "cizgi", renk: 3, kesik: true, from: [0, 6], to: [3, 6] }
          ],
          durumlar: [
            { metin: "**f**: x = 3'te delik var, f(3) tanımsız. Limit 6." },
            { metin: "**g**: delik duruyor ama ayrı bir dolu nokta aşağıda: g(3) = 2. Limit yine 6.", goster: ["g"] },
            { metin: "**h**: delik dolu, h(3) = 6. Üçünün de limiti 6; değerleri ise tanımsız, 2 ve 6.", set: { g: { y: 6, etiket: "h(3) = 6" } }, gizle: ["h"] }
          ] },
        { tip: "ikili", sol: { ikon: "🧭", baslik: "*Limit*", maddeler: ["x → c iken f(x)'in gittiği yer", "f(c) tanımsız bile olabilir"] },
          sag: { ikon: "📍", baslik: "Değer f(c)", maddeler: ["x tam c iken fonksiyonun değeri", "Grafikte dolu noktanın yüksekliği"] },
          oyun: [
            { metin: "Grafikte deliğin yüksekliği.", cevap: "sol", neden: "Delik, yaklaşılan yeri gösterir: limit." },
            { metin: "x = 3'teki dolu noktanın yüksekliği (2).", cevap: "sag", neden: "Gerçek değer f(3); limiti değiştirmez." },
            { metin: "Fonksiyon c'de tanımsız olsa da var olabilir.", cevap: "sol", neden: "Limit c'deki değere bakmaz." },
            { metin: "f(c)'yi bulmak için c'yi tanıma koyarsın.", cevap: "sag", neden: "Değer tanımdan okunur." }
          ] },
        { tip: "tuzak", metin: "Üç grafikte de limit 6 ama değerler farklı. Limit sorusunda dolu noktanın yüksekliğine değil, çevrenin gittiği yere bak.", yanlis: "Dolu nokta 2'de, o halde limit 2.", dogru: "Limit f(c)'ye eşit olmak zorunda değil; f(c) tanımsız ya da farklı olabilir." }
      ]
    },
    {
      baslik: "Soldan ve sağdan limit",
      kisa: "İki taraf aynı gerçel sayıya gidiyorsa limit vardır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "lim x→c⁻ f(x)", alt: "soldan" }, "=",
            { t: "lim x→c⁺ f(x)", alt: "sağdan" }, "=",
            { t: "L", alt: "ortak gerçel sayı" }
          ], aciklama: "Bu durumda lim x→c f(x) = L vardır. İki taraf farklı yerlere giderse ne olur? Bir sonraki bölümde grafiklerle göreceğiz." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⬅️", terim: "Left-hand limit", tr: "soldan limit", tanim: "Yalnızca c'den küçük x'lerle yaklaşma; c'nin üstüne küçük bir eksi konur: x → c⁻.", ornek: "x = 2,9; 2,99; 2,999 … 3'e soldan yaklaşır." },
            { ikon: "➡️", terim: "Right-hand limit", tr: "sağdan limit", tanim: "Yalnızca c'den büyük x'lerle yaklaşma; üstte artı: x → c⁺.", ornek: "x = 3,1; 3,01; 3,001 … 3'e sağdan yaklaşır." },
            { ikon: "↔️", terim: "One-sided limit", tr: "tek taraflı limit", tanim: "Soldan ve sağdan limitin ortak adı.", ornek: "lim x→3⁻ f(x) = 6 ve lim x→3⁺ f(x) = 6" }
          ] },
        { tip: "tuzak", metin: "Limit bir gerçel sayıdır. Değerler sınırsız büyüyorsa \"limit = ∞\" yazılabilir ama ∞ bir sayı olmadığı için limit yine de var değildir (ayrıntı: Bölüm 8).", yanlis: "\"Limit = ∞\" yazdım, o halde limit var.", dogru: "∞ yazmak büyüme davranışını anlatır; limit gerçel bir sayı değilse yoktur." }
      ]
    },
    {
      baslik: "AP örnekleri: limiti yaz ve hesapla",
      kisa: "Anlık hız sorusu h → 0 limitidir; 0/0 çıkarsa sadeleştir.",
      bloklar: [
        { tip: "ornek", baslik: "t = 1'deki anlık hızı hangi limit verir? s(t) = 5t²", durum: "Ortalama hız: (s(1 + h) − s(1)) / h. Limitini al, h → 0.",
          adimlar: [
            "s(1 + h) = 5(1 + h)² = 5 + 10h + 5h²; s(1) = 5.",
            "Pay: s(1 + h) − s(1) = 10h + 5h².",
            "h ≠ 0 olduğu için h'ye bölünür: (10h + 5h²) / h = 10 + 5h.",
            "h → 0 iken 10 + 5h → 10. Tablodaki 10,5 ve 10,05 de bunu söylüyordu."
          ],
          sonuc: "v(1) = lim h→0 (s(1 + h) − s(1)) / h = ==10 m/s==. AP bu biçimi sık sorar; Unit 2'de adı türev." },
        { tip: "ornek", baslik: "g(x) = (x² − 4)/(x − 2) (x ≠ 2), g(2) = 1", durum: "x → 2 iken limiti ve g(2) değerini bul.",
          adimlar: [
            "Yerine koy: (4 − 4)/(2 − 2) = 0/0. Delik saklı demek.",
            "Pay (x − 2)(x + 2); x ≠ 2 olduğu için sadeleşir: g(x) = x + 2.",
            "x → 2 iken x + 2 → 4: limit 4.",
            "Değer ise tanımdan okunur: g(2) = 1."
          ],
          sonuc: "Limit = ==4==, g(2) = ==1==. İkisi farklı olabilir ve bu normaldir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Limit yaklaşılan yeri söyler; ortalamadan anlığa köprü budur.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kalkülüs anlık değişimi sorar; küçülen aralıklardaki ortalama hızların gittiği yer anlık hızdır.",
            "Sekantın eğimi ortalama değişim, teğetin eğimi anlık değişimdir.",
            "Limit: x c'ye yaklaşırken (x ≠ c) f(x)'in yaklaştığı gerçel sayı. Yaklaşılır ama c'ye varılmaz.",
            "Limit f(c)'ye eşit olmak zorunda değil; f(c) tanımsız ya da farklı olabilir.",
            "Soldan ve sağdan limit aynı gerçel sayıysa limit vardır.",
            "0/0 bir cevap değil bir ipucu: sadeleştir ve yeniden bak.",
            "∞ bir sayı değil; \"limit = ∞\" yazılsa da limit var değildir.",
            "AP'de anlık hız: lim h→0 (f(a + h) − f(a)) / h."
          ] }
      ]
    }
  ]
};
