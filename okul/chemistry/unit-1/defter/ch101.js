/* Kitora not defteri · ch101 · 1.1 Güçlü ve Zayıf Etkileşimler
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry Exam 1) + MEB 10. sınıf kimya programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch101",
  amac: "Bu konu maddeyi bir arada tutan etkileşimleri iki gruba ayırıyor: atomları bağlayan güçlü bağlar ve moleküller arasındaki zayıf etkileşimler. Enerji farkını, elektronegatifliği ve bağ ile molekülün polarlığını öğreneceksin.",
  bolumler: [
    {
      baslik: "Güçlü ve zayıf etkileşim: ne kopar, ne kopmaz?",
      kisa: "Güçlü etkileşim atomları bağlar; zayıf etkileşim molekülleri birbirine tutar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Interparticular forces", tr: "taneciklerarası etkileşimler", tanim: "Saf maddedeki tanecikler (atom, iyon ya da molekül) arasındaki çekimler. Tanecik türü kuvvetin türünü, madde kuvvetin gücünü belirler.", ornek: "Au ve Na'da atomlar, NaCl'de iyonlar, H₂O'da moleküller arasında." },
            { ikon: "⚛️", terim: "Intramolecular forces", tr: "molekül içi kuvvetler", tanim: "Bir molekülün içindeki atomları tutan kimyasal bağlar.", ornek: "H₂O'daki O–H kovalent bağları." },
            { ikon: "🧲", terim: "Intermolecular forces", tr: "moleküller arası kuvvetler", tanim: "Moleküller arasındaki çekimler; molekül içi kuvvetlerden zayıftır. Fiziksel özellikleri (hâl, erime ve kaynama noktası) belirler.", ornek: "H₂O molekülleri arasındaki hidrojen bağı." }
          ] },
        { tip: "ikili", sol: { ikon: "🔗", baslik: "Güçlü etkileşimler (*chemical bonds*)", maddeler: ["Atomlar ya da iyonlar arasında: iyonik bağ, metalik bağ ve kovalent bağ (molekülde ya da kovalent ağ katıda)", "Koparmak için çok enerji gerekir; maddenin kimliğini belirler"] },
          sag: { ikon: "🧲", baslik: "Zayıf etkileşimler (*intermolecular forces*)", maddeler: ["Moleküller (ya da tanecikler) arasında", "Çok daha az enerjiyle yenilir; hâl değişimini ve kaynama noktasını belirler"] },
          oyun: [
            { metin: "Su kaynarken H₂O molekülleri birbirinden ayrılıyor.", cevap: "sag", neden: "Moleküller arası çekim yenilir; molekülün içi bozulmaz." },
            { metin: "Suyun elektrolizinde H₂ ve O₂ gazları oluşuyor.", cevap: "sol", neden: "H–O bağları kırılır; madde değişir." },
            { metin: "Buz erirken H₂O molekülleri bozulmaz.", cevap: "sag", neden: "Yalnızca moleküller arası etkileşimler zayıflar." },
            { metin: "NaCl'deki Na⁺ ve Cl⁻ iyonlarının birbirini çekmesi.", cevap: "sol", neden: "İyonik bağ güçlü bir etkileşimdir." },
            { metin: "Naftalin (güve topu) yavaşça buharlaşıp kayboluyor.", cevap: "sag", neden: "Moleküller arası London kuvvetleri yenilir." }
          ] },
        { tip: "grafik", baslik: "1 mol su: kaynatmak mı, atomlarına ayırmak mı?", xlabel: "İşlem", ylabel: "Enerji (kJ/mol)", xmax: 4, ymax: 10,
          xticks: [{ v: 1.1, label: "Kaynama" }, { v: 2.9, label: "Atomlara ayırma" }],
          yticks: [{ v: 2, label: "200" }, { v: 4, label: "400" }, { v: 6, label: "600" }, { v: 8, label: "800" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 2, noktalar: [[0.7, 0], [1.5, 0], [1.5, 0], [0.7, 0]] },
            { id: "b2", tip: "alan", renk: 0, noktalar: [[2.5, 0], [3.3, 0], [3.3, 0], [2.5, 0]] },
            { id: "t1", tip: "yazi", x: 1.1, y: 1.0, metin: "≈ 41", gizli: true },
            { id: "t2", tip: "yazi", x: 2.9, y: 9.7, metin: "≈ 930", gizli: true }
          ],
          durumlar: [
            { metin: "Aynı 1 mol suyla iki şey yapacağız: sıvıdan gaza geçirmek ve atomlarına ayırmak. Hangisi daha çok enerji ister?" },
            { metin: "Kaynatmak: moleküller arası hidrojen bağları yenilir. Gereken enerji yaklaşık ==41 kJ.==", set: { b1: { noktalar: [[0.7, 0], [1.5, 0], [1.5, 0.41], [0.7, 0.41]] } }, goster: ["t1"] },
            { metin: "Atomlarına ayırmak: iki O–H bağı de kopar. Gereken enerji yaklaşık ==930 kJ==, yani 20 kattan fazla.", set: { b2: { noktalar: [[2.5, 0], [3.3, 0], [3.3, 9.3], [2.5, 9.3]] } }, goster: ["t2"] },
            { metin: "Bu yüzden su kaynarken molekül bozulmaz: ==hâl değişiminde zayıf etkileşimler yenilir, bağlar kırılmaz.==" }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: hâl değişimi", metin: "*When water boils, the intermolecular forces are overcome, but the covalent bonds inside the molecules stay intact.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: karşılaştırma", metin: "*Covalent and ionic bonds are much stronger than intermolecular forces.*" }
          ] }
      ]
    },
    {
      baslik: "Üç güçlü bağ: iyonik, kovalent, metalik",
      kisa: "Elektron alışverişi iyonik, paylaşımı kovalent, serbest dolaşımı metalik bağ yapar.",
      bloklar: [
        { tip: "tablo", baslik: "Güçlü bağ türleri", head: ["Bağ", "Kimler arasında", "Elektronlara ne olur?", "Örnek"], rows: [
            ["*Ionic bond*", "Metal + ametal", "Elektron metalden ametale geçer; zıt yüklü iyonlar birbirini çeker", "NaCl, MgO"],
            ["*Covalent bond*", "Ametal + ametal", "Elektronlar ortak kullanılır", "H₂O, CO₂, O₂"],
            ["*Metallic bond*", "Metal + metal", "Değerlik elektronları bütün katyonlar arasında serbestçe dolaşır (*electron sea*)", "Fe, Cu, Na"]
          ] },
        { tip: "ikili", sol: { ikon: "🧂", baslik: "*Ionic* (iyonik)", maddeler: ["Elektron alınıp verilir", "Metal + ametal"] },
          sag: { ikon: "🤝", baslik: "*Covalent* (kovalent)", maddeler: ["Elektron ortak kullanılır", "Ametal + ametal"] },
          oyun: [
            { metin: "NaCl (sofra tuzu)", cevap: "sol", neden: "Na metal, Cl ametal: elektron geçer." },
            { metin: "CO₂", cevap: "sag", neden: "C ve O ametal: elektron paylaşılır." },
            { metin: "MgO", cevap: "sol", neden: "Mg metal, O ametal: Mg²⁺ ve O²⁻ oluşur." },
            { metin: "N₂ molekülündeki üçlü bağ", cevap: "sag", neden: "Aynı iki ametal elektron paylaşır." },
            { metin: "KBr", cevap: "sol", neden: "K metal, Br ametal." }
          ] },
        { tip: "tuzak", metin: "İyonik bileşiklerde tek tek molekül yoktur; iyonlar dev bir kafes (*lattice*) oluşturur. NaCl erirken kafesteki iyonik bağlar yenilir.", yanlis: "NaCl erirken NaCl molekülleri arasındaki zayıf kuvvetler yenilir.", dogru: "NaCl'de molekül yoktur; ==iyonik bağlar== (güçlü) yenilir. Bu yüzden erime noktası yüksektir (801 °C)." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: iyonik", metin: "*Ionic bonds form between a metal and a nonmetal when electrons are transferred.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: kovalent ve metalik", metin: "*In a covalent bond, atoms share electrons. Metals conduct electricity because their valence electrons move freely.*" }
          ] }
      ]
    },
    {
      baslik: "Elektronegatiflik: elektronu kim daha çok çeker?",
      kisa: "Elektronegatiflik farkı büyüdükçe bağ polarlaşır; fark çok büyükse iyonik olur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧲", terim: "Electronegativity", tr: "elektronegatiflik", tanim: "Bir atomun bağdaki ortak elektron çiftini kendine çekme gücü. Periyodik tabloda soldan sağa ve aşağıdan yukarı artar.", ornek: "F > O > Cl ≈ N > C > H > Na (4,0 > 3,5 > 3,0 > 2,5 > 2,1 > 0,9)." },
            { ikon: "⚖️", terim: "Nonpolar covalent bond", tr: "apolar kovalent bağ", tanim: "Aynı atomlar (ya da elektronegatifliği hemen hemen aynı atomlar) arasında; elektronlar eşit paylaşılır.", ornek: "H₂, Cl₂, O₂." },
            { ikon: "↔️", terim: "Polar covalent bond", tr: "polar kovalent bağ", tanim: "Elektronegatifliği farklı atomlar arasında; elektronlar daha elektronegatif atoma yakın durur (δ⁻), diğer uç δ⁺ olur.", ornek: "H–Cl bağında Cl ucu δ⁻, H ucu δ⁺." }
          ] },
        { tip: "grafik", baslik: "ΔEN büyüdükçe iyonik karakter artar (yaklaşık model)", xlabel: "Elektronegatiflik farkı (ΔEN)", ylabel: "İyonik karakter (%)", xmax: 4, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          yticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0], [0.5, 0.6], [1, 2.2], [1.5, 4.3], [2, 6.3], [2.5, 7.9], [3, 8.9], [3.5, 9.5], [4, 9.8]] },
            { id: "h2", tip: "nokta", renk: 2, x: 0, y: 0, etiket: "H–H", gizli: true },
            { id: "ch", tip: "nokta", renk: 2, x: 0.4, y: 0.4, etiket: "C–H", gizli: true },
            { id: "hcl", tip: "nokta", renk: 3, x: 0.9, y: 1.8, etiket: "H–Cl", gizli: true },
            { id: "oh", tip: "nokta", renk: 3, x: 1.4, y: 3.9, etiket: "O–H", gizli: true },
            { id: "esik", tip: "cizgi", renk: 1, kesik: true, from: [1.7, 0], to: [1.7, 10], etiket: "≈ 1,7", gizli: true },
            { id: "nacl", tip: "nokta", renk: 1, x: 2.1, y: 6.7, etiket: "Na–Cl", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Fark büyüdükçe bağ elektronları tek tarafa kayar. Bu eğri, bağın ne kadar iyonik olduğunu gösteren yaklaşık bir modeldir." },
            { metin: "ΔEN = 0: elektronlar eşit paylaşılır. H–H ve (hemen hemen) C–H ==apolar kovalent.==", goster: ["h2", "ch"] },
            { metin: "H–Cl (ΔEN = 0,9) ve O–H (ΔEN = 1,4): elektronlar ortak ama eşit değil, ==polar kovalent.==", goster: ["hcl", "oh"] },
            { metin: "Na–Cl (ΔEN = 2,1): elektron neredeyse tamamen Cl'ye geçer, ==iyonik.== ΔEN ≈ 1,7'den büyükse bağ genelde iyonik sayılır.", goster: ["esik", "nacl"] }
          ] },
        { tip: "tuzak", metin: "Polar kovalent bağda elektron tam olarak geçmez, yalnızca bir tarafa daha yakın durur.", yanlis: "HCl'de elektron Cl'ye tamamen geçer, bu yüzden iyonik bağdır.", dogru: "Elektronlar ==ortak kullanılır ama eşit değil==: Cl δ⁻, H δ⁺. İyonik ile kovalent arasında keskin bir sınır yoktur; bir süreklilik vardır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: polar bağ", metin: "*Oxygen is more electronegative than hydrogen, so the O–H bond is polar.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: elektron kayması", metin: "*The shared electrons are pulled toward the more electronegative atom.*" }
          ] }
      ]
    },
    {
      baslik: "Bağ polar olsa da molekül apolar olabilir",
      kisa: "Molekülün polarlığı hem bağların polarlığına hem molekülün şekline bağlıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Önce bağa, sonra şekle bak", head: ["Molekül", "Şekil", "Bağlar", "Molekül"], rows: [
            ["H₂", "Doğrusal", "Apolar", "Apolar"],
            ["HCl", "Doğrusal", "Polar", "Polar"],
            ["CO₂", "Doğrusal (O=C=O), simetrik", "Polar", "Apolar (dipoller birbirini götürür)"],
            ["H₂O", "Kırık (V biçimli)", "Polar", "Polar"],
            ["NH₃", "Üçgen piramit", "Polar", "Polar"],
            ["CH₄", "Düzgün dörtyüzlü", "Çok az polar", "Apolar"],
            ["CCl₄", "Düzgün dörtyüzlü", "Polar", "Apolar (dipoller birbirini götürür)"]
          ] },
        { tip: "ikili", sol: { ikon: "🧭", baslik: "*Polar molecule* (polar molekül)", maddeler: ["Bağ dipolleri birbirini götürmez", "Bir ucu δ⁺, diğer ucu δ⁻"] },
          sag: { ikon: "⚪", baslik: "*Nonpolar molecule* (apolar molekül)", maddeler: ["Bağlar apolar ya da simetrik düzende", "Yük dağılımı dengelidir"] },
          oyun: [
            { metin: "H₂O", cevap: "sol", neden: "Kırık şekil: dipoller birbirini götürmez." },
            { metin: "CO₂", cevap: "sag", neden: "Doğrusal ve simetrik: dipoller birbirini götürür." },
            { metin: "NH₃", cevap: "sol", neden: "Üçgen piramit, simetrik değil: polar." },
            { metin: "CCl₄", cevap: "sag", neden: "Düzgün dörtyüzlü: bağ dipolleri götürülür." },
            { metin: "HCl", cevap: "sol", neden: "İki atomlu ve atomlar farklı: polar." }
          ] },
        { tip: "tuzak", metin: "Bağların polar olması molekülün polar olacağını göstermez.", yanlis: "C=O bağları polar olduğu için CO₂ molekülü polardır.", dogru: "Simetrik moleküllerde (CO₂, CCl₄) bağ dipolleri ==birbirini götürür==, molekül apolar olur. Önce bağlara, sonra şekle bak." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: simetri", metin: "*CO₂ has polar bonds, but the molecule is nonpolar because it is linear and symmetrical.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: polar molekül", metin: "*Water is a polar molecule because it is bent, so the bond dipoles do not cancel.*" }
          ] }
      ]
    },
    {
      baslik: "Dört zayıf etkileşim: kısa tanışma",
      kisa: "London, dipol-dipol, hidrojen bağı ve iyon-dipol; ayrıntıları sonraki konuda.",
      bloklar: [
        { tip: "harita", merkez: "*Intermolecular forces*", dallar: [
            { baslik: "*London dispersion*", alt: "Her atom ve molekül arasında; geçici dipol (bazen *van der Waals* da denir ama en doğru terim değil)" },
            { baslik: "*Dipole-dipole*", alt: "Kalıcı dipolü olan polar moleküller arasında" },
            { baslik: "*Hydrogen bond*", alt: "H, F/O/N'ye bağlıysa; en güçlü dipol-dipol" },
            { baslik: "*Ion-dipole*", alt: "İyon ile polar molekül arasında; NaCl'nin suda çözünmesi" }
          ] },
        { tip: "tablo", baslik: "Genel güç sıralaması (benzer büyüklükteki taneciklerde)", head: ["Etkileşim", "Kimler arasında", "Göreli güç"], rows: [
            ["*London dispersion*", "Tüm atom ve moleküller", "En zayıf (büyük moleküllerde toplamı büyür)"],
            ["*Dipole-dipole*", "Polar moleküller", "Orta"],
            ["*Hydrogen bond*", "H–F, H–O, H–N bağı olan moleküller", "Yüksek"],
            ["*Ion-dipole*", "İyon + polar molekül", "Zayıf etkileşimlerin en güçlüsü"],
            ["Kovalent / iyonik / metalik bağ", "Atomlar, iyonlar", "Hepsinden çok daha güçlü"]
          ] },
        { tip: "tuzak", metin: "Hidrojen bağının adında \"bağ\" geçer ama kimyasal bağlar kadar güçlü değildir.", yanlis: "Hidrojen bağı, H–O kovalent bağı gibi güçlü bir bağdır; su kaynarken H–O bağları kopar.", dogru: "Hidrojen bağı bir ==moleküller arası etkileşimdir==. Su kaynarken hidrojen bağları yenilir, kovalent O–H bağları yerinde kalır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: zayıf kuvvetler", metin: "*Intermolecular forces are weaker than covalent and ionic bonds.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: kaynama noktası", metin: "*The stronger the intermolecular forces, the higher the boiling point.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Güçlü etkileşimler (iyonik, kovalent, metalik bağ) atomları bağlar; zayıf etkileşimler (*intermolecular forces*) molekülleri birbirine tutar.",
            "Hâl değişiminde zayıf etkileşimler yenilir, molekülün içindeki bağlar kırılmaz (1 mol su: kaynama ≈ 41 kJ, atomlara ayırma ≈ 930 kJ).",
            "İyonik: metal + ametal, elektron geçer. Kovalent: ametal + ametal, elektron paylaşılır. Metalik: değerlik elektronları serbest.",
            "İyonik bileşikte molekül yoktur; iyonlar kafes oluşturur.",
            "*Electronegativity*: ortak elektronu çekme gücü. ΔEN = 0 → apolar; küçük fark → polar kovalent; çok büyük fark → iyonik.",
            "Polar bağ ≠ polar molekül: CO₂ ve CCl₄ simetrik olduğu için apolardır; H₂O ve NH₃ polardır.",
            "Zayıf etkileşimler: London, dipol-dipol, hidrojen bağı, iyon-dipol. Hidrojen bağı bir bağ değil, moleküller arası kuvvettir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "A student says that the bubbles rising in boiling water are H₂ and O₂ gas. Which statement is correct?",
      opts: ["Correct; the H–O bonds break when water boils and gases form", "Incorrect; the bubbles are water vapor, because boiling overcomes intermolecular forces and the H–O bonds do not break", "Correct; when hydrogen bonds break, H₂ and O₂ are released", "Incorrect; the bubbles are air and have nothing to do with water"],
      a: 1,
      why: "Kaynama fiziksel bir değişimdir: moleküller arası etkileşimler (hidrojen bağları) yenilir, kovalent H–O bağları yerinde kalır; kabarcıklar su buharıdır. A en çekici yanlış şık: hidrojen bağını kovalent bağla karıştırır." },
    { q: "The table gives the electronegativity values of some atoms. Which of the following covalent bonds is the most polar?",
      fig: { type: "table", caption: "Electronegativity", head: ["Atom", "H", "O", "Cl"], rows: [["EN", "2.1", "3.5", "3.0"]] },
      opts: ["H–H", "H–Cl", "O–Cl", "O–H"],
      a: 3,
      why: "ΔEN değerleri: H–H = 0, H–Cl = 0,9, O–Cl = 0,5, O–H = 1,4. En büyük fark O–H'dedir, en polar bağ odur. B en çekici yanlış şık: Cl bir atom olarak elektronegatiftir ama farkın büyüklüğü belirleyicidir." },
    { q: "Which of the following molecules contains polar bonds but is nonpolar overall?",
      opts: ["H₂O", "NH₃", "HCl", "CCl₄"],
      a: 3,
      why: "CCl₄ düzgün dörtyüzlü ve simetriktir; polar C–Cl bağlarının dipolleri birbirini götürür, molekül apolar olur. A en çekici yanlış şık: H₂O da polar bağlıdır ama kırık şekil yüzünden polardır." },
    { q: "The graph shows the energy needed for two processes with 1 mol of water. Which conclusion can be drawn from the graph?",
      fig: { type: "bar", cats: ["Boiling", "Breaking into atoms"], series: [{ name: "Energy for 1 mol H₂O", values: [41, 930] }], ylabel: "kJ/mol" },
      opts: ["Overcoming hydrogen bonds takes much less energy than breaking the O–H bonds", "O–H bonds break while water boils", "Intermolecular forces are stronger than covalent bonds", "Both processes affect the same type of bond"],
      a: 0,
      why: "Kaynama ≈ 41 kJ, atomlarına ayırma ≈ 930 kJ: moleküller arası etkileşimler kovalent bağlardan çok daha zayıftır. C en çekici yanlış şık: ilişkiyi tam tersine çevirir." },
    { q: "Which interactions are overcome when table salt (NaCl) melts?",
      opts: ["London forces between NaCl molecules", "Ionic bonds between Na⁺ and Cl⁻ ions", "Hydrogen bonds", "Covalent bonds between Na and Cl atoms"],
      a: 1,
      why: "NaCl metal + ametal bileşiğidir; molekül yoktur, iyon kafesi vardır. Erirken iyonlar arasındaki güçlü iyonik bağlar yenilir (801 °C). A en çekici yanlış şık: NaCl için \"molekül\" kavramı geçerli değildir." }
  ]
};
