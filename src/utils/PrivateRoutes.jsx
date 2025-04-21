import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";

export const PrivateRoutes = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
