import React from "react";
import Navigation from "@/components/Navigation";

import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/toaster"

const Layouts: React.FC = () => {
    return (
        <>
            {/* <div className="bg-[#050516] h-screen w-full text-white"> */}
            <div  className="bg-[#050516] h-screen w-full text-white">
                <Navigation />
                <div className="px-0 md:px-16  ">
                    <main className=" pt-16 h-screen scrollbar-hidden overflow-auto border-none md:border-x md:border-dashed border-gray-600">
                        <Outlet />
                    </main>
                    <Toaster />
                </div>
            </div>

        </>
    );
};

export default Layouts;
