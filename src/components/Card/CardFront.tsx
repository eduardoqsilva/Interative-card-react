import { FrontCardStyled } from "./CardFront.styled";


interface CardFrontType {
  cardNumber?: string
  name?: string
  month?: number;
  year?: number;
}


export function CardFront({ cardNumber, name, month, year }:CardFrontType) {

  const namef = name?.trim() === '' ? 'your name here' : name

  const number: string = cardNumber ? 
    cardNumber.replace(/\d{4}(?=.)/g, '$& ')
    : '0000 0000 0000 0000'

  const date: string =  month || year ? `${month ? month : '00' }
    /${year ? year : '00'}` : '00/00'
  


  return(
    <>
      <FrontCardStyled>
        <div className="circle">
          <div></div>
          <div></div>
        </div>
        <div className="textWrapper">
          <span className="cardNumber">{number}</span>
          <span className="name">{namef}</span>
        </div>
        <span className="date">{date}</span>
      </FrontCardStyled>
    </>
  )
}

