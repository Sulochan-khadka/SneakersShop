import { combineReducers } from 'redux'
import cart from './cart'
import favorite from './favorite'
import order from './order'

export default combineReducers({
  cart,
  favorite,
  order
})
