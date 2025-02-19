import React from "react";
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

const Profile = () => {
    return (
        <>
            <div className="p-10 flex flex-row gap-10 justify-center h-full items-center ">
                <div className="flex  flex-col w-[400px] gap-4">
                    <h1 className=" font-semibold text-xl">Devit Erlingga</h1>
                    <div className="flex items-center gap-2">
                        <span>167th</span>
                        <span className=" text-zinc-500">rank</span>
                        |
                        <span>12/3/2024</span>
                        <span className=" text-zinc-500">join</span>
                    </div>
                    <div className="border-y  border-zinc-500 py-2 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        . Quisquam, quibusdam. Quisquam, quibusdam. Quisquam,
                        quibusdam. Quisquam, quibusdam. Quisquam, quibusdam.
                    </div>
                    <div className="flex items-center gap-2">
                        <span>14</span>
                        <span className=" text-zinc-500">points</span>
                    </div>
                </div>
                <div className="flex flex-row  ">
                    <div className="">
                        <Card >
                            <CardHeader>
                                <CardTitle>Area Chart - Linear</CardTitle>
                                <CardDescription>
                                    Showing total visitors for the last 6 months
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig}>
                                    <AreaChart
                                        accessibilityLayer
                                        data={chartData}
                                        margin={{
                                            left: 12,
                                            right: 12,
                                        }}
                                    >
                                        <CartesianGrid vertical={false} />
                                        <XAxis
                                            dataKey="month"
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={8}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent indicator="dot" hideLabel />}
                                        />
                                        <Area
                                            dataKey="desktop"
                                            type="linear"
                                            fill="var(--color-desktop)"
                                            fillOpacity={0.4}
                                            stroke="var(--color-desktop)"
                                        />
                                    </AreaChart>
                                </ChartContainer>
                            </CardContent>
                            <CardFooter>
                                <div className="flex w-full items-start gap-2 text-sm">
                                    <div className="grid gap-2">
                                        <div className="flex items-center gap-2 font-medium leading-none">
                                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                        </div>
                                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                                            January - June 2024
                                        </div>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                    <div>
                        dwa
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
