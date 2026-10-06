import { useEffect, useState } from "react";

const Weather = () => {

    const [weather, setWeather] = useState(null)

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const fetchWeather = async () => {
        // setLoading(true);
        // setError(null);
        // setWeather(null);
        try{
            const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current=temperature_2m,wind_speed_10m");

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json();
            setWeather({temperature: data.current.temperature_2m, windspeed: data.current.wind_speed_10m});

        } catch (e) {
            console.error(e)
            setError("Failed to load weather data")
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTimeout(fetchWeather(), 3000);
    }, [])

    return (
        <div>
            <h1>
                🌤️ Current weather in new york!
            </h1>
            {/* <button onClick={fetchWeather}>Get weather in New york!</button> */}
            {weather && <p>This is temperature: {weather.temperature}  & windspeed: {weather.windspeed}</p>}
            {loading && <p>Loading...</p>}

            {error && <p>${error}</p>}
        </div>
    )
}

export default Weather;
