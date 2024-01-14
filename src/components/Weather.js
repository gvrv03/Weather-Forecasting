"use client";
import { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setloading] = useState(false);

  const getWeather = async () => {
    try {
      setloading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=26bd02fd88ef96a4f6d892fb4c44e456&units=metric`
      );
      setWeatherData(response.data);
      setloading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setloading(false);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-10 ">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          className="w-full border outline-none  p-5 rounded-md"
          onChange={handleLocationChange}
        />
        <button
          onClick={getWeather}
          disabled={loading}
          className="bg-red-500 w-fit  text-white p-5  rounded-md"
        >
          {!loading ? "Get" : "Getting Data..."}
        </button>
      </div>

      <div className="   text-3xl font-semibold rounded-md text-blue-600  top-2 ">
        {location}
      </div>
      <div className=" relative  p-5 bg-gray-50 flex items-center justify-center flex-col gap-2 ">
        <div className=" uil uil-calender  absolute text-xs left-2 p-2 bg-sky-50 rounded-md text-blue-600  top-2 ">
          12/11/2003
        </div>
        <div className="flex-col items-center flex">
          <p className="text-5xl font-semibold">27</p>
          <i class="uil uil-cloud-moon text-4xl  text-blue-500" />
        </div>
        <div className=" flex  gap-10 justify-between to-gray-500 font-light mt-5s">
          <p> 25.25 </p>
          <p>27.23</p>
        </div>
      </div>

      {weatherData.length != 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {weatherData?.list.map((item, index) => {
            return (
              <WeatherCard
                date={item?.dt_txt}
                mainTemp={item?.main?.temp}
                minTemp={item?.main?.temp_min}
                maxTemp={item?.main?.temp_max}
                icon={item?.weather[0]?.icon}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Weather;

// {weatherData && (
//   <div>
//     <h2>{weatherData.city.name}</h2>
//     {weatherData.list.map((forecast) => (
//       <div key={forecast.dt}>
//         <p>{forecast.dt_txt}</p>
//         <p>Temperature: {forecast.main.temp}°C</p>
//         {/* Add more weather details as needed */}
//       </div>
//     ))}
//   </div>
// )}
