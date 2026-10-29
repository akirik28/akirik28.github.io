/* Kitpath not defteri · td103 · Dilekçe (TDE2.3, TDE2.4, TDE2.2)
   Kaynak: turkdili-11-sinav1/veri.js (MUHTEMEL, MC) ve takip/sinav-kitleri/turkdili/KAYNAK.md. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "td103",
  amac: "Bu konu dilekçeyi anlatıyor: bölümleri ve yerleri, kuralları, sık yapılan hatalar. Sınavda dilekçedeki isteği bulmayı, yanlışları düzeltmeyi ve samimi bir mesajı dilekçeye çevirmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Dilekçe ve bölümleri",
      kisa: "Dilekçe makama yazılan imzalı resmî yazıdır; her bölümün bir yeri var.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏛️", terim: "Dilekçe", tr: "resmî başvuru", tanim: "Bir isteği ya da şikâyeti yetkili makama bildiren imzalı resmî yazı. İmzasız dilekçe işleme konmaz." },
            { ikon: "📜", terim: "Arzuhal", tr: "Osmanlıcada dilekçe", tanim: "Arzuhalci, dilekçe yazan kişidir.", ornek: "Karagöz'ün “Yazıcı” oyunundaki yazıcılığı." }
          ] },
        { tip: "tablo", head: ["Yeri", "Dilekçedeki satır", "Bölüm"], rows: [
            ["Sağ üst", "03.11.2026", "Tarih"],
            ["Üst orta, büyük harf", "ÖRNEK ANADOLU LİSESİ MÜDÜRLÜĞÜNE", "Makam adı"],
            ["Metnin başı", "Okulunuzun 11/C sınıfı 318 numaralı öğrencisiyim.", "Kendini tanıtma"],
            ["Metin", "Voleybol takımı olarak il turnuvasına hazırlanıyoruz; hafta içi antrenman alanımız yok.", "Açıklama ve gerekçe"],
            ["Metnin sonu", "Spor salonunun hafta içi 16.00-18.00 arası takıma açılması hususunda gereğini bilgilerinize arz ederim.", "İstek ve kalıp kapanış"],
            ["Sağ alt", "Ad Soyad ve imza", "Ad soyad, imza"],
            ["Sol alt", "Adres ve telefon", "Adres ve iletişim"],
            ["En alt", "EK: Turnuva katılım listesi (1 sayfa)", "Ekler"]
          ], not: "Ad soyad ve imza makam adının altına değil, metin bittikten sonra sağ alta yazılır." },
        { tip: "tuzak", metin: "Dilekçede kişiye değil makama hitap edilir.", yanlis: "“Sayın Müdürüm,” diye başlanır.", dogru: "Makam adı üst ortada, büyük harfle ve yönelme ekiyle yazılır: ... LİSESİ MÜDÜRLÜĞÜNE." }
      ]
    },
    {
      baslik: "Kurallar: ne yazılır, ne yazılmaz",
      kisa: "Tek konu, kısa ve nesnel; saygılı dil; tarih ve imza şart.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Yazılır", maddeler: ["Tek konu; kısa, açık, anlaşılır", "Nesnel, saygılı, resmî dil; birinci tekil kişi", "Gerekçe ve açık istek", "Tarih, ad soyad ve imza"] },
          sag: { ikon: "🚫", baslik: "Yazılmaz", maddeler: ["Öfke, suçlama, abartı, ünlem", "Mecaz ve söz sanatı", "Birden çok konu", "Samimi kapanış"] },
          oyun: [
            { metin: "Okulunuzun 11/B sınıfı 245 numaralı öğrencisiyim.", cevap: "sol", neden: "Kendini nesnel bilgilerle tanıtma." },
            { metin: "Artık yeter! Bu rezalete son verin!", cevap: "sag", neden: "Öfkeli ve duygusal dil isteği zayıflatır." },
            { metin: "Görüşmek üzere, kendinize iyi bakın.", cevap: "sag", neden: "Samimi kapanış; doğrusu “Gereğini arz ederim.”" },
            { metin: "Spor salonunun açılması hususunda gereğini bilgilerinize arz ederim.", cevap: "sol", neden: "Açık istek ve kalıp kapanış." },
            { metin: "Aynı dilekçede hem salon hem kantin isteği var.", cevap: "sag", neden: "Tek konu kuralı: ikinci istek ayrı dilekçe olur." }
          ] },
        { tip: "tuzak", metin: "Etkili olmak için öfkeli ya da sanatlı yazmak gerekmez.", yanlis: "Mecaz ve öfkeli dil dilekçeyi güçlendirir.", dogru: "Dilekçe işlevsel bir yazıdır: nesnel gerekçe ve açık istek etkiler." }
      ]
    },
    {
      baslik: "Hata bulma",
      kisa: "Kontrol listesiyle bölümleri tek tek işaretle; eksik ya da yanlışı düzelt.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Tarih" }, "→", { t: "Makam" }, "→", { t: "Kimlik" }, "→", { t: "Gerekçe" }, "→", { t: "İstek" }, "→", { t: "Kapanış" }, "→", { t: "İmza" }
          ], aciklama: "Okurken bu sırayla işaretle; hangisi eksik ya da yanlış?" },
        { tip: "tablo", head: ["Sık hata", "Düzeltme"], rows: [
            ["“Sayın Müdürüm” hitabı", "Makam adı: ... MÜDÜRLÜĞÜNE"],
            ["Kendini tanıtmamak", "“Okulunuzun 11/B sınıfı 245 numaralı öğrencisiyim.”"],
            ["Duygusal, suçlayıcı dil, ünlemler", "Nesnel ve saygılı gerekçe"],
            ["Birden çok konu", "Her konu için ayrı dilekçe"],
            ["“Görüşmek üzere” gibi samimi kapanış", "“Gereğini arz ederim.”"],
            ["Tarih, imza, ad soyad ya da adres eksik", "Eksik bölümü ekle"]
          ] }
      ]
    },
    {
      baslik: "İstek ve gerekçe: model cevap",
      kisa: "İstek son cümlede, “hususunda” kalıbıyla gelir; gerekçeler açıklamadadır.",
      bloklar: [
        { tip: "ornek", baslik: "İstek nedir, gerekçe nedir?", durum: "“Okulunuzun 10/A sınıfı 112 numaralı öğrencisiyim. Okul kütüphanesi sınav haftasında 15.00'te kapanıyor; bu yüzden çalışma alanı bulamıyoruz. Kütüphanenin sınav haftasında 18.00'e kadar açık tutulması hususunda gereğini bilgilerinize arz ederim.”",
          adimlar: [
            "Son cümleye bak: “açık tutulması hususunda” isteği gösterir.",
            "Önceki cümleler gerekçedir: kütüphane 15.00'te kapanıyor; çalışma alanı yok.",
            "Cevabı iki parça yaz: istek ve gerekçe."
          ],
          sonuc: "Model cevap: İstek, kütüphanenin sınav haftasında 18.00'e kadar açık tutulmasıdır. Gerekçe, kütüphanenin 15.00'te kapanması yüzünden öğrencilerin çalışma alanı bulamamasıdır." }
      ]
    },
    {
      baslik: "Mektuptan dilekçeye",
      kisa: "Alıcı değişince dil değişir: arkadaşa samimi, makama resmî ve nesnel.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "💌", baslik: "Arkadaşa mektup", maddeler: ["Samimi, öznel dil", "Hitap yakınlığa göre: “Sevgili ...”"] },
          sag: { ikon: "🏛️", baslik: "Makama dilekçe", maddeler: ["Resmî, nesnel, kalıp ifadeli dil", "Makam adı, kendini tanıtma, açık istek, kalıp kapanış, tarih ve imza"] } },
        { tip: "adimlar", baslik: "Samimi mesajı dilekçeye çevir", adimlar: [
            { baslik: "Makam adı ve tarih", metin: "Makam adını büyük harfle yaz; tarihi ekle." },
            { baslik: "Kendini tanıt", metin: "Sınıf ve numaranı nesnel olarak yaz." },
            { baslik: "Gerekçe ve istek", metin: "Nesnel gerekçeyi yaz; isteği açıkça söyle." },
            { baslik: "Kapanış ve imza", metin: "“Gereğini arz ederim.” yaz; konu dışı cümleyi çıkar; ad soyad ve imza ekle." }
          ] },
        { tip: "not", metin: "Sınavda “Bu metin müdürlüğe gönderilebilir mi?” diye sorulursa: karar, iki kanıt ve iki değişiklik yaz." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Dilekçe: yetkili makama imzalı, resmî istek",
            "Tarih sağ üst; makam üst orta, büyük harf",
            "İmza sağ alt, adres sol alt, ekler en alt",
            "İstek son cümlede: “... hususunda”, “gereğini arz ederim”",
            "Hata: “Sayın Müdürüm”, duygusal dil, birden çok konu"
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Dilekçenin bölümleri ve yerleri eşleştirmelerinden hangisi yanlıştır?",
      opts: ["Tarih: sağ üst köşe", "Makam adı: üst ortada, büyük harfle", "Adres ve iletişim: sol altta", "Ekler: sağ üst köşede"],
      a: 3,
      why: "Ekler en altta “EK:” başlığıyla sıralanır; sağ üst köşe tarihin yeridir. Diğer eşleştirmeler doğrudur." },
    { q: "Bir öğrenci kütüphane saatlerinin uzatılması için dilekçe yazıyor. Aşağıdaki cümlelerden hangisi dilekçeyi bitirmeye en uygundur?",
      opts: ["Kütüphane saatlerinin uzatılması hususunda gereğini bilgilerinize arz ederim.", "Umarım bu sefer unutmazsınız, görüşmek üzere.", "Sevgiyle kalın, kocaman öpüyorum.", "Bu konuda sizden hiç umudum yok."],
      a: 0,
      why: "Dilekçe “... hususunda gereğini bilgilerinize arz ederim.” gibi kalıp bir cümleyle biter. Samimi ya da sitemli kapanışlar resmî yazıya uymaz." },
    { q: "“Sayın Müdürüm, kantinde fiyatlar çok yüksek. Siz hiçbir şeyi umursamıyorsunuz!” Bu dilekçe parçasındaki yanlışlar hangi şıkta doğru verilmiştir?",
      opts: ["Yalnızca imzanın sağ altta olması", "Makam adının büyük harfle yazılması ve gerekçe verilmesi", "Kişiye hitap edilmesi ve duygusal, suçlayıcı dil kullanılması", "Kendini tanıtması ve isteğini açıkça söylemesi"],
      a: 2,
      why: "Dilekçede kişiye değil makama hitap edilir; öfke ve suçlama da isteği zayıflatır. Büyük harfle makam adı, gerekçe, kendini tanıtma ve açık istek ise doğru uygulamalardır." },
    { q: "“Okulunuzun 10/A sınıfı 112 numaralı öğrencisiyim. Okul kütüphanesi sınav haftasında 15.00'te kapanıyor; bu yüzden çalışma alanı bulamıyoruz. Kütüphanenin sınav haftasında 18.00'e kadar açık tutulması hususunda gereğini bilgilerinize arz ederim.” Bu dilekçede istek ve bir gerekçe sırasıyla hangisidir?",
      opts: ["İstek: kantin fiyatlarının düşürülmesi; gerekçe: kütüphanenin kapanması", "İstek: kütüphanenin sınav haftasında 18.00'e kadar açık tutulması; gerekçe: 15.00'te kapandığı için çalışma alanı bulunamaması", "İstek: sınavın ertelenmesi; gerekçe: sınıfın 10/A olması", "İstek: kütüphanenin kapatılması; gerekçe: çalışma alanı bulunması"],
      a: 1,
      why: "İstek son cümlede “açık tutulması hususunda” ile verilmiş; gerekçe, önceki cümlelerdeki 15.00'te kapanma ve çalışma alanı bulunamamasıdır. Sınıf ve numara kendini tanıtmadır, gerekçe değildir." },
    { q: "Arkadaşına yazdığı samimi bir mesajı müdürlüğe dilekçe olarak vermek isteyen bir öğrenciye hangi öneri doğrudur?",
      opts: ["Mesaj olduğu gibi verilsin; içten dil dikkat çeker.", "Makam adı, kendini tanıtma, nesnel gerekçe, açık istek, kalıp kapanış, tarih ve imza eklensin; konu dışı cümleler çıkarılsın.", "Yalnızca imza eklensin.", "Hitap “Sevgili Müdürüm” yapılsın ve ünlemler artırılsın."],
      a: 1,
      why: "Alıcı değişince dil de değişir: makama resmî, nesnel ve kalıp ifadeli yazılır. Samimi mesajı olduğu gibi vermek ya da yalnızca imza eklemek eksik kalır; ünlem ve “Sevgili” hitabı resmî dile aykırıdır." }
  ]
};
