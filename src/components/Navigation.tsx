import React from "react";
import { Link } from "react-router";
import NavDropdown from './NavDropdown';

const Navigation = () => {
  return (
    <>

      <nav className=" border-b border-dashed border-gray-600 fixed z-50 top-0 w-full md:px-16 px-4
      items-center h-16   shadow-sm " role="navigation">
        <div className="flex h-full border-dashed border-x border-gray-600 md:px-10 items-center gap-4 justify-between">
          <div className="text-xl font-bold">
            CODER-CTF
          </div>
          <div className="flex gap-4 text-lg">
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/challenges">Challenges</Link>
          </div>
          <div className="flex gap-4 font-semibold text-lg">
            <Link to="/profile">
              {/* <div className="flex items-center gap-2">
                <div>
                  Devit Erlingga A
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div> */}
              <NavDropdown />
            </Link>
            {/* <Link to="/login">Login</Link>
          <Link to="/register">Register </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
