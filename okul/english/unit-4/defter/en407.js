/* Kitora not defteri · en407 · 4.7 Akademik Dürüstlük ve Yapay Zekâ
   Okul dersi (10. sınıf English · Unit 4). Okulun yapay zekâ kuralını açıklar; öğrencinin işini yapmaz. */
window.DEFTER = {
  slug: "en407",
  amac: "Akademik dürüstlüğü (*academic integrity*) öğreneceksin: intihal türlerini, ne zaman atıf gerektiğini ve okulun üretken yapay zekâ kuralını (neye sınırlı izin var, neyin yasak olduğunu).",
  bolumler: [
    {
      baslik: "Akademik dürüstlük nedir?",
      kisa: "Başkasının emeğini kendi emeğin gibi sunmamak ve dürüst veri vermek.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Academic integrity", tr: "akademik dürüstlük", tanim: "Kendi işini kendin yapmak, kaynakları göstermek ve veriyi doğru sunmak.", ornek: "Her alıntıya atıf vermek." },
            { ikon: "🚫", terim: "Plagiarism", tr: "intihal", tanim: "Başkasının söz, fikir ya da verisini atıf vermeden kendi işin gibi sunmak. Niyet olmasa da intihal sayılabilir.", ornek: "Atıfsız kopyalanan paragraf." },
            { ikon: "🧪", terim: "Fabrication", tr: "uydurma", tanim: "Olmayan veri, anket sonucu, röportaj sözü ya da kaynak üretmek.", ornek: "Kaynakçaya var olmayan bir makale yazmak." },
            { ikon: "🤝", terim: "Unauthorized help", tr: "izinsiz yardım", tanim: "Ödevini başkasına ya da bir araca yazdırmak; izin verilen yardımın dışına çıkmak.", ornek: "Essay'i bir arkadaşa yazdırmak." }
          ] },
        { tip: "tuzak", metin: "İntihal için kötü niyet gerekmez.", yanlis: "Kasıtlı yapmadım, o hâlde intihal değil.", dogru: "Notlarını karıştırıp atıfı unutmak da ==intihal sayılabilir==; bu yüzden renk kodlu notlar tut." }
      ]
    },
    {
      baslik: "İntihal türleri",
      kisa: "İntihal yalnızca kopyala-yapıştır değildir; atıfsız parafraz da intihaldir.",
      bloklar: [
        { tip: "tablo", baslik: "İhlal türleri", head: ["Tür", "Ne demek?", "Nasıl önlenir?"], rows: [
            ["*Direct plagiarism*", "Başkasının metnini aynen kendi adınla vermek", "Tırnak + atıf"],
            ["*Patchwork plagiarism*", "Farklı kaynaklardan cümle parçalarını birleştirmek", "Kendi cümlelerinle yaz, her fikre atıf ver"],
            ["Atıfsız parafraz", "Fikri kendi sözlerinle yazıp kaynağı göstermemek", "Parafrazda da (Soyad Sayfa)"],
            ["*Self-plagiarism*", "Eski ödevini izin almadan yeniden teslim etmek", "Öğretmenden önceden izin iste"],
            ["*Fabrication*", "Uydurma veri, anket ya da kaynak", "Yalnızca gerçek veri ve kaynak kullan"],
            ["Yetkisiz yardım", "Yazmayı bir kişiye ya da yapay zekâya devretmek", "Okul kuralına uy (aşağıda)"]
          ] },
        { tip: "ikili", sol: { ikon: "🚫", baslik: "Dürüstlük ihlali", maddeler: ["Başkasının emeğini sahiplenir", "Ya da veriyi bozar"] },
          sag: { ikon: "✅", baslik: "Dürüst kullanım", maddeler: ["Atıflı, kendi sözlerinle", "Gerçek veriye dayanır"] },
          oyun: [
            { metin: "Bir makaleden cümle alıp tırnak ve atıf olmadan essay'e yazmak.", cevap: "sol", neden: "*Direct plagiarism*." },
            { metin: "Kaynaktaki fikri kendi cümlenle yazıp (Demir 45) eklemek.", cevap: "sag", neden: "Parafraz + atıf: dürüst kullanım." },
            { metin: "Anket sonuçlarını daha iyi görünsün diye değiştirmek.", cevap: "sol", neden: "*Fabrication*: veriyi bozmak." },
            { metin: "Bir arkadaşının yazdığı essay'i kendi adınla teslim etmek.", cevap: "sol", neden: "Başkasının emeğini sahiplenmek." },
            { metin: "\"Ankara Türkiye'nin başkentidir\" cümlesini atıfsız yazmak.", cevap: "sag", neden: "Yaygın bilgi: atıf gerekmez." }
          ] }
      ]
    },
    {
      baslik: "Ne zaman atıf gerekir?",
      kisa: "Başkasının fikri, verisi ve sözü için atıf gerekir.",
      bloklar: [
        { tip: "adimlar", baslik: "Atıf gerekli mi?", adimlar: [
            { baslik: "Fikir ya da veri kimin?", metin: "Senin özgün analizin değilse atıf gerekir." },
            { baslik: "Yaygın bilgi mi?", metin: "Herkesin bildiği, birçok kaynakta tartışmasız yer alan genel bilgiyse atıf gerekmez." },
            { baslik: "Sayı, tarih, yorum ya da tartışmalı iddia mı?", metin: "Atıf gerekir." },
            { baslik: "Emin değil misin?", metin: "Atıf ver ya da öğretmene sor." }
          ] },
        { tip: "tablo", baslik: "Örnekler", head: ["Atıf gerekmez", "Atıf gerekir"], rows: [
            ["Türkiye'nin başkenti Ankara'dır.", "Gençlerin yüzde kaçının yetersiz uyuduğunu söyleyen bir istatistik (Soyad Sayfa)."],
            ["Kanıttan sonra yazdığın kendi analiz cümlen (özgün yorumun).", "Bir uzmanın yorumu ya da araştırma bulgusu (Soyad)."]
          ], not: "Kendi anket ve röportajını da metinde ve kaynakçada belirt." },
        { tip: "tuzak", metin: "Yalnızca birkaç kelimeyi eş anlamlısıyla değiştirmek parafraz sayılmaz.", yanlis: "Cümlede 3 kelimeyi değiştirdim, artık benim.", dogru: "Cümle yapısını ve anlatımı kendin kur; fikir kaynaktan geldiği için ==atıf yine gerekir==." }
      ]
    },
    {
      baslik: "Okulun yapay zekâ kuralı",
      kisa: "Araştırmada ve yazmada üretken yapay zekâ yasak; yalnızca sınırlı destek var.",
      bloklar: [
        { tip: "grafik", baslik: "Süreçte yapay zekâ kuralı", xlabel: "Süreç →", ylabel: "", xmax: 10, ymax: 4,
          ogeler: [
            { id: "z1", tip: "alan", renk: 2, noktalar: [[0, 0], [2.5, 0], [2.5, 0], [0, 0]], gizli: true },
            { id: "z2", tip: "alan", renk: 1, noktalar: [[2.5, 0], [5, 0], [5, 0], [2.5, 0]], gizli: true },
            { id: "z3", tip: "alan", renk: 2, noktalar: [[5, 0], [7.5, 0], [7.5, 0], [5, 0]], gizli: true },
            { id: "z4", tip: "alan", renk: 1, noktalar: [[7.5, 0], [10, 0], [10, 0], [7.5, 0]], gizli: true },
            { id: "a1", tip: "yazi", x: 1.25, y: 2.4, metin: "Araştırma", gizli: true },
            { id: "b1", tip: "yazi", x: 1.25, y: 1.4, metin: "YASAK", gizli: true },
            { id: "a2", tip: "yazi", x: 3.75, y: 2.4, metin: "Düzen planı", gizli: true },
            { id: "b2", tip: "yazi", x: 3.75, y: 1.4, metin: "SINIRLI", gizli: true },
            { id: "a3", tip: "yazi", x: 6.25, y: 2.4, metin: "Yazma", gizli: true },
            { id: "b3", tip: "yazi", x: 6.25, y: 1.4, metin: "YASAK", gizli: true },
            { id: "a4", tip: "yazi", x: 8.75, y: 2.4, metin: "Düzeltme", gizli: true },
            { id: "b4", tip: "yazi", x: 8.75, y: 1.4, metin: "SINIRLI", gizli: true }
          ],
          durumlar: [
            { metin: "Araştırmada (kaynak bulma, özetletme, bilgi toplama) üretken yapay zekâ ==yasak==.", goster: ["z1", "a1", "b1"], set: { z1: { noktalar: [[0, 0], [2.5, 0], [2.5, 3], [0, 3]] } } },
            { metin: "Düzen önerisi: paragraf sırası gibi planlama desteği sınırlı olarak izinli.", goster: ["z2", "a2", "b2"], set: { z2: { noktalar: [[2.5, 0], [5, 0], [5, 3], [2.5, 3]] } } },
            { metin: "Yazmada (cümle, paragraf, konuşma, slayt metni) üretken yapay zekâ ==yasak==.", goster: ["z3", "a3", "b3"], set: { z3: { noktalar: [[5, 0], [7.5, 0], [7.5, 3], [5, 3]] } } },
            { metin: "Düzeltmede yazım denetimi ve kısaltma sınırlı olarak izinli.", goster: ["z4", "a4", "b4"], set: { z4: { noktalar: [[7.5, 0], [10, 0], [10, 3], [7.5, 3]] } } }
          ] },
        { tip: "tablo", baslik: "Ne yapabilirsin, ne yapamazsın?", head: ["Kullanım", "Durum", "Not"], rows: [
            ["Paragraf sırası için düzen önerisi almak", "Sınırlı izin", "Kararı ve yazmayı sen yaparsın"],
            ["Kendi yazdığın metni kısaltmak", "Sınırlı izin", "Sonucu kontrol et; anlam ve emek senin olmalı"],
            ["Yazım denetimi (*spell check*)", "Sınırlı izin", "Düzeltme, yeniden yazma değildir"],
            ["Kaynak bulma, makale özetletme", "Yasak (araştırma)", "Uydurma kaynak riski (*hallucination*)"],
            ["Paragraf, essay, konuşma ya da slayt metni yazdırmak", "Yasak (yazma)", "Kendi sözlerinle yazmalısın"],
            ["Anket ya da röportaj verisi üretmek", "Yasak", "*Fabrication*"]
          ], not: "Sınırda kalan bir kullanım için yapmadan önce öğretmenine yazılı olarak sor; şüphede kullanma." },
        { tip: "ikili", sol: { ikon: "🟡", baslik: "Sınırlı izin", maddeler: ["Düzen önerisi, kısaltma, yazım denetimi", "Yazan sen kalırsın"] },
          sag: { ikon: "🔴", baslik: "Yasak", maddeler: ["Araştırma ve yazma", "Kaynak, metin ya da veri üretmek"] },
          oyun: [
            { metin: "Taslağımı bitirdim; paragraf sırası için öneri aldım, kararı ben verdim.", cevap: "sol", neden: "Düzen önerisi: sınırlı izin." },
            { metin: "Yapay zekâya \"bu konuda 4 kaynak bul\" dedim.", cevap: "sag", neden: "Araştırmada yasak." },
            { metin: "Yazım hatalarımı düzelttirdim.", cevap: "sol", neden: "Yazım denetimi." },
            { metin: "Konuşma metnini yazdırıp ezberledim.", cevap: "sag", neden: "Yazmada yasak." },
            { metin: "Kendi paragrafımı kısalttırdım, anlamı kontrol ettim.", cevap: "sol", neden: "Kısaltma: sınırlı izin." }
          ] },
        { tip: "tuzak", metin: "Yapay zekâ var olmayan kaynak ve alıntı üretebilir.", yanlis: "Araç verdi, o hâlde kaynak gerçektir.", dogru: "Var olmayan kaynağı *Works Cited*'a yazmak ==fabrication==; araştırmada zaten yasak." }
      ]
    },
    {
      baslik: "Şüphede ne yapılır?",
      kisa: "Emin değilsen sor; sürecini belgele.",
      bloklar: [
        { tip: "adimlar", baslik: "Emin değilsen", adimlar: [
            { baslik: "Dur", metin: "Kuralı çiğneyip çiğnemediğinden emin değilsen kullanma." },
            { baslik: "Kuralı oku", metin: "Öğretmenin yönergesine ve okulun kuralına bak." },
            { baslik: "Öğretmene yaz", metin: "Ne yapmak istediğini somut olarak sor." },
            { baslik: "Yazılı cevabı sakla", metin: "Sonradan gerekirse göstermek için." },
            { baslik: "Cevaba göre uygula", metin: "İzin yoksa kendin yap." }
          ] },
        { tip: "liste", baslik: "Dürüst çalışma alışkanlıkları", maddeler: [
            { ikon: "🎨", baslik: "Renk kodlu notlar", metin: "Her bilginin kaynağını bil." },
            { ikon: "📁", baslik: "Taslakları sakla", metin: "Süreç senin emeğini gösterir." },
            { ikon: "✉️", baslik: "E-postaları sakla", metin: "Öğretmenle ve uzmanla yazışmalar." },
            { ikon: "🙋", baslik: "Yardım iste", metin: "Öğretmen ve yazma desteği meşru yardımdır." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Akademik dürüstlük: kendi işini yap, kaynak göster, veriyi uydurma.",
            "İntihal türleri: doğrudan, mozaik, atıfsız parafraz, kendini tekrar, uydurma, yetkisiz yardım.",
            "Niyet olmasa da intihal olur; renk kodlu not bunu önler.",
            "Yaygın bilgi için atıf gerekmez; sayı, yorum ve tartışmalı iddia için gerekir.",
            "Eş anlamlı kelime değiştirmek parafraz değildir.",
            "Üretken yapay zekâ araştırmada ve yazmada yasak; yalnızca düzen önerisi, kısaltma ve yazım denetimi gibi sınırlı destek var.",
            "Yapay zekâ var olmayan kaynak uydurabilir; bunu kaynakçaya yazmak *fabrication*'dır.",
            "Emin değilsen öğretmene yazılı sor ve cevabı sakla."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir öğrenci kaynaktaki cümlede yalnızca üç kelimeyi eş anlamlılarıyla değiştirdi ve atıf vermedi. Bu durum nedir?",
      opts: ["Doğru parafraz.", "Atıfsız yakın parafraz yani intihal.", "Yalnızca bir imla hatası.", "Yaygın bilgi kullanımı."], a: 1,
      why: "Cümle yapısı ve fikir kaynaktan geldiği için atıf gerekir; eş anlamlı değişimi parafraz sayılmaz. \"Doğru parafraz\" çekici ama yanlıştır." },
    { q: "Bir öğrenci yapay zekâya \"bu konuda 4 güvenilir kaynak öner\" deyip çıkan listeyi kaynakçaya ekledi. Doğru değerlendirme hangisidir?",
      opts: ["İzinli: kaynak bulmak düzen önerisidir.", "İzinli: yazım denetimidir.", "İzinli: kısaltmadır.", "Yasak: araştırmada üretken yapay zekâ yasak; ayrıca kaynaklar var olmayabilir."], a: 3,
      why: "Kaynak bulmak araştırmadır ve okulun kuralına göre yasaktır. Yapay zekâ var olmayan kaynak üretebilir; bunu kaynakçaya yazmak *fabrication* olur." },
    { q: "Aşağıdaki kullanımlardan hangisi okulun yapay zekâ kuralındaki sınırlı izne girer?",
      fig: { type: "table", head: ["Şık", "Kullanım"], rows: [["A", "Essay'in üçüncü paragrafını yazdırmak"], ["B", "Konuşmanın açılışını yazdırmak"], ["C", "Paragraf sırası için öneri alıp kararı kendin vermek"], ["D", "Makale özetini yapay zekâya hazırlatmak"]] },
      opts: ["A", "B", "C", "D"], a: 2,
      why: "C düzen önerisidir: sınırlı izin. A ve B yazma, D araştırmadır; ikisi de yasak." },
    { q: "Aşağıdakilerden hangisi için atıf gerekir?",
      opts: ["Gençlerin yüzde kaçının yetersiz uyuduğunu söyleyen bir araştırma sonucu.", "Ankara'nın Türkiye'nin başkenti olması.", "Bir yılın 12 aydan oluşması.", "Suyun 100 derecede kaynaması (okul bilgisi)."], a: 0,
      why: "Belirli bir veri ya da bulgu atıf ister. Diğer üçü yaygın bilgidir; fakat emin değilsen sormak her zaman güvenlidir." },
    { q: "Bir öğrenci geçen dönem teslim ettiği essay'i öğretmene söylemeden bu projeye yeniden teslim etti. Bu nedir?",
      opts: ["Sorun yok; kendi emeği.", "*Self-plagiarism*: eski çalışmayı izinsiz yeniden teslim etmek.", "*Fabrication*: veri uydurmak.", "Yaygın bilgi kullanımı."], a: 1,
      why: "Eski ödevi izinsiz yeniden kullanmak *self-plagiarism*'dir. \"Kendi emeği\" çekici ama yeni görev için yeni çalışma beklenir; veri uydurulmuş değil." }
  ]
};
