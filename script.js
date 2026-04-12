const text = "Seninle geçen her an hayatımın en güzel kısmı... Seni çok seviyorum Göksu ❤️";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

function startSite() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".container").classList.remove("hidden");
  document.getElementById("music").play();
  typeWriter();
}

function love() {
  alert("Her şeyden çok seni seviyorum ❤️");
}

// BURAYI DEĞİŞTİR
const startDate = new Date("2024-01-01");

function updateTime() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("time").innerText =
    days + " gün " + hours + " saat " + minutes + " dakika";
}

setInterval(updateTime, 1000);
