import styled from "styled-components";

export const FrontCard = styled.div`
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
` 

export const BackCard = styled.div`
  width: 370px;
  height: 210px;
  border-radius: 10px;
  background: #d2d3d8;
  background: linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(210,211,216,1) 100%);

  font-family: 'Space Grotesk', sans-serif;
  color: #ffff;

  padding: 1.2rem 0 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & div.band{
    background: #2f2f2f;

    width: 100%;
    height: 45px;
  }
  & div.wrapperNumber {
    background: #adb5bf;
    width: 80%;
    padding: 0.5rem 1rem;

    border-radius: 4px;

    font-size: 0.8rem;

    text-align: end;
  }
`