import { api } from '@/lib/axios'

export async function dispatchOrder(orderId: string) {
    const response = await api.patch(`/orders/${orderId}/dispatch`)
    return response.data
}