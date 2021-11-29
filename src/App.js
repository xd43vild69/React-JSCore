import { useState, useEffect } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Tasks from './components/Tasks'
import './App.css';

function App() {
  //const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header title="title13"/>
        <Button name="Boton1" lastname="Gomez"></Button>
        <Tasks tasks={tasks}></Tasks>
      </header>
    </div>
  );
}

export default App;
