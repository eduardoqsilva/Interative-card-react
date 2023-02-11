import { ReactNode } from "react";
import { FormStyled } from "./Form.Styled";

interface typeForm {
  setNumber: (value:string)=> void
  setName: (value:string)=> void
  setMonth: (value:string)=> void
  setYear: (value:string)=> void
  setCvv: (value:string)=> void

  number: string
  name: string
  month: string 
  year: string 
  cvv: string
}

export function Form(props: typeForm){


  function handleSetName(event:React.FormEvent<HTMLInputElement>){
    const value = event.currentTarget.value
    const valueF = value.substring(0, 25)
    props.setName(valueF)
  }
  function handleSetNumber(event:React.FormEvent<HTMLInputElement>){
    const value = event.currentTarget.value
    const valueF = value.substring(0, 16)
    props.setNumber(valueF)
  }
  function handleSetMonth(event:React.FormEvent<HTMLInputElement>){
    props.setMonth(String(event.currentTarget.value))
  }
  function handleSetYear(event:React.FormEvent<HTMLInputElement>){
    props.setYear(String(event.currentTarget.value))
  }
  function handleSetCvv(event:React.FormEvent<HTMLInputElement>){
    props.setCvv(String(event.currentTarget.value))
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
        placeholder="YOUR NAME HERE"
        required
        onChange={handleSetName}
        value={props.name}
      />

      <label htmlFor="cardNumber">card number</label>
      <input 
        type="number" 
        className="inputCardNumber" 
        id="cardNumber" 
        placeholder="0000 0000 0000 0000"
        required
        onChange={handleSetNumber}
        value={props.number}
      />

      <div className="grup">
        <fieldset>
          <legend>exp. date (mm/YY)</legend>
          <input
            className="mmyy"
            type="number"
            placeholder="MM"
            required
            onChange={handleSetMonth}
            value={props.month}
          />
          <input
            className="mmyy"
            type="number"
            placeholder="YY"
            required
            onChange={handleSetYear}
            value={props.year}
          />
        </fieldset>
        <div className="cvc">
          <label htmlFor="cvc">cvc</label>
          <input
            type="number"
            id="cvc"
            placeholder="123"
            required
            onChange={handleSetCvv}
            value={props.cvv}
          />
        </div>
      </div>

      <button type="submit">Confirm</button>
    </FormStyled>
  )
}