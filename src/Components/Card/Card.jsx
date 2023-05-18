import React from "react";
import { Link } from "react-router-dom";

const Card = ({ t }) => {
  const { _id, toyName, toyPictureURL, price, rating } = t;
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
        <Link to={`/singletoy/${_id}`}>
          <button className="btn btn-outline btn-secondary mb-4">
            View Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default Card;
