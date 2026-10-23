/* Kitpath not defteri · mc202 · 2.2 GSYH'nin Sınırları
   Kaynak: College Board CED, Topic 2.2 (MEA-1.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mc202",
  amac: "Bu konu *GDP*'nin (GSYH) iyi bir gösterge olduğunu ama eksik yanları olduğunu anlatıyor. Piyasa dışı işlemleri, kayıt dışı ekonomiyi, boş zamanı, çevreyi ve gelir dağılımını görecek ve GSYH'nin neden refahla aynı şey olmadığını öğreneceksin.",
  bolumler: [
    {
      baslik: "GSYH neyi ölçer, neyi ölçmez?",
      kisa: "GSYH üretimi ölçer; refahı, mutluluğu ya da adaleti doğrudan ölçmez.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📏", baslik: "GSYH'nin işe yaradığı yer", maddeler: ["Piyasada üretilen son malların değerini söyler", "Ekonominin büyüklüğünü ve büyümesini gösterir", "Yılları ve ülkeleri karşılaştırmayı kolaylaştırır"] },
          sag: { ikon: "🔍", baslik: "GSYH'nin göremedikleri", maddeler: ["Parayla el değiştirmeyen üretim", "Bildirilmeyen (kayıt dışı) işlemler", "Boş zaman, çevre, gelir dağılımı, yaşam kalitesi"] } },
        { tip: "harita", merkez: "GSYH'nin *limitations*", dallar: [
            { baslik: "*Nonmarket transactions*", alt: "Evde yemek, gönüllü iş: para el değiştirmez" },
            { baslik: "*Underground economy*", alt: "Bildirilmeyen ya da yasa dışı işlemler" },
            { baslik: "*Leisure*", alt: "Boş zamanın değeri hesaba girmez" },
            { baslik: "Çevre", alt: "Kirlilik ve doğa kaybı düşülmez" },
            { baslik: "Gelir dağılımı", alt: "Ortalama, kimin ne aldığını göstermez" },
            { baslik: "Yaşam kalitesi", alt: "Sağlık, güvenlik, özgürlük, mutluluk" }
          ] }
      ]
    },
    {
      baslik: "Piyasa dışı işlemler",
      kisa: "Parayla el değiştirmeyen üretim GSYH'ye girmez, ama değerlidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏠", terim: "Nonmarket transactions", tr: "piyasa dışı işlemler", tanim: "Piyasada alınıp satılmayan, bu yüzden fiyatı olmayan üretim. GSYH yalnızca piyasa işlemlerini sayar; bu sınır CED'in öne çıkardığı örnektir.", ornek: "Annenin evde yaptığı yemek, kendi odanı boyaman, gönüllü ders vermen." },
            { ikon: "🤝", terim: "Volunteer work", tr: "gönüllü çalışma", tanim: "Ücret ödenmediği için GSYH'de görünmeyen ama topluma gerçek fayda sağlayan iş.", ornek: "Sokak hayvanları derneğinde hafta sonu gönüllülüğü." }
          ] },
        { tip: "ornek", baslik: "Aynı yemek, iki farklı GSYH", durum: "Ece her akşam ailesi için evde yemek yapıyor. Bir akşam aile aynı yemeği restoranda yiyor ve 300 TL ödüyor. Üretilen yemek değişmedi; GSYH değişti mi?",
          adimlar: ["Evde yemek: para el değiştirmedi, GSYH'de yok.", "Restoran: 300 TL'lik bir hizmet satıldı, GSYH'ye +300 TL.", "İkisinde de aile aynı yemeği yedi; gerçek üretim ya da refah neredeyse aynı.", "Yani GSYH arttı ama ailenin yediği yemek artmadı."],
          sonuc: "GSYH'deki artış gerçek üretimden değil, ==işlemin piyasaya taşınmasından== gelebilir. Piyasa dışı işlemler GSYH'yi ==olduğundan küçük== gösterir." }
      ]
    },
    {
      baslik: "Kayıt dışı ekonomi",
      kisa: "Bildirilmeyen işlemler resmî GSYH'de görünmez; üretim gerçek olsa bile.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🕶️", terim: "Underground economy", tr: "kayıt dışı ekonomi", tanim: "Vergiden ya da denetimden kaçınmak için bildirilmeyen faaliyetler ve yasa dışı işler. Resmî kayıtlarda yoktur, bu yüzden GSYH bunları büyük ölçüde yakalayamaz.", ornek: "Kayıtsız çalıştırılan işçi, faturasız satış, kaçakçılık." }
          ] },
        { tip: "ornek", baslik: "Faturasız telefon kılıfı", durum: "Selin hafta sonları telefon kılıfı satıyor, ayda 3.000 TL kazanıyor ve hiçbir yere bildirmiyor. Bu üretim GSYH'ye girer mi?",
          adimlar: ["Kılıflar gerçekten üretildi ve satıldı: ekonomik değer var.", "Ama işlem hiçbir resmî kayda geçmiyor; istatistikçi göremiyor.", "Selin gibi çok kişi varsa ölçülen GSYH gerçek üretimin altında kalır."],
          sonuc: "Kayıt dışı ekonomi büyükse resmî GSYH ==gerçek üretimden küçük== görünür. Faaliyetin yasal olup olmaması değil, ==bildirilip bildirilmemesi== belirleyicidir." }
      ]
    },
    {
      baslik: "Boş zaman, çevre ve \"kötü\" harcamalar",
      kisa: "GSYH boş zamanı ve çevre kaybını düşmez, temizlik masrafını ise artı sayar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛋️", terim: "Leisure", tr: "boş zaman", tanim: "Dinlenmeye, aileye ve hobiye ayrılan süre. Daha çok çalışmak GSYH'yi artırır, ama kaybedilen boş zamanın değeri GSYH'den düşülmez.", ornek: "Herkes haftada 60 saat çalışırsa GSYH artar; yaşam daha mı iyidir?" },
            { ikon: "🏭", terim: "Environmental damage", tr: "çevre zararı", tanim: "Üretim kirlilik doğurabilir; doğanın kaybı GSYH'de eksi olarak görünmez. Kirliliği temizleme harcaması ise GSYH'ye eklenir.", ornek: "Nehir kirlendi, belediye temizliğe 200 milyon TL harcadı." }
          ] },
        { tip: "tuzak", metin: "Hastane masrafı, deprem sonrası inşaat ya da kirlilik temizliği de bir mal ve hizmet alımıdır; GSYH'yi artırır. Ama toplumun durumu bu yüzden iyileşmiş olmaz.", yanlis: "GSYH arttıysa insanlar daha iyi durumdadır.", dogru: "GSYH ==üretimin değerini== sayar. Ne üretildiğinin iyi olup olmadığını, harcanan boş zamanı ve çevre kaybını hesaba katmaz." }
      ]
    },
    {
      baslik: "Gelir dağılımı ve yaşam kalitesi",
      kisa: "Ortalama yüksek olsa da gelir birkaç kişide toplanmış olabilir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Kişi başı GSYH", alt: "ortalama üretim ve gelir" }, "=",
            { t: "GSYH", alt: "ülkenin toplam üretimi" }, "÷",
            { t: "Nüfus", alt: "kişi sayısı" }
          ], aciklama: "Ülkeleri karşılaştırırken kişi başı GSYH kullanılır. Ama bu bir ortalamadır: gelirin kimlerde toplandığını göstermez." },
        { tip: "grafik", baslik: "Aynı ortalama, farklı dağılım", xlabel: "Mahalledeki beş kişi", ylabel: "Aylık gelir (bin TL)", xmax: 10, ymax: 15,
          xticks: [{ v: 1.2, label: "1" }, { v: 3.1, label: "2" }, { v: 5, label: "3" }, { v: 6.9, label: "4" }, { v: 8.8, label: "5" }],
          yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }],
          ogeler: [
            { id: "k1", tip: "alan", renk: 0, noktalar: [[0.6, 0], [1.8, 0], [1.8, 4], [0.6, 4]] },
            { id: "k2", tip: "alan", renk: 0, noktalar: [[2.5, 0], [3.7, 0], [3.7, 4], [2.5, 4]] },
            { id: "k3", tip: "alan", renk: 0, noktalar: [[4.4, 0], [5.6, 0], [5.6, 4], [4.4, 4]] },
            { id: "k4", tip: "alan", renk: 0, noktalar: [[6.3, 0], [7.5, 0], [7.5, 4], [6.3, 4]] },
            { id: "k5", tip: "alan", renk: 0, noktalar: [[8.2, 0], [9.4, 0], [9.4, 4], [8.2, 4]] },
            { id: "ort", tip: "cizgi", renk: 2, kesik: true, from: [0.3, 4], to: [9.7, 4] },
            { id: "ortyazi", tip: "yazi", x: 5, y: 5.2, metin: "ortalama = 4 bin TL", gizli: true },
            { id: "tyazi", tip: "yazi", x: 4, y: 11.5, metin: "Dört kişi ortalamanın çok altında", gizli: true }
          ],
          durumlar: [
            { metin: "Beş kişilik mahallede herkes ayda **4 bin TL** kazanıyor. Kişi başı gelir (ortalama) = 4. Dağılım eşit." },
            { metin: "Gelirler değişti: **1, 1, 2, 2 ve 14** bin TL. Toplam hâlâ 20, yani ortalama yine ==4==.", set: { k1: { noktalar: [[0.6, 0], [1.8, 0], [1.8, 1], [0.6, 1]] }, k2: { noktalar: [[2.5, 0], [3.7, 0], [3.7, 1], [2.5, 1]] }, k3: { noktalar: [[4.4, 0], [5.6, 0], [5.6, 2], [4.4, 2]] }, k4: { noktalar: [[6.3, 0], [7.5, 0], [7.5, 2], [6.3, 2]] }, k5: { noktalar: [[8.2, 0], [9.4, 0], [9.4, 14], [8.2, 14]] } }, goster: ["ortyazi"] },
            { metin: "Kişi başı GSYH iki durumda da aynı; ama ==dört kişi ortalamanın çok altında==. Ortalama dağılımı gizler.", goster: ["tyazi"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🏥", baslik: "Sağlık ve eğitim kalitesi", metin: "Mal sayısı değil, insanların nasıl yaşadığı." },
            { ikon: "🛡️", baslik: "Güvenlik ve özgürlük", metin: "Parayla ölçülmeyen ama refahı belirleyen şeyler." },
            { ikon: "😊", baslik: "Mutluluk", metin: "GSYH bunu doğrudan ölçmez; yaşam kalitesi göstergeleri ayrı hesaplanır." }
          ] }
      ]
    },
    {
      baslik: "Hangi sınır bu?",
      kisa: "Ya üretim ölçülemiyor ya da ölçülen üretim refahı yanlış gösteriyor.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🙈", baslik: "Üretim GSYH'de yok", maddeler: ["Piyasa dışı ve kayıt dışı işlemler", "GSYH gerçek üretimi eksik ölçer"] },
          sag: { ikon: "⚖️", baslik: "Üretim sayılıyor, refah yanlış okunuyor", maddeler: ["Boş zaman, çevre, gelir dağılımı, yaşam kalitesi", "GSYH refahı doğru yansıtmaz"] },
          oyun: [
            { metin: "Annenin evde yaptığı yemek.", cevap: "sol", neden: "Piyasa dışı işlem: üretim var ama GSYH'de yok." },
            { metin: "Fabrikanın nehri kirletmesinin zararı.", cevap: "sag", neden: "Üretim sayıldı; kirlilik kaybı düşülmedi." },
            { metin: "Kantinde kayıtsız çalışan gencin kazancı.", cevap: "sol", neden: "Kayıt dışı ekonomi: resmî kayıtta yok." },
            { metin: "Herkes haftada 70 saat çalışıyor.", cevap: "sag", neden: "GSYH artar ama kaybedilen boş zaman hesaba girmez." },
            { metin: "Kişi başı gelir yüksek, ama gelirin çoğu bir kişide.", cevap: "sag", neden: "Ortalama dağılımı göstermez." }
          ] },
        { tip: "tablo", baslik: "Sınırların özeti", head: ["Sınır", "GSYH'ye etkisi", "Örnek"], rows: [
            ["Piyasa dışı işlem", "Gerçek üretimi eksik ölçer", "Evde yemek, gönüllü iş"],
            ["Kayıt dışı ekonomi", "Gerçek üretimi eksik ölçer", "Faturasız satış"],
            ["Boş zaman", "Refahı yanlış gösterir", "Çok uzun mesai"],
            ["Çevre", "Refahı yanlış gösterir", "Kirlilik, doğa kaybı"],
            ["Gelir dağılımı", "Ortalama farkı gizler", "Aynı ortalama, farklı dağılım"]
          ], not: "Hepsinin ortak cümlesi: GSYH yararlı bir göstergedir ama refahın tamamı değildir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "GSYH piyasada üretilen son malların değerini ölçer; ekonomik performansın yararlı ama eksik bir göstergesidir.",
            "*Nonmarket transactions* (evde yemek, gönüllü iş) GSYH'ye girmez; GSYH'yi olduğundan küçük gösterir.",
            "*Underground economy* bildirilmediği için ölçülemez; resmî GSYH gerçek üretimin altında kalır.",
            "*Leisure*: daha çok çalışmak GSYH'yi artırır, kaybedilen boş zaman hesaba girmez.",
            "Çevre zararı düşülmez; temizlik ya da hastane harcaması GSYH'yi artırır ama refahı artırmaz.",
            "Kişi başı GSYH = GSYH ÷ nüfus bir ortalamadır; gelir dağılımını göstermez.",
            "Sağlık, güvenlik, özgürlük ve mutluluk gibi yaşam kalitesi unsurları GSYH'de yoktur.",
            "Sınav sorusu: \"GSYH yüksek, o halde refah yüksek\" diyen şıkka dikkat et."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Zeynep işini bırakıp ailesinin yiyeceği sebzeyi kendi bahçesinde yetiştirmeye başlıyor; sebzelerin hiçbirini satmıyor ve işine kimse alınmıyor. Hangisi doğrudur?",
      opts: ["Ölçülen GSYH düşer; ama ailenin gerçek üretimi azalmamış olabilir, çünkü piyasa dışı üretim GSYH'ye girmez", "Ölçülen GSYH artar, çünkü yeni bir üretim başlamıştır", "Ölçülen GSYH değişmez, çünkü sebze bir ara maldır", "Ölçülen GSYH artar, çünkü Zeynep artık kendi tüketicisidir"],
      a: 0,
      why: "Zeynep'in eski işindeki üretim GSYH'den çıkar; bahçedeki üretim satılmadığı için hiçbir yerde sayılmaz. Bu, piyasa dışı işlemlerin sınırıdır. B şıkkı en çekici yanlış: üretim gerçekten artmış olsa da GSYH yalnızca piyasa işlemlerini sayar." },
    { q: "Bir ülkenin kişi başı GSYH'si iki yıl boyunca aynı kaldı. Aynı dönemde en yoksul %20'nin geliri düştü, en zengin %20'ninki arttı. Bu durum GSYH'nin hangi sınırını gösterir?",
      opts: ["Kayıt dışı ekonomiyi hesaba katamaması", "Gelir dağılımını göstermemesi", "Boş zamanı hesaba katamaması", "Ara malları iki kez sayması"],
      a: 1,
      why: "Kişi başı GSYH bir ortalamadır; gelirin kimlerde toplandığını göstermez. En çekici yanlış şık A: kayıt dışılıkla ilgili hiçbir bilgi verilmemiş." },
    { q: "Hükümet bir af çıkarıp kayıt dışı çalışan 100.000 kişiyi kayıt altına alıyor. Bu kişilerin gerçek üretimi değişmiyor. Ölçülen GSYH'ye ne olur?",
      opts: ["Değişmez, çünkü üretim aynı kaldı", "Azalır, çünkü vergi yükü artar", "Artar; gerçek üretim değişmemiş olsa da", "Artar; çünkü gerçek üretim artmıştır"],
      a: 2,
      why: "Daha önce resmî kayıtlarda olmayan üretim artık görünür; ölçülen GSYH artar, ama gerçek üretim değişmemiştir. D şıkkı bu farkı gözden kaçırır: artış üretimden değil, ölçümden gelir." },
    { q: "Bir fabrikanın nehri kirletmesinin ardından devlet, nehri temizlemek için 200 milyon TL harcıyor. Bu harcama için hangisi doğrudur?",
      opts: ["GSYH azalır, çünkü kirlilik çıktıyı düşürür", "GSYH değişmez, çünkü temizlik bir transferdir", "GSYH artar ve refah da aynı miktarda artar", "GSYH artar; ama kirlilikten doğan zarar GSYH'de görünmez ve refahın arttığı söylenemez"],
      a: 3,
      why: "Temizlik, devletin mal ve hizmet alımıdır (G) ve GSYH'yi artırır. Ama çevre zararı hiç düşülmediği için refah artışı yoktur. C şıkkı en çekici yanlış: GSYH artışını doğrudan refah artışı sanır." },
    { q: "Tabloya göre aşağıdakilerden hangisi söylenebilir?",
      fig: { type: "table", caption: "İki ülke", head: ["Ülke", "Kişi başı GSYH (bin $)", "Haftalık çalışma (saat)"], rows: [["A", 30, 48], ["B", 28, 36]] },
      opts: ["A'nın GSYH'si yüksek olduğu için A'da refah kesinlikle daha yüksektir", "B'nin GSYH'si düşük olduğu için B'de yaşam kalitesi daha kötüdür", "GSYH boş zamanı hesaba katmadığı için A'nın refahının B'den yüksek olduğu söylenemez", "İki ülkenin GSYH'si karşılaştırılamaz, çünkü ülkelerin nüfusları farklıdır"],
      a: 2,
      why: "B'nin işçileri haftada 12 saat daha fazla boş zamana sahip; GSYH bunu ölçmez. Bu yüzden yalnızca GSYH'ye bakarak A'yı refahta üstün ilan edemeyiz. A şıkkı en çekici yanlış: GSYH'yi refahla özdeşleştirir." }
  ]
};
