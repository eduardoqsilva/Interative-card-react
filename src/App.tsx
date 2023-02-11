import { useState } from "react"
import { CardBack } from "./components/Card/CardBack"
import { CardFront } from "./components/Card/CardFront"
import { CardsWrapper } from "./components/Card/CardsWrapper"
import { Form } from "./components/Form/Form"
import { Header } from "./components/Header/Header"
import { GlobalStyle } from "./styles/global"

function App() {

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvv, setCvv] = useState('')

  
  
  return (
    <>
      <GlobalStyle/>
        <Header>
          <CardsWrapper>
            
            <CardFront
              cardNumber={number} 
              name={name} 
              month={month} 
              year={year}     
            />
            <CardBack
              cvv={cvv}
            />
          </CardsWrapper> 
          
          <Form 
            setMonth={setMonth} 
            setName={setName} 
            setCvv={setCvv}
            setNumber={setNumber}
            setYear={setYear}
            
            number={number}
            name={name}
            month={month}
            cvv={cvv}
            year={year}
          />
      </Header>
    </>
  )
}

export default App
