import React, { useState } from 'react';
import {Link} from 'react-router-dom'

let counter = 1;
const ToDoApp = () => {

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const createToDo = () => {
        setTodos((oldToDos)=>{
            setTask("");
            const arr = [...oldToDos, {todo: task, id: counter++}];
            console.log(arr)
            return arr
        })
    }

    const handleDelete = (taksID) => {
        setTodos(oldToDos => oldToDos.filter(item => item.id !== taksID))
    }

    const onEnterKey = (e) => {
        if(e.keyCode === 13){
            createToDo();
        }
    }

    return (
        <div id='body' className='to-do-app-container body-dark'>
            <header>
                <Link className="icon-border header-title" to="/">MP</Link>
            </header>
            <h2>Simple To-Do App</h2>
            <div className='input-container'>
                <input className='input' type="text" value={task} onChange={(e)=> {
                     return setTask(e.currentTarget.value);
                }} onKeyDown={onEnterKey} />
                <button type='button' className='btn' onClick={createToDo} >Add to-do</button>
            </div>
            <div className='todo-list'>
                <ul>
                    {todos.map(({todo, id}) => {
                        return <div className='list-item-container' key={id}>
                            <li className='list-item'>{id}. {todo}</li>
                            <button className='btn btn-delete' onClick={() => handleDelete(id)}>Delete</button>
                        </div>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ToDoApp;
