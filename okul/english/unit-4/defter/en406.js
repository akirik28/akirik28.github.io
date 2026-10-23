/* Kitora not defteri · en406 · 4.6 İkna Konuşması
   Okul dersi (10. sınıf English · Unit 4). Hazır konuşma metni vermez; yapı, süre ve kalıp verir.
   Kaynak: Persuasive Speech belgeleri ve 100 puanlık rubrik (Dr Byrd). "Ek bilgi" etiketli kısımlar öğretmen belgesinde yoktur. */
window.DEFTER = {
  slug: "en406",
  amac: "Argüman konuşmasını (*persuasive speech*) planlamayı öğreneceksin: 5–6 dakikalık süre ve soru-cevap, PowerPoint yerine poster ve handout, concession ve çözümün konuşmadaki yeri, sunum becerileri, hazır olma kuralları ve 100 puanlık rubrik.",
  bolumler: [
    {
      baslik: "Konuşma bir bakışta",
      kisa: "5–6 dakika, soru-cevap, Performans Notu 2'nin %60'ı; essay okunmaz.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 5, sonek: "–6 dk", etiket: "konuşma süresi (5 dakikanın altına inme)" },
            { deger: 60, sonek: "%", etiket: "Performans Notu 2 payı" },
            { deger: 100, etiket: "puanlık rubrik" }
          ] },
        { tip: "tablo", baslik: "Essay ile konuşma", head: ["", "Essay", "Konuşma"], rows: [
            ["Konu", "Argüman konusu", "Aynı konu; essay okunmaz, yeniden anlatılır"],
            ["Süre", "1500–1700 kelime", "5–6 dk (Byrd: 5 dk, 6–7 dk de olur; rubrik başlığı 5 dk, en çok 7–8) + sınıfın ve öğretmenin soruları"],
            ["Kişi", "I ve you yok", "Konuşmada *I* kullanılabilir"],
            ["Dil", "MLA akademik yazı", "İngilizce analiz ve ikna dili; küfür yok"],
            ["Görsel", "Yok", "PowerPoint YASAK; poster ve/veya handout"],
            ["Not payı", "Exam 2, Dönem 2: R/W (%50)", "Performans Notu 2'nin %60'ı"]
          ], not: "Sınavda böyle yaz: *The speech is based on the essay topic, but it is not a reading of the essay.*" }
      ]
    },
    {
      baslik: "İçerik ve zaman bütçesi",
      kisa: "En güçlü noktaları seç; concession ve çözüm de konuşmada olmalı.",
      bloklar: [
        { tip: "grafik", baslik: "Ek bilgi: örnek zaman bütçesi (5:30)", xlabel: "Dakika", ylabel: "", xmax: 6.5, ymax: 5,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "m5", tip: "cizgi", from: [5, 0], to: [5, 5], kesik: true, renk: 0, gizli: true },
            { id: "m6", tip: "cizgi", from: [6, 0], to: [6, 5], kesik: true, renk: 0, gizli: true },
            { id: "t5", tip: "yazi", x: 4.95, y: 4.6, metin: "5 dk", hiza: "end", gizli: true },
            { id: "t6", tip: "yazi", x: 6.05, y: 4.6, metin: "6 dk", hiza: "start", gizli: true },
            { id: "a1", tip: "alan", renk: 1, noktalar: [[0, 0], [0.5, 0], [0.5, 0], [0, 0]], gizli: true },
            { id: "a2", tip: "alan", renk: 2, noktalar: [[0.5, 0], [1, 0], [1, 0], [0.5, 0]], gizli: true },
            { id: "a3", tip: "alan", renk: 3, noktalar: [[1, 0], [2, 0], [2, 0], [1, 0]], gizli: true },
            { id: "a4", tip: "alan", renk: 1, noktalar: [[2, 0], [3, 0], [3, 0], [2, 0]], gizli: true },
            { id: "a5", tip: "alan", renk: 2, noktalar: [[3, 0], [4, 0], [4, 0], [3, 0]], gizli: true },
            { id: "a6", tip: "alan", renk: 3, noktalar: [[4, 0], [4.5, 0], [4.5, 0], [4, 0]], gizli: true },
            { id: "a7", tip: "alan", renk: 1, noktalar: [[4.5, 0], [5, 0], [5, 0], [4.5, 0]], gizli: true },
            { id: "a8", tip: "alan", renk: 2, noktalar: [[5, 0], [5.5, 0], [5.5, 0], [5, 0]], gizli: true },
            { id: "l1", tip: "yazi", x: 0.25, y: 1.4, metin: "Hook", gizli: true },
            { id: "l2", tip: "yazi", x: 0.75, y: 1.4, metin: "Tez", gizli: true },
            { id: "l3", tip: "yazi", x: 1.5, y: 1.4, metin: "N1", gizli: true },
            { id: "l4", tip: "yazi", x: 2.5, y: 1.4, metin: "N2", gizli: true },
            { id: "l5", tip: "yazi", x: 3.5, y: 1.4, metin: "N3", gizli: true },
            { id: "l6", tip: "yazi", x: 4.25, y: 1.4, metin: "Conc.", gizli: true },
            { id: "l7", tip: "yazi", x: 4.75, y: 1.4, metin: "Çözüm", gizli: true },
            { id: "l8", tip: "yazi", x: 5.25, y: 1.4, metin: "Son", gizli: true }
          ],
          durumlar: [
            { metin: "Süre sınırı 5–6 dakika. Konuşmayı iki çizgi arasına yerleştir.", goster: ["m5", "m6", "t5", "t6"] },
            { metin: "Açılış (*hook*) 0:30 ve kısa, net tez 0:30.", goster: ["a1", "a2", "l1", "l2"], set: {
                a1: { noktalar: [[0, 0], [0.5, 0], [0.5, 3], [0, 3]] }, a2: { noktalar: [[0.5, 0], [1, 0], [1, 3], [0.5, 3]] } } },
            { metin: "Üç ana nokta: her biri 1:00, kaynağını söyle.", goster: ["a3", "a4", "a5", "l3", "l4", "l5"], set: {
                a3: { noktalar: [[1, 0], [2, 0], [2, 3], [1, 3]] }, a4: { noktalar: [[2, 0], [3, 0], [3, 3], [2, 3]] }, a5: { noktalar: [[3, 0], [4, 0], [4, 3], [3, 3]] } } },
            { metin: "Concession 0:30 ve çözüm 0:30.", goster: ["a6", "a7", "l6", "l7"], set: {
                a6: { noktalar: [[4, 0], [4.5, 0], [4.5, 3], [4, 3]] }, a7: { noktalar: [[4.5, 0], [5, 0], [5, 3], [4.5, 3]] } } },
            { metin: "Sade ve güçlü sonuç 0:30. Toplam 5:30: sınırların içinde. Soru-cevap ayrıca.", goster: ["a8", "l8"], set: { a8: { noktalar: [[5, 0], [5.5, 0], [5.5, 3], [5, 3]] } } }
          ] },
        { tip: "tablo", baslik: "Bölümler ne yapar?", head: ["Bölüm", "≈ Süre (örnek)", "Amaç"], rows: [
            ["Açılış ve tez", "1:00", "Kısa, net giriş ve nokta atışı tez"],
            ["Ana noktalar", "3:00", "En güçlü noktaları seç, kaynaklarını belirt"],
            ["Concession", "0:30", "Karşı görüşe pay ver"],
            ["Çözüm", "0:30", "Somut öneri sun"],
            ["Sonuç", "0:30", "Sade ve güçlü bitir"]
          ], not: "Sırayı değiştirebilir, bazı şeyleri çıkarabilir, yeni şey ekleyebilirsin. Süreler yalnız örnektir. Sınavda böyle yaz: *According to [source], … Admittedly, … however, … One solution is …*" }
      ]
    },
    {
      baslik: "Açılış ve kapanış",
      kisa: "İlk cümle dikkat çeker, son cümle tezi ve çözümü hatırlatır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "❓", terim: "Rhetorical question", tr: "retorik soru (ek bilgi)", tanim: "Ek bilgi: cevabı dinleyicinin zihninde veren soru.", ornek: "*What if tomorrow's first class began an hour later?*" },
            { ikon: "📊", terim: "Surprising statistic", tr: "şaşırtıcı veri (ek bilgi)", tanim: "Ek bilgi: kaynaklı tek bir çarpıcı rakam; kaynağını söyle.", ornek: "*According to [source], [figure] …*" },
            { ikon: "📖", terim: "Anecdote", tr: "kısa hikâye (ek bilgi)", tanim: "Ek bilgi: 10–15 saniyelik gerçek ve kısa bir örnek.", ornek: "*Consider a student who …*" },
            { ikon: "💥", terim: "Bold claim", tr: "cesur iddia (ek bilgi)", tanim: "Ek bilgi: dinleyiciyi düşündüren kısa, net bir cümle.", ornek: "*Sleep is not a luxury.*" }
          ] },
        { tip: "liste", baslik: "Kapanış kalıpları", maddeler: [
            { ikon: "🔁", baslik: "Tezi hatırlat", metin: "*For these reasons, schools should …*" },
            { ikon: "🛠️", baslik: "Çözümü hatırlat", metin: "*The most practical step is to …*" },
            { ikon: "🔄", baslik: "Açılışa dön", metin: "Başta sorduğun soruya cevap ver; döngü kapanır." }
          ] },
        { tip: "tuzak", metin: "Zayıf giriş ve zayıf bitiş en çok hatırlanan hatalardır.", yanlis: "*Hello, today I will talk about…* ve sonda yalnızca “That's all”.", dogru: "İlk cümlede dikkat çek, son cümlede tezi ve çözümü hatırlat." }
      ]
    },
    {
      baslik: "Görsel destek: PowerPoint yok, poster ve handout var",
      kisa: "PowerPoint yasak; poster ve/veya her dinleyici için handout kullan.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🖼️", baslik: "İzinli destek", maddeler: ["Poster ve/veya handout", "Küçük palm card"] },
          sag: { ikon: "🚫", baslik: "Yasak ya da sorunlu", maddeler: ["PowerPoint", "Metni kâğıttan ya da ekrandan okumak"] },
          oyun: [
            { metin: "Poster hazırlayıp ana noktaları göstermek.", cevap: "sol", neden: "Poster izinli ve yeterli bir görsel destek." },
            { metin: "Her dinleyici için bir sayfalık handout.", cevap: "sol", neden: "Handout izinli." },
            { metin: "Slayt hazırlayıp PowerPoint ile sunmak.", cevap: "sag", neden: "Dr Byrd PowerPoint'i yasaklıyor." },
            { metin: "Küçük bir palm card'a anahtar kelimeler yazıp göz temasını korumak.", cevap: "sol", neden: "Palm card okumayı değil hatırlatmayı sağlar." },
            { metin: "Essay'i baştan sona kâğıttan okumak.", cevap: "sag", neden: "Konuşma essay'in okunması değildir." }
          ] },
        { tip: "liste", baslik: "Görsel malzeme ilkeleri", maddeler: [
            { ikon: "5️⃣", baslik: "Puanı küçük: 5", metin: "Rubrikte destekleyici materyal yalnız 5 puan." },
            { ikon: "🎯", baslik: "Süs değil destek", metin: "Görsel, argümanı sürdürmeli." },
            { ikon: "🔗", baslik: "Kaynak belirt", metin: "Veri ve görsellerin kaynağını söyle." },
            { ikon: "✍️", baslik: "Sınavda böyle yaz:", metin: "*The poster supports the argument by showing …*" }
          ] }
      ]
    },
    {
      baslik: "Sunum: coşku, göz teması, beden dili, doğru İngilizce",
      kisa: "Coşkulu, okumayan, doğal ve doğru İngilizceyle konuş.",
      bloklar: [
        { tip: "tablo", baslik: "Sunum becerileri", head: ["Beceri", "Yap", "Yapma"], rows: [
            ["Coşku", "Konuya ilgi göster, sesinde enerji olsun", "Monoton konuşma"],
            ["Göz teması", "Küçük palm card kullan, dinleyiciye bak", "Kâğıttan ya da ekrandan okuma"],
            ["Beden dili", "Doğal jest kullan", "Heykel gibi durma, sallanma"],
            ["İngilizce", "Önce yaz, kontrol et, geri bildirim al", "Hazırlıksız ve hatalı konuşma"],
            ["Ton", "Doğal ton; konuşmada *I* kullanılabilir", "Küfür"]
          ], not: "Sınavda böyle yaz: *The speaker maintains eye contact and uses a natural tone.*" },
        { tip: "adimlar", baslik: "Prova planı", adimlar: [
            { baslik: "Ana noktalara indir", metin: "Metni ezberleme; palm card'a anahtar kelimeler yaz." },
            { baslik: "Kamera karşısında prova yap", metin: "Kendini izle; okuyor musun, sallanıyor musun?" },
            { baslik: "Süreyi ayarla", metin: "5–6 dk; uzunsa noktaları kısalt, kısaysa kanıtı derinleştir." },
            { baslik: "İngilizceyi kontrol ettir", metin: "Önce yaz, düzelt, geri bildirim al." },
            { baslik: "Soru-cevabı da dene", metin: "Zor sorulara cevap hazırla." }
          ] }
      ]
    },
    {
      baslik: "Soru-cevap, sıra ve hazır olma",
      kisa: "Sorulara kanıtla cevap ver; sıra gelince hazır ol; hazırlıksızlık −10.",
      bloklar: [
        { tip: "adimlar", baslik: "Soru-cevap bölümü", adimlar: [
            { baslik: "Dinle", metin: "Soruyu bitmeden kesme; gerekirse netleştir: *Could you clarify what you mean by …?*" },
            { baslik: "Soruyu tekrarla", metin: "Herkes duyar, sen de düşünme süresi kazanırsın." },
            { baslik: "Kanıtla cevapla", metin: "Kaynağına dayan: *That is a fair question. According to …*" },
            { baslik: "Tezle bağla", metin: "Cevabı iddianın içine geri bağla." },
            { baslik: "Bilmiyorsan dürüst ol", metin: "Uydurma: *The sources I found do not cover that, but the evidence does suggest …*" }
          ] },
        { tip: "liste", baslik: "Sıra ve hazır olma kuralları", maddeler: [
            { ikon: "📋", baslik: "Sıra", metin: "Sıran sınıf sunum listesinde yazılıdır; ilk günden hazır ol." },
            { ikon: "⚠️", baslik: "−10 puan", metin: "Hazır değilsen ya da posteri unuttuysan −10 puan." },
            { ikon: "🏥", baslik: "Rapor", metin: "Belgeli bir rapor ya da resmî doktor raporu varsa ceza yok; bir sonraki sunum gününe kalırsın." }
          ] },
        { tip: "tuzak", metin: "Zor soruya kişiye saldırarak cevap vermek kanıt değildir.", yanlis: "Bu soru çok saçma.", dogru: "Soruyu ciddiye al, kanıtla cevapla; bilmiyorsan dürüstçe söyle." }
      ]
    },
    {
      baslik: "100 puanlık rubrik",
      kisa: "İçerik 30, organizasyon 10, İngilizce 30, teknik 30 puan.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 30, etiket: "içerik" },
            { deger: 10, etiket: "organizasyon" },
            { deger: 30, etiket: "İngilizce" },
            { deger: 30, etiket: "teknik" }
          ] },
        { tip: "tablo", baslik: "Persuasive speech rubriği", head: ["Grup", "Ölçüt", "Puan"], rows: [
            ["İçerik", "Tez net ve özlü", "5"],
            ["İçerik", "İkna edici içerik: ana noktalar, yeterli araştırma, konuşmacı görüşü, concession(lar) ve çözüm(ler)", "15"],
            ["İçerik", "Noktalar net örneklerle desteklenmiş", "10"],
            ["Organizasyon", "Açık giriş, gelişme, sonuç", "8"],
            ["Organizasyon", "Geçişler", "2"],
            ["İngilizce", "Dilbilgisi", "15"],
            ["İngilizce", "Telaffuz", "5"],
            ["İngilizce", "Sözcük", "5"],
            ["İngilizce", "Doğal konuşma ritmi", "5"],
            ["Teknik", "İzleyiciye bakma, okumama", "10"],
            ["Teknik", "Beden dili", "5"],
            ["Teknik", "Ses: coşkulu, monoton değil, ilgiyi sürdürür", "10"],
            ["Teknik", "Destekleyici materyal: argümanı sürdürür, süs değil", "5"]
          ], vurgu: 1, not: "Hazır değilsen ya da posteri unuttuysan toplamdan −10 düşer. Sınavda böyle yaz: *The speaker presents a clear thesis, a concession, and a solution.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Konuşma essay konun üzerinedir ama essay'in okunması değildir; 5–6 dakika + sınıfın ve öğretmenin soruları.",
            "Performans Notu 2'nin %60'ı; rubrik 100 puandır.",
            "Kısa net giriş, nokta atışı tez, en güçlü noktalar, kaynaklar, concession(lar), çözüm(ler) ve sade güçlü sonuç.",
            "PowerPoint yasak; poster ve/veya her dinleyici için handout; görsel malzeme rubrikte yalnız 5 puan.",
            "Coşku, göz teması (küçük palm card), beden dili, doğru İngilizce; konuşmada *I* serbest, essay'de değil; küfür yok.",
            "Rubrik: içerik 30 (5/15/10), organizasyon 10 (8/2), İngilizce 30 (15/5/5/5), teknik 30 (10/5/10/5).",
            "Sırana ilk günden hazır ol: hazır değilsen ya da posteri unuttuysan −10; belgeli rapor varsa ceza yok.",
            "Bilmediğin soruya veri uydurma; dürüst ol ve kanıta dön."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "A student's first rehearsal of the persuasive speech takes 4 minutes 10 seconds. The speech must last 5 to 6 minutes. What should the student do?",
      opts: ["Shorten the speech.", "Read the poster aloud to fill the time.", "Do nothing; the time is acceptable.", "Add between 50 seconds and 1 minute 50 seconds of content."], a: 3,
      why: "5:00 − 4:10 = 0:50 ve 6:00 − 4:10 = 1:50. Süreyi poster okuyarak doldurmak çekicidir ama konuşma okuma değildir; Dr Byrd ayrıca 5 dakikanın altına inilmemesini ister." },
    { q: "Which visual support is allowed in the persuasive speech?",
      opts: ["A PowerPoint presentation", "A poster and/or a handout for every listener", "A video that the speaker reads aloud", "No visual support is allowed at all"], a: 1,
      why: "PowerPoint yasaktır; poster ve/veya her dinleyici için handout kullanılabilir. “Hiçbir görsel yok” çekicidir ama yanlıştır: görsel materyal rubrikte 5 puandır." },
    { q: "A student scored as shown below but forgot the poster on presentation day and has no medical report. What is the final score out of 100?",
      fig: { type: "table", head: ["Category", "Score"], rows: [["Content (out of 30)", 25], ["Organization (out of 10)", 8], ["English (out of 30)", 24], ["Technical (out of 30)", 23]] },
      opts: ["70", "80", "75", "90"], a: 0,
      why: "25 + 8 + 24 + 23 = 80; poster unutulduğu için −10 uygulanır: 70. 80 çekici yanlıştır çünkü cezayı unutur. Belgeli rapor olsaydı ceza olmazdı." },
    { q: "Which statement about the pronoun I is correct for this project?",
      opts: ["I is banned in both the essay and the speech.", "I is required in the essay.", "I may be used in the speech but not in the written essay.", "I is only banned in the introduction of the speech."], a: 2,
      why: "Yazılı essay'de I ve you yoktur, ama konuşmada doğal ton için I kullanılabilir. İlk şık çekicidir çünkü essay kuralını konuşmaya da yayar." },
    { q: "Which items are scored together in the 15-point persuasive content criterion of the speech rubric?",
      opts: ["Eye contact, body language and voice", "Grammar, pronunciation and vocabulary", "Main points, enough research, the speaker's opinion, concession(s) and solution(s)", "Poster design and handout layout"], a: 2,
      why: "İkna edici içerik 15 puandır: ana noktalar, yeterli araştırma, konuşmacının görüşü, concession ve çözümler. Birinci şık teknik, ikinci şık İngilizce, dördüncüsü destekleyici materyaldir." }
  ]
};
