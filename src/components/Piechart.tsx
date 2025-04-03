import React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const Piechart = ({ dataUserStatApi }: { dataUserStatApi: any }) => {
  const chartData = React.useMemo(() => {
    return Object.entries(dataUserStatApi.category_count).map(([name, value]) => ({
      name,
      value,
      fill: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Generate random color
    }));
  }, [dataUserStatApi]);

  const totalSolved = dataUserStatApi.total_solved;

  const chartConfig = {
    value: {
      label: "Solved",
    },
  } satisfies ChartConfig;

  return (
    <>
      <Card className="flex flex-col dark:bg-transparent border-none rounded-none">
        <CardHeader className="items-center pb-0">
          <CardTitle>User Chart - Stat</CardTitle>
          <CardDescription>All Time</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalSolved.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Solved
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Total Solved {dataUserStatApi.total_solved||0} <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total all time solved challenges
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Piechart;
