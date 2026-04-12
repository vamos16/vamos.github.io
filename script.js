// 🌙 GÜN / GECE
const hour = new Date().getHours();
const greeting = document.getElementById("greeting");

if (hour >= 6 && hour < 18) {
  document.body.classList.add("day");
  greeting.innerText = "Günaydın Göksu ☀️";
} else {
  document.body.classList.add("night");
  greeting.innerText = "İyi geceler Göksu 🌙";
}

// 💬 MESAJLAR
const messages = [
  "Göksu...",
  "Sana bir şey söylemem lazım...",
  "Seni üzdüğüm her şey için gerçekten özür dilerim...",
  "Bilerek yapmadım ama seni kırdıysam bu benim hatam...",
  "Sen benim için çok değerlisin ❤️",
  "Seni çok seviyorum..."
];

function startSite() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".container").classList.remove("hidden");

  let i = 0;
  function showMsg() {
    if (i < messages.length) {
      let div = document.createElement("div");
      div.className = "msg";
      div.innerText = messages[i];
      document.getElementById("chat").appendChild(div);
      i++;
      setTimeout(showMsg, 1500);
    } else {
      document.getElementById("buttons").classList.remove("hidden");
    }
  }
  showMsg();
}

// ⏱ SAYAÇ
const startDate = new Date("2024-01-01");

setInterval(() => {
  const now = new Date();
  const diff = now - startDate;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor(diff / (1000*60*60) % 24);
  const m = Math.floor(diff / (1000*60) % 60);
  const s = Math.floor(diff / 1000 % 60);

  document.getElementById("time").innerText =
    `${d} gün ${h} saat ${m} dk ${s} sn`;
}, 1000);

// 🎮 MİNİ OYUN
function startGame() {
  const game = document.getElementById("game");
  game.classList.remove("hidden");
  game.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    let heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.left = Math.random()*window.innerWidth + "px";
    heart.style.top = Math.random()*window.innerHeight + "px";

    heart.onclick = () => {
      heart.remove();
      if (game.children.length === 0) {
        alert("Kazandın 💖");
      }
    };

    game.appendChild(heart);
  }
}

// 😏 KAÇAN BUTON
function moveButton() {
  const btn = document.getElementById("noBtn");
  btn.style.left = Math.random()*(window.innerWidth-100) + "px";
  btn.style.top = Math.random()*(window.innerHeight-50) + "px";
}

// 💖 PARTICLE SYSTEM
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
  particles.push({
    x: canvas.width/2,
    y: canvas.height/2,
    vx: (Math.random()-0.5)*8,
    vy: (Math.random()-0.5)*8,
    size: Math.random()*6+4
  });
}

function drawHeart(x,y,s){
  ctx.fillStyle="rgba(255,105,180,0.8)";
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.bezierCurveTo(x-s,y-s,x-2*s,y+s,x,y+2*s);
  ctx.bezierCurveTo(x+2*s,y+s,x+s,y-s,x,y);
  ctx.fill();
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.x+=p.vx;
    p.y+=p.vy;
    drawHeart(p.x,p.y,p.size);
  });

  requestAnimationFrame(animate);
}
animate();

// 💥 EVET
function accept(){
  for(let i=0;i<150;i++) createParticle();

  document.querySelector(".container").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
}
