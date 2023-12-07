import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../types'

const initialState = []

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      if (state.find((item) => item.id === action.payload.id)) return state
      return [...state, {...action.payload, favorited: true}]
    case REMOVE_FROM_FAVORITE:
      return state.filter((item) => item.id !== action.payload)
    default:
      return state
  }
}

export default favorite
