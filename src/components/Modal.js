import React from 'react'
import { useState, useEffect } from "react";
import TaskAdd from '../cmpTodo/TaskAdd';

function ExternalFn(){
    console.log(`event1: ${Date.now()}) `);
}

const Modal = (props) => {
    const [tasks, setTasks] = useState([]);
    const todoCofirmation = {name:"server1", run1:"runProcess"}

    function runServerConfirm(){
        console.log([todoCofirmation]);
        ExternalFn();
    }

    const addTask = async (task) => {
        const res = await fetch("http://localhost:5000/tasks", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(task),
        });
    
        const data = await res.json();
        setTasks([...tasks, data]);
      };

    return (
        <div className="modal">
            <TaskAdd onAdd={addTask}/>
            <button className="btn btn--alt" onClick={runServerConfirm} >Confirm</button>
            <button className="btn btn--alt" onClick={props.onClick} >Cancel</button>
            {/* <progress></progress> */}
        </div>
    )
}

export default Modal
