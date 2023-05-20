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
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Blog from "../Pages/Blog/Blog";

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
          fetch(`https://unitoy-server.vercel.app/singletoy/${params.id}`),
      },
      {
        path: "/alltoys",
        element: <AllToys />,
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
      {
        path: "/updatetoy/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`https://unitoy-server.vercel.app/singletoy/${params.id}`),
      },
      { path: "/Blog", element: <Blog /> },
    ],
  },
]);
{
}

export default router;
