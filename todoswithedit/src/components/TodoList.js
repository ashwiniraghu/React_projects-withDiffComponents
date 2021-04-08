import React from "react";


const TodoList = ({ todos, setTodos, setEditedTodo }) => {

    const onDeleteHandler = ({ id }) => {
        const list = todos.filter(item => item.id !== id);
        setTodos(list);
    }

    const onCompleteHandler = (todo) => {

        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed }
            }
            return item;
        }
 
        ));
    }

    const onEditHandler = (todo) => {
        const newTodod = todos.find(item => item.id === todo.id);
        setEditedTodo(newTodod);
    }

    return (
        <div>
            {todos.map(todo => (
                <li className="list-item" key={todo.id}>
                    <input
                        type="text"
                        className={`list ${todo.completed ? "complete": ""}`}
                        value={todo.title}
                        onChange={event => event.preventDefault()}
                    />
                    <button className="button-complete" onClick={() => onCompleteHandler(todo)}>
                        <i className="fa fa-check-circle"></i>
                    </button>
                    <button className="button-edit " onClick={() => onEditHandler(todo)}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="button-delete" onClick={() => onDeleteHandler(todo)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </li>
            ))}

        </div>

    )
}
export default TodoList;