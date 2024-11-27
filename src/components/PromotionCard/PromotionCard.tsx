
import style from './style.module.css'
import Image from '../Image/Image';
import Article from '../Article/Article';
import { useEffect } from 'react';

const PromotionCard  = () => {
  useEffect(() => {
    console.log('promotion')
  },[]) 

  return (
    <div className={style.promotionCard}>
      <Image className={style.cardImage}/>
      <Article className={style.cardArticle}/>       
    </div>
  )
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
  