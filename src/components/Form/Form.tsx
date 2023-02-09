import { ReactNode } from "react";
import { FormStyled } from "./Form.Styled";

interface typeForm {
  setNumber: (value:string)=> void
  setName: (value:string)=> void
  setMonth: (value:number)=> void
  setYear: (value:number)=> void
  setCvv: (value:number)=> void
}

export function Form({ setNumber, setName, setMonth, setYear, setCvv }: typeForm){


  function handleSetName(event:React.FormEvent<HTMLInputElement>){
    setName(event.currentTarget.value)
  }
  function handleSetNumber(event:React.FormEvent<HTMLInputElement>){
    setNumber(event.currentTarget.value)
  }
  function handleSetMonth(event:React.FormEvent<HTMLInputElement>){
    setMonth(Number(event.currentTarget.value))
  }
  function handleSetYear(event:React.FormEvent<HTMLInputElement>){
    setYear(Number(event.currentTarget.value))
  }
  function handleSetCvv(event:React.FormEvent<HTMLInputElement>){
    setCvv(Number(event.currentTarget.value))
  }
  function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
  }

  return(
    <FormStyled onSubmit={onSubmit}>
      <label htmlFor="name">cardholder name</label>
      <input type="text"
        className="inputName"
        id="name" 
        maxLength={25} 
        placeholder="YOUR NAME HERE"
        required
        onChange={handleSetName}
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
        onChange={handleSetNumber}
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
            onChange={handleSetMonth}
          />
          <input
            className="mmyy"
            type="number"
            maxLength={2}
            minLength={2}
            placeholder="YY"
            required
            onChange={handleSetYear}
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
            onChange={handleSetCvv}
          />
        </div>
      </div>

      <button type="submit">Confirm</button>
    </FormStyled>
  )
}