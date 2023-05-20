import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState("Princess Dolls");
  useTitle("Add A Toy");
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const pictureURL = form.pictureURLToy.value;
    const toyName = form.toyname.value;
    const sellerName = form.name.value;
    const email = form.email.value;

    const toyPrice = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toyInfo = {
      toyName: toyName,
      price: toyPrice,
      quantity: quantity,
      rating: rating,
      sellerEmail: email,
      sellerName: sellerName,
      toyDescription: description,
      toyPictureURL: pictureURL,
      toySubCategory: value,
    };
    console.log(toyInfo);

    fetch("https://unitoy-server.vercel.app/toydata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.insertedId) {
          alert("Toy Has Been Added Successfully.");
        }
      });
  };
  return (
    <>
      {" "}
      <div>
        <h1 className="text-center font-extrabold">Add a Toy</h1>

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
              />
            </div>
          </div>

          <input
            type="submit"
            className=" btn btn-block my-8 text-white font-bold"
            value="Add Your Toy"
          />
        </form>

        <div className="form-control mt-6 px-8"></div>
      </div>
    </>
  );
};

export default AddToy;
