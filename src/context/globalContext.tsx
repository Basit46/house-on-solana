import React, { useState, createContext, useContext } from "react";

const globalContext = createContext({} as contextType);

type contextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoaderOpen: boolean;
  setIsLoaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isToastOpen: boolean;
  setIsToastOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaderOpen, setIsLoaderOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  return (
    <globalContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isLoaderOpen,
        setIsLoaderOpen,
        isToastOpen,
        setIsToastOpen,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => {
  return useContext(globalContext);
};
