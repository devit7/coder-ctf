import React from "react";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <>

      <nav className="flex sticky z-50 top-0 w-full md:px-10 px-4
      justify-between items-center h-16   shadow-sm " role="navigation">
        <div className="text-xl font-bold">
          CODER-CTF
        </div>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
          <Link to="/challenges">Challenges</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/login">Login</Link>
          <Link to="/register">Register </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
