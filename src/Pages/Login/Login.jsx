import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((r) => {
        console.log(r.user);
        navigate(from, { replace: true });
      })
      .catch((e) => setError(e.message));
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const c_password = form.c_password.value;

    if (password !== c_password) {
      alert(`Password Doesn't Match!`);
      return;
    }
    signInUser(email, password)
      .then((r) => {
        console.log(r.user);
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r">
        <div
          style={{
            backgroundImage: `url('https://i.ibb.co/ZWC0YKq/Moana.jpg')`,
            backgroundSize: "cover",
            width: "90%",
          }}
          className="hero-content flex-col lg:flex-row-reverse"
        >
          <div className="card flex-shrink-0 bg-opacity-40 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSignIn}>
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

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-accent text-white">
                    Sign In
                  </button>
                </div>
              </form>

              <span style={{ color: "black" }}>
                `Don't Have an Account?`
                <Link style={{ color: "blue" }} to="/registration">
                  Register
                </Link>
              </span>
              <button
                onClick={handleSignInWithGoogle}
                className="btn glass text-white"
              >
                Sign In with Google
              </button>
              <p className="text-error">{error}</p>
            </div>
          </div>
          <div className="w-[100%] text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
