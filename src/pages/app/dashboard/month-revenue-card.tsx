import { getMonthRevenue } from "@/api/get-month-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
import { CardSkeleton } from "./card-skeleton";

export function MonthRevenueCard() {
    const { data: monthRevenue } = useQuery({
        queryKey: ['month-revenue', 'metrics'],
        queryFn: getMonthRevenue
    })

    return (
        <Card className='w-full'>
            <CardHeader className='flex! items-center justify-between'>
                <CardTitle className='text-base font-semibold'>Receita total (mês)</CardTitle>
                <DollarSign className='size-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
                {monthRevenue ? (
                    <>
                        <span className='text-2xl font-bold tracking-tight'>
                            {(monthRevenue.receipt / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                        <p className='text-xs text-muted-foreground'>
                            {monthRevenue.diffFromLastMonth >= 0 ? (
                                <>
                                    <span className='text-emerald-500 dark:text-emerald-400'>+{monthRevenue.diffFromLastMonth}%</span>
                                    {' '}em comparação ao mês anterior
                                </>
                            ) : (
                                <>
                                    <span className='text-red-500 dark:text-red-400'>{monthRevenue.diffFromLastMonth}%</span>
                                    {' '}em comparação ao mês anterior
                                </>
                            )}
                        </p>
                    </>) : (
                    <CardSkeleton />
                )}
            </CardContent>
        </Card>
    )
}