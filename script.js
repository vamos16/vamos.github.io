function showLove(img) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popupImg");

  popupImg.src = img.src;
  popup.style.display = "flex";

  popup.onclick = () => {
    popup.style.display = "none";
  };
}
