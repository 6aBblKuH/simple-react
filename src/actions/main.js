import * as types from '../constants/main'
import axios from 'axios'

export const getCharacters = () => {
  return dispatch => {
    axios.get('https://api.got.show/api/characters')
      .then(resp => resp.data)
      .then(json => dispatch(setCharacters(json)))
  }
}

export const setCharacters = (characters) => {
  return {
    type: types.SET_CHARACTERS,
    payload: characters
  }
}
