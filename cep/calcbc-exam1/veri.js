/* AP Calc BC · Exam 1 hazırlık kiti · veri
   Kaynak: 11. sınıf AP Calculus BC Classroom'u, "Exam 1 Objectives" belgesi (Drive 1dvyMqeuDwsYPyvsvrtW0GIXGWP8tfQO5):
   Unit 1 tamamı, Unit 2 tamamı, Unit 3'ten yalnız Chain Rule ve Implicit Differentiation. Sınav 5 Kasım 2026.
   26 Ekim 2026 türev kuralları quizi (power, trig, exp, log, sum/difference, product, quotient, chain) da hesaba katıldı.
   Sorular ve açıklamalar kendi yazımımız; her sayısal cevap sympy ile doğrulandı (KONTROL.md). */

/* ---------- küçük biçim yardımcıları (düz HTML matematik) ---------- */
const F=(n,d)=>`<span class="fr"><span>${n}</span><span>${d}</span></span>`;          /* kesir */
const L=s=>`<span class="lim">lim<sub>${s}</sub></span>`;                                  /* lim, alt simgeli */
const PW=(a,b)=>`<span class="pw"><span>${a}</span><span>${b}</span></span>`;              /* parçalı fonksiyon */
const TB=(head,rows,cap)=>`<div class="fig"><table class="dt"><thead><tr>${head.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>${cap?`<div class="cap">${cap}</div>`:''}</div>`;

/* Grafik çizici: matematik koordinatlarında parçalar, dolu / açık noktalar, dikey asimptotlar */
function GRAF(c){
  const W=360,H=c.h||240,p=26,[x0,x1]=c.x,[y0,y1]=c.y;
  const X=v=>(p+(v-x0)*(W-2*p)/(x1-x0)).toFixed(1),Y=v=>(H-p-(v-y0)*(H-2*p)/(y1-y0)).toFixed(1);
  let s=`<svg class="gr" viewBox="0 0 ${W} ${H}" role="img" aria-label="${c.alt}">`;
  for(let i=Math.ceil(x0);i<=x1;i++)s+=`<line class="g-grid" x1="${X(i)}" y1="${Y(y0)}" x2="${X(i)}" y2="${Y(y1)}"/>`;
  for(let j=Math.ceil(y0);j<=y1;j++)s+=`<line class="g-grid" x1="${X(x0)}" y1="${Y(j)}" x2="${X(x1)}" y2="${Y(j)}"/>`;
  s+=`<line class="g-ax" x1="${X(x0)}" y1="${Y(0)}" x2="${X(x1)}" y2="${Y(0)}"/><line class="g-ax" x1="${X(0)}" y1="${Y(y0)}" x2="${X(0)}" y2="${Y(y1)}"/>`;
  for(let i=Math.ceil(x0);i<=x1;i++)if(i)s+=`<text class="g-t" x="${X(i)}" y="${(+Y(0)+13).toFixed(1)}" text-anchor="middle">${i<0?'−'+(-i):i}</text>`;
  for(let j=Math.ceil(y0);j<=y1;j++)if(j)s+=`<text class="g-t" x="${(+X(0)-5).toFixed(1)}" y="${(+Y(j)+3.5).toFixed(1)}" text-anchor="end">${j<0?'−'+(-j):j}</text>`;
  s+=`<text class="g-t g-i" x="${(+X(x1)-2).toFixed(1)}" y="${(+Y(0)-5).toFixed(1)}" text-anchor="end">x</text><text class="g-t g-i" x="${(+X(0)+6).toFixed(1)}" y="${(+Y(y1)+10).toFixed(1)}">y</text>`;
  (c.asym||[]).forEach(a=>s+=`<line class="g-as" x1="${X(a)}" y1="${Y(y0)}" x2="${X(a)}" y2="${Y(y1)}"/>`);
  (c.paths||[]).forEach(P=>s+=`<polyline class="g-f" points="${P.map(([a,b])=>X(a)+','+Y(b)).join(' ')}"/>`);
  (c.dots||[]).forEach(([a,b])=>s+=`<circle class="g-d" cx="${X(a)}" cy="${Y(b)}" r="4"/>`);
  (c.holes||[]).forEach(([a,b])=>s+=`<circle class="g-h" cx="${X(a)}" cy="${Y(b)}" r="4.2"/>`);
  return `<div class="fig">${s}</svg>${c.cap?`<div class="cap">${c.cap}</div>`:''}</div>`;
}
const SAMP=(fn,a,b,n)=>{const r=[];for(let i=0;i<=n;i++){const x=a+(b-a)*i/n;r.push([x,fn(x)]);}return r;};

const G1=GRAF({x:[-0.5,6.5],y:[-0.5,5.5],alt:'Graph of f: segment from (0,1) to an open circle at (2,3); filled point at (2,1); segment from (2,3) down to a filled point at (4,2); open circle at (4,4) and segment up to (6,5).',
  paths:[[[0,1],[2,3]],[[2,3],[4,2]],[[4,4],[6,5]]],dots:[[0,1],[2,1],[4,2],[6,5]],holes:[[2,3],[4,4]],cap:'Graph of f'});
const G2=GRAF({x:[-0.5,7.5],y:[-0.5,6.5],h:250,alt:'Graph of f: open circle at (1,2) with a filled point at (1,4); filled point at (3,3) and open circle at (3,1); vertical asymptote x = 5 with f increasing without bound on both sides.',
  paths:[[[0,1],[1,2]],[[1,2],[3,3]],SAMP(x=>0.5+1/(5-x),3,4.83,40),SAMP(x=>0.5+1/(x-5),5.17,7,40)],dots:[[0,1],[1,4],[3,3],[7,1]],holes:[[1,2],[3,1]],asym:[5],cap:'Graph of f (dashed line: x = 5)'});
const G3=GRAF({x:[-1.5,6.5],y:[-0.5,4.5],h:220,alt:'Graph of f: line from (−1,3) down to a corner at (1,1), then up to a filled point at (4,4); open circle at (4,2) and horizontal segment to (6,2).',
  paths:[[[-1,3],[1,1],[4,4]],[[4,2],[6,2]]],dots:[[-1,3],[4,4],[6,2]],holes:[[4,2]],cap:'Graph of f on [−1, 6]'});

