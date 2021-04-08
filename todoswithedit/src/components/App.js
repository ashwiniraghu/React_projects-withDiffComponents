import React, { useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
    const initialvalues=JSON.parse(localStorage.getItem('todos')) || [];
    const [textValue,setTextValue]=useState('');
    const [todos,setTodos]=useState(initialvalues);
    const [editedTodo,setEditedTodo]=useState(null);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])

    return (
        <div className="container">
            <div className="mainWrapper">
                <div>
                    <Header />
                </div>
                <div>
                    <Form 
                    textValue={textValue}
                    setTextValue={setTextValue}
                    todos={todos}
                    setTodos={setTodos}
                    editedTodo={editedTodo}
                    setEditedTodo={setEditedTodo}
                    />
                </div>
                <div>
                    <TodoList 
                     todos={todos}
                     setTodos={setTodos}
                     setEditedTodo={setEditedTodo}
                     />
                </div>
            </div>
        </div>
    )

}
export default App;