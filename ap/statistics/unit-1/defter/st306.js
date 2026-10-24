/* Kitpath not defteri · st306 · 3F Deneylerden Çıkarım (CED 3.7)
   Kaynak: AP Statistics CED Unit 3 (3.7 Inference and Experiments). Blok türleri: /ap/_kit/defter.js başı.
   Benzetim sayıları (1000 yeniden atama) betikle üretildi; tohumlu rastgele sayı üreteci. */
window.DEFTER = {
  slug: "st306",
  amac: "Bu konu deney sonuçlarının ne anlama geldiğini anlatıyor: bir farkın ne zaman *statistically significant* sayıldığını, ne zaman neden-sonuç çıkarılabildiğini ve sonucun kime genellenebildiğini öğreneceksin. Rastgele atama ile rastgele örneklemin farklı işlerini ayıracaksın.",
  bolumler: [
    {
      baslik: "Sonuca iki soru: neden mi, kime mi?",
      kisa: "Rastgele atama neden-sonucu, rastgele örnekleme genellemeyi mümkün kılar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎲", baslik: "*Random assignment*", maddeler: ["Birimler gruplara şansla yerleştirilir", "Gizli değişkenleri dengeler", "Sağladığı: neden-sonuç"] },
          sag: { ikon: "🎟️", baslik: "*Random sampling*", maddeler: ["Birimler population'dan şansla seçilir", "Örneklemi population'ı temsil eder kılar", "Sağladığı: genelleme"] },
          oyun: [
            { metin: "Gönüllüler kura ile iki gruba ayrıldı.", cevap: "sol", neden: "Gruplara yerleştirme şansla yapılıyor: *random assignment*." },
            { metin: "Okulun öğrenci listesinden SRS ile 100 öğrenci seçildi.", cevap: "sag", neden: "Population'dan şansla seçim: *random sampling*." },
            { metin: "Fark çıkarsa nedeninin uygulama olduğunu söyleyebilmemizi sağlar.", cevap: "sol", neden: "Neden-sonuç, rastgele atamanın sağladığı sonuçtur." },
            { metin: "Sonucu okulun tüm öğrencileri için söyleyebilmemizi sağlar.", cevap: "sag", neden: "Genelleme, rastgele örneklemenin sağladığı sonuçtur." },
            { metin: "Confounding değişkenleri gruplar arasında yaklaşık dengeler.", cevap: "sol", neden: "Gruplar şansla kurulunca gizli farklar dengelenir: *random assignment*." }
          ] },
        { tip: "harita", merkez: "Deney sonucundan ne çıkar?", dallar: [
            { baslik: "Fark *statistically significant*", alt: "şans tek başına açıklayamaz" },
            { baslik: "*Random assignment* var", alt: "neden-sonuç yorumlanabilir" },
            { baslik: "*Random sampling* var", alt: "population'a genelleme yapılır" },
            { baslik: "Birimler gönüllü", alt: "genelleme gönüllülere benzeyenlerle sınırlı" }
          ] }
      ]
    },
    {
      baslik: "Şans mı, etki mi?",
      kisa: "Etki yokmuş gibi grupları yeniden karıştırıp şansın ürettiği farklara bak.",
      bloklar: [
        { tip: "tablo", baslik: "Çalışma uygulaması deneyi", head: ["Grup", "Quiz puanları (20 üzerinden)", "Ortalama"], rows: [
            ["Uygulama (10 öğrenci)", "12, 13, 13, 14, 14, 15, 15, 16, 16, 17", "14,5"],
            ["Kontrol (10 öğrenci)", "8, 9, 10, 10, 11, 11, 12, 12, 13, 14", "11,0"]
          ], not: "20 gönüllü öğrenci kura ile ikiye ayrıldı. Gözlenen fark: 14,5 − 11,0 = 3,5 puan." },
        { tip: "adimlar", baslik: "Şans bu farkı üretir mi?", adimlar: [
            { baslik: "1 · Varsayım", metin: "Uygulamanın etkisi yok: her öğrencinin puanı hangi gruba düştüğünden bağımsız." },
            { baslik: "2 · Yeniden ata", metin: "Aynı 20 puanı karıştırıp rastgele 10 + 10'a yeniden ayır." },
            { baslik: "3 · Farkı hesapla", metin: "Yeni iki grubun ortalama farkını bul." },
            { baslik: "4 · 1000 kez tekrarla", metin: "Bulduğun farkları bir grafikte topla." },
            { baslik: "5 · Karşılaştır", metin: "Gözlenen 3,5 puanlık fark bu dağılımın neresine düşüyor?" }
          ] },
        { tip: "sekil", baslik: "1000 yeniden atamada oluşan ortalama farklar (benzetim)", fig: { type: "hist", bins: [{ from: -4, to: -3, n: 3 }, { from: -3, to: -2, n: 35 }, { from: -2, to: -1, n: 163 }, { from: -1, to: 0, n: 332 }, { from: 0, to: 1, n: 294 }, { from: 1, to: 2, n: 141 }, { from: 2, to: 3, n: 30 }, { from: 3, to: 4, n: 2 }], label: "Ortalama fark (puan)", ylabel: "Tekrar sayısı" } }
      ]
    },
    {
      baslik: "*Statistically significant*: anlamlı fark",
      kisa: "Fark, şansla kolayca oluşamayacak kadar büyükse statistically significant'tır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Statistically significant", tr: "istatistiksel olarak anlamlı", tanim: "Gözlenen fark, treatment'ın hiç etkisi olmasa bile ==rastgele atamadaki şansla kolayca oluşamayacak kadar== büyüktür.", ornek: "1000 yeniden atamanın hiçbirinde 3,5 puanlık fark çıkmadı." }
          ] },
        { tip: "grafik", baslik: "Şansın ürettiği farklar ve gözlenen fark", xlabel: "Gruplar arası fark (puan)", ylabel: "Sıklık", xmax: 10, ymax: 7,
          xticks: [{ v: 0, label: "−5" }, { v: 2, label: "−3" }, { v: 5, label: "0" }, { v: 8, label: "+3" }, { v: 10, label: "+5" }],
          ogeler: [
            { id: "zil", tip: "egri", renk: 0, noktalar: [[0, 0], [1, 0.05], [2, 0.42], [3, 1.84], [4, 4.46], [5, 6], [6, 4.46], [7, 1.84], [8, 0.42], [9, 0.05], [10, 0]], gizli: true },
            { id: "sifir", tip: "cizgi", renk: 1, kesik: true, from: [5, 0], to: [5, 6.6], etiket: "", gizli: true },
            { id: "yok", tip: "yazi", renk: 1, x: 5, y: 6.9, metin: "etki yok", gizli: true },
            { id: "obs", tip: "nokta", renk: 2, x: 6, y: 4.46, etiket: "+1", gizli: true },
            { id: "kuyruk", tip: "alan", renk: 2, noktalar: [[8.5, 0], [8.5, 0.15], [8.75, 0.095], [9, 0.05], [9.25, 0.014], [9.5, 0], [10, 0]], gizli: true }
          ],
          durumlar: [
            { metin: "Uygulamanın etkisi yokken bile rastgele atama yüzünden iki grubun ortalaması az çok farklı çıkar. Eğri: yalnızca ==şansla== oluşan farkların dağılımı.", goster: ["zil", "sifir", "yok"] },
            { metin: "Gözlenen fark +1 puan: eğrinin ortasında. Şans bunu kolayca üretir; fark anlamlı değil.", goster: ["obs"] },
            { metin: "Gözlenen fark +3,5 puan: eğrinin en ucunda. Şans bunu çok nadir üretir.", set: { obs: { x: 8.5, y: 0.16, etiket: "+3,5" } } },
            { metin: "Bu kadar büyük farkın yalnızca şansla çıkma olasılığı çok düşük: fark ==*statistically significant*==.", goster: ["kuyruk"] }
          ] },
        { tip: "tuzak", baslik: "Anlamlı demek kanıtlanmış neden değildir", metin: "Anlamlılık yalnızca şansın tek başına açıklayamayacağını söyler.", yanlis: "Fark anlamlı çıktı; uygulama kesin olarak nedendir ve etkisi çok büyüktür.", dogru: "Neden-sonuç için ayrıca *random assignment* ve kontrol gerekir; etkinin büyüklüğü ayrıca yorumlanır." }
      ]
    },
    {
      baslik: "Sonuç cümlesini kurmak",
      kisa: "Önce anlamlı mı, sonra rastgele atama mı, sonra rastgele seçim mi diye sor.",
      bloklar: [
        { tip: "adimlar", baslik: "Üç soru, üç parça", adimlar: [
            { baslik: "1 · Fark anlamlı mı?", metin: "Şansla kolayca açıklanamıyorsa, farkın yalnızca şanstan gelmediğine dair güçlü (convincing) kanıt var demektir." },
            { baslik: "2 · Rastgele atama var mı?", metin: "Varsa fark treatment'a bağlanabilir; neden-sonuç cümlesi kurulur." },
            { baslik: "3 · Rastgele seçim var mı?", metin: "Varsa sonuç seçildikleri population'a; yoksa yalnızca çalışmadaki birimlere benzeyenlere genellenir." }
          ] },
        { tip: "ornek", baslik: "Uygulama deneyinin sonuç cümlesi", durum: "Çalışma uygulaması deneyinde 20 gönüllü öğrenci kura ile iki gruba ayrıldı; uygulama grubunun ortalaması 3,5 puan yüksek çıktı ve fark anlamlı bulundu.",
          adimlar: ["Fark anlamlı: 1000 yeniden atamanın hiçbirinde bu kadar büyük fark çıkmadı.", "Rastgele atama var: neden-sonuç çıkarılabilir.", "Birimler gönüllü, okuldan rastgele seçilmemiş: genelleme sınırlı."],
          sonuc: "\"Fark şansla kolayca açıklanamayacak kadar büyük ve öğrenciler rastgele atandığı için, uygulamanın bu gönüllülerde quiz puanını artırdığına dair güçlü kanıt (convincing evidence) var. Katılımcılar gönüllü olduğundan sonuç ancak onlara benzeyen öğrencilere genellenebilir.\"" }
      ]
    },
    {
      baslik: "Anlamlı çıkmadığında ve rastgele seçim varken",
      kisa: "Anlamlı çıkmaması etkisizliği kanıtlamaz; rastgele seçim genellemeyi açar.",
      bloklar: [
        { tip: "ornek", baslik: "Fark çıktı ama anlamlı değil", durum: "Başka bir deneyde 20 öğrenci kura ile ikiye ayrıldı. Uygulama grubunun ortalaması 13,5, kontrol grubununki 13,0; fark 0,5 puan. Puanlar karıştırılıp 1000 kez yeniden ayrıldığında 616 denemede fark (işaretine bakmadan) en az 0,5 puan çıktı.",
          adimlar: ["Gözlenen fark: 13,5 − 13,0 = 0,5 puan.", "Etki olmasa da yeniden atamaların 616 ÷ 1000 ≈ %62'sinde bu kadar ya da daha büyük fark çıkıyor.", "Bu fark şansla kolayca oluşabilir."],
          sonuc: "Fark istatistiksel olarak anlamlı değil: uygulamanın etkisi olduğuna dair yeterli kanıt yok." },
        { tip: "ornek", baslik: "Hem rastgele seçim hem rastgele atama", durum: "Okulun listesinden rastgele 60 öğrenci seçildi, kura ile 30 + 30 ikiye ayrıldı ve fark anlamlı bulundu.",
          adimlar: ["Fark anlamlı: şans açıklamıyor.", "Rastgele atama var: neden-sonuç.", "Okul listesinden rastgele seçim var: sonuç okulun öğrencilerine genellenir."],
          sonuc: "Hem okul öğrencileri için genelleme hem neden-sonuç cümlesi kurulabilir." },
        { tip: "tuzak", baslik: "Anlamlı değil, etkisiz demek değil", metin: "Anlamlı fark bulamamak, elimizdeki verinin kanıt için yetersiz olduğunu gösterir.", yanlis: "Fark anlamlı çıkmadı, o halde uygulamanın etkisi olmadığı kanıtlandı.", dogru: "Verilerde etkiye dair yeterli kanıt yok. Etki küçük olabilir ya da örneklem etkiyi görmek için küçük kalmış olabilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Random assignment* neden-sonuç, *random sampling* genelleme sağlar; ikisi farklı işlerdir.",
            "Etki yokmuş gibi grupları yeniden karıştırarak şansın ürettiği farkların dağılımı elde edilir (benzetim).",
            "Gözlenen fark bu dağılımın ucundaysa, yani şansla nadiren çıkıyorsa, fark *statistically significant*'tır.",
            "Anlamlı fark: şans tek başına açıklayamıyor. Neden-sonuç için ayrıca rastgele atama ve kontrol şart.",
            "Anlamlı fark çıkmaması etkisizliği kanıtlamaz; yalnızca yeterli kanıt olmadığını söyler.",
            "Gönüllü birimlerle yapılan deneyde sonuç yalnızca bu gönüllülere benzeyenlere genellenir.",
            "Sonuç cümlesi: fark anlamlı mı, rastgele atama var mı (neden-sonuç), rastgele seçim var mı (genelleme)?",
            "Gözlemsel çalışmada rastgele atama yoktur; anlamlı ilişki bile neden-sonuç göstermez."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "60 gönüllü öğrenci kura ile iki gruba ayrılıyor: biri yeni bir uyku programını izliyor, diğeri normal uyuyor. Program grubunun sınav puanları anlamlı ölçüde yüksek çıkıyor. Hangi sonuç uygundur?",
      opts: ["Program, bütün lise öğrencilerinde puanı artırır", "Program bu gönüllülerde puan artışına neden olmuştur; genelleme gönüllülere benzeyenlerle sınırlıdır", "Fark yalnızca ilişkidir; neden-sonuç söylenemez", "Fark anlamlı olduğu için etki kesinlikle büyüktür"],
      a: 1,
      why: "Rastgele atama var: neden-sonuç çıkarılabilir; ama katılımcılar gönüllü, rastgele seçilmedi: genelleme sınırlı. C en çekici yanlış şık: \"yalnızca ilişki, neden-sonuç yok\" yorumu gözlemsel çalışmalar içindir; bu ise rastgele atamalı bir deney." },
    { q: "Bir okulun öğrencilerinden rastgele seçilen 200 kişiye anket yapılıyor. Telefon süresi arttıkça uyku süresinin azaldığı ve bu ilişkinin anlamlı olduğu bulunuyor. Hangi sonuç uygundur?",
      opts: ["Telefon kullanımı uykuyu azaltır; bu bütün okul için geçerlidir", "İlişki yalnızca bu 200 kişi için geçerlidir", "Telefon süresini azaltmak uykuyu artıracaktır", "İlişki okula genellenebilir ama gözlemsel çalışma olduğu için neden-sonuç söylenemez"],
      a: 3,
      why: "Rastgele örnekleme var: genelleme tamam. Rastgele atama yok, bu bir gözlemsel çalışma: neden-sonuç yok. A en çekici yanlış şık: genelleme doğru, ama \"azaltır\" nedensel iddiadır." },
    { q: "20 öğrenci kura ile iki gruba ayrıldı; uygulama grubu kontrol grubundan ortalama 0,5 puan yüksek çıktı. Puanlar karıştırılıp 1000 kez yeniden ikiye ayrıldı; her yeniden atamanın ortalama farkı grafikte. Bu denemelerin 616'sında fark (işaretine bakmadan) en az 0,5 puandı. Hangi sonuç uygundur?",
      fig: { type: "hist", bins: [{ from: -4, to: -3, n: 0 }, { from: -3, to: -2, n: 1 }, { from: -2, to: -1, n: 103 }, { from: -1, to: 0, n: 406 }, { from: 0, to: 1, n: 397 }, { from: 1, to: 2, n: 92 }, { from: 2, to: 3, n: 1 }, { from: 3, to: 4, n: 0 }], label: "Ortalama fark (puan)", ylabel: "Tekrar sayısı" },
      opts: ["Fark şansla kolayca açıklanabilir; uygulamanın etkisi olduğuna dair yeterli kanıt yok", "Uygulamanın etkisi olmadığı kanıtlanmıştır", "Fark pozitif olduğu için istatistiksel olarak anlamlıdır", "Grafik hatalıdır, çünkü dağılımın merkezi 0 olmamalı"],
      a: 0,
      why: "1000 denemenin 616'sında (yaklaşık %62) bu kadar büyük fark şansla çıkmış: anlamlı değil. B en çekici yanlış şık: anlamlı fark bulamamak etkisizliği kanıtlamaz. D yanlış: etki yoksa farklar 0 çevresinde dağılır." },
    { q: "*Statistically significant* bir fark için hangisi doğrudur?",
      opts: ["Fark büyüktür ve pratikte önemlidir", "Treatment farkın kesin nedenidir", "Fark, treatment'ın hiç etkisi olmasa bile rastgele atamadaki şansla kolayca oluşamayacak kadar büyüktür", "Örneklem, population'ı temsil eder"],
      a: 2,
      why: "Anlamlılık, farkın şansla kolayca açıklanamayacağını söyler. B en çekici yanlış şık: neden-sonuç için ayrıca rastgele atama ve kontrol gerekir; D rastgele örneklemenin konusu." },
    { q: "Okulun öğrenci listesinden rastgele 80 öğrenci seçiliyor ve kura ile 40 + 40 iki gruba ayrılıyor; biri yeni, diğeri eski çalışma yöntemini kullanıyor. Yeni yöntem grubunun puanı anlamlı ölçüde yüksek. Hangi sonuç çıkarılabilir?",
      opts: ["Yalnızca neden-sonuç çıkarılabilir", "Yalnızca okul geneline genelleme yapılabilir", "Ne neden-sonuç ne genelleme çıkarılabilir", "Hem yeni yöntemin farkın nedeni olduğu hem de sonucun okulun öğrencilerine genellenebileceği söylenebilir"],
      a: 3,
      why: "Rastgele örnekleme genellemeyi, rastgele atama neden-sonucu sağlar; ikisi de var. A en çekici yanlış şık: yalnızca atamaya bakıp seçimi unutmaktır." }
  ]
};
