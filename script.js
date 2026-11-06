// Countdown to the wedding ceremony: 13 December 2026, 7:00 PM India time.
const weddingDate = new Date("2026-12-13T19:00:00+05:30").getTime();
function updateCountdown(){
  const distance = weddingDate - Date.now();
  const ids = ["days","hours","minutes","seconds"];
  if(distance <= 0){
    ids.forEach(id => document.getElementById(id).textContent = "0");
    document.querySelector(".count-label").textContent = "The celebration is here! ♥";
    return;
  }
  const values = [
    Math.floor(distance / 86400000),
    Math.floor(distance / 3600000) % 24,
    Math.floor(distance / 60000) % 60,
    Math.floor(distance / 1000) % 60
  ];
  ids.forEach((id,i)=>document.getElementById(id).textContent=String(values[i]).padStart(2,"0"));
}
updateCountdown(); setInterval(updateCountdown,1000);

const menuButton=document.querySelector(".menu"), nav=document.querySelector(".header nav");
menuButton.addEventListener("click",()=>{
  nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",String(nav.classList.contains("open")));
});
document.querySelectorAll(".header nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const topButton=document.querySelector(".top");
window.addEventListener("scroll",()=>topButton.classList.toggle("show",window.scrollY>450),{passive:true});
topButton.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));


// Opening invitation screen
const welcomeScreen = document.getElementById("welcomeScreen");
const openInvitation = document.getElementById("openInvitation");
openInvitation?.addEventListener("click", () => {
  welcomeScreen?.classList.add("closed");
  document.body.classList.add("invitation-open");
});

// Gentle falling rose petals. Keep the number low for smooth mobile performance.
const petalLayer = document.querySelector(".ambient-petals");
const petalSymbols = ["✿", "❀", "♥"];
function addPetal(){
  if(!petalLayer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = petalSymbols[Math.floor(Math.random()*petalSymbols.length)];
  petal.style.left = Math.random()*100 + "vw";
  petal.style.fontSize = (12 + Math.random()*15) + "px";
  petal.style.setProperty("--drift", (Math.random()*160-80) + "px");
  petal.style.animationDuration = (9 + Math.random()*8) + "s";
  petalLayer.appendChild(petal);
  petal.addEventListener("animationend",()=>petal.remove(),{once:true});
}
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  setInterval(addPetal, 1150);
}
