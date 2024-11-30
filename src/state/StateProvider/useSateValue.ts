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

export const useRandomBike = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useRandomBike must be used within a StateProvider");
  }

  if (context.bikes.length === 0) {
    return null;
  }

  const randomId = Math.floor(Math.random() * context.bikes.length);

  return context.bikes[randomId];
}

export const useTopThreeBikes = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useTopThreeBikes must be used within a StateProvider");
  }
  const topThreeBikes = context.bikes.sort((a, b) => b.rating - a.rating).slice(0, 3);
  return topThreeBikes;
};
