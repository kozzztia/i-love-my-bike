import { getDictionary } from '../../consts/dictionary';
import { BannerBikeType } from '../../types/BikeType';
import PageContainer from '../ui-kit/PageContainer/PageContainer';
import BikeLink from '../ui-kit/BikeLink/BikeLink';
import BikeImage from '../ui-kit/BikeImage/BikeImage';
import style from './style.module.css'


const Top: React.FC<Props> = ({ bikes }) => {
  if (!bikes) {
    return null
  }
  return (
    <PageContainer hash="top" isSingle={false} isDecore={false} className={style.top}>
      {
        bikes.map((bike) => (
          <div key={bike.id} className={style.item}>       
            <article>
              <h4>{bike.title}</h4>
              <p>{bike.price}$</p>
              <p>{bike.category}</p>
              <p>{bike.description}</p>
              <BikeLink title={`${getDictionary('linkTitle')} ${bike.name}`} url={`/${bike.category}/${bike.id}`} />
            </article>
            <BikeImage src={bike.icon} name={bike.name} />
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