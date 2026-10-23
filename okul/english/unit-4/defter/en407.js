/* Kitpath not defteri · en407 · 4.7 Akademik Dürüstlük ve Yapay Zekâ
   Okul dersi (10. sınıf English · Unit 4). Okulun yapay zekâ kuralını açıklar; öğrencinin işini yapmaz.
   Kaynak: Dr Byrd'ün Research Process Project (Grade 10 AI belgesi) ve Argument Essay belgeleri. İki projenin kuralı biraz farklı yazıldığı için ayrı ele alınır.
   "Ek bilgi" etiketli kısımlar öğretmen belgesinde yoktur. */
window.DEFTER = {
  slug: "en407",
  amac: "Akademik dürüstlüğü (*academic integrity*) öğreneceksin: intihalin ne olduğunu, ne zaman atıf gerektiğini, sonuçlarını (Dekan, sıfır bantları, Turnitin) ve üretken yapay zekâ kuralını. Araştırma projesi ile argüman essay'inin kuralları biraz farklı yazıldığı için ikisini ayrı öğreneceksin.",
  bolumler: [
    {
      baslik: "Akademik dürüstlük ve intihal",
      kisa: "Başkasının emeğini kendi emeğin gibi sunmamak ve dürüst veri vermek.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Academic integrity", tr: "akademik dürüstlük", tanim: "Kendi işini kendin yapmak, kaynakları göstermek ve veriyi doğru sunmak. UAA öğrenci ve veli el kitabındaki politikaya bağlıdır.", ornek: "Her alıntıya atıf vermek." },
            { ikon: "🚫", terim: "Plagiarism", tr: "intihal", tanim: "Başkasının söz, fikir ya da verisini atıf vermeden kendi işin gibi sunmak. Atıfsız parafraz ve çok fazla alıntı da intihaldir.", ornek: "Atıfsız kopyalanan paragraf." },
            { ikon: "🧪", terim: "Fabrication", tr: "uydurma (ek bilgi)", tanim: "Ek bilgi: olmayan veri, anket sonucu, röportaj sözü ya da kaynak üretmek.", ornek: "Kaynakçaya var olmayan bir makale yazmak." },
            { ikon: "🤝", terim: "Unauthorized help", tr: "izinsiz yardım (ek bilgi)", tanim: "Ek bilgi: ödevini başkasına ya da bir araca yazdırmak. Özel ders ya da yapay zekâ araştırma projesinde de yasaktır.", ornek: "Essay'i bir arkadaşa yazdırmak." }
          ] },
        { tip: "tuzak", metin: "Kaynakça ya da metin içi atıf hiç yoksa bu “plagiarism danger” sayılır.", yanlis: "Kasıtlı yapmadım, o hâlde intihal değil.", dogru: "Atıfı unutmak da ==intihal tehlikesidir==; bu yüzden renk kodlu notlar tut ve her kaynağa metin içi atıf ile Works Cited girişi ver." }
      ]
    },
    {
      baslik: "Ek bilgi: intihal türleri",
      kisa: "Ek bilgi: intihal yalnız kopyala-yapıştır değildir.",
      bloklar: [
        { tip: "tablo", baslik: "İhlal türleri", head: ["Tür", "Ne demek?", "Nasıl önlenir?"], rows: [
            ["*Direct plagiarism*", "Başkasının metnini aynen kendi adınla vermek", "Tırnak + atıf"],
            ["*Patchwork plagiarism*", "Farklı kaynaklardan cümle parçalarını birleştirmek", "Kendi cümlelerinle yaz, her fikre atıf ver"],
            ["Atıfsız parafraz", "Fikri kendi sözlerinle yazıp kaynağı göstermemek", "Parafrazda da (Soyad Sayfa)"],
            ["*Self-plagiarism*", "Eski ödevini izin almadan yeniden teslim etmek", "Öğretmenden önceden izin iste"],
            ["*Fabrication*", "Uydurma veri, anket ya da kaynak", "Yalnızca gerçek veri ve kaynak kullan"],
            ["Yetkisiz yardım", "Yazmayı bir kişiye ya da yapay zekâya devretmek", "Okul kuralına uy (aşağıda)"]
          ], not: "Sınavda böyle yaz: *Paraphrasing without a citation is still plagiarism.*" },
        { tip: "ikili", sol: { ikon: "🚫", baslik: "Dürüstlük ihlali", maddeler: ["Başkasının emeğini sahiplenir", "Ya da veriyi bozar"] },
          sag: { ikon: "✅", baslik: "Dürüst kullanım", maddeler: ["Atıflı, kendi sözlerinle", "Gerçek veriye dayanır"] },
          oyun: [
            { metin: "Bir makaleden cümle alıp tırnak ve atıf olmadan essay'e yazmak.", cevap: "sol", neden: "*Direct plagiarism*." },
            { metin: "Kaynaktaki fikri kendi cümlenle yazıp (Demir 45) eklemek.", cevap: "sag", neden: "Parafraz + atıf: dürüst kullanım." },
            { metin: "Anket sonuçlarını daha iyi görünsün diye değiştirmek.", cevap: "sol", neden: "*Fabrication*: veriyi bozmak." },
            { metin: "Bir arkadaşının yazdığı essay'i kendi adınla teslim etmek.", cevap: "sol", neden: "Başkasının emeğini sahiplenmek." },
            { metin: "“Ankara Türkiye'nin başkentidir” cümlesini atıfsız yazmak.", cevap: "sag", neden: "Yaygın bilgi: atıf gerekmez." }
          ] }
      ]
    },
    {
      baslik: "Ne zaman atıf gerekir?",
      kisa: "Başkasının fikri, verisi ve sözü için atıf gerekir.",
      bloklar: [
        { tip: "adimlar", baslik: "Atıf gerekli mi?", adimlar: [
            { baslik: "Fikir ya da veri kimin?", metin: "Senin özgün analizin değilse atıf gerekir." },
            { baslik: "Yaygın bilgi mi?", metin: "Herkesin bildiği, tartışmasız genel bilgiyse (*common knowledge*) ve geçici bir anmaysa atıf gerekmez." },
            { baslik: "Sayı, tarih, yorum ya da tartışmalı iddia mı?", metin: "Atıf gerekir." },
            { baslik: "Emin değil misin?", metin: "Atıf ver ya da öğretmene sor." }
          ] },
        { tip: "tablo", baslik: "Örnekler", head: ["Atıf gerekmez", "Atıf gerekir"], rows: [
            ["Türkiye'nin başkenti Ankara'dır.", "Gençlerin yüzde kaçının yetersiz uyuduğunu söyleyen bir istatistik (Soyad Sayfa)."],
            ["Kanıttan sonra yazdığın kendi analiz cümlen.", "Bir uzmanın yorumu ya da araştırma bulgusu (Soyad)."]
          ], not: "Kendi anket ve röportajını da metinde ve kaynakçada belirt. Sınavda böyle yaz: *This statistic comes from [source], so it must be cited.*" },
        { tip: "tuzak", metin: "Yalnızca birkaç kelimeyi eş anlamlısıyla değiştirmek parafraz sayılmaz.", yanlis: "Cümlede 3 kelimeyi değiştirdim, artık benim.", dogru: "Cümle yapısını ve anlatımı kendin kur; fikir kaynaktan geldiği için ==atıf yine gerekir==." }
      ]
    },
    {
      baslik: "Sonuçlar: Dekan, sıfır bantları ve Turnitin",
      kisa: "İntihal projeyi kaybettirir; essay'de sıfır bantları ve Turnitin vardır.",
      bloklar: [
        { tip: "tablo", baslik: "Ne olur?", head: ["Durum", "Sonuç"], rows: [
            ["Research Process Project'te intihal", "Dekan (*Dean*) bilgilendirilir ve proje kaybedilir"],
            ["Essay: 4'ten fazla parafraz sorunu", "Cümle yapısı, sözcük, mekanik bölümünün (10 puan) tamamı 0"],
            ["Essay: 4'ten fazla eksik in-text atıf", "MLA biçimi bölümünün (20 puan) tamamı 0"],
            ["Essay: çok fazla intihal", "Yönetime bildirilir"],
            ["Kaynak klasörü yok ya da kaynak sahte", "Kaynak kopyaları bölümünün (25 puan) tamamı 0"],
            ["Geç teslim", "Her kısım için günlük %10 kesinti"]
          ], not: "Sınavda böyle yaz: *Plagiarism is reported to the administration.*" },
        { tip: "tuzak", metin: "Turnitin metin eşleşmesine bakar; atıf ve Works Cited hatalarını göstermez.", yanlis: "Turnitin eşleşmem düşük, o hâlde atıflarım doğru.", dogru: "Atıf ve Works Cited hatalarını Turnitin göstermez; ==kontrolü sen yap==. Teslim tek DOC belgedir." }
      ]
    },
    {
      baslik: "Araştırma projesinde yapay zekâ (Dönem 1)",
      kisa: "Yalnız beyin fırtınası ve küçük dilbilgisi düzeltmesi; kullandığını bildir.",
      bloklar: [
        { tip: "tablo", baslik: "Research Process Project: Grade 10 AI belgesi", head: ["Kullanım", "Durum"], rows: [
            ["Beyin fırtınası (örneğin outline düzeni önerisi)", "Serbest"],
            ["Küçük dilbilgisi düzeltmesi", "Serbest"],
            ["Araştırma yapmak, yazmak", "YASAK"],
            ["Taslak ya da önemli bölümleri yeniden yazdırmak", "YASAK"],
            ["Yapay zekâ özetlerini kaynak saymak", "YASAK"],
            ["Özel ders (tutor) ya da yapay zekâ ile işi yaptırmak", "YASAK: işin kendi işin olmalı"]
          ], not: "Sınavda böyle yaz: *AI may be used only for brainstorming and minor grammar corrections.*" },
        { tip: "liste", baslik: "Kullanırsan zorunlu adımlar", maddeler: [
            { ikon: "📣", baslik: "Açıkça bildir", metin: "Works Cited'da ve metin içinde göster; yapay zekâ asla yazar değildir." },
            { ikon: "🧾", baslik: "MLA girişi", metin: "Başlık = istemin kendisi ya da kısa özeti (tırnakta, sen yaz); kap = araç; sürüm; tarih; konuşma URL'si. Metin içi örnek: (“Brainstorm”). Ayrıntı en402'de." },
            { ikon: "🖨️", baslik: "Belgele", metin: "Her konuşmayı (istem + cevap) bas, klasöre koy, kullandığın kısmı vurgula." },
            { ikon: "🗣️", baslik: "Açıkla", metin: "Öğretmen neden ve nasıl kullandığını sorarsa ayrıntılı yanıt ver." },
            { ikon: "⚖️", baslik: "İhlal", metin: "Kuralı çiğnemek akademik dürüstlük ihlalidir (UAA politikası)." }
          ] }
      ]
    },
    {
      baslik: "Argüman essay'inde yapay zekâ (Dönem 2)",
      kisa: "Çok sınırlı kullanım; araştırma için ASLA; yazmayı yapay zekâya bırakma.",
      bloklar: [
        { tip: "tablo", baslik: "İki projenin kuralı yan yana", head: ["", "Research Process Project (Dönem 1)", "Argument Essay (Dönem 2)"], rows: [
            ["Serbest", "Beyin fırtınası (örneğin outline düzeni), küçük dilbilgisi düzeltmesi", "Düzen önerisi (İÇERİK DEĞİL), ağdalı tezi kısaltma, Grammarly ya da yazım denetimiyle hataları kendin düzeltme"],
            ["Araştırma", "Yasak", "ASLA: hiçbir tür araştırma için kullanılmaz"],
            ["Yazma", "Yasak (taslak, yeniden yazdırma)", "Yapay zekâ senin yerine yazmaz"],
            ["Bildirim", "Works Cited ve metin içinde göster; konuşmayı bas", "Özet belgede biçim yazılı değil; ek bilgi: kullandıysan öğretmene açıkça söyle"],
            ["Çeviri", "Türkçe kaynak zaten yasak", "Türkçe kaynak: önce öğretmen onayı; çeviriyi sen yaparsın, yapay zekâ ile çeviri YASAK"]
          ], not: "Sınavda böyle yaz: *Generative AI may not replace research or writing.*" },
        { tip: "grafik", baslik: "Süreçte yapay zekâ", xlabel: "Süreç →", ylabel: "", xmax: 10, ymax: 4,
          ogeler: [
            { id: "z1", tip: "alan", renk: 2, noktalar: [[0, 0], [2.5, 0], [2.5, 0], [0, 0]], gizli: true },
            { id: "z2", tip: "alan", renk: 1, noktalar: [[2.5, 0], [5, 0], [5, 0], [2.5, 0]], gizli: true },
            { id: "z3", tip: "alan", renk: 2, noktalar: [[5, 0], [7.5, 0], [7.5, 0], [5, 0]], gizli: true },
            { id: "z4", tip: "alan", renk: 1, noktalar: [[7.5, 0], [10, 0], [10, 0], [7.5, 0]], gizli: true },
            { id: "a1", tip: "yazi", x: 1.25, y: 2.4, metin: "Araştırma", gizli: true },
            { id: "b1", tip: "yazi", x: 1.25, y: 1.4, metin: "ASLA", gizli: true },
            { id: "a2", tip: "yazi", x: 3.75, y: 2.4, metin: "Düzen planı", gizli: true },
            { id: "b2", tip: "yazi", x: 3.75, y: 1.4, metin: "SINIRLI", gizli: true },
            { id: "a3", tip: "yazi", x: 6.25, y: 2.4, metin: "Yazma", gizli: true },
            { id: "b3", tip: "yazi", x: 6.25, y: 1.4, metin: "YASAK", gizli: true },
            { id: "a4", tip: "yazi", x: 8.75, y: 2.4, metin: "Düzeltme", gizli: true },
            { id: "b4", tip: "yazi", x: 8.75, y: 1.4, metin: "SINIRLI", gizli: true }
          ],
          durumlar: [
            { metin: "Araştırmada (kaynak bulma, özetletme, bilgi toplama) üretken yapay zekâ ==asla== kullanılmaz.", goster: ["z1", "a1", "b1"], set: { z1: { noktalar: [[0, 0], [2.5, 0], [2.5, 3], [0, 3]] } } },
            { metin: "Düzen önerisi ya da beyin fırtınası: yalnız sınırlı, içerik değil; kullandığını bildir.", goster: ["z2", "a2", "b2"], set: { z2: { noktalar: [[2.5, 0], [5, 0], [5, 3], [2.5, 3]] } } },
            { metin: "Yazmada (cümle, paragraf, konuşma metni) üretken yapay zekâ ==yasak==.", goster: ["z3", "a3", "b3"], set: { z3: { noktalar: [[5, 0], [7.5, 0], [7.5, 3], [5, 3]] } } },
            { metin: "Düzeltmede yazım denetimi, küçük dilbilgisi düzeltmesi ve tezi kısaltma sınırlı olarak izinli; hataları sen düzeltirsin.", goster: ["z4", "a4", "b4"], set: { z4: { noktalar: [[7.5, 0], [10, 0], [10, 3], [7.5, 3]] } } }
          ] },
        { tip: "ikili", sol: { ikon: "🟡", baslik: "Sınırlı izin (essay)", maddeler: ["Düzen önerisi, tezi kısaltma, yazım denetimi", "Yazan sen kalırsın"] },
          sag: { ikon: "🔴", baslik: "Yasak", maddeler: ["Araştırma, yazma, çeviri", "Kaynak, metin ya da veri üretmek"] },
          oyun: [
            { metin: "Kendi yazdığım ağdalı tezi kısalttırdım, sonucu kontrol ettim.", cevap: "sol", neden: "Tezi kısaltma: sınırlı izin." },
            { metin: "Yapay zekâya “bu konuda 4 kaynak bul” dedim.", cevap: "sag", neden: "Araştırmada ASLA." },
            { metin: "Yazım hatalarımı Grammarly ile gösterip kendim düzelttim.", cevap: "sol", neden: "Hataları kendin düzeltiyorsun." },
            { metin: "Türkçe makaleyi yapay zekâyla İngilizceye çevirdim.", cevap: "sag", neden: "Yapay zekâ ile çeviri yasak." },
            { metin: "Bir body paragrafını yazdırıp biraz değiştirdim.", cevap: "sag", neden: "Yazmayı devretmek yasak." }
          ] },
        { tip: "tuzak", metin: "Yapay zekâ var olmayan kaynak ve alıntı üretebilir.", yanlis: "Araç verdi, o hâlde kaynak gerçektir.", dogru: "Var olmayan kaynağı Works Cited'a yazmak ==uydurmadır (fabrication)==; araştırmada zaten yasaktır." }
      ]
    },
    {
      baslik: "Şüphede ne yapılır?",
      kisa: "Emin değilsen sor; sürecini belgele.",
      bloklar: [
        { tip: "adimlar", baslik: "Ek bilgi: emin değilsen", adimlar: [
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
            { ikon: "🙋", baslik: "Yardım iste", metin: "Öğretmenden yardım istemek meşrudur." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Akademik dürüstlük: kendi işini yap, kaynak göster, veriyi uydurma; atıfsız parafraz ve çok alıntı da intihaldir.",
            "Research Process Project'te intihal: Dekan bilgilendirilir, proje kaybedilir.",
            "Essay'de 4'ten fazla parafraz sorunu dil bölümünü (10), 4'ten fazla eksik in-text atıf MLA bölümünü (20) sıfırlar.",
            "Turnitin eşleşmeye bakar; atıf ve Works Cited hatalarını göstermez.",
            "Dönem 1: yapay zekâ yalnız beyin fırtınası ve küçük dilbilgisi; kullanırsan Works Cited'da ve metinde göster, konuşmayı bas, vurgula; yapay zekâ yazar değildir.",
            "Dönem 2: yapay zekâ yalnız düzen önerisi (içerik değil), ağdalı tezi kısaltma ve yazım denetimi; araştırma için ASLA, yazmayı ASLA devretme.",
            "Türkçe kaynak: önce onay, çeviriyi sen yap; yapay zekâ ile çeviri yasak.",
            "Emin değilsen öğretmene yazılı sor ve cevabı sakla."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which AI use is allowed in the first-semester Research Process Project?",
      opts: ["Asking AI to find four sources", "Having AI rewrite the body of the outline", "Brainstorming an outline order and disclosing the use", "Counting an AI summary as one of the sources"], a: 2,
      why: "Research Process Project'te yalnız beyin fırtınası (örneğin outline düzeni) ve küçük dilbilgisi düzeltmesi serbesttir ve açıkça bildirilir. Araştırma, yeniden yazdırma ve AI özetini kaynak saymak yasaktır." },
    { q: "Which AI use falls within the very limited uses allowed for the argument essay?",
      opts: ["Shortening a wordy thesis that the student wrote", "Having AI write a body paragraph", "Asking AI to find research sources", "Translating a Turkish source with AI"], a: 0,
      why: "Argument essay'de çok sınırlı kullanım: düzen önerisi (içerik değil), ağdalı tezi kısaltma ve yazım denetimi. Paragraf yazdırmak, kaynak bulmak ve yapay zekâ ile çeviri yasaktır; araştırma için yapay zekâ ASLA kullanılmaz." },
    { q: "A student used an AI tool to brainstorm for the Research Process Project. What must the folder contain?",
      opts: ["Nothing; brainstorming does not have to be shown.", "Only the name of the AI tool.", "A screenshot of the AI tool's homepage.", "A printed copy of the whole conversation (prompt and answer) with the used part highlighted."], a: 3,
      why: "Her yapay zekâ konuşması (istem + cevap) basılı olarak klasöre girer ve kullanılan kısım vurgulanır; ayrıca Works Cited ve metin içinde gösterilir. “Gösterilmesine gerek yok” çekici ama kurala aykırıdır." },
    { q: "What happens if plagiarism is found in the Research Process Project?",
      opts: ["A single 10% deduction is applied.", "The Dean is informed and the project is lost.", "The student rewrites the outline for half credit.", "Only a verbal warning is given."], a: 1,
      why: "Research Process Project'te intihal: Dekan bilgilendirilir ve proje kaybedilir. %10 kesinti geç teslimin sonucudur, intihalin değil." },
    { q: "A student wants to use a Turkish article in the argument paper. Which approach is correct?",
      opts: ["Ask the teacher first; if approved, translate the source and the citation personally, without AI.", "Translate it with an AI tool and cite the translation.", "Use it without approval because the article is reliable.", "Turkish sources are never allowed in any project."], a: 0,
      why: "Argument paper'da Türkçe kaynak için önce öğretmen onayı gerekir; sonra kaynağı ve atfı sen İngilizceye çevirirsin, yapay zekâ ile çeviri yasaktır. Son şık Research Process Project'e aittir, essay için doğru değildir." }
  ]
};
