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
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)
  const [cvv, setCvv] = useState(123)

  
  
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
          />
      </Header>
    </>
  )
}

export default App
