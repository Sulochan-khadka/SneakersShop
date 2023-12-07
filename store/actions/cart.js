import { ADD_TO_CART, REMOVE_ITEM, ADD_ONE, REMOVE_ONE, CLEAR_CART } from '../types'

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
})

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id
})

export const addOne = (id) => ({
  type: ADD_ONE,
  payload: id
})

export const removeOne = (id) => ({
  type: REMOVE_ONE,
  payload: id
})

export const clearCart = () => ({
  type: CLEAR_CART
})

export const calculateTotal = (cart) => cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
