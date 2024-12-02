import { useParams } from 'react-router-dom'
import PageContainer from './components/ui-kit/PageContainer/PageContainer'
import { getDictionary } from './consts/dictionary'
import { useSingleBike } from './state/StateProvider/useStateValue'
import { useEffect } from 'react'
import SingleBike from './components/SingleBike/SingleBike'

const BikePage = () => {
  const { id, category } = useParams<{ id: string; category: string }>();
  const singleBike = useSingleBike(id!);

  useEffect(()=>{
    window.scrollTo(0, 0)
  })

  return (
    <PageContainer hash="bike" isSingle={true} isDecore={false}>
      <h4>{getDictionary("bikeTitle") + " " + id + " " + category}</h4>
      <SingleBike singleBike={singleBike}/>
    </PageContainer>
  );
};

export default BikePage