/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/py2N/questions.json) */
window.KIT = {
  "store": "psych-u2:v1:",
  "course": "AP Psychology",
  "unitLabel": "Unit 2 — Cognition",
  "denemeler": {
    "url": "deneme/",
    "count": 5
  },
  "episodes": [
    {
      "no": 1,
      "code": "2.1-1",
      "slug": "py201",
      "title": "Algı: Veri, Beklenti ve Dikkat",
      "en": "Perception: Bottom-Up, Top-Down, and Attention",
      "accent": "#3FB5A0",
      "defter": "py201",
      "defterBaslik": "Algı",
      "seconds": 256,
      "terms": [
        "Perception",
        "Bottom-up processing",
        "Top-down processing",
        "Schema",
        "Perceptual set",
        "Selective attention",
        "Cocktail party effect",
        "Inattentional blindness",
        "Change blindness"
      ],
      "questions": [
        {
          "q": "Kerem ilk kez bir müzede, daha önce hiç görmediği bir müzik aletini inceliyor. Telleri, gövdesindeki delikleri ve uzun sapını tek tek fark ettikten sonra onun bir tür telli çalgı olduğuna karar veriyor. Kerem'in algısı en iyi hangi kavramla açıklanır?",
          "opts": [
            "*Top-down processing*",
            "*Perceptual set*",
            "*Bottom-up processing*",
            "*Change blindness*"
          ],
          "a": 2,
          "why": "Kerem'in elinde önceden bir beklenti yok; parçaları, yani veriyi tek tek toplayıp bir bütüne ulaşıyor. Bu *bottom-up processing*'dir. *Top-down* ve *perceptual set* önceki bilgi ya da beklentiyle başlar."
        },
        {
          "q": "Selin, kantinin önündeki panoda \"Yarın 3. ders iptal\" yazıp yazmadığını merakla kontrol ediyor. Panoda aslında \"Yarın 3. ders ilan\" yazıyor ama Selin \"iptal\" okuyor. Bu hatayı en iyi ne açıklar?",
          "opts": [
            "Beklentisinin yarattığı *perceptual set*",
            "*Bottom-up processing*'in baskın olması",
            "*Inattentional blindness*",
            "*Cocktail party effect*"
          ],
          "a": 0,
          "why": "Selin ne okumak istediğini önceden biliyor; bu beklenti algısını o yöne itiyor. Beklentiden kaynaklanan algı hazırlığı *perceptual set*'tir, yani bir *top-down* etkidir."
        },
        {
          "q": "Kalabalık bir okul koridorunda arkadaşıyla konuşan Mert, çevredeki gürültüyü fark etmiyor. Ama biraz ötede biri \"Mert\" deyince hemen o yöne dönüyor. Bu durum dikkat hakkında neyi gösterir?",
          "opts": [
            "Dikkat dışındaki uyaranlar hiç işlenmez",
            "Dikkat dışındaki bazı uyaranlar da bir düzeyde işlenir ve önemli olan fark edilir",
            "Seçici dikkat yalnızca görsel uyaranlar için çalışır",
            "Gürültü arttıkça kişinin kendi adını duyma olasılığı sıfıra iner"
          ],
          "a": 1,
          "why": "Bu *cocktail party effect*'tir: Mert gürültüyü bilinçli olarak dinlemiyor ama beyni onu yine de süzüyor; kendi adı gibi önemli bir bilgi süzgeçten geçip dikkate sızıyor."
        },
        {
          "q": "Hangi eşleştirme doğrudur?",
          "opts": [
            "Telefonuna bakarak yürüyen birinin yanından geçen bisikletliyi hiç görmemesi → *change blindness*",
            "Fotoğraftaki iki karede bir arabanın renginin değiştiğini fark etmemek → *inattentional blindness*",
            "Kendi adını kalabalıkta duymak → *perceptual set*",
            "Pas sayarken sahadan geçen kostümlü kişiyi görmemek → *inattentional blindness*"
          ],
          "a": 3,
          "why": "Dikkat başka bir göreve odaklıyken görüş alanındaki bir nesneyi kaçırmak *inattentional blindness*'tır. Bisikletli örneği de *inattentional blindness*'tır, renk değişimini kaçırmak ise *change blindness*. Adını duymak *cocktail party effect*'tir."
        },
        {
          "q": "Bir araştırmada katılımcılar bir dizi fotoğraf izliyor. A koşulunda fotoğraflar arasında bir nesne değiştiriliyor ve değişim anında ekran kısa bir süre kararıyor. B koşulunda aynı değişim ekran kararmadan yapılıyor. Sonuçlar tabloda. En iyi desteklenen sonuç hangisidir?",
          "opts": [
            "Kararma, katılımcıların görme keskinliğini kalıcı olarak azaltmıştır",
            "Değişim anı gizlendiğinde insanlar değişiklikleri çok daha sık kaçırır; bu *change blindness*'ı destekler",
            "Sonuçlar *bottom-up processing*'in hiç kullanılmadığını kanıtlar",
            "Katılımcılar B koşulunda daha az dikkatliydi"
          ],
          "a": 1,
          "why": "Kararmalı koşulda değişikliği fark edenler yüzde 10 (4/40), kararmasız koşulda yüzde 65 (26/40). Değişim anı görünmediğinde değişimi kaçırma artıyor: bu *change blindness*. Kalıcı bir görme kaybı ya da dikkat farkı veriden çıkmaz.",
          "fig": {
            "type": "table",
            "head": [
              "Koşul",
              "Katılımcı",
              "Değişikliği fark eden"
            ],
            "rows": [
              [
                "A · değişim anında kısa kararma",
                "40",
                "4"
              ],
              [
                "B · kararma yok",
                "40",
                "26"
              ]
            ],
            "caption": "Örnek veri"
          }
        }
      ]
    },
    {
      "no": 2,
      "code": "2.1-2",
      "slug": "py202",
      "title": "Gestalt, Derinlik ve Sabitlik",
      "en": "Gestalt, Depth Perception, and Constancy",
      "accent": "#3FB5A0",
      "defter": "py201",
      "defterBaslik": "Algı",
      "seconds": 241,
      "terms": [
        "Gestalt",
        "Figure-ground",
        "Proximity",
        "Similarity",
        "Closure",
        "Retinal disparity",
        "Convergence",
        "Monocular cues",
        "Perceptual constancy",
        "Phi phenomenon",
        "Stroboscopic motion"
      ],
      "questions": [
        {
          "q": "Okul broşüründe öğrenci kulüpleri listeleniyor. Tasarımcı her kulübün adını ve saatini birbirine çok yakın yazıyor, kulüpler arasına ise geniş boşluk bırakıyor. Okuyucular hangi bilginin hangi kulübe ait olduğunu kolayca anlıyor. Bu etki hangi Gestalt ilkesine dayanır?",
          "opts": [
            "*Closure*",
            "*Similarity*",
            "*Figure-ground*",
            "*Proximity*"
          ],
          "a": 3,
          "why": "Yakın duran öğeleri aynı grup olarak algılarız; bu *proximity*'dir. Renk ya da biçim benzerliği olsaydı *similarity*, eksik bir şekli tamamlama olsaydı *closure* olurdu."
        },
        {
          "q": "Bir göz doktoru, bir gözünü kaza sonucu kaybeden bir hastanın merdiven inerken ve bardağa su koyarken zorlandığını not ediyor. Hasta uzak dağların hangisinin daha uzakta olduğunu ise rahatça söyleyebiliyor. Hastanın en çok kaybettiği ipucu hangisidir?",
          "opts": [
            "*Retinal disparity*",
            "*Linear perspective*",
            "*Texture gradient*",
            "*Relative clarity*"
          ],
          "a": 0,
          "why": "*Retinal disparity* iki gözün görüntüsünü karşılaştırır ve en çok yakın mesafede işe yarar; tek gözle kaybolur. Uzak dağlar için kullandığı *relative clarity*, *linear perspective* ve *texture gradient* tek gözle de çalışan *monocular cues*'dur."
        },
        {
          "q": "Bir ressam tuvalinde yolun iki kenarını ufukta birleştiriyor, öndeki çimeni iri ve ayrıntılı, uzaktakini sık ve bulanık çiziyor. Ressam hangi iki ipucunu kullanıyor?",
          "opts": [
            "*Convergence* ve *retinal disparity*",
            "*Linear perspective* ve *texture gradient*",
            "*Interposition* ve *relative size*",
            "*Closure* ve *proximity*"
          ],
          "a": 1,
          "why": "Paralel çizgilerin uzakta birleşmesi *linear perspective*, dokunun uzaklaştıkça sıklaşıp bulanıklaşması *texture gradient*'tir. Tuval tek bir düz yüzey olduğundan ressam yalnızca *monocular cues* kullanabilir; *convergence* ve *retinal disparity* iki göz ister."
        },
        {
          "q": "Defne, kuzeninin okul bahçesinin öbür ucuna yürüdüğünü izliyor. Kuzeninin retinadaki görüntüsü giderek küçülüyor ama Defne onun küçüldüğünü düşünmüyor. Bu hangi kavrama örnektir ve hangi ipucuna dayanır?",
          "opts": [
            "*Shape constancy*; *closure*",
            "*Phi phenomenon*; *convergence*",
            "*Size constancy*; uzaklık bilgisi",
            "*Change blindness*; *proximity*"
          ],
          "a": 2,
          "why": "Retina görüntüsü küçüldüğü hâlde cismin gerçek boyunu sabit algılamak *size constancy*'dir. Beyin küçülmeyi uzaklaşmaya bağlar; bunu derinlik ipuçlarıyla birlikte yapar."
        },
        {
          "q": "Bir araştırmacı karanlık bir odada iki küçük ışığı, aralarında kısa bir süre bırakarak sırayla yakıp söndürüyor. Süre kısayken katılımcılar tek bir ışığın bir yerden ötekine kaydığını söylüyor; süre çok uzayınca iki ayrı ışık görüyorlar. Bu bulgu en iyi ne ile açıklanır?",
          "opts": [
            "*Size constancy*",
            "*Phi phenomenon*",
            "*Retinal disparity*",
            "*Figure-ground*"
          ],
          "a": 1,
          "why": "Hiçbir ışık hareket etmiyor; yeterince hızlı sırayla yanıp sönen ışıkları beyin tek bir hareket olarak algılıyor. Bu, *apparent motion*'ın bir türü olan *phi phenomenon*'dur. Aradaki süre uzayınca yanılsama kaybolur."
        }
      ]
    },
    {
      "no": 3,
      "code": "2.2-1",
      "slug": "py203",
      "title": "Kavramlar, Algoritmalar ve Sezgiseller",
      "en": "Concepts, Algorithms, and Heuristics",
      "accent": "#FF8A65",
      "defter": "py202",
      "defterBaslik": "Düşünme, Problem Çözme ve Karar Verme",
      "seconds": 236,
      "terms": [
        "Concept",
        "Prototype",
        "Schema",
        "Assimilation",
        "Accommodation",
        "Algorithm",
        "Heuristic",
        "Availability heuristic",
        "Representativeness heuristic",
        "Mental set"
      ],
      "questions": [
        {
          "q": "Öğrencilerden \"sebze\" kavramına uyan örnekleri olabildiğince hızlı onaylamaları isteniyor. \"Havuç\" için ortalama 0,6 saniyede, \"enginar\" için 1,4 saniyede \"evet\" diyorlar. Bu fark en iyi neyle açıklanır?",
          "opts": [
            "Havuç, sebze kavramının *prototype*'ına daha yakındır",
            "Enginar için öğrenciler *algorithm* kullanmıştır",
            "Havuç için *accommodation* gerekmiştir",
            "Öğrenciler enginar için *mental set*'e takılmıştır"
          ],
          "a": 0,
          "why": "Yeni bir örneği kavramın en tipik örneğiyle karşılaştırırız. Havuç sebze *prototype*'ına daha çok benzediği için daha hızlı sınıflandırılır; enginar daha az tipik olduğu için daha uzun sürer."
        },
        {
          "q": "Ece ilk kez bir yunus görüyor ve onu balık sanıyor. Daha sonra yunusların akciğerle nefes aldığını ve yavrularını emzirdiğini öğrenince yunusu \"memeli\" kategorisine taşıyor. Ece'nin önce ve sonra yaptığı sırasıyla nedir?",
          "opts": [
            "*Accommodation*, sonra *assimilation*",
            "*Assimilation*, sonra *accommodation*",
            "*Availability heuristic*, sonra *algorithm*",
            "*Prototype*, sonra *mental set*"
          ],
          "a": 1,
          "why": "Yunusu var olan balık şemasına koymak *assimilation*'dır. Yeni bilgi şemaya sığmayınca kategorisini değiştirmek *accommodation*'dır."
        },
        {
          "q": "Burak 5 harfli bir kelime oyununda, olası her harf dizilimini bir listeye yazıp sırayla deneyerek mutlaka doğru kelimeyi bulmayı planlıyor. Arkadaşı ise \"Türkçede en sık kullanılan harflerle başla\" diyor. Burak'ın ve arkadaşının stratejileri sırasıyla nedir?",
          "opts": [
            "*Heuristic*; *algorithm*",
            "*Mental set*; *prototype*",
            "*Representativeness heuristic*; *availability heuristic*",
            "*Algorithm*; *heuristic*"
          ],
          "a": 3,
          "why": "Bütün olasılıkları sistemli denemek sonunda doğru cevabı garanti eder: *algorithm*. \"Sık harflerle başla\" ise hızlı ama garantisiz bir kaba kural, yani *heuristic*'tir."
        },
        {
          "q": "Bir okulda 20 öğrenci robotik kulübünde, 380 öğrenci başka kulüplerde. Robotik kulübündekilerin yüzde 60'ı, ötekilerin yüzde 10'u \"bilgisayar oyunlarını sever, sessizdir\" diye tanımlanıyor. Rastgele seçilen ve böyle tanımlanan bir öğrenci için en doğru yargı hangisidir?",
          "opts": [
            "Robotik kulübünde olma olasılığı daha yüksektir, çünkü tanım robotikçilere çok benzer",
            "İki grup için olasılık tam olarak eşittir",
            "Başka bir kulüpte olma olasılığı daha yüksektir; robotik demek *representativeness heuristic* hatasıdır",
            "Bu bilgilerle hiçbir yargıya varılamaz"
          ],
          "a": 2,
          "why": "Tanıma uyan öğrenciler: robotikte 20 × 0,60 = 12, ötekilerde 380 × 0,10 = 38. 38 > 12, yani tanım robotikçilere benzese de öteki kulüplerde olma olasılığı daha yüksek. Benzerliğe bakıp temel oranı unutmak *representativeness heuristic*'in tuzağıdır.",
          "fig": {
            "type": "table",
            "head": [
              "Grup",
              "Öğrenci",
              "Tanıma uyan oran"
            ],
            "rows": [
              [
                "Robotik kulübü",
                "20",
                "yüzde 60"
              ],
              [
                "Diğer kulüpler",
                "380",
                "yüzde 10"
              ]
            ],
            "caption": "Örnek veri"
          }
        },
        {
          "q": "Araştırmacılar bir gruba önce aynı uzun yöntemle çözülen sekiz bulmaca, sonra çok daha kısa bir yolla çözülebilen bir dokuzuncu bulmaca veriyor. Kontrol grubu yalnız dokuzuncu bulmacayı çözüyor. İlk grubun dokuzuncu bulmacada uzun yöntemi çok daha sık kullanması neyi destekler?",
          "opts": [
            "*Mental set*: önceki başarılı yöntem yeni çözümleri görmeyi engelleyebilir",
            "*Availability heuristic*: kısa yol akla daha kolay gelir",
            "*Accommodation*: katılımcılar şemalarını değiştirmiştir",
            "Uzun yöntem her zaman daha doğru sonuç verir"
          ],
          "a": 0,
          "why": "Tek fark ilk sekiz bulmacayı çözmek. Bu deneyim katılımcıları eski yönteme kilitledi; kısa yolu kaçırdılar. Bu *mental set*'tir. Kontrol grubu karşılaştırma sağladığı için fark bu deneyime bağlanabilir."
        }
      ]
    },
    {
      "no": 4,
      "code": "2.2-2",
      "slug": "py204",
      "title": "Karar Tuzakları ve Yaratıcılık",
      "en": "Decision-Making Biases and Creativity",
      "accent": "#FF8A65",
      "defter": "py202",
      "defterBaslik": "Düşünme, Problem Çözme ve Karar Verme",
      "seconds": 231,
      "terms": [
        "Framing",
        "Priming",
        "Confirmation bias",
        "Belief perseverance",
        "Overconfidence",
        "Gambler's fallacy",
        "Sunk cost fallacy",
        "Executive functions",
        "Functional fixedness",
        "Divergent thinking",
        "Convergent thinking"
      ],
      "questions": [
        {
          "q": "Bir deneyde katılımcılar önce ekranda çok kısa süre \"yaşlı, emekli, baston\" gibi kelimeler görüyor. Kontrol grubu nötr kelimeler görüyor. Ardından herkes belirsiz bir fotoğraftaki kişinin yaşını tahmin ediyor; ilk grup daha yüksek tahminler veriyor. Bu sonucu en iyi ne açıklar?",
          "opts": [
            "*Functional fixedness*",
            "*Sunk cost fallacy*",
            "*Priming*",
            "*Gambler's fallacy*"
          ],
          "a": 2,
          "why": "Önceki kelimeler bellekte yaşlılıkla ilgili bağlantıları etkinleştirdi ve sonraki yargıyı etkiledi. Bu *priming*'dir. Kontrol grubuyla karşılaştırma, farkın kelimelerden kaynaklandığını gösterir."
        },
        {
          "q": "Can, bir enerji içeceğinin sınav performansını artırdığına inanıyor. İnternette yalnız bunu destekleyen yazıları okuyor. Daha sonra güvendiği çalışmanın verilerinin uydurma olduğu açıklanıyor, ama Can yine de içeceğin işe yaradığını savunuyor. Can'ın davranışında sırasıyla hangi iki eğilim görülür?",
          "opts": [
            "*Confirmation bias*, sonra *belief perseverance*",
            "*Belief perseverance*, sonra *framing*",
            "*Overconfidence*, sonra *priming*",
            "*Framing*, sonra *confirmation bias*"
          ],
          "a": 0,
          "why": "Yalnız destekleyen kanıtı aramak *confirmation bias*'tır. Dayanak çürütüldükten sonra bile inancı korumak *belief perseverance*'tır."
        },
        {
          "q": "Hangi eşleştirme doğrudur?",
          "opts": [
            "Ruletin üst üste altı kez kırmızı gelmesinden sonra siyaha daha çok para yatırmak → *sunk cost fallacy*",
            "Sevmediği bir kursa, ücretini peşin ödediği için devam etmek → *gambler's fallacy*",
            "\"Yüzde 95 başarı\" yazan reklama \"yüzde 5 başarısızlık\" yazandan çok güvenmek → *priming*",
            "Kötü giden bir projeye \"bu kadar emek verdik\" diye kaynak aktarmaya devam etmek → *sunk cost fallacy*"
          ],
          "a": 3,
          "why": "Geri alınamayacak geçmiş emek yüzünden kötü bir işe devam etmek *sunk cost fallacy*'dir. Rulet örneği *gambler's fallacy*, ödenmiş kurs ücreti *sunk cost*, yüzde 95 ile yüzde 5 farkı ise *framing*'dir."
        },
        {
          "q": "Kamp sırasında konserve açacağı kaybolan bir grup, yanlarındaki kaşığın sapını taşa sürterek konserveyi açmayı uzun süre düşünemiyor. Daha sonra bir öğretmen onlara \"bir kaşıkla yapılabilecek on şey yazın\" diye bir alıştırma yaptırıyor. Gruptaki ilk sorun ve öğretmenin alıştırması sırasıyla nedir?",
          "opts": [
            "*Mental set*; *convergent thinking*",
            "*Functional fixedness*; *divergent thinking*",
            "*Confirmation bias*; *executive functions*",
            "*Functional fixedness*; *convergent thinking*"
          ],
          "a": 1,
          "why": "Kaşığı yalnız yemek yemek için görmek *functional fixedness*'tır. Bir nesnenin birçok farklı kullanımını üretmek *divergent thinking*'dir; tek doğru cevaba daralmak *convergent* olurdu."
        },
        {
          "q": "Bir araştırmacı öğrencilere genel kültür soruları soruyor ve her cevap için ne kadar emin olduklarını yüzde olarak soruyor. Sonuçlar tabloda. Bu veriler en çok hangi kavramı destekler?",
          "opts": [
            "*Overconfidence*",
            "*Gambler's fallacy*",
            "*Framing*",
            "*Functional fixedness*"
          ],
          "a": 0,
          "why": "Ortalama güven (90 + 85 + 95) / 3 = yüzde 90, ortalama doğruluk (60 + 55 + 50) / 3 = yüzde 55. Öğrenciler bildiklerine gerçekte olduğundan 35 puan daha fazla güveniyor: *overconfidence*.",
          "fig": {
            "type": "table",
            "head": [
              "Soru grubu",
              "Ortalama güven",
              "Gerçek doğruluk"
            ],
            "rows": [
              [
                "Tarih",
                "yüzde 90",
                "yüzde 60"
              ],
              [
                "Coğrafya",
                "yüzde 85",
                "yüzde 55"
              ],
              [
                "Bilim",
                "yüzde 95",
                "yüzde 50"
              ]
            ],
            "caption": "Örnek veri"
          }
        }
      ]
    },
    {
      "no": 5,
      "code": "2.3",
      "slug": "py205",
      "title": "Belleğe Giriş",
      "en": "Introduction to Memory",
      "accent": "#B77AD9",
      "defter": "py203",
      "seconds": 253,
      "terms": [
        "Encoding",
        "Storage",
        "Retrieval",
        "Explicit memory",
        "Episodic memory",
        "Semantic memory",
        "Implicit memory",
        "Procedural memory",
        "Prospective memory",
        "Multi-store model",
        "Working memory",
        "Levels of processing"
      ],
      "questions": [
        {
          "q": "Arda dün akşam fizik formülünü defterine baktıktan sonra hiç tekrar etmeden kapattı. Bugün sınavda formülü hatırlayamıyor; arkadaşları ise o konuya hiç dikkat etmediğini söylüyor. Arda'nın sorunu büyük olasılıkla hangi bellek işleminde başladı?",
          "opts": [
            "*Retrieval*",
            "*Encoding*",
            "*Storage*",
            "*Prospective memory*"
          ],
          "a": 1,
          "why": "Arda formüle dikkat etmedi ve üzerinde işlem yapmadı; bilgi baştan belleğe iyi girmedi. Bu bir *encoding* sorunudur. Bilgi hiç girmediyse ne depolanabilir ne de geri getirilebilir."
        },
        {
          "q": "Hangi eşleştirme doğrudur?",
          "opts": [
            "Geçen yılki okul gezisinde otobüste yanında kimin oturduğunu hatırlamak → *semantic memory*",
            "Fotosentezin ışık enerjisini kimyasal enerjiye çevirdiğini bilmek → *episodic memory*",
            "Akşam yemekten önce annesini aramayı hatırlamak → *prospective memory*",
            "Bakmadan klavyede yazı yazmak → *explicit memory*"
          ],
          "a": 2,
          "why": "Gelecekte bir işi yapmayı hatırlamak *prospective memory*'dir. Gezi anısı *episodic*, fotosentez bilgisi *semantic*, bakmadan yazmak ise *implicit* bir *procedural memory* örneğidir."
        },
        {
          "q": "*Multi-store model*'e göre, sınıfta hocanın söylediği ama senin hiç dikkat etmediğin bir cümleye ne olur?",
          "opts": [
            "*Sensory memory*'de kısa süre kalır ve kaybolur",
            "Doğrudan *long-term memory*'ye geçer",
            "*Procedural memory*'ye kaydedilir",
            "*Short-term memory*'de süresiz bekler"
          ],
          "a": 0,
          "why": "Modele göre duyulardan gelen her şey önce *sensory memory*'ye girer. Yalnız dikkat edilen bilgi *short-term memory*'ye geçer; dikkat edilmeyen cümle çok kısa sürede kaybolur."
        },
        {
          "q": "Bir deneyde katılımcılar bir yandan duydukları rakamları akılda tutarken bir yandan da ikinci bir görev yapıyor. İkinci görev bir gruba duyduğu kelimeleri tekrar etmek, öbür gruba ekrandaki şekilleri döndürmek. Rakamları hatırlama en çok hangi grupta bozulur ve neden?",
          "opts": [
            "Şekil grubunda; çünkü *visuospatial sketchpad* rakamları tutar",
            "İki grupta eşit bozulur; çünkü *short-term memory* tek bir depodur",
            "Hiçbir grupta bozulmaz; çünkü *central executive* sınırsızdır",
            "Kelime grubunda; çünkü rakamlar ve kelimeler aynı *phonological loop*'u kullanır"
          ],
          "a": 3,
          "why": "*Working memory model*'e göre duyulan rakamlar ve tekrar edilen kelimeler aynı sözel bileşeni, *phonological loop*'u paylaşır ve çakışır. Şekil döndürmek ayrı bir bileşen olan *visuospatial sketchpad*'i kullandığı için daha az bozar."
        },
        {
          "q": "Bir öğretmen iki sınıfa aynı 30 tarih terimini veriyor. A sınıfı terimleri yüksek sesle 5 kez tekrar ediyor. B sınıfı her terimi kendi hayatından bir olayla ilişkilendiren bir cümle yazıyor. Bir hafta sonra sonuçlar tablodaki gibi. Hangi sonuç en iyi desteklenir?",
          "opts": [
            "Yüksek sesle tekrar, bilgiyi en derin işleme biçimidir",
            "B sınıfı daha zeki olduğu için daha çok hatırlamıştır",
            "Anlama dayalı, kişisel bağlantılı işleme daha kalıcı hatırlamayı sağlar",
            "Terimler *procedural memory*'ye kodlanmıştır"
          ],
          "a": 2,
          "why": "A sınıfı 12/30 = yüzde 40, B sınıfı 21/30 = yüzde 70 hatırladı. Anlamla ve kendi hayatıyla ilişkilendirmek daha derin işlemedir; *levels of processing* bunu öngörür. Ancak sınıflar rastgele atanmadıysa sınıf farkları da etkili olabilir; zekâ yorumu veriden çıkmaz.",
          "fig": {
            "type": "table",
            "head": [
              "Sınıf",
              "Çalışma yöntemi",
              "Bir hafta sonra hatırlanan"
            ],
            "rows": [
              [
                "A",
                "5 kez yüksek sesle tekrar",
                "12 / 30"
              ],
              [
                "B",
                "Kendi hayatıyla ilişkilendiren cümle",
                "21 / 30"
              ]
            ],
            "caption": "Örnek veri"
          }
        }
      ]
    },
    {
      "no": 6,
      "code": "2.4",
      "slug": "py206",
      "title": "Belleğe Kodlama",
      "en": "Encoding Memories",
      "accent": "#E86A92",
      "defter": "py204",
      "seconds": 237,
      "terms": [
        "Automatic processing",
        "Effortful processing",
        "Self-reference effect",
        "Mnemonics",
        "Method of loci",
        "Chunking",
        "Spacing effect",
        "Distributed practice",
        "Massed practice",
        "Serial position effect",
        "Primacy effect",
        "Recency effect"
      ],
      "questions": [
        {
          "q": "Melis hiç çaba göstermeden, okula gelirken bu hafta kaç kez otobüsü kaçırdığını biliyor. Ama İngilizce kelime listesini öğrenmek için her gün oturup çalışması gerekiyor. Bu iki durum sırasıyla neyi gösterir?",
          "opts": [
            "*Effortful processing*; *automatic processing*",
            "*Automatic processing*; *effortful processing*",
            "*Primacy effect*; *recency effect*",
            "*Chunking*; *method of loci*"
          ],
          "a": 1,
          "why": "Sıklık gibi bilgiler çabasız kodlanır: *automatic processing*. Yeni kelimeler ise dikkat ve çaba ister: *effortful processing*."
        },
        {
          "q": "Bir öğrenci tarih sınavı için padişahların sırasını, evinden okula giden yoldaki dükkânlara tek tek \"yerleştirerek\" çalışıyor. Sınavda zihninde o yolu yürüyerek sırayı hatırlıyor. Hangi teknik kullanılmıştır?",
          "opts": [
            "*Method of loci*",
            "*Chunking*",
            "*Massed practice*",
            "*Self-reference effect*"
          ],
          "a": 0,
          "why": "Bilgileri iyi bilinen bir mekânın yerlerine yerleştirip zihinde o mekânda dolaşmak *method of loci*'dir; bir *mnemonic* türüdür."
        },
        {
          "q": "Bir deneyde katılımcılara 9 harflik bir dizi gösteriliyor: T R T T H Y A S M. Bir grup harfleri tek tek, öteki grup \"TRT · THY · ASM\" biçiminde tanıdık kısaltmalar olarak görüyor. İkinci grubun harfleri daha iyi hatırlaması en iyi neyle açıklanır?",
          "opts": [
            "*Recency effect*",
            "*Automatic processing*",
            "*Chunking*",
            "*Method of loci*"
          ],
          "a": 2,
          "why": "Dokuz ayrı harf, anlamlı üç birime dönüştü; akılda tutulacak öğe sayısı 9'dan 3'e indi. Bu *chunking*'dir."
        },
        {
          "q": "Bir öğretmen iki sınıfa aynı konuyu aynı toplam sürede çalıştırıyor. Sonuçlar tabloda. Hangi yorum en iyi desteklenir?",
          "opts": [
            "Yığarak çalışmak hem kısa hem uzun vadede daha iyidir",
            "İki yöntem arasında hiçbir fark yoktur",
            "Aralıklı çalışma yalnız ertesi günkü testi iyileştirmiştir",
            "Aralıklı çalışma uzun vadede bilgiyi çok daha iyi korur"
          ],
          "a": 3,
          "why": "Ertesi gün sonuçlar neredeyse aynı (78 ve 76). Bir ay sonra yığarak çalışan sınıf 41'e, aralıklı çalışan sınıf 68'e iniyor; fark 27 puan. Bu, *distributed practice*'in üstünlüğünü, yani *spacing effect*'i destekler.",
          "fig": {
            "type": "table",
            "head": [
              "Sınıf",
              "Çalışma biçimi",
              "Ertesi gün",
              "Bir ay sonra"
            ],
            "rows": [
              [
                "A",
                "Tek akşamda 4 saat",
                "78",
                "41"
              ],
              [
                "B",
                "4 gün, günde 1 saat",
                "76",
                "68"
              ]
            ],
            "caption": "Ortalama puan, 100 üzerinden · örnek veri"
          }
        },
        {
          "q": "Toplantıda arkadaşın 12 kişilik bir isim listesini çok hızlı okuyor, hemen ardından da hatırlayabildiklerini yazmanı istiyor. Liste o kadar hızlı okunuyor ki isimleri kafanda tekrar edemiyorsun. Hangi sonuç en olasıdır?",
          "opts": [
            "Primacy etkisi güçlenir, recency etkisi kaybolur",
            "Listenin ortasındaki isimler en iyi hatırlanır",
            "Recency etkisi korunur, primacy etkisi zayıflar",
            "Hiçbir isim hatırlanmaz"
          ],
          "a": 2,
          "why": "*Primacy effect* baştaki öğeleri tekrar etmeye bağlıdır; tekrar fırsatı olmayınca zayıflar. Hemen ardından yazıldığı için son isimler hâlâ kısa süreli bellektedir; *recency effect* korunur."
        }
      ]
    },
    {
      "no": 7,
      "code": "2.5",
      "slug": "py207",
      "title": "Bellekte Depolama",
      "en": "Storing Memories",
      "accent": "#5BC0EB",
      "defter": "py205",
      "seconds": 247,
      "terms": [
        "Sensory memory",
        "Iconic memory",
        "Echoic memory",
        "Short-term memory",
        "Maintenance rehearsal",
        "Elaborative rehearsal",
        "Long-term potentiation",
        "HSAM",
        "Anterograde amnesia",
        "Retrograde amnesia",
        "Alzheimer's disease",
        "Infantile amnesia"
      ],
      "questions": [
        {
          "q": "Bir deneyde ekranda üç satır harf, toplam 12 harf, yalnız 0,05 saniye gösteriliyor. Ekran kararır kararmaz bir ses hangi satırın söyleneceğini belirtiyor; katılımcılar hangi satır istenirse istensin dört harfin çoğunu söyleyebiliyor. Ses bir saniye geciktirilince başarı çok düşüyor. Bu bulgular en çok neyi destekler?",
          "opts": [
            "*Iconic memory* bütün görüntüyü çok kısa süre tutar",
            "*Short-term memory*'nin kapasitesi sınırsızdır",
            "*Echoic memory* görsel bilgiyi tutar",
            "Harfler doğrudan *long-term memory*'ye kodlanır"
          ],
          "a": 0,
          "why": "Hangi satır istenirse istensin söylenebiliyorsa, o an üç satırın tamamı bellekte demektir. Bir saniye sonra iz kaybolur. Çok kısa süren, geniş kapasiteli görsel kayıt *iconic memory*'dir."
        },
        {
          "q": "Doruk yeni tanıştığı birinin adını unutmamak için içinden \"Ilgın, Ilgın, Ilgın\" diye tekrar ediyor. Ardından adı, en sevdiği ağaç türü olan ılgınla ilişkilendiriyor. Bu iki strateji sırasıyla nedir?",
          "opts": [
            "*Elaborative rehearsal*; *maintenance rehearsal*",
            "*Iconic memory*; *echoic memory*",
            "*Maintenance rehearsal*; *elaborative rehearsal*",
            "*Retrograde amnesia*; *long-term potentiation*"
          ],
          "a": 2,
          "why": "Yalnızca tekrar etmek bilgiyi kısa süreli bellekte canlı tutar: *maintenance rehearsal*. Bilgiyi anlamlı bir bağlantıyla işlemek ise *elaborative rehearsal*'dır ve uzun süreli belleğe taşır."
        },
        {
          "q": "Bir laboratuvar çalışmasında iki nöron arasındaki bağlantı kısa aralıklarla defalarca uyarılıyor. Haftalar sonra aynı zayıf uyaran, alıcı nöronda öncekinden çok daha güçlü bir tepki yaratıyor. Bu, belleğin hangi biyolojik temeline örnektir?",
          "opts": [
            "*Infantile amnesia*",
            "*Long-term potentiation*",
            "*Maintenance rehearsal*",
            "*Echoic memory*"
          ],
          "a": 1,
          "why": "Tekrarlanan uyarımla sinapsın kalıcı olarak güçlenmesi *long-term potentiation*'dır. Öğrenme ve uzun süreli belleğin hücresel temeli kabul edilir."
        },
        {
          "q": "Bir futbolcu kafa travması geçiriyor. Hastanede, maçtan önceki iki günü hiç hatırlamadığını ama yeni tanıştığı hemşirenin adını ertesi gün rahatça söyleyebildiğini fark ediyorlar. Bu tablo en iyi hangisiyle açıklanır?",
          "opts": [
            "*Anterograde amnesia*",
            "*Infantile amnesia*",
            "*Alzheimer's disease*",
            "*Retrograde amnesia*"
          ],
          "a": 3,
          "why": "Kaybolan anılar hasardan öncesine ait; yeni anı oluşturma ise sağlam. Bu *retrograde amnesia*'dır. Yeni anı oluşturamasaydı *anterograde* olurdu."
        },
        {
          "q": "Bir nöroloğun notlarında 75 yaşındaki bir hastanın son iki yılda giderek artan biçimde az önce yapılan konuşmaları unuttuğu, son aylarda torunlarının adlarını karıştırmaya ve yemek yaparken adımları şaşırmaya başladığı yazıyor. Hangi açıklama en uygundur?",
          "opts": [
            "Ani bir kaza sonrası *retrograde amnesia*",
            "Yalnız *iconic memory*'yi etkileyen bir bozukluk",
            "İlerleyici bir hastalık olan *Alzheimer's disease*",
            "*Infantile amnesia*'nın yetişkinlikte ortaya çıkması"
          ],
          "a": 2,
          "why": "Yavaş ve giderek artan, önce yeni bilgileri sonra eski anıları ve becerileri etkileyen kayıp *Alzheimer's disease*'in tipik seyridir. Ani bir hasar ya da bebeklik dönemiyle ilgili değildir."
        }
      ]
    },
    {
      "no": 8,
      "code": "2.6",
      "slug": "py208",
      "title": "Bellekten Geri Getirme",
      "en": "Retrieving Memories",
      "accent": "#9BC53D",
      "defter": "py206",
      "seconds": 256,
      "terms": [
        "Recall",
        "Recognition",
        "Relearning",
        "Retrieval cues",
        "Context-dependent memory",
        "State-dependent memory",
        "Mood-congruent memory",
        "Testing effect",
        "Metacognition",
        "Reconsolidation"
      ],
      "questions": [
        {
          "q": "Bir öğretmen 20 biyoloji terimini öğreten bir dersten sonra öğrencilerini iki biçimde test ediyor. Sonuçlar tabloda. Bu farkın en iyi açıklaması hangisidir?",
          "opts": [
            "*Recognition*'da seçenekler ipucu işlevi görür, bu yüzden *recall*'dan kolaydır",
            "*Recall* testleri bilgiyi uzun süreli bellekten silmiştir",
            "Öğrenciler *recognition* testinde *mood-congruent memory* kullanmıştır",
            "Terimler yalnızca *sensory memory*'de depolanmıştır"
          ],
          "a": 0,
          "why": "Boşluk doldurmada 20 terimin 7'si (yüzde 35), çoktan seçmelide 16'sı (yüzde 80) doğru. Çoktan seçmelide doğru cevap gözünün önünde ve bir *retrieval cue* gibi çalışır; *recognition* bu yüzden *recall*'dan kolaydır.",
          "fig": {
            "type": "table",
            "head": [
              "Test türü",
              "Doğru sayısı (20 üzerinden)"
            ],
            "rows": [
              [
                "Boşluk doldurma",
                "7"
              ],
              [
                "Çoktan seçmeli",
                "16"
              ]
            ],
            "caption": "Aynı öğrenciler, aynı terimler · örnek veri"
          }
        },
        {
          "q": "Yüzme takımı kaptanı Ege, antrenörün havuz kenarında anlattığı yeni taktikleri soyunma odasında hatırlayamıyor; havuza geri dönünce hepsi aklına geliyor. Bu durum en iyi neyle açıklanır?",
          "opts": [
            "*State-dependent memory*",
            "*Context-dependent memory*",
            "*Relearning*",
            "*Metacognition*"
          ],
          "a": 1,
          "why": "Bilgiyi kodladığı ortama dönünce ortamın kendisi bir *retrieval cue* oluyor. Bu *context-dependent memory*'dir. Bedensel durum değişmediği için *state-dependent* değildir."
        },
        {
          "q": "Hangi eşleştirme doğrudur?",
          "opts": [
            "Moralsizken aklına hep başarısız olduğun sınavların gelmesi → *state-dependent memory*",
            "Sınıfta öğrendiğini sınıfta daha iyi hatırlamak → *mood-congruent memory*",
            "Grip ilacı etkisindeyken öğrendiğini yine ilaç etkisindeyken daha iyi hatırlamak → *state-dependent memory*",
            "Unuttuğun bir şarkıyı ikinci kez daha çabuk öğrenmek → *recognition*"
          ],
          "a": 2,
          "why": "Öğrenme ve hatırlama sırasındaki bedensel durumun aynı olması *state-dependent memory*'dir. Moralsizken kötü anıları hatırlamak *mood-congruent*, sınıf örneği *context-dependent*, şarkıyı daha çabuk öğrenmek *relearning*'dir."
        },
        {
          "q": "Selin sınavdan önce notlarını dört kez okuyor ve her şeyin çok tanıdık geldiğini, konuya hâkim olduğunu düşünüyor. Sınavda açık uçlu soruların çoğunu cevaplayamıyor. Selin'in hatasını en iyi açıklayan ve ona önerilecek strateji hangisidir?",
          "opts": [
            "*Context-dependent memory* hatası; sınavdan önce odasını değiştirmeli",
            "*Mood-congruent memory* hatası; çalışırken daha mutlu olmalı",
            "*Recognition* hatası; notlarını beş kez okumalı",
            "Zayıf *metacognition*; kendini test ederek çalışmalı"
          ],
          "a": 3,
          "why": "Tanıdık gelmeyi bilmek sandı; kendi bilgisini yanlış değerlendirdi, bu zayıf *metacognition*'dır. Kendini test etmek hem gerçekte ne bildiğini gösterir hem de *testing effect* sayesinde bilgiyi daha kalıcı yapar."
        },
        {
          "q": "Bir psikolog katılımcılara 15 kelimelik bir liste okuyor ve hemen ardından hatırlayabildikleri kelimeleri istedikleri sırayla yazmalarını istiyor. Kelimelerin listedeki sırasına göre hatırlanma oranı grafiğe döküldüğünde en olası şekil hangisidir?",
          "opts": [
            "Baştan sona düz bir çizgi",
            "Başta ve sonda yüksek, ortada düşük bir U biçimi",
            "Başta düşük, sona doğru sürekli düşen bir çizgi",
            "Ortada yüksek, uçlarda düşük ters bir U biçimi"
          ],
          "a": 1,
          "why": "*Serial position effect*: baştaki kelimeler tekrar edildiği için uzun süreli belleğe geçer (*primacy*), sondakiler hâlâ kısa süreli bellektedir (*recency*). Hemen hatırlamada iki uç da yüksek, orta düşük kalır."
        }
      ]
    }
  ],
  "final": []
};
