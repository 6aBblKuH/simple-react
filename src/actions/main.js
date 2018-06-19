import * as types from '../constants/main'
import axios from 'axios'

export const getCharacters = () => {
  return dispatch => {
    axios.get('https://api.got.show/api/characters')
      .then(resp => resp.data.map(character => {
        return { id: character._id, name: character.name, house: character.house }
      })).then(json => dispatch(setCharacters(json)))
  }
}

export const setCharacters = characters => {
  return {
    type: types.SET_CHARACTERS,
    payload: characters
  }
}

export const killCharacter = id => {
  /*
  * if (character.name.toLowerCase.indexOf('stark') > -1) return {}
  * Пусть хоть где-то не дохнут xD
  */
  return {
    type: types.DELETE_CHARACTER,
    payload: id
  }
}

export const filterCharacters = name => {
  return {
    type: types.FILTER_CHARACTERS,
    payload: name
  }
}
