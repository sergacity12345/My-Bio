class UI{
    constructor(){
        this.country = document.querySelector("#country")
        this.location = document.querySelector("#location")
        this.description = document.querySelector("#description")
        this.string = document.querySelector("#string")
        this.icon = document.querySelector("#icon")
        this.humidity = document.querySelector("#humidity")
        this.dewPoint = document.querySelector("#dew-point")
        this.feelsLike = document.querySelector("#feels-like")
        this.wind = document.querySelector("#wind")
    }
    
    paint(weather){
        console.log(weather.main.humidity)
        this.country.textContent = `Country:${weather.sys.country}`
        this.location.textContent = `City:${weather
            .name}`
        this.description.textContent = `Description:${weather.weather[0].description}`
        this.string.textContent = `Temp:${weather.main.temp}℃`;
        this.icon.setAttribute("src", weather.weather.icon);
        this.humidity.textContent = `Humididty:${weather.main.humidity}% `;
        this.dewPoint.textContent = `Dew point:${weather.visibility}`;
        this.feelsLike.textContent = `Feels Like ${weather.main.feels_like}`;
        this.wind.textContent = `Wind Speed:${weather.wind.speed}m/s`;
    }
}