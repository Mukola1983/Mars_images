import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { photosReduser } from './photosReduser'
import { roverReduser } from './roverReduser'
import { solReduser } from './solReduser'
import { pageReduser } from './pageReduser'

const rootRedusers = combineReducers({
  roverReduser,
  photosReduser,
  solReduser,
  pageReduser,
})

export const store = createStore(
  rootRedusers,
  composeWithDevTools(applyMiddleware(thunk))
)
