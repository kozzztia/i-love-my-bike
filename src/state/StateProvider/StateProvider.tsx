// StateProvider.tsx
import React, { useState, useEffect } from "react";
import { StateContext} from "./StateContext";
import { BikeType } from "../../types/BikeType";

export const StateProvider: React.FC<Props> = ({ children }) => {
  const [bikes, setBikes] = useState<BikeType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  

  useEffect(() => {
    const mockBikes: BikeType[] | [] = [
      {
        id: 1,
        name: "Mountain Pro",
        title: "Top Mountain Bike",
        category: "MTB",
        color: ["Red", "Black"],
        company: "Alpine Co",
        country: "USA",
        count: 10,
        description: "A professional-grade mountain bike.",
        detailsjson: {
          condition: "New",
          frame_size: "L",
          model_year: "2023",
          frame_material: "Carbon Fiber",
        },
        icon: "../../../public/mock.jpeg",
        link: ["../../../public/mock.jpeg", "../../../public/mock.jpeg", "../../../public/mock.jpeg", "../../../public/mock.jpeg"],
        price: 899.99,
        rating: 9,
        sale: true,
        status: "active",
        iswotch: true,
      },
      {
        id: 2,
        name: "Urban Cruiser",
        title: "City Bike",
        category: "ROAD",
        color: ["Blue", "White"],
        company: "Urban Rides",
        country: "Germany",
        count: 5,
        description: "Perfect for daily commutes in the city.",
        detailsjson: {
          condition: "Like New",
          frame_size: "M",
          model_year: "2022",
          frame_material: "Aluminum",
        },
        icon: "../../../public/mock.jpeg",
        link: ["../../../public/mock.jpeg"],
        price: 499.99,
        rating: 8,
        sale: false,
        status: "inactive",
        iswotch: false,
      },
      {
        id: 3,
        name: "Speed Racer",
        title: "High-Speed Road Bike",
        category: "BMX",
        color: ["Yellow", "Black"],
        company: "Speed Co",
        country: "Italy",
        count: 8,
        description: "Designed for speed and performance.",
        detailsjson: {
          condition: "New",
          frame_size: "S",
          model_year: "2023",
          frame_material: "Carbon Fiber",
        },
        icon: "../../../public/mock.jpeg",
        link: ["../../../public/mock.jpeg", "../../../public/mock.jpeg", "../../../public/mock.jpeg", "/../../../public/mock.jpeg"],
        price: 1299.99,
        rating: 7,
        sale: true,
        status: "inactive",
        iswotch: true,
      },
      {
        id: 4,
        name: "Kids Joy",
        title: "Bike for Kids",
        category: "MTB",
        color: ["Pink", "Green"],
        company: "PlayBikes",
        country: "Canada",
        count: 15,
        description: "A safe and fun bike for kids.",
        detailsjson: {
          condition: "New",
          frame_size: "XS",
          model_year: "2023",
          frame_material: "Steel",
        },
        icon: "../../../public/mock.jpeg",
        link: ["../../../public/mock.jpeg", "../../../public/mock.jpeg", "../../../public/mock.jpeg", "../../../public/mock.jpeg"],
        price: 199.99,
        rating: 6,
        sale: false,
        status: "inactive",
        iswotch: false,
      },
    ];
    
    const fetchBikes = async () => {
      try {
        const response = await fetch("https://funny-fudge-ddda7b.netlify.app/api/items");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: BikeType[] = await response.json();
        setBikes(data);

      } catch (error) {
        if (error instanceof Error) {
          setBikes(mockBikes);
          setError(`Error: ${error.message}`);
        } else {
          setError("unknown error ");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchBikes();
  }, []);

  return (
    <StateContext.Provider value={{ bikes, isLoading, error}}>
      {children}
    </StateContext.Provider>
  );
};

type Props = {
  children: React.ReactNode;
};


