/* Kitora not defteri · py105 · 1.5 Uyku
   Kaynak: AP Psychology CED (2024) Topic 1.5. Blok türleri: /ap/_kit/defter.js başı.
   Not: uyku grafiği kavramsal bir gece örneğidir (gerçek kayıt değil). Y: Uyanık 8 · REM 6,5 · N1 5 · N2 3,2 · N3 1,2. */
window.DEFTER = {
  slug: "py105",
  amac: "Bu konu uykuyu ve bilinci anlatıyor. Sirkadiyen ritmi, EEG'ye göre uyku evrelerini, uykunun neden gerekli olduğunu, rüya kuramlarını ve yaygın uyku bozukluklarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Bilinç ve sirkadiyen ritim",
      kisa: "Uyku–uyanıklık yaklaşık 24 saatlik bir ritimdir; jet lag ve vardiya onu bozar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💡", terim: "Consciousness", tr: "bilinç", tanim: "Düşünce, duygu, davranış ve çevreden haberdar olma düzeyi. Uyku ve uyanıklık, bilincin iki türüdür.", ornek: "Dersteyken dikkatli, yarı uykulu ya da uykuda olmak farklı bilinç düzeyleridir." },
            { ikon: "⏰", terim: "Circadian rhythm", tr: "sirkadiyen ritim", tanim: "İnsanda yaklaşık 24 saatlik biyolojik döngü; uyku–uyanıklığı, vücut ısısını ve hormon salımını düzenler.", ornek: "Gece yarısı uykunun, öğleden sonra uyanıklığın artması." },
            { ikon: "✈️", terim: "Jet lag ve shift work", tr: "jet lag ve vardiyalı çalışma", tanim: "İkisi de sirkadiyen ritmin dış saatle uyumunun bozulmasıdır: yorgunluk, uyku ve dikkat sorunları doğurur.", ornek: "Türkiye'den Amerika'ya uçup ilk günlerde gece uyanık kalmak ya da gece vardiyasında çalışmak." }
          ] },
        { tip: "adimlar", baslik: "İç saat nasıl ayarlanır?", adimlar: [
            { baslik: "Işık", metin: "Gözdeki ışık bilgisi, hipotalamustaki iç saate (*suprachiasmatic nucleus*) ulaşır." },
            { baslik: "Akşam", metin: "Işık azalınca epifiz bezi *melatonin* salgılar. Akşam parlak ekrana bakmak bu salımı geciktirebilir." },
            { baslik: "Gece", metin: "Melatonin artar, vücut ısısı düşer, uykulu hissedersin." },
            { baslik: "Sabah", metin: "Işık melatonini baskılar; uyanıklık artar." }
          ] },
        { tip: "tuzak", metin: "Sirkadiyen ritim yalnızca “uyku saati” değildir.", yanlis: "Sirkadiyen ritim yalnızca uykuyu belirler; ışık onu etkilemez.", dogru: "Sirkadiyen ritim ışıkla ayarlanan ~24 saatlik bir ==iç saattir==; uykuyu, vücut ısısını ve hormonları etkiler. *Jet lag* ve vardiya işi bu saati dış saatten koparır." }
      ]
    },
    {
      baslik: "Uyku evreleri ve EEG",
      kisa: "Evreler EEG dalgalarıyla tanınır; NREM, REM'le dönüşümlü bir döngü oluşturur.",
      bloklar: [
        { tip: "tablo", baslik: "Uyku evreleri ve beyin dalgaları", head: ["Evre", "EEG deseni", "Nasıl bir durum?"], rows: [
            ["Uyanık, dikkatli", "*Beta*: hızlı, küçük dalgalar", "Zihin aktif"],
            ["Uyanık, gevşek", "*Alpha*", "Gözler kapalı, rahat"],
            ["*NREM* 1 (N1)", "*Theta*: yavaşlayan dalgalar", "Hafif uyku; *hypnagogic sensations*: düşme ya da sıçrama hissi"],
            ["*NREM* 2 (N2)", "Theta + *sleep spindles* ve *K-complexes*", "Daha derin uyku; uyanmak güçleşir"],
            ["*NREM* 3 (N3)", "*Delta*: çok yavaş, yüksek genlikli dalgalar", "Derin, yavaş dalga uykusu; zor uyandırılır"],
            ["*REM*", "Uyanıklığa benzeyen hızlı dalgalar", "Canlı rüyalar, hızlı göz hareketleri; kaslar felçli"]
          ] },
        { tip: "grafik", baslik: "Bir gecenin uyku evreleri (kavramsal)", xlabel: "Gece boyunca saat", ylabel: "Uyku evresi", xmax: 8, ymax: 9,
          xticks: [{ v: 0, label: "0" }, { v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 8, label: "Uyanık" }, { v: 6.5, label: "REM" }, { v: 5, label: "N1" }, { v: 3.2, label: "N2" }, { v: 1.2, label: "N3" }],
          ogeler: [
            { id: "r1", tip: "alan", renk: 3, noktalar: [[1.45, 0], [1.6, 0], [1.6, 9], [1.45, 9]], gizli: true },
            { id: "r2", tip: "alan", renk: 3, noktalar: [[3.0, 0], [3.3, 0], [3.3, 9], [3.0, 9]], gizli: true },
            { id: "r3", tip: "alan", renk: 3, noktalar: [[4.55, 0], [5.0, 0], [5.0, 9], [4.55, 9]], gizli: true },
            { id: "r4", tip: "alan", renk: 3, noktalar: [[6.0, 0], [6.6, 0], [6.6, 9], [6.0, 9]], gizli: true },
            { id: "r5", tip: "alan", renk: 3, noktalar: [[7.3, 0], [7.8, 0], [7.8, 9], [7.3, 9]], gizli: true },
            { id: "c1", tip: "egri", renk: 0, noktalar: [[0, 8], [0.1, 5], [0.4, 3.2], [0.75, 1.2], [1.1, 1.2], [1.3, 3.2], [1.45, 6.5], [1.6, 6.5]], gizli: true },
            { id: "c2", tip: "egri", renk: 0, noktalar: [[1.6, 6.5], [1.75, 3.4], [2.1, 1.2], [2.3, 1.2], [2.5, 3.2], [2.9, 3.2], [3.0, 6.5], [3.3, 6.5]], gizli: true },
            { id: "c3", tip: "egri", renk: 0, noktalar: [[3.3, 6.5], [3.45, 3.4], [3.75, 1.4], [3.9, 1.4], [4.1, 3.2], [4.5, 3.2], [4.55, 6.5], [5.0, 6.5]], gizli: true },
            { id: "c4", tip: "egri", renk: 0, noktalar: [[5.0, 6.5], [5.15, 3.4], [5.5, 3.2], [5.9, 3.2], [6.0, 6.5], [6.6, 6.5]], gizli: true },
            { id: "c5", tip: "egri", renk: 0, noktalar: [[6.6, 6.5], [6.8, 3.2], [7.2, 3.2], [7.3, 6.5], [7.8, 6.5], [8, 8]], gizli: true },
            { id: "yz1", tip: "yazi", x: 0.8, y: 0.35, metin: "Uzun N3", gizli: true },
            { id: "yz2", tip: "yazi", x: 5.6, y: 8.6, metin: "REM uzuyor", gizli: true }
          ],
          durumlar: [
            { metin: "Dikey eksen uyku evreleri (EEG deseniyle belirlenir), yatay eksen gece saatleri. Bir ==döngü yaklaşık 90 dakikadır==." },
            { metin: "Uykuya dalış: N1 → N2 → N3 (derin) → tekrar N2 → kısa bir REM. Gölgeli bantlar REM dönemleridir.", goster: ["c1", "r1", "yz1"] },
            { metin: "İkinci döngü: N3 hâlâ var, REM biraz uzar.", goster: ["c2", "r2"] },
            { metin: "Gece ilerledikçe ==N3 kısalır, REM uzar==.", goster: ["c3", "c4", "r3", "r4"], gizle: ["yz1"] },
            { metin: "Sabaha doğru N3 neredeyse kalmaz; en uzun REM dönemleri son döngülerdedir. Uyanıklığa geçiş.", goster: ["c5", "r5", "yz2"] }
          ] },
        { tip: "not", metin: "Bir gecede 4–5 döngü olur ve sıra hep aynıdır: N1 → N2 → N3 → N2 → REM. Yani ==NREM süresi gece boyunca azalır, REM süresi artar.==" }
      ]
    },
    {
      baslik: "NREM ve REM",
      kisa: "REM'de beyin uyanık gibi, beden felçlidir; gece ilerledikçe REM uzar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌑", baslik: "*NREM* (Evre 1–3)", maddeler: ["Dalgalar yavaşlar; N3'te delta dalgaları", "Derin uykunun çoğu gecenin ilk yarısında; süre gece boyunca kısalır"] },
          sag: { ikon: "🎬", baslik: "*REM*", maddeler: ["Dalgalar uyanıklığa benzer (*paradoxical sleep*); beden en gevşektir", "Canlı rüyalar; süre gece ilerledikçe uzar"] },
          oyun: [
            { metin: "Beyin etkinliği uyanıklığa benzer ama kaslar neredeyse felçlidir.", cevap: "sag", neden: "*REM*'in “paradoksal” yanı budur." },
            { metin: "Yüksek genlikli yavaş delta dalgaları görülür.", cevap: "sol", neden: "N3, *NREM*'in en derin evresidir." },
            { metin: "Sabaha doğru en uzun dönemini yaşar.", cevap: "sag", neden: "*REM* gece ilerledikçe uzar." },
            { metin: "Derin uykunun çoğu gecenin ilk yarısında geçer.", cevap: "sol", neden: "N3 gece ilerledikçe kısalır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "😵", terim: "Hypnagogic sensations", tr: "uykuya dalış duyumları", tanim: "Uykuya dalarken (N1) yaşanan düşer gibi olma, bedenin sıçraması ya da ışık parlaması gibi duyumlar.", ornek: "Yatakta yatarken birden “düştüm” sanıp uyanmak." },
            { ikon: "🔁", terim: "REM rebound", tr: "REM geri tepmesi", tanim: "REM'den yoksun kalınca, sonraki uykuda REM'in daha erken gelmesi ve daha uzun sürmesi.", ornek: "Birkaç gün uykusuz kalan birinin ilk iyi gecede çok yoğun rüya görmesi." }
          ] },
        { tip: "tuzak", metin: "Rüya ve derin uyku ile REM karıştırılır.", yanlis: "Rüya yalnızca REM'de görülür; “derin uyku” REM demektir.", dogru: "Rüyalar ==tipik olarak== REM'de, daha canlı görülür (*NREM*'de de olabilir). ==Derin uyku N3==tür, REM değil." }
      ]
    },
    {
      baslik: "Neden uyuruz?",
      kisa: "Uyku bellekleri düzenler ve gün boyu tükenen kaynakları yeniler.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🗃️", baslik: "*Memory consolidation*", maddeler: ["Uyku, gün içinde öğrenilenleri düzenler ve kalıcı belleğe yerleştirir", "Sınavdan önceki gece uyumak öğrendiklerini pekiştirir"] },
          sag: { ikon: "🔋", baslik: "*Restoration*", maddeler: ["Uyku, gün içinde tükenen kaynakları yeniler", "Bedensel onarım ve zihinsel dinlenme"] } },
        { tip: "liste", maddeler: [
            { ikon: "🧠", baslik: "Dikkat ve bellek", metin: "Uykusuzken dikkat dağılır ve yeni bilgi öğrenmek zorlaşır." },
            { ikon: "😠", baslik: "Duygu durumu", metin: "Sinirlilik ve ruh hali dalgalanmaları artar." },
            { ikon: "🚗", baslik: "Performans ve güvenlik", metin: "Tepki süresi uzar; kaza riski artar." },
            { ikon: "🏃", baslik: "Beden", metin: "Fiziksel performans düşer, yorgunluk artar." }
          ] }
      ]
    },
    {
      baslik: "Rüya kuramları",
      kisa: "Activation-synthesis rüyayı rastgele sinyallerin yorumu, consolidation bellek işlemesi sayar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎲", baslik: "*Activation-synthesis*", maddeler: ["REM'de beyin sapı rastgele sinirsel sinyaller üretir", "Korteks bu sinyallere bir hikâye kurar (sentez): rüya budur"] },
          sag: { ikon: "🗃️", baslik: "*Consolidation theory*", maddeler: ["Rüyalar, uyku sırasındaki bellek işlemenin yansımasıdır", "Gün içi bilgiler tekrarlanır ve pekişir"] },
          oyun: [
            { metin: "Rüyadaki saçma olaylar, beynin rastgele sinyallere anlam vermeye çalışmasıdır.", cevap: "sol", neden: "Rastgele sinyal + sentez: *activation-synthesis*." },
            { metin: "Sınav öncesi çalıştığın konunun rüyanda belirmesi, öğrendiklerin işlenirken yaşanır.", cevap: "sag", neden: "Bellek işleme: *consolidation*." },
            { metin: "Beyin sapından gelen rastgele etkinlik rüyanın hammaddesidir.", cevap: "sol", neden: "Aktivasyon beyin sapından başlar: *activation-synthesis*." },
            { metin: "Rüyalar, gün içi anıların uzun süreli belleğe taşınmasını yansıtır.", cevap: "sag", neden: "Anıların pekişmesi: *consolidation*." }
          ] },
        { tip: "not", metin: "İki kuram da biyolojiktir; AP sınavı rüyanın ==gizli bir mesaj== taşıdığını savunan psikanalitik kuramı sormaz. Bilmen gereken: *activation-synthesis* ve *consolidation*." }
      ]
    },
    {
      baslik: "Uyku bozuklukları ve sağlıklı uyku",
      kisa: "Uyku bozuklukları gündüzü etkiler; düzenli program ve tedavi yardımcı olur.",
      bloklar: [
        { tip: "tablo", baslik: "Sınavda sorulan beş bozukluk", head: ["Bozukluk", "Ne olur?", "Akılda kalacak ipucu"], rows: [
            ["*Insomnia*", "Uykuya dalmada ya da uykuyu sürdürmede süregelen güçlük", "Gündüz yorgunluk ve dikkat sorunu"],
            ["*Narcolepsy*", "Gün içinde aniden, karşı konulamaz uyku atakları; REM'e hızlı geçiş", "Ani uyku atağı"],
            ["*Sleep apnea*", "Uykuda nefes tekrar tekrar durur", "Gürültülü horlama, gündüz uyuklama"],
            ["*REM sleep behavior disorder*", "REM'de kaslar felç olmaz; kişi rüyasını fiziksel olarak canlandırır", "Rüya görürken vurmak, tekmelemek"],
            ["*Somnambulism*", "Uyurken yürümek ve karmaşık hareketler yapmak; derin NREM uykusunda olur", "Sabah hatırlamaz"]
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🗓️", baslik: "Düzenli program", metin: "Hafta sonu da yaklaşık aynı saatlerde yat ve kalk." },
            { ikon: "📵", baslik: "Işık ve ekran", metin: "Yatmadan önce parlak ekranları azalt; melatonin salımı gecikmesin." },
            { ikon: "🌙", baslik: "Oda ortamı", metin: "Karanlık, sessiz ve serin bir oda uykuyu kolaylaştırır." },
            { ikon: "🩺", baslik: "Tedavi", metin: "Bozukluklar tedavi edilebilir; tedavi gündüz performansını ve genel iyilik hâlini artırır." }
          ] },
        { tip: "tuzak", metin: "Uyurgezerlik ve rüyayı canlandırma karıştırılır.", yanlis: "*Somnambulism*, rüyayı fiziksel olarak canlandırmaktır.", dogru: "Rüyayı canlandırmak ==REM sleep behavior disorder==dır (REM'de felç olmaz). ==Somnambulism== derin NREM uykusunda olur ve sabah genellikle hatırlanmaz." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Uyku ve uyanıklık bilincin iki türüdür; *circadian rhythm* yaklaşık 24 saatlik iç saattir. *Jet lag* ve vardiyalı çalışma onu bozar.",
            "Evreler EEG'ye göre: *beta* (uyanık) → *alpha* (gevşek) → N1 (*theta*, *hypnagogic sensations*) → N2 (*spindles*) → N3 (*delta*) → REM.",
            "*REM* paradoksaldır: dalgalar uyanık gibi, beden en gevşek; rüyalar tipik olarak burada. REM yoksunluğunda *REM rebound* olur.",
            "Gece ilerledikçe NREM (özellikle N3) kısalır, REM uzar; bir döngü ≈ 90 dakikadır.",
            "Uyku neden var: *memory consolidation* (belleği pekiştirme) ve *restoration* (tükenen kaynakları yenileme).",
            "Rüya kuramları: *activation-synthesis* (rastgele sinyallere hikâye kurma) ve *consolidation* (bellek işleme).",
            "Bozukluklar: *insomnia*, *narcolepsy*, *REM sleep behavior disorder*, *sleep apnea*, *somnambulism* (derin NREM'de).",
            "Düzenli uyku programı ve bozuklukların tedavisi gündüz performansını artırır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tabloda bir gecenin üç anında kaydedilen EEG özellikleri verilmiştir. Hangi eşleştirme doğrudur?",
      fig: { type: "table", caption: "Bir gecenin üç EEG kaydı", head: ["Kayıt", "Gözlem"], rows: [["A", "Hızlı, küçük, düzensiz dalgalar; hızlı göz hareketleri; kaslar felçli"], ["B", "Çok yavaş, yüksek genlikli dalgalar; uyandırması güç"], ["C", "Yavaşlayan dalgalar; düşer gibi sıçrayarak uyanma hissi"]] },
      opts: ["A: *NREM* 3; B: *REM*; C: *NREM* 1", "A: *REM*; B: *NREM* 3; C: *NREM* 1", "A: *REM*; B: *NREM* 1; C: *NREM* 3", "A: *NREM* 1; B: *REM*; C: *NREM* 3"],
      a: 1,
      why: "Uyanıklığa benzeyen hızlı dalgalar ve felçli kaslar REM'i; çok yavaş yüksek genlikli delta dalgaları N3'ü; düşer gibi sıçrama (hypnagogic sensation) N1'i gösterir. A en çekici yanlış: REM ile N3'ü ters eşleştiriyor." },
    { q: "Bir araştırmada gönüllüler iki gece boyunca REM dönemlerine girer girmez uyandırılıyor. Üçüncü gece uyumalarına izin verildiğinde en olası sonuç hangisidir?",
      opts: ["REM süresi her zamankinden kısa olur", "N3 evresi tamamen ortadan kalkar", "Rüyalar tamamen kesilir", "REM daha erken başlar ve daha uzun sürer"],
      a: 3,
      why: "REM'den yoksun kalan kişi sonraki uykuda REM'i daha erken ve daha uzun yaşar: REM rebound. A en çekici yanlış: yoksunluk REM'i azaltmaz, bir telafi ihtiyacı yaratır." },
    { q: "Bir öğrenci, sınavdan önceki gece çalıştığı konuların rüyasında tekrar tekrar göründüğünü söylüyor. Bu durum hangi kuramla en tutarlıdır?",
      opts: ["Bellek pekiştirme kuramı (*consolidation*)", "Beyin sapının rastgele sinyal üretmesini vurgulayan *activation-synthesis*", "Rüyanın yalnızca vücudu dinlendirdiğini savunan *restoration*", "Rüyaların yalnızca N3'te görüldüğünü savunan kuram"],
      a: 0,
      why: "Gün içi bilgilerin uyku sırasında işlenip pekiştiğini savunan bellek pekiştirme kuramı bu gözlemle uyumludur. B en çekici yanlış: activation-synthesis, rüya içeriğini rastgele sinyallerin yorumu sayar; çalışılan konuyla özel bir ilişkiyi öngörmez." },
    { q: "Bir kişi uykusunda sık sık nefesi duruyor; eşi gürültülü horlamasından yakınıyor ve kişi gündüz çok uykulu. En olası bozukluk hangisidir?",
      opts: ["*Insomnia*", "*Narcolepsy*", "*Sleep apnea*", "*REM sleep behavior disorder*"],
      a: 2,
      why: "Uykuda tekrar eden nefes durması, horlama ve gündüz uyuklama uyku apnesinin belirtileridir. B en çekici yanlış: narkolepside gün içinde ani uyku atakları olur; nefes durması ana özellik değildir." },
    { q: "İstanbul'dan Los Angeles'a uçan bir öğrenci ilk günlerde geceleri uyanık, gündüzleri çok uykulu kalıyor. Bu durumun en iyi açıklaması hangisidir?",
      opts: ["REM geri tepmesi", "Sirkadiyen ritmin yeni saat dilimiyle uyumsuz kalması", "Uyku apnesi", "Duyusal uyum (*sensory adaptation*)"],
      a: 1,
      why: "Yolculuktan sonra iç saat yerel saatle uyumsuz kalır: jet lag, sirkadiyen ritmin bozulmasıdır. A en çekici yanlış: REM rebound, REM yoksunluğundan sonraki telafi etkisidir; saat dilimi değişikliğiyle ilgili değildir." }
  ]
};
