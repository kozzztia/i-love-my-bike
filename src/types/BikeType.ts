export type BikeDetailsType = {
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
    detailsjson: BikeDetailsType;
    icon: string;
    link: string[];
    price: number;
    rating: number;
    sale: boolean;
    status: string;
    iswotch: boolean;
  };

export type BannerBikeType = {
  title: string, 
  price: number, 
  rating: number, 
  status: string, 
  description: string, 
  icon: string, 
  name: string, 
  id: number, 
  category: string
}