import { useAuth } from "@/auth/AuthContext";
import { RegisterForm } from "@/components/RegisterForm";
import { Navigate } from "react-router";

const Register = () => {

    const { isAuthenticated } = useAuth();
    //console.log(isAuthenticated, "isAuthenticated");
    // Cek apakah user sudah login
    if(isAuthenticated === true) {
      return <Navigate to="/challenges" replace />;
    }

  return (
    <>
      <div className="w-fit flex justify-center items-center mx-auto h-full my-40">
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
