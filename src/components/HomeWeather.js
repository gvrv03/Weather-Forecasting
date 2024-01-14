import React from "react";
import Weather from "./Weather";

const HomeWeather = () => {
  return (
    <div className="container m-auto   flex-col gap-10 flex justify-center p-5 ">
      <h1 className="font-semibold text-xl md:text-4xl   w-fit border-b-2 pb-5 border-red-400  ">
        Weather Application
      </h1>

      <Weather />
    </div>
  );
};

export default HomeWeather;
