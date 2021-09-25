const defaultState = {
  rover: 'Curiosity',
}
const CHANGE_ROVER = 'CHANGE_ROVER'

export const roverReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ROVER:
      return { ...state, rover: action.payloud }

    default:
      return state
  }
}

export const changeRover = (payloud) => ({ type: CHANGE_ROVER, payloud })
