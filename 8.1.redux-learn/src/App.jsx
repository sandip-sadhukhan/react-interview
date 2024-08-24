import { useState } from 'react'
import './App.css'
import  {useDispatch, useSelector} from 'react-redux'
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions'

function App() {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo))
  }
  const Todo = useSelector((state) => state.Todo);

  const handleDelete = (todo) => {
    dispatch(RemoveTodoAction(todo))
  }

  return (
    <>
      <h2>Todo List App in Redux</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter a Todo' value={todo} onChange={(e)=> setTodo(e.target.value)} />
        <button type="submit">Go</button>
      </form>

      <ul>
        {
          Todo.todos.map(_todo => (
            <li key={_todo.id}>
              <span>{_todo.todo}</span>
              <button onClick={() => handleDelete(todo)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
