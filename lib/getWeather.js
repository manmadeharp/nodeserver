const fetch = require('node-fetch');


const getWeather = async() => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=${process.env.OPEN_WEATHER_API}`
    let data =  await fetch(url);
    let jsonData = await data.json();
    console.log(jsonData);
}

module.exports = getWeather;