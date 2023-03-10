import styled from "styled-components";

export const HeaderStyled = styled.header`

  background: #fff;
  width: 100vw;
  height: 100vh;
  
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-areas: 'a b';
  justify-content: center;
  align-items: center;
  justify-items: center;
  overflow-x: hidden;
  
  position: relative;

  padding: 1rem;

  ::before{
    
    content: '';
    
    background: #21082f; 
    background: linear-gradient(150deg, rgba(33,8,47,1) 0%, rgba(83,35,59,1) 50%, rgba(47,43,91,1) 100%);
    
    height: 100%;
    width: 30%;

    position: absolute;
    left: 0;
    top: 0;
  }
  @media (max-width: 1400px){
    ::before {
      height: 30%;
      width: 100vw;
    }
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`