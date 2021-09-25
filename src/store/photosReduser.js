const defaultState = {
  photos: [],
}
const ADD_API = 'ADD_API'

export const photosReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_API:
      return { ...state, photos: [...action.payloud] }

    default:
      return state
  }
}

export const addApi = (payloud) => ({ type: ADD_API, payloud })
