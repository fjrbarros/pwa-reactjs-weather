import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '13c7d783e206bdc23827e9331ae7cc84';

export async function fetchWeather(query) {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });

    return data;
}