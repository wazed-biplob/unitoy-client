import React, { useEffect, useState } from "react";
import "./Gallery.css";
const Gallery = () => {
  const [toyData, setToyData] = useState([]);
  useEffect(() => {
    fetch("https://unitoy-server.vercel.app/toydata")
      .then((r) => r.json())
      .then((d) => {
        setToyData(d);
      });
  }, []);
  console.log("gallery", toyData);
  return (
    <>
      <h1 className="bg-gray-300 mt-8 mb-4 pt-2 pb-3 px-4 text-center text-4xl font-bold text-white rounded-xl">
        UniToy Gallery
      </h1>
      <div className="gallery grid grid-cols-4 gap-4">
        {toyData.map((toy) => (
          <>
            <div className="card w-full image-full">
              <figure>
                <img
                  style={{ height: "400px" }}
                  src={toy.toyPictureURL}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{toy.toyName}</h2>
                <p>{toy.toyDescription}</p>
                <p>{toy.toySubCategory}</p>
                <span>{toy.sellerName}</span>
                <span className="badge badge-secondary badge-md">
                  {toy.sellerEmail}
                </span>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      alert("Not Implemented Yet!");
                    }}
                    className="btn glass"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Gallery;
