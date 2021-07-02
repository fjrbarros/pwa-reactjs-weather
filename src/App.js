import { useState } from 'react';
import './App.css';
import { fetchWeather } from './api/fetchWeather';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    const data = await fetchWeather(query);
    setWeather(data);
    setQuery('');
  }

  return (
    <div className='container main-container-bg'>
      <form onSubmit={handleSubmit} className='container'>
        <input
          type="text"
          className='search'
          placeholder='Search...'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {weather.main && (
          <div className='city'>
            <h2 className='city-name'>
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className='city-temp'>
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className='info'>
              <img
                className='city-icon'
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
