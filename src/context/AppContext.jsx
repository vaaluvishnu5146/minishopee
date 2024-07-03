import React, { createContext } from "react";

// Step 1: Create Context
export const AppContext = createContext({
  heading: "",
  description: "",
  c1: "",
  c2: "",
});

// Step 2: Create Context Provider
export default function AppContextProvider({ children }) {
  const heading = "Welcome to Vishnu Application";
  const description = "Context api description";
  const c1 = "Component One";
  const c2 = "Component Two";
  return (
    <AppContext.Provider
      value={{
        heading,
        description,
        c1,
        c2,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: React.Component,
};
