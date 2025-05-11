import React, { useState, useCallback } from "react";
import Api from "./Api";
import Button from "./Button";
import Conditions from "./Conditions";
import { IoSearchSharp } from "react-icons/io5";
import WeatherBackground from "./WeatherBackground";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [searchTrigger, setSearchTrigger] = useState("");
  const [temp, setTemp] = useState("C");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleweatherData = useCallback((data) => {
    setWeatherData(data);
  }, []);

  const convertCelsiusorFahrenhiet = (val) => {
    return temp === "C" ? val.toFixed(1) : ((val * 9) / 5 + 32).toFixed(1);
  };

  const formatTimeStamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };
  const iconCode = weatherData?.weather[0].icon;
  const iconUrl = iconCode
    ? `http://openweathermap.org/img/wn/${iconCode}@2x.png`
    : "";

  return (
    <div className="weather-wrapper">
      <div className="weather"></div>
      <div className="content">
        <WeatherBackground weatherData={weatherData} />
        <div className="input">
          <input
            type="text"
            placeholder="Search for cities"
            className="search"
            value={searchCity}
            onChange={(e) => {
              setSearchCity(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setSearchTrigger(searchCity.trim());
            }}
          >
            <IoSearchSharp
              className="searchicon"
              style={{ fontSize: "20px" }}
            />
          </button>
        </div>
        <Api
          onWeatherData={handleweatherData}
          searchCity={searchTrigger}
          onError={setError}
          setLoading={setLoading}
        />
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
        {loading ? (
          <div className="loader">
            <ClipLoader color="#3498db" size={40} />
          </div>
        ) : (
          weatherData && (
            <div>
              <div className="data">
                <h1>{weatherData.name}</h1>
                <div className="name">
                  <img src={iconUrl} alt="icon" />
                  <span>
                    <h2>{convertCelsiusorFahrenhiet(weatherData.main.temp)}</h2>
                    <p>{weatherData.weather[0].description}</p>
                  </span>
                  <Button
                    name="C"
                    convert={() => {
                      setTemp("C");
                    }}
                    active={temp === "C"}
                  />
                  <span>|</span>
                  <Button
                    name="F"
                    convert={() => {
                      setTemp("F");
                    }}
                    active={temp === "F"}
                  />
                </div>

                <h3>{formatTimeStamp(weatherData?.dt)}</h3>
              </div>
              <Conditions
                weatherData={weatherData}
                formatTimeStamp={formatTimeStamp}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
