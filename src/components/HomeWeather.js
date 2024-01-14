import React from "react";
import Weather from "./Weather";

const HomeWeather = () => {
  return (
    <div className="container m-auto   flex-col gap-10 flex justify-center p-5 ">
      <div  className=" flex gap-5 justify-center font-semibold text-xl md:text-4xl   text-center  rounded-md  w-full bg-gray-800 p-5 ">
        <i className="uil uil-snowflake" />
        <p>Weather Forecasting</p>
        <i className="uil uil-snowflake" />
      </div>

      <Weather />
    </div>
  );
};

export default HomeWeather;
