import { api } from '@/lib/axios'

export async function cancelOrder(orderId: string) {
    const response = await api.patch(`/orders/${orderId}/cancel`)
    return response.data
}