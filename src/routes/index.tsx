import MainLayout from "@/layout/MainLayout";
import AboutUs from "@/pages/AboutUs";
import AllBikes from "@/pages/AllBikes";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import SignUp from "@/pages/SignUp";
import SingleBike from "@/pages/SingleBike";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/all-bikes",
        element: <AllBikes />,
      },
      {
        path: "/bikes/:id",
        element: <SingleBike />,
      },
    ],
  },
]);
