import { BikeType } from '../../types/BikeType';
import style from './style.module.css'

const PromotionCard: React.FC<PromotionCardProps> = ({data , className}) => {
    console.log(data)
  return (
    <div className={[style.promotionCard, className].join(' ')}>
        <img src={data.link[0]} alt={data.name} srcSet={data.icon} />
        
    </div>
  )
}
type PromotionCardProps = {
    data : BikeType,
    className?: string,
}


export default PromotionCard

// export  type BikeType = {
//     id: number;
//     name: string;
//     title: string;
//     category: string;
//     color: string[];
//     company: string;
//     country: string;
//     count: number;
//     description: string;
//     details: BikeDetails;
//     icon: string;
//     link: string[];
//     price: number;
//     rating: number;
//     sale: boolean;
//     status: string;
//     iswotch: boolean;
//   };
  