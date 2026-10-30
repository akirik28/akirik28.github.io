/* Biyoloji 10 · 1. yazılı cep kiti · veri
   Kapsam: öğretmenlerin "Grade 10 Exam 1 Success Criteria" belgesi (2026-27), Senaryo 4: BIO.10.1.1 ×3, BIO.10.1.3 ×2 (toplam 5 soru).
   Kaynaklar (takip/10-sinif-kaynak/01-Biology): "1.1 Importance of Energy for Living Things", "1.2 & 1.3 Photosynthesis" sunumları,
   Photosynthesis Review Worksheet, deney düzeneği örnekleri, MEB "Yazılıya hazırlanıyorum" örnek soruları. Ders kitabından alıntı yok; metinler kendi cümlelerimiz.
   Ders İngilizce işlendiği için sorular İngilizce, açıklamalar ve örnek cevaplar Türkçe (anahtar cümleler İngilizce).
   Lecture'a göre: aerobik solunumda 38 ATP; ATP hidrolizinde ~7300 cal; ATP hücreler arasında taşınmaz.
   2026-10-29: sunumlarla karşılaştırıldı (takip/sinav-kitleri/biyoloji-10/SUNUM-KARSILASTIRMA.md); MC/PROVA içeriği sunum ya da kazanım içinde, değişiklik yalnız EK.
   2026-10-30 kalite düzeltmeleri (DENETIM-KALITE.md): kaynatmanın nedeni düzeltildi, Deneme 1 S1'de numaralı ATP şeması (SVG), S4'te mor ışık (MEB Q2), MC 22–23 eklendi.
   MC biçimi: o[0] doğru şık (arayüz şıkları karıştırır), e = Türkçe açıklama, c = öğrenme çıktısı ("1.1" | "1.3").
   PROVA biçimi: {c,p,zor,tur,k,q,c2,o:[{m,l:[[puan,ölçüt],…]}]}. */

const SINAV={tarih:"2026-11-03",gun:"3 Kasım 2026 Salı"};

const SENARYO=[
 {k:"BIO.10.1.1",t:"The importance of energy for life: ATP structure and its role in energy transfer",n:3},
 {k:"BIO.10.1.3",t:"Photosynthesis: substances used and produced (experiments)",n:2}
];

const RUBRIK=[
 {t:"Enerji isteyen ve istemeyen süreçleri ayırıp enerjinin canlılık için neden şart olduğunu açıklayabilirim."},
 {t:"ATP'nin yapısını (adenin, riboz, üç fosfat) çizip etiketleyebilir; ester ve glikozit bağlarını gösterebilirim."},
 {t:"ATP'nin hücrede depolanmadığını ve hücreden hücreye taşınmadığını, ATP üretimi durursa hücrenin ne olacağını açıklayabilirim."},
 {t:"ATP hidrolizini (enerji verir) ve ATP sentezini (fosforilasyon, enerji ister) ayırt edebilirim."},
 {t:"Fotofosforilasyon, oksidatif fosforilasyon ve kemofosforilasyonu yer ve enerji kaynağıyla karşılaştırabilirim."},
 {t:"Işığa bağlı ve ışıktan bağımsız tepkimelerde kullanılan ve üretilen maddeleri yazabilirim."},
 {t:"Fotosentezin kelime denklemini yazar, ışığın rolünü açıklayabilirim."},
 {t:"Fotosentezde kullanılan ya da üretilen bir maddeyi gösteren deney tasarlayabilirim (amaç, hipotez, düzenek)."},
 {t:"Bir deneyde bağımsız, bağımlı ve sabit tutulan değişkenleri yazabilirim."},
 {t:"Deney gözleminden kanıt çıkarıp fotosentez hakkında sonuç yazabilirim."}
];

const EK=[
 {k:"Ek",h:"Fotosentez hızını etkileyen etkenler",p:"Senaryo 4'te ayrı soru yok; ışık şiddeti, CO₂ ve sıcaklık deney sorularında işe yarar (ek defter)."},
 {k:"Not",h:"Komut sözcükleri",p:"State = kısaca söyle · Describe = ne olduğunu anlat · Explain = nedenini anlat · Deduce = verilenden sonuç çıkar · Suggest = olası bir açıklama öner."}
];

/* ================= ÇOKTAN SEÇMELİ (pekiştirme) =================
   0-12  BIO.10.1.1 · Enerji, ATP, fosforilasyon, evrelerin girdi-çıktısı
   13-21 BIO.10.1.3 · Fotosentez deneyleri
   22    BIO.10.1.1 · Öğrenci modelindeki hata (WS S.1–2) · 23 BIO.10.1.3 · Mor ışık (MEB Q2.2); sonradan eklendi, akış testlerinde var */
