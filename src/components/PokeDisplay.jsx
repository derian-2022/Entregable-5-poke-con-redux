import React from 'react'

const PokesDisplay = ({ poke, index }) => {
  return (
    <div>
      <h2>{index}</h2>
      <p>{poke.poke}</p>
      <hr />
    </div>
  )
}

export default PokesDisplay