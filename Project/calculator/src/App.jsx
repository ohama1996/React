import { useState } from "react"
import Display from "./component/Display"
import NumberPad from "./component/NumberPad"

function App() {

  const [displayVal, setDisplayVal] = useState('');

  return (
    <>
      <h1>
        Calculator
      </h1>
      <Display textToShow={displayVal} />
      <NumberPad dispayVal={displayVal} setDisplayVal={setDisplayVal}/>
    </>
  )
}

export default App
