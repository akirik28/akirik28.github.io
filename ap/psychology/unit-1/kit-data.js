/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/py1N/questions.json) */
window.KIT = {
  "store": "psych-u1:v1:",
  "course": "AP Psychology",
  "unitLabel": "Unit 1 — Biological Bases of Behavior",
  "episodes": [
    {
      "no": 1,
      "code": "1.1",
      "slug": "py101",
      "title": "Kalıtım ve Çevrenin Etkileşimi",
      "en": "Interaction of Heredity and Environment",
      "accent": "#7C95FF",
      "defter": "py101",
      "seconds": 252,
      "terms": [
        "Nature versus nurture",
        "Genes",
        "Twin studies",
        "Identical twins",
        "Fraternal twins",
        "Adoption studies",
        "Family studies",
        "Heritability",
        "Evolutionary psychology",
        "Natural selection",
        "Epigenetics"
      ],
      "questions": [
        {
          "q": "Tablo, bir müzikal yetenek testinde farklı kardeş çiftlerinin puanları arasındaki korelasyonları gösteriyor (örnek veri). Hangi sonuç bu verilerle en iyi desteklenir?",
          "opts": [
            "Müzikal yetenekteki farklılıklar yalnızca evdeki müzik ortamından kaynaklanır",
            "Çift yumurta ikizleri, tek yumurta ikizlerinden daha çok gen paylaşır",
            "Genetik farklar müzikal yetenekteki farklılıklara önemli katkı yapar",
            "Evlat edinilen kardeşler arasındaki benzerlik genlerden gelir"
          ],
          "a": 2,
          "why": "Ayrı büyütülen tek yumurta ikizleri bile 0,70 ile çok benziyor; aynı evi paylaşan ama gen paylaşmayan evlat edinilmiş kardeşlerde korelasyon yalnızca 0,10. Benzerlik gen paylaşımıyla artıyor, ev paylaşımıyla pek artmıyor. Bu, genlerin katkısını gösterir ama 'tamamen genetik' demek değildir.",
          "fig": {
            "type": "table",
            "head": [
              "Çift türü",
              "Ortak gen",
              "Korelasyon (r)"
            ],
            "rows": [
              [
                "Tek yumurta, aynı evde",
                "≈ %100",
                "0,75"
              ],
              [
                "Tek yumurta, ayrı evlerde",
                "≈ %100",
                "0,70"
              ],
              [
                "Çift yumurta, aynı evde",
                "≈ %50",
                "0,40"
              ],
              [
                "Evlat edinilmiş kardeşler, aynı evde",
                "≈ %0",
                "0,10"
              ]
            ],
            "caption": "Müzikal yetenek testi · örnek veri"
          }
        },
        {
          "q": "Bir ülkede yetişkin boyunun *heritability* tahmini 0,8 bulunuyor. Hangi yorum doğrudur?",
          "opts": [
            "Bu ülkedeki insanların boy farklılıklarının büyük kısmı genetik farklarla ilişkilidir",
            "Her yetişkinin boyunun yüzde 80'i genlerinden, yüzde 20'si beslenmeden gelir",
            "Beslenme koşulları değişse bile bu oran hiçbir toplumda değişmez",
            "Bu ülkede çevrenin boy üzerinde hiçbir etkisi yoktur"
          ],
          "a": 0,
          "why": "*Heritability* bir gruptaki farklılıkların ne kadarının genetik farklarla açıklandığını gösterir; tek bir bireyin özelliğini yüzdelere bölmez. Ayrıca çevre koşulları değişirse, örneğin beslenme eşitsizliği artarsa, tahmin de değişir."
        },
        {
          "q": "Pek çok farklı kültürde bebekler acı ve ekşi tatları yüzlerini buruşturarak reddederken tatlı tadı kabul ediyor. Hangi bakış açısı bunu en iyi açıklar?",
          "opts": [
            "Bebekler bu tercihi anne babalarını izleyerek öğrenir",
            "Bu tepki *epigenetics* yoluyla her nesilde yeniden ortaya çıkar",
            "Bu tercih yalnızca bebeğin yaşadığı ülkenin mutfağına bağlıdır",
            "*Natural selection*, zehirli olabilecek tatlardan kaçınan ve enerji veren tadı seven ataları kayırmıştır"
          ],
          "a": 3,
          "why": "Kültürden bağımsız ve çok erken görülen bir eğilim, *evolutionary psychology*'nin alanıdır: acı tat çoğu zaman zehir, tatlı tat enerji demektir; bu eğilimi taşıyanlar hayatta kalıp daha çok çocuk bırakmıştır. Öğrenme ve mutfak açıklamaları kültürler arası benzerliği açıklayamaz."
        },
        {
          "q": "Bir *adoption study*'de evlat edinilen gençlerin dini pratikleri ve siyasi görüşleri, biyolojik ailelerinden çok evlat edinen ailelerine benziyor. Araştırmacılar hangi sonuca varmalıdır?",
          "opts": [
            "Bu özellikler tamamen genetik olarak belirlenir",
            "Aile ortamı bu özellikler üzerinde güçlü bir etkiye sahiptir",
            "Biyolojik aileler bu gençlere hiçbir gen aktarmamıştır",
            "Bu sonuç, tek yumurta ikizlerinin genlerinin farklı olduğunu kanıtlar"
          ],
          "a": 1,
          "why": "Evlat edinme düzeninde gen biyolojik aileden, ev ortamı evlat edinen aileden gelir. Gençler evlat edinen aileye benziyorsa çevre, yani *nurture* ağır basıyor demektir. Bu, genlerin hiçbir özellikte rolü olmadığı anlamına gelmez."
        },
        {
          "q": "Tek yumurta ikizlerinden biri yıllarca yoğun stres altında çalışıp sigara içiyor, diğeri içmiyor. 50 yaşında yapılan testte DNA dizileri aynı çıkıyor ama bazı genlerin etkin olup olmadığı farklı bulunuyor. Bu bulgu en iyi hangi kavramla açıklanır?",
          "opts": [
            "*Epigenetics*",
            "*Natural selection*",
            "*Heritability*",
            "*Fraternal twins*"
          ],
          "a": 0,
          "why": "DNA dizisi değişmeden, çevrenin (stres, sigara) hangi genlerin açık ya da kapalı olduğunu değiştirmesi *epigenetics*'tir. *Natural selection* nesiller boyunca işler; *heritability* bir grup istatistiğidir; bu ikizler zaten tek yumurta ikizidir."
        }
      ]
    }
  ],
  "final": []
};
