import React from "react";
import Navigation from "@/components/Navigation";

import { Outlet } from "react-router";


const Layouts: React.FC = () => {
    return (
        <>
            {/* <div className="bg-[#050516] h-screen w-full text-white"> */}
            <div  className="bg-[#050516] h-screen w-full text-white">
                <Navigation />
                <div className="px-16  ">
                    <main className=" pt-16 h-screen scrollbar-hidden overflow-auto border-x border-dashed border-gray-600">
                        <Outlet />
                    </main>
                </div>
            </div>

        </>
    );
};

export default Layouts;
