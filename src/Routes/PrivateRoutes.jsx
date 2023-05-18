import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Login from "../Pages/Login/Login";
import { useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (user?.email) {
    return children;
  }
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <>
      {alert(`You need to log in first to view details!`)}
      <Login state={{ from: location }} replace />
    </>
  );
};

export default PrivateRoutes;
