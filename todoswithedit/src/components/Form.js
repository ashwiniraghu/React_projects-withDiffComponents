import React, { useEffect } from "react";


const Form = ({ textValue, setTextValue, todos, setTodos, editedTodo, setEditedTodo }) => {


    const updatedTodo = (title, id, completed) => {

        const newTodo = todos.map(todo =>
            todo.id === id ? { title, id, completed } : todo
        )
        setTodos(newTodo);
        setEditedTodo("");

    }
    useEffect(() => {
        if (editedTodo) {
            setTextValue(editedTodo.title)
        } else {
            setTextValue('');
        }

    }, [editedTodo, setTextValue])

    const onInputChange = (e) => {
        setTextValue(e.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (!editedTodo) {
            setTodos([...todos,
            { id: todos.length, title: textValue, completed: false }
            ]);
            setTextValue('');
        } else {
            updatedTodo(textValue, editedTodo.id, editedTodo.completed)
        }
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                placeholder="Enter a todo.."
                className="task-input"
                value={textValue}
                required
                onChange={onInputChange}

            />
            <button className="button-add" type="submit">
                {editedTodo ? "Ok" : "Add"}
            </button>
        </form>
    )
}
export default Form;