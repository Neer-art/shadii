const menuBtn=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
menuBtn?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuBtn?.setAttribute("aria-expanded","false");}));
const topBtn=document.querySelector(".back-top");
window.addEventListener("scroll",()=>topBtn?.classList.toggle("show",window.scrollY>450),{passive:true});
topBtn?.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
const petalLayer=document.querySelector(".petal-layer"),reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function addPetal(){if(!petalLayer||reduced)return;const p=document.createElement("span");p.className="petal";p.textContent=["✿","❀","♥"][Math.floor(Math.random()*3)];p.style.left=Math.random()*100+"vw";p.style.fontSize=(12+Math.random()*12)+"px";p.style.setProperty("--drift",(Math.random()*130-65)+"px");p.style.animationDuration=(9+Math.random()*7)+"s";petalLayer.appendChild(p);p.addEventListener("animationend",()=>p.remove(),{once:true});}
if(!reduced)setInterval(addPetal,1300);
