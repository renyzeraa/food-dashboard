import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router";
import z from "zod";

const ordersFiltersSchema = z.object({
    orderId: z.string().optional(),
    customerName: z.string().optional(),
    status: z.string().optional(),
})

type OrderFiltersSchema = z.infer<typeof ordersFiltersSchema>

export function OrderTableFilters() {
    const [searchParams, setSearchParams] = useSearchParams()

    const orderId = searchParams.get('orderId')
    const customerName = searchParams.get('customerName')
    const status = searchParams.get('status')

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { isSubmitting }
    } = useForm<OrderFiltersSchema>({
        defaultValues: {
            orderId: orderId ?? '',
            customerName: customerName ?? '',
            status: status ?? 'all',
        },
    })

    function handleFilter(data: OrderFiltersSchema) {
        const orderId = data.orderId?.toString()
        const customerName = data.customerName?.toString()
        const status = data.status?.toString()

        setSearchParams((prev) => {
            if (orderId) {
                prev.set('orderId', orderId)
            } else {
                prev.delete('orderId')
            }

            if (customerName) {
                prev.set('customerName', customerName)
            } else {
                prev.delete('customerName')
            }

            if (status) {
                prev.set('status', status)
            } else {
                prev.delete('status')
            }

            prev.set('page', '1')

            return prev
        })
    }

    function handleClearFilters() {
        setSearchParams((prev) => {
            prev.delete('orderId')
            prev.delete('customerName')
            prev.delete('status')
            prev.set('page', '1')

            return prev
        })

        reset({
            orderId: '',
            customerName: '',
            status: 'all',
        })
    }

    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit(handleFilter)}>
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="Id do pedido" className="h-8 w-auto" {...register('orderId')} />
            <Input placeholder="Nome do cliente" className="h-8 w-[320px]" {...register('customerName')} />
            <Controller
                control={control}
                name="status"
                render={({ field: { name, onChange, value, disabled } }) => {
                    return (
                        <Select
                            name={name}
                            onValueChange={onChange}
                            value={value}
                            disabled={disabled}
                        >
                            <SelectTrigger className="h-8 w-45">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todos status</SelectItem>
                                <SelectItem value="pending">Pendente</SelectItem>
                                <SelectItem value="canceled">Cancelado</SelectItem>
                                <SelectItem value="processing">Em preparo</SelectItem>
                                <SelectItem value="delivering">Em entrega</SelectItem>
                                <SelectItem value="delivered">Entregue</SelectItem>
                            </SelectContent>
                        </Select>)
                }}
            />

            <Button variant="secondary" size="xs" type="submit" disabled={isSubmitting}>
                <Search className="size-4" />
                Filtrar resultados
            </Button>

            <Button variant="outline" size="xs" type="button" onClick={handleClearFilters} disabled={isSubmitting}>
                <X className="size-4" />
                Limpar filtros
            </Button>
        </form>
    )
}