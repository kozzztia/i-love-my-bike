import { useParams } from 'react-router-dom'
import PageContainer from './components/ui-kit/PageContainer/PageContainer'
import { getDictionary } from './consts/dictionary'
import { useSingleBike } from './state/StateProvider/useStateValue'
import { useEffect } from 'react'
import SingleBike from './components/SingleBike/SingleBike'
import Preloader from './components/ui-kit/Preloader/Preloader'

const BikePage = () => {
  const { id, category } = useParams<{ id: string; category: string }>();
  const singleBike = useSingleBike(Number(id));

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  if(!singleBike){
    return <Preloader color={'var(--element-background-color)'}/>
  }
  return (
    <PageContainer hash="bike" isSingle={true} isDecore={false}>
      <h4>{getDictionary("bikeTitle") + " " + id + " " + category}</h4>
      <SingleBike singleBike={singleBike}/>
    </PageContainer>
  );
};

export default BikePage