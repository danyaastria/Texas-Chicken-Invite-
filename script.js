const chicken = document.getElementById("chicken");
const gameArea = document.getElementById("game-area");
const inviteMessage = document.getElementById("invite-message");

function moveChicken() {
  const maxX = gameArea.clientWidth - chicken.clientWidth;
  const maxY = gameArea.clientHeight - chicken.clientHeight;
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  chicken.style.left = newX + "px";
  chicken.style.top = newY + "px";
}

chicken.addEventListener("click", () => {
  chicken.style.display = "none";
  inviteMessage.classList.remove("hidden");
});

moveChicken();
let moveInterval = setInterval(moveChicken, 500); // half a second
