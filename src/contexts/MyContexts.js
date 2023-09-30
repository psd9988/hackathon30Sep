import React, { createContext, useState } from "react";

const MyContexts = createContext();

function MyContextsProvider({ children }) {
    const [myInterval, setMyInterval] = useState(null);

  return (
    <MyContexts.Provider value={{ myInterval, setMyInterval }}>
      {children}
    </MyContexts.Provider>
  );
}

export { MyContexts, MyContextsProvider };