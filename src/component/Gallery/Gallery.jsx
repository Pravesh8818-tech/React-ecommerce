import React from "react";
import bg1 from "../../assets/bg1.jpeg";
import bg2 from "../../assets/bg2.jpeg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpeg";
import bg5 from "../../assets/bg5.jpg";
import bg6 from "../../assets/bg6.jpg";
function Gallery() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-x-3 translation duration-500">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={bg5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-x-3 translation duration-500">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={bg6}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={bg4}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-y-4 hover:skew-y-3 translation duration-500">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={bg3}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={bg2}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={bg1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
