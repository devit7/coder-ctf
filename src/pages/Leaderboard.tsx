import React from "react";
import Linechart from "@/components/LinechartLaderborad";
import TableLaderboard from "@/components/TableLaderboard";
import { useQuery } from "@tanstack/react-query";
import { getLeaderboard } from "@/api/LeaderboardApi";
import { Skeleton } from "@/components/ui/skeleton";


const Laderboard: React.FC = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['myDataLeaderboardList'],
    queryFn: getLeaderboard
  });


  return (
    <div className="p-10 flex flex-col max-w-[1000px] mx-auto gap-10">
      <div className=" w-full ">
        <Linechart />
      </div>
      {isLoading ?
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
        :
        <div>
          <TableLaderboard dataLeaderboardApi={data} />
        </div>
      }
    </div>
  );
};

export default Laderboard;
