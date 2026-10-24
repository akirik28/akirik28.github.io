/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/py1N/questions.json) */
window.KIT = {
  "store": "psych-u1:v1:",
  "course": "AP Psychology",
  "unitLabel": "Unit 1 — Biological Bases of Behavior",
  "denemeler": {
    "url": "deneme/",
    "count": 5
  },
  "episodes": [
    {
      "no": 1,
      "code": "1.1",
      "slug": "py101",
      "title": "Kalıtım ve Çevrenin Etkileşimi",
      "en": "Interaction of Heredity and Environment",
      "accent": "#7C95FF",
      "defter": "py101",
      "seconds": 252,
      "terms": [
        "Nature versus nurture",
        "Genes",
        "Twin studies",
        "Identical twins",
        "Fraternal twins",
        "Adoption studies",
        "Family studies",
        "Heritability",
        "Evolutionary psychology",
        "Natural selection",
        "Epigenetics"
      ],
      "questions": [
        {
          "q": "Tablo, bir müzikal yetenek testinde farklı kardeş çiftlerinin puanları arasındaki korelasyonları gösteriyor (örnek veri). Hangi sonuç bu verilerle en iyi desteklenir?",
          "opts": [
            "Müzikal yetenekteki farklılıklar yalnızca evdeki müzik ortamından kaynaklanır",
            "Çift yumurta ikizleri, tek yumurta ikizlerinden daha çok gen paylaşır",
            "Genetik farklar müzikal yetenekteki farklılıklara önemli katkı yapar",
            "Evlat edinilen kardeşler arasındaki benzerlik genlerden gelir"
          ],
          "a": 2,
          "why": "Ayrı büyütülen tek yumurta ikizleri bile 0,70 ile çok benziyor; aynı evi paylaşan ama gen paylaşmayan evlat edinilmiş kardeşlerde korelasyon yalnızca 0,10. Benzerlik gen paylaşımıyla artıyor, ev paylaşımıyla pek artmıyor. Bu, genlerin katkısını gösterir ama 'tamamen genetik' demek değildir.",
          "fig": {
            "type": "table",
            "head": [
              "Çift türü",
              "Ortak gen",
              "Korelasyon (r)"
            ],
            "rows": [
              [
                "Tek yumurta, aynı evde",
                "≈ %100",
                "0,75"
              ],
              [
                "Tek yumurta, ayrı evlerde",
                "≈ %100",
                "0,70"
              ],
              [
                "Çift yumurta, aynı evde",
                "≈ %50",
                "0,40"
              ],
              [
                "Evlat edinilmiş kardeşler, aynı evde",
                "≈ %0",
                "0,10"
              ]
            ],
            "caption": "Müzikal yetenek testi · örnek veri"
          }
        },
        {
          "q": "Bir ülkede yetişkin boyunun *heritability* tahmini 0,8 bulunuyor. Hangi yorum doğrudur?",
          "opts": [
            "Bu ülkedeki insanların boy farklılıklarının büyük kısmı genetik farklarla ilişkilidir",
            "Her yetişkinin boyunun yüzde 80'i genlerinden, yüzde 20'si beslenmeden gelir",
            "Beslenme koşulları değişse bile bu oran hiçbir toplumda değişmez",
            "Bu ülkede çevrenin boy üzerinde hiçbir etkisi yoktur"
          ],
          "a": 0,
          "why": "*Heritability* bir gruptaki farklılıkların ne kadarının genetik farklarla açıklandığını gösterir; tek bir bireyin özelliğini yüzdelere bölmez. Ayrıca çevre koşulları değişirse, örneğin beslenme eşitsizliği artarsa, tahmin de değişir."
        },
        {
          "q": "Pek çok farklı kültürde bebekler acı ve ekşi tatları yüzlerini buruşturarak reddederken tatlı tadı kabul ediyor. Hangi bakış açısı bunu en iyi açıklar?",
          "opts": [
            "Bebekler bu tercihi anne babalarını izleyerek öğrenir",
            "Bu tepki *epigenetics* yoluyla her nesilde yeniden ortaya çıkar",
            "Bu tercih yalnızca bebeğin yaşadığı ülkenin mutfağına bağlıdır",
            "*Natural selection*, zehirli olabilecek tatlardan kaçınan ve enerji veren tadı seven ataları kayırmıştır"
          ],
          "a": 3,
          "why": "Kültürden bağımsız ve çok erken görülen bir eğilim, *evolutionary psychology*'nin alanıdır: acı tat çoğu zaman zehir, tatlı tat enerji demektir; bu eğilimi taşıyanlar hayatta kalıp daha çok çocuk bırakmıştır. Öğrenme ve mutfak açıklamaları kültürler arası benzerliği açıklayamaz."
        },
        {
          "q": "Bir *adoption study*'de evlat edinilen gençlerin dini pratikleri ve siyasi görüşleri, biyolojik ailelerinden çok evlat edinen ailelerine benziyor. Araştırmacılar hangi sonuca varmalıdır?",
          "opts": [
            "Bu özellikler tamamen genetik olarak belirlenir",
            "Aile ortamı bu özellikler üzerinde güçlü bir etkiye sahiptir",
            "Biyolojik aileler bu gençlere hiçbir gen aktarmamıştır",
            "Bu sonuç, tek yumurta ikizlerinin genlerinin farklı olduğunu kanıtlar"
          ],
          "a": 1,
          "why": "Evlat edinme düzeninde gen biyolojik aileden, ev ortamı evlat edinen aileden gelir. Gençler evlat edinen aileye benziyorsa çevre, yani *nurture* ağır basıyor demektir. Bu, genlerin hiçbir özellikte rolü olmadığı anlamına gelmez."
        },
        {
          "q": "Tek yumurta ikizlerinden biri yıllarca yoğun stres altında çalışıp sigara içiyor, diğeri içmiyor. 50 yaşında yapılan testte DNA dizileri aynı çıkıyor ama bazı genlerin etkin olup olmadığı farklı bulunuyor. Bu bulgu en iyi hangi kavramla açıklanır?",
          "opts": [
            "*Epigenetics*",
            "*Natural selection*",
            "*Heritability*",
            "*Fraternal twins*"
          ],
          "a": 0,
          "why": "DNA dizisi değişmeden, çevrenin (stres, sigara) hangi genlerin açık ya da kapalı olduğunu değiştirmesi *epigenetics*'tir. *Natural selection* nesiller boyunca işler; *heritability* bir grup istatistiğidir; bu ikizler zaten tek yumurta ikizidir."
        }
      ]
    },
    {
      "no": 2,
      "code": "1.2",
      "slug": "py102",
      "title": "Sinir Sistemine Genel Bakış",
      "en": "Overview of the Nervous System",
      "accent": "#3FB5A0",
      "defter": "py102",
      "seconds": 241,
      "terms": [
        "Central nervous system (CNS)",
        "Peripheral nervous system (PNS)",
        "Somatic nervous system",
        "Autonomic nervous system",
        "Sympathetic nervous system",
        "Parasympathetic nervous system",
        "Fight or flight",
        "Sensory (afferent) neurons",
        "Motor (efferent) neurons",
        "Interneurons",
        "Reflex arc"
      ],
      "questions": [
        {
          "q": "Can penaltı atışından hemen önce top başında duruyor: kalbi hızlanmış, ağzı kurumuş, göz bebekleri büyümüş. Bu belirtileri en iyi hangisi açıklar?",
          "opts": [
            "*Parasympathetic nervous system*'in etkinleşmesi",
            "*Somatic nervous system*'in iskelet kaslarını gevşetmesi",
            "*Sympathetic nervous system*'in etkinleşmesi",
            "Omurilikte bir *reflex arc* oluşması"
          ],
          "a": 2,
          "why": "Hızlı kalp, ağız kuruluğu (sindirimin yavaşlaması) ve büyüyen göz bebekleri *fight or flight* tepkisidir; bunu *autonomic* sistemin *sympathetic* kolu yürütür. *Parasympathetic* bunların tersini yapar; refleks yayı ise tek bir uyarana verilen hızlı kas tepkisidir."
        },
        {
          "q": "Tablodaki eşleştirmelerden hangisi doğrudur?",
          "opts": [
            "1",
            "2",
            "3",
            "4"
          ],
          "a": 1,
          "why": "Klavyede yazmak istemli iskelet kası hareketidir: *somatic*. 1'de mide sindirimi otomatiktir (*autonomic*), 3'te alarm sonrası sakinleşme *parasympathetic*'tir, 4'te bilgiyi deriden merkeze taşıyan nöron *afferent*, yani duyu nöronudur.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Durum",
              "Eşleştirilen bölüm / nöron"
            ],
            "rows": [
              [
                "1",
                "Öğle yemeğinden sonra midenin yemeği sindirmesi",
                "Somatic nervous system"
              ],
              [
                "2",
                "Arkadaşına klavyeyle mesaj yazmak",
                "Somatic nervous system"
              ],
              [
                "3",
                "Deprem tatbikatı bitince kalbin yavaşlaması",
                "Sympathetic nervous system"
              ],
              [
                "4",
                "Ayağına batan dikenin bilgisini omuriliğe taşıyan nöron",
                "Efferent (motor) neuron"
              ]
            ],
            "caption": "Hangi satır doğru eşleştirilmiş?"
          }
        },
        {
          "q": "Bir kaza sonucu omuriliği boyun hizasında tamamen hasar gören bir hasta, bacağına dokunulduğunu hissedemiyor. Bunun en olası nedeni hangisidir?",
          "opts": [
            "Bacaktan gelen duyusal sinyaller beyne ulaşamıyor",
            "*Parasympathetic* sistem bacaktaki duyuları kapatmıştır",
            "Bacaktaki motor nöronlar sinyali beyne taşıyamıyor",
            "*Autonomic nervous system* artık kalbi yönetemiyor"
          ],
          "a": 0,
          "why": "Dokunma bilgisi duyu nöronlarıyla (*afferent*) omuriliğe, oradan yukarı beyne çıkar. Omurilik boyun hizasında kesilirse aşağıdan gelen sinyal beyne ulaşamaz; beyin dokunuşu algılayamaz. Motor nöronlar emri merkezden dışarı taşır, duyuyu değil."
        },
        {
          "q": "Araştırmacılar, gönüllülerden zor bir matematik testini 5 dakikada bitirmelerini istiyor ve test sırasında kalp hızlarını ölçüyor. Test sonunda gönüllüler 10 dakika sakin müzik dinliyor ve kalp hızları yeniden ölçülüyor. Dinlenme sırasındaki değişimi en iyi hangisi açıklar?",
          "opts": [
            "*Somatic* sistemin kalbi istemli olarak yavaşlatması",
            "*Sympathetic* etkinliğin artmaya devam etmesi",
            "Omurilikteki ara nöronların kalbi durdurması",
            "*Parasympathetic* etkinliğin artarak kalbi yavaşlatması"
          ],
          "a": 3,
          "why": "Stresli testte *sympathetic* kol kalbi hızlandırır; dinlenmede *parasympathetic* kol baskın gelir ve kalp hızı düşer. Kalp istemli kontrol edilmez, bu yüzden *somatic* sistem açıklama olamaz."
        },
        {
          "q": "Mert yanlışlıkla bir raptiyeye basıyor ve ne olduğunu fark etmeden ayağını çekiyor. Bu olaydaki sinyal sırası hangisidir?",
          "opts": [
            "Motor nöron → beyin → duyu nöronu",
            "Duyu nöronu → omurilikteki ara nöron → motor nöron",
            "Ara nöron → duyu nöronu → beyin",
            "Beyin → motor nöron → duyu nöronu"
          ],
          "a": 1,
          "why": "Refleks yayında bilgi duyu nöronuyla omuriliğe gelir, ara nöron onu doğrudan motor nörona aktarır ve kas kasılır. Beyin bilgiyi sonradan alır; bu yüzden Mert acıyı ayağını çektikten sonra fark eder."
        }
      ]
    },
    {
      "no": 3,
      "code": "1.3-1",
      "slug": "py103",
      "title": "Nöron ve Sinirsel İletim",
      "en": "The Neuron and Neural Firing",
      "accent": "#FF8A65",
      "defter": "py103",
      "defterBaslik": "Nöron ve Sinirsel İletim",
      "seconds": 253,
      "terms": [
        "Neuron",
        "Dendrites",
        "Cell body",
        "Axon",
        "Myelin sheath",
        "Terminal buttons",
        "Glial cells",
        "Resting potential",
        "Threshold",
        "Action potential",
        "All-or-none",
        "Refractory period",
        "Synapse",
        "Reuptake"
      ],
      "questions": [
        {
          "q": "Bir nöronun dendritlerine aynı anda 6 *excitatory* ve 4 *inhibitory* mesaj geliyor. Tabloya göre, her mesajın etkisi yaklaşık olarak gösterildiği gibiyse nöron ateşlenir mi? (Dinlenme −70 mV, eşik −55 mV.)",
          "opts": [
            "Hayır; potansiyel −62 mV olur ve eşiğin altında kalır",
            "Evet; potansiyel −50 mV olur ve eşik aşılır",
            "Evet; çünkü *excitatory* mesaj sayısı daha fazladır",
            "Hayır; çünkü *inhibitory* mesaj geldiğinde nöron hiçbir zaman ateşlenmez"
          ],
          "a": 0,
          "why": "Toplam etki: 6 × (+3) + 4 × (−2,5) = 18 − 10 = +8 mV. −70 + 8 = −62 mV; bu, −55'lik eşiğin altında. Ateşlemeyi mesaj sayısı değil, toplamın eşiği geçip geçmediği belirler.",
          "fig": {
            "type": "table",
            "head": [
              "Mesaj türü",
              "Sayı",
              "Her birinin etkisi"
            ],
            "rows": [
              [
                "Excitatory",
                "6",
                "+3 mV"
              ],
              [
                "Inhibitory",
                "4",
                "−2,5 mV"
              ]
            ],
            "caption": "Dinlenme potansiyeli −70 mV · eşik −55 mV (örnek değerler)"
          }
        },
        {
          "q": "Bir hastada görme bulanıklığı, kollarda uyuşma ve kas güçsüzlüğü giderek artıyor. Testler, aksonları saran yalıtım katmanının birçok yerde hasar gördüğünü gösteriyor. Bu hastanın sinir sinyalleri için en olası sonuç hangisidir?",
          "opts": [
            "Sinyaller daha hızlı iletilir",
            "Sinyaller yavaşlar ya da kesintiye uğrar",
            "Nöronlar *all-or-none* yerine yarım güçle ateşlenir",
            "Sinapsta *reuptake* tamamen durur"
          ],
          "a": 1,
          "why": "Hasar gören yalıtım *myelin sheath*'tir; bu tablo *multiple sclerosis*'e uyar. Miyelin sinyalin sıçrayarak hızlı gitmesini sağlar; yıprandığında iletim yavaşlar ya da kesilir. *All-or-none* kuralı değişmez."
        },
        {
          "q": "Bir nöron ateşlendikten hemen sonra, çok güçlü bir uyaran gelse bile kısa bir süre yeniden ateşlenemiyor. Bu dönemin adı nedir?",
          "opts": [
            "*Resting potential*",
            "*Threshold*",
            "*Depolarization*",
            "*Refractory period*"
          ],
          "a": 3,
          "why": "Ateşlemeden sonra nöronun kendini toparladığı ve yeniden ateşlenemediği kısa süre *refractory period*'dur. *Depolarization* ateşlemenin kendisi, *resting potential* dinlenme yükü, *threshold* ise ateşleme için gereken sınırdır."
        },
        {
          "q": "Bir sinapsta gönderen nöronun habercileri geri alma mekanizması engelleniyor. Bu durumda en olası sonuç hangisidir?",
          "opts": [
            "Haberci sinapsta daha uzun kalır ve alıcı nöronu daha uzun etkiler",
            "Gönderen nöron artık aksiyon potansiyeli üretemez",
            "Alıcı nöronun dendritleri yok olur",
            "Akson üzerindeki miyelin kalınlaşır"
          ],
          "a": 0,
          "why": "*Reuptake* engellenirse haberci boşlukta birikir ve reseptörlere tekrar tekrar bağlanabilir; etkisi uzar. Bu, birçok antidepresanın çalışma mantığıdır (bir sonraki bölümler). Aksiyon potansiyeli üretimi ya da miyelin bundan doğrudan etkilenmez."
        },
        {
          "q": "Sinyalin bir nöron içinde ve iki nöron arasında taşınmasıyla ilgili hangi ifade doğrudur?",
          "opts": [
            "Nöron içinde de nöronlar arasında da sinyal kimyasaldır",
            "Nöron içinde sinyal kimyasal, nöronlar arasında elektriktir",
            "Nöron içinde sinyal elektrik, nöronlar arasında kimyasaldır",
            "Nöronlar birbirine dokunduğu için arada sinyal taşımaya gerek yoktur"
          ],
          "a": 2,
          "why": "Aksiyon potansiyeli akson boyunca ilerleyen elektriksel bir değişimdir; sinaps boşluğunu ise *neurotransmitters* adlı kimyasal haberciler geçer. Nöronlar birbirine dokunmaz; aralarında sinaps boşluğu vardır."
        }
      ]
    },
    {
      "no": 4,
      "code": "1.3-2",
      "slug": "py104",
      "title": "Nörotransmitterler ve Hormonlar",
      "en": "Neurotransmitters and Hormones",
      "accent": "#FF8A65",
      "defter": "py103",
      "defterBaslik": "Nöron ve Sinirsel İletim",
      "seconds": 238,
      "terms": [
        "Neurotransmitters",
        "Acetylcholine",
        "Dopamine",
        "Serotonin",
        "Norepinephrine",
        "Glutamate",
        "GABA",
        "Endorphins",
        "Substance P",
        "Endocrine system",
        "Pituitary gland",
        "Adrenaline",
        "Ghrelin",
        "Leptin",
        "Melatonin",
        "Oxytocin"
      ],
      "questions": [
        {
          "q": "Tablodaki eşleştirmelerden hangisi YANLIŞTIR?",
          "opts": [
            "1",
            "2",
            "3",
            "4"
          ],
          "a": 2,
          "why": "Ana *inhibitory* haberci *GABA*'dır, *glutamate* değil; *glutamate* ana *excitatory* habercidir. Kaygı ve nöbetlerle ilişkilendirilen düşük düzey de *GABA* içindir. Öteki üç eşleştirme doğrudur.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Haberci",
              "Eşleştirilen işlev"
            ],
            "rows": [
              [
                "1",
                "Acetylcholine",
                "Kas hareketi; öğrenme ve bellek"
              ],
              [
                "2",
                "Endorphins",
                "Doğal ağrı kesici etki"
              ],
              [
                "3",
                "Glutamate",
                "Beynin ana inhibitory (sakinleştirici) habercisi"
              ],
              [
                "4",
                "Melatonin",
                "Karanlıkta artar, uykuyu getirir"
              ]
            ],
            "caption": "Hangi satır yanlış eşleştirilmiş?"
          }
        },
        {
          "q": "Araştırmacılar bir grup gönüllünün öğle yemeğinden önce ve hemen sonra kanındaki iki hormonu ölçüyor. Yemekten önce biri yüksek, yemekten sonra öteki yükselmeye başlıyor. Bu iki hormon büyük olasılıkla hangileridir?",
          "opts": [
            "Önce *melatonin*, sonra *oxytocin*",
            "Önce *ghrelin*, sonra *leptin*",
            "Önce *leptin*, sonra *ghrelin*",
            "Önce *adrenaline*, sonra *melatonin*"
          ],
          "a": 1,
          "why": "Açken mideden salınan *ghrelin* yüksektir ve açlık hissi verir; yemekten sonra yağ hücrelerinden gelen *leptin*'in etkisi doygunluk sinyali verir. *Leptin* önce, *ghrelin* sonra olsaydı sıra tersine dönerdi."
        },
        {
          "q": "Bir koşucu maratonun son kilometrelerinde ayağındaki su toplamasını neredeyse hiç hissetmediğini, yarış bitince ise acının arttığını söylüyor. Bu durumu en iyi hangisi açıklar?",
          "opts": [
            "Yarış sırasında *endorphins* salınması acıyı bastırmış, yarış bitince etkisi azalmıştır",
            "Yarış sırasında *substance P* artmış ve acıyı azaltmıştır",
            "*Melatonin* koşu sırasında acı sinyallerini taşımıştır",
            "*Acetylcholine* eksikliği yarıştan sonra acıyı başlatmıştır"
          ],
          "a": 0,
          "why": "*Endorphins* vücudun doğal ağrı kesicisidir ve yoğun egzersizde artar. *Substance P* ise acı sinyalini taşır; arttığında acı azalmaz, artar. Yarış bitince *endorphins* azalır ve acı fark edilir."
        },
        {
          "q": "Bir hastanın kasları gün içinde giderek zayıflıyor; göz kapakları düşüyor. Testler, bağışıklık sisteminin kaslardaki bir habercinin reseptörlerine saldırdığını gösteriyor. Hangi haberci ve hastalık söz konusudur?",
          "opts": [
            "*Dopamine* · *Parkinson's disease*",
            "*Serotonin* · *depression*",
            "*Acetylcholine* · *myasthenia gravis*",
            "*GABA* · nöbet"
          ],
          "a": 2,
          "why": "Kas hareketini başlatan haberci *acetylcholine*'dir. Bağışıklık sistemi kas üzerindeki *acetylcholine* reseptörlerini hedeflediğinde *myasthenia gravis* görülür ve kaslar çabuk yorulur. *Parkinson's* ise beyindeki *dopamine* kaybıyla ilgilidir."
        },
        {
          "q": "Sinir sistemi ile *endocrine system*'i karşılaştıran hangi ifade doğrudur?",
          "opts": [
            "*Endocrine system* daha hızlıdır, çünkü hormonlar nöronlar boyunca taşınır",
            "İki sistem de habercilerini yalnızca sinaps boşluğuna bırakır",
            "*Pituitary gland* sinir sisteminin bir parçasıdır ve hormon salmaz",
            "Hormonlar kanla taşındığı için daha yavaş yayılır ama etkileri daha uzun sürebilir"
          ],
          "a": 3,
          "why": "Hormonlar bezlerden kana salınır, bütün vücuda yavaşça yayılır ve etkileri uzun sürebilir; nöronlar ise sinapsta hızlı ve hedefli çalışır. *Pituitary gland* endokrin sistemin \"usta bezi\"dir ve hormon salar."
        }
      ]
    },
    {
      "no": 5,
      "code": "1.3-3",
      "slug": "py105",
      "title": "İlaçlar ve Sinirsel İletim",
      "en": "Drugs and Neural Firing",
      "accent": "#FF8A65",
      "defter": "py103",
      "defterBaslik": "Nöron ve Sinirsel İletim",
      "seconds": 260,
      "terms": [
        "Psychoactive drugs",
        "Agonist",
        "Antagonist",
        "Reuptake inhibitor",
        "SSRI",
        "Stimulants",
        "Depressants",
        "Opioids",
        "Hallucinogens",
        "Tolerance",
        "Withdrawal",
        "Addiction"
      ],
      "questions": [
        {
          "q": "Tablo, dört maddenin sinapstaki etkisini özetliyor. Hangi madde bir *antagonist* gibi çalışır?",
          "opts": [
            "W",
            "X",
            "Y",
            "Z"
          ],
          "a": 2,
          "why": "*Antagonist* reseptöre bağlanır ama onu etkinleştirmez; doğal habercinin etkisini engeller. Y tam olarak bunu yapıyor. W ve Z haberciyi taklit eden ya da etkisini artıran *agonist* örnekleri, X ise geri alımı yavaşlatan bir *reuptake inhibitor*.",
          "fig": {
            "type": "table",
            "head": [
              "Madde",
              "Sinapstaki etkisi"
            ],
            "rows": [
              [
                "W",
                "Endorfin reseptörlerine bağlanıp onları etkinleştirir"
              ],
              [
                "X",
                "Serotoninin gönderen nörona geri alınmasını yavaşlatır"
              ],
              [
                "Y",
                "Asetilkolin reseptörlerine bağlanır ama etkinleştirmez; asetilkolinin bağlanmasını engeller"
              ],
              [
                "Z",
                "Doğal habercinin salınımını artırır"
              ]
            ],
            "caption": "Dört madde · örnek tablo"
          }
        },
        {
          "q": "Bir partide birkaç kadeh alkol alan Kerem her zamankinden çok konuşuyor ve dans ediyor. Bir arkadaşı \"alkol onu canlandırdı, demek ki uyarıcı\" diyor. Bu yoruma en iyi yanıt hangisidir?",
          "opts": [
            "Doğru; alkol *dopamine* salınımını artırdığı için bir *stimulant*'tır",
            "Doğru; alkol kalp hızını artıran bir *hallucinogen*'dir",
            "Yanlış; alkol bir *opioid*'dir ve *endorphins*'i taklit eder",
            "Yanlış; alkol bir *depressant*'tır; davranışı frenleyen bölgeleri yavaşlattığı için yasaklar gevşer"
          ],
          "a": 3,
          "why": "Alkol sinir sistemini yavaşlatan bir *depressant*'tır ve *GABA*'nın etkisini güçlendirir. Davranışı frenleyen bölgeler yavaşlayınca kişi daha rahat davranır; bu canlılık sinir sisteminin hızlanması değildir."
        },
        {
          "q": "Uzun süredir ağrı kesici olarak bir *opioid* kullanan bir hasta, aynı rahatlamayı sağlamak için giderek daha yüksek doza ihtiyaç duyduğunu söylüyor. Bu durum en iyi hangi kavramla açıklanır?",
          "opts": [
            "*Tolerance*",
            "*Withdrawal*",
            "*Reuptake*",
            "*Refractory period*"
          ],
          "a": 0,
          "why": "Aynı etki için daha fazla madde gerekmesi *tolerance*'tır; beyin maddeye uyum sağlamıştır, örneğin reseptör duyarlılığı azalmıştır. *Withdrawal* madde kesildiğinde ortaya çıkan belirtilerdir."
        },
        {
          "q": "Bir araştırmacı, depresyon tanısı almış katılımcıları rastgele iki gruba ayırıyor: biri 8 hafta bir *SSRI*, öteki görünüşü aynı olan etkisiz bir hap alıyor. *SSRI* grubunda depresyon puanları daha çok düşüyor. Araştırmacı ilacın etki mekanizmasını hangi ifadeyle açıklamalıdır?",
          "opts": [
            "İlaç serotonin reseptörlerini tıkayarak serotoninin etkisini azaltmıştır",
            "İlaç serotoninin geri alımını yavaşlatarak sinapsta daha uzun kalmasını sağlamıştır",
            "İlaç *endorphins*'i taklit ederek acıyı bastırmıştır",
            "İlaç *GABA*'yı engelleyerek sinir sistemini hızlandırmıştır"
          ],
          "a": 1,
          "why": "*SSRI*, seçici serotonin geri alım engelleyicisidir: gönderen nöronun serotonini geri emmesini yavaşlatır, böylece serotonin sinapsta daha uzun kalır. Rastgele atama ve etkisiz hap kullanımı, farkın ilaçtan kaynaklandığı sonucunu güçlendirir."
        },
        {
          "q": "Her gün birkaç bardak çay ve kahve içen Zeynep bir hafta kafeini tamamen bırakıyor. İlk günlerde baş ağrısı, yorgunluk ve dikkatsizlik yaşıyor. Bu belirtiler için hangi açıklama en uygundur?",
          "opts": [
            "Kafein bir *depressant*'tır; bırakılınca sinir sistemi aşırı hızlanır",
            "Kafein bir *opioid*'dir; bırakılınca *endorphins* tamamen biter",
            "Kafeine alışan beyin dengeyi kaybetmiştir; bu *withdrawal* belirtileridir",
            "Bu belirtiler *tolerance*'ın kendisidir"
          ],
          "a": 2,
          "why": "Kafein bir *stimulant*'tır ve uyku habercisi *adenosine*'in reseptörlerini tıkar. Düzenli kullanımda beyin buna uyum sağlar; kafein kesilince uyku hâli ve baş ağrısı gibi ters yönde *withdrawal* belirtileri görülür."
        }
      ]
    },
    {
      "no": 6,
      "code": "1.4-1",
      "slug": "py106",
      "title": "Beynin Bölgeleri",
      "en": "Regions of the Brain",
      "accent": "#B77AD9",
      "defter": "py104",
      "defterBaslik": "Beyin",
      "seconds": 255,
      "terms": [
        "Brainstem",
        "Medulla",
        "Reticular activating system",
        "Cerebellum",
        "Limbic system",
        "Thalamus",
        "Hypothalamus",
        "Hippocampus",
        "Amygdala",
        "Cerebral cortex",
        "Frontal lobe",
        "Prefrontal cortex",
        "Motor cortex",
        "Parietal lobe",
        "Somatosensory cortex",
        "Occipital lobe",
        "Temporal lobe"
      ],
      "questions": [
        {
          "q": "Tabloda dört hastanın belirtileri var. Hangi eşleştirme beyin bölgesiyle ilgili olarak en doğrudur?",
          "opts": [
            "Hasta 1 · Occipital lobe",
            "Hasta 2 · Amygdala",
            "Hasta 3 · Cerebellum",
            "Hasta 4 · Hippocampus"
          ],
          "a": 2,
          "why": "Dengeyi ve hareketlerin koordinasyonunu *cerebellum* yönetir; Hasta 3'ün belirtisi buna uyar. Hasta 1'in sorunu yeni anı kaydı (*hippocampus*), Hasta 2'ninki görme (*occipital lobe*), Hasta 4'ünkü korku tepkisi (*amygdala*) ile ilgilidir.",
          "fig": {
            "type": "table",
            "head": [
              "Hasta",
              "Belirti"
            ],
            "rows": [
              [
                "1",
                "Kazadan önceki hayatını hatırlıyor ama yeni tanıştığı kişilerin adlarını birkaç dakika sonra unutuyor"
              ],
              [
                "2",
                "Gözleri sağlam ama görme alanının bir kısmında hiçbir şey görmüyor"
              ],
              [
                "3",
                "Yürürken sendeliyor, bardağa uzanırken elini ıskalıyor"
              ],
              [
                "4",
                "Tehlikeli durumlarda korku tepkisi neredeyse hiç görülmüyor"
              ]
            ],
            "caption": "Dört hasta · kurgusal vakalar"
          }
        },
        {
          "q": "Sınav haftasında gece geç saate kadar ders çalışan Arda'nın yemek yemeyi unuttuğu hâlde birden çok acıktığını ve üşüdüğünü fark etmesinde rol oynayan temel bölge hangisidir?",
          "opts": [
            "*Hypothalamus*",
            "*Thalamus*",
            "*Medulla*",
            "*Occipital lobe*"
          ],
          "a": 0,
          "why": "Açlık, susuzluk ve vücut ısısı gibi temel ihtiyaçları izleyen ve düzenleyen bölge *hypothalamus*'tur. *Thalamus* duyuları yönlendirir, *medulla* kalp ve nefesi yönetir, *occipital lobe* görmeyi işler."
        },
        {
          "q": "Araştırmacılar 13–25 yaş arası katılımcılara ani ödül ile beklenen daha büyük ödül arasında seçim yaptırıyor. Gençler ani ödülü daha sık seçiyor. Araştırmacılar bu farkı en iyi hangi beyin gelişimiyle açıklayabilir?",
          "opts": [
            "*Cerebellum*'un ergenlikte küçülmesi",
            "*Occipital lobe*'un yirmili yaşlarda tamamlanması",
            "*Medulla*'nın ergenlikte henüz çalışmaması",
            "*Prefrontal cortex*'in yirmili yaşların ortasına kadar olgunlaşmaya devam etmesi"
          ],
          "a": 3,
          "why": "Plan yapma, dürtüleri frenleme ve sonuçları tartma büyük ölçüde *prefrontal cortex*'in işidir ve bu bölge yirmili yaşların ortasına kadar olgunlaşır. *Medulla* doğumdan itibaren çalışır; öteki seçenekler dürtü kontrolüyle ilgili değildir."
        },
        {
          "q": "Bir nöroloji muayenesinde doktor hastanın beyninin sol yarım küresinde *motor cortex*'in el bölgesini hafifçe uyarıyor. Ne olması beklenir?",
          "opts": [
            "Hastanın sol eli kıpırdar",
            "Hastanın sağ eli kıpırdar",
            "Hasta sağ elinde dokunma hisseder ama el hareket etmez",
            "Hasta bir ses duyar"
          ],
          "a": 1,
          "why": "*Motor cortex* istemli hareketi başlatır ve beyin vücudu çapraz yönetir: sol yarım küre sağ tarafı kontrol eder. Bu yüzden sağ el hareket eder. Dokunma hissi *somatosensory cortex*'e, ses ise *temporal lobe*'a aittir."
        },
        {
          "q": "Bir kişi kalabalık bir kantinde arkadaşlarıyla konuşurken müziği, ışıkları ve yemeğin tadını aynı anda algılıyor. Gözden, kulaktan ve dilden gelen bu bilgilerin korteksteki ilgili bölgelere yönlendirilmesinde hangi bölge santral görevi görür?",
          "opts": [
            "*Amygdala*",
            "*Hippocampus*",
            "*Thalamus*",
            "*Reticular activating system*"
          ],
          "a": 2,
          "why": "*Thalamus* koku dışındaki duyusal bilgiyi alıp korteksteki doğru bölgeye yönlendiren santraldir. *Reticular activating system* genel uyanıklığı ayarlar ama duyuları yönlendirmez."
        }
      ]
    },
    {
      "no": 7,
      "code": "1.4-2",
      "slug": "py107",
      "title": "Yarım Küreler, Plastisite ve Yöntemler",
      "en": "Hemispheres, Plasticity, and Research Methods",
      "accent": "#B77AD9",
      "defter": "py104",
      "defterBaslik": "Beyin",
      "seconds": 253,
      "terms": [
        "Corpus callosum",
        "Hemispheric specialization (lateralization)",
        "Split-brain",
        "Broca's area",
        "Wernicke's area",
        "Aphasia",
        "Plasticity",
        "Case study",
        "Lesioning",
        "EEG",
        "fMRI",
        "PET"
      ],
      "questions": [
        {
          "q": "Bir *split-brain* hastası ekranın ortasına bakarken sağ görme alanına \"top\", sol görme alanına \"kalem\" kelimesi aynı anda gösteriliyor. Hasta ne gördüğünü söylüyor ve sonra perdenin altından sol eliyle bir nesne seçiyor. En olası sonuç hangisidir?",
          "opts": [
            "\"Kalem\" der ve sol eliyle kalemi seçer",
            "\"Top\" der ve sol eliyle topu seçer",
            "\"Kalem\" der ve sol eliyle topu seçer",
            "\"Top\" der ve sol eliyle kalemi seçer"
          ],
          "a": 3,
          "why": "Sağ görme alanındaki \"top\" sol yarım küreye gider; konuşma çoğunlukla solda olduğu için hasta \"top\" der. Sol görme alanındaki \"kalem\" sağ yarım küreye gider; sağ yarım küre sol eli yönettiği için sol el kalemi seçer. Köprü kesik olduğundan iki taraf birbirinden habersizdir."
        },
        {
          "q": "İnme geçiren bir hasta akıcı ve uzun cümleler kuruyor ama cümleleri anlamsız; kendisine söylenenleri de anlamıyor gibi görünüyor. Hasar büyük olasılıkla nerededir?",
          "opts": [
            "Sol *temporal lobe*'daki *Wernicke's area*",
            "Sol *frontal lobe*'daki *Broca's area*",
            "*Corpus callosum*",
            "Sağ *occipital lobe*"
          ],
          "a": 0,
          "why": "Akıcı ama anlamsız konuşma ve anlama güçlüğü *Wernicke's aphasia*'nın belirtisidir; *Wernicke's area* çoğunlukla sol *temporal lobe*'dadır. *Broca's area* hasarında kişi anlar ama konuşmayı üretmekte zorlanır."
        },
        {
          "q": "Tablo, dört araştırma sorusunu ve önerilen yöntemleri gösteriyor. Hangi satırda yöntem soruya en iyi uyar?",
          "opts": [
            "1",
            "2",
            "3",
            "4"
          ],
          "a": 1,
          "why": "Beynin bir sese milisaniyeler içinde ne zaman tepki verdiğini ölçmek için zamanlaması çok iyi olan *EEG* en uygundur. 1'de yer sorusu için *fMRI*, 3'te tek bir nadir vakayı anlamak için *case study* uygun olurdu; 4'te sağlıklı insanlarda bilerek *lesioning* yapmak etik değildir.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Araştırma sorusu",
              "Önerilen yöntem"
            ],
            "rows": [
              [
                "1",
                "Matematik problemi çözerken hangi bölge daha çok çalışıyor?",
                "EEG"
              ],
              [
                "2",
                "Beklenmedik bir ses duyulunca beyin kaç milisaniye içinde tepki veriyor?",
                "EEG"
              ],
              [
                "3",
                "Ön lobu kazada hasar gören tek bir hastanın kişiliği nasıl değişti?",
                "fMRI"
              ],
              [
                "4",
                "Hippocampus yeni anılar için gerekli mi?",
                "Sağlıklı gönüllülerde lesioning"
              ]
            ],
            "caption": "Araştırma soruları ve yöntemler"
          }
        },
        {
          "q": "Dört yaşında, ağır nöbetler nedeniyle sol yarım küresi ameliyatla alınan bir çocuk birkaç yıl içinde konuşmayı büyük ölçüde yeniden öğreniyor. Bu durum en iyi hangi kavramla açıklanır?",
          "opts": [
            "*Lateralization*",
            "*Aphasia*",
            "*Plasticity*",
            "*Lesioning*"
          ],
          "a": 2,
          "why": "Beynin kalan bölümlerinin yeni bağlantılar kurup kaybedilen işlevleri üstlenmesi *plasticity*'dir ve küçük çocuklarda daha güçlüdür. *Lateralization* dilin normalde solda olmasını anlatır; burada şaşırtıcı olan beynin bu düzeni değiştirebilmesidir."
        },
        {
          "q": "Bir dergi testi \"Matematikte iyiysen sol beyinli, resimde iyiysen sağ beyinlisin\" diyor. Bir psikoloji öğrencisi bu iddiaya hangi yanıtı vermelidir?",
          "opts": [
            "Doğru; her insan yalnızca bir yarım küresini kullanır",
            "İki yarım küre bazı işlerde uzmanlaşsa da çoğu işte birlikte çalışır; insanları sol ya da sağ beyinli diye ayırmak desteklenmez",
            "Doğru; *corpus callosum* yalnızca sanatçılarda çalışır",
            "Yanlış; iki yarım küre arasında hiçbir işlev farkı yoktur"
          ],
          "a": 1,
          "why": "*Lateralization* gerçektir: çoğu insanda dil solda, uzamsal ve yüz işleri sağda öne çıkar. Ama sağlıklı bir beyinde iki taraf *corpus callosum* üzerinden sürekli haberleşir ve birlikte çalışır; \"sol beyinli insan\" bir efsanedir. D şıkkı ise uzmanlaşmayı tamamen yok saydığı için yanlıştır."
        }
      ]
    },
    {
      "no": 8,
      "code": "1.5",
      "slug": "py108",
      "title": "Uyku",
      "en": "Sleep",
      "accent": "#E86A92",
      "defter": "py105",
      "seconds": 260,
      "terms": [
        "Consciousness",
        "Circadian rhythm",
        "Melatonin",
        "Jet lag",
        "NREM sleep",
        "REM sleep",
        "Sleep cycle",
        "REM rebound",
        "Restoration theory",
        "Memory consolidation",
        "Activation-synthesis theory",
        "Insomnia",
        "Narcolepsy",
        "Sleep apnea",
        "REM sleep behavior disorder",
        "Sleepwalking (somnambulism)"
      ],
      "questions": [
        {
          "q": "Tablo, bir uyku laboratuvarında aynı gece kaydedilen dört gözlemi gösteriyor. Hangi gözlem büyük olasılıkla *NREM* üç evresinde yapılmıştır?",
          "opts": [
            "1",
            "2",
            "3",
            "4"
          ],
          "a": 0,
          "why": "Büyük ve yavaş dalgalar, uyandırmanın çok zor olması ve uyandırılınca sersemlik derin uykunun, yani *NREM* üçün özellikleridir. 2 *REM*'e (hızlı göz hareketi, kas felci), 3 *NREM* bire (hafif uyku, irkilme), 4 *NREM* ikiye (kısa dalga patlamaları) uyar.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Gözlem"
            ],
            "rows": [
              [
                "1",
                "Dalgalar büyük ve yavaş; katılımcı seslenmeye tepki vermiyor, uyandırılınca sersem"
              ],
              [
                "2",
                "Gözler hızla oynuyor, dalgalar uyanıklıktaki gibi hızlı, kaslar gevşek"
              ],
              [
                "3",
                "Uykuya yeni dalmış; düşüyormuş gibi irkilip uyanıyor"
              ],
              [
                "4",
                "Dalgalarda kısa, hızlı patlamalar; vücut ısısı düşmeye başlamış"
              ]
            ],
            "caption": "Uyku laboratuvarı · kurgusal kayıt"
          }
        },
        {
          "q": "Araştırmacılar katılımcılara akşam bir kelime listesi öğretiyor. Bir grup gece normal uyuyor, öteki grup sabaha kadar uyanık tutuluyor. Ertesi gün uyuyan grup listeyi daha iyi hatırlıyor. Bu sonuç en çok hangi görüşü destekler?",
          "opts": [
            "*Activation-synthesis theory*",
            "Uykunun *memory consolidation* işlevi",
            "*Circadian rhythm*'in uykuyu hiç etkilemediği",
            "*Sleep apnea*'nın belleği güçlendirdiği"
          ],
          "a": 1,
          "why": "Uyku sırasında gün içinde öğrenilenler pekişir; uyuyan grubun daha iyi hatırlaması *memory consolidation* görüşünü destekler. *Activation-synthesis* rüyaların nasıl oluştuğunu açıklar, belleğin pekişmesini değil."
        },
        {
          "q": "Ece İstanbul'dan Tokyo'ya uçuyor. Tokyo saatiyle 22.00'de yatağa giriyor ama hiç uykusu yok; sabah 07.00'de ise uyanmakta çok zorlanıyor. Bunun en iyi açıklaması hangisidir?",
          "opts": [
            "*REM rebound* nedeniyle fazla *REM*'e giriyor",
            "*Narcolepsy* atakları yaşıyor",
            "*Circadian rhythm*'i hâlâ İstanbul saatine göre ayarlı; bu bir *jet lag* durumudur",
            "Uykuda nefesi durduğu için uyanıyor"
          ],
          "a": 2,
          "why": "Tokyo 22.00, İstanbul'da 16.00'dır; Tokyo 07.00 ise İstanbul'da gece 01.00. İç saati hâlâ İstanbul'a ayarlı olduğu için vücudu yatma saatinde öğleden sonrada, uyanma saatinde gece yarısındadır. Bu *jet lag*'dir; iç saat ışıkla birkaç günde yeni düzene kayar."
        },
        {
          "q": "Bir hastanın eşi, hastanın gece rüyasında tartıştığını, yumruk savurduğunu ve bir keresinde yataktan düştüğünü anlatıyor; hasta uyandırıldığında kavga ettiği bir rüyayı hatırlıyor. Hangi bozukluk en olasıdır?",
          "opts": [
            "*Insomnia*",
            "*REM sleep behavior disorder*",
            "*Sleepwalking* (somnambulism)",
            "*Sleep apnea*"
          ],
          "a": 1,
          "why": "Normalde *REM*'de kaslar neredeyse felçtir. Bu felç çalışmazsa kişi rüyasını fiziksel olarak yaşar: *REM sleep behavior disorder*. Uyurgezerlik ise derin *NREM* uykusunda olur ve kişi genellikle canlı bir rüya hatırlamaz."
        },
        {
          "q": "*Activation-synthesis theory*'ye göre bir öğrencinin rüyasında okul koridorunun birden denize dönüşmesi en iyi nasıl açıklanır?",
          "opts": [
            "Bastırılmış gizli isteklerin sembolik bir anlatımıdır",
            "Uyurken ışığın *melatonin*'i bastırmasıyla oluşur",
            "Derin *NREM* uykusunda vücudun kendini onarmasının yan etkisidir",
            "*REM* sırasında beyin sapından gelen rastgele sinyalleri korteksin bir hikâyeye dönüştürmeye çalışmasıdır"
          ],
          "a": 3,
          "why": "*Activation-synthesis theory*, rüyaları *REM* sırasındaki rastgele beyin sapı etkinliğinin korteks tarafından anlamlandırılması olarak görür; saçma geçişler bu yüzden doğaldır. Gizli istekler yorumu bu kuramın değil, eski psikanalitik yaklaşımın iddiasıdır."
        }
      ]
    },
    {
      "no": 9,
      "code": "1.6-1",
      "slug": "py109",
      "title": "Duyumun İlkeleri ve Beden Duyuları",
      "en": "Sensation Principles and Body Senses",
      "accent": "#5BC0EB",
      "defter": "py106",
      "defterBaslik": "Duyum",
      "seconds": 257,
      "terms": [
        "Sensation",
        "Perception",
        "Transduction",
        "Absolute threshold",
        "Difference threshold (JND)",
        "Weber's law",
        "Signal detection theory",
        "Sensory adaptation",
        "Sensory interaction",
        "Synesthesia",
        "Gate-control theory",
        "Vestibular sense",
        "Kinesthesis"
      ],
      "questions": [
        {
          "q": "Bir deneyde katılımcılar 200 gramlık bir zarfa eklenen ağırlığı ancak 10 gram eklenince fark edebiliyor. *Weber's law* doğruysa, aynı katılımcı 800 gramlık bir paketteki farkı fark etmek için yaklaşık ne kadar ek ağırlığa ihtiyaç duyar?",
          "opts": [
            "10 gram",
            "20 gram",
            "40 gram",
            "80 gram"
          ],
          "a": 2,
          "why": "Fark eşiği sabit bir orandır: 10 / 200 = yüzde 5. 800 gramın yüzde 5'i 40 gramdır. 10 gram demek, eşiği sabit bir miktar sanmak olur; bu *Weber's law*'un tam tersidir."
        },
        {
          "q": "Tablo, bir işitme testinde bir katılımcının farklı şiddetteki sesleri duyma oranını gösteriyor. Bu katılımcının *absolute threshold*'u en iyi hangi değerdir?",
          "opts": [
            "2 birim",
            "4 birim",
            "6 birim",
            "8 birim"
          ],
          "a": 1,
          "why": "*Absolute threshold*, bir uyaranın denemelerin yüzde 50'sinde fark edildiği düzeydir. Tabloda yüzde 50, 4 birimde. 8 birimde ses hep duyuluyor ama eşik en düşük yarı yarıya fark edilen düzeydir.",
          "fig": {
            "type": "table",
            "head": [
              "Ses şiddeti (birim)",
              "Duyulduğu denemelerin oranı"
            ],
            "rows": [
              [
                "2",
                "%10"
              ],
              [
                "4",
                "%50"
              ],
              [
                "6",
                "%85"
              ],
              [
                "8",
                "%100"
              ]
            ],
            "caption": "İşitme testi · örnek veri"
          }
        },
        {
          "q": "Bir ses mühendisi, dinleyicilerin iki şarkının ses düzeyi arasındaki farkı denemelerin yarısında fark edebildiği en küçük artışı arıyor. Mühendis hangi kavramı ölçüyor?",
          "opts": [
            "*Absolute threshold*",
            "*Transduction*",
            "*Sensory adaptation*",
            "*Difference threshold* (*JND*)"
          ],
          "a": 3,
          "why": "İki uyaran arasında, denemelerin yüzde 50'sinde fark edilen en küçük fark *difference threshold*'dur (*JND*). *Absolute threshold* tek bir uyaranın yarı yarıya fark edildiği en zayıf düzeydir; burada şarkılar zaten duyuluyor, ölçülen şey aradaki fark. *Transduction* ise uyaranın sinir sinyaline çevrilmesidir."
        },
        {
          "q": "Yeni taşındığı evin yanından tren geçen Zeynep ilk günlerde her trende uyanıyor; bir ay sonra treni neredeyse hiç fark etmiyor. Bu durumu en iyi hangi kavram açıklar?",
          "opts": [
            "*Sensory adaptation*",
            "*Transduction*",
            "*Synesthesia*",
            "*Weber's law*"
          ],
          "a": 0,
          "why": "Tekrar eden, değişmeyen bir uyarana karşı duyarlılığın zamanla azalması *sensory adaptation*'dır. Beyin sabit uyaranları susturarak yeni değişimlere dikkat ayırır."
        },
        {
          "q": "Bir araştırmacı katılımcıların burunlarını mandalla kapatıp gözleri bağlıyken onlara elma ve çiğ patates dilimleri tattırıyor. Katılımcılar ikisini çoğu zaman ayırt edemiyor. Araştırmacı hangi sonuca varmalıdır?",
          "opts": [
            "Dildeki tat alıcıları elmayı algılayamaz",
            "Koku, tatların ayırt edilmesine önemli katkı yapar; bu bir *sensory interaction* örneğidir",
            "Koku sinyalleri *thalamus*'tan geçmediği için tat da kaybolur",
            "Katılımcılar *vestibular sense* kaybı yaşamıştır"
          ],
          "a": 1,
          "why": "Burun kapanınca iki yiyecek ayırt edilemiyorsa, lezzetin büyük kısmı kokudan geliyordur; bir duyunun ötekini etkilemesi *sensory interaction*'dır. Kokunun *thalamus*'u atlaması doğru bir bilgidir ama bu sonucu açıklamaz."
        }
      ]
    },
    {
      "no": 10,
      "code": "1.6-2",
      "slug": "py110",
      "title": "Görme ve İşitme",
      "en": "Vision and Hearing",
      "accent": "#5BC0EB",
      "defter": "py106",
      "defterBaslik": "Duyum",
      "seconds": 263,
      "terms": [
        "Wavelength",
        "Hue",
        "Amplitude",
        "Retina",
        "Rods",
        "Cones",
        "Fovea",
        "Blind spot",
        "Trichromatic theory",
        "Opponent-process theory",
        "Afterimage",
        "Prosopagnosia",
        "Blindsight",
        "Cochlea",
        "Place theory",
        "Frequency theory",
        "Volley theory",
        "Sensorineural hearing loss"
      ],
      "questions": [
        {
          "q": "Gece kamp ateşinden uzaklaşan Defne, karanlıkta ağaçların ve çadırların biçimini seçebiliyor ama çadırların hangi renk olduğunu söyleyemiyor. Bunun en iyi açıklaması hangisidir?",
          "opts": [
            "Loş ışıkta renk görmeyen *rods* devreye girmiştir",
            "*Cones* loş ışıkta daha iyi çalışır ama renkleri karıştırır",
            "Görüntü *blind spot*'a düştüğü için renk kaybolmuştur",
            "*Opponent-process* kanalları karanlıkta tamamen kapanır"
          ],
          "a": 0,
          "why": "Loş ışıkta *rods* çalışır; bunlar ışığa çok duyarlıdır ama renk ayırt etmez. Renk ve ayrıntı için bol ışık isteyen *cones* gerekir. Bu yüzden karanlıkta biçimler seçilir, renkler seçilmez."
        },
        {
          "q": "Bir öğrenci kırmızı bir bayrağa bir dakika baktıktan sonra beyaz bir duvara bakıyor ve bayrağın yeşil-mavi tonlu bir görüntüsünü görüyor. Bu deneyimi en iyi hangi kuram açıklar?",
          "opts": [
            "*Trichromatic theory*",
            "*Place theory*",
            "*Opponent-process theory*",
            "*Frequency theory*"
          ],
          "a": 2,
          "why": "Uzun süre kırmızıya bakınca kırmızı–yeşil karşıt çiftinin kırmızı kanalı yorulur; beyaza bakınca karşıtı öne çıkar ve *afterimage* görülür. *Trichromatic theory* üç koni türünü açıklar ama karşıt renkli art görüntüyü açıklamaz."
        },
        {
          "q": "Tablo, dört sesin frekansını gösteriyor. Hangi ses için *place theory*'nin en iyi açıklama olduğu söylenebilir?",
          "opts": [
            "Ses 1",
            "Ses 2",
            "Ses 3",
            "Ses 4"
          ],
          "a": 3,
          "why": "*Place theory* yüksek frekanslı sesleri en iyi açıklar: farklı frekanslar *cochlea*'nın farklı yerlerini titreştirir. Tablodaki en yüksek frekans Ses 4'tür (8.000 Hz). Düşük frekanslı Ses 1 için *frequency theory* daha uygundur.",
          "fig": {
            "type": "table",
            "head": [
              "Ses",
              "Kaynak",
              "Frekans"
            ],
            "rows": [
              [
                "1",
                "Büyük davul",
                "60 Hz"
              ],
              [
                "2",
                "Erkek konuşma sesi",
                "150 Hz"
              ],
              [
                "3",
                "Piyanonun orta notası",
                "260 Hz"
              ],
              [
                "4",
                "Kuş ötüşü",
                "8.000 Hz"
              ]
            ],
            "caption": "Yaklaşık frekanslar"
          }
        },
        {
          "q": "Bir kazadan sonra hastanın gözleri sağlam ve genel görmesi yerinde; nesneleri, renkleri ve harfleri sorunsuz tanıyor. Ama en yakın arkadaşını yüzünden tanıyamıyor, ancak sesini duyunca tanıyor. Bu durum en iyi hangi kavramla açıklanır?",
          "opts": [
            "*Blindsight*",
            "*Prosopagnosia*",
            "*Color vision deficiency*",
            "*Sensory adaptation*"
          ],
          "a": 1,
          "why": "Görme genel olarak sağlamken yalnızca yüzlerin tanınamaması *prosopagnosia*'dır. *Blindsight*'ta ise kişi bilinçli olarak görmediğini söylediği uyaranlara tepki verebilir; burada hasta yüzleri görüyor ama tanıyamıyor."
        },
        {
          "q": "Kulak zarında yırtık olan bir hasta ile yıllarca gürültülü bir fabrikada çalışmış bir hastanın işitme kayıpları karşılaştırılıyor. Hangi ifade doğrudur?",
          "opts": [
            "İkisi de *sensorineural hearing loss*'tur",
            "Yırtık zar *sensorineural*, gürültü *conduction* kaybına yol açar",
            "İkisi de yalnızca işitme siniri hasarıdır",
            "Yırtık zar *conduction*, gürültü ise tüy hücrelerine zarar vererek *sensorineural* kayba yol açar"
          ],
          "a": 3,
          "why": "Kulak zarı ya da orta kulak kemikleri sesin iç kulağa iletilmesini sağlar; buradaki hasar *conduction hearing loss*'tur. Uzun süreli gürültü *cochlea*'daki tüy hücrelerini bozar; bu *sensorineural hearing loss*'tur."
        }
      ]
    }
  ],
  "final": []
};
