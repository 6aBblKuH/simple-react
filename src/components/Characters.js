import React from 'react'
import Character from './Character'

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

export default Characters