const MC=[
 /* ---------- 1.1 ---------- */
 {c:"1.1",q:"Which of the following processes does NOT require energy from ATP?",
  o:["Diffusion of oxygen into a cell","Contraction of a muscle cell","Synthesis of a protein from amino acids","Active transport of ions across a membrane"],
  e:"Difüzyon, maddenin çok olduğu yerden az olduğu yere kendiliğinden geçişidir; ATP harcanmaz. Kasılma, protein sentezi ve aktif taşıma ATP ister."},
 {c:"1.1",q:"ATP is made of which three components?",
  o:["Adenine, ribose and three phosphates","Adenine, deoxyribose and three phosphates","Adenine, glucose and two phosphates","Guanine, ribose and three phosphates"],
  e:"ATP = adenin (azotlu baz) + riboz (5 karbonlu şeker) + üç fosfat. Deoksiriboz DNA'nın şekeridir."},
 {c:"1.1",q:"In an ATP molecule, which bond joins ribose to adenine?",
  o:["Glycosidic bond","Ester bond","Peptide bond","Hydrogen bond between phosphates"],
  e:"Riboz ile adenin arasında glikozit bağı, riboz ile fosfat arasında ester bağı vardır. Peptit bağı amino asitler arasındadır."},
 {c:"1.1",q:"Why can one cell not use ATP produced by another cell?",
  o:["ATP is a large molecule and is not transferred between cells","ATP is broken down by the cell membrane as soon as it is made","Only plant cells are able to produce ATP from glucose","ATP is stored in the nucleus and cannot leave it"],
  e:"Her hücre kendi ATP'sini üretir; ATP büyük bir molekül olduğu için hücreden hücreye taşınmaz. Bu yüzden ATP üretimi duran hücre başka hücreden ATP alamaz."},
 {c:"1.1",q:"A substance that blocks ATP production is added to yeast cells. What will most likely happen?",
  o:["The cells stop energy-requiring processes and die","The cells grow faster because they save energy","The cells take ATP from neighbouring cells instead","The cells store extra glucose and stay alive for weeks"],
  e:"ATP depolanmaz ve başka hücreden gelmez. ATP üretimi durunca büyüme, bölünme ve aktif taşıma gibi enerji isteyen işler yapılamaz; hücre ölür."},
 {c:"1.1",q:"What happens when ATP is hydrolysed?",
  o:["ADP and inorganic phosphate form and energy is released","ADP and inorganic phosphate join and energy is absorbed","AMP is converted into ATP using light energy","Water is released and a phosphate group is added"],
  e:"Hidroliz su ile parçalamadır: ATP + H₂O → ADP + Pᵢ + enerji (yaklaşık 7300 cal). Fosfat eklenip su çıkması ise sentezdir (fosforilasyon)."},
 {c:"1.1",q:"Which statement about phosphorylation (ADP + Pi → ATP) is correct?",
  o:["It requires energy and releases water","It releases energy and uses water","It happens only in the absence of oxygen","It breaks the bond between ribose and adenine"],
  e:"ADP'ye fosfat eklemek enerji ister (endergonik) ve su açığa çıkar (dehidrasyon sentezi). Enerji veren ve su kullanan, hidrolizdir."},
 {c:"1.1",q:"Photophosphorylation differs from oxidative phosphorylation because it…",
  o:["uses light energy to make ATP","takes place in the mitochondria","needs the breakdown of glucose with oxygen","happens only in chemosynthetic bacteria"],
  e:"Fotofosforilasyonda ATP ışık enerjisiyle, klorofil taşıyan hücrelerde (kloroplast ya da prokaryot sitoplazması) yapılır. Mitokondride O₂ ile yapılan oksidatif fosforilasyondur."},
 {c:"1.1",q:"Chemosynthetic bacteria produce ATP by…",
  o:["chemophosphorylation, by oxidising inorganic substances","photophosphorylation, using sunlight absorbed by chlorophyll","oxidative phosphorylation in their mitochondria","breaking down ATP from other organisms"],
  e:"Kemosentetik bakteriler nitrit, demir gibi inorganik maddeleri yükseltgeyerek enerji elde eder: kemofosforilasyon. Bakterilerde mitokondri yoktur."},
 {c:"1.1",q:"Which reaction is endergonic (anabolic)?",
  o:["Building a protein from 50 amino acids","Aerobic respiration of glucose","Hydrolysis of ATP to ADP","Fermentation of sugar by yeast"],
  e:"Küçük moleküllerden büyük molekül kurmak enerji ister: anabolizma, endergonik. Solunum, fermantasyon ve ATP hidrolizi enerji verir (ekzergonik)."},
 {c:"1.1",q:"Which substances are produced in the light-dependent reactions?",
  o:["ATP, NADPH and O₂","Glucose, ADP and NADP⁺","CO₂, water and ATP","PGAL, oxygen and RuBP"],
  e:"Işığa bağlı tepkimelerde su ışıkla parçalanır: O₂ çıkar, ATP ve NADPH yapılır. Şeker (önce PGAL, sonra glikoz) Calvin döngüsünde yapılır."},
 {c:"1.1",q:"Where do the light-independent reactions (Calvin cycle) take place?",
  o:["In the stroma","In the thylakoid membranes","In the mitochondria","In the cell membrane"],
  e:"Calvin döngüsü kloroplastın stromasında, ışığa bağlı evrenin ürettiği ATP ve NADPH ile CO₂'yi şekere çevirir. Tilakoid zar ışığa bağlı evrenin yeridir."},
 {c:"1.1",q:"Which substances enter the Calvin cycle from the light-dependent reactions?",
  o:["ATP and NADPH","O₂ and water","Glucose and CO₂","ADP and NADP⁺"],
  e:"Calvin döngüsü ışığı doğrudan kullanmaz; ışığa bağlı evrenin ATP ve NADPH'sini kullanır. ADP ve NADP⁺ tersine, Calvin döngüsünden ışığa bağlı evreye döner."},
 /* ---------- 1.3 ---------- */
 {c:"1.3",q:"Which is the correct word equation for photosynthesis?",
  o:["carbon dioxide + water → glucose + oxygen","glucose + oxygen → carbon dioxide + water","oxygen + water → glucose + carbon dioxide","glucose + water → oxygen + carbon dioxide"],
  e:"Fotosentezde CO₂ ve su ışık enerjisi ve klorofil ile glikoz ve oksijene dönüşür. Tersi solunumun denklemidir."},
 {c:"1.3",q:"Elodea in the dark produces no bubbles; under a lamp it produces many. What do the bubbles show?",
  o:["Oxygen is produced when light is present","Carbon dioxide is produced in the light","Water is used up only in the dark","Glucose is released into the water"],
  e:"Kabarcıklar fotosentezde açığa çıkan O₂'dir. Karanlıkta fotosentez olmaz, kabarcık çıkmaz: ışık gereklidir ve O₂ üretilir."},
 {c:"1.3",q:"In a light-distance experiment with Elodea, what is the independent variable?",
  o:["The distance of the lamp from the plant","The number of bubbles counted in 2 minutes","The temperature of the water in the beaker","The amount of oxygen dissolved in the water"],
  e:"Bağımsız değişken deneyi yapanın değiştirdiğidir: lambanın uzaklığı (ışık şiddeti). Kabarcık sayısı ölçülen, yani bağımlı değişkendir."},
 {c:"1.3",q:"Which should be kept constant when testing how light intensity affects the rate of photosynthesis?",
  o:["The temperature of the water","The distance of the lamp","The number of bubbles","The light intensity"],
  e:"Yalnız ışık değiştirilmeli; sıcaklık, CO₂, bitki türü ve boyu sabit tutulur. Uzaklık bağımsız, kabarcık sayısı bağımlı değişkendir."},
 {c:"1.3",q:"Sodium hydroxide (NaOH) is placed in one setup with a plant. What is its role?",
  o:["It absorbs carbon dioxide","It releases extra oxygen","It provides water for the plant","It acts as a source of light energy"],
  e:"NaOH ortamdaki CO₂'yi tutar. Bu düzenekte fotosentez olmazsa CO₂'nin gerekli olduğu gösterilmiş olur. CO₂ kaynağı olarak ise sodyum bikarbonat kullanılır."},
 {c:"1.3",q:"In the starch test, a leaf is placed in hot alcohol. Why?",
  o:["To remove the chlorophyll from the leaf","To add starch to the leaf before the test","To keep the leaf cells alive during the test","To provide carbon dioxide to the leaf"],
  e:"Sıcak alkol klorofili çıkarır, yaprak beyazlaşır; böylece iyodun nişastayla verdiği mavi-siyah renk görülür. Kaynatma ise hücreleri öldürür, enzimleri durdurur ve zarları geçirgen yapar; iyot nişastaya ulaşır (<i>boiling kills the cells and exposes the starch</i>)."},
 {c:"1.3",q:"Iodine solution turns blue-black on part of a leaf. What does this show?",
  o:["Starch is present there","Glucose is absent there","Oxygen was used there","No light reached that part"],
  e:"İyot nişasta varsa sarı-kahverengiden mavi-siyaha döner. Nişasta, fotosentezde yapılan glikozun depo hâlidir; demek ki o bölgede fotosentez olmuş."},
 {c:"1.3",q:"Part of a leaf is covered with black paper and the plant is left in light. After the iodine test, the covered part stays yellow-brown. What is the conclusion?",
  o:["Light is needed for photosynthesis","Chlorophyll is needed for photosynthesis","Carbon dioxide is produced by the leaf","Starch is broken down in the light"],
  e:"Örtülen ve örtülmeyen kısım arasındaki tek fark ışıktır. Örtülen kısımda nişasta yok: ışık olmadan fotosentez olmamış."},
 {c:"1.3",q:"Bromothymol blue turns yellow in a tube with a plant kept in the dark. Why?",
  o:["CO₂ from respiration builds up and makes the water acidic","Photosynthesis removes CO₂ and makes the water basic","Oxygen from photosynthesis turns the indicator yellow","The plant absorbs the indicator in the dark"],
  e:"Karanlıkta fotosentez olmaz ama solunum sürer; CO₂ birikir, su asitleşir ve BTB sarıya döner. Işıkta CO₂ kullanılınca maviye döner."},
 /* ---------- sonradan eklenenler (30 Eki) ---------- */
 {c:"1.1",q:"A student's model of photosynthesis shows CO₂ entering the light-dependent reactions and glucose leaving them. What is the error?",
  o:["CO₂ is used and sugar is made in the Calvin cycle, not here","Glucose should enter the light-dependent reactions as the energy source","Oxygen should enter the Calvin cycle and water should leave it","Light should be used directly in the Calvin cycle to fix carbon dioxide"],
  e:"Işığa bağlı evreye ışık, su, ADP + Pᵢ ve NADP⁺ girer; O₂, ATP ve NADPH çıkar. CO₂ Calvin döngüsüne girer ve şeker orada yapılır. Calvin döngüsü ışığı doğrudan kullanmaz."},
 {c:"1.3",q:"An Elodea plant gives no bubbles in the dark but many bubbles under a purple light source. Why does purple light work well?",
  o:["Chlorophyll absorbs purple light well, so photosynthesis is fast","Purple light warms the water, so more oxygen gas can dissolve in the water","Chlorophyll reflects purple light, so the leaves are protected from damage","Purple light gives the plant extra carbon dioxide to use"],
  e:"Klorofil mor (mavi-mor) ve kırmızı ışığı en iyi, yeşili en az soğurur. Mor ışıkta fotosentez hızlıdır, çok O₂ kabarcığı çıkar. Karanlıkta ise ışık enerjisi olmadığı için fotosentez olmaz, kabarcık çıkmaz."}
];

