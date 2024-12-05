import { getDictionary } from '../../consts/dictionary';
import PageContainer from '../ui-kit/PageContainer/PageContainer';
import BikeLink from '../ui-kit/BikeLink/BikeLink';
import { BannerBikeType } from '../../types/BikeType';
import style from "./style.module.css"
import BikeImage from '../ui-kit/BikeImage/BikeImage';
import BikeDescription from '../ui-kit/BikeDescription/BikeDescription';

const Banner: React.FC<Props> = ({ bike }) => {
  if (!bike) {
    return null;
  } else {
    return (
      <PageContainer hash="promotion" isSingle={false} isDecore={true} className={style.banner}>
        <h4 className={style.title}>{getDictionary('bannerTitle')}</h4>

        <BikeImage
          src={bike.icon}
          name={bike.name}
          title={bike.title}
          className={style.image}
        />

        <BikeDescription
          title={bike.title}
          price={bike.price}
          rating={bike.rating}
          descritpion={bike.description}
          status={bike.status}
          className={style.description}
        />

        <BikeLink
          title={`${getDictionary('linkTitle')} ${bike.name}`}
          url={`/${bike.category}/${bike.id}`}
          className={style.link}
        />

      </PageContainer>
    );
  }
};

type Props = {
  bike: BannerBikeType | null
}

export default Banner;
