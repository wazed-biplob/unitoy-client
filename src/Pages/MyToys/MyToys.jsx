import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import useTitle from "../Hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toyData, setToyData] = useState([]);
  const [sort, setSort] = useState(true);
  useTitle("My Toys");
  const url = `http://localhost:5000/toydata?email=${user?.email}`;
  useEffect(() => {
    sort
      ? toyData.sort((a, b) => a.price - b.price)
      : toyData.sort((a, b) => b.price - a.price);
  }, [sort, toyData]);
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setToyData(d);
      });
  }, [url]);

  const handleDelete = (_id) => {
    const deleteConfirm = confirm("Are you sure you want to remove it?");
    if (deleteConfirm) {
      fetch(`http://localhost:5000/singletoy/${_id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((d) => {
          console.log(d);
          if (d.deletedCount > 0) {
            alert("Successfully Removed!");
            const remainingToys = toyData.filter((toy) => toy._id !== _id);
            setToyData(remainingToys);
          }
        });
    }
  };
  return (
    <>
      <button onClick={() => setSort(!sort)} className="btn my-4">
        {sort ? "Sort Ascending" : "Sort Descending"}
      </button>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Toy Picture</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Price ($)</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>Description</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {toyData.map((toy, i) => (
              <>
                <tr key={toy._id}>
                  <th>{i + 1}</th>
                  <td>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={toy.toyPictureURL}
                    />
                  </td>
                  <td>{toy?.toyName}</td>
                  <td>{toy?.toySubCategory}</td>
                  <td>{toy?.sellerName}</td>
                  <td>{toy?.sellerEmail}</td>
                  <td>{toy?.price}</td>
                  <td>{toy?.rating}</td>
                  <td>{toy?.quantity}</td>
                  <td>
                    {toy?.toyDescription?.slice(0, 10)}
                    {"..."}
                  </td>

                  <td className="flex justify-evenly">
                    <Link to={`/updatetoy/${toy._id}`}>
                      <button className="btn btn-xs btn-secondary">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="btn btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
          <tfoot>
            <tr></tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default MyToys;
