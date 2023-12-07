import { MAKE_ORDER } from '../types'

const initialState = []

const order = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER:
      return [...state, action.payload]
    default:
      return state
  }
}

export default order
