import React from "react";
import { WiHumidity, WiBarometer } from "react-icons/wi";
import { FaTemperatureEmpty, FaWind } from "react-icons/fa6";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import "./Conditions.css";

const Conditions = ({ weatherData, formatTimeStamp }) => {
  if (!weatherData) return null;
  const { main, wind, sys } = weatherData;
  const { feels_like, humidity, pressure } = main;

  return (
    <div className="conditions">
      <div className="air">
        <h3>Air Conditions</h3>
        <div className="air-content">
          <p>
            <FaTemperatureEmpty /> Feels like:
            <span>{feels_like}</span>
          </p>
          <p>
            <FaWind />
            Wind: <span>{wind?.speed}m/s</span>
          </p>
          <p>
            <WiHumidity />
            Humidity: <span>{humidity}%</span>
          </p>
          <p>
            <WiBarometer />
            Pressure:<span> {pressure} hPa</span>
          </p>
        </div>
      </div>
      <div className="sun">
        <p>
          <BsFillSunriseFill />
          Sunrise: <span> {formatTimeStamp(sys.sunrise).slice(10)}</span>
        </p>
        <p>
          <BsFillSunsetFill />
          Sunset:
          <span> {formatTimeStamp(sys.sunset).slice(10)}</span>
        </p>
      </div>
    </div>
  );
};

export default Conditions;
