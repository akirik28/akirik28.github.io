/* Kitora ders listesi.
   - matematik + secmeli: okulun 2026-27 seçmeli formundan (Grade 11 electives); 11. sınıfa sorulur.
   - ap: okulda dersi olmayan ama 11. sınıfların girdiği AP sınavları; 11. sınıfa ayrıca sorulur.
   - onuncu: 10. sınıfın ortak dersleri; 10. sınıfa sorulmaz, otomatik atanır.
     Bu liste veritabanındaki ap_profil_kaydet fonksiyonuyla AYNI olmalı.
   Yönetim panelinde quiz açarken bütün gruplar ders olarak seçilebilir. */
window.KITORA_DERSLER = {
  matematik: ["AP Calculus BC/AB", "Calculus"],
  secmeli: [
    "Honours Comparative Literature",
    "Computer Science",
    "Innovation & Entrepreneurship Management",
    "Honours Human Geography",
    "Honours World History",
    "Ekonomi",
    "Psikoloji",
    "AP Statistics",
    "Advanced Biology 1",
    "Advanced Chemistry 1",
    "Advanced Physics 1",
    "AP Chemistry",
    "AP Physics C: Mechanics",
    "Fundamentals of Science"
  ],
  ap: ["AP Macroeconomics", "AP Microeconomics", "AP Psychology"],
  onuncu: ["Precalculus and Trigonometry", "Chemistry 10", "Physics 10", "Biology 10", "English 10"]
};
