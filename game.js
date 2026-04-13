const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bird = {
  x: 100,
  y: 200,
  gravity: 0.6,
  lift: -10,
  velocity: 0
};

let pipes = [];
let gameOver = false;

// kuş çiz
function drawBird() {
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(bird.x, bird.y, 15, 0, Math.PI * 2);
  ctx.fill();
}

// boru oluştur
function createPipe() {
  let gap = 150;
  let top = Math.random() * canvas.height / 2;

  pipes.push({
    x: canvas.width,
    top: top,
    bottom: top + gap
  });
}

// boru çiz
function drawPipes() {
  ctx.fillStyle = "green";
  pipes.forEach(pipe => {
    ctx.fillRect(pipe.x, 0, 50, pipe.top);
    ctx.fillRect(pipe.x, pipe.bottom, 50, canvas.height);
  });
}

// çarpışma kontrolü
function checkCollision() {
  pipes.forEach(pipe => {
    if (
      bird.x < pipe.x + 50 &&
      bird.x + 15 > pipe.x &&
      (bird.y < pipe.top || bird.y > pipe.bottom)
    ) {
      endGame();
    }
  });

  if (bird.y > canvas.height || bird.y < 0) {
    endGame();
  }
}

// kalpler oluştur
function spawnHearts() {
  setInterval(() => {
    if (gameOver) {
      let heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerText = "💖";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = window.innerHeight + "px";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 3000);
    }
  }, 200);
}

// oyun bitince
function endGame() {
  gameOver = true;
  document.getElementById("gameOver").style.display = "block";
}

// yeniden başlat
function restartGame() {
  location.reload();
}

// oyun döngüsü
function update() {
  if (gameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bird.velocity += bird.gravity;
  bird.y += bird.velocity;

  drawBird();

  pipes.forEach(pipe => {
    pipe.x -= 3;
  });

  drawPipes();
  checkCollision();

  requestAnimationFrame(update);
}

// zıplama
document.addEventListener("keydown", () => {
  bird.velocity = bird.lift;
});

// başlangıç
setInterval(createPipe, 2000);
spawnHearts();
update();
