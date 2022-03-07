import React from 'react'

type Props = TodoProps & {
    updateTodo: (todo: ITodo) => void
    deleteTodo: (_id: string) => void
}


// updateTodo
const Todo: React.FC<Props> = ({ todo,  deleteTodo }) => {
  //const checkTodo: string = todo.status ? `line-through` : ''
  return (
    <div className='Card'>
      <div className='Card--text'>
        <h1>{todo?.title}</h1>
        <span>{todo?.items}</span>
      </div>
      <div className='Card--button'>
        {/* <button
          onClick={() => updateTodo(todo)}
        >
          Complete
        </button> */}
        <button
          onClick={() => deleteTodo(todo.id)}
          className='Card--button__delete'
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo
