
import { Routes, Route } from "react-router"
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Layouts from '@/layouts/Layouts';
import Challenges from './pages/Challenges';
import Profile from "./pages/Profile";
import User from "./pages/User";
import Leaderboard from "./pages/Leaderboard";
import ProfileSetting from "./pages/ProfileSetting";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { AuthProvider } from "@/auth/AuthContext";
import VerifyEmail from "./pages/VerifyEmail";

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layouts />} >
              <Route index element={<Home />} />
              <Route path="user" element={<User />} />
              <Route path="leaderboard" element={<Leaderboard />} />

              <Route element={<ProtectedRoute />} >
                <Route path="challenges" element={<Challenges />} />
                <Route path="profile" element={<Profile />} />
                <Route path="profile-setting" element={<ProfileSetting />} />
              </Route>
            {/* Auth */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="api/email/verify/:id/:token" element={<VerifyEmail />} />
            </Route >
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
