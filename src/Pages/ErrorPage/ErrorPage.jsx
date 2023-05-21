import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        width: "calc(100vw - 40px)",
        height: "calc(100vh - 20px)",
        backgroundImage: `url('https://i.ibb.co/4fVXFKm/Untitled.jpg')`,
        backgroundSize: "100% 100%",
      }}
      className="flex absolute justify-end items-center mx-auto"
    >
      <div className="w-1/2 h-full relative flex flex-col justify-center items-center p-8 gap-8">
        <h1 className="text-5xl font-extrabold">Oops :( 404</h1>
        <p className="text-4xl font-bold">Looks Like your are lost!</p>
        <p>Maybe you have tried to visited a place which does not exist!!!</p>
        <Link to="/">
          <button className="btn">Take Me Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
