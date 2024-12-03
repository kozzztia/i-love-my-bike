import React from 'react'
import { BikeType } from '../../types/BikeType';
import style from './style.module.css'
import BikeLink from '../ui-kit/BikeLink/BikeLink';
import { getDictionary } from '../../consts/dictionary';
import BikeTable from '../ui-kit/BikeTable/BikeTable';
import BikeSlider from '../ui-kit/BikeSlider/BikeSlider';
import Preloader from '../ui-kit/Preloader/Preloader';

const SingleBike: React.FC<Props> = ({ singleBike, className }) => {
  if(!singleBike){
    return <Preloader />
  }

  return (
    <div className={[style.bike, className].join(' ')}>


      <figure style={{ width: '200px', height: '200px' }}>
        <img src={singleBike?.icon} alt={singleBike?.name} width={200} height={200} />
        <figcaption><h4>{getDictionary("bikeTitle") + " " + singleBike?.title}</h4></figcaption>
      </figure>
      <article style={{ width: '300px', height: '300px' }}>
        <h6>{singleBike?.price} {singleBike?.rating}</h6>
        <p>{singleBike?.description}</p>
        <p>{singleBike?.country}: {singleBike?.company}</p>
        {
          singleBike?.color.map((color) => (
            <p key={color}>{color}</p>
          ))
        }
      </article>

      <BikeTable details={singleBike?.detailsjson} />

      <BikeSlider images={singleBike?.link}/>





      <button>send to basket</button>

      <BikeLink title={`to ${singleBike?.category}`} url={`/${singleBike?.category}`} />
    </div>
  )
}

export default SingleBike;

type Props = {
  singleBike: BikeType | null;
  className?: string
}