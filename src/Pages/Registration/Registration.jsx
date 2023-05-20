import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import useTitle from "../Hooks/useTitle";
const auth = getAuth(app);
const Registration = () => {
  const { registerUser, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useTitle("Registration");
  const navigate = useNavigate();
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const conf_password = form.c_password.value;
    const photo = form.photo.value;
    if (password !== conf_password) {
      const errorMsg = `Password Doesn't Match!`;
      setError(errorMsg);
      alert(errorMsg);
      return;
    } else if (password.length < 6) {
      const errorMsg = `Password Must be at least 8 Characters.`;
      setError(errorMsg);
      alert(errorMsg);
      return;
    }

    registerUser(email, password)
      .then((r) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        form.reset();
        const message = "User Successfully Created.";
        setSuccess(message);
        alert(message);
        console.log(r.user);
        logOut()
          .then((r) => console.log(""))
          .catch((e) => console.log(e));
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="hero min-h-screen ">
        <div
          style={{
            backgroundImage: `url('https://i.ibb.co/QQhH4XT/banner.jpg')`,
            backgroundSize: "cover",
            width: "90%",
          }}
          className="hero-content flex-col lg:flex-row-reverse"
        >
          <div className="card flex-shrink-0 bg-opacity-70 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegistration}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered"
                    name="c_password"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    name="photo"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-accent text-white">
                    Sign Up
                  </button>
                </div>
              </form>
              <span style={{ color: "black" }}>
                Already Registered?{" "}
                <Link style={{ color: "blue" }} to="/login">
                  Sign In
                </Link>
              </span>
              <p className="text-error">{error}</p>
              <p className="text-success">{success}</p>
            </div>
          </div>
          <div className="w-[100%] text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white"></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
