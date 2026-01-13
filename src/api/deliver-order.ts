import { api } from '@/lib/axios'

export async function deliverOrder(orderId: string) {
    const response = await api.patch(`/orders/${orderId}/deliver`)
    return response.data
}