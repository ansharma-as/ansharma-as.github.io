import React from "react";
import homeLogo from "/logos/home-img-1.svg";
import Type from "./homeType";

function HomeAnimation1() {
  return (
    <section id="home" className="w-full italic">
        <div className="w-full ">

          <h1 className=" text-4xl md:text-6xl font-bold ">
            <h1 className="main-name text-blue-500 text-center"> ANSH </h1>
            <h1 className="main-name text-blue-500 text-center ml-28"> SHARMA</h1>
            
          </h1>

          <div className="py-4 text-4xl mt-5 text-center px-10">
            <Type />
          </div>
        </div>

        
      
    </section>
  );
}

export default HomeAnimation1;




