import { useEffect, useState } from 'react';
import style from './style.module.css';
import { navLinks } from '../../consts/consts';
import { getDictionary } from '../../consts/dictionary';
import { BikeType } from '../../types/BikeType';
import PromotionCard from '../PromotionCard/PromotionCard';

const Banner = () => {
  const [bannerBike, setBannerBike] = useState<null | BikeType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Добавлено состояние загрузки

  useEffect(() => {
    fetch('https://funny-fudge-ddda7b.netlify.app/api/randomItem')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setBannerBike(data[0]);
        setIsLoading(false); // Завершить загрузку
      })
      .catch((error) => {
        console.error('Failed to fetch banner bike:', error);
        setIsLoading(false); // Завершить загрузку даже при ошибке
      });
  }, []);

  return (
    <div id={navLinks[0].url} className={style.banner}>
      <h2>{getDictionary('bannerTitle')}</h2>
        <PromotionCard data={bannerBike} isLoading = {isLoading}/>
    </div>
  );
};

export default Banner;
