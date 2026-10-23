/* Kitora not defteri · st505 · 5.6 Oran Farkının Dağılımı
   Kapsam: p̂₁ − p̂₂ sampling distribution (mean p₁ − p₂, SD √(…+…)), bağımsızlık, 10% ve Large Counts (dört sayı), normal yaklaşıklıkla olasılık. */
window.DEFTER = {
  slug: "st505",
  amac: "Bu konu, iki bağımsız örneklemin oranları arasındaki farkın (p̂₁ − p̂₂) sampling distribution'ını anlatıyor. Farkın merkezini, yayılımını (varyanslar toplanır), koşulları ve olasılık hesabını öğreneceksin.",
  bolumler: [
    {
      baslik: "İki oran, bir fark",
      kisa: "p̂₁ − p̂₂: iki bağımsız örneklemin oranları arasındaki fark.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➖", terim: "Difference in sample proportions", tr: "örneklem oranları farkı (p̂₁ − p̂₂)", tanim: "İki ayrı popülasyondan alınan örneklemlerin oranlarının farkı; her örneklem çiftinde yeni bir değer alır.", ornek: "9. sınıftan 100 kişide simit alanların oranı − 10. sınıftan 100 kişide simit alanların oranı." },
            { ikon: "🔀", terim: "Independent samples", tr: "bağımsız örneklemler", tanim: "Bir gruptaki seçimlerin diğer gruptaki seçimleri etkilemediği iki örneklem (ya da randomized experiment'te iki gruba rastgele atama).", ornek: "İki sınıf düzeyinden ayrı ayrı çekilen rastgele örneklemler." }
          ] },
        { tip: "tablo", baslik: "Bu defterin örneği: simit alma oranı", head: ["", "1. grup (9. sınıf)", "2. grup (10. sınıf)"], rows: [
            ["Gerçek oran", "p₁ = 0,60", "p₂ = 0,50"],
            ["Örneklem büyüklüğü", "n₁ = 100", "n₂ = 100"],
            ["Örneklem oranı", "p̂₁", "p̂₂"]
          ], not: "Her sınıf düzeyi 1.000 öğrenciden büyük; iki örneklem rastgele ve birbirinden bağımsız." }
      ]
    },
    {
      baslik: "Merkez ve yayılım",
      kisa: "Mean farkların farkıdır; varyanslar toplanır, sonra karekök alınır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "μ_(p̂₁−p̂₂)", alt: "farkın mean'i" }, "=", { t: "p₁ − p₂", alt: "gerçek oranların farkı" }], aciklama: "p̂₁ − p̂₂, p₁ − p₂ için yansız bir tahmin edicidir." },
        { tip: "formul", parcalar: [{ t: "σ_(p̂₁−p̂₂)", alt: "farkın SD'si" }, "=", { t: "√( p₁(1−p₁)/n₁ + p₂(1−p₂)/n₂ )", alt: "iki varyans toplanır" }], aciklama: "Her grubun σ_p̂² değeri toplanır. Gruplar bağımsız olduğu için bu formül geçerlidir." },
        { tip: "ornek", baslik: "Simit örneği: mean ve SD", durum: "p₁ = 0,60, n₁ = 100 ve p₂ = 0,50, n₂ = 100.",
          adimlar: ["Mean: 0,60 − 0,50 = 0,10.", "Varyanslar: 0,60 × 0,40 ÷ 100 = 0,0024 ve 0,50 × 0,50 ÷ 100 = 0,0025.", "Toplam: 0,0024 + 0,0025 = 0,0049; karekök: √0,0049 = 0,07."],
          sonuc: "p̂₁ − p̂₂ dağılımının mean'i ==0,10==, SD'si ==0,07==." },
        { tip: "tuzak", baslik: "Fark alırken SD'leri çıkarmak ya da toplamak", metin: "Belirsizlikler fark alınsa bile birikir; SD'ler değil, varyanslar toplanır.", yanlis: "σ = 0,049 + 0,05 = 0,099 (ya da 0,049 − 0,05).", dogru: "σ = √(0,0024 + 0,0025) = 0,07. Fark dağılımı, her bir p̂ dağılımından daha geniştir." }
      ]
    },
    {
      baslik: "Üç dağılım yan yana",
      kisa: "Fark dağılımı sıfırdan 0,10 uzakta ve her iki p̂ dağılımından daha geniştir.",
      bloklar: [
        { tip: "grafik", baslik: "p̂₁, p̂₂ ve p̂₁ − p̂₂", xlabel: "Oran ya da oran farkı", ylabel: "", xmax: 10, ymax: 10,
          xticks: [{ v: 0, label: "−0,2" }, { v: 1, label: "−0,1" }, { v: 2, label: "0" }, { v: 3, label: "0,1" }, { v: 4, label: "0,2" }, { v: 5, label: "0,3" }, { v: 6, label: "0,4" }, { v: 7, label: "0,5" }, { v: 8, label: "0,6" }, { v: 9, label: "0,7" }, { v: 10, label: "0,8" }],
          ogeler: [
            { id: "e1", tip: "egri", renk: 0, etiket: "", noktalar: [[6.29,0.02],[6.5,0.08],[6.71,0.29],[6.93,0.82],[7.14,1.94],[7.36,3.78],[7.57,6.11],[7.79,8.14],[8,8.96],[8.21,8.14],[8.43,6.11],[8.64,3.78],[8.86,1.94],[9.07,0.82],[9.29,0.29],[9.5,0.08],[9.72,0.02]] },
            { id: "l1", tip: "yazi", x: 9.2, y: 6, metin: "p̂₁" },
            { id: "e2", tip: "egri", renk: 1, etiket: "", gizli: true, noktalar: [[5.25,0.02],[5.47,0.08],[5.69,0.28],[5.91,0.8],[6.13,1.9],[6.34,3.71],[6.56,5.99],[6.78,7.98],[7,8.78],[7.22,7.98],[7.44,5.99],[7.66,3.71],[7.88,1.9],[8.09,0.8],[8.31,0.28],[8.53,0.08],[8.75,0.02]] },
            { id: "l2", tip: "yazi", x: 5.9, y: 6, metin: "p̂₂", gizli: true },
            { id: "d", tip: "egri", renk: 2, etiket: "", gizli: true, noktalar: [[0.55,0.01],[0.86,0.06],[1.16,0.2],[1.47,0.57],[1.78,1.36],[2.08,2.65],[2.39,4.28],[2.69,5.7],[3,6.27],[3.31,5.7],[3.61,4.28],[3.92,2.65],[4.22,1.36],[4.53,0.57],[4.84,0.2],[5.14,0.06],[5.45,0.01]] },
            { id: "ld", tip: "yazi", x: 3, y: 7.2, metin: "p̂₁ − p̂₂", gizli: true },
            { id: "z", tip: "cizgi", renk: 3, kesik: true, from: [2, 0], to: [2, 9.3], etiket: "fark = 0", gizli: true },
            { id: "a", tip: "alan", renk: 3, gizli: true, noktalar: [[0.55,0],[0.55,0.01],[0.67,0.02],[0.79,0.04],[0.91,0.07],[1.03,0.12],[1.15,0.19],[1.27,0.3],[1.4,0.45],[1.52,0.66],[1.64,0.94],[1.76,1.3],[1.88,1.74],[2,2.26],[2,0]] },
            { id: "ya", tip: "yazi", x: 1.2, y: 1.2, metin: "≈ 0,08", gizli: true }
          ],
          durumlar: [
            { metin: "p̂₁ (9. sınıf): mean 0,60, SD √(0,0024) ≈ 0,049." },
            { metin: "p̂₂ (10. sınıf): mean 0,50, SD 0,05. İki dağılım kısmen üst üste biniyor.", goster: ["e2", "l2"] },
            { metin: "Fark p̂₁ − p̂₂: mean ==0,10==, SD ==0,07==. Merkez 0,60 − 0,50; ==daha geniş==, çünkü varyanslar toplandı.", goster: ["d", "ld"] },
            { metin: "Fark = 0 çizgisinin solundaki alan, 10. sınıfın örneklemde daha yüksek çıkma olasılığıdır: ==≈ 0,08==.", goster: ["z", "a", "ya"] }
          ] },
        { tip: "tablo", baslik: "Özet", head: ["Statistic", "Mean", "SD"], rows: [["p̂₁", "0,60", "≈ 0,049"], ["p̂₂", "0,50", "= 0,05"], ["p̂₁ − p̂₂", "0,10", "0,07"]], vurgu: 2 }
      ]
    },
    {
      baslik: "Çözümlü örnek: P(p̂₁ − p̂₂ < 0)",
      kisa: "Gerçekte p₁ > p₂ olsa bile örneklemde ters çıkabilir; olasılığı z verir.",
      bloklar: [
        { tip: "ornek", baslik: "9. sınıf geride kalır mı?", durum: "Simit örneğinde (p₁ = 0,60, n₁ = 100; p₂ = 0,50, n₂ = 100) örneklemde 9. sınıfın oranının 10. sınıftan düşük çıkma olasılığı nedir?",
          adimlar: ["Dağılım: p̂₁ − p̂₂; mean 0,10, SD 0,07.", "Koşullar: iki bağımsız rastgele örneklem; 10% ✓ (100, 1.000'in %10'u); Large Counts: 60, 40, 50, 50 hepsi ≥ 10 ✓ → yaklaşık normal.", "p̂₁ − p̂₂ < 0 için z = (0 − 0,10) ÷ 0,07 ≈ −1,43.", "Tablo: P(Z < −1,43) = 1 − 0,9236 = 0,0764."],
          sonuc: "Olasılık ≈ ==0,08==: 9. sınıfın gerçek oranı daha yüksek olsa da, örneklemlerin yaklaşık %8'inde sonuç ters çıkar." },
        { tip: "tuzak", baslik: "İşaret ve kuyruk", metin: "Farkı hangi sırayla yazdıysan sıfırın solu ya da sağı o yönü gösterir.", yanlis: "z = (0 − 0,10) ÷ 0,07 = +1,43 ve P(Z > 1,43) = 0,0764 yazıp yönü karıştırmak.", dogru: "‘Fark sıfırdan küçük’ sol kuyruktur: z = −1,43. Simetri nedeniyle sayı aynı çıksa da z'nin işaretini doğru yaz." }
      ]
    },
    {
      baslik: "Koşullar: bağımsızlık, 10% ve Large Counts",
      kisa: "İki bağımsız örneklem, her biri için 10% ve dört Large Counts sayısı.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🔀", baslik: "Independent", metin: "İki ayrı rastgele örneklem ya da randomized experiment; eşli ya da tekrarlı ölçüm değil." },
            { ikon: "🔟", baslik: "10%", metin: "n₁ ≤ N₁ ÷ 10 ve n₂ ≤ N₂ ÷ 10 (çekimsiz seçimde)." },
            { ikon: "📏", baslik: "Large Counts", metin: "n₁p₁, n₁(1−p₁), n₂p₂, n₂(1−p₂) dördü de ≥ 10." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Koşullar *sağlanıyor*", maddeler: ["İki bağımsız grup", "Dört sayı ≥ 10", "n ≤ N ÷ 10"] },
          sag: { ikon: "⚠️", baslik: "Koşullar *sağlanmıyor*", maddeler: ["Aynı kişiler iki kez", "Bir sayı < 10", "n > N ÷ 10"] },
          oyun: [
            { metin: "İki okuldan rastgele ve bağımsız 80'er öğrenci (okullar 2.000'er kişi); p₁ = 0,30, p₂ = 0,40.", cevap: "sol", neden: "Sayılar 24, 56, 32, 48 ≥ 10 ve 80 ≤ 200: tamam." },
            { metin: "n₁ = 40, p₁ = 0,10 ve n₂ = 100, p₂ = 0,50.", cevap: "sag", neden: "n₁p₁ = 4 < 10: Large Counts bozuk." },
            { metin: "Aynı 50 öğrenci hem 9. hem 10. sınıfta ölçülmüş.", cevap: "sag", neden: "Bağımsız iki örneklem değil: eşli veri." },
            { metin: "1.000 öğrencilik bir okuldan 150 öğrenci seçilmiş.", cevap: "sag", neden: "10%: 150 > 100." },
            { metin: "Rastgele iki gruba atanan 60'ar gönüllü (randomized experiment); p₁ = 0,5, p₂ = 0,4.", cevap: "sol", neden: "Rastgele atama; sayılar 30, 30, 24, 36 ≥ 10." }
          ] },
        { tip: "tuzak", baslik: "Large Counts bir değil, dört sayıdır", metin: "İki grup için dört çarpımın hepsi kontrol edilir.", yanlis: "n₁ = 100, p₁ = 0,50 iyi görünüyor; koşul tamam.", dogru: "n₂ = 20, p₂ = 0,30 ise n₂p₂ = 6 < 10: biri bile bozuksa fark dağılımı normal değildir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "p̂₁ − p̂₂, iki bağımsız örneklemin oranları arasındaki farktır; p₁ − p₂ için yansız tahmin edicidir.",
            "Mean: μ_(p̂₁−p̂₂) = p₁ − p₂.",
            "SD: σ_(p̂₁−p̂₂) = √( p₁(1−p₁)/n₁ + p₂(1−p₂)/n₂ ); varyanslar toplanır, SD'ler değil.",
            "Fark dağılımı, her bir p̂ dağılımından daha geniştir.",
            "Koşullar: iki bağımsız örneklem (ya da randomized experiment), her biri için 10%, ve dört Large Counts sayısının hepsi ≥ 10.",
            "Olasılık: z = (fark − (p₁ − p₂)) ÷ σ; yönü (iki p̂ sırası) karıştırma.",
            "Eşli (aynı kişilerin iki ölçümü) veriye bu formül uygulanmaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "İki popülasyon oranı p₁ = 0,55 ve p₂ = 0,40. Her popülasyondan bağımsız birer rastgele örneklem alınıyor. p̂₁ − p̂₂'nin sampling distribution'ının mean'i kaçtır?",
      opts: ["0,15", "0,95", "0,0225", "0,475"],
      a: 0,
      why: "μ_(p̂₁−p̂₂) = p₁ − p₂ = 0,55 − 0,40 = 0,15. 0,95 oranları toplamaktır; 0,475 ortalamasını almaktır." },
    { q: "Bağımsız iki rastgele örneklemde p₁ = p₂ = 0,50 ve n₁ = n₂ = 200. p̂₁ − p̂₂'nin standard deviation'ı kaçtır?",
      opts: ["0,0025", "0,05", "0,035", "0,071"],
      a: 1,
      why: "Her varyans 0,50 × 0,50 ÷ 200 = 0,00125; toplam 0,0025; karekök 0,05. 0,0025 karekök almayı unutmak; 0,035 tek bir p̂'nin SD'si; 0,071 ise SD'leri toplamaktır." },
    { q: "Her biri çok büyük iki popülasyondan bağımsız ve rastgele örneklemler alınıyor. Hangi durumda p̂₁ − p̂₂ için normal model uygun değildir?",
      opts: ["n₁ = n₂ = 100, p₁ = 0,40, p₂ = 0,60", "n₁ = 200, p₁ = 0,30 ve n₂ = 150, p₂ = 0,50", "n₁ = 80, p₁ = 0,90 ve n₂ = 100, p₂ = 0,50", "n₁ = n₂ = 60, p₁ = 0,20, p₂ = 0,50"],
      a: 2,
      why: "C'de n₁(1−p₁) = 80 × 0,10 = 8 < 10: Large Counts bozuk. Diğer seçeneklerde dört sayı da ≥ 10 (D'de 12, 48, 30, 30)." },
    { q: "İki grupta da gerçek oran 0,50; her gruptan n = 100 kişilik bağımsız rastgele örneklem alınıyor. p̂₁ − p̂₂'nin 0,10'dan büyük olma olasılığı yaklaşık kaçtır?",
      opts: ["0,02", "0,08", "0,16", "0,92"],
      a: 1,
      why: "Mean 0; SD = √(0,0025 + 0,0025) ≈ 0,0707; z = 0,10 ÷ 0,0707 ≈ 1,41; P(Z > 1,41) = 1 − 0,9207 ≈ 0,08. 0,02 tek bir p̂'nin SD'siyle (0,05, z = 2) hesaplanır; 0,16 iki kuyruğu toplar." },
    { q: "Bağımsız iki örneklem için p̂₁ − p̂₂'nin standard deviation'ı, her bir p̂'nin standard deviation'ından neden daha büyüktür?",
      opts: ["SD'ler çıkarılır; fark büyüyünce SD de büyür.", "SD'ler doğrudan toplanır: σ₁ + σ₂.", "Varyanslar çıkarılır, sonra karekök alınır.", "Bağımsız olduğu için varyanslar toplanır, sonra karekök alınır; iki belirsizlik birleşir."],
      a: 3,
      why: "Bağımsız değişkenlerde farkın varyansı varyansların toplamıdır; karekök sonucu her bir SD'den büyüktür. B en çekici yanlış şık: varyanslar toplanır, SD'ler doğrudan toplanmaz." }
  ]
};
