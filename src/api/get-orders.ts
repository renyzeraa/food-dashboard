import { api } from "@/lib/axios";

interface GetOrdersResponse {
    orders: {
        customerName: string;
        orderId: string;
        createdAt: string;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        total: number;
    }[]
    meta: {
        pageIndex: number;
        perPage: number;
        totalCount: number;
    }
}

export interface GetOrdersParams {
    pageIndex: number;
    status?: string | null;
    orderId?: string | null;
    customerName?: string | null;
}

export async function getOrders({ pageIndex, status, orderId, customerName }: GetOrdersParams = { pageIndex: 0 }) {
    const response = await api.get<GetOrdersResponse>("/orders", {
        params: {
            pageIndex,
            status,
            orderId,
            customerName,
        },
    });
    return response.data;
}