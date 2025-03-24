import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { Navigate } from "react-router-dom";

const UserRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector(selectCurrentUser);

  if (!user) return <Navigate to="/auth/login" />;

  if (user.role !== "user")
    throw new Error("You are not authorized to access this page");

  return children;
};

export default UserRoute;
