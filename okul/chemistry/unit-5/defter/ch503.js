/* Kitora not defteri · ch503 · 5.3 Derişim
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry, Exam 4: kütlece yüzde, ppm, molarite, iyon derişimi, seyreltme, çözelti hazırlama). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch503",
  amac: "Bu konu *concentration* yani derişimi anlatıyor: bir çözeltide ne kadar çözünen olduğunu kütlece yüzde, ppm ve molarite ile ifade etmeyi, iyon derişimini bulmayı ve çözeltiyi seyreltmeyi (M₁V₁ = M₂V₂) öğreneceksin.",
  bolumler: [
    {
      baslik: "Derişim nedir? Dört ölçü",
      kisa: "Derişim, belirli miktar çözeltide ne kadar çözünen olduğunu söyler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥣", terim: "Concentration", tr: "derişim", tanim: "Çözeltinin belirli bir miktarında bulunan çözünen miktarı. Aynı maddelerden farklı derişimde çözelti yapılabilir.", ornek: "Bir bardak çaya 1 şeker ile 4 şeker atmak." },
            { ikon: "⚖️", terim: "Concentrated and dilute", tr: "derişik ve seyreltik", tanim: "Birim miktarda çok çözünen içeren çözelti derişik, az içeren seyreltiktir. Bunlar göreli kavramlardır.", ornek: "Limonata, şerbetten seyreltiktir." }
          ] },
        { tip: "tablo", baslik: "Derişim ölçüleri", head: ["Ölçü", "Formül", "Birim"], rows: [
            ["Kütlece yüzde", "(m çözünen ÷ m çözelti) × 100", "%"],
            ["ppm (milyonda bir)", "(m çözünen ÷ m çözelti) × 10⁶", "ppm"],
            ["Molarite (M)", "n çözünen ÷ V çözelti (L)", "mol/L"],
            ["Hacimce yüzde", "(V çözünen ÷ V çözelti) × 100", "%"]
          ], not: "Kolonyadaki \"80 derece\", hacimce yaklaşık %80 etanol demektir. Çözelti kütlesi ve hacmi her zaman çözünen + çözücü toplamıdır." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Concentration tells us how much solute is dissolved in a given amount of solution.*" }
          ] }
      ]
    },
    {
      baslik: "Kütlece yüzde",
      kisa: "Kütlece yüzde = çözünen kütlesi ÷ çözelti kütlesi × 100.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "% (kütlece)", alt: "yüzde derişim" }, "=",
            { t: "m çözünen", alt: "gram" }, "÷",
            { t: "m çözelti", alt: "çözünen + çözücü" }, "×",
            { t: "100" }
          ] },
        { tip: "ornek", baslik: "Kantinde şekerli çay", durum: "a) 30 g şeker 120 g suda çözülüyor; kütlece yüzde kaçtır? b) 250 g'lık %12'lik şekerli suyun içinde kaç g şeker ve kaç g su vardır?", adimlar: [
            "a) Çözelti = 30 + 120 = 150 g. % = 30 ÷ 150 × 100 = %20.",
            "b) Şeker = 12 ÷ 100 × 250 = 30 g.",
            "b) Su = 250 − 30 = 220 g.",
            "Kontrol: 30 ÷ 250 × 100 = %12 ✓"
          ], sonuc: "a) %20  b) 30 g şeker, 220 g su." },
        { tip: "tuzak", metin: "Paydaya çözücünün (suyun) kütlesini değil, çözeltinin toplam kütlesini yazmalısın.", yanlis: "30 g şeker, 120 g su → 30 ÷ 120 × 100 = %25.", dogru: "30 ÷ (30 + 120) × 100 = %20." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Mass percent = (mass of solute ÷ mass of solution) × 100.*" }
          ] }
      ]
    },
    {
      baslik: "ppm: milyonda bir",
      kisa: "1 ppm = 1 g çözünen / 1 000 000 g çözelti; seyreltik sularda 1 mg/L.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "ppm", alt: "milyonda bir" }, "=",
            { t: "m çözünen", alt: "g" }, "÷",
            { t: "m çözelti", alt: "g" }, "×",
            { t: "10⁶" }
          ], aciklama: "Çok seyreltik çözeltilerde kullanılır. Yüzdeyi ppm'e çevirmek için × 10⁴ (%1 = 10 000 ppm)." },
        { tip: "ornek", baslik: "İçme suyunda florür", durum: "1 L (yaklaşık 1 kg) içme suyu numunesi 3 mg florür içeriyor. a) Derişimi ppm olarak bul. b) Kütlece yüzde olarak yaz.", adimlar: [
            "a) 3 mg = 0,003 g; çözelti ≈ 1000 g.",
            "ppm = 0,003 ÷ 1000 × 10⁶ = 3 ppm.",
            "b) % = 3 ÷ 10⁴ = 0,0003 %.",
            "Kontrol: 0,0003 × 10⁴ = 3 ppm ✓"
          ], sonuc: "3 ppm = %0,0003." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*One ppm means one gram of solute in one million grams of solution.*" }
          ] }
      ]
    },
    {
      baslik: "Molarite ve çözelti hazırlama",
      kisa: "Molarite, 1 litre çözeltideki çözünen mol sayısıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "M", alt: "molarite (mol/L)" }, "=",
            { t: "n", alt: "çözünenin molü" }, "÷",
            { t: "V", alt: "çözelti hacmi (L)" }
          ], aciklama: "n = m ÷ M(mol kütlesi). Sınavda böyle yaz: *Molarity is the number of moles of solute per liter of solution.*" },
        { tip: "ornek", baslik: "Molariteyi hesaplamak ve çözünen kütlesini bulmak", durum: "a) 11,7 g NaCl suda çözülüp 500 mL çözelti yapılıyor (M = 58,5 g/mol). Molarite kaçtır? b) 250 mL 0,2 M glikoz (M = 180 g/mol) çözeltisi için kaç g glikoz gerekir?", adimlar: [
            "a) n = 11,7 ÷ 58,5 = 0,2 mol; V = 0,5 L; M = 0,2 ÷ 0,5 = 0,4 M.",
            "b) n = M × V = 0,2 × 0,25 = 0,05 mol.",
            "b) m = n × M = 0,05 × 180 = 9 g.",
            "Kontrol: 9 ÷ 180 = 0,05 mol; 0,05 ÷ 0,25 = 0,2 M ✓"
          ], sonuc: "a) 0,4 M  b) 9 g glikoz." },
        { tip: "adimlar", baslik: "Laboratuvarda 250 mL 0,2 M glikoz çözeltisi hazırlama", adimlar: [
            { baslik: "Tart", metin: "9 g glikozu terazide tart." },
            { baslik: "Çözdür", metin: "250 mL'lik balon jojeye koy, az miktarda saf suyla çözdür." },
            { baslik: "Çizgiye tamamla", metin: "Saf su ekleyerek hacmi 250 mL çizgisine tamamla." },
            { baslik: "Karıştır", metin: "Kapağı kapat, ters çevirerek homojen karıştır." }
          ] },
        { tip: "tuzak", metin: "Molaritedeki V çözeltinin son hacmidir; çözücü suyun hacmi değildir.", yanlis: "9 g glikoza 250 mL su eklenir.", dogru: "Balon jojede çizgiye kadar tamamlanır; son hacim 250 mL olur." }
      ]
    },
    {
      baslik: "İyon derişimi",
      kisa: "Tam ayrışan tuzda iyon derişimi = tuz derişimi × iyonun sayısı.",
      bloklar: [
        { tip: "tablo", baslik: "Tam ayrışan tuzlarda iyon derişimleri", head: ["Çözelti", "Ayrışma", "İyon derişimleri", "Toplam iyon"], rows: [
            ["0,5 M NaCl", "NaCl → Na⁺ + Cl⁻", "[Na⁺] = 0,5 M; [Cl⁻] = 0,5 M", "1,0 M"],
            ["0,1 M CaCl₂", "CaCl₂ → Ca²⁺ + 2Cl⁻", "[Ca²⁺] = 0,1 M; [Cl⁻] = 0,2 M", "0,3 M"],
            ["0,3 M Na₂SO₄", "Na₂SO₄ → 2Na⁺ + SO₄²⁻", "[Na⁺] = 0,6 M; [SO₄²⁻] = 0,3 M", "0,9 M"],
            ["0,2 M Al₂(SO₄)₃", "Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻", "[Al³⁺] = 0,4 M; [SO₄²⁻] = 0,6 M", "1,0 M"]
          ], not: "Elektrolit olmayanlar (şeker gibi) iyon vermez; iyon derişimi sıfırdır." },
        { tip: "ornek", baslik: "İki çözeltiyi karıştırınca klorür derişimi", durum: "100 mL 0,1 M NaCl ile 100 mL 0,1 M CaCl₂ çözeltisi karıştırılıyor (hacimler toplanır). Karışımda [Cl⁻] kaç M'dir?", adimlar: [
            "NaCl'den: n(Cl⁻) = 0,1 × 0,1 = 0,01 mol.",
            "CaCl₂'den: n(Cl⁻) = 2 × 0,1 × 0,1 = 0,02 mol.",
            "Toplam n = 0,03 mol; V = 0,2 L.",
            "[Cl⁻] = 0,03 ÷ 0,2 = 0,15 M.",
            "Kontrol: 0,15 × 0,2 = 0,03 mol ✓"
          ], sonuc: "[Cl⁻] = 0,15 M." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Strong electrolytes dissociate completely, so the ion concentration equals the salt concentration times the number of ions.*" }
          ] }
      ]
    },
    {
      baslik: "Seyreltme: M₁V₁ = M₂V₂",
      kisa: "Su eklenince çözünenin mol sayısı değişmez; derişim azalır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "M₁", alt: "derişik" }, "×",
            { t: "V₁", alt: "alınan hacim" }, "=",
            { t: "M₂", alt: "seyreltik" }, "×",
            { t: "V₂", alt: "son hacim" }
          ], aciklama: "Çünkü n = M × V ve su eklemek n'yi değiştirmez. Eklenen su ≈ V₂ − V₁." },
        { tip: "grafik", baslik: "2 M'lik 100 mL çözeltiye su eklenirse", xlabel: "Çözelti hacmi (mL)", ylabel: "Derişim (M)", xmax: 9, ymax: 3,
          xticks: [{ v: 1, label: "100" }, { v: 2, label: "200" }, { v: 4, label: "400" }, { v: 8, label: "800" }],
          yticks: [{ v: 0.25, label: "0,25" }, { v: 0.5, label: "0,5" }, { v: 1, label: "1" }, { v: 2, label: "2" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, noktalar: [[0.8, 2.5], [1, 2], [1.5, 1.333], [2, 1], [3, 0.667], [4, 0.5], [6, 0.333], [8, 0.25]], etiket: "M", gizli: true },
            { id: "a", tip: "nokta", renk: 1, x: 1, y: 2, etiket: "100 mL · 2 M", kilavuz: true, gizli: true },
            { id: "b", tip: "nokta", renk: 1, x: 2, y: 1, etiket: "200 mL · 1 M", kilavuz: true, gizli: true },
            { id: "c", tip: "nokta", renk: 1, x: 4, y: 0.5, etiket: "400 mL · 0,5 M", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Çözünenin mol sayısı sabit (0,2 mol). Hacim arttıkça derişim ==ters orantılı== azalır: M × V = 0,2.", goster: ["e"] },
            { metin: "Başlangıç: 100 mL, 2 M. n = 2 × 0,1 = 0,2 mol.", goster: ["a"] },
            { metin: "200 mL'ye (100 mL su ekleyerek) tamamlayınca derişim yarıya, 1 M olur.", goster: ["b"] },
            { metin: "400 mL'ye tamamlayınca 0,5 M olur. M₂ = 2 × 100 ÷ 400 = 0,5. Mol hep 0,2.", goster: ["c"] }
          ] },
        { tip: "ornek", baslik: "1 M stoktan 0,1 M çözelti hazırlamak", durum: "Laboratuvarda 1 M'lik HCl stok çözeltisinden 250 mL 0,1 M çözelti hazırlanacak. Kaç mL stok çözelti alınmalı?", adimlar: [
            "M₁V₁ = M₂V₂ → V₁ = M₂ × V₂ ÷ M₁.",
            "V₁ = 0,1 × 250 ÷ 1 = 25 mL.",
            "Balon jojeye 25 mL stok koy; çizgiye kadar saf su ekle (yaklaşık 225 mL su).",
            "Kontrol: n = 1 × 0,025 = 0,025 mol ve 0,1 × 0,25 = 0,025 mol ✓"
          ], sonuc: "25 mL stok alınır, 250 mL'ye tamamlanır." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The number of moles of solute does not change when a solution is diluted, so M₁V₁ = M₂V₂.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Concentration*: belirli miktar çözeltideki çözünen miktarı. Çözelti = çözünen + çözücü.",
            "Kütlece yüzde = m çözünen ÷ m çözelti × 100 (paydaya suyu değil çözeltiyi yaz).",
            "ppm = m çözünen ÷ m çözelti × 10⁶; %1 = 10 000 ppm; seyreltik suda 1 ppm ≈ 1 mg/L.",
            "Molarite M = n ÷ V(L); V çözeltinin son hacmidir; n = m ÷ M(mol kütlesi).",
            "İyon derişimi = tuz derişimi × iyon sayısı (tam ayrışan tuzlarda).",
            "Seyreltme: M₁V₁ = M₂V₂; çözünenin mol sayısı değişmez, derişim hacimle ters orantılıdır.",
            "Hazırlama: tart, çözdür, balon jojede çizgiye tamamla, karıştır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "40 g tuz 160 g suda çözülüyor. Çözeltinin kütlece yüzde derişimi kaçtır?",
      opts: ["%25", "%20", "%40", "%80"], a: 1,
      why: "Çözelti = 40 + 160 = 200 g; % = 40 ÷ 200 × 100 = %20. %25 (A) paydaya yalnız suyun kütlesini yazmaktan çıkar (40 ÷ 160)." },
    { q: "Bir gölün 2000 kg suyunda 6 g çözünmüş madde bulunmuştur. Derişim kaç ppm'dir?",
      opts: ["3 ppm", "0,3 ppm", "30 ppm", "6 ppm"], a: 0,
      why: "ppm = 6 ÷ 2 000 000 × 10⁶ = 3 ppm (yani 6 g ÷ 2000 kg = 3 mg/kg). 6 ppm (D) çözelti kütlesini 2000 kg yerine 1000 kg almaktan çıkar." },
    { q: "Tabloda bir NaOH çözeltisinin hazırlanışı verilmiştir (NaOH: 40 g/mol). Çözeltinin molaritesi kaçtır?",
      fig: { type: "table", head: ["Madde", "Değer"], rows: [["Çözünen NaOH", "8 g"], ["Çözelti hacmi", "500 mL"]], caption: "NaOH çözeltisi" },
      opts: ["0,2 M", "16 M", "0,016 M", "0,4 M"], a: 3,
      why: "n = 8 ÷ 40 = 0,2 mol; V = 0,5 L; M = 0,2 ÷ 0,5 = 0,4 M. 0,2 M (A) hacme bölmeyi unutmaktır; 16 M (B) kütleyi mol kütlesine bölmeden hacme bölmektir." },
    { q: "Grafik, 0,2 mol çözünen içeren bir çözeltinin hacmiyle derişimini gösteriyor. Çözelti 100 mL iken 2 M'dir. 400 mL'ye seyreltilirse derişim kaç M olur?",
      fig: { type: "graph", xlabel: "Hacim (mL)", ylabel: "Derişim (M)", xmax: 9, ymax: 3, points: [{ q: 1, p: 2, label: "100 mL · 2 M", guides: true }, { q: 2, p: 1, label: "200 mL · 1 M", guides: true }, { q: 8, p: 0.25, label: "800 mL · 0,25 M", guides: true }], xticks: [{ v: 1, label: "100" }, { v: 2, label: "200" }, { v: 4, label: "400" }, { v: 8, label: "800" }], yticks: [{ v: 0.25, label: "0,25" }, { v: 1, label: "1" }, { v: 2, label: "2" }], caption: "Seyreltme" },
      opts: ["0,25 M", "1 M", "0,5 M", "2 M"], a: 2,
      why: "M₂ = M₁V₁ ÷ V₂ = 2 × 100 ÷ 400 = 0,5 M (mol sabit: 0,5 × 0,4 L = 0,2 mol). 1 M (B) 200 mL'deki, 0,25 M (A) 800 mL'deki değerdir." },
    { q: "0,25 M Na₃PO₄ çözeltisi tam ayrışıyor. Na⁺ ve PO₄³⁻ iyonlarının derişimleri kaç M'dir?",
      opts: ["0,25 M ve 0,25 M", "0,75 M ve 0,25 M", "0,25 M ve 0,75 M", "0,75 M ve 0,75 M"], a: 1,
      why: "Na₃PO₄ → 3Na⁺ + PO₄³⁻: [Na⁺] = 3 × 0,25 = 0,75 M; [PO₄³⁻] = 0,25 M. A şıkkı ayrışmada iyon sayısını katsayıyla çarpmamaktır." }
  ]
};
