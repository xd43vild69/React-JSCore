import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Modal from "./components/Modal";
import ModalBackdrop from "./components/ModalBackdrop";
import TodoManager from "./cmpTodo/TodoManager";
import "./App.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);  

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
          <TodoManager/>
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
