import { useState } from 'react'

import { ScoreProvider } from './context/ScoreContext'
import Header from './components/Header'
import GameStart from './components/GameStart'
import Game from './components/Game'
import Footer from './components/Footer'

function App() {
  const [currentPick, setcurrentPick] = useState(null)

  function setPick(turn) {
    setcurrentPick(turn)
  }

  function playAgain() {
    setcurrentPick(null)
  }

  return (
    <ScoreProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        {currentPick ? <Game currentPick={currentPick} playAgain={playAgain} /> : <GameStart setPick={setPick} />}
        <Footer />
      </div>
    </ScoreProvider>
  )
}

export default App
