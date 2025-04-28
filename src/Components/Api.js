import { useEffect } from "react";
const Api = ({ onWeatherData, searchCity, onError }) => {
  useEffect(() => {
    if (!searchCity) return;
    const api_key = process.env.REACT_APP_API_KEY;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${api_key}&units=metric`
        );
        const data = await response.json();
        if (response.ok) {
          onWeatherData(data);
          onError(null);
        } else {
          onError(data.message);
          onWeatherData(null);
        }
      } catch (err) {
        onError("Network Error");
        onWeatherData(null);
      }
    };

    fetchData();
  }, [searchCity, onWeatherData, onError]);
  return null;
};

export default Api;
