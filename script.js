const menu=document.querySelector(".menu"),nav=document.querySelector(".topbar nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const layer=document.querySelector(".petals"),reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function petal(){if(!layer||reduce)return;const e=document.createElement("span");e.className="petal";e.textContent=["✿","❀","♥"][Math.floor(Math.random()*3)];e.style.left=Math.random()*100+"vw";e.style.fontSize=(11+Math.random()*13)+"px";e.style.setProperty("--x",(Math.random()*130-65)+"px");e.style.animationDuration=(8+Math.random()*8)+"s";layer.appendChild(e);e.addEventListener("animationend",()=>e.remove(),{once:true});}
if(!reduce)setInterval(petal,1100);