/* Kitpath not defteri · cs107 · 1.11 Math Sınıfı ve Rastgele Sayılar
   Kaynak: ap-videolar/src/episodes/cs107 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cs107",
  amac: "*Java*'nın hazır *Math* sınıfını öğreneceksin: *abs*, *pow*, *sqrt* ve *random*. Her birinin ne döndürdüğünü, metotları iç içe çağırmayı ve istediğin aralıkta rastgele sayı üretmenin tarifini bileceksin.",
  bolumler: [
    {
      baslik: "*Math* sınıfı: dört metot yeter",
      kisa: "Math metotları static'tir: nesne üretmeden Math.metot() diye çağırırsın.",
      bloklar: [
        { tip: "hikaye", ikon: "🎲", baslik: "Zar mı atıyorsun, çekiliş mi yapıyorsun?",
          metin: "Tavlada zar 1'den 6'ya, hepsinin şansı eşit. Sınıfta 30 kişiden biri de rastgele seçilebilir. *Java*'da bunun için tek bir satır yeter; ama o satırda her yıl çok öğrenciyi yakalayan bir tuzak var. Önce *Math* sınıfını tanıyalım." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Math class", tr: "matematik sınıfı", tanim: "Hazır matematik metotlarıyla dolu bir sınıf. Hepsi *static*: nesne oluşturmazsın, ==Math.metotAdı()== diye çağırırsın.", ornek: "Math.sqrt(16) çağrısı 4.0 verir." }
          ] },
        { tip: "tablo", baslik: "*AP* için dört metot", head: ["Metot", "Ne yapar?", "Ne döndürür?"], rows: [
            ["Math.abs(x)", "mutlak değer", "*int* verirsen *int*, *double* verirsen *double*"],
            ["Math.pow(a, b)", "a üzeri b", "her zaman *double*"],
            ["Math.sqrt(x)", "karekök", "her zaman *double*"],
            ["Math.random()", "sıfır ile 1 arasında rastgele sayı", "*double*, [0.0, 1.0)"]
          ], not: "İmzaları ezberlemezsin; *Java Quick Reference*'ta yazıyor. Asıl iş, ne döndürdüklerini bilmek." }
      ]
    },
    {
      baslik: "*abs*, *pow* ve *sqrt*",
      kisa: "abs mutlak değerdir; pow ve sqrt her zaman double döndürür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Math.abs", tr: "mutlak değer", tanim: "Sayıyı sıfıra uzaklığına çevirir; yönün önemi yoktur. *int* verirsen *int*, *double* verirsen *double* döner (*overloading*).", ornek: "Asansör 3. kattan 8. kata çıkarsa Math.abs(3 - 8) = 5 kat." },
            { ikon: "🚀", terim: "Math.pow", tr: "üs alma", tanim: "pow(a, b), a üzeri b'dir ve her zaman ==*double*== döner.", ornek: "Math.pow(2, 10) = 1024.0" },
            { ikon: "🌱", terim: "Math.sqrt", tr: "karekök", tanim: "Karekök alır ve o da her zaman ==*double*== döner.", ornek: "Math.sqrt(49) = 7.0" }
          ] },
        { tip: "kod", baslik: "Dört çağrı, dört sonuç", kod: "System.out.println(Math.abs(-7));\nSystem.out.println(Math.abs(3 - 8));\nSystem.out.println(Math.pow(2, 10));\nSystem.out.println(Math.sqrt(49));", cikti: "7\n5\n1024.0\n7.0" },
        { tip: "tuzak", metin: "*pow* ve *sqrt* sonucu tam sayı gibi görünse bile *double*'dır. Onu *int* kutuya doğrudan koyamazsın.", yanlis: "int x = Math.pow(2, 3);  (derlenir sanmak)", dogru: "int x = (int) Math.pow(2, 3);  ⇒ x = 8. Başına (int) koy; yoksa derleme hatası olur." }
      ]
    },
    {
      baslik: "İç içe çağrı: Pisagor ve mesafe",
      kisa: "İç içe çağrıda en içtekinden başla, her parantezi bir değere çökert.",
      bloklar: [
        { tip: "grafik", baslik: "Okuldan kantine mesafe", xlabel: "yatay", ylabel: "dikey", xmax: 6, ymax: 8,
          xticks: [{ v: 1, label: "1" }, { v: 4, label: "4" }], yticks: [{ v: 2, label: "2" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "okul", tip: "nokta", x: 1, y: 2, etiket: "Okul (1, 2)" },
            { id: "kantin", tip: "nokta", x: 4, y: 6, etiket: "Kantin (4, 6)", gizli: true },
            { id: "yatay", tip: "cizgi", renk: 1, kesik: true, from: [1, 2], to: [4, 2], gizli: true },
            { id: "yatayt", tip: "yazi", x: 2.5, y: 1.2, metin: "4 − 1 = 3", gizli: true },
            { id: "dikey", tip: "cizgi", renk: 2, kesik: true, from: [4, 2], to: [4, 6], gizli: true },
            { id: "dikeyt", tip: "yazi", x: 4.9, y: 4, metin: "6 − 2 = 4", gizli: true },
            { id: "mesafe", tip: "cizgi", renk: 0, from: [1, 2], to: [4, 6], gizli: true },
            { id: "mesafet", tip: "yazi", x: 1.6, y: 4.4, metin: "sqrt(25.0) = 5.0", gizli: true }
          ],
          durumlar: [
            { metin: "Okul (1, 2) noktasında. Kantine olan mesafeyi bulacağız." },
            { metin: "Kantin (4, 6) noktasında.", goster: ["kantin"] },
            { metin: "Yatay fark 3, dikey fark 4: dik üçgenin iki kenarı.", goster: ["yatay", "yatayt", "dikey", "dikeyt"] },
            { metin: "Mesafe hipotenüs: kareler toplamının karekökü, ==5.0==.", goster: ["mesafe", "mesafet"] }
          ] },
        { tip: "kod", baslik: "Tek satırda mesafe", kod: "double d = Math.sqrt(Math.pow(4 - 1, 2) + Math.pow(6 - 2, 2));\nSystem.out.println(d);", vurgu: [1], cikti: "5.0" },
        { tip: "ornek", baslik: "İçten dışa çözüm", durum: "Math.sqrt(Math.pow(4 - 1, 2) + Math.pow(6 - 2, 2)) ifadesi kaç eder?", adimlar: [
            "En içteki parantezler: 4 - 1 = 3 ve 6 - 2 = 4.",
            "İki *pow*: Math.pow(3, 2) = 9.0 ve Math.pow(4, 2) = 16.0.",
            "Toplam: 9.0 + 16.0 = 25.0.",
            "En dışta *sqrt*: Math.sqrt(25.0) = 5.0."
          ], sonuc: "5.0. Aynı kalıp Pisagor için de çalışır: Math.sqrt(3 ∗ 3 + 4 ∗ 4) = Math.sqrt(25) = 5.0." }
      ]
    },
    {
      baslik: "*Math.random*: sıfır dahil, 1 hariç",
      kisa: "random, 0.0 dahil 1.0 hariç bir double verir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎰", terim: "Math.random", tr: "rastgele sayı", tanim: "Parantezi boştur. Sıfırdan 1'e rastgele bir *double* döndürür: ==0.0 ≤ r < 1.0==. Sıfır gelebilir, 1 asla gelmez.", ornek: "Her çağrıda başka sayı: 0.41, 0.07, 0.93… Tek başına işe yaramaz; istediğin aralığa germek gerekir." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "*Math.random()* verebilir", maddeler: ["0.0 ≤ r < 1.0 aralığındaki her *double*", "Alt uç dahil: 0.0 gelebilir"] },
          sag: { ikon: "🚫", baslik: "Asla vermez", maddeler: ["Tam 1.0", "Sıfırdan küçük ya da 1'den büyük sayılar"] },
          oyun: [
            { metin: "0.0", cevap: "sol", neden: "Alt uç dahil: köşeli parantez [0.0." },
            { metin: "0.93", cevap: "sol", neden: "0 ile 1 arasında." },
            { metin: "0.999", cevap: "sol", neden: "1'den küçük; yaklaşabilir ama 1'e ulaşmaz." },
            { metin: "1.0", cevap: "sag", neden: "Üst uç hariç: 1.0)" },
            { metin: "-0.2", cevap: "sag", neden: "Sıfırdan küçük sayı üretmez." }
          ] }
      ]
    },
    {
      baslik: "Rastgele tam sayı tarifi",
      kisa: "(int) (Math.random() ∗ COUNT) + MIN; COUNT = en büyük − en küçük + 1.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "(int)", alt: "tam sayıya çevir" },
            { t: "(Math.random() ∗ COUNT)", alt: "aralığı COUNT kat uzat" }, "+",
            { t: "MIN", alt: "aralığı en küçük sayıya kaydır" }
          ], aciklama: "COUNT = en büyük − en küçük + 1. Zar için COUNT = 6, MIN = 1." },
        { tip: "grafik", baslik: "Zar atışı: adım adım", xlabel: "değer", ylabel: "adım", xmax: 7, ymax: 5,
          ogeler: [
            { id: "r", tip: "cizgi", renk: 1, from: [0, 4], to: [1, 4], etiket: "random() → [0, 1)" },
            { id: "a0", tip: "nokta", x: 0, y: 2.5, etiket: "0", gizli: true },
            { id: "a1", tip: "nokta", x: 1, y: 2.5, etiket: "1", gizli: true },
            { id: "a2", tip: "nokta", x: 2, y: 2.5, etiket: "2", gizli: true },
            { id: "a3", tip: "nokta", x: 3, y: 2.5, etiket: "3", gizli: true },
            { id: "a4", tip: "nokta", x: 4, y: 2.5, etiket: "4", gizli: true },
            { id: "a5", tip: "nokta", x: 5, y: 2.5, etiket: "5", gizli: true },
            { id: "b0", tip: "nokta", x: 1, y: 1, etiket: "1", gizli: true },
            { id: "b1", tip: "nokta", x: 2, y: 1, etiket: "2", gizli: true },
            { id: "b2", tip: "nokta", x: 3, y: 1, etiket: "3", gizli: true },
            { id: "b3", tip: "nokta", x: 4, y: 1, etiket: "4", gizli: true },
            { id: "b4", tip: "nokta", x: 5, y: 1, etiket: "5", gizli: true },
            { id: "b5", tip: "nokta", x: 6, y: 1, etiket: "6", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: random sıfırdan 1'e, 1 hariç." },
            { metin: "Çarpı 6: aralık uzar, ==[0, 6)==. 6 hariç.", set: { r: { to: [6, 4], etiket: "× 6 → [0, 6)" } } },
            { metin: "(int): ondalık kısım kesilir; yalnız 0, 1, 2, 3, 4, 5 çıkabilir.", goster: ["a0", "a1", "a2", "a3", "a4", "a5"] },
            { metin: "Artı 1: her sayı bir adım kayar. Sonuç ==1, 2, 3, 4, 5, 6==: tam bir zar.", gizle: ["a0", "a1", "a2", "a3", "a4", "a5"], goster: ["b0", "b1", "b2", "b3", "b4", "b5"] }
          ] },
        { tip: "ornek", baslik: "10 ile 20 arası, ikisi de dahil", durum: "Rastgele tam sayı 10, 11, …, 20 olabilsin. İfade nasıl yazılır?", adimlar: [
            "COUNT = 20 − 10 + 1 = 11 sayı. (Direk sayar gibi: sondan başı çıkar, 1 ekle.)",
            "MIN = 10. İfade: (int) (Math.random() ∗ 11) + 10",
            "Kontrol, en küçük: random = 0.0 ⇒ (int) 0.0 + 10 = 10.",
            "Kontrol, en büyük: random ≈ 0.999 ⇒ (int) 10.99 = 10, 10 + 10 = 20."
          ], sonuc: "(int) (Math.random() ∗ 11) + 10. Sınıftan 30 kişiden birini seçmek için de (int) (Math.random() ∗ 30) + 1." },
        { tip: "tuzak", baslik: "Bir eksik sayı hatası", metin: "5 ile 15 arası, ikisi de dahil, istenirse COUNT = 15 − 5 + 1 = 11 olmalı. Çarpanı yanlış seçmek aralığı bozar.", yanlis: "Çarpanı 10 ya da 15 seçmek: (int) (Math.random() ∗ 10) + 5.", dogru: "Çarpan 11: (int) (Math.random() ∗ 11) + 5 ⇒ 5…15. (Çarpan 10 ⇒ 5…14, 15 asla çıkmaz; çarpan 15 ⇒ 5…19'a kadar taşar.)" }
      ]
    },
    {
      baslik: "Rastgele *double*: çarpmak uzatır, eklemek kaydırır",
      kisa: "Tam sayı istemiyorsan cast yapma: çarp ve ekle.",
      bloklar: [
        { tip: "grafik", baslik: "2.0 ile 7.0 arasında hız", xlabel: "değer", ylabel: "adım", xmax: 8, ymax: 5,
          ogeler: [
            { id: "r", tip: "cizgi", renk: 1, from: [0, 3], to: [1, 3], etiket: "random() → [0.0, 1.0)" }
          ],
          durumlar: [
            { metin: "Başlangıç: random sıfırdan 1'e, 1 hariç." },
            { metin: "Çarpı 5: aralık beş kat uzar, ==[0.0, 5.0)==.", set: { r: { to: [5, 3], etiket: "× 5 → [0.0, 5.0)" } } },
            { metin: "Artı 2: bütün aralık iki birim sağa kayar, ==[2.0, 7.0)==.", set: { r: { from: [2, 3], to: [7, 3], etiket: "+ 2 → [2.0, 7.0)" } } }
          ] },
        { tip: "kod", baslik: "Oyun karakterinin hızı", kod: "double speed = Math.random() * 5 + 2;", vurgu: [1],
          not: "speed 2.0'dan başlar, 7.0'a yaklaşır ama 7.0'a ulaşmaz. Çarpan genişliği, eklenen sayı başlangıcı belirler." }
      ]
    },
    {
      baslik: "*AP* örneği ve *cast* önceliği",
      kisa: "(int) hemen sağındakine yapışır; parantezsiz random hep sıfıra kesilir.",
      bloklar: [
        { tip: "kod", baslik: "İki satır, iki aralık", kod: "int n = (int) (Math.random() * 4) + 7;\nint m = (int) Math.random() * 4 + 7;", vurgu: [2],
          not: "Rastgele sayılar yazdırılamaz; aralıkları okuyacağız. n 7…10 olur, m hep 7." },
        { tip: "ornek", baslik: "n hangi değerleri alabilir?", durum: "int n = (int) (Math.random() ∗ 4) + 7; satırı hangi değerleri üretir?", adimlar: [
            "Math.random() ∗ 4: sıfırdan 4'e, 4 hariç.",
            "(int): 0, 1, 2 ya da 3.",
            "Artı 7: 7, 8, 9 ya da 10."
          ], sonuc: "7, 8, 9, 10. 11 asla gelmez." },
        { tip: "tuzak", metin: "(int) yalnızca hemen sağındaki Math.random()'a yapışır. Math.random() hep 1'den küçük olduğu için (int) onu 0'a keser.", yanlis: "(int) Math.random() ∗ 4 + 7 de 7…10 üretir.", dogru: "Önce (int) Math.random() = 0 olur, 0 ∗ 4 + 7 = 7: ==her seferinde 7==. Çarpmayı parantez içine al." }
      ]
    },
    {
      baslik: "Sınav için bilmen gerekenler",
      kisa: "Tarifi yaz, aralığı oku, öteki Math metotlarını bırak.",
      bloklar: [
        { tip: "tablo", head: ["", "Unit 1'de bu konuda"], rows: [
            ["✍️ Yazarsın", "(int) (Math.random() ∗ COUNT) + MIN tarifini (COUNT = en büyük − en küçük + 1); ayrıca (int) Math.pow(a, b) ve (int) Math.sqrt(x) gibi *int*'e çevirmeyi."],
            ["👀 Okursun", "Verilen bir *random* ifadesinin hangi aralıkta değer ürettiğini."],
            ["🚫 Gerekmez", "*round*, *max*, *min*, *ceil*, *floor* gibi öteki *Math* metotları ve *java.util.Random*. Dört metodun imzası zaten *Java Quick Reference*'ta."]
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Math* metotları *static*: Math.ad(); nesne üretmezsin.",
            "*abs* mutlak değerdir; *int* alırsa *int*, *double* alırsa *double* döndürür.",
            "*pow* ve *sqrt* her zaman *double* döndürür; *int*'e atamak için (int) gerekir.",
            "İç içe çağrıda en içtekinden başla ve dışarı doğru ilerle.",
            "*random*: 0.0 dahil, 1.0 hariç bir *double*.",
            "Rastgele tam sayı: (int) (Math.random() ∗ COUNT) + MIN, COUNT = en büyük − en küçük + 1.",
            "Rastgele *double* aralığı: çarpmak genişletir, eklemek kaydırır.",
            "(int) Math.random() ∗ n parantezsiz yazılırsa sonuç hep MIN olur."
          ] }
      ]
    }
  ]
};