/* ---------- bölümler (sitedeki Calc BC kitleri, kit-data.js'ten) ---------- */
const EP={
 cb101:{u:1,k:'1.1–1.2',t:'Limit Nedir?'},cb102:{u:1,k:'1.3–1.4',t:'Grafikten ve Tablodan Limit'},cb103:{u:1,k:'1.5, 1.9',t:'Limit Kuralları ve Gösterimleri Bağlamak'},
 cb104:{u:1,k:'1.6–1.7',t:'Cebirsel Teknikler ve Yöntem Seçimi'},cb105:{u:1,k:'1.8',t:'Sıkıştırma Teoremi ve Trigonometrik Limitler'},cb106:{u:1,k:'1.10–1.11',t:'Süreklilik ve Süreksizlik Türleri'},
 cb107:{u:1,k:'1.12–1.13',t:'Aralıkta Süreklilik ve Süreksizliği Giderme'},cb108:{u:1,k:'1.14',t:'Sonsuz Limitler ve Dikey Asimptotlar'},cb109:{u:1,k:'1.15',t:'Sonsuzda Limit ve Yatay Asimptotlar'},cb110:{u:1,k:'1.16',t:'Ara Değer Teoremi'},
 cb201:{u:2,k:'2.1',t:'Ortalama ve Anlık Değişim Hızı'},cb202:{u:2,k:'2.2',t:'Türevin Tanımı ve Gösterimleri'},cb203:{u:2,k:'2.3',t:'Türevi Tahmin Etmek'},cb204:{u:2,k:'2.4',t:'Türevlenebilirlik ve Süreklilik'},
 cb205:{u:2,k:'2.5',t:'Kuvvet Kuralı'},cb206:{u:2,k:'2.6',t:'Temel Türev Kuralları'},cb207:{u:2,k:'2.7',t:'sin x, cos x, eˣ ve ln x\'in Türevleri'},cb208:{u:2,k:'2.8',t:'Çarpım Kuralı'},cb209:{u:2,k:'2.9',t:'Bölüm Kuralı'},cb210:{u:2,k:'2.10',t:'tan x, cot x, sec x ve csc x\'in Türevleri'},
 cb301:{u:3,k:'3.1',t:'Zincir Kuralı'},cb302:{u:3,k:'3.1',t:'Üstel, Logaritmik ve İç İçe Zincirler'},cb303:{u:3,k:'3.1',t:'Tablo ve Grafikle Zincir Kuralı'},cb304:{u:3,k:'3.2',t:'Kapalı Türev'},cb305:{u:3,k:'3.2',t:'Kapalı Eğrilerde Teğet Doğruları'},
 cb306:{u:3,k:'3.3',t:'Ters Fonksiyonların Türevi'},cb307:{u:3,k:'3.4',t:'Ters Trigonometrik Fonksiyonların Türevi'},cb308:{u:3,k:'3.5–3.6',t:'Yöntem Seçimi ve Yüksek Mertebeden Türevler'}
};
const ROOT='../../ap/calculus-bc/';
const UNITS={1:'Unit 1 · Limits and Continuity',2:'Unit 2 · Differentiation: Definition and Fundamental Properties',3:'Unit 3 · Composite and Implicit Functions (sınavdaki kısmı)'};

/* ---------- Exam 1 objectives (başlıklar listedeki gibi) ---------- */
const OBJ=[
 {u:1,c:'1.2',en:'Defining Limits and Using Limit Notation',tr:'Limitin anlamı; lim, tek taraflı limit gösterimi.',ep:['cb101']},
 {u:1,c:'1.3',en:'Estimating Limit Values from Graphs',tr:'Grafikte soldan / sağdan limit, açık ve dolu nokta.',ep:['cb102']},
 {u:1,c:'1.4',en:'Estimating Limit Values from Tables',tr:'Tablodaki değerlerden limit tahmini.',ep:['cb102']},
 {u:1,c:'1.5',en:'Determining Limits Using Algebraic Properties of Limits',tr:'Toplam, çarpım, bölüm, kuvvet kuralları.',ep:['cb103']},
 {u:1,c:'1.6',en:'Determining Limits Using Algebraic Manipulation',tr:'0/0 çıkınca çarpanlara ayır, eşlenikle çarp, payda eşitle.',ep:['cb104']},
 {u:1,c:'1.8',en:'Determining Limits Using the Squeeze Theorem',tr:'İki sınır aynı değere gidiyorsa ortadaki de oraya gider; sin x / x.',ep:['cb105']},
 {u:1,c:'1.10',en:'Exploring Types of Discontinuities',tr:'Kaldırılabilir, sıçrama, sonsuz süreksizlik.',ep:['cb106']},
 {u:1,c:'1.11',en:'Defining Continuity at a Point',tr:'Üç şart: f(c) tanımlı, limit var, limit = f(c).',ep:['cb106']},
 {u:1,c:'1.12',en:'Confirming Continuity over an Interval',tr:'Hangi fonksiyon nerede sürekli; tanım kümesi.',ep:['cb107']},
 {u:1,c:'1.13',en:'Removing Discontinuities',tr:'Deliği doldurmak; parçalı fonksiyonda sabit bulmak.',ep:['cb107']},
 {u:1,c:'1.14',en:'Connecting Infinite Limits and Vertical Asymptotes',tr:'±∞ limit, dikey asimptot; delik ile asimptotu ayırmak.',ep:['cb108']},
 {u:1,c:'1.15',en:'Connecting Limits at Infinity and Horizontal Asymptotes',tr:'x → ±∞, derece karşılaştırma, √(x²) = |x|.',ep:['cb109']},
 {u:1,c:'1.16',en:'Working with the Intermediate Value Theorem (IVT)',tr:'Süreklilik şartı, ara değer, en az kaç kök.',ep:['cb110']},
 {u:2,c:'2.2',en:'Defining the Derivative of a Function and Using Derivative Notation',tr:'Türevin limit tanımı (iki biçim), f′, dy/dx.',ep:['cb202','cb201']},
 {u:2,c:'2.3',en:'Estimating Derivatives of a Function at a Point',tr:'Tablodan / grafikten türev tahmini (fark bölümü).',ep:['cb203']},
 {u:2,c:'2.4',en:'Connecting Differentiability and Continuity',tr:'Türevlenebilir ⇒ sürekli; köşe, sivri uç, dikey teğet.',ep:['cb204']},
 {u:2,c:'2.5',en:'Applying the Power Rule',tr:'xⁿ → nxⁿ⁻¹; kök ve 1/x'+'ⁿ'+'\'i üslü yazmak.',ep:['cb205']},
 {u:2,c:'2.6',en:'Constant, Sum, Difference, and Constant Multiple rules',tr:'Sabit, toplam, fark, sabit kat kuralları.',ep:['cb206']},
 {u:2,c:'2.7',en:'Derivatives of cos x, sin x, eˣ and ln x',tr:'Dört temel türev ve işaretleri.',ep:['cb207']},
 {u:2,c:'2.8',en:'The Product Rule',tr:'(fg)′ = f′g + fg′.',ep:['cb208']},
 {u:2,c:'2.9',en:'The Quotient Rule',tr:'(f/g)′ = (f′g − fg′)/g².',ep:['cb209']},
 {u:2,c:'2.10',en:'Derivatives of tan, cot, sec, csc',tr:'Kalan dört trigonometrik türev.',ep:['cb210']},
 {u:3,c:'3.1',en:'The Chain Rule',tr:'Dışın türevi (içe dokunma) × içteki türev; tablo ve grafikle.',ep:['cb301','cb302','cb303']},
 {u:3,c:'3.2',en:'Implicit Differentiation',tr:'Her y teriminde dy/dx; noktada eğim ve teğet doğrusu.',ep:['cb304','cb305']}
];
/* listede adı geçmeyen ama aynı videolarda anlatılan destek konuları */
const DESTEK=[['1.1','Introducing Calculus: Can Change Occur at an Instant?','cb101'],['1.7','Selecting Procedures for Determining Limits','cb104'],['1.9','Connecting Multiple Representations of Limits','cb103'],['2.1','Defining Average and Instantaneous Rates of Change at a Point','cb201']];
/* Exam 1 listesinde olmayan Unit 3 konuları */
const DISI=[['3.3','Differentiating Inverse Functions','cb306'],['3.4','Differentiating Inverse Trigonometric Functions','cb307'],['3.5','Selecting Procedures for Calculating Derivatives','cb308'],['3.6','Calculating Higher-Order Derivatives','cb308']];

