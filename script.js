const chicken = document.getElementById("chicken");
const gameArea = document.getElementById("game-area");
const inviteMessage = document.getElementById("invite-message");
const cluckSound = document.getElementById("cluck-sound");
const cheerSound = document.getElementById("cheer-sound");

function moveChicken() {
  const maxX = gameArea.clientWidth - chicken.clientWidth;
  const maxY = gameArea.clientHeight - chicken.clientHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  chicken.style.left = newX + "px";
  chicken.style.top = newY + "px";

  // Optional: play cluck sound when chicken moves
  cluckSound.play().catch(() => {});
}

chicken.addEventListener("click", () => {
  chicken.style.display = "none";
  inviteMessage.classList.remove("hidden");

  // Play cheer sound on click
  cheerSound.play();
});

moveChicken();
setInterval(moveChicken, 500);
