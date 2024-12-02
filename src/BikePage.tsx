import { useParams } from 'react-router-dom'
import PageContainer from './components/ui-kit/PageContainer/PageContainer'
import { getDictionary } from './consts/dictionary'
import BikeLink from './components/ui-kit/BikeLink/BikeLink'
import { useSingleBike } from './state/StateProvider/useStateValue'

const BikePage = () => {
  const { id, category } = useParams<{ id: string; category: string }>();
  const singleBike = useSingleBike(id!);

  return (
    <PageContainer hash="bike" isSingle={true} isDecore={false}>
      <h4>{getDictionary("bikeTitle") + " " + id + " " + category}</h4>
      <BikeLink title={`to ${category}`} url={`/${category}`} />
      <img src={singleBike.icon} alt={singleBike.name}/>
    </PageContainer>
  );
};

export default BikePage