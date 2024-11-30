import { getDictionary } from '../../consts/dictionary';
import { BikeType } from '../../types/BikeType';
import PageContainer from '../ui-kit/PageContainer/PageContainer';


const Top: React.FC<Props> = ({bikes}) => { 
  if(!bikes){
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
            <img  src={bike.icon} alt={bike.name} width={100} height={100}/>
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