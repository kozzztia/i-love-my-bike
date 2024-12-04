import { getDictionary } from '../../consts/dictionary';
import PageContainer from '../ui-kit/PageContainer/PageContainer';
import BikeLink from '../ui-kit/BikeLink/BikeLink';
import { BannerBikeType } from '../../types/BikeType';
import style from "./style.module.css"
import BikeImage from '../ui-kit/BikeImage/BikeImage';

const Banner: React.FC<Props> = ({bike}) => {
  if (!bike) {
    return null;
  }else{
    return (
      <PageContainer  hash="promotion" isSingle={false} isDecore={true} className={style.banner}>
        <h4>{getDictionary('bannerTitle')}</h4>
        <BikeImage src={bike.icon} name={bike.name} title={bike.title}/>
        <p>{bike.price}</p>
        <p>{bike.rating}</p>
        <p>{bike.status}</p>
        <p>{bike.description}</p>
        <BikeLink title={`${getDictionary('linkTitle')} ${bike.name}`} url={`/${bike.category}/${bike.id}`}/>
      </PageContainer>
    );
  }
};

type Props = {
  bike: BannerBikeType | null
}

export default Banner;
