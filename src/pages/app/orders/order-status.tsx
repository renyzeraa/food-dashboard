import { cn } from "@/utils/cn"

type OrderStatus = {
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered"
}

const orderStatusMap = {
    pending: {
        bg: "bg-yellow-500",
        text: "Pendente"
    },
    canceled: {
        bg: "bg-red-500",
        text: "Cancelado"
    },
    processing: {
        bg: "bg-blue-500",
        text: "Em processo"
    },
    delivering: {
        bg: "bg-purple-500",
        text: "Em entrega"
    },
    delivered: {
        bg: "bg-green-500",
        text: "Entregue"
    },
}

export function OrderStatus({ status }: OrderStatus) {
    return (
        <div className="flex items-center gap-2">
            <span className={cn(
                "size-2 rounded-full",
                orderStatusMap[status].bg
            )} />
            <span className="font-medium text-muted-foreground">
                {orderStatusMap[status].text}
            </span>
        </div>
    )
}