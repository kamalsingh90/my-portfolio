const projects=[
{name:'AttendFy',tag:'AI / VISION',cat:'ai',img:'assets/attendfy.svg',desc:'AI-based, contactless attendance system using live face recognition to reduce manual or biometric punch workflows.',tech:'Kotlin · Android SDK · Jetpack Compose · MVVM · Firebase · ML Kit · CameraX · REST APIs'},
{name:'Digital Signage',tag:'PLATFORM',cat:'platform',img:'assets/signage.svg',desc:'Digital signage platform for updating and distributing advertising content across digital displays, including offline support.',tech:'Java · XML · Retrofit · SQLite'},
{name:'Pragyan',tag:'EDTECH',cat:'platform',img:'assets/pragyan.svg',desc:'Learning platform with video content, curriculum mapping and teaching resources.',tech:'Java · Kotlin · Firebase · Retrofit · MVVM'},
{name:'CAIG Hub',tag:'AGRICULTURE',cat:'business',img:'assets/caig.svg',desc:'Cross-platform agriculture platform for farmers and inventory management.',tech:'Flutter · Dart · GetX · Firebase · REST APIs'},
{name:'IdenTrip',tag:'BIOMETRIC',cat:'ai',img:'assets/identrip.svg',desc:'Passenger journey application with biometric authentication at checkpoints.',tech:'Kotlin · Firebase · ML Kit · MVVM · Retrofit'},
{name:'TruNtrance',tag:'AI / ATTENDANCE',cat:'ai',img:'assets/truntrance.svg',desc:'AI-powered visitor access and attendance management solution.',tech:'Kotlin · MVVM · ML Kit · CameraX · Firebase'},
{name:'Punjabi By Nature',tag:'RESTAURANT',cat:'business',img:'assets/punjabi.svg',desc:'Restaurant application enabling users to browse menus, view dishes and explore offerings through an intuitive mobile experience.',tech:'Java · XML · Retrofit · SQLite'}
];
const grid=document.querySelector('#projectGrid');
function render(filter='all'){
  grid.innerHTML=projects.filter(p=>filter==='all'||p.cat===filter).map(p=>`<article class="project reveal show" data-project="${p.name}"><div class="project-visual"><img src="${p.img}" alt="${p.name} application visual"></div><div class="project-body"><span class="tag">${p.tag}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="tech">${p.tech}</div></div></article>`).join('');
  grid.querySelectorAll('.project').forEach(card=>card.addEventListener('click',()=>openProject(card.dataset.project)));
}
function openProject(name){const p=projects.find(x=>x.name===name);document.querySelector('#modalTitle').textContent=p.name;document.querySelector('#modalDesc').textContent=p.desc;document.querySelector('#modalTech').textContent=p.tech;const img=document.querySelector('#modalImg');img.src=p.img;img.alt=p.name+' application visual';document.querySelector('#modal').classList.add('open');document.querySelector('#modal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){document.querySelector('#modal').classList.remove('open');document.querySelector('#modal').setAttribute('aria-hidden','true');document.body.style.overflow=''}
render();
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)}));
document.querySelector('#modalClose').onclick=closeModal;document.querySelector('#modalClose2').onclick=closeModal;document.querySelector('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const nav=document.querySelector('#navlinks');document.querySelector('#menuBtn').onclick=()=>{nav.style.display=nav.style.display==='flex'?'':'flex';if(nav.style.display==='flex'){nav.style.position='absolute';nav.style.top='78px';nav.style.right='14px';nav.style.padding='18px 22px';nav.style.background='var(--surface)';nav.style.border='1px solid var(--line)';nav.style.borderRadius='14px';nav.style.flexDirection='column';nav.style.boxShadow='0 20px 50px rgba(13,15,91,.12)'}};
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{if(innerWidth<=950)nav.style.display='none'});
const progress=document.querySelector('#progress');addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+'%'});
const theme=document.querySelector('#themeBtn');theme.onclick=()=>{document.body.classList.toggle('dark');theme.textContent=document.body.classList.contains('dark')?'☾':'☼'};
const counters=document.querySelectorAll('[data-count]');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!e.target.dataset.done){e.target.dataset.done='1';const target=+e.target.dataset.count;let n=0;const timer=setInterval(()=>{n++;e.target.textContent=n+'+';if(n>=target)clearInterval(timer)},45)}}),{threshold:.6});counters.forEach(x=>observer.observe(x));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>revealObserver.observe(x));
