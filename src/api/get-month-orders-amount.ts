import { api } from "@/lib/axios";

export interface GetMonthOrdersAmountResponse {
  diffFromLastMonth: number;
  amount: number;
}

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOrdersAmountResponse>('/metrics/month-orders-amount');
  return response.data;
}