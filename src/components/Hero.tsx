import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="h-[30vh] bg-[url('/images/Hero.png')] bg-cover md:h-[54vh] md:bg-[center_-200px]">
      <Navbar />
    </div>
  );
};

export default Hero;
