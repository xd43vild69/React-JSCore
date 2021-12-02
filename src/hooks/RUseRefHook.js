import React, { useRef } from "react";

//Refer a property from another component

const RUseRefHook = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <h1>Peter</h1>
      <input type="text" placeholder="some text here..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default RUseRefHook;
