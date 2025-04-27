import React from "react";
import { WiHumidity, WiBarometer } from "react-icons/wi";
import { FaTemperatureEmpty, FaWind } from "react-icons/fa6";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import "./Conditions.css";
const Conditions = ({ weatherData, convertTimeStamp }) => {
  if (!weatherData) return null;
  return (
    <div className="conditions">
      <div className="air">
        <h3>Air Conditions</h3>
        <div className="air-content">
          <p>
            <FaTemperatureEmpty /> Feels like:{" "}
            <span>{weatherData.main.feels_like}</span>
          </p>
          <p>
            <FaWind />
            Wind: <span>{weatherData.wind.speed}m/s</span>
          </p>
          <p>
            <WiHumidity />
            Humidity: <span>{weatherData.main.humidity}%</span>
          </p>
          <p>
            <WiBarometer />
            Pressure:<span> {weatherData.main.pressure} hPa</span>
          </p>
        </div>
      </div>
      <div className="sun">
        <p>
          <BsFillSunriseFill />
          Sunrise:{" "}
          <span> {convertTimeStamp(weatherData.sys.sunrise).slice(10)}</span>
        </p>
        <p>
          <BsFillSunsetFill />
          Sunset:{" "}
          <span> {convertTimeStamp(weatherData.sys.sunset).slice(10)}</span>
        </p>
      </div>
    </div>
  );
};

export default Conditions;
