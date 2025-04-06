import React from "react";
import Linechart from "@/components/LinechartLaderborad";
import TableLaderboard from "@/components/TableLaderboard";
import { useQuery } from "@tanstack/react-query";
import { getLeaderboard, graphAllLeaderboardTop10 } from "@/api/LeaderboardApi";
import { Skeleton } from "@/components/ui/skeleton";


const Laderboard: React.FC = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['myDataLeaderboardList'],
    queryFn: getLeaderboard
  });

  const { data: dataLeaderboardTop10, isLoading: isLoadingTop10 } = useQuery({
    queryKey: ['myDataLeaderboardTop10'],
    queryFn: graphAllLeaderboardTop10
  });

  return (
    <div className="p-10 flex flex-col max-w-[1000px] mx-auto gap-10">
      <div className=" w-full ">
        {isLoadingTop10 ?
          <div className="flex justify-between bg-transparent py-10">
            <h1>List CODERZZ 🚩</h1>
            <Skeleton className="h-8 w-40" />
          </div>
          :
          <Linechart dataLTop10={dataLeaderboardTop10} />
        }
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
