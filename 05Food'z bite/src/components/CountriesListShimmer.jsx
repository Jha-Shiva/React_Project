import React from "react";

const CountriesListShimmer = () => {

    //? new Array(10).fill('') it will give 10 empty array with blank space 



  return (
    <div className="flex flex-wrap m-5">
      {
        Array.from({length:10}).map((el, i)=>{
            return <div key={i} className="shadow-xl w-80 h-96 m-4 bg-gray-300 p-3 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out"></div>
        })
      }
    </div>
  );
};

export default CountriesListShimmer;
