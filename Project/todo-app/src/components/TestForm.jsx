import { useRef, useState } from 'react';

const TestForm = () => {

  console.log("Painting Form");
  
  const [firstNameVal, setFirstName] = useState();

  const clicks = useRef(0);
  const firstName = useRef(); 
  const lastName = useRef();
  const dob = useRef();

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Button Clicked");
    // console.log(firstName.current.value);
    // console.log(lastName.current.value);
    // console.log(dob.current.value);
  }

  return (
    <div>
      <h1>StateValue: {firstNameVal} RafValue: {clicks.current} times </h1>
      <form action="/submit-data" onSubmit={submitHandler}>
        <input type="text" ref={firstName} placeholder='First Name' name='firstName' onKeyDown={firstNameChangeHandler} /><br />      
        <input type="text" ref={lastName} placeholder='Last Name' name='lastName' /> <br />
        <label htmlFor="dob">DOB</label>
        <input id="dod" ref={dob} type='date' name='dob' /> <br />
        <input type="submit" onClick={() => {clicks.current += 1}} />
      </form>
    </div>
  )
}

export default TestForm;