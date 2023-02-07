import { ReactNode } from "react";
import { CardsWrapperStyled } from "./CardsWrapper.styled";

interface CardsWrapperType {
  children: ReactNode
}

export function CardsWrapper({ children }: CardsWrapperType){
  return(
    <CardsWrapperStyled>
      {children}
    </CardsWrapperStyled>
  )
}