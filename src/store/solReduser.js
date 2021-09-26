const defaultState = {
  maxSol: 3213,
  curentSol: 1,
}
const CHANGE_MAX_SOL = 'CHANGE_MAX_SOL'
const CURENT_SOL = 'CURENT_SOL'

export const solReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_MAX_SOL:
      return { ...state, maxSol: action.payloud }
    case CURENT_SOL:
      return { ...state, curentSol: action.payloud }
    default:
      return state
  }
}

export const changeMaxSol = (payloud) => ({ type: CHANGE_MAX_SOL, payloud })
export const changeCurentSol = (payloud) => ({ type: CURENT_SOL, payloud })
