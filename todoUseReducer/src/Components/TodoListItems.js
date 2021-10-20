import { MdEdit } from "react-icons/md"
import { MdDelete } from "react-icons/md"
import { MdCheck } from "react-icons/md"


const TodoListItems = ({ todos,dispatch }) => {

  const onCompleteHandler = (todo) => {
    dispatch({ type: "COMPLETE", payload:todo })

  }

  const onEditHandler = (todo) => {
    // dispatch({ type: "DELETE", payload:todo })
  }

  const onDeleteHandler = (todo) => {
    dispatch({ type: "DELETE", payload:todo })

  }

  const renderList = todos.map((todo) => {
    return (

      <div key={todo.id} className="itemContainer">
        <input type="text" className={`valueContainer ${todo.completed ? "underline" : ""}`} value ={todo.value} onChange={e=>e.preventDefault()}/>
        <div>
          <button className="completed" onClick={() => onCompleteHandler(todo)}><MdCheck /></button>
          <button className="edit" onClick={() => onEditHandler(todo)}><MdEdit /></button>
          <button className="delete" onClick={() => onDeleteHandler(todo)}><MdDelete /></button>
        </div>
      </div>
    )
  })

  return (

    <div>{renderList}</div>
  )

}

export default TodoListItems;