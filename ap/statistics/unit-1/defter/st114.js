/* Kitora not defteri · st114 · 1G-2 Kötü Örnekleme ve Bias
   Kaynak: ap-videolar/src/episodes/st114 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st114",
  amac: "Bu konu kötü örneklemenin sonucu neden hep aynı yöne kaydırdığını, yani *bias*'ı anlatıyor. Altı bias türünü ayırmayı, bias'ı iki adımda açıklamayı ve büyük örneklemin bias'ı neden düzeltmediğini öğreneceksin.",
  bolumler: [
    {
      baslik: "*Bias* ve *convenience sample*",
      kisa: "Bias, yöntemin sonucu sistematik olarak aynı yöne itmesidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚶", terim: "Convenience sample", tr: "kolay ulaşılan örneklem", tanim: "Ulaşması en kolay bireylerden oluşan örneklem.", ornek: "Marmaray çıkışındaki 50 kişiden 46'sı toplu taşımacı (%92); arabadakilere hiç sorulmadı." },
            { ikon: "↗️", terim: "Bias", tr: "yanlılık (sapma)", tanim: "Yöntemin, bilmek istediğin değeri ==sistematik olarak aynı yönde== (hep fazla ya da hep eksik) tahmin etmesi. Tek bir örneklemin şanssızlığı değildir.", ornek: "Her hafta aynı sıradan sayan bahçıvanın tahmini hep fazla çıkar." },
            { ikon: "⬆️", terim: "Overestimate", tr: "fazla tahmin", tanim: "Tahminin gerçek değerden büyük çıkması.", ornek: "212 > gerçek toplam." },
            { ikon: "⬇️", terim: "Underestimate", tr: "eksik tahmin", tanim: "Tahminin gerçek değerden küçük çıkması.", ornek: "Yoğun kişilerin cevap vermediği ankette boş vakit tahmini düşebilir." }
          ] },
        { tip: "ornek", baslik: "Domates bahçesinde bahçıvanın tahmini", durum: "Bahçıvanın 20 domates bitkisi var. Eve en yakın sıradaki 5 bitkide toplam 53 domates sayıyor ve bahçedeki toplamı tahmin etmek istiyor.",
          adimlar: ["20 bitki, 5'in kaç katı? 20 ÷ 5 = 4.", "Toplam tahmini: 53 × 4 = 212 domates.", "Ama sayılan sıra bahçenin güney ucunda, en çok güneşi alıyor; büyük olasılıkla diğer sıralardan daha çok domates veriyor.", "Demek ki 212, gerçek toplamdan büyük."],
          sonuc: "212 gerçek toplamı ==*overestimate*== eder." },
        { tip: "grafik", baslik: "Bias ile şanssızlık farkı", xlabel: "Tahmin edilen toplam domates", ylabel: "", xmax: 10, ymax: 6, xticks: [{ v: 5, label: "gerçek toplam" }], yticks: [],
          ogeler: [
            { id: "tr", tip: "cizgi", renk: 1, kesik: true, etiket: "", from: [5, 0], to: [5, 5.4] },
            { id: "lc", tip: "yazi", x: 0.2, y: 4.5, metin: "En yakın sıra (convenience)", hiza: "start", gizli: true },
            { id: "c1", tip: "nokta", x: 7.2, y: 4.5, renk: 0, gizli: true }, { id: "c2", tip: "nokta", x: 7.8, y: 4.5, renk: 0, gizli: true },
            { id: "c3", tip: "nokta", x: 6.9, y: 4.5, renk: 0, gizli: true }, { id: "c4", tip: "nokta", x: 7.5, y: 4.5, renk: 0, gizli: true },
            { id: "cb", tip: "yazi", x: 9.6, y: 3.7, metin: "hep sağda: BIAS", hiza: "end", gizli: true },
            { id: "ls", tip: "yazi", x: 0.2, y: 2.0, metin: "Rastgele 5 bitki (SRS)", hiza: "start", gizli: true },
            { id: "s1", tip: "nokta", x: 3.3, y: 2, renk: 2, gizli: true }, { id: "s2", tip: "nokta", x: 6.2, y: 2, renk: 2, gizli: true },
            { id: "s3", tip: "nokta", x: 4.4, y: 2, renk: 2, gizli: true }, { id: "s4", tip: "nokta", x: 5.9, y: 2, renk: 2, gizli: true },
            { id: "sb", tip: "yazi", x: 9.6, y: 1.2, metin: "bazen fazla, bazen eksik: yansız", hiza: "end", gizli: true },
            { id: "ov", tip: "ok", from: [5.2, 5.2], to: [8.6, 5.2], gizli: true },
            { id: "ovt", tip: "yazi", x: 7, y: 5.6, metin: "OVERESTIMATE", gizli: true },
            { id: "un", tip: "ok", from: [4.8, 5.2], to: [1.4, 5.2], gizli: true },
            { id: "unt", tip: "yazi", x: 3, y: 5.6, metin: "UNDERESTIMATE", gizli: true }
          ],
          durumlar: [
            { metin: "Gerçek toplam kesikli çizgi. Bahçıvan her hafta aynı sırayı sayarsa ne olur?", goster: ["lc"] },
            { metin: "Dört hafta, dört tahmin: hepsi çizginin sağında, birbirine yakın. Yöntem hep aynı yöne itiyor: ==*bias*==.", goster: ["c1", "c2", "c3", "c4", "cb"] },
            { metin: "Rastgele seçilen 5 bitki: iki tahmin çizginin solunda, ikisi sağında. Bir yöne yaslanmaz; şanssızlık bias değildir.", goster: ["ls", "s1", "s2", "s3", "s4", "sb"] },
            { metin: "Yönün iki adı var: gerçeğin üstüne düşerse *overestimate*, altına düşerse *underestimate*.", goster: ["ov", "ovt", "un", "unt"] }
          ] },
        { tip: "tuzak", baslik: "Bias şanssızlık değildir; kolay olan temsil etmez", metin: "“Bias is not just bad luck in one sample!” *Convenience sample* seçimi senin rahatlığına göre yapılır, şansa göre değil.", yanlis: "“Örneklem şanssız seçildi, bu yüzden biased.” ya da “Eve en yakın sıra bahçeyi temsil eder, çünkü kolay sayılır.”", dogru: "Bias, yöntemin sonucu sistematik olarak aynı yöne kaydırmasıdır; kolay ulaşılan sıra diğerlerinden farklı olabilir (güneş)." }
      ]
    },
    {
      baslik: "*Voluntary response sample*",
      kisa: "Kendi katılanlar, çoğu zaman güçlü görüşlülerdir; sonuç kayar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🙋", terim: "Voluntary response sample", tr: "gönüllü yanıt örneklemi", tanim: "Genel bir çağrıya kendi isteğiyle katılanlardan oluşan örneklem; araştırmacı kimseyi seçmez.", ornek: "Okul hesabında “kıyafet kalksın mı?” anketi." },
            { ikon: "😠", terim: "Voluntary response bias", tr: "gönüllü yanıt yanlılığı", tanim: "Kendi katılanların (çoğunlukla güçlü görüşlülerin) popülasyondan farklı cevap vermesi.", ornek: "Konuya en çok kızanlar oy verdi." }
          ] },
        { tip: "ornek", baslik: "Instagram anketi", durum: "Okulda 1200 öğrenci var. Hesapta “Okul kıyafeti kaldırılsın mı?” anketine 150 kişi oy veriyor; 135'i evet diyor.",
          adimlar: ["Evet oranı: 135 ÷ 150 = 0.90 = %90.", "Oy vermeyen: 1200 − 150 = 1050 kişi.", "Kimler oy verdi? Konuya en çok kızanlar. Umursamayanlar kaydırıp geçti.", "Güçlü görüşlüler fazla temsil edildi: *voluntary response bias*."],
          sonuc: "%90, kıyafetin kalkmasını isteyenlerin gerçek oranını *overestimate* eder." },
        { tip: "sekil", baslik: "Oy veren ve vermeyen", fig: { type: "bar", cats: ["Oy veren (evet)", "Oy veren (hayır)", "Oy vermeyen"], series: [{ name: "Öğrenci sayısı", values: [135, 15, 1050] }], ylabel: "Kişi" } },
        { tip: "adimlar", baslik: "AP EXAM TIP: bias'ı iki adımda açıkla", adimlar: [
            { baslik: "1 · Kim farklı cevap verir?", metin: "“Students who dislike the uniform are more likely to vote than students who don't mind it.”" },
            { baslik: "2 · Hangi yöne kayar?", metin: "“So 90% is likely an overestimate of the true proportion of all students who want the uniform removed.”" },
            { baslik: "Yarım cevap puan getirmez", metin: "“The sample is biased.” yetmez; parametreyi bağlamıyla (“true proportion of all students who…”) söyle." }
          ] }
      ]
    },
    {
      baslik: "*Undercoverage* ve *sampling frame*",
      kisa: "Listede olmayan kişi seçilemez; rastgele seçim bunu çözmez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📋", terim: "Sampling frame", tr: "örnekleme çerçevesi", tanim: "Örneklemin içinden seçildiği liste; ideali popülasyonun tamamını içermesidir.", ornek: "Sınıfın WhatsApp grubundaki veliler." },
            { ikon: "🕳️", terim: "Undercoverage bias", tr: "eksik kapsama yanlılığı", tanim: "Popülasyonun bir kısmının listede olmaması yüzünden seçilme şansının olmaması (ya da az olması) ve bu kişilerin farklı cevap verecek olması.", ornek: "WhatsApp grubunda olmayan veliler; ya da derenin yalnızca bir yakasından toprak örneği almak." }
          ] },
        { tip: "ornek", baslik: "Velileri WhatsApp grubundan seçmek", durum: "11-B'nin 30 velisi var, sınıfın WhatsApp grubunda 24 üye. Anketi gruptan rastgele seçtiğin velilere yapıyorsun.",
          adimlar: ["Rastgele seçim var ama liste (sampling frame) yalnızca gruptakiler.", "Dışarıda kalanlar: 30 − 24 = 6 veli.", "Bu 6 velinin seçilme şansı 0.", "Gruba katılmayan veliler farklı düşünüyorsa sonuç kayar."],
          sonuc: "*Undercoverage bias*: rastgele seçim yapılsa bile liste eksikse bias oluşur." },
        { tip: "grafik", baslik: "Listede olmayan seçilemez", xlabel: "", ylabel: "", xmax: 10, ymax: 10, xticks: [], yticks: [],
          ogeler: [
            { id: "pop", tip: "alan", renk: 1, noktalar: [[0.5, 1], [9.5, 1], [9.5, 9], [0.5, 9]] },
            { id: "pt", tip: "yazi", x: 5, y: 9.5, metin: "POPULATION: 30 veli" },
            { id: "lst", tip: "alan", renk: 0, noktalar: [[0.5, 1], [7.5, 1], [7.5, 9], [0.5, 9]], gizli: true },
            { id: "lt", tip: "yazi", x: 4, y: 5, metin: "Listede: 24 üye", gizli: true },
            { id: "out", tip: "yazi", x: 8.5, y: 5, metin: "Dışarıda: 6", gizli: true },
            { id: "pick", tip: "yazi", x: 4, y: 3, metin: "🎲 rastgele seçim yalnızca buradan", gizli: true }
          ],
          durumlar: [
            { metin: "Popülasyon: sınıfın 30 velisi." },
            { metin: "Sampling frame: yalnızca grup üyeleri, 24 veli. Altı kişi listenin dışında.", goster: ["lst", "lt", "out"] },
            { metin: "Zar yalnızca listenin içinde dönüyor. Dışarıdaki 6 kişinin ==seçilme şansı 0==.", goster: ["pick"] }
          ] },
        { tip: "tuzak", baslik: "Rastgele seçim her şeyi çözmez", metin: "Rastgele seçim *convenience* ve *voluntary response*'u önler; ama liste eksikse yine bias çıkar.", yanlis: "“Rastgele seçtim, o halde bias yok.”", dogru: "Liste (sampling frame) herkesi kapsamıyorsa *undercoverage* vardır." }
      ]
    },
    {
      baslik: "*Nonresponse bias*",
      kisa: "Seçildiği hâlde cevap vermeyenler farklıysa sonuç kayar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✉️", terim: "Nonresponse bias", tr: "cevapsızlık yanlılığı", tanim: "Örnekleme ==seçilen== ama ulaşılamayan ya da katılmayı reddeden bireylerin farklı cevap verecek olması.", ornek: "Postayla gönderilen ankete çok yoğun olanların dönmemesi." }
          ] },
        { tip: "ornek", baslik: "Rastgele 2000 kişilik anket", durum: "Rastgele seçilen 2000 kişiye anket gönderiliyor; 317'si dönüyor.",
          adimlar: ["Dönme oranı: 317 ÷ 2000 = 0.1585 ≈ %16.", "Dönmeyen: 2000 − 317 = 1683 kişi.", "Soru boş vaktinle ilgiliyse çok yoğun olanlar doldurmaz.", "Cevap verenler daha çok boş vakti olanlar: ortalama boş vakit fazla çıkar."],
          sonuc: "Kalan 1683 kişi farklı düşünüyorsa sonuç kayar; ortalama boş vakit *overestimate* edilir." },
        { tip: "ikili",
          sol: { ikon: "📬", baslik: "*Nonresponse*", maddeler: ["Araştırmacı kişiyi SEÇTİ", "Kişi cevap vermedi ya da ulaşılamadı", "Rastgele örneklemde de olur"] },
          sag: { ikon: "🙋", baslik: "*Voluntary response*", maddeler: ["Kimse seçilmedi", "İsteyen kendisi katıldı", "Cevap vermeyen yok; herkes katıldı"] },
          oyun: [
            { metin: "Rastgele seçilen 500 kullanıcıya e-posta gitti, 90'ı cevapladı.", cevap: "sol", neden: "Araştırmacı seçti, çoğu cevap vermedi." },
            { metin: "Okul hesabında anket paylaşıldı, isteyen oy verdi.", cevap: "sag", neden: "Kimse seçilmedi; gönüllüler katıldı." },
            { metin: "Rastgele seçilen kişilerin evine gidildi ama kapıyı açan olmadı.", cevap: "sol", neden: "Seçilmiş ama ulaşılamamış kişiler." },
            { metin: "Televizyon programı izleyicilerden telefonla oy vermesini istiyor.", cevap: "sag", neden: "Herkes kendi isteğiyle katılıyor." }
          ] }
      ]
    },
    {
      baslik: "*Response bias* ve soru yazılışı",
      kisa: "Cevap gerçeği süsleyebilir; yönlendirici soru cevabı iter.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🤥", terim: "Response bias", tr: "yanıt yanlılığı", tanim: "Cevap var ama gerçeği yansıtmıyor: utanılan konularda süsleme, hatırlama hatası, kendi bildirimi (*self-report*).", ornek: "Oy vermediğini söylemekten çekinmek." },
            { ikon: "✍️", terim: "Question wording bias", tr: "soru yazılışı yanlılığı", tanim: "Yönlendirici (*leading*) ya da kafa karıştırıcı soru metninin cevapları bir yöne itmesi.", ornek: "“Sağlıksız ve pahalı kantin yemekleri değişsin mi?”" },
            { ikon: "👔", terim: "Interviewer effect", tr: "görüşmeci etkisi", tanim: "Soran kişi cevabı etkiler; anonim değilse cevap değişir.", ornek: "Müdür sorarsa kimse okulu sevmediğini söylemez." }
          ] },
        { tip: "sekil", baslik: "Bir ankette oy kullanmama", fig: { type: "bar", cats: ["Ankette “oy vermedim” diyenler", "Kayıtlara göre oy vermeyenler"], series: [{ name: "Yüzde", values: [35, 80] }], ylabel: "Yüzde (%)" } },
        { tip: "ornek", baslik: "Oy kullanma ankete yansıyor mu?", durum: "Bir ankette insanların %35'i oy vermediğini söyledi; kayıtlara göre oy vermeyenlerin oranı %80.",
          adimlar: ["Fark: 80 − 35 = 45 yüzde puanı.", "İnsanlar oy vermediğini söylemekten çekiniyor.", "Cevaplar gerçeği sistematik olarak süslüyor."],
          sonuc: "*Response bias*: oy vermeyenlerin oranı ankette olduğundan düşük çıkar (*underestimate*)." },
        { tip: "ikili", ayirici: "↔",
          sol: { ikon: "🙂", baslik: "Tarafsız soru", maddeler: ["“Kantin menüsü değişsin mi?”", "Cevabı etkilemez", "Daha güvenilir"] },
          sag: { ikon: "🧲", baslik: "Yönlendirici soru", maddeler: ["“Sağlıksız ve pahalı kantin yemekleri değişsin mi?”", "“Evet” cevabını itiyor: sonuç *overestimate*", "*Leading question*"] },
          oyun: [
            { metin: "Kantin menüsü değişsin mi?", cevap: "sol", neden: "Hiçbir tarafı tutmuyor." },
            { metin: "Sağlıksız ve pahalı kantin yemekleri değişsin mi?", cevap: "sag", neden: "“Sağlıksız ve pahalı” cevabı belirliyor." },
            { metin: "Müdür öğrencilere yüz yüze “okulu seviyor musun?” diye soruyor.", cevap: "sag", neden: "Soran kişi cevabı etkiliyor." },
            { metin: "Anonim bir formda “okulu seviyor musun?”", cevap: "sol", neden: "Çekinmeden cevap verilir." }
          ] }
      ]
    },
    {
      baslik: "Büyük örneklem çözüm değil",
      kisa: "Örneklemi büyütmek rastgele değişkenliği azaltır, bias'ı değil.",
      bloklar: [
        { tip: "grafik", baslik: "Örneklemi büyüt, bias kalsın", xlabel: "Tahmin edilen oran (%)", ylabel: "Olasılık", xmax: 10, ymax: 10, xticks: [{ v: 5, label: "gerçek oran" }, { v: 9, label: "%92" }], yticks: [],
          ogeler: [
            { id: "tr", tip: "cizgi", renk: 1, kesik: true, etiket: "", from: [5, 0], to: [5, 9.5] },
            { id: "n50", tip: "egri", renk: 0, etiket: "n = 50", noktalar: [[6, 0.1], [7, 0.8], [8, 2.4], [9, 3.2], [9.7, 2], [10, 0.4]] },
            { id: "n5k", tip: "egri", renk: 2, etiket: "n = 5000", gizli: true, noktalar: [[7.5, 0], [8.4, 0.6], [8.8, 3.5], [9, 9], [9.2, 3.5], [9.6, 0.6], [10, 0]] }
          ],
          durumlar: [
            { metin: "n = 50: tahmin (%92 civarı) gerçek oranın çok sağında ve dağınık." },
            { metin: "n = 5000: tahminler daha sıkışık, ama hâlâ aynı yanlış yerin etrafında. Sonuç yine ==yüzde 90 civarı==.", goster: ["n5k"] },
            { metin: "Örneklem büyüdükçe azalan şey rastgele değişkenliktir; yanlı bir yöntem büyütmekle düzelmez." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "1936", baslik: "Bir Amerikan dergisi 2 milyondan fazla cevap topladı", metin: "Yaklaşık 10 milyon anket gönderdi. Seçimi yanlış bildi: Landon kazanacak dedi, kazanan Roosevelt oldu." },
            { tarih: "Neden", baslik: "Adres listesi eksikti", metin: "Adresler telefon rehberlerinden ve araba kayıtlarından alınmıştı: o dönemde ikisine de sahip olmayanlar listede yoktu (*undercoverage*). Gönderilenlerin çoğu da dönmedi (*nonresponse*)." },
            { tarih: "Ders", baslik: "Büyük örneklem bias'ı düzeltmez", metin: "2 milyon da olsa yanlı yöntem yanlış sonuç verir. “Çok kişiye sorarsam düzelir” bir tuzaktır; önce yöntemi düzelt." }
          ] },
        { tip: "adimlar", baslik: "Çare: dört şey", adimlar: [
            { baslik: "1 · Rastgele seç", metin: "Convenience ve voluntary response'tan kurtul." },
            { baslik: "2 · Tam *sampling frame*", metin: "Liste herkesi kapsasın." },
            { baslik: "3 · Tarafsız soru", metin: "Yönlendirmeden yaz." },
            { baslik: "4 · Cevap vermeyenleri takip et", metin: "Bir daha ara, ulaşmaya çalış." }
          ] }
      ]
    },
    {
      baslik: "Hangi bias? Karar tablosu",
      kisa: "Bias türünü, kimin neden dışarıda kaldığına bakarak ayır.",
      bloklar: [
        { tip: "tablo", baslik: "Bias türleri bir bakışta", head: ["Tür", "Ne oldu?", "Örnek"], rows: [
            ["*Convenience*", "Kolay ulaşılanlar alındı", "Eve en yakın sıra"],
            ["*Voluntary response*", "İsteyen kendisi katıldı", "Instagram anketi"],
            ["*Undercoverage*", "Bazıları listede yok", "WhatsApp grubu, dere"],
            ["*Nonresponse*", "Seçildi ama cevap yok", "2000'den 317 dönüş"],
            ["*Response bias*", "Cevap var ama gerçek değil", "Oy vermediğini saklamak"],
            ["*Question wording*", "Soru yönlendiriyor", "“Sağlıksız ve pahalı…”"]
          ] },
        { tip: "ornek", baslik: "Spor uygulaması", durum: "Bir spor uygulaması rastgele 500 kullanıcı seçip haftada kaç gün spor yaptıklarını e-postayla soruyor. Yalnızca 90 kişi cevap veriyor. En olası bias türü hangisi?",
          adimlar: ["Cevap oranı: 90 ÷ 500 = 0.18 = %18.", "Cevap vermeyen: 500 − 90 = 410 kişi.", "Kişileri araştırmacı seçti, çoğu cevap vermedi.", "Kimse seçilmeseydi, isteyen katılsaydı *voluntary response* olurdu."],
          sonuc: "*Nonresponse bias*." },
        { tip: "tuzak", baslik: "Yönü bağlamla söyle; rastgele seçim hepsini çözmez", metin: "Rastgele seçim yalnızca *convenience* ve *voluntary response* bias'ını önler. *Undercoverage*, *nonresponse* ve *response bias* için tam liste, takip, anonimlik ve tarafsız soru gerekir.", yanlis: "“Overestimate” deyip bırakmak ya da “Rastgele seçtim, bütün bias türleri bitti.”", dogru: "“…is likely an overestimate of the true mean number of hours…” gibi parametreyi adlandır; her bias türünün kendi çaresi var." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Bias*: yöntemin sonucu hep aynı yöne kaydırması (*overestimate* ya da *underestimate*); tek örneklemin şanssızlığı değildir.",
            "*Convenience sample* kolay ulaşılanları (46/50 = %92, 53 × 4 = 212), *voluntary response sample* kendi katılanları (135/150 = %90) alır.",
            "*Undercoverage*: bazıları *sampling frame*'de yok, seçilme şansı sıfır (30 − 24 = 6 veli).",
            "*Nonresponse*: seçildi ama cevap vermedi (317/2000 ≈ %16); *voluntary response* ile karıştırma.",
            "*Response bias*: cevap var ama gerçek değil (%35 vs %80); *question wording bias*: yönlendirici soru; görüşmeci de etkiler.",
            "Bias'ı iki adımda açıkla: (1) örneklemdekiler geri kalandan nasıl farklı cevap verir, (2) sonuç hangi yöne kayar.",
            "Büyük örneklem bias'ı düzeltmez (1936: 2 milyondan fazla cevap, yanlış tahmin).",
            "Çare: rastgele seçim, tam liste, tarafsız soru, cevap vermeyenleri takip."
          ] }
      ]
    }
  ]
};
