import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "./order-status";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { formatToBRL } from "@/utils/formater";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "@/api/cancel-order";
import type { GetOrdersResponse } from "@/api/get-orders";
import { toast } from "sonner";
import { approveOrder } from "@/api/approve-order";
import { dispatchOrder } from "@/api/dispatch-order";
import { deliverOrder } from "@/api/deliver-order";

type OrderStatus =
    | 'pending'
    | 'canceled'
    | 'processing'
    | 'delivering'
    | 'delivered'

interface OrderTableRowProps {
    order: {
        customerName: string;
        orderId: string;
        createdAt: string;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        total: number;
    }
}

export function OrderTableRow({ order }: Readonly<OrderTableRowProps>) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const queryClient = useQueryClient();

    function updateOrderStatusOnCache(orderId: string, status: OrderStatus) {
        const ordersListingCache = queryClient.getQueriesData<GetOrdersResponse>({
            queryKey: ['orders'],
        })

        console.log(ordersListingCache)

        ordersListingCache.forEach(([cacheKey, cached]) => {
            if (!cached) {
                return
            }

            queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
                ...cached,
                orders: cached.orders.map((order) => {
                    if (order.orderId !== orderId) {
                        return order
                    }

                    return {
                        ...order,
                        status,
                    }
                }),
            })
        })

        toast.success('Pedido alterado com sucesso!')
    }

    const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } =
        useMutation({
            mutationFn: approveOrder,
            onSuccess: async (_, { orderId }) => {
                updateOrderStatusOnCache(orderId, 'processing')
            },
        })

    const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } =
        useMutation({
            mutationFn: cancelOrder,
            onSuccess: async (_, { orderId }) => {
                updateOrderStatusOnCache(orderId, 'canceled')
            },
        })

    const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } =
        useMutation({
            mutationFn: dispatchOrder,
            onSuccess: async (_, { orderId }) => {
                updateOrderStatusOnCache(orderId, 'delivering')
            },
        })

    const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } =
        useMutation({
            mutationFn: deliverOrder,
            onSuccess: async (_, { orderId }) => {
                updateOrderStatusOnCache(orderId, 'delivered')
            },
        })

    return (
        <TableRow>
            <TableCell>
                <OrderDetails orderId={order.orderId} isOpen={isDetailsOpen} onOpenChange={setIsDetailsOpen} />
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
                {order.orderId}
            </TableCell>
            <TableCell className="text-muted-foreground">
                {formatDistanceToNow(new Date(order.createdAt), { addSuffix: true, locale: ptBR })}
            </TableCell>
            <TableCell>
                <OrderStatus status={order.status} />
            </TableCell>
            <TableCell className="font-medium">
                {order.customerName}
            </TableCell>
            <TableCell className="font-medium">
                {formatToBRL(order.total, true)}
            </TableCell>
            <TableCell>
                {order.status === "pending" &&
                    <Button
                        variant="outline"
                        size="xs"
                        disabled={isApprovingOrder}
                        onClick={() => approveOrderFn({ orderId: order.orderId })}
                    >
                        <ArrowRight className="size-3" />
                        Aprovar
                    </Button>
                }
                {order.status === "processing" &&
                    <Button
                        variant="outline"
                        size="xs"
                        disabled={isDispatchingOrder}
                        onClick={() => dispatchOrderFn({ orderId: order.orderId })}
                    >
                        <ArrowRight className="size-3" />
                        Em entrega
                    </Button>
                }
                {order.status === "delivering" &&
                    <Button
                        variant="outline"
                        size="xs"
                        disabled={isDeliveringOrder}
                        onClick={() => deliverOrderFn({ orderId: order.orderId })}
                    >
                        <ArrowRight className="size-3" />
                        Em entrega
                    </Button>
                }
            </TableCell>
            <TableCell>
                <Button
                    variant="ghost"
                    size="xs"
                    disabled={!["pending", "processing"].includes(order.status) || isCancelingOrder}
                    onClick={() => cancelOrderFn({ orderId: order.orderId })}
                >
                    <X className="size-3 " />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}