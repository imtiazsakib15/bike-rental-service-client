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
        element: (
          <SuspenseFallback>
            <Home />
          </SuspenseFallback>
        ),
      },
      {
        path: "/auth/login",
        element: (
          <SuspenseFallback>
            <Login />
          </SuspenseFallback>
        ),
      },
      {
        path: "/auth/signup",
        element: (
          <SuspenseFallback>
            <SignUp />
          </SuspenseFallback>
        ),
      },
      {
        path: "/about-us",
        element: (
          <SuspenseFallback>
            <AboutUs />
          </SuspenseFallback>
        ),
      },
      {
        path: "/all-bikes",
        element: (
          <SuspenseFallback>
            <AllBikes />
          </SuspenseFallback>
        ),
      },
      {
        path: "/bikes/:id",
        element: (
          <SuspenseFallback>
            <SingleBike />
          </SuspenseFallback>
        ),
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
        element: (
          <SuspenseFallback>
            <Dashboard />
          </SuspenseFallback>
        ),
      },
      {
        path: "bikes",
        element: (
          <AdminRoute>
            <SuspenseFallback>
              <BikesPage />
            </SuspenseFallback>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <SuspenseFallback>
              <Users />
            </SuspenseFallback>
          </AdminRoute>
        ),
      },
    ],
  },
]);
