import { useEffect } from "react";
const Api = ({ onWeatherData, searchCity }) => {
  useEffect(() => {
    if (!searchCity) return;
    const api_key = process.env.REACT_APP_API_KEY;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${api_key}&units=metric`
        );
        const data = await response.json();
        onWeatherData(data);
      } catch (err) {
        console.log("Error Occurred: " + err);
      }
    };

    fetchData();
  }, [searchCity, onWeatherData]);
  return null;
};

export default Api;
