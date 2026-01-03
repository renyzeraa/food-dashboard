import { getOrderDetails } from "@/api/get-order-details";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { OrderStatus } from "./order-status";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { formatToBRL } from "@/utils/formater";

interface OrderDetailsProps {
    orderId: string;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export function OrderDetails({ orderId, isOpen, onOpenChange }: OrderDetailsProps) {
    const { data: order } = useQuery({
        queryKey: ["order", orderId],
        queryFn: () => getOrderDetails({ orderId }),
        enabled: isOpen,
    });

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button variant="link" size="xs">
                    <Search className="size-3" />
                    <span className="sr-only">Detalhes do pedido</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Pedido: {order?.id}</DialogTitle>
                    <DialogDescription>Detalhes do pedido</DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    {order && (
                        <>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="text-muted-foreground">Status</TableCell>
                                        <TableCell className="flex justify-end">
                                            <OrderStatus status={order.status} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-muted-foreground">Cliente</TableCell>
                                        <TableCell className="flex justify-end">
                                            {order.customer.name}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-muted-foreground">Telefone</TableCell>
                                        <TableCell className="flex justify-end">
                                            {order.customer.phone ?? "Não informado"}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-muted-foreground">E-mail</TableCell>
                                        <TableCell className="flex justify-end">
                                            {order.customer.email}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-muted-foreground">Realizado há</TableCell>
                                        <TableCell className="flex justify-end">
                                            {formatDistanceToNow(new Date(order.createdAt), { addSuffix: true, locale: ptBR })}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableCell>Produto</TableCell>
                                        <TableCell className="text-right">Qtd.</TableCell>
                                        <TableCell className="text-right">Preço</TableCell>
                                        <TableCell className="text-right">Subtotal</TableCell>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {order.orderItems.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.product.name}</TableCell>
                                            <TableCell className="text-right">{item.quantity}</TableCell>
                                            <TableCell className="text-right">
                                                {formatToBRL(item.priceInCents)}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {formatToBRL(item.priceInCents * item.quantity)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colSpan={3}>Total do pedido</TableCell>
                                        <TableCell className="text-right font-medium">{formatToBRL(order.totalInCents)}</TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}