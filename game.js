const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// 😘 KUŞ
let bird = {
  x: 80,
  y: 200,
  velocity: 0,
  gravity: 0.5,
  lift: -10
};

let pipes = [];
let hearts = [];
let score = 0;
let gameOver = false;

// BORU
function createPipe() {
  let gap = 200;
  let top = Math.random() * (canvas.height - gap);

  pipes.push({
    x: canvas.width,
    width: 70,
    top: top,
    bottom: top + gap,
    passed: false
  });
}

// KALP
function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height,
    size: Math.random() * 20 + 10
  });
}

// TIKLAMA
function flap() {
  if (gameOver) {
    location.reload();
  } else {
    bird.velocity = bird.lift;

    // ✨ zıplama efekti
    hearts.push({
      x: bird.x,
      y: bird.y,
      size: 15
    });
  }
}

document.addEventListener("click", flap);
document.addEventListener("touchstart", flap);

// GÜNCELLE
function update() {
  if (gameOver) return;

  bird.velocity += bird.gravity;
  bird.y += bird.velocity;

  if (bird.y > canvas.height || bird.y < 0) endGame();

  pipes.forEach(pipe => {
    pipe.x -= 3;

    if (!pipe.passed && pipe.x + pipe.width < bird.x) {
      score++;
      pipe.passed = true;
      document.getElementById("score").innerText = score;
    }

    if (
      bird.x + 15 > pipe.x &&
      bird.x - 15 < pipe.x + pipe.width &&
      (bird.y < pipe.top || bird.y > pipe.bottom)
    ) {
      endGame();
    }
  });

  hearts.forEach(h => h.y -= 1.5);

  if (Math.random() < 0.02) createPipe();
  if (Math.random() < 0.04) createHeart();
}

// ÇİZ
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ☁️ bulut efekti
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(i * 200 + 100, 100, 40, 0, Math.PI * 2);
    ctx.fill();
  }

  // 😘 KUŞ
  ctx.font = "30px Arial";
  ctx.fillText("😘", bird.x - 15, bird.y + 10);

  // BORULAR
  ctx.fillStyle = "green";
  pipes.forEach(pipe => {
    ctx.shadowColor = "black";
    ctx.shadowBlur = 10;

    ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
    ctx.fillRect(pipe.x, pipe.bottom, pipe.width, canvas.height);

    ctx.shadowBlur = 0;
  });

  // 💖 KALPLER
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
