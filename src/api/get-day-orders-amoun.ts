import { api } from "@/lib/axios";

export interface GetDayOrdersAmountResponse {
  diffFromYesterday: number;
  amount: number;
}

export async function getDayOrdersAmount() {
  const response = await api.get<GetDayOrdersAmountResponse>('/metrics/day-orders-amount');
  return response.data;
}