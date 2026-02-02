import { approveOrderMock } from './approve-order-mock.ts'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock.ts'
import { dispatchOrderMock } from './dispatch-order-mock.ts'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock.ts'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock.ts'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock.ts'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock.ts'
import { getMonthReceiptMock } from './get-month-receipt-mock.ts'
import { getOrderDetailsMock } from './get-order-details-mock.ts'
import { getOrdersMock } from './get-orders-mock.ts'
import { getPopularProductsMock } from './get-popular-products-mock.ts'
import { getProfileMock } from './get-profile-mock.ts'
import { registerRestaurantMock } from './register-restaurant-mock.ts'
import { signInMock } from './sign-in-mock.ts'
import { updateProfileMock } from './update-profile-mock.ts'

export const handlers = [
  signInMock,
  registerRestaurantMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getDayOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthReceiptMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
  getOrderDetailsMock,
  getPopularProductsMock,
  getOrdersMock,
]