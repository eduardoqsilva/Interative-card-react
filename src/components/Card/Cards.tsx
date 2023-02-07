import { BackCard, FrontCard } from "./Card.styled";
import cardDecal from '../../assets/svg/card-decal.svg'

interface CardFrontType {
  cardNumber?: number
  name?: string
  dateCard?: number
}
interface CardBackType {
  cvv?: number
}

export function CardFront({ cardNumber, name = 'your name here', dateCard }:CardFrontType) {


  const number: string = cardNumber ? 
    cardNumber.toString().replace(/\d{4}(?=.)/g, '$& ')
    : '0000 0000 0000 0000'

  const date: string = dateCard ? 
    dateCard.toString().replace(/\d{2}(?=.)/g, '$&/')
    :'00/00'


  return(
    <>
      <FrontCard>
        <div className="circle">
          <div></div>
          <div></div>
        </div>
        <div className="textWrapper">
          <span className="cardNumber">{number}</span>
          <span className="name">{name}</span>
        </div>
        <span className="date">{date}</span>
      </FrontCard>
    </>
  )
}

export function CardBack({ cvv }:CardBackType){
  
  const cvvNumber: string = cvv ? cvv.toString() : '000'
  
  return(
    <BackCard>
      <div className="band">
      </div>
      <div className="wrapperNumber">
        <span>{cvvNumber}</span>
      </div>
      <div className="decalWrapper">
        <img src={cardDecal}/>
      </div>
    </BackCard>
  )
}