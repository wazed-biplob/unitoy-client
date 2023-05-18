import { Outlet, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import { Children } from "react";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import SingleToy from "../Pages/SingleToy/SingleToy";

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
      {
        path: "singletoy/:id",
        element: <SingleToy />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singletoy/${params.id}`),
      },
    ],
  },
]);
{
}

export default router;
