import React from "react";
import "./Carousel.css";
const Carousel = () => {
  return (
    <div className="my-4">
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            style={{ height: "600px" }}
            src="https://i.ibb.co/hZFh439/d-1.jpg"
            className="w-full rounded-xl"
          />
          <div className="text-container text-white absolute flex flex-col gap-10 ps-20 justify-center h-[600px] w-full bg-gradient-to-l from-[#e39090] to-[rgba(21, 21, 21, 0.5)]">
            <h1 className="text-6xl">We make whole set for you!</h1>
            <p className="text-4xl">
              Remember, dreams do come true when you believe in the power of
              dolls. Start creating cherished memories today.
            </p>
            <div className="flex gap-4">
              <button className="btn">Discover Universe</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            style={{ height: "600px" }}
            src="https://i.ibb.co/9rKjTFC/disney-3.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            style={{ height: "600px" }}
            src="https://i.ibb.co/PFMXDrR/disney-2.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
