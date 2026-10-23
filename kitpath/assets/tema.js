/* Tema, sayfa çizilmeden önce uygulanır (yanıp sönme olmasın diye <head> içinde, senkron).
   Kayıtlı seçim: "acik" | "koyu" | "cihaz" (varsayılan: cihaz). */
(function () {
  var pref = "cihaz";
  try { pref = localStorage.getItem("kitora-tema") || "cihaz"; } catch (e) {}
  var dark = pref === "koyu" || (pref === "cihaz" && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
})();
