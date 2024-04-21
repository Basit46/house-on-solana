import React, { useState, createContext, useContext } from "react";

const globalContext = createContext({} as contextType);

type contextType = {
  val: string;
};

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [val, setVal] = useState("House");

  return (
    <globalContext.Provider value={{ val }}>{children}</globalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => {
  return useContext(globalContext);
};
