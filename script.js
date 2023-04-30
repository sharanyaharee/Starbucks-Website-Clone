
let themeSwitch = document.getElementById("themeSwitch");
let body = document.querySelector("body");
themeSwitch.onclick = function () {
  themeSwitch.classList.toggle("bi-moon-fill");
  body.classList.toggle("dark");
};

