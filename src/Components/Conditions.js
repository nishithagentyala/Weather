import React from "react";

const Conditions = ({ weatherData, convertTimeStamp }) => {
  return (
    <div>
      <div className="air">
        <h2>Air Conditions</h2>
        <p>Feels like:{weatherData.main.feels_like}</p>
        <p>Wind: {weatherData.wind.speed}</p>
        <p>Humidity:{weatherData.main.humidity}</p>
        <p>Pressure: {weatherData.main.pressure}</p>
      </div>
      <div>
        <p>Sunrise: {convertTimeStamp(weatherData.sys.sunrise).slice(10)}</p>
        <p>Sunset: {convertTimeStamp(weatherData.sys.sunset).slice(10)}</p>
      </div>
    </div>
  );
};

export default Conditions;
