import { CardBack } from "./components/Card/CardBack"
import { CardFront } from "./components/Card/CardFront"
import { CardsWrapper } from "./components/Card/CardsWrapper"
import { Form } from "./components/Form/Form"
import { Header } from "./components/Header/Header"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <>
      <GlobalStyle/>
        <Header>
          <CardsWrapper>
            
            <CardFront
              cardNumber={2500350024004400} 
              name={"eduardo queiroz"} 
              dateCard={1130}      
            />
            <CardBack
              cvv={121}
            />
          </CardsWrapper> 
          <Form></Form>
      </Header>
    </>
  )
}

export default App
