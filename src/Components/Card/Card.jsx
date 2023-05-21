import React from "react";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
const Card = ({ t }) => {
  const { _id, toyName, toyPictureURL, price, rating } = t;
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            style={{ height: "300px", width: "100%" }}
            src={toyPictureURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">
            {toyName}
            <div className="badge badge-secondary">Disney</div>
          </h2>
          <p>$ {price}</p>
          <div className="">
            <Rating
              style={{ fontSize: "20px", color: "lightsalmon" }}
              readonly
              placeholderRating={Math.round(rating)}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />{" "}
            <p>Rating : {rating}</p>
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
