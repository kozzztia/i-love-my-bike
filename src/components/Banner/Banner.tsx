import { getDictionary } from '../../consts/dictionary';
import { BikeType } from '../../types/BikeType';
import PageContainer from '../ui-kit/PageContainer/PageContainer';
import BikeLink from '../ui-kit/BikeLink/BikeLink';

const Banner: React.FC<Props> = ({bike}) => {
  if (!bike) {
    return null;
  }else{
    return (
      <PageContainer  hash="promotion" isSingle={false} isDecore={true}>
        <h4>{getDictionary('bannerTitle') + ' ' + bike.name}</h4>
        <p>{bike.description}</p>
        <img  src={bike.icon} alt={bike.name} width={100} height={100}/>
        <BikeLink title={`${getDictionary('linkTitle')} ${bike.name}`} url={`/${bike.category}/${bike.id}`}/>
      </PageContainer>
    );
  }
};

type Props = {
  bike: BikeType | null
}

export default Banner;