/* ---------- formül ve kural kartları ---------- */
const KART=[
 {u:1,h:'Limit gösterimi',b:`<p>${L('x→c')} f(x) = L: x, c'ye (c'ye eşit olmadan) yaklaştıkça f(x) L'ye yaklaşır.</p><p>${L('x→c<sup>−</sup>')} soldan (x &lt; c), ${L('x→c<sup>+</sup>')} sağdan (x &gt; c).</p><p class="key">Limit var ⇔ soldan limit = sağdan limit. f(c)'nin değeri limiti etkilemez.</p>`},
 {u:1,h:'Limit özellikleri',b:`<p>${L('x→c')} f = A ve ${L('x→c')} g = B ise:</p><ul><li>lim (f ± g) = A ± B</li><li>lim k·f = k·A</li><li>lim (f·g) = A·B</li><li>lim f/g = A/B <b>(B ≠ 0 ise)</b></li><li>lim [f]ⁿ = Aⁿ</li><li>lim g(f(x)) = g(A), g, A'da sürekliyse</li></ul>`},
 {u:1,h:'0/0 çıkınca',b:`<p>0/0 “limit yok” demek değil, “cebir yap” demek.</p><ul><li><b>Çarpanlara ayır</b>, ortak çarpanı sadeleştir.</li><li>Kök varsa <b>eşlenikle</b> çarp.</li><li>İç içe kesirde <b>payda eşitle</b>.</li><li>Trigonometride özdeşlik kullan.</li></ul><p>a/0 (a ≠ 0) çıkarsa: tek taraflı limitler ±∞, dikey asimptot adayı.</p>`},
 {u:1,h:'Sıkıştırma teoremi',b:`<p>c civarında g(x) ≤ f(x) ≤ h(x) ve ${L('x→c')} g = ${L('x→c')} h = L ise ${L('x→c')} f = L.</p><p>Bilinmesi gereken iki limit:</p><p>${L('x→0')} ${F('sin x','x')} = 1 &nbsp;&nbsp; ${L('x→0')} ${F('1 − cos x','x')} = 0</p><p class="tiny muted">Örnek: −x² ≤ x² sin(1/x) ≤ x² ⇒ limit 0.</p>`},
 {u:1,h:'Süreklilik: 3 şart',b:`<p>f, x = c'de süreklidir ancak ve ancak:</p><ol><li>f(c) tanımlı,</li><li>${L('x→c')} f(x) var (soldan = sağdan),</li><li>${L('x→c')} f(x) = f(c).</li></ol><p class="key">Gerekçe yazarken üç şartı da açıkça yaz.</p>`},
 {u:1,h:'Süreksizlik türleri',b:`<ul><li><b>Kaldırılabilir (removable):</b> limit var ama f(c) yok ya da limitten farklı → delik. Doldurmak için f(c) = limit tanımla.</li><li><b>Sıçrama (jump):</b> tek taraflı limitler var ama farklı.</li><li><b>Sonsuz (infinite):</b> en az bir taraf ±∞ → dikey asimptot.</li></ul><p>Polinom, eˣ, sin, cos her yerde; rasyonel, ln, tan, kök <b>tanım kümelerinde</b> sürekli.</p>`},
 {u:1,h:'Asimptotlar',b:`<p><b>Dikey:</b> x = a, eğer ${L('x→a<sup>±</sup>')} f(x) = ±∞. Rasyonelde paydayı sıfır yapıp <b>sadeleşmeyen</b> çarpanlar. Sadeleşen çarpan = delik.</p><p><b>Yatay:</b> y = L, eğer ${L('x→±∞')} f(x) = L. Rasyonelde dereceler:</p><ul><li>pay &lt; payda → y = 0</li><li>eşit → baş katsayılar oranı</li><li>pay &gt; payda → yatay asimptot yok</li></ul><p class="key">x → −∞ iken √(x²) = |x| = −x. İşareti unutma.</p>`},
 {u:1,h:'Ara Değer Teoremi (IVT)',b:`<p><b>Şart:</b> f, [a, b]'de <b>sürekli</b>.</p><p><b>Sonuç:</b> N, f(a) ile f(b) arasında bir sayıysa, f(c) = N olan en az bir c ∈ (a, b) vardır.</p><p class="key">Gerekçe kalıbı: “f is continuous on [a, b] and f(a) &lt; N &lt; f(b), so by the IVT there is a c in (a, b) with f(c) = N.”</p><p class="tiny muted">IVT varlık söyler, c'nin değerini vermez. İşaret değişimi sayısı = en az kök sayısı.</p>`},
 {u:2,h:'Türevin tanımı (iki biçim)',b:`<p>f′(a) = ${L('h→0')} ${F('f(a + h) − f(a)','h')}</p><p>f′(a) = ${L('x→a')} ${F('f(x) − f(a)','x − a')}</p><p>Gösterim: f′(x), y′, ${F('dy','dx')}, ${F('d','dx')} f(x). f′(a): x = a noktasındaki teğetin eğimi, yani anlık değişim hızı.</p><p class="key">Bir limiti “türev kılığında” görünce: f'yi ve a'yı bul, sonra kuralla türev al.</p>`},
 {u:2,h:'Türevi tahmin etmek',b:`<p>Tabloda x = a'nın iki yanındaki en yakın değerlerle:</p><p>f′(a) ≈ ${F('f(b) − f(c)','b − c')} (c &lt; a &lt; b)</p><p>Grafikte: teğet doğrusunun eğimi. Teğet: y − f(a) = f′(a)(x − a).</p>`},
 {u:2,h:'Türevlenebilirlik ve süreklilik',b:`<p class="key">Türevlenebilir ⇒ sürekli. Tersi doğru değil.</p><p>Türevin olmadığı yerler: <b>köşe</b> (|x|), <b>sivri uç</b> (x<sup>2/3</sup>), <b>dikey teğet</b> (x<sup>1/3</sup>), <b>süreksizlik</b>.</p><p>Parçalı fonksiyonda x = c'de türevlenebilirlik: (1) iki parça c'de aynı değeri versin, (2) iki parçanın türevi c'de eşit olsun.</p>`},
 {u:2,h:'Temel türev kuralları',b:`<ul><li>(k)′ = 0</li><li>(xⁿ)′ = n·xⁿ⁻¹ (her reel n)</li><li>(k·f)′ = k·f′</li><li>(f ± g)′ = f′ ± g′</li><li><b>Çarpım:</b> (fg)′ = f′g + fg′</li><li><b>Bölüm:</b> (f/g)′ = ${F('f′g − fg′','g²')}</li></ul><p class="tiny muted">Önce üslü yaz: √x = x<sup>1/2</sup>, 1/x³ = x<sup>−3</sup>, ∛x² = x<sup>2/3</sup>.</p>`},
 {u:2,h:'eˣ, ln x ve 6 trig türevi',b:`<table class="dt"><tbody><tr><td>(eˣ)′ = eˣ</td><td>(ln x)′ = 1/x</td></tr><tr><td>(sin x)′ = cos x</td><td>(cos x)′ = −sin x</td></tr><tr><td>(tan x)′ = sec² x</td><td>(cot x)′ = −csc² x</td></tr><tr><td>(sec x)′ = sec x tan x</td><td>(csc x)′ = −csc x cot x</td></tr></tbody></table><p class="key">“co” ile başlayanların (cos, cot, csc) türevi eksi işaretli.</p><p class="tiny muted">Hesap makinesiz değerler: sin, cos için 0, π/6, π/4, π/3, π/2 tablosunu ezberle.</p>`},
 {u:3,h:'Zincir kuralı',b:`<p>${F('d','dx')} f(g(x)) = f′(g(x)) · g′(x)</p><p>Leibniz: ${F('dy','dx')} = ${F('dy','du')} · ${F('du','dx')}</p><ul><li>(uⁿ)′ = n·uⁿ⁻¹·u′</li><li>(e<sup>u</sup>)′ = e<sup>u</sup>·u′</li><li>(ln u)′ = u′/u</li><li>(sin u)′ = cos u · u′</li></ul><p class="key">Tabloda: f′'yi <b>g(x)'in değerinde</b> oku, x'te değil.</p>`},
 {u:3,h:'Kapalı türev adımları',b:`<ol><li>İki tarafın x'e göre türevini al.</li><li>Her y teriminde zincir: (y²)′ = 2y·${F('dy','dx')}, (sin y)′ = cos y·${F('dy','dx')}.</li><li>xy gibi çarpımlarda çarpım kuralı: (xy)′ = y + x·${F('dy','dx')}.</li><li>${F('dy','dx')} içeren terimleri bir tarafa topla, ortak paranteze al, böl.</li><li>Noktada eğim için x <b>ve</b> y'yi yerine koy.</li></ol><p class="tiny muted">Yatay teğet: pay = 0. Dikey teğet: payda = 0.</p>`}
];