/* ================= YAZILI PROVASI (Senaryo 4: 1.1 ×3, 1.3 ×2; 100 puan) ================= */
const PROVA_SURUM="bio10-2";
const ATP_SEMA='<svg viewBox="0 12 340 128" role="img" aria-label="Diagram of an ATP molecule with four numbered parts" style="display:block;width:100%;max-width:440px;height:auto;margin:2px auto 12px;color:inherit">'+
 '<g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M58 80H72M108 80H122M158 80L182 80.6M227.8 80.6L260 75.8"/></g>'+
 '<g stroke="currentColor" stroke-width="2" stroke-linejoin="round">'+
  '<circle cx="40" cy="80" r="18" fill="#E9B949" fill-opacity=".45"/><circle cx="90" cy="80" r="18" fill="#E9B949" fill-opacity=".45"/><circle cx="140" cy="80" r="18" fill="#E9B949" fill-opacity=".45"/>'+
  '<path d="M205 64L227.8 80.6L219.1 107.4H190.9L182.2 80.6Z" fill="#E26D9C" fill-opacity=".4"/>'+
  '<path d="M280.9 47V69L260 75.8L247.1 58L260 40.2Z" fill="#EE9440" fill-opacity=".45"/><path d="M300 36L319 47V69L300 80L280.9 69V47Z" fill="#EE9440" fill-opacity=".45"/>'+
 '</g>'+
 '<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"><path d="M22 54V46H158V54M90 46V40M300 82V100M205 109V114M65 84V104"/></g>'+
 '<g stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity=".07"><rect x="289" y="100" width="22" height="21" rx="5"/><rect x="194" y="114" width="22" height="21" rx="5"/><rect x="79" y="19" width="22" height="21" rx="5"/><rect x="54" y="104" width="22" height="21" rx="5"/></g>'+
 '<g fill="currentColor" font-size="15" font-weight="700" text-anchor="middle" font-family="inherit"><text x="300" y="116">1</text><text x="205" y="130">2</text><text x="90" y="35">3</text><text x="65" y="120">4</text></g>'+
