//libraries
import React, { useState } from 'react'

//components
import BasicWord from './BasicWord'
import GuessWord from './GuessWord'

function Game() {
  const [mainWord, setMainWord] = useState('')

  return (
    <section className="w-full h-full flex flex-col items-center">
      {mainWord ? (
        <GuessWord mainWord={mainWord} setMainWord={(e) => setMainWord(e)} />
      ) : (
        <BasicWord setMainWord={(e) => setMainWord(e)} />
      )}
    </section>
  )
}

export default Game