/* ---------- sık yapılan hatalar ---------- */
const HATA=[
 ['0/0 = limit yok','0/0 belirsizdir: çarpanlara ayır, eşlenikle çarp, sonra tekrar yerine koy.'],
 ['f(c) ile limiti karıştırmak','Grafikte dolu nokta f(c)\'yi verir; limit iki tarafın yaklaştığı yüksekliktir.'],
 ['Delik mi asimptot mu?','Sadeleşen çarpan delik, sadeleşmeyen çarpan dikey asimptot yapar. Önce sadeleştir.'],
 ['x → −∞ iken √(x²) = x yazmak','√(x²) = |x|; x negatifken bu −x. Yatay asimptotta işaret değişir.'],
 ['Sürekliliği iki şartla göstermek','Üç şartın üçü de yazılmalı: f(c) tanımlı, limit var, ikisi eşit.'],
 ['IVT\'de sürekliliği yazmamak','Gerekçe “f is continuous on [a, b]” cümlesi olmadan puan almaz.'],
 ['Sürekli ⇒ türevlenebilir sanmak','Köşe ve sivri uçta fonksiyon sürekli ama türevsizdir.'],
 ['Çarpımın türevini türevlerin çarpımı sanmak','(fg)′ ≠ f′g′. Doğrusu f′g + fg′.'],
 ['Bölüm kuralında sırayı ters yazmak','Pay: (üstün türevi)·alt − üst·(altın türevi). Ters yazarsan işaret değişir.'],
 ['Eksi işaretini kaçırmak','(cos x)′ = −sin x, (cot x)′ = −csc² x, (csc x)′ = −csc x cot x; 1/x² = x⁻² → −2x⁻³.'],
 ['Zincirde iç türevi unutmak','sin(3x)\'in türevi 3cos(3x); (x² + 1)⁵\'in türevi 5(x² + 1)⁴·2x.'],
 ['Tablolu zincirde yanlış satır','h = f(g(x)) için h′(1) = f′(g(1))·g′(1). f′(1) değil.'],
 ['Kapalı türevde dy/dx\'i unutmak','y² → 2y·dy/dx, xy → y + x·dy/dx. Eğim için x ve y ikisini de koy.'],
 ['Teğet doğrusu için tek bilgi','Teğet için hem nokta (f(a)) hem eğim (f′(a)) gerekir: y − f(a) = f′(a)(x − a).']
];

