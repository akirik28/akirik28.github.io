/* Kitpath not defteri · py403 · 4.3 Sosyal Durumların Psikolojisi
   Kaynak: College Board CED, Topic 4.3 (4.3.A, 4.3.B, 4.3.C). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py403",
  amac: "Bu konu, başkalarının varlığının davranışımızı nasıl değiştirdiğini anlatıyor. Sosyal normları ve etkiyi, ikna yollarını, uymayı ve itaati, grup içindeki etkileri, kültürü, çalışma psikolojisini ve yardım etmeyi (*bystander effect*) öğreneceksin.",
  bolumler: [
    {
      baslik: "Sosyal normlar ve sosyal etki",
      kisa: "Normlar yazılı olmayan beklentilerdir; etki kabul görmek ya da doğruyu bulmak içindir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📜", terim: "Social norms", tr: "sosyal normlar", tanim: "Toplumun bireylerden beklediği rolleri ve davranışları tanımlayan, çoğu yazılı olmayan kurallar.", ornek: "Sınıfta öğretmen girince susmak." },
            { ikon: "🙋", terim: "Normative social influence", tr: "normatif sosyal etki", tanim: "Kabul görmek ve dışlanmamak için başkalarına uymak.", ornek: "Herkes aynı mont modelini giyince sen de alırsın." },
            { ikon: "💡", terim: "Informational social influence", tr: "bilgisel sosyal etki", tanim: "Doğru davranışı bilmediğimiz için başkalarını bilgi kaynağı sayıp onlara uymak.", ornek: "Yeni okulda hangi kapıdan girileceğini bilmediğin için herkesi izlersin." }
          ] },
        { tip: "ikili", sol: { ikon: "🙋", baslik: "*Normative* etki", maddeler: ["Amaç: sevilmek, dışlanmamak", "Utanma, onay kaygısı"] },
          sag: { ikon: "💡", baslik: "*Informational* etki", maddeler: ["Amaç: doğruyu bulmak", "Belirsizlik, uzman olmama"] },
          oyun: [
            { metin: "Kimse dans etmediği için, garip görünmemek adına sen de yerinde oturdun.", cevap: "sol", neden: "Dışlanma ve onay kaygısı: normatif etki." },
            { metin: "Uçaktan inince nereye gideceğini bilmediğin için kalabalığı izledin.", cevap: "sag", neden: "Doğru yönü bulmak için bilgi arıyorsun: bilgisel etki." },
            { metin: "Arkadaş grubundaki herkes aynı oyunu oynuyor; sen istemesen de indirdin.", cevap: "sol", neden: "Gruba uymak istiyorsun: normatif etki." },
            { metin: "Okul alarmı çaldığında herkesin çıktığını görüp tatbikat olduğunu anladın.", cevap: "sag", neden: "Başkaları sana durumu açıklayan bilgi verdi: bilgisel etki." }
          ] }
      ]
    },
    {
      baslik: "İkna: yollar ve teknikler",
      kisa: "İkna ya düşünerek (merkezî) ya da ipuçlarına bakarak (çevresel) olur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗨️", terim: "Persuasion", tr: "ikna", tanim: "Kendini ya da başkalarını bir fikre, eyleme ya da inanca yöneltmek için kullanılan teknikler.", ornek: "Bir reklam, bir ders sunumu, bir arkadaşın ısrarı." },
            { ikon: "🧠", terim: "Central route", tr: "merkezî yol", tanim: "*Elaboration likelihood model*'in birinci yolu: mesajın içeriği ve gerekçeleri dikkatle düşünülür.", ornek: "Telefon alırken fiyat, pil ve yorumları karşılaştırmak." },
            { ikon: "✨", terim: "Peripheral route", tr: "çevresel yol", tanim: "İkinci yol: içeriğe değil çekici ünlü, hoş müzik gibi yüzeysel ipuçlarına dayanır.", ornek: "Sevdiğin oyuncu reklamda olduğu için markayı almak." },
            { ikon: "😇", terim: "Halo effect", tr: "hâle etkisi", tanim: "Bir kişinin tek bir olumlu özelliğinin (çekicilik gibi) diğer özellikleri hakkındaki yargıyı da olumlu etkilemesi. Çevresel yola örnektir.", ornek: "Güzel giyinen sunucuya daha bilgili gözüyle bakmak." }
          ] },
        { tip: "ikili", sol: { ikon: "🧠", baslik: "*Central route*", maddeler: ["Mesajın içeriği düşünülür", "Kalıcı tutum değişimi"] },
          sag: { ikon: "✨", baslik: "*Peripheral route*", maddeler: ["Çekici ipuçları belirleyici", "Hızlı ama kısa süreli"] },
          oyun: [
            { metin: "Bir bilgisayar alırken özellik tablolarını okuyup bütçeni hesaplamak.", cevap: "sol", neden: "İçerik değerlendiriliyor: merkezî yol." },
            { metin: "Reklamdaki sevimli kedi yüzünden bir kuru mamayı seçmek.", cevap: "sag", neden: "Yüzeysel ipucu: çevresel yol." },
            { metin: "Aday konuşmasındaki rakamları kontrol edip tutarlı mı diye bakmak.", cevap: "sol", neden: "Argüman değerlendiriliyor: merkezî yol." },
            { metin: "Çok iyi giyinmiş bir satıcıya, ürünü bilmediği halde güvenmek.", cevap: "sag", neden: "Görünüş hâle etkisi yaratıyor: çevresel yol." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🦶", terim: "Foot-in-the-door", tr: "ayağı kapıya sokma", tanim: "Önce küçük bir isteğe evet dedirtip sonra büyük isteği sunma tekniği.", ornek: "Önce \"bir dakika dinler misin?\", sonra \"şu kulübe üye ol\"." },
            { ikon: "🚪", terim: "Door-in-the-face", tr: "kapıyı yüze çarpma", tanim: "Önce çok büyük bir istek sunup reddedilince küçük, asıl isteği sunma tekniği.", ornek: "\"Hafta sonu bütün gün yardım et.\" Hayır. \"O zaman bir saat?\"" }
          ] },
        { tip: "tuzak", metin: "İki tekniği isteklerin sırasından tanı.", yanlis: "Her ikisi de önce büyük, sonra küçük isteği kapsar.", dogru: "==*Foot-in-the-door*: küçük → büyük.== ==*Door-in-the-face*: büyük (reddedilir) → küçük.==" }
      ]
    },
    {
      baslik: "Uyma ve itaat",
      kisa: "Uyma akranlara ve yazılı olmayan normlara, itaat otorite emrine uymaktır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "👥", baslik: "*Conformity* (uyma)", maddeler: ["Unspoken kurallara ve çoğunluğa uymak", "Kimse emir vermez; Asch'in çizgi deneyi"] },
          sag: { ikon: "👔", baslik: "*Obedience* (itaat)", maddeler: ["Otoritenin açık direktifine uymak", "Milgram'ın şok deneyi"] },
          oyun: [
            { metin: "Sınıfta herkes ayağa kalkınca, kimse söylemeden sen de kalktın.", cevap: "sol", neden: "Yazılı olmayan bir normu izliyorsun: uyma." },
            { metin: "Öğretmen \"defterleri topla\" dedi ve topladın.", cevap: "sag", neden: "Açık bir emir var: itaat." },
            { metin: "Arkadaş grubunun hepsi aynı ayakkabıyı giyince sen de aldın.", cevap: "sol", neden: "Emir yok, norm var: uyma." },
            { metin: "Güvenlik görevlisi \"kapıyı kapat\" dedi, kapattın.", cevap: "sag", neden: "Otoriteden gelen direktif: itaat." }
          ] },
        { tip: "grafik", baslik: "Asch'ten yola çıkarak: çoğunluk büyüdükçe uyma", xlabel: "Aynı yanlış cevabı veren kişi sayısı", ylabel: "Uyma oranı (şematik)", xmax: 10, ymax: 8,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 5, label: "5" }, { v: 7, label: "7" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[1, 1.2], [1.03, 1.2], [1.06, 1.2], [1.09, 1.2], [1.12, 1.2], [1.15, 1.2], [1.18, 1.2]] },
            { id: "p", tip: "nokta", x: 1, y: 1.2, kilavuz: true, etiket: "1 kişi" },
            { id: "m", tip: "cizgi", renk: 2, kesik: true, from: [1, 1.5], to: [4.2, 1.5], etiket: "Müttefik varsa", gizli: true }
          ],
          durumlar: [
            { metin: "Tek bir kişi yanlış cevabı verince uyma düşüktür." },
            { metin: "Yaklaşık ==üç kişiye kadar== çoğunluk büyüdükçe uyma hızla artar.", set: { c: { noktalar: [[1, 1.2], [1.33, 1.9], [1.67, 2.6], [2, 3.5], [2.33, 4.3], [2.67, 5], [3, 5.6]] }, p: { x: 3, y: 5.6, etiket: "3 kişi" } } },
            { metin: "Sonrasında eğri yatıklaşır: çoğunluk büyümeye devam etse de uyma neredeyse sabit kalır.", set: { c: { noktalar: [[1, 1.2], [2, 3.5], [3, 5.6], [4, 5.8], [5, 5.9], [6, 6], [7, 6]] }, p: { x: 7, y: 6, etiket: "7 kişi" } } },
            { metin: "Çoğunluktan farklı cevap veren **tek bir müttefik** bile varsa uyma belirgin biçimde düşer.", goster: ["m"] }
          ] },
        { tip: "tablo", baslik: "Hangi koşullar güçlendirir?", head: ["Durum", "Uymayı artırır", "İtaati artırır"], rows: [
            ["Grup / otorite", "Oybirliği, birkaç kişilik çoğunluk", "Otoritenin yakın olması"],
            ["Durum / görünüş", "Belirsiz ya da zor iş, kendinden emin olmamak", "Otoritenin meşru ve üniformalı görünmesi"],
            ["Azaltan", "Bir müttefik, özel (gizli) cevap", "Otoritenin uzak olması, itirazcı biri"]
          ], not: "Milgram deneyi, katılımcıların yaklaşık üçte ikisinin son şoka kadar gitmesiyle ünlüdür; deney aldatma ve yüksek stres yüzünden etik açıdan tartışılır." },
        { tip: "tuzak", metin: "Asch'te kimse emir vermez; Milgram'da emir açıktır.", yanlis: "Uyma ve itaat aynı şeydir, ikisi de otoriteye bağlıdır.", dogru: "==Uyma== akran baskısıdır, ==itaat== otoriteye uymaktır." }
      ]
    },
    {
      baslik: "Grubun içinde ve önünde: dört etki",
      kisa: "İzleyici performansı, kalabalık da çabayı ve kimliği etkiler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎬", terim: "Social facilitation", tr: "sosyal kolaylaştırma", tanim: "Bir grubun önünde yapılınca iyi bilinen/kolay işlerde performans artar, yeni/zor işlerde düşer.", ornek: "Çok çalıştığın şarkıyı sahnede daha iyi çalarsın." },
            { ikon: "🛋️", terim: "Social loafing", tr: "sosyal kaytarma", tanim: "Katkısı ayrı ayrı belli olmayan grup çalışmalarında bireylerin daha az çaba göstermesi.", ornek: "8 kişilik grup ödevinde bazı üyelerin sessizce geri çekilmesi." },
            { ikon: "🫧", terim: "Diffusion of responsibility", tr: "sorumluluğun dağılması", tanim: "Grubun içinde yapılması gereken işin sorumluluğunun üyelere bölünüp herkesin payının azalması.", ornek: "Çöpü kimse toplamaz; herkes başkası toplar sanar." },
            { ikon: "🎭", terim: "Deindividuation", tr: "kimliksizleşme", tanim: "Kalabalıkta kimlik hissinin ve özdenetimin zayıflaması; normal şartlarda yapılmayacak davranışlar ortaya çıkabilir.", ornek: "Maç tribününde, tek başına söylemeyeceği sözleri söylemek." }
          ] },
        { tip: "grafik", baslik: "Sosyal kolaylaştırma: işe göre değişir", xlabel: "Görev: alışıktan yeniye", ylabel: "Performans (şematik)", xmax: 10, ymax: 10,
          xticks: [{ v: 1.5, label: "Kolay" }, { v: 7.5, label: "Zor" }],
          ogeler: [
            { id: "a", tip: "cizgi", renk: 1, from: [1, 7], to: [8, 3.5], etiket: "Yalnız" },
            { id: "g", tip: "cizgi", renk: 0, from: [1, 8.5], to: [8, 2.25], etiket: "İzleyici", gizli: true },
            { id: "t1", tip: "yazi", x: 2, y: 9.5, metin: "izleyici artırır ▲", gizli: true },
            { id: "t2", tip: "yazi", x: 8, y: 0.6, metin: "izleyici düşürür ▼", gizli: true }
          ],
          durumlar: [
            { metin: "Yalnızken görev zorlaştıkça performans düşer." },
            { metin: "Bir **izleyici** gelince, kolay ya da çok alıştığın işte performans ==yükselir==.", goster: ["g", "t1"] },
            { metin: "Aynı izleyici, zor ya da yeni işte performansı ==düşürür==. İki çizgi ortada kesişir.", goster: ["t2"] }
          ] },
        { tip: "ikili", sol: { ikon: "🎬", baslik: "*Social facilitation*", maddeler: ["İzlenmek performansı etkiler", "İşin zorluğuna bağlı"] },
          sag: { ikon: "🛋️", baslik: "*Social loafing*", maddeler: ["Grupta çaba azalır", "Katkı ayırt edilemez"] },
          oyun: [
            { metin: "Basketbolcu çok iyi bildiği serbest atışı tribünün önünde daha iyi attı.", cevap: "sol", neden: "İzleyici + alışık iş: kolaylaştırma." },
            { metin: "İp çekme yarışında 8 kişilik takımda herkes, tek başına çekerken verdiğinden daha az güç verdi.", cevap: "sag", neden: "Grupta bireysel katkı gizli: kaytarma." },
            { metin: "Yeni öğrendiği dansı izleyicilerin önünde yapınca adımları şaşırdı.", cevap: "sol", neden: "İzleyici + yeni iş: performans düştü, yine kolaylaştırma." },
            { metin: "Grup projesinde kimin ne yaptığı notta ayrı ayrı yazılmayınca bazıları az çalıştı.", cevap: "sag", neden: "Katkı ayırt edilemiyor: kaytarma." }
          ] }
      ]
    },
    {
      baslik: "Grup kararları: kutuplaşma, grup düşüncesi, yanlış fikir birliği",
      kisa: "Gruplar fikirleri uçlaştırabilir, uyum uğruna eleştiriyi susturabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Group polarization", tr: "grup kutuplaşması", tanim: "Grup tartışması, üyelerin başlangıçtaki eğilimini daha uç bir noktaya taşır.", ornek: "Hafif destekçiler konuştukça hepsi \"tam destek\" noktasına gider." },
            { ikon: "🤐", terim: "Groupthink", tr: "grup düşüncesi", tanim: "Uyum isteği, gerçekçi değerlendirmenin önüne geçer; itirazlar bastırılır, kötü karar çıkar.", ornek: "Kimse \"bu plan çalışmaz\" demeye cesaret edemez." },
            { ikon: "🙋", terim: "False consensus effect", tr: "yanlış fikir birliği etkisi", tanim: "Başkalarının bizimle ne kadar aynı fikirde olduğunu olduğundan fazla sanma.", ornek: "\"Herkes bu diziyi sevmiştir.\"" }
          ] },
        { tip: "grafik", baslik: "Tartışmadan sonra görüşler uçlaşır", xlabel: "Grup üyeleri", ylabel: "Destek (0–10)", xmax: 6, ymax: 10,
          xticks: [{ v: 1, label: "A" }, { v: 2, label: "B" }, { v: 3, label: "C" }, { v: 4, label: "D" }, { v: 5, label: "E" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "a", tip: "alan", renk: 0, noktalar: [[0.7, 0], [1.3, 0], [1.3, 6], [0.7, 6]] },
            { id: "b", tip: "alan", renk: 0, noktalar: [[1.7, 0], [2.3, 0], [2.3, 6.5], [1.7, 6.5]] },
            { id: "c", tip: "alan", renk: 0, noktalar: [[2.7, 0], [3.3, 0], [3.3, 7], [2.7, 7]] },
            { id: "d", tip: "alan", renk: 0, noktalar: [[3.7, 0], [4.3, 0], [4.3, 6], [3.7, 6]] },
            { id: "e", tip: "alan", renk: 0, noktalar: [[4.7, 0], [5.3, 0], [5.3, 6.5], [4.7, 6.5]] },
            { id: "ok", tip: "ok", renk: 2, from: [3, 7.6], to: [3, 9.6], gizli: true }
          ],
          durumlar: [
            { metin: "Tartışmadan önce herkes konuya hafifçe olumlu bakıyor (6–7 arası)." },
            { metin: "Grup yalnızca kendi eğilimini destekleyen görüşleri konuşuyor.", goster: ["ok"] },
            { metin: "Tartışmadan sonra herkes daha uçta: ==ortalama görüş ilk eğilimin yönünde aşırılaşıyor==.", set: { a: { noktalar: [[0.7, 0], [1.3, 0], [1.3, 8.5], [0.7, 8.5]] }, b: { noktalar: [[1.7, 0], [2.3, 0], [2.3, 9], [1.7, 9]] }, c: { noktalar: [[2.7, 0], [3.3, 0], [3.3, 9.5], [2.7, 9.5]] }, d: { noktalar: [[3.7, 0], [4.3, 0], [4.3, 8.5], [3.7, 8.5]] }, e: { noktalar: [[4.7, 0], [5.3, 0], [5.3, 9], [4.7, 9]] } }, gizle: ["ok"] }
          ] },
        { tip: "tuzak", metin: "Üç kavram da grupla ilgilidir; ayırmak için neyin değiştiğine bak.", yanlis: "*Groupthink*, grubun fikirlerini uçlaştırmasıdır.", dogru: "==*Polarization*: görüşlerin uçlaşması.== ==*Groupthink*: uyum uğruna itirazın susması ve kötü karar.== ==*False consensus*: başkalarının bizimle aynı fikirde olduğunu abartmak.==" }
      ]
    },
    {
      baslik: "Kültür, ortak hedef, sosyal tuzak",
      kisa: "Kültür bakışı şekillendirir; ortak hedef gruplar arasını yumuşatır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧍", baslik: "*Individualism*", maddeler: ["Kişisel hedefler ve bağımsızlık ön planda", "\"Ben\" vurgusu"] },
          sag: { ikon: "🫂", baslik: "*Collectivism*", maddeler: ["Grup hedefleri ve uyum ön planda", "\"Biz\" vurgusu"] },
          oyun: [
            { metin: "Üniversite seçerken önce kendi hayalini ve ilgi alanını düşünmek.", cevap: "sol", neden: "Kişisel hedef öncelikli: bireycilik." },
            { metin: "Karar verirken ailenin ve yakın çevrenin huzurunu ilk sıraya koymak.", cevap: "sag", neden: "Grup uyumu öncelikli: toplulukçuluk." },
            { metin: "Başarıyı \"ben yaptım\" diye sahiplenmek.", cevap: "sol", neden: "Bireysel kimlik vurgusu: bireycilik." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌈", terim: "Multiculturalism", tr: "çokkültürlülük", tanim: "Bir toplumda farklı kültürlerin yan yana yaşaması; insanın kendine ve başkasına bakışını etkiler.", ornek: "Farklı bölgelerden öğrencilerin bir arada okuduğu bir okul." },
            { ikon: "🎯", terim: "Superordinate goals", tr: "üst hedefler", tanim: "Ayrı grupları ortak bir amaç etrafında birleştirir; gruplar arası olumsuz duyguları ve kalıp yargıları azaltır.", ornek: "İki rakip sınıfın okul şenliği için birlikte çalışması." },
            { ikon: "🪤", terim: "Social trap", tr: "sosyal tuzak", tanim: "Bireylerin birleşmeyip kendi çıkarına davranması ve bunun gruba zarar vermesi.", ornek: "Herkes kısa vadeli rahat için ortak bahçeyi kirletirse bahçe herkes için kullanılmaz olur." }
          ] }
      ]
    },
    {
      baslik: "Çalışma hayatı: endüstri-örgüt psikolojisi",
      kisa: "I/O psikologları insanların işte nasıl performans gösterdiğini inceler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💼", terim: "Industrial-organizational (I/O) psychology", tr: "endüstri-örgüt psikolojisi", tanim: "İş yerinde insanların nasıl performans gösterdiğini inceleyen alan.", ornek: "Bir şirkette ekip verimini artırmanın yolları." },
            { ikon: "🔥", terim: "Burnout", tr: "tükenmişlik", tanim: "İşe duyulan duyguların yıpranması; uzun süreli aşırı iş stresiyle gelen bitkinlik.", ornek: "Sürekli fazla mesai yapan bir çalışanın işe ilgisini kaybetmesi." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🧭", baslik: "İşin yönetimi", metin: "En iyi yönetim uygulamaları." },
            { ikon: "🤝", baslik: "İlişkiler", metin: "Aynı şirkette ya da programda birlikte çalışanlar arasındaki ilişkiler." },
            { ikon: "💬", baslik: "İş duyguları", metin: "İnsanların işleri hakkında hissettikleri; tükenmişlik buna girer." }
          ] }
      ]
    },
    {
      baslik: "Yardım etme ve seyirci etkisi",
      kisa: "Çevrede başkaları arttıkça tek bir kişinin yardım etme ihtimali düşer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎁", terim: "Altruism", tr: "özgecilik", tanim: "Karşılık beklemeden yapılan özverili davranış. Bazı araştırmacılar ise bunun sosyal borçtan kaynaklandığını öne sürer.", ornek: "Yağmurda bir yabancıyı şemsiyenle eve bırakmak." },
            { ikon: "🔄", terim: "Social reciprocity norm", tr: "karşılıklılık normu", tanim: "Bize iyilik yapana iyilikle karşılık verme beklentisi.", ornek: "Defterini veren arkadaşına ertesi gün sen yardım edersin." },
            { ikon: "🧑‍🤝‍🧑", terim: "Social responsibility norm", tr: "sosyal sorumluluk normu", tanim: "İhtiyacı olanlara, karşılık beklemeden yardım etmemiz gerektiği beklentisi.", ornek: "Yaşlı birinin ağır poşetini taşımak." }
          ] },
        { tip: "grafik", baslik: "Tanık sayısı arttıkça yardım azalır", xlabel: "Olayı gören kişi sayısı", ylabel: "Birinin yardım etme ihtimali (şematik)", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[1, 9], [2, 6.5], [3, 5], [4, 4.2], [6, 3.3], [8, 2.8]], gizli: true },
            { id: "n1", tip: "nokta", x: 1, y: 9, kilavuz: true, etiket: "Tek tanık", gizli: true },
            { id: "n3", tip: "nokta", x: 3, y: 5, kilavuz: true, etiket: "3 tanık", gizli: true },
            { id: "n8", tip: "nokta", x: 8, y: 2.8, kilavuz: true, etiket: "8 tanık", gizli: true }
          ],
          durumlar: [
            { metin: "Olayı **tek başına** gören kişi sorumluluğun kendisine ait olduğunu bilir: yardım ihtimali yüksek.", goster: ["n1"] },
            { metin: "Tanık sayısı artınca sorumluluk dağılır; herkes \"başkası yardım eder\" der.", goster: ["n3"] },
            { metin: "Kalabalıkta tek bir kişinin yardım etme ihtimali ==en düşük==.", goster: ["c", "n8"] }
          ] },
        { tip: "adimlar", baslik: "Yardım etmeden önce zihinden geçenler (*situational* + *attentional* değişkenler)", adimlar: [
            { baslik: "Fark et", metin: "Dikkatin başka yerdeyse (telefon, kulaklık) olayı hiç görmezsin." },
            { baslik: "Acil durum olarak yorumla", metin: "Başkaları sakinse \"bir şey yok\" sanırsın." },
            { baslik: "Sorumluluğu üstlen", metin: "Kalabalık varsa sorumluluk dağılır: ==*diffusion of responsibility*==." },
            { baslik: "Yardım et", metin: "Ancak bu adımlardan geçersen harekete geçersin." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Social norms*: yazılı olmayan beklentiler. Etki *normative* (kabul görmek) ya da *informational* (doğruyu bulmak) olur.",
            "İkna: *central route* içeriği düşünür, *peripheral route* ipuçlarına bakar; *halo effect* çevresel yoldur.",
            "*Foot-in-the-door*: küçük → büyük istek. *Door-in-the-face*: büyük (red) → küçük istek.",
            "*Conformity* (uyma, Asch) normlara ve çoğunluğa; *obedience* (itaat, Milgram) otoriteye uymaktır.",
            "*Social facilitation* izlenmenin alışık işte performansı artırması; *social loafing* grupta çabanın azalması.",
            "*Diffusion of responsibility*: sorumluluğun dağılması; *deindividuation*: kalabalıkta kimliksizleşme.",
            "*Group polarization* görüşleri uçlaştırır; *groupthink* uyum uğruna eleştiriyi susturur; *false consensus effect* başkalarının bize katılımını abartır.",
            "*Individualism*/*collectivism*/*multiculturalism* kültürel bakışı biçimlendirir; *superordinate goals* gruplar arası gerilimi azaltır; *social trap* grubun zararına bireysel çıkardır.",
            "*Bystander effect*: tanık sayısı arttıkça yardım azalır. I/O psikologları işyerinde performansı ve tükenmişliği inceler."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Arda yeni okulunda yemekhanede tepsilerin nereye bırakılacağını bilmiyor. Çevresine bakıp herkesin tepsileri bandın üstüne koyduğunu görünce o da öyle yapıyor. Bu durum en iyi hangi kavramla açıklanır?",
      opts: ["*Normative social influence*", "*Informational social influence*", "*Social loafing*", "*Deindividuation*"],
      a: 1,
      why: "Arda doğru davranışı bilmediği için başkalarını bilgi kaynağı olarak kullanıyor: *informational social influence*. En çekici yanlış şık A: normatif etkide amaç kabul görmektir; burada Arda'nın tek derdi doğruyu öğrenmek." },
    { q: "Bir şampuan reklamında sevilen bir şarkıcı ürünü öneriyor. Pelin ürünün içeriğine bakmadan, şarkıcıyı sevdiği için şampuanı alıyor. Pelin'in ikna sürecini en iyi hangisi anlatır?",
      opts: ["*Peripheral route*", "*Central route*", "*Foot-in-the-door*", "*Group polarization*"],
      a: 0,
      why: "Ürünün içeriği yerine şarkıcının çekiciliği gibi yüzeysel bir ipucuna dayanıyor: çevresel yol. En çekici yanlış şık B: merkezî yol mesajın içeriğinin dikkatle düşünülmesini gerektirir." },
    { q: "Berk, arkadaşı Cem'den önce \"Bu hafta bütün derslerimde bana özel ders vermeni\" istiyor. Cem reddedince Berk \"O zaman şu tek soruyu çözer misin?\" diyor ve Cem kabul ediyor. Bu teknik hangisidir?",
      opts: ["*Foot-in-the-door*", "*Halo effect*", "*Door-in-the-face*", "*Social facilitation*"],
      a: 2,
      why: "Önce büyük istek, reddedilince küçük istek: *door-in-the-face*. En çekici yanlış şık A: *foot-in-the-door* tersine, önce küçük isteği kabul ettirir." },
    { q: "Bir araştırmacı, çizgi uzunluğunu yargılayan denekleri aynı yanlış cevabı veren farklı sayıda yardımcıyla bir odaya yerleştiriyor. Sonuçlar tabloda. Tablodan en iyi hangi sonuç çıkarılır? (Veriler varsayımsaldır.)",
      fig: { type: "table", caption: "Yanlış cevaba uyma oranı (%)", head: ["Yardımcı sayısı", "Uyma oranı"], rows: [["1", "4"], ["3", "30"], ["6", "31"], ["9", "31"]] },
      opts: ["Yardımcı sayısı arttıkça uyma sınırsız artar", "Uyma, yardımcı sayısıyla ters orantılıdır", "Çoğunluk büyüklüğünün uyma üzerinde hiçbir etkisi yoktur", "Uyma birkaç kişiye kadar artar, sonra yaklaşık sabit kalır"],
      a: 3,
      why: "Uyma %4'ten %30'a kadar hızla yükseliyor, sonra %31'de kalıyor. A şıkkı en çekici yanlış: yatıklaşan eğriyi sürekli artış sanır." },
    { q: "Kantinde bir öğrenci fenalaşıp yere yığılıyor. Çevrede 40 kişi var ama kimse harekete geçmiyor; herkes başkasının yardım edeceğini düşünüyor. Bu durumu en iyi hangi kavram açıklar?",
      opts: ["*Social facilitation*", "*Diffusion of responsibility*", "*Group polarization*", "*False consensus effect*"],
      a: 1,
      why: "Kalabalıkta sorumluluk üyelere bölünüyor; kimse kendini sorumlu hissetmiyor: *diffusion of responsibility* (seyirci etkisinin nedeni). En çekici yanlış şık D: yanlış fikir birliği, başkalarının bizimle aynı düşündüğünü abartmaktır." }
  ]
};
