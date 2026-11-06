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