/* ---------- karışık deneme: 30 soru (o = OBJ sırası; Unit 1: 13, Unit 2: 11, Unit 3: 6) ---------- */
const TEST=[
 {o:0,q:`Which of the following describes the statement ${L('x→3<sup>−</sup>')} f(x) = 5?`,
  o_:['As x approaches 3 through values less than 3, f(x) approaches 5.','As x approaches 3 through values greater than 3, f(x) approaches 5.','f(3) = 5, and f(x) is less than 5 for every x that is less than 3.','As x approaches 5 through values less than 5, f(x) approaches 3.'],a:0,
  e:'Alt simgedeki x → 3 nereye yaklaşıldığını, üstteki − işareti soldan (3\'ten küçük değerlerle) yaklaşıldığını söyler. Eşitliğin sağındaki 5, f(x)\'in yaklaştığı değerdir. Limit f(3) hakkında hiçbir şey söylemez.'},
 {o:1,q:`${G1}Open circles are not on the graph. What is ${L('x→2')} f(x) + ${L('x→4<sup>+</sup>')} f(x) + f(4)?`,
  o_:['9','7','11',`It cannot be found, since ${L('x→4')} f(x) does not exist.`],a:0,
  e:'x → 2: iki taraf da (2, 3)\'teki açık daireye gidiyor, limit 3. Dolu nokta f(2) = 1 limiti değiştirmez. x → 4⁺: sağ parça (4, 4)\'teki açık daireden başlıyor, limit 4. f(4) dolu noktadan 2. Toplam 3 + 4 + 2 = 9. (7 çıktıysa limit yerine f(2)\'yi aldın.) x = 4\'te iki taraflı limit yok ama soru yalnız sağdan limiti soruyor; o var.'},
 {o:2,q:`${TB(['x','g(x)'],[['2.9','26.11'],['2.99','26.9101'],['2.999','26.991'],['3','undefined'],['3.001','27.009'],['3.01','27.0901'],['3.1','27.91']])}The table gives values of g near x = 3. Based on the table, what is the best estimate of ${L('x→3')} g(x)?`,
  o_:['27','26.99','27.01','The limit does not exist, since g(3) is undefined.'],a:0,
  e:'Soldan değerler 26.11 → 26.91 → 26.991, sağdan 27.91 → 27.09 → 27.009: iki taraf da 27\'ye yaklaşıyor. g(3)\'ün tanımsız olması limiti etkilemez.'},
 {o:3,q:`If ${L('x→2')} f(x) = 3 and ${L('x→2')} g(x) = −2, what is ${L('x→2')} ${F('(f(x))² − 4g(x)','f(x) + g(x)')}?`,
  o_:['17','−17','1','It cannot be determined without formulas for f and g.'],a:0,
  e:'Paydanın limiti 3 + (−2) = 1 ≠ 0, bu yüzden bölüm kuralı kullanılabilir. Pay: 3² − 4(−2) = 9 + 8 = 17. Sonuç 17/1 = 17. Formüle gerek yok, limitlerin değerleri yeter. (1 çıktıysa −4·(−2)\'nin işaretini kaçırdın.)'},
 {o:4,q:`What is ${L('x→−3')} ${F('x² + 2x − 3','x² + 5x + 6')}?`,
  o_:['4','−4','0','The limit does not exist.'],a:0,
  e:'x = −3 koyunca 0/0 çıkıyor: sadeleştir. Pay (x + 3)(x − 1), payda (x + 3)(x + 2). x ≠ −3 için ifade (x − 1)/(x + 2); x → −3 iken (−4)/(−1) = 4.'},
 {o:5,q:`Suppose 4x − 9 ≤ f(x) ≤ x² − 4x + 7 for all x near 4. What is ${L('x→4')} f(x)?`,
  o_:['7','16','9','The limit does not exist.'],a:0,
  e:'Alt sınır 4·4 − 9 = 7\'ye, üst sınır 16 − 16 + 7 = 7\'ye gidiyor. İki sınır aynı değere gittiği için sıkıştırma teoremine göre f\'nin limiti de 7. (Sıra doğru mu: üst − alt = (x − 4)² ≥ 0.)'},
 {o:6,q:`${G2}Which of the following statements about f is true?`,
  o_:['f has a jump discontinuity at x = 3.','f has a removable discontinuity at x = 3.','f has a jump discontinuity at x = 1 and at x = 5.','f has a removable discontinuity at x = 5.'],a:0,
  e:'x = 1: iki taraf aynı açık daireye gidiyor, f(1) ise başka yerde → limit var ama f(1) ≠ limit: kaldırılabilir. x = 3: soldan 3\'e, sağdan 1\'e gidiyor → sıçrama. x = 5: değerler sınırsız büyüyor, dikey asimptot → sonsuz süreksizlik.'},
 {o:7,q:`Let f(x) = ${PW('kx + 1,&nbsp; x &lt; 2','x² − k,&nbsp; x ≥ 2')} For what value of k is f continuous at x = 2?`,
  o_:['1','−1','3','No value of k makes f continuous at x = 2.'],a:0,
  e:'Süreklilik için soldan limit = sağdan limit = f(2). Soldan: 2k + 1. Sağdan ve f(2): 4 − k. 2k + 1 = 4 − k → 3k = 3 → k = 1. Kontrol: iki taraf da 3.'},
 {o:8,q:'Which of the following functions is continuous for all real numbers?',
  o_:[`${F('x² − 1','x − 1')}`,'tan x',`${F('eˣ','x² + 1')}`,'ln|x|'],a:2,
  e:'eˣ her yerde sürekli, x² + 1 hiç sıfır olmaz (en küçük değeri 1). Paydası sıfır olmayan sürekli bir bölüm her yerde süreklidir. Diğerleri: (x² − 1)/(x − 1) x = 1\'de, tan x x = π/2 + nπ\'de, ln|x| x = 0\'da tanımsız.'},
 {o:9,q:`Let f(x) = ${F('x² + x − 6','x − 2')} for x ≠ 2. What value should f(2) have so that f is continuous at x = 2?`,
  o_:['5','−3','2','None; this discontinuity cannot be removed.'],a:0,
  e:'x² + x − 6 = (x + 3)(x − 2). x ≠ 2 için f(x) = x + 3, limit 5. f(2) = 5 tanımlanırsa üç şart da sağlanır; süreksizlik kaldırılabilir (grafikte delik).'},
 {o:10,q:`What are the vertical asymptotes of the graph of f(x) = ${F('x² − 4','x² − x − 2')}?`,
  o_:['x = −1 only','x = 2 only','x = −1 and x = 2','x = −1, x = 2, and y = 1'],a:0,
  e:'Payda (x − 2)(x + 1), pay (x − 2)(x + 2). x = 2\'de çarpan sadeleşir: limit 4/3, orada delik var, asimptot yok. x = −1\'de pay −3 ≠ 0, payda 0 → limit ±∞: dikey asimptot. y = 1 yatay asimptottur.'},
 {o:11,q:`What is ${L('x→−∞')} ${F('2x + 1','√(x² + 3)')}?`,
  o_:['−2','2','1/2','The limit does not exist.'],a:0,
  e:'x < 0 iken √(x²) = |x| = −x. Payda −x·√(1 + 3/x²) gibi davranır, pay 2x gibi. Oran 2x/(−x) = −2. x → +∞ iken sonuç 2 olurdu: bu fonksiyonun iki yatay asimptotu var (y = 2 ve y = −2).'},
 {o:12,q:`${TB(['x','1','2','4','5'],[['f(x)','3','−1','2','6']])}The function f is continuous on [1, 5], and selected values are given. What is the least number of solutions of f(x) = 0 on [1, 5]?`,
  o_:['2','1, since f(1) &gt; 0 and f(2) &lt; 0','3','0, since f(1) and f(5) are both positive'],a:0,
  e:'f(1) = 3 > 0 ve f(2) = −1 < 0: IVT\'ye göre (1, 2)\'de bir kök var. f(2) < 0 ve f(4) = 2 > 0: (2, 4)\'te bir kök daha. f(4) ile f(5) aynı işaretli, orada garanti yok. En az 2. (f(1) ile f(5)\'in ikisinin de pozitif olması aradaki kökleri yok etmez.) IVT ancak f [1, 5]\'te sürekli olduğu için kullanılabilir.'},
 {o:13,q:`What is ${L('h→0')} ${F('(2 + h)⁵ − 32','h')}?`,
  o_:['80','0','160','The limit does not exist.'],a:0,
  e:'Bu, f(x) = x⁵ için f′(2)\'nin tanımı: [f(2 + h) − f(2)]/h, 2⁵ = 32. f′(x) = 5x⁴, f′(2) = 5·16 = 80. h = 0 koymak 0/0 verir; bu limitin olmadığı anlamına gelmez.'},
 {o:13,q:`What is ${L('x→9')} ${F('√x − 3','x − 9')}?`,
  o_:['1/6','1/18','1/3','The limit does not exist.'],a:0,
  e:'Türevin ikinci biçimi: [f(x) − f(9)]/(x − 9), f(x) = √x, f(9) = 3. f′(x) = 1/(2√x), f′(9) = 1/6. Eşlenikle de çıkar: (√x − 3)/((√x − 3)(√x + 3)) = 1/(√x + 3) → 1/6. 1/18, 1/(2x) yazınca çıkar: √x = x^(1/2) türevi 1/(2√x).'},
 {o:14,q:`${TB(['x','1','1.5','2','2.5','3'],[['f(x)','3','5','6.5','9','14']])}Selected values of the differentiable function f are given. Using the data closest to x = 2 on both sides, what is the best estimate of f′(2)?`,
  o_:['4','5','6.5','5.5'],a:0,
  e:'Simetrik fark bölümü: [f(2.5) − f(1.5)]/(2.5 − 1.5) = (9 − 5)/1 = 4. 5 yalnız sağ tarafın ([2, 2.5]), 5.5 en geniş aralığın ([1, 3]) eğimi; 6.5 ise f(2)\'nin kendisi, türev değil.'},
 {o:15,q:`${G3}At which x-value(s) in the interval (−1, 6) is f continuous but not differentiable?`,
  o_:['x = 1 only','x = 4 only','x = 1 and x = 4','f is differentiable wherever it is continuous.'],a:0,
  e:'x = 1\'de grafik köşe yapıyor: soldan eğim −1, sağdan +1. Sürekli ama türevlenemez. x = 4\'te sıçrama var: f orada sürekli bile değil, o yüzden “sürekli ama türevsiz” değil. Türevlenebilir ⇒ sürekli; tersi doğru değil.'},
 {o:15,q:`Let f(x) = ${PW('x²,&nbsp; x ≤ 1','ax + b,&nbsp; x &gt; 1')} For what values of a and b is f differentiable at x = 1?`,
  o_:['a = 2, b = −1','a = 2, b = 1','a = −1, b = 2','Any a and b with a + b = 1'],a:0,
  e:'Önce süreklilik: 1² = a + b. Sonra eğimler eşit: soldan (x²)′ = 2x → 2, sağdan a. Yani a = 2, b = 1 − 2 = −1. Sadece süreklilik yetmez; iki tarafın eğimi de eşit olmalı.'},
 {o:16,q:'If f(x) = 4√x + 8/x, what is f′(4)?',
  o_:['1/2','3/2','−1/2','−3/2'],a:0,
  e:'Üslü yaz: 4x^(1/2) + 8x^(−1). f′(x) = 2x^(−1/2) − 8x^(−2) = 2/√x − 8/x². f′(4) = 2/2 − 8/16 = 1 − 1/2 = 1/2. 3/2, −8/x²\'nin işaretini kaçırınca çıkar.'},
 {o:17,q:'Let h(x) = 5f(x) − 2g(x) + x³. If f′(2) = 3 and g′(2) = −1, what is h′(2)?',
  o_:['29','25','17','It cannot be determined without f(2) and g(2).'],a:0,
  e:'Sabit kat, toplam ve fark kuralları: h′(x) = 5f′(x) − 2g′(x) + 3x². h′(2) = 15 − 2(−1) + 12 = 15 + 2 + 12 = 29. 25: −2·(−1)\'in işareti kaçarsa; 17: x³\'ün türevi unutulursa. f(2) ve g(2) gerekmez, yalnız türevler kullanılır.'},
 {o:18,q:'Which of the following is an equation of the line tangent to the graph of y = eˣ + 2 sin x at x = 0?',
  o_:['y = 3x + 1','y − 1 = 3(x + 1)','y = 3x','y = −x + 1'],a:0,
  e:'Nokta: y(0) = e⁰ + 2 sin 0 = 1. Eğim: y′ = eˣ + 2 cos x, y′(0) = 1 + 2 = 3. Teğet: y − 1 = 3(x − 0), yani y = 3x + 1. y = 3x noktayı (0, 0) sanmaktan, y = −x + 1 sin\'in türevini −cos sanmaktan, y − 1 = 3(x + 1) ise nokta-eğim biçiminde işaret hatasından gelir.'},
 {o:19,q:`${TB(['x','f(x)','f′(x)','g(x)','g′(x)'],[['1','−2','3','1','2'],['2','3','−1','4','5']])}Let h(x) = f(x)·g(x). Using the table, what is h′(2)?`,
  o_:['11','−5','−19','−11'],a:0,
  e:'Çarpım kuralı: h′ = f′g + fg′. h′(2) = (−1)(4) + (3)(5) = −4 + 15 = 11. −5 = f′(2)·g′(2): türevler çarpılmaz. −19 ve −11 işaret hatalarından gelir.'},
 {o:20,q:`If f(x) = ${F('2x + 1','x − 3')}, what is f′(4)?`,
  o_:['−7','7','11','−1/7'],a:0,
  e:'Bölüm kuralı: f′(x) = [2(x − 3) − (2x + 1)(1)]/(x − 3)² = −7/(x − 3)². f′(4) = −7/1 = −7. Paydaki sırayı ters yazarsan 7, çıkarma yerine toplarsan 11 bulursun.'},
 {o:21,q:'If f(x) = sec x + cot x, what is f′(π/4)?',
  o_:['√2 − 2','√2 + 2','√2/2 − 2','−√2 − 2'],a:0,
  e:'(sec x)′ = sec x tan x, (cot x)′ = −csc² x. π/4\'te sec = √2, tan = 1, csc = √2. f′(π/4) = √2·1 − (√2)² = √2 − 2. “co” ile başlayanların türevi eksi işaretli. √2/2 − 2, sec(π/4)\'ü cos(π/4) ile karıştırınca çıkar: sec = 1/cos = √2.'},
 {o:22,q:'If f(x) = (3x² − 5)⁴, then f′(x) =',
  o_:['24x(3x² − 5)³','4(3x² − 5)³','4(6x)³','4(3x² − 5)³ + 6x'],a:0,
  e:'Dış fonksiyon u⁴ → 4u³, iç fonksiyon u = 3x² − 5 → 6x. f′(x) = 4(3x² − 5)³·6x = 24x(3x² − 5)³. İç türevi unutursan 4(3x² − 5)³ kalır; 4(6x)³ iç türevi dış fonksiyonun içine koymak, + 6x ise çarpmak yerine toplamaktır.'},
 {o:22,q:`${TB(['x','f(x)','f′(x)','g(x)','g′(x)'],[['1','5','7','3','−2'],['3','0','4','1','6']])}Let h(x) = f(g(x)). Using the table, what is h′(1)?`,
  o_:['−8','−14','24','4'],a:0,
  e:'Zincir kuralı: h′(1) = f′(g(1))·g′(1). g(1) = 3, f′(3) = 4, g′(1) = −2 → 4·(−2) = −8. −14 = f′(1)·g′(1): f′, iç fonksiyonun değerinde (g(1) = 3) okunmalı, 1\'de değil.'},
 {o:22,q:'If y = sin²(3x), what is the value of dy/dx at x = π/12?',
  o_:['3','1','3√2','6'],a:0,
  e:'sin²(3x) = (sin 3x)². dy/dx = 2 sin(3x)·cos(3x)·3 = 6 sin(3x) cos(3x). x = π/12\'de 3x = π/4: 6·(√2/2)·(√2/2) = 3. İçteki 3\'ü unutursan 1 çıkar.'},
 {o:22,q:'Let h(x) = √(f(x)), where f(2) = 9 and f′(2) = 12. What is h′(2)?',
  o_:['2','6','4','1/6'],a:0,
  e:'h = f^(1/2), h′ = (1/2)·f^(−1/2)·f′ = f′/(2√f). h′(2) = 12/(2·3) = 2. 1/6 iç türev (f′) unutulunca, 6 ise kök unutulunca (12/2) çıkar.'},
 {o:23,q:'If x² + xy + y² = 7, what is the value of dy/dx at the point (1, 2)?',
  o_:['−4/5','4/5','−5/4','−1/2'],a:0,
  e:'x\'e göre türev: 2x + (y + x·dy/dx) + 2y·dy/dx = 0 (xy\'de çarpım, y²\'de zincir). dy/dx·(x + 2y) = −(2x + y) → dy/dx = −(2x + y)/(x + 2y). (1, 2)\'de −4/5. xy terimi atlanırsa −1/2 çıkar.'},
 {o:23,q:'If xy² − y = 6, what is the value of dy/dx at the point (2, 2)?',
  o_:['−4/7','4/7','−1/2','0'],a:0,
  e:'Türev: y² + x·2y·dy/dx − dy/dx = 0. dy/dx·(2xy − 1) = −y² → dy/dx = −y²/(2xy − 1). (2, 2)\'de −4/(8 − 1) = −4/7. (Nokta eğri üstünde: 2·4 − 2 = 6.)'}
];

