import React from "react";

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <p>{task.text} </p>
      <p>{task.day}</p>
      <p>{task.category}</p>
      <p>
        <button onClick={() => onDelete(task.id)}>delete</button>
      </p>
    </div>
  );
};

export default Task;
