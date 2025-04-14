import AdminRoute from "@/components/custom/shared/AdminRoute";
import PrivateRoute from "@/components/custom/shared/PrivateRoute";
import SuspenseFallback from "@/components/custom/SuspenseFallback";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainLayout = lazy(() => import("@/layout/MainLayout"));
const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const SignUp = lazy(() => import("@/pages/SignUp"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const AllBikes = lazy(() => import("@/pages/AllBikes"));
const SingleBike = lazy(() => import("@/pages/SingleBike"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const DashboardLayout = lazy(() => import("@/layout/DashboardLayout"));
const Dashboard = lazy(() => import("@/pages/Dashboard/Dashboard"));
const BikesPage = lazy(() => import("@/pages/Dashboard/BikesPage"));
const Users = lazy(() => import("@/pages/Dashboard/Users"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseFallback>
        <MainLayout />
      </SuspenseFallback>
    ),
    errorElement: (
      <SuspenseFallback>
        <NotFound />
      </SuspenseFallback>
    ),
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
        <SuspenseFallback>
          <DashboardLayout />
        </SuspenseFallback>
      </PrivateRoute>
    ),
    errorElement: (
      <SuspenseFallback>
        <NotFound />
      </SuspenseFallback>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "bikes",
        element: (
          <AdminRoute>
            <BikesPage />
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
    ],
  },
]);
