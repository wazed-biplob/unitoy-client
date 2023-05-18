import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url("https://i.ibb.co/NFngn0d/banner-disney.jpg")`,
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            borderRadius: "10px 0px 0px 10px",

            left: "0px",
          }}
          className="lg:w-1/2 md:w-1/2 w-full hero-overlay bg-opacity-80 absolute flex items-center "
        >
          <div className="text-neutral-content ps-10">
            <div className="max-w-md">
              <h1 className="mb-5 lg:text-5xl font-bold">
                UniToy Brings your Dream Toys
              </h1>
              <p className="mb-10 lg:text-xl text-xs">
                Discover Endless Fun and Adventure with Our Exciting Toy
                Collection! Toys That Spark Creativity and Learning - Unleash
                the Potential Within! Make Every Moment Magical with Our Amazing
                Selection of Toys and Games!
              </p>
              <button className="btn glass">Purchase Toys</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
