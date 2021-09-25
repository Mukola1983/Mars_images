import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { photosReduser } from './photosReduser'

const rootRedusers = combineReducers({
  photosReduser,
})

export const store = createStore(
  rootRedusers,
  composeWithDevTools(applyMiddleware(thunk))
)
