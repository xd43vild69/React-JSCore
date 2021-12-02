import React, { forwardRef, useImperativeHandle, useState } from "react";

//Use to move a set functionality outside of the component
const RUseRefHandleSon = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Button Child</button>
      {toggle && <p>Toggle</p>}
    </>
  );
});

export default RUseRefHandleSon;
