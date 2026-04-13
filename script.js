const text = document.getElementById("text");

// AKILLI MESAJ
let hour = new Date().getHours();
let greet = hour < 18 
? "Günaydın Göksu ☀️" 
: "İyi geceler Göksu 🌙";

document.getElementById("greet").innerText = greet;

// MESAJLAR
let lines = [
"Göksu...",
"Seni çok seviyorum.",
"Bazen seni kızdırıyorum...",
"bazen de farkında olmadan üzüyorum.",
"Ama inan hiç istemiyorum.",
"Bağırdığım, kırdığım her şey için gerçekten özür dilerim.",
"Sen benim sevgilimsin.",
"Ve biz ayrı değiliz.",
"10 Aralık 2025 15:00...",
"Hayatımın en güzel başlangıcıydı.",
"Seni kaybetmek istemiyorum.",
"Sadece daha iyi olmak istiyorum.",
"Sana söz veriyorum deneyeceğim.",
"💖"
];

// YAZDIRMA EFEKTİ
let i = 0;

function show(){
if(i < lines.length){

let div = document.createElement("div");
div.className = "line";
div.innerText = lines[i];

text.appendChild(div);

i++;
setTimeout(show, 1500);
}
}

show();

// SAYAÇ
setInterval(()=>{
let start = new Date("2025-12-10T15:00:00");
let now = new Date() - start;

let d = Math.floor(now / 86400000);
let h = Math.floor((now % 86400000)/3600000);

document.getElementById("counter").innerText =
d + " gün " + h + " saat birlikte ❤️";

},1000);

// PARTICLE KALP
const c = document.getElementById("bg");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let p = [];

function create(){
p.push({
x: Math.random()*c.width,
y: c.height,
vy: Math.random()*-2-1,
size: Math.random()*3+2
});
}

function draw(){
ctx.clearRect(0,0,c.width,c.height);

p.forEach(e=>{
e.y += e.vy;

ctx.fillStyle="pink";
ctx.beginPath();
ctx.arc(e.x,e.y,e.size,0,Math.PI*2);
ctx.fill();
});

requestAnimationFrame(draw);
}

setInterval(create, 200);
draw();
