import Header from './components/Header'
import Button from './components/Button'
import './App.css';

function App() {

  //let x = "D13";

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>My App {x}</h1> */}
        <Header title="title13"/>
        <Button></Button>
      </header>
    </div>
  );
}

export default App;
