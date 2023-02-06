import { FrontCard } from "./Card.styled";

export function CardFront() {
  return(
    <FrontCard>
      <div className="circle">
        <div></div>
        <div></div>
      </div>
      <div className="textWrapper">
        <span className="cardNumber">0000 0000 0000 0000</span>
        <span className="name">Jane Appset</span>
      </div>
      <span className="date">00/00</span>
    </FrontCard>
  )
}