import React from "react";

const Task = ({task, onDelete}) => {
  return (
    <div>
      <h2>
        {task.text}{" "}
      </h2>
      <p>{task.day}</p>
      <p><button onClick={() => onDelete(task.id)}>delete</button></p>
    </div>
  );
};

export default Task;
