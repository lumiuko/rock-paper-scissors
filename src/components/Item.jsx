export default function Item({ item, isWinner }) {
  const winnerShadow = `
    0px 0px 0px 30px rgba(255,255,255,0.05),
    0px 0px 0px 60px rgba(255,255,255,0.02),
    0px 0px 0px 100px rgba(255,255,255,0.02)
  `

  const inlineStyles = {
    backgroundColor: item.primaryColor,
    boxShadow: `
      0px 6px 0px 0px ${item.secondaryColor}, 
      0px 3px 3px rgba(0, 0, 0, 0.196706),
      ${isWinner ? winnerShadow : ''}
    `
  }

  return (
    <div
      className="w-[130px] h-[124px] rounded-full px-4 pt-6 pb-3 md:w-[198px] md:h-[193px] md:px-6 md:pt-8 md:pb-5 transition-shadow"
      aria-label={item.type}
      style={inlineStyles}
    >
      <div className="bg-imageContainer h-full rounded-full flex justify-center items-center shadow-imageContainer">
        <img src={item.icon} aria-hidden="true" alt={`${item.type} icon`} className="md:w-[67px]" />
      </div>
    </div>
  )
}
