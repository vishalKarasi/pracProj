let icon = document.querySelector(".icon");
let search = document.querySelector(".search");
icon.addEventListener("click", () => {
  search.classList.toggle("active");
});

let searchValue = document.querySelector("#mySearch");
let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  searchValue.value = "";
});
