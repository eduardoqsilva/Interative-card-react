import { ReactNode } from "react";
import { HeaderStyled } from "./Header.styled";

interface Headertype{
  children: ReactNode
}

export function Header({ children }:Headertype) {
  return(
    <HeaderStyled>
      {children}
    </HeaderStyled>
  )
}