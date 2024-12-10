import React from 'react'
import { BikeType } from '../../types/BikeType';
import style from './style.module.css'
import BikeLink from '../ui-kit/BikeLink/BikeLink';
import BikeTable from '../ui-kit/BikeTable/BikeTable';
import BikeSlider from '../ui-kit/BikeSlider/BikeSlider';
import Preloader from '../ui-kit/Preloader/Preloader';
import BikeImage from '../ui-kit/BikeImage/BikeImage';
import BikeArticle from '../ui-kit/BikeArticle/BikeArticle';
import ToggleButton from '../ui-kit/ToggleButton/ToggleButton';

const SingleBike: React.FC<Props> = ({ singleBike, className }) => {



  if (!singleBike) {
    return <Preloader />
  }

  return (
    <div className={[style.bike, className].join(' ')}>

      <BikeImage
        className={style.singleImage}
        src={singleBike?.icon} title={singleBike?.title} name={singleBike?.name} />
      <BikeArticle
        className={style.singleArticle}
        article={{
          price: singleBike?.price,
          rating: singleBike?.rating,
          description: singleBike?.description,
          country: singleBike?.country,
          company: singleBike?.company,
          color: singleBike?.color
        }} />

      <BikeTable
        className={style.singleTable}
        details={singleBike?.detailsjson} />

      <BikeSlider
        className={style.singleSlider}
        images={singleBike?.link} />

      <ToggleButton id={singleBike?.id} className={style.singleButton} />
      <BikeLink className={style.singleLink}
        title={`to ${singleBike?.category}`}
        url={`/${singleBike?.category}`} />
    </div>
  )
}

export default SingleBike;

type Props = {
  singleBike: BikeType | null;
  className?: string
}