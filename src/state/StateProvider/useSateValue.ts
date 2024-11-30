// useStateValue.ts
import { useContext } from "react";
import { StateContext } from "./StateContext";

export const useStateValue = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateValue must be used within a StateProvider");
  }
  return context;
};
