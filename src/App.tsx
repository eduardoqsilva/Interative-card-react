import { CardBack, CardFront } from "./components/Card/Cards"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <>
      <GlobalStyle/>
      <CardFront
        cardNumber={2500350024004400} 
        name={"eduardo queiroz"} 
        dateCard={1130}      
      />
      <CardBack/>
    </>
  )
}

export default App
