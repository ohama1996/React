import { useState } from "react";
import List from "./components/List";


function App() {

  console.log("Painting App Component");

  const studentArrState = useState(["Nirmala", "Aman", "Akash", "Amanullah", "Abhijeet", "Anu"]);

  const studentArr = studentArrState[0];
  const setStudentArr = studentArrState[1];
  console.log("State Value is: ", studentArr);

  const onChangeHandler = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      const newArr = [...studentArr, event.target.value];
      event.target.value = '';
      setStudentArr(newArr);
      console.log(newArr);
    }
  }
 
  return (
    <>
      <h1 className="text-5xl">
      Learners of MERN Stack
    </h1>
    <List list={studentArr}/>
    <input type="text" placeholder="New Student Name" onKeyDown={onChangeHandler} />
    </>
  )
}

export default App

