/* Kitpath not defteri · hg708 · Sürdürülebilir Kalkınma
   Kaynak: AP HuG CED Topic 7.8 (IMP-7.A.1–A.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg708",
  amac: "Bu konu sanayileşmenin çevreye verdiği zararların sürdürülebilir kalkınmayla nasıl azaltılabileceğini anlatıyor. Kaynak tükenmesini, kitlesel tüketimi, kirliliği, iklim değişikliğini, ekoturizmi ve BM Sürdürülebilir Kalkınma Hedeflerini öğreneceksin.",
  bolumler: [
    {
      baslik: "Sürdürülebilir kalkınma nedir?",
      kisa: "Bugünün ihtiyacını, gelecek kuşakların kaynaklarını tüketmeden karşılamaktır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "♻️", terim: "Sustainable development", tr: "sürdürülebilir kalkınma", tanim: "Bugünün ihtiyaçlarını, gelecek kuşakların kendi ihtiyaçlarını karşılama imkânını bozmadan karşılayan kalkınma. Sanayileşmenin çevre zararlarını giderme amacı taşır.", ornek: "Kömür yerine güneş enerjisiyle çalışan bir fabrika." }
          ] },
        { tip: "grafik", baslik: "Kaynak stoğu zamanla nasıl değişir? (şematik)", xlabel: "Zaman", ylabel: "Kaynak stoğu", xmax: 10, ymax: 10,
          ogeler: [
            { id: "asiri", tip: "egri", renk: 0, etiket: "Aşırı tüketim", noktalar: [[0.5, 9], [2.5, 8], [4.5, 5.5], [6.5, 2.5], [8, 0.8], [9.5, 0.2]] },
            { id: "surd", tip: "egri", renk: 2, etiket: "Sürdürülebilir kullanım", noktalar: [[0.5, 9], [2.5, 8.8], [4.5, 8.6], [6.5, 8.4], [8, 8.3], [9.5, 8.3]], gizli: true }
          ],
          durumlar: [
            { metin: "Kaynak, yenilenme hızından hızlı kullanılırsa ==stok hızla tükenir== (kaynak tükenmesi)." },
            { metin: "Kullanım, kaynağın yenilenmesine yakın tutulursa ==stok korunur==: bu sürdürülebilir yoldur.", goster: ["surd"] },
            { metin: "Verimlilik ve geri dönüşüm gibi politikalar tüketimi yavaşlatır; tükenme ==ertelenir ya da önlenir==.", set: { asiri: { noktalar: [[0.5, 9], [2.5, 8], [4.5, 7.2], [6.5, 6.4], [8, 5.9], [9.5, 5.6]] } } }
          ] }
      ]
    },
    {
      baslik: "Dört çevre sorunu ve çözümleri",
      kisa: "Kaynak tükenmesi, kitlesel tüketim, kirlilik ve iklim değişikliği sanayinin çevre bedelidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪣", terim: "Natural-resource depletion", tr: "doğal kaynak tükenmesi", tanim: "Kaynakların yenilenebildiğinden hızlı kullanılması: fosil yakıt, yeraltı suyu, ormanlar.", ornek: "Yağıştan hızlı çekilen yeraltı suyu." },
            { ikon: "🛍️", terim: "Mass consumption", tr: "kitlesel tüketim", tanim: "Çok sayıda insanın çok mal tüketmesi; hem kaynak talebini hem atığı artırır.", ornek: "Kullan-at ürünler ve hızlı moda." },
            { ikon: "🏭", terim: "Pollution", tr: "kirlilik", tanim: "Hava, su ve toprağın fabrika, egzoz ve atıkla zarar görmesi.", ornek: "Atıkla kirlenen bir nehir." },
            { ikon: "🌡️", terim: "Climate change", tr: "iklim değişikliği", tanim: "Fosil yakıt yakılmasıyla artan sera gazlarının dünyanın ortalama sıcaklığını yükseltmesi.", ornek: "Kuraklık ve deniz seviyesinin yükselmesi." }
          ] },
        { tip: "ikili", sol: { ikon: "⚠️", baslik: "Sorun", maddeler: ["Kaynağı yenilenmeden tüketmek, kirletmek", "Fosil yakıta aşırı bağımlılık"] },
          sag: { ikon: "✅", baslik: "Sürdürülebilir çözüm", maddeler: ["Yenilenebilir enerji, geri dönüşüm, verimlilik", "Toplu taşıma, koruma politikaları"] },
          oyun: [
            { metin: "Yenilenmeye zaman tanımadan ormanı kesmek.", cevap: "sol", neden: "Kaynak tükenmesi: sorun." },
            { metin: "Çatılara güneş paneli kurmak.", cevap: "sag", neden: "Yenilenebilir enerji: çözüm." },
            { metin: "Kullan-at plastik ve hızlı modanın yaygınlaşması.", cevap: "sol", neden: "Kitlesel tüketim: sorun." },
            { metin: "Şehirde toplu taşımayı artırıp arabalı yolculuğu azaltmak.", cevap: "sag", neden: "Emisyonu azaltır: çözüm." }
          ] },
        { tip: "tablo", baslik: "Sorundan çözüme", head: ["Sorun", "Örnek çözüm"], rows: [
            ["Kaynak tükenmesi", "Yenilenebilir enerji, koruma, verimlilik"],
            ["Kitlesel tüketim", "Geri dönüşüm, onarım, yeniden kullanım"],
            ["Kirlilik", "Arıtma, emisyon sınırı, temiz üretim"],
            ["İklim değişikliği", "Fosil yakıtı azaltma, toplu taşıma, yenilenebilir enerji"]
          ] }
      ]
    },
    {
      baslik: "Ekoturizm",
      kisa: "Ekoturizm doğal alanları koruyup yerel halka iş sağlayan turizmdir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🐢", terim: "Ecotourism", tr: "ekoturizm", tanim: "Doğal ortamlarda yapılan, çoğunlukla sanayileşme tehdidi altındaki alanları koruyan ve yerel halka iş sağlayan turizm.", ornek: "Dalyan'da deniz kaplumbağası yuvalama mevsiminde plaj saatlerinin sınırlandırılması ve yerel tekne turları." }
          ] },
        { tip: "ikili", sol: { ikon: "🌿", baslik: "Ekoturizm", maddeler: ["Küçük gruplar, doğal alan, yerel rehber ve pansiyon", "Gelir çevreyi koruma ve yerel halka gider"] },
          sag: { ikon: "🏨", baslik: "Kitle turizmi", maddeler: ["Büyük oteller, çok sayıda turist", "Doğaya baskı, çöp ve yerel halka sınırlı gelir"] },
          oyun: [
            { metin: "Milli parkta yerel rehberle küçük grup yürüyüşü; giriş ücreti parkı korumaya gidiyor.", cevap: "sol", neden: "Koruma ve yerel gelir: ekoturizm." },
            { metin: "Kıyıya sıra sıra dizilmiş binlerce odalı her şey dahil oteller.", cevap: "sag", neden: "Yoğun kitle turizmi." },
            { metin: "Köydeki aile pansiyonları ziyaretçi ağırlıyor, ormanı koruma gönüllüleri ekoturizmden pay alıyor.", cevap: "sol", neden: "Yerel halka iş ve koruma: ekoturizm." },
            { metin: "Doğal alan, otel ve yat limanı için açılıyor; çöp ve gürültü artıyor.", cevap: "sag", neden: "Çevreye baskı: kitle turizmi." }
          ] },
        { tip: "tuzak", metin: "Etikette 'eko' yazması yetmez.", yanlis: "Doğada geçen her tatil ekoturizmdir.", dogru: "Ekoturizm ==doğal alanda yapılmakla kalmaz, çevreyi korur ve yerel halka iş sağlar==. Çok fazla ziyaretçi bu alanı da bozabilir; bu yüzden ziyaretçi sayısı sınırlanır." }
      ]
    },
    {
      baslik: "BM Sürdürülebilir Kalkınma Hedefleri",
      kisa: "BM'nin 17 hedefi, kalkınmada ilerlemeyi ölçmek için ortak bir çerçevedir.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 17, etiket: "hedef (SDG)" },
            { deger: 169, etiket: "alt hedef" },
            { deger: 193, etiket: "BM üyesi ülke 2015'te kabul etti" },
            { deger: 15, etiket: "yıl: 2015'ten 2030'a" }
          ] },
        { tip: "harita", merkez: "*SDGs*: 17 hedef", dallar: [
            { baslik: "İnsan", alt: "Yoksulluk, açlık, sağlık, eğitim, toplumsal cinsiyet eşitliği (1–5)" },
            { baslik: "Gezegen", alt: "Temiz su, sorumlu tüketim, iklim, deniz ve kara yaşamı (6, 12–15)" },
            { baslik: "Refah", alt: "Temiz enerji, insana yakışır iş, sanayi ve altyapı, eşitsizlik, sürdürülebilir kentler (7–11)" },
            { baslik: "Barış", alt: "Barış, adalet ve güçlü kurumlar (16)" },
            { baslik: "Ortaklık", alt: "Hedefler için ortaklıklar (17)" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌐", terim: "Sustainable Development Goals", tr: "Sürdürülebilir Kalkınma Hedefleri", tanim: "BM'nin yoksulluğu bitirmeyi, eşitliği artırmayı ve gezegeni korumayı hedefleyen ortak hedefleri. Gelişmenin ölçülmesine yardım eder.", ornek: "Hedef 1: yoksulluğa son; Hedef 13: iklim eylemi." }
          ] }
      ]
    },
    {
      baslik: "Hedeflere somut örnekler: mikrofinans ve toplu taşıma",
      kisa: "Küçük ölçekli finans ve toplu taşıma projeleri hedeflere ulaşmayı somutlaştırır.",
      bloklar: [
        { tip: "tablo", baslik: "Proje, hedef ve ölçüt", head: ["Proje", "İlgili hedef", "İlerleme ölçütü"], rows: [
            ["Mikrokredi (küçük ölçekli finans)", "Hedef 1 (yoksulluk), 5 (toplumsal cinsiyet eşitliği), 8 (insana yakışır iş)", "Kredi alan kadın sayısı, kurulan işletme sayısı"],
            ["Toplu taşıma projeleri", "Hedef 11 (sürdürülebilir kentler), 13 (iklim eylemi)", "Toplu taşıma kullanım payı, emisyon"],
            ["Güneş ve rüzgâr enerjisi", "Hedef 7 (temiz enerji)", "Yenilenebilir enerji payı"]
          ], vurgu: 0 },
        { tip: "ornek", baslik: "İlerleme nasıl ölçülür?", durum: "Bir kentte toplu taşıma kullanan yolcu payı 2020'de yüzde 20 iken yeni metro hattı sonrası 2025'te yüzde 35 oldu. Kaç yüzde puan arttı? Göreli artış yüzde kaç?",
          adimlar: ["Fark: 35 − 20 = 15 **yüzde puan**.", "Göreli artış: 15 ÷ 20 = 0,75 = yüzde 75."],
          sonuc: "Toplu taşıma payı ==15 yüzde puan== (göreli olarak yüzde 75) arttı: bu, Hedef 11 ve 13'e doğru **ölçülebilir** bir ilerlemedir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Sustainable development* bugünün ihtiyaçlarını gelecek kuşakların imkânını bozmadan karşılamaktır.",
            "Sanayinin dört çevre bedeli: doğal kaynak tükenmesi, kitlesel tüketim, kirlilik ve iklim değişikliği.",
            "Çözümler: yenilenebilir enerji, geri dönüşüm, verimlilik, arıtma, toplu taşıma ve koruma politikaları.",
            "*Ecotourism* doğal alanları korur ve yerel halka iş sağlar; kitle turizmi ise doğaya baskı yapabilir.",
            "BM Sürdürülebilir Kalkınma Hedefleri: 17 hedef, 2015'te kabul edildi, 2030 hedef yılı.",
            "Hedefler kalkınmada ilerlemeyi ölçmeye yarar; mikrokredi ve toplu taşıma projeleri somut örneklerdir.",
            "Yüzde puan ile göreli yüzde artışını ayırt et."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Hangisi, kitlesel tüketimin yol açtığı sorunu azaltmaya yönelik bir sürdürülebilir kalkınma politikasıdır?",
      opts: ["Yeraltı suyunu yenilenmeden daha hızlı çekmek", "Geri dönüşüm ve ürünlerin onarılarak yeniden kullanımını teşvik etmek", "Fosil yakıt kullanımını artırmak", "Ormanları kesip yerine otlak yapmak"],
      a: 1,
      why: "Geri dönüşüm ve yeniden kullanım atığı ve kaynak talebini azaltır. A şıkkı en çekici yanlış: yeraltı suyunun fazla çekilmesi kaynak tükenmesidir, çözüm değil." },
    { q: "Grafikteki iki yol için hangisi doğrudur?",
      fig: { type: "graph", xlabel: "Zaman", ylabel: "Kaynak stoğu", xmax: 10, ymax: 10, lines: [{ from: [0.5, 9], to: [9.5, 0.2], label: "X" }, { from: [0.5, 9], to: [9.5, 8.3], label: "Y" }], caption: "Şematik eğriler" },
      opts: ["X sürdürülebilir kullanım, Y aşırı tüketimdir", "İki yol da aynı sonucu verir", "X, kaynağın hızla tükendiği yoldur; Y yenilenmeye yakın kullanım ve koruma yoludur", "X ve Y'nin kaynağın yenilenmesiyle ilişkisi yoktur"],
      a: 2,
      why: "X'te stok hızla azalıyor (aşırı tüketim); Y'de stok korunuyor (sürdürülebilir kullanım). A şıkkı en çekici yanlış: eğrilerin anlamını ters çeviriyor." },
    { q: "Bir ada köyünde yerel halk küçük pansiyonlar işletiyor, turistler küçük gruplar halinde yerel rehberlerle doğa yürüyüşü yapıyor ve giriş ücreti deniz kaplumbağası yuvalama alanını korumaya gidiyor. Bu örnek neyi gösterir?",
      opts: ["Ekoturizm: doğayı korurken yerel halka iş sağlar", "Kitle turizmi: büyük oteller ve çok sayıda turist", "Sanayisizleşme", "Doğal kaynak tükenmesi"],
      a: 0,
      why: "Doğal alan, küçük gruplar, yerel istihdam ve koruma: ekoturizm. B şıkkı en çekici yanlış: kitle turizmi büyük otelleri ve yoğun ziyareti anlatır, burada tam tersi var." },
    { q: "Bir ülke kırsal kadınlara küçük kredi veren bir program başlatıyor ve kaç kadının işletme kurduğunu yıllık olarak raporluyor. Bu durumun BM Sürdürülebilir Kalkınma Hedefleri ile ilişkisi nedir?",
      opts: ["Hiçbir ilişkisi yoktur", "Yalnızca iklim eylemi hedefine hizmet eder", "Küçük ölçekli finans, kalkınmada ilerlemeyi ölçmek için kullanılabilen bir örnektir (yoksulluk, toplumsal cinsiyet eşitliği ve işle ilgili hedefler)", "Hedefler yalnızca çevre politikalarını kapsar"],
      a: 2,
      why: "CED: SDG'ler kalkınmada ilerlemeyi ölçmeye yardım eder; küçük ölçekli finans ve toplu taşıma örnek verilir. B şıkkı en çekici yanlış: mikrokredi doğrudan yoksulluk ve toplumsal cinsiyet hedeflerine bağlanır, yalnızca iklime değil." },
    { q: "Tabloya göre aşağıdaki yorumlardan hangisi doğrudur?",
      fig: { type: "table", caption: "Bir kentte toplu taşıma kullanım payı", head: ["Yıl", "Toplu taşıma payı (%)"], rows: [["2020", 20], ["2025", 35]] },
      opts: ["Pay 15 yüzde puan arttı; bu, göreli olarak yüzde 75'lik bir artıştır", "Pay yüzde 35 puan arttı", "Pay yüzde 15 oranında göreli olarak arttı", "Pay azaldı"],
      a: 0,
      why: "35 − 20 = 15 yüzde puan; 15 ÷ 20 = yüzde 75 göreli artış. C şıkkı en çekici yanlış: 15'i hem puan hem göreli yüzde olarak karıştırıyor." }
  ]
};
