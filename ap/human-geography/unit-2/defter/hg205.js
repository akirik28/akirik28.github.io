/* Kitpath not defteri · hg205 · Demografik Dönüşüm Modeli (The Demographic Transition Model)
   Kaynak: AP HuG CED Topic 2.5 (IMP-2.B.1, 2.B.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg205",
  amac: "Bu konu demografik dönüşüm modelini (*DTM*) anlatıyor: ülkelerin doğum ve ölüm hızlarının zamanla beş evrede nasıl değiştiğini gösteren model. Evreleri, nedenlerini, epidemiyolojik geçişi ve modelin sınırlarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Model nedir, beş evre hangileri?",
      kisa: "*DTM*, doğum ve ölüm hızlarının zamanla beş evrede değiştiğini söyler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔄", terim: "Demographic transition model (DTM)", tr: "demografik dönüşüm modeli", tanim: "Bir ülkenin *CBR* ve *CDR* değerlerinin sanayileşme ve kalkınmayla birlikte beş evrede değiştiğini gösteren model. Önce ölüm, sonra doğum düşer.", ornek: "Avrupa'da 18.–20. yüzyıllarda gözlenen değişim." }
          ] },
        { tip: "harita", merkez: "*DTM*: beş evre", dallar: [
            { baslik: "1. evre: yüksek durağan", alt: "*CBR* ve *CDR* çok yüksek" },
            { baslik: "2. evre: erken genişleyen", alt: "*CDR* düşer, *CBR* yüksek" },
            { baslik: "3. evre: geç genişleyen", alt: "*CBR* düşmeye başlar" },
            { baslik: "4. evre: düşük durağan", alt: "İkisi de düşük" },
            { baslik: "5. evre: daralan", alt: "*CBR* < *CDR*" }
          ] }
      ]
    },
    {
      baslik: "*DTM* grafiği",
      kisa: "Nüfus, *CBR* ile *CDR* arasındaki makas açıldıkça yükselir, kapandıkça düzleşir.",
      bloklar: [
        { tip: "grafik", baslik: "Beş evre (şematik)", xlabel: "Zaman →", ylabel: "Oran (‰) ve toplam nüfus (şematik)", xmax: 11, ymax: 10,
          xticks: [{ v: 1, label: "Evre 1" }, { v: 3, label: "Evre 2" }, { v: 5, label: "Evre 3" }, { v: 7, label: "Evre 4" }, { v: 9, label: "Evre 5" }],
          ogeler: [
            { id: "band", tip: "alan", renk: 3, noktalar: [[0, 0], [2, 0], [2, 10], [0, 10]] },
            { id: "cbr", tip: "egri", renk: 0, etiket: "CBR", noktalar: [[0, 8.4], [1, 8.4], [2, 8.3], [3, 8.0], [4, 7.2], [5, 4.8], [6, 3.0], [7, 2.4], [8, 2.2], [9, 1.8], [9.6, 1.7]] },
            { id: "cdr", tip: "egri", renk: 1, etiket: "CDR", noktalar: [[0, 8.0], [0.5, 8.7], [1, 7.9], [1.5, 8.5], [2, 7.8], [3, 5.2], [4, 3.2], [5, 2.4], [6, 2.0], [7, 1.9], [8, 2.0], [9, 2.4], [9.6, 2.6]] },
            { id: "pop", tip: "egri", renk: 2, etiket: "Nüfus", noktalar: [[0, 1.0], [1, 1.1], [2, 1.4], [3, 2.6], [4, 4.4], [5, 6.2], [6, 7.3], [7, 7.9], [8, 8.2], [9, 8.1], [9.6, 7.8]] },
            { id: "pb", tip: "nokta", renk: 0, x: 1, y: 8.4 },
            { id: "pd", tip: "nokta", renk: 1, x: 1, y: 7.9 },
            { id: "st", tip: "yazi", x: 1, y: 9.5, metin: "Durağan" }
          ],
          durumlar: [
            { metin: "==Evre 1 — yüksek durağan.== *CBR* ve *CDR* çok yüksek; salgın ve kıtlık ölümleri doğumları dengeler. Nüfus ya çok yavaş artar ya da dalgalanır." },
            { metin: "==Evre 2 — erken genişleyen.== *CDR* hızla düşer (gıda, temiz su, ilaç), *CBR* hâlâ çok yüksektir. Aradaki makas nüfusu hızla artırır: nüfus patlaması.", set: { band: { noktalar: [[2, 0], [4, 0], [4, 10], [2, 10]] }, pb: { x: 3, y: 8.0 }, pd: { x: 3, y: 5.2 }, st: { x: 3, metin: "Hızlı artış" } } },
            { metin: "==Evre 3 — geç genişleyen.== Artık *CBR* de düşüyor (kentleşme, kadın eğitimi, doğum kontrolü). *CDR* düşük kalır; makas daralır, büyüme yavaşlar.", set: { band: { noktalar: [[4, 0], [6, 0], [6, 10], [4, 10]] }, pb: { x: 5, y: 4.8 }, pd: { x: 5, y: 2.4 }, st: { x: 5, metin: "Yavaşlama" } } },
            { metin: "==Evre 4 — düşük durağan.== *CBR* ve *CDR* ikisi de düşük ve birbirine yakın. *RNI* sıfıra yakın; nüfus büyük ve neredeyse sabit.", set: { band: { noktalar: [[6, 0], [8, 0], [8, 10], [6, 10]] }, pb: { x: 7, y: 2.4 }, pd: { x: 7, y: 1.9 }, st: { x: 7, metin: "Durağan" } } },
            { metin: "==Evre 5 — daralan.== *CBR*, *CDR*'nin altına iner (nüfus yaşlıdır). *RNI* negatiftir; göç yoksa nüfus azalır.", set: { band: { noktalar: [[8, 0], [10, 0], [10, 10], [8, 10]] }, pb: { x: 9, y: 1.8 }, pd: { x: 9, y: 2.4 }, st: { x: 9, metin: "Azalma" } } }
          ] },
        { tip: "not", metin: "Grafiği şöyle oku: iki oran eğrisi arasındaki ==boşluk (makas)== *RNI*'yı verir. Boşluk açıldıkça (2. evre) toplam nüfus eğrisi dikleşir; kapandıkça (4. evre) düzleşir; ters yönde açılırsa (5. evre) aşağı kıvrılır." }
      ]
    },
    {
      baslik: "Evreleri karşılaştır",
      kisa: "Evreyi bulmak için *CBR* ve *CDR*'ye ve piramit şekline bak.",
      bloklar: [
        { tip: "tablo", baslik: "Beş evre bir arada", head: ["Evre", "*CBR*", "*CDR*", "Nüfus", "Piramit", "Örnek"], rows: [
            ["1. Yüksek durağan", "Çok yüksek", "Çok yüksek", "Neredeyse sabit", "Çok geniş taban, dar tepe", "Sanayi öncesi toplumlar (bugün neredeyse hiç ülke yok)"],
            ["2. Erken genişleyen", "Çok yüksek", "Hızla düşer", "Çok hızlı artar", "Genişleyen", "Nijer, Çad"],
            ["3. Geç genişleyen", "Hızla düşer", "Düşük", "Artar ama yavaşlar", "Taban daralmaya başlar", "Mısır, Pakistan"],
            ["4. Düşük durağan", "Düşük", "Düşük", "Neredeyse sabit", "Dik kenarlı", "ABD"],
            ["5. Daralan", "*CDR*'den düşük", "Düşük", "Azalır", "Dar taban, geniş üst", "Japonya, İtalya, Güney Kore"]
          ], not: "Örnekler ders kitabı sınıflamasıdır; ülkeler evreler arasında yaklaşık yerlere oturur. Türkiye 20. yüzyılda 2. ve 3. evrelerden geçmiş, doğurganlığı bugün yenileme düzeyinin altına inmiştir." },
        { tip: "ornek", baslik: "Veriden evre bulmak", durum: "A ülkesinde *CBR* 42, *CDR* 11. B ülkesinde *CBR* 9, *CDR* 11. Göç yok. İkisinin *RNI* değerini ve evresini bul; A'nın nüfusu kaç yılda ikiye katlanır?",
          adimlar: ["A: (42 − 11) ÷ 10 = %3,1. *CBR* çok yüksek, *CDR* düşük: ==2. evre==. Süre: 70 ÷ 3,1 ≈ 23 yıl.", "B: (9 − 11) ÷ 10 = −%0,2. *CBR*, *CDR*'nin altında: ==5. evre==."],
          sonuc: "A hızlı büyüyen bir 2. evre ülkesi (nüfusu ~23 yılda iki katına çıkar); B göç olmazsa küçülen bir 5. evre ülkesi." }
      ]
    },
    {
      baslik: "Önce ölüm, sonra doğum düşer",
      kisa: "Ölüm hızı gıda ve tıpla hızla düşer; doğum hızı kültür ve kentleşmeyle geç düşer.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "💉", baslik: "2. evre: *CDR* neden düşer?", maddeler: ["Daha çok ve daha iyi gıda", "Temiz su, kanalizasyon, aşı ve ilaç"] },
          sag: { ikon: "🏙️", baslik: "3. evre: *CBR* neden düşer?", maddeler: ["Kentleşme, çocuğun maliyetinin artması", "Kadın eğitimi, doğum kontrolü, bebek ölümlerinin azalması"] },
          oyun: [
            { metin: "Aşı kampanyaları ve temiz içme suyu yaygınlaşıyor.", cevap: "sol", neden: "Hastalıktan ölümler azalır: *CDR* düşer." },
            { metin: "Kız çocukları okula gidiyor ve kadınlar çalışmaya başlıyor.", cevap: "sag", neden: "Evlilik yaşı ve çocuk sayısı düşer: *CBR* düşer." },
            { metin: "Bebek ölümleri azalınca aileler daha az çocuk doğuruyor.", cevap: "sag", neden: "Çocuğun hayatta kalacağından emin olan aile az çocuk ister." },
            { metin: "Tarımda verim artıyor, kıtlıklar seyrekleşiyor.", cevap: "sol", neden: "Açlık ölümleri azalır: *CDR* düşer." }
          ] },
        { tip: "tuzak", metin: "İki oranın aynı anda düştüğünü sanmak.", yanlis: "Ölüm ve doğum hızları birlikte düşer, bu yüzden nüfus hızla artmaz.", dogru: "==Ölüm hızı önce düşer==, çünkü gıda ve ilaç hızla yayılır; doğum hızı ise kültür, aile alışkanlıkları ve kentleşmeyle ancak sonradan düşer. Aradaki gecikme ==nüfus patlamasını== yaratır." }
      ]
    },
    {
      baslik: "Epidemiyolojik geçiş",
      kisa: "Epidemiyolojik geçiş, ölüm nedenlerinin bulaşıcı hastalıklardan kronik hastalıklara kaymasıdır.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "Evre 1", baslik: "Salgın ve kıtlık çağı", metin: "Veba, kolera gibi bulaşıcı hastalıklar ve kıtlık ölümlerin başlıca nedenidir; yaşam beklentisi çok kısadır." },
            { tarih: "Evre 2", baslik: "Gerileyen salgınlar çağı", metin: "Temiz su, beslenme ve aşılar salgınları seyrekleştirir; ölüm hızı düşer." },
            { tarih: "Evre 3", baslik: "Dejeneratif ve insan yapımı hastalıklar", metin: "Kalp hastalığı, kanser, felç; sigara, hareketsizlik, trafik kazaları ve kirlilik ön plana çıkar." },
            { tarih: "Evre 4", baslik: "Gecikmiş dejeneratif hastalıklar", metin: "Tıp (ameliyat, ilaç) kronik hastalıklardan ölümü geciktirir; yaşam beklentisi daha da uzar." },
            { tarih: "Evre 5", baslik: "Yeniden ortaya çıkan bulaşıcı hastalıklar", metin: "Küreselleşme, uçak yolculuğu ve antibiyotik direnci eski ve yeni bulaşıcı hastalıkları geri getirir (ör. COVID-19, HIV)." }
          ] },
        { tip: "tuzak", metin: "Epidemiyolojik geçişi *DTM* ile bir tutmak.", yanlis: "Epidemiyolojik geçiş doğum hızındaki düşüşü açıklar.", dogru: "Epidemiyolojik geçiş ==ölüm nedenlerinin== ve ==*CDR* değişiminin== nedenini açıklar. *DTM*'nin ölüm tarafını tamamlar; doğum hızıyla ilgisi yoktur." }
      ]
    },
    {
      baslik: "Modelin sınırları",
      kisa: "*DTM* bir genellemedir; her ülke aynı hızla ya da aynı yolla ilerlemez.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🇪🇺", baslik: "Avrupa deneyimine dayanır", metin: "Avrupa'da geçiş yüzyıllar sürdü. Bugün gelişmekte olan ülkelerde ölüm hızı ithal tıbbi teknolojiyle çok daha hızlı düştü; nüfus patlaması daha dik oldu." },
            { ikon: "🚶", baslik: "Göçü hesaba katmaz", metin: "Model yalnızca doğum ve ölümü izler; oysa birçok ülkenin nüfusu göçle değişir." },
            { ikon: "🧭", baslik: "Politika ve olaylar yolu değiştirir", metin: "Doğum politikaları (Çin), savaşlar ve salgınlar (HIV) bir ülkeyi beklenen sıradan saptırabilir." },
            { ikon: "💰", baslik: "Zenginlik şart değildir", metin: "Bazı ülkeler (Bangladeş) düşük gelirle ve aile planlaması programlarıyla doğurganlığı hızla düşürdü." },
            { ikon: "❓", baslik: "5. evre kesin değildir", metin: "Doğurganlığın sürekli düşmesi kesin değildir; bazı ülkeler doğum teşvikleriyle bunu tersine çevirmeye çalışır." }
          ] },
        { tip: "tuzak", metin: "Modeli bir yasa gibi okumak.", yanlis: "Her ülke 1. evreden 5. evreye sırayla geçer ve geri dönemez.", dogru: "*DTM* bir ==genelleme==dir. Ülkeler farklı hızlarda ilerler, bazıları evre atlar ya da duraksar; göç ve politikalar modelin dışında kalır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*DTM*: *CBR* ve *CDR*'nin zamanla beş evrede değiştiğini ve nüfus artışının bu iki oranın farkından geldiğini söyler.",
            "1. evre: ikisi de çok yüksek, nüfus sabit. 2. evre: *CDR* düşer, *CBR* yüksek, nüfus patlaması.",
            "3. evre: *CBR* düşer, büyüme yavaşlar. 4. evre: ikisi de düşük, *RNI* ≈ 0.",
            "5. evre: *CBR* < *CDR*, *RNI* negatif; nüfus yaşlı ve göç yoksa azalır.",
            "Ölüm önce düşer (gıda, temiz su, tıp); doğum sonra düşer (kentleşme, kadın eğitimi, doğum kontrolü).",
            "Epidemiyolojik geçiş ölüm nedenlerinin değişimini açıklar: salgın ve kıtlık → gerileyen salgınlar → kronik hastalıklar → gecikmiş kronik hastalıklar → yeniden ortaya çıkan bulaşıcılar.",
            "Piramitler evrelere denk gelir: genişleyen (2–3), durağan (4), daralan (5).",
            "*DTM* Avrupa deneyimine dayanan bir genellemedir; göçü hesaba katmaz ve ülkeler aynı yolu aynı hızla izlemez."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tablodaki üç ülkenin *DTM* evreleri hangi seçenekte doğru eşleştirilmiştir?",
      fig: { type: "table", caption: "Üç ülkenin demografik göstergeleri (‰)", head: ["Ülke", "CBR", "CDR"], rows: [["A", 38, 9], ["B", 11, 9], ["C", 9, 12]] },
      opts: ["A: 1. evre, B: 3. evre, C: 4. evre", "A: 3. evre, B: 5. evre, C: 4. evre", "A: 2. evre, B: 4. evre, C: 5. evre", "A: 2. evre, B: 5. evre, C: 5. evre"],
      a: 2,
      why: "A'da *CBR* çok yüksek, *CDR* düşük: 2. evre. B'de ikisi de düşük ve yakın: 4. evre. C'de *CBR* < *CDR*: 5. evre. D şıkkı en çekici yanlış: B'nin *CBR*'ı *CDR*'den hâlâ yüksek, yani doğal artış pozitif; 5. evre değildir." },
    { q: "Bir ülkede aşı kampanyaları, temiz içme suyu ve kanalizasyon yaygınlaşıyor. Ölüm hızı hızla düşüyor, doğum hızı ise yüksek kalıyor. En olası sonuç hangisidir?",
      opts: ["*RNI* yükselir ve nüfus hızla artar; ülke 2. evrededir", "Nüfus hızla azalır, çünkü ölüm hızı düşmüştür", "Ülke 4. evreye geçmiştir, çünkü *CDR* düşüktür", "*CBR* de aynı hızla düşer ve büyüme yavaşlar"],
      a: 0,
      why: "*CDR* düşerken *CBR* yüksek kalırsa makas açılır, *RNI* yükselir: 2. evre. C şıkkı en çekici yanlış: 4. evre için *CBR* de düşük olmalıdır. D şıkkı ise doğum hızının ölüm hızıyla aynı anda düştüğünü varsayar; oysa doğum hızı gecikmeli düşer." },
    { q: "Bir ülkede yıllar içinde ölümlerin çoğu kolera ve tüberkülozdan değil, kalp hastalıkları ve kanserden olmaya başlıyor. Bu durumu en iyi hangi kavram açıklar?",
      opts: ["Doğurganlık geçişi: doğum hızının düşmesi", "Göç geçişi: kentlere akın", "Malthus krizi: gıdanın yetmemesi", "Epidemiyolojik geçiş: ölüm nedenlerinin değişmesi"],
      a: 3,
      why: "Epidemiyolojik geçiş, bulaşıcı hastalıklardan kronik ve dejeneratif hastalıklara kayışı ve *CDR*'nin nedenlerini açıklar. A şıkkı en çekici yanlış: doğum hızı konusu *DTM*'nin doğum tarafıdır; burada ölüm nedenleri değişiyor." },
    { q: "*DTM*'ye yöneltilen en yaygın eleştiri hangisidir?",
      opts: ["Model yalnızca ölüm hızını açıklar, doğum hızını hiç hesaba katmaz", "Model Batı Avrupa deneyimine dayanır, göçü içermez ve her ülke aynı hızda ya da aynı yolla ilerlemez", "Model nüfusun hiçbir zaman artmayacağını varsayar", "Model evrelerin sırasının ülkeden ülkeye mutlaka değiştiğini söyler"],
      a: 1,
      why: "Model Avrupa'nın deneyimine dayanır; göçü, politikaları ve ülkeler arası hız farklarını hesaba katmaz. A şıkkı en çekici yanlış: *DTM* hem *CBR* hem *CDR* değişimini anlatır; eksik olan göçtür." },
    { q: "Bir ülkede *CBR* 44, *CDR* 14'tür ve göç yoktur. Hangisi doğrudur?",
      opts: ["*RNI* %30'dur; ülke 4. evrededir", "*RNI* %3,0'dır; ülke 4. evrededir", "*RNI* %3,0'dır; ülke 2. evrededir ve nüfus yaklaşık 23 yılda iki katına çıkar", "*RNI* %5,8'dir; ülke 3. evrededir"],
      a: 2,
      why: "*RNI* = (44 − 14) ÷ 10 = %3,0; *CBR* çok yüksek olduğundan 2. evre. Süre = 70 ÷ 3 ≈ 23 yıl. A şıkkı en çekici yanlış: 30 binde bir değerdir, yüzdeye çevirmek için 10'a bölünmelidir." }
  ]
};
