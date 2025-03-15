import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import Linechart from "@/components/LinechartLaderborad";
import TableLaderboard from "@/components/TableLaderboard";


const Laderboard: React.FC = () => {

  return (
    <div className="p-10 flex flex-col max-w-[1000px] mx-auto gap-10">
      <div className=" w-full ">
        <Linechart />
      </div>
      <div>
        <TableLaderboard/>
      </div>      
    </div>
  );
};

export default Laderboard;
