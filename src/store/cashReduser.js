const defaultState = {
  cash: 20,
}

export const cashReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payloud }
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payloud }
    default:
      return state
  }
}
