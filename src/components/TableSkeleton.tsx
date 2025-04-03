import { Skeleton } from "@/components/ui/skeleton"


const TableSkeleton = () => {
    return (
        <>
            <div className="flex justify-between bg-transparent py-10">
                <h1>List CODERZZ 🚩</h1>
                <Skeleton className="h-8 w-40" />
            </div>

            <div className="">
                <div className="">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="flex items-center gap-4 py-2 ">
                            <Skeleton className="h-8 w-8" />
                            <div className="grid grid-cols-3 gap-4 w-full">
                                <Skeleton className="h-8 " />
                                <Skeleton className="h-8 " />
                                <Skeleton className="h-8 " />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TableSkeleton;
