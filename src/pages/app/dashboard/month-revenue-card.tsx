import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthRevenueCard() {
    return (
        <Card className='w-full'>
            <CardHeader className='flex! items-center justify-between'>
                <CardTitle className='text-base font-semibold'>Receita total (mês)</CardTitle>
                <DollarSign className='size-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
                <span className='text-2xl font-bold tracking-tight'>
                    R$ 25,340.00
                </span>
                <p className='text-xs text-muted-foreground'>
                    <span className='text-emerald-500 dark:text-emerald-400'>+20.1%</span>
                    {' '}desde o último mês
                </p>
            </CardContent>
        </Card>
    )
}