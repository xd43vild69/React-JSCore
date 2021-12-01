import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Modal from "./components/Modal";
import ModalBackdrop from "./components/ModalBackdrop";
import "./App.css";

function App() {
  //const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // Add Task
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

  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error Deleting This Task");
  };

  function OpenModalHandler() {
    setModalIsOpen(true);
  }

  function CloseModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="div1">
          <Header title="Title xD13" />
          <Button name="BtnName13" length="3"></Button>
        </div>
        <div className="div1">
          <AddTask onAdd={addTask} />
          <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
        <div className="div1">
          <button onClick={OpenModalHandler}>OpenModal</button>
          {modalIsOpen && <Modal onClick={CloseModalHandler} />}
          {modalIsOpen && <ModalBackdrop onClick={CloseModalHandler} />}
        </div>
      </header>
    </div>
  );
}

export default App;
