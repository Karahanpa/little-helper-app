import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
    const [input, setInput] = useState("");
    const [todos, setTodo] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    
    const handleClick = () => {
        setTodo([...todos, input]);
        setInput(" ");
    }

    const handleDelete = (indexToDelete) => {
        const updatedTodo = todos.filter((_, index) => index !== indexToDelete);
        setTodo(updatedTodo);
    }


    return ( 
        <div className="todo">
            <div className="input-wrapper">
                <h2>To Do List</h2>
                <input
                value={input}
                onChange={handleChange}></input>
                <button id="add" onClick={handleClick}>Add</button>
            </div>  
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>
                    <span>{todo}</span>
                    <button onClick={() => handleDelete(index)}>X</button>
                </li>
            ))}
            </ul>    
        </div>
     );
}
 
export default ToDoList;