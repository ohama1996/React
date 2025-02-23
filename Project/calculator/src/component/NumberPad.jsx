import Button from "./Button";
const NumberPad = ({dispayVal,setDisplayVal}) => {

  const buttons= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

  const operations= ["+","-","*","/"];

  const addDisplay = (text) => {
   setDisplayVal(dispayVal + text);
  }

  const evaluateExpression = () => {
    const result = eval(dispayVal);
    setDisplayVal(result);
  }


  return <>
  <Button text="C" onClickHandler={() => setDisplayVal('')}/>
  <br />
  {buttons.map(text => <Button text={text} key={text} onClickHandler={() => addDisplay(text)} />)} <br />
  {operations.map(text => <Button text={text} key={text} onClickHandler={() => addDisplay(text)} />)}
  <br />
  <Button text="=" onClickHandler={evaluateExpression} />
  <br />
  </>
}

export default NumberPad;