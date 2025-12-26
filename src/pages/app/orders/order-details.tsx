import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

export function OrderDetails() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" size="xs">
                    <Search className="size-3" />
                    <span className="sr-only">Detalhes do pedido</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Pedido: 12345678</DialogTitle>
                    <DialogDescription>Detalhes do pedido</DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Status</TableCell>
                                <TableCell className="flex justify-end">
                                    <div className="flex items-center gap-2">
                                        <span className="size-2 rounded-full bg-green-500" />
                                        <span className="font-medium text-muted-foreground">
                                            Concluído
                                        </span>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Cliente</TableCell>
                                <TableCell className="flex justify-end">
                                    João Silva
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Telefone</TableCell>
                                <TableCell className="flex justify-end">
                                    (11) 98765-4321
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">E-mail</TableCell>
                                <TableCell className="flex justify-end">
                                    joao.silva@example.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Realizado há</TableCell>
                                <TableCell className="flex justify-end">
                                    3 minutos
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
                            <TableRow>
                                <TableCell>Pizza Margherita G</TableCell>
                                <TableCell className="text-right">2</TableCell>
                                <TableCell className="text-right">R$ 60,00</TableCell>
                                <TableCell className="text-right">R$ 120,00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Coca-cola 2l</TableCell>
                                <TableCell className="text-right">2</TableCell>
                                <TableCell className="text-right">R$ 12,00</TableCell>
                                <TableCell className="text-right">R$ 24,00</TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total do pedido</TableCell>
                                <TableCell className="text-right font-medium">R$ 144,00</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </DialogContent>
        </Dialog>
    )
}