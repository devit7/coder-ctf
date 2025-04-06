import { Line, LineChart, CartesianGrid, XAxis } from "recharts"
import { useMemo } from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const Linechart = ({ dataLTop10 }: { dataLTop10: any }) => {
    // Create dynamic chart config based on the labels from dataLTop10
    const chartConfig = useMemo(() => {
        if (!dataLTop10 || !dataLTop10.labels) return {};

        // Generate a different color for each user
        const colors = ["#80f", "#f00", "#0f0", "#ff0", "#f0f", "#0ff", "#009", "#888", "#080", "#808"];

        return dataLTop10.labels.reduce((config: ChartConfig, label: string, index: number) => {
            config[label] = {
                label,
                color: colors[index % colors.length]
            };
            return config;
        }, {} as ChartConfig);
    }, [dataLTop10]);

    return (<>
        <Card className=" dark:bg-transparent border-none rounded-none" >
            <CardHeader className=" text-center">
                <CardTitle>Top 10 User</CardTitle>
                <CardDescription>
                    Showing the top 10 user in the leaderboard
                </CardDescription>
            </CardHeader>
            <CardContent>
                {dataLTop10 && dataLTop10.data && (
                    <ChartContainer config={chartConfig} className="aspect-auto h-56 w-full">
                        <LineChart
                            accessibilityLayer
                            data={dataLTop10.data}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                minTickGap={32}
                                tickFormatter={(value) => {
                                    const date = new Date(value)
                                    return date.toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                    })
                                }}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dot" hideLabel />}
                            />
                            {dataLTop10.labels && dataLTop10.labels.map((label: string) => (
                                <Line
                                    key={label}
                                    dataKey={label}
                                    type="linear"
                                    stroke={chartConfig[label]?.color}
                                    strokeWidth={2}
                                    dot={false}
                                />
                            ))}
                            <ChartLegend content={<ChartLegendContent />} />
                        </LineChart>
                    </ChartContainer>
                )}
            </CardContent>
        </Card>
    </>);
};

export default Linechart;
