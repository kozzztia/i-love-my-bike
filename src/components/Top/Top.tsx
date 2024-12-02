import { getDictionary } from '../../consts/dictionary';
import { BikeType } from '../../types/BikeType';
import PageContainer from '../ui-kit/PageContainer/PageContainer';
import BikeLink from '../ui-kit/BikeLink/BikeLink';


const Top: React.FC<Props> = ({ bikes }) => {
  if (!bikes) {
    return null
  }
  return (
    <PageContainer hash="top" isSingle={false} isDecore={false}>
      <h4>{getDictionary('topTitle')}</h4>
      {
        bikes.map((bike) => (
          <div key={bike.id}>
            <h5>{bike.name}</h5>
            <p>{bike.description}</p>
            <img src={bike.icon} alt={bike.name} width={100} height={100} />
            <BikeLink title={bike.name} url={`/${bike.category}/${bike.id}`}/>
          </div>
        ))
      }
    </PageContainer>
  )
}

type Props = {
  bikes: BikeType[] | null;
}

export default Top