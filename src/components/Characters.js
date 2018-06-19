import React from 'react'
import Character from './Character'
import PropTypes from 'prop-types'

const Characters = (props) => {
  const characters = props.characters.map(char => {
    return (
      <Character
        key={char.id}
        id={char.id}
        house={char.house}
        name={char.name}
      />
    )
  })

  return <div>{characters}</div>
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
}

export default Characters
