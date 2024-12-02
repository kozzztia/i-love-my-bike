// StateProvider.tsx
import React, { useState, useEffect } from "react";
import { StateContext} from "./StateContext";
import { BikeType } from "../../types/BikeType";

export const StateProvider: React.FC<Props> = ({ children }) => {
  const [bikes, setBikes] = useState<BikeType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
        if (error instanceof Error) {
          setError(`Ошибка при загрузке велосипедов: ${error.message}`);
        } else {
          setError("Неизвестная ошибка при загрузке велосипедов");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchBikes();
  }, []);

  return (
    <StateContext.Provider value={{ bikes, isLoading , error}}>
      {children}
    </StateContext.Provider>
  );
};

type Props = {
  children: React.ReactNode;
};


