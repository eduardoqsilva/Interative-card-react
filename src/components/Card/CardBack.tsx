import { BackCardStyled } from "./CardBack.styled";
import cardDecal from '../../assets/svg/card-decal.svg'

interface CardBackType {
  cvv?: number
}

export function CardBack({ cvv }:CardBackType){
  
  const cvvNumber: string = cvv ? cvv.toString() : '000'
  
  return(
    <BackCardStyled>
      <div className="band">
      </div>
      <div className="wrapperNumber">
        <span>{cvvNumber}</span>
      </div>
      <div className="decalWrapper">
        <img src={cardDecal}/>
      </div>
    </BackCardStyled>
  )
}
