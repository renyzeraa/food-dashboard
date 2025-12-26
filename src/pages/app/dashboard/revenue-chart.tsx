import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatToBRL } from "@/utils/formater";
import { ResponsiveContainer, LineChart, YAxis, Line, XAxis, CartesianGrid } from 'recharts';
import colors from 'tailwindcss/colors';

const data = [
    { date: '10/01', revenue: 1200 },
    { date: '11/02', revenue: 1100 },
    { date: '12/02', revenue: 300 },
    { date: '13/02', revenue: 400 },
    { date: '14/02', revenue: 700 },
    { date: '15/02', revenue: 600 },
    { date: '16/02', revenue: 1500 },
]

export function RevenueChart() {
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
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart
                        data={data}
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
                        <Line type="linear" dataKey="revenue" strokeWidth={2} stroke={colors.emerald[500]} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}