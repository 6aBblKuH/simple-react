import * as types from '../constants/main'

const initialState = {
  characters: []
}

export default function projects(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      }

    case types.DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(char => char.id != action.payload)
      }

    default:
      return state
  }
}
