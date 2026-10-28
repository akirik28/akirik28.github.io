/* Kitpath not defteri · td102 · Mektup (TDE2.2, TDE2.3, TDE2.1)
   Kaynak: turkdili-11-sinav1/veri.js (MUHTEMEL, MC) ve takip/sinav-kitleri/turkdili/KAYNAK.md. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "td102",
  amac: "Bu konu mektubu anlatıyor: yapısı, türleri, anlatım biçimleri ve düşünceyi geliştirme yolları. Sınavda bir mektubun ana düşüncesini yazmayı ve türünü gerekçesiyle söylemeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Mektup nedir, nasıl kurulur?",
      kisa: "Mektup belirli bir alıcıya yazılır; yer-tarih, hitap ve imza taşır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Yer ve tarih", alt: "sağ üst" }, "→", { t: "Hitap" }, "→", { t: "Giriş" }, "→", { t: "Gelişme" }, "→", { t: "Sonuç" }, "→", { t: "Kapanış" }, "→", { t: "İmza" }
          ], aciklama: "Mektup: duygu, düşünce, haber ya da isteği uzaktaki belirli bir alıcıya iletmek için yazılan yazı." },
        { tip: "tablo", head: ["Mektuptaki satır", "Bölüm"], rows: [
            ["Ankara, 5 Kasım 2026", "Yer ve tarih (sağ üst)"],
            ["Sevgili Ayşe,", "Hitap"],
            ["Mektubun elime ulaştı, hepinizi sorarım.", "Giriş: hâl hatır, mektuba yanıt"],
            ["Bu hafta okulda kitap kulübünü kurduk; sana da katılmanı öneriyorum.", "Gelişme: asıl konu"],
            ["Annene selam söyle, yazmanı bekliyorum.", "Sonuç: dilek, selam"],
            ["Gözlerinden öperim,", "Kapanış ifadesi"],
            ["Deniz", "İmza"]
          ] },
        { tip: "harita", merkez: "Mektupta iletişim öğeleri", dallar: [
            { baslik: "Gönderen", alt: "Mektubu yazan" },
            { baslik: "Alıcı", alt: "Mektubu okuyacak kişi" },
            { baslik: "İleti", alt: "Duygu, düşünce, haber, istek" },
            { baslik: "Kanal" },
            { baslik: "Bağlam" },
            { baslik: "Dönüt" }
          ] }
      ]
    },
    {
      baslik: "Mektup türleri ve dili",
      kisa: "Dört tür var: özel, resmî, edebî, açık; alıcıya ve amaca bak.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✉️", terim: "Özel mektup", tr: "kişisel mektup", tanim: "Aile ve arkadaşa yazılır; samimi ve içtendir.", ornek: "Yurttan anneye yazılan, “ellerinden öperim” diye biten mektup." },
            { ikon: "🏛️", terim: "Resmî mektup", tr: "iş mektubu", tanim: "Kurum ve kişiler arasında, resmî dil ve kalıplarla yazılır.", ornek: "“Saygılarımla” ile biten kurum mektubu." },
            { ikon: "📖", terim: "Edebî mektup", tr: "sanatçı mektubu", tanim: "Sanatçıların sanat, edebiyat, okuma ve yazma üzerine düşüncelerini yansıttığı, sonradan kitaplaşan mektuplar.", ornek: "Mehmet Kaplan'ın Âli'ye yazdığı mektup." },
            { ikon: "📰", terim: "Açık mektup", tr: "yayımlanan mektup", tanim: "Bir kişiye ya da kuruma seslenir ama gazete, dergi veya genel ağda herkes okusun diye yayımlanır.", ornek: "Gazetede belediye başkanına seslenen okur mektubu." }
          ] },
        { tip: "ikili", sol: { ikon: "💌", baslik: "Özel mektubun dili", maddeler: ["İçten, öznel, konuşma diline yakın", "Birinci ve ikinci kişi; konudan konuya geçilebilir", "Hitap ve kapanış yakınlığa göre seçilir"] },
          sag: { ikon: "🗂️", baslik: "Resmî mektubun dili", maddeler: ["Resmî dil ve kalıplar", "Kurum ve kişiler arasında yazılır"] },
          oyun: [
            { metin: "Yazar konudan konuya rahatça geçer.", cevap: "sol", neden: "Özel mektupta samimiyet esastır." },
            { metin: "Kalıplaşmış resmî ifadeler kullanılır.", cevap: "sag", neden: "Kalıp ifade resmî yazışmanın özelliğidir." },
            { metin: "“Sevgili Kardeşim,” diye başlanır.", cevap: "sol", neden: "Hitap, yakınlık derecesine göre seçilmiş." },
            { metin: "“Saygılarımla” ile kapanır.", cevap: "sag", neden: "Resmî kapanış ifadesi." }
          ] },
        { tip: "tuzak", metin: "Mektup bir kişiye seslense bile özel olmayabilir.", yanlis: "Bir kişiye seslenen her mektup özel mektuptur.", dogru: "Gazetede herkesin okuması için yayımlanıyorsa kişiye seslense de açık mektuptur." }
      ]
    },
    {
      baslik: "Anlatım biçimi ve düşünceyi geliştirme",
      kisa: "Önce parçanın ne yaptığına bak: anlatır, canlandırır, bilgi verir ya da ikna eder.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📜", terim: "Öyküleyici anlatım", tr: "olay anlatımı", tanim: "Olay, oluş sırasıyla anlatılır.", ornek: "Sabah erken kalktım, otobüse yetiştim." },
            { ikon: "🏞️", terim: "Betimleyici anlatım", tr: "canlandırma", tanim: "Görünüm ayrıntılarla göz önünde canlandırılır.", ornek: "Sis, kubbelerin üstüne gri bir yorgan gibi çöküyor." },
            { ikon: "📘", terim: "Açıklayıcı anlatım", tr: "bilgilendirme", tanim: "Bilgi verilir.", ornek: "Mektup, uzaktaki bir alıcıya yazılan yazıdır." },
            { ikon: "⚖️", terim: "Tartışmacı anlatım", tr: "ikna etme", tanim: "Okur bir düşünceye ikna edilmeye çalışılır.", ornek: "Yetenek değil, emek belirleyicidir." }
          ] },
        { tip: "tablo", head: ["Düşünceyi geliştirme yolu", "İpucu"], rows: [
            ["Tanımlama", "“... denir”, “... dır” kalıbı"],
            ["Örneklendirme", "“örneğin”, “söz gelişi”"],
            ["Tanık gösterme", "Tanınmış birinin sözü getirilir"],
            ["Karşılaştırma", "Benzer ve farklı yönler yan yana konur"],
            ["Sayısal verilerden yararlanma", "Rakam, yüzde"],
            ["Benzetme", "“gibi”, “-e benzer”: Kitap okumak, pencere açmak gibidir."]
          ] },
        { tip: "tuzak", metin: "Mektuplarda çoğunlukla açıklayıcı ve öyküleyici anlatım görülür; yer yer betimleyici.", yanlis: "Mektuptaki her parça açıklayıcıdır.", dogru: "Parçanın ne yaptığına bak: renk ve ayrıntı betimleyici, oluş sırası öyküleyici, bilgi açıklayıcı, ikna tartışmacıdır." }
      ]
    },
    {
      baslik: "Okumayı yönet, anlamı kur",
      kisa: "Okumadan önce tahmin et; ana düşünceyi tek cümleyle yaz ve kanıtla.",
      bloklar: [
        { tip: "adimlar", baslik: "Mektubu okurken", adimlar: [
            { baslik: "Okumadan önce", metin: "Yer-tarihe, hitaba ve imzaya bak; kimin kime, hangi amaçla yazdığını tahmin et." },
            { baslik: "Okurken", metin: "Okuma amacını belirle; not al, altını çiz." },
            { baslik: "Okuduktan sonra", metin: "Ana düşünceyi tek cümleyle yaz. Gönderen alıcıya ne demek istiyor?" },
            { baslik: "Kanıtla", metin: "Yorumunu metindeki bir ifadeyle destekle." }
          ] },
        { tip: "tuzak", metin: "Konu ile ana düşünce karıştırılır.", yanlis: "Ana düşünce: “yazma”.", dogru: "Konu: yazma. Ana düşünce tam cümledir: “Yazma becerisi düzenli çalışmayla gelişir.”" }
      ]
    },
    {
      baslik: "Model cevap: ana düşünce ve kanıt",
      kisa: "Ana düşünce tek cümle; kanıt metinden gelir.",
      bloklar: [
        { tip: "ornek", baslik: "Elif'e mektup", durum: "“Sevgili Elif, “Bende yazma yeteneği yok.” demişsin. Benim ilk defterim de yarım cümlelerle doluydu; her akşam bir sayfa yazdım. Yetenek bir tohumdur ama onu büyüten emektir.” Ana düşüncenin ne olduğunu ve gönderenin neye karşı çıktığını kanıtla yaz.",
          adimlar: [
            "Konu: yazma yeteneği. Bu ana düşünce değildir.",
            "Alıcının düşüncesi: “Bende yazma yeteneği yok.” Gönderen buna karşı çıkıyor.",
            "Kanıt: kendi ilk defteri yarım cümlelerle doluydu; her akşam bir sayfa yazdı."
          ],
          sonuc: "Model cevap: Ana düşünce, yazma becerisinin yetenekten çok düzenli çalışmayla geliştiğidir. Gönderen, Elif'in “Bende yazma yeteneği yok.” düşüncesine karşı çıkıyor; kanıt olarak kendi ilk defterinin yarım cümlelerle dolu olduğunu ve her akşam bir sayfa yazarak geliştiğini anlatıyor." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Sıra: yer-tarih, hitap, giriş, gelişme, sonuç, kapanış, imza.",
            "Dört tür: özel, resmî, edebî, açık mektup.",
            "Gazetede herkes okusun diye yayımlanan mektup, kişiye seslense de açık mektuptur.",
            "Özel mektup içten ve öznel; konudan konuya geçilebilir. Kalıp ifade resmî yazışmanın özelliğidir.",
            "Anlatım biçimleri: öyküleyici, betimleyici, açıklayıcı, tartışmacı.",
            "Düşünceyi geliştirme yolları: tanımlama, örneklendirme, tanık gösterme, karşılaştırma, sayısal veri, benzetme.",
            "Okumadan önce yer-tarih, hitap ve imzadan amacı tahmin et.",
            "Konu ile ana düşünce farklıdır; ana düşünce tek cümle ve kanıtlıdır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir şairin, genç bir yazara okuma ve yazma üzerine görüşlerini anlattığı ve sonradan kitap olarak yayımlanan mektupları hangi türdedir?",
      opts: ["Özel mektup", "Resmî mektup", "Edebî mektup", "Açık mektup"],
      a: 2,
      why: "Sanatçıların sanat ve edebiyat üzerine düşüncelerini yansıttığı, sonradan kitaplaşan mektuplar edebî mektuptur. Özel mektup en çekici yanlış şık: kişiye yazılsa da burada ayırt edici olan edebî düşünce ve kitaplaşmadır." },
    { q: "Bir okur, belediye başkanına seslenen mektubunu gazetenin okur köşesinde yayımlatıyor. Mektup hangi türdedir ve neden?",
      opts: ["Özel mektup; çünkü bir kişiye seslenir.", "Açık mektup; çünkü herkesin okuması için yayımlanır.", "Edebî mektup; çünkü kamuoyuna yöneliktir.", "Resmî mektup; çünkü bir kuruma yazılmıştır."],
      a: 1,
      why: "Açık mektup bir kişiye ya da kuruma seslenir ama herkesin okuması için yayımlanır. Resmî mektup en çekici yanlış şık: resmî mektup kurumlar arasında yazılır, yayımlanmaz." },
    { q: "Aşağıdakilerden hangisi bir mektubun bölümlerini doğru sırayla verir?",
      opts: ["Hitap, yer-tarih, giriş, gelişme, sonuç, kapanış, imza", "Yer-tarih, giriş, hitap, gelişme, sonuç, imza, kapanış", "Yer-tarih, hitap, gelişme, giriş, sonuç, kapanış, imza", "Yer-tarih, hitap, giriş, gelişme, sonuç, kapanış, imza"],
      a: 3,
      why: "Sıra: yer ve tarih (sağ üst), hitap, giriş, gelişme, sonuç, kapanış ifadesi, imza. Diğer şıklarda hitap, giriş-gelişme ya da kapanış-imza sırası bozulmuştur." },
    { q: "“Mektup, uzaktaki bir alıcıya yazılan yazıdır.” cümlesinde hangi düşünceyi geliştirme yolu kullanılmıştır?",
      opts: ["Tanımlama", "Benzetme", "Tanık gösterme", "Sayısal verilerden yararlanma"],
      a: 0,
      why: "“... yazıdır” kalıbıyla mektubun ne olduğu söylenmiştir: tanımlama. Benzetme “gibi” ile iki şeyi yan yana koyar; tanık gösterme tanınmış birinin sözünü getirir." },
    { q: "“Sevgili Deniz, ‘Okumayı sevmiyorum.’ demişsin. Ben de başta sevmiyordum; her gün on sayfa okuyunca alıştım ve sonra bırakamadım. Alışkanlık sabırla kazanılır.” Bu mektup parçasının ana düşüncesi hangisidir?",
      opts: ["Kitap okumayı herkes sever.", "Okuma alışkanlığı sabırla ve düzenli okumayla kazanılır.", "Okumak yalnızca on sayfayla sınırlıdır.", "Sevmediğin şeyi hemen bırakmalısın."],
      a: 1,
      why: "Gönderen kendi deneyimini örnek verip alıcının düşüncesine karşı çıkar ve son cümlede ana düşünceyi söyler. Konu “okumak” olabilir ama ana düşünce tam bir yargı cümlesidir." }
  ]
};
