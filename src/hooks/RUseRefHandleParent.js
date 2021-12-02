import React, { useRef } from "react";
import RUseRefHandleSon from "./RUseRefHandleSon";

const RUseRefHandleParent = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button Parent
      </button>
      <RUseRefHandleSon ref={buttonRef}></RUseRefHandleSon>
    </div>
  );
};

export default RUseRefHandleParent;
