import React from "react";
import { useState } from "react";

const TaskAdd = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [category, setCategory] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <div className="create">
      <h2>Task Add</h2>
      <form className="add-form" onSubmit={onSubmit}>
        <div>
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <label>Day & Time</label>
          <input
            type="date"
            placeholder="Add Day & Time"
            required
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div>
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>

        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="c1">c1</option>
            <option value="c2">c2</option>
            <option value="c3">c3</option>
          </select>
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default TaskAdd;
