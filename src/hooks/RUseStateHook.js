import React, { useState } from "react";
import { Button } from "react-bootstrap";

const RUseStateHook = () => {
  
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Type something...");

  const increment = () => {
    setCounter(counter +1)
  };

  let changeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {counter}
      <Button onClick={increment}>Increment</Button>
      <input onChange={changeInput}></input>
      {inputValue}
    </div>
  );
};

export default RUseStateHook;
