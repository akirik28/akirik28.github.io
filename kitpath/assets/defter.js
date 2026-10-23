/* ==========================================================================
   Kitpath UI v2 · defter arama yardımcıları (window.KDEFTER)
   Defterlerin kendisi orijinal haliyle (canlı _kit/defter.js) defterler/cerceve.html içinde açılır;
   bu dosya yalnızca Defterler aramasında defter metnini düzleştirir.
   ========================================================================== */
(function () {
  "use strict";
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function md(s) {
    return esc(s).replace(/==(?!=)(.+?)==/g, '<mark class="df-mark">$1</mark>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, '<em class="df-term-i">$1</em>');
  }
  function duz(s) { return String(s == null ? "" : s).replace(/[*=]/g, ""); }

  /* aramada kullanmak için: bir defterin bölümlerinin düz metni */
  function metinler(D) {
    /* yalnızca metin değerleri: anahtar adları, sayılar ve kimlikler aranmaz */
    function topla(v, out) {
      if (typeof v === "string") { if (!/^(tip|id)$/.test(v)) out.push(v); }
      else if (Array.isArray(v)) v.forEach(function (x) { topla(x, out); });
      else if (v && typeof v === "object") Object.keys(v).forEach(function (k) { if (!/^(tip|id|renk|ikon|hiza|cevap)$/.test(k)) topla(v[k], out); });
      return out;
    }
    return (D.bolumler || []).map(function (b) { return duz([b.baslik, b.kisa || ""].concat(topla(b.bloklar || [], [])).join(" · ")); });
  }

  window.KDEFTER = { md: md, metinler: metinler, duz: duz };
})();
