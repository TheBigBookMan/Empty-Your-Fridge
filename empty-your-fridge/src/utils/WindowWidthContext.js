import React, { createContext, useContext, useState, useEffect } from "react";

const WindowWidthContext = createContext();

export const useWindowWidthContext = () => useContext(WindowWidthContext);

export const WindowWidthContextProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowWidth(window.innerWidth);
    });
  });

  return (
    <WindowWidthContext.Provider value={{ windowWidth, setWindowWidth }}>
      {children}
    </WindowWidthContext.Provider>
  );
};
