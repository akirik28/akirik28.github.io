/* Kitpath not defteri · td101 · Karagöz oyunu (TDE2.2, TDE2.3, TDE2.1)
   Kaynak: turkdili-11-sinav1/veri.js (MUHTEMEL, MC) ve takip/sinav-kitleri/turkdili/KAYNAK.md. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "td101",
  amac: "Bu konu Karagöz oyununu anlatıyor: bölümleri, kişileri, güldürü kaynakları ve oyunun işlevi. Sınavda verilen bir parçanın hangi bölümden olduğunu gerekçesiyle yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Karagöz neyin oyunudur?",
      kisa: "Karagöz, perde arkasında ışıkla oynatılan geleneksel bir gölge oyunudur.",
      bloklar: [
        { tip: "harita", merkez: "Geleneksel Türk tiyatrosu", dallar: [
            { baslik: "Meddah" },
            { baslik: "Köy seyirlik oyunları" },
            { baslik: "Orta oyunu", alt: "Açık alanda insanlarla oynanır. Kavuklu ile Pişekâr, Karagöz ile Hacivat'ın karşılığıdır." },
            { baslik: "Karagöz", alt: "Perde arkasında oynatılan gölge oyunu. 2009'da UNESCO listesine alındı." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🖼️", terim: "Perde", tr: "ayna", tanim: "Gerili beyaz bez." },
            { ikon: "📽️", terim: "Şem'a", tr: "ışık", tanim: "Perdeyi arkadan aydınlatan ışık." },
            { ikon: "✂️", terim: "Tasvir", tr: "figür", tanim: "Deve ya da manda derisinden kesilen, kurutulup boyanan, delikli figür. Çubukla perdeye bastırılarak oynatılır." },
            { ikon: "🎙️", terim: "Hayalî", tr: "Karagözcü", tanim: "Oyunu oynatan kişi. Bütün tiplerin sesini tek başına verir." }
          ] },
        { tip: "tablo", head: ["Terim", "Ne demek?"], rows: [
            ["Yardak", "Oynatıcının şarkı söyleyen yardımcısı"],
            ["Nareke", "Oyunun başında öttürülen düdük"],
            ["Göstermelik", "Oyun başlamadan perdede duran, konuyla ilgisi olmayabilen süs tasviri"]
          ] },
        { tip: "tuzak", metin: "Hacivat ile Karagöz'ün Orhan Gazi döneminde Bursa'da cami inşaatında çalışırken öldürüldüğü anlatılır.", yanlis: "Bu anlatı gerçek bir tarihî olaydır.", dogru: "Halk anlatısına dayanan bir efsanedir; tarih olarak sunulmaz." }
      ]
    },
    {
      baslik: "Dört bölüm ve sırası",
      kisa: "Sıra: mukaddime, muhavere, fasıl, bitiş; her birinin bir işareti vardır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Mukaddime", alt: "giriş" }, "→",
            { t: "Muhavere", alt: "söyleşme" }, "→",
            { t: "Fasıl", alt: "asıl oyun" }, "→",
            { t: "Bitiş", alt: "kalıp sözler" }
          ] },
        { tip: "tablo", head: ["Bölüm", "Ne olur?", "İşareti"], rows: [
            ["Mukaddime", "Göstermelik kalkar, nareke öter. Hacivat semai ile perdeye gelir, Karagöz'ü çağırır. Kavgayla biter.", "Perde gazeli"],
            ["Muhavere", "Yalnız Hacivat ile Karagöz konuşur. Asıl olaydan bağımsızdır.", "Söz oyunu, yanlış anlama"],
            ["Fasıl", "Oyunun adını veren olay işlenir. Başka tipler perdeye gelir.", "Asıl olay, başka tipler"],
            ["Bitiş", "Kısa bir konuşma olur; çoğu kez sonraki oyun duyurulur.", "“Yıktın perdeyi, eyledin yeksân!” ve “sürç-i lisan”"]
          ] },
        { tip: "ikili", sol: { ikon: "💬", baslik: "Muhavere", maddeler: ["Yalnız Hacivat ile Karagöz", "Olaydan bağımsız söz oyunu"] },
          sag: { ikon: "🎬", baslik: "Fasıl", maddeler: ["Asıl olay işlenir", "Tiryaki, Çelebi, Zenne gibi tipler gelir"] },
          oyun: [
            { metin: "Karagöz “arzuhal” sözünü “Arzu Hala” sanıyor; perdede başka kimse yok.", cevap: "sol", neden: "Yalnız ikisi var, olaydan bağımsız yanlış anlama: muhavere." },
            { metin: "Tiryaki perdeye gelir; arzuhalciye dilekçe yazdırmaya çalışırken uyuklar.", cevap: "sag", neden: "Başka bir tip ve asıl olay var: fasıl." },
            { metin: "Karagöz, Hacivat'ın süslü sözünü yanlış anlar; ikisi sözle çekişir.", cevap: "sol", neden: "Yalnız ikisinin söyleşmesi: muhavere." },
            { metin: "Çelebi perdeye gelir ve işini süslü sözlerle anlatır.", cevap: "sag", neden: "Başka bir tip perdede: fasıl." }
          ] },
        { tip: "tuzak", metin: "Göstermelik kolay bir bölüm sanılır.", yanlis: "Göstermelik, oyunun ilk bölümüdür.", dogru: "Göstermelik oyun başlamadan perdede durur; nareke ötünce kalkar. Bölümler: mukaddime, muhavere, fasıl, bitiş." }
      ]
    },
    {
      baslik: "Hacivat ve Karagöz",
      kisa: "Hacivat bilgiç ve süslü, Karagöz sade ve dobradır; oyun bu çatışmadan doğar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎓", baslik: "Hacivat", maddeler: ["Medrese görmüş, bilgiç", "Arapça-Farsça sözcüklerle süslü, ağdalı konuşur", "Kurnaz, çıkarcı, kuralcı; aracılık eder"] },
          sag: { ikon: "🧢", baslik: "Karagöz", maddeler: ["Okumamış, saf ama pratik zekâlı", "Sade halk Türkçesi konuşur; bilmediği sözü bildiğine benzetir", "Dobra, açık sözlü, aceleci; çoğu zaman işsiz"] },
          oyun: [
            { metin: "Bugün makama bir arzuhal sundum.", cevap: "sol", neden: "Süslü, bilgiç söyleyiş: Hacivat." },
            { metin: "Arzu Hala'yı mı sundun? Kadıncağızı tepsiyle mi götürdün?", cevap: "sag", neden: "Bilmediği sözü bildiğine benzetiyor: Karagöz." },
            { metin: "Dobradır, acelecidir, çoğu zaman işsizdir.", cevap: "sag", neden: "Açık sözlü halk adamı: Karagöz." },
            { metin: "Kuralcıdır, çıkarına göre aracılık eder.", cevap: "sol", neden: "Kurnaz ve çıkarcı: Hacivat." }
          ] },
        { tip: "tablo", head: ["Tip", "Özelliği"], rows: [
            ["Tiryaki", "Uyuşuk, konuşurken uyuklayan keyif düşkünü"],
            ["Çelebi", "Şık giyimli, kibar ve süslü konuşan İstanbul beyefendisi"],
            ["Tuzsuz Deli Bekir", "Elinde şişe, kabadayı"],
            ["Beberuhi", "Cüce, saf, geveze"],
            ["Zenne", "Kadın tiplerinin genel adı"],
            ["Ağız taklidi yapılan tipler", "Laz, Kayserili, Kastamonulu, Acem, Arap, Arnavut gibi; İstanbul'un çok kültürlü toplumunu yansıtır"]
          ] },
        { tip: "tuzak", metin: "Eşleştirme sorularında Zenne tuzaktır.", yanlis: "Zenne, ağdalı konuşan bilgiç bir erkek tiptir.", dogru: "Zenne, oyundaki kadın tiplerinin genel adıdır." }
      ]
    },
    {
      baslik: "Güldürü, dil ve işlev",
      kisa: "Güldürü sözle ve harekette doğar; oyun güldürürken eleştirir.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🔤", baslik: "Söz oyunu ve yanlış anlama", metin: "En önemlisi bu. Örnek: arzuhal, Arzu Hala; mektup zarfı, fincan zarfı." },
            { ikon: "🎤", baslik: "Ağız taklidi", metin: "Yöre ve topluluk tiplerinin şivesi." },
            { ikon: "📈", baslik: "Abartı", metin: "Karakter kusurlarının büyütülmesi." },
            { ikon: "💥", baslik: "Hareket", metin: "Kovalamaca, dayak." }
          ] },
        { tip: "harita", merkez: "Karagöz'ün dili", dallar: [
            { baslik: "Diyalogla ilerler" },
            { baslik: "Konuşma dili ve kalıp sözler" },
            { baslik: "Tekerleme, deyim, cinaslı söyleyiş" },
            { baslik: "Doğaçlamaya açık", alt: "Ustadan çırağa sözlü aktarılır; metinler sonradan derlenmiştir." }
          ] },
        { tip: "tuzak", baslik: "Yargıyı çürütme tuzağı", metin: "“Karagöz yalnızca güldürmek için oynanır” yargısına karşı çıkarken kanıt içerikten gelmeli.", yanlis: "Tasvirin deriden yapılması ve perdenin ışıkla aydınlatılması kanıttır.", dogru: "Kanıt: tiplerle toplumsal aksaklıklar eleştirilir, perde gazeli ibret vurgular. Tasvir ve perde teknik ayrıntıdır." }
      ]
    },
    {
      baslik: "Parçayı çözümle: model cevap",
      kisa: "Önce tahmin et, sonra bölümü ve güldürüyü gerekçeyle yaz.",
      bloklar: [
        { tip: "adimlar", baslik: "Karagöz parçasında dört adım", adimlar: [
            { baslik: "Okumadan önce", metin: "Başlığa ve görsellere bakıp parçayı tahmin et." },
            { baslik: "Okurken", metin: "Rolleri paylaş; her tipin ağzını, tonunu, vurgusunu yansıtarak sesli oku." },
            { baslik: "Bölümü bul", metin: "Perde gazeli: mukaddime. Yalnız ikisi ve söz oyunu: muhavere. Başka tip ve asıl olay: fasıl. Sürç-i lisan: bitiş." },
            { baslik: "Güldürüyü adlandır", metin: "Söz oyunu, ağız taklidi, abartı ya da hareket; metinden kanıt göster." }
          ] },
        { tip: "ornek", baslik: "Hangi bölüm? Hangi güldürü?", durum: "Perdede yalnızca Hacivat ile Karagöz var. Hacivat “Bugün makama bir arzuhal sundum.” der. Karagöz “Arzu Hala'yı mı sundun? Kadıncağızı tepsiyle mi götürdün?” diye karşılık verir.",
          adimlar: [
            "Kimler konuşuyor? Yalnız Hacivat ve Karagöz; olaydan bağımsız bir söyleşme: muhavere.",
            "Hangi söz karışıyor? Karagöz, arzuhal (dilekçe) sözünü Arzu Hala sanıyor.",
            "Güldürü kaynağı: sesçe benzeyen sözün karıştırılması, yani yanlış anlama ve söz oyunu."
          ],
          sonuc: "Model cevap: Bu parça muhaveredir; çünkü yalnız Hacivat ile Karagöz konuşuyor ve konuşma asıl olaydan bağımsız. Güldürü, Karagöz'ün “arzuhal” sözünü sesçe benzeyen “Arzu Hala” diye anlamasından, yani yanlış anlamadan doğuyor." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Bölümler: mukaddime, muhavere, fasıl, bitiş",
            "Perde gazeli mukaddimede, “sürç-i lisan” bitişte",
            "Yalnız Hacivat-Karagöz: muhavere; başka tip + olay: fasıl",
            "Hacivat bilgiç, süslü; Karagöz sade halk Türkçesi",
            "Güldürü: söz oyunu, yanlış anlama, ağız taklidi, abartı, hareket"
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Karagöz seyirciye dönüp “Her ne kadar sürç-i lisan ettikse affola.” der. Bu söz oyunun hangi bölümünde yer alır?",
      opts: ["Mukaddime", "Muhavere", "Fasıl", "Bitiş"],
      a: 3,
      why: "Seyirciden af dileme kalıbı bitiş bölümüne aittir; çoğu kez sonraki oyun da duyurulur. Mukaddime en çekici yanlış şık: orada Hacivat perde gazelini okur, ama af dilemez." },
    { q: "Perdede yalnızca Hacivat ile Karagöz var. Hacivat “Mektubu zarfa koyup verdim.” der; Karagöz “Fincan zarfına mı koydun?” diye sorar. Bu parça için hangisi doğrudur?",
      opts: ["Muhavere; bir sözün başka anlamıyla anlaşılmasına dayalı söz oyunu ve yanlış anlama var.", "Fasıl; güldürü ağız taklidinden doğuyor.", "Mukaddime; Hacivat perde gazelini okuyor.", "Bitiş; güldürü kovalamacadan doğuyor."],
      a: 0,
      why: "Yalnız iki kişi konuşuyor ve konuşma olaydan bağımsız: muhavere. Güldürü, “zarf” sözünün başka anlamla anlaşılmasından doğuyor. Fasıl en çekici yanlış şık: orada başka tipler ve asıl olay olur." },
    { q: "Aşağıdakilerden hangisi Hacivat'ın özelliği değildir?",
      opts: ["Medrese görmüş, bilgiç biridir.", "Arapça-Farsça sözcüklerle süslü konuşur.", "Okumamıştır ama pratik zekâlı ve dobradır.", "Kurnaz ve kuralcıdır."],
      a: 2,
      why: "Okumamış, pratik zekâlı ve dobra olan Karagöz'dür. Hacivat bilgiç, süslü konuşan, kurnaz ve kuralcı bir tiptir; bu çatışma oyunun temelidir." },
    { q: "Bir arkadaşın “Karagöz yalnızca güldürmek için oynanır.” diyor. Ona karşı çıkmak için en güçlü kanıt hangisidir?",
      opts: ["Tasvirlerin deve ya da manda derisinden yapılması", "Tiplerle toplumsal aksaklıkların eleştirilmesi ve perde gazelindeki ibret vurgusu", "Oyunun Ramazan gecelerinde ve sünnet düğünlerinde oynatılması", "Hayalînin bütün tiplerin sesini tek başına vermesi"],
      a: 1,
      why: "Yargıyı çürütmek için içerikle ilgili kanıt gerekir: eleştiri ve ibret vurgusu oyunun düşündürmeyi de amaçladığını gösterir. Öteki şıklar yalnızca teknik ya da geleneksel ayrıntıdır." },
    { q: "Orhan Gazi döneminde Bursa'da cami inşaatında çalışan Karagöz ile Hacivat'ın öldürüldüğü anlatısı için hangisi doğrudur?",
      opts: ["Halk anlatısına dayanan bir efsanedir; tarih olarak sunulmaz.", "Belgelerle kanıtlanmış tarihî bir olaydır.", "Yalnızca orta oyununun konusudur.", "Her Karagöz oyununun fasılında anlatılır."],
      a: 0,
      why: "Şeyh Küşterî'nin onları perdede canlandırdığı anlatı bir efsanedir. Tarihî olay saymak en çekici yanlış şıktır; sınavda bu anlatı tarih olarak yazılmaz." }
  ]
};
