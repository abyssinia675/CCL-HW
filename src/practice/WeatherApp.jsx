import { useState } from "react";

const API_KEY = "d36524316a7096387270265917496999e";
const LAT = "40.0023";
const LON = "-83.0023";

function WeatherApp() {
     const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");


    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`
                );

                if (!response.ok) {
                    throw new Error(`City not found. HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                setWeather(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchWeather()
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>There was an issue fetching your data: {error.message}</p>

    return (
        <div>
            <h1>{weather.name}</h1>
            <p>Temperature: {Math.round(weather.main.temp)}°F</p>
            <p>Feels like: {Math.round(weather.main.feels_like)}°F</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Conditions: {weather.weather[0].description}</p>
        </div>
    );

}

export default WeatherApp;