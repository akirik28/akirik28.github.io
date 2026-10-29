/* Kitpath not defteri · fe104 · FEL.10.2.2 Mantık ve argümantasyon: öncül, sonuç, safsata
   Kaynak: felsefe-11-sinav1/veri.js (MUHTEMEL 2.2, MC, PROVA) ve takip/sinav-kitleri/felsefe/KAYNAK.md. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "fe104",
  amac: "Bu konu mantığı ve argümantasyonu anlatıyor: önerme, akıl yürütme türleri, öncül ile sonucu ayırma ve safsatalar. Sınavda bir metni P1, P2, C olarak yazmayı ve safsatayı adıyla bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Mantık ve akıl ilkeleri",
      kisa: "Mantık tutarlı ve doğru düşünmeyi sağlar; dört ilke temeldir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Mantık", tr: "doğru düşünmenin yöntemi", tanim: "Düşünme yasalarının bilimi. Bilinenden bilinmeyene ulaştırır, zihni hatalardan korur.", ornek: "Mantıklı düşünmek, tutarlı ve doğru düşünmektir." }
          ] },
        { tip: "tablo", head: ["İlke", "Kısaca", "Örnek"], rows: [
            ["Özdeşlik", "Terimin anlamı baştan sona aynı kalır (A, A'dır)", "Tüm öğrenciler sınava girer. Zeynep öğrenci; Zeynep de girer."],
            ["Çelişmezlik", "Çelişen iki önermeden biri doğruysa öteki yanlıştır", "“Bütün balıklar suda yaşar.” ile “Bazı balıklar karada yaşar.”"],
            ["Üçüncü hâlin imkânsızlığı", "Ya doğrudur ya yanlıştır; üçüncü seçenek yok", "Bu sayı ya tektir ya çifttir."],
            ["Yeter-sebep", "Yeterli neden olmadan hiçbir yargı doğru kabul edilemez", "Bütün memeliler akciğerle solur; yunus memelidir; yunus akciğerle solur."]
          ] },
        { tip: "tuzak", metin: "“Özgürlük” önce “istediğini yapabilmek”, sonra “yasalara uymak” anlamında kullanılıyor.", yanlis: "Bu, çelişmezlik ilkesine aykırıdır.", dogru: "Terimin anlamı kaydı: özdeşlik ilkesine aykırı. Çelişmezliğe aykırı olan: “Bütün balıklar suda yaşar” ile “Bazı balıklar suda yaşamaz”ı birlikte doğru saymak." }
      ]
    },
    {
      baslik: "Önerme, doğruluk, geçerlilik",
      kisa: "Önerme doğru ya da yanlış bir yargı bildirir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Önerme", maddeler: ["Doğru ya da yanlış bir yargı bildirir", "Yanlış yargı da önermedir", "Bileşik önerme: ve, veya, ise, ancak ve ancak"] },
          sag: { ikon: "🚫", baslik: "Önerme değil", maddeler: ["Soru, emir, dilek, ünlem cümleleri", "Doğru ya da yanlış denemez"] },
          oyun: [
            { metin: "İstanbul, Türkiye'nin nüfusu en kalabalık şehridir.", cevap: "sol", neden: "Yargı bildiriyor." },
            { metin: "Bilgisayarı kapat.", cevap: "sag", neden: "Emir cümlesi." },
            { metin: "Bir hafta altı gündür.", cevap: "sol", neden: "Yanlış ama yargı bildiriyor: önermedir." },
            { metin: "Yarın kar yağacak mı?", cevap: "sag", neden: "Soru cümlesi." },
            { metin: "Keşke yanımda olsan.", cevap: "sag", neden: "Dilek cümlesi." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Doğruluk", tr: "gerçeğe uygunluk", tanim: "Önermenin bildirdiği yargının gerçeğe uygun olması.", ornek: "Su 0 °C'de donar." },
            { ikon: "🔗", terim: "Tutarlılık", tr: "çelişkisizlik", tanim: "Önermelerin hepsi doğru ve aralarında çelişki yok; birbirini destekler.", ornek: "Kitap okumak kelime dağarcığını geliştirir. Gelişmiş kelime dağarcığı etkili iletişim sağlar." },
            { ikon: "↔️", terim: "Çelişiklik", tr: "biri doğruysa öteki yanlış", tanim: "Biri doğruyken ötekinin zorunlu olarak yanlış olduğu önermeler.", ornek: "Bütün kuşlar uçar. / Bazı kuşlar (devekuşu) uçamaz." },
            { ikon: "⛓️", terim: "Geçerlilik", tr: "zorunlu çıkarım", tanim: "Sonucun öncüllerden zorunlu olarak çıkması.", ornek: "Bütün metaller elektriği iletir. Demir metaldir. O hâlde demir elektriği iletir." }
          ] },
        { tip: "tuzak", metin: "Geçerli bir akıl yürütmenin sonucu hep doğru mu?", yanlis: "Geçerli ise sonuç doğrudur.", dogru: "Geçerlilik biçimle ilgilidir. Öncül yanlışsa akıl yürütme geçerli olsa da sonuç yanlış olabilir." }
      ]
    },
    {
      baslik: "Akıl yürütme türleri",
      kisa: "Tümdengelim zorunlu sonuç verir; tümevarım ve analoji olası sonuç.",
      bloklar: [
        { tip: "tablo", head: ["Tür", "Yön", "Sonuç", "Örnek"], rows: [
            ["Tümdengelim", "Genelden özele", "Öncüller doğruysa zorunlu", "Bütün gezegenler Güneş çevresinde döner; Dünya gezegendir; o hâlde Dünya döner."],
            ["Tümevarım", "Tekil örneklerden genele", "Olası; yeni gözlem yanlışlayabilir", "Gözlenen bütün kargalar siyah; demek ki bütün kargalar siyahtır."],
            ["Analoji", "Benzerlikten benzerliğe", "Olası", "İspanya ve İtalya'da zeytincilik var; Türkiye'de de olur."]
          ] },
        { tip: "ikili", sol: { ikon: "⬇️", baslik: "Tümdengelim", maddeler: ["Genelden özele", "Öncüller doğruysa sonuç zorunlu"] },
          sag: { ikon: "⬆️", baslik: "Tümevarım", maddeler: ["Tekil örneklerden genele", "Sonuç olası"] },
          oyun: [
            { metin: "Bütün memeliler akciğerle solur; yunus memelidir; o hâlde yunus akciğerle solur.", cevap: "sol", neden: "Genel yargıdan özele." },
            { metin: "Bugüne kadar gördüğüm her kuğu beyazdı; demek ki bütün kuğular beyazdır.", cevap: "sag", neden: "Tekil gözlemlerden genele." },
            { metin: "Demir, bakır ve çinko ısınınca genleşir; demek ki bütün metaller genleşir.", cevap: "sag", neden: "Örneklerden genel yargı." },
            { metin: "Bütün gezegenler Güneş çevresinde döner; Dünya gezegendir; o hâlde Dünya da döner.", cevap: "sol", neden: "Genel yargıdan özele." }
          ] },
        { tip: "tuzak", metin: "Tümevarımın zayıf yönü sorulur.", yanlis: "Çok örnek gözlendiyse sonuç kesindir.", dogru: "Sonuç sınırlı gözleme dayanır; tek bir karşı örnek (siyah kuğu) genellemeyi yanlışlar. Sonuç kesin değil, olasıdır." }
      ]
    },
    {
      baslik: "Görüş, argüman ve standart form",
      kisa: "Standart formda önce öncüller P1, P2; sonra sonuç C yazılır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "💬", baslik: "Görüş", maddeler: ["Kişisel yargı", "Kanıt gerektirmez"] },
          sag: { ikon: "🧱", baslik: "Argüman", maddeler: ["Öncüllerden sonuç çıkararak görüşü güçlendirir", "Gerekçe verir: çünkü, bu yüzden"] },
          oyun: [
            { metin: "Bence kitaplar dijital içeriklerden daha değerlidir.", cevap: "sol", neden: "Kişisel yargı; gerekçe yok." },
            { metin: "Düzenli kitap okuyan öğrenciler sınavlarda daha başarılı olur, çünkü okuma kavrama ve analiz becerisini geliştirir.", cevap: "sag", neden: "Gerekçe ve sonuç var." },
            { metin: "Yabancı dil öğrenmeye en iyi çocuk yaşlarında başlanmalıdır.", cevap: "sol", neden: "Kanıtsız kişisel yargı." }
          ] },
        { tip: "formul", parcalar: [
            { t: "P1", alt: "öncül: kanıtlayan" }, "+",
            { t: "P2", alt: "öncül: kanıtlayan" }, "→",
            { t: "C", alt: "sonuç: kanıtlanan, ana iddia" }
          ], aciklama: "Sonucu “bu nedenle, bu yüzden, o hâlde, demek ki” haber verir. Öncülü “çünkü, zira” haber verir." },
        { tip: "adimlar", baslik: "Metin → standart form", adimlar: [
            { baslik: "Metin", metin: "Okul bahçesine ağaç dikilince havadaki toz azaldı. Öğrenciler teneffüste gölgede vakit geçiriyor. Bu yüzden ağaç dikmek okul iklimini iyileştiren isabetli bir uygulamadır." },
            { baslik: "P1", metin: "Bahçeye dikilen ağaçlar havadaki toz oranını azaltır." },
            { baslik: "P2", metin: "Ağaçlar öğrencilere teneffüste gölgeli alan sağlar." },
            { baslik: "C", metin: "Okul bahçelerine ağaç dikmek okul iklimini iyileştiren isabetli bir uygulamadır." }
          ] },
        { tip: "tuzak", metin: "Metin “Son yıllarda uzaktan çalışma yaygınlaşıyor.” diye başlıyor.", yanlis: "İlk cümle her zaman P1, sonuç her zaman sondadır.", dogru: "Metnin savunduğu ana iddia sonuçtur; yeri değişebilir. Giriş ya da bağlam cümlesi her zaman öncül sayılmaz." }
      ]
    },
    {
      baslik: "Anlamı değiştirmeden yeniden ifade",
      kisa: "İddiayı ve gerekçeleri kendi cümlenle yaz; ekleme ve abartı yok.",
      bloklar: [
        { tip: "not", metin: "Metin: “Hız yapan sürücüler çoğaldı. Aşırı hız kazaları sıklaştırıp ağırlaştırıyor. Bu yüzden hız denetimleri artırılmalı.”" },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Doğru yeniden ifade", maddeler: ["İddiayı ve gerekçeleri korur", "Kendi kelimelerinle yazılır"] },
          sag: { ikon: "🚫", baslik: "Hatalı", maddeler: ["Yeni bilgi, abartı, yorum ekler", "Gerekçeyi atlar ya da metni aynen kopyalar"] },
          oyun: [
            { metin: "Hız yapan sürücüler çoğaldı; bu kazaları sıklaştırıp ağırlaştırdığı için denetimler artırılmalı.", cevap: "sol", neden: "İddia ve iki gerekçe korunmuş." },
            { metin: "Bütün sürücüler hız yapıyor; cezalar çok ağırlaştırılmalı.", cevap: "sag", neden: "“Bütün” abartısı ve yeni iddia." },
            { metin: "Hız denetimleri artırılmalı.", cevap: "sag", neden: "Gerekçeler atlanmış." },
            { metin: "Hız yapanların çoğalması kazaları artırıp ağırlaştırıyor; o hâlde denetimler artırılmalı.", cevap: "sol", neden: "Anlam aynı, cümleler kendi kelimelerin." }
          ] },
        { tip: "tuzak", metin: "Daha etkili yazmak istersin.", yanlis: "İddiayı biraz güçlendir: “bazı” yerine “bütün” yaz.", dogru: "Anlamı değiştirme: yeni bilgi, abartı ya da yorum ekleme; “bazı”yı “bütün” yapma." }
      ]
    },
    {
      baslik: "Safsata nedir?",
      kisa: "Görünüşte ikna edici ama mantıken hatalı çıkarımdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚠️", terim: "Safsata", tr: "yanlış çıkarım", tanim: "Düşünceyi ortaya koyarken ya da anlarken yapılan yanlış çıkarım. Bazen farkında olmadan, bazen ikna etmek ya da aldatmak için bilinçli yapılır.", ornek: "Reklam, haber, sosyal medya ve günlük tartışmalarda karşımıza çıkar." }
          ] },
        { tip: "harita", merkez: "13 safsata (hafıza kancası)", dallar: [
            { baslik: "Kişiye saldırı", alt: "Niteliksel adam karalama · Sen de" },
            { baslik: "Otorite ve kalabalık", alt: "İrrasyonel otorite · Otoriteye başvurma · Ortak tutuma başvurma" },
            { baslik: "Duyguya ve baskıya", alt: "Duygu sömürüsü · İmalı soru" },
            { baslik: "Yanlış genelleme", alt: "Genelleştirme · Yetersiz örnek" },
            { baslik: "Yanlış bağ", alt: "Yanlış sebep · Alakasız sonuç" },
            { baslik: "Kanıt yerine döngü", alt: "Kısır döngü · İspatlama mecburiyeti" }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🔁", baslik: "Popülerliğe başvurma", metin: "Aynı safsata: ortak tutuma başvurma." },
            { ikon: "🔁", baslik: "Nedensellik hatası", metin: "Aynı safsata: yanlış sebep." },
            { ikon: "✂️", baslik: "Cımbızlama", metin: "Yalnız işine gelen veriyi seçmek: büyüyen tek buzulu gösterip küresel ısınmayı inkâr etmek." },
            { ikon: "⚖️", baslik: "Yanlış analoji", metin: "Yanlış benzetmeden sonuç çıkarmak: “Bebekler çiçek gibidir.”" }
          ] }
      ]
    },
    {
      baslik: "13 safsata kartı",
      kisa: "Adını yaz, bir cümleyle gerekçelendir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👤", terim: "Niteliksel adam karalama", tr: "kişinin niteliğine saldırı", tanim: "Görüşe değil, kişinin niteliğine saldırmak.", ornek: "Onun ekonomi görüşüne güvenmem, üniversite bile okumadı." },
            { ikon: "🔄", terim: "Sen de", tr: "tu quoque", tanim: "İddiaya, karşı tarafın tutarsızlığını göstererek cevap vermek.", ornek: "Kurallara uymalıyız diyorsun ama geçen hafta sen de hız yaptın." },
            { ikon: "🧵", terim: "İrrasyonel otorite", tr: "konu dışı kişi", tanim: "Konu dışı bir kişinin görüşüne dayanarak iddiayı savunmak.", ornek: "Terzim bu yatırımın kârlı olacağını söyledi, hemen para yatırayım." },
            { ikon: "🎓", terim: "Otoriteye başvurma", tr: "saygı ya da korku", tanim: "Otoriteye duyulan saygı ya da korkuyla iddiayı sorgusuz kabul etmek.", ornek: "Koca profesör yanlış mı söyleyecek, tartışmaya gerek yok." },
            { ikon: "👥", terim: "Ortak tutuma başvurma", tr: "çoğunluk doğrudur", tanim: "Çoğunluğun yaptığını doğru saymak.", ornek: "Herkes bu diziyi izliyor, demek ki gerçekten kaliteli bir yapım." },
            { ikon: "💧", terim: "Duygu sömürüsü", tr: "acıma duygusu", tanim: "Kabul ettirmek için karşıdakinin acıma duygusundan yararlanmak.", ornek: "Bu ürünü almazsanız küçük işletmemiz kapanabilir, lütfen destek olun." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Genelleştirme", tr: "istisnadan kurala sıçrama", tanim: "Özel ya da istisnai durumdan genel bir kurala sıçramak.", ornek: "İki arkadaşım kursa gitmeden akıcı İngilizce öğrendi; demek ki kursa hiç gerek yok." },
            { ikon: "🐈", terim: "Yetersiz örnek", tr: "temsil etmeyen tek örnek", tanim: "Bütünü temsil etmeyen tek örnekle genelleme yapmak.", ornek: "Komşumun kedisi aşıdan sonra hastalandı; aşılar kedilere zararlı olmalı." },
            { ikon: "📱", terim: "Yanlış sebep", tr: "yanlış neden", tanim: "Yetersiz delille bir olayı diğerinin nedeni sanmak.", ornek: "Yeni telefonu alınca sınavdan düşük not aldım; telefon beni başarısız yaptı." },
            { ikon: "🧲", terim: "Alakasız sonuç", tr: "ilgisiz sonuç", tanim: "İddiayla ilgisi olmayan bir sonuca varmak.", ornek: "Mehmet çok çalışkan, o hâlde sınıf başkanı o olmalı." },
            { ikon: "♻️", terim: "Kısır döngü", tr: "sonuç öncülde saklı", tanim: "Sonucun, önermenin içinde zaten var olması.", ornek: "Bu marka güvenilirdir çünkü kendileri öyle söylüyor." },
            { ikon: "🧪", terim: "İspatlama mecburiyeti", tr: "kanıtlanamadıysa", tanim: "Yanlışlığı kanıtlanamayanı doğru, doğruluğu kanıtlanamayanı yanlış saymak.", ornek: "İlacın yan etkisi olmadığı kanıtlanamadı, o hâlde zararlıdır." },
            { ikon: "❓", terim: "İmalı soru", tr: "baştan suçlayan soru", tanim: "Cevap vereni baştan suçlu duruma düşüren soru sormak.", ornek: "Ödevini kopyalamayı ne zaman bırakacaksın?" }
          ] },
        { tip: "ikili", sol: { ikon: "🧵", baslik: "İrrasyonel otorite", maddeler: ["Kişi konunun uzmanı değil", "Örnek: oyuncu, terzi, futbolcu"] },
          sag: { ikon: "🎓", baslik: "Otoriteye başvurma", maddeler: ["Kişi uzman ya da saygın", "Gerekçe yerine saygınlığı kullanılır"] },
          oyun: [
            { metin: "Terzim bu yatırımın kârlı olacağını söyledi, hemen para yatırayım.", cevap: "sol", neden: "Terzi bu konunun uzmanı değil." },
            { metin: "Koca profesör yanlış mı söyleyecek, tartışmaya gerek yok.", cevap: "sag", neden: "Gerekçe yok; saygınlık kullanılıyor." },
            { metin: "Ünlü bir oyuncu bu iksiri öneriyor, ben de alacağım.", cevap: "sol", neden: "Oyuncu konunun uzmanı değil." },
            { metin: "Diş hekimi önerdi, o hâlde bu diş macunu en iyisidir.", cevap: "sag", neden: "Uzmanın sözü gerekçe yerine geçiriliyor." }
          ] },
        { tip: "tuzak", metin: "İki safsata kişiye yönelir.", yanlis: "Kişiye yönelen her cevap “sen de” safsatasıdır.", dogru: "Sen de: “sen de yapıyorsun” diyerek tutarsızlık gösterilir. Niteliksel adam karalama: yaş, eğitim, kimlik gibi niteliklere saldırılır." }
      ]
    },
    {
      baslik: "Sınavda böyle yaz",
      kisa: "Önce P1, P2, C; sonra safsatanın adı ve gerekçesi.",
      bloklar: [
        { tip: "ornek", baslik: "Can ve Deniz", durum: "Can: “Şekerli yiyecekler kısa süreli enerji verir, sonra enerji düşer ve dikkat dağılır. Dikkatin dağılması ders başarısını düşürür. Bu yüzden kantinde şekerli yiyecekler yerine sağlıklı yiyecekler satılmalı.” Deniz: “Sen geçen hafta iki çikolata yedin; konuşmaya hakkın yok.”",
          adimlar: [
            "P1: Şekerli yiyeceklerin enerjisi kısa sürer, sonra dikkat dağılır.",
            "P2: Dikkatin dağılması ders başarısını düşürür.",
            "C: Kantinde şekerli yiyecekler yerine sağlıklı yiyecekler satılmalı.",
            "Safsata: sen de (tu quoque); Deniz gerekçeleri değil, Can'ın tutarsızlığını hedef alıyor."
          ],
          sonuc: "Model cevap: Şekerli yiyeceklerin enerjisi çabuk düşüp dikkati dağıttığı ve dağılan dikkat ders başarısını azalttığı için kantinde bunların yerine sağlıklı yiyecekler bulunmalıdır. Deniz'in cevabı “sen de” safsatasıdır. Deniz gerekçeleri tartışmak yerine Can'ın kendi davranışının tutarsızlığına saldırıyor." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Akıl ilkeleri: özdeşlik, çelişmezlik, üçüncü hâlin imkânsızlığı, yeter-sebep",
            "Önerme: doğru/yanlış yargı; soru, emir önerme değil",
            "Tümdengelim zorunlu; tümevarım ve analoji olası",
            "P1, P2, C: “bu nedenle” sonuç, “çünkü” öncül",
            "13 safsata: adını yaz, bir cümle gerekçe"
          ] }
      ]
    }
  ],
  sorular: [
    { q: "“Hız yapan sürücüler çoğaldı. Aşırı hız kazaları sıklaştırıp ağırlaştırıyor. Bu yüzden hız denetimleri artırılmalı.” Bu argümanı anlamını değiştirmeden yeniden ifade eden cümle hangisidir?",
      opts: ["Bütün sürücüler hız yapıyor, bu yüzden cezalar çok ağırlaştırılmalı.", "Hız yapan sürücüler çoğaldı ve bu, kazaları sıklaştırıp ağırlaştırıyor; bu nedenle denetimler artırılmalı.", "Hız denetimleri artırılmalı.", "Kazalar çoğaldığı için sürücü sayısı azaltılmalı."],
      a: 1,
      why: "Doğru cümle iddiayı ve iki gerekçeyi korur. İlk şık “bütün” ve “ceza” ekleyerek anlamı değiştirir; üçüncü şık gerekçeleri atlar; dördüncü şık yeni bir iddia ekler." },
    { q: "“Spor, ders dikkatini artırır; çünkü spor yapan öğrenciler daha iyi uyur ve iyi uyuyanlar derste daha dikkatlidir.” Bu argümanın sonucu (C) hangisidir?",
      opts: ["Spor yapan öğrenciler daha iyi uyur.", "İyi uyuyan öğrenciler derste daha dikkatlidir.", "Spor, ders dikkatini artırır.", "Öğrenciler her gün spor yapmalıdır."],
      a: 2,
      why: "“Çünkü” öncülü haber verir; metnin savunduğu ana iddia, yani “spor, ders dikkatini artırır”, sonuçtur ve burada başta durur. Dördüncü şık metinde olmayan yeni bir iddiadır." },
    { q: "Mert: “Uygulamada fazla zaman harcama.” Ela: “Sen geçen gün üç saat oyun oynadın, bana akıl verme.” Ela'nın cevabındaki safsata türü hangisidir?",
      opts: ["Niteliksel adam karalama", "Duygu sömürüsü", "Yanlış sebep", "Sen de"],
      a: 3,
      why: "Ela, Mert'in gerekçesini tartışmak yerine onun kendi tutarsızlığını öne sürüyor: sen de (tu quoque). Niteliksel adam karalama en çekici yanlıştır; o, kişinin yaşı, eğitimi, kimliği gibi niteliklerine saldırır." },
    { q: "“Dünya ve Mars, Güneş'in çevresinde dönen kayalık gezegenlerdir. Dünya'da yaşam vardır. O hâlde Mars'ta da yaşam olmalıdır.” Bu akıl yürütmenin türü hangisidir?",
      opts: ["Tümdengelim", "Analoji", "Tümevarım", "Çelişme"],
      a: 1,
      why: "Bazı yönlerden benzeyen iki şeyden birinin başka bir özelliğinin ötekinde de bulunacağı sonucuna varılıyor: analoji. Sonuç olasıdır. Tümdengelim değildir, çünkü genel bir yargıdan özele gidilmiyor." },
    { q: "I. Bugüne kadar gördüğüm her kuğu beyazdı; demek ki bütün kuğular beyazdır. II. Bütün memeliler akciğerle solur; yunus memelidir; o hâlde yunus akciğerle solur. III. İspanya ve İtalya'da zeytincilik yapılıyor; Türkiye'de de yapılır. Hangilerinde sonuç öncüllerden zorunlu olarak çıkar?",
      opts: ["Yalnız II", "Yalnız I", "I ve III", "I, II ve III"],
      a: 0,
      why: "Yalnız II tümdengelimdir: genel yargı yunusu da kapsar, sonuç zorunludur. I tümevarım, III analojidir; ikisinde de sonuç yalnızca olasıdır, tek bir karşı örnek ya da fark sonucu yanlışlayabilir." }
  ]
};
