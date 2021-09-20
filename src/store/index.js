import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cashReduser } from './cashReduser'
import { customerReduser } from './customerReduser'

const rootRedusers = combineReducers({
  cashReduser,
  customerReduser,
})

export const store = createStore(rootRedusers, composeWithDevTools())