/* ---------- açık uçlu (FRQ tarzı), kendin puanla ---------- */
const ACIK=[
 {t:'Limits, continuity, IVT',o:[7,12,4],
  q:`Let f be the function defined by f(x) = ${PW(`${F('x² − 9','x − 3')},&nbsp; x &lt; 3`,'ax + 2,&nbsp; x ≥ 3')}<ol type="a"><li>Find ${L('x→3<sup>−</sup>')} f(x). Show the work that leads to your answer.</li><li>Find the value of a for which f is continuous at x = 3. Justify your answer using the definition of continuity.</li><li>For the value of a found in part (b), explain why there must be a value c, 0 &lt; c &lt; 4, such that f(c) = 5.</li></ol>`,
  cevap:`<p><b>(a)</b> x &lt; 3 için (x² − 9)/(x − 3) = (x − 3)(x + 3)/(x − 3) = x + 3. ${L('x→3<sup>−</sup>')} f(x) = 3 + 3 = <b>6</b>.</p><p><b>(b)</b> f(3) = 3a + 2 ve ${L('x→3<sup>+</sup>')} f(x) = 3a + 2. Süreklilik için soldan limit = sağdan limit = f(3): 3a + 2 = 6 → <b>a = 4/3</b>. Bu değerle f(3) = 6 tanımlı, ${L('x→3')} f(x) = 6 var, ikisi eşit: f, x = 3'te sürekli.</p><p><b>(c)</b> f, x &lt; 3 için x + 3 (sürekli), x &gt; 3 için doğrusal (sürekli), x = 3'te (b)'den sürekli; yani [0, 4]'te sürekli. f(0) = (−9)/(−3) = 3, f(4) = 16/3 + 2 = 22/3 ≈ 7.33. 3 &lt; 5 &lt; 22/3 olduğundan IVT'ye göre 0 &lt; c &lt; 4 olan bir c için f(c) = 5.</p>`,
  rub:['(a) Sadeleştirme (çarpanlara ayırma) gösterildi','(a) Cevap 6','(b) 3a + 2 = 6 denklemi kuruldu ve a = 4/3','(b) Gerekçe: f(3) tanımlı, limit var, limit = f(3) (üçü de yazıldı)','(c) f\'nin [0, 4]\'te sürekli olduğu söylendi','(c) f(0) = 3 ve f(4) = 22/3 hesaplandı, 5\'in arada olduğu yazıldı ve IVT adı geçti']},
 {t:'Derivative rules, chain rule, implicit',o:[20,22,23],
  q:`${TB(['x','f(x)','f′(x)','g(x)','g′(x)'],[['1','3','−2','2','5'],['2','1','4','1','−3']])}The functions f and g are differentiable for all real numbers. Selected values are given in the table.<ol type="a"><li>Let h(x) = ${F('f(x)','g(x)')}. Find h′(2).</li><li>Let k(x) = f(g(x)). Find k′(1).</li><li>The curve x² + 3xy + y³ = 5 passes through the point (1, 1). Find dy/dx at (1, 1), and write an equation for the line tangent to the curve at that point.</li></ol>`,
  cevap:`<p><b>(a)</b> h′(x) = [f′(x)g(x) − f(x)g′(x)]/[g(x)]². h′(2) = [4·1 − 1·(−3)]/1² = <b>7</b>.</p><p><b>(b)</b> k′(1) = f′(g(1))·g′(1) = f′(2)·5 = 4·5 = <b>20</b>.</p><p><b>(c)</b> 2x + 3y + 3x·${F('dy','dx')} + 3y²·${F('dy','dx')} = 0 → ${F('dy','dx')} = −${F('2x + 3y','3x + 3y²')}. (1, 1)'de ${F('dy','dx')} = −5/6. Teğet: <b>y − 1 = −(5/6)(x − 1)</b>.</p>`,
  rub:['(a) Bölüm kuralı doğru kuruldu (pay sırası doğru)','(a) Cevap 7','(b) f′(g(1))·g′(1) yazıldı (f′, g(1) = 2\'de okundu)','(b) Cevap 20','(c) Kapalı türev doğru (3xy için çarpım, y³ için zincir) ve dy/dx = −5/6','(c) Teğet doğrusu y − 1 = −(5/6)(x − 1)']}
];

/* ---------- video süreleri (saniye; ffprobe ile ölçüldü, 28 Ekim 2026) ----------
   Dosyalar: ROOT + 'unit-N/video/cbXXX.mp4', kapak aynı adla .jpg */
const SURE={
 cb101:266,cb102:273,cb103:280,cb104:290,cb105:265,cb106:266,cb107:267,cb108:261,cb109:275,cb110:274,
 cb201:274,cb202:278,cb203:267,cb204:250,cb205:283,cb206:279,cb207:267,cb208:289,cb209:286,cb210:272,
 cb301:274,cb302:277,cb303:292,cb304:274,cb305:279
};
