import React from "react";

const Task = ({task, onDelete}) => {
  return (
    <div>
      <h3>
        {task.text}{" "}
      </h3>
      <p>{task.day}</p>
      <p><button onClick={() => onDelete(task.id)}>X</button></p>
    </div>
  );
};

export default Task;
