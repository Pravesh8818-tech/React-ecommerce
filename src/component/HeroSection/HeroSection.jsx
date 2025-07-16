import React from "react";
import banner from "../../assets/banner.jpg";

function HeroSection() {
  return (
    <>
      <div className="relative">
        <div>
          <img
            src={banner}
            alt="banner"
            className="w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="absolute top-[30%] left-[50%]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 text-center">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 md:mt-5 font-semibold text-center">
          Shop Our Latest Arrival & Unleash Your Style
        </p>
      </div>
    </>
  );
}

export default HeroSection;
