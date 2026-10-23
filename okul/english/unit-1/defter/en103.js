/* Kitora not defteri · en103 · 1.3 Aunt Zeze's Tears (Carmen Dolores)
   Kaynak: defter-araclari/kaynak/en10-yaz-okumasi-oykuler.txt (Isaac Goldberg çevirisi, Brazilian Tales, 1921; kamuya açık). Öğretmen belgesinde bu öykü için ayrı çalışma kâğıdı yok; yorumlar ek bilgi niteliğinde, Kasım sınav biçimi (özet A1) ve pasaj analizi yöntemiyle (özet D) uyumlu. */
window.DEFTER = {
  slug: "en103",
  amac: "Bu defter *Aunt Zeze's Tears* öyküsünü Kasım sınavındaki pasaj analizi gözüyle çözüyor: olay, karakterler, bağlam, temalar, araçlar. Yorumlar ek bilgidir (öğretmen belgesinde bu öykü için çalışma kâğıdı yok); sondaki iskelet kendi paragrafın içindir.",
  bolumler: [
    {
      baslik: "Olay: bir doğum günü yemeği",
      kisa: "Görünmez bir hala, umutla gittiği yemekte kendi hakkındaki gerçeği duyar.",
      bloklar: [
        { tip: "adimlar", baslik: "Olay örgüsü", adimlar: [
            { baslik: "1 · Sıradan günler", metin: "Zézé (Maria-José) on sekiz yıldır küçük kız kardeşi Engracigna'nın evinde yaşar, çocuklara bakar, genç kızlar gibi giyinir." },
            { baslik: "2 · Fedakârlık sayılır", metin: "Aile tiyatroya giderken onu “çocuklarla kal” diyerek evde bırakır; kimse onu gerçek bir kişi gibi görmez." },
            { baslik: "3 · Gizli aşk", metin: "Eniştesi Fabio'nun arkadaşı şair Monjardin'i sevmektedir; şair şiirlerini ona okur." },
            { baslik: "4 · Umut", metin: "Şair, doğum günü yemeğinde ona bir şiir okuyacağını söyler; aile ona düğünün ne zaman olacağını sorarak takılır." },
            { baslik: "5 · Şiir", metin: "Şiir onu melek gibi, fedakâr bir kadın olarak över ve ileride büyükanne olacağını söyler; Zézé çöker." },
            { baslik: "6 · Son söz", metin: "Şair, gözyaşlarının şiirine verilmiş en güzel övgü olduğunu söyler." }
          ] },
        { tip: "grafik", baslik: "Gerilim nasıl çıkar ve düşer?", xlabel: "Öykünün akışı", ylabel: "Zézé'nin umudu ve gerilim", xmax: 10, ymax: 10,
          ogeler: [
            { id: "a1", tip: "egri", renk: 0, noktalar: [[0, 1.5], [1, 1.8], [2, 2.2]], gizli: true },
            { id: "a2", tip: "egri", renk: 1, noktalar: [[2, 2.2], [3.5, 3.8], [5, 5.6], [6.5, 7.4], [7.5, 9]], gizli: true },
            { id: "pt", tip: "nokta", x: 7.5, y: 9, etiket: "şiir", kilavuz: true, gizli: true },
            { id: "a3", tip: "egri", renk: 2, noktalar: [[7.5, 9], [8.2, 4.5], [9, 2.8], [10, 2.2]], gizli: true },
            { id: "l1", tip: "yazi", x: 1.2, y: 3.2, metin: "monoton günler", gizli: true },
            { id: "l2", tip: "yazi", x: 4.1, y: 6.3, metin: "umut", gizli: true },
            { id: "l3", tip: "yazi", x: 8.7, y: 6.2, metin: "gözyaşı", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: Zézé'nin ==görünmez, monoton günleri==. Gerilim düşük.", goster: ["a1", "l1"] },
            { metin: "Şairin vaadi ve ailenin takılmaları umudu yükseltir.", goster: ["a2", "l2"] },
            { metin: "==Climax:== şiir okunur ve Zézé ne kastedildiğini anlar.", goster: ["pt"] },
            { metin: "Gözyaşları ve şairin son sözü. Zézé'nin durumu değişmez; öykü açık bir acıyla biter.", goster: ["a3", "l3"] }
          ] }
      ]
    },
    {
      baslik: "Karakterler",
      kisa: "Her karakter, Zézé'yi görmeyen ya da kullanan farklı bir yüzü temsil eder.",
      bloklar: [
        { tip: "tablo", head: ["Karakter", "Kim?", "Nasıl tanıyoruz?", "Temsil ettiği"],
          rows: [
            ["Zézé (Maria-José)", "Evlenmemiş hala", "Görünüş, sessiz fedakârlık, gizli umut", "Görünmez ve kullanılan kadın"],
            ["Engracigna", "Küçük kız kardeş", "Tatlı ama bencil sözler: “You'll stay at home with the children”", "Nazik görünüşlü bencillik"],
            ["Fabio", "Eniştesi, ev reisi", "Karısıyla kadeh kaldırır: “the eighteen happy years we've lived together”", "Düzeni yaşayan ve sorgulamayan aile"],
            ["Yeğenler", "Genç kızlar", "Gençlik ve alay", "Zézé'nin kaybettiği hayat"],
            ["Monjardin", "Şair", "Şiir okuması, gösterişli hareketler, son sözü", "Kibirli ve duyarsız beğeni"]
          ], vurgu: 0 },
        { tip: "kavramlar", kartlar: [
            { ikon: "💔", terim: "Unrequited passion", tr: "karşılıksız aşk", tanim: "Karşı tarafın paylaşmadığı sevgi. Zézé'nin şaire duyduğu duygu.", ornek: "Zézé şairi sever, şair ona yalnızca dinleyici gözüyle bakar." },
            { ikon: "🙇", terim: "Self-abnegation", tr: "kendinden vazgeçme", tanim: "Kişinin kendi isteklerini başkaları için bırakması. Şiirin övdüğü “erdem” budur.", ornek: "Zézé tiyatroya gitmez, çocuklarla kalır." },
            { ikon: "🏅", terim: "Homage", tr: "saygı, övgü", tanim: "Birine ya da bir şeye gösterilen saygı. Şair bu sözcüğü kibirle kullanır.", ornek: "“homage … to my poor verses”: şair kendini över." },
            { ikon: "🌫️", terim: "Disillusionment", tr: "hayal kırıklığı", tanim: "Bir hayalin gerçeğe çarpıp dağılması.", ornek: "Zézé şiirin anlamını kavrayınca solgunlaşır." }
          ] }
      ]
    },
    {
      baslik: "Kültürel bağlam (ek bilgi)",
      kisa: "Evde yaşayan evlenmemiş kadın, o dönemde değeri yaptığı hizmetle ölçülen biriydi.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🏠", baslik: "Aile düzeni", metin: "Öykü, yazarın yaşadığı dönemin (19. yüzyıl sonu, 20. yüzyıl başı) Brezilya'sında rahat bir şehir evini anlatır; metne göre genç kadınların hayatının tek amacı vardır: evlilik." },
            { ikon: "👩", baslik: "Evlenmemiş kadın", metin: "Metindeki *old maid* ifadesi, evlenmemiş kadını damgalayan toplumsal bakışı yansıtır; Zézé, kardeşine bağımlı yaşar." },
            { ikon: "😇", baslik: "Fedakâr kadın ideali", metin: "Şairin övgüsü kadını melek ve anne-koruyucu bir figür olarak kutsar; bu, kadını hizmette tutan bir ideal." },
            { ikon: "🎭", baslik: "Salon kültürü", metin: "Şair, aile toplantısında şiir okuyan saygın bir figürdür; metindeki *alexandrines* göndermesi dönemin Fransız etkili şiir zevkini gösterir." }
          ] },
        { tip: "not", metin: "Ek bilgi: yazar Carmen Dolores (Emilia Moncorva Bandeira de Mello, 1852–1910) Brezilyalı bir yazardır. Öykünün İngilizcesi Isaac Goldberg'in 1921 tarihli *Brazilian Tales* çevirisidir; bu yüzden dil eski ve resmîdir." }
      ]
    },
    {
      baslik: "Temalar",
      kisa: "Tema: görünmezlik, kullanılan fedakârlık, boşa çıkan umut ve övgünün acımasızlığı.",
      bloklar: [
        { tip: "harita", merkez: "*Aunt Zeze's Tears*", dallar: [
            { baslik: "Görünmezlik", alt: "*People can be ignored inside their own families.*" },
            { baslik: "Fedakârlık", alt: "*Praising sacrifice can keep women in service.*" },
            { baslik: "Boş umut", alt: "*Hope can make disappointment crueler.*" },
            { baslik: "Bencillik", alt: "*Kind words can hide selfishness.*" }
          ] },
        { tip: "tablo", baslik: "Tema + kanıt", head: ["Tema", "Kısa kanıt", "Amaç cümlesi"],
          rows: [
            ["Görünmezlik", "“hardly considered her in the light of a living person”", "*to expose how a family stops seeing one of its members*"],
            ["Fedakârlık", "Şiirdeki melek ve anne-koruyucu övgüsü (parafraz)", "*to criticize praise that traps women in service*"],
            ["Boş umut", "Gül, beyaz elbise, yemek öncesi heyecan", "*to evoke sympathy for a hopeful woman*"]
          ] }
      ]
    },
    {
      baslik: "Araçlar: ne, nerede, etkisi?",
      kisa: "İroni ve zıtlık, öykünün acısını okura göstermenin ana yoludur.",
      bloklar: [
        { tip: "tablo", head: ["Araç", "Nerede?", "Etkisi"],
          rows: [
            ["*Characterization*", "Girişte yüz ve giysi tasviri; ailenin sözleri", "Görünüşü ile iç dünyası arasındaki acı fark"],
            ["*Situational irony*", "Aşk şiiri beklerken fedakârlık övgüsü", "Hayal kırıklığı ve eleştiri"],
            ["*Juxtaposition* (ek bilgi)", "Zézé ve yeğenlerinin parlak renkleri", "Kaybedilen gençlik"],
            ["*Diction*", "“faded old maid”, “obscure accessory”", "Zézé'yi küçülten, nesneleştiren etiketler"],
            ["*Imagery / symbolism*", "Beyaz elbise, gül, “marble cheeks”, yıldızlar", "Umut, yalnızlık ve kırılganlık"],
            ["*Rhetorical question*", "“Who can depict the secret chagrin…?”", "Okuru empatiye çağırır"],
            ["*Structure*", "Uzun umut inşası, ani çöküş, şairin son sözü", "Sessiz acıyı ve şairin duyarsızlığını vurgular"]
          ], vurgu: 1 },
        { tip: "tuzak", metin: "Son cümle Zézé'ye değil, Monjardin'e aittir. Bu bir tercihtir: acı çeken susar, duyarsız olan konuşur.", yanlis: "Öykü Zézé'nin kendi açıklamasıyla biter.", dogru: "Son söz Monjardin'indir; bu yapı ironiyi ve Zézé'nin sessizliğini güçlendirir." }
      ]
    },
    {
      baslik: "Sınavda çıkabilecek pasajlar",
      kisa: "Pasajı tanı: hangi bölüm, hangi araç ve hangi anlam fikri?",
      bloklar: [
        { tip: "tablo", head: ["Pasaj", "Nerede?", "Odak", "Olası anlam"],
          rows: [
            ["Giriş", "İlk paragraflar (görünüş tasviri)", "*Characterization, diction, juxtaposition*", "Toplum yaşlanan kadını acımasızca etiketler."],
            ["“None of them saw Maria-José…”", "Evdeki konumu anlatan paragraf", "Direkt anlatım, *diction*", "Aile onu görmez, kullanır."],
            ["Tiyatro sahnesi", "Aile gitmeden önce", "Diyalog, *indirect characterization*", "Tatlı bir sesle söylenen bencillik."],
            ["Pencere ve yıldızlar", "Çocuklar uyuduktan sonra", "*Imagery*, yalnızlık", "Yalnızlık ve sessiz isyan."],
            ["Şiir ve çöküş", "Doğum günü yemeği", "*Irony*, *diction*", "Övgü, hapsediş olabilir."],
            ["Son paragraf", "Monjardin'in sözü", "*Verbal ve situational irony*, yapı", "Kibirli duyarsızlık."]
          ] },
        { tip: "tablo", baslik: "Hatırlanacak kısa alıntılar (Goldberg çevirisi)", head: ["Alıntı", "Ne gösterir?"],
          rows: [
            ["“hardly considered her in the light of a living person”", "Görünmezlik"],
            ["“an obscure accessory in the household's affairs”", "Eşya gibi görülmek"],
            ["“Do you want to dress like a widow?”", "Ailenin duyarsız baskısı"],
            ["“less lonely, surely, than she upon earth”", "Yalnızlık imgesi"],
            ["“stricken by sudden disillusionment”", "Umudun çöküşü"],
            ["“the most beautiful homage that could be rendered to my poor verses”", "Şairin ironik, kibirli sözü"]
          ] },
        { tip: "not", metin: "Kasım sınavındaki pasaj, Cultural Perspectives ünitesindeki bir kısa öykü ya da denemeden gelir; bu öykünün çıkacağı garanti değildir. Ek bilgi: sınıfta ayrıca Amy Tan'ın *Two Kinds* öyküsü, Orwell'in *A Hanging* denemesi ve Achebe'nin *Things Fall Apart* kitabının ilk bölümleri de işlendi; yöntemi (QPC) hepsinde aynı uygula." }
      ]
    },
    {
      baslik: "Örnek analiz paragrafının iskeleti",
      kisa: "İskeleti kullan, kanıtı pasajdan kendin seç; paragrafı kendin yaz.",
      bloklar: [
        { tip: "adimlar", baslik: "Cümle başlangıçları (boşluklar sende; Woods'un sırasıyla)", adimlar: [
            { baslik: "Eser + bağlam", metin: "*This passage from “Aunt Zeze's Tears” by Carmen Dolores comes at the point where Zézé, an unmarried woman who lives with her sister's family, [durum].*" },
            { baslik: "Konu cümlesi (konu + görüş)", metin: "*In this passage, Dolores shows that [anlam] in order to [amaç].* Araçları burada sıralama." },
            { baslik: "Analiz 1 (QPC)", metin: "*Dolores shows that the family [parafraz: Zézé'yi görmezden gelmeleri], for they [kısa alıntı]. This suggests that…*" },
            { baslik: "Analiz 2 (QPC)", metin: "*The scene is ironic because Zézé expects [__], but Monjardin [__]. The phrase “[alıntı]” reveals…*" },
            { baslik: "Analiz 3 (QPC)", metin: "*The final line, “[alıntı],” ends the story on a [ton] note because…*" },
            { baslik: "Kapanış (isteğe bağlı)", metin: "*Ultimately, the story warns that… / Through Zézé's tears, Dolores criticizes…*" }
          ] },
        { tip: "tuzak", baslik: "Ezber paragraf tuzağı", metin: "Sınavdaki pasaj bu öyküden olsa bile farklı bir bölüm olabilir. Ezberlenmiş bir paragraf pasaja uymazsa kanıt puanı gider.", yanlis: "Bir paragraf ezberler, hepsini oraya yapıştırırım.", dogru: "Cümle kalıbını bil, kanıtı ve açıklamayı o gün pasajdan seç." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Zézé on sekiz yıldır kardeşinin evinde yaşayan, görünmez ve kullanılan bir hala; aile onu gerçek bir kişi gibi görmüyor.",
            "Şair Monjardin, doğum günü şiirinde onu melek ve koruyucu bir figür olarak över; Zézé umut ederken çöker.",
            "Son söz şairindir: gözyaşlarını kendi şiirine övgü sayar (*irony*).",
            "Bağlam: yazarın dönemindeki Brezilya, evlenmemiş kadına bakış ve fedakâr kadın ideali.",
            "Temalar: görünmezlik, kullanılan fedakârlık, boş umut, bencillik.",
            "Araçlar: *characterization, situational/dramatic/verbal irony, juxtaposition, imagery, structure*.",
            "Analiz iskeleti: konu cümlesi + bağlam + üç kanıt + kapanış; paragrafı kendin yaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "At the end of the story, Monjardin says that Zézé's tears are \"the most beautiful homage that could be rendered to my poor verses.\" What is the main effect of this remark?",
      opts: ["It shows that the poet understands her pain and respects her", "It ironically reveals the poet's vanity and his failure to understand her pain", "It shows that Zézé is actually happy", "It shows that the story ends comically"],
      a: 1,
      why: "Şair, acıyı kendi şiirine övgü sanır; okur gerçeği bilir. En çekici yanlış şık A: söz saygılı görünür ama niyeti bencildir." },
    { q: "Which piece of evidence best supports the idea that Zézé is invisible in her own family?",
      opts: ["Zézé wears a white dress.", "Monjardin has a black moustache.", "The narrator says the family hardly considered her in the light of a living person.", "Champagne is served at the dinner."],
      a: 2,
      why: "C doğrudan görünmezliği kanıtlar: ailenin onu gerçek bir kişi gibi görmediğini söyler. Elbise ya da şampanya doğru ayrıntılardır ama temayı kanıtlamaz." },
    { q: "In the poem scene, which of the following is an example of situational irony?",
      opts: ["Zézé hesitates to choose a red fabric", "The children quarrel", "The champagne glasses sparkle", "Zézé hopes for a love poem, but the poem praises her self-sacrifice"],
      a: 3,
      why: "Zézé aşk şiiri umar, tersi gerçekleşir. Diğer şıklar ironi değil, sahne ayrıntısıdır." },
    { q: "Which topic sentence would earn the most points in the exam?",
      opts: ["In \"Aunt Zeze's Tears,\" Dolores shows that praise for women's sacrifice can hide neglect, in order to make readers question social expectations.", "Aunt Zeze's Tears is a sad story about an old woman.", "Zézé cries at a dinner after a poem.", "I think the story is about love."],
      a: 0,
      why: "A yazarı, anlamı (görüş) ve amacı içerir; araçları sıralamaz. B özettir, C olay anlatır, D kişisel yorumdur." },
    { q: "In the opening, Zézé's bright dresses are placed beside her pale, aged face. Which device is this and what is its effect?",
      opts: ["Allusion; it refers to a myth", "Juxtaposition; it stresses the painful gap between appearance and reality", "Foreshadowing; it hints that Zézé will die", "Pacing; it speeds up the events"],
      a: 1,
      why: "Zıt iki öğe yan yana: genç giysiler ve yaşlanmış yüz. Etki, acıma ve görünmezliktir. C yanlış: ölüm gibi bir ipucu yok." }
  ]
};
