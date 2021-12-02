import React, { createContext, useState } from "react";
import RUseContextCmp1 from "./RUseContextCmp1";
import RUseContextCmp2 from "./RUseContextCmp2";

export const AppContext = createContext(null);

// Allow to share information among diff cmps on the same context

const RUseContextManager = () => {
  const [userName, setUserName] = useState("");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <RUseContextCmp1 /><RUseContextCmp2/>
    </AppContext.Provider>
  );
};

export default RUseContextManager;
