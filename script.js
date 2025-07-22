const chicken = document.getElementById("chicken");
const gameArea = document.getElementById("game-area");
const inviteMessage = document.getElementById("invite-message");
const cluckSound = document.getElementById("cluck-sound");
const cheerSound = document.getElementById("cheer-sound");

function moveChicken() {
  // Play cluck sound BEFORE moving the chicken
  cluckSound.play().catch(() => {
    // Ignore if sound play is blocked
  });

  const maxX = gameArea.clientWidth - chicken.clientWidth;
  const maxY = gameArea.clientHeight - chicken.clientHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  chicken.style.left = newX + "px";
  chicken.style.top = newY + "px";
}

// When the chicken is clicked (caught)
chicken.addEventListener("click", () => {
  // Stop moving the chicken by clearing the interval
  clearInterval(moveInterval);

  // Hide the chicken
  chicken.style.display = "none";

  // Show the invitation message
  inviteMessage.classList.remove("hidden");

  // Play cheer sound on catch
  cheerSound.play().catch(() => {});
});

// Start moving chicken every 500ms
moveChicken();
const moveInterval = setInterval(moveChicken, 500);
