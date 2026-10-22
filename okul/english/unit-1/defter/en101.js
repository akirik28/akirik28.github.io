/* Kitora not defteri · en101 · 1.1 Pasaj Analizi Paragrafı
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Kasım MEB sınavı rubriği). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en101",
  amac: "Kasım sınavının Reading & Writing bölümünde tek bir görev var: bir pasajın anlamını ve amacını 200–250 kelimelik bir *passage analysis* paragrafıyla açıklamak. Rubriği, paragrafın iskeletini ve alıntıyı nasıl yerleştireceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Sınav sorusu ne istiyor?",
      kisa: "Pasajın ne söylediğini (meaning) ve neden yazıldığını (purpose) kanıtla açıkla.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 50, sonek: " puan", etiket: "Reading & Writing (sınavın yarısı)" },
            { deger: 40, sonek: " dk", etiket: "yazma süresi" },
            { deger: "200–250", sonek: " kelime", etiket: "en az bir paragraf" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💡", terim: "Meaning", tr: "anlam", tanim: "Pasajın söylediği asıl fikir; yani *theme* ya da mesaj. Olay özeti değildir, olayın ne anlama geldiğidir.", ornek: "Başkalarının fedakârlığı görmezden gelinebilir." },
            { ikon: "🎯", terim: "Purpose", tr: "amaç", tanim: "Yazarın bu pasajı neden yazdığı: eleştirmek, uyarmak, düşündürmek, öğretmek, eğlendirmek.", ornek: "Yazar, aileyi ve toplumu eleştirmek için bir kadının görünmezliğini gösteriyor." }
          ] },
        { tip: "tuzak", baslik: "Özet yazma tuzağı", metin: "Soru “What is the meaning and purpose of the passage?” diye soruyor; “What happens in the passage?” demiyor. Olayları baştan sona anlatan paragraf, rubrikteki puanların çoğunu kaçırır.", yanlis: "Pasajda olanları sırayla anlatırım.", dogru: "Önce iddiamı yazarım; olayları yalnızca iddiamı kanıtlamak için kullanırım." }
      ]
    },
    {
      baslik: "Rubrik: 50 puan nereye gidiyor?",
      kisa: "Puanın yarısı kanıttadır; konu cümlesi ve araçlar ikinci sırada.",
      bloklar: [
        { tip: "grafik", baslik: "Reading & Writing rubriği (50 puan)", xlabel: "Kriter", ylabel: "Puan", xmax: 8, ymax: 28,
          xticks: [{ v: 1, label: "Düzen" }, { v: 2, label: "Konu c." }, { v: 3, label: "Bağlam" }, { v: 4, label: "Kanıt" }, { v: 5, label: "Alıntı" }, { v: 6, label: "Araç" }, { v: 7, label: "Dil" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 25, label: "25" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 0, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b4", tip: "alan", renk: 1, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "b5", tip: "alan", renk: 2, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "b6", tip: "alan", renk: 2, noktalar: [[5.65, 0], [6.35, 0], [6.35, 0], [5.65, 0]] },
            { id: "b7", tip: "alan", renk: 2, noktalar: [[6.65, 0], [7.35, 0], [7.35, 0], [6.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 3.8, metin: "3", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 5.8, metin: "5", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 2.8, metin: "2", gizli: true },
            { id: "t4", tip: "yazi", x: 4, y: 25.8, metin: "25", gizli: true },
            { id: "t5", tip: "yazi", x: 5, y: 3.8, metin: "3", gizli: true },
            { id: "t6", tip: "yazi", x: 6, y: 7.8, metin: "7", gizli: true },
            { id: "t7", tip: "yazi", x: 7, y: 5.8, metin: "5", gizli: true }
          ],
          durumlar: [
            { metin: "Yedi kriter, toplam ==50 puan==. Hangisi ne kadar değerli?" },
            { metin: "Önce yapı: paragraf düzeni 3, konu cümlesi 5, bağlam 2. Toplam 10 puan.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 3], [0.65, 3]] }, b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 5], [1.65, 5]] }, b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 2], [2.65, 2]] } }, goster: ["t1", "t2", "t3"] },
            { metin: "Asıl ağırlık: pasajdan bol kanıt (alıntı ve parafraz) ==25 puan==. Tek başına notun yarısı.", set: { b4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 25], [3.65, 25]] } }, goster: ["t4"] },
            { metin: "Kalan 15 puan: alıntı yerleştirme 3, edebi ve yapısal araçlar 7, dil 5.", set: { b5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 3], [4.65, 3]] }, b6: { noktalar: [[5.65, 0], [6.35, 0], [6.35, 7], [5.65, 7]] }, b7: { noktalar: [[6.65, 0], [7.35, 0], [7.35, 5], [6.65, 5]] } }, goster: ["t5", "t6", "t7"] }
          ] },
        { tip: "tablo", baslik: "Her kriter için ne yapmalı?", head: ["Kriter (puan)", "Notlandıran ne arıyor?", "Sende ne olmalı?"],
          rows: [
            ["Paragraf düzeni (3)", "Tek, düzenli paragraf", "Konu cümlesi → destek → kapanış sırası ve geçiş sözcükleri"],
            ["Konu cümlesi (5)", "Net bir iddia", "Başlık, yazar ve *meaning + purpose* tek cümlede"],
            ["Bağlam (2)", "Pasajın nerede geçtiği", "Kim, ne zaman, nerede, ne oluyor; en fazla 2 cümle"],
            ["Kanıt (25)", "Çok sayıda pasaj kanıtı", "Alıntı ve parafraz karışık, her biri açıklanmış"],
            ["Alıntı yerleştirme (3)", "Alıntı cümleye uyuyor mu?", "Tırnak, giriş ifadesi, kaynak; alıntı yoksa bu kriterden 0"],
            ["Edebi ve yapısal araçlar (7)", "Araç adı + etkisi", "En az 2 araç; her biri kanıtla ve anlamla bağlı"],
            ["Dil (5)", "Dilbilgisi ve kelime", "Doğru zaman, çeşitli kelime, yazım"]
          ], vurgu: 3, not: "Rubrik, ünitenin sınav belgesindeki puanlara göre verilmiştir; kriter açıklamaları sınava hazırlık için sadeleştirilmiştir." }
      ]
    },
    {
      baslik: "Paragrafın iskeleti",
      kisa: "Konu cümlesi, bağlam, üç kanıt, kapanış: yaklaşık 215 kelime.",
      bloklar: [
        { tip: "adimlar", baslik: "Tek paragrafın sırası", adimlar: [
            { baslik: "1 · Konu cümlesi (~30 kelime)", metin: "Öykünün adı, yazarı ve *meaning + purpose* iddiası." },
            { baslik: "2 · Bağlam (~25 kelime)", metin: "Kim, nerede, ne zaman; pasajdaki durum 1–2 cümlede." },
            { baslik: "3 · Kanıt 1 (~45 kelime)", metin: "Alıntı ya da parafraz, ardından iddiayla bağlayan açıklama." },
            { baslik: "4 · Kanıt 2 (~45 kelime)", metin: "Başka bir yerden kanıt; burada bir edebi araç adını ver." },
            { baslik: "5 · Kanıt 3 (~45 kelime)", metin: "Üçüncü kanıt; yapısal bir araç (sıra, tekrar, son cümle) olabilir." },
            { baslik: "6 · Kapanış (~25 kelime)", metin: "İddiayı farklı sözcüklerle tekrar et; yeni kanıt ekleme." }
          ] },
        { tip: "formul", parcalar: [
            { t: "30", alt: "konu cümlesi" }, "+", { t: "25", alt: "bağlam" }, "+", { t: "3 × 45", alt: "üç kanıt" }, "+", { t: "25", alt: "kapanış" }, "=", { t: "≈ 215", alt: "kelime (hedef 200–250)" }
          ], aciklama: "Bütçeyi aşma: kanıt çok önemli ama uzatırsan 250'yi geçersin; yazdıktan sonra kelimeleri say." }
      ]
    },
    {
      baslik: "Konu cümlesi ve bağlam (7 puan)",
      kisa: "Güçlü konu cümlesi iddia taşır; bağlam yalnızca zemini kurar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📄", baslik: "Zayıf konu cümlesi", maddeler: ["Sadece özet ya da duygu", "İddia yok, neden yok"] },
          sag: { ikon: "🎯", baslik: "Güçlü konu cümlesi", maddeler: ["Yazar + araç/yöntem + mesaj", "Tartışılabilir ve kanıtlanabilir"] },
          oyun: [
            { metin: "This passage is about an old woman who cries at a dinner.", cevap: "sol", neden: "Yalnızca özet; anlam ve amaç yok." },
            { metin: "In the passage, Dolores presents Zézé as invisible to her own family in order to criticize how society treats unmarried women.", cevap: "sag", neden: "Yazar, yöntem ve amaç var; kanıtlanabilir bir iddia." },
            { metin: "The Vengeance of Felix is a very interesting story and I liked it.", cevap: "sol", neden: "Kişisel beğeni; sınavda puan getirmez." },
            { metin: "Through Felix's patient revenge, Medeiros e Albuquerque suggests that hatred can destroy the hater as well as the enemy.", cevap: "sag", neden: "Net tema (*meaning*) ve yazar bakışı." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Konu cümlesi kalıbı", metin: "Sınavda böyle yaz: *In [title], [author] uses [device] to show that [meaning], so that readers [purpose].*" },
            { ikon: "🗺️", baslik: "Bağlam kalıbı", metin: "Sınavda böyle yaz: *In this passage, [character] is [situation] in [place/time], when [key event].*" },
            { ikon: "🔁", baslik: "Amaç fiilleri", metin: "*to criticize, to expose, to warn, to challenge, to illustrate, to question*; “to show” tek başına zayıf kalır." }
          ] },
        { tip: "tuzak", metin: "Bağlam 2 puandır; uzatırsan kanıt için yer kalmaz.", yanlis: "Bağlamda bütün olay örgüsünü anlatırım.", dogru: "Bağlam en fazla iki cümle; olayları kanıt kısmında gerektikçe kullan." }
      ]
    },
    {
      baslik: "Kanıt: alıntı, parafraz, açıklama (25 puan)",
      kisa: "Her kanıtı üç adımda ver: giriş, alıntı ya da parafraz, açıklama.",
      bloklar: [
        { tip: "adimlar", baslik: "Kanıt sandviçi", adimlar: [
            { baslik: "Giriş (introduce)", metin: "Kanıtı iddiaya bağla: *This is shown when…, Dolores writes that…*" },
            { baslik: "Kanıt (cite)", metin: "Kısa alıntı ya da kendi sözlerinle parafraz." },
            { baslik: "Açıklama (explain)", metin: "Kanıtın neden iddiayı desteklediğini ve hangi aracı kullandığını söyle: *This suggests… because…*" }
          ] },
        { tip: "tablo", baslik: "Alıntı mı, parafraz mı?", head: ["", "Alıntı (*quotation*)", "Parafraz (*paraphrase*)"],
          rows: [
            ["Nedir?", "Metnin kelimesi kelimesine kısa parçası", "Aynı fikrin kendi cümlenle anlatımı"],
            ["Ne zaman?", "Etkili ya da çarpıcı kelimeler varken", "Uzun bir bölümü kısaca özetlemek gerekirken"],
            ["Kural", "Tırnak içinde, kaynağıyla", "Tırnak yok; ama fikir metne ait olduğundan yine bağla"],
            ["Sınavda böyle yaz", "*Dolores writes that Zézé feels “a glacial chill”.*", "*Dolores shows that Zézé realizes the poem is not meant for her.*"]
          ], vurgu: 3 },
        { tip: "tuzak", metin: "En sık iki kayıp: açıklamasız alıntı ve alıntısız yorum. İkisi de “bol kanıt” puanını düşürür.", yanlis: "Güzel bir cümle seçtim, o kendi başına yeter.", dogru: "Her alıntının arkasında en az bir cümle yorum olsun: *This suggests that…*" }
      ]
    },
    {
      baslik: "Alıntıyı doğru yerleştirmek (3 puan)",
      kisa: "Alıntı, cümlenin dilbilgisine uymalı; tırnak ve kaynak eksik olmamalı.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "❝", baslik: "Tırnak işareti", metin: "Metinden alınan her kelime grubu tırnak içinde olmalı." },
            { ikon: "🔗", baslik: "Cümleye uydur", metin: "Alıntı kendi cümlenin dilbilgisine oturmalı: *Zézé feels “stricken by sudden disillusionment”.*" },
            { ikon: "✂️", baslik: "Kısa tut", metin: "Gereken kelimeleri al; atladığın yeri *…* ile, eklediğin kelimeyi *[ ]* ile göster." },
            { ikon: "🏷️", baslik: "Kaynak", metin: "Sınav kâğıdında paragraf ya da satır numarası varsa onu, yoksa yazar soyadını parantez içinde yaz; nokta parantezden sonra gelir." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Doğru yerleştirilmiş", maddeler: ["Giriş ifadesi var", "Tırnak ve kaynak var, yorum var"] },
          sag: { ikon: "⚠️", baslik: "Hatalı", maddeler: ["Kopuk, tırnaksız ya da yorumsuz", "Cümleyle uyumsuz"] },
          oyun: [
            { metin: "Dolores writes that the family “hardly considered her in the light of a living person” (Dolores).", cevap: "sol", neden: "Giriş, tırnak, kaynak var." },
            { metin: "“Aunt Zézé's tears are the most beautiful homage.”", cevap: "sag", neden: "Giriş ifadesi ve yorum yok; alıntı tek başına bırakılmış." },
            { metin: "Zézé feels “stricken by sudden disillusionment” when she understands the poem.", cevap: "sol", neden: "Alıntı cümleye dilbilgisel olarak oturuyor." },
            { metin: "Felix wants revenge. exceedingly patient in his vindictiveness.", cevap: "sag", neden: "Tırnak yok, cümle kopuk." }
          ] },
        { tip: "tuzak", metin: "Alıntı yoksa bu kriterden 0 alırsın. Üç puan küçük görünür ama bir kısa alıntı bile onu kurtarır.", yanlis: "Sadece parafraz yazarım, alıntıya gerek yok.", dogru: "Her paragrafta en az bir doğru yerleştirilmiş alıntı kullan." }
      ]
    },
    {
      baslik: "Araçlar, dil ve yapay zekâ kuralı (12 puan)",
      kisa: "Araç + kanıt + etki: üçünü bir cümlede bağla; paragrafı kendin yaz.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Araç", alt: "adı" }, "+", { t: "Kanıt", alt: "alıntı ya da parafraz" }, "+", { t: "Etki", alt: "anlama katkısı" }, "=", { t: "7 puan", alt: "edebi ve yapısal araçlar" }
          ], aciklama: "Sınavda böyle yaz: *The author uses irony when…, which shows that…* Araç ve etki sıralaması en102'de ayrıntılı." },
        { tip: "liste", maddeler: [
            { ikon: "⏱️", baslik: "Zaman", metin: "Edebi analizde olaylar hep şimdiki zamanla anlatılır: *Zézé weeps*, *Felix stabs himself*." },
            { ikon: "🔤", baslik: "Geçiş sözcükleri", metin: "*First, In addition, Moreover, However, As a result, In conclusion*." },
            { ikon: "🚫", baslik: "Akademik ton", metin: "*I think* yerine kanıt ve *suggests, reveals, implies* fiillerini kullan." }
          ] },
        { tip: "not", metin: "==Yapay zekâ kuralı:== okulda araştırmada ve yazmada üretken yapay zekâ yasaktır; yalnızca sınırlı kullanım (düzen önerisi, kısaltma, yazım denetimi) tanınıyor. Sınavda paragrafı tek başına yazarsın. Bu defter hazır paragraf vermez, yalnızca iskelet ve kalıp verir; paragrafı sen kurarsın." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Görev: *What is the meaning and purpose of the passage?* En az bir paragraf, 200–250 kelime, 40 dakika, 50 puan.",
            "*Meaning* = mesaj; *purpose* = yazarın niyeti. İkisi de konu cümlesinde olmalı.",
            "Puanlar: düzen 3, konu cümlesi 5, bağlam 2, kanıt 25, alıntı yerleştirme 3, araçlar 7, dil 5.",
            "İskelet: konu cümlesi, bağlam, üç kanıt, kapanış (≈ 215 kelime).",
            "Kanıt = giriş + alıntı ya da parafraz + açıklama; açıklamasız alıntı puan kaybettirir.",
            "Alıntı yoksa yerleştirme kriteri 0: kısa bir alıntıyı doğru yerleştir.",
            "Araç + kanıt + etki cümlesi kur; edebi analiz şimdiki zamanla yazılır.",
            "Paragrafı sen yaz; üretken yapay zekâ yazmada yasak."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Rubriğe göre Reading & Writing bölümünde en çok puan hangi kriterden gelir?",
      opts: ["Pasajdan bol kanıt (alıntı ve parafraz)", "Konu cümlesi", "Edebi ve yapısal araçlar", "Dil"],
      a: 0,
      why: "Kanıt 25 puandır; konu cümlesi 5, araçlar 7, dil 5. En çekici yanlış şık C: araçlar önemlidir ama 7 puandır, kanıt ise tek başına notun yarısıdır." },
    { q: "Bir öğrenci paragrafa şöyle başlıyor: “The story is about a woman who lives with her sister and cries at a dinner.” Bu cümle için en doğru yorum hangisidir?",
      opts: ["Güçlü bir konu cümlesidir, çünkü olay anlatır", "Zayıftır, çünkü anlam ve amaç içermeyen bir özettir", "Zayıftır, çünkü cümle çok kısadır", "Güçlüdür, çünkü yazarın adını içermez"],
      a: 1,
      why: "Konu cümlesi *meaning + purpose* iddiası taşımalıdır; bu cümle yalnızca olay özetidir. Kısalık ya da uzunluk ölçüt değildir; C bu yüzden yanlış." },
    { q: "Hangi cümlede alıntı doğru yerleştirilmiştir?",
      opts: ["Felix is stubborn. exceedingly patient in his vindictiveness.", "“Exceedingly patient in his vindictiveness.” Felix is angry.", "The narrator says Felix is “exceedingly patient in his vindictiveness” (Medeiros e Albuquerque).", "Felix is exceedingly patient in his vindictiveness (Medeiros e Albuquerque)."],
      a: 2,
      why: "C'de giriş ifadesi, tırnak ve kaynak var; alıntı cümleye uyuyor. D'de kelimeler tırnaksız kullanılmış; bu, alıntının hatalı yerleştirilmesidir." },
    { q: "Bir öğrenci 200–250 kelimelik paragrafında bağlam bölümüne 120 kelime ayırmıştır. En büyük risk nedir?",
      opts: ["Konu cümlesi puan alamaz", "Dil kriteri sıfırlanır", "Hiçbir risk yoktur; uzun bağlam daha fazla puan getirir", "Bağlam 2 puandır; kanıt ve araçlar için yer kalmaz, kanıt puanı düşer"],
      a: 3,
      why: "Bağlam 2 puandır, kanıt 25. Yer harcamak yanlış yerde puan harcamak demektir. C yanlış: bağlam uzadıkça puan artmaz." },
    { q: "Pasaj analizinde bir kanıt cümlesinden sonra neden ayrıca açıklama cümlesi yazılır?",
      opts: ["Kelime sayısını artırmak için", "Alıntının iddiayı nasıl desteklediğini ve hangi aracı kullandığını göstermek için", "Öğretmenin pasajı unutmaması için", "Konu cümlesini tekrar etmek için"],
      a: 1,
      why: "Açıklama, kanıt ile iddia arasındaki bağı kurar; *This suggests that…* gibi cümleler bunun içindir. A tek başına anlamsızdır; açıklama uzatmak için değil, bağlamak için yazılır." }
  ]
};
