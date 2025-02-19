import React from "react";
import Sidebar from '../components/Sidebar';
import ChallList from "@/components/ChallList";
const Challenges = () => {
    return (
        <>
            <div className="  flex w-full flex-col h-full ">
                
                <div className="flex  h-full ">
                    <div className="flex flex-col p-10 border-r h-full border-dashed border-zinc-700 w-[350px]">
                        <Sidebar />
                    </div>
                    <div className=" overflow-y-auto p-10 text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 h-fit  gap-4 w-full ">
                        <ChallList />
                        <ChallList />
                        <ChallList />
                        <ChallList />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Challenges;
