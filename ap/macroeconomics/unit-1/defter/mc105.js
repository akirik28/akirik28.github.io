/* Kitora not defteri · mc105 · 1.3 Uzmanlaşma ve Ticaretten Kazanç
   Kaynak: ap-videolar/src/episodes/mc105 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mc105",
  amac: "Bu konu ülkelerin uzmanlaşıp hangi oranla takas ettiğini ve neden ikisinin de kazandığını anlatıyor. *Terms of trade* aralığını bulmayı, teklifleri değerlendirmeyi ve ticaretin tüketimi *PPC*'nin dışına çıkarıp *PPC*'yi kaydırmadığını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kantin takası: iki taraf da kazanır",
      kisa: "Gönüllü ticarette iki taraf da kazanır; ticaretin dört anahtar terimi var.",
      bloklar: [
        { tip: "hikaye", ikon: "🥪", baslik: "\"Sağ ol!\" \"Sağ ol!\"",
          metin: "Kantinde tostunu arkadaşının ayranıyla değiştiriyorsun; ikiniz de \"sağ ol\" diyorsunuz. Sen ayranı tosttan çok istiyordun, o da tostu. Takas ancak iki taraf da kazanınca olur; ülkeler de aynısını yapar." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🤝", terim: "Mutually beneficial trade", tr: "karşılıklı fayda sağlayan ticaret", tanim: "İki tarafın da kazandığı gönüllü takas. Biri kazanırken öbürü kaybetmez.", ornek: "Tost ile ayran takası: ikisi de memnun." },
            { ikon: "🎯", terim: "Specialization", tr: "uzmanlaşma", tanim: "Her şeyi kendin yapmak yerine yalnız *comparative advantage*'ı olan ürünü üretmek, gerisini takasla almak.", ornek: "Japonya yalnız telefon üretir." },
            { ikon: "🧮", terim: "Terms of trade", tr: "takas oranı", tanim: "İki ülkenin takas oranı (örneğin 1 tişört = ? telefon). Kazançlı olması için iki ülkenin *opportunity cost*'u arasında olmalı.", ornek: "1 tişört = 2 telefon." },
            { ikon: "📈", terim: "Gains from trade", tr: "ticaretten kazanç", tanim: "Uzmanlaşıp takas edince bir ülkenin kendi başına üretebileceğinden fazlasını tüketebilmesi (kendi *PPC*'sinin dışında).", ornek: "Japonya kendi başına 18 telefon tüketebilirken ticaretle 22 tüketir." }
          ] },
        { tip: "tuzak", baslik: "Ticaret sıfır toplamlı mı?", metin: "Biri kazanırken öbürü kaybeder sanmak yaygın bir yanılgıdır.", yanlis: "Ticarette bir ülke kazanıyorsa diğeri kaybeder.", dogru: "Gönüllü ticarette ==iki taraf da kazanır==; takas ancak iki taraf da kazanınca olur." }
      ]
    },
    {
      baslik: "Ticaret öncesi ve uzmanlaşma: dünya 8 telefon fazla üretir",
      kisa: "Herkes comparative advantage'ında uzmanlaşınca aynı kaynakla daha çok üretilir.",
      bloklar: [
        { tip: "tablo", baslik: "Bir günde üretilen miktar (output)", head: ["", "Telefon", "Tişört", "Fırsat maliyeti"], rows: [
            ["Japonya", "30", "10", "1 tişört = 3 telefon · 1 telefon = ⅓ tişört"],
            ["Türkiye", "8", "8", "1 tişört = 1 telefon · 1 telefon = 1 tişört"]
          ], not: "Telefonda *comparative advantage* Japonya'da, tişörtte Türkiye'de. İki PPC denklemi: Japonya telefon + 3 × tişört = 30; Türkiye telefon + tişört = 8." },
        { tip: "grafik", baslik: "İki ülke: ticaret öncesi ve uzmanlaşma", xlabel: "Telefon", ylabel: "Tişört", xmax: 32, ymax: 12,
          xticks: [{ v: 8, label: "8" }, { v: 18, label: "18" }, { v: 30, label: "30" }],
          yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "jp", tip: "cizgi", renk: 0, from: [0, 10], to: [30, 0], etiket: "Japonya PPC" },
            { id: "tr", tip: "cizgi", renk: 3, from: [0, 8], to: [8, 0], etiket: "Türkiye PPC" },
            { id: "JA", tip: "nokta", renk: 2, x: 18, y: 4, etiket: "A · 18 P + 4 T", kilavuz: true, gizli: true },
            { id: "JS", tip: "nokta", renk: 1, x: 30, y: 0, etiket: "S · 30 telefon", gizli: true },
            { id: "jok", tip: "ok", renk: 1, from: [19, 3.6], to: [29, 0.6], gizli: true },
            { id: "TA", tip: "nokta", renk: 2, x: 4, y: 4, etiket: "A · 4 P + 4 T", kilavuz: true, gizli: true },
            { id: "TS", tip: "nokta", renk: 1, x: 0, y: 8, etiket: "S · 8 tişört", gizli: true },
            { id: "tok", tip: "ok", renk: 1, from: [3.6, 4.4], to: [0.5, 7.5], gizli: true }
          ],
          durumlar: [
            { metin: "İki PPC: Japonya 30 telefon ya da 10 tişört; Türkiye 8 telefon ya da 8 tişört." },
            { metin: "Ticaretten önce Japonya kendi PPC'sinin üstünde: **18 telefon ve 4 tişört** (18 + 3 × 4 = 30).", goster: ["JA"] },
            { metin: "==*Specialization*==: Japonya yalnız *comparative advantage*'ı olan ürünü, telefonu üretir. Nokta köşeye zıplar: **30 telefon**, hiç tişört yok.", goster: ["JS", "jok"] },
            { metin: "Türkiye de eğrinin üstünde: **4 telefon ve 4 tişört** (4 + 4 = 8).", gizle: ["JA", "JS", "jok"], goster: ["TA"] },
            { metin: "Uzmanlaşınca Türkiye tişörte yönelir: **8 tişört**, hiç telefon yok.", goster: ["TS", "tok"] }
          ] },
        { tip: "tablo", baslik: "Dünya toplamı: ticaretten önce ve uzmanlaşınca", head: ["", "Telefon", "Tişört"], rows: [
            ["Ticaretten önce (Japonya 18 + 4, Türkiye 4 + 4)", "22", "8"],
            ["Uzmanlaşınca (Japonya 30, Türkiye 8 tişört)", "30", "8"],
            ["Fark", "+8 telefon", "0"]
          ], vurgu: 2, not: "Aynı kaynaklarla dünya **8 telefon fazla** üretti. Bu bonusu nasıl paylaşacaklar? Bunu **takas oranı** belirler." }
      ]
    },
    {
      baslik: "*Terms of trade*: iki duvar arası",
      kisa: "Kazançlı takas oranı, iki ülkenin fırsat maliyetinin tam arasındadır.",
      bloklar: [
        { tip: "grafik", baslik: "1 tişörtün fiyatı (telefon cinsinden)", xlabel: "1 tişört = ? telefon", ylabel: "", xmax: 4.5, ymax: 4,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [],
          ogeler: [
            { id: "sd", tip: "cizgi", renk: 0, from: [0, 2], to: [4.4, 2] },
            { id: "wj", tip: "cizgi", renk: 2, from: [3, 0.8], to: [3, 3.2], etiket: "", gizli: true },
            { id: "wjt", tip: "yazi", x: 3, y: 3.5, metin: "Japonya'nın kendi maliyeti: 3", gizli: true },
            { id: "aj", tip: "ok", renk: 2, from: [2.9, 2.5], to: [1.9, 2.5], gizli: true },
            { id: "wt", tip: "cizgi", renk: 3, from: [1, 0.8], to: [1, 3.2], gizli: true },
            { id: "wtt", tip: "yazi", x: 1, y: 3.5, metin: "Türkiye'nin kendi maliyeti: 1", gizli: true },
            { id: "at", tip: "ok", renk: 3, from: [1.1, 1.5], to: [2.1, 1.5], gizli: true },
            { id: "zone", tip: "alan", renk: 1, noktalar: [[1, 1.4], [3, 1.4], [3, 2.6], [1, 2.6]], gizli: true },
            { id: "zt", tip: "yazi", x: 2, y: 0.8, metin: "iki tarafa da yarar: 1 ile 3 arası", gizli: true }
          ],
          durumlar: [
            { metin: "Soru: 1 tişört kaç telefona satılmalı? Sayı doğrusunda tişörtün telefon cinsinden fiyatı. Her ülkenin kendi fırsat maliyeti bir **duvar**." },
            { metin: "Japonya tişört almak istiyor. Kendi üretse tişört ona 3 telefona patlıyor; o yüzden **3'ten azına** razı.", goster: ["wj", "wjt", "aj"] },
            { metin: "Türkiye tişört satıyor. Kendi üretse bir tişört ona 1 telefona mal oluyor; **1'den fazlasını** ister.", goster: ["wt", "wtt", "at"] },
            { metin: "Kazançlı oran iki fırsat maliyetinin ==arasında==: bir tişört, **1 ile 3 telefon** arası.", goster: ["zone", "zt"] }
          ] },
        { tip: "formul", parcalar: [
            { t: "Türkiye'nin OC'si", alt: "1 tişört = 1 telefon" }, "<",
            { t: "Terms of trade", alt: "1 tişört = ? telefon" }, "<",
            { t: "Japonya'nın OC'si", alt: "1 tişört = 3 telefon" }
          ], aciklama: "Satıcı kendi maliyetinden fazlasını ister, alıcı kendi maliyetinden azını öder: oran iki fırsat maliyetinin arasındadır." },
        { tip: "tuzak", baslik: "Uçlar, eşit kazanç ve kimin gözüyle bakıyorsun", metin: "Uç değerler, kazancın paylaşımı ve alıcı–satıcı yönü sıkça karıştırılır.", yanlis: "Terms of trade tam bir fırsat maliyetine eşitse o ülke yine kazanır; kazançlar eşit olmalıdır.", dogru: "Tam bir fırsat maliyetine eşit oran o ülke için ==kazanç sıfırdır==; kazançların eşit olması gerekmez. Ülke uzmanlaştığı ürünü **satar**, diğerini **alır**: alıcı kendi OC'sinden **az** öder, satıcı **fazla** ister." }
      ]
    },
    {
      baslik: "Teklifleri deneyelim: kabul mü, ret mi?",
      kisa: "Teklifi önce bir birime çevir, sonra iki duvarla karşılaştır.",
      bloklar: [
        { tip: "grafik", baslik: "Hangi teklif iki tarafa da uyar?", xlabel: "1 tişört = ? telefon", ylabel: "", xmax: 4.5, ymax: 4,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [],
          ogeler: [
            { id: "sd", tip: "cizgi", renk: 0, from: [0, 2], to: [4.4, 2] },
            { id: "zone", tip: "alan", renk: 1, noktalar: [[1, 1.4], [3, 1.4], [3, 2.6], [1, 2.6]] },
            { id: "wj", tip: "cizgi", renk: 2, from: [3, 0.8], to: [3, 3.2] },
            { id: "wt", tip: "cizgi", renk: 3, from: [1, 0.8], to: [1, 3.2] },
            { id: "t", tip: "nokta", renk: 2, x: 4, y: 2, etiket: "4" , gizli: true },
            { id: "r", tip: "yazi", x: 3.4, y: 0.4, metin: "·", gizli: true }
          ],
          durumlar: [
            { metin: "Yeşil bölge (1–3) iki tarafa da yarayan oranlar. Teklifler sırayla gelsin.", gizle: [] },
            { metin: "**1 tişörte 4 telefon?** Türkiye sevinir (1'den fazla), ama Japonya reddeder: kendisi 3'e yapar.", goster: ["t", "r"], set: { r: { metin: "Japonya: HAYIR" } } },
            { metin: "**2 tişörte 1 telefon** (yani 1 tişört = ½ telefon)? Bu kez Türkiye reddeder: 1'den azı.", set: { t: { x: 0.5, y: 2, etiket: "½" }, r: { metin: "Türkiye: HAYIR", x: 0.6 } } },
            { metin: "**Tam 3 telefon?** Japonya için kendi üretmekle aynı: kazanç yok. ==Uçlar işe yaramaz.==", set: { t: { x: 3, y: 2, etiket: "3" }, r: { metin: "uç: Japonya için kazanç yok", x: 3.6 } } },
            { metin: "**1 tişörte 2 telefon?** İkisi de evet der. Kazançların eşit olması da gerekmez; aralıktaki her oran olur.", set: { t: { x: 2, y: 2, etiket: "2" }, r: { metin: "ikisi de EVET", x: 2 } } }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "İki tarafa da yarar", maddeler: ["İki fırsat maliyetinin arasında", "Uç değerler hariç", "Kazançlar eşit olmak zorunda değil"] },
          sag: { ikon: "❌", baslik: "Biri reddeder", maddeler: ["Alıcının kendi maliyetinden yüksek", "Satıcının kendi maliyetinden düşük", "Uç değer: kazanç sıfır"] },
          oyun: [
            { metin: "1 tişört = 2 telefon (aralık 1–3).", cevap: "sol", neden: "Aralığın içinde: iki taraf da kazanır." },
            { metin: "1 tişört = 4 telefon (Japonya kendi 3'e yapıyor).", cevap: "sag", neden: "Japonya'nın kendi maliyetini aşıyor: Japonya reddeder." },
            { metin: "1 tişört = 3 telefon.", cevap: "sag", neden: "Uç değer: Japonya için kendi üretmekle aynı, kazanç yok." },
            { metin: "1 tişört = 2,5 telefon.", cevap: "sol", neden: "1 ile 3 arasında: ikisi de kazanır." },
            { metin: "1 tişört = ½ telefon.", cevap: "sag", neden: "Türkiye'nin kendi maliyeti olan 1'in altında: Türkiye reddeder." }
          ] },
        { tip: "ornek", baslik: "\"10 telefon için 4 tişört\" teklifi", durum: "Teklif \"10 telefona 4 tişört\" diye geliyor. Japonya ve Türkiye için uygun mu?",
          adimlar: ["Önce bir birime çevir: bir tişörte kaç telefon? 10 ÷ 4 = 2,5. (Sayı çiftini olduğu gibi 3'le karşılaştırma.)", "Aralık: 1 < 2,5 < 3.", "Japonya: 2,5 < 3, kendi maliyetinden az ödüyor: kabul.", "Türkiye: 2,5 > 1, kendi maliyetinden fazla alıyor: kabul.", "Ters yazım aynı orandır: 1 tişört = 2 telefon ↔ 1 telefon = ½ tişört (aralık ⅓ ile 1 tişört; ½ içinde)."],
          sonuc: "Oran ==2,5 telefon / tişört==, aralıkta: iki ülkeye de uygun. Teklifi ==önce bir birime çevir==, sonra iki duvarla karşılaştır." }
      ]
    },
    {
      baslik: "Gemiler yola çıkıyor: ticaret sonrası tüketim",
      kisa: "Ticaret tüketimi PPC'nin dışına çıkarır ama PPC kaymaz.",
      bloklar: [
        { tip: "adimlar", baslik: "Anlaşma: 1 tişört = 2 telefon", adimlar: [
            { baslik: "Yükle", metin: "Japonya 8 telefonu, Türkiye 4 tişörtü gemiye yükler. 8 ÷ 2 = 4: takas tutuyor." },
            { baslik: "Japonya'nın eli", metin: "30 − 8 = 22 telefon ve 4 tişört." },
            { baslik: "Türkiye'nin eli", metin: "8 telefon ve 8 − 4 = 4 tişört." },
            { baslik: "Sonuç", metin: "İkisi de ticaretten önceki kadar tişörte sahip; ama her biri 4 telefon fazlasıyla. Bonus tam ortadan bölündü." }
          ] },
        { tip: "grafik", baslik: "İki ülke: PPC'nin dışında tüketim", xlabel: "Telefon", ylabel: "Tişört", xmax: 32, ymax: 12,
          xticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 18, label: "18" }, { v: 22, label: "22" }, { v: 30, label: "30" }],
          yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "jp", tip: "cizgi", renk: 0, from: [0, 10], to: [30, 0], etiket: "Japonya PPC" },
            { id: "tr", tip: "cizgi", renk: 3, from: [0, 8], to: [8, 0], etiket: "Türkiye PPC" },
            { id: "JA", tip: "nokta", renk: 2, x: 18, y: 4, etiket: "A", kilavuz: true, gizli: true },
            { id: "jmx", tip: "yazi", x: 14.5, y: 2.2, metin: "max 18 telefon", gizli: true },
            { id: "JC", tip: "nokta", renk: 1, x: 22, y: 4, etiket: "C", kilavuz: true, gizli: true },
            { id: "jok", tip: "ok", renk: 1, from: [18.5, 4.6], to: [21.5, 4.6], gizli: true },
            { id: "jpl", tip: "yazi", x: 20, y: 5.5, metin: "+4 telefon", gizli: true },
            { id: "TA", tip: "nokta", renk: 2, x: 4, y: 4, etiket: "A · önce", kilavuz: true, gizli: true },
            { id: "tmx", tip: "yazi", x: 5.6, y: 1.6, metin: "max 4 telefon", gizli: true },
            { id: "TC", tip: "nokta", renk: 1, x: 8, y: 4, etiket: "C · sonra", kilavuz: true, gizli: true },
            { id: "tok", tip: "ok", renk: 1, from: [4.5, 4.6], to: [7.5, 4.6], gizli: true },
            { id: "tpl", tip: "yazi", x: 6, y: 5.5, metin: "+4 telefon", gizli: true }
          ],
          durumlar: [
            { metin: "Ticaretten önce Japonya kendi PPC'sinin üstünde (A noktası). 4 tişörtle en fazla ne tüketebilir?", goster: ["JA", "jmx"] },
            { metin: "Kendi başına 4 tişörtle en fazla **18 telefon** (30 − 3 × 4). Ticaretten sonra (C) elinde 22 telefon var: PPC'nin ==dışında==, +4 telefon. Bu *gains from trade*.", goster: ["JC", "jok", "jpl"] },
            { metin: "Türkiye de 4 tişört tüketiyor; kendi PPC'sinde bu 4 tişörtle en fazla **4 telefon** olur (8 − 4).", goster: ["TA", "tmx"] },
            { metin: "Ticaretten sonra Türkiye'nin elinde 8 telefon ve 4 tişört var: o da PPC'nin ==dışında==, +4 telefon. İki ülke de aynı tişört miktarında +4 telefon kazandı.", goster: ["TC", "tok", "tpl"] }
          ] },
        { tip: "ikili", sol: { ikon: "🍽️", baslik: "Tüketim PPC'nin dışına çıkar", maddeler: ["Ticaretle (*gains from trade*)", "Üretim aynı kalır", "C noktası PPC'nin dışında"] },
          sag: { ikon: "🚀", baslik: "PPC kayar", maddeler: ["Kaynak miktarı ya da kalitesi değişir", "Teknoloji gelişir", "Üretim kapasitesi artar"] },
          oyun: [
            { metin: "Japonya ticaretle 22 telefon tüketiyor, kendi PPC'si 18 telefona izin veriyor.", cevap: "sol", neden: "Tüketim PPC'nin dışında: ticaretten kazanç." },
            { metin: "Ülke yeni bir fabrika teknolojisi buldu.", cevap: "sag", neden: "Teknoloji PPC'yi kaydırır." },
            { metin: "Türkiye ticaretle 4 yerine 8 telefon tüketiyor.", cevap: "sol", neden: "Tüketim PPC'nin dışında; PPC aynı." },
            { metin: "Okullar yaygınlaşınca işçilerin becerisi arttı.", cevap: "sag", neden: "*Human capital* artar: PPC dışa kayar." }
          ] },
        { tip: "tuzak", baslik: "Ticaret PPC'yi kaydırmaz", metin: "Şıklarda \"ticaret PPC'yi dışa kaydırır\" cümlesini görürsen yanlış olduğunu bil.", yanlis: "Uzmanlaşma ve ticaret üretim kapasitesini (PPC'yi) büyütür.", dogru: "Üretim kapasitesi aynı kalır, ==PPC kaymaz==; yalnız tüketim noktası PPC'nin dışına çıkar." }
      ]
    },
    {
      baslik: "Daha iyi teklif, ticaret savaşı, yaşam standardı",
      kisa: "Alıcı en ucuz teklife gider; ticareti kısıtlamak kazancı geri alır.",
      bloklar: [
        { tip: "grafik", baslik: "Üçüncü bir ülke: Vietnam", xlabel: "1 tişört = ? telefon", ylabel: "", xmax: 4.5, ymax: 4,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [],
          ogeler: [
            { id: "sd", tip: "cizgi", renk: 0, from: [0, 2], to: [4.4, 2] },
            { id: "zone", tip: "alan", renk: 1, noktalar: [[1, 1.4], [3, 1.4], [3, 2.6], [1, 2.6]] },
            { id: "wj", tip: "cizgi", renk: 2, from: [3, 0.8], to: [3, 3.2] },
            { id: "wt", tip: "cizgi", renk: 3, from: [1, 0.8], to: [1, 3.2] },
            { id: "tu", tip: "nokta", renk: 3, x: 2, y: 2, etiket: "Türkiye 2", gizli: true },
            { id: "vi", tip: "nokta", renk: 1, x: 1.5, y: 2, etiket: "Vietnam 1,5", gizli: true },
            { id: "sw", tip: "ok", renk: 2, from: [2, 1.3], to: [1.5, 1.3], gizli: true },
            { id: "swt", tip: "yazi", x: 1.8, y: 0.7, metin: "Japonya daha ucuza geçer", gizli: true }
          ],
          durumlar: [
            { metin: "Japonya şu an Türkiye'den 1 tişörtü 2 telefona alıyor.", goster: ["tu"] },
            { metin: "Vietnam, Japonya'ya bir tişörtü **1,5 telefona** veriyor (1 < 1,5 < 3: aralıkta).", goster: ["vi"] },
            { metin: "Japonya daha ucuz olana gider: Vietnam'a. Türkiye anlaşmayı korumak istiyorsa ==daha iyi teklif== vermeli.", goster: ["sw", "swt"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚔️", terim: "Trade war", tr: "ticaret savaşı", tanim: "Ülkelerin birbirine ticaret engeli koyması. Tüketim kendi PPC'sine geri çekilir; ticaretin bonusu kaybolur.", ornek: "Japonya tişört ithal edemezse yine 18 telefonla yetinir." },
            { ikon: "🏠", terim: "Standard of living", tr: "yaşam standardı", tanim: "Bir ülkede insanların tüketebildiği mal ve hizmet düzeyi. Ekonomistler hemfikir: gönüllü ticaret iki tarafın da yaşam standardını yükseltir.", ornek: "Japonya'da 18 yerine 22 telefon tüketmek." }
          ] },
        { tip: "tuzak", baslik: "Daha iyi teklif geldi", metin: "Üçüncü ülkenin teklifi aralıktaysa ve daha iyiyse ülke ona gider.", yanlis: "Bir kez anlaşılan oran sonsuza kadar geçerlidir.", dogru: "Alıcı ==daha ucuz== olana gider (1,5 < 2); mevcut ortağı koruması için daha iyi teklif vermesi gerekir." }
      ]
    },
    {
      baslik: "Sınav sorusu: kahve ve çay",
      kisa: "Düşük maliyetli ülke satar; oran iki maliyetin arasında, uçlar hariç olmalı.",
      bloklar: [
        { tip: "ornek", baslik: "Hangi takas oranı iki ülkeye de yarar?", durum: "A ülkesinde 1 kilo kahve üretmenin opportunity cost'u 5 kilo çay, B ülkesinde 2 kilo çay. Hangi takas oranı iki ülkeye de yarar? Şıklar: 1 kahve = 1 çay / 1 kahve = 2 çay / 1 kahve = 6 çay / 1 kahve = 4 çay.",
          adimlar: ["Kahvede düşük maliyet B'de (2 < 5): B kahvede uzmanlaşır ve satar.", "B satıcı: kendi maliyeti olan 2'den fazlasını ister.", "A alıcı: kendi maliyeti olan 5'ten azını öder.", "Aralık: 2 < oran < 5.", "Şıklar: 1 ve 2 B için zarar ya da uç (kazanç yok); 6, A için pahalı; 4 aralığın içinde."],
          sonuc: "==1 kahve = 4 çay.== 2 uç değer olduğu için B'ye kazanç sağlamaz." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Specialization*: her ülke *comparative advantage*'ı olan ürünü üretir, gerisini takasla alır; aynı kaynaklarla dünya toplamı artar (+8 telefon).",
            "*Terms of trade* iki ülkenin *opportunity cost*'u arasında olmalı (Japonya 3, Türkiye 1 → arası); uç değerler kazanç getirmez.",
            "Alıcı kendi maliyetinden az öder, satıcı kendi maliyetinden fazlasını ister.",
            "Teklifi önce bir birime çevir; ters yazılsa da (1 T = 2 P ↔ 1 P = ½ T) oran aynıdır. 10 telefon / 4 tişört = 2,5.",
            "*Gains from trade*: iki ülke de kendi *PPC*'sinin dışında tüketir, ama *PPC* kaymaz.",
            "Kazançlar eşit olmak zorunda değil; aralıktaki her oran iki tarafa da yarar.",
            "Daha iyi teklif gelirse ülke ona gider; ticareti kısıtlamak seçenekleri azaltır ve herkes kendi PPC'sine döner.",
            "Gönüllü ticaret, iki tarafın da yaşam standardını yükseltir."
          ] }
      ]
    }
  ]
};
