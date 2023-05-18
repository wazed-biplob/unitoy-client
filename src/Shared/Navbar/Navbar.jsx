import { useContext, useState } from "react";
import logo from "../../../src/assets/logo.jpg";
import "./Navbar.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then((r) => console.log(""))
      .catch((e) => console.log(e));
    navigate("/");
  };
  return (
    <div>
      <div style={{ marginBottom: "0px" }} className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>All Toys</a>
              </li>
              <li>
                <a>My Toys</a>
              </li>
              <li>
                <a>Add A Toy</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            >
              <img
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                src={logo}
                alt="logo"
              />
            </Link>
            <h1 className="text-4xl font-bold text-lime-300">UniToy</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-container menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alltoys">All Toys</Link>
            </li>

            {user && (
              <>
                <li>
                  <Link to="/mytoys">My toys</Link>
                </li>
                <li>
                  <Link to="/addtoy">Add A Toy</Link>
                </li>
              </>
            )}

            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
              >
                <img
                  className="profile-picture"
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </a>
              <Tooltip style={{ zIndex: "99" }} id="my-tooltip" />
              <button onClick={handleLogOut} className="btn btn-outline mx-2">
                Log out
              </button>{" "}
            </>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-outline">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
