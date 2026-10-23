/* Kitpath not defteri · py208 · 2.8 Zekâ ve Başarı
   Kaynak: AP Psychology CED 2024, Topic 2.8 (2.8.A.1, 2.8.B.1–3, 2.8.C.1–3, 2.8.D.1–2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py208",
  amac: "Bu konu zekânın nasıl tanımlandığını ve ölçüldüğünü anlatıyor. Zekâ kuramlarını, IQ ve normal dağılımı, bir testin standart, güvenilir ve geçerli olma koşullarını, Flynn etkisini, stereotip tehdidini ve başarı ile zekâ arasındaki farkı öğreneceksin.",
  bolumler: [
    {
      baslik: "Zekâ: *g* mi, çok yetenek mi?",
      kisa: "Zekânın tek bir genel yetenek mi, çok sayıda yetenek mi olduğu tartışılır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧠", terim: "Intelligence", tr: "zekâ", tanim: "Akıl yürütme, öğrenme ve çevreye uyum gibi zihinsel yeteneklerin bütünü. Tarih boyunca tanımı ve ölçümü konusunda uzlaşma zordur ve önyargıya açıktır.", ornek: "Bir dönemde \"zekâ\" sayılan şey, başka bir toplumda aynı değildir." },
            { ikon: "🧲", terim: "General intelligence (g)", tr: "genel zekâ", tanim: "Farklı zihinsel testlerdeki başarıyı birlikte etkileyen, tek bir genel yetenek fikri.", ornek: "Matematikte iyi olanların sıklıkla okuma ve mantık sorularında da iyi olması." }
          ] },
        { tip: "ikili", sol: { ikon: "🎯", baslik: "Genel yetenek (*g*)", maddeler: ["Zekâ tek bir genel yetenektir", "Farklı testler birbiriyle ilişkilidir"] },
          sag: { ikon: "🌈", baslik: "Çoklu yetenekler", maddeler: ["Zekâ birden çok yetenekten oluşur", "Birinde güçlü olan, diğerinde güçlü olmak zorunda değil"] },
          oyun: [
            { metin: "Bir testte yüksek başarı gösteren öğrencilerin başka testlerde de yüksek puan alma eğilimi var.", cevap: "sol", neden: "Başarılar arasında ortak bir faktör: *g*." },
            { metin: "Bir öğrenci müzikte olağanüstü, matematikte ise sıradan; yine de zeki sayılmalı.", cevap: "sag", neden: "Yetenekler bağımsız olabilir: çoklu yetenek." },
            { metin: "Zekâ tek bir sayıyla özetlenebilir.", cevap: "sol", neden: "Tek bir genel yetenek varsayımı: *g*." },
            { metin: "Zekâyı ölçmek için dil, mantık, müzik ve doğa gibi ayrı alanlara bakmak gerekir.", cevap: "sag", neden: "Birden çok yetenek: çoklu zekâ yaklaşımı." }
          ] },
        { tip: "tuzak", metin: "Zekâ konusunda bilimsel görüş tek ve kesin değildir.", yanlis: "Zekânın tek bir kabul edilmiş tanımı ve ölçüsü vardır.", dogru: "Zekânın nasıl tanımlanıp ölçüleceği konusunda ==uzlaşma yoktur==; ölçümler önyargıdan etkilenebilir. Araştırmacılar *g* ile çoklu yetenekler arasında tartışır." }
      ]
    },
    {
      baslik: "Gardner ve Sternberg",
      kisa: "Gardner sekiz, Sternberg üç tür zekâ önerir; ikisi de tek *g* fikrine karşı çıkar.",
      bloklar: [
        { tip: "harita", merkez: "Gardner: *multiple intelligences*", dallar: [
            { baslik: "Dilsel", alt: "Söz ve yazı" },
            { baslik: "Mantıksal-matematiksel", alt: "Sayılar, akıl yürütme" },
            { baslik: "Uzamsal", alt: "Şekil, yön, görsel düşünme" },
            { baslik: "Müziksel", alt: "Ritim, ezgi" },
            { baslik: "Bedensel-kinestetik", alt: "Hareket, dans, spor" },
            { baslik: "Kişilerarası", alt: "Başkalarını anlamak" },
            { baslik: "Kişisel (içsel)", alt: "Kendini anlamak" },
            { baslik: "Doğacı", alt: "Doğayı ve canlıları tanımak" }
          ] },
        { tip: "tablo", baslik: "Sternberg: *triarchic theory* (üçlü kuram)", head: ["Tür", "Ne demek?", "Örnek"], rows: [
            ["*Analytical*", "Problemleri analiz etmek, çözmek", "Çoktan seçmeli sorulara ve sınavlara iyi yanıt vermek"],
            ["*Creative*", "Yeni fikirler üretmek", "Alışılmadık bir proje fikri bulmak"],
            ["*Practical*", "Günlük hayatta işe yarar çözümler bulmak", "Bozulan bir işi pratik bir yolla toparlamak"]
          ], not: "Sternberg'e göre okul testleri çoğunlukla yalnızca analitik zekâyı ölçer." },
        { tip: "tuzak", metin: "Çoklu zekâ kuramı sık sık yanlış anlaşılır.", yanlis: "Gardner'ın sekiz zekâsı, \"öğrenme stilleri\"dir.", dogru: "Gardner'ın zekâ türleri ==yetenek alanlarıdır==, bilgiyi alış biçimi (öğrenme stili) değildir." }
      ]
    },
    {
      baslik: "IQ nasıl hesaplanır?",
      kisa: "Eski IQ, zihinsel yaşın takvim yaşına bölünüp 100 ile çarpılmasıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "IQ" }, "=",
            { t: "Zihinsel yaş", alt: "*mental age*: testi çözdüğün yaş düzeyi" }, "÷",
            { t: "Takvim yaşı", alt: "*chronological age*" }, "×",
            { t: "100" }
          ], aciklama: "Erken zekâ testleri IQ'yu bu formülle buldu. Günümüzde IQ puanları, ==eğitim hizmetleri için öğrenci belirleme== gibi alanlarda da kullanılır." },
        { tip: "ornek", baslik: "İki öğrenci, iki IQ", durum: "İki 10 yaşındaki öğrenci bir zekâ testi çözüyor. Birincisi 12 yaş düzeyindeki soruları çözüyor, ikincisi 10 yaş düzeyindeki soruları çözüyor. IQ'larını hesapla.",
          adimlar: ["Birincisi: zihinsel yaş 12, takvim yaşı 10 → 12 ÷ 10 = 1,2 → × 100 = 120.", "İkincisi: zihinsel yaş 10, takvim yaşı 10 → 10 ÷ 10 = 1 → × 100 = 100."],
          sonuc: "Zihinsel yaş = takvim yaşı olduğunda IQ ==100==; zihinsel yaş takvim yaşından büyükse IQ 100'ün üstündedir." },
        { tip: "tuzak", metin: "Eski formül ile bugünkü ölçüm aynı değildir.", yanlis: "Günümüz testleri hâlâ zihinsel yaşı takvim yaşına bölerek IQ bulur.", dogru: "Modern testler puanı, ==aynı yaştaki norm grubuna göre== belirler; ortalama 100 alınır. Formül erken testlerin yöntemiydi." }
      ]
    },
    {
      baslik: "Standardizasyon ve normal dağılım",
      kisa: "Standart bir testte herkes aynı koşulda sınanır; puanlar çan eğrisi çizer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Standardization", tr: "standardizasyon", tanim: "Testin herkese aynı yönerge, süre ve koşullarla uygulanması. Böylece puanlar adil biçimde karşılaştırılabilir.", ornek: "Herkesin aynı süreyle, aynı soruları, benzer bir sınıfta çözmesi." },
            { ikon: "🔔", terim: "Normal distribution", tr: "normal dağılım", tanim: "Puanların çoğunun ortalamada toplandığı, uçlara doğru azaldığı simetrik çan eğrisi.", ornek: "Çoğu öğrencinin orta puan alması, çok yüksek ve çok düşük puanların nadir olması." }
          ] },
        { tip: "grafik", baslik: "Zekâ puanlarının çan eğrisi (ortalama 100, standart sapma 15)", xlabel: "IQ puanı", ylabel: "Kişi sayısı (göreli)", xmax: 8, ymax: 10,
          xticks: [{ v: 1, label: "55" }, { v: 2, label: "70" }, { v: 3, label: "85" }, { v: 4, label: "100" }, { v: 5, label: "115" }, { v: 6, label: "130" }, { v: 7, label: "145" }],
          yticks: [],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[1, 0.09], [1.5, 0.35], [2, 1.08], [2.5, 2.6], [3, 4.85], [3.5, 7.06], [4, 8], [4.5, 7.06], [5, 4.85], [5.5, 2.6], [6, 1.08], [6.5, 0.35], [7, 0.09]] },
            { id: "m", tip: "cizgi", renk: 1, kesik: true, from: [4, 0], to: [4, 8.8], etiket: "", gizli: true },
            { id: "mt", tip: "yazi", x: 4, y: 9.4, metin: "ortalama = 100", gizli: true },
            { id: "a95", tip: "alan", renk: 3, noktalar: [[2, 0], [2, 1.08], [2.5, 2.6], [3, 4.85], [3.5, 7.06], [4, 8], [4.5, 7.06], [5, 4.85], [5.5, 2.6], [6, 1.08], [6, 0]], gizli: true },
            { id: "t95", tip: "yazi", x: 6.9, y: 4.2, metin: "70–130 ≈ %95", hiza: "end", gizli: true },
            { id: "a68", tip: "alan", renk: 2, noktalar: [[3, 0], [3, 4.85], [3.5, 7.06], [4, 8], [4.5, 7.06], [5, 4.85], [5, 0]], gizli: true },
            { id: "t68", tip: "yazi", x: 4, y: 3, metin: "85–115 ≈ %68", gizli: true }
          ],
          durumlar: [
            { metin: "Çok sayıda kişiye uygulanıp standartlaştırılan zekâ testlerinde puanlar çan biçiminde dağılır." },
            { metin: "Ortalama 100'dür. Çoğu kişi bu değerin yakınında toplanır.", goster: ["m", "mt"] },
            { metin: "Ortalamadan 1 standart sapma (15 puan) uzaklıkta, yani ==85–115 arasında kişilerin yaklaşık %68'i== bulunur.", goster: ["a68", "t68"] },
            { metin: "2 standart sapma içinde (==70–130==) kişilerin yaklaşık ==%95'i== vardır; uçlarda çok az kişi kalır.", goster: ["a95", "t95"] }
          ] },
        { tip: "tuzak", metin: "\"Standart\" kelimesi zorluk ya da soru türüyle ilgili değildir.", yanlis: "Standart test, çoktan seçmeli testtir.", dogru: "Standart test, ==herkese aynı yönerge, süre ve koşullarla== uygulanan testtir." }
      ]
    },
    {
      baslik: "Güvenirlik ve geçerlik",
      kisa: "Güvenilir test tutarlı sonuç verir; geçerli test ölçmek istediğini ölçer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔁", terim: "Test-retest reliability", tr: "yeniden test güvenirliği", tanim: "Aynı testi aynı kişilere farklı zamanda uygulayınca benzer puanlar çıkması.", ornek: "Zekâ testini bir ay arayla iki kez çözen öğrencinin puanlarının yakın olması." },
            { ikon: "✂️", terim: "Split-half reliability", tr: "yarıya bölme güvenirliği", tanim: "Testin iki yarısındaki puanların birbiriyle tutarlı olması.", ornek: "Tek sorular ve çift sorular benzer puan verirse güvenilirdir." },
            { ikon: "🧪", terim: "Construct validity", tr: "yapı geçerliği", tanim: "Testin, ölçmek istediği soyut kavramı (örneğin zekâyı) gerçekten ölçmesi.", ornek: "Zekâ testinde sadece okuma hızı ölçülüyorsa geçerliği düşüktür." },
            { ikon: "🔮", terim: "Predictive validity", tr: "yordama geçerliği", tanim: "Test puanının gelecekteki bir sonucu (örneğin ilerideki başarıyı) öngörmesi.", ornek: "Giriş testinin, üniversite not ortalamasını yordaması." }
          ] },
        { tip: "ikili", sol: { ikon: "🔁", baslik: "Güvenirlik (*reliability*)", maddeler: ["Her seferinde benzer sonuç", "*Test-retest*, *split-half*"] },
          sag: { ikon: "🎯", baslik: "Geçerlik (*validity*)", maddeler: ["Ölçmesi gerekeni ölçmek", "*Construct*, *predictive*"] },
          oyun: [
            { metin: "Bir terazi aynı nesneyi tartınca her seferinde aynı sonucu veriyor.", cevap: "sol", neden: "Tutarlılık: güvenirlik." },
            { metin: "Bir test, öğrencinin gelecek yılki başarısını doğru biçimde öngörüyor.", cevap: "sag", neden: "Gelecekteki sonucu yordama: *predictive validity*." },
            { metin: "Bir ayakkabı numarası testi, kişinin zekâsını ölçtüğünü iddia ediyor.", cevap: "sag", neden: "Ölçmesi gerekeni ölçmüyor: geçerlik yok." },
            { metin: "Testin iki yarısının puanları birbirine çok yakın çıkıyor.", cevap: "sol", neden: "İç tutarlılık: *split-half reliability*." }
          ] },
        { tip: "tuzak", metin: "Tutarlı olmak, doğru olmak demek değildir.", yanlis: "Güvenilir bir test her zaman geçerlidir.", dogru: "Bir terazi her seferinde 2 kg fazla gösteriyorsa ==güvenilirdir== ama ==geçerli değildir==. Geçerli bir test güvenilir olmak zorundadır, ama tersi doğru değildir." }
      ]
    },
    {
      baslik: "Puanlar zamanla ve gruplar arasında",
      kisa: "Puanlar kuşaklar boyunca yükseldi; grup içi fark, gruplar arası farktan büyüktür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Flynn effect", tr: "Flynn etkisi", tanim: "Dünyanın birçok yerinde IQ puanlarının zaman içinde genel olarak artması. Gelir düzeyi, sağlık hizmetleri ve beslenme gibi toplumsal etkenlerle açıklanır.", ornek: "Büyükannenin dönemindeki test normları, bugünün öğrencileri için çok kolay kalır." }
          ] },
        { tip: "grafik", baslik: "Aynı test, eski normlarla puanlanırsa", xlabel: "On yıl", ylabel: "Ortalama IQ", xmax: 7, ymax: 10,
          xticks: [{ v: 1, label: "1950" }, { v: 2, label: "1960" }, { v: 3, label: "1970" }, { v: 4, label: "1980" }, { v: 5, label: "1990" }, { v: 6, label: "2000" }],
          yticks: [{ v: 3, label: "100" }, { v: 5, label: "106" }, { v: 8, label: "115" }],
          ogeler: [
            { id: "n", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [7, 3], etiket: "Güncel normlarla: 100", gizli: true },
            { id: "f", tip: "egri", renk: 0, etiket: "Eski normlarla", noktalar: [[1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 8]], gizli: true },
            { id: "yz", tip: "yazi", x: 3.5, y: 9.2, metin: "yaklaşık +3 puan / 10 yıl (şematik)", gizli: true }
          ],
          durumlar: [
            { metin: "Testler zaman zaman yeniden standartlaştırılır; böylece ortalama sürekli 100 kabul edilir.", goster: ["n"] },
            { metin: "Aynı test eski normlarla puanlandığında ortalamalar ==yıllar içinde yükselir==: *Flynn effect*.", goster: ["f"] },
            { metin: "Bu artış, daha iyi beslenme, sağlık hizmeti ve eğitim gibi ==toplumsal etkenlerle== açıklanır.", goster: ["yz"] }
          ] },
        { tip: "grafik", baslik: "Grup içi fark, gruplar arası farktan büyüktür (varsayımsal)", xlabel: "IQ puanı", ylabel: "Kişi sayısı (göreli)", xmax: 8, ymax: 10,
          xticks: [{ v: 1, label: "55" }, { v: 2, label: "70" }, { v: 3, label: "85" }, { v: 4, label: "100" }, { v: 5, label: "115" }, { v: 6, label: "130" }, { v: 7, label: "145" }],
          yticks: [],
          ogeler: [
            { id: "a", tip: "egri", renk: 0, etiket: "Grup A", noktalar: [[1, 0.09], [1.5, 0.35], [2, 1.08], [2.5, 2.6], [3, 4.85], [3.5, 7.06], [4, 8], [4.5, 7.06], [5, 4.85], [5.5, 2.6], [6, 1.08], [6.5, 0.35], [7, 0.09]], gizli: true },
            { id: "b", tip: "egri", renk: 2, kesik: true, etiket: "Grup B", noktalar: [[1.2, 0.09], [1.7, 0.35], [2.2, 1.08], [2.7, 2.6], [3.2, 4.85], [3.7, 7.06], [4.2, 8], [4.7, 7.06], [5.2, 4.85], [5.7, 2.6], [6.2, 1.08], [6.7, 0.35], [7.2, 0.09]], gizli: true },
            { id: "w", tip: "ok", renk: 1, from: [2, 9.2], to: [6, 9.2], gizli: true },
            { id: "wt", tip: "yazi", x: 4, y: 9.7, metin: "grup içindeki yayılım geniş", gizli: true },
            { id: "bt", tip: "yazi", x: 4.1, y: 1.4, metin: "ortalamalar arası fark küçük", gizli: true }
          ],
          durumlar: [
            { metin: "Bir grubun puan dağılımı: kişiler çok geniş bir aralığa yayılmış.", goster: ["a"] },
            { metin: "İkinci bir grubun dağılımı da geniş; iki eğri ==büyük ölçüde üst üste biniyor==.", goster: ["b"] },
            { metin: "Bir grup içindeki kişiler arası fark, iki grubun ortalaması arasındaki farktan çok daha büyük. Bu yüzden ==bireyi grubun ortalamasına bakarak yargılamak yanıltıcıdır==.", goster: ["w", "wt", "bt"] }
          ] },
        { tip: "tuzak", metin: "Flynn etkisinin nedeni yanlış yorumlanabilir.", yanlis: "Flynn etkisi, genlerin birkaç kuşakta zekâyı yükseltmesidir.", dogru: "Bu kadar kısa sürede etkili olan, ==toplumsal etkenlerdir==: gelir düzeyi, sağlık hizmeti, beslenme ve eğitim." }
      ]
    },
    {
      baslik: "Adil ölçme: stereotip tehdidi ve eşitsizlik",
      kisa: "Klişeler performansı düşürebilir; test puanları eşitsizlikten ve önyargıdan etkilenir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "😰", terim: "Stereotype threat", tr: "stereotip tehdidi", tanim: "Kendi grubuyla ilgili olumsuz bir klişeyi doğrulamaktan kaygılanmak ve bu yüzden daha kötü performans göstermek.", ornek: "Sınavdan önce \"senin gibiler bu konuda zayıftır\" klişesini duyan öğrencinin kaygıyla puanının düşmesi." },
            { ikon: "⬆️", terim: "Stereotype lift", tr: "stereotip yükselmesi", tanim: "Olumsuz klişeye konu olmayan grubun üyelerinin, klişe hatırlatılınca performansında artış göstermesi; ==eşitsizliği büyütebilir==.", ornek: "Olumsuz klişenin hedefi olmayan grup, klişe hatırlatılınca kendini o grupla kıyaslayıp biraz daha iyi puan alabilir." }
          ] },
        { tip: "adimlar", baslik: "Stereotip tehdidi nasıl işler?", adimlar: [
            { baslik: "Klişe hatırlatılır", metin: "Sınavdan önce, kişinin grubuyla ilgili olumsuz bir klişe akla getirilir." },
            { baslik: "Kaygı artar", metin: "Kişi, klişeyi doğrulamaktan çekinir ve gerilir." },
            { baslik: "Performans düşer", metin: "Kaygı dikkati ve çalışma belleğini yorar; yeteneği değil, o andaki performansı düşer." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🏠", baslik: "Yoksulluk, ayrımcılık ve eğitimde eşitsizlik", metin: "Bireylerin ve toplumsal grupların puanlarını olumsuz etkileyebilir." },
            { ikon: "⚖️", baslik: "Kişisel ve toplumsal önyargılar", metin: "Bir puanın yorumunu ve başka sonuçlarla ilişkisini etkileyebilir." },
            { ikon: "🚪", baslik: "Tarihî kötüye kullanım", metin: "Zekâ testi puanları iş, askerî rütbe, eğitim kurumları ve ABD'ye göç gibi alanlarda erişimi sınırlamak için kullanılmıştır." },
            { ikon: "🌍", baslik: "Sosyokültürel olarak duyarlı testler", metin: "Araştırmacılar stereotip tehdidini ve eşitsizliği azaltacak testler geliştirmeye çalışır." }
          ] },
        { tip: "tuzak", metin: "Performans düşüşünün nedeni sanılanın tersi olabilir.", yanlis: "Stereotip tehdidi, grubun gerçekten daha düşük yeteneği olduğunu gösterir.", dogru: "Düşüşe neden olan ==kaygıdır==; yetenek değil. Aynı kişiler klişe hatırlatılmadığında daha iyi performans gösterebilir." }
      ]
    },
    {
      baslik: "Başarı ve yetenek testleri, zihniyet",
      kisa: "Başarı testi öğrendiğini, yetenek testi gelecekteki performansı ölçer; zihniyet de rol oynar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📚", baslik: "*Achievement test*", maddeler: ["Bugüne kadar ne bildiğini ölçer", "Örnek: ders sonu sınavı"] },
          sag: { ikon: "🔮", baslik: "*Aptitude test*", maddeler: ["Gelecekte nasıl performans göstereceğini öngörür", "Örnek: yeteneğe yönelik giriş testi"] },
          oyun: [
            { metin: "Dönem sonunda kimya ünitesini ne kadar öğrendiğini ölçen sınav.", cevap: "sol", neden: "Öğrenilmiş bilgiyi ölçer: *achievement*." },
            { metin: "Bir müzik okuluna girişte, ileride ne kadar gelişeceğini tahmin etmeye çalışan test.", cevap: "sag", neden: "Gelecekteki performansı öngörür: *aptitude*." },
            { metin: "Trafik ehliyeti yazılı sınavı: öğrendiğin kuralları ne kadar bildiğin.", cevap: "sol", neden: "Öğrenilen bilgiyi ölçer: *achievement*." },
            { metin: "Bir öğrencinin, üniversitedeki başarısını tahmin eden giriş sınavı.", cevap: "sag", neden: "Geleceği öngörmeye çalışır: *aptitude*." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Fixed mindset", tr: "sabit zihniyet", tanim: "Zekânın doğuştan belli ve değişmez olduğuna inanmak. Başarısızlıkta vazgeçmeye yol açabilir.", ornek: "\"Ben matematikte hiç iyi olamam, böyle doğdum.\"" },
            { ikon: "🌱", terim: "Growth mindset", tr: "gelişim zihniyeti", tanim: "Zekânın deneyim ve çabayla geliştirilebileceğine inanmak. Akademik başarıyı olumlu etkileyebilir.", ornek: "\"Şimdi zorlanıyorum ama çalışırsam gelişirim.\"" }
          ] },
        { tip: "tuzak", metin: "İki test türünü karıştırmak kolay.", yanlis: "*Aptitude test*, bugüne kadar öğrendiklerini ölçer.", dogru: "==*Achievement*== öğrenilmiş bilgiyi ölçer; ==*aptitude*== gelecekteki performansı öngörmeye çalışır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Zekânın tanımı ve ölçümü tartışmalıdır; *g* tek bir genel yetenek, Gardner (sekiz zekâ) ve Sternberg (analitik, yaratıcı, pratik) çoklu yetenekleri savunur.",
            "Eski IQ = zihinsel yaş ÷ takvim yaşı × 100; modern IQ, norm grubuna göre belirlenir (ortalama 100, standart sapma 15).",
            "Standart test herkese aynı koşulda uygulanır; zekâ puanları normal dağılır: ±1 SD ≈ %68, ±2 SD ≈ %95.",
            "Güvenirlik tutarlılıktır (*test-retest*, *split-half*); geçerlik ölçmesi gerekeni ölçmektir (*construct*, *predictive*).",
            "*Flynn effect*: IQ puanları toplumsal etkenlerle zamanla yükselir. Grup içi fark, gruplar arası farktan büyüktür.",
            "Yoksulluk, ayrımcılık ve eğitimde eşitsizlik puanları etkiler; testler tarihte erişimi sınırlamak için kullanılmıştır.",
            "*Stereotype threat* kaygıyla performansı düşürür; *stereotype lift* eşitsizliği büyütebilir.",
            "*Achievement* ne öğrendiğini, *aptitude* gelecekteki performansı ölçer; sabit ve gelişim zihniyeti başarıyı etkiler."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir terazi, aynı nesneyi tartınca her seferinde aynı değeri gösteriyor, ancak her seferinde nesnenin gerçek ağırlığından 2 kg fazla gösteriyor. Bu terazi için aşağıdakilerden hangisi doğrudur?",
      opts: ["Hem güvenilir hem geçerlidir", "Geçerlidir ama güvenilir değildir", "Güvenilirdir ama geçerli değildir", "Ne güvenilir ne geçerlidir"],
      a: 2,
      why: "Aynı sonucu tutarlı biçimde vermek güvenirliktir; ancak ölçmesi gereken gerçek ağırlığı ölçmediği için geçerli değildir. En çekici yanlış şık A: tutarlılık, doğruluk sanılır; geçerlik ise ölçülmesi gerekeni ölçmeyi gerektirir." },
    { q: "Grafik, bir zekâ testinin standartlaştırma grubundaki puanlarını gösteriyor (ortalama 100, standart sapma 15). 130 puan alan bir kişi, grubun yaklaşık yüzde kaçından daha yüksek puan almıştır?",
      fig: { type: "hist", label: "IQ puanı", ylabel: "Kişi yüzdesi", bins: [{ from: 55, to: 70, n: 2 }, { from: 70, to: 85, n: 14 }, { from: 85, to: 100, n: 34 }, { from: 100, to: 115, n: 34 }, { from: 115, to: 130, n: 14 }, { from: 130, to: 145, n: 2 }] },
      opts: ["%2", "%50", "%84", "%98"],
      a: 3,
      why: "130, ortalamanın 2 standart sapma üstündedir. 130'un altında kalanlar: 2 + 14 + 34 + 34 + 14 = %98. En çekici yanlış şık C: %84, ortalamanın 1 standart sapma üstündeki (115) puana aittir." },
    { q: "Aylin, derste standart sınavlarda vasat bir not alıyor; ancak sıra dışı projeler tasarlıyor ve günlük sorunlara pratik çözümler buluyor. Bu durum hangi zekâ kuramıyla en iyi açıklanır?",
      opts: ["Spearman'ın *g* kuramı", "Sternberg'in *triarchic* kuramı", "*Flynn effect*", "IQ'nun zihinsel yaş formülü"],
      a: 1,
      why: "Yaratıcı ve pratik zekâ, Sternberg'in üçlü kuramının (analitik, yaratıcı, pratik) bileşenleridir; okul testleri çoğunlukla analitik zekâyı ölçer. En çekici yanlış şık A: *g* tek bir genel yetenek öngörür; Aylin'in farklı alanlardaki farklı performansı buna uymaz." },
    { q: "Bir ülkede 1980'de standartlaştırılan bir zekâ testi, 2020'de aynı normlarla uygulandığında ortalama puan 100'ün belirgin biçimde üzerinde çıkıyor. Bu durumun en olası açıklaması aşağıdakilerden hangisidir?",
      opts: ["*Flynn effect*: beslenme, sağlık ve eğitim gibi toplumsal etkenler IQ puanlarını yükseltmiştir", "*Stereotype lift*: testi çözenler bir klişe sayesinde daha iyi performans göstermiştir", "Test artık geçersizdir ve zekâyı ölçmemektedir", "İnsanların genleri bu kadar kısa sürede değişmiştir"],
      a: 0,
      why: "IQ puanlarının zamanla yükselmesi *Flynn effect*'tir ve toplumsal etkenlerle açıklanır. En çekici yanlış şık D: genlerin birkaç on yılda bu kadar değişmesi beklenmez; artışı beslenme, sağlık ve eğitim gibi çevresel etkenler açıklar." },
    { q: "Bir araştırmada, bir matematik sınavından önce bir öğrenci grubuna \"bu sınavda sizin gibi öğrenciler genelde düşük puan alır\" şeklindeki bir klişe hatırlatılıyor; hatırlatılmayan gruba göre bu grup belirgin biçimde daha düşük puan alıyor. Bu klişe gerçeği yansıtmasa da sonuç hangi kavramla açıklanır?",
      opts: ["*Flynn effect*", "*Test-retest reliability*", "*Stereotype threat*", "*Predictive validity*"],
      a: 2,
      why: "Olumsuz bir klişeyi doğrulama kaygısı performansı düşürür: *stereotype threat*. Düşüşe yeteneğin kendisi değil, kaygı neden olur. En çekici yanlış şık D: *predictive validity* test puanının gelecekteki bir sonucu öngörmesidir, kaygının performansı düşürmesiyle ilgili değildir." }
  ]
};
