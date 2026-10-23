/* Kitpath not defteri · py502 · 5.2 Pozitif Psikoloji
   Kaynak: College Board CED, Topic 5.2 (5.2.A, 5.2.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py502",
  amac: "Bu konu pozitif psikolojiyi anlatıyor: yalnızca sorunlara değil, insanı iyi oluşa, dayanıklılığa ve olumlu duygulara götüren etkenlere bakar. Şükranın etkisini, karakter güçlerini ve altı erdemi, travma sonrası büyümeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Pozitif psikoloji neye bakar?",
      kisa: "Pozitif psikoloji, iyi oluşa ve dayanıklılığa götüren etkenleri arar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌞", terim: "Positive psychology", tr: "pozitif psikoloji", tanim: "İyi oluşa (*well-being*), dayanıklılığa, olumlu duygulara ve ruh sağlığına götüren etkenleri belirlemeye çalışan yaklaşım.", ornek: "Okulda öğrencileri neyin güçlendirdiğini araştırmak." },
            { ikon: "🧗", terim: "Resilience", tr: "dayanıklılık (psikolojik)", tanim: "Zorluk karşısında toparlanabilme ve uyum sağlama kapasitesi.", ornek: "Başarısız bir sınavdan sonra yeniden çalışmaya başlamak." },
            { ikon: "🙂", terim: "Subjective well-being", tr: "öznel iyi oluş", tanim: "Kişinin kendi hayatından ne kadar memnun ve mutlu olduğuna dair kendi değerlendirmesi.", ornek: "\"Hayatımdan genel olarak memnunum.\"" }
          ] },
        { tip: "ikili", sol: { ikon: "🩹", baslik: "Sorunlara odaklı bakış", maddeler: ["Bozukluk ve sıkıntıyı anlamak", "\"Neyin yanlış gittiği\""] },
          sag: { ikon: "🌱", baslik: "Pozitif psikoloji", maddeler: ["İyi oluş ve güçlü yönler", "\"Neyin iyi gittiği\""] },
          oyun: [
            { metin: "Okulda kaygı bozukluğunun nedenlerini araştırmak.", cevap: "sol", neden: "Sorunun kaynağını arıyor." },
            { metin: "Hangi alışkanlıkların öğrencilerin iyi oluşunu artırdığını araştırmak.", cevap: "sag", neden: "İyi oluşu artıran etkenlere bakıyor: pozitif psikoloji." },
            { metin: "Zor dönemlerden güçlenerek çıkan öğrencilerde ortak özellikleri incelemek.", cevap: "sag", neden: "Dayanıklılığı inceliyor: pozitif psikoloji." }
          ] }
      ]
    },
    {
      baslik: "Şükran iyi oluşu artırır",
      kisa: "Şükran ifade etmek, öznel iyi oluşu artırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🙏", terim: "Gratitude", tr: "şükran, minnettarlık", tanim: "İyi olan şeyler için minnet duyup bunu ifade etmek. Olumlu bir öznel deneyimdir ve öznel iyi oluşu artırır.", ornek: "Arkadaşına yardım ettiği için içten bir teşekkür mesajı yazmak." }
          ] },
        { tip: "grafik", baslik: "Her akşam üç iyi şeyi yazmak (şematik örnek)", xlabel: "Hafta", ylabel: "Öznel iyi oluş", xmax: 8, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }, { v: 7, label: "7" }],
          ogeler: [
            { id: "k", tip: "egri", renk: 1, noktalar: [[1, 5], [2, 5.1], [3, 5], [4, 5.2], [5, 5.1], [6, 5], [7, 5.1]] },
            { id: "g", tip: "egri", renk: 0, noktalar: [[1, 5], [1.01, 5], [1.02, 5], [1.03, 5], [1.04, 5], [1.05, 5], [1.06, 5]], gizli: true },
            { id: "yk", tip: "yazi", x: 5.5, y: 3.8, metin: "kontrol grubu", gizli: true },
            { id: "yg", tip: "yazi", x: 5, y: 8.8, metin: "şükran grubu", gizli: true }
          ],
          durumlar: [
            { metin: "İki grup başlangıçta aynı düzeyde. Kontrol grubunda iyi oluş neredeyse sabit kalıyor.", goster: ["yk"] },
            { metin: "Şükran grubu her akşam minnettar olduğu üç şeyi yazıyor.", goster: ["g", "yg"] },
            { metin: "Haftalar geçtikçe şükran grubunun iyi oluşu ==yükseliyor==.", set: { g: { noktalar: [[1, 5], [2, 5.8], [3, 6.5], [4, 7.1], [5, 7.6], [6, 7.9], [7, 8.1]] } } }
          ] },
        { tip: "adimlar", baslik: "Şükran alışkanlığı için basit bir yol", adimlar: [
            { baslik: "Fark et", metin: "Gün içinde iyi giden küçük şeyleri not et." },
            { baslik: "Yaz", metin: "Akşam bunlardan üçünü yaz ve neden iyi olduğunu düşün." },
            { baslik: "İfade et", metin: "Birine teşekkür etmek de şükran ifade etmenin bir yoludur." }
          ] }
      ]
    },
    {
      baslik: "Karakter güçleri ve altı erdem",
      kisa: "Güçlü yönlerini kullanmak mutluluğu artırır; güçler altı erdemde toplanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💪", terim: "Signature strengths", tr: "imza güçler", tanim: "Kişinin en belirgin karakter güçleri. Bunları kullanan kişiler daha yüksek mutluluk ve öznel iyi oluş bildirir.", ornek: "Meraklı biri için yeni şeyler öğrenmek, nazik biri için başkalarına yardım etmek." }
          ] },
        { tip: "tablo", baslik: "Karakter güçlerinin sınıflandırması: altı erdem", head: ["Erdem", "Güçlere örnek"], rows: [
            ["*Wisdom* (bilgelik)", "Merak, yaratıcılık, öğrenme sevgisi"],
            ["*Courage* (cesaret)", "Cesaret, dürüstlük, azim"],
            ["*Humanity* (insanlık)", "Sevgi, nezaket, sosyal zekâ"],
            ["*Justice* (adalet)", "Adalet, liderlik, takım çalışması"],
            ["*Temperance* (ölçülülük)", "Bağışlama, alçakgönüllülük, öz denetim"],
            ["*Transcendence* (aşkınlık)", "Şükran, umut, mizah, güzelliğe hayranlık"]
          ], not: "Gösterilen örnekler sınıflandırmanın bir kısmıdır. Sınavda altı erdemin adını ve örnek güçleri bilmen yeterlidir." },
        { tip: "tuzak", metin: "İsimlerden anlamı çıkarmak zor olabilir; anahtar güçlere bak.", yanlis: "Öz denetim *courage* erdemine, şükran *humanity* erdemine aittir.", dogru: "==Öz denetim *temperance*==, ==şükran *transcendence*== erdemindedir; *courage*'da dürüstlük, azim; *humanity*'de sevgi, nezaket yer alır." }
      ]
    },
    {
      baslik: "Travma sonrası büyüme",
      kisa: "Bazı kişiler zorlu bir deneyimden sonra olumlu değişimler yaşayabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌱", terim: "Posttraumatic growth", tr: "travma sonrası büyüme", tanim: "Travma ya da ağır stres yaşadıktan sonra ortaya çıkabilen olumlu bir öznel deneyim: kişinin yaşamına ve kendine dair olumlu değişimler.", ornek: "Ciddi bir hastalığı atlatıp ilişkilerine daha çok değer vermeye başlamak." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🤝", baslik: "İlişkiler", metin: "Sevdiklerine yakınlaşmak." },
            { ikon: "🌅", baslik: "Yeni olasılıklar", metin: "Yeni hedefler ve yollar görmek." },
            { ikon: "🛡️", baslik: "Kişisel güç", metin: "\"Bunu atlattım, daha güçlüyüm.\"" },
            { ikon: "💛", baslik: "Hayata takdir", metin: "Küçük şeylerin değerini bilmek." }
          ] },
        { tip: "tuzak", metin: "Büyüme olabilir; ama zorunlu değildir ve acıyı küçültmez.", yanlis: "Travma yaşayan herkes mutlaka büyür; travma aslında iyi bir şeydir.", dogru: "==Büyüme bir olasılıktır, kural değil.== Travma gerçek bir acı ve zorluktur; bazı kişiler destekle zamanla olumlu değişimler de yaşayabilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Positive psychology*: iyi oluşa, dayanıklılığa, olumlu duygulara ve ruh sağlığına götüren etkenleri arar.",
            "*Resilience*: zorluk karşısında toparlanabilme; *subjective well-being*: kişinin kendi memnuniyeti.",
            "*Gratitude* ifade etmek öznel iyi oluşu artırır.",
            "*Signature strengths*'i kullanan kişiler daha mutlu olduğunu bildirir.",
            "Altı erdem: *wisdom*, *courage*, *humanity*, *justice*, *temperance*, *transcendence*.",
            "*Posttraumatic growth*: zorlu bir deneyimden sonra olumlu değişimler yaşanabilir; herkes yaşamaz, acı da gerçektir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir okul psikoloğu, \"Hangi alışkanlıklar ve güçlü yönler zor dönemlerden geçen öğrencilerin iyi oluşunu ve dayanıklılığını artırır?\" sorusunu araştırıyor. Bu araştırma sorusu hangi yaklaşımla en uyumludur?",
      opts: ["Yalnızca bozuklukların nedenlerini inceleyen yaklaşım", "Davranışçı yaklaşım", "Pozitif psikoloji", "Psikodinamik yaklaşım"],
      a: 2,
      why: "İyi oluşu ve dayanıklılığı artıran etkenleri aramak pozitif psikolojinin özelliğidir. En çekici yanlış şık D: psikodinamik yaklaşım bilinçdışı çatışmalara odaklanır; soru böyle bir çatışma sormuyor." },
    { q: "Bir araştırmacı 40 kişiyi iki gruba ayırıyor: bir grup her akşam minnettar olduğu üç şeyi yazıyor, kontrol grubu günlük olayları yazıyor. Sekiz hafta sonra sonuçlar tabloda. Bu veriler en iyi hangi sonuca işaret eder?",
      fig: { type: "table", caption: "Ortalama öznel iyi oluş puanı (10 üzerinden)", head: ["Grup", "Başlangıç", "8. hafta"], rows: [["Şükran", "5,0", "7,6"], ["Kontrol", "5,1", "5,3"]] },
      opts: ["Şükran ifade etmek öznel iyi oluşu artırır", "Şükran ifade etmek iyi oluşu düşürür", "Kontrol grubu şükran grubundan daha mutlu olmuştur", "İki grup arasında fark yoktur"],
      a: 0,
      why: "Şükran grubunun puanı 5,0'dan 7,6'ya çıkarken kontrol grubu neredeyse değişmedi: şükran öznel iyi oluşu artırıyor. En çekici yanlış şık D: iki grubun başlangıç puanları benzer, fakat 8. hafta puanları belirgin biçimde farklı." },
    { q: "Selin okuldaki takım çalışmalarında hep adil davranıyor, görev dağılımını yapıyor ve takımı yönetiyor. Selin'in bu güçleri hangi erdem kategorisinde yer alır?",
      opts: ["*Wisdom*", "*Courage*", "*Temperance*", "*Justice*"],
      a: 3,
      why: "Adalet, liderlik ve takım çalışması *justice* erdemine aittir. En çekici yanlış şık C: *temperance* bağışlama, alçakgönüllülük ve öz denetim gibi güçleri kapsar." },
    { q: "Ciddi bir trafik kazasından sonra uzun bir tedavi gören Burak, iyileşince ailesiyle ilişkilerine daha çok değer vermeye ve yeni hedefler belirlemeye başlıyor. Bu durum hangi kavramı en iyi örnekler?",
      opts: ["*Distress*", "*Posttraumatic growth*", "*Relative deprivation*", "*Reaction formation*"],
      a: 1,
      why: "Travmatik bir deneyimden sonra yaşanan olumlu değişim *posttraumatic growth*'tur. En çekici yanlış şık A: *distress* yıpratıcı stresi anlatır; burada olumlu bir değişim var." },
    { q: "Ayşe en belirgin yönlerinin merak ve nezaket olduğunu fark ediyor. Günlük hayatında bu iki gücü daha sık kullandığında kendini daha mutlu hissediyor. Bu durum pozitif psikolojide hangi bulguyla uyumludur?",
      opts: ["Şükran, iyi oluşu azaltır", "Kişi güçlerini kullandıkça öznel iyi oluşu artar", "İyi oluş yalnızca dış ödüllere bağlıdır", "Travma sonrası büyüme herkes için kesindir"],
      a: 1,
      why: "İmza güçleri kullanan kişiler daha yüksek mutluluk ve öznel iyi oluş bildirir. En çekici yanlış şık C: Ayşe'nin mutluluğu dış ödülden değil, kendi güçlerini kullanmaktan geliyor." }
  ]
};
