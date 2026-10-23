/* Kitora not defteri · ch204 · 2.4 Yükseltgenme ve İndirgenme
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry Exam 2) + MEB 10. sınıf kimya programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch204",
  amac: "Bu konu elektron aktarımıyla yürüyen tepkimeleri anlatıyor: yükseltgenme ve indirgenme, yükseltgenme basamağı bulma, yükseltgen ve indirgen madde, hangi tepkimenin redoks olduğu. Bir tepkimede elektronun kimden kime gittiğini bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Yükseltgenme ve indirgenme: elektron kimde?",
      kisa: "Elektron veren yükseltgenir, alan indirgenir; ikisi birlikte olur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➖", terim: "Oxidation", tr: "yükseltgenme", tanim: "Elektron kaybı; yükseltgenme basamağı artar.", ornek: "Zn → Zn²⁺ + 2e⁻" },
            { ikon: "➕", terim: "Reduction", tr: "indirgenme", tanim: "Elektron kazancı; yükseltgenme basamağı azalır.", ornek: "Cu²⁺ + 2e⁻ → Cu" },
            { ikon: "🔁", terim: "Redox reaction", tr: "redoks tepkimesi", tanim: "Yükseltgenme ve indirgenmenin birlikte olduğu tepkime; verilen elektron sayısı alınana eşittir.", ornek: "Zn + Cu²⁺ → Zn²⁺ + Cu" },
            { ikon: "🔋", terim: "Oxidizing agent", tr: "yükseltgen madde", tanim: "Başka maddeyi yükselten madde; kendisi elektron alır, yani indirgenir.", ornek: "Zn + Cu²⁺ tepkimesinde Cu²⁺." },
            { ikon: "⚡", terim: "Reducing agent", tr: "indirgen madde", tanim: "Başka maddeyi indirgeyen madde; kendisi elektron verir, yani yükseltgenir.", ornek: "Zn + Cu²⁺ tepkimesinde Zn." }
          ] },
        { tip: "ikili", sol: { ikon: "➖", baslik: "*Oxidation* (yükseltgenme)", maddeler: ["Elektron kaybı", "Yükseltgenme basamağı artar"] },
          sag: { ikon: "➕", baslik: "*Reduction* (indirgenme)", maddeler: ["Elektron kazancı", "Yükseltgenme basamağı azalır"] },
          oyun: [
            { metin: "Na → Na⁺ + e⁻", cevap: "sol", neden: "Elektron veriyor: yükseltgenme." },
            { metin: "Cl₂ + 2e⁻ → 2Cl⁻", cevap: "sag", neden: "Elektron alıyor: indirgenme." },
            { metin: "Bir atomun yükseltgenme basamağı +2'den +4'e çıkıyor.", cevap: "sol", neden: "Basamak artıyor: yükseltgenme." },
            { metin: "Fe³⁺ + e⁻ → Fe²⁺", cevap: "sag", neden: "Elektron alınıyor, basamak +3'ten +2'ye düşüyor." },
            { metin: "Mg → Mg²⁺ + 2e⁻", cevap: "sol", neden: "İki elektron veriyor." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: tanım (OIL RIG)", metin: "*Oxidation Is Loss of electrons and Reduction Is Gain of electrons.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: ajanlar", metin: "*The reducing agent is oxidized and the oxidizing agent is reduced.*" }
          ] }
      ]
    },
    {
      baslik: "Yükseltgenme basamağı (yük) belirleme",
      kisa: "Yükseltgenme basamaklarının toplamı, taneciğin yüküne eşit olmalıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Yükseltgenme basamağı kuralları", head: ["Kural", "Örnek"], rows: [
            ["Serbest elementte 0", "Na, O₂, Fe, S₈ → 0"],
            ["Tek atomlu iyonda yük = basamak", "Cl⁻ → −1; Al³⁺ → +3"],
            ["Grup 1: +1; grup 2: +2", "NaCl'de Na +1; MgO'da Mg +2"],
            ["Oksijen genelde −2", "H₂O'da O −2"],
            ["Hidrojen genelde +1", "HCl'de H +1"],
            ["Halojenler bileşikte genelde −1", "NaCl'de Cl −1"],
            ["Toplam = bileşiğin ya da iyonun yükü", "SO₄²⁻: S + 4(−2) = −2 → S = +6"]
          ] },
        { tip: "ornek", baslik: "H₂SO₄, KMnO₄ ve Cr₂O₇²⁻", durum: "H₂SO₄'te S'nin, KMnO₄'te Mn'nin ve Cr₂O₇²⁻ iyonunda Cr'nin yükseltgenme basamağını bul.",
          adimlar: ["H₂SO₄ (nötr): 2(+1) + S + 4(−2) = 0 → S = +6.", "KMnO₄ (nötr): (+1) + Mn + 4(−2) = 0 → Mn = +7.", "Cr₂O₇²⁻ (yük −2): 2Cr + 7(−2) = −2 → 2Cr = +12 → Cr = +6."],
          sonuc: "==S = +6, Mn = +7, Cr = +6.== Cr₂O₇²⁻'da toplam +12'yi iki Cr atomuna böl." },
        { tip: "tuzak", metin: "Kural \"genelde\" der; peroksit ve metal hidrürleri istisnadır.", yanlis: "Oksijen her bileşikte −2, hidrojen her bileşikte +1'dir.", dogru: "H₂O₂'de O ==−1== (2(+1) + 2(−1) = 0); NaH gibi metal hidrürlerde H ==−1==." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: serbest element", metin: "*The oxidation number of a free element is zero.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: toplam", metin: "*The sum of the oxidation numbers in a neutral compound is zero, and in an ion it equals the charge.*" }
          ] }
      ]
    },
    {
      baslik: "Basamak yukarı mı, aşağı mı? Elektronun yolu",
      kisa: "Basamak arttıkça yükseltgenme, azaldıkça indirgenme gerçekleşir.",
      bloklar: [
        { tip: "grafik", baslik: "Kükürdün basamak merdiveni", xlabel: "S'nin yükseltgenme basamağı", ylabel: "Madde", xmax: 10, ymax: 7,
          xticks: [{ v: 1, label: "−2" }, { v: 3, label: "0" }, { v: 5, label: "+2" }, { v: 7, label: "+4" }, { v: 9, label: "+6" }], yticks: [],
          ogeler: [
            { id: "h2s", tip: "nokta", renk: 3, x: 1, y: 2, etiket: "H₂S" },
            { id: "s", tip: "nokta", renk: 1, x: 3, y: 2, etiket: "S", gizli: true },
            { id: "so2", tip: "nokta", renk: 1, x: 7, y: 2, etiket: "SO₂", gizli: true },
            { id: "h2so4", tip: "nokta", renk: 2, x: 9, y: 2, etiket: "H₂SO₄", gizli: true },
            { id: "a1", tip: "ok", renk: 0, from: [1, 4], to: [3, 4], gizli: true },
            { id: "t1", tip: "yazi", x: 2, y: 4.8, metin: "2e⁻ verir", gizli: true },
            { id: "a2", tip: "ok", renk: 0, from: [3, 4], to: [7, 4], gizli: true },
            { id: "t2", tip: "yazi", x: 5, y: 4.8, metin: "4e⁻ verir", gizli: true },
            { id: "a3", tip: "ok", renk: 0, from: [7, 4], to: [9, 4], gizli: true },
            { id: "t3", tip: "yazi", x: 8, y: 4.8, metin: "2e⁻ verir", gizli: true },
            { id: "son", tip: "yazi", x: 5, y: 6.3, metin: "sağa: yükseltgenme · sola: indirgenme", gizli: true }
          ],
          durumlar: [
            { metin: "H₂S'te kükürdün yükseltgenme basamağı ==−2==: bu merdivenin en alt basamağı (en indirgenmiş hâl)." },
            { metin: "H₂S → S: basamak −2'den 0'a çıktı. Kükürt ==2 elektron verdi, yükseltgendi.==", goster: ["s", "a1", "t1"] },
            { metin: "S → SO₂: 0'dan +4'e. ==4 elektron verdi==, yine yükseltgendi.", goster: ["so2", "a2", "t2"] },
            { metin: "SO₂ → H₂SO₄: +4'ten +6'ya. 2 elektron daha verdi; +6 en yüksek basamak.", goster: ["h2so4", "a3", "t3"] },
            { metin: "Okları ters çevirirsen olay tersine döner: ==basamak azalırsa indirgenme==, elektron alınır.", goster: ["son"] }
          ] },
        { tip: "ornek", baslik: "Yükseltgenen ve indirgenen kim?", durum: "2Mg + O₂ → 2MgO ve CH₄ + 2O₂ → CO₂ + 2H₂O tepkimelerinde yükseltgenen, indirgenen, yükseltgen ve indirgen maddeyi bul.",
          adimlar: ["2Mg + O₂ → 2MgO: Mg 0 → +2 (2e⁻ verir, yükseltgenir); O₂ 0 → −2 (indirgenir).", "CH₄ + 2O₂ → CO₂ + 2H₂O: CH₄'te H +1 olduğundan C = −4; CO₂'de C = +4. C 8 e⁻ verir, yükseltgenir.", "H +1 → +1 değişmez; O₂ 0 → −2 indirgenir."],
          sonuc: "==Mg ve CH₄ indirgen madde== (yükseltgenir); ==O₂ yükseltgen madde== (indirgenir). İki tepkimede de elektronu O₂ alır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: yükseltgenme", metin: "*Magnesium is oxidized because its oxidation number increases from 0 to +2.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: indirgenme", metin: "*Oxygen is reduced because it gains electrons and its oxidation number decreases from 0 to −2.*" }
          ] }
      ]
    },
    {
      baslik: "Hangi tepkime redoks?",
      kisa: "Herhangi bir atomun yükseltgenme basamağı değişiyorsa tepkime redokstur.",
      bloklar: [
        { tip: "tablo", baslik: "Tepkime türü ve redoks", head: ["Tür", "Redoks mu?", "Neden?"], rows: [
            ["Tek yer değiştirme", "Her zaman", "Element iyona, iyon elemente dönüşür (Zn + Cu²⁺)."],
            ["Yanma", "Her zaman", "O₂ elektron alır: 0 → −2."],
            ["Sentez / ayrışma", "Serbest element varsa", "Element 0 ile bileşik arasında basamak değiştirir."],
            ["Çift yer değiştirme", "Hayır", "İyonlar yer değiştirir; hiçbir basamak değişmez."]
          ] },
        { tip: "ikili", sol: { ikon: "🔁", baslik: "Redoks", maddeler: ["Bir atomun basamağı değişir", "Elektron aktarımı var"] },
          sag: { ikon: "🚫", baslik: "Redoks değil", maddeler: ["Hiçbir basamak değişmez", "Elektron aktarımı yok"] },
          oyun: [
            { metin: "Zn + 2HCl → ZnCl₂ + H₂", cevap: "sol", neden: "Zn 0 → +2, H +1 → 0." },
            { metin: "AgNO₃ + NaCl → AgCl + NaNO₃", cevap: "sag", neden: "Çökelme: hiçbir basamak değişmedi." },
            { metin: "2H₂O₂ → 2H₂O + O₂", cevap: "sol", neden: "O −1 → −2 ve 0: hem yükseltgenme hem indirgenme." },
            { metin: "CaCO₃ → CaO + CO₂", cevap: "sag", neden: "Ca +2, C +4, O −2 aynen kalır." },
            { metin: "CH₄ + 2O₂ → CO₂ + 2H₂O", cevap: "sol", neden: "C −4 → +4, O 0 → −2." }
          ] },
        { tip: "tuzak", metin: "Elementsiz bileşiklerden oluşan sentez ve ayrışma tepkimelerinde basamaklar değişmeyebilir.", yanlis: "Sentez ve ayrışma tepkimeleri her zaman redokstur.", dogru: "==Yalnızca basamak değişiyorsa== redokstur. CaO + H₂O → Ca(OH)₂ ve CaCO₃ → CaO + CO₂ redoks değildir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: redoks", metin: "*This is a redox reaction because the oxidation numbers of zinc and hydrogen change.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: redoks değil", metin: "*A double replacement reaction is not a redox reaction because no oxidation numbers change.*" }
          ] }
      ]
    },
    {
      baslik: "Yükseltgen, indirgen ve elektron dengesi",
      kisa: "Verilen elektron sayısı alınana eşittir; indirgen yükseltgenir, yükseltgen indirgenir.",
      bloklar: [
        { tip: "tuzak", metin: "Adlar ters gibi gelir ama mantıklıdır: yükseltgen madde, başkasını yükseltger.", yanlis: "Yükseltgen madde yükseltgenir.", dogru: "==Yükseltgen madde başkasını yükseltger, kendisi indirgenir.== İndirgen madde başkasını indirger, kendisi yükseltgenir." },
        { tip: "ornek", baslik: "Al + Cu²⁺ → Al³⁺ + Cu", durum: "Yarı tepkimeleri yaz, elektronları eşitleyip denklemi denkleştir.",
          adimlar: ["Yükseltgenme: Al → Al³⁺ + 3e⁻.", "İndirgenme: Cu²⁺ + 2e⁻ → Cu.", "Elektron sayısını 6'da eşitle: birinciyi 2, ikinciyi 3 ile çarp: 2Al → 2Al³⁺ + 6e⁻ ve 3Cu²⁺ + 6e⁻ → 3Cu.", "Topla: 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu. Yük kontrolü: sol +6, sağ +6."],
          sonuc: "==2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu==. Al indirgen madde, Cu²⁺ yükseltgen maddedir; 6 elektron aktarılır." },
        { tip: "ornek", baslik: "Paslanma: 4Fe + 3O₂ → 2Fe₂O₃", durum: "Demirin paslanması bir redoks mudur? Elektron sayılarını kontrol et.",
          adimlar: ["Fe: 0 → +3, her atom 3e⁻ verir; 4 atom → 12 e⁻ verilir.", "O₂: her O atomu 0 → −2 ile 2e⁻ alır; her O₂ molekülü 4e⁻ alır; 3O₂ → 12 e⁻.", "Verilen = alınan = 12 e⁻: denklem hem atom hem elektron bakımından denk."],
          sonuc: "Paslanma bir redokstur: ==Fe indirgen (yükseltgenir), O₂ yükseltgen (indirgenir).==" },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: indirgen", metin: "*The substance that loses electrons is oxidized and acts as the reducing agent.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: denge", metin: "*The number of electrons lost must equal the number of electrons gained.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Yükseltgenme = elektron kaybı, basamak artar. İndirgenme = elektron kazancı, basamak azalır (OIL RIG).",
            "İndirgen madde yükseltgenir (elektron verir); yükseltgen madde indirgenir (elektron alır).",
            "Yükseltgenme basamağı kuralları: serbest element 0; tek atomlu iyonda yük; grup 1 +1, grup 2 +2; O −2, H +1; toplam = yük.",
            "İstisnalar: H₂O₂'de O −1; NaH gibi metal hidrürlerde H −1.",
            "Tek yer değiştirme ve yanma her zaman redokstur; çift yer değiştirme (çökelme, nötrleşme) redoks değildir.",
            "Sentez ve ayrışma, serbest element içeriyorsa redokstur (N₂ + 3H₂ → 2NH₃); yoksa genelde değildir.",
            "Elektronlar eşitlenir: 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu (6 e⁻ aktarılır); paslanma 4Fe + 3O₂ → 2Fe₂O₃ (12 e⁻)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "What is the oxidation number of chromium in the Cr₂O₇²⁻ ion?",
      opts: ["+3", "+6", "+7", "+12"],
      a: 1,
      why: "2Cr + 7(−2) = −2 → 2Cr = +12 → Cr = +6. D en çekici yanlış şık: toplam +12'yi iki atoma bölmeyi unutur." },
    { q: "Which of the following reactions is NOT a redox reaction?",
      opts: ["Zn + 2HCl → ZnCl₂ + H₂", "2Mg + O₂ → 2MgO", "HCl + NaOH → NaCl + H₂O", "CH₄ + 2O₂ → CO₂ + 2H₂O"],
      a: 2,
      why: "Nötrleşmede hiçbir atomun yükseltgenme basamağı değişmez (H +1, Cl −1, Na +1, O −2). B en çekici yanlış şık: bu bir sentez ama Mg 0 → +2 ve O 0 → −2 olduğu için redokstur." },
    { q: "In the reaction Zn + CuSO₄ → ZnSO₄ + Cu, which species is the reducing agent?",
      opts: ["Zn", "Cu²⁺", "SO₄²⁻", "Cu"],
      a: 0,
      why: "Zn 0 → +2 ile elektron verir, yükseltgenir; bu yüzden indirgen maddedir. B en çekici yanlış şık: Cu²⁺ elektron alır, indirgenir; yükseltgen maddedir." },
    { q: "The table gives the oxidation number of S in some sulfur species. What can be said about the change SO₂ → SO₃?",
      fig: { type: "table", caption: "Oxidation number of S", head: ["Species", "H₂S", "S₈", "SO₂", "SO₃"], rows: [["Oxidation number", "−2", "0", "+4", "+6"]] },
      opts: ["S is reduced, gaining 2e⁻", "S is oxidized, losing 2e⁻", "S is oxidized, losing 6e⁻", "The oxidation number of S does not change"],
      a: 1,
      why: "+4'ten +6'ya çıkış: 2 elektron kaybı, yükseltgenme. C en çekici yanlış şık: son basamağı (+6) verilen elektron sayısı sanır." },
    { q: "How many electrons are transferred in total in the reaction 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu?",
      opts: ["2", "3", "5", "6"],
      a: 3,
      why: "2Al → 2Al³⁺ + 6e⁻ ve 3Cu²⁺ + 6e⁻ → 3Cu: verilen = alınan = 6 elektron. C en çekici yanlış şık: 2 ve 3 katsayılarını toplar (2 + 3)." }
  ]
};
