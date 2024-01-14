import moment from "moment/moment";
import React from "react";

const WeatherCard = ({
  date,
  mainTemp,
  minTemp,
  maxTemp,
  icon,
  description,
  wind,
}) => {
  return (
    <div className=" relative  p-5 bg-gray-900  rounded-md flex items-center justify-center flex-col gap-5 ">
      <div className="text-center w-full   text-[10px] md:text-xs left-2 p-2 bg-gray-800 rounded-md text-gray-400  top-2 ">
        <i className=" uil uil-calender  mr-2 " />
        {moment(date).format("MMM Do YYYY")}
      </div>
      <div className="flex-col items-center gap-2 flex">
        <p className="text-5xl font-semibold">{parseInt(mainTemp)} &#8451;</p>
        <img
          className=" rounded-full "
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
        />
        <p className="font-semibold">{description}</p>
      </div>
      <div className=" flex  gap-5 justify-between to-gray-500 font-light mt-5s">
        <p>Min:{parseInt(minTemp)}&#8451;</p>
        <p>Max:{parseInt(maxTemp)}&#8451;</p>
        <p>{parseInt(wind)}</p>
      </div>
    </div>
  );
};
export default WeatherCard;
