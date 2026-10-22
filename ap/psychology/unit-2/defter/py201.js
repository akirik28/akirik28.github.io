/* Kitora not defteri · py201 · 2.1 Algı
   Kaynak: AP Psychology CED 2024, Topic 2.1 (2.1.A.1–5, 2.1.B.1–4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py201",
  amac: "Bu konu *perception* yani algıyı anlatıyor: beyin duyu verisini nasıl anlamlandırır? Algının veriden mi beklentiden mi başladığını, Gestalt ilkelerini, derinlik ipuçlarını, sabitlikleri ve dikkatin neleri kaçırabileceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Algı iki yönden gelir: *bottom-up* ve *top-down*",
      kisa: "*Bottom-up* veriden, *top-down* beklentiden başlar; algı ikisinin karışımıdır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⬆️", baslik: "*Bottom-up processing*", maddeler: ["Duyu verisinden başlar: çizgiler, renkler, sesler", "Parçalardan bütüne doğru kurulur"] },
          sag: { ikon: "⬇️", baslik: "*Top-down processing*", maddeler: ["Beklenti ve önceki bilgiden başlar", "Bütünden parçaları yorumlamaya gider"] },
          oyun: [
            { metin: "Hiç görmediğin bir sembolü çizgi çizgi inceleyip ne olduğunu çözmeye çalışıyorsun.", cevap: "sol", neden: "Elinde yalnızca duyu verisi var: *bottom-up*." },
            { metin: "Bulanık bir tabelada ilk harfleri görünce \"KANTİN\" yazdığını tahmin ediyorsun.", cevap: "sag", neden: "Beklentin eksik veriyi tamamlıyor: *top-down*." },
            { metin: "Sınav kâğıdındaki yazım hatasını okurken beyin kelimeyi doğru okuyor.", cevap: "sag", neden: "Kelimenin ne olması gerektiğini bildiğin için: *top-down*." },
            { metin: "Karanlıkta parmak ucunla bir nesnenin kenarlarını yoklayıp şeklini çıkarıyorsun.", cevap: "sol", neden: "Önce ayrıntılar, sonra bütün: *bottom-up*." }
          ] },
        { tip: "adimlar", baslik: "Bulanık tabela: ikisi birlikte çalışır", adimlar: [
            { baslik: "*Bottom-up*", metin: "Gözün dik çizgiler ve yuvarlak bir şekil yakalar." },
            { baslik: "*Top-down*", metin: "\"Burası okul kantini\" bilgisi, KANTİN kelimesini akla getirir." },
            { baslik: "Algı", metin: "Beyin ikisini birleştirip kelimeyi okur; veri ile beklenti uyuşunca algı hızlı ve rahat olur." }
          ] },
        { tip: "tuzak", metin: "Algı tek bir yoldan oluşmaz. Beklentiler kuvvetliyse yanlış bir şey bile \"doğru\" görülebilir.", yanlis: "Bir algı ya tamamen *bottom-up* ya tamamen *top-down*'dır.", dogru: "İkisi aynı anda çalışır; yalnızca hangisinin baskın olduğu değişir. Dış veriye dayanan *bottom-up*, iç beklentiye dayanan *top-down*'dır." }
      ]
    },
    {
      baslik: "Algıyı iç ve dış faktörler süzer",
      kisa: "İç faktörler şema ve algısal set; dış faktörler bağlam, deneyim ve kültürdür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Schema", tr: "şema", tanim: "Dünyayı düzenlemek için kafamızdaki çerçeve. Beynimiz gördüğü şeyi bu çerçeveye uydurarak yorumlar.", ornek: "\"Sınıf\" şeman sıra, tahta ve öğretmen içerir; boş bir odada da bunları ararsın." },
            { ikon: "🎯", terim: "Perceptual set", tr: "algısal set", tanim: "Belli bir şeyi görmeye ya da duymaya hazır olma eğilimi. ==Ne beklersen onu fark edersin.==", ornek: "Yeni telefon almak isteyince sokakta herkesin elinde aynı model gözüne çarpar." }
          ] },
        { tip: "tablo", baslik: "Aynı şekil, farklı bağlam", head: ["Satır", "Ortadaki aynı şekil", "Nasıl okunur?"], rows: [["A ? C", "belirsiz bir şekil", "B (harfler arasında)"], ["12 ? 14", "aynı belirsiz şekil", "13 (sayılar arasında)"]], not: "Şekil hiç değişmedi; değişen, çevresindeki bağlam. Bağlam, deneyim ve kültürel beklentiler algıyı dışarıdan yönlendiren faktörlerdir." },
        { tip: "ikili", sol: { ikon: "🧠", baslik: "İç faktörler", maddeler: ["*Schema*", "*Perceptual set*"] },
          sag: { ikon: "🌍", baslik: "Dış faktörler", maddeler: ["Bağlam", "Deneyim ve kültürel beklentiler"] },
          oyun: [
            { metin: "Futbolcu bir arkadaşın, kalabalık fotoğrafta önce top oynayanları görüyor.", cevap: "sol", neden: "Önceden hazır olduğu bir şeye bakıyor: *perceptual set*." },
            { metin: "Aynı çizgi, harflerin arasında B, sayıların arasında 13 okunuyor.", cevap: "sag", neden: "Çevredeki bağlam yorumu değiştiriyor." },
            { metin: "Farklı bir kültürden gelen biri, tanımadığı bir jesti farklı yorumluyor.", cevap: "sag", neden: "Kültürel deneyim ve beklentiler dış faktörlerdir." },
            { metin: "\"Kafeler gürültülüdür\" fikri yüzünden sessiz kafeyi bile hareketli algılıyorsun.", cevap: "sol", neden: "Kafandaki şema algıyı süzüyor." }
          ] }
      ]
    },
    {
      baslik: "Gestalt ilkeleri: beyin parçaları bütüne çevirir",
      kisa: "Beyin parçaları düzenler: kapatır, arka plandan ayırır, yakını ve benzeri gruplar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⭕", terim: "Closure", tr: "tamamlama", tanim: "Eksik ya da kesik bir şekli beynin kapatıp tam bir bütün olarak görmesi.", ornek: "Kesik çizgilerle çizilmiş daireyi yine daire olarak görürsün." },
            { ikon: "🖼️", terim: "Figure and ground", tr: "şekil ve zemin", tanim: "Algının bir şeyi öne çıkan nesne (*figure*), geri kalanı arka plan (*ground*) olarak ayırması.", ornek: "Beyaz sayfadaki siyah yazı: yazı şekil, sayfa zemin." },
            { ikon: "👥", terim: "Proximity", tr: "yakınlık", tanim: "Birbirine yakın olan ögeleri tek grup olarak görme.", ornek: "Kantinde yan yana oturanlar \"aynı masa\" gibi algılanır." },
            { ikon: "🔴", terim: "Similarity", tr: "benzerlik", tanim: "Renk, şekil ya da boyut olarak birbirine benzeyen ögeleri gruplama.", ornek: "Aynı renk formalı oyuncular aynı takım sayılır." }
          ] },
        { tip: "ikili", sol: { ikon: "📏", baslik: "*Proximity*", maddeler: ["Gruplama ölçütü: ==konum==, yani aralarındaki mesafe", "Yakın olanlar bir grup"] },
          sag: { ikon: "🎨", baslik: "*Similarity*", maddeler: ["Gruplama ölçütü: ==görünüş==, yani renk ya da şekil", "Benzer olanlar bir grup"] },
          oyun: [
            { metin: "Sıralarda yan yana oturan üç öğrenci tek bir grup gibi görünüyor.", cevap: "sol", neden: "Mesafe yakın: *proximity*." },
            { metin: "Kırmızı ve mavi balonlar karışık dizilmiş, ama gözün kırmızıları kendi arasında gruplayabiliyor.", cevap: "sag", neden: "Renk aynı: *similarity*." },
            { metin: "Aynı aralıkla dizilmiş noktalardan, daha sık duranlar bir küme gibi algılanıyor.", cevap: "sol", neden: "Sıklık, yani yakınlık: *proximity*." },
            { metin: "Beyaz formalı takım ile siyah formalı takım sahada ayrı iki grup görünüyor.", cevap: "sag", neden: "Renk ortaklığı: *similarity*." }
          ] },
        { tip: "tuzak", metin: "*Closure* de *figure-ground* da \"beynin işi kolaylaştırması\" gibi görünür ama farklı sorunları çözer.", yanlis: "Eksik parçayı tamamlayan ilke *figure-ground*'dur.", dogru: "Eksik parçayı tamamlamak ==*closure*==, nesneyi arka plandan ayırmak ==*figure-ground*==. Sınavda iki cümleyi karıştırma." }
      ]
    },
    {
      baslik: "İki gözle derinlik: binoküler ipuçları",
      kisa: "İki gözün verdiği fark ve gözlerin içe dönmesi, nesnenin ne kadar yakın olduğunu söyler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👀", terim: "Retinal disparity", tr: "retina farkı", tanim: "İki gözün retinasına düşen görüntüler arasındaki fark. Nesne yakınsa fark büyük, uzaksa küçüktür.", ornek: "Parmağını yüzüne yaklaştırıp gözlerini sırayla kapatınca parmak sağa sola \"zıplar\"." },
            { ikon: "🔄", terim: "Convergence", tr: "yakınsama", tanim: "Yakındaki bir nesneye bakarken gözlerin içe dönmesi; beyin bu gerginlik ve açıdan uzaklığı çıkarır.", ornek: "Burnuna yaklaşan bir parmağa bakınca gözlerin şaşılaşır." }
          ] },
        { tip: "grafik", baslik: "Nesne uzaklaştıkça iki göz ipucu zayıflar", xlabel: "Nesnenin uzaklığı", ylabel: "İpucunun gücü", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "yakın" }, { v: 5, label: "orta" }, { v: 9, label: "çok uzak" }],
          yticks: [{ v: 2, label: "az" }, { v: 8, label: "çok" }],
          ogeler: [
            { id: "d", tip: "egri", renk: 0, etiket: "Retina farkı", noktalar: [[1, 9], [2, 5.4], [3, 3.7], [4, 2.7], [5, 2.1], [6, 1.6], [7, 1.2], [8, 0.9], [9, 0.7]], gizli: true },
            { id: "c", tip: "egri", renk: 2, etiket: "Yakınsama", noktalar: [[1, 8], [2, 4.6], [3, 3.1], [4, 2.3], [5, 1.8], [6, 1.4], [7, 1.1], [8, 0.8], [9, 0.6]], gizli: true },
            { id: "y", tip: "nokta", x: 1, y: 9, etiket: "Burnundaki parmak", kilavuz: true, gizli: true },
            { id: "u", tip: "nokta", x: 9, y: 0.7, etiket: "Uzak dağ", kilavuz: true, gizli: true },
            { id: "yz", tip: "yazi", x: 6.5, y: 5.5, metin: "Uzakta iki göz ipucu zayıf", gizli: true }
          ],
          durumlar: [
            { metin: "Önce *retinal disparity*: iki gözün görüntüleri arasındaki fark.", goster: ["d"] },
            { metin: "*Convergence* de benzer davranır: nesne yakınsa gözler daha çok içe döner.", goster: ["c"] },
            { metin: "Burnundaki parmakta iki ipucu da ==çok güçlüdür==; beyin kolayca \"çok yakın\" der.", goster: ["y"] },
            { metin: "Uzak dağda iki ipucu da neredeyse sıfırdır. Bu yüzden uzak mesafelerde derinliği ==tek gözle de görülen ipuçları== (monoküler) taşır.", goster: ["u", "yz"] }
          ] }
      ]
    },
    {
      baslik: "Tek gözle derinlik: monoküler ipuçları",
      kisa: "Düz bir resimde bile derinlik hissi veren beş ipucu vardır.",
      bloklar: [
        { tip: "tablo", baslik: "Sınavda çıkan beş monoküler ipucu", head: ["İpucu", "Ne söyler?", "Örnek"], rows: [
            ["*Relative clarity*", "Net olan yakın, bulanık olan uzak", "Sisli dağlar uzak görünür"],
            ["*Relative size*", "Aynı nesne küçük görünürse uzaktır", "Küçük görünen araba daha uzaktır"],
            ["*Texture gradient*", "Yüzey dokusu uzaklaştıkça sıklaşır ve silikleşir", "Uzaktaki çimen ya da kaldırım taşı"],
            ["*Linear perspective*", "Paralel çizgiler uzakta birleşir", "Ufka giden tren rayları"],
            ["*Interposition*", "Başka nesneyi örten yakındır", "Önündeki sırayı örten öğrenci"]
          ], not: "Sınav yalnızca bu beş monoküler ipucunu sorar." },
        { tip: "ikili", sol: { ikon: "👀", baslik: "Binoküler ipuçları", maddeler: ["İki göz gerekir", "*Retinal disparity*, *convergence*"] },
          sag: { ikon: "🖼️", baslik: "Monoküler ipuçları", maddeler: ["Tek göz yeter; düz resimde de çalışır", "Netlik, boyut, doku, çizgi, örtme"] },
          oyun: [
            { metin: "Fotoğrafta yol uzaklaştıkça iki kenar çizgisi birleşiyor.", cevap: "sag", neden: "Düz bir resimde çalışıyor: *linear perspective*, monoküler." },
            { metin: "Yüzüne yaklaşan bir kalemde gözlerin içe doğru dönüyor.", cevap: "sol", neden: "Gözlerin hareketine dayanır: *convergence*, binoküler." },
            { metin: "Resimde ön plandaki ağaç, arkasındaki evi kısmen örtüyor.", cevap: "sag", neden: "*Interposition* tek gözle de görülür." },
            { metin: "Sağ ve sol retinada oluşan görüntüler biraz farklı.", cevap: "sol", neden: "İki göz karşılaştırılıyor: *retinal disparity*." }
          ] },
        { tip: "tuzak", metin: "Tek gözü kapattığında dünya düz bir resme dönmez.", yanlis: "Tek gözle bakınca derinlik algısı tamamen kaybolur.", dogru: "Tek gözle bakınca yalnızca binoküler ipuçları kaybolur; monoküler ipuçları derinliği yine verir." }
      ]
    },
    {
      baslik: "Sabitlikler ve görünür hareket",
      kisa: "Retinadaki görüntü değişse bile nesne aynı kalır; hareket olmadan hareket görülebilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📐", terim: "Size constancy", tr: "boyut sabitliği", tanim: "Bir nesne uzaklaşıp retinada küçülse de gerçek boyutunu aynı algılama.", ornek: "Uzaklaşan arkadaşın küçülmüş görünür ama onu \"küçülmüş biri\" sanmazsın." },
            { ikon: "🚪", terim: "Shape constancy", tr: "şekil sabitliği", tanim: "Nesneyi farklı açıdan görsek de şeklini aynı algılama.", ornek: "Açılırken yamuk görünen kapıyı hâlâ dikdörtgen sanırsın." },
            { ikon: "💡", terim: "Color constancy", tr: "renk sabitliği", tanim: "Işık değişse de nesnenin rengini aynı algılama.", ornek: "Kırmızı çantan, gün batımında da kırmızı çanta olarak kalır." },
            { ikon: "🎞️", terim: "Apparent movement", tr: "görünür hareket", tanim: "Nesneler gerçekte hareket etmediği hâlde hareket algılama. Art arda yanıp sönen ışıklar tek bir ışık gezinirmiş gibi görünür.", ornek: "Sinema ve animasyon: hareketsiz kareler akıcı hareket gibi algılanır." }
          ] },
        { tip: "adimlar", baslik: "Kapı açılıyor, kapı değişmiyor", adimlar: [
            { baslik: "Retinadaki görüntü", metin: "Kapı açıldıkça dikdörtgen yamuk bir şekle dönüşür." },
            { baslik: "Beyin", metin: "Kapıyı tanır ve onu \"hâlâ dikdörtgen\" olarak yorumlar." },
            { baslik: "Sonuç", metin: "Retinadaki değişikliğe rağmen nesne aynı kalır: ==*shape constancy*==." }
          ] }
      ]
    },
    {
      baslik: "Dikkat: neyi görüp neyi kaçırırız?",
      kisa: "Dikkat seçicidir; odak dışındaki şeyleri, hatta büyük değişimleri bile kaçırabiliriz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎧", terim: "Cocktail party effect", tr: "kokteyl partisi etkisi", tanim: "Gürültülü ortamda başka şeylere odaklıyken, adımız ya da ilgi alanımız geçince bunu fark etmemiz. Dikkat seçicidir.", ornek: "Kalabalık kantinde biri \"Ece\" deyince başını çevirirsin." },
            { ikon: "🦍", terim: "Inattentional blindness", tr: "dikkatsizlik körlüğü", tanim: "Dikkatin başka yerdeyken beklenmedik bir şeyi hiç görmemek. Göz bakar ama ==dikkat orada değildir==.", ornek: "Basketbol pasını sayan izleyiciler, sahadan geçen goril kostümlü kişiyi sıklıkla fark etmez." },
            { ikon: "🔁", terim: "Change blindness", tr: "değişim körlüğü", tanim: "Çevredeki bir değişikliği dikkatsizlikten ötürü fark etmeme.", ornek: "Arkadaşın saç rengini değiştirmiş, sen hâlâ eski halini hatırlıyorsun." }
          ] },
        { tip: "ikili", sol: { ikon: "👻", baslik: "*Inattentional blindness*", maddeler: ["Beklenmedik, yeni bir nesne ya da olayı görmemek", "Dikkat başka bir göreve kilitli"] },
          sag: { ikon: "🔁", baslik: "*Change blindness*", maddeler: ["Var olan bir şeydeki değişimi fark etmemek", "Önce ve sonra karşılaştırılamıyor"] },
          oyun: [
            { metin: "Telefonla konuşarak yürürken yolun ortasındaki yeni dikilmiş direği görmedin.", cevap: "sol", neden: "Yeni ve beklenmedik bir nesne gözden kaçıyor." },
            { metin: "Sınıfta tahtadaki bir sayı değiştirildi, hiç kimse fark etmedi.", cevap: "sag", neden: "Var olan bir şeyin değişimi fark edilmiyor." },
            { metin: "Film setinde sahne arasında bardağın yeri değişti, izleyiciler fark etmedi.", cevap: "sag", neden: "Değişim fark edilmedi: *change blindness*." },
            { metin: "Pas sayma görevi sırasında sahaya yürüyen gorili hiç görmedin.", cevap: "sol", neden: "Beklenmedik nesne: *inattentional blindness*." }
          ] },
        { tip: "tuzak", metin: "Buradaki \"körlük\", gözün ya da görme sisteminin bozulması anlamına gelmez; sorun gözde değil dikkattedir.", yanlis: "*Change blindness* olan kişinin görme sistemi bozuktur.", dogru: "Gözler sağlam çalışır; ==dikkat başka yere kayar==, bu yüzden değişim ya da nesne algılanmaz." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Bottom-up* duyu verisinden, *top-down* beklentiden başlar; ikisi birlikte çalışır.",
            "*Schema* ve *perceptual set* iç; bağlam, deneyim ve kültür dış faktörlerdir.",
            "Gestalt: *closure* (tamamlar), *figure-ground* (ayırır), *proximity* (yakını), *similarity* (benzeri) gruplar.",
            "Binoküler ipuçları: *retinal disparity* ve *convergence*; yakında güçlü, uzakta zayıftır.",
            "Monoküler beş ipucu: *relative clarity*, *relative size*, *texture gradient*, *linear perspective*, *interposition*.",
            "Sabitlikler (boyut, şekil, renk) nesneyi değişen görüntüye rağmen aynı algılatır; görünür harekette hareket yoktur.",
            "*Cocktail party effect* seçici dikkattir; *inattentional blindness* beklenmedik nesneyi, *change blindness* değişimi kaçırmaktır.",
            "\"Körlük\" görme bozukluğu değil, dikkat meselesidir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Ayşe, kütüphane panosundaki el yazısı \"S1NAV\" notunu bir an bile düşünmeden \"SINAV\" diye okuyor. Bu okuma hangi süreçle en iyi açıklanır?",
      opts: ["*Bottom-up processing*; çünkü harfi tek tek inceleyip çözüyor", "*Top-down processing*; çünkü beklentisi belirsiz harfi tamamlıyor", "*Retinal disparity*; çünkü iki gözün görüntüleri farklı", "*Closure*; çünkü yazı kesik çizgilerle çizilmiş"],
      a: 1,
      why: "Ayşe kelimenin SINAV olması gerektiğini bildiği için belirsiz karakteri o yönde okur: *top-down*. En çekici yanlış şık A: harfleri tek tek incelemek yeni ve belirsiz verilerle çalışmaktır; burada ise beklenti belirleyici." },
    { q: "Bir logoda daire, çevresi kesik çizgilerle çizilmiştir; yine de izleyenler bunu eksiksiz bir daire olarak görür. Bu durum hangi Gestalt ilkesine örnektir?",
      opts: ["*Proximity*", "*Similarity*", "*Closure*", "*Figure-ground*"],
      a: 2,
      why: "Eksik ya da kesik bir şekli beynin tamamlaması *closure*'dır. En çekici yanlış şık D: *figure-ground* nesneyi arka plandan ayırmakla ilgilidir, eksik parçayı doldurmakla değil." },
    { q: "Bir araştırmacı aynı nesnenin gözlerden uzaklığını değiştirip iki gözün görüntüleri arasındaki farkı (*retinal disparity*) ölçüyor. Tablodaki sonuçlar, derinlik algısı hakkında hangi sonucu destekler?",
      fig: { type: "table", caption: "Uzaklık ve retina farkı (göreli birim)", head: ["Nesnenin uzaklığı", "Retina farkı"], rows: [["50 cm", "8"], ["1 m", "4"], ["4 m", "1"]] },
      opts: ["Nesne uzaklaştıkça *retinal disparity* azalır; bu ipucu yakın mesafede daha güçlüdür", "Nesne uzaklaştıkça *retinal disparity* artar; bu ipucu uzak mesafede daha güçlüdür", "*Retinal disparity* uzaklıktan bağımsızdır", "Sonuçlar *linear perspective* ipucunu gösterir"],
      a: 0,
      why: "Uzaklık arttıkça fark 8'den 4'e, 1'e düşüyor: yakında güçlü, uzakta zayıf. *Linear perspective* ise tek gözle de çalışan monoküler bir ipucudur; iki gözü karşılaştırmaz." },
    { q: "Eylül, açılan kapıyı retinasında yamuk bir şekil olarak görse de kapıyı dikdörtgen olarak algılıyor. Bu hangi algısal süreçtir?",
      opts: ["*Apparent movement*", "*Change blindness*", "*Interposition*", "*Shape constancy*"],
      a: 3,
      why: "Retinadaki görüntü değişse de nesnenin şeklini aynı algılamak *shape constancy*'dir. En çekici yanlış şık A: kapı gerçekten hareket ediyor; *apparent movement* ise hareket etmeyen nesnede hareket algısıdır." },
    { q: "Gürültülü bir kantinde Deniz arkadaşlarıyla sohbet ederken, uzaktaki bir masada birinin onun adını söylediğini hemen fark ediyor. Bu durum en iyi hangi kavramla açıklanır?",
      opts: ["*Inattentional blindness*", "*Cocktail party effect*", "*Change blindness*", "*Convergence*"],
      a: 1,
      why: "Dikkat seçicidir; kişi ilgili bilgiye (adına) odaklanmayı sürdürür: *cocktail party effect*. En çekici yanlış şık A: *inattentional blindness* ise odak dışındaki bir şeyi hiç fark etmemektir; burada tersine, Deniz bir şeyi fark ediyor." }
  ]
};
