import React, { useState } from "react";
import Api from "./Api";
import Button from "./Button";
import Conditions from "./Conditions";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [temp, setTemp] = useState("C");
  const handleweatherData = (data) => {
    setWeatherData(data);
  };

  const iconCode = weatherData?.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  function convertCelsiusorFahrenhiet(val) {
    if (temp === "C") return val.toFixed(1);
    else return ((val * 9) / 5 + 32).toFixed(1);
  }

  function convertTimeStamp(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }

  return (
    <div className="weather">
      <input
        type="text"
        placeholder="Search for cities"
        className="search"
        value={searchCity}
        onChange={(e) => {
          setSearchCity(e.target.value);
        }}
      />
      <Api onWeatherData={handleweatherData} searchCity={searchCity} />

      {weatherData && (
        <div>
          <span className="name">
            <h2>{weatherData.name}</h2>
            <div>
              <h3>{convertCelsiusorFahrenhiet(weatherData.main.temp)}</h3>
              <Button
                name="C"
                convert={() => {
                  setTemp("C");
                }}
              />
              <Button
                name="F"
                convert={() => {
                  setTemp("F");
                }}
              />
            </div>
          </span>
          <span className="date">
            <img src={iconUrl} alt="icon" />
            <p>{convertTimeStamp(weatherData?.dt)}</p>
            <p>{weatherData.weather[0].description}</p>
          </span>
          <Conditions
            weatherData={weatherData}
            convertTimeStamp={convertTimeStamp}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
