/* Kitpath'in GitHub Pages kopyası kapandı (2026-10-24): akirik28.github.io'da açılan Kitpath / AP kit /
   defter / cep sayfaları "süresi doldu" der ve kitpath.org'daki aynı adrese gider. kitpath.org'da hiçbir şey yapmaz.
   Aynı blok assets/hesap.js (Kitpath) ve ap/_kit/hesap.js (kitler, defterler) dosyalarının başında da var. */
(function () {
  if (!/(^|\.)akirik28\.github\.io$/.test(location.hostname)) return;
  if (!/^\/(kitpath|kitora|ap|cep)(\/|$)/.test(location.pathname)) return;
  var hedef = "https://kitpath.org" + location.pathname + location.search + location.hash;
  function goster() {
    if (document.getElementById("kitpath-tasindi")) return;
    var d = document.createElement("div");
    d.id = "kitpath-tasindi";
    d.setAttribute("role", "alertdialog");
    d.setAttribute("aria-live", "assertive");
    d.style.cssText = "position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:24px;background:#10131C;color:#F3F1EA;font:16px/1.5 Inter,system-ui,-apple-system,sans-serif;text-align:center";
    d.innerHTML = '<div style="max-width:440px;display:flex;flex-direction:column;align-items:center;gap:14px">' +
      '<div style="font-size:44px;line-height:1">⏳</div>' +
      '<h1 style="margin:0;font-size:28px;line-height:1.2;font-weight:800;letter-spacing:-.02em">Bu bağlantının süresi doldu</h1>' +
      '<p style="margin:0;color:#A9AEC0">Kitpath artık <strong style="color:#F3F1EA">kitpath.org</strong> adresinde. Birkaç saniye içinde oraya yönlendiriliyorsun.</p>' +
      '<a href="' + hedef.replace(/"/g, "&quot;") + '" style="margin-top:6px;padding:12px 22px;border-radius:999px;background:#A8E07A;color:#14210B;font-weight:700;text-decoration:none">kitpath.org\'a git →</a>' +
      '<p style="margin:0;font-size:13px;color:#7E8497">Hesabınla tekrar giriş yapman gerekebilir; ilerlemen hesabında duruyor.</p></div>';
    (document.body || document.documentElement).appendChild(d);
  }
  if (document.body) goster(); else document.addEventListener("DOMContentLoaded", goster);
  setTimeout(function () { location.replace(hedef); }, 3500);
})();
