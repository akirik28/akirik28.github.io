/* Kitpath not defteri · pc205 · 2.7 Sürtünme (kinetik ve statik)
   Kaynak: kaynak/ced-physc.md (Unit 2, Topic 2.7; LO 2.7.A–B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc205",
  amac: "Bu konu sürtünmeyi anlatıyor: kayarken etkiyen kinetik sürtünme ile kaymayı engelleyen statik sürtünmenin farkı, büyüklükleri ve yönleri. Eğik düzlemde sürtünmeli problemleri de çözeceksin.",
  bolumler: [
    {
      baslik: "İki tür sürtünme",
      kisa: "Kinetik sürtünme sabit μ_k N; statik sürtünme gerektiği kadardır, sınırı μ_s N.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔢",
              terim: "Coefficient of friction",
              tr: "sürtünme katsayısı",
              tanim: "İki yüzey çiftinin cinsine bağlı, birimsiz sayı (μ). Yüzeyler ne kadar 'tutuyorsa' o kadar büyüktür.",
              ornek: "Buz–çelik için μ küçük, lastik–kuru asfalt için büyüktür."
            },
            {
              ikon: "↔️",
              terim: "Relative motion",
              tr: "göreli hareket",
              tanim: "Bir yüzeyin diğerine göre hareketi. Sürtünmenin türünü ve yönünü bu belirler, yerdeki hareket değil.",
              ornek: "Kasadaki sandık kamyona göre durur; kamyon hızlansa da statik sürtünme var."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🛷",
            baslik: "*Kinetic friction*",
            maddeler: [
              "Yüzeyler birbirine göre kayıyor",
              "Büyüklük: f_k = μ_k N",
              "Yön: göreli harekete ters",
              "Temas alanına bağlı değil"
            ]
          },
          sag: {
            ikon: "🧱",
            baslik: "*Static friction*",
            maddeler: [
              "Yüzeyler birbirine göre kaymıyor",
              "Gerektiği kadar: f_s ≤ μ_s N",
              "Yön: kayma eğilimine ters",
              "Genelde μ_s > μ_k"
            ]
          },
          oyun: [
            { metin: "Buzda kayan disk.", cevap: "sol", neden: "Yüzeyler birbirine göre kayıyor: kinetik." },
            { metin: "Dolabı itiyorsun ama kıpırdamıyor.", cevap: "sag", neden: "Kayma yok; sürtünme itmeyi dengeleyecek kadar: statik." },
            { metin: "Yürürken seni ileri iten kuvvet.", cevap: "sag", neden: "Ayağın zemine göre kaymaz; zeminin ayağa kuvveti statik sürtünmedir." },
            { metin: "Fren yaparken kilitlenen tekerlek.", cevap: "sol", neden: "Tekerlek yolda kayıyor: kinetik." },
            { metin: "Rampada duran kutu.", cevap: "sag", neden: "Kutu kaymıyor, yani statik sürtünme ağırlığın eğim bileşenini dengeliyor." }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "f_k" },
            "=",
            { t: "μ_k", alt: "malzemeye bağlı" },
            "×",
            { t: "N", alt: "normal kuvvet" }
          ],
          aciklama: "Statik: f_s ≤ μ_s N; kayma eşiğinde f_s,max = μ_s N. N yüzeye diktir, her zaman mg değildir. Sheet'te genel hâli: |F_f| ≤ |μ F_N|."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *Kinetic friction opposes the motion of the block relative to the surface, and its magnitude is μ_k N.* Sürtünmenin yönünü 'göreli harekete' diye söyle."
        }
      ]
    },
    {
      baslik: "Statik sürtünme gerektiği kadardır",
      kisa: "Statik sürtünme itmeyle büyür, μ_s N'de biter, sonra kinetiğe düşer.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "2 kg'lık blok: sürtünme kuvveti ve itme (N = 19,6 N, μ_s = 0,5, μ_k = 0,25)",
          xlabel: "itme F (N)",
          ylabel: "sürtünme f (N)",
          xmax: 13,
          ymax: 11,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" },
            { v: 12, label: "12" }
          ],
          yticks: [
            { v: 4.9, label: "4,9" },
            { v: 9.8, label: "9,8" }
          ],
          ogeler: [
            { id: "st", tip: "cizgi", from: [0, 0], to: [9.8, 9.8], renk: 0 },
            { id: "stt", tip: "yazi", x: 4.6, y: 6.6, metin: "statik: f_s = F", hiza: "end" },
            { id: "pk", tip: "nokta", x: 9.8, y: 9.8, renk: 3, etiket: "μ_s N", kilavuz: true, gizli: true },
            { id: "dr", tip: "cizgi", from: [9.8, 9.8], to: [9.8, 4.9], renk: 2, kesik: true, gizli: true },
            { id: "kin", tip: "cizgi", from: [9.8, 4.9], to: [12.5, 4.9], renk: 1, gizli: true },
            { id: "kint", tip: "yazi", x: 11.2, y: 5.6, metin: "f_k", gizli: true }
          ],
          durumlar: [
            { metin: "F < 9,8 N iken blok kıpırdamaz: statik sürtünme tam itme kadardır (f_s = F), grafik 45° bir doğru." },
            { metin: "Bu artış sonsuz değil: üst sınır f_s,max = μ_s N = 0,5×19,6 = 9,8 N.", goster: ["pk"] },
            { metin: "F bunu aşınca blok kayar; sürtünme kinetiğe düşer: f_k = μ_k N = 0,25×19,6 = 4,9 N.", goster: ["dr", "kin", "kint"] },
            { metin: "Kayarken f_k itme büyüse de sabit kalır. F = 12 N için a = (12 − 4,9)/2 = 3,55 m/s²." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Statik sürtünmeyi hep μ_s N sanmak",
          metin: "2025 sınavında bu konudaki en yaygın hata buydu. Statik sürtünme yalnız kayma eşiğinde μ_s N olur; öncesinde itmeyi dengeleyecek kadardır. Kinetik sürtünme için de aynı malzeme ve aynı normal kuvvette değer aynıdır; hızdan, alandan ya da dönmeden bağımsızdır.",
          yanlis: "Blok durgun, o hâlde f_s = μ_s N.",
          dogru: "f_s itmeye eşit (30 N itmeye karşı 30 N); yalnızca f_s ≤ μ_s N koşulu sağlanmalıdır."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The block does not move, so the static friction force equals the applied force in magnitude and opposes it; this is allowed because f_s ≤ μ_s N.*"
        }
      ]
    },
    {
      baslik: "Eğik düzlemde sürtünme",
      kisa: "Normal kuvvet mg cos θ; kayma eşiğinde μ_s = tan θ.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "5 kg'lık kasa, μ_s = 0,8, μ_k = 0,5 (g = 9,8 m/s²)",
          durum: "Eğim 37°'den 53°'ye çıkarılıyor. Her açıda ne olur? (sin 37° = cos 53° = 0,6, cos 37° = sin 53° = 0,8)",
          adimlar: [
            "Eğik düzlemde dik eksen: N = mg cos θ. Normal kuvvet mg değildir.",
            "θ = 37°: N = 5×9,8×0,8 = 39,2 N. Kaydırmaya çalışan mg sin 37° = 29,4 N. Üst sınır μ_s N = 0,8×39,2 = 31,36 N.",
            "29,4 N ≤ 31,36 N: kasa kaymaz. Statik sürtünme gereken kadardır: f_s = 29,4 N (yukarı), 31,36 N değil.",
            "θ = 53°: N = 5×9,8×0,6 = 29,4 N. Kaydıran mg sin 53° = 39,2 N. Üst sınır 0,8×29,4 = 23,52 N < 39,2 N: kasa kayar.",
            "Kinetik sürtünme f_k = 0,5×29,4 = 14,7 N (yukarı). ΣF = 39,2 − 14,7 = 24,5 N, a = 24,5/5 = 4,9 m/s² aşağı."
          ],
          sonuc: "37°'de durur (f_s = 29,4 N, sınır 31,36 N); 53°'de kayar, a = 4,9 m/s²"
        },
        {
          tip: "formul",
          parcalar: [
            { t: "μ_s" },
            "=",
            { t: "tan θ", alt: "kaymanın başladığı açı" }
          ],
          aciklama: "Eşikte mg sin θ = μ_s mg cos θ ve kütle sadeleşir. Sabit hızla kayan cisim için ivme 0'dır; aynı yolla μ_k = tan θ. Bu, μ ölçme deneyinin temelidir."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *On the incline N = mg cos θ, so the maximum static friction force is μ_s mg cos θ.* Normal kuvveti her zaman yeniden hesapla."
        }
      ]
    },
    {
      baslik: "Sürtünmenin yönü",
      kisa: "Sürtünme harekete değil, yüzeyler arası göreli harekete ya da eğilime zıttır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Yönü nasıl bulursun?",
          head: ["Durum", "Tür", "Zeminin cisme uyguladığı sürtünmenin yönü"],
          rows: [
            ["Yürüyen kişi", "Statik", "İleri (ayak geriye iter, zemin ileri)"],
            ["Zeminde kayan kutu", "Kinetik", "Kutunun zemine göre hareketine ters"],
            ["Kamyon hızlanıyor, kasadaki sandık kaymıyor", "Statik", "İleri (kamyonla aynı yön)"],
            ["Kaymadan yuvarlanıp rampayı çıkan tekerlek", "Statik", "Rampa yukarı"]
          ],
          vurgu: 0,
          not: "Önce 'yüzeyler birbirine göre nereye kaymaya çalışıyor?' diye sor; sürtünme tersidir."
        },
        {
          tip: "tuzak",
          baslik: "Her zaman harekete zıt ve N = mg",
          metin: "Sürtünme harekete değil göreli harekete zıttır; yürürken ve hızlanan araçta ileri iten kuvvet de sürtünmedir. Normal kuvvet de her zaman mg değildir.",
          yanlis: "Sürtünme hep harekete zıttır ve N = mg'dir.",
          dogru: "Yön göreli harekete (eğilime) zıt. N yüzeye diktir: yukarı eğik F ile çekilen kutuda N = mg − F sin θ."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The static friction on the shoe points forward because it opposes the tendency of the shoe to slide backward relative to the ground.*"
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
            "*Kinetic friction*: yüzeyler kayarken, göreli harekete ters, f_k = μ_k N; temas alanına bağlı değildir.",
            "*Static friction*: kayma yokken, gereken değeri alır, f_s ≤ μ_s N; yönü kayma eğilimine zıt.",
            "Genelde μ_s > μ_k; itme arttıkça f_s = F (45° doğru), μ_s N'de kayma başlar ve sürtünme f_k'ye düşer.",
            "En yaygın hata: durgun cisimde f_s = μ_s N yazmak. 30 N itişe karşı 30 N kuvveti yeter.",
            "Aynı malzeme ve aynı N için f_k aynıdır; tork ya da eylemsizlik momentine bağlanmaz.",
            "N yüzeye diktir: eğik düzlemde N = mg cos θ; yukarı eğik çekilen kutuda N = mg − F sin θ.",
            "Eğim eşiğinde μ_s = tan θ; sabit hızla kayan cisimde μ_k = tan θ.",
            "Sürtünmenin yönü göreli harekete ya da eğilime zıttır: yürürken ileri iten kuvvet statik sürtünmedir."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A 2 kg block (g = 10 m/s²) rests on a horizontal surface. A horizontal force F is applied and gradually increased. The graph shows the friction force f on the block as a function of F. What are the coefficients of static and kinetic friction?",
      fig: {
        type: "graph",
        xlabel: "F (N)",
        ylabel: "f (N)",
        xmax: 15,
        ymax: 12,
        lines: [
          { from: [0, 0], to: [10, 10], color: 0 },
          { from: [10, 6], to: [14, 6], color: 1 }
        ],
        xticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }],
        yticks: [{ v: 6, label: "6" }, { v: 10, label: "10" }],
        caption: "Friction force versus applied force"
      },
      opts: [
        "μ_s = 0.5 and μ_k = 0.3",
        "μ_s = 0.5 and μ_k = 0.6",
        "μ_s = 0.3 and μ_k = 0.5",
        "μ_s = 1.0 and μ_k = 0.6"
      ],
      a: 0,
      why: "N = mg = 20 N. Kayma eşiğinde f_s,max = 10 N, yani μ_s = 10/20 = 0,5. Kayarken f_k = 6 N, yani μ_k = 6/20 = 0,3. Şıkların hepsi N'yi doğru kullanırsa ayrılır: 0,6 ve 1,0 değerleri ya f_k'yi ya N'yi yanlış almaktan çıkar."
    },
    {
      q: "A 10 kg crate rests on a rough horizontal floor with μ_s = 0.5 and μ_k = 0.4. Use g = 10 m/s². A person pushes the crate horizontally with a 30 N force, and the crate does not move. The friction force exerted by the floor on the crate has magnitude",
      opts: ["0", "40 N", "30 N", "50 N"],
      a: 2,
      why: "Kasa durgun, yani ΣF = 0: statik sürtünme itmeye eşit, 30 N. En fazla μ_s N = 50 N olabilirdi (4. şık), 40 N ise μ_k N'dir; ikisi de durgun cisimde sürtünmenin değeri değildir."
    },
    {
      q: "A block slides down a rough incline at constant speed. The incline makes an angle of 37° with the horizontal (sin 37° = 0.6, cos 37° = 0.8). The coefficient of kinetic friction between the block and the incline is",
      opts: ["0.60", "0.75", "0.80", "1.33"],
      a: 1,
      why: "Sabit hız: ivme 0. mg sin θ = μ_k mg cos θ ⇒ μ_k = tan 37° = 0,6/0,8 = 0,75. 0,6 yalnız sin değeri; 1,33 ise tan'ın tersi (cos/sin ters alınmış)."
    },
    {
      q: "A person walks forward along level ground without slipping. In the instant a shoe is pushing back against the ground, the friction force exerted by the ground on that shoe is",
      opts: [
        "kinetic friction, directed backward",
        "static friction, directed backward",
        "zero, because the shoe is momentarily at rest relative to the ground",
        "static friction, directed forward"
      ],
      a: 3,
      why: "Ayakkabı zemine göre kaymıyor: statik sürtünme. Ayak geriye kayma eğiliminde olduğundan zemin ileri doğru kuvvet uygular ve kişiyi ileri iter. Anlık durgunluk sürtünmenin sıfır olduğu anlamına gelmez."
    },
    {
      q: "A student pulls the same block across a table at constant velocity and measures the friction force. The data are in the table. Which conclusion is best supported by the data?",
      fig: {
        type: "table",
        head: ["Trial", "Mass of block (kg)", "Face on table", "Measured f_k (N)"],
        rows: [[1, 1.0, "large", 2.0], [2, 1.0, "small", 2.0], [3, 2.0, "large", 4.0]],
        caption: "Kinetic friction data"
      },
      opts: [
        "f_k increases with the contact area",
        "f_k is independent of contact area and proportional to the normal force",
        "f_k depends on the speed of the block",
        "f_k is inversely proportional to the mass of the block"
      ],
      a: 1,
      why: "1. ve 2. denemede kütle aynı, alan farklı, f_k aynı: alandan bağımsız. 3. denemede kütle (dolayısıyla N) iki katına çıkınca f_k iki katı oluyor: N ile orantılı. Hız tabloda değişmediği için hızla ilgili bir sonuç çıkmaz."
    }
  ]
};
