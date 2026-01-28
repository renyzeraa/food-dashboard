import { getDayOrdersAmount } from "@/api/get-day-orders-amoun";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { CardSkeleton } from "./card-skeleton";

export function DayOrdersAmountCard() {
    const { data: dayOrdersAmount } = useQuery({
        queryKey: ['day-orders-amount', 'metrics'],
        queryFn: getDayOrdersAmount
    })

    return (
        <Card className='w-full'>
            <CardHeader className='flex! items-center justify-between'>
                <CardTitle className='text-base font-semibold'>Pedidos (dia)</CardTitle>
                <Utensils className='size-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
                {dayOrdersAmount ? (
                    <>
                        <span className='text-2xl font-bold tracking-tight'>
                            {dayOrdersAmount.amount.toLocaleString('pt-BR')}
                        </span>
                        <p className='text-xs text-muted-foreground'>
                            {dayOrdersAmount.diffFromYesterday >= 0 ? (
                                <span className='text-emerald-500 dark:text-emerald-400'>+{dayOrdersAmount.diffFromYesterday}%</span>
                            ) : (
                                <span className='text-rose-500 dark:text-rose-400'>{dayOrdersAmount.diffFromYesterday}%</span>
                            )}
                            {' '}desde o último dia
                        </p>
                    </>
                ) : (
                    <CardSkeleton />
                )}
            </CardContent>
        </Card>
    )
}