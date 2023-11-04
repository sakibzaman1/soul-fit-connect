import React from "react";
import { Carousel } from "flowbite-react";

const Banner = () => {
  return (
    <div className="min-h-screen sm:h-64 xl:h-80 2xl:h-96 mt-10 ">
      <Carousel pauseOnHover>
        <img
          src="https://i.ibb.co/DD1mKHx/banner1.jpg"
          alt="..."
        />
        <img
          src="https://i.ibb.co/ngvDxxM/banner2.jpg"
          alt="..."
        />
        <img
          src="https://i.ibb.co/pwtnSM2/banner3.jpg"
          alt="..."
        />
        <img
          src="https://i.ibb.co/x1Kk93X/banner5.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Banner;


/*

https://i.ibb.co/DD1mKHx/banner1.jpg
https://i.ibb.co/ngvDxxM/banner2.jpg
https://i.ibb.co/pwtnSM2/banner3.jpg
https://i.ibb.co/tJXxVJf/banner4.jpg
https://i.ibb.co/x1Kk93X/banner5.jpg

*/
