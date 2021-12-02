import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import TaskAdd from "../cmpTodo/TaskAdd";

const BoostrapModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tasks, setTasks] = useState([]);

  //Allow to close modal after save a task, when the tasks change
  useEffect(() => {
    handleClose()
  }, [tasks])

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

    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new task...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskAdd onAdd={addTask} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={HandleSave}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BoostrapModal;
