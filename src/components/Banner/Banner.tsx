import PageContainer from '../ui-kit/PageContainer/PageContainer';
import { BannerBikeType } from '../../types/BikeType';
import style from "./style.module.css"
import BikeImage from '../ui-kit/BikeImage/BikeImage';
import BikeDescription from '../ui-kit/BikeDescription/BikeDescription';

const Banner: React.FC<Props> = ({ bike }) => {
  console.log(bike)
  if (!bike) {
    return null;
  } else {
    return (
      <PageContainer hash="promotion" isSingle={false} isDecore={true} className={style.banner}>
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
          id={bike.id}
          category={bike.category}
          className={style.description}
        />
      </PageContainer>
    );
  }
};

type Props = {
  bike: BannerBikeType | null
}

export default Banner;
