import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

type ModalProps = {
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]   text-white">
                <Tabs className="">
                    <TabsList className="w-full rounded-md ">
                        <TabsTrigger className="w-full rounded-md" value="chall">Chall</TabsTrigger>
                        <TabsTrigger className="w-full rounded-md" value="solve">Solve (12)</TabsTrigger>
                    </TabsList>
                    <TabsContent defaultChecked value="chall" >
                        <div className="flex flex-col gap-4 mt-10 min-h-[200px]">
                            <DialogHeader>
                                <DialogTitle className=" text-2xl">Edit profile</DialogTitle>
                                <div className="flex items-center gap-2 text-lg">
                                    <div className="text-gray-300">
                                        Score
                                    </div>
                                    <div>
                                        145
                                    </div>
                                    <div className="text-gray-300">
                                        Solve
                                    </div>
                                    <div>
                                        12
                                    </div>
                                    <div className=" px-1 text-sm bg-indigo-700">WEB</div>
                                </div>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className=" border-t "></div>
                            <div className="flex items-center gap-4">
                                <Input
                                    id="username"
                                    placeholder="Flag"
                                    className="col-span-3"
                                />
                                <Button>Flag</Button>
                            </div>
                            <div className="border py-1 px-2 text-green-400 bg-[#051C1B] rounded-md text-center border-green-400">
                                Succes 🥳
                            </div>
                            <div className="border py-1 px-2 text-red-400 bg-[#1c0508] rounded-md text-center border-red-400">
                                Failed 🤣
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="solve">
                        <div className="flex flex-col gap-4 mt-5 min-h-[200px] max-h-[400px] overflow-y-auto">
                            <table className="w-full text-center ">
                                <tr className="  py-2 bg-zinc-800">
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                </tr>
                                <tr className="border-b  border-gray-500">
                                    <td>1</td>
                                    <td className="py-2  max-w-[150px] truncate pr-1">Smith dwadwa dwa dwa dwad dwad dwadaw</td>
                                    <td>21/12/2024</td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td>2</td>
                                    <td className="py-2 max-w-[150px] truncate pr-1">Smith dwadwa dwa dwa dwad dwad dwadaw</td>
                                    <td>21/12/2024</td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td>2</td>
                                    <td className="py-2 max-w-[150px] truncate pr-1">Smith dwadwa dwa dwa dwad dwad dwadaw</td>
                                    <td>21/12/2024</td>
                                </tr>
                                <tr className="border-b border-gray-500">
                                    <td>2</td>
                                    <td className="py-2 max-w-[150px] truncate pr-1">Smith dwadwa dwa dwa dwad dwad dwadaw</td>
                                    <td>21/12/2024</td>
                                </tr>
                            </table>
                        </div>
                    </TabsContent>
                </Tabs>

            </DialogContent>
        </Dialog>
    );
};

export default Modal;
