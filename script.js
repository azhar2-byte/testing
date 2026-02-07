const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
function handleletterClick() {
    window.location.href = "letter.html";
}
const container = document.getElementById('heart-container');

for (let i = 0; i < 20; i++) {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.textContent = '❤';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 100 + 'vh';
  heart.style.fontSize = 16 + Math.random() * 20 + 'px';
  heart.style.animationDelay = Math.random() * 5 + 's';

  container.appendChild(heart);
}
