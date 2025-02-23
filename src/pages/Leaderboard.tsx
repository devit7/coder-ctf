import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import Linechart from "@/components/LinechartLaderborad";


const Laderboard: React.FC = () => {

  return (
    <div className="p-10 flex max-w-[1000px] mx-auto gap-10">
      <div className=" w-full ">
        <Linechart />
      </div>
    </div>
  );
};

export default Laderboard;
