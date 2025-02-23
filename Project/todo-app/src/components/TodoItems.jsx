import React from 'react'

const TodoItems = () => {

  const todoItems = [
    {id: 1, todoText: "Buy Milk", todoDate: "23-02-2025" },
    {id: 2, todoText: "Go to College", todoDate: "Weekday" },
    {id: 3, todoText: "Exrcise", todoDate: "Everyday" },

  ]

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate} />
      ))}
    </>
  )
}

export default TodoItems