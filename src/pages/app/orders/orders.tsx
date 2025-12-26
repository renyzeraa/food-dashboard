import { PageHead } from "@/components/page-head";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/pagination";
import { PageTitle } from "@/components/page-title";

export function Orders() {
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
                                {[1, 2, 3, 4, 5, 6, 7].map((order) => (
                                    <OrderTableRow key={order} />
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <Pagination pageIndex={0} totalCount={100} perPage={10} />
                </div>
            </div>
        </>
    )
}