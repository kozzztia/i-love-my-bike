type BikeDetails = {
    condition: string;
    frame_size: string;
    model_year: string;
    frame_material: string;
  };
  
export  type BikeType = {
    id: number;
    name: string;
    title: string;
    category: string;
    color: string[];
    company: string;
    country: string;
    count: number;
    description: string;
    details: BikeDetails;
    icon: string;
    link: string[];
    price: number;
    rating: number;
    sale: boolean;
    status: string;
    iswotch: boolean;
  };
  