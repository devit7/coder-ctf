import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Modal from '../components/Modal';
const Home = () => {
    return (
        <>
            <div className="bg-[#050516]  flex w-full flex-col h-screen p-10">
                <div className="text-white font-semibold text-4xl">
                    Challenges
                </div>
                <div className="flex mt-10">

                    <div className="flex flex-col   w-[350px]">
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
                    </div>
                    <div className="  text-green-50 grid grid-cols-4 gap-4 w-full ">

                        <Modal>
                            <div className="flex cursor-pointer h-[150px] justify-between font-semibold flex-col p-4 bg-[#051C1B] border border-[#07772F]">
                                <div>
                                    <div className=" line-clamp-2 text-xl leading-5">
                                        Web Exploit dwadwad dwadwa dwawad dwdad dwadad
                                    </div>
                                    <div className="flex items-center gap-1 mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                                        </svg>
                                        <div className=" text-lg font-se">145</div>
                                        <div className=" px-2 bg-indigo-700">WEB</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-right  text-4xl">100Pts</div>
                                </div>
                            </div>
                        </Modal>
                        <div className="flex cursor-pointer h-[150px] justify-between font-semibold flex-col p-4 bg-slate-900 border border-slate-500">
                            <div>
                                <div className=" line-clamp-2 text-xl leading-5">
                                    Web Exploit dwadwad dwadwa dwawad dwdad dwadad
                                </div>
                                <div className="flex items-center gap-1 mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                                    </svg>
                                    <div className=" text-lg font-se">145</div>
                                    <div className=" px-2 bg-indigo-700">WEB</div>
                                </div>
                            </div>
                            <div>
                                <div className="text-right  text-4xl">100Pts</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
