import React from "react";
import HeroSection from "../../component/HeroSection/HeroSection";
import Service from "../../component/Service/Service";
import Gallery from "../../component/Gallery/Gallery";
function Home() {
  return (
    <>
      <div className="h-auto">
        <HeroSection />
        <Service />
        <Gallery />
      </div>
    </>
  );
}

export default Home;
