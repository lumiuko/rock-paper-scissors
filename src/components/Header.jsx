import { useContext } from 'react'
import { ScoreContext } from '../context/ScoreContext'

export default function Header() {
  const { state } = useContext(ScoreContext)

  return (
    <header className="max-w-[700px] w-full mx-auto p-8 box-border uppercase md:px-0">
      <div className="flex justify-between border-[3px] border-line rounded-sm p-3 md:py-[1.125rem] md:px-6 md:rounded-md">
        <h1 className="text-heading leading-heading leading-4 m-4 md:text-heading-md md:leading-heading-md">
          <div>Rock</div>
          <div>Paper</div>
          <div>Scissors</div>
        </h1>
        <div className="flex flex-col justify-center text-center rounded-score-sm md:rounded-score-md bg-white min-w-[80px] md:min-w-[150px] shadow-default">
          <div className="text-blue text-[0.625rem] tracking-[1.5px] md:text-default">Score</div>
          <div className="text-gray font-bold leading-default text-heading-md md:text-large">{state.score}</div>
        </div>
      </div>
    </header>
  )
}