'</svg>';
const PROVA=[
 {ad:"Deneme 1",s:[
  {c:"1.1",p:20,zor:"kolay",tur:"kisa",
   k:ATP_SEMA+"The diagram shows a molecule of ATP. Parts 1, 2 and 3 are the three components of the molecule; 4 is the bond between the second and the third phosphate.",
   q:"a) Name parts 1, 2 and 3. b) Name the bond between part 1 and part 2, and the bond between part 2 and part 3. c) What happens to part 4 when the cell needs energy?",
   c2:"a) 1: adenine, 2: ribose, 3: phosphate groups. b) Adenin–riboz: glycosidic bond; riboz–fosfat: ester bond. c) Uç fosfat bağı hidrolizle kopar: ATP + H₂O → ADP + Pᵢ + enerji (~7300 cal). <i>Energy is released when the bond to the terminal phosphate is hydrolysed.</i>",
   o:[{m:"Parçaların adı",l:[[8,"Üçü de doğru (adenin, riboz, fosfat)."],[4,"İkisi doğru."],[0,"En fazla biri doğru."]]},
      {m:"Bağlar",l:[[6,"Glikozit ve ester bağı doğru yerde."],[3,"Biri doğru."],[0,"İkisi de yanlış."]]},
      {m:"Enerji açığa çıkması",l:[[6,"Hidroliz (defosforilasyon), ADP + Pᵢ ve enerji açığa çıkması yazılmış."],[3,"Enerji çıkar demiş ama ADP + Pᵢ ya da hidroliz eksik."],[0,"Yanlış ya da boş."]]}]},
  {c:"1.1",p:20,zor:"orta",tur:"acik",
   k:"A student lists: (i) a muscle contracting, (ii) water entering a root cell by osmosis, (iii) a cell making proteins, (iv) oxygen diffusing into the blood, (v) a cell dividing.",
   q:"a) Which processes require ATP? Which do not? b) Explain why living organisms need a continuous supply of energy. c) Explain why ATP is called the energy currency of the cell.",
   c2:"a) ATP gerekir: (i), (iii), (v). Gerekmez: (ii), (iv) (osmoz ve difüzyon edilgen taşımadır). b) Canlılık işleri (kasılma, sentez, bölünme, aktif taşıma) sürekli enerji ister; ATP depolanamaz ve başka hücreden alınamaz, bu yüzden besinlerden sürekli yeniden üretilmelidir. c) Hücre besinlerin enerjisini doğrudan kullanamaz; enerji önce ATP'ye aktarılır, ATP hidrolizi enerji isteyen tepkimeleri doğrudan besler. <i>ATP links energy-releasing (catabolic) and energy-requiring (anabolic) reactions.</i>",
   o:[{m:"Sınıflandırma",l:[[8,"Beşi de doğru."],[4,"Üçü ya da dördü doğru."],[0,"En fazla ikisi doğru."]]},
      {m:"Sürekli enerji",l:[[6,"Enerji isteyen süreçler + ATP'nin depolanmadığı / taşınmadığı."],[3,"Yalnız biri."],[0,"Boş ya da yanlış."]]},
      {m:"Enerji para birimi",l:[[6,"Besin enerjisi ATP'ye aktarılır, ATP hidrolizi işleri doğrudan besler."],[3,"Eksik açıklama."],[0,"Boş ya da yanlış."]]}]},
  {c:"1.1",p:20,zor:"zor",tur:"acik",
   k:"Two Petri dishes contain the same number of yeast cells and glucose solution. Dish 1 has nothing else; Dish 2 also has a substance that blocks ATP production. Both are kept under the same conditions. After some time, the yeast in Dish 1 has multiplied, but in Dish 2 there is no growth.",
   q:"a) Identify the control group and the independent variable. b) Using the results, explain why ATP is vital for living things. c) Even if the yeast from both dishes were mixed, the yeast in Dish 2 could not use ATP made by the yeast in Dish 1. Suggest why.",
   c2:"a) Kontrol: 1. petri. Bağımsız değişken: ATP üretimini engelleyen maddenin varlığı. b) 2. petride ATP yapılamadığı için büyüme ve bölünme gibi enerji isteyen işler yapılamadı; maya çoğalamadı. ATP olmadan hücre canlılığını sürdüremez. <i>ATP provides the energy for growth and division; without ATP these processes stop.</i> c) Her hücre kendi ATP'sini üretir; ATP büyük bir molekül olduğu için hücreden hücreye taşınmaz. <i>Each cell must make its own ATP; ATP is not transferred from one cell to another.</i>",
   o:[{m:"Kontrol ve değişken",l:[[6,"İkisi de doğru."],[3,"Biri doğru."],[0,"İkisi de yanlış."]]},
      {m:"ATP'nin önemi",l:[[8,"Gözlem + enerji isteyen süreçler + sonuç."],[4,"Sonuç var ama gözlemle bağlanmamış."],[0,"Boş ya da yanlış."]]},
      {m:"Hücreler arası taşınmama",l:[[6,"ATP'nin taşınmadığı ve her hücrenin kendi ATP'sini yaptığı."],[3,"Yalnız biri."],[0,"Boş ya da yanlış."]]}]},
  {c:"1.3",p:20,zor:"orta",tur:"acik",
   k:"An Elodea plant in water is covered with a funnel and a test tube. In the dark, no bubbles form. A purple light source is then placed at 10 cm, 15 cm and 20 cm, with the temperature kept constant. Bubbles in 2 minutes: 10 cm → 120, 15 cm → 54, 20 cm → 30.",
   q:"a) State the aim of the experiment, the independent variable and the dependent variable. b) Explain why no bubbles form in the dark but bubbles form under the purple light. c) Describe the relationship shown by the results.",
   c2:"a) Amaç: ışık şiddetinin fotosentez hızına etkisini incelemek. Bağımsız: ışık kaynağının uzaklığı (ışık şiddeti). Bağımlı: 2 dakikadaki kabarcık sayısı. b) Kabarcıklar fotosentezde açığa çıkan O₂'dir. Karanlıkta ışık enerjisi olmadığı için ışığa bağlı tepkimeler (suyun parçalanması) olmaz, O₂ çıkmaz; ışıkta su parçalanır ve O₂ açığa çıkar. Mor (mavi-mor) ışık, kırmızıyla birlikte klorofilin en iyi soğurduğu ışıktır; bu yüzden fotosentez hızı yüksektir ve çok kabarcık çıkar. <i>Purple light is well absorbed by chlorophyll, so the rate of photosynthesis is high.</i> c) Uzaklık arttıkça ışık şiddeti azalır, kabarcık sayısı ve fotosentez hızı azalır. <i>As distance increases, the rate of photosynthesis decreases.</i>",
   o:[{m:"Amaç ve değişkenler",l:[[8,"Üçü de doğru."],[4,"İkisi doğru."],[0,"En fazla biri doğru."]]},
      {m:"Karanlık / ışık",l:[[6,"Kabarcık = O₂, ışığın ışığa bağlı tepkimeler / suyun parçalanması için gerektiği ve mor ışığın klorofilce iyi soğurulduğu."],[3,"Yalnız biri ya da ikisi."],[0,"Boş ya da yanlış."]]},
      {m:"İlişki",l:[[6,"Yön doğru ve veriyle desteklenmiş."],[3,"Yön doğru, veri yok."],[0,"Yanlış."]]}]},
  {c:"1.3",p:20,zor:"zor",tur:"acik",
   k:"A student wants to show that carbon dioxide is needed for photosynthesis. She has two identical plants, bell jars, sodium hydroxide (NaOH, absorbs CO₂), water, a lamp, boiling water, alcohol and iodine solution.",
   q:"a) Write a hypothesis for this experiment. b) Describe how she should set up the experimental and control groups. c) Describe how she can test the leaves for starch, and state the expected results.",
   c2:"a) <i>If carbon dioxide is removed, the plant will not photosynthesise and no starch will form in its leaves.</i> b) Önce iki bitki 24 saat karanlıkta tutulur (nişasta harcansın). Deney: bitki + NaOH kabı, fanus altında. Kontrol: bitki + su kabı (NaOH yok), fanus altında. İkisi aynı ışık, sıcaklık ve sürede tutulur. c) Yapraklar kaynar suya atılır (hücreler ölür, iyot nişastaya ulaşır), sıcak alkolde klorofil çıkarılır, iyot damlatılır. Beklenen: kontrol yaprağı mavi-siyah (nişasta var), NaOH'li bitkinin yaprağı sarı-kahverengi (nişasta yok): CO₂ gereklidir.",
   o:[{m:"Hipotez",l:[[5,"Test edilebilir, CO₂ ile sonucu bağlayan hipotez."],[2,"Belirsiz hipotez."],[0,"Boş ya da yanlış."]]},
      {m:"Düzenek",l:[[8,"NaOH'li deney ve NaOH'siz kontrol + sabitler + karanlıkta bekletme (b ya da c'de yazılmışsa kabul)."],[4,"Deney ve kontrol var, sabitler ya da karanlık eksik."],[0,"Kontrol grubu yok."]]},
      {m:"Nişasta testi ve beklenen sonuç",l:[[7,"Kaynatma, alkol, iyot ve iki yaprağın beklenen rengi."],[3,"Test ya da sonuç eksik."],[0,"Boş ya da yanlış."]]}]}
 ]},
 {ad:"Deneme 2",s:[
  {c:"1.1",p:20,zor:"kolay",tur:"kisa",
   k:"ATP + H₂O → ADP + Pᵢ + energy (reaction I)<br>ADP + Pᵢ + energy → ATP + H₂O (reaction II)",
   q:"a) Name reaction I and reaction II. b) Which reaction is endergonic? Explain. c) Name the bond broken in reaction I.",
   c2:"a) I: ATP hidrolizi (defosforilasyon). II: fosforilasyon (ATP sentezi, dehidrasyon sentezi). b) II endergoniktir, çünkü ADP'ye fosfat bağlamak enerji ister. c) İkinci ve üçüncü (uç) fosfat arasındaki yüksek enerjili fosfat bağı.",
   o:[{m:"Tepkime adları",l:[[8,"İkisi de doğru."],[4,"Biri doğru."],[0,"İkisi de yanlış."]]},
      {m:"Endergonik",l:[[6,"II ve doğru gerekçe."],[3,"II ama gerekçe yok."],[0,"Yanlış."]]},
      {m:"Kopan bağ",l:[[6,"Uç (2. ile 3.) fosfat arasındaki yüksek enerjili fosfat bağı (<i>terminal phosphate bond / high-energy phosphate bond / phosphoanhydride bond</i> kabul)."],[3,"'Fosfatlar arasındaki bağ' demiş ama hangisi olduğu belirsiz."],[0,"Yanlış (ör. ester ya da glikozit bağı) ya da boş."]]}]},
  {c:"1.1",p:20,zor:"orta",tur:"acik",
   k:"Type of phosphorylation · Where it happens · Energy source<br>Photophosphorylation · ? · ?<br>Oxidative phosphorylation · ? · ?<br>Chemophosphorylation · ? · ?",
   q:"Complete the table for the three types of phosphorylation, and give one organism for each.",
   c2:"Fotofosforilasyon: kloroplast (ökaryot), sitoplazma (siyanobakteri); ışık enerjisi; ör. bitki, siyanobakteri. Oksidatif: mitokondri (ökaryot), mezozom / hücre zarı (aerobik bakteri); besinlerin O₂ ile yıkımı; ör. insan, maya. Kemofosforilasyon: kemosentetik bakterilerin hücre zarı / sitoplazması (mitokondri yok); inorganik maddelerin yükseltgenmesi; ör. nitrit bakterisi.",
   o:[{m:"Yerler",l:[[7,"Üçü doğru (kemo için 'kemosentetik bakterilerde' yazmak da kabul)."],[4,"İkisi doğru."],[0,"En fazla biri."]]},
      {m:"Enerji kaynakları",l:[[7,"Üçü doğru."],[4,"İkisi doğru."],[0,"En fazla biri."]]},
      {m:"Örnek canlılar",l:[[6,"Üçü doğru."],[3,"İkisi doğru."],[0,"En fazla biri."]]}]},
  {c:"1.1",p:20,zor:"orta",tur:"acik",
   k:"Light-dependent reactions → (A) → Calvin cycle → (B) → back to light-dependent reactions",
   q:"a) State where each stage happens in the chloroplast. b) Name the substances A (two) and B (two). c) State the inputs and outputs of photosynthesis as a whole and describe the role of light.",
   c2:"a) Işığa bağlı: tilakoid zarı (grana); Calvin: stroma. b) A: ATP ve NADPH. B: ADP (+ Pᵢ) ve NADP⁺. c) Girdi: CO₂, su, ışık; çıktı: glikoz (PGAL), O₂ (öğretmen denklemine göre su da). Işık klorofildeki elektronları uyarır, suyu parçalar; ışık enerjisi ATP ve NADPH'deki kimyasal enerjiye dönüşür.",
   o:[{m:"Yerler",l:[[5,"İkisi doğru."],[2,"Biri doğru."],[0,"Yanlış."]]},
      {m:"A ve B",l:[[8,"Dördü doğru."],[4,"İki ya da üçü doğru."],[0,"En fazla biri."]]},
      {m:"Girdi, çıktı, ışık",l:[[7,"Girdiler, çıktılar ve ışığın rolü."],[3,"Biri eksik."],[0,"Boş ya da yanlış."]]}]},
  {c:"1.3",p:20,zor:"orta",tur:"acik",
   k:"Three tubes contain water with a few drops of bromothymol blue (blue when CO₂ is low, green at medium CO₂, yellow when CO₂ is high). At the start, all three tubes are green. They are left for 4 hours. Tube 1: water plant in light. Tube 2: water plant in the dark. Tube 3: no plant, in light.",
   q:"a) Predict the colour in each tube and explain. b) What is the purpose of tube 3? c) Which substance used in photosynthesis does this experiment show?",
   c2:"a) 1: mavi (ışıkta fotosentez CO₂'yi kullanır, asitlik azalır). 2: sarı (karanlıkta yalnız solunum olur, CO₂ birikir). 3: yeşil kalır (bitki yok, CO₂ değişmez). b) Kontrol: renk değişiminin bitkiden kaynaklandığını, ışığın tek başına rengi değiştirmediğini gösterir. c) CO₂'nin fotosentezde kullanıldığını.",
   o:[{m:"Renk tahminleri",l:[[9,"Üçü doğru ve açıklanmış."],[6,"Üçü doğru, açıklama eksik."],[4,"İkisi doğru."],[0,"En fazla biri."]]},
      {m:"3. tüpün amacı",l:[[6,"Kontrol olduğu ve neyi dışladığı."],[3,"Yalnız 'kontrol'."],[0,"Boş ya da yanlış."]]},
      {m:"Sonuç",l:[[5,"CO₂ kullanılır."],[0,"Yanlış."]]}]},
  {c:"1.3",p:20,zor:"zor",tur:"acik",
   k:"A plant is kept in the dark for 24 hours. Part of one leaf is then covered with black paper on both sides, and the plant is placed in sunlight for 6 hours. The leaf is boiled, put in hot alcohol, and tested with iodine.",
   q:"a) Explain why the plant is kept in the dark first, and why the leaf is boiled and put in alcohol. b) Predict the colours of the covered and uncovered parts after the iodine test. c) What conclusion can be drawn? Name the independent and dependent variables.",
   c2:"a) Karanlık: yaprakta önceden var olan nişasta harcansın. Kaynatma: hücreler ölür, enzimler durur, zarlar geçirgen olur ve yaprak yumuşar; iyot nişastaya ulaşır (<i>to kill the cells and expose the starch</i>). Alkol: klorofil çıkar, yaprak beyazlar, iyodun rengi görünür. b) Örtülen kısım sarı-kahverengi (nişasta yok), örtülmeyen kısım mavi-siyah (nişasta var). c) Fotosentez için ışık gereklidir; ürün nişasta olarak depolanır. Bağımsız: ışık (örtülü / açık). Bağımlı: nişasta varlığı (iyot rengi).",
   o:[{m:"Hazırlık adımları",l:[[7,"Karanlık + kaynatma + alkol nedenleri (kaynatma için 'hücreleri öldürmek / nişastayı açığa çıkarmak' yeterli)."],[4,"İkisi doğru."],[0,"En fazla biri."]]},
      {m:"Renk tahmini",l:[[6,"İki kısım doğru."],[3,"Biri doğru."],[0,"Yanlış."]]},
      {m:"Sonuç ve değişkenler",l:[[7,"Sonuç + iki değişken."],[3,"Biri eksik."],[0,"Boş ya da yanlış."]]}]}
 ]}
];

