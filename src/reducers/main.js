import * as types from '../constants/main'

const initialState = {
  characters: [],
  filtered_characters: []
}

export default function projects(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        filtered_characters: action.payload
      }

    case types.DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(char => char.id != action.payload),
        filtered_characters: state.filtered_characters.filter(char => char.id != action.payload)
      }

    case types.FILTER_CHARACTERS:
      return {
        ...state,
        filtered_characters: state.characters.filter(char => {
          return char.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
        })
      }

    default:
      return state
  }
}
