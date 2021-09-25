const defaultState = {
  curentPage: 1,
}
const INCREMENT_PAGE = 'INCREMENT_PAGE'
const DECREMENT_PAGE = 'DECREMENT_PAGE'

export const pageReduser = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_PAGE:
      return { ...state, curentPage: state.curentPage + 1 }
    case DECREMENT_PAGE:
      return { ...state, curentPage: state.curentPage - 1 }
    default:
      return state
  }
}

export const incrementPage = (payloud) => ({ type: INCREMENT_PAGE, payloud })
export const decrementPage = (payloud) => ({ type: DECREMENT_PAGE, payloud })
