
import style from './style.module.css'
import Image from '../Image/Image';
import Article from '../Article/Article';
import { BikeType } from '../../types/BikeType';

const PromotionCard: React.FC<Props>  = ({data, isLoading}) => {
  console.log(data)
  return (
    <div className={style.promotionCard}>
      {isLoading && <div>Loading...</div>}
      <Image className={style.cardImage}/>
      <Article className={style.cardArticle}/>       
    </div>
  )
}



export default PromotionCard

type Props = {
  data: BikeType | null;
  isLoading: boolean;
};

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
  