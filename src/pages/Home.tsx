import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";
import {
    Card, CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


const Home = () => {
    return (
        <>
            <div className="bg-[#050516]  flex w-full flex-col h-screen p-4">
                <div className="text-white font-semibold text-4xl">
                    Challenges
                </div>
                <div className="flex mt-10">

                    <div className="flex flex-col   w-[350px]">
                        <div className=" flex flex-col w-full h-[50%] ">
                            <div className=" py-2  font-semibold text-white text-center ">
                                Web Exploit
                            </div>
                            <div className=" py-2   font-semibold text-white text-center ">
                                Web Exploit
                            </div>
                        </div>
                        <div className=" flex flex-col  w-full h-[50%] ">
                            {/*          <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px] ">#</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow className="text-white" key={invoice.invoice}>
                                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                        <TableCell>{invoice.paymentStatus}</TableCell>
                                        <TableCell>{invoice.paymentMethod}</TableCell>
                                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table> */}
                        </div>
                    </div>
                    <div className=" text-white grid grid-cols-4 gap-4 w-full ">

                        <div className="flex flex-col p-3 bg-[#051C1B] border border-[#07772F]">
                            <div className="font-semibold text-2xl ">
                                Web Exploit
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                                </svg>
                                <div>145</div>
                                <div>WEB</div>
                            </div>
                            <div>
                                <div className="text-right text-4xl">100Pts</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
