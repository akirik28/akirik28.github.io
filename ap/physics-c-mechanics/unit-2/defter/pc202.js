/* Kitpath not defteri · pc202 · 2.2–2.3 Kuvvetler, Serbest Cisim Diyagramı ve Etki–Tepki
   Kaynak: kaynak/ced-physc.md (Unit 2, Topic 2.2 ve 2.3; LO 2.2.A–B, 2.3.A). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc202",
  amac: "Bu konu kuvvetin ne olduğunu, bir cisme etkiyen kuvvetleri serbest cisim diyagramıyla (FBD) nasıl göstereceğini ve Newton'un üçüncü yasasındaki eşleşmiş kuvvetleri anlatıyor. İdeal ip ve makarada gerilmeyi de öğreneceksin.",
  bolumler: [
    {
      baslik: "Kuvvet bir etkileşimdir",
      kisa: "Her kuvvet, başka bir nesnenin bu nesneye uyguladığı itme ya da çekmedir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "👉",
              terim: "Force",
              tr: "kuvvet",
              tanim: "İki nesne ya da sistem arasındaki etkileşim; vektördür. Bir sistem kendine net kuvvet uygulayamaz.",
              ornek: "Kendi saçından tutup kendini havaya kaldıramazsın."
            },
            {
              ikon: "🤝",
              terim: "Contact force",
              tr: "temas kuvveti",
              tanim: "Dokunarak etkiyen kuvvet; atomlar arasındaki elektrik kuvvetlerinin büyük ölçekteki toplamıdır.",
              ornek: "Masanın kitabı yukarı itmesi, ipin çekmesi."
            },
            {
              ikon: "⬆️",
              terim: "Normal force",
              tr: "normal kuvvet",
              tanim: "Yüzeyin cisme uyguladığı, yüzeye dik ve yüzeyden dışarı yönelik temas kuvveti.",
              ornek: "Rampada normal kuvvet rampaya diktir, düşey değildir."
            },
            {
              ikon: "🌍",
              terim: "Noncontact force",
              tr: "temassız kuvvet",
              tanim: "Nesneler değmeden etkiyen kuvvet. Bu ünitede en önemlisi kütleçekimidir.",
              ornek: "Dünya havadaki topu çeker, değmeden."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "✅",
            baslik: "Gerçek *force*",
            maddeler: ["Bir nesne uyguluyor", "Kim → kime diye söylenir", "FBD'de ok olur"]
          },
          sag: {
            ikon: "🚫",
            baslik: "Kuvvet değil",
            maddeler: ["Uygulayan nesne yok", "Başka kuvvetlerin sonucu", "FBD'ye girmez"]
          },
          oyun: [
            { metin: "Masanın kitaba yukarı doğru itmesi.", cevap: "sol", neden: "Masa bir nesne ve kitaba temas ederek itiyor: normal kuvvet." },
            { metin: "Cismi harekete geçiren 'hareket kuvveti'.", cevap: "sag", neden: "Hiçbir nesne uygulamıyor; hareket kuvvet gerektirmez, hız değişimi gerektirir." },
            { metin: "Dünya'nın havadaki topa çekimi.", cevap: "sol", neden: "Dünya topa temas etmeden kuvvet uyguluyor: ağırlık." },
            { metin: "Elden çıkmış topta 'fırlatma kuvveti'.", cevap: "sag", neden: "El artık temas etmiyor; havada yalnız ağırlık etkir (hava direnci yok sayılır)." },
            { metin: "FBD'de ayrı bir ok olarak m·a.", cevap: "sag", neden: "m·a, net kuvvetin sonucudur; kendisi bir etkileşim değil." }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** her kuvvete kim-kime adını ver: *the normal force exerted by the table on the block*, *the gravitational force exerted by the Earth on the block*. Kaynağı söylenemeyen bir kuvvet yoktur."
        }
      ]
    },
    {
      baslik: "Serbest cisim diyagramı (FBD)",
      kisa: "Nokta çiz; çevrenin uyguladığı her kuvveti ayrı bir okla göster.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Kaba zeminde ipin çektiği blok: FBD adım adım",
          xlabel: "x",
          ylabel: "y",
          xmax: 10,
          ymax: 8,
          xticks: [],
          yticks: [],
          ogeler: [
            { id: "blk", tip: "nokta", x: 5, y: 4, renk: 0 },
            { id: "w", tip: "ok", from: [5, 4], to: [5, 1.2], renk: 2, gizli: true },
            { id: "wt", tip: "yazi", x: 5.3, y: 1.6, metin: "mg (Dünya)", hiza: "start", gizli: true },
            { id: "n", tip: "ok", from: [5, 4], to: [5, 6.8], renk: 1, gizli: true },
            { id: "nt", tip: "yazi", x: 5.3, y: 6.4, metin: "N (zemin)", hiza: "start", gizli: true },
            { id: "t", tip: "ok", from: [5, 4], to: [8.2, 4], renk: 3, gizli: true },
            { id: "tt", tip: "yazi", x: 7, y: 4.5, metin: "T (ip)", gizli: true },
            { id: "f", tip: "ok", from: [5, 4], to: [3.2, 4], renk: 2, gizli: true },
            { id: "ft", tip: "yazi", x: 3.9, y: 4.5, metin: "f (zemin)", gizli: true },
            { id: "yok", tip: "yazi", x: 5, y: 7.5, metin: "ma, net kuvvet, bileşenler: ÇİZME", gizli: true }
          ],
          durumlar: [
            { metin: "Blok bir nokta olur: FBD'de cismi kütle merkezindeki noktayla temsil edersin." },
            { metin: "Dünya bloğu aşağı çeker: ağırlık, mg (temassız kuvvet).", goster: ["w", "wt"] },
            { metin: "Zemin bloğa temas eder ve yukarı iter: yüzeye dik normal kuvvet N.", goster: ["n", "nt"] },
            { metin: "İp sağa çeker (T), zemin sürtünmeyle sola engeller (f). Her kuvvet noktadan çıkan ayrı, düz bir ok.", goster: ["t", "tt", "f", "ft"] },
            { metin: "Çizmediklerin: m·a oku, net kuvvet ve bileşenler. Bunlar etkileşim değil, sonuç ya da hesap aracıdır.", goster: ["yok"] }
          ]
        },
        {
          tip: "tuzak",
          baslik: "FBD'ye sonuçları eklemek",
          metin: "FBD'de kuvvetlerin kendisi çizilir; bileşen, net kuvvet ya da m·a eklemek puan kaybettirir. Aynı yöndeki kuvvetler üst üste değil yan yana çizilir. FBD istenmese bile çizen öğrenciler sınavda belirgin biçimde daha başarılı oldu.",
          yanlis: "FBD'ye ağırlığın bileşenlerini, net kuvveti ve ma okunu da çizerim.",
          dogru: "Yalnız çevrenin uyguladığı gerçek kuvvetler, her biri noktadan çıkan ayrı ok. Hesapta ivmeye paralel bir eksen seç."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *Draw and label the forces exerted on the block.* Etiketi kaynağıyla ver (T, N, mg, f); her ok noktadan başlasın, ok uçları birbirine değmesin."
        }
      ]
    },
    {
      baslik: "Newton'un üçüncü yasası",
      kisa: "Eşleşmiş kuvvetler eşit büyüklükte, zıt yönlü ve farklı cisimlere etkir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Her kuvvetin üçüncü yasa çifti",
          head: ["Kuvvet", "Kim → kime", "Eşleşmiş kuvvet"],
          rows: [
            ["Ağırlık (mg)", "Dünya → kitap", "Kitap → Dünya (kitap Dünya'yı çeker)"],
            ["Normal kuvvet (N)", "Masa → kitap", "Kitap → masa (kitap masayı iter)"],
            ["Gerilme (T)", "İp → blok", "Blok → ip"],
            ["Sürtünme (f)", "Zemin → blok", "Blok → zemin"]
          ],
          vurgu: 1,
          not: "Çift: aynı tür, eşit büyüklük, zıt yön, farklı cisimlere etkir, aynı anda var olur. İç kuvvetler çiftler hâlinde sistem içinde kalır ve kütle merkezinin hareketini değiştirmez."
        },
        {
          tip: "ornek",
          baslik: "Buzda iki arkadaş: Ece 60 kg, Deniz 40 kg",
          durum: "Sürtünmesiz buzda Ece, Deniz'i 120 N'luk kuvvetle itiyor. İkisinin ivmesini karşılaştır.",
          adimlar: [
            "Üçüncü yasa: Deniz de Ece'yi 120 N ile ters yönde iter. Kuvvetler eşit; Ece'nin daha büyük olması bir şeyi değiştirmez.",
            "Her biri için ikinci yasa: a = F/m.",
            "Deniz: a = 120/40 = 3 m/s² (itiş yönünde).",
            "Ece: a = 120/60 = 2 m/s² (ters yönde).",
            "Kuvvet eşit, ivme farklı: küçük kütle daha çok hızlanır."
          ],
          sonuc: "Kuvvetler eşit (120 N); Deniz'in ivmesi 3 m/s², Ece'ninki 2 m/s²"
        },
        {
          tip: "tuzak",
          baslik: "Normal kuvvet ile ağırlık çift değildir",
          metin: "Kitap masada dururken N ve mg eşit görünür ama ikisi de kitaba etkir. Eşit olmalarının nedeni kitabın dengede olmasıdır, üçüncü yasa değil.",
          yanlis: "N ve mg etki–tepki çiftidir, bu yüzden kitap durur.",
          dogru: "mg'nin çifti kitabın Dünya'yı çekmesidir; N'nin çifti kitabın masayı itmesidir."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *By Newton's third law, the force the book exerts on the table is equal in magnitude and opposite in direction to the force the table exerts on the book.* Halat çekmede ip iki takımı eşit kuvvetle çeker; kazanan, zemine daha büyük sürtünme uygulayabilen takımdır."
        }
      ]
    },
    {
      baslik: "Gerilme, ideal ip ve ideal makara",
      kisa: "İdeal ipte gerilme her yerde aynıdır; ideal makara yalnız yönü değiştirir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🪢",
              terim: "Tension",
              tr: "gerilme",
              tanim: "İpin sonsuz küçük parçalarının birbirine uyguladığı kuvvetlerin net sonucu; ip, cismi ip boyunca çeker.",
              ornek: "Asansörü tutan kablonun asansörü yukarı çekmesi."
            },
            {
              ikon: "🧵",
              terim: "Ideal rope",
              tr: "ideal ip",
              tanim: "Kütlesiz ve uzamaz ip. Gerilme her noktada aynıdır; iki uçtaki cisimler aynı büyüklükte ivmelenir.",
              ornek: "Sınav aksini söylemedikçe ipler ideal alınır."
            },
            {
              ikon: "⚙️",
              terim: "Ideal pulley",
              tr: "ideal makara",
              tanim: "Kütlesiz ve sürtünmesiz makara. İpin yönünü değiştirir, gerilmeyi değiştirmez.",
              ornek: "Makaranın iki yanındaki ip parçalarında T aynıdır."
            },
            {
              ikon: "⛓️",
              terim: "Massive rope",
              tr: "kütleli ip",
              tanim: "Kütlesi olan ipte gerilme noktadan noktaya değişebilir.",
              ornek: "Asılı ağır zincirde tavana yakın halka, altındakilerin ağırlığını da taşır."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🧵",
            baslik: "*Ideal* ip ve makara",
            maddeler: ["Gerilme her yerde aynı", "Makara T'yi değiştirmez", "İp uzamaz: ivmeler eşit büyüklükte"]
          },
          sag: {
            ikon: "⛓️",
            baslik: "*Massive* (kütleli) ip",
            maddeler: ["Gerilme konuma göre değişir", "Üst kesit daha çok yük taşır", "Her yerde aynı T varsayma"]
          },
          oyun: [
            { metin: "Makaranın iki yanındaki ip parçalarında gerilme eşittir.", cevap: "sol", neden: "İdeal makara kütlesiz ve sürtünmesiz: yalnız yönü değiştirir." },
            { metin: "Asılı ağır zincirin en üst halkasında gerilme en büyüktür.", cevap: "sag", neden: "En üst halka, altındaki bütün kütleyi taşır." },
            { metin: "İpe bağlı iki bloğun ivmelerinin büyüklüğü aynıdır.", cevap: "sol", neden: "Uzamayan ip iki ucu aynı hızla hareket ettirir." },
            { metin: "Sınav 'kütlesiz ip' demedi ve ipin ağırlığı önemli.", cevap: "sag", neden: "Kütleli ipte T her yerde aynı alınamaz; yine de aksi belirtilmedikçe ip idealdir." }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The string is massless and the pulley is frictionless, so the tension is the same everywhere in the string.* İdeal varsayımı sözlü olarak belirtmek gerekçe puanı getirir."
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: [
            "*Force* iki nesne arasındaki etkileşimdir; vektördür ve bir sistem kendine net kuvvet uygulayamaz.",
            "Temas kuvvetleri atomlar arası elektrik kuvvetlerinin büyük ölçekteki sonucudur; kuvvetin kaynağı olan nesne her zaman söylenebilmelidir.",
            "*Free-body diagram*: cismi nokta yap, çevrenin uyguladığı her kuvveti noktadan çıkan ayrı düz bir okla çiz; m·a, net kuvvet ve bileşen çizme.",
            "Ayrıca eksenini ivmeye paralel seç (eğik düzlemde yüzeye paralel).",
            "Üçüncü yasa: A'nın B'ye kuvveti ile B'nin A'ya kuvveti eşit büyüklükte, zıt yönlü ve farklı cisimlere etkir.",
            "Normal kuvvet ile ağırlık çift değildir; ikisi de aynı cisme etkir. Çiftler iç kuvvetlerdir ve kütle merkezinin hareketini değiştirmez.",
            "Halat çekmede ip iki takıma eşit kuvvet uygular; sonucu zeminin sürtünme kuvvetleri belirler.",
            "İdeal ip kütlesiz ve uzamaz, gerilme her yerde aynıdır; ideal makara kütlesiz ve sürtünmesizdir, yalnız yönü değiştirir; kütleli ipte gerilme değişebilir."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A block slides to the right along a rough horizontal table after being given a push. The push has ended, and air resistance is negligible. Which set of forces should appear on the block's free-body diagram while it slides?",
      opts: [
        "Weight and normal force only",
        "Weight, normal force, and kinetic friction directed to the left",
        "Weight, normal force, kinetic friction to the left, and a force to the right in the direction of motion",
        "Weight, normal force, kinetic friction to the left, and the net force"
      ],
      a: 1,
      why: "Blokla temas eden yalnız masa (normal + sürtünme), temassız etkileşim ise Dünya (ağırlık). İtiş bitti, 'hareket yönündeki kuvvet' diye bir etkileşim yok. Net kuvvet FBD'ye çizilmez; hesapta bulunur."
    },
    {
      q: "A book rests on a horizontal table. The table exerts an upward normal force N on the book. The Newton's-third-law partner of N is",
      opts: [
        "the gravitational force exerted by the Earth on the book",
        "the gravitational force exerted by the book on the Earth",
        "the force exerted by the Earth on the table",
        "the force exerted by the book on the table"
      ],
      a: 3,
      why: "N'nin çifti aynı türden, zıt yönlü ve kitap → masa kuvvetidir. Ağırlık (1. şık) kitaba etkiyen ayrı bir kuvvettir; N ile eşit olması kitabın dengede olmasından gelir, üçüncü yasadan değil."
    },
    {
      q: "A 2000 kg truck collides head-on with a 1000 kg car. During the collision, which statement correctly compares the forces and the accelerations?",
      opts: [
        "The truck exerts a larger force on the car; the accelerations have equal magnitude",
        "The car exerts a larger force on the truck, because the car is lighter",
        "The forces have equal magnitude; the car has the larger acceleration magnitude",
        "The forces have equal magnitude; the truck has the larger acceleration magnitude"
      ],
      a: 2,
      why: "Üçüncü yasa: iki kuvvet eşit büyüklükte. a = F/m olduğu için küçük kütleli araba daha büyük ivme alır (kamyonun iki katı). Daha ağır cismin daha çok kuvvet uyguladığı yanılgısı 1. şıkka götürür."
    },
    {
      q: "A 2 kg block A rests on a frictionless horizontal table. It is connected by a light string that passes over a light, frictionless pulley at the table's edge to a hanging 3 kg block B. After release, the tension in the string is closest to (use g = 10 m/s²)",
      opts: ["12 N", "20 N", "24 N", "30 N"],
      a: 0,
      why: "Birlikte: a = m_B·g/(m_A + m_B) = 30/5 = 6 m/s². A için T = m_A·a = 2×6 = 12 N. 30 N (B'nin ağırlığı) yanlış: B ivmelendiği için ip onu ağırlığından az çeker. İdeal ip ve makara olduğu için T her yerde aynı."
    },
    {
      q: "Two teams play tug-of-war with an ideal rope on level ground. The table gives the largest friction force the ground can exert on each team. Which statement is correct?",
      fig: {
        type: "table",
        head: ["Team", "Maximum friction force from ground (N)"],
        rows: [["A", 900], ["B", 850]],
        caption: "Maximum friction force exerted by the ground on each team"
      },
      opts: [
        "Team B wins, because it pulls with a larger force on the rope",
        "Team A wins, because the ground can exert a larger friction force on Team A",
        "Neither team can win, because the rope exerts equal and opposite forces on the teams",
        "Team A wins, because the tension in the rope is larger on Team A's side"
      ],
      a: 1,
      why: "İdeal ipte gerilme her yerde aynıdır ve üçüncü yasa gereği iki takıma eşit kuvvet uygular; bu yüzden ipi çekme kuvveti belirleyici değil. Takımların yataydaki tek dış kuvveti zeminin sürtünmesi: B, T 850 N'u aşınca önce kayar, A daha büyük (900 N) sürtünme verebildiği için kazanır."
    }
  ]
};
