import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
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
import DOMPurify from 'dompurify';
import HintAccordion from "./HintAccordion";
import parse from 'html-react-parser';
import { useFlagApi } from "@/api/FlagApi";
import ButtonLoading from "./ButtonLoading";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSubmissionsByChallId } from "@/api/ChallApi";
import { Skeleton } from "./ui/skeleton";
import HandleFormatTime from "./HandleFormatTime";

type ModalProps = {
    children: React.ReactNode
    dataChallApi: any
}

type DataChallApi = {
    flag: string
    chall_id: number
}

const Modal: React.FC<ModalProps> = ({ children, dataChallApi }) => {

    const queryClient = useQueryClient();
    const { mutate, isPending } = useFlagApi();
    const sanitizedHTMLDescription = DOMPurify.sanitize(dataChallApi.description);
    const [useFlagStatus, setUseFlagStatus] = useState<boolean>(false);


    // Handle flag submission logic here
    const handleFlagSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent default form submission and get the form data
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const flag = formData.get('flag');
        //console.log(flag);

        //set type of data to send to api
        const dataFSend: DataChallApi = {
            flag: flag as string,
            chall_id: dataChallApi.id
        }

        mutate(dataFSend, {
            onSuccess: (response) => {
                //console.log(response.message);
                if (response.status === "correct") {
                    setUseFlagStatus(false);
                    queryClient.invalidateQueries({ queryKey: ['myDataChallList'] }); // refresh data
                    /* queryClient.invalidateQueries({ queryKey: ['myDataSubmissionsList'] }); // refresh data */
                    //console.log(response.message);
                } else {
                    setUseFlagStatus(true);
                    //console.log("Failed to submit flag", response);
                }
            },
            onError: (error) => {
                console.error("Error submitting flag:", error);
            }

        });

    }

    /* Logika get Data Submissions */

    const [isSolveTabOpen, setIsSolveTabOpen] = useState(false);

    const { data: dataSubmissions, isLoading } = useQuery({
        queryKey: ['myDataSubmissionsList', dataChallApi.id], // Include challenge ID in the query key karena data tiap modal berbeda maka di beri id
        queryFn: () => getSubmissionsByChallId(dataChallApi.id),
        enabled: isSolveTabOpen  // Fetch data hanya jika tab "Solve" terbuka
    });
    //console.log("Data Submissions", dataChallApi);
    const handleTabChange = (value: string) => {
        if (value === "solve") {
            setIsSolveTabOpen(true);
            //console.log(dataSubmissions);
        } else {
            setIsSolveTabOpen(false);
        }
    };

    return (
        <Dialog onOpenChange={(open) => {
            if (!open) {
                setUseFlagStatus(false);
                setIsSolveTabOpen(false); // Reset solve tab state when modal closes
            }
        }}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]   text-white">
                <Tabs onValueChange={handleTabChange}>
                    <TabsList className="w-full rounded-md ">
                        <TabsTrigger className="w-full rounded-md" value="chall">Chall</TabsTrigger>
                        <TabsTrigger className="w-full rounded-md" value="solve">Solve ({dataChallApi.total_solved})</TabsTrigger>
                    </TabsList>
                    <TabsContent defaultChecked value="chall" >
                        <div className="flex flex-col gap-4 mt-10 min-h-[200px]">
                            <DialogHeader >
                                <DialogTitle className=" text-2xl">{dataChallApi.title}</DialogTitle>
                                <div className="flex items-center gap-2 text-sm text-gray-300 justify-between">
                                    <div className="flex items-center gap-2 text-lg">
                                        <div className="text-gray-300">
                                            Score
                                        </div>
                                        <div>
                                            {dataChallApi.point}
                                        </div>
                                        <div className="text-gray-300">
                                            Solve
                                        </div>
                                        <div>
                                            {dataChallApi.total_solved}
                                        </div>
                                        <div className=" px-1 text-sm bg-indigo-700">WEB</div>
                                    </div>
                                    <div className="gap-2 text-sm text-gray-300">
                                        Author: <span className="text-red-500">{dataChallApi.author}</span>
                                    </div>
                                </div>
                                {/* Description */}
                                <div className="text-gray-400">
                                    <span className=" text-sm ">Desc :</span>
                                    <div className="bg-gray-900 p-2 rounded-md mt-2">
                                        {parse(sanitizedHTMLDescription)}
                                    </div>
                                </div>
                                {/* Attachment */}
                                {dataChallApi.attachment ?
                                    <div className="text-gray-400">
                                        <span className=" text-sm ">Attachment :</span>
                                        <div className="flex items-center gap-2 mt-2 bg-gray-900 rounded-xl w-fit  text-sm">
                                            <a href={dataChallApi.attachment} target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-blue-950 rounded-xl  p-2 hover:text-blue-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                                </svg>
                                            </a>
                                            <div className="p-2 truncate ">
                                                {dataChallApi.attachment}
                                            </div>
                                        </div>
                                    </div>
                                    : null

                                }
                                {/* Hint */}
                                {
                                    dataChallApi.hints.length > 0 ?
                                        <HintAccordion dataHintApi={dataChallApi.hints} />
                                        : null
                                }

                            </DialogHeader>

                            <div className=" border-t border-gray-300 "></div>
                            {/* Flag Section */}
                            {dataChallApi.is_solved ?
                                <div className="border py-1 px-2 text-green-400 bg-[#051C1B] rounded-md text-center border-green-400">
                                    Solved 🥳
                                </div>
                                :
                                <form className="flex items-center gap-4" onSubmit={handleFlagSubmit}>
                                    <Input
                                        id="username"
                                        placeholder="Flag"
                                        className="col-span-3"
                                        type="text"
                                        required
                                        autoComplete="off"
                                        autoCorrect="off"
                                        name="flag"
                                        autoCapitalize="none"
                                    />
                                    {
                                        isPending ? <ButtonLoading /> :
                                            <Button type="submit">Flag</Button>
                                    }
                                </form>
                            }

                            {/* Flag Status */}
                            {useFlagStatus && (
                                <div className="border py-1 px-2 text-red-400 bg-[#1c0508] rounded-md text-center border-red-400">
                                    Failed 🤣
                                </div>
                            )}

                        </div>
                    </TabsContent>
                    {/* Solve Section */}
                    <TabsContent value="solve"  >
                        <div className="flex flex-col gap-4 mt-5 min-h-[200px] max-h-[500px] overflow-y-auto">
                            <table className="w-full text-center ">
                                <tr className="  py-2 bg-zinc-800">
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                </tr>
                                {/* Map data here */
                                    isLoading ?
                                        [...Array(8)].map((_, index) => (
                                            <tr key={index} className="border-b  border-gray-500">
                                                {/* Skeleton */}
                                                <td colSpan={3} className="py-2">
                                                    <Skeleton className="h-8 w-full" />
                                                </td>
                                            </tr>
                                        ))
                                        :
                                        dataChallApi?.total_solved === 0 ?
                                            <tr>
                                                <td colSpan={3} className="py-2 text-gray-400">No data available</td>
                                            </tr>
                                            :
                                            dataSubmissions?.map((submission: any, index: number) => {
                                                return <tr key={index} className="border-b  border-gray-500">
                                                    <td>{index + 1}</td>
                                                    <td className="py-2  max-w-[150px] truncate pr-1">{submission.user.username}</td>
                                                    <td>{HandleFormatTime(submission.created_at)}</td>
                                                </tr>
                                            })
                                }
                            </table>
                        </div>
                    </TabsContent>
                </Tabs>

            </DialogContent>
        </Dialog >
    );
};

export default Modal;
