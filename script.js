const error = document.querySelector('.error-msg');
const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit-btn');
form.addEventListener('submit', handleSubmit);
submitBtn.addEventListener('click', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  fetchWeather();
};

function fetchWeather() {
  const input = document.querySelector('input[type="text"]');
  const userLocation = input.value;
  weather(userLocation);
};

async function weather (search) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=5130b57b1681d2293bbd618c702c6178`, {mode: 'cors'})
  
    if(!response.ok) {
      throwErrorMsg();
    } else {
      //error.style.display = 'none';
      const weatherData = await response.json();
      // document.querySelector('form').reset;
      console.log(weatherData);
      setData(weatherData);

    };
};

function setData(weatherData) {
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


function throwErrorMsg() {
  error.style.display = 'block';
  if (error.classList.contains('fade-in')) {
    error.style.display = 'none';
    error.classList.remove('fade-in2');
    error.offsetWidth;
    error.classList.add('fade-in');
    error.style.display = 'block';
  } else {
    error.classList.add('fade-in');
  }
};

weather('london');
