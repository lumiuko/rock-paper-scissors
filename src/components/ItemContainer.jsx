export default function ItemContainer(props) {
  return (
    <div className="flex flex-col items-center">
      {props.children}
      <div className="mt-4 text-center uppercase tracking-item md:-order-1 md:mt-0 md:mb-16 md:text-md">
        {props.text}
      </div>
    </div>
  )
}
