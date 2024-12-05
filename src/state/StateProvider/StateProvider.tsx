// StateProvider.tsx
import React, { useState, useEffect } from "react";
import { StateContext} from "./StateContext";
import { BikeType } from "../../types/BikeType";

export const StateProvider: React.FC<Props> = ({ children }) => {
  const [bikes, setBikes] = useState<BikeType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchBikes = async (retries = 5, delay = 2000) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch("https://funny-fudge-ddda7b.netlify.app/api/items");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: BikeType[] = await response.json();
        setBikes(data);
        setError(null); // Очистить ошибку, если данные успешно загружены
        return; // Успешная загрузка, выход из функции
      } catch (error) {
        if (attempt === retries) {
          setError(error instanceof Error ? `Error: ${error.message}` : "Unknown error");
        } else {
          console.warn(`Retrying... (${attempt}/${retries})`);
        }
        // Ждем перед повторной попыткой
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
    setIsLoading(false); // Остановить загрузку после всех попыток
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


