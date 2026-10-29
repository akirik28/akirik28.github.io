/* Felsefe 11 · 1. yazılı cep kiti · veri
   Kapsam: öğretmenin kapsam belgesi (Drive 1C1peH7-NsXAVHqPkr1G-YyQEqOifexGF): MEB Konu-Soru Dağılım Tablosu, Senaryo 3.
   Dersin programı MEB 10. sınıf Felsefe (TYMM) programıdır; kodlar FEL.10.x. Senaryo 3 dağılımı resmî tablodan:
   cdn.eba.gov.tr/yardimcikaynaklar/2026/09/KSDT/felsefe3.xlsx, "10. SINIF" sayfası (FEL.10.1.1 ×3, FEL.10.2.1 ×1, FEL.10.2.2 ×2).
   Ana kaynaklar: öğretmenin 2. ünite sunumu (Drive 1s-B4Mqm5CeeOuBgnXD7Z6sJS48Dzdz79) ve safsata analizleri pptx (1ZfArNYT-M0Hel18fMSGM9BOCNxW9dgpS);
   MEB 10. sınıf Felsefe ders kitabı (tymm.meb.gov.tr, 13.10.2026 PDF), 1. ve 2. üniteler. Bilgi tabanı: takip/sinav-kitleri/felsefe/KAYNAK.md.
   Metinler kendi cümlelerimizdir; kaynaklardan uzun alıntı yok. Soru metinlerindeki kişiler ve durumlar kurgudur.
   MC biçimi: o[0] doğru şık (arayüz şıkları karıştırır), e = Türkçe açıklama. c = öğrenme çıktısı ("1.1","2.1","2.2").
   PROVA biçimi: {c,p,zor,tur,k (kaynak metin, HTML olabilir),q,c2 (örnek cevap),o:[{ad?,m,l:[[puan,ölçüt],...,[0,...]]}]}. */

const SINAV={tarih:"2026-11-10",gun:"10 Kasım 2026 Salı"};

/* Senaryo 3 (1. dönem 1. yazılı) */
const SENARYO=[
 {k:"FEL.10.1.1",t:"Felsefenin anlamını, gelişim sürecini ve işlevini sorgulayabilme",n:3},
 {k:"FEL.10.2.1",t:"Düşünme ve dil ilişkisini yapılandırabilme",n:1},
 {k:"FEL.10.2.2",t:"Mantığın temel kavramlarını ve argümantasyon sürecini yorumlayabilme",n:2}
];

/* Kendini kontrol listesi: öğrenme çıktılarının alt basamaklarından türetildi */
const RUBRIK=[
 {t:"“Philosophia” kelimesinin kökenini ve anlamını, Pythagoras'ın bilgelik hakkındaki görüşünü açıklayabilirim."},
 {t:"Farklı filozofların felsefe tanımlarını karşılaştırıp felsefenin ortak bir tanımının yapılıp yapılamayacağını gerekçeyle tartışabilirim."},
 {t:"Felsefi düşüncenin özelliklerini (hayret, merak, şüphe, eleştirellik, refleksiflik, tutarlılık, yığılımlı ilerleme…) bir örnek durumda tanıyabilirim."},
 {t:"Felsefenin ortaya çıkışını (eski medeniyetlerin birikimi, Antik Yunan'da sistemleşme) ve dönemlere göre gelişimini anlatabilirim."},
 {t:"Bir sorunun felsefi olup olmadığını, felsefi soru özelliklerini adıyla kullanarak gerekçelendirebilir; kendim felsefi soru üretebilirim."},
 {t:"Felsefeyi bilim, din ve sanatla benzer ve farklı yönleriyle karşılaştırabilirim."},
 {t:"Felsefenin bireysel ve toplumsal işlevlerine örnek verip “Felsefe ne işe yarar?” sorusuna kelime sınırına uyan gerekçeli bir cevap yazabilirim."},
 {t:"Dil–düşünme ilişkisine dair üç görüşü (özdeşlik, bağımsızlık, karşılıklı etkileşim) ve imge–kavram–dil sırasını örnekle açıklayabilirim."},
 {t:"Dil ile düşünme arasında nedensel ilişkiler kurup bunları tutarlı bir paragrafta birleştirebilirim."},
 {t:"Akıl ilkelerini, önerme, doğruluk, tutarlılık, geçerlilik kavramlarını ve tümdengelim, tümevarım, analojiyi ayırt edebilirim."},
 {t:"Günlük dildeki bir argümanı öncül ve sonuçlarına ayırıp standart forma (P1, P2, C) dönüştürebilirim."},
 {t:"Bir argümanı anlamını değiştirmeden kendi cümlelerimle yeniden ifade edebilirim."},
 {t:"13 safsata türünü örnekte tanıyıp türünü gerekçesiyle yazabilirim."}
];

const EK=[
 {k:"FEL.10.3.1",h:"Varlık felsefesi",p:"3. ünite: bu yazılının Senaryo 3'ünde soru yok."},
 {k:"FEL.10.4.1",h:"Bilgi felsefesi",p:"4. ünite: bu yazılıda yok."},
 {k:"Not",h:"Kodlar neden FEL.10?",p:"Bu dersin programı MEB'in 10. sınıf Felsefe programıdır; Senaryo 3 tablosu da o programın öğrenme çıktılarını kullanır."}
];

/* ================= ÇOKTAN SEÇMELİ (pekiştirme) =================
   0-9   fe101 · Felsefenin anlamı ve felsefi düşünce (1.1 a-b)
   10-19 fe102 · Felsefi soru, felsefe–bilim–din–sanat, işlev (1.1 c-d)
   20-27 fe103 · Düşünme ve dil (2.1)
   28-42 fe104 · Mantık ve argümantasyon, safsata (2.2) */
