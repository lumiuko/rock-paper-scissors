import { useState, useEffect, useContext } from 'react'

import ItemContainer from './ItemContainer'
import Item from './Item'
import Result from './Result'
import data from '../data'
import { ScoreContext } from '../context/ScoreContext'

export default function Game({ currentPick, playAgain }) {
  const { dispatch } = useContext(ScoreContext)
  const [enemyPick, setEnemyPick] = useState(null)
  const [isResultShown, setIsResultShown] = useState(false)

  let resultMessage = ''
  let hasWon = false
  let hasLost = false

  if (currentPick.beats === enemyPick?.type) {
    resultMessage = 'You win'
    hasWon = true
  } else if (enemyPick?.beats === currentPick.type) {
    resultMessage = 'You lose'
    hasLost = true
  } else {
    resultMessage = 'Draw'
  }

  function getRandomPick() {
    const randomNumber = Math.floor(Math.random() * data.length)
    setEnemyPick(data[randomNumber])
    setTimeout(() => setIsResultShown(true), 500)
  }

  useEffect(() => {
    setTimeout(getRandomPick, 500)
  }, [])

  useEffect(() => {
    if (hasWon) {
      dispatch({ type: 'ADD' })
    } else if (hasLost) {
      dispatch({ type: 'SUBTRACT' })
    }
  }, [isResultShown])

  const result = isResultShown && <Result resultMessage={resultMessage} playAgain={playAgain} />

  return (
    <>
      <div className="flex justify-center mt-[4.25rem] gap-[4.25em]">
        <ItemContainer text="You picked">
          <Item item={currentPick} isWinner={hasWon && isResultShown} />
        </ItemContainer>

        <div className="hidden md:block">{result}</div>

        <ItemContainer text="The House picked">
          {enemyPick ? (
            <Item item={enemyPick} isWinner={hasLost && isResultShown} />
          ) : (
            <div className="w-[130px] h-[124px] rounded-full bg-placeholder md:w-[198px] md:h-[193px]"></div>
          )}
        </ItemContainer>
      </div>
      <div className="block md:hidden">{result}</div>
    </>
  )
}
