import { Outlet, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import { Children } from "react";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/registration", element: <Registration /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
