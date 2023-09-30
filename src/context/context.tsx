"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
  userAddress: string;
  setUserAddress: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = createContext<ContextProps>({
  userAddress: "",
  setUserAddress: (): string => "",
  loading: true,
  setLoading: (): boolean => true,
});

export const GlobalContextProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ userAddress, setUserAddress, loading, setLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
