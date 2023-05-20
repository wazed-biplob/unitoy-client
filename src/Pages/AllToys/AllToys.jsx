import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const [toyData, setToyData] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetch(`http://localhost:5000/toydata?limit=${limit}`)
      .then((r) => r.json())
      .then((d) => {
        setToyData(d);
      });
  }, [limit]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchString = e.target.search.value;
    const findQueryURL = `http://localhost:5000/toydata?search=${searchString}`;
    fetch(findQueryURL, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
      });
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
          <button onClick={() => setLimit(1000)} className="btn btn-warning">
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
            {toyData.map((toy, i) => (
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
