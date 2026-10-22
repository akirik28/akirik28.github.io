/* Kitora not defteri · en306 · 3.6 Catcher Üzerine Yazmak
   Kaynak: okul 10. sınıf English Unit 3 (The Catcher in the Rye) + MEB 10. sınıf programı + okulun Reading & Writing rubriği.
   Bu defter hazır essay VERMEZ: yapı, kriter ve cümle iskeletleri verir. Telif: en fazla 10 kelimelik, bölüm numaralı kısa alıntılar. */
window.DEFTER = {
  slug: "en306",
  amac: "Bu konu Catcher üzerine yazmayı öğretiyor: okulun rubriği, tez cümlesi, konu cümlesi, kanıt ve alıntı yerleştirme, edebi araçların adlandırılması ve yapay zekâ kuralı. Hazır metin vermez; yapıyı ve cümle iskeletlerini verir, yazıyı sen yazarsın.",
  bolumler: [
    {
      baslik: "Okulun yazma beklentisi: rubrik",
      kisa: "Pasaj analizinde puanın yarısı pasajdan gelen kanıta ayrılır.",
      bloklar: [
        { tip: "grafik", baslik: "50 puanlık rubrik nasıl dağılıyor?", xlabel: "Rubrik kalemi", ylabel: "Puan", xmax: 8, ymax: 28,
          xticks: [{ v: 1, label: "Düzen" }, { v: 2, label: "Konu c." }, { v: 3, label: "Bağlam" }, { v: 4, label: "Kanıt" }, { v: 5, label: "Alıntı yer." }, { v: 6, label: "Edebi araç" }, { v: 7, label: "Dil" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 25, label: "25" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b4", tip: "alan", renk: 2, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "b5", tip: "alan", renk: 1, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "b6", tip: "alan", renk: 3, noktalar: [[5.65, 0], [6.35, 0], [6.35, 0], [5.65, 0]] },
            { id: "b7", tip: "alan", renk: 3, noktalar: [[6.65, 0], [7.35, 0], [7.35, 0], [6.65, 0]] },
            { id: "tp", tip: "yazi", x: 4, y: 27, metin: "Toplam: 3+5+2+25+3+7+5 = 50", gizli: true }
          ],
          durumlar: [
            { metin: "Yapı puanları küçüktür: ==paragraf düzeni 3, konu cümlesi 5, bağlam 2== (toplam 10).", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 3], [0.65, 3]] }, b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 5], [1.65, 5]] }, b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 2], [2.65, 2]] } } },
            { metin: "En büyük kalem ==kanıt: 25 puan==; yani pasajdan alıntı ve parafraz puanın yarısıdır.", set: { b4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 25], [3.65, 25]] } } },
            { metin: "Alıntıların ==doğru yerleştirilmesi 3== (alıntı yoksa 0) ve ==edebi ve yapısal araçlar 7==.", set: { b5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 3], [4.65, 3]] }, b6: { noktalar: [[5.65, 0], [6.35, 0], [6.35, 7], [5.65, 7]] } } },
            { metin: "==Dil: 5 puan.== Dilbilgisi ve kelime seçimi.", set: { b7: { noktalar: [[6.65, 0], [7.35, 0], [7.35, 5], [6.65, 5]] } } },
            { metin: "Hepsi 50 puan eder. Anlamı şudur: iyi bir paragrafta ==kanıt ve analiz== ağır basmalıdır.", goster: ["tp"] }
          ] },
        { tip: "tablo", baslik: "Rubrik kalemleri ne demek?", head: ["Kalem", "Puan", "Senden beklenen"], rows: [
            ["Paragraf düzeni", "3", "Tek, düzenli paragraf; mantıklı sıra."],
            ["Konu cümlesi", "5", "İlk cümlede paragrafın iddiasını söyle."],
            ["Bağlam", "2", "Pasajın nerede ve kimle geçtiğini kısaca belirt."],
            ["Kanıt", "25", "Pasajdan bol alıntı ve parafraz; hepsini yorumla."],
            ["Alıntı yerleştirme", "3", "Alıntıyı cümleye doğru göm (alıntı yoksa 0)."],
            ["Edebi ve yapısal araçlar", "7", "Aracı adlandır ve etkisini yaz."],
            ["Dil", "5", "Doğru dilbilgisi, akademik kelime."]
          ], not: "Bu rubrik okulun Reading & Writing bölümünden bir örnektir (200–250 kelimelik pasaj analizi paragrafı). *Catcher* yazılarında öğretmenin verdiği rubriği esas al." }
      ]
    },
    {
      baslik: "Tez cümlesi (*thesis statement*)",
      kisa: "Tez, tartışılabilir bir iddia ve gerekçesidir; olay özeti ya da bilgi değildir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Konu", alt: "ne hakkında?" }, "+",
            { t: "Tartışılabilir iddia", alt: "roman ne söylüyor?" }, "+",
            { t: "Nasıl?", alt: "hangi araçlar?" }, "=",
            { t: "Tez", alt: "tek cümle" }
          ], aciklama: "Tezde bilgi (“Holden okuldan atılır”) değil, savunulacak bir yorum olmalı." },
        { tip: "ikili", sol: { ikon: "💪", baslik: "Güçlü tez", maddeler: ["Tartışılabilir bir iddia", "Aracı ve etkiyi söyler"] },
          sag: { ikon: "🪫", baslik: "Zayıf tez", maddeler: ["Olay özeti ya da gerçek bilgi", "Tartışılamaz; “ne” söyler, “nasıl”ı söylemez"] },
          oyun: [
            { metin: "Holden is a boy who leaves school and goes to New York.", cevap: "sag", neden: "Olay özeti: tartışılacak bir iddia yok." },
            { metin: "Salinger uses Holden's defensive humor to show that grief can hide behind cynicism.", cevap: "sol", neden: "İddia + araç + etki." },
            { metin: "The Catcher in the Rye is a famous novel by J. D. Salinger.", cevap: "sag", neden: "Gerçek bilgi; tez değil." },
            { metin: "Through the carousel scene, Salinger suggests that growing up requires accepting risk.", cevap: "sol", neden: "Tartışılabilir bir iddia ve bir sahne." }
          ] },
        { tip: "tablo", baslik: "Tez iskeletleri ve bir model", head: ["İskelet", "Model (kopyalama; yapıya bak)"], rows: [
            ["*In…, [author] uses [device] to show that [claim].*", "*In The Catcher in the Rye, Salinger uses Holden's sarcastic voice to show that grief can hide behind cynicism.*"],
            ["*Through [A], [B], and [C], [author] suggests that [claim].*", "*Through the red hat, the ducks, and the carousel, Salinger suggests that growing up means accepting change.*"],
            ["*[X] is ironic because [reason].*", "*Holden's accusations of phoniness are ironic because they reveal his own fear of adulthood.*"]
          ], not: "Bunlar yalnızca yapıyı göstermek için. Tezini kendin kur; öğretmenin onayını al." }
      ]
    },
    {
      baslik: "Konu cümlesi ve paragraf iskeleti",
      kisa: "Her paragraf tek bir iddia taşır: iddia, bağlam, kanıt, açıklama, bağlantı.",
      bloklar: [
        { tip: "ornek", baslik: "235 kelimelik pasaj analizi paragrafı: kelime planı", durum: "Hedef 200–250 kelime. Paragrafı hangi parçalara bölersin?",
          adimlar: ["1) Konu cümlesi (*topic sentence*): ≈ 30 kelime.", "2) Bağlam (*context*): ≈ 25 kelime.", "3) Kanıt 1 + analiz: ≈ 75 kelime.", "4) Kanıt 2 + analiz: ≈ 75 kelime.", "5) Kapanış (*concluding sentence*): ≈ 30 kelime."],
          sonuc: "Toplam: 30 + 25 + 75 + 75 + 30 = ==235 kelime==. Ağırlık kanıtta ve analizde." },
        { tip: "tablo", baslik: "Cümle iskeletleri (boşlukları kendin doldur)", head: ["Parça", "İskelet"], rows: [
            ["Konu cümlesi", "*In Chapter __, Salinger uses __ to show that __.*"],
            ["Bağlam", "*After __, Holden __.*"],
            ["Kanıt (alıntı)", "*Holden remarks that “[kısa alıntı]” (Salinger, ch. __).*"],
            ["Analiz", "*The word “__” suggests __ because __.*"],
            ["Bağlantı", "*Ultimately, this moment reveals that __.*"]
          ] },
        { tip: "tuzak", baslik: "Özet analiz değildir", metin: "Pasajda olanı yeniden anlatmak kanıt gibi görünür ama puan getirmez. Her kanıtın ardından bir yorum cümlesi gelmelidir.", yanlis: "Paragrafın çoğu olay özeti olabilir.", dogru: "Kanıttan sonra ==*This suggests / reveals / emphasizes…*== ile yorum ekle." },
        { tip: "liste", baslik: "Çalışma soruları (cevaplarını sen yaz)", maddeler: [
            { ikon: "🎠", baslik: "Atlıkarınca", metin: "How does Salinger use the carousel scene to show a change in Holden?" },
            { ikon: "🗣️", baslik: "Ses", metin: "How does Holden's voice influence the way the reader judges other characters?" },
            { ikon: "🧢", baslik: "Sembol", metin: "What does the red hunting hat suggest about Holden's relationships?" }
          ] }
      ]
    },
    {
      baslik: "Alıntı yerleştirme (*quote integration*)",
      kisa: "Alıntı kısa olur, cümleye gömülür ve hemen yorumlanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Embedded quote", tr: "gömülü alıntı", tanim: "Alıntının kendi cümlenin içine dilbilgisi olarak oturması. Kısa ve akıcı olur.", ornek: "Holden “…” diyerek…" },
            { ikon: "📣", terim: "Signal phrase", tr: "işaret ifadesi", tanim: "Alıntıyı tanıtan kısa ifade: *Holden says…*, *The narrator admits…*", ornek: "*Holden remarks that…*" },
            { ikon: "🔄", terim: "Paraphrase", tr: "parafraz", tanim: "Metnin fikrini kendi cümlelerinle yeniden söylemek; yine de bölüm numarası eklenir.", ornek: "Holden çocukları düşmekten korumak ister (Salinger, ch. 22)." }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: üç yol", head: ["Yol", "Örnek cümle"], rows: [
            ["Gömülü", "*Holden ends by warning that if you tell people things, “you start missing everybody” (Salinger, ch. 26).*"],
            ["İşaret ifadesiyle", "*Imagining himself as “the catcher in the rye and all,” Holden reveals his wish to protect children (Salinger, ch. 22).*"],
            ["Parafraz", "*Holden dreams of saving children from falling off a cliff (Salinger, ch. 22).*"]
          ], not: "Alıntı en fazla birkaç kelime olsun (bu defterde 10 kelimeyi geçmez) ve bölüm numarasıyla ver. Okulun MLA kuralı için sayfa numarasını kendi baskından ekle." },
        { tip: "ornek", baslik: "Zayıf cümleyi güçlendir", durum: "Zayıf cümle: *Holden feels bad at the end.* Üç adımda nasıl geliştirirsin?",
          adimlar: ["1) Duyguyu daha kesin adlandır: *attached*, *nostalgic*.", "2) Kısa kanıt ekle (≤ 10 kelime) ve bölüm numarası yaz.", "3) Etkiyi söyle: *This suggests… / This reveals…*"],
          sonuc: "Model: ==*Although Holden criticizes nearly everyone, his closing remark that “you start missing everybody” (Salinger, ch. 26) reveals a deep attachment.*==" }
      ]
    },
    {
      baslik: "Edebi araçların kelime bankası",
      kisa: "Aracı adlandır, etkisini söyle: araç artı etki analiz eder.",
      bloklar: [
        { tip: "tablo", baslik: "Araçlar ve Catcher'dan fikir", head: ["Araç", "Türkçesi", "Catcher'da nerede?"], rows: [
            ["*Diction*", "kelime seçimi", "Holden'ın argosu ve dolgu ifadeleri"],
            ["*Tone*", "ton", "Alaycı, savunmacı, yer yer şefkatli"],
            ["*Imagery*", "imgelem", "Gölet, atlıkarıncadaki yağmur"],
            ["*Symbolism*", "sembolizm", "Şapka, ördekler, müze, eldiven"],
            ["*Irony*", "ironi", "Sahteliği eleştiren Holden'ın yalanları"],
            ["*Motif*", "tekrar eden öğe", "Ördek sorusu, “phony” etiketi"],
            ["*Characterization*", "karakterleştirme", "Phoebe ve Stradlater karşıtlığı"],
            ["*Point of view*", "bakış açısı", "Birinci tekil anlatıcı"]
          ] },
        { tip: "liste", baslik: "Etki fiilleri: araçtan sonra bunlardan birini kullan", maddeler: [
            { ikon: "💡", baslik: "reveals / suggests", metin: "*This image reveals Holden's fear of change.*" },
            { ikon: "🔦", baslik: "highlights / emphasizes", metin: "*The contrast highlights Holden's isolation.*" },
            { ikon: "⚖️", baslik: "contrasts / reinforces", metin: "*Phoebe's honesty contrasts with Holden's defensiveness.*" }
          ] }
      ]
    },
    {
      baslik: "Akademik ton",
      kisa: "Akademik yazıda ben/sen ve kısaltma yok; edebi şimdiki zaman kullanılır.",
      bloklar: [
        { tip: "liste", baslik: "Kurallar", maddeler: [
            { ikon: "🚫", baslik: "*I* ve *you* yok", metin: "Okulun essay kuralı: kişisel zamir kullanma. *I think…* yerine *Holden appears…*" },
            { ikon: "⏱️", baslik: "Edebi şimdiki zaman", metin: "Olayları *present tense* ile yaz: *Holden leaves…*" },
            { ikon: "📕", baslik: "Başlık biçimi", metin: "Roman adı italik (el yazısında altı çizili): *The Catcher in the Rye*." },
            { ikon: "✂️", baslik: "Kısaltma yok", metin: "*can't* yerine *cannot*; *it's* yerine *it is*." }
          ] },
        { tip: "tablo", baslik: "Gündelik dilden akademik dile", head: ["Gündelik", "Akademik"], rows: [
            ["*I think Holden is lonely.*", "*Holden appears lonely.*"],
            ["*You can see that he is sad.*", "*The reader can see that he is sad.*"],
            ["*He's kind of sad about Allie.*", "*He is deeply affected by Allie's death.*"]
          ] }
      ]
    },
    {
      baslik: "Dürüstlük ve yapay zekâ kuralı",
      kisa: "Kaynak bulmada ve yazıda üretken yapay zekâ yasak; sınırlı kullanım dışında yazı senin.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Sınırlı izin", maddeler: ["Düzen önerisi", "Kısaltma ve yazım denetimi (öğretmenin çizdiği sınır içinde)"] },
          sag: { ikon: "🚫", baslik: "Yasak", maddeler: ["Kaynak bulma ve yazma aşamasında üretken yapay zekâ", "Tez ya da paragrafı başkasına ya da yapay zekâya yazdırmak"] },
          oyun: [
            { metin: "Tez cümlesini yapay zekâya yazdırmak.", cevap: "sag", neden: "Yazma aşamasında üretken yapay zekâ yasak." },
            { metin: "Kendi yazdığın paragrafta düzen önerisi almak.", cevap: "sol", neden: "Sınırlı izin: yalnızca düzen önerisi." },
            { metin: "Kaynak bulmak için yapay zekâya sormak.", cevap: "sag", neden: "Kaynak bulmada kullanım yasak." },
            { metin: "Yazını bitirdikten sonra yazım denetimi yapmak.", cevap: "sol", neden: "Sınırlı izin: yazım denetimi." }
          ] },
        { tip: "tuzak", baslik: "Bu defter bir çalışma rehberidir", metin: "Defterdeki model cümleler yapıyı göstermek içindir; hazır paragraf değildir. Kopyalayıp teslim etmek dürüstlük kuralını bozar. Sınır konusunda emin değilsen öğretmenine sor.", yanlis: "Defterdeki örnek tezi aynen kullanabilirim.", dogru: "Örnekten yapıyı al, tezi kendi okumanla yaz ve öğretmenin onayını al." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Yazmadan önce bu kontrol listesine bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Rubrikte en ağır kalem kanıt: 25 / 50; kanıtı yorumla.",
            "Tez = konu + tartışılabilir iddia + araç; olay özeti değildir.",
            "Paragraf: konu cümlesi, bağlam, kanıt + analiz (iki kez), kapanış; ≈ 200–250 kelime.",
            "Alıntı ≤ 10 kelime, cümleye gömülü, bölüm numaralı; ardından yorum.",
            "Aracı adlandır, etkisini söyle: *reveals*, *suggests*, *highlights*.",
            "Akademik ton: *I* ve *you* yok, kısaltma yok, *present tense*.",
            "Hassas konularda (yas, ruh sağlığı) tanı koyma; metindeki davranışa dayan.",
            "Yapay zekâ kuralı: kaynak bulma ve yazma aşamasında yasak; yazı kendi emeğin."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir öğrenci pasaj analizi paragrafında hiç alıntı ya da parafraz kullanmadan yalnızca kendi yorumunu yazıyor. Rubriğe göre en çok hangi kalemde puan kaybeder?",
      opts: ["Paragraf düzeni (3)", "Dil (5)", "Pasajdan kanıt (25)", "Bağlam (2)"],
      a: 2, why: "Kanıt 50 puanın 25'ini oluşturur ve alıntı ya da parafrazla verilir. A, B ve D kalemleri çok daha küçüktür; yorum iyi olsa bile kanıt yoksa en büyük kayıp oradadır." },
    { q: "Aşağıdakilerden hangisi en güçlü tez cümlesidir?",
      opts: ["Holden leaves Pencey and goes to New York.", "The Catcher in the Rye is a famous novel.", "Many students read this book in school.", "Through Holden's sarcastic voice, Salinger shows that grief can hide behind cynicism."],
      a: 3, why: "D şıkkı tartışılabilir bir iddia, bir araç ve bir etki içerir. A olay özeti, B ve C ise gerçek bilgidir; tez olmak için tartışılabilir olmaları gerekir." },
    { q: "Bir paragrafın konu cümlesini seç: ördek sorusu üzerine yazıyorsun.",
      opts: ["In Holden's repeated question about the ducks, Salinger suggests his uncertainty about where he belongs.", "Holden talks to a taxi driver.", "Ducks are birds.", "The ending is sad."],
      a: 0, why: "A şıkkı bir iddia, bir araç ve bir etki içerir. B olay özeti, C gerçek bilgi, D ise belirsiz bir yargıdır; konu cümlesi paragrafın iddiasını taşımalıdır." },
    { q: "Hangisi alıntıyı en iyi yerleştiren cümledir? (köşeli parantez, kısa bir alıntıyı temsil eder)",
      opts: ["“[long quotation]” Holden is sad.", "Holden remarks that “[short quotation]” (Salinger, ch. 22), which suggests his wish to protect children.", "Holden says something about it.", "In the book, “[short quotation]” is written."],
      a: 1, why: "B şıkkı kısa alıntıyı cümleye gömer, bölüm numarası verir ve yorumlar. A alıntıyı uzun bırakıp yorumsuz geçiyor; C ve D alıntıyı ya da bağlamı eksik bırakıyor." },
    { q: "Okul kuralına göre aşağıdakilerden hangisi uygundur?",
      opts: ["Tez cümlesini yapay zekâya yazdırmak", "Kaynakları yapay zekâya buldurmak", "Paragrafı kendin yazıp öğretmenin izin verdiği sınırda yazım denetimi yapmak", "Defterdeki model tezi aynen teslim etmek"],
      a: 2, why: "Yazı kendi emeğin olmalı; yalnızca öğretmenin çizdiği sınır içinde yazım denetimi gibi sınırlı kullanım olabilir. A ve B yasak kullanımlar, D ise kopyalamadır." }
  ]
};
