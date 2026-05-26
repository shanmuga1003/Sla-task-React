import { useState } from "react";
import "./App.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "YOUR_API_KEY";

  async function getWeather() {
    if (!city) return;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`
    );

    const data = await response.json();
    setWeather(data);
  }

  return (
    <div className="container">
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {weather && weather.main && (
        <div className="weather-box">
          <h2>{weather.name}</h2>
          <h3>{weather.main.temp} °C</h3>
          <p>{weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;