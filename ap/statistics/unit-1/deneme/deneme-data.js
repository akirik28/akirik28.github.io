/* Bu dosya üretilir: ap-videolar/tools/build-deneme-data.mjs (elle düzenleme; kaynak: tools/out/deneme-stat-u1.json) */
window.DENEME = {
  "store": "stat-u1:v1:",
  "course": "AP Statistics",
  "unit": "Unit 1 — Exploring One-Variable Data and Collecting Data",
  "topics": {
    "1A": "Veriyle Tanış",
    "1B": "Kategorik Veri",
    "1C-1": "Dotplot ve Dağılımı Anlatmak",
    "1C-2": "Stemplot ve Histogram",
    "1D-1": "Merkez: Mean ve Median",
    "1D-2": "Yayılım: Range, SD, IQR",
    "1D-3": "Outlier ve Boxplot",
    "1D-4": "Percentile ve z-score",
    "1D-5": "Veriyi Dönüştürmek",
    "1E": "Dağılımları Karşılaştırmak",
    "1F-1": "Deney mi, Gözlem mi?",
    "1F-2": "Investigative Question ve Sonucun Kapsamı",
    "1G-1": "Rastgele Örnekleme Yöntemleri",
    "1G-2": "Kötü Örnekleme ve Bias",
    "1H-1": "İyi Deneyin Dört İlkesi",
    "1H-2": "Blocking ve Matched Pairs",
    "1H-3": "Statistically Significant ve Çıkarımın Kapsamı"
  },
  "tests": [
    {
      "no": 1,
      "level": "Isınma",
      "minutes": 20,
      "questions": [
        {
          "t": "1A",
          "q": "A volleyball coach keeps a record for each player on the team. Part of the record is shown in the table. Which of the variables in the table is categorical?",
          "o": [
            "Height (cm)",
            "Aces served",
            "Jersey number",
            "Minutes played"
          ],
          "a": 2,
          "w": "Jersey number sayı gibi görünse de yalnızca oyuncuyu etiketler; ortalamasını almak anlamsızdır, bu yüzden categorical değişkendir. Height, aces served ve minutes played ölçülen ya da sayılan niceliklerdir (quantitative). Tuzak: 'sayı olan her şey quantitative' sanmak.",
          "fig": {
            "type": "table",
            "head": [
              "Player",
              "Jersey number",
              "Height (cm)",
              "Aces served",
              "Minutes played"
            ],
            "rows": [
              [
                "Defne",
                7,
                178,
                12,
                310
              ],
              [
                "Ece",
                11,
                184,
                5,
                275
              ],
              [
                "Selin",
                4,
                171,
                9,
                342
              ]
            ]
          }
        },
        {
          "t": "1F-1",
          "q": "A researcher asks 300 teenagers how many hours per day they use social media and how many hours they sleep on a typical night. The researcher then compares the sleep of heavy users and light users. Which of the following best describes this study?",
          "o": [
            "An experiment, because two variables were recorded for each teenager",
            "An observational study, because no treatment was imposed on the teenagers",
            "An experiment, because heavy users were compared with light users",
            "A census, because every one of the 300 teenagers answered the questions"
          ],
          "a": 1,
          "w": "Araştırmacı kimseye 'şu kadar sosyal medya kullan' demedi; yalnızca olanı kaydetti. Treatment uygulanmadığı için bu bir observational study'dir. İki grubu karşılaştırmak tek başına experiment yapmaz; experiment için treatment'ı araştırmacının ataması gerekir."
        },
        {
          "t": "1A",
          "q": "A school has 1,240 students. To estimate the mean number of hours that students at the school sleep on school nights, a counselor surveys 80 randomly selected students. Which of the following is the sample?",
          "o": [
            "The 80 students who were surveyed",
            "The 1,240 students at the school",
            "The mean number of hours of sleep",
            "All high school students in the country"
          ],
          "a": 0,
          "w": "Sample, hakkında gerçekten veri toplanan alt gruptur: ankete katılan 80 öğrenci. 1.240 öğrencinin tamamı population'dır; en çok karıştırılan seçenek budur. Mean hours of sleep ise bir grup değil, hesaplanan bir özet değerdir."
        },
        {
          "t": "1B",
          "q": "The bar chart shows the favorite music genre of 200 students at a school. What percent of the students chose rock?",
          "o": [
            "9%",
            "18%",
            "24%",
            "36%"
          ],
          "a": 1,
          "w": "Rock çubuğunun yüksekliği 36; relative frequency = 36/200 = 0.18 = %18. %36 seçeneği frequency'yi (36 öğrenci) doğrudan yüzde sanmaktan gelir; toplam 100 değil 200 olduğu için bölmek gerekir.",
          "fig": {
            "type": "bar",
            "cats": [
              "Pop",
              "Hip-hop",
              "Rock",
              "Electronic",
              "Other"
            ],
            "series": [
              {
                "name": "Students",
                "values": [
                  70,
                  50,
                  36,
                  24,
                  20
                ]
              }
            ],
            "ylabel": "Number of students"
          }
        },
        {
          "t": "1F-1",
          "q": "A swim coach randomly assigns 30 swimmers to one of two warm-up routines, dynamic stretching or easy laps. After the warm-up, each swimmer's 50-meter freestyle time is recorded. What is the explanatory variable?",
          "o": [
            "The type of warm-up routine",
            "The 50-meter freestyle time",
            "The 30 swimmers in the study",
            "The number of swimmers per group"
          ],
          "a": 0,
          "w": "Explanatory variable, araştırmacının değiştirdiği ve sonucu açıklaması beklenen değişkendir: warm-up routine türü. 50-meter time bunun sonucunda ölçülen response variable'dır; en sık karıştırılan budur. 30 yüzücü değişken değil, experimental units'tir (subjects)."
        },
        {
          "t": "1C-1",
          "q": "The dotplot shows the number of goals scored by a football team in each of its 18 matches this season. Which of the following best describes the shape of the distribution?",
          "o": [
            "Roughly symmetric",
            "Skewed to the left",
            "Approximately uniform",
            "Skewed to the right"
          ],
          "a": 3,
          "w": "Değerlerin çoğu 0–2 arasında toplanmış, kuyruk ise büyük değerlere (4 ve 6 gol) doğru uzanıyor; kuyruk sağda olduğu için dağılım skewed to the right. 'Skewed left' tuzağı, yığılmanın solda olmasına bakmaktan gelir: yönü yığılma değil kuyruk belirler.",
          "fig": {
            "type": "dot",
            "values": [
              0,
              0,
              0,
              0,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              2,
              2,
              2,
              3,
              3,
              4,
              6
            ],
            "label": "Goals scored in a match"
          }
        },
        {
          "t": "1F-2",
          "q": "A student writes the investigative question: \"Is the mean number of minutes per day spent on social media greater than 120 for all students at Bosphorus High School?\" What is the variable of interest in this question?",
          "o": [
            "All students at Bosphorus High School",
            "The mean of 120 minutes per day",
            "Minutes per day spent on social media",
            "Whether a student attends the school"
          ],
          "a": 2,
          "w": "Variable of interest her bireyde ölçülen şeydir: bir öğrencinin günde sosyal medyada geçirdiği dakika. 'All students at Bosphorus High School' population'dır; 'mean … greater than 120' ise parameter'ı ve yönünü (type of inference) verir, değişkeni değil."
        },
        {
          "t": "1C-2",
          "q": "The stemplot shows the scores of 15 students on a 50-point vocabulary quiz. What is the median score?",
          "o": [
            "34",
            "38",
            "39",
            "40"
          ],
          "a": 3,
          "w": "n = 15 olduğu için median sıralı listedeki 8. değerdir. Sayarak: 28, 29, 31, 34, 34, 37, 38, 40 → median = 40. 38 seçeneği bir değer eksik saymaktan (7. değer) gelir.",
          "fig": {
            "type": "stem",
            "stems": [
              {
                "s": "2",
                "leaves": "8 9"
              },
              {
                "s": "3",
                "leaves": "1 4 4 7 8"
              },
              {
                "s": "4",
                "leaves": "0 2 2 5 6 9"
              },
              {
                "s": "5",
                "leaves": "0 0"
              }
            ],
            "key": "2|8 = 28 points"
          }
        },
        {
          "t": "1C-2",
          "q": "The histogram shows the travel time to school, in minutes, for 40 students. Each interval includes its left endpoint but not its right endpoint. How many of the students have a travel time of at least 30 minutes?",
          "o": [
            "12",
            "18",
            "22",
            "28"
          ],
          "a": 0,
          "w": "'At least 30' = 30–40, 40–50 ve 50–60 aralıkları: 7 + 3 + 2 = 12 öğrenci. 28 seçeneği 30 dakikadan az olanları (6 + 12 + 10) saymaktır; soru tam tersini istiyor.",
          "fig": {
            "type": "hist",
            "bins": [
              {
                "from": 0,
                "to": 10,
                "n": 6
              },
              {
                "from": 10,
                "to": 20,
                "n": 12
              },
              {
                "from": 20,
                "to": 30,
                "n": 10
              },
              {
                "from": 30,
                "to": 40,
                "n": 7
              },
              {
                "from": 40,
                "to": 50,
                "n": 3
              },
              {
                "from": 50,
                "to": 60,
                "n": 2
              }
            ],
            "label": "Travel time to school (min)",
            "ylabel": "Frequency"
          }
        },
        {
          "t": "1G-1",
          "q": "A travel agency has an alphabetical list of its 2,000 customers. The agency randomly chooses one of the first 40 customers on the list and then selects every 40th customer after that one. Which sampling method is this?",
          "o": [
            "Simple random sample",
            "Stratified random sample",
            "Cluster random sample",
            "Systematic random sample"
          ],
          "a": 3,
          "w": "Rastgele bir başlangıç noktası + listeden her k'ıncı kişi (burada k = 40) = systematic random sample. SRS değildir, çünkü her olası 50 kişilik grup seçilemez: listede art arda duran iki müşteri aynı sample'a asla giremez."
        },
        {
          "t": "1D-1",
          "q": "The numbers of songs on eight playlists are 12, 25, 18, 30, 15, 22, 40, and 18. What is the median number of songs?",
          "o": [
            "15",
            "18",
            "20",
            "22.5"
          ],
          "a": 2,
          "w": "Önce sırala: 12, 15, 18, 18, 22, 25, 30, 40. n = 8 çift olduğu için median ortadaki iki değerin ortalamasıdır: (18 + 22)/2 = 20. 22.5 seçeneği mean'dir (180/8); aynı sayı, veriyi sıralamadan ortadaki iki değeri (30 ve 15) almakla da çıkar."
        },
        {
          "t": "1G-1",
          "q": "A stadium has 60 seating sections. After a match, the club randomly selects 4 of the sections and surveys every fan seated in those 4 sections. Which sampling method is this?",
          "o": [
            "Stratified random sample",
            "Cluster random sample",
            "Simple random sample",
            "Convenience sample"
          ],
          "a": 1,
          "w": "Gruplar (sections) rastgele seçiliyor ve seçilen grupların içindeki herkes alınıyor: cluster random sample. Stratified olsaydı 60 bölümün her birinden rastgele birkaç taraftar seçilirdi; fark, 'bütün gruplardan biraz' mı yoksa 'birkaç grubun tamamı' mı olduğudur."
        },
        {
          "t": "1D-2",
          "q": "The numbers of new followers gained last week by seven student club accounts are 14, 9, 31, 22, 9, 17, and 45. What is the range of the numbers of new followers?",
          "o": [
            "21",
            "31",
            "36",
            "From 9 to 45"
          ],
          "a": 2,
          "w": "Range = max − min = 45 − 9 = 36; range tek bir sayıdır. 'From 9 to 45' en çok yapılan hatadır: bu bir aralık tarifidir, range değil. 31 listedeki son ve ilk değeri (45 − 14) çıkarmaktan, 21 ise mean'den gelir."
        },
        {
          "t": "1G-2",
          "q": "A sports reporter wants to know what all fans of a basketball club think of the new coach. After a home win, the reporter interviews the first 40 fans who walk past the press area. Which of the following best describes this sample?",
          "o": [
            "Convenience sample",
            "Simple random sample",
            "Systematic random sample",
            "Stratified random sample"
          ],
          "a": 0,
          "w": "Muhabir yalnızca en kolay ulaştığı kişileri (yanından ilk geçen 40 taraftar) seçti; işin içinde rastgelelik yok, bu bir convenience sample. 'İlk 40' ifadesi systematic gibi görünebilir ama systematic'te rastgele başlangıç ve sabit aralık (her k'ıncı kişi) vardır."
        },
        {
          "t": "1D-3",
          "q": "The boxplot summarizes the finishing times, in minutes, of the runners in a school 5-kilometer race. What is the interquartile range (IQR) of the finishing times?",
          "o": [
            "5",
            "8",
            "21",
            "26"
          ],
          "a": 1,
          "w": "Kutunun uçları Q1 = 23 ve Q3 = 31; IQR = Q3 − Q1 = 31 − 23 = 8 dakika. 21 seçeneği range'dir (40 − 19): bıyık uçlarını değil kutunun uçlarını kullanmalısın. 26 ise median'dır.",
          "fig": {
            "type": "box",
            "items": [
              {
                "name": "Runners",
                "min": 19,
                "q1": 23,
                "med": 26,
                "q3": 31,
                "max": 40,
                "outliers": []
              }
            ],
            "label": "Finishing time (min)"
          }
        },
        {
          "t": "1G-2",
          "q": "A radio station asks its listeners to vote online on whether the station should play more Turkish pop music. Of the 1,200 listeners who choose to vote, 85% say yes. Which of the following is the most serious concern about using 85% as an estimate for all listeners of the station?",
          "o": [
            "A sample of 1,200 listeners is too small to describe all listeners.",
            "The listeners were not randomly assigned to treatment groups.",
            "The listeners did not know which station was running the poll.",
            "Listeners with strong opinions are more likely to choose to vote."
          ],
          "a": 3,
          "w": "Katılımcılar kendi kendini seçti (voluntary response sample); güçlü görüşü olanlar oy vermeye daha isteklidir, bu yüzden %85 tüm dinleyicileri temsil etmeyebilir. 'Sample is too small' tuzaktır: 1.200 küçük değildir ve sample'ın büyüklüğü bias'ı düzeltmez."
        },
        {
          "t": "1D-4",
          "q": "Elif's score on a school-wide music theory exam is at the 80th percentile of the scores. Which of the following is the best interpretation of this percentile?",
          "o": [
            "80% of the exam scores are less than or equal to Elif's score.",
            "Elif answered 80% of the exam questions correctly.",
            "80% of the exam scores are greater than Elif's score.",
            "Elif's score is higher than the scores of 80 students."
          ],
          "a": 0,
          "w": "Percentile, o değere eşit ya da ondan küçük olan gözlemlerin yüzdesidir: skorların %80'i Elif'in skoruna eşit ya da daha düşük. En çekici yanlış 'soruların %80'ini doğru yaptı' seçeneğidir; percentile doğru cevap yüzdesi değil, dağılım içindeki konumdur."
        },
        {
          "t": "1H-1",
          "q": "In an experiment on whether a new sports drink improves sprint times, one group of athletes receives the sports drink. A second group receives a drink that looks and tastes the same but contains none of the active ingredients. What is the drink given to the second group called?",
          "o": [
            "A block",
            "A confounding variable",
            "A placebo",
            "A response variable"
          ],
          "a": 2,
          "w": "Etken madde içermeyen ama gerçeğiyle aynı görünen 'sahte' treatment'a placebo denir; control group'a verilir ki placebo effect iki grupta da aynı olsun. Response variable burada sprint time'dır, içecek değil."
        },
        {
          "t": "1E",
          "q": "The boxplots summarize the scores on the same quiz for two classes. Which of the following statements is supported by the boxplots?",
          "o": [
            "Class A has the greater median and the greater range.",
            "Class B has the greater median but the smaller IQR.",
            "The two classes have the same median and the same range.",
            "Class B has the greater median and the greater IQR."
          ],
          "a": 3,
          "w": "Median: A = 68, B = 74 → B daha büyük. IQR: A = 75 − 60 = 15, B = 85 − 62 = 23 → B daha büyük. 'Greater median but smaller IQR' seçeneği kutu boyunu okumadan karar vermekten gelir; B'nin kutusu daha uzundur.",
          "fig": {
            "type": "box",
            "items": [
              {
                "name": "Class A",
                "min": 52,
                "q1": 60,
                "med": 68,
                "q3": 75,
                "max": 88,
                "outliers": []
              },
              {
                "name": "Class B",
                "min": 45,
                "q1": 62,
                "med": 74,
                "q3": 85,
                "max": 96,
                "outliers": []
              }
            ],
            "label": "Quiz score"
          }
        },
        {
          "t": "1H-2",
          "q": "Each of 20 runners runs 400 meters twice, once in shoe model A and once in shoe model B. For each runner, a coin flip decides which shoe is worn first. Which of the following best describes this design?",
          "o": [
            "A completely randomized design",
            "A matched pairs design",
            "A stratified random sample",
            "An observational study"
          ],
          "a": 1,
          "w": "Her koşucu iki treatment'ı da alıyor ve sıra yazı-turayla belirleniyor: bu bir matched pairs design'dır (her koşucu kendi 'çifti'). Completely randomized design'da 20 koşucu rastgele iki gruba ayrılır ve herkes yalnızca tek bir ayakkabıyı denerdi."
        }
      ]
    },
    {
      "no": 2,
      "level": "Temel",
      "minutes": 25,
      "questions": [
        {
          "t": "1B",
          "q": "Students in Grade 9 and Grade 12 at a school were asked which social media platform they use most. The results are shown in the table. Which of the following statements is supported by the data?",
          "o": [
            "A majority of the Grade 9 students in the survey chose Instagram.",
            "The same proportion of students in each grade chose YouTube.",
            "Instagram is more popular in Grade 9, because 48 is greater than 40.",
            "A greater proportion of Grade 12 than Grade 9 students chose Instagram."
          ],
          "a": 3,
          "w": "Gruplar farklı büyüklükte (120 ve 80) olduğu için frequency değil relative frequency karşılaştırılır: Instagram Grade 9'da 48/120 = %40, Grade 12'de 40/80 = %50. '48 > 40' seçeneği ham sayıları karşılaştırma hatasıdır. %40 majority (> %50) değildir; YouTube oranları da %25 ve %30'dur.",
          "fig": {
            "type": "table",
            "head": [
              "Platform",
              "Grade 9",
              "Grade 12"
            ],
            "rows": [
              [
                "Instagram",
                48,
                40
              ],
              [
                "TikTok",
                42,
                16
              ],
              [
                "YouTube",
                30,
                24
              ],
              [
                "Total",
                120,
                80
              ]
            ]
          }
        },
        {
          "t": "1F-1",
          "q": "An observational study of high school students finds that students who eat breakfast every day have higher grade point averages (GPAs), on average, than students who rarely eat breakfast. Which of the following is the best description of a possible confounding variable?",
          "o": [
            "GPA, because it is the variable that the researchers compared between the two groups of students",
            "Sample size, because a study with more students would give a more precise estimate of mean GPA",
            "Sleep, because students who sleep more may eat breakfast more often and sleep may also raise GPA",
            "Breakfast habits, because the students were not randomly selected from all high school students"
          ],
          "a": 2,
          "w": "Confounding variable iki şartı birden sağlar: explanatory variable (breakfast) ile ilişkilidir ve response variable'ı (GPA) etkiler. Uykusunu alan öğrenci hem kahvaltıya vakit bulur hem derste daha iyidir; bu yüzden iki etki birbirinden ayrılamaz. GPA response'un, breakfast ise explanatory'nin kendisidir; ikisi de confounding olamaz."
        },
        {
          "t": "1C-1",
          "q": "The dotplot shows the number of countries visited by each of the 17 members of a school travel club. Which of the following is the best description of the distribution?",
          "o": [
            "Roughly symmetric and single-peaked around 5 countries, with most values from 2 to 8 and a possible high outlier at 15",
            "Skewed to the left and single-peaked around 5 countries, with most values from 2 to 8 and a possible low outlier at 2",
            "Approximately uniform from 2 to 15 countries, with a center near 8 countries and no possible outliers at all",
            "Bimodal with one peak at 2 countries and another peak at 15 countries, with a center near 5 countries"
          ],
          "a": 0,
          "w": "Dağılımı anlatırken shape, center, variability ve outliers birlikte ve bağlam içinde verilir: 2–8 arasındaki ana gövde 5 çevresinde tek tepeli ve simetrik, 15 ise gövdeden kopuk bir high outlier (Q3 + 1.5·IQR = 6.5 + 3.75 = 10.25'in üstünde). 'Skewed left' yanlıştır: uzaktaki değer sağdadır, solda kuyruk yoktur.",
          "fig": {
            "type": "dot",
            "values": [
              2,
              3,
              3,
              4,
              4,
              4,
              5,
              5,
              5,
              5,
              6,
              6,
              6,
              7,
              7,
              8,
              15
            ],
            "label": "Number of countries visited"
          }
        },
        {
          "t": "1C-2",
          "q": "The histogram shows the number of minutes that each of 60 students listened to music yesterday. Each interval includes its left endpoint but not its right endpoint. What percent of the students listened to music for at least 90 minutes?",
          "o": [
            "18%",
            "30%",
            "60%",
            "70%"
          ],
          "a": 1,
          "w": "90 dakika ve üstü: 11 + 5 + 2 = 18 öğrenci; 18/60 = 0.30 = %30. %18 seçeneği öğrenci sayısını yüzde sanmaktır; %70 ise 90 dakikadan az dinleyenlerin (42/60) oranıdır.",
          "fig": {
            "type": "hist",
            "bins": [
              {
                "from": 0,
                "to": 30,
                "n": 9
              },
              {
                "from": 30,
                "to": 60,
                "n": 15
              },
              {
                "from": 60,
                "to": 90,
                "n": 18
              },
              {
                "from": 90,
                "to": 120,
                "n": 11
              },
              {
                "from": 120,
                "to": 150,
                "n": 5
              },
              {
                "from": 150,
                "to": 180,
                "n": 2
              }
            ],
            "label": "Time spent listening to music (min)",
            "ylabel": "Frequency"
          }
        },
        {
          "t": "1F-2",
          "q": "A football club has 3,500 season-ticket holders. The club selects a random sample of 200 of them and finds that 62% of the sample support moving to a new stadium. To which population can this result be generalized?",
          "o": [
            "Only the 200 season-ticket holders in the sample",
            "All 3,500 season-ticket holders of the club",
            "All fans of the club, including those without tickets",
            "All football fans who live in the same city as the club"
          ],
          "a": 1,
          "w": "Rastgele seçilmiş bir sample'ın sonucu, sample'ın çekildiği population'a genellenir: kulübün 3.500 season-ticket holder'ı. Bileti olmayan taraftarların seçilme şansı yoktu, o yüzden 'all fans' fazla geniştir. 'Only the 200' ise fazla dar: random selection'ın amacı zaten genelleyebilmektir."
        },
        {
          "t": "1D-1",
          "q": "The distribution of the number of followers for 500 student social media accounts is strongly skewed to the right. Which of the following is most likely true about the mean and the median number of followers?",
          "o": [
            "The mean is less than the median.",
            "The mean is about equal to the median.",
            "The mean is greater than the median.",
            "The mean and the median cannot be compared at all."
          ],
          "a": 2,
          "w": "Skewed right dağılımda sağ kuyruktaki çok büyük değerler mean'i kendine doğru çeker; median resistant olduğu için yerinde kalır. Sonuç: mean > median. 'Mean < median' skewed left için doğrudur; yönü karıştırma: mean kuyruğa doğru gider."
        },
        {
          "t": "1G-1",
          "q": "A school has 800 students: 200 in each of four grades, arranged in 40 homerooms of 20 students each. Which of the following methods produces a simple random sample (SRS) of 40 students?",
          "o": [
            "Number the students from 1 to 800 and use a random number generator to pick 40 different numbers.",
            "Randomly select 10 students from each of the four grades and combine them into one sample.",
            "Randomly select 2 of the 40 homerooms and include every student in those two homerooms.",
            "Randomly pick one of the first 20 students on an alphabetical list, then take every 20th student."
          ],
          "a": 0,
          "w": "SRS'te yalnızca her öğrencinin değil, her olası 40 kişilik grubun seçilme şansı eşit olmalıdır; bunu yalnızca tüm listeden doğrudan rastgele 40 kişi çekmek sağlar. Diğer yöntemlerde de her öğrencinin şansı 1/20'dir ama bazı gruplar imkânsızdır: örneğin stratified yöntemde 40'ı da Grade 9'dan olan bir sample çıkamaz."
        },
        {
          "t": "1D-2",
          "q": "The stemplot shows the total points scored by each of the 11 players on a basketball team during a tournament. What is the interquartile range (IQR) of the points scored?",
          "o": [
            "15.5",
            "19",
            "26",
            "40"
          ],
          "a": 1,
          "w": "n = 11 → median 6. değer = 26. Median hariç alt yarı 12, 15, 18, 21, 24 → Q1 = 18; üst yarı 29, 33, 37, 38, 52 → Q3 = 37. IQR = 37 − 18 = 19. 40 seçeneği range'dir (52 − 12); 15.5 ise median'ı iki yarıya da katınca çıkar.",
          "fig": {
            "type": "stem",
            "stems": [
              {
                "s": "1",
                "leaves": "2 5 8"
              },
              {
                "s": "2",
                "leaves": "1 4 6 9"
              },
              {
                "s": "3",
                "leaves": "3 7 8"
              },
              {
                "s": "4",
                "leaves": ""
              },
              {
                "s": "5",
                "leaves": "2"
              }
            ],
            "key": "1|2 = 12 points"
          }
        },
        {
          "t": "1D-2",
          "q": "A basketball player scored a mean of 18.4 points per game last season, with a standard deviation of 4.2 points. Which of the following is the best interpretation of the standard deviation?",
          "o": [
            "The player's points per game typically vary by about 4.2 points from the mean of 18.4 points.",
            "The player scored between 14.2 and 22.6 points in every game of the season.",
            "The difference between the player's highest and lowest scoring games is 4.2 points.",
            "The player's points per game were typically 4.2 points higher than the mean of 18.4 points."
          ],
          "a": 0,
          "w": "SD kalıbı: 'The [context] typically varies by [SD] from the mean of [mean].' Yani maç başı sayı, 18.4'lük ortalamadan tipik olarak yaklaşık 4.2 sayı uzaklaşıyor. 'In every game' seçeneği tuzaktır: SD tipik uzaklıktır, bütün değerlerin sığdığı bir sınır değil. Highest − lowest ise range'dir."
        },
        {
          "t": "1G-1",
          "q": "A concert organizer wants to estimate the mean amount spent on merchandise by all people attending a concert. Spending is expected to be similar among people with the same ticket type (standing, seated, or VIP) but very different between ticket types. Which sampling method would give the most precise estimate, and why?",
          "o": [
            "A cluster sample with ticket types as clusters, because one randomly chosen ticket type can represent everyone",
            "A convenience sample of people near the merchandise stand, because they are the most likely to spend money",
            "A systematic sample of every 10th person entering, because it guarantees equal numbers from each ticket type",
            "A stratified random sample by ticket type, because spending is similar within each type and differs between types"
          ],
          "a": 3,
          "w": "Gruplar kendi içinde benzer, birbirinden farklıysa bunlar strata'dır: her ticket type'tan ayrı SRS çekmek (stratified random sample) her grubu temsil eder ve tahminin değişkenliğini azaltır. Aynı grupları cluster yapmak en kötü seçimdir: yalnızca VIP'ler seçilirse sonuç tüm seyirciyi hiç temsil etmez."
        },
        {
          "t": "1D-3",
          "q": "The table gives the five-number summary of the delivery times, in minutes, for 75 orders from a pizza restaurant. Based on the 1.5 × IQR rule, which of the following statements must be true?",
          "o": [
            "There are no outliers in the distribution of delivery times.",
            "There is at least one low outlier and no high outliers.",
            "There is at least one low outlier and at least one high outlier.",
            "There is at least one high outlier and no low outliers."
          ],
          "a": 3,
          "w": "IQR = 34 − 22 = 12 ve 1.5 × IQR = 18. Alt sınır 22 − 18 = 4, üst sınır 34 + 18 = 52. Maximum 58 > 52 olduğu için en az bir high outlier var; minimum 12, alt sınır 4'ün altında olmadığı için low outlier yok. 'No outliers' tuzağı, hesap yapmadan 58'i gözle makul bulmaktan gelir.",
          "fig": {
            "type": "table",
            "head": [
              "Minimum",
              "Q1",
              "Median",
              "Q3",
              "Maximum"
            ],
            "rows": [
              [
                12,
                22,
                27,
                34,
                58
              ]
            ],
            "caption": "Delivery time (min)"
          }
        },
        {
          "t": "1G-2",
          "q": "A city tourism office wants to estimate the proportion of all visitors to the city who are satisfied with their visit. The office surveys a random sample of guests staying at hotels in the city center. Visitors who stay with relatives, stay in hostels, or come only for the day cannot be selected. Which type of bias does this describe?",
          "o": [
            "Nonresponse bias",
            "Response bias",
            "Undercoverage bias",
            "Voluntary response bias"
          ],
          "a": 2,
          "w": "Population'ın bir kısmı (otelde kalmayan ziyaretçiler) sampling frame'in dışında kalıyor, yani seçilme şansları hiç yok: undercoverage bias. Nonresponse ile karıştırma: nonresponse'ta kişi seçilir ama ulaşılamaz ya da cevap vermez; burada bu kişiler hiç seçilemiyor."
        },
        {
          "t": "1D-3",
          "q": "The boxplot summarizes the number of hours per week that the athletes at a sports club spend practicing. Approximately what percent of the athletes practice more than 5 hours per week?",
          "o": [
            "25%",
            "50%",
            "75%",
            "95%"
          ],
          "a": 2,
          "w": "5 saat Q1'dir (kutunun sol kenarı). Verinin yaklaşık %25'i Q1'in altında, yaklaşık %75'i üstündedir. %25 seçeneği 'altında' ile 'üstünde'yi karıştırmaktır; %50 ise kutunun içindeki (Q1 ile Q3 arası) orandır.",
          "fig": {
            "type": "box",
            "items": [
              {
                "name": "Athletes",
                "min": 2,
                "q1": 5,
                "med": 8,
                "q3": 12,
                "max": 18,
                "outliers": []
              }
            ],
            "label": "Practice time (hours per week)"
          }
        },
        {
          "t": "1G-2",
          "q": "A gym emails a survey to a random sample of 500 of its members, asking how many times per week they exercise at the gym. Only 90 members reply. Members who rarely come to the gym are less likely to reply. Which of the following best describes the bias and its likely effect on the estimated mean number of visits per week?",
          "o": [
            "Nonresponse bias; the estimate is likely too high.",
            "Nonresponse bias; the estimate is likely too low.",
            "Voluntary response bias; the estimate is likely too low.",
            "Undercoverage bias; the estimate is likely too high."
          ],
          "a": 0,
          "w": "500 üye rastgele seçildi ama çoğu cevap vermedi: bu nonresponse bias. Cevap vermeyenler çoğunlukla az gelenler olduğu için cevap verenlerin ortalaması gerçek ortalamadan büyük çıkar → overestimate. Voluntary response değildir, çünkü sample'ı kişiler kendi seçmedi; gym rastgele seçti."
        },
        {
          "t": "1D-4",
          "q": "Scores on a school-wide math exam have a mean of 72 points and a standard deviation of 8 points. Deniz scored 60 points. Which of the following gives Deniz's z-score and its correct interpretation?",
          "o": [
            "z = −1.5; Deniz's score is 1.5 standard deviations below the mean.",
            "z = −12; Deniz's score is 12 standard deviations below the mean.",
            "z = 1.5; Deniz's score is 1.5 standard deviations above the mean.",
            "z = −1.5; Deniz's score is 1.5 points below the mean exam score."
          ],
          "a": 0,
          "w": "z = (value − mean)/SD = (60 − 72)/8 = −1.5. Negatif z, değerin mean'in altında olduğunu söyler: skor mean'in 1.5 standard deviation altında. '1.5 points below' tuzaktır: z-score puan cinsinden değil, SD cinsinden uzaklıktır (puan farkı 12'dir)."
        },
        {
          "t": "1H-1",
          "q": "In an experiment comparing the effects of two energy bars on endurance, every cyclist rides the same model of stationary bike, in the same room, at the same time of day. Which principle of experimental design is illustrated by keeping these conditions the same for everyone?",
          "o": [
            "Comparison",
            "Random assignment",
            "Replication",
            "Direct control"
          ],
          "a": 3,
          "w": "Treatment dışındaki koşulları (bisiklet, oda, saat) herkes için sabit tutmak direct control ilkesidir; böylece bu değişkenler confounding olamaz ve response'taki gereksiz değişkenlik azalır. 'Comparison' ile karıştırma: comparison, en az iki treatment grubunun karşılaştırılması demektir."
        },
        {
          "t": "1D-5",
          "q": "The scores of 28 students on a quiz have a mean of 31, a median of 32, a standard deviation of 6, and an IQR of 9. The teacher discovers a grading error and adds 4 points to every score. Which of the following gives the summary statistics of the new scores?",
          "o": [
            "Mean 35, median 36, standard deviation 10, IQR 13",
            "Mean 31, median 32, standard deviation 10, IQR 13",
            "Mean 31, median 32, standard deviation 6, IQR 9",
            "Mean 35, median 36, standard deviation 6, IQR 9"
          ],
          "a": 3,
          "w": "Her değere aynı sabiti eklemek dağılımı olduğu gibi kaydırır: center ölçüleri (mean, median) 4 artar → 35 ve 36; variability ölçüleri (SD, IQR) değişmez → 6 ve 9. 'Hepsi 4 artar' seçeneği en çekici hatadır; değerler arasındaki uzaklıklar değişmediği için yayılım aynı kalır."
        },
        {
          "t": "1H-2",
          "q": "Each of 24 students tastes two brands of lemonade, brand A and brand B, and rates each on a 10-point scale. For each student, a coin flip determines which brand is tasted first. What is the main reason for randomizing the order?",
          "o": [
            "To make sure that every student tastes both of the two brands",
            "To allow the results to be generalized to all students at the school",
            "To prevent the order of tasting from being confounded with the brand",
            "To increase the number of students who take part in the experiment"
          ],
          "a": 2,
          "w": "Herkes önce A'yı tatsaydı, 'ilk içilen daha lezzetli gelir' gibi bir sıra etkisi marka etkisiyle karışırdı; rastgele sıra bu confounding'i önler. Genelleme (population'a) random selection ile ilgilidir, treatment sırasının rastgeleliğiyle değil."
        },
        {
          "t": "1E",
          "q": "Ayşe scored 84 on a physics exam and 88 on a chemistry exam. The physics scores in her class had a mean of 76 and a standard deviation of 4. The chemistry scores had a mean of 79 and a standard deviation of 6. On which exam did Ayşe perform better relative to her class?",
          "o": [
            "Chemistry, because 88 is a higher score than 84",
            "Physics, because her z-score of 2.0 is greater than 1.5",
            "Chemistry, because she was 9 points above the mean",
            "Neither, because both scores are above the mean"
          ],
          "a": 1,
          "w": "Farklı dağılımlardaki değerler z-score ile karşılaştırılır. Physics: (84 − 76)/4 = 2.0; Chemistry: (88 − 79)/6 = 1.5. Physics'te mean'in 2 SD üstünde olduğu için sınıfına göre daha iyi. '9 points above the mean' tuzağı SD'yi hesaba katmaz: kimyada puanlar daha yayvan olduğu için 9 puan daha az etkileyicidir."
        },
        {
          "t": "1H-3",
          "q": "Sixty students were randomly assigned, 30 to each group, to study with music or in silence, and then took the same quiz. The mean score of the silence group was 3.1 points higher. In 1,000 simulated random assignments made under the assumption that music has no effect, a difference of 3.1 points or more occurred 18 times. Which conclusion is most appropriate?",
          "o": [
            "The difference is not statistically significant, because 3.1 points is a small difference in quiz scores.",
            "The difference is statistically significant, because a difference this large would rarely occur by chance alone.",
            "The difference is not statistically significant, because chance alone produced it in 18 of the trials.",
            "The difference is statistically significant, because the two groups had the same number of students."
          ],
          "a": 1,
          "w": "18/1000 = %1.8 < %5: bu kadar büyük bir fark yalnızca random assignment'taki şansla nadiren çıkar, o yüzden fark statistically significant. '18 denemede çıktı, demek ki şans olabilir' tuzaktır: ölçüt 'hiç çıkmaması' değil, %5'ten az çıkmasıdır. Farkın gözle 'küçük' görünmesi de ölçüt değildir."
        }
      ]
    },
    {
      "no": 3,
      "level": "Orta",
      "minutes": 25,
      "questions": [
        {
          "t": "1A",
          "q": "An airline records several variables for each of its flights. Part of the data set is shown in the table. Which of the following statements about the variables is correct?",
          "o": [
            "Flight number and number of passengers are both quantitative and discrete variables.",
            "Distance is quantitative and continuous; number of passengers is quantitative and discrete.",
            "Destination is categorical; flight number is quantitative because its values are numbers.",
            "Distance and number of passengers are both quantitative and continuous variables."
          ],
          "a": 1,
          "w": "Distance ölçülerek bulunur (aradaki her değeri alabilir) → quantitative, continuous. Passengers sayılarak bulunur → quantitative, discrete. Flight number yalnızca bir etikettir; ortalamasını almak anlamsız olduğu için categorical'dır, onu quantitative sayan iki seçenek de yanlıştır. 'Both continuous' seçeneği ise saymayı ölçmeyle karıştırır.",
          "fig": {
            "type": "table",
            "head": [
              "Flight number",
              "Destination",
              "Distance (km)",
              "Passengers",
              "On time?"
            ],
            "rows": [
              [
                214,
                "Izmir",
                330,
                168,
                "Yes"
              ],
              [
                587,
                "Antalya",
                480,
                152,
                "No"
              ],
              [
                903,
                "Trabzon",
                910,
                121,
                "Yes"
              ]
            ]
          }
        },
        {
          "t": "1F-1",
          "q": "A coach studies how rest time between sets (30, 60, or 90 seconds) and type of drink (water or sports drink) affect the number of push-ups an athlete can complete. Sixty volunteer athletes are randomly assigned so that each combination of rest time and drink is used by 10 athletes. Which of the following correctly describes the experiment?",
          "o": [
            "2 factors, 6 treatments, and number of push-ups as the response variable",
            "2 factors, 5 treatments, and number of push-ups as the response variable",
            "6 factors, 2 treatments, and the type of drink as the response variable",
            "2 factors, 6 treatments, and the 60 athletes as the response variable"
          ],
          "a": 0,
          "w": "Factor'lar: rest time (3 level) ve drink (2 level). Treatment = level kombinasyonu: 3 × 2 = 6. Response variable ölçülen sonuçtur: number of push-ups; 60 atlet ise experimental units'tir (subjects). '5 treatments' tuzağı level'ları çarpmak yerine toplamaktır (3 + 2)."
        },
        {
          "t": "1B",
          "q": "A cafeteria manager surveyed 250 students about their favorite lunch. The results are shown in the table. The manager reports, \"A majority of students prefer the chicken wrap.\" Which of the following is the best evaluation of the manager's claim?",
          "o": [
            "The claim is correct, because the chicken wrap has the highest frequency in the table.",
            "The claim is correct, because 95 is more than twice the frequency of pasta or salad.",
            "The claim is incorrect, because frequencies cannot be compared without a bar chart.",
            "The claim is incorrect, because only 38% of the students chose the chicken wrap."
          ],
          "a": 3,
          "w": "Relative frequency = 95/250 = 0.38 = %38. 'Majority' yarıdan fazlası (> %50) demektir; chicken wrap yalnızca en çok seçilen kategoridir, çoğunluk değildir. 'Highest frequency' seçeneği bu iki kavramı karıştırır.",
          "fig": {
            "type": "table",
            "head": [
              "Favorite lunch",
              "Frequency"
            ],
            "rows": [
              [
                "Chicken wrap",
                95
              ],
              [
                "Pizza",
                70
              ],
              [
                "Pasta",
                45
              ],
              [
                "Salad",
                40
              ]
            ]
          }
        },
        {
          "t": "1C-2",
          "q": "The histogram shows the number of hours per week that each of 80 students spends on social media. Each interval includes its left endpoint but not its right endpoint. Which of the following can be concluded from the histogram?",
          "o": [
            "More than half of the students spend at least 15 hours per week on social media.",
            "The range of the numbers of hours per week is exactly 30 hours.",
            "The median number of hours per week is between 10 and 15 hours.",
            "More students spend exactly 12.5 hours per week than any other number of hours."
          ],
          "a": 2,
          "w": "n = 80 → median 40. ve 41. değerlerin ortalaması. Kümülatif sayılar 8, 28, 52: her iki değer de 10–15 aralığına düşer. 15 saat ve üstü 16 + 8 + 4 = 28 öğrenci (%35), yarıdan az. Histogram tek tek değerleri göstermez; bu yüzden tam range ya da en sık görülen tek değer okunamaz.",
          "fig": {
            "type": "hist",
            "bins": [
              {
                "from": 0,
                "to": 5,
                "n": 8
              },
              {
                "from": 5,
                "to": 10,
                "n": 20
              },
              {
                "from": 10,
                "to": 15,
                "n": 24
              },
              {
                "from": 15,
                "to": 20,
                "n": 16
              },
              {
                "from": 20,
                "to": 25,
                "n": 8
              },
              {
                "from": 25,
                "to": 30,
                "n": 4
              }
            ],
            "label": "Time on social media (hours per week)",
            "ylabel": "Frequency"
          }
        },
        {
          "t": "1F-2",
          "q": "A cafeteria manager believes that more than 60% of all students at Marmara High School would buy a vegetarian lunch at least once a week. A random sample of 120 students at the school will be surveyed. Which investigative question is most appropriate for this study?",
          "o": [
            "Is the proportion of the 120 surveyed students who would buy a vegetarian lunch at least once a week greater than 0.60?",
            "Is the proportion of all students at Marmara High School who would buy a vegetarian lunch at least once a week greater than 0.60?",
            "Is the proportion of all students at Marmara High School who would buy a vegetarian lunch at least once a week different from 0.60?",
            "Is the mean number of vegetarian lunches bought per week by all students at Marmara High School greater than 0.60?"
          ],
          "a": 1,
          "w": "İyi bir investigative question üç şeyi doğru verir: variable (haftada en az bir kez alır mı → categorical, yani parameter bir proportion), yön ('more than' → greater than 0.60) ve population (okuldaki tüm öğrenciler). Parameter sample hakkında değil population hakkındadır; 'different from' ise müdürün tek yönlü iddiasını karşılamaz."
        },
        {
          "t": "1D-1",
          "q": "The prices, in Turkish lira, of seven concert tickets are 300, 350, 400, 450, 500, 550, and 600. It is discovered that the price recorded as 600 should have been 950. When the error is corrected, how do the mean and the median change?",
          "o": [
            "The mean increases by 50; the median does not change.",
            "The mean increases by 350; the median does not change.",
            "The mean increases by 50; the median increases by 50.",
            "The mean does not change; the median increases by 50."
          ],
          "a": 0,
          "w": "Toplam 350 artar, mean 350/7 = 50 artar (450 → 500). Median sıralı listede 4. değerdir (450); en büyük değerin daha da büyümesi ortadaki değeri değiştirmez, çünkü median resistant'tır. 'Mean 350 artar' tuzağı, farkı n'ye bölmeyi unutmaktır."
        },
        {
          "t": "1F-2",
          "q": "A researcher asks, \"What are plausible values for the mean amount spent on food per day by all tourists visiting Cappadocia in July?\" Which of the following correctly identifies the variable of interest, the type of inference, and the population for this question?",
          "o": [
            "Variable: the tourists visiting Cappadocia; inference: estimating a proportion; population: the tourists in the sample",
            "Variable: the mean amount spent on food; inference: testing a claim about a mean; population: all tourists in July",
            "Variable: amount spent on food per day; inference: estimating a mean; population: all tourists visiting Cappadocia in July",
            "Variable: amount spent on food per day; inference: comparing two means; population: all tourists visiting Türkiye"
          ],
          "a": 2,
          "w": "Variable her turistte ölçülen şeydir: günlük yemek harcaması (mean değil; mean parameter'dır). 'Plausible values for the mean' → tek bir mean'i tahmin etmek (estimating a mean). Population soruda yazıyor: Temmuzda Cappadocia'yı ziyaret eden tüm turistler. 'Variable: the mean amount' seçeneği variable ile parameter'ı karıştırır."
        },
        {
          "t": "1D-2",
          "q": "The dotplot shows the number of comments on each of a student's 15 most recent social media posts. Which measures of center and variability are most appropriate for summarizing this distribution?",
          "o": [
            "The mean and the standard deviation, because the variable is quantitative",
            "The median and the IQR, because the distribution has high outliers",
            "The mean and the range, because both of them use the extreme values",
            "The median and the standard deviation, because the median is resistant"
          ],
          "a": 1,
          "w": "19 ve 26 high outlier'dır (Q1 = 4, Q3 = 7, IQR = 3 → üst sınır 7 + 4.5 = 11.5) ve dağılım sağa çarpıktır. Mean ve SD resistant olmadığı için bu değerlerden çok etkilenir; skewed ya da outlier'lı dağılımda median + IQR kullanılır. SD yalnızca mean ile birlikte kullanılır, o yüzden 'median + SD' eşleşmesi de olmaz.",
          "fig": {
            "type": "dot",
            "values": [
              2,
              3,
              3,
              4,
              4,
              4,
              5,
              5,
              5,
              6,
              6,
              7,
              8,
              19,
              26
            ],
            "label": "Number of comments"
          }
        },
        {
          "t": "1D-3",
          "q": "The boxplot summarizes the lengths, in days, of 60 trips booked through a travel agency. Which of the following can NOT be determined from the boxplot?",
          "o": [
            "The interquartile range of the lengths of the trips",
            "The trip length that about 25% of the trips fall below",
            "Whether the distribution of trip lengths has one peak or two",
            "Whether any trip length is an outlier by the 1.5 × IQR rule"
          ],
          "a": 2,
          "w": "Boxplot yalnızca five-number summary'yi ve outlier'ları gösterir: IQR (9 − 4 = 5), Q1 (4 gün) ve outlier (21 gün) okunur. Ama peaks, gaps ve clusters görünmez; dağılımın unimodal mı bimodal mı olduğu boxplot'tan anlaşılamaz. Bunun için dotplot ya da histogram gerekir.",
          "fig": {
            "type": "box",
            "items": [
              {
                "name": "Trips",
                "min": 2,
                "q1": 4,
                "med": 6,
                "q3": 9,
                "max": 15,
                "outliers": [
                  21
                ]
              }
            ],
            "label": "Length of trip (days)"
          }
        },
        {
          "t": "1G-1",
          "q": "A food festival has 12 rows of 10 stalls each. Stalls in the same row sell the same kind of food and have similar daily revenues, but revenues differ greatly from row to row. To estimate the mean daily revenue of all 120 stalls, the organizer plans to randomly select 2 rows and survey all 20 stalls in them. Which change, using about the same number of stalls, would most improve the precision of the estimate?",
          "o": [
            "Randomly select 2 stalls from each of the 12 rows of the festival.",
            "Survey all of the stalls in the 2 rows that are nearest the entrance.",
            "Randomly select 4 rows and let the organizer pick 5 stalls in each one.",
            "Survey the first 24 stalls whose owners volunteer to report revenue."
          ],
          "a": 0,
          "w": "Satırlar kendi içinde benzer, birbirinden çok farklı: bu yapı cluster için kötü, strata için idealdir. Yalnızca 2 satır seçilirse sonuç hangi satırların çıktığına göre çok değişir. Her satırdan rastgele 2 stant almak (stratified random sample) bütün yiyecek türlerini temsil eder ve tahminin değişkenliğini azaltır. Diğer seçenekler rastgeleliği bozar (convenience ya da voluntary response)."
        },
        {
          "t": "1D-4",
          "q": "The dotplot shows the number of goals scored this season by each of the 20 players on a football team. Emre scored 5 goals. At what percentile of the distribution is Emre's number of goals?",
          "o": [
            "25th percentile",
            "65th percentile",
            "70th percentile",
            "75th percentile"
          ],
          "a": 3,
          "w": "Percentile = o değere eşit ya da ondan küçük olan gözlemlerin yüzdesi. 5 ya da daha az gol atan oyuncu sayısı 1 + 2 + 3 + 4 + 3 + 2 = 15; 15/20 = %75 → Emre 75th percentile'da. 65th seçeneği yalnızca 5'ten az atanları (13/20) sayar, 'equal to' kısmını unutur; 25th ise Emre'den çok atanların oranıdır.",
          "fig": {
            "type": "dot",
            "values": [
              0,
              1,
              1,
              2,
              2,
              2,
              3,
              3,
              3,
              3,
              4,
              4,
              4,
              5,
              5,
              6,
              6,
              7,
              8,
              10
            ],
            "label": "Goals scored this season"
          }
        },
        {
          "t": "1G-2",
          "q": "A social media company wants to estimate the proportion of all teenagers in a country who use its app every day. It posts a survey inside the app, and 9,000 teenagers respond; 82% of them say they use the app every day. Which statement about this estimate is most accurate?",
          "o": [
            "It is likely too low, because teenagers who use the app often were more likely to see the survey.",
            "It is likely accurate, because a sample of 9,000 teenagers is large enough to remove any bias.",
            "It is likely too high, because the teenagers were not randomly assigned to treatment groups.",
            "It is likely too high, because teenagers who use the app often were more likely to see the survey."
          ],
          "a": 3,
          "w": "Bias'ı iki adımda anlat: (1) anketi görenler uygulamayı sık kullananlar; hiç kullanmayan gençlerin seçilme şansı yok. (2) Bu yüzden sample'daki oran gerçek orandan büyük çıkar → overestimate. Sample'ın büyük olması bias'ı düzeltmez; random assignment ise deneylerle ilgilidir, anketle değil."
        },
        {
          "t": "1D-4",
          "q": "The 100-meter sprint times of the athletes at a track club have a mean of 12.8 seconds and a standard deviation of 0.5 second. Kerem's time has a z-score of −1.2. Which of the following gives Kerem's time and correctly compares it with the mean time?",
          "o": [
            "12.2 seconds; Kerem ran faster than the mean time.",
            "12.2 seconds; Kerem ran slower than the mean time.",
            "13.4 seconds; Kerem ran slower than the mean time.",
            "11.6 seconds; Kerem ran faster than the mean time."
          ],
          "a": 0,
          "w": "value = mean + z·SD = 12.8 + (−1.2)(0.5) = 12.8 − 0.6 = 12.2 s. Negatif z, sürenin mean'in altında olduğunu gösterir; koşuda daha kısa süre daha hızlı demektir. Tuzaklar: negatif z'yi 'kötü' sanmak (slower) ve z'yi SD ile çarpmadan çıkarmak (12.8 − 1.2 = 11.6)."
        },
        {
          "t": "1H-1",
          "q": "Forty volunteer runners will take part in an experiment comparing a new interval training plan with the usual training plan. Instead of letting the runners choose a plan, the coach randomly assigns 20 runners to each plan. What is the main purpose of the random assignment?",
          "o": [
            "To allow the results to be generalized to all runners, not only the volunteers",
            "To create groups that are roughly equivalent before the training plans begin",
            "To make sure that neither the runners nor the coach knows who gets which plan",
            "To guarantee that the two groups will have exactly the same mean race time"
          ],
          "a": 1,
          "w": "Random assignment'ın amacı, deneyin başında kabaca denk gruplar oluşturmaktır: bilinen ve bilinmeyen tüm değişkenler (yetenek, motivasyon…) gruplara dengeli dağılır, böylece sonuçtaki fark treatment'a bağlanabilir. Genelleme random selection'ın işidir (en sık karıştırılan budur); 'exactly the same' de fazla iddialıdır: gruplar kabaca denk olur, birebir aynı değil."
        },
        {
          "t": "1D-5",
          "q": "A restaurant charges a delivery fee of 15 lira plus 4 lira for each kilometer of delivery distance. Last month, the delivery fees had a mean of 39 lira and a standard deviation of 10 lira. What were the mean and the standard deviation of the delivery distances?",
          "o": [
            "Mean 171 km; standard deviation 40 km",
            "Mean 9.75 km; standard deviation 2.5 km",
            "Mean 6 km; standard deviation 10 km",
            "Mean 6 km; standard deviation 2.5 km"
          ],
          "a": 3,
          "w": "fee = 15 + 4(distance) → distance = (fee − 15)/4. Mean hem çıkarmadan hem bölmeden etkilenir: (39 − 15)/4 = 6 km. SD sabit çıkarmadan etkilenmez, yalnızca bölmeden: 10/4 = 2.5 km. 'Mean 9.75' seçeneği 15'i çıkarmayı unutur; 'SD 10' ise bölmenin yayılımı da küçülttüğünü unutur."
        },
        {
          "t": "1H-2",
          "q": "A researcher will compare two warm-up routines using 40 athletes: 20 experienced sprinters and 20 beginners. In Design I, 20 of the 40 athletes are randomly assigned to each routine. In Design II, the 20 experienced sprinters are randomly assigned, 10 to each routine, and the same is done separately for the 20 beginners. The response variable is 100-meter sprint time. What is the main advantage of Design II over Design I?",
          "o": [
            "It removes the need for random assignment of the warm-up routines.",
            "It allows the results to be generalized to all athletes in the country.",
            "It accounts for the variability in sprint times that is due to experience.",
            "It guarantees that the difference between routines will be significant."
          ],
          "a": 2,
          "w": "Design II bir randomized block design'dır (block = experience). Deneyim sprint süresini güçlü biçimde etkilediği için, karşılaştırmayı block içinde yapmak bu kaynaktan gelen değişkenliği hesaba katar ve iki rutin arasındaki farkı görmeyi kolaylaştırır. Blocking random assignment'ın yerini almaz: atama her block'un içinde yine rastgeledir."
        },
        {
          "t": "1D-5",
          "q": "The costs of the 200 trips sold by a travel agency last year have a distribution that is strongly skewed to the right, with a mean of 4,200 lira and a standard deviation of 1,500 lira. Each cost is converted to a z-score. Which of the following describes the distribution of the 200 z-scores?",
          "o": [
            "Skewed to the right, with mean 0 and standard deviation 1",
            "Roughly symmetric, with mean 0 and standard deviation 1",
            "Skewed to the right, with mean 4,200 and standard deviation 1",
            "Roughly symmetric, with mean 0 and standard deviation 1,500"
          ],
          "a": 0,
          "w": "z-score'a çevirmek, önce mean'i çıkarıp sonra SD'ye bölmektir: mean 0, SD 1 olur. Çıkarma ve bölme shape'i değiştirmez; dağılım yine skewed right kalır. En yaygın tuzak, standardize edince dağılımın simetrik (normal) olacağını sanmaktır."
        },
        {
          "t": "1H-3",
          "q": "Thirty volunteers were randomly assigned, 15 to each group, to shoot 20 free throws while listening to music or in silence. The music group made a mean of 2 more free throws than the silence group. Assuming that music has no effect, the random assignment was simulated 50 times. The dotplot shows the 50 simulated differences in means (music − silence), rounded to the nearest whole number. Which conclusion is most appropriate?",
          "o": [
            "The difference is statistically significant, because the observed difference of 2 is greater than 0.",
            "The difference is not statistically significant, because a difference of 2 or more occurred in 18% of the trials.",
            "The difference is statistically significant, because only 9 of the trials gave a difference of 2 or more.",
            "The difference is not statistically significant, because the simulation proves that music has no effect."
          ],
          "a": 1,
          "w": "2 ya da daha büyük fark veren deneme sayısı 5 + 3 + 1 = 9; 9/50 = %18. Bu %5'ten çok büyük: böyle bir fark yalnızca random assignment'taki şansla kolayca çıkabilir → not statistically significant. 'Simulation proves no effect' ise fazla ileri gider: anlamlı çıkmaması etkinin olmadığını kanıtlamaz, yalnızca ikna edici kanıt olmadığını söyler.",
          "fig": {
            "type": "dot",
            "values": [
              -4,
              -3,
              -3,
              -3,
              -2,
              -2,
              -2,
              -2,
              -2,
              -2,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              2,
              2,
              2,
              2,
              3,
              3,
              3,
              4
            ],
            "label": "Simulated difference in mean free throws made (music − silence)"
          }
        },
        {
          "t": "1E",
          "q": "The boxplots summarize the points scored per game this season by two basketball players. Which of the following statements is supported by the boxplots?",
          "o": [
            "Player B typically scores more points per game, because Player B's maximum is higher.",
            "Player A played in more games than Player B, because Player A's box is narrower.",
            "Both players have the same median, but Player B's points per game are more variable.",
            "Both players scored exactly 18 points in more games than any other number of points."
          ],
          "a": 2,
          "w": "İki oyuncunun median'ı aynı (18), ama B'nin hem IQR'ı (27 − 10 = 17'ye karşı 22 − 14 = 8) hem range'i (38'e karşı 20) daha büyük: B daha değişken. 'Typical' değeri maximum değil median belirler. Boxplot gözlem sayısını ve en sık değeri göstermez; kutunun darlığı az veri değil, az yayılım demektir.",
          "fig": {
            "type": "box",
            "items": [
              {
                "name": "Player A",
                "min": 8,
                "q1": 14,
                "med": 18,
                "q3": 22,
                "max": 28,
                "outliers": []
              },
              {
                "name": "Player B",
                "min": 2,
                "q1": 10,
                "med": 18,
                "q3": 27,
                "max": 40,
                "outliers": []
              }
            ],
            "label": "Points per game"
          }
        },
        {
          "t": "1H-3",
          "q": "Sixty volunteers from one high school's basketball program were randomly assigned to do visualization training or no extra training for four weeks. The visualization group improved its free-throw percentage significantly more than the other group. Which conclusion is most appropriate?",
          "o": [
            "Visualization training causes improvement for all high school basketball players.",
            "Visualization training is associated with improvement, but it cannot be said to cause it.",
            "No conclusion can be drawn, because the players were volunteers and not a random sample.",
            "Visualization training caused the improvement for players similar to those in the study."
          ],
          "a": 3,
          "w": "Random assignment + statistically significant fark → cause-and-effect sonucu çıkarılabilir. Ama oyuncular rastgele seçilmedi (tek okuldan gönüllüler), bu yüzden sonuç yalnızca çalışmadakilere benzeyen oyunculara uzanır. 'All high school basketball players' genellemesi random selection gerektirir; 'cannot be said to cause it' ise random assignment'ı görmezden gelir."
        }
      ]
    },
    {
      "no": 4,
      "level": "Zor",
      "minutes": 30,
      "questions": [
        {
          "t": "1A",
          "q": "An energy company keeps a record for each of its 85 wind turbines. Part of the record is shown in the table. Which of the following statements about the record is correct?",
          "o": [
            "The individuals are the manufacturers, and exactly three of the variables are quantitative.",
            "The individuals are the turbines, and exactly three of the variables are quantitative.",
            "The individuals are the turbines, and exactly two of the variables are quantitative, one of which is discrete.",
            "The individuals are the turbines, and exactly two of the variables are quantitative, both of which are continuous."
          ],
          "a": 2,
          "w": "Her satır bir türbini anlatıyor, yani individuals = turbines. Rotor diameter (ölçülür → continuous) ve service visits (sayılır → discrete) quantitative'dir; turbine ID, manufacturer ve postal code categorical'dır. Postal code rakamlardan oluşsa da ortalamasını almak anlamsızdır, o yüzden \"three quantitative\" diyen şık tuzaktır: sayı olan her şey quantitative değildir.",
          "fig": {
            "type": "table",
            "head": [
              "Turbine ID",
              "Manufacturer",
              "Site postal code",
              "Rotor diameter (m)",
              "Service visits in 2025"
            ],
            "rows": [
              [
                "T-014",
                "Norvent",
                "34710",
                "112.5",
                3
              ],
              [
                "T-015",
                "Aerix",
                "35220",
                "126.0",
                1
              ],
              [
                "T-016",
                "Norvent",
                "34710",
                "112.5",
                4
              ]
            ]
          }
        },
        {
          "t": "1B",
          "q": "A software company surveyed a random sample of its customers in each of two regions and recorded each customer's subscription plan. The counts are shown in the table. Which of the following statements is supported by the data?",
          "o": [
            "More customers in the Europe sample chose the Pro plan, but the Pro plan was chosen by a greater proportion of the Asia sample.",
            "The Pro plan was chosen by a greater number and by a greater proportion of the customers in the Europe sample than in the Asia sample.",
            "The Free plan was chosen by a majority of the customers in the Europe sample and by a majority of the customers in the Asia sample.",
            "The Basic plan was chosen by the same proportion of the customers in the Europe sample as of the customers in the Asia sample."
          ],
          "a": 0,
          "w": "Gruplar farklı büyüklükte (400 ve 250) olduğu için count değil relative frequency karşılaştırılır. Pro: Europe 80/400 = %20, Asia 75/250 = %30; sayı Europe'ta büyük, oran Asia'da büyük. Free %45 ve %40'tır, yani hiçbirinde majority (> %50) yoktur; Basic ise %35 ve %30'dur. En çekici yanlış, yalnızca 80 > 75 sayılarına bakıp oranı da Europe'a veren şıktır.",
          "fig": {
            "type": "table",
            "head": [
              "Plan",
              "Europe",
              "Asia"
            ],
            "rows": [
              [
                "Free",
                180,
                100
              ],
              [
                "Basic",
                140,
                75
              ],
              [
                "Pro",
                80,
                75
              ],
              [
                "Total",
                400,
                250
              ]
            ]
          }
        },
        {
          "t": "1C-1",
          "q": "The dotplot shows the number of defective chips found in each of 20 batches produced at a semiconductor plant. Which of the following is the best description of the distribution?",
          "o": [
            "The distribution of the number of defective chips is skewed to the left, because most batches are at the left side of the plot; the median is 1 chip.",
            "The distribution of the number of defective chips is skewed to the right, with a long tail toward larger values; the median is 1 chip, and the mean is greater than the median.",
            "The distribution of the number of defective chips is skewed to the right, with a long tail toward larger values; the median is 2 chips, and the mean is less than the median.",
            "The distribution of the number of defective chips is roughly symmetric and centered at about 5.5 chips, with values that vary from 0 chips to 11 chips."
          ],
          "a": 1,
          "w": "Kuyruk büyük değerlere (7 ve 11) doğru uzuyor, yani skewed right; yönü kuyruk belirler, noktaların yığıldığı taraf değil. n = 20 olduğundan median 10. ve 11. değerlerin ortalamasıdır: ikisi de 1, median = 1. Mean = 45/20 = 2.25; sağ kuyruk mean'i yukarı çeker, bu yüzden mean > median. \"Skewed left, çünkü çoğu solda\" diyen şık en sık yapılan hatadır.",
          "fig": {
            "type": "dot",
            "values": [
              0,
              0,
              0,
              0,
              0,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              2,
              2,
              3,
              3,
              4,
              5,
              7,
              11
            ],
            "label": "Number of defective chips"
          }
        },
        {
          "t": "1C-2",
          "q": "The histogram shows the battery life, in hours, of 40 wireless soil-moisture sensors. Each interval includes its left endpoint but not its right endpoint. Which of the following statements must be true?",
          "o": [
            "Exactly 13 of the sensors had a battery life of 25 hours, the midpoint of the tallest bar.",
            "The longest battery life was 60 hours, so the range of the battery lives is 60 hours.",
            "The median battery life is at least 30 hours, and 65% of the sensors lasted at least 30 hours.",
            "The median battery life is at least 20 but less than 30 hours, and 35% of the sensors lasted at least 30 hours."
          ],
          "a": 3,
          "w": "n = 40, median 20. ve 21. değerlerin ortalamasıdır. Birikimli sayılar 4, 13, 26: ikisi de 20–30 aralığına düşer. En az 30 saat dayananlar 8 + 4 + 2 = 14, yani 14/40 = %35. Histogram tek tek değerleri göstermez: 13 sensörün tam 25 saat olduğu ya da en büyük değerin 60 olduğu söylenemez (sağ uç aralığa dahil değil). %65 ise 30 saatten AZ dayananların yüzdesidir.",
          "fig": {
            "type": "hist",
            "label": "Battery life (hours)",
            "ylabel": "Frequency",
            "bins": [
              {
                "from": 0,
                "to": 10,
                "n": 4
              },
              {
                "from": 10,
                "to": 20,
                "n": 9
              },
              {
                "from": 20,
                "to": 30,
                "n": 13
              },
              {
                "from": 30,
                "to": 40,
                "n": 8
              },
              {
                "from": 40,
                "to": 50,
                "n": 4
              },
              {
                "from": 50,
                "to": 60,
                "n": 2
              }
            ]
          }
        },
        {
          "t": "1D-1",
          "q": "The annual salaries, in thousands of dollars, of the 9 employees of a start-up company are 38, 41, 43, 45, 47, 52, 55, 58, and 62. The company then hires a chief executive whose salary is 250 thousand dollars. By how much do the mean and the median salary increase when the new salary is included?",
          "o": [
            "The mean increases by 20.1 and the median increases by 2.5.",
            "The mean increases by 20.1 and the median does not change.",
            "The mean increases by 25.0 and the median increases by 2.5.",
            "The mean increases by 22.3 and the median increases by 5.0."
          ],
          "a": 0,
          "w": "Önce: toplam 441, mean = 441/9 = 49, median 5. değer = 47. Sonra: toplam 691, mean = 691/10 = 69.1 (artış 20.1); n = 10 olduğundan median 5. ve 6. değerlerin ortalaması = (47 + 52)/2 = 49.5 (artış 2.5). Median resistant'tır ama \"hiç değişmez\" demek değildir: n tekten çifte geçince ortadaki konum kayar. Mean ise resistant olmadığı için 20 birimden fazla sıçrar."
        },
        {
          "t": "1D-2",
          "q": "The nitrate concentrations, in milligrams per liter (mg/L), of water samples from 5 wells are 2, 5, 6, 7, and 10. The mean is 6 mg/L and the standard deviation is about 2.92 mg/L. A sixth well is sampled, and its nitrate concentration is exactly 6 mg/L. What is the standard deviation of the six concentrations?",
          "o": [
            "About 2.38 mg/L",
            "About 2.61 mg/L",
            "About 2.92 mg/L",
            "About 3.19 mg/L"
          ],
          "a": 1,
          "w": "Yeni değer mean'e eşit olduğu için mean 6'da kalır ve sapmaların kareleri toplamı değişmez: 16 + 1 + 0 + 1 + 16 + 0 = 34. Ama bölen n − 1 artık 5'tir: s = √(34/5) = √6.8 ≈ 2.61. \"Mean'e eşit değer hiçbir şeyi değiştirmez\" diye 2.92'de kalmak en çekici hatadır; tipik uzaklık azaldığı için SD küçülür. 2.38 ise n'ye (6'ya) bölünce çıkar."
        },
        {
          "t": "1D-3",
          "q": "The stemplot shows the download speeds, in megabits per second (Mbps), measured at 15 rural households. A boxplot of the data is drawn, with outliers identified by the 1.5 × IQR rule and shown as separate points. Which of the following correctly describes the boxplot?",
          "o": [
            "No speeds are outliers, and the upper whisker ends at 61 Mbps.",
            "Both 52 and 61 Mbps are outliers, and the upper whisker ends at 41 Mbps.",
            "Only 61 Mbps is an outlier, and the upper whisker ends at 52 Mbps.",
            "Only 61 Mbps is an outlier, and the upper whisker ends at 54.5 Mbps."
          ],
          "a": 2,
          "w": "n = 15: median 8. değer = 28. Alt yarı (7 değer) → Q1 = 22, üst yarı (7 değer) → Q3 = 35, IQR = 13. Sınırlar: 22 − 19.5 = 2.5 ve 35 + 19.5 = 54.5. Yalnızca 61 > 54.5 olduğu için outlier'dır; 52 sınırın altındadır. Bıyık sınır değerine (54.5) değil, outlier olmayan en büyük gerçek veriye, yani 52'ye kadar çizilir.",
          "fig": {
            "type": "stem",
            "key": "1|2 = 12 Mbps",
            "stems": [
              {
                "s": "1",
                "leaves": "2 8"
              },
              {
                "s": "2",
                "leaves": "1 2 4 5 7 8"
              },
              {
                "s": "3",
                "leaves": "0 1 3 5"
              },
              {
                "s": "4",
                "leaves": "1"
              },
              {
                "s": "5",
                "leaves": "2"
              },
              {
                "s": "6",
                "leaves": "1"
              }
            ]
          }
        },
        {
          "t": "1D-4",
          "q": "The stemplot shows the wheat yields, in bushels per acre, of 20 test plots. Which of the following gives the percentile of a plot with a yield of 47 bushels per acre and the yield of the plot that is at the 90th percentile?",
          "o": [
            "45th percentile; 61 bushels per acre",
            "50th percentile; 64 bushels per acre",
            "55th percentile; 64 bushels per acre",
            "55th percentile; 61 bushels per acre"
          ],
          "a": 3,
          "w": "Percentile = o değere eşit ya da ondan küçük gözlemlerin yüzdesi. 47'ye eşit ya da küçük 11 değer var (iki tane 47 dahil): 11/20 = %55 → 55th percentile. 90th percentile için 0.90 × 20 = 18 değer eşit ya da küçük olmalı; sıralı 18. değer 61'dir. 45th percentile yalnızca 47'den KÜÇÜK olanları (9 değer) sayınca çıkar; 64 ise 19. değerdir (95th).",
          "fig": {
            "type": "stem",
            "key": "3|1 = 31 bushels per acre",
            "stems": [
              {
                "s": "3",
                "leaves": "1 3 6 8"
              },
              {
                "s": "4",
                "leaves": "0 1 3 4 5 7 7 8"
              },
              {
                "s": "5",
                "leaves": "0 2 3 5 7"
              },
              {
                "s": "6",
                "leaves": "1 4"
              },
              {
                "s": "7",
                "leaves": "2"
              }
            ]
          }
        },
        {
          "t": "1D-4",
          "q": "A data center has two groups of servers. Response times in Group X have a mean of 200 milliseconds (ms) and a standard deviation of 12 ms. Response times in Group Y have a mean of 300 ms and a standard deviation of 20 ms. A lower response time is better. One server in Group X has a response time of 182 ms, and one server in Group Y has a response time of 268 ms. Which server performed better relative to its own group?",
          "o": [
            "The Group X server, because its response time of 182 ms is lower than the Group Y server's 268 ms.",
            "The Group Y server, because its response time is 1.6 standard deviations below its group mean, compared with 1.5 for the Group X server.",
            "The Group X server, because its z-score of −1.5 is greater than the Group Y server's z-score of −1.6.",
            "Neither server, because the two groups have different means and standard deviations and cannot be compared."
          ],
          "a": 1,
          "w": "z(X) = (182 − 200)/12 = −1.5 ve z(Y) = (268 − 300)/20 = −1.6. Düşük süre daha iyi olduğundan mean'in daha çok SD altında olan, yani z'si daha negatif olan sunucu kendi grubuna göre daha iyidir: Y. \"z'si büyük olan iyidir\" ezberi burada tuzaktır, çünkü bağlamda küçük değer iyidir. Ham süreleri (182 < 268) karşılaştırmak da gruplar farklı olduğu için göreli konumu göstermez; z-score tam da bu karşılaştırmayı mümkün kılar."
        },
        {
          "t": "1D-5",
          "q": "For each test flight of a delivery drone, an engineer records x, the flight time in minutes. The percent of battery charge remaining after a flight is y = 100 − 2.5x. For the flight times, the first quartile is 18 minutes and the third quartile is 26 minutes. What are the first quartile and the interquartile range of the percent of charge remaining?",
          "o": [
            "First quartile 35; interquartile range 20",
            "First quartile 55; interquartile range 20",
            "First quartile 35; interquartile range −20",
            "First quartile 55; interquartile range 80"
          ],
          "a": 0,
          "w": "Çarpan negatif (−2.5) olduğu için sıralama ters döner: en uzun uçuşlar en az şarjı bırakır. Bu yüzden y'nin Q1'i x'in Q3'ünden gelir: 100 − 2.5(26) = 35; y'nin Q3'ü 100 − 2.5(18) = 55. Yayılım ölçüleri |b| ile çarpılır, sabit eklemek etkilemez: IQR = 2.5 × 8 = 20 ve asla negatif olmaz. En çekici hata sıranın ters döndüğünü unutup Q1 = 55 demektir."
        },
        {
          "t": "1E",
          "q": "The boxplots summarize the yields, in bushels per acre, of plots of corn watered by two irrigation methods. Which of the following statements is supported by the boxplots?",
          "o": [
            "The range of the yields is greater for the sprinkler plots than for the drip plots.",
            "The yields of the drip plots are more variable, because their interquartile range is greater.",
            "The mean yield of the drip plots is 61 bushels per acre, which is greater than the mean of the sprinkler plots.",
            "At least three-fourths of the drip plots had a yield greater than the median yield of the sprinkler plots."
          ],
          "a": 3,
          "w": "Drip'in Q1'i 57, sprinkler'ın median'ı 56: drip plot'larının en az %75'i Q1'e eşit ya da ondan büyük, yani en az 57 verdiğine göre bunların hepsi 56'nın üstündedir. Range hesabına outlier da girer: drip 86 − 44 = 42, sprinkler 74 − 41 = 33; yani range drip'te daha büyüktür (bıyık ucuna, 70'e bakmak tuzaktır). IQR drip'te 9, sprinkler'da 13'tür. Boxplot mean'i göstermez; kutunun içindeki çizgi median'dır.",
          "fig": {
            "type": "box",
            "label": "Yield (bushels per acre)",
            "items": [
              {
                "name": "Sprinkler",
                "min": 41,
                "q1": 50,
                "med": 56,
                "q3": 63,
                "max": 74,
                "outliers": []
              },
              {
                "name": "Drip",
                "min": 44,
                "q1": 57,
                "med": 61,
                "q3": 66,
                "max": 70,
                "outliers": [
                  86
                ]
              }
            ]
          }
        },
        {
          "t": "1F-1",
          "q": "A company offered all of its employees a free wellness app. At the end of the year, the employees who had chosen to use the app had taken fewer sick days, on average, than the employees who had not used it. Which of the following best describes a potential confounding variable in this study?",
          "o": [
            "The number of sick days, because it is the variable that is expected to change when employees use the app.",
            "Honesty in reporting, because some employees may report fewer sick days than they actually took.",
            "Exercise habits, because employees who exercise regularly may be more likely to use the app and also tend to be sick less often.",
            "Age, because older employees tend to take more sick days than younger employees at any company."
          ],
          "a": 2,
          "w": "Confounding variable iki koşulu birden sağlamalıdır: explanatory variable ile (uygulamayı kullanmayı seçmek) ilişkili olmalı VE response'u (sick days) etkilemelidir. Yalnızca exercise habits şıkkı iki bağı da kuruyor. Age şıkkı yalnızca response ile bağı söylüyor, bu yüzden eksik bir tariftir. Sick days response variable'ın kendisidir; yanlış beyan ise response bias'tır, confounding değil."
        },
        {
          "t": "1F-1",
          "q": "An agronomist wants to study the effects of irrigation amount and fertilizer type on soybean yield. She will use 3 irrigation amounts (low, medium, high) and 4 types of fertilizer. Each of 72 similar plots will be randomly assigned to a treatment, with the same number of plots for each treatment, and the yield of each plot will be recorded. Which of the following correctly gives the number of treatments and the number of plots per treatment?",
          "o": [
            "12 treatments; 6 plots per treatment",
            "7 treatments; about 10 plots per treatment",
            "2 treatments; 36 plots per treatment",
            "12 treatments; 72 plots per treatment"
          ],
          "a": 0,
          "w": "İki factor var: irrigation amount (3 level) ve fertilizer type (4 level). Treatment, level'ların kombinasyonudur: 3 × 4 = 12 treatment; 72 plot eşit dağıtılırsa 72/12 = 6 plot düşer. 7, level'ları çarpmak yerine toplayınca çıkar; 2 ise treatment sayısı değil factor sayısıdır. Experimental units plot'lardır, response variable yield'dir."
        },
        {
          "t": "1F-2",
          "q": "An environmental agency suspects that nitrate concentrations are higher in wells located downstream of farms. It will measure the nitrate concentration in a random sample of 40 downstream wells and in a random sample of 40 upstream wells, selected from all private wells in Kent County. Which of the following investigative questions is most appropriate for this study?",
          "o": [
            "Among the 80 wells in the samples, is the mean nitrate concentration greater for downstream wells than for upstream wells?",
            "Among all private wells in Kent County, is the mean nitrate concentration different for downstream wells than for upstream wells?",
            "Among all private wells in Kent County, is the mean nitrate concentration greater for downstream wells than for upstream wells?",
            "Among all private wells in Kent County, is the proportion of wells that contain any nitrate greater than 0.50?"
          ],
          "a": 2,
          "w": "Investigative question üç şeyi doğru vermeli: variable (nitrate concentration → quantitative, yani parametre mean), yön (şüphe \"higher\" → \"greater\", \"different\" değil) ve population (örneklemin rastgele çekildiği tüm Kent County kuyuları). \"Different\" diyen şık yönü kaçırıyor; en çekici yanlış odur. Örneklemdeki 80 kuyu hakkında soru sormak inference değildir; proportion şıkkı ise değişkeni ve parametreyi değiştirir."
        },
        {
          "t": "1G-1",
          "q": "A factory packs solar panels in crates of 24. Today's production is 50 crates. To estimate the proportion of today's panels that have surface cracks, an inspector randomly selects 6 of the 50 crates and examines every panel in the selected crates. Which of the following best describes this sampling method and a disadvantage of it?",
          "o": [
            "Stratified random sample; panels in the same crate may be alike, so each stratum is not well represented.",
            "Cluster random sample; panels in the same crate may be alike, so 6 crates may not represent all of today's panels well.",
            "Simple random sample; every panel has the same chance of being selected, so the method has no disadvantage.",
            "Systematic random sample; a pattern in the order of the crates might match the sampling interval."
          ],
          "a": 1,
          "w": "Rastgele seçilen şey tek tek paneller değil, bütün gruplar (crate) ve seçilen grubun içindeki herkes inceleniyor: bu cluster random sample. Stratified olsaydı HER crate'ten birkaç panel rastgele seçilirdi. Aynı crate'teki paneller birlikte üretildiği için birbirine benzeyebilir; o zaman 6 crate bütün üretimi iyi temsil etmeyebilir. Her panelin şansı eşit (6/50) olsa da bu SRS değildir, çünkü 144 panellik her olası grup seçilemez."
        },
        {
          "t": "1G-2",
          "q": "A regional health department wants to estimate the proportion of all adults in the region who received a flu vaccination this year. It selects a random sample of 1,200 adults from the list of people who visited one of the region's clinics during the past 12 months, and all 1,200 provide the information. Which of the following best describes the bias in this method and its likely effect?",
          "o": [
            "Nonresponse bias; the estimate is likely to be less than the true proportion.",
            "Voluntary response bias; the estimate is likely to be greater than the true proportion.",
            "Undercoverage bias; the estimate is likely to be less than the true proportion.",
            "Undercoverage bias; the estimate is likely to be greater than the true proportion."
          ],
          "a": 3,
          "w": "Sampling frame yalnızca son 12 ayda kliniğe gidenleri içeriyor; kliniğe hiç gitmeyen yetişkinlerin seçilme şansı yok: undercoverage. Dışarıda kalanlar muhtemelen daha az aşı olmuştur, bu yüzden örneklemdeki oran gerçek orandan büyük çıkar (overestimate). Seçilen herkes cevap verdiği için nonresponse yoktur; kişiler kendileri katılmadığı, rastgele seçildiği için voluntary response da değildir."
        },
        {
          "t": "1G-2",
          "q": "An agriculture ministry wants to estimate the proportion of farmers in a province who used a banned pesticide last season. A ministry inspector visits each farmer in a random sample of 400 farmers and asks, face to face, whether the farmer used the pesticide. All 400 farmers answer, and 3% say yes. Which of the following best describes the most likely bias and its effect?",
          "o": [
            "Nonresponse bias; the true proportion is probably greater than 3%.",
            "Response bias; the true proportion is probably greater than 3%.",
            "Response bias; the true proportion is probably less than 3%.",
            "Undercoverage bias; the true proportion is probably less than 3%."
          ],
          "a": 1,
          "w": "Örneklem rastgele ve herkes cevap vermiş; sorun cevabın doğruluğunda. Yasak bir şeyi bakanlık müfettişine yüz yüze itiraf etmek zor olduğundan bazı çiftçiler \"hayır\" der: response bias. Bu, %3'ü gerçek orandan küçük yapar (underestimate), yani gerçek oran muhtemelen daha büyüktür. Nonresponse şıkkı yönü doğru söylese de 400 kişinin hepsi cevap verdiği için yanlıştır."
        },
        {
          "t": "1H-1",
          "q": "A materials engineer wants to compare two anti-corrosion coatings, A and B, using 60 steel bolts from one production run. She applies coating A to the first 30 bolts that come off the production line and coating B to the last 30. All 60 bolts are then kept in the same salt-spray chamber for 500 hours, and the amount of corrosion on each bolt is measured. Which of the following is the most serious flaw in this design?",
          "o": [
            "The coatings were not randomly assigned, so differences between early and late bolts are confounded with the coating.",
            "There is no control group of uncoated bolts, so the two coatings cannot be compared with each other.",
            "The bolts were not randomly selected from all bolts, so no conclusion about the coatings is possible.",
            "The experiment is not double-blind, because all of the bolts were kept in the same salt-spray chamber."
          ],
          "a": 0,
          "w": "Random assignment yok: ilk 30 ve son 30 cıvata sistematik olarak farklı olabilir (makine ısınması, kalıp aşınması). Bu fark coating ile birlikte değiştiği için corrosion'daki farkın hangisinden geldiği ayrılamaz: confounding. İki coating birbiriyle karşılaştırıldığı için comparison ilkesi sağlanıyor; kaplamasız control group şart değil. Random selection yalnızca genellemeyi etkiler; aynı odada tutmak ise direct control'dür, kusur değil."
        },
        {
          "t": "1H-2",
          "q": "A researcher will compare the yields of two wheat varieties, X and Y, on 40 plots. Twenty plots lie beside a river, where the soil is wet, and twenty lie on a hillside, where the soil is dry. Soil moisture is known to affect yield. Which of the following describes a randomized block design for this experiment and correctly states its benefit?",
          "o": [
            "Randomly assign 20 of the 40 plots to X and the rest to Y; this guarantees that each variety gets 10 river plots and 10 hillside plots.",
            "Plant X on the 20 river plots and Y on the 20 hillside plots; this keeps the growing conditions the same within each variety.",
            "Within each location, randomly assign 10 plots to X and 10 to Y; this allows the results to be generalized to all wheat farms.",
            "Within each location, randomly assign 10 plots to X and 10 to Y; this accounts for the variability in yield due to soil moisture."
          ],
          "a": 3,
          "w": "Randomized block design'da önce response'u etkileyen değişkene göre block kurulur (river / hillside), sonra treatment'lar HER block'un içinde rastgele atanır. Faydası: soil moisture'dan gelen değişkenlik hesaba katılır, varieties arasındaki fark daha kolay görülür. Blocking genellemeyle ilgili değildir (o random selection'ın işi), bu yüzden aynı yöntemi doğru anlatıp faydayı yanlış söyleyen şık tuzaktır. Completely randomized design 10–10 dağılımı garanti etmez; X'i nehre, Y'yi yamaca dikmek ise variety ile moisture'ı confound eder."
        },
        {
          "t": "1H-3",
          "q": "Researchers recruited 120 adult volunteers with insomnia from one sleep clinic and randomly assigned 60 of them to use a therapy app and 60 to read a printed pamphlet. After 8 weeks, the mean improvement in sleep time was statistically significantly greater for the app group. Which of the following conclusions is most appropriate?",
          "o": [
            "The app causes a greater improvement in sleep time for all adults who have insomnia.",
            "App use is associated with greater improvement, but no cause-and-effect conclusion is possible because the subjects were volunteers.",
            "The app causes a greater improvement in sleep time for adults with insomnia who are similar to the volunteers in the study.",
            "No conclusion is possible, because the difference between the groups could be due to the chance involved in the random assignment."
          ],
          "a": 2,
          "w": "Random assignment var ve fark statistically significant → cause-and-effect sonucu çıkarılabilir. Random selection yok (tek klinikten gönüllüler) → sonuç yalnızca çalışmadakilere benzeyen kişilere genellenir, tüm insomnia hastalarına değil. Gönüllü olmak neden-sonucu engellemez, yalnızca genellemeyi sınırlar; en çekici yanlış bu ikisini karıştırır. \"Statistically significant\" zaten farkın yalnızca şansla açıklanamayacak kadar büyük olduğu anlamına gelir."
        }
      ]
    },
    {
      "no": 5,
      "level": "Çok zor",
      "minutes": 35,
      "questions": [
        {
          "t": "1A",
          "q": "A water utility serves 4,200 homes. A chemist measures the lead concentration, in parts per billion (ppb), of the tap water in 30 randomly selected homes and finds a mean of 3.8 ppb. Consider the following statements.\nI. The 30 selected homes are the sample, and the 4,200 homes served by the utility are the population.\nII. Because the homes were selected at random, 3.8 ppb is the value of a parameter.\nIII. Lead concentration is a discrete variable, because the measurements are reported to the nearest tenth.\nWhich of the statements are true?",
          "o": [
            "I only",
            "I and II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 0,
          "w": "I doğru: bilgi istenen grubun tamamı (4,200 ev) population, ölçülen 30 ev sample'dır. II yanlış: 3.8 ppb örneklemden hesaplandığı için statistic'tir (x̄); parameter (μ) 4,200 evin tamamının ortalamasıdır ve bilinmiyor. Rastgele seçim bir statistic'i parameter yapmaz. III yanlış: concentration ölçülerek bulunur, yani continuous'tur; yuvarlanarak yazılması onu discrete yapmaz."
        },
        {
          "t": "1B",
          "q": "A factory inspected 300 circuit boards made on the day shift and 100 circuit boards made on the night shift. The bar chart shows, for each shift, the percent of the boards in each inspection category. Of all the inspected boards that had a major defect, what percent were made on the day shift?",
          "o": [
            "4%",
            "About 28.6%",
            "About 45.5%",
            "About 54.5%"
          ],
          "a": 3,
          "w": "Grafik yüzde veriyor, önce sayıya çevir: day shift 300'ün %4'ü = 12 board, night shift 100'ün %10'u = 10 board. Major defect'li toplam 22 board'un 12'si day shift'ten: 12/22 ≈ %54.5. Night shift'in oranı daha yüksek olsa da day shift çok daha fazla ürettiği için kusurluların çoğu oradan gelir. %28.6, grup büyüklüklerini yok sayıp 4/(4 + 10) yapınca çıkar; %4 ise sorunun tersidir (day shift board'larının yüzde kaçı kusurlu).",
          "fig": {
            "type": "bar",
            "cats": [
              "No defect",
              "Minor defect",
              "Major defect"
            ],
            "ylabel": "Percent of boards",
            "series": [
              {
                "name": "Day shift (300 boards)",
                "values": [
                  90,
                  6,
                  4
                ]
              },
              {
                "name": "Night shift (100 boards)",
                "values": [
                  78,
                  12,
                  10
                ]
              }
            ]
          }
        },
        {
          "t": "1C-1",
          "q": "The dotplot shows the number of times a new mobile app crashed on each of 24 days of testing. Consider the following statements.\nI. The distribution of the number of crashes is skewed to the right.\nII. On at least 25% of the days, the app crashed 4 or more times.\nIII. The median number of crashes is 2.\nWhich of the statements are true?",
          "o": [
            "I only",
            "I and II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "I doğru: kuyruk büyük değerlere (5, 7, 9) uzanıyor. II yanlış: 4 ya da daha fazla çökme 2 + 1 + 1 + 1 = 5 günde var, 5/24 ≈ %20.8 < %25. III doğru: n = 24, median 12. ve 13. değerlerin ortalaması; 0'lar 3, 1'ler 9, 2'ler 15. sıraya kadar gittiği için ikisi de 2'dir. II'yi doğru saymak (4'ün üstündeki noktaları göz kararı \"çeyrek\" görmek) en yaygın hatadır; say ve böl.",
          "fig": {
            "type": "dot",
            "values": [
              0,
              0,
              0,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              2,
              2,
              2,
              2,
              2,
              3,
              3,
              3,
              3,
              4,
              4,
              5,
              7,
              9
            ],
            "label": "Number of crashes per day"
          }
        },
        {
          "t": "1C-2",
          "q": "The histogram shows the response times, in minutes, for 80 emergency calls to an ambulance service. Each interval includes its left endpoint but not its right endpoint. Which of the following could be the interquartile range of the response times?",
          "o": [
            "4 minutes",
            "9 minutes",
            "16 minutes",
            "22 minutes"
          ],
          "a": 1,
          "w": "n = 80: Q1, alt 40 değerin median'ı = 20. ve 21. değerlerin ortalaması; Q3 = 60. ve 61. değerlerin ortalaması. Birikimli sayılar 8, 24, 48, 62, 72, 80 → 20. ve 21. değer 5–10 aralığında, 60. ve 61. değer 15–20 aralığında. Yani 5 ≤ Q1 < 10 ve 15 ≤ Q3 < 20; IQR 5'ten büyük, 15'ten küçük olmak zorunda. Şıklardan yalnızca 9 bu aralıkta. Histogramdan IQR'ın tam değeri okunmaz ama olası aralığı bulunur.",
          "fig": {
            "type": "hist",
            "label": "Response time (minutes)",
            "ylabel": "Frequency",
            "bins": [
              {
                "from": 0,
                "to": 5,
                "n": 8
              },
              {
                "from": 5,
                "to": 10,
                "n": 16
              },
              {
                "from": 10,
                "to": 15,
                "n": 24
              },
              {
                "from": 15,
                "to": 20,
                "n": 14
              },
              {
                "from": 20,
                "to": 25,
                "n": 10
              },
              {
                "from": 25,
                "to": 30,
                "n": 8
              }
            ]
          }
        },
        {
          "t": "1D-1",
          "q": "An online retailer ships orders from two warehouses. Last week the mean delivery time for all 250 orders was 3.4 days. The 100 orders shipped from Warehouse A had a mean delivery time of 4.0 days. What was the mean delivery time for the 150 orders shipped from Warehouse B?",
          "o": [
            "2.5 days",
            "2.8 days",
            "3.0 days",
            "3.7 days"
          ],
          "a": 2,
          "w": "Mean = toplam / n olduğundan toplamlarla çalış: tüm siparişlerin toplamı 250 × 3.4 = 850 gün, A'nın toplamı 100 × 4.0 = 400 gün. B'nin toplamı 850 − 400 = 450, mean = 450/150 = 3.0 gün. 2.8 günü veren hata, grupları eşit büyüklükte sanıp (4.0 + x)/2 = 3.4 çözmektir; birleşik mean, grup büyüklükleriyle ağırlıklıdır."
        },
        {
          "t": "1D-2",
          "q": "A lab technician weighs a calibration standard six times, and all six readings are exactly 20 milligrams. A seventh reading is 27 milligrams. What is the standard deviation of the seven readings, in milligrams?",
          "o": [
            "About 2.45",
            "About 2.65",
            "About 3.50",
            "7.00"
          ],
          "a": 1,
          "w": "Yeni mean = (6 × 20 + 27)/7 = 147/7 = 21. Sapmalar: altı tane −1 ve bir tane +6; kareler toplamı 6(1) + 36 = 42. s² = 42/(7 − 1) = 7 ve s = √7 ≈ 2.65. 7.00 variance'tır, karekök alınmamıştır; 2.45 ise n − 1 yerine n'ye bölünce (√6) çıkar. İlk altı değerde s = 0 iken tek bir farklı değer SD'yi sıfırdan uzaklaştırır: SD resistant değildir."
        },
        {
          "t": "1D-3",
          "q": "The table shows summary statistics for the monthly electricity use, in kilowatt-hours (kWh), of a sample of 50 apartments. Based only on these statistics, which of the following must be true?",
          "o": [
            "At least one apartment's electricity use is a high outlier by the 1.5 × IQR rule.",
            "The upper whisker of a boxplot that shows outliers ends at exactly 255 kWh.",
            "Exactly 25 of the 50 apartments used less than 110 kWh of electricity.",
            "The apartment that used 600 kWh is the only apartment that is an outlier."
          ],
          "a": 0,
          "w": "IQR = 150 − 80 = 70, üst sınır 150 + 1.5(70) = 255, alt sınır 80 − 105 = −25. Max = 600 > 255 olduğuna göre en az bir high outlier kesin var. Ama 255 ile 600 arasında başka değerler de olabilir, yani 600 \"tek\" outlier olmak zorunda değil. Bıyık 255'e değil, 255'i aşmayan en büyük gerçek değere kadar gider; onu özet istatistiklerden bilemeyiz. 25. ve 26. değerlerin ikisi de 110 olabilir, o zaman 110'dan küçük olanlar 25'ten azdır.",
          "fig": {
            "type": "table",
            "head": [
              "n",
              "Mean",
              "SD",
              "Min",
              "Q1",
              "Median",
              "Q3",
              "Max"
            ],
            "rows": [
              [
                50,
                142,
                86,
                20,
                80,
                110,
                150,
                600
              ]
            ]
          }
        },
        {
          "t": "1D-4",
          "q": "The heights of the seedlings in a greenhouse have mean μ and standard deviation σ. A seedling that is 46 cm tall has a z-score of −0.8, and a seedling that is 61 cm tall has a z-score of 1.2. What are the values of μ and σ?",
          "o": [
            "μ = 50 cm and σ = 5 cm",
            "μ = 53.5 cm and σ = 7.5 cm",
            "μ = 52 cm and σ = 15 cm",
            "μ = 52 cm and σ = 7.5 cm"
          ],
          "a": 3,
          "w": "İki fidan arasında 61 − 46 = 15 cm ve 1.2 − (−0.8) = 2 standard deviation var; demek ki σ = 15/2 = 7.5 cm. Sonra value = μ + zσ: 46 = μ − 0.8(7.5) → μ = 52 cm. Kontrol: (61 − 52)/7.5 = 1.2. 53.5, iki boyun tam ortasıdır; ama z-score'lar simetrik olmadığı (−0.8 ve 1.2) için mean ortada değildir, 46'ya daha yakındır."
        },
        {
          "t": "1D-5",
          "q": "The daily high temperatures at a research station on 200 days, measured in degrees Fahrenheit, have a distribution that is skewed to the left with a mean of 77°F and a standard deviation of 9°F. Each temperature is converted to a z-score. Consider the following statements.\nI. The z-scores have a mean of 0 and a standard deviation of 1.\nII. The distribution of the z-scores is skewed to the left.\nIII. A day's z-score would be different if the temperatures were first converted to degrees Celsius.\nWhich of the statements are true?",
          "o": [
            "I and II only",
            "I and III only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 0,
          "w": "z = (x − 77)/9: önce mean çıkarılır (yeni mean 0), sonra SD'ye bölünür (yeni SD 9/9 = 1), yani I doğru. Sabit çıkarmak ve pozitif sabite bölmek shape'i değiştirmez; dağılım skewed left kalır, II doğru. Standardize etmek dağılımı simetrik ya da normal yapmaz. III yanlış: Celsius'a çevirmek de pozitif çarpanlı doğrusal bir dönüşümdür; her değerin mean'den kaç SD uzakta olduğu değişmez, z-score aynı kalır."
        },
        {
          "t": "1E",
          "q": "The boxplots summarize the reductions in systolic blood pressure, in mm Hg, for patients who took a new drug and for patients who took a standard drug. Consider the following statements.\nI. The reductions for the new drug are more variable than the reductions for the standard drug, as measured by the interquartile range.\nII. At least half of the patients who took the new drug had a reduction greater than or equal to the third quartile of the reductions for the standard drug.\nIII. The range of the reductions is greater for the new drug than for the standard drug.\nWhich of the statements are true?",
          "o": [
            "I and II only",
            "I and III only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "I yanlış: IQR new drug'da 15 − 9 = 6, standard drug'da 12 − 4 = 8; ortadaki yarı new drug'da daha az değişken. II doğru: new drug'ın median'ı 12, standard drug'ın Q3'ü de 12; değerlerin en az yarısı median'a eşit ya da ondan büyüktür. III doğru: range'e outlier dahildir, new drug 31 − 2 = 29, standard 22 − 0 = 22. Bıyık uçlarına bakıp (22 − 2 = 20) III'ü yanlış saymak en çekici hatadır.",
          "fig": {
            "type": "box",
            "label": "Reduction in systolic blood pressure (mm Hg)",
            "items": [
              {
                "name": "New drug",
                "min": 2,
                "q1": 9,
                "med": 12,
                "q3": 15,
                "max": 22,
                "outliers": [
                  31
                ]
              },
              {
                "name": "Standard drug",
                "min": 0,
                "q1": 4,
                "med": 8,
                "q3": 12,
                "max": 22,
                "outliers": []
              }
            ]
          }
        },
        {
          "t": "1F-1",
          "q": "A hospital has 12 wards with a total of about 600 patients. To compare two hand-hygiene protocols, administrators randomly assign 6 wards to follow protocol A and 6 wards to follow protocol B for three months. At the end, they record the percent of patients in each ward who developed an infection. Which of the following correctly identifies the experimental units and the response variable?",
          "o": [
            "The patients; whether or not each patient followed the assigned protocol",
            "The patients; the percent of patients in each ward who developed an infection",
            "The wards; the hand-hygiene protocol that each ward was assigned to follow",
            "The wards; the percent of patients in each ward who developed an infection"
          ],
          "a": 3,
          "w": "Experimental unit, treatment'ın rastgele atandığı en küçük birimdir. Protokoller hastalara tek tek değil, koğuşlara (wards) atandı; bu yüzden units = 12 ward, 600 hasta değil. Response, her ward için ölçülen sonuçtur: infection yüzdesi. Protokol explanatory variable'dır (treatment), response değil. Hastaları unit saymak en çekici hatadır; replication da 600 değil, her treatment için 6 ward'dur."
        },
        {
          "t": "1F-2",
          "q": "An agronomist selects a random sample of 50 farms from the 1,900 wheat farms in a province. For each farm she records the wheat yield per hectare and whether the farmer chose to plant cover crops last winter. Which of the following investigative questions is most appropriate for this study?",
          "o": [
            "Among the 50 farms in the sample, is the mean wheat yield different for farms that plant cover crops than for farms that do not?",
            "Among all wheat farms in the province, is the mean wheat yield different for farms that plant cover crops than for farms that do not?",
            "Among all wheat farms in the province, does planting cover crops cause an increase in the mean wheat yield?",
            "Among all wheat farms in the country, is the mean wheat yield different for farms that plant cover crops than for farms that do not?"
          ],
          "a": 1,
          "w": "Rastgele örneklem eyaletteki 1,900 çiftlikten çekildi → sonuç o population'a genellenir; ülkedeki tüm çiftliklere değil, yalnızca 50 çiftliğe de değil. Cover crop ekmeyi çiftçiler kendileri seçti, treatment atanmadı: bu observational study'dir ve \"cause\" sorusu bu veriyle cevaplanamaz. Geriye, doğru population için mean'ler arasındaki farkı soran şık kalır. İyi bir investigative question, toplanan verinin izin verdiği conclusion türüyle uyumlu olmalıdır."
        },
        {
          "t": "1G-1",
          "q": "A laboratory houses 60 mice in 12 cages, with 5 mice in each cage. To choose mice for a blood test, a technician uses a random number generator to select one mouse from each cage, which gives a sample of 12 mice. Is this a simple random sample of the 60 mice?",
          "o": [
            "Yes, because each of the 60 mice has the same chance of being selected for the sample.",
            "Yes, because the mice are selected at random and no mouse can be selected more than once.",
            "No, because not every group of 12 mice can be selected; it is a stratified random sample.",
            "No, because the cages are the units that are selected; it is a cluster random sample."
          ],
          "a": 2,
          "w": "SRS tanımı: n büyüklüğündeki HER olası grubun seçilme şansı eşit olmalı. Burada aynı kafesten iki fare içeren hiçbir 12'li grup seçilemez, o yüzden SRS değildir. Her kafesten (stratum) ayrı ayrı rastgele seçim yapıldığı için bu stratified random sample'dır. Her farenin şansı gerçekten eşittir (1/5), ama bu SRS için yetmez; en çekici tuzak budur. Cluster olsaydı bütün kafesler seçilir ve içindeki tüm fareler alınırdı."
        },
        {
          "t": "1G-2",
          "q": "A power company wants to estimate the mean number of hours per week that the homes in a city are unoccupied. Interviewers visit a random sample of 500 homes on weekday afternoons. Someone is at home and answers the question at 190 of the homes; the other 310 homes are not visited again. Which of the following best describes the bias in this method and its likely effect?",
          "o": [
            "Nonresponse bias; the estimate is likely to be less than the true mean.",
            "Nonresponse bias; the estimate is likely to be greater than the true mean.",
            "Undercoverage bias; the estimate is likely to be less than the true mean.",
            "Voluntary response bias; the estimate is likely to be greater than the true mean."
          ],
          "a": 0,
          "w": "310 ev örnekleme seçildi ama onlardan veri alınamadı: bu nonresponse'tur. Undercoverage değildir, çünkü o evlerin seçilme şansı vardı ve seçildiler. Hafta içi öğleden sonra evde bulunamayanlar, evi daha uzun süre boş bırakan hanelerdir; onlar eksik kalınca cevap verenlerin ortalaması gerçek mean'den küçük çıkar (underestimate). AP'de bias'ı anlatırken iki adım şart: cevap verenler nasıl farklı ve bu tahmini hangi yöne iter."
        },
        {
          "t": "1G-2",
          "q": "A technology magazine posts this question on its website: \"Do you agree that artificial intelligence tools, which threaten millions of jobs, should be strictly regulated?\" Of the 45,000 visitors who choose to answer, 88% say yes. The magazine reports that 88% of all adults favor strict regulation. Consider the following statements.\nI. The results are likely to be affected by voluntary response bias.\nII. Because 45,000 is a very large sample, 88% should be close to the percent for all adults.\nIII. The wording of the question is likely to increase the percent who say yes.\nWhich of the statements are true?",
          "o": [
            "I only",
            "I and III only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "I doğru: katılanlar kendileri seçti (voluntary response); konu hakkında güçlü görüşü olanlar ve yalnızca bu sitenin ziyaretçileri cevap verir. III doğru: \"which threaten millions of jobs\" ifadesi yönlendiricidir (question wording bias) ve \"yes\" yüzdesini şişirir. II yanlış: büyük örneklem bias'ı düzeltmez; kötü yöntemle toplanan 45,000 cevap, aynı yönde şaşan büyük bir örneklemdir. Bias'ın çaresi örneklem büyüklüğü değil, random selection ve tarafsız sorudur."
        },
        {
          "t": "1H-1",
          "q": "A pharmacologist has 40 volunteers and wants to randomly assign them to two treatment groups, a new drug and a placebo, with exactly 20 volunteers in each group. Which of the following methods will accomplish this?",
          "o": [
            "Flip a coin for each volunteer; heads receives the new drug, and tails receives the placebo.",
            "List the volunteers alphabetically; the first 20 receive the new drug, and the last 20 receive the placebo.",
            "Randomly select 20 of the 40 volunteers for the new drug; then randomly select 20 of the 40 volunteers for the placebo.",
            "Number the volunteers 1 to 40; generate 20 different random integers from 1 to 40 for the new drug, and give the rest the placebo."
          ],
          "a": 3,
          "w": "Numarala → tekrarsız 20 rastgele tam sayı üret → o 20 kişi new drug, kalan 20 kişi placebo: hem rastgele hem de gruplar tam 20–20. Yazı-tura rastgeledir ama grupların eşit çıkmasını garanti etmez (örneğin 23–17 olabilir); AP'de eşit grup isteniyorsa coin kullanılmaz, en çekici tuzak budur. Alfabetik sıra rastgele değildir. 40 kişiden iki ayrı kez 20 kişi seçmek ise aynı kişiyi iki gruba koyabilir, bazılarını da dışarıda bırakır."
        },
        {
          "t": "1H-2",
          "q": "A plant scientist will compare the effects of two fertilizers on the total weight of tomatoes produced per plant. The 24 available plants are 12 cherry-tomato plants and 12 beefsteak-tomato plants, and beefsteak plants produce a much greater weight of tomatoes. The plants are in pots of several colors, and all of them will be kept in one greenhouse. Which of the following is the best way to form blocks?",
          "o": [
            "Block by tomato variety, because variety is strongly related to the weight of tomatoes that a plant produces.",
            "Block by fertilizer, because the plants that receive the same fertilizer should be grouped together.",
            "Block by pot color, because pot color is easy to observe and each block will then contain both varieties.",
            "Block by the weight of tomatoes produced, because it is the response variable that will be measured."
          ],
          "a": 0,
          "w": "Block, response'u en çok etkileyen ve deney başlamadan bilinen değişkene göre kurulur: burada tomato variety. Her variety'nin içinde 6 bitki bir fertilizer'a, 6 bitki diğerine rastgele atanır; böylece variety'den gelen büyük değişkenlik hesaba katılır. Fertilizer treatment'tır, block değişkeni olamaz (block içinde iki treatment da bulunmalı). Pot color response ile ilişkili değildir; response ise deney bitmeden bilinmez, ona göre block kurulamaz."
        },
        {
          "t": "1H-2",
          "q": "A company wants to compare the typing speeds achieved with two keyboard designs, A and B, using 20 programmers. Each programmer will take a typing test on both keyboards. Which of the following is the best plan for this matched pairs experiment?",
          "o": [
            "Have every programmer use keyboard A first and then keyboard B, so that the conditions are the same for everyone.",
            "Let each programmer choose which keyboard to use first, so that everyone is comfortable during the first test.",
            "Flip a coin for each programmer to decide which keyboard is used first, so that practice or fatigue is not confounded with keyboard design.",
            "Randomly assign 10 programmers to use only keyboard A and 10 to use only keyboard B, so that the two groups are roughly equivalent."
          ],
          "a": 2,
          "w": "Her birim iki treatment'ı da aldığında matched pairs design'ın rastgeleliği SIRADA olur: her programcı için coin atılır, hangi klavyenin önce kullanılacağı belirlenir. Herkes önce A'yı kullanırsa ikinci testteki alışma (practice) ya da yorgunluk (fatigue) etkisi B ile karışır: confounding. \"Koşullar herkes için aynı olsun\" gerekçesi kulağa direct control gibi gelir, tuzak budur. 10–10 ayırmak completely randomized design'dır ve programcılar arasındaki hız farkını hesaba katmaz."
        },
        {
          "t": "1H-3",
          "q": "In an experiment, 30 patients were randomly assigned to a new physical-therapy program or to the standard program, with 15 patients in each group. The mean improvement in grip strength was 4 kilograms greater for the new-program group. To see whether a difference this large could happen by chance alone, a researcher simulated the random assignment 100 times, assuming that the program has no effect. The dotplot shows the 100 simulated differences in mean improvement (new − standard), rounded to the nearest kilogram. Based on the simulation, is the observed difference statistically significant?",
          "o": [
            "Yes, because only 4 of the 100 simulated differences are equal to 4, and 4% is less than 5%.",
            "No, because 7 of the 100 simulated differences are 4 or greater, so a difference this large is not unusual when only chance is involved.",
            "Yes, because the observed difference of 4 kilograms is greater than 0, the center of the simulated differences.",
            "No, because the simulated differences are centered at 0, which shows that the new program has no effect."
          ],
          "a": 1,
          "w": "Sorulacak soru: yalnızca rastgele atamanın şansıyla 4 ya da DAHA BÜYÜK bir fark ne sıklıkla çıkar? Dotplot'ta 4'te 4, 5'te 2, 6'da 1 nokta var: 7/100 = %7. Bu %5'ten büyük olduğu için fark şansla açıklanabilir → not statistically significant. Yalnızca tam 4'e eşit olanları sayıp %4 bulmak en çekici hatadır. Simülasyonun 0'da merkezlenmesi ise \"etki yok\" varsayımıyla kurulduğu içindir; programın etkisiz olduğunu kanıtlamaz.",
          "fig": {
            "type": "dot",
            "values": [
              -6,
              -5,
              -5,
              -4,
              -4,
              -4,
              -4,
              -3,
              -3,
              -3,
              -3,
              -3,
              -3,
              -3,
              -3,
              -2,
              -2,
              -2,
              -2,
              -2,
              -2,
              -2,
              -2,
              -2,
              -2,
              -2,
              -2,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              -1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              2,
              2,
              2,
              2,
              2,
              2,
              2,
              2,
              2,
              2,
              3,
              3,
              3,
              3,
              3,
              3,
              3,
              3,
              4,
              4,
              4,
              4,
              5,
              5,
              6
            ],
            "label": "Simulated difference in mean improvement (kg)"
          }
        },
        {
          "t": "1H-3",
          "q": "Two studies of vitamin D supplements and bone density are summarized in the table. Consider the following statements.\nI. Study 1 allows the conclusion that taking vitamin D causes higher bone density for adults in the city.\nII. Study 1 allows the conclusion that, among all adults in the city, those who take vitamin D have a higher mean bone density than those who do not.\nIII. Study 2 allows the conclusion that taking vitamin D causes higher bone density for adults similar to the volunteers.\nWhich of the statements are true?",
          "o": [
            "I only",
            "II only",
            "I and II only",
            "II and III only"
          ],
          "a": 3,
          "w": "Scope of inference iki ayrı soruya bakar: random selection var mı (→ population'a genelleme) ve random assignment var mı (→ cause-and-effect). Study 1: rastgele örneklem var, atama yok → şehirdeki tüm yetişkinler için ilişki söylenir (II doğru) ama neden-sonuç söylenemez (I yanlış; örneğin sağlığına dikkat edenler hem vitamin alıyor hem daha çok egzersiz yapıyor olabilir). Study 2: gönüllüler ama rastgele atama var → neden-sonuç var, yalnızca gönüllülere benzeyenler için (III doğru).",
          "fig": {
            "type": "table",
            "head": [
              "",
              "Study 1",
              "Study 2"
            ],
            "rows": [
              [
                "Participants",
                "Random sample of 600 adults from a city",
                "90 adult volunteers"
              ],
              [
                "Method",
                "Recorded whether each adult takes vitamin D",
                "Randomly assigned to vitamin D or a placebo"
              ],
              [
                "Result",
                "Significantly higher mean bone density for those who take vitamin D",
                "Significantly higher mean bone density for the vitamin D group"
              ]
            ]
          }
        }
      ]
    }
  ]
};
