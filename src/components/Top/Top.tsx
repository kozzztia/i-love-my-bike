import { getDictionary } from '../../consts/dictionary';
import { BannerBikeType } from '../../types/BikeType';
import PageContainer from '../ui-kit/PageContainer/PageContainer';
import BikeLink from '../ui-kit/BikeLink/BikeLink';


const Top: React.FC<Props> = ({ bikes }) => {
  console.log(bikes)
  if (!bikes) {
    return null
  }
  return (
    <PageContainer hash="top" isSingle={false} isDecore={false}>
      <h4>{getDictionary('topTitle')}</h4>
      {
        bikes.map((bike) => (
          <div key={bike.id}>
            <h4>{getDictionary('bannerTitle') + ' ' + bike.title}</h4>
            <p>{bike.price}</p>
            <p>{bike.rating}</p>
            <p>{bike.status}</p>
            <p>{bike.description}</p>
            <img src={bike.icon} alt={bike.name} width={100} height={100} />
            <BikeLink title={`${getDictionary('linkTitle')} ${bike.name}`} url={`/${bike.category}/${bike.id}`} />
          </div>
        ))
      }
    </PageContainer>
  )
}

type Props = {
  bikes: BannerBikeType[] | null;
}

export default Top