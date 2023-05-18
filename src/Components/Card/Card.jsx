import React from "react";

const Card = ({ t }) => {
  const { toyName, toyPictureURL, price, rating } = t;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            style={{ height: "300px", width: "100%" }}
            src={toyPictureURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {toyName}
            <div className="badge badge-secondary">Dolls</div>
          </h2>
          <p>$ {price}</p>
          <div className="card-actions justify-end">
            <p>Rating: {rating}</p>
          </div>
        </div>
        <button className="btn btn-outline btn-secondary">View Details</button>
      </div>
    </>
  );
};

export default Card;
