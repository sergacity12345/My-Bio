// init weather obj

const weather = new Weather("boston","MA")

const getElement = document.querySelector(".container")


// get weather on DOm
document.addEventListener("DOMContentLoaded",function(e){
    getElement.parentElement
})


function getWeatherLo(){
    weather.getWeather()
        .then()
        .catch(err=>{
            console.log(err)
        })
}
