import styled from "styled-components"

export const BackCardStyled = styled.div`
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

  box-shadow: 19px 14px 50px 0px rgba(0,0,0,0.20);

  scale: 1.1;

  & div.band {
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