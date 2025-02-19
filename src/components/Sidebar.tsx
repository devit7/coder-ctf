
import React from "react";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const Sidebar = () => {
    return (
        <>
            <div className=" flex text-white font-semibold flex-col gap-2 w-full h-[50%] ">
                <Label className=" text-xl" >Categories</Label>
                <div className="flex items-center gap-2">
                    <Checkbox id="test" />
                    <Label htmlFor="" className=" " >Web Exploit</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="test1" />
                    <Label htmlFor="test1" className=" " >Cryptography</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="test2" />
                    <Label htmlFor="test2" className=" " >Forensic</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="test3" />
                    <Label htmlFor="test3" className=" " >Binary</Label>
                </div>

            </div>
            <div className=" flex flex-col  w-full h-[50%] ">
                {/*  */}
            </div>
        </>
    );
};

export default Sidebar;
