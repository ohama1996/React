import React from 'react'

const AddTodo = () => {

  const addHandler = () => {
    console.log(`Try to add item`);
  }

  const textChangeHandler = (event) => {
    console.log(event.target.value.event);
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-5">
          <input 
          type="text"
          className='form-control'
          placeholder='"Enter Todo Here'
          onChange={textChangeHandler} />
        </div>
        <div className="col-3">
          <input type="date" className='form-control' />
        </div>
        <div className="c0l-2">
          <Button btnType ="success" btnText= "Add" handler= {addHandler} >
        </div>
      </div>
    </div>   
  )
}

export default AddTodo