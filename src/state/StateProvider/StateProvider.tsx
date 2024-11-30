// StateProvider.tsx
import React, { useState, useEffect } from "react";
import { StateContext} from "./StateContext";
import { BikeType } from "../../types/BikeType";

export const StateProvider: React.FC<Props> = ({ children }) => {
  const [bikes, setBikes] = useState<BikeType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch("https://funny-fudge-ddda7b.netlify.app/api/items");
        if (!response.ok) {
          throw new Error(`Ошибка загрузки данных: ${response.status}`);
        }
        const data: BikeType[] = await response.json();
        setBikes(data);
      } catch (error) {
        console.error("Ошибка при загрузке велосипедов:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBikes();
  }, []);

  return (
    <StateContext.Provider value={{ bikes, isLoading }}>
      {children}
    </StateContext.Provider>
  );
};

type Props = {
  children: React.ReactNode;
};


