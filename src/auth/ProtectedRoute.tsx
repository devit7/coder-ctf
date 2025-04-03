import { Navigate, Outlet } from "react-router";
import { useAuth } from "./AuthContext";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  //console.log(isAuthenticated, "isAuthenticated");
    if (isAuthenticated === false) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};
