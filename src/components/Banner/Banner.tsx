import { useEffect, useState } from 'react';
import style from './style.module.css';
import { navLinks } from '../../consts/consts';
import { getDictionary } from '../../consts/dictionary';
import { BikeType } from '../../types/BikeType';
import { NavLink } from 'react-router-dom';
import Preloader from '../ui-kit/Preloader/Preloader';

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
      {
        isLoading ? <Preloader /> : <PromotionCard data={bannerBike} />
      }

    </div>
  );
};

export default Banner;

const PromotionCard: React.FC<PromotionCardProps> = ({ data }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className={style.promotionCard}>
      <figure className={[style.cardImage, isImageLoaded ? style.visible : style.hidden].join(' ')}>
        <img src={data?.link[0]} alt={data?.name} onLoad={handleImageLoad} />
        <figcaption>{data?.name}</figcaption>
      </figure>
      <article className={[style.cardArticle, isImageLoaded ? style.visible : style.hidden].join(' ')}>
        <h3>{data?.title}</h3>
        <p>{data?.description}</p>
        <NavLink to={`/${data?.category}/${data?.id}`.toLowerCase()}>
          {`Link to ${data?.name}`}
        </NavLink>
      </article>
    </div>
  );
};

type PromotionCardProps = {
  data: BikeType | null;
};

