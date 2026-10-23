/* Kitpath not defteri · mc401 · 4.1 Finansal Varlıklar
   Kaynak: AP Macroeconomics CED, Topic 4.1 (MEA-3.A). Blok türleri: /ap/_kit/defter.js başı.
   Bono grafiği: bir yıl sonra 1.200 TL ödeyen eski tahvil; fiyat = 1.200 ÷ (1 + faiz). 1 birim = %10 ve 100 TL. */
window.DEFTER = {
  slug: "mc401",
  amac: "Bu konu, insanların parayı cebinde tutmak yerine neleri tutabildiğini anlatıyor: nakit, vadesiz hesap, tahvil, hisse. Likidite, getiri ve risk arasındaki takası, tahvil fiyatı ile faizin neden ters yönde gittiğini ve para tutmanın fırsat maliyetini öğreneceksin.",
  bolumler: [
    {
      baslik: "Finansal varlık ve üç özellik",
      kisa: "Her finansal varlık likidite, getiri ve risk açısından değerlendirilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏦", terim: "Financial asset", tr: "finansal varlık", tanim: "Sahibine gelecekte ödeme alma hakkı veren hesap ya da kâğıt.", ornek: "Vadesiz hesabındaki para, bir tahvil, bir hisse." },
            { ikon: "💧", terim: "Liquidity", tr: "likidite", tanim: "Bir varlığın değer kaybetmeden ne kadar hızlı ve kolay nakde dönüşebildiği.", ornek: "Cebindeki nakit hemen harcanır; hisseni önce satman gerekir." },
            { ikon: "📈", terim: "Rate of return", tr: "getiri oranı", tanim: "Varlığın sağladığı kazancın (faiz, temettü, değer artışı) yatırılan paraya oranı.", ornek: "1.000 TL yatırıp bir yıl sonra 1.100 TL aldıysan getiri %10." },
            { ikon: "🎲", terim: "Risk", tr: "risk", tanim: "Beklenen getirinin gerçekleşmemesi, hatta paranın bir kısmının kaybedilmesi ihtimali.", ornek: "Hisse fiyatı bir haftada düşebilir; cebindeki 100 TL'nin liradaki değeri düşmez." }
          ] },
        { tip: "not", metin: "Bu üç özellik birlikte düşünülür. İnsanlar parasını tek bir varlıkta tutmaz; ne kadar likit, ne kadar getirili ve ne kadar riskli olsun istediğine göre seçer." }
      ]
    },
    {
      baslik: "Para: en likit varlık",
      kisa: "En likit varlıklar nakit ve vadesiz mevduattır; ikisi de ödeme aracıdır.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "💵", baslik: "Nakit (*cash*)", metin: "Banknot ve bozuk para. Anında harcanır, faiz getirmez." },
            { ikon: "🏧", baslik: "Vadesiz mevduat (*demand deposits*)", metin: "Bankadaki cari hesap. İstediğin an çekersin, kartla ya da havaleyle harcarsın. Faizi yoktur ya da çok düşüktür." },
            { ikon: "⚖️", baslik: "Likit olmanın bedeli", metin: "En likit varlıkların getirisi en düşüktür; kolay harcanan paran sana faiz kazandırmaz." }
          ] },
        { tip: "tuzak", baslik: "Tahvil ve hisse para değildir", metin: "Tahvil ve hisse de finansal varlıktır; ama harcamadan önce satıp nakde çevirmen gerekir. Bu yüzden onlar, en likit paranın yerine tutabileceğin diğer varlıklardır.", yanlis: "Her finansal varlık paradır.", dogru: "En likit para nakit ve vadesiz mevduattır. Tahvil ve hisse, paranın yerine tutulabilen başka finansal varlıklardır." }
      ]
    },
    {
      baslik: "Tahvil ve hisse: borç mu, ortaklık mı?",
      kisa: "Tahvil alan borç verir ve faiz alır; hisse alan şirkete ortak olur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📜", baslik: "*Bond* (tahvil)", maddeler: ["Borç senedi: tahvili alan, çıkaran kuruma borç verir", "Faiz öder; vadede anapara geri gelir", "Çıkaran ödeyemezse zarar edersin"] },
          sag: { ikon: "🏢", baslik: "*Stock* (hisse)", maddeler: ["Şirketin küçük bir mülkiyet payı (*equity*)", "Getiri: temettü (*dividend*) ve fiyat artışı", "Şirket kötü giderse değer kaybedersin; sabit ödeme yok"] },
          oyun: [
            { metin: "Belediye, park yapmak için kâğıt satıp halktan borç topluyor. Kâğıdı alan kişi ne yapmış olur?", cevap: "sol", neden: "Belediyeye borç vermiştir: tahvil." },
            { metin: "Genç bir kafe zinciri hisse sattı; hisseyi alanlar kârdan pay istiyor.", cevap: "sag", neden: "Şirkete ortak olmuşlardır: hisse (*equity*)." },
            { metin: "Her yıl sabit faiz, vadede de anapara geri geliyor.", cevap: "sol", neden: "Sabit faiz ve anapara tahvilin özelliğidir." },
            { metin: "Şirket kâr ederse temettü verir; zarar ederse hiçbir şey ödemeyebilir.", cevap: "sag", neden: "Sabit bir ödeme sözü yok: hisse." },
            { metin: "Kâğıdın sahibi şirketin ortağı değil, alacaklısıdır.", cevap: "sol", neden: "Alacaklı olmak borç vermektir: tahvil." }
          ] },
        { tip: "not", metin: "CED tahvillere faiz getiren varlıklar (*interest-bearing assets*), hisselere ortaklık payı (*equity*) der. Devlet de tahvil çıkarır; devlet tahvili almak, devlete borç vermektir." }
      ]
    },
    {
      baslik: "Takas: getiri, risk ve likidite",
      kisa: "Yüksek getiri genelde daha çok risk ya da daha az likidite ister.",
      bloklar: [
        { tip: "tablo", baslik: "Dört varlığı karşılaştıralım", head: ["Varlık", "Likidite", "Getiri", "Risk"], rows: [
            ["Nakit (*cash*)", "En yüksek", "Yok", "Çok düşük"],
            ["Vadesiz mevduat", "Çok yüksek", "Yok ya da çok düşük", "Çok düşük"],
            ["Tahvil (*bond*)", "Satmak gerekir", "Faiz: orta", "Orta"],
            ["Hisse (*stock*)", "Satmak gerekir", "Beklenen: en yüksek", "En yüksek"]
          ], not: "Bu genel bir eğilimdir. Örneğin devlet tahvili genellikle bir şirket hissesinden daha az risklidir." },
        { tip: "tuzak", metin: "Soru \"en yüksek getiri\" ile \"en düşük risk\"i aynı varlıkta arıyorsa şüphelen.", yanlis: "Bir varlık hem en getirili hem en risksiz olabilir.", dogru: "Üç özellik birbiriyle takas edilir: nakit en likit ve en az riskli ama getirisi yok; hisse beklenen getirisi en yüksek ama riski de en yüksek." }
      ]
    },
    {
      baslik: "Tahvil fiyatı ve faiz ters yönde gider",
      kisa: "Piyasa faizi artınca eski tahvilin fiyatı düşer; faiz düşünce fiyatı artar.",
      bloklar: [
        { tip: "adimlar", baslik: "Eski tahvilini satmak istiyorsun", adimlar: [
            { baslik: "Elindeki tahvil", metin: "Bir yıl sonra 1.200 TL ödeyecek eski bir tahvilin var. Ödeme sabittir; piyasa faizi değişse de değişmez." },
            { baslik: "Faiz yükselir", metin: "Yeni kâğıtlar ve mevduat artık %50 getiriyor. Alıcı eski tahvile 1.000 TL vermez: aynı 1.000 TL'yi %50 faizle yatırsa 1.500 TL alır." },
            { baslik: "Fiyat düşer", metin: "Alıcı ancak 1.200 TL'nin bugünkü karşılığına razı olur: 1.200 ÷ 1,5 = 800 TL. Faiz yükseldi, eski tahvilin fiyatı düştü." }
          ] },
        { tip: "grafik", baslik: "Eski tahvilin fiyatı (TL), piyasa faizi arttıkça düşer", xlabel: "Piyasa faizi", ylabel: "", xmax: 12, ymax: 13,
          xticks: [{ v: 2, label: "%20" }, { v: 5, label: "%50" }, { v: 10, label: "%100" }],
          yticks: [{ v: 6, label: "600" }, { v: 8, label: "800" }, { v: 10, label: "1.000" }, { v: 12, label: "1.200" }],
          ogeler: [
            { id: "fiy", tip: "egri", renk: 0, noktalar: [[0, 12], [1, 10.91], [2, 10], [3, 9.23], [4, 8.57], [5, 8], [7, 7.06], [10, 6], [11, 5.71]], etiket: "" },
            { id: "P", tip: "nokta", renk: 1, x: 2, y: 10, etiket: "1.000 TL", kilavuz: true, gizli: true },
            { id: "y1", tip: "yazi", x: 8.4, y: 11.6, metin: "Faiz ↑ → fiyat ↓", gizli: true },
            { id: "y2", tip: "yazi", x: 8.4, y: 11.6, metin: "Faiz ↓ → fiyat ↑", gizli: true }
          ],
          durumlar: [
            { metin: "Bir yıl sonra 1.200 TL ödeyen eski tahvil. Eğri, farklı piyasa faizlerinde ona verilebilecek fiyatı gösterir: fiyat = 1.200 ÷ (1 + faiz). Grafikte 1 birim = %10 ve 100 TL." },
            { metin: "Piyasa faizi %20: 1.200 ÷ 1,2 = **1.000 TL**.", goster: ["P"] },
            { metin: "Faiz %50'ye çıkar: 1.200 ÷ 1,5 = **800 TL**. Faiz ==yukarı==, eski tahvilin fiyatı ==aşağı==.", set: { P: { x: 5, y: 8, etiket: "800 TL" } }, goster: ["y1"] },
            { metin: "Faiz %100'e çıkarsa fiyat 1.200 ÷ 2 = **600 TL**'ye iner.", set: { P: { x: 10, y: 6, etiket: "600 TL" } } },
            { metin: "Faiz tekrar %20'ye inerse fiyat 800'den 1.000 TL'ye ==çıkar==. Faiz ↓, fiyat ↑.", set: { P: { x: 2, y: 10, etiket: "1.000 TL" } }, gizle: ["y1"], goster: ["y2"] }
          ] },
        { tip: "tuzak", metin: "Burada söz edilen, daha önce çıkarılmış (*previously issued*) tahvildir. Ödemesi sabit olduğu için fiyatı yalnızca piyasa faizine göre oynar.", yanlis: "Faizler yükselirse tahvil fiyatları da yükselir.", dogru: "Piyasa faizi ↑ ise eski tahvilin fiyatı ↓; faiz ↓ ise fiyat ↑. Aynı 1.200 TL'yi 1.000 TL'ye alırsan getirin %20, 800 TL'ye alırsan %50: fiyat düştükçe getiri artar." }
      ]
    },
    {
      baslik: "Para tutmanın fırsat maliyeti",
      kisa: "Para tutmanın bedeli, tahvilde kazanabileceğin faizi kaçırmaktır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Tutulan para" }, "×",
            { t: "Faiz oranı", alt: "tahvil ya da mevduat" }, "=",
            { t: "Fırsat maliyeti", alt: "kaçan faiz" }
          ], aciklama: "Nakit ya da vadesiz hesap faiz getirmediği için, tuttuğun her lira başka bir varlıkta kazanabileceğin faizi senden alır." },
        { tip: "ornek", baslik: "Kumbaradaki 2.000 TL", durum: "Kumbaranda 2.000 TL nakit var. Tahvil ve mevduat yıllık %40 faiz veriyor. Bir yıl boyunca nakit tutmanın fırsat maliyeti nedir? Faiz %20'ye inseydi ne olurdu?",
          adimlar: ["Nakitten gelen faiz: 0 TL.", "Aynı 2.000 TL tahvilde 2.000 × 0,40 = 800 TL faiz getirirdi.", "Faiz %20 olsaydı kaçan faiz 2.000 × 0,20 = 400 TL olurdu."],
          sonuc: "==800 TL== (faiz %20 olsaydı 400 TL). Faiz yükseldikçe para tutmak pahalanır ve insanlar daha az para tutmak ister; 4.5'te para talebi eğrisinin neden aşağı eğimli olduğunu bu fikir açıklayacak." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Finansal varlıklar üç özellikle değerlendirilir: *liquidity* (likidite), *rate of return* (getiri), *risk*.",
            "En likit para nakit (*cash*) ve vadesiz mevduattır (*demand deposits*); getirileri en düşüktür.",
            "Tahvil faiz getiren borç kâğıdıdır (*bond*); hisse şirkete ortaklıktır (*stock*, *equity*). Her ikisi de para değil, paranın yerine tutulabilen varlıklardır.",
            "Yüksek getiri genelde daha çok risk ya da daha az likidite demektir; üçü takas edilir.",
            "Daha önce çıkmış tahvilin fiyatı ile piyasa faizi ==ters yönde== hareket eder: faiz ↑ ise fiyat ↓.",
            "Örnek: bir yıl sonra 1.200 TL ödeyen tahvil %20 faizde 1.000 TL, %50 faizde 800 TL eder.",
            "Para tutmanın fırsat maliyeti, başka bir finansal varlıkta kazanılabilecek faizdir: tutulan para × faiz oranı.",
            "Faiz yükselince para tutmak pahalanır; bu, ilerideki para talebi eğrisinin aşağı eğimli olmasının nedenidir."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Ada elindeki 1.000 TL'yi dört biçimden birinde tutabilir. Hangisi en likit olandır ve faiz getirmez?",
      opts: ["Bir şirketin hisse senedi", "Devlet tahvili", "Cüzdanında nakit", "Şirket tahvili"],
      a: 2,
      why: "Nakit anında harcanır, yani en likit olandır; faiz getirmez. Tahvil faiz getirir ama harcamadan önce satılması gerekir. Hisse ise hem satılması gerekir hem de riski daha yüksektir."
    },
    {
      q: "Piyasa faizi %20'den %50'ye çıkıyor. Bir yıl sonra 1.200 TL ödeyecek eski bir tahvilin fiyatına ne olur?",
      opts: ["1.000 TL'den 800 TL'ye düşer", "1.000 TL'den 1.500 TL'ye çıkar", "1.000 TL'de kalır; çünkü ödeme sabittir", "1.200 TL'ye çıkar"],
      a: 0,
      why: "Fiyat = 1.200 ÷ (1 + faiz): faiz %20 iken 1.000, %50 iken 800 TL. Faiz yükselince eski tahvilin fiyatı düşer. \"Ödeme sabit, o halde fiyat sabit\" demek en çekici yanlıştır: sabit olan ödemedir, tahvilin bugünkü fiyatı değil."
    },
    {
      q: "Selin kumbarasında 3.000 TL nakit tutuyor. Aynı parayı yıllık %20 faizli tahvile koyabilirdi. Nakit tutmanın yıllık fırsat maliyeti nedir?",
      opts: ["20 TL", "600 TL", "3.000 TL", "3.600 TL"],
      a: 1,
      why: "Fırsat maliyeti = tutulan para × faiz oranı = 3.000 × 0,20 = 600 TL. 3.600 TL, faizle birlikte toplam parayı gösterir; fırsat maliyeti ise yalnızca kaçan faizdir."
    },
    {
      q: "Tabloda üç varlık özellikleriyle anlatılıyor. Hangisi büyük olasılıkla hisse senedidir?",
      fig: { type: "table", head: ["Varlık", "Getiri", "Risk", "Nakde çevirme"], rows: [["X", "Yok", "Çok düşük", "Anında harcanır"], ["Y", "Sabit faiz", "Orta", "Satmak gerekir"], ["Z", "Temettü ve fiyat artışı; belirsiz", "En yüksek", "Satmak gerekir"]] },
      opts: ["X, çünkü getirisi yok", "Y, çünkü faiz ödüyor", "Z, çünkü getirisi belirsiz ve riski en yüksek", "X, çünkü en likit olan hissedir"],
      a: 2,
      why: "Hisse ortaklıktır: getirisi temettü ve fiyat artışından gelir, sabit değildir ve riski en yüksektir. Y sabit faiz ödediği için tahvile benzer. X nakit ya da vadesiz mevduattır; en çekici yanlış olan D'de likit olanı hisseyle karıştırıyor."
    },
    {
      q: "Ekonomistlerin en likit para biçimi saydığı iki varlık hangisidir?",
      opts: ["Tahvil ve hisse senedi", "Hisse senedi ve vadesiz mevduat", "Tahvil ve nakit", "Nakit ve vadesiz mevduat"],
      a: 3,
      why: "En likit biçimler nakit (*cash*) ve vadesiz mevduattır (*demand deposits*). Tahvil ve hisse, paranın yerine tutulabilen diğer finansal varlıklardır; satılmadan harcanamazlar."
    }
  ]
};
