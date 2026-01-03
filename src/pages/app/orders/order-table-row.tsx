import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "./order-status";
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useState } from "react";
import { formatToBRL } from "@/utils/formater";

interface OrderTableRowProps {
    order: {
        customerName: string;
        orderId: string;
        createdAt: string;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        total: number;
    }
}

export function OrderTableRow({ order }: OrderTableRowProps) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

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
                {formatToBRL(order.total)}
            </TableCell>
            <TableCell>
                <Button variant="outline" size="xs">
                    <ArrowRight className="size-3" />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="ghost" size="xs">
                    <X className="size-3 " />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}