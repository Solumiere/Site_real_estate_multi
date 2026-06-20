(function(){
  var hdr=document.getElementById('hdr');
  if(hdr)window.addEventListener('scroll',function(){if(window.scrollY>40)hdr.classList.add('scrolled');else hdr.classList.remove('scrolled');});
  var burger=document.getElementById('burger'),mm=document.getElementById('mobileMenu'),ov=document.getElementById('overlay'),mc=document.getElementById('mClose');
  function closeM(){if(mm)mm.classList.remove('open');if(ov)ov.classList.remove('show');}
  if(burger)burger.onclick=function(){mm.classList.add('open');ov.classList.add('show');};
  if(ov)ov.onclick=closeM;if(mc)mc.onclick=closeM;
  if(mm)mm.querySelectorAll('a').forEach(function(a){a.onclick=closeM;});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  function fmt(n){n=Math.round(n);var s=String(n),o='',c=0,i;for(i=s.length-1;i>=0;i--){o=s.charAt(i)+o;c++;if(c%3===0&&i>0)o=' '+o;}return o+' \u20bd';}
  var SVG={
    studio:'<svg viewBox="0 0 240 170"><rect x="8" y="8" width="224" height="154" fill="#fff" stroke="#16202b" stroke-width="3"/><rect x="150" y="8" width="82" height="58" fill="#f5f7f8" stroke="#16202b" stroke-width="2"/><rect x="8" y="122" width="224" height="40" fill="#faf8f4" stroke="#16202b" stroke-width="2"/><text x="36" y="72" font-size="12" fill="#647581" font-family="sans-serif">\u041a\u0443\u0445\u043d\u044f-\u0433\u043e\u0441\u0442\u0438\u043d\u0430\u044f</text><text x="163" y="42" font-size="11" fill="#647581" font-family="sans-serif">\u0421\u0430\u043d\u0443\u0437\u0435\u043b</text><text x="96" y="147" font-size="11" fill="#647581" font-family="sans-serif">\u0411\u0430\u043b\u043a\u043e\u043d</text></svg>',
    one:'<svg viewBox="0 0 240 170"><rect x="8" y="8" width="224" height="154" fill="#fff" stroke="#16202b" stroke-width="3"/><line x1="120" y1="8" x2="120" y2="122" stroke="#16202b" stroke-width="2"/><rect x="150" y="8" width="82" height="52" fill="#f5f7f8" stroke="#16202b" stroke-width="2"/><rect x="8" y="122" width="224" height="40" fill="#faf8f4" stroke="#16202b" stroke-width="2"/><text x="34" y="72" font-size="11" fill="#647581" font-family="sans-serif">\u0421\u043f\u0430\u043b\u044c\u043d\u044f</text><text x="138" y="95" font-size="11" fill="#647581" font-family="sans-serif">\u0413\u043e\u0441\u0442\u0438\u043d\u0430\u044f</text><text x="162" y="40" font-size="10" fill="#647581" font-family="sans-serif">\u0421\u0430\u043d\u0443\u0437\u0435\u043b</text><text x="96" y="147" font-size="11" fill="#647581" font-family="sans-serif">\u041b\u043e\u0434\u0436\u0438\u044f</text></svg>',
    two:'<svg viewBox="0 0 240 170"><rect x="8" y="8" width="224" height="154" fill="#fff" stroke="#16202b" stroke-width="3"/><line x1="90" y1="8" x2="90" y2="122" stroke="#16202b" stroke-width="2"/><line x1="160" y1="8" x2="160" y2="122" stroke="#16202b" stroke-width="2"/><rect x="8" y="122" width="224" height="40" fill="#faf8f4" stroke="#16202b" stroke-width="2"/><text x="20" y="70" font-size="10" fill="#647581" font-family="sans-serif">\u0421\u043f\u0430\u043b\u044c\u043d\u044f</text><text x="104" y="70" font-size="10" fill="#647581" font-family="sans-serif">\u0413\u043e\u0441\u0442\u0438\u043d\u0430\u044f</text><text x="172" y="70" font-size="10" fill="#647581" font-family="sans-serif">\u0421\u043f\u0430\u043b\u044c\u043d\u044f</text><text x="96" y="147" font-size="11" fill="#647581" font-family="sans-serif">\u041b\u043e\u0434\u0436\u0438\u044f</text></svg>',
    three:'<svg viewBox="0 0 240 170"><rect x="8" y="8" width="224" height="154" fill="#fff" stroke="#16202b" stroke-width="3"/><line x1="80" y1="8" x2="80" y2="86" stroke="#16202b" stroke-width="2"/><line x1="160" y1="8" x2="160" y2="86" stroke="#16202b" stroke-width="2"/><line x1="8" y1="86" x2="232" y2="86" stroke="#16202b" stroke-width="2"/><line x1="124" y1="86" x2="124" y2="162" stroke="#16202b" stroke-width="2"/><text x="22" y="52" font-size="10" fill="#647581" font-family="sans-serif">\u0421\u043f\u0430\u043b\u044c\u043d\u044f</text><text x="100" y="52" font-size="10" fill="#647581" font-family="sans-serif">\u0421\u043f\u0430\u043b\u044c\u043d\u044f</text><text x="176" y="52" font-size="10" fill="#647581" font-family="sans-serif">\u041a\u0443\u0445\u043d\u044f</text><text x="40" y="128" font-size="10" fill="#647581" font-family="sans-serif">\u0413\u043e\u0441\u0442\u0438\u043d\u0430\u044f</text><text x="150" y="128" font-size="10" fill="#647581" font-family="sans-serif">\u0421\u043f\u0430\u043b\u044c\u043d\u044f</text></svg>'
  };
  var CATALOG=[
    {type:'studio',label:'\u0421\u0442\u0443\u0434\u0438\u044f',area:27,floor:5,price:4900000},
    {type:'studio',label:'\u0421\u0442\u0443\u0434\u0438\u044f',area:29,floor:9,price:5200000},
    {type:'one',label:'1-\u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f',area:38,floor:7,price:6200000},
    {type:'one',label:'1-\u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f',area:42,floor:12,price:6900000},
    {type:'two',label:'2-\u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f',area:56,floor:6,price:8700000},
    {type:'two',label:'2-\u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f',area:62,floor:14,price:9600000},
    {type:'three',label:'3-\u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f',area:78,floor:8,price:11500000},
    {type:'three',label:'3-\u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f',area:86,floor:15,price:13200000}
  ];
  var catGrid=document.getElementById('catalog');
  function renderCat(fl){
    if(!catGrid)return;catGrid.innerHTML='';
    CATALOG.filter(function(a){return fl==='all'||a.type===fl;}).forEach(function(a){
      var d=document.createElement('div');d.className='cat reveal vis';
      d.innerHTML='<div class="cat-svg">'+SVG[a.type]+'</div><div class="cat-body"><div class="cat-type">'+a.label+'</div><div class="cat-spec">'+a.area+' \u043c\u00b2 \u00b7 '+a.floor+' \u044d\u0442\u0430\u0436</div><div class="cat-price">\u043e\u0442 '+fmt(a.price)+'</div><a href="kontakty.html" class="btn">\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c</a></div>';
      catGrid.appendChild(d);
    });
  }
  if(catGrid){document.querySelectorAll('.filter button').forEach(function(b){b.onclick=function(){document.querySelectorAll('.filter button').forEach(function(x){x.classList.remove('on');});b.classList.add('on');renderCat(b.getAttribute('data-filter'));};});renderCat('all');}
  var price=document.getElementById('mPrice');
  if(price){
    var dp=document.getElementById('mDp'),term=document.getElementById('mTerm'),rate=6;
    function calc(){
      var Pr=+price.value,d=+dp.value,t=+term.value;
      document.getElementById('mPriceV').textContent=fmt(Pr);
      document.getElementById('mDpV').textContent=d+'%';
      document.getElementById('mTermV').textContent=t+' \u043b\u0435\u0442';
      var dpSum=Pr*d/100,loan=Pr-dpSum,r=rate/12/100,n=t*12,m;
      if(r===0)m=loan/n;else m=loan*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
      document.getElementById('mPay').textContent=fmt(m)+' /\u043c\u0435\u0441';
      document.getElementById('mLoan').textContent=fmt(loan);
      document.getElementById('mDpSum').textContent=fmt(dpSum);
      document.getElementById('mRate').textContent=rate+'%';
    }
    [price,dp,term].forEach(function(el){el.addEventListener('input',calc);});
    document.querySelectorAll('.mpreset button').forEach(function(b){b.onclick=function(){document.querySelectorAll('.mpreset button').forEach(function(x){x.classList.remove('on');});b.classList.add('on');rate=+b.getAttribute('data-rate');calc();};});
    calc();
  }
  var f=document.getElementById('leadForm');
  if(f)f.onsubmit=function(e){e.preventDefault();f.style.display='none';var ok=document.getElementById('formOk');if(ok)ok.style.display='block';};
})();
