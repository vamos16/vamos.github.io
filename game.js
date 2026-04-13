const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// KUŞ
let bird = {
  x: 80,
  y: 200,
  velocity: 0,
  gravity: 0.6,
  lift: -12
};

// OYUN DEĞİŞKENLERİ
let pipes = [];
let hearts = [];
let score = 0;
let gameOver = false;

// KUTU OLUŞTUR
function createPipe() {
  let gap = 180;
  let top = Math.random() * (canvas.height - gap);

  pipes.push({
    x: canvas.width,
    width: 70,
    top: top,
    bottom: top + gap,
    passed: false
  });
}

// KALP OLUŞTUR
function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height,
    size: Math.random() * 15 + 10
  });
}

// TIKLAMA (MOBILE + PC)
function flap() {
  if (gameOver) {
    location.reload();
  } else {
    bird.velocity = bird.lift;
  }
}

document.addEventListener("click", flap);
document.addEventListener("touchstart", flap);

// GÜNCELLE
function update() {
  if (gameOver) return;

  bird.velocity += bird.gravity;
  bird.y += bird.velocity;

  // sınır kontrol
  if (bird.y > canvas.height || bird.y < 0) {
    endGame();
  }

  pipes.forEach(pipe => {
    pipe.x -= 4;

    // skor artışı
    if (!pipe.passed && pipe.x + pipe.width < bird.x) {
      score++;
      pipe.passed = true;
      document.getElementById("score").innerText = "Skor: " + score;
    }

    // çarpışma
    if (
      bird.x > pipe.x &&
      bird.x < pipe.x + pipe.width &&
      (bird.y < pipe.top || bird.y > pipe.bottom)
    ) {
      endGame();
    }
  });

  hearts.forEach(h => {
    h.y -= 1.5;
  });

  if (Math.random() < 0.02) createPipe();
  if (Math.random() < 0.05) createHeart();
}

// ÇİZ
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // kuş
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(bird.x, bird.y, 15, 0, Math.PI * 2);
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

// GAME OVER
function endGame() {
  gameOver = true;
  document.getElementById("gameOver").style.display = "block";
}

// LOOP
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
