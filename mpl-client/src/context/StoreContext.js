import { createContext, useContext } from "react";

export const StoreContext = createContext(null);
export const useStoreContext = () => useContext(StoreContext);
