import moment from "moment/moment";
import React from "react";

const WeatherCard = ({ date, mainTemp, minTemp, maxTemp, icon }) => {
  console.log(icon);
  return (
    <div className=" relative  p-5 bg-gray-50 flex items-center justify-center flex-col gap-5 ">
      <div className="text-center w-full   text-[10px] md:text-xs left-2 p-2 bg-sky-50 rounded-md text-blue-600  top-2 ">
        <i className=" uil uil-calender  mr-2 " />
        {moment(date).format("MMM Do YYYY")}
      </div>
      <div className="flex-col items-center gap-5 flex">
        <p className="text-5xl font-semibold">{mainTemp}</p>
        <img
          className="p-2 border  rounded-full bg-blue-100"
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt=""
        />
      </div>
      <div className=" flex  gap-10 justify-between to-gray-500 font-light mt-5s">
        <p>{minTemp}</p>
        <p>{maxTemp}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
