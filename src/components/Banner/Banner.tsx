import { getDictionary } from '../../consts/dictionary';
import { BikeType } from '../../types/BikeType';
import PageContainer from '../ui-kit/PageContainer/PageContainer';

const Banner: React.FC<Props> = ({bike}) => {
  if (!bike) {
    return null;
  }else{
    return (
      <PageContainer  hash="promotion" isSingle={false} isDecore={true}>
        <h4>{getDictionary('bannerTitle') + ' ' + bike.name}</h4>
        <p>{bike.description}</p>
        <img  src={bike.icon} alt={bike.name} width={100} height={100}/>
      </PageContainer>
    );
  }
};

type Props = {
  bike: BikeType | null
}

export default Banner;
