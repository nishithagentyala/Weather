import { useEffect } from "react";

const WeatherBackground = ({ weatherData }) => {
  useEffect(() => {
    const weatherHtml = document.getElementsByClassName("weather")[0];

    if (!weatherHtml) return;

    weatherHtml.className = "weather"; // Clear previous weather classes
    if (weatherData && weatherData.weather) {
      const weather = weatherData.weather[0].description.toLowerCase();
      switch (true) {
        case weather.includes("clear"):
          weatherHtml.classList.add("clearsky");
          break;
        case weather.includes("clouds"):
          weatherHtml.classList.add("clouds");
          break;
        case weather.includes("haze"):
          weatherHtml.classList.add("haze");
          break;
        case weather.includes("rain"):
          weatherHtml.classList.add("rain");
          break;
        case weather.includes("snow"):
          weatherHtml.classList.add("snow");
          break;
        case weather.includes("sunny"):
          weatherHtml.classList.add("sunny");
          break;
        case weather.includes("thunderstorm"):
          weatherHtml.classList.add("thunderstorm");
          break;
        default:
          weatherHtml.classList.add("default");
          break;
      }
    }
    return () => {
      weatherHtml.className = "weather";
    };
  }, [weatherData]);
  return null;
};

export default WeatherBackground;
