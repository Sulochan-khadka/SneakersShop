import { ADD_TO_CART, REMOVE_ITEM, ADD_ONE, REMOVE_ONE, CLEAR_CART } from '../types'

const initialState = []

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = state.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity++
        return [...state.filter((i) => i.id !== item.id), item]
      }

      return [...state, {...action.payload, quantity: 1}]
    }
    case REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload)
    case ADD_ONE: {
      const item = state.find((item) => item.id === action.payload)
      item.quantity++

      return [...state.filter((i) => i.id !== item.id), item]
    }
    case REMOVE_ONE: {
      const item = state.find((item) => item.id === action.payload)
      item.quantity--
      if (item.quantity === 0) return state.filter((i) => i.id !== action.payload)

      return [...state.filter((i) => i.id !== item.id), item]
    }
    case CLEAR_CART:
      return []
    default:
      return state
  }
}

export default cart
