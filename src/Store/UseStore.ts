import { useContext } from "react";
import { StoreContext } from "./ProviderStore";
import { IHRStore } from "../Interfaces/IHRStore";

export const useStore = (): IHRStore => useContext(StoreContext);
