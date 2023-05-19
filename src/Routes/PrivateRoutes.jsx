import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Login from "../Pages/Login/Login";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (user?.email) {
    return children;
  }
  if (loading) {
    return (
      <div
        style={{ width: "100%", height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        {" "}
        Loading...
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <>
      {alert("You need to login in first to view details.")}
      <Navigate to="/login" state={{ from: location }} replace />
    </>
  );
};

export default PrivateRoutes;
