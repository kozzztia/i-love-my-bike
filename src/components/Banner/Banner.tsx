import { useEffect, useState } from 'react';
import { getDictionary } from '../../consts/dictionary';
import { BikeType } from '../../types/BikeType';
import { NavLink } from 'react-router-dom';
import Preloader from '../ui-kit/Preloader/Preloader';
import PageContainer from '../ui-kit/PageContainer/PageContainer';

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
    <PageContainer  hash="promotion" isSingle={false} isDecore={true}>
      <h2>{getDictionary('bannerTitle')}</h2>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <h4>{bannerBike?.title}</h4>
          <NavLink to={`${bannerBike?.category.toLocaleLowerCase()}/${bannerBike?.id}`}>link to bike</NavLink>
        </>
      )
      }
    </PageContainer>
  );
};

export default Banner;
