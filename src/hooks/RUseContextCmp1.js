import React, { useContext } from "react";
import { AppContext } from "./RUseContextManager";

const RUseContextCmp1 = () => {
  const {setUserName} = useContext(AppContext);
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
    </div>
  );
};

export default RUseContextCmp1;
