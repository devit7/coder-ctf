import React from "react";

import Piechart from '@/components/Piechart';
import Linechart from '../components/LinechartLaderborad';
import { Button } from '@/components/ui/button';


const Profile = () => {
    return (
        <>
            <div className="p-10 mx-auto gap-10 justify-center h-full items-center grid grid-cols-2 max-w-[900px] ">
                <div className="flex  flex-col w-[400px] gap-4">
                    <img src="https://ui-avatars.com/api/?name=devit" alt="" className="rounded-md w-24 h-24" />
                    <h1 className=" font-semibold text-xl">Devit Erlingga</h1>
                    <div className="flex items-center gap-2">
                        <span>167th</span>
                        <span className=" text-zinc-500">rank</span>
                        |
                        <span>12/3/2024</span>
                        <span className=" text-zinc-500">join</span>
                    </div>
                    <div className="border-y  border-zinc-500 py-2 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        . Quisquam, quibusdam. Quisquam, quibusdam. Quisquam,
                        quibusdam. Quisquam, quibusdam. Quisquam, quibusdam.
                    </div>
                    <div className="flex items-center gap-2">
                        <span>14</span>
                        <span className=" text-zinc-500">points</span>
                    </div>

                </div>
                {/* <div className="">
                    <Linechart />
                </div> */}
                <div>
                    <Piechart />
                </div>
            </div>
        </>
    );
};

export default Profile;
