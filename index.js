const express = require('express');
const hbs = require('express-handlebars')
const path = require('path')
const app = express();
const GetWeather = require('./lib/getWeather');
require('dotenv').config();
app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'layout'
}))
app.use('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
    let data = await GetWeather();
    let desc = data.weather[0].description;
    let temp = data.main.temp;
    
});

app.listen(3001, () =>{
    console.log('Server listening on port 3000');
});