/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/py2N/questions.json) */
window.KIT = {
  "store": "psych-u2:v1:",
  "course": "AP Psychology",
  "unitLabel": "Unit 2 — Cognition",
  "episodes": [
    {
      "no": 1,
      "code": "2.1-1",
      "slug": "py201",
      "title": "Algı: Veri, Beklenti ve Dikkat",
      "en": "Perception: Bottom-Up, Top-Down, and Attention",
      "accent": "#3FB5A0",
      "defter": "py201",
      "defterBaslik": "Algı",
      "seconds": 256,
      "terms": [
        "Perception",
        "Bottom-up processing",
        "Top-down processing",
        "Schema",
        "Perceptual set",
        "Selective attention",
        "Cocktail party effect",
        "Inattentional blindness",
        "Change blindness"
      ],
      "questions": [
        {
          "q": "Kerem ilk kez bir müzede, daha önce hiç görmediği bir müzik aletini inceliyor. Telleri, gövdesindeki delikleri ve uzun sapını tek tek fark ettikten sonra onun bir tür telli çalgı olduğuna karar veriyor. Kerem'in algısı en iyi hangi kavramla açıklanır?",
          "opts": [
            "*Top-down processing*",
            "*Perceptual set*",
            "*Bottom-up processing*",
            "*Change blindness*"
          ],
          "a": 2,
          "why": "Kerem'in elinde önceden bir beklenti yok; parçaları, yani veriyi tek tek toplayıp bir bütüne ulaşıyor. Bu *bottom-up processing*'dir. *Top-down* ve *perceptual set* önceki bilgi ya da beklentiyle başlar."
        },
        {
          "q": "Selin, kantinin önündeki panoda \"Yarın 3. ders iptal\" yazıp yazmadığını merakla kontrol ediyor. Panoda aslında \"Yarın 3. ders ilan\" yazıyor ama Selin \"iptal\" okuyor. Bu hatayı en iyi ne açıklar?",
          "opts": [
            "Beklentisinin yarattığı *perceptual set*",
            "*Bottom-up processing*'in baskın olması",
            "*Inattentional blindness*",
            "*Cocktail party effect*"
          ],
          "a": 0,
          "why": "Selin ne okumak istediğini önceden biliyor; bu beklenti algısını o yöne itiyor. Beklentiden kaynaklanan algı hazırlığı *perceptual set*'tir, yani bir *top-down* etkidir."
        },
        {
          "q": "Kalabalık bir okul koridorunda arkadaşıyla konuşan Mert, çevredeki gürültüyü fark etmiyor. Ama biraz ötede biri \"Mert\" deyince hemen o yöne dönüyor. Bu durum dikkat hakkında neyi gösterir?",
          "opts": [
            "Dikkat dışındaki uyaranlar hiç işlenmez",
            "Dikkat dışındaki bazı uyaranlar da bir düzeyde işlenir ve önemli olan fark edilir",
            "Seçici dikkat yalnızca görsel uyaranlar için çalışır",
            "Gürültü arttıkça kişinin kendi adını duyma olasılığı sıfıra iner"
          ],
          "a": 1,
          "why": "Bu *cocktail party effect*'tir: Mert gürültüyü bilinçli olarak dinlemiyor ama beyni onu yine de süzüyor; kendi adı gibi önemli bir bilgi süzgeçten geçip dikkate sızıyor."
        },
        {
          "q": "Hangi eşleştirme doğrudur?",
          "opts": [
            "Telefonuna bakarak yürüyen birinin yanından geçen bisikletliyi hiç görmemesi → *change blindness*",
            "Fotoğraftaki iki karede bir arabanın renginin değiştiğini fark etmemek → *inattentional blindness*",
            "Kendi adını kalabalıkta duymak → *perceptual set*",
            "Pas sayarken sahadan geçen kostümlü kişiyi görmemek → *inattentional blindness*"
          ],
          "a": 3,
          "why": "Dikkat başka bir göreve odaklıyken görüş alanındaki bir nesneyi kaçırmak *inattentional blindness*'tır. Bisikletli örneği de *inattentional blindness*'tır, renk değişimini kaçırmak ise *change blindness*. Adını duymak *cocktail party effect*'tir."
        },
        {
          "q": "Bir araştırmada katılımcılar bir dizi fotoğraf izliyor. A koşulunda fotoğraflar arasında bir nesne değiştiriliyor ve değişim anında ekran kısa bir süre kararıyor. B koşulunda aynı değişim ekran kararmadan yapılıyor. Sonuçlar tabloda. En iyi desteklenen sonuç hangisidir?",
          "opts": [
            "Kararma, katılımcıların görme keskinliğini kalıcı olarak azaltmıştır",
            "Değişim anı gizlendiğinde insanlar değişiklikleri çok daha sık kaçırır; bu *change blindness*'ı destekler",
            "Sonuçlar *bottom-up processing*'in hiç kullanılmadığını kanıtlar",
            "Katılımcılar B koşulunda daha az dikkatliydi"
          ],
          "a": 1,
          "why": "Kararmalı koşulda değişikliği fark edenler yüzde 10 (4/40), kararmasız koşulda yüzde 65 (26/40). Değişim anı görünmediğinde değişimi kaçırma artıyor: bu *change blindness*. Kalıcı bir görme kaybı ya da dikkat farkı veriden çıkmaz.",
          "fig": {
            "type": "table",
            "head": [
              "Koşul",
              "Katılımcı",
              "Değişikliği fark eden"
            ],
            "rows": [
              [
                "A · değişim anında kısa kararma",
                "40",
                "4"
              ],
              [
                "B · kararma yok",
                "40",
                "26"
              ]
            ],
            "caption": "Örnek veri"
          }
        }
      ]
    }
  ],
  "final": []
};
