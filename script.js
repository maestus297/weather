let key = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5130b57b1681d2293bbd618c702c6178';

async function weather (key) {
    const response = await fetch(key, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    
  //  let temp = weatherData.main.temp;
    //console.log(temperature); 
    // let temperature = document.getElementById("temp");
   // let temp = document.createTextNode(weatherData.main.temp);
  //  temperature.appendChild(temp);

    document.querySelector('.temp').textContent = weatherData.main.temp + "°";
    document.querySelector('.location').textContent = weatherData.name;
    document.querySelector('.minTemp').textContent = weatherData.main.temp_max;
    document.querySelector('.maxTemp').textContent = weatherData.main.temp_max;
    document.querySelector('.feelsLike').textContent = weatherData.main.feels_like;

  
    //weatherdata.main.temp.feels_like, weatherdata.main.temp, weatherdata.main.temp_max, weatherdata.main.temp_min ];
}



weather(key);
