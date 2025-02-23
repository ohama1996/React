import { useRef, useState } from "react"

const StateVsRef = () => {

  console.log("Repaint");
  const [stateClick, setStatClick] = useState(0);
  const refClick = useRef(0);

  const onStateClickHandler = () => {
    console.log("State Clicked");
    setStatClick(stateClick + 1);
  }

  const onRefClickHandler = () => {
    console.log("Ref Clicked");
    refClick.current += 1;
  }

  return (
    <>
    <h1>State Clicked: {stateClick} </h1>
    <h1>Ref Clicked: {refClick.current} </h1>
    <button onClick={onStateClickHandler}>State</button>
    <button onClick={onRefClickHandler}>Ref</button>
    </>
  )
}

export default StateVsRef