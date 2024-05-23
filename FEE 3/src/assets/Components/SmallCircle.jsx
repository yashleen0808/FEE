import React from 'react';
import backgroundImage1 from "../Assets/Person.png";
import backgroundImage2 from "../Assets/Person2.png";
import backgroundImage3 from "../Assets/Person3.png";

const SmallCircle = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center  md:space-y-0 md:space-x-28">
      <div className="flex flex-col items-center">
        <div className="w-64 h-64 rounded-full bg-cover bg-center bg-blue-500 m-4" style={{ backgroundImage: `url(${backgroundImage1})` }}></div>
        <p className="text-red-500 font-bold text-4xl">AIDEN HUNTER</p>
        <p className="text-red-400  text-2xl">FOUNDER</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-64 h-64 rounded-full bg-cover bg-center bg-green-500 m-4" style={{ backgroundImage: `url(${backgroundImage2})` }}></div>
        <p className="text-red-500 font-bold text-4xl">Ethel Ramsey</p>
        <p className="text-red-400 text-2xl">CO-FOUNDER</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-64 h-64 rounded-full bg-cover bg-center bg-red-500 m-4" style={{ backgroundImage: `url(${backgroundImage3})` }}></div>
        <p className="text-red-500 font-bold text-4xl">FANNIE STEWART</p>
        <p className="text-red-400 text-2xl">CO-FOUNDER</p>
      </div>
    </div>
  );
}

export default SmallCircle;
