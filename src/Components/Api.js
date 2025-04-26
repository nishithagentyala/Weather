import { useEffect } from "react";
const Api = ({ onWeatherData, searchCity }) => {
  const name = "Serilingampalle";

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;

    try {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          onWeatherData(data);
        });
    } catch (err) {
      console.log("Error Occurred" + err);
    }
  }, [onWeatherData]);
  return null;
};

export default Api;
