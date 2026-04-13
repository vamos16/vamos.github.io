// AKILLI SELAM
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
"Her şey için özür dilerim.",
"Sen benim sevgilimsin.",
"Ve biz ayrı değiliz.",
"10 Aralık 2025...",
"Hayatımın en güzel günü.",
"Seni kaybetmek istemiyorum.",
"Sana söz veriyorum deneyeceğim.",
"💖"
];


// YAZMA EFEKTİ
let i = 0;

function typeLine(line, element, callback){
let j = 0;

function type(){
if(j < line.length){
element.innerHTML += line[j];
j++;
setTimeout(type, 40);
}else{
callback();
}
}

type();
}

function show(){
if(i < lines.length){
let div = document.createElement("div");
div.className = "line";
document.getElementById("text").appendChild(div);

typeLine(lines[i], div, () => {
i++;
setTimeout(show, 800);
});
}
}

show();


// BUTON
function showLove(){
alert("Seni her şeyden çok seviyorum Göksu 💖");
}


// SAYAÇ (10 ARALIK 2025)
setInterval(()=>{
let start = new Date("2025-12-10");
let now = new Date() - start;

let d = Math.floor(now / 86400000);
let h = Math.floor((now % 86400000)/3600000);
let m = Math.floor((now % 3600000)/60000);

document.getElementById("counter").innerText =
d + " gün " + h + " saat " + m + " dakika birlikte ❤️";

},1000);


// KALP ANİMASYON
const c = document.getElementById("bg");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let hearts = [];

function createHeart(){
hearts.push({
x: Math.random()*c.width,
y: c.height,
vy: Math.random()*-2-1,
size: Math.random()*10+5
});
}

function drawHeart(x, y, size){
ctx.beginPath();
ctx.moveTo(x, y);
ctx.bezierCurveTo(x, y-3*size, x-2*size, y-3*size, x-2*size, y);
ctx.bezierCurveTo(x-2*size, y+2*size, x, y+3*size, x, y+4*size);
ctx.bezierCurveTo(x, y+3*size, x+2*size, y+2*size, x+2*size, y);
ctx.bezierCurveTo(x+2*size, y-3*size, x, y-3*size, x, y);
ctx.fillStyle = "pink";
ctx.fill();
}

function draw(){
ctx.clearRect(0,0,c.width,c.height);

hearts.forEach(h=>{
h.y += h.vy;
drawHeart(h.x, h.y, h.size);
});

requestAnimationFrame(draw);
}

setInterval(createHeart, 300);
draw();


// RESPONSIVE
window.addEventListener("resize", ()=>{
c.width = window.innerWidth;
c.height = window.innerHeight;
});
