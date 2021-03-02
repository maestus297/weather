let city = 'London'; 

async function weather (city) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5130b57b1681d2293bbd618c702c6178`, {mode: 'cors'});
    const weatherData = await response.json();

    console.log(weatherData);
    
  //  let temp = weatherData.main.temp;
    //console.log(temperature); 
    // let temperature = document.getElementById("temp");
   // let temp = document.createTextNode(weatherData.main.temp);
  //  temperature.appendChild(temp);
  let temperature, location, feelsLike;

 temperature = parseInt(weatherData.main.temp - 273.15);
 city = weatherData.name;
 feelsLike =  parseInt(weatherData.main.feels_like - 273.15);
 let country = weatherData.sys.country;
 // let looksLike = weatherData.weather.

 document.querySelector('.temp').textContent = temperature + "°C";
 document.querySelector('.city').textContent = city;
 document.querySelector('.country').textContent = country;
 document.querySelector('.feelsLike').textContent = feelsLike + "°C";

 console.log(weatherData.weather[0].main);
};




weather(city);
