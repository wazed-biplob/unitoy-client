import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url("https://i.ibb.co/QQhH4XT/banner.jpg")`,
        borderRadius: "10px",
      }}
    >
      <div
        style={{ borderRadius: "10px 0px 0px 10px", width: "50%", left: "0px" }}
        className="hero-overlay bg-opacity-40 absolute flex items-center "
      >
        <div className="text-neutral-content p-4">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-outline">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
