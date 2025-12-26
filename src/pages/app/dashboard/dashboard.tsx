import { PageHead } from '@/components/page-head'
import { PageTitle } from '@/components/page-title'
import { MonthRevenueCard } from './month-revenue-card'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount-card'

export function Dashboard() {
    return (
        <>
            <PageHead
                title="Dashboard"
                description="Visualize e gerencie seus alimentos e nutrição"
                keywords="dashboard, alimentos, nutrição"
                ogTitle="Dashboard - Food Dashboard"
                ogDescription="Plataforma de gerenciamento de alimentos"
            />
            <div className="flex gap-4 flex-col">
                <PageTitle title="Dashboard" />

                <div className='grid grid-cols-4 gap-4'>
                    <MonthRevenueCard />
                    <MonthOrdersAmountCard />
                    <DayOrdersAmountCard />
                    <MonthCanceledOrdersAmountCard />
                </div>
            </div >
        </>
    )
}