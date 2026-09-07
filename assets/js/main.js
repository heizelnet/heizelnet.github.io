(function(){
  var root=document.documentElement, key='profile-theme';
  var saved=null; try{saved=localStorage.getItem(key)}catch(e){}
  if(saved) root.setAttribute('data-theme',saved);
  document.getElementById('theme').addEventListener('click',function(){
    var cur=root.getAttribute('data-theme');
    var sysDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
    var next=cur? (cur==='dark'?'light':'dark') : (sysDark?'light':'dark');
    root.setAttribute('data-theme',next);
    try{localStorage.setItem(key,next)}catch(e){}
  });
  document.getElementById('print').addEventListener('click',function(){window.print()});

  var links=[].slice.call(document.querySelectorAll('.tnav a'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))}).filter(Boolean);
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting) return;
      links.forEach(function(a){a.classList.toggle('on', a.getAttribute('href')==='#'+e.target.id)});
    });
  },{rootMargin:'-56px 0px -70% 0px'});
  secs.forEach(function(s){io.observe(s)});
})();

// 이메일 난독화: 단순 크롤러가 주소를 수집하지 못하도록 클릭 시점에 조립
(function(){
  var el=document.querySelector('.mailto');
  if(!el) return;
  var addr=el.dataset.u+String.fromCharCode(64)+el.dataset.d;
  el.addEventListener('click',function(e){
    e.preventDefault();
    el.querySelector('.mailtxt').textContent=addr;
    el.setAttribute('href','mailto:'+addr);
    el.classList.remove('mailto');
  });
})();
