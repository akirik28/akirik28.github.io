/* Kitora not defteri · st305 · 3E Deney Tasarımı Seçmek (CED 3.6)
   Kaynak: AP Statistics CED Unit 3 (3.6 Selecting an Experimental Design). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st305",
  amac: "Bu konu deneyleri nasıl düzenleyeceğini anlatıyor: *completely randomized design*, *randomized block design* ve *matched pairs design*. Hangisinin ne zaman seçildiğini, *blocking*'in neden değişkenliği azalttığını ve rastgele atamanın nerede yapıldığını öğreneceksin.",
  bolumler: [
    {
      baslik: "*Completely randomized design*",
      kisa: "Bütün birimler tek havuzda, tamamen rastgele gruplara ayrılır.",
      bloklar: [
        { tip: "harita", merkez: "Üç deney tasarımı", dallar: [
            { baslik: "*Completely randomized design*", alt: "tek havuz, rastgele atama" },
            { baslik: "*Randomized block design*", alt: "önce bloklara ayır, blok içinde ata" },
            { baslik: "*Matched pairs design*", alt: "çiftler ya da aynı kişi iki kez" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Completely randomized design (CRD)", tr: "tamamen rastgele tasarım", tanim: "Bütün deney birimleri ==tek bir havuzdan== rastgele treatment gruplarına atanır. Tek bir rastgele atama adımı vardır.", ornek: "30 öğrenciyi kura ile üç çalışma yönteminden birine atamak." }
          ] },
        { tip: "adimlar", baslik: "CRD: 30 öğrenci, 3 çalışma yöntemi", adimlar: [
            { baslik: "1 · Havuz", metin: "30 öğrencinin hepsi tek havuzda; hiçbir ön ayrım yok." },
            { baslik: "2 · Rastgele atama", metin: "1–30 numara ver; rastgele sayı üreteciyle ilk 10 farklı numara Yöntem 1, sonraki 10 numara Yöntem 2, kalan 10 öğrenci Yöntem 3." },
            { baslik: "3 · Uygulama", metin: "Yöntem 1: yalnızca okuma. Yöntem 2: özet çıkarma. Yöntem 3: soru çözme." },
            { baslik: "4 · Karşılaştırma", metin: "Üç grup aynı testi çözer; grup ortalamaları karşılaştırılır." }
          ] }
      ]
    },
    {
      baslik: "Blocking: neden bloklarız?",
      kisa: "Benzer birimleri blokla; farkı blok içinde karşılaştır, değişkenlik azalır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Block", tr: "blok", tanim: "Yanıtı etkileyeceğinden şüphelenilen bir özelliğe göre oluşturulan ==benzer birim grubu==.", ornek: "Deneyimli ve yeni başlayan sporcular." },
            { ikon: "🧩", terim: "Randomized block design (RBD)", tr: "rastgele bloklu tasarım", tanim: "Birimler önce bloklara ayrılır, sonra treatment'lar ==her blok içinde ayrı ayrı== rastgele atanır.", ornek: "Her deneyim bloğundan yarısı program A'ya, yarısı B'ye." }
          ] },
        { tip: "grafik", baslik: "Blok farkı treatment farkını nasıl gizler?", xlabel: "Tedavi", ylabel: "Test puanı", xmax: 6, ymax: 10,
          xticks: [{ v: 2, label: "A" }, { v: 4, label: "B" }],
          yticks: [{ v: 0, label: "0" }, { v: 5, label: "5" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "a1", tip: "nokta", renk: 0, x: 1.8, y: 2.8 },
            { id: "a2", tip: "nokta", renk: 0, x: 1.8, y: 3.4 },
            { id: "a3", tip: "nokta", renk: 1, x: 2.2, y: 6.6 },
            { id: "a4", tip: "nokta", renk: 1, x: 2.2, y: 7.2 },
            { id: "b1", tip: "nokta", renk: 0, x: 3.8, y: 3.8 },
            { id: "b2", tip: "nokta", renk: 0, x: 3.8, y: 4.4 },
            { id: "b3", tip: "nokta", renk: 1, x: 4.2, y: 7.6 },
            { id: "b4", tip: "nokta", renk: 1, x: 4.2, y: 8.2 },
            { id: "oa", tip: "cizgi", renk: 2, from: [1.4, 5], to: [2.6, 5], etiket: "", gizli: true },
            { id: "ob", tip: "cizgi", renk: 2, from: [3.4, 6], to: [4.6, 6], etiket: "", gizli: true },
            { id: "oy", tip: "yazi", renk: 2, x: 5.3, y: 5.5, metin: "5,0 → 6,0", gizli: true },
            { id: "l1", tip: "cizgi", renk: 0, from: [2, 3.1], to: [4, 4.1], etiket: "", gizli: true },
            { id: "l2", tip: "cizgi", renk: 1, from: [2, 6.9], to: [4, 7.9], etiket: "", gizli: true },
            { id: "y1", tip: "yazi", renk: 0, x: 5.3, y: 3.6, metin: "Blok 1: +1", gizli: true },
            { id: "y2", tip: "yazi", renk: 1, x: 5.3, y: 7.4, metin: "Blok 2: +1", gizli: true }
          ],
          durumlar: [
            { metin: "A ve B tedavisini karşılaştırıyoruz. Denekler iki blok: yeni başlayanlar (mavi) ve deneyimliler (yeşil). Blok farkı puanları aşağı yukarı sürüklüyor." },
            { metin: "Blokları yok sayarsan: A ortalaması 5,0, B ortalaması 6,0. Fark 1 puan, ama noktalar 3 ile 8 arasına yayılmış: fark bu yayılımın içinde kayboluyor.", goster: ["oa", "ob", "oy"] },
            { metin: "==Blok içinde== karşılaştır: iki blokta da B, A'dan tam 1 puan yüksek. Yayılımı yaratan blok farkı artık araya girmiyor.", gizle: ["oa", "ob", "oy"], goster: ["l1", "l2", "y1", "y2"] }
          ] },
        { tip: "tuzak", baslik: "Blok bir treatment değildir", metin: "Blok, deney birimlerinin bir özelliğidir; treatment ise araştırmacının verdiği uygulamadır.", yanlis: "Deneyimli ve yeni başlayan sporcular iki treatment'tır; ayrıca blokladığım için rastgele atama gerekmez.", dogru: "Treatment'lar program A ve B'dir. Atama ==her blok içinde== yine rastgele yapılır." }
      ]
    },
    {
      baslik: "*Randomized block design* adım adım",
      kisa: "Önce blokla, sonra her blokta ayrı ayrı rastgele ata; stratified'ın deneydeki kardeşi.",
      bloklar: [
        { tip: "adimlar", baslik: "RBD: 20 sporcu, iki ısınma programı", adimlar: [
            { baslik: "1 · Blokları kur", metin: "Sporcuları deneyime göre ayır: 10 deneyimli, 10 yeni başlayan." },
            { baslik: "2 · Blok içinde rastgele ata", metin: "Her bloktan ayrı ayrı 5 sporcuyu rastgele program A'ya ver; kalan 5'i program B." },
            { baslik: "3 · Uygula ve ölç", metin: "Her sporcu atandığı programla ısınır; aynı 100 m süresi ölçülür." },
            { baslik: "4 · Blok içinde karşılaştır", metin: "Her blokta A ile B arasındaki farka bak; sonra blokların sonuçlarını birleştir." }
          ] },
        { tip: "ikili", sol: { ikon: "📊", baslik: "*Stratified random sample*", maddeler: ["Örneklemede kullanılır", "Gruplardan birim *seçilir*", "Amaç: population'ı temsil etmek"] },
          sag: { ikon: "🧪", baslik: "*Randomized block design*", maddeler: ["Deneyde kullanılır", "Gruplardaki birimler treatment'lara *atanır*", "Amaç: treatment'ları karşılaştırmak"] },
          oyun: [
            { metin: "Anket için okulu sınıf düzeylerine bölüp her düzeyden 10 öğrenci seçmek.", cevap: "sol", neden: "Gruplardan birim seçiliyor, amaç örnek almak: *stratified random sample*." },
            { metin: "Deneyde sporcuları deneyime göre ayırıp her grupta programları rastgele dağıtmak.", cevap: "sag", neden: "Gruplardaki birimler treatment'lara atanıyor: *randomized block design*." },
            { metin: "Amaç, sonucu population'a genelleyebilmek için örnekleme temsil gücü kazandırmak.", cevap: "sol", neden: "Temsil için örnekleme: *stratified random sample*." },
            { metin: "Amaç, iki ilacın etkisini blok içinde daha net kıyaslamak.", cevap: "sag", neden: "Treatment karşılaştırması: *randomized block design*." }
          ] }
      ]
    },
    {
      baslik: "*Matched pairs design*",
      kisa: "Çift içinde karşılaştır: ya benzer iki birim eşleşir ya aynı kişi iki treatment'ı alır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👯", terim: "Matched pairs design", tr: "eşleştirilmiş çiftler tasarımı", tanim: "Ya benzer iki birim çift yapılıp treatment'lar ==çift içinde== rastgele dağıtılır, ya da her birim iki treatment'ı da (sırası rastgele) alır. Analiz çiftin farkı üzerinden yapılır.", ornek: "İkizlerden birine ilaç, diğerine placebo; ya da aynı öğrenci iki yöntemi sırayla dener." }
          ] },
        { tip: "ornek", baslik: "İki ezberleme yöntemi, aynı öğrenciler", durum: "5 öğrenci iki ezberleme yöntemini de deniyor. Hangisini önce deneyeceklerini yazı tura belirliyor. Doğru hatırlanan kelime sayıları: Yöntem A: 12, 9, 15, 10, 14. Yöntem B: 14, 10, 18, 11, 17.",
          adimlar: ["Her öğrenci kendi çiftidir; farkları hesapla (B − A): 2, 1, 3, 1, 3.", "Toplam fark: 2 + 1 + 3 + 1 + 3 = 10.", "Ortalama fark: 10 ÷ 5 = 2."],
          sonuc: "Yöntem B, ortalama olarak A'dan 2 kelime fazla hatırlatıyor. Karşılaştırma bireylerin kendi farkları üzerinden yapıldı." },
        { tip: "ikili", sol: { ikon: "🎲", baslik: "*Completely randomized design*", maddeler: ["İki bağımsız grup", "Her birim tek treatment alır", "Gruplar ortalamaları karşılaştırılır"] },
          sag: { ikon: "👯", baslik: "*Matched pairs design*", maddeler: ["Çiftler ya da aynı birim iki kez", "Her çift ya da birim iki treatment'ı da görür", "Fark üzerinden karşılaştırılır"] },
          oyun: [
            { metin: "Her öğrenci iki enerji içeceğini de rastgele sırayla deniyor.", cevap: "sag", neden: "Aynı kişi iki treatment'ı alıyor: *matched pairs*." },
            { metin: "30 öğrenci kura ile iki gruba ayrılıyor; her grup tek bir içeceği içiyor.", cevap: "sol", neden: "İki bağımsız grup: *completely randomized design*." },
            { metin: "İkizlerden biri ilaç, diğeri placebo alıyor; hangi ikiz hangisini alacak yazı turayla belirleniyor.", cevap: "sag", neden: "Benzer çift, çift içinde rastgele atama: *matched pairs*." },
            { metin: "40 sporcunun numaraları rastgele çekilerek 20'si yeni, 20'si eski programa veriliyor.", cevap: "sol", neden: "Tek havuz, tek atama: *completely randomized design*." }
          ] },
        { tip: "tuzak", baslik: "Sıra etkisi", metin: "Aynı kişi iki treatment'ı arka arkaya alıyorsa ikinci denemede yorgunluk ya da öğrenme sonucu etkileyebilir.", yanlis: "Herkes önce A'yı, sonra B'yi denesin.", dogru: "Her kişinin sırasını rastgele belirle (yazı tura); böylece sıra etkisi treatment'larla karışmaz." }
      ]
    },
    {
      baslik: "Hangi tasarımı seçmeli?",
      kisa: "Önce blok değişkeni var mı, sonra aynı birim iki treatment'ı alabilir mi diye sor.",
      bloklar: [
        { tip: "tablo", baslik: "Üç tasarım karşılaştırması", head: ["Tasarım", "Gruplar nasıl kurulur?", "Ne zaman seçilir?"], rows: [
            ["*Completely randomized design*", "Tek havuzdan rastgele atama", "Yanıtı güçlü etkileyen bilinen bir özellik yok"],
            ["*Randomized block design*", "Önce bloklara ayır, blok içinde rastgele ata", "Yanıtı etkilediğinden şüphelendiğin bir özellik var (cinsiyet, deneyim)"],
            ["*Matched pairs design*", "Benzer çiftler ya da aynı birim iki treatment'ı alır", "İki treatment kıyaslanıyor ve eşleştirme ya da tekrar uygulama mümkün"]
          ], not: "Matched pairs, iki treatment'lı bir bloklama özel durumudur: blok büyüklüğü 2." },
        { tip: "adimlar", baslik: "Karar adımları", adimlar: [
            { baslik: "1 · Güçlü bir özellik var mı?", metin: "Yanıtı belirgin etkilediğinden şüphelendiğin bir özellik (cinsiyet, deneyim, başlangıç düzeyi) varsa bloklama düşün." },
            { baslik: "2 · İki treatment ve çift mümkün mü?", metin: "Aynı birim iki treatment'ı da alabiliyor ya da iyi eşleşen çiftler bulunuyorsa matched pairs." },
            { baslik: "3 · Aksi halde blokla", metin: "Birimleri bu özelliğe göre bloklara ayır, her blok içinde rastgele ata: randomized block design." },
            { baslik: "4 · Özellik yoksa", metin: "Tek havuzdan rastgele atama: completely randomized design." }
          ] },
        { tip: "ornek", baslik: "Hangi tasarım?", durum: "48 üyeli bir spor salonu iki bisiklet programını karşılaştıracak. Kuvvetin cinsiyete göre belirgin değiştiği biliniyor (24 kadın, 24 erkek). Her üye yalnızca bir programı yapabilir.",
          adimlar: ["Cinsiyet yanıtı etkiliyor: bloklama gerekir. Üyeler iki programı birden yapamaz, matched pairs olmaz.", "Kadınlar ve erkekler ayrı ayrı: her bloktan rastgele 12 kişi program 1'e, kalan 12 kişi program 2'ye.", "Karşılaştırma blok içinde yapılır."],
          sonuc: "*Randomized block design*, blok = cinsiyet, 4 grup × 12 kişi." }
      ]
    },
    {
      baslik: "Tasarım cevabı yazmak",
      kisa: "Blokları, atamanın nasıl yapıldığını ve neyin karşılaştırıldığını açıkça yaz.",
      bloklar: [
        { tip: "ornek", baslik: "RBD cevabı", durum: "Bir öğretmen 30 öğrenciyle (18 kişi 9. sınıf, 12 kişi 10. sınıf) iki ödev biçimini karşılaştıracak. Sınıf düzeyinin quiz puanını etkilediği biliniyor.",
          adimlar: ["Bloklar: 9. sınıf (18 kişi) ve 10. sınıf (12 kişi).", "9. sınıfları 01–18 numarala; randInt(1, 18) ile 9 farklı numara çek: bunlar Biçim 1, kalan 9 kişi Biçim 2.", "10. sınıfları 01–12 numarala; randInt(1, 12) ile 6 farklı numara çek: bunlar Biçim 1, kalan 6 kişi Biçim 2.", "Hepsi aynı quizi çözer; puanlar blok içinde karşılaştırılır."],
          sonuc: "Her blokta yarı yarıya atama yapıldı (9 + 9 ve 6 + 6). Biçim 1 grubu 15, Biçim 2 grubu 15 kişi." },
        { tip: "tuzak", baslik: "\"Rastgele\" demek yetmez", metin: "Atamanın nasıl yapıldığını ve her blokta ayrı yapıldığını göstermeden tam puan alınmaz.", yanlis: "Öğrencileri rastgele iki gruba ayırırım.", dogru: "Mekanizmayı yaz: numaralandır, rastgele sayı üreteciyle tekrarsız çek; blok varsa her blokta ayrı ayrı yap ve neyin karşılaştırıldığını belirt." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Completely randomized design*: bütün birimler tek havuzdan rastgele treatment gruplarına atanır.",
            "*Blocking*: yanıtı etkileyeceğinden şüphelenilen özelliğe göre benzer birimleri bloklara ayır; karşılaştırmayı blok içinde yap, değişkenlik azalır.",
            "*Randomized block design*: önce bloklara ayır, sonra her blok içinde ayrı ayrı rastgele ata.",
            "Blok bir treatment değildir; blok birimlerin özelliği, treatment araştırmacının verdiği uygulamadır.",
            "*Matched pairs design*: benzer çiftler ya da aynı kişi iki treatment'ı alır; analiz çiftin farkı üzerinden yapılır.",
            "Aynı kişi iki treatment'ı alıyorsa sıra etkisini önlemek için sırayı rastgele belirle.",
            "*Stratified sampling* örneklemede, *blocking* deneyde gruplama yapar: biri birim seçer, diğeri birimi treatment'a atar.",
            "Tasarım yazarken bloklar, rastgele atama mekanizması, treatment'lar ve karşılaştırma açık olmalı."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir öğretmen iki ders yöntemini karşılaştıracak. Sabah şubesinde 20, öğleden sonra şubesinde 20 öğrenci var. Her şubede öğrencileri ayrı ayrı rastgele ikiye bölüp birine Yöntem 1, diğerine Yöntem 2 uyguluyor. Bu tasarım hangisidir?",
      opts: ["*Completely randomized design*", "*Matched pairs design*", "*Randomized block design*; blok = şube", "*Observational study*"],
      a: 2,
      why: "Önce şubelere göre gruplanıyor, sonra her grupta rastgele atama yapılıyor: *randomized block design*. A en çekici yanlış şık: CRD'de 40 öğrenci tek havuzda atanırdı; burada şube bilgisi kullanılıyor." },
    { q: "5 koşucunun her biri iki ayakkabıyı da denedi (sıra rastgele). 100 m süreleri (saniye) tabloda. Ayakkabı A ortalama kaç saniye daha yavaş (A − B)?",
      fig: { type: "table", caption: "100 m süresi (s)", head: ["Koşucu", "1", "2", "3", "4", "5"], rows: [["Ayakkabı A", "14,2", "13,8", "15,0", "14,6", "13,4"], ["Ayakkabı B", "14,0", "13,5", "14,6", "14,5", "13,3"]] },
      opts: ["1,10 s", "0,22 s", "0,30 s", "0,10 s"],
      a: 1,
      why: "Farklar (A − B): 0,2; 0,3; 0,4; 0,1; 0,1; toplam 1,1; ortalama 1,1 ÷ 5 = 0,22 s. A en çekici yanlış şık: 1,1 toplamdır, 5'e bölünmemiştir." },
    { q: "Bir deneyde bloklama (*blocking*) yapmanın temel amacı nedir?",
      opts: ["Rastgele atama ihtiyacını ortadan kaldırmak", "Sonucun tüm population'a genellenebilmesini sağlamak", "Placebo etkisini sıfırlamak", "Blok değişkeninden gelen değişkenliği azaltıp treatment farkını daha net görmek"],
      a: 3,
      why: "Birimleri benzer bloklara ayırıp blok içinde kıyaslarsan blok farkı karşılaştırmaya girmez. A en çekici yanlış şık: bloklama rastgele atamayı kaldırmaz; atama her blokta yine rastgele yapılır." },
    { q: "Bir matched pairs deneyinde her kişi iki ilacı da kullanıyor. Hangisini önce kullanacağını yazı turayla belirlemenin amacı nedir?",
      opts: ["Sıra etkisinin (yorgunluk, öğrenme) sonucu sistemli biçimde bozmasını önlemek", "Örneklemin population'ı temsil etmesini sağlamak", "Çalışmayı double-blind yapmak", "Örneklem büyüklüğünü iki katına çıkarmak"],
      a: 0,
      why: "Herkes aynı sırayı izlerse ikinci ilaçtaki fark sıradan da gelebilir; sırayı rastgele yapmak bunu dengeler. C en çekici yanlış şık: körleme kimin ne bildiğiyle ilgilidir, sıra belirlemekle değil." },
    { q: "Aşağıdakilerden hangisi, 40 öğrencili iki yöntem karşılaştırması için *completely randomized design*'ın doğru uygulamasıdır?",
      opts: ["Her öğrencinin hangi yöntemi kullanmak istediğini sorup ona göre gruplamak", "Önce kız ve erkekleri ayırıp her grupta ayrı ayrı rastgele atamak", "40 öğrenciye 1–40 numara verip rastgele sayı üreteciyle 20 farklı numara çekmek; bunlar Yöntem 1, kalanlar Yöntem 2", "Her öğrenciye iki yöntemi sırayla denetmek"],
      a: 2,
      why: "CRD'de tüm öğrenciler tek havuzdan rastgele atanır: C. B en çekici yanlış şık: bu randomized block design'dır (blok = cinsiyet). D matched pairs, A ise atama yerine seçim." }
  ]
};
