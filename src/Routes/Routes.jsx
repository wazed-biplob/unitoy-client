import { Outlet, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import { Children } from "react";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import SingleToy from "../Pages/SingleToy/SingleToy";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../Pages/MyToys/MyToys";

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
        path: "/singletoy/:id",
        element: (
          <PrivateRoutes>
            <SingleToy />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singletoy/${params.id}`),
      },
      {
        path: "/alltoys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/toydata/"),
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoutes>
            <AddToy />
          </PrivateRoutes>
        ),
      },
      { path: "/mytoys", element: <MyToys /> },
    ],
  },
]);
{
}

export default router;
