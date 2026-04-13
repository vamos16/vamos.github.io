const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// 🐦 DAHA GÜZEL KUŞ
let bird = {
  x: 80,
  y: 200,
  velocity: 0,
  gravity: 0.5,   // daha yavaş düşüş (kolaylık)
  lift: -10       // daha kontrollü zıplama
};

let pipes = [];
let hearts = [];
let score = 0;
let gameOver = false;

// 🟩 DAHA GENİŞ BOŞLUK + DAHA SEYREK KUTU
function createPipe() {
  let gap = 220; // BOŞLUK ARTTI (kolaylaştı)
  let top = Math.random() * (canvas.height - gap);

  pipes.push({
    x: canvas.width,
    width: 60,
    top: top,
    bottom: top + gap,
    passed: false
  });
}

function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height,
    size: Math.random() * 15 + 10
  });
}

// TIKLAMA
function flap() {
  if (gameOver) {
    location.reload();
  } else {
    bird.velocity = bird.lift;
  }
}

document.addEventListener("click", flap);
document.addEventListener("touchstart", flap);

function update() {
  if (gameOver) return;

  bird.velocity += bird.gravity;
  bird.y += bird.velocity;

  if (bird.y > canvas.height || bird.y < 0) {
    endGame();
  }

  pipes.forEach(pipe => {
    pipe.x -= 3; // yavaşlattık (kolay)

    // skor
    if (!pipe.passed && pipe.x + pipe.width < bird.x) {
      score++;
      pipe.passed = true;
      document.getElementById("score").innerText = "Skor: " + score;
    }

    // çarpışma
    if (
      bird.x + 10 > pipe.x &&
      bird.x - 10 < pipe.x + pipe.width &&
      (bird.y < pipe.top || bird.y > pipe.bottom)
    ) {
      endGame();
    }
  });

  hearts.forEach(h => {
    h.y -= 1;
  });

  // ⏱️ DAHA SEYREK KUTU
  if (Math.random() < 0.015) createPipe();

  if (Math.random() < 0.05) createHeart();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 🐦 DAHA GÜZEL KUŞ (GÖZ + KANAT)
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(bird.x, bird.y, 15, 0, Math.PI * 2);
  ctx.fill();

  // göz
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(bird.x + 5, bird.y - 5, 3, 0, Math.PI * 2);
  ctx.fill();

  // kanat
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(bird.x - 5, bird.y, 8, 0, Math.PI);
  ctx.fill();

  // kutular
  ctx.fillStyle = "green";
  pipes.forEach(pipe => {
    ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
    ctx.fillRect(pipe.x, pipe.bottom, pipe.width, canvas.height);
  });

  // kalpler
  ctx.font = "20px Arial";
  hearts.forEach(h => {
    ctx.fillText("❤️", h.x, h.y);
  });
}

function endGame() {
  gameOver = true;
  document.getElementById("gameOver").style.display = "block";
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
