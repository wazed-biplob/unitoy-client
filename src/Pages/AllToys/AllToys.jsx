import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toyData = useLoaderData();

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="form-control my-4">
          <input
            type="text"
            placeholder="search a to by name"
            className="input input-bordered"
          />
        </div>
        <div>
          <select>
            <option>20</option>
          </select>
        </div>
      </div>
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
                    <Link to={`/singletoy/${toy._id}`}>
                      {" "}
                      <button className="btn btn-xs">Details</button>
                    </Link>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price ($)</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default AllToys;
