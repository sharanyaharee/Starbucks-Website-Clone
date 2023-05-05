let body = document.querySelector("body");
let main = document.querySelector("main");
let themeSwitch = document.getElementById("themeSwitch");
let coupon = document.getElementById("coupon");
let close = document.getElementById("close");
let weather = document.getElementById('weather');

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
const successCallback= (position) =>{
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
  fetch (url, {method: 'GET'})
  .then ((res)=>res.json())
  .then ((data)=>{
    let cityName = data.city.name;
    let temperature = data.list[0].temp.day + "°C";
    
    weather.innerText = `${cityName} -  ${ temperature}`.toUpperCase()

  })
}
const errorCallback= (error) =>{
  weather.innerText = "Geo not supported!"
}
navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
