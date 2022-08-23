// const state = document.getElementById("ele").value ;

class Weather{
    constructor(apiKey, state,country){
        this.apiKey = "";
        this.state = state
    }

    // fetch weather 
    async getWeather(){
        const response = await fetch()

        const responData = await response.json()
        
        return responData.current_observation;    
    }

    changeLocation(city,state){
        this.city = city;
        this.state = state;
    }

} 







