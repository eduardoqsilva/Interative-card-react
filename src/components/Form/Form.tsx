import { ReactNode } from "react";
import { FormStyled } from "./Form.Styled";


export function Form(){

  return(
    <FormStyled>
      <label htmlFor="name">cardholder name</label>
      <input type="text"
        className="inputName"
        id="name" 
        maxLength={25} 
        placeholder="YOUR NAME HERE"
        required
      />

      <label htmlFor="cardNumber">card number</label>
      <input 
        type="number" 
        className="inputCardNumber" 
        id="cardNumber" 
        maxLength={16} 
        minLength={16} 
        placeholder="0000 0000 0000 0000"
        required
      />

      <div className="grup">
        <fieldset>
          <legend>exp. date (mm/YY)</legend>
          <input
            className="mmyy"
            type="number"
            maxLength={2}
            minLength={2}
            placeholder="MM"
            required
          />
          <input
            className="mmyy"
            type="number"
            maxLength={2}
            minLength={2}
            placeholder="YY"
            required
          />
        </fieldset>
        <div className="cvc">
          <label htmlFor="cvc">cvc</label>
          <input
            type="number"
            id="cvc"
            maxLength={3}
            placeholder="123"
            required
          />
        </div>
      </div>

      <button type="submit">Confirm</button>
    </FormStyled>
  )
}