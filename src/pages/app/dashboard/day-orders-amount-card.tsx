import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function DayOrdersAmountCard() {
    return (
        <Card className='w-full'>
            <CardHeader className='flex! items-center justify-between'>
                <CardTitle className='text-base font-semibold'>Pedidos (dia)</CardTitle>
                <Utensils className='size-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
                <span className='text-2xl font-bold tracking-tight'>
                    98
                </span>
                <p className='text-xs text-muted-foreground'>
                    <span className='text-rose-500 dark:text-rose-400'>-1.2%</span>
                    {' '}desde o último dia
                </p>
            </CardContent>
        </Card>
    )
}