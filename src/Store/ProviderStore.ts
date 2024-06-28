import { createContext } from "react";
import { IHRStore } from "../Interfaces/IHRStore";

export const StoreContext = createContext<IHRStore>({} as IHRStore);
export const StoreProvider = StoreContext.Provider;
