/* Kitpath not defteri · py505 · 5.5 Psikolojik Bozuklukların Tedavisi
   Kaynak: College Board CED, Topic 5.5 (5.5.A–G). Blok türleri: /ap/_kit/defter.js başı.
   Not: tedavi anlatımı bilgilendiricidir; kimseye tedavi önerilmez, ilaç ve tedaviye uzman karar verir. */
window.DEFTER = {
  slug: "py505",
  amac: "Bu konu psikolojik bozuklukların nasıl tedavi edildiğini anlatıyor. Psikoterapinin etkililiğini ve etik ilkeleri, psikodinamik, hümanistik, bilişsel, davranışçı ve bilişsel-davranışçı teknikleri, grup terapisini, hipnozu ve biyolojik tedavileri öğreneceksin.",
  bolumler: [
    {
      baslik: "Terapi işe yarar mı? Eğilimler ve etik",
      kisa: "Psikoterapi genel olarak etkilidir; tedavi etik ilkelere ve güvene dayanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📊", terim: "Meta-analysis", tr: "meta-analiz", tanim: "Birçok araştırmanın sonuçlarını birleştiren inceleme. Psikoterapi üzerine yapılan meta-analizler psikoterapilerin genellikle etkili olduğunu bulmuştur.", ornek: "Yüzlerce terapi çalışmasının birlikte değerlendirilmesi." },
            { ikon: "🔬", terim: "Evidence-based intervention", tr: "kanıta dayalı müdahale", tanim: "Araştırmalarla etkililiği gösterilmiş yöntemlerle tedavi planı yapmak.", ornek: "Bir kaygı bozukluğu için etkililiği kanıtlanmış bir terapiyi seçmek." },
            { ikon: "🤝", terim: "Therapeutic alliance", tr: "terapötik ittifak", tanim: "Terapist ile danışan arasındaki güvene dayalı iş birliği. Terapinin başarısı için gereklidir. Terapist ayrıca kültürel alçakgönüllülük (*cultural humility*) göstermelidir.", ornek: "Danışanın kültürel geçmişini merak edip öğrenmeye açık olmak." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "20. yüzyıl ortası", baslik: "Büyük kurumlar", metin: "Çok sayıda kişi hastane ve bakımevlerinde uzun süre kalıyordu." },
            { tarih: "20. yüzyıl ortası–sonu", baslik: "Psikotropik ilaçlar", metin: "İlaç tedavisi yaygınlaştı ve etkililiği arttı." },
            { tarih: "20. yüzyıl ikinci yarısı (1950'ler–1980'ler)", baslik: "Kurumsuzlaştırma", metin: "Kurumlardaki çok sayıda kişi toplum içinde yaşamaya geçti (*deinstitutionalization*)." },
            { tarih: "Bugün", baslik: "Merkezsiz tedavi", metin: "Çoğunlukla ilaç ile psikolojik terapi birlikte, toplum içinde uygulanır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🛡️", terim: "Nonmaleficence", tr: "zarar vermeme", tanim: "Danışana zarar vermemek; zarar riski varsa yöntemi değiştirmek.", ornek: "Zarar verdiğini fark edince tedaviyi gözden geçirmek." },
            { ikon: "🤲", terim: "Fidelity", tr: "bağlılık, sadakat", tanim: "Danışana ve mesleki sorumluluklarına bağlı kalmak.", ornek: "Verilen sözü ve oturum sorumluluğunu yerine getirmek." },
            { ikon: "💎", terim: "Integrity", tr: "dürüstlük", tanim: "Dürüst, doğru ve tutarlı davranmak.", ornek: "Kendi yetkinliğinin sınırlarını açıkça söylemek." },
            { ikon: "⚖️", terim: "Respect for people's rights and dignity", tr: "kişilerin hak ve onuruna saygı", tanim: "Danışanın haklarını, özerkliğini ve gizliliğini korumak.", ornek: "Danışanın özel bilgilerini izni olmadan paylaşmamak." }
          ] }
      ]
    },
    {
      baslik: "Psikodinamik ve hümanistik terapiler",
      kisa: "Psikodinamik terapi bilinçdışını açığa çıkarır; hümanistik terapi kabul ve dinlemeye dayanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗣️", terim: "Free association", tr: "serbest çağrışım", tanim: "Danışanın aklına gelen her şeyi sansürlemeden söylemesi; bilinçdışı içerik böylece ortaya çıkabilir.", ornek: "\"Bu kelime aklıma şunu getirdi…\" diye düşünmeden konuşmak." },
            { ikon: "🌙", terim: "Dream interpretation", tr: "rüya yorumu", tanim: "Rüyaların gizli anlamını araştırarak bilinçdışını anlamaya çalışmak.", ornek: "Tekrar eden bir rüyadaki sembolleri konuşmak." },
            { ikon: "👂", terim: "Active listening", tr: "etkin dinleme", tanim: "Danışanı dikkatle dinleyip onu anladığını yansıtmak; hümanistik (kişi merkezli) terapide kullanılır.", ornek: "\"Anladığım kadarıyla çok bunaldın.\"" },
            { ikon: "🤗", terim: "Unconditional positive regard", tr: "koşulsuz olumlu saygı", tanim: "Danışanı yargılamadan olduğu gibi kabul etmek; kişi merkezli terapinin temelidir.", ornek: "Danışanın duygusunu eleştirmeden kabul etmek." }
          ] },
        { tip: "ikili", sol: { ikon: "🧊", baslik: "Psikodinamik terapi", maddeler: ["Bilinçdışını açığa çıkarmak", "Serbest çağrışım, rüya yorumu"] },
          sag: { ikon: "🌱", baslik: "Hümanistik (kişi merkezli) terapi", maddeler: ["Kabul edici, güvenli ortam", "Etkin dinleme, koşulsuz saygı"] },
          oyun: [
            { metin: "Terapist, danışandan aklına gelen her şeyi sansürsüz söylemesini istiyor.", cevap: "sol", neden: "Serbest çağrışım: psikodinamik." },
            { metin: "Terapist, danışanı yargılamadan dinliyor ve duygularını yansıtıyor.", cevap: "sag", neden: "Etkin dinleme ve koşulsuz saygı: hümanistik." },
            { metin: "Danışan, gördüğü rüyayı anlatıyor ve terapist sembolleri araştırıyor.", cevap: "sol", neden: "Rüya yorumu: psikodinamik." }
          ] }
      ]
    },
    {
      baslik: "Bilişsel ve bilişsel-davranışçı terapiler",
      kisa: "Bilişsel terapi uyumsuz düşünceleri değiştirir; bilişsel-davranışçı terapi düşünce ve davranışı birleştirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔄", terim: "Cognitive restructuring", tr: "bilişsel yeniden yapılandırma", tanim: "Uyumsuz düşünceyi fark etmek, kanıtını sorgulamak ve daha dengeli bir düşünceyle değiştirmek.", ornek: "\"Hiçbir şeyi beceremem\" yerine \"Bu sınav zayıftı ama başka konularda başarılıyım.\"" },
            { ikon: "🔺", terim: "Cognitive triad", tr: "bilişsel üçlü", tanim: "Bilişsel terapinin odağı: kendi hakkında, dünya hakkında ve gelecek hakkında olumsuz düşünceler.", ornek: "\"Ben yetersizim, dünya adaletsiz, gelecek umutsuz.\"" },
            { ikon: "🧩", terim: "CBT, DBT, REBT", tr: "bilişsel-davranışçı terapiler", tanim: "Bilişsel ve davranışçı teknikleri birleştirir. *Dialectical behavior therapy* (DBT) ile *rational emotive behavior therapy* (REBT) buna örnektir.", ornek: "Düşünceyi sorgulayıp korkulan duruma kademeli yaklaşmak." }
          ] },
        { tip: "ornek", baslik: "Düşünceyi yeniden çerçevelemek", durum: "Kemal bir sınavdan düşük alınca \"Ben hiçbir şeyi beceremem, geleceğim kötü\" diye düşünüyor. Terapist onunla bu düşünceyi inceliyor.",
          adimlar: ["Düşünceyi yakala: \"Hiçbir şeyi beceremem.\"", "Kanıtı sorgula: Kemal başka derslerde başarılı olduğunu hatırlıyor.", "Daha dengeli düşünce kur: \"Bu sınav zayıftı; çalışarak düzeltebilirim.\""],
          sonuc: "==Bilişsel yeniden yapılandırma==: bilişsel üçlüdeki olumsuz düşünceler (benlik, dünya, gelecek) kanıta göre dengelenir." },
        { tip: "ikili", sol: { ikon: "💭", baslik: "Bilişsel teknik", maddeler: ["Düşünceyi sorgulamak", "Dengeli düşünce kurmak"] },
          sag: { ikon: "🎯", baslik: "Davranışçı teknik", maddeler: ["Korkulan duruma kademeli yaklaşmak", "Davranışı ödüllendirmek"] },
          oyun: [
            { metin: "\"Herkes beni yargılar\" düşüncesinin kanıtını tartmak.", cevap: "sol", neden: "Düşünceyi sorgulama: bilişsel." },
            { metin: "Sosyal ortamlara adım adım, kolaydan zora doğru girmek.", cevap: "sag", neden: "Kademeli maruz kalma: davranışçı." },
            { metin: "\"Başarısız olursam her şey biter\" inancını daha gerçekçi bir cümleyle değiştirmek.", cevap: "sol", neden: "Düşünce değiştirme: bilişsel." }
          ] }
      ]
    },
    {
      baslik: "Davranışçı terapiler: maruz bırakma ve ödül",
      kisa: "Uygulamalı davranış analizi, koşullanma ilkeleriyle bozuklukları ve gelişimsel güçlükleri ele alır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪜", terim: "Exposure therapy (systematic desensitization)", tr: "maruz bırakma (sistematik duyarsızlaştırma)", tanim: "Korkulan uyaranlara, gevşemeyi öğrendikten sonra, hafiften şiddetliye uzanan bir korku hiyerarşisiyle kademeli olarak maruz bırakma.", ornek: "Yüksekten korkan kişinin önce fotoğraflara, sonra balkona kademeli olarak yaklaşması." },
            { ikon: "🚫", terim: "Aversion therapy", tr: "tiksindirme terapisi", tanim: "İstenmeyen davranışı hoş olmayan bir uyaranla eşleştirmek; etik açıdan tartışmalıdır.", ornek: "İstenmeyen alışkanlığı rahatsız edici bir tada eşleştirmek." },
            { ikon: "🪙", terim: "Token economy", tr: "jeton ekonomisi", tanim: "İstenen davranış jetonla ödüllendirilir; jetonlar ödülle değiştirilir (edimsel koşullanma).", ornek: "Ödev yapınca jeton kazanıp jetonu oyun süresiyle değiştirmek." },
            { ikon: "📟", terim: "Biofeedback", tr: "biyogeribildirim", tanim: "Kalp atışı gibi bedensel tepkileri izleyip koşullanma ilkeleriyle bunları düzenlemeyi öğrenmek; sempatik ve parasempatik sistemlerin dengesini destekler.", ornek: "Ekranda kalp atışını görerek yavaşlatmayı öğrenmek." }
          ] },
        { tip: "grafik", baslik: "Korku hiyerarşisinde adım adım ilerlemek", xlabel: "Hiyerarşi basamağı (kolaydan zora)", ylabel: "Kaygı (0–10)", xmax: 6, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 2, noktalar: [[0.7, 0], [1.3, 0], [1.3, 2], [0.7, 2]] },
            { id: "b2", tip: "alan", renk: 2, noktalar: [[1.7, 0], [2.3, 0], [2.3, 4], [1.7, 4]] },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[2.7, 0], [3.3, 0], [3.3, 6], [2.7, 6]] },
            { id: "b4", tip: "alan", renk: 2, noktalar: [[3.7, 0], [4.3, 0], [4.3, 8], [3.7, 8]] },
            { id: "b5", tip: "alan", renk: 2, noktalar: [[4.7, 0], [5.3, 0], [5.3, 9.5], [4.7, 9.5]] }
          ],
          durumlar: [
            { metin: "Korkulan durumlar hafiften şiddetliye sıralanır: ==korku hiyerarşisi==. Önce gevşeme öğrenilir." },
            { metin: "1. basamakta gevşemiş halde maruz kalınır; kaygı **hızla düşer**.", set: { b1: { noktalar: [[0.7, 0], [1.3, 0], [1.3, 0.6], [0.7, 0.6]] } } },
            { metin: "Rahatlayınca 2. basamağa geçilir ve o da yatışır.", set: { b2: { noktalar: [[1.7, 0], [2.3, 0], [2.3, 0.8], [1.7, 0.8]] } } },
            { metin: "3. basamak da aynı şekilde yatışır.", set: { b3: { noktalar: [[2.7, 0], [3.3, 0], [3.3, 0.8], [2.7, 0.8]] } } },
            { metin: "4. ve 5. basamaklar: en korkulan duruma bile gevşemiş halde dayanabilir hale gelinir. ==Kademeli ilerleme, kaygının yerini gevşemeye bırakır==.", set: { b4: { noktalar: [[3.7, 0], [4.3, 0], [4.3, 1], [3.7, 1]] }, b5: { noktalar: [[4.7, 0], [5.3, 0], [5.3, 1.2], [4.7, 1.2]] } } }
          ] },
        { tip: "tuzak", metin: "Dört teknik de aynı çatı altındadır.", yanlis: "Maruz bırakma, jeton ekonomisi ve tiksindirme terapisi farklı bakışlardan gelir.", dogru: "Hepsi *applied behavior analysis*'e, yani ==koşullanma ilkelerinin uygulanmasına== dayanır. Korku hiyerarşisini CED bilişsel terapi başlığında da sayar; ana bağ yine maruz bırakmadır." }
      ]
    },
    {
      baslik: "Grup terapisi ve hipnoz",
      kisa: "Grup terapisi birden çok kişiyle yapılır; hipnoz ağrıda ve kaygıda işe yarar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "👤", baslik: "Bireysel terapi", maddeler: ["Terapist ve tek danışan", "Kişiye özel ilgi"] },
          sag: { ikon: "👥", baslik: "Grup terapisi", maddeler: ["Terapist ve birden çok danışan", "Benzer deneyimleri paylaşma, destek"] },
          oyun: [
            { metin: "Aynı sorunu yaşayan altı kişi bir terapistle birlikte konuşuyor.", cevap: "sag", neden: "Birden çok danışan: grup terapisi." },
            { metin: "Danışan haftada bir, tek başına terapistle görüşüyor.", cevap: "sol", neden: "Tek danışan: bireysel terapi." },
            { metin: "Danışan başkalarının benzer yaşantılarını duyup yalnız olmadığını hissediyor.", cevap: "sag", neden: "Paylaşım ve destek, grubun avantajı." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌀", terim: "Hypnosis", tr: "hipnoz", tanim: "Telkinlere açık, odaklanmış bir farkındalık durumu. Ağrı ve kaygıyı azaltmada etkili olduğu gösterilmiştir.", ornek: "Diş tedavisi sırasında ağrıyı yönetmek için hipnoz kullanmak." }
          ] },
        { tip: "tuzak", metin: "Hipnozun gücü sık abartılır.", yanlis: "Hipnoz, unutulmuş anıları doğru biçimde geri getirir ve kişiyi çocukluğuna döndürebilir.", dogru: "Araştırmalar ==hipnozun doğru anıları geri getirmek ya da yaşa gerileme== için desteklenmediğini gösterir. Etkililiği ==ağrı ve kaygı== için gösterilmiştir." }
      ]
    },
    {
      baslik: "İlaç tedavisi (psikoaktif ilaçlar)",
      kisa: "Psikoaktif ilaçlar nörotransmitterlerle etkileşir; yan etkileri olabilir.",
      bloklar: [
        { tip: "tablo", baslik: "Psikoaktif ilaç grupları", head: ["Grup", "Hangi durumda kullanılır?", "Not"], rows: [
            ["Antidepresanlar", "Depresyon, bazı kaygı bozuklukları", "Nörotransmitter düzeylerini etkiler"],
            ["Antianksiyete ilaçları", "Kaygıyı azaltmak için", "Sinir sistemi etkinliğini yatıştırır"],
            ["Lityum", "Bipolar bozuklukta duygudurum dengelemek", "Duygudurum dalgalanmalarını dengeler"],
            ["Antipsikotikler", "Şizofreni spektrumu bozukluklarında", "Dopamin sistemini etkiler"]
          ], not: "İlaçlar yalnızca doktor reçetesiyle ve kontrolünde kullanılır. Birçok kişi ilaç ile terapiyi birlikte kullanır." },
        { tip: "tuzak", metin: "İlaçların yan etkileri vardır; sınav özellikle birini sorar.", yanlis: "Antipsikotik ilaçların yan etkisi yoktur; yalnızca belirtileri azaltır.", dogru: "Bazı ilaçlar **tardif diskinezi** gibi yan etkilere yol açabilir: dopaminin düzenlenmesiyle ilişkili bir hareket bozukluğu. Antipsikotiklerin dopamin sistemiyle etkileşimi bu ilişkiyi açıklar." }
      ]
    },
    {
      baslik: "Cerrahi ve invaziv girişimler",
      kisa: "Psikocerrahi, TMS ve elektrokonvülsif tedavi biyolojik girişimlerdir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚡", terim: "Electroconvulsive therapy (ECT)", tr: "elektrokonvülsif tedavi", tanim: "Beyne kontrollü elektrik akımı verilir. Genellikle diğer tedavilere yanıt vermeyen ağır depresyonda düşünülür.", ornek: "Anestezi altında uygulanan modern ECT." },
            { ikon: "🧲", terim: "Transcranial magnetic stimulation (TMS)", tr: "transkraniyal manyetik uyarım", tanim: "Manyetik darbelerle beynin belirli bölgelerini uyaran bir yöntem; cerrahi gerektirmez.", ornek: "Başın üzerine yerleştirilen bir bobinle uyarım." },
            { ikon: "🔪", terim: "Psychosurgery / lobotomy", tr: "psikocerrahi / lobotomi", tanim: "Beyin dokusunun cerrahi olarak bozulması (*lesioning*). Lobotomi 20. yüzyıl ortasında yaygındı; bugün nadiren, hatta hiç uygulanmaz.", ornek: "Tarihsel bir uygulama olarak lobotomi." }
          ] },
        { tip: "tuzak", metin: "TMS'nin cerrahi gerektirmediğini bil; CED bunu \"cerrahi veya invaziv\" grubunda sayar.", yanlis: "Lobotomi, günümüzde ağır depresyonun standart tedavisidir.", dogru: "==Lobotomi tarihsel bir uygulamadır== ve bugün nadiren, hatta hiç yapılmaz; ECT ve TMS ise bugün kullanılan biyolojik girişimlerdir." }
      ]
    },
    {
      baslik: "Hangi yaklaşım hangi tekniği kullanır?",
      kisa: "Her tedavi bakışının kendine özgü teknikleri vardır.",
      bloklar: [
        { tip: "tablo", baslik: "Tedavi yaklaşımları bir arada", head: ["Yaklaşım", "Teknik", "Anahtar"], rows: [
            ["Psikodinamik", "Serbest çağrışım, rüya yorumu", "Bilinçdışını ortaya çıkarmak"],
            ["Hümanistik", "Etkin dinleme, koşulsuz olumlu saygı", "Kabul ve güvenli ortam"],
            ["Bilişsel", "Bilişsel yeniden yapılandırma, bilişsel üçlü", "Düşünceyi değiştirmek"],
            ["Davranışçı (ABA)", "Maruz bırakma, tiksindirme, jeton ekonomisi, biyogeribildirim", "Koşullanma ilkeleri"],
            ["Bilişsel-davranışçı", "DBT, REBT", "Düşünce + davranış"],
            ["Biyolojik", "İlaç, ECT, TMS, psikocerrahi", "Biyokimyasal ve fizyolojik müdahale"]
          ] },
        { tip: "tuzak", metin: "İsimler karıştırılır.", yanlis: "Serbest çağrışım hümanistik, etkin dinleme psikodinamik terapide kullanılır.", dogru: "==Serbest çağrışım== ve rüya yorumu ==psikodinamik==, ==etkin dinleme== ve koşulsuz olumlu saygı ==hümanistik== terapiye aittir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Meta-analizler psikoterapinin genellikle etkili olduğunu gösterir; terapist kültürel alçakgönüllülük ve terapötik ittifak kurmalıdır.",
            "İlaçların yaygınlaşmasıyla kurumsuzlaştırma oldu; bugün çoğu zaman ilaç ve psikolojik terapi birlikte kullanılır.",
            "APA etik ilkeleri: *nonmaleficence*, *fidelity*, *integrity*, kişilerin hak ve onuruna saygı.",
            "Psikodinamik: serbest çağrışım, rüya yorumu. Hümanistik: etkin dinleme, koşulsuz olumlu saygı.",
            "Bilişsel: bilişsel yeniden yapılandırma, bilişsel üçlü. Bilişsel-davranışçı: DBT, REBT.",
            "Davranışçı (ABA): maruz bırakma (sistematik duyarsızlaştırma), tiksindirme, jeton ekonomisi, biyogeribildirim.",
            "Grup terapisi birden çok danışanla yapılır; hipnoz ağrı ve kaygıda etkilidir, doğru anı geri getirmede değil.",
            "İlaç grupları: antidepresanlar, antianksiyete ilaçları, lityum, antipsikotikler; yan etki örneği *tardive dyskinesia*.",
            "Biyolojik girişimler: psikocerrahi (lobotomi nadiren/hiç), TMS, ECT."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir terapist, uyguladığı yöntemin danışanına zarar verdiğini fark edince yöntemi hemen değiştirip danışanını korumaya yönelik adımlar atıyor. Terapistin davranışı APA'nın hangi etik ilkesiyle en çok uyumludur?",
      opts: ["*Fidelity*", "*Integrity*", "Kişilerin hak ve onuruna saygı", "*Nonmaleficence*"],
      a: 3,
      why: "Zarar verme riskini fark edip yöntemi değiştirmek zarar vermeme (*nonmaleficence*) ilkesidir. En çekici yanlış şık A: *fidelity* danışana ve sorumluluklara bağlılıktır; ana vurgu zarar vermemektir." },
    { q: "Bir terapist danışanından aklına gelen her şeyi sansürlemeden söylemesini ve gördüğü rüyaları anlatmasını istiyor. Bu terapist hangi yaklaşıma dayanıyor?",
      opts: ["Psikodinamik terapi", "Hümanistik terapi", "Bilişsel terapi", "Davranışçı terapi"],
      a: 0,
      why: "Serbest çağrışım ve rüya yorumu bilinçdışını ortaya çıkarmaya çalışan psikodinamik tekniklerdir. En çekici yanlış şık B: hümanistik terapi etkin dinleme ve koşulsuz olumlu saygıyla çalışır." },
    { q: "Yükseklik korkusu olan bir danışan, terapistiyle birlikte gevşeme tekniği öğrendikten sonra önce yüksek bir binanın fotoğrafına, sonra balkon kapısına, sonra balkona ve en sonunda cam asansöre hiyerarşi hâlinde yaklaşıyor. Tablo bu sırayı gösteriyor. Bu teknik hangisidir?",
      fig: { type: "table", caption: "Korku hiyerarşisi", head: ["Basamak", "Durum", "Başlangıç kaygısı"], rows: [["1", "Yüksek bina fotoğrafı", "2"], ["2", "Balkon kapısı", "4"], ["3", "Balkona çıkmak", "6"], ["4", "Cam asansör", "9"]] },
      opts: ["Serbest çağrışım", "Jeton ekonomisi", "Sistematik duyarsızlaştırma", "Bilişsel yeniden yapılandırma"],
      a: 2,
      why: "Hafiften şiddetliye kademeli maruz kalma ve gevşeme sistematik duyarsızlaştırmanın (maruz bırakma) özelliğidir. En çekici yanlış şık D: bilişsel yeniden yapılandırma düşünceyi sorgular, kademeli maruz kalmayı içermez." },
    { q: "Kemal bir sınavdan düşük alınca \"Ben hiçbir şeyi beceremem\" diye düşünüyor. Terapist, bu düşüncenin kanıtını birlikte tartıyor ve Kemal'in daha dengeli bir düşünce kurmasına yardım ediyor. Bu teknik hangisidir?",
      opts: ["*Free association*", "*Cognitive restructuring*", "*Token economy*", "*Unconditional positive regard*"],
      a: 1,
      why: "Uyumsuz düşünceyi sorgulayıp daha dengeli bir düşünceyle değiştirmek bilişsel yeniden yapılandırmadır. En çekici yanlış şık D: koşulsuz olumlu saygı kabule dayanır; düşünceyi değiştirme hedefi taşımaz." },
    { q: "Şizofreni spektrumu tanısı olan bir kişi antipsikotik ilaç kullanıyor. Bir süre sonra yüzünde ve ağzında kontrol edemediği tekrarlayan hareketler gelişiyor. Bu yan etki hangisidir?",
      opts: ["*Word salad*", "*Catatonic stupor*", "*Flat affect*", "*Tardive dyskinesia*"],
      a: 3,
      why: "Dopamin düzenlemesiyle ilişkili, ilaç yan etkisi olarak gelişen kontrolsüz hareket bozukluğu tardif diskinezidir. En çekici yanlış şık B: katatonik stupor hareketsizliktir ve şizofreninin kendi belirtisidir, ilaç yan etkisi değildir." }
  ]
};
