import { api } from "@/lib/axios";

export interface GetMonthCanceledOrdersAmountResponse {
  diffFromLastMonth: number;
  amount: number;
}

export async function getMonthCanceledOrdersAmount() {
  const response = await api.get<GetMonthCanceledOrdersAmountResponse>('/metrics/month-canceled-orders-amount');
  return response.data;
}