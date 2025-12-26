import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, X } from "lucide-react";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
    return (
        <TableRow>
            <TableCell>
                <OrderDetails />
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
                1n23saxdsa9a9dsmrn38
            </TableCell>
            <TableCell className="text-muted-foreground">
                2 horas
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-green-500" />
                    <span className="font-medium text-muted-foreground">
                        Concluído
                    </span>
                </div>
            </TableCell>
            <TableCell className="font-medium">
                João Silva
            </TableCell>
            <TableCell className="font-medium">
                R$ 150,00
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