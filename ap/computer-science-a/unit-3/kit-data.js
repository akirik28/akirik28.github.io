/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/cs3N/questions.json) */
window.KIT = {
  "store": "csa-u3:v1:",
  "course": "AP Computer Science A",
  "unitLabel": "Unit 3 — Class Creation",
  "episodes": [
    {
      "no": 1,
      "code": "3.1–3.2",
      "slug": "cs301",
      "title": "Soyutlama ve Program Tasarımı",
      "en": "Abstraction, Program Design, and Its Impact",
      "accent": "#FF8A65",
      "defter": "cs301",
      "seconds": 308,
      "terms": [
        "Abstraction",
        "Procedural abstraction",
        "Data abstraction",
        "Program specification",
        "Precondition",
        "Postcondition",
        "Reliability",
        "Privacy",
        "Intellectual property"
      ],
      "questions": [
        {
          "q": "Bir sınıfın alanlarının bellekte nasıl tutulduğunu düşünmeden, nesneyi yalnızca \"sahibi ve bakiyesi olan bir kart\" diye düşünmek hangi kavrama örnektir?",
          "opts": [
            "Veri soyutlaması (data abstraction)",
            "İşlemsel soyutlama (procedural abstraction)",
            "Metot aşırı yükleme (overloading)",
            "Ön koşul (precondition)"
          ],
          "a": 0,
          "why": "Bir veri tipinin ne olduğunu, nasıl temsil edildiğinden ayırmak *data abstraction*'dır. *Procedural abstraction* bir metodun ne yaptığını, nasıl yaptığından ayırır."
        },
        {
          "q": "Belirtim: \"Otopark programı her aracın plakasını ve giriş saatini tutar; araç çıkarken ücret hesaplanır.\" Hangisi bir metoda (davranışa) dönüşmelidir?",
          "opts": [
            "Aracın plakası",
            "Giriş saati",
            "Çıkışta ücreti hesaplamak",
            "Otoparkın adı"
          ],
          "a": 2,
          "why": "Belirtimdeki isimler (plaka, giriş saati) veriye, fiiller (hesaplamak) metoda dönüşür. Ücreti hesaplamak bir davranıştır."
        },
        {
          "q": "Aşağıdaki yorumlara göre sumTo(-3) çağrılırsa hangisi doğrudur?",
          "opts": [
            "Metot 0 döndürmek zorundadır.",
            "Metot bir hata mesajı yazdırmak zorundadır.",
            "Ön koşul sağlanmadığı için metodun ne yapacağı belirtilmemiştir; doğru argümanı vermek çağıranın sorumluluğudur.",
            "Derleyici bu çağrıyı reddeder."
          ],
          "a": 2,
          "why": "*Precondition*'ı sağlamak çağıranın işidir. Sağlanmazsa metodun davranışı belirtimde tanımlı değildir. Yorumlar kodu çalıştırmaz ve derleyici onları denetlemez.",
          "fig": {
            "type": "code",
            "code": "// Precondition: n > 0\n// Postcondition: returns 1 + 2 + ... + n\npublic int sumTo(int n)"
          }
        },
        {
          "q": "Bir sınav uygulaması, başka bir geliştiricinin açık kaynak kodunu, lisansın istediği kaynak gösterimini yapmadan kullanıyor. Program doğru çalışıyor. Sorun öncelikle hangi alandadır?",
          "opts": [
            "Güvenilirlik (reliability)",
            "Gizlilik (privacy)",
            "Veri soyutlaması",
            "Fikri mülkiyet ve lisans"
          ],
          "a": 3,
          "why": "Başkasının kodunu lisans koşullarına uymadan kullanmak hukuk ve fikri mülkiyet sorunudur. Program doğru çalıştığı için güvenilirlik sorunu yok; kişisel veri de söz konusu değil."
        },
        {
          "q": "Kantin kartı programı, bakiye tam 0 iken yapılan ödeme isteğinde çöküyor. En uygun önlem hangisidir?",
          "opts": [
            "Uygulamayı yalnızca bakiyesi yüksek öğrencilere açmak",
            "Sınır durumlarını (bakiye 0, çok büyük tutar) içeren testler yapıp hatayı düzeltmek",
            "Bakiye alanını public yapmak",
            "Ön koşul yorumlarını silmek"
          ],
          "a": 1,
          "why": "Beklenmedik girdide çökmek bir güvenilirlik sorunudur. Çözüm, sınır durumlarını sınayıp kodu düzeltmektir. Alanı *public* yapmak ya da yorumları silmek sorunu çözmez."
        }
      ]
    }
  ],
  "final": []
};
