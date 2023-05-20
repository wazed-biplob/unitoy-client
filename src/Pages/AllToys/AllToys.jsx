import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";

const AllToys = () => {
  const [toyData, setToyData] = useState([]);
  const [limit, setLimit] = useState(20);
  useTitle("All Toys");
  useEffect(() => {
    fetch(`https://unitoy-server.vercel.app/toydata?limit=${limit}`)
      .then((r) => r.json())
      .then((d) => {
        setToyData(d);
      });
  }, [limit]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchString = e.target.search.value;
    if (searchString) {
      const findQueryURL = `https://unitoy-server.vercel.app/toydata?search=${searchString}`;
      fetch(findQueryURL, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((d) => {
          console.log(d);
          if (d.length > 0) {
            setToyData(d);
          } else {
            alert(
              "No Data Found, Write the proper Name of the Doll (Case Sensitive Search)"
            );
          }
        });
    } else {
      alert("Write the Dolls Name Properly (Search is Case Sensitive).");
      return;
    }
  };
  return (
    <>
      <div className="flex items-center gap-4">
        <form onSubmit={handleSearch} className="flex items-center gap-4">
          <div className="form-control my-4">
            <input
              type="text"
              placeholder="search a Toy by name"
              className="input input-bordered"
              name="search"
            />
          </div>
          <button type="submit" className="btn">
            Search
          </button>
        </form>
        <div>
          <button onClick={() => setLimit(1000)} className="btn btn-outline">
            Load All
          </button>
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
            {toyData ? (
              toyData.map((toy, i) => (
                <>
                  <tr key={toy._id}>
                    <th>{i + 1}</th>
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
              ))
            ) : (
              <span>No Data Found</span>
            )}
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
