import './App.css'
import "./LuckyN"
import LuckyN from './LuckyN'
function App() {

  return (
    <>
      <LuckyN numDice={2} target={10} />
      <h3>Note : Keep on rolling the dice until you get the sum as 10!</h3>
    </>

  )
}

export default App