const MC=[
 /* ---------- fe101 ---------- */
 {c:"1.1",q:"“Philosophia” kelimesinin kökeni ve anlamı için aşağıdakilerden hangisi doğrudur?",
  o:["“Philia” (sevmek) ile “sophia” (bilgelik) birleşir; “bilgelik sevgisi” demektir.",
     "“Philos” (doğa) ile “sophia” (kanun) kelimeleri birleşir; “doğanın kanunu” ya da “doğa bilgisi” demektir.",
     "“Philia” (akıl) ile “sophia” (düzen) kelimeleri birleşir; “aklın düzeni” ya da “düzenli akıl” demektir.",
     "Latince “philum” (düşünce) kökünden türemiştir; “düşünce bilimi” ya da “düşünme sanatı” anlamına gelir."],
  e:"Felsefe, Yunanca philia (sevmek, aramak, peşinden gitmek) ve sophia (bilgelik) kelimelerinden oluşan philosophia'dan gelir: bilgelik sevgisi, bilginin peşinden koşmak. Diğer seçeneklerdeki kökler ve anlamlar uydurmadır."},
 {c:"1.1",q:"“Philosophia” terimini ilk kullandığı bilinen Pythagoras'a göre insanın bilgelikle ilişkisi nasıldır?",
  o:["İnsan bilgeliğe sahip değildir; onu sever ve ona ulaşmak için çabalar.",
     "İnsan doğuştan bilgedir; yalnızca bunu hatırlaması yeterlidir.",
     "Bilgelik yalnızca deney ve gözlemle, adım adım elde edilir.",
     "Bilgeliğe bir kez ulaşan kişi artık soru sormaya ihtiyaç duymaz."],
  e:"Pythagoras'a göre bilgelik tanrılara özgüdür; insan ise bilgeliği sever ve ona ulaşmaya çalışır. Filozof bu yüzden “bilge” değil “bilgeliği seven”dir. Felsefe her şeyi bilme iddiası değil, süren bir arayıştır."},
 {c:"1.1",q:"Platon felsefeyi “her şeyin ne için olduğunu bilmek”, Anselmus “inanılanı anlamaya çalışmak”, Descartes “kesin ve açık bilgiler üzerine kurulan bir düşünce sistemi”, Nurettin Topçu ise “evreni bütün hâlinde kavrama çabası” olarak tanımlar.<br><br>Bu tanımlardan hareketle aşağıdaki yargılardan hangisine ulaşılabilir?",
  o:["Filozoflar felsefeyi kendi bakış açılarına göre farklı tanımlamıştır.",
     "Felsefenin bütün filozofların, her dönemde kabul ettiği tek ve değişmez bir tanımı vardır.",
     "Felsefe yalnızca dinî inançları açıklamakla uğraşan, inanca dayalı bir etkinliktir.",
     "Felsefe tanımlarının hiçbiri akla dayalı bir çabadan ya da arayıştan söz etmez."],
  e:"Tanımlar birbirinden farklıdır: biri amaçların bilgisini, biri inancı anlamayı, biri kesin bilgiyi, biri evrenin bütününü öne çıkarır. Bu, filozofların felsefeye kendi dönemlerinden ve bakış açılarından baktığını gösterir; tek bir ortak tanım yoktur. Hepsi yine de akla dayalı bir kavrama çabasından söz eder."},
 {c:"1.1",q:"Karl Jaspers'ın “Felsefe yolda olmaktır.” sözü felsefenin hangi yönünü vurgular?",
  o:["Kesin bir son noktaya varmayan, sürekli bir arayış olmasını",
     "Sonuçlarının deney ve gözlemle kesin olarak doğrulanmasını",
     "Geçmiş filozofların görüşlerini değiştirmeden aktarmasını",
     "Bilgilerini sorgulanmadan kabul edilen dayanaklardan almasını"],
  e:"“Yolda olmak”, varılmış bir hedefi değil süren bir yolculuğu anlatır. Felsefe bir cevabı bulduğunda durmaz; o cevabı da sorgulayarak arayışını sürdürür."},
 {c:"1.1",q:"Bir öğrenci az önce kurduğu düşünceyi yeniden ele alıyor: “Bunu bildiğimi söyledim ama gerçekten biliyor muyum, yoksa sadece öyle mi sanıyorum?”<br><br>Öğrencinin bu tutumu felsefi düşüncenin hangi özelliğine örnektir?",
  o:["Refleksif olma","Evrensel olma","Yığılımlı ilerleme","Sistemli olma"],
  e:"Refleksif olma, zihnin kendi düşüncesini yeniden düşünmesidir: düşünme üzerine düşünme. Öğrenci dış dünyayı değil kendi bilme iddiasını sorguluyor."},
 {c:"1.1",q:"Aristoteles, hocası Platon'un idealar görüşünü eleştirmiş ve bu eleştiriden yola çıkarak kendi varlık anlayışını geliştirmiştir.<br><br>Bu durum felsefi düşüncenin hangi özelliğini en iyi örnekler?",
  o:["Yığılımlı ilerleme (kümülatiflik)","Hayret etme","Tutarlı olma","Evrensel olma"],
  e:"Yığılımlı ilerleme, önceki filozofların düşüncelerinin eleştirilip geliştirilerek ilerlemesidir. Aristoteles, Platon'un görüşünü yok saymadan onu eleştirip yeni bir görüş kurmuştur."},
 {c:"1.1",q:"Deniz, her gün gördüğü gökyüzüne bir akşam ilk kez görüyormuş gibi bakar ve “Bütün bunlar neden var, hiç olmayabilir miydi?” diye şaşırır.<br><br>Deniz'in bu tutumu felsefi düşüncenin hangi özelliğidir?",
  o:["Hayret etme","Eleştirel olma","Tutarlı olma","Sistemli olma"],
  e:"Hayret etme, alışılmış olana ilk kez görüyormuş gibi şaşkınlıkla bakıp anlam aramaktır. Felsefi düşünceyi başlatan da bu tutumdur. Deniz bir bilgiyi değerlendirmiyor (eleştirellik), görüşlerini bir sisteme oturtmuyor."},
 {c:"1.1",q:"Beş arkadaş bir pastayı paylaşırken farklı şeyler söylüyor. Hangisi felsefi düşünmeye örnektir?",
  o:["“Payı ‘hak edilmiş’ yapan nedir; eşit bölmek mi adil, emeğe göre mi?”",
     "“Pastayı on eşit dilime bölersek her birimize tam iki dilim düşer, kimse küsmez.”",
     "“Bu pastanın bir dilimi yaklaşık üç yüz kalori enerji verir, dikkatli yiyelim.”",
     "“Üstünü taze meyvelerle süsleyip katları renklendirirsek çok daha güzel görünür.”"],
  e:"Felsefi düşünme, kavramların (adalet, hak etmek) anlamını sorgular ve görüşleri gerekçelendirmeye çalışır. Diğerleri pratik hesap, bilimsel bilgi ve yaratıcı fikirdir."},
 {c:"1.1",q:"Felsefi düşüncenin ortaya çıkışı ve gelişimi hakkında aşağıdakilerden hangisi doğrudur?",
  o:["Temelleri eski medeniyetlere uzanır; Antik Yunan'da sistemli hâle gelmiştir.",
     "Antik Yunan'da, başka hiçbir medeniyetin birikiminden etkilenmeden birdenbire doğmuştur.",
     "Yazının icadından çok önce, bugünkü gibi sistemli bir disiplin olarak zaten vardı.",
     "Orta Çağ'da Avrupa'da doğmuş, oradan zamanla Doğu medeniyetlerine yayılmıştır."],
  e:"Felsefe birdenbire ortaya çıkmadı: Mısır, Mezopotamya (Sümer, Babil), Çin, Hint ve İran medeniyetlerinin dinleri, mitolojileri ve doğa açıklamaları zemin hazırladı; yazıyla artan birikim bunu güçlendirdi. Sistemli felsefe Antik Yunan'da ortaya çıktı."},
 {c:"1.1",q:"MS 2. ve 15. yüzyıllar arasındaki felsefe için aşağıdakilerden hangisi söylenebilir?",
  o:["Dinlerle etkileşim içindedir; Tanrı ve inanç konuları felsefenin merkezine yerleşmiştir.",
     "İnsan kendi aklını kullanmaya yönelir; gelenekler ve siyasi otorite eleştirilir.",
     "Hümanizm doğar; akla duyulan güven artar ve modern bilim gelişmeye başlar.",
     "Disiplinler arası sınırlar belirginleşir; pek çok yeni felsefi ekol ortaya çıkar."],
  e:"MS 2-15. yüzyıllarda felsefe dinlerle etkileşim içindeydi; İslam felsefesi de bu dönemde özgün eserler verdi ve birikimi Batı'ya aktarıldı. Aklını kullanma ve otorite eleştirisi 18-19. yüzyıla, hümanizm ve modern bilim 15-17. yüzyıla, yeni ekoller 20. yüzyıla aittir."},

 /* ---------- fe102 ---------- */
 {c:"1.1",q:"Aşağıdaki sorulardan hangisi felsefi soru niteliği taşır?",
  o:["Bir insanı yıllar sonra da “aynı kişi” yapan nedir?",
     "Bir insanın vücudunda toplam kaç kemik vardır?",
     "Okullar bu yıl hangi tarihte açılacak?",
     "Tuzlu su, saf sudan daha düşük sıcaklıkta mı donar?"],
  e:"Kimliğin özünü soran soru tek ve kesin bir cevaba sahip değildir, kavramın temeline yönelir ve herkesi ilgilendirir. Kemik sayısı ve donma sıcaklığı bilimle, okul tarihi bir duyuruyla kesin olarak cevaplanır."},
 {c:"1.1",q:"“Adalet nedir?” sorusu felsefi, “Bu mahkeme kararı adil mi?” sorusu ise felsefi olmayan bir sorudur.<br><br>Bu ayrım felsefi soruların hangi özelliğine dayanır?",
  o:["Kavramsal derinlik ve öze yönelim","Kurucu ve yönlendirici olma","Tutarlı olma","Evrensellik"],
  e:"Felsefi soru adalet kavramının özünü ve dayanaklarını sorar; ikinci soru ise belirli bir uygulamaya yöneliktir. Ders kitabındaki karşılaştırmada bu çift, kavramsal derinlik ve öze yönelim örneğidir."},
 {c:"1.1",q:"“Güzel nedir?” sorusu farklı filozoflar tarafından farklı ama tutarlı biçimlerde cevaplanmış, her cevap da yeni soruların doğmasına yol açmıştır.<br><br>Bu durum felsefi soruların hangi özelliğini gösterir?",
  o:["Açık uçlu olma","Deneyle sınanabilme","Tek ve kesin cevaplı olma","Belli bir yere ve zamana bağlı olma"],
  e:"Felsefi soruların tek ve kesin bir cevabı yoktur; tartışmaya açık kalırlar ve her cevap yeni sorulara zemin hazırlar. Deneyle sınanma ve kesin cevap bilimsel sorulara, yere ve zamana bağlılık felsefi olmayan sorulara özgüdür."},
 {c:"1.1",q:"“Varlığın bir amacı var mıdır?” sorusuna verilen cevap, kişinin ölüm, mutluluk ve ahlak hakkındaki pek çok görüşünü de belirler.<br><br>Bu durum felsefi soruların hangi özelliğine örnektir?",
  o:["Kurucu ve yönlendirici olma","Açık uçlu olma","Kavramsal derinlik","Tutarlı olma"],
  e:"Kurucu ve yönlendirici sorular, bir düşünce sistemindeki diğer soruların cevabını şekillendirir; etkisi insanın dünya görüşünü belirleyecek kadar geniştir. “Bugün ne giymeliyim?” gibi soruların etkisi ise sınırlı ve anlıktır."},
 {c:"1.1",q:"“Ben kimim?” sorusunu bir felsefeci hatıralar ve bilincin sürekliliği üzerinden, bir biyolog ise DNA ve hücre yapısı üzerinden ele alır.<br><br>Buna göre bir felsefi sorunun akılcı bir tartışma başlatabilmesi için ne gereklidir?",
  o:["Belirli bir kavramsal çerçevede, aynı düşünme düzeyinde tutarlı biçimde sorulması",
     "Tek ve kesin bir cevabının bulunması, böylece tartışmanın kısa sürede bitmesi",
     "Deney ve gözlemle cevaplanabilecek biçimde ölçülebilir kavramlarla sorulması",
     "Günlük ve pratik bir ihtiyaca yönelik olup hızla sonuç vermesi"],
  e:"Felsefi sorular ancak belli bir kavramsal çerçeve içinde ve aynı düşünme düzeyinde tutarlı sorulduğunda akılcı tartışmaya zemin hazırlar. Kişisel kimlik düzeyindeki “Ben kimim?” ile biyolojik düzeydeki “Ben kimim?” farklı sorulardır."},
 {c:"1.1",q:"Felsefe ile bilimi ayıran özellik aşağıdakilerden hangisidir?",
  o:["Bilim varlığı parçalara ayırarak, felsefe ise bütüncül olarak ele alır.",
     "Bilim akla dayanır; felsefe ise akla değil yalnızca duygu ve sezgiye dayanır.",
     "Felsefe sistemli değildir; bilim ise sistemli bir incelemenin ürünüdür.",
     "Bilimin sonuçları öznel, felsefenin sonuçları ise herkesçe kesin kabul edilir."],
  e:"Bilim deney ve gözlem yapabileceği olguları parçalara ayırarak inceler; felsefe varlığı bir bütün olarak ele alır, değer ve anlam gibi konuları da sorgular. İkisi de akla dayanır ve sistemlidir. Bilimin sonuçları genelgeçerdir; felsefe ise kesin kanıt sunmaz, farklı görüşler üretir."},
 {c:"1.1",q:"Aşağıdakilerden hangisi felsefe ile dinin ortak yönüdür?",
  o:["İkisi de insanı, evreni ve hayatın anlamını konu edinir.",
     "İkisi de bilgilerini yalnızca vahiy ve kutsal metinlerden alır.",
     "İkisinde de bilgiler sorgulanmadan, kesin olarak kabul edilir.",
     "İkisi de deney ve gözlemle sınanabilen, ölçülebilir sonuçlar üretir."],
  e:"Felsefe ve din aynı büyük sorularla (insan, evren, hayatın anlamı) ilgilenir. Ama felsefe akla dayanır ve konularına eleştirel yaklaşır; din ise inanca ve vahye dayanır, bilgileri kesindir ve sorgulanmadan inanılır. Deney ve gözlem bilime özgüdür."},
 {c:"1.1",q:"Aşağıdakilerden hangisi felsefeyi sanattan ayıran özelliktir?",
  o:["Felsefenin ürünü soyut bir düşünce, sanatın ürünü ise somut bir eserdir.",
     "Felsefe güzele ulaşmayı, sanat ise bilgiye ulaşmayı amaçlar.",
     "Sanat akla dayanır; felsefe ise duygu ve coşkuya dayanır.",
     "Felsefede hayal gücü hiç kullanılmaz; sanat yalnızca hayal gücüne dayanır."],
  e:"Felsefe bilgiye ulaşmayı amaçlar ve akla dayanır; ürünü soyut bir düşüncedir. Sanat güzele ulaşmayı amaçlar, duygu ve coşkuya dayanır; ürünü somut bir eserdir. İkisinin sonuçları da öznel ve yaratıcı hayal gücünün ürünüdür, bu yüzden hayal gücü ortak bir yöndür."},
 {c:"1.1",q:"“Bir filozofun kitabını ezberleyen kişi, başkalarının sorularını ve cevaplarını öğrenmiş olur. Felsefe yapan kişi ise kendi sorusunu sorar, gerekçeli cevabını arar ve bu cevabı da yeniden sorgular.”<br><br>Bu metinde vurgulanan düşünce aşağıdakilerden hangisidir?",
  o:["Felsefe yapmak, kendi sorusunu sorup gerekçeli cevabını aramaktır.",
     "Felsefe öğrenmek için hiçbir filozofun kitabını okumaya gerek yoktur.",
     "Felsefenin asıl amacı insanlara genel kültür bilgisi kazandırmaktır.",
     "Felsefi sorulara bir kez cevap bulunduktan sonra bu cevap hiç değişmez."],
  e:"Metin felsefeyi öğrenmek ile felsefe yapmak arasındaki farkı vurgular: Felsefe yapmak, öğrenmeyi içerir ama daha ileri gider; kişi kendi sorusunu ve gerekçeli cevabını ortaya koyar. Metin okumayı reddetmez; felsefeyi salt genel kültüre indirgemeyi eleştirir."},
 {c:"1.1",q:"Bir mahallede gençler, kaldırımların tekerlekli sandalye kullananlar için uygun olmadığını fark eder. “Herkesin şehri eşit kullanma hakkı var mı?” sorusunu tartışır ve belediyeye gerekçeli bir öneri sunarlar.<br><br>Bu örnek felsefenin hangi işlevine en uygundur?",
  o:["Toplumsal bir sorunu sorgulayıp adil bir düzen için gerekçe üretme",
     "Bireyin yalnızca kendi kişisel tercihlerini düzene sokmasını sağlama",
     "Doğa olaylarını deney ve gözlemle açıklayıp evrensel yasalara bağlama",
     "Hazır kabul edilmiş bilgileri sorgulamadan benimsemeyi öğretme"],
  e:"Gençler eşitlik ve hak kavramlarını sorgulayıp toplumsal bir soruna gerekçeli çözüm önermiştir. Bu, felsefenin toplumsal işlevidir: adalet, dayanışma ve kapsayıcılık üzerine düşünmek. Deney ve gözlem bilimin işidir; hazır bilgiyi sorgusuz kabul etmek felsefeye aykırıdır."},

 /* ---------- fe103 ---------- */
 {c:"2.1",q:"Dil ile düşünme arasındaki ilişkiye dair aşağıdaki görüşlerden hangisi “özdeşlik görüşü”ne aittir?",
  o:["Düşünme dil olmadan gerçekleşemez; dil düşünmenin temelidir.",
     "Dil düşüncenin ürünüdür; yalnızca düşünceyi paylaşmaya yarar.",
     "Dil ve düşünme birbirini etkiler ama biri ötekine indirgenemez.",
     "Dil ve düşünme birbirinden tamamen kopuk biçimde gelişir."],
  e:"Özdeşlik görüşüne göre dil ve düşünme aynı şeydir; dil olmadan düşünülemez. İkinci seçenek bağımsızlık görüşü, üçüncüsü karşılıklı etkileşim görüşüdür."},
 {c:"2.1",q:"Bir ressam, tablosunu tasarlarken hiç kelime kullanmadan renkleri ve biçimleri zihninde düzenler. Daha sonra ne tasarladığını arkadaşlarına anlatmak için uygun kelimeleri aramak zorunda kalır.<br><br>Bu örnek, dil–düşünme ilişkisine dair hangi görüşü destekler?",
  o:["Dil düşünmek için zorunlu değildir; düşünceyi paylaşmaya yarayan bir araçtır.",
     "Dil ve düşünme özdeştir; kelimeler olmadan hiçbir düşünce kurulamaz.",
     "Düşünce yalnızca yüksek sesle konuşurken ortaya çıkar.",
     "Dil, düşüncenin tek kaynağıdır; her düşünce kelimeden doğar."],
  e:"Ressam kelimesiz düşünebilmiş, dile ancak düşüncesini paylaşırken ihtiyaç duymuştur. Bu, dili düşünmeden bağımsız bir iletişim aracı sayan bağımsızlık görüşünü destekler."},
 {c:"2.1",q:"Kelime dağarcığı genişleyen bir öğrenci, daha önce ayırt edemediği duyguları ayırt etmeye başlar. Yeni bir fikre ulaştığında da onu anlatmak için yeni ifadeler bulur.<br><br>Bu durumla ilgili aşağıdaki yargılardan hangisi söylenebilir?",
  o:["Dil düşünmeyi, düşünme de dili geliştirir; ikisi birbirini etkiler.",
     "Dil yalnızca düşünceyi dışa vurur; düşünmeye hiçbir katkı sağlamaz.",
     "Kelime sayısı arttıkça kişinin düşünme yeteneği azalır.",
     "Düşünce, dili hiç etkilemeden yalnızca kendi başına gelişir."],
  e:"Örnekte ilişki iki yönlüdür: zenginleşen dil ince ayrımlar yapmayı sağlıyor, yeni fikirler de yeni ifadeler doğuruyor. Bu, karşılıklı etkileşim görüşüne uygundur."},
 {c:"2.1",q:"Bir çocuk parkta gördüğü farklı köpekleri ortak özelliklerine göre gruplar ve zihninde genel bir “köpek” tasarımı oluşturur.<br><br>Çocuğun oluşturduğu bu tasarım aşağıdakilerden hangisidir?",
  o:["Kavram","İmge","Önerme","Argüman"],
  e:"Kavram, benzer imgelerin ortak özelliklere göre soyutlanıp gruplanmasıdır. İmge tek bir duyusal yaşantının zihinde canlanmasıdır; önerme ve argüman ise yargı ve akıl yürütmeyle ilgilidir."},
 {c:"2.1",q:"Dün akşam izlediğin gün batımının renklerini gözlerini kapatıp zihninde yeniden canlandırıyorsun.<br><br>Zihninde canlanan bu görüntü aşağıdakilerden hangisidir?",
  o:["İmge","Kavram","Dil","Önerme"],
  e:"İmge, duyusal bir yaşantının zihinde canlanmasıdır. Düşünmenin yapı taşları imge, kavram ve dil sırasıyla gelişir."},
 {c:"2.1",q:"Türkçede “kayınvalide”, “baldız”, “görümce” gibi çok özel akrabalık kelimeleri vardır; İngilizcede bunların çoğu tek bir ifadeyle (in-law) karşılanır.<br><br>Bu örnekten hareketle aşağıdaki çıkarımlardan hangisi yapılabilir?",
  o:["Bir dilin kavramları, konuşanların dünyayı ayırma ve adlandırma biçimini etkileyebilir.",
     "İngilizce konuşanlar akrabalarını birbirinden hiçbir şekilde ayırt edemez.",
     "Türkçe, İngilizceden daha mantıklı ve daha üstün bir dildir.",
     "Dil ile düşünme arasında herhangi bir ilişki kurmak mümkün değildir."],
  e:"Dil, deneyimi anlamlı birimlere ayırır; hangi ayrımlar için kelime varsa o ayrımlar daha kolay düşünülür ve ifade edilir. Bu, dilin düşünmeyi etkileyebileceğini gösterir. İngilizce konuşanların ayırt edemediğini ya da bir dilin üstün olduğunu söylemek örnekten çıkmaz."},
 {c:"2.1",q:"Bir masal kahramanı “Ben bir kelimeyi kullandığımda o kelime, benim ona yüklediğim anlama gelir; ne eksik ne fazla.” der.<br><br>Herkes böyle davransaydı aşağıdakilerden hangisi olurdu?",
  o:["Ortak anlam kalmayacağı için iletişim ve birlikte düşünme zorlaşırdı.",
     "Dil daha anlaşılır, zengin ve herkesçe paylaşılan bir yapıya kavuşurdu.",
     "Herkes istediği anlamı seçebildiği için insanlar daha kolay anlaşırdı.",
     "Kavramlar daha kesin ve herkes için aynı anlamı taşır hâle gelirdi."],
  e:"Dil, toplum üyeleri arasında oluşmuş örtük bir uzlaşma sistemidir. Herkes kelimelere kendi anlamını yüklerse ortak anlam kaybolur; insanlar birbirini anlayamaz ve düşüncelerini paylaşamaz."},
 {c:"2.1",q:"Aşağıdakilerden hangisi dilin özelliklerinden biri değildir?",
  o:["Hiç değişmeyen, sabit bir yapıya sahiptir.",
     "Toplumsal bir kurumdur; kültürü kuşaktan kuşağa aktarır.",
     "Seslerden ve sembollerden örülmüş bir yapıya sahiptir.",
     "Deneyimleri anlamlı birimlere ayırarak ifade etmeye yardım eder."],
  e:"Dil sürekli değişen ve gelişen canlı bir sistemdir; yeni kelimeler doğar, bazıları kullanımdan düşer. Diğer üç seçenek dilin özellikleridir."},

 /* ---------- fe104 ---------- */
 {c:"2.2",q:"Aşağıdakilerden hangisi bir önermedir?",
  o:["Bir hafta altı günden oluşur.","Keşke yarın tatil olsa!","Çıkarken kapıyı kapat.","Yarın kar yağacak mı?"],
  e:"Önerme, doğru ya da yanlış bir yargı bildiren ifadedir. “Bir hafta altı günden oluşur.” yanlış bir yargıdır ama yine de önermedir. Dilek, emir ve soru cümleleri doğru ya da yanlış olamaz, bu yüzden önerme değildir."},
 {c:"2.2",q:"“Bütün kuşlar uçar. Penguen bir kuştur. O hâlde penguen uçar.”<br><br>Bu akıl yürütme için aşağıdakilerden hangisi söylenebilir?",
  o:["Geçerlidir; ama ilk öncül gerçeğe uymadığı için sonucu yanlıştır.",
     "Sonuç yanlış olduğuna göre akıl yürütmenin öncülleri birbiriyle çelişmektedir.",
     "Öncüllerin hepsi gerçeğe uygun olduğu için sonuç da kesinlikle doğrudur.",
     "Tek bir örnekten genel bir yargıya ulaşıldığı için bir tümevarımdır."],
  e:"Geçerlilik, sonucun öncüllerden zorunlu olarak çıkmasıdır; burada biçim doğrudur. Doğruluk ise yargının gerçeğe uygunluğudur: “Bütün kuşlar uçar.” öncülü gerçeğe uymadığı için sonuç yanlıştır. Akıl yürütme genelden özele gittiği için tümdengelimdir."},
 {c:"2.2",q:"“Bütün balıklar suda yaşar.” önermesini doğru kabul eden biri, aynı anda “Bazı balıklar suda yaşamaz.” önermesini de doğru kabul ediyor.<br><br>Bu kişi hangi akıl ilkesine aykırı davranmıştır?",
  o:["Çelişmezlik ilkesi","Özdeşlik ilkesi","Üçüncü hâlin imkânsızlığı ilkesi","Yeter-sebep ilkesi"],
  e:"Çelişmezlik ilkesine göre birbiriyle çelişen iki önermeden biri doğruysa diğeri zorunlu olarak yanlıştır; bir yargı aynı anda hem doğru hem yanlış olamaz."},
 {c:"2.2",q:"Bir tartışmada “özgürlük” kelimesi başta “istediğini yapabilme” anlamında kullanılıyor, sona doğru ise “yasalara uyma” anlamına kaydırılıyor.<br><br>Bu akıl yürütmede hangi akıl ilkesine uyulmamıştır?",
  o:["Özdeşlik ilkesi","Çelişmezlik ilkesi","Üçüncü hâlin imkânsızlığı ilkesi","Yeter-sebep ilkesi"],
  e:"Özdeşlik ilkesine göre bir terime akıl yürütmenin başında hangi anlam verildiyse sonuna kadar aynı anlamda kullanılmalıdır. Anlamı yolda değiştirilen terim, akıl yürütmeyi yanıltıcı hâle getirir."},
 {c:"2.2",q:"Bir öğretmen, gözlemlediği her sınıfta kahvaltı yapan öğrencilerin ilk derste daha dikkatli olduğunu görür ve “Kahvaltı yapan bütün öğrenciler ilk derste daha dikkatli olur.” sonucuna varır.<br><br>Öğretmenin kullandığı akıl yürütme türü hangisidir?",
  o:["Tümevarım","Tümdengelim","Analoji","Çelişmezlik"],
  e:"Tümevarım, gözlenen tekil örneklerden genel bir yargıya ulaşmaktır. Sonuç olasıdır; gözlenmemiş bir durumda yanlışlanabilir. Tümdengelim genelden özele gider; analoji benzerlikten hareket eder."},
 {c:"2.2",q:"“Bitkiler düzenli sulanmazsa solar. Arkadaşlıklar da bitkiler gibi bakım ister; ilgi gösterilmezse onlar da zayıflar.”<br><br>Bu ifadedeki akıl yürütme türü aşağıdakilerden hangisidir?",
  o:["Analoji","Tümdengelim","Tümevarım","Kısır döngü"],
  e:"Analoji, bazı yönlerden benzeyen şeylerin başka yönlerden de benzeyeceğini kabul etmektir. Bitki ile arkadaşlık “bakım isteme” yönünden benzetilmiş, bitkideki sonuç arkadaşlığa taşınmıştır."},
 {c:"2.2",q:"Aşağıdakilerden hangisi bir görüş değil, argümandır?",
  o:["Okullarda felsefe olmalı, çünkü gerekçeyle düşünmeyi geliştirir.",
     "Bence yılın en güzel mevsimi, renkleri ve serinliğiyle sonbahardır.",
     "Bana göre kitap okumak, dizi izlemekten çok daha keyifli bir uğraştır.",
     "Ders çalışırken en iyi eşlik eden müzik bana göre klasik müziktir."],
  e:"Görüş, kişinin bir konudaki kişisel yargısıdır ve kanıt gerektirmez. Argüman ise bir görüşü öncüllerden sonuç çıkararak destekler. “Çünkü” ile verilen gerekçe, ilk ifadeyi argüman yapar."},
 {c:"2.2",q:"“Düzenli uyuyan öğrencilerin dikkat süresi daha uzundur. Dikkat süresi uzun olan öğrenciler derste daha çok şey öğrenir. Bu nedenle düzenli uyumak öğrenmeyi destekler.”<br><br>Bu argümanın sonucu (C) aşağıdakilerden hangisidir?",
  o:["Düzenli uyumak öğrenmeyi destekler.",
     "Düzenli uyuyan öğrencilerin dikkat süresi daha uzundur.",
     "Dikkat süresi uzun olan öğrenciler daha çok öğrenir.",
     "Öğrenciler ders sırasında uyumamalıdır."],
  e:"Sonuç, öncüllerin desteklediği ana iddiadır; “bu nedenle” sözcüğü sonucu haber verir. İlk iki cümle öncüldür (P1, P2). Son seçenek metinde hiç geçmeyen bir iddiadır."},
 {c:"2.2",q:"“Şehirde aşırı hız yapan sürücüler çoğaldı. Aşırı hız, kazaları hem sıklaştırıyor hem ağırlaştırıyor. Bu yüzden hız denetimleri artırılmalı.”<br><br>Bu argümanı anlamını değiştirmeden yeniden ifade eden seçenek hangisidir?",
  o:["Hız yapanlar arttığı ve hız kazaları daha sık, daha ağır kıldığı için denetim artırılmalı.",
     "Kazaların tek nedeni hız olduğuna göre şehirdeki bütün yollar trafiğe kapatılmalıdır.",
     "Sürücü sayısı arttığı için şehirdeki yollar genişletilmeli ve yeni yollar yapılmalıdır.",
     "Denetimler artırılırsa şehirdeki bütün kazalar kısa sürede tamamen sona erer."],
  e:"Yeniden ifade, iddiayı ve gerekçeleri korur; yeni bilgi ya da abartı eklemez. Diğer seçenekler “tek neden”, “bütün kazalar biter” gibi abartılar ekliyor ya da sonucu başka bir öneriyle değiştiriyor."},
 {c:"2.2",q:"Öğrenci meclisinde biri kantinde sağlıklı yiyecek satılmasını önerir. Bir başkası şöyle cevap verir: “Daha dokuzuncu sınıfta olan birinin önerisini konuşmaya bile gerek yok.”<br><br>Bu cevaptaki safsata türü hangisidir?",
  o:["Niteliksel adam karalama","Ortak tutuma başvurma","Yetersiz örnek","Kısır döngü"],
  e:"Niteliksel adam karalamada önerinin içeriği tartışılmaz; onu söyleyen kişinin yaşı, sınıfı ya da kimliği gibi niteliklerine saldırılır. Görüş değil kişi hedef alınmıştır."},
 {c:"2.2",q:"Doktor hastasına sigarayı bırakmasını söyler. Hasta şöyle cevap verir: “Siz de sigara içiyorsunuz, o yüzden sizi dinlemem.”<br><br>Hastanın cevabındaki safsata türü hangisidir?",
  o:["Sen de (tu quoque)","İmalı soru","İrrasyonel otorite","Yanlış sebep"],
  e:"“Sen de” safsatasında iddiaya akılcı bir cevap verilmez; iddia sahibinin kendi davranışının söylediğiyle tutarsız olduğu öne sürülür. Doktorun sigara içmesi, sigaranın zararlı olduğu bilgisini çürütmez."},
 {c:"2.2",q:"“Bu kitap çok önemlidir, çünkü önemli bir kitaptır.”<br><br>Bu ifadedeki safsata türü aşağıdakilerden hangisidir?",
  o:["Kısır döngü","Duygu sömürüsü","Otoriteye başvurma","İspatlama mecburiyeti"],
  e:"Kısır döngüde kanıtlanması gereken sonuç, öncülün içinde zaten vardır. Gerekçe olarak sunulan şey iddianın kendisidir; ortada gerçek bir kanıt yoktur."},
 {c:"2.2",q:"Yeni ayakkabılarını giydiği gün takımı maçı kazanan bir oyuncu şöyle der: “Bu ayakkabılar bana şans getiriyor; her maçta bunları giyeceğim.”<br><br>Oyuncunun akıl yürütmesindeki safsata türü hangisidir?",
  o:["Yanlış sebep","Sen de (tu quoque)","Alakasız sonuç","İmalı soru"],
  e:"Yanlış sebepte, yetersiz delille bir olay diğerinin nedeni sayılır. Ayakkabıyı giymek ile maçı kazanmak aynı güne denk gelmiş olabilir; bu, birinin ötekine yol açtığını göstermez."},
 {c:"2.2",q:"Ünlü bir futbolcu bir reklamda “Bu bankanın kredisi herkes için en doğru yatırımdır.” der; izleyicilerin çoğu da bu yüzden krediye başvurur.<br><br>Bu durumdaki safsata türü hangisidir?",
  o:["İrrasyonel otorite","Duygu sömürüsü","Genelleştirme","Kısır döngü"],
  e:"İrrasyonel otoritede iddia, konunun uzmanı olmayan bir kişinin görüşüne dayandırılır. Futbolcunun ünü, bankacılık ve yatırım konusunda bilgi sahibi olduğunu göstermez."},
 {c:"2.2",q:"Bir öğrenci şöyle der: “Okuldaki herkes bu uygulamayı indirdi; bu kadar kişi indirdiğine göre en iyi uygulama kesinlikle bu.”<br><br>Bu ifadedeki safsata türü aşağıdakilerden hangisidir?",
  o:["Ortak tutuma başvurma","Niteliksel adam karalama","İmalı soru","İspatlama mecburiyeti"],
  e:"Ortak tutuma başvurmada (popülerliğe başvurma) bir şeyin doğru ya da iyi olduğu, çoğunluğun onu benimsemesine dayandırılır. Çok kişinin indirmesi, uygulamanın en iyisi olduğunu kanıtlamaz."}
];

