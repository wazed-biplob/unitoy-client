import logo from "../../../src/assets/logo.jpg";
import "./Navbar.css";
const Navbar = () => {
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
            <a style={{ width: "80px", height: "80px", borderRadius: "50%" }}>
              <img
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                src={logo}
                alt="logo"
              />
            </a>
            <h1 className="text-4xl font-bold text-amber-300">UniToy</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>All Toys</a>
            </li>
            <li>
              <a>My toys</a>
            </li>
            <li>
              <a>Add A Toy</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
