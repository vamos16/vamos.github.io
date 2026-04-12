const form = document.getElementById("form");
const formCard = document.getElementById("formCard");
const success = document.getElementById("success");

form.addEventListener("submit", function () {

  setTimeout(() => {
    formCard.style.display = "none";
    success.style.display = "block";
  }, 800);

});
