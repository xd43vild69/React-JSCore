import React, { useContext } from "react";
import { AppContext } from "./RUseContextManager";

const RUseContextCmp2 = () => {
  const { userName } = useContext(AppContext);

  return (
    <div>
      <h1>User: {userName}</h1>
    </div>
  );
};

export default RUseContextCmp2;
