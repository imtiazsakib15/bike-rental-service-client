import PrivateRoute from "@/components/custom/shared/PrivateRoute";
import DashboardLayout from "@/layout/DashboardLayout";
import MainLayout from "@/layout/MainLayout";
import AboutUs from "@/pages/AboutUs";
import AllBikes from "@/pages/AllBikes";
import BikesPage from "@/pages/Dashboard/BikesPage";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Users from "@/pages/Dashboard/Users";
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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "bikes",
        element: <BikesPage />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);