/* ================= YAZILI PROVASI (Senaryo 3: 1.1 ×3, 2.1 ×1, 2.2 ×2; 100 puan) ================= */
const PROVA_SURUM="meb1";
const PROVA=[
 {ad:"Deneme 1",s:[
  {c:"1.1",p:10,zor:"kolay",tur:"kisa",
   k:"<div class=\"y-tablo-kap\"><table><tr><th></th><th>İfade</th><th>D / Y</th></tr><tr><td>a</td><td>Felsefe terimi “bilgelik sevgisi” anlamına gelir.</td><td></td></tr><tr><td>b</td><td>Bütün filozoflar bilgeliğe ulaşmış, hikmet sahibi kişilerdir.</td><td></td></tr><tr><td>c</td><td>Felsefe, Antik Yunan'da sistemli hâle gelmiştir.</td><td></td></tr><tr><td>d</td><td>Felsefe teorik bir uğraş olduğu için günlük yaşamla bağlantısı yoktur.</td><td></td></tr></table></div>",
   q:"Tablodaki ifadeler doğru ise (D), yanlış ise (Y) yazınız. Yanlış olduğuna karar verdiğiniz ifadelerin doğrusunu yazınız.",
   c2:"a) D. b) Y: Filozof bilgeliğe sahip olduğunu iddia eden değil, bilgeliği seven ve onu arayan kişidir; felsefe her şeyi bilme iddiası değil bir arayıştır. c) D. d) Y: Felsefe günlük yaşamla bağlantılıdır; kararlarımızı, değerlerimizi ve olaylara bakışımızı sorgulamamızı sağlar (örneğin adil davranmak, bilinçli seçim yapmak).",
   o:[
    {m:"D/Y kararları",l:[[6,"Dört kararın dördü de doğru (a D, b Y, c D, d Y)."],[3,"Dört karardan ikisi ya da üçü doğru."],[0,"Kararlardan en fazla biri doğru."]]},
    {m:"Yanlış ifadelerin doğrusunu yazma",l:[[4,"b ve d için doğru düzeltmeyi yazmış (filozof bilgeliği arayandır; felsefe günlük yaşamla bağlantılıdır)."],[2,"Yalnızca birinin doğrusunu yazmış."],[0,"Düzeltme yazmamış ya da düzeltmeler yanlış."]]}
   ]},
  {c:"1.1",p:15,zor:"orta",tur:"acik",
   k:"<div class=\"y-tablo-kap\"><table><tr><th></th><th>Soru</th><th>Felsefi mi?</th><th>Gerekçe</th></tr><tr><td>a</td><td>Bir insanın hayatını kurtarmak için yalan söylemek ahlaki midir?</td><td></td><td></td></tr><tr><td>b</td><td>Yarın okulda kaç ders var?</td><td></td><td></td></tr><tr><td>c</td><td>Gerçek bilgiye ulaşmak mümkün müdür?</td><td></td><td></td></tr><tr><td>d</td><td>Suyun kaynama sıcaklığı yükseklikle değişir mi?</td><td></td><td></td></tr><tr><td>e</td><td>Mutluluk herkes için aynı şey midir?</td><td></td><td></td></tr></table></div>",
   q:"Tablodaki sorulardan felsefi soru niteliğinde olanları (✓) ile işaretleyiniz. Her soru için kararınızın gerekçesini, felsefi soruların özelliklerinden (kavramsal derinlik, açık uçluluk, evrensellik, kurucu olma, tutarlılık) en az birini adıyla kullanarak yazınız.",
   c2:"Felsefi olanlar: a, c, e. a) Açık uçludur: tek ve kesin bir cevabı yoktur, farklı ahlak görüşleri farklı ama tutarlı cevaplar verir; ayrıca herkesi ilgilendirir (evrensellik). c) Kavramsal derinliğe sahiptir: “bilgi” ve “gerçek” kavramlarının özünü sorar; cevabı kişinin dünya görüşünü yönlendirir (kurucu olma). e) Evrenseldir: zaman ve yerden bağımsız olarak bütün insanları ilgilendirir; cevabı tartışmaya açıktır. Felsefi olmayanlar: b) Belirli bir yere ve zamana bağlıdır, ders programına bakarak kesin olarak cevaplanır. d) Bilimsel bir sorudur; deney ve ölçümle tek ve kesin bir cevaba ulaşılır.",
   o:[
    {m:"Felsefi soruları belirleme",l:[[5,"Beş sorunun beşini de doğru sınıflandırmış (a, c, e felsefi; b, d değil)."],[3,"Beş sorudan üçünü ya da dördünü doğru sınıflandırmış."],[0,"En fazla iki soruyu doğru sınıflandırmış."]]},
    {m:"Gerekçeleri özellik adıyla yazma",l:[[10,"Beş sorunun hepsine doğru gerekçe yazmış; felsefi olanlarda özelliği adıyla kullanmış, olmayanlarda tek ve kesin cevap, yere ve zamana bağlılık ya da deneyle cevaplanabilme gibi nedenleri belirtmiş."],[5,"Gerekçelerin bir kısmı doğru ya da özellik adı kullanılmadan genel ifadelerle yazılmış (“çünkü derin bir soru” gibi)."],[0,"Gerekçe yok ya da gerekçeler yanlış."]]}
   ]},
  {c:"1.1",p:20,zor:"zor",tur:"acik",
   k:"Ece ve Mert bir dersin ardından konuşuyor.<br><b>Ece:</b> Bilim her şeyi deneyle kanıtlıyor. Bilim bu kadar ilerlemişken felsefeye ne gerek var? Felsefe bence boş bir uğraş.<br><b>Mert:</b> Ama bilimin bile cevaplayamadığı sorular var. Hem felsefe sadece kitaplarda kalmıyor ki…",
   q:"a) Felsefe ile bilim arasındaki iki farkı ve bir benzerliği yazınız.<br>b) Felsefenin bireysel ve toplumsal işlevlerinden birer örnek vererek Ece'ye gerekçeli bir cevap yazınız. (En az 60, en fazla 100 kelime)",
   c2:"a) Farklar: Bilim genellikle deney ve gözlem yapabileceği olguları konu edinir; felsefe ise değerleri, yaşamın anlamını, ahlakı da sorgular. Bilim varlığı parçalara ayırarak inceler; felsefe varlığa bütüncül yaklaşır. (Ayrıca: bilim kanıtlanabilir, genelgeçer sonuçlara ulaşır; felsefe gerekçe üretir ama kesin kanıt sunmaz.) Benzerlik: İkisi de akla dayanır, sistemlidir ve evren, insan, yaşam hakkında açıklayıcı bilgiye ulaşmak ister.<br>b) Örnek cevap (yaklaşık 80 kelime): Ece, bilimin ilerlemesi felsefeyi gereksiz kılmaz, çünkü bilim “nasıl?” sorusuna cevap verirken “Ne yapmalıyım, bu doğru mu?” sorusunu cevaplamaz. Bireysel olarak felsefe, sosyal medyada gördüğün bir haberi sorgulamanı ve kararlarını gerekçeyle vermeni sağlar. Toplumsal olarak ise adalet ve eşitlik üzerine düşünmeyi öğretir; örneğin yapay zekânın tıpta nasıl kullanılacağı ya da engelli bireylerin şehri eşit kullanması gibi konulara yön verir. Bu yüzden felsefe boş bir uğraş değil, hem bireyin hem toplumun pusulasıdır.",
   o:[
    {ad:"a",m:"Felsefe ile bilimi karşılaştırma",l:[[10,"İki farkı ve bir benzerliği doğru yazmış (örneğin olgular–değerler, parçalara ayırma–bütüncül yaklaşım; ortak: akla dayanma, sistemlilik)."],[6,"Üç öğeden ikisini doğru yazmış."],[3,"Yalnızca bir öğeyi doğru yazmış."],[0,"Karşılaştırma yanlış ya da yok (örneğin “felsefe akla dayanmaz” gibi)."]]},
    {ad:"b",m:"İşlevlerle gerekçeli cevap ve kelime sınırı",l:[[10,"Bir bireysel ve bir toplumsal işlevi örnekle yazmış, Ece'nin görüşüne gerekçeli bir cevap kurmuş, 60-100 kelime sınırına uymuş."],[5,"İşlevlerden yalnızca birini örneklemiş, ya da cevap gerekçesiz kalmış, ya da kelime sınırına uymamış."],[0,"İşlev örneği yok ya da cevap soruyla ilgisiz."]]}
   ]},
  {c:"2.1",p:15,zor:"orta",tur:"acik",
   k:"Türkçede “kayınvalide”, “baldız”, “görümce”, “elti” gibi akrabalık ilişkilerini çok ayrıntılı ayıran kelimeler vardır. İngilizcede ise bu akrabaların çoğu tek bir ifadeyle (in-law) karşılanır. Bir öğrenci şunu soruyor: “Ana dilim farklı olsaydı akrabalarımı yine bugünkü gibi mi düşünürdüm?”",
   q:"a) Bu örnekten hareketle dil ile düşünme arasında bir nedensel ilişki kurunuz.<br>b) Dil–düşünme ilişkisine dair üç görüşten (özdeşlik, bağımsızlık, karşılıklı etkileşim) hangisi bu örneği en iyi açıklar? Gerekçelendiriniz.",
   c2:"a) Bir dilde bir ayrım için ayrı kelime varsa, o dili konuşanlar o ayrımı daha kolay fark eder ve düşünür; yani dilin sunduğu kavramlar, dünyayı ayırma ve adlandırma biçimimizi etkiler. Türkçe konuşan biri akrabalarını “görümce, elti” diye daha ayrıntılı gruplar. b) Karşılıklı etkileşim görüşü: Dil düşünmeyi etkiler (kelimeler ayrımları belirginleştirir), ama düşünme de dili etkiler (bir toplum akrabalık ilişkilerine önem verdiği için bu kelimeleri üretmiştir). İngilizce konuşanlar da bu akrabaları ayırt edebilir, demek ki düşünme tamamen dile indirgenemez; bu yüzden özdeşlik görüşü değil etkileşim görüşü daha uygundur.",
   o:[
    {ad:"a",m:"Nedensel ilişki kurma",l:[[8,"Dilin sunduğu kelime ve kavramların, düşüncede yapılan ayrımları etkilediğini neden-sonuç biçiminde açıklamış."],[4,"İlişkiyi belirtmiş ama neden-sonuç bağı kurmamış (“dil ile düşünce ilişkilidir” demekle kalmış)."],[0,"İlişki kurmamış ya da yanlış ilişki kurmuş (“İngilizce konuşanlar akrabalarını ayırt edemez” gibi)."]]},
    {ad:"b",m:"Uygun görüşü seçip gerekçelendirme",l:[[7,"Karşılıklı etkileşim görüşünü seçmiş ve iki yönlü etkiyi (dil düşünmeyi, düşünme dili etkiler) gerekçeyle açıklamış."],[4,"Görüşü doğru seçmiş ama gerekçesi eksik; ya da başka bir görüşü seçip örnekle tutarlı biçimde savunmuş."],[0,"Görüş seçmemiş ya da gerekçe örnekle ilgisiz."]]}
   ]},
  {c:"2.2",p:15,zor:"kolay",tur:"kisa",
   k:"“Düzenli kitap okuyan biri farklı hayatları ve bakış açılarını tanır. Farklı bakış açılarını tanıyan kişi başkalarını daha kolay anlar. Bu nedenle kitap okumak empati kurmayı kolaylaştırır.”",
   q:"Metindeki argümanı öncül ve sonuçlarına ayırarak standart forma (P1, P2, C) dönüştürünüz.",
   c2:"P1: Düzenli kitap okuyan kişi farklı hayatları ve bakış açılarını tanır.<br>P2: Farklı bakış açılarını tanıyan kişi başkalarını daha kolay anlar.<br>C: Kitap okumak empati kurmayı kolaylaştırır.",
   o:[
    {m:"Standart forma dönüştürme",l:[[15,"İki öncülü ve sonucu doğru ayırıp P1, P2, C biçiminde yazmış; anlamı korumuş."],[10,"Sonucu doğru bulmuş ama öncüllerden biri eksik ya da yanlış."],[5,"Yalnızca sonucu doğru bulmuş ya da öncül ile sonucu yer değiştirmiş."],[0,"Öncül ve sonuç ayrılmamış."]]}
   ]},
  {c:"2.2",p:25,zor:"zor",tur:"acik",
   k:"Okul meclisinde kantin tartışılıyor.<br><b>Can:</b> Şekerli yiyecekler kısa sürede enerji verir ama bu enerji çabuk düşer ve dikkat dağılır. Dikkatin dağılması da derslerdeki başarıyı düşürür. Bu yüzden kantinde şekerli yiyecekler yerine sağlıklı yiyecekler satılmalı.<br><b>Deniz:</b> Sen geçen hafta iki tane çikolata yedin. Senin bu konuda konuşmaya hakkın yok.",
   q:"a) Can'ın argümanını standart forma (P1, P2, C) dönüştürünüz.<br>b) Can'ın argümanını anlamını değiştirmeden kendi cümlelerinizle yeniden ifade ediniz.<br>c) Deniz'in cevabında hangi safsata vardır? Türünü yazıp gerekçesini açıklayınız.",
   c2:"a) P1: Şekerli yiyecekler kısa süreli enerji verir, sonra enerji düşer ve dikkat dağılır. P2: Dikkatin dağılması derslerdeki başarıyı düşürür. C: Kantinde şekerli yiyecekler yerine sağlıklı yiyecekler satılmalıdır.<br>b) Şekerli yiyeceklerin verdiği enerji kısa sürüp dikkati dağıttığı ve dağılan dikkat ders başarısını azalttığı için kantinde bunların yerine sağlıklı yiyecekler bulunmalıdır.<br>c) Sen de (tu quoque) safsatası. Deniz, Can'ın öne sürdüğü gerekçeleri (enerjinin düşmesi, dikkatin dağılması) tartışmıyor; Can'ın kendi davranışının söylediğiyle tutarsız olduğunu öne sürerek argümanı geçersiz kılmaya çalışıyor. Can'ın çikolata yemesi, şekerin dikkati dağıttığı iddiasının doğru ya da yanlış olduğunu göstermez.",
   o:[
    {ad:"a",m:"Standart form",l:[[10,"İki öncülü ve sonucu doğru ayırıp P1, P2, C biçiminde yazmış."],[6,"Sonucu doğru bulmuş, öncüllerden biri eksik ya da yanlış."],[3,"Yalnızca sonucu doğru bulmuş."],[0,"Öncül ve sonuç ayrılmamış."]]},
    {ad:"b",m:"Anlamı değiştirmeden yeniden ifade",l:[[5,"İddiayı ve iki gerekçeyi kendi cümleleriyle, ekleme ve abartı yapmadan aktarmış."],[3,"Anlamı korumuş ama bir gerekçeyi atlamış ya da metni neredeyse aynen kopyalamış."],[0,"Anlamı değiştirmiş (yeni iddia eklemiş, “bütün şekerler yasaklanmalı” gibi abartmış) ya da yazmamış."]]},
    {ad:"c",m:"Safsata türü ve gerekçesi",l:[[10,"“Sen de” safsatasını adıyla yazmış ve Deniz'in gerekçeleri tartışmak yerine Can'ın tutarsızlığına saldırdığını açıklamış."],[5,"Türü doğru yazmış ama gerekçe eksik; ya da “adam karalama” deyip kişiye yönelme gerekçesini doğru açıklamış."],[0,"Tür ve gerekçe yanlış ya da yok."]]}
   ]}
 ]},
 {ad:"Deneme 2",s:[
  {c:"1.1",p:10,zor:"kolay",tur:"kisa",
   k:"<div class=\"y-tablo-kap\"><table><tr><th></th><th>Durum</th></tr><tr><td>a</td><td>Thales “Her şeyin ana maddesi sudur.” der. Ondan sonra gelen filozoflar bu görüşü eleştirip farklı cevaplar geliştirir.</td></tr><tr><td>b</td><td>Bir filozof, “Adalet nedir?” sorusunun yalnızca kendi şehrini değil bütün insanları ilgilendirdiğini savunur.</td></tr><tr><td>c</td><td>Bir öğrenci az önce “bilgi” dediği şeyin gerçekten bilgi olup olmadığını düşünmeye başlar.</td></tr><tr><td>d</td><td>Bir düşünür, görüşlerinin birbiriyle çelişmemesine özen gösterir.</td></tr></table></div>",
   q:"Tablodaki her durumun felsefi düşüncenin hangi özelliğine örnek olduğunu yazınız.",
   c2:"a) Yığılımlı ilerleme (kümülatiflik): önceki filozofların düşünceleri eleştirilip geliştirilerek ilerler. b) Evrensel olma: problem bütün insanlığı ilgilendirir. c) Refleksif olma: zihin kendi düşüncesini yeniden düşünür. d) Tutarlı olma: düşünceler arasında çelişki bulunmaz.",
   o:[
    {m:"Özellikleri eşleştirme",l:[[10,"Dört durumun dördünü doğru eşleştirmiş."],[7,"Üç durumu doğru eşleştirmiş."],[4,"İki durumu doğru eşleştirmiş."],[0,"En fazla bir durumu doğru eşleştirmiş."]]}
   ]},
  {c:"1.1",p:15,zor:"orta",tur:"acik",
   k:"<b>Selin:</b> Felsefe tamamen Antik Yunan'ın icadıdır; başka hiçbir medeniyetin katkısı yoktur.<br><b>Kaan:</b> Bence felsefenin kökleri daha eskiye gidiyor. Ama yine de sistemli felsefenin Yunan'da ortaya çıktığı söyleniyor; bunun tek bir nedeni olabilir mi?",
   q:"a) Selin'in görüşünü, felsefenin ortaya çıkışında birikimi etkili olan en az üç medeniyeti örnek vererek değerlendiriniz.<br>b) Kaan'ın sorusuna cevap veriniz: Felsefenin Antik Yunan'da sistemli hâle gelmesi tek bir nedene bağlanabilir mi? Gerekçelendiriniz.",
   c2:"a) Selin'in görüşü yanlıştır. Felsefe birdenbire ortaya çıkmamış, uzun bir birikimle gelişmiştir. Mısır, Mezopotamya (Sümer, Babil), Çin, Hint ve İran medeniyetlerinin dinleri, mitolojileri, doğa hakkındaki açıklamaları ve bilimsel birikimi felsefi düşünceye zemin hazırlamıştır. MÖ 6. yüzyılda Çin ve Hint'te de felsefi düşüncenin geliştiği bilinir.<br>b) Hayır, tek bir nedene bağlanamaz. Yazıyla birlikte artan bilgi birikimi, eski medeniyetlerden gelen miras, ticaret ve kültürel etkileşim (farklı inanç ve görüşlerle karşılaşmak), siyasal koşullar (Atina'da doğrudan demokrasiyle tartışma ortamının oluşması) ve ekonomik koşullar birlikte etkili olmuştur. Kültürel, siyasal, ekonomik ve bilimsel koşullar bir araya gelince felsefe sistemli hâle gelmiştir.",
   o:[
    {ad:"a",m:"Görüşü medeniyet örnekleriyle değerlendirme",l:[[5,"Selin'in görüşünün yanlış olduğunu belirtmiş ve en az üç medeniyeti (Mısır, Mezopotamya/Sümer-Babil, Çin, Hint, İran) birikimleriyle birlikte yazmış."],[3,"Görüşü doğru değerlendirmiş ama bir ya da iki medeniyet yazmış."],[0,"Selin'e katılmış ya da medeniyet örneği yok."]]},
    {ad:"b",m:"Tek nedene bağlanamayacağını gerekçelendirme",l:[[10,"Tek nedene bağlanamayacağını söyleyip en az iki farklı koşulu (kültürel etkileşim, bilgi birikimi, siyasal ortam, ekonomik koşullar) açıklamış."],[5,"Doğru karar vermiş ama yalnızca bir koşul yazmış ya da koşulları açıklamadan saymış."],[0,"Tek bir nedene bağlamış ya da gerekçe yok."]]}
   ]},
  {c:"1.1",p:20,zor:"zor",tur:"acik",
   k:"<b>Kant:</b> Felsefe, kendisini akla dayanan nedenlerle meşru kılma iddiasındaki bir zihinsel etkinliktir.<br><b>Karl Jaspers:</b> Felsefe yolda olmaktır.<br><b>Nurettin Topçu:</b> Felsefe, evreni bütün hâlinde kavrama çabasıdır.",
   q:"a) Bu üç tanımın ortak yönü nedir? Açıklayınız.<br>b) “Felsefenin herkesin kabul edeceği ortak bir tanımı yapılabilir mi?” sorusuna gerekçeli bir cevap yazınız. (En az 50, en fazla 80 kelime)",
   c2:"a) Üçü de felsefeyi bitmiş bir bilgi olarak değil, akla dayanan bir çaba ya da etkinlik olarak görür: Kant akılla temellendirmeyi, Jaspers sürekli arayışı, Topçu evreni bütünüyle kavrama çabasını vurgular. Ortak öğe, akla dayalı ve süren bir anlama çabasıdır.<br>b) Örnek cevap (yaklaşık 65 kelime): Bence herkesin kabul edeceği tek bir tanım yapmak zordur, çünkü filozoflar farklı dönemlerde, farklı kültürlerde yaşamış ve felsefeye kendi ilgi alanlarından bakmıştır. Felsefenin konusu da varlıktan ahlaka kadar çok geniştir. Yine de tanımlardaki ortak öğelerden, yani akla dayalı, eleştirel ve süren bir bilgelik arayışından yola çıkarak geniş bir tanım kurulabilir. Bu tanımı da peşin hüküm sayıp sorgulamaya açık tutmak gerekir.",
   o:[
    {ad:"a",m:"Ortak yönü belirleme",l:[[8,"Ortak yönü (akla dayalı, süren bir anlama çabası/etkinlik) belirleyip en az iki tanımla ilişkilendirmiş."],[4,"Ortak yönü belirtmiş ama tanımlarla ilişkilendirmemiş ya da tek tanıma dayanmış."],[0,"Ortak yön yanlış ya da yok."]]},
    {ad:"b",m:"Ortak tanımın imkânını gerekçeyle tartışma",l:[[12,"Açık bir görüş bildirmiş; en az iki gerekçe (farklı dönem/kültür/bakış açısı, konunun genişliği, ortak öğelerin varlığı) kullanmış; 50-80 kelime sınırına uymuş."],[6,"Görüş bildirmiş ama tek gerekçe kullanmış ya da kelime sınırına uymamış."],[0,"Gerekçesiz “evet” ya da “hayır” yazmış ya da soruyla ilgisiz."]]}
   ]},
  {c:"2.1",p:20,zor:"zor",tur:"acik",
   k:"Bir bebek önce annesinin yüzünü görür ve gözlerini kapattığında bu yüzü zihninde canlandırabilir. Zamanla farklı insanların yüzlerini ortak özelliklerine göre gruplayarak genel bir “yüz” tasarımı oluşturur. Daha sonra “anne” ve “yüz” kelimelerini öğrenir ve bu tasarımları kelimelerle düşünmeye başlar.",
   q:"a) Metindeki üç aşamayı imge, kavram ve dil terimleriyle adlandırarak açıklayınız.<br>b) “Dil olmadan da düşünülebilir mi?” sorusuna, metindeki aşamalardan ve dil–düşünme ilişkisine dair görüşlerden yararlanarak tutarlı bir paragraf yazınız. (En az 60, en fazla 90 kelime)",
   c2:"a) İmge: Annenin yüzünün zihinde canlanması, duyusal yaşantının zihinde canlanmasıdır. Kavram: Farklı yüzleri ortak özelliklerine göre gruplayarak genel bir “yüz” tasarımı oluşturmak, imgelerin soyutlanıp gruplanmasıdır. Dil: “Anne” ve “yüz” kelimelerini öğrenmek, kavramları kelimelerle karşılayan sembol sistemine geçmektir.<br>b) Örnek paragraf (yaklaşık 75 kelime): Metindeki bebek kelimeleri bilmeden önce de imgeler ve kavramlarla düşünebilmektedir; bu, bağımsızlık görüşünün dediği gibi basit düşünmenin dilden önce var olabileceğini gösterir. Ancak bebek kelimeleri öğrendikçe kavramları daha açık ayırır, düşüncesini başkalarına aktarabilir ve daha karmaşık düşünceler kurar. Demek ki dil olmadan düşünmek mümkündür ama sınırlıdır; dil düşünceyi düzenler ve zenginleştirir, düşünce de dili geliştirir. Bu yüzden en tutarlı açıklama karşılıklı etkileşim görüşüdür.",
   o:[
    {ad:"a",m:"İmge, kavram, dil aşamalarını adlandırma",l:[[8,"Üç aşamayı da doğru adlandırıp metinden örnekle açıklamış."],[5,"İki aşamayı doğru adlandırmış ya da üçünü adlandırıp açıklamamış."],[2,"Yalnızca bir aşamayı doğru adlandırmış."],[0,"Aşamalar yanlış ya da yok."]]},
    {ad:"b",m:"Nedensel ilişkilerle tutarlı bütün oluşturma",l:[[12,"Açık bir görüş bildirmiş; metindeki aşamalardan ve en az bir dil–düşünme görüşünden yararlanarak neden-sonuç ilişkileri kurmuş; paragraf tutarlı, 60-90 kelime."],[6,"Görüş bildirmiş ama metinle ya da görüşlerle bağ kurmamış; ya da paragraf yer yer çelişkili; ya da kelime sınırına uymamış."],[0,"Gerekçesiz kısa bir cevap ya da soruyla ilgisiz."]]}
   ]},
  {c:"2.2",p:15,zor:"orta",tur:"kisa",
   k:"<div class=\"y-tablo-kap\"><table><tr><th></th><th>İfade</th></tr><tr><td>a</td><td>“Herkes bu telefonu alıyor; demek ki piyasadaki en iyi telefon bu.”</td></tr><tr><td>b</td><td>“Sınavda kopya çekmeyi ne zaman bıraktın?”</td></tr><tr><td>c</td><td>“Ödevimin notunu yükseltmezseniz annem çok üzülecek ve bütün yaz evden çıkamayacağım.”</td></tr></table></div>",
   q:"Tablodaki her ifadede yapılan safsatanın türünü yazınız ve birer cümleyle gerekçelendiriniz.",
   c2:"a) Ortak tutuma başvurma: Telefonun iyi olduğu, çoğunluğun onu almasına dayandırılıyor; çok kişinin alması kalitesini kanıtlamaz. b) İmalı soru: Soru, karşıdakinin kopya çektiğini baştan varsayıyor; nasıl cevap verirse versin suçlu duruma düşer. c) Duygu sömürüsü: Notun neden yükseltilmesi gerektiğine dair bir kanıt yerine öğretmenin acıma duygusuna başvuruluyor.",
   o:[
    {m:"Safsata türü ve gerekçesi",l:[[15,"Üç ifadenin türünü doğru yazıp her birini gerekçelendirmiş."],[10,"İki ifadenin türünü doğru yazıp gerekçelendirmiş."],[5,"Bir ifadenin türünü doğru yazıp gerekçelendirmiş ya da türleri doğru yazıp hiç gerekçe vermemiş."],[0,"Türler yanlış ya da yok."]]}
   ]},
  {c:"2.2",p:20,zor:"orta",tur:"acik",
   k:"<b>I.</b> Bütün memeliler akciğerle solunum yapar. Yunus bir memelidir. O hâlde yunus akciğerle solunum yapar.<br><b>II.</b> Bugüne kadar gördüğüm her kuğu beyazdı. Demek ki bütün kuğular beyazdır.<br><b>III.</b> Dünya ve Mars, Güneş'in çevresinde dönen kayalık gezegenlerdir. Dünya'da yaşam vardır. O hâlde Mars'ta da yaşam olmalıdır.",
   q:"a) Her akıl yürütmenin türünü yazınız.<br>b) Hangi akıl yürütmede sonuç öncüllerden zorunlu olarak çıkar? Gerekçelendiriniz.<br>c) II. akıl yürütmenin zayıf yönünü açıklayınız.",
   c2:"a) I. Tümdengelim (genelden özele). II. Tümevarım (tekil gözlemlerden genele). III. Analoji (benzerlikten hareket).<br>b) I. akıl yürütmede. Genel yargı (bütün memeliler) yunusu da kapsadığı için öncüller doğruysa sonuç zorunlu olarak doğrudur; yani akıl yürütme geçerlidir. II ve III'te sonuç yalnızca olasıdır.<br>c) Sonuç, gözlenmiş sınırlı sayıda kuğuya dayanıyor; gözlenmemiş tek bir siyah kuğu bile genellemeyi yanlışlar. Tümevarımda sonuç kesin değil, olasıdır; az örnekle genelleme yapmak hatalı bir genellemeye götürebilir.",
   o:[
    {ad:"a",m:"Akıl yürütme türleri",l:[[9,"Üç türü de doğru yazmış."],[6,"İki türü doğru yazmış."],[3,"Bir türü doğru yazmış."],[0,"Hiçbiri doğru değil."]]},
    {ad:"b",m:"Geçerliliği gerekçelendirme",l:[[6,"I'i seçmiş ve sonucun genel yargıdan zorunlu çıktığını (geçerlilik) açıklamış."],[3,"I'i seçmiş ama gerekçe yazmamış."],[0,"Yanlış akıl yürütmeyi seçmiş."]]},
    {ad:"c",m:"Tümevarımın zayıf yönü",l:[[5,"Sonucun sınırlı gözleme dayandığını ve tek bir karşı örnekle yanlışlanabileceğini (olası olduğunu) açıklamış."],[2,"Zayıf yönü sezdirmiş ama açıklamamış (“yanlış olabilir” demekle kalmış)."],[0,"Açıklama yok ya da yanlış."]]}
   ]}
 ]}
];

