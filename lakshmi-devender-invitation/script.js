const openButton = document.getElementById('openInvite');
const invitation = document.getElementById('invitation');
openButton.addEventListener('click', () => {
  document.body.classList.add('open');
  invitation.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => invitation.classList.add('visible'));
  setTimeout(() => document.getElementById('celebrations').scrollIntoView({behavior:'smooth', block:'start'}), 350);
});

// Wedding date: 13 December 2026, 00:00 India Standard Time.
const weddingDate = new Date('2026-12-13T00:00:00+05:30').getTime();
function updateCountdown(){
  const remaining = weddingDate - Date.now();
  if(remaining <= 0){
    document.querySelector('.timer').innerHTML = '<p>Today is the big day! शुभ विवाह ♥</p>';
    return;
  }
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  document.getElementById('days').textContent = String(days).padStart(3,'0');
  document.getElementById('hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2,'0');
}
updateCountdown(); setInterval(updateCountdown,1000);
