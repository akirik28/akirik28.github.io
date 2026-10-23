/* Kitpath not defteri · bf303 · 3.3 Muhasebe ve Finansal Yönetim
   Kaynak: AP Business with Personal Finance CED, Topic 3.3. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf303",
  amac: "Bu konu muhasebenin temelini anlatıyor: işletmeler ve tüketiciler paranın nereye gittiğini neden kaydeder, her işlem varlık, borç ve özkaynağı nasıl etkiler. Finansal tabloları, GAAP kurallarını ve muhasebe ile finans departmanlarının farkını öğreneceksin.",
  bolumler: [
    {
      baslik: "Her işlem varlık, borç ve özkaynağı etkiler",
      kisa: "İşletmenin her işlemi varlıkları, borçları ya da özkaynağı değiştirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏭", terim: "Asset", tr: "varlık", tanim: "İşletmenin sahip olduğu, değeri olan her şey.", ornek: "Kasadaki nakit, tost makinesi, stoktaki ekmek." },
            { ikon: "🧾", terim: "Liability", tr: "borç (yükümlülük)", tanim: "İşletmenin başkalarına borçlu olduğu tutar.", ornek: "Banka kredisi, tedarikçiye ödenmemiş fatura." },
            { ikon: "👤", terim: "Owners' equity", tr: "özkaynak", tanim: "İşletmenin sahipleri için taşıdığı değer: varlıklardan borçlar çıkınca kalan.", ornek: "Sahibinin koyduğu 10.000 TL." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Varlıklar", alt: "*Assets*" }, "=",
            { t: "Borçlar", alt: "*Liabilities*" }, "+",
            { t: "Özkaynak", alt: "*Owners' equity*" }
          ], aciklama: "Bu denklem hiçbir işlemden sonra bozulmaz: bir taraf artarsa diğer taraf da artar ya da aynı tarafta bir kalem diğerinin yerine geçer." },
        { tip: "grafik", baslik: "Deniz'in tost kantini: dört işlem, denge bozulmaz", xlabel: "", ylabel: "TL", xmax: 6, ymax: 18000, xticks: [{ v: 1.5, label: "Varlıklar" }, { v: 4.5, label: "Borçlar + Özkaynak" }], yticks: [{ v: 5000, label: "5.000" }, { v: 10000, label: "10.000" }, { v: 15000, label: "15.000" }],
          ogeler: [
            { id: "A", tip: "alan", renk: 0, noktalar: [[0.8, 0], [2.2, 0], [2.2, 0], [0.8, 0]] },
            { id: "E", tip: "alan", renk: 1, noktalar: [[3.8, 0], [5.2, 0], [5.2, 0], [3.8, 0]] },
            { id: "L", tip: "alan", renk: 2, noktalar: [[3.8, 0], [5.2, 0], [5.2, 0], [3.8, 0]] },
            { id: "ta", tip: "yazi", x: 1.5, y: 16800, metin: "Varlık 16.000", gizli: true },
            { id: "te", tip: "yazi", x: 4.5, y: 5000, metin: "Özkaynak 10.000", gizli: true },
            { id: "tl", tip: "yazi", x: 4.5, y: 13000, metin: "Borç 6.000", gizli: true }
          ],
          durumlar: [
            { metin: "Henüz hiçbir şey yok: Varlıklar = Borçlar + Özkaynak = 0." },
            { metin: "1) Deniz kantine kendi cebinden ==10.000 TL== koyar: nakit +10.000, özkaynak +10.000.", set: { A: { noktalar: [[0.8, 0], [2.2, 0], [2.2, 10000], [0.8, 10000]] }, E: { noktalar: [[3.8, 0], [5.2, 0], [5.2, 10000], [3.8, 10000]] } } },
            { metin: "2) Bankadan ==5.000 TL== kredi alır: nakit +5.000, borç +5.000. Varlık 15.000, borç + özkaynak 15.000.", set: { A: { noktalar: [[0.8, 0], [2.2, 0], [2.2, 15000], [0.8, 15000]] }, L: { noktalar: [[3.8, 10000], [5.2, 10000], [5.2, 15000], [3.8, 15000]] } } },
            { metin: "3) 4.000 TL'ye tost makinesi alır: nakit −4.000, makine +4.000. ==Varlık toplamı değişmez== (nakit 11.000 + makine 4.000)." },
            { metin: "4) 1.000 TL'lik malzemeyi veresiye alır: stok +1.000 (varlık), tedarikçiye borç +1.000. Varlık 16.000 = borç 6.000 + özkaynak 10.000.", set: { A: { noktalar: [[0.8, 0], [2.2, 0], [2.2, 16000], [0.8, 16000]] }, L: { noktalar: [[3.8, 10000], [5.2, 10000], [5.2, 16000], [3.8, 16000]] } }, goster: ["ta", "te", "tl"] }
          ] },
        { tip: "tablo", baslik: "Aynı dört işlem, tabloda", head: ["İşlem", "Varlık", "Borç", "Özkaynak"], rows: [
            ["1) Sahip 10.000 TL koyar", "+10.000", "0", "+10.000"],
            ["2) 5.000 TL banka kredisi", "+5.000", "+5.000", "0"],
            ["3) 4.000 TL'ye makine (nakitle)", "+4.000 −4.000 = 0", "0", "0"],
            ["4) 1.000 TL'lik malzeme veresiye", "+1.000", "+1.000", "0"],
            ["Toplam", "16.000", "6.000", "10.000"]
          ], vurgu: 4, not: "Her satırda sol taraf kadar sağ taraf da değişir; 16.000 = 6.000 + 10.000." }
      ]
    },
    {
      baslik: "Tüketiciler de izler: bütçe ve net değer",
      kisa: "Tüketici için de işlemler varlık, borç ve net değeri etkiler; bütçe izlemeye yarar.",
      bloklar: [
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🏪", baslik: "İşletme", maddeler: ["Bütün işlemleri kaydeder", "Varlık, borç ve özkaynak etkilenir", "Rapor hazırlamak çoğunlukla zorunlu"] },
          sag: { ikon: "🧑‍🎓", baslik: "Tüketici (kişi)", maddeler: ["Kayıt tutmak genelde zorunlu değil", "Varlık, borç ve net değer (*net worth*) etkilenir", "Bütçe gibi düzen, hedeflere ulaşmayı kolaylaştırır"] },
          oyun: [
            { metin: "Kantin sahibi tedarikçiye ödemeyi, satışları ve bankadan krediyi kayıt altına alır.", cevap: "sol", neden: "İşletme tüm işlemleri kaydeder." },
            { metin: "Mert bu ay ne kadar kazanıp harcadığını kimseye bildirmek zorunda değil.", cevap: "sag", neden: "Tüketicinin kayıt ve rapor yükümlülüğü genelde yoktur." },
            { metin: "Bir öğrenci maaşını aldığında, kredi kartı borcunu ödediğinde net değeri değişir.", cevap: "sag", neden: "Tüketicinin işlemleri varlık, borç ve net değeri etkiler." },
            { metin: "Aylık ve yıllık raporlarla hissedarlara bilgi veren şirket.", cevap: "sol", neden: "Dış paydaşlara raporlama işletmeye özgüdür." }
          ] },
        { tip: "tablo", baslik: "Mert'in bütçesi: planlanan ve gerçekleşen (aylık net gelir 9.000 TL)", head: ["Kalem", "Planlanan (TL)", "Gerçekleşen (TL)", "Fark (TL)"], rows: [
            ["Kira ve gıda", "5.000", "5.000", "0"],
            ["Ulaşım", "800", "800", "0"],
            ["Eğlence", "1.000", "1.600", "+600"],
            ["Borç ödemesi", "700", "700", "0"],
            ["Birikim", "1.500", "900", "−600"],
            ["Toplam", "9.000", "9.000", ""]
          ], vurgu: 2, not: "Takip sayesinde Mert eğlencede 600 TL aştığını ve birikimin 600 TL düştüğünü görür." },
        { tip: "tuzak", baslik: "Bütçe zorunlu raporlama değildir", metin: "Tüketici ile şirket aynı yükümlülüğe sahip değildir.", yanlis: "Bireyler de her yıl işletmeler gibi yasal finansal tablo yayınlamak zorundadır.", dogru: "Tüketiciler genelde finansal işlemlerini kayda ya da rapora bağlamak zorunda değildir; ama bütçe gibi düzenli bir sistem finansını izlemeyi ve hedeflere uygun karar vermeyi kolaylaştırır." }
      ]
    },
    {
      baslik: "Finansal tablolar: kim, ne için?",
      kisa: "Tablolar işletmenin sağlığını izler, kararlara yardım eder ve paydaşlara bilgi verir.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🩺", baslik: "Finansal sağlığı izlemek", metin: "İşletme iyi mi, kötü mü gidiyor?" },
            { ikon: "🧭", baslik: "Karar vermeye yardım", metin: "Hangi harcamayı kısmalı, nereye yatırım yapmalı?" },
            { ikon: "🤝", baslik: "Doğru bilgi vermek", metin: "Hissedarlara, yatırımcılara ve borç verenlere." },
            { ikon: "⚖️", baslik: "Yasalara uymak", metin: "Raporlama yükümlülüklerini ve düzenlemeleri karşılamak." }
          ] },
        { tip: "tablo", baslik: "Üç ana finansal tablo", head: ["Tablo", "Zaman", "Hangi soruya cevap verir?"], rows: [
            ["*Income statement* (gelir tablosu)", "Bir dönem", "Gelir ve giderler sonucunda kâr mı, zarar mı etti?"],
            ["*Balance sheet* (bilanço)", "Belli bir an", "İşletmenin neleri var, neleri borç, sahipleri için ne kadar değeri var?"],
            ["*Cash flow statement* (nakit akış tablosu)", "Bir dönem", "Nakit nereden girdi, nereye çıktı, kasada ne kadar kaldı?"]
          ], not: "Üç tablo ayrı konularda (3.6, 3.7, 3.8) ayrıntılı işlenir." },
        { tip: "tuzak", baslik: "Tek tablo yeterli sanma", metin: "Üç tablo birbirini tamamlar; biri diğerinin yerine geçmez.", yanlis: "Gelir tablosunda kâr gösteren işletmenin nakit sıkıntısı olamaz.", dogru: "Kâr (gelir tablosu), nakit (nakit akış tablosu) ve değer (bilanço) farklı şeylerdir; bir işletme kârlı olup nakit sıkıntısı çekebilir." }
      ]
    },
    {
      baslik: "GAAP ve raporlama dönemleri",
      kisa: "GAAP, halka açık şirketlerin olumlu ve olumsuz tüm bilgiyi düzenli bildirmesini ister.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "GAAP", tr: "genel kabul görmüş muhasebe ilkeleri", tanim: "*Generally accepted accounting principles*. Hisselerini halka satan şirketlerin, her dönem boyunca tutarlı biçimde ve olumlu ya da olumsuz tüm finansal bilgiyi açıklamasını şart koşar.", ornek: "Türkiye'de benzer kuralları TFRS koyar." },
            { ikon: "📆", terim: "Reporting period", tr: "raporlama dönemi", tanim: "Finansal tabloların hazırlandığı dönem: çoğunlukla üç ayda bir (*quarterly*) ya da yılda bir (*annually*).", ornek: "Her çeyrek sonunda hazırlanan tablo." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "1. çeyrek", baslik: "İlk 3 ay", metin: "Dönem sonunda tablolar hazırlanır." },
            { tarih: "2. çeyrek", baslik: "4–6. aylar", metin: "Aynı kurallarla, karşılaştırılabilir tablolar." },
            { tarih: "3. çeyrek", baslik: "7–9. aylar", metin: "Olumlu ve olumsuz bütün bilgiler açıklanır." },
            { tarih: "4. çeyrek ve yıl", baslik: "Son 3 ay ve yıllık rapor", metin: "Yıllık tablolar tüm yılı özetler." }
          ] },
        { tip: "tuzak", baslik: "Yalnızca iyi haberi açıklamak GAAP'a uymaz", metin: "Şirketler istediklerini seçip bildiremez.", yanlis: "Halka açık bir şirket zararını bu dönem açıklamayıp iyi haberlerini öne çıkarabilir.", dogru: "GAAP, hisselerini halka satan şirketlerin her raporlama döneminde olumlu ve olumsuz bütün finansal bilgiyi tutarlı biçimde açıklamasını ister." }
      ]
    },
    {
      baslik: "Muhasebe ve finans departmanları",
      kisa: "Muhasebe kaydeder ve raporlar; finans veriyi çözümleyip strateji önerir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📒", terim: "Accounting department", tr: "muhasebe departmanı", tanim: "Bir dönemdeki bütün finansal işlemleri belirleyip kaydeder ve finansal tabloları hazırlar.", ornek: "Her satış ve ödemenin kaydı." },
            { ikon: "🧮", terim: "Managerial accountant", tr: "yönetim muhasebecisi", tanim: "Planlama ve karar için finansal bilgi ile analizi yöneticilere ve diğer iç paydaşlara sunar.", ornek: "Müdüre aylık maliyet analizi." },
            { ikon: "📑", terim: "Financial accountant", tr: "finansal muhasebeci", tanim: "Finansal bilgi ile analizi esas olarak dış paydaşlara (hissedar, yatırımcı, borç veren) sunar.", ornek: "Bankaya sunulan yıllık tablolar." },
            { ikon: "📊", terim: "Finance department", tr: "finans departmanı", tanim: "Muhasebenin derlediği veriyi çözümler; finansal performansı korumak ya da iyileştirmek için strateji önerir.", ornek: "Yeni şube için ne kadar borçlanılacağını önermek." },
            { ikon: "🧑‍💼", terim: "Financial advisor / accountant", tr: "finansal danışman / muhasebeci", tanim: "Tüketiciler finansal planlama, karar verme ve vergi hazırlığı için bunlardan destek alabilir.", ornek: "Vergi beyanı için muhasebeci tutmak." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🏢", baslik: "Yönetim muhasebecisi", maddeler: ["İç paydaşlara hizmet eder", "Planlama ve karar için bilgi", "Müdürlere, ekiplere"] },
          sag: { ikon: "🏛️", baslik: "Finansal muhasebeci", maddeler: ["Dış paydaşlara hizmet eder", "Hissedar, yatırımcı, borç veren", "Yayımlanan raporlar"] },
          oyun: [
            { metin: "Pazarlama müdürüne hangi kampanyanın daha kârlı olduğunu gösteren rapor.", cevap: "sol", neden: "İç paydaş için karar verisi: yönetim muhasebesi." },
            { metin: "Bankaya kredi başvurusunda sunulan yıllık mali tablolar.", cevap: "sag", neden: "Dış paydaş (borç veren): finansal muhasebe." },
            { metin: "Hissedarlara yıllık faaliyet raporu hazırlamak.", cevap: "sag", neden: "Hissedar dış paydaştır." },
            { metin: "Şube müdürlerine haftalık maliyet analizi sunmak.", cevap: "sol", neden: "İç paydaşlar: yönetim muhasebesi." }
          ] },
        { tip: "tuzak", baslik: "Kaydeden ile yorumlayan aynı değil", metin: "İki departman birbirini tamamlar.", yanlis: "Strateji önermek muhasebe departmanının işidir.", dogru: "Muhasebe işlemleri kaydeder ve tabloları hazırlar; ==finans== bu veriyi çözümleyip strateji önerir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "İşletmeler tüm işlemleri kaydeder; her işlem varlıkları, borçları ya da özkaynağı etkiler.",
            "Varlıklar = Borçlar + Özkaynak; bu denge her işlemde korunur.",
            "Tüketiciler de gelir, harcama, birikim ve borçla varlık, borç ve net değerini değiştirir; kayıt zorunlu değildir ama bütçe karar vermeyi kolaylaştırır.",
            "Finansal tablolar sağlığı izler, karar verir, hissedar/yatırımcı/borç verene bilgi sunar ve yasalara uymayı sağlar.",
            "Üç ana tablo: gelir tablosu (dönem kârı), bilanço (belli an), nakit akış tablosu (nakit hareketi).",
            "GAAP: hisselerini halka satan şirketler her dönem (çeyrek ya da yıl) olumlu ve olumsuz bütün bilgiyi tutarlı biçimde açıklar.",
            "Muhasebe kaydeder ve tablo hazırlar; yönetim muhasebecisi iç paydaşlara, finansal muhasebeci dış paydaşlara bilgi sunar.",
            "Finans departmanı veriyi analiz eder ve strateji önerir.",
            "Tüketiciler finansal danışman ya da muhasebeci tutabilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir kafe, bankadan 20.000 TL kredi alıyor ve para kafenin hesabına yatıyor. Bu işlem varlıkları, borçları ve özkaynağı nasıl etkiler?",
      opts: ["Varlıklar ve borçlar 20.000 TL artar; özkaynak değişmez", "Varlıklar ve özkaynak 20.000 TL artar; borçlar değişmez", "Yalnızca özkaynak 20.000 TL artar", "Varlıklar 20.000 TL artar, borçlar 20.000 TL azalır"],
      a: 0,
      why: "Nakit (varlık) artar, kredi borcu (yükümlülük) aynı tutarda artar; özkaynak değişmez. B en çekici yanlış: kredi sahibin koyduğu para değildir, geri ödenmesi gereken bir borçtur." },
    { q: "Tabloda bir işletmenin bilanço denklemi verilmiştir. Eksik kalem kaç TL'dir?",
      fig: { type: "table", caption: "İşletme", head: ["Varlıklar", "Borçlar", "Özkaynak"], rows: [["80.000 TL", "30.000 TL", "?"]] },
      opts: ["110.000 TL", "30.000 TL", "50.000 TL", "80.000 TL"],
      a: 2,
      why: "Özkaynak = Varlıklar − Borçlar = 80.000 − 30.000 = 50.000 TL. A en çekici yanlış: toplamı alır; oysa borç ve özkaynak toplamı varlığa eşit olmalıdır." },
    { q: "Bir şirketin muhasebecisi, aylık maliyet analizini hazırlayıp bölüm müdürlerine sunuyor. Bu kişi hangi role en uygundur?",
      opts: ["Finansal muhasebeci, çünkü rapor yazar", "Yönetim muhasebecisi, çünkü iç paydaşlara planlama ve karar için bilgi sunar", "Finans departmanı, çünkü kayıt tutar", "Finansal danışman, çünkü kişiye hizmet verir"],
      a: 1,
      why: "İç paydaşlara (müdürlere) karar ve planlama bilgisi sunmak yönetim muhasebesidir. A en çekici yanlış: finansal muhasebeci raporları esas olarak dış paydaşlara, yani hissedar, yatırımcı ve borç verenlere sunar." },
    { q: "Hisseleri halka açık bir şirket, ürünlerinin geri çağrılmasından kaynaklanan büyük bir zararı bu çeyrek raporunda yalnızca \"küçük bir dalgalanma\" diye geçiyor ve iyi haberlere ağırlık veriyor. Bu davranış hakkında hangisi doğrudur?",
      opts: ["Şirket zararı sonraki yıla kadar saklayabilir", "Bu davranış serbesttir, çünkü şirket hangi bilgiyi açıklayacağını seçer", "Bu davranış serbesttir, çünkü zarar yalnızca bilançoyu ilgilendirir", "GAAP olumlu ve olumsuz bütün bilgilerin tutarlı biçimde açıklanmasını ister; bu davranış kurala aykırıdır"],
      a: 3,
      why: "Halka açık şirketler her raporlama dönemi için olumlu ve olumsuz bütün finansal bilgiyi açıklamak zorundadır. A en çekici yanlış: zararı ertelemek bilgiyi gizlemek olurdu." },
    { q: "Burcu, aylık gelirini ve harcamalarını yazarak takip ediyor; bunu kimse ondan istemiyor. Bu uygulama için hangisi doğrudur?",
      opts: ["Zorunlu olduğu için yapıyor; bireylerin yıllık finansal tablo yayınlaması gerekir", "Gereksizdir, çünkü tüketiciler varlık ve borç hesaplamaz", "Zorunlu değildir ama bütçe gibi düzenli bir sistem finansını izlemesine ve hedeflerine uygun karar vermesine yardım eder", "Yalnızca vergi hazırlığı içindir"],
      a: 2,
      why: "Tüketicilerin kayıt tutması genelde zorunlu değildir; bütçe ise izleme ve karar için çok yararlıdır. A en çekici yanlış: bireyler için yasal finansal tablo yükümlülüğü yoktur." }
  ]
};
