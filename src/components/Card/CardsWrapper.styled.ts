import styled, { keyframes } from "styled-components";
import { BackCardStyled } from "./CardBack.styled";
import { FrontCardStyled } from "./CardFront.styled";

const fadeRight = keyframes`
  0%{
    opacity: 0;
    transform: translateX(2rem);
  }
  100%{
    transform: translateX(-2rem);
    opacity: 1;
  }
`
const fadeLeft = keyframes`
  0%{
    transform: translateX(-2rem);
    opacity: 0;
  }
  100%{
    transform: translateX(2rem);
    opacity: 1;
  }
`

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  width: fit-content;
  padding: 2rem;

  position: absolute;
  left: 15%;
  /* margin-right: 2rem */

  & ${BackCardStyled} {
    transform: translateX(2rem);

    animation-name: ${fadeLeft};
    animation-duration: 0.5s;
    /* animation-fill-mode: forwards; */
    animation-timing-function: ease-in;
    z-index: 2;
  }

  & ${FrontCardStyled} {
    transform: translateX(-2rem);

    animation-name: ${fadeRight};
    animation-duration: 0.5s;
    /* animation-fill-mode: forwards; */
    animation-timing-function: ease-in;
  }

  @media (max-width: 1400px){
    grid-area: a;
    padding: 0;
    flex-direction: column-reverse;
    gap: 0;

    position: static;

    & ${BackCardStyled} {
      margin-bottom: -5rem;
    }
    & ${FrontCardStyled} {
      z-index: 10;
    }
  }
`