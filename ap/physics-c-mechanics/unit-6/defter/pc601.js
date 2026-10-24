/* Kitpath not defteri · pc601 · 6.1–6.2 Dönme Kinetik Enerjisi ve Tork–İş. Kaynak: kaynak/ced-physc.md (Unit 6, Topic 6.1–6.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc601",
  amac: "Bu konu dönen cismin enerjisini anlatıyor: dönme kinetik enerjisi ½Iω² ve torkun açısal yer değiştirme boyunca yaptığı iş. Enerjinin öteleme ile dönme arasında nasıl paylaşıldığını ve iş–enerji teoremini dönmeye uygulamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Dönme kinetik enerjisi",
      kisa: "K_rot = ½Iω²; kütle merkezi dururken bile dönen cismin enerjisi vardır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🌀",
              terim: "Rotational kinetic energy",
              tr: "dönme kinetik enerjisi",
              tanim: "Dönen rigid sistemin enerjisi: K_rot = ½Iω². Skalerdir ve ½mv²'nin dönme ikizidir.",
              ornek: "I = 4 kg·m², ω = 3 rad/s: K_rot = ½ × 4 × 9 = 18 J."
            },
            {
              ikon: "🎡",
              terim: "Total kinetic energy",
              tr: "toplam kinetik enerji",
              tanim: "Hem ilerleyen hem dönen sistemde kütle merkezinin öteleme enerjisi ile kütle merkezi etrafındaki dönme enerjisi toplanır.",
              ornek: "Yerde yuvarlanan topun enerjisi iki parçadan oluşur."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "K_rot = ½Iω²", alt: "dönme" },
            "|",
            { t: "K = ½Mv_cm² + ½I_cm ω²", alt: "toplam" }
          ],
          aciklama: "✍️ Sınavda böyle yaz: *The rotational kinetic energy is K = ½Iω², where I is the rotational inertia about the axis of rotation.*"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🌀",
            baslik: "K_rot > 0",
            maddeler: [
              "ω ≠ 0",
              "Kütle merkezi duruyor olsa bile"
            ]
          },
          sag: {
            ikon: "➡️",
            baslik: "K_rot = 0",
            maddeler: [
              "ω = 0",
              "Yalnızca öteleme enerjisi olabilir"
            ]
          },
          oyun: [
            {
              metin: "Yerinde sabit dönen volan (kütle merkezi duruyor).",
              cevap: "sol",
              neden: "K_trans = 0 ama K_rot = ½Iω² > 0."
            },
            {
              metin: "Dönmeden buzda kayan hokey diski.",
              cevap: "sag",
              neden: "ω = 0: yalnızca öteleme enerjisi var."
            },
            {
              metin: "Düz yolda yuvarlanan top.",
              cevap: "sol",
              neden: "Hem ilerliyor hem dönüyor; ikisi de var."
            },
            { metin: "Dönmeden havada savrulan tuğla.", cevap: "sag", neden: "Dönmüyorsa K_rot = 0." }
          ]
        }
      ]
    },
    {
      baslik: "Tork ve iş",
      kisa: "W = ∫τ dθ: tork–açı grafiğinin altındaki alan aktarılan enerjidir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "W = ∫τ dθ", alt: "τ–θ altındaki alan" },
            "|",
            { t: "W = τΔθ", alt: "sabit tork" },
            "|",
            { t: "W_net = ΔK_rot", alt: "iş–enerji" }
          ],
          aciklama: "θ radyan olmalı (1 tur = 2π rad). Anlık güç P = dW/dt = τω. ✍️ Sınavda böyle yaz: *The work done by the torque equals the area under the τ–θ graph, which equals the change in rotational kinetic energy.*"
        },
        {
          tip: "grafik",
          baslik: "τ–θ grafiği: alan = iş",
          xlabel: "θ (rad)",
          ylabel: "τ (N·m)",
          xmax: 6,
          ymax: 10,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" }
          ],
          ogeler: [
            { id: "c1", tip: "cizgi", from: [0, 0], to: [2, 8], renk: 0 },
            { id: "c2", tip: "cizgi", from: [2, 8], to: [5, 8], renk: 0 },
            {
              id: "a1",
              tip: "alan",
              noktalar: [[0, 0], [2, 8], [2, 0]],
              renk: 1,
              gizli: true
            },
            { id: "t1", tip: "yazi", x: 1.45, y: 2.2, metin: "8 J", gizli: true },
            {
              id: "a2",
              tip: "alan",
              noktalar: [[2, 0], [2, 8], [5, 8], [5, 0]],
              renk: 2,
              gizli: true
            },
            { id: "t2", tip: "yazi", x: 3.5, y: 4, metin: "24 J", gizli: true },
            { id: "t3", tip: "yazi", x: 3.5, y: 9.2, metin: "W = 32 J", gizli: true }
          ],
          durumlar: [
            {
              metin: "Durgun bir çarka uygulanan tork θ ile değişiyor: 0–2 rad arasında 0'dan 8 N·m'ye artıyor, 2–5 rad arasında 8 N·m sabit."
            },
            {
              metin: "İlk bölüm üçgen: W₁ = ½ × 2 × 8 = 8 J.",
              goster: [
                "a1",
                "t1"
              ]
            },
            {
              metin: "İkinci bölüm dikdörtgen: W₂ = 8 × 3 = 24 J.",
              goster: [
                "a2",
                "t2"
              ]
            },
            {
              metin: "Toplam W = 32 J = ΔK_rot. I = 4 kg·m² ise ½(4)ω² = 32 → ==ω = 4 rad/s==.",
              goster: [
                "t3"
              ]
            }
          ]
        }
      ]
    },
    {
      baslik: "Çözümlü örnek: kol ve çark",
      kisa: "İş = τΔθ (radyan), sonra iş–enerji teoremi: W = ½Iω².",
      bloklar: [
        {
          tip: "ornek",
          baslik: "F = 20 N, kol r = 0,40 m, bir tam tur, I = 2 kg·m²",
          durum: "Durgun bir çarka krank koluyla, kola dik 20 N'luk sabit kuvvet uygulanıyor. Bir tam tur sonunda ω kaç? Kol 0,80 m olsaydı? (Sürtünme yok.)",
          adimlar: [
            "Tork: τ = rF sin90° = 0,40 × 20 = 8 N·m (sabit).",
            "Bir tur = 2π rad, bu yüzden W = τΔθ = 8 × 2π = 16π ≈ 50,3 J.",
            "İş–enerji: W = ΔK_rot → 16π = ½(2)ω² → ω² = 16π.",
            "ω = 4√π ≈ 7,1 rad/s.",
            "Kol 0,80 m: τ ve W iki katı olur, ω² iki katına çıkar: ω = 4√(2π) ≈ 10,0 rad/s (ω iki kat değil, √2 kat artar).",
            "✍️ Sınavda böyle yaz: *The torque does work τΔθ on the wheel, so ½Iω² = τΔθ with Δθ = 2π rad.*"
          ],
          sonuc: "W = 16π ≈ 50,3 J; ω ≈ 7,1 rad/s (kol 0,80 m ise ≈ 10,0 rad/s)"
        },
        {
          tip: "tuzak",
          baslik: "Radyan, tur değil",
          metin: "W = τΔθ'da açı radyan olmalıdır. Bir tam tur için Δθ = 2π ≈ 6,28 rad; '1' ya da '360' yazma.",
          yanlis: "Bir tur için W = 8 × 1 = 8 J.",
          dogru: "W = 8 × 2π ≈ 50,3 J."
        }
      ]
    },
    {
      baslik: "Enerji korunumu: düşen kütle ve makara",
      kisa: "Kaybolan potansiyel enerji öteleme ve dönme enerjisine paylaşılır.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "m = 2 kg, disk makara M = 4 kg, R = 0,20 m, h = 1,0 m",
          durum: "İp makaradan kaymadan açılıyor. 2 kg'lık kütle durgun bırakılıp 1,0 m düşüyor. Hızını enerji korunumuyla bul ve enerjinin nasıl paylaşıldığını göster.",
          adimlar: [
            "Kaybolan potansiyel enerji: mgh = 2 × 9,8 × 1,0 = 19,6 J.",
            "Son durumda K_trans = ½mv² ve K_rot = ½Iω². I = ½MR² ve ω = v/R, yani K_rot = ½(½MR²)(v/R)² = ¼Mv².",
            "mgh = ½mv² + ¼Mv² = 1·v² + 1·v² = 2v² → 19,6 = 2v² → v² = 9,8 → v ≈ 3,1 m/s.",
            "Paylaşım: K_trans = ½(2)(9,8) = 9,8 J ve K_rot = ¼(4)(9,8) = 9,8 J. Enerji yarı yarıya bölünür.",
            "Kontrol (5. ünite yöntemi): a = mg/(m + M/2) = 4,9 m/s²; v² = 2ah = 9,8 ✓.",
            "✍️ Sınavda böyle yaz: *Mechanical energy is conserved: mgh = ½mv² + ½Iω², with ω = v/R because the string does not slip.*"
          ],
          sonuc: "v = √9,8 ≈ 3,1 m/s; K_trans = K_rot = 9,8 J"
        },
        {
          tip: "tuzak",
          baslik: "Aynı enerjiyi iki kez sayma",
          metin: "Sabit pivot etrafında dönen cisim için K = ½I_pivot ω² yazdıysan öteleme terimini ayrıca ekleme. Kütle merkezi etrafında yazıyorsan K = ½Mv_cm² + ½I_cm ω².",
          yanlis: "Pivotundan sallanan çubuk için K = ½Mv_cm² + ½I_pivot ω².",
          dogru: "Ya ½I_pivot ω² ya da ½Mv_cm² + ½I_cm ω²; ikisi aynı sonucu verir."
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
            "*Rotational kinetic energy* K_rot = ½Iω² skalerdir; kütle merkezi dururken bile sıfır olmayabilir.",
            "Hem ilerleyen hem dönen sistemde K = ½Mv_cm² + ½I_cm ω².",
            "Tork enerji aktarır: W = ∫τ dθ; sabit torkta W = τΔθ; τ–θ grafiğinde alan iştir.",
            "İş–enerji teoremi dönmede de geçerlidir: W_net = ΔK_rot.",
            "Açı radyan olmalı: bir tam tur 2π rad. Güç P = dW/dt = τω.",
            "Fonksiyonel bağımlılık: aynı torkla daha geniş açı → daha çok iş → daha büyük ω (ω ∝ √W).",
            "Düşen kütle ve makara: mgh öteleme ve dönme enerjisine paylaşılır; ω = v/R ile bağla.",
            "Yalnızca 'enerji korunur' yazma; denklemi ve hangi enerjilerin değiştiğini göster."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A disk rotates about a fixed axis with rotational kinetic energy K. The disk is replaced by one with half the rotational inertia, and it rotates with twice the angular speed. What is its new rotational kinetic energy?",
      opts: [
        "K/2",
        "K",
        "2K",
        "4K"
      ],
      a: 2,
      why: "K' = ½(I/2)(2ω)² = ½ I ω² × 2 = 2K. D en çekici yanlış şık: ω'nın karesini alıp I'nın yarıya inmesini unutmak."
    },
    {
      q: "A wheel with rotational inertia 4 kg·m² starts from rest. The graph shows the torque applied to it as a function of angular position θ. What is its angular speed at θ = 4 rad?",
      fig: {
        type: "graph",
        xlabel: "θ (rad)",
        ylabel: "τ (N·m)",
        xmax: 5,
        ymax: 8,
        lines: [
          { from: [0, 0], to: [2, 6], color: 0 },
          { from: [2, 6], to: [4, 6], color: 0 }
        ],
        xticks: [
          { v: 1, label: "1" },
          { v: 2, label: "2" },
          { v: 3, label: "3" },
          { v: 4, label: "4" }
        ],
        yticks: [
          { v: 2, label: "2" },
          { v: 4, label: "4" },
          { v: 6, label: "6" }
        ]
      },
      opts: [
        "1.5 rad/s",
        "3 rad/s",
        "4.5 rad/s",
        "9 rad/s"
      ],
      a: 1,
      why: "W = alan = ½(2)(6) + (6)(2) = 18 J; ½(4)ω² = 18 → ω = 3 rad/s. C en çekici yanlış şık 4,5: W/I değeri; ω için K = ½Iω² kullanılmalı."
    },
    {
      q: "A constant net torque acts on a wheel that starts from rest. After the wheel turns through an angle θ, its angular speed is ω. If the same torque acts through an angle 2θ, the angular speed will be",
      opts: [
        "√2 ω",
        "2ω",
        "4ω",
        "ω"
      ],
      a: 0,
      why: "W = τΔθ iki katına çıkar, K_rot = ½Iω² iki katına çıkar; bu yüzden ω √2 katına çıkar. B en çekici yanlış şık: ω'nın açıyla orantılı olduğunu sanmak, oysa ω ∝ √Δθ."
    },
    {
      q: "A uniform disk of mass M and radius R rotates with angular speed ω about its center while its center moves with speed v. What is the disk's total kinetic energy?",
      opts: [
        "½Mv²",
        "¼MR²ω²",
        "½Mv² + ½MR²ω²",
        "½Mv² + ¼MR²ω²"
      ],
      a: 3,
      why: "K = ½Mv_cm² + ½I_cm ω² ve I_cm = ½MR² olduğundan K = ½Mv² + ¼MR²ω². C en çekici yanlış şık: I_cm yerine MR² (halka değeri) kullanmak."
    },
    {
      q: "A 2 kg block hangs from a string wrapped around a uniform disk pulley of mass 8 kg. The string does not slip and the pulley turns without friction. The block is released from rest. After the block has fallen a distance h, what fraction of the lost gravitational potential energy has become rotational kinetic energy of the pulley?",
      opts: [
        "1/3",
        "1/2",
        "2/3",
        "3/4"
      ],
      a: 2,
      why: "mgh = ½mv² + ¼Mv² = v² + 2v² = 3v²; K_rot = 2v² = (2/3)mgh. B en çekici yanlış şık: 4 kg'lık makara örneğindeki yarı yarıya paylaşım; makara kütlesi değişince oran değişir."
    }
  ]
};
