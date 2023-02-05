export default function Result({ resultMessage, playAgain }) {
  return (
    <div className="flex flex-col items-center uppercase my-[3.875rem]">
      <h2 className="text-result">{resultMessage}</h2>
      <button
        className="bg-white shadow-default rounded-score-md py-[0.875rem] px-[3.75rem] text-dark-blue uppercase mt-4 tracking-button"
        onClick={playAgain}
      >
        Play again
      </button>
    </div>
  )
}
