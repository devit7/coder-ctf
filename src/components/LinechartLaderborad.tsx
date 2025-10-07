import { Line, LineChart, CartesianGrid, XAxis } from "recharts";
import { useMemo, useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const Linechart = ({ dataLTop10 }: { dataLTop10: any }) => {
  // State untuk menyimpan bulan yang dipilih
  const [selectedMonth, setSelectedMonth] = useState<string>("latest");

  // Fungsi untuk mendapatkan daftar bulan yang tersedia dari data
  const availableMonths = useMemo(() => {
    if (!dataLTop10 || !dataLTop10.data) return [];

    const monthsSet = new Set<string>();
    dataLTop10.data.forEach((item: any) => {
      const date = new Date(item.date);
      const monthYear = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;
      monthsSet.add(monthYear);
    });

    return Array.from(monthsSet).sort().reverse(); // Sort descending (latest first)
  }, [dataLTop10]);

  // Set default ke bulan terbaru ketika data berubah
  useEffect(() => {
    if (availableMonths.length > 0 && selectedMonth === "latest") {
      setSelectedMonth(availableMonths[0]);
    }
  }, [availableMonths]);

  // Filter data berdasarkan bulan yang dipilih
  const filteredData = useMemo(() => {
    if (!dataLTop10 || !dataLTop10.data) return [];

    if (selectedMonth === "all") {
      return dataLTop10.data;
    }

    return dataLTop10.data.filter((item: any) => {
      const date = new Date(item.date);
      const monthYear = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;
      return monthYear === selectedMonth;
    });
  }, [dataLTop10, selectedMonth]);

  // Format bulan untuk display
  const formatMonthDisplay = (monthYear: string) => {
    if (monthYear === "all") return "All Months";
    const [year, month] = monthYear.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  // Create dynamic chart config based on the labels from dataLTop10
  const chartConfig = useMemo(() => {
    if (!dataLTop10 || !dataLTop10.labels) return {};

    // Generate a different color for each user
    const colors = [
      "#80f",
      "#f00",
      "#0f0",
      "#ff0",
      "#f0f",
      "#0ff",
      "#009",
      "#888",
      "#080",
      "#808",
    ];

    return dataLTop10.labels.reduce(
      (config: ChartConfig, label: string, index: number) => {
        config[label] = {
          label,
          color: colors[index % colors.length],
        };
        return config;
      },
      {} as ChartConfig
    );
  }, [dataLTop10]);

  return (
    <>
      <Card className=" dark:bg-transparent border-none rounded-none">
        <CardHeader className=" text-center">
          <CardTitle>Top 10 User</CardTitle>
          <CardDescription>
            Showing the top 10 user in the leaderboard
          </CardDescription>

          {/* Filter Bulan */}
          <div className="flex justify-end mt-4">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white shadow-sm hover:bg-accent cursor-pointer transition-colors"
            >
              <option value="all" className="bg-[#050516] text-white hover:bg-[#050516] hover:border hover:border-gray-300">
                All Months
              </option>
              {availableMonths.map((month) => (
                <option
                  key={month}
                  value={month}
                  className="bg-[#050516] text-white hover:bg-[#050516] hover:border hover:border-gray-300"
                >
                  {formatMonthDisplay(month)}
                </option>
              ))}
            </select>
          </div>
        </CardHeader>
        <CardContent>
          {filteredData && filteredData.length > 0 && (
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-56 w-full"
            >
              <LineChart
                accessibilityLayer
                data={filteredData}
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
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" hideLabel />}
                />
                {dataLTop10.labels &&
                  dataLTop10.labels.map((label: string) => (
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
    </>
  );
};

export default Linechart;
