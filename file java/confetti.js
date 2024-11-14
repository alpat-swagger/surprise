// Membuat efek confetti
function createConfetti() {
    const colors = ['#ff7b7b', '#ff9f00', '#ffec00', '#33c9ff', '#ff33b8'];
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.position = 'absolute';
    confetti.style.top = `${Math.random() * 100}%`;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animation = 'fall 3s ease-in infinite';
    document.getElementById('confetti').appendChild(confetti);
  }
  
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }
  
  // Animasi confetti
  const style = document.createElement('style');
  style.innerHTML = `
  @keyframes fall {
    0% {
      transform: translateY(-100px) rotate(0deg);
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
    }
  }
  `;
  document.head.appendChild(style);
  