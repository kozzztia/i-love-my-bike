import { useEffect, useState } from 'react';
import style from './style.module.css';
import { navLinks } from '../../consts/consts';
import { getDictionary } from '../../consts/dictionary';
import PromotionCard from '../PromotionCard/PromotionCard';

const Banner = () => {

  return (
    <div id={navLinks[0].url} className={style.banner}>
      <h2>{getDictionary('bannerTitle')}</h2>
        <PromotionCard />
    </div>
  );
};

export default Banner;
