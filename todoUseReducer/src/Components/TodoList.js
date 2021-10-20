import { useState, useEffect } from "react"

const TodoList = ({ todos, dispatch }) => {
  const [value, setValue] = useState('')

  // useEffect(() => {

  //   if (editedtodos) {
  //     setValue(editedtodos.value)
  //   } else {
  //     setValue('')
  //   }
  // }, [editedtodos])


  const onhandleAdd = (e) => {

    e.preventDefault();
    dispatch({ type: "ADD", payload: value })
    setValue('')
    // localStorage.setItem("todos",JSON.stringify(todos))
    
    // if (!editedtodos) {
    //   setTodos([
    //     ...todos, {
    //       id: value + todos.length,
    //       value: value,
    //       completed: false
    //     }
    //   ])
    //   setValue('')
    // } else {
    //   setTodos(
    //     todos.map(temp => {
    //       // if (temp.id === editedtodos.id) {
    //       //   return { ...temp, value: value }
    //       // }
    //       return temp.id === editedtodos.id ? { ...editedtodos,value } : temp

    //     })
    //   )
    //   setEditedTodos('')
    // }

  }

  return (

    <div className="textConatiner">
      <input className="textAdd" placeholder="Enter Todo" type="text" value={value} onChange={(e) => setValue(e.target.value)} required />
      <button className="btnAdd" onClick={onhandleAdd}>Add
        {/* {editedtodos ? "Ok" : "Add"} */}
      </button>
    </div>
  )
}

export default TodoList;