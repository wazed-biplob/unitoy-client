import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UpdateToy = () => {
  const toyData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState("Princess Dolls");
  const navigate = useNavigate();
  const {
    _id,
    toyName,
    toyPictureURL,
    price,
    rating,
    quantity,
    sellerEmail,
    sellerName,
    toyDescription,
    toySubCategory,
  } = toyData;

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const pictureURL = form.pictureURLToy.value;
    const toyName = form.toyname.value;
    const sellerName = form.name.value;
    const email = form.email.value;
    const subCategory = value;
    const toyPrice = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toyInfo = {
      toyName: toyName,
      price: toyPrice,
      quantity: quantity,
      rating: rating,
      sellerEmail: sellerEmail,
      sellerName: sellerName,
      toyDescription: description,
      toyPictureURL: pictureURL,
      toySubCategory: subCategory,
    };
    console.log(toyInfo);

    fetch(`https://unitoy-server.vercel.app/singletoy/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.modifiedCount > 0) {
          alert("Toy Has Been Updated Successfully.");
          navigate("/mytoys");
        }
      });
  };
  return (
    <>
      {" "}
      <div>
        <h1 className="text-center font-extrabold">Update Toy</h1>

        <form onSubmit={handleAddToy} className="p-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Picture URL of the Toy</span>
              </label>
              <input
                type="text"
                placeholder="Picture URL"
                className="input input-bordered"
                name="pictureURLToy"
                defaultValue={toyPictureURL}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                placeholder="Toy Name"
                className="input input-bordered"
                name="toyname"
                defaultValue={toyName}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                name="name"
                defaultValue={sellerName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                name="email"
                defaultValue={user?.email}
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Sub Category</span>
              </label>
              <select
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                className="select w-full select-info"
              >
                <option value="Princess Dolls">Princess Dolls</option>
                <option value="Adventure Dolls">Adventure Dolls</option>
                <option value="Classic Disney Dolls">
                  Classic Disney Dolls
                </option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered"
                name="price"
                defaultValue={price}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered"
                name="rating"
                defaultValue={rating}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                className="input input-bordered"
                name="quantity"
                defaultValue={quantity}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Detailed Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered"
                name="description"
                defaultValue={toyDescription}
              />
            </div>
          </div>

          <input
            type="submit"
            className=" btn btn-success btn-block my-8 text-white font-bold"
            value="Update Your Toy"
          />
        </form>

        <div className="form-control mt-6 px-8"></div>
      </div>
    </>
  );
};

export default UpdateToy;
