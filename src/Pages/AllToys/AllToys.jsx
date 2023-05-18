import React from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toyData = useLoaderData();
  const { _id, sellerName, toyName, toySubCategory, price, quantity } = toyData;

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price ($)</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {toyData.map((toy, i) => (
              <>
                <tr key={toy._id}>
                  <th>{i}</th>
                  <td>{toy.sellerName}</td>
                  <td>{toy.toyName}</td>
                  <td>{toy.toySubCategory}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>
                    <button className="btn btn-xs">Details</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default AllToys;