/* ================= SINAVDA ÇIKABİLECEKLER ================= */
const MUHTEMEL={
  giris:"Senaryo 4: BIO.10.1.1'den 3, BIO.10.1.3'ten 2 soru (toplam 5). Sorular İngilizce; çizim ve etiketleme olabilir.",
  ciktilar:[
    {c:"1.1",ad:"Energy and ATP",n:3,m:[
      "<b>ATP'yi çiz ve etiketle:</b> adenin, riboz, 3 fosfat; glikozit ve ester bağı",
      "<b>Hidroliz / sentez:</b> ATP + H₂O → ADP + Pᵢ + enerji; tersi fosforilasyon",
      "<b>ATP depolanmaz, taşınmaz:</b> üretim durursa hücre ölür",
      "<b>Fosforilasyon türleri:</b> foto, oksidatif, kemo (yer + enerji kaynağı)",
      "<b>Evreler:</b> ışığa bağlı (tilakoid) → ATP, NADPH, O₂; Calvin (stroma) → şeker"
    ]},
    {c:"1.3",ad:"Photosynthesis experiments",n:2,m:[
      "<b>Deneyin dili:</b> amaç, hipotez, bağımsız / bağımlı / sabit değişken",
      "<b>O₂:</b> Elodea kabarcıkları, ışık uzaklığı; mor ışık klorofilce iyi soğurulur",
      "<b>CO₂:</b> NaOH tutar, bikarbonat verir, BTB sarı / mavi",
      "<b>Nişasta:</b> karanlık, kaynat, alkol, iyot → mavi-siyah",
      "<b>Sonuç cümlesi:</b> gözlem → neden → sonuç"
    ]}
  ],
  tip:["Kısa cevap: parça / bağ / madde adı","Deney yorumu: amaç, değişkenler, gözlemden sonuç","Açıklama: “explain” sorularında nedenini yaz, bilimsel terim kullan"]
};
