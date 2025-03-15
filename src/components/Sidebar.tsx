
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const Sidebar = () => {
    return (
        <>
            <div className="text-white font-semibold text-4xl ">
                Challenges
            </div>
            <div className="flex mt-10 items-center gap-2">
                <Checkbox id="test" />
                <Label htmlFor="" className=" " >Hide Solve</Label>
            </div>
            <div className=" mt-4 flex text-white font-semibold flex-col gap-2 w-full  ">
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
        </>
    );
};

export default Sidebar;
