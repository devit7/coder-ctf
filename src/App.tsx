
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

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />} >
          <Route index element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile-setting" element={<ProfileSetting />} />
          <Route path="login" element={<Login />} />
        </Route >
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
