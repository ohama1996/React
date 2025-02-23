import { useReducer } from "react"

const counterReducer = (currentState, action) => {

  console.log('In Reducer', currentState, action);
  let newState = currentState;
  if(action.type === 'INCREMENT') {
    newState += 1; 
  } else if (action.type === 'DECREMENT'){
    newState -= 1;
  }
  return newState;

}

function App() {
  //const [counterVal, setCounterVal] = useState(0);
  const initalState = 0;
  const [counterVal, counterDispatch] = useReducer(counterReducer, initalState);

  const handleIncrement = () => {
    // setCouterVal(current => current + 1);
    counterDispatch({type: "INCREMENT"});
  }
  const handleDecrement = () => {
    // setCouterVal(current => current - 1);
    counterDispatch({type: "DECREMENT"});
  }
  return (
    <>
     <h1>Count: {counterVal}</h1>
     <button onClick={handleIncrement}>Increment</button>
     <button onClick={handleDecrement}>Decrement</button>
     <button >Reset</button>
     <button>Double</button>
     <button>Change By</button>
    </>
  )
}

export default App
