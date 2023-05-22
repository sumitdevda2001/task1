import React from "react";
import { Provider } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
