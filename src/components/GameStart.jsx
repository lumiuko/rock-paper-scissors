import Item from './Item'
import data from '../data'

export default function GameStart(props) {
  const buttons = data.map((item, index) => (
    <button key={index} onClick={() => props.setPick(item)} className="rounded-full transition-all hover:shadow-item">
      <Item item={item} />
    </button>
  ))

  return (
    <main className="flex flex-wrap justify-center max-w-[320px] mx-auto my-[4.625rem] gap-x-[3.25rem] gap-y-[1rem] md:max-w-[476px] bg-triangle bg-no-repeat bg-center bg-[length:166px] md:bg-[length:254px] md:gap-x-20 md:gap-y-6">
      {buttons}
    </main>
  )
}
