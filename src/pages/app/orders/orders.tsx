import { PageHead } from "@/components/page-head";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/pagination";
import { PageTitle } from "@/components/page-title";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";
import { useSearchParams } from "react-router";
import z from "zod";

export function Orders() {
    const [searchParams, setSearchParams] = useSearchParams()

    const pageIndex = z.coerce.number()
        .transform(page => page - 1)
        .parse(Number(searchParams.get("page")) || '1')
    const orderId = searchParams.get('orderId')
    const customerName = searchParams.get('customerName')
    const status = searchParams.get('status')


    const { data: result } = useQuery({
        queryKey: ["orders", pageIndex, orderId, customerName, status],
        queryFn: () => getOrders({
            pageIndex,
            orderId,
            customerName,
            status: status === 'all' ? null : status
        }),
    })

    function handlePaginationChange(newPageIndex: number) {
        setSearchParams(prev => {
            prev.set("page", String(newPageIndex + 1))
            return prev
        })
    }

    return (
        <>
            <PageHead
                title="Página de Pedidos"
                description="Gerencie seus pedidos"
                keywords="pedidos, pedido"
                ogTitle="Página de Pedidos - Food Dashboard"
                ogDescription="Plataforma de gerenciamento de alimentos"
            />
            <div className="flex gap-4 flex-col">
                <PageTitle title="Pedidos" />
                <div className="space-y-2.5">
                    <OrderTableFilters />

                    <div className="border rounded-md">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-16"></TableHead>
                                    <TableHead className="w-35">Identificador</TableHead>
                                    <TableHead className="w-45">Realizado há</TableHead>
                                    <TableHead className="w-35">Status</TableHead>
                                    <TableHead>Cliente</TableHead>
                                    <TableHead className="w-35">Total do Pedido</TableHead>
                                    <TableHead className="w-32"></TableHead>
                                    <TableHead className="w-32"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {result && result.orders.map((order) => (
                                    <OrderTableRow
                                        key={order.orderId}
                                        order={order}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {result && (
                        <Pagination
                            pageIndex={result.meta.pageIndex}
                            totalCount={result.meta.totalCount}
                            perPage={result.meta.perPage}
                            onPageChange={handlePaginationChange}
                        />
                    )}
                </div>
            </div>
        </>
    )
}