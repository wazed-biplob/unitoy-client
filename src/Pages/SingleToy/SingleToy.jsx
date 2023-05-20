import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const SingleToy = () => {
  const singleToyData = useLoaderData();
  const {
    toyName,
    toyPictureURL,
    price,
    rating,
    quantity,
    sellerEmail,
    sellerName,
    toyDescription,
    toySubCategory,
  } = singleToyData;
  useTitle("Single Toy");
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="flex items-center justify-center px-4">
        <img
          style={{ width: "400px", height: "400px", borderRadius: "8px" }}
          src={toyPictureURL}
          alt="image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{toyName}</h2>
        <hr />
        <p>Description: {toyDescription}</p>
        <hr />
        <p>Sub Category : {toySubCategory}</p>
        <p>Available Quantity : {quantity}</p> <p>$ {price}</p>
        <div className="flex gap-2">
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
        <hr />
        <p>Seller Name : {sellerName}</p>
        <p>Seller Email : {sellerEmail}</p>
        <hr />
        <div className="card-actions justify-end">
          <button
            onClick={() => alert("Not Implemented Yet!")}
            className="btn btn-secondary"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
