/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/py2N/questions.json) */
window.KIT = {
  "store": "psych-u2:v1:",
  "course": "AP Psychology",
  "unitLabel": "Unit 2 — Cognition",
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
    }
  ],
  "final": []
};
