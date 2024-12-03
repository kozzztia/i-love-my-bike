import { getDictionary } from '../../consts/dictionary';
import PageContainer from '../ui-kit/PageContainer/PageContainer';
import BikeLink from '../ui-kit/BikeLink/BikeLink';
import { BannerBikeType } from '../../types/BikeType';
import style from "./style.module.css"

const Banner: React.FC<Props> = ({bike}) => {
  if (!bike) {
    return null;
  }else{
    return (
      <PageContainer  hash="promotion" isSingle={false} isDecore={true} className={style.banner}>
        <h4>{getDictionary('bannerTitle') + ' ' + bike.title}</h4>
        <p>{bike.price}</p>
        <p>{bike.rating}</p>
        <p>{bike.status}</p>
        <p>{bike.description}</p>
        <img  src={bike.icon} alt={bike.name} width={100} height={100}/>
        <BikeLink title={`${getDictionary('linkTitle')} ${bike.name}`} url={`/${bike.category}/${bike.id}`}/>
      </PageContainer>
    );
  }
};

type Props = {
  bike: BannerBikeType | null
}

export default Banner;