/* ================= SINAVDA ÇIKABİLECEKLER ================= */
const MUHTEMEL={
  giris:"Senaryo 3: 1.1'den 3, 2.1'den 1, 2.2'den 2 soru.",
  ciktilar:[
    {c:"1.1",ad:"Felsefenin anlamı, gelişimi ve işlevi",n:3,m:[
      "<b>Anlam:</b> bilgelik sevgisi; filozof bilgeliği seven",
      "<b>Ortak tanım:</b> karşılaştır, ortak öğeyi bul, gerekçe yaz",
      "<b>Özellikler:</b> diyalogdaki sözü özelliğe bağla",
      "<b>Felsefi soru:</b> ✓/✗ ayır, özellik adını yaz",
      "<b>Bilim–din–sanat ve işlev:</b> benzerlik, fark, örnek"
    ]},
    {c:"2.1",ad:"Düşünme ve dil",n:1,m:[
      "<b>Üç görüş:</b> özdeşlik, bağımsızlık, karşılıklı etkileşim",
      "<b>Aşamalar:</b> imge → kavram → dil",
      "<b>Neden-sonuç:</b> tutarlı bir paragrafta kur"
    ]},
    {c:"2.2",ad:"Mantık ve argümantasyon",n:2,m:[
      "<b>Standart form:</b> P1, P2, C",
      "<b>Yeniden ifade:</b> anlam aynı, ekleme yok",
      "<b>Safsata:</b> adını yaz, bir cümle gerekçe",
      "<b>Kavramlar:</b> önerme, geçerlilik, tümdengelim, tümevarım, analoji"
    ]}
  ],
  tip:["Kısa cevap: D/Y, özellik ya da safsata adı","Metin/diyalog: sözü kavrama bağla, metinden göster","Açık uçlu: gerekçeli görüş, kelime sınırına uy"]
};
