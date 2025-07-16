import React from "react";
import HeroSection from "../../component/HeroSection/HeroSection";
import Service from "../../component/Service/Service";
import Gallery from "../../component/Gallery/Gallery";
import PopularProduct from "../../component/PopularProduct/PopularProduct";
import Testimonial from "../../component/Testimonial/Testimonial";
function Home({ AddToCart }) {
  return (
    <>
      <div className="h-auto">
        <HeroSection />
        <Service />
        <PopularProduct AddToCart={AddToCart} />
        <Testimonial />
        <Gallery />
      </div>
    </>
  );
}

export default Home;
