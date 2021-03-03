//let location = 'london'; 

async function weather (search) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=5130b57b1681d2293bbd618c702c6178`, {mode: 'cors'});
    const weatherData = await response.json();

    console.log(weatherData);
    
  let city = weatherData.name;
  let country = weatherData.sys.country;
  let condition =  weatherData.weather[0].main
  let temperature = parseInt(weatherData.main.temp - 273.15);
  let feelsLike = parseInt(weatherData.main.feels_like - 273.15);
  let wind = parseInt(weatherData.wind.speed);
  let humidity = weatherData.main.humidity;
  let location = `${city}, ${country}`;

 
  document.querySelector('.location').textContent = location;
  document.querySelector('.condition').textContent = condition;
  document.querySelector('.temp').textContent = temperature;
  document.querySelector('.feels-like').textContent = `Feels Like: ${feelsLike}`;
  document.querySelector('.wind').textContent = `Wind: ${wind}m/s`
  document.querySelector('.humidity').textContent = `Humidity: ${humidity}`;
};

weather('london');
