/* Kitora not defteri · py308 · 3.8 Edimsel Koşullanma
   Kaynak: AP Psychology CED (2024) Topic 3.8. Blok türleri: /ap/_kit/defter.js başı.
   Not: pekiştirme tarifesi grafiği birikimli kayıt biçiminde şematiktir (eğim = tepki hızı). */
window.DEFTER = {
  slug: "py308",
  amac: "Bu konu davranışların sonuçlarıyla öğrenildiğini anlatıyor. Etki yasasını, pekiştirme ve cezanın 2×2 tablosunu, şekillendirmeyi, batıl davranışı, öğrenilmiş çaresizliği ve pekiştirme tarifelerini (grafikleriyle) öğreneceksin.",
  bolumler: [
    {
      baslik: "Edimsel koşullanma ve etki yasası",
      kisa: "Pekiştirilen davranış tekrarlanır, cezalanan davranış azalır.",
      bloklar: [
        { tip: "adimlar", baslik: "Thorndike'ın bulmaca kutusu", adimlar: [
            { baslik: "Düzenek", metin: "Aç bir kedi kutuya konur; dışarıda balık var, kutunun kapısı bir kolla açılır." },
            { baslik: "Deneme yanılma", metin: "Kedi rastgele hareketler yapar; kolu tesadüfen çeker, kapı açılır ve balığa ulaşır." },
            { baslik: "Tekrar", metin: "Her denemede kola dokunma süresi kısalır." },
            { baslik: "Etki yasası (*Law of Effect*)", metin: "==Pekiştirici sonucu olan davranışlar tekrarlanır==; cezalandırıcı sonucu olanların tekrarı azalır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎬", terim: "Operant conditioning", tr: "edimsel koşullanma", tanim: "Bir davranışı, ardından gelen sonuçla (pekiştirme ya da ceza) ilişkilendirerek öğrenme. Burada organizma çevresine etki eder (*operate*).", ornek: "Ders çalışınca harçlığın artması ve bu yüzden daha çok çalışmak." }
          ] },
        { tip: "ikili", sol: { ikon: "🔔", baslik: "Klasik koşullanma", maddeler: ["Uyaran → tepki: refleks gibi, istemsiz", "Önce uyaran gelir (CS → CR)"] },
          sag: { ikon: "🎯", baslik: "Edimsel koşullanma", maddeler: ["Davranış → sonuç: istemli davranış", "Sonuç, davranışın tekrarını belirler"] },
          oyun: [
            { metin: "Zil sesini duyunca ağzının sulanması.", cevap: "sol", neden: "İstemsiz tepki, iki uyaranın çağrışımı: klasik." },
            { metin: "Ders çalışınca verilen ödül yüzünden daha sık ders çalışmak.", cevap: "sag", neden: "İstemli davranış, sonucu ile pekiştirilmiş: edimsel." },
            { metin: "Dişçi matkabının sesini duyunca kalbinin hızlanması.", cevap: "sol", neden: "İstemsiz duygusal tepki: klasik." },
            { metin: "Köpeğin “otur” komutunda oturup mama kazanması ve giderek daha sık oturması.", cevap: "sag", neden: "Davranış ödüllenmiş: edimsel." }
          ] }
      ]
    },
    {
      baslik: "Pekiştirme ve ceza: 2×2 tablo",
      kisa: "Pozitif eklemek, negatif çıkarmak; pekiştirme artırır, ceza azaltır.",
      bloklar: [
        { tip: "tablo", baslik: "Dört kutu, iki soru", head: ["", "Bir şey EKLENİR (pozitif)", "Bir şey ÇIKARILIR (negatif)"], rows: [
            ["Davranış ARTAR (pekiştirme)", "*Positive reinforcement*: hoş bir şey eklenir. Ödevi bitirince tatlı yapılması", "*Negative reinforcement*: nahoş bir şey kalkar. Kemeri takınca uyarı sesinin susması"],
            ["Davranış AZALIR (ceza)", "*Positive punishment*: nahoş bir şey eklenir. Geç kalınca ek ödev verilmesi", "*Negative punishment*: hoş bir şey kalkar. Kural çiğnenince telefonun elinden alınması"]
          ], not: "Önce davranış arttı mı azaldı mı bak (pekiştirme mi, ceza mı?), sonra bir şey eklendi mi çıkarıldı mı bak (pozitif mi, negatif mi?)." },
        { tip: "ikili", sol: { ikon: "⬆️", baslik: "Pekiştirme (*reinforcement*)", maddeler: ["Davranışın tekrarlanma olasılığı ARTAR", "Pozitif ya da negatif olabilir"] },
          sag: { ikon: "⬇️", baslik: "Ceza (*punishment*)", maddeler: ["Davranışın tekrarlanma olasılığı AZALIR", "Pozitif ya da negatif olabilir"] },
          oyun: [
            { metin: "Ece ödevini zamanında yapınca annesi tatlı yapıyor; Ece artık hep zamanında yapıyor.", cevap: "sol", neden: "Hoş bir şey eklendi, davranış arttı: *positive reinforcement*." },
            { metin: "Can derse geç kalınca telefonu alınıyor; artık geç kalmıyor.", cevap: "sag", neden: "Hoş bir şey çıkarıldı, davranış azaldı: *negative punishment*." },
            { metin: "Mert kemerini takınca arabadaki rahatsız edici uyarı sesi duruyor; artık hep kemer takıyor.", cevap: "sol", neden: "Nahoş bir şey kalktı, davranış arttı: *negative reinforcement*." },
            { metin: "Selin sınıfta bağırınca ek görev alıyor; bağırması azalıyor.", cevap: "sag", neden: "Nahoş bir şey eklendi, davranış azaldı: *positive punishment*." }
          ] },
        { tip: "tuzak", metin: "“Negatif” kelimesi “kötü” ya da “ceza” demek değildir; yalnızca bir şeyin çıkarıldığını gösterir.", yanlis: "*Negative reinforcement* bir tür cezadır.", dogru: "*Negative reinforcement* ==davranışı artırır== (nahoş bir şey kalkar), yani pekiştirmedir. Ceza davranışı ==azaltır==." }
      ]
    },
    {
      baslik: "Pekiştireç türleri, ayırt etme ve genelleme",
      kisa: "Birincil pekiştireç biyolojik, ikincil pekiştireç öğrenilmiştir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🍞", terim: "Primary reinforcer", tr: "birincil pekiştireç", tanim: "Biyolojik bir ihtiyacı karşıladığı için öğrenmeden pekiştirici olan şey.", ornek: "Yemek, su, uyku." },
            { ikon: "🏅", terim: "Secondary reinforcer", tr: "ikincil (koşullu) pekiştireç", tanim: "Birincil pekiştireçle ya da başka şeylerle ilişkilendirilerek pekiştirici hale gelen şey.", ornek: "Para, not, jeton, beğeni sayısı." },
            { ikon: "🎯", terim: "Discrimination (operant)", tr: "ayırt etme", tanim: "Davranışın yalnızca pekiştirilen durumda ya da işarette ortaya çıkması.", ornek: "Köpek yalnızca “otur” komutunda oturur, “yat” komutunda oturmaz." },
            { ikon: "🌐", terim: "Generalization (operant)", tr: "genelleme", tanim: "Pekiştirilen davranışın benzer durum ve işaretlerde de gösterilmesi.", ornek: "Köpek başka bir insanın “otur” komutunda da oturur." }
          ] },
        { tip: "ikili", sol: { ikon: "🍞", baslik: "*Primary reinforcer*", maddeler: ["Biyolojik ihtiyaç; öğrenme gerekmez"] },
          sag: { ikon: "🏅", baslik: "*Secondary reinforcer*", maddeler: ["Öğrenilmiş değer; başka bir şeyle ilişkilendirilerek pekiştirici olur"] },
          oyun: [
            { metin: "Aç bir öğrencinin sandviç yemesi.", cevap: "sol", neden: "Biyolojik ihtiyaç: birincil." },
            { metin: "Defterine yapıştırılan yıldız çıkartması.", cevap: "sag", neden: "Değerini öğrenmiş: ikincil." },
            { metin: "Susayan sporcunun su içmesi.", cevap: "sol", neden: "Biyolojik ihtiyaç: birincil." },
            { metin: "Mobil oyundaki puan ve rozetler.", cevap: "sag", neden: "Öğrenilmiş değer: ikincil." }
          ] }
      ]
    },
    {
      baslik: "Şekillendirme ve içgüdüsel sapma",
      kisa: "Şekillendirme hedef davranışa yaklaşan adımları sırayla pekiştirir.",
      bloklar: [
        { tip: "adimlar", baslik: "Pamuk'a el sıkışmayı öğretmek", adimlar: [
            { baslik: "1", metin: "Pamuk ön patisini biraz kıpırdatınca mama verilir." },
            { baslik: "2", metin: "Artık yalnızca patisini yerden kaldırınca mama verilir." },
            { baslik: "3", metin: "Sonra yalnızca patisini uzatınca mama verilir." },
            { baslik: "4", metin: "Sonunda yalnızca elini tutunca mama verilir: hedef davranış tamam." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🪜", terim: "Shaping", tr: "şekillendirme", tanim: "Hedef davranışa giderek daha çok benzeyen yaklaşık davranışları sırayla pekiştirmek (*successive approximations*).", ornek: "Yukarıdaki Pamuk örneği." },
            { ikon: "🦝", terim: "Instinctive drift", tr: "içgüdüsel sapma", tanim: "Hayvanın, pekiştirmeyle öğretilen davranıştan kendi doğal içgüdüsel davranışına kayması. Her davranış pekiştirmeyle şekillendirilemez.", ornek: "Rakunlara jeton atmayı öğretmeye çalışırken jetonu atmak yerine yemek yıkar gibi ovuşturmaları." }
          ] },
        { tip: "tuzak", metin: "Şekillendirmede tek bir basamak yoktur; hedef davranış baştan beklenmez.", yanlis: "Şekillendirme, yalnızca nihai davranış gerçekleştiğinde ödül vermektir.", dogru: "Önce ==yaklaşık davranışlar== pekiştirilir; ölçüt giderek hedefe yaklaştırılır. Yetersiz kalan yer ==içgüdüsel sapmadır==: biyoloji sınır koyar." }
      ]
    },
    {
      baslik: "Batıl davranış ve öğrenilmiş çaresizlik",
      kisa: "Sonuç davranışla ilgisiz de olsa pekiştirebilir; kontrolsüzlük çaresizlik öğretir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧿", terim: "Superstitious behavior", tr: "batıl davranış", tanim: "Bir sonuç, kendisiyle ilgisiz bir davranışı tesadüfen pekiştirdiğinde o davranışın tekrarlanması.", ornek: "Güvercinler yemek rastgele verilirken tam o anda yaptıkları hareketi (dönmek gibi) tekrarlar; öğrenci hep aynı kalemle sınava girer." },
            { ikon: "🧊", terim: "Learned helplessness", tr: "öğrenilmiş çaresizlik", tanim: "Organizmanın, nahoş sonuçları kontrol edemeyeceğini öğrenip çaba göstermeyi bırakması.", ornek: "Ne yaparsa yapsın not alamayan öğrencinin derslerden soğuması." }
          ] },
        { tip: "adimlar", baslik: "Seligman ve Maier: öğrenilmiş çaresizlik deneyi", adimlar: [
            { baslik: "1 · Kaçılamayan şok", metin: "Bir grup köpek kaçamayacakları hafif şoklara maruz kalır; kontrol grubu şok görmez." },
            { baslik: "2 · Yeni durum", metin: "Köpekler kaçışın mümkün olduğu bir kutuya konur; engelin üstünden atlayınca şok durur." },
            { baslik: "3 · Sonuç", metin: "Kontrol grubu hemen atlar. Kaçılamayan şok görenlerin çoğu kaçmayı denemeden yatıp şoku bekler." },
            { baslik: "4 · Yorum", metin: "Önceki deneyim onlara “yaptığım hiçbir şey sonucu değiştirmiyor” öğretmiştir." }
          ] },
        { tip: "tuzak", metin: "Çaresizlik, tembellik ya da yeteneksizlik değil, kontrolsüzlük deneyiminin öğrenilmesidir.", yanlis: "Kötü bir deneyim yaşayan canlı sonraki durumda tembel olduğu için çaba göstermez.", dogru: "*Learned helplessness* ==kontrol edemediğini öğrenmektir==; kaçış mümkün olduğunda bile ==denememeye== yol açar." }
      ]
    },
    {
      baslik: "Pekiştirme tarifeleri",
      kisa: "Pekiştirme ya her doğru davranışta ya da sayıya veya zamana göre verilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✅", terim: "Continuous reinforcement", tr: "sürekli pekiştirme", tanim: "Her doğru davranışın pekiştirilmesi. Öğrenme hızlıdır, ama pekiştirme kesilince davranış hızla söner.", ornek: "Her doğru cevaba bir puan." },
            { ikon: "🎲", terim: "Partial reinforcement", tr: "kısmi pekiştirme", tanim: "Davranışın yalnızca bir kısmının pekiştirilmesi. Sayıya (oran) ya da zamana (aralık) göre, sabit ya da değişken olabilir; davranış sönmeye daha dirençlidir.", ornek: "Slot makinesi, her cumartesi harçlığı." }
          ] },
        { tip: "tablo", baslik: "Dört kısmi pekiştirme tarifesi", head: ["", "Sabit (*Fixed*)", "Değişken (*Variable*)"], rows: [
            ["Oran (*Ratio*): davranış SAYISINA göre", "*FR*: kantinde her 5 tostta bir bedava tost", "*VR*: oyunda nadir eşyanın kaç denemede düşeceğinin belli olmaması"],
            ["Aralık (*Interval*): ZAMANA göre", "*FI*: her cuma 15.00'te harçlık", "*VI*: telefona rastgele zamanlarda mesaj gelmesi"]
          ] },
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*Ratio*", maddeler: ["Davranış sayısı belirler"] },
          sag: { ikon: "⏱️", baslik: "*Interval*", maddeler: ["Geçen zaman belirler (zamanı doldurduktan sonraki ilk doğru davranış)"] },
          oyun: [
            { metin: "Her 10 soruyu çözünce 1 mola hakkı kazanmak.", cevap: "sol", neden: "Sayıya göre: oran." },
            { metin: "Her cumartesi günü harçlık almak.", cevap: "sag", neden: "Zamana göre: aralık." },
            { metin: "Sadakat kartında 8. tostun bedava olması.", cevap: "sol", neden: "Sayıya göre: oran." },
            { metin: "Hocanın her pazartesi sabahı küçük bir quiz yapması.", cevap: "sag", neden: "Zamana göre: aralık." }
          ] }
      ]
    },
    {
      baslik: "Pekiştirme tarifelerinin grafiği",
      kisa: "Eğim tepki hızını gösterir; her tarifenin kendine özgü bir deseni vardır.",
      bloklar: [
        { tip: "grafik", baslik: "Birikimli kayıt: dört tarifenin deseni (şematik)", xlabel: "Zaman", ylabel: "Toplam tepki", xmax: 11, ymax: 10,
          ogeler: [
            { id: "FR", tip: "egri", renk: 0, noktalar: [[0, 0], [1.4, 2], [2.1, 2], [3.5, 4], [4.2, 4], [5.6, 6], [6.3, 6], [7.7, 8], [8.4, 8], [10, 9.2]], etiket: "FR" },
            { id: "VR", tip: "egri", renk: 1, noktalar: [[0, 0], [2.5, 2.4], [5, 4.9], [7.5, 7.3], [10, 9.8]], etiket: "VR", gizli: true },
            { id: "FI", tip: "egri", renk: 2, noktalar: [[0, 0], [1.2, 0.1], [2.2, 0.6], [3.2, 1.4], [3.4, 1.4], [4.4, 1.5], [5.4, 2], [6.4, 2.8], [6.6, 2.8], [7.6, 2.9], [8.6, 3.5], [10, 4.6]], etiket: "FI", gizli: true },
            { id: "VI", tip: "egri", renk: 3, noktalar: [[0, 0], [1, 0.6], [2.5, 1.5], [4, 2.2], [5.5, 3.2], [7, 3.9], [8.5, 4.9], [10, 5.7]], etiket: "VI", gizli: true }
          ],
          durumlar: [
            { metin: "**FR** (sabit oran): yüksek hızlı tepki patlamaları ve her pekiştirmeden sonra kısa bir duraklama: ==merdiven== deseni.", gizle: ["VR", "FI", "VI"] },
            { metin: "**VR** (değişken oran): ==en dik ve düzgün== çizgi. Ne zaman pekiştirileceği bilinmediğinden duraklama yoktur; en yüksek tepki hızı (slot makinesi).", goster: ["VR"] },
            { metin: "**FI** (sabit aralık): pekiştirmeden hemen sonra tepki azalır, bir sonraki pekiştirme zamanı yaklaşırken artar: ==tarak (*scalloped*) deseni==.", goster: ["FI"] },
            { metin: "**VI** (değişken aralık): ==düzgün ve orta eğimli== çizgi; ne zaman pekiştirileceği bilinmediği için sürekli ve sakin bir tepki.", goster: ["VI"] }
          ] },
        { tip: "tuzak", metin: "Grafiği okurken eğimin tepki hızı olduğunu unutma: kayıtta dik çizgi “çok tepki”, düz çizgi “az tepki” demektir. Çizgi hiçbir zaman aşağı inmez, çünkü toplam birikir.", yanlis: "Tarak desenindeki düz kısımlar tepkinin tamamen sönmesidir.", dogru: "Düz kısımlar ==duraklamadır== (tepki yok), toplam azalmaz. Sabit tarifeler duraklama gösterir; ==değişken tarifeler düzgündür==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Edimsel koşullanma davranışı sonucuyla ilişkilendirir; etki yasası: pekiştirilen davranış artar, cezalanan azalır.",
            "Pekiştirme davranışı artırır, ceza azaltır; pozitif = bir şey eklenir, negatif = bir şey çıkarılır. *Negative reinforcement* ceza değildir.",
            "Birincil pekiştireç biyolojiktir (yemek, su); ikincil pekiştireç öğrenilmiştir (para, not, jeton).",
            "Operant ortamda da *discrimination* (yalnızca işarette tepki) ve *generalization* (benzer işaretlerde tepki) görülür.",
            "*Shaping*: yaklaşık davranışları sırayla pekiştirmek; *instinctive drift* hayvanın içgüdüsel davranışa kaymasıdır.",
            "*Superstitious behavior*: sonucun ilgisiz bir davranışı tesadüfen pekiştirmesi; *learned helplessness*: kontrolsüzlük deneyiminden çaba göstermemeyi öğrenmek.",
            "Sürekli pekiştirme her doğru davranışı, kısmi pekiştirme sayıyı (FR, VR) ya da zamanı (FI, VI) ödüllendirir.",
            "Grafikte FR merdiven, VR dik ve düzgün, FI tarak (*scalloped*), VI düzgün ve orta eğimlidir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Mert arabaya bindiğinde kemerini takınca can sıkıcı uyarı sesi susuyor ve Mert artık hep kemerini takıyor. Bu durum aşağıdakilerden hangisidir?",
      opts: ["*Positive reinforcement*", "*Negative reinforcement*", "*Positive punishment*", "*Negative punishment*"],
      a: 1,
      why: "Nahoş bir şey (uyarı sesi) kalktığı ve davranış arttığı için bu *negative reinforcement*tir. En çekici yanlış şık D: *negative punishment* hoş bir şeyin çıkarılmasıyla davranışın azalmasıdır; burada davranış artıyor." },
    { q: "Bir öğretmen, derse geç kalan öğrencinin teneffüs süresinden 5 dakika alıyor ve öğrencinin geç kalma sıklığı azalıyor. Bu uygulama nasıl adlandırılır?",
      opts: ["*Positive reinforcement*", "*Negative reinforcement*", "*Positive punishment*", "*Negative punishment*"],
      a: 3,
      why: "Hoş bir şey (teneffüs süresi) çıkarıldı ve davranış azaldı: *negative punishment*. En çekici yanlış şık C: *positive punishment* nahoş bir şeyin eklenmesini gerektirir, burada bir şey eklenmedi." },
    { q: "Grafikte iki farklı pekiştirme tarifesi altında toplam tepki sayısı gösterilmiştir. A hayvanı ödülden hemen sonra duraklayıp bir sonraki ödüle yaklaşırken hızlanmakta; B hayvanı ise dik ve düzgün bir çizgi izlemektedir. A ve B hangi tarifelere en uygundur?",
      fig: { type: "graph", xlabel: "Zaman", ylabel: "Toplam tepki", xmax: 11, ymax: 10, lines: [{ from: [0, 0], to: [1.2, 0.1], color: 0 }, { from: [1.2, 0.1], to: [3.2, 1.6], color: 0 }, { from: [3.2, 1.6], to: [4.4, 1.7], color: 0 }, { from: [4.4, 1.7], to: [6.4, 3.2], color: 0 }, { from: [6.4, 3.2], to: [7.6, 3.3], color: 0 }, { from: [7.6, 3.3], to: [10, 5], color: 0, label: "A" }, { from: [0, 0], to: [10, 9.5], color: 1, label: "B" }] },
      opts: ["A: *Fixed interval*, B: *Variable ratio*", "A: *Variable interval*, B: *Fixed ratio*", "A: *Fixed ratio*, B: *Variable interval*", "A: *Variable ratio*, B: *Fixed interval*"],
      a: 0,
      why: "Ödül sonrası duraklama ve yaklaşırken artan hız tarak (*scalloped*) desenidir: sabit aralık. Dik ve düzgün çizgi, ne zaman ödül geleceği bilinmeyen değişken orandır. En çekici yanlış şık B: değişken aralık düzgün ve orta eğimli bir çizgi verir, A'daki duraklamaları açıklamaz; sabit oran da ödül sonrası duraklama gösterir, B'nin kesintisiz dik çizgisine uymaz." },
    { q: "Bir grup köpek önce kaçamayacakları şoklara maruz bırakılıyor. Daha sonra kaçışın mümkün olduğu bir kutuya konduklarında çoğu kaçmayı denemeden yatıp şoku bekliyor, kontrol grubu ise hemen kaçıyor. Bu sonuç en iyi hangi kavramı örnekler?",
      opts: ["*Shaping*", "*Instinctive drift*", "*Learned helplessness*", "*Superstitious behavior*"],
      a: 2,
      why: "Kontrol edemeyeceklerini öğrenen köpekler, kaçış mümkünken bile denemedi: öğrenilmiş çaresizlik. En çekici yanlış şık D: batıl davranış, ilgisiz bir davranışın tesadüfen pekiştirilmesidir; burada pekiştirme değil kontrolsüz nahoş uyaran var." },
    { q: "Bir antrenör, yunusa halkadan atlamayı öğretmek için önce yalnızca suyun yüzeyine çıkmasını, sonra biraz daha yükseğe çıkmasını ve en sonunda halkadan geçmesini balıkla ödüllendiriyor. Bu teknik nedir?",
      opts: ["Klasik koşullanmada genelleme", "*Shaping*: hedef davranışa yaklaşan adımların sırayla pekiştirilmesi", "*Instinctive drift*", "*Spontaneous recovery*"],
      a: 1,
      why: "Hedefe giderek yaklaşan davranışların sırayla pekiştirilmesi şekillendirmedir. En çekici yanlış şık C: içgüdüsel sapma, hayvanın öğretilen davranışı bırakıp doğal içgüdüsel davranışa kaymasıdır; burada hayvan hedef davranışa ilerliyor." }
  ]
};
