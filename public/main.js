const date = new Date();
const year = date.getFullYear()
document.querySelector(".current-year").innerHTML = year;

const backDrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const modalAction = document.querySelector(".modal__action")


btn.addEventListener("click", function(e){
   backDrop.style.display = "block";

   modal.style.display = "block";



   e.preventDefault()
})







// init weather class 
const weather = new Weather(lat,long);

// init ui
const ui = new UI();

// get weather on dom loaded

document.addEventListener("DOMContentLoaded",getWeather)


function getWeather(){
    weather.getWeather()
     .then(res=>{
        console.log(res)
        // to paint UI
        ui.paint(res)
     })
     .catch(err=>{
        console.log(err)
     })
}


