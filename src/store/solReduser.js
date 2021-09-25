const defaultState = {
  maxSol: 3213,
  curentSol: 1,
}
const CHANGE_SOL = 'CHANGE_SOL'
const CURENT_SOL = 'CURENT_SOL'

export const solReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SOL:
      return { ...state, maxSol: action.payloud }
    case CURENT_SOL:
      return { ...state, curentSol: action.payloud }
    default:
      return state
  }
}

export const changeSol = (payloud) => ({ type: CHANGE_SOL, payloud })
export const changeCurentSol = (payloud) => ({ type: CURENT_SOL, payloud })
