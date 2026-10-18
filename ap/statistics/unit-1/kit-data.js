/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/st1N/questions.json) */
window.KIT = {
  "store": "stat-u1:v1:",
  "course": "AP Statistics",
  "unitLabel": "Unit 1 — Exploring One-Variable Data and Collecting Data",
  "denemeler": {
    "url": "deneme/",
    "count": 5
  },
  "episodes": [
    {
      "no": 1,
      "code": "1A",
      "slug": "st101",
      "title": "Veriyle Tanış",
      "en": "Statistics: Learning from Data",
      "accent": "#F5B041",
      "seconds": 327,
      "terms": [
        "Statistics",
        "Population",
        "Sample",
        "Census",
        "Observational units (individuals)",
        "Variable",
        "Categorical variable",
        "Quantitative variable",
        "Discrete",
        "Continuous",
        "Distribution"
      ],
      "questions": [
        {
          "q": "Bir öğretmen sınıfındaki beş öğrenci için aşağıdaki tabloyu hazırlıyor. Tablodaki sütunlardan kaç tanesi *quantitative variable*'dır?",
          "opts": [
            "1",
            "2",
            "3",
            "4"
          ],
          "a": 1,
          "why": "Yalnızca *Commute time* ve *Siblings* sayma ya da ölçmeyle bulunur ve ortalaması anlamlıdır; yani 2 tane. *Student ID* ve *Zip code* sayıyla yazılır ama miktar değil etikettir, bu yüzden *categorical*'dır; *Transport* da *categorical*.",
          "fig": {
            "type": "table",
            "head": [
              "Student ID",
              "Transport",
              "Commute time (min)",
              "Siblings",
              "Zip code"
            ],
            "rows": [
              [
                2471,
                "Metro",
                35,
                1,
                34664
              ],
              [
                2518,
                "Bus",
                45,
                2,
                34710
              ],
              [
                2533,
                "Walk",
                10,
                1,
                34672
              ],
              [
                2590,
                "Service bus",
                20,
                0,
                34684
              ],
              [
                2604,
                "Service bus",
                25,
                3,
                34722
              ]
            ],
            "caption": "Beş öğrencinin anket yanıtları"
          }
        },
        {
          "q": "Bir basketbol takımının analisti, sezonun ilk dört maçı için aşağıdaki tabloyu tutuyor. Bu veri seti için hangi ifade doğrudur?",
          "opts": [
            "*Observational units* takımın oyuncularıdır; *Points* bir *discrete variable*'dır",
            "*Observational units* rakip takımlardır; *Venue* bir *quantitative variable*'dır",
            "*Observational units* maçlardır; *Venue* *categorical*, *Points* *discrete*'tir",
            "*Observational units* maçlardır; *Venue* *categorical*, *Points* *continuous*'tur"
          ],
          "a": 2,
          "why": "Her satır bir maçı anlatır; yani *observational units* maçlardır, oyuncular ya da rakipler değil. *Venue* (Home ya da Away) bir kategoridir. *Points* sayarak bulunur ve ara değer alamaz, bu yüzden *discrete*'tir; *Game length* gibi ölçülen bir süre ise *continuous* olur.",
          "fig": {
            "type": "table",
            "head": [
              "Game",
              "Venue",
              "Points",
              "Game length (min)"
            ],
            "rows": [
              [
                1,
                "Home",
                68,
                92.5
              ],
              [
                2,
                "Away",
                74,
                101
              ],
              [
                3,
                "Away",
                59,
                88.5
              ],
              [
                4,
                "Home",
                81,
                97
              ]
            ],
            "caption": "Sezonun ilk dört maçı"
          }
        },
        {
          "q": "Bir belediye, ilçedeki 12 bin hanenin günlük ortalama su tüketimini tahmin etmek istiyor. Rastgele seçilen 150 hanenin su sayacı okunuyor. Bu çalışmada *population* hangisidir?",
          "opts": [
            "Sayacı okunan 150 hane",
            "İlçedeki 12 bin hanenin tamamı",
            "Hanelerin günlük su tüketimi",
            "Türkiye'deki bütün haneler"
          ],
          "a": 1,
          "why": "*Population*, hakkında bilgi edinmek istediğin grubun tamamıdır: ilçedeki 12 bin hane. Sayacı okunan 150 hane *sample*'dır; günlük su tüketimi ise grup değil, ölçülen *variable*'dır. Belediyenin sorusu yalnızca bu ilçeyle ilgili olduğu için Türkiye'deki bütün haneler de *population* olamaz."
        },
        {
          "q": "Aşağıdakilerden hangisi bir *continuous quantitative variable*'dır?",
          "opts": [
            "Bir futbolcunun bir sezonda attığı gol sayısı",
            "Bir sınıftaki öğrencilerin kardeş sayısı",
            "Bir basketbolcunun forma numarası",
            "Bir yüzücünün 100 metreyi bitirme süresi"
          ],
          "a": 3,
          "why": "Süre ölçülerek bulunur ve bir aralıktaki her değeri alabilir (mesela 58,42 saniye); bu yüzden *continuous*'tur. Gol sayısı ve kardeş sayısı sayılarak bulunur, yani *discrete*'tir. Forma numarası ise sayı gibi görünse de bir etikettir; *quantitative* bile değildir, *categorical*'dır."
        },
        {
          "q": "Bir okulun kantini, okuldaki 640 öğrencinin tamamına en sevdikleri içeceği soruyor ve her öğrencinin cevabını kaydediyor. Bu çalışma için hangi ifade doğrudur?",
          "opts": [
            "Bu bir *census*'tur ve kaydedilen *variable* *categorical*'dır",
            "Bu bir *census*'tur ve kaydedilen *variable* *quantitative*'dir",
            "640 öğrenci bir *sample*'dır ve *variable* *categorical*'dır",
            "640 öğrenci bir *sample*'dır ve *variable* *quantitative*'dir"
          ],
          "a": 0,
          "why": "*Population*'daki herkesten veri toplandığı için bu bir *census*'tur; 640 öğrenci bir *sample* değil, *population*'ın kendisidir. En sevilen içecek her öğrenciyi bir kategoriye yerleştirir (su, ayran, meyve suyu…), yani *categorical*'dır. 640 sayısı öğrenci sayısıdır, *variable*'ın değeri değildir."
        }
      ]
    },
    {
      "no": 2,
      "code": "1B",
      "slug": "st102",
      "title": "Kategorik Veri",
      "en": "Displaying Categorical Data",
      "accent": "#3FE0A8",
      "seconds": 338,
      "terms": [
        "Distribution",
        "Frequency table",
        "Relative frequency table",
        "Frequency",
        "Relative frequency",
        "Majority",
        "Bar chart",
        "Pie chart",
        "Side-by-side bar chart",
        "Misleading graph"
      ],
      "questions": [
        {
          "q": "Bir kantin, 50 öğrenciye teneffüste en çok ne aldıklarını soruyor. *Frequency table* aşağıda. Simit kategorisinin *relative frequency*'si kaçtır?",
          "opts": [
            "%14",
            "%20",
            "%28",
            "%42"
          ],
          "a": 2,
          "why": "*Relative frequency* = frekans bölü toplam: 14 ÷ 50 = 0,28, yani yüzde 28. Yüzde 14 demek, frekansı (14 kişi) doğrudan yüzde sanmaktır; toplam 100 değil 50 olduğu için bölmen gerekir. Yüzde 42 ise Tost'un payıdır (21 ÷ 50).",
          "fig": {
            "type": "table",
            "head": [
              "Snack",
              "Frequency"
            ],
            "rows": [
              [
                "Tost",
                21
              ],
              [
                "Simit",
                14
              ],
              [
                "Sandviç",
                10
              ],
              [
                "Poğaça",
                5
              ],
              [
                "Total",
                50
              ]
            ],
            "caption": "Teneffüste en çok alınan yiyecek (n = 50)"
          }
        },
        {
          "q": "Bir okulda 9. sınıflardan 200, 12. sınıflardan 80 öğrenciye en çok kullandıkları uygulama soruluyor. *Side-by-side bar chart* her sınıf düzeyindeki yüzdeleri gösteriyor. Hangi sonuç doğrudur?",
          "opts": [
            "Instagram'ı seçen 12. sınıfların sayısı da oranı da 9. sınıflardan fazladır",
            "YouTube'u seçenlerin oranı farklıdır, ama sayıları iki sınıf düzeyinde eşittir",
            "TikTok'u seçenlerin oranı 12. sınıflarda daha yüksek, sayısı ise daha düşüktür",
            "Instagram'ı seçenlerin oranı 12. sınıflarda daha yüksek, sayısı ise daha düşüktür"
          ],
          "a": 3,
          "why": "Oran: Instagram 12. sınıflarda yüzde 50, 9. sınıflarda yüzde 30. Sayı: 0,50 × 80 = 40 kişi, 0,30 × 200 = 60 kişi. Gruplar farklı büyüklükte olduğu için oran ile sayı ters yönü gösterebilir; karşılaştırma *relative frequency* ile yapılır. YouTube'da sayılar 90 ve 24'tür; TikTok'un oranı 12. sınıflarda daha düşüktür (yüzde 20'ye karşı yüzde 25).",
          "fig": {
            "type": "bar",
            "cats": [
              "Instagram",
              "YouTube",
              "TikTok"
            ],
            "series": [
              {
                "name": "Grade 9 (n = 200)",
                "values": [
                  30,
                  45,
                  25
                ]
              },
              {
                "name": "Grade 12 (n = 80)",
                "values": [
                  50,
                  30,
                  20
                ]
              }
            ],
            "ylabel": "Percent"
          }
        },
        {
          "q": "Bir ankette öğrenciler kullandıkları uygulamaların hepsini işaretleyebiliyordu. Sonuç: yüzde 70 Instagram, yüzde 60 YouTube, yüzde 40 TikTok. Bu sonuçları göstermek için hangi grafik uygundur?",
          "opts": [
            "*Bar chart*; çünkü yüzdeler tek bir bütünün parçaları değil, toplamları 170",
            "*Pie chart*; çünkü her kategori için bir yüzde değeri verilmiş durumda",
            "*Pie chart*; çünkü kategori sayısı az ve dilimler kolayca okunabilir",
            "*Side-by-side bar chart*; çünkü üç uygulama üç ayrı grup anlamına gelir"
          ],
          "a": 0,
          "why": "*Pie chart* yalnızca kategoriler bir bütünün parçalarıysa, yani yüzdeler toplamı 100 ediyorsa çizilir. Burada bir öğrenci birden fazla uygulama seçebildiği için 70 + 60 + 40 = 170 eder; bu yüzden *bar chart* gerekir. *Side-by-side bar chart* ise iki ya da daha fazla grubu karşılaştırmak içindir; burada tek bir grup var."
        },
        {
          "q": "Kategorik veriyi özetleme ve gösterme ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
          "opts": [
            "Bir *frequency table*'daki sayılar verinin kendisidir; özeti sayılmaz",
            "*Bar chart*'ta çok seçilen kategorinin çubuğu daha geniş çizilmelidir",
            "*Pie chart*'ta dilimler bir bütünün parçalarıdır; toplamları yüzde 100'dür",
            "Büyüklüğü farklı grupları karşılaştırırken frekans kullanmak daha doğrudur"
          ],
          "a": 2,
          "why": "*Pie chart* bütünün parçalarını gösterir ve dilimler yüzde 100'e tamamlanır. Diğerleri yanlış: frekanslar veri değil, verinin özetidir (veri, bireylerin tek tek cevaplarıdır); çubuklar eşit genişlikte olmalıdır, yoksa göz alana bakıp yanılır; grup büyüklükleri farklıysa *relative frequency* kullanılır."
        },
        {
          "q": "Bir gazete iki şehrin nüfusunu ev resimleriyle karşılaştırıyor. B şehrinin nüfusu A'nın 2 katı. Çizer, B'nin evini A'nın evinin hem 2 katı yüksekliğinde hem 2 katı genişliğinde çizmiş. Okurun gözü B'yi A'nın kaç katı algılar ve grafik nasıl düzeltilir?",
          "opts": [
            "2 katı; grafik doğrudur, düzeltmeye gerek yoktur",
            "4 katı; resim yerine eşit genişlikte çubuklar çizilmelidir",
            "4 katı; dikey eksen sıfır yerine 1'den başlatılmalıdır",
            "8 katı; resim yerine bir *pie chart* çizilmelidir"
          ],
          "a": 1,
          "why": "Göz yüksekliğe değil alana tepki verir: yükseklik 2 kat, genişlik 2 kat olunca alan 2 × 2 = 4 kat büyür, yani fark olduğundan iki kat abartılı görünür. Çözüm, resim yerine eşit genişlikte çubuklar çizmektir; o zaman alan yalnızca yükseklikle değişir. Dwyane Wade örneğindeki basketbol toplarında da aynı hata vardı."
        }
      ]
    },
    {
      "no": 3,
      "code": "1C-1",
      "slug": "st103",
      "title": "Dotplot ve Dağılımı Anlatmak",
      "en": "Dotplots & Describing Distributions",
      "accent": "#5BC0EB",
      "seconds": 327,
      "terms": [
        "Dotplot",
        "Distribution",
        "Shape",
        "Roughly symmetric",
        "Skewed right",
        "Skewed left",
        "Unimodal",
        "Bimodal",
        "Approximately uniform",
        "Cluster",
        "Gap",
        "Outlier"
      ],
      "questions": [
        {
          "q": "*Dotplot*, bir basketbol takımının 16 maçta attığı üçlük sayılarını gösteriyor. Koç, \"Maçların yarısından fazlasında 8'den fazla üçlük attık\" diyor. Grafiğe göre maçların yüzde kaçında 8'den fazla üçlük atılmıştır ve iddia destekleniyor mu?",
          "opts": [
            "Yüzde 50; iddia destekleniyor",
            "Yüzde 37,5; iddia desteklenmiyor",
            "Yüzde 62,5; iddia destekleniyor",
            "Yüzde 25; iddia desteklenmiyor"
          ],
          "a": 1,
          "why": "8'in sağındaki noktaları say: 9, 9, 10, 11, 12, 14; yani 6 maç. 6 bölü 16, yüzde 37,5; yarıyı geçmiyor. Tam 8 üçlük atılan iki maçı da sayarsan yüzde 50 bulursun; ama iddia \"8'den fazla\" diyor, 8'in kendisi sayılmaz.",
          "fig": {
            "type": "dot",
            "values": [
              3,
              4,
              5,
              5,
              6,
              6,
              7,
              7,
              8,
              8,
              9,
              9,
              10,
              11,
              12,
              14
            ],
            "label": "Three-pointers made per game"
          }
        },
        {
          "q": "*Dotplot*, 15 öğrencinin 10 puanlık kolay bir quizden aldığı puanları gösteriyor. Bu dağılımın *shape*'i için hangisi doğrudur?",
          "opts": [
            "*Skewed right*; çünkü noktaların çoğu sağ tarafta yığılmış",
            "*Roughly symmetric*; çünkü tepenin iki yanı dengeli",
            "*Approximately uniform*; çünkü her puan eşit sıklıkta",
            "*Skewed left*; çünkü uzun kuyruk sola, düşük puanlara uzanıyor"
          ],
          "a": 3,
          "why": "Noktalar 8, 9 ve 10'da yığılmış; 3, 5 ve 6'ya doğru ince bir kuyruk uzanıyor. Yönü kuyruk belirler: kuyruk solda, yani *skewed left*. Yığının sağda olmasına bakıp *skewed right* demek en yaygın hatadır.",
          "fig": {
            "type": "dot",
            "values": [
              3,
              5,
              6,
              7,
              7,
              8,
              8,
              8,
              9,
              9,
              9,
              9,
              10,
              10,
              10
            ],
            "label": "Quiz score (out of 10)"
          }
        },
        {
          "q": "Bir *dotplot* 20 öğrencinin okula geliş süresini gösteriyor: kuyruk sağa uzuyor, *median* 20 dakika, en kısa süre 5, en uzun süre 70 dakika ve 70 ötekilerden kopuk. Dört öğrencinin anlatımından hangisi AP'de tam puan alır?",
          "opts": [
            "Geliş sürelerinin dağılımı *skewed right* ve *unimodal*; tek belirgin tepe 15 dakika civarında görülüyor.",
            "Veriler *skewed right*; *median* 20; değerler 5 ile 70 arasında değişiyor; 70 bir *outlier* gibi duruyor.",
            "Geliş süreleri *skewed right*; *median* 20 dakika; süreler 5 ile 70 dakika arasında; 70 dakika olası *outlier*.",
            "Geliş sürelerinin *median*'ı 20 dakika; süreler 5 dakika ile 70 dakika arasında değişiyor ve yayılım geniş."
          ],
          "a": 2,
          "why": "Tam puan için dördü de gerekir: *shape*, *outliers*, *center*, *variability*; hepsi *in context*. İlk şık yalnızca şekli, son şık yalnızca merkezi ve yayılımı veriyor. İkinci şıkta dört parça var ama bağlam yok: değişkenin adı (geliş süresi) ve birimi hiç geçmiyor."
        },
        {
          "q": "*Dotplot*, bir okuldaki 16 öğrencinin boylarını santimetre olarak gösteriyor. Bu dağılımı en iyi hangisi anlatır?",
          "opts": [
            "*Bimodal*; iki ayrı *cluster* var ve aralarında 163 ile 174 santimetre arasında bir *gap* bulunuyor",
            "*Unimodal* ve *roughly symmetric*; tek tepe 168 santimetre civarında, belirgin bir *gap* yok",
            "*Skewed right*; boyların çoğu kısa, uzun kuyruk 180 santimetreye doğru uzanıyor",
            "*Approximately uniform*; 158 ile 180 santimetre arasındaki her boy aynı sıklıkta görülüyor"
          ],
          "a": 0,
          "why": "Noktalar iki öbekte toplanmış: 158–163 ve 174–180 santimetre. Arada hiç nokta yok; bu bir *gap*. İki ayrı tepe olduğu için dağılım *bimodal*. Ortadaki 168 santimetre aslında boşluğun içinde; orada tek bir öğrenci bile yok.",
          "fig": {
            "type": "dot",
            "values": [
              158,
              159,
              160,
              160,
              161,
              161,
              162,
              163,
              174,
              175,
              176,
              176,
              177,
              177,
              178,
              180
            ],
            "label": "Height (cm)"
          }
        },
        {
          "q": "Bir zar 60 kez atılıyor; sonuçlar tabloda. Bir öğrenci \"Dağılım *bimodal*, çünkü 2 ve 6 en yüksek\" diyor. Dağılımın *shape*'i için en doğru yorum hangisi?",
          "opts": [
            "Öğrenci haklı: dağılım *bimodal*, tepeler 2'de ve 6'da",
            "Dağılım *skewed right*; çünkü kuyruk 6'ya doğru uzanıyor",
            "Dağılım *approximately uniform*; sıklıklar birbirine çok yakın",
            "Dağılım *unimodal*; çünkü tek belirgin tepe 2'de görülüyor"
          ],
          "a": 2,
          "why": "Sıklıklar 9, 10 ve 11; yani hepsi neredeyse aynı. Şekle bakarken küçük iniş çıkışlara değil ana özelliklere bakılır: belirgin bir tepe ya da kuyruk yok, dağılım *approximately uniform*. Bir iki noktalık farkı tepe saymak yaygın bir hatadır.",
          "fig": {
            "type": "table",
            "head": [
              "Die roll",
              "Frequency"
            ],
            "rows": [
              [
                "1",
                9
              ],
              [
                "2",
                11
              ],
              [
                "3",
                10
              ],
              [
                "4",
                10
              ],
              [
                "5",
                9
              ],
              [
                "6",
                11
              ]
            ],
            "caption": "60 rolls of a die"
          }
        }
      ]
    },
    {
      "no": 4,
      "code": "1C-2",
      "slug": "st104",
      "title": "Stemplot ve Histogram",
      "en": "Stem-and-Leaf Plots & Histograms",
      "accent": "#A78BFA",
      "seconds": 336,
      "terms": [
        "Stem-and-leaf plot",
        "Stem",
        "Leaf",
        "Key",
        "Split stems",
        "Truncate",
        "Histogram",
        "Intervals (bins)",
        "Frequency histogram",
        "Relative frequency histogram",
        "Bar chart"
      ],
      "questions": [
        {
          "q": "*Stem-and-leaf plot*, 15 öğrencinin sınav puanlarını gösteriyor. Bu sınıfın *median* puanı kaçtır?",
          "opts": [
            "73 puan",
            "76 puan",
            "78 puan",
            "7,6 puan"
          ],
          "a": 1,
          "why": "15 değer var; *median* sıradaki 8. değerdir. Yaprakları baştan say: 58, 62, 65, 69, 70, 73, 73 ve sekizinci 76. *Key* 7|2 = 72 puan dediği için 7|6, 76 puandır; 7,6 değil. 78 ise dokuzuncu değerdir.",
          "fig": {
            "type": "stem",
            "stems": [
              {
                "s": "5",
                "leaves": "8"
              },
              {
                "s": "6",
                "leaves": "2 5 9"
              },
              {
                "s": "7",
                "leaves": "0 3 3 6 8"
              },
              {
                "s": "8",
                "leaves": "1 4 4 7"
              },
              {
                "s": "9",
                "leaves": "0 5"
              }
            ],
            "key": "7|2 = 72 points"
          }
        },
        {
          "q": "Altı öğrencinin okula geliş süreleri dakika olarak şöyle: 12, 15, 18, 21, 24, 47. Bu veriyle *stemplot* çizen bir öğrenci *stem*'leri nasıl yazmalıdır?",
          "opts": [
            "1, 2, 3, 4 yazılır; 3'ün satırı boş bırakılır",
            "1, 2, 4 yazılır; yaprağı olmayan satır atlanır",
            "0'dan 9'a kadar on satırın hepsi yazılır",
            "1 ve 2 yazılır; 47 grafiğin altına not edilir"
          ],
          "a": 0,
          "why": "*Stem*'ler en küçükten en büyüğe hiç atlanmadan yazılır; yaprağı olmayan 3 satırı boş kalır. O boş satır, 24 ile 47 arasındaki *gap*'i ve 47'nin ötekilerden kopuk olduğunu gösterir. Boş satırı atlamak yaygın bir hatadır: 47 yığının hemen yanındaymış gibi görünür."
        },
        {
          "q": "Histogram, 40 öğrencinin okula geliş süresini gösteriyor. Öğrencilerin yüzde kaçının yolu 30 dakika ya da daha uzun sürüyor?",
          "opts": [
            "Yüzde 20",
            "Yüzde 15",
            "Yüzde 35",
            "Yüzde 65"
          ],
          "a": 2,
          "why": "Sol uç dahil olduğu için tam 30 dakika, 30–40 çubuğuna girer. 30 ve üstü: 8 artı 4 artı 2, 14 öğrenci. 14 bölü 40, yüzde 35. Yalnızca 30–40 çubuğunu alırsan yüzde 20, 20–30 çubuğunu da katarsan yüzde 65 bulursun; ikisi de yanlış.",
          "fig": {
            "type": "hist",
            "bins": [
              {
                "from": 0,
                "to": 10,
                "n": 4
              },
              {
                "from": 10,
                "to": 20,
                "n": 10
              },
              {
                "from": 20,
                "to": 30,
                "n": 12
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
            ],
            "label": "Commute time (minutes)",
            "ylabel": "Frequency"
          }
        },
        {
          "q": "Histogram, bir kafedeki 30 müşterinin bekleme süresini gösteriyor. Yalnızca bu grafiğe bakarak hangisi kesin olarak söylenebilir?",
          "opts": [
            "En çok müşteri tam 3 dakika beklemiştir",
            "En uzun bekleme süresi tam 10 dakikadır",
            "Bekleme sürelerinin *median*'ı tam 4 dakikadır",
            "17 müşteri 4 dakikadan az beklemiştir"
          ],
          "a": 3,
          "why": "İlk iki çubuk 4 dakikadan az bekleyenleri sayar: 5 artı 12, 17 müşteri. Histogram tek tek değerleri göstermez: en uzun süre 8 ile 10 arasında bir yerdedir ama 10 değildir; *median* 15. ve 16. değerlerin düştüğü 2–4 aralığındadır; en yüksek çubuk da herkesin tam 3 dakika beklediğini söylemez.",
          "fig": {
            "type": "hist",
            "bins": [
              {
                "from": 0,
                "to": 2,
                "n": 5
              },
              {
                "from": 2,
                "to": 4,
                "n": 12
              },
              {
                "from": 4,
                "to": 6,
                "n": 8
              },
              {
                "from": 6,
                "to": 8,
                "n": 3
              },
              {
                "from": 8,
                "to": 10,
                "n": 2
              }
            ],
            "label": "Waiting time (minutes)",
            "ylabel": "Frequency"
          }
        },
        {
          "q": "Aşağıdaki verilerden hangisini göstermek için *histogram* uygun bir grafiktir?",
          "opts": [
            "40 öğrencinin en sevdiği spor dalı",
            "200 öğrencinin santimetre olarak boyu",
            "Öğrencilerin okula hangi araçla geldiği",
            "Takımdaki oyuncuların forma numaraları"
          ],
          "a": 1,
          "why": "*Histogram* büyük ve sayısal veri içindir; boy ölçülen bir sayıdır ve aralıklara bölünebilir. Spor dalı ve ulaşım aracı kategoriktir; onlar için *bar chart* çizilir. Forma numarası rakamla yazılsa da bir etikettir, yani kategoriktir; sayı görüp histogram çizmek tuzaktır."
        }
      ]
    },
    {
      "no": 5,
      "code": "1D-1",
      "slug": "st105",
      "title": "Merkez: Mean ve Median",
      "en": "Measuring Center",
      "accent": "#FF7A6B",
      "seconds": 361,
      "terms": [
        "Median",
        "Mean",
        "x̄ (sample mean)",
        "μ (population mean)",
        "Statistic",
        "Parameter",
        "Resistant",
        "Outlier",
        "Skewed right",
        "Skewed left",
        "Roughly symmetric"
      ],
      "questions": [
        {
          "q": "Sekiz öğrencinin okula geliş süresi, sorulduğu sırayla, dakika olarak şöyle: 25, 10, 40, 15, 30, 20, 35, 65. Bu verinin *median*'ı kaçtır?",
          "opts": [
            "22,5 dakika",
            "27,5 dakika",
            "30 dakika",
            "25 dakika"
          ],
          "a": 1,
          "why": "Önce sırala: 10, 15, 20, 25, 30, 35, 40, 65. Sekiz değer var; ortadaki ikisi 25 ve 30, ortalamaları 27,5. Sıralamadan ortadaki ikisini alırsan 15 ile 30'dan 22,5 bulursun; 30 ise *median* değil *mean*'dir, çünkü 240 bölü 8."
        },
        {
          "q": "*Dotplot*, bir futbol takımının 10 maçta attığı gol sayılarını gösteriyor. Bu veri için hangisi doğrudur?",
          "opts": [
            "*Median* 1 gol, *mean* 2,5 gol",
            "*Median* 2 gol, *mean* 2,5 gol",
            "*Median* 1,5 gol, *mean* 2 gol",
            "*Median* 1,5 gol, *mean* 2,5 gol"
          ],
          "a": 3,
          "why": "Sıralı değerler 0, 1, 1, 1, 1, 2, 2, 3, 4, 10. On değer olduğu için *median* beşinci ile altıncının ortalaması: 1 ile 2'den 1,5. Toplam 25 olduğundan *mean* 25 bölü 10, yani 2,5. Sağdaki 10 gollük maç *mean*'i yukarı çekmiş; *median* ise ondan etkilenmemiş.",
          "fig": {
            "type": "dot",
            "values": [
              0,
              1,
              1,
              1,
              1,
              2,
              2,
              3,
              4,
              10
            ],
            "label": "Goals scored per match"
          }
        },
        {
          "q": "Bir öğretmen 25 kişilik sınıfın sınav puanlarını girerken en yüksek puanı 58 yerine yanlışlıkla 580 yazıyor. Hata düzeltilince *mean* ve *median* nasıl değişir?",
          "opts": [
            "*Mean* azalır, *median* değişmez",
            "*Mean* de *median* da azalır",
            "*Mean* değişmez, *median* azalır",
            "*Mean* de *median* da değişmez"
          ],
          "a": 0,
          "why": "*Mean* her değeri toplama kattığı için toplam 522 azalır ve *mean* yaklaşık 21 puan düşer. *Median* ise yalnızca sıraya bakar: 58 de 580 de en büyük değer olduğundan ortadaki, yani 13. değer aynı kalır. *Median* *resistant*, *mean* değil."
        },
        {
          "q": "800 öğrencili bir okulda rastgele seçilen 40 öğrencinin günlük ekran süresinin ortalaması 5,2 saat bulunuyor. Bu sayının doğru gösterimi ve adı hangisidir?",
          "opts": [
            "μ = 5,2 ve bu bir *parameter*",
            "x̄ = 5,2 ve bu bir *parameter*",
            "x̄ = 5,2 ve bu bir *statistic*",
            "μ = 5,2 ve bu bir *statistic*"
          ],
          "a": 2,
          "why": "5,2 saat yalnızca seçilen 40 öğrenciden, yani *sample*'dan hesaplandı; bu yüzden x̄ ile gösterilir ve bir *statistic*'tir. μ ise 800 öğrencinin tamamının, yani *population*'ın ortalamasıdır; onu bilmiyoruz, x̄ ile tahmin ediyoruz."
        },
        {
          "q": "Bir sınıfın sınav puanlarında *mean* 62, *median* 74 çıkıyor. Bu bilgiye göre dağılım hakkında en makul yorum hangisidir?",
          "opts": [
            "*Skewed right*; birkaç çok yüksek puan *mean*'i yukarı çekmiş",
            "*Skewed left*; birkaç çok düşük puan *mean*'i aşağı çekmiş",
            "*Roughly symmetric*; *mean* ile *median* zaten farklı çıkar",
            "*Skewed left*; birkaç çok düşük puan *median*'ı yukarı itmiş"
          ],
          "a": 1,
          "why": "*Mean*, *median*'dan belirgin biçimde küçük; yani bir şey *mean*'i aşağı çekmiş. *Mean* kuyruğa doğru çekildiğine göre kuyruk solda, düşük puanlar tarafında: dağılım *skewed left*. *Median* *resistant* olduğu için düşük puanlar onu itmez; hareket eden *mean*'dir."
        }
      ]
    },
    {
      "no": 6,
      "code": "1D-2",
      "slug": "st106",
      "title": "Yayılım: Range, SD, IQR",
      "en": "Measuring Variability",
      "accent": "#F5B041",
      "seconds": 388,
      "terms": [
        "Variability",
        "Range",
        "Standard deviation",
        "Variance",
        "s (sample SD)",
        "σ (population SD)",
        "Quartiles",
        "First quartile (Q1)",
        "Third quartile (Q3)",
        "Interquartile range (IQR)",
        "Resistant",
        "1-Var Stats"
      ],
      "questions": [
        {
          "q": "Tablo, Ada'nın beş gün boyunca okula geliş süresini dakika olarak ve her değerin *mean*'den sapmasını gösteriyor; *mean* 20 dakika. Bu örneklemin *standard deviation*'ı kaçtır?",
          "opts": [
            "Yaklaşık 3,6 dakika",
            "4 dakika",
            "8 dakika",
            "16 dakika"
          ],
          "a": 1,
          "why": "Sapmaların kareleri 36, 1, 1, 1 ve 25; toplamı 64. Beş değer olduğu için n eksi bire, yani 4'e bölersin: 16. Bu *variance*'tır; karekökü 4 dakika. 5'e bölersen 3,6, karekökü unutursan 16, bölmeyi unutursan 8 bulursun.",
          "fig": {
            "type": "table",
            "head": [
              "Süre x (dk)",
              "x − x̄",
              "(x − x̄)²"
            ],
            "rows": [
              [
                14,
                "−6",
                36
              ],
              [
                19,
                "−1",
                1
              ],
              [
                21,
                "+1",
                1
              ],
              [
                21,
                "+1",
                1
              ],
              [
                25,
                "+5",
                25
              ]
            ],
            "caption": "x̄ = 20 dakika, n = 5"
          }
        },
        {
          "q": "Bir sınıftaki öğrencilerin günlük uyku süresinin *mean*'i 7 saat, *standard deviation*'ı 1,5 saat. Bu *standard deviation* için doğru yorum hangisidir?",
          "opts": [
            "Öğrencilerin hepsi 5,5 ile 8,5 saat arasında uyur.",
            "En çok ve en az uyuyan öğrenci arasındaki fark 1,5 saattir.",
            "Öğrencilerin ortadaki yarısı 1,5 saatlik bir aralığa sığar.",
            "Uyku süresi, 7 saatlik *mean*'den tipik olarak 1,5 saat sapar."
          ],
          "a": 3,
          "why": "*Standard deviation*, değerlerin *mean*'den tipik uzaklığıdır; kalıp: \"The sleep time of these students typically varies by 1.5 hours from the mean of 7 hours.\" Diğer şıklar başka ölçüleri anlatıyor: en çok ile en az arasındaki fark *range*, ortadaki yarının aralığı *IQR*; \"hepsi şu aralıkta\" demek ise hiçbir zaman doğru bir yorum değildir."
        },
        {
          "q": "*Dotplot*, bir basketbolcunun 11 maçta attığı sayıları gösteriyor. Bu dağılımın *range* ve *IQR* değerleri hangisidir?",
          "opts": [
            "*Range* 22 sayı, *IQR* 8 sayı",
            "*Range* 22 sayı, *IQR* 6 sayı",
            "*Range* 8 ile 30 arası, *IQR* 8 sayı",
            "*Range* 30 sayı, *IQR* 10 sayı"
          ],
          "a": 0,
          "why": "*Range* tek bir sayıdır: 30 eksi 8, 22. On bir değerin *median*'ı altıncı değer olan 14; onu iki yarıya da katmazsın. Alt yarı 8, 10, 10, 12, 12 olduğundan Q1 10; üst yarı 14, 16, 18, 20, 30 olduğundan Q3 18; *IQR* 8. *Median*'ı yarılara katarsan Q1 11, Q3 17 çıkar ve yanlışlıkla 6 bulursun.",
          "fig": {
            "type": "dot",
            "values": [
              8,
              10,
              10,
              12,
              12,
              14,
              14,
              16,
              18,
              20,
              30
            ],
            "label": "Points scored per game"
          }
        },
        {
          "q": "*Histogram*, 30 öğrencinin haftalık harçlığını lira olarak gösteriyor. Bu dağılımın merkezini ve yayılımını özetlemek için en uygun ikili hangisidir?",
          "opts": [
            "*Mean* ve *standard deviation*",
            "*Median* ve *IQR*",
            "*Mean* ve *IQR*",
            "*Median* ve *standard deviation*"
          ],
          "a": 1,
          "why": "Dağılım *skewed right*: öğrencilerin çoğu 100 ile 400 lira arasında, kuyruk sağa uzuyor ve 800 liranın üstünde iki olası *outlier* var. Böyle bir dağılımda *resistant* olan ikili, yani *median* ile *IQR* kullanılır. *Mean* ve *standard deviation* uç değerlerden etkilenir; ayrıca *standard deviation* yalnızca *mean* ile, *IQR* de *median* ile eşleşir.",
          "fig": {
            "type": "hist",
            "bins": [
              {
                "from": 100,
                "to": 200,
                "n": 11
              },
              {
                "from": 200,
                "to": 300,
                "n": 9
              },
              {
                "from": 300,
                "to": 400,
                "n": 5
              },
              {
                "from": 400,
                "to": 500,
                "n": 2
              },
              {
                "from": 500,
                "to": 600,
                "n": 1
              },
              {
                "from": 600,
                "to": 700,
                "n": 0
              },
              {
                "from": 700,
                "to": 800,
                "n": 0
              },
              {
                "from": 800,
                "to": 900,
                "n": 2
              }
            ],
            "label": "Weekly allowance (TL)",
            "ylabel": "Frequency"
          }
        },
        {
          "q": "Dokuz öğrencinin kantin sırasında bekleme süresi dakika olarak 2, 3, 4, 6, 7, 8, 10, 11 ve 15. Sonradan en uzun sürenin 15 değil 51 dakika olduğu anlaşılıyor. Bu düzeltmeden sonra aşağıdakilerden hangisi aynı kalır?",
          "opts": [
            "*Range*",
            "*Mean*",
            "*IQR*",
            "*Standard deviation*"
          ],
          "a": 2,
          "why": "*Median* beşinci değer olan 7; alt yarı 2, 3, 4, 6 olduğundan Q1 3,5; üst yarı 8, 10, 11 ve en büyük değer. Q3, 10 ile 11'in ortası olan 10,5'tir ve en büyük değer 15 de olsa 51 de olsa değişmez; *IQR* 7 kalır. *Range* 13'ten 49'a çıkar, *mean* ve *standard deviation* da büyür; çünkü üçü de *resistant* değildir."
        }
      ]
    },
    {
      "no": 7,
      "code": "1D-3",
      "slug": "st107",
      "title": "Outlier ve Boxplot",
      "en": "Outliers & Boxplots",
      "accent": "#3FE0A8",
      "seconds": 370,
      "terms": [
        "Outlier",
        "1.5 × IQR rule",
        "Low outlier",
        "High outlier",
        "Interquartile range (IQR)",
        "Quartiles (Q1, Q3)",
        "Five-number summary",
        "Boxplot",
        "Whisker",
        "Median",
        "Range"
      ],
      "questions": [
        {
          "q": "Bir kanalın 11 videosunun izlenme sayıları (bin izlenme), küçükten büyüğe: 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 30. *1.5 × IQR* kuralına göre *outlier* için üst sınır kaçtır?",
          "opts": [
            "15",
            "18",
            "21",
            "27"
          ],
          "a": 2,
          "why": "*Median* 6. değer, yani 9. Alt yarı 3, 5, 6, 7, 8 → Q1 = 6; üst yarı 10, 11, 12, 14, 30 → Q3 = 12. *IQR* = 6 ve 1.5 × 6 = 9; üst sınır 12 + 9 = 21, 30 bunu aştığı için *outlier*. 18 cevabı, sınırı *median*'dan ölçünce (9 + 9) ya da 1.5 ile çarpmayı unutunca (12 + 6) çıkar."
        },
        {
          "q": "Şekildeki *boxplot*, bir sınıftaki öğrencilerin okula geliş sürelerini (dakika) gösteriyor. Hangi ifade doğrudur?",
          "opts": [
            "*Range* 50 dakikadır.",
            "*IQR* 20 dakikadır.",
            "*Mean* 25 dakikadır.",
            "Öğrencilerin çoğu 25–40 dakikada gelir."
          ],
          "a": 1,
          "why": "*IQR* kutunun boyudur: 40 − 20 = 20 dakika. *Range* *outlier* dahil tüm uzunluktur: 85 − 10 = 75. Kutunun içindeki çizgi *mean* değil *median*'dır; 25–40 arası kutunun geniş parçası olsa da orada verinin yalnızca yaklaşık %25'i bulunur.",
          "fig": {
            "type": "box",
            "items": [
              {
                "name": "Sınıf",
                "min": 10,
                "q1": 20,
                "med": 25,
                "q3": 40,
                "max": 60,
                "outliers": [
                  85
                ]
              }
            ],
            "label": "Commute time (min)"
          }
        },
        {
          "q": "Bir *boxplot*'ta *median* ile Q3 arasındaki parça, Q1 ile *median* arasındaki parçanın üç katı uzunlukta. Bu ne anlama gelir?",
          "opts": [
            "Uzun parçada, kısa parçadakinin yaklaşık üç katı kadar gözlem vardır.",
            "Dağılımın *mean*'i kesinlikle uzun parçanın tam ortasına düşer.",
            "Uzun parçanın içinde en az bir tane *outlier* bulunmak zorundadır.",
            "İki parçada da verinin yaklaşık %25'i var; uzun parçadaki değerler daha yayılmış."
          ],
          "a": 3,
          "why": "*Quartile*'lar veriyi yaklaşık dört eşit gruba böler; her parçada verinin yaklaşık %25'i bulunur. Parçanın uzun olması daha çok gözlem değil, aynı sayıda gözlemin daha geniş bir aralığa yayıldığını gösterir. *Boxplot* *mean*'i göstermez; *outlier*'lar da kutunun içinde değil, bıyıkların dışında ayrı nokta olarak çizilir."
        },
        {
          "q": "On öğrencinin kantindeki haftalık harcaması (TL), küçükten büyüğe: 20, 30, 36, 40, 45, 50, 55, 60, 70, 130. Bu verinin *boxplot*'unda sağ bıyık (*whisker*) hangi değerde biter?",
          "opts": [
            "70",
            "96",
            "130",
            "60"
          ],
          "a": 0,
          "why": "Alt yarı 20, 30, 36, 40, 45 → Q1 = 36; üst yarı 50, 55, 60, 70, 130 → Q3 = 60. *IQR* = 24, 1.5 × 24 = 36, üst sınır 60 + 36 = 96. 130 sınırı aştığı için *outlier*'dır ve ayrı nokta olur. Bıyık sınırın kendisine (96) değil, *outlier* olmayan en büyük gerçek değere, yani 70'e uzanır."
        },
        {
          "q": "Bir basketbolcunun bu sezonki maç başı sayılarının *five-number summary*'si: 4, 12, 18, 24, 31. Koçu \"Maçların çoğunda 10'dan fazla sayı attı\" diyor. Bu özet iddiayı destekler mi?",
          "opts": [
            "Evet; *mean* 18 olduğu için maçların çoğu 10 sayının üstündedir.",
            "Hayır; en düşük değer 4 olduğu için iddia doğru olamaz.",
            "Evet; Q1 12 olduğu için maçların yaklaşık %75'inde en az 12 sayı atmıştır.",
            "Hayır; beş sayılık bir özetten yüzde hakkında sonuç çıkarılamaz."
          ],
          "a": 2,
          "why": "Q1'in üstünde verinin yaklaşık %75'i bulunur ve Q1 = 12 zaten 10'dan büyüktür; demek ki maçların yaklaşık dörtte üçünde 10'dan fazla sayı atmıştır. Ortadaki 18 *mean* değil *median*'dır. Tek bir düşük maç (4 sayı) \"çoğunda\" iddiasını çürütmez."
        }
      ]
    },
    {
      "no": 8,
      "code": "1D-4",
      "slug": "st108",
      "title": "Percentile ve z-score",
      "en": "Percentiles & z-Scores",
      "accent": "#5BC0EB",
      "seconds": 329,
      "terms": [
        "Percentile",
        "At the pth percentile",
        "Less than or equal to",
        "Median ≈ 50th percentile",
        "Q1 ≈ 25th percentile",
        "Q3 ≈ 75th percentile",
        "Standardized score (z-score)",
        "Mean",
        "Standard deviation",
        "Above / below the mean",
        "In context"
      ],
      "questions": [
        {
          "q": "Şekildeki *dotplot*, 25 öğrencinin günlük telefon ekran süresini (saat) gösteriyor. Ekran süresi 5 saat olan bir öğrenci hangi *percentile*'dadır?",
          "opts": [
            "*36th percentile*",
            "*48th percentile*",
            "*64th percentile*",
            "*16th percentile*"
          ],
          "a": 2,
          "why": "5 saat ve altındaki noktaları say: 1 + 2 + 4 + 5 + 4 = 16 öğrenci. 16 ÷ 25 = 0.64, yani *64th percentile*. Yalnızca 5'ten küçük olan 12 kişiyi sayarsan %48 bulursun; *percentile* tanımında eşit olanlar da sayılır. 16 ise yüzde değil, kişi sayısıdır.",
          "fig": {
            "type": "dot",
            "values": [
              1,
              2,
              2,
              3,
              3,
              3,
              3,
              4,
              4,
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
              8,
              9,
              10
            ],
            "label": "Screen time (hours per day)"
          }
        },
        {
          "q": "Ece'nin boyu, sınıfındaki öğrencilerin boy dağılımında *90th percentile*'da. Hangi yorum doğrudur?",
          "opts": [
            "Sınıftaki öğrencilerin %90'ının boyu Ece'nin boyuna eşit ya da ondan kısadır.",
            "Ece'nin boyu, sınıftaki en uzun öğrencinin boyunun tam olarak %90'ı kadardır.",
            "Sınıftaki öğrencilerin %90'ının boyu Ece'nin boyundan daha uzundur.",
            "Ece'nin boyu sınıfın *mean*'inden 90 *standard deviation* daha uzundur."
          ],
          "a": 0,
          "why": "*Percentile*, o değere eşit ya da ondan küçük olan gözlemlerin yüzdesidir; kalıp: \"90% of the students' heights in this class are less than or equal to Ece's height.\" Bir değerin başka bir değere oranı ya da *mean*'e uzaklığı değildir; uzaklığı *z-score* ölçer."
        },
        {
          "q": "Bir fırının ekmeklerinin ağırlığında *mean* 250 gram, *standard deviation* 8 gram. 238 gramlık bir ekmeğin *z-score*'u kaçtır?",
          "opts": [
            "−12",
            "1.5",
            "−0.67",
            "−1.5"
          ],
          "a": 3,
          "why": "z = (238 − 250) ÷ 8 = −12 ÷ 8 = −1.5; ekmek *mean*'in 1.5 *standard deviation* altında. −12 yalnızca gram cinsinden farktır, *standard deviation*'a bölünmemiştir. İşareti atarsan 1.5, kesri ters çevirirsen (8 ÷ 12) −0.67 çıkar."
        },
        {
          "q": "40 öğrencinin sınav puanları küçükten büyüğe sıralanmış. *30th percentile*'daki puanı bulmak için listede hangi değere bakarsın?",
          "opts": [
            "Alttan 30. değere",
            "Alttan 12. değere",
            "Üstten 12. değere",
            "Alttan 28. değere"
          ],
          "a": 1,
          "why": "*30th percentile*, puanların %30'unun o değere eşit ya da ondan küçük olması demektir: 0.30 × 40 = 12 puan. Yani sıralı listede alttan 12. değere bakarsın. Ders notundaki Peru sorusu da böyle çözülür: 0.39 × 41 ≈ 16. değer. 30 bir yüzdedir, sıra numarası değil."
        },
        {
          "q": "Bir öğrencinin sınav puanının *z-score*'u 0. Aşağıdakilerden hangisi kesinlikle doğrudur?",
          "opts": [
            "Öğrenci sınavdan sıfır puan almıştır.",
            "Öğrencinin puanı sınıftaki en düşük puandır.",
            "Öğrencinin puanı sınıfın *mean*'ine eşittir.",
            "Öğrenci tam olarak *50th percentile*'dadır."
          ],
          "a": 2,
          "why": "z = (değer − *mean*) ÷ *standard deviation* = 0 ise pay sıfırdır, yani değer *mean*'e eşittir. Bu, puanın 0 ya da en düşük olduğu anlamına gelmez. *Mean* ile *median* farklı olabileceği için (örneğin *skewed* bir dağılımda) tam *50th percentile* olması da garanti değildir."
        }
      ]
    },
    {
      "no": 9,
      "code": "1D-5",
      "slug": "st109",
      "title": "Veriyi Dönüştürmek",
      "en": "Transforming Data",
      "accent": "#F472B6",
      "seconds": 345,
      "terms": [
        "Transforming data",
        "Adding a constant",
        "Multiplying by a constant",
        "Measures of center",
        "Measures of location",
        "Measures of variability",
        "Shape",
        "Standard deviation",
        "IQR",
        "Range",
        "z-score",
        "Units of measurement"
      ],
      "questions": [
        {
          "q": "Şekildeki *dotplot*, 9 öğrencinin 10 puanlık bir quiz'den aldığı puanları gösteriyor. Öğretmen herkese 2 puan eklerse yeni *median* ve *range* ne olur?",
          "opts": [
            "*Median* 8, *range* 7",
            "*Median* 6, *range* 5",
            "*Median* 8, *range* 5",
            "*Median* 6, *range* 7"
          ],
          "a": 2,
          "why": "Sıralı 9 değerin beşincisi 6, yani *median* 6; *range* 8 eksi 3, yani 5. Sabit eklemek *median*'ı 2 kaydırır ve 8 yapar; bütün noktalar birlikte kaydığı için *range* 5 kalır. Yayılıma da 2 eklemek en yaygın hatadır.",
          "fig": {
            "type": "dot",
            "values": [
              3,
              5,
              5,
              6,
              6,
              6,
              7,
              8,
              8
            ],
            "label": "Quiz score (points)"
          }
        },
        {
          "q": "Bir şehirde temmuz ayının günlük en yüksek sıcaklıklarında *mean* 25 °C, *standard deviation* 4 °C. Sıcaklıklar °F = 1,8 × °C + 32 formülüyle Fahrenhayt'a çevrilirse yeni *mean* ve *standard deviation* ne olur?",
          "opts": [
            "*Mean* 77 °F, *standard deviation* 39,2 °F",
            "*Mean* 77 °F, *standard deviation* 7,2 °F",
            "*Mean* 45 °F, *standard deviation* 7,2 °F",
            "*Mean* 77 °F, *standard deviation* 4 °F"
          ],
          "a": 1,
          "why": "*Mean* hem çarpılır hem kaydırılır: 1,8 × 25 = 45, artı 32 = 77 °F. *Standard deviation* yalnızca çarpılır: 1,8 × 4 = 7,2 °F. 32 eklemek bütün değerleri birlikte kaydırır, aralarındaki mesafeyi değiştirmez; bu yüzden yayılıma eklenmez."
        },
        {
          "q": "30 öğrencinin sınav puanlarının dağılımı *skewed right*; *mean* 62, *standard deviation* 12. Bütün puanlar *z-score*'a çevrilirse *z-score*'ların dağılımı için hangisi doğrudur?",
          "opts": [
            "Simetrik olur; *mean* 0, *standard deviation* 1",
            "*Skewed right* kalır; *mean* 62, *standard deviation* 1",
            "*Skewed left* olur; *mean* 0, *standard deviation* 12",
            "*Skewed right* kalır; *mean* 0, *standard deviation* 1"
          ],
          "a": 3,
          "why": "*z-score*'a çevirmek, önce 62 çıkarmak sonra 12'ye bölmektir. Çıkarma *mean*'i 0 yapar, bölme *standard deviation*'ı 12 bölü 12, yani 1 yapar. Pozitif bir sayıya bölmek ve sabit çıkarmak *shape*'i değiştirmez; *z-score* dağılımı simetrik hale getirmez."
        },
        {
          "q": "Bir kurye uygulamasında teslimat ücreti şöyle hesaplanıyor: ücret = 20 + 5 × (kilometre). Bir ayın teslimat ücretlerinde *mean* 60 lira, *standard deviation* 15 lira. Teslimat mesafelerinin *mean* ve *standard deviation*'ı kaçtır?",
          "opts": [
            "*Mean* 8 km, *standard deviation* 3 km",
            "*Mean* 12 km, *standard deviation* 3 km",
            "*Mean* 8 km, *standard deviation* 15 km",
            "*Mean* 12 km, *standard deviation* 15 km"
          ],
          "a": 0,
          "why": "İşlemi geri sar: kilometre = (ücret − 20) ÷ 5. *Mean*: 60 − 20 = 40, bölü 5 = 8 km. *Standard deviation* için 20 çıkarılmaz, yalnızca bölünür: 15 ÷ 5 = 3 km. Sabit çıkarmayı unutursan *mean* 12 çıkar; yayılımı bölmeyi unutursan 15 kalır."
        },
        {
          "q": "Şekildeki *boxplot*, 50 puanlık bir testin puanlarını gösteriyor. Öğretmen her puanı 2 ile çarparak 100'lük sisteme çeviriyor. Dönüştürülmüş puanların *median*'ı ve *IQR*'ı nedir?",
          "opts": [
            "*Median* 72, *IQR* 12",
            "*Median* 72, *IQR* 24",
            "*Median* 38, *IQR* 14",
            "*Median* 36, *IQR* 24"
          ],
          "a": 1,
          "why": "Grafikten *median* 36, *IQR* 42 eksi 30, yani 12. Sabitle çarpmak hem merkezi hem yayılımı çarpar: *median* 2 × 36 = 72, *IQR* 2 × 12 = 24. *IQR*'ı 12 bırakmak toplama kuralını çarpmaya uygulamak olur.",
          "fig": {
            "type": "box",
            "items": [
              {
                "name": "Test (out of 50)",
                "min": 20,
                "q1": 30,
                "med": 36,
                "q3": 42,
                "max": 48,
                "outliers": []
              }
            ],
            "label": "Score"
          }
        }
      ]
    },
    {
      "no": 10,
      "code": "1E",
      "slug": "st110",
      "title": "Dağılımları Karşılaştırmak",
      "en": "Comparing Distributions",
      "accent": "#A78BFA",
      "seconds": 354,
      "terms": [
        "Comparing distributions",
        "Shape",
        "Outliers",
        "Center",
        "Variability",
        "In context",
        "Parallel dotplots",
        "Back-to-back stemplot",
        "Relative frequency",
        "Side-by-side boxplots",
        "z-score",
        "Percentile"
      ],
      "questions": [
        {
          "q": "Şekildeki *side-by-side boxplots*, bir restoranın iki şubesindeki teslimat sürelerini (dakika) gösteriyor. Hangi karşılaştırma doğrudur?",
          "opts": [
            "A şubesi tipik olarak daha yavaş; çünkü kutusu eksende daha solda duruyor",
            "İki şubenin tipik süreleri aynı; B yalnızca *outlier* yüzünden farklı görünüyor",
            "B şubesi tipik olarak daha yavaş; ortadaki yarının yayılımı ise iki şubede aynı",
            "B şubesi tipik olarak daha yavaş; *IQR*'ı da A şubesininkinin iki katı kadar"
          ],
          "a": 2,
          "why": "*Median*'lar 22 ve 30 dakika: B'nin tipik süresi daha uzun. *IQR* A'da 28 − 18 = 10, B'de 36 − 26 = 10; ortadaki yarının yayılımı eşit. Eksende solda durmak daha kısa süre demektir; ayrıca B'nin *Q1*'i (26) bile A'nın *median*'ından büyük.",
          "fig": {
            "type": "box",
            "items": [
              {
                "name": "Branch A",
                "min": 12,
                "q1": 18,
                "med": 22,
                "q3": 28,
                "max": 38,
                "outliers": []
              },
              {
                "name": "Branch B",
                "min": 20,
                "q1": 26,
                "med": 30,
                "q3": 36,
                "max": 44,
                "outliers": [
                  58
                ]
              }
            ],
            "label": "Delivery time (min)"
          }
        },
        {
          "q": "Tablodaki *back-to-back stemplot*, iki şubenin sınav puanlarını gösteriyor. B şubesinin *median*'ı A şubesininkinden kaç puan büyüktür?",
          "opts": [
            "5 puan",
            "8 puan",
            "10 puan",
            "12 puan"
          ],
          "a": 1,
          "why": "Sol taraftaki yapraklar *stem*'den dışa doğru okunur: A şubesi 64, 69, 71, 75, 78, 82, 86; ortadaki değer 75. B şubesi 72, 76, 80, 83, 85, 89, 91; ortadaki değer 83. Fark 83 − 75 = 8 puan.",
          "fig": {
            "type": "table",
            "head": [
              "11-A leaves",
              "Stem",
              "11-B leaves"
            ],
            "rows": [
              [
                "9 4",
                "6",
                ""
              ],
              [
                "8 5 1",
                "7",
                "2 6"
              ],
              [
                "6 2",
                "8",
                "0 3 5 9"
              ],
              [
                "",
                "9",
                "1"
              ]
            ],
            "caption": "Key: 4 | 6 = 64 points in 11-A · 7 | 2 = 72 points in 11-B"
          }
        },
        {
          "q": "Bir okulda 120 dokuzuncu sınıf ve 40 on ikinci sınıf öğrencisine uyku süreleri soruluyor. Geceleri 7 saatten az uyuyanlar: dokuzuncu sınıflarda 60, on ikinci sınıflarda 30 öğrenci. İki grubu *histogram* ile karşılaştıran biri için hangisi doğrudur?",
          "opts": [
            "Az uyumak dokuzuncu sınıflarda daha yaygın; çünkü 60 öğrenci, 30 öğrenciden fazla",
            "Az uyumak iki grupta eşit yaygın; çünkü grup büyüklüğü sonucu hiç etkilemez",
            "*Frequency* karşılaştırılmalı; *relative frequency* grupların farkını gizler",
            "Az uyumak on ikinci sınıflarda daha yaygın: yüzde 75'e karşı yüzde 50"
          ],
          "a": 3,
          "why": "Grup büyüklükleri farklı olduğu için *relative frequency* karşılaştırılır: 60 ÷ 120 = yüzde 50, 30 ÷ 40 = yüzde 75. Ham sayıya bakmak yanıltır; dokuzuncu sınıflarda sayı büyük çünkü grup üç kat kalabalık."
        },
        {
          "q": "AP sınavında iki sınıfın quiz puanlarının dağılımlarını karşılaştırman isteniyor. Bir öğrenci *center* için yalnızca şunu yazıyor: “A sınıfının *median*'ı 70 puan. B sınıfının *median*'ı 78 puan.” Bu cevabın eksiği nedir?",
          "opts": [
            "Açık bir karşılaştırma yok; B'nin *median*'ının *greater than* olduğu yazılmalı",
            "*Median* karşılaştırmada kullanılamaz; onun yerine mutlaka *mean* verilmeli",
            "Bağlam fazla; değişkenin adı ve birimi yazılmadan yalnızca sayılar verilmeli",
            "*Center* için *IQR* verilmeli; çünkü *median* aslında yayılımı ölçen bir sayıdır"
          ],
          "a": 0,
          "why": "İki değeri ayrı ayrı sıralamak karşılaştırma sayılmaz; “B's *median* quiz score (78) is *greater than* A's (70)” gibi açık bir karşılaştırma sözcüğü gerekir. *Median* geçerli bir *center* ölçüsüdür ve bağlam (quiz puanı) yazmak zorunludur."
        },
        {
          "q": "Elif 100 metreyi 13,0 saniyede, 400 metreyi 62 saniyede koşuyor. Okulda 100 metre sürelerinde *mean* 14,0 saniye, *standard deviation* 0,5 saniye; 400 metre sürelerinde *mean* 66 saniye, *standard deviation* 4 saniye. Elif okuldakilere göre hangi yarışta daha iyidir?",
          "opts": [
            "400 metrede; çünkü *z-score*'u −1 ve bu sayı −2'den daha büyüktür",
            "100 metrede; çünkü *z-score*'u −2, yani ortalamadan 2 *standard deviation* hızlı",
            "400 metrede; çünkü ortalamadan 4 saniye, 100 metrede ise 1 saniye hızlı",
            "İkisinde eşit; çünkü iki yarışta da *z-score*'u negatif çıkıyor"
          ],
          "a": 1,
          "why": "100 metre: (13,0 − 14,0) ÷ 0,5 = −2. 400 metre: (62 − 66) ÷ 4 = −1. Koşuda düşük süre iyidir, o yüzden daha negatif *z-score* daha iyi performanstır. Saniye farklarını doğrudan kıyaslamak ya da büyük *z-score*'u otomatik olarak iyi saymak yaygın hatalardır."
        }
      ]
    },
    {
      "no": 11,
      "code": "1F-1",
      "slug": "st111",
      "title": "Deney mi, Gözlem mi?",
      "en": "Experiments vs. Observational Studies",
      "accent": "#FF7A6B",
      "seconds": 306,
      "terms": [
        "Inference",
        "Explanatory variable",
        "Response variable",
        "Experiment",
        "Treatment",
        "Experimental units",
        "Subjects",
        "Factor",
        "Levels",
        "Observational study",
        "Survey",
        "Confounding"
      ],
      "questions": [
        {
          "q": "Bir öğretmen ders çalışma koşullarını deniyor. Tablodaki iki *factor*'ün bütün kombinasyonları kullanılacak ve 48 gönüllü öğrenci *treatment*'lara eşit sayıda, rastgele dağıtılacak. Kaç *treatment* vardır ve her birine kaç *subject* düşer?",
          "opts": [
            "2 *treatment*; her birine 24 *subject*",
            "5 *treatment*; her birine yaklaşık 10 *subject*",
            "6 *treatment*; her birine 8 *subject*",
            "48 *treatment*; her birine 1 *subject*"
          ],
          "a": 2,
          "why": "Müziğin 3, çalışma süresinin 2 *level*'ı var; *treatment* sayısı 3 çarpı 2, 6 eder ve 48 bölü 6, her birine 8 *subject* düşer. *Level*'ları toplayıp 5 demek ya da *factor* sayısını (2) *treatment* sayısı sanmak en yaygın iki hatadır.",
          "fig": {
            "type": "table",
            "head": [
              "Factor",
              "Levels"
            ],
            "rows": [
              [
                "Music",
                "none · instrumental · with lyrics"
              ],
              [
                "Study time",
                "25 min · 50 min"
              ]
            ]
          }
        },
        {
          "q": "Bir *observational study*'de insanlara sahile ne sıklıkla gittikleri ve sağlık durumları soruluyor. Tabloya göre hangi ifade doğrudur?",
          "opts": [
            "Hiç gitmeyenlerde kötü sağlık oranı 2 katıdır; ama bu, sahilin sağlığı iyileştirdiğini göstermez",
            "Hiç gitmeyenlerde kötü sağlık oranı 1,6 katıdır; ama bu, sahilin sağlığı iyileştirdiğini göstermez",
            "Hiç gitmeyenlerde kötü sağlık oranı 2 katıdır; demek ki sahile gitmek sağlığı iyileştirir",
            "Hiç gitmeyenlerde kötü sağlık oranı 1,6 katıdır; demek ki sahile gitmek sağlığı iyileştirir"
          ],
          "a": 0,
          "why": "48 bölü 400 yüzde 12, 30 bölü 500 yüzde 6; yani oran 2 katıdır. Gruplar farklı büyüklükte olduğu için sayıları değil yüzdeleri karşılaştırırsın; 48 bölü 30 yanlış yoldur. Kimseye *treatment* uygulanmadığı için de *cause-and-effect* sonucu çıkmaz.",
          "fig": {
            "type": "table",
            "head": [
              "Coast visits",
              "People",
              "Report bad health"
            ],
            "rows": [
              [
                "Never",
                400,
                48
              ],
              [
                "At least once a week",
                500,
                30
              ]
            ]
          }
        },
        {
          "q": "Bir araştırmacı 90 gönüllüyü rastgele üç gruba ayırıyor; gruplar sekiz hafta boyunca günde 0, 1 ya da 3 fincan yeşil çay içiyor. Sonunda herkesin kolesterolü ölçülüyor. Hangisi doğrudur?",
          "opts": [
            "*Observational study*; *explanatory variable* kolesterol düzeyidir",
            "*Experiment*; *response variable* çay miktarıdır, 90 *treatment* vardır",
            "*Observational study*; *response variable* kolesteroldür, 3 *level* vardır",
            "*Experiment*; *explanatory variable* çay miktarıdır, 3 *treatment* vardır"
          ],
          "a": 3,
          "why": "Kimin ne kadar çay içeceğine araştırmacı karar verdiği için bu bir *experiment*. Değiştirilen tek *factor*, yani *explanatory variable* çay miktarıdır; üç *level*'ı olduğu için üç *treatment* vardır. Kolesterol *response variable*'dır; 90 gönüllü ise *subjects*'tir, *treatment* değil."
        },
        {
          "q": "Bir *observational study*'de düzenli kahvaltı eden öğrencilerin not ortalaması, etmeyenlerinkinden yüksek çıkıyor. Hangisi olası bir *confounding variable*'ı AP'nin beklediği biçimde açıklar?",
          "opts": [
            "Sınavların zorluğu: zor sınavlarda bütün öğrencilerin notu düşer, kolay sınavlarda yükselir",
            "Uyku düzeni: erken yatanlar kahvaltıya vakit bulur, dinç oldukları için notları da yükselir",
            "Kahvaltı alışkanlığı: kahvaltı edenlerle etmeyenlerin notları birbirinden farklıdır",
            "Örneklem büyüklüğü: az öğrenciyle yapılan bir çalışmanın sonucu şansa bağlı olabilir"
          ],
          "a": 1,
          "why": "*Confounding variable* iki bağlantı ister: *explanatory variable* (kahvaltı) ile ilişkili olmalı ve *response variable*'ı (not) etkilemeli. Uyku düzeni ikisini de sağlar. Sınav zorluğu yalnızca notu etkiler, kahvaltıyla ilişkili değildir; diğer iki şık ise üçüncü bir değişken tarif etmez."
        },
        {
          "q": "Bir sağlık kurumu, rastgele seçtiği 1.000 yetişkine haftada kaç gün spor yaptığını ve gecede kaç saat uyuduğunu soruyor. Bu çalışmayı en iyi hangisi tanımlar?",
          "opts": [
            "*Experiment*; çünkü katılımcılar rastgele seçilmiştir",
            "*Experiment*; çünkü iki değişkenin ilişkisi inceleniyor",
            "*Observational study*; çünkü kimseye *treatment* uygulanmamıştır",
            "*Observational study*; çünkü 1.000 kişi bir deney için azdır"
          ],
          "a": 2,
          "why": "Bir çalışmayı *experiment* yapan şey *treatment* uygulanmasıdır; burada yalnızca soru soruldu, yani bu bir *survey*, bir *observational study*. Rastgele seçim ile *treatment* atamak aynı şey değildir: rastgele seçim sonucu kime genelleyeceğini belirler, çalışmayı deney yapmaz."
        }
      ]
    },
    {
      "no": 12,
      "code": "1F-2",
      "slug": "st112",
      "title": "Investigative Question ve Sonucun Kapsamı",
      "en": "The Investigative Question",
      "accent": "#F5B041",
      "seconds": 325,
      "terms": [
        "Investigative question",
        "Variable of interest",
        "Parameter",
        "Statistic",
        "Mean",
        "Proportion",
        "Type of inference",
        "Alternative hypothesis",
        "Type of conclusion",
        "Generalize",
        "Cause-and-effect",
        "Census"
      ],
      "questions": [
        {
          "q": "Bir satranç kulübü, 40 üyesinin tamamına turnuvaya katılmak isteyip istemediğini soruyor. Tabloya göre hangisi doğrudur?",
          "opts": [
            "Oran 0,65'tir; bu bir *statistic*'tir, gerçek oranı bulmak için *inference* gerekir",
            "Oran 0,65'tir; bu bir *parameter*'dır, *census* yapıldığı için *inference* gerekmez",
            "Oran 0,35'tir; bu bir *parameter*'dır, *census* yapıldığı için *inference* gerekmez",
            "Oran 0,65'tir; ama üyeler rastgele seçilmediği için bu sonuç kullanılamaz"
          ],
          "a": 1,
          "why": "26 bölü 40, 0,65 eder. Kulübün bütün üyelerine sorulduğu için bu bir *census*; bulunan oran örneklemden gelen bir tahmin değil, *population*'ın gerçek değeri, yani *parameter*. Herkese sorduysan rastgele seçime de *inference*'a da gerek kalmaz.",
          "fig": {
            "type": "table",
            "head": [
              "Answer",
              "Members"
            ],
            "rows": [
              [
                "Yes",
                26
              ],
              [
                "No",
                14
              ]
            ],
            "caption": "All 40 members of the club"
          }
        },
        {
          "q": "Bir oyun stüdyosu, 18 yaşından küçük oyuncularla bir çalışma planlıyor. Amaç, kısa video reklamın afiş reklama göre oyunun mağaza sayfasına yapılan ziyaretleri artırıp artırmadığını görmek. En uygun *investigative question* hangisidir?",
          "opts": [
            "Video reklam, afişe göre oyuncuların oyuna ilgisini artırıyor mu?",
            "Bütün oyuncular için, video reklam afişe göre ortalama ziyaret sayısını artırıyor mu?",
            "18 yaş altı oyuncular için, video reklam ile afiş arasında ortalama ziyaret sayısında fark var mı?",
            "18 yaş altı oyuncular için, video reklam afişe göre ortalama ziyaret sayısını artırıyor mu?"
          ],
          "a": 3,
          "why": "Dört şeye bak: *population* (18 yaş altı oyuncular), *variable* (ziyaret sayısı), *parameter* (*mean*) ve yön (artış). İlk şıkta *population* yok ve *variable* belirsiz, ikincide *population* fazla geniş, üçüncüde yön yanlış: amaç bir artışı görmek, fark var mı sorusu ise iki yönlüdür."
        },
        {
          "q": "Bir araştırmacı, Ankara'daki bir üniversitenin öğrenci listesinden rastgele 300 öğrenci seçiyor; bunların 114'ü her sabah kahvaltı ettiğini söylüyor. Bulunan yüzde kaçtır ve en geniş hangi *population* için makul bir tahmindir?",
          "opts": [
            "Yüzde 38; o üniversitedeki bütün öğrenciler için",
            "Yüzde 38; Türkiye'deki bütün üniversite öğrencileri için",
            "Yüzde 62; Ankara'daki bütün üniversite öğrencileri için",
            "Yüzde 38; yalnızca ankete katılan 300 öğrenci için"
          ],
          "a": 0,
          "why": "114 bölü 300, yüzde 38 eder. *Sample* yalnızca o üniversitenin listesinden rastgele seçildiği için sonuç, seçildiği *population*'a, yani o üniversitenin bütün öğrencilerine genellenir. Başka üniversiteler listede yoktu; yalnızca 300 kişi demek ise rastgele seçimin sağladığı genellemeyi boşa harcamaktır."
        },
        {
          "q": "Bir yüzme antrenörü, yeni ısınma programının 50 metre serbest süresini düşürdüğüne inanıyor. Şimdiki programla ortalama süre 32 saniye. Kurulacak *investigative question*'da *parameter* ve yön hangisidir?",
          "opts": [
            "Yeni programla yüzülen süre; yön *less than* 32",
            "Yeni programla yüzülen sürelerin *mean*'i; yön *not equal* 32",
            "Yeni programla yüzülen sürelerin *mean*'i; yön *less than* 32",
            "Yeni programı kullananların *proportion*'ı; yön *greater than* 0,50"
          ],
          "a": 2,
          "why": "Süre sayısal bir *variable*; onu özetleyen *parameter* *mean*'dir. Yalnızca süre demek değişkeni söyler, *parameter*'ı değil. Antrenör bir düşüş beklediği için yön tek taraflıdır: *less than* 32. *Not equal* yalnızca fark arandığında, *proportion* ise evet hayır türünde bir değişkende kullanılır."
        },
        {
          "q": "Bir diş hekimliği fakültesi ilanla 80 gönüllü yetişkin buluyor ve onları rastgele iki gruba ayırıyor: bir grup yeni diş macununu, diğeri standart macunu kullanıyor. Altı hafta sonra yeni macun grubunda diş plağı anlamlı biçimde daha az. Hangi sonuç uygundur?",
          "opts": [
            "Yeni macun bütün yetişkinlerde plağı azaltır; çünkü gruplar rastgele oluşturuldu",
            "Yeni macun, bu çalışmadaki gönüllülere benzeyen yetişkinlerde plağı azaltır",
            "Macun ile plak ilişkilidir; ama katılımcılar gönüllü olduğu için neden sonuç denemez",
            "Hiçbir sonuç çıkarılamaz; çünkü 80 kişi bütün yetişkinleri temsil edemez"
          ],
          "a": 1,
          "why": "*Treatment*'lar rastgele atandığı için *cause-and-effect* denebilir: plağı azaltan macundur. Ama katılımcılar *population*'dan rastgele seçilmedi, gönüllü oldular; bu yüzden sonuç bütün yetişkinlere değil, çalışmadakilere benzeyenlere uygulanır. Rastgele atama ile rastgele seçim iki ayrı sorunun cevabıdır."
        }
      ]
    },
    {
      "no": 13,
      "code": "1G-1",
      "slug": "st113",
      "title": "Rastgele Örnekleme Yöntemleri",
      "en": "Random Sampling Methods",
      "accent": "#3FE0A8",
      "seconds": 318,
      "terms": [
        "Simple random sample (SRS)",
        "Sampling without replacement",
        "Sampling with replacement",
        "Stratified random sample",
        "Strata",
        "Cluster random sample",
        "Cluster",
        "Systematic random sample",
        "Exit poll",
        "randInt / randIntNoRep"
      ],
      "questions": [
        {
          "q": "Bir spor kulübünün bin 200 üyesi alfabetik bir listede duruyor. Yönetim 60 kişilik bir *systematic random sample* seçecek ve rastgele başlangıç olarak 13 geliyor. Aralık kaçtır ve listeden seçilen üçüncü üye kaçıncı sıradadır?",
          "opts": [
            "Aralık 60; üçüncü üye 133. sırada",
            "Aralık 20; üçüncü üye 60. sırada",
            "Aralık 20; üçüncü üye 53. sırada",
            "Aralık 60; üçüncü üye 193. sırada"
          ],
          "a": 2,
          "why": "Aralık, popülasyon bölü örneklem büyüklüğüdür: 1200 bölü 60, yani 20. Başlangıç 13 olduğuna göre seçilenler 13, 33, 53 diye gider; üçüncü üye 53. sıradadır. Aralığı örneklem büyüklüğüyle, yani 60 ile karıştırma."
        },
        {
          "q": "Bir okulun 3 kampüsü, her kampüste 8 sınıfı, her sınıfta 25 öğrencisi var; toplam 600 öğrenci. 150 kişilik bir örneklem seçilecek. Aşağıdaki planlardan hangisi doğru kurulmuştur?",
          "opts": [
            "*Stratified*: her kampüsten 50 öğrencilik *SRS*; *cluster*: rastgele 6 sınıfın tamamı",
            "*Stratified*: rastgele 6 sınıfın tamamı; *cluster*: her kampüsten 50 öğrencilik *SRS*",
            "*Stratified*: rastgele 1 kampüsün tamamı; *cluster*: her sınıftan rastgele 6 öğrenci",
            "*Stratified*: her kampüsten 50 öğrencilik *SRS*; *cluster*: listeden her 4'üncü öğrenci"
          ],
          "a": 0,
          "why": "*Stratified*'da her gruptan *SRS* alınır: 150 bölü 3, kampüs başına 50. *Cluster*'da gruplar bütün olarak seçilir: 150 bölü 25, yani 6 sınıfın tamamı. Listeden her 4'üncü öğrenciyi almak (600 bölü 150 = 4) *systematic* yöntemdir; acı sos fabrikası örneğinin aynı mantığı."
        },
        {
          "q": "Bir sınıfta 12 kız ve 12 erkek öğrenci var. Öğretmen kızlar arasından rastgele 3, erkekler arasından rastgele 3 öğrenci seçiyor. Bu örneklem için hangi ifade doğrudur?",
          "opts": [
            "*SRS*'tir; çünkü her öğrencinin seçilme şansı dörtte birdir ve eşittir",
            "*SRS* değildir; çünkü 6 kızdan oluşan bir grup hiçbir zaman seçilemez",
            "*SRS* değildir; çünkü öğrencilerin seçilme şansları birbirine eşit değildir",
            "*Cluster random sample*'dır; çünkü sınıf önce iki gruba ayrılmıştır"
          ],
          "a": 1,
          "why": "Her öğrencinin şansı 3 bölü 12, yani dörtte bir ve eşittir; ama bu yetmez. *SRS*'te 6 kişilik her olası grubun şansı eşit olmalıdır; burada 6 kız ya da 4 kız 2 erkek gibi gruplar imkânsızdır. Her gruptan ayrı *SRS* alındığı için bu bir *stratified random sample*'dır."
        },
        {
          "q": "Bir spor salonu zinciri, üyelerinin haftalık ortalama antrenman süresini tahmin etmek istiyor. Üyeleri öğrenci, çalışan ve emekli olarak üçe ayırıyor; her gruptan rastgele 40 kişi seçiyor. Her grubun süreleri kendi içinde benzer, gruplar arasında ise çok farklı. Yöntemin adı ve *SRS*'e göre asıl avantajı nedir?",
          "opts": [
            "*Cluster random sample*; üyeler bir arada bulunduğu için veri toplamak daha ucuzdur",
            "*Cluster random sample*; tahmin örneklemden örnekleme daha az değişir",
            "*Stratified random sample*; daha az kişiyle görüşüldüğü için daha ucuzdur",
            "*Stratified random sample*; tahmin örneklemden örnekleme daha az değişir"
          ],
          "a": 3,
          "why": "Bütün gruplardan ayrı ayrı rastgele seçim yapıldığı için yöntem *stratified*'dır; *cluster* olsaydı birkaç grubun tamamı alınırdı. *Strata* kendi içinde benzer olduğunda her grup örneklemde yer alır ve tahmin daha az değişken, yani daha isabetli olur. Ucuzluk ve pratiklik *cluster*'ın avantajıdır."
        },
        {
          "q": "20 öğrenci 1'den 20'ye numaralandı. 4 kişilik bir *SRS* seçmek için *randInt* komutu sırayla tablodaki sayıları üretti. Örnekleme hangi numaralar girer?",
          "opts": [
            "14, 3, 14 ve 20",
            "3, 7, 11 ve 20",
            "14, 3, 20 ve 7",
            "14, 20, 7 ve 11"
          ],
          "a": 2,
          "why": "*SRS*'te seçim *without replacement* yapılır; tekrar eden sayı atlanır. Sırayla 14, 3 alınır; ikinci 14 atlanır; sonra 20 ve 7 gelir. Dört farklı numara tamamlandığı için ikinci 3 ve 11'e gerek kalmaz.",
          "fig": {
            "type": "table",
            "head": [
              "Sıra",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7"
            ],
            "rows": [
              [
                "randInt(1,20)",
                14,
                3,
                14,
                20,
                7,
                3,
                11
              ]
            ],
            "caption": "Hesap makinesinin ürettiği sayılar, soldan sağa"
          }
        }
      ]
    },
    {
      "no": 14,
      "code": "1G-2",
      "slug": "st114",
      "title": "Kötü Örnekleme ve Bias",
      "en": "Bad Sampling & Bias",
      "accent": "#FF7A6B",
      "seconds": 321,
      "terms": [
        "Bias",
        "Convenience sample",
        "Voluntary response sample",
        "Voluntary response bias",
        "Sampling frame",
        "Undercoverage bias",
        "Nonresponse bias",
        "Response bias",
        "Question wording bias",
        "Overestimate",
        "Underestimate"
      ],
      "questions": [
        {
          "q": "Bir kütüphaneci, 40 raflı kütüphanede o an ödünçte olan kitap sayısını tahmin etmek istiyor. Yalnızca girişe en yakın 8 rafa bakıyor ve bu raflardan 96 kitabın ödünçte olduğunu görüyor. Girişteki raflarda en popüler kitaplar duruyor. Kütüphanecinin tahmini kaçtır ve bu tahmin büyük olasılıkla hangi yöndedir?",
          "opts": [
            "480 kitap; büyük olasılıkla bir *underestimate*",
            "480 kitap; büyük olasılıkla bir *overestimate*",
            "768 kitap; büyük olasılıkla bir *overestimate*",
            "136 kitap; büyük olasılıkla bir *underestimate*"
          ],
          "a": 1,
          "why": "40 raf, 8 rafın 5 katıdır; 96 çarpı 5, tahmin 480 kitap. Bu bir *convenience sample*: girişteki raflarda popüler kitaplar olduğu için bu raflardan diğerlerine göre daha çok kitap ödünç alınır, yani 480 gerçek toplamı büyük olasılıkla *overestimate* eder. Domates bahçesi örneğiyle aynı mantık."
        },
        {
          "q": "Bir araştırmacı, bir şehirdeki yetişkinlerin günde ortalama kaç saat internet kullandığını tahmin etmek istiyor. Örneklemini bir alışveriş sitesinin üye listesinden rastgele seçtiği 800 kişiden oluşturuyor; seçilenlerin hepsi cevap veriyor. Hangi *bias* türü vardır ve sonucu nasıl etkiler?",
          "opts": [
            "*Undercoverage bias*; ortalama süre büyük olasılıkla *overestimate* edilir",
            "*Undercoverage bias*; ortalama süre büyük olasılıkla *underestimate* edilir",
            "*Nonresponse bias*; ortalama süre büyük olasılıkla *overestimate* edilir",
            "*Voluntary response bias*; ortalama süre büyük olasılıkla *underestimate* edilir"
          ],
          "a": 0,
          "why": "Seçim rastgele ama *sampling frame*, yani üye listesi, siteye üye olmayan yetişkinleri dışarıda bırakıyor; bu *undercoverage bias*. Üye olmayanlar büyük olasılıkla interneti daha az kullanır; onlar eksik kalınca ortalama süre *overestimate* edilir. Herkes cevap verdiği için *nonresponse* yoktur."
        },
        {
          "q": "Bir haber sitesi ana sayfasına şehir merkezinin araç trafiğine kapatılmasıyla ilgili bir anket koyuyor; 50 bin kişi oy veriyor ve yüzde 78'i karşı çıkıyor. Bir üniversite ise şehirdeki yetişkinler arasından rastgele 500 kişi seçiyor; yüzde 46'sı karşı çıkıyor. Hangi ifade doğrudur?",
          "opts": [
            "Sitenin sonucu daha güvenilirdir; çünkü örneklemi 100 kat daha büyüktür",
            "İki sonuç eşit güvenilirdir; çünkü ikisi de popülasyonun bir parçasıdır",
            "Sitenin sonucu daha güvenilirdir; çünkü isteyen herkes oy verebilmiştir",
            "Üniversitenin sonucu daha güvenilirdir; büyük örneklem *bias*'ı düzeltmez"
          ],
          "a": 3,
          "why": "Site anketi bir *voluntary response sample*: yasağa en çok kızanların oy verme olasılığı daha yüksektir, bu yüzden yüzde 78 karşı olanların oranını büyük olasılıkla *overestimate* eder. Örneklemi 50 bine çıkarmak yöntemi değiştirmez; *bias* aynen kalır. Rastgele seçilen 500 kişi küçük ama yansız bir örneklemdir."
        },
        {
          "q": "Bir okulda iki ayrı rastgele örnekleme aynı konu iki farklı biçimde soruldu; seçilen herkes cevap verdi. Tabloya göre *evet* yüzdeleri arasındaki fark kaç puandır ve bu farkın en olası nedeni nedir?",
          "opts": [
            "46 puan; *question wording bias*",
            "23 puan; *nonresponse bias*",
            "23 puan; *question wording bias*",
            "46 puan; *undercoverage bias*"
          ],
          "a": 2,
          "why": "96 bölü 200, yüzde 48; 142 bölü 200, yüzde 71; fark 23 puan. 46, kişi sayıları arasındaki farktır, yüzde değil. İki örneklem de rastgele seçildi ve herkes cevap verdi; değişen tek şey sorunun yazılışı. İkinci soru yönlendirici olduğu için bu *question wording bias*'tır.",
          "fig": {
            "type": "table",
            "head": [
              "Soru metni",
              "Örneklem",
              "Evet diyen"
            ],
            "rows": [
              [
                "Okul kıyafeti kaldırılsın mı?",
                200,
                96
              ],
              [
                "Öğrencilerin özgürlüğünü kısıtlayan okul kıyafeti kaldırılsın mı?",
                200,
                142
              ]
            ],
            "caption": "Her soru, rastgele seçilmiş 200 öğrencilik ayrı bir örnekleme soruldu"
          }
        },
        {
          "q": "Bir diş hekimi, hastaları arasından rastgele seçtiği 200 kişiye yüz yüze, dişlerini günde iki kez fırçalayıp fırçalamadıklarını soruyor; 170'i evet diyor, yani yüzde 85. AP sınavında bu çalışmadaki *bias*'ı tam olarak açıklayan cevap hangisidir?",
          "opts": [
            "Bu bir *response bias* örneğidir; bu yüzden yüzde 85 sonucuna hiç güvenilemez.",
            "Fırçalamayan bazı hastalar hekime evet der; bu yüzden yüzde 85 gerçek oranı *overestimate* eder.",
            "Yalnızca 200 hasta soruldu; örneklem büyütülürse *bias* kendiliğinden ortadan kalkar.",
            "Hastaların çoğu soruyu cevaplamadı; bu yüzden yüzde 85 gerçek oranı *underestimate* eder."
          ],
          "a": 1,
          "why": "AP iki adım ister: örneklemdekilerin cevabı gerçekten nasıl farklı ve sonuç hangi yöne kayıyor. Hekimin karşısında iyi görünmek isteyen hastalar fırçalamasa da evet diyebilir; bu *response bias* oranı *overestimate* eder. Yalnızca türün adını yazmak ya da yönü belirtmemek eksik cevaptır; herkes cevap verdiği için *nonresponse* da yoktur."
        }
      ]
    },
    {
      "no": 15,
      "code": "1H-1",
      "slug": "st115",
      "title": "İyi Deneyin Dört İlkesi",
      "en": "Principles of Experimental Design",
      "accent": "#5BC0EB",
      "seconds": 317,
      "terms": [
        "Comparison",
        "Control group",
        "Placebo",
        "Placebo effect",
        "Single-blind",
        "Double-blind",
        "Random assignment",
        "Completely randomized design",
        "Replication",
        "Direct control",
        "Confounding",
        "Cause and effect"
      ],
      "questions": [
        {
          "q": "Bir biyoloji öğretmeni 12 fasulye fidesini 1'den 12'ye numaralıyor. Plan şu: hesap makinesinin verdiği tekrarsız rastgele sıradaki ilk 4 numara gübre A grubuna, sonraki 4 numara gübre B grubuna, kalan 4 numara *control group*'a girecek. Sıra şöyle çıkıyor: 7, 3, 11, 1, 9, 5, 12, 2, 8, 4, 10, 6. 9 numaralı fide hangi gruba girer?",
          "opts": [
            "Gübre A grubuna",
            "Gübre B grubuna",
            "*Control group*'a",
            "Yeniden çekilişe"
          ],
          "a": 1,
          "why": "İlk 4 numara 7, 3, 11, 1 gübre A; sonraki 4 numara 9, 5, 12, 2 gübre B; kalan 8, 4, 10, 6 *control group*. 9 beşinci sırada çıktığı için gübre B grubundadır. Fidenin kendi numarasına değil, numaranın kaçıncı sırada çıktığına bakılır."
        },
        {
          "q": "Bir migren ilacı deneyinde 100 hasta rastgele iki gruba ayrıldı; iki grup da aynı görünen haplar aldı. Tabloya göre hangi yorum doğrudur?",
          "opts": [
            "İlaç grubunun yüzde 60'ı iyileşti; ilacın kattığı fark 60 yüzde puandır",
            "*Placebo* grubunda iyileşen olmamalıydı; deney hatalı yürütülmüştür",
            "*Placebo* grubunun yüzde 36'sı da iyileşti; ilacın kattığı fark 24 yüzde puandır",
            "İki grup da 50 kişilik olduğundan ilacın kattığı fark 12 yüzde puandır"
          ],
          "a": 2,
          "why": "30 bölü 50 yüzde 60, 18 bölü 50 yüzde 36 eder; fark 24 yüzde puan. *Placebo* grubundaki yüzde 36, *placebo effect* ve kendiliğinden iyileşmeyi gösteren *baseline*'dır; ilacın etkisi bunun üstünde kalan kısımdır. 12 ise yüzde değil, kişi sayıları arasındaki farktır.",
          "fig": {
            "type": "table",
            "head": [
              "Group",
              "Patients",
              "Improved"
            ],
            "rows": [
              [
                "New drug",
                50,
                30
              ],
              [
                "Placebo",
                50,
                18
              ]
            ],
            "caption": "Migraine experiment"
          }
        },
        {
          "q": "İyi bir deneyin ilkeleriyle ilgili aşağıdaki ifadelerden hangisi doğrudur?",
          "opts": [
            "*Replication*, aynı deneyin başka bir okulda baştan tekrarlanması demektir",
            "Her deneyde hiçbir şey almayan bir *control group* bulunmak zorundadır",
            "*Random assignment*, grupların her bakımdan birebir aynı olmasını garanti eder",
            "*Direct control*, *treatment* dışındaki koşulları bütün birimler için aynı tutmaktır"
          ],
          "a": 3,
          "why": "*Direct control* diğer değişkenleri herkes için sabit tutar; böylece *confounding* önlenir ve *response*'taki değişkenlik azalır. İstatistikte *replication* her grupta yeterince çok birim kullanmaktır; *control group* şart değildir, şart olan *comparison*'dır; *random assignment* ise birebir değil, kabaca denk gruplar oluşturur."
        },
        {
          "q": "Bir öğretmen 30 gönüllü öğrenciyi, 15'i müzik dinleyerek 15'i sessizlikte çalışacak biçimde iki eşit gruba rastgele ayırmak istiyor. En uygun yöntem hangisidir?",
          "opts": [
            "Numaraları eş kâğıtlara yazıp karıştırmak; çekilen ilk 15 numara müzik grubu, kalanlar sessiz grup",
            "Her öğrenci için yazı tura atmak; yazı gelenler müzik grubu, tura gelenler sessiz grup",
            "Sınıf listesindeki ilk 15 öğrenciyi müzik grubuna, son 15 öğrenciyi sessiz gruba yazmak",
            "Öğrencilerin grubunu kendilerinin seçmesine izin vermek; dolan gruba başka kimseyi almamak"
          ],
          "a": 0,
          "why": "Şapka (ya da tekrarsız rastgele sayı) yöntemi hem tamamen rastgeledir hem de grupları tam 15'e 15 yapar. Yazı tura rastgeledir ama eşit grup vermesi pek beklenmez; AP'de eşit grup isteniyorsa yazı turadan uzak dur. Liste sırası ve kendi seçimi ise rastgele değildir, *confounding*'e kapı açar."
        },
        {
          "q": "Yeni bir diş macununun diş eti kanamasını azaltıp azaltmadığını sınayan deneyde gönüllüler, aynı görünen etiketsiz tüplerden hangisini kullandığını bilmiyor. Diş etlerini puanlayan hekim ise kimin hangi macunu kullandığını biliyor. Hangisi doğrudur?",
          "opts": [
            "Deney *double-blind*'dır; çünkü tüpler etiketsizdir ve aynı görünür",
            "Deney *single-blind*'dır; hekimin beklentisi puanlamayı etkileyebilir",
            "Deney *single-blind*'dır; ölçümü yapanın bilmesi bir sakınca yaratmaz",
            "Deney kör değildir; çünkü gönüllüler bir macun kullandığını bilmektedir"
          ],
          "a": 1,
          "why": "Yalnızca denekler bilmediği için deney *single-blind*'dır. *Double-blind* olması için *response variable*'ı ölçen hekimin de bilmemesi gerekir; yoksa yeni macunu kullananları farkında olmadan daha iyi puanlayabilir."
        }
      ]
    },
    {
      "no": 16,
      "code": "1H-2",
      "slug": "st116",
      "title": "Blocking ve Matched Pairs",
      "en": "Blocking & Matched Pairs",
      "accent": "#A78BFA",
      "seconds": 326,
      "terms": [
        "Block",
        "Blocking",
        "Randomized block design",
        "Completely randomized design",
        "Matched pairs design",
        "Random assignment",
        "Random order",
        "Experimental units",
        "Response variable",
        "Confounding",
        "Stratified random sample"
      ],
      "questions": [
        {
          "q": "Altı öğrenci aynı zorlukta iki kelime listesini ezberliyor: birini sessiz ortamda, diğerini müzik dinlerken. Hangi koşulun önce geleceği her öğrenci için yazı turayla belirleniyor. Tabloda doğru hatırlanan kelime sayıları var. *Matched pairs design*'da bakılan sayı, yani farkların (Silent eksi Music) ortalaması kaçtır?",
          "opts": [
            "2 kelime",
            "3 kelime",
            "12 kelime",
            "13 kelime"
          ],
          "a": 0,
          "why": "Her öğrenci kendisiyle kıyaslanır: farklar 2, 1, 3, 0, 3 ve 3; toplam 12, 6'ya bölünce 2 kelime. 12 farkların toplamıdır, 13 ise yalnızca sessiz ortamın ortalamasıdır. Öğrenciler arasındaki büyük fark (9 ile 17 arası) böylece hesabın dışında kalır.",
          "fig": {
            "type": "table",
            "head": [
              "Student",
              "Silent",
              "Music"
            ],
            "rows": [
              [
                "A",
                14,
                12
              ],
              [
                "B",
                9,
                8
              ],
              [
                "C",
                17,
                14
              ],
              [
                "D",
                11,
                11
              ],
              [
                "E",
                12,
                9
              ],
              [
                "F",
                15,
                12
              ]
            ],
            "caption": "Words recalled"
          }
        },
        {
          "q": "Bir spor bilimci yeni bir ısınma programını sınıyor. 40 gönüllünün 24'ü lisanslı sporcu, 16'sı değil. Sporcu olup olmamaya göre iki *block* kuruyor ve her *block*'un içinde gönüllülerin yarısını rastgele yeni programa, yarısını eski programa atıyor. Yeni program grubunda kaç lisanslı sporcu bulunur?",
          "opts": [
            "8",
            "10",
            "12",
            "20"
          ],
          "a": 2,
          "why": "Atama her *block*'un içinde yapılır: 24 sporcunun yarısı, yani 12'si yeni programa girer; sporcu olmayan 16 kişiden de 8'i. Yeni program grubu toplam 20 kişidir ama içindeki sporcu sayısı 12'dir. *Completely randomized design*'da bu denge garanti değildir; *block* kurunca garanti olur."
        },
        {
          "q": "*Randomized block design* için aşağıdaki ifadelerden hangisi doğrudur?",
          "opts": [
            "Birimler *block*'lara rastgele dağıtılır; her *block* tek bir *treatment* alır",
            "*Block*'lar benzer birimlerden kurulur; *treatment*'lar her *block*'un içinde rastgele atanır",
            "*Block*'lar *explanatory variable*'ın seviyelerine göre kurulur; atama tek seferde yapılır",
            "*Blocking*'in amacı, deneyin sonuçlarını daha geniş bir popülasyona genelleyebilmektir"
          ],
          "a": 1,
          "why": "*Block*'ları araştırmacı, *response variable*'ı etkileyecek bir özellikte benzer birimlerden bilerek kurar; rastgele olan, her *block*'un içindeki atamadır. Bir *block* tek bir *treatment* alsaydı *block* değişkeni ile *treatment* birbirine karışırdı, yani *confounding* olurdu."
        },
        {
          "q": "20 gönüllü iki klavyeyi deniyor: herkes önce X klavyesiyle, ardından Y klavyesiyle aynı uzunlukta bir metin yazıyor. Y ile ortalama yazma hızı daha yüksek çıkıyor. Bu tasarımdaki asıl sorun nedir?",
          "opts": [
            "Aynı kişi iki klavyeyi de kullandığı için ikisinin karşılaştırılması geçersizdir",
            "Hiç klavye kullanmayan bir *control group* olmadığı için kıyas çizgisi yoktur",
            "Yalnızca 20 gönüllü vardır; bu tasarım için *replication* kesinlikle yetersizdir",
            "Sıra rastgele değildir; ikinci denemedeki alışma, klavyenin etkisiyle karışır"
          ],
          "a": 3,
          "why": "Herkes Y'yi ikinci sırada kullandığı için hız artışı klavyeden mi, metne ve teste alışmaktan mı geldi ayrılamaz; sıra ile *treatment* arasında *confounding* vardır. Çözüm: her gönüllü için sırayı yazı turayla belirlemek. Aynı kişinin iki *treatment*'ı da alması sorun değil, *matched pairs design*'ın ta kendisidir."
        },
        {
          "q": "Bir çiftçi yeni bir gübrenin domates verimini artırıp artırmadığını sınayacak. 20 parselin 10'u güneşli yamaçta, 10'u gölgeli yamaçta; güneş alma durumu verimi güçlü biçimde etkiliyor. En iyi tasarım hangisidir?",
          "opts": [
            "Yeni gübreyi güneşli 10 parsele, eski gübreyi gölgeli 10 parsele vermek",
            "20 parselin tümünü tek şapkadan çekip 10'una yeni, 10'una eski gübre vermek",
            "Yamaca göre iki *block* kurup her birinde rastgele 5 parsele yeni, 5 parsele eski gübre vermek",
            "Gübre türüne göre iki *block* kurup her birinde parsellerin yamacını rastgele seçmek"
          ],
          "a": 2,
          "why": "*Block*, *response variable*'ı en çok etkileyen ve kontrol edilemeyen değişkene, yani yamaca göre kurulur; atama her *block*'un içinde rastgele yapılır. İlk şıkta gübre ile güneş tamamen karışır (*confounding*). Tek şapkadan çekmek geçerli bir *completely randomized design*'dır ama güneşten gelen değişkenliği hesaba katmaz."
        }
      ]
    },
    {
      "no": 17,
      "code": "1H-3",
      "slug": "st117",
      "title": "Statistically Significant ve Çıkarımın Kapsamı",
      "en": "Statistical Significance & Scope of Inference",
      "accent": "#F472B6",
      "seconds": 326,
      "terms": [
        "Statistically significant",
        "Randomization distribution",
        "Simulation",
        "Chance variation",
        "Random assignment",
        "Random selection",
        "Scope of inference",
        "Cause and effect",
        "Convincing evidence",
        "Placebo",
        "Observational study",
        "Data ethics"
      ],
      "questions": [
        {
          "q": "40 gönüllü öğrenci rastgele iki gruba ayrılıyor: 20'sine ödev günü hatırlatma mesajı gidiyor, 20'sine gitmiyor. Mesaj alanların 14'ü, almayanların 8'i ödevi zamanında teslim ediyor; fark 6 öğrenci. Mesajın etkisiz olduğu varsayılarak kura 50 kez yeniden çekiliyor; çıkan farklar şekildeki *dotplot*'ta. Hangisi doğrudur?",
          "opts": [
            "6 ya da daha büyük fark 3 denemede çıkmış, yani yüzde 6; fark *not statistically significant*",
            "6 ya da daha büyük fark 2 denemede çıkmış, yani yüzde 4; fark *not statistically significant*",
            "6 ya da daha büyük fark 2 denemede çıkmış, yani yüzde 4; fark *statistically significant*",
            "En sık çıkan fark 0 ve 17 denemede görülmüş, yani yüzde 34; fark *not statistically significant*"
          ],
          "a": 2,
          "why": "Gözlenen fark 6. *Dotplot*'ta 6 ya da daha büyük olan noktaları sayarsın: 2 nokta, 2 bölü 50 yüzde 4 eder ve yüzde 5'ten azdır; fark *statistically significant*. −6'daki noktayı sayma: o denemede mesajsız grup öndeydi, yani bizim baktığımız yönde bir fark değil.",
          "fig": {
            "type": "dot",
            "values": [
              -6,
              -4,
              -4,
              -4,
              -4,
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
              4,
              4,
              4,
              4,
              6,
              6
            ],
            "label": "Simulated difference in number of on-time students (Message − No message), 50 trials"
          }
        },
        {
          "q": "Dört ayrı deneyde, *treatment*'ın etkisiz olduğu varsayılarak *simulation* yapılıyor. Tabloda her deney için deneme sayısı ve gözlenen farka eşit ya da ondan büyük fark çıkan deneme sayısı var. Yüzde 5 sınırına göre hangi deneyin sonucu *statistically significant*?",
          "opts": [
            "Deney A",
            "Deney B",
            "Deney C",
            "Deney D"
          ],
          "a": 1,
          "why": "Sayıya değil orana bakarsın. A: 7 bölü 100, yüzde 7. B: 8 bölü 200, yüzde 4. C: 40 bölü 500, yüzde 8. D: 60 bölü 1000, yüzde 6. Yalnızca B yüzde 5'in altında. En küçük sayı A'da diye A'yı seçmek yaygın hatadır.",
          "fig": {
            "type": "table",
            "head": [
              "Experiment",
              "Trials",
              "Trials with a difference ≥ observed"
            ],
            "rows": [
              [
                "A",
                100,
                7
              ],
              [
                "B",
                200,
                8
              ],
              [
                "C",
                500,
                40
              ],
              [
                "D",
                1000,
                60
              ]
            ],
            "caption": "Simulations assuming the treatment has no effect"
          }
        },
        {
          "q": "30 gönüllü rastgele iki gruba ayrılıyor; bir grup müzik dinleyerek, diğeri sessizlikte kelime ezberliyor. Müzik grubu ortalamada 1,5 kelime daha fazla hatırlıyor. *Randomization distribution*'da bu kadar ya da daha büyük bir fark, denemelerin yüzde 23'ünde çıkıyor. Hangi yorum doğrudur?",
          "opts": [
            "Müziğin hatırlamaya hiçbir etkisinin olmadığı bu deneyle kanıtlanmıştır.",
            "Gözlenen fark yüzde 23 olasılıkla müzikten, yüzde 77 olasılıkla şanstan kaynaklanır.",
            "Gönüllüler rastgele seçilmediği için bu fark hiçbir koşulda anlamlı sayılamaz.",
            "Müziğin hatırlamayı artırdığına dair *convincing evidence* yoktur; fark şansla açıklanabilir."
          ],
          "a": 3,
          "why": "Yüzde 23, yüzde 5'ten çok büyük: böyle bir fark yalnızca *random assignment*'taki şansla sık sık çıkar, yani *not statistically significant*. Bu, etkinin olmadığını kanıtlamaz; yalnızca ikna edici kanıt olmadığını söyler. Yüzde 23 de farkın müzikten gelme olasılığı değil, etki yokken böyle bir farkın çıkma sıklığıdır."
        },
        {
          "q": "Ada, okulundaki bütün 11. sınıf öğrencilerinin listesinden rastgele 50 kişi seçip anket yapıyor. Düzenli kahvaltı edenlerin quiz ortalaması, etmeyenlerinkinden belirgin biçimde yüksek çıkıyor. Ada raporuna \"Kahvaltı etmek quiz puanını artırır\" yazıyor. Bu çalışma için hangisi doğrudur?",
          "opts": [
            "Kahvaltı rastgele atanmadı; neden-sonuç denemez, ama ilişki okulun tüm 11. sınıflarına genellenir.",
            "Öğrenciler rastgele seçildi; bu yüzden hem genelleme hem neden-sonuç sonucu geçerlidir.",
            "Kahvaltı rastgele atanmadı; bu yüzden sonuç okuldaki hiçbir gruba genellenemez.",
            "Öğrenciler rastgele seçildi; ama 50 kişi az olduğu için sonuç yalnızca bu 50 kişi için geçerlidir."
          ],
          "a": 0,
          "why": "*Random selection* var: ilişki, örneklemin seçildiği popülasyona, yani okulun tüm 11. sınıflarına genellenir. *Random assignment* yok: kimin kahvaltı edeceğini Ada belirlemedi; uyku düzeni gibi bir *confounding variable* olabilir, bu yüzden *cause and effect* denemez. Yaygın hata, rastgele seçimi rastgele atama sanmaktır."
        },
        {
          "q": "Bir belediye, kısa bir güvenlik videosunun sürücülerin hız yapmasını azaltıp azaltmadığını araştırıyor. Dört çalışmanın hepsinde fark *statistically significant* çıkıyor. Hangisinde hem şehirdeki tüm ehliyetli sürücülere genelleme yapmak hem de *cause and effect* demek uygundur?",
          "opts": [
            "Gönüllü olan 200 sürücü rastgele iki gruba ayrılır; yalnızca bir grup videoyu izler.",
            "Ehliyet kayıtlarından rastgele seçilen 200 sürücüye videoyu izleyip izlemedikleri sorulur.",
            "Ehliyet kayıtlarından rastgele seçilen 200 sürücü rastgele iki gruba ayrılır; bir grup videoyu izler.",
            "Bir sürücü kursundaki 200 kişiden isteyenler videoyu izler, istemeyenler izlemez."
          ],
          "a": 2,
          "why": "İki sonuç için iki rastgelelik gerekir: *random selection* popülasyona genellemeyi, *random assignment* neden-sonucu sağlar; ikisi de yalnızca üçüncü çalışmada var. İlki yalnızca benzer gönüllüler için neden-sonuç verir, ikincisi genellenir ama neden-sonuç vermez, sonuncusunda ikisi de yoktur."
        }
      ]
    }
  ],
  "final": []
};
