"use client";
import { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import moment from "moment";
import { toast } from "react-hot-toast";

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
      toast.success("Success!");
      setloading(false);
    } catch (error) {
      toast.error(
        error?.response ? error?.response?.data?.message : error?.message
      );
      console.error("Error fetching weather data:", error);
      setloading(false);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-10 ">
        <input
          type="text"
          placeholder="Enter City Name"
          value={location}
          className="w-[70%] bg-gray-900 border-gray-900  border outline-none  p-5 rounded-md"
          onChange={handleLocationChange}
        />
        <button
          onClick={getWeather}
          disabled={loading}
          className="bg-gray-800 w-[30%]  text-white p-5  rounded-md"
        >
          {!loading ? "Get Data" : "Loading..."}
        </button>
      </div>
      {weatherData.length == 0 && (
        <div className="flex items-center justify-center h-[50vh]">
          <i className="uil uil-cloud-sun text-white text-8xl" />
        </div>
      )}
      {weatherData.length != 0 && (
        <>
          <div className="     text-3xl font-semibold rounded-md text-white top-2 ">
            City : {weatherData?.city?.name}
          </div>
          <div className=" relative  p-5 bg-gray-900  rounded-md flex items-center justify-center flex-col gap-5 ">
            <div className="text-center w-full   text-[10px] md:text-xs left-2 p-2 bg-gray-800 rounded-md text-gray-400  top-2 ">
              <i className=" uil uil-calender  mr-2 " />
              {moment(weatherData?.list[0]?.dt_txt).format("MMM Do YYYY")}
            </div>
            <div className="flex-col items-center gap-2 flex">
              <p className="text-5xl font-semibold">
                {parseInt(weatherData?.list[0]?.main?.temp)} &#8451;
              </p>
              <img
                className="p-2 rounded-full "
                src={`https://openweathermap.org/img/wn/${weatherData?.list[0]?.weather[0]?.icon}@2x.png`}
                alt=""
              />
              <p className="font-semibold">
                {" "}
                {weatherData?.list[0]?.weather[0]?.description}
              </p>
            </div>
            <div className=" flex  gap-10 justify-between to-gray-500 font-light mt-5s">
              <p>
                <span className="font-semibold">Min: </span>{" "}
                {parseInt(weatherData?.list[0]?.main?.temp_min)} &#8451;
              </p>
              <p>
                <span className="font-semibold">Max: </span>{" "}
                {parseInt(weatherData?.list[0]?.main?.temp_max)} &#8451;
              </p>
              <p>
                <span className="font-semibold uil uil-wind text-2xl "> </span>{" "}
                {parseInt(weatherData?.list[0]?.wind?.speed)}
              </p>
            </div>
          </div>
        </>
      )}
      {weatherData.length != 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {weatherData?.list.map((item, index) => {
            return (
              <WeatherCard
                date={item?.dt_txt}
                key={index}
                mainTemp={item?.main?.temp}
                minTemp={item?.main?.temp_min}
                maxTemp={item?.main?.temp_max}
                icon={item?.weather[0]?.icon}
                description={item?.weather[0]?.description}
                wind={item?.wind?.speed}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Weather;
