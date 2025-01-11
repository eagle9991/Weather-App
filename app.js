const axios = require('axios');
require('dotenv').config();

// Your OpenWeatherMap API key
const API_KEY = process.env.API_KEY;
const CITY = 'London'; // Replace 'London' with any city name

const getWeather = async () => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const { temp } = response.data.main;
        const { description } = response.data.weather[0];
        console.log(`The weather in ${CITY}: ${temp}°C, ${description}`);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
};

getWeather();
