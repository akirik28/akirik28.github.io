/* Kitora not defteri · en402 · 4.2 MLA Kaynak Gösterme
   Okul dersi (10. sınıf English · Unit 4). Örnek kaynaklar ve kişiler uydurmadır; kaynakçana yazma. */
window.DEFTER = {
  slug: "en402",
  amac: "MLA 9'a göre kaynak göstermeyi öğreneceksin: metin içi atıf (*in-text citation*), *Works Cited* sayfası, alıntıyı cümleye yerleştirme ve 4 satırdan uzun alıntılar için blok alıntı.",
  bolumler: [
    {
      baslik: "İki parça birlikte çalışır",
      kisa: "Metin içi atıf ile Works Cited eşleşmezse kaynak gösterilmemiş sayılır.",
      bloklar: [
        { tip: "sekil", baslik: "Metinde ve kaynakçada aynı kaynak", fig: { type: "table", head: ["Essay metninde", "Works Cited sayfasında"], rows: [["(Demir 45)", "Demir, Elif. Sleep and the Teenage Brain. Meridian Press, 2022."], ["(Kaya and Aydın 12)", "Kaya, Mert, and Selin Aydın. “Sleep and Grades.” Journal of Youth Studies, vol. 12, no. 3, 2024, pp. 45–60."], ["(Yıldız)", "Yıldız, Ada. Personal interview. 12 Feb. 2027."]], caption: "Uydurma örnekler (italik başlıklar burada düz yazıldı). Parantezdeki ilk sözcük, kaynakçadaki girişin ilk sözcüğüdür." } },
        { tip: "not", metin: "Okuyucu parantezdeki ilk sözcüğü (*Demir*) kaynakçada alfabetik olarak arar. Bu yüzden ==ikisi birebir aynı sözcükle başlamalı==. Metinde geçen her kaynak kaynakçada, kaynakçadaki her kaynak da metinde olmalı." }
      ]
    },
    {
      baslik: "Metin içi atıf: yazar ve sayfa",
      kisa: "Parantezde yazar soyadı ve sayfa; arada virgül ve \"p.\" yok.",
      bloklar: [
        { tip: "tablo", baslik: "Duruma göre metin içi atıf (MLA 9)", head: ["Durum", "Biçim"], rows: [
            ["Bir yazar", "(Demir 45)"],
            ["İki yazar", "(Kaya and Aydın 12)"],
            ["Üç ya da daha çok yazar", "(Demir et al. 12)"],
            ["Yazar yok", "(“Sleep and Grades” 3): başlığın kısa hâli, tırnakta; kitapsa *italik*"],
            ["Web sayfası, sayfa numarası yok", "(Demir): yalnızca yazar"],
            ["Yazar cümlede geçiyor", "Demir argues that sleep matters (45)."],
            ["Dolaylı alıntı (alıntı içinde alıntı)", "(qtd. in Demir 45)"],
            ["Aynı yazarın iki eseri", "(Demir, “Sleep Debt” 12)"]
          ], not: "Nokta, parantezden sonra gelir: …sleep (Demir 45)." },
        { tip: "tuzak", metin: "Hem virgül hem \"p.\" eklemek MLA'da yanlıştır.", yanlis: "(Demir, p. 45)", dogru: "(Demir 45): yazar soyadı, boşluk, sayfa; virgül yok, \"p.\" yok." }
      ]
    },
    {
      baslik: "Alıntı, parafraz, özet",
      kisa: "Üçü de başkasının fikridir; üçünde de atıf gerekir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "❝", terim: "Quotation", tr: "doğrudan alıntı", tanim: "Kaynağın sözünü aynen, tırnak içinde verirsin. Tek bir kelimeyi bile değiştirmezsin.", ornek: "Demir calls teenage sleep loss “a hidden crisis” (45)." },
            { ikon: "🔁", terim: "Paraphrase", tr: "parafraz", tanim: "Fikri kendi cümle yapınla yazarsın; yalnızca eş anlamlı kelime değiştirmek yetmez. Atıf gerekir.", ornek: "Demir notes that teenagers often sleep too little (45)." },
            { ikon: "✂️", terim: "Summary", tr: "özet", tanim: "Uzun bir bölümü kısaca anlatırsın. Kaynak yine belirtilir.", ornek: "Kaya and Aydın review three sleep studies (12–15)." }
          ] },
        { tip: "liste", baslik: "Alıntıyı tanıtan kalıplar", maddeler: [
            { ikon: "💬", baslik: "*According to Demir, …*", metin: "Yazarı cümlenin başında belirtir." },
            { ikon: "💬", baslik: "*Kaya and Aydın argue / suggest / demonstrate that …*", metin: "Güçlü, tarafsız ya da kanıtlayıcı fiiller seç." },
            { ikon: "💬", baslik: "*As the 2024 study shows, …*", metin: "Kaynağı delil olarak sunar." }
          ] },
        { tip: "tuzak", metin: "Parafraz kaynak göstermemek için bir yol değildir.", yanlis: "Cümleyi kendi sözlerimle yazdım, atıf gerekmez.", dogru: "Fikir senin değilse parafrazda da ==atıf gerekir==." }
      ]
    },
    {
      baslik: "Alıntıyı yerleştirme ve blok alıntı",
      kisa: "Alıntıyı tanıt, ver, yorumla; 4 satırdan uzunsa blok yap.",
      bloklar: [
        { tip: "adimlar", baslik: "Alıntı sandviçi", adimlar: [
            { baslik: "Tanıt", metin: "Yazarı ve bağlamı söyle: *Researcher Demir explains that …*" },
            { baslik: "Alıntıla", metin: "Kısa ve gerekli parçayı tırnak içinde ver ve (Demir 45) yaz." },
            { baslik: "Yorumla", metin: "Alıntının tezi nasıl desteklediğini kendi cümlenle açıkla: *This evidence shows that …*" }
          ] },
        { tip: "ikili", sol: { ikon: "💬", baslik: "Kısa alıntı", maddeler: ["En çok 4 satır", "Cümlenin içinde, tırnak işaretleriyle", "Nokta parantezden sonra"] },
          sag: { ikon: "📜", baslik: "Blok alıntı", maddeler: ["4 satırdan uzun", "Yeni satırda, soldan 0,5 inç içeride; tırnak işareti yok", "Parantez, son noktadan sonra gelir"] },
          oyun: [
            { metin: "Tek bir kelimelik terim alıntısı.", cevap: "sol", neden: "Çok kısa: cümlenin içinde tırnakla." },
            { metin: "Kaynaktan 6 satırlık bir bölüm.", cevap: "sag", neden: "4 satırdan uzun: blok alıntı." },
            { metin: "Tam 4 satırlık alıntı.", cevap: "sol", neden: "Kural \"4 satırdan uzun\" olduğu için hâlâ kısa alıntıdır." },
            { metin: "5 satırlık alıntı.", cevap: "sag", neden: "4 satırı aştı: blok alıntı." }
          ] },
        { tip: "tablo", baslik: "Alıntıyı değiştirmek", head: ["İşaret", "Ne zaman?", "Örnek"], rows: [
            ["[ ]", "Bir sözcük eklediğinde ya da değiştirdiğinde", "“[Teenagers] sleep less” (Demir 45)"],
            ["…", "Alıntıdan bir kısmı çıkardığında", "“Sleep loss … affects grades” (Demir 45)"]
          ], not: "Anlamı değiştirme: çıkardığın ya da eklediğin parça kaynağın fikrini bozmamalı." }
      ]
    },
    {
      baslik: "*Works Cited*: çekirdek öğeler",
      kisa: "Yazar, başlık, kap, yayıncı, tarih, konum sırasıyla yazılır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Author.", alt: "Soyad, Ad." }, "›",
            { t: "Title of source.", alt: "“Makale” ya da *Kitap*" }, "›",
            { t: "Title of container,", alt: "dergi, site, antoloji" }, "›",
            { t: "Publisher,", alt: "yayıncı" }, "›",
            { t: "Date,", alt: "gün ay yıl" }, "›",
            { t: "Location.", alt: "sayfa ya da URL" }
          ], aciklama: "Bilgi yoksa o öğeyi atla. Her öğeden sonra virgül ya da nokta gelir. *Container* (kap): kaynağın içinde yer aldığı daha büyük yayın." },
        { tip: "tablo", baslik: "Sayfa düzeni kuralları", head: ["Konu", "MLA 9 kuralı"], rows: [
            ["Başlık", "*Works Cited*, ortada; kalın, italik ya da tırnak yok"],
            ["Sıralama", "Yazar soyadına göre alfabetik; yazar yoksa başlığın ilk sözcüğüne göre (*A*, *An*, *The* sayılmaz)"],
            ["Girinti", "İlk satır sola dayalı, sonraki satırlar 0,5 inç içeride (*hanging indent*)"],
            ["Aralık", "Bütün sayfada çift aralık; giriş arası boşluk yok"],
            ["Aylar", "Jan., Feb., Mar., Apr., May, June, July, Aug., Sept., Oct., Nov., Dec."],
            ["URL", "*https://* yazılmaz; DOI varsa DOI verilir"],
            ["Başlıklar", "Kitap, dergi ve web sitesi *italik*; makale ve sayfa başlığı “tırnak içinde”"]
          ] },
        { tip: "tuzak", metin: "Kaynakçanın sırası ve girintisi kolay puan kaybettirir.", yanlis: "Yazarın adına göre sırala, ilk satırı içeri al, https:// ekle.", dogru: "==Soyada== göre alfabetik, ilk satır dışarıda, sonrakiler içeride, https:// yok." }
      ]
    },
    {
      baslik: "*Works Cited* örnekleri",
      kisa: "Kaynak türüne göre öğeleri doldur; ezberleme.",
      bloklar: [
        { tip: "tablo", baslik: "Örnek girişler (hepsi uydurma)", head: ["Tür", "Örnek"], rows: [
            ["Kitap", "Demir, Elif. *Sleep and the Teenage Brain*. Meridian Press, 2022."],
            ["Hakemli makale (iki yazar)", "Kaya, Mert, and Selin Aydın. “Sleep and Grades.” *Journal of Youth Studies*, vol. 12, no. 3, 2024, pp. 45–60. doi.org/10.0000/example."],
            ["Web makalesi", "Demir, Elif. “Why Teenagers Need More Sleep.” *Youth Health Weekly*, 14 Mar. 2025, www.example.com/teen-sleep."],
            ["Yazarsız web sayfası", "“School Start Times.” *Education Facts*, 2024, www.example.com/start-times."],
            ["Video", "“How Sleep Works.” *YouTube*, uploaded by Science Class, 5 May 2024, www.example.com/video."],
            ["Röportaj (kendin yaptın)", "Yıldız, Ada. Personal interview. 12 Feb. 2027."],
            ["Anket (kendin yaptın)", "Soyadın, Adın. Survey on Student Phone Use. Original survey, 3–7 Feb. 2027."]
          ], not: "Anket için MLA'nın resmî bir kalıbı yok; yukarıdaki biçim yaygın bir uygulama. Öğretmeninle son biçimi netleştir." },
        { tip: "ornek", baslik: "Bilgiden girişe", durum: "Elinde şu bilgiler var: yazar Elif Demir, makale “Why Teenagers Need More Sleep”, site *Youth Health Weekly*, tarih 14 Mart 2025, adres www.example.com/teen-sleep. Girişi oluştur.", adimlar: [
            "Yazar: *Demir, Elif.*",
            "Makale başlığı tırnak içinde: *“Why Teenagers Need More Sleep.”* (nokta tırnağın içinde)",
            "Kap italik: *Youth Health Weekly*, ardından virgül.",
            "Tarih: *14 Mar. 2025*, virgül.",
            "Konum: *www.example.com/teen-sleep.* (https:// yok), nokta ile bitir."
          ], sonuc: "Demir, Elif. “Why Teenagers Need More Sleep.” *Youth Health Weekly*, 14 Mar. 2025, www.example.com/teen-sleep." },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Doğru MLA 9", maddeler: ["Metin içi: (Demir 45)", "Giriş: Demir, Elif."] },
          sag: { ikon: "❌", baslik: "Hatalı", maddeler: ["Metin içi: (Demir, p. 45)", "Giriş: Elif Demir."] },
          oyun: [
            { metin: "(Kaya and Aydın 12)", cevap: "sol", neden: "İki yazar \"and\" ile bağlanır; virgül ve \"p.\" yok." },
            { metin: "Elif Demir. Sleep and the Teenage Brain. 2022.", cevap: "sag", neden: "Soyad önde olmalı; başlık italik ve yayıncı eksik." },
            { metin: "(Demir et al. 12) — üç yazarlı kaynak.", cevap: "sol", neden: "Üç ve daha çok yazarda ilk yazar + *et al.*" },
            { metin: "https://www.example.com/teen-sleep (kaynakçada)", cevap: "sag", neden: "MLA 9'da *https://* yazılmaz." }
          ] }
      ]
    },
    {
      baslik: "Essay'in sayfa düzeni",
      kisa: "12 punto, çift aralık, soyadı ve sayfa numarası üst bilgide.",
      bloklar: [
        { tip: "liste", baslik: "MLA essay biçimi", maddeler: [
            { ikon: "📝", baslik: "Sayfa üstü", metin: "Sağ üstte soyadın ve sayfa numaran (ör. Yıldız 2)." },
            { ikon: "📄", baslik: "İlk sayfa", metin: "Sol üstte sırayla: adın, öğretmenin, ders, tarih; ardından ortalı başlık. Ayrı kapak sayfası gerekmez." },
            { ikon: "🔤", baslik: "Yazı", metin: "12 punto okunur font (örn. Times New Roman), çift aralık, 1 inç kenar boşluğu." },
            { ikon: "↩️", baslik: "Paragraflar", metin: "Her paragrafın ilk satırı 0,5 inç içeride." },
            { ikon: "📚", baslik: "Sona", metin: "*Works Cited* yeni sayfada başlar." }
          ] },
        { tip: "tuzak", metin: "Öğretmenin farklı bir başlık sayfası ya da renk kodlu teslim isteyebilir.", yanlis: "MLA böyle diyor, öğretmenin yönergesini görmezden gelirim.", dogru: "Önce öğretmenin yönergesi, MLA'nın kalanı kurala göre uygulanır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Metin içi atıf ile *Works Cited* birbirine karşılık gelir: parantezdeki ilk sözcük kaynakçadaki girişin ilk sözcüğüdür.",
            "Biçim: (Demir 45). Virgül ve \"p.\" yok; nokta paranteze sonra.",
            "İki yazar: *and*; üç ve daha çok: ilk yazar + *et al.*; yazar yoksa kısa başlık.",
            "Alıntı, parafraz ve özette atıf gerekir. Eş anlamlı kelime değiştirmek parafraz değildir.",
            "4 satırdan uzun alıntı blok olur: yeni satır, 0,5 inç girinti, tırnak yok, parantez noktadan sonra.",
            "Çekirdek öğeler: *Author, Title of source, Title of container, Publisher, Date, Location*.",
            "*Works Cited*: soyada göre alfabetik, çift aralık, *hanging indent*, URL'de *https://* yok.",
            "Anket ve röportaj için de giriş yaz; anket biçimini öğretmeninle netleştir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Üç yazarlı bir kaynağın 12. sayfasından yapılan MLA 9 metin içi atfı hangisidir?",
      opts: ["(Demir, Kaya, Aydın 12)", "(Demir et al. 12)", "(Demir et al., p. 12)", "(Demir and others 12)"], a: 1,
      why: "MLA 9'da üç ve daha çok yazarda ilk yazar ve *et al.* yazılır, virgül ve \"p.\" kullanılmaz. Birinci şıktaki gibi üç yazarı sıralamak MLA 9'da kullanılmaz." },
    { q: "Bir öğrenci 7 satırlık bir alıntıyı cümle içinde, tırnak içinde vermiş. Ne yapmalıdır?",
      opts: ["Hiçbir şey, tırnak yeterlidir.", "Alıntıyı bir cümlede özetleyip atıfı kaldırmalıdır.", "Alıntıyı kısaltıp sonuna \"p.\" eklemelidir.", "Blok alıntı yapmalı: yeni satırda 0,5 inç içeride, tırnaksız, atıf noktadan sonra."], a: 3,
      why: "4 satırdan uzun alıntı blok olur. Tırnak çekici bir hatadır; blokta tırnak kullanılmaz. Atıfı kaldırmak intihal olur." },
    { q: "Aşağıdaki bilgilere göre hangi *Works Cited* girişi MLA 9'a en uygundur?",
      fig: { type: "table", head: ["Bilgi", "Değer"], rows: [["Yazar", "Mert Kaya"], ["Makale", "Sleep and Grades"], ["Dergi", "Journal of Youth Studies"], ["Cilt/Sayı", "12 / 3"], ["Yıl", "2024"], ["Sayfa", "45–60"]] },
      opts: ["Mert Kaya. Sleep and Grades. Journal of Youth Studies, 2024.", "Kaya, Mert. “Sleep and Grades.” *Journal of Youth Studies*, vol. 12, no. 3, 2024, pp. 45–60.", "Kaya, Mert, “Sleep and Grades,” Journal of Youth Studies (12:3), 2024, p. 45.", "Kaya, M. (2024). Sleep and grades. *Journal of Youth Studies*, 12(3), 45–60."], a: 1,
      why: "İkinci şık soyad önde, makale tırnakta, dergi italik, cilt/sayı ve sayfa aralığı \"vol., no., pp.\" biçiminde. Dördüncü şık APA biçimidir ve çekici bir tuzaktır." },
    { q: "Bir öğrenci kaynaktaki fikri kendi cümleleriyle yazmış ve atıf eklememiş. Çünkü \"cümle benim\". Bu durum için hangisi doğrudur?",
      opts: ["Doğrudur, çünkü sözcükler kendisinin.", "Doğrudur, çünkü kaynak Works Cited'da var.", "Yanlıştır; parafrazda da atıf gerekir.", "Yanlıştır; parafraz hiç kullanılamaz."], a: 2,
      why: "Fikir kaynaktan geliyorsa parafrazda da metin içi atıf gerekir. Kaynakçada olması yetmez; her bilgi metinde de atıflanmalıdır. Parafraz yasak değil, atıfsız olması sorundur." },
    { q: "Bir öğrenci “Yıldız, Ada. Personal interview. 12 Feb. 2027.” girişini kaynakçaya yazdı. Metin içi atıf ne olmalıdır?",
      opts: ["(Ada Yıldız, personal interview)", "(Yıldız 12 Feb.)", "(Personal interview)", "(Yıldız)"], a: 3,
      why: "Röportajda sayfa numarası yoktur; metin içi atıf yalnızca yazarın soyadıdır ve kaynakçadaki ilk sözcükle eşleşir. Tarih ya da \"interview\" yazmak gereksizdir." }
  ]
};
