import React, { createContext, useState } from "react";
import { ReactNode } from "react";

interface AsideSwitcherType {
  aside: boolean;
  setAside: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext({} as AsideSwitcherType);

interface AsideSwitcherProviderProps {
  children: ReactNode;
}

export function ContextProvider({ children }: AsideSwitcherProviderProps) {
  const [aside, setAside] = useState(true);

  return (
    <Context.Provider value={{ aside, setAside }}>{children}</Context.Provider>
  );
}
