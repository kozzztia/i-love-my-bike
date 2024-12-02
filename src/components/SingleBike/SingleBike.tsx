import React from 'react'
import { BikeType } from '../../types/BikeType';
import style from './style.module.css'
import BikeLink from '../ui-kit/BikeLink/BikeLink';

const SingleBike: React.FC<Props> = ({singleBike, className}) => {
  return (
    <div className={[style.bike, className].join(' ')}>
      <h4>{singleBike?.title}</h4>
      <img src={singleBike?.icon} alt={singleBike?.name} width={200} height={200} />
      <p>{singleBike?.description}</p>
      <BikeLink title={`to ${singleBike?.category}`} url={`/${singleBike?.category}`}/>
    </div>
  )
}

export default SingleBike;

type Props = {
  singleBike: BikeType | null;
  className?: string
}