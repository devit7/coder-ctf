import React from "react";
import Navigation from "@/components/Navigation";
import { type } from "os";
import { Outlet } from "react-router";


const Layouts: React.FC = () => {
    return (
        <>
            <div className="bg-[#050516] h-screen w-full text-white">
                <Navigation />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Layouts;
