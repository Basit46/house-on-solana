import React, { useState, createContext, useContext } from "react";

const globalContext = createContext({} as contextType);

type contextType = {
  val: string;
  isLoaderOpen: boolean;
  setIsLoaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [val, setVal] = useState("House");
  const [isLoaderOpen, setIsLoaderOpen] = useState(false);

  return (
    <globalContext.Provider value={{ val, isLoaderOpen, setIsLoaderOpen }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => {
  return useContext(globalContext);
};
