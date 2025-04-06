import { Link } from "react-router";
import NavDropdown from './NavDropdown';
import { useAuth } from "@/auth/AuthContext";
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const { isAuthenticated, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-dashed border-gray-600 fixed z-50 top-0 w-full md:px-16 px-0 backdrop-blur-md items-center h-16 shadow-sm" role="navigation">
        <div className="flex w-full h-full px-6 border-none md:border-dashed border-x border-gray-600 md:px-10 items-center gap-4 justify-between">
          <div className="text-xl font-bold">
            CODER-CTF
          </div>
          <div className="hidden md:flex gap-4 text-lg">
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/challenges">Challenges</Link>
          </div>
          <div className="flex cursor-pointer font-semibold text-lg">
            {isAuthenticated ? (
              user ? (
                <NavDropdown fullName={user} />
              ) : (
                <Skeleton className="h-5 w-20" />
              )
            ) : (
              <div className="hidden md:flex gap-4">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
          </div>
          <div className="flex md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden w-full flex flex-col gap-4 mt-[1px] px-8 text-lg backdrop-blur-md border-b border-dashed border-gray-600 py-4">
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/challenges">Challenges</Link>
            {!isAuthenticated && (
              <div className="flex flex-col gap-2">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
