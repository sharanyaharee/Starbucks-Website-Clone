let body = document.querySelector("body");
let main = document.querySelector("main");
let themeSwitch = document.getElementById("themeSwitch");
let coupon = document.getElementById("coupon");
let close = document.getElementById("close");

window.onload = function(){
  setTimeout(()=>{
    coupon.style.visibility ='visible';
    main.style.opacity='0.7';
  },2000)}

close.onclick = function(){
 coupon.style.visibility = 'hidden';
 main.style.opacity='1';
}

themeSwitch.onclick = function() {
  themeSwitch.classList.toggle("bi-moon-fill");
  body.classList.toggle("dark");
};

// Geolocation();
//  function geolocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     lon.innerHTML = "geo not supported";
//   }
// }
     
// function showPosition(data){
//   console.log("data",data);
// }

// const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;