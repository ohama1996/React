const Button = ({text, onClickHandler}) => { 
  return (
    <button onClick={onClickHandler}>{text}</button>
  )
}

export default Button