/* ============================================================
   BİR FİKRİN OTOPSİSİ — AYARLAR
   Bu dosyadaki değerleri değiştirmek için kod bilmeniz gerekmez.
   Tırnak işaretlerinin ("...") içini değiştirin, kaydedin, sayfayı yenileyin.
   ============================================================ */

window.CONFIG = {

  /* ▶ VİDEO ------------------------------------------------------------
     Videonuzu "video" klasörüne koyun ve adını aşağıya yazın.
     (index.html dosyasına göre yol. Örnek: "video/chargebox.mp4")
     Chrome için en uyumlu biçim: .mp4 (H.264 + AAC)                     */
  videoFile: "video/bir-fikrin-180-saniyelik-hayati.mp4",

  // İsteğe bağlı kapak görseli (boş bırakılırsa tasarlanmış kapak kullanılır)
  videoPoster: "",

  // true  → DOSYA 00 ekranına gelince video kendiliğinden başlamayı dener.
  // false → Sunucu → / Space / tıklama ile başlatır. (Önerilen: false)
  videoAutoplay: false,

  // Video bitince "Az önce bir girişimcinin tanımını…" ekranına kendiliğinden geç
  videoAutoAdvance: true,

  /* ▶ GRUP ------------------------------------------------------------- */
  group: "2. Grup",
  members: [
    "Alperen Güncan",
    "Yalçın Ata Oruğ",
    "Tuna Alp Küçükcan",
    "Ada Sarp Kırık"
  ],

  /* ▶ HANGİ DOSYAYI KİM ANLATIYOR?
     Dosya kapaklarında küçük "İNCELEYEN" satırı olarak görünür.
     Gizlemek için showPresenters: false yapın ya da ismi "" bırakın.      */
  showPresenters: true,
  presenters: {
    "01": "Alperen Güncan",
    "02": "Yalçın Ata Oruğ",
    "03": "Tuna Alp Küçükcan",
    "04": "Ada Sarp Kırık",
    "05": "2. Grup"
  },

  /* ▶ GÖRÜNÜM ---------------------------------------------------------- */
  accent: "#6FE3C6",          // ana vurgu rengi (açılış ve final)

  // Her inceleme dosyasının kendi rengi: kapak paneli, vurgular, arka plan ışığı.
  fileColors: {
    "01": "#FFCF4A",   // safran   — Girişimci kimdir?
    "02": "#FF7759",   // mercan   — Girişimci neyi değiştirir?
    "03": "#5FE3C0",   // nane     — Girişimcinin DNA'sı
    "04": "#5BB6FF",   // gök      — Risk testi
    "05": "#FF7EB6",   // gül      — Başarı mı, hayatta kalma mı?
    "00": "#B8EC52",   // limon    — Video (mühürlü kanıt kaydı)
    "final": "#6FE3C6"
  },
  // DNA katmanları: Kişisel · Davranışsal · Sosyal
  layerColors: ["#FFCF4A", "#5FE3C0", "#5BB6FF"],
  showProgress: true,         // sağ alttaki "07 / 31" sayacı

  /* ▶ SÜRE (video hariç 7,5 dakika)
     Sunucu penceresinde (P) her dosya için "bitiş hedefi" gösterilir.
     Süre sayacı video oynarken durur. */
  timeLimit: "7:30",
  timing: { "intro": "0:15", "01": "1:25", "02": "2:30", "03": "4:20", "04": "5:25", "05": "6:40", "00": "6:50", "final": "7:30" },
  grain: true                 // hafif film greni
};

/* Test kolaylığı: adres çubuğuna ?video=video/baska.mp4 eklenirse o dosya oynatılır */
(function () {
  try {
    var q = new URLSearchParams(location.search);
    if (q.get("video")) window.CONFIG.videoFile = q.get("video");
  } catch (e) {}
})();
