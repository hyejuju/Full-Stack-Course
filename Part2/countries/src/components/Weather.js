import { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    <>
       {weather.main ? (
        <div>
          <h2>Weather in {city}</h2>
          <br/>
          temperature {weather.main.temp} Celcius
          <br/>
          <img
            alt="weather icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          /> 

          <br/>
          Wind {weather.wind.speed} m/s
        </div>
      ) : null} 
    </>
  );
};

export default Weather;