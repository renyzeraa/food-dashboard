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
    perPage?: number;
    status?: string;
}

export async function getOrders({ pageIndex, perPage, status }: GetOrdersParams = { pageIndex: 0 }) {
    const response = await api.get<GetOrdersResponse>("/orders", {
        params: {
            pageIndex
        },
    });
    return response.data;
}