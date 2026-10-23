/* Kitpath not defteri · en402 · 4.2 MLA Kaynak Gösterme
   Okul dersi (10. sınıf English · Unit 4). Kaynak: UAA English Dept MLA Handbook (MLA 9. baskı) ve Dr Byrd'ün röportaj/anket ve yapay zekâ biçimleri.
   Örnek kaynaklar ve kişiler uydurmadır; kaynakçana yazma. "Ek bilgi" etiketli kısımlar öğretmen özetinde yoktur. */
window.DEFTER = {
  slug: "en402",
  amac: "MLA 9'a göre kaynak göstermeyi öğreneceksin: metin içi atıf (*in-text citation*), *Works Cited* sayfası, alıntıyı cümleye yerleştirme, röportaj, anket ve yapay zekâ girişleri, ayrıca kılavuzdaki ilk sayfa başlığı ile Argument Paper kapak sayfasının farkı.",
  bolumler: [
    {
      baslik: "Metin içi atıf ve Works Cited birlikte çalışır",
      kisa: "Her metin içi atıf kaynakçada, her kaynakça girişi metinde karşılık bulmalı.",
      bloklar: [
        { tip: "sekil", baslik: "Metinde ve kaynakçada aynı kaynak", fig: { type: "table", head: ["Essay metninde", "Works Cited sayfasında"], rows: [["(Demir 45)", "Demir, Elif. Sleep and the Teenage Brain. Meridian Press, 2022."], ["(Kaya and Aydın 12)", "Kaya, Mert, and Selin Aydın. “Sleep and Grades.” Journal of Youth Studies, vol. 12, no. 3, 2024, pp. 45–60."], ["(“School Start Times”)", "“School Start Times.” Education Facts, 2024, www.example.com/start-times."]], caption: "Uydurma örnekler (italik başlıklar burada düz yazıldı). Parantezdeki ilk öğe, kaynakçadaki girişin ilk öğesidir: yazar soyadı ya da yazar yoksa başlık." } },
        { tip: "not", metin: "Her *Works Cited* kaynağının metinde en az bir karşılığı, her metin içi atfın da kaynakçada karşılığı olmalı. *Works Cited* yalnız alıntı yaptığın, parafraz ettiğin ya da anlamlı biçimde andığın eserleri içerir; bibliography'den farkı budur. Yaygın bilgi (*common knowledge*) ve geçici anmalar atıf istemez. Sınavda böyle yaz: *Every in-text citation must match an entry on the Works Cited page.*" }
      ]
    },
    {
      baslik: "Metin içi atıf biçimi",
      kisa: "Parantezde soyadı ve sayfa; virgül ve p. yok; atıf yalnız bir kez.",
      bloklar: [
        { tip: "tablo", baslik: "Duruma göre metin içi atıf (Works Cited girişinin ilk öğesiyle başla)", head: ["Durum", "Biçim"], rows: [
            ["Bir yazar", "(Demir 45)"],
            ["İki yazar", "(Kaya and Aydın 12)"],
            ["Üç ya da daha çok yazar", "(Demir et al. 12)"],
            ["Yazar yok, web sayfası", "(“School Start Times”): başlığın kısa hâli, tırnakta; kitapsa *italik*"],
            ["Sayfa numarası yok", "(Demir): yalnızca yazar"],
            ["Yazar cümlede geçiyor", "Demir argues that sleep matters (45)."]
          ], not: "Atıf kısa ve sade tutulur; sayfa, satır ya da zaman bilgisi varsa parantezde verilir. Nokta parantezden sonra gelir. Ek bilgi (MLA 9, öğretmen özetinde yok): dolaylı alıntı (qtd. in Demir 45) ve aynı yazarın iki eseri (Demir, “Sleep Debt” 12) biçimleri." },
        { tip: "tuzak", metin: "Atıf ya cümleye gömülür ya parantezle verilir; ikisi birden olmaz (*double citation*).", yanlis: "Demir argues that sleep matters (Demir 45).", dogru: "Ya gömülü: *Demir argues that sleep matters (45).* ya da parantezli: *Sleep matters (Demir 45).* Virgül ve “p.” da yok." }
      ]
    },
    {
      baslik: "Alıntı, parafraz, özet",
      kisa: "Üçü de başkasının fikridir; üçünde de atıf gerekir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "❝", terim: "Quotation", tr: "doğrudan alıntı", tanim: "Kaynağın sözünü aynen, tırnak içinde verirsin. Yalnız analiz ettiğin destek olarak kullan; kendi yazının yerine koyma.", ornek: "Demir calls teenage sleep loss “a hidden crisis” (45)." },
            { ikon: "🔁", terim: "Paraphrase", tr: "parafraz", tanim: "Fikri kendi cümle yapınla yazarsın; eş anlamlı kelime değiştirmek yetmez. Atıf gerekir.", ornek: "Demir notes that teenagers often sleep too little (45)." },
            { ikon: "✂️", terim: "Summary", tr: "özet", tanim: "Uzun bir bölümü kısaca anlatırsın. Kaynak yine belirtilir.", ornek: "Kaya and Aydın review three sleep studies (12–15)." }
          ] },
        { tip: "liste", baslik: "Alıntıyı tanıtan kalıplar", maddeler: [
            { ikon: "💬", baslik: "*According to Demir, …*", metin: "Yazarı cümlenin başında belirtir." },
            { ikon: "💬", baslik: "*Kaya and Aydın argue / suggest / demonstrate that …*", metin: "Güçlü, tarafsız ya da kanıtlayıcı fiiller seç." },
            { ikon: "💬", baslik: "*As the 2024 study shows, …*", metin: "Kaynağı delil olarak sunar." }
          ] },
        { tip: "tuzak", metin: "Atıfsız parafraz, çok fazla alıntı ve eksik atıf intihal sayılır.", yanlis: "Cümleyi kendi sözlerimle yazdım, atıf gerekmez.", dogru: "Fikir senin değilse parafrazda da ==atıf gerekir==. Works Cited ya da metin içi atıf hiç yoksa bu “plagiarism danger” sayılır." }
      ]
    },
    {
      baslik: "Alıntıyı yerleştirme ve blok alıntı",
      kisa: "4 satırdan kısa alıntı cümleye gömülür ve tırnaklanır; uzunsa blok yapılır.",
      bloklar: [
        { tip: "adimlar", baslik: "Ek bilgi: alıntı sandviçi", adimlar: [
            { baslik: "Tanıt", metin: "Yazarı ve bağlamı söyle: *Researcher Demir explains that …*" },
            { baslik: "Alıntıla", metin: "Kısa ve gerekli parçayı tırnak içinde ver ve (Demir 45) yaz." },
            { baslik: "Yorumla", metin: "Alıntının tezi nasıl desteklediğini kendi cümlenle açıkla: *This evidence shows that …*" }
          ] },
        { tip: "ikili", sol: { ikon: "💬", baslik: "Kısa alıntı", maddeler: ["4 satırdan kısa", "Cümlenin içinde, tırnak işaretleriyle", "Nokta, atıf parantezinden sonra"] },
          sag: { ikon: "📜", baslik: "Blok alıntı", maddeler: ["4 satırdan uzun", "Yeni satırda girintili blok; tırnak işareti yok", "Atıf, son noktadan sonra"] },
          oyun: [
            { metin: "Tek bir kelimelik terim alıntısı.", cevap: "sol", neden: "Çok kısa: cümlenin içinde tırnakla." },
            { metin: "Kaynaktan 6 satırlık bir bölüm.", cevap: "sag", neden: "4 satırdan uzun: blok alıntı, tırnaksız." },
            { metin: "İki satırlık bir alıntı.", cevap: "sol", neden: "4 satırdan kısa: cümleye gömülür, tırnaklıdır." },
            { metin: "Yedi satırlık alıntıyı cümle içinde tırnakla vermek.", cevap: "sag", neden: "Hatalı: uzun alıntı blok olmalı ve tırnak almamalı." }
          ] },
        { tip: "tablo", baslik: "Ek bilgi: alıntıyı değiştirmek (MLA 9)", head: ["İşaret", "Ne zaman?", "Örnek"], rows: [
            ["[ ]", "Bir sözcük eklediğinde ya da değiştirdiğinde", "“[Teenagers] sleep less” (Demir 45)"],
            ["…", "Alıntıdan bir kısmı çıkardığında", "“Sleep loss … affects grades” (Demir 45)"]
          ], not: "Anlamı değiştirme. Blok alıntıda MLA, soldan 0,5 inç girinti ister. Tam 4 satırlık alıntı MLA 9'da kısa alıntı sayılır; emin değilsen öğretmene sor." }
      ]
    },
    {
      baslik: "Works Cited: çekirdek öğeler ve sayfa düzeni",
      kisa: "Yazar, başlık, kap, yayıncı, tarih, konum; alfabetik, girintili, çift aralık.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Author.", alt: "Soyad, Ad." }, "›",
            { t: "Title of source.", alt: "“Makale” ya da *Kitap*" }, "›",
            { t: "Title of container,", alt: "dergi, site, antoloji" }, "›",
            { t: "Publisher,", alt: "yayıncı" }, "›",
            { t: "Date,", alt: "gün ay yıl" }, "›",
            { t: "Location.", alt: "sayfa ya da URL" }
          ], aciklama: "Bilgi yoksa o öğeyi atla. *Container* (kap): kaynağın içinde yer aldığı daha büyük yayın, örneğin antoloji, dizi ya da dergi." },
        { tip: "tablo", baslik: "Sayfa düzeni kuralları", head: ["Konu", "Kural"], rows: [
            ["Başlık", "*Works Cited* ortada, ayrı bir sayfada başlar"],
            ["Sıralama", "Yazar soyadına göre alfabetik; yazar yoksa kaynak başlığının ilk sözcüğüne göre"],
            ["Girinti", "İlk satır sola dayalı, sonraki satırlar içeride (*hanging indent*)"],
            ["Aralık", "Çift aralık; girişler arasında ekstra boşluk yok"],
            ["İtalik ve tırnak", "Kitap, film, antoloji ve dizi gibi bütün eser ve kaplar italik; makale, kısa öykü, şiir gibi kısa eserler tırnakta"],
            ["Bağlantı", "Elektronik kaynakta bağlantı verilir (Full Outline'da Works Cited puanı bağlantıları da kapsar); öğretmenin örnek biçimini izle"]
          ], not: "Ek bilgi: aylar kısaltılır (Jan., Feb., Mar., Apr., May, June, July, Aug., Sept., Oct., Nov., Dec.). Sınavda böyle yaz: *Each entry begins with the author's last name.*" },
        { tip: "tuzak", metin: "Kaynakçanın sırası ve girintisi kolay puan kaybettirir.", yanlis: "Yazarın adına göre sırala ve ilk satırı içeri al.", dogru: "==Soyada== göre alfabetik, ilk satır dışarıda, sonrakiler içeride." }
      ]
    },
    {
      baslik: "Works Cited örnekleri",
      kisa: "Kaynak türüne göre öğeleri doldur; ezberleme.",
      bloklar: [
        { tip: "tablo", baslik: "Örnek girişler (hepsi uydurma)", head: ["Tür", "Örnek"], rows: [
            ["Tek yazarlı kitap", "Demir, Elif. *Sleep and the Teenage Brain*. Meridian Press, 2022."],
            ["Üç ya da daha çok yazarlı kitap", "Demir, Elif, et al. *Teen Sleep Handbook*. Meridian Press, 2023."],
            ["Çevrimiçi gazete makalesi", "Aydın, Selin. “Schools Test Later Start Times.” *The Daily Example*, 3 Mar. 2025, www.example.com/later-start."],
            ["Yazarsız web sayfası", "“School Start Times.” *Education Facts*, 2024, www.example.com/start-times."],
            ["Dergi makalesi (iki yazar)", "Kaya, Mert, and Selin Aydın. “Sleep and Grades.” *Journal of Youth Studies*, vol. 12, no. 3, 2024, pp. 45–60."],
            ["Dijital kütüphane (JSTOR)", "Kaya, Mert. “Sleep Debt.” *Journal of Youth Studies*, vol. 10, no. 1, 2022, pp. 3–9. *JSTOR*, www.example.com/stable/000."],
            ["YouTube videosu", "“How Sleep Works.” *YouTube*, uploaded by Science Class, 5 May 2024, www.example.com/video. Accessed 10 Feb. 2026."]
          ] },
        { tip: "ornek", baslik: "Bilgiden girişe", durum: "Elinde şu bilgiler var: yazar Selin Aydın, makale “Schools Test Later Start Times”, gazete *The Daily Example*, tarih 3 Mart 2025, adres www.example.com/later-start. Girişi oluştur.", adimlar: [
            "Yazar: *Aydın, Selin.*",
            "Makale başlığı tırnak içinde: *“Schools Test Later Start Times.”* (nokta tırnağın içinde)",
            "Kap italik: *The Daily Example*, ardından virgül.",
            "Tarih: *3 Mar. 2025*, virgül.",
            "Konum: *www.example.com/later-start.* ve nokta ile bitir."
          ], sonuc: "Aydın, Selin. “Schools Test Later Start Times.” *The Daily Example*, 3 Mar. 2025, www.example.com/later-start." },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Doğru MLA", maddeler: ["Metin içi: (Demir 45)", "Giriş: Demir, Elif."] },
          sag: { ikon: "❌", baslik: "Hatalı", maddeler: ["Metin içi: (Demir, p. 45)", "Giriş: Elif Demir."] },
          oyun: [
            { metin: "(Kaya and Aydın 12)", cevap: "sol", neden: "İki yazar “and” ile bağlanır; virgül ve “p.” yok." },
            { metin: "Elif Demir. Sleep and the Teenage Brain. 2022.", cevap: "sag", neden: "Soyad önde olmalı; başlık italik, yayıncı eksik." },
            { metin: "Yazarsız kaynağı kaynakçada başlığının ilk sözcüğüne göre sıralamak.", cevap: "sol", neden: "Yazar yoksa sıralama başlığa göre yapılır." },
            { metin: "Her girişin bütün satırlarını sola dayalı yazmak.", cevap: "sag", neden: "Sonraki satırlar içeride olmalı: *hanging indent*." }
          ] }
      ]
    },
    {
      baslik: "Röportaj, anket ve yapay zekâ girişleri",
      kisa: "Kendi topladığın veri ve yapay zekâ konuşması da kaynakçada yer alır.",
      bloklar: [
        { tip: "tablo", baslik: "Röportaj ve anket girişleri (Dr Byrd'ün belgesi)", head: ["Kaynak", "Works Cited biçimi"], rows: [
            ["Röportaj", "Soyadı, Ad. Personal Interview [ya da Email Interview]. Gün Ay Yıl. (Öğretmenin biçimi; MLA 9 kitabı: Personal interview. 12 Feb. 2026.)"],
            ["Anonim röportaj", "Anonymous. Personal Interview. 11 February 2026."],
            ["Google Forms ya da SurveyMonkey anketi", "Soyadın, Adın. “Anket Başlığı” Survey. Google Forms. UAA. [anketi oluşturduğun tarih]. Web. [veri topladığın tarih]. (Öğretmenin biçimi; MLA 9'da \"Web.\" yazılmaz.) [canlı bağlantı; Dr Byrd görüntüleyici olarak eklenmiş]"],
            ["Elle yapılan anket", "Soyadın, Adın. “Anket Konusu.” Survey. [tarih]."]
          ], not: "Okul görevlisi rolü nedeniyle anonim olamaz. Metin içi atıf, girişin ilk öğesiyle başlar: (Yıldız) ya da (Anonymous). Sınavda böyle yaz: *Yıldız, Ayşe. Personal Interview. 12 February 2026.*" },
        { tip: "tablo", baslik: "Yapay zekâ konuşması girişi (yalnız izinli kullanımda)", head: ["MLA öğesi", "Yapay zekâ girişinde ne yazılır?"], rows: [
            ["Author", "YOK: yapay zekâ asla yazar değildir"],
            ["Title of source", "İstemin (*prompt*) kendisi ya da kısa özeti, tırnak içinde; sen yazarsın"],
            ["Container", "Yapay zekâ aracının adı"],
            ["Version", "Aracın sürümü"],
            ["Date", "Cevabın üretildiği tarih"],
            ["Location", "Konuşmaya giden URL"]
          ], not: "Metin içi örnek: (“Brainstorm”). Hangi kullanım izinli, hangisi yasak: en407. Konuşmanın basılı kopyası klasöre girer." },
        { tip: "tuzak", metin: "Yapay zekâ kaynakçada yazar olarak gösterilmez.", yanlis: "Yazar hanesine aracın adını yazmak.", dogru: "Yazar hanesi boş; başlık olarak istemi tırnakta ver, aracı kap yap. Metin içi: (“Brainstorm”) gibi başlığın kısa hâli." }
      ]
    },
    {
      baslik: "Sayfa düzeni: MLA kılavuzu ve proje belgesi",
      kisa: "Kılavuz ilk sayfa başlığı ister; Argument Paper belgesi kapak sayfası ister.",
      bloklar: [
        { tip: "tablo", baslik: "İki düzeni ayır", head: ["", "UAA MLA kılavuzu (genel)", "Argument Paper proje belgesi"], rows: [
            ["İlk sayfa", "Sol üstte tam adın, altında öğretmen adı, ders adı, teslim tarihi; sonra ortalı başlık (kalın, italik ya da tırnak yok)", "Kapak sayfası: başlık ortalı; ad, öğretmen adı, bölüm adı, tarih ayrı satırlarda ve ortalı"],
            ["Sayfa numarası", "Her sayfada sağ üstte Soyadı ve sayfa numarası", "Sayfa numarası var, kapak sayfası hariç"],
            ["Yazı tipi", "Times New Roman 12 pt, siyah (MLA 11–13 pt der; UAA politikası: öğretmene sor)", "11 ya da 12 punto"],
            ["Sayfa ve aralık", "A4, 1 inç (2,5 cm) kenar boşluğu, her yerde çift aralık, paragraflar arasında ekstra boşluk yok", "A4, çift aralık"],
            ["Uzunluk", "Ödeve göre", "1500–1700 kelime, kapak sayfası ve Works Cited hariç"]
          ], not: "Belgeler ayrışınca proje için proje belgesi geçerlidir. Sınavda böyle yaz: *The Argument Paper begins with a cover page.*" },
        { tip: "liste", baslik: "Diğer biçim kuralları", maddeler: [
            { ikon: "↩️", baslik: "Girinti", metin: "Her paragrafın ilk satırı Tab ile girintili." },
            { ikon: "🌐", baslik: "Dil", metin: "Word'de belge dilini İngilizce ayarla." },
            { ikon: "🔤", baslik: "Başlıklar", metin: "Kitap adı italik (el yazısında altı çizili); kısa öykü, deneme, makale ve şiir adı tırnak içinde." }
          ] },
        { tip: "tuzak", metin: "Kapak sayfası kuralı kılavuzda yok, proje belgesinde var.", yanlis: "MLA'da kapak sayfası yok, Argument Paper'a koymam.", dogru: "Argument Paper'da proje belgesi geçer: kapak sayfası var. Genel MLA ödevlerinde kılavuzdaki ilk sayfa başlığını kullan." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Metin içi atıf ile *Works Cited* eşleşir: parantezdeki ilk öğe kaynakçadaki girişin ilk öğesidir.",
            "Biçim: (Demir 45). Virgül ve “p.” yok; atıf ya gömülü ya parantezli, ikisi birden olmaz (*double citation*).",
            "Alıntı, parafraz ve özette atıf gerekir; Works Cited yalnız atıf yapılan eserleri içerir.",
            "4 satırdan kısa alıntı cümleye gömülür ve tırnaklanır; 4 satırdan uzun alıntı girintili blok olur, tırnaksızdır.",
            "*Works Cited*: soyada göre alfabetik, çift aralık, *hanging indent*, ayrı sayfa; kitap italik, makale tırnaklı.",
            "Röportaj: Personal Interview + tarih; anket: Survey + araç + tarih; anonim: Anonymous. Yapay zekâda yazar yok, başlık istemdir.",
            "Genel MLA ödevinde ilk sayfa başlığı kullanılır; Argument Paper belgesi kapak sayfası ister.",
            "Elektronik kaynakların bağlantısı Works Cited'a girer; yanlış ya da eksik atıf Turnitin'de görünmez ama puan kaybettirir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which sentence avoids a double citation?",
      opts: ["Demir argues that sleep matters (Demir 45).", "Demir argues that sleep matters (45).", "According to Demir (Demir 45), sleep matters.", "Demir argues that sleep matters (Demir, p. 45)."], a: 1,
      why: "Yazar adı cümlede geçtiğinde parantezde yalnız sayfa verilir: (45). Birinci ve üçüncü şık yazarı iki kez söyler; dördüncü şık ayrıca virgül ve “p.” içerdiği için MLA biçimine aykırıdır." },
    { q: "A student wants to use a seven-line quotation from a source. Which is correct?",
      opts: ["Keep it inside the sentence in quotation marks.", "Paraphrase it and leave out the citation.", "Set it as an indented block without quotation marks, with the citation after the final period.", "Set it as a block and add quotation marks around it."], a: 2,
      why: "4 satırdan uzun alıntı yeni satırda girintili blok olur, tırnak almaz ve atıf son noktadan sonra gelir. İlk şık kısa alıntı kuralıdır; dördüncü şık blokta tırnak koyduğu için yanlıştır." },
    { q: "Which entry follows the interview format required in this course?",
      opts: ["Yıldız, Ayşe. Personal Interview. 12 February 2026.", "Ayşe Yıldız. Interview with me. 2026.", "Interview. Yıldız. Feb. 12.", "Yıldız, Ayşe (2026). An interview about school start times."], a: 0,
      why: "Biçim: Soyadı, Ad. Personal Interview. Gün Ay Yıl. Son şık APA'ya benzer ve çekicidir, ama burada MLA kullanılır; diğerlerinde soyad önde değil ve tür bilgisi eksik." },
    { q: "Which statement about the first page of the Argument Paper is correct?",
      opts: ["The UAA MLA handbook's first-page heading replaces any cover page.", "A cover page is not allowed.", "Only the title appears on the first page.", "The project document asks for a cover page with the title, name, teacher, department and date, each centered on its own line."], a: 3,
      why: "Genel MLA kılavuzu ilk sayfa başlığı kullanır, ama Argument Paper proje belgesi kapak sayfası ister ve proje için proje belgesi geçerlidir. Birinci şık çekicidir çünkü kılavuzun genel kuralını projeye uygular." },
    { q: "A student used an AI tool only to brainstorm and wants to cite it correctly. Which is right?",
      opts: ["Name the AI tool as the author.", "Give the prompt in quotation marks as the title, name the tool as the container, and add the version, date and conversation URL; there is no author.", "Do not cite it, because brainstorming is not research.", "Cite it in the text only, not in the Works Cited."], a: 1,
      why: "Yapay zekâ yazar olamaz; başlık istemdir, kap araç adıdır, sürüm, tarih ve konuşma bağlantısı eklenir. İlk şık en yaygın hatadır; kullanımı bildirmeden bırakmak da kural ihlalidir." }
  ]
};
