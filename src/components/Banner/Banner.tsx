import { useEffect, useState } from 'react';
import style from './style.module.css';
import { navLinks } from '../../consts/consts';
import { getDictionary } from '../../consts/dictionary';
import { BikeType } from '../../types/BikeType';
import { NavLink } from 'react-router-dom';
import Preloader from '../ui-kit/Preloader/Preloader';

const Banner = () => {
  const [bannerBike, setBannerBike] = useState<null | BikeType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchWithRetries = (url: string, maxRetries: number, interval: number) => {
    let attempts = 0;

    const fetchAttempt = () => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setBannerBike(data[0]);
          setIsLoading(false);
        })
        .catch((error) => {
          attempts++;
          console.error(`Attempt ${attempts} failed:`, error);
          if (attempts < maxRetries) {
            setTimeout(fetchAttempt, interval); // Повторная попытка через интервал
          } else {
            console.error('Max retries reached. Failed to fetch banner bike.');
            setIsLoading(false);
          }
        });
    };

    fetchAttempt(); // Запуск первой попытки
  };

  useEffect(() => {
    fetchWithRetries('https://funny-fudge-ddda7b.netlify.app/api/randomItem', 5, 2000); // 5 попыток с интервалом 2 секунды
  }, []);

  return (
    <div id={navLinks[0].url} className={style.banner}>
      <h2>{getDictionary('bannerTitle')}</h2>
      {isLoading ? <Preloader /> : <PromotionCard data={bannerBike} />}
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
        <figcaption className={style.rating}>{data?.rating}</figcaption>
        <figcaption className={style.price}>{`${data?.price} $`}</figcaption> 
        <figcaption className={style.name}>{data?.name}</figcaption>
      </figure>
      <article className={[style.cardArticle, isImageLoaded ? style.visible : style.hidden].join(' ')}>
        <h3 className={style.title}>{data?.title}</h3>
        <p className={style.description}>{data?.description}</p>
        <p className={style.country}>{data?.country + ' : ' + data?.company}</p>
        <NavLink className={style.link} to={`/${data?.category}/${data?.id}`.toLowerCase()}>
          {`Link to ${data?.name}`}
        </NavLink>
      </article>
    </div>
  );
};

type PromotionCardProps = {
  data: BikeType | null;
};
