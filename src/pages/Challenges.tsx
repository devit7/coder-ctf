import React from "react";
import Sidebar from '../components/Sidebar';
import ChallList from "@/components/ChallList";
const Challenges = () => {
    return (
        <>
            <div className="  flex w-full flex-col  p-10">
                <div className="text-white font-semibold text-4xl">
                    Challenges
                </div>
                <div className="flex mt-10">
                    <div className="flex flex-col  w-[350px]">
                        <Sidebar />
                    </div>
                    <div className="  text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full ">
                        <ChallList />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Challenges;
