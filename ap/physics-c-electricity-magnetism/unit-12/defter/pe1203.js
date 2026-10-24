/* Kitpath not defteri · pe1203 · 12.4 Ampère Yasası
   Kaynak: kaynak/ced-physc.md Unit 12 (12.4.A), 2025 Chief Reader hataları. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe1203",
  amac: "Bu konu Ampère yasasını anlatıyor: simetrik akım düzenlerinde manyetik alanı, akımı çevreleyen hayali bir ilmekle bulursun. Uzun tel, kalın tel ve solenoid için alanı çıkaracak, Maxwell'in eklediği terimi de tanıyacaksın.",
  bolumler: [
    {
      baslik: "Ampère yasası ve ilmek seçimi",
      kisa: "Alanın ilmek boyunca toplamı, ilmeğin çevrelediği akımla orantılıdır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "∮ B · dℓ", alt: "kapalı ilmek boyunca" },
            "=",
            { t: "μ₀ I_enc", alt: "ilmeğin çevrelediği akım" }
          ],
          aciklama: "Gauss yasası çevrelenen yükten E'yi buldurur, Ampère yasası çevrelenen akımdan B'yi buldurur. İkisi de yalnız simetri varsa kolaylık sağlar. Sınavda böyle yaz: *By Ampère's law, B(2πr) = μ₀I_enc.*"
        },
        {
          tip: "adimlar",
          baslik: "Ampère yasasıyla alan bulma: 4 adım",
          adimlar: [
            {
              baslik: "Simetriyi tanı",
              metin: "Uzun düz tel, silindirik iletken, uzun solenoid ya da akım levhası olmalı. Simetri yoksa Ampère'den B çıkmaz."
            },
            {
              baslik: "Amperian loop seç",
              metin: "B'nin ilmek boyunca hep teğet ve sabit büyüklükte olduğu kapalı yol: tel için tele eş merkezli çember."
            },
            {
              baslik: "Sol tarafı yaz",
              metin: "B sabit ve dℓ'ye paralel olduğundan ∮B · dℓ = B × (ilmeğin uzunluğu). Çember için B(2πr)."
            },
            {
              baslik: "I_enc'i say ve çöz",
              metin: "Yalnız ilmeğin içinden geçen akımı say; işareti sağ elle belirle. Eşitle: B = μ₀I_enc / 2πr."
            }
          ]
        }
      ]
    },
    {
      baslik: "Uzun tel: dışarıda 1/r, içeride r",
      kisa: "Telin dışında B ∝ 1/r; düzgün akımlı telin içinde B ∝ r.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Yarıçapı a olan telde B(r)",
          xlabel: "r",
          ylabel: "B / B(a)",
          xmax: 8,
          ymax: 1.2,
          xticks: [
            { v: 2, label: "a" },
            { v: 4, label: "2a" },
            { v: 6, label: "3a" },
            { v: 8, label: "4a" }
          ],
          yticks: [
            { v: 0.5, label: "0,5" },
            { v: 1, label: "1" }
          ],
          ogeler: [
            {
              id: "tel",
              tip: "alan",
              noktalar: [[0, 0], [2, 0], [2, 1.15], [0, 1.15]],
              renk: 3
            },
            { id: "tt", tip: "yazi", x: 1, y: 0.1, metin: "tel" },
            {
              id: "cout",
              tip: "egri",
              noktalar: [
                [2, 1], [2.5, 0.8], [3, 0.667], [3.5, 0.571], [4, 0.5],
                [4.5, 0.444], [5, 0.4], [5.5, 0.364], [6, 0.333], [6.5, 0.308],
                [7, 0.286], [7.5, 0.267], [8, 0.25]
              ],
              renk: 0,
              etiket: "B ∝ 1/r",
              gizli: true
            },
            {
              id: "cin",
              tip: "egri",
              noktalar: [[0, 0], [0.5, 0.25], [1, 0.5], [1.5, 0.75], [2, 1]],
              renk: 2,
              etiket: "B ∝ r",
              gizli: true
            },
            { id: "pk", tip: "nokta", x: 2, y: 1, renk: 3, etiket: "r = a", kilavuz: true, gizli: true },
            {
              id: "cin2",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 0.016], [0.5, 0.063], [0.75, 0.141], [1, 0.25],
                [1.25, 0.391], [1.5, 0.563], [1.75, 0.766], [2, 1]
              ],
              renk: 1,
              etiket: "J ∝ r: B ∝ r²",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Yarıçapı a olan düz telde akım ==düzgün== dağılmış. Grafik, B'yi r = a'daki değerine oranlayarak gösteriyor."
            },
            { metin: "Dışarıda (r > a) ilmek tüm akımı sarar: I_enc = I, B = μ₀I/2πr ve ==B ∝ 1/r==.", goster: ["cout"] },
            { metin: "İçeride (r < a) ilmek yalnız I r²/a² akımını sarar: B = μ₀Ir/2πa² ve ==B ∝ r==.", goster: ["cin"] },
            { metin: "r = a'da iki formül aynı değeri verir; B en büyük burada.", goster: ["pk"] },
            {
              metin: "Akım yoğunluğu kenara doğru artıyorsa (J = Cr), içeride B ∝ r² olur; eğri daha geç yükselir. Dışarısı yine 1/r.",
              goster: ["cin2"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Gauss ile Ampère yan yana",
          head: ["", "Gauss yasası", "Ampère yasası"],
          rows: [
            ["Hayali yol", "Kapalı yüzey (Gaussian surface)", "Kapalı ilmek (Amperian loop)"],
            ["Kaynak", "Çevrelenen yük Q_enc", "Çevrelenen akım I_enc"],
            ["Yasa", "∮E · dA = Q_enc / ε₀", "∮B · dℓ = μ₀I_enc"],
            ["Uzun doğrusal kaynak", "E = λ / 2πε₀r", "B = μ₀I / 2πr"]
          ],
          not: "Sınavda böyle yaz: *Outside the wire the loop encloses the whole current, so B = μ₀I/2πr; inside, only the fraction I r²/a² is enclosed.*"
        }
      ]
    },
    {
      baslik: "Düzgün olmayan akım yoğunluğu",
      kisa: "Önce I_enc = ∫ J dA'yı bul, sonra Ampère yasasıyla B'yi çıkar.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Yarıçapı a, J = Cr olan uzun silindirik tel",
          durum: "Akım yoğunluğu eksenden uzaklıkla artıyor: J = Cr (r ≤ a). Telin içinde ve dışında B'yi bul; a = 1,0 cm ve C = 3,0 × 10⁶ A/m³ için sayıyı hesapla.",
          adimlar: [
            "Akım, ince halkaların toplamıdır: dA = 2πr′ dr′ ve I_enc = ∫ J dA.",
            "İçeride: I_enc = ∫₀ʳ (Cr′)(2πr′) dr′ = 2πC r³ / 3.",
            "Ampère: B(2πr) = μ₀ I_enc ⇒ B = μ₀ C r² / 3 (r ≤ a).",
            "Toplam akım r = a'da: I = 2πC a³ / 3 = 6,3 A.",
            "Dışarıda: B = μ₀I / 2πr = μ₀ C a³ / 3r (r ≥ a).",
            "Kontrol: r = a'da iki ifade de μ₀ C a² / 3'e eşit: B(a) = 1,3 × 10⁻⁴ T."
          ],
          sonuc: "İçeride B = μ₀Cr²/3 (∝ r²), dışarıda B = μ₀Ca³/3r (∝ 1/r); r = a'da süreklidir"
        },
        {
          tip: "tuzak",
          baslik: "Tel içinde de 1/r kullanma; yalnız çevrelenen akımı say",
          metin: "Kalın telin içinde ilmek akımın bir kısmını sarar. Toplam I'yı kullanmak, ilmek içinde kalmayan akımı da saymak demektir.",
          yanlis: "Telin içinde de B = μ₀I / 2πr yazmak. Ya da iki telde I_enc = 2I yazıp B'yi her noktada eşit sanmak.",
          dogru: "Sınavda böyle yaz: *Only the current inside the Amperian loop counts: I_enc = I r²/a² for r < a.* İki telde ∮B · dℓ = 2μ₀I çıksa da B vektörel toplanır."
        }
      ]
    },
    {
      baslik: "Solenoid",
      kisa: "Uzun solenoidin içi düzgün, B = μ₀nI; dışı yaklaşık sıfır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "B", alt: "solenoidin içinde" },
            "=",
            { t: "μ₀ n I", alt: "n = N/ℓ: birim uzunluktaki sarım" }
          ],
          aciklama: "Bir kenarı içeride (uzunluk ℓ), karşı kenarı dışarıda olan dikdörtgen ilmek seç. Dik kenarlarda ve dışarıda katkı yok: ∮B · dℓ = Bℓ = μ₀(nℓ)I. Yön: parmaklar akımla kıvrılır, başparmak içerideki B'dir. Sınavda böyle yaz: *Taking a rectangular Amperian loop with one side inside the solenoid, Bℓ = μ₀(nℓ)I, so B = μ₀nI.*"
        },
        {
          tip: "ikili",
          sol: { ikon: "🌀", baslik: "Solenoidin içinde", maddeler: ["Düzgün, eksene paralel", "B = μ₀nI"] },
          sag: {
            ikon: "🌫️",
            baslik: "Solenoidin dışında",
            maddeler: ["Çok uzun solenoidde ihmal edilir", "Alan çizgileri uzağa yayılır"]
          },
          oyun: [
            {
              metin: "B = μ₀nI formülünü kullanabilirsin.",
              cevap: "sol",
              neden: "Formül yalnız uzun solenoidin içi içindir."
            },
            {
              metin: "Solenoidin yarıçapını artırsan da B değişmez (n, I aynı).",
              cevap: "sol",
              neden: "İçeride B yalnız n ve I'ya bağlıdır, kesit alanına değil."
            },
            {
              metin: "Ampère ilmeği akım sarmıyor, B ≈ 0.",
              cevap: "sag",
              neden: "Dışarıdaki ilmek net akımı çevrelemez; alan ihmal edilir."
            },
            {
              metin: "Pusula iğnesi solenoidin uzak yanında neredeyse hiç sapmıyor.",
              cevap: "sag",
              neden: "Dışarıdaki alan çok zayıftır."
            }
          ]
        }
      ]
    },
    {
      baslik: "Maxwell'in eki: değişen E de B üretir",
      kisa: "Akım gibi, değişen elektrik akısı da manyetik alan üretir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Maxwell'in dört denklemi (integral biçimde)",
          head: ["Denklem", "Yazılışı", "Ne söyler?"],
          rows: [
            ["1. Gauss (elektrik)", "∮E · dA = Q_enc / ε₀", "Yükler E alanı üretir"],
            ["2. Gauss (manyetik)", "∮B · dA = 0", "Manyetik monopol yok"],
            ["3. Faraday", "∮E · dℓ = −dΦ_B / dt", "Değişen B akısı E alanı üretir"],
            ["4. Ampère–Maxwell", "∮B · dℓ = μ₀I + μ₀ε₀ dΦ_E / dt", "Akım ve değişen E akısı B alanı üretir"]
          ],
          vurgu: 3,
          not: "Dördüncü denklem sınavda nicel kullanılmaz; ama değişen E alanının B ürettiğini bilmelisin. Sınavda böyle yaz: *A changing electric flux produces a magnetic field, even where there is no conduction current.*"
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔋",
              terim: "Displacement current term",
              tr: "yer değiştirme akımı terimi",
              tanim: "μ₀ε₀ dΦ_E/dt terimi, iletim akımı olmayan yerde değişen E alanının B üretmesini sağlar. Maxwell bu terimi ekleyerek Ampère yasasını tamamladı.",
              ornek: "Dolmakta olan kondansatörün plakaları arasında iletim akımı yoktur ama E değişir; orada da tele eş merkezli bir B oluşur."
            }
          ]
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
            "*Ampère's law*: ∮B · dℓ = μ₀I_enc; yalnız simetrik düzenlerde B'yi bulmaya yarar.",
            "Dört adım: simetriyi tanı, Amperian loop seç, ∮B · dℓ'yi yaz, yalnız çevrelenen akımı say.",
            "Uzun telde B = μ₀I/2πr; düzgün akımlı kalın telin içinde B ∝ r, dışında B ∝ 1/r, r = a'da en büyük.",
            "Düzgün olmayan akımda I_enc = ∫ J dA; J = Cr için içeride B = μ₀Cr²/3.",
            "Uzun solenoidin içinde B = μ₀nI düzgündür, dışında ihmal edilir.",
            "Birden çok telin alanı yönleriyle vektör olarak toplanır; I_enc = 2I demek B'nin her yerde eşit olduğu anlamına gelmez.",
            "Maxwell'in dördüncü denklemi: ∮B · dℓ = μ₀I + μ₀ε₀ dΦ_E/dt; değişen elektrik akısı da B üretir."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A long straight wire of radius R carries a current uniformly distributed over its cross section. How does the magnitude of the magnetic field at r = R/2 compare with that at r = 2R?",
      opts: [
        "It is twice as large at r = R/2.",
        "The two magnitudes are equal.",
        "It is half as large at r = R/2.",
        "It is four times as large at r = R/2."
      ],
      a: 1,
      why: "İçeride B = μ₀Ir/2πR²; r = R/2'de μ₀I/4πR. Dışarıda B = μ₀I/2πr; r = 2R'de yine μ₀I/4πR. İkisi eşittir."
    },
    {
      q: "A long solenoid has 2000 turns per meter and carries a current of 3.0 A. What is the magnitude of the magnetic field near the center of the solenoid? (μ₀ = 4π × 10⁻⁷ T·m/A)",
      opts: ["3.8 × 10⁻³ T", "1.5 × 10⁻² T", "1.9 × 10⁻³ T", "7.5 × 10⁻³ T"],
      a: 3,
      why: "B = μ₀nI = (4π × 10⁻⁷)(2000)(3,0) ≈ 7,5 × 10⁻³ T. A şıkkı yarısıdır (uç değeri gibi); B şıkkı 2 katıdır."
    },
    {
      q: "A student measures the magnetic field outside a long straight wire at several distances. The data are in the table. The wire's current is most nearly",
      fig: {
        type: "table",
        head: ["r (cm)", "B (μT)"],
        rows: [["1.0", "40"], ["2.0", "20"], ["4.0", "10"], ["8.0", "5.0"]],
        caption: "Field of a long wire"
      },
      opts: ["0.50 A", "1.0 A", "2.0 A", "4.0 A"],
      a: 2,
      why: "B·r sabit (4,0 × 10⁻⁷ T·m), yani B ∝ 1/r. B = μ₀I/2πr ⇒ I = B·r / (2 × 10⁻⁷) = (40 × 10⁻⁶)(0,010) / (2 × 10⁻⁷) = 2,0 A."
    },
    {
      q: "Two long parallel wires each carry a current I in the same direction. A circular Amperian loop encloses both wires. Which statement is correct?",
      opts: [
        "∮B · dℓ = 2μ₀I, but B cannot be found from this alone because B is not constant around the loop.",
        "∮B · dℓ = 0 because the two fields cancel everywhere on the loop.",
        "∮B · dℓ = μ₀I, so B = μ₀I / 2πr at every point of the loop.",
        "B = μ₀I / πr at every point of the loop, because the two fields simply add."
      ],
      a: 0,
      why: "İlmek 2I'yı sarar: ∮B · dℓ = 2μ₀I. Ama iki telin birleşik alanı simetrik değildir, B ilmek boyunca sabit değildir; B(2πr) = 2μ₀I yazamazsın. Önce her alanı ayrı bulup vektör olarak toplamalısın."
    },
    {
      q: "A parallel-plate capacitor is being charged by a steady current in long straight leads. Consider a circular loop between the plates, coaxial with the leads. Which statement is correct?",
      opts: [
        "B = 0 between the plates because no current flows between them.",
        "B is nonzero between the plates because the changing electric flux contributes to ∮B · dℓ.",
        "B is nonzero between the plates because of the charge stored on the plates, even if charging stops.",
        "B is nonzero only if the plates are connected by a wire."
      ],
      a: 1,
      why: "Ampère–Maxwell: ∮B · dℓ = μ₀I + μ₀ε₀ dΦ_E/dt. Plakalar arasında iletim akımı yok ama E akısı değişiyor, bu terim B üretir. Doluşma durursa dΦ_E/dt = 0 olur ve B de kaybolur (C yanlış)."
    }
  ]
};
