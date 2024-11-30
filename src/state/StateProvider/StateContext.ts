import { createContext } from "react";
import { BikeType } from "../../types/BikeType";

export const StateContext = createContext<ContextType | null>(null);

type ContextType = {
  bikes: BikeType[];
  isLoading: boolean;
};
