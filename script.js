const chat = document.getElementById("chat");

// AKILLI MESAJ
let hour = new Date().getHours();
let greet = hour < 18 ? "Günaydın güzelim ☀️" : "İyi geceler aşkım 🌙";

// MESAJLAR
let messages = [
{from:"me", text:greet},

{from:"me", text:"Göksu..."},
{from:"me", text:"Seni çok seviyorum."},

{from:"me", text:"Bazen seni kızdırıyorum, kırıyorum..."},
{from:"me", text:"ama inan hiç istemiyorum."},

{from:"me", text:"Bağırdığım, sert olduğum anlar için gerçekten özür dilerim."},

{from:"me", text:"Biz ayrı değiliz."},
{from:"me", text:"Sen benim sevgilimsin ve hep öyle kalacaksın."},

{from:"me", text:"10 Haziran 2025 15:00..."},
{from:"me", text:"Hayatımın en güzel başlangıcıydı."},

{from:"me", text:"Seni kaybetmek istemiyorum."},
{from:"me", text:"Sadece daha iyi olmak istiyorum."},

{from:"me", text:"Sana söz veriyorum deneyeceğim."},

{from:"me", text:"💖"}
];

// CHAT AKIŞI
let i = 0;

function sendMessage(){
if(i < messages.length){

let m = document.createElement("div");
m.className = "msg " + messages[i].from;
m.innerText = messages[i].text;

chat.appendChild(m);
chat.scrollTop = chat.scrollHeight;

i++;
setTimeout(sendMessage, 1500);
}
}

sendMessage();

// SAYAÇ
setInterval(()=>{
let start = new Date("2025-06-10T15:00:00");
let now = new Date() - start;

let d = Math.floor(now / 86400000);
let h = Math.floor((now % 86400000)/3600000);

document.getElementById("counter").innerText =
d + " gün " + h + " saat birlikte ❤️";

},1000);

// PARTICLE HEART
const c = document.getElementById("bg");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let particles = [];

function create(){
particles.push({
x: Math.random()*c.width,
y: c.height,
vy: Math.random()*-2-1,
size: Math.random()*3+2
});
}

function draw(){
ctx.clearRect(0,0,c.width,c.height);

particles.forEach(p=>{
p.y += p.vy;

ctx.fillStyle="pink";
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();
});

requestAnimationFrame(draw);
}

setInterval(create, 200);
draw();
