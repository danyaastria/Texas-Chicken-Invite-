const chicken = document.getElementById("chicken");
const gameArea = document.getElementById("game-area");
const inviteMessage = document.getElementById("invite-message");
const cluckSound = document.getElementById("cluck-sound");
const cheerSound = document.getElementById("cheer-sound");

let moveInterval;

function moveChicken() {
  const maxX = gameArea.clientWidth - chicken.clientWidth;
  const maxY = gameArea.clientHeight - chicken.clientHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  chicken.style.left = newX + "px";
  chicken.style.top = newY + "px";
}

// Start cluck sound loop (use audio loop property)
cluckSound.loop = true;

function startGame() {
  // Start cluck sound immediately
  cluckSound.play().catch(() => {
    // Sound might be blocked until user interaction - ignore errors
  });

  // Move chicken every 500ms
  moveChicken();
  moveInterval = setInterval(moveChicken, 500);
}

// Handle click on chicken
chicken.addEventListener("click", () => {
  // Stop chicken movement
  clearInterval(moveInterval);

  // Hide chicken image
  chicken.style.display = "none";

  // Show invite message
  inviteMessage.classList.remove("hidden");

  // Stop cluck sound
  cluckSound.pause();
  cluckSound.currentTime = 0;

  // Play cheer sound once
  cheerSound.play().catch(() => {});
});

// Start game on page load or script load
startGame();
