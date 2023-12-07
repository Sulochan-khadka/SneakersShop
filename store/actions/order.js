import { MAKE_ORDER } from '../types'

export const makeOrder = (order) => ({
  type: MAKE_ORDER,
  payload: order
})
