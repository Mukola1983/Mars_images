import Utils from '../API/Utils'

const defaultState = {
  rover: 'Curiosity',

  curiosity: false,
  spirit: false,
  opportynity: false,
}
const CHANGE_ROVER = 'CHANGE_ROVER'

const CURIOSITY_ACTIVE = 'CURIOSITY_ACTIVE'
const SPIRIT_ACTIVE = 'SPIRIT_ACTIVE'
const OPPORTYNITY_ACTIVE = 'OPPORTYNITY_ACTIVE'

export const roverReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ROVER:
      return { ...state, rover: action.payloud }

    case CURIOSITY_ACTIVE:
      return { ...state, curiosity: true, spirit: false, opportynity: false }
    case SPIRIT_ACTIVE:
      return { ...state, curiosity: false, spirit: true, opportynity: false }
    case OPPORTYNITY_ACTIVE:
      return { ...state, curiosity: false, spirit: false, opportynity: true }
    default:
      return state
  }
}

export const changeRover = (payloud) => ({ type: CHANGE_ROVER, payloud })

export const curiosityActive = (payloud) => ({
  type: CURIOSITY_ACTIVE,
  payloud,
})
export const spiritActive = (payloud) => ({ type: SPIRIT_ACTIVE, payloud })
export const opportynityActive = (payloud) => ({
  type: OPPORTYNITY_ACTIVE,
  payloud,
})
