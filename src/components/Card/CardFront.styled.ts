import styled from "styled-components"

export const FrontCardStyled = styled.div`
  width: 370px;
  height: 210px;
  border-radius: 10px;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

  padding: 1.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  font-family: 'Space Grotesk', sans-serif;
  color: #ffff;

  box-shadow: 19px 14px 50px 0px rgba(0,0,0,0.20);

  scale: 1.1;

  & div.circle {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  & div.circle :nth-child(1) {
    width: 45px;
    height: 45px;
    background: #ffff;

    border-radius: 50%;
  }
  & div.circle :nth-child(2){
    width: 25px;
    height: 25px;

    background: transparent;
    border: 1px solid #ffff;
    border-radius: 50%;
  }

  & div.textWrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  & span.cardNumber {
    font-weight: 400;
    font-size: 1.6rem;
    word-spacing: 0.5rem;
  }
  & div.textWrapper  span.name {
    text-transform: uppercase;
    font-size: 0.9rem;
  }

  & span.date{
    position: absolute;
    bottom: 25px;
    right: 25px;

    font-size: 0.9rem;
  }
  @media (max-width: 1400px){
    scale: 0.95;    
  }
  @media (max-width: 470px){
    scale: 0.80;    
  }
  @media (max-width: 370px){
    scale: 0.70;
  }
` 