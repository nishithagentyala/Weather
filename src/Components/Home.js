import React, { useState } from "react";
import Api from "./Api";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const handleweatherData = (data) => {
    setWeatherData(data);
  };
  console.log(weatherData);

  return (
    <div>
      <Api onWeatherData={handleweatherData} />
      <input type="text" placeholder="Search for cities" />
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <h3>{weatherData.main.temp}</h3>
        </div>
      )}
    </div>
  );
};

export default Home;
