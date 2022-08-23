let lat ;
let long;


 // Logic start here
 let getLocationPromise = () => {
    return new Promise(function (resolve, reject) {

        // Promisifying the geolocation API
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
        );
    });
};

function getLocation() {
    getLocationPromise()
        .then((res) => {
            // If promise get resolved
            const result = res;
            console.log(result)
           long = result.coords.longitude
           lat = result.coords.latitude

        })      

    }

getLocation()

class Weather {

    constructor(lat, long){
        this.apiKey = '140c4bcf3ad237f1c12b6377cc2dc657';
        this.lat = lat;
        this.long = long;
    }
    
    // fecth weather
    async getWeather (){
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${this.apiKey}&units=metric`);
        console.log(response)

        const resData = await response.json();
        return resData

    }

    

}