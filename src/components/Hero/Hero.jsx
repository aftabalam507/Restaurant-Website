import React from "react";
import HeroPng from "../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[600px] bg-lightBlue 
      flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* text content section */}
            <div
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0
              text-center sm:text-left"
            >
              <h1
                className="text-8xl lg:text-[12rem] font-bold bg-clip-text text-transparent 
              bg-gradient-to-b from-primary to-primary/90 font-cursive"
              >
                Rice
                <span className="text-3xl font-sans text-dark"> Bowl</span>
              </h1>
              <p className="text-sm text-dark font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                nisi quae expedita dolorum, enim excepturi similique, iste totam
                consequatur velit delectus error distinctio? Rerum, voluptas.
              </p>

              <div>
                <button className="primary-btn">View Our Menu</button>
              </div>
            </div>

            {/* Hero Image section  */}
            <div
              className="min-h-[450px] flex justify-center 
            items-center relative order-1 sm:order-2"
            >
              <img
                src={HeroPng}
                alt="img"
                className="max-w-[450px] w-full sm:scale-125 shadow-1"
              />

              <div
                className="bg-primary p-3 rounded-xl absolute 
              top-10 left-10 hidden md:block"
              >
                <h1 className="text-white">Fresh Food</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
