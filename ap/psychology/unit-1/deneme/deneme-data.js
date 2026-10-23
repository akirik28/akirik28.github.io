/* Bu dosya üretilir: ap-videolar/tools/build-deneme-data.mjs (elle düzenleme; kaynak: tools/out/deneme-psych-u1.json) */
window.DENEME = {
  "store": "psych-u1:v1:",
  "course": "AP Psychology",
  "unit": "Unit 1 — Biological Bases of Behavior",
  "topics": {
    "1.1": "Kalıtım ve Çevrenin Etkileşimi",
    "1.2": "Sinir Sistemine Genel Bakış",
    "1.3-1": "Nöron ve Sinirsel İletim",
    "1.3-2": "Nörotransmitterler ve Hormonlar",
    "1.3-3": "İlaçlar ve Sinirsel İletim",
    "1.4-1": "Beynin Bölgeleri",
    "1.4-2": "Yarım Küreler, Plastisite ve Yöntemler",
    "1.5": "Uyku",
    "1.6-1": "Duyumun İlkeleri ve Beden Duyuları",
    "1.6-2": "Görme ve İşitme"
  },
  "tests": [
    {
      "no": 1,
      "level": "Isınma",
      "minutes": 20,
      "questions": [
        {
          "t": "1.1",
          "q": "The table shows results from a study of musical aptitude test scores. Which conclusion is best supported by the data?",
          "o": [
            "Musical aptitude is determined entirely by the home environment.",
            "Genes contribute to individual differences in musical aptitude.",
            "Fraternal twins share more of their home environment than identical twins do.",
            "Musical aptitude cannot be changed by practice or training."
          ],
          "a": 1,
          "w": "*Identical twins* genlerinin neredeyse tamamını, *fraternal twins* ve kardeşler yaklaşık yarısını paylaşır. Benzerlik genetik yakınlıkla artıyorsa genler bu özellikteki farklılıklara katkı yapıyordur. Bu, özelliğin pratikle değişmeyeceği anlamına gelmez: kalıtımın katkısı kader değildir.",
          "fig": {
            "type": "table",
            "head": [
              "Pair type",
              "Correlation between scores"
            ],
            "rows": [
              [
                "Identical twins",
                "+.80"
              ],
              [
                "Fraternal twins",
                "+.45"
              ],
              [
                "Non-twin siblings",
                "+.40"
              ]
            ],
            "caption": "Example data"
          }
        },
        {
          "t": "1.1",
          "q": "Toddlers in many different cultures become wary of steep drops soon after they learn to crawl. An evolutionary psychologist would most likely explain this tendency by arguing that",
          "o": [
            "toddlers learn the fear by watching their parents react nervously to heights",
            "each child develops the fear only after falling at least once",
            "ancestors who avoided heights were more likely to survive and reproduce, so the tendency became common through natural selection",
            "the fear is caused entirely by differences in how families raise their children"
          ],
          "a": 2,
          "w": "*Evolutionary psychology* bir davranışı atalarımızın hayatta kalma ve üreme başarısıyla açıklar: yüksekten çekinenler daha çok yaşadı, bu eğilimi taşıyan genler *natural selection* ile yaygınlaştı. Ebeveyni izleyerek ya da düşerek öğrenmek çevresel (öğrenme) açıklamalardır. Kültürden bağımsız, erken ortaya çıkan bir eğilim evrimsel açıklamaya işaret eder."
        },
        {
          "t": "1.2",
          "q": "As Kerem walks onto the stage for his first guitar solo, his heart pounds, his mouth goes dry, and his pupils dilate. Which part of his nervous system is most responsible for these changes?",
          "o": [
            "The parasympathetic division of the autonomic nervous system",
            "The somatic nervous system",
            "The sympathetic division of the autonomic nervous system",
            "A spinal reflex arc"
          ],
          "a": 2,
          "w": "Kalp çarpıntısı, ağız kuruması, göz bebeği büyümesi *fight-or-flight* tepkisidir: *sympathetic nervous system*. *Parasympathetic* tam tersini yapar, bedeni sakinleştirir (*rest-and-digest*). *Somatic nervous system* istemli kas hareketlerini yönetir; gitar çalan parmaklar somatiktir ama kalp çarpıntısı değildir."
        },
        {
          "t": "1.2",
          "q": "Elif accidentally touches a hot pan and jerks her hand away before she even feels the pain. Which pathway best describes this response?",
          "o": [
            "Sensory neuron → interneuron in the spinal cord → motor neuron",
            "Motor neuron → brain → sensory neuron",
            "Sensory neuron → cerebral cortex → motor neuron",
            "Interneuron → sensory neuron → motor neuron"
          ],
          "a": 0,
          "w": "Bu bir *reflex arc*: *sensory (afferent) neuron* sinyali omuriliğe taşır, oradaki *interneuron* doğrudan *motor (efferent) neuron*'a aktarır ve el beyin karar vermeden çekilir. Acının biraz sonra hissedilmesi, sinyalin ayrıca beyne de gitmesindendir. Sırayı ters kuran şıklar afferent/efferent yönünü karıştırır."
        },
        {
          "t": "1.3-1",
          "q": "A disease that gradually destroys the myelin sheath around axons would most directly cause which of the following?",
          "o": [
            "Neurotransmitters would no longer be reabsorbed by the sending neuron.",
            "Messages would travel along axons more slowly and less reliably.",
            "Dendrites would stop receiving any signals from other neurons.",
            "Neurons would fire larger action potentials than normal."
          ],
          "a": 1,
          "w": "*Myelin sheath* aksonu yalıtır ve sinyalin aksonda hızla \"atlayarak\" ilerlemesini sağlar; *multiple sclerosis*'te bu kılıf hasar görür ve iletim yavaşlar, bozulur. *Reuptake* sinapsta olur, miyelinle ilgisi yoktur. *Action potential*'ın büyüklüğü zaten sabittir (*all-or-none*)."
        },
        {
          "t": "1.3-1",
          "q": "A researcher stimulates a neuron three times: first with a weak stimulus that does not reach threshold, then with a strong stimulus, and finally with a very strong stimulus. Which outcome is most consistent with the all-or-none principle?",
          "o": [
            "The weak stimulus produces a small action potential, and the very strong one produces the largest.",
            "All three stimuli produce identical action potentials.",
            "The neuron fires for the weak stimulus but cannot fire for the stronger ones.",
            "No action potential occurs for the weak stimulus; the other two produce action potentials of the same size."
          ],
          "a": 3,
          "w": "*All-or-none*: *threshold* aşılmazsa ateşleme olmaz; aşılırsa *action potential* her seferinde aynı büyüklüktedir. Daha güçlü uyaran daha büyük değil, daha sık ateşlemeye yol açar. \"Küçük ateşleme\" diye bir şey yoktur; eşik altı uyaran hiç ateşleme üretmez."
        },
        {
          "t": "1.3-2",
          "q": "A toxin blocks acetylcholine receptors at the junctions between motor neurons and muscles. A person exposed to this toxin would most likely experience",
          "o": [
            "muscle weakness or paralysis",
            "vivid hallucinations",
            "intense hunger",
            "an inability to fall asleep"
          ],
          "a": 0,
          "w": "*Acetylcholine* motor nöronlardan kaslara \"kasıl\" mesajını taşır (ayrıca bellekte rol oynar). Alıcıları bloke edilirse mesaj kasa ulaşmaz: kas güçsüzlüğü ya da felç. Halüsinasyon *serotonin* sistemiyle, açlık *ghrelin* ile, uyku *melatonin* ile ilişkilendirilir."
        },
        {
          "t": "1.3-2",
          "q": "Compared with the nervous system, the endocrine system typically",
          "o": [
            "sends messages faster, and its effects fade more quickly",
            "sends messages more slowly, but its effects tend to last longer",
            "releases its chemical messengers directly into synapses",
            "is controlled mainly by the cerebellum"
          ],
          "a": 1,
          "w": "*Endocrine system* hormonları kana salar; kanla taşınan mesaj yavaş ulaşır ama etkisi uzun sürer. Sinir sistemi milisaniyelerle çalışır, etkisi kısa sürer. Sinapsa salınan kimyasallar *neurotransmitter*'dır, hormon değil; endokrin sistemin beyindeki bağlantısı *hypothalamus* ve *pituitary gland*'dir."
        },
        {
          "t": "1.3-3",
          "q": "Morphine binds to the same receptors as the body's endorphins and activates them, reducing pain. In this situation, morphine is acting as",
          "o": [
            "an antagonist",
            "a reuptake inhibitor",
            "an agonist",
            "a hormone"
          ],
          "a": 2,
          "w": "Alıcıya bağlanıp onu doğal *neurotransmitter* gibi etkinleştiren madde *agonist*'tir; morfin *endorphins*'i taklit eder. *Antagonist* alıcıya bağlanır ama etkinleştirmez, kapıyı tıkar. *Reuptake inhibitor* alıcıya değil geri alım pompasına etki eder."
        },
        {
          "t": "1.3-3",
          "q": "Before an all-night study session, Burak drinks three cups of strong Turkish coffee. He soon feels alert, and his heart races. The substance he consumed is best classified as",
          "o": [
            "a depressant",
            "a hallucinogen",
            "an opioid",
            "a stimulant"
          ],
          "a": 3,
          "w": "Kafein uyanıklığı, kalp atışını ve sinir sistemi etkinliğini artırır: *stimulant*. *Depressants* (alkol gibi) sinir sistemini yavaşlatır, *hallucinogens* algıyı bozar, *opioids* ağrıyı azaltıp uyuşukluk yapar."
        },
        {
          "t": "1.4-1",
          "q": "After a bicycle accident, Selin thinks clearly and speaks normally, but she has great difficulty walking in a straight line and catching a ball. Which brain structure was most likely damaged?",
          "o": [
            "Cerebellum",
            "Hippocampus",
            "Broca's area",
            "Occipital lobe"
          ],
          "a": 0,
          "w": "*Cerebellum* denge, koordinasyon ve zamanlaması iyi hareketlerden sorumludur; düşünme ve konuşma sağlam ama top yakalayamıyorsa ilk şüpheli odur. *Hippocampus* yeni anı oluşturur, *Broca's area* konuşma üretir, *occipital lobe* görmeyi işler."
        },
        {
          "t": "1.4-1",
          "q": "After surgery to treat severe seizures, a patient still remembers his childhood clearly but cannot form new lasting memories of conversations he had after the surgery. Which structure was most likely affected?",
          "o": [
            "Amygdala",
            "Thalamus",
            "Medulla",
            "Hippocampus"
          ],
          "a": 3,
          "w": "*Hippocampus* yeni anıların kalıcı belleğe geçmesinde kilit rol oynar; hasar görünce eski anılar durur ama yenileri oluşmaz. *Amygdala* duygu (özellikle korku), *thalamus* duyu aktarımı, *medulla* nefes ve kalp atışıyla ilgilidir."
        },
        {
          "t": "1.4-2",
          "q": "After a stroke, Mr. Aydın understands what people say to him, but he speaks slowly and with great effort, producing broken phrases such as \"Tea... want... now.\" Which brain area was most likely damaged?",
          "o": [
            "Wernicke's area in the left temporal lobe",
            "Broca's area in the left frontal lobe",
            "The corpus callosum",
            "The visual cortex in the occipital lobe"
          ],
          "a": 1,
          "w": "Anlama sağlam, üretim bozuk: *Broca's area* (sol *frontal lobe*). *Wernicke's area* hasarında tersi olur: konuşma akıcı ama anlamsızdır ve kişi söyleneni anlamaz. Kısa ipucu: Broca = broken speech, Wernicke = words without meaning."
        },
        {
          "t": "1.4-2",
          "q": "A researcher wants to know exactly when, to the millisecond, the brain responds after participants hear an unexpected sound. Which method is best suited to this question?",
          "o": [
            "fMRI",
            "A case study",
            "Lesioning",
            "EEG"
          ],
          "a": 3,
          "w": "Soru \"ne zaman\" diyor: *EEG* kafa derisindeki elektrotlarla elektriksel etkinliği milisaniye düzeyinde ölçer. *fMRI* \"nerede\" sorusunda iyidir ama kan akışı değişimi saniyeler sürdüğü için zamanlaması geriden gelir. *Case study* ve *lesioning* zamanlama ölçmez."
        },
        {
          "t": "1.5",
          "q": "Defne flies from Istanbul to Tokyo. For several days she feels wide awake at 3 a.m. local time and sleepy in the afternoon. This is best explained by a disruption of her",
          "o": [
            "REM rebound",
            "circadian rhythm",
            "sleep apnea",
            "narcolepsy"
          ],
          "a": 1,
          "w": "*Circadian rhythm* yaklaşık 24 saatlik biyolojik saattir; *jet lag*'de iç saat eski saat dilimine göre çalışmaya devam eder. *REM rebound* REM yoksunluğundan sonra görülür; *sleep apnea* ve *narcolepsy* süreğen uyku bozukluklarıdır, yolculukla gelip geçmez."
        },
        {
          "t": "1.5",
          "q": "In a sleep lab, a researcher wakes participants whenever their EEG shows fast, irregular, wake-like brain waves while their major muscles are almost completely relaxed. From which stage are participants most likely being awakened?",
          "o": [
            "NREM 1",
            "NREM 3",
            "REM sleep",
            "Wakefulness"
          ],
          "a": 2,
          "w": "Beyin dalgaları uyanıklığa benziyor ama kaslar neredeyse felçli: *REM* (paradoksal uyku); canlı rüyaların en sık bildirildiği evre. *NREM 3*'te yavaş, büyük *delta waves* görülür. Uyanık biri kaslarını bu kadar gevşek tutmaz."
        },
        {
          "t": "1.6-1",
          "q": "In a hearing test, an audiologist plays softer and softer tones to find the quietest tone that Can detects 50 percent of the time. The audiologist is measuring Can's",
          "o": [
            "absolute threshold",
            "difference threshold",
            "sensory adaptation",
            "signal detection bias"
          ],
          "a": 0,
          "w": "Bir uyaranın denemelerin yarısında fark edildiği en düşük şiddet *absolute threshold*'dur. *Difference threshold (JND)* iki uyaran arasındaki fark edilebilir en küçük farktır; burada karşılaştırılan iki ses yok. *Sensory adaptation* sabit uyarana duyarlılığın azalmasıdır."
        },
        {
          "t": "1.6-1",
          "q": "When Zeynep first walks into her grandmother's kitchen, the smell of cumin is strong, but after fifteen minutes she barely notices it. This change is best explained by",
          "o": [
            "synesthesia",
            "transduction",
            "the difference threshold",
            "sensory adaptation"
          ],
          "a": 3,
          "w": "Değişmeyen bir uyarana zamanla daha az tepki vermek *sensory adaptation*'dır; koku hâlâ oradadır ama reseptörler daha az yanıt verir. *Transduction* uyaranın sinir sinyaline dönüşmesidir ve hâlâ sürmektedir. *Synesthesia* bir duyunun başka bir duyu deneyimi tetiklemesidir."
        },
        {
          "t": "1.6-2",
          "q": "Walking home on an unlit street at night, Mert can make out the shapes of parked cars but not their colors. He is relying mainly on",
          "o": [
            "rods, which are concentrated in the outer parts of the retina",
            "cones, which are concentrated in the fovea",
            "the blind spot, where the optic nerve leaves the eye",
            "the lens, which changes shape to focus light"
          ],
          "a": 0,
          "w": "*Rods* loş ışığa çok duyarlıdır ama renk ayırt etmez; *retina*'nın kenarlarında yoğundur. *Cones* rengi ve ayrıntıyı görür, *fovea*'da toplanır ama çok ışık ister. *Blind spot*'ta hiç reseptör yoktur."
        },
        {
          "t": "1.6-2",
          "q": "A guitarist tightens a string so that it vibrates more times per second. Compared with before, listeners will most likely perceive",
          "o": [
            "a louder sound",
            "a softer sound",
            "a higher pitch",
            "the same pitch lasting longer"
          ],
          "a": 2,
          "w": "Saniyedeki titreşim sayısı *frequency*'dir ve *pitch* (perde) olarak algılanır: daha sık titreşim, daha ince ses. Ses yüksekliği (*loudness*) ise dalganın *amplitude*'una bağlıdır; teli germek genliği değil frekansı değiştirir."
        }
      ]
    },
    {
      "no": 2,
      "level": "Temel",
      "minutes": 25,
      "questions": [
        {
          "t": "1.1",
          "q": "In a study of adopted children, researchers measured anxiety in the children, their biological parents, and their adoptive parents. The results are shown in the table. Which conclusion is best supported?",
          "o": [
            "Adoptive parents' parenting style is the main source of the children's anxiety.",
            "Anxiety levels are completely determined by genes.",
            "Genetic factors contribute to individual differences in anxiety.",
            "The children's anxiety was caused by the biological parents' behavior before the adoption."
          ],
          "a": 2,
          "w": "Çocuk, kendisini büyütmeyen biyolojik ebeveyne (+.35) yetiştiren ebeveynden (+.10) daha çok benziyor: genlerin katkısına işaret eder. \"Tamamen genler\" aşırı bir iddiadır; .35 orta düzey bir korelasyondur ve çevrenin de payı vardır. *Adoption studies*'in gücü, genleri ve ev ortamını farklı kişilere ayırmasıdır.",
          "fig": {
            "type": "table",
            "head": [
              "Comparison",
              "Correlation in anxiety scores"
            ],
            "rows": [
              [
                "Child and biological parent",
                "+.35"
              ],
              [
                "Child and adoptive parent",
                "+.10"
              ]
            ],
            "caption": "Example data; children were adopted in their first month of life"
          }
        },
        {
          "t": "1.1",
          "q": "In a particular population, the heritability of height is estimated to be about 0.80. Which of the following statements is correct?",
          "o": [
            "About 80 percent of the variation in height among people in that population can be attributed to genetic differences.",
            "About 80 percent of each person's height comes from his or her genes.",
            "Improved nutrition could not change the average height of that population.",
            "Children in that population will grow to about 80 percent of their parents' height."
          ],
          "a": 0,
          "w": "*Heritability* grup düzeyinde bir istatistiktir: bir topluluktaki bireyler arası farklılığın ne kadarının genetik farklılıklarla ilişkili olduğunu söyler. Tek bir kişinin boyunun yüzde 80'i genlerden gelir demek yanlıştır. Yüksek *heritability* çevrenin etkisiz olduğu anlamına da gelmez: beslenme iyileşirse ortalama boy yine artabilir."
        },
        {
          "t": "1.2",
          "q": "After her last final exam ends, Ece sits in the school garden eating a simit. Her heart rate slows, her breathing deepens, and digestion speeds up. Which system is most active?",
          "o": [
            "The sympathetic nervous system",
            "The parasympathetic nervous system",
            "The somatic nervous system",
            "The adrenal glands of the endocrine system"
          ],
          "a": 1,
          "w": "Kalbin yavaşlaması ve sindirimin hızlanması *rest-and-digest* tepkisidir: *parasympathetic nervous system*. *Sympathetic* sınav anındaki alarmı (kalp hızlanır, sindirim yavaşlar) yönetir. *Adrenal glands*'in salgıladığı *adrenaline* tam ters yönde, uyarılmayı artırır."
        },
        {
          "t": "1.2",
          "q": "Which of the following is the best example of activity in the somatic nervous system?",
          "o": [
            "Ali's pupils widen when the classroom lights go out.",
            "Ali's stomach digests his lunch during class.",
            "Ali raises his hand to answer the teacher's question.",
            "Ali's heart beats faster when the teacher calls his name."
          ],
          "a": 2,
          "w": "*Somatic nervous system* iskelet kaslarının istemli hareketlerini ve bunlarla ilgili duyuları taşır: el kaldırmak tam örnek. Göz bebeği, sindirim ve kalp atışı istem dışıdır ve *autonomic nervous system*'e aittir."
        },
        {
          "t": "1.3-1",
          "q": "When a neuron reaches its threshold, channels open and positively charged ions rush into the axon, making the inside of the cell less negative. This event is called",
          "o": [
            "the resting potential",
            "reuptake",
            "the refractory period",
            "depolarization"
          ],
          "a": 3,
          "w": "Pozitif iyonların içeri akmasıyla hücre içinin negatifliğini kaybetmesi *depolarization*'dır; *action potential* aksonda bu şekilde ilerler. *Resting potential* ateşlemeden önceki negatif dinlenme durumudur. *Refractory period* ateşlemeden hemen sonraki toparlanma aralığıdır; *reuptake* ise sinapsta olur."
        },
        {
          "t": "1.3-1",
          "q": "At the same moment, a neuron receives a large number of inhibitory signals and a smaller number of excitatory signals, all of equal strength. Which outcome is most likely?",
          "o": [
            "The neuron fires a weaker action potential than usual.",
            "The neuron does not fire, because the inhibitory signals outweigh the excitatory ones.",
            "The neuron fires a stronger action potential than usual.",
            "The neuron sends inhibitory neurotransmitters back to the sending neurons."
          ],
          "a": 1,
          "w": "Nöron gelen sinyalleri toplar: *excitatory* sinyaller ateşlemeye iter, *inhibitory* sinyaller frenler. Fren ağır basarsa *threshold*'a ulaşılmaz ve ateşleme olmaz. \"Zayıf\" ya da \"güçlü\" ateşleme şıkları *all-or-none* ilkesine aykırıdır."
        },
        {
          "t": "1.3-2",
          "q": "Parkinson's disease involves tremors and difficulty starting movements. Medications that reduce these symptoms usually work by increasing the activity of which neurotransmitter?",
          "o": [
            "Dopamine",
            "GABA",
            "Melatonin",
            "Substance P"
          ],
          "a": 0,
          "w": "*Parkinson's disease*'te hareketi başlatan devrelerdeki *dopamine* üreten nöronlar kaybolur; ilaçlar dopamin etkinliğini artırmaya çalışır. *GABA* ana baskılayıcı (*inhibitory*) taşıyıcıdır, *substance P* ağrı sinyalini taşır, *melatonin* ise bir hormondur."
        },
        {
          "t": "1.3-2",
          "q": "Doğa skipped both breakfast and lunch. By mid-afternoon her stomach is growling and she feels very hungry. Which hormone is most directly responsible for increasing her hunger?",
          "o": [
            "Leptin",
            "Oxytocin",
            "Ghrelin",
            "Melatonin"
          ],
          "a": 2,
          "w": "Boş mide *ghrelin* salgılar ve beyne \"acıktım\" mesajı gönderir. *Leptin* yağ dokusundan salınır ve tokluk sinyali verir; ikisini karıştırmak en sık hatadır. *Oxytocin* bağlanma, *melatonin* uyku ile ilişkilidir."
        },
        {
          "t": "1.3-3",
          "q": "Naloxone, used by paramedics in opioid overdoses, binds to opioid receptors without activating them and prevents the opioid from acting. Naloxone is best described as",
          "o": [
            "an agonist",
            "a reuptake inhibitor",
            "a stimulant",
            "an antagonist"
          ],
          "a": 3,
          "w": "Alıcıya bağlanıp onu etkinleştirmeden kapıyı kapatan madde *antagonist*'tir; nalokson opioidin yerini alır ve etkisini durdurur. *Agonist* alıcıyı etkinleştirirdi. *Reuptake inhibitor* alıcıya değil, geri alım pompasına etki eder."
        },
        {
          "t": "1.3-3",
          "q": "After months of drinking energy drinks every day, Kaan now needs three cans to feel the alertness that one can used to give him. This pattern illustrates",
          "o": [
            "withdrawal",
            "tolerance",
            "REM rebound",
            "sensory adaptation"
          ],
          "a": 1,
          "w": "Aynı etkiyi almak için giderek daha çok madde gerekmesi *tolerance*'tır; beyin sürekli uyarılmaya uyum sağlamıştır. *Withdrawal* madde kesilince ortaya çıkan rahatsız edici belirtilerdir. *Sensory adaptation* duyu reseptörlerinin sabit uyarana tepkisini azaltmasıdır, ilaç kullanımıyla ilgili değildir."
        },
        {
          "t": "1.4-1",
          "q": "A tumor causes a patient to have serious problems regulating her body temperature, hunger, and thirst. Which brain structure is most likely affected?",
          "o": [
            "Hypothalamus",
            "Thalamus",
            "Cerebellum",
            "Occipital lobe"
          ],
          "a": 0,
          "w": "*Hypothalamus* vücut ısısı, açlık, susuzluk gibi temel ihtiyaçları düzenler ve *pituitary gland* aracılığıyla endokrin sistemi yönetir. *Thalamus* ismi benzer ama görevi farklıdır: kokuyu saymazsak duyu bilgilerini korteksin ilgili bölgelerine aktarır."
        },
        {
          "t": "1.4-1",
          "q": "During brain surgery, a neurosurgeon gently stimulates a strip of cortex at the front of the parietal lobe. The patient reports a tingling sensation in her left hand. Which area was most likely stimulated?",
          "o": [
            "The left motor cortex",
            "The right somatosensory cortex",
            "The left somatosensory cortex",
            "The right motor cortex"
          ],
          "a": 1,
          "w": "*Parietal lobe*'un ön şeridi *somatosensory cortex*'tir ve dokunma duyusunu işler; hasta bir şey hissettiğini söylüyor, hareket ettiğini değil. Kontrol çaprazdır (*contralateral*): sol el sağ yarım kürede temsil edilir. *Motor cortex* *frontal lobe*'un arka şeridindedir ve uyarılırsa kas hareketi olur."
        },
        {
          "t": "1.4-2",
          "q": "A split-brain patient stares at a dot in the middle of a screen while the word KEY is flashed briefly to the left of the dot. He says he saw nothing, but with his left hand he picks out a key from objects hidden behind a screen. Which explanation best accounts for this result?",
          "o": [
            "The image was processed by the left hemisphere, which controls the left hand.",
            "The image reached only the right hemisphere, which controls the left hand but cannot easily produce speech.",
            "The surgery damaged the patient's occipital lobes.",
            "The corpus callosum still carries information from the left hemisphere to the right."
          ],
          "a": 1,
          "w": "Sol görme alanındaki bilgi sağ yarım küreye gider. *Corpus callosum* kesildiği için bilgi konuşmayı yöneten sol yarım küreye geçemez: hasta \"hiçbir şey görmedim\" der. Ama sağ yarım küre sol eli kontrol ettiği için anahtarı doğru seçer."
        },
        {
          "t": "1.4-2",
          "q": "When she was four, a girl had most of one cerebral hemisphere removed to stop severe seizures. Years later she walks, talks, and does well in school. This outcome best illustrates",
          "o": [
            "lateralization",
            "the all-or-none principle",
            "contralateral control",
            "plasticity"
          ],
          "a": 3,
          "w": "*Plasticity* beynin hasardan sonra yeni bağlantılar kurarak kendini yeniden düzenlemesidir ve çocuklukta en güçlüdür. *Lateralization* işlevlerin bir yarım kürede ağırlık kazanmasıdır; bu vaka tam tersine kalan yarım kürenin yeni işler üstlendiğini gösterir."
        },
        {
          "t": "1.5",
          "q": "The graph shows the average number of minutes participants spent in REM sleep during each 90-minute sleep cycle of one night. Which conclusion is best supported by the graph?",
          "o": [
            "Participants spent most of the first half of the night in REM sleep.",
            "Time spent in NREM 3 increases across the night.",
            "REM periods become longer as the night goes on.",
            "Participants who slept longer completed fewer sleep cycles."
          ],
          "a": 2,
          "w": "Grafikteki çubuklar her döngüde uzuyor: *REM* dönemleri sabaha doğru uzar. Gecenin başında baskın olan *NREM 3* (derin uyku) aslında sabaha doğru azalır, ama bu grafik zaten NREM 3'ü ölçmüyor. İlk döngüdeki 10 dakika, 90 dakikalık döngünün küçük bir parçasıdır.",
          "fig": {
            "type": "bar",
            "cats": [
              "Cycle 1",
              "Cycle 2",
              "Cycle 3",
              "Cycle 4",
              "Cycle 5"
            ],
            "series": [
              {
                "name": "REM",
                "values": [
                  10,
                  18,
                  25,
                  32,
                  40
                ]
              }
            ],
            "ylabel": "Minutes of REM (example data)"
          }
        },
        {
          "t": "1.5",
          "q": "Hakan often falls asleep suddenly in the middle of conversations during the day, sometimes entering REM sleep within minutes. Strong laughter occasionally makes his knees buckle. Which sleep disorder best fits these symptoms?",
          "o": [
            "Insomnia",
            "Sleep apnea",
            "Sleepwalking",
            "Narcolepsy"
          ],
          "a": 3,
          "w": "Gündüz karşı konulamaz uyku atakları, doğrudan *REM*'e geçiş ve duygu anında kas gevşemesi *narcolepsy*'nin tipik belirtileridir. *Insomnia* uykuya dalamamak ya da sürdürememektir; *sleep apnea*'da uyku sırasında nefes tekrar tekrar durur; *sleepwalking* *NREM 3*'te olur."
        },
        {
          "t": "1.6-1",
          "q": "Ayşe can just barely notice the difference when 2 grams are added to a 40-gram letter. According to Weber's law, about how much weight would need to be added to an 80-gram letter for her to notice the difference?",
          "o": [
            "1 gram",
            "2 grams",
            "4 grams",
            "8 grams"
          ],
          "a": 2,
          "w": "*Weber's law*: fark edilebilir en küçük fark (*JND*) sabit bir miktar değil, sabit bir orandır. 2/40 = yüzde 5; 80 gramın yüzde 5'i 4 gramdır. \"2 gram\" şıkkı farkı sabit sanan, \"8 gram\" ise oranı yanlış büyüten hatadır."
        },
        {
          "t": "1.6-1",
          "q": "After bumping her knee on a desk, Melis rubs the spot, and the pain seems to fade. Which theory best explains why rubbing reduces the pain?",
          "o": [
            "Gate-control theory",
            "Opponent-process theory",
            "Weber's law",
            "Signal detection theory"
          ],
          "a": 0,
          "w": "*Gate-control theory*'ye göre omurilikte ağrı sinyallerinin beyne geçişini açıp kapatan bir \"kapı\" vardır; ovmanın yarattığı dokunma sinyalleri bu kapıyı kısmen kapatır. *Opponent-process theory* renk görmeyi açıklar, *Weber's law* fark eşiklerini."
        },
        {
          "t": "1.6-2",
          "q": "Emre stares at a flag with a bright red stripe for one minute and then looks at a white wall. He briefly sees a green stripe where the red one had been. Which theory best explains this experience?",
          "o": [
            "Opponent-process theory",
            "Trichromatic theory",
            "Place theory",
            "Signal detection theory"
          ],
          "a": 0,
          "w": "*Afterimage* *opponent-process theory*'nin kanıtıdır: kırmızı–yeşil gibi zıt çiftler birbirini baskılar; kırmızıya uzun süre bakınca kırmızı yorulur ve beyaz duvarda karşıtı olan yeşil görünür. *Trichromatic theory* üç koni tipini açıklar ama ard görüntüyü açıklayamaz. *Place theory* işitmeye aittir."
        },
        {
          "t": "1.6-2",
          "q": "After years of standing next to loudspeakers at concerts, Barış has trouble hearing high-pitched sounds. Tests show that many hair cells in his cochlea are damaged. His condition is best described as",
          "o": [
            "conduction hearing loss",
            "a ruptured eardrum",
            "sensory adaptation",
            "sensorineural hearing loss"
          ],
          "a": 3,
          "w": "*Cochlea*'daki *hair cells* ya da işitme sinirinin hasarı *sensorineural hearing loss*'tur ve genellikle kalıcıdır. *Conduction hearing loss*'ta sorun sesi iç kulağa ileten mekanik yapılardadır (kulak zarı, kemikçikler). *Sensory adaptation* geçicidir ve hasar içermez."
        }
      ]
    },
    {
      "no": 3,
      "level": "Orta",
      "minutes": 25,
      "questions": [
        {
          "t": "1.1",
          "q": "A pair of identical twins show similar patterns of gene activity at age 5. By age 50, the twins differ noticeably in which genes are active; one twin smoked for decades and worked night shifts. Which explanation best accounts for this change?",
          "o": [
            "The twins' DNA sequences gradually became different through natural selection.",
            "The twins must actually have been fraternal twins.",
            "Environmental experiences changed which genes are turned on or off without changing the DNA sequence.",
            "The heritability of the twins' traits dropped to zero."
          ],
          "a": 2,
          "w": "*Epigenetics*: çevre ve yaşam deneyimleri DNA dizisini değiştirmeden genlerin açılıp kapanmasını (ifadesini) etkileyebilir. *Natural selection* tek bir kişinin ömrü içinde değil, kuşaklar boyunca işler. *Heritability* bir topluluk istatistiğidir; iki bireyin değişimini açıklamaz."
        },
        {
          "t": "1.1",
          "q": "A researcher locates identical twins who were separated at birth and raised by different families. The main advantage of studying such twins is that this approach",
          "o": [
            "removes the influence of genes from the trait being studied",
            "helps separate the effects of shared genes from the effects of a shared home environment",
            "proves that the trait is caused by a single gene",
            "allows the researcher to randomly assign children to families"
          ],
          "a": 1,
          "w": "Birlikte büyüyen ikizlerde benzerlik hem genlerden hem ortak evden gelebilir. Ayrı büyütülen *identical twins* genleri paylaşır ama evi paylaşmaz; yine de benziyorlarsa genlerin payı daha net görülür. Araştırmacı çocukları ailelere atamamıştır: bu bir deney değil, doğal bir karşılaştırmadır."
        },
        {
          "t": "1.2",
          "q": "During an earthquake drill that feels surprisingly real, students' sympathetic nervous systems become highly active. Which pair of changes would you most expect?",
          "o": [
            "Heart rate increases, and digestion slows.",
            "Heart rate decreases, and digestion speeds up.",
            "Heart rate increases, and digestion speeds up.",
            "Pupils constrict, and breathing slows."
          ],
          "a": 0,
          "w": "*Sympathetic* sistem enerjiyi kaçmaya ya da savaşmaya yönlendirir: kalp hızlanır, nefes hızlanır, göz bebekleri büyür, sindirim gibi \"acil olmayan\" işler yavaşlar. Kalbin yavaşlaması ve sindirimin hızlanması *parasympathetic* tepkidir. Karışık şık iki sistemin etkilerini birleştiren tuzaktır."
        },
        {
          "t": "1.2",
          "q": "After an injury to his lower spinal cord, Arda can no longer feel touch on his feet, even though tests show that the sensory receptors in his feet still work normally. Which explanation is most likely?",
          "o": [
            "Efferent neurons can no longer carry messages from his brain to his feet.",
            "Afferent signals from his feet can no longer travel through the spinal cord to the brain.",
            "His autonomic nervous system has stopped functioning.",
            "The receptors in his feet have undergone sensory adaptation."
          ],
          "a": 1,
          "w": "Hissetmek için duyu sinyalinin *afferent* yolla omurilikten (*CNS*) beyne ulaşması gerekir; reseptörler çalışıyor ama yol kesik. *Efferent* nöronlar beyinden kaslara giden hareket mesajlarını taşır; soru hissetmeyi soruyor, hareketi değil. Adaptasyon geçicidir ve testte reseptörlerin sağlam olduğu zaten görüldü."
        },
        {
          "t": "1.3-1",
          "q": "A researcher delivers two equally strong stimuli to a neuron just one millisecond apart. The neuron fires an action potential after the first stimulus but not after the second. Which explanation best accounts for this result?",
          "o": [
            "The second stimulus was below the neuron's threshold.",
            "The neuron's resting potential had become more positive, making it easier to fire.",
            "The first action potential used up all of the neuron's neurotransmitters.",
            "The neuron was in its refractory period after the first action potential."
          ],
          "a": 3,
          "w": "Ateşlemeden hemen sonra nöron kısa bir toparlanma süresine girer: *refractory period*. Bu sırada uyaran ne kadar güçlü olursa olsun yeni bir *action potential* oluşmaz. İki uyaran eşit güçte olduğu için \"ikincisi eşik altındaydı\" açıklaması tutmaz."
        },
        {
          "t": "1.3-1",
          "q": "Which sequence correctly traces the path of a message within a single neuron and on to the next neuron?",
          "o": [
            "Dendrites → cell body → axon → terminal buttons → synapse",
            "Axon → dendrites → cell body → synapse → terminal buttons",
            "Terminal buttons → axon → cell body → dendrites → synapse",
            "Cell body → dendrites → synapse → axon → terminal buttons"
          ],
          "a": 0,
          "w": "Mesajı *dendrites* alır, *cell body* bütünleştirir, *axon* boyunca *action potential* ilerler, *terminal buttons* *neurotransmitter* salar ve mesaj *synapse* üzerinden sonraki nöronun dendritlerine geçer. Kısa hatırlatma: dendrit = giriş, akson = çıkış kablosu."
        },
        {
          "t": "1.3-2",
          "q": "Hande's neurologist explains that her seizures are linked to too little activity of the brain's major inhibitory neurotransmitter, which normally calms neural firing. Which neurotransmitter is the neurologist most likely describing?",
          "o": [
            "Glutamate",
            "Dopamine",
            "Acetylcholine",
            "GABA"
          ],
          "a": 3,
          "w": "*GABA* beynin ana *inhibitory* (baskılayıcı) taşıyıcısıdır; az olursa nöronlar kontrolsüz ateşleyebilir. *Glutamate* ise ana *excitatory* (uyarıcı) taşıyıcıdır; ikisi en sık karıştırılan çifttir. Dopamin hareket ve ödül, asetilkolin kas ve bellekle ilgilidir."
        },
        {
          "t": "1.3-2",
          "q": "After finishing a long run, marathon runners often report that their pain fades and they feel a mild sense of well-being. These effects are most likely due to the release of",
          "o": [
            "substance P",
            "leptin",
            "norepinephrine",
            "endorphins"
          ],
          "a": 3,
          "w": "*Endorphins* vücudun doğal ağrı kesicileridir; uzun egzersiz, stres ve acı onların salınımını artırır. *Substance P* tam tersine ağrı sinyalini taşır. *Leptin* tokluk hormonudur; *norepinephrine* uyarılma ve dikkatle ilgilidir."
        },
        {
          "t": "1.3-3",
          "q": "Selective serotonin reuptake inhibitors (SSRIs) are commonly prescribed for depression. What happens at serotonin synapses when a person takes an SSRI?",
          "o": [
            "Serotonin stays in the synapse longer, so it can keep stimulating receptors.",
            "Serotonin is blocked from binding to its receptors.",
            "The receiving neuron releases serotonin back to the sending neuron.",
            "Serotonin is converted into dopamine in the synapse."
          ],
          "a": 0,
          "w": "*Reuptake* sinapstaki fazla *neurotransmitter*'ın gönderen nöron tarafından geri emilmesidir. *SSRI* bu geri alımı engeller, serotonin sinapsta daha uzun kalır ve etkisi artar; sonuç *agonist* yönlü bir etkidir. Alıcıyı bloke etmek bir *antagonist*'in yapacağı iştir."
        },
        {
          "t": "1.3-3",
          "q": "Alcohol increases the activity of GABA, the brain's main inhibitory neurotransmitter. This helps explain why drinking alcohol",
          "o": [
            "increases alertness and heart rate",
            "produces vivid visual hallucinations",
            "slows reaction time and lowers a person's inhibitions",
            "mimics endorphins to block all pain"
          ],
          "a": 2,
          "w": "Alkol bir *depressant*'tır: *GABA*'yı güçlendirerek sinir sistemini yavaşlatır, tepki süresi uzar ve koordinasyon bozulur. Davranışı frenleyen ön beyin bölgeleri de baskılandığı için kişi daha dürtüsel davranabilir. Uyanıklık ve kalp hızlanması *stimulant* etkisidir."
        },
        {
          "t": "1.4-1",
          "q": "After a severe brain injury, a patient's breathing and heartbeat can be maintained only with the help of machines. Which structure was most likely damaged?",
          "o": [
            "Medulla",
            "Amygdala",
            "Prefrontal cortex",
            "Cerebellum"
          ],
          "a": 0,
          "w": "*Brainstem*'in en alt kısmı olan *medulla* nefes alma ve kalp atışı gibi yaşamsal, otomatik işlevleri yönetir. *Cerebellum* koordinasyon, *amygdala* duygu, *prefrontal cortex* planlama ve karar verme ile ilgilidir; bunların hasarı nefesi durdurmaz."
        },
        {
          "t": "1.4-1",
          "q": "After an injury to the front part of his frontal lobes, Mr. Kaya still scores normally on vocabulary tests, but he makes impulsive decisions, struggles to plan ahead, and often says inappropriate things. Which area was most likely damaged?",
          "o": [
            "Occipital lobe",
            "Temporal lobe",
            "Prefrontal cortex",
            "Cerebellum"
          ],
          "a": 2,
          "w": "*Prefrontal cortex* planlama, dürtü kontrolü ve karar verme gibi yürütücü işlevleri yönetir; Phineas Gage vakası da bu bölgeyle ilgilidir. Kelime bilgisinin sağlam olması zekâ testlerinin bu hasarı gözden kaçırabileceğini gösterir. *Occipital lobe* görme, *temporal lobe* işitme ve dil anlama ile ilgilidir."
        },
        {
          "t": "1.4-2",
          "q": "Researchers want to identify which brain regions become more active when participants look at photos of their close friends compared with photos of strangers. Which method is most appropriate?",
          "o": [
            "EEG, because it shows precisely where in the brain activity occurs",
            "fMRI, because it shows which regions have increased blood flow and oxygen use during the task",
            "Lesioning, because it can be performed ethically on healthy participants",
            "A case study of one patient who cannot recognize faces"
          ],
          "a": 1,
          "w": "Soru \"hangi bölge\" diyor: *fMRI* kan oksijeni değişimini izleyerek etkin bölgeleri ayrıntılı bir haritada gösterir. *EEG*'nin gücü zamanlamadır, yeri kabaca gösterir. Sağlıklı insanlarda *lesioning* etik değildir; tek bir hastayla yapılan *case study* bu karşılaştırmayı yapamaz."
        },
        {
          "t": "1.4-2",
          "q": "A psychologist spends two years studying a single patient who has rare damage to the corpus callosum, using interviews, brain scans, and many tests. What is the main limitation of this approach?",
          "o": [
            "The findings may not generalize to other people.",
            "It cannot provide detailed information about the patient.",
            "It requires random assignment of participants to conditions.",
            "It proves cause and effect too strongly."
          ],
          "a": 0,
          "w": "*Case study* tek kişiyi derinlemesine inceler; nadir durumlar için çok değerlidir ama bulgular başkalarına genellenemeyebilir. Ayrıntı eksikliği tam tersine bu yöntemin güçlü yanıdır. *Random assignment* deneylere aittir; *case study* neden-sonuç kanıtlayamaz."
        },
        {
          "t": "1.5",
          "q": "Researchers randomly assigned volunteers to sleep either 8 hours or 4 hours in a sleep lab after learning a list of 30 words. The next morning, all participants were tested on the list. The results are shown in the table. What is the independent variable in this study?",
          "o": [
            "The number of words participants recalled",
            "The amount of sleep participants were allowed",
            "The list of 30 words",
            "The time of the morning memory test"
          ],
          "a": 1,
          "w": "*Independent variable* araştırmacının değiştirdiği değişkendir: uyku süresi (8 ya da 4 saat). Hatırlanan kelime sayısı ölçülen sonuçtur, yani *dependent variable*. Kelime listesi ve test saati herkes için aynı tutulmuştur; bunlar kontrol edilen değişkenlerdir.",
          "fig": {
            "type": "table",
            "head": [
              "Group",
              "Mean words recalled (out of 30)"
            ],
            "rows": [
              [
                "8 hours of sleep",
                18
              ],
              [
                "4 hours of sleep",
                11
              ]
            ],
            "caption": "Example data"
          }
        },
        {
          "t": "1.5",
          "q": "A theorist argues that dreams occur because the brainstem produces random bursts of neural activity during REM sleep, and higher brain areas then try to weave these signals into a story. This view is known as",
          "o": [
            "restoration theory",
            "memory consolidation theory",
            "activation-synthesis theory",
            "circadian rhythm theory"
          ],
          "a": 2,
          "w": "*Activation-synthesis theory*: REM'de beyin sapından gelen rastgele etkinlik (*activation*), korteks tarafından bir hikâyeye dönüştürülür (*synthesis*). *Restoration theory* uykunun bedeni onardığını, *memory consolidation* uykunun anıları sağlamlaştırdığını söyler; bunlar rüyanın kaynağını değil uykunun işlevini anlatır."
        },
        {
          "t": "1.6-1",
          "q": "A radiologist was warned that missing a tumor could cost a patient's life. The table shows her decisions on 100 X-rays. Which statement is best supported by the data?",
          "o": [
            "She made 20 misses, showing that her absolute threshold for detecting tumors is too high.",
            "She made 20 false alarms and only 5 misses, consistent with saying 'tumor' whenever she was unsure because a miss seemed costly.",
            "She made 45 correct rejections, showing that she was very cautious about saying 'tumor.'",
            "Her 30 hits show that she failed to detect most tumors."
          ],
          "a": 1,
          "w": "*Signal detection theory*: tümör varken \"var\" = *hit* (45), yokken \"var\" = *false alarm* (20), varken \"yok\" = *miss* (5), yokken \"yok\" = *correct rejection* (30). Kaçırmanın bedeli büyük görüldüğünde insanlar daha kolay \"evet\" der; *hit* artar ama *false alarm* da artar. Beklenti ve motivasyon kararı etkiler.",
          "fig": {
            "type": "table",
            "head": [
              "",
              "She said \"tumor\"",
              "She said \"no tumor\""
            ],
            "rows": [
              [
                "Tumor present",
                45,
                5
              ],
              [
                "Tumor absent",
                20,
                30
              ]
            ],
            "caption": "Example data"
          }
        },
        {
          "t": "1.6-1",
          "q": "Ozan has a stuffy nose from a cold. While eating a ripe strawberry, he complains that it tastes bland. This experience best illustrates",
          "o": [
            "transduction",
            "Weber's law",
            "the absolute threshold",
            "sensory interaction"
          ],
          "a": 3,
          "w": "Bir duyunun başka bir duyuyu etkilemesi *sensory interaction*'dır; tadın büyük kısmı aslında kokudan gelir ve burun tıkanınca yemek tatsızlaşır. *Transduction* her duyuda olan dönüşüm sürecidir, bu duruma özgü bir açıklama değildir."
        },
        {
          "t": "1.6-2",
          "q": "Amateur astronomers notice that a very dim star is easier to see if they look slightly to the side of it rather than directly at it. Which explanation is best?",
          "o": [
            "The fovea contains mostly rods, which detect dim light best.",
            "The blind spot is located in the center of the fovea.",
            "Cones in the outer retina are better at detecting color at night.",
            "Looking to the side lets the starlight fall on the outer retina, where rods that are sensitive to dim light are concentrated."
          ],
          "a": 3,
          "w": "*Fovea* neredeyse tamamen *cones*'tan oluşur; koniler ayrıntı ve renk için iyidir ama çok ışık ister. Loş ışığa duyarlı *rods* retinanın kenarlarında yoğundur; yıldıza yandan bakınca ışık çubuklara düşer. *Blind spot* fovea'da değil, optik sinirin gözden çıktığı yerdedir."
        },
        {
          "t": "1.6-2",
          "q": "A researcher finds that a 6,000 Hz tone causes the greatest vibration at one specific spot near the base of the cochlea, while a 500 Hz tone causes the greatest vibration at a different spot. This finding most directly supports",
          "o": [
            "frequency theory",
            "volley theory",
            "place theory",
            "opponent-process theory"
          ],
          "a": 2,
          "w": "*Place theory*: farklı perdeler *cochlea*'nın farklı noktalarındaki *hair cells*'i en çok uyarır; özellikle yüksek perdeleri iyi açıklar. *Frequency theory* perdeyi sinirin ateşleme hızıyla açıklar, yere değil. *Opponent-process* renk görmeye aittir."
        }
      ]
    },
    {
      "no": 4,
      "level": "Zor",
      "minutes": 30,
      "questions": [
        {
          "t": "1.1",
          "q": "In Country X, nearly all children receive the same high-quality nutrition and schooling. In Country Y, access to nutrition and schooling varies greatly from family to family. If the two populations are similar in genetic diversity, the heritability of reading ability would most likely be",
          "o": [
            "higher in Country X, because less of the variation among children comes from environmental differences",
            "higher in Country Y, because unequal environments make genes more important",
            "the same in both countries, because heritability is a fixed property of a trait",
            "zero in Country X, because all children share the same environment"
          ],
          "a": 0,
          "w": "*Heritability* farklılığın ne kadarının genetik farklılıklarla ilişkili olduğunu söyler. Çevre eşitlenince çevreden kaynaklanan farklılık azalır, geriye kalan farklılığın daha büyük kısmı genlerle açıklanır: *heritability* artar. Bu nedenle heritability sabit değildir, ölçülen topluluğa ve ortama bağlıdır."
        },
        {
          "t": "1.1",
          "q": "The table shows correlations in scores on a personality trait from a family study. Which finding most directly suggests that genes influence the trait even when home environments differ?",
          "o": [
            "Identical twins reared together correlate at +.86.",
            "Identical twins reared apart still correlate at +.75.",
            "Fraternal twins reared together correlate at +.55.",
            "Unrelated children reared together correlate at +.25."
          ],
          "a": 1,
          "w": "Ayrı evlerde büyüyen *identical twins* yalnızca genleri paylaşır; hâlâ yüksek benzerlik (+.75) genlerin etkisinin ev ortamından bağımsız olarak sürdüğünü gösterir. Birlikte büyüyen ikizlerde genler ve ev karışır. Birlikte büyüyen akraba olmayan çocukların benzerliği (+.25) ise çevrenin etkisine kanıttır, genlerin değil.",
          "fig": {
            "type": "table",
            "head": [
              "Relationship",
              "Correlation"
            ],
            "rows": [
              [
                "Identical twins reared together",
                "+.86"
              ],
              [
                "Identical twins reared apart",
                "+.75"
              ],
              [
                "Fraternal twins reared together",
                "+.55"
              ],
              [
                "Unrelated children reared together",
                "+.25"
              ]
            ],
            "caption": "Example data"
          }
        },
        {
          "t": "1.2",
          "q": "A drug temporarily blocks the activity of the parasympathetic nervous system. Which effects would a person taking this drug most likely show?",
          "o": [
            "A slower heart rate and increased salivation",
            "A loss of voluntary control over the arm muscles",
            "An inability to feel touch on the skin",
            "A faster heart rate and reduced digestion"
          ],
          "a": 3,
          "w": "*Parasympathetic* sistem normalde kalbi yavaşlatır ve sindirimi destekler. Bu fren kaldırılırsa *sympathetic* etki baskın kalır: kalp hızlanır, sindirim ve tükürük azalır. İstemli kas hareketi ve dokunma *somatic nervous system*'e aittir; otonom ilaç bunları doğrudan etkilemez."
        },
        {
          "t": "1.2",
          "q": "A car suddenly swerves in front of Deniz. She slams her foot on the brake, and a moment later her pupils dilate and her heart races. Which choice correctly classifies (1) pressing the brake and (2) the pupil and heart changes?",
          "o": [
            "(1) Somatic nervous system; (2) sympathetic nervous system",
            "(1) Autonomic nervous system; (2) somatic nervous system",
            "(1) Sympathetic nervous system; (2) parasympathetic nervous system",
            "(1) Somatic nervous system; (2) parasympathetic nervous system"
          ],
          "a": 0,
          "w": "Frene basmak iskelet kaslarının istemli hareketidir: *somatic*. Göz bebeği büyümesi ve kalp çarpıntısı istem dışı alarm tepkisidir: *autonomic nervous system*'in *sympathetic* kolu. Parasympathetic sistem tehlike geçince bedeni sakinleştirir."
        },
        {
          "t": "1.3-1",
          "q": "A drug makes the inside of a neuron's axon even more negative at rest than it normally is. How would this most likely affect the neuron?",
          "o": [
            "It would make the neuron more likely to fire.",
            "It would increase the size of each action potential.",
            "It would speed up the reuptake of neurotransmitters.",
            "It would make the neuron less likely to reach threshold and fire."
          ],
          "a": 3,
          "w": "*Threshold*'a ulaşmak için hücre içinin yeterince pozitifleşmesi (*depolarization*) gerekir. Başlangıç noktası daha negatifse eşiğe ulaşmak için daha çok uyarı gerekir; nöron daha zor ateşler. *All-or-none* ilkesi gereği ateşlerse bile *action potential*'ın büyüklüğü değişmez."
        },
        {
          "t": "1.3-1",
          "q": "The graph shows the average speed at which signals traveled along nerve pathways in the brain and spinal cord in two groups of adults in a study. Which explanation best accounts for the difference?",
          "o": [
            "Multiple sclerosis increases the amount of neurotransmitter released at each synapse.",
            "Neurons of people with multiple sclerosis remain permanently in the refractory period.",
            "Damage to the myelin sheath slows the movement of action potentials along the axon.",
            "Multiple sclerosis destroys dendrites, so neurons cannot receive messages."
          ],
          "a": 2,
          "w": "*Multiple sclerosis*'te bağışıklık sistemi *myelin sheath*'e saldırır. Miyelin, *action potential*'ın aksonda boğumdan boğuma atlayarak hızla ilerlemesini sağlar; kaybolunca iletim yavaşlar. Kalıcı *refractory period* hiç iletim olmaması demektir; grafikte iletim yavaş ama var.",
          "fig": {
            "type": "bar",
            "cats": [
              "Adults without MS",
              "Adults with MS"
            ],
            "series": [
              {
                "name": "Conduction speed",
                "values": [
                  55,
                  30
                ]
              }
            ],
            "ylabel": "Meters per second (example data)"
          }
        },
        {
          "t": "1.3-2",
          "q": "A tumor in the pituitary gland could disrupt growth, the body's stress response, and reproductive hormones all at once. Which statement best explains why one tumor could have such wide-ranging effects?",
          "o": [
            "The pituitary is the brain region that controls balance and coordination.",
            "The pituitary produces all of the body's neurotransmitters.",
            "The pituitary releases hormones that direct other endocrine glands, such as the adrenal glands.",
            "The pituitary is part of the somatic nervous system."
          ],
          "a": 2,
          "w": "*Pituitary gland* \"usta bez\" (*master gland*) diye anılır: *hypothalamus*'tan aldığı sinyallerle büyüme hormonu salar ve *adrenal glands* gibi diğer bezleri yöneten hormonlar gönderir. Denge *cerebellum*'un işidir. *Neurotransmitter*'lar nöronlarda üretilir, bezlerde değil."
        },
        {
          "t": "1.3-2",
          "q": "Sude scrolls on her phone under bright light until 2 a.m. and then has trouble falling asleep. Which hormone's normal nighttime release is most likely being suppressed?",
          "o": [
            "Ghrelin",
            "Adrenaline",
            "Melatonin",
            "Oxytocin"
          ],
          "a": 2,
          "w": "*Melatonin* karanlıkta salgılanır ve vücuda \"gece oldu\" mesajı verir; parlak ışık (özellikle ekranlar) salınımını baskılar. *Adrenaline* uyarılmayı artırır ama ışığın bastırdığı hormon değildir. *Ghrelin* açlık, *oxytocin* bağlanma ile ilgilidir."
        },
        {
          "t": "1.3-3",
          "q": "Cocaine blocks the reuptake of dopamine. Many antipsychotic medications block dopamine receptors. Which statement correctly compares their effects at dopamine synapses?",
          "o": [
            "Both drugs act as antagonists, reducing dopamine's effect.",
            "Cocaine blocks dopamine receptors, while the antipsychotic prevents dopamine reuptake.",
            "Both drugs act as agonists, because both work at the receiving neuron.",
            "Cocaine increases dopamine's effect by keeping it in the synapse, while the antipsychotic decreases dopamine's effect by blocking receptors."
          ],
          "a": 3,
          "w": "Geri alımı engellemek dopamini sinapsta tutar ve etkisini artırır (*agonist* yönlü). Alıcıyı tıkamak dopaminin bağlanmasını engeller (*antagonist*). İlacın nerede etki ettiği değil, iletimi artırıp azalttığı belirleyicidir."
        },
        {
          "t": "1.3-3",
          "q": "Mehmet took prescription opioid painkillers daily for several months after surgery. When he suddenly stopped, he felt restless and anxious, sweated heavily, and became unusually sensitive to pain. Which statement best explains his symptoms?",
          "o": [
            "He is experiencing tolerance, because he now needs a larger dose to feel relief.",
            "His symptoms are caused by REM rebound after months of poor sleep.",
            "He is experiencing withdrawal, because his body adapted to the drug and reacts in the opposite direction when it is removed.",
            "The opioid had been acting as an antagonist, and removing it overstimulated his endorphin receptors."
          ],
          "a": 2,
          "w": "Madde kesilince ortaya çıkan, çoğu kez maddenin etkisinin tersi olan belirtiler *withdrawal*'dır: opioid ağrıyı azaltıp sakinleştirirken kesilince ağrıya duyarlılık ve huzursuzluk gelir. *Tolerance* ilaç kullanılırken dozun artırılması ihtiyacıdır. Opioidler *endorphins*'i taklit eden *agonist*'lerdir."
        },
        {
          "t": "1.4-1",
          "q": "A patient with damage to the thalamus has difficulty processing visual, auditory, and touch information, yet his sense of smell is largely unaffected. Which explanation best accounts for this pattern?",
          "o": [
            "Smell is processed entirely by the cerebellum.",
            "Smell signals reach the cortex without first passing through the thalamus.",
            "The thalamus processes only visual information.",
            "Smell receptors do not need to transduce chemical energy."
          ],
          "a": 1,
          "w": "*Thalamus* duyu bilgilerini korteksin ilgili bölgelerine aktaran istasyondur; tek istisna kokudur (*olfaction*): koku sinyalleri doğrudan koku korteksine ve limbik yapılara gider. Thalamus yalnız görme ile ilgili değildir. Her duyu, koku da dahil, *transduction* ile başlar."
        },
        {
          "t": "1.4-1",
          "q": "After a stroke damages the visual cortex in the left occipital lobe, a patient would most likely have trouble seeing",
          "o": [
            "objects in the left visual field of both eyes",
            "anything at all with the left eye only",
            "colors, but not shapes, in both visual fields",
            "objects in the right visual field of both eyes"
          ],
          "a": 3,
          "w": "Görme yolları çaprazdır (*contralateral*): her iki gözün sağ görme alanı sol *occipital lobe*'a gider. Sol görme korteksi hasar görünce sağ görme alanı kaybolur. \"Yalnız sol göz\" şıkkı gözü görme alanıyla karıştırır: hasar korteksteyse her iki göz etkilenir."
        },
        {
          "t": "1.4-2",
          "q": "A patient speaks fluently, saying things such as \"The table drove happily to the window of sandwiches,\" and he does not seem to understand simple questions. Which area of his brain was most likely damaged?",
          "o": [
            "Broca's area in the left frontal lobe",
            "Wernicke's area in the left temporal lobe",
            "The motor cortex in the right hemisphere",
            "The corpus callosum"
          ],
          "a": 1,
          "w": "Akıcı ama anlamsız konuşma ve anlama güçlüğü *Wernicke's aphasia*'dır (sol *temporal lobe*). *Broca's area* hasarında konuşma kesik ve zorlanarak olur ama anlama büyük ölçüde korunur. Burada akıcılık sorun değil, anlam sorun."
        },
        {
          "t": "1.4-2",
          "q": "A research team wants to know both exactly when and exactly where brain activity changes when bilingual students switch from Turkish to English. Which research plan is best?",
          "o": [
            "Combine EEG to capture the timing with fMRI to capture the location.",
            "Use only EEG, because it shows the precise location of activity.",
            "Use only fMRI, because it measures timing within milliseconds.",
            "Lesion a language area in some healthy students and compare them with others."
          ],
          "a": 0,
          "w": "*EEG* zamanlamada çok iyi ama yeri kabaca gösterir; *fMRI* yeri ayrıntılı gösterir ama kan akışı yavaş değiştiği için zamanlaması geride kalır. İki soruyu birden cevaplamak için yöntemler birleştirilir. Sağlıklı insanlarda *lesioning* etik değildir."
        },
        {
          "t": "1.5",
          "q": "For three nights, researchers woke participants every time they entered REM sleep. On the fourth night, participants slept without interruption. Based on the results in the table, which conclusion is best supported?",
          "o": [
            "After being deprived of REM, participants spent more of the night in REM, an effect known as REM rebound.",
            "After REM deprivation, NREM 3 sleep replaced REM sleep on the recovery night.",
            "Being deprived of REM sleep caused participants to develop narcolepsy.",
            "The deprivation nights reset participants' circadian rhythms by several hours."
          ],
          "a": 0,
          "w": "REM'den mahrum kalan kişiler ilk fırsatta normalden fazla REM'e girer: *REM rebound* (yüzde 22'den 33'e). Tablo NREM 3'ü ölçmüyor ve REM'in azaldığını değil arttığını gösteriyor. Üç gecelik uyandırma *narcolepsy* gibi süreğen bir bozukluğa yol açmaz.",
          "fig": {
            "type": "table",
            "head": [
              "Night",
              "Percent of sleep time in REM"
            ],
            "rows": [
              [
                "Typical night before the study",
                "22%"
              ],
              [
                "Recovery night after 3 nights of REM deprivation",
                "33%"
              ]
            ],
            "caption": "Example data"
          }
        },
        {
          "t": "1.5",
          "q": "Mr. Demir, age 68, punches and kicks in his sleep. When his wife wakes him, he describes a vivid dream in which he was fighting off an attacker. Which disorder best fits this description?",
          "o": [
            "Sleepwalking, which usually occurs during NREM 3 sleep",
            "REM sleep behavior disorder, in which the muscle paralysis that normally occurs during REM is absent",
            "Narcolepsy, in which a person suddenly falls asleep during the day",
            "Sleep apnea, in which breathing repeatedly stops during sleep"
          ],
          "a": 1,
          "w": "Rüyayı canlandırmak ve uyandırılınca rüyayı hatırlamak *REM sleep behavior disorder*'ı gösterir: normalde REM'de kaslar felçlidir, bu bozuklukta değildir. *Sleepwalking* *NREM 3*'te olur ve kişi genellikle rüya bildirmez ve olanı hatırlamaz. Çeldiricinin tuzağı \"uykuda hareket = uyurgezerlik\" sanmaktır."
        },
        {
          "t": "1.6-1",
          "q": "A lifeguard is told that a young swimmer may be missing. For the next hour she reports many more 'possible swimmers in trouble,' including several that turn out to be floating towels. Her change in responses is best explained by the idea that",
          "o": [
            "her absolute threshold for vision has physically dropped",
            "she is experiencing sensory adaptation to the bright water",
            "Weber's law predicts that she will detect fewer swimmers",
            "her expectations and motivation shifted her decision criterion, increasing both hits and false alarms"
          ],
          "a": 3,
          "w": "*Signal detection theory*: belirsiz bir sinyali fark etmek yalnız duyulara değil, beklenti ve motivasyona da bağlıdır. Kaçırmanın bedeli büyüyünce kişi daha kolay \"var\" der; gerçek vakaları yakalar (*hit*) ama havluları da \"yüzücü\" sanar (*false alarm*). Gözlerinin fiziksel eşiği değişmemiştir."
        },
        {
          "t": "1.6-1",
          "q": "Which choice correctly identifies the sense involved in each situation? (1) With her eyes closed, a gymnast knows that her right arm is raised above her head. (2) After spinning on a playground ride, Can feels dizzy and stumbles.",
          "o": [
            "(1) Vestibular sense; (2) kinesthesis",
            "(1) Kinesthesis; (2) vestibular sense",
            "(1) Kinesthesis; (2) sensory adaptation of touch",
            "(1) Gate-control; (2) vestibular sense"
          ],
          "a": 1,
          "w": "*Kinesthesis* vücut parçalarının konumunu ve hareketini kas ve eklemlerden algılar: kolunun yukarıda olduğunu bilmek. *Vestibular sense* iç kulaktaki yapılarla denge ve baş hareketini algılar: dönünce baş dönmesi. İkisi en sık karıştırılan beden duyularıdır."
        },
        {
          "t": "1.6-2",
          "q": "A man lacks functioning long-wavelength (red-sensitive) cones and has trouble telling red from green. Which theory most directly explains why missing one type of cone produces this difficulty?",
          "o": [
            "Opponent-process theory, because it explains why afterimages appear",
            "Place theory, because different colors stimulate different places on the cochlea",
            "Trichromatic theory, because color vision depends on comparing the activity of three types of cones",
            "Volley theory, because groups of cones fire in alternation"
          ],
          "a": 2,
          "w": "*Trichromatic theory* renk görmenin üç koni tipinin (kısa, orta, uzun dalga boyu) etkinliğinin karşılaştırılmasına dayandığını söyler; bir tip eksikse bazı renkler ayırt edilemez. *Opponent-process* ard görüntüleri açıklar. *Place* ve *volley theory* işitmeye aittir."
        },
        {
          "t": "1.6-2",
          "q": "Ayla can easily tell that a car horn is coming from her right, but she has trouble telling whether a sound is coming from directly in front of her or directly behind her. Which explanation best accounts for this difficulty?",
          "o": [
            "A sound from directly in front or behind reaches both ears at the same time and with the same intensity.",
            "The cochlea cannot transduce sounds that come from in front of the head.",
            "Frequency theory applies only to sounds that come from behind the head.",
            "Sounds from the front and back stimulate only the left ear."
          ],
          "a": 0,
          "w": "Beyin sesin yönünü iki kulağa ulaşma zamanı ve şiddeti arasındaki farktan çıkarır (*sound localization*). Sağdan gelen ses sağ kulağa biraz önce ve daha yüksek ulaşır. Tam önden ya da arkadan gelen seste bu fark yoktur, bu yüzden ikisi karıştırılır."
        }
      ]
    },
    {
      "no": 5,
      "level": "Çok zor",
      "minutes": 35,
      "questions": [
        {
          "t": "1.1",
          "q": "A researcher finds that the heritability of a test score is about .60 within each of two communities. Community A's average score is higher than Community B's, and the researcher concludes that the difference between the communities must be genetic. Why is this conclusion flawed?",
          "o": [
            "Heritability describes variation within the group studied; it cannot by itself explain a difference between groups that may live in different environments.",
            "A heritability of .60 means that 60 percent of each person's score is genetic, so the remaining 40 percent explains the difference.",
            "Heritability can be estimated only with adoption studies, not with community samples.",
            "A heritability of .60 is too low to show any genetic influence on the trait."
          ],
          "a": 0,
          "w": "*Heritability* yalnız ölçüldüğü grubun içindeki farklılığı anlatır. İki grup arasındaki ortalama farkı tamamen farklı çevreler (okul, beslenme, fırsat) yaratıyor olabilir; grup içi yüksek kalıtım bunu dışlamaz. Bir tarladaki tohumlar genetik olarak farklı olsa bile iki tarla arasındaki fark gübreden kaynaklanabilir."
        },
        {
          "t": "1.1",
          "q": "Critics of a twin study point out that identical twins are often treated more alike by parents and friends than fraternal twins are, for example by being dressed alike and enrolled in the same activities. If this criticism is correct, the study would most likely",
          "o": [
            "underestimate the influence of genes, because identical twins share fewer genes than fraternal twins",
            "overestimate the influence of genes, because some of the identical twins' extra similarity may come from more similar environments",
            "show that fraternal twins share more genes than identical twins",
            "find no difference in similarity between the two types of twins"
          ],
          "a": 1,
          "w": "*Twin study* mantığı, iki ikiz tipinin çevresinin eşit derecede benzer olduğunu varsayar. *Identical twins* daha benzer muamele görüyorsa, ekstra benzerliklerinin bir kısmı çevreden gelir ama genlere yazılır: genetik etki olduğundan büyük görünür. Bu, bir *confounding variable* örneğidir."
        },
        {
          "t": "1.2",
          "q": "Researchers measure participants' pupil size while showing them frightening and neutral photos, and they use pupil size as a measure of emotional arousal. Pupil size is a useful measure for this purpose mainly because",
          "o": [
            "pupil size is controlled by the somatic nervous system, so participants can accurately report it",
            "pupils constrict during fear, showing parasympathetic activity",
            "pupil size measures each participant's absolute threshold for light",
            "pupil dilation reflects sympathetic arousal that participants cannot easily control on purpose"
          ],
          "a": 3,
          "w": "Göz bebeği *autonomic nervous system* tarafından yönetilir; korku anında *sympathetic* uyarılma onu büyütür. Kişi bunu bilerek kontrol edemediği için öz bildirimden daha az çarpıtılabilir bir ölçüdür. Korkuda göz bebeği daralmaz, büyür; daralma *parasympathetic* tepkidir."
        },
        {
          "t": "1.2",
          "q": "A researcher traces a neuron whose cell body lies in the spinal cord and whose axon carries signals out to a muscle in the leg, causing the muscle to contract when a person decides to kick. This neuron is best described as",
          "o": [
            "an afferent neuron that carries information toward the brain",
            "an interneuron located entirely in the peripheral nervous system",
            "an efferent neuron that is part of the somatic nervous system",
            "a sensory neuron that is part of the autonomic nervous system"
          ],
          "a": 2,
          "w": "Sinyali merkezden (omurilik) kasa taşıyan nöron *efferent* yani *motor neuron*'dur; istemli bir tekmeyle iskelet kasını çalıştırdığı için *somatic nervous system*'e aittir. *Afferent* nöronlar bilgiyi beyne doğru taşır. *Interneuron*'lar *CNS* içindedir ve kaslara uzanmaz."
        },
        {
          "t": "1.3-1",
          "q": "While recording from neurons, a researcher finds two patterns. First, increasing the strength of a stimulus changes how often a neuron fires but not the size of each action potential. Second, signals travel much faster along axon A than along axon B, even though the two axons are the same diameter. Which explanation accounts for both findings?",
          "o": [
            "Stronger stimuli produce larger action potentials, and axon B is more heavily myelinated than axon A.",
            "Action potentials are all-or-none, and axon A is myelinated while axon B is not.",
            "Axon A is in its refractory period, and axon B follows the all-or-none principle.",
            "Stronger stimuli speed up reuptake, and axon A has more dendrites."
          ],
          "a": 1,
          "w": "Uyaran şiddeti ateşlemenin sıklığını değiştirir, büyüklüğünü değil: *all-or-none*. Aynı kalınlıktaki iki akson arasında hız farkının en iyi açıklaması *myelin sheath*'tir; miyelinli akson çok daha hızlı iletir. *Refractory period*'daki bir akson hızlı iletmez, hiç iletmez."
        },
        {
          "t": "1.3-1",
          "q": "A toxin prevents a neuron from releasing neurotransmitters from its terminal buttons, although action potentials still travel down its axon normally. What is the most likely result?",
          "o": [
            "Action potentials stop traveling down the axon.",
            "The receiving neuron fires more often because reuptake stops.",
            "The signal reaches the terminal buttons but is not passed across the synapse to the next neuron.",
            "The myelin sheath around the axon breaks down."
          ],
          "a": 2,
          "w": "Nöron içindeki iletim elektrikseldir (*action potential*), nöronlar arası iletim kimyasaldır (*neurotransmitter*). Elektriksel sinyal uca ulaşır ama kimyasal salınmazsa mesaj *synapse*'i geçemez. Salınan madde yoksa geri alınacak madde de yoktur; alıcı nöron daha sık ateşlemez."
        },
        {
          "t": "1.3-2",
          "q": "In a study, researchers compared daily food intake in normal mice, mice unable to produce leptin, and leptin-deficient mice that received daily leptin injections. Which conclusion is best supported by the results in the graph?",
          "o": [
            "Leptin signals fullness, reducing food intake.",
            "Leptin increases hunger, so mice without it eat less.",
            "Differences in ghrelin levels caused the differences in food intake.",
            "Leptin acts as a neurotransmitter released into synapses."
          ],
          "a": 0,
          "w": "Leptin üretemeyen fareler çok daha fazla yiyor, leptin enjekte edilince yiyecek miktarı normale dönüyor; leptinin değiştirildiği bu deneysel tasarım tokluk sinyali verdiğini destekler. *Ghrelin* ölçülmedi, bu yüzden sonuç ona dayanamaz. *Leptin* yağ dokusundan kana salınan bir hormondur, *neurotransmitter* değil.",
          "fig": {
            "type": "bar",
            "cats": [
              "Normal mice",
              "Leptin-deficient mice",
              "Leptin-deficient + leptin injections"
            ],
            "series": [
              {
                "name": "Food intake",
                "values": [
                  4,
                  7,
                  4.2
                ]
              }
            ],
            "ylabel": "Grams of food per day (example data)"
          }
        },
        {
          "t": "1.3-2",
          "q": "Five minutes after nearly being hit by a car, Burcu knows she is safe, yet her heart is still pounding and her hands are shaking. Which explanation best accounts for why the arousal lasts so long?",
          "o": [
            "Her parasympathetic nervous system has permanently stopped working.",
            "Her neurons are stuck in their refractory period.",
            "Her pituitary gland is releasing large amounts of melatonin.",
            "Adrenaline released into the bloodstream by the adrenal glands continues to act after the neural alarm has ended."
          ],
          "a": 3,
          "w": "Sinir sistemi alarmı milisaniyede verir ve hızla kapatır; ama *sympathetic* sistemin uyardığı *adrenal glands* kana *adrenaline* salar ve hormon kanda bir süre kalır. Bu, *endocrine system*'in yavaş ama uzun süren etkisinin klasik örneğidir. *Refractory period* milisaniyeler sürer; dakikalarca süren bir tepkiyi açıklamaz."
        },
        {
          "t": "1.3-3",
          "q": "Participants rated the pain of a standard laboratory heat stimulus under four conditions. Based on the results in the table, which conclusion is best supported?",
          "o": [
            "Naloxone is an opioid agonist that relieves pain on its own.",
            "Morphine relieves pain by blocking the reuptake of substance P.",
            "The placebo results show that morphine has no real effect on pain.",
            "Naloxone blocks morphine's pain-relieving effect, consistent with naloxone acting as an antagonist at the same receptors."
          ],
          "a": 3,
          "w": "Morfin tek başına ağrıyı 7'den 3'e düşürüyor; nalokson eklenince bu etki kayboluyor (7). Nalokson tek başına ağrıyı azaltmıyor, yani *agonist* değil; morfinin bağlandığı opioid alıcılarını tıkayan bir *antagonist* gibi davranıyor. Plasebo grubu morfinin etkisinin gerçek olduğunu gösterir, tersini değil.",
          "fig": {
            "type": "table",
            "head": [
              "Condition",
              "Mean pain rating (0–10)"
            ],
            "rows": [
              [
                "Placebo",
                7
              ],
              [
                "Morphine",
                3
              ],
              [
                "Morphine + naloxone",
                7
              ],
              [
                "Naloxone alone",
                7.5
              ]
            ],
            "caption": "Example data"
          }
        },
        {
          "t": "1.3-3",
          "q": "LSD has a chemical structure similar to serotonin, and it binds to certain serotonin receptors and activates them, producing distorted perceptions and vivid visual experiences. Based on this description, LSD is best classified as",
          "o": [
            "a serotonin antagonist and a depressant",
            "a serotonin reuptake inhibitor and a stimulant",
            "a serotonin agonist and a hallucinogen",
            "a dopamine antagonist and an opioid"
          ],
          "a": 2,
          "w": "Alıcıya bağlanıp onu etkinleştirmek *agonist* tanımıdır; algıyı bozan, görsel deneyimler yaratan madde *hallucinogen*'dir. Açıklamada geri alımdan söz edilmiyor, alıcının etkinleştirilmesinden söz ediliyor. Sınavda iki ayrı soru vardır: mekanizma (agonist/antagonist) ve sınıf (stimulant/depressant/hallucinogen/opioid)."
        },
        {
          "t": "1.4-1",
          "q": "In an animal study, monkeys with lesions to a particular brain structure calmly approached and handled rubber snakes, while monkeys without lesions avoided them. Which conclusion is best supported?",
          "o": [
            "The amygdala plays an important role in fear responses.",
            "The hippocampus stores the monkeys' memories of what snakes look like.",
            "The cerebellum coordinates the movements used to avoid danger.",
            "The thalamus is the brain's only center for emotion."
          ],
          "a": 0,
          "w": "Korkulacak bir uyarana korkusuzca yaklaşmak, korku tepkisinde rol oynayan *amygdala*'nın hasarına işaret eder. *Lesioning* bir bölgeyi bozup sonucu gözlediği için bölgenin o işlev için gerekli olduğunu gösterir. Maymunlar yılandan uzaklaşabiliyor ama uzaklaşmak istemiyor; sorun hareket (*cerebellum*) değil, duygu."
        },
        {
          "t": "1.4-1",
          "q": "Maps of the motor cortex show that far more cortical area is devoted to the fingers and lips than to the back, even though the back is a much larger body part. Which explanation is best?",
          "o": [
            "Larger body parts receive more cortical area.",
            "The back is controlled only by the cerebellum, not by the cortex.",
            "The fingers and lips are each controlled equally by both hemispheres.",
            "Body parts that require precise, fine-grained control receive more cortical area."
          ],
          "a": 3,
          "w": "*Motor cortex*'te bir bölgenin aldığı alan boyutuna değil, gereken kontrolün inceliğine bağlıdır: parmaklar ve dudaklar çok hassas hareket eder, bu yüzden büyük alan kaplar. Sırt kasları da kortekste temsil edilir, yalnızca daha az alanla. Hareket kontrolü yine çaprazdır (*contralateral*)."
        },
        {
          "t": "1.4-2",
          "q": "A split-brain patient stares at a central dot while the word HAT is flashed to the right of the dot and the word BALL is flashed to the left of the dot at the same time. She is asked to say what she saw and then to pick up the matching object with her left hand from items hidden from view. What would she most likely do?",
          "o": [
            "Say \"ball\" and pick up the ball with her left hand",
            "Say \"hat\" and pick up the ball with her left hand",
            "Say \"hat\" and pick up the hat with her left hand",
            "Say nothing and pick up both objects with her left hand"
          ],
          "a": 1,
          "w": "Sağ görme alanı (HAT) sol yarım küreye gider; konuşma çoğu insanda soldadır, bu yüzden hasta \"şapka\" der. Sol görme alanı (BALL) sağ yarım küreye gider ve sağ yarım küre sol eli yönetir: sol el topu seçer. *Corpus callosum* kesik olduğu için iki yarım küre birbirinin gördüğünü bilmez."
        },
        {
          "t": "1.4-2",
          "q": "An fMRI study finds that the hippocampus becomes active while people study new material. A separate study finds that rats with lesions to the hippocampus fail to learn a maze that control rats learn easily. Why does the lesion study provide stronger evidence that the hippocampus is necessary for this kind of learning?",
          "o": [
            "Lesioning manipulates the brain area and observes the effect, while fMRI shows only that activity occurs alongside a task.",
            "Lesion studies always use larger samples than fMRI studies.",
            "fMRI cannot detect activity in deep structures such as the hippocampus.",
            "Lesion studies have better timing resolution than EEG."
          ],
          "a": 0,
          "w": "*fMRI* bir bölgenin görev sırasında etkin olduğunu gösterir; bu bir ilişkidir, bölge olmadan öğrenmenin olmayacağını kanıtlamaz. *Lesioning* bölgeyi bozar ve sonucu kontrol grubuyla karşılaştırır, bu yüzden \"gerekli mi?\" sorusuna daha doğrudan cevap verir. fMRI derin yapıları görebilir; zamanlama karşılaştırması ise konu dışıdır."
        },
        {
          "t": "1.5",
          "q": "A researcher surveyed 200 students about their usual nightly sleep and measured their reaction times on a computer task. The results are shown in the graph. Which conclusion is most appropriate?",
          "o": [
            "Sleeping fewer than 5 hours causes students' reaction times to slow.",
            "Sleeping 9 or more hours causes the fastest reaction times.",
            "Reaction speed determines how many hours students choose to sleep.",
            "In this sample, less sleep was associated with slower reaction times, but the design cannot show that sleep loss caused the slowing."
          ],
          "a": 3,
          "w": "Bu bir anket, yani *correlational* bir çalışma: araştırmacı uyku süresini değiştirmedi. Az uyumak yavaş tepkiyle ilişkili, ama stres ya da ders yükü gibi bir üçüncü değişken ikisini birden etkiliyor olabilir. Ters yönlü neden iddiası da aynı şekilde bu veriyle kanıtlanamaz; ayrıca 9+ saat grubu 7–8 saatten hızlı değil.",
          "fig": {
            "type": "bar",
            "cats": [
              "Under 5 h",
              "5–6 h",
              "7–8 h",
              "9+ h"
            ],
            "series": [
              {
                "name": "Mean reaction time",
                "values": [
                  420,
                  360,
                  310,
                  315
                ]
              }
            ],
            "ylabel": "Milliseconds (example data)"
          }
        },
        {
          "t": "1.5",
          "q": "A sleep-lab participant is awakened twice. The first time, one hour after falling asleep, her EEG shows large, slow waves; she is very hard to wake and confused. The second time, seven hours after falling asleep, her eyes are darting under her eyelids and her EEG shows fast, irregular waves. Which statement best explains the two awakenings?",
          "o": [
            "The first awakening was from NREM 3, which dominates early in the night; the second was from REM, which lengthens toward morning.",
            "The first awakening was from REM; the second was from NREM 3.",
            "Both awakenings were from NREM 1, the lightest stage of sleep.",
            "The first awakening was from NREM 2, because slow waves indicate light sleep."
          ],
          "a": 0,
          "w": "Büyük ve yavaş *delta waves*, uyandırma güçlüğü ve sersemlik *NREM 3*'ü gösterir; derin uyku gecenin başında yoğundur. Hızlı göz hareketleri ve uyanıklığa benzeyen hızlı dalgalar *REM*'dir; REM dönemleri sabaha doğru uzar. Yavaş dalgalar hafif değil derin uykunun işaretidir."
        },
        {
          "t": "1.6-1",
          "q": "In a weight-discrimination study, the just noticeable difference for a 100-gram weight was 2 grams, and for a 200-gram weight it was 4 grams. The same participant could not tell the difference between a 300-gram weight and a 304-gram weight. Why is this result consistent with Weber's law?",
          "o": [
            "A 4-gram change is below the absolute threshold for detecting any weight.",
            "The JND for a 300-gram weight should be about 6 grams, so a 4-gram change is too small to notice.",
            "The participant had adapted to the weights, so no differences could be detected.",
            "Weber's law states that the JND is always 2 grams for weight."
          ],
          "a": 1,
          "w": "Tablodaki oran sabit: 2/100 = 4/200 = yüzde 2. *Weber's law*'a göre 300 gram için *JND* yaklaşık 6 gramdır; 4 gramlık fark eşiğin altında kalır. *Absolute threshold* hiç uyaran olup olmadığını fark etmektir; burada 300 gram zaten hissediliyor, soru iki ağırlık arasındaki farkla ilgili.",
          "fig": {
            "type": "table",
            "head": [
              "Standard weight",
              "Just noticeable difference"
            ],
            "rows": [
              [
                "100 g",
                "2 g"
              ],
              [
                "200 g",
                "4 g"
              ]
            ],
            "caption": "Example data"
          }
        },
        {
          "t": "1.6-1",
          "q": "Which of the following is an example of synesthesia rather than ordinary sensory interaction?",
          "o": [
            "Food tastes bland to a person who has a stuffy nose.",
            "A movie actor's voice seems to come from his mouth on screen rather than from the speakers.",
            "Every time Bora hears a trumpet play a high note, he experiences a bright orange color.",
            "A shot feels more painful when a child watches the needle go in."
          ],
          "a": 2,
          "w": "*Synesthesia*'da bir duyunun uyarılması, kişide tutarlı biçimde başka bir duyu deneyimi doğurur (sesi renk olarak \"görmek\"); bu az sayıda insanda görülür. Öteki şıklar herkeste olan *sensory interaction* örnekleridir: koku tadı, görme sesin yerini, görme ağrıyı etkiler."
        },
        {
          "t": "1.6-2",
          "q": "After damage to her primary visual cortex, a patient reports that she sees nothing on her left side. Yet when asked to guess, she reaches toward objects placed on her left far more accurately than chance would predict. This pattern is best described as",
          "o": [
            "prosopagnosia",
            "blindsight",
            "damage to the blind spot",
            "color vision deficiency"
          ],
          "a": 1,
          "w": "*Blindsight*: bilinçli görme kaybolmuştur ama görsel bilgi korteks dışındaki yollarla işlenmeye devam eder ve davranışı yönlendirir. *Prosopagnosia* yüzleri tanıyamamaktır. *Blind spot* her gözde olan normal bir boşluktur; korteks hasarıyla ilgisi yoktur."
        },
        {
          "t": "1.6-2",
          "q": "Individual auditory nerve fibers can fire only about 1,000 times per second, yet listeners can hear a 3,000 Hz tone, and recordings show that groups of fibers together produce 3,000 impulses per second by taking turns. This finding most directly supports",
          "o": [
            "place theory",
            "frequency theory alone",
            "volley theory",
            "trichromatic theory"
          ],
          "a": 2,
          "w": "Tek bir lif saniyede 3.000 kez ateşleyemez; lifler sırayla (nöbetleşe) ateşleyerek toplamda tonun frekansını yakalar: *volley theory*. Bu, *frequency theory*'nin tek başına açıklayamadığı yüksek frekansları açıklar. *Place theory* titreşimin *cochlea*'daki yeriyle ilgilidir; bu bulgu ateşleme zamanlamasıyla ilgili."
        }
      ]
    }
  ]
};
