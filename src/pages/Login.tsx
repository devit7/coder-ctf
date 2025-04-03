
import { useAuth } from "@/auth/AuthContext";
import { LoginForm } from "@/components/LoginForm";
import { Navigate } from "react-router";

const Login = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated, "isAuthenticated");
  // Cek apakah user sudah login
  if(isAuthenticated === true) {
    return <Navigate to="/challenges" replace />;
  }


  return (
    <>
    <div className="w-fit flex justify-center items-center mx-auto h-full">
        <LoginForm />
    </div>
    </>
  );
};

export default Login;
