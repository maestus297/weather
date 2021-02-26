let key = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5130b57b1681d2293bbd618c702c6178';

async function weather (key) {
    const response = await fetch(key, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
}



weather(key);
