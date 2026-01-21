import { getMonthCanceledOrdersAmount } from "@/api/get-month-canceled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
    const { data: monthCanceledOrdersAmount } = useQuery({
        queryKey: ['month-canceled-orders-amount', 'metrics'],
        queryFn: getMonthCanceledOrdersAmount
    })

    return (
        <Card className='w-full'>
            <CardHeader className='flex! items-center justify-between'>
                <CardTitle className='text-base font-semibold'>Pedidos cancelados (mês)</CardTitle>
                <DollarSign className='size-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
                {monthCanceledOrdersAmount &&
                    <>
                        <span className='text-2xl font-bold tracking-tight'>
                            {monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}
                        </span>
                        <p className='text-xs text-muted-foreground'>
                            {monthCanceledOrdersAmount.diffFromLastMonth >= 0 ? (
                                <span className='text-red-500 dark:text-red-400'>+{monthCanceledOrdersAmount.diffFromLastMonth}%</span>
                            ) : (
                                <span className='text-emerald-500 dark:text-emerald-400'>{monthCanceledOrdersAmount.diffFromLastMonth}%</span>
                            )}
                            {' '}desde o último mês
                        </p>
                    </>
                }
            </CardContent>
        </Card>
    )
}