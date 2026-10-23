/* Kitora not defteri · st405 · 4.6 Bağımsız Olaylar ve Birleşim
   Kitsiz ünite: içerik College Board CED'in Unit 4 (VAR-4) hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st405",
  amac: "Bu konu bağımsızlığı anlatıyor: bir olayın olması diğerinin olasılığını değiştirmiyorsa olaylar *independent* olur ve olasılıklar çarpılır. Bağımsızlığı tabloyla sınamayı, \"veya\" ve \"en az bir\" olasılıklarını bağımsız olaylarda hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Bağımsız olaylar",
      kisa: "A olsa da olmasa da B'nin olasılığı değişmiyorsa olaylar bağımsızdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔓", terim: "Independent events", tr: "bağımsız olaylar", tanim: "Birinin gerçekleşmesi ya da gerçekleşmemesi diğerinin olasılığını ==değiştirmeyen== olaylar.", ornek: "Bir bozuk paranın yazı gelmesi ile ayrı bir zarın 6 gelmesi." },
            { ikon: "🔗", terim: "Dependent events", tr: "bağımlı olaylar", tanim: "Birinin sonucu diğerinin olasılığını ==değiştiren== olaylar.", ornek: "Geri koymadan çekilen iki bilyenin renkleri." }
          ] },
        { tip: "formul", parcalar: [{ t: "P(A ve B)", alt: "ikisi birlikte" }, "=", { t: "P(A)", alt: "A'nın olasılığı" }, "×", { t: "P(B)", alt: "B'nin olasılığı" }], aciklama: "Yalnızca ==A ve B bağımsızsa== geçerli. Bağımlıysa P(A ve B) = P(A) × P(B | A) kullan." },
        { tip: "ornek", baslik: "Para ve zar", durum: "Bir adil bozuk para ve ayrı bir adil zar atılıyor. Paranın yazı gelmesi ve zarın 6 gelmesi olasılığı nedir?",
          adimlar: ["Para ve zar birbirini etkilemiyor: olaylar bağımsız.", "P(yazı) = 1/2 = 0,5 ve P(6) = 1/6 ≈ 0,167.", "P(yazı ve 6) = 1/2 × 1/6 = 1/12 ≈ 0,083."],
          sonuc: "P(yazı ve 6) = 1/12 ≈ ==0,083==. 12 eşit olasılıklı sonuç (2 × 6) içinde yalnızca (yazı, 6) uygun." }
      ]
    },
    {
      baslik: "Bağımsızlığın alan modeli",
      kisa: "Bağımsız olaylarda kesişim alanı iki şeridin olasılıklarının çarpımıdır.",
      bloklar: [
        { tip: "grafik", baslik: "Alan modeli: karenin %100'ü örnek uzay", xlabel: "Karenin tamamı = 1", ylabel: "", xmax: 10, ymax: 10,
          xticks: [{ v: 0, label: "0" }, { v: 10, label: "1" }],
          ogeler: [
            { id: "k1", tip: "cizgi", renk: 3, kesik: true, from: [0, 0], to: [10, 0] },
            { id: "k2", tip: "cizgi", renk: 3, kesik: true, from: [10, 0], to: [10, 10] },
            { id: "k3", tip: "cizgi", renk: 3, kesik: true, from: [10, 10], to: [0, 10] },
            { id: "k4", tip: "cizgi", renk: 3, kesik: true, from: [0, 10], to: [0, 0] },
            { id: "a", tip: "alan", renk: 0, noktalar: [[0, 0], [0, 10], [6, 10], [6, 0]], gizli: true },
            { id: "ya", tip: "yazi", x: 3, y: 8.5, metin: "A: 0,6", gizli: true },
            { id: "b", tip: "alan", renk: 2, noktalar: [[0, 0], [0, 5], [10, 5], [10, 0]], gizli: true },
            { id: "yb", tip: "yazi", x: 8, y: 3.5, metin: "B: 0,5", gizli: true },
            { id: "kes", tip: "alan", renk: 1, noktalar: [[0, 0], [0, 5], [6, 5], [6, 0]], gizli: true },
            { id: "yk", tip: "yazi", x: 3, y: 2.5, metin: "A ve B: 0,30", gizli: true }
          ],
          durumlar: [
            { metin: "A şeridi karenin %60'ını kaplıyor: P(A) = 0,6. Dikey şerit, tam yükseklikte.", goster: ["a", "ya"] },
            { metin: "B şeridi yatay ve karenin %50'sini kaplıyor: P(B) = 0,5. Şerit hem A'nın içinde hem dışında aynı oranda.", goster: ["b", "yb"] },
            { metin: "A'nın içinde B yine yarısı: P(B | A) = 3/6 = 0,5 = P(B). Kesişim 6 × 5 = 30 birim, yani ==0,6 × 0,5 = 0,30==.", goster: ["kes", "yk"] }
          ] },
        { tip: "formul", parcalar: [{ t: "P(B | A)", alt: "A verilmişken B" }, "=", { t: "P(B)", alt: "A'dan bağımsız B" }], aciklama: "Bu, bağımsızlığın tanımıdır. Üç ifade denktir: P(B | A) = P(B), P(A | B) = P(A) ve P(A ve B) = P(A) × P(B). Birini göstermek yeter." }
      ]
    },
    {
      baslik: "İki yönlü tabloda bağımsızlık sınaması",
      kisa: "P(B | A) = P(B) mi? Sayıları karşılaştır; \"benziyor\" yetmez.",
      bloklar: [
        { tip: "tablo", baslik: "Okul 1: 200 öğrenci", head: ["", "Müzik ✓", "Müzik ✗", "Toplam"], rows: [
            ["Spor ✓", "30", "60", "90"],
            ["Spor ✗", "30", "80", "110"],
            ["Toplam", "60", "140", "200"]
          ] },
        { tip: "tablo", baslik: "Okul 2: 200 öğrenci", head: ["", "Müzik ✓", "Müzik ✗", "Toplam"], rows: [
            ["Spor ✓", "30", "70", "100"],
            ["Spor ✗", "30", "70", "100"],
            ["Toplam", "60", "140", "200"]
          ] },
        { tip: "ornek", baslik: "Hangi okulda spor ve müzik bağımsız?", durum: "Her tabloda P(müzik | spor) ile P(müzik) değerini karşılaştır.",
          adimlar: ["Okul 1: P(müzik | spor) = 30/90 = 1/3 ≈ 0,333; P(müzik) = 60/200 = 0,30. Eşit değil.", "Kontrol: P(spor) × P(müzik) = 0,45 × 0,30 = 0,135, ama P(spor ve müzik) = 30/200 = 0,15. Yine eşit değil.", "Okul 2: P(müzik | spor) = 30/100 = 0,30; P(müzik) = 60/200 = 0,30. Eşit.", "Kontrol: P(spor) × P(müzik) = 0,50 × 0,30 = 0,15 ve P(spor ve müzik) = 30/200 = 0,15. Eşit."],
          sonuc: "Okul 1'de olaylar ==bağımlı==, Okul 2'de ==bağımsız==. Sınavda sayıyı göster: \"0,30 = 0,30 olduğundan bağımsız\"." },
        { tip: "tuzak", baslik: "Yaklaşık eşit demek bağımsız demek değil", metin: "0,333 ile 0,30 birbirine yakın görünebilir ama eşit değil, yani olaylar bağımlı. AP'de bağımsızlığı iddia ediyorsan sayıların tam eşit olduğunu göstermelisin.", yanlis: "0,333 ≈ 0,30 olduğundan bağımsızdır.", dogru: "==Eşit değilse bağımlı==; hesapları göster ve karşılaştır." }
      ]
    },
    {
      baslik: "Ayrık olay bağımsız değildir",
      kisa: "İki olay ayrıksa ve olasılıkları sıfırdan büyükse, bağımlıdır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🚫", baslik: "Ayrık olaylar", maddeler: ["Aynı anda olamaz", "A olursa B kesin olmaz", "P(B | A) = 0"] },
          sag: { ikon: "🔓", baslik: "Bağımsız olaylar", maddeler: ["Birbirini etkilemez", "A olsa da B'nin şansı aynı", "P(B | A) = P(B)"] },
          oyun: [
            { metin: "Bir zarın 2 gelmesi ve 5 gelmesi.", cevap: "sol", neden: "Tek zar aynı anda ikisi olamaz: ayrık." },
            { metin: "İki ayrı zardan birinde 2, diğerinde 5 gelmesi.", cevap: "sag", neden: "İki zar birbirini etkilemez: bağımsız." },
            { metin: "Rastgele seçilen bir kartın kırmızı ve siyah olması.", cevap: "sol", neden: "Bir kart ikisi birden olamaz: ayrık." },
            { metin: "Bozuk paranın yazı gelmesi ve ayrı bir zarın çift gelmesi.", cevap: "sag", neden: "Biri diğerinin olasılığını değiştirmez: bağımsız." }
          ] },
        { tip: "tuzak", baslik: "Ayrık ≠ bağımsız", metin: "Zarın 2 gelmesi: P = 1/6. Zarın 2 geldiği biliniyorsa 5 gelmesi imkânsız: P(5 | 2) = 0 ≠ P(5) = 1/6. Bilgi olasılığı değiştirdi: bağımlı.", yanlis: "Aynı anda olamadıkları için birbirini etkilemezler, yani bağımsızdır.", dogru: "Olasılıkları sıfırdan büyük ayrık olaylar ==her zaman bağımlıdır==, çünkü birinin olması diğerini imkânsız yapar." }
      ]
    },
    {
      baslik: "\"Veya\" ve \"en az bir\" bağımsız olaylarda",
      kisa: "A veya B = P(A) + P(B) − P(A) × P(B); en az bir = 1 − hiçbiri.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "P(A veya B)", alt: "bağımsız olaylar" }, "=", { t: "P(A) + P(B)", alt: "toplam" }, "−", { t: "P(A) × P(B)", alt: "kesişim, bağımsız" }], aciklama: "Genel toplama kuralındaki P(A ve B) yerine çarpım gelir. Bağımlı olaylarda P(A ve B) = P(A) × P(B | A) alınır; örneğin Okul 1'de 0,45 + 0,30 − 0,45 × 1/3 = 0,60." },
        { tip: "ornek", baslik: "İki bağımsız şans", durum: "Deniz'in bir testten geçme olasılığı 0,6, Ece'nin 0,5; testler birbirinden bağımsız. En az birinin geçme olasılığı nedir?",
          adimlar: ["Formülle: P(A veya B) = 0,6 + 0,5 − 0,6 × 0,5 = 1,1 − 0,3 = 0,8.", "Kısa yol: hiçbiri geçmez = (1 − 0,6) × (1 − 0,5) = 0,4 × 0,5 = 0,2.", "En az biri = 1 − 0,2 = 0,8."],
          sonuc: "P(en az biri geçer) = ==0,8==. İki yol da aynı sonucu verir." },
        { tip: "ornek", baslik: "Ayran kapağına dönüş", durum: "4.1'deki ayran sorusunu hesapla: her kapağın ödüllü olma olasılığı 0,2 ve kapaklar bağımsız. 4 ayrandan en az birinden ödül çıkma olasılığı nedir?",
          adimlar: ["Bir kapağın ödülsüz olma olasılığı 1 − 0,2 = 0,8.", "Dördünün de ödülsüz olması (bağımsız): 0,8 × 0,8 × 0,8 × 0,8 = 0,8⁴ = 0,4096.", "En az bir ödül = 1 − 0,4096 = 0,5904."],
          sonuc: "P(en az bir ödül) = 0,5904 ≈ ==0,59==. Simülasyondaki tahmin (6/10 = 0,6) bu değere yakındı." }
      ]
    },
    {
      baslik: "İadeli ve iadesiz çekim",
      kisa: "Geri koyarsan bağımsız, geri koymazsan bağımlı olursun.",
      bloklar: [
        { tip: "tablo", baslik: "Torbada 5 kırmızı, 3 mavi bilye; iki çekim", head: ["Olay", "Geri koyarak (bağımsız)", "Geri koymadan (bağımlı)"], rows: [
            ["İkisi de kırmızı", "5/8 × 5/8 = 25/64 ≈ 0,391", "5/8 × 4/7 = 5/14 ≈ 0,357"],
            ["Önce kırmızı, sonra mavi", "5/8 × 3/8 = 15/64 ≈ 0,234", "5/8 × 3/7 = 15/56 ≈ 0,268"]
          ], not: "Geri koymadan çekimde ikinci çekimin olasılığı, ilk çekilen bilye yüzünden değişir." },
        { tip: "ornek", baslik: "Hangi çarpım?", durum: "Bir sınıfta kura ile iki gönüllü seçilecek: ilk seçilen kişi tekrar kuraya girmiyor. Seçimler bağımsız mı?",
          adimlar: ["İlk kişi çekilince havuz küçülüyor; ikinci çekimin olasılığı ilk çekime bağlı.", "Yani olaylar bağımlı: çarpma kuralı P(A ve B) = P(A) × P(B | A) ile yapılır.", "İlk kişi kuraya geri girseydi her çekim aynı havuzdan olurdu: bağımsız."],
          sonuc: "İadesiz seçim ==bağımlıdır==; iadeli seçim bağımsızdır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Independent events*: biri diğerinin olasılığını değiştirmez; P(B | A) = P(B).",
            "Bağımsızsa P(A ve B) = P(A) × P(B); bağımlıysa P(A ve B) = P(A) × P(B | A).",
            "Bağımsızlığı tabloda sınamak için P(B | A) ile P(B)'yi (ya da çarpımla kesişimi) tam karşılaştır; 0,333 ve 0,30 eşit değil.",
            "Ayrık olaylar (olasılıkları sıfırdan büyükse) bağımsız değildir: P(B | A) = 0 ≠ P(B).",
            "Bağımsız olaylarda P(A veya B) = P(A) + P(B) − P(A) × P(B).",
            "\"En az biri\" için tersten git: 1 − (hiçbiri); 1 − 0,8⁴ = 0,5904.",
            "Geri koymadan çekim bağımlıdır: 5/8 × 4/7 = 5/14; geri koyarak çekim bağımsızdır: 5/8 × 5/8 = 25/64.",
            "Hesapları göster: kesir, ondalık ve karşılaştırma yaz; sadece \"bağımsız\" demek puan getirmez."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Adil bir bozuk para ve ayrı bir adil zar atılıyor. Paranın tura ve zarın çift gelme olasılığı nedir?",
      opts: ["1/2 + 1/2 = 1", "1/2 × 1/2 = 1/4 = 0,25", "1/2 × 1/6 ≈ 0,083", "3/6 = 0,5"],
      a: 1,
      why: "Olaylar bağımsız: P(tura) = 1/2, P(çift) = 3/6 = 1/2. P(tura ve çift) = 1/2 × 1/2 = 1/4 = 0,25. C en çekici yanlış şık: çift yerine belirli bir yüzün (örneğin 6) olasılığı olan 1/6'yı kullanır." },
    { q: "A ve B olayları ayrıktır; P(A) = 0,3 ve P(B) = 0,4. A ve B bağımsız mıdır?",
      opts: ["Evet, çünkü ayrık olaylar birbirini etkilemez", "Evet, çünkü P(A ve B) = 0", "Hayır, çünkü P(A ve B) = 0 iken P(A) × P(B) = 0,12", "Belirlenemez, çünkü ek bilgi gerekir"],
      a: 2,
      why: "Bağımsız olsalardı P(A ve B) = 0,3 × 0,4 = 0,12 olurdu; ayrık olduklarından P(A ve B) = 0. Eşit değil, o halde bağımlı. A en çekici yanlış şık: ayrık olmakla bağımsız olmayı karıştırır." },
    { q: "Tablo 100 öğrencinin spor ve müzik kulübü üyeliğini gösteriyor. Spor ve müzik kulübü üyeliği hakkında hangisi doğrudur?",
      fig: { type: "table", caption: "Kulüp üyeliği", head: ["", "Müzik ✓", "Müzik ✗", "Toplam"], rows: [["Spor ✓", "12", "28", "40"], ["Spor ✗", "18", "42", "60"], ["Toplam", "30", "70", "100"]] },
      opts: ["Bağımsız: P(müzik | spor) = 12/40 = 0,30 = P(müzik)", "Bağımlı: P(müzik | spor) = 0,30 iken P(müzik) = 0,12", "Bağımsız: 12 küçük bir sayı olduğundan", "Ayrık olduklarından bağımsızdır"],
      a: 0,
      why: "P(müzik | spor) = 12/40 = 0,30 ve P(müzik) = 30/100 = 0,30. Eşit: bağımsız. Kontrol: 0,40 × 0,30 = 0,12 = P(spor ve müzik). D yanlış: 12 öğrenci iki kulüpte, yani olaylar ayrık değil." },
    { q: "A ve B bağımsız olaylar, P(A) = 0,3 ve P(B) = 0,5. P(A veya B) nedir?",
      opts: ["0,80", "0,15", "0,35", "0,65"],
      a: 3,
      why: "P(A veya B) = 0,3 + 0,5 − 0,3 × 0,5 = 0,8 − 0,15 = 0,65. A en çekici yanlış şık: 0,3 + 0,5, kesişimi çıkarmaz." },
    { q: "Bir basketbolcunun her serbest atışı, 0,25 olasılıkla ve birbirinden bağımsız olarak basket oluyor. Üç atışta en az bir basket olma olasılığı yaklaşık nedir?",
      opts: ["0,25", "0,578", "0,75", "0,422"],
      a: 1,
      why: "Hiç basket olmaz = 0,75 × 0,75 × 0,75 = 0,421875. En az bir = 1 − 0,421875 ≈ 0,578. D en çekici yanlış şık: 0,422 hiç basket olmama olasılığıdır." }
  ]
};
