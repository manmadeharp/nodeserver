const express = require('express');
const hbs = require('express-handlebars')
const path = require('path')
const app = express();
const getWeather = require('./lib/getWeather');

require('dotenv').config();
app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'layout'
}))
app.use('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
    let data = await getWeather();
    let desc = data.weather[0].description;
    let temp = data.main.temp;
   res.render('index', {getWeather: 'weather', desc, temp}) 
});

app.listen(3001, () =>{
    console.log('Server listening on port 3000');
    console.log(__dirname)
});