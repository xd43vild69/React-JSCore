import { useState } from "react";
import Header from "./components/Header";
import ButtonCmp from "./components/ButtonCmp";
import Modal from "./components/Modal";
import ModalBackdrop from "./components/ModalBackdrop";
import BoostrapModal from "./components/BoostrapModal"
import TodoManager from "./cmpTodo/TodoManager";
import BoostrapCmps from "./components/BoostrapCmps";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import ManagerHooks from "./hooks/ManagerHooks";

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
          <ButtonCmp name="Call APIs" length="3"></ButtonCmp>
        </div>

        <div className="div1">          
          {modalIsOpen && <Modal onClick={CloseModalHandler} />}
          {/* {modalIsOpen && <ModalBackdrop onClick={CloseModalHandler} />} */}
          <BoostrapModal></BoostrapModal>
          <button onClick={OpenModalHandler}>Create Task</button>
        </div>

        <div className="div1">
          <TodoManager />
        </div>

        <BoostrapCmps></BoostrapCmps>

        <ManagerHooks></ManagerHooks>
      </header>
    </div>
  );
}

export default App;
