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


  const bikes = context.bikes.filter(bike => bike.status === "active")
  const randomId = Math.floor(Math.random() * bikes.length);
  const { title,
    price,
    rating,
    status,
    description,
    icon,
    name,
    id,
    category } = bikes[randomId];

  return {
    title,
    price,
    rating,
    status,
    description,
    icon,
    name,
    id,
    category
  };
}

export const useTopThreeBikes = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useTopThreeBikes must be used within a StateProvider");
  }
  const result = context.bikes.filter(bike => bike.status === "inactive").sort((a, b) => b.rating - a.rating).slice(0, 3);
  const topThreeBikes = result.map((item) => {
    return {
      title: item.title,
      price: item.price,
      rating: item.rating,
      status: item.status,
      description: item.description,
      icon: item.icon,
      name: item.name,
      id: item.id,
      category: item.category
    }
  });
  return topThreeBikes;
};

export const useCategoryBikes = (category: string) => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useCategoryBikes must be used within a StateProvider");
  }
  const result = context.bikes.filter((bike) => bike.category === category.toLocaleUpperCase());
  const categoryBikes = result.map((item) => {
    return {
      title: item.title,
      price: item.price,
      rating: item.rating,
      status: item.status,
      description: item.description,
      icon: item.icon,
      name: item.name,
      id: item.id,
      category: item.category
    }
  });
  return categoryBikes;
}

export const useSingleBike = (id: number) => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useSingleBike must be used within a StateProvider");
  }

  if (context.bikes.length === 0) {
    return null;
  }

  const singleBike = context.bikes.find((bike) => bike.id === id);

  if (!singleBike) {
    throw new Error(`Bike with id ${id} not found`);
  }

  return singleBike;
};

export const useLocalBikes = (localBikes: number[]) => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useSingleBike must be used within a StateProvider");
  }
  if (context.bikes.length === 0) {
    return null;
  }
  const result = context.bikes.filter((bike) => localBikes.includes(bike.id));

  return result;
}