import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import { DatePickerRange } from "@/components/date-range-picker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatToBRL } from "@/utils/formater";
import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useMemo, useState } from "react";
import type { DateRange } from "react-day-picker";
import { ResponsiveContainer, LineChart, YAxis, Line, XAxis, CartesianGrid } from 'recharts';
import colors from 'tailwindcss/colors';

export function RevenueChart() {
    const [dateRange, setDateRange] = useState<DateRange>({
        from: subDays(new Date(), 7),
        to: new Date()
    })

    const { data: dailyRevenueInPeriod } = useQuery({
        queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
        queryFn: () => getDailyRevenueInPeriod({
            from: dateRange?.from,
            to: dateRange?.to
        })
    })

    const chartData = useMemo(() => {
        return dailyRevenueInPeriod?.map(item => ({
            ...item,
            receipt: item.receipt / 100
        }))
    }, [dailyRevenueInPeriod]);

    return (
        <Card className="col-span-6">
            <CardHeader className="flex! items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">
                        Receita do período
                    </CardTitle>
                    <CardDescription>
                        Receita diária no período
                    </CardDescription>
                </div>

                <div className="flex items-center gap-3">
                    <DatePickerRange
                        label="Período"
                        date={dateRange}
                        onDateChange={(date) => date && setDateRange(date)}
                    />
                </div>
            </CardHeader>

            <CardContent>
                {chartData &&
                    <ResponsiveContainer width="100%" height={240}>
                        <LineChart
                            data={chartData}
                            style={{ fontSize: 12 }}
                        >
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                dy={16}
                            />
                            <YAxis
                                stroke="#888"
                                axisLine={false}
                                tickLine={false}
                                width={80}
                                tickFormatter={value => formatToBRL(value as number)}
                            />
                            <CartesianGrid vertical={false} className="stroke-muted" />
                            <Line type="linear" dataKey="receipt" strokeWidth={2} stroke={colors.emerald[500]} />
                        </LineChart>
                    </ResponsiveContainer>
                }
            </CardContent>
        </Card>
    )
}