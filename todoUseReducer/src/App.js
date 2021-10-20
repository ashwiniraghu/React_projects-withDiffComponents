import { useReducer } from "react"
import './App.css';

import TodoList from './Components/TodoList';
import TodoListItems from './Components/TodoListItems';

const reducer = (state, action) => {

  switch (action.type) {
    case 'ADD':
      return [...state, {
        id: action.payload + state.length,
        value: action.payload,
        completed: false
      }]
    case 'EDIT':
      return  state.map(temp => {
        return temp.id === action.payload.id ? { ...temp,value:action.payload.value } : temp
      })
    case 'DELETE':
      return  state.filter((item) => item.id !== action.payload.id)
    case 'COMPLETE':
      return       state.map(temp => {
        if (temp.id === action.payload.id) {
          return { ...temp, completed: !temp.completed }
        }
        return temp;
      });
    default:
      return state;
  }
}



function App() {
 const initialInput=JSON.parse(localStorage.getItem("todos"));

  const [todosArray, dispatch] = useReducer(reducer,initialInput)

  // const [todos, setTodos] = useState([])
  // const [editedtodos, setEditedTodos] = useState('')
  return (
    <main className="container">
      <div className="App">
        <div className="header">
          <h2>Todo App</h2>
        </div>
        <TodoList todos={todosArray} dispatch={dispatch} />
        <TodoListItems todos={todosArray} dispatch={dispatch}  />
      </div>
    </main>
  );
}

export default App;
