import styled from "styled-components";


export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    
    width: 27.25rem;

    z-index: 10;
    grid-area: b;

    & input {
      padding: 1rem;
      border: 1px solid #cac8cc;
      border-radius: 10px;
      
      width: 100%;
      height: 2.9375rem;
      outline: none;

      font-family: 'Space Grotesk', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      color: #220930;
    }
   
    & input::placeholder {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 500;
      font-size: 1rem;
      letter-spacing: .1rem;
      color: #cac8cc;
    }
    & label, fieldset {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      color: #220930;
      letter-spacing: .1rem;
    }
    & .grup > fieldset {
      border: 0;
      display: flex
    }
    & div.cvc {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }
    & div.grup {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
    & input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & fieldset > input[type=number].mmyy  {
      width: 5rem;
      margin: 1rem 1rem 1rem 0;
    }

    & > button {
      background: #220930;
      color: #ffff;
      padding: 1rem;
      
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 500;
      font-size: 1rem;
      border-radius: 10px;
    }

    & > button:active {
      transform: scale(0.98);
    }
`